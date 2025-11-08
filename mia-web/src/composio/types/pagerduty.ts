// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PAGERDUTY's PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER tool input.
 */
type PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Service  Id
   * @description Id
   */
  service__id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER tool output.
 */
type PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS tool input.
 */
type PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS_INPUT = {
  /**
   * Aggregate Unit
   * @description The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period.
   * @enum {string}
   */
  aggregate_unit?: "day" | "week" | "month";
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Pd  Advance  Used
   * @description If true, only incidents where PD Advance was used will be included in the results, and vice versa. If omitted, all incidents will be included.
   */
  filters__pd__advance__used?: boolean;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS tool output.
 */
type PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES tool input.
 */
type PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES_INPUT = {
  /**
   * Relationships
   * @description List of all service dependencies to be created.
   */
  relationships?: {
      /**
       * Dependent  Service  Id
       * @description Id
       */
      dependent__service__id?: string;
      /**
       * Dependent  Service  Type
       * @description Type
       */
      dependent__service__type?: string;
      /**
       * Supporting  Service  Id
       * @description Id
       */
      supporting__service__id?: string;
      /**
       * Supporting  Service  Type
       * @description Type
       */
      supporting__service__type?: string;
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES tool output.
 */
type PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION tool input.
 */
type PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION tool output.
 */
type PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS tool input.
 */
type PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS tool output.
 */
type PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID tool input.
 */
type PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID tool output.
 */
type PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS tool input.
 */
type PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS_INPUT = {
  /**
   * Service Id
   * @description Specifies a filter to limit the scope of reporting to a particular service
   */
  service_id?: string;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Suspended By
   * @description Specifies a filter to scope the response to either alerts suspended by Auto Pause or Event Rules.
   */
  suspended_by?: unknown;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS tool output.
 */
type PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS tool input.
 */
type PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS tool output.
 */
type PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_AN_INCIDENT_TYPE tool input.
 */
type PAGERDUTY_CREATE_AN_INCIDENT_TYPE_INPUT = {
  /**
   * Incident  Type  Description
   * @description The description of the Incident Type.
   */
  incident__type__description?: string;
  /**
   * Incident  Type  Display  Name
   * @description The display name of the Incident Type. Usage of the prefix `PD`, `PagerDuty`, `Default` is prohibited.
   */
  incident__type__display__name?: string;
  /**
   * Incident  Type  Enabled
   * @description Whether the Incident Type is enabled. Defaults to true if not provided.
   */
  incident__type__enabled?: boolean;
  /**
   * Incident  Type  Name
   * @description The name of the Incident Type. Usage of the suffix `_default` is prohibited. This cannot be changed once the incident type has been created.
   */
  incident__type__name?: string;
  /**
   * Incident  Type  Parent  Type
   * @description The parent type of the Incident Type. Either name or id of the parent type can be used.
   */
  incident__type__parent__type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_AN_INCIDENT_TYPE tool output.
 */
type PAGERDUTY_CREATE_AN_INCIDENT_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT tool input.
 */
type PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT_INPUT = {
  /**
   * Runner
   * @description Runner
   */
  runner?: {
      [key: string]: unknown;
  };
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT tool output.
 */
type PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE tool input.
 */
type PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_INPUT = {
  /**
   * Field  Data  Type
   * @description The data type of the custom field.
   */
  field__data__type?: string;
  /**
   * Field  Default  Value
   * @description The default value of the custom field.
   */
  field__default__value?: string;
  /**
   * Field  Description
   * @description The description of the custom field.
   */
  field__description?: string;
  /**
   * Field  Display  Name
   * @description The display name of the Incident Type.
   */
  field__display__name?: string;
  /**
   * Field  Enabled
   * @description Whether the custom field is enabled.
   */
  field__enabled?: boolean;
  /**
   * Field  Field  Options
   * @description The options for the custom field. Can only be applied to fields with a type of multi_value or multi_value_fixed.
   */
  field__field__options?: unknown[];
  /**
   * Field  Field  Type
   * @description The field type of the custom field.
   * @enum {string}
   */
  field__field__type?: "single_value" | "single_value_fixed" | "multi_value" | "multi_value_fixed";
  /**
   * Field  Name
   * @description The name of the custom field.
   */
  field__name?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE tool output.
 */
type PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD tool input.
 */
type PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_INPUT = {
  /**
   * Field  Option  Data  Data  Type
   * @description The data type of the Field Option for the Custom Field.
   */
  field__option__data__data__type?: string;
  /**
   * Field  Option  Data  Value
   * @description The value of the Field Option for the Custom Field.
   */
  field__option__data__value?: string;
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD tool output.
 */
type PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_RULESET tool input.
 */
type PAGERDUTY_CREATE_A_RULESET_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_RULESET tool output.
 */
type PAGERDUTY_CREATE_A_RULESET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_TRIGGER tool input.
 */
type PAGERDUTY_CREATE_A_TRIGGER_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_A_TRIGGER tool output.
 */
type PAGERDUTY_CREATE_A_TRIGGER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_BUSINESS_SERVICE tool input.
 */
type PAGERDUTY_CREATE_BUSINESS_SERVICE_INPUT = {
  /**
   * Business  Service  Description
   * @description The description of the Business Service.
   */
  business__service__description?: string;
  /**
   * Business  Service  Name
   * @description The name of the Business Service.
   */
  business__service__name?: string;
  /**
   * Business  Service  Point  Of  Contact
   * @description The owner of the Business Service.
   */
  business__service__point__of__contact?: string;
  /**
   * Business  Service  Team  Id
   * @description The Team ID
   */
  business__service__team__id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_BUSINESS_SERVICE tool output.
 */
type PAGERDUTY_CREATE_BUSINESS_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_ESCALATION_POLICY tool input.
 */
type PAGERDUTY_CREATE_ESCALATION_POLICY_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_ESCALATION_POLICY tool output.
 */
type PAGERDUTY_CREATE_ESCALATION_POLICY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_EVENT_ORCHESTRATION tool input.
 */
type PAGERDUTY_CREATE_EVENT_ORCHESTRATION_INPUT = {
  /**
   * Orchestration  Created  At
   * Format: date-time
   * @description The date the Orchestration was created at.
   */
  orchestration__created__at?: string;
  /**
   * Orchestration  Created  By  Id
   * @description Id
   */
  orchestration__created__by__id?: string;
  /**
   * Orchestration  Created  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__created__by__self?: string;
  /**
   * Orchestration  Created  By  Type
   * @description A string that determines the schema of the object
   */
  orchestration__created__by__type?: string;
  /**
   * Orchestration  Description
   * @description A description of this Orchestration"s purpose.
   */
  orchestration__description?: string;
  /**
   * Orchestration  Id
   * @description ID of the Orchestration.
   */
  orchestration__id?: string;
  /**
   * Orchestration  Integrations
   * @description Integrations
   */
  orchestration__integrations?: {
      /**
       * Id
       * @description ID of the Integration.
       */
      id?: string;
      /**
       * Label
       * @description Name of the Integration.
       */
      label?: string;
      /**
       * Parameters  Routing  Key
       * @description Routing Key used to send Events to this Orchestration
       */
      parameters__routing__key?: string;
      /**
       * Parameters  Type
       * @description Type
       * @default global
       */
      parameters__type: string;
  }[];
  /**
   * Orchestration  Name
   * @description Name of the Orchestration.
   */
  orchestration__name?: string;
  /**
   * Orchestration  Routes
   * @description Number of different Service Orchestration being routed to
   */
  orchestration__routes?: number;
  /**
   * Orchestration  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__self?: string;
  /**
   * Orchestration  Team  Id
   * @description Id
   */
  orchestration__team__id?: string;
  /**
   * Orchestration  Team  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__team__self?: string;
  /**
   * Orchestration  Team  Type
   * @description A string that determines the schema of the object
   */
  orchestration__team__type?: string;
  /**
   * Orchestration  Updated  At
   * Format: date-time
   * @description The date the Orchestration was last updated.
   */
  orchestration__updated__at?: string;
  /**
   * Orchestration  Updated  By  Id
   * @description Id
   */
  orchestration__updated__by__id?: string;
  /**
   * Orchestration  Updated  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__updated__by__self?: string;
  /**
   * Orchestration  Updated  By  Type
   * @description A string that determines the schema of the object
   */
  orchestration__updated__by__type?: string;
  /**
   * Orchestration  Version
   * @description Version of the Orchestration.
   */
  orchestration__version?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_EVENT_ORCHESTRATION tool output.
 */
type PAGERDUTY_CREATE_EVENT_ORCHESTRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET tool input.
 */
type PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET tool output.
 */
type PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_EXTENSION_OBJECT tool input.
 */
type PAGERDUTY_CREATE_EXTENSION_OBJECT_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_EXTENSION_OBJECT tool output.
 */
type PAGERDUTY_CREATE_EXTENSION_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Oncall  Handoff  Notification  Rule  Handoff  Type
   * @description The type of handoff being created.
   * @default both
   * @enum {string}
   */
  oncall__handoff__notification__rule__handoff__type: "both" | "oncall" | "offcall";
  /**
   * Oncall  Handoff  Notification  Rule  Id
   * @description Id
   */
  oncall__handoff__notification__rule__id?: string;
  /**
   * Oncall  Handoff  Notification  Rule  Notify  Advance  In  Minutes
   * @description The delay before firing the rule, in minutes.
   */
  oncall__handoff__notification__rule__notify__advance__in__minutes?: number;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION tool input.
 */
type PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION tool output.
 */
type PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_RECORD tool input.
 */
type PAGERDUTY_CREATE_INCIDENT_RECORD_INPUT = {
  /**
   * Incident  Assignments
   * @description List of users to assign to the incident. Maximum 10 assignees allowed. Important Notes: - Cannot be used with escalation_policy - Users must have access to the service - Assignments override default escalation - Order matters for primary/secondary
   */
  incident__assignments?: {
      /**
       * Assignee  Id
       * @description User"s unique identifier. Found in user profile or via API.
       */
      assignee__id?: string;
      /**
       * Assignee  Type
       * @description Object type for user reference
       */
      assignee__type?: string;
  }[];
  /**
   * Incident  Body  Details
   * @description Comprehensive incident details in structured format. Recommended Structure: ``` CURRENT STATUS: [Brief description of current situation] IMPACT: - Business Impact: [Description] - User Impact: [Number of affected users/systems] - Revenue Impact: [If applicable] ACTIONS TAKEN: 1. [Action 1] 2. [Action 2] METRICS: - Error Rate: [Value] - Response Time: [Value] LINKS: - Dashboard: [URL] - Logs: [URL] - Runbook: [URL] ```
   * @default Incident details pending
   */
  incident__body__details: string;
  /**
   * Incident  Body  Type
   * @description Specifies the type of body content
   * @default Test
   */
  incident__body__type: string;
  /**
   * Incident  Conference  Bridge  Conference  Number
   * @description Phone number with access sequence. Format: "+1-555-123-4567,,,,1234#" Commas (,) represent one-second pauses
   */
  incident__conference__bridge__conference__number?: string;
  /**
   * Incident  Conference  Bridge  Conference  Type
   * @description Platform used for conference bridge. Helps responders prepare right tools.
   * @enum {string}
   */
  incident__conference__bridge__conference__type?: "zoom" | "meet" | "teams" | "webex" | "other";
  /**
   * Incident  Conference  Bridge  Conference  Url
   * Format: uri
   * @description Web conference URL. Should be accessible to all responders.
   * @default https://meet.example.com/incident
   */
  incident__conference__bridge__conference__url: string;
  /**
   * Incident  Incident  Key
   * @description Unique identifier for deduplicating incidents within a service. Best Practice Format: "<source>-<type>-<identifier>-<timestamp>" Examples: - "datadog-cpu-alert-prod-db1-1640995200" - "cloudwatch-memory-warning-cache-1640995200" - "synthetic-api-failure-payments-1640995200" Notes: - Must be unique per service - Used to prevent duplicate incidents - Should be consistent and meaningful
   */
  incident__incident__key?: string;
  /**
   * Incident  Incident  Type  Id
   * @description Unique identifier for incident type
   */
  incident__incident__type__id?: string;
  /**
   * Incident  Incident  Type  Name
   * @description Predefined incident type categories. Used for reporting and analytics.
   * @default engineering_incident
   * @enum {string}
   */
  incident__incident__type__name: "major_incident" | "security_incident" | "engineering_incident" | "customer_incident";
  /**
   * Incident  Incident  Type  Type
   * @description Object type for incident type reference
   * @default incident_type_reference
   */
  incident__incident__type__type: string;
  /**
   * Incident  Priority  Id
   * @description Unique identifier for the priority level. Example: "PRIO123"
   */
  incident__priority__id?: string;
  /**
   * Incident  Priority  Type
   * @description Object type for priority reference
   */
  incident__priority__type?: string;
  /**
   * Incident  Service  Id
   * @description Unique identifier for the PagerDuty service. Found in service settings or via API. Example: "PSVC123"
   */
  incident__service__id?: string;
  /**
   * Incident  Service  Type
   * @description Object type identifier. Always "service_reference" for service objects.
   * @default service_reference
   * @enum {string}
   */
  incident__service__type: "service_reference";
  /**
   * Incident  Title
   * @description A clear, descriptive title for the incident that helps responders quickly understand the issue. Best Practice Format: "<System/Service> - <Problem> - <Impact>" Examples: - "Production Database - CPU Usage 95% - Customer Queries Delayed" - "Payment API - 500 Error Rate >5% - Orders Failing" - "Website - SSL Certificate Expiring - Security Risk"
   * @default New Incident
   */
  incident__title: string;
  /**
   * Incident  Type
   * @description Specifies the type of object being created. Always set to "incident" for incident creation. This field helps ensure API consistency and proper object handling.
   * @default incident
   */
  incident__type: string;
  /**
   * Incident  Urgency
   * @description Determines the immediacy of notifications and escalations. Options: - high: Immediate notifications, aggressive escalation - low: Respect service"s notification rules, standard escalation Choose based on: - Business impact - Time sensitivity - Service criticality - Customer impact
   * @default low
   */
  incident__urgency: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_RECORD tool output.
 */
type PAGERDUTY_CREATE_INCIDENT_RECORD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_WORKFLOW tool input.
 */
type PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_WORKFLOW tool output.
 */
type PAGERDUTY_CREATE_INCIDENT_WORKFLOW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE tool input.
 */
type PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Incident  Workflow  Instance  Incident  Type
   * @description Type
   * @enum {string}
   */
  incident__workflow__instance__incident__type?: "incident_reference";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE tool output.
 */
type PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION tool input.
 */
type PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
  /**
   * Integration  Label
   * @description Name of the Integration.
   */
  integration__label?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION tool output.
 */
type PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE tool input.
 */
type PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE tool output.
 */
type PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT tool input.
 */
type PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT tool output.
 */
type PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER tool input.
 */
type PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER_INPUT = {
  /**
   * Overflow
   * @description Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:  - If you don"t pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`.
   * @default false
   */
  overflow: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER tool output.
 */
type PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_SERVICE tool input.
 */
type PAGERDUTY_CREATE_NEW_SERVICE_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_SERVICE tool output.
 */
type PAGERDUTY_CREATE_NEW_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM tool input.
 */
type PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM tool output.
 */
type PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS tool input.
 */
type PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS tool output.
 */
type PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION tool input.
 */
type PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Webhook  Subscription  Active
   * @description Determines whether this subscription will produce webhook events.
   * @default true
   */
  webhook__subscription__active: boolean;
  /**
   * Webhook  Subscription  Delivery  Method  Custom  Headers
   * @description Optional headers to be set on this webhook subscription when sent. The header values are redacted in GET requests, but are not redacted on the webhook when delivered to the webhook"s endpoint.
   */
  webhook__subscription__delivery__method__custom__headers?: {
      /**
       * Name
       * @description The header name
       */
      name?: string;
      /**
       * Value
       * @description The header value
       */
      value?: string;
  }[];
  /**
   * Webhook  Subscription  Delivery  Method  Id
   * @description Id
   */
  webhook__subscription__delivery__method__id?: string;
  /**
   * Webhook  Subscription  Delivery  Method  Secret
   * @description The secret used to sign webhook payloads. Only provided on the initial create response.
   */
  webhook__subscription__delivery__method__secret?: string;
  /**
   * Webhook  Subscription  Delivery  Method  Temporarily  Disabled
   * @description Whether or not this webhook subscription is temporarily disabled. Becomes `true` if the delivery method URL is repeatedly rejected by the server.
   */
  webhook__subscription__delivery__method__temporarily__disabled?: boolean;
  /**
   * Webhook  Subscription  Delivery  Method  Type
   * @description Indicates the type of the delivery method.
   * @default http_delivery_method
   * @enum {string}
   */
  webhook__subscription__delivery__method__type: "http_delivery_method";
  /**
   * Webhook  Subscription  Delivery  Method  Url
   * Format: url
   * @description The destination URL for webhook delivery.
   */
  webhook__subscription__delivery__method__url?: string;
  /**
   * Webhook  Subscription  Description
   * @description A short description of the webhook subscription.
   */
  webhook__subscription__description?: string;
  /**
   * Webhook  Subscription  Events
   * @description The set of outbound event types the webhook will receive.
   */
  webhook__subscription__events?: string[];
  /**
   * Webhook  Subscription  Filter  Id
   * @description The id of the object being used as the filter.  This field is required for all filter types except account_reference.
   */
  webhook__subscription__filter__id?: string;
  /**
   * Webhook  Subscription  Filter  Type
   * @description The type of object being used as the filter.
   * @enum {string}
   */
  webhook__subscription__filter__type?: "account_reference" | "service_reference" | "team_reference";
  /**
   * Webhook  Subscription  Id
   * @description Id
   */
  webhook__subscription__id?: string;
  /**
   * Webhook  Subscription  Type
   * @description The type indicating the schema of the object.
   * @default webhook_subscription
   * @enum {string}
   */
  webhook__subscription__type: "webhook_subscription";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION tool output.
 */
type PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST tool input.
 */
type PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post  Ends  At
   * Format: date-time
   * @description The date and time the Post intent is concluded - only for maintenance post type.
   */
  post__ends__at?: string;
  /**
   * Post  Post  Type
   * @description The type of the Post.
   * @enum {string}
   */
  post__post__type?: "incident" | "maintenance";
  /**
   * Post  Starts  At
   * Format: date-time
   * @description The date and time the Post intent becomes effective - only for maintenance post type.
   */
  post__starts__at?: string;
  /**
   * Post  Status  Page  Id
   * @description Status page unique identifier
   */
  post__status__page__id?: string;
  /**
   * Post  Status  Page  Type
   * @description A string that determines the schema of the object.
   */
  post__status__page__type?: string;
  /**
   * Post  Title
   * @description The title given to a Post.
   */
  post__title?: string;
  /**
   * Post  Type
   * @description The type of the object returned by the API - in this case, a Status Page Post.
   * @enum {string}
   */
  post__type?: "status_page_post";
  /**
   * Post  Updates
   * @description Post Updates to be associated with a Post
   */
  post__updates?: {
      /**
       * Impacted Services
       * @description Impacted services represent the status page services affected by a post update, and its impact.
       */
      impacted_services: {
          /**
           * Impact  Id
           * @description An unique identifier within Status Page scope that defines a Status Page Impact entry.
           */
          impact__id?: string;
          /**
           * Impact  Type
           * @description The type of the object returned by the API - in this case, a Status Page Impact.
           */
          impact__type?: string;
          /**
           * Service  Id
           * @description An unique identifier within Status Page scope that defines a Service entry.
           */
          service__id?: string;
          /**
           * Service  Type
           * @description The type of the object returned by the API - in this case, a Status Page Service.
           */
          service__type?: string;
      }[];
      /**
       * Message
       * @description The message of the Post Update.
       */
      message: string;
      /**
       * Notify Subscribers
       * @description Determines if the subscribers should be notified of the Post Update.
       */
      notify_subscribers: boolean;
      /**
       * Post  Id
       * @description Status page post unique identifier
       */
      post__id?: string;
      /**
       * Post  Type
       * @description A string that determines the schema of the object.
       */
      post__type?: string;
      /**
       * Reported At
       * Format: date-time
       * @description The date and time the Post Update was reported.
       */
      reported_at?: string;
      /**
       * Self
       * @description The path to which the Post Update resource is accessible.
       */
      self?: string;
      /**
       * Severity  Id
       * @description Status page Severity unique identifier
       */
      severity__id?: string;
      /**
       * Severity  Type
       * @description A string that determines the schema of the object.
       */
      severity__type?: string;
      /**
       * Status  Id
       * @description Status page Status unique identifier
       */
      status__id?: string;
      /**
       * Status  Type
       * @description A string that determines the schema of the object.
       */
      status__type?: string;
      /**
       * Type
       * @description The type of the object returned by the API - in this case, a Status Page Post Update.
       */
      type: string;
      /**
       * Update Frequency Ms
       * @description The frequency of the next Post Update in milliseconds.
       */
      update_frequency_ms: number;
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST tool output.
 */
type PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM tool input.
 */
type PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
  /**
   * Postmortem  Message
   * @description The message of the Postmortem (supports Rich-Text).
   */
  postmortem__message?: string;
  /**
   * Postmortem  Notify  Subscribers
   * @description Whether or not subscribers of the Status Page should be notified about the Postmortem.
   */
  postmortem__notify__subscribers?: boolean;
  /**
   * Postmortem  Post  Id
   * @description Status page post unique identifier
   */
  postmortem__post__id?: string;
  /**
   * Postmortem  Post  Type
   * @description A string that determines the schema of the object.
   */
  postmortem__post__type?: string;
  /**
   * Postmortem  Type
   * @description The type of the object returned by the API - in this case, a Status Page Post Postmortem.
   * @default status_page_post_postmortem
   * @enum {string}
   */
  postmortem__type: "status_page_post_postmortem";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM tool output.
 */
type PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS tool input.
 */
type PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS tool output.
 */
type PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION tool input.
 */
type PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Overrides
   * @description Overrides
   */
  overrides?: unknown[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION tool output.
 */
type PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_SERVICE_EVENT_RULE tool input.
 */
type PAGERDUTY_CREATE_SERVICE_EVENT_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_SERVICE_EVENT_RULE tool output.
 */
type PAGERDUTY_CREATE_SERVICE_EVENT_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION tool input.
 */
type PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscription  Channel
   * @description The channel of the Subscription.
   * @enum {string}
   */
  subscription__channel?: "webhook" | "email";
  /**
   * Subscription  Contact
   * @description The subscriber"s contact - email address or webhook URL.
   */
  subscription__contact?: string;
  /**
   * Subscription  Status  Page  Id
   * @description The id of the status page.
   */
  subscription__status__page__id?: string;
  /**
   * Subscription  Status  Page  Type
   * @description A string that determines the schema of the object.
   */
  subscription__status__page__type?: string;
  /**
   * Subscription  Subscribable  Object  Id
   * @description The ID of the subscribed entity for a given subscription.
   */
  subscription__subscribable__object__id?: string;
  /**
   * Subscription  Subscribable  Object  Type
   * @description The type of the subscribed entity for a given subscription.
   * @enum {string}
   */
  subscription__subscribable__object__type?: "status_page" | "status_page_service" | "status_page_post";
  /**
   * Subscription  Type
   * @description A string that determines the schema of the object.
   */
  subscription__type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION tool output.
 */
type PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE tool input.
 */
type PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE_INPUT = {
  /**
   * Template  Description
   * @description Description of the template
   */
  template__description?: string;
  /**
   * Template  Name
   * @description The name of the template
   */
  template__name?: string;
  /**
   * Template  Template  Type
   * @description The type of template (`status_update` is the only supported template at this time)
   * @enum {string}
   */
  template__template__type?: "status_update";
  /**
   * Template  Templated  Fields  Email  Body
   * @description The HTML body of the e-mail message
   */
  template__templated__fields__email__body?: string;
  /**
   * Template  Templated  Fields  Email  Subject
   * @description The subject of the e-mail
   */
  template__templated__fields__email__subject?: string;
  /**
   * Template  Templated  Fields  Message
   * @description The short-message of the template (SMS, Push notification, Slack, etc)
   */
  template__templated__fields__message?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE tool output.
 */
type PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_USER_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_CREATE_USER_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_USER_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_CREATE_USER_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_USER_OBJECT tool input.
 */
type PAGERDUTY_CREATE_USER_OBJECT_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_USER_OBJECT tool output.
 */
type PAGERDUTY_CREATE_USER_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION tool input.
 */
type PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION_INPUT = {
  /**
   * External Id
   * @description The ID of the external system that this connection is used to connect to
   */
  external_id?: string;
  /**
   * External Id Label
   * @description The label of the external system that this connection is used to connect to
   */
  external_id_label?: string;
  /**
   * Health  Health  Message
   * @description A message describing the health of the connection
   */
  health__health__message?: string;
  /**
   * Health  Is  Healthy
   * @description Whether or not the connection is healthy
   */
  health__is__healthy?: boolean;
  /**
   * Health  Last  Checked  At
   * Format: date-time
   * @description The timestamp of the last health check
   */
  health__last__checked__at?: string;
  /**
   * Id
   * @description The ID of the connection
   */
  id?: string;
  /**
   * Integration Id
   * @description The integration ID that this connection is associated with
   */
  integration_id?: string;
  /**
   * Is Default
   * @description Whether or not this connection is the default connection for this integration
   */
  is_default?: boolean;
  /**
   * Name
   * @description The name given to the connection
   */
  name?: string;
  /**
   * Scopes
   * @description Scopes
   */
  scopes?: string[];
  /**
   * Service Url
   * @description The URL of the service that this connection is associated with
   */
  service_url?: string;
  /**
   * Teams
   * @description The teams whose managers are allowed to use or edit this connection
   */
  teams?: {
      /**
       * Team Id
       * @description The ID of the team
       */
      team_id?: string;
      /**
       * Type
       * @description Type
       * @enum {string}
       */
      type?: "team_reference";
  }[];
  /**
   * Type
   * @description The type of the connection
   */
  type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION tool output.
 */
type PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID tool input.
 */
type PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID tool output.
 */
type PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ADDON_BY_ID tool input.
 */
type PAGERDUTY_DELETE_ADDON_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ADDON_BY_ID tool output.
 */
type PAGERDUTY_DELETE_ADDON_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ALERT_GROUPING_SETTING tool input.
 */
type PAGERDUTY_DELETE_ALERT_GROUPING_SETTING_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ALERT_GROUPING_SETTING tool output.
 */
type PAGERDUTY_DELETE_ALERT_GROUPING_SETTING_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS tool input.
 */
type PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS_INPUT = {
  /**
   * Type
   * @description The type of OAuth delegations this request should target.
   * @enum {string}
   */
  type?: "mobile";
  /**
   * User Id
   * @description The ID of the user for whom this request is applicable.
   */
  user_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS tool output.
 */
type PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID tool input.
 */
type PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID tool output.
 */
type PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID tool input.
 */
type PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID tool output.
 */
type PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE tool input.
 */
type PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE tool output.
 */
type PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD tool input.
 */
type PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Field Option Id
   * @description The ID of the field option.
   */
  field_option_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD tool output.
 */
type PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS tool input.
 */
type PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS tool output.
 */
type PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT tool input.
 */
type PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT_INPUT = {
  /**
   * Cache Variable Id
   * @description The ID of a Cache Variable.
   */
  cache_variable_id?: string;
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT tool output.
 */
type PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE tool input.
 */
type PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE_INPUT = {
  /**
   * Cache Variable Id
   * @description The ID of a Cache Variable.
   */
  cache_variable_id?: string;
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE tool output.
 */
type PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID tool input.
 */
type PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID tool output.
 */
type PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID tool input.
 */
type PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID tool output.
 */
type PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_EVENT_BY_ID tool input.
 */
type PAGERDUTY_DELETE_EVENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_EVENT_BY_ID tool output.
 */
type PAGERDUTY_DELETE_EVENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_EXTENSION_BY_ID tool input.
 */
type PAGERDUTY_DELETE_EXTENSION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_EXTENSION_BY_ID tool output.
 */
type PAGERDUTY_DELETE_EXTENSION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_FIELD_OPTION tool input.
 */
type PAGERDUTY_DELETE_FIELD_OPTION_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Field Option Id
   * @description The ID of the field option.
   */
  field_option_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_FIELD_OPTION tool output.
 */
type PAGERDUTY_DELETE_FIELD_OPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID tool input.
 */
type PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID tool output.
 */
type PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID tool input.
 */
type PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID tool output.
 */
type PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE tool input.
 */
type PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE_INPUT = {
  /**
   * Service Id
   * @description Identifier for the Service
   */
  service_id?: string;
  /**
   * Trigger Id
   * @description Identifier for the Trigger
   */
  trigger_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE tool output.
 */
type PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION tool input.
 */
type PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
  /**
   * Integration Id
   * @description The ID of an Integration.
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION tool output.
 */
type PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID tool input.
 */
type PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID tool output.
 */
type PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Oncall Handoff Notification Rule Id
   * @description The oncall handoff notification rule ID on the user.
   */
  oncall_handoff_notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE tool input.
 */
type PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE tool output.
 */
type PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_POST_UPDATE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_POST_UPDATE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
  /**
   * Post Update Id
   * @description The ID of the Status Page Post Update.
   */
  post_update_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_POST_UPDATE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_POST_UPDATE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RESPONSE_PLAY tool input.
 */
type PAGERDUTY_DELETE_RESPONSE_PLAY_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RESPONSE_PLAY tool output.
 */
type PAGERDUTY_DELETE_RESPONSE_PLAY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RULESET_BY_ID tool input.
 */
type PAGERDUTY_DELETE_RULESET_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RULESET_BY_ID tool output.
 */
type PAGERDUTY_DELETE_RULESET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID tool input.
 */
type PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Rule Id
   * @description The id of the Event Rule to retrieve.
   */
  rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID tool output.
 */
type PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION tool input.
 */
type PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Team Id
   * @description The team ID
   */
  team_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION tool output.
 */
type PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SCHEDULE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_SCHEDULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SCHEDULE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_SCHEDULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Override Id
   * @description The override ID on the schedule.
   */
  override_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_SERVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SERVICE_RULE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_SERVICE_RULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Rule Id
   * @description The id of the Event Rule to retrieve.
   */
  rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SERVICE_RULE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_SERVICE_RULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM tool input.
 */
type PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM tool output.
 */
type PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Status Update Notification Rule Id
   * @description The status update notification rule ID on the user.
   */
  status_update_notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE tool input.
 */
type PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscription Id
   * @description The ID of the Status Page subscription.
   */
  subscription_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE tool output.
 */
type PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TAG_BY_ID tool input.
 */
type PAGERDUTY_DELETE_TAG_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TAG_BY_ID tool output.
 */
type PAGERDUTY_DELETE_TAG_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEAM_BY_ID tool input.
 */
type PAGERDUTY_DELETE_TEAM_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Reassignment Team
   * @description Team to reassign unresolved incident to. If an unresolved incident exists on both the reassignment team and the team being deleted, a duplicate will not be made. If not supplied, unresolved incidents will be made account-level.
   */
  reassignment_team?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEAM_BY_ID tool output.
 */
type PAGERDUTY_DELETE_TEAM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY tool input.
 */
type PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY_INPUT = {
  /**
   * Escalation Policy Id
   * @description The escalation policy ID on the team.
   */
  escalation_policy_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY tool output.
 */
type PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION tool input.
 */
type PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Team Id
   * @description The team ID
   */
  team_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION tool output.
 */
type PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEMPLATE_BY_ID tool input.
 */
type PAGERDUTY_DELETE_TEMPLATE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_TEMPLATE_BY_ID tool output.
 */
type PAGERDUTY_DELETE_TEMPLATE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_BY_ID tool input.
 */
type PAGERDUTY_DELETE_USER_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_BY_ID tool output.
 */
type PAGERDUTY_DELETE_USER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_CONTACT_METHOD tool input.
 */
type PAGERDUTY_DELETE_USER_CONTACT_METHOD_INPUT = {
  /**
   * Contact Method Id
   * @description The contact method ID on the user.
   */
  contact_method_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_CONTACT_METHOD tool output.
 */
type PAGERDUTY_DELETE_USER_CONTACT_METHOD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID tool input.
 */
type PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * User Id
   * @description The user ID on the team.
   */
  user_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID tool output.
 */
type PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_DELETE_USER_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Notification Rule Id
   * @description The notification rule ID on the user.
   */
  notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_DELETE_USER_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_SESSION_BY_ID tool input.
 */
type PAGERDUTY_DELETE_USER_SESSION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_SESSION_BY_ID tool output.
 */
type PAGERDUTY_DELETE_USER_SESSION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_SESSION_BY_TYPE tool input.
 */
type PAGERDUTY_DELETE_USER_SESSION_BY_TYPE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Session Id
   * @description The session ID for the user.
   */
  session_id?: string;
  /**
   * Type
   * @description The session type for the user session ID.
   */
  type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_USER_SESSION_BY_TYPE tool output.
 */
type PAGERDUTY_DELETE_USER_SESSION_BY_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID tool input.
 */
type PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID tool output.
 */
type PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION tool input.
 */
type PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Integration Id
   * @description The ID of the Workflow Integration
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION tool output.
 */
type PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES tool input.
 */
type PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES_INPUT = {
  /**
   * Relationships
   * @description List of all service dependencies to be deleted.
   */
  relationships?: {
      /**
       * Dependent  Service  Id
       * @description Id
       */
      dependent__service__id?: string;
      /**
       * Dependent  Service  Type
       * @description Type
       */
      dependent__service__type?: string;
      /**
       * Supporting  Service  Id
       * @description Id
       */
      supporting__service__id?: string;
      /**
       * Supporting  Service  Type
       * @description Type
       */
      supporting__service__type?: string;
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES tool output.
 */
type PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID tool input.
 */
type PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Webhook  Subscription  Active
   * @description If true, a webhook will be sent. True is the default state. If false, a webhook will not be sent.
   */
  webhook__subscription__active?: boolean;
  /**
   * Webhook  Subscription  Description
   * @description A short description of the webhook subscription.
   */
  webhook__subscription__description?: string;
  /**
   * Webhook  Subscription  Events
   * @description The set of outbound event types the subscription will receive.
   */
  webhook__subscription__events?: string[];
  /**
   * Webhook  Subscription  Filter  Id
   * @description The id of the object being used as the filter.  This field is required for all filter types except account_reference.
   */
  webhook__subscription__filter__id?: string;
  /**
   * Webhook  Subscription  Filter  Type
   * @description The type of object being used as the filter.
   * @enum {string}
   */
  webhook__subscription__filter__type?: "account_reference" | "service_reference" | "team_reference";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID tool output.
 */
type PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ENABLE_EXTENSION_BY_ID tool input.
 */
type PAGERDUTY_ENABLE_EXTENSION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ENABLE_EXTENSION_BY_ID tool output.
 */
type PAGERDUTY_ENABLE_EXTENSION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID tool input.
 */
type PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID tool output.
 */
type PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID tool input.
 */
type PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID_INPUT = {
  /**
   * Response Play Id
   * @description The response play ID of the response play associated with the request.
   */
  response_play_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID tool output.
 */
type PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION tool input.
 */
type PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION_INPUT = {
  /**
   * Cache Variable Id
   * @description The ID of a Cache Variable.
   */
  cache_variable_id?: string;
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION tool output.
 */
type PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID tool input.
 */
type PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "field_options";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID tool output.
 */
type PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_ESCALATION_POLICES_LIST tool input.
 */
type PAGERDUTY_FETCH_ESCALATION_POLICES_LIST_INPUT = {
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "services" | "teams" | "targets";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Sort By
   * @description Used to specify the field you wish to sort the results on.
   * @default name
   * @enum {string}
   */
  sort_by: "name" | "name:asc" | "name:desc";
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * User  Ids
   * @description Filters the results, showing only escalation policies on which any of the users is a target.
   */
  user__ids?: string[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_ESCALATION_POLICES_LIST tool output.
 */
type PAGERDUTY_FETCH_ESCALATION_POLICES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS tool input.
 */
type PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Sort By
   * @description Used to specify the field you wish to sort the results on.
   * @default name:asc
   * @enum {string}
   */
  sort_by: "name:asc" | "name:desc" | "routes:asc" | "routes:desc" | "created_at:asc" | "created_at:desc";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS tool output.
 */
type PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID tool input.
 */
type PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID tool output.
 */
type PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_INCIDENT_LIST tool input.
 */
type PAGERDUTY_FETCH_INCIDENT_LIST_INPUT = {
  /**
   * Date Range
   * @description When set to all, the since and until parameters and defaults are ignored.
   * @enum {string}
   */
  date_range?: "all";
  /**
   * Incident Key
   * @description Incident de-duplication key. Incidents with child alerts do not have an incident key; querying by incident key will return incidents whose alerts have alert_key matching the given incident key.
   */
  incident_key?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "acknowledgers" | "agents" | "assignees" | "conference_bridge" | "escalation_policies" | "first_trigger_log_entries" | "priorities" | "services" | "teams" | "users";
  /**
   * Limit
   * @description The number of results per page. Maximum of 100.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Service  Ids
   * @description Returns only the incidents associated with the passed service(s). This expects one or more service IDs.
   */
  service__ids?: string[];
  /**
   * Since
   * @description The start of the date range over which you want to search. Maximum range is 6 months and default is 1 month.
   */
  since?: string;
  /**
   * Sort By
   * @description Used to specify both the field you wish to sort the results on (incident_number/created_at/resolved_at/urgency), as well as the direction (asc/desc) of the results. The sort_by field and direction should be separated by a colon. A maximum of two fields can be included, separated by a comma. Sort direction defaults to ascending. The account must have the `urgencies` ability to sort by the urgency.
   */
  sort_by?: string[];
  /**
   * Statuses
   * @description Return only incidents with the given statuses. To query multiple statuses, pass `statuses[]` more than once, for example: `https://api.pagerduty.com/incidents?statuses[]=triggered&statuses[]=acknowledged`. (More status codes may be introduced in the future.)
   * @enum {string}
   */
  statuses?: "triggered" | "acknowledged" | "resolved";
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the date range over which you want to search. Maximum range is 6 months and default is 1 month.
   */
  until?: string;
  /**
   * Urgencies
   * @description Array of the urgencies of the incidents to be returned. Defaults to all urgencies. Account must have the `urgencies` ability to do this.
   * @enum {string}
   */
  urgencies?: "high" | "low";
  /**
   * User  Ids
   * @description Returns only the incidents currently assigned to the passed user(s). This expects one or more user IDs. Note: When using the assigned_to_user filter, you will only receive incidents with statuses of triggered or acknowledged. This is because resolved incidents are not assigned to any user.
   */
  user__ids?: string[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_INCIDENT_LIST tool output.
 */
type PAGERDUTY_FETCH_INCIDENT_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID tool input.
 */
type PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID_INPUT = {
  /**
   * Additional  Details
   * @description Array of additional attributes to any of the returned incidents for related incidents.
   * @enum {string}
   */
  additional__details?: "incident";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID tool output.
 */
type PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_POST_UPDATE_STATUS tool input.
 */
type PAGERDUTY_FETCH_POST_UPDATE_STATUS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
  /**
   * Post Update Id
   * @description The ID of the Status Page Post Update.
   */
  post_update_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_POST_UPDATE_STATUS tool output.
 */
type PAGERDUTY_FETCH_POST_UPDATE_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_PRIORITIES_LIST tool input.
 */
type PAGERDUTY_FETCH_PRIORITIES_LIST_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_PRIORITIES_LIST tool output.
 */
type PAGERDUTY_FETCH_PRIORITIES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT tool input.
 */
type PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT tool output.
 */
type PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID tool input.
 */
type PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID_INPUT = {
  /**
   * Additional  Details
   * @description Array of additional attributes to any of the returned incidents for related incidents.
   * @enum {string}
   */
  additional__details?: "incident";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID tool output.
 */
type PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION tool input.
 */
type PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION tool output.
 */
type PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_STATUS_PAGES tool input.
 */
type PAGERDUTY_FETCH_STATUS_PAGES_INPUT = {
  /**
   * Status Page Type
   * @description The type of the Status Page.
   * @enum {string}
   */
  status_page_type?: "public" | "private";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_STATUS_PAGES tool output.
 */
type PAGERDUTY_FETCH_STATUS_PAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_USER_CONTACT_METHOD tool input.
 */
type PAGERDUTY_FETCH_USER_CONTACT_METHOD_INPUT = {
  /**
   * Contact Method Id
   * @description The contact method ID on the user.
   */
  contact_method_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_USER_CONTACT_METHOD tool output.
 */
type PAGERDUTY_FETCH_USER_CONTACT_METHOD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_VENDOR_LIST tool input.
 */
type PAGERDUTY_FETCH_VENDOR_LIST_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FETCH_VENDOR_LIST tool output.
 */
type PAGERDUTY_FETCH_VENDOR_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS tool input.
 */
type PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS_INPUT = {
  /**
   * Aggregate Unit
   * @description The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period.
   * @enum {string}
   */
  aggregate_unit?: "day" | "week" | "month";
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Pd  Advance  Used
   * @description If true, only incidents where PD Advance was used will be included in the results, and vice versa. If omitted, all incidents will be included.
   */
  filters__pd__advance__used?: boolean;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS tool output.
 */
type PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ADDONS_LIST tool input.
 */
type PAGERDUTY_GET_ADDONS_LIST_INPUT = {
  /**
   * Filter
   * @description Filters the results, showing only Add-ons of the given type
   * @enum {string}
   */
  filter?: "full_page_addon" | "incident_show_addon";
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "services";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Service  Ids
   * @description Filters the results, showing only Add-ons for the given services
   */
  service__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ADDONS_LIST tool output.
 */
type PAGERDUTY_GET_ADDONS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA tool input.
 */
type PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA_INPUT = {
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any PD Advance usage with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any PD Advance usage with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Incident  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with incident_created_at_start is one year.
   */
  filters__incident__created__at__end?: string;
  /**
   * Filters  Incident  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with incident_created_at_end is one year.
   */
  filters__incident__created__at__start?: string;
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA tool output.
 */
type PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID tool input.
 */
type PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID_INPUT = {
  /**
   * Alert Key
   * @description Alert de-duplication key.
   */
  alert_key?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "services" | "first_trigger_log_entries" | "incidents";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Sort By
   * @description Used to specify both the field you wish to sort the results on (created_at/resolved_at), as well as the direction (asc/desc) of the results. The sort_by field and direction should be separated by a colon. A maximum of two fields can be included, separated by a comma. Sort direction defaults to ascending.
   * @enum {string}
   */
  sort_by?: "created_at" | "resolved_at" | "created_at:asc" | "created_at:desc" | "resolved_at:asc" | "resolved_at:desc";
  /**
   * Statuses
   * @description Return only alerts with the given statuses. (More status codes may be introduced in the future.)
   * @enum {string}
   */
  statuses?: "triggered" | "resolved";
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID tool output.
 */
type PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ALERT_GROUPING_SETTINGS tool input.
 */
type PAGERDUTY_GET_ALERT_GROUPING_SETTINGS_INPUT = {
  /**
   * After
   * @description Cursor to retrieve next page; only present if next page exists.
   */
  after?: string;
  /**
   * Before
   * @description Cursor to retrieve previous page; only present if not on first page.
   */
  before?: string;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Service  Ids
   * @description An array of service IDs. Only results related to these services will be returned.
   */
  service__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ALERT_GROUPING_SETTINGS tool output.
 */
type PAGERDUTY_GET_ALERT_GROUPING_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AN_INCIDENT_TYPE tool input.
 */
type PAGERDUTY_GET_AN_INCIDENT_TYPE_INPUT = {
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AN_INCIDENT_TYPE tool output.
 */
type PAGERDUTY_GET_AN_INCIDENT_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD tool input.
 */
type PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "field_options";
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD tool output.
 */
type PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUDIT_RECORDS tool input.
 */
type PAGERDUTY_GET_AUDIT_RECORDS_INPUT = {
  /**
   * Actions
   * @description Action filter
   * @enum {string}
   */
  actions?: "create" | "update" | "delete";
  /**
   * Actor Id
   * @description Actor Id filter. Must be qualified by providing the `actor_type` param.
   */
  actor_id?: string;
  /**
   * Actor Type
   * @description Actor type filter.
   * @enum {string}
   */
  actor_type?: "user_reference" | "api_key_reference" | "app_reference";
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Method Truncated Token
   * @description Method truncated_token filter. Must be qualified by providing the `method_type` param.
   */
  method_truncated_token?: string;
  /**
   * Method Type
   * @description Method type filter.
   * @enum {string}
   */
  method_type?: "browser" | "oauth" | "api_token" | "identity_provider" | "other";
  /**
   * Root  Resource  Types
   * @description Resource type filter for the root_resource.
   * @enum {string}
   */
  root__resource__types?: "users" | "teams" | "schedules" | "escalation_policies" | "services";
  /**
   * Since
   * @description The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUDIT_RECORDS tool output.
 */
type PAGERDUTY_GET_AUDIT_RECORDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS tool input.
 */
type PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Include
   * @description Includes additional data elements into the response
   */
  include?: string[];
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Name
   * @description Filters results to include the ones matching the name (case insensitive substring matching)
   */
  name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS tool output.
 */
type PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID tool input.
 */
type PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID tool output.
 */
type PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID tool input.
 */
type PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID tool output.
 */
type PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID tool input.
 */
type PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Team Id
   * @description The team ID
   */
  team_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID tool output.
 */
type PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD tool input.
 */
type PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Field Option Id
   * @description The ID of the field option.
   */
  field_option_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD tool output.
 */
type PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_A_TRIGGER tool input.
 */
type PAGERDUTY_GET_A_TRIGGER_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_A_TRIGGER tool output.
 */
type PAGERDUTY_GET_A_TRIGGER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS tool input.
 */
type PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS tool output.
 */
type PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID tool input.
 */
type PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID tool output.
 */
type PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE tool input.
 */
type PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE_INPUT = {
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE tool output.
 */
type PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_CACHE_VARIABLE_BY_ID tool input.
 */
type PAGERDUTY_GET_CACHE_VARIABLE_BY_ID_INPUT = {
  /**
   * Cache Variable Id
   * @description The ID of a Cache Variable.
   */
  cache_variable_id?: string;
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_CACHE_VARIABLE_BY_ID tool output.
 */
type PAGERDUTY_GET_CACHE_VARIABLE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ESCALATION_POLICY_BY_ID tool input.
 */
type PAGERDUTY_GET_ESCALATION_POLICY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "services" | "teams" | "targets";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_ESCALATION_POLICY_BY_ID tool output.
 */
type PAGERDUTY_GET_ESCALATION_POLICY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID tool input.
 */
type PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID tool output.
 */
type PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID tool input.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID tool output.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES tool input.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES tool output.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL tool input.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL tool output.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION tool input.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
  /**
   * Integration Id
   * @description The ID of an Integration.
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION tool output.
 */
type PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID tool input.
 */
type PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID tool output.
 */
type PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID tool input.
 */
type PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Impact Id
   * @description The ID of the Status Page Impact.
   */
  impact_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID tool output.
 */
type PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_ALERT_DETAILS tool input.
 */
type PAGERDUTY_GET_INCIDENT_ALERT_DETAILS_INPUT = {
  /**
   * Alert Id
   * @description The id of the alert to retrieve.
   */
  alert_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_ALERT_DETAILS tool output.
 */
type PAGERDUTY_GET_INCIDENT_ALERT_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID tool input.
 */
type PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "incidents" | "services" | "channels" | "teams";
  /**
   * Is Overview
   * @description If `true`, will return a subset of log entries that show only the most important changes to the incident.
   * @default false
   */
  is_overview: boolean;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID tool output.
 */
type PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_WORKFLOWS tool input.
 */
type PAGERDUTY_GET_INCIDENT_WORKFLOWS_INPUT = {
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "steps" | "team";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_WORKFLOWS tool output.
 */
type PAGERDUTY_GET_INCIDENT_WORKFLOWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS tool input.
 */
type PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Keyword
   * @description If provided, only show actions tagged with the specified keyword
   */
  keyword?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS tool output.
 */
type PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID tool input.
 */
type PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID tool output.
 */
type PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_LOG_ENTRIES tool input.
 */
type PAGERDUTY_GET_LOG_ENTRIES_INPUT = {
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "incidents" | "services" | "channels" | "teams";
  /**
   * Is Overview
   * @description If `true`, will return a subset of log entries that show only the most important changes to the incident.
   * @default false
   */
  is_overview: boolean;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_LOG_ENTRIES tool output.
 */
type PAGERDUTY_GET_LOG_ENTRIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID tool input.
 */
type PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "teams" | "services" | "users";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID tool output.
 */
type PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS tool input.
 */
type PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS_INPUT = {
  /**
   * Requested At End
   * @description The end of the date range over which you want to search. If not specified, this will default to current time.
   */
  requested_at_end?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS tool output.
 */
type PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS tool input.
 */
type PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS_INPUT = {
  /**
   * Service Id
   * @description Specifies a filter to limit the scope of reporting to a particular service
   */
  service_id?: string;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Suspended By
   * @description Specifies a filter to scope the response to either alerts suspended by Auto Pause or Event Rules.
   */
  suspended_by?: unknown;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS tool output.
 */
type PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID tool input.
 */
type PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   */
  include?: string[];
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID tool output.
 */
type PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_RESPONSE_PLAYS tool input.
 */
type PAGERDUTY_GET_RESPONSE_PLAYS_INPUT = {
  /**
   * Filter For Manual Run
   * @description When this parameter is present, only those Response Plays that can be run manually will be returned.
   */
  filter_for_manual_run?: boolean;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_RESPONSE_PLAYS tool output.
 */
type PAGERDUTY_GET_RESPONSE_PLAYS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID tool input.
 */
type PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Rule Id
   * @description The id of the Event Rule to retrieve.
   */
  rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID tool output.
 */
type PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SCHEDULES tool input.
 */
type PAGERDUTY_GET_SCHEDULES_INPUT = {
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "schedule_layers";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the current user"s time zone and then the account"s time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SCHEDULES tool output.
 */
type PAGERDUTY_GET_SCHEDULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG tool input.
 */
type PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG_INPUT = {
  /**
   * Additional  Fields
   * @description Provides access to additional fields such as highest priority per business service and total impacted count
   * @enum {string}
   */
  additional__fields?: "services.highest_impacting_priority" | "total_impacted_count";
  /**
   * Url Slug
   * @description The `url_slug` for a status dashboard
   */
  url_slug?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG tool output.
 */
type PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE tool input.
 */
type PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Severity Id
   * @description The ID of the Status Page severity.
   */
  severity_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE tool output.
 */
type PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS tool input.
 */
type PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
  /**
   * Reviewed Status
   * @description Filter by the reviewed status of the Post Update to retrieve.
   * @enum {string}
   */
  reviewed_status?: "approved" | "not_reviewed";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS tool output.
 */
type PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID tool input.
 */
type PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID tool output.
 */
type PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID tool input.
 */
type PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Status Id
   * @description The ID of the Status Page status.
   */
  status_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID tool output.
 */
type PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID tool input.
 */
type PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Type
   * @description Filter by Post type.
   * @enum {string}
   */
  post_type?: "incident" | "maintenance";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID tool output.
 */
type PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION tool input.
 */
type PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscription Id
   * @description The ID of the Status Page subscription.
   */
  subscription_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION tool output.
 */
type PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID tool input.
 */
type PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID tool output.
 */
type PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEAM_MEMBERS_BY_ID tool input.
 */
type PAGERDUTY_GET_TEAM_MEMBERS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "users";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEAM_MEMBERS_BY_ID tool output.
 */
type PAGERDUTY_GET_TEAM_MEMBERS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS tool input.
 */
type PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS tool output.
 */
type PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEMPLATE_BY_ID tool input.
 */
type PAGERDUTY_GET_TEMPLATE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_TEMPLATE_BY_ID tool output.
 */
type PAGERDUTY_GET_TEMPLATE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE tool input.
 */
type PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_INPUT = {
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "migrated_metadata";
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE tool output.
 */
type PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS tool input.
 */
type PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS tool output.
 */
type PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_SESSIONS_BY_ID tool input.
 */
type PAGERDUTY_GET_USER_SESSIONS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_SESSIONS_BY_ID tool output.
 */
type PAGERDUTY_GET_USER_SESSIONS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_SESSION_BY_TYPE tool input.
 */
type PAGERDUTY_GET_USER_SESSION_BY_TYPE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Session Id
   * @description The session ID for the user.
   */
  session_id?: string;
  /**
   * Type
   * @description The session type for the user session ID.
   */
  type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_SESSION_BY_TYPE tool output.
 */
type PAGERDUTY_GET_USER_SESSION_BY_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES tool input.
 */
type PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "contact_methods";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES tool output.
 */
type PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID tool input.
 */
type PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID tool output.
 */
type PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_WORKFLOW_INTEGRATION tool input.
 */
type PAGERDUTY_GET_WORKFLOW_INTEGRATION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_WORKFLOW_INTEGRATION tool output.
 */
type PAGERDUTY_GET_WORKFLOW_INTEGRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION tool input.
 */
type PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Integration Id
   * @description The ID of the Workflow Integration
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION tool output.
 */
type PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_INSTALL_ADD_ON_ENDPOINT tool input.
 */
type PAGERDUTY_INSTALL_ADD_ON_ENDPOINT_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_INSTALL_ADD_ON_ENDPOINT tool output.
 */
type PAGERDUTY_INSTALL_ADD_ON_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID tool input.
 */
type PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Invocation  Metadata  Incident  Id
   * @description Incident Id
   */
  invocation__metadata__incident__id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID tool output.
 */
type PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS tool input.
 */
type PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Name
   * @description Filter Integrations by partial name.
   */
  name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS tool output.
 */
type PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS tool input.
 */
type PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS_INPUT = {
  /**
   * Action Type
   * @description Filters results to include the ones matching the specified action type
   * @enum {string}
   */
  action_type?: "script" | "process_automation";
  /**
   * Classification
   * @description Filters results to include the ones matching the specified classification (aka category)
   * @enum {string}
   */
  classification?: "diagnostic" | "remediation";
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Name
   * @description Filters results to include the ones matching the name (case insensitive substring matching)
   */
  name?: string;
  /**
   * Runner Id
   * @description Filters results to include the ones linked to the specified runner. Specifying the value `any` filters results to include the ones linked to runners only, thus omitting the results not linked to runners.
   */
  runner_id?: string;
  /**
   * Service Id
   * @description Filters results to include the ones associated with the specified service
   */
  service_id?: string;
  /**
   * Team Id
   * @description Filters results to include the ones associated with the specified team.
   */
  team_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS tool output.
 */
type PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_EXTENSION_SCHEMAS tool input.
 */
type PAGERDUTY_LIST_EXTENSION_SCHEMAS_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_EXTENSION_SCHEMAS tool output.
 */
type PAGERDUTY_LIST_EXTENSION_SCHEMAS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD tool input.
 */
type PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD tool output.
 */
type PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS tool input.
 */
type PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS tool output.
 */
type PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_INCIDENT_TYPES tool input.
 */
type PAGERDUTY_LIST_INCIDENT_TYPES_INPUT = {
  /**
   * Filter
   * @description Filters the list of incident types based on their `enabled` state.
   * @default enabled
   * @enum {string}
   */
  filter: "enabled" | "disabled" | "all";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_INCIDENT_TYPES tool output.
 */
type PAGERDUTY_LIST_INCIDENT_TYPES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS tool input.
 */
type PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS_INPUT = {
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "field_options";
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS tool output.
 */
type PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_LICENSES tool input.
 */
type PAGERDUTY_LIST_LICENSES_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_LICENSES tool output.
 */
type PAGERDUTY_LIST_LICENSES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS tool input.
 */
type PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS_INPUT = {
  /**
   * Additional  Fields
   * @description Provides access to additional fields such as highest priority per business service and total impacted count
   * @enum {string}
   */
  additional__fields?: "services.highest_impacting_priority" | "total_impacted_count";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Ids
   * @description The IDs of the resources.
   */
  ids?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS tool output.
 */
type PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_TEMPLATES tool input.
 */
type PAGERDUTY_LIST_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Template name or description to search
   */
  query?: string;
  /**
   * Sort By
   * @description Used to specify both the field you wish to sort the results on (name/created_at), as well as the direction (asc/desc) of the results. The sort_by field and direction should be separated by a colon. Sort direction defaults to ascending.
   * @default created_at:asc
   * @enum {string}
   */
  sort_by: "name" | "name:asc" | "name:desc" | "created_at" | "created_at:asc" | "created_at:desc";
  /**
   * Template Type
   * @description Filters templates by type.
   * @default status_update
   */
  template_type: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_TEMPLATES tool output.
 */
type PAGERDUTY_LIST_TEMPLATES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS tool input.
 */
type PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Include Deprecated
   * @description Whether to include deprecated Integrations in the response.
   * @default false
   */
  include_deprecated: boolean;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS tool output.
 */
type PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS tool input.
 */
type PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Integration Id
   * @description The ID of the Workflow Integration
   */
  integration_id?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Name
   * @description Filter Integrations by partial name.
   */
  name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS tool output.
 */
type PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE tool input.
 */
type PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE_INPUT = {
  /**
   * Cache  Variable  Conditions
   * @description Each of these conditions is evaluated to check if an event matches this rule. The rule is considered a match if **any** of these conditions match.
   */
  cache__variable__conditions?: {
      /**
       * Expression
       * @description A PCL condition string. Note: The `trigger_count` and `resetting_trigger_count` operators are unsupported for Cache Variables
       */
      expression?: string;
  }[];
  /**
   * Cache  Variable  Configuration
   * @description Configuration
   */
  cache__variable__configuration?: {
      [key: string]: unknown;
  };
  /**
   * Cache  Variable  Created  At
   * Format: date-time
   * @description The date/time the object was created.
   */
  cache__variable__created__at?: string;
  /**
   * Cache  Variable  Created  By  Id
   * @description Id
   */
  cache__variable__created__by__id?: string;
  /**
   * Cache  Variable  Created  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  cache__variable__created__by__self?: string;
  /**
   * Cache  Variable  Created  By  Type
   * @description A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.
   */
  cache__variable__created__by__type?: string;
  /**
   * Cache  Variable  Disabled
   * @description Indicates whether the Cache Variable is disabled and would therefore not be evaluated.
   */
  cache__variable__disabled?: boolean;
  /**
   * Cache  Variable  Id
   * @description Id
   */
  cache__variable__id?: string;
  /**
   * Cache  Variable  Name
   * @description The name of the Cache Variable
   */
  cache__variable__name?: string;
  /**
   * Cache  Variable  Updated  At
   * Format: date-time
   * @description The date/time the object was last updated.
   */
  cache__variable__updated__at?: string;
  /**
   * Cache  Variable  Updated  By  Id
   * @description Id
   */
  cache__variable__updated__by__id?: string;
  /**
   * Cache  Variable  Updated  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  cache__variable__updated__by__self?: string;
  /**
   * Cache  Variable  Updated  By  Type
   * @description A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.
   */
  cache__variable__updated__by__type?: string;
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE tool output.
 */
type PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT tool input.
 */
type PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Source Incidents
   * @description The source incidents that will be merged into the target incident and resolved.
   */
  source_incidents?: unknown[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT tool output.
 */
type PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS tool input.
 */
type PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
  /**
   * Integration Id
   * @description The ID of the Integration you"ll be moving
   */
  integration_id?: string;
  /**
   * Source Id
   * @description The ID of the Event Orchestration you"ll be moving the Integration away from
   */
  source_id?: string;
  /**
   * Source Type
   * @description The type of of the `source_id` object
   * @enum {string}
   */
  source_type?: "orchestration";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS tool output.
 */
type PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MODIFY_ENTITY_TAGS tool input.
 */
type PAGERDUTY_MODIFY_ENTITY_TAGS_INPUT = {
  /**
   * Add
   * @description Array of tags and/or tag references to add to the entity. For elements with type `tag_reference`, the tag with the corresponding `id` is added to the entity. For elements with type `tag`, if there is an existing tag with the given label that tag is added to the entity. If there is no existing tag with that label and the user has permission to create tags, a new tag is created with that label and assigned to the entity.
   */
  add?: {
      /**
       * Id
       * @description The id of the tag. Should be used when type is "tag_reference".
       */
      id?: string;
      /**
       * Label
       * @description The label of the tag. Should be used when type is "tag".
       */
      label?: string;
      /**
       * Type
       * @description Type
       */
      type: string;
  }[];
  /**
   * Entity Type
   * @description Type of entity related with the tag
   * @enum {string}
   */
  entity_type?: "users" | "teams" | "escalation_policies";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Remove
   * @description Array of tag references to remove from the entity.
   */
  remove?: {
      /**
       * Id
       * @description The id of the tag
       */
      id: string;
      /**
       * Type
       * @description Type
       */
      type: string;
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_MODIFY_ENTITY_TAGS tool output.
 */
type PAGERDUTY_MODIFY_ENTITY_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS tool input.
 */
type PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS_INPUT = {
  /**
   * Aggregate Unit
   * @description The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period.
   * @enum {string}
   */
  aggregate_unit?: "day" | "week" | "month";
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Pd  Advance  Used
   * @description If true, only incidents where PD Advance was used will be included in the results, and vice versa. If omitted, all incidents will be included.
   */
  filters__pd__advance__used?: boolean;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS tool output.
 */
type PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION tool input.
 */
type PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION tool output.
 */
type PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE tool input.
 */
type PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE tool output.
 */
type PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ALERT_GROUPING_SETTINGS tool input.
 */
type PAGERDUTY_POST_ALERT_GROUPING_SETTINGS_INPUT = {
  /**
   * Alert  Grouping  Setting  Config
   * @description Config
   */
  alert__grouping__setting__config?: {
      [key: string]: unknown;
  };
  /**
   * Alert  Grouping  Setting  Created  At
   * Format: date-time
   * @description The ISO8601 date/time an AlertGroupingSetting got created at.
   */
  alert__grouping__setting__created__at?: string;
  /**
   * Alert  Grouping  Setting  Description
   * @description An optional description in string that provides more information about an AlertGroupingSetting object.
   */
  alert__grouping__setting__description?: string;
  /**
   * Alert  Grouping  Setting  Id
   * @description Id
   */
  alert__grouping__setting__id?: string;
  /**
   * Alert  Grouping  Setting  Name
   * @description An optional short-form string that provides succinct information about an AlertGroupingSetting object suitable for primary labeling of the entity. It is not intended to be an identifier.
   */
  alert__grouping__setting__name?: string;
  /**
   * Alert  Grouping  Setting  Services
   * @description The array of one or many Services with just ServiceID/name that the AlertGroupingSetting applies to. Type of content_based_intelligent allows for only one service in the array.
   */
  alert__grouping__setting__services?: unknown[];
  /**
   * Alert  Grouping  Setting  Type
   * @description Type
   * @enum {string}
   */
  alert__grouping__setting__type?: "content_based" | "content_based_intelligent" | "intelligent" | "time";
  /**
   * Alert  Grouping  Setting  Updated  At
   * Format: date-time
   * @description The ISO8601 date/time an AlertGroupingSetting last got updated at.
   */
  alert__grouping__setting__updated__at?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ALERT_GROUPING_SETTINGS tool output.
 */
type PAGERDUTY_POST_ALERT_GROUPING_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS tool input.
 */
type PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS_INPUT = {
  /**
   * Filters  Date  Range  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with date_range_start is one year.
   */
  filters__date__range__end?: string;
  /**
   * Filters  Date  Range  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with date_range_end is one year.
   */
  filters__date__range__start?: string;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Responder  Ids
   * @description An array of responder IDs. Only incidents related to these responders will be included in the results. If omitted, all responders the requestor has access to will be included in the results.
   */
  filters__responder__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping.
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS tool output.
 */
type PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES tool input.
 */
type PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES_INPUT = {
  /**
   * Aggregate Unit
   * @description The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period.
   * @enum {string}
   */
  aggregate_unit?: "day" | "week" | "month";
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Pd  Advance  Used
   * @description If true, only incidents where PD Advance was used will be included in the results, and vice versa. If omitted, all incidents will be included.
   */
  filters__pd__advance__used?: boolean;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES tool output.
 */
type PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_CHANGE_EVENTS tool input.
 */
type PAGERDUTY_POST_CHANGE_EVENTS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_CHANGE_EVENTS tool output.
 */
type PAGERDUTY_POST_CHANGE_EVENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES tool input.
 */
type PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES_INPUT = {
  /**
   * Cache  Variable  Conditions
   * @description Each of these conditions is evaluated to check if an event matches this rule. The rule is considered a match if **any** of these conditions match.
   */
  cache__variable__conditions?: {
      /**
       * Expression
       * @description A PCL condition string. Note: The `trigger_count` and `resetting_trigger_count` operators are unsupported for Cache Variables
       */
      expression?: string;
  }[];
  /**
   * Cache  Variable  Configuration
   * @description Configuration
   */
  cache__variable__configuration?: {
      [key: string]: unknown;
  };
  /**
   * Cache  Variable  Created  At
   * Format: date-time
   * @description The date/time the object was created.
   */
  cache__variable__created__at?: string;
  /**
   * Cache  Variable  Created  By  Id
   * @description Id
   */
  cache__variable__created__by__id?: string;
  /**
   * Cache  Variable  Created  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  cache__variable__created__by__self?: string;
  /**
   * Cache  Variable  Created  By  Type
   * @description A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.
   */
  cache__variable__created__by__type?: string;
  /**
   * Cache  Variable  Disabled
   * @description Indicates whether the Cache Variable is disabled and would therefore not be evaluated.
   */
  cache__variable__disabled?: boolean;
  /**
   * Cache  Variable  Id
   * @description Id
   */
  cache__variable__id?: string;
  /**
   * Cache  Variable  Name
   * @description The name of the Cache Variable
   */
  cache__variable__name?: string;
  /**
   * Cache  Variable  Updated  At
   * Format: date-time
   * @description The date/time the object was last updated.
   */
  cache__variable__updated__at?: string;
  /**
   * Cache  Variable  Updated  By  Id
   * @description Id
   */
  cache__variable__updated__by__id?: string;
  /**
   * Cache  Variable  Updated  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  cache__variable__updated__by__self?: string;
  /**
   * Cache  Variable  Updated  By  Type
   * @description A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.
   */
  cache__variable__updated__by__type?: string;
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES tool output.
 */
type PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS tool input.
 */
type PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS_INPUT = {
  /**
   * Ending Before
   * @description A cursor to indicate the reference point that the results should precede
   */
  ending_before?: string;
  /**
   * Filters  Created  At  End
   * @description Filters the result, showing only the incidents where the creation timestamp is less than the filter value.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Filters the result, showing only the incidents where the creation timestamp is greater than or equal to the filter value.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Major
   * @description An incident is classified as a [major incident](https://support.pagerduty.com/docs/operational-reviews#major-incidents) if it has one of the two highest priorities, or if multiple responders are added and acknowledge the incident.
   */
  filters__major?: boolean;
  /**
   * Filters  Priority  Ids
   * @description The priority_ids filter applied to the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description The priority_names filter applied to the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only results related to these services will be returned.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents that are assigned to a member of these teams will be returned. Account must have the teams ability to use this parameter.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Updated  After
   * @description Filters the result, showing only incidents where the updated_at value is greater than the filter value.
   */
  filters__updated__after?: string;
  /**
   * Filters  Urgency
   * @description Filters the result, showing only the incidents where urgency matches the filter value.
   */
  filters__urgency?: string;
  /**
   * Limit
   * @description Number of results to include in each batch. Limits between 1 to 1000 are accepted.
   */
  limit?: number;
  /**
   * Order
   * @description The order the results;  asc for ascending, desc for descending. Defaults to "desc".
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column to use for ordering the results. Defaults to "created_at".
   * @enum {string}
   */
  order_by?: "created_at" | "seconds_to_resolve";
  /**
   * Starting After
   * @description A cursor to indicate the reference point that the results should follow
   */
  starting_after?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results.
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS tool output.
 */
type PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE tool input.
 */
type PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE_INPUT = {
  /**
   * Aggregate Unit
   * @description The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period.
   * @enum {string}
   */
  aggregate_unit?: "day" | "week" | "month";
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Pd  Advance  Used
   * @description If true, only incidents where PD Advance was used will be included in the results, and vice versa. If omitted, all incidents will be included.
   */
  filters__pd__advance__used?: boolean;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE tool output.
 */
type PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_METRICS tool input.
 */
type PAGERDUTY_POST_INCIDENT_METRICS_INPUT = {
  /**
   * Filters  Date  Range  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with date_range_start is one year.
   */
  filters__date__range__end?: string;
  /**
   * Filters  Date  Range  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with date_range_end is one year.
   */
  filters__date__range__start?: string;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Responder  Ids
   * @description An array of responder IDs. Only incidents related to these responders will be included in the results. If omitted, all responders the requestor has access to will be included in the results.
   */
  filters__responder__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping.
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_METRICS tool output.
 */
type PAGERDUTY_POST_INCIDENT_METRICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS tool input.
 */
type PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS_INPUT = {
  /**
   * Aggregate Unit
   * @description The time unit to aggregate metrics by.  If no value is provided, the metrics will be aggregated for the entire period.
   * @enum {string}
   */
  aggregate_unit?: "day" | "week" | "month";
  /**
   * Filters  Created  At  End
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at greater than or equal to this value will be omitted from the results. The maximum supported time range in conjunction with created_at_start is one year.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Accepts an ISO8601 DateTime string. Any incidents with a created_at less than this value will be omitted from the results. The maximum supported time range in conjunction with created_at_end is one year.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Escalation  Policy  Ids
   * @description An array of escalation policy IDs. Only incidents related to these escalation policies will be included in the results. If omitted, all escalation policies the requestor has access to will be included in the results.
   */
  filters__escalation__policy__ids?: string[];
  /**
   * Filters  Major
   * @description A boolean flag including whether results should contain *only* [major incidents](https://support.pagerduty.com/docs/operational-reviews#major-incidents), or exclude major incidents. If no value is provided all incidents will be included.
   */
  filters__major?: boolean;
  /**
   * Filters  Min  Ackowledgements
   * @description An integer that sets the requirement for the minimum number of acknowledgements to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 acknowledgement. If no value is provided, all incidents will be included.
   */
  filters__min__ackowledgements?: number;
  /**
   * Filters  Min  Manual  Escalations
   * @description An integer that sets the requirement for the minimum number of manual escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 manual escalation. If no value is provided, all incidents will be included.
   */
  filters__min__manual__escalations?: number;
  /**
   * Filters  Min  Timeout  Escalations
   * @description An integer that sets the requirement for the minimum number of timeout escalations to occur on an incident. For example, setting this to 1 will return only incidents that have at least 1 timeout escalation. If no value is provided, all incidents will be included.
   */
  filters__min__timeout__escalations?: number;
  /**
   * Filters  Pd  Advance  Used
   * @description If true, only incidents where PD Advance was used will be included in the results, and vice versa. If omitted, all incidents will be included.
   */
  filters__pd__advance__used?: boolean;
  /**
   * Filters  Priority  Ids
   * @description An array of priority IDs. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description An array of user-defined priority names. Only incidents with these priorities will be included in the results. If omitted, all priorities will be included in the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only incidents related to these services will be included in the results. If omitted, all services the requestor has access to will be included in the results.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents related to these teams will be included in the results. If omitted, all teams the requestor has access to will be included in the results.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Any incidents whose urgency does not match the provided string will be omitted from the results.
   * @enum {string}
   */
  filters__urgency?: "high" | "low";
  /**
   * Order
   * @description The order in which the results were sorted; asc for ascending, desc for descending.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column that was used for ordering the results.
   */
  order_by?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results and grouping. Must be in tzdata format. See list of accepted values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS tool output.
 */
type PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_NOTE_USING_ID tool input.
 */
type PAGERDUTY_POST_INCIDENT_NOTE_USING_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Note  Content
   * @description The note content
   */
  note__content?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_NOTE_USING_ID tool output.
 */
type PAGERDUTY_POST_INCIDENT_NOTE_USING_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_STATUS_UPDATE tool input.
 */
type PAGERDUTY_POST_INCIDENT_STATUS_UPDATE_INPUT = {
  /**
   * Html Message
   * @description The html content to be sent for the custom html email status update. Required if sending custom html email.
   */
  html_message?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Message
   * @description The message to be posted as a status update.
   */
  message?: string;
  /**
   * Subject
   * @description The subject to be sent for the custom html email status update. Required if sending custom html email.
   */
  subject?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_INCIDENT_STATUS_UPDATE tool output.
 */
type PAGERDUTY_POST_INCIDENT_STATUS_UPDATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS tool input.
 */
type PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS_INPUT = {
  /**
   * Ending Before
   * @description A cursor to indicate the reference point that the results should precede
   */
  ending_before?: string;
  /**
   * Filters  Created  At  End
   * @description Filters the result, showing only the incidents where the creation timestamp is less than the filter value.
   */
  filters__created__at__end?: string;
  /**
   * Filters  Created  At  Start
   * @description Filters the result, showing only the incidents where the creation timestamp is greater than the filter value.
   */
  filters__created__at__start?: string;
  /**
   * Filters  Major
   * @description An incident is classified as a [major incident](https://support.pagerduty.com/docs/operational-reviews#major-incidents) if it has one of the two highest priorities, or if multiple responders are added and acknowledge the incident.
   */
  filters__major?: boolean;
  /**
   * Filters  Priority  Ids
   * @description The priority_ids filter applied to the results.
   */
  filters__priority__ids?: string[];
  /**
   * Filters  Priority  Names
   * @description The priority_names filter applied to the results.
   */
  filters__priority__names?: string[];
  /**
   * Filters  Service  Ids
   * @description An array of service IDs. Only results related to these services will be returned.
   */
  filters__service__ids?: string[];
  /**
   * Filters  Team  Ids
   * @description An array of team IDs. Only incidents that are assigned to a member of these teams will be returned. Account must have the teams ability to use this parameter.
   */
  filters__team__ids?: string[];
  /**
   * Filters  Urgency
   * @description Filters the result, showing only the incidents where urgency matches the filter value.
   */
  filters__urgency?: string;
  /**
   * Limit
   * @description Number of results to include in each batch. Limits between 1 to 1000 are accepted.
   */
  limit?: number;
  /**
   * Order
   * @description The order in which to display the results; asc for ascending, desc for descending. Defaults to `desc`.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Order By
   * @description The column to use for ordering the results. Defaults to `incident_created_at`.
   * @enum {string}
   */
  order_by?: "incident_created_at";
  /**
   * Responder Id
   * @description The ID of the responder.
   */
  responder_id?: string;
  /**
   * Starting After
   * @description A cursor to indicate the reference point that the results should follow
   */
  starting_after?: string;
  /**
   * Time Zone
   * @description The time zone to use for the results.
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS tool output.
 */
type PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION tool input.
 */
type PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION tool output.
 */
type PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION tool input.
 */
type PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribables
   * @description Subscribables
   */
  subscribables?: {
      /**
       * Subscribable Id
       * @description The ID of the entity to subscribe to
       */
      subscribable_id?: string;
      /**
       * Subscribable Type
       * @description The type of the entity being subscribed to
       * @enum {string}
       */
      subscribable_type?: "incident" | "business_service";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION tool output.
 */
type PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_TEAM_TO_RUNNER tool input.
 */
type PAGERDUTY_POST_TEAM_TO_RUNNER_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_POST_TEAM_TO_RUNNER tool output.
 */
type PAGERDUTY_POST_TEAM_TO_RUNNER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_PREVIEW_SCHEDULE_OBJECT tool input.
 */
type PAGERDUTY_PREVIEW_SCHEDULE_OBJECT_INPUT = {
  /**
   * Overflow
   * @description Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:  - If you don"t pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`.
   * @default false
   */
  overflow: boolean;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_PREVIEW_SCHEDULE_OBJECT tool output.
 */
type PAGERDUTY_PREVIEW_SCHEDULE_OBJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT tool input.
 */
type PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT tool output.
 */
type PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ABILITIES_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_ABILITIES_LIST_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ABILITIES_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_ABILITIES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ABILITY_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_ABILITY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ABILITY_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_ABILITY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID_INPUT = {
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ADDON_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_ADDON_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ADDON_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_ADDON_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS tool input.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS_INPUT = {
  /**
   * Action Id
   * @description Action ID
   */
  action_id?: string;
  /**
   * Incident Id
   * @description Incident ID
   */
  incident_id?: string;
  /**
   * Invocation State
   * @description Invocation state
   * @enum {string}
   */
  invocation_state?: "prepared" | "created" | "sent" | "queued" | "running" | "aborted" | "completed" | "error" | "unknown";
  /**
   * Not Invocation State
   * @description Invocation state inverse filter (matches invocations NOT in the specified state)
   * @enum {string}
   */
  not_invocation_state?: "prepared" | "created" | "sent" | "queued" | "running" | "aborted" | "completed" | "error" | "unknown";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS tool output.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS tool input.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Team Id
   * @description The team ID
   */
  team_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS tool output.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION tool input.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION tool output.
 */
type PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICES tool input.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICES_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICES tool output.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES tool input.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES tool output.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS tool input.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS_INPUT = {
  /**
   * Ids
   * @description The IDs of the resources.
   */
  ids?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS tool output.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS tool input.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS tool output.
 */
type PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION tool input.
 */
type PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION_INPUT = {
  /**
   * Integration  Ids
   * @description An array of integration IDs. Only results related to these integrations will be returned.
   */
  integration__ids?: string[];
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search, as a UTC ISO 8601 datetime string. Will return an HTTP 400 for non-UTC datetimes.
   */
  since?: string;
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the date range over which you want to search, as a UTC ISO 8601 datetime string. Will return an HTTP 400 for non-UTC datetimes.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION tool output.
 */
type PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_CURRENT_USER_INFO tool input.
 */
type PAGERDUTY_RETRIEVE_CURRENT_USER_INFO_INPUT = {
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "contact_methods" | "notification_rules" | "teams" | "subdomains";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_CURRENT_USER_INFO tool output.
 */
type PAGERDUTY_RETRIEVE_CURRENT_USER_INFO_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_INPUT = {
  /**
   * Entity Type
   * @description Type of entity related with the tag
   * @enum {string}
   */
  entity_type?: "users" | "teams" | "escalation_policies";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE tool input.
 */
type PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE_INPUT = {
  /**
   * Entity Type
   * @description Type of entity related with the tag
   * @enum {string}
   */
  entity_type?: "users" | "teams" | "escalation_policies";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE tool output.
 */
type PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_EXTENSION_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_EXTENSION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "extension_schemas" | "extension_objects" | "temporarily_disabled";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_EXTENSION_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_EXTENSION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_EXTENSION_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_EXTENSION_LIST_INPUT = {
  /**
   * Extension Object Id
   * @description The id of the extension object you want to filter by.
   */
  extension_object_id?: string;
  /**
   * Extension Schema Id
   * @description Filter the extensions by extension vendor id.
   */
  extension_schema_id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "extension_objects" | "extension_schemas";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_EXTENSION_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_EXTENSION_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID tool input.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "acknowledgers" | "agents" | "assignees" | "conference_bridge" | "custom_fields" | "escalation_policies" | "first_trigger_log_entries" | "priorities" | "services" | "teams" | "users";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID tool output.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS tool input.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS_INPUT = {
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "field_options";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS tool output.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES tool input.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES tool output.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS tool input.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS_INPUT = {
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS tool output.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS tool input.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Incident Id
   * @description If provided, only show triggers configured on the service of the given incident. Useful for finding manual triggers that are configured on the service for a specific incident. Cannot be specified if `service_id` is provided.
   */
  incident_id?: string;
  /**
   * Is Disabled
   * @description If provided, filters between disabled and enabled Triggers. This query parameter is deprecated, and will be removed in a future version of this API.
   */
  is_disabled?: boolean;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Service Id
   * @description If provided, only show triggers configured for incidents in the given service. Useful for listing all workflows associated with the given service. Cannot be specified if `incident_id` is provided.
   */
  service_id?: string;
  /**
   * Sort By
   * @description If provided, returns triggers sorted by the specified property.
   * @enum {string}
   */
  sort_by?: "workflow_id" | "workflow_id asc" | "workflow_id desc" | "workflow_name" | "workflow_name asc" | "workflow_name desc";
  /**
   * Trigger Type
   * @description If provided, only show triggers of the given type. For example “manual” to search for manual triggers
   * @enum {string}
   */
  trigger_type?: "manual" | "conditional";
  /**
   * Workflow Id
   * @description If provided, only show triggers configured to start the given workflow. Useful for listing all services associated with the given workflow
   */
  workflow_id?: string;
  /**
   * Workflow Name Contains
   * @description If provided, only show triggers configured to start workflows whose name contain the provided value.
   */
  workflow_name_contains?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS tool output.
 */
type PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID tool input.
 */
type PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "services" | "vendors";
  /**
   * Integration Id
   * @description The integration ID on the service.
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID tool output.
 */
type PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS tool input.
 */
type PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS tool output.
 */
type PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_LIST_OF_SERVICES tool input.
 */
type PAGERDUTY_RETRIEVE_LIST_OF_SERVICES_INPUT = {
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "escalation_policies" | "teams" | "integrations" | "auto_pause_notifications_parameters";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Name
   * @description Filters the results, showing only services with the specified name.
   */
  name?: string;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Sort By
   * @description Used to specify the field you wish to sort the results on.
   * @default name
   * @enum {string}
   */
  sort_by: "name" | "name:asc" | "name:desc";
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_LIST_OF_SERVICES tool output.
 */
type PAGERDUTY_RETRIEVE_LIST_OF_SERVICES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "incidents" | "services" | "channels" | "teams";
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS tool input.
 */
type PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS_INPUT = {
  /**
   * Filter
   * @description Only return maintenance windows in a given state.
   * @enum {string}
   */
  filter?: "past" | "future" | "ongoing" | "open" | "all";
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "teams" | "services" | "users";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Service  Ids
   * @description An array of service IDs. Only results related to these services will be returned.
   */
  service__ids?: string[];
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS tool output.
 */
type PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT tool input.
 */
type PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT tool output.
 */
type PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_NOTIFICATIONS tool input.
 */
type PAGERDUTY_RETRIEVE_NOTIFICATIONS_INPUT = {
  /**
   * Filter
   * @description Return notification of this type only.
   * @enum {string}
   */
  filter?: "sms_notification" | "email_notification" | "phone_notification" | "push_notification";
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "users";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search. The time element is optional.
   */
  since?: string;
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the date range over which you want to search. This should be in the same format as since. The size of the date range must be less than 3 months.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_NOTIFICATIONS tool output.
 */
type PAGERDUTY_RETRIEVE_NOTIFICATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Oncall Handoff Notification Rule Id
   * @description The oncall handoff notification rule ID on the user.
   */
  oncall_handoff_notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES tool input.
 */
type PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES tool output.
 */
type PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ONCALL_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_ONCALL_LIST_INPUT = {
  /**
   * Earliest
   * @description This will filter on-calls such that only the earliest on-call for each combination of escalation policy, escalation level, and user is returned. This is useful for determining when the "next" on-calls are for a given set of filters.
   */
  earliest?: boolean;
  /**
   * Escalation  Policy  Ids
   * @description Filters the results, showing only on-calls for the specified escalation policy IDs.
   */
  escalation__policy__ids?: string[];
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "escalation_policies" | "users" | "schedules";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Schedule  Ids
   * @description Filters the results, showing only on-calls for the specified schedule IDs. If `null` is provided in the array, it includes permanent on-calls due to direct user escalation targets.
   */
  schedule__ids?: string[];
  /**
   * Since
   * @description The start of the time range over which you want to search. If an on-call period overlaps with the range, it will be included in the result. Defaults to current time. On-call shifts are limited to 90 days in the future.
   */
  since?: string;
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the account time zone.
   */
  time_zone?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the time range over which you want to search. If an on-call period overlaps with the range, it will be included in the result. Defaults to current time. On-call shifts are limited to 90 days in the future, and the `until` time cannot be before the `since` time.
   */
  until?: string;
  /**
   * User  Ids
   * @description Filters the results, showing only on-calls for the specified user IDs.
   */
  user__ids?: string[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_ONCALL_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_ONCALL_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_PAST_INCIDENTS tool input.
 */
type PAGERDUTY_RETRIEVE_PAST_INCIDENTS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The number of results to be returned in the response.
   * @default 5
   */
  limit: number;
  /**
   * Total
   * @description By default the `total` field in the response body is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated with the total number of Past Incidents.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_PAST_INCIDENTS tool output.
 */
type PAGERDUTY_RETRIEVE_PAST_INCIDENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULESET_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_RULESET_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULESET_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_RULESET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULESET_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_RULESET_LIST_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULESET_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_RULESET_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID tool input.
 */
type PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "migrated_metadata";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID tool output.
 */
type PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID tool input.
 */
type PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Rule Id
   * @description The id of the Event Rule to retrieve.
   */
  rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID tool output.
 */
type PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Overflow
   * @description Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:  - If you don"t pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`.
   * @default false
   */
  overflow: boolean;
  /**
   * Since
   * @description The start of the date range over which you want to show schedule entries. Defaults to 2 weeks before until if an until is given.
   */
  since?: string;
  /**
   * Time Zone
   * @description Time zone in which results will be rendered. This will default to the schedule"s time zone.
   */
  time_zone?: string;
  /**
   * Until
   * @description The end of the date range over which you want to show schedule entries. Defaults to 2 weeks after since if a since is given.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID_INPUT = {
  /**
   * Editable
   * @description When this parameter is present, only editable overrides will be returned. The result will only include the id of the override if this parameter is present. Only future overrides are editable.
   */
  editable?: boolean;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Overflow
   * @description Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter overflow=true is passed. This parameter defaults to false.
   */
  overflow?: boolean;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SERVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "escalation_policies" | "teams" | "auto_pause_notifications_parameters" | "integrations";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Integration  Ids
   * @description An array of integration IDs. Only results related to these integrations will be returned.
   */
  integration__ids?: string[];
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search, as a UTC ISO 8601 datetime string. Will return an HTTP 400 for non-UTC datetimes.
   */
  since?: string;
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
  /**
   * Until
   * @description The end of the date range over which you want to search, as a UTC ISO 8601 datetime string. Will return an HTTP 400 for non-UTC datetimes.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS tool input.
 */
type PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS_INPUT = {
  /**
   * Additional  Fields
   * @description Provides access to additional fields such as highest priority per business service and total impacted count
   * @enum {string}
   */
  additional__fields?: "services.highest_impacting_priority" | "total_impacted_count";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS tool output.
 */
type PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE tool input.
 */
type PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Service Id
   * @description The ID of the Status Page service.
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE tool output.
 */
type PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STANDARDS_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_STANDARDS_LIST_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: boolean;
  /**
   * Resource Type
   * @description Resource Type
   * @enum {string}
   */
  resource_type?: "technical_service";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STANDARDS_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_STANDARDS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STANDARDS_SCORES tool input.
 */
type PAGERDUTY_RETRIEVE_STANDARDS_SCORES_INPUT = {
  /**
   * Id
   * @description Id of the resource to apply the standards.
   */
  id?: string;
  /**
   * Resource Type
   * @description Resource Type
   * @enum {string}
   */
  resource_type?: "technical_services";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STANDARDS_SCORES tool output.
 */
type PAGERDUTY_RETRIEVE_STANDARDS_SCORES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE tool input.
 */
type PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE_INPUT = {
  /**
   * Ids
   * @description Ids of resources to apply the standards. Maximum of 100 items
   */
  ids?: string[];
  /**
   * Resource Type
   * @description Resource Type
   * @enum {string}
   */
  resource_type?: "technical_services";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE tool output.
 */
type PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION tool input.
 */
type PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION tool output.
 */
type PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG tool input.
 */
type PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG_INPUT = {
  /**
   * Url Slug
   * @description The `url_slug` for a status dashboard
   */
  url_slug?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG tool output.
 */
type PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS tool input.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Type
   * @description Filter by Post type.
   * @enum {string}
   */
  post_type?: "incident" | "maintenance";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS tool output.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGE_POST tool input.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGE_POST_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Type
   * @description Filter by Post type.
   * @enum {string}
   */
  post_type?: "incident" | "maintenance";
  /**
   * Reviewed Status
   * @description Filter by the reviewed status of the Post to retrieve.
   * @enum {string}
   */
  reviewed_status?: "approved" | "not_reviewed";
  /**
   * Status
   * @description Filter by an array of Status identifiers.
   */
  status?: string[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGE_POST tool output.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGE_POST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Type
   * @description Filter by Post type.
   * @enum {string}
   */
  post_type?: "incident" | "maintenance";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Channel
   * @description Filter by Subscription channel.
   * @enum {string}
   */
  channel?: "webhook" | "email" | "slack";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Status
   * @description Filter by Subscription status.
   * @enum {string}
   */
  status?: "active" | "pending";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TAGS tool input.
 */
type PAGERDUTY_RETRIEVE_TAGS_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the tags whose label matches the query.
   */
  query?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TAGS tool output.
 */
type PAGERDUTY_RETRIEVE_TAGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TAG_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_TAG_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TAG_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_TAG_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS tool input.
 */
type PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS tool output.
 */
type PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "privileges";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEAM_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_TEAM_LIST_INPUT = {
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEAM_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_TEAM_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS tool input.
 */
type PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS tool output.
 */
type PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS tool input.
 */
type PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS_INPUT = object;

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS tool output.
 */
type PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID tool input.
 */
type PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Since
   * @description The start of the date range over which you want to search.
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID tool output.
 */
type PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USERS_LIST tool input.
 */
type PAGERDUTY_RETRIEVE_USERS_LIST_INPUT = {
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "contact_methods" | "notification_rules" | "teams" | "subdomains";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Query
   * @description Filters the result, showing only the records whose name matches the query.
   */
  query?: string;
  /**
   * Team  Ids
   * @description An array of team IDs. Only results related to these teams will be returned. Account must have the `teams` ability to use this parameter.
   */
  team__ids?: string[];
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USERS_LIST tool output.
 */
type PAGERDUTY_RETRIEVE_USERS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID_INPUT = {
  /**
   * Cursor
   * @description Optional parameter used to request the "next" set of results from an API.  The value provided here is most commonly obtained from the `next_cursor` field of the previous request.  When no value is provided, the request starts at the beginning of the result set.
   */
  cursor?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The minimum of the `limit` parameter used in the request or the maximum request size of the API.
   */
  limit?: number;
  /**
   * Since
   * @description The start of the date range over which you want to search. If not specified, defaults to `now() - 24 hours` (past 24 hours)
   */
  since?: string;
  /**
   * Until
   * @description The end of the date range over which you want to search. If not specified, defaults to `now()`. May not be more than 31 days after `since`.
   */
  until?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_USER_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional Models to include in response.
   * @enum {string}
   */
  include?: "contact_methods" | "notification_rules" | "teams" | "subdomains";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_USER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID tool input.
 */
type PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID tool output.
 */
type PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION tool input.
 */
type PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION tool output.
 */
type PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "contact_methods";
  /**
   * Notification Rule Id
   * @description The notification rule ID on the user.
   */
  notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES tool input.
 */
type PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "contact_methods";
  /**
   * Urgency
   * @description The incident urgency for which the notification rules are applied. If not specified, defaults to `high`.
   * @enum {string}
   */
  urgency?: "high" | "low" | "all";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES tool output.
 */
type PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Include
   * @description Array of additional details to include.
   * @enum {string}
   */
  include?: "contact_methods";
  /**
   * Status Update Notification Rule Id
   * @description The status update notification rule ID on the user.
   */
  status_update_notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_VENDOR_BY_ID tool input.
 */
type PAGERDUTY_RETRIEVE_VENDOR_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_VENDOR_BY_ID tool output.
 */
type PAGERDUTY_RETRIEVE_VENDOR_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS tool input.
 */
type PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS_INPUT = {
  /**
   * Filter Id
   * @description The id of the resource to filter upon. Required if filter_type is service or team.
   */
  filter_id?: string;
  /**
   * Filter Type
   * @description The type of resource to filter upon.
   * @enum {string}
   */
  filter_type?: "account" | "service" | "team";
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS tool output.
 */
type PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS tool input.
 */
type PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Message
   * @description The message sent with the responder request.
   */
  message?: string;
  /**
   * Requester Id
   * @description The user id of the requester.
   */
  requester_id?: string;
  /**
   * Responder Request Targets
   * @description The array of targets the responder request is sent to.
   */
  responder_request_targets?: unknown;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS tool output.
 */
type PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS tool input.
 */
type PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS_INPUT = {
  /**
   * Business Service Id
   * @description The business service ID.
   */
  business_service_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Relation
   * @description Relation
   * @enum {string}
   */
  relation?: "impacted" | "not_impacted";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS tool output.
 */
type PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD tool input.
 */
type PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD_INPUT = {
  /**
   * Global  Threshold  Id
   * @description Id
   */
  global__threshold__id?: string;
  /**
   * Global  Threshold  Order
   * @description Order
   */
  global__threshold__order?: number;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD tool output.
 */
type PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION tool input.
 */
type PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION_INPUT = {
  /**
   * Duration
   * @description The number of seconds to snooze the incident for. After this number of seconds has elapsed, the incident will return to the "triggered" state.
   */
  duration?: number;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION tool output.
 */
type PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES tool input.
 */
type PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribers
   * @description Subscribers
   */
  subscribers?: {
      /**
       * Subscriber Id
       * @description The ID of the entity being subscribed
       */
      subscriber_id?: string;
      /**
       * Subscriber Type
       * @description The type of the entity being subscribed
       * @enum {string}
       */
      subscriber_type?: "user" | "team";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES tool output.
 */
type PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES tool input.
 */
type PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribers
   * @description Subscribers
   */
  subscribers?: {
      /**
       * Subscriber Id
       * @description The ID of the entity being subscribed
       */
      subscriber_id?: string;
      /**
       * Subscriber Type
       * @description The type of the entity being subscribed
       * @enum {string}
       */
      subscriber_type?: "user" | "team";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES tool output.
 */
type PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS tool input.
 */
type PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribables
   * @description Subscribables
   */
  subscribables?: {
      /**
       * Subscribable Id
       * @description The ID of the entity to subscribe to
       */
      subscribable_id?: string;
      /**
       * Subscribable Type
       * @description The type of the entity being subscribed to
       * @enum {string}
       */
      subscribable_type?: "incident" | "business_service";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS tool output.
 */
type PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY tool input.
 */
type PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribers
   * @description Subscribers
   */
  subscribers?: {
      /**
       * Subscriber Id
       * @description The ID of the entity being subscribed
       */
      subscriber_id?: string;
      /**
       * Subscriber Type
       * @description The type of the entity being subscribed
       * @enum {string}
       */
      subscriber_type?: "user" | "team";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY tool output.
 */
type PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES tool input.
 */
type PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribers
   * @description Subscribers
   */
  subscribers?: {
      /**
       * Subscriber Id
       * @description The ID of the entity being subscribed
       */
      subscriber_id?: string;
      /**
       * Subscriber Type
       * @description The type of the entity being subscribed
       * @enum {string}
       */
      subscriber_type?: "user" | "team";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES tool output.
 */
type PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS tool input.
 */
type PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribables
   * @description Subscribables
   */
  subscribables?: {
      /**
       * Subscribable Id
       * @description The ID of the entity to subscribe to
       */
      subscribable_id?: string;
      /**
       * Subscribable Type
       * @description The type of the entity being subscribed to
       * @enum {string}
       */
      subscribable_type?: "incident" | "business_service";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS tool output.
 */
type PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS tool input.
 */
type PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Subscribables
   * @description Subscribables
   */
  subscribables?: {
      /**
       * Subscribable Id
       * @description The ID of the entity to subscribe to
       */
      subscribable_id?: string;
      /**
       * Subscribable Type
       * @description The type of the entity being subscribed to
       * @enum {string}
       */
      subscribable_type?: "incident" | "business_service";
  }[];
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS tool output.
 */
type PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ADD_ON_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_ADD_ON_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ADD_ON_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_ADD_ON_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID_INPUT = {
  /**
   * Alert  Grouping  Setting  Config
   * @description Config
   */
  alert__grouping__setting__config?: {
      [key: string]: unknown;
  };
  /**
   * Alert  Grouping  Setting  Created  At
   * Format: date-time
   * @description The ISO8601 date/time an AlertGroupingSetting got created at.
   */
  alert__grouping__setting__created__at?: string;
  /**
   * Alert  Grouping  Setting  Description
   * @description An optional description in string that provides more information about an AlertGroupingSetting object.
   */
  alert__grouping__setting__description?: string;
  /**
   * Alert  Grouping  Setting  Id
   * @description Id
   */
  alert__grouping__setting__id?: string;
  /**
   * Alert  Grouping  Setting  Name
   * @description An optional short-form string that provides succinct information about an AlertGroupingSetting object suitable for primary labeling of the entity. It is not intended to be an identifier.
   */
  alert__grouping__setting__name?: string;
  /**
   * Alert  Grouping  Setting  Services
   * @description The array of one or many Services with just ServiceID/name that the AlertGroupingSetting applies to. Type of content_based_intelligent allows for only one service in the array.
   */
  alert__grouping__setting__services?: unknown[];
  /**
   * Alert  Grouping  Setting  Type
   * @description Type
   * @enum {string}
   */
  alert__grouping__setting__type?: "content_based" | "content_based_intelligent" | "intelligent" | "time";
  /**
   * Alert  Grouping  Setting  Updated  At
   * Format: date-time
   * @description The ISO8601 date/time an AlertGroupingSetting last got updated at.
   */
  alert__grouping__setting__updated__at?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ALERT_IN_INCIDENT tool input.
 */
type PAGERDUTY_UPDATE_ALERT_IN_INCIDENT_INPUT = {
  /**
   * Alert  Incident  Id
   * @description Id
   */
  alert__incident__id?: string;
  /**
   * Alert  Incident  Type
   * @description Type
   * @enum {string}
   */
  alert__incident__type?: "incident_reference";
  /**
   * Alert  Status
   * @description Status
   * @enum {string}
   */
  alert__status?: "resolved" | "triggered";
  /**
   * Alert Id
   * @description The id of the alert to retrieve.
   */
  alert_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ALERT_IN_INCIDENT tool output.
 */
type PAGERDUTY_UPDATE_ALERT_IN_INCIDENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_AN_INCIDENT_TYPE tool input.
 */
type PAGERDUTY_UPDATE_AN_INCIDENT_TYPE_INPUT = {
  /**
   * Incident  Type  Description
   * @description The description of the Incident Type.
   */
  incident__type__description?: string;
  /**
   * Incident  Type  Display  Name
   * @description The display name of the Incident Type.
   */
  incident__type__display__name?: string;
  /**
   * Incident  Type  Enabled
   * @description Whether the Incident Type is enabled. Defaults to true if not provided.
   */
  incident__type__enabled?: boolean;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_AN_INCIDENT_TYPE tool output.
 */
type PAGERDUTY_UPDATE_AN_INCIDENT_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO tool input.
 */
type PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Runner
   * @description Runner
   */
  runner?: {
      [key: string]: unknown;
  };
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO tool output.
 */
type PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE tool input.
 */
type PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_INPUT = {
  /**
   * Field  Default  Value
   * @description The default value of the custom field.
   */
  field__default__value?: string;
  /**
   * Field  Description
   * @description The description of the custom field.
   */
  field__description?: string;
  /**
   * Field  Display  Name
   * @description The display name of the Incident Type.
   */
  field__display__name?: string;
  /**
   * Field  Enabled
   * @description Whether the Incident Type is enabled.
   */
  field__enabled?: boolean;
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE tool output.
 */
type PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD tool input.
 */
type PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_INPUT = {
  /**
   * Field  Option  Data  Data  Type
   * @description The data type of the Field Option on the Custom Field.
   */
  field__option__data__data__type?: string;
  /**
   * Field  Option  Data  Value
   * @description The value of the Field Option on the Custom Field.
   */
  field__option__data__value?: string;
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Field Option Id
   * @description The ID of the field option.
   */
  field_option_id?: string;
  /**
   * Type Id Or Name
   * @description The ID or name of the Incident Type.
   */
  type_id_or_name?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD tool output.
 */
type PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_A_TRIGGER tool input.
 */
type PAGERDUTY_UPDATE_A_TRIGGER_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_A_TRIGGER tool output.
 */
type PAGERDUTY_UPDATE_A_TRIGGER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID_INPUT = {
  /**
   * Business  Service  Description
   * @description The description of the Business Service.
   */
  business__service__description?: string;
  /**
   * Business  Service  Name
   * @description The name of the Business Service.
   */
  business__service__name?: string;
  /**
   * Business  Service  Point  Of  Contact
   * @description The owner of the Business Service.
   */
  business__service__point__of__contact?: string;
  /**
   * Business  Service  Team  Id
   * @description The team ID
   */
  business__service__team__id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME tool input.
 */
type PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME_INPUT = {
  /**
   * Field  Default  Value
   * @description Default Value
   */
  field__default__value?: {
      [key: string]: unknown;
  };
  /**
   * Field  Description
   * @description A description of the data this field contains.
   */
  field__description?: string;
  /**
   * Field  Display  Name
   * @description The human-readable name of the field. This must be unique across an account.
   */
  field__display__name?: string;
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME tool output.
 */
type PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION tool input.
 */
type PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION_INPUT = {
  /**
   * Field  Option  Created  At
   * Format: date-time
   * @description The date/time the object was created at.
   */
  field__option__created__at?: string;
  /**
   * Field  Option  Data
   * @description Data
   */
  field__option__data?: {
      [key: string]: unknown;
  };
  /**
   * Field  Option  Id
   * @description The ID of the resource.
   */
  field__option__id?: string;
  /**
   * Field  Option  Type
   * @description Type
   * @enum {string}
   */
  field__option__type?: "field_option";
  /**
   * Field  Option  Updated  At
   * Format: date-time
   * @description The date/time the object was last updated.
   */
  field__option__updated__at?: string;
  /**
   * Field Id
   * @description The ID of the field.
   */
  field_id?: string;
  /**
   * Field Option Id
   * @description The ID of the field option.
   */
  field_option_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION tool output.
 */
type PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM tool input.
 */
type PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM_INPUT = {
  /**
   * Escalation Policy Id
   * @description The escalation policy ID on the team.
   */
  escalation_policy_id?: string;
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM tool output.
 */
type PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
  /**
   * Orchestration  Created  At
   * Format: date-time
   * @description The date the Orchestration was created at.
   */
  orchestration__created__at?: string;
  /**
   * Orchestration  Created  By  Id
   * @description Id
   */
  orchestration__created__by__id?: string;
  /**
   * Orchestration  Created  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__created__by__self?: string;
  /**
   * Orchestration  Created  By  Type
   * @description A string that determines the schema of the object
   */
  orchestration__created__by__type?: string;
  /**
   * Orchestration  Description
   * @description A description of this Orchestration"s purpose.
   */
  orchestration__description?: string;
  /**
   * Orchestration  Id
   * @description ID of the Orchestration.
   */
  orchestration__id?: string;
  /**
   * Orchestration  Integrations
   * @description Integrations
   */
  orchestration__integrations?: {
      /**
       * Id
       * @description ID of the Integration.
       */
      id?: string;
      /**
       * Label
       * @description Name of the Integration.
       */
      label?: string;
      /**
       * Parameters  Routing  Key
       * @description Routing Key used to send Events to this Orchestration
       */
      parameters__routing__key?: string;
      /**
       * Parameters  Type
       * @description Type
       * @default global
       */
      parameters__type: string;
  }[];
  /**
   * Orchestration  Name
   * @description Name of the Orchestration.
   */
  orchestration__name?: string;
  /**
   * Orchestration  Routes
   * @description Number of different Service Orchestration being routed to
   */
  orchestration__routes?: number;
  /**
   * Orchestration  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__self?: string;
  /**
   * Orchestration  Team  Id
   * @description Id
   */
  orchestration__team__id?: string;
  /**
   * Orchestration  Team  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__team__self?: string;
  /**
   * Orchestration  Team  Type
   * @description A string that determines the schema of the object
   */
  orchestration__team__type?: string;
  /**
   * Orchestration  Updated  At
   * Format: date-time
   * @description The date the Orchestration was last updated.
   */
  orchestration__updated__at?: string;
  /**
   * Orchestration  Updated  By  Id
   * @description Id
   */
  orchestration__updated__by__id?: string;
  /**
   * Orchestration  Updated  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  orchestration__updated__by__self?: string;
  /**
   * Orchestration  Updated  By  Type
   * @description A string that determines the schema of the object
   */
  orchestration__updated__by__type?: string;
  /**
   * Orchestration  Version
   * @description Version of the Orchestration.
   */
  orchestration__version?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE tool input.
 */
type PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE_INPUT = {
  /**
   * Cache  Variable  Conditions
   * @description Each of these conditions is evaluated to check if an event matches this rule. The rule is considered a match if **any** of these conditions match.
   */
  cache__variable__conditions?: {
      /**
       * Expression
       * @description A PCL condition string. Note: The `trigger_count` and `resetting_trigger_count` operators are unsupported for Cache Variables
       */
      expression?: string;
  }[];
  /**
   * Cache  Variable  Configuration
   * @description Configuration
   */
  cache__variable__configuration?: {
      [key: string]: unknown;
  };
  /**
   * Cache  Variable  Created  At
   * Format: date-time
   * @description The date/time the object was created.
   */
  cache__variable__created__at?: string;
  /**
   * Cache  Variable  Created  By  Id
   * @description Id
   */
  cache__variable__created__by__id?: string;
  /**
   * Cache  Variable  Created  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  cache__variable__created__by__self?: string;
  /**
   * Cache  Variable  Created  By  Type
   * @description A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.
   */
  cache__variable__created__by__type?: string;
  /**
   * Cache  Variable  Disabled
   * @description Indicates whether the Cache Variable is disabled and would therefore not be evaluated.
   */
  cache__variable__disabled?: boolean;
  /**
   * Cache  Variable  Id
   * @description Id
   */
  cache__variable__id?: string;
  /**
   * Cache  Variable  Name
   * @description The name of the Cache Variable
   */
  cache__variable__name?: string;
  /**
   * Cache  Variable  Updated  At
   * Format: date-time
   * @description The date/time the object was last updated.
   */
  cache__variable__updated__at?: string;
  /**
   * Cache  Variable  Updated  By  Id
   * @description Id
   */
  cache__variable__updated__by__id?: string;
  /**
   * Cache  Variable  Updated  By  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  cache__variable__updated__by__self?: string;
  /**
   * Cache  Variable  Updated  By  Type
   * @description A string that determines the schema of the object. This must be the standard name for the entity, suffixed by `_reference` if the object is a reference.
   */
  cache__variable__updated__by__type?: string;
  /**
   * Cache Variable Id
   * @description The ID of a Cache Variable.
   */
  cache_variable_id?: string;
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE tool output.
 */
type PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_RULE_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_EVENT_RULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Rule Id
   * @description The id of the Event Rule to update.
   */
  rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_RULE_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_EVENT_RULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE tool input.
 */
type PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Rule Id
   * @description The id of the Event Rule to update on the Service.
   */
  rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE tool output.
 */
type PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EXTENSION_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_EXTENSION_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_EXTENSION_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_EXTENSION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION tool input.
 */
type PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION tool output.
 */
type PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_ALERTS tool input.
 */
type PAGERDUTY_UPDATE_INCIDENT_ALERTS_INPUT = {
  /**
   * Alerts
   * @description An array of alerts, including the parameters to update for each alert.
   */
  alerts?: {
      /**
       * Incident  Id
       * @description Id
       */
      incident__id?: string;
      /**
       * Incident  Type
       * @description Type
       * @enum {string}
       */
      incident__type?: "incident_reference";
      /**
       * Status
       * @description Status
       * @enum {string}
       */
      status?: "resolved" | "triggered";
  }[];
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_ALERTS tool output.
 */
type PAGERDUTY_UPDATE_INCIDENT_ALERTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_INCIDENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Incident  Assignments
   * @description Assign the incident to these assignees.
   */
  incident__assignments?: unknown[];
  /**
   * Incident  Conference  Bridge  Conference  Number
   * @description The phone number of the conference call for the conference bridge. Phone numbers should be formatted like +1 415-555-1212,,,,1234#, where a comma (,) represents a one-second wait and pound (#) completes access code input.
   */
  incident__conference__bridge__conference__number?: string;
  /**
   * Incident  Conference  Bridge  Conference  Url
   * Format: url
   * @description An URL for the conference bridge. This could be a link to a web conference or Slack channel.
   */
  incident__conference__bridge__conference__url?: string;
  /**
   * Incident  Escalation  Level
   * @description Escalate the incident to this level in the escalation policy.
   */
  incident__escalation__level?: number;
  /**
   * Incident  Incident  Type  Id
   * @description Id
   */
  incident__incident__type__id?: string;
  /**
   * Incident  Incident  Type  Name
   * @description The name of the Incident Type.
   */
  incident__incident__type__name?: string;
  /**
   * Incident  Resolution
   * @description The resolution for this incident if status is set to resolved.
   */
  incident__resolution?: string;
  /**
   * Incident  Status
   * @description The new status of the incident.
   * @enum {string}
   */
  incident__status?: "resolved" | "acknowledged";
  /**
   * Incident  Title
   * @description The new title of the incident.
   */
  incident__title?: string;
  /**
   * Incident  Type
   * @description The incident type.
   * @enum {string}
   */
  incident__type?: "incident" | "incident_reference";
  /**
   * Incident  Urgency
   * @description The urgency of the incident.
   * @enum {string}
   */
  incident__urgency?: "high" | "low";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_INCIDENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES tool input.
 */
type PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES_INPUT = {
  /**
   * Custom Fields
   * @description Custom Fields
   */
  custom_fields?: {
      [key: string]: unknown;
  }[];
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES tool output.
 */
type PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_DETAILS tool input.
 */
type PAGERDUTY_UPDATE_INCIDENT_DETAILS_INPUT = {
  /**
   * Incidents
   * @description An array of incidents, including the parameters to update.
   */
  incidents?: unknown[];
  /**
   * Limit
   * @description The number of results per page.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset to start pagination search results.
   */
  offset?: number;
  /**
   * Total
   * @description By default the `total` field in pagination responses is set to `null` to provide the fastest possible response times. Set `total` to `true` for this field to be populated. See our [Pagination Docs](https://developer.pagerduty.com/docs/rest-api-v2/pagination/) for more information.
   * @default false
   */
  total: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_DETAILS tool output.
 */
type PAGERDUTY_UPDATE_INCIDENT_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_WORKFLOW tool input.
 */
type PAGERDUTY_UPDATE_INCIDENT_WORKFLOW_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INCIDENT_WORKFLOW tool output.
 */
type PAGERDUTY_UPDATE_INCIDENT_WORKFLOW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID tool input.
 */
type PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Integration Id
   * @description The integration ID on the service.
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID tool output.
 */
type PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INTEGRATION_LABEL tool input.
 */
type PAGERDUTY_UPDATE_INTEGRATION_LABEL_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
  /**
   * Integration  Label
   * @description Name of the Integration.
   */
  integration__label?: string;
  /**
   * Integration Id
   * @description The ID of an Integration.
   */
  integration_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_INTEGRATION_LABEL tool output.
 */
type PAGERDUTY_UPDATE_INTEGRATION_LABEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL tool input.
 */
type PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL_INPUT = {
  /**
   * Channel  Details
   * @description New channel details
   */
  channel__details?: string;
  /**
   * Channel  Type
   * @description Channel type. Cannot be changed and must match the present value.
   * @enum {string}
   */
  channel__type?: "web_trigger" | "mobile";
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL tool output.
 */
type PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE tool input.
 */
type PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Oncall  Handoff  Notification  Rule  Handoff  Type
   * @description The type of handoff being created.
   * @default both
   * @enum {string}
   */
  oncall__handoff__notification__rule__handoff__type: "both" | "oncall" | "offcall";
  /**
   * Oncall  Handoff  Notification  Rule  Id
   * @description Id
   */
  oncall__handoff__notification__rule__id?: string;
  /**
   * Oncall  Handoff  Notification  Rule  Notify  Advance  In  Minutes
   * @description The delay before firing the rule, in minutes.
   */
  oncall__handoff__notification__rule__notify__advance__in__minutes?: number;
  /**
   * Oncall Handoff Notification Rule Id
   * @description The oncall handoff notification rule ID on the user.
   */
  oncall_handoff_notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE tool output.
 */
type PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS tool input.
 */
type PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS tool output.
 */
type PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_RULESET_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_RULESET_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Ruleset  Created  At
   * Format: date-time
   * @description The date the Ruleset was created at.
   */
  ruleset__created__at?: string;
  /**
   * Ruleset  Creator  Id
   * @description Id
   */
  ruleset__creator__id?: string;
  /**
   * Ruleset  Creator  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  ruleset__creator__self?: string;
  /**
   * Ruleset  Creator  Type
   * @description A string that determines the schema of the object
   */
  ruleset__creator__type?: string;
  /**
   * Ruleset  Id
   * @description ID of the Ruleset.
   */
  ruleset__id?: string;
  /**
   * Ruleset  Name
   * @description Name of the Ruleset.
   */
  ruleset__name?: string;
  /**
   * Ruleset  Routing  Keys
   * @description Routing keys routed to this Ruleset.
   */
  ruleset__routing__keys?: string[];
  /**
   * Ruleset  Self
   * Format: url
   * @description the API show URL at which the object is accessible
   */
  ruleset__self?: string;
  /**
   * Ruleset  Team  Id
   * @description Id
   */
  ruleset__team__id?: string;
  /**
   * Ruleset  Team  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  ruleset__team__self?: string;
  /**
   * Ruleset  Team  Type
   * @description A string that determines the schema of the object
   */
  ruleset__team__type?: string;
  /**
   * Ruleset  Type
   * @description Type
   * @enum {string}
   */
  ruleset__type?: "global" | "default_global";
  /**
   * Ruleset  Updated  At
   * Format: date-time
   * @description The date the Ruleset was last updated.
   */
  ruleset__updated__at?: string;
  /**
   * Ruleset  Updater  Id
   * @description Id
   */
  ruleset__updater__id?: string;
  /**
   * Ruleset  Updater  Self
   * Format: url
   * @description The API show URL at which the object is accessible
   */
  ruleset__updater__self?: string;
  /**
   * Ruleset  Updater  Type
   * @description A string that determines the schema of the object
   */
  ruleset__updater__type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_RULESET_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_RULESET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_SCHEDULE_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_SCHEDULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Overflow
   * @description Any on-call schedule entries that pass the date range bounds will be truncated at the bounds, unless the parameter `overflow=true` is passed. This parameter defaults to false. For instance, if your schedule is a rotation that changes daily at midnight UTC, and your date range is from `2011-06-01T10:00:00Z` to `2011-06-01T14:00:00Z`:  - If you don"t pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T10:00:00Z` and end of `2011-06-01T14:00:00Z`. - If you do pass the `overflow=true` parameter, you will get one schedule entry returned with a start of `2011-06-01T00:00:00Z` and end of `2011-06-02T00:00:00Z`.
   * @default false
   */
  overflow: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_SCHEDULE_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_SCHEDULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_SERVICE_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_SERVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_SERVICE_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_SERVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS tool input.
 */
type PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS_INPUT = {
  /**
   * Active
   * @description The status of the service orchestration.
   */
  active?: boolean;
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS tool output.
 */
type PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STANDARD_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_STANDARD_BY_ID_INPUT = {
  /**
   * Id
   * @description Id of the standard
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STANDARD_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_STANDARD_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST tool input.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post  Update  Impacted  Services
   * @description Impacted services represent the status page services affected by a post update, and its impact.
   */
  post__update__impacted__services?: {
      /**
       * Impact  Id
       * @description An unique identifier within Status Page scope that defines a Status Page Impact entry.
       */
      impact__id?: string;
      /**
       * Impact  Type
       * @description The type of the object returned by the API - in this case, a Status Page Impact.
       */
      impact__type?: string;
      /**
       * Service  Id
       * @description An unique identifier within Status Page scope that defines a Service entry.
       */
      service__id?: string;
      /**
       * Service  Type
       * @description The type of the object returned by the API - in this case, a Status Page Service.
       */
      service__type?: string;
  }[];
  /**
   * Post  Update  Message
   * @description The message of the Post Update.
   */
  post__update__message?: string;
  /**
   * Post  Update  Notify  Subscribers
   * @description Determines if the subscribers should be notified of the Post Update.
   */
  post__update__notify__subscribers?: boolean;
  /**
   * Post  Update  Post  Id
   * @description Status page post unique identifier
   */
  post__update__post__id?: string;
  /**
   * Post  Update  Post  Type
   * @description A string that determines the schema of the object.
   */
  post__update__post__type?: string;
  /**
   * Post  Update  Reported  At
   * Format: date-time
   * @description The date and time the Post Update was reported.
   */
  post__update__reported__at?: string;
  /**
   * Post  Update  Self
   * @description The path to which the Post Update resource is accessible.
   */
  post__update__self?: string;
  /**
   * Post  Update  Severity  Id
   * @description Status page Severity unique identifier
   */
  post__update__severity__id?: string;
  /**
   * Post  Update  Severity  Type
   * @description A string that determines the schema of the object.
   */
  post__update__severity__type?: string;
  /**
   * Post  Update  Status  Id
   * @description Status page Status unique identifier
   */
  post__update__status__id?: string;
  /**
   * Post  Update  Status  Type
   * @description A string that determines the schema of the object.
   */
  post__update__status__type?: string;
  /**
   * Post  Update  Type
   * @description The type of the object returned by the API - in this case, a Status Page Post Update.
   */
  post__update__type?: string;
  /**
   * Post  Update  Update  Frequency  Ms
   * @description The frequency of the next Post Update in milliseconds.
   */
  post__update__update__frequency__ms?: number;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
  /**
   * Post Update Id
   * @description The ID of the Status Page Post Update.
   */
  post_update_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST tool output.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO tool input.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post  Update  Impacted  Services
   * @description Impacted services represent the status page services affected by a post update, and its impact.
   */
  post__update__impacted__services?: {
      /**
       * Impact  Id
       * @description An unique identifier within Status Page scope that defines a Status Page Impact entry.
       */
      impact__id?: string;
      /**
       * Impact  Type
       * @description The type of the object returned by the API - in this case, a Status Page Impact.
       */
      impact__type?: string;
      /**
       * Service  Id
       * @description An unique identifier within Status Page scope that defines a Service entry.
       */
      service__id?: string;
      /**
       * Service  Type
       * @description The type of the object returned by the API - in this case, a Status Page Service.
       */
      service__type?: string;
  }[];
  /**
   * Post  Update  Message
   * @description The message of the Post Update.
   */
  post__update__message?: string;
  /**
   * Post  Update  Notify  Subscribers
   * @description Determines if the subscribers should be notified of the Post Update.
   */
  post__update__notify__subscribers?: boolean;
  /**
   * Post  Update  Post  Id
   * @description Status page post unique identifier
   */
  post__update__post__id?: string;
  /**
   * Post  Update  Post  Type
   * @description A string that determines the schema of the object.
   */
  post__update__post__type?: string;
  /**
   * Post  Update  Reported  At
   * Format: date-time
   * @description The date and time the Post Update was reported.
   */
  post__update__reported__at?: string;
  /**
   * Post  Update  Self
   * @description The path to which the Post Update resource is accessible.
   */
  post__update__self?: string;
  /**
   * Post  Update  Severity  Id
   * @description Status page Severity unique identifier
   */
  post__update__severity__id?: string;
  /**
   * Post  Update  Severity  Type
   * @description A string that determines the schema of the object.
   */
  post__update__severity__type?: string;
  /**
   * Post  Update  Status  Id
   * @description Status page Status unique identifier
   */
  post__update__status__id?: string;
  /**
   * Post  Update  Status  Type
   * @description A string that determines the schema of the object.
   */
  post__update__status__type?: string;
  /**
   * Post  Update  Type
   * @description The type of the object returned by the API - in this case, a Status Page Post Update.
   */
  post__update__type?: string;
  /**
   * Post  Update  Update  Frequency  Ms
   * @description The frequency of the next Post Update in milliseconds.
   */
  post__update__update__frequency__ms?: number;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO tool output.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM tool input.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
  /**
   * Postmortem  Message
   * @description The message of the Postmortem (supports Rich-Text).
   */
  postmortem__message?: string;
  /**
   * Postmortem  Notify  Subscribers
   * @description Whether or not subscribers of the Status Page should be notified about the Postmortem.
   */
  postmortem__notify__subscribers?: boolean;
  /**
   * Postmortem  Post  Id
   * @description Status page post unique identifier
   */
  postmortem__post__id?: string;
  /**
   * Postmortem  Post  Type
   * @description A string that determines the schema of the object.
   */
  postmortem__post__type?: string;
  /**
   * Postmortem  Type
   * @description The type of the object returned by the API - in this case, a Status Page Post Postmortem.
   * @default status_page_post_postmortem
   * @enum {string}
   */
  postmortem__type: "status_page_post_postmortem";
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM tool output.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE tool input.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Post  Ends  At
   * Format: date-time
   * @description The date and time the Post intent is concluded - only for maintenance post type.
   */
  post__ends__at?: string;
  /**
   * Post  Post  Type
   * @description The type of the Post.
   * @enum {string}
   */
  post__post__type?: "incident" | "maintenance";
  /**
   * Post  Starts  At
   * Format: date-time
   * @description The date and time the Post intent becomes effective - only for maintenance post type.
   */
  post__starts__at?: string;
  /**
   * Post  Status  Page  Id
   * @description Status page unique identifier
   */
  post__status__page__id?: string;
  /**
   * Post  Status  Page  Type
   * @description A string that determines the schema of the object.
   */
  post__status__page__type?: string;
  /**
   * Post  Title
   * @description The title given to a Post.
   */
  post__title?: string;
  /**
   * Post  Type
   * @description The type of the object returned by the API - in this case, a Status Page Post.
   * @enum {string}
   */
  post__type?: "status_page_post";
  /**
   * Post Id
   * @description The ID of the Status Page Post.
   */
  post_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE tool output.
 */
type PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_TEAM_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_TEAM_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_TEAM_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_TEAM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_TEMPLATE_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_TEMPLATE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Template  Description
   * @description Description of the template
   */
  template__description?: string;
  /**
   * Template  Name
   * @description The name of the template
   */
  template__name?: string;
  /**
   * Template  Template  Type
   * @description The type of template (`status_update` is the only supported template at this time)
   * @enum {string}
   */
  template__template__type?: "status_update";
  /**
   * Template  Templated  Fields  Email  Body
   * @description The HTML body of the e-mail message
   */
  template__templated__fields__email__body?: string;
  /**
   * Template  Templated  Fields  Email  Subject
   * @description The subject of the e-mail
   */
  template__templated__fields__email__subject?: string;
  /**
   * Template  Templated  Fields  Message
   * @description The short-message of the template (SMS, Push notification, Slack, etc)
   */
  template__templated__fields__message?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_TEMPLATE_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_TEMPLATE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE tool input.
 */
type PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_INPUT = {
  /**
   * Service Id
   * @description The service ID
   */
  service_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE tool output.
 */
type PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES tool input.
 */
type PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES_INPUT = {
  /**
   * Id
   * @description The ID of an Event Orchestration.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES tool output.
 */
type PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_USER_INFORMATION tool input.
 */
type PAGERDUTY_UPDATE_USER_INFORMATION_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_USER_INFORMATION tool output.
 */
type PAGERDUTY_UPDATE_USER_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID tool input.
 */
type PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Status Update Notification Rule Id
   * @description The status update notification rule ID on the user.
   */
  status_update_notification_rule_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID tool output.
 */
type PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM tool input.
 */
type PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM_INPUT = {
  /**
   * Id
   * @description The ID of the resource.
   */
  id?: string;
  /**
   * Role
   * @description The role of the user on the team.
   * @enum {string}
   */
  role?: "observer" | "responder" | "manager";
  /**
   * User Id
   * @description The user ID on the team.
   */
  user_id?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM tool output.
 */
type PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION tool input.
 */
type PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION_INPUT = {
  /**
   * External Id
   * @description The ID of the external system that this connection is used to connect to
   */
  external_id?: string;
  /**
   * External Id Label
   * @description The label of the external system that this connection is used to connect to
   */
  external_id_label?: string;
  /**
   * Health  Health  Message
   * @description A message describing the health of the connection
   */
  health__health__message?: string;
  /**
   * Health  Is  Healthy
   * @description Whether or not the connection is healthy
   */
  health__is__healthy?: boolean;
  /**
   * Health  Last  Checked  At
   * Format: date-time
   * @description The timestamp of the last health check
   */
  health__last__checked__at?: string;
  /**
   * Id
   * @description The ID of the connection
   */
  id?: string;
  /**
   * Integration Id
   * @description The integration ID that this connection is associated with
   */
  integration_id?: string;
  /**
   * Is Default
   * @description Whether or not this connection is the default connection for this integration
   */
  is_default?: boolean;
  /**
   * Name
   * @description The name given to the connection
   */
  name?: string;
  /**
   * Scopes
   * @description Scopes
   */
  scopes?: string[];
  /**
   * Service Url
   * @description The URL of the service that this connection is associated with
   */
  service_url?: string;
  /**
   * Teams
   * @description The teams whose managers are allowed to use or edit this connection
   */
  teams?: {
      /**
       * Team Id
       * @description The ID of the team
       */
      team_id?: string;
      /**
       * Type
       * @description Type
       * @enum {string}
       */
      type?: "team_reference";
  }[];
  /**
   * Type
   * @description The type of the connection
   */
  type?: string;
};

/**
 * Type of PAGERDUTY's PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION tool output.
 */
type PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PAGERDUTY".
 */
export type PAGERDUTY_TOOL_INPUTS = {
  ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER: PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER_INPUT
  AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS: PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS_INPUT
  ASSOCIATE_SERVICE_DEPENDENCIES: PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES_INPUT
  ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION: PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION_INPUT
  AUDIT_ESCALATION_POLICY_RECORDS: PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS_INPUT
  CONVERT_SERVICE_RULE_BY_ID: PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID_INPUT
  COUNT_PAUSED_INCIDENT_REPORTS: PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS_INPUT
  CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS: PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS_INPUT
  CREATE_AN_INCIDENT_TYPE: PAGERDUTY_CREATE_AN_INCIDENT_TYPE_INPUT
  CREATE_AUTOMATION_RUNNER_ENDPOINT: PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT_INPUT
  CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_INPUT
  CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_INPUT
  CREATE_A_RULESET: PAGERDUTY_CREATE_A_RULESET_INPUT
  CREATE_A_TRIGGER: PAGERDUTY_CREATE_A_TRIGGER_INPUT
  CREATE_BUSINESS_SERVICE: PAGERDUTY_CREATE_BUSINESS_SERVICE_INPUT
  CREATE_ESCALATION_POLICY: PAGERDUTY_CREATE_ESCALATION_POLICY_INPUT
  CREATE_EVENT_ORCHESTRATION: PAGERDUTY_CREATE_EVENT_ORCHESTRATION_INPUT
  CREATE_EVENT_RULE_IN_RULESET: PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET_INPUT
  CREATE_EXTENSION_OBJECT: PAGERDUTY_CREATE_EXTENSION_OBJECT_INPUT
  CREATE_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE_INPUT
  CREATE_INCIDENT_FIELD_OPTION: PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION_INPUT
  CREATE_INCIDENT_RECORD: PAGERDUTY_CREATE_INCIDENT_RECORD_INPUT
  CREATE_INCIDENT_WORKFLOW: PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INPUT
  CREATE_INCIDENT_WORKFLOW_INSTANCE: PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE_INPUT
  CREATE_INTEGRATION_FOR_ORCHESTRATION: PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION_INPUT
  CREATE_INTEGRATION_FOR_SERVICE: PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE_INPUT
  CREATE_MAINTENANCE_WINDOW_OBJECT: PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT_INPUT
  CREATE_NEW_SCHEDULE_LAYER: PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER_INPUT
  CREATE_NEW_SERVICE: PAGERDUTY_CREATE_NEW_SERVICE_INPUT
  CREATE_NEW_TAG_IN_SYSTEM: PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM_INPUT
  CREATE_NEW_TEAM_WITH_DETAILS: PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS_INPUT
  CREATE_NEW_WEBHOOK_SUBSCRIPTION: PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION_INPUT
  CREATE_OR_UPDATE_STATUS_PAGE_POST: PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST_INPUT
  CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM: PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM_INPUT
  CREATE_RESPONSE_PLAY_FOR_INCIDENTS: PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS_INPUT
  CREATE_SCHEDULE_OVERRIDES_CONFIGURATION: PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION_INPUT
  CREATE_SERVICE_EVENT_RULE: PAGERDUTY_CREATE_SERVICE_EVENT_RULE_INPUT
  CREATE_STATUS_PAGE_SUBSCRIPTION: PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION_INPUT
  CREATE_STATUS_UPDATE_TEMPLATE: PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE_INPUT
  CREATE_USER_NOTIFICATION_RULE: PAGERDUTY_CREATE_USER_NOTIFICATION_RULE_INPUT
  CREATE_USER_OBJECT: PAGERDUTY_CREATE_USER_OBJECT_INPUT
  CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE: PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE_INPUT
  CREATE_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION_INPUT
  DELETE_ACCOUNT_SUBSCRIPTION_BY_ID: PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID_INPUT
  DELETE_ADDON_BY_ID: PAGERDUTY_DELETE_ADDON_BY_ID_INPUT
  DELETE_ALERT_GROUPING_SETTING: PAGERDUTY_DELETE_ALERT_GROUPING_SETTING_INPUT
  DELETE_ALL_OAUTH_DELEGATIONS: PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS_INPUT
  DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID: PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID_INPUT
  DELETE_AUTOMATION_ACTION_BY_ID: PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID_INPUT
  DELETE_AUTOMATION_ACTION_SERVICE_BY_ID: PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID_INPUT
  DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_INPUT
  DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_INPUT
  DELETE_BUSINESS_SERVICE_BY_ID: PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID_INPUT
  DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS: PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS_INPUT
  DELETE_CACHE_VARIABLE_FOR_EVENT: PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT_INPUT
  DELETE_CACHE_VARIABLE_FROM_SERVICE: PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE_INPUT
  DELETE_CUSTOM_FIELD_BY_FIELD_ID: PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID_INPUT
  DELETE_ESCALATION_POLICY_BY_ID: PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID_INPUT
  DELETE_EVENT_BY_ID: PAGERDUTY_DELETE_EVENT_BY_ID_INPUT
  DELETE_EXTENSION_BY_ID: PAGERDUTY_DELETE_EXTENSION_BY_ID_INPUT
  DELETE_FIELD_OPTION: PAGERDUTY_DELETE_FIELD_OPTION_INPUT
  DELETE_INCIDENT_WORKFLOW_BY_ID: PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID_INPUT
  DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID: PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID_INPUT
  DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE: PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE_INPUT
  DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION: PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION_INPUT
  DELETE_MAINTENANCE_WINDOW_BY_ID: PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID_INPUT
  DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE_INPUT
  DELETE_POST_FROM_STATUS_PAGE: PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE_INPUT
  DELETE_POST_UPDATE_BY_ID: PAGERDUTY_DELETE_POST_UPDATE_BY_ID_INPUT
  DELETE_RESPONSE_PLAY: PAGERDUTY_DELETE_RESPONSE_PLAY_INPUT
  DELETE_RULESET_BY_ID: PAGERDUTY_DELETE_RULESET_BY_ID_INPUT
  DELETE_RULE_FROM_RULESET_BY_ID: PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID_INPUT
  DELETE_RUNNER_TEAM_ASSOCIATION: PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION_INPUT
  DELETE_SCHEDULE_BY_ID: PAGERDUTY_DELETE_SCHEDULE_BY_ID_INPUT
  DELETE_SCHEDULE_OVERRIDE_BY_ID: PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID_INPUT
  DELETE_SERVICE_BY_ID: PAGERDUTY_DELETE_SERVICE_BY_ID_INPUT
  DELETE_SERVICE_RULE_BY_ID: PAGERDUTY_DELETE_SERVICE_RULE_BY_ID_INPUT
  DELETE_STATUS_PAGE_POSTMORTEM: PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM_INPUT
  DELETE_STATUS_UPDATE_NOTIFICATION_RULE: PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE_INPUT
  DELETE_SUBSCRIPTION_FROM_STATUS_PAGE: PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE_INPUT
  DELETE_TAG_BY_ID: PAGERDUTY_DELETE_TAG_BY_ID_INPUT
  DELETE_TEAM_BY_ID: PAGERDUTY_DELETE_TEAM_BY_ID_INPUT
  DELETE_TEAM_ESCALATION_POLICY: PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY_INPUT
  DELETE_TEAM_FROM_AUTOMATION_ACTION: PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION_INPUT
  DELETE_TEMPLATE_BY_ID: PAGERDUTY_DELETE_TEMPLATE_BY_ID_INPUT
  DELETE_USER_BY_ID: PAGERDUTY_DELETE_USER_BY_ID_INPUT
  DELETE_USER_CONTACT_METHOD: PAGERDUTY_DELETE_USER_CONTACT_METHOD_INPUT
  DELETE_USER_FROM_TEAM_BY_ID: PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID_INPUT
  DELETE_USER_NOTIFICATION_RULE: PAGERDUTY_DELETE_USER_NOTIFICATION_RULE_INPUT
  DELETE_USER_SESSION_BY_ID: PAGERDUTY_DELETE_USER_SESSION_BY_ID_INPUT
  DELETE_USER_SESSION_BY_TYPE: PAGERDUTY_DELETE_USER_SESSION_BY_TYPE_INPUT
  DELETE_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT
  DELETE_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION_INPUT
  DISASSOCIATE_SERVICE_DEPENDENCIES: PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES_INPUT
  EDIT_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT
  ENABLE_EXTENSION_BY_ID: PAGERDUTY_ENABLE_EXTENSION_BY_ID_INPUT
  ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT
  EXECUTE_RESPONSE_PLAY_BY_ID: PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID_INPUT
  FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION: PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION_INPUT
  FETCH_CUSTOM_INCIDENT_FIELD_BY_ID: PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID_INPUT
  FETCH_ESCALATION_POLICES_LIST: PAGERDUTY_FETCH_ESCALATION_POLICES_LIST_INPUT
  FETCH_EVENT_ORCHESTRATIONS: PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS_INPUT
  FETCH_INCIDENT_ANALYTICS_BY_ID: PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID_INPUT
  FETCH_INCIDENT_LIST: PAGERDUTY_FETCH_INCIDENT_LIST_INPUT
  FETCH_OUTLIER_INCIDENT_BY_ID: PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID_INPUT
  FETCH_POST_UPDATE_STATUS: PAGERDUTY_FETCH_POST_UPDATE_STATUS_INPUT
  FETCH_PRIORITIES_LIST: PAGERDUTY_FETCH_PRIORITIES_LIST_INPUT
  FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT: PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT_INPUT
  FETCH_RELATED_INCIDENTS_BY_ID: PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID_INPUT
  FETCH_RUNNER_TEAMS_INTEGRATION: PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION_INPUT
  FETCH_STATUS_PAGES: PAGERDUTY_FETCH_STATUS_PAGES_INPUT
  FETCH_USER_CONTACT_METHOD: PAGERDUTY_FETCH_USER_CONTACT_METHOD_INPUT
  FETCH_VENDOR_LIST: PAGERDUTY_FETCH_VENDOR_LIST_INPUT
  FILTER_AND_AGGREGATE_INCIDENT_METRICS: PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS_INPUT
  GET_ADDONS_LIST: PAGERDUTY_GET_ADDONS_LIST_INPUT
  GET_AGGREGATED_PD_ADVANCE_USAGE_DATA: PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA_INPUT
  GET_ALERTS_BY_INCIDENT_ID: PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID_INPUT
  GET_ALERT_GROUPING_SETTINGS: PAGERDUTY_GET_ALERT_GROUPING_SETTINGS_INPUT
  GET_AN_INCIDENT_TYPE: PAGERDUTY_GET_AN_INCIDENT_TYPE_INPUT
  GET_AN_INCIDENT_TYPE_CUSTOM_FIELD: PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD_INPUT
  GET_AUDIT_RECORDS: PAGERDUTY_GET_AUDIT_RECORDS_INPUT
  GET_AUTOMATION_ACTIONS_RUNNERS: PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS_INPUT
  GET_AUTOMATION_ACTION_BY_ID: PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID_INPUT
  GET_AUTOMATION_ACTION_RUNNER_BY_ID: PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID_INPUT
  GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID: PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID_INPUT
  GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD: PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD_INPUT
  GET_A_TRIGGER: PAGERDUTY_GET_A_TRIGGER_INPUT
  GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS: PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS_INPUT
  GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID: PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID_INPUT
  GET_CACHE_VARIABLES_FOR_SERVICE: PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE_INPUT
  GET_CACHE_VARIABLE_BY_ID: PAGERDUTY_GET_CACHE_VARIABLE_BY_ID_INPUT
  GET_ESCALATION_POLICY_BY_ID: PAGERDUTY_GET_ESCALATION_POLICY_BY_ID_INPUT
  GET_EVENT_INTEGRATIONS_BY_ID: PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID_INPUT
  GET_EVENT_ORCHESTRATION_BY_ID: PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID_INPUT
  GET_EVENT_ORCHESTRATION_CACHE_VARIABLES: PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES_INPUT
  GET_EVENT_ORCHESTRATION_GLOBAL: PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL_INPUT
  GET_EVENT_ORCHESTRATION_INTEGRATION: PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION_INPUT
  GET_EXTENSION_SCHEMA_BY_ID: PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID_INPUT
  GET_IMPACT_BY_STATUS_PAGE_ID: PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID_INPUT
  GET_INCIDENT_ALERT_DETAILS: PAGERDUTY_GET_INCIDENT_ALERT_DETAILS_INPUT
  GET_INCIDENT_LOG_ENTRIES_BY_ID: PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID_INPUT
  GET_INCIDENT_WORKFLOWS: PAGERDUTY_GET_INCIDENT_WORKFLOWS_INPUT
  GET_INCIDENT_WORKFLOWS_ACTIONS: PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS_INPUT
  GET_INCIDENT_WORKFLOW_ACTION_BY_ID: PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID_INPUT
  GET_LOG_ENTRIES: PAGERDUTY_GET_LOG_ENTRIES_INPUT
  GET_MAINTENANCE_WINDOW_BY_ID: PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID_INPUT
  GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS: PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS_INPUT
  GET_PAUSED_INCIDENT_ALERTS: PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS_INPUT
  GET_POST_FROM_STATUS_PAGE_BY_ID: PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID_INPUT
  GET_RESPONSE_PLAYS: PAGERDUTY_GET_RESPONSE_PLAYS_INPUT
  GET_RULE_FROM_RULESET_BY_ID: PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID_INPUT
  GET_SCHEDULES: PAGERDUTY_GET_SCHEDULES_INPUT
  GET_SERVICE_IMPACTS_BY_URL_SLUG: PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG_INPUT
  GET_SEVERITY_FOR_STATUS_PAGE: PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE_INPUT
  GET_SPECIFIC_POST_UPDATE_STATUS: PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS_INPUT
  GET_STATUS_DASHBOARD_BY_ID: PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID_INPUT
  GET_STATUS_FOR_STATUS_PAGE_BY_ID: PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID_INPUT
  GET_STATUS_PAGE_IMPACTS_BY_ID: PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID_INPUT
  GET_STATUS_PAGE_SUBSCRIPTION: PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION_INPUT
  GET_TEAMS_ASSOCIATED_WITH_ACTION_ID: PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID_INPUT
  GET_TEAM_MEMBERS_BY_ID: PAGERDUTY_GET_TEAM_MEMBERS_BY_ID_INPUT
  GET_TEAM_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS_INPUT
  GET_TEMPLATE_BY_ID: PAGERDUTY_GET_TEMPLATE_BY_ID_INPUT
  GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE: PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_INPUT
  GET_USER_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS_INPUT
  GET_USER_SESSIONS_BY_ID: PAGERDUTY_GET_USER_SESSIONS_BY_ID_INPUT
  GET_USER_SESSION_BY_TYPE: PAGERDUTY_GET_USER_SESSION_BY_TYPE_INPUT
  GET_USER_STATUS_UPDATE_NOTIFICATION_RULES: PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES_INPUT
  GET_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID_INPUT
  GET_WORKFLOW_INTEGRATION: PAGERDUTY_GET_WORKFLOW_INTEGRATION_INPUT
  GET_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION_INPUT
  INSTALL_ADD_ON_ENDPOINT: PAGERDUTY_INSTALL_ADD_ON_ENDPOINT_INPUT
  INVOKE_AUTOMATION_ACTION_BY_ID: PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID_INPUT
  LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS: PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS_INPUT
  LIST_AUTOMATION_ACTION_DETAILS: PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS_INPUT
  LIST_EXTENSION_SCHEMAS: PAGERDUTY_LIST_EXTENSION_SCHEMAS_INPUT
  LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD: PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD_INPUT
  LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS: PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS_INPUT
  LIST_INCIDENT_TYPES: PAGERDUTY_LIST_INCIDENT_TYPES_INPUT
  LIST_INCIDENT_TYPE_CUSTOM_FIELDS: PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS_INPUT
  LIST_LICENSES: PAGERDUTY_LIST_LICENSES_INPUT
  LIST_SUPPORTING_SERVICE_IMPACTS: PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS_INPUT
  LIST_TEMPLATES: PAGERDUTY_LIST_TEMPLATES_INPUT
  LIST_WORKFLOW_INTEGRATIONS: PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS_INPUT
  LIST_WORKFLOW_INTEGRATION_CONNECTIONS: PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS_INPUT
  MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE: PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE_INPUT
  MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT: PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT_INPUT
  MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS: PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS_INPUT
  MODIFY_ENTITY_TAGS: PAGERDUTY_MODIFY_ENTITY_TAGS_INPUT
  PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS: PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS_INPUT
  PING_WEBHOOK_SUBSCRIPTION: PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION_INPUT
  POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE: PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE_INPUT
  POST_ALERT_GROUPING_SETTINGS: PAGERDUTY_POST_ALERT_GROUPING_SETTINGS_INPUT
  POST_ANALYTICS_METRICS_RESPONDER_FILTERS: PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS_INPUT
  POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES: PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES_INPUT
  POST_CHANGE_EVENTS: PAGERDUTY_POST_CHANGE_EVENTS_INPUT
  POST_EVENT_ORCHESTRATION_CACHE_VARIABLES: PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES_INPUT
  POST_INCIDENTS_ANALYTICS_WITH_FILTERS: PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS_INPUT
  POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE: PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE_INPUT
  POST_INCIDENT_METRICS: PAGERDUTY_POST_INCIDENT_METRICS_INPUT
  POST_INCIDENT_METRICS_WITH_FILTERS: PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS_INPUT
  POST_INCIDENT_NOTE_USING_ID: PAGERDUTY_POST_INCIDENT_NOTE_USING_ID_INPUT
  POST_INCIDENT_STATUS_UPDATE: PAGERDUTY_POST_INCIDENT_STATUS_UPDATE_INPUT
  POST_RESPONDER_INCIDENTS_WITH_FILTERS: PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS_INPUT
  POST_SERVICE_AUTOMATION_ACTION: PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION_INPUT
  POST_TEAM_NOTIFICATION_SUBSCRIPTION: PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION_INPUT
  POST_TEAM_TO_RUNNER: PAGERDUTY_POST_TEAM_TO_RUNNER_INPUT
  PREVIEW_SCHEDULE_OBJECT: PAGERDUTY_PREVIEW_SCHEDULE_OBJECT_INPUT
  RENDER_TEMPLATE_FOR_INCIDENT: PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT_INPUT
  RETRIEVE_ABILITIES_LIST: PAGERDUTY_RETRIEVE_ABILITIES_LIST_INPUT
  RETRIEVE_ABILITY_BY_ID: PAGERDUTY_RETRIEVE_ABILITY_BY_ID_INPUT
  RETRIEVE_ACTION_SERVICES_BY_ID: PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID_INPUT
  RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID: PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID_INPUT
  RETRIEVE_ADDON_BY_ID: PAGERDUTY_RETRIEVE_ADDON_BY_ID_INPUT
  RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID: PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID_INPUT
  RETRIEVE_AUTOMATION_ACTION_INVOCATIONS: PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS_INPUT
  RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID: PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID_INPUT
  RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS: PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS_INPUT
  RETRIEVE_AUTOMATION_SERVICE_ACTION: PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION_INPUT
  RETRIEVE_BUSINESS_SERVICES: PAGERDUTY_RETRIEVE_BUSINESS_SERVICES_INPUT
  RETRIEVE_BUSINESS_SERVICE_BY_ID: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID_INPUT
  RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES_INPUT
  RETRIEVE_BUSINESS_SERVICE_IMPACTORS: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS_INPUT
  RETRIEVE_BUSINESS_SERVICE_IMPACTS: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS_INPUT
  RETRIEVE_CHANGE_EVENT_BY_ID: PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID_INPUT
  RETRIEVE_CHANGE_EVENT_INFORMATION: PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION_INPUT
  RETRIEVE_CURRENT_USER_INFO: PAGERDUTY_RETRIEVE_CURRENT_USER_INFO_INPUT
  RETRIEVE_ENTITY_TAGS_BY_ID: PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_INPUT
  RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE: PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE_INPUT
  RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID: PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID_INPUT
  RETRIEVE_EXTENSION_BY_ID: PAGERDUTY_RETRIEVE_EXTENSION_BY_ID_INPUT
  RETRIEVE_EXTENSION_LIST: PAGERDUTY_RETRIEVE_EXTENSION_LIST_INPUT
  RETRIEVE_INCIDENT_BY_INCIDENT_ID: PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID_INPUT
  RETRIEVE_INCIDENT_CUSTOM_FIELDS: PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS_INPUT
  RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES: PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES_INPUT
  RETRIEVE_INCIDENT_FIELD_OPTIONS: PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS_INPUT
  RETRIEVE_INCIDENT_WORKFLOW_BY_ID: PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID_INPUT
  RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS: PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS_INPUT
  RETRIEVE_INTEGRATION_BY_SERVICE_ID: PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID_INPUT
  RETRIEVE_LICENSE_ALLOCATIONS: PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS_INPUT
  RETRIEVE_LIST_OF_SERVICES: PAGERDUTY_RETRIEVE_LIST_OF_SERVICES_INPUT
  RETRIEVE_LOG_ENTRY_BY_ID: PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID_INPUT
  RETRIEVE_MAINTENANCE_WINDOWS: PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS_INPUT
  RETRIEVE_NOTES_FOR_INCIDENT: PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT_INPUT
  RETRIEVE_NOTIFICATIONS: PAGERDUTY_RETRIEVE_NOTIFICATIONS_INPUT
  RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE_INPUT
  RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES: PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES_INPUT
  RETRIEVE_ONCALL_LIST: PAGERDUTY_RETRIEVE_ONCALL_LIST_INPUT
  RETRIEVE_PAST_INCIDENTS: PAGERDUTY_RETRIEVE_PAST_INCIDENTS_INPUT
  RETRIEVE_POSTMORTEM_BY_ID: PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID_INPUT
  RETRIEVE_RESPONSE_PLAY_BY_ID: PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID_INPUT
  RETRIEVE_RULESET_BY_ID: PAGERDUTY_RETRIEVE_RULESET_BY_ID_INPUT
  RETRIEVE_RULESET_LIST: PAGERDUTY_RETRIEVE_RULESET_LIST_INPUT
  RETRIEVE_RULES_FOR_SERVICE_ID: PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID_INPUT
  RETRIEVE_RULES_FROM_RULESET_BY_ID: PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID_INPUT
  RETRIEVE_RULE_BY_SERVICE_ID: PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID_INPUT
  RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID: PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID_INPUT
  RETRIEVE_SCHEDULE_BY_ID: PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID_INPUT
  RETRIEVE_SCHEDULE_OVERRIDE_BY_ID: PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID_INPUT
  RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID_INPUT
  RETRIEVE_SERVICE_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_BY_ID_INPUT
  RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID_INPUT
  RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS: PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS_INPUT
  RETRIEVE_SERVICE_STATUS_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID_INPUT
  RETRIEVE_SERVICE_STATUS_PAGE: PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE_INPUT
  RETRIEVE_STANDARDS_LIST: PAGERDUTY_RETRIEVE_STANDARDS_LIST_INPUT
  RETRIEVE_STANDARDS_SCORES: PAGERDUTY_RETRIEVE_STANDARDS_SCORES_INPUT
  RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE: PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE_INPUT
  RETRIEVE_STATUS_DASHBOARDS_INFORMATION: PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION_INPUT
  RETRIEVE_STATUS_DASHBOARD_BY_SLUG: PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG_INPUT
  RETRIEVE_STATUS_PAGES_STATUS: PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS_INPUT
  RETRIEVE_STATUS_PAGE_POST: PAGERDUTY_RETRIEVE_STATUS_PAGE_POST_INPUT
  RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID: PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID_INPUT
  RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID: PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID_INPUT
  RETRIEVE_TAGS: PAGERDUTY_RETRIEVE_TAGS_INPUT
  RETRIEVE_TAG_BY_ID: PAGERDUTY_RETRIEVE_TAG_BY_ID_INPUT
  RETRIEVE_TEAM_AUDIT_RECORDS: PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS_INPUT
  RETRIEVE_TEAM_DETAILS_BY_ID: PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID_INPUT
  RETRIEVE_TEAM_LIST: PAGERDUTY_RETRIEVE_TEAM_LIST_INPUT
  RETRIEVE_TECHNICAL_SERVICE_DETAILS: PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS_INPUT
  RETRIEVE_TEMPLATE_FIELDS: PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS_INPUT
  RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID: PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID_INPUT
  RETRIEVE_USERS_BY_SCHEDULE_ID: PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID_INPUT
  RETRIEVE_USERS_LIST: PAGERDUTY_RETRIEVE_USERS_LIST_INPUT
  RETRIEVE_USER_AUDIT_RECORDS_BY_ID: PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID_INPUT
  RETRIEVE_USER_BY_ID: PAGERDUTY_RETRIEVE_USER_BY_ID_INPUT
  RETRIEVE_USER_CONTACT_METHODS_VIA_ID: PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID_INPUT
  RETRIEVE_USER_LICENSE_INFORMATION: PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION_INPUT
  RETRIEVE_USER_NOTIFICATION_RULE: PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE_INPUT
  RETRIEVE_USER_NOTIFICATION_RULES: PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES_INPUT
  RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE: PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE_INPUT
  RETRIEVE_VENDOR_BY_ID: PAGERDUTY_RETRIEVE_VENDOR_BY_ID_INPUT
  RETRIEVE_WEBHOOK_SUBSCRIPTIONS: PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS_INPUT
  SEND_RESPONDER_REQUESTS_FOR_INCIDENTS: PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS_INPUT
  SET_BUSINESS_SERVICE_IMPACT_STATUS: PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS_INPUT
  SET_GLOBAL_PRIORITY_THRESHOLD: PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD_INPUT
  SNOOZE_INCIDENT_BY_DURATION: PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION_INPUT
  SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES: PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES_INPUT
  SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES: PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES_INPUT
  SUBSCRIBE_TO_USER_NOTIFICATIONS: PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS_INPUT
  UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY: PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY_INPUT
  UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES: PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES_INPUT
  UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS_INPUT
  UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS_INPUT
  UPDATE_ADD_ON_BY_ID: PAGERDUTY_UPDATE_ADD_ON_BY_ID_INPUT
  UPDATE_ALERT_GROUPING_SETTINGS_BY_ID: PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID_INPUT
  UPDATE_ALERT_IN_INCIDENT: PAGERDUTY_UPDATE_ALERT_IN_INCIDENT_INPUT
  UPDATE_AN_INCIDENT_TYPE: PAGERDUTY_UPDATE_AN_INCIDENT_TYPE_INPUT
  UPDATE_AUTOMATION_RUNNER_INFO: PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO_INPUT
  UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_INPUT
  UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_INPUT
  UPDATE_A_TRIGGER: PAGERDUTY_UPDATE_A_TRIGGER_INPUT
  UPDATE_BUSINESS_SERVICE_BY_ID: PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID_INPUT
  UPDATE_CHANGE_EVENT_BY_ID: PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID_INPUT
  UPDATE_CUSTOM_FIELD_DISPLAY_NAME: PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME_INPUT
  UPDATE_CUSTOM_FIELD_OPTION: PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION_INPUT
  UPDATE_ESCALATION_POLICY_BY_ID: PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID_INPUT
  UPDATE_ESCALATION_POLICY_FOR_TEAM: PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM_INPUT
  UPDATE_EVENT_ORCHESTRATION_BY_ID: PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID_INPUT
  UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE: PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE_INPUT
  UPDATE_EVENT_RULE_BY_ID: PAGERDUTY_UPDATE_EVENT_RULE_BY_ID_INPUT
  UPDATE_EVENT_RULE_FOR_SERVICE: PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE_INPUT
  UPDATE_EXTENSION_BY_ID: PAGERDUTY_UPDATE_EXTENSION_BY_ID_INPUT
  UPDATE_GLOBAL_ORCHESTRATION: PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION_INPUT
  UPDATE_INCIDENT_ALERTS: PAGERDUTY_UPDATE_INCIDENT_ALERTS_INPUT
  UPDATE_INCIDENT_BY_ID: PAGERDUTY_UPDATE_INCIDENT_BY_ID_INPUT
  UPDATE_INCIDENT_CUSTOM_FIELD_VALUES: PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES_INPUT
  UPDATE_INCIDENT_DETAILS: PAGERDUTY_UPDATE_INCIDENT_DETAILS_INPUT
  UPDATE_INCIDENT_WORKFLOW: PAGERDUTY_UPDATE_INCIDENT_WORKFLOW_INPUT
  UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID: PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID_INPUT
  UPDATE_INTEGRATION_LABEL: PAGERDUTY_UPDATE_INTEGRATION_LABEL_INPUT
  UPDATE_LOG_ENTRY_CHANNEL: PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL_INPUT
  UPDATE_MAINTENANCE_WINDOW_BY_ID: PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID_INPUT
  UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE_INPUT
  UPDATE_ORCHESTRATION_ROUTER_DETAILS: PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS_INPUT
  UPDATE_RESPONSE_PLAY_BY_ID: PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID_INPUT
  UPDATE_RULESET_BY_ID: PAGERDUTY_UPDATE_RULESET_BY_ID_INPUT
  UPDATE_SCHEDULE_BY_ID: PAGERDUTY_UPDATE_SCHEDULE_BY_ID_INPUT
  UPDATE_SERVICE_BY_ID: PAGERDUTY_UPDATE_SERVICE_BY_ID_INPUT
  UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS: PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS_INPUT
  UPDATE_STANDARD_BY_ID: PAGERDUTY_UPDATE_STANDARD_BY_ID_INPUT
  UPDATE_STATUS_PAGE_POST: PAGERDUTY_UPDATE_STATUS_PAGE_POST_INPUT
  UPDATE_STATUS_PAGE_POST_INFO: PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO_INPUT
  UPDATE_STATUS_PAGE_POST_POSTMORTEM: PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM_INPUT
  UPDATE_STATUS_PAGE_POST_RESOURCE: PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE_INPUT
  UPDATE_TEAM_BY_ID: PAGERDUTY_UPDATE_TEAM_BY_ID_INPUT
  UPDATE_TEMPLATE_BY_ID: PAGERDUTY_UPDATE_TEMPLATE_BY_ID_INPUT
  UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE: PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_INPUT
  UPDATE_UNROUTED_ORCHESTRATION_RULES: PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES_INPUT
  UPDATE_USER_INFORMATION: PAGERDUTY_UPDATE_USER_INFORMATION_INPUT
  UPDATE_USER_NOTIFICATION_RULE_BY_ID: PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID_INPUT
  UPDATE_USER_ROLE_ON_TEAM: PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM_INPUT
  UPDATE_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PAGERDUTY".
 */
export type PAGERDUTY_TOOL_OUTPUTS = {
  ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER: PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER_OUTPUT
  AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS: PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS_OUTPUT
  ASSOCIATE_SERVICE_DEPENDENCIES: PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES_OUTPUT
  ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION: PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION_OUTPUT
  AUDIT_ESCALATION_POLICY_RECORDS: PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS_OUTPUT
  CONVERT_SERVICE_RULE_BY_ID: PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID_OUTPUT
  COUNT_PAUSED_INCIDENT_REPORTS: PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS_OUTPUT
  CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS: PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS_OUTPUT
  CREATE_AN_INCIDENT_TYPE: PAGERDUTY_CREATE_AN_INCIDENT_TYPE_OUTPUT
  CREATE_AUTOMATION_RUNNER_ENDPOINT: PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT_OUTPUT
  CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_OUTPUT
  CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_OUTPUT
  CREATE_A_RULESET: PAGERDUTY_CREATE_A_RULESET_OUTPUT
  CREATE_A_TRIGGER: PAGERDUTY_CREATE_A_TRIGGER_OUTPUT
  CREATE_BUSINESS_SERVICE: PAGERDUTY_CREATE_BUSINESS_SERVICE_OUTPUT
  CREATE_ESCALATION_POLICY: PAGERDUTY_CREATE_ESCALATION_POLICY_OUTPUT
  CREATE_EVENT_ORCHESTRATION: PAGERDUTY_CREATE_EVENT_ORCHESTRATION_OUTPUT
  CREATE_EVENT_RULE_IN_RULESET: PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET_OUTPUT
  CREATE_EXTENSION_OBJECT: PAGERDUTY_CREATE_EXTENSION_OBJECT_OUTPUT
  CREATE_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE_OUTPUT
  CREATE_INCIDENT_FIELD_OPTION: PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION_OUTPUT
  CREATE_INCIDENT_RECORD: PAGERDUTY_CREATE_INCIDENT_RECORD_OUTPUT
  CREATE_INCIDENT_WORKFLOW: PAGERDUTY_CREATE_INCIDENT_WORKFLOW_OUTPUT
  CREATE_INCIDENT_WORKFLOW_INSTANCE: PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE_OUTPUT
  CREATE_INTEGRATION_FOR_ORCHESTRATION: PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION_OUTPUT
  CREATE_INTEGRATION_FOR_SERVICE: PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE_OUTPUT
  CREATE_MAINTENANCE_WINDOW_OBJECT: PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT_OUTPUT
  CREATE_NEW_SCHEDULE_LAYER: PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER_OUTPUT
  CREATE_NEW_SERVICE: PAGERDUTY_CREATE_NEW_SERVICE_OUTPUT
  CREATE_NEW_TAG_IN_SYSTEM: PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM_OUTPUT
  CREATE_NEW_TEAM_WITH_DETAILS: PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS_OUTPUT
  CREATE_NEW_WEBHOOK_SUBSCRIPTION: PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION_OUTPUT
  CREATE_OR_UPDATE_STATUS_PAGE_POST: PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST_OUTPUT
  CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM: PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM_OUTPUT
  CREATE_RESPONSE_PLAY_FOR_INCIDENTS: PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS_OUTPUT
  CREATE_SCHEDULE_OVERRIDES_CONFIGURATION: PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION_OUTPUT
  CREATE_SERVICE_EVENT_RULE: PAGERDUTY_CREATE_SERVICE_EVENT_RULE_OUTPUT
  CREATE_STATUS_PAGE_SUBSCRIPTION: PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION_OUTPUT
  CREATE_STATUS_UPDATE_TEMPLATE: PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE_OUTPUT
  CREATE_USER_NOTIFICATION_RULE: PAGERDUTY_CREATE_USER_NOTIFICATION_RULE_OUTPUT
  CREATE_USER_OBJECT: PAGERDUTY_CREATE_USER_OBJECT_OUTPUT
  CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE: PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE_OUTPUT
  CREATE_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT
  DELETE_ACCOUNT_SUBSCRIPTION_BY_ID: PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID_OUTPUT
  DELETE_ADDON_BY_ID: PAGERDUTY_DELETE_ADDON_BY_ID_OUTPUT
  DELETE_ALERT_GROUPING_SETTING: PAGERDUTY_DELETE_ALERT_GROUPING_SETTING_OUTPUT
  DELETE_ALL_OAUTH_DELEGATIONS: PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS_OUTPUT
  DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID: PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID_OUTPUT
  DELETE_AUTOMATION_ACTION_BY_ID: PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID_OUTPUT
  DELETE_AUTOMATION_ACTION_SERVICE_BY_ID: PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID_OUTPUT
  DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_OUTPUT
  DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_OUTPUT
  DELETE_BUSINESS_SERVICE_BY_ID: PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID_OUTPUT
  DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS: PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS_OUTPUT
  DELETE_CACHE_VARIABLE_FOR_EVENT: PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT_OUTPUT
  DELETE_CACHE_VARIABLE_FROM_SERVICE: PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE_OUTPUT
  DELETE_CUSTOM_FIELD_BY_FIELD_ID: PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID_OUTPUT
  DELETE_ESCALATION_POLICY_BY_ID: PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID_OUTPUT
  DELETE_EVENT_BY_ID: PAGERDUTY_DELETE_EVENT_BY_ID_OUTPUT
  DELETE_EXTENSION_BY_ID: PAGERDUTY_DELETE_EXTENSION_BY_ID_OUTPUT
  DELETE_FIELD_OPTION: PAGERDUTY_DELETE_FIELD_OPTION_OUTPUT
  DELETE_INCIDENT_WORKFLOW_BY_ID: PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID_OUTPUT
  DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID: PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID_OUTPUT
  DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE: PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE_OUTPUT
  DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION: PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION_OUTPUT
  DELETE_MAINTENANCE_WINDOW_BY_ID: PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID_OUTPUT
  DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE_OUTPUT
  DELETE_POST_FROM_STATUS_PAGE: PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE_OUTPUT
  DELETE_POST_UPDATE_BY_ID: PAGERDUTY_DELETE_POST_UPDATE_BY_ID_OUTPUT
  DELETE_RESPONSE_PLAY: PAGERDUTY_DELETE_RESPONSE_PLAY_OUTPUT
  DELETE_RULESET_BY_ID: PAGERDUTY_DELETE_RULESET_BY_ID_OUTPUT
  DELETE_RULE_FROM_RULESET_BY_ID: PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID_OUTPUT
  DELETE_RUNNER_TEAM_ASSOCIATION: PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION_OUTPUT
  DELETE_SCHEDULE_BY_ID: PAGERDUTY_DELETE_SCHEDULE_BY_ID_OUTPUT
  DELETE_SCHEDULE_OVERRIDE_BY_ID: PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID_OUTPUT
  DELETE_SERVICE_BY_ID: PAGERDUTY_DELETE_SERVICE_BY_ID_OUTPUT
  DELETE_SERVICE_RULE_BY_ID: PAGERDUTY_DELETE_SERVICE_RULE_BY_ID_OUTPUT
  DELETE_STATUS_PAGE_POSTMORTEM: PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM_OUTPUT
  DELETE_STATUS_UPDATE_NOTIFICATION_RULE: PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE_OUTPUT
  DELETE_SUBSCRIPTION_FROM_STATUS_PAGE: PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE_OUTPUT
  DELETE_TAG_BY_ID: PAGERDUTY_DELETE_TAG_BY_ID_OUTPUT
  DELETE_TEAM_BY_ID: PAGERDUTY_DELETE_TEAM_BY_ID_OUTPUT
  DELETE_TEAM_ESCALATION_POLICY: PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY_OUTPUT
  DELETE_TEAM_FROM_AUTOMATION_ACTION: PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION_OUTPUT
  DELETE_TEMPLATE_BY_ID: PAGERDUTY_DELETE_TEMPLATE_BY_ID_OUTPUT
  DELETE_USER_BY_ID: PAGERDUTY_DELETE_USER_BY_ID_OUTPUT
  DELETE_USER_CONTACT_METHOD: PAGERDUTY_DELETE_USER_CONTACT_METHOD_OUTPUT
  DELETE_USER_FROM_TEAM_BY_ID: PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID_OUTPUT
  DELETE_USER_NOTIFICATION_RULE: PAGERDUTY_DELETE_USER_NOTIFICATION_RULE_OUTPUT
  DELETE_USER_SESSION_BY_ID: PAGERDUTY_DELETE_USER_SESSION_BY_ID_OUTPUT
  DELETE_USER_SESSION_BY_TYPE: PAGERDUTY_DELETE_USER_SESSION_BY_TYPE_OUTPUT
  DELETE_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT
  DELETE_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT
  DISASSOCIATE_SERVICE_DEPENDENCIES: PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES_OUTPUT
  EDIT_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT
  ENABLE_EXTENSION_BY_ID: PAGERDUTY_ENABLE_EXTENSION_BY_ID_OUTPUT
  ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT
  EXECUTE_RESPONSE_PLAY_BY_ID: PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID_OUTPUT
  FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION: PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION_OUTPUT
  FETCH_CUSTOM_INCIDENT_FIELD_BY_ID: PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID_OUTPUT
  FETCH_ESCALATION_POLICES_LIST: PAGERDUTY_FETCH_ESCALATION_POLICES_LIST_OUTPUT
  FETCH_EVENT_ORCHESTRATIONS: PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS_OUTPUT
  FETCH_INCIDENT_ANALYTICS_BY_ID: PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID_OUTPUT
  FETCH_INCIDENT_LIST: PAGERDUTY_FETCH_INCIDENT_LIST_OUTPUT
  FETCH_OUTLIER_INCIDENT_BY_ID: PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID_OUTPUT
  FETCH_POST_UPDATE_STATUS: PAGERDUTY_FETCH_POST_UPDATE_STATUS_OUTPUT
  FETCH_PRIORITIES_LIST: PAGERDUTY_FETCH_PRIORITIES_LIST_OUTPUT
  FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT: PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT_OUTPUT
  FETCH_RELATED_INCIDENTS_BY_ID: PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID_OUTPUT
  FETCH_RUNNER_TEAMS_INTEGRATION: PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION_OUTPUT
  FETCH_STATUS_PAGES: PAGERDUTY_FETCH_STATUS_PAGES_OUTPUT
  FETCH_USER_CONTACT_METHOD: PAGERDUTY_FETCH_USER_CONTACT_METHOD_OUTPUT
  FETCH_VENDOR_LIST: PAGERDUTY_FETCH_VENDOR_LIST_OUTPUT
  FILTER_AND_AGGREGATE_INCIDENT_METRICS: PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS_OUTPUT
  GET_ADDONS_LIST: PAGERDUTY_GET_ADDONS_LIST_OUTPUT
  GET_AGGREGATED_PD_ADVANCE_USAGE_DATA: PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA_OUTPUT
  GET_ALERTS_BY_INCIDENT_ID: PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID_OUTPUT
  GET_ALERT_GROUPING_SETTINGS: PAGERDUTY_GET_ALERT_GROUPING_SETTINGS_OUTPUT
  GET_AN_INCIDENT_TYPE: PAGERDUTY_GET_AN_INCIDENT_TYPE_OUTPUT
  GET_AN_INCIDENT_TYPE_CUSTOM_FIELD: PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD_OUTPUT
  GET_AUDIT_RECORDS: PAGERDUTY_GET_AUDIT_RECORDS_OUTPUT
  GET_AUTOMATION_ACTIONS_RUNNERS: PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS_OUTPUT
  GET_AUTOMATION_ACTION_BY_ID: PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID_OUTPUT
  GET_AUTOMATION_ACTION_RUNNER_BY_ID: PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID_OUTPUT
  GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID: PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID_OUTPUT
  GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD: PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD_OUTPUT
  GET_A_TRIGGER: PAGERDUTY_GET_A_TRIGGER_OUTPUT
  GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS: PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS_OUTPUT
  GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID: PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID_OUTPUT
  GET_CACHE_VARIABLES_FOR_SERVICE: PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE_OUTPUT
  GET_CACHE_VARIABLE_BY_ID: PAGERDUTY_GET_CACHE_VARIABLE_BY_ID_OUTPUT
  GET_ESCALATION_POLICY_BY_ID: PAGERDUTY_GET_ESCALATION_POLICY_BY_ID_OUTPUT
  GET_EVENT_INTEGRATIONS_BY_ID: PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID_OUTPUT
  GET_EVENT_ORCHESTRATION_BY_ID: PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID_OUTPUT
  GET_EVENT_ORCHESTRATION_CACHE_VARIABLES: PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES_OUTPUT
  GET_EVENT_ORCHESTRATION_GLOBAL: PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL_OUTPUT
  GET_EVENT_ORCHESTRATION_INTEGRATION: PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION_OUTPUT
  GET_EXTENSION_SCHEMA_BY_ID: PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID_OUTPUT
  GET_IMPACT_BY_STATUS_PAGE_ID: PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID_OUTPUT
  GET_INCIDENT_ALERT_DETAILS: PAGERDUTY_GET_INCIDENT_ALERT_DETAILS_OUTPUT
  GET_INCIDENT_LOG_ENTRIES_BY_ID: PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID_OUTPUT
  GET_INCIDENT_WORKFLOWS: PAGERDUTY_GET_INCIDENT_WORKFLOWS_OUTPUT
  GET_INCIDENT_WORKFLOWS_ACTIONS: PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS_OUTPUT
  GET_INCIDENT_WORKFLOW_ACTION_BY_ID: PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID_OUTPUT
  GET_LOG_ENTRIES: PAGERDUTY_GET_LOG_ENTRIES_OUTPUT
  GET_MAINTENANCE_WINDOW_BY_ID: PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID_OUTPUT
  GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS: PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS_OUTPUT
  GET_PAUSED_INCIDENT_ALERTS: PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS_OUTPUT
  GET_POST_FROM_STATUS_PAGE_BY_ID: PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID_OUTPUT
  GET_RESPONSE_PLAYS: PAGERDUTY_GET_RESPONSE_PLAYS_OUTPUT
  GET_RULE_FROM_RULESET_BY_ID: PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID_OUTPUT
  GET_SCHEDULES: PAGERDUTY_GET_SCHEDULES_OUTPUT
  GET_SERVICE_IMPACTS_BY_URL_SLUG: PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG_OUTPUT
  GET_SEVERITY_FOR_STATUS_PAGE: PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE_OUTPUT
  GET_SPECIFIC_POST_UPDATE_STATUS: PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS_OUTPUT
  GET_STATUS_DASHBOARD_BY_ID: PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID_OUTPUT
  GET_STATUS_FOR_STATUS_PAGE_BY_ID: PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID_OUTPUT
  GET_STATUS_PAGE_IMPACTS_BY_ID: PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID_OUTPUT
  GET_STATUS_PAGE_SUBSCRIPTION: PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION_OUTPUT
  GET_TEAMS_ASSOCIATED_WITH_ACTION_ID: PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID_OUTPUT
  GET_TEAM_MEMBERS_BY_ID: PAGERDUTY_GET_TEAM_MEMBERS_BY_ID_OUTPUT
  GET_TEAM_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS_OUTPUT
  GET_TEMPLATE_BY_ID: PAGERDUTY_GET_TEMPLATE_BY_ID_OUTPUT
  GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE: PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_OUTPUT
  GET_USER_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS_OUTPUT
  GET_USER_SESSIONS_BY_ID: PAGERDUTY_GET_USER_SESSIONS_BY_ID_OUTPUT
  GET_USER_SESSION_BY_TYPE: PAGERDUTY_GET_USER_SESSION_BY_TYPE_OUTPUT
  GET_USER_STATUS_UPDATE_NOTIFICATION_RULES: PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES_OUTPUT
  GET_WEBHOOK_SUBSCRIPTION_BY_ID: PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID_OUTPUT
  GET_WORKFLOW_INTEGRATION: PAGERDUTY_GET_WORKFLOW_INTEGRATION_OUTPUT
  GET_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT
  INSTALL_ADD_ON_ENDPOINT: PAGERDUTY_INSTALL_ADD_ON_ENDPOINT_OUTPUT
  INVOKE_AUTOMATION_ACTION_BY_ID: PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID_OUTPUT
  LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS: PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS_OUTPUT
  LIST_AUTOMATION_ACTION_DETAILS: PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS_OUTPUT
  LIST_EXTENSION_SCHEMAS: PAGERDUTY_LIST_EXTENSION_SCHEMAS_OUTPUT
  LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD: PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD_OUTPUT
  LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS: PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS_OUTPUT
  LIST_INCIDENT_TYPES: PAGERDUTY_LIST_INCIDENT_TYPES_OUTPUT
  LIST_INCIDENT_TYPE_CUSTOM_FIELDS: PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS_OUTPUT
  LIST_LICENSES: PAGERDUTY_LIST_LICENSES_OUTPUT
  LIST_SUPPORTING_SERVICE_IMPACTS: PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS_OUTPUT
  LIST_TEMPLATES: PAGERDUTY_LIST_TEMPLATES_OUTPUT
  LIST_WORKFLOW_INTEGRATIONS: PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS_OUTPUT
  LIST_WORKFLOW_INTEGRATION_CONNECTIONS: PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS_OUTPUT
  MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE: PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE_OUTPUT
  MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT: PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT_OUTPUT
  MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS: PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS_OUTPUT
  MODIFY_ENTITY_TAGS: PAGERDUTY_MODIFY_ENTITY_TAGS_OUTPUT
  PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS: PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS_OUTPUT
  PING_WEBHOOK_SUBSCRIPTION: PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION_OUTPUT
  POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE: PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE_OUTPUT
  POST_ALERT_GROUPING_SETTINGS: PAGERDUTY_POST_ALERT_GROUPING_SETTINGS_OUTPUT
  POST_ANALYTICS_METRICS_RESPONDER_FILTERS: PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS_OUTPUT
  POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES: PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES_OUTPUT
  POST_CHANGE_EVENTS: PAGERDUTY_POST_CHANGE_EVENTS_OUTPUT
  POST_EVENT_ORCHESTRATION_CACHE_VARIABLES: PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES_OUTPUT
  POST_INCIDENTS_ANALYTICS_WITH_FILTERS: PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS_OUTPUT
  POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE: PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE_OUTPUT
  POST_INCIDENT_METRICS: PAGERDUTY_POST_INCIDENT_METRICS_OUTPUT
  POST_INCIDENT_METRICS_WITH_FILTERS: PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS_OUTPUT
  POST_INCIDENT_NOTE_USING_ID: PAGERDUTY_POST_INCIDENT_NOTE_USING_ID_OUTPUT
  POST_INCIDENT_STATUS_UPDATE: PAGERDUTY_POST_INCIDENT_STATUS_UPDATE_OUTPUT
  POST_RESPONDER_INCIDENTS_WITH_FILTERS: PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS_OUTPUT
  POST_SERVICE_AUTOMATION_ACTION: PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION_OUTPUT
  POST_TEAM_NOTIFICATION_SUBSCRIPTION: PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION_OUTPUT
  POST_TEAM_TO_RUNNER: PAGERDUTY_POST_TEAM_TO_RUNNER_OUTPUT
  PREVIEW_SCHEDULE_OBJECT: PAGERDUTY_PREVIEW_SCHEDULE_OBJECT_OUTPUT
  RENDER_TEMPLATE_FOR_INCIDENT: PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT_OUTPUT
  RETRIEVE_ABILITIES_LIST: PAGERDUTY_RETRIEVE_ABILITIES_LIST_OUTPUT
  RETRIEVE_ABILITY_BY_ID: PAGERDUTY_RETRIEVE_ABILITY_BY_ID_OUTPUT
  RETRIEVE_ACTION_SERVICES_BY_ID: PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID_OUTPUT
  RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID: PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID_OUTPUT
  RETRIEVE_ADDON_BY_ID: PAGERDUTY_RETRIEVE_ADDON_BY_ID_OUTPUT
  RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID: PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID_OUTPUT
  RETRIEVE_AUTOMATION_ACTION_INVOCATIONS: PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS_OUTPUT
  RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID: PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID_OUTPUT
  RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS: PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS_OUTPUT
  RETRIEVE_AUTOMATION_SERVICE_ACTION: PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION_OUTPUT
  RETRIEVE_BUSINESS_SERVICES: PAGERDUTY_RETRIEVE_BUSINESS_SERVICES_OUTPUT
  RETRIEVE_BUSINESS_SERVICE_BY_ID: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID_OUTPUT
  RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES_OUTPUT
  RETRIEVE_BUSINESS_SERVICE_IMPACTORS: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS_OUTPUT
  RETRIEVE_BUSINESS_SERVICE_IMPACTS: PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS_OUTPUT
  RETRIEVE_CHANGE_EVENT_BY_ID: PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID_OUTPUT
  RETRIEVE_CHANGE_EVENT_INFORMATION: PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION_OUTPUT
  RETRIEVE_CURRENT_USER_INFO: PAGERDUTY_RETRIEVE_CURRENT_USER_INFO_OUTPUT
  RETRIEVE_ENTITY_TAGS_BY_ID: PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_OUTPUT
  RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE: PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE_OUTPUT
  RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID: PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID_OUTPUT
  RETRIEVE_EXTENSION_BY_ID: PAGERDUTY_RETRIEVE_EXTENSION_BY_ID_OUTPUT
  RETRIEVE_EXTENSION_LIST: PAGERDUTY_RETRIEVE_EXTENSION_LIST_OUTPUT
  RETRIEVE_INCIDENT_BY_INCIDENT_ID: PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID_OUTPUT
  RETRIEVE_INCIDENT_CUSTOM_FIELDS: PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS_OUTPUT
  RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES: PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES_OUTPUT
  RETRIEVE_INCIDENT_FIELD_OPTIONS: PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS_OUTPUT
  RETRIEVE_INCIDENT_WORKFLOW_BY_ID: PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID_OUTPUT
  RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS: PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS_OUTPUT
  RETRIEVE_INTEGRATION_BY_SERVICE_ID: PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID_OUTPUT
  RETRIEVE_LICENSE_ALLOCATIONS: PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS_OUTPUT
  RETRIEVE_LIST_OF_SERVICES: PAGERDUTY_RETRIEVE_LIST_OF_SERVICES_OUTPUT
  RETRIEVE_LOG_ENTRY_BY_ID: PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID_OUTPUT
  RETRIEVE_MAINTENANCE_WINDOWS: PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS_OUTPUT
  RETRIEVE_NOTES_FOR_INCIDENT: PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT_OUTPUT
  RETRIEVE_NOTIFICATIONS: PAGERDUTY_RETRIEVE_NOTIFICATIONS_OUTPUT
  RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE_OUTPUT
  RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES: PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES_OUTPUT
  RETRIEVE_ONCALL_LIST: PAGERDUTY_RETRIEVE_ONCALL_LIST_OUTPUT
  RETRIEVE_PAST_INCIDENTS: PAGERDUTY_RETRIEVE_PAST_INCIDENTS_OUTPUT
  RETRIEVE_POSTMORTEM_BY_ID: PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID_OUTPUT
  RETRIEVE_RESPONSE_PLAY_BY_ID: PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID_OUTPUT
  RETRIEVE_RULESET_BY_ID: PAGERDUTY_RETRIEVE_RULESET_BY_ID_OUTPUT
  RETRIEVE_RULESET_LIST: PAGERDUTY_RETRIEVE_RULESET_LIST_OUTPUT
  RETRIEVE_RULES_FOR_SERVICE_ID: PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID_OUTPUT
  RETRIEVE_RULES_FROM_RULESET_BY_ID: PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID_OUTPUT
  RETRIEVE_RULE_BY_SERVICE_ID: PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID_OUTPUT
  RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID: PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID_OUTPUT
  RETRIEVE_SCHEDULE_BY_ID: PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID_OUTPUT
  RETRIEVE_SCHEDULE_OVERRIDE_BY_ID: PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID_OUTPUT
  RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID_OUTPUT
  RETRIEVE_SERVICE_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_BY_ID_OUTPUT
  RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID_OUTPUT
  RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS: PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS_OUTPUT
  RETRIEVE_SERVICE_STATUS_BY_ID: PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID_OUTPUT
  RETRIEVE_SERVICE_STATUS_PAGE: PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE_OUTPUT
  RETRIEVE_STANDARDS_LIST: PAGERDUTY_RETRIEVE_STANDARDS_LIST_OUTPUT
  RETRIEVE_STANDARDS_SCORES: PAGERDUTY_RETRIEVE_STANDARDS_SCORES_OUTPUT
  RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE: PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE_OUTPUT
  RETRIEVE_STATUS_DASHBOARDS_INFORMATION: PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION_OUTPUT
  RETRIEVE_STATUS_DASHBOARD_BY_SLUG: PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG_OUTPUT
  RETRIEVE_STATUS_PAGES_STATUS: PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS_OUTPUT
  RETRIEVE_STATUS_PAGE_POST: PAGERDUTY_RETRIEVE_STATUS_PAGE_POST_OUTPUT
  RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID: PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID_OUTPUT
  RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID: PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID_OUTPUT
  RETRIEVE_TAGS: PAGERDUTY_RETRIEVE_TAGS_OUTPUT
  RETRIEVE_TAG_BY_ID: PAGERDUTY_RETRIEVE_TAG_BY_ID_OUTPUT
  RETRIEVE_TEAM_AUDIT_RECORDS: PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS_OUTPUT
  RETRIEVE_TEAM_DETAILS_BY_ID: PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID_OUTPUT
  RETRIEVE_TEAM_LIST: PAGERDUTY_RETRIEVE_TEAM_LIST_OUTPUT
  RETRIEVE_TECHNICAL_SERVICE_DETAILS: PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS_OUTPUT
  RETRIEVE_TEMPLATE_FIELDS: PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS_OUTPUT
  RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID: PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID_OUTPUT
  RETRIEVE_USERS_BY_SCHEDULE_ID: PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID_OUTPUT
  RETRIEVE_USERS_LIST: PAGERDUTY_RETRIEVE_USERS_LIST_OUTPUT
  RETRIEVE_USER_AUDIT_RECORDS_BY_ID: PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID_OUTPUT
  RETRIEVE_USER_BY_ID: PAGERDUTY_RETRIEVE_USER_BY_ID_OUTPUT
  RETRIEVE_USER_CONTACT_METHODS_VIA_ID: PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID_OUTPUT
  RETRIEVE_USER_LICENSE_INFORMATION: PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION_OUTPUT
  RETRIEVE_USER_NOTIFICATION_RULE: PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE_OUTPUT
  RETRIEVE_USER_NOTIFICATION_RULES: PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES_OUTPUT
  RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE: PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE_OUTPUT
  RETRIEVE_VENDOR_BY_ID: PAGERDUTY_RETRIEVE_VENDOR_BY_ID_OUTPUT
  RETRIEVE_WEBHOOK_SUBSCRIPTIONS: PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS_OUTPUT
  SEND_RESPONDER_REQUESTS_FOR_INCIDENTS: PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS_OUTPUT
  SET_BUSINESS_SERVICE_IMPACT_STATUS: PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS_OUTPUT
  SET_GLOBAL_PRIORITY_THRESHOLD: PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD_OUTPUT
  SNOOZE_INCIDENT_BY_DURATION: PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION_OUTPUT
  SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES: PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES_OUTPUT
  SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES: PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES_OUTPUT
  SUBSCRIBE_TO_USER_NOTIFICATIONS: PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS_OUTPUT
  UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY: PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY_OUTPUT
  UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES: PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES_OUTPUT
  UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS_OUTPUT
  UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS: PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS_OUTPUT
  UPDATE_ADD_ON_BY_ID: PAGERDUTY_UPDATE_ADD_ON_BY_ID_OUTPUT
  UPDATE_ALERT_GROUPING_SETTINGS_BY_ID: PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID_OUTPUT
  UPDATE_ALERT_IN_INCIDENT: PAGERDUTY_UPDATE_ALERT_IN_INCIDENT_OUTPUT
  UPDATE_AN_INCIDENT_TYPE: PAGERDUTY_UPDATE_AN_INCIDENT_TYPE_OUTPUT
  UPDATE_AUTOMATION_RUNNER_INFO: PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO_OUTPUT
  UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE_OUTPUT
  UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD_OUTPUT
  UPDATE_A_TRIGGER: PAGERDUTY_UPDATE_A_TRIGGER_OUTPUT
  UPDATE_BUSINESS_SERVICE_BY_ID: PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID_OUTPUT
  UPDATE_CHANGE_EVENT_BY_ID: PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID_OUTPUT
  UPDATE_CUSTOM_FIELD_DISPLAY_NAME: PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME_OUTPUT
  UPDATE_CUSTOM_FIELD_OPTION: PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION_OUTPUT
  UPDATE_ESCALATION_POLICY_BY_ID: PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID_OUTPUT
  UPDATE_ESCALATION_POLICY_FOR_TEAM: PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM_OUTPUT
  UPDATE_EVENT_ORCHESTRATION_BY_ID: PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID_OUTPUT
  UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE: PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE_OUTPUT
  UPDATE_EVENT_RULE_BY_ID: PAGERDUTY_UPDATE_EVENT_RULE_BY_ID_OUTPUT
  UPDATE_EVENT_RULE_FOR_SERVICE: PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE_OUTPUT
  UPDATE_EXTENSION_BY_ID: PAGERDUTY_UPDATE_EXTENSION_BY_ID_OUTPUT
  UPDATE_GLOBAL_ORCHESTRATION: PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION_OUTPUT
  UPDATE_INCIDENT_ALERTS: PAGERDUTY_UPDATE_INCIDENT_ALERTS_OUTPUT
  UPDATE_INCIDENT_BY_ID: PAGERDUTY_UPDATE_INCIDENT_BY_ID_OUTPUT
  UPDATE_INCIDENT_CUSTOM_FIELD_VALUES: PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES_OUTPUT
  UPDATE_INCIDENT_DETAILS: PAGERDUTY_UPDATE_INCIDENT_DETAILS_OUTPUT
  UPDATE_INCIDENT_WORKFLOW: PAGERDUTY_UPDATE_INCIDENT_WORKFLOW_OUTPUT
  UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID: PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID_OUTPUT
  UPDATE_INTEGRATION_LABEL: PAGERDUTY_UPDATE_INTEGRATION_LABEL_OUTPUT
  UPDATE_LOG_ENTRY_CHANNEL: PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL_OUTPUT
  UPDATE_MAINTENANCE_WINDOW_BY_ID: PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID_OUTPUT
  UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE: PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE_OUTPUT
  UPDATE_ORCHESTRATION_ROUTER_DETAILS: PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS_OUTPUT
  UPDATE_RESPONSE_PLAY_BY_ID: PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID_OUTPUT
  UPDATE_RULESET_BY_ID: PAGERDUTY_UPDATE_RULESET_BY_ID_OUTPUT
  UPDATE_SCHEDULE_BY_ID: PAGERDUTY_UPDATE_SCHEDULE_BY_ID_OUTPUT
  UPDATE_SERVICE_BY_ID: PAGERDUTY_UPDATE_SERVICE_BY_ID_OUTPUT
  UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS: PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS_OUTPUT
  UPDATE_STANDARD_BY_ID: PAGERDUTY_UPDATE_STANDARD_BY_ID_OUTPUT
  UPDATE_STATUS_PAGE_POST: PAGERDUTY_UPDATE_STATUS_PAGE_POST_OUTPUT
  UPDATE_STATUS_PAGE_POST_INFO: PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO_OUTPUT
  UPDATE_STATUS_PAGE_POST_POSTMORTEM: PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM_OUTPUT
  UPDATE_STATUS_PAGE_POST_RESOURCE: PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE_OUTPUT
  UPDATE_TEAM_BY_ID: PAGERDUTY_UPDATE_TEAM_BY_ID_OUTPUT
  UPDATE_TEMPLATE_BY_ID: PAGERDUTY_UPDATE_TEMPLATE_BY_ID_OUTPUT
  UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE: PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE_OUTPUT
  UPDATE_UNROUTED_ORCHESTRATION_RULES: PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES_OUTPUT
  UPDATE_USER_INFORMATION: PAGERDUTY_UPDATE_USER_INFORMATION_OUTPUT
  UPDATE_USER_NOTIFICATION_RULE_BY_ID: PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID_OUTPUT
  UPDATE_USER_ROLE_ON_TEAM: PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM_OUTPUT
  UPDATE_WORKFLOW_INTEGRATION_CONNECTION: PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PAGERDUTY toolkit.
 */
export const PAGERDUTY = {
  slug: "pagerduty",
  tools: {
    /**
     * This endpoint adds a service to an existing incident workflow trigger in pagerduty. it allows you to associate a specific service with a trigger, enabling automated incident management processes for that service. use this endpoint when you need to connect a service to an incident workflow, typically during the setup or modification of your incident response procedures. the endpoint requires the trigger's id and the service's id to make the association. it's important to note that this operation doesn't create new services or triggers, but rather links existing ones. ensure that both the trigger and service exist in your pagerduty account before making this call.
     */
    ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER: "PAGERDUTY_ADD_SERVICE_TO_INCIDENT_WORKFLOW_TRIGGER",
    /**
     * This endpoint analyzes and aggregates incident metrics across all escalation policies in pagerduty. it allows for detailed filtering and customization of the analysis, enabling users to gain insights into incident patterns, response times, and escalation effectiveness. the endpoint is particularly useful for operational reviews, performance analysis, and identifying areas for improvement in incident management processes. it provides flexibility in data selection through various filters and supports different time-based aggregations for comprehensive reporting.
     */
    AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS: "PAGERDUTY_AGGREGATE_ESCALATION_POLICY_INCIDENT_METRICS",
    /**
     * Associates multiple service dependencies in pagerduty, allowing you to define relationships between supporting and dependent services. this endpoint is used to establish a hierarchical structure of services, which is crucial for effective incident management and impact analysis. it enables you to create multiple dependencies in a single api call, improving efficiency when setting up complex service relationships. use this endpoint when you need to define or update the dependency structure of your services in pagerduty, such as during initial setup, service restructuring, or when adding new services to your incident management workflow.
     */
    ASSOCIATE_SERVICE_DEPENDENCIES: "PAGERDUTY_ASSOCIATE_SERVICE_DEPENDENCIES",
    /**
     * This endpoint associates a specific team with an automation action in pagerduty. it allows you to link a team to an automated workflow, enabling better organization and management of automation actions within your incident response processes. use this endpoint when you need to assign responsibility for an automation action to a particular team or when restructuring your automation workflows. the association helps in tracking, auditing, and managing permissions for automation actions across different teams in your organization. note that this endpoint only creates the association; it does not create new teams or automation actions.
     */
    ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION: "PAGERDUTY_ASSOCIATE_TEAM_WITH_AUTOMATION_ACTION",
    /**
     * Retrieves the audit records for a specific escalation policy in pagerduty. this endpoint allows users to access a detailed history of changes made to the escalation policy, including modifications to escalation rules, associated services, and on-call schedules. it's particularly useful for compliance tracking, troubleshooting, and understanding how the incident response process has been adjusted over time. the audit records provide transparency into who made changes, what was changed, and when the changes occurred, helping teams maintain accountability and optimize their incident management workflows.
     */
    AUDIT_ESCALATION_POLICY_RECORDS: "PAGERDUTY_AUDIT_ESCALATION_POLICY_RECORDS",
    /**
     * Converts the rules associated with a specific pagerduty service to a new or optimized format. this endpoint is used to update and standardize the incident management rules for a given service, improving the efficiency and consistency of alert handling. it should be used when there's a need to modernize rule sets, apply best practices, or adapt rules to changing service requirements. the conversion process is applied to all rules linked to the specified service id, potentially modifying their structure or behavior. it's important to note that this operation may impact existing incident routing and alerting patterns, so it should be used cautiously and preferably during a maintenance window.
     */
    CONVERT_SERVICE_RULE_BY_ID: "PAGERDUTY_CONVERT_SERVICE_RULE_BY_ID",
    /**
     * Retrieves the count of paused incident reports in the pagerduty system. this endpoint is part of pagerduty's incident management and analytics features, providing a quick way to quantify the number of incidents that are currently in a paused state. it's particularly useful for generating high-level analytics, tracking incident management efficiency, and identifying trends in incident handling. the endpoint returns a simple count, making it ideal for dashboard displays or periodic system status checks. it should be used when a rapid overview of paused incidents is needed, but it won't provide detailed information about individual incidents.
     */
    COUNT_PAUSED_INCIDENT_REPORTS: "PAGERDUTY_COUNT_PAUSED_INCIDENT_REPORTS",
    /**
     * Creates a new custom field for incidents in pagerduty. this endpoint allows you to define additional data points to be associated with incidents, enhancing incident management and reporting capabilities. custom fields can be used to store various types of information such as environment, severity, or any other relevant metadata. the field can be configured with different data types and value constraints, allowing for flexible and structured data capture. use this endpoint when you need to extend the incident data model with organization-specific information. note that once created, certain properties of a custom field cannot be changed, so careful planning of field structure is important.
     */
    CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS: "PAGERDUTY_CREATE_AND_MANAGE_CUSTOM_INCIDENT_FIELDS",
    /**
     * Create a new incident type. incident types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#incidenttype) scoped oauth requires: `incident types.write`
     */
    CREATE_AN_INCIDENT_TYPE: "PAGERDUTY_CREATE_AN_INCIDENT_TYPE",
    /**
     * Creates a new automation runner in the pagerduty incident management system. this endpoint allows you to set up either a sidecar runner, which polls for invocations externally, or a runbook runner, which communicates directly with a runbook instance. use this when you need to automate actions within pagerduty, such as incident response processes or scheduled tasks. the runner can be associated with specific teams for better organization and access control. note that the required parameters differ based on the chosen runner type, with runbook runners requiring additional configuration for server connection.
     */
    CREATE_AUTOMATION_RUNNER_ENDPOINT: "PAGERDUTY_CREATE_AUTOMATION_RUNNER_ENDPOINT",
    /**
     * Create a custom field for an incident type. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.write`
     */
    CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: "PAGERDUTY_CREATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE",
    /**
     * Create a field option for a custom field. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.write`
     */
    CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: "PAGERDUTY_CREATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD",
    /**
     * Creates a new ruleset in pagerduty for managing incident routing and notification rules. this endpoint allows you to define a named set of rules that determine how incidents are processed and directed to specific teams or users. it's particularly useful when setting up or modifying your incident management workflow. the created ruleset can be global, affecting all incoming incidents, or assigned to a specific team for more targeted incident routing. note that while you can create the ruleset structure with this call, the actual rules within the ruleset must be added separately using other api endpoints.
     */
    CREATE_A_RULESET: "PAGERDUTY_CREATE_A_RULESET",
    /**
     * Create new incident workflow trigger scoped oauth requires: `incident workflows.write`
     */
    CREATE_A_TRIGGER: "PAGERDUTY_CREATE_A_TRIGGER",
    /**
     * This endpoint creates a new business service in pagerduty, which represents a specific service or application that can be monitored and managed within the incident management platform. it allows you to define essential properties of the service, including its name, description, point of contact, and the team responsible for it. use this endpoint when you need to add a new service to your pagerduty account for monitoring and incident management. the created business service can be later associated with technical services, incidents, and escalation policies. note that this endpoint only creates the business service; additional configuration may be required to set up monitoring and alerting for the service.
     */
    CREATE_BUSINESS_SERVICE: "PAGERDUTY_CREATE_BUSINESS_SERVICE",
    /**
     * Creates a new escalation policy in pagerduty, defining how incidents are escalated to different responders or teams. this endpoint allows you to set up a structured response plan for managing incidents, including escalation rules, targets, and associated services or teams. use this when setting up or modifying incident management workflows. the created policy determines the sequence of notifications and assignments for unacknowledged incidents. note that while you can create the policy structure, actual service associations are read-only and must be managed separately. only one team can be associated with a policy, and the account must have the 'teams' ability to use this feature.
     */
    CREATE_ESCALATION_POLICY: "PAGERDUTY_CREATE_ESCALATION_POLICY",
    /**
     * Creates a new event orchestration in pagerduty, which defines how incoming events are processed and routed to appropriate services. this endpoint allows you to set up a configuration that manages the flow of events from various integrations, ensuring efficient incident handling. use this when you need to establish a new set of rules for event routing, especially when introducing new services or reorganizing your incident management workflow. the created orchestration can later be associated with specific integrations using their routing keys. note that while you can create the orchestration structure, the actual integrations and routing details are managed separately and will be populated as read-only information once configured.
     */
    CREATE_EVENT_ORCHESTRATION: "PAGERDUTY_CREATE_EVENT_ORCHESTRATION",
    /**
     * Creates a new event rule within a specified ruleset in pagerduty's incident management system. this endpoint allows you to define complex conditions for event matching and specify actions to be taken when an event meets those conditions. use this to automate incident response, customize alert routing, and fine-tune event processing based on specific criteria. the created rule becomes part of the ruleset's evaluation sequence, affecting how incoming events are processed and managed.
     */
    CREATE_EVENT_RULE_IN_RULESET: "PAGERDUTY_CREATE_EVENT_RULE_IN_RULESET",
    /**
     * Creates a new extension in pagerduty, allowing for additional functionality or integrations to be added to your services. this endpoint is used to set up webhooks, custom integrations, or other specific features that enhance the capabilities of your pagerduty account. the extension is defined by its name, associated services, and a specific extension schema that determines its behavior. use this endpoint when you need to automate the creation of extensions, such as setting up multiple webhooks or implementing custom workflows. it's particularly useful for large-scale deployments or when programmatically managing your pagerduty configuration. note that the extension can be temporarily disabled by pagerduty if issues arise, such as repeated rejections from a webhook server.
     */
    CREATE_EXTENSION_OBJECT: "PAGERDUTY_CREATE_EXTENSION_OBJECT",
    /**
     * Creates a new on-call handoff notification rule for a specific user in pagerduty. this endpoint allows you to set up automated notifications for when a user is about to start or end their on-call shift. it defines how and when the user should be notified about upcoming handoffs, helping to ensure smooth transitions between on-call periods. use this when you need to establish or modify the way a user is informed about their on-call responsibilities. the rule can be set for incoming shifts, outgoing shifts, or both, and can use various contact methods like email, phone, push notifications, or sms. note that this endpoint creates a new rule and does not modify existing ones.
     */
    CREATE_HANDOFF_NOTIFICATION_RULE: "PAGERDUTY_CREATE_HANDOFF_NOTIFICATION_RULE",
    /**
     * Creates a new field option for a specific custom field in pagerduty's incident management system. this endpoint allows you to add predefined options to custom fields, enhancing the ability to categorize and filter incidents with consistent, structured data. use this when you need to expand the list of selectable values for a string-type custom field. the new option becomes immediately available for selection when updating or creating incidents. note that this operation is specific to custom fields of type 'string' and cannot be used for other data types. ensure that the field id in the url corresponds to an existing custom field in your pagerduty account.
     */
    CREATE_INCIDENT_FIELD_OPTION: "PAGERDUTY_CREATE_INCIDENT_FIELD_OPTION",
    /**
     * Creates a new incident in pagerduty with specified details and assignments. use this endpoint when an event requires immediate attention from on-call teams. it supports comprehensive incident documentation, including priority, urgency, and conference bridge information. the 'incident key' parameter helps prevent duplicate incidents, crucial for maintaining a clean incident list.
     */
    CREATE_INCIDENT_RECORD: "PAGERDUTY_CREATE_INCIDENT_RECORD",
    /**
     * This endpoint creates a new incident workflow in pagerduty, allowing users to define a series of automated steps to be executed during incident response. it enables the setup of complex, multi-step processes that can include actions like sending notifications, updating statuses, or triggering other integrated systems. the workflow creation is highly customizable, supporting various action types and nested workflows, making it suitable for diverse incident management scenarios across different team structures and response protocols.
     */
    CREATE_INCIDENT_WORKFLOW: "PAGERDUTY_CREATE_INCIDENT_WORKFLOW",
    /**
     * Creates a new instance of an incident workflow for a specific incident in pagerduty. this endpoint allows you to initiate a predefined workflow process for managing and resolving an ongoing incident. it links the workflow instance to a particular incident, enabling automated and standardized incident response procedures. use this when you need to start a structured response process for a newly created or existing incident. the endpoint is particularly useful for ensuring consistent handling of incidents across your organization and for tracking the progress of incident resolution through defined stages.
     */
    CREATE_INCIDENT_WORKFLOW_INSTANCE: "PAGERDUTY_CREATE_INCIDENT_WORKFLOW_INSTANCE",
    /**
     * Creates a new integration within an existing event orchestration in pagerduty. this endpoint allows users to set up connections between pagerduty and external systems or services, enabling automated event management and incident response. it should be used when adding a new integration to an event orchestration, such as connecting a monitoring tool or alerting system. the endpoint requires minimal information, focusing on the integration's label for identification purposes. note that this endpoint only creates the integration; additional configuration may be required in the pagerduty interface or through other api calls to fully set up the integration's functionality.
     */
    CREATE_INTEGRATION_FOR_ORCHESTRATION: "PAGERDUTY_CREATE_INTEGRATION_FOR_ORCHESTRATION",
    /**
     * This endpoint creates a new integration for a specific pagerduty service. it allows you to set up various types of integrations, including email-based and events api v2 integrations. the primary use case is to establish new channels for incident creation and management within a pagerduty service. this tool is particularly useful when setting up automated alerting systems or connecting external monitoring tools to pagerduty. the integration type and configuration options determine how incidents are triggered and processed. note that this endpoint focuses on creation only and does not handle updating or deleting existing integrations.
     */
    CREATE_INTEGRATION_FOR_SERVICE: "PAGERDUTY_CREATE_INTEGRATION_FOR_SERVICE",
    /**
     * Creates a new maintenance window in pagerduty, allowing you to schedule periods of planned maintenance for specific services. during a maintenance window, incidents are not created for the affected services, preventing unnecessary alerts and notifications. this endpoint is useful for planning and executing system upgrades, patches, or other maintenance tasks without triggering false alarms. the maintenance window has a defined start and end time, can be associated with multiple services, and optionally linked to specific teams. it's important to note that while incidents are suppressed during the maintenance window, underlying issues are still logged and can be reviewed later if needed.
     */
    CREATE_MAINTENANCE_WINDOW_OBJECT: "PAGERDUTY_CREATE_MAINTENANCE_WINDOW_OBJECT",
    /**
     * Creates a new on-call schedule in pagerduty, defining rotation patterns for team members. this endpoint allows you to set up complex schedules with multiple layers, each having its own rotation pattern, user assignments, and time restrictions. use it to establish new on-call rotations, manage team availability, and ensure continuous incident response coverage. the created schedule can be used in escalation policies to determine who gets notified during incidents. note that while you can create a basic schedule structure, some elements like rendered schedule entries are read-only and will be populated by the system after creation.
     */
    CREATE_NEW_SCHEDULE_LAYER: "PAGERDUTY_CREATE_NEW_SCHEDULE_LAYER",
    /**
     * Creates a new service in pagerduty, which is a key component for managing incidents and alerts. this endpoint allows you to set up a service with various configurations including escalation policies, incident urgency rules, support hours, and alert grouping parameters. use this when you need to add a new monitored service to your pagerduty account, such as a new application, infrastructure component, or business process. the created service will be used as a target for incoming alerts and incidents, helping to organize and streamline your incident management process. note that some advanced features like intelligent alert grouping may depend on your pagerduty plan.
     */
    CREATE_NEW_SERVICE: "PAGERDUTY_CREATE_NEW_SERVICE",
    /**
     * Creates a new tag in pagerduty for labeling and categorizing entities. this endpoint allows users to add a custom label to their pagerduty account, which can be used to organize and filter various resources such as incidents, services, or teams. the created tag can be subsequently assigned to relevant entities to improve organization and searchability within the pagerduty platform. use this endpoint when you need to introduce a new categorization or labeling scheme in your pagerduty setup. note that this endpoint only creates the tag; assigning it to specific entities would require separate api calls.
     */
    CREATE_NEW_TAG_IN_SYSTEM: "PAGERDUTY_CREATE_NEW_TAG_IN_SYSTEM",
    /**
     * Creates a new team within your pagerduty account. this endpoint allows you to establish a group of users with shared responsibilities, often used for organizing incident management and on-call schedules. use this when setting up a new department, project team, or any other group that needs to collaborate on incident responses. the created team can be configured as public or private, determining the level of access for non-members. note that while you can create the team structure with this call, you'll need separate api calls to add members or assign schedules to the team.
     */
    CREATE_NEW_TEAM_WITH_DETAILS: "PAGERDUTY_CREATE_NEW_TEAM_WITH_DETAILS",
    /**
     * Creates a new webhook subscription in pagerduty to receive specific event notifications. this endpoint allows users to set up automated notifications for various incident-related events, such as triggers, acknowledgments, and resolutions. the webhook can be configured to filter events by service, team, or account-wide, and supports custom http headers for enhanced integration capabilities. use this when you need to integrate pagerduty's real-time incident updates with external systems or workflows. note that the webhook's secret for payload verification is only provided in the initial creation response and cannot be retrieved later.
     */
    CREATE_NEW_WEBHOOK_SUBSCRIPTION: "PAGERDUTY_CREATE_NEW_WEBHOOK_SUBSCRIPTION",
    /**
     * Creates a new post on a specified pagerduty status page. this endpoint allows you to publish information about incidents or scheduled maintenance, including details such as the post type, timing, and associated updates. use this to communicate service status, planned downtime, or ongoing issues to your users or customers. the post can include multiple updates, each with its own message, severity, and impact on specific services. this is particularly useful for providing real-time information during incidents or for scheduling and describing maintenance windows.
     */
    CREATE_OR_UPDATE_STATUS_PAGE_POST: "PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POST",
    /**
     * Creates or updates a postmortem for a specific status page post in pagerduty. this endpoint allows you to add detailed analysis and insights about an incident after its resolution. the postmortem can include rich-text content and offers the option to notify subscribers. use this when you need to provide a comprehensive review of an incident, its root causes, and lessons learned. it's particularly useful for maintaining transparency and improving incident response processes. note that the postmortem is limited to 10,000 characters and is always associated with an existing status page post.
     */
    CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM: "PAGERDUTY_CREATE_OR_UPDATE_STATUS_PAGE_POSTMORTEM",
    /**
     * Creates a new response play in pagerduty, which is a predefined set of actions to be executed in response to an incident. this endpoint allows you to configure automated responses, including adding subscribers, assigning responders, setting up conference details, and defining how the response play can be triggered. use this when you want to standardize and automate your incident management process, ensuring consistent and efficient responses to different types of incidents. the response play can be set to run automatically for specific services or be manually triggered by team members or responders, depending on the configuration. this tool is particularly useful for creating templated responses for common incident types or for implementing best practices across your organization's incident management workflow.
     */
    CREATE_RESPONSE_PLAY_FOR_INCIDENTS: "PAGERDUTY_CREATE_RESPONSE_PLAY_FOR_INCIDENTS",
    /**
     * Creates one or more overrides for a specific schedule in pagerduty. this endpoint allows you to temporarily modify the on-call schedule by assigning different users for specific time periods. it's useful for handling planned absences, shift swaps, or special coverage requirements without permanently altering the regular schedule. the overrides are applied to the schedule identified by the {id} parameter in the endpoint url. multiple overrides can be created in a single request, enabling efficient batch modifications to the schedule. each override specifies a start time, end time, and the user who will be on call during that period. the endpoint should be used when temporary changes to the on-call rotation are needed. it does not modify the underlying schedule configuration.
     */
    CREATE_SCHEDULE_OVERRIDES_CONFIGURATION: "PAGERDUTY_CREATE_SCHEDULE_OVERRIDES_CONFIGURATION",
    /**
     * Creates a new event rule for a specific service in pagerduty. this endpoint allows you to define complex conditions and actions for handling incoming events, enabling automated incident management and alert routing. use this when you need to set up custom logic for processing events, such as setting priorities, annotating incidents, or suppressing alerts based on specific criteria. the rule's position in the evaluation order can be specified, and various time-based conditions can be applied to control when the rule is active. this endpoint is crucial for fine-tuning your incident response workflow and reducing alert noise.
     */
    CREATE_SERVICE_EVENT_RULE: "PAGERDUTY_CREATE_SERVICE_EVENT_RULE",
    /**
     * Creates a new subscription for a pagerduty status page. this endpoint allows users to set up notifications for specific status pages or components within those pages. it's used to keep subscribers informed about updates, incidents, or changes to the monitored services. the subscription can be configured for either email or webhook notifications, allowing for flexible integration with various notification systems. this tool should be used when setting up new monitoring or alert systems, or when adding new stakeholders who need to be kept informed about service status. it's particularly useful for devops teams, it managers, or customer support teams who need real-time updates on service health. note that this endpoint only creates the subscription; it does not manage or trigger the actual notifications.
     */
    CREATE_STATUS_PAGE_SUBSCRIPTION: "PAGERDUTY_CREATE_STATUS_PAGE_SUBSCRIPTION",
    /**
     * Creates a new template in pagerduty for standardized status updates. this endpoint allows users to define customizable templates for various notification types, including emails and short messages. it's primarily used to streamline communication during incident management by providing consistent and pre-formatted status update messages. the template can include placeholders for dynamic content, allowing for personalized and context-specific notifications. this endpoint should be used when setting up new standardized communication formats for incident updates, but it's important to note that currently only 'status update' type templates are supported.
     */
    CREATE_STATUS_UPDATE_TEMPLATE: "PAGERDUTY_CREATE_STATUS_UPDATE_TEMPLATE",
    /**
     * Creates a new notification rule for a specific user in pagerduty. this endpoint allows you to define how and when a user should be notified about assigned incidents. you can specify the delay before notification, the method of contact, and the urgency level of incidents that trigger this rule. this is particularly useful for customizing alert behaviors for different users based on their preferences or role within the organization. the rule created will be associated with the user identified by the provided id in the url path.
     */
    CREATE_USER_NOTIFICATION_RULE: "PAGERDUTY_CREATE_USER_NOTIFICATION_RULE",
    /**
     * Creates a new user in the pagerduty system with the specified attributes. this endpoint should be used when onboarding new team members or adding users to your pagerduty account. it allows you to set up essential user information, including name, email, role, and time zone preferences. the created user will have default contact methods and notification rules, which can be customized later. note that some fields like teams, contact methods, and notification rules cannot be set during user creation and must be managed separately. the endpoint requires at minimum a name, email, and user type, with several optional fields for further customization.
     */
    CREATE_USER_OBJECT: "PAGERDUTY_CREATE_USER_OBJECT",
    /**
     * Creates a new status update notification rule for a specific user in pagerduty. this endpoint allows you to define how a user will be notified about incident status updates. it's used to customize notification preferences for individual users, ensuring they receive timely updates through their preferred contact method. the rule specifies which contact method (email, phone, push notification, or sms) should be used for sending status updates. this is particularly useful for tailoring notification strategies to match users' roles and responsibilities within the incident management process.
     */
    CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE: "PAGERDUTY_CREATE_USER_STATUS_UPDATE_NOTIFICATION_RULE",
    /**
     * Create a new workflow integration connection. scoped oauth requires: `workflow integrations:connections.write`
     */
    CREATE_WORKFLOW_INTEGRATION_CONNECTION: "PAGERDUTY_CREATE_WORKFLOW_INTEGRATION_CONNECTION",
    /**
     * Deletes the account subscription associated with a specific business service in pagerduty. this endpoint is used to terminate the subscription or billing relationship between a business service and the account. it should be used when you need to discontinue the subscription for a particular business service, such as when the service is no longer needed or when restructuring your pagerduty setup. this action is irreversible, so it should be used with caution. the endpoint does not return any specific data upon successful deletion, likely providing only a success status code.
     */
    DELETE_ACCOUNT_SUBSCRIPTION_BY_ID: "PAGERDUTY_DELETE_ACCOUNT_SUBSCRIPTION_BY_ID",
    /**
     * Deletes a specific add-on from the pagerduty account using its unique identifier. this endpoint should be used when you want to remove an integration or extension that is no longer needed or active in your pagerduty setup. it's important to note that this action is irreversible, and once an add-on is deleted, it cannot be recovered without re-adding it. use this endpoint with caution, as removing an add-on may impact any automated workflows or integrations that depend on it.
     */
    DELETE_ADDON_BY_ID: "PAGERDUTY_DELETE_ADDON_BY_ID",
    /**
     * This endpoint allows you to delete specific alert grouping settings in pagerduty. it is used to remove outdated or unnecessary configurations that determine how alerts are grouped into incidents. the deletion is permanent and cannot be undone, so it should be used with caution. this operation is particularly useful when updating your incident management strategy or cleaning up unused configurations to maintain an efficient alert grouping system. note that deleting these settings may affect how future alerts are grouped, potentially impacting your team's incident response workflow.
     */
    DELETE_ALERT_GROUPING_SETTING: "PAGERDUTY_DELETE_ALERT_GROUPING_SETTING",
    /**
     * Delete all oauth delegations as per provided query parameters. an oauth delegation represents an instance of a user or account's authorization to an app (via oauth) to access their pagerduty account. common apps include the pagerduty mobile app, slack, microsoft teams, and third-party apps. deleting an oauth delegation will revoke that instance of an app's access to that user or account. to grant access again, reauthorization/reauthentication may be required. at this time, this endpoint only supports deleting mobile app oauth delegations for a given user. this is equivalent to signing users out of the mobile app. this is an asynchronous api, the deletion request itself will be processed within 24 hours. scoped oauth requires: `oauth delegations.write`
     */
    DELETE_ALL_OAUTH_DELEGATIONS: "PAGERDUTY_DELETE_ALL_OAUTH_DELEGATIONS",
    /**
     * Deletes a specific automation runner from the pagerduty system. this endpoint is used to permanently remove an automation runner, which is responsible for executing automated tasks and workflows. it should be used when an automation runner is no longer needed or needs to be replaced. once deleted, all associated automated actions and schedules tied to this runner will be affected. exercise caution when using this endpoint, as the deletion is irreversible and may impact existing automation setups.
     */
    DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID: "PAGERDUTY_DELETE_AUTOMATION_ACTIONS_RUNNER_BY_ID",
    /**
     * Deletes a specific automation action from the pagerduty system. this endpoint is used to permanently remove an automation action, which includes any associated scripts or jobs in runbook automation. it should be used when an automation action is no longer needed or has become obsolete. once deleted, the action cannot be recovered, so use this endpoint with caution. this operation is typically performed by administrators or users with appropriate permissions to manage automation actions.
     */
    DELETE_AUTOMATION_ACTION_BY_ID: "PAGERDUTY_DELETE_AUTOMATION_ACTION_BY_ID",
    /**
     * This endpoint removes a specific automation action from a particular service in pagerduty. it is used to disassociate an automated workflow or action from a service, effectively stopping that action from being triggered for incidents related to the specified service. this operation is useful when you need to update your incident management workflow or when an automated action is no longer relevant for a specific service. it's important to note that this endpoint only removes the association between the action and the service; it does not delete the automation action itself from the system. use this endpoint with caution, as removing an automation action from a service will immediately affect the incident response process for that service.
     */
    DELETE_AUTOMATION_ACTION_SERVICE_BY_ID: "PAGERDUTY_DELETE_AUTOMATION_ACTION_SERVICE_BY_ID",
    /**
     * Delete a custom field for an incident type. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.write`
     */
    DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: "PAGERDUTY_DELETE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE",
    /**
     * Delete a field option for a custom field. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.write`
     */
    DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: "PAGERDUTY_DELETE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD",
    /**
     * Deletes a specific business service from the pagerduty system. this endpoint should be used when you want to permanently remove a business service that is no longer needed or relevant to your organization's incident management structure. it's important to note that this action is irreversible and will remove all associations between the deleted business service and any technical services or incidents. use this endpoint with caution, as it may impact reporting and historical data related to the deleted business service. before deletion, ensure that no active incidents or dependencies rely on this business service to avoid disruptions in your incident management workflow.
     */
    DELETE_BUSINESS_SERVICE_BY_ID: "PAGERDUTY_DELETE_BUSINESS_SERVICE_BY_ID",
    /**
     * Deletes all priority thresholds for business services in the pagerduty account. this endpoint is used to remove the configured priority settings that determine how incidents are escalated based on their urgency for business services. it should be used when you want to reset or remove all priority threshold configurations across your business services. this operation is irreversible and will affect how future incidents are prioritized and escalated for all business services in the account. it's important to note that this action does not delete the business services themselves, only their associated priority thresholds.
     */
    DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS: "PAGERDUTY_DELETE_BUSINESS_SERVICE_PRIORITY_THRESHOLDS",
    /**
     * Deletes a specific cache variable associated with an event orchestration in pagerduty. this endpoint is used to remove temporary data storage that was previously set up for use in event orchestration workflows. it should be used when you need to clean up or remove outdated cache variables that are no longer needed in your event management process. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint requires both the event orchestration id and the specific cache variable id to ensure precise removal of the intended data.
     */
    DELETE_CACHE_VARIABLE_FOR_EVENT: "PAGERDUTY_DELETE_CACHE_VARIABLE_FOR_EVENT",
    /**
     * This endpoint deletes a specific cache variable associated with a service in pagerduty's event orchestration system. it is used to remove temporary data that is no longer needed, helping to maintain system efficiency. the endpoint should be used when you want to permanently remove a cache variable from a particular service, such as when the variable is obsolete or to free up resources. it's important to note that this action is irreversible, and once deleted, the cache variable cannot be recovered. use this endpoint with caution to avoid accidentally removing critical data used in event orchestrations.
     */
    DELETE_CACHE_VARIABLE_FROM_SERVICE: "PAGERDUTY_DELETE_CACHE_VARIABLE_FROM_SERVICE",
    /**
     * Deletes a specific custom field from incidents in pagerduty. this endpoint allows users to remove a custom field that is no longer needed or relevant for incident management. it should be used when you want to permanently delete a custom field from all incidents, both existing and future. the operation is irreversible, so caution should be exercised when using this endpoint. it's important to note that this action will remove the specified custom field and its associated data from all incidents, which could impact reporting and analysis based on that field.
     */
    DELETE_CUSTOM_FIELD_BY_FIELD_ID: "PAGERDUTY_DELETE_CUSTOM_FIELD_BY_FIELD_ID",
    /**
     * Permanently removes a specific escalation policy from the pagerduty system. this endpoint should be used when an escalation policy is no longer needed or has become obsolete. once deleted, the escalation policy cannot be recovered, and any services or incidents associated with it will need to be reassigned. exercise caution when using this endpoint, as it will impact incident routing and may affect your team's ability to respond to alerts if not properly managed. it's recommended to review and update any dependent services before deleting an escalation policy.
     */
    DELETE_ESCALATION_POLICY_BY_ID: "PAGERDUTY_DELETE_ESCALATION_POLICY_BY_ID",
    /**
     * Deletes a specific event orchestration from the pagerduty system. this endpoint should be used when you want to permanently remove an event orchestration configuration, including all its associated rules and routing logic. it's important to note that this action is irreversible, and once an event orchestration is deleted, it cannot be recovered. before using this endpoint, ensure that the event orchestration is no longer needed and that its deletion won't disrupt any critical event routing or automation processes in your pagerduty setup. this endpoint is particularly useful during cleanup operations or when restructuring your event management workflow.
     */
    DELETE_EVENT_BY_ID: "PAGERDUTY_DELETE_EVENT_BY_ID",
    /**
     * Deletes a specific extension from the pagerduty service. this endpoint should be used when you want to remove an additional feature or integration that has been previously added to your pagerduty account. it's particularly useful for cleaning up obsolete integrations or disabling unwanted functionalities. note that deleting an extension is permanent and cannot be undone, so use this endpoint with caution. this operation doesn't affect the core pagerduty service, only the specified extension.
     */
    DELETE_EXTENSION_BY_ID: "PAGERDUTY_DELETE_EXTENSION_BY_ID",
    /**
     * This endpoint deletes a specific field option from a custom field in pagerduty's incident management system. it allows you to remove predefined options that are no longer needed or relevant for incident categorization or data collection. use this endpoint when you want to update the available options for a custom field by removing outdated or unnecessary choices. be cautious when using this endpoint, as deleting a field option may impact existing incidents that use this option and could affect reporting or automation based on these custom fields. this operation cannot be undone, so it's advisable to have a backup of your custom field configuration before making changes.
     */
    DELETE_FIELD_OPTION: "PAGERDUTY_DELETE_FIELD_OPTION",
    /**
     * Deletes a specific incident workflow from the pagerduty system. this endpoint should be used when you want to permanently remove a customized sequence of automated actions and triggers associated with incident management. it's important to note that this action is irreversible, and once deleted, the workflow cannot be recovered. use this endpoint with caution, ensuring that the workflow is no longer needed before deletion. this operation helps in maintaining a clean and relevant set of incident workflows, improving overall incident management efficiency.
     */
    DELETE_INCIDENT_WORKFLOW_BY_ID: "PAGERDUTY_DELETE_INCIDENT_WORKFLOW_BY_ID",
    /**
     * Deletes a specific trigger associated with an incident workflow in pagerduty. this endpoint is used to remove an automated trigger that initiates a predefined workflow in response to incidents. it should be used when you need to modify your incident response automation by removing outdated or unnecessary triggers. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint does not return any data upon successful deletion, typically responding with a 204 no content status.
     */
    DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID: "PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_BY_ID",
    /**
     * This endpoint removes a specific service from a trigger within an incident workflow in pagerduty. it is used to modify the configuration of an existing incident workflow by disassociating a service from a particular trigger. this action is useful when you need to update the automation rules or remove a service from the automated response process for certain incidents. the endpoint requires both the trigger id and the service id to be specified in the url path. upon successful execution, the specified service will no longer be associated with the trigger, affecting future incident workflow executions. this operation cannot be undone, so it should be used with caution to avoid disrupting critical incident management processes.
     */
    DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE: "PAGERDUTY_DELETE_INCIDENT_WORKFLOW_TRIGGER_SERVICE",
    /**
     * Removes a specific integration from an event orchestration in pagerduty. this endpoint is used to disconnect a particular tool or service from the event orchestration setup, effectively stopping it from triggering or modifying incidents within that orchestration. it's particularly useful when you need to retire an old integration or reconfigure your event management workflow. be cautious when using this endpoint, as deleting an integration is irreversible and may impact your incident response processes if not properly planned.
     */
    DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION: "PAGERDUTY_DELETE_INTEGRATION_FROM_EVENT_ORCHESTRATION",
    /**
     * Deletes a specific maintenance window in pagerduty's incident management system. this endpoint is used to permanently remove a scheduled maintenance window, effectively re-enabling any services and integrations that were temporarily disabled during the maintenance period. it should be used when a maintenance window is no longer needed or was created in error. once deleted, the maintenance window cannot be recovered, so caution should be exercised when using this endpoint. this operation is particularly useful for cleaning up obsolete maintenance windows or adjusting scheduled maintenance plans.
     */
    DELETE_MAINTENANCE_WINDOW_BY_ID: "PAGERDUTY_DELETE_MAINTENANCE_WINDOW_BY_ID",
    /**
     * This endpoint deletes a specific on-call handoff notification rule for a given user in pagerduty. it is used to remove custom notification settings for when on-call responsibilities are transferred between team members. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint is particularly useful for maintaining clean and up-to-date notification configurations, especially when certain handoff rules are no longer needed or have become obsolete. it requires both the user's id and the specific rule id to ensure precise targeting of the rule to be deleted.
     */
    DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE: "PAGERDUTY_DELETE_ONCALL_HANDOFF_NOTIFICATION_RULE",
    /**
     * This endpoint deletes a specific post from a pagerduty status page. it is used to remove outdated or irrelevant information from a status page, helping to maintain clear and accurate communication with users about service status. the operation is irreversible, so it should be used with caution. this endpoint is particularly useful for cleaning up resolved incidents or removing erroneous updates. it does not provide any ability to modify or retrieve post content; it only removes the specified post entirely from the status page.
     */
    DELETE_POST_FROM_STATUS_PAGE: "PAGERDUTY_DELETE_POST_FROM_STATUS_PAGE",
    /**
     * This endpoint deletes a specific post update from a status page post in pagerduty. it allows users to remove outdated or incorrect information from a status page, ensuring that only relevant and accurate updates are displayed. the endpoint should be used when an organization needs to retract or remove a previously published update on their status page. it's important to note that this action is permanent and cannot be undone, so it should be used with caution. this endpoint is particularly useful for maintaining the accuracy and relevance of status page communications during incident management or scheduled maintenance periods.
     */
    DELETE_POST_UPDATE_BY_ID: "PAGERDUTY_DELETE_POST_UPDATE_BY_ID",
    /**
     * Deletes a specific response play from the pagerduty system. this endpoint should be used when you need to remove an outdated or unnecessary response play from your incident management workflow. it permanently eliminates the predefined sequence of actions associated with the specified response play id. use this endpoint with caution, as the deletion is irreversible and may impact automated incident response processes. this operation is particularly useful for maintaining an up-to-date and efficient set of response strategies in your pagerduty account.
     */
    DELETE_RESPONSE_PLAY: "PAGERDUTY_DELETE_RESPONSE_PLAY",
    /**
     * Deletes a specific ruleset from the pagerduty system based on the provided id. this endpoint should be used when you need to remove an existing ruleset, which may be necessary during incident management reconfiguration or when cleaning up obsolete rulesets. the deletion is permanent and cannot be undone, so use this endpoint with caution. it's important to note that deleting a ruleset will affect the incident routing and escalation policies associated with it, potentially impacting your organization's incident response workflow.
     */
    DELETE_RULESET_BY_ID: "PAGERDUTY_DELETE_RULESET_BY_ID",
    /**
     * Deletes a specific rule from a ruleset in pagerduty's incident management platform. this endpoint allows users to remove individual event rules, providing flexibility in managing and updating rulesets. it should be used when you need to eliminate an outdated, unnecessary, or incorrect rule from a ruleset. the operation is permanent and cannot be undone, so caution should be exercised when using this endpoint. it's important to note that deleting a rule may affect the event routing and actions defined in the ruleset, potentially impacting incident management workflows.
     */
    DELETE_RULE_FROM_RULESET_BY_ID: "PAGERDUTY_DELETE_RULE_FROM_RULESET_BY_ID",
    /**
     * This endpoint removes a team's association from a specific automation action runner in pagerduty. it is used to revoke a team's access to execute or manage tasks on a particular runner. the operation is permanent and should be used when you no longer want a team to have access to the runner's capabilities. this action is typically performed for security reasons, organizational changes, or when refining access control within your pagerduty environment. note that this endpoint only removes the association; it does not delete the runner or the team themselves.
     */
    DELETE_RUNNER_TEAM_ASSOCIATION: "PAGERDUTY_DELETE_RUNNER_TEAM_ASSOCIATION",
    /**
     * The deleteschedule endpoint removes a specific schedule from the pagerduty system. it is used to delete outdated or unnecessary on-call schedules, helping to maintain an organized and efficient incident management workflow. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint is particularly useful when restructuring team rotations or when a project or team associated with the schedule is no longer active. it's important to note that deleting a schedule does not affect any historical data or past incidents associated with it, but it will prevent the schedule from being used in future incident assignments.
     */
    DELETE_SCHEDULE_BY_ID: "PAGERDUTY_DELETE_SCHEDULE_BY_ID",
    /**
     * This endpoint deletes a specific override from a pagerduty schedule. it allows users to remove temporary changes made to the regular schedule, reverting it back to its original state. this operation is useful for canceling previously set overrides that are no longer needed, such as temporary shift changes or one-time schedule adjustments. the deletion is permanent and cannot be undone, so it should be used with caution. this endpoint is particularly helpful for maintaining schedule integrity and ensuring that only current and relevant overrides remain active.
     */
    DELETE_SCHEDULE_OVERRIDE_BY_ID: "PAGERDUTY_DELETE_SCHEDULE_OVERRIDE_BY_ID",
    /**
     * Deletes a specific service from the pagerduty account. this endpoint should be used when you need to permanently remove a service that is no longer required or active. it's important to note that this operation is irreversible and will delete all associated incidents, alerts, and integrations for the specified service. use this endpoint with caution, as it can impact your incident management workflow. before deletion, ensure that the service is no longer needed and that all relevant data has been backed up if necessary.
     */
    DELETE_SERVICE_BY_ID: "PAGERDUTY_DELETE_SERVICE_BY_ID",
    /**
     * Deletes a specific rule from a pagerduty service. this endpoint is used to permanently remove a rule that defines conditions for incident creation or automation within a particular service. it should be used when you need to eliminate an outdated, incorrect, or no longer needed rule from your service configuration. the operation cannot be undone, so use it with caution. this endpoint does not return the deleted rule's details; it only confirms the successful deletion.
     */
    DELETE_SERVICE_RULE_BY_ID: "PAGERDUTY_DELETE_SERVICE_RULE_BY_ID",
    /**
     * This endpoint allows you to delete a postmortem associated with a specific post on a pagerduty status page. it is used to remove the detailed analysis and lessons learned from an incident after it has been resolved and documented. this action is permanent and should be used with caution, as it will remove valuable information about past incidents. the endpoint is particularly useful for maintaining the relevance of status page content, removing outdated postmortems, or correcting information that should not have been published. it's important to note that this operation cannot be undone, so it's recommended to have a backup of the postmortem content before deletion if retention of this information is necessary for internal records.
     */
    DELETE_STATUS_PAGE_POSTMORTEM: "PAGERDUTY_DELETE_STATUS_PAGE_POSTMORTEM",
    /**
     * Deletes a specific status update notification rule associated with a user in the pagerduty system. this endpoint allows administrators or users with appropriate permissions to remove custom notification rules for status updates, helping to manage and streamline the user's notification preferences. it should be used when a particular status update notification rule is no longer needed or requires removal from the user's settings. the operation is irreversible, so caution should be exercised when invoking this endpoint. it's important to note that this endpoint only removes the specified rule and does not affect other notification rules or user settings.
     */
    DELETE_STATUS_UPDATE_NOTIFICATION_RULE: "PAGERDUTY_DELETE_STATUS_UPDATE_NOTIFICATION_RULE",
    /**
     * Deletes a specific subscription associated with a pagerduty status page. this endpoint is used to remove a subscription, effectively stopping notifications or updates related to the status page for the subscribed entity. it should be used when a user or system no longer needs to receive alerts or information about a particular status page. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint requires both the status page id and the specific subscription id to ensure precise removal of the intended subscription.
     */
    DELETE_SUBSCRIPTION_FROM_STATUS_PAGE: "PAGERDUTY_DELETE_SUBSCRIPTION_FROM_STATUS_PAGE",
    /**
     * Deletes a specific tag from the pagerduty system based on its unique identifier. this endpoint should be used when you need to remove a tag that is no longer relevant or necessary for categorizing incidents, services, or other resources in pagerduty. it's important to note that deleting a tag will remove it from all associated resources, which could impact filtering and organization within the pagerduty platform. this operation is irreversible, so it should be used with caution. the endpoint does not return the deleted tag's information, so if you need to reference the tag details, you should retrieve them before deletion.
     */
    DELETE_TAG_BY_ID: "PAGERDUTY_DELETE_TAG_BY_ID",
    /**
     * Deletes a specific team from the pagerduty system based on the provided team id. this endpoint should be used when you need to remove a team that is no longer required in your incident management structure. it's important to note that deleting a team is a permanent action and cannot be undone. before deletion, ensure that all associated users, schedules, and escalation policies have been properly reassigned or removed to prevent disruption to your incident management workflows. this operation does not delete the users within the team; it only removes the team structure itself.
     */
    DELETE_TEAM_BY_ID: "PAGERDUTY_DELETE_TEAM_BY_ID",
    /**
     * This endpoint removes an escalation policy association from a specific team in pagerduty. it is used to update team configurations by disassociating an escalation policy that is no longer needed or relevant for the team's incident management process. the operation is irreversible and should be used with caution, as it may affect the team's incident response workflow. this endpoint is particularly useful when reorganizing team responsibilities or during cleanup of outdated escalation policies. it does not delete the escalation policy itself, but only removes its association with the specified team.
     */
    DELETE_TEAM_ESCALATION_POLICY: "PAGERDUTY_DELETE_TEAM_ESCALATION_POLICY",
    /**
     * This endpoint removes a specific team's access to an automation action in pagerduty. it's used to revoke permissions when a team no longer needs to use or should not have access to a particular automation action. this operation is permanent and cannot be undone through this endpoint. it should be used carefully, as it will immediately prevent the specified team from executing the automation action. this endpoint is particularly useful for managing access control and ensuring that only authorized teams can perform certain automated tasks.
     */
    DELETE_TEAM_FROM_AUTOMATION_ACTION: "PAGERDUTY_DELETE_TEAM_FROM_AUTOMATION_ACTION",
    /**
     * Deletes a specific template from the pagerduty account. this endpoint is used to permanently remove a template configuration, which can be useful for cleaning up outdated or unnecessary incident response plans. once deleted, the template cannot be recovered, so use this operation with caution. it should be used when you no longer need a particular template for incident management or when you want to replace an old template with a new one. this operation does not affect any ongoing incidents that may have been created using the template.
     */
    DELETE_TEMPLATE_BY_ID: "PAGERDUTY_DELETE_TEMPLATE_BY_ID",
    /**
     * Deletes a specific user from the pagerduty system using their unique identifier. this endpoint should be used when you need to permanently remove a user's account, such as when an employee leaves the organization or no longer requires access to the incident management system. it's important to note that deleting a user is irreversible and will remove all associated data, including their contact information, notification rules, and incident history. before deletion, ensure that any ongoing incidents or schedules involving this user are reassigned to prevent disruptions in incident management workflows. this operation cannot be undone, so it should be used with caution and only when absolutely necessary.
     */
    DELETE_USER_BY_ID: "PAGERDUTY_DELETE_USER_BY_ID",
    /**
     * Deletes a specific contact method associated with a user in pagerduty. this endpoint should be used when you need to remove an outdated or unnecessary contact method from a user's profile. it permanently removes the specified contact method, so use with caution. this operation cannot be undone. ensure that the user has at least one remaining contact method after deletion to maintain their ability to receive notifications. this endpoint is particularly useful for maintaining up-to-date user profiles and streamlining communication channels.
     */
    DELETE_USER_CONTACT_METHOD: "PAGERDUTY_DELETE_USER_CONTACT_METHOD",
    /**
     * This endpoint removes a specific user from a designated team within the pagerduty incident management platform. it is used to update team compositions by disassociating a user from a particular team, which affects the user's involvement in that team's incident responses and escalation policies. this operation is particularly useful when restructuring teams, offboarding employees, or adjusting user roles and responsibilities. the endpoint requires both the team's unique identifier and the user's unique identifier to ensure precise user-team disassociation. it's important to note that this action does not delete the user from the pagerduty account; it only removes their association with the specified team. use this endpoint cautiously, as it immediately affects the user's ability to receive and respond to incidents related to the team.
     */
    DELETE_USER_FROM_TEAM_BY_ID: "PAGERDUTY_DELETE_USER_FROM_TEAM_BY_ID",
    /**
     * Deletes a specific notification rule for a user in pagerduty. this endpoint allows administrators or users with appropriate permissions to remove custom notification rules, modifying how and when a user receives alerts about incidents. it should be used when updating a user's notification preferences or when a specific notification rule is no longer needed. the deletion is permanent and cannot be undone, so caution should be exercised when using this endpoint. it's important to note that this action does not affect the user's default notification rules or their overall ability to receive notifications; it only removes the specified custom rule.
     */
    DELETE_USER_NOTIFICATION_RULE: "PAGERDUTY_DELETE_USER_NOTIFICATION_RULE",
    /**
     * Deletes all active sessions for a specified user in the pagerduty system. this endpoint is used to forcibly log out a user from all devices and applications where they might be currently authenticated. it's particularly useful for security purposes, such as when a user's credentials may have been compromised, or when offboarding an employee. the operation is irreversible and will require the user to re-authenticate on all devices. use with caution as it may disrupt the user's ongoing work if not coordinated properly.
     */
    DELETE_USER_SESSION_BY_ID: "PAGERDUTY_DELETE_USER_SESSION_BY_ID",
    /**
     * This endpoint deletes a specific user session in pagerduty. it is used to forcibly terminate an active session for a given user, effectively logging them out from a particular device or application. this operation is crucial for maintaining security, especially when you need to revoke access immediately, such as when a device is lost or stolen, or when suspicious activity is detected. the endpoint requires the user id, session type, and specific session id to accurately target and remove the desired session. it should be used cautiously as it will immediately terminate the user's access without warning.
     */
    DELETE_USER_SESSION_BY_TYPE: "PAGERDUTY_DELETE_USER_SESSION_BY_TYPE",
    /**
     * Deletes a specific webhook subscription from your pagerduty account. this endpoint should be used when you want to stop receiving notifications for a particular webhook subscription, such as when the integration is no longer needed or when updating your notification preferences. once deleted, the webhook subscription will immediately cease to function, and you will no longer receive notifications for the events it was configured to monitor. this action is irreversible, so use it with caution. if you need to temporarily disable notifications, consider using other management options instead of deletion.
     */
    DELETE_WEBHOOK_SUBSCRIPTION_BY_ID: "PAGERDUTY_DELETE_WEBHOOK_SUBSCRIPTION_BY_ID",
    /**
     * Delete a workflow integration connection. scoped oauth requires: `workflow integrations:connections.write`
     */
    DELETE_WORKFLOW_INTEGRATION_CONNECTION: "PAGERDUTY_DELETE_WORKFLOW_INTEGRATION_CONNECTION",
    /**
     * This endpoint disassociates service dependencies in pagerduty by deleting specified relationships between supporting and dependent services. it allows for the removal of multiple service dependencies in a single api call, enabling efficient management of service hierarchies and relationships within the pagerduty platform. the endpoint should be used when restructuring service dependencies, removing obsolete relationships, or updating the service topology. it's important to note that this operation is irreversible and will immediately affect the dependency structure of the services involved.
     */
    DISASSOCIATE_SERVICE_DEPENDENCIES: "PAGERDUTY_DISASSOCIATE_SERVICE_DEPENDENCIES",
    /**
     * The updatewebhooksubscription endpoint allows you to modify an existing webhook subscription in pagerduty. this put method enables users to update the events they want to be notified about, change the filter criteria for triggering notifications, update the subscription's description, and toggle its active state. it's particularly useful for adjusting notification preferences as your incident management needs evolve. the endpoint requires specifying the webhook subscription id in the url path and accepts a json body with the updated subscription details. note that while you can update multiple aspects of the subscription, you must provide at least the 'events' array in your request. be cautious when updating filters, as this can significantly change which incidents trigger notifications.
     */
    EDIT_WEBHOOK_SUBSCRIPTION_BY_ID: "PAGERDUTY_EDIT_WEBHOOK_SUBSCRIPTION_BY_ID",
    /**
     * Enables a specific extension in the pagerduty system. this endpoint is used to activate an extension that has been previously configured but is currently inactive. it allows users to turn on additional functionalities or integrations within their pagerduty account. the extension is identified by its unique id, which must be provided in the request path. this action is typically used when setting up new integrations, reactivating temporarily disabled features, or as part of automated workflows for managing pagerduty configurations. note that enabling an extension may have immediate effects on the account's behavior, such as allowing new types of alerts or activating connections with external services.
     */
    ENABLE_EXTENSION_BY_ID: "PAGERDUTY_ENABLE_EXTENSION_BY_ID",
    /**
     * Activates a specific webhook subscription in pagerduty, enabling the system to send notifications for the events configured in that subscription. this endpoint should be used when you want to start receiving webhook notifications after creating or previously disabling a subscription. it's particularly useful for managing notification flows dynamically, such as during maintenance periods or when integrating new systems. note that this operation only affects the specified subscription and does not modify its configuration or event filters.
     */
    ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID: "PAGERDUTY_ENABLE_WEBHOOK_SUBSCRIPTION_BY_ID",
    /**
     * Executes a predefined response play for a specific incident in pagerduty. this endpoint allows you to trigger a sequence of automated actions designed to manage and respond to the given incident. it's useful for standardizing and streamlining your incident response process, ensuring consistent handling of similar incidents. the endpoint requires you to specify the incident for which the response play should be run, using the incident's unique identifier. note that the response play itself is identified by the id in the url path, not in the request body.
     */
    EXECUTE_RESPONSE_PLAY_BY_ID: "PAGERDUTY_EXECUTE_RESPONSE_PLAY_BY_ID",
    /**
     * Retrieves detailed information about a specific cache variable within an event orchestration in pagerduty. this endpoint allows users to fetch the current state and configuration of a cache variable, which is used to store temporary data for optimizing event orchestration performance. it's particularly useful when you need to inspect or debug the cached data being used in your event orchestration workflows. the endpoint should be used when you need to verify the contents of a specific cache variable or when troubleshooting issues related to event orchestration data caching. note that this endpoint only provides read access to the cache variable and cannot be used to modify its contents.
     */
    FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION: "PAGERDUTY_FETCH_CACHE_VARIABLE_FOR_EVENT_ORCHESTRATION",
    /**
     * Retrieves detailed information about a specific custom field associated with incidents in pagerduty. this endpoint allows users to fetch the configuration and attributes of a custom field by providing its unique identifier. it's useful for verifying custom field settings, understanding the structure of additional data points on incidents, or preparing to update a custom field. the endpoint should be used when detailed information about a particular custom field is needed, such as its name, data type, or any predefined options. note that this endpoint only provides information about the custom field itself, not the values assigned to incidents.
     */
    FETCH_CUSTOM_INCIDENT_FIELD_BY_ID: "PAGERDUTY_FETCH_CUSTOM_INCIDENT_FIELD_BY_ID",
    /**
     * Retrieves a list of escalation policies configured in the pagerduty account. this endpoint allows users to access detailed information about how incidents are escalated within their organization, including the sequence of notifications and assignments for different teams or individuals. it's particularly useful for reviewing and auditing the incident response process, ensuring that critical alerts are properly routed and escalated. the endpoint provides a comprehensive view of all escalation policies, which is essential for maintaining an effective incident management strategy. however, it does not modify any existing policies or create new ones; it's purely for retrieval and review purposes.
     */
    FETCH_ESCALATION_POLICES_LIST: "PAGERDUTY_FETCH_ESCALATION_POLICES_LIST",
    /**
     * Retrieves a list of event orchestrations configured in the pagerduty account. event orchestrations are used to manage and automate the routing and handling of events and incidents. this endpoint allows you to fetch details about existing orchestrations, which can be useful for auditing, reporting, or managing your incident response workflows. the response typically includes information such as orchestration names, associated routing keys, and configured rules. use this endpoint when you need to review or list the current event orchestrations in your pagerduty setup. note that this endpoint does not provide real-time event data or incident details, only the configuration of the orchestrations themselves.
     */
    FETCH_EVENT_ORCHESTRATIONS: "PAGERDUTY_FETCH_EVENT_ORCHESTRATIONS",
    /**
     * Retrieves raw analytics data for a specific incident in pagerduty. this endpoint provides unprocessed incident information, allowing for detailed analysis and custom reporting. it should be used when in-depth, granular data about a particular incident is needed, such as for investigating complex issues or generating custom analytics. the endpoint returns comprehensive incident details, which may include timestamps, status changes, assignee information, and other relevant metrics. however, it does not provide pre-analyzed or aggregated data; users will need to process the raw data themselves for specific insights.
     */
    FETCH_INCIDENT_ANALYTICS_BY_ID: "PAGERDUTY_FETCH_INCIDENT_ANALYTICS_BY_ID",
    /**
     * Retrieves a list of incidents from pagerduty based on specified criteria. this endpoint allows users to fetch multiple incidents, making it useful for incident management, reporting, and analysis. it supports filtering by status and date range, as well as pagination for handling large result sets. the endpoint is particularly valuable for obtaining an overview of recent or ongoing incidents, tracking incident trends, or integrating pagerduty incident data into external systems or dashboards. note that while this endpoint provides a summary of incidents, it may not include full details for each incident; separate api calls might be necessary to fetch comprehensive information for individual incidents.
     */
    FETCH_INCIDENT_LIST: "PAGERDUTY_FETCH_INCIDENT_LIST",
    /**
     * Retrieves detailed information about an outlier incident associated with a specific incident in pagerduty. this endpoint is used to gather insights on incidents that deviate significantly from normal patterns, helping teams identify and analyze unusual or potentially critical issues. it should be used when investigating anomalies in incident patterns or when conducting post-incident reviews. the endpoint provides specific data about the outlier incident, which can be crucial for understanding unique characteristics or severity of the issue compared to typical incidents.
     */
    FETCH_OUTLIER_INCIDENT_BY_ID: "PAGERDUTY_FETCH_OUTLIER_INCIDENT_BY_ID",
    /**
     * Retrieves detailed information about a specific post update on a pagerduty status page. this endpoint allows you to fetch the content and metadata of a particular update made to a post, providing insight into the chronological changes and communications related to an incident or maintenance event. use this when you need to review or display the exact content of a specific update, such as for auditing purposes or to provide detailed information to stakeholders. the endpoint requires the unique identifiers for the status page, the post, and the specific update, ensuring precise retrieval of the desired information. it's particularly useful for tracking the evolution of an incident's communication or for analyzing the effectiveness of status updates over time.
     */
    FETCH_POST_UPDATE_STATUS: "PAGERDUTY_FETCH_POST_UPDATE_STATUS",
    /**
     * Retrieves a list of existing priorities in the pagerduty system, ordered from most severe to least severe. this endpoint should be used when you need to obtain information about the current priority levels configured in your pagerduty account. it's particularly useful for integrations that need to reference or display priority information, or for administrators who want to review the existing priority structure. the endpoint provides a read-only view of priorities and does not allow for creation, modification, or deletion of priority levels. keep in mind that this api call is subject to rate limiting, so it should not be called excessively in short periods.
     */
    FETCH_PRIORITIES_LIST: "PAGERDUTY_FETCH_PRIORITIES_LIST",
    /**
     * Retrieves a list of change events related to a specific incident in pagerduty. this endpoint is used to gather contextual information about changes or updates associated with an incident, which can be crucial for understanding its progression and resolution. it provides insights into actions taken, system modifications, or other relevant events that occurred in connection with the incident. use this endpoint when investigating incident timelines, auditing response actions, or compiling comprehensive incident reports. note that this endpoint only returns change events directly linked to the specified incident and does not provide general incident details or unrelated events.
     */
    FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT: "PAGERDUTY_FETCH_RELATED_CHANGE_EVENTS_FOR_INCIDENT",
    /**
     * Retrieves a list of incidents that are potentially related to a specified incident in pagerduty. this endpoint utilizes machine learning algorithms to identify and return incidents that may be connected or similar to the given incident. it's particularly useful for incident management teams to gain a broader context of ongoing issues, identify patterns, and potentially streamline resolution processes. the endpoint should be used when investigating an incident to discover any correlated problems or when trying to understand the wider impact of a particular issue across the system. it does not modify any incident data and is intended for informational purposes only.
     */
    FETCH_RELATED_INCIDENTS_BY_ID: "PAGERDUTY_FETCH_RELATED_INCIDENTS_BY_ID",
    /**
     * Retrieves a list of teams associated with a specific automation action runner in pagerduty. this endpoint allows users to identify which teams have access to or are responsible for a particular runner, facilitating better management and organization of automation resources. it's particularly useful for administrators who need to audit runner permissions or when planning to modify team access to automation capabilities. the endpoint returns team information related to the specified runner only and does not provide details about the runner itself or its automation actions.
     */
    FETCH_RUNNER_TEAMS_INTEGRATION: "PAGERDUTY_FETCH_RUNNER_TEAMS_INTEGRATION",
    /**
     * Retrieves a list of all status pages configured in the pagerduty account. status pages provide real-time information about the operational status of services, ongoing incidents, and planned maintenance. this endpoint should be used when you need to obtain an overview of all available status pages, which can be useful for monitoring, reporting, or integrating status information into other systems. the response will include details such as the status page id, name, and current state. note that this endpoint does not provide the actual content of each status page, but rather metadata about the pages themselves.
     */
    FETCH_STATUS_PAGES: "PAGERDUTY_FETCH_STATUS_PAGES",
    /**
     * Retrieves detailed information about a specific contact method for a particular user in pagerduty. this endpoint allows you to fetch the configuration and settings of a single contact method, such as an email address, phone number, or push notification settings, associated with a user's account. it's useful for verifying or auditing user contact information, or when you need to display or update a specific contact method. the endpoint requires both the user id and the contact method id to pinpoint the exact resource. it does not modify any data and is safe for frequent calls, but should be used judiciously in high-volume scenarios to avoid hitting rate limits.
     */
    FETCH_USER_CONTACT_METHOD: "PAGERDUTY_FETCH_USER_CONTACT_METHOD",
    /**
     * Retrieves a list of vendors or third-party integrations available in the pagerduty platform. this endpoint allows users to access information about various services and tools that can be integrated with pagerduty for enhanced incident management and alerting capabilities. use this endpoint when you need to explore or review the available integrations, such as monitoring tools, ticketing systems, or communication platforms. the response likely includes details such as vendor names, integration types, and possibly configuration options. note that this endpoint does not provide real-time status of integrations or perform any actions on the integrations themselves.
     */
    FETCH_VENDOR_LIST: "PAGERDUTY_FETCH_VENDOR_LIST",
    /**
     * Analyzes and aggregates incident metrics across teams in pagerduty, allowing for detailed filtering and customization of results. this endpoint is used to gain insights into incident patterns, team performance, and overall operational efficiency. it provides flexible options for data selection, time range specification, and result presentation, making it valuable for generating reports, identifying trends, and optimizing incident management processes. the endpoint is particularly useful for operational reviews, team performance assessments, and strategic planning in incident response.
     */
    FILTER_AND_AGGREGATE_INCIDENT_METRICS: "PAGERDUTY_FILTER_AND_AGGREGATE_INCIDENT_METRICS",
    /**
     * Retrieves a list of all addons associated with the pagerduty account. this endpoint allows users to view the additional features or integrations that have been added to enhance the platform's capabilities. it provides an overview of the current addons, which can include third-party services or custom extensions that extend the functionality of the core pagerduty system. this endpoint is useful for auditing the account's current addons, planning for potential new integrations, or managing existing ones. note that this endpoint only returns basic information about the addons and may not include detailed configuration settings for each addon.
     */
    GET_ADDONS_LIST: "PAGERDUTY_GET_ADDONS_LIST",
    /**
     * Provides aggregated metrics for the usage of pd advance. <!-- theme: info --> > **note:** analytics data is updated [periodically](https://support.pagerduty.com/main/docs/insights#:~:text=data%20update%20schedule). it takes up to 24 hours before new incidents appear in the analytics api. scoped oauth requires: `analytics.read`
     */
    GET_AGGREGATED_PD_ADVANCE_USAGE_DATA: "PAGERDUTY_GET_AGGREGATED_PD_ADVANCE_USAGE_DATA",
    /**
     * Retrieves all alerts associated with a specific incident in pagerduty. this endpoint allows users to fetch detailed information about the notifications and alerts that were triggered as part of an incident's lifecycle. it is particularly useful for incident postmortems, auditing purposes, or understanding the notification flow during an incident. the endpoint returns a list of alerts, which may include information such as alert creation time, alert status, and the targets (users or services) that received the notifications. it should be used when detailed alert information for a known incident is required, but it will not provide information about the incident itself beyond its associated alerts.
     */
    GET_ALERTS_BY_INCIDENT_ID: "PAGERDUTY_GET_ALERTS_BY_INCIDENT_ID",
    /**
     * Retrieves the current alert grouping settings for the pagerduty account. this endpoint provides information on how alerts are automatically grouped together in the incident management system. it should be used when you need to understand or audit the current configuration for alert grouping, which can impact how incidents are organized and presented to responders. the endpoint returns the global settings that apply across the account, but it does not provide information about service-specific alert grouping rules or real-time grouping status of active incidents. this information is crucial for administrators managing large-scale incident response processes or when troubleshooting alert noise issues.
     */
    GET_ALERT_GROUPING_SETTINGS: "PAGERDUTY_GET_ALERT_GROUPING_SETTINGS",
    /**
     * Get detailed information about a single incident type. accepts either an incident type id, or an incident type name. incident types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#incident) scoped oauth requires: `incident types.read`
     */
    GET_AN_INCIDENT_TYPE: "PAGERDUTY_GET_AN_INCIDENT_TYPE",
    /**
     * Get a custom field for an incident type. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.read`
     */
    GET_AN_INCIDENT_TYPE_CUSTOM_FIELD: "PAGERDUTY_GET_AN_INCIDENT_TYPE_CUSTOM_FIELD",
    /**
     * Retrieves a list of audit records from the pagerduty system. this endpoint allows users to access logs of configuration changes made to pagerduty resources, such as account objects. the records are sorted by execution time, with the newest records appearing first. this tool is particularly useful for tracking and reviewing changes, conducting security audits, or generating reports on system modifications. it provides a comprehensive view of who made what changes and when, enhancing transparency and accountability within the organization. the endpoint supports pagination and date range filtering to manage large volumes of audit data effectively.
     */
    GET_AUDIT_RECORDS: "PAGERDUTY_GET_AUDIT_RECORDS",
    /**
     * Retrieves a list of automation action runners associated with the pagerduty account. this endpoint allows users to view all available runners that can execute automation actions within their incident management workflow. it provides essential information about each runner, such as its id, name, and current status. use this endpoint when you need to manage, monitor, or select runners for executing automation actions. the response typically includes details that help in understanding the capacity and availability of runners for performing automated tasks. this endpoint is particularly useful for administrators and devops teams who need to oversee and optimize their automation infrastructure within pagerduty.
     */
    GET_AUTOMATION_ACTIONS_RUNNERS: "PAGERDUTY_GET_AUTOMATION_ACTIONS_RUNNERS",
    /**
     * Retrieves detailed information about a specific automation action in pagerduty's incident management platform. this endpoint allows users to fetch the configuration and attributes of a predefined automation action by its unique identifier. it's particularly useful when you need to review or audit the settings of an existing automation action, such as its triggers, conditions, or associated workflows. the endpoint should be used when detailed information about a single automation action is required, rather than for listing multiple actions. note that this endpoint only provides read access to the automation action details and cannot be used to modify the action.
     */
    GET_AUTOMATION_ACTION_BY_ID: "PAGERDUTY_GET_AUTOMATION_ACTION_BY_ID",
    /**
     * Retrieves detailed information about a specific automation action runner in pagerduty. this endpoint allows users to fetch the configuration, status, and other relevant details of a runner by providing its unique identifier. it's particularly useful for monitoring the health and settings of individual runners, which are crucial components in pagerduty's automated incident response system. this tool should be used when you need to inspect or verify the properties of a specific runner, such as its connection status, associated scripts, or execution environment. it does not modify the runner's configuration or trigger any actions; it's purely for information retrieval.
     */
    GET_AUTOMATION_ACTION_RUNNER_BY_ID: "PAGERDUTY_GET_AUTOMATION_ACTION_RUNNER_BY_ID",
    /**
     * Retrieves detailed information about a specific automation action's association with a particular team in pagerduty. this endpoint allows you to examine how an automation action is configured or applied within the context of a specific team. it's useful for understanding the relationship between automation actions and teams, which can be crucial for managing incident response workflows and team-specific automations. the endpoint should be used when you need to verify or audit the automation action settings for a particular team, or when troubleshooting team-specific automation behaviors.
     */
    GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID: "PAGERDUTY_GET_AUTOMATION_ACTION_TEAM_BY_TEAM_ID",
    /**
     * Get a field option on a custom field <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.read`
     */
    GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD: "PAGERDUTY_GET_A_FIELD_OPTION_ON_A_CUSTOM_FIELD",
    /**
     * Retrieve an existing incident workflows trigger scoped oauth requires: `incident workflows.read`
     */
    GET_A_TRIGGER: "PAGERDUTY_GET_A_TRIGGER",
    /**
     * Retrieves the current priority threshold settings for all business services in pagerduty. this endpoint allows users to fetch the configured thresholds that determine incident prioritization and escalation for each business service. it should be used when auditing or reviewing the current priority configurations across the organization's services. the tool provides a comprehensive view of how incidents are categorized and escalated based on their severity for different business services. it does not allow modification of these thresholds; for changes, a separate update endpoint would be required.
     */
    GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS: "PAGERDUTY_GET_BUSINESS_SERVICES_PRIORITY_THRESHOLDS",
    /**
     * Retrieves a list of subscribers for a specific business service in pagerduty. this endpoint allows you to fetch all users or teams configured to receive notifications for incidents related to the specified business service. it's useful for auditing who is responsible for responding to issues within a particular service, or for managing notification settings at a service level. the endpoint returns read-only data and does not modify any configurations. use this when you need to review or verify the current subscriber list for a business service, such as during incident response planning or service ownership reviews.
     */
    GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID: "PAGERDUTY_GET_BUSINESS_SERVICE_SUBSCRIBERS_BY_ID",
    /**
     * Retrieves the cache variables associated with a specific service in pagerduty's event orchestration system. this endpoint allows you to access temporary storage data used within event orchestration workflows for the specified service. it's particularly useful for debugging, auditing, or analyzing the current state of event handling for a service. the retrieved cache variables can provide insights into how events are being processed and what data is being stored temporarily during orchestration. this endpoint should be used when you need to inspect or verify the cache variables for a particular service, which can be helpful in troubleshooting or optimizing event orchestration workflows.
     */
    GET_CACHE_VARIABLES_FOR_SERVICE: "PAGERDUTY_GET_CACHE_VARIABLES_FOR_SERVICE",
    /**
     * Retrieves detailed information about a specific cache variable associated with a particular service within an event orchestration in pagerduty. this endpoint allows you to access the current state and configuration of a cache variable, which can be crucial for understanding and troubleshooting event orchestration workflows. use this when you need to inspect or verify the settings of a cache variable for a given service, such as during debugging or auditing processes. the endpoint provides read-only access and does not allow modification of the cache variable. keep in mind that the response will only include information about the specified cache variable and will not provide a comprehensive view of all variables or the entire event orchestration configuration.
     */
    GET_CACHE_VARIABLE_BY_ID: "PAGERDUTY_GET_CACHE_VARIABLE_BY_ID",
    /**
     * Retrieves detailed information about a specific escalation policy in pagerduty. this endpoint allows you to fetch the complete configuration of an escalation policy, including its name, description, escalation rules, and associated services. use this when you need to review or audit an existing escalation policy's setup. it's particularly useful for understanding how incidents are being routed and escalated within your organization. this endpoint does not modify any data and is safe for frequent calls, but be mindful of rate limits. note that it only provides information for a single policy; to list multiple policies, you would need a different endpoint.
     */
    GET_ESCALATION_POLICY_BY_ID: "PAGERDUTY_GET_ESCALATION_POLICY_BY_ID",
    /**
     * Retrieves a list of integrations associated with a specific event orchestration in pagerduty. this endpoint allows users to fetch all the integrations that are configured for a particular event orchestration, providing insights into how incidents are being routed and managed. it's useful for auditing the current setup of an event orchestration or when planning to modify the orchestration's integration configuration. the endpoint returns details about each integration, which may include integration types, configurations, and other relevant metadata. use this when you need to review or analyze the integrations tied to a specific event orchestration for troubleshooting, reporting, or system optimization purposes.
     */
    GET_EVENT_INTEGRATIONS_BY_ID: "PAGERDUTY_GET_EVENT_INTEGRATIONS_BY_ID",
    /**
     * Retrieves detailed information about a specific event orchestration in pagerduty using its unique identifier. this endpoint allows users to fetch the configuration and settings of a particular event orchestration, which is crucial for understanding and analyzing how incidents are being managed and automated within the pagerduty system. it should be used when you need to review or audit the setup of an event orchestration, such as its routing rules, filters, and associated services. the endpoint provides a comprehensive view of the orchestration but does not modify any settings. keep in mind that access to this information may be restricted based on the user's permissions within the pagerduty account.
     */
    GET_EVENT_ORCHESTRATION_BY_ID: "PAGERDUTY_GET_EVENT_ORCHESTRATION_BY_ID",
    /**
     * Retrieves the cache variables associated with a specific event orchestration in pagerduty. this endpoint allows you to access temporary data storage elements used during event orchestration processes, which are crucial for maintaining context and improving efficiency in incident management workflows. use this endpoint when you need to inspect or debug the current state of an event orchestration's cache variables, or when you want to retrieve stored information for further processing in your incident management pipeline. note that cache variables are temporary and may not persist indefinitely, so the retrieved data represents the current state at the time of the api call.
     */
    GET_EVENT_ORCHESTRATION_CACHE_VARIABLES: "PAGERDUTY_GET_EVENT_ORCHESTRATION_CACHE_VARIABLES",
    /**
     * Get the global orchestration for an event orchestration. global orchestration rules allows you to create a set of event rules. these rules evaluate against all events sent to an event orchestration. when a matching rule is found, it can modify and enhance the event and can route the event to another set of global rules within this orchestration for further processing. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#event-orchestrations) scoped oauth requires: `event orchestrations.read`
     */
    GET_EVENT_ORCHESTRATION_GLOBAL: "PAGERDUTY_GET_EVENT_ORCHESTRATION_GLOBAL",
    /**
     * Retrieves detailed information about a specific integration associated with an event orchestration in pagerduty. this endpoint allows you to fetch the configuration and settings of a particular integration within the context of an event orchestration. use this when you need to inspect or verify the setup of an integration, such as its type, configuration parameters, or connection status. the endpoint is particularly useful for troubleshooting integration issues or when you need to review the current state of an integration as part of your incident management workflow. note that this endpoint only provides read access to the integration details and cannot be used to modify the integration.
     */
    GET_EVENT_ORCHESTRATION_INTEGRATION: "PAGERDUTY_GET_EVENT_ORCHESTRATION_INTEGRATION",
    /**
     * Retrieves a specific extension schema from pagerduty by its unique identifier. this endpoint is used to fetch detailed information about a custom data structure that extends the functionality of the pagerduty api. it's particularly useful for developers who need to understand or work with custom fields or data structures in their pagerduty integrations. the endpoint returns the complete definition of the requested extension schema, including any custom fields, their types, and other metadata. this tool should be used when you need to inspect or verify the structure of a specific extension schema, but it won't allow you to modify the schema or create new ones. keep in mind that access to extension schemas may be subject to account permissions and the schema must exist in the pagerduty account for the request to succeed.
     */
    GET_EXTENSION_SCHEMA_BY_ID: "PAGERDUTY_GET_EXTENSION_SCHEMA_BY_ID",
    /**
     * Retrieves detailed information about a specific impact on a pagerduty status page. this endpoint allows you to fetch the current state and details of a particular impact, such as its severity, affected components, and any updates related to the impact. it's useful for monitoring the progress of ongoing incidents or reviewing past impacts on your services. the endpoint should be used when you need to get the most up-to-date information about a known impact, especially during incident management or when providing updates to stakeholders. note that this endpoint only provides information about a single impact and does not give an overview of all impacts on a status page.
     */
    GET_IMPACT_BY_STATUS_PAGE_ID: "PAGERDUTY_GET_IMPACT_BY_STATUS_PAGE_ID",
    /**
     * Retrieves detailed information about a specific alert associated with a particular incident in pagerduty. this endpoint is used when you need to access the properties and current state of an individual alert within the context of its parent incident. it's particularly useful for tracking the progression of an alert, understanding its current status, and gathering related metadata. the endpoint should be called when detailed information about a single alert is required, rather than for bulk operations or listing multiple alerts. note that this endpoint focuses on retrieving data and does not modify the alert or incident.
     */
    GET_INCIDENT_ALERT_DETAILS: "PAGERDUTY_GET_INCIDENT_ALERT_DETAILS",
    /**
     * Retrieves all log entries associated with a specific incident in pagerduty. this endpoint provides a comprehensive history of actions, notifications, and status changes related to the incident. it should be used when detailed information about the lifecycle of an incident is needed, such as for post-incident reviews, auditing, or tracking the incident resolution process. the endpoint returns log entries in chronological order, allowing users to trace the incident's progression from creation to resolution. note that the number of log entries returned may be large for long-running or complex incidents, so pagination might be necessary (though not specified in the given schema).
     */
    GET_INCIDENT_LOG_ENTRIES_BY_ID: "PAGERDUTY_GET_INCIDENT_LOG_ENTRIES_BY_ID",
    /**
     * Retrieves a list of incident workflows configured in the pagerduty account. this endpoint allows users to fetch information about automated sequences of actions set up to respond to incidents. it's useful for reviewing existing workflows, auditing incident response processes, or gathering data for reporting purposes. the endpoint supports pagination and filtering by workflow name. it does not create, modify, or delete workflows; it's purely for retrieval of workflow information.
     */
    GET_INCIDENT_WORKFLOWS: "PAGERDUTY_GET_INCIDENT_WORKFLOWS",
    /**
     * Retrieves a list of all available actions that can be used in incident workflows within pagerduty. this endpoint provides information about the various automated tasks and responses that can be configured to streamline incident management processes. it should be used when setting up or modifying incident workflows to understand the range of actions available for automation. the endpoint returns details about each action, which may include its name, description, and any configurable parameters. this tool is particularly useful for developers and system administrators who are designing or optimizing their incident response procedures in pagerduty. note that while this endpoint retrieves action information, it does not execute or modify any actions itself.
     */
    GET_INCIDENT_WORKFLOWS_ACTIONS: "PAGERDUTY_GET_INCIDENT_WORKFLOWS_ACTIONS",
    /**
     * Retrieves detailed information about a specific action within an incident workflow in pagerduty. this endpoint allows users to fetch the configuration, settings, and other relevant details of a particular workflow action by providing its unique identifier. it is useful for inspecting the current state of an action, troubleshooting workflow issues, or gathering information for reporting purposes. the endpoint should be used when you need to examine or verify the properties of an individual workflow action, but it does not modify or execute the action itself.
     */
    GET_INCIDENT_WORKFLOW_ACTION_BY_ID: "PAGERDUTY_GET_INCIDENT_WORKFLOW_ACTION_BY_ID",
    /**
     * Retrieves log entries from the pagerduty system, providing a detailed history of events and actions related to incidents and system activities. this endpoint is crucial for auditing purposes, allowing users to track changes, responses, and other important events within their incident management workflow. it supports filtering by date range and specific incidents, making it useful for both broad overview analysis and detailed incident investigations. the endpoint uses pagination to manage large sets of log entries, ensuring efficient data retrieval and processing.
     */
    GET_LOG_ENTRIES: "PAGERDUTY_GET_LOG_ENTRIES",
    /**
     * Retrieves detailed information about a specific maintenance window in pagerduty. this endpoint allows users to access the configuration, schedule, and status of a particular maintenance window using its unique identifier. it's useful for reviewing planned maintenance periods, verifying window settings, or checking the current status of a maintenance window. the endpoint should be used when detailed information about a single maintenance window is needed, rather than for listing all maintenance windows or creating new ones.
     */
    GET_MAINTENANCE_WINDOW_BY_ID: "PAGERDUTY_GET_MAINTENANCE_WINDOW_BY_ID",
    /**
     * Get the status of all oauth delegations revocation requests for this account, specifically how many requests are still pending. this endpoint is limited to account owners and admins. scoped oauth requires: `oauth delegations.read`
     */
    GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS: "PAGERDUTY_GET_OAUTH_DELEGATIONS_REVOCATION_REQUESTS_STATUS",
    /**
     * Retrieves alerts associated with paused incident reports in pagerduty. this endpoint allows users to fetch information about alerts that have been temporarily halted in the reporting process. it's useful for reviewing and managing incidents that have been paused, potentially for prioritization or during maintenance periods. the endpoint returns a list of alerts related to paused incident reports, which can help in assessing the current state of incident management and decision-making for further actions. note that this endpoint only provides information about paused alerts and does not include details about active or resolved incidents.
     */
    GET_PAUSED_INCIDENT_ALERTS: "PAGERDUTY_GET_PAUSED_INCIDENT_ALERTS",
    /**
     * Retrieves detailed information about a specific post on a pagerduty status page. this endpoint allows you to fetch the content, timestamp, and any associated metadata for a particular update or message that has been posted to a status page. it's particularly useful for retrieving historical updates about incidents, maintenance notices, or general service status communications. use this endpoint when you need to access or display the full details of a specific status update, such as when building a custom status page interface or integrating pagerduty status updates into another system. note that this endpoint only retrieves information for existing posts; it cannot be used to create, modify, or delete posts.
     */
    GET_POST_FROM_STATUS_PAGE_BY_ID: "PAGERDUTY_GET_POST_FROM_STATUS_PAGE_BY_ID",
    /**
     * Retrieves a list of response plays configured in the pagerduty account. response plays are predefined sets of actions that can be automatically executed when an incident occurs, helping to streamline and standardize incident response processes. this endpoint allows you to fetch and review existing response plays, which is useful for auditing, reporting, or integrating response play information into other systems. the list can be paginated and filtered using various parameters to manage large sets of response plays efficiently.
     */
    GET_RESPONSE_PLAYS: "PAGERDUTY_GET_RESPONSE_PLAYS",
    /**
     * Retrieves detailed information about a specific rule within a pagerduty ruleset. this endpoint allows users to fetch the configuration and settings of an individual rule, which is essential for understanding how incidents are being automated and managed. it should be used when detailed information about a particular rule's conditions, actions, or other properties is needed. this endpoint is particularly useful for auditing ruleset configurations, troubleshooting automation issues, or preparing to update rule settings. it does not modify any data and is safe for frequent use in monitoring or dashboard applications. however, it will not provide an overview of all rules in a ruleset or allow for rule modifications.
     */
    GET_RULE_FROM_RULESET_BY_ID: "PAGERDUTY_GET_RULE_FROM_RULESET_BY_ID",
    /**
     * Retrieves a list of all schedules from your pagerduty account. this endpoint provides essential information about on-call rotations, helping teams manage and organize their incident response workflows. use this when you need to view all existing schedules, such as during schedule audits, team restructuring, or when setting up integrations that require schedule ids. the endpoint returns basic details for each schedule, which can be used to make further api calls for more specific information. note that this endpoint does not provide the full details of each schedule's rotation patterns; for that, you would need to make additional api calls using the schedule ids returned by this endpoint.
     */
    GET_SCHEDULES: "PAGERDUTY_GET_SCHEDULES",
    /**
     * Retrieves service impacts for a specific status dashboard in pagerduty. this endpoint allows users to fetch real-time information about how incidents or maintenance activities are affecting services displayed on a particular dashboard. it's useful for monitoring the current state of services, understanding ongoing issues, and assessing the overall health of systems represented in the specified dashboard. the endpoint should be used when you need to programmatically access up-to-date service impact data for a known status dashboard, enabling integration with other monitoring or reporting tools. note that this endpoint only provides information for a single dashboard at a time and requires knowledge of the dashboard's url slug.
     */
    GET_SERVICE_IMPACTS_BY_URL_SLUG: "PAGERDUTY_GET_SERVICE_IMPACTS_BY_URL_SLUG",
    /**
     * Retrieves detailed information about a specific severity level on a particular status page in pagerduty. this endpoint is used to fetch the configuration and metadata associated with a severity, which is crucial for understanding how incidents are categorized and communicated on a status page. it provides insights into how different levels of service disruptions are represented and managed within the pagerduty system. this tool is essential for developers and administrators who need to programmatically access or audit severity configurations on status pages, enabling them to ensure consistent incident communication across their organization.
     */
    GET_SEVERITY_FOR_STATUS_PAGE: "PAGERDUTY_GET_SEVERITY_FOR_STATUS_PAGE",
    /**
     * Retrieves the updates for a specific post on a pagerduty status page. this endpoint allows users to fetch the chronological list of updates made to a particular post, providing detailed information about how the status or information has changed over time. it's particularly useful for tracking the progression of an incident or maintenance event that has been communicated through a status page. the endpoint should be used when there's a need to review the history of updates for a specific status page post, such as during post-incident reviews or when compiling reports on communication effectiveness during incidents.
     */
    GET_SPECIFIC_POST_UPDATE_STATUS: "PAGERDUTY_GET_SPECIFIC_POST_UPDATE_STATUS",
    /**
     * Retrieves detailed information about a specific status dashboard in pagerduty. this endpoint allows users to fetch the current configuration, components, and status of a particular dashboard, which is crucial for monitoring system health and managing incidents efficiently. it should be used when you need to access up-to-date information about a known status dashboard, such as during incident response or when updating dashboard configurations. the endpoint will not modify any data and is intended for read-only operations.
     */
    GET_STATUS_DASHBOARD_BY_ID: "PAGERDUTY_GET_STATUS_DASHBOARD_BY_ID",
    /**
     * Retrieves the current status of a specific item on a pagerduty status page. this endpoint is used to fetch up-to-date information about the operational state of a particular service or component listed on a status page. it's particularly useful for integrations that need to monitor or display the latest status of services to users or internal systems. the endpoint requires both the status page id and the specific status item id, allowing for precise querying of individual service statuses within a larger status page context. this tool should be used when you need to programmatically check the current state of a specific service on a pagerduty status page, such as during incident management or for creating custom dashboards.
     */
    GET_STATUS_FOR_STATUS_PAGE_BY_ID: "PAGERDUTY_GET_STATUS_FOR_STATUS_PAGE_BY_ID",
    /**
     * Retrieves the impacts associated with a specific status page in pagerduty. this endpoint allows users to fetch detailed information about service disruptions, incidents, or other events affecting the services displayed on a particular status page. it is useful for monitoring the current state of services, understanding the severity and scope of ongoing issues, and keeping stakeholders informed about service health. the endpoint should be used when there's a need to programmatically access impact data for a status page, such as for integration with other monitoring tools or for creating custom dashboards.
     */
    GET_STATUS_PAGE_IMPACTS_BY_ID: "PAGERDUTY_GET_STATUS_PAGE_IMPACTS_BY_ID",
    /**
     * Retrieves detailed information about a specific subscription associated with a particular status page in pagerduty. this endpoint allows users to fetch subscription details such as the subscriber's contact information, notification preferences, and current subscription status. it should be used when you need to review or verify the details of an existing subscription for a status page. the endpoint is particularly useful for managing and auditing subscriber information, troubleshooting notification issues, or when updating subscription settings. note that this endpoint only provides read access to subscription data and cannot be used to modify or create new subscriptions.
     */
    GET_STATUS_PAGE_SUBSCRIPTION: "PAGERDUTY_GET_STATUS_PAGE_SUBSCRIPTION",
    /**
     * Retrieves the list of teams associated with a specific automation action in pagerduty. this endpoint is useful for understanding which teams are responsible for or have access to a particular automated process in the incident management workflow. it can be used to audit team assignments, manage access control, or gather information for reporting purposes. the endpoint returns only the teams linked to the specified automation action and does not provide details about the action itself or other related resources.
     */
    GET_TEAMS_ASSOCIATED_WITH_ACTION_ID: "PAGERDUTY_GET_TEAMS_ASSOCIATED_WITH_ACTION_ID",
    /**
     * Retrieves a list of all members associated with a specific team in pagerduty. this endpoint is useful for obtaining detailed information about the composition of a team, including user ids, names, roles, and contact information of team members. it should be used when you need to review or audit team membership, update on-call rotations, or gather information for reporting purposes. the endpoint does not modify team membership; it only provides read access to the current team roster. keep in mind that the response may be paginated for teams with a large number of members.
     */
    GET_TEAM_MEMBERS_BY_ID: "PAGERDUTY_GET_TEAM_MEMBERS_BY_ID",
    /**
     * Retrieves the notification subscriptions for a specific team in pagerduty. this endpoint allows you to fetch detailed information about how a team is configured to receive notifications for various events and incidents. it's particularly useful for auditing a team's notification settings, understanding their alert preferences, and ensuring that the right people are notified at the right time. the endpoint should be used when you need to review or analyze a team's current notification setup, but it won't allow you to modify these settings directly. keep in mind that the response may include sensitive information about team members and their notification preferences, so use this endpoint judiciously and in compliance with your organization's data privacy policies.
     */
    GET_TEAM_NOTIFICATION_SUBSCRIPTIONS: "PAGERDUTY_GET_TEAM_NOTIFICATION_SUBSCRIPTIONS",
    /**
     * Retrieves detailed information about a specific template in pagerduty by its unique identifier. this endpoint is used to access the configuration and settings of a pre-defined template, which can include incident response procedures, notification rules, and other standardized actions. it's particularly useful when you need to review or reference an existing template for incident management purposes. the endpoint returns comprehensive data about the template, but does not modify or create new templates.
     */
    GET_TEMPLATE_BY_ID: "PAGERDUTY_GET_TEMPLATE_BY_ID",
    /**
     * Get a service orchestration. a service orchestration allows you to create a set of event rules. the service orchestration evaluates events sent to this service against each of its rules, beginning with the rules in the "start" set. when a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this service orchestration for further processing. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#event-orchestrations) scoped oauth requires: `services.read`
     */
    GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE: "PAGERDUTY_GET_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE",
    /**
     * Retrieves the notification subscriptions for a specific user in pagerduty. this endpoint allows you to fetch detailed information about how a user is configured to receive various types of notifications, such as incident alerts, updates, or system messages. it's useful for auditing a user's notification settings, troubleshooting communication issues, or when you need to review or modify a user's notification preferences programmatically. the response likely includes a list of subscription objects, each detailing the type of notification, delivery method (e.g., email, sms), and any specific rules or filters applied. this endpoint should be used when you need to understand or manage a user's notification setup within pagerduty.
     */
    GET_USER_NOTIFICATION_SUBSCRIPTIONS: "PAGERDUTY_GET_USER_NOTIFICATION_SUBSCRIPTIONS",
    /**
     * Retrieves all active sessions for a specific user in pagerduty. this endpoint allows you to fetch information about a user's current login sessions, which can be useful for auditing, security monitoring, or managing user access. it provides details such as session start times, device information, and ip addresses for each active session. use this endpoint when you need to track user activity, investigate potential security issues, or manage concurrent logins. note that this endpoint only returns information about active sessions and does not provide historical session data or the ability to modify sessions.
     */
    GET_USER_SESSIONS_BY_ID: "PAGERDUTY_GET_USER_SESSIONS_BY_ID",
    /**
     * Retrieves detailed information about a specific user session in pagerduty. this endpoint allows you to fetch session-related data for a particular user, filtered by session type and identified by a unique session id. it's useful for monitoring user activity, troubleshooting authentication issues, or auditing system access. the endpoint returns data about the specified session, which may include creation time, last activity timestamp, expiration time, and other relevant session attributes. it should be used when detailed information about a user's specific session is required, but it does not provide information about other sessions or general user account details.
     */
    GET_USER_SESSION_BY_TYPE: "PAGERDUTY_GET_USER_SESSION_BY_TYPE",
    /**
     * Retrieves the status update notification rules for a specific user in pagerduty. this endpoint allows you to fetch the configured rules that determine how and when a user receives notifications about status changes in incidents or services they are associated with. it's useful for understanding a user's current notification preferences and can be helpful when auditing or updating user settings. the endpoint returns a list of notification rules, each detailing the conditions under which status update notifications are sent to the user.
     */
    GET_USER_STATUS_UPDATE_NOTIFICATION_RULES: "PAGERDUTY_GET_USER_STATUS_UPDATE_NOTIFICATION_RULES",
    /**
     * Retrieves detailed information about a specific webhook subscription in pagerduty. this endpoint allows you to fetch the configuration and status of a webhook subscription, including its delivery method, subscribed events, and any applied filters. use this when you need to review or verify the settings of an existing webhook subscription, such as checking which events it's configured to receive or confirming its current status. the endpoint provides a snapshot of the subscription's configuration but does not include historical data about past webhook deliveries or failures.
     */
    GET_WEBHOOK_SUBSCRIPTION_BY_ID: "PAGERDUTY_GET_WEBHOOK_SUBSCRIPTION_BY_ID",
    /**
     * Get details about a workflow integration. scoped oauth requires: `workflow integrations.read`
     */
    GET_WORKFLOW_INTEGRATION: "PAGERDUTY_GET_WORKFLOW_INTEGRATION",
    /**
     * Get details about a workflow integration connection. scoped oauth requires: `workflow integrations:connections.read`
     */
    GET_WORKFLOW_INTEGRATION_CONNECTION: "PAGERDUTY_GET_WORKFLOW_INTEGRATION_CONNECTION",
    /**
     * This endpoint allows you to install a new add-on to your pagerduty account, enhancing its functionality with custom integrations. add-ons can be either full-page or incident-specific, providing additional context or tools within the pagerduty interface. use this endpoint when you want to integrate external resources or custom dashboards into your pagerduty workflow. the add-on must have a secure https source url and a unique name within your account. note that while you can install multiple add-ons, each must serve a distinct purpose and have a different name and source url.
     */
    INSTALL_ADD_ON_ENDPOINT: "PAGERDUTY_INSTALL_ADD_ON_ENDPOINT",
    /**
     * Invokes a specific automation action in pagerduty, associating it with a particular incident. this endpoint allows you to trigger pre-defined automated tasks or workflows within the pagerduty incident management system. it's particularly useful for executing custom actions or scripts in response to specific incidents, enhancing the incident response process. the action is identified by its unique id, and the invocation must be linked to an existing incident through its incident id. this endpoint should be used when you need to programmatically execute automation actions as part of your incident management workflow or integration with other systems.
     */
    INVOKE_AUTOMATION_ACTION_BY_ID: "PAGERDUTY_INVOKE_AUTOMATION_ACTION_BY_ID",
    /**
     * List all workflow integration connections. scoped oauth requires: `workflow integrations:connections.read`
     */
    LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS: "PAGERDUTY_LIST_ALL_WORKFLOW_INTEGRATION_CONNECTIONS",
    /**
     * This endpoint retrieves a list of automation actions configured in the pagerduty account. automation actions are predefined tasks or operations that can be executed automatically in response to incidents or other triggers. the endpoint allows users to view all available automation actions, which can be useful for auditing, managing, or integrating these actions into other workflows. it supports pagination for handling large sets of actions and can include related information about associated services and teams. use this endpoint when you need to review, inventory, or programmatically access the automation capabilities within your pagerduty environment. note that this endpoint only provides information about existing actions and does not create, modify, or execute the actions themselves.
     */
    LIST_AUTOMATION_ACTION_DETAILS: "PAGERDUTY_LIST_AUTOMATION_ACTION_DETAILS",
    /**
     * Retrieves all available extension schemas from the pagerduty api. this endpoint allows users to fetch custom schema extensions that have been defined for their pagerduty account. extension schemas are used to add custom data structures or validation rules to the standard api schema, enabling more flexible and tailored data management. this tool is particularly useful when you need to understand the custom data fields or structures that have been added to your pagerduty implementation. it does not create, modify, or delete extension schemas; it only provides a read-only view of the existing schemas.
     */
    LIST_EXTENSION_SCHEMAS: "PAGERDUTY_LIST_EXTENSION_SCHEMAS",
    /**
     * List field options for a custom field. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.read`
     */
    LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD: "PAGERDUTY_LIST_FIELD_OPTIONS_ON_A_CUSTOM_FIELD",
    /**
     * Retrieves a list of subscribers to status updates for a specific incident in pagerduty. this endpoint allows you to see all users or services that are currently subscribed to receive notifications about status changes for the given incident. it's useful for understanding who is being kept informed about the incident's progress. this tool should be used when you need to review or audit the notification list for an incident, ensuring that all necessary stakeholders are included. it does not modify the subscriber list; for adding or removing subscribers, separate endpoints would be required.
     */
    LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS: "PAGERDUTY_LIST_INCIDENT_STATUS_UPDATE_SUBSCRIBERS",
    /**
     * List the available incident types incident types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident. these can be filtered by enabled or disabled types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#incidenttype) scoped oauth requires: `incident types.read`
     */
    LIST_INCIDENT_TYPES: "PAGERDUTY_LIST_INCIDENT_TYPES",
    /**
     * List the custom fields for an incident type. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.read`
     */
    LIST_INCIDENT_TYPE_CUSTOM_FIELDS: "PAGERDUTY_LIST_INCIDENT_TYPE_CUSTOM_FIELDS",
    /**
     * The listlicenses endpoint retrieves a comprehensive list of all licenses associated with the authenticated pagerduty account. this tool is essential for administrators and account managers who need to review, audit, or manage the licensing status of their pagerduty implementation. it provides an overview of all active licenses, including details such as license type, expiration date, and the number of users covered. this endpoint should be used when you need to perform license inventory, plan for renewals, or ensure compliance with your service agreement. note that while it offers a complete view of licenses, it does not provide functionalities to modify licenses directly through the api.
     */
    LIST_LICENSES: "PAGERDUTY_LIST_LICENSES",
    /**
     * Retrieves information about the impacts of supporting services on a specific business service in pagerduty. this endpoint is used to understand the relationships and dependencies between a primary business service and its supporting services, along with the potential impacts these relationships may have on incident management and service reliability. it's particularly useful for assessing the cascading effects of incidents across interconnected services and for proactive risk management. the endpoint should be used when analyzing service dependencies, planning incident response strategies, or evaluating the overall resilience of your service infrastructure. note that this endpoint focuses on impact information and may not provide real-time incident data or detailed metrics about the services themselves.
     */
    LIST_SUPPORTING_SERVICE_IMPACTS: "PAGERDUTY_LIST_SUPPORTING_SERVICE_IMPACTS",
    /**
     * Retrieves a list of templates available in the pagerduty system. templates are pre-defined configurations used for creating alerts, notifications, and other automated processes within pagerduty. this endpoint should be used when you need to view or manage the existing templates in your pagerduty account. it provides an overview of all templates, which can be useful for auditing, updating, or selecting templates for use in incident management workflows. the endpoint does not create, modify, or delete templates; it is solely for retrieving template information.
     */
    LIST_TEMPLATES: "PAGERDUTY_LIST_TEMPLATES",
    /**
     * List available workflow integrations. scoped oauth requires: `workflow integrations.read`
     */
    LIST_WORKFLOW_INTEGRATIONS: "PAGERDUTY_LIST_WORKFLOW_INTEGRATIONS",
    /**
     * List all workflow integration connections for a specific workflow integration. scoped oauth requires: `workflow integrations:connections.read`
     */
    LIST_WORKFLOW_INTEGRATION_CONNECTIONS: "PAGERDUTY_LIST_WORKFLOW_INTEGRATION_CONNECTIONS",
    /**
     * Creates a new cache variable for a specific service in pagerduty's event orchestrations. this endpoint allows you to define a cache variable that can store either the most recent value from an event field or count trigger events within a specified time range. cache variables are useful for maintaining temporary data related to events, which can be used in event routing and management. the created cache variable can be used to enhance event processing logic and improve incident management workflows.
     */
    MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE: "PAGERDUTY_MANAGE_CACHE_VARIABLES_FOR_EVENT_SERVICE",
    /**
     * Merges multiple source incidents into a target incident in pagerduty's incident management system. this endpoint allows users to consolidate related or duplicate incidents into a single, primary incident for streamlined management and resolution. the operation combines the specified source incidents into the target incident identified by the url path, marking the source incidents as resolved. this tool should be used when multiple incidents are determined to be part of the same underlying issue or when consolidating incident management efforts. it's particularly useful for reducing noise and focusing on the root cause of related issues. note that this action is irreversible, so care should be taken to ensure that the incidents are truly related before merging.
     */
    MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT: "PAGERDUTY_MERGE_SOURCE_INCIDENTS_INTO_TARGET_INCIDENT",
    /**
     * This endpoint facilitates the migration of an integration from one event orchestration to another within pagerduty. it allows users to reassign an existing integration to a different event orchestration, maintaining the integration's configuration while updating its association. this operation is useful when restructuring event management workflows or optimizing incident routing. the endpoint should be used when there's a need to change how a specific integration interacts with pagerduty's event processing system. it's important to note that this process only changes the association and does not modify the integration's settings or connected external services.
     */
    MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS: "PAGERDUTY_MIGRATE_INTEGRATION_BETWEEN_ORCHESTRATIONS",
    /**
     * This endpoint allows you to modify the tags associated with a specific entity in pagerduty. it provides functionality to both add new tags and remove existing ones in a single api call. the endpoint is particularly useful for updating the categorization or labeling of pagerduty entities such as incidents, services, or users. it supports adding tags by label (creating new ones if necessary) or by reference, and removing tags by their unique identifiers. this flexibility allows for efficient tag management across your pagerduty resources, enabling better organization and easier searching of entities. use this endpoint when you need to update the tags for a specific entity, either to refine its categorization or to align it with current operational needs.
     */
    MODIFY_ENTITY_TAGS: "PAGERDUTY_MODIFY_ENTITY_TAGS",
    /**
     * Retrieves and aggregates metrics for incidents across all services in pagerduty. this endpoint allows for extensive filtering and customization of incident data, enabling detailed analysis of operational performance. it's particularly useful for generating reports, identifying trends, and assessing incident management efficiency over specified time periods. the endpoint supports various filtering criteria, time zone adjustments, and aggregation options, making it a powerful tool for both high-level overviews and granular incident analytics. however, users should be aware of the complexity of the filtering options and ensure they provide accurate parameters to obtain relevant data.
     */
    PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS: "PAGERDUTY_PAGERDUTY_AGGREGATE_INCIDENT_METRICS_WITH_FILTERS",
    /**
     * The pingwebhooksubscription endpoint sends a test post request to a specified webhook subscription in your pagerduty account. this tool is used to verify that a webhook subscription is correctly configured and can receive notifications. it's particularly useful after setting up a new webhook subscription or when troubleshooting integration issues. the endpoint doesn't modify any data but simulates a real webhook delivery, allowing you to confirm that your systems can properly receive and process pagerduty webhooks. note that this tool only tests the delivery mechanism and doesn't validate the processing of specific event types on your end.
     */
    PING_WEBHOOK_SUBSCRIPTION: "PAGERDUTY_PING_WEBHOOK_SUBSCRIPTION",
    /**
     * This endpoint creates or updates an account subscription for a specific business service in pagerduty. it allows users to manage subscription settings, such as notification preferences or service-level agreements, for a particular business service identified by its unique id. use this endpoint when you need to set up new subscription configurations or modify existing ones for a business service. the endpoint is particularly useful for automating subscription management across multiple business services or integrating subscription updates with other systems. note that this operation may affect billing or service access, so it should be used carefully and with proper authorization.
     */
    POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE: "PAGERDUTY_POST_ACCOUNT_SUBSCRIPTION_FOR_BUSINESS_SERVICE",
    /**
     * Creates a new alert grouping setting in pagerduty, defining how alerts will be automatically grouped into incidents based on specified configurations. this endpoint allows users to set up intelligent alert grouping rules, improving incident management efficiency by reducing noise and consolidating related alerts. it's particularly useful for teams looking to streamline their incident response process and minimize alert fatigue. the setting can be applied to one or multiple services, with the option to use content-based or intelligent grouping algorithms.
     */
    POST_ALERT_GROUPING_SETTINGS: "PAGERDUTY_POST_ALERT_GROUPING_SETTINGS",
    /**
     * The analyzerespondermetrics endpoint aggregates and analyzes responder performance metrics for pagerduty incidents. it provides insights into response times, efficiency, and workload distribution. this tool is ideal for assessing and optimizing incident response processes, offering flexible filtering options for focused analysis. note that it provides aggregated data, not real-time information, with a maximum analysis range of one year.
     */
    POST_ANALYTICS_METRICS_RESPONDER_FILTERS: "PAGERDUTY_POST_ANALYTICS_METRICS_RESPONDER_FILTERS",
    /**
     * Retrieves and aggregates analytics metrics for incidents related to escalation policies in pagerduty. this endpoint allows for detailed filtering and customization of incident data, enabling users to analyze trends, performance, and patterns in their incident management process. it's particularly useful for generating reports, identifying areas for improvement, and understanding the effectiveness of escalation policies over time. the endpoint supports various filtering options, time zone specifications, and time-based aggregation, making it a powerful tool for operational insights and decision-making in incident management.
     */
    POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES: "PAGERDUTY_POST_ANALYTIC_METRICS_ON_ESCALATION_POLICIES",
    /**
     * Creates a new change event in the pagerduty system. this endpoint allows you to record and track significant changes or updates within your infrastructure or services. use this when you want to log important modifications, deployments, or system alterations that may impact incident management or operational processes. the change event data can be used for correlation with incidents, providing context for potential issues or for auditing purposes. this endpoint is particularly useful for maintaining a comprehensive change log and enhancing the incident response process by providing additional context about recent system changes.
     */
    POST_CHANGE_EVENTS: "PAGERDUTY_POST_CHANGE_EVENTS",
    /**
     * Creates a new cache variable within a pagerduty event orchestration. this endpoint allows you to define a cache variable that can store dynamic data related to events, either based on recent values extracted from event fields or by counting trigger events within a specified time range. cache variables are useful for maintaining state across multiple events and can be used in event routing and automation rules. the created cache variable can be configured with conditions to determine when it should be updated and can be optionally disabled. this tool should be used when setting up complex event orchestrations that require stateful processing or when implementing advanced automation workflows in pagerduty.
     */
    POST_EVENT_ORCHESTRATION_CACHE_VARIABLES: "PAGERDUTY_POST_EVENT_ORCHESTRATION_CACHE_VARIABLES",
    /**
     * The analyzerawincidents endpoint retrieves and analyzes raw incident data from pagerduty. it allows users to fetch detailed information about incidents with various filtering options. this endpoint is useful for generating custom reports, performing trend analysis, or investigating specific incident sets. it supports extensive filtering, pagination, and result customization, making it ideal for in-depth incident reviews and pattern analysis.
     */
    POST_INCIDENTS_ANALYTICS_WITH_FILTERS: "PAGERDUTY_POST_INCIDENTS_ANALYTICS_WITH_FILTERS",
    /**
     * The analyzeincidentmetrics endpoint aggregates and analyzes incident data for pagerduty services based on specified filters and parameters. it allows users to generate detailed reports and insights on incident management performance across various dimensions such as time, urgency, teams, and services. this endpoint is particularly useful for operational reviews, trend analysis, and performance monitoring of incident response processes. the tool provides flexible filtering options to focus on specific subsets of incidents and supports various time-based aggregations for comprehensive analysis. it's important to note that while the endpoint offers extensive customization, it has a maximum supported time range of one year between the start and end dates for incident creation.
     */
    POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE: "PAGERDUTY_POST_INCIDENTS_METRICS_FILTERED_BY_SERVICE",
    /**
     * This endpoint retrieves analytics metrics for responder teams based on incident data in pagerduty. it allows for detailed filtering and customization of the data set, enabling users to analyze team and responder performance across various dimensions such as time range, urgency, priorities, and specific teams or responders. the endpoint is particularly useful for generating reports, assessing team efficiency, and identifying trends in incident management. it should be used when comprehensive analytics on responder team performance are needed, especially for large-scale or complex incident management scenarios. however, it's important to note that the endpoint has a maximum time range of one year for analysis, and the results are limited to the data the requestor has access to within the pagerduty system.
     */
    POST_INCIDENT_METRICS: "PAGERDUTY_POST_INCIDENT_METRICS",
    /**
     * This endpoint retrieves and aggregates analytics metrics for incidents across all teams in pagerduty. it allows users to apply various filters and parameters to analyze incident data, such as creation date range, urgency, team associations, and more. the endpoint is particularly useful for generating reports, identifying trends, and performing operational reviews across multiple teams and services. it provides flexibility in data aggregation and sorting, enabling users to customize their analysis based on specific needs and time frames. however, users should be aware of the one-year limitation on the date range when using the created at filters.
     */
    POST_INCIDENT_METRICS_WITH_FILTERS: "PAGERDUTY_POST_INCIDENT_METRICS_WITH_FILTERS",
    /**
     * Adds a new note to an existing incident in pagerduty. this endpoint allows users to append additional information, updates, or comments to a specific incident identified by its unique id. it's particularly useful for documenting the progress of incident resolution, sharing important observations, or recording actions taken. the note content can include any text relevant to the incident management process, helping teams collaborate and maintain a clear record of the incident's timeline and handling.
     */
    POST_INCIDENT_NOTE_USING_ID: "PAGERDUTY_POST_INCIDENT_NOTE_USING_ID",
    /**
     * Posts a status update for a specific incident in pagerduty. this endpoint allows you to add new information or progress reports to an ongoing incident, keeping stakeholders informed about the current state of the issue. it supports both simple text updates and more detailed custom html email updates. use this when you need to communicate important changes, actions taken, or any relevant information about the incident to the team or stakeholders. the endpoint is particularly useful for maintaining a clear timeline of the incident's progression and ensuring all parties have the most up-to-date information. note that while a simple message is always required, you have the option to provide additional details through a custom html email by including both the 'subject' and 'html message' fields.
     */
    POST_INCIDENT_STATUS_UPDATE: "PAGERDUTY_POST_INCIDENT_STATUS_UPDATE",
    /**
     * Retrieves a list of incidents associated with a specific responder in the pagerduty incident management system. this endpoint allows for detailed filtering and pagination of incident data, making it ideal for analyzing a responder's workload, performance, and incident trends over time. it supports various filter criteria such as creation time range, urgency, major incident status, team and service associations, and priority levels. the tool is particularly useful for generating reports, conducting operational reviews, and optimizing incident response processes. it should be used when detailed incident information for a specific responder is needed, but not for real-time incident updates or for modifying incident data.
     */
    POST_RESPONDER_INCIDENTS_WITH_FILTERS: "PAGERDUTY_POST_RESPONDER_INCIDENTS_WITH_FILTERS",
    /**
     * This endpoint adds a service to an existing automation action in pagerduty. it allows users to associate a specific service with an automation action, enabling the action to be applied to incidents or events related to that service. the endpoint requires the automation action's id in the url path and a service reference object in the request body. it should be used when configuring or updating automation actions to include additional services in their scope of operation. this endpoint is particularly useful for expanding the reach of automation actions across multiple services within an organization's pagerduty setup.
     */
    POST_SERVICE_AUTOMATION_ACTION: "PAGERDUTY_POST_SERVICE_AUTOMATION_ACTION",
    /**
     * Creates notification subscriptions for a specific team in pagerduty. this endpoint allows you to subscribe a team to receive notifications for one or more incidents or business services. use this when you want to ensure a team is notified about specific critical events or the status of important business services. the endpoint requires a list of subscribable entities, each identified by a unique id and type. it's particularly useful for setting up or updating a team's notification preferences in bulk. note that this endpoint only creates new subscriptions and doesn't affect existing ones.
     */
    POST_TEAM_NOTIFICATION_SUBSCRIPTION: "PAGERDUTY_POST_TEAM_NOTIFICATION_SUBSCRIPTION",
    /**
     * This endpoint adds a team to an automation action runner in pagerduty. it allows you to associate a specific team with a runner, enabling better organization and management of automation processes within your incident response workflow. use this endpoint when you need to grant a team access to or responsibility for a particular automation action runner. this association is crucial for maintaining proper access control and ensuring that the right teams are involved in specific automation tasks. the endpoint requires the runner's id and the team's reference information, including its unique identifier and type.
     */
    POST_TEAM_TO_RUNNER: "PAGERDUTY_POST_TEAM_TO_RUNNER",
    /**
     * The preview schedule endpoint allows you to simulate and visualize a pagerduty schedule configuration before actually creating or updating it. this tool is essential for validating complex on-call rotations, ensuring proper coverage, and identifying potential gaps or conflicts in your schedule design. it accepts a complete schedule object, including multiple layers, users, and restrictions, and returns a preview of how the schedule would operate if implemented. this preview includes rendered schedule entries, showing exactly who would be on-call at specific times. use this endpoint when designing new schedules, modifying existing ones, or troubleshooting scheduling issues to ensure optimal on-call coverage without affecting your live environment. the preview does not create or modify any actual schedules in your pagerduty account.
     */
    PREVIEW_SCHEDULE_OBJECT: "PAGERDUTY_PREVIEW_SCHEDULE_OBJECT",
    /**
     * Renders a specific template for a given incident in pagerduty. this endpoint allows you to generate a formatted report or message based on a pre-defined template and the provided incident information. it's particularly useful for creating standardized incident reports, status updates, or notifications. the rendered template can incorporate details from the incident, a status update message, and any additional external data provided. use this endpoint when you need to generate consistent, formatted output for incident communication or documentation purposes. note that the template itself must be created and configured separately; this endpoint only handles the rendering process based on the template identified by the url parameter {id}.
     */
    RENDER_TEMPLATE_FOR_INCIDENT: "PAGERDUTY_RENDER_TEMPLATE_FOR_INCIDENT",
    /**
     * Retrieves a list of abilities or capabilities available in the pagerduty system. this endpoint allows users to query and understand the features and functionalities they can access or perform within pagerduty. it's particularly useful for determining the scope of actions available to the authenticated user or for checking the overall feature set of the pagerduty instance. the endpoint should be used when you need to discover or verify the available abilities, such as during initial setup, permission audits, or when planning integrations. it does not modify any data and is safe to call frequently.
     */
    RETRIEVE_ABILITIES_LIST: "PAGERDUTY_RETRIEVE_ABILITIES_LIST",
    /**
     * Retrieves detailed information about a specific ability (feature capability) associated with a pagerduty account using its unique identifier. this endpoint allows users to query the system for the status and details of a particular feature, such as 'teams' or 'incident management', to determine if it's available and potentially get additional configuration information. it's particularly useful when you need to verify the presence of a specific functionality or gather more details about a feature's implementation in your account. the endpoint should not be used to modify abilities or retrieve information about multiple abilities simultaneously.
     */
    RETRIEVE_ABILITY_BY_ID: "PAGERDUTY_RETRIEVE_ABILITY_BY_ID",
    /**
     * Retrieves a list of services associated with a specific automation action in pagerduty. this endpoint allows users to fetch all services that are linked to a particular automation action, providing insights into which components or systems are affected by the automated process. it's useful for auditing automation configurations, understanding the scope of automated actions, and managing incident response workflows. the endpoint should be used when you need to review or verify the services connected to an automation action, but it won't provide details about the action itself or modify any existing configurations.
     */
    RETRIEVE_ACTION_SERVICES_BY_ID: "PAGERDUTY_RETRIEVE_ACTION_SERVICES_BY_ID",
    /**
     * Retrieves the active event orchestration configuration for a specific pagerduty service. this endpoint allows you to fetch the current rules and settings that determine how incidents are created and routed for the specified service. use this when you need to review or audit the active event handling setup for a particular service. it's particularly useful for understanding how incoming events are being processed and managed within your pagerduty environment. this endpoint focuses solely on the active configuration and does not provide historical data or allow modifications to the orchestration rules.
     */
    RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID: "PAGERDUTY_RETRIEVE_ACTIVE_SERVICE_EVENT_BY_ID",
    /**
     * Retrieves detailed information about a specific addon installed on a pagerduty account. this endpoint allows users to fetch the current configuration, status, and other relevant details of an addon without modifying it. it's particularly useful for auditing installed addons, troubleshooting integration issues, or gathering information before making changes to an addon's setup. the endpoint returns a comprehensive view of the addon, which may include its type, version, configuration parameters, and current operational status. use this endpoint when you need to inspect or verify the details of a particular addon in your pagerduty environment.
     */
    RETRIEVE_ADDON_BY_ID: "PAGERDUTY_RETRIEVE_ADDON_BY_ID",
    /**
     * Retrieves the alert grouping settings for a specific configuration identified by its unique id in pagerduty. this endpoint allows users to access detailed information about how alerts are grouped for a particular service or team. it's useful for reviewing current grouping rules, understanding the logic behind incident correlation, and auditing alert management configurations. the endpoint should be used when you need to examine or verify the existing alert grouping settings, which can be crucial for optimizing incident response and reducing alert fatigue. it does not modify any settings and is intended for read-only operations.
     */
    RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID: "PAGERDUTY_RETRIEVE_ALERT_GROUPING_SETTINGS_BY_ID",
    /**
     * Retrieves a list of automation action invocations from the pagerduty incident management platform. this endpoint allows users to query and review the history of automated actions that have been executed within their pagerduty environment. it can be used to audit automation processes, track the frequency and timing of automated responses, and analyze the effectiveness of incident management workflows. the endpoint is particularly useful for administrators and devops teams who need to monitor and optimize their automated incident response strategies. note that while this endpoint provides historical data, it does not trigger new automated actions or modify existing ones.
     */
    RETRIEVE_AUTOMATION_ACTION_INVOCATIONS: "PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATIONS",
    /**
     * Retrieves detailed information about a specific automation action invocation in pagerduty. this endpoint allows you to fetch the current state, results, and metadata of a previously executed automation action. it's particularly useful for tracking the progress of long-running automations, auditing past actions, or troubleshooting failed invocations. the endpoint should be used when you need to review the outcome of a specific automation run or gather data for reporting purposes. note that this endpoint only provides information about the invocation itself and does not allow modification of the automation action or re-running of the invocation.
     */
    RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID: "PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_INVOCATION_BY_ID",
    /**
     * Retrieves detailed information about a specific team associated with an automation actions runner in pagerduty. this endpoint is used to get insights into the relationship between a runner and a particular team, which is crucial for understanding access permissions and management of automation tasks. it should be used when you need to confirm team associations, verify permissions, or gather team-specific details related to a runner. the endpoint does not modify any data and is primarily for information retrieval purposes. note that this endpoint focuses on a single team-runner relationship and does not provide a comprehensive list of all teams associated with a runner or vice versa.
     */
    RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS: "PAGERDUTY_RETRIEVE_AUTOMATION_ACTION_RUNNER_TEAMS",
    /**
     * Retrieves information about how a specific automation action is associated with a particular service in pagerduty. this endpoint allows users to query the relationship between an automation action and a service, providing details on how the action is configured or applied within the context of the specified service. it's useful for understanding the automation setup for incident management and response processes for a given service. the endpoint requires both the automation action id and the service id to fetch the relevant association details.
     */
    RETRIEVE_AUTOMATION_SERVICE_ACTION: "PAGERDUTY_RETRIEVE_AUTOMATION_SERVICE_ACTION",
    /**
     * The listbusinessservices endpoint retrieves a comprehensive list of all business services configured within a pagerduty account. this get operation provides an overview of the critical business functions monitored and managed through pagerduty's incident management platform. it's particularly useful for obtaining a holistic view of an organization's service hierarchy, conducting audits, or integrating service information with other systems. while the endpoint doesn't appear to offer filtering or pagination options, it serves as a fundamental tool for understanding the scope of services under management. users should be aware that the response may include a large amount of data for accounts with numerous business services, potentially impacting response times for accounts with extensive service catalogs.
     */
    RETRIEVE_BUSINESS_SERVICES: "PAGERDUTY_RETRIEVE_BUSINESS_SERVICES",
    /**
     * Retrieves detailed information about a specific business service in pagerduty using its unique identifier. this endpoint allows users to fetch the current configuration, settings, and metadata associated with a particular business service. it should be used when detailed information about a single business service is needed, such as during service audits, configuration reviews, or when updating service information. the endpoint provides a comprehensive view of the service but does not include real-time incident data or historical performance metrics. it's particularly useful for integrations that need to sync or display business service information in external systems.
     */
    RETRIEVE_BUSINESS_SERVICE_BY_ID: "PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_BY_ID",
    /**
     * Retrieves the service dependencies for a specific business service in pagerduty. this endpoint allows you to fetch a list of services that are dependent on or related to the specified business service, helping to understand the interconnections within your incident management structure. use this when you need to analyze the impact of incidents on critical business functions or when planning incident response strategies. the endpoint provides a snapshot of the current dependency structure and does not include historical data or future planned changes to service relationships.
     */
    RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES: "PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_DEPENDENCIES",
    /**
     * Retrieves a list of impactors currently affecting business services in pagerduty. impactors are entities or events that have the potential to negatively impact the performance, availability, or functionality of one or more business services. this endpoint is essential for proactive incident management, risk assessment, and maintaining service reliability. use this endpoint to get a comprehensive view of potential threats to your business services, allowing you to prioritize your response and allocate resources effectively. the returned data can be used to identify patterns, anticipate cascading failures, and improve overall system resilience. while this endpoint provides valuable information about current impactors, it does not offer historical data or predictive analysis. it should be used in conjunction with other monitoring and analysis tools for a complete understanding of your service health and potential risks.
     */
    RETRIEVE_BUSINESS_SERVICE_IMPACTORS: "PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTORS",
    /**
     * Retrieves the impacts of a specific incident on business services within pagerduty. this endpoint allows users to assess the scope and severity of an ongoing incident by providing detailed information about which business services are affected and to what extent. it should be used when there's a need to understand the broader implications of an incident across the organization's critical operations. the tool is particularly useful for incident managers, stakeholders, and support teams who need to prioritize response efforts based on the impact severity. note that this endpoint only provides impact data for a single incident at a time and does not offer historical or aggregate impact information across multiple incidents.
     */
    RETRIEVE_BUSINESS_SERVICE_IMPACTS: "PAGERDUTY_RETRIEVE_BUSINESS_SERVICE_IMPACTS",
    /**
     * Retrieves detailed information about a specific change event in pagerduty using its unique identifier. this endpoint is crucial for tracking and auditing changes within your incident management workflow. it provides comprehensive data about a single change event, which may include the type of change, when it occurred, who initiated it, and its impact on related incidents or services. use this endpoint when you need to investigate the details of a particular change, such as during incident postmortems or when analyzing the effectiveness of change management processes. the endpoint is particularly useful for understanding the context and timeline of changes that may have affected your systems or services.
     */
    RETRIEVE_CHANGE_EVENT_BY_ID: "PAGERDUTY_RETRIEVE_CHANGE_EVENT_BY_ID",
    /**
     * Retrieves a list of change events from the pagerduty system within a specified time range. change events represent notifications or updates that occur within a pagerduty account, such as modifications to teams, services, or escalation policies. this endpoint is useful for monitoring and auditing changes in the pagerduty configuration, helping to track system modifications and ensure compliance with change management processes. the response typically includes details about each change event, such as the type of change, affected resources, timestamp, and the user who initiated the change. use this endpoint when you need to review recent changes, investigate system modifications, or generate reports on configuration updates within your pagerduty account.
     */
    RETRIEVE_CHANGE_EVENT_INFORMATION: "PAGERDUTY_RETRIEVE_CHANGE_EVENT_INFORMATION",
    /**
     * Retrieves the profile information of the currently authenticated user in the pagerduty system. this endpoint provides access to personal details, settings, and account information associated with the user making the api request. it's particularly useful for applications that need to display or utilize user-specific data without requiring additional input. the endpoint should be used when an application needs to fetch up-to-date information about the current user, such as their name, email, role, or other account-related details. note that this endpoint does not provide information about other users in the organization, nor does it allow for modifications to the user profile.
     */
    RETRIEVE_CURRENT_USER_INFO: "PAGERDUTY_RETRIEVE_CURRENT_USER_INFO",
    /**
     * Retrieves the tags associated with a specific entity in the pagerduty system. this endpoint allows you to fetch all tags that have been assigned to a particular resource, such as a user, team, service, or incident. it's useful for categorization, filtering, and organizing entities within pagerduty. the endpoint requires specifying both the entity type and its unique identifier to correctly locate the resource. this operation is read-only and does not modify any data.
     */
    RETRIEVE_ENTITY_TAGS_BY_ID: "PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID",
    /**
     * Retrieves the tags associated with a specific entity in pagerduty. this endpoint allows you to fetch all tags linked to a particular resource, such as an incident, service, user, team, or escalation policy. it's useful for understanding how resources are categorized and organized within your pagerduty account. the endpoint should be used when you need to review or analyze the tagging structure of a specific entity, which can aid in incident management, reporting, and integration with other systems. note that this endpoint only retrieves existing tags and does not modify them; separate endpoints are required for tag management operations.
     */
    RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE: "PAGERDUTY_RETRIEVE_ENTITY_TAGS_BY_ID_AND_TYPE",
    /**
     * Retrieves the router configuration for a specific event orchestration in pagerduty. this endpoint allows you to fetch detailed information about how incidents and events are routed within a particular event orchestration setup. use this endpoint when you need to understand or audit the current routing logic for an event orchestration, such as determining which teams or escalation policies are assigned to handle specific types of incidents. the returned data will include routing rules, conditions, and associated actions, but will not modify any existing configurations. this endpoint is particularly useful for incident response planning and optimization of event management workflows.
     */
    RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID: "PAGERDUTY_RETRIEVE_EVENT_ORCHESTRATION_ROUTER_BY_ID",
    /**
     * Retrieves detailed information about a specific extension in pagerduty. this endpoint allows users to fetch the configuration and status of an individual extension by providing its unique identifier. it is particularly useful when you need to review or verify the settings of a specific extension, such as its type, configuration parameters, or associated service. this endpoint should be used when detailed information about a known extension is required, but it cannot be used to list all extensions or modify extension settings.
     */
    RETRIEVE_EXTENSION_BY_ID: "PAGERDUTY_RETRIEVE_EXTENSION_BY_ID",
    /**
     * Retrieves a list of all extensions associated with the authenticated pagerduty account. extensions are additional features or integrations that enhance pagerduty's functionality, such as custom notification methods or third-party service connections. this endpoint is useful for auditing the extensions currently in use, planning integration strategies, or managing the account's extension ecosystem. it provides a comprehensive overview of all extensions without the need for specific query parameters. however, it does not allow for filtering or sorting of the results, so all data processing must be done client-side.
     */
    RETRIEVE_EXTENSION_LIST: "PAGERDUTY_RETRIEVE_EXTENSION_LIST",
    /**
     * Retrieves detailed information about a specific incident in pagerduty using its unique identifier. this endpoint allows users to access comprehensive data about an individual incident, including its current status, assigned responders, and related metadata. it is particularly useful for tracking the progress of an ongoing incident, reviewing historical incident data, or integrating incident details into external systems or reports. the endpoint should be used when specific incident information is needed, rather than for retrieving bulk or summarized incident data. note that this endpoint provides a snapshot of the incident at the time of the request and may not reflect real-time updates without subsequent api calls.
     */
    RETRIEVE_INCIDENT_BY_INCIDENT_ID: "PAGERDUTY_RETRIEVE_INCIDENT_BY_INCIDENT_ID",
    /**
     * Retrieves a list of custom fields associated with incidents in pagerduty. custom fields are additional data points that can be added to incidents to provide more detailed information tailored to specific organizational needs. this endpoint allows you to fetch all defined custom fields, which can be useful for understanding the structure of incident data, preparing for incident creation or updates, or auditing the current custom field configuration. the response will include details such as field names, types, and any predefined options for each custom field. use this endpoint when you need to review or work with the custom field definitions in your pagerduty account, such as when integrating with other systems or preparing reports that involve custom incident data.
     */
    RETRIEVE_INCIDENT_CUSTOM_FIELDS: "PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELDS",
    /**
     * Retrieves the custom field values associated with a specific incident in pagerduty. this endpoint allows users to access additional metadata that has been added to an incident, providing more context and enabling better incident management. it should be used when detailed information about an incident's custom fields is needed, such as for reporting, analysis, or integration with other systems. the endpoint returns only the custom field values and does not modify the incident or its fields.
     */
    RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES: "PAGERDUTY_RETRIEVE_INCIDENT_CUSTOM_FIELD_VALUES",
    /**
     * Retrieves the available field options for a specific custom field associated with incidents in pagerduty. this endpoint allows users to fetch the predefined set of values that can be assigned to a particular custom field, enabling efficient incident management and customization. use this endpoint when you need to populate dropdowns, validate input, or understand the possible values for a custom field in your incident management workflow. it's particularly useful for maintaining consistency in incident data and facilitating automated processes that interact with custom fields.
     */
    RETRIEVE_INCIDENT_FIELD_OPTIONS: "PAGERDUTY_RETRIEVE_INCIDENT_FIELD_OPTIONS",
    /**
     * Retrieves detailed information about a specific incident workflow in pagerduty. this endpoint allows users to fetch the configuration, steps, and other relevant details of an incident workflow based on its unique identifier. it is particularly useful when you need to review or audit the structure of an existing workflow, or when you want to display the workflow details in a user interface. the endpoint returns comprehensive information about the workflow, which may include its name, description, steps, triggers, and associated incident types. it should be used when specific information about a known incident workflow is required, rather than for listing or searching workflows.
     */
    RETRIEVE_INCIDENT_WORKFLOW_BY_ID: "PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_BY_ID",
    /**
     * Retrieves a list of triggers associated with incident workflows in pagerduty. this endpoint allows you to fetch information about the conditions or events that initiate automated incident response processes. use this endpoint when you need to review, audit, or manage the triggers configured for your incident workflows. it provides valuable insights into what events can start an incident workflow, helping in the optimization of incident management strategies. the endpoint returns details about each trigger, which may include its configuration, associated workflow, and activation criteria. note that this endpoint only provides information about existing triggers and does not allow for the creation or modification of triggers.
     */
    RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS: "PAGERDUTY_RETRIEVE_INCIDENT_WORKFLOW_TRIGGERS",
    /**
     * Retrieves detailed information about a specific integration associated with a particular service in pagerduty. this endpoint allows you to fetch the configuration and status of an integration, which can be crucial for understanding how external systems or tools are connected to your pagerduty service. use this when you need to review or troubleshoot a specific integration's settings within the context of a service. it's particularly useful for auditing your integrations or preparing for updates to your incident management workflow. note that this endpoint only provides read access to integration details and cannot be used to modify the integration.
     */
    RETRIEVE_INTEGRATION_BY_SERVICE_ID: "PAGERDUTY_RETRIEVE_INTEGRATION_BY_SERVICE_ID",
    /**
     * Retrieves the current license allocations for the pagerduty account. this endpoint provides an overview of how licenses are distributed across users, teams, or other entities within the organization. it should be used when you need to audit license usage, plan for license renewals, or manage resource allocation within your pagerduty account. the response likely includes details such as the total number of licenses, allocated licenses, and possibly information about which users or teams are using the licenses. this endpoint does not modify any license allocations; it is for informational purposes only. keep in mind that the response may be paginated for accounts with a large number of license allocations.
     */
    RETRIEVE_LICENSE_ALLOCATIONS: "PAGERDUTY_RETRIEVE_LICENSE_ALLOCATIONS",
    /**
     * Retrieves a list of services configured in the pagerduty account. this endpoint allows you to fetch details about various services set up for incident management and alerting. it's particularly useful for getting an overview of all services, their configurations, and associated teams or escalation policies. the endpoint supports filtering, sorting, and pagination to manage large sets of services efficiently. use this when you need to audit existing services, prepare for bulk updates, or integrate service information into other systems. note that the response may not include full details of each service, and separate api calls might be necessary to fetch comprehensive information for individual services.
     */
    RETRIEVE_LIST_OF_SERVICES: "PAGERDUTY_RETRIEVE_LIST_OF_SERVICES",
    /**
     * Retrieves detailed information about a specific log entry in the pagerduty system. this endpoint is used to access the complete record of an event or action that occurred within pagerduty, such as incident updates, user actions, or system changes. it's particularly useful for auditing purposes, investigating specific actions taken during incident management, or gathering detailed information about system activities. the endpoint returns a single log entry based on the provided id, allowing for precise tracking and analysis of individual events within the incident management lifecycle. note that this endpoint is not designed for real-time monitoring or bulk log retrieval; it's intended for accessing specific, historical log entries when detailed information about a particular event is required.
     */
    RETRIEVE_LOG_ENTRY_BY_ID: "PAGERDUTY_RETRIEVE_LOG_ENTRY_BY_ID",
    /**
     * Retrieves a list of maintenance windows from the pagerduty incident management platform. maintenance windows are scheduled periods during which alerts and notifications for specified services are suppressed to allow for system maintenance or updates without triggering unnecessary incidents. this endpoint should be used to get an overview of all maintenance windows, their schedules, and affected services. it supports filtering by team, service, and search query, as well as pagination for handling large result sets. the endpoint is particularly useful for reviewing upcoming maintenance schedules, auditing past maintenance windows, or integrating maintenance information into external systems or dashboards.
     */
    RETRIEVE_MAINTENANCE_WINDOWS: "PAGERDUTY_RETRIEVE_MAINTENANCE_WINDOWS",
    /**
     * Retrieves all notes associated with a specific incident in pagerduty. this endpoint allows users to access the complete history of comments, updates, and additional information added to an incident throughout its lifecycle. it is particularly useful for reviewing the incident's progress, understanding the actions taken, and gathering context for post-incident analysis. the endpoint should be used when detailed information about an incident's communication trail is needed, such as during incident reviews or when compiling reports. it does not provide real-time updates and may not include the most recent notes if called immediately after a new note is added due to potential api caching.
     */
    RETRIEVE_NOTES_FOR_INCIDENT: "PAGERDUTY_RETRIEVE_NOTES_FOR_INCIDENT",
    /**
     * Retrieves notifications from the pagerduty system. this endpoint allows users to fetch information about alerts, incidents, and other important notifications generated within the pagerduty platform. it's particularly useful for monitoring recent activity, tracking incident updates, or integrating pagerduty notifications into other systems. the endpoint likely supports filtering and sorting options to help users narrow down the results to relevant notifications. however, it's important to note that real-time notifications might not be immediately available through this endpoint, and there could be a slight delay between an event occurring and its notification being accessible via this api call.
     */
    RETRIEVE_NOTIFICATIONS: "PAGERDUTY_RETRIEVE_NOTIFICATIONS",
    /**
     * Retrieves detailed information about a specific on-call handoff notification rule for a given user in pagerduty. this endpoint is crucial for managing and reviewing the notification settings that govern how users are alerted during on-call responsibility transitions. it provides access to the configuration of rules that determine when and how a user is notified about upcoming on-call shifts or handoffs. this tool should be used when there's a need to inspect or audit the notification preferences for on-call transitions of a particular user. it's particularly useful for team leads or administrators who need to ensure smooth handoffs between team members during critical incident management periods.
     */
    RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE: "PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULE",
    /**
     * Retrieves the on-call handoff notification rules for a specific user in pagerduty. this endpoint allows you to fetch the configured rules that determine how and when a user is notified about on-call schedule transitions. it's particularly useful for understanding and auditing a user's notification preferences during shift changes or when responsibilities are transferred between team members. the retrieved rules may include settings for different notification methods (e.g., email, sms, push notifications) and timing preferences relative to the handoff. this endpoint should be used when you need to review or manage a user's on-call handoff communication settings, but it does not allow for modification of these rules.
     */
    RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES: "PAGERDUTY_RETRIEVE_ONCALL_HANDOFF_NOTIFICATION_RULES",
    /**
     * Retrieves the current on-call information for your pagerduty account. this endpoint provides a comprehensive view of who is currently on-call across various schedules and escalation policies. it's particularly useful for getting an overview of your organization's current on-call status, identifying who is responsible for incident response at any given time, and planning team availability. the endpoint supports filtering by users, escalation policies, and schedules, making it versatile for different querying needs. it also allows for pagination and including additional details like contact methods and schedule information. this tool should be used when you need to quickly assess the current on-call situation or gather data for on-call analytics. note that while it provides current and near-future on-call information, it may not be suitable for long-term scheduling or historical analysis beyond a 3-month window.
     */
    RETRIEVE_ONCALL_LIST: "PAGERDUTY_RETRIEVE_ONCALL_LIST",
    /**
     * Retrieves a list of past incidents related to a specific incident in pagerduty. this endpoint allows users to explore the historical context of an incident by fetching previous occurrences or related issues. it's particularly useful for identifying recurring problems, analyzing incident patterns, and improving overall incident management processes. the endpoint should be used when investigating the root cause of an incident or when compiling reports on incident history. note that this endpoint focuses on historical data and does not provide real-time incident information or updates to the current incident status.
     */
    RETRIEVE_PAST_INCIDENTS: "PAGERDUTY_RETRIEVE_PAST_INCIDENTS",
    /**
     * Retrieves the postmortem analysis for a specific post on a pagerduty status page. this endpoint allows users to access detailed information about an incident after it has been resolved, including root cause analysis, timeline of events, and lessons learned. it should be used when detailed information about the resolution of a specific incident is needed, particularly for review, documentation, or improvement purposes. the endpoint is valuable for teams conducting thorough post-incident reviews or for maintaining a knowledge base of past incidents and their resolutions. note that this endpoint only provides postmortem information and does not allow for modifications to the postmortem content.
     */
    RETRIEVE_POSTMORTEM_BY_ID: "PAGERDUTY_RETRIEVE_POSTMORTEM_BY_ID",
    /**
     * Retrieves detailed information about a specific response play in the pagerduty incident management system. this endpoint allows users to access the configuration and actions associated with a predefined response play, which is used to automate and streamline incident response processes. it's particularly useful when you need to review or audit the steps in a response play, or when preparing to update an existing response play. the endpoint returns comprehensive data about the response play, including its name, description, and the sequence of actions it performs during an incident.
     */
    RETRIEVE_RESPONSE_PLAY_BY_ID: "PAGERDUTY_RETRIEVE_RESPONSE_PLAY_BY_ID",
    /**
     * Retrieves detailed information about a specific ruleset in pagerduty using its unique identifier. this endpoint allows you to fetch the complete configuration and settings of a single ruleset, which is essential for understanding how incident responses are automated and managed. use this when you need to review, audit, or troubleshoot a particular ruleset's configuration. the response will include all relevant details such as the ruleset's name, type, routing keys, and associated rules. it's particularly useful when you need to examine the exact setup of a ruleset without making any changes. note that this endpoint only provides read access and cannot be used to modify the ruleset.
     */
    RETRIEVE_RULESET_BY_ID: "PAGERDUTY_RETRIEVE_RULESET_BY_ID",
    /**
     * Retrieves a list of rulesets from the pagerduty system. rulesets are collections of event rules that define how incidents are managed and alerts are configured. this endpoint allows you to view all available rulesets, which is crucial for understanding your incident management setup and making informed decisions about alert routing and event handling. use this endpoint when you need to audit your ruleset configurations, prepare for modifications to your incident management workflow, or simply need an overview of your current ruleset structure. the response will include details about each ruleset, such as its name, id, and potentially its associated rules, depending on the api version and configuration. this endpoint supports pagination to handle large numbers of rulesets efficiently.
     */
    RETRIEVE_RULESET_LIST: "PAGERDUTY_RETRIEVE_RULESET_LIST",
    /**
     * Retrieves all rules associated with a specific pagerduty service. this endpoint allows users to fetch the set of rules that define when and how incidents are triggered for a particular service. it's essential for understanding the current automation and alert routing setup for a given service. use this endpoint when you need to audit, review, or programmatically access the rule configurations for a service. the endpoint returns rule details but does not provide information about ongoing incidents or service status. it's particularly useful for integrations that need to sync or analyze rule configurations across multiple services or external systems.
     */
    RETRIEVE_RULES_FOR_SERVICE_ID: "PAGERDUTY_RETRIEVE_RULES_FOR_SERVICE_ID",
    /**
     * Retrieves a list of all rules associated with a specific ruleset in pagerduty. this endpoint is used to examine the configuration of event routing within a particular ruleset, allowing users to review and understand how incoming events are processed and handled. it's particularly useful for auditing, troubleshooting, or preparing to modify event handling logic. the endpoint returns details about each rule, likely including conditions, actions, and priorities, providing a comprehensive view of the ruleset's behavior. while it doesn't modify any data, it's an essential tool for managing and maintaining effective incident response workflows in pagerduty.
     */
    RETRIEVE_RULES_FROM_RULESET_BY_ID: "PAGERDUTY_RETRIEVE_RULES_FROM_RULESET_BY_ID",
    /**
     * Retrieves a specific rule associated with a particular service in pagerduty. this endpoint allows you to access detailed information about a single rule, including its configuration and conditions, within the context of a specific service. it is useful for reviewing, auditing, or troubleshooting notification workflows. the endpoint should be used when you need to examine the settings of a particular rule for a given service, but it will not modify or create new rules. note that this endpoint only provides information for a single rule and does not return a list of all rules for the service.
     */
    RETRIEVE_RULE_BY_SERVICE_ID: "PAGERDUTY_RETRIEVE_RULE_BY_SERVICE_ID",
    /**
     * Retrieves the audit records for a specific pagerduty schedule. this endpoint allows you to access a comprehensive log of all changes made to the specified schedule, including modifications to on-call rotations, time periods, and associated team members. it's particularly useful for compliance purposes, tracking historical changes, and understanding how the schedule has evolved over time. the returned data typically includes details such as the timestamp of each change, the user who made the modification, and the specific alterations made to the schedule.
     */
    RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID: "PAGERDUTY_RETRIEVE_SCHEDULE_AUDIT_RECORDS_BY_ID",
    /**
     * Retrieves detailed information about a specific schedule in pagerduty using its unique identifier. this endpoint is essential for viewing the configuration of an existing on-call schedule, including its name, time periods, rotation layers, and associated users or teams. use this when you need to inspect a schedule's current setup, verify on-call assignments, or gather data for schedule management tasks. the endpoint provides a comprehensive view of a single schedule but does not allow modifications; for updates, a separate put request would be required.
     */
    RETRIEVE_SCHEDULE_BY_ID: "PAGERDUTY_RETRIEVE_SCHEDULE_BY_ID",
    /**
     * Retrieves the list of overrides for a specific schedule in pagerduty. this endpoint allows users to fetch temporary modifications to the regular on-call rotation, providing insight into any manual adjustments made to the schedule. it's particularly useful for auditing changes, understanding the current state of a schedule, or verifying that overrides have been correctly applied. the endpoint should be used when there's a need to review or analyze schedule modifications, especially in cases of incident management or when planning future on-call rotations. note that this endpoint only provides information about existing overrides and does not allow for creating, modifying, or deleting overrides.
     */
    RETRIEVE_SCHEDULE_OVERRIDE_BY_ID: "PAGERDUTY_RETRIEVE_SCHEDULE_OVERRIDE_BY_ID",
    /**
     * Retrieves the audit records for a specific pagerduty service. this endpoint allows you to fetch a historical log of all configuration changes made to the service, providing transparency and accountability in incident management processes. use this endpoint when you need to review modifications, track who made changes, or investigate the evolution of a service's configuration over time. the audit records are typically sorted by execution time from newest to oldest, offering a chronological view of alterations. while this endpoint is valuable for compliance and debugging purposes, it does not provide real-time incident data or current service configurations.
     */
    RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID: "PAGERDUTY_RETRIEVE_SERVICE_AUDIT_RECORDS_BY_ID",
    /**
     * Retrieves detailed information about a specific pagerduty service using its unique identifier. this endpoint allows users to access configuration details, integration settings, and other relevant information for a particular service within their pagerduty account. it's essential for managing and monitoring the status of individual services, which are core components in pagerduty's incident management system. use this endpoint when you need to inspect or verify the configuration of a specific service, such as before making updates or troubleshooting issues related to that service. the endpoint provides a comprehensive view of the service but does not allow modifications; for updates, a separate put or patch endpoint would be required.
     */
    RETRIEVE_SERVICE_BY_ID: "PAGERDUTY_RETRIEVE_SERVICE_BY_ID",
    /**
     * Retrieves change events associated with a specific pagerduty service. this endpoint allows you to fetch informational updates about recent changes such as code deploys, system configuration modifications, and other significant alterations related to the specified service. it's particularly useful for tracking and auditing changes that might impact service performance or reliability. the endpoint should be used when you need to review the history of changes for a service, investigate potential causes of incidents, or maintain a log of service modifications for compliance purposes. note that this endpoint focuses solely on change events and does not provide real-time incident data or service configuration details.
     */
    RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID: "PAGERDUTY_RETRIEVE_SERVICE_CHANGE_EVENTS_BY_ID",
    /**
     * Retrieves the service impacts associated with a specific status dashboard in pagerduty. this endpoint allows users to fetch detailed information about how incidents are affecting various services within the context of a particular status dashboard. it should be used when there's a need to assess the current operational status and impact of incidents on services for a given dashboard. the endpoint provides real-time insights into service disruptions, helping teams quickly identify and prioritize issues. note that this endpoint only returns data for a single status dashboard at a time and does not provide historical impact data.
     */
    RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS: "PAGERDUTY_RETRIEVE_SERVICE_IMPACTS_FROM_STATUS_DASHBOARDS",
    /**
     * Retrieves a list of services associated with a specific status page in pagerduty. this endpoint is used to fetch detailed information about the services that are being monitored and displayed on a particular status page. it's particularly useful when you need to review or update the services shown on a status page, or when integrating status page information with other systems. the endpoint returns service details such as names, current statuses, and any relevant metadata, allowing for comprehensive monitoring and management of services within the context of a status page.
     */
    RETRIEVE_SERVICE_STATUS_BY_ID: "PAGERDUTY_RETRIEVE_SERVICE_STATUS_BY_ID",
    /**
     * Retrieves detailed information about a specific service associated with a particular status page in pagerduty. this endpoint is used to fetch the current status, configuration, and other relevant details of a service displayed on a status page. it's particularly useful for monitoring the health and state of individual components within a larger system. the endpoint should be used when you need up-to-date information about a specific service's status or when integrating pagerduty's status information into other monitoring or reporting tools. note that this endpoint only provides information for services that are configured to be displayed on the specified status page.
     */
    RETRIEVE_SERVICE_STATUS_PAGE: "PAGERDUTY_RETRIEVE_SERVICE_STATUS_PAGE",
    /**
     * Retrieves the current set of standards defined in the pagerduty account. standards in pagerduty refer to the policies and best practices for incident response and alerting. this endpoint allows users to fetch the configured standards, which may include response time goals, escalation policies, and other operational guidelines. it's particularly useful for administrators and team leads who need to review or audit the current incident management standards across their organization. the endpoint does not allow for modification of standards; it's strictly for retrieval purposes. users should note that the response may include all standards across the account, which could be extensive for large organizations.
     */
    RETRIEVE_STANDARDS_LIST: "PAGERDUTY_RETRIEVE_STANDARDS_LIST",
    /**
     * Retrieves the standards scores for a specific resource in pagerduty. this endpoint allows users to fetch performance or compliance metrics for a given resource type (such as incidents, services, or teams) identified by its unique id. the scores provide insights into how well the resource is meeting predefined standards or best practices within the pagerduty platform. this tool is particularly useful for assessing the effectiveness of incident management processes, service performance, or team efficiency. it should be used when seeking to evaluate or benchmark the performance of specific pagerduty resources against established standards. note that the exact scoring criteria and scale may vary depending on the resource type and pagerduty's current scoring methodology.
     */
    RETRIEVE_STANDARDS_SCORES: "PAGERDUTY_RETRIEVE_STANDARDS_SCORES",
    /**
     * Retrieves the standards scores for a specified resource type in pagerduty. this endpoint allows users to access performance metrics and evaluations based on predefined standards for different components of their incident management system. it's useful for assessing the effectiveness of various resources against established benchmarks, helping teams identify areas for improvement and maintain high-quality incident response processes. the endpoint should be used when seeking quantitative insights into the performance of specific pagerduty resource types against industry or internal standards.
     */
    RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE: "PAGERDUTY_RETRIEVE_STANDARDS_SCORES_BY_RESOURCE_TYPE",
    /**
     * Retrieves a list of status dashboards and their associated information from the pagerduty system. this endpoint provides a comprehensive overview of the current operational status, performance metrics, and health indicators across various systems or services monitored by pagerduty. it's particularly useful for obtaining a high-level view of system status without diving into specific incidents or alerts. the endpoint should be used when you need to quickly assess the overall health of your monitored systems, identify any ongoing issues or incidents, and get a snapshot of key performance indicators. it's ideal for regular system checks, creating status pages, or integrating system health information into other monitoring tools. while this endpoint offers a broad view of system status, it may not provide detailed information about specific incidents or historical data. for in-depth analysis of particular issues or long-term trends, you may need to use other specialized endpoints.
     */
    RETRIEVE_STATUS_DASHBOARDS_INFORMATION: "PAGERDUTY_RETRIEVE_STATUS_DASHBOARDS_INFORMATION",
    /**
     * Retrieves detailed information about a specific pagerduty status dashboard using its url slug. this endpoint allows users to fetch the current state, components, and other relevant data associated with a particular status dashboard. it's useful for integrating pagerduty's status information into external monitoring systems or custom dashboards. the endpoint should be used when you need to programmatically access up-to-date information about a known status dashboard. note that this endpoint only provides information for existing dashboards and does not create or modify dashboard data.
     */
    RETRIEVE_STATUS_DASHBOARD_BY_SLUG: "PAGERDUTY_RETRIEVE_STATUS_DASHBOARD_BY_SLUG",
    /**
     * Retrieves the current statuses for a specified pagerduty status page. this endpoint allows users to fetch real-time status information for a given status page, providing up-to-date details on service availability and any ongoing issues. it's particularly useful for monitoring the current state of services, especially during incident management processes. the endpoint should be used when there's a need to programmatically access the latest status information for a specific status page, enabling integration with other systems or dashboards for enhanced visibility of service health.
     */
    RETRIEVE_STATUS_PAGES_STATUS: "PAGERDUTY_RETRIEVE_STATUS_PAGES_STATUS",
    /**
     * Retrieves all posts associated with a specific status page in pagerduty. this endpoint allows users to fetch updates, messages, and status information that have been posted to a particular status page. it's useful for monitoring the history of service status updates, incident communications, or maintenance notices for a given status page. the endpoint returns a list of posts, likely including details such as post content, timestamp, and author information. it should be used when you need to review or display the communication history related to service statuses or incidents tracked on a specific pagerduty status page. note that this endpoint only provides read access to existing posts and cannot be used to create, modify, or delete posts.
     */
    RETRIEVE_STATUS_PAGE_POST: "PAGERDUTY_RETRIEVE_STATUS_PAGE_POST",
    /**
     * Retrieves the list of severities associated with a specific status page in pagerduty. this endpoint allows users to fetch the current severity levels configured for a particular status page, which is crucial for understanding the criticality of incidents or service statuses displayed on that page. it should be used when there's a need to programmatically access or display the severity information for a given status page, such as in monitoring dashboards or integrated incident management systems. the endpoint provides only the severity data and does not modify any existing configurations.
     */
    RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID: "PAGERDUTY_RETRIEVE_STATUS_PAGE_SEVERITIES_BY_ID",
    /**
     * Retrieves a list of subscriptions associated with a specific pagerduty status page. this endpoint allows users to fetch all current subscriptions for a given status page, enabling them to monitor who is receiving updates about the status page. it should be used when you need to review or audit the subscription list for a particular status page. the endpoint provides subscription details but does not allow for modification of subscriptions. note that the response may be paginated for status pages with a large number of subscriptions.
     */
    RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID: "PAGERDUTY_RETRIEVE_STATUS_PAGE_SUBSCRIPTION_BY_ID",
    /**
     * Retrieves a list of all tags currently used within the pagerduty account. this endpoint provides a comprehensive view of the tags used for categorization and labeling of incidents across the system. it should be used when you need an overview of all available tags for incident management, reporting, or when setting up new incident routing rules. the endpoint returns all tags without any filtering, which may result in a large dataset for accounts with extensive tag usage. it does not provide information about which incidents or entities are associated with each tag.
     */
    RETRIEVE_TAGS: "PAGERDUTY_RETRIEVE_TAGS",
    /**
     * Retrieves detailed information about a specific tag in the pagerduty system using its unique identifier. this endpoint allows users to fetch the properties and metadata associated with a particular tag, which can be useful for incident management, reporting, and organization within pagerduty. it should be used when detailed information about a specific tag is needed, such as its name, description, or any custom attributes. the endpoint will not modify or create tags; it is purely for retrieval of existing tag data. note that the response will only include information for tags that the authenticated user has permission to view.
     */
    RETRIEVE_TAG_BY_ID: "PAGERDUTY_RETRIEVE_TAG_BY_ID",
    /**
     * Retrieves the audit records for a specific team in pagerduty. this endpoint allows users to access a detailed history of configuration changes made to the team, including modifications to team members, escalation policies, and other team-related settings. it's particularly useful for security auditing, compliance reporting, and tracking the evolution of team structures over time. the endpoint returns a list of audit records, each likely containing information such as the type of change, who made the change, and when it occurred. use this endpoint when you need to review or analyze the historical changes of a pagerduty team's configuration.
     */
    RETRIEVE_TEAM_AUDIT_RECORDS: "PAGERDUTY_RETRIEVE_TEAM_AUDIT_RECORDS",
    /**
     * Retrieves detailed information about a specific team in pagerduty based on the provided team id. this endpoint allows users to fetch comprehensive data about a team, including its members, roles, and configurations. it is particularly useful for applications that need to display or process team information, such as team management dashboards or reporting tools. the endpoint returns all available details about the specified team, providing a snapshot of its current state within the pagerduty system.
     */
    RETRIEVE_TEAM_DETAILS_BY_ID: "PAGERDUTY_RETRIEVE_TEAM_DETAILS_BY_ID",
    /**
     * The listteams endpoint retrieves a list of teams within a pagerduty account. it provides an overview of all teams or a filtered subset based on the optional query parameter. this endpoint is useful for obtaining team information, such as team names and ids, which can be used in other api calls or for organizational purposes. the response typically includes basic details about each team, allowing for further actions or more detailed queries on specific teams. use this endpoint when you need to survey the teams in your pagerduty organization, prepare for team management tasks, or integrate team information into other systems. note that while it returns a list of teams, it may not provide exhaustive details for each team; for comprehensive information on a specific team, a separate api call might be necessary.
     */
    RETRIEVE_TEAM_LIST: "PAGERDUTY_RETRIEVE_TEAM_LIST",
    /**
     * Retrieves detailed information about a specific technical service and its dependencies within the pagerduty incident management platform. this endpoint is used to fetch comprehensive data about a single technical service, including its relationships with other services, its role in the overall service dependency structure, and any associated metadata. it's particularly useful for understanding the impact and connections of a specific service within an organization's technical infrastructure. the endpoint should be used when detailed information about a particular technical service's dependencies and relationships is needed, such as during incident analysis, service mapping, or system architecture reviews. it does not modify any data and is safe for frequent use in monitoring or dashboard applications.
     */
    RETRIEVE_TECHNICAL_SERVICE_DETAILS: "PAGERDUTY_RETRIEVE_TECHNICAL_SERVICE_DETAILS",
    /**
     * Retrieves the available fields for pagerduty templates. this endpoint provides a comprehensive list of all possible fields that can be used when creating or modifying templates within the pagerduty platform. it is particularly useful for developers and administrators who need to understand the structure and available options for template customization. the endpoint should be used when building interfaces for template management, automating template creation, or gathering information about the configurable aspects of pagerduty templates. it does not modify any existing templates or create new ones; it only provides information about the available fields.
     */
    RETRIEVE_TEMPLATE_FIELDS: "PAGERDUTY_RETRIEVE_TEMPLATE_FIELDS",
    /**
     * Retrieves a list of unrouted events for a specific event orchestration in pagerduty. this endpoint is used to identify and review events that have not yet been assigned or processed within the designated event orchestration workflow. it's particularly useful for monitoring the efficiency of your incident management process and ensuring that no critical events are left unattended. the endpoint should be used when you need to audit your event handling, identify potential bottlenecks in your orchestration setup, or manually intervene with unprocessed events. note that this endpoint only provides information about unrouted events and does not allow for direct manipulation of these events.
     */
    RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID: "PAGERDUTY_RETRIEVE_UNROUTED_EVENT_ORCHESTRATION_BY_ID",
    /**
     * Retrieves a list of users associated with a specific pagerduty schedule. this endpoint is essential for managing on-call rotations and understanding who is responsible for incident response during different time periods. it should be used when you need to view all users assigned to a particular schedule, which is helpful for auditing, planning, or modifying on-call arrangements. the endpoint returns basic user information and does not provide detailed schedule timeslots or user availability. it's particularly useful for larger teams with complex rotation schedules to ensure proper coverage and fair distribution of on-call responsibilities.
     */
    RETRIEVE_USERS_BY_SCHEDULE_ID: "PAGERDUTY_RETRIEVE_USERS_BY_SCHEDULE_ID",
    /**
     * Retrieves a list of users from the pagerduty system. this endpoint allows you to fetch information about multiple users in your pagerduty account, which can be useful for user management, generating reports, or integrating user data with other systems. the response typically includes basic information about each user, such as their id, name, email, and role. use query parameters to filter, paginate, or search for specific users. this endpoint is ideal for bulk operations or when you need an overview of your pagerduty user base. note that the results may be paginated, so multiple calls might be necessary to retrieve all users for large accounts.
     */
    RETRIEVE_USERS_LIST: "PAGERDUTY_RETRIEVE_USERS_LIST",
    /**
     * Retrieves the audit records for a specific user in the pagerduty system. this endpoint allows you to access a historical log of activities and changes associated with the user, providing valuable insights for compliance, security, and troubleshooting purposes. the audit records may include actions such as login attempts, configuration changes, and incident-related activities performed by or affecting the specified user. use this endpoint when you need to investigate user activities, track changes, or generate reports for auditing and compliance requirements. note that the response may be paginated, and additional query parameters might be available to filter or sort the results, although these are not explicitly defined in the given schema.
     */
    RETRIEVE_USER_AUDIT_RECORDS_BY_ID: "PAGERDUTY_RETRIEVE_USER_AUDIT_RECORDS_BY_ID",
    /**
     * Retrieves detailed information about a specific user in the pagerduty platform using their unique identifier. this endpoint is used to fetch user account details, such as contact information, role assignments, and notification rules. it's particularly useful when you need to access or verify a user's current information within your incident management workflow. the endpoint returns a comprehensive user profile, but it does not provide information about the user's current on-call status or incident history.
     */
    RETRIEVE_USER_BY_ID: "PAGERDUTY_RETRIEVE_USER_BY_ID",
    /**
     * Retrieves all contact methods associated with a specific user in pagerduty. this endpoint allows you to fetch the various ways a user can be contacted during an incident, such as email addresses, phone numbers, or push notifications to mobile devices. it's particularly useful when you need to review or update a user's notification preferences or ensure that the correct contact information is on file. the endpoint returns a list of contact methods, likely including details such as the type of contact method, the specific address or number, and possibly the status (e.g., verified, primary). it should be used when setting up new users, auditing user information, or integrating pagerduty with other communication systems. note that this endpoint only provides read access to contact methods and cannot be used to add, modify, or remove contact information.
     */
    RETRIEVE_USER_CONTACT_METHODS_VIA_ID: "PAGERDUTY_RETRIEVE_USER_CONTACT_METHODS_VIA_ID",
    /**
     * Retrieves the license information for a specific user in the pagerduty system. this endpoint allows you to check the current licensing status, type, and any associated details for a given user. it should be used when you need to verify a user's license, such as during account management or when troubleshooting access issues. the endpoint will return details about the user's current license, but it does not provide information about other aspects of the user's account or permissions. keep in mind that access to this endpoint may be restricted to users with appropriate administrative privileges.
     */
    RETRIEVE_USER_LICENSE_INFORMATION: "PAGERDUTY_RETRIEVE_USER_LICENSE_INFORMATION",
    /**
     * Retrieves a specific notification rule for a given user in pagerduty. this endpoint allows you to fetch detailed information about how and when a particular user receives alerts and notifications. it's useful for auditing user preferences, troubleshooting notification issues, or when you need to review or potentially update a user's notification settings. the endpoint returns the configuration of the specified rule, including contact methods, time-based restrictions, and urgency levels. it should be used when you need to examine or verify the settings of a particular notification rule for a user, but it won't provide an overview of all rules or allow modifications to the rule.
     */
    RETRIEVE_USER_NOTIFICATION_RULE: "PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULE",
    /**
     * Retrieves the notification rules for a specific user in pagerduty. this endpoint allows you to fetch all configured notification rules associated with a given user, providing insight into how and when the user receives alerts for incidents. it's particularly useful for auditing a user's notification setup, troubleshooting notification issues, or programmatically managing user preferences. the endpoint returns a list of notification rules, likely including details such as contact methods, time-based restrictions, and urgency levels for each rule. it should be used when you need to review or analyze a user's current notification configuration within your incident management workflow.
     */
    RETRIEVE_USER_NOTIFICATION_RULES: "PAGERDUTY_RETRIEVE_USER_NOTIFICATION_RULES",
    /**
     * Retrieves a specific status update notification rule for a given user in pagerduty. this endpoint allows you to fetch detailed information about how and when a particular user receives notifications for status updates on incidents. it's useful for auditing notification settings, troubleshooting notification issues, or programmatically managing user preferences. the endpoint should be used when you need to review or verify the configuration of a single notification rule for a specific user. it does not modify any settings and is read-only in nature.
     */
    RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE: "PAGERDUTY_RETRIEVE_USER_STATUS_UPDATE_NOTIFICATION_RULE",
    /**
     * Retrieves detailed information about a specific vendor integrated with pagerduty. this endpoint allows users to access comprehensive data about a vendor, including its name, type of integration, capabilities, and current status within the pagerduty ecosystem. it's particularly useful when you need to verify vendor details, check integration status, or gather information for reporting and auditing purposes. the endpoint returns a single vendor object and should be used when specific vendor information is required, rather than for listing multiple vendors.
     */
    RETRIEVE_VENDOR_BY_ID: "PAGERDUTY_RETRIEVE_VENDOR_BY_ID",
    /**
     * Retrieves a list of all webhook subscriptions associated with the authenticated pagerduty account. this endpoint allows users to view and manage their existing webhook configurations, which are used to receive real-time notifications about incidents, alerts, and other pagerduty events. it's particularly useful for auditing current integrations, troubleshooting notification issues, or preparing to update webhook settings. the response likely includes details such as webhook urls, event types they're subscribed to, and their current status. this endpoint should be used when you need an overview of all active webhook integrations but won't provide the actual event data sent to these webhooks.
     */
    RETRIEVE_WEBHOOK_SUBSCRIPTIONS: "PAGERDUTY_RETRIEVE_WEBHOOK_SUBSCRIPTIONS",
    /**
     * This endpoint allows you to send responder requests for a specific incident in pagerduty. it is used to request additional help or notify specific users or escalation policies about an ongoing incident that requires attention. the endpoint creates a new responder request associated with the incident identified by the {id} path parameter. it's particularly useful when you need to quickly engage additional resources or escalate an incident to ensure timely resolution. this tool should be used when there's a need to bring in more responders or escalate an incident beyond its current assigned team. it's important to note that this endpoint doesn't resolve the incident itself but facilitates the process of engaging additional help.
     */
    SEND_RESPONDER_REQUESTS_FOR_INCIDENTS: "PAGERDUTY_SEND_RESPONDER_REQUESTS_FOR_INCIDENTS",
    /**
     * This endpoint updates the impact status of a specific incident on a particular business service in pagerduty. it allows you to either set a business service as impacted by an incident or remove the impact, which in turn affects the propagation of the impact to other supported services. use this endpoint when you need to manually adjust the impact of an incident on your business services, either to escalate its importance or to mark it as resolved for specific services. this tool is particularly useful for managing the scope and severity of incidents across your organization's service hierarchy. note that updating the impact status will have cascading effects on services supported by the targeted business service.
     */
    SET_BUSINESS_SERVICE_IMPACT_STATUS: "PAGERDUTY_SET_BUSINESS_SERVICE_IMPACT_STATUS",
    /**
     * Sets the global priority threshold for business services in pagerduty, determining which incidents can impact these services based on their priority level. this endpoint allows you to configure the minimum incident priority required to affect business services by specifying an 'id' and 'order' for the threshold. use this when you need to adjust how incidents of different priorities impact your business services. note that incidents below this threshold won't impact business services unless manually added using a separate endpoint. this configuration is crucial for managing service impacts and prioritizing incident responses effectively.
     */
    SET_GLOBAL_PRIORITY_THRESHOLD: "PAGERDUTY_SET_GLOBAL_PRIORITY_THRESHOLD",
    /**
     * This endpoint allows you to snooze a specific incident in pagerduty for a defined duration. it temporarily pauses alerts and notifications for the incident, after which it automatically returns to an active state. use this when you need to temporarily suppress notifications for an incident that's being worked on or requires a planned delay in response. the snooze action is particularly useful for managing alert fatigue, handling false positives, or delaying responses during maintenance windows. note that snoozing an incident does not resolve it; it simply delays further notifications until the snooze period ends or is manually cleared.
     */
    SNOOZE_INCIDENT_BY_DURATION: "PAGERDUTY_SNOOZE_INCIDENT_BY_DURATION",
    /**
     * This endpoint allows you to subscribe users or teams to a specific business service in pagerduty. it enables you to add multiple subscribers in a single request, streamlining the process of setting up notification recipients for critical incidents. use this endpoint when you need to configure who receives alerts and updates for a particular business service. the endpoint is particularly useful for initial setup or bulk updates to subscriber lists. note that this operation adds new subscribers but does not remove existing ones; to remove subscribers, you would need to use a separate endpoint.
     */
    SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES: "PAGERDUTY_SUBSCRIBE_ENTITIES_TO_BUSINESS_SERVICES",
    /**
     * Subscribes specified users or teams to receive status updates for a particular incident in pagerduty. this endpoint allows you to add multiple subscribers at once, ensuring that relevant parties are kept informed about the incident's progress. it's particularly useful when you need to involve additional stakeholders or support teams during an ongoing incident. the endpoint requires the incident id and a list of subscribers, each defined by their unique id and type (user or team). use this when you want to expand the notification list for critical updates about an incident, but be mindful not to oversubscribe, as it may lead to notification fatigue.
     */
    SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES: "PAGERDUTY_SUBSCRIBE_ENTITIES_TO_INCIDENT_STATUS_UPDATES",
    /**
     * Creates notification subscriptions for a specific user in pagerduty. this endpoint allows you to subscribe a user to multiple incidents or business services in a single api call. it's particularly useful for setting up customized notification preferences for users, ensuring they receive alerts for specific entities they need to monitor. the endpoint supports bulk subscription, allowing you to subscribe a user to multiple entities simultaneously, improving efficiency in managing user notifications. note that this endpoint only creates subscriptions and does not modify or delete existing ones.
     */
    SUBSCRIBE_TO_USER_NOTIFICATIONS: "PAGERDUTY_SUBSCRIBE_TO_USER_NOTIFICATIONS",
    /**
     * This endpoint unsubscribes specified users or teams from receiving notifications for a particular business service in pagerduty. it allows bulk unsubscription of multiple entities in a single api call. the endpoint should be used when you need to remove one or more users or teams from the notification list of a specific business service, such as when reorganizing team responsibilities or updating notification preferences. it's important to note that this action is immediate and irreversible, so care should be taken to ensure the correct entities are being unsubscribed. the endpoint doesn't provide a way to confirm or preview the changes before they're applied, so it's recommended to double-check the subscriber information before making the api call.
     */
    UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY: "PAGERDUTY_UNSUBSCRIBE_BUSINESS_SERVICE_ENTITY",
    /**
     * Unsubscribes specified users or teams from receiving status updates for a particular incident in pagerduty. this endpoint is used when certain entities no longer need to be notified about changes to an incident's status. it allows for bulk unsubscription of multiple users and/or teams in a single api call. the endpoint requires the incident id in the url path and a list of subscribers to unsubscribe in the request body. it's important to note that this action cannot be undone through the api, and re-subscription would require a separate api call if needed later.
     */
    UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES: "PAGERDUTY_UNSUBSCRIBE_FROM_INCIDENT_STATUS_UPDATES",
    /**
     * Unsubscribes a team from notifications for specific incidents or business services in pagerduty. this endpoint is used to stop a team from receiving alerts and updates about particular entities. it's particularly useful for managing notification overload or when a team is no longer responsible for certain incidents or services. the endpoint requires a list of subscribables (entities to unsubscribe from), each identified by a unique id and type. at least one subscribable must be provided, and all items in the list must be unique. this operation cannot be undone through this endpoint, so use it cautiously.
     */
    UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS: "PAGERDUTY_UNSUBSCRIBE_TEAM_NOTIFICATION_SUBSCRIPTIONS",
    /**
     * This endpoint allows unsubscribing a user from notifications for specific incidents or business services in pagerduty. it's used to modify a user's notification preferences, removing them from receiving updates about particular entities. the endpoint accepts a list of subscribable entities, each identified by an id and type, and removes the user's subscription to these entities. this is particularly useful for managing notification overload or when a user no longer needs updates about certain incidents or services. the endpoint requires at least one subscribable entity and ensures that all entries in the request are unique.
     */
    UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS: "PAGERDUTY_UNSUBSCRIBE_USER_NOTIFICATION_SUBSCRIPTIONS",
    /**
     * Updates an existing add-on in pagerduty with new properties. this endpoint allows you to modify the type, name, and source url of a specific add-on identified by its unique id. it's used when you need to change the configuration or appearance of an add-on that's already integrated into your pagerduty instance. the endpoint updates only the mutable fields and returns the full updated add-on object, including read-only fields. note that this operation cannot modify the add-on's id or other system-generated fields like 'summary', 'self', or 'html url'.
     */
    UPDATE_ADD_ON_BY_ID: "PAGERDUTY_UPDATE_ADD_ON_BY_ID",
    /**
     * This endpoint allows you to update an existing alert grouping setting in pagerduty. alert grouping settings define how alerts are automatically grouped into incidents, helping to streamline incident management and reduce noise. you can modify various aspects of the grouping configuration, including the grouping type (content-based or intelligent), time window, and the fields used for grouping. this tool is particularly useful when you need to refine your alert grouping strategy to improve incident response efficiency. note that some features, such as intelligent grouping, may only be available on certain pagerduty plans. when using this endpoint, ensure that you provide all required fields in the request body, as partial updates are not supported.
     */
    UPDATE_ALERT_GROUPING_SETTINGS_BY_ID: "PAGERDUTY_UPDATE_ALERT_GROUPING_SETTINGS_BY_ID",
    /**
     * Updates the status of a specific alert within an incident in pagerduty. this endpoint allows you to modify an alert's status, primarily to mark it as resolved. it's crucial for managing the lifecycle of alerts and incidents in pagerduty's incident management system. use this when you need to programmatically update the state of an alert, typically as part of an automated incident resolution process or when integrating external systems with pagerduty. note that while the endpoint accepts various fields in the request body, most are read-only, with the 'status' field being the primary modifiable attribute.
     */
    UPDATE_ALERT_IN_INCIDENT: "PAGERDUTY_UPDATE_ALERT_IN_INCIDENT",
    /**
     * Update an incident type. incident types are a feature which will allow customers to categorize incidents, such as a security incident, a major incident, or a fraud incident. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#incident) scoped oauth requires: `incident types.write`
     */
    UPDATE_AN_INCIDENT_TYPE: "PAGERDUTY_UPDATE_AN_INCIDENT_TYPE",
    /**
     * This endpoint allows you to update an existing automation action runner in pagerduty. it is used to modify the properties of a runner, such as its name, description, and, for runbook runners, the runbook server connection details. the endpoint supports updating both sidecar and runbook type runners, distinguished by the 'runner type' discriminator. use this endpoint when you need to change the configuration of an existing runner, such as updating its name for better identification or modifying the runbook server details. note that while you can update most properties, you cannot change a runner's type (e.g., from sidecar to runbook) using this endpoint.
     */
    UPDATE_AUTOMATION_RUNNER_INFO: "PAGERDUTY_UPDATE_AUTOMATION_RUNNER_INFO",
    /**
     * Update a custom field for an incident type. custom fields (cf) are a feature which will allow customers to extend incidents with their own custom data, to provide additional context and support features such as customized filtering, search and analytics. custom fields can be applied to different incident types. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.write`
     */
    UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE: "PAGERDUTY_UPDATE_A_CUSTOM_FIELD_FOR_AN_INCIDENT_TYPE",
    /**
     * Update a field option for a custom field. <!-- theme: warning --> > ### early access > this endpoint is in early access and may change at any time. you must pass in the x-early-access header to access it. scoped oauth requires: `custom fields.write`
     */
    UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD: "PAGERDUTY_UPDATE_A_FIELD_OPTION_FOR_A_CUSTOM_FIELD",
    /**
     * Update an existing incident workflow trigger scoped oauth requires: `incident workflows.write`
     */
    UPDATE_A_TRIGGER: "PAGERDUTY_UPDATE_A_TRIGGER",
    /**
     * This endpoint allows you to update an existing business service in pagerduty. it is used to modify the details of a specific service, such as its name, description, point of contact, or the team responsible for it. this is particularly useful when service information changes or when reassigning responsibilities within your organization. the endpoint requires the unique identifier of the business service and accepts a json object with the updated information. it's important to note that you only need to include the fields you want to update; omitted fields will retain their current values.
     */
    UPDATE_BUSINESS_SERVICE_BY_ID: "PAGERDUTY_UPDATE_BUSINESS_SERVICE_BY_ID",
    /**
     * Updates an existing change event in pagerduty. this endpoint allows you to modify certain attributes of a change event, such as its summary or custom details. it's used when you need to amend or add information to a previously created change event, perhaps due to new developments or corrections. the endpoint requires the change event's unique id and accepts an object with the fields to be updated. note that many fields (e.g., timestamp, services, integration) are read-only and cannot be modified through this endpoint. use this when you need to refine or expand upon the information in an existing change event, but be aware of its limitations in terms of which fields can be updated.
     */
    UPDATE_CHANGE_EVENT_BY_ID: "PAGERDUTY_UPDATE_CHANGE_EVENT_BY_ID",
    /**
     * This endpoint updates an existing custom field for incidents in pagerduty. it allows you to modify the display name, description, and default value of a custom field identified by its unique field id. use this endpoint when you need to change the properties of a custom field, such as renaming it, updating its description, or setting a new default value. the update maintains data integrity by enforcing specific constraints on field properties, ensuring consistency across the pagerduty incident management system. note that updating a custom field affects all incidents that use this field, so use this endpoint cautiously in production environments.
     */
    UPDATE_CUSTOM_FIELD_DISPLAY_NAME: "PAGERDUTY_UPDATE_CUSTOM_FIELD_DISPLAY_NAME",
    /**
     * Updates a specific field option for a custom field in pagerduty's incident management system. this endpoint allows you to modify the value of an existing field option, providing flexibility in managing and customizing incident fields. it's particularly useful when you need to rename or adjust the available options for a custom field in response to changing operational needs or terminology updates. the endpoint ensures that only mutable properties are updated while preserving system-managed attributes like creation timestamps. use this when you need to refine or correct the options available for incident classification or categorization within your pagerduty workflow.
     */
    UPDATE_CUSTOM_FIELD_OPTION: "PAGERDUTY_UPDATE_CUSTOM_FIELD_OPTION",
    /**
     * Updates an existing escalation policy in pagerduty with new settings and rules. this endpoint allows you to modify various aspects of an escalation policy, including its name, description, escalation rules, associated services, and team. it's used when you need to change how incidents are escalated and handled within your organization. the updated policy details are provided in the request body, and the policy to be updated is identified by its id in the url path. this tool is essential for maintaining and adjusting incident response workflows in pagerduty to ensure optimal team responsiveness and incident management.
     */
    UPDATE_ESCALATION_POLICY_BY_ID: "PAGERDUTY_UPDATE_ESCALATION_POLICY_BY_ID",
    /**
     * This endpoint updates an existing escalation policy for a specific team in pagerduty. it modifies incident escalation rules within the team context, crucial for maintaining up-to-date response workflows. use this when changes to the team's escalation process are needed, such as adjusting notification rules or modifying escalation steps. note that it only updates the team-policy association, not the global policy configuration.
     */
    UPDATE_ESCALATION_POLICY_FOR_TEAM: "PAGERDUTY_UPDATE_ESCALATION_POLICY_FOR_TEAM",
    /**
     * Updates an existing event orchestration in pagerduty. this endpoint allows you to modify the name, description, and team ownership of a specific orchestration identified by its id. it's used to refine and adjust your incident management workflow by updating the configuration of how events are processed and routed. this tool is particularly useful when you need to change the purpose, ownership, or details of an orchestration without creating a new one. note that certain properties like integrations, routing information, and timestamps are read-only and cannot be modified through this endpoint. use this when you need to update an orchestration's metadata or reassign it to a different team.
     */
    UPDATE_EVENT_ORCHESTRATION_BY_ID: "PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_BY_ID",
    /**
     * This endpoint allows you to update an existing cache variable within a specific event orchestration in pagerduty. cache variables are used to store and manipulate dynamic data extracted from events, enabling complex event routing and automation. you can modify the cache variable's name, configuration, conditions, and disabled state. the endpoint is particularly useful when you need to adjust how event data is processed or stored within your incident management workflows. it's important to note that this operation will overwrite the existing cache variable properties, so you should include all desired fields in your update request, not just the ones you want to change.
     */
    UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE: "PAGERDUTY_UPDATE_EVENT_ORCHESTRATION_CACHE_VARIABLE",
    /**
     * This endpoint allows you to update an existing event rule within a specified ruleset in pagerduty. event rules define conditions for matching events and actions to take when those conditions are met. you can modify various aspects of the rule, including its active status, matching conditions, time frames, variables, position in the ruleset, and associated actions. this endpoint is particularly useful for fine-tuning your incident management workflow, adjusting how events are processed, and controlling alert behavior. it's important to note that changes made through this endpoint will immediately affect how incoming events are handled, so careful consideration should be given to the potential impact on your alerting system.
     */
    UPDATE_EVENT_RULE_BY_ID: "PAGERDUTY_UPDATE_EVENT_RULE_BY_ID",
    /**
     * This endpoint allows you to update an existing event rule for a specific service in pagerduty. event rules are used to define how incoming events should be processed, including conditions for matching events and actions to take when a match occurs. you can modify various aspects of the rule, such as its conditions, time-based restrictions, variables for extraction, and actions to perform on matching events. this endpoint is particularly useful for fine-tuning event management processes, adjusting rule priorities, or temporarily disabling rules without removing them entirely. it provides granular control over event handling, allowing for sophisticated automation and incident management workflows.
     */
    UPDATE_EVENT_RULE_FOR_SERVICE: "PAGERDUTY_UPDATE_EVENT_RULE_FOR_SERVICE",
    /**
     * Updates an existing extension in pagerduty. this endpoint allows you to modify the configuration of a previously created extension, such as a webhook or custom integration. you can update properties like the extension's name, endpoint url, associated objects, and custom configuration. this is useful for maintaining and adjusting integrations as your operational needs change. the endpoint requires the extension's id in the url path and accepts a json payload with the updated extension details. it's important to note that some fields, like the extension's id and type, are read-only and cannot be modified through this endpoint.
     */
    UPDATE_EXTENSION_BY_ID: "PAGERDUTY_UPDATE_EXTENSION_BY_ID",
    /**
     * Update the global orchestration for an event orchestration. global orchestration rules allows you to create a set of event rules. these rules evaluate against all events sent to an event orchestration. when a matching rule is found, it can modify and enhance the event and can route the event to another set of global rules within this orchestration for further processing. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#event-orchestrations) scoped oauth requires: `event orchestrations.write`
     */
    UPDATE_GLOBAL_ORCHESTRATION: "PAGERDUTY_UPDATE_GLOBAL_ORCHESTRATION",
    /**
     * This endpoint allows you to update the status of multiple alerts associated with a specific incident in pagerduty. it is particularly useful for bulk operations when you need to resolve or update the status of several alerts simultaneously within the context of a single incident. the endpoint accepts an array of alert objects, each containing the necessary information for the update. it's important to note that this endpoint modifies existing alerts and cannot be used to create new alerts or incidents. use this when you need to efficiently manage and update the state of multiple alerts tied to an ongoing incident.
     */
    UPDATE_INCIDENT_ALERTS: "PAGERDUTY_UPDATE_INCIDENT_ALERTS",
    /**
     * The updateincident endpoint allows you to modify various attributes of an existing incident in pagerduty's incident management system. this put operation enables users to update incident status, priority, assignments, escalation levels, and other key properties. it's particularly useful for reflecting the current state of an incident, reassigning responsibilities, or adjusting the incident's urgency and escalation path. the endpoint should be used when there are significant changes to an incident that need to be reflected in the system, such as acknowledging the incident, marking it as resolved, or changing its priority. it's important to note that this endpoint updates an existing incident and does not create new incidents. care should be taken when modifying critical fields like status or escalation policy, as these changes can significantly impact the incident management workflow.
     */
    UPDATE_INCIDENT_BY_ID: "PAGERDUTY_UPDATE_INCIDENT_BY_ID",
    /**
     * This endpoint updates custom field values for a specific incident in pagerduty. it allows you to modify or add custom fields to provide additional context or information about the incident. the endpoint is particularly useful when you need to update incident metadata dynamically, such as changing the environment, priority, or any other custom attributes associated with the incident. it supports various data types for field values, including boolean, numeric, string, array, date-time, and uri formats, providing flexibility in storing different types of information. this operation is idempotent, meaning repeated identical requests will not create additional changes beyond the initial request. however, be cautious when updating fields, as this will overwrite existing values for the specified fields.
     */
    UPDATE_INCIDENT_CUSTOM_FIELD_VALUES: "PAGERDUTY_UPDATE_INCIDENT_CUSTOM_FIELD_VALUES",
    /**
     * This endpoint allows for bulk updating of multiple pagerduty incidents in a single api call. it can be used to modify various attributes of incidents such as status, priority, assignments, and more. this is particularly useful for automating incident management processes, batch resolving or acknowledging incidents, or updating incident details en masse. the endpoint accepts an array of incident objects, each containing the necessary updates, allowing for efficient management of multiple incidents simultaneously. it's important to note that while many fields are optional, each incident object must include the 'id' and 'type' fields for proper identification and processing.
     */
    UPDATE_INCIDENT_DETAILS: "PAGERDUTY_UPDATE_INCIDENT_DETAILS",
    /**
     * This endpoint updates an existing incident workflow in pagerduty by its unique identifier. it allows you to modify various aspects of the workflow, including its name, description, associated team, and the sequence of steps to be executed during an incident. the primary use case is to refine or adjust incident response processes by altering the workflow's configuration. this is particularly useful when incident management practices need to be updated based on new requirements or lessons learned from previous incidents. the endpoint provides granular control over each step in the workflow, allowing for precise tuning of automated actions and their inputs. however, it's important to note that modifying a workflow may impact ongoing or future incident responses, so changes should be made thoughtfully and tested thoroughly before implementation in a production environment.
     */
    UPDATE_INCIDENT_WORKFLOW: "PAGERDUTY_UPDATE_INCIDENT_WORKFLOW",
    /**
     * Updates an existing integration for a specific pagerduty service. this endpoint allows you to modify the configuration of an integration, including its type, name, and various settings related to email processing for email-based integrations. it's particularly useful for adjusting how incoming data (especially emails) is processed and turned into incidents. use this endpoint when you need to change the behavior of an existing integration, such as updating email parsing rules, changing incident creation criteria, or modifying email filters. the endpoint requires the service id and integration id in the url path, and expects a comprehensive integration object in the request body. note that some fields like 'id', 'created at', and 'html url' are read-only and cannot be modified through this endpoint.
     */
    UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID: "PAGERDUTY_UPDATE_INTEGRATION_BY_ID_AND_INTEGRATION_ID",
    /**
     * This endpoint updates the label (name) of an integration associated with a specific event orchestration in pagerduty. it allows users to rename integrations for better organization and clarity within their incident management workflow. the endpoint should be used when there's a need to change how an integration is identified within the pagerduty system, such as after a service rename or to improve naming conventions. it's important to note that this endpoint only updates the label of the integration and does not modify any other properties or configurations of the integration or event orchestration.
     */
    UPDATE_INTEGRATION_LABEL: "PAGERDUTY_UPDATE_INTEGRATION_LABEL",
    /**
     * Updates the channel information for a specific log entry in pagerduty. this endpoint allows you to modify the details of how notifications are delivered for a particular log entry, while maintaining the original channel type. it's useful for refining or correcting the notification settings of an existing log entry. the endpoint requires the log entry id in the url path and accepts a json payload with updated channel information. note that while you can update the channel details, you cannot change the channel type, which must match the existing value.
     */
    UPDATE_LOG_ENTRY_CHANNEL: "PAGERDUTY_UPDATE_LOG_ENTRY_CHANNEL",
    /**
     * Updates an existing maintenance window in pagerduty's incident management system. this endpoint allows you to modify the details of a scheduled maintenance period, including its start and end times, affected services, and description. it's used to adjust planned maintenance activities, ensuring that incidents are not created for specified services during the defined timeframe. the endpoint requires the maintenance window's unique id and accepts a json object with the updated information. it's particularly useful for extending or shortening maintenance periods, changing the list of affected services, or updating the window's description in response to changing maintenance requirements.
     */
    UPDATE_MAINTENANCE_WINDOW_BY_ID: "PAGERDUTY_UPDATE_MAINTENANCE_WINDOW_BY_ID",
    /**
     * This endpoint updates an existing on-call handoff notification rule for a specific user in pagerduty. it allows you to modify the notification delay, handoff type, and contact method for the rule. use this endpoint when you need to change how and when a user is notified about upcoming on-call shifts or when they are going off-call. the endpoint requires both the user id and the specific rule id in the url path. you can update the notification delay (in minutes), the type of handoff (both, oncall, or offcall), and the preferred contact method for the notification. this endpoint is particularly useful for adjusting notification preferences as team structures or individual availability changes.
     */
    UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE: "PAGERDUTY_UPDATE_ONCALL_HANDOFF_NOTIFICATION_RULE",
    /**
     * Updates the configuration of an existing event orchestration router in pagerduty. this endpoint allows you to modify the rules and routing logic for incoming events, determining how they are directed to specific services. it's used to refine and adjust your incident management workflow by updating conditions, actions, and catch-all behavior for event routing. the update is comprehensive, meaning any omitted rules or details will be deleted from the existing configuration. use this endpoint when you need to make changes to your event routing strategy or when adding new services or conditions to your orchestration setup.
     */
    UPDATE_ORCHESTRATION_ROUTER_DETAILS: "PAGERDUTY_UPDATE_ORCHESTRATION_ROUTER_DETAILS",
    /**
     * Updates an existing response play in pagerduty's incident management system. this endpoint allows you to modify various aspects of a response play, including its name, description, associated team, subscribers, responders, runnability, and conference details. use this when you need to alter the behavior or configuration of an existing response play to better suit your incident response processes. the update is performed by specifying the response play's unique identifier and providing the updated information in the request body. this endpoint is particularly useful for refining your incident management automation based on evolving team structures, communication preferences, or response strategies.
     */
    UPDATE_RESPONSE_PLAY_BY_ID: "PAGERDUTY_UPDATE_RESPONSE_PLAY_BY_ID",
    /**
     * Updates an existing ruleset in the pagerduty incident management system. this endpoint allows you to modify the name of a ruleset or change its team association. it's used when you need to adjust the configuration of a specific ruleset, such as renaming it for better clarity or reassigning it to a different team. the endpoint requires the ruleset's unique id and accepts updates to the name and team fields. it's important to note that other fields like routing keys, creation details, and update history are read-only and cannot be modified through this call. this endpoint is particularly useful for maintaining and organizing rulesets as your incident management needs evolve.
     */
    UPDATE_RULESET_BY_ID: "PAGERDUTY_UPDATE_RULESET_BY_ID",
    /**
     * The updateschedule endpoint modifies an existing on-call schedule in pagerduty. it updates the schedule's name, time zone, description, and layers. each layer defines a rotation pattern for on-call duties. use this to adjust rotations, add/remove users, change time zones, or modify restrictions. note: this replaces the entire schedule configuration, so include all desired layers and settings, even if only changing part of the schedule.
     */
    UPDATE_SCHEDULE_BY_ID: "PAGERDUTY_UPDATE_SCHEDULE_BY_ID",
    /**
     * Updates an existing service in pagerduty with the provided configuration. this endpoint allows you to modify various aspects of a service, such as its name, description, escalation policy, incident urgency rules, and alert grouping settings. use this when you need to change the behavior or properties of an existing service. the endpoint requires the service id and accepts a 'service' object containing the updated configuration. note that some properties (like 'id' and 'created at') are read-only and cannot be modified. certain advanced features, such as alert grouping and auto-pause notifications, may only be available on specific pagerduty plans.
     */
    UPDATE_SERVICE_BY_ID: "PAGERDUTY_UPDATE_SERVICE_BY_ID",
    /**
     * This endpoint updates the active status of a specific service orchestration in pagerduty. it allows you to activate or deactivate a service orchestration by setting its 'active' status. use this endpoint when you need to change the operational state of a service orchestration, such as during maintenance periods or when adjusting your incident management workflow. the endpoint requires the service id in the url path and accepts a json body with the 'active' boolean parameter. it's important to note that changing the active status may affect how incidents are routed and managed for the associated service, so use this endpoint judiciously and in accordance with your organization's incident management policies.
     */
    UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS: "PAGERDUTY_UPDATE_SERVICE_ORCHESTRATION_ACTIVE_STATUS",
    /**
     * Updates an existing standard in the pagerduty incident management platform. this endpoint allows you to modify various attributes of a standard, including its active status, filtering criteria, description, and the technical services it applies to. use this when you need to adjust the scope or behavior of an existing standard, such as enabling or disabling it, refining its application using regex patterns, or updating the list of included or excluded services. the changes made through this endpoint will affect how the standard is applied to your incident management processes, potentially impacting alerting and response workflows for the associated services.
     */
    UPDATE_STANDARD_BY_ID: "PAGERDUTY_UPDATE_STANDARD_BY_ID",
    /**
     * Updates an existing post update on a pagerduty status page. this endpoint allows you to modify the details of a specific post update, including its message, status, severity, impacted services, and notification settings. use this when you need to provide new information about an ongoing incident, change the status or severity of an issue, or update the list of affected services. it's particularly useful for keeping your audience informed about the progress of incident resolution or service status changes. the endpoint requires a comprehensive 'post update' object that encapsulates all the update details, ensuring that all necessary information is provided in a structured manner.
     */
    UPDATE_STATUS_PAGE_POST: "PAGERDUTY_UPDATE_STATUS_PAGE_POST",
    /**
     * Creates or updates a post update on a specific pagerduty status page. this endpoint allows you to add new information or modify existing updates related to an incident or maintenance event. use this when you need to communicate changes in status, provide additional details, or update the severity of an ongoing situation. the post update can include a custom message, current status, severity level, and list of impacted services. you can also control whether subscribers should be notified and optionally schedule future updates. this tool is essential for maintaining clear and timely communication with stakeholders during incidents or planned maintenance periods. note that this endpoint does not create new status page posts; it only adds updates to existing posts.
     */
    UPDATE_STATUS_PAGE_POST_INFO: "PAGERDUTY_UPDATE_STATUS_PAGE_POST_INFO",
    /**
     * Updates or creates a postmortem for a specific post on a pagerduty status page. this endpoint allows users to add detailed analysis and insights about an incident after its resolution. it's primarily used for communicating the cause, impact, and lessons learned from an incident to stakeholders and subscribers. the postmortem can include rich text content for comprehensive explanations. users can control whether subscribers are notified about the postmortem update, making it flexible for both major updates and minor edits. this endpoint is crucial for maintaining transparency and improving incident management processes.
     */
    UPDATE_STATUS_PAGE_POST_POSTMORTEM: "PAGERDUTY_UPDATE_STATUS_PAGE_POST_POSTMORTEM",
    /**
     * This endpoint allows you to update an existing status page post on a specific pagerduty status page. it is used to modify the details of a post, such as its title, type (incident or maintenance), and timing information. the endpoint is particularly useful for updating the status of ongoing incidents or adjusting the details of planned maintenance activities. when using this endpoint, ensure that all required fields are provided, including the post type, title, and associated status page information. note that the starts at and ends at fields are only applicable and required for maintenance-type posts; for incident posts, these should be set to null.
     */
    UPDATE_STATUS_PAGE_POST_RESOURCE: "PAGERDUTY_UPDATE_STATUS_PAGE_POST_RESOURCE",
    /**
     * This endpoint allows you to update an existing team's information in pagerduty. it is used to modify team properties such as name, description, and access permissions (public/private). the endpoint should be used when you need to change team details or adjust team visibility within the organization. it's important to note that this endpoint can only modify mutable fields; read-only properties like 'id', 'summary', 'self', and 'html url' cannot be changed. when updating a team, ensure you provide all required fields, even if they haven't changed, to avoid unintended modifications to the team structure.
     */
    UPDATE_TEAM_BY_ID: "PAGERDUTY_UPDATE_TEAM_BY_ID",
    /**
     * The updatetemplate endpoint allows you to modify an existing status update template in pagerduty. this tool is used to customize notification templates for incident status updates, enabling consistent and efficient communication during incident management. it supports updating various aspects of the template, including its name, description, and content for different notification channels such as email and sms. this endpoint is particularly useful when you need to refine or adjust your communication strategy for incident updates. note that while you can update multiple fields, you cannot change the template type from 'status update', as it's currently the only supported type.
     */
    UPDATE_TEMPLATE_BY_ID: "PAGERDUTY_UPDATE_TEMPLATE_BY_ID",
    /**
     * Update a service orchestration. a service orchestration allows you to create a set of event rules. the service orchestration evaluates events sent to this service against each of its rules, beginning with the rules in the "start" set. when a matching rule is found, it can modify and enhance the event and can route the event to another set of rules within this service orchestration for further processing. for more information see the [api concepts document](../../api-reference/zg9joji3ndc5nzc-api-concepts#event-orchestrations) scoped oauth requires: `services.write`
     */
    UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE: "PAGERDUTY_UPDATE_THE_SERVICE_ORCHESTRATION_FOR_A_SERVICE",
    /**
     * Updates the unrouted orchestration rules for a specific event orchestration in pagerduty. this endpoint allows you to define how events that don't match any service-specific rules should be handled. it's used to create a fallback mechanism for event routing and manipulation, ensuring that all incoming events are processed appropriately. the update is comprehensive, meaning any omitted rules or rule details from the request will be deleted from the existing configuration. use this endpoint when you need to modify the global handling of unrouted events, such as changing default severities, updating event summaries, or implementing new routing logic for unmatched events.
     */
    UPDATE_UNROUTED_ORCHESTRATION_RULES: "PAGERDUTY_UPDATE_UNROUTED_ORCHESTRATION_RULES",
    /**
     * This endpoint allows updating an existing user's information in pagerduty. it is used to modify various attributes of a user's profile, including their name, email, time zone, role, and other details. the endpoint requires the user's id in the url path and accepts a json object containing the updated user information in the request body. it's particularly useful for maintaining up-to-date user records, changing user roles, or updating contact information. note that some fields, such as teams and contact methods, are read-only and cannot be modified through this endpoint.
     */
    UPDATE_USER_INFORMATION: "PAGERDUTY_UPDATE_USER_INFORMATION",
    /**
     * Updates a specific status update notification rule for a pagerduty user. this endpoint allows you to modify how a user receives notifications about incident status changes. it's used to change the contact method (e.g., email, phone, push notification, or sms) for a particular notification rule. this is useful for adjusting user preferences or updating contact information. the endpoint requires the user's id and the specific notification rule id in the url path, ensuring precise updates to the intended rule.
     */
    UPDATE_USER_NOTIFICATION_RULE_BY_ID: "PAGERDUTY_UPDATE_USER_NOTIFICATION_RULE_BY_ID",
    /**
     * Updates the role of a specific user within a pagerduty team. this endpoint allows you to modify a user's permissions and responsibilities by changing their role in the team structure. use this when you need to promote, demote, or adjust a team member's access level. the new role affects the user's ability to view, respond to, or manage incidents within the team context. note that this operation only changes the user's role for the specified team and does not affect their roles in other teams or their global account permissions.
     */
    UPDATE_USER_ROLE_ON_TEAM: "PAGERDUTY_UPDATE_USER_ROLE_ON_TEAM",
    /**
     * Update an existing workflow integration connection. scoped oauth requires: `workflow integrations:connections.write`
     */
    UPDATE_WORKFLOW_INTEGRATION_CONNECTION: "PAGERDUTY_UPDATE_WORKFLOW_INTEGRATION_CONNECTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PAGERDUTY".
 */
export type PAGERDUTY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PAGERDUTY".
 */
export type PAGERDUTY_TRIGGER_EVENTS = {}
