// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEW_RELIC's NEW_RELIC_CREATE_ALERT_CHANNEL tool input.
 */
type NEW_RELIC_CREATE_ALERT_CHANNEL_INPUT = {
  /**
   * Configuration
   * @description Configuration parameters specific to the channel type.
   */
  configuration?: {
      /**
       * Auth Password
       * @description Password for basic auth in webhook channels.
       * @default null
       */
      auth_password: string | null;
      /**
       * Auth Username
       * @description Username for basic auth in webhook channels.
       * @default null
       */
      auth_username: string | null;
      /**
       * Recipients
       * @description Comma-separated list of email addresses for 'email' channels.
       * @default null
       */
      recipients: string | null;
      /**
       * Url
       * @description Webhook URL for 'webhook' channels.
       * @default null
       */
      url: string | null;
  };
  /**
   * Name
   * @description Human-readable name for the alert channel.
   */
  name?: string;
  /**
   * Type
   * @description Type of the alert channel to create.
   * @enum {string}
   */
  type?: "email" | "slack" | "webhook" | "pagerduty" | "opsgenie" | "victorops";
};

/**
 * Type of NEW_RELIC's NEW_RELIC_CREATE_ALERT_CHANNEL tool output.
 */
type NEW_RELIC_CREATE_ALERT_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel
       * @description Details of the newly created alert channel.
       */
      channel: {
          /**
           * Configuration
           * @description Configuration of the channel.
           */
          configuration: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the alert channel.
           */
          id: number;
          /**
           * Links
           * @description Associated policy links.
           */
          links: {
              /**
               * Policy Ids
               * @description List of associated alert policy IDs.
               */
              policy_ids: number[];
          };
          /**
           * Name
           * @description Name of the alert channel.
           */
          name: string;
          /**
           * Type
           * @description Channel type.
           */
          type: string;
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
 * Type of NEW_RELIC's NEW_RELIC_CREATE_ALERT_POLICY tool input.
 */
type NEW_RELIC_CREATE_ALERT_POLICY_INPUT = {
  /**
   * Incident Preference
   * @description How incidents are created and closed. Allowed values: PER_POLICY, PER_CONDITION, PER_CONDITION_AND_TARGET.
   * @default null
   * @enum {string|null}
   */
  incident_preference: "PER_POLICY" | "PER_CONDITION" | "PER_CONDITION_AND_TARGET" | null;
  /**
   * Name
   * @description The name of the alert policy.
   */
  name?: string;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_CREATE_ALERT_POLICY tool output.
 */
type NEW_RELIC_CREATE_ALERT_POLICY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Policy
       * @description Created alert policy.
       */
      policy: {
          /**
           * Created At
           * @description Timestamp when the alert policy was created.
           */
          created_at: number;
          /**
           * Id
           * @description Unique ID of the alert policy.
           */
          id: number;
          /**
           * Incident Preference
           * @description Incident preference setting.
           */
          incident_preference: string;
          /**
           * Links
           * @description Related links for the policy.
           */
          links: {
              /**
               * Conditions
               * @description A list of condition IDs associated with the policy.
               */
              conditions: number[];
          };
          /**
           * Name
           * @description The name of the alert policy.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the alert policy was last updated.
           */
          updated_at: number;
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
 * Type of NEW_RELIC's NEW_RELIC_DELETE_ALERT_POLICY tool input.
 */
type NEW_RELIC_DELETE_ALERT_POLICY_INPUT = {
  /**
   * Policy Id
   * @description The unique ID of the alert policy to delete
   */
  policy_id?: string;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_DELETE_ALERT_POLICY tool output.
 */
type NEW_RELIC_DELETE_ALERT_POLICY_OUTPUT = {
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
 * Type of NEW_RELIC's NEW_RELIC_GET_ALERT_CHANNELS tool input.
 */
type NEW_RELIC_GET_ALERT_CHANNELS_INPUT = {
  /**
   * Page
   * @description Pagination page number (1-indexed) for results to return
   * @default null
   */
  page: number | null;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_GET_ALERT_CHANNELS tool output.
 */
type NEW_RELIC_GET_ALERT_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of alert channel objects
       */
      channels: {
          /**
           * Configuration
           * @description Configuration settings for the channel
           */
          configuration: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique ID of the alert channel
           */
          id: number;
          /**
           * Links
           * @description Related resource links, such as policy IDs
           */
          links: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name of the alert channel
           */
          name: string;
          /**
           * Type
           * @description Type of the alert channel (e.g., 'email', 'slack')
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
 * Type of NEW_RELIC's NEW_RELIC_GET_ALERT_CONDITIONS tool input.
 */
type NEW_RELIC_GET_ALERT_CONDITIONS_INPUT = {
  /**
   * Policy Id
   * @description ID of the alert policy whose conditions you want to retrieve.
   */
  policy_id?: number;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_GET_ALERT_CONDITIONS tool output.
 */
type NEW_RELIC_GET_ALERT_CONDITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conditions
       * @description Array of alert conditions returned by the API.
       */
      conditions: {
          /**
           * Enabled
           * @description Indicates whether the alert condition is enabled.
           */
          enabled: boolean;
          /**
           * Entities
           * @description List of entity IDs associated with the condition.
           */
          entities: string[];
          /**
           * Id
           * @description Unique identifier of the alert condition.
           */
          id: number;
          /**
           * Metric
           * @description Metric being monitored by the condition.
           */
          metric: string;
          /**
           * Name
           * @description Name of the alert condition.
           */
          name: string;
          /**
           * Terms
           * @description List of terms that define the thresholds for the condition.
           */
          terms: {
              /**
               * Duration
               * @description Duration in minutes that the threshold must be violated to trigger an incident.
               */
              duration: number;
              /**
               * Operator
               * @description Operator used to compare the metric value to the threshold (e.g., 'above', 'below').
               */
              operator: string;
              /**
               * Priority
               * @description Priority of the term (e.g., 'critical', 'warning').
               */
              priority: string;
              /**
               * Threshold
               * @description Value that, when crossed, will trigger an incident.
               */
              threshold: number;
              /**
               * Time Function
               * @description Specifies how many data points must violate the threshold to trigger an incident (e.g., 'all', 'any').
               */
              time_function: string;
          }[];
          /**
           * Type
           * @description Type of the alert condition (e.g., 'apm_app_metric').
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
 * Type of NEW_RELIC's NEW_RELIC_GET_ALERT_POLICIES tool input.
 */
type NEW_RELIC_GET_ALERT_POLICIES_INPUT = {
  /**
   * Filter[Incident Preference]
   * @description Only return policies with this incident preference
   * @default null
   * @enum {string|null}
   */
  "filter[incident_preference]": "PER_POLICY" | "PER_CONDITION" | "PER_CONDITION_AND_TARGET" | null;
  /**
   * Filter[Name]
   * @description Only return policies with this exact name
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page
   * @description Page number of results to return (must be ≥ 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_GET_ALERT_POLICIES tool output.
 */
type NEW_RELIC_GET_ALERT_POLICIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Policies
       * @description List of alert policy objects
       */
      policies: {
          /**
           * Created At
           * @description Creation timestamp (ISO8601)
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the alert policy
           */
          id: number;
          /**
           * Incident Preference
           * @description Incident preference setting for the policy
           */
          incident_preference: string;
          /**
           * Name
           * @description Name of the alert policy
           */
          name: string;
          /**
           * Updated At
           * @description Last update timestamp (ISO8601)
           */
          updated_at: string;
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
 * Type of NEW_RELIC's NEW_RELIC_GET_APPLICATIONS tool input.
 */
type NEW_RELIC_GET_APPLICATIONS_INPUT = {
  /**
   * Host
   * @description Filter by host name (case-insensitive, partial match).
   * @default null
   */
  host: string | null;
  /**
   * Ids
   * @description Comma-separated list of application IDs to filter.
   * @default null
   */
  ids: string | null;
  /**
   * Name
   * @description Filter by application name (case-insensitive, partial match).
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Pagination page number (1-indexed) for results.
   * @default null
   */
  page: number | null;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_GET_APPLICATIONS tool output.
 */
type NEW_RELIC_GET_APPLICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Applications
       * @description List of application summary objects.
       */
      applications: {
          /**
           * Health Status
           * @description Health status of the application (e.g., 'green', 'yellow').
           */
          health_status: string;
          /**
           * Id
           * @description Unique identifier for the application.
           */
          id: number;
          /**
           * Language
           * @description Language agent used in the application.
           */
          language: string;
          /**
           * Last Reported At
           * @description ISO-8601 timestamp of the last recorded report.
           */
          last_reported_at: string;
          /**
           * Name
           * @description Name of the application.
           */
          name: string;
          /**
           * Reporting
           * @description Whether the application is reporting data.
           */
          reporting: boolean;
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
 * Type of NEW_RELIC's NEW_RELIC_GET_BROWSER_APPLICATIONS tool input.
 */
type NEW_RELIC_GET_BROWSER_APPLICATIONS_INPUT = {
  /**
   * Filter[Name]
   * @description Filter browser applications by name (case-insensitive, partial match).
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page
   * @description Pagination page number (1-indexed) for results.
   * @default null
   */
  page: number | null;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_GET_BROWSER_APPLICATIONS tool output.
 */
type NEW_RELIC_GET_BROWSER_APPLICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Browser Applications
       * @description List of browser application summary objects.
       */
      browser_applications: {
          /**
           * Id
           * @description Unique identifier of the browser application.
           */
          id: number;
          /**
           * Links
           * @description Related resource links.
           */
          links: {
              /**
               * Application
               * @description ID of related APM application, if any.
               * @default null
               */
              application: number | null;
              /**
               * Server
               * @description IDs of related servers.
               * @default null
               */
              server: number[] | null;
              /**
               * Servers
               * @description IDs of related servers.
               * @default null
               */
              servers: number[] | null;
          };
          /**
           * Name
           * @description Name of the browser application.
           */
          name: string;
          /**
           * Reporting
           * @description Whether the application is reporting data.
           */
          reporting: boolean;
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
 * Type of NEW_RELIC's NEW_RELIC_UPDATE_ALERT_CHANNEL tool input.
 */
type NEW_RELIC_UPDATE_ALERT_CHANNEL_INPUT = {
  /**
   * Alert Channel Id
   * @description Unique ID of the alert channel to update.
   */
  alert_channel_id?: number;
  /**
   * UpdateAlertChannelConfiguration
   * @description Configuration parameters for updating an existing alert channel. Varies by channel type.
   * @default null
   */
  configuration: {
      /**
       * Auth Password
       * @description Password for HTTP basic auth (webhook channels).
       * @default null
       */
      auth_password: string | null;
      /**
       * Auth Username
       * @description Username for HTTP basic auth (webhook channels).
       * @default null
       */
      auth_username: string | null;
      /**
       * Recipients
       * @description For 'email' channels, comma-separated list of email addresses.
       * @default null
       */
      recipients: string | null;
      /**
       * Url
       * @description Webhook URL for 'webhook' channels.
       * @default null
       */
      url: string | null;
  } | null;
  /**
   * Name
   * @description New human-readable name for the alert channel.
   * @default null
   */
  name: string | null;
  /**
   * Type
   * @description Channel type; provide only to change the type.
   * @default null
   * @enum {string|null}
   */
  type: "email" | "slack" | "webhook" | "pagerduty" | "opsgenie" | "victorops" | null;
};

/**
 * Type of NEW_RELIC's NEW_RELIC_UPDATE_ALERT_CHANNEL tool output.
 */
type NEW_RELIC_UPDATE_ALERT_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alert Channel
       * @description Updated alert channel details.
       */
      alert_channel: {
          /**
           * Configuration
           * @description Channel-specific configuration settings.
           */
          configuration: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Alert channel unique identifier.
           */
          id: number;
          /**
           * Links
           * @description Associated resource links.
           */
          links: {
              /**
               * Policy Ids
               * @description List of related alert policy IDs.
               */
              policy_ids: number[];
          };
          /**
           * Name
           * @description Name of the alert channel.
           */
          name: string;
          /**
           * Type
           * @description Type of the alert channel.
           */
          type: string;
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
 * Type map of all available tool input types for toolkit "NEW_RELIC".
 */
export type NEW_RELIC_TOOL_INPUTS = {
  CREATE_ALERT_CHANNEL: NEW_RELIC_CREATE_ALERT_CHANNEL_INPUT
  CREATE_ALERT_POLICY: NEW_RELIC_CREATE_ALERT_POLICY_INPUT
  DELETE_ALERT_POLICY: NEW_RELIC_DELETE_ALERT_POLICY_INPUT
  GET_ALERT_CHANNELS: NEW_RELIC_GET_ALERT_CHANNELS_INPUT
  GET_ALERT_CONDITIONS: NEW_RELIC_GET_ALERT_CONDITIONS_INPUT
  GET_ALERT_POLICIES: NEW_RELIC_GET_ALERT_POLICIES_INPUT
  GET_APPLICATIONS: NEW_RELIC_GET_APPLICATIONS_INPUT
  GET_BROWSER_APPLICATIONS: NEW_RELIC_GET_BROWSER_APPLICATIONS_INPUT
  UPDATE_ALERT_CHANNEL: NEW_RELIC_UPDATE_ALERT_CHANNEL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEW_RELIC".
 */
export type NEW_RELIC_TOOL_OUTPUTS = {
  CREATE_ALERT_CHANNEL: NEW_RELIC_CREATE_ALERT_CHANNEL_OUTPUT
  CREATE_ALERT_POLICY: NEW_RELIC_CREATE_ALERT_POLICY_OUTPUT
  DELETE_ALERT_POLICY: NEW_RELIC_DELETE_ALERT_POLICY_OUTPUT
  GET_ALERT_CHANNELS: NEW_RELIC_GET_ALERT_CHANNELS_OUTPUT
  GET_ALERT_CONDITIONS: NEW_RELIC_GET_ALERT_CONDITIONS_OUTPUT
  GET_ALERT_POLICIES: NEW_RELIC_GET_ALERT_POLICIES_OUTPUT
  GET_APPLICATIONS: NEW_RELIC_GET_APPLICATIONS_OUTPUT
  GET_BROWSER_APPLICATIONS: NEW_RELIC_GET_BROWSER_APPLICATIONS_OUTPUT
  UPDATE_ALERT_CHANNEL: NEW_RELIC_UPDATE_ALERT_CHANNEL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEW_RELIC toolkit.
 */
export const NEW_RELIC = {
  slug: "new_relic",
  tools: {
    /**
     * Tool to create an alert notification channel. use when you need to register a new endpoint (email, webhook, etc.) for alert notifications.
     */
    CREATE_ALERT_CHANNEL: "NEW_RELIC_CREATE_ALERT_CHANNEL",
    /**
     * Tool to create an alert policy. use when you need to programmatically set up a new alert policy in new relic.
     */
    CREATE_ALERT_POLICY: "NEW_RELIC_CREATE_ALERT_POLICY",
    /**
     * Tool to delete an existing alert policy via rest api. use when you have the policy id and want to remove it via new relic's rest api. use after confirming the policy id exists.
     */
    DELETE_ALERT_POLICY: "NEW_RELIC_DELETE_ALERT_POLICY",
    /**
     * Tool to retrieve a list of alert notification channels. use when you need to list all configured channels after verifying your api key.
     */
    GET_ALERT_CHANNELS: "NEW_RELIC_GET_ALERT_CHANNELS",
    /**
     * Tool to retrieve alert conditions for a specified policy. use after you have the policy id.
     */
    GET_ALERT_CONDITIONS: "NEW_RELIC_GET_ALERT_CONDITIONS",
    /**
     * Tool to retrieve a list of alert policies. use when you need to list existing alert policies with optional filtering and pagination.
     */
    GET_ALERT_POLICIES: "NEW_RELIC_GET_ALERT_POLICIES",
    /**
     * Tool to retrieve a list of new relic applications. use when you need to list all applications or filter by name, host, or ids after authenticating your api key.
     */
    GET_APPLICATIONS: "NEW_RELIC_GET_APPLICATIONS",
    /**
     * Tool to list new relic browser applications. use when you need to retrieve all browser applications or filter by name after authenticating your api key.
     */
    GET_BROWSER_APPLICATIONS: "NEW_RELIC_GET_BROWSER_APPLICATIONS",
    /**
     * Tool to update an existing new relic alert notification channel. use when you need to modify channel settings after verifying its id.
     */
    UPDATE_ALERT_CHANNEL: "NEW_RELIC_UPDATE_ALERT_CHANNEL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEW_RELIC".
 */
export type NEW_RELIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEW_RELIC".
 */
export type NEW_RELIC_TRIGGER_EVENTS = {}
