// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_ESCALATION_POLICY tool input.
 */
type BETTER_STACK_CREATE_ESCALATION_POLICY_INPUT = {
  /**
   * Name
   * @description Name of the escalation policy
   */
  name?: string;
  /**
   * Repeat Count
   * @description How many times to repeat the policy if unacknowledged
   * @default null
   */
  repeat_count: number | null;
  /**
   * Repeat Delay
   * @description Seconds to wait between policy repetitions
   * @default null
   */
  repeat_delay: number | null;
  /**
   * Steps
   * @description Ordered list of escalation policy steps
   */
  steps?: {
      /**
       * Days
       * @description Days for time-based branching rules
       * @default null
       */
      days: string[] | null;
      /**
       * Instructions Comment
       * @description Instructions comment for instructions step
       * @default null
       */
      instructions_comment: string | null;
      /**
       * Instructions Reminder Enabled
       * @description Enable periodic reminders until tasks checked
       * @default null
       */
      instructions_reminder_enabled: boolean | null;
      /**
       * Instructions Reminder Interval Hours
       * @description Interval hours for instruction reminders
       * @default null
       */
      instructions_reminder_interval_hours: number | null;
      /**
       * Metadata Key
       * @description Metadata key for metadata-based branching
       * @default null
       */
      metadata_key: string | null;
      /**
       * Metadata Values
       * @description Metadata values for metadata-based branching
       * @default null
       */
      metadata_values: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Policy Id
       * @description Policy ID to execute if branching rule matches
       * @default null
       */
      policy_id: number | null;
      /**
       * Policy Metadata Key
       * @description Metadata key to fetch policy ID dynamically
       * @default null
       */
      policy_metadata_key: string | null;
      /**
       * Step Members
       * @description List of members to notify when type is escalation
       * @default null
       */
      step_members: {
          /**
           * Email
           * @description Email for user member type; auto-inferred ID when provided
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Resource ID for member types that require an explicit ID
           * @default null
           */
          id: string | null;
          /**
           * Type
           * @description The type of member to notify during an incident
           * @enum {string}
           */
          type: "current_on_call" | "entire_team" | "all_slack_integrations" | "all_microsoft_teams_integrations" | "all_zapier_integrations" | "all_webhook_integrations" | "all_splunk_on_call_integrations" | "user" | "webhook" | "slack_integration" | "microsoft_teams_integration" | "zapier_webhook";
      }[] | null;
      /**
       * Time From
       * @description Start time for branching in HH:MM
       * @default null
       */
      time_from: string | null;
      /**
       * Time To
       * @description End time for branching in HH:MM
       * @default null
       */
      time_to: string | null;
      /**
       * Timezone
       * @description Timezone for time-based branching rules
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description The type of this escalation policy step
       * @enum {string}
       */
      type: "escalation" | "time_branching" | "metadata_branching" | "instructions";
      /**
       * Urgency Id
       * @description Severity ID to use when type is escalation
       * @default null
       */
      urgency_id: number | null;
      /**
       * Wait Before
       * @description Seconds to wait before executing this step
       * @default null
       */
      wait_before: number | null;
      /**
       * Wait Until Time
       * @description Execute this step at the specified time in HH:MM
       * @default null
       */
      wait_until_time: string | null;
      /**
       * Wait Until Timezone
       * @description Timezone for interpreting wait_until_time
       * @default null
       */
      wait_until_timezone: string | null;
  }[];
  /**
   * Team Name
   * @description Team owning the policy (required with global API token)
   * @default null
   */
  team_name: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_ESCALATION_POLICY tool output.
 */
type BETTER_STACK_CREATE_ESCALATION_POLICY_OUTPUT = {
  /**
   * Data
   * @description Response data payload
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the created policy
       */
      attributes: {
          /**
           * Incident Token
           * @description Incident token for manual reporting
           */
          incident_token: string;
          /**
           * Name
           * @description Name of the policy
           */
          name: string;
          /**
           * Policy Group Id
           * @description Policy group this policy belongs to
           * @default null
           */
          policy_group_id: number | null;
          /**
           * Repeat Count
           * @description Repeat count of the policy
           */
          repeat_count: number;
          /**
           * Repeat Delay
           * @description Delay in seconds between repeats
           */
          repeat_delay: number;
          /**
           * Steps
           * @description List of policy steps returned
           */
          steps: {
              /**
               * Days
               * @description Days for time-based branching rules
               * @default null
               */
              days: string[] | null;
              /**
               * Instructions Comment
               * @description Instructions comment for instructions step
               * @default null
               */
              instructions_comment: string | null;
              /**
               * Instructions Reminder Enabled
               * @description Enable periodic reminders until tasks checked
               * @default null
               */
              instructions_reminder_enabled: boolean | null;
              /**
               * Instructions Reminder Interval Hours
               * @description Interval hours for instruction reminders
               * @default null
               */
              instructions_reminder_interval_hours: number | null;
              /**
               * Metadata Key
               * @description Metadata key for metadata-based branching
               * @default null
               */
              metadata_key: string | null;
              /**
               * Metadata Values
               * @description Metadata values for metadata-based branching
               * @default null
               */
              metadata_values: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Policy Id
               * @description Policy ID to execute if branching rule matches
               * @default null
               */
              policy_id: number | null;
              /**
               * Policy Metadata Key
               * @description Metadata key to fetch policy ID dynamically
               * @default null
               */
              policy_metadata_key: string | null;
              /**
               * Step Members
               * @description List of members to notify when type is escalation
               * @default null
               */
              step_members: {
                  /**
                   * Email
                   * @description Email for user member type; auto-inferred ID when provided
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Id
                   * @description Resource ID for member types that require an explicit ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Type
                   * @description The type of member to notify during an incident
                   * @enum {string}
                   */
                  type: "current_on_call" | "entire_team" | "all_slack_integrations" | "all_microsoft_teams_integrations" | "all_zapier_integrations" | "all_webhook_integrations" | "all_splunk_on_call_integrations" | "user" | "webhook" | "slack_integration" | "microsoft_teams_integration" | "zapier_webhook";
              }[] | null;
              /**
               * Time From
               * @description Start time for branching in HH:MM
               * @default null
               */
              time_from: string | null;
              /**
               * Time To
               * @description End time for branching in HH:MM
               * @default null
               */
              time_to: string | null;
              /**
               * Timezone
               * @description Timezone for time-based branching rules
               * @default null
               */
              timezone: string | null;
              /**
               * Type
               * @description The type of this escalation policy step
               * @enum {string}
               */
              type: "escalation" | "time_branching" | "metadata_branching" | "instructions";
              /**
               * Urgency Id
               * @description Severity ID to use when type is escalation
               * @default null
               */
              urgency_id: number | null;
              /**
               * Wait Before
               * @description Seconds to wait before executing this step
               * @default null
               */
              wait_before: number | null;
              /**
               * Wait Until Time
               * @description Execute this step at the specified time in HH:MM
               * @default null
               */
              wait_until_time: string | null;
              /**
               * Wait Until Timezone
               * @description Timezone for interpreting wait_until_time
               * @default null
               */
              wait_until_timezone: string | null;
          }[];
          /**
           * Team Name
           * @description Name of the team owning the policy
           */
          team_name: string;
      };
      /**
       * Id
       * @description Escalation policy ID
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'policy'
       * @constant
       */
      type: "policy";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_HEARTBEAT_GROUP tool input.
 */
type BETTER_STACK_CREATE_HEARTBEAT_GROUP_INPUT = {
  /**
   * Name
   * @description Name of the group visible in the dashboard.
   */
  name?: string;
  /**
   * Paused
   * @description Set to true to pause monitoring for all existing heartbeats in the group; false (default) to resume monitoring.
   * @default false
   */
  paused: boolean | null;
  /**
   * Sort Index
   * @description Zero-based index to control sort order of heartbeat groups.
   * @default null
   */
  sort_index: number | null;
  /**
   * Team Name
   * @description Team which should own the resource. Required when using a global API token.
   * @default null
   */
  team_name: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_HEARTBEAT_GROUP tool output.
 */
type BETTER_STACK_CREATE_HEARTBEAT_GROUP_OUTPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Created At
           * @description ISO8601 timestamp when group was created.
           */
          created_at: string;
          /**
           * Name
           * @description Heartbeat group name.
           */
          name: string;
          /**
           * Paused
           * @description Whether monitoring is paused for this group.
           */
          paused: boolean;
          /**
           * Sort Index
           * @description Sort index of the group.
           */
          sort_index: number;
          /**
           * Team Name
           * @description Name of the team owning this group.
           */
          team_name: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when group was last updated.
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the heartbeat group.
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'heartbeat_group'.
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_OUTGOING_WEBHOOK tool input.
 */
type BETTER_STACK_CREATE_OUTGOING_WEBHOOK_INPUT = {
  /**
   * CustomWebhookTemplateAttributes
   * @description Custom webhook template attributes such as HTTP method, headers, and body.
   * @default null
   */
  custom_webhook_template_attributes: {
      /**
       * Auth Password
       * @description The password to use for basic authentication.
       * @default null
       */
      auth_password: string | null;
      /**
       * Auth Username
       * @description The username to use for basic authentication.
       * @default null
       */
      auth_username: string | null;
      /**
       * Body Template
       * @description The body payload to send with the webhook. Can be a JSON object or stringified JSON.
       * @default null
       */
      body_template: string | null;
      /**
       * Headers Template
       * @description Custom headers to include with the webhook.
       * @default null
       */
      headers_template: {
          /**
           * Name
           * @description Header name
           */
          name: string;
          /**
           * Value
           * @description Header value
           */
          value: string;
      }[] | null;
      /**
       * Http Method
       * @description The HTTP method to use when sending the webhook. Possible values are 'get', 'post', 'put', 'patch', 'head'.
       * @default null
       * @enum {string|null}
       */
      http_method: "get" | "post" | "put" | "patch" | "head" | null;
  } | null;
  /**
   * Name
   * @description The name of the outgoing webhook integration.
   */
  name?: string;
  /**
   * On Incident Acknowledged
   * @description Trigger when an incident is acknowledged (only if trigger_type is 'incident_change').
   * @default null
   */
  on_incident_acknowledged: boolean | null;
  /**
   * On Incident Resolved
   * @description Trigger when an incident is resolved (only if trigger_type is 'incident_change').
   * @default null
   */
  on_incident_resolved: boolean | null;
  /**
   * On Incident Started
   * @description Trigger when an incident starts (only if trigger_type is 'incident_change').
   * @default null
   */
  on_incident_started: boolean | null;
  /**
   * Team Name
   * @description Required if using a global API token to specify the team which should own the resource.
   * @default null
   */
  team_name: string | null;
  /**
   * Trigger Type
   * @description The type of event that triggers the webhook.
   * @enum {string}
   */
  trigger_type?: "on_call_change" | "incident_change" | "monitor_change";
  /**
   * Url
   * @description The endpoint URL of the outgoing webhook integration.
   */
  url?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_OUTGOING_WEBHOOK tool output.
 */
type BETTER_STACK_CREATE_OUTGOING_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /** Name */
          name: string;
          /**
           * Team Name
           * @default null
           */
          team_name: string | null;
          /** Trigger Type */
          trigger_type: string;
          /** Url */
          url: string;
      };
      /** Id */
      id: string;
      /** Relationships */
      relationships: {
          /** Custom Webhook Template */
          custom_webhook_template: {
              /**
               * Data
               * @description Placeholder for custom webhook template relationship.
               */
              data?: null;
          };
      };
      /** Type */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Included
   * @description Included related resources, currently empty.
   */
  included?: {
      [key: string]: unknown;
  }[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_SOURCE_GROUP tool input.
 */
type BETTER_STACK_CREATE_SOURCE_GROUP_INPUT = {
  /**
   * Name
   * @description The name of the group that you can see in the dashboard.
   */
  name?: string;
  /**
   * Sort Index
   * @description Set sort_index to specify how to sort your source groups. Must be non-negative.
   * @default null
   */
  sort_index: number | null;
  /**
   * Team Name
   * @description Required if using a global API token to specify the team which should own the resource.
   * @default null
   */
  team_name: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_CREATE_SOURCE_GROUP tool output.
 */
type BETTER_STACK_CREATE_SOURCE_GROUP_OUTPUT = {
  /**
   * Data
   * @description The newly created source group resource.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the created source group.
       */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the source group was created.
           */
          created_at: string;
          /**
           * Name
           * @description The display name of the source group.
           */
          name: string;
          /**
           * Sort Index
           * @description The sort index of the source group.
           * @default null
           */
          sort_index: number | null;
          /**
           * Team Name
           * @description The name of the team that owns the resource.
           */
          team_name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the source group was last updated.
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the source group.
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'source_group'.
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_DELETE_ESCALATION_POLICY tool input.
 */
type BETTER_STACK_DELETE_ESCALATION_POLICY_INPUT = {
  /**
   * Policy Id
   * @description The ID of the escalation policy you want to delete
   */
  policy_id?: number;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_DELETE_ESCALATION_POLICY tool output.
 */
type BETTER_STACK_DELETE_ESCALATION_POLICY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_DELETE_SOURCE_GROUP tool input.
 */
type BETTER_STACK_DELETE_SOURCE_GROUP_INPUT = {
  /**
   * Source Group Id
   * @description The ID of the source group to delete.
   */
  source_group_id?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_DELETE_SOURCE_GROUP tool output.
 */
type BETTER_STACK_DELETE_SOURCE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_HEARTBEAT tool input.
 */
type BETTER_STACK_GET_HEARTBEAT_INPUT = {
  /**
   * Heartbeat Id
   * @description The ID of the requested heartbeat
   */
  heartbeat_id?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_HEARTBEAT tool output.
 */
type BETTER_STACK_GET_HEARTBEAT_OUTPUT = {
  /**
   * Data
   * @description The heartbeat object
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a heartbeat resource.
       */
      attributes: {
          /**
           * Call
           * @description Whether call notifications are enabled
           */
          call: boolean;
          /**
           * Created At
           * @description ISO8601 timestamp of creation
           */
          created_at: string;
          /**
           * Email
           * @description Whether email notifications are enabled
           */
          email: boolean;
          /**
           * Grace
           * @description Allowed grace period in seconds before 'down'
           */
          grace: number;
          /**
           * Heartbeat Group Id
           * @description ID of the heartbeat group, if assigned
           * @default null
           */
          heartbeat_group_id: string | null;
          /**
           * Maintenance Days
           * @description Days on which maintenance applies
           * @default null
           */
          maintenance_days: string[] | null;
          /**
           * Maintenance From
           * @description Daily maintenance window start (HH:MM:SS)
           * @default null
           */
          maintenance_from: string | null;
          /**
           * Maintenance Timezone
           * @description Timezone for maintenance windows
           * @default null
           */
          maintenance_timezone: string | null;
          /**
           * Maintenance To
           * @description Daily maintenance window end (HH:MM:SS)
           * @default null
           */
          maintenance_to: string | null;
          /**
           * Name
           * @description Name of the heartbeat
           */
          name: string;
          /**
           * Paused At
           * @description ISO8601 timestamp when the heartbeat was paused
           * @default null
           */
          paused_at: string | null;
          /**
           * Period
           * @description Heartbeat check period in seconds
           */
          period: number;
          /**
           * Push
           * @description Whether push notifications are enabled
           */
          push: boolean;
          /**
           * Sms
           * @description Whether SMS notifications are enabled
           */
          sms: boolean;
          /**
           * Sort Index
           * @description Sorting index for display order
           * @default null
           */
          sort_index: number | null;
          /**
           * Status
           * @description Current status of the heartbeat; 'paused', 'pending', 'up', or 'down'
           * @enum {string}
           */
          status: "paused" | "pending" | "up" | "down";
          /**
           * Team Name
           * @description Name of the target team
           */
          team_name: string;
          /**
           * Team Wait
           * @description Time in seconds before escalating within the team
           */
          team_wait: number;
          /**
           * Updated At
           * @description ISO8601 timestamp of last update
           */
          updated_at: string;
          /**
           * Url
           * @description Public URL to send heartbeat requests to
           */
          url: string;
      };
      /**
       * Id
       * @description Unique identifier of the heartbeat
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'heartbeat'
       * @constant
       */
      type: "heartbeat";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_HEARTBEAT_AVAILABILITY tool input.
 */
type BETTER_STACK_GET_HEARTBEAT_AVAILABILITY_INPUT = {
  /**
   * From Date
   * @description Start date (inclusive) for the summary in YYYY-MM-DD format
   * @default null
   */
  from_date: string | null;
  /**
   * Heartbeat Id
   * @description ID of the heartbeat to retrieve availability for
   */
  heartbeat_id?: string;
  /**
   * To Date
   * @description End date (inclusive) for the summary in YYYY-MM-DD format
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_HEARTBEAT_AVAILABILITY tool output.
 */
type BETTER_STACK_GET_HEARTBEAT_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Availability summary data
   */
  data?: {
      /**
       * Attributes
       * @description Availability metrics of a heartbeat.
       */
      attributes: {
          /**
           * Availability
           * @description Availability percentage
           */
          availability: number;
          /**
           * Average Incident
           * @description Average incident duration in seconds
           */
          average_incident: number;
          /**
           * Longest Incident
           * @description Longest incident duration in seconds
           */
          longest_incident: number;
          /**
           * Number Of Incidents
           * @description Number of downtime incidents
           */
          number_of_incidents: number;
          /**
           * Total Downtime
           * @description Total downtime in seconds
           */
          total_downtime: number;
      };
      /**
       * Id
       * @description Unique identifier of the availability summary
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'heartbeat_availability'
       * @constant
       */
      type: "heartbeat_availability";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_MONITOR tool input.
 */
type BETTER_STACK_GET_MONITOR_INPUT = {
  /**
   * Monitor Id
   * @description The ID of the monitor to retrieve
   */
  monitor_id?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_MONITOR tool output.
 */
type BETTER_STACK_GET_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Monitor object containing its details
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a monitor.
       */
      attributes: {
          /**
           * Call
           * @description Whether call notifications are enabled
           */
          call: boolean;
          /**
           * Check Frequency
           * @description Check interval in seconds
           */
          check_frequency: number;
          /**
           * Confirmation Period
           * @description Time to confirm recovery in seconds
           */
          confirmation_period: number;
          /**
           * Created At
           * @description Timestamp when the monitor was created
           */
          created_at: string;
          /**
           * Domain Expiration
           * @description Days until domain expiration
           */
          domain_expiration: number;
          /**
           * Email
           * @description Whether email notifications are enabled
           */
          email: boolean;
          /**
           * Environment Variables
           * @description Environment variables for the check
           */
          environment_variables: {
              [key: string]: string;
          };
          /**
           * Expected Status Codes
           * @description Expected HTTP status codes for a successful check
           */
          expected_status_codes: number[];
          /**
           * Expiration Policy Id
           * @description ID of the expiration policy, if set
           * @default null
           */
          expiration_policy_id: string | null;
          /**
           * Http Method
           * @description HTTP method used for the check
           */
          http_method: string;
          /**
           * Last Checked At
           * @description Timestamp of last check in ISO 8601 format
           */
          last_checked_at: string;
          /**
           * Maintenance Days
           * @description Days of week for maintenance, e.g., ['mon','tue']
           */
          maintenance_days: string[];
          /**
           * Maintenance From
           * @description Start time of maintenance window, HH:MM:SS
           */
          maintenance_from: string;
          /**
           * Maintenance Timezone
           * @description Time zone of maintenance window
           */
          maintenance_timezone: string;
          /**
           * Maintenance To
           * @description End time of maintenance window, HH:MM:SS
           */
          maintenance_to: string;
          /**
           * Monitor Group Id
           * @description ID of the monitor group
           */
          monitor_group_id: string;
          /**
           * Monitor Type
           * @description Type of monitor, e.g. 'keyword', 'http'
           */
          monitor_type: string;
          /**
           * Paused At
           * @description Timestamp when the monitor was paused, if paused
           * @default null
           */
          paused_at: string | null;
          /**
           * Policy Id
           * @description ID of the escalation policy, if set
           * @default null
           */
          policy_id: string | null;
          /**
           * Port
           * @description Port used for the check, if applicable
           * @default null
           */
          port: number | null;
          /**
           * Pronounceable Name
           * @description Human-friendly name of the monitor
           */
          pronounceable_name: string;
          /**
           * Push
           * @description Whether push notifications are enabled
           */
          push: boolean;
          /**
           * Recovery Period
           * @description Recovery period after a failure in seconds
           */
          recovery_period: number;
          /**
           * Regions
           * @description List of regions used for monitoring
           */
          regions: string[];
          /**
           * Request Body
           * @description Body content sent with the check, if any
           */
          request_body: string;
          /**
           * Request Headers
           * @description List of HTTP headers sent with the check
           */
          request_headers: {
              /**
               * Id
               * @description Unique ID of the header
               */
              id: string;
              /**
               * Name
               * @description Name of the header
               */
              name: string;
              /**
               * Value
               * @description Value of the header
               */
              value: string;
          }[];
          /**
           * Request Timeout
           * @description Timeout for the check request in seconds
           */
          request_timeout: number;
          /**
           * Required Keyword
           * @description Keyword required to be present for keyword monitors
           * @default null
           */
          required_keyword: string | null;
          /**
           * Sms
           * @description Whether SMS notifications are enabled
           */
          sms: boolean;
          /**
           * Ssl Expiration
           * @description Days until SSL certificate expiration
           */
          ssl_expiration: number;
          /**
           * Status
           * @description Current status of the monitor
           * @enum {string}
           */
          status: "paused" | "pending" | "maintenance" | "up" | "validating" | "down";
          /**
           * Team Name
           * @description Name of the team owning the monitor
           */
          team_name: string;
          /**
           * Team Wait
           * @description Wait time in seconds before notifying the team
           * @default null
           */
          team_wait: number | null;
          /**
           * Updated At
           * @description Timestamp when the monitor was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description URL being monitored
           */
          url: string;
          /**
           * Verify Ssl
           * @description Whether SSL certificates are verified
           */
          verify_ssl: boolean;
      };
      /**
       * Id
       * @description Unique identifier of the monitor
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'monitor'
       * @constant
       */
      type: "monitor";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_MONITOR_AVAILABILITY tool input.
 */
type BETTER_STACK_GET_MONITOR_AVAILABILITY_INPUT = {
  /**
   * From Date
   * @description Start date (inclusive) for the summary in YYYY-MM-DD format
   * @default null
   */
  from_date: string | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to retrieve availability for
   */
  monitor_id?: string;
  /**
   * To Date
   * @description End date (inclusive) for the summary in YYYY-MM-DD format
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_MONITOR_AVAILABILITY tool output.
 */
type BETTER_STACK_GET_MONITOR_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Availability summary data
   */
  data?: {
      /**
       * Attributes
       * @description Availability metrics of a monitor.
       */
      attributes: {
          /**
           * Availability
           * @description Availability percentage
           */
          availability: number;
          /**
           * Average Incident
           * @description Average incident duration in seconds
           */
          average_incident: number;
          /**
           * Longest Incident
           * @description Longest incident duration in seconds
           */
          longest_incident: number;
          /**
           * Number Of Incidents
           * @description Number of downtime incidents
           */
          number_of_incidents: number;
          /**
           * Total Downtime
           * @description Total downtime in seconds
           */
          total_downtime: number;
      };
      /**
       * Id
       * @description Monitor ID
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'monitor_sla'
       * @constant
       */
      type: "monitor_sla";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_MONITOR_RESPONSE_TIMES tool input.
 */
type BETTER_STACK_GET_MONITOR_RESPONSE_TIMES_INPUT = {
  /**
   * From
   * @description Start date (inclusive) for the response times in ISO 8601 format
   * @default null
   */
  from: string | null;
  /**
   * Limit
   * @description Maximum number of records to return
   * @default null
   */
  limit: number | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to retrieve response times for
   */
  monitor_id?: string;
  /**
   * To
   * @description End date (inclusive) for the response times in ISO 8601 format
   * @default null
   */
  to: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_MONITOR_RESPONSE_TIMES tool output.
 */
type BETTER_STACK_GET_MONITOR_RESPONSE_TIMES_OUTPUT = {
  /**
   * Data
   * @description Top-level data object in the response.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes container for monitor response times.
       */
      attributes: {
          /**
           * Regions
           * @description List of regions with their response time measurements
           */
          regions: {
              /**
               * Region
               * @description Region code where the monitor was tested
               */
              region: string;
              /**
               * Response Times
               * @description List of response time records for this region
               */
              response_times: {
                  /**
                   * At
                   * @description ISO 8601 timestamp of the response time measurement
                   */
                  at: string;
                  /**
                   * Connection Time
                   * @description Time taken to establish the connection in seconds
                   */
                  connection_time: number;
                  /**
                   * Data Transfer Time
                   * @description Time taken to transfer data in seconds
                   */
                  data_transfer_time: number;
                  /**
                   * Name Lookup Time
                   * @description Time taken for DNS resolution in seconds
                   */
                  name_lookup_time: number;
                  /**
                   * Response Time
                   * @description Total response time in seconds
                   */
                  response_time: number;
                  /**
                   * Tls Handshake Time
                   * @description Time taken for the TLS handshake in seconds
                   */
                  tls_handshake_time: number;
              }[];
          }[];
      };
      /**
       * Id
       * @description The monitor ID
       */
      id: string;
      /**
       * Type
       * @description Type of the returned data (always 'monitor_response_times')
       * @constant
       */
      type: "monitor_response_times";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_STATUS_PAGE tool input.
 */
type BETTER_STACK_GET_STATUS_PAGE_INPUT = {
  /**
   * Status Page Id
   * @description The ID of the status page to retrieve
   */
  status_page_id?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_STATUS_PAGE tool output.
 */
type BETTER_STACK_GET_STATUS_PAGE_OUTPUT = {
  /**
   * Data
   * @description The status page resource
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a status page.
       */
      attributes: {
          /**
           * Aggregate State
           * @description Current overall state of the status page
           */
          aggregate_state: string;
          /**
           * Announcement
           * @description Announcement text shown on the page
           * @default null
           */
          announcement: string | null;
          /**
           * Announcement Embed Css
           * @description CSS for embedded announcement
           */
          announcement_embed_css: string;
          /**
           * Announcement Embed Link
           * @description Link for embedded announcement
           */
          announcement_embed_link: string;
          /**
           * Announcement Embed Visible
           * @description Whether embedded announcement is visible
           */
          announcement_embed_visible: boolean;
          /**
           * Automatic Reports
           * @description Whether automatic reports are enabled
           */
          automatic_reports: boolean;
          /**
           * Company Name
           * @description Company name shown on the status page
           */
          company_name: string;
          /**
           * Company Url
           * @description URL of the company homepage
           */
          company_url: string;
          /**
           * Contact Url
           * @description URL for contact or support page
           * @default null
           */
          contact_url: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when created
           */
          created_at: string;
          /**
           * Custom Css
           * @description Custom CSS applied to the page
           * @default null
           */
          custom_css: string | null;
          /**
           * Custom Domain
           * @description Custom domain for the status page if set
           * @default null
           */
          custom_domain: string | null;
          /**
           * Custom Javascript
           * @description Custom JavaScript applied to the page
           */
          custom_javascript: string;
          /**
           * Design
           * @description Design version of the status page, e.g., 'v1'
           */
          design: string;
          /**
           * Google Analytics Id
           * @description Google Analytics tracking ID
           * @default null
           */
          google_analytics_id: string | null;
          /**
           * Hide From Search Engines
           * @description Whether the page is hidden from search engines
           */
          hide_from_search_engines: boolean;
          /**
           * History
           * @description Number of days of history to display
           */
          history: number;
          /**
           * Ip Allowlist
           * @description List of IPs allowed to access if restricted
           */
          ip_allowlist: string[];
          /**
           * Layout
           * @description Layout orientation, e.g., 'vertical'
           */
          layout: string;
          /**
           * Logo Url
           * @description URL of the logo image
           * @default null
           */
          logo_url: string | null;
          /**
           * Min Incident Length
           * @description Minimum incident length in seconds for reports
           */
          min_incident_length: number;
          /**
           * Navigation Links
           * @description Custom navigation links configured on the page
           */
          navigation_links: {
              [key: string]: unknown;
          }[];
          /**
           * Password Enabled
           * @description Whether a password is required to view the page
           */
          password_enabled: boolean;
          /**
           * Subdomain
           * @description Subdomain of the status page, e.g., 'mycompany'
           */
          subdomain: string;
          /**
           * Subscribable
           * @description Whether visitors can subscribe for updates
           */
          subscribable: boolean;
          /**
           * Theme
           * @description Visual theme of the page, e.g., 'light'
           */
          theme: string;
          /**
           * Timezone
           * @description Timezone of the status page, e.g., 'Tokyo'
           */
          timezone: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique ID of the status page
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'status_page'
       * @constant
       */
      type: "status_page";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_TELEMETRY_API_TOKEN tool input.
 */
type BETTER_STACK_GET_TELEMETRY_API_TOKEN_INPUT = object;

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_TELEMETRY_API_TOKEN tool output.
 */
type BETTER_STACK_GET_TELEMETRY_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description The Telemetry API token extracted from the integration configuration (without the 'Bearer ' prefix).
       */
      token: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_UPTIME_API_TOKEN tool input.
 */
type BETTER_STACK_GET_UPTIME_API_TOKEN_INPUT = object;

/**
 * Type of BETTER_STACK's BETTER_STACK_GET_UPTIME_API_TOKEN tool output.
 */
type BETTER_STACK_GET_UPTIME_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description The Uptime API token stored in the integration metadata
       */
      token: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_CATALOG_RELATIONS tool input.
 */
type BETTER_STACK_LIST_CATALOG_RELATIONS_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of resources per page. Default is 50, maximum is 250.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_CATALOG_RELATIONS tool output.
 */
type BETTER_STACK_LIST_CATALOG_RELATIONS_OUTPUT = {
  /**
   * Data
   * @description List of catalog relations
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a Catalog relation.
       */
      attributes: {
          /**
           * Description
           * @description Description of the Catalog relation
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Name of the Catalog relation
           */
          name: string;
      };
      /**
       * Id
       * @description The unique ID of the Catalog relation
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'catalog_relation'
       * @constant
       */
      type: "catalog_relation";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results, or null if on last page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results, or null if on first page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS tool input.
 */
type BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of integrations per page. Default is 50, maximum is 250.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS tool output.
 */
type BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description List of Google Monitoring integrations.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a Google Monitoring integration.
       */
      attributes: {
          /**
           * Call
           * @description Whether to call the on-call person.
           */
          call: boolean;
          /**
           * Email
           * @description Whether to send an email to the on-call person.
           */
          email: boolean;
          /**
           * Name
           * @description Name of the Google Monitoring integration.
           */
          name: string;
          /**
           * Paused
           * @description Whether the integration is paused.
           */
          paused: boolean;
          /**
           * Policy Id
           * @description ID of the escalation policy associated with the integration.
           * @default null
           */
          policy_id: number | null;
          /**
           * Push
           * @description Whether to send a push notification to the on-call person.
           */
          push: boolean;
          /**
           * Recovery Period
           * @description Time the alert must be up to automatically mark an incident as resolved (in seconds).
           * @default null
           */
          recovery_period: number | null;
          /**
           * Sms
           * @description Whether to send an SMS to the on-call person.
           */
          sms: boolean;
          /**
           * Team Name
           * @description Name of the team this integration belongs to.
           */
          team_name: string;
          /**
           * Team Wait
           * @description Time before escalating the incident alert to the team (in seconds).
           */
          team_wait: number;
          /**
           * Webhook Url
           * Format: uri
           * @description The URL for the Google Monitoring webhook.
           */
          webhook_url: string;
      };
      /**
       * Id
       * @description Unique integration identifier.
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'google_monitoring_integration'.
       * @constant
       */
      type: "google_monitoring_integration";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata.
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results.
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results.
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results or null.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results or null.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_GRAFANA_INTEGRATIONS tool input.
 */
type BETTER_STACK_LIST_GRAFANA_INTEGRATIONS_INPUT = object;

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_GRAFANA_INTEGRATIONS tool output.
 */
type BETTER_STACK_LIST_GRAFANA_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description List of Grafana integrations.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a Grafana integration resource.
       */
      attributes: {
          /**
           * Call
           * @description Whether call notifications are enabled.
           */
          call: boolean;
          /**
           * Email
           * @description Whether email notifications are enabled.
           */
          email: boolean;
          /**
           * Name
           * @description Name of the Grafana integration.
           */
          name: string;
          /**
           * Paused
           * @description Whether the integration is paused.
           */
          paused: boolean;
          /**
           * Policy Id
           * @description Associated escalation policy ID, null if none.
           * @default null
           */
          policy_id: string | null;
          /**
           * Push
           * @description Whether push notifications are enabled.
           */
          push: boolean;
          /**
           * Recovery Period
           * @description Recovery period in seconds, null if never.
           * @default null
           */
          recovery_period: number | null;
          /**
           * Sms
           * @description Whether SMS notifications are enabled.
           */
          sms: boolean;
          /**
           * Team Name
           * @description Name of the associated team.
           */
          team_name: string;
          /**
           * Team Wait
           * @description Seconds to wait before notifying the next team member.
           */
          team_wait: number;
          /**
           * Webhook Url
           * Format: uri
           * @description Webhook URL for the integration.
           */
          webhook_url: string;
      };
      /**
       * Id
       * @description Unique Grafana integration identifier.
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'grafana_integration'.
       * @constant
       */
      type: "grafana_integration";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page.
       */
      first: string;
      /**
       * Last
       * @description URL of the last page.
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if any.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if any.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_HEARTBEATS tool input.
 */
type BETTER_STACK_LIST_HEARTBEATS_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_HEARTBEATS tool output.
 */
type BETTER_STACK_LIST_HEARTBEATS_OUTPUT = {
  /**
   * Data
   * @description List of heartbeat resources
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a heartbeat resource.
       */
      attributes: {
          /**
           * Call
           * @description Whether call notifications are enabled
           */
          call: boolean;
          /**
           * Created At
           * @description ISO8601 timestamp of creation
           */
          created_at: string;
          /**
           * Email
           * @description Whether email notifications are enabled
           */
          email: boolean;
          /**
           * Grace
           * @description Allowed grace period in seconds before 'down'
           */
          grace: number;
          /**
           * Heartbeat Group Id
           * @description ID of the heartbeat group, if assigned
           * @default null
           */
          heartbeat_group_id: string | null;
          /**
           * Maintenance Days
           * @description Days on which maintenance applies
           * @default null
           */
          maintenance_days: string[] | null;
          /**
           * Maintenance From
           * @description Daily maintenance window start (HH:MM:SS)
           * @default null
           */
          maintenance_from: string | null;
          /**
           * Maintenance Timezone
           * @description Timezone for maintenance windows
           * @default null
           */
          maintenance_timezone: string | null;
          /**
           * Maintenance To
           * @description Daily maintenance window end (HH:MM:SS)
           * @default null
           */
          maintenance_to: string | null;
          /**
           * Name
           * @description Name of the heartbeat
           */
          name: string;
          /**
           * Paused At
           * @description ISO8601 timestamp when the heartbeat was paused
           * @default null
           */
          paused_at: string | null;
          /**
           * Period
           * @description Heartbeat check period in seconds
           */
          period: number;
          /**
           * Push
           * @description Whether push notifications are enabled
           */
          push: boolean;
          /**
           * Sms
           * @description Whether SMS notifications are enabled
           */
          sms: boolean;
          /**
           * Sort Index
           * @description Sorting index for display order
           * @default null
           */
          sort_index: number | null;
          /**
           * Status
           * @description Current status of the heartbeat; `paused`, `pending`, `up`, or `down`
           * @enum {string}
           */
          status: "paused" | "pending" | "up" | "down";
          /**
           * Team Name
           * @description Name of the target team
           */
          team_name: string;
          /**
           * Team Wait
           * @description Time in seconds before escalating within the team
           */
          team_wait: number;
          /**
           * Updated At
           * @description ISO8601 timestamp of last update
           */
          updated_at: string;
          /**
           * Url
           * @description Public URL to send heartbeat requests to
           */
          url: string;
      };
      /**
       * Id
       * @description Unique identifier of the heartbeat
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'heartbeat'
       * @constant
       */
      type: "heartbeat";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, or null if on last page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, or null if on first page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_MONITORS tool input.
 */
type BETTER_STACK_LIST_MONITORS_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of monitors per page. Default is 50, maximum is 250.
   * @default null
   */
  per_page: number | null;
  /**
   * Pronounceable Name
   * @description Filter monitors by their pronounceable name property
   * @default null
   */
  pronounceable_name: string | null;
  /**
   * Url
   * @description Filter monitors by their URL property
   * @default null
   */
  url: string | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_MONITORS tool output.
 */
type BETTER_STACK_LIST_MONITORS_OUTPUT = {
  /**
   * Data
   * @description List of monitors
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a monitor.
       */
      attributes: {
          /**
           * Call
           * @description Whether calls are enabled for alerts
           */
          call: boolean;
          /**
           * Check Frequency
           * @description Frequency of checks in seconds
           */
          check_frequency: number;
          /**
           * Confirmation Period
           * @description Seconds to confirm downtime after a failed check
           */
          confirmation_period: number;
          /**
           * Created At
           * @description Timestamp when the monitor was created
           */
          created_at: string;
          /**
           * Domain Expiration
           * @description Days until the domain registration expires
           * @default null
           */
          domain_expiration: number | null;
          /**
           * Email
           * @description Whether email notifications are enabled
           */
          email: boolean;
          /**
           * Environment Variables
           * @description Environment variables for scripted or custom monitors
           */
          environment_variables: {
              [key: string]: string;
          };
          /**
           * Expected Status Codes
           * @description Expected HTTP status codes indicating success
           */
          expected_status_codes: number[];
          /**
           * Expiration Policy Id
           * @description ID of the expiration policy if set
           * @default null
           */
          expiration_policy_id: string | null;
          /**
           * Http Method
           * @description HTTP method used for checks, e.g., 'get', 'post'
           */
          http_method: string;
          /**
           * Last Checked At
           * @description Timestamp of the last check in ISO 8601 format
           * @default null
           */
          last_checked_at: string | null;
          /**
           * Maintenance Days
           * @description Days of the week for maintenance, e.g., 'mon', 'tue'
           */
          maintenance_days: string[];
          /**
           * Maintenance From
           * @description Daily maintenance start time in HH:MM:SS
           * @default null
           */
          maintenance_from: string | null;
          /**
           * Maintenance Timezone
           * @description Timezone for maintenance schedule
           * @default null
           */
          maintenance_timezone: string | null;
          /**
           * Maintenance To
           * @description Daily maintenance end time in HH:MM:SS
           * @default null
           */
          maintenance_to: string | null;
          /**
           * Monitor Group Id
           * @description ID of the monitor group this monitor belongs to
           * @default null
           */
          monitor_group_id: string | null;
          /**
           * Monitor Type
           * @description Type of the monitor, e.g., 'keyword', 'http'
           */
          monitor_type: string;
          /**
           * Paused At
           * @description Timestamp when the monitor was paused
           * @default null
           */
          paused_at: string | null;
          /**
           * Policy Id
           * @description ID of the escalation policy if set
           * @default null
           */
          policy_id: string | null;
          /**
           * Port
           * @description Port used for HTTP checks if non-default
           * @default null
           */
          port: number | null;
          /**
           * Pronounceable Name
           * @description Pronounceable name of the monitor
           */
          pronounceable_name: string;
          /**
           * Push
           * @description Whether push notifications are enabled
           */
          push: boolean;
          /**
           * Recovery Period
           * @description Recovery period in seconds after downtime
           */
          recovery_period: number;
          /**
           * Regions
           * @description Regions where checks are performed
           */
          regions: string[];
          /**
           * Request Body
           * @description Body to include in HTTP request for monitors
           * @default null
           */
          request_body: string | null;
          /**
           * Request Headers
           * @description List of HTTP headers to send with monitor requests
           */
          request_headers: {
              /**
               * Id
               * @description Unique ID of the request header
               */
              id: string;
              /**
               * Name
               * @description Name of the request header
               */
              name: string;
              /**
               * Value
               * @description Value of the request header
               */
              value: string;
          }[];
          /**
           * Request Timeout
           * @description Timeout for monitor request in seconds
           */
          request_timeout: number;
          /**
           * Required Keyword
           * @description Keyword required for keyword-based monitors
           * @default null
           */
          required_keyword: string | null;
          /**
           * Sms
           * @description Whether SMS notifications are enabled
           */
          sms: boolean;
          /**
           * Ssl Expiration
           * @description Days until SSL certificate expires
           * @default null
           */
          ssl_expiration: number | null;
          /**
           * Status
           * @description Current status of the monitor
           * @enum {string}
           */
          status: "paused" | "pending" | "maintenance" | "up" | "validating" | "down";
          /**
           * Team Name
           * @description Name of the team that owns the monitor
           * @default null
           */
          team_name: string | null;
          /**
           * Team Wait
           * @description Wait time in seconds before notifying the team
           * @default null
           */
          team_wait: number | null;
          /**
           * Updated At
           * @description Timestamp when the monitor was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description URL of the monitor
           */
          url: string;
          /**
           * Verify Ssl
           * @description Whether SSL certificate is verified
           */
          verify_ssl: boolean;
      };
      /**
       * Id
       * @description Unique ID of the monitor
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'monitor'
       * @constant
       */
      type: "monitor";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results or null
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results or null
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS tool input.
 */
type BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of integrations per page. Default is 50, maximum is 250.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS tool output.
 */
type BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description List of New Relic integrations.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a New Relic integration.
       */
      attributes: {
          /**
           * Alerting Rule
           * @description Alerting rule for the integration.
           */
          alerting_rule: string;
          /**
           * Call
           * @description Whether call notifications are enabled.
           */
          call: boolean;
          /**
           * Email
           * @description Whether email notifications are enabled.
           */
          email: boolean;
          /**
           * Name
           * @description Name of the New Relic integration.
           */
          name: string;
          /**
           * Paused
           * @description Whether the integration is paused.
           */
          paused: boolean;
          /**
           * Policy Id
           * @description ID of the associated escalation policy, null if none.
           * @default null
           */
          policy_id: number | null;
          /**
           * Push
           * @description Whether push notifications are enabled.
           */
          push: boolean;
          /**
           * Recovery Period
           * @description Recovery period in seconds, null if never.
           * @default null
           */
          recovery_period: number | null;
          /**
           * Sms
           * @description Whether SMS notifications are enabled.
           */
          sms: boolean;
          /**
           * Team Name
           * @description Name of the associated team.
           */
          team_name: string;
          /**
           * Team Wait
           * @description Seconds to wait before notifying the next team member.
           */
          team_wait: number;
          /**
           * Webhook Url
           * Format: uri
           * @description Webhook URL for the integration.
           */
          webhook_url: string;
      };
      /**
       * Id
       * @description Unique New Relic integration identifier.
       */
      id: string;
      /**
       * Type
       * @description Resource type, should be 'new_relic_integration'.
       * @constant
       */
      type: "new_relic_integration";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata.
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results.
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results.
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results or null.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results or null.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_ON_CALL_SCHEDULES tool input.
 */
type BETTER_STACK_LIST_ON_CALL_SCHEDULES_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of resources per page. Default is 50, maximum is 250.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_ON_CALL_SCHEDULES tool output.
 */
type BETTER_STACK_LIST_ON_CALL_SCHEDULES_OUTPUT = {
  /**
   * Data
   * @description List of on-call schedules
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the on-call schedule
       */
      attributes: {
          /**
           * Default Calendar
           * @description Indicates if this is the default calendar for the team
           */
          default_calendar: boolean;
          /**
           * Name
           * @description Name of the on-call schedule
           * @default null
           */
          name: string | null;
          /**
           * Team Name
           * @description Name of the associated team
           */
          team_name: string;
      };
      /**
       * Id
       * @description The unique ID of the on-call schedule
       */
      id: string;
      /**
       * Relationships
       * @description Relationships of the on-call schedule
       */
      relationships: {
          /**
           * On Call Users
           * @description Relationship to on-call users
           */
          on_call_users: {
              /**
               * Data
               * @description List of users on call
               */
              data: {
                  /**
                   * Id
                   * @description The unique ID of the user
                   */
                  id: string;
                  /**
                   * Meta
                   * @description Metadata about the user
                   */
                  meta: {
                      /**
                       * Email
                       * @description User's email address
                       */
                      email: string;
                  };
                  /**
                   * Type
                   * @description Resource type, e.g., 'user'
                   */
                  type: string;
              }[];
          };
      };
      /**
       * Type
       * @description Resource type, always 'on_call_calendar'
       * @constant
       */
      type: "on_call_calendar";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Included
   * @description Additional related resources
   * @default null
   */
  included: {
      /**
       * Attributes
       * @description Attributes of the included resource
       */
      attributes: {
          /**
           * Email
           * @description Email address of the resource
           */
          email: string;
          /**
           * First Name
           * @description First name of the resource, e.g., user
           */
          first_name: string;
          /**
           * Last Name
           * @description Last name of the resource, e.g., user
           */
          last_name: string;
          /**
           * Phone Numbers
           * @description List of phone numbers of the user
           */
          phone_numbers: string[];
      };
      /**
       * Id
       * @description Unique ID of the included resource
       */
      id: string;
      /**
       * Type
       * @description Type of the included resource, e.g., 'user'
       * @constant
       */
      type: "user";
  }[] | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, or null if on last page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, or null if on first page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_STATUS_PAGES tool input.
 */
type BETTER_STACK_LIST_STATUS_PAGES_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of status pages per page. Default is 50; maximum is 250.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_STATUS_PAGES tool output.
 */
type BETTER_STACK_LIST_STATUS_PAGES_OUTPUT = {
  /**
   * Data
   * @description List of status page resources
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a status page.
       */
      attributes: {
          /**
           * Aggregate State
           * @description Current overall state of the status page
           */
          aggregate_state: string;
          /**
           * Announcement
           * @description Announcement text shown on the page
           * @default null
           */
          announcement: string | null;
          /**
           * Announcement Embed Css
           * @description CSS for embedded announcement
           */
          announcement_embed_css: string;
          /**
           * Announcement Embed Link
           * @description Link for embedded announcement
           */
          announcement_embed_link: string;
          /**
           * Announcement Embed Visible
           * @description Whether embedded announcement is visible
           */
          announcement_embed_visible: boolean;
          /**
           * Automatic Reports
           * @description Whether automatic reports are enabled
           */
          automatic_reports: boolean;
          /**
           * Company Name
           * @description Company name shown on the status page
           */
          company_name: string;
          /**
           * Company Url
           * @description URL of the company homepage
           */
          company_url: string;
          /**
           * Contact Url
           * @description URL for contact or support page
           * @default null
           */
          contact_url: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when created
           */
          created_at: string;
          /**
           * Custom Css
           * @description Custom CSS applied to the page
           * @default null
           */
          custom_css: string | null;
          /**
           * Custom Domain
           * @description Custom domain for the status page if set
           * @default null
           */
          custom_domain: string | null;
          /**
           * Custom Javascript
           * @description Custom JavaScript applied to the page
           */
          custom_javascript: string;
          /**
           * Design
           * @description Design version of the status page, e.g., 'v1'
           */
          design: string;
          /**
           * Google Analytics Id
           * @description Google Analytics tracking ID
           * @default null
           */
          google_analytics_id: string | null;
          /**
           * Hide From Search Engines
           * @description Whether the page is hidden from search engines
           */
          hide_from_search_engines: boolean;
          /**
           * History
           * @description Number of days of history to display
           */
          history: number;
          /**
           * Ip Allowlist
           * @description List of IPs allowed to access if restricted
           */
          ip_allowlist: string[];
          /**
           * Layout
           * @description Layout orientation, e.g., 'vertical'
           */
          layout: string;
          /**
           * Logo Url
           * @description URL of the logo image
           * @default null
           */
          logo_url: string | null;
          /**
           * Min Incident Length
           * @description Minimum incident length in seconds for reports
           */
          min_incident_length: number;
          /**
           * Navigation Links
           * @description Custom navigation links configured on the page
           */
          navigation_links: {
              [key: string]: unknown;
          }[];
          /**
           * Password Enabled
           * @description Whether a password is required to view the page
           */
          password_enabled: boolean;
          /**
           * Subdomain
           * @description Subdomain of the status page, e.g., 'mycompany'
           */
          subdomain: string;
          /**
           * Subscribable
           * @description Whether visitors can subscribe for updates
           */
          subscribable: boolean;
          /**
           * Theme
           * @description Visual theme of the page, e.g., 'light'
           */
          theme: string;
          /**
           * Timezone
           * @description Timezone of the status page, e.g., 'Tokyo'
           */
          timezone: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique ID of the status page
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'status_page'
       * @constant
       */
      type: "status_page";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results or null
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results or null
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_STATUS_PAGE_REPORTS tool input.
 */
type BETTER_STACK_LIST_STATUS_PAGE_REPORTS_INPUT = {
  /**
   * Page
   * @description Page number to return. Starts at 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of reports per page. Default is 50, maximum is 250.
   * @default null
   */
  per_page: number | null;
  /**
   * Status Page Id
   * @description The ID of the status page
   */
  status_page_id?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_LIST_STATUS_PAGE_REPORTS tool output.
 */
type BETTER_STACK_LIST_STATUS_PAGE_REPORTS_OUTPUT = {
  /**
   * Data
   * @description List of status page reports
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the status report
       */
      attributes: {
          /**
           * Affected Resources
           * @description List of resources affected in this report
           */
          affected_resources: {
              /**
               * Status
               * @description Status of the resource during the report
               * @enum {string}
               */
              status: "resolved" | "degraded" | "downtime" | "maintenance";
              /**
               * Status Page Resource Id
               * @description ID of the affected status page resource
               */
              status_page_resource_id: string;
          }[];
          /**
           * Aggregate State
           * @description Overall state of the status page during the report
           */
          aggregate_state: string;
          /**
           * Ends At
           * @description ISO 8601 end datetime of the report or null
           * @default null
           */
          ends_at: string | null;
          /**
           * Report Type
           * @description Type of the report ('manual' or 'maintenance')
           * @enum {string}
           */
          report_type: "manual" | "maintenance";
          /**
           * Starts At
           * @description ISO 8601 start datetime of the report
           */
          starts_at: string;
          /**
           * Status Page Id
           * @description Numeric ID of the status page
           */
          status_page_id: number;
          /**
           * Title
           * @description Title of the status page report
           */
          title: string;
      };
      /**
       * Id
       * @description Report ID
       */
      id: string;
      /**
       * Relationships
       * @description Relationships of the status report
       */
      relationships: {
          /**
           * Status Updates
           * @description Relationship to status updates
           */
          status_updates: {
              /**
               * Data
               * @description List of status update references
               */
              data: {
                  /**
                   * Id
                   * @description ID of the related object
                   */
                  id: string;
                  /**
                   * Type
                   * @description Type of the related object
                   */
                  type: string;
              }[];
          };
      };
      /**
       * Type
       * @description Resource type, always 'status_report'
       * @constant
       */
      type: "status_report";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination metadata
   */
  pagination?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page of results or null
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results or null
       * @default null
       */
      prev: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_UPDATE_HEARTBEAT tool input.
 */
type BETTER_STACK_UPDATE_HEARTBEAT_INPUT = {
  /**
   * Call
   * @description Whether to call the on-call person on failure
   * @default null
   */
  call: boolean | null;
  /**
   * Critical Alert
   * @description Send a critical push ignoring mute and Do Not Disturb
   * @default null
   */
  critical_alert: boolean | null;
  /**
   * Email
   * @description Whether to send an email to the on-call person
   * @default null
   */
  email: boolean | null;
  /**
   * Grace
   * @description Acceptable delay beyond period in seconds (min 0)
   * @default null
   */
  grace: number | null;
  /**
   * Heartbeat Group Id
   * @description ID of the heartbeat group to assign
   * @default null
   */
  heartbeat_group_id: string | null;
  /**
   * Heartbeat Id
   * @description The ID of the heartbeat to update
   */
  heartbeat_id?: string;
  /**
   * Maintenance Days
   * @description Days for daily maintenance window. Use both days for overnight windows.
   * @default null
   */
  maintenance_days: string[] | null;
  /**
   * Maintenance From
   * @description Start of maintenance window each day (HH:MM:SS)
   * @default null
   */
  maintenance_from: string | null;
  /**
   * Maintenance Timezone
   * @description Timezone for maintenance window. See Rails TimeZone list.
   * @default null
   */
  maintenance_timezone: string | null;
  /**
   * Maintenance To
   * @description End of maintenance window each day (HH:MM:SS)
   * @default null
   */
  maintenance_to: string | null;
  /**
   * Name
   * @description The name of the service for this heartbeat
   * @default null
   */
  name: string | null;
  /**
   * Paused
   * @description Set true to pause monitoring; false to resume
   * @default null
   */
  paused: boolean | null;
  /**
   * Period
   * @description How often to expect the heartbeat in seconds (min 30)
   * @default null
   */
  period: number | null;
  /**
   * Policy Id
   * @description ID of the escalation policy to assign
   * @default null
   */
  policy_id: string | null;
  /**
   * Push
   * @description Whether to send a push notification on failure
   * @default null
   */
  push: boolean | null;
  /**
   * Sms
   * @description Whether to send an SMS to the on-call person
   * @default null
   */
  sms: boolean | null;
  /**
   * Sort Index
   * @description Index position within a heartbeat group
   * @default null
   */
  sort_index: number | null;
  /**
   * Team Wait
   * @description Seconds to wait before escalating alert to team. Leave blank to disable team escalation.
   * @default null
   */
  team_wait: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_UPDATE_HEARTBEAT tool output.
 */
type BETTER_STACK_UPDATE_HEARTBEAT_OUTPUT = {
  /**
   * Data
   * @description Updated heartbeat data
   */
  data?: {
      /** Attributes */
      attributes: {
          /**
           * Call
           * @description Whether call notifications are enabled
           */
          call: boolean;
          /**
           * Created At
           * @description ISO8601 creation timestamp
           */
          created_at: string;
          /**
           * Critical Alert
           * @description Whether critical push notifications are enabled
           */
          critical_alert: boolean;
          /**
           * Email
           * @description Whether email notifications are enabled
           */
          email: boolean;
          /**
           * Grace
           * @description Allowed delay in seconds beyond period
           */
          grace: number;
          /**
           * Heartbeat Group Id
           * @description Assigned heartbeat group ID
           * @default null
           */
          heartbeat_group_id: string | null;
          /** Maintenance Days */
          maintenance_days: string[];
          /**
           * Maintenance From
           * @description Maintenance window start time (HH:MM:SS)
           * @default null
           */
          maintenance_from: string | null;
          /**
           * Maintenance Timezone
           * @description Timezone used for maintenance window
           * @default null
           */
          maintenance_timezone: string | null;
          /**
           * Maintenance To
           * @description Maintenance window end time (HH:MM:SS)
           * @default null
           */
          maintenance_to: string | null;
          /**
           * Name
           * @description The name of the service for this heartbeat
           */
          name: string;
          /**
           * Paused At
           * @description Timestamp when monitoring was paused, or null
           * @default null
           */
          paused_at: string | null;
          /**
           * Period
           * @description Expected interval in seconds between heartbeats
           */
          period: number;
          /**
           * Push
           * @description Whether push notifications are enabled
           */
          push: boolean;
          /**
           * Sms
           * @description Whether SMS notifications are enabled
           */
          sms: boolean;
          /**
           * Sort Index
           * @description Position index within the heartbeat group
           * @default null
           */
          sort_index: number | null;
          /**
           * Team Name
           * @description Name of the team owning this heartbeat
           */
          team_name: string;
          /**
           * Team Wait
           * @description Seconds before escalating alert to the team
           * @default null
           */
          team_wait: number | null;
          /**
           * Updated At
           * @description ISO8601 last update timestamp
           */
          updated_at: string;
          /**
           * Url
           * @description API URL for this heartbeat
           */
          url: string;
      };
      /**
       * Id
       * @description Unique identifier of the heartbeat
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'heartbeat'
       * @constant
       */
      type: "heartbeat";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_UPDATE_HEARTBEAT_GROUP tool input.
 */
type BETTER_STACK_UPDATE_HEARTBEAT_GROUP_INPUT = {
  /**
   * Heartbeat Group Id
   * @description The ID of the heartbeat group to update
   */
  heartbeat_group_id?: string;
  /**
   * Name
   * @description Name of the group visible in the dashboard
   * @default null
   */
  name: string | null;
  /**
   * Paused
   * @description True to pause monitoring; false to resume
   * @default null
   */
  paused: boolean | null;
  /**
   * Period
   * @description Interval in seconds for expected heartbeats (minimum 30 seconds)
   * @default null
   */
  period: number | null;
  /**
   * Sort Index
   * @description Zero-based index to control sort order of heartbeat groups
   * @default null
   */
  sort_index: number | null;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_UPDATE_HEARTBEAT_GROUP tool output.
 */
type BETTER_STACK_UPDATE_HEARTBEAT_GROUP_OUTPUT = {
  /**
   * Data
   * @description The updated heartbeat group object
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of a heartbeat group.
       */
      attributes: {
          /**
           * Created At
           * @description ISO8601 timestamp when group was created.
           */
          created_at: string;
          /**
           * Name
           * @description Heartbeat group name.
           */
          name: string;
          /**
           * Paused
           * @description Whether monitoring is paused for this group.
           */
          paused: boolean;
          /**
           * Sort Index
           * @description Sort index of the group.
           */
          sort_index: number;
          /**
           * Team Name
           * @description Name of the team owning this group.
           */
          team_name: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when group was last updated.
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the heartbeat group.
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'heartbeat_group'
       * @constant
       */
      type: "heartbeat_group";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_UPDATE_SOURCE_GROUP tool input.
 */
type BETTER_STACK_UPDATE_SOURCE_GROUP_INPUT = {
  /**
   * Name
   * @description The new display name of the source group
   * @default null
   */
  name: string | null;
  /**
   * Sort Index
   * @description Order index to control group sorting. Must be non-negative.
   * @default null
   */
  sort_index: number | null;
  /**
   * Source Group Id
   * @description The ID of the source group you want to update
   */
  source_group_id?: string;
};

/**
 * Type of BETTER_STACK's BETTER_STACK_UPDATE_SOURCE_GROUP tool output.
 */
type BETTER_STACK_UPDATE_SOURCE_GROUP_OUTPUT = {
  /**
   * Data
   * @description The updated source group resource.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the updated source group.
       */
      attributes: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the source group was created.
           */
          created_at: string;
          /**
           * Name
           * @description The display name of the source group.
           */
          name: string;
          /**
           * Sort Index
           * @description The sort index of the source group.
           * @default null
           */
          sort_index: number | null;
          /**
           * Team Name
           * @description The name of the team that owns the resource.
           */
          team_name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the source group was last updated.
           */
          updated_at: string;
      };
      /**
       * Id
       * @description Unique identifier of the source group.
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'source_group'.
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BETTER_STACK".
 */
export type BETTER_STACK_TOOL_INPUTS = {
  CREATE_ESCALATION_POLICY: BETTER_STACK_CREATE_ESCALATION_POLICY_INPUT
  CREATE_HEARTBEAT_GROUP: BETTER_STACK_CREATE_HEARTBEAT_GROUP_INPUT
  CREATE_OUTGOING_WEBHOOK: BETTER_STACK_CREATE_OUTGOING_WEBHOOK_INPUT
  CREATE_SOURCE_GROUP: BETTER_STACK_CREATE_SOURCE_GROUP_INPUT
  DELETE_ESCALATION_POLICY: BETTER_STACK_DELETE_ESCALATION_POLICY_INPUT
  DELETE_SOURCE_GROUP: BETTER_STACK_DELETE_SOURCE_GROUP_INPUT
  GET_HEARTBEAT: BETTER_STACK_GET_HEARTBEAT_INPUT
  GET_HEARTBEAT_AVAILABILITY: BETTER_STACK_GET_HEARTBEAT_AVAILABILITY_INPUT
  GET_MONITOR: BETTER_STACK_GET_MONITOR_INPUT
  GET_MONITOR_AVAILABILITY: BETTER_STACK_GET_MONITOR_AVAILABILITY_INPUT
  GET_MONITOR_RESPONSE_TIMES: BETTER_STACK_GET_MONITOR_RESPONSE_TIMES_INPUT
  GET_STATUS_PAGE: BETTER_STACK_GET_STATUS_PAGE_INPUT
  GET_TELEMETRY_API_TOKEN: BETTER_STACK_GET_TELEMETRY_API_TOKEN_INPUT
  GET_UPTIME_API_TOKEN: BETTER_STACK_GET_UPTIME_API_TOKEN_INPUT
  LIST_CATALOG_RELATIONS: BETTER_STACK_LIST_CATALOG_RELATIONS_INPUT
  LIST_GOOGLE_MONITORING_INTEGRATIONS: BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS_INPUT
  LIST_GRAFANA_INTEGRATIONS: BETTER_STACK_LIST_GRAFANA_INTEGRATIONS_INPUT
  LIST_HEARTBEATS: BETTER_STACK_LIST_HEARTBEATS_INPUT
  LIST_MONITORS: BETTER_STACK_LIST_MONITORS_INPUT
  LIST_NEW_RELIC_INTEGRATIONS: BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS_INPUT
  LIST_ON_CALL_SCHEDULES: BETTER_STACK_LIST_ON_CALL_SCHEDULES_INPUT
  LIST_STATUS_PAGES: BETTER_STACK_LIST_STATUS_PAGES_INPUT
  LIST_STATUS_PAGE_REPORTS: BETTER_STACK_LIST_STATUS_PAGE_REPORTS_INPUT
  UPDATE_HEARTBEAT: BETTER_STACK_UPDATE_HEARTBEAT_INPUT
  UPDATE_HEARTBEAT_GROUP: BETTER_STACK_UPDATE_HEARTBEAT_GROUP_INPUT
  UPDATE_SOURCE_GROUP: BETTER_STACK_UPDATE_SOURCE_GROUP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BETTER_STACK".
 */
export type BETTER_STACK_TOOL_OUTPUTS = {
  CREATE_ESCALATION_POLICY: BETTER_STACK_CREATE_ESCALATION_POLICY_OUTPUT
  CREATE_HEARTBEAT_GROUP: BETTER_STACK_CREATE_HEARTBEAT_GROUP_OUTPUT
  CREATE_OUTGOING_WEBHOOK: BETTER_STACK_CREATE_OUTGOING_WEBHOOK_OUTPUT
  CREATE_SOURCE_GROUP: BETTER_STACK_CREATE_SOURCE_GROUP_OUTPUT
  DELETE_ESCALATION_POLICY: BETTER_STACK_DELETE_ESCALATION_POLICY_OUTPUT
  DELETE_SOURCE_GROUP: BETTER_STACK_DELETE_SOURCE_GROUP_OUTPUT
  GET_HEARTBEAT: BETTER_STACK_GET_HEARTBEAT_OUTPUT
  GET_HEARTBEAT_AVAILABILITY: BETTER_STACK_GET_HEARTBEAT_AVAILABILITY_OUTPUT
  GET_MONITOR: BETTER_STACK_GET_MONITOR_OUTPUT
  GET_MONITOR_AVAILABILITY: BETTER_STACK_GET_MONITOR_AVAILABILITY_OUTPUT
  GET_MONITOR_RESPONSE_TIMES: BETTER_STACK_GET_MONITOR_RESPONSE_TIMES_OUTPUT
  GET_STATUS_PAGE: BETTER_STACK_GET_STATUS_PAGE_OUTPUT
  GET_TELEMETRY_API_TOKEN: BETTER_STACK_GET_TELEMETRY_API_TOKEN_OUTPUT
  GET_UPTIME_API_TOKEN: BETTER_STACK_GET_UPTIME_API_TOKEN_OUTPUT
  LIST_CATALOG_RELATIONS: BETTER_STACK_LIST_CATALOG_RELATIONS_OUTPUT
  LIST_GOOGLE_MONITORING_INTEGRATIONS: BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS_OUTPUT
  LIST_GRAFANA_INTEGRATIONS: BETTER_STACK_LIST_GRAFANA_INTEGRATIONS_OUTPUT
  LIST_HEARTBEATS: BETTER_STACK_LIST_HEARTBEATS_OUTPUT
  LIST_MONITORS: BETTER_STACK_LIST_MONITORS_OUTPUT
  LIST_NEW_RELIC_INTEGRATIONS: BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS_OUTPUT
  LIST_ON_CALL_SCHEDULES: BETTER_STACK_LIST_ON_CALL_SCHEDULES_OUTPUT
  LIST_STATUS_PAGES: BETTER_STACK_LIST_STATUS_PAGES_OUTPUT
  LIST_STATUS_PAGE_REPORTS: BETTER_STACK_LIST_STATUS_PAGE_REPORTS_OUTPUT
  UPDATE_HEARTBEAT: BETTER_STACK_UPDATE_HEARTBEAT_OUTPUT
  UPDATE_HEARTBEAT_GROUP: BETTER_STACK_UPDATE_HEARTBEAT_GROUP_OUTPUT
  UPDATE_SOURCE_GROUP: BETTER_STACK_UPDATE_SOURCE_GROUP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BETTER_STACK toolkit.
 */
export const BETTER_STACK = {
  slug: "better_stack",
  tools: {
    /**
     * Tool to create a new escalation policy. use when defining how incidents should escalate across team members.
     */
    CREATE_ESCALATION_POLICY: "BETTER_STACK_CREATE_ESCALATION_POLICY",
    /**
     * Tool to create a new heartbeat group. use when you need to organize related heartbeat checks under a single, logical group. example prompt: "create a new heartbeat group named 'backend services'."
     */
    CREATE_HEARTBEAT_GROUP: "BETTER_STACK_CREATE_HEARTBEAT_GROUP",
    /**
     * Tool to create a new outgoing webhook integration. use when you need to register an endpoint to receive event notifications from better stack.
     */
    CREATE_OUTGOING_WEBHOOK: "BETTER_STACK_CREATE_OUTGOING_WEBHOOK",
    /**
     * Tool to create a new source group. use when you have finalized the group name (and optional sort index) and need to organize related log sources under that group.
     */
    CREATE_SOURCE_GROUP: "BETTER_STACK_CREATE_SOURCE_GROUP",
    /**
     * Tool to delete an escalation policy by id. use when you need to permanently remove an existing escalation policy after confirming its id.
     */
    DELETE_ESCALATION_POLICY: "BETTER_STACK_DELETE_ESCALATION_POLICY",
    /**
     * Tool to delete a source group by id. use when you need to permanently remove an existing source group after confirming it is no longer needed.
     */
    DELETE_SOURCE_GROUP: "BETTER_STACK_DELETE_SOURCE_GROUP",
    /**
     * Tool to get a single heartbeat by id. use when you need to fetch details of a specific heartbeat.
     */
    GET_HEARTBEAT: "BETTER_STACK_GET_HEARTBEAT",
    /**
     * Tool to retrieve availability summary for a specific heartbeat. use when you need availability metrics for a heartbeat within an optional date range.
     */
    GET_HEARTBEAT_AVAILABILITY: "BETTER_STACK_GET_HEARTBEAT_AVAILABILITY",
    /**
     * Tool to get a single monitor. use when you need full details of a specific monitor by its id.
     */
    GET_MONITOR: "BETTER_STACK_GET_MONITOR",
    /**
     * Tool to return an availability summary for a specific monitor. use when you need uptime percentage and incident details within an optional date range.
     */
    GET_MONITOR_AVAILABILITY: "BETTER_STACK_GET_MONITOR_AVAILABILITY",
    /**
     * Tool to return response times for a specific monitor. use when you have a monitor id and need performance metrics over the last 24 hours.
     */
    GET_MONITOR_RESPONSE_TIMES: "BETTER_STACK_GET_MONITOR_RESPONSE_TIMES",
    /**
     * Tool to get a single status page by id. use when you need detailed information about a specific status page.
     */
    GET_STATUS_PAGE: "BETTER_STACK_GET_STATUS_PAGE",
    /**
     * Tool to retrieve the telemetry api token from the integration configuration. use when you need to authenticate telemetry api requests.
     */
    GET_TELEMETRY_API_TOKEN: "BETTER_STACK_GET_TELEMETRY_API_TOKEN",
    /**
     * Tool to retrieve the configured uptime api token. use when you need the uptime api token for subsequent authenticated api calls.
     */
    GET_UPTIME_API_TOKEN: "BETTER_STACK_GET_UPTIME_API_TOKEN",
    /**
     * Tool to list all catalog relations. use when you need to retrieve all catalog relations, supports pagination.
     */
    LIST_CATALOG_RELATIONS: "BETTER_STACK_LIST_CATALOG_RELATIONS",
    /**
     * Tool to list all google monitoring integrations. use when you need to view your configured google monitoring on-call integrations with pagination support.
     */
    LIST_GOOGLE_MONITORING_INTEGRATIONS: "BETTER_STACK_LIST_GOOGLE_MONITORING_INTEGRATIONS",
    /**
     * Tool to list all grafana integrations. use when you need to retrieve and inspect all configured grafana integrations.
     */
    LIST_GRAFANA_INTEGRATIONS: "BETTER_STACK_LIST_GRAFANA_INTEGRATIONS",
    /**
     * Tool to list all heartbeats. use when you need to retrieve your configured uptime heartbeats with optional pagination.
     */
    LIST_HEARTBEATS: "BETTER_STACK_LIST_HEARTBEATS",
    /**
     * Tool to list all monitors. use when you need to retrieve existing uptime monitors with optional filtering by url or name and pagination.
     */
    LIST_MONITORS: "BETTER_STACK_LIST_MONITORS",
    /**
     * Tool to list new relic integrations. use when you need to retrieve and inspect all configured new relic integrations with pagination support.
     */
    LIST_NEW_RELIC_INTEGRATIONS: "BETTER_STACK_LIST_NEW_RELIC_INTEGRATIONS",
    /**
     * Tool to list all on-call schedules. use when you need to retrieve all configured on-call calendars.
     */
    LIST_ON_CALL_SCHEDULES: "BETTER_STACK_LIST_ON_CALL_SCHEDULES",
    /**
     * Tool to list all your status pages. use when you need to retrieve existing status pages with optional pagination.
     */
    LIST_STATUS_PAGES: "BETTER_STACK_LIST_STATUS_PAGES",
    /**
     * Tool to list all reports on a status page. use when you need to retrieve existing status page reports with optional pagination via `page` and `per page`.
     */
    LIST_STATUS_PAGE_REPORTS: "BETTER_STACK_LIST_STATUS_PAGE_REPORTS",
    /**
     * Tool to update an existing heartbeat configuration. use after retrieving a heartbeat and choosing which fields to change.
     */
    UPDATE_HEARTBEAT: "BETTER_STACK_UPDATE_HEARTBEAT",
    /**
     * Tool to update an existing heartbeat group. use when you need to modify attributes like name, interval, or pause status.
     */
    UPDATE_HEARTBEAT_GROUP: "BETTER_STACK_UPDATE_HEARTBEAT_GROUP",
    /**
     * Tool to update an existing source group. use when you need to rename or reorder a source group.
     */
    UPDATE_SOURCE_GROUP: "BETTER_STACK_UPDATE_SOURCE_GROUP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BETTER_STACK".
 */
export type BETTER_STACK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BETTER_STACK".
 */
export type BETTER_STACK_TRIGGER_EVENTS = {}
