// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEON's NEON_ACCESS_PROJECT_DETAILS_BY_ID tool input.
 */
type NEON_ACCESS_PROJECT_DETAILS_BY_ID_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_ACCESS_PROJECT_DETAILS_BY_ID tool output.
 */
type NEON_ACCESS_PROJECT_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT tool input.
 */
type NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT_INPUT = {
  /**
   * Branch Id
   * @description Branch ID
   */
  branch_id?: string;
  /**
   * Jwks Url
   * @description The URL that lists the JWKS
   */
  jwks_url?: string;
  /**
   * Jwt Audience
   * @description The name of the required JWT Audience to be used
   */
  jwt_audience?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Provider Name
   * @description The name of the authentication provider (e.g., Clerk, Stytch, Auth0)
   */
  provider_name?: string;
  /**
   * Role Names
   * @description The roles the JWKS should be mapped to
   */
  role_names?: string[];
};

/**
 * Type of NEON's NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT tool output.
 */
type NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_ADD_PROJECT_EMAIL_PERMISSION tool input.
 */
type NEON_ADD_PROJECT_EMAIL_PERMISSION_INPUT = {
  /**
   * Email
   * @description Email
   */
  email?: string;
  /**
   * Project Id
   * @description Project Id
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_ADD_PROJECT_EMAIL_PERMISSION tool output.
 */
type NEON_ADD_PROJECT_EMAIL_PERMISSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_ADD_ROLE_TO_BRANCH tool input.
 */
type NEON_ADD_ROLE_TO_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Role  Name
   * @description The role name. Cannot exceed 63 bytes in length.
   */
  role__name?: string;
};

/**
 * Type of NEON's NEON_ADD_ROLE_TO_BRANCH tool output.
 */
type NEON_ADD_ROLE_TO_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_API_KEY_FOR_ORGANIZATION tool input.
 */
type NEON_CREATE_API_KEY_FOR_ORGANIZATION_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_CREATE_API_KEY_FOR_ORGANIZATION tool output.
 */
type NEON_CREATE_API_KEY_FOR_ORGANIZATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_BRANCH_DATABASE tool input.
 */
type NEON_CREATE_BRANCH_DATABASE_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Database  Name
   * @description The name of the datbase
   */
  database__name?: string;
  /**
   * Database  Owner  Name
   * @description The name of the role that owns the database
   */
  database__owner__name?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_CREATE_BRANCH_DATABASE tool output.
 */
type NEON_CREATE_BRANCH_DATABASE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_COMPUTE_ENDPOINT tool input.
 */
