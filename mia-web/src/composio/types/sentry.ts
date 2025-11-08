// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENTRY's SENTRY_ACCESS_PROJECT_INFORMATION tool input.
 */
type SENTRY_ACCESS_PROJECT_INFORMATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_ACCESS_PROJECT_INFORMATION tool output.
 */
type SENTRY_ACCESS_PROJECT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Dictionary with project details, including ID, name, slug, platform, creation date, and other settings.
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
 * Type of SENTRY's SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL tool input.
 */
type SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the user to invite or add to the organization.
   */
  email?: string;
  /**
   * Org Role
   * @description Primary organization-level role. `billing`: Manages payment/compliance. `member`: Views events/data. `manager`: Manages teams, projects, membership. `owner`: Unrestricted access. `admin`: Edits global integrations, manages projects/teams. Note: The `admin` role may have plan-specific restrictions; consider `manager` or `teamRoles`.
   * @default member
   * @enum {string}
   */
  orgRole: "billing" | "member" | "manager" | "owner" | "admin";
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the member will be added.
   */
  organization_id_or_slug?: string;
  /**
   * Reinvite
   * @description If `True`, resends an invitation to a user previously invited but who has not yet accepted.
   */
  reinvite?: boolean;
  /**
   * Send Invite
   * @description If `True`, an invitation email is sent to the user. Set to `False` to add the member without an email notification.
   * @default true
   */
  sendInvite: boolean;
  /**
   * Team Roles
   * @description List of team-specific role assignments. Common roles: `contributor` (views/acts on issues, may add members per org settings) and `admin` (full team/project management).
   * @default []
   */
  teamRoles: Record<string, never>[];
};

/**
 * Type of SENTRY's SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL tool output.
 */
type SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the organization member who was added or invited, such as their ID, email, role, and status.
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
 * Type of SENTRY's SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID tool input.
 */
type SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to be added to or removed from the user's Sentry account. Ensure this is a valid email format.
   */
  email?: string;
  /**
   * User Id
   * @description The unique identifier of the Sentry user (e.g., numeric ID or 'self') for whom the email address is being managed.
   */
  user_id?: string;
};

/**
 * Type of SENTRY's SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID tool output.
 */
type SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing Sentry's response. This typically reflects the updated state of the user's email addresses or the status of the operation. For instance, it might contain a list of all current emails for the user (possibly nested under a key like 'emails') or details of the specific email that was managed.
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
 * Type of SENTRY's SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION tool input.
 */
type SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION_INPUT = {
  /**
   * Member Id
   * @description ID of the existing organization member to be added to the team.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization. Slugs are typically lowercase and use hyphens.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The ID or slug of the team to which the member will be added. Slugs are typically lowercase and use hyphens.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION tool output.
 */
type SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Contains data on the operation's outcome, which varies if the member was newly added, an access request was generated, or the member was already on the team.
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
 * Type of SENTRY's SENTRY_ADD_TEAM_TO_PROJECT tool input.
 */
type SENTRY_ADD_TEAM_TO_PROJECT_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization. This organization contains both the project and the team.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry project. Access will be granted to this project.
   */
  project_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry team that will be granted access to the project.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_ADD_TEAM_TO_PROJECT tool output.
 */
type SENTRY_ADD_TEAM_TO_PROJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the Sentry project, reflecting the addition of the team.
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
 * Type of SENTRY's SENTRY_CREATE_DASHBOARD_WITH_WIDGETS tool input.
 */
type SENTRY_CREATE_DASHBOARD_WITH_WIDGETS_INPUT = {
  /**
   * End
   * Format: date-time
   * @description Absolute end datetime (ISO 8601) for time range; 'start' must also be set for custom absolute range.
   */
  end?: string;
  /**
   * Environment
   * @description Environment names (e.g., 'production') to filter data; if empty/null, all environments included.
   */
  environment?: string[];
  /**
   * Filters
   * @description Additional key-value filters (Sentry search syntax for keys) for the dashboard.
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Id
   * @description Optional client-specified unique dashboard identifier; Sentry generates one if omitted.
   */
  id?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization where the dashboard will be created.
   */
  organization_id_or_slug?: string;
  /**
   * Period
   * @description Default relative time range (e.g., '24h', '7d', 'auto'); 'auto' is often 14 days. Overridden if 'start' and 'end' are provided.
   */
  period?: string;
  /**
   * Projects
   * @description Project IDs to scope dashboard data; if empty/null, may apply to all accessible projects based on org settings.
   */
  projects?: number[];
  /**
   * Start
   * Format: date-time
   * @description Absolute start datetime (ISO 8601) for time range; 'end' must also be set for custom absolute range.
   */
  start?: string;
  /**
   * Title
   * @description Title for the new dashboard.
   */
  title?: string;
  /**
   * Utc
   * @description If true, time range is UTC; otherwise, defaults to user's local time or organization settings.
   */
  utc?: boolean;
  /**
   * Widgets
   * @description List of widget configurations defining appearance, data queries, and layout.
   */
  widgets?: {
      /**
       * Description
       * @description Optional description for the widget.
       */
      description?: string;
      /**
       * Display Type
       * @description Visual presentation format for the widget's data.
       * @enum {string}
       */
      display_type?: "line" | "area" | "stacked_area" | "bar" | "table" | "big_number" | "top_n";
      /**
       * Id
       * @description Unique identifier for the widget.
       */
      id?: string;
      /**
       * Interval
       * @description Time granularity for data aggregation, e.g., '5m', '1h', '1d'.
       */
      interval?: string;
      /**
       * Layout
       * @description Widget's position and size on the dashboard grid (e.g., `x, y, w, h, minH`), example: `{'x': 0, 'y': 0, 'w': 4, 'h': 2}`.
       */
      layout?: {
          [key: string]: unknown;
      };
      /**
       * Limit
       * @description Maximum data points or items to display, relevant for 'table' or 'top_n' types.
       */
      limit?: number;
      /**
       * Queries
       * @description List of queries defining the data to be displayed or processed by this widget.
       */
      queries?: {
          /**
           * Aggregates
           * @description Aggregate functions to apply, e.g., `p95(transaction.duration)`.
           */
          aggregates?: string[];
          /**
           * Columns
           * @description Fields or tags to group results by, e.g., `['project', 'release']`.
           */
          columns?: string[];
          /**
           * Conditions
           * @description Sentry search conditions to filter data, e.g., `'environment:production has:error'`.
           */
          conditions?: string;
          /**
           * Field Aliases
           * @description Aliases for fields, for display in tables or charts.
           */
          field_aliases?: string[];
          /**
           * Fields
           * @description Fields to retrieve, e.g., `['transaction', 'count()']`.
           */
          fields?: string[];
          /**
           * Id
           * @description Unique identifier for the query.
           */
          id?: string;
          /**
           * Is Hidden
           * @description If true, query results might not be directly displayed but used for calculations or other queries.
           */
          is_hidden?: boolean;
          /**
           * Name
           * @description Name for the query, useful for identification if multiple queries are present.
           */
          name?: string;
          /**
           * On  Demand  Extraction  Enabled
           * @description Enable on-demand metric extraction; use with caution due to potential costs/performance implications.
           */
          on__demand__extraction__enabled?: boolean;
          /**
           * On  Demand  Extraction  Extraction  State
           * @description The current state of on-demand metric extraction for this query.
           */
          on__demand__extraction__extraction__state?: string;
          /**
           * On Demand Extraction Disabled
           * @description Explicitly disable on-demand metric extraction for this query.
           */
          on_demand_extraction_disabled?: boolean;
          /**
           * Orderby
           * @description Field or aggregate to sort results by; prefix with `-` for descending, e.g., `-count()`.
           */
          orderby?: string;
          /**
           * Selected Aggregate
           * @description Index of the aggregate from the 'aggregates' list to be primarily used or displayed.
           */
          selected_aggregate?: number;
      }[];
      /**
       * Thresholds
       * @description Thresholds to visually alter the widget (e.g., color-coding), example: `{'critical': 100, 'warning': 50}`.
       */
      thresholds?: {
          [key: string]: unknown;
      };
      /**
       * Title
       * @description Title of the widget.
       */
      title?: string;
      /**
       * Widget Type
       * @description Sentry product area or data type the widget focuses on.
       * @enum {string}
       */
      widget_type?: "discover" | "issue" | "metrics" | "custom-metrics" | "error-events" | "transaction-like" | "spans";
  }[];
};

/**
 * Type of SENTRY's SENTRY_CREATE_DASHBOARD_WITH_WIDGETS tool output.
 */
type SENTRY_CREATE_DASHBOARD_WITH_WIDGETS_OUTPUT = {
  /**
   * Data
   * @description Representation of the created dashboard, including its ID, title, widget configurations, and properties.
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
 * Type of SENTRY's SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION tool input.
 */
type SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION_INPUT = {
  /**
   * External Id
   * @description The user's unique identifier on the external provider's platform (e.g., GitHub user ID, Slack member ID). This ID is specific to the selected `provider`.
   */
  external_id?: string;
  /**
   * External Name
   * @description The display name of the user as known on the external provider's platform (e.g., GitHub username, Slack display name).
   */
  external_name?: string;
  /**
   * Id
   * @description The unique numeric identifier for the external actor linkage being created. Its specific use may depend on the integration or Sentry's internal handling.
   */
  id?: number;
  /**
   * Integration Id
   * @description The numeric ID of the Sentry integration that corresponds to the specified provider and is configured for the organization.
   */
  integration_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization where the external user linkage will be created.
   */
  organization_id_or_slug?: string;
  /**
   * Provider
   * @description The external identity provider. Allowed values: `github`, `github_enterprise`, `slack`, `gitlab`, `msteams`, `custom_scm`.
   * @enum {string}
   */
  provider?: "github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "custom_scm";
  /**
   * User Id
   * @description The numeric ID of the Sentry user to be linked with the external identity.
   */
  user_id?: number;
};

/**
 * Type of SENTRY's SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION tool output.
 */
type SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the representation of the created external user linkage. The structure may include details such as the Sentry user ID, external user ID, provider, and integration ID.
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
 * Type of SENTRY's SENTRY_CREATE_ORGANIZATION_ALERT_RULE tool input.
 */
type SENTRY_CREATE_ORGANIZATION_ALERT_RULE_INPUT = {
  /**
   * Activation Condition
   * @description Optional integer. Represents a trigger condition for when to start monitoring the alert rule, typically used when `monitorType` indicates conditional monitoring. Consult Sentry documentation for specific values.
   */
  activationCondition?: number;
  /**
   * Aggregate
   * @description The aggregate function used in this alert rule. Valid functions include `count`, `count_unique`, `percentage`, `avg`, `apdex`, `failure_rate`, `p50`, `p75`, `p95`, `p99`, `p100`, and `percentile`. Refer to Sentry's [Metric Alert Rule Types] documentation for valid configurations based on dataset and query type.
   */
  aggregate?: string;
  /**
   * Comparison Delta
   * @description Optional. The time delta in minutes for the comparison period. Required when using a percentage change threshold (e.g., 'X% higher/lower compared to `comparisonDelta` minutes ago'). Cannot be used for Crash Free Session Rate or Crash Free User Rate alerts.
   */
  comparisonDelta?: number;
  /**
   * Dataset
   * @description The Sentry dataset this query will execute on. Valid values include `events`, `transactions`, `metrics`, `sessions`, and `generic-metrics`. Defaults to `events` if not specified. Refer to Sentry's [Metric Alert Rule Types] documentation for valid configurations.
   */
  dataset?: string;
  /**
   * Environment
   * @description The name of the environment to filter by. If None or omitted, the alert rule applies to all environments.
   */
  environment?: string;
  /**
   * Event Types
   * @description A list of event types this alert will relate to. Valid values are `default` (for events captured via Capture Message), `error`, and `transaction`.
   */
  eventTypes?: string[];
  /**
   * Monitor Type
   * @description Integer representing the monitor type. This determines if the alert rule is actively monitored or monitored based on a specific activation condition. Consult Sentry documentation for specific values and their meanings.
   */
  monitorType?: number;
  /**
   * Name
   * @description The name for the alert rule. Maximum length of 256 characters.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which this alert rule belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description The ID of the Sentry team or user that owns this alert rule. Can be a numeric ID or a string in the format 'team:<team_id>' or 'user:<user_id>'.
   */
  owner?: string;
  /**
   * Projects
   * @description A list of project slugs to filter by. For metric alerts, this list is typically limited to containing a single project slug.
   */
  projects?: string[];
  /**
   * Query
   * @description An event search query to filter events for the alert. For example, to include only transactions with status code 400, use `http.status_code:400`. Use an empty string for no filter.
   */
  query?: string;
  /**
   * Query Type
   * @description The type of query. If no value is provided, `queryType` defaults based on the specified `dataset`. Supported values: `0` (Error events: event.type:error), `1` (Transaction events: event.type:transaction), `2` (None: for datasets like metrics that don't use this). See Sentry's [Metric Alert Rule Types] for valid configurations.
   */
  queryType?: number;
  /**
   * Resolve Threshold
   * @description Optional. The numeric value the metric must reach to resolve an active alert. If not provided, it's automatically set based on the lowest severity trigger's `alertThreshold` and `thresholdType`. For example, if an alert triggers 'Above' 50, it might resolve 'Below' 50. If `thresholdType` is `0` (Above), `resolveThreshold` must typically be less than or equal to the critical threshold; if `thresholdType` is `1` (Below), it must be greater than or equal.
   */
  resolveThreshold?: number;
  /**
   * Threshold Type
   * @description The comparison operator for the critical and warning thresholds. `0` for 'Above' and `1` for 'Below'. The resolved threshold uses the opposite operator. For percentage change thresholds, `0` means 'Higher than' and `1` means 'Lower than'.
   */
  thresholdType?: number;
  /**
   * Time Window
   * @description The time period in minutes to aggregate over. Supported values: `1` (1 minute), `5` (5 minutes), `10` (10 minutes), `15` (15 minutes), `30` (30 minutes), `60` (1 hour), `120` (2 hours), `240` (4 hours), `1440` (24 hours).
   */
  timeWindow?: number;
  /**
   * Triggers
   * @description List of trigger configurations. Each trigger must specify `label` ('critical' or 'warning'; 'critical' is mandatory), `alertThreshold` (numeric value to trigger), and `actions`. Each action specifies `type` (e.g., 'email', 'slack'), `targetType` (e.g., 'specific', 'user'), `targetIdentifier` (ID/name, format varies by type e.g., email string, PagerDuty integer). Optional action fields include `inputChannelId` (Slack-specific), `integrationId` (usually required, except for 'email'/'sentry_app'), `sentryAppId` (if action `type` is 'sentry_app'), and `priority` (e.g., PagerDuty 'critical', Opsgenie 'P1').
   */
  triggers?: unknown[];
};

/**
 * Type of SENTRY's SENTRY_CREATE_ORGANIZATION_ALERT_RULE tool output.
 */
type SENTRY_CREATE_ORGANIZATION_ALERT_RULE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created organization alert rule.
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
 * Type of SENTRY's SENTRY_CREATE_ORGANIZATION_MONITOR tool input.
 */
type SENTRY_CREATE_ORGANIZATION_MONITOR_INPUT = {
  /**
   * Is Muted
   * @description A boolean flag to control incident creation for this monitor. If true, monitor incidents (alerts) will be suppressed. Defaults to false if not provided.
   */
  is_muted?: boolean;
  /**
   * Name
   * @description The human-readable name for the monitor. This name is used in notifications and the Sentry UI.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The identifier (ID or slug) of the Sentry organization to which this monitor will belong.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description The Sentry actor ID (team or user) to be designated as the owner of this monitor. Format: 'user:{user_id}' or 'team:{team_id}'. If not provided, the monitor will be unassigned.
   */
  owner?: string;
  /**
   * Slug
   * @description A unique identifier for the monitor within the organization. If not provided, Sentry will generate one. It must match the pattern `^[a-z][a-z0-9_\-]*$`. Changing this slug after creation requires updating any instrumented check-in calls.
   */
  slug?: string;
  /**
   * Status
   * @description The initial status of the monitor. 'active' monitors accept check-ins and contribute to quotas, while 'disabled' monitors do not. Allowed values: 'active', 'disabled'.
   * @default active
   * @enum {string}
   */
  status: "active" | "disabled";
  /**
   * Type
   * @description The type of the monitor. Must be 'cron_job', indicating a monitor for a scheduled task or cron job.
   * @enum {string}
   */
  type?: "cron_job";
};

/**
 * Type of SENTRY's SENTRY_CREATE_ORGANIZATION_MONITOR tool output.
 */
type SENTRY_CREATE_ORGANIZATION_MONITOR_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_CREATE_ORGANIZATION_TEAM tool input.
 */
type SENTRY_CREATE_ORGANIZATION_TEAM_INPUT = {
  /**
   * Name
   * @description Optional. **`[DEPRECATED]`** The display name for the new team. If not supplied, it's auto-generated from the `slug` (if `slug` is provided). At least one of `name` or `slug` is required to create a team.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization where the new team will be created. This organization must already exist.
   */
  organization_id_or_slug?: string;
  /**
   * Slug
   * @description Optional. A unique, URL-friendly identifier for the new team. If not supplied, it's auto-generated from the `name` (if `name` is provided). Must adhere to the pattern: `^[a-z][a-z0-9_\-]*$`.
   */
  slug?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_ORGANIZATION_TEAM tool output.
 */
type SENTRY_CREATE_ORGANIZATION_TEAM_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the attributes and details of the newly created Sentry team.
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
 * Type of SENTRY's SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING tool input.
 */
type SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING_INPUT = {
  /**
   * Name
   * @description An optional descriptive name for the client key. If not provided, Sentry will generate a default name.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry project for which the client key will be created.
   */
  project_id_or_slug?: string;
  /**
   * Rate Limit  Count
   * @description The maximum number of events that can be accepted for this key within the specified `rateLimit_window`. If omitted, Sentry's default rate limits will apply.
   */
  rateLimit__count?: number;
  /**
   * Rate Limit  Window
   * @description The time window in seconds for the `rateLimit_count`. For example, if `rateLimit_count` is 1000 and `rateLimit_window` is 3600, the key will accept up to 1000 events per hour. If omitted, Sentry's default rate limits will apply.
   */
  rateLimit__window?: number;
};

/**
 * Type of SENTRY's SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING tool output.
 */
type SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created project key, typically including its DSN, public key, secret key, name, and rate limit configuration if specified.
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
 * Type of SENTRY's SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS tool input.
 */
type SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS_INPUT = {
  /**
   * Action Match
   * @description Logic for condition evaluation ('all', 'any', 'none') before proceeding to filters.
   * @enum {string}
   */
  actionMatch?: "all" | "any" | "none";
  /**
   * Actions
   * @description List of action objects executed when conditions (and filters) are met. Each object must specify an ID (action type) and parameters. See examples for required JSON structures: **Send a notification to Suggested Assignees** - `fallthroughType` - Who the notification should be sent to if there are no suggested assignees. Valid values are `ActiveMembers`, `AllMembers`, and `NoOne`. json {     "id": "sentry.mail.actions.NotifyEmailAction",     "targetType": "IssueOwners",     "fallthroughType": "ActiveMembers" }  **Send a notification to a Member or a Team** - `targetType` - One of `Member` or `Team`. - `fallthroughType` - Who the notification should be sent to if it cannot be sent to the original target. Valid values are `ActiveMembers`, `AllMembers`, and `NoOne`. - `targetIdentifier` - The ID of the Member or Team the notification should be sent to. json {     "id": "sentry.mail.actions.NotifyEmailAction",     "targetType": "Team",     "fallthroughType": "AllMembers",     "targetIdentifier": 4524986223 }  **Send a Slack notification** - `workspace` - The integration ID associated with the Slack workspace. - `channel` - The name of the channel to send the notification to (e.g., #critical, Jane Schmidt). - `channel_id` (optional) - The ID of the channel to send the notification to. - `tags` (optional) - A string of tags to show in the notification, separated by commas (e.g., "environment, user, my_tag"). - `notes` (optional) - Text to show alongside the notification. To @ a user, include their user id like `@<USER_ID>`. To include a clickable link, format the link and title like `<http://example.com|Click Here>`. json {     "id": "sentry.integrations.slack.notify_action.SlackNotifyServiceAction",     "workspace": 293854098,     "channel": "#warning",     "tags": "environment,level",     "notes": "Please <http://example.com|click here> for triage information" }  **Send a Microsoft Teams notification** - `team` - The integration ID associated with the Microsoft Teams team. - `channel` - The name of the channel to send the notification to. json {     "id": "sentry.integrations.msteams.notify_action.MsTeamsNotifyServiceAction",     "team": 23465424,     "channel": "General" }  **Send a Discord notification** - `server` - The integration ID associated with the Discord server. - `channel_id` - The ID of the channel to send the notification to. - `tags` (optional) - A string of tags to show in the notification, separated by commas (e.g., "environment, user, my_tag"). json {     "id": "sentry.integrations.discord.notify_action.DiscordNotifyServiceAction",     "server": 63408298,     "channel_id": 94732897,     "tags": "browser,user" }  **Create a Jira Ticket** - `integration` - The integration ID associated with Jira. - `project` - The ID of the Jira project. - `issuetype` - The ID of the type of issue that the ticket should be created as. - `dynamic_form_fields` (optional) - A list of any custom fields you want to include in the ticket as objects. json {     "id": "sentry.integrations.jira.notify_action.JiraCreateTicketAction",     "integration": 321424,     "project": "349719",     "issueType": "1" }  **Create a Jira Server Ticket** - `integration` - The integration ID associated with Jira Server. - `project` - The ID of the Jira Server project. - `issuetype` - The ID of the type of issue that the ticket should be created as. - `dynamic_form_fields` (optional) - A list of any custom fields you want to include in the ticket as objects. json {     "id": "sentry.integrations.jira_server.notify_action.JiraServerCreateTicketAction",     "integration": 321424,     "project": "349719",     "issueType": "1" }  **Create a GitHub Issue** - `integration` - The integration ID associated with GitHub. - `repo` - The name of the repository to create the issue in. - `title` - The title of the issue. - `body` (optional) - The contents of the issue. - `assignee` (optional) - The GitHub user to assign the issue to. - `labels` (optional) - A list of labels to assign to the issue. json {     "id": "sentry.integrations.github.notify_action.GitHubCreateTicketAction",     "integration": 93749,     "repo": "default",     "title": "My Test Issue",     "assignee": "Baxter the Hacker",     "labels": ["bug", "p1"] }  **Create a GitHub Enterprise Issue** - `integration` - The integration ID associated with GitHub Enterprise. - `repo` - The name of the repository to create the issue in. - `title` - The title of the issue. - `body` (optional) - The contents of the issue. - `assignee` (optional) - The GitHub user to assign the issue to. - `labels` (optional) - A list of labels to assign to the issue. json {     "id": "sentry.integrations.github_enterprise.notify_action.GitHubEnterpriseCreateTicketAction",     "integration": 93749,     "repo": "default",     "title": "My Test Issue",     "assignee": "Baxter the Hacker",     "labels": ["bug", "p1"] } }  **Create an Azure DevOps work item** - `integration` - The integration ID. - `project` - The ID of the Azure DevOps project. - `work_item_type` - The type of work item to create. - `dynamic_form_fields` (optional) - A list of any custom fields you want to include in the work item as objects. json {     "id": "sentry.integrations.vsts.notify_action.AzureDevopsCreateTicketAction",     "integration": 294838,     "project": "0389485",     "work_item_type": "Microsoft.VSTS.WorkItemTypes.Task" }  **Send a PagerDuty notification** - `account` - The integration ID associated with the PagerDuty account. - `service` - The ID of the service to send the notification to. - `severity` - The severity of the Pagerduty alert. This is optional, the default is `critical` for fatal issues, `error` for error issues, `warning` for warning issues, and `info` for info and debug issues. json {     "id": "sentry.integrations.pagerduty.notify_action.PagerDutyNotifyServiceAction",     "account": 92385907,     "service": 9823924,     "severity": "critical" }  **Send an Opsgenie notification** - `account` - The integration ID associated with the Opsgenie account. - `team` - The ID of the Opsgenie team to send the notification to. - `priority` - The priority of the Opsgenie alert. This is optional, the default is `P3`. json {     "id": "sentry.integrations.opsgenie.notify_action.OpsgenieNotifyTeamAction",     "account": 8723897589,     "team": "9438930258-fairy",     "priority": "P1" }  **Send a notification to a service** - `service` - The plugin slug. json {     "id": "sentry.rules.actions.notify_event_service.NotifyEventServiceAction",     "service": "mail" }  **Send a notification to a Sentry app with a custom webhook payload** - `settings` - A list of objects denoting the settings each action will be created with. All required fields must be included. - `sentryAppInstallationUuid` - The ID for the Sentry app json {     "id": "sentry.rules.actions.notify_event_sentry_app.NotifyEventSentryAppAction",     "settings": [         {"name": "title", "value": "Team Rocket"},         {"name": "summary", "value": "We're blasting off again."}     ],     "sentryAppInstallationUuid": "643522",     "hasSchemaFormConfig": true }  **Send a notification (for all legacy integrations)** json {     "id": "sentry.rules.actions.notify_event.NotifyEventAction" }
   */
  actions?: Record<string, never>[];
  /**
   * Conditions
   * @description List of condition objects defining rule triggers. Each object must specify an ID (condition type) and parameters. See examples for required JSON structures: **A new issue is created** json {     "id": "sentry.rules.conditions.first_seen_event.FirstSeenEventCondition" }  **The issue changes state from resolved to unresolved** json {     "id": "sentry.rules.conditions.regression_event.RegressionEventCondition" }  **The issue is seen more than `value` times in `interval`** - `value` - An integer - `interval` - Valid values are `1m`, `5m`, `15m`, `1h`, `1d`, `1w` and `30d` (`m` for minutes, `h` for hours, `d` for days, and `w` for weeks). json {     "id": "sentry.rules.conditions.event_frequency.EventFrequencyCondition",     "value": 500,     "interval": "1h" }  **The issue is seen by more than `value` users in `interval`** - `value` - An integer - `interval` - Valid values are `1m`, `5m`, `15m`, `1h`, `1d`, `1w` and `30d` (`m` for minutes, `h` for hours, `d` for days, and `w` for weeks). json {     "id": "sentry.rules.conditions.event_frequency.EventUniqueUserFrequencyCondition",     "value": 1000,     "interval": "15m" }  **The issue affects more than `value` percent of sessions in `interval`** - `value` - A float - `interval` - Valid values are `5m`, `10m`, `30m`, and `1h` (`m` for minutes, `h` for hours). json {     "id": "sentry.rules.conditions.event_frequency.EventFrequencyPercentCondition",     "value": 50.0,     "interval": "10m" }
   */
  conditions?: Record<string, never>[];
  /**
   * Environment
   * @description Sentry environment name for event filtering (e.g., 'production'). If omitted, applies to all environments.
   */
  environment?: string;
  /**
   * Filter Match
   * @description Logic for filter evaluation ('all', 'any', 'none') for action execution. Required if 'filters' are specified.
   * @enum {string}
   */
  filterMatch?: "all" | "any" | "none";
  /**
   * Filters
   * @description Optional list of filter objects for additional criteria after conditions are met. Each object must specify an ID (filter type) and parameters. See examples for required JSON structures: **The issue is `comparison_type` than `value` `time`** - `comparison_type` - One of `older` or `newer` - `value` - An integer - `time` - The unit of time. Valid values are `minute`, `hour`, `day`, and `week`. json {     "id": "sentry.rules.filters.age_comparison.AgeComparisonFilter",     "comparison_type": "older",     "value": 3,     "time": "week" }  **The issue has happened at least `value` times** - `value` - An integer json {     "id": "sentry.rules.filters.issue_occurrences.IssueOccurrencesFilter",     "value": 120 }  **The issue is assigned to No One** json {     "id": "sentry.rules.filters.assigned_to.AssignedToFilter",     "targetType": "Unassigned" }  **The issue is assigned to `targetType`** - `targetType` - One of `Team` or `Member` - `targetIdentifier` - The target"s ID json {     "id": "sentry.rules.filters.assigned_to.AssignedToFilter",     "targetType": "Member",     "targetIdentifier": 895329789 }  **The event is from the latest release** json {     "id": "sentry.rules.filters.latest_release.LatestReleaseFilter" }  **The issue"s category is equal to `value`** - `value` - An integer correlated with a category. Valid values are `1` (Error), `2` (Performance), `3` (Profile), `4` (Cron), and `5` (Replay). json {     "id": "sentry.rules.filters.issue_category.IssueCategoryFilter",     "value": 2 }  **The event"s `attribute` value `match` `value`** - `attribute` - Valid values are `message`, `platform`, `environment`, `type`, `error.handled`, `error.unhandled`, `error.main_thread`, `exception.type`, `exception.value`, `user.id`, `user.email`, `user.username`, `user.ip_address`, `http.method`, `http.url`, `http.status_code`, `sdk.name`, `stacktrace.code`, `stacktrace.module`, `stacktrace.filename`, `stacktrace.abs_path`, `stacktrace.package`, `unreal.crashtype`, and `app.in_foreground`. - `match` - The comparison operator. Valid values are `eq` (equals), `ne` (does not equal), `sw` (starts with), `ew` (ends with), `co` (contains), `nc` (does not contain), `is` (is set), and `ns` (is not set). - `value` - A string. Not required when `match` is `is` or `ns`. json {     "id": "sentry.rules.conditions.event_attribute.EventAttributeCondition",     "attribute": "http.url",     "match": "nc",     "value": "localhost" }  **The event"s tags match `key` `match` `value`** - `key` - The tag - `match` - The comparison operator. Valid values are `eq` (equals), `ne` (does not equal), `sw` (starts with), `ew` (ends with), `co` (contains), `nc` (does not contain), `is` (is set), and `ns` (is not set). - `value` - A string. Not required when `match` is `is` or `ns`. json {     "id": "sentry.rules.filters.tagged_event.TaggedEventFilter",     "key": "level",     "match": "eq",     "value": "error" }  **The event"s level is `match` `level`** - `match` - Valid values are `eq`, `gte`, and `lte`. - `level` - Valid values are `50` (fatal), `40` (error), `30` (warning), `20` (info), `10` (debug), `0` (sample). json {     "id": "sentry.rules.filters.level.LevelFilter",     "match": "gte",     "level": "50" }
   */
  filters?: Record<string, never>[];
  /**
   * Frequency
   * @description Action performance interval in minutes (5-43200) once conditions are met.
   */
  frequency?: number;
  /**
   * Name
   * @description Descriptive name for the alert rule.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description Unique identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description Owner ID (e.g., 'team:ID', 'user:ID').
   */
  owner?: string;
  /**
   * Project Id Or Slug
   * @description Unique identifier (ID or slug) of the Sentry project for the rule.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS tool output.
 */
type SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS_OUTPUT = {
  /**
   * Data
   * @description Full details of the successfully created alert rule.
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
 * Type of SENTRY's SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION tool input.
 */
type SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Events
   * @description A list of event types to subscribe to for this webhook. When any of these events occur in the project, Sentry will send a notification to the specified URL.
   */
  events?: string[];
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project for which to create the webhook.
   */
  project_id_or_slug?: string;
  /**
   * Url
   * @description The fully qualified URL to which Sentry will send webhook POST requests for the subscribed events.
   */
  url?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION tool output.
 */
type SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created webhook subscription.
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
 * Type of SENTRY's SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG tool input.
 */
type SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG_INPUT = {
  /**
   * Date Finished
   * Format: date-time
   * @description An optional ISO 8601 formatted date-time string (UTC is recommended) indicating when the deployment process finished. If not provided, Sentry uses the time the deploy API call is received.
   */
  dateFinished?: string;
  /**
   * Date Started
   * Format: date-time
   * @description An optional ISO 8601 formatted date-time string (UTC is recommended) indicating when the deployment process started.
   */
  dateStarted?: string;
  /**
   * Environment
   * @description The name of the environment to which this release is being deployed (e.g., 'production', 'staging'). This environment must be known to Sentry.
   */
  environment?: string;
  /**
   * Name
   * @description An optional human-readable name for the deploy.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description An optional list of project slugs to associate this deploy with. If not provided, the deploy applies to all projects associated with the release.
   */
  projects?: string[];
  /**
   * Url
   * @description An optional URL that provides a link to the deployment, such as a commit or a CI build page.
   */
  url?: string;
  /**
   * Version
   * @description The version identifier of the release to be deployed. This version must already exist in Sentry.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG tool output.
 */
type SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the newly created deploy object. This includes details such as the deploy ID, environment, version, associated projects, start and finish dates, and any other relevant attributes recorded by Sentry.
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
 * Type of SENTRY's SENTRY_CREATE_RELEASE_FOR_ORGANIZATION tool input.
 */
type SENTRY_CREATE_RELEASE_FOR_ORGANIZATION_INPUT = {
  /**
   * Commits
   * @description An optional list of commit data to be associated with the release. Commits must include the `id` parameter (the SHA of the commit). Optionally, include `repository`, `message`, `patch_set`, `author_name`, `author_email`, and `timestamp` for richer integration and better suspect commit tracking.
   */
  commits?: {
      /**
       * Author Email
       * @description The email of the commit author. Providing the author's email is required to enable the suggested assignee feature in Sentry.
       */
      author_email?: string;
      /**
       * Author Name
       * @description The name of the commit author.
       */
      author_name?: string;
      /**
       * Id
       * @description The unique identifier of the commit, typically the full commit SHA.
       */
      id?: string;
      /**
       * Message
       * @description The commit message.
       */
      message?: string;
      /**
       * Patch Set
       * @description A list of files changed in the commit. Specifying the patch_set is necessary to power Sentry features like suspect commits and suggested assignees.
       */
      patch_set?: {
          /**
           * Path
           * @description The path to the file that was changed. Both forward and backward slashes are supported.
           */
          path: string;
          /**
           * Type
           * @description The type of change that happened in the file for this commit. 'A' for added, 'M' for modified, 'D' for deleted.
           * @enum {string}
           */
          type: "A" | "M" | "D";
      }[];
      /**
       * Repository
       * @description The full name of the repository the commit belongs to. If this field is not given, Sentry will generate a name in the format "organization-<organization_id>" (e.g., if the organization ID is 123, the repository name will be "organization-123").
       */
      repository?: string;
      /**
       * Timestamp
       * Format: date-time
       * @description The commit timestamp in ISO 8601 format. This is used to sort the commits. If a timestamp is not included, the commits will remain sorted in the order they are provided.
       */
      timestamp?: string;
  }[];
  /**
   * Date Released
   * Format: date-time
   * @description An optional ISO 8601 timestamp indicating when the release went live. If not provided, the current time is assumed by Sentry.
   */
  dateReleased?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description A list of project slugs that are part of this release. These projects must belong to the specified organization.
   */
  projects?: string[];
  /**
   * Ref
   * @description An optional commit reference, such as a branch name or a tag. This is useful if a tagged version has been provided (e.g., `version` is 'v1.0.0' and `ref` is 'refs/tags/v1.0.0').
   */
  ref?: string;
  /**
   * Refs
   * @description An optional way to indicate the start and end commits for each repository included in a release. Head commits must include `repository` and `commit` (the HEAD SHA). They can optionally include `previousCommit` (the SHA of the HEAD of the previous release), which should be specified if this is the first time you've sent commit data. `commit` may also contain a range in the form of `previousCommit..commit`.
   */
  refs?: {
      /**
       * Commit
       * @description The commit SHA for the current release's HEAD. Can also be a range like `previousCommit..commit`.
       */
      commit?: string;
      /**
       * Previous Commit
       * @description The commit SHA for the previous release's HEAD. Recommended if this is the first time sending commit data.
       */
      previousCommit?: string;
      /**
       * Repository
       * @description The full name of the repository the commit belongs to.
       */
      repository?: string;
  }[];
  /**
   * Url
   * @description An optional URL that points to the release. This can be a link to a GitHub release, a CI build page, or an internal changelog.
   */
  url?: string;
  /**
   * Version
   * @description A unique identifier for this release. Can be a semantic version number, a commit hash, or any other string that uniquely identifies this release.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_RELEASE_FOR_ORGANIZATION tool output.
 */
type SENTRY_CREATE_RELEASE_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created Sentry release.
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
 * Type of SENTRY's SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION tool input.
 */
type SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION_INPUT = {
  /**
   * Display Name
   * @description Human-readable name for the new team.
   */
  displayName?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or slug of the Sentry organization where the new team will be created.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION tool output.
 */
type SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK tool input.
 */
type SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK_INPUT = {
  /**
   * Identifier
   * @description Unique identifier for the external issue within the third-party service (e.g., JIRA issue key, GitHub issue number).
   */
  identifier?: string;
  /**
   * Issue Id
   * @description ID of the Sentry issue to link to the external issue.
   */
  issueId?: number;
  /**
   * Project
   * @description Identifier for the project in the external service (not the Sentry project ID), e.g., JIRA project key, GitHub repository name.
   */
  project?: string;
  /**
   * Uuid
   * @description UUID of the Sentry App installation, used to associate the external issue with the correct Sentry instance.
   */
  uuid?: string;
  /**
   * Web Url
   * @description URL of the external issue in the third-party service; should be a direct link.
   */
  webUrl?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK tool output.
 */
type SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION tool input.
 */
type SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION_INPUT = {
  /**
   * Default Rules
   * @description Specifies whether to create default alert rules. If true (API default when parameter is omitted), an alert is triggered for every new issue. If false, no default alerts are created.
   */
  default_rules?: boolean;
  /**
   * Name
   * @description Display name for the new Sentry project.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization where the project will be created.
   */
  organization_id_or_slug?: string;
  /**
   * Platform
   * @description Primary platform or language (e.g., python, javascript, java) for SDK setup instructions and issue processing.
   */
  platform?: string;
  /**
   * Slug
   * @description Optional unique identifier for the project (e.g., for URLs), auto-generated from the name if omitted. Pattern: `^[a-z][a-z0-9_\-]*$`.
   */
  slug?: string;
  /**
   * Team Id Or Slug
   * @description ID or slug of the Sentry team to associate with the project.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION tool output.
 */
type SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Full details of the newly created Sentry project.
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
 * Type of SENTRY's SENTRY_CREATE_USER_FOR_SAML_INTEGRATION tool input.
 */
type SENTRY_CREATE_USER_FOR_SAML_INTEGRATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Sentry Org Role
   * @description Organization role for the new member; defaults to the organization's default role. The `admin` role cannot be assigned in Business/Enterprise plans; use `TeamRoles` instead.
   * @enum {string}
   */
  sentryOrgRole?: "billing" | "member" | "manager" | "admin";
  /**
   * User Name
   * Format: email
   * @description User's email address, used as the SAML identifier for the new member.
   */
  userName?: string;
};

/**
 * Type of SENTRY's SENTRY_CREATE_USER_FOR_SAML_INTEGRATION tool output.
 */
type SENTRY_CREATE_USER_FOR_SAML_INTEGRATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_DSYMS_FOR_PROJECT tool input.
 */
type SENTRY_DELETE_DSYMS_FOR_PROJECT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Debug Information File (DIF) to be deleted. This ID is assigned by Sentry when the file is uploaded.
   */
  id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the project belongs. Slugs are short, URL-friendly names.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project from which the Debug Information File (DIF) will be deleted.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_DSYMS_FOR_PROJECT tool output.
 */
type SENTRY_DELETE_DSYMS_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. If the deletion is successful, this dictionary might be empty or contain a success message. In case of an error, it will typically include details about the error.
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
 * Type of SENTRY's SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID tool input.
 */
type SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID_INPUT = {
  /**
   * External Issue Id
   * @description Platform-specific identifier of the external issue to be unlinked.
   */
  external_issue_id?: string;
  /**
   * Uuid
   * @description Unique identifier (UUID) of the Sentry app installation.
   */
  uuid?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID tool output.
 */
type SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID_OUTPUT = {
  /**
   * Data
   * @description Response data from the delete operation. Typically an empty dictionary for successful deletions that return a 204 No Content status.
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
 * Type of SENTRY's SENTRY_DELETE_EXTERNAL_TEAM_BY_ID tool input.
 */
type SENTRY_DELETE_EXTERNAL_TEAM_BY_ID_INPUT = {
  /**
   * External Team Id
   * @description Numeric ID of the external team integration, typically obtained when the link was established.
   */
  external_team_id?: number;
  /**
   * Organization Id Or Slug
   * @description Unique identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description Unique identifier (ID or slug) of the Sentry team.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_EXTERNAL_TEAM_BY_ID tool output.
 */
type SENTRY_DELETE_EXTERNAL_TEAM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION tool input.
 */
type SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION_INPUT = {
  /**
   * External User Id
   * @description Unique numerical identifier of the external user, typically obtained when the association was initially established with Sentry.
   */
  external_user_id?: number;
  /**
   * Organization Id Or Slug
   * @description ID or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION tool output.
 */
type SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Deletion operation result; may be an empty object or minimal API confirmation for success.
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
 * Type of SENTRY's SENTRY_DELETE_MEMBER_FROM_TEAM tool input.
 */
type SENTRY_DELETE_MEMBER_FROM_TEAM_INPUT = {
  /**
   * Member Id
   * @description Identifier (ID) of the organization member to remove from the team (e.g., '234567'). Typically a numerical ID.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description Identifier (ID) or slug of the Sentry organization (e.g., 'our-company', '123456'). Slugs are typically lowercase and hyphenated.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description Identifier (ID) or slug of the Sentry team from which the member will be removed (e.g., 'frontend-developers', '98765'). Team slugs are typically lowercase and hyphenated.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_MEMBER_FROM_TEAM tool output.
 */
type SENTRY_DELETE_MEMBER_FROM_TEAM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_ALERT_RULE tool input.
 */
type SENTRY_DELETE_ORGANIZATION_ALERT_RULE_INPUT = {
  /**
   * Alert Rule Id
   * @description The unique numerical identifier (ID) of the metric alert rule to be deleted.
   */
  alert_rule_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the alert rule belongs. This specifies the scope of the deletion operation.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_ALERT_RULE tool output.
 */
type SENTRY_DELETE_ORGANIZATION_ALERT_RULE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_DASHBOARD tool input.
 */
type SENTRY_DELETE_ORGANIZATION_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description Numerical ID of the dashboard to delete.
   */
  dashboard_id?: number;
  /**
   * Organization Id Or Slug
   * @description Identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_DASHBOARD tool output.
 */
type SENTRY_DELETE_ORGANIZATION_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description API response data; typically empty for a successful deletion (HTTP 204 No Content).
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
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY tool input.
 */
type SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the Discover query belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Query Id
   * @description The unique integer identifier of the saved Discover query that you intend to delete.
   */
  query_id?: number;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY tool output.
 */
type SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary is usually returned on successful deletion. May contain error details if the operation fails.
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
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_INTEGRATION tool input.
 */
type SENTRY_DELETE_ORGANIZATION_INTEGRATION_INPUT = {
  /**
   * Integration Id
   * @description The unique identifier (ID) of the integration that is installed on the organization and is to be deleted.
   */
  integration_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization from which the integration will be deleted.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_INTEGRATION tool output.
 */
type SENTRY_DELETE_ORGANIZATION_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data concerning the deletion's outcome; typically empty for successful operations (which often return HTTP 204 No Content).
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
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_ISSUE tool input.
 */
type SENTRY_DELETE_ORGANIZATION_ISSUE_INPUT = {
  /**
   * Issue Id
   * @description The unique identifier (ID) of the Sentry issue to be permanently deleted.
   */
  issue_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the issue belongs.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_ISSUE tool output.
 */
type SENTRY_DELETE_ORGANIZATION_ISSUE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the Sentry API. Upon successful deletion, this is typically an empty object or contains minimal confirmation data, as the HTTP status code indicates success (e.g., 202 Accepted or 204 No Content).
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
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_MEMBER tool input.
 */
type SENTRY_DELETE_ORGANIZATION_MEMBER_INPUT = {
  /**
   * Member Id
   * @description The unique identifier (ID) of the member to be removed from the organization.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or the human-readable slug of the Sentry organization from which the member will be removed.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_MEMBER tool output.
 */
type SENTRY_DELETE_ORGANIZATION_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Typically empty upon successful deletion (204 No Content); may contain data in non-standard responses or with additional API wrapper context.
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
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_MONITOR tool input.
 */
type SENTRY_DELETE_ORGANIZATION_MONITOR_INPUT = {
  /**
   * Environment
   * @description Optional list of environment names to delete; if omitted, the entire monitor (including all its environments) is deleted.
   */
  environment?: string[];
  /**
   * Monitor Id Or Slug
   * @description The ID or slug of the Sentry cron monitor to be deleted.
   */
  monitor_id_or_slug?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization to which the monitor belongs.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_MONITOR tool output.
 */
type SENTRY_DELETE_ORGANIZATION_MONITOR_OUTPUT = {
  /**
   * Data
   * @description A dictionary that is typically empty on a successful synchronous deletion (e.g., HTTP 204 No Content). For asynchronous deletions (e.g., HTTP 202 Accepted), it might contain details about the deletion task.
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
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_RELEASE tool input.
 */
type SENTRY_DELETE_ORGANIZATION_RELEASE_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the release belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release to be deleted. This could be a semantic version (e.g., '1.0.0', 'my-app@2.3.1') or a unique commit hash.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORGANIZATION_RELEASE tool output.
 */
type SENTRY_DELETE_ORGANIZATION_RELEASE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORG_NOTIFICATION_ACTION tool input.
 */
type SENTRY_DELETE_ORG_NOTIFICATION_ACTION_INPUT = {
  /**
   * Action Id
   * @description The unique numerical identifier (ID) of the notification action to be deleted.
   */
  action_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_ORG_NOTIFICATION_ACTION tool output.
 */
type SENTRY_DELETE_ORG_NOTIFICATION_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary that is typically empty upon successful deletion (HTTP 204 No Content). It may contain additional information in other response scenarios.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_BY_ID tool input.
 */
type SENTRY_DELETE_PROJECT_BY_ID_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry project to be deleted.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_BY_ID tool output.
 */
type SENTRY_DELETE_PROJECT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Dictionary for operation details or error messages. For successful asynchronous 204 No Content deletions, this is typically empty as no body is returned.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_HOOK tool input.
 */
type SENTRY_DELETE_PROJECT_HOOK_INPUT = {
  /**
   * Hook Id
   * @description The unique identifier (GUID) of the service hook to be deleted from the specified project.
   */
  hook_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the project and service hook belong.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project from which the service hook will be removed.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_HOOK tool output.
 */
type SENTRY_DELETE_PROJECT_HOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain additional information regarding the deletion. For successful deletions (e.g., HTTP 204 No Content), this is often an empty dictionary.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_ISSUES tool input.
 */
type SENTRY_DELETE_PROJECT_ISSUES_INPUT = {
  /**
   * Id
   * @description A list of specific issue IDs to be permanently removed. If not provided, the action removes the oldest 1000 issues in the project.
   */
  id?: number[];
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the project and its issues belong.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project from which issues will be removed.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_ISSUES tool output.
 */
type SENTRY_DELETE_PROJECT_ISSUES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This is typically empty (e.g., following an HTTP 204 No Content status) on successful removal, or may contain error details if the operation fails.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_KEY tool input.
 */
type SENTRY_DELETE_PROJECT_KEY_INPUT = {
  /**
   * Key Id
   * @description The ID of the client key (public DSN key) to delete.
   */
  key_id?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project to which the client key belongs.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_KEY tool output.
 */
type SENTRY_DELETE_PROJECT_KEY_OUTPUT = {
  /**
   * Data
   * @description Response data from Sentry. Typically an empty dictionary for successful deletion.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_MONITOR tool input.
 */
type SENTRY_DELETE_PROJECT_MONITOR_INPUT = {
  /**
   * Environment
   * @description Optional. A list of environment names. If provided, only the monitor configurations for these specific environments will be deleted. If this parameter is omitted or an empty list is passed, the entire monitor and all its environment configurations will be deleted.
   */
  environment?: string[];
  /**
   * Monitor Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry monitor to be deleted.
   */
  monitor_id_or_slug?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the project and monitor belong.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project to which the monitor belongs.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_MONITOR tool output.
 */
type SENTRY_DELETE_PROJECT_MONITOR_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain additional details about the deletion. Usually empty for successful monitor deletions.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_REPLAY tool input.
 */
type SENTRY_DELETE_PROJECT_REPLAY_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization to which the project and replay belong.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry project from which the replay will be deleted.
   */
  project_id_or_slug?: string;
  /**
   * Replay Id
   * @description The unique identifier (ID) of the session replay to be deleted.
   */
  replay_id?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_REPLAY tool output.
 */
type SENTRY_DELETE_PROJECT_REPLAY_OUTPUT = {
  /**
   * Data
   * @description Usually empty upon successful deletion; may contain confirmation details or error information.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_RULE tool input.
 */
type SENTRY_DELETE_PROJECT_RULE_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization that contains the project and the alert rule to be deleted. Slugs are typically lowercase and hyphenated (e.g., 'my-sentry-org').
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project from which the alert rule will be deleted. Slugs are typically lowercase and hyphenated (e.g., 'my-web-project').
   */
  project_id_or_slug?: string;
  /**
   * Rule Id
   * @description The numerical ID of the specific issue alert rule that needs to be deleted from the project.
   */
  rule_id?: number;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_RULE tool output.
 */
type SENTRY_DELETE_PROJECT_RULE_OUTPUT = {
  /**
   * Data
   * @description A dictionary that is typically empty upon successful deletion. It might contain additional details or a success confirmation in some cases.
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
 * Type of SENTRY's SENTRY_DELETE_PROJECT_SYMBOL_SOURCES tool input.
 */
type SENTRY_DELETE_PROJECT_SYMBOL_SOURCES_INPUT = {
  /**
   * Id
   * @description The unique identifier of the symbol source to be deleted. This is usually a UUID. Example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef'.
   */
  id?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the project belongs. Examples: 'my-org', '12345'.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project from which the symbol source will be deleted. Examples: 'my-project', '67890'.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_SYMBOL_SOURCES tool output.
 */
type SENTRY_DELETE_PROJECT_SYMBOL_SOURCES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION tool input.
 */
type SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry team to be disassociated from the project.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION tool output.
 */
type SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION_OUTPUT = {
  /**
   * Data
   * @description The response payload. For a successful deletion, this is typically an empty dictionary. In case of an error, it may contain details about the failure.
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
 * Type of SENTRY's SENTRY_DELETE_RELEASE_FILE tool input.
 */
type SENTRY_DELETE_RELEASE_FILE_INPUT = {
  /**
   * File Id
   * @description Identifier of the file to be deleted.
   */
  file_id?: string;
  /**
   * Organization Id Or Slug
   * @description Identifier (ID or slug) of the release's organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description Identifier (ID or slug) of the release's project.
   */
  project_id_or_slug?: string;
  /**
   * Version
   * @description Version identifier of the release.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_RELEASE_FILE tool output.
 */
type SENTRY_DELETE_RELEASE_FILE_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary is expected upon successful deletion of the release file, as the API typically returns a 204 No Content status.
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
 * Type of SENTRY's SENTRY_DELETE_RELEASE_FILE_BY_ID tool input.
 */
type SENTRY_DELETE_RELEASE_FILE_BY_ID_INPUT = {
  /**
   * File Id
   * @description The unique identifier of the specific file to be deleted from the release. This often corresponds to the file's name or path as Sentry knows it.
   */
  file_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the release belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release from which the file will be deleted. This can be a semantic version, a commit hash, or any unique string identifying the release.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_RELEASE_FILE_BY_ID tool output.
 */
type SENTRY_DELETE_RELEASE_FILE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary that may contain data related to the deletion operation. For a successful synchronous deletion (HTTP 204 No Content), this is usually an empty dictionary.
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
 * Type of SENTRY's SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG tool input.
 */
type SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the team belongs. For example, 'acme-corp' or '12345'.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry team targeted for deletion. For example, 'frontend-devs' or '67890'.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG tool output.
 */
type SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2 tool input.
 */
type SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or URL-friendly slug of the Sentry organization from which the team will be deleted.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id
   * @description The unique numerical ID of the team to be deleted.
   */
  team_id?: number;
};

/**
 * Type of SENTRY's SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2 tool output.
 */
type SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing data from the SCIM API response. For successful deletion, this may be empty or contain a minimal confirmation.
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
 * Type of SENTRY's SENTRY_DELETE_USER_EMAILS_BY_ID tool input.
 */
type SENTRY_DELETE_USER_EMAILS_BY_ID_INPUT = {
  /**
   * User Id
   * @description Unique identifier of the Sentry user.
   */
  user_id?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_USER_EMAILS_BY_ID tool output.
 */
type SENTRY_DELETE_USER_EMAILS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description API response data; often an empty dictionary or minimal confirmation upon successful deletion.
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
 * Type of SENTRY's SENTRY_DELETE_USER_FROM_ORG tool input.
 */
type SENTRY_DELETE_USER_FROM_ORG_INPUT = {
  /**
   * Member Id
   * @description The unique identifier of the organization member to remove.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description The identifier or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_DELETE_USER_FROM_ORG tool output.
 */
type SENTRY_DELETE_USER_FROM_ORG_OUTPUT = {
  /**
   * Data
   * @description Data from the Sentry API response; usually empty for successful SCIM DELETE operations.
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
 * Type of SENTRY's SENTRY_FETCH_ISSUE_EVENT_BY_ID tool input.
 */
type SENTRY_FETCH_ISSUE_EVENT_BY_ID_INPUT = {
  /**
   * Environment
   * @description Filter by environment names; if omitted, events from all environments are considered.
   */
  environment?: string[];
  /**
   * Event Id
   * @description Specifies the event to retrieve: 'latest', 'oldest', or 'recommended'.
   * @enum {string}
   */
  event_id?: "latest" | "oldest" | "recommended";
  /**
   * Issue Id
   * @description The unique numerical ID of the Sentry issue for which to fetch an event.
   */
  issue_id?: number;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ISSUE_EVENT_BY_ID tool output.
 */
type SENTRY_FETCH_ISSUE_EVENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_ALERT_RULES tool input.
 */
type SENTRY_FETCH_ORGANIZATION_ALERT_RULES_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization for which alert rules are to be fetched. Slugs are typically the organization's name in lowercase, using hyphens for spaces (e.g., 'acme-corp').
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_ALERT_RULES tool output.
 */
type SENTRY_FETCH_ORGANIZATION_ALERT_RULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES tool input.
 */
type SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES_INPUT = {
  /**
   * End
   * @description The inclusive end of the time series range for querying release threshold statuses. Accepts UTC ISO8601 format (e.g., '2023-01-01T23:59:59Z') or epoch seconds (e.g., '1672617599').
   */
  end?: string;
  /**
   * Environment
   * @description A list of environment names (e.g., 'production', 'staging') to filter the release threshold statuses by. If not provided, statuses for all environments are considered.
   */
  environment?: string[];
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization for which to fetch release threshold statuses.
   */
  organization_id_or_slug?: string;
  /**
   * Project Slug
   * @description A list of project slugs (e.g., 'frontend', 'backend-api') to filter the release threshold statuses by. If not provided, statuses for all projects in the organization are considered.
   */
  projectSlug?: string[];
  /**
   * Release
   * @description A list of release versions (e.g., '1.0.0', 'my-app@2.1.3') to filter the release threshold statuses by. If not provided, statuses for all releases within the time range are considered.
   */
  release?: string[];
  /**
   * Start
   * @description The start of the time series range for querying release threshold statuses. Accepts UTC ISO8601 format (e.g., '2023-01-01T00:00:00Z') or epoch seconds (e.g., '1672531200').
   */
  start?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES tool output.
 */
type SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES_OUTPUT = {
  /**
   * Data
   * @description A dictionary where keys are in the format `{release_version}-{project_slug}`. Each value contains a list of enriched release thresholds, including their derived health statuses and the full serialized `release_threshold` instance.
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
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT tool input.
 */
type SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT_INPUT = {
  /**
   * End
   * @description The end timestamp for the query period, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`).
   */
  end?: string;
  /**
   * Environment
   * @description A list of environment names to filter results by (e.g., production, staging).
   */
  environment?: string[];
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project
   * @description A list of project IDs to filter results by. Use `[-1]` to include all available projects within the organization.
   */
  project?: number[];
  /**
   * Query
   * @description A Sentry search query string to further filter replays. Example: `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`. Refer to Sentry documentation for detailed query syntax.
   */
  query?: string;
  /**
   * Start
   * @description The start timestamp for the query period, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`).
   */
  start?: string;
  /**
   * Stats Period
   * @description A relative time period for the query, which overrides `start` and `end` if provided. Format is a number followed by `d` (days), `h` (hours), `m` (minutes), `s` (seconds), or `w` (weeks). For example, `24h` queries data from the last 24 hours.
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT tool output.
 */
type SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the replay count data based on the provided query filters.
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
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS tool input.
 */
type SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching the next or previous set of results.
   */
  cursor?: string;
  /**
   * End
   * @description Inclusive end of the time series range (UTC ISO8601 or epoch seconds). Use with `start`; alternative to `statsPeriod`.
   */
  end?: string;
  /**
   * Environment
   * @description Environment (e.g., 'production', 'staging') to filter replay details by.
   */
  environment?: string;
  /**
   * Field
   * @description Specific fields to include in the response (e.g., 'activity', 'browser'). See `FieldEnm` for valid fields.
   */
  field?: string[];
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization for the replay.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Maximum number of items to return per page for pagination.
   */
  per_page?: number;
  /**
   * Project
   * @description List of project IDs to filter replay details by.
   */
  project?: number[];
  /**
   * Query
   * @description Structured query string to filter replay details (e.g., `user.email:test@example.com`, `has:error`).
   */
  query?: string;
  /**
   * Replay Id
   * @description ID of the specific replay session to retrieve.
   */
  replay_id?: string;
  /**
   * Sort
   * @description Field to sort replay details by (prefix with '-' for descending, e.g., '-started_at').
   */
  sort?: string;
  /**
   * Start
   * @description Start of the time series range (UTC ISO8601 or epoch seconds). Use with `end`; alternative to `statsPeriod`.
   */
  start?: string;
  /**
   * Stats Period
   * @description Time range for series data, relative to now (e.g., `1d`, `2h`). Use if not providing `start` and `end`.
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS tool output.
 */
type SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the fetched replay, structured by requested fields.
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
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS tool input.
 */
type SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching next/previous page.
   */
  cursor?: string;
  /**
   * End
   * @description End of time range (UTC ISO8601 or epoch seconds). Use with `start`; not with `statsPeriod`.
   */
  end?: string;
  /**
   * Environment
   * @description Filter by environment names.
   */
  environment?: string[];
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Maximum items per page (API defaults to 100 if not specified, max 100).
   */
  per_page?: number;
  /**
   * Project
   * @description Filter by project IDs.
   */
  project?: number[];
  /**
   * Query
   * @description Sentry search query syntax for filtering. See Sentry docs for syntax/fields.
   */
  query?: string;
  /**
   * Sort
   * @description Field to sort replay selectors by. Refer to Sentry API docs for available fields.
   */
  sort?: string;
  /**
   * Start
   * @description Start of time range (UTC ISO8601 or epoch seconds). Use with `end`; not with `statsPeriod`.
   */
  start?: string;
  /**
   * Stats Period
   * @description Time range (e.g., `1d`, `2h`; m, h, d, w units). Use instead of `start`/`end`.
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS tool output.
 */
type SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS_OUTPUT = {
  /**
   * Data
   * @description Fetched replay selectors and related Sentry API data/metadata.
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
 * Type of SENTRY's SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS tool input.
 */
type SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS_INPUT = {
  /**
   * Environment
   * @description The name of the environment (e.g., production, staging, development).
   */
  environment?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS tool output.
 */
type SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS tool input.
 */
type SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the project belongs. This is used as a path parameter in the API request.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project for which ownership details are to be retrieved. This is used as a path parameter in the API request.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS tool output.
 */
type SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the project's ownership configuration. This typically includes rules defining ownership based on paths or other criteria.
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
 * Type of SENTRY's SENTRY_FETCH_PROJECT_RELEASE_FILES tool input.
 */
type SENTRY_FETCH_PROJECT_RELEASE_FILES_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the project.
   */
  project_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release (e.g., '1.0.0', 'my-app@2.3.12').
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_PROJECT_RELEASE_FILES tool output.
 */
type SENTRY_FETCH_PROJECT_RELEASE_FILES_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the list of files for the given release. Each key is a file identifier, and the value contains file metadata such as 'id', 'name', 'sha1', 'size', 'dateCreated', 'headers', and 'dist'.
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
 * Type of SENTRY's SENTRY_FETCH_PROJECT_REPLAY_CLICKS tool input.
 */
type SENTRY_FETCH_PROJECT_REPLAY_CLICKS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor to navigate through click events.
   */
  cursor?: string;
  /**
   * Environment
   * @description List of environment names to filter click data.
   */
  environment?: string[];
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Maximum number of click events per page (default/max 100).
   */
  per_page?: number;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Query
   * @description Sentry search query to filter click events (e.g., `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`).
   */
  query?: string;
  /**
   * Replay Id
   * @description The ID of the Sentry session replay.
   */
  replay_id?: string;
};

/**
 * Type of SENTRY's SENTRY_FETCH_PROJECT_REPLAY_CLICKS tool output.
 */
type SENTRY_FETCH_PROJECT_REPLAY_CLICKS_OUTPUT = {
  /**
   * Data
   * @description Response data containing a list of click events, each typically including `clickId`, `nodeId`, `timestamp`, and DOM node information.
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
 * Type of SENTRY's SENTRY_FETCH_REPLAY_RECORDING_SEGMENT tool input.
 */
type SENTRY_FETCH_REPLAY_RECORDING_SEGMENT_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the replay belongs. Examples: 'sentry', 'my-org'.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project to which the replay belongs. Examples: 'javascript', 'my-project'.
   */
  project_id_or_slug?: string;
  /**
   * Replay Id
   * @description The unique identifier of the replay to retrieve. This is a 32-character hexadecimal string (UUID4) without dashes. Example: "a6ef355da2bb43f8a7825c45f98c5177".
   */
  replay_id?: string;
  /**
   * Segment Id
   * @description The ID of the specific recording segment within the replay to retrieve. This is an integer. Example: 0.
   */
  segment_id?: number;
};

/**
 * Type of SENTRY's SENTRY_FETCH_REPLAY_RECORDING_SEGMENT tool output.
 */
type SENTRY_FETCH_REPLAY_RECORDING_SEGMENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the replay recording segment data.
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
 * Type of SENTRY's SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION tool input.
 */
type SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION_INPUT = {
  /**
   * Alert Rule Id
   * @description The numeric identifier of the metric alert rule whose activations are to be retrieved.
   */
  alert_rule_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or slug of the Sentry organization to which the alert rule belongs.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION tool output.
 */
type SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description The API response payload. This field is expected to contain or represent the list of activations for the specified alert rule. Each activation typically includes details such as its unique identifier and the `date_added` timestamp indicating when the alert was triggered.
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
 * Type of SENTRY's SENTRY_GET_INTEGRATION_DETAILS_BY_ORG tool input.
 */
type SENTRY_GET_INTEGRATION_DETAILS_BY_ORG_INPUT = {
  /**
   * Integration Id
   * @description The unique ID of the integration installed for the specified organization (e.g., 'github').
   */
  integration_id?: string;
  /**
   * Organization Id Or Slug
   * @description The Sentry organization's unique ID or human-readable slug (e.g., 'the-acme-corp').
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_INTEGRATION_DETAILS_BY_ORG tool output.
 */
type SENTRY_GET_INTEGRATION_DETAILS_BY_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG tool input.
 */
type SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG_INPUT = {
  /**
   * Detailed
   * @description Specify `"0"` to exclude project and team details for a more concise organization summary; otherwise, these details are included.
   */
  detailed?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG tool output.
 */
type SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the retrieved organization.
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_DETAILS tool input.
 */
type SENTRY_GET_ORGANIZATION_DETAILS_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination to retrieve next/previous result sets.
   */
  cursor?: string;
  /**
   * Owner
   * @description Set to `true` to list only organizations where the authenticated user is an owner.
   */
  owner?: boolean;
  /**
   * Query
   * @description Filter results using Sentry's query syntax. Supported fields: `id` (organization ID), `slug` (organization slug), `status` (current status like 'active', 'pending_deletion'), `email` or `member_id` (member's email or ID), `platform` (project platform like 'python'), and `query` (substring match on organization name, slug, member details).
   */
  query?: string;
  /**
   * Sort By
   * @description Sort results by 'members' (number of members), 'projects' (number of projects), or 'events' (number of events in past 24h), in descending order. Defaults to creation date.
   */
  sortBy?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_DETAILS tool output.
 */
type SENTRY_GET_ORGANIZATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of organizations matching the query criteria, along with their respective details.
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_ENVIRONMENTS tool input.
 */
type SENTRY_GET_ORGANIZATION_ENVIRONMENTS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Visibility
   * @description Filters environments by visibility: 'all' (includes hidden), 'hidden', or 'visible'. Defaults to 'visible' if not provided.
   * @enum {string}
   */
  visibility?: "all" | "hidden" | "visible";
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_ENVIRONMENTS tool output.
 */
type SENTRY_GET_ORGANIZATION_ENVIRONMENTS_OUTPUT = {
  /**
   * Data
   * @description Raw Sentry API response, typically a list of environment objects, each describing an environment with its 'id' and 'name'.
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_ISSUE_DETAILS tool input.
 */
type SENTRY_GET_ORGANIZATION_ISSUE_DETAILS_INPUT = {
  /**
   * Issue Id
   * @description The unique identifier (ID) of the issue for which details are to be retrieved.
   */
  issue_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the issue belongs.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_ISSUE_DETAILS tool output.
 */
type SENTRY_GET_ORGANIZATION_ISSUE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the issue. This typically includes attributes such as title, first seen and last seen timestamps, number of comments, user reports, and summarized event data.
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG tool input.
 */
type SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG_INPUT = {
  /**
   * Environment
   * @description A list of environment names to filter the monitor details by. If omitted, details for all environments are considered.
   */
  environment?: string[];
  /**
   * Monitor Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the monitor whose details are to be retrieved.
   */
  monitor_id_or_slug?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the organization to which the monitor belongs.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG tool output.
 */
type SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed attributes and configuration of the monitor.
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_RELEASE_VERSION tool input.
 */
type SENTRY_GET_ORGANIZATION_RELEASE_VERSION_INPUT = {
  /**
   * Adoption Stages
   * @description Include information about the release's adoption stages.
   */
  adoptionStages?: boolean;
  /**
   * Health
   * @description Include health data (e.g., crash rates, session statistics) with release details.
   */
  health?: boolean;
  /**
   * Health Stats Period
   * @description Time window for health statistics, used if 'health' is true.
   * @enum {string}
   */
  healthStatsPeriod?: "14d" | "1d" | "1h" | "24h" | "2d" | "30d" | "48h" | "7d" | "90d";
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id
   * @description ID of a specific project to scope release details; if omitted, details may cover multiple projects.
   */
  project_id?: string;
  /**
   * Query
   * @description Filter data for this release using Sentry's search syntax (e.g., to find specific events). See Sentry documentation for syntax. Example from Sentry: `'''(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)'''`
   */
  query?: string;
  /**
   * Sort
   * @description Sorting order for data within release details (e.g., environments by adoption).
   * @enum {string}
   */
  sort?: "crash_free_sessions" | "crash_free_users" | "date" | "sessions" | "users";
  /**
   * Status
   * @description Filter release details by status ('open' or 'archived').
   * @enum {string}
   */
  status?: "archived" | "open";
  /**
   * Summary Stats Period
   * @description Time window for summary statistics.
   * @enum {string}
   */
  summaryStatsPeriod?: "14d" | "1d" | "1h" | "24h" | "2d" | "30d" | "48h" | "7d" | "90d";
  /**
   * Version
   * @description The unique version identifier of the release. This can be a semantic version (e.g., '1.2.3'), a commit hash, or any string used to identify the release (e.g., 'backend@1.0.0-alpha').
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_RELEASE_VERSION tool output.
 */
type SENTRY_GET_ORGANIZATION_RELEASE_VERSION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information for the specified release version. The structure of this dictionary can vary based on the data available for the release and the query parameters used (e.g., inclusion of health data).
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_SESSIONS tool input.
 */
type SENTRY_GET_ORGANIZATION_SESSIONS_INPUT = {
  /**
   * End
   * @description End of the query period (ISO-8601 format). Ignored if `statsPeriod` is provided.
   */
  end?: string;
  /**
   * Environment
   * @description Environment names to filter sessions by (e.g., 'production', 'staging').
   */
  environment?: string[];
  /**
   * Field
   * @description Fields for session statistics (e.g., `sum(session)`, `count_unique(user)`, `p99(session.duration)`, `crash_free_rate(user)`). Session duration aggregations may be incomplete for data after Jan 12, 2023.
   */
  field?: string[];
  /**
   * Group By
   * @description Properties to group session data by (e.g., `project`, `release`, `environment`, `session.status`).
   */
  groupBy?: string[];
  /**
   * Include Series
   * @description Set to `0` to exclude, `1` (API default) to include time series data.
   */
  includeSeries?: number;
  /**
   * Include Totals
   * @description Set to `0` to exclude, `1` (API default) to include totals.
   */
  includeTotals?: number;
  /**
   * Interval
   * @description Time series data resolution (e.g., '1h', '1d'; format like `statsPeriod`). Minimum '1h', maximum '1d'. Must cleanly divide one day.
   */
  interval?: string;
  /**
   * Order By
   * @description Field from `field` parameter to order results by. Prefix with '-' for descending (e.g., `-sum(session)`).
   */
  orderBy?: string;
  /**
   * Organization Id Or Slug
   * @description Unique ID or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Maximum number of groups (aggregated data points based on `groupBy`) per request.
   */
  per_page?: number;
  /**
   * Project
   * @description Project IDs to filter sessions by. Use `[-1]` for all accessible projects.
   */
  project?: number[];
  /**
   * Query
   * @description Sentry search query to filter sessions (e.g., `(transaction:foo AND release:abc)`). See Sentry docs for syntax.
   */
  query?: string;
  /**
   * Start
   * @description Start of the query period (ISO-8601 format). Ignored if `statsPeriod` is provided.
   */
  start?: string;
  /**
   * Stats Period
   * @description Relative query period (e.g., '24h', '7d'), overrides `start` and `end`. Uses 'd' (days), 'h' (hours), 'm' (minutes), 's' (seconds), or 'w' (weeks).
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_SESSIONS tool output.
 */
type SENTRY_GET_ORGANIZATION_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Retrieved session statistics, including groups, series, and totals, structured based on request parameters.
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
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_STATS_SUMMARY tool input.
 */
type SENTRY_GET_ORGANIZATION_STATS_SUMMARY_INPUT = {
  /**
   * Category
   * @description Filter by event category. If 'attachment', other categories cannot be included. If 'error', `default` and `security` are also included.
   * @enum {string}
   */
  category?: "error" | "transaction" | "attachment" | "replays" | "profiles";
  /**
   * Download
   * @description If true, triggers a CSV download of the response; otherwise JSON.
   */
  download?: boolean;
  /**
   * End
   * @description Inclusive end of the time series range (UTC ISO8601 datetime string or Unix timestamp). Use with `start` instead of `statsPeriod`.
   */
  end?: string;
  /**
   * Field
   * @description Aggregation field for event counts. Interpretation depends on event type:
   *     `sum(quantity)`: For attachments, total size in bytes. For sessions, total events within sessions. For others, event count.
   *     `sum(times_seen)`: Sum of unique occurrences. For sessions, count of unique sessions. For attachments, total attachments.
   * @enum {string}
   */
  field?: "sum(quantity)" | "sum(times_seen)";
  /**
   * Interval
   * @description Time series resolution (e.g., `1h`). Default is `1h`. Minimum `1h`. Intervals must cleanly divide one day and cannot exceed `1d`.
   */
  interval?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Outcome
   * @description Filter by event outcome status (e.g., accepted, filtered, rate-limited).
   * @enum {string}
   */
  outcome?: "accepted" | "filtered" | "rate_limited" | "invalid" | "abuse" | "client_discard" | "cardinality_limited";
  /**
   * Project
   * @description List of project IDs (strings or integers) to filter by. Omit or use empty list for all projects.
   */
  project?: unknown[];
  /**
   * Reason
   * @description Reason an event was filtered or dropped (e.g., `project_quota`, `invalid_origin`).
   */
  reason?: string;
  /**
   * Start
   * @description Start of the time series range (UTC ISO8601 datetime string or Unix timestamp). Use with `end` instead of `statsPeriod`.
   */
  start?: string;
  /**
   * Stats Period
   * @description Relative time series range (e.g., `1d`, `2h`). Units: `m`, `h`, `d`, `w`. Use instead of `start` and `end`.
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_ORGANIZATION_STATS_SUMMARY tool output.
 */
type SENTRY_GET_ORGANIZATION_STATS_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Summarized statistics, typically including start/end times, aggregated data (by project or totals), and counts based on request filters.
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
 * Type of SENTRY's SENTRY_GET_PROJECT_EVENTS tool input.
 */
type SENTRY_GET_PROJECT_EVENTS_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination, pointing to the start of the next/previous page, typically from a 'Link' header.
   */
  cursor?: string;
  /**
   * Full
   * @description If `True`, retrieves full event details including stacktraces; otherwise, a summary is returned.
   * @default false
   */
  full: boolean;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Sample
   * @description If `True`, returns events in a pseudo-random yet deterministic order.
   * @default false
   */
  sample: boolean;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_EVENTS tool output.
 */
type SENTRY_GET_PROJECT_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Sentry API response containing the list of project events; structure depends on the 'full' parameter and Sentry's API.
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
 * Type of SENTRY's SENTRY_GET_PROJECT_EVENT_STATS tool input.
 */
type SENTRY_GET_PROJECT_EVENT_STATS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the project.
   */
  project_id_or_slug?: string;
  /**
   * Resolution
   * @description Time resolution for the statistics.
   * @enum {string}
   */
  resolution?: "10s" | "1h" | "1d";
  /**
   * Since
   * @description UNIX timestamp (seconds since epoch) for the start of the query period.
   */
  since?: string;
  /**
   * Stat
   * @description Specifies the type of event statistic to query.
   * @enum {string}
   */
  stat?: "received" | "rejected" | "blacklisted" | "generated";
  /**
   * Until
   * @description UNIX timestamp (seconds since epoch) for the end of the query period.
   */
  until?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_EVENT_STATS tool output.
 */
type SENTRY_GET_PROJECT_EVENT_STATS_OUTPUT = {
  /**
   * Data
   * @description Queried event statistics, typically a series of [timestamp, count] pairs.
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
 * Type of SENTRY's SENTRY_GET_PROJECT_HOOK tool input.
 */
type SENTRY_GET_PROJECT_HOOK_INPUT = {
  /**
   * Hook Id
   * @description The unique identifier (GUID) of the service hook to be retrieved. This ID is assigned when the hook is created.
   */
  hook_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization to which the project and its service hook belong.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry project to which the service hook is bound.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_HOOK tool output.
 */
type SENTRY_GET_PROJECT_HOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the retrieved service hook. This includes its configuration, events it listens to, and other relevant attributes.
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
 * Type of SENTRY's SENTRY_GET_PROJECT_LIST tool input.
 */
type SENTRY_GET_PROJECT_LIST_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for paginating through project lists, typically obtained from pagination details in a previous API response.
   */
  cursor?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_LIST tool output.
 */
type SENTRY_GET_PROJECT_LIST_OUTPUT = {
  /**
   * Data
   * @description Dictionary from Sentry containing the list of projects; refer to Sentry's 'List Your Projects' API documentation for schema details.
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
 * Type of SENTRY's SENTRY_GET_PROJECT_MONITOR_BY_ID tool input.
 */
type SENTRY_GET_PROJECT_MONITOR_BY_ID_INPUT = {
  /**
   * Monitor Id Or Slug
   * @description ID or slug of the Sentry cron monitor.
   */
  monitor_id_or_slug?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_MONITOR_BY_ID tool output.
 */
type SENTRY_GET_PROJECT_MONITOR_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_RULE_DETAILS tool input.
 */
type SENTRY_GET_PROJECT_RULE_DETAILS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Rule Id
   * @description ID of the alert rule.
   */
  rule_id?: number;
};

/**
 * Type of SENTRY's SENTRY_GET_PROJECT_RULE_DETAILS tool output.
 */
type SENTRY_GET_PROJECT_RULE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Detailed attributes and configuration of the alert rule.
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
 * Type of SENTRY's SENTRY_GET_SCIM_GROUP_BY_TEAM_ID tool input.
 */
type SENTRY_GET_SCIM_GROUP_BY_TEAM_ID_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The slug (human-readable identifier) or numeric ID of the Sentry organization to which the team belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id
   * @description The unique numeric identifier of the Sentry team whose SCIM group information is to be retrieved.
   */
  team_id?: number;
};

/**
 * Type of SENTRY's SENTRY_GET_SCIM_GROUP_BY_TEAM_ID tool output.
 */
type SENTRY_GET_SCIM_GROUP_BY_TEAM_ID_OUTPUT = {
  /**
   * Data
   * @description SCIM representation of the Sentry team, including attributes and members, conforming to the SCIM Group schema.
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
 * Type of SENTRY's SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION tool input.
 */
type SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION tool output.
 */
type SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of Sentry App installations for the specified organization.
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
 * Type of SENTRY's SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG tool input.
 */
type SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG_INPUT = {
  /**
   * Cursor
   * @description A pagination cursor used to fetch the next or previous set of results. Obtain this from the 'Link' header of the previous response.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The ID or slug of the Sentry team.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG tool output.
 */
type SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG_OUTPUT = {
  /**
   * Data
   * @description A list of team members. The structure of each member object is not explicitly detailed but typically includes user information.
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
 * Type of SENTRY's SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT tool input.
 */
type SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Replay Id
   * @description The unique identifier of the session replay. This is a 32-character hexadecimal string (UUIDv4 format without dashes).
   */
  replay_id?: string;
};

/**
 * Type of SENTRY's SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT tool output.
 */
type SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_DASHBOARDS tool input.
 */
type SENTRY_LIST_ORGANIZATION_DASHBOARDS_INPUT = {
  /**
   * Cursor
   * @description Opaque cursor for pagination, used to retrieve the next or previous page of dashboards. Obtain from the 'Link' header or pagination metadata of a previous API response.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization whose dashboards are to be listed.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Maximum number of dashboard records per page. Defaults to Sentry's setting (often 50) if unspecified. Max: 100.
   */
  per_page?: number;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_DASHBOARDS tool output.
 */
type SENTRY_LIST_ORGANIZATION_DASHBOARDS_OUTPUT = {
  /**
   * Data
   * @description Dictionary with the API response, including the list of custom dashboards for the organization and any applicable pagination information.
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
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_MEMBERS tool input.
 */
type SENTRY_LIST_ORGANIZATION_MEMBERS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_MEMBERS tool output.
 */
type SENTRY_LIST_ORGANIZATION_MEMBERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_RELEASES tool input.
 */
type SENTRY_LIST_ORGANIZATION_RELEASES_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization whose releases are to be listed.
   */
  organization_id_or_slug?: string;
  /**
   * Query
   * @description An optional string to filter releases. The filter performs a "starts with" match on the release version. For example, "1.0" would match "1.0.1" and "1.0-beta", while "backend-" would match "backend-v2.1". If omitted, all releases are returned.
   */
  query?: string;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_RELEASES tool output.
 */
type SENTRY_LIST_ORGANIZATION_RELEASES_OUTPUT = {
  /**
   * Data
   * @description Raw Sentry API response, typically a JSON array of release objects from the '/api/0/organizations/{organization_id_or_slug}/releases/' endpoint.
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
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_REPOSITORIES tool input.
 */
type SENTRY_LIST_ORGANIZATION_REPOSITORIES_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization for which to list repositories. The slug is the URL-friendly name of the organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_REPOSITORIES tool output.
 */
type SENTRY_LIST_ORGANIZATION_REPOSITORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_USER_TEAMS tool input.
 */
type SENTRY_LIST_ORGANIZATION_USER_TEAMS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description Identifier (ID) or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_LIST_ORGANIZATION_USER_TEAMS tool output.
 */
type SENTRY_LIST_ORGANIZATION_USER_TEAMS_OUTPUT = {
  /**
   * Data
   * @description List of team objects, each detailing a team the user is a member of in the specified organization.
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
 * Type of SENTRY's SENTRY_LIST_PROJECT_USERS tool input.
 */
type SENTRY_LIST_PROJECT_USERS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Query
   * @description An optional query string to filter the list of users. Use prefixes like `id:`, `email:`, `username:`, or `ip:` to target specific fields. For example, `email:foo@example.com` or `username:john.doe`.
   */
  query?: string;
};

/**
 * Type of SENTRY's SENTRY_LIST_PROJECT_USERS tool output.
 */
type SENTRY_LIST_PROJECT_USERS_OUTPUT = {
  /**
   * Data
   * @description List of Sentry user objects, each detailing a user (e.g., `id`, `username`, `email`). Note: Sentry API might structure this as a dictionary.
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
 * Type of SENTRY's SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS tool input.
 */
type SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS_INPUT = {
  /**
   * Count
   * @description Maximum number of user records per response (max 100).
   * @default 100
   */
  count: number;
  /**
   * Excluded Attributes
   * @description Attribute names to exclude from user objects; only `members` is currently supported for exclusion.
   * @default []
   */
  excludedAttributes: string[];
  /**
   * Filter
   * @description SCIM filter expression to narrow down users (e.g., `userName eq "user@example.com"`). Only `eq` operator is supported.
   */
  filter?: string;
  /**
   * Organization Id Or Slug
   * @description The organization's unique identifier (ID) or human-readable slug.
   */
  organization_id_or_slug?: string;
  /**
   * Start Index
   * @description The 1-based starting index for pagination.
   * @default 1
   */
  startIndex: number;
};

/**
 * Type of SENTRY's SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS tool output.
 */
type SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS_OUTPUT = {
  /**
   * Data
   * @description Paginated list of SCIM users matching the query, structured per SCIM User Resource Properties schema.
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
 * Type of SENTRY's SENTRY_LIST_TEAMS_IN_ORGANIZATION tool input.
 */
type SENTRY_LIST_TEAMS_IN_ORGANIZATION_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for retrieving the next or previous page of results.
   */
  cursor?: string;
  /**
   * Detailed
   * @description If '1', includes project details for each team. If '0' or not provided, excludes project details.
   */
  detailed?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_LIST_TEAMS_IN_ORGANIZATION tool output.
 */
type SENTRY_LIST_TEAMS_IN_ORGANIZATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS tool input.
 */
type SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS_INPUT = {
  /**
   * External Id
   * @description Optional ID of a user within the external provider (e.g., Slack user ID).
   * @default null
   */
  external_id: string | null;
  /**
   * External Name
   * @description Name of the external team or channel to link (e.g., #engineering, @dev-team).
   */
  external_name?: string;
  /**
   * Integration Id
   * @description Sentry ID for the integration with the specified provider (e.g., a specific Slack workspace or GitHub organization).
   */
  integration_id?: number;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization where the team resides.
   */
  organization_id_or_slug?: string;
  /**
   * Provider
   * @description The third-party provider of the external team or channel.
   * @enum {string}
   */
  provider?: "github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "custom_scm";
  /**
   * Team Id Or Slug
   * @description The ID or slug of the Sentry team to link.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS tool output.
 */
type SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA tool input.
 */
type SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA_INPUT = {
  /**
   * Is Muted
   * @description Set to `true` to prevent this monitor from creating incidents (alerts), or `false` to allow them. Omit to leave current muted status unchanged.
   */
  is_muted?: boolean;
  /**
   * Monitor Id Or Slug
   * @description ID or slug of the Sentry monitor to be updated.
   */
  monitor_id_or_slug?: string;
  /**
   * Name
   * @description The new name for the monitor; used in notifications and helps identify the monitor in the Sentry UI.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization to which the monitor belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description The new owner of the monitor, specified as a team or user ID (e.g., 'user:USER_ID' or 'team:TEAM_ID'). Omit to leave current owner unchanged.
   */
  owner?: string;
  /**
   * Slug
   * @description A new unique slug for the monitor within the organization (pattern: `^[a-z][a-z0-9_\-]*$`). Changing this slug requires updating any instrumented check-in calls for this monitor. Omit to leave current slug unchanged.
   */
  slug?: string;
  /**
   * Status
   * @description The new status for the monitor. 'active' monitors accept events and count towards the quota; 'disabled' monitors do not accept events and are excluded from the quota.
   * @default active
   * @enum {string}
   */
  status: "active" | "disabled";
  /**
   * Type
   * @description The type of the monitor; must be 'cron_job', indicating a recurring task.
   * @enum {string}
   */
  type?: "cron_job";
};

/**
 * Type of SENTRY's SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA tool output.
 */
type SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full representation of the updated monitor.
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
 * Type of SENTRY's SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION tool input.
 */
type SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION_INPUT = {
  /**
   * Action Id
   * @description The unique numerical ID of the specific notification action to be modified.
   */
  action_id?: number;
  /**
   * Integration Id
   * @description The ID of the integration for the notification service, required if `service_type` is `slack`, `pagerduty`, or `opsgenie`.
   * @default null
   */
  integration_id: number | null;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which this notification action belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description A list of project slugs for which this notification action will be active, applying only to these projects if provided. An empty list's interpretation (e.g., no projects or all projects) may vary.
   * @default null
   */
  projects: string[] | null;
  /**
   * Service Type
   * @description The service through which the notification will be sent. Supported services are: `email`, `slack`, `sentry_notification`, `pagerduty`, `opsgenie`.
   */
  service_type?: string;
  /**
   * Target Display
   * @description A human-readable name for the notification target (e.g., a Slack channel name like '#critical-alerts' or an Opsgenie team name). This is required if `service_type` is `slack` or `opsgenie`.
   * @default null
   */
  target_display: string | null;
  /**
   * Target Identifier
   * @description The unique identifier of the notification target within the chosen service (e.g., a Slack channel ID like 'C012AB3CD' or an Opsgenie team ID). This is required if `service_type` is `slack` or `opsgenie`.
   * @default null
   */
  target_identifier: string | null;
  /**
   * Trigger Type
   * @description Specifies the type of event that triggers the notification. Currently, the only supported value is `spike-protection`.
   */
  trigger_type?: string;
};

/**
 * Type of SENTRY's SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION tool output.
 */
type SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the modified notification action.
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
 * Type of SENTRY's SENTRY_MODIFY_ORGANIZATION_SETTINGS tool input.
 */
type SENTRY_MODIFY_ORGANIZATION_SETTINGS_INPUT = {
  /**
   * Alerts Member Write
   * @description Grant members `alerts:write` scope for alert rule management.
   */
  alertsMemberWrite?: boolean;
  /**
   * Allow Join Requests
   * @description Allow users to request to join the organization; admins approve/deny.
   */
  allowJoinRequests?: boolean;
  /**
   * Allow Shared Issues
   * @description Enable sharing limited issue details with anonymous users (e.g., via public links).
   */
  allowSharedIssues?: boolean;
  /**
   * Attachments Role
   * @description Minimum role to download event attachments (e.g., crash reports, logs).
   * @enum {string}
   */
  attachmentsRole?: "member" | "admin" | "manager" | "owner";
  /**
   * Avatar
   * @description Base64 encoded image for the organization avatar; required if `avatarType` is 'upload'.
   */
  avatar?: string;
  /**
   * Avatar Type
   * @description Type of organization avatar: 'letter_avatar' (initials) or 'upload' (custom image).
   * @enum {string}
   */
  avatarType?: "letter_avatar" | "upload";
  /**
   * Cancel Deletion
   * @description Cancel a pending deletion and restore the organization.
   */
  cancelDeletion?: boolean;
  /**
   * Codecov Access
   * @description Enable Code Coverage Insights (Team plan or higher).
   */
  codecovAccess?: boolean;
  /**
   * Data Scrubber
   * @description Enforce server-side data scrubbing for all projects based on defined rules.
   */
  dataScrubber?: boolean;
  /**
   * Data Scrubber Defaults
   * @description Apply Sentry's default scrubbing rules (e.g., for passwords, credit cards) to event data for all projects.
   */
  dataScrubberDefaults?: boolean;
  /**
   * Debug Files Role
   * @description Minimum role to download debug files (e.g., ProGuard mappings, source maps).
   * @enum {string}
   */
  debugFilesRole?: "member" | "admin" | "manager" | "owner";
  /**
   * Default Role
   * @description Default role for new members when they join the organization.
   * @enum {string}
   */
  defaultRole?: "member" | "admin" | "manager" | "owner";
  /**
   * Enhanced Privacy
   * @description Activate enhanced privacy controls, limiting PII and source code display (e.g., in notifications).
   */
  enhancedPrivacy?: boolean;
  /**
   * Events Member Admin
   * @description Grant members `event:admin` scope to delete events.
   */
  eventsMemberAdmin?: boolean;
  /**
   * Github Nudge Invite
   * @description Enable Sentry to detect GitHub committers not in Sentry org and suggest inviting them. Requires GitHub integration.
   */
  githubNudgeInvite?: boolean;
  /**
   * Github Open Pr Bot
   * @description Allow Sentry to comment on open GitHub PRs with related error issues. Requires GitHub integration.
   */
  githubOpenPRBot?: boolean;
  /**
   * Github Pr Bot
   * @description Allow Sentry to comment on recent GitHub PRs suspected of introducing new issues. Requires GitHub integration.
   */
  githubPRBot?: boolean;
  /**
   * Hide Ai Features
   * @description Hide AI-powered features in the Sentry UI for this organization.
   */
  hideAiFeatures?: boolean;
  /**
   * Is Early Adopter
   * @description Opt the organization into new Sentry features before public release.
   */
  isEarlyAdopter?: boolean;
  /**
   * Issue Alerts Thread Flag
   * @description Configure Sentry Slack integration to post Issue Alert replies in threads. Requires Slack integration.
   */
  issueAlertsThreadFlag?: boolean;
  /**
   * Metric Alerts Thread Flag
   * @description Configure Sentry Slack integration to post Metric Alert replies in threads. Requires Slack integration.
   */
  metricAlertsThreadFlag?: boolean;
  /**
   * Name
   * @description A new name for the organization.
   */
  name?: string;
  /**
   * Open Membership
   * @description Allow members to freely join any team without invitation or approval.
   */
  openMembership?: boolean;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Relay Pii Config
   * @description JSON string defining advanced, project-specific data scrubbing rules. Applies to new events and overwrites existing advanced configuration. Warning: Updating this field overwrites all existing advanced rules.
   */
  relayPiiConfig?: string;
  /**
   * Require2 Fa
   * @description Enforce two-factor authentication (2FA) for all members.
   */
  require2FA?: boolean;
  /**
   * Safe Fields
   * @description List of global field names exempt from data scrubbing, ensuring their values are preserved.
   */
  safeFields?: string[];
  /**
   * Scrape Java Script
   * @description Allow Sentry to fetch missing JavaScript source context from public URLs if source maps are incomplete.
   */
  scrapeJavaScript?: boolean;
  /**
   * Scrub Ip Addresses
   * @description Prevent storage of IP addresses for new events in this organization.
   */
  scrubIPAddresses?: boolean;
  /**
   * Sensitive Fields
   * @description List of global field names whose values will be scrubbed from event data across all projects.
   */
  sensitiveFields?: string[];
  /**
   * Slug
   * @description A new unique slug for the organization, used in URLs.
   */
  slug?: string;
  /**
   * Store Crash Reports
   * @description Number of native crash reports (e.g., Minidumps) to store per issue (0=Disabled, -1=Unlimited).
   */
  storeCrashReports?: number;
  /**
   * Trusted Relays
   * @description List of local Relay configurations. Each is a dict with `name`, `publicKey`, `description`. Business/Enterprise plans. Warning: Overwrites existing configurations.
   */
  trustedRelays?: Record<string, never>[];
};

/**
 * Type of SENTRY's SENTRY_MODIFY_ORGANIZATION_SETTINGS tool output.
 */
type SENTRY_MODIFY_ORGANIZATION_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the updated organization settings.
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
 * Type of SENTRY's SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES tool input.
 */
type SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES_INPUT = {
  /**
   * Dist
   * @description New distribution name for the file, often a unique build or version code.
   */
  dist?: string;
  /**
   * File Id
   * @description ID of the file to modify, typically a hash or unique identifier.
   */
  file_id?: string;
  /**
   * Name
   * @description New name for the file, including its full path.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description Version identifier of the release.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES tool output.
 */
type SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_PATCH_SCIM_GROUP_OPERATIONS tool input.
 */
type SENTRY_PATCH_SCIM_GROUP_OPERATIONS_INPUT = {
  /**
   * Operations
   * @description A list of SCIM patch operations to be applied to the team. Each operation specifies an action (e.g., add, remove, replace), a target path, and a value. Multiple operations can be provided to perform several updates in a single request.
   */
  Operations?: {
      /**
       * Op
       * @description The operation to be performed. Common operations include 'add', 'remove', and 'replace'.
       */
      op: string;
      /**
       * Path
       * @description An attribute path indicating the target of the operation. For example, 'members' to target the list of team members, or 'members[value eq "user_id"]' to target a specific member. This field is not required for all operations (e.g., replacing the entire team object).
       */
      path?: string;
      /**
       * Value
       * @description A dictionary containing the value(s) to be used for the operation. The structure of this field depends on the specific 'op' and 'path'. For example, when renaming a team, it might include 'displayName'. When adding members, it might be a list of member objects.
       */
      value?: {
          [key: string]: unknown;
      };
  }[];
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization to which the team belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id
   * @description The unique identifier of the Sentry team to be updated.
   */
  team_id?: number;
};

/**
 * Type of SENTRY's SENTRY_PATCH_SCIM_GROUP_OPERATIONS tool output.
 */
type SENTRY_PATCH_SCIM_GROUP_OPERATIONS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the SCIM representation of the team after the PATCH operations have been applied.
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
 * Type of SENTRY's SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION tool input.
 */
type SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION_INPUT = {
  /**
   * Operations
   * @description A list of SCIM PATCH operations. For this action, must contain one operation setting the member's 'active' attribute to 'false', which deactivates and permanently deletes the member.
   */
  Operations?: {
      /**
       * Op
       * @description The operation type; for this action, it must be 'replace'.
       */
      op: string;
      /**
       * Path
       * @description The JSON Pointer path to the attribute to be modified; must be 'active'.
       */
      path?: string;
      /**
       * Value
       * @description The value for the operation. Must be `false` (boolean) to deactivate a member.
       */
      value: unknown;
  }[];
  /**
   * Member Id
   * @description The ID of the organization member to update.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION tool output.
 */
type SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the SCIM representation of the member after the update operation, if applicable. May be empty if the member is deleted and no content is returned.
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
 * Type of SENTRY's SENTRY_POST_PROJECT_SYMBOL_SOURCES tool input.
 */
type SENTRY_POST_PROJECT_SYMBOL_SOURCES_INPUT = {
  /**
   * Access Key
   * @description AWS Access Key ID for S3 authentication. Required if `type` is `s3`.
   */
  access_key?: string;
  /**
   * Bucket
   * @description Name of the Google Cloud Storage (GCS) or Amazon S3 bucket containing symbols. Required if `type` is `gcs` or `s3`.
   */
  bucket?: string;
  /**
   * Client Email
   * @description Client email for GCS service account. Required if `type` is `gcs`.
   */
  client_email?: string;
  /**
   * Id
   * @description Optional unique identifier (auto-generated if omitted); must not start with `sentry:`.
   */
  id?: string;
  /**
   * Layout  Casing
   * @description Specifies the filename casing convention for symbols.
   * @enum {string}
   */
  layout__casing?: "lowercase" | "uppercase" | "default";
  /**
   * Layout  Type
   * @description Specifies the expected directory structure or layout for symbols.
   * @enum {string}
   */
  layout__type?: "native" | "symstore" | "symstore_index2" | "ssqp" | "unified" | "debuginfod" | "slashsymbols";
  /**
   * Name
   * @description Human-readable name for the symbol source.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description Identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Password
   * @description Password for HTTP basic authentication. Applicable if `type` is `http`.
   */
  password?: string;
  /**
   * Prefix
   * @description Optional path prefix within the GCS or S3 bucket. Applicable if `type` is `gcs` or `s3`.
   */
  prefix?: string;
  /**
   * Private Key
   * @description Private key (PEM format) for GCS service account. Required if `type` is `gcs`.
   */
  private_key?: string;
  /**
   * Project Id Or Slug
   * @description Identifier (ID or slug) of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Region
   * @description AWS region for the S3 bucket (e.g., `us-east-1`). Required if `type` is `s3`.
   * @enum {string}
   */
  region?: "us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "ap-east-1" | "ap-south-1" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "cn-north-1" | "cn-northwest-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-north-1" | "sa-east-1" | "us-gov-east-1" | "us-gov-west-1";
  /**
   * Secret Key
   * @description AWS Secret Access Key for S3 authentication. Required if `type` is `s3`.
   */
  secret_key?: string;
  /**
   * Type
   * @description Type of the symbol source (e.g., `http`, `gcs`, `s3`), which determines required configuration fields.
   * @enum {string}
   */
  type?: "http" | "gcs" | "s3";
  /**
   * Url
   * @description Base URL for an HTTP symbol source. Required if `type` is `http`.
   */
  url?: string;
  /**
   * Username
   * @description Username for HTTP basic authentication. Applicable if `type` is `http`.
   */
  username?: string;
};

/**
 * Type of SENTRY's SENTRY_POST_PROJECT_SYMBOL_SOURCES tool output.
 */
type SENTRY_POST_PROJECT_SYMBOL_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Configuration of the newly created symbol source.
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
 * Type of SENTRY's SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION tool input.
 */
type SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description Unique ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description List of project slugs to enable Spike Protection for; use `['$all']` for all projects in the organization.
   */
  projects?: string[];
};

/**
 * Type of SENTRY's SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION tool output.
 */
type SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Result of the spike protection enablement, detailing the status for affected projects.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ALERT_RULE_DETAILS tool input.
 */
type SENTRY_RETRIEVE_ALERT_RULE_DETAILS_INPUT = {
  /**
   * Alert Rule Id
   * @description The numeric ID of the alert rule.
   */
  alert_rule_id?: number;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ALERT_RULE_DETAILS tool output.
 */
type SENTRY_RETRIEVE_ALERT_RULE_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO tool input.
 */
type SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier or short name (slug) of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Repo Id
   * @description The unique identifier of the repository.
   */
  repo_id?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO tool output.
 */
type SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO_OUTPUT = {
  /**
   * Data
   * @description A list of commit objects. Each object typically includes fields like 'id', 'message', and 'dateCreated'.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE tool input.
 */
type SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The slug (e.g., `my-org-slug`) or numerical ID (e.g., `1234567`) of the Sentry organization to which the release belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release. This can be a semantic version string (e.g., '1.0.0', 'my-project@2.3.4-beta'), a descriptive name (e.g., 'backend-deploy-2024-05-20'), or a commit SHA if used as the version string (e.g., 'abcdef123456').
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE tool output.
 */
type SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE_OUTPUT = {
  /**
   * Data
   * @description The API response, detailing files changed in the release's commits (often a list of file objects).
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
 * Type of SENTRY's SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT tool input.
 */
type SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT tool output.
 */
type SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API's response, typically including a list of debug information files (dSYM files) with details such as ID, UUID, CPU name, object name, symbol type, size, and creation date.
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
 * Type of SENTRY's SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION tool input.
 */
type SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION_INPUT = {
  /**
   * Event Id
   * @description The unique 32-character hexadecimal identifier of the Sentry event to be resolved.
   */
  event_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization where the event occurred. This specifies the scope for the event lookup.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION tool output.
 */
type SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the resolved event information. This includes the `projectSlug`, `groupID` (internal issue ID), and the `id` (internal event ID), along with other event attributes.
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
 * Type of SENTRY's SENTRY_RETRIEVE_FILES_FOR_RELEASE tool input.
 */
type SENTRY_RETRIEVE_FILES_FOR_RELEASE_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable name (slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The specific version identifier of the release. This can be a commit hash (e.g., '4018a1c'), a semantic version (e.g., '1.0.0'), a custom release name (e.g., 'my-project@1.0.0'), or the literal string 'latest'.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_FILES_FOR_RELEASE tool output.
 */
type SENTRY_RETRIEVE_FILES_FOR_RELEASE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID tool input.
 */
type SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID_INPUT = {
  /**
   * End
   * @description The end timestamp for filtering events, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`). If provided, `start` must also be specified. This parameter is overridden by `statsPeriod` if both are used.
   */
  end?: string;
  /**
   * Environment
   * @description A list of environment names (e.g., 'production', 'staging') to filter events by. Only events from these specified environments will be returned.
   */
  environment?: string[];
  /**
   * Full
   * @description If set to `true`, the full event body, including stacktraces, is included in the response for each event. If `false` or not provided (default), summarized event data is returned.
   */
  full?: boolean;
  /**
   * Issue Id
   * @description The unique numeric identifier of the Sentry issue for which to retrieve associated events.
   */
  issue_id?: number;
  /**
   * Query
   * @description An optional Sentry search query string to further filter events. Uses Sentry's search syntax (e.g., 'level:error', 'user.ip:127.0.0.1', 'handled:no tag_name:tag_value').
   */
  query?: string;
  /**
   * Sample
   * @description If set to `true`, events are returned in a pseudo-random yet deterministic order. An identical query will consistently produce the same event sequence. Useful for obtaining a representative sample from a large number of events.
   */
  sample?: boolean;
  /**
   * Start
   * @description The start timestamp for filtering events, in ISO-8601 format (e.g., `2001-12-14T12:34:56.7890Z`). If provided, `end` must also be specified. This parameter is overridden by `statsPeriod` if both are used.
   */
  start?: string;
  /**
   * Stats Period
   * @description A relative time period for the query (e.g., '24h', '7d', '2w'), calculated from the current time. This overrides `start` and `end` if specified. Format is a number followed by 'd' (days), 'h' (hours), 'm' (minutes), 's' (seconds), or 'w' (weeks).
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID tool output.
 */
type SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION tool input.
 */
type SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor to navigate through the list of issue hashes.
   */
  cursor?: string;
  /**
   * Full
   * @description If `True`, includes comprehensive details for each hash; if `False`, returns a minimal representation.
   * @default true
   */
  full: boolean;
  /**
   * Issue Id
   * @description Identifier (ID) of the Sentry issue.
   */
  issue_id?: string;
  /**
   * Organization Id Or Slug
   * @description Identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION tool output.
 */
type SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the retrieved data about the issue's hashes, possibly including pagination metadata.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ISSUE_TAG_DETAILS tool input.
 */
type SENTRY_RETRIEVE_ISSUE_TAG_DETAILS_INPUT = {
  /**
   * Environment
   * @description Optional list of environment names to filter tag values; if omitted, all environments are considered.
   */
  environment?: string[];
  /**
   * Issue Id
   * @description The unique numerical ID of the Sentry issue.
   */
  issue_id?: number;
  /**
   * Key
   * @description The specific tag key (e.g., 'browser', 'os', 'environment', 'release', custom tags) for which to retrieve detailed values; case-sensitive.
   */
  key?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ISSUE_TAG_DETAILS tool output.
 */
type SENTRY_RETRIEVE_ISSUE_TAG_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Details for the specified tag, including `key`, `name`, `uniqueValues`, `totalValues`, and `topValues` (list of most frequent values with `value`, `count`, `firstSeen`, and `lastSeen` timestamps).
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
 * Type of SENTRY's SENTRY_RETRIEVE_MONITOR_CHECKINS tool input.
 */
type SENTRY_RETRIEVE_MONITOR_CHECKINS_INPUT = {
  /**
   * Monitor Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry monitor. This specifies the monitor for which check-ins are to be retrieved.
   */
  monitor_id_or_slug?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization. This specifies the organization to which the project and monitor belong.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry project. This specifies the project to which the monitor belongs, within the given organization.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_MONITOR_CHECKINS tool output.
 */
type SENTRY_RETRIEVE_MONITOR_CHECKINS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of check-in objects from the Sentry API, where the list might be under a specific key. Each check-in provides details like 'id', 'status', 'duration', 'environment', and 'dateCreated'.
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
 * Type of SENTRY's SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG tool input.
 */
type SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG_INPUT = {
  /**
   * Monitor Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the monitor.
   */
  monitor_id_or_slug?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG tool output.
 */
type SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID tool input.
 */
type SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID_INPUT = {
  /**
   * Action Id
   * @description The unique numerical identifier (ID) of the specific notification action to retrieve.
   */
  action_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID tool output.
 */
type SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description The unique numeric identifier (ID) of the custom dashboard to retrieve within the specified organization.
   */
  dashboard_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing detailed information of the retrieved custom dashboard, such as 'id', 'title', 'dateCreated', 'widgets', and 'createdBy'.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_EVENTS tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_EVENTS_INPUT = {
  /**
   * End
   * @description The end timestamp for the query period, in ISO-8601 format (e.g., `2024-01-15T12:30:00Z`). This parameter is ignored if `statsPeriod` is provided.
   */
  end?: string;
  /**
   * Environment
   * @description A list of environment names to filter events by (e.g., `production`, `staging`).
   */
  environment?: string[];
  /**
   * Field
   * @description Specifies the fields, functions, or equations to include in the query results. Each item in the list can be: - A built-in key field (e.g., `transaction`). Refer to Sentry documentation for event property fields. - A tag, using `tag[tagName]` format to avoid ambiguity (e.g., `tag[isEnterprise]`). - A function, in `function_name(parameters,...)` format (e.g., `count_if(transaction.duration,greater,300)`). When a function is included, Discover will group results by any specified tags or fields. Refer to Sentry query builder documentation for available functions. - An equation, prefixed with `equation|` (e.g., `equation|count_if(transaction.duration,greater,300) / count() * 100`). Refer to Sentry documentation on query equations.
   */
  field?: string[];
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization for which to retrieve events.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description The maximum number of event rows to return. Defaults to 100, which is also the maximum allowed value.
   */
  per_page?: number;
  /**
   * Project
   * @description A list of project IDs to filter events by. Use `[-1]` to include all accessible projects. For example: `[123, 456]` or `[-1]`.
   */
  project?: number[];
  /**
   * Query
   * @description A Sentry search query string to filter events. Example: `(transaction:foo AND release:abc) OR (transaction:[bar,baz] AND release:def)`. Refer to Sentry documentation for detailed search syntax.
   */
  query?: string;
  /**
   * Sort
   * @description The field by which to sort the query results. Prepend with `-` for descending order (e.g., `-timestamp`).
   */
  sort?: string;
  /**
   * Start
   * @description The start timestamp for the query period, in ISO-8601 format (e.g., `2024-01-01T10:00:00Z`). This parameter is ignored if `statsPeriod` is provided.
   */
  start?: string;
  /**
   * Stats Period
   * @description The relative time period for the query (e.g., `24h`, `7d`, `30m`). This overrides `start` and `end` if provided. Valid suffixes: `d` (days), `h` (hours), `m` (minutes), `s` (seconds), `w` (weeks).
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_EVENTS tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_EVENTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the queried event data, structured according to the requested `field` parameters.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST_INPUT = {
  /**
   * Features
   * @description Filters integrations by their supported features. Refer to Sentry's [Integrations Documentation](/product/integrations/) for an updated list of features. Examples include: `alert-rule`, `chat-unfurl`, `codeowners`, `commits`, `data-forwarding`, `deployment`, `enterprise-alert-rule`, `enterprise-incident-management`, `incident-management`, `issue-basic`, `issue-sync`, `mobile`, `serverless`, `session-replay`, `stacktrace-link`, `ticket-rules`.
   */
  features?: string[];
  /**
   * Include Config
   * @description If `True`, fetches detailed third-party configurations for each integration; this may significantly increase response time.
   */
  includeConfig?: boolean;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Provider Key
   * @description Filters integrations by a specific provider key. Refer to Sentry's [Integrations Documentation](/product/integrations/) for an updated list of providers.
   */
  providerKey?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing a list of integration objects available to the organization, matching query criteria. Refer to the Sentry API documentation for the exact structure.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_MEMBER tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_MEMBER_INPUT = {
  /**
   * Member Id
   * @description The unique identifier (ID) of the organization member whose details are to be retrieved.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_MEMBER tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the organization member's details, such as role, teams, status, and other attributes.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_MONITORS tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_MONITORS_INPUT = {
  /**
   * Environment
   * @description List of environment names (e.g., 'production', 'staging') to filter by.
   */
  environment?: string[];
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description Filter by owner, using `user:<user_id>` or `team:<team_id>` format.
   */
  owner?: string;
  /**
   * Project
   * @description List of project IDs to filter by; use `[-1]` for all accessible projects.
   */
  project?: number[];
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_MONITORS tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_MONITORS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_PROJECTS tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_PROJECTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor pointing to the next or previous set of results. If omitted, the first page is returned. Typically obtained from a previous response's 'Link' header.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_PROJECTS tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Raw Sentry API response as a dictionary, containing the organization's project data and any relevant pagination information.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization. This specifies which organization's relay usage data to retrieve.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the organization's Relay usage. This typically includes a list of trusted relays and potentially other usage statistics or configurations.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the release belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release. This can be a version number, package name with version, or a commit hash.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of commits associated with the specified release. The structure of the commit data can vary.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_REPLAYS tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_REPLAYS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching next/previous page. See Sentry API documentation for details.
   */
  cursor?: string;
  /**
   * End
   * @description Absolute inclusive end of the time series range (UTC ISO8601 or epoch seconds). Requires `start`. Conflicts with `statsPeriod`.
   */
  end?: string;
  /**
   * Environment
   * @description The environment name to filter replays by (e.g., 'production', 'staging').
   */
  environment?: string;
  /**
   * Field
   * @description Additional fields to include in the response for each replay; invalid fields are ignored.
   */
  field?: string[];
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description The maximum number of replays to return per page. The default is 50, and the maximum is 100.
   */
  per_page?: number;
  /**
   * Project
   * @description A list of project IDs to filter replays by. Use -1 for all projects.
   */
  project?: number[];
  /**
   * Query
   * @description Structured query string to filter replays (e.g., 'user.email:"j.doe@example.com" AND browser.name:"Chrome"'). Refer to Sentry documentation for syntax.
   */
  query?: string;
  /**
   * Sort
   * @description The field to sort the replays by. Prefix with '-' for descending order (e.g., '-started_at'). Default is 'activity'.
   */
  sort?: string;
  /**
   * Start
   * @description Absolute start of the time series range (UTC ISO8601 or epoch seconds). Requires `end`. Conflicts with `statsPeriod`.
   */
  start?: string;
  /**
   * Stats Period
   * @description The relative time range for the query (e.g., `1d` for one day). Units: `m` (minutes), `h` (hours), `d` (days), `w` (weeks).
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_REPLAYS tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_REPLAYS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of replays and related metadata.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS_INPUT = {
  /**
   * Count
   * @description The maximum number of SCIM groups to return per page. The API enforces a maximum limit of 100.
   * @default 100
   */
  count: number;
  /**
   * Excluded Attributes
   * @description A list of attribute names to exclude from the response for each group. Currently, the only supported value for an attribute to exclude is `members`.
   * @default []
   */
  excludedAttributes: string[];
  /**
   * Filter
   * @description A SCIM filter expression to narrow down the list of groups. Currently, only the `eq` (equals) operator is supported, e.g., `displayName eq "Engineering Team"`.
   */
  filter?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization for which to retrieve SCIM groups.
   */
  organization_id_or_slug?: string;
  /**
   * Start Index
   * @description The 1-based index for pagination, indicating the starting point of the results to retrieve. Follows SCIM standards.
   * @default 1
   */
  startIndex: number;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the SCIM ListResponse. This includes a `Resources` key with a list of group objects, `totalResults`, `itemsPerPage`, `startIndex`, and other SCIM-standard fields.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_STATS_V2 tool input.
 */
type SENTRY_RETRIEVE_ORGANIZATION_STATS_V2_INPUT = {
  /**
   * Category
   * @description Filter by data category (e.g., `error`, `transaction`). `attachment` and `profile_duration` categories affect interpretation of `sum(quantity)` in `field` (bytes and milliseconds respectively).
   * @enum {string}
   */
  category?: "error" | "transaction" | "attachment" | "replay" | "profile" | "profile_duration" | "monitor";
  /**
   * End
   * @description Inclusive end timestamp for the time series (ISO 8601 UTC or Unix epoch seconds). Use with `start`; alternative to `statsPeriod`.
   */
  end?: string;
  /**
   * Field
   * @description Metric to retrieve. `sum(quantity)` for event counts (or bytes if category is `attachment`, milliseconds if `profile_duration`). `sum(times_seen)` for unique event occurrences (or sessions/attachments).
   * @enum {string}
   */
  field?: "sum(quantity)" | "sum(times_seen)";
  /**
   * Group By
   * @description Dimensions to group statistics by. Grouping by `project` returns a sum over the entire period, not a time series; for many projects, consider filtering by projects individually or querying them one by one to avoid missing rows.
   */
  groupBy?: string[];
  /**
   * Interval
   * @description Time series data resolution (e.g., `1h`, `1d`). Must be between `1h` and `1d` (inclusive) and cleanly divide 24 hours (e.g., `1h`, `2h`, `6h`, `12h`, `24h`).
   */
  interval?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Outcome
   * @description Filter by event outcome status (e.g., `accepted`, `filtered`, `rate_limited`), indicating how Sentry processed the event.
   * @enum {string}
   */
  outcome?: "accepted" | "filtered" | "rate_limited" | "invalid" | "abuse" | "client_discard" | "cardinality_limited";
  /**
   * Project
   * @description Project IDs to filter statistics by. Use `["-1"]` to include all accessible projects for the organization.
   */
  project?: unknown[];
  /**
   * Reason
   * @description Reason an event was filtered/dropped by Sentry (e.g., `filters:release_version`, `spike_protection`). Often used with outcomes like `filtered` or `rate_limited`.
   */
  reason?: string;
  /**
   * Start
   * @description Start timestamp for the time series (ISO 8601 UTC or Unix epoch seconds). Use with `end`; alternative to `statsPeriod`.
   */
  start?: string;
  /**
   * Stats Period
   * @description Relative time range for statistics (e.g., `1d` for 1 day, `2w` for 2 weeks). Use `m` (minutes), `h` (hours), `d` (days), `w` (weeks). Provide this or both `start` and `end`.
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORGANIZATION_STATS_V2 tool output.
 */
type SENTRY_RETRIEVE_ORGANIZATION_STATS_V2_OUTPUT = {
  /**
   * Data
   * @description Queried statistical data. Structure depends on `groupBy` parameters and `interval`. Typically includes start/end timestamps, group keys, and series/totals for the requested `field`.
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
 * Type of SENTRY's SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG tool input.
 */
type SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization for which to retrieve integration configurations.
   */
  organization_id_or_slug?: string;
  /**
   * Provider Key
   * @description Key of a specific integration provider (e.g., 'slack', 'github', 'jira') to filter by; if omitted, returns configurations for all integrations. Refer to Sentry's documentation for supported provider keys.
   */
  providerKey?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG tool output.
 */
type SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS tool input.
 */
type SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project for which environments are to be retrieved.
   */
  project_id_or_slug?: string;
  /**
   * Visibility
   * @description Filters environments by their visibility status: `all`, `hidden`, or `visible`.
   * @enum {string}
   */
  visibility?: "all" | "hidden" | "visible";
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS tool output.
 */
type SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS_OUTPUT = {
  /**
   * Data
   * @description A list of environment objects associated with the project. Each object contains details such as 'id', 'name', and 'isHidden'.
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID tool input.
 */
type SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID_INPUT = {
  /**
   * Event Id
   * @description The hexadecimal ID of the event to retrieve, as reported by the client.
   */
  event_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the event belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project to which the event belongs.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID tool output.
 */
type SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary object containing the full details of the Sentry event.
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_FILTER_DATA tool input.
 */
type SENTRY_RETRIEVE_PROJECT_FILTER_DATA_INPUT = {
  /**
   * Organization Id Or Slug
   * @description Unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description Unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_FILTER_DATA tool output.
 */
type SENTRY_RETRIEVE_PROJECT_FILTER_DATA_OUTPUT = {
  /**
   * Data
   * @description Dictionary of project data filters. Keys are filter identifiers (e.g., 'legacyBrowsers', 'localhost', 'webCrawlers'), and values detail filter configuration, including an 'active' status (boolean or list of specific conditions/identifiers).
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_HOOKS tool input.
 */
type SENTRY_RETRIEVE_PROJECT_HOOKS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor to retrieve the next or previous set of results (e.g., '100:0:1').
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_HOOKS tool output.
 */
type SENTRY_RETRIEVE_PROJECT_HOOKS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_ISSUES_LIST tool input.
 */
type SENTRY_RETRIEVE_PROJECT_ISSUES_LIST_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous response's `Link` header to fetch the next/previous set of issues.
   */
  cursor?: string;
  /**
   * Hashes
   * @description Comma-separated group hashes to retrieve specific issues; incompatible with `query`. Max 100 hashes processed.
   */
  hashes?: string;
  /**
   * Organization Id Or Slug
   * @description Unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description Unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Query
   * @description Sentry structured search query to filter issues (e.g., "is:resolved", "error.type:TypeError"). Defaults to "is:unresolved"; `""` retrieves all issues regardless of status.
   */
  query?: string;
  /**
   * Short Id Lookup
   * @description If `True`, enables issue lookup by short IDs; may return issues from a different project. API default is typically `False`.
   */
  shortIdLookup?: boolean;
  /**
   * Stats Period
   * @description Time window for issue statistics (e.g., "24h", "14d"); `""` disables stats. API defaults to "24h" if unspecified.
   */
  statsPeriod?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_ISSUES_LIST tool output.
 */
type SENTRY_RETRIEVE_PROJECT_ISSUES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT tool input.
 */
type SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor to retrieve the next or previous set of results, typically formatted as '<cursor_identifier>:<row_offset>:<is_prev>'.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project.
   */
  project_id_or_slug?: string;
  /**
   * Status
   * @description Filter client keys by status: 'active' or 'inactive'. If unspecified, returns all keys.
   */
  status?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT tool output.
 */
type SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_KEY_DETAILS tool input.
 */
type SENTRY_RETRIEVE_PROJECT_KEY_DETAILS_INPUT = {
  /**
   * Key Id
   * @description ID of the client key (DSN).
   */
  key_id?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_KEY_DETAILS tool output.
 */
type SENTRY_RETRIEVE_PROJECT_KEY_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST tool input.
 */
type SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or human-readable slug of the Sentry organization. This identifies the organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or human-readable slug of the Sentry project. This identifies the project for which members will be listed.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST tool output.
 */
type SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST_OUTPUT = {
  /**
   * Data
   * @description The raw data returned by the Sentry API. This field is expected to contain the list of active organization members belonging to the project.
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS tool input.
 */
type SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS_INPUT = {
  /**
   * Download
   * @description If true, returns raw file content; otherwise, returns file metadata (JSON object).
   */
  download?: boolean;
  /**
   * File Id
   * @description The unique identifier of the file associated with the release (e.g., '~/app.js.map', 'dist/bundle.js').
   */
  file_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release (e.g., '1.0.0', 'my-app@2.3.1-beta').
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS tool output.
 */
type SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the file's metadata (JSON object) if 'download' parameter is false or not provided; may be irrelevant or empty if 'download' is true.
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID tool input.
 */
type SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the project for which to retrieve alert rules.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID tool output.
 */
type SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID_OUTPUT = {
  /**
   * Data
   * @description A list of active issue alert rules. Each rule is represented as a dictionary containing its configuration details, such as ID, name, conditions, actions, and triggers.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES tool input.
 */
type SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES_INPUT = {
  /**
   * Id
   * @description ID of a specific symbol source to retrieve; if omitted, all custom symbol sources for the project are returned.
   * @default null
   */
  id: string | null;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or URL-friendly slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES tool output.
 */
type SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Symbol source data; contains a specific source if its ID was provided in the request, or all custom symbol sources if no ID was provided.
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_TAG_VALUES tool input.
 */
type SENTRY_RETRIEVE_PROJECT_TAG_VALUES_INPUT = {
  /**
   * Key
   * @description The specific tag key for which to retrieve the associated distinct values (e.g., 'browser', 'device', 'environment').
   */
  key?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_TAG_VALUES tool output.
 */
type SENTRY_RETRIEVE_PROJECT_TAG_VALUES_OUTPUT = {
  /**
   * Data
   * @description Sentry API response, typically a list of tag values for the specified key, each detailing the value, name, count, and first/last seen timestamps.
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
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_TEAMS tool input.
 */
type SENTRY_RETRIEVE_PROJECT_TEAMS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_PROJECT_TEAMS tool output.
 */
type SENTRY_RETRIEVE_PROJECT_TEAMS_OUTPUT = {
  /**
   * Data
   * @description API response containing a list of team objects with access to the specified project, and potentially other metadata.
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
 * Type of SENTRY's SENTRY_RETRIEVE_RELEASE_COMMITS tool input.
 */
type SENTRY_RETRIEVE_RELEASE_COMMITS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the release belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project to which the release belongs.
   */
  project_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release. This can be a commit SHA, a semantic version string, or any unique string identifying the release (e.g., 'my-app@1.0.0', 'cf7f4a337311e395e5099035f904289140b37025').
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_RELEASE_COMMITS tool output.
 */
type SENTRY_RETRIEVE_RELEASE_COMMITS_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the API response for the release commits. This typically contains a list of commit objects (e.g., under a 'results' key if the response is paginated) detailing attributes like commit ID, author, message, and timestamp. It may also include pagination cursors.
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
 * Type of SENTRY's SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS tool input.
 */
type SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release. This can be a semantic version string (e.g., '1.0.0'), a project-qualified version (e.g., 'my-project-name@1.0.0'), or a full commit SHA.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS tool output.
 */
type SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS_OUTPUT = {
  /**
   * Data
   * @description The Sentry API response, a dictionary which includes a list of deploy objects. Each object details a deployment with 'id', 'environment', 'name', 'url', 'dateStarted', and 'dateFinished'.
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
 * Type of SENTRY's SENTRY_RETRIEVE_RELEASE_FILE_BY_ID tool input.
 */
type SENTRY_RETRIEVE_RELEASE_FILE_BY_ID_INPUT = {
  /**
   * Download
   * @description Set to `true` to receive raw file content. If `false` or omitted, results in a JSON object with file metadata being returned.
   */
  download?: boolean;
  /**
   * File Id
   * @description The unique identifier of the file to retrieve within the specified release. This can be a path or an opaque ID assigned by Sentry.
   */
  file_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release, such as '1.0.0', 'backend@2.3.1-beta', or a commit SHA.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_RELEASE_FILE_BY_ID tool output.
 */
type SENTRY_RETRIEVE_RELEASE_FILE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Contains a dictionary with file metadata if the `download` request parameter was `false` or omitted. If `download` was `true`, raw file content is returned directly, and this field may be bypassed as it's designed for structured data.
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
 * Type of SENTRY's SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS tool input.
 */
type SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for the next or previous set of results.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Number of recording segments per page (default/max is 100).
   */
  per_page?: number;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Replay Id
   * @description ID of the replay.
   */
  replay_id?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS tool output.
 */
type SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES tool input.
 */
type SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES_INPUT = {
  /**
   * Cursor
   * @description An opaque pagination cursor that points to the last object fetched and its sort order. Used to retrieve the next or previous set of results.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization for which to retrieve saved Discover queries.
   */
  organization_id_or_slug?: string;
  /**
   * Per Page
   * @description Maximum number of saved queries to return per page. Max: 100.
   */
  per_page?: number;
  /**
   * Query
   * @description A string to filter saved Discover queries by their name. For example, "High CPU Usage".
   */
  query?: string;
  /**
   * Sort By
   * @description Field to sort results by. Defaults to sorting by query name. Options: `name`, `dateCreated`, `dateUpdated`, `mostPopular`, `recentlyViewed`, and `myqueries`.
   */
  sortBy?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES tool output.
 */
type SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved list of saved Discover queries and pagination information.
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
 * Type of SENTRY's SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION tool input.
 */
type SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Query Id
   * @description The ID of the saved Discover query.
   */
  query_id?: number;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION tool output.
 */
type SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Dictionary with attributes and configuration of the saved Discover query; its structure varies.
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
 * Type of SENTRY's SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION tool input.
 */
type SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION_INPUT = {
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization where the short ID will be looked up.
   */
  organization_id_or_slug?: string;
  /**
   * Short Id
   * @description The Sentry short ID to resolve (e.g., 'PROJECT-1A', 'APP-XYZ').
   */
  short_id?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION tool output.
 */
type SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Resolved information for the short ID, typically including project slug, internal issue ID, and group ID.
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
 * Type of SENTRY's SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT tool input.
 */
type SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT_INPUT = {
  /**
   * Event Id
   * @description The unique identifier (ID) of the event for which source map debug information is being retrieved.
   */
  event_id?: string;
  /**
   * Exception Idx
   * @description Numerical index of the exception in the event's exception array for source map resolution.
   */
  exception_idx?: number;
  /**
   * Frame Idx
   * @description Numerical index of the stack trace frame for source map resolution.
   */
  frame_idx?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the resource belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project to which the resource belongs.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT tool output.
 */
type SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing detailed source map debug information for the specified event, frame, and exception. The structure of this data can vary based on the nature of the source map issues found.
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
 * Type of SENTRY's SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG tool input.
 */
type SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG_INPUT = {
  /**
   * Collapse
   * @description A comma-separated string listing data sections to exclude from the response. Supported value is `organization` (to exclude detailed organization information from the team details).
   */
  collapse?: string;
  /**
   * Expand
   * @description A comma-separated string listing extra data sections to include in the response. Supported values are `projects` (to include details of projects associated with the team) and `externalTeams` (to include mappings to external teams). For example, 'projects,externalTeams'.
   */
  expand?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization to which the team belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry team whose details are to be retrieved.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG tool output.
 */
type SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the retrieved team, including its attributes and any expanded or collapsed data as per the request.
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
 * Type of SENTRY's SENTRY_RETRIEVE_TEAM_PROJECTS tool input.
 */
type SENTRY_RETRIEVE_TEAM_PROJECTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for navigating through project lists; if omitted, the first page is returned.
   */
  cursor?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Team Id Or Slug
   * @description The ID or slug of the Sentry team.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_TEAM_PROJECTS tool output.
 */
type SENTRY_RETRIEVE_TEAM_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description The raw API response. This is expected to be a list of Sentry project objects, each detailing a project associated with the specified team. The structure of the actual data returned by the Sentry API for this endpoint is typically a JSON array of project details.
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
 * Type of SENTRY's SENTRY_RETRIEVE_USER_EMAIL_INFORMATION tool input.
 */
type SENTRY_RETRIEVE_USER_EMAIL_INFORMATION_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the Sentry user for whom to retrieve email information.
   */
  user_id?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_USER_EMAIL_INFORMATION tool output.
 */
type SENTRY_RETRIEVE_USER_EMAIL_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description The user's email information from Sentry. Typically contains a list of email objects, where each object details an email address, its `is_primary` status, and `is_verified` status.
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
 * Type of SENTRY's SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT tool input.
 */
type SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization. Slugs are typically lowercase and use hyphens for spaces.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project. Slugs are typically lowercase and use hyphens for spaces.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT tool output.
 */
type SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the user feedback data. This feedback originates from the older 'User Reports' system, not the newer User Feedback Widget. The structure typically includes a list of feedback entries and may contain pagination details.
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
 * Type of SENTRY's SENTRY_RETRIEVE_USER_VIA_SCIM_API tool input.
 */
type SENTRY_RETRIEVE_USER_VIA_SCIM_API_INPUT = {
  /**
   * Member Id
   * @description The unique identifier (ID) of the organization member to be retrieved via SCIM.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization. This specifies the organization to which the member belongs.
   */
  organization_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_RETRIEVE_USER_VIA_SCIM_API tool output.
 */
type SENTRY_RETRIEVE_USER_VIA_SCIM_API_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY tool input.
 */
type SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY_INPUT = {
  /**
   * Display
   * @description Chart visualization type. Allowed: `default`, `previous`, `top5`, `daily`, `dailytop5`, `bar`.
   */
  display?: string;
  /**
   * End
   * Format: date-time
   * @description End date/time for the query's time range (ISO 8601). Takes precedence over `range`.
   */
  end?: string;
  /**
   * Environment
   * @description List of environment names to filter by.
   */
  environment?: string[];
  /**
   * Fields
   * @description List of fields (e.g., `transaction`, `tag[tagName]`), functions (e.g., `count_if(...)`), or equations (prefixed with `equation|`) to include (max 20). See Sentry documentation for details.
   */
  fields?: string[];
  /**
   * Interval
   * @description Time series resolution for the chart (e.g., '1h', '30m', 'auto').
   */
  interval?: string;
  /**
   * Name
   * @description Unique name for the saved query.
   */
  name?: string;
  /**
   * Orderby
   * @description Field or function from `fields` list to order results by (prefix with `-` for descending). Cannot be an equation.
   */
  orderby?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description List of project IDs to filter by; empty list implies all projects in the organization.
   * @default []
   */
  projects: number[];
  /**
   * Query
   * @description Search query string using Sentry's syntax (e.g., `level:error transaction:/api/v1/*`).
   */
  query?: string;
  /**
   * Query Dataset
   * @description Dataset to query: `discover` (event properties/tags), `error-events` (error data), or `transaction-like` (transaction/performance data).
   * @default error-events
   * @enum {string}
   */
  queryDataset: "discover" | "error-events" | "transaction-like";
  /**
   * Range
   * @description Relative time range (e.g., '24h', '7d') if `start` and `end` are not provided.
   */
  range?: string;
  /**
   * Start
   * Format: date-time
   * @description Start date/time for the query's time range (ISO 8601). Takes precedence over `range`.
   */
  start?: string;
  /**
   * Top Events
   * @description Number of 'top events' timeseries for `top5` or `dailytop5` display types.
   */
  topEvents?: number;
  /**
   * Y Axis
   * @description List of aggregate functions for the y-axis of the chart visualization.
   */
  yAxis?: string[];
};

/**
 * Type of SENTRY's SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY tool output.
 */
type SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY_OUTPUT = {
  /**
   * Data
   * @description Complete representation of the saved query, including its parameters and metadata.
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
 * Type of SENTRY's SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE tool input.
 */
type SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE_INPUT = {
  /**
   * Environment
   * @description A list of environment names to filter the tag values; if provided, only values from these specified environments will be returned.
   */
  environment?: string[];
  /**
   * Issue Id
   * @description The unique numerical identifier of the Sentry issue for which tag values are to be fetched.
   */
  issue_id?: number;
  /**
   * Key
   * @description The specific tag key (e.g., 'browser', 'user_id', 'environment') for which to retrieve distinct values associated with the issue.
   */
  key?: string;
  /**
   * Sort
   * @description Sort order for tag values; valid options are 'age', 'count', 'date', 'id'. Prefix with '-' for descending (e.g., '-count'); defaults to '-id'.
   * @enum {string}
   */
  sort?: "age" | "count" | "date" | "id";
};

/**
 * Type of SENTRY's SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE tool output.
 */
type SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the data related to tag values for the issue, typically including a list of objects representing distinct tag values with properties like value, count, and timestamps.
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
 * Type of SENTRY's SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA tool input.
 */
type SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA_INPUT = {
  /**
   * Integration Id
   * @description ID of the pre-configured integration. Required if `service_type` is 'slack', 'pagerduty', or 'opsgenie'.
   */
  integration_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description Optional list of project slugs to scope this action; if provided, the action applies only to these projects.
   */
  projects?: string[];
  /**
   * Service Type
   * @description The service for sending the notification (e.g., 'email', 'slack').
   */
  service_type?: string;
  /**
   * Target Display
   * @description Human-readable name for the notification target (e.g., Slack channel name). Required if `service_type` is 'slack' or 'opsgenie'.
   */
  target_display?: string;
  /**
   * Target Identifier
   * @description Specific identifier of the notification target (e.g., Slack channel ID). Required if `service_type` is 'slack' or 'opsgenie'.
   */
  target_identifier?: string;
  /**
   * Trigger Type
   * @description Specifies the type of event that triggers the notification; currently, only 'spike-protection' is supported.
   */
  trigger_type?: string;
};

/**
 * Type of SENTRY's SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA tool output.
 */
type SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the created Notification Action.
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
 * Type of SENTRY's SENTRY_SUBMIT_PROJECT_USER_FEEDBACK tool input.
 */
type SENTRY_SUBMIT_PROJECT_USER_FEEDBACK_INPUT = {
  /**
   * Comments
   * @description The feedback comments provided by the user.
   */
  comments?: string;
  /**
   * Email
   * @description The email address of the user submitting the feedback.
   */
  email?: string;
  /**
   * Event Id
   * @description The ID of the Sentry event to which this feedback is associated. This can be retrieved from the [beforeSend callback](https://docs.sentry.io/platforms/javascript/configuration/filtering/#using-beforesend).
   */
  event_id?: string;
  /**
   * Name
   * @description The name of the user submitting the feedback.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug for the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_SUBMIT_PROJECT_USER_FEEDBACK tool output.
 */
type SENTRY_SUBMIT_PROJECT_USER_FEEDBACK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response for the feedback submission, typically confirming success or providing details of the created feedback record.
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
 * Type of SENTRY's SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER tool input.
 */
type SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER_INPUT = {
  /**
   * Member Id
   * @description Identifier for the organization member.
   */
  member_id?: string;
  /**
   * Organization Id Or Slug
   * @description Identifier (ID or slug) for the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Team Role
   * @description Details for available team roles: `contributor` allows viewing/acting on events and most team project data; `admin` grants team administration privileges like managing projects and memberships.
   * @default contributor
   * @enum {string}
   */
  teamRole: "contributor" | "admin";
  /**
   * Team Id Or Slug
   * @description Identifier (ID or slug) for the Sentry team.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER tool output.
 */
type SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_TOGGLE_PROJECT_FILTER_STATUS tool input.
 */
type SENTRY_TOGGLE_PROJECT_FILTER_STATUS_INPUT = {
  /**
   * Active
   * @description Enable (`true`) or disable (`false`) the filter. Required if `filter_id` is not `legacy-browser`; not used if `filter_id` is `legacy-browser` (use `subfilters` then).
   */
  active?: boolean;
  /**
   * Filter Id
   * @description Identifier of the inbound data filter to update. Each `filter_id` has a specific behavior:
   *     - `browser-extensions`: Filters errors known to be caused by browser extensions.
   *     - `localhost`: Filters events originating from localhost (IPv4: `127.0.0.1`, IPv6: `::1`).
   *     - `filtered-transaction`: Filters transactions for health check and ping endpoints.
   *     - `web-crawlers`: Filters known web crawlers, as they may cause errors unlikely for normal users.
   *     - `legacy-browser`: Filters known errors from legacy browsers (often providing less accurate context). Use `subfilters` to configure specific browsers for this filter.
   */
  filter_id?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Subfilters
   * @description List of legacy browser subfilters to enable (unlisted ones will be disabled). Required and only used if `filter_id` is `legacy-browser`.
   *     Available options:
   *     - `ie`: Internet Explorer (v11 and older)
   *     - `edge`: Edge (v18 and older, non-Chromium)
   *     - `safari`: Safari (v11 and older)
   *     - `firefox`: Firefox (v66 and older)
   *     - `chrome`: Chrome (v62 and older)
   *     - `opera`: Opera (v50 and older)
   *     - `android`: Android Browser (v3 and older)
   *     - `opera_mini`: Opera Mini (v34 and older)
   *     Deprecated options (still functional but may be removed in the future):
   *     - `ie_pre_9`: Internet Explorer (v8 and older)
   *     - `ie9`: Internet Explorer v9
   *     - `ie10`: Internet Explorer v10
   *     - `ie11`: Internet Explorer v11
   *     - `safari_pre_6`: Safari (v5 and older)
   *     - `opera_pre_15`: Opera (v14 and older)
   *     - `opera_mini_pre_8`: Opera Mini (v8 and older)
   *     - `android_pre_4`: Android Browser (v3 and older)
   *     - `edge_pre_79`: Edge (v18 and older, non-Chromium based)
   */
  subfilters?: string[];
};

/**
 * Type of SENTRY's SENTRY_TOGGLE_PROJECT_FILTER_STATUS tool output.
 */
type SENTRY_TOGGLE_PROJECT_FILTER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Contains the updated filter configuration. Structure varies based on the `filter_id` that was updated.
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
 * Type of SENTRY's SENTRY_UPDATE_ENVIRONMENT_VISIBILITY tool input.
 */
type SENTRY_UPDATE_ENVIRONMENT_VISIBILITY_INPUT = {
  /**
   * Environment
   * @description The name of the environment to update.
   */
  environment?: string;
  /**
   * Is Hidden
   * @description Indicates if the environment should be hidden (`true`) or visible (`false`).
   */
  isHidden?: boolean;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ENVIRONMENT_VISIBILITY tool output.
 */
type SENTRY_UPDATE_ENVIRONMENT_VISIBILITY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION tool input.
 */
type SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION_INPUT = {
  /**
   * External Id
   * @description Optional: External ID for the team within the provider's system, distinct from its name.
   * @default null
   */
  external_id: string | null;
  /**
   * External Name
   * @description New display name for the team in the external provider.
   */
  external_name?: string;
  /**
   * External Team Id
   * @description Unique ID of the external team object to update.
   */
  external_team_id?: number;
  /**
   * Integration Id
   * @description Unique ID of the Sentry integration instance connecting Sentry to the external provider.
   */
  integration_id?: number;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Provider
   * @description Provider of the external actor; must match the provider of the integration.
   * @enum {string}
   */
  provider?: "github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "custom_scm";
  /**
   * Team Id Or Slug
   * @description ID or slug of the Sentry team.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION tool output.
 */
type SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Full representation of the updated external team integration.
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
 * Type of SENTRY's SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION tool input.
 */
type SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION_INPUT = {
  /**
   * External Id
   * @description The user's unique identifier on the external provider's platform (e.g., 'U123ABC' for Slack, 'github_user_123' for GitHub). This is optional.
   * @default null
   */
  external_id: string | null;
  /**
   * External Name
   * @description The user's display name or username on the external provider platform (e.g., 'john.doe' or 'John Doe').
   */
  external_name?: string;
  /**
   * External User Id
   * @description The unique identifier of the external user record within Sentry to update.
   */
  external_user_id?: number;
  /**
   * Id
   * @description The unique Sentry identifier of the external user record being updated. This typically matches the `external_user_id` path parameter.
   */
  id?: number;
  /**
   * Integration Id
   * @description The Sentry ID of the integration instance (e.g., a specific Slack workspace or GitHub organization integration) through which this external user is known.
   */
  integration_id?: number;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (numeric ID or string slug) of the Sentry organization to which the external user is linked.
   */
  organization_id_or_slug?: string;
  /**
   * Provider
   * @description The external identity provider platform. Supported values: `github`, `github_enterprise`, `slack`, `gitlab`, `msteams`, `custom_scm`.
   * @enum {string}
   */
  provider?: "github" | "github_enterprise" | "slack" | "gitlab" | "msteams" | "custom_scm";
  /**
   * User Id
   * @description The Sentry user ID to be linked or that is currently linked with this external user.
   */
  user_id?: number;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION tool output.
 */
type SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION tool input.
 */
type SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION_INPUT = {
  /**
   * Assigned To
   * @description Actor ID (e.g., 'user:1', 'team:2'), username, or email for assignment. Omit, or use an empty string or 'null' equivalent, to unassign.
   */
  assignedTo?: string;
  /**
   * Has Seen
   * @description Updates if the user has seen the issue (true for seen, false for unseen).
   */
  hasSeen?: boolean;
  /**
   * Is Bookmarked
   * @description Updates the user's bookmark for the issue (true to bookmark, false to remove).
   */
  isBookmarked?: boolean;
  /**
   * Is Public
   * @description Sets the issue's visibility (true for public, false for private).
   */
  isPublic?: boolean;
  /**
   * Is Subscribed
   * @description Updates the user's notification subscription for the issue (true to subscribe, false to unsubscribe).
   */
  isSubscribed?: boolean;
  /**
   * Issue Id
   * @description The unique identifier of the issue to be updated.
   */
  issue_id?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Status
   * @description The new status to assign to the issue. Valid values: "resolved", "resolvedInNextRelease", "unresolved", "ignored".
   */
  status?: string;
  /**
   * Status Details  In Commit
   * @description The commit hash associated with the fix for this issue.
   */
  statusDetails__inCommit?: string;
  /**
   * Status Details  In Next Release
   * @description Specifies if the issue is resolved in the next Sentry release.
   */
  statusDetails__inNextRelease?: boolean;
  /**
   * Status Details  In Release
   * @description The Sentry release version in which the issue is considered resolved.
   */
  statusDetails__inRelease?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION tool output.
 */
type SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the updated issue attributes.
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
 * Type of SENTRY's SENTRY_UPDATE_ORGANIZATION_ALERT_RULES tool input.
 */
type SENTRY_UPDATE_ORGANIZATION_ALERT_RULES_INPUT = {
  /**
   * Activation Condition
   * @description Optional condition for rule activation, used with certain `monitorType` values.
   */
  activationCondition?: number;
  /**
   * Aggregate
   * @description Aggregate function for the metric (e.g., `count`, `p95`). See Sentry's 'Metric Alert Rule Types' documentation for configurations based on dataset and query type.
   */
  aggregate?: string;
  /**
   * Alert Rule Id
   * @description Unique numeric ID of the metric alert rule to update.
   */
  alert_rule_id?: number;
  /**
   * Comparison Delta
   * @description Comparison period (minutes) for percentage change thresholds (e.g., 'X% higher than Y minutes ago'). Required if `thresholdType` implies percentage change; not for 'Crash Free...' alerts.
   */
  comparisonDelta?: number;
  /**
   * Dataset
   * @description Dataset to query (`events`, `transactions`, `metrics`, `sessions`, `generic-metrics`). Affects available fields/aggregations; see Sentry's 'Metric Alert Rule Types' docs.
   */
  dataset?: string;
  /**
   * Environment
   * @description Environment to filter events/metrics (e.g., 'production'). If omitted, applies to all environments.
   */
  environment?: string;
  /**
   * Event Types
   * @description Specific event types for this alert (e.g., `default`, `error`, `transaction`).
   */
  eventTypes?: string[];
  /**
   * Monitor Type
   * @description Monitoring state of the rule (e.g., continuously active or conditionally activated via `activationCondition`).
   */
  monitorType?: number;
  /**
   * Name
   * @description Descriptive name for the alert rule.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description Unique identifier (ID or slug) of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description Sentry actor ID (e.g., `team:123`, `user:456`) owning the rule, determining management permissions.
   */
  owner?: string;
  /**
   * Projects
   * @description List of project slugs to scope the alert rule.
   */
  projects?: string[];
  /**
   * Query
   * @description Sentry search query to filter events/metrics. An empty string (`''`) applies no filter.
   */
  query?: string;
  /**
   * Query Type
   * @description Query type, often related to `dataset`: `0` (error events), `1` (transaction events), `2` (none). See Sentry's 'Metric Alert Rule Types' for valid combinations.
   */
  queryType?: number;
  /**
   * Resolve Threshold
   * @description Metric value for alert resolution. If unspecified, derived from lowest severity trigger. If `thresholdType` is `0` ('Above'), `resolveThreshold` must be > critical threshold; if `1` ('Below'), it must be < critical threshold.
   */
  resolveThreshold?: number;
  /**
   * Threshold Type
   * @description Comparison operator for thresholds: `0` for 'Above' (metric > threshold) or 'Higher than' (percentage change), `1` for 'Below' (metric < threshold) or 'Lower than'.
   */
  thresholdType?: number;
  /**
   * Time Window
   * @description Time window in minutes for `aggregate` computation (1, 5, 10, 15, 30, 60, 120, 240, 1440).
   */
  timeWindow?: number;
  /**
   * Triggers
   * @description List of trigger configurations defining alert conditions (critical/warning labels, thresholds) and notification actions (e.g., email, Slack). `critical` label is mandatory. See Sentry API docs for full action schema.
   */
  triggers?: unknown[];
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ORGANIZATION_ALERT_RULES tool output.
 */
type SENTRY_UPDATE_ORGANIZATION_ALERT_RULES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ORGANIZATION_DASHBOARD tool input.
 */
type SENTRY_UPDATE_ORGANIZATION_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description The ID of the dashboard to be updated.
   */
  dashboard_id?: number;
  /**
   * End
   * Format: date-time
   * @description The absolute end time for the dashboard's time range, in ISO 8601 format (e.g., '2023-01-02T00:00:00Z'). If provided along with 'start', `period` is ignored. Replaces the existing end time.
   */
  end?: string;
  /**
   * Environment
   * @description A list of environment names to filter the dashboard data by. Replaces the existing environment filter.
   */
  environment?: string[];
  /**
   * Filters
   * @description A dictionary of additional filters to apply to the dashboard data, replacing existing filters. Keys are filter names, values are filter values.
   */
  filters?: {
      [key: string]: unknown;
  };
  /**
   * Id
   * @description Unique identifier for the dashboard; should match existing ID if updating.
   */
  id?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization the resource belongs to.
   */
  organization_id_or_slug?: string;
  /**
   * Period
   * @description The relative time range period for the dashboard (e.g., '24h', '7d', '30d'). Replaces the existing period. If 'start' and 'end' are set, this is ignored.
   */
  period?: string;
  /**
   * Projects
   * @description A list of project IDs to filter the dashboard data by. Replaces the existing project filter.
   */
  projects?: number[];
  /**
   * Start
   * Format: date-time
   * @description The absolute start time for the dashboard's time range, in ISO 8601 format (e.g., '2023-01-01T00:00:00Z'). If provided along with 'end', `period` is ignored. Replaces the existing start time.
   */
  start?: string;
  /**
   * Title
   * @description The new title for the dashboard.
   */
  title?: string;
  /**
   * Utc
   * @description A boolean indicating whether the dashboard's time range should be displayed in UTC. `True` for UTC, `False` for the user's local time.
   */
  utc?: boolean;
  /**
   * Widgets
   * @description A list of widget configurations to be updated or set for this dashboard. This will replace all existing widgets.
   */
  widgets?: {
      /**
       * Description
       * @description A description for the widget.
       */
      description?: string;
      /**
       * Display Type
       * @description Display type for the widget.
       * @enum {string}
       */
      display_type?: "line" | "area" | "stacked_area" | "bar" | "table" | "big_number" | "top_n";
      /**
       * Id
       * @description The unique identifier for the widget.
       */
      id?: string;
      /**
       * Interval
       * @description The time interval for the widget's data aggregation, e.g., '5m', '1h', '1d'.
       */
      interval?: string;
      /**
       * Layout
       * @description A dictionary defining the layout properties of the widget, such as position (x, y) and size (w, h) on the dashboard grid.
       */
      layout?: {
          [key: string]: unknown;
      };
      /**
       * Limit
       * @description The maximum number of items to display in the widget, applicable for types like 'top_n' or tables.
       */
      limit?: number;
      /**
       * Queries
       * @description A list of query definitions associated with this widget.
       */
      queries?: {
          /**
           * Aggregates
           * @description A list of aggregate functions to apply to the query.
           */
          aggregates?: string[];
          /**
           * Columns
           * @description A list of columns to display in the query results.
           */
          columns?: string[];
          /**
           * Conditions
           * @description Filter conditions for query results (e.g., 'event.type:error AND user.ip_address:127.0.0.1').
           */
          conditions?: string;
          /**
           * Field Aliases
           * @description A list of aliases for the fields used in the query.
           */
          field_aliases?: string[];
          /**
           * Fields
           * @description A list of fields to be included in the query.
           */
          fields?: string[];
          /**
           * Id
           * @description The unique identifier for the query.
           */
          id?: string;
          /**
           * Is Hidden
           * @description A boolean indicating whether the query is hidden in the UI.
           */
          is_hidden?: boolean;
          /**
           * Name
           * @description The name of the query.
           */
          name?: string;
          /**
           * On  Demand  Extraction  Enabled
           * @description A boolean indicating whether on-demand extraction is enabled for the query.
           */
          on__demand__extraction__enabled?: boolean;
          /**
           * On  Demand  Extraction  Extraction  State
           * @description The state of on-demand extraction for the query, indicating the current status of a requested data extraction.
           */
          on__demand__extraction__extraction__state?: string;
          /**
           * On Demand Extraction Disabled
           * @description A boolean indicating whether on-demand extraction is explicitly disabled for the query.
           */
          on_demand_extraction_disabled?: boolean;
          /**
           * Orderby
           * @description Field to order query results by (prefix with '-' for descending, e.g., '-timestamp').
           */
          orderby?: string;
          /**
           * Selected Aggregate
           * @description The index of the selected aggregate function from the 'aggregates' list.
           */
          selected_aggregate?: number;
      }[];
      /**
       * Thresholds
       * @description A dictionary defining thresholds for the widget, which can be used for conditional formatting or alerting.
       */
      thresholds?: {
          [key: string]: unknown;
      };
      /**
       * Title
       * @description The title of the widget.
       */
      title?: string;
      /**
       * Widget Type
       * @description Type of the widget.
       * @enum {string}
       */
      widget_type?: "discover" | "issue" | "metrics" | "custom-metrics" | "error-events" | "transaction-like" | "spans";
  }[];
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ORGANIZATION_DASHBOARD tool output.
 */
type SENTRY_UPDATE_ORGANIZATION_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated dashboard.
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
 * Type of SENTRY's SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE tool input.
 */
type SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE_INPUT = {
  /**
   * Member Id
   * @description The ID of the member whose roles are to be updated.
   */
  member_id?: string;
  /**
   * OrgroleEnm
   * @description Sets the member's new organization-level role (e.g., 'billing' for payments, 'member' for event access, 'manager' for project/team admin, 'owner' for full control). The 'admin' role is not assignable on Business/Enterprise plans; use `teamRoles` for granular admin tasks.
   * @default null
   * @enum {string|null}
   */
  orgRole: "billing" | "member" | "manager" | "owner" | "admin" | null;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the member belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Team Roles
   * @description List of team role assignments (each object specifying `teamSlug` and `role`). This list completely replaces existing team roles. An empty list (default) removes the member from all teams. Team roles: `contributor` (views/acts on issues), `admin` (full team/project management).
   * @default []
   */
  teamRoles: Record<string, never>[];
};

/**
 * Type of SENTRY's SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE tool output.
 */
type SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated details of the organization member, reflecting the new role assignments.
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
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_DETAILS tool input.
 */
type SENTRY_UPDATE_PROJECT_DETAILS_INPUT = {
  /**
   * Highlight Context
   * @description A JSON object mapping context types (e.g., 'user', 'device') to a list of their keys to be highlighted in Sentry's UI for issues within this project. For example: `{"user": ["id", "email"], "device": ["model"]}`.
   */
  highlightContext?: {
      [key: string]: unknown;
  };
  /**
   * Highlight Tags
   * @description A list of tag keys (e.g., 'release', 'environment') to highlight on this project's issues in Sentry's UI. For example: `["release", "environment", "server_name"]`.
   */
  highlightTags?: string[];
  /**
   * Is Bookmarked
   * @description Toggles whether the project is starred (bookmarked) in the Sentry UI.
   */
  isBookmarked?: boolean;
  /**
   * Name
   * @description The new name for the project.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Platform
   * @description The new platform for the project (e.g., `python`, `javascript`, `java`). This helps Sentry categorize and process errors.
   */
  platform?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project to be updated.
   */
  project_id_or_slug?: string;
  /**
   * Resolve Age
   * @description The duration in hours after which an issue is automatically resolved if it hasn't been seen. Set to `0` to disable auto-resolution.
   */
  resolveAge?: number;
  /**
   * Slug
   * @description The new unique identifier (slug) for the project, used in URLs and the Sentry interface.
   */
  slug?: string;
  /**
   * Subject Prefix
   * @description Custom prefix for the subject line of notification emails sent from this project.
   */
  subjectPrefix?: string;
  /**
   * Subject Template
   * @description The template for the email subject (excluding the prefix) for individual issue alerts. Available variables: `$title`, `$shortID`, `$projectID`, `$orgID`, and `${tag:key}` (e.g., `${tag:environment}`, `${tag:release}`).
   */
  subjectTemplate?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_DETAILS tool output.
 */
type SENTRY_UPDATE_PROJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated project details as key-value pairs.
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
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS tool input.
 */
type SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS_INPUT = {
  /**
   * Assigned To
   * @description Actor ID (e.g., `user:123` or `team:456`) or username for assignment. Use an empty string or null to unassign.
   */
  assignedTo?: string;
  /**
   * Has Seen
   * @description If called with user context: true to mark issue as seen by the user, false as unseen.
   */
  hasSeen?: boolean;
  /**
   * Id
   * @description Issue ID to update. This query parameter can be repeated for multiple IDs. Optional; if omitted and the 'status' query parameter (filter) is used, updates all issues matching that status.
   */
  id?: number;
  /**
   * Ignore Duration
   * @description Minutes to ignore this issue (alternative to `statusDetails.ignoreDuration`).
   */
  ignoreDuration?: number;
  /**
   * Is Bookmarked
   * @description If called with user context: true to bookmark issue for the user, false to remove bookmark.
   */
  isBookmarked?: boolean;
  /**
   * Is Public
   * @description Set to true for public, false for private.
   */
  isPublic?: boolean;
  /**
   * Merge
   * @description Set to true to merge issues, false to unmerge. If merging, ensure the target issue ID is correctly specified.
   */
  merge?: boolean;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Status
   * @description The new status to apply to the selected issues (request body parameter, also named "status"). Valid values are `"resolved"`, `"resolvedInNextRelease"`, `"unresolved"`, and `"ignored"`.
   */
  status?: string;
  /**
   * Status Details  Ignore Count
   * @description Number of times to ignore the issue before it resurfaces.
   */
  statusDetails__ignoreCount?: number;
  /**
   * Status Details  Ignore Duration
   * @description Duration (in minutes) to ignore the issue.
   */
  statusDetails__ignoreDuration?: number;
  /**
   * Status Details  Ignore User Count
   * @description Number of unique users affected before a previously ignored issue resurfaces.
   */
  statusDetails__ignoreUserCount?: number;
  /**
   * Status Details  Ignore User Window
   * @description Time window (in minutes) for `ignoreUserCount`.
   */
  statusDetails__ignoreUserWindow?: number;
  /**
   * Status Details  Ignore Window
   * @description Time window (in minutes) for `ignoreCount`.
   */
  statusDetails__ignoreWindow?: number;
  /**
   * Status Details  In Commit
   * @description Commit ID in which the issue is resolved.
   */
  statusDetails__inCommit?: string;
  /**
   * Status Details  In Next Release
   * @description Indicates if the issue is resolved in the next release.
   */
  statusDetails__inNextRelease?: boolean;
  /**
   * Status Details  In Release
   * @description Version/release in which the issue is resolved.
   */
  statusDetails__inRelease?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS tool output.
 */
type SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION tool input.
 */
type SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION_INPUT = {
  /**
   * Browser Sdk Version
   * @description Sentry JavaScript SDK version for the loader ('latest' or '7.x'). Current setting remains unchanged if omitted.
   * @enum {string}
   */
  browserSdkVersion?: "latest" | "7.x";
  /**
   * Dynamic Sdk Loader Options  Has Debug
   * @description Enable (`true`) or disable (`false`) Debugging features for the dynamic SDK loader. Current setting remains unchanged if omitted.
   */
  dynamicSdkLoaderOptions__hasDebug?: boolean;
  /**
   * Dynamic Sdk Loader Options  Has Performance
   * @description Enable (`true`) or disable (`false`) Performance Monitoring for the dynamic SDK loader. Current setting remains unchanged if omitted.
   */
  dynamicSdkLoaderOptions__hasPerformance?: boolean;
  /**
   * Dynamic Sdk Loader Options  Has Replay
   * @description Enable (`true`) or disable (`false`) Session Replay for the dynamic SDK loader. Current setting remains unchanged if omitted.
   */
  dynamicSdkLoaderOptions__hasReplay?: boolean;
  /**
   * Is Active
   * @description Specifies if the client key should be active (`true` to activate, `false` to deactivate). Status remains unchanged if omitted.
   */
  isActive?: boolean;
  /**
   * Key Id
   * @description The ID of the client key (DSN public key) to be updated.
   */
  key_id?: string;
  /**
   * Name
   * @description New human-readable name for the client key. Name will not be changed if omitted.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project whose key is being updated.
   */
  project_id_or_slug?: string;
  /**
   * Rate Limit  Count
   * @description Maximum number of events the key can accept within `rateLimit_window`. Uses existing settings or project defaults if omitted.
   */
  rateLimit__count?: number;
  /**
   * Rate Limit  Window
   * @description Time window in seconds for `rateLimit_count` (e.g., 3600 for 1 hour). Uses existing settings or project defaults if omitted.
   */
  rateLimit__window?: number;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION tool output.
 */
type SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the complete, updated configuration of the client key.
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
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_MONITOR tool input.
 */
type SENTRY_UPDATE_PROJECT_MONITOR_INPUT = {
  /**
   * Is Muted
   * @description If `True`, prevents monitor from creating incidents. Defaults to `False` if not provided.
   */
  is_muted?: boolean;
  /**
   * Monitor Id Or Slug
   * @description ID or slug of the monitor to update.
   */
  monitor_id_or_slug?: string;
  /**
   * Name
   * @description Human-readable name for the monitor.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description Team or user owner (format: 'team:<team_id>' or 'user:<user_id>').
   */
  owner?: string;
  /**
   * Project Id Or Slug
   * @description ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Slug
   * @description Unique machine-readable identifier. Must match `^[a-z][a-z0-9_\-]*$`. Changing this requires updating instrumented check-in calls.
   */
  slug?: string;
  /**
   * Status
   * @description Operational status. If 'disabled', the monitor won't accept check-ins or count towards quota.
   * @default active
   * @enum {string}
   */
  status: "active" | "disabled";
  /**
   * Type
   * @description Type of the monitor, typically 'cron_job' for scheduled tasks.
   * @enum {string}
   */
  type?: "cron_job";
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_MONITOR tool output.
 */
type SENTRY_UPDATE_PROJECT_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Full configuration and details of the updated monitor.
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
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS tool input.
 */
type SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS_INPUT = {
  /**
   * Auto Assignment
   * @description Strategy for assigning new issues not covered by ownership rules. Options: 'Auto Assign to Issue Owner', 'Auto Assign to Suspect Commits', 'Turn off Auto-Assignment'.
   */
  autoAssignment?: string;
  /**
   * Codeowners Auto Sync
   * @description If `True` (default), automatically synchronizes Sentry issue ownership with the repository's CODEOWNERS file during a release.
   * @default true
   */
  codeownersAutoSync: boolean;
  /**
   * Fallthrough
   * @description If `True`, assigns issues to all project members if no ownership rule matches; if `False`, no owners are set by default in such cases.
   */
  fallthrough?: boolean;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Raw
   * @description Raw Sentry ownership rule string (e.g., 'path:src/components/* #frontend') defining issue assignment based on file paths or URLs. See Sentry's Ownership Rules documentation for syntax.
   */
  raw?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS tool output.
 */
type SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the updated project ownership settings.
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
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS tool input.
 */
type SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS_INPUT = {
  /**
   * Dist
   * @description The new distribution name. A distribution is a unique identifier for a build, often a build number or commit SHA, used to distinguish between different builds of the same release version.
   */
  dist?: string;
  /**
   * File Id
   * @description The unique identifier of the release file to be updated.
   */
  file_id?: string;
  /**
   * Name
   * @description The new name or full path for the file. For example, '~/dist/main.js'.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project associated with the release file.
   */
  project_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release, e.g., '1.0.0' or 'my-app@2.3.1'.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS tool output.
 */
type SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_RULE_BY_ID tool input.
 */
type SENTRY_UPDATE_PROJECT_RULE_BY_ID_INPUT = {
  /**
   * Action Match
   * @description Specifies how conditions must align for actions: 'all' (all true), 'any' (at least one true), or 'none' (all false).
   * @enum {string}
   */
  actionMatch?: "all" | "any" | "none";
  /**
   * Actions
   * @description Actions performed when rule conditions and filters are met. Structure varies by action type chosen; refer to Sentry's issue alert rule documentation.
   */
  actions?: Record<string, never>[];
  /**
   * Conditions
   * @description Conditions that trigger the rule. Structure varies by condition type chosen; refer to Sentry's issue alert rule documentation.
   */
  conditions?: Record<string, never>[];
  /**
   * Environment
   * @description Specific environment for this rule (e.g., 'production'); applies to all environments if omitted.
   * @default null
   */
  environment: string | null;
  /**
   * FiltermatchEnm
   * @description Specifies how filters (if any) must align for actions: 'all' (all true), 'any' (at least one true), or 'none' (all false).
   * @default null
   * @enum {string|null}
   */
  filterMatch: "all" | "any" | "none" | null;
  /**
   * Filters
   * @description Optional filters refining when the rule fires after conditions are met. Structure varies by filter type chosen; refer to Sentry's issue alert rule documentation.
   * @default null
   */
  filters: Record<string, never>[] | null;
  /**
   * Frequency
   * @description The minimum interval, in minutes, between actions for the same issue. Valid range is `5` to `43200` (30 days).
   */
  frequency?: number;
  /**
   * Name
   * @description The new name for the alert rule.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Owner
   * @description The ID of the team or user that owns this rule. Format: `team:TEAM_ID` or `user:USER_ID` or the user's email, or a team name prefixed with '#'. For example, 'user@example.com' or '#platform-team'.
   * @default null
   */
  owner: string | null;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID) or human-readable slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Rule Id
   * @description The numeric ID of the alert rule to be updated.
   */
  rule_id?: number;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_PROJECT_RULE_BY_ID tool output.
 */
type SENTRY_UPDATE_PROJECT_RULE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the complete, updated alert rule configuration.
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
 * Type of SENTRY's SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION tool input.
 */
type SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION_INPUT = {
  /**
   * Commits
   * @description List of commit data to associate or update for this release; can add new commits or modify existing ones if Sentry's commit tracking needs adjustment.
   */
  commits?: {
      /**
       * Author Email
       * @description The email address of the commit author.
       */
      author_email?: string;
      /**
       * Author Name
       * @description The name of the commit author.
       */
      author_name?: string;
      /**
       * Id
       * @description The unique identifier of the commit (e.g., a SHA hash).
       */
      id: string;
      /**
       * Message
       * @description The commit message.
       */
      message?: string;
      /**
       * Patch Set
       * @description List of objects representing file changes (patches) included in this commit. Each object specifies the file path and type of change.
       */
      patch_set?: {
          /**
           * Path
           * @description The path of the file that was changed in the commit.
           */
          path: string;
          /**
           * Type
           * @description The type of change made to the file (e.g., 'A' for added, 'M' for modified, 'D' for deleted).
           */
          type: string;
      }[];
      /**
       * Repository
       * @description The name or identifier of the repository the commit belongs to. Optional if only one repository is configured for the Sentry project.
       */
      repository?: string;
      /**
       * Timestamp
       * Format: date-time
       * @description The timestamp of the commit in ISO 8601 format (e.g., '2023-10-26T10:00:00Z').
       */
      timestamp?: string;
  }[];
  /**
   * Date Released
   * Format: date-time
   * @description ISO 8601 timestamp indicating when the release went live (e.g., '2023-10-26T10:00:00Z'). If not provided, Sentry uses the current time, but an existing dateReleased will not be overwritten unless a new value is provided.
   */
  dateReleased?: string;
  /**
   * Organization Id Or Slug
   * @description The unique ID or human-readable slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Ref
   * @description Commit reference (e.g., a branch name, tag, or commit SHA) to associate with this release; useful if a tagged version has been provided.
   */
  ref?: string;
  /**
   * Refs
   * @description Indicates or updates the start and end commits for each repository in a release. Head commits require ``repository`` and ``commit`` (HEAD SHA), and can optionally include ``previousCommit`` (SHA of previous release's HEAD) for initial data sends or corrections.
   */
  refs?: {
      /**
       * Commit
       * @description The commit SHA (Secure Hash Algorithm) identifier for the head commit of this repository in the release.
       */
      commit: string;
      /**
       * Previous Commit
       * @description The commit SHA of the head of the previous release for this repository. This is useful for Sentry to determine the set of changes in the current release. It is recommended to include this if this is the first time you're sending commit data for this repository in a release.
       */
      previousCommit?: string;
      /**
       * Repository
       * @description The full name or identifier of the repository (e.g., 'my-org/my-repo').
       */
      repository: string;
  }[];
  /**
   * Url
   * Format: uri
   * @description A URL that points to the release. For instance, this can be the path to an online interface to the source code, such as a GitHub URL, or a link to a release announcement.
   */
  url?: string;
  /**
   * Version
   * @description The version identifier of the release to be updated (e.g., '1.0.0', 'my-project@2.3.12'). This identifier must be unique within the organization.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION tool output.
 */
type SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated details of the release.
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
 * Type of SENTRY's SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION tool input.
 */
type SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION_INPUT = {
  /**
   * Display
   * @description The visualization type for the saved query chart. Allowed values are: 'default', 'previous', 'top5', 'daily', 'dailytop5', 'bar'.
   */
  display?: string;
  /**
   * End
   * Format: date-time
   * @description The specific end date and time for the query's time range, in ISO 8601 format (e.g., '2023-01-31T23:59:59Z'); used if 'range' is not provided.
   */
  end?: string;
  /**
   * Environment
   * @description A list of environment names to filter the query by.
   */
  environment?: string[];
  /**
   * Fields
   * @description A list of fields, functions, or equations for the query, with a maximum of 20. Each item can be: 1. A built-in key field (e.g., 'transaction'; see Sentry's properties table for event properties). 2. A tag, formatted as 'tag[tagName]' (e.g., 'tag[isEnterprise]'). 3. A function, like 'function_name(parameters,...)' (e.g., 'count_if(transaction.duration,greater,300)'; Discover groups by tags/fields when functions are used; see Sentry's query builder documentation). 4. An equation, prefixed with 'equation|' (e.g., 'equation|count_if(transaction.duration,greater,300) / count() * 100'; see Sentry's documentation on query equations).
   */
  fields?: string[];
  /**
   * Interval
   * @description The resolution of the time series for the chart (e.g., '1h', '1d', '30m').
   */
  interval?: string;
  /**
   * Name
   * @description The new user-defined name for the saved query.
   */
  name?: string;
  /**
   * Orderby
   * @description Field to sort the query results by. Must be one of the items in the 'fields' list (excluding equations). Prefix with a hyphen '-' for descending order (e.g., '-count()').
   */
  orderby?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization to which the saved query belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Projects
   * @description A list of project IDs to associate with this saved query. An empty list means the query applies to all projects selected in the Sentry UI unless overridden.
   * @default []
   */
  projects: number[];
  /**
   * Query
   * @description The Sentry search query string to filter results (e.g., 'error.type:ZeroDivisionError browser.name:Firefox'). Refer to Sentry's search syntax documentation for details.
   */
  query?: string;
  /**
   * Query Dataset
   * @description The dataset to query.
   * @default error-events
   * @enum {string}
   */
  queryDataset: "discover" | "error-events" | "transaction-like";
  /**
   * Query Id
   * @description The unique identifier of the Discover saved query to be updated.
   */
  query_id?: number;
  /**
   * Range
   * @description The relative time range period for this saved query (e.g., '24h', '7d', '30d'); an alternative to specific 'start' and 'end' times.
   */
  range?: string;
  /**
   * Start
   * Format: date-time
   * @description The specific start date and time for the query's time range, in ISO 8601 format (e.g., '2023-01-01T00:00:00Z'); used if 'range' is not provided.
   */
  start?: string;
  /**
   * Top Events
   * @description The number of top events' timeseries to be visualized on the chart.
   */
  topEvents?: number;
  /**
   * Y Axis
   * @description A list of aggregate functions to be plotted on the Y-axis of the chart (e.g., 'count()', 'p95(transaction.duration)').
   */
  yAxis?: string[];
};

/**
 * Type of SENTRY's SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION tool output.
 */
type SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the updated saved query object and its attributes.
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
 * Type of SENTRY's SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS tool input.
 */
type SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS_INPUT = {
  /**
   * Access Key
   * @description The AWS Access Key ID for S3 authentication. Required if `type` is `s3`.
   */
  access_key?: string;
  /**
   * Bucket
   * @description Name of the GCS or S3 bucket. Required if `type` is `gcs` or `s3`.
   */
  bucket?: string;
  /**
   * Client Email
   * @description Client email for GCS authentication (from service account key file). Required if `type` is `gcs`.
   */
  client_email?: string;
  /**
   * Id
   * @description Internal ID to assign or change for the symbol source. Must be distinct and not start with `sentry:`. If omitted, Sentry may assign/retain an ID (e.g., a new UUID).
   */
  id?: string;
  /**
   * Layout  Casing
   * @description Specifies the casing rule for filenames or paths within the symbol source.
   *     * `lowercase` - All paths are converted to lowercase.
   *     * `uppercase` - All paths are converted to uppercase.
   *     * `default` - No transformation is applied (default Sentry behavior).
   * @enum {string}
   */
  layout__casing?: "lowercase" | "uppercase" | "default";
  /**
   * Layout  Type
   * @description The layout type of the symbol source, indicating how symbols are organized.
   *     * `native` - Native layout
   *     * `symstore` - SymStore (Microsoft)
   *     * `symstore_index2` - SymStore (with index2.txt)
   *     * `ssqp` - SSQP (Simple Symbol Query Protocol)
   *     * `unified` - Unified layout
   *     * `debuginfod` - debuginfod server
   *     * `slashsymbols` - Symbols with /symbols/ prefix
   * @enum {string}
   */
  layout__type?: "native" | "symstore" | "symstore_index2" | "ssqp" | "unified" | "debuginfod" | "slashsymbols";
  /**
   * Name
   * @description A human-readable name for the symbol source.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry organization to which the project belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Password
   * @description Password for HTTP symbol source authentication. Only applicable if `type` is `http`.
   */
  password?: string;
  /**
   * Prefix
   * @description An optional path prefix within GCS or S3 buckets, specifying a subdirectory where symbols are located. Optional for GCS and S3 sources; invalid for HTTP sources.
   */
  prefix?: string;
  /**
   * Private Key
   * @description Private key (PEM format) for GCS authentication (from service account key file). Required if `type` is `gcs`.
   */
  private_key?: string;
  /**
   * Project Id Or Slug
   * @description The unique identifier (ID or slug) of the Sentry project where the symbol source will be updated.
   */
  project_id_or_slug?: string;
  /**
   * Region
   * @description AWS region for S3 type symbol sources. Required if `type` is `s3`.
   *     * `us-east-2` - US East (Ohio)
   *     * `us-east-1` - US East (N. Virginia)
   *     * `us-west-1` - US West (N. California)
   *     * `us-west-2` - US West (Oregon)
   *     * `ap-east-1` - Asia Pacific (Hong Kong)
   *     * `ap-south-1` - Asia Pacific (Mumbai)
   *     * `ap-northeast-2` - Asia Pacific (Seoul)
   *     * `ap-southeast-1` - Asia Pacific (Singapore)
   *     * `ap-southeast-2` - Asia Pacific (Sydney)
   *     * `ap-northeast-1` - Asia Pacific (Tokyo)
   *     * `ca-central-1` - Canada (Central)
   *     * `cn-north-1` - China (Beijing)
   *     * `cn-northwest-1` - China (Ningxia)
   *     * `eu-central-1` - EU (Frankfurt)
   *     * `eu-west-1` - EU (Ireland)
   *     * `eu-west-2` - EU (London)
   *     * `eu-west-3` - EU (Paris)
   *     * `eu-north-1` - EU (Stockholm)
   *     * `sa-east-1` - South America (São Paulo)
   *     * `us-gov-east-1` - AWS GovCloud (US-East)
   *     * `us-gov-west-1` - AWS GovCloud (US)
   * @enum {string}
   */
  region?: "us-east-2" | "us-east-1" | "us-west-1" | "us-west-2" | "ap-east-1" | "ap-south-1" | "ap-northeast-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-northeast-1" | "ca-central-1" | "cn-north-1" | "cn-northwest-1" | "eu-central-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-north-1" | "sa-east-1" | "us-gov-east-1" | "us-gov-west-1";
  /**
   * Secret Key
   * @description The AWS Secret Access Key for S3 authentication. Required if `type` is `s3`.
   */
  secret_key?: string;
  /**
   * Type
   * @description Symbol source type, which determines applicability/requirements of other fields.
   *     * `http` - SymbolServer (HTTP)
   *     * `gcs` - Google Cloud Storage
   *     * `s3` - Amazon S3
   * @enum {string}
   */
  type?: "http" | "gcs" | "s3";
  /**
   * Url
   * @description URL for HTTP-based symbol sources. Only applicable if `type` is `http`.
   */
  url?: string;
  /**
   * Username
   * @description Username for HTTP symbol source authentication. Only applicable if `type` is `http`.
   */
  username?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS tool output.
 */
type SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full configuration and details of the updated custom symbol source.
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
 * Type of SENTRY's SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID tool input.
 */
type SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique identifier (ID or slug) of the organization to which the team belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Slug
   * @description The new slug for the team. Must be unique within the organization.
   */
  slug?: string;
  /**
   * Team Id Or Slug
   * @description The unique identifier (ID or slug) of the team whose slug is to be updated.
   */
  team_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID tool output.
 */
type SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the updated team resource.
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
 * Type of SENTRY's SENTRY_UPDATE_USER_EMAIL tool input.
 */
type SENTRY_UPDATE_USER_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The new primary email address to set for the user. This email must be in a valid format and should not be already registered as a primary email for another Sentry user.
   */
  email?: string;
  /**
   * User Id
   * @description The unique identifier of the Sentry user whose primary email address is to be updated. Can be the numerical ID or 'me' for the authenticated user.
   */
  user_id?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_USER_EMAIL tool output.
 */
type SENTRY_UPDATE_USER_EMAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP tool input.
 */
type SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP_INPUT = {
  /**
   * Events
   * @description A list of Sentry event types for which this webhook will receive notifications.
   */
  events?: string[];
  /**
   * Hook Id
   * @description The unique identifier (GUID) of the service hook to be updated.
   */
  hook_id?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization to which the service hook belongs.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the project to which the service hook belongs.
   */
  project_id_or_slug?: string;
  /**
   * Url
   * @description The new URL to which Sentry will send webhook notifications.
   */
  url?: string;
};

/**
 * Type of SENTRY's SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP tool output.
 */
type SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT tool input.
 */
type SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT_INPUT = {
  /**
   * File
   * Format: binary
   * @description The dSYM file to upload, provided as a zip archive of an Apple .dSYM folder containing debug symbols.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Organization Id Or Slug
   * @description Unique ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description Unique ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
};

/**
 * Type of SENTRY's SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT tool output.
 */
type SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Server's response data regarding the dSYM file upload and processing, typically including details about created symbol files (IDs, names, checksums, UUIDs, symbol types) or error information if processing failed.
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
 * Type of SENTRY's SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE tool input.
 */
type SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE_INPUT = {
  /**
   * Dist
   * @description Optional: Distribution identifier to distinguish multiple files of the same name within a single release (e.g., for different build variants or AB tests).
   */
  dist?: string;
  /**
   * File
   * Format: binary
   * @description The file to be uploaded.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Header
   * @description Optional: Header for the file, formatted as 'Header-Key: Header-Value' (e.g., 'X-SourceMap:/url/to/sourcemap.map' for SourceMap debug images).
   */
  header?: string;
  /**
   * Name
   * @description Optional: Name for the file, ideally an absolute path or URI (e.g., for JavaScript source maps, the full web URI to the original '.js' file).
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the Sentry organization.
   */
  organization_id_or_slug?: string;
  /**
   * Project Id Or Slug
   * @description The ID or slug of the Sentry project.
   */
  project_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release to associate the file with.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE tool output.
 */
type SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the uploaded file, such as its ID, name, size, headers, and sha1.
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
 * Type of SENTRY's SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION tool input.
 */
type SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION_INPUT = {
  /**
   * Dist
   * @description An optional distribution identifier for the file. This helps differentiate between multiple files with the same name within a single release, often used for build numbers or variant identifiers (e.g., Android versionCode or Xcode build number).
   */
  dist?: string;
  /**
   * File
   * Format: binary
   * @description The file to be uploaded for the release.
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Header
   * @description An optional header string or list of strings to be associated with the artifact. This can be used to specify headers like 'Content-Type' or custom metadata. For example: 'Content-Type:application/json' or ['X-SourceMap: /url/to/source.map', 'Content-Type: application/json'].
   */
  header?: string;
  /**
   * Name
   * @description The optional name of the file, which should reflect the absolute path or URI where this file will be referenced. For example, for JavaScript source maps, this could be the full web URI.
   */
  name?: string;
  /**
   * Organization Id Or Slug
   * @description The ID or slug of the organization.
   */
  organization_id_or_slug?: string;
  /**
   * Version
   * @description The version identifier of the release.
   */
  version?: string;
};

/**
 * Type of SENTRY's SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION tool output.
 */
type SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENTRY's SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS tool input.
 */
type SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS_INPUT = {
  /**
   * Organization Id Or Slug
   * @description The unique ID or slug of the Sentry organization for which to view notification actions.
   */
  organization_id_or_slug?: string;
  /**
   * Project
   * @description List of project IDs to filter notification actions. Use `[-1]` for all projects. `project_id_or_slug` takes precedence if also provided.
   */
  project?: number[];
  /**
   * Project Id Or Slug
   * @description List of project slugs to filter notification actions. Use `["$all"]` for all projects. Takes precedence over `project` if also specified.
   */
  project_id_or_slug?: string[];
  /**
   * Trigger Type
   * @description Filters actions by trigger type. Currently, only 'spike-protection' is supported.
   */
  triggerType?: string;
};

/**
 * Type of SENTRY's SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS tool output.
 */
type SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the notification actions that match the query criteria.
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
 * Type map of all available tool input types for toolkit "SENTRY".
 */
export type SENTRY_TOOL_INPUTS = {
  ACCESS_PROJECT_INFORMATION: SENTRY_ACCESS_PROJECT_INFORMATION_INPUT
  ADD_ORGANIZATION_MEMBER_VIA_EMAIL: SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL_INPUT
  ADD_REMOVE_USER_EMAIL_BY_ID: SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID_INPUT
  ADD_TEAM_MEMBER_IN_ORGANIZATION: SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION_INPUT
  ADD_TEAM_TO_PROJECT: SENTRY_ADD_TEAM_TO_PROJECT_INPUT
  CREATE_DASHBOARD_WITH_WIDGETS: SENTRY_CREATE_DASHBOARD_WITH_WIDGETS_INPUT
  CREATE_EXTERNAL_USER_FOR_ORGANIZATION: SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION_INPUT
  CREATE_ORGANIZATION_ALERT_RULE: SENTRY_CREATE_ORGANIZATION_ALERT_RULE_INPUT
  CREATE_ORGANIZATION_MONITOR: SENTRY_CREATE_ORGANIZATION_MONITOR_INPUT
  CREATE_ORGANIZATION_TEAM: SENTRY_CREATE_ORGANIZATION_TEAM_INPUT
  CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING: SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING_INPUT
  CREATE_PROJECT_RULE_FOR_ALERTS: SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS_INPUT
  CREATE_PROJECT_WEBHOOK_SUBSCRIPTION: SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION_INPUT
  CREATE_RELEASE_DEPLOY_FOR_ORG: SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG_INPUT
  CREATE_RELEASE_FOR_ORGANIZATION: SENTRY_CREATE_RELEASE_FOR_ORGANIZATION_INPUT
  CREATE_SCIM_GROUP_FOR_ORGANIZATION: SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION_INPUT
  CREATE_SENTRY_EXTERNAL_ISSUE_LINK: SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK_INPUT
  CREATE_TEAM_PROJECT_FOR_ORGANIZATION: SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION_INPUT
  CREATE_USER_FOR_SAML_INTEGRATION: SENTRY_CREATE_USER_FOR_SAML_INTEGRATION_INPUT
  DELETE_DSYMS_FOR_PROJECT: SENTRY_DELETE_DSYMS_FOR_PROJECT_INPUT
  DELETE_EXTERNAL_ISSUE_BY_UUID: SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID_INPUT
  DELETE_EXTERNAL_TEAM_BY_ID: SENTRY_DELETE_EXTERNAL_TEAM_BY_ID_INPUT
  DELETE_EXTERNAL_USER_FROM_ORGANIZATION: SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION_INPUT
  DELETE_MEMBER_FROM_TEAM: SENTRY_DELETE_MEMBER_FROM_TEAM_INPUT
  DELETE_ORGANIZATION_ALERT_RULE: SENTRY_DELETE_ORGANIZATION_ALERT_RULE_INPUT
  DELETE_ORGANIZATION_DASHBOARD: SENTRY_DELETE_ORGANIZATION_DASHBOARD_INPUT
  DELETE_ORGANIZATION_DISCOVER_QUERY: SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY_INPUT
  DELETE_ORGANIZATION_INTEGRATION: SENTRY_DELETE_ORGANIZATION_INTEGRATION_INPUT
  DELETE_ORGANIZATION_ISSUE: SENTRY_DELETE_ORGANIZATION_ISSUE_INPUT
  DELETE_ORGANIZATION_MEMBER: SENTRY_DELETE_ORGANIZATION_MEMBER_INPUT
  DELETE_ORGANIZATION_MONITOR: SENTRY_DELETE_ORGANIZATION_MONITOR_INPUT
  DELETE_ORGANIZATION_RELEASE: SENTRY_DELETE_ORGANIZATION_RELEASE_INPUT
  DELETE_ORG_NOTIFICATION_ACTION: SENTRY_DELETE_ORG_NOTIFICATION_ACTION_INPUT
  DELETE_PROJECT_BY_ID: SENTRY_DELETE_PROJECT_BY_ID_INPUT
  DELETE_PROJECT_HOOK: SENTRY_DELETE_PROJECT_HOOK_INPUT
  DELETE_PROJECT_ISSUES: SENTRY_DELETE_PROJECT_ISSUES_INPUT
  DELETE_PROJECT_KEY: SENTRY_DELETE_PROJECT_KEY_INPUT
  DELETE_PROJECT_MONITOR: SENTRY_DELETE_PROJECT_MONITOR_INPUT
  DELETE_PROJECT_REPLAY: SENTRY_DELETE_PROJECT_REPLAY_INPUT
  DELETE_PROJECT_RULE: SENTRY_DELETE_PROJECT_RULE_INPUT
  DELETE_PROJECT_SYMBOL_SOURCES: SENTRY_DELETE_PROJECT_SYMBOL_SOURCES_INPUT
  DELETE_PROJECT_TEAM_ASSOCIATION: SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION_INPUT
  DELETE_RELEASE_FILE: SENTRY_DELETE_RELEASE_FILE_INPUT
  DELETE_RELEASE_FILE_BY_ID: SENTRY_DELETE_RELEASE_FILE_BY_ID_INPUT
  DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG: SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG_INPUT
  DELETE_TEAM_FROM_ORG_SCIM_V2: SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2_INPUT
  DELETE_USER_EMAILS_BY_ID: SENTRY_DELETE_USER_EMAILS_BY_ID_INPUT
  DELETE_USER_FROM_ORG: SENTRY_DELETE_USER_FROM_ORG_INPUT
  FETCH_ISSUE_EVENT_BY_ID: SENTRY_FETCH_ISSUE_EVENT_BY_ID_INPUT
  FETCH_ORGANIZATION_ALERT_RULES: SENTRY_FETCH_ORGANIZATION_ALERT_RULES_INPUT
  FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES: SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES_INPUT
  FETCH_ORGANIZATION_REPLAY_COUNT: SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT_INPUT
  FETCH_ORGANIZATION_REPLAY_DETAILS: SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS_INPUT
  FETCH_ORGANIZATION_REPLAY_SELECTORS: SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS_INPUT
  FETCH_PROJECT_ENVIRONMENT_DETAILS: SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS_INPUT
  FETCH_PROJECT_OWNERSHIP_DETAILS: SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS_INPUT
  FETCH_PROJECT_RELEASE_FILES: SENTRY_FETCH_PROJECT_RELEASE_FILES_INPUT
  FETCH_PROJECT_REPLAY_CLICKS: SENTRY_FETCH_PROJECT_REPLAY_CLICKS_INPUT
  FETCH_REPLAY_RECORDING_SEGMENT: SENTRY_FETCH_REPLAY_RECORDING_SEGMENT_INPUT
  GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION: SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION_INPUT
  GET_INTEGRATION_DETAILS_BY_ORG: SENTRY_GET_INTEGRATION_DETAILS_BY_ORG_INPUT
  GET_ORGANIZATION_BY_ID_OR_SLUG: SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG_INPUT
  GET_ORGANIZATION_DETAILS: SENTRY_GET_ORGANIZATION_DETAILS_INPUT
  GET_ORGANIZATION_ENVIRONMENTS: SENTRY_GET_ORGANIZATION_ENVIRONMENTS_INPUT
  GET_ORGANIZATION_ISSUE_DETAILS: SENTRY_GET_ORGANIZATION_ISSUE_DETAILS_INPUT
  GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG: SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG_INPUT
  GET_ORGANIZATION_RELEASE_VERSION: SENTRY_GET_ORGANIZATION_RELEASE_VERSION_INPUT
  GET_ORGANIZATION_SESSIONS: SENTRY_GET_ORGANIZATION_SESSIONS_INPUT
  GET_ORGANIZATION_STATS_SUMMARY: SENTRY_GET_ORGANIZATION_STATS_SUMMARY_INPUT
  GET_PROJECT_EVENTS: SENTRY_GET_PROJECT_EVENTS_INPUT
  GET_PROJECT_EVENT_STATS: SENTRY_GET_PROJECT_EVENT_STATS_INPUT
  GET_PROJECT_HOOK: SENTRY_GET_PROJECT_HOOK_INPUT
  GET_PROJECT_LIST: SENTRY_GET_PROJECT_LIST_INPUT
  GET_PROJECT_MONITOR_BY_ID: SENTRY_GET_PROJECT_MONITOR_BY_ID_INPUT
  GET_PROJECT_RULE_DETAILS: SENTRY_GET_PROJECT_RULE_DETAILS_INPUT
  GET_SCIM_GROUP_BY_TEAM_ID: SENTRY_GET_SCIM_GROUP_BY_TEAM_ID_INPUT
  GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION: SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION_INPUT
  GET_TEAM_MEMBERS_BY_ID_OR_SLUG: SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG_INPUT
  GET_WHO_VIEWED_REPLAY_BY_PROJECT: SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT_INPUT
  LIST_ORGANIZATION_DASHBOARDS: SENTRY_LIST_ORGANIZATION_DASHBOARDS_INPUT
  LIST_ORGANIZATION_MEMBERS: SENTRY_LIST_ORGANIZATION_MEMBERS_INPUT
  LIST_ORGANIZATION_RELEASES: SENTRY_LIST_ORGANIZATION_RELEASES_INPUT
  LIST_ORGANIZATION_REPOSITORIES: SENTRY_LIST_ORGANIZATION_REPOSITORIES_INPUT
  LIST_ORGANIZATION_USER_TEAMS: SENTRY_LIST_ORGANIZATION_USER_TEAMS_INPUT
  LIST_PROJECT_USERS: SENTRY_LIST_PROJECT_USERS_INPUT
  LIST_SCIM_V2_ORGANIZATION_USERS: SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS_INPUT
  LIST_TEAMS_IN_ORGANIZATION: SENTRY_LIST_TEAMS_IN_ORGANIZATION_INPUT
  MANAGE_TEAM_EXTERNAL_INTEGRATIONS: SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS_INPUT
  MODIFY_ORGANIZATION_MONITOR_DATA: SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA_INPUT
  MODIFY_ORGANIZATION_NOTIFICATION_ACTION: SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION_INPUT
  MODIFY_ORGANIZATION_SETTINGS: SENTRY_MODIFY_ORGANIZATION_SETTINGS_INPUT
  MODIFY_RELEASE_FILE_ATTRIBUTES: SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES_INPUT
  PATCH_SCIM_GROUP_OPERATIONS: SENTRY_PATCH_SCIM_GROUP_OPERATIONS_INPUT
  PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION: SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION_INPUT
  POST_PROJECT_SYMBOL_SOURCES: SENTRY_POST_PROJECT_SYMBOL_SOURCES_INPUT
  POST_SPIKE_PROTECTION_FOR_ORGANIZATION: SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION_INPUT
  RETRIEVE_ALERT_RULE_DETAILS: SENTRY_RETRIEVE_ALERT_RULE_DETAILS_INPUT
  RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO: SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO_INPUT
  RETRIEVE_COMMIT_FILES_FOR_RELEASE: SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE_INPUT
  RETRIEVE_DSYM_FILES_FOR_PROJECT: SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT_INPUT
  RETRIEVE_EVENT_ID_FOR_ORGANIZATION: SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION_INPUT
  RETRIEVE_FILES_FOR_RELEASE: SENTRY_RETRIEVE_FILES_FOR_RELEASE_INPUT
  RETRIEVE_ISSUE_EVENTS_BY_ID: SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID_INPUT
  RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION: SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION_INPUT
  RETRIEVE_ISSUE_TAG_DETAILS: SENTRY_RETRIEVE_ISSUE_TAG_DETAILS_INPUT
  RETRIEVE_MONITOR_CHECKINS: SENTRY_RETRIEVE_MONITOR_CHECKINS_INPUT
  RETRIEVE_MONITOR_CHECKINS_BY_ORG: SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG_INPUT
  RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID: SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID_INPUT
  RETRIEVE_ORGANIZATION_DASHBOARD: SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD_INPUT
  RETRIEVE_ORGANIZATION_EVENTS: SENTRY_RETRIEVE_ORGANIZATION_EVENTS_INPUT
  RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST: SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST_INPUT
  RETRIEVE_ORGANIZATION_MEMBER: SENTRY_RETRIEVE_ORGANIZATION_MEMBER_INPUT
  RETRIEVE_ORGANIZATION_MONITORS: SENTRY_RETRIEVE_ORGANIZATION_MONITORS_INPUT
  RETRIEVE_ORGANIZATION_PROJECTS: SENTRY_RETRIEVE_ORGANIZATION_PROJECTS_INPUT
  RETRIEVE_ORGANIZATION_RELAY_USAGE: SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE_INPUT
  RETRIEVE_ORGANIZATION_RELEASE_COMMITS: SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS_INPUT
  RETRIEVE_ORGANIZATION_REPLAYS: SENTRY_RETRIEVE_ORGANIZATION_REPLAYS_INPUT
  RETRIEVE_ORGANIZATION_SCIM_GROUPS: SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS_INPUT
  RETRIEVE_ORGANIZATION_STATS_V2: SENTRY_RETRIEVE_ORGANIZATION_STATS_V2_INPUT
  RETRIEVE_ORG_INTEGRATION_CONFIG: SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG_INPUT
  RETRIEVE_PROJECT_ENVIRONMENTS: SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS_INPUT
  RETRIEVE_PROJECT_EVENT_BY_ID: SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID_INPUT
  RETRIEVE_PROJECT_FILTER_DATA: SENTRY_RETRIEVE_PROJECT_FILTER_DATA_INPUT
  RETRIEVE_PROJECT_HOOKS: SENTRY_RETRIEVE_PROJECT_HOOKS_INPUT
  RETRIEVE_PROJECT_ISSUES_LIST: SENTRY_RETRIEVE_PROJECT_ISSUES_LIST_INPUT
  RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT: SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT_INPUT
  RETRIEVE_PROJECT_KEY_DETAILS: SENTRY_RETRIEVE_PROJECT_KEY_DETAILS_INPUT
  RETRIEVE_PROJECT_MEMBERS_LIST: SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST_INPUT
  RETRIEVE_PROJECT_RELEASE_FILE_DETAILS: SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS_INPUT
  RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID: SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID_INPUT
  RETRIEVE_PROJECT_SYMBOL_SOURCES: SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES_INPUT
  RETRIEVE_PROJECT_TAG_VALUES: SENTRY_RETRIEVE_PROJECT_TAG_VALUES_INPUT
  RETRIEVE_PROJECT_TEAMS: SENTRY_RETRIEVE_PROJECT_TEAMS_INPUT
  RETRIEVE_RELEASE_COMMITS: SENTRY_RETRIEVE_RELEASE_COMMITS_INPUT
  RETRIEVE_RELEASE_DEPLOYMENTS: SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS_INPUT
  RETRIEVE_RELEASE_FILE_BY_ID: SENTRY_RETRIEVE_RELEASE_FILE_BY_ID_INPUT
  RETRIEVE_REPLAY_RECORDING_SEGMENTS: SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS_INPUT
  RETRIEVE_SAVED_DISCOVER_QUERIES: SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES_INPUT
  RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION: SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION_INPUT
  RETRIEVE_SHORT_ID_FOR_ORGANIZATION: SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION_INPUT
  RETRIEVE_SOURCE_MAP_DEBUG_EVENT: SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT_INPUT
  RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG: SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG_INPUT
  RETRIEVE_TEAM_PROJECTS: SENTRY_RETRIEVE_TEAM_PROJECTS_INPUT
  RETRIEVE_USER_EMAIL_INFORMATION: SENTRY_RETRIEVE_USER_EMAIL_INFORMATION_INPUT
  RETRIEVE_USER_FEEDBACK_FOR_PROJECT: SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT_INPUT
  RETRIEVE_USER_VIA_SCIM_API: SENTRY_RETRIEVE_USER_VIA_SCIM_API_INPUT
  SAVE_ORGANIZATION_DISCOVER_QUERY: SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY_INPUT
  SENTRY_FETCH_TAG_VALUES_FOR_ISSUE: SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE_INPUT
  SUBMIT_NOTIFICATION_ACTION_API_DATA: SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA_INPUT
  SUBMIT_PROJECT_USER_FEEDBACK: SENTRY_SUBMIT_PROJECT_USER_FEEDBACK_INPUT
  SWITCH_TEAM_ROLE_FOR_MEMBER: SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER_INPUT
  TOGGLE_PROJECT_FILTER_STATUS: SENTRY_TOGGLE_PROJECT_FILTER_STATUS_INPUT
  UPDATE_ENVIRONMENT_VISIBILITY: SENTRY_UPDATE_ENVIRONMENT_VISIBILITY_INPUT
  UPDATE_EXTERNAL_TEAM_INTEGRATION: SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION_INPUT
  UPDATE_EXTERNAL_USER_FOR_ORGANIZATION: SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION_INPUT
  UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION: SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION_INPUT
  UPDATE_ORGANIZATION_ALERT_RULES: SENTRY_UPDATE_ORGANIZATION_ALERT_RULES_INPUT
  UPDATE_ORGANIZATION_DASHBOARD: SENTRY_UPDATE_ORGANIZATION_DASHBOARD_INPUT
  UPDATE_ORGANIZATION_MEMBER_ROLE: SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE_INPUT
  UPDATE_PROJECT_DETAILS: SENTRY_UPDATE_PROJECT_DETAILS_INPUT
  UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS: SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS_INPUT
  UPDATE_PROJECT_KEY_CONFIGURATION: SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION_INPUT
  UPDATE_PROJECT_MONITOR: SENTRY_UPDATE_PROJECT_MONITOR_INPUT
  UPDATE_PROJECT_OWNERSHIP_SETTINGS: SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS_INPUT
  UPDATE_PROJECT_RELEASE_FILE_DETAILS: SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS_INPUT
  UPDATE_PROJECT_RULE_BY_ID: SENTRY_UPDATE_PROJECT_RULE_BY_ID_INPUT
  UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION: SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION_INPUT
  UPDATE_SAVED_QUERY_FOR_ORGANIZATION: SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION_INPUT
  UPDATE_SYMBOL_SOURCE_SETTINGS: SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS_INPUT
  UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID: SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID_INPUT
  UPDATE_USER_EMAIL: SENTRY_UPDATE_USER_EMAIL_INPUT
  UPDATE_WEBHOOK_CONFIGURATION_XP: SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP_INPUT
  UPLOAD_DSYMS_FILE_TO_PROJECT: SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT_INPUT
  UPLOAD_FILE_TO_PROJECT_RELEASE: SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE_INPUT
  UPLOAD_RELEASE_FILE_TO_ORGANIZATION: SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION_INPUT
  VIEW_ORGANIZATION_NOTIFICATION_ACTIONS: SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENTRY".
 */
export type SENTRY_TOOL_OUTPUTS = {
  ACCESS_PROJECT_INFORMATION: SENTRY_ACCESS_PROJECT_INFORMATION_OUTPUT
  ADD_ORGANIZATION_MEMBER_VIA_EMAIL: SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL_OUTPUT
  ADD_REMOVE_USER_EMAIL_BY_ID: SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID_OUTPUT
  ADD_TEAM_MEMBER_IN_ORGANIZATION: SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION_OUTPUT
  ADD_TEAM_TO_PROJECT: SENTRY_ADD_TEAM_TO_PROJECT_OUTPUT
  CREATE_DASHBOARD_WITH_WIDGETS: SENTRY_CREATE_DASHBOARD_WITH_WIDGETS_OUTPUT
  CREATE_EXTERNAL_USER_FOR_ORGANIZATION: SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION_OUTPUT
  CREATE_ORGANIZATION_ALERT_RULE: SENTRY_CREATE_ORGANIZATION_ALERT_RULE_OUTPUT
  CREATE_ORGANIZATION_MONITOR: SENTRY_CREATE_ORGANIZATION_MONITOR_OUTPUT
  CREATE_ORGANIZATION_TEAM: SENTRY_CREATE_ORGANIZATION_TEAM_OUTPUT
  CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING: SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING_OUTPUT
  CREATE_PROJECT_RULE_FOR_ALERTS: SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS_OUTPUT
  CREATE_PROJECT_WEBHOOK_SUBSCRIPTION: SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION_OUTPUT
  CREATE_RELEASE_DEPLOY_FOR_ORG: SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG_OUTPUT
  CREATE_RELEASE_FOR_ORGANIZATION: SENTRY_CREATE_RELEASE_FOR_ORGANIZATION_OUTPUT
  CREATE_SCIM_GROUP_FOR_ORGANIZATION: SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION_OUTPUT
  CREATE_SENTRY_EXTERNAL_ISSUE_LINK: SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK_OUTPUT
  CREATE_TEAM_PROJECT_FOR_ORGANIZATION: SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION_OUTPUT
  CREATE_USER_FOR_SAML_INTEGRATION: SENTRY_CREATE_USER_FOR_SAML_INTEGRATION_OUTPUT
  DELETE_DSYMS_FOR_PROJECT: SENTRY_DELETE_DSYMS_FOR_PROJECT_OUTPUT
  DELETE_EXTERNAL_ISSUE_BY_UUID: SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID_OUTPUT
  DELETE_EXTERNAL_TEAM_BY_ID: SENTRY_DELETE_EXTERNAL_TEAM_BY_ID_OUTPUT
  DELETE_EXTERNAL_USER_FROM_ORGANIZATION: SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION_OUTPUT
  DELETE_MEMBER_FROM_TEAM: SENTRY_DELETE_MEMBER_FROM_TEAM_OUTPUT
  DELETE_ORGANIZATION_ALERT_RULE: SENTRY_DELETE_ORGANIZATION_ALERT_RULE_OUTPUT
  DELETE_ORGANIZATION_DASHBOARD: SENTRY_DELETE_ORGANIZATION_DASHBOARD_OUTPUT
  DELETE_ORGANIZATION_DISCOVER_QUERY: SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY_OUTPUT
  DELETE_ORGANIZATION_INTEGRATION: SENTRY_DELETE_ORGANIZATION_INTEGRATION_OUTPUT
  DELETE_ORGANIZATION_ISSUE: SENTRY_DELETE_ORGANIZATION_ISSUE_OUTPUT
  DELETE_ORGANIZATION_MEMBER: SENTRY_DELETE_ORGANIZATION_MEMBER_OUTPUT
  DELETE_ORGANIZATION_MONITOR: SENTRY_DELETE_ORGANIZATION_MONITOR_OUTPUT
  DELETE_ORGANIZATION_RELEASE: SENTRY_DELETE_ORGANIZATION_RELEASE_OUTPUT
  DELETE_ORG_NOTIFICATION_ACTION: SENTRY_DELETE_ORG_NOTIFICATION_ACTION_OUTPUT
  DELETE_PROJECT_BY_ID: SENTRY_DELETE_PROJECT_BY_ID_OUTPUT
  DELETE_PROJECT_HOOK: SENTRY_DELETE_PROJECT_HOOK_OUTPUT
  DELETE_PROJECT_ISSUES: SENTRY_DELETE_PROJECT_ISSUES_OUTPUT
  DELETE_PROJECT_KEY: SENTRY_DELETE_PROJECT_KEY_OUTPUT
  DELETE_PROJECT_MONITOR: SENTRY_DELETE_PROJECT_MONITOR_OUTPUT
  DELETE_PROJECT_REPLAY: SENTRY_DELETE_PROJECT_REPLAY_OUTPUT
  DELETE_PROJECT_RULE: SENTRY_DELETE_PROJECT_RULE_OUTPUT
  DELETE_PROJECT_SYMBOL_SOURCES: SENTRY_DELETE_PROJECT_SYMBOL_SOURCES_OUTPUT
  DELETE_PROJECT_TEAM_ASSOCIATION: SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION_OUTPUT
  DELETE_RELEASE_FILE: SENTRY_DELETE_RELEASE_FILE_OUTPUT
  DELETE_RELEASE_FILE_BY_ID: SENTRY_DELETE_RELEASE_FILE_BY_ID_OUTPUT
  DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG: SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG_OUTPUT
  DELETE_TEAM_FROM_ORG_SCIM_V2: SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2_OUTPUT
  DELETE_USER_EMAILS_BY_ID: SENTRY_DELETE_USER_EMAILS_BY_ID_OUTPUT
  DELETE_USER_FROM_ORG: SENTRY_DELETE_USER_FROM_ORG_OUTPUT
  FETCH_ISSUE_EVENT_BY_ID: SENTRY_FETCH_ISSUE_EVENT_BY_ID_OUTPUT
  FETCH_ORGANIZATION_ALERT_RULES: SENTRY_FETCH_ORGANIZATION_ALERT_RULES_OUTPUT
  FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES: SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES_OUTPUT
  FETCH_ORGANIZATION_REPLAY_COUNT: SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT_OUTPUT
  FETCH_ORGANIZATION_REPLAY_DETAILS: SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS_OUTPUT
  FETCH_ORGANIZATION_REPLAY_SELECTORS: SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS_OUTPUT
  FETCH_PROJECT_ENVIRONMENT_DETAILS: SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS_OUTPUT
  FETCH_PROJECT_OWNERSHIP_DETAILS: SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS_OUTPUT
  FETCH_PROJECT_RELEASE_FILES: SENTRY_FETCH_PROJECT_RELEASE_FILES_OUTPUT
  FETCH_PROJECT_REPLAY_CLICKS: SENTRY_FETCH_PROJECT_REPLAY_CLICKS_OUTPUT
  FETCH_REPLAY_RECORDING_SEGMENT: SENTRY_FETCH_REPLAY_RECORDING_SEGMENT_OUTPUT
  GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION: SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION_OUTPUT
  GET_INTEGRATION_DETAILS_BY_ORG: SENTRY_GET_INTEGRATION_DETAILS_BY_ORG_OUTPUT
  GET_ORGANIZATION_BY_ID_OR_SLUG: SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG_OUTPUT
  GET_ORGANIZATION_DETAILS: SENTRY_GET_ORGANIZATION_DETAILS_OUTPUT
  GET_ORGANIZATION_ENVIRONMENTS: SENTRY_GET_ORGANIZATION_ENVIRONMENTS_OUTPUT
  GET_ORGANIZATION_ISSUE_DETAILS: SENTRY_GET_ORGANIZATION_ISSUE_DETAILS_OUTPUT
  GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG: SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG_OUTPUT
  GET_ORGANIZATION_RELEASE_VERSION: SENTRY_GET_ORGANIZATION_RELEASE_VERSION_OUTPUT
  GET_ORGANIZATION_SESSIONS: SENTRY_GET_ORGANIZATION_SESSIONS_OUTPUT
  GET_ORGANIZATION_STATS_SUMMARY: SENTRY_GET_ORGANIZATION_STATS_SUMMARY_OUTPUT
  GET_PROJECT_EVENTS: SENTRY_GET_PROJECT_EVENTS_OUTPUT
  GET_PROJECT_EVENT_STATS: SENTRY_GET_PROJECT_EVENT_STATS_OUTPUT
  GET_PROJECT_HOOK: SENTRY_GET_PROJECT_HOOK_OUTPUT
  GET_PROJECT_LIST: SENTRY_GET_PROJECT_LIST_OUTPUT
  GET_PROJECT_MONITOR_BY_ID: SENTRY_GET_PROJECT_MONITOR_BY_ID_OUTPUT
  GET_PROJECT_RULE_DETAILS: SENTRY_GET_PROJECT_RULE_DETAILS_OUTPUT
  GET_SCIM_GROUP_BY_TEAM_ID: SENTRY_GET_SCIM_GROUP_BY_TEAM_ID_OUTPUT
  GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION: SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION_OUTPUT
  GET_TEAM_MEMBERS_BY_ID_OR_SLUG: SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG_OUTPUT
  GET_WHO_VIEWED_REPLAY_BY_PROJECT: SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT_OUTPUT
  LIST_ORGANIZATION_DASHBOARDS: SENTRY_LIST_ORGANIZATION_DASHBOARDS_OUTPUT
  LIST_ORGANIZATION_MEMBERS: SENTRY_LIST_ORGANIZATION_MEMBERS_OUTPUT
  LIST_ORGANIZATION_RELEASES: SENTRY_LIST_ORGANIZATION_RELEASES_OUTPUT
  LIST_ORGANIZATION_REPOSITORIES: SENTRY_LIST_ORGANIZATION_REPOSITORIES_OUTPUT
  LIST_ORGANIZATION_USER_TEAMS: SENTRY_LIST_ORGANIZATION_USER_TEAMS_OUTPUT
  LIST_PROJECT_USERS: SENTRY_LIST_PROJECT_USERS_OUTPUT
  LIST_SCIM_V2_ORGANIZATION_USERS: SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS_OUTPUT
  LIST_TEAMS_IN_ORGANIZATION: SENTRY_LIST_TEAMS_IN_ORGANIZATION_OUTPUT
  MANAGE_TEAM_EXTERNAL_INTEGRATIONS: SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS_OUTPUT
  MODIFY_ORGANIZATION_MONITOR_DATA: SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA_OUTPUT
  MODIFY_ORGANIZATION_NOTIFICATION_ACTION: SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION_OUTPUT
  MODIFY_ORGANIZATION_SETTINGS: SENTRY_MODIFY_ORGANIZATION_SETTINGS_OUTPUT
  MODIFY_RELEASE_FILE_ATTRIBUTES: SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES_OUTPUT
  PATCH_SCIM_GROUP_OPERATIONS: SENTRY_PATCH_SCIM_GROUP_OPERATIONS_OUTPUT
  PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION: SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION_OUTPUT
  POST_PROJECT_SYMBOL_SOURCES: SENTRY_POST_PROJECT_SYMBOL_SOURCES_OUTPUT
  POST_SPIKE_PROTECTION_FOR_ORGANIZATION: SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION_OUTPUT
  RETRIEVE_ALERT_RULE_DETAILS: SENTRY_RETRIEVE_ALERT_RULE_DETAILS_OUTPUT
  RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO: SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO_OUTPUT
  RETRIEVE_COMMIT_FILES_FOR_RELEASE: SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE_OUTPUT
  RETRIEVE_DSYM_FILES_FOR_PROJECT: SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT_OUTPUT
  RETRIEVE_EVENT_ID_FOR_ORGANIZATION: SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION_OUTPUT
  RETRIEVE_FILES_FOR_RELEASE: SENTRY_RETRIEVE_FILES_FOR_RELEASE_OUTPUT
  RETRIEVE_ISSUE_EVENTS_BY_ID: SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID_OUTPUT
  RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION: SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION_OUTPUT
  RETRIEVE_ISSUE_TAG_DETAILS: SENTRY_RETRIEVE_ISSUE_TAG_DETAILS_OUTPUT
  RETRIEVE_MONITOR_CHECKINS: SENTRY_RETRIEVE_MONITOR_CHECKINS_OUTPUT
  RETRIEVE_MONITOR_CHECKINS_BY_ORG: SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG_OUTPUT
  RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID: SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID_OUTPUT
  RETRIEVE_ORGANIZATION_DASHBOARD: SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD_OUTPUT
  RETRIEVE_ORGANIZATION_EVENTS: SENTRY_RETRIEVE_ORGANIZATION_EVENTS_OUTPUT
  RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST: SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST_OUTPUT
  RETRIEVE_ORGANIZATION_MEMBER: SENTRY_RETRIEVE_ORGANIZATION_MEMBER_OUTPUT
  RETRIEVE_ORGANIZATION_MONITORS: SENTRY_RETRIEVE_ORGANIZATION_MONITORS_OUTPUT
  RETRIEVE_ORGANIZATION_PROJECTS: SENTRY_RETRIEVE_ORGANIZATION_PROJECTS_OUTPUT
  RETRIEVE_ORGANIZATION_RELAY_USAGE: SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE_OUTPUT
  RETRIEVE_ORGANIZATION_RELEASE_COMMITS: SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS_OUTPUT
  RETRIEVE_ORGANIZATION_REPLAYS: SENTRY_RETRIEVE_ORGANIZATION_REPLAYS_OUTPUT
  RETRIEVE_ORGANIZATION_SCIM_GROUPS: SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS_OUTPUT
  RETRIEVE_ORGANIZATION_STATS_V2: SENTRY_RETRIEVE_ORGANIZATION_STATS_V2_OUTPUT
  RETRIEVE_ORG_INTEGRATION_CONFIG: SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG_OUTPUT
  RETRIEVE_PROJECT_ENVIRONMENTS: SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS_OUTPUT
  RETRIEVE_PROJECT_EVENT_BY_ID: SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID_OUTPUT
  RETRIEVE_PROJECT_FILTER_DATA: SENTRY_RETRIEVE_PROJECT_FILTER_DATA_OUTPUT
  RETRIEVE_PROJECT_HOOKS: SENTRY_RETRIEVE_PROJECT_HOOKS_OUTPUT
  RETRIEVE_PROJECT_ISSUES_LIST: SENTRY_RETRIEVE_PROJECT_ISSUES_LIST_OUTPUT
  RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT: SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT_OUTPUT
  RETRIEVE_PROJECT_KEY_DETAILS: SENTRY_RETRIEVE_PROJECT_KEY_DETAILS_OUTPUT
  RETRIEVE_PROJECT_MEMBERS_LIST: SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST_OUTPUT
  RETRIEVE_PROJECT_RELEASE_FILE_DETAILS: SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS_OUTPUT
  RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID: SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID_OUTPUT
  RETRIEVE_PROJECT_SYMBOL_SOURCES: SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES_OUTPUT
  RETRIEVE_PROJECT_TAG_VALUES: SENTRY_RETRIEVE_PROJECT_TAG_VALUES_OUTPUT
  RETRIEVE_PROJECT_TEAMS: SENTRY_RETRIEVE_PROJECT_TEAMS_OUTPUT
  RETRIEVE_RELEASE_COMMITS: SENTRY_RETRIEVE_RELEASE_COMMITS_OUTPUT
  RETRIEVE_RELEASE_DEPLOYMENTS: SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS_OUTPUT
  RETRIEVE_RELEASE_FILE_BY_ID: SENTRY_RETRIEVE_RELEASE_FILE_BY_ID_OUTPUT
  RETRIEVE_REPLAY_RECORDING_SEGMENTS: SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS_OUTPUT
  RETRIEVE_SAVED_DISCOVER_QUERIES: SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES_OUTPUT
  RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION: SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION_OUTPUT
  RETRIEVE_SHORT_ID_FOR_ORGANIZATION: SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION_OUTPUT
  RETRIEVE_SOURCE_MAP_DEBUG_EVENT: SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT_OUTPUT
  RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG: SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG_OUTPUT
  RETRIEVE_TEAM_PROJECTS: SENTRY_RETRIEVE_TEAM_PROJECTS_OUTPUT
  RETRIEVE_USER_EMAIL_INFORMATION: SENTRY_RETRIEVE_USER_EMAIL_INFORMATION_OUTPUT
  RETRIEVE_USER_FEEDBACK_FOR_PROJECT: SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT_OUTPUT
  RETRIEVE_USER_VIA_SCIM_API: SENTRY_RETRIEVE_USER_VIA_SCIM_API_OUTPUT
  SAVE_ORGANIZATION_DISCOVER_QUERY: SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY_OUTPUT
  SENTRY_FETCH_TAG_VALUES_FOR_ISSUE: SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE_OUTPUT
  SUBMIT_NOTIFICATION_ACTION_API_DATA: SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA_OUTPUT
  SUBMIT_PROJECT_USER_FEEDBACK: SENTRY_SUBMIT_PROJECT_USER_FEEDBACK_OUTPUT
  SWITCH_TEAM_ROLE_FOR_MEMBER: SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER_OUTPUT
  TOGGLE_PROJECT_FILTER_STATUS: SENTRY_TOGGLE_PROJECT_FILTER_STATUS_OUTPUT
  UPDATE_ENVIRONMENT_VISIBILITY: SENTRY_UPDATE_ENVIRONMENT_VISIBILITY_OUTPUT
  UPDATE_EXTERNAL_TEAM_INTEGRATION: SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION_OUTPUT
  UPDATE_EXTERNAL_USER_FOR_ORGANIZATION: SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION_OUTPUT
  UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION: SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION_OUTPUT
  UPDATE_ORGANIZATION_ALERT_RULES: SENTRY_UPDATE_ORGANIZATION_ALERT_RULES_OUTPUT
  UPDATE_ORGANIZATION_DASHBOARD: SENTRY_UPDATE_ORGANIZATION_DASHBOARD_OUTPUT
  UPDATE_ORGANIZATION_MEMBER_ROLE: SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE_OUTPUT
  UPDATE_PROJECT_DETAILS: SENTRY_UPDATE_PROJECT_DETAILS_OUTPUT
  UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS: SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS_OUTPUT
  UPDATE_PROJECT_KEY_CONFIGURATION: SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION_OUTPUT
  UPDATE_PROJECT_MONITOR: SENTRY_UPDATE_PROJECT_MONITOR_OUTPUT
  UPDATE_PROJECT_OWNERSHIP_SETTINGS: SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS_OUTPUT
  UPDATE_PROJECT_RELEASE_FILE_DETAILS: SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS_OUTPUT
  UPDATE_PROJECT_RULE_BY_ID: SENTRY_UPDATE_PROJECT_RULE_BY_ID_OUTPUT
  UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION: SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION_OUTPUT
  UPDATE_SAVED_QUERY_FOR_ORGANIZATION: SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION_OUTPUT
  UPDATE_SYMBOL_SOURCE_SETTINGS: SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS_OUTPUT
  UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID: SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID_OUTPUT
  UPDATE_USER_EMAIL: SENTRY_UPDATE_USER_EMAIL_OUTPUT
  UPDATE_WEBHOOK_CONFIGURATION_XP: SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP_OUTPUT
  UPLOAD_DSYMS_FILE_TO_PROJECT: SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT_OUTPUT
  UPLOAD_FILE_TO_PROJECT_RELEASE: SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE_OUTPUT
  UPLOAD_RELEASE_FILE_TO_ORGANIZATION: SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION_OUTPUT
  VIEW_ORGANIZATION_NOTIFICATION_ACTIONS: SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENTRY toolkit.
 */
export const SENTRY = {
  slug: "sentry",
  tools: {
    /**
     * Retrieves detailed information for a sentry project, given its existing organization and project id or slug.
     */
    ACCESS_PROJECT_INFORMATION: "SENTRY_ACCESS_PROJECT_INFORMATION",
    /**
     * Invites a new member (or re-invites an existing non-accepted member) to a sentry organization via email, allowing specification of organization and team roles.
     */
    ADD_ORGANIZATION_MEMBER_VIA_EMAIL: "SENTRY_ADD_ORGANIZATION_MEMBER_VIA_EMAIL",
    /**
     * Adds or removes a secondary email for an existing sentry user, determined by whether the email already exists for that user.
     */
    ADD_REMOVE_USER_EMAIL_BY_ID: "SENTRY_ADD_REMOVE_USER_EMAIL_BY_ID",
    /**
     * Adds an existing member of an organization to one of its teams; the member must already belong to the organization, and the team must also belong to that organization.
     */
    ADD_TEAM_MEMBER_IN_ORGANIZATION: "SENTRY_ADD_TEAM_MEMBER_IN_ORGANIZATION",
    /**
     * Grants a sentry team access to a sentry project within the specified sentry organization.
     */
    ADD_TEAM_TO_PROJECT: "SENTRY_ADD_TEAM_TO_PROJECT",
    /**
     * Creates a sentry dashboard with widgets for an organization; `organization id or slug` and specified `project` ids must be valid, and `start`/`end` datetimes (if absolute range) must form a logical iso 8601 range.
     */
    CREATE_DASHBOARD_WITH_WIDGETS: "SENTRY_CREATE_DASHBOARD_WITH_WIDGETS",
    /**
     * Links a sentry user to an external identity provider's user within a sentry organization; the sentry user must be an organization member, an active integration for the provider must be configured, and `external id` is typically required for the external user.
     */
    CREATE_EXTERNAL_USER_FOR_ORGANIZATION: "SENTRY_CREATE_EXTERNAL_USER_FOR_ORGANIZATION",
    /**
     * Creates a sentry metric alert rule for an organization, mandating a 'critical' trigger, typically for a single project, where actions may require sentry integrations.
     */
    CREATE_ORGANIZATION_ALERT_RULE: "SENTRY_CREATE_ORGANIZATION_ALERT_RULE",
    /**
     * Creates a new monitor (type 'cron job') within a sentry organization to track scheduled tasks, allowing configuration of its name, slug (which must be unique if provided), status, owner, and muting preferences for incidents.
     */
    CREATE_ORGANIZATION_MONITOR: "SENTRY_CREATE_ORGANIZATION_MONITOR",
    /**
     * Creates a new team in a sentry organization, requiring either a 'slug' (preferred, as 'name' is deprecated) or 'name' to define the team.
     */
    CREATE_ORGANIZATION_TEAM: "SENTRY_CREATE_ORGANIZATION_TEAM",
    /**
     * Creates a new client key (dsn) for an existing sentry project, with optional custom rate limit configuration.
     */
    CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING: "SENTRY_CREATE_PROJECT_KEY_WITH_OPTIONAL_RATE_LIMITING",
    /**
     * Creates a sentry project alert rule by defining conditions, actions, and optional filters using specific json structures (detailed in parameter descriptions) to automate responses to event patterns for an existing organization and project.
     */
    CREATE_PROJECT_RULE_FOR_ALERTS: "SENTRY_CREATE_PROJECT_RULE_FOR_ALERTS",
    /**
     * Registers a new webhook subscription for a sentry project to send http post notifications to a specified url for given events, provided the project has the 'servicehooks' feature enabled.
     */
    CREATE_PROJECT_WEBHOOK_SUBSCRIPTION: "SENTRY_CREATE_PROJECT_WEBHOOK_SUBSCRIPTION",
    /**
     * Creates a new deploy record in sentry to track the introduction of a release version into a specific environment.
     */
    CREATE_RELEASE_DEPLOY_FOR_ORG: "SENTRY_CREATE_RELEASE_DEPLOY_FOR_ORG",
    /**
     * Creates a new sentry release for an existing organization, associating it with specified projects that must belong to that organization.
     */
    CREATE_RELEASE_FOR_ORGANIZATION: "SENTRY_CREATE_RELEASE_FOR_ORGANIZATION",
    /**
     * Creates a new sentry team (scim group) within an organization where scim is enabled; a url-friendly slug is auto-generated from the `displayname` (e.g., 'my team' becomes 'my-team' by lowercasing and replacing spaces with dashes), and the team starts with no members.
     */
    CREATE_SCIM_GROUP_FOR_ORGANIZATION: "SENTRY_CREATE_SCIM_GROUP_FOR_ORGANIZATION",
    /**
     * Links an existing sentry issue to an issue in an external service, or updates an existing link, requiring a configured sentry app installation `uuid`.
     */
    CREATE_SENTRY_EXTERNAL_ISSUE_LINK: "SENTRY_CREATE_SENTRY_EXTERNAL_ISSUE_LINK",
    /**
     * Creates a new sentry project for an existing organization and team, allowing configuration of its name, slug, platform, and default alert rules.
     */
    CREATE_TEAM_PROJECT_FOR_ORGANIZATION: "SENTRY_CREATE_TEAM_PROJECT_FOR_ORGANIZATION",
    /**
     * Creates a new sentry organization member via a scim request for saml integration; this action does not support setting secondary emails.
     */
    CREATE_USER_FOR_SAML_INTEGRATION: "SENTRY_CREATE_USER_FOR_SAML_INTEGRATION",
    /**
     * Permanently removes a specific debug information file (dif), used for symbolicating crash reports, from the specified sentry project and organization.
     */
    DELETE_DSYMS_FOR_PROJECT: "SENTRY_DELETE_DSYMS_FOR_PROJECT",
    /**
     * Unlinks an external issue (e.g., from jira/github), identified by `external issue id`, from the sentry app installation specified by `uuid`.
     */
    DELETE_EXTERNAL_ISSUE_BY_UUID: "SENTRY_DELETE_EXTERNAL_ISSUE_BY_UUID",
    /**
     * Unlinks a previously established external team from a sentry team; this action does not delete either the sentry team or the external team.
     */
    DELETE_EXTERNAL_TEAM_BY_ID: "SENTRY_DELETE_EXTERNAL_TEAM_BY_ID",
    /**
     * Deletes the link between an external user (e.g., from an sso provider) and a sentry user within the specified sentry organization.
     */
    DELETE_EXTERNAL_USER_FROM_ORGANIZATION: "SENTRY_DELETE_EXTERNAL_USER_FROM_ORGANIZATION",
    /**
     * Removes an organization member from a sentry team, revoking their team-specific permissions, provided the member is currently part of that team.
     */
    DELETE_MEMBER_FROM_TEAM: "SENTRY_DELETE_MEMBER_FROM_TEAM",
    /**
     * Deletes a specific metric alert rule within a sentry organization.
     */
    DELETE_ORGANIZATION_ALERT_RULE: "SENTRY_DELETE_ORGANIZATION_ALERT_RULE",
    /**
     * Deletes a custom dashboard or tombstones (marks as deleted) a pre-built dashboard within a sentry organization.
     */
    DELETE_ORGANIZATION_DASHBOARD: "SENTRY_DELETE_ORGANIZATION_DASHBOARD",
    /**
     * Permanently removes a specific saved discover query (a configuration for exploring event data) from a sentry organization.
     */
    DELETE_ORGANIZATION_DISCOVER_QUERY: "SENTRY_DELETE_ORGANIZATION_DISCOVER_QUERY",
    /**
     * Permanently deletes a specific integration previously installed for the sentry organization.
     */
    DELETE_ORGANIZATION_INTEGRATION: "SENTRY_DELETE_ORGANIZATION_INTEGRATION",
    /**
     * Permanently deletes a specific sentry issue, identified by its id, from an organization; this operation is irreversible and idempotent.
     */
    DELETE_ORGANIZATION_ISSUE: "SENTRY_DELETE_ORGANIZATION_ISSUE",
    /**
     * Permanently removes a member from a sentry organization, revoking their access to that organization and all its associated projects.
     */
    DELETE_ORGANIZATION_MEMBER: "SENTRY_DELETE_ORGANIZATION_MEMBER",
    /**
     * Deletes a sentry cron monitor or, if `environment` is specified, only specific environments within that monitor.
     */
    DELETE_ORGANIZATION_MONITOR: "SENTRY_DELETE_ORGANIZATION_MONITOR",
    /**
     * Permanently and irreversibly removes a sentry release, including all its associated files, identified by its version from the specified organization.
     */
    DELETE_ORGANIZATION_RELEASE: "SENTRY_DELETE_ORGANIZATION_RELEASE",
    /**
     * Deletes a specific spike protection notification action for a sentry organization, where `action id` must be a valid action associated with the `organization id or slug`.
     */
    DELETE_ORG_NOTIFICATION_ACTION: "SENTRY_DELETE_ORG_NOTIFICATION_ACTION",
    /**
     * Schedules a sentry project for asynchronous deletion within a specified organization, hiding it from most public views once the process begins.
     */
    DELETE_PROJECT_BY_ID: "SENTRY_DELETE_PROJECT_BY_ID",
    /**
     * Deletes a specific service hook from a sentry project using its organization, project, and hook identifiers.
     */
    DELETE_PROJECT_HOOK: "SENTRY_DELETE_PROJECT_HOOK",
    /**
     * Permanently removes specified issues from a sentry project; if no issue ids are provided, it removes the oldest 1000 issues.
     */
    DELETE_PROJECT_ISSUES: "SENTRY_DELETE_PROJECT_ISSUES",
    /**
     * Permanently deletes a specific client key (dsn) for a project, preventing it from being used to send events to sentry.
     */
    DELETE_PROJECT_KEY: "SENTRY_DELETE_PROJECT_KEY",
    /**
     * Deletes a sentry monitor, or optionally only its specified environments, for a given project.
     */
    DELETE_PROJECT_MONITOR: "SENTRY_DELETE_PROJECT_MONITOR",
    /**
     * Permanently deletes a specific sentry session replay (a video-like reproduction of user interactions, including console logs and network activity) from the specified project and organization.
     */
    DELETE_PROJECT_REPLAY: "SENTRY_DELETE_PROJECT_REPLAY",
    /**
     * Permanently deletes a specific issue alert rule from an existing project within an existing sentry organization.
     */
    DELETE_PROJECT_RULE: "SENTRY_DELETE_PROJECT_RULE",
    /**
     * Deletes a specific custom symbol source from a project.
     */
    DELETE_PROJECT_SYMBOL_SOURCES: "SENTRY_DELETE_PROJECT_SYMBOL_SOURCES",
    /**
     * Revokes a team's access to a sentry project; this operation is idempotent.
     */
    DELETE_PROJECT_TEAM_ASSOCIATION: "SENTRY_DELETE_PROJECT_TEAM_ASSOCIATION",
    /**
     * Permanently deletes a specific file from an existing release, project, and organization; this action is idempotent.
     */
    DELETE_RELEASE_FILE: "SENTRY_DELETE_RELEASE_FILE",
    /**
     * Permanently deletes a specific build artifact (e.g., source map, application bundle) associated with a release.
     */
    DELETE_RELEASE_FILE_BY_ID: "SENTRY_DELETE_RELEASE_FILE_BY_ID",
    /**
     * Schedules a sentry team for asynchronous deletion, which releases the team's slug for reuse upon successful scheduling.
     */
    DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG: "SENTRY_DELETE_TEAM_BY_ORGANIZATION_OR_TEAM_SLUG",
    /**
     * Permanently and irreversibly deletes a specific team from a sentry organization via a scim v2 request, provided scim integration is enabled for the organization.
     */
    DELETE_TEAM_FROM_ORG_SCIM_V2: "SENTRY_DELETE_TEAM_FROM_ORG_SCIM_V2",
    /**
     * Permanently removes a sentry user's email address; if multiple emails exist, sentry's api logic (e.g., primary or previously marked) determines which is deleted.
     */
    DELETE_USER_EMAILS_BY_ID: "SENTRY_DELETE_USER_EMAILS_BY_ID",
    /**
     * Removes a scim-managed member from a sentry organization that has scim enabled, permanently revoking their access.
     */
    DELETE_USER_FROM_ORG: "SENTRY_DELETE_USER_FROM_ORG",
    /**
     * Retrieves the 'latest', 'oldest', or 'recommended' event for a sentry issue, optionally filtered by environment(s).
     */
    FETCH_ISSUE_EVENT_BY_ID: "SENTRY_FETCH_ISSUE_EVENT_BY_ID",
    /**
     * Retrieves a list of active metric alert rules for an existing sentry organization, identified by its id or slug.
     */
    FETCH_ORGANIZATION_ALERT_RULES: "SENTRY_FETCH_ORGANIZATION_ALERT_RULES",
    /**
     * Retrieves derived health statuses for release thresholds in a sentry organization for a given time range, optionally filtered by environment, project, or release; `start` and `end` times must be provided together. **`[warning]`**: this api is experimental (alpha) and subject to change!
     */
    FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES: "SENTRY_FETCH_ORGANIZATION_RELEASE_THRESHOLD_STATUSES",
    /**
     * Retrieves the total count of session replays for a specified sentry organization, filterable by time range, environment, project, and query.
     */
    FETCH_ORGANIZATION_REPLAY_COUNT: "SENTRY_FETCH_ORGANIZATION_REPLAY_COUNT",
    /**
     * Retrieves detailed information for a specific replay session by id within a sentry organization, optionally filtering time-series data using `statsperiod` or `start`/`end`, and further refining by projects, environments, or specific fields.
     */
    FETCH_ORGANIZATION_REPLAY_DETAILS: "SENTRY_FETCH_ORGANIZATION_REPLAY_DETAILS",
    /**
     * Fetches replay selectors (css selectors for session replays) for a sentry organization, filterable by various criteria; use either `statsperiod` or `start`/`end` for time range, not both.
     */
    FETCH_ORGANIZATION_REPLAY_SELECTORS: "SENTRY_FETCH_ORGANIZATION_REPLAY_SELECTORS",
    /**
     * Retrieves detailed information for a specific environment within a sentry project.
     */
    FETCH_PROJECT_ENVIRONMENT_DETAILS: "SENTRY_FETCH_PROJECT_ENVIRONMENT_DETAILS",
    /**
     * Retrieves the ownership configuration, like codeowners rules or issue owner settings, for a specified sentry project.
     */
    FETCH_PROJECT_OWNERSHIP_DETAILS: "SENTRY_FETCH_PROJECT_OWNERSHIP_DETAILS",
    /**
     * Retrieves artifact files (e.g., source maps, debug information files) for a specific release version in a sentry project; requires existing organization, project, and release version with associated files.
     */
    FETCH_PROJECT_RELEASE_FILES: "SENTRY_FETCH_PROJECT_RELEASE_FILES",
    /**
     * Fetches a list of user click interactions for a specific sentry session replay, including the clicked dom element id and timestamp.
     */
    FETCH_PROJECT_REPLAY_CLICKS: "SENTRY_FETCH_PROJECT_REPLAY_CLICKS",
    /**
     * Retrieves a specific recording segment for a sentry replay, requiring valid organization, project, replay, and segment identifiers.
     */
    FETCH_REPLAY_RECORDING_SEGMENT: "SENTRY_FETCH_REPLAY_RECORDING_SEGMENT",
    /**
     * Retrieves all activations (triggered instances) for a specific metric alert rule within a sentry organization.
     */
    GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION: "SENTRY_GET_ACTIVATION_OF_ALERT_RULE_FOR_ORGANIZATION",
    /**
     * Retrieves details for a specific integration, identified by `integration id`, installed within an existing sentry organization, identified by `organization id or slug`.
     */
    GET_INTEGRATION_DETAILS_BY_ORG: "SENTRY_GET_INTEGRATION_DETAILS_BY_ORG",
    /**
     * Retrieves a sentry organization by its id or slug; use the `detailed` parameter to optionally exclude project and team details for a more concise response.
     */
    GET_ORGANIZATION_BY_ID_OR_SLUG: "SENTRY_GET_ORGANIZATION_BY_ID_OR_SLUG",
    /**
     * Retrieves sentry organizations accessible via the current authentication, with scope varying between user (all in region) and api key (linked org only) credentials.
     */
    GET_ORGANIZATION_DETAILS: "SENTRY_GET_ORGANIZATION_DETAILS",
    /**
     * Retrieves a list of deployment environments (e.g., 'production', 'staging') for a sentry organization, optionally filtering by visibility.
     */
    GET_ORGANIZATION_ENVIRONMENTS: "SENTRY_GET_ORGANIZATION_ENVIRONMENTS",
    /**
     * Retrieves detailed information for a specific issue within a sentry organization.
     */
    GET_ORGANIZATION_ISSUE_DETAILS: "SENTRY_GET_ORGANIZATION_ISSUE_DETAILS",
    /**
     * Retrieves detailed information for a specific monitor (e.g., a cron job or scheduled task) within an organization.
     */
    GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG: "SENTRY_GET_ORGANIZATION_MONITOR_BY_ID_OR_SLUG",
    /**
     * Retrieves detailed information, including optional health data and statistics, for a specific release version within a sentry organization.
     */
    GET_ORGANIZATION_RELEASE_VERSION: "SENTRY_GET_ORGANIZATION_RELEASE_VERSION",
    /**
     * Retrieves time series data for an organization's sentry project release health sessions; note session duration data (e.g., using `avg(session.duration)`) may be incomplete after jan 12, 2023, results are capped at 10,000 data points, `statsperiod` overrides `start`/`end` timestamps, and the `interval` parameter (default/min '1h', max '1d', format like `statsperiod`) dictates time series resolution and must cleanly divide one day.
     */
    GET_ORGANIZATION_SESSIONS: "SENTRY_GET_ORGANIZATION_SESSIONS",
    /**
     * Retrieves summarized event statistics for a sentry organization, aggregated by project, allowing queries for event counts or unique occurrences over a specified time period and resolution, with filtering by project, category, and outcome.
     */
    GET_ORGANIZATION_STATS_SUMMARY: "SENTRY_GET_ORGANIZATION_STATS_SUMMARY",
    /**
     * Retrieves a list of error events for a specified project within a sentry organization, with options for pagination and detail level.
     */
    GET_PROJECT_EVENTS: "SENTRY_GET_PROJECT_EVENTS",
    /**
     * Retrieves event statistics for a specified sentry project, returning data as [timestamp, count] pairs; ensure `since` precedes `until` if both are provided.
     */
    GET_PROJECT_EVENT_STATS: "SENTRY_GET_PROJECT_EVENT_STATS",
    /**
     * Retrieves detailed information for an existing service hook, identified by `hook id`, within a specific sentry project and organization.
     */
    GET_PROJECT_HOOK: "SENTRY_GET_PROJECT_HOOK",
    /**
     * Retrieves a list of sentry projects (representing monitored applications or services), useful for discovery or selecting a project for subsequent operations.
     */
    GET_PROJECT_LIST: "SENTRY_GET_PROJECT_LIST",
    /**
     * Retrieves detailed information for a specific sentry cron monitor, provided the organization, project, and monitor exist.
     */
    GET_PROJECT_MONITOR_BY_ID: "SENTRY_GET_PROJECT_MONITOR_BY_ID",
    /**
     * Retrieves detailed information for a specific issue alert rule within a sentry project.
     */
    GET_PROJECT_RULE_DETAILS: "SENTRY_GET_PROJECT_RULE_DETAILS",
    /**
     * Retrieves scim group information for a sentry team, if scim is enabled for the organization; the 'members' list in the response is limited to 10,000 entries.
     */
    GET_SCIM_GROUP_BY_TEAM_ID: "SENTRY_GET_SCIM_GROUP_BY_TEAM_ID",
    /**
     * Retrieves a list of sentry app installations for a given organization, which must exist.
     */
    GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION: "SENTRY_GET_SENTRY_APP_INSTALLATIONS_FOR_ORGANIZATION",
    /**
     * Retrieves a list of all active members for a sentry team, excluding users with pending invitations.
     */
    GET_TEAM_MEMBERS_BY_ID_OR_SLUG: "SENTRY_GET_TEAM_MEMBERS_BY_ID_OR_SLUG",
    /**
     * Retrieves users who viewed a specific, existing session replay within a sentry project and organization.
     */
    GET_WHO_VIEWED_REPLAY_BY_PROJECT: "SENTRY_GET_WHO_VIEWED_REPLAY_BY_PROJECT",
    /**
     * Retrieves a list of custom dashboards for a sentry organization, with pagination support.
     */
    LIST_ORGANIZATION_DASHBOARDS: "SENTRY_LIST_ORGANIZATION_DASHBOARDS",
    /**
     * Lists all members, including those with pending invitations, for a sentry organization.
     */
    LIST_ORGANIZATION_MEMBERS: "SENTRY_LIST_ORGANIZATION_MEMBERS",
    /**
     * Retrieves a list of releases for an existing sentry organization, optionally filtering by a query string that matches the start of the release version.
     */
    LIST_ORGANIZATION_RELEASES: "SENTRY_LIST_ORGANIZATION_RELEASES",
    /**
     * Retrieves a list of version control repositories for a specific sentry organization, which must exist and is identified by its id or slug.
     */
    LIST_ORGANIZATION_REPOSITORIES: "SENTRY_LIST_ORGANIZATION_REPOSITORIES",
    /**
     * Retrieves a list of all teams that the authenticated user has access to within the specified sentry organization.
     */
    LIST_ORGANIZATION_USER_TEAMS: "SENTRY_LIST_ORGANIZATION_USER_TEAMS",
    /**
     * Retrieves users who have interacted with or are recognized within a specific sentry project, optionally filtered by a query.
     */
    LIST_PROJECT_USERS: "SENTRY_LIST_PROJECT_USERS",
    /**
     * Retrieves a paginated list of scim (system for cross-domain identity management) users for a sentry organization, allowing for filtering, pagination, and attribute exclusion.
     */
    LIST_SCIM_V2_ORGANIZATION_USERS: "SENTRY_LIST_SCIM_V2_ORGANIZATION_USERS",
    /**
     * Lists teams for an existing sentry organization, optionally including project details and supporting pagination via a cursor.
     */
    LIST_TEAMS_IN_ORGANIZATION: "SENTRY_LIST_TEAMS_IN_ORGANIZATION",
    /**
     * Links an external team or channel (e.g., slack, github) to an existing sentry team, using a pre-configured integration for the specified provider and its valid sentry integration id.
     */
    MANAGE_TEAM_EXTERNAL_INTEGRATIONS: "SENTRY_MANAGE_TEAM_EXTERNAL_INTEGRATIONS",
    /**
     * Updates an existing sentry monitor's properties, requiring `name` and `type` (must be 'cron job'), and optionally `slug`, `status`, `owner`, or `is muted` state for a monitor within the specified organization.
     */
    MODIFY_ORGANIZATION_MONITOR_DATA: "SENTRY_MODIFY_ORGANIZATION_MONITOR_DATA",
    /**
     * Modifies an organization's notification action, specifically for `spike-protection` triggers.
     */
    MODIFY_ORGANIZATION_NOTIFICATION_ACTION: "SENTRY_MODIFY_ORGANIZATION_NOTIFICATION_ACTION",
    /**
     * Updates settings for a sentry organization, such as name, slug, member roles, privacy, and integrations; if `avatartype` is 'upload', `avatar` (base64 image) is required.
     */
    MODIFY_ORGANIZATION_SETTINGS: "SENTRY_MODIFY_ORGANIZATION_SETTINGS",
    /**
     * Updates attributes (e.g., name, distribution) of a specific file within an existing release, identified by organization, version, and file id.
     */
    MODIFY_RELEASE_FILE_ATTRIBUTES: "SENTRY_MODIFY_RELEASE_FILE_ATTRIBUTES",
    /**
     * Performs scim patch operations (rfc 7644) to update attributes of a scim-enabled sentry team, provided scim integration is active for the organization.
     */
    PATCH_SCIM_GROUP_OPERATIONS: "SENTRY_PATCH_SCIM_GROUP_OPERATIONS",
    /**
     * Deactivates and permanently deletes a sentry organization member by using a scim patch operation to set their 'active' attribute to 'false'.
     */
    PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION: "SENTRY_PATCH_USER_ACTIVE_STATUS_IN_ORGANIZATION",
    /**
     * Adds a new custom symbol source (http, gcs, or s3) to a project for fetching debug symbols; if an `id` is provided, it must be unique for the project and not start with 'sentry:'.
     */
    POST_PROJECT_SYMBOL_SOURCES: "SENTRY_POST_PROJECT_SYMBOL_SOURCES",
    /**
     * Enables or updates spike protection for specified projects (or all projects using `['$all']`) within an existing sentry organization, to which the projects must belong.
     */
    POST_SPIKE_PROTECTION_FOR_ORGANIZATION: "SENTRY_POST_SPIKE_PROTECTION_FOR_ORGANIZATION",
    /**
     * Retrieves detailed information for a specific metric alert rule within a sentry organization.
     */
    RETRIEVE_ALERT_RULE_DETAILS: "SENTRY_RETRIEVE_ALERT_RULE_DETAILS",
    /**
     * Retrieves a list of commits for a given repository within a sentry organization.
     */
    RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO: "SENTRY_RETRIEVE_COMMITS_FOR_ORGANIZATION_REPO",
    /**
     * Retrieves files changed in commits for a specified sentry release; the release must exist and have linked commits.
     */
    RETRIEVE_COMMIT_FILES_FOR_RELEASE: "SENTRY_RETRIEVE_COMMIT_FILES_FOR_RELEASE",
    /**
     * Retrieve a list of debug information files (dsym files) for a specified sentry project, used for symbolication to display human-readable stack traces.
     */
    RETRIEVE_DSYM_FILES_FOR_PROJECT: "SENTRY_RETRIEVE_DSYM_FILES_FOR_PROJECT",
    /**
     * Resolves a sentry event id to its project and issue details within an accessible sentry organization.
     */
    RETRIEVE_EVENT_ID_FOR_ORGANIZATION: "SENTRY_RETRIEVE_EVENT_ID_FOR_ORGANIZATION",
    /**
     * Retrieves artifact files for a specific release version in a sentry organization; the organization and release must exist, and the response `data` field will contain the file information as a dictionary.
     */
    RETRIEVE_FILES_FOR_RELEASE: "SENTRY_RETRIEVE_FILES_FOR_RELEASE",
    /**
     * Retrieves events for a specified sentry `issue id`, which must be an existing issue.
     */
    RETRIEVE_ISSUE_EVENTS_BY_ID: "SENTRY_RETRIEVE_ISSUE_EVENTS_BY_ID",
    /**
     * Retrieves a list of grouping checksums (hashes) generated by sentry for a specific issue within an organization, used for understanding event aggregation.
     */
    RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION: "SENTRY_RETRIEVE_ISSUE_HASHES_FOR_ORGANIZATION",
    /**
     * Retrieves detailed information (e.g., top values, counts) for a specific tag key on an existing sentry issue; results are paginated (max 1000 values per page).
     */
    RETRIEVE_ISSUE_TAG_DETAILS: "SENTRY_RETRIEVE_ISSUE_TAG_DETAILS",
    /**
     * Retrieves the history of check-ins for a sentry monitor, providing insights into the health and performance of associated scheduled tasks.
     */
    RETRIEVE_MONITOR_CHECKINS: "SENTRY_RETRIEVE_MONITOR_CHECKINS",
    /**
     * Retrieves check-ins (pings/heartbeats of a monitored cron job or task) for a specific monitor within a sentry organization.
     */
    RETRIEVE_MONITOR_CHECKINS_BY_ORG: "SENTRY_RETRIEVE_MONITOR_CHECKINS_BY_ORG",
    /**
     * Retrieves details for a specific spike protection notification action, which defines alerts for triggered spike protection rules, within a sentry organization.
     */
    RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID: "SENTRY_RETRIEVE_NOTIFICATION_ACTION_BY_ORG_ID",
    /**
     * Fetches detailed information about a specific custom dashboard within a sentry organization.
     */
    RETRIEVE_ORGANIZATION_DASHBOARD: "SENTRY_RETRIEVE_ORGANIZATION_DASHBOARD",
    /**
     * Retrieves discover event data for a sentry organization; the `sort` field must be in the `field` list (not an equation), and `field` has a 20-item limit.
     */
    RETRIEVE_ORGANIZATION_EVENTS: "SENTRY_RETRIEVE_ORGANIZATION_EVENTS",
    /**
     * Retrieves a list of available integrations for an existing sentry organization.
     */
    RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST: "SENTRY_RETRIEVE_ORGANIZATION_INTEGRATIONS_LIST",
    /**
     * Retrieves details for a sentry organization member or pending invitee, including role, teams, and status, using their member id and the organization's id or slug.
     */
    RETRIEVE_ORGANIZATION_MEMBER: "SENTRY_RETRIEVE_ORGANIZATION_MEMBER",
    /**
     * Retrieves cron monitors for a sentry organization, including details of nested monitor environments.
     */
    RETRIEVE_ORGANIZATION_MONITORS: "SENTRY_RETRIEVE_ORGANIZATION_MONITORS",
    /**
     * Retrieves a list of sentry projects for a specified organization (which must be accessible), supporting pagination via cursor.
     */
    RETRIEVE_ORGANIZATION_PROJECTS: "SENTRY_RETRIEVE_ORGANIZATION_PROJECTS",
    /**
     * Retrieves relay usage information, primarily a list of trusted relays, for a specified sentry organization, which must have relay usage enabled.
     */
    RETRIEVE_ORGANIZATION_RELAY_USAGE: "SENTRY_RETRIEVE_ORGANIZATION_RELAY_USAGE",
    /**
     * Retrieves a list of commits for a given release version in an existing sentry organization, if the release exists.
     */
    RETRIEVE_ORGANIZATION_RELEASE_COMMITS: "SENTRY_RETRIEVE_ORGANIZATION_RELEASE_COMMITS",
    /**
     * Fetches session replays for a sentry organization; use `statsperiod` for relative time, or `start` and `end` (used together) for absolute time ranges.
     */
    RETRIEVE_ORGANIZATION_REPLAYS: "SENTRY_RETRIEVE_ORGANIZATION_REPLAYS",
    /**
     * Retrieves a paginated list of scim groups (teams) for a sentry organization; the `members` field in the response for each group will contain at most 10,000 members.
     */
    RETRIEVE_ORGANIZATION_SCIM_GROUPS: "SENTRY_RETRIEVE_ORGANIZATION_SCIM_GROUPS",
    /**
     * Retrieves sentry organization event statistics; specify time range with `statsperiod` or both `start`/`end`; note that grouping by `project` returns a sum not a time-series, and `interval` (if used) must be 1h-1d and cleanly divide 24 hours.
     */
    RETRIEVE_ORGANIZATION_STATS_V2: "SENTRY_RETRIEVE_ORGANIZATION_STATS_V2",
    /**
     * Retrieves configuration for all integrations, or a specific integration if `providerkey` is given, for an existing sentry organization.
     */
    RETRIEVE_ORG_INTEGRATION_CONFIG: "SENTRY_RETRIEVE_ORG_INTEGRATION_CONFIG",
    /**
     * Retrieves a list of environments for an existing project within a sentry organization.
     */
    RETRIEVE_PROJECT_ENVIRONMENTS: "SENTRY_RETRIEVE_PROJECT_ENVIRONMENTS",
    /**
     * Retrieves detailed information for a specific sentry event using its id, organization identifier, and project identifier.
     */
    RETRIEVE_PROJECT_EVENT_BY_ID: "SENTRY_RETRIEVE_PROJECT_EVENT_BY_ID",
    /**
     * Retrieves a sentry project's current data filtering settings, used to ignore events from sources like localhost, web crawlers, or legacy browsers.
     */
    RETRIEVE_PROJECT_FILTER_DATA: "SENTRY_RETRIEVE_PROJECT_FILTER_DATA",
    /**
     * Return a list of service hooks (webhooks) bound to a sentry project, used to send notifications to external services upon event occurrences.
     */
    RETRIEVE_PROJECT_HOOKS: "SENTRY_RETRIEVE_PROJECT_HOOKS",
    /**
     * Retrieves a list of issues for a sentry project, defaulting to unresolved issues unless an empty `query` string is provided or specific `hashes` are used.
     */
    RETRIEVE_PROJECT_ISSUES_LIST: "SENTRY_RETRIEVE_PROJECT_ISSUES_LIST",
    /**
     * Retrieves a list of client keys (dsns), used by sentry sdks to send events, for a specified project within an organization.
     */
    RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT: "SENTRY_RETRIEVE_PROJECT_KEYS_BY_ORG_AND_PROJECT",
    /**
     * Retrieves details of a specific client key (dsn) for a sentry project, which is used by sentry sdks to send event data.
     */
    RETRIEVE_PROJECT_KEY_DETAILS: "SENTRY_RETRIEVE_PROJECT_KEY_DETAILS",
    /**
     * Retrieves active organization members belonging to any team assigned to the specified sentry project.
     */
    RETRIEVE_PROJECT_MEMBERS_LIST: "SENTRY_RETRIEVE_PROJECT_MEMBERS_LIST",
    /**
     * Retrieves metadata (default) or raw content (if `download` is true) for a specific file within a sentry project's release version.
     */
    RETRIEVE_PROJECT_RELEASE_FILE_DETAILS: "SENTRY_RETRIEVE_PROJECT_RELEASE_FILE_DETAILS",
    /**
     * Retrieves a list of active issue alert rules associated with a specific project within an organization.
     */
    RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID: "SENTRY_RETRIEVE_PROJECT_RULES_BY_ORG_AND_PROJECT_ID",
    /**
     * Retrieves custom symbol sources for a sentry project, either listing all or fetching a specific one if its id is provided.
     */
    RETRIEVE_PROJECT_SYMBOL_SOURCES: "SENTRY_RETRIEVE_PROJECT_SYMBOL_SOURCES",
    /**
     * Retrieves up to 1000 unique values for a specified tag key that has been recorded for events within a sentry project.
     */
    RETRIEVE_PROJECT_TAG_VALUES: "SENTRY_RETRIEVE_PROJECT_TAG_VALUES",
    /**
     * Retrieves a list of teams with explicit access to a specific project within a sentry organization.
     */
    RETRIEVE_PROJECT_TEAMS: "SENTRY_RETRIEVE_PROJECT_TEAMS",
    /**
     * Retrieves a list of commits associated with a specific release version within a sentry project.
     */
    RETRIEVE_RELEASE_COMMITS: "SENTRY_RETRIEVE_RELEASE_COMMITS",
    /**
     * Retrieves a list of all deployment records for a specific release version in an organization, detailing each deployment's environment and timestamps.
     */
    RETRIEVE_RELEASE_DEPLOYMENTS: "SENTRY_RETRIEVE_RELEASE_DEPLOYMENTS",
    /**
     * Retrieves a specific file's content or its metadata from a sentry release, using the `download` parameter to choose between raw content or json metadata.
     */
    RETRIEVE_RELEASE_FILE_BY_ID: "SENTRY_RETRIEVE_RELEASE_FILE_BY_ID",
    /**
     * Retrieves a paginated list of recording segments for a specific sentry replay, used for reconstructing or analyzing the replay.
     */
    RETRIEVE_REPLAY_RECORDING_SEGMENTS: "SENTRY_RETRIEVE_REPLAY_RECORDING_SEGMENTS",
    /**
     * Retrieves a list of saved discover queries for a sentry organization, optionally filtered and sorted.
     */
    RETRIEVE_SAVED_DISCOVER_QUERIES: "SENTRY_RETRIEVE_SAVED_DISCOVER_QUERIES",
    /**
     * Retrieves a specific saved discover query (a predefined set of filters and conditions for exploring event data) for a sentry organization.
     */
    RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION: "SENTRY_RETRIEVE_SAVED_DISCOVER_QUERY_FOR_ORGANIZATION",
    /**
     * Resolves an existing sentry short id to its issue details within a valid sentry organization.
     */
    RETRIEVE_SHORT_ID_FOR_ORGANIZATION: "SENTRY_RETRIEVE_SHORT_ID_FOR_ORGANIZATION",
    /**
     * Retrieves detailed debug information for diagnosing source map processing issues for a specific sentry event, stack trace frame, and exception index.
     */
    RETRIEVE_SOURCE_MAP_DEBUG_EVENT: "SENTRY_RETRIEVE_SOURCE_MAP_DEBUG_EVENT",
    /**
     * Retrieves detailed information for an existing sentry team within its organization, optionally expanding related data (e.g., projects) or collapsing sections (e.g., organization details).
     */
    RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG: "SENTRY_RETRIEVE_TEAM_INFO_VIA_ORGANIZATION_ID_OR_SLUG",
    /**
     * Retrieves a list of sentry projects for a specific team within an organization, supporting pagination via a cursor.
     */
    RETRIEVE_TEAM_PROJECTS: "SENTRY_RETRIEVE_TEAM_PROJECTS",
    /**
     * Retrieves a list of email addresses for an existing sentry user, identified by their `user id`.
     */
    RETRIEVE_USER_EMAIL_INFORMATION: "SENTRY_RETRIEVE_USER_EMAIL_INFORMATION",
    /**
     * Retrieves user feedback for a project from sentry's older 'user reports' system, excluding feedback from the modern 'user feedback widget'.
     */
    RETRIEVE_USER_FEEDBACK_FOR_PROJECT: "SENTRY_RETRIEVE_USER_FEEDBACK_FOR_PROJECT",
    /**
     * Retrieves an individual sentry organization member's details accessible via scim v2 using their member id, noting that `firstname` and `lastname` in the response will be 'n/a'.
     */
    RETRIEVE_USER_VIA_SCIM_API: "SENTRY_RETRIEVE_USER_VIA_SCIM_API",
    /**
     * Saves a new discover query with a unique name for a sentry organization, allowing reuse of search criteria for analyzing event data (errors, transactions) across specified projects and environments.
     */
    SAVE_ORGANIZATION_DISCOVER_QUERY: "SENTRY_SAVE_ORGANIZATION_DISCOVER_QUERY",
    /**
     * Retrieves a list of distinct values for a specified tag key associated with an existing sentry issue, useful for understanding tag manifestations like browser versions or affected users.
     */
    SENTRY_FETCH_TAG_VALUES_FOR_ISSUE: "SENTRY_SENTRY_FETCH_TAG_VALUES_FOR_ISSUE",
    /**
     * Creates a sentry notification action for 'spike-protection' triggers, requiring `integration id` if `service type` is 'slack', 'pagerduty', or 'opsgenie', and `target identifier`/`target display` if `service type` is 'slack' or 'opsgenie'.
     */
    SUBMIT_NOTIFICATION_ACTION_API_DATA: "SENTRY_SUBMIT_NOTIFICATION_ACTION_API_DATA",
    /**
     * Deprecated: submits user feedback for a sentry project event (use if newer sentry feedback tools are unavailable); submit within 30 mins of event, overwritable within 5 mins.
     */
    SUBMIT_PROJECT_USER_FEEDBACK: "SENTRY_SUBMIT_PROJECT_USER_FEEDBACK",
    /**
     * Changes a member's role within a sentry team, ensuring the member is already part of the team and that any organization-level role restrictions are respected.
     */
    SWITCH_TEAM_ROLE_FOR_MEMBER: "SENTRY_SWITCH_TEAM_ROLE_FOR_MEMBER",
    /**
     * Updates the status or configuration of a specific inbound data filter for a sentry project; use `active` for most filters, or `subfilters` if `filter id` is `legacy-browser`.
     */
    TOGGLE_PROJECT_FILTER_STATUS: "SENTRY_TOGGLE_PROJECT_FILTER_STATUS",
    /**
     * Updates the visibility of a specific environment within a sentry project.
     */
    UPDATE_ENVIRONMENT_VISIBILITY: "SENTRY_UPDATE_ENVIRONMENT_VISIBILITY",
    /**
     * Updates an existing external team integration's display name, provider, sentry integration id, or external id; the `integration id` must match a valid, configured sentry integration for the organization and the specified `provider`.
     */
    UPDATE_EXTERNAL_TEAM_INTEGRATION: "SENTRY_UPDATE_EXTERNAL_TEAM_INTEGRATION",
    /**
     * Updates attributes of an existing external user linkage (identified by `external user id`) within a sentry organization (specified by `organization id or slug`).
     */
    UPDATE_EXTERNAL_USER_FOR_ORGANIZATION: "SENTRY_UPDATE_EXTERNAL_USER_FOR_ORGANIZATION",
    /**
     * Updates specified attributes of an existing sentry issue within a sentry organization, leaving other attributes unchanged.
     */
    UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION: "SENTRY_UPDATE_ISSUE_ATTRIBUTES_IN_ORGANIZATION",
    /**
     * Replaces an existing sentry metric alert rule's configuration; fields not provided in the request are removed or reset.
     */
    UPDATE_ORGANIZATION_ALERT_RULES: "SENTRY_UPDATE_ORGANIZATION_ALERT_RULES",
    /**
     * Updates an existing custom dashboard, allowing modifications to its title, widgets, and data filters; providing `widgets`, `projects`, `environment`, `period`, `start`, `end`, or `filters` will overwrite existing settings for those fields.
     */
    UPDATE_ORGANIZATION_DASHBOARD: "SENTRY_UPDATE_ORGANIZATION_DASHBOARD",
    /**
     * Updates a sentry organization member's organization-level role (`orgrole`) and/or their team roles (`teamroles`), ensuring the initiator has permissions equivalent to both the member's current and intended new `orgrole` if `orgrole` is being modified.
     */
    UPDATE_ORGANIZATION_MEMBER_ROLE: "SENTRY_UPDATE_ORGANIZATION_MEMBER_ROLE",
    /**
     * Updates a sentry project's settings (e.g., name, slug, platform, bookmark status); `isbookmarked` can be updated with `project:read` permission, other fields typically require `project:write` or `project:admin` permissions.
     */
    UPDATE_PROJECT_DETAILS: "SENTRY_UPDATE_PROJECT_DETAILS",
    /**
     * Bulk update attributes of issues in a sentry project, targeting issues by a list of ids or by a query status (which implies updating all matching issues if ids are omitted).
     */
    UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS: "SENTRY_UPDATE_PROJECT_ISSUE_STATUS_AND_DETAILS",
    /**
     * Updates configuration settings (e.g., name, status, rate limits, sdk options) for an existing sentry client key (dsn), identified by `key id`, within a specified `project id or slug` and `organization id or slug`.
     */
    UPDATE_PROJECT_KEY_CONFIGURATION: "SENTRY_UPDATE_PROJECT_KEY_CONFIGURATION",
    /**
     * Updates an existing sentry monitor (used for tracking recurring tasks/cron jobs) within a specific organization and project, allowing modification of its properties such as name, slug, type, status, owner, and muting status.
     */
    UPDATE_PROJECT_MONITOR: "SENTRY_UPDATE_PROJECT_MONITOR",
    /**
     * Updates the ownership configuration settings (raw rules, fallthrough, auto-assignment, codeowners sync) for a sentry project; omitted attributes retain their current values.
     */
    UPDATE_PROJECT_OWNERSHIP_SETTINGS: "SENTRY_UPDATE_PROJECT_OWNERSHIP_SETTINGS",
    /**
     * Updates the name (path) or distribution identifier of a specific file within an existing project release in sentry.
     */
    UPDATE_PROJECT_RELEASE_FILE_DETAILS: "SENTRY_UPDATE_PROJECT_RELEASE_FILE_DETAILS",
    /**
     * Updates an existing sentry project issue alert rule by `rule id`, completely overwriting it; all rule fields must be provided in the request, as omitted fields may be cleared or reset to defaults.
     */
    UPDATE_PROJECT_RULE_BY_ID: "SENTRY_UPDATE_PROJECT_RULE_BY_ID",
    /**
     * Updates an existing sentry release's details for an organization, including its reference, url, release date, associated commits, or repository references.
     */
    UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION: "SENTRY_UPDATE_RELEASE_DETAILS_FOR_ORGANIZATION",
    /**
     * Updates an existing discover saved query for a sentry organization.
     */
    UPDATE_SAVED_QUERY_FOR_ORGANIZATION: "SENTRY_UPDATE_SAVED_QUERY_FOR_ORGANIZATION",
    /**
     * Updates an existing custom symbol source's settings in a sentry project, such as its type, name, layout preferences, and connection parameters.
     */
    UPDATE_SYMBOL_SOURCE_SETTINGS: "SENTRY_UPDATE_SYMBOL_SOURCE_SETTINGS",
    /**
     * Updates the slug for an existing team within a sentry organization.
     */
    UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID: "SENTRY_UPDATE_TEAM_INFORMATION_BY_ORGANIZATION_ID",
    /**
     * Updates the primary email for a sentry user; the new email must be valid and not already in use as a primary email by another sentry account.
     */
    UPDATE_USER_EMAIL: "SENTRY_UPDATE_USER_EMAIL",
    /**
     * Updates an existing sentry service hook's target url and subscribed event types for a given project and organization.
     */
    UPDATE_WEBHOOK_CONFIGURATION_XP: "SENTRY_UPDATE_WEBHOOK_CONFIGURATION_XP",
    /**
     * Uploads a dsym (debug symbols) zip archive, containing an apple .dsym folder, to the specified sentry project for symbolicating crash reports from apple platforms.
     */
    UPLOAD_DSYMS_FILE_TO_PROJECT: "SENTRY_UPLOAD_DSYMS_FILE_TO_PROJECT",
    /**
     * Uploads a file to a sentry project release, for an existing organization, project, and version; uses `multipart/form-data` and the region-specific sentry domain.
     */
    UPLOAD_FILE_TO_PROJECT_RELEASE: "SENTRY_UPLOAD_FILE_TO_PROJECT_RELEASE",
    /**
     * Uploads a new file, such as a source map or debug information, to an existing release version in a sentry organization.
     */
    UPLOAD_RELEASE_FILE_TO_ORGANIZATION: "SENTRY_UPLOAD_RELEASE_FILE_TO_ORGANIZATION",
    /**
     * Retrieves spike protection notification actions for a sentry organization, filterable by project ids or slugs (slugs take precedence); if `triggertype` is used, it must be 'spike-protection'.
     */
    VIEW_ORGANIZATION_NOTIFICATION_ACTIONS: "SENTRY_VIEW_ORGANIZATION_NOTIFICATION_ACTIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENTRY".
 */
export type SENTRY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENTRY".
 */
export type SENTRY_TRIGGER_EVENTS = {}
