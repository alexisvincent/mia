// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZYTE_API's ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES tool input.
 */
type ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES tool output.
 */
type ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active Maintenances
       * @description List of currently active (in_progress) scheduled maintenances
       */
      active_maintenances: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the maintenance was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the scheduled maintenance
           */
          id: string;
          /**
           * Impact
           * @description Impact level of the maintenance event
           */
          impact: string;
          /**
           * Monitoring At
           * @description ISO 8601 timestamp when monitoring began, if available
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description Name of the scheduled maintenance event
           */
          name: string;
          /**
           * Resolved At
           * @description ISO 8601 timestamp when the maintenance was resolved, if available
           * @default null
           */
          resolved_at: string | null;
          /**
           * Scheduled For
           * @description ISO 8601 timestamp when the maintenance is scheduled to start
           */
          scheduled_for: string;
          /**
           * Scheduled Until
           * @description ISO 8601 timestamp when the maintenance is scheduled to end
           */
          scheduled_until: string;
          /**
           * Shortlink
           * @description Shortlink URL to the maintenance detail page
           */
          shortlink: string;
          /**
           * Started At
           * @description ISO 8601 timestamp when the maintenance started, if available
           * @default null
           */
          started_at: string | null;
          /**
           * Status
           * @description Current status of the maintenance event
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the maintenance was last updated
           */
          updated_at: string;
          /**
           * Updates
           * @description List of update messages associated with the maintenance
           */
          updates: {
              /**
               * Body
               * @description Update message body
               */
              body: string;
              /**
               * Created At
               * @description ISO 8601 timestamp when the update was created
               */
              created_at: string;
              /**
               * Id
               * @description Unique identifier of the maintenance update
               */
              id: string;
              /**
               * Status
               * @description Status of the maintenance at the time of update
               */
              status: string;
              /**
               * Updated At
               * @description ISO 8601 timestamp when the update was last updated
               * @default null
               */
              updated_at: string | null;
          }[];
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
 * Type of ZYTE_API's ZYTE_API_GET_SCHEDULED_MAINTENANCES tool input.
 */
type ZYTE_API_GET_SCHEDULED_MAINTENANCES_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_GET_SCHEDULED_MAINTENANCES tool output.
 */
