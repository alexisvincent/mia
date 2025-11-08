// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PINGDOM's PINGDOM_GET_ACTIONS_ALERTS tool input.
 */
type PINGDOM_GET_ACTIONS_ALERTS_INPUT = {
  /**
   * Checkids
   * @description Filter by check IDs
   * @default null
   */
  checkids: number[] | null;
  /**
   * Endtime
   * @description Unix epoch end time filter (seconds)
   * @default null
   */
  endtime: number | null;
  /**
   * Limit
   * @description Maximum number of actions to return, between 1 and 1000
   * @default null
   */
  limit: number | null;
  /**
   * Start
   * @description Starting index for pagination, must be >= 0
   * @default null
   */
  start: number | null;
  /**
   * Starttime
   * @description Unix epoch start time filter (seconds)
   * @default null
   */
  starttime: number | null;
  /**
   * Status
   * @description Filter by action statuses
   * @default null
   */
  status: string[] | null;
  /**
   * Userids
   * @description Filter by user IDs
   * @default null
   */
  userids: number[] | null;
  /**
   * Via
   * @description Filter by delivery channels
   * @default null
   */
  via: string[] | null;
};

/**
 * Type of PINGDOM's PINGDOM_GET_ACTIONS_ALERTS tool output.
 */
type PINGDOM_GET_ACTIONS_ALERTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actions
       * @description List of alert actions
       */
      actions: {
          /**
           * Id
           * @description Unique identifier for the action
           */
          id: number;
          /**
           * Integration Id
           * @description ID of the integration, if applicable
           * @default null
           */
          integration_id: number | null;
          /**
           * Integration Type
           * @description Type of integration, if applicable
           * @default null
           */
          integration_type: string | null;
          /**
           * Name
           * @description Name of the action
           */
          name: string;
          /**
           * Paused
           * @description Indicates whether the action is paused
           */
          paused: boolean;
          /**
           * Type
           * @description Type of the action
           */
          type: string;
      }[];
      /**
       * Total
       * @description Total number of alert actions available
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
 * Type of PINGDOM's PINGDOM_GET_CHECKS_LIST tool input.
 */
type PINGDOM_GET_CHECKS_LIST_INPUT = {
  /**
   * Include Tags
   * @description If true, include tag details with each check
   * @default null
   */
  include_tags: boolean | null;
  /**
   * Integrationids
   * @description Comma-separated list of integration IDs for filtering
   * @default null
   */
  integrationids: string | null;
  /**
   * Limit
   * @description Maximum number of checks to return (1-250)
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter checks by name (partial match allowed)
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Index of the first check to return for pagination (zero-based)
   * @default null
   */
  offset: number | null;
  /**
   * Probeids
   * @description Comma-separated list of probe IDs for filtering checks
   * @default null
   */
  probeids: string | null;
  /**
   * Status
   * @description Filter checks by status (up, down, paused)
   * @default null
   */
  status: string | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter checks
   * @default null
   */
  tags: string | null;
  /**
   * Team
   * @description Filter checks by team ID
   * @default null
   */
  team: number | null;
  /**
   * Transaction
   * @description If true, only return transaction checks
   * @default null
   */
  transaction: boolean | null;
  /**
   * Type
   * @description Type of check to filter (e.g., http, tcp, udp)
   * @default null
   */
  type: string | null;
};

/**
 * Type of PINGDOM's PINGDOM_GET_CHECKS_LIST tool output.
 */