type NEON_CREATE_COMPUTE_ENDPOINT_INPUT = {
  /**
   * Endpoint  Autoscaling  Limit  Max  Cu
   * @description Autoscaling Limit Max Cu
   */
  endpoint__autoscaling__limit__max__cu?: number;
  /**
   * Endpoint  Autoscaling  Limit  Min  Cu
   * @description Autoscaling Limit Min Cu
   */
  endpoint__autoscaling__limit__min__cu?: number;
  /**
   * Endpoint  Branch  Id
   * @description The ID of the branch the compute endpoint will be associated with
   */
  endpoint__branch__id?: string;
  /**
   * Endpoint  Disabled
   * @description Whether to restrict connections to the compute endpoint. Enabling this option schedules a suspend compute operation. A disabled compute endpoint cannot be enabled by a connection or console action. However, the compute endpoint is periodically enabled by check_availability operations.
   */
  endpoint__disabled?: boolean;
  /**
   * Endpoint  Passwordless  Access
   * @description NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.
   */
  endpoint__passwordless__access?: boolean;
  /**
   * Endpoint  Pooler  Enabled
   * @description Whether to enable connection pooling for the compute endpoint
   */
  endpoint__pooler__enabled?: boolean;
  /**
   * Endpoint  Pooler  Mode
   * @description The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.
   * @enum {string}
   */
  endpoint__pooler__mode?: "transaction";
  /**
   * Endpoint  Provisioner
   * @description The Neon compute provisioner. Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling. Provisioner can be one of the following values: * k8s-pod * k8s-neonvm Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.
   */
  endpoint__provisioner?: string;
  /**
   * Endpoint  Region  Id
   * @description The region where the compute endpoint will be created. Only the project"s `region_id` is permitted.
   */
  endpoint__region__id?: string;
  /**
   * Endpoint  Settings  Pg  Settings
   * @description A raw representation of Postgres settings
   */
  endpoint__settings__pg__settings?: {
      [key: string]: string;
  };
  /**
   * Endpoint  Settings  Pgbouncer  Settings
   * @description A raw representation of PgBouncer settings
   */
  endpoint__settings__pgbouncer__settings?: {
      [key: string]: string;
  };
  /**
   * Endpoint  Suspend  Timeout  Seconds
   * @description Duration of inactivity in seconds after which the compute endpoint is automatically suspended. The value `0` means use the global default. The value `-1` means never suspend. The default value is `300` seconds (5 minutes). The minimum value is `60` seconds (1 minute). The maximum value is `604800` seconds (1 week). For more information, see [Auto-suspend configuration](https://neon.tech/docs/manage/endpoints#auto-suspend-configuration).
   */
  endpoint__suspend__timeout__seconds?: number;
  /**
   * Endpoint  Type
   * @description The compute endpoint type. Either `read_write` or `read_only`.
   * @enum {string}
   */
  endpoint__type?: "read_only" | "read_write";
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_CREATE_COMPUTE_ENDPOINT tool output.
 */
type NEON_CREATE_COMPUTE_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_NEW_API_KEY tool input.
 */
type NEON_CREATE_NEW_API_KEY_INPUT = {
  /**
   * Key Name
   * @description A user-specified API key name. This value is required when creating an API key.
   */
  key_name?: string;
};

/**
 * Type of NEON's NEON_CREATE_NEW_API_KEY tool output.
 */
type NEON_CREATE_NEW_API_KEY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_NEW_PROJECT_BRANCH tool input.
 */
type NEON_CREATE_NEW_PROJECT_BRANCH_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_CREATE_NEW_PROJECT_BRANCH tool output.
 */
type NEON_CREATE_NEW_PROJECT_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS tool input.
 */
type NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS_INPUT = {
  /**
   * Project  Autoscaling  Limit  Max  Cu
   * @description Autoscaling Limit Max Cu
   */
  project__autoscaling__limit__max__cu?: number;
  /**
   * Project  Autoscaling  Limit  Min  Cu
   * @description Autoscaling Limit Min Cu
   */
  project__autoscaling__limit__min__cu?: number;
  /**
   * Project  Branch  Database  Name
   * @description The database name. If not specified, the default database name, `neondb`, will be used.
   */
  project__branch__database__name?: string;
  /**
   * Project  Branch  Name
   * @description The default branch name. If not specified, the default branch name, `main`, will be used.
   */
  project__branch__name?: string;
  /**
   * Project  Branch  Role  Name
   * @description The role name. If not specified, the default role name, `{database_name}_owner`, will be used.
   */
  project__branch__role__name?: string;
  /**
   * Project  Default  Endpoint  Settings  Autoscaling  Limit  Max  Cu
   * @description Autoscaling Limit Max Cu
   */
  project__default__endpoint__settings__autoscaling__limit__max__cu?: number;
  /**
   * Project  Default  Endpoint  Settings  Autoscaling  Limit  Min  Cu
   * @description Autoscaling Limit Min Cu
   */
  project__default__endpoint__settings__autoscaling__limit__min__cu?: number;
  /**
   * Project  Default  Endpoint  Settings  Pg  Settings
   * @description A raw representation of Postgres settings
   */
  project__default__endpoint__settings__pg__settings?: {
      [key: string]: string;
  };
  /**
   * Project  Default  Endpoint  Settings  Pgbouncer  Settings
   * @description A raw representation of PgBouncer settings
   */
  project__default__endpoint__settings__pgbouncer__settings?: {
      [key: string]: string;
  };
  /**
   * Project  Default  Endpoint  Settings  Suspend  Timeout  Seconds
   * @description Duration of inactivity in seconds after which the compute endpoint is automatically suspended. The value `0` means use the global default. The value `-1` means never suspend. The default value is `300` seconds (5 minutes). The minimum value is `60` seconds (1 minute). The maximum value is `604800` seconds (1 week). For more information, see [Auto-suspend configuration](https://neon.tech/docs/manage/endpoints#auto-suspend-configuration).
   */
  project__default__endpoint__settings__suspend__timeout__seconds?: number;
  /**
   * Project  History  Retention  Seconds
   * @description The number of seconds to retain the shared history for all branches in this project. The default is 1 day (86400 seconds).
   */
  project__history__retention__seconds?: number;
  /**
   * Project  Name
   * @description The project name
   */
  project__name?: string;
  /**
   * Project  Org  Id
   * @description Organization id in case the project created belongs to an organization. If not present, project is owned by a user and not by org.
   */
  project__org__id?: string;
  /**
   * Project  Pg  Version
   * @description The major Postgres version number. Currently supported versions are `14`, `15`, `16`, and `17`.
   * @default 16
   */
  project__pg__version: number;
  /**
   * Project  Provisioner
   * @description The Neon compute provisioner. Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling. Provisioner can be one of the following values: * k8s-pod * k8s-neonvm Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.
   */
  project__provisioner?: string;
  /**
   * Project  Region  Id
   * @description The region identifier. Refer to our [Regions](https://neon.tech/docs/introduction/regions) documentation for supported regions. Values are specified in this format: `aws-us-east-1`
   */
  project__region__id?: string;
  /**
   * Project  Settings  Allowed  Ips  Ips
   * @description A list of IP addresses that are allowed to connect to the endpoint.
   */
  project__settings__allowed__ips__ips?: string[];
  /**
   * Project  Settings  Allowed  Ips  Protected  Branches  Only
   * @description If true, the list will be applied only to protected branches.
   */
  project__settings__allowed__ips__protected__branches__only?: boolean;
  /**
   * Project  Settings  Block  Public  Connections
   * @description When set, connections from the public internet are disallowed. This supersedes the AllowedIPs list. This parameter is under active development and its semantics may change in the future.
   */
  project__settings__block__public__connections?: boolean;
  /**
   * Project  Settings  Block  Vpc  Connections
   * @description When set, connections using VPC endpoints are disallowed. This parameter is under active development and its semantics may change in the future.
   */
  project__settings__block__vpc__connections?: boolean;
  /**
   * Project  Settings  Enable  Logical  Replication
   * @description Sets wal_level=logical for all compute endpoints in this project. All active endpoints will be suspended. Once enabled, logical replication cannot be disabled.
   */
  project__settings__enable__logical__replication?: boolean;
  /**
   * Project  Settings  Maintenance  Window  End  Time
   * @description End time of the maintenance window, in the format of "HH:MM". Uses UTC.
   */
  project__settings__maintenance__window__end__time?: string;
  /**
   * Project  Settings  Maintenance  Window  Start  Time
   * @description Start time of the maintenance window, in the format of "HH:MM". Uses UTC.
   */
  project__settings__maintenance__window__start__time?: string;
  /**
   * Project  Settings  Maintenance  Window  Weekdays
   * @description A list of weekdays when the maintenance window is active. Encoded as ints, where 1 - Monday, and 7 - Sunday.
   */
  project__settings__maintenance__window__weekdays?: number[];
  /**
   * Project  Settings  Quota  Active  Time  Seconds
   * @description The total amount of wall-clock time allowed to be spent by the project"s compute endpoints.
   */
  project__settings__quota__active__time__seconds?: number;
  /**
   * Project  Settings  Quota  Compute  Time  Seconds
   * @description The total amount of CPU seconds allowed to be spent by the project"s compute endpoints.
   */
  project__settings__quota__compute__time__seconds?: number;
  /**
   * Project  Settings  Quota  Data  Transfer  Bytes
   * @description Total amount of data transferred from all of a project"s branches using the proxy.
   */
  project__settings__quota__data__transfer__bytes?: number;
  /**
   * Project  Settings  Quota  Logical  Size  Bytes
   * @description Limit on the logical size of every project"s branch.
   */
  project__settings__quota__logical__size__bytes?: number;
  /**
   * Project  Settings  Quota  Written  Data  Bytes
   * @description Total amount of data written to all of a project"s branches.
   */
  project__settings__quota__written__data__bytes?: number;
  /**
   * Project  Store  Passwords
   * @description Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.
   */
  project__store__passwords?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS tool output.
 */
type NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_VPC_ENDPOINT_LABEL tool input.
 */
type NEON_CREATE_VPC_ENDPOINT_LABEL_INPUT = {
  /**
   * Label
   * @description Label
   */
  label?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Vpc Endpoint Id
   * @description The VPC endpoint ID
   */
  vpc_endpoint_id?: string;
};

/**
 * Type of NEON's NEON_CREATE_VPC_ENDPOINT_LABEL tool output.
 */
type NEON_CREATE_VPC_ENDPOINT_LABEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_CREATE_VPC_ENDPOINT_WITH_LABEL tool input.
 */
type NEON_CREATE_VPC_ENDPOINT_WITH_LABEL_INPUT = {
  /**
   * Label
   * @description Label
   */
  label?: string;
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
  /**
   * Region Id
   * @description The Neon region ID. Note that Azure regions are not yet supported.
   */
  region_id?: string;
  /**
   * Vpc Endpoint Id
   * @description The VPC endpoint ID
   */
  vpc_endpoint_id?: string;
};

/**
 * Type of NEON's NEON_CREATE_VPC_ENDPOINT_WITH_LABEL tool output.
 */
type NEON_CREATE_VPC_ENDPOINT_WITH_LABEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_API_KEY_BY_ID tool input.
 */
type NEON_DELETE_API_KEY_BY_ID_INPUT = {
  /**
   * Key Id
   * @description The API key ID
   */
  key_id?: number;
};

/**
 * Type of NEON's NEON_DELETE_API_KEY_BY_ID tool output.
 */
type NEON_DELETE_API_KEY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_DATABASE_FROM_BRANCH tool input.
 */
type NEON_DELETE_DATABASE_FROM_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Database Name
   * @description The database name
   */
  database_name?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_DATABASE_FROM_BRANCH tool output.
 */
type NEON_DELETE_DATABASE_FROM_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_ORGANIZATION_API_KEY tool input.
 */
type NEON_DELETE_ORGANIZATION_API_KEY_INPUT = {
  /**
   * Key Id
   * @description The API key ID
   */
  key_id?: number;
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_ORGANIZATION_API_KEY tool output.
 */
type NEON_DELETE_ORGANIZATION_API_KEY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_ORGANIZATION_MEMBER tool input.
 */
type NEON_DELETE_ORGANIZATION_MEMBER_INPUT = {
  /**
   * Member Id
   * @description The Neon organization member ID
   */
  member_id?: string;
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_ORGANIZATION_MEMBER tool output.
 */
type NEON_DELETE_ORGANIZATION_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_BRANCH_BY_ID tool input.
 */
type NEON_DELETE_PROJECT_BRANCH_BY_ID_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_BRANCH_BY_ID tool output.
 */
type NEON_DELETE_PROJECT_BRANCH_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_BRANCH_ROLE tool input.
 */
type NEON_DELETE_PROJECT_BRANCH_ROLE_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Role Name
   * @description The role name
   */
  role_name?: string;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_BRANCH_ROLE tool output.
 */
type NEON_DELETE_PROJECT_BRANCH_ROLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_BY_ID tool input.
 */
type NEON_DELETE_PROJECT_BY_ID_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_BY_ID tool output.
 */
type NEON_DELETE_PROJECT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_ENDPOINT tool input.
 */
type NEON_DELETE_PROJECT_ENDPOINT_INPUT = {
  /**
   * Endpoint Id
   * @description The endpoint ID
   */
  endpoint_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_ENDPOINT tool output.
 */
type NEON_DELETE_PROJECT_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_JWKS_BY_ID tool input.
 */
type NEON_DELETE_PROJECT_JWKS_BY_ID_INPUT = {
  /**
   * Jwks Id
   * @description The JWKS ID
   */
  jwks_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_JWKS_BY_ID tool output.
 */
type NEON_DELETE_PROJECT_JWKS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_PERMISSION tool input.
 */
type NEON_DELETE_PROJECT_PERMISSION_INPUT = {
  /**
   * Permission Id
   * @description Permission Id
   */
  permission_id?: string;
  /**
   * Project Id
   * @description Project Id
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_PROJECT_PERMISSION tool output.
 */
type NEON_DELETE_PROJECT_PERMISSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_VPC_ENDPOINT_BY_IDS tool input.
 */
type NEON_DELETE_VPC_ENDPOINT_BY_IDS_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
  /**
   * Region Id
   * @description The Neon region ID. Note that Azure regions are not yet supported.
   */
  region_id?: string;
  /**
   * Vpc Endpoint Id
   * @description The VPC endpoint ID
   */
  vpc_endpoint_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_VPC_ENDPOINT_BY_IDS tool output.
 */
type NEON_DELETE_VPC_ENDPOINT_BY_IDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID tool input.
 */
type NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Vpc Endpoint Id
   * @description The VPC endpoint ID
   */
  vpc_endpoint_id?: string;
};

/**
 * Type of NEON's NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID tool output.
 */
type NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_FETCH_DATABASE_FOR_BRANCH tool input.
 */
type NEON_FETCH_DATABASE_FOR_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_FETCH_DATABASE_FOR_BRANCH tool output.
 */
type NEON_FETCH_DATABASE_FOR_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID tool input.
 */
type NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID tool output.
 */
type NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID tool input.
 */
type NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
  /**
   * Region Id
   * @description The Neon region ID. Note that Azure regions are not yet supported.
   */
  region_id?: string;
  /**
   * Vpc Endpoint Id
   * @description The VPC endpoint ID
   */
  vpc_endpoint_id?: string;
};

/**
 * Type of NEON's NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID tool output.
 */
type NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_BRANCHES_FOR_PROJECT tool input.
 */
type NEON_GET_BRANCHES_FOR_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Search
   * @description Search by branch `name` or `id`. You can specify partial `name` or `id` values to filter results.
   */
  search?: string;
};

/**
 * Type of NEON's NEON_GET_BRANCHES_FOR_PROJECT tool output.
 */
type NEON_GET_BRANCHES_FOR_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_BRANCH_ROLES_FOR_PROJECT tool input.
 */
type NEON_GET_BRANCH_ROLES_FOR_PROJECT_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_GET_BRANCH_ROLES_FOR_PROJECT tool output.
 */
type NEON_GET_BRANCH_ROLES_FOR_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_CONSUMPTION_HISTORY_PROJECTS tool input.
 */
type NEON_GET_CONSUMPTION_HISTORY_PROJECTS_INPUT = {
  /**
   * Cursor
   * @description Specify the cursor value from the previous response to get the next batch of projects.
   */
  cursor?: string;
  /**
   * From
   * @description Specify the start `date-time` for the consumption period. The `date-time` value is rounded according to the specified `granularity`. For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`. The specified `date-time` value must respect the specified `granularity`: - For `hourly`, consumption metrics are limited to the last 168 hours. - For `daily`, consumption metrics are limited to the last 60 days. - For `monthly`, consumption metrics are limited to the last year. The consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.
   */
  from?: string;
  /**
   * Granularity
   * @description Specify the granularity of consumption metrics. Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days, and 1 year, respectively.
   * @enum {string}
   */
  granularity?: "hourly" | "daily" | "monthly";
  /**
   * Include V1 Metrics
   * @description Include metrics utilized in previous pricing models. - **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour,   which never decreases.
   */
  include_v1_metrics?: boolean;
  /**
   * Limit
   * @description Specify a value from 1 to 100 to limit number of projects in the response.
   * @default 10
   */
  limit: number;
  /**
   * Org Id
   * @description Specify the organization for which the project consumption metrics should be returned. If this parameter is not provided, the endpoint will return the metrics for the authenticated user"s projects.
   */
  org_id?: string;
  /**
   * Project Ids
   * @description Specify a list of project IDs to filter the response. If omitted, the response will contain all projects. A list of project IDs can be specified as an array of parameter values or as a comma-separated list in a single parameter value. - As an array of parameter values: `project_ids=cold-poetry-09157238%20&project_ids=quiet-snow-71788278` - As a comma-separated list in a single parameter value: `project_ids=cold-poetry-09157238,quiet-snow-71788278`
   */
  project_ids?: string[];
  /**
   * To
   * @description Specify the end `date-time` for the consumption period. The `date-time` value is rounded according to the specified granularity. For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`. The specified `date-time` value must respect the specified `granularity`: - For `hourly`, consumption metrics are limited to the last 168 hours. - For `daily`, consumption metrics are limited to the last 60 days. - For `monthly`, consumption metrics are limited to the last year.
   */
  to?: string;
};

/**
 * Type of NEON's NEON_GET_CONSUMPTION_HISTORY_PROJECTS tool output.
 */
type NEON_GET_CONSUMPTION_HISTORY_PROJECTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_CURRENT_USER_INFORMATION tool input.
 */
type NEON_GET_CURRENT_USER_INFORMATION_INPUT = object;

/**
 * Type of NEON's NEON_GET_CURRENT_USER_INFORMATION tool output.
 */
type NEON_GET_CURRENT_USER_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_ORGANIZATION_API_KEYS tool input.
 */
type NEON_GET_ORGANIZATION_API_KEYS_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_GET_ORGANIZATION_API_KEYS tool output.
 */
type NEON_GET_ORGANIZATION_API_KEYS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_PROJECT_BRANCHES tool input.
 */
type NEON_GET_PROJECT_BRANCHES_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_GET_PROJECT_BRANCHES tool output.
 */
type NEON_GET_PROJECT_BRANCHES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_PROJECT_BRANCH_ROLE tool input.
 */
type NEON_GET_PROJECT_BRANCH_ROLE_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Role Name
   * @description The role name
   */
  role_name?: string;
};

/**
 * Type of NEON's NEON_GET_PROJECT_BRANCH_ROLE tool output.
 */
type NEON_GET_PROJECT_BRANCH_ROLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_PROJECT_CONNECTION_URI tool input.
 */
type NEON_GET_PROJECT_CONNECTION_URI_INPUT = {
  /**
   * Branch Id
   * @description The branch ID. Defaults to your project"s default `branch_id` if not specified.
   */
  branch_id?: string;
  /**
   * Database Name
   * @description The database name
   */
  database_name?: string;
  /**
   * Endpoint Id
   * @description The endpoint ID. Defaults to the read-write `endpoint_id` associated with the `branch_id` if not specified.
   */
  endpoint_id?: string;
  /**
   * Pooled
   * @description Adds the `-pooler` option to the connection URI when set to `true`, creating a pooled connection URI.
   */
  pooled?: boolean;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Role Name
   * @description The role name
   */
  role_name?: string;
};

/**
 * Type of NEON's NEON_GET_PROJECT_CONNECTION_URI tool output.
 */
type NEON_GET_PROJECT_CONNECTION_URI_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_PROJECT_ENDPOINT_INFORMATION tool input.
 */
type NEON_GET_PROJECT_ENDPOINT_INFORMATION_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_GET_PROJECT_ENDPOINT_INFORMATION tool output.
 */
type NEON_GET_PROJECT_ENDPOINT_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_PROJECT_OPERATION_BY_ID tool input.
 */
type NEON_GET_PROJECT_OPERATION_BY_ID_INPUT = {
  /**
   * Operation Id
   * @description The operation ID
   */
  operation_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_GET_PROJECT_OPERATION_BY_ID tool output.
 */
type NEON_GET_PROJECT_OPERATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_SCHEMA_FOR_PROJECT_BRANCH tool input.
 */
type NEON_GET_SCHEMA_FOR_PROJECT_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Db Name
   * @description Name of the database for which the schema is retrieved
   */
  db_name?: string;
  /**
   * Lsn
   * @description The Log Sequence Number (LSN) for which the schema is retrieved
   */
  lsn?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Timestamp
   * @description The point in time for which the schema is retrieved
   */
  timestamp?: string;
};

/**
 * Type of NEON's NEON_GET_SCHEMA_FOR_PROJECT_BRANCH tool output.
 */
type NEON_GET_SCHEMA_FOR_PROJECT_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_USER_ORGANIZATIONS tool input.
 */
type NEON_GET_USER_ORGANIZATIONS_INPUT = object;

/**
 * Type of NEON's NEON_GET_USER_ORGANIZATIONS tool output.
 */
type NEON_GET_USER_ORGANIZATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_GET_VPC_REGION_ENDPOINTS tool input.
 */
type NEON_GET_VPC_REGION_ENDPOINTS_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
  /**
   * Region Id
   * @description The Neon region ID
   */
  region_id?: string;
};

/**
 * Type of NEON's NEON_GET_VPC_REGION_ENDPOINTS tool output.
 */
type NEON_GET_VPC_REGION_ENDPOINTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_LIST_API_KEYS tool input.
 */
type NEON_LIST_API_KEYS_INPUT = object;

/**
 * Type of NEON's NEON_LIST_API_KEYS tool output.
 */
type NEON_LIST_API_KEYS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_LIST_SHARED_PROJECTS tool input.
 */
type NEON_LIST_SHARED_PROJECTS_INPUT = {
  /**
   * Cursor
   * @description Specify the cursor value from the previous response to get the next batch of projects.
   */
  cursor?: string;
  /**
   * Limit
   * @description Specify a value from 1 to 400 to limit number of projects in the response.
   * @default 10
   */
  limit: number;
  /**
   * Search
   * @description Search query by name or id.
   */
  search?: string;
};

/**
 * Type of NEON's NEON_LIST_SHARED_PROJECTS tool output.
 */
type NEON_LIST_SHARED_PROJECTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT tool input.
 */
type NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT_INPUT = {
  /**
   * Branch  Name
   * @description Name
   */
  branch__name?: string;
  /**
   * Branch  Protected
   * @description Protected
   */
  branch__protected?: boolean;
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT tool output.
 */
type NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_PATCH_BRANCH_DATABASE_INFORMATION tool input.
 */
type NEON_PATCH_BRANCH_DATABASE_INFORMATION_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Database  Name
   * @description The name of the database
   */
  database__name?: string;
  /**
   * Database  Owner  Name
   * @description The name of the role that owns the database
   */
  database__owner__name?: string;
  /**
   * Database Name
   * @description The database name
   */
  database_name?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_PATCH_BRANCH_DATABASE_INFORMATION tool output.
 */
type NEON_PATCH_BRANCH_DATABASE_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RESET_ROLE_PASSWORD_FOR_BRANCH tool input.
 */
type NEON_RESET_ROLE_PASSWORD_FOR_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Role Name
   * @description The role nam
   */
  role_name?: string;
};

/**
 * Type of NEON's NEON_RESET_ROLE_PASSWORD_FOR_BRANCH tool output.
 */
type NEON_RESET_ROLE_PASSWORD_FOR_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RESTART_PROJECT_ENDPOINT tool input.
 */
type NEON_RESTART_PROJECT_ENDPOINT_INPUT = {
  /**
   * Endpoint Id
   * @description The endpoint ID
   */
  endpoint_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RESTART_PROJECT_ENDPOINT tool output.
 */
type NEON_RESTART_PROJECT_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RESTORE_PROJECT_BRANCH tool input.
 */
type NEON_RESTORE_PROJECT_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Preserve Under Name
   * @description If not empty, the previous state of the branch will be saved to a branch with this name. If the branch has children or the `source_branch_id` is equal to the branch id, this field is required. All existing child branches will be moved to the newly created branch under the name `preserve_under_name`.
   */
  preserve_under_name?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Source Branch Id
   * @description The `branch_id` of the restore source branch. If `source_timestamp` and `source_lsn` are omitted, the branch will be restored to head. If `source_branch_id` is equal to the branch"s id, `source_timestamp` or `source_lsn` is required.
   */
  source_branch_id?: string;
  /**
   * Source Lsn
   * @description A Log Sequence Number (LSN) on the source branch. The branch will be restored with data from this LSN.
   */
  source_lsn?: string;
  /**
   * Source Timestamp
   * Format: date-time
   * @description A timestamp identifying a point in time on the source branch. The branch will be restored with data starting from this point in time. The timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.
   */
  source_timestamp?: string;
};

/**
 * Type of NEON's NEON_RESTORE_PROJECT_BRANCH tool output.
 */
type NEON_RESTORE_PROJECT_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY tool input.
 */
type NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY_INPUT = {
  /**
   * From
   * @description Specify the start `date-time` for the consumption period. The `date-time` value is rounded according to the specified `granularity`. For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`. The specified `date-time` value must respect the specified granularity: - For `hourly`, consumption metrics are limited to the last 168 hours. - For `daily`, consumption metrics are limited to the last 60 days. - For `monthly`, consumption metrics are limited to the past year. The consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.
   */
  from?: string;
  /**
   * Granularity
   * @description Specify the granularity of consumption metrics. Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days, and 1 year, respectively.
   * @enum {string}
   */
  granularity?: "hourly" | "daily" | "monthly";
  /**
   * Include V1 Metrics
   * @description Include metrics utilized in previous pricing models. - **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour   for each project, which never decreases.
   */
  include_v1_metrics?: boolean;
  /**
   * Org Id
   * @description Specify the organization for which the consumption metrics should be returned. If this parameter is not provided, the endpoint will return the metrics for the authenticated user"s account.
   */
  org_id?: string;
  /**
   * To
   * @description Specify the end `date-time` for the consumption period. The `date-time` value is rounded according to the specified granularity. For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`. The specified `date-time` value must respect the specified granularity: - For `hourly`, consumption metrics are limited to the last 168 hours. - For `daily`, consumption metrics are limited to the last 60 days. - For `monthly`, consumption metrics are limited to the past year.
   */
  to?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY tool output.
 */
type NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_ALL_REGIONS tool input.
 */
type NEON_RETRIEVE_ALL_REGIONS_INPUT = object;

/**
 * Type of NEON's NEON_RETRIEVE_ALL_REGIONS tool output.
 */
type NEON_RETRIEVE_ALL_REGIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_BRANCH_DATABASE_DETAILS tool input.
 */
type NEON_RETRIEVE_BRANCH_DATABASE_DETAILS_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Database Name
   * @description The database name
   */
  database_name?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_BRANCH_DATABASE_DETAILS tool output.
 */
type NEON_RETRIEVE_BRANCH_DATABASE_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_BRANCH_ENDPOINTS tool input.
 */
type NEON_RETRIEVE_BRANCH_ENDPOINTS_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_BRANCH_ENDPOINTS tool output.
 */
type NEON_RETRIEVE_BRANCH_ENDPOINTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_JWKS_FOR_PROJECT tool input.
 */
type NEON_RETRIEVE_JWKS_FOR_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_JWKS_FOR_PROJECT tool output.
 */
type NEON_RETRIEVE_JWKS_FOR_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_ORGANIZATION_BY_ID tool input.
 */
type NEON_RETRIEVE_ORGANIZATION_BY_ID_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_ORGANIZATION_BY_ID tool output.
 */
type NEON_RETRIEVE_ORGANIZATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_ORGANIZATION_INVITATIONS tool input.
 */
type NEON_RETRIEVE_ORGANIZATION_INVITATIONS_INPUT = {
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_ORGANIZATION_INVITATIONS tool output.
 */
type NEON_RETRIEVE_ORGANIZATION_INVITATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO tool input.
 */
type NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO_INPUT = {
  /**
   * Member Id
   * @description The Neon organization member ID
   */
  member_id?: string;
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO tool output.
 */
type NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECTS_LIST tool input.
 */
type NEON_RETRIEVE_PROJECTS_LIST_INPUT = {
  /**
   * Cursor
   * @description Specify the cursor value from the previous response to retrieve the next batch of projects.
   */
  cursor?: string;
  /**
   * Limit
   * @description Specify a value from 1 to 400 to limit number of projects in the response.
   * @default 10
   */
  limit: number;
  /**
   * Org Id
   * @description Search for projects by `org_id`.
   */
  org_id?: string;
  /**
   * Search
   * @description Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.
   */
  search?: string;
  /**
   * Timeout
   * @description Specify an explicit timeout in milliseconds to limit response delay. After timing out, the incomplete list of project data fetched so far will be returned. Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response. If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above
   */
  timeout?: number;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECTS_LIST tool output.
 */
type NEON_RETRIEVE_PROJECTS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS tool input.
 */
type NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS_INPUT = {
  /**
   * Endpoint Id
   * @description The endpoint ID
   */
  endpoint_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS tool output.
 */
type NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECT_OPERATIONS tool input.
 */
type NEON_RETRIEVE_PROJECT_OPERATIONS_INPUT = {
  /**
   * Cursor
   * @description Specify the cursor value from the previous response to get the next batch of operations
   */
  cursor?: string;
  /**
   * Limit
   * @description Specify a value from 1 to 1000 to limit number of operations in the response
   */
  limit?: number;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECT_OPERATIONS tool output.
 */
type NEON_RETRIEVE_PROJECT_OPERATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECT_PERMISSIONS tool input.
 */
type NEON_RETRIEVE_PROJECT_PERMISSIONS_INPUT = {
  /**
   * Project Id
   * @description Project Id
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_PROJECT_PERMISSIONS tool output.
 */
type NEON_RETRIEVE_PROJECT_PERMISSIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT tool input.
 */
type NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT tool output.
 */
type NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH tool input.
 */
type NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
  /**
   * Role Name
   * @description The role name
   */
  role_name?: string;
};

/**
 * Type of NEON's NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH tool output.
 */
type NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_SEND_ORGANIZATION_INVITATIONS tool input.
 */
type NEON_SEND_ORGANIZATION_INVITATIONS_INPUT = {
  /**
   * Invitations
   * @description Invitations
   */
  invitations?: {
      /**
       * Email
       * Format: email
       * @description Email
       */
      email: string;
      /**
       * Role
       * @description The role of the organization member
       * @enum {string}
       */
      role: "admin" | "member";
  }[];
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
};

/**
 * Type of NEON's NEON_SEND_ORGANIZATION_INVITATIONS tool output.
 */
type NEON_SEND_ORGANIZATION_INVITATIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_SET_BRANCH_AS_DEFAULT tool input.
 */
type NEON_SET_BRANCH_AS_DEFAULT_INPUT = {
  /**
   * Branch Id
   * @description The branch ID
   */
  branch_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_SET_BRANCH_AS_DEFAULT tool output.
 */
type NEON_SET_BRANCH_AS_DEFAULT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_START_ENDPOINT_FOR_PROJECT tool input.
 */
type NEON_START_ENDPOINT_FOR_PROJECT_INPUT = {
  /**
   * Endpoint Id
   * @description The endpoint ID
   */
  endpoint_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_START_ENDPOINT_FOR_PROJECT tool output.
 */
type NEON_START_ENDPOINT_FOR_PROJECT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID tool input.
 */
type NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID_INPUT = {
  /**
   * Endpoint Id
   * @description The endpoint ID
   */
  endpoint_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID tool output.
 */
type NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION tool input.
 */
type NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION_INPUT = {
  /**
   * Org Id
   * @description Org Id
   */
  org_id?: string;
  /**
   * Project Ids
   * @description The list of projects ids to transfer. Maximum of 400 project ids
   */
  project_ids?: string[];
};

/**
 * Type of NEON's NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION tool output.
 */
type NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_UPDATE_ORGANIZATION_MEMBER_ROLE tool input.
 */
type NEON_UPDATE_ORGANIZATION_MEMBER_ROLE_INPUT = {
  /**
   * Member Id
   * @description The Neon organization member ID
   */
  member_id?: string;
  /**
   * Org Id
   * @description The Neon organization ID
   */
  org_id?: string;
  /**
   * Role
   * @description The role of the organization member
   * @enum {string}
   */
  role?: "admin" | "member";
};

/**
 * Type of NEON's NEON_UPDATE_ORGANIZATION_MEMBER_ROLE tool output.
 */
type NEON_UPDATE_ORGANIZATION_MEMBER_ROLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS tool input.
 */
type NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS_INPUT = {
  /**
   * Endpoint  Autoscaling  Limit  Max  Cu
   * @description Autoscaling Limit Max Cu
   */
  endpoint__autoscaling__limit__max__cu?: number;
  /**
   * Endpoint  Autoscaling  Limit  Min  Cu
   * @description Autoscaling Limit Min Cu
   */
  endpoint__autoscaling__limit__min__cu?: number;
  /**
   * Endpoint  Branch  Id
   * @description DEPRECATED: This field will be removed in a future release. The destination branch ID. The destination branch must not have an exsiting read-write endpoint.
   */
  endpoint__branch__id?: string;
  /**
   * Endpoint  Disabled
   * @description Whether to restrict connections to the compute endpoint. Enabling this option schedules a suspend compute operation. A disabled compute endpoint cannot be enabled by a connection or console action. However, the compute endpoint is periodically enabled by check_availability operations.
   */
  endpoint__disabled?: boolean;
  /**
   * Endpoint  Passwordless  Access
   * @description NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.
   */
  endpoint__passwordless__access?: boolean;
  /**
   * Endpoint  Pooler  Enabled
   * @description Whether to enable connection pooling for the compute endpoint
   */
  endpoint__pooler__enabled?: boolean;
  /**
   * Endpoint  Pooler  Mode
   * @description The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.
   * @enum {string}
   */
  endpoint__pooler__mode?: "transaction";
  /**
   * Endpoint  Provisioner
   * @description The Neon compute provisioner. Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling. Provisioner can be one of the following values: * k8s-pod * k8s-neonvm Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.
   */
  endpoint__provisioner?: string;
  /**
   * Endpoint  Settings  Pg  Settings
   * @description A raw representation of Postgres settings
   */
  endpoint__settings__pg__settings?: {
      [key: string]: string;
  };
  /**
   * Endpoint  Settings  Pgbouncer  Settings
   * @description A raw representation of PgBouncer settings
   */
  endpoint__settings__pgbouncer__settings?: {
      [key: string]: string;
  };
  /**
   * Endpoint  Suspend  Timeout  Seconds
   * @description Duration of inactivity in seconds after which the compute endpoint is automatically suspended. The value `0` means use the global default. The value `-1` means never suspend. The default value is `300` seconds (5 minutes). The minimum value is `60` seconds (1 minute). The maximum value is `604800` seconds (1 week). For more information, see [Auto-suspend configuration](https://neon.tech/docs/manage/endpoints#auto-suspend-configuration).
   */
  endpoint__suspend__timeout__seconds?: number;
  /**
   * Endpoint Id
   * @description The endpoint ID
   */
  endpoint_id?: string;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS tool output.
 */
type NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEON's NEON_UPDATE_PROJECT_SETTINGS_BY_ID tool input.
 */
type NEON_UPDATE_PROJECT_SETTINGS_BY_ID_INPUT = {
  /**
   * Project  Default  Endpoint  Settings  Autoscaling  Limit  Max  Cu
   * @description Autoscaling Limit Max Cu
   */
  project__default__endpoint__settings__autoscaling__limit__max__cu?: number;
  /**
   * Project  Default  Endpoint  Settings  Autoscaling  Limit  Min  Cu
   * @description Autoscaling Limit Min Cu
   */
  project__default__endpoint__settings__autoscaling__limit__min__cu?: number;
  /**
   * Project  Default  Endpoint  Settings  Pg  Settings
   * @description A raw representation of Postgres settings
   */
  project__default__endpoint__settings__pg__settings?: {
      [key: string]: string;
  };
  /**
   * Project  Default  Endpoint  Settings  Pgbouncer  Settings
   * @description A raw representation of PgBouncer settings
   */
  project__default__endpoint__settings__pgbouncer__settings?: {
      [key: string]: string;
  };
  /**
   * Project  Default  Endpoint  Settings  Suspend  Timeout  Seconds
   * @description Duration of inactivity in seconds after which the compute endpoint is automatically suspended. The value `0` means use the global default. The value `-1` means never suspend. The default value is `300` seconds (5 minutes). The minimum value is `60` seconds (1 minute). The maximum value is `604800` seconds (1 week). For more information, see [Auto-suspend configuration](https://neon.tech/docs/manage/endpoints#auto-suspend-configuration).
   */
  project__default__endpoint__settings__suspend__timeout__seconds?: number;
  /**
   * Project  History  Retention  Seconds
   * @description The number of seconds to retain the shared history for all branches in this project. The default is 1 day (604800 seconds).
   */
  project__history__retention__seconds?: number;
  /**
   * Project  Name
   * @description The project name
   */
  project__name?: string;
  /**
   * Project  Settings  Allowed  Ips  Ips
   * @description A list of IP addresses that are allowed to connect to the endpoint.
   */
  project__settings__allowed__ips__ips?: string[];
  /**
   * Project  Settings  Allowed  Ips  Protected  Branches  Only
   * @description If true, the list will be applied only to protected branches.
   */
  project__settings__allowed__ips__protected__branches__only?: boolean;
  /**
   * Project  Settings  Block  Public  Connections
   * @description When set, connections from the public internet are disallowed. This supersedes the AllowedIPs list. This parameter is under active development and its semantics may change in the future.
   */
  project__settings__block__public__connections?: boolean;
  /**
   * Project  Settings  Block  Vpc  Connections
   * @description When set, connections using VPC endpoints are disallowed. This parameter is under active development and its semantics may change in the future.
   */
  project__settings__block__vpc__connections?: boolean;
  /**
   * Project  Settings  Enable  Logical  Replication
   * @description Sets wal_level=logical for all compute endpoints in this project. All active endpoints will be suspended. Once enabled, logical replication cannot be disabled.
   */
  project__settings__enable__logical__replication?: boolean;
  /**
   * Project  Settings  Maintenance  Window  End  Time
   * @description End time of the maintenance window, in the format of "HH:MM". Uses UTC.
   */
  project__settings__maintenance__window__end__time?: string;
  /**
   * Project  Settings  Maintenance  Window  Start  Time
   * @description Start time of the maintenance window, in the format of "HH:MM". Uses UTC.
   */
  project__settings__maintenance__window__start__time?: string;
  /**
   * Project  Settings  Maintenance  Window  Weekdays
   * @description A list of weekdays when the maintenance window is active. Encoded as ints, where 1 - Monday, and 7 - Sunday.
   */
  project__settings__maintenance__window__weekdays?: number[];
  /**
   * Project  Settings  Quota  Active  Time  Seconds
   * @description The total amount of wall-clock time allowed to be spent by the project"s compute endpoints.
   */
  project__settings__quota__active__time__seconds?: number;
  /**
   * Project  Settings  Quota  Compute  Time  Seconds
   * @description The total amount of CPU seconds allowed to be spent by the project"s compute endpoints.
   */
  project__settings__quota__compute__time__seconds?: number;
  /**
   * Project  Settings  Quota  Data  Transfer  Bytes
   * @description Total amount of data transferred from all of a project"s branches using the proxy.
   */
  project__settings__quota__data__transfer__bytes?: number;
  /**
   * Project  Settings  Quota  Logical  Size  Bytes
   * @description Limit on the logical size of every project"s branch.
   */
  project__settings__quota__logical__size__bytes?: number;
  /**
   * Project  Settings  Quota  Written  Data  Bytes
   * @description Total amount of data written to all of a project"s branches.
   */
  project__settings__quota__written__data__bytes?: number;
  /**
   * Project Id
   * @description The Neon project ID
   */
  project_id?: string;
};

/**
 * Type of NEON's NEON_UPDATE_PROJECT_SETTINGS_BY_ID tool output.
 */
type NEON_UPDATE_PROJECT_SETTINGS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "NEON".
 */
export type NEON_TOOL_INPUTS = {
  ACCESS_PROJECT_DETAILS_BY_ID: NEON_ACCESS_PROJECT_DETAILS_BY_ID_INPUT
  ADD_NEW_JWKS_TO_PROJECT_ENDPOINT: NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT_INPUT
  ADD_PROJECT_EMAIL_PERMISSION: NEON_ADD_PROJECT_EMAIL_PERMISSION_INPUT
  ADD_ROLE_TO_BRANCH: NEON_ADD_ROLE_TO_BRANCH_INPUT
  CREATE_API_KEY_FOR_ORGANIZATION: NEON_CREATE_API_KEY_FOR_ORGANIZATION_INPUT
  CREATE_BRANCH_DATABASE: NEON_CREATE_BRANCH_DATABASE_INPUT
  CREATE_COMPUTE_ENDPOINT: NEON_CREATE_COMPUTE_ENDPOINT_INPUT
  CREATE_NEW_API_KEY: NEON_CREATE_NEW_API_KEY_INPUT
  CREATE_NEW_PROJECT_BRANCH: NEON_CREATE_NEW_PROJECT_BRANCH_INPUT
  CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS: NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS_INPUT
  CREATE_VPC_ENDPOINT_LABEL: NEON_CREATE_VPC_ENDPOINT_LABEL_INPUT
  CREATE_VPC_ENDPOINT_WITH_LABEL: NEON_CREATE_VPC_ENDPOINT_WITH_LABEL_INPUT
  DELETE_API_KEY_BY_ID: NEON_DELETE_API_KEY_BY_ID_INPUT
  DELETE_DATABASE_FROM_BRANCH: NEON_DELETE_DATABASE_FROM_BRANCH_INPUT
  DELETE_ORGANIZATION_API_KEY: NEON_DELETE_ORGANIZATION_API_KEY_INPUT
  DELETE_ORGANIZATION_MEMBER: NEON_DELETE_ORGANIZATION_MEMBER_INPUT
  DELETE_PROJECT_BRANCH_BY_ID: NEON_DELETE_PROJECT_BRANCH_BY_ID_INPUT
  DELETE_PROJECT_BRANCH_ROLE: NEON_DELETE_PROJECT_BRANCH_ROLE_INPUT
  DELETE_PROJECT_BY_ID: NEON_DELETE_PROJECT_BY_ID_INPUT
  DELETE_PROJECT_ENDPOINT: NEON_DELETE_PROJECT_ENDPOINT_INPUT
  DELETE_PROJECT_JWKS_BY_ID: NEON_DELETE_PROJECT_JWKS_BY_ID_INPUT
  DELETE_PROJECT_PERMISSION: NEON_DELETE_PROJECT_PERMISSION_INPUT
  DELETE_VPC_ENDPOINT_BY_IDS: NEON_DELETE_VPC_ENDPOINT_BY_IDS_INPUT
  DELETE_VPC_ENDPOINT_BY_PROJECT_ID: NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID_INPUT
  FETCH_DATABASE_FOR_BRANCH: NEON_FETCH_DATABASE_FOR_BRANCH_INPUT
  FETCH_ORGANIZATION_MEMBERS_BY_ID: NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID_INPUT
  FETCH_VPCENDPOINT_DETAILS_BY_ID: NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID_INPUT
  GET_BRANCHES_FOR_PROJECT: NEON_GET_BRANCHES_FOR_PROJECT_INPUT
  GET_BRANCH_ROLES_FOR_PROJECT: NEON_GET_BRANCH_ROLES_FOR_PROJECT_INPUT
  GET_CONSUMPTION_HISTORY_PROJECTS: NEON_GET_CONSUMPTION_HISTORY_PROJECTS_INPUT
  GET_CURRENT_USER_INFORMATION: NEON_GET_CURRENT_USER_INFORMATION_INPUT
  GET_ORGANIZATION_API_KEYS: NEON_GET_ORGANIZATION_API_KEYS_INPUT
  GET_PROJECT_BRANCHES: NEON_GET_PROJECT_BRANCHES_INPUT
  GET_PROJECT_BRANCH_ROLE: NEON_GET_PROJECT_BRANCH_ROLE_INPUT
  GET_PROJECT_CONNECTION_URI: NEON_GET_PROJECT_CONNECTION_URI_INPUT
  GET_PROJECT_ENDPOINT_INFORMATION: NEON_GET_PROJECT_ENDPOINT_INFORMATION_INPUT
  GET_PROJECT_OPERATION_BY_ID: NEON_GET_PROJECT_OPERATION_BY_ID_INPUT
  GET_SCHEMA_FOR_PROJECT_BRANCH: NEON_GET_SCHEMA_FOR_PROJECT_BRANCH_INPUT
  GET_USER_ORGANIZATIONS: NEON_GET_USER_ORGANIZATIONS_INPUT
  GET_VPC_REGION_ENDPOINTS: NEON_GET_VPC_REGION_ENDPOINTS_INPUT
  LIST_API_KEYS: NEON_LIST_API_KEYS_INPUT
  LIST_SHARED_PROJECTS: NEON_LIST_SHARED_PROJECTS_INPUT
  MODIFY_BRANCH_DETAILS_IN_PROJECT: NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT_INPUT
  PATCH_BRANCH_DATABASE_INFORMATION: NEON_PATCH_BRANCH_DATABASE_INFORMATION_INPUT
  RESET_ROLE_PASSWORD_FOR_BRANCH: NEON_RESET_ROLE_PASSWORD_FOR_BRANCH_INPUT
  RESTART_PROJECT_ENDPOINT: NEON_RESTART_PROJECT_ENDPOINT_INPUT
  RESTORE_PROJECT_BRANCH: NEON_RESTORE_PROJECT_BRANCH_INPUT
  RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY: NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY_INPUT
  RETRIEVE_ALL_REGIONS: NEON_RETRIEVE_ALL_REGIONS_INPUT
  RETRIEVE_BRANCH_DATABASE_DETAILS: NEON_RETRIEVE_BRANCH_DATABASE_DETAILS_INPUT
  RETRIEVE_BRANCH_ENDPOINTS: NEON_RETRIEVE_BRANCH_ENDPOINTS_INPUT
  RETRIEVE_JWKS_FOR_PROJECT: NEON_RETRIEVE_JWKS_FOR_PROJECT_INPUT
  RETRIEVE_ORGANIZATION_BY_ID: NEON_RETRIEVE_ORGANIZATION_BY_ID_INPUT
  RETRIEVE_ORGANIZATION_INVITATIONS: NEON_RETRIEVE_ORGANIZATION_INVITATIONS_INPUT
  RETRIEVE_ORGANIZATION_MEMBER_INFO: NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO_INPUT
  RETRIEVE_PROJECTS_LIST: NEON_RETRIEVE_PROJECTS_LIST_INPUT
  RETRIEVE_PROJECT_ENDPOINT_DETAILS: NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS_INPUT
  RETRIEVE_PROJECT_OPERATIONS: NEON_RETRIEVE_PROJECT_OPERATIONS_INPUT
  RETRIEVE_PROJECT_PERMISSIONS: NEON_RETRIEVE_PROJECT_PERMISSIONS_INPUT
  RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT: NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT_INPUT
  REVEAL_ROLE_PASSWORD_IN_BRANCH: NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH_INPUT
  SEND_ORGANIZATION_INVITATIONS: NEON_SEND_ORGANIZATION_INVITATIONS_INPUT
  SET_BRANCH_AS_DEFAULT: NEON_SET_BRANCH_AS_DEFAULT_INPUT
  START_ENDPOINT_FOR_PROJECT: NEON_START_ENDPOINT_FOR_PROJECT_INPUT
  SUSPEND_PROJECT_ENDPOINT_BY_ID: NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID_INPUT
  TRANSFER_USER_PROJECTS_TO_ORGANIZATION: NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION_INPUT
  UPDATE_ORGANIZATION_MEMBER_ROLE: NEON_UPDATE_ORGANIZATION_MEMBER_ROLE_INPUT
  UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS: NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS_INPUT
  UPDATE_PROJECT_SETTINGS_BY_ID: NEON_UPDATE_PROJECT_SETTINGS_BY_ID_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEON".
 */
export type NEON_TOOL_OUTPUTS = {
  ACCESS_PROJECT_DETAILS_BY_ID: NEON_ACCESS_PROJECT_DETAILS_BY_ID_OUTPUT
  ADD_NEW_JWKS_TO_PROJECT_ENDPOINT: NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT_OUTPUT
  ADD_PROJECT_EMAIL_PERMISSION: NEON_ADD_PROJECT_EMAIL_PERMISSION_OUTPUT
  ADD_ROLE_TO_BRANCH: NEON_ADD_ROLE_TO_BRANCH_OUTPUT
  CREATE_API_KEY_FOR_ORGANIZATION: NEON_CREATE_API_KEY_FOR_ORGANIZATION_OUTPUT
  CREATE_BRANCH_DATABASE: NEON_CREATE_BRANCH_DATABASE_OUTPUT
  CREATE_COMPUTE_ENDPOINT: NEON_CREATE_COMPUTE_ENDPOINT_OUTPUT
  CREATE_NEW_API_KEY: NEON_CREATE_NEW_API_KEY_OUTPUT
  CREATE_NEW_PROJECT_BRANCH: NEON_CREATE_NEW_PROJECT_BRANCH_OUTPUT
  CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS: NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS_OUTPUT
  CREATE_VPC_ENDPOINT_LABEL: NEON_CREATE_VPC_ENDPOINT_LABEL_OUTPUT
  CREATE_VPC_ENDPOINT_WITH_LABEL: NEON_CREATE_VPC_ENDPOINT_WITH_LABEL_OUTPUT
  DELETE_API_KEY_BY_ID: NEON_DELETE_API_KEY_BY_ID_OUTPUT
  DELETE_DATABASE_FROM_BRANCH: NEON_DELETE_DATABASE_FROM_BRANCH_OUTPUT
  DELETE_ORGANIZATION_API_KEY: NEON_DELETE_ORGANIZATION_API_KEY_OUTPUT
  DELETE_ORGANIZATION_MEMBER: NEON_DELETE_ORGANIZATION_MEMBER_OUTPUT
  DELETE_PROJECT_BRANCH_BY_ID: NEON_DELETE_PROJECT_BRANCH_BY_ID_OUTPUT
  DELETE_PROJECT_BRANCH_ROLE: NEON_DELETE_PROJECT_BRANCH_ROLE_OUTPUT
  DELETE_PROJECT_BY_ID: NEON_DELETE_PROJECT_BY_ID_OUTPUT
  DELETE_PROJECT_ENDPOINT: NEON_DELETE_PROJECT_ENDPOINT_OUTPUT
  DELETE_PROJECT_JWKS_BY_ID: NEON_DELETE_PROJECT_JWKS_BY_ID_OUTPUT
  DELETE_PROJECT_PERMISSION: NEON_DELETE_PROJECT_PERMISSION_OUTPUT
  DELETE_VPC_ENDPOINT_BY_IDS: NEON_DELETE_VPC_ENDPOINT_BY_IDS_OUTPUT
  DELETE_VPC_ENDPOINT_BY_PROJECT_ID: NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID_OUTPUT
  FETCH_DATABASE_FOR_BRANCH: NEON_FETCH_DATABASE_FOR_BRANCH_OUTPUT
  FETCH_ORGANIZATION_MEMBERS_BY_ID: NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID_OUTPUT
  FETCH_VPCENDPOINT_DETAILS_BY_ID: NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID_OUTPUT
  GET_BRANCHES_FOR_PROJECT: NEON_GET_BRANCHES_FOR_PROJECT_OUTPUT
  GET_BRANCH_ROLES_FOR_PROJECT: NEON_GET_BRANCH_ROLES_FOR_PROJECT_OUTPUT
  GET_CONSUMPTION_HISTORY_PROJECTS: NEON_GET_CONSUMPTION_HISTORY_PROJECTS_OUTPUT
  GET_CURRENT_USER_INFORMATION: NEON_GET_CURRENT_USER_INFORMATION_OUTPUT
  GET_ORGANIZATION_API_KEYS: NEON_GET_ORGANIZATION_API_KEYS_OUTPUT
  GET_PROJECT_BRANCHES: NEON_GET_PROJECT_BRANCHES_OUTPUT
  GET_PROJECT_BRANCH_ROLE: NEON_GET_PROJECT_BRANCH_ROLE_OUTPUT
  GET_PROJECT_CONNECTION_URI: NEON_GET_PROJECT_CONNECTION_URI_OUTPUT
  GET_PROJECT_ENDPOINT_INFORMATION: NEON_GET_PROJECT_ENDPOINT_INFORMATION_OUTPUT
  GET_PROJECT_OPERATION_BY_ID: NEON_GET_PROJECT_OPERATION_BY_ID_OUTPUT
  GET_SCHEMA_FOR_PROJECT_BRANCH: NEON_GET_SCHEMA_FOR_PROJECT_BRANCH_OUTPUT
  GET_USER_ORGANIZATIONS: NEON_GET_USER_ORGANIZATIONS_OUTPUT
  GET_VPC_REGION_ENDPOINTS: NEON_GET_VPC_REGION_ENDPOINTS_OUTPUT
  LIST_API_KEYS: NEON_LIST_API_KEYS_OUTPUT
  LIST_SHARED_PROJECTS: NEON_LIST_SHARED_PROJECTS_OUTPUT
  MODIFY_BRANCH_DETAILS_IN_PROJECT: NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT_OUTPUT
  PATCH_BRANCH_DATABASE_INFORMATION: NEON_PATCH_BRANCH_DATABASE_INFORMATION_OUTPUT
  RESET_ROLE_PASSWORD_FOR_BRANCH: NEON_RESET_ROLE_PASSWORD_FOR_BRANCH_OUTPUT
  RESTART_PROJECT_ENDPOINT: NEON_RESTART_PROJECT_ENDPOINT_OUTPUT
  RESTORE_PROJECT_BRANCH: NEON_RESTORE_PROJECT_BRANCH_OUTPUT
  RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY: NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY_OUTPUT
  RETRIEVE_ALL_REGIONS: NEON_RETRIEVE_ALL_REGIONS_OUTPUT
  RETRIEVE_BRANCH_DATABASE_DETAILS: NEON_RETRIEVE_BRANCH_DATABASE_DETAILS_OUTPUT
  RETRIEVE_BRANCH_ENDPOINTS: NEON_RETRIEVE_BRANCH_ENDPOINTS_OUTPUT
  RETRIEVE_JWKS_FOR_PROJECT: NEON_RETRIEVE_JWKS_FOR_PROJECT_OUTPUT
  RETRIEVE_ORGANIZATION_BY_ID: NEON_RETRIEVE_ORGANIZATION_BY_ID_OUTPUT
  RETRIEVE_ORGANIZATION_INVITATIONS: NEON_RETRIEVE_ORGANIZATION_INVITATIONS_OUTPUT
  RETRIEVE_ORGANIZATION_MEMBER_INFO: NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO_OUTPUT
  RETRIEVE_PROJECTS_LIST: NEON_RETRIEVE_PROJECTS_LIST_OUTPUT
  RETRIEVE_PROJECT_ENDPOINT_DETAILS: NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS_OUTPUT
  RETRIEVE_PROJECT_OPERATIONS: NEON_RETRIEVE_PROJECT_OPERATIONS_OUTPUT
  RETRIEVE_PROJECT_PERMISSIONS: NEON_RETRIEVE_PROJECT_PERMISSIONS_OUTPUT
  RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT: NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT_OUTPUT
  REVEAL_ROLE_PASSWORD_IN_BRANCH: NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH_OUTPUT
  SEND_ORGANIZATION_INVITATIONS: NEON_SEND_ORGANIZATION_INVITATIONS_OUTPUT
  SET_BRANCH_AS_DEFAULT: NEON_SET_BRANCH_AS_DEFAULT_OUTPUT
  START_ENDPOINT_FOR_PROJECT: NEON_START_ENDPOINT_FOR_PROJECT_OUTPUT
  SUSPEND_PROJECT_ENDPOINT_BY_ID: NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID_OUTPUT
  TRANSFER_USER_PROJECTS_TO_ORGANIZATION: NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION_OUTPUT
  UPDATE_ORGANIZATION_MEMBER_ROLE: NEON_UPDATE_ORGANIZATION_MEMBER_ROLE_OUTPUT
  UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS: NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS_OUTPUT
  UPDATE_PROJECT_SETTINGS_BY_ID: NEON_UPDATE_PROJECT_SETTINGS_BY_ID_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEON toolkit.
 */
export const NEON = {
  slug: "neon",
  tools: {
    /**
     * Retrieves detailed information about a specific project within the neon b2b saas integration platform. this endpoint is used to fetch comprehensive data about a project, including its configuration, associated workflows, and current status. it's particularly useful when you need to review or analyze the settings and progress of an integration project. the endpoint should be used when detailed project information is required, such as during troubleshooting, reporting, or when preparing to make updates to a project. it does not modify any project data and is safe for frequent calls. however, it may not provide real-time updates for ongoing integration processes; for that, a separate status or logs endpoint might be more appropriate.
     */
    ACCESS_PROJECT_DETAILS_BY_ID: "NEON_ACCESS_PROJECT_DETAILS_BY_ID",
    /**
     * Adds a new json web key set (jwks) to a specific endpoint of a project in the neon b2b saas integration platform. this endpoint is crucial for setting up secure authentication and authorization mechanisms, allowing seamless integration with various identity providers. use this when configuring a new authentication source or updating existing jwks information for your project. the endpoint supports multiple authentication providers and allows for branch-specific configurations and role mappings. note that a maximum of 10 role names can be associated with each jwks.
     */
    ADD_NEW_JWKS_TO_PROJECT_ENDPOINT: "NEON_ADD_NEW_JWKS_TO_PROJECT_ENDPOINT",
    /**
     * Adds permissions for a specified email address to a particular project within the neon b2b saas integration platform. this endpoint is used to grant access or specific rights to users for a given project, enabling collaboration and controlled resource sharing. it should be called when you need to add a new user to a project or modify existing user permissions. the endpoint associates the provided email with the specified project, likely setting up default or predefined permission levels. note that this endpoint only adds permissions and does not provide information about existing permissions or remove them.
     */
    ADD_PROJECT_EMAIL_PERMISSION: "NEON_ADD_PROJECT_EMAIL_PERMISSION",
    /**
     * Creates a new role within a specific branch of a project in the neon b2b saas integration platform. this endpoint allows for fine-grained access control by enabling the creation of custom roles at the branch level. it should be used when setting up or modifying the permission structure for a particular branch within a project. the created role can later be assigned to users, granting them specific permissions within the branch context. note that this endpoint only creates the role; additional steps may be required to assign permissions to the role or associate it with users.
     */
    ADD_ROLE_TO_BRANCH: "NEON_ADD_ROLE_TO_BRANCH",
    /**
     * Creates a new api key for the specified organization, with optional project-specific access limitations. this endpoint is used to generate and manage api keys, which are essential for authenticating and authorizing access to neon's b2b saas integration platform. the created api key can be used to interact with various services and endpoints within the organization's scope. if a project id is provided, the api key's access will be restricted to that specific project, enabling fine-grained access control. this is particularly useful in multi-project environments where different teams or integrations require isolated access. the endpoint requires a key name to be specified, allowing for easy identification and management of multiple api keys within the organization. it's important to note that the actual api key value will be returned in the response, and should be securely stored as it cannot be retrieved later.
     */
    CREATE_API_KEY_FOR_ORGANIZATION: "NEON_CREATE_API_KEY_FOR_ORGANIZATION",
    /**
     * Creates a new database within a specified project and branch in the neon platform. this endpoint allows users to set up a new database with a custom name and assign an owner role, facilitating the organization and management of databases within the neon ecosystem. it should be used when initializing a new database for a specific project or when branching requires a separate database instance. the endpoint is particularly useful for developers and database administrators who need to quickly set up new databases as part of their workflow or application deployment process. note that this operation only creates the database; additional steps may be required to configure specific schemas, tables, or access permissions within the newly created database.
     */
    CREATE_BRANCH_DATABASE: "NEON_CREATE_BRANCH_DATABASE",
    /**
     * Creates a new compute endpoint for a specified branch within a neon project. this endpoint allows for detailed configuration of database resources, including read/write capabilities, regional placement, autoscaling limits, and connection pooling settings. it's primarily used when setting up new database instances or modifying existing database configurations to meet specific performance, scaling, or operational requirements. the endpoint provides fine-grained control over compute resources, enabling optimized database operations for various use cases from development to production environments.
     */
    CREATE_COMPUTE_ENDPOINT: "NEON_CREATE_COMPUTE_ENDPOINT",
    /**
     * Creates a new api key for accessing the neon b2b saas integration platform. this endpoint should be used when setting up new integrations, creating separate keys for different environments (e.g., production, testing), or rotating existing keys for security purposes. the created api key will be used for authenticating and authorizing requests to other neon api endpoints. note that this endpoint only creates the key; it does not manage permissions or access levels, which must be configured separately. after creation, ensure the key is securely stored, as it may not be retrievable in plain text again.
     */
    CREATE_NEW_API_KEY: "NEON_CREATE_NEW_API_KEY",
    /**
     * Creates a new branch in a neon project with optional compute endpoints. this endpoint allows you to specify the parent branch, branch name, and various configuration options for both the branch and its compute endpoints. it can be used to create development environments, test new features, or set up isolated database instances. the endpoint supports advanced features like autoscaling, custom provisioners, and suspend timeout configuration for optimizing resource usage and performance.
     */
    CREATE_NEW_PROJECT_BRANCH: "NEON_CREATE_NEW_PROJECT_BRANCH",
    /**
     * Creates a new neon project with specified configuration settings. this endpoint allows you to set up a customized postgresql environment with various options for resource management, networking, and performance optimization. it's ideal for initializing a new database project with tailored settings for quota management, ip access control, autoscaling, and more. use this when you need to establish a new neon project with specific requirements or when you want to take advantage of neon's advanced features like logical replication or custom maintenance windows. note that some settings, once configured, may not be easily changed later, so careful consideration of your project needs is recommended before creation.
     */
    CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS: "NEON_CREATE_PROJECT_WITH_QUOTA_AND_SETTINGS",
    /**
     * Updates the label of a specific vpc endpoint within a project in the neon b2b saas integration platform. this endpoint allows users to modify the identifier of an existing vpc endpoint, enhancing organization and management of network resources. it should be used when there's a need to rename or re-categorize a vpc endpoint for better clarity or changed purposes. the operation is idempotent, meaning repeated calls with the same label will not create additional changes. note that this endpoint only updates the label and does not modify any other properties or configurations of the vpc endpoint.
     */
    CREATE_VPC_ENDPOINT_LABEL: "NEON_CREATE_VPC_ENDPOINT_LABEL",
    /**
     * Updates the label of a specific vpc endpoint within an organization's virtual private cloud (vpc) in a particular aws region. this endpoint allows you to change the descriptive name or identifier associated with a vpc endpoint, which can be useful for better organization and management of your vpc resources. the new label helps in identifying and categorizing the vpc endpoint within your infrastructure. this endpoint should be used when you need to modify the existing label of a vpc endpoint, perhaps due to changes in its purpose or to align with updated naming conventions in your organization. it's important to note that this operation only updates the label and does not affect the functionality or configuration of the vpc endpoint itself.
     */
    CREATE_VPC_ENDPOINT_WITH_LABEL: "NEON_CREATE_VPC_ENDPOINT_WITH_LABEL",
    /**
     * Deletes a specific api key from the neon platform. this endpoint should be used when you need to revoke access for a particular api key, such as when an employee leaves the organization or when you suspect the key has been compromised. the operation is irreversible, so use it with caution. once deleted, any applications or services using this api key will lose access to neon's api. this endpoint helps maintain the security of your neon account by allowing you to manage and control api key access effectively.
     */
    DELETE_API_KEY_BY_ID: "NEON_DELETE_API_KEY_BY_ID",
    /**
     * Deletes a specific database from a designated branch within a project in the neon platform. this endpoint should be used when you need to permanently remove a database and all its associated data from a particular branch of a project. it's crucial to use this endpoint with caution as the deletion operation is irreversible. this tool is particularly useful for cleaning up unnecessary databases, managing storage, or removing test databases that are no longer needed. however, it should not be used for temporary data management; instead, consider using database suspension or archiving features if available. note that this operation only affects the specified branch and does not impact the database in other branches or the main project.
     */
    DELETE_DATABASE_FROM_BRANCH: "NEON_DELETE_DATABASE_FROM_BRANCH",
    /**
     * Deletes a specific api key associated with an organization in the neon platform. this endpoint is used to revoke access for a particular api key, enhancing security by removing unused or compromised keys. it should be used when an api key is no longer needed, when rotating keys for security purposes, or when an api key may have been exposed. once deleted, the api key cannot be recovered, and any systems using this key will lose access to the neon api. ensure you have a backup or replacement key in place before deletion to avoid service interruptions.
     */
    DELETE_ORGANIZATION_API_KEY: "NEON_DELETE_ORGANIZATION_API_KEY",
    /**
     * Removes a specific member from an organization within the neon b2b saas integration platform. this endpoint should be used when an organization administrator needs to revoke a user's membership, such as when an employee leaves the company or their role changes. the operation is permanent and will immediately remove the member's access to the organization's resources within neon. it's important to note that this action cannot be undone through the api, and re-adding a removed member would require a new invitation process. use this endpoint with caution, as it directly affects user access and organization structure.
     */
    DELETE_ORGANIZATION_MEMBER: "NEON_DELETE_ORGANIZATION_MEMBER",
    /**
     * Deletes a specific branch within a project in the neon b2b saas integration platform. this endpoint permanently removes the specified branch and all associated data from the project. it should be used when a branch is no longer needed, such as after merging changes or abandoning a development path. caution should be exercised when using this endpoint, as the deletion is irreversible. it's important to ensure that any valuable data or configurations in the branch have been backed up or merged before deletion. this operation cannot be undone, so double-checking the project id and branch id before execution is crucial to avoid accidental deletions.
     */
    DELETE_PROJECT_BRANCH_BY_ID: "NEON_DELETE_PROJECT_BRANCH_BY_ID",
    /**
     * Deletes a specific role from a branch within a project in the neon b2b saas integration platform. this endpoint is used to remove access permissions associated with a particular role in a specific project branch. it's particularly useful when restructuring access control or removing obsolete roles from a project's branch. the operation is permanent and cannot be undone, so it should be used with caution. this endpoint does not return any data upon successful deletion, typically responding with a 204 no content status.
     */
    DELETE_PROJECT_BRANCH_ROLE: "NEON_DELETE_PROJECT_BRANCH_ROLE",
    /**
     * Deletes a specific project from the neon b2b saas integration platform. this endpoint permanently removes all data, configurations, and resources associated with the specified project. it should be used with caution, as the deletion process is irreversible. this operation is typically performed when a project is no longer needed or to clean up unused resources. the endpoint requires the project's unique identifier and likely needs proper authentication to ensure only authorized users can delete projects. after successful deletion, the project and its data will no longer be accessible through any other api endpoints.
     */
    DELETE_PROJECT_BY_ID: "NEON_DELETE_PROJECT_BY_ID",
    /**
     * Deletes a specific endpoint within a neon project. this operation permanently removes the endpoint and all associated resources, such as configurations and access points. use this endpoint when you need to decommission or clean up unused endpoints in your project. it's important to note that this action is irreversible, so ensure you have backed up any necessary data or configurations before proceeding. this endpoint should be used with caution, as it will immediately terminate access to the specified endpoint and may impact any systems or applications relying on it.
     */
    DELETE_PROJECT_ENDPOINT: "NEON_DELETE_PROJECT_ENDPOINT",
    /**
     * Deletes a specific json web key set (jwks) associated with a given project in the neon b2b saas integration platform. this endpoint is used to remove outdated or unnecessary cryptographic keys from a project's key management system. it should be used when rotating keys, decommissioning integrations, or as part of regular key hygiene practices. the operation is irreversible, so caution should be exercised to ensure the correct jwks is being deleted. this endpoint does not provide information about the jwks being deleted or return the deleted keys for security reasons.
     */
    DELETE_PROJECT_JWKS_BY_ID: "NEON_DELETE_PROJECT_JWKS_BY_ID",
    /**
     * Deletes a specific permission associated with a project in the neon b2b saas integration platform. this endpoint is used to remove access rights or privileges from a project, which is crucial for maintaining proper access control and security. it should be used when you need to revoke or remove a particular permission that is no longer required or valid for the project. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint requires both the project id and the specific permission id to ensure precise permission management within the project context.
     */
    DELETE_PROJECT_PERMISSION: "NEON_DELETE_PROJECT_PERMISSION",
    /**
     * Deletes a specific vpc endpoint within a given organization and region in the neon b2b saas integration platform. this endpoint should be used when you need to remove a vpc endpoint that is no longer required, perhaps due to changes in network configuration or service usage. the operation is irreversible, so caution should be exercised when invoking this endpoint. it's important to note that deleting a vpc endpoint may impact the connectivity between your vpc and the associated aws service, potentially disrupting ongoing operations that rely on this endpoint.
     */
    DELETE_VPC_ENDPOINT_BY_IDS: "NEON_DELETE_VPC_ENDPOINT_BY_IDS",
    /**
     * Deletes a specific vpc endpoint within a designated project in the neon platform. this endpoint should be used when you need to remove a vpc endpoint that is no longer required or has become obsolete. the operation is irreversible, so it should be used with caution. once a vpc endpoint is deleted, any connections or integrations relying on it will be disrupted. this endpoint is particularly useful for cleaning up resources and managing network configurations in your neon projects.
     */
    DELETE_VPC_ENDPOINT_BY_PROJECT_ID: "NEON_DELETE_VPC_ENDPOINT_BY_PROJECT_ID",
    /**
     * Retrieves a list of databases associated with a specific project and branch in the neon platform. this endpoint allows developers to view all databases within a particular project and branch context, which is useful for managing different environments (e.g., development, staging, production) or versions of an application's database setup. it should be used when you need to inventory the databases in a specific branch or verify the existence of databases in a particular project environment. the endpoint does not provide detailed information about each database's schema or contents; it's primarily for listing purposes.
     */
    FETCH_DATABASE_FOR_BRANCH: "NEON_FETCH_DATABASE_FOR_BRANCH",
    /**
     * Retrieves a list of all members associated with a specific organization in the neon b2b saas integration platform. this endpoint allows you to fetch detailed information about the users or entities that belong to the organization, which is crucial for managing access, roles, and permissions within the platform. use this endpoint when you need to review the current membership of an organization, audit user access, or gather member information for reporting purposes. the endpoint returns comprehensive member details, but it does not modify any data or provide information about non-member users. keep in mind that for large organizations, the response may be paginated to manage the data volume efficiently.
     */
    FETCH_ORGANIZATION_MEMBERS_BY_ID: "NEON_FETCH_ORGANIZATION_MEMBERS_BY_ID",
    /**
     * Retrieves detailed information about a specific vpc endpoint within an organization's infrastructure in a particular aws region. this endpoint allows developers to access configuration details, status, and other relevant information about the vpc endpoint, which is crucial for managing private connectivity between vpcs and supported aws services. use this endpoint when you need to inspect or verify the settings of a vpc endpoint, troubleshoot connectivity issues, or gather information for compliance and auditing purposes. the endpoint provides a comprehensive view of the vpc endpoint's current state but does not allow modifications to the endpoint configuration.
     */
    FETCH_VPCENDPOINT_DETAILS_BY_ID: "NEON_FETCH_VPCENDPOINT_DETAILS_BY_ID",
    /**
     * Retrieves a list of branches associated with a specific project in the neon b2b saas integration platform. this endpoint should be used when you need to get an overview of all branches within a particular project, which is useful for version management and workflow control. it provides information about different versions or development stages of the project, allowing for efficient project management and collaboration. the endpoint is particularly helpful when planning merges, reviewing project history, or deciding on which branch to base new development work.
     */
    GET_BRANCHES_FOR_PROJECT: "NEON_GET_BRANCHES_FOR_PROJECT",
    /**
     * Retrieves the roles associated with a specific branch within a project in the neon b2b saas integration platform. this endpoint is used to fetch the current role assignments for a given project and branch combination, which is essential for managing access control and permissions within the neon ecosystem. it should be used when you need to review or audit the roles assigned to a particular branch, such as before making changes to permissions or when verifying the current access structure. the endpoint does not modify any roles; it only provides a read-only view of the existing role assignments. keep in mind that the response will only include roles for the specified branch and does not provide information about roles in other branches or at the project level.
     */
    GET_BRANCH_ROLES_FOR_PROJECT: "NEON_GET_BRANCH_ROLES_FOR_PROJECT",
    /**
     * Retrieves the consumption history for specified projects within the neon platform. this endpoint allows users to fetch detailed metrics about resource usage over time, enabling effective monitoring and analysis of project-level consumption. it's particularly useful for tracking costs, identifying usage patterns, and optimizing resource allocation across different projects. the endpoint supports querying data for specific time periods and can provide aggregated data at various granularities (e.g., hourly, daily, monthly). while it offers comprehensive consumption data, it does not provide real-time usage information or predictive analytics.
     */
    GET_CONSUMPTION_HISTORY_PROJECTS: "NEON_GET_CONSUMPTION_HISTORY_PROJECTS",
    /**
     * Retrieves the profile information for the currently authenticated user. this endpoint should be used when you need to access details about the user making the api request, such as their username, email, or other account-related information. it's particularly useful for personalizing user experiences or retrieving user-specific settings within the neon platform. the endpoint doesn't accept any parameters, as it relies solely on the authentication token to identify the user. note that this endpoint will only return information for the authenticated user and cannot be used to retrieve profiles of other users.
     */
    GET_CURRENT_USER_INFORMATION: "NEON_GET_CURRENT_USER_INFORMATION",
    /**
     * Retrieves a list of all api keys associated with a specific organization in the neon b2b saas integration platform. this endpoint is crucial for administrators to manage and monitor api access within their organization. it provides a comprehensive view of all active api keys, enabling effective access control and security auditing. use this endpoint when you need to review, track, or manage the api keys in use by your organization, such as during security reviews or when updating access permissions.
     */
    GET_ORGANIZATION_API_KEYS: "NEON_GET_ORGANIZATION_API_KEYS",
    /**
     * Retrieves detailed information about a specific branch within a neon project. this endpoint allows developers to fetch the current state and configuration of a branch, including its name, creation timestamp, and other relevant metadata. it's particularly useful when you need to verify branch details, check its status, or gather information for further operations on the branch. the endpoint should be used when you require up-to-date information about a single branch in your project's context. note that this endpoint only provides read access and does not modify any branch data.
     */
    GET_PROJECT_BRANCHES: "NEON_GET_PROJECT_BRANCHES",
    /**
     * Retrieves detailed information about a specific role within a particular branch of a neon project. this endpoint is used to fetch the current configuration, permissions, and other relevant details associated with the specified role. it's particularly useful for auditing access controls, verifying role settings, or gathering information before making modifications to role permissions. the endpoint requires precise identification of the project, branch, and role, ensuring that the correct role information is retrieved from the appropriate context within the neon platform's hierarchical structure.
     */
    GET_PROJECT_BRANCH_ROLE: "NEON_GET_PROJECT_BRANCH_ROLE",
    /**
     * Retrieves the connection uri for a specified project within the neon b2b saas integration platform. this endpoint is crucial for establishing connectivity to a project's resources, enabling access to its data and functionalities. use this when you need to programmatically obtain the connection details for a specific project, which is essential for integrating with the project's data sources or services. the connection uri serves as a unique identifier and access point for the project, facilitating seamless data exchange and workflow automation between different systems and applications within the neon ecosystem.
     */
    GET_PROJECT_CONNECTION_URI: "NEON_GET_PROJECT_CONNECTION_URI",
    /**
     * Retrieves a list of all endpoints associated with a specific project in the neon b2b saas integration platform. this endpoint should be used when you need to obtain information about the available integration points or data connections within a particular project. it provides an overview of the project's configured endpoints, which can be useful for monitoring, auditing, or managing the project's integration setup. the response likely includes details such as endpoint names, types, and statuses, though the exact structure is not specified in the given schema. this endpoint is essential for developers and administrators working with multiple integrations within a single project in the neon platform.
     */
    GET_PROJECT_ENDPOINT_INFORMATION: "NEON_GET_PROJECT_ENDPOINT_INFORMATION",
    /**
     * Retrieves detailed information about a specific operation within a project in the neon b2b saas integration platform. this endpoint is used when you need to fetch the current status, details, or results of a particular operation that has been initiated or is ongoing within a project. it's particularly useful for monitoring the progress of long-running tasks, checking the outcome of automated workflows, or auditing past activities. the endpoint requires both a project id and an operation id to uniquely identify the operation you're querying. it should be used when you have these identifiers and need up-to-date information about the operation. note that this endpoint only provides information about the operation itself and does not modify or execute any actions.
     */
    GET_PROJECT_OPERATION_BY_ID: "NEON_GET_PROJECT_OPERATION_BY_ID",
    /**
     * Retrieves the schema definition for a specific branch within a project in the neon b2b saas integration platform. this endpoint is crucial for developers and integrators who need to understand the data structure of a particular branch, enabling proper data mapping and ensuring consistency across integrations. it should be used when setting up new integrations, updating existing ones, or troubleshooting data-related issues within a project branch. the endpoint provides a detailed view of the data fields, types, and relationships, but does not modify the schema itself.
     */
    GET_SCHEMA_FOR_PROJECT_BRANCH: "NEON_GET_SCHEMA_FOR_PROJECT_BRANCH",
    /**
     * Retrieves a list of organizations associated with the currently authenticated user in the neon platform. this endpoint allows users to view all the organizations they are a member of, providing essential information for managing multi-organization access and permissions. it should be used when a user needs to identify their organizational affiliations or when an application needs to determine a user's organization memberships for access control or data segregation purposes. the endpoint does not modify any data and is safe for frequent calls. note that it only returns organizations the user is actively a member of and won't include pending invitations or previously left organizations.
     */
    GET_USER_ORGANIZATIONS: "NEON_GET_USER_ORGANIZATIONS",
    /**
     * Retrieves a list of vpc endpoints for a specified organization within a particular aws region. this endpoint allows developers to obtain information about the virtual network interfaces that enable private communication between a vpc and supported aws services. it should be used when you need to audit, manage, or gather information about the existing vpc endpoints in a specific organizational context and geographic location. the endpoint provides a comprehensive view of how the organization's vpc is connected to various aws services, which is crucial for network architecture planning and security audits. note that this endpoint only lists the vpc endpoints; it does not provide detailed configuration information or allow for modifications to the endpoints.
     */
    GET_VPC_REGION_ENDPOINTS: "NEON_GET_VPC_REGION_ENDPOINTS",
    /**
     * Retrieves a list of api keys associated with the authenticated user's neon account. this endpoint allows developers to view and manage their existing api keys, which are crucial for authentication when making requests to the neon api. it provides an overview of all active api keys, including their identifiers and potentially other metadata such as creation date or last used date. this tool should be used when you need to audit your api keys, check for any unauthorized keys, or before creating a new key to ensure you're not exceeding any limits. it does not provide the actual secret key values for security reasons, nor does it allow for the creation or deletion of keys.
     */
    LIST_API_KEYS: "NEON_LIST_API_KEYS",
    /**
     * Retrieves a list of shared projects accessible to the authenticated user within the neon b2b saas integration platform. this endpoint is used to fetch information about projects that have been shared across different parts of the organization or with external collaborators. it provides an overview of all shared resources, enabling users to manage and access data integration workflows efficiently. the endpoint should be used when a user needs to view or manage their shared project portfolio, facilitating better collaboration and resource utilization across the platform. note that this endpoint likely returns only basic project information; detailed project data may require additional api calls.
     */
    LIST_SHARED_PROJECTS: "NEON_LIST_SHARED_PROJECTS",
    /**
     * Updates the details of a specific branch within a project in the neon platform. this endpoint allows you to modify the name and protection status of an existing branch. it is particularly useful when you need to rename a branch or change its protection settings without creating a new branch. the endpoint uses partial updates, so you can specify only the fields you want to change. this tool should be used when managing branch configurations in a neon project, but it cannot be used to create new branches or delete existing ones.
     */
    MODIFY_BRANCH_DETAILS_IN_PROJECT: "NEON_MODIFY_BRANCH_DETAILS_IN_PROJECT",
    /**
     * Updates the properties of a specific database within a project branch in the neon platform. this endpoint allows for partial modifications of database attributes, such as changing its name or owner. it should be used when you need to rename a database or transfer ownership to a different role within the same project and branch. the update is performed using the patch method, allowing for selective property changes without affecting unspecified attributes. note that this operation modifies existing database metadata and does not create new databases or alter the actual data within the database.
     */
    PATCH_BRANCH_DATABASE_INFORMATION: "NEON_PATCH_BRANCH_DATABASE_INFORMATION",
    /**
     * Resets the password for a specific role within a project branch in the neon b2b saas integration platform. this endpoint is used to manage user access and security by allowing administrators to force a password reset for a particular role. it should be used when there's a need to update or secure access for a specific role, such as when an employee leaves the organization or as part of regular security practices. the operation is performed on a specific project and branch, ensuring that the correct environment is targeted. note that this action will invalidate the current password, and a new password will need to be set or communicated to the role user.
     */
    RESET_ROLE_PASSWORD_FOR_BRANCH: "NEON_RESET_ROLE_PASSWORD_FOR_BRANCH",
    /**
     * Restarts a specific endpoint within a project in the neon b2b saas integration platform. this endpoint is used to reinitialize or reset the state of an integration endpoint, which can be helpful for applying configuration changes, clearing cached data, or resolving issues with the endpoint's operation. the restart operation is triggered by sending a post request to the specified url with the required project and endpoint identifiers. this tool should be used when an endpoint needs to be refreshed or when troubleshooting integration problems. it's important to note that restarting an endpoint may cause a brief interruption in its availability, so it should be used judiciously and preferably during maintenance windows or low-traffic periods.
     */
    RESTART_PROJECT_ENDPOINT: "NEON_RESTART_PROJECT_ENDPOINT",
    /**
     * This endpoint restores a branch to a specific state or point in time. use it to recover data, revert changes, or create new branch states based on historical data. the restoration uses either a log sequence number (lsn) or timestamp from the source branch. important: for self-restoration or branches with children, use preserve under name to save the current state. note: restoration time varies based on data volume and restoration point.
     */
    RESTORE_PROJECT_BRANCH: "NEON_RESTORE_PROJECT_BRANCH",
    /**
     * Retrieves the consumption history for a specified account within the neon platform. this endpoint provides detailed information about resource usage and associated costs over a given time period. it's particularly useful for analyzing usage patterns, forecasting future resource needs, and managing costs in the neon b2b saas integration platform. the endpoint returns data such as compute time, storage usage, api calls, and any other billable resources specific to the neon service. users can specify a date range and optionally filter by resource types to get a granular view of their consumption. this tool should be used when detailed analytics on resource utilization and spending are required, such as for budget planning, usage optimization, or billing reconciliation. it does not provide real-time usage data and may have a slight delay in reflecting the most recent consumption.
     */
    RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY: "NEON_RETRIEVE_ACCOUNT_CONSUMPTION_HISTORY",
    /**
     * Retrieves a list of available geographic regions supported by the neon b2b saas integration platform. this endpoint provides crucial information about the different areas where the api is accessible and optimized for service delivery. it should be used when developers need to understand the platform's global coverage, select appropriate endpoints for data localization, or implement region-specific configurations. the endpoint returns details about each region, which may include region identifiers, names, and potentially associated endpoints or data centers. this information is essential for ensuring compliance with data residency regulations and optimizing performance by choosing the most suitable region for specific integration needs.
     */
    RETRIEVE_ALL_REGIONS: "NEON_RETRIEVE_ALL_REGIONS",
    /**
     * Retrieves detailed information about a specific database within a neon project and branch. this endpoint allows developers to fetch crucial metadata and configuration details for a given database, enabling them to monitor and manage their database resources effectively. it should be used when you need to inspect the current state, settings, or properties of a particular database in your neon environment. the endpoint provides a snapshot of the database's characteristics but does not modify any data or settings.
     */
    RETRIEVE_BRANCH_DATABASE_DETAILS: "NEON_RETRIEVE_BRANCH_DATABASE_DETAILS",
    /**
     * Retrieves a list of endpoints associated with a specific branch of a project in the neon platform. this endpoint is used to fetch detailed information about the available integration points or api endpoints within a particular branch of a project. it's particularly useful for developers who need to understand the structure and capabilities of a branch in terms of its exposed endpoints. the returned data likely includes information such as endpoint urls, supported methods, and potentially brief descriptions or metadata about each endpoint. this tool should be used when you need to explore or audit the available endpoints for a given branch, which is crucial for managing integrations and workflows in the neon b2b saas integration platform.
     */
    RETRIEVE_BRANCH_ENDPOINTS: "NEON_RETRIEVE_BRANCH_ENDPOINTS",
    /**
     * Retrieves the json web key set (jwks) for a specified project. this endpoint should be used when a client needs to obtain the public keys necessary for verifying json web tokens (jwts) issued by the project. the jwks contains the cryptographic keys used in the project's authentication process. it's essential for implementing secure, token-based authentication in applications integrated with the neon platform. this endpoint is typically called during the initial setup of a client application or when rotating security keys. note that the jwks should be cached by clients to reduce unnecessary api calls, but periodic refreshes are recommended to ensure up-to-date keys.
     */
    RETRIEVE_JWKS_FOR_PROJECT: "NEON_RETRIEVE_JWKS_FOR_PROJECT",
    /**
     * Retrieves detailed information about a specific organization within the neon platform. this endpoint allows you to access comprehensive data about an organization, including its configuration, members, and associated projects. use this when you need to view or verify an organization's current state, such as checking membership, reviewing settings, or auditing organization-level information. the endpoint returns a snapshot of the organization at the time of the request and does not provide historical data or future projections. it's particularly useful for administrative tasks, reporting, and maintaining organizational oversight within the neon ecosystem.
     */
    RETRIEVE_ORGANIZATION_BY_ID: "NEON_RETRIEVE_ORGANIZATION_BY_ID",
    /**
     * Retrieves a list of all pending invitations for a specified organization. this endpoint allows organization administrators to view and manage outstanding invitations sent to potential new members. it should be used when there's a need to track who has been invited to join the organization, review invitation statuses, or perform invitation-related administrative tasks. the endpoint returns details about each invitation, which may include the invitee's email, the invitation date, and the current status. it does not provide information about active members or expired invitations.
     */
    RETRIEVE_ORGANIZATION_INVITATIONS: "NEON_RETRIEVE_ORGANIZATION_INVITATIONS",
    /**
     * Retrieves detailed information about a specific member within an organization in the neon b2b saas integration platform. this endpoint allows you to fetch comprehensive data about an individual member, including their user id, assigned role within the organization, join date, and potentially other relevant details. it's particularly useful for organization administrators who need to review or verify a member's status and permissions. the endpoint requires both the organization id and the member id to be specified, ensuring precise and secure access to member information. use this when you need to access or display detailed information about a particular member in your organization management interfaces or for auditing purposes.
     */
    RETRIEVE_ORGANIZATION_MEMBER_INFO: "NEON_RETRIEVE_ORGANIZATION_MEMBER_INFO",
    /**
     * Retrieves a list of all neon projects associated with the authenticated user's account. this endpoint provides a comprehensive overview of the user's projects, enabling efficient project management and integration workflows. it should be used when you need to obtain information about multiple projects at once, such as for dashboard displays, project selection interfaces, or batch processing tasks. the endpoint returns project details in json format, which can be easily parsed and utilized in various applications or data analysis processes. note that while this endpoint gives a broad view of projects, it may not include detailed data sets or specific project contents, which might require additional api calls.
     */
    RETRIEVE_PROJECTS_LIST: "NEON_RETRIEVE_PROJECTS_LIST",
    /**
     * Retrieves detailed information about a specific endpoint within a project in the neon b2b saas integration platform. this endpoint allows developers to fetch configuration, status, and other relevant details of a particular endpoint associated with a given project. use this when you need to inspect or verify the settings of an individual endpoint, such as its connection parameters, data mapping configurations, or current operational status. the endpoint is particularly useful for troubleshooting integration issues, auditing endpoint configurations, or gathering information for reporting purposes. note that this endpoint only provides read access to endpoint details and does not allow modifications.
     */
    RETRIEVE_PROJECT_ENDPOINT_DETAILS: "NEON_RETRIEVE_PROJECT_ENDPOINT_DETAILS",
    /**
     * Retrieves a list of operations associated with a specific project in the neon b2b saas integration platform. this endpoint should be used when you need to fetch all operations related to a particular project, such as for monitoring ongoing tasks, auditing completed actions, or planning future integrations. it provides a comprehensive view of the project's operational landscape, which is crucial for managing complex integration workflows. note that this endpoint only returns the operations list and may not include detailed information about each operation's current status or results; separate api calls might be necessary for such details.
     */
    RETRIEVE_PROJECT_OPERATIONS: "NEON_RETRIEVE_PROJECT_OPERATIONS",
    /**
     * Retrieves the current permissions settings for a specific project within the neon b2b saas integration platform. this endpoint allows users to view the access rights and roles assigned to various users or entities for the specified project. it should be used when you need to audit or review the current permission structure of a project, such as before making changes or for compliance checks. the endpoint returns a comprehensive list of permissions but does not modify any settings. it's important to note that this endpoint only provides a snapshot of permissions at the time of the call and does not reflect any pending changes or provide historical permission data.
     */
    RETRIEVE_PROJECT_PERMISSIONS: "NEON_RETRIEVE_PROJECT_PERMISSIONS",
    /**
     * Retrieves a list of vpc (virtual private cloud) endpoints associated with a specific project in the neon b2b saas integration platform. this endpoint allows developers to fetch information about private network connections that enable secure communication between the project's resources and various aws services without traversing the public internet. use this endpoint when you need to audit, manage, or view the current vpc endpoint configurations for a given project. it's particularly useful for ensuring proper network isolation and security in complex integration scenarios. the endpoint does not create or modify vpc endpoints; it only provides read access to existing configurations.
     */
    RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT: "NEON_RETRIEVE_VPC_ENDPOINTS_FOR_PROJECT",
    /**
     * Reveals the password for a specific role within a branch of a neon project. this endpoint is used when you need to retrieve a previously hidden or encrypted password for a database role. it's particularly useful for administrators who need to access or share role credentials securely. the endpoint should be used cautiously, as it exposes sensitive information. it does not modify the password, only retrieves it. note that frequent use of this endpoint may be logged or restricted for security purposes.
     */
    REVEAL_ROLE_PASSWORD_IN_BRANCH: "NEON_REVEAL_ROLE_PASSWORD_IN_BRANCH",
    /**
     * Creates and sends invitations to join an organization in the neon b2b saas integration platform. this endpoint allows administrators to invite multiple users simultaneously, specifying their email addresses and intended roles within the organization. it should be used when expanding the organization's membership or when assigning new roles to incoming members. the endpoint does not verify if the email addresses are associated with existing neon accounts; it simply sends out invitations to the specified email addresses.
     */
    SEND_ORGANIZATION_INVITATIONS: "NEON_SEND_ORGANIZATION_INVITATIONS",
    /**
     * Sets a specified branch as the default branch for a given project in neon. this endpoint allows users to designate a particular branch as the primary or main branch for a project, which can be useful for organizing workflows and setting default behaviors. the operation is performed using a post request, indicating that it modifies the state of the project. use this endpoint when you need to change the default branch of a project, such as after creating a new branch or deciding to switch the main development focus. it's important to note that this action may affect how other operations interact with the project, as many systems use the default branch as a reference point for various functionalities.
     */
    SET_BRANCH_AS_DEFAULT: "NEON_SET_BRANCH_AS_DEFAULT",
    /**
     * Initiates a specific process or workflow associated with a particular endpoint within a project in the neon b2b saas integration platform. this endpoint is used to start automated tasks, data synchronization jobs, or other predefined processes that have been configured for the specified project and endpoint. it's particularly useful for triggering scheduled or on-demand integrations between different business applications. the endpoint should be used when you need to manually start a process that is usually automated or when restarting a failed process. it's important to note that this endpoint only starts the process; it does not provide information about the process status or results. separate endpoints may be required to monitor the progress or retrieve the outcomes of the started process.
     */
    START_ENDPOINT_FOR_PROJECT: "NEON_START_ENDPOINT_FOR_PROJECT",
    /**
     * Suspends a specific endpoint within a project in the neon b2b saas integration platform. this operation temporarily disables the endpoint, preventing it from processing further requests until it is resumed. use this endpoint when you need to conserve resources, perform maintenance, or temporarily halt operations for a particular integration point. the suspension is reversible, allowing you to resume the endpoint's functionality when needed. this tool is particularly useful for managing resource utilization and costs in your neon project by allowing fine-grained control over individual endpoints.
     */
    SUSPEND_PROJECT_ENDPOINT_BY_ID: "NEON_SUSPEND_PROJECT_ENDPOINT_BY_ID",
    /**
     * Transfers multiple projects from the authenticated user's personal account to a specified organization within the neon b2b saas integration platform. this endpoint allows for bulk transfer of projects, enabling efficient management of project ownership and organization. it should be used when reorganizing project structures or when moving projects from individual ownership to team or company-wide access. the endpoint is limited to transferring a maximum of 400 projects in a single request, which helps maintain system performance and prevents abuse. it's important to note that this operation is likely irreversible, so users should exercise caution and confirm the transfer details before execution.
     */
    TRANSFER_USER_PROJECTS_TO_ORGANIZATION: "NEON_TRANSFER_USER_PROJECTS_TO_ORGANIZATION",
    /**
     * Updates the role of a specific member within an organization in the neon b2b saas integration platform. this endpoint allows changing a member's role between 'admin' and 'member', which affects their permissions and access levels within the organization. use this endpoint when you need to promote a regular member to an admin role or demote an admin to a regular member role. it's crucial for managing access control and permissions within your organization. note that this operation may have significant implications on the member's ability to manage resources and other members within the organization.
     */
    UPDATE_ORGANIZATION_MEMBER_ROLE: "NEON_UPDATE_ORGANIZATION_MEMBER_ROLE",
    /**
     * Updates the configuration of a specific compute endpoint within a neon project. this endpoint allows fine-tuning of various settings such as autoscaling limits, provisioner type, connection pooling, and auto-suspend behavior. it's particularly useful for optimizing performance, resource allocation, and cost management of your neon compute endpoints. the endpoint should be used when you need to modify the behavior or resources of an existing compute endpoint to better suit your application's needs or to implement changes in your infrastructure strategy. note that some parameters are deprecated, and care should be taken to use the most current features and settings.
     */
    UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS: "NEON_UPDATE_PROJECT_COMPUTE_ENDPOINT_SETTINGS",
    /**
     * Updates the configuration and settings of a specific neon project. this endpoint allows fine-grained control over various aspects of a project, including resource quotas, security settings, maintenance windows, and default endpoint configurations. it's particularly useful for adjusting project parameters to optimize performance, enhance security, or comply with specific operational requirements. the endpoint should be used when changes to project-wide settings are necessary, such as modifying resource limits, adjusting ip access controls, or reconfiguring maintenance schedules. note that some changes, like enabling logical replication, may have significant impacts on project operations and cannot be reversed. care should be taken when modifying critical settings to avoid unintended consequences on project functionality or availability.
     */
    UPDATE_PROJECT_SETTINGS_BY_ID: "NEON_UPDATE_PROJECT_SETTINGS_BY_ID",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEON".
 */
export type NEON_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEON".
 */
export type NEON_TRIGGER_EVENTS = {}