type ZYTE_API_GET_SCHEDULED_MAINTENANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scheduled Maintenances
       * @description Array of scheduled maintenances, sorted by scheduled_for descending, limited to 50 items
       */
      scheduled_maintenances: {
          /**
           * Created At
           * @description ISO 8601 created timestamp
           */
          created_at: string;
          /**
           * Id
           * @description Identifier of the maintenance
           */
          id: string;
          /**
           * Impact
           * @description Impact level description
           */
          impact: string;
          /**
           * Monitoring At
           * @description Monitoring start timestamp, if any
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description Maintenance title
           */
          name: string;
          /**
           * Resolved At
           * @description Maintenance resolved timestamp, if any
           * @default null
           */
          resolved_at: string | null;
          /**
           * Scheduled For
           * @description ISO 8601 timestamp for scheduled start
           */
          scheduled_for: string;
          /**
           * Scheduled Until
           * @description ISO 8601 timestamp for scheduled end
           */
          scheduled_until: string;
          /**
           * Shortlink
           * @description URL to maintenance detail
           */
          shortlink: string;
          /**
           * Status
           * @description Current maintenance status
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 updated timestamp
           */
          updated_at: string;
          /**
           * Updates
           * @description List of update objects for the maintenance
           */
          updates: {
              /**
               * Body
               * @description Description body of the update
               */
              body: string;
              /**
               * Created At
               * @description ISO 8601 timestamp of update creation
               */
              created_at: string;
              /**
               * Id
               * @description Identifier of the update
               */
              id: string;
              /**
               * Status
               * @description Status of the update
               */
              status: string;
          }[];
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
 * Type of ZYTE_API's ZYTE_API_GET_UNRESOLVED_INCIDENTS tool input.
 */
type ZYTE_API_GET_UNRESOLVED_INCIDENTS_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_GET_UNRESOLVED_INCIDENTS tool output.
 */
type ZYTE_API_GET_UNRESOLVED_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Incidents
       * @description List of all currently unresolved incidents
       */
      incidents: {
          /**
           * Created At
           * Format: date-time
           * @description Incident creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the incident
           */
          id: string;
          /**
           * Impact
           * @description Impact level of the incident (e.g., 'major')
           */
          impact: string;
          /**
           * Incident Updates
           * @description Chronological list of updates for this incident
           */
          incident_updates?: {
              /**
               * Affected Components
               * @description List of components affected by this update
               */
              affected_components?: {
                  /**
                   * Id
                   * @description Unique identifier of the impacted component
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name of the impacted component
                   */
                  name: string;
                  /**
                   * Status
                   * @description Current status of the impacted component
                   */
                  status: string;
              }[];
              /**
               * Body
               * @description Text content of the update
               */
              body: string;
              /**
               * Created At
               * Format: date-time
               * @description Creation timestamp of the update (ISO 8601)
               */
              created_at: string;
              /**
               * Display At
               * Format: date-time
               * @description When this update should be publicly displayed (ISO 8601)
               */
              display_at: string;
              /**
               * Id
               * @description Unique identifier for this incident update
               */
              id: string;
              /**
               * Status
               * @description Status at this update (e.g., 'investigating')
               */
              status: string;
              /**
               * Updated At
               * Format: date-time
               * @description Last modification timestamp of the update (ISO 8601)
               */
              updated_at: string;
          }[];
          /**
           * Monitoring At
           * Format: date-time
           * @description Timestamp when monitoring began for this incident (ISO 8601)
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description Name/title of the incident
           */
          name: string;
          /**
           * Page Id
           * @description Identifier of the status page where the incident is listed
           */
          page_id: string;
          /**
           * Resolved At
           * Format: date-time
           * @description Timestamp when the incident was resolved (null if unresolved)
           * @default null
           */
          resolved_at: string | null;
          /**
           * Shortlink
           * @description Short URL pointing to the incident details
           */
          shortlink: string;
          /**
           * Started At
           * Format: date-time
           * @description Timestamp when the incident started (ISO 8601)
           */
          started_at: string;
          /**
           * Status
           * @description Current status of the incident (e.g., 'identified')
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description Incident last update timestamp (ISO 8601)
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
 * Type of ZYTE_API's ZYTE_API_LIST_INCIDENTS tool input.
 */
type ZYTE_API_LIST_INCIDENTS_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_LIST_INCIDENTS tool output.
 */
type ZYTE_API_LIST_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Incidents
       * @description Up to 50 of the most recent incidents (both resolved and unresolved)
       */
      incidents: {
          /**
           * Created At
           * @description When the incident was created (ISO 8601 timestamp)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the incident
           */
          id: string;
          /**
           * Impact
           * @description Severity classification (e.g., 'minor', 'major', 'critical')
           */
          impact: string;
          /**
           * Incident Updates
           * @description All updates associated with this incident
           */
          incident_updates?: {
              /**
               * Affected Components
               * @description List of component IDs affected by this update
               */
              affected_components?: string[];
              /**
               * Body
               * @description Text content of the update
               */
              body: string;
              /**
               * Created At
               * @description When the update was created (ISO 8601 timestamp)
               */
              created_at: string;
              /**
               * Display At
               * @description When the update was displayed (ISO 8601 timestamp)
               */
              display_at: string;
              /**
               * Id
               * @description Unique identifier for this update
               */
              id: string;
              /**
               * Status
               * @description Status at the time of this update
               */
              status: string;
              /**
               * Updated At
               * @description When the update was last modified (ISO 8601 timestamp)
               */
              updated_at: string;
          }[];
          /**
           * Monitoring At
           * @description When monitoring began, if set (ISO 8601 timestamp)
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description Title/name of the incident
           */
          name: string;
          /**
           * Resolved At
           * @description When the incident was resolved, if resolved (ISO 8601 timestamp)
           * @default null
           */
          resolved_at: string | null;
          /**
           * Shortlink
           * @description Short URL to the incident details page
           */
          shortlink: string;
          /**
           * Status
           * @description Current status (e.g., 'investigating', 'resolved')
           */
          status: string;
          /**
           * Updated At
           * @description When the incident was last updated (ISO 8601 timestamp)
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
 * Type of ZYTE_API's ZYTE_API_STATUS_SUMMARY tool input.
 */
type ZYTE_API_STATUS_SUMMARY_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_STATUS_SUMMARY tool output.
 */
type ZYTE_API_STATUS_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Components
       * @description List of components and their statuses
       */
      components: {
          /**
           * Created At
           * Format: date-time
           * @description Component creation time (ISO8601)
           */
          created_at: string;
          /**
           * Id
           * @description Component ID
           */
          id: string;
          /**
           * Name
           * @description Component name
           */
          name: string;
          /**
           * Status
           * @description Component status
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description Component last update time (ISO8601)
           */
          updated_at: string;
      }[];
      /**
       * Incidents
       * @description List of unresolved incidents
       */
      incidents: {
          /**
           * Created At
           * Format: date-time
           * @description Incident creation time (ISO8601)
           */
          created_at: string;
          /**
           * Id
           * @description Incident ID
           */
          id: string;
          /**
           * Impact
           * @description Incident impact level
           */
          impact: string;
          /**
           * Name
           * @description Incident title
           */
          name: string;
          /**
           * Status
           * @description Incident status
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description Incident last update time (ISO8601)
           */
          updated_at: string;
      }[];
      /**
       * Page
       * @description Status page details
       */
      page: {
          /**
           * Id
           * @description Page ID
           */
          id: string;
          /**
           * Name
           * @description Page name
           */
          name: string;
          /**
           * Time Zone
           * @description Page time zone
           */
          time_zone: string;
          /**
           * Updated At
           * Format: date-time
           * @description Last update time (ISO8601)
           */
          updated_at: string;
          /**
           * Url
           * @description Page URL
           */
          url: string;
      };
      /**
       * Scheduled Maintenances
       * @description List of scheduled maintenance events
       */
      scheduled_maintenances: {
          /**
           * Id
           * @description Maintenance ID
           */
          id: string;
          /**
           * Name
           * @description Maintenance name
           */
          name: string;
          /**
           * Scheduled For
           * Format: date-time
           * @description Scheduled start time (ISO8601)
           */
          scheduled_for: string;
          /**
           * Scheduled Until
           * Format: date-time
           * @description Scheduled end time (ISO8601)
           */
          scheduled_until: string;
          /**
           * Status
           * @description Maintenance status
           */
          status: string;
      }[];
      /**
       * Status
       * @description Overall status indicator and description
       */
      status: {
          /**
           * Description
           * @description Current status description
           */
          description: string;
          /**
           * Indicator
           * @description Current status indicator
           * @enum {string}
           */
          indicator: "none" | "minor" | "major" | "critical";
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
 * Type of ZYTE_API's ZYTE_API_UPCOMING_MAINTENANCES tool input.
 */
type ZYTE_API_UPCOMING_MAINTENANCES_INPUT = {
  /**
   * Page
   * @description Page number to fetch; must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records per page; must be >= 1
   * @default null
   */
  per_page: number | null;
  /**
   * Sort
   * @description Sort order field, e.g., 'created_at' or '-updated_at' for descending
   * @default null
   */
  sort: string | null;
};

/**
 * Type of ZYTE_API's ZYTE_API_UPCOMING_MAINTENANCES tool output.
 */
type ZYTE_API_UPCOMING_MAINTENANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Incidents
       * @description Array of upcoming scheduled maintenance incidents
       */
      incidents: {
          /**
           * Components
           * @description List of affected component IDs
           */
          components: string[];
          /**
           * Created At
           * @description ISO8601 timestamp when created
           */
          created_at: string;
          /**
           * Id
           * @description Unique incident ID
           */
          id: string;
          /**
           * Impact
           * @description Impact level, e.g., 'maintenance'
           */
          impact: string;
          /**
           * Incident Updates
           * @description Chronological updates posted to this incident
           */
          incident_updates: {
              /**
               * Body
               * @description Details of the update
               */
              body: string;
              /**
               * Created At
               * @description ISO8601 timestamp when this update was posted
               */
              created_at: string;
              /**
               * Id
               * @description Update record ID
               */
              id: string;
              /**
               * Status
               * @description Incident status at time of update
               */
              status: string;
          }[];
          /**
           * Monitoring At
           * @description ISO8601 timestamp when monitoring began
           * @default null
           */
          monitoring_at: string | null;
          /**
           * Name
           * @description Incident title
           */
          name: string;
          /**
           * Resolved At
           * @description ISO8601 timestamp when resolved
           * @default null
           */
          resolved_at: string | null;
          /**
           * Scheduled For
           * @description ISO8601 timestamp when maintenance is scheduled to start
           * @default null
           */
          scheduled_for: string | null;
          /**
           * Scheduled Until
           * @description ISO8601 timestamp when maintenance is scheduled to end
           * @default null
           */
          scheduled_until: string | null;
          /**
           * Shortlink
           * @description Shortlink URL for the incident
           */
          shortlink: string;
          /**
           * Status
           * @description Current status, e.g., 'scheduled'
           */
          status: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when last updated
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
 * Type of ZYTE_API's ZYTE_API_ZYTE_API_COMPONENTS tool input.
 */
type ZYTE_API_ZYTE_API_COMPONENTS_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_ZYTE_API_COMPONENTS tool output.
 */
type ZYTE_API_ZYTE_API_COMPONENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Components
       * @description List of Zyte API service components
       */
      components: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the component was created
           */
          created_at: string;
          /**
           * Description
           * @description Human-readable component description
           * @default null
           */
          description: string | null;
          /**
           * Group Id
           * @description ID of related component group, if any
           * @default null
           */
          group_id: string | null;
          /**
           * Id
           * @description Internal ID of the component
           */
          id: string;
          /**
           * Name
           * @description Name of the component
           */
          name: string;
          /**
           * Only Show If Degraded
           * @description If true, only show this component when it is degraded
           */
          only_show_if_degraded: boolean;
          /**
           * Page Id
           * @description Identifier of the status page housing this component
           */
          page_id: string;
          /**
           * Position
           * @description Sort order position of the component
           */
          position: number;
          /**
           * Showcase
           * @description If true, include this component in the public showcase
           */
          showcase: boolean;
          /**
           * Start Date
           * @description ISO 8601 start date if the component has a planned start
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Current status (e.g., 'operational', 'degraded_performance', 'partial_outage')
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the component was last updated
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
 * Type of ZYTE_API's ZYTE_API_ZYTE_API_STATUS tool input.
 */
type ZYTE_API_ZYTE_API_STATUS_INPUT = object;

/**
 * Type of ZYTE_API's ZYTE_API_ZYTE_API_STATUS tool output.
 */
type ZYTE_API_ZYTE_API_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Components
       * @description List of monitored components
       */
      components: {
          /**
           * Id
           * @description Component identifier
           */
          id: string;
          /**
           * Name
           * @description Component name
           */
          name: string;
          /**
           * Status
           * @description Current status of the component
           */
          status: string;
      }[];
      /**
       * Incidents
       * @description List of current and recent incidents
       */
      incidents: {
          /**
           * Id
           * @description Incident identifier
           */
          id: string;
          /**
           * Name
           * @description Incident name
           */
          name: string;
          /**
           * Status
           * @description Current state of the incident
           */
          status: string;
      }[];
      /**
       * Page
       * @description Meta information about the status page
       */
      page: {
          /**
           * Id
           * @description Identifier for the status page
           */
          id: string;
          /**
           * Name
           * @description Name of the status page
           */
          name: string;
          /**
           * Time Zone
           * @description Time zone of the status page
           */
          time_zone: string;
          /**
           * Updated At
           * Format: date-time
           * @description Last update time for page info
           */
          updated_at: string;
          /**
           * Url
           * Format: uri
           * @description Public URL of the status page
           */
          url: string;
      };
      /**
       * Scheduled Maintenances
       * @description List of upcoming or ongoing maintenance events
       */
      scheduled_maintenances: {
          /**
           * Id
           * @description Maintenance event identifier
           */
          id: string;
          /**
           * Name
           * @description Maintenance event name
           */
          name: string;
          /**
           * Status
           * @description Current maintenance status
           */
          status: string;
      }[];
      /**
       * Status
       * @description Overall service status
       */
      status: {
          /**
           * Description
           * @description Human-readable status description
           */
          description: string;
          /**
           * Indicator
           * @description Overall status indicator
           * @enum {string}
           */
          indicator: "none" | "minor" | "major" | "critical";
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
 * Type map of all available tool input types for toolkit "ZYTE_API".
 */
export type ZYTE_API_TOOL_INPUTS = {
  ACTIVE_SCHEDULED_MAINTENANCES: ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES_INPUT
  GET_SCHEDULED_MAINTENANCES: ZYTE_API_GET_SCHEDULED_MAINTENANCES_INPUT
  GET_UNRESOLVED_INCIDENTS: ZYTE_API_GET_UNRESOLVED_INCIDENTS_INPUT
  LIST_INCIDENTS: ZYTE_API_LIST_INCIDENTS_INPUT
  STATUS_SUMMARY: ZYTE_API_STATUS_SUMMARY_INPUT
  UPCOMING_MAINTENANCES: ZYTE_API_UPCOMING_MAINTENANCES_INPUT
  ZYTE_API_COMPONENTS: ZYTE_API_ZYTE_API_COMPONENTS_INPUT
  ZYTE_API_STATUS: ZYTE_API_ZYTE_API_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZYTE_API".
 */
export type ZYTE_API_TOOL_OUTPUTS = {
  ACTIVE_SCHEDULED_MAINTENANCES: ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES_OUTPUT
  GET_SCHEDULED_MAINTENANCES: ZYTE_API_GET_SCHEDULED_MAINTENANCES_OUTPUT
  GET_UNRESOLVED_INCIDENTS: ZYTE_API_GET_UNRESOLVED_INCIDENTS_OUTPUT
  LIST_INCIDENTS: ZYTE_API_LIST_INCIDENTS_OUTPUT
  STATUS_SUMMARY: ZYTE_API_STATUS_SUMMARY_OUTPUT
  UPCOMING_MAINTENANCES: ZYTE_API_UPCOMING_MAINTENANCES_OUTPUT
  ZYTE_API_COMPONENTS: ZYTE_API_ZYTE_API_COMPONENTS_OUTPUT
  ZYTE_API_STATUS: ZYTE_API_ZYTE_API_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZYTE_API toolkit.
 */
export const ZYTE_API = {
  slug: "zyte_api",
  tools: {
    /**
     * Tool to fetch currently active scheduled maintenances. use when you need to know ongoing maintenance events.
     */
    ACTIVE_SCHEDULED_MAINTENANCES: "ZYTE_API_ACTIVE_SCHEDULED_MAINTENANCES",
    /**
     * Tool to get the 50 most recent scheduled maintenances (upcoming and completed) from zyte status api. use after confirming you need the latest maintenance schedule for monitoring.
     */
    GET_SCHEDULED_MAINTENANCES: "ZYTE_API_GET_SCHEDULED_MAINTENANCES",
    /**
     * Tool to retrieve unresolved incidents from zyte status api. use when you need to check currently open incidents.
     */
    GET_UNRESOLVED_INCIDENTS: "ZYTE_API_GET_UNRESOLVED_INCIDENTS",
    /**
     * Tool to list the 50 most recent incidents on the zyte api status page. use after needing current api health or incident summaries.
     */
    LIST_INCIDENTS: "ZYTE_API_LIST_INCIDENTS",
    /**
     * Tool to get a summary of status indicators, component statuses, unresolved incidents, and scheduled maintenances. use when you need an overview of the current zyte service health.
     */
    STATUS_SUMMARY: "ZYTE_API_STATUS_SUMMARY",
    /**
     * Tool to retrieve upcoming scheduled maintenance windows. use when you need to list upcoming maintenance events from the zyte api status page.
     */
    UPCOMING_MAINTENANCES: "ZYTE_API_UPCOMING_MAINTENANCES",
    /**
     * Tool to fetch the list of zyte api service components and their statuses. use when you need a current snapshot of component health from the zyte status page.
     */
    ZYTE_API_COMPONENTS: "ZYTE_API_ZYTE_API_COMPONENTS",
    /**
     * Tool to retrieve the overall status rollup for the zyte api. use when you need a current summary of service health before proceeding.
     */
    ZYTE_API_STATUS: "ZYTE_API_ZYTE_API_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZYTE_API".
 */
export type ZYTE_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZYTE_API".
 */
export type ZYTE_API_TRIGGER_EVENTS = {}