type PINGDOM_GET_CHECKS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Checks
       * @description List of uptime checks
       */
      checks: {
          /**
           * Hostname
           * @description The monitored hostname or IP address
           */
          hostname: string;
          /**
           * Id
           * @description Unique identifier of the check
           */
          id: number;
          /**
           * Name
           * @description Human-readable name of the check
           */
          name: string;
          /**
           * Resolution
           * @description Resolution of the check in minutes
           */
          resolution: number;
          /**
           * Status
           * @description Current status of the check (up/down/paused)
           */
          status: string;
          /**
           * Tags
           * @description List of tags associated with the check, if include_tags is true
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description Type of the check (http, tcp, etc)
           */
          type: string;
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Maximum number of checks returned per page
           */
          limit: number;
          /**
           * Offset
           * @description Index of the first check returned
           */
          offset: number;
          /**
           * Total
           * @description Total number of checks available
           */
          total: number;
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
 * Type of PINGDOM's PINGDOM_GET_CONTACTS tool input.
 */
type PINGDOM_GET_CONTACTS_INPUT = object;

/**
 * Type of PINGDOM's PINGDOM_GET_CONTACTS tool output.
 */
type PINGDOM_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description A list of all alerting contacts
       */
      contacts: {
          /**
           * Android
           * @description Android push notification token
           * @default null
           */
          android: string | null;
          /**
           * Email
           * @description Email address for notifications
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique contact identifier
           */
          id: number;
          /**
           * Integrations
           * @description List of other configured integrations/targets
           */
          integrations?: {
              /**
               * Id
               * @description Unique identifier of the integration
               */
              id: number;
              /**
               * Name
               * @description Human-readable name of the integration
               */
              name: string;
              /**
               * Type
               * @description Type of the integration/notification target
               */
              type: string;
          }[];
          /**
           * Iphone
           * @description iPhone push notification token
           * @default null
           */
          iphone: string | null;
          /**
           * Name
           * @description Contact's name
           */
          name: string;
          /**
           * Paused
           * @description Whether notifications for this contact are paused
           */
          paused: boolean;
          /**
           * Sms
           * @description Phone number for SMS notifications
           * @default null
           */
          sms: string | null;
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
 * Type of PINGDOM's PINGDOM_GET_CONTACT_DETAILS tool input.
 */
type PINGDOM_GET_CONTACT_DETAILS_INPUT = {
  /**
   * Contactid
   * @description Unique identifier of the alerting contact to retrieve
   */
  contactid?: number;
};

/**
 * Type of PINGDOM's PINGDOM_GET_CONTACT_DETAILS tool output.
 */
type PINGDOM_GET_CONTACT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Detailed information of the requested contact
       */
      contact: {
          /**
           * Android
           * @description Android push notification token
           * @default null
           */
          android: string | null;
          /**
           * Country Code
           * @description International country calling code for SMS
           * @default null
           */
          country_code: string | null;
          /**
           * Direct Country Code
           * @description Country code for direct phone calls
           * @default null
           */
          direct_country_code: string | null;
          /**
           * Direct Phone
           * @description Direct phone number for voice notifications
           * @default null
           */
          direct_phone: string | null;
          /**
           * Email
           * @description Email address for notifications
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique contact identifier
           */
          id: number;
          /**
           * Integrations
           * @description List of other configured integrations/targets
           */
          integrations?: {
              /**
               * Integration Id
               * @description Unique identifier of the integration target
               */
              integration_id: number;
              /**
               * Type
               * @description Type of the integration/notification target
               */
              type: string;
          }[];
          /**
           * Iphone
           * @description iPhone push notification token
           * @default null
           */
          iphone: string | null;
          /**
           * Name
           * @description Name of the contact
           */
          name: string;
          /**
           * Paused
           * @description Whether notifications for this contact are paused
           */
          paused: boolean;
          /**
           * Sms
           * @description Phone number for SMS notifications
           * @default null
           */
          sms: string | null;
          /**
           * Twitter Enabled
           * @description Whether Twitter notifications are enabled
           * @default null
           */
          twitter_enabled: boolean | null;
          /**
           * Twitter User
           * @description Twitter username for notifications
           * @default null
           */
          twitter_user: string | null;
          /**
           * Webhook Url
           * @description Webhook URL for notifications
           * @default null
           */
          webhook_url: string | null;
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
 * Type of PINGDOM's PINGDOM_GET_CREDITS tool input.
 */
type PINGDOM_GET_CREDITS_INPUT = object;

/**
 * Type of PINGDOM's PINGDOM_GET_CREDITS tool output.
 */
type PINGDOM_GET_CREDITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Account credit and rate-limit information
       */
      credits: {
          /**
           * Check Limit
           * @description Number of checks per minute allowed by your account
           */
          check_limit: number;
          /**
           * Check Remaining
           * @description Remaining checks allowed in the current minute
           */
          check_remaining: number;
          /**
           * Limit
           * @description Total API requests allowed per minute by your account
           */
          limit: number;
          /**
           * Remaining
           * @description Remaining API requests for this minute
           */
          remaining: number;
          /**
           * Reset
           * @description Seconds until the rate limit is reset
           */
          reset: number;
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
 * Type of PINGDOM's PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES tool input.
 */
type PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES_INPUT = {
  /**
   * From Time
   * @description Unix timestamp marking the start of the time range to retrieve occurrences
   * @default null
   */
  from_time: number | null;
  /**
   * Limit
   * @description Maximum number of occurrences to return
   * @default null
   */
  limit: number | null;
  /**
   * Maintenancewindowid
   * @description Filter occurrences by a specific maintenance window ID
   * @default null
   */
  maintenancewindowid: number | null;
  /**
   * Offset
   * @description Start listing from this occurrence offset
   * @default null
   */
  offset: number | null;
  /**
   * To Time
   * @description Unix timestamp marking the end of the time range for occurrences
   * @default null
   */
  to_time: number | null;
};

/**
 * Type of PINGDOM's PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES tool output.
 */
type PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Occurrences
       * @description List of maintenance occurrences
       */
      occurrences: {
          /**
           * Created
           * @description Creation timestamp (Unix epoch)
           */
          created: number;
          /**
           * Endtime
           * @description End time of the occurrence (Unix timestamp)
           */
          endtime: number;
          /**
           * Id
           * @description Unique occurrence ID
           */
          id: number;
          /**
           * Lastmodified
           * @description Last modification timestamp (Unix epoch)
           */
          lastmodified: number;
          /**
           * Starttime
           * @description Start time of the occurrence (Unix timestamp)
           */
          starttime: number;
          /**
           * Status
           * @description Status of the occurrence, e.g., 'scheduled', 'completed'
           */
          status: string;
          /**
           * Windowid
           * @description Maintenance window ID the occurrence belongs to
           */
          windowid: number;
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
 * Type of PINGDOM's PINGDOM_GET_MAINTENANCE_WINDOWS tool input.
 */
type PINGDOM_GET_MAINTENANCE_WINDOWS_INPUT = {
  /**
   * From Time
   * @description Only maintenance windows starting after this Unix timestamp
   * @default null
   */
  from_time: number | null;
  /**
   * Limit
   * @description Number of maintenance windows per page (1-1000)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination (zero-based)
   * @default null
   */
  offset: number | null;
  /**
   * To Time
   * @description Only maintenance windows starting before this Unix timestamp
   * @default null
   */
  to_time: number | null;
};

/**
 * Type of PINGDOM's PINGDOM_GET_MAINTENANCE_WINDOWS tool output.
 */
type PINGDOM_GET_MAINTENANCE_WINDOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Maintenance
       * @description List of maintenance windows
       */
      maintenance: {
          /**
           * Checks
           * @description List of check IDs affected by this maintenance window
           */
          checks: number[];
          /**
           * Created
           * @description Creation timestamp as Unix timestamp
           */
          created: number;
          /**
           * Description
           * @description Description of the maintenance window
           */
          description: string;
          /**
           * From Time
           * @description Start time as Unix timestamp
           */
          from_time: number;
          /**
           * Id
           * @description Unique ID of the maintenance window
           */
          id: number;
          /**
           * Modified
           * @description Last modified timestamp as Unix timestamp
           */
          modified: number;
          /**
           * Repeat
           * @description Repeat pattern, e.g., 'none', 'daily', 'weekly'
           * @default null
           */
          repeat: string | null;
          /**
           * Timezone
           * @description Timezone of the maintenance window
           */
          timezone: string;
          /**
           * To Time
           * @description End time as Unix timestamp
           */
          to_time: number;
          /**
           * Type
           * @description Type of maintenance window ('oneoff' or 'recurring')
           */
          type: string;
      }[];
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Offset
           * @description Offset for pagination (zero-based)
           */
          offset: number;
          /**
           * Total
           * @description Total number of maintenance windows available
           */
          total: number;
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
 * Type of PINGDOM's PINGDOM_GET_PROBES tool input.
 */
type PINGDOM_GET_PROBES_INPUT = object;

/**
 * Type of PINGDOM's PINGDOM_GET_PROBES tool output.
 */
type PINGDOM_GET_PROBES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Probes
       * @description List of probe servers
       */
      probes: {
          /**
           * City
           * @description City where the probe is located
           */
          city: string;
          /**
           * Country
           * @description Country code (ISO 3166-1 alpha-2)
           */
          country: string;
          /**
           * Hostname
           * @description Hostname or IP address of the probe
           */
          hostname: string;
          /**
           * Id
           * @description Unique identifier of the probe
           */
          id: number;
          /**
           * Ipv4
           * @description IPv4 address of the probe
           * @default null
           */
          ipv4: string | null;
          /**
           * Ipv6
           * @description IPv6 address of the probe
           * @default null
           */
          ipv6: string | null;
          /**
           * Name
           * @description Name of the probe
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
 * Type of PINGDOM's PINGDOM_GET_REFERENCE_DATA tool input.
 */
type PINGDOM_GET_REFERENCE_DATA_INPUT = object;

/**
 * Type of PINGDOM's PINGDOM_GET_REFERENCE_DATA tool output.
 */
type PINGDOM_GET_REFERENCE_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actions
       * @description List of available action types
       */
      actions: {
          /**
           * Type
           * @description Action type identifier
           */
          type: string;
      }[];
      /**
       * Contacttypes
       * @description List of contact types
       */
      contacttypes: {
          /**
           * Type
           * @description Contact type identifier
           */
          type: string;
      }[];
      /**
       * Integrationtypes
       * @description List of integration types
       */
      integrationtypes: {
          /**
           * Type
           * @description Integration type identifier
           */
          type: string;
      }[];
      /**
       * Probes
       * @description List of Pingdom probe servers
       */
      probes: {
          /**
           * City
           * @description City where the probe is located
           */
          city: string;
          /**
           * Country
           * @description Country code (ISO 3166-1 alpha-2)
           */
          country: string;
          /**
           * Hostname
           * @description Hostname or IP address of the probe
           */
          hostname: string;
          /**
           * Id
           * @description Unique identifier of the probe
           */
          id: number;
          /**
           * Ipv4
           * @description IPv4 address of the probe
           * @default null
           */
          ipv4: string | null;
          /**
           * Ipv6
           * @description IPv6 address of the probe
           * @default null
           */
          ipv6: string | null;
          /**
           * Name
           * @description Name of the probe
           */
          name: string;
      }[];
      /**
       * Roles
       * @description List of user roles
       */
      roles: {
          /**
           * Id
           * @description Unique role identifier
           */
          id: number;
          /**
           * Name
           * @description Role name
           */
          name: string;
      }[];
      /**
       * States
       * @description List of possible check states
       */
      states: {
          /**
           * State
           * @description Check state name, e.g., 'up', 'down', 'paused'
           */
          state: string;
      }[];
      /**
       * Timezones
       * @description List of supported time zones
       */
      timezones: {
          /**
           * Timezone
           * @description IANA time zone identifier, e.g., 'Europe/London'
           */
          timezone: string;
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
 * Type of PINGDOM's PINGDOM_GET_SINGLE_CHECK tool input.
 */
type PINGDOM_GET_SINGLE_CHECK_INPUT = {
  /**
   * Host
   * @description Hostname or IP address to test
   */
  host?: string;
  /**
   * Port
   * @description Port number for tcp/udp checks (1-65535)
   * @default null
   */
  port: number | null;
  /**
   * Probeids
   * @description List of Pingdom probe IDs to execute the check from
   * @default null
   */
  probeids: number[] | null;
  /**
   * Type
   * @description Type of check to perform
   * @enum {string}
   */
  type?: "ping" | "http" | "tcp" | "udp" | "dns";
  /**
   * Url
   * @description Full URL path for HTTP checks (e.g., '/status')
   * @default null
   */
  url: string | null;
};

/**
 * Type of PINGDOM's PINGDOM_GET_SINGLE_CHECK tool output.
 */
type PINGDOM_GET_SINGLE_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Single
       * @description List of results from each specified probe
       */
      single: {
          /**
           * Probe
           * @description Name or location of the probe server
           */
          probe: string;
          /**
           * Probeid
           * @description ID of the Pingdom probe that ran the check
           */
          probeid: number;
          /**
           * Responsecode
           * @description HTTP response code for HTTP checks (if applicable)
           * @default null
           */
          responsecode: number | null;
          /**
           * Status
           * @description Result status of the check (up/down/error)
           */
          status: string;
          /**
           * Time
           * @description Response time in milliseconds
           */
          time: number;
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
 * Type of PINGDOM's PINGDOM_GET_TEAMS tool input.
 */
type PINGDOM_GET_TEAMS_INPUT = object;

/**
 * Type of PINGDOM's PINGDOM_GET_TEAMS tool output.
 */
type PINGDOM_GET_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Number of records per page
       */
      limit: number;
      /**
       * More
       * @description Whether more teams exist (pagination)
       */
      more: boolean;
      /**
       * Offset
       * @description Offset of the records returned
       */
      offset: number;
      /**
       * Teams
       * @description List of alerting teams
       */
      teams: {
          /**
           * Id
           * @description Unique team identifier
           */
          id: number;
          /**
           * Name
           * @description Name of the team
           */
          name: string;
          /**
           * Users
           * @description List of users belonging to the team
           */
          users: {
              /**
               * Id
               * @description User's unique identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the user
               */
              name: string;
          }[];
      }[];
      /**
       * Total
       * @description Total number of teams
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
 * Type of PINGDOM's PINGDOM_GET_TEAM_DETAILS tool input.
 */
type PINGDOM_GET_TEAM_DETAILS_INPUT = {
  /**
   * Teamid
   * @description Unique identifier of the Pingdom alerting team
   */
  teamid?: number;
};

/**
 * Type of PINGDOM's PINGDOM_GET_TEAM_DETAILS tool output.
 */
type PINGDOM_GET_TEAM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Team
       * @description Details of the requested alerting team
       */
      team: {
          /**
           * Id
           * @description Unique team identifier
           */
          id: number;
          /**
           * Integrations
           * @description List of integrations associated with the team
           */
          integrations: {
              /**
               * Id
               * @description Integration unique identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the integration
               */
              name: string;
              /**
               * Type
               * @description Type of the integration
               */
              type: string;
          }[];
          /**
           * Members
           * @description List of users belonging to the team
           */
          members: {
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Id
               * @description User's unique identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the user
               */
              name: string;
          }[];
          /**
           * Name
           * @description Name of the team
           */
          name: string;
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
 * Type of PINGDOM's PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST tool input.
 */
type PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST_INPUT = {
  /**
   * Limit
   * @description Maximum number of transaction checks to return (1-1000)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based index to start returning transaction checks from
   * @default null
   */
  offset: number | null;
};

/**
 * Type of PINGDOM's PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST tool output.
 */
type PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Checks
       * @description List of configured transaction (TMS) checks
       */
      checks: {
          /**
           * Id
           * @description Unique identifier of the transaction check
           */
          id: number;
          /**
           * Name
           * @description Name of the transaction check
           */
          name: string;
          /**
           * Status
           * @description Current status of the check (e.g., 'up', 'down')
           */
          status: string;
          /**
           * Type
           * @description Type of check (e.g., 'transaction')
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
 * Type map of all available tool input types for toolkit "PINGDOM".
 */
export type PINGDOM_TOOL_INPUTS = {
  GET_ACTIONS_ALERTS: PINGDOM_GET_ACTIONS_ALERTS_INPUT
  GET_CHECKS_LIST: PINGDOM_GET_CHECKS_LIST_INPUT
  GET_CONTACTS: PINGDOM_GET_CONTACTS_INPUT
  GET_CONTACT_DETAILS: PINGDOM_GET_CONTACT_DETAILS_INPUT
  GET_CREDITS: PINGDOM_GET_CREDITS_INPUT
  GET_LIST_MAINTENANCE_OCCURRENCES: PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES_INPUT
  GET_MAINTENANCE_WINDOWS: PINGDOM_GET_MAINTENANCE_WINDOWS_INPUT
  GET_PROBES: PINGDOM_GET_PROBES_INPUT
  GET_REFERENCE_DATA: PINGDOM_GET_REFERENCE_DATA_INPUT
  GET_SINGLE_CHECK: PINGDOM_GET_SINGLE_CHECK_INPUT
  GET_TEAMS: PINGDOM_GET_TEAMS_INPUT
  GET_TEAM_DETAILS: PINGDOM_GET_TEAM_DETAILS_INPUT
  GET_TMS_TRANSACTION_CHECKS_LIST: PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PINGDOM".
 */
export type PINGDOM_TOOL_OUTPUTS = {
  GET_ACTIONS_ALERTS: PINGDOM_GET_ACTIONS_ALERTS_OUTPUT
  GET_CHECKS_LIST: PINGDOM_GET_CHECKS_LIST_OUTPUT
  GET_CONTACTS: PINGDOM_GET_CONTACTS_OUTPUT
  GET_CONTACT_DETAILS: PINGDOM_GET_CONTACT_DETAILS_OUTPUT
  GET_CREDITS: PINGDOM_GET_CREDITS_OUTPUT
  GET_LIST_MAINTENANCE_OCCURRENCES: PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES_OUTPUT
  GET_MAINTENANCE_WINDOWS: PINGDOM_GET_MAINTENANCE_WINDOWS_OUTPUT
  GET_PROBES: PINGDOM_GET_PROBES_OUTPUT
  GET_REFERENCE_DATA: PINGDOM_GET_REFERENCE_DATA_OUTPUT
  GET_SINGLE_CHECK: PINGDOM_GET_SINGLE_CHECK_OUTPUT
  GET_TEAMS: PINGDOM_GET_TEAMS_OUTPUT
  GET_TEAM_DETAILS: PINGDOM_GET_TEAM_DETAILS_OUTPUT
  GET_TMS_TRANSACTION_CHECKS_LIST: PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PINGDOM toolkit.
 */
export const PINGDOM = {
  slug: "pingdom",
  tools: {
    /**
     * Tool to retrieve a list of alert actions for your pingdom account. use when you need to fetch actions with optional filters: pagination, check ids, user ids, status, via channel, or time range.
     */
    GET_ACTIONS_ALERTS: "PINGDOM_GET_ACTIONS_ALERTS",
    /**
     * Tool to retrieve an overview list of all uptime checks with optional filters and pagination. use when you need to fetch checks after configuring probes or tags.
     */
    GET_CHECKS_LIST: "PINGDOM_GET_CHECKS_LIST",
    /**
     * Tool to retrieve all alerting contacts. use when you need to list every contact along with their notification targets after establishing a pingdom session.
     */
    GET_CONTACTS: "PINGDOM_GET_CONTACTS",
    /**
     * Tool to fetch detailed info of a specific pingdom alerting contact. use when you need full configuration of a contact’s notification methods by contact id.
     */
    GET_CONTACT_DETAILS: "PINGDOM_GET_CONTACT_DETAILS",
    /**
     * Tool to retrieve account credit and rate-limit information. use when you need to check remaining checks and api credits before proceeding with further requests.
     */
    GET_CREDITS: "PINGDOM_GET_CREDITS",
    /**
     * Tool to list maintenance occurrences. use when you need occurrences filtered by time range or a specific maintenance window id.
     */
    GET_LIST_MAINTENANCE_OCCURRENCES: "PINGDOM_GET_LIST_MAINTENANCE_OCCURRENCES",
    /**
     * Tool to retrieve a list of maintenance windows. use when you need to list user's maintenance windows with optional pagination and time range filters.
     */
    GET_MAINTENANCE_WINDOWS: "PINGDOM_GET_MAINTENANCE_WINDOWS",
    /**
     * Tool to retrieve all pingdom probe servers. use when you need to list available probes for uptime or transaction checks.
     */
    GET_PROBES: "PINGDOM_GET_PROBES",
    /**
     * Tool to retrieve pingdom reference data including time zones, states, probes, actions, roles, contact types, and integration types. use when you need account-wide reference lists before configuring checks.
     */
    GET_REFERENCE_DATA: "PINGDOM_GET_REFERENCE_DATA",
    /**
     * Tool to perform a single pingdom check. use when you need an immediate test of a host or url from specific probes. example: "perform single check on example.com with http type".
     */
    GET_SINGLE_CHECK: "PINGDOM_GET_SINGLE_CHECK",
    /**
     * Tool to retrieve all alerting teams and their members. use after authenticating to pingdom to manage team configurations.
     */
    GET_TEAMS: "PINGDOM_GET_TEAMS",
    /**
     * Tool to fetch detailed information for a specific alerting team. use after listing teams to get full members and integrations details.
     */
    GET_TEAM_DETAILS: "PINGDOM_GET_TEAM_DETAILS",
    /**
     * Tool to list all transaction (tms) checks. use when you need an overview of all scripted or recorded checks.
     */
    GET_TMS_TRANSACTION_CHECKS_LIST: "PINGDOM_GET_TMS_TRANSACTION_CHECKS_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PINGDOM".
 */
export type PINGDOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PINGDOM".
 */
export type PINGDOM_TRIGGER_EVENTS = {}
