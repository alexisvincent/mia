// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE tool input.
 */
type DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE_INPUT = {
  /**
   * Description
   * @description Detailed description of the image.
   * @default null
   */
  description: string | null;
  /**
   * Distribution
   * @description Operating system distribution (e.g., Ubuntu, Fedora).
   */
  distribution?: string;
  /**
   * Name
   * @description A descriptive name for the image.
   */
  name?: string;
  /**
   * Region
   * @description Slug identifier for the region where the image should be created.
   */
  region?: string;
  /**
   * Tags
   * @description Tags to apply to the image.
   * @default null
   */
  tags: string[] | null;
  /**
   * Url
   * Format: uri
   * @description Publicly accessible URL of the raw disk image file.
   */
  url?: unknown;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE tool output.
 */
type DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Image */
      image: {
          /**
           * Created At
           * @description ISO8601 timestamp of when the image was created.
           */
          created_at: string;
          /**
           * Description
           * @description User-provided description of the image.
           * @default null
           */
          description: string | null;
          /**
           * Distribution
           * @description OS distribution of the image.
           */
          distribution: string;
          /**
           * Id
           * @description Unique identifier for the image.
           */
          id: number;
          /**
           * Min Disk Size
           * @description Minimum disk size in GB required for a Droplet using this image.
           */
          min_disk_size: number;
          /**
           * Name
           * @description Display name of the image.
           */
          name: string;
          /**
           * Public
           * @description Whether the image is publicly visible.
           */
          public: boolean;
          /**
           * Regions
           * @description Regions in which this image is available.
           */
          regions: string[];
          /**
           * Size Gigabytes
           * @description Size of the image in gigabytes.
           */
          size_gigabytes: number;
          /**
           * Slug
           * @description Slug identifier for the image (null for custom images).
           * @default null
           */
          slug: string | null;
          /**
           * Tags
           * @description Tags applied to this image.
           */
          tags: string[];
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER tool input.
 */
type DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER_INPUT = {
  /**
   * BackupRestore
   * @description Configuration to restore a cluster from a backup
   * @default null
   */
  backup_restore: {
      /**
       * Cluster Id
       * @description ID of the source cluster to restore from
       */
      cluster_id: string;
      /**
       * Snapshot
       * @description Snapshot timestamp to restore from in ISO8601 format
       */
      snapshot: string;
  } | null;
  /**
   * Db Names
   * @description Names of databases to create in the cluster
   * @default null
   */
  db_names: string[] | null;
  /**
   * Engine
   * @description Database engine (e.g., 'pg', 'mysql', 'redis')
   * @enum {string}
   */
  engine?: "pg" | "mysql" | "redis";
  /**
   * Eviction Policy
   * @description Eviction policy for Redis clusters
   * @default null
   */
  eviction_policy: string | null;
  /**
   * MaintenanceWindow
   * @description Maintenance window configuration for the cluster
   * @default null
   */
  maintenance_window: {
      /**
       * Day
       * @description Day of week for maintenance window
       * @enum {string}
       */
      day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /**
       * Hour
       * @description Hour of day (0-23) for maintenance window
       */
      hour: number;
      /**
       * Pending
       * @description Indicates if the window is pending application
       */
      pending: boolean;
  } | null;
  /**
   * Name
   * @description Name for your database cluster
   */
  name?: string;
  /**
   * Num Nodes
   * @description Number of nodes in the cluster
   */
  num_nodes?: number;
  /**
   * Private Network Uuid
   * @description UUID of VPC network for private networking
   * @default null
   */
  private_network_uuid: string | null;
  /**
   * Region
   * @description Region slug where the cluster will be created
   */
  region?: string;
  /**
   * Size
   * @description Size slug for the database nodes
   */
  size?: string;
  /**
   * Sql Mode
   * @description SQL mode for MySQL clusters
   * @default null
   */
  sql_mode: string | null;
  /**
   * Storage Size Gb
   * @description Additional storage size in GiB for the cluster
   * @default null
   */
  storage_size_gb: number | null;
  /**
   * Tags
   * @description Tags to assign to the cluster
   * @default null
   */
  tags: string[] | null;
  /**
   * User Names
   * @description Usernames to create in the cluster
   * @default null
   */
  user_names: string[] | null;
  /**
   * Version
   * @description Engine version (e.g., '13')
   */
  version?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER tool output.
 */
type DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Database
       * @description Created database cluster details
       */
      database: {
          /**
           * BackupRestore
           * @description Backup restore configuration if used
           * @default null
           */
          backup_restore: {
              /**
               * Cluster Id
               * @description ID of the source cluster to restore from
               */
              cluster_id: string;
              /**
               * Snapshot
               * @description Snapshot timestamp to restore from in ISO8601 format
               */
              snapshot: string;
          } | null;
          /**
           * Connection
           * @description Public connection information
           */
          connection: {
              /**
               * Database
               * @description Default database name
               */
              database: string;
              /**
               * Host
               * @description Host address for connection
               */
              host: string;
              /**
               * Password
               * @description Password for initial connection
               */
              password: string;
              /**
               * Port
               * @description Port number for connection
               */
              port: number;
              /**
               * Uri
               * @description Connection URI for the database cluster
               */
              uri: string;
              /**
               * User
               * @description Username for initial connection
               */
              user: string;
          };
          /**
           * Created At
           * @description Timestamp of cluster creation in ISO8601 format
           */
          created_at: string;
          /**
           * Db Names
           * @description List of database names created in the cluster
           */
          db_names: string[];
          /**
           * Engine
           * @description Database engine
           */
          engine: string;
          /**
           * Id
           * @description Unique identifier of the database cluster
           */
          id: string;
          /**
           * Maintenance Window
           * @description Maintenance window configuration
           */
          maintenance_window: {
              /**
               * Day
               * @description Day of week for maintenance window
               * @enum {string}
               */
              day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
              /**
               * Hour
               * @description Hour of day (0-23) for maintenance window
               */
              hour: number;
              /**
               * Pending
               * @description Indicates if the window is pending application
               */
              pending: boolean;
          };
          /**
           * Name
           * @description Name of the database cluster
           */
          name: string;
          /**
           * Num Nodes
           * @description Number of nodes in the cluster
           */
          num_nodes: number;
          /**
           * Private Connection
           * @description Private connection information
           */
          private_connection: {
              /**
               * Database
               * @description Default database name
               */
              database: string;
              /**
               * Host
               * @description Private host address for connection
               */
              host: string;
              /**
               * Password
               * @description Password for initial connection
               */
              password: string;
              /**
               * Port
               * @description Private port number for connection
               */
              port: number;
              /**
               * Uri
               * @description Private connection URI for the database cluster
               */
              uri: string;
              /**
               * User
               * @description Username for initial connection
               */
              user: string;
          };
          /**
           * Private Network Uuid
           * @description UUID of VPC network for private networking
           * @default null
           */
          private_network_uuid: string | null;
          /**
           * Region
           * @description Region slug where the cluster resides
           */
          region: string;
          /**
           * Size
           * @description Size slug for the database nodes
           */
          size: string;
          /**
           * Status
           * @description Current status of the cluster
           */
          status: string;
          /**
           * Storage Size Gb
           * @description Allocated storage size in GiB
           * @default null
           */
          storage_size_gb: number | null;
          /**
           * Tags
           * @description List of tags assigned to the cluster
           */
          tags: string[];
          /**
           * Users
           * @description List of users created in the cluster
           */
          users: {
              /**
               * Name
               * @description User name
               */
              name: string;
              /**
               * Password
               * @description Password for the user
               */
              password: string;
          }[];
          /**
           * Version
           * @description Engine version
           */
          version: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME_INPUT = {
  /**
   * Description
   * @description Free-form text description of the volume.
   * @default null
   */
  description: string | null;
  /**
   * Filesystem Label
   * @description Label to apply to the filesystem.
   * @default null
   */
  filesystem_label: string | null;
  /**
   * Filesystem Type
   * @description Filesystem type to initialize on the volume (e.g., 'ext4').
   * @default null
   */
  filesystem_type: string | null;
  /**
   * Name
   * @description A human-readable name for the block storage volume.
   */
  name?: string;
  /**
   * Region
   * @description Slug identifier for the region where the volume will be created (e.g., 'nyc1').
   */
  region?: string;
  /**
   * Size Gigabytes
   * @description Size of the block storage volume in GiB (minimum 1).
   */
  size_gigabytes?: number;
  /**
   * Snapshot Id
   * @description Unique identifier of a snapshot to create the volume from.
   * @default null
   */
  snapshot_id: string | null;
  /**
   * Tags
   * @description List of tags to apply to the volume.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Volume
       * @description The created block storage volume.
       */
      volume: {
          /**
           * Created At
           * @description ISO8601 timestamp when the volume was created.
           */
          created_at: string;
          /**
           * Description
           * @description Description of the volume.
           * @default null
           */
          description: string | null;
          /**
           * Droplet Ids
           * @description List of Droplet IDs the volume is attached to.
           */
          droplet_ids: number[];
          /**
           * Filesystem Label
           * @description Filesystem label on the volume.
           * @default null
           */
          filesystem_label: string | null;
          /**
           * Filesystem Type
           * @description Filesystem type on the volume.
           * @default null
           */
          filesystem_type: string | null;
          /**
           * Id
           * @description Unique identifier for the volume.
           */
          id: string;
          /**
           * Name
           * @description Name of the volume.
           */
          name: string;
          /**
           * Region
           * @description Region object where the volume resides.
           */
          region: {
              /**
               * Available
               * @description Whether the region is available for resource creation.
               */
              available: boolean;
              /**
               * Features
               * @description List of region features.
               */
              features: string[];
              /**
               * Name
               * @description Name of the region.
               */
              name: string;
              /**
               * Sizes
               * @description List of available sizes in this region.
               */
              sizes: string[];
              /**
               * Slug
               * @description Slug identifier for the region.
               */
              slug: string;
          };
          /**
           * Size Gigabytes
           * @description Size of the volume in GiB.
           */
          size_gigabytes: number;
          /**
           * Tags
           * @description Tags applied to the volume.
           */
          tags: string[];
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_DOMAIN tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_DOMAIN_INPUT = {
  /**
   * Ip Address
   * @description Optional IPv4 address for an A record for the domain.
   * @default null
   */
  ip_address: string | null;
  /**
   * Name
   * @description The domain name to create, e.g., 'example.com'.
   */
  name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_DOMAIN tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The created domain object.
       */
      domain: {
          /**
           * Name
           * @description The domain name.
           */
          name: string;
          /**
           * Ttl
           * @description Time to live for the domain (in seconds).
           */
          ttl: number;
          /**
           * Zone File
           * @description Complete contents of the zone file for the domain.
           */
          zone_file: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD_INPUT = {
  /**
   * Data
   * @description Value of the DNS record. Format depends on the record type
   */
  data?: string;
  /**
   * Domain Name
   * @description The domain name to add the record to, e.g., 'example.com'
   */
  domain_name?: string;
  /**
   * Flags
   * @description Flags for CAA records; required if type is CAA
   * @default null
   */
  flags: number | null;
  /**
   * Name
   * @description Host name for the record (e.g., 'www'). Omit for root domain
   * @default null
   */
  name: string | null;
  /**
   * Port
   * @description Port for SRV records; required if type is SRV
   * @default null
   */
  port: number | null;
  /**
   * Priority
   * @description Priority for MX and SRV records; required if type is MX or SRV
   * @default null
   */
  priority: number | null;
  /**
   * Tag
   * @description Tag for CAA records (issue, issuewild, iodef); required if type is CAA
   * @default null
   */
  tag: string | null;
  /**
   * Ttl
   * @description Time to live for the record in seconds
   * @default null
   */
  ttl: number | null;
  /**
   * Type
   * @description Type of DNS record to create
   * @enum {string}
   */
  type?: "A" | "AAAA" | "CNAME" | "MX" | "TXT" | "NS" | "SRV" | "CAA";
  /**
   * Weight
   * @description Weight for SRV records; required if type is SRV
   * @default null
   */
  weight: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain Record
       * @description The created domain record
       */
      domain_record: {
          /**
           * Data
           * @description Record data
           */
          data: string;
          /**
           * Flags
           * @description Flags for CAA records
           * @default null
           */
          flags: number | null;
          /**
           * Id
           * @description Unique identifier for the DNS record
           */
          id: number;
          /**
           * Name
           * @description Host name for the record
           */
          name: string;
          /**
           * Port
           * @description Port for SRV records
           * @default null
           */
          port: number | null;
          /**
           * Priority
           * @description Priority for MX/SRV records
           * @default null
           */
          priority: number | null;
          /**
           * Tag
           * @description Tag for CAA records
           * @default null
           */
          tag: string | null;
          /**
           * Ttl
           * @description Time to live for the record in seconds
           * @default null
           */
          ttl: number | null;
          /**
           * Type
           * @description Type of the DNS record
           */
          type: string;
          /**
           * Weight
           * @description Weight for SRV records
           * @default null
           */
          weight: number | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_DROPLET tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_DROPLET_INPUT = {
  /**
   * Backups
   * @description Whether automatic backups are enabled
   * @default false
   */
  backups: boolean | null;
  /**
   * Image
   * @description Image slug or ID to use for the Droplet
   */
  image?: string | null;
  /**
   * Ipv6
   * @description Whether IPv6 is enabled
   * @default false
   */
  ipv6: boolean | null;
  /**
   * Monitoring
   * @description Whether monitoring is enabled
   * @default false
   */
  monitoring: boolean | null;
  /**
   * Name
   * @description A human-readable name for the Droplet
   */
  name?: string;
  /**
   * Private Networking
   * @description Deprecated: use 'vpc_uuid' instead
   * @default null
   */
  private_networking: boolean | null;
  /**
   * Region
   * @description Region slug where the Droplet will be created
   */
  region?: string;
  /**
   * Size
   * @description Size slug for the Droplet
   */
  size?: string;
  /**
   * Ssh Keys
   * @description List of SSH key IDs or fingerprints to embed
   * @default null
   */
  ssh_keys: (number | string)[] | null;
  /**
   * Tags
   * @description List of tags to apply to the Droplet
   * @default null
   */
  tags: string[] | null;
  /**
   * User Data
   * @description User data (cloud-init) script to configure the Droplet
   * @default null
   */
  user_data: string | null;
  /**
   * Volumes
   * @description IDs of volumes to attach to the Droplet
   * @default null
   */
  volumes: string[] | null;
  /**
   * Vpc Uuid
   * @description VPC UUID to assign the Droplet to
   * @default null
   */
  vpc_uuid: string | null;
  /**
   * With Droplet Agent
   * @description Whether to install the Droplet agent for metrics
   * @default false
   */
  with_droplet_agent: boolean | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_DROPLET tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_DROPLET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Droplet
       * @description The created Droplet object
       */
      droplet: {
          /**
           * Backup Ids
           * @description List of backup IDs
           */
          backup_ids: number[];
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format
           */
          created_at: string;
          /**
           * Disk
           * @description Disk size in GB
           */
          disk: number;
          /**
           * Features
           * @description Enabled features for the droplet
           */
          features: string[];
          /**
           * Id
           * @description Droplet ID
           */
          id: number;
          /**
           * Image
           * @description Image information
           */
          image: {
              /**
               * Created At
               * @description Creation time in ISO8601 format
               */
              created_at: string;
              /**
               * Distribution
               * @description Image distribution
               */
              distribution: string;
              /**
               * Id
               * @description Image ID
               */
              id: number;
              /**
               * Min Disk Size
               * @description Minimum required disk size in GB
               */
              min_disk_size: number;
              /**
               * Name
               * @description Image name
               */
              name: string;
              /**
               * Public
               * @description Whether the image is public
               */
              public: boolean;
              /**
               * Regions
               * @description Regions where the image is available
               */
              regions: string[];
              /**
               * Slug
               * @description Image slug identifier
               * @default null
               */
              slug: string | null;
              /**
               * Type
               * @description Image type
               */
              type: string;
          };
          /**
           * DropletKernel
           * @description Kernel information
           * @default null
           */
          kernel: {
              /**
               * Id
               * @description The kernel ID
               */
              id: number;
              /**
               * Name
               * @description The kernel name
               */
              name: string;
              /**
               * Version
               * @description The kernel version
               */
              version: string;
          } | null;
          /**
           * Locked
           * @description Whether the droplet is locked
           */
          locked: boolean;
          /**
           * Memory
           * @description Memory in MB
           */
          memory: number;
          /**
           * Name
           * @description Droplet name
           */
          name: string;
          /**
           * Networks
           * @description Network configurations
           */
          networks: {
              /**
               * V4
               * @description List of IPv4 network configurations
               */
              v4: {
                  /**
                   * Gateway
                   * @description Gateway for the IPv4 network
                   */
                  gateway: string;
                  /**
                   * Ip Address
                   * @description IPv4 address
                   */
                  ip_address: string;
                  /**
                   * Netmask
                   * @description Netmask for the IPv4 address
                   */
                  netmask: string;
                  /**
                   * Type
                   * @description Network type
                   * @enum {string}
                   */
                  type: "public" | "private";
              }[];
              /**
               * V6
               * @description List of IPv6 network configurations
               */
              v6: {
                  /**
                   * Gateway
                   * @description Gateway for the IPv6 network
                   */
                  gateway: string;
                  /**
                   * Ip Address
                   * @description IPv6 address
                   */
                  ip_address: string;
                  /**
                   * Netmask
                   * @description Netmask bits for IPv6
                   */
                  netmask: number;
                  /**
                   * Type
                   * @description Network type
                   * @enum {string}
                   */
                  type: "public" | "private";
              }[];
          };
          /**
           * NextBackupWindow
           * @description Next backup window information
           * @default null
           */
          next_backup_window: {
              /**
               * End
               * @description End time of the next backup window (ISO8601)
               */
              end: string;
              /**
               * Start
               * @description Start time of the next backup window (ISO8601)
               */
              start: string;
          } | null;
          /**
           * Region
           * @description Region information
           */
          region: {
              /**
               * Available
               * @description Whether the region is available
               */
              available: boolean;
              /**
               * Features
               * @description Features available in the region
               */
              features: string[];
              /**
               * Name
               * @description Name of the region
               */
              name: string;
              /**
               * Slug
               * @description Slug identifier for the region
               */
              slug: string;
          };
          /**
           * Size
           * @description Size information
           */
          size: {
              /**
               * Available
               * @description Whether the size is available
               */
              available: boolean;
              /**
               * Disk
               * @description Disk size in GB
               */
              disk: number;
              /**
               * Memory
               * @description Memory in MB
               */
              memory: number;
              /**
               * Price Hourly
               * @description Hourly price in USD
               */
              price_hourly: number;
              /**
               * Price Monthly
               * @description Monthly price in USD
               */
              price_monthly: number;
              /**
               * Regions
               * @description Regions available for this size
               */
              regions: string[];
              /**
               * Slug
               * @description Size slug identifier
               */
              slug: string;
              /**
               * Transfer
               * @description Transfer bandwidth in TB
               */
              transfer: number;
              /**
               * Vcpus
               * @description Number of virtual CPUs
               */
              vcpus: number;
          };
          /**
           * Size Slug
           * @description Size slug
           */
          size_slug: string;
          /**
           * Snapshot Ids
           * @description List of snapshot IDs
           */
          snapshot_ids: number[];
          /**
           * Status
           * @description Current droplet status
           */
          status: string;
          /**
           * Tags
           * @description List of droplet tags
           */
          tags: string[];
          /**
           * Vcpus
           * @description Number of CPUs
           */
          vcpus: number;
          /**
           * Volume Ids
           * @description List of attached volume IDs
           */
          volume_ids: string[];
          /**
           * Vpc Uuid
           * @description VPC UUID assigned to the droplet
           * @default null
           */
          vpc_uuid: string | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_FIREWALL tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_FIREWALL_INPUT = {
  /**
   * Droplet Ids
   * @description Optional list of Droplet IDs to apply the firewall to.
   * @default null
   */
  droplet_ids: number[] | null;
  /**
   * Inbound Rules
   * @description List of inbound rules; must contain at least one.
   */
  inbound_rules?: {
      /**
       * Ports
       * @description Port or port range (e.g., '80', '8000-9000', or 'all'); required for tcp/udp.
       * @default null
       */
      ports: string | null;
      /**
       * Protocol
       * @description Protocol for inbound traffic.
       * @enum {string}
       */
      protocol: "tcp" | "udp" | "icmp" | "esp" | "gre" | "ah";
      /**
       * Sources
       * @description Source definitions for this inbound rule.
       */
      sources: {
          /**
           * Addresses
           * @description List of IPv4/IPv6 CIDR addresses to allow (e.g., '0.0.0.0/0', '::/0').
           * @default null
           */
          addresses: string[] | null;
          /**
           * Droplet Ids
           * @description List of Droplet IDs to allow as sources.
           * @default null
           */
          droplet_ids: number[] | null;
          /**
           * Kubernetes Ids
           * @description List of Kubernetes cluster UUIDs to allow as sources.
           * @default null
           */
          kubernetes_ids: string[] | null;
          /**
           * Load Balancer Uids
           * @description List of Load Balancer UUIDs to allow as sources.
           * @default null
           */
          load_balancer_uids: string[] | null;
          /**
           * Tags
           * @description List of Droplet tags; droplets with these tags are allowed as sources.
           * @default null
           */
          tags: string[] | null;
      };
  }[];
  /**
   * Name
   * @description Name of the new firewall.
   */
  name?: string;
  /**
   * Outbound Rules
   * @description List of outbound rules; must contain at least one.
   */
  outbound_rules?: {
      /**
       * Destinations
       * @description Destination definitions for this outbound rule.
       */
      destinations: {
          /**
           * Addresses
           * @description List of IPv4/IPv6 CIDR addresses to allow (e.g., '0.0.0.0/0', '::/0').
           * @default null
           */
          addresses: string[] | null;
          /**
           * Droplet Ids
           * @description List of Droplet IDs to allow as destinations.
           * @default null
           */
          droplet_ids: number[] | null;
          /**
           * Kubernetes Ids
           * @description List of Kubernetes cluster UUIDs to allow as destinations.
           * @default null
           */
          kubernetes_ids: string[] | null;
          /**
           * Load Balancer Uids
           * @description List of Load Balancer UUIDs to allow as destinations.
           * @default null
           */
          load_balancer_uids: string[] | null;
          /**
           * Tags
           * @description List of Droplet tags; droplets with these tags are allowed as destinations.
           * @default null
           */
          tags: string[] | null;
      };
      /**
       * Ports
       * @description Port or port range (e.g., '80', '8000-9000', or 'all'); required for tcp/udp.
       * @default null
       */
      ports: string | null;
      /**
       * Protocol
       * @description Protocol for outbound traffic.
       * @enum {string}
       */
      protocol: "tcp" | "udp" | "icmp" | "esp" | "gre" | "ah";
  }[];
  /**
   * Tags
   * @description Optional list of Droplet tags to apply the firewall to matching droplets.
   * @default null
   */
  tags: string[] | null;
  /**
   * Vpc Uuid
   * @description Optional VPC UUID to scope this firewall to a VPC.
   * @default null
   */
  vpc_uuid: string | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_FIREWALL tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_FIREWALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Firewall
       * @description The newly created firewall object.
       */
      firewall: {
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format.
           */
          created_at: string;
          /**
           * Droplet Ids
           * @description Droplet IDs assigned to this firewall.
           */
          droplet_ids: number[];
          /**
           * Id
           * @description Unique firewall identifier.
           */
          id: string;
          /**
           * Inbound Rules
           * @description Configured inbound rules.
           */
          inbound_rules: {
              /**
               * Ports
               * @description Port or port range (e.g., '80', '8000-9000', or 'all'); required for tcp/udp.
               * @default null
               */
              ports: string | null;
              /**
               * Protocol
               * @description Protocol for inbound traffic.
               * @enum {string}
               */
              protocol: "tcp" | "udp" | "icmp" | "esp" | "gre" | "ah";
              /**
               * Sources
               * @description Source definitions for this inbound rule.
               */
              sources: {
                  /**
                   * Addresses
                   * @description List of IPv4/IPv6 CIDR addresses to allow (e.g., '0.0.0.0/0', '::/0').
                   * @default null
                   */
                  addresses: string[] | null;
                  /**
                   * Droplet Ids
                   * @description List of Droplet IDs to allow as sources.
                   * @default null
                   */
                  droplet_ids: number[] | null;
                  /**
                   * Kubernetes Ids
                   * @description List of Kubernetes cluster UUIDs to allow as sources.
                   * @default null
                   */
                  kubernetes_ids: string[] | null;
                  /**
                   * Load Balancer Uids
                   * @description List of Load Balancer UUIDs to allow as sources.
                   * @default null
                   */
                  load_balancer_uids: string[] | null;
                  /**
                   * Tags
                   * @description List of Droplet tags; droplets with these tags are allowed as sources.
                   * @default null
                   */
                  tags: string[] | null;
              };
          }[];
          /**
           * Name
           * @description Name of the firewall.
           */
          name: string;
          /**
           * Outbound Rules
           * @description Configured outbound rules.
           */
          outbound_rules: {
              /**
               * Destinations
               * @description Destination definitions for this outbound rule.
               */
              destinations: {
                  /**
                   * Addresses
                   * @description List of IPv4/IPv6 CIDR addresses to allow (e.g., '0.0.0.0/0', '::/0').
                   * @default null
                   */
                  addresses: string[] | null;
                  /**
                   * Droplet Ids
                   * @description List of Droplet IDs to allow as destinations.
                   * @default null
                   */
                  droplet_ids: number[] | null;
                  /**
                   * Kubernetes Ids
                   * @description List of Kubernetes cluster UUIDs to allow as destinations.
                   * @default null
                   */
                  kubernetes_ids: string[] | null;
                  /**
                   * Load Balancer Uids
                   * @description List of Load Balancer UUIDs to allow as destinations.
                   * @default null
                   */
                  load_balancer_uids: string[] | null;
                  /**
                   * Tags
                   * @description List of Droplet tags; droplets with these tags are allowed as destinations.
                   * @default null
                   */
                  tags: string[] | null;
              };
              /**
               * Ports
               * @description Port or port range (e.g., '80', '8000-9000', or 'all'); required for tcp/udp.
               * @default null
               */
              ports: string | null;
              /**
               * Protocol
               * @description Protocol for outbound traffic.
               * @enum {string}
               */
              protocol: "tcp" | "udp" | "icmp" | "esp" | "gre" | "ah";
          }[];
          /**
           * Pending Changes
           * @description Pending changes to the firewall.
           */
          pending_changes: {
              /**
               * Droplet Id
               * @description Droplet ID involved in a pending change.
               */
              droplet_id: number;
              /**
               * Removing
               * @description True if the droplet is being removed.
               */
              removing: boolean;
              /**
               * Status
               * @description Status of this pending change.
               */
              status: string;
          }[];
          /**
           * Status
           * @description Current status (e.g., 'pending', 'succeeded').
           */
          status: string;
          /**
           * Tags
           * @description Droplet tags assigned to this firewall.
           */
          tags: string[];
          /**
           * Vpc Uuid
           * @description VPC UUID associated with this firewall.
           * @default null
           */
          vpc_uuid: string | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER_INPUT = {
  /**
   * Auto Upgrade
   * @description Whether to auto-upgrade to new patch releases.
   * @default false
   */
  auto_upgrade: boolean | null;
  /**
   * MaintenancePolicy
   * @description Scheduled maintenance policy for the cluster.
   * @default null
   */
  maintenance_policy: {
      /**
       * Day
       * @description Day of week for maintenance.
       * @enum {string}
       */
      day: "any" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
      /**
       * Start Time
       * @description Start time for maintenance in HH:MM:SS format.
       */
      start_time: string;
  } | null;
  /**
   * Name
   * @description A human-readable name for the Kubernetes cluster.
   */
  name?: string;
  /**
   * Node Pools
   * @description List of node pools; at least one required.
   */
  node_pools?: {
      /**
       * Auto Scale
       * @description Enable auto-scaling for this node pool.
       * @default null
       */
      auto_scale: boolean | null;
      /**
       * Count
       * @description Number of nodes in the pool.
       */
      count: number;
      /**
       * Labels
       * @description Key-value labels to apply to nodes.
       * @default null
       */
      labels: {
          [key: string]: string;
      } | null;
      /**
       * Max Nodes
       * @description Maximum nodes for auto-scaling.
       * @default null
       */
      max_nodes: number | null;
      /**
       * Min Nodes
       * @description Minimum nodes for auto-scaling.
       * @default null
       */
      min_nodes: number | null;
      /**
       * Name
       * @description Name for the node pool.
       */
      name: string;
      /**
       * Size
       * @description Droplet size for nodes (e.g., 's-1vcpu-2gb').
       */
      size: string;
      /**
       * Tags
       * @description Tags to apply to nodes in this pool.
       * @default null
       */
      tags: string[] | null;
      /**
       * Taints
       * @description Kubernetes taints for nodes in the pool.
       * @default null
       */
      taints: {
          /**
           * Effect
           * @description Taint effect.
           * @enum {string}
           */
          effect: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
          /**
           * Key
           * @description Taint key.
           */
          key: string;
          /**
           * Value
           * @description Taint value.
           */
          value: string;
      }[] | null;
  }[];
  /**
   * Region
   * @description Region slug where the cluster will be created (e.g., 'nyc1').
   */
  region?: string;
  /**
   * Tags
   * @description List of tags to apply to the cluster.
   * @default null
   */
  tags: string[] | null;
  /**
   * Version
   * @description Kubernetes version slug to deploy (e.g., '1.21.5-do.0').
   */
  version?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kubernetes Cluster
       * @description The newly created Kubernetes cluster.
       */
      kubernetes_cluster: {
          /**
           * Auto Upgrade
           * @description Whether auto-upgrade is enabled.
           */
          auto_upgrade: boolean;
          /**
           * Cluster Subnet
           * @description CIDR for cluster network.
           */
          cluster_subnet: string;
          /**
           * Created At
           * @description ISO8601 timestamp of creation.
           */
          created_at: string;
          /**
           * Endpoint
           * @description Public endpoint for the Kubernetes API.
           */
          endpoint: string;
          /**
           * Id
           * @description Unique identifier for the cluster.
           */
          id: string;
          /**
           * Ipv4
           * @description Public IPv4 address of the cluster.
           * @default null
           */
          ipv4: string | null;
          /**
           * MaintenancePolicy
           * @description Maintenance policy.
           * @default null
           */
          maintenance_policy: {
              /**
               * Day
               * @description Day of week for maintenance.
               * @enum {string}
               */
              day: "any" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
              /**
               * Start Time
               * @description Start time for maintenance in HH:MM:SS format.
               */
              start_time: string;
          } | null;
          /**
           * Name
           * @description Name of the cluster.
           */
          name: string;
          /**
           * Node Pools
           * @description Node pools in the cluster.
           */
          node_pools: {
              /**
               * Auto Scale
               * @description Auto-scaling enabled for this pool.
               * @default null
               */
              auto_scale: boolean | null;
              /**
               * Count
               * @description Number of nodes in the pool.
               */
              count: number;
              /**
               * Id
               * @description Unique identifier for the node pool.
               */
              id: string;
              /**
               * Labels
               * @description Node labels as key-value pairs.
               */
              labels: {
                  [key: string]: string;
              };
              /**
               * Max Nodes
               * @description Maximum nodes for auto-scaling.
               * @default null
               */
              max_nodes: number | null;
              /**
               * Min Nodes
               * @description Minimum nodes for auto-scaling.
               * @default null
               */
              min_nodes: number | null;
              /**
               * Name
               * @description Name of the node pool.
               */
              name: string;
              /**
               * Size
               * @description Droplet size for nodes.
               */
              size: string;
              /**
               * Tags
               * @description Tags applied to nodes in this pool.
               */
              tags: string[];
              /**
               * Taints
               * @description Taints applied to nodes.
               */
              taints: {
                  /**
                   * Effect
                   * @description Taint effect.
                   * @enum {string}
                   */
                  effect: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
                  /**
                   * Key
                   * @description Taint key.
                   */
                  key: string;
                  /**
                   * Value
                   * @description Taint value.
                   */
                  value: string;
              }[];
          }[];
          /**
           * Region
           * @description Region slug of the cluster.
           */
          region: string;
          /**
           * Service Subnet
           * @description CIDR for Kubernetes services.
           */
          service_subnet: string;
          /**
           * Status
           * @description Current cluster status.
           */
          status: {
              /**
               * Message
               * @description Additional status details.
               * @default null
               */
              message: string | null;
              /**
               * State
               * @description Current status of the cluster (e.g., 'running').
               */
              state: string;
          };
          /**
           * Surge Upgrade
           * @description If surge upgrades are enabled.
           * @default null
           */
          surge_upgrade: boolean | null;
          /**
           * Tags
           * @description Tags assigned to the cluster.
           */
          tags: string[];
          /**
           * Updated At
           * @description ISO8601 timestamp of last update.
           */
          updated_at: string;
          /**
           * Version
           * @description Kubernetes version slug.
           */
          version: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_SSH_KEY tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_SSH_KEY_INPUT = {
  /**
   * Name
   * @description A human-readable name for the new SSH key.
   */
  name?: string;
  /**
   * Public Key
   * @description The SSH public key in OpenSSH format, e.g., 'ssh-rsa AAAAB3Nza...'.
   */
  public_key?: unknown;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_SSH_KEY tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_SSH_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ssh Key
       * @description The created SSH key
       */
      ssh_key: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Fingerprint
           * @description Fingerprint of the SSH key
           */
          fingerprint: string;
          /**
           * Id
           * @description Unique identifier for the SSH key
           */
          id: number;
          /**
           * Name
           * @description Name given to the SSH key
           */
          name: string;
          /**
           * Public Key
           * @description The SSH public key in OpenSSH format
           */
          public_key: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_TAG tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_TAG_INPUT = {
  /**
   * Name
   * @description The name of the new tag. Must be 1-255 characters and only contain alphanumeric characters, ':', '.', or '-'.
   */
  name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_TAG tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tag
       * @description The created tag object.
       */
      tag: {
          /**
           * Name
           * @description Name of the tag.
           */
          name: string;
          /**
           * Resources
           * @description Associated resource counts for this tag.
           */
          resources: {
              /**
               * Databases
               * @description Database cluster resource counts.
               */
              databases: {
                  /**
                   * Count
                   * @description Number of resources of this type tagged.
                   */
                  count: number;
                  /**
                   * Last Tagged Uri
                   * @description URI of the most recently tagged resource of this type (nullable).
                   * @default null
                   */
                  last_tagged_uri: string | null;
              };
              /**
               * Droplets
               * @description Droplet resource counts.
               */
              droplets: {
                  /**
                   * Count
                   * @description Number of resources of this type tagged.
                   */
                  count: number;
                  /**
                   * Last Tagged Uri
                   * @description URI of the most recently tagged resource of this type (nullable).
                   * @default null
                   */
                  last_tagged_uri: string | null;
              };
              /**
               * Images
               * @description Image resource counts.
               */
              images: {
                  /**
                   * Count
                   * @description Number of resources of this type tagged.
                   */
                  count: number;
                  /**
                   * Last Tagged Uri
                   * @description URI of the most recently tagged resource of this type (nullable).
                   * @default null
                   */
                  last_tagged_uri: string | null;
              };
              /**
               * Volume Snapshots
               * @description Volume snapshots resource counts.
               */
              volume_snapshots: {
                  /**
                   * Count
                   * @description Number of resources of this type tagged.
                   */
                  count: number;
                  /**
                   * Last Tagged Uri
                   * @description URI of the most recently tagged resource of this type (nullable).
                   * @default null
                   */
                  last_tagged_uri: string | null;
              };
              /**
               * Volumes
               * @description Block storage volumes resource counts.
               */
              volumes: {
                  /**
                   * Count
                   * @description Number of resources of this type tagged.
                   */
                  count: number;
                  /**
                   * Last Tagged Uri
                   * @description URI of the most recently tagged resource of this type (nullable).
                   * @default null
                   */
                  last_tagged_uri: string | null;
              };
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_VPC tool input.
 */
type DIGITAL_OCEAN_CREATE_NEW_VPC_INPUT = {
  /**
   * Description
   * @description A free-form description of the VPC.
   * @default null
   */
  description: string | null;
  /**
   * Ip Range
   * @description The IP range in CIDR notation for the VPC (default is 10.10.10.0/24).
   * @default null
   */
  ip_range: string | null;
  /**
   * Name
   * @description The name of the VPC.
   */
  name?: string;
  /**
   * Region
   * @description Slug identifier for the region where the VPC will be created.
   */
  region?: string;
  /**
   * Tags
   * @description List of tag names to apply to the VPC after creation.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_CREATE_NEW_VPC tool output.
 */
type DIGITAL_OCEAN_CREATE_NEW_VPC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Vpc
       * @description The newly created VPC object.
       */
      vpc: {
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format.
           */
          created_at: string;
          /**
           * Default
           * @description Whether this is the default VPC for the region.
           */
          default: boolean;
          /**
           * Description
           * @description Description of the VPC.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the VPC.
           */
          id: string;
          /**
           * Ip Range
           * @description IP range of the VPC in CIDR notation.
           */
          ip_range: string;
          /**
           * Name
           * @description Name of the VPC.
           */
          name: string;
          /**
           * Region
           * @description Region where the VPC is located.
           */
          region: string;
          /**
           * Tags
           * @description List of tags assigned to the VPC.
           */
          tags: string[];
          /**
           * Urn
           * @description Uniform Resource Name for the VPC.
           */
          urn: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME tool input.
 */
type DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME_INPUT = {
  /**
   * Region
   * @description The slug identifier for the region; required only if deleting by name.
   * @default null
   */
  region: string | null;
  /**
   * Volume Id
   * @description The unique identifier of the block storage volume to delete.
   */
  volume_id?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME tool output.
 */
type DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER tool input.
 */
type DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER_INPUT = {
  /**
   * Database Cluster Uuid
   * @description The UUID of the database cluster to destroy
   */
  database_cluster_uuid?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER tool output.
 */
type DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_DOMAIN tool input.
 */
type DIGITAL_OCEAN_DELETE_DOMAIN_INPUT = {
  /**
   * Name
   * @description The fully qualified domain name to delete, e.g., 'example.com'
   */
  name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_DOMAIN tool output.
 */
type DIGITAL_OCEAN_DELETE_DOMAIN_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_DOMAIN_RECORD tool input.
 */
type DIGITAL_OCEAN_DELETE_DOMAIN_RECORD_INPUT = {
  /**
   * Name
   * @description The domain name (e.g., 'example.com').
   */
  name?: string;
  /**
   * Record Id
   * @description The unique identifier of the DNS record to delete.
   */
  record_id?: number;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_DOMAIN_RECORD tool output.
 */
type DIGITAL_OCEAN_DELETE_DOMAIN_RECORD_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_EXISTING_DROPLET tool input.
 */
type DIGITAL_OCEAN_DELETE_EXISTING_DROPLET_INPUT = {
  /**
   * Droplet Id
   * @description Unique identifier of the Droplet to delete
   */
  droplet_id?: number;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_EXISTING_DROPLET tool output.
 */
type DIGITAL_OCEAN_DELETE_EXISTING_DROPLET_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_FIREWALL tool input.
 */
type DIGITAL_OCEAN_DELETE_FIREWALL_INPUT = {
  /**
   * Firewall Id
   * @description Unique identifier of the firewall to delete
   */
  firewall_id?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_FIREWALL tool output.
 */
type DIGITAL_OCEAN_DELETE_FIREWALL_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_IMAGE tool input.
 */
type DIGITAL_OCEAN_DELETE_IMAGE_INPUT = {
  /**
   * Image Id
   * @description A unique number used to identify and delete an image.
   */
  image_id?: number;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_IMAGE tool output.
 */
type DIGITAL_OCEAN_DELETE_IMAGE_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_LOAD_BALANCER tool input.
 */
type DIGITAL_OCEAN_DELETE_LOAD_BALANCER_INPUT = {
  /**
   * Load Balancer Id
   * @description Unique identifier of the load balancer to delete.
   */
  load_balancer_id?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_LOAD_BALANCER tool output.
 */
type DIGITAL_OCEAN_DELETE_LOAD_BALANCER_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_SSH_KEY tool input.
 */
type DIGITAL_OCEAN_DELETE_SSH_KEY_INPUT = {
  /**
   * Key Id Or Fingerprint
   * @description The identifier for the SSH key (numeric ID or fingerprint).
   */
  key_id_or_fingerprint?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_SSH_KEY tool output.
 */
type DIGITAL_OCEAN_DELETE_SSH_KEY_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_TAG tool input.
 */
type DIGITAL_OCEAN_DELETE_TAG_INPUT = {
  /**
   * Name
   * @description The name of the tag to delete; all resources with this tag will be untagged.
   */
  name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_TAG tool output.
 */
type DIGITAL_OCEAN_DELETE_TAG_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_VPC tool input.
 */
type DIGITAL_OCEAN_DELETE_VPC_INPUT = {
  /**
   * Vpc Id
   * @description Unique identifier of the VPC to delete
   */
  vpc_id?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DELETE_VPC tool output.
 */
type DIGITAL_OCEAN_DELETE_VPC_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER tool input.
 */
type DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER_INPUT = {
  /**
   * Algorithm
   * @description Load balancing algorithm to use; defaults to 'round_robin'.
   * @default null
   * @enum {string|null}
   */
  algorithm: "round_robin" | "least_connections" | null;
  /**
   * Droplet Ids
   * @description List of droplet IDs to attach (mutually exclusive with tag).
   * @default null
   */
  droplet_ids: number[] | null;
  /**
   * Enable Backend Keepalive
   * @description Enable keepalive connections to backend droplets.
   * @default false
   */
  enable_backend_keepalive: boolean | null;
  /**
   * Enable Proxy Protocol
   * @description Enable PROXY protocol for backend connections.
   * @default false
   */
  enable_proxy_protocol: boolean | null;
  /**
   * Firewall Policy
   * @description ID of a custom firewall policy to apply.
   * @default null
   */
  firewall_policy: string | null;
  /**
   * Forwarding Rules
   * @description List of forwarding rules mapping entry to target protocols and ports.
   */
  forwarding_rules?: {
      /**
       * Certificate Id
       * @description ID of a TLS certificate; required if entry_protocol is 'https' or 'tls'.
       * @default null
       */
      certificate_id: string | null;
      /**
       * Entry Port
       * @description Port on which the load balancer accepts traffic.
       */
      entry_port: number;
      /**
       * Entry Protocol
       * @description Protocol used by the load balancer for inbound connections.
       * @enum {string}
       */
      entry_protocol: "http" | "https" | "tcp" | "tls";
      /**
       * Target Port
       * @description Port on the backend droplets for forwarded traffic.
       */
      target_port: number;
      /**
       * Target Protocol
       * @description Protocol used to forward traffic to backend droplets.
       * @enum {string}
       */
      target_protocol: "http" | "https" | "tcp" | "tls";
      /**
       * Tls Passthrough
       * @description Pass TLS through to backend droplets; only valid when entry_protocol is 'tls'.
       * @default false
       */
      tls_passthrough: boolean | null;
  }[];
  /**
   * HealthCheck
   * @description Optional health check configuration.
   * @default null
   */
  health_check: {
      /**
       * Check Interval Seconds
       * @description Interval in seconds between health checks. Minimum: 5.
       * @default 10
       */
      check_interval_seconds: number | null;
      /**
       * Healthy Threshold
       * @description Consecutive successful checks before marking healthy.
       * @default 5
       */
      healthy_threshold: number | null;
      /**
       * Path
       * @description URL path for HTTP/HTTPS health checks (e.g., '/health').
       * @default null
       */
      path: string | null;
      /**
       * Port
       * @description Port on which to perform health checks.
       */
      port: number;
      /**
       * Protocol
       * @description Protocol used to perform health checks.
       * @enum {string}
       */
      protocol: "http" | "https" | "tcp";
      /**
       * Response Timeout Seconds
       * @description Timeout in seconds for a health check response.
       * @default 5
       */
      response_timeout_seconds: number | null;
      /**
       * Unhealthy Threshold
       * @description Consecutive failed checks before marking unhealthy.
       * @default 3
       */
      unhealthy_threshold: number | null;
  } | null;
  /**
   * Name
   * @description Unique name for the new load balancer.
   */
  name?: string;
  /**
   * Redirect Http To Https
   * @description Redirect HTTP traffic to HTTPS.
   * @default false
   */
  redirect_http_to_https: boolean | null;
  /**
   * Region
   * @description Region slug where the load balancer will be created (e.g., 'nyc1').
   */
  region?: string;
  /**
   * StickySessions
   * @description Optional session persistence configuration.
   * @default null
   */
  sticky_sessions: {
      /**
       * Cookie Name
       * @description Name of the session cookie; required if type is 'cookie'.
       * @default null
       */
      cookie_name: string | null;
      /**
       * Cookie Ttl Seconds
       * @description Time-to-live in seconds for the session cookie.
       * @default 300
       */
      cookie_ttl_seconds: number | null;
      /**
       * Type
       * @description Type of session persistence; 'cookie' uses a session cookie.
       * @enum {string}
       */
      type: "none" | "cookie";
  } | null;
  /**
   * Tag
   * @description Tag to select droplets (mutually exclusive with droplet_ids).
   * @default null
   */
  tag: string | null;
  /**
   * Vpc Uuid
   * @description UUID of the VPC to assign the load balancer to.
   * @default null
   */
  vpc_uuid: string | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER tool output.
 */
type DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Load Balancer
       * @description The created load balancer instance.
       */
      load_balancer: {
          /**
           * Algorithm
           * @description Load balancing algorithm in use.
           */
          algorithm: string;
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format.
           */
          created_at: string;
          /**
           * Droplet Ids
           * @description Attached droplet IDs.
           */
          droplet_ids: number[];
          /**
           * Enable Backend Keepalive
           * @description Whether backend keepalive connections are enabled.
           */
          enable_backend_keepalive: boolean;
          /**
           * Enable Proxy Protocol
           * @description Whether PROXY protocol is enabled.
           */
          enable_proxy_protocol: boolean;
          /**
           * Firewall Policy
           * @description Firewall policy ID applied to the load balancer.
           * @default null
           */
          firewall_policy: string | null;
          /**
           * Forwarding Rules
           * @description Configured forwarding rules.
           */
          forwarding_rules: {
              /**
               * Certificate Id
               * @description ID of a TLS certificate; required if entry_protocol is 'https' or 'tls'.
               * @default null
               */
              certificate_id: string | null;
              /**
               * Entry Port
               * @description Port on which the load balancer accepts traffic.
               */
              entry_port: number;
              /**
               * Entry Protocol
               * @description Protocol used by the load balancer for inbound connections.
               * @enum {string}
               */
              entry_protocol: "http" | "https" | "tcp" | "tls";
              /**
               * Target Port
               * @description Port on the backend droplets for forwarded traffic.
               */
              target_port: number;
              /**
               * Target Protocol
               * @description Protocol used to forward traffic to backend droplets.
               * @enum {string}
               */
              target_protocol: "http" | "https" | "tcp" | "tls";
              /**
               * Tls Passthrough
               * @description Pass TLS through to backend droplets; only valid when entry_protocol is 'tls'.
               * @default false
               */
              tls_passthrough: boolean | null;
          }[];
          /**
           * HealthCheck
           * @description Configured health check settings.
           * @default null
           */
          health_check: {
              /**
               * Check Interval Seconds
               * @description Interval in seconds between health checks. Minimum: 5.
               * @default 10
               */
              check_interval_seconds: number | null;
              /**
               * Healthy Threshold
               * @description Consecutive successful checks before marking healthy.
               * @default 5
               */
              healthy_threshold: number | null;
              /**
               * Path
               * @description URL path for HTTP/HTTPS health checks (e.g., '/health').
               * @default null
               */
              path: string | null;
              /**
               * Port
               * @description Port on which to perform health checks.
               */
              port: number;
              /**
               * Protocol
               * @description Protocol used to perform health checks.
               * @enum {string}
               */
              protocol: "http" | "https" | "tcp";
              /**
               * Response Timeout Seconds
               * @description Timeout in seconds for a health check response.
               * @default 5
               */
              response_timeout_seconds: number | null;
              /**
               * Unhealthy Threshold
               * @description Consecutive failed checks before marking unhealthy.
               * @default 3
               */
              unhealthy_threshold: number | null;
          } | null;
          /**
           * Id
           * @description Unique identifier for the load balancer.
           */
          id: string;
          /**
           * Ip
           * @description Public IP address of the load balancer.
           */
          ip: string;
          /**
           * Name
           * @description Name of the load balancer.
           */
          name: string;
          /**
           * Redirect Http To Https
           * @description Whether HTTP traffic is redirected to HTTPS.
           */
          redirect_http_to_https: boolean;
          /**
           * Region
           * @description Region information object.
           */
          region: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Current status of the load balancer.
           */
          status: string;
          /**
           * StickySessions
           * @description Configured session persistence settings.
           * @default null
           */
          sticky_sessions: {
              /**
               * Cookie Name
               * @description Name of the session cookie; required if type is 'cookie'.
               * @default null
               */
              cookie_name: string | null;
              /**
               * Cookie Ttl Seconds
               * @description Time-to-live in seconds for the session cookie.
               * @default 300
               */
              cookie_ttl_seconds: number | null;
              /**
               * Type
               * @description Type of session persistence; 'cookie' uses a session cookie.
               * @enum {string}
               */
              type: "none" | "cookie";
          } | null;
          /**
           * Tag
           * @description Tag used to select droplets.
           * @default null
           */
          tag: string | null;
          /**
           * Vpc Uuid
           * @description VPC UUID assigned to the load balancer.
           * @default null
           */
          vpc_uuid: string | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS tool input.
 */
type DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS_INPUT = {
  /**
   * Name
   * @description Filter records by record name (e.g., 'www').
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page of results to return (>= 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-200).
   * @default null
   */
  per_page: number | null;
  /**
   * Type
   * @description Filter records by DNS record type.
   * @default null
   * @enum {string|null}
   */
  type: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "TXT" | "SRV" | "LOC" | "CAA" | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS tool output.
 */
type DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain Records
       * @description List of domain record objects.
       */
      domain_records: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the record was created.
           */
          created_at: string;
          /**
           * Data
           * @description Value for the DNS record.
           */
          data: string;
          /**
           * Flags
           * @description Flags for CAA records.
           * @default null
           */
          flags: number | null;
          /**
           * Id
           * @description Unique identifier for the domain record.
           */
          id: number;
          /**
           * Name
           * @description Name of the DNS record, e.g., 'www'.
           */
          name: string;
          /**
           * Port
           * @description Port for SRV records.
           * @default null
           */
          port: number | null;
          /**
           * Priority
           * @description Priority for MX records.
           * @default null
           */
          priority: number | null;
          /**
           * Tag
           * @description Tag for CAA records.
           * @default null
           */
          tag: string | null;
          /**
           * Ttl
           * @description Time to live for the DNS record in seconds.
           */
          ttl: number;
          /**
           * Type
           * @description The type of the DNS record, e.g., 'A'.
           */
          type: string;
          /**
           * Weight
           * @description Weight for SRV records.
           * @default null
           */
          weight: number | null;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links.
           */
          pages: {
              /**
               * First
               * @description URL of the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL of the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL of the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL of the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Response metadata including total count.
       */
      meta: {
          /**
           * Total
           * @description Total number of domain records.
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_DATABASES tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_DATABASES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items to return per page. Must be between 1 and 200.
   * @default null
   */
  per_page: number | null;
  /**
   * Tag Name
   * @description Filter to return only database clusters with this tag name.
   * @default null
   */
  tag_name: string | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_DATABASES tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Databases
       * @description List of managed database cluster objects.
       */
      databases: {
          /**
           * Alerts
           * @description Alert settings for the cluster.
           */
          alerts: {
              /**
               * Connection
               * @description Connection alert settings.
               */
              connection: {
                  /**
                   * Email
                   * @description Whether email notifications are enabled.
                   */
                  email: boolean;
                  /**
                   * Enabled
                   * @description Whether this alert is enabled.
                   */
                  enabled: boolean;
                  /**
                   * Slack
                   * @description Whether Slack notifications are enabled.
                   */
                  slack: boolean;
              };
              /**
               * Cpu
               * @description CPU alert settings.
               */
              cpu: {
                  /**
                   * Email
                   * @description Whether email notifications are enabled.
                   */
                  email: boolean;
                  /**
                   * Enabled
                   * @description Whether this alert is enabled.
                   */
                  enabled: boolean;
                  /**
                   * Slack
                   * @description Whether Slack notifications are enabled.
                   */
                  slack: boolean;
                  /**
                   * Threshold
                   * @description CPU usage percentage threshold for CPU alerts.
                   */
                  threshold: number;
              };
              /**
               * Query Time
               * @description Query time alert settings.
               */
              query_time: {
                  /**
                   * Email
                   * @description Whether email notifications are enabled.
                   */
                  email: boolean;
                  /**
                   * Enabled
                   * @description Whether this alert is enabled.
                   */
                  enabled: boolean;
                  /**
                   * Slack
                   * @description Whether Slack notifications are enabled.
                   */
                  slack: boolean;
                  /**
                   * Threshold
                   * @description Threshold in milliseconds for query time alerts.
                   */
                  threshold: number;
              };
          };
          /**
           * Connection
           * @description Public connection settings.
           */
          connection: {
              /**
               * Database
               * @description Name of the default database.
               */
              database: string;
              /**
               * Host
               * @description Hostname for connections.
               */
              host: string;
              /**
               * Password
               * @description Password for connections.
               */
              password: string;
              /**
               * Port
               * @description Port for connections.
               */
              port: string;
              /**
               * Ssl
               * @description Whether SSL is required.
               */
              ssl: boolean;
              /**
               * Uri
               * @description Connection URI including credentials and parameters.
               */
              uri: string;
              /**
               * User
               * @description User for connections.
               */
              user: string;
          };
          /**
           * Created At
           * @description ISO8601 timestamp when the cluster was created.
           */
          created_at: string;
          /**
           * Db Names
           * @description List of database names in the cluster.
           */
          db_names: string[];
          /**
           * Engine
           * @description Database engine (e.g., pg, mysql, redis).
           */
          engine: string;
          /**
           * Id
           * @description Unique identifier for the database cluster.
           */
          id: string;
          /**
           * Maintenance Policy
           * @description Maintenance policy for the cluster.
           */
          maintenance_policy: {
              /**
               * Window
               * @description Maintenance policy window settings.
               */
              window: {
                  /**
                   * Day
                   * @description Day of the week for the maintenance window.
                   */
                  day: string;
                  /**
                   * Hour
                   * @description Hour of the day in UTC for the maintenance window.
                   */
                  hour: string;
              };
          };
          /**
           * Maintenance Window
           * @description Maintenance window details.
           */
          maintenance_window: {
              /**
               * Day
               * @description Day of the week for the maintenance window.
               */
              day: string;
              /**
               * Hour
               * @description Hour of the day in UTC for the maintenance window.
               */
              hour: string;
          };
          /**
           * Name
           * @description Name of the database cluster.
           */
          name: string;
          /**
           * Num Nodes
           * @description Number of nodes in the cluster.
           */
          num_nodes: number;
          /**
           * Private Connection
           * @description Private connection settings.
           */
          private_connection: {
              /**
               * Database
               * @description Name of the default database.
               */
              database: string;
              /**
               * Host
               * @description Hostname for connections.
               */
              host: string;
              /**
               * Password
               * @description Password for connections.
               */
              password: string;
              /**
               * Port
               * @description Port for connections.
               */
              port: string;
              /**
               * Ssl
               * @description Whether SSL is required.
               */
              ssl: boolean;
              /**
               * Uri
               * @description Connection URI including credentials and parameters.
               */
              uri: string;
              /**
               * User
               * @description User for connections.
               */
              user: string;
          };
          /**
           * Private Network Uuid
           * @description UUID of the private network VPC the cluster is in.
           * @default null
           */
          private_network_uuid: string | null;
          /**
           * Region
           * @description Region slug where the cluster is deployed.
           */
          region: string;
          /**
           * Size
           * @description Size slug of the cluster.
           */
          size: string;
          /**
           * Status
           * @description Current status of the cluster.
           */
          status: string;
          /**
           * Tags
           * @description List of tags assigned to the cluster.
           */
          tags: string[];
          /**
           * Users
           * @description List of database users.
           */
          users: {
              /**
               * Name
               * @description Name of the database user.
               */
              name: string;
              /**
               * Role
               * @description Role assigned to the user (e.g., primary, readonly).
               */
              role: string;
          }[];
          /**
           * Version
           * @description Engine version.
           */
          version: string;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links object containing URLs for navigation.
           */
          pages: {
              /**
               * First
               * @description URL for the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL for the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL for the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL for the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Total
           * @description Total number of database clusters matching the query.
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_DOMAINS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_DOMAINS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of domains to return per page (1-200). Default is 20 if omitted.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_DOMAINS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of domain records.
       */
      domains: {
          /**
           * Name
           * @description The domain name, e.g., 'example.com'.
           */
          name: string;
          /**
           * Ttl
           * @description Time to live for all records under this domain, in seconds.
           */
          ttl: number;
          /**
           * Zone File
           * @description The full contents of the DNS zone file for the domain.
           */
          zone_file: string;
      }[];
      /**
       * Links
       * @description Pagination links object containing page URLs.
       * @default null
       */
      links: {
          /**
           * Pages
           * @description Pagination pages links.
           */
          pages: {
              /**
               * First
               * @description URL for the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL for the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL for the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL for the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      } | null;
      /**
       * Meta
       * @description Metadata about the listing of domains.
       * @default null
       */
      meta: {
          /**
           * Total
           * @description Total number of domains in the account.
           */
          total: number;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_DROPLETS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_DROPLETS_INPUT = {
  /**
   * Page
   * @description Page of results to return. Must be >= 1. Default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page. Must be between 1 and 200. Default is 20.
   * @default 20
   */
  per_page: number | null;
  /**
   * Tag Name
   * @description Filter droplets by tag name.
   * @default null
   */
  tag_name: string | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_DROPLETS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_DROPLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Droplets
       * @description List of droplet resources.
       */
      droplets: {
          /**
           * Backup Ids
           * @description List of backup IDs.
           */
          backup_ids: number[];
          /**
           * Created At
           * @description Droplet creation time in ISO8601 UTC format.
           */
          created_at: string;
          /**
           * Disk
           * @description Disk in GB.
           */
          disk: number;
          /**
           * Features
           * @description Features enabled for the droplet.
           */
          features: string[];
          /**
           * Id
           * @description Droplet ID.
           */
          id: number;
          /**
           * Image
           * @description Image information.
           */
          image: {
              /**
               * Created At
               * @description Creation time in ISO8601 UTC format.
               */
              created_at: string;
              /**
               * Distribution
               * @description Distribution of the image.
               */
              distribution: string;
              /**
               * Id
               * @description ID of the image.
               */
              id: number;
              /**
               * Min Disk Size
               * @description Minimum disk size in GB required.
               */
              min_disk_size: number;
              /**
               * Name
               * @description Name of the image.
               */
              name: string;
              /**
               * Public
               * @description Whether the image is public.
               */
              public: boolean;
              /**
               * Regions
               * @description Regions where the image is available.
               */
              regions: string[];
              /**
               * Size Gigabytes
               * @description Size of the image in gigabytes.
               */
              size_gigabytes: number;
              /**
               * Slug
               * @description Slug identifier for the image.
               * @default null
               */
              slug: string | null;
              /**
               * Type
               * @description Type of the image (e.g., snapshot).
               */
              type: string;
          };
          /**
           * Kernel
           * @description Kernel information.
           */
          kernel: {
              /**
               * Id
               * @description ID of the kernel.
               */
              id: number;
              /**
               * Name
               * @description Name of the kernel.
               */
              name: string;
              /**
               * Version
               * @description Version of the kernel.
               */
              version: string;
          };
          /**
           * Locked
           * @description Whether the droplet is locked.
           */
          locked: boolean;
          /**
           * Memory
           * @description Memory in MB.
           */
          memory: number;
          /**
           * Name
           * @description Droplet name.
           */
          name: string;
          /**
           * Networks
           * @description Network information.
           */
          networks: {
              /**
               * V4
               * @description List of IPv4 network configurations.
               */
              v4: {
                  /**
                   * Gateway
                   * @description Gateway for the IPv4 network.
                   */
                  gateway: string;
                  /**
                   * Ip Address
                   * @description IPv4 address.
                   */
                  ip_address: string;
                  /**
                   * Netmask
                   * @description Netmask for the IPv4 address.
                   */
                  netmask: string;
                  /**
                   * Type
                   * @description Network type, e.g., public or private.
                   */
                  type: string;
              }[];
              /**
               * V6
               * @description List of IPv6 network configurations.
               */
              v6: {
                  /**
                   * Gateway
                   * @description Gateway for the IPv6 network.
                   */
                  gateway: string;
                  /**
                   * Ip Address
                   * @description IPv6 address.
                   */
                  ip_address: string;
                  /**
                   * Netmask
                   * @description Netmask bits for IPv6.
                   */
                  netmask: number;
                  /**
                   * Type
                   * @description Network type, e.g., public or private.
                   */
                  type: string;
              }[];
          };
          /**
           * NextBackupWindow
           * @description Next backup window information.
           * @default null
           */
          next_backup_window: {
              /**
               * End
               * @description End time of next backup window in ISO8601 UTC format.
               */
              end: string;
              /**
               * Start
               * @description Start time of next backup window in ISO8601 UTC format.
               */
              start: string;
          } | null;
          /**
           * Region
           * @description Region information.
           */
          region: {
              /**
               * Available
               * @description Whether the region is available.
               */
              available: boolean;
              /**
               * Features
               * @description Features available in the region.
               */
              features: string[];
              /**
               * Name
               * @description Name of the region.
               */
              name: string;
              /**
               * Slug
               * @description Slug identifier for the region.
               */
              slug: string;
          };
          /**
           * Size
           * @description Size information.
           */
          size: {
              /**
               * Available
               * @description Whether the size is available.
               */
              available: boolean;
              /**
               * Disk
               * @description Disk size in GB.
               */
              disk: number;
              /**
               * Memory
               * @description Memory size in MB.
               */
              memory: number;
              /**
               * Price Hourly
               * @description Hourly price in USD.
               */
              price_hourly: number;
              /**
               * Price Monthly
               * @description Monthly price in USD.
               */
              price_monthly: number;
              /**
               * Regions
               * @description Regions where size is available.
               */
              regions: string[];
              /**
               * Slug
               * @description Slug of the droplet size.
               */
              slug: string;
              /**
               * Transfer
               * @description Transfer bandwidth in TB.
               */
              transfer: number;
              /**
               * Vcpus
               * @description Number of virtual CPUs.
               */
              vcpus: number;
          };
          /**
           * Size Slug
           * @description Slug of the droplet size.
           */
          size_slug: string;
          /**
           * Snapshot Ids
           * @description List of snapshot IDs.
           */
          snapshot_ids: number[];
          /**
           * Status
           * @description Current status of the droplet.
           */
          status: string;
          /**
           * Tags
           * @description Tags assigned to the droplet.
           */
          tags: string[];
          /**
           * Vcpus
           * @description Number of virtual CPUs.
           */
          vcpus: number;
          /**
           * Volume Ids
           * @description List of attached volume IDs.
           */
          volume_ids: string[];
          /**
           * Vpc Uuid
           * @description VPC UUID of the droplet.
           * @default null
           */
          vpc_uuid: string | null;
      }[];
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links.
           */
          pages: {
              /**
               * First
               * @description URL for the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL for the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL for the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL for the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Response metadata.
       */
      meta: {
          /**
           * Total
           * @description Total number of droplets.
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_FIREWALLS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_FIREWALLS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of firewalls to return per page (1-200).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_FIREWALLS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_FIREWALLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Firewalls
       * @description List of firewall objects.
       */
      firewalls: {
          /**
           * Created At
           * @description Time the firewall was created (ISO8601 format).
           */
          created_at: string;
          /**
           * Droplet Ids
           * @description Droplet IDs associated with the firewall.
           */
          droplet_ids: number[];
          /**
           * Id
           * @description Unique identifier for the firewall.
           */
          id: string;
          /**
           * Inbound Rules
           * @description Inbound rules for the firewall.
           */
          inbound_rules: {
              /**
               * Ports
               * @description Ports or port range for inbound rule.
               */
              ports: string;
              /**
               * Protocol
               * @description Protocol for inbound rule.
               */
              protocol: string;
              /**
               * Sources
               * @description Sources for inbound rule.
               */
              sources: {
                  /**
                   * Droplet Ids
                   * @description List of Droplet IDs.
                   * @default null
                   */
                  droplet_ids: number[] | null;
                  /**
                   * Ipv4 Addresses
                   * @description List of IPv4 addresses.
                   * @default null
                   */
                  ipv4_addresses: string[] | null;
                  /**
                   * Ipv6 Addresses
                   * @description List of IPv6 addresses.
                   * @default null
                   */
                  ipv6_addresses: string[] | null;
                  /**
                   * Kubernetes Ids
                   * @description List of Kubernetes cluster UUIDs.
                   * @default null
                   */
                  kubernetes_ids: string[] | null;
                  /**
                   * Load Balancer Uids
                   * @description List of load balancer UUIDs.
                   * @default null
                   */
                  load_balancer_uids: string[] | null;
                  /**
                   * Tags
                   * @description List of tag slugs.
                   * @default null
                   */
                  tags: string[] | null;
              };
          }[];
          /**
           * Locked
           * @description Whether the firewall is locked.
           */
          locked: boolean;
          /**
           * Name
           * @description Name of the firewall.
           */
          name: string;
          /**
           * Outbound Rules
           * @description Outbound rules for the firewall.
           */
          outbound_rules: {
              /**
               * Destinations
               * @description Destinations for outbound rule.
               */
              destinations: {
                  /**
                   * Droplet Ids
                   * @description List of Droplet IDs.
                   * @default null
                   */
                  droplet_ids: number[] | null;
                  /**
                   * Ipv4 Addresses
                   * @description List of IPv4 addresses.
                   * @default null
                   */
                  ipv4_addresses: string[] | null;
                  /**
                   * Ipv6 Addresses
                   * @description List of IPv6 addresses.
                   * @default null
                   */
                  ipv6_addresses: string[] | null;
                  /**
                   * Kubernetes Ids
                   * @description List of Kubernetes cluster UUIDs.
                   * @default null
                   */
                  kubernetes_ids: string[] | null;
                  /**
                   * Load Balancer Uids
                   * @description List of load balancer UUIDs.
                   * @default null
                   */
                  load_balancer_uids: string[] | null;
                  /**
                   * Tags
                   * @description List of tag slugs.
                   * @default null
                   */
                  tags: string[] | null;
              };
              /**
               * Ports
               * @description Ports or port range for outbound rule.
               */
              ports: string;
              /**
               * Protocol
               * @description Protocol for outbound rule.
               */
              protocol: string;
          }[];
          /**
           * Pending Changes
           * @description Pending changes for the firewall.
           */
          pending_changes: {
              /**
               * Status
               * @description Status of the pending change (e.g., 'completed').
               */
              status: string;
              /**
               * Type
               * @description Type of change (e.g., 'inbound_rules', 'droplet_ids').
               */
              type: string;
          }[];
          /**
           * Status
           * @description State of the firewall.
           */
          status: string;
          /**
           * Tags
           * @description Tags assigned to the firewall.
           */
          tags: string[];
      }[];
      /**
       * Links
       * @description Pagination links.
       * @default null
       */
      links: {
          /**
           * Pages
           * @description Pagination links object containing page URIs.
           */
          pages: {
              /**
               * First
               * @description URI of the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URI of the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URI of the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URI of the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      } | null;
      /**
       * Meta
       * @description Pagination metadata.
       * @default null
       */
      meta: {
          /**
           * Total
           * @description Total number of firewalls matching the query.
           */
          total: number;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_IMAGES tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_IMAGES_INPUT = {
  /**
   * Page
   * @description Page number to return. Default: 1. Minimum: 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page. Default: 20. Range: 1200.
   * @default null
   */
  per_page: number | null;
  /**
   * Private
   * @description If true, returns only private images. Defaults to false.
   * @default null
   */
  private: boolean | null;
  /**
   * Tag Name
   * @description Return only images tagged with this tag.
   * @default null
   */
  tag_name: string | null;
  /**
   * Type
   * @description Filter images by type. Valid values: 'distribution', 'application', 'private'.
   * @default null
   * @enum {string|null}
   */
  type: "distribution" | "application" | "private" | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_IMAGES tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description List of images returned by the API.
       */
      images: {
          /**
           * Created At
           * @description Creation date-time in ISO 8601 format.
           */
          created_at: string;
          /**
           * Distribution
           * @description Operating system distribution.
           */
          distribution: string;
          /**
           * Id
           * @description Unique identifier for the image.
           */
          id: number;
          /**
           * Min Disk Size
           * @description Minimum disk size required (GB).
           * @default null
           */
          min_disk_size: number | null;
          /**
           * Name
           * @description Name of the image.
           */
          name: string;
          /**
           * Public
           * @description Whether the image is public.
           */
          public: boolean;
          /**
           * Regions
           * @description Slugs of regions containing the image.
           */
          regions: string[];
          /**
           * Size Gigabytes
           * @description Size of the image in gigabytes.
           * @default null
           */
          size_gigabytes: number | null;
          /**
           * Slug
           * @description Slug identifier for the image, if available.
           * @default null
           */
          slug: string | null;
          /**
           * Tags
           * @description List of tags applied to the image.
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description Type of the image, e.g., snapshot or backup.
           */
          type: string;
      }[];
      /**
       * ImageLinks
       * @description Pagination links for the images list response.
       * @default null
       */
      links: {
          /**
           * Pages
           * @description Pagination links, e.g., next, prev URLs.
           * @default null
           */
          pages: {
              [key: string]: string | null;
          } | null;
      } | null;
      /**
       * ImageMeta
       * @description Metadata for the images list response.
       * @default null
       */
      meta: {
          /**
           * Total
           * @description Total number of images matching the query.
           * @default null
           */
          total: number | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS_INPUT = {
  /**
   * Page
   * @description Page number of paginated results (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of clusters per page. Must be between 1 and 200.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kubernetes Clusters
       * @description List of Kubernetes cluster objects.
       */
      kubernetes_clusters: {
          /**
           * Auto Upgrade
           * @description Whether control plane auto-upgrade is enabled.
           */
          auto_upgrade: boolean;
          /**
           * Cluster Subnet
           * @description CIDR block for pods in the cluster.
           */
          cluster_subnet: string;
          /**
           * Created At
           * @description ISO8601 timestamp when the cluster was created.
           */
          created_at: string;
          /**
           * Endpoint
           * @description Kubernetes API server endpoint URL.
           */
          endpoint: string;
          /**
           * Id
           * @description Unique identifier for the Kubernetes cluster.
           */
          id: string;
          /**
           * Ipv4
           * @description Public IPv4 address of the API endpoint.
           */
          ipv4: string;
          /**
           * Maintenance Policy
           * @description Maintenance policy for the cluster.
           */
          maintenance_policy: {
              /**
               * Day
               * @description Day of the week for maintenance, e.g., 'any', 'monday'.
               */
              day: string;
              /**
               * Start Time
               * @description Start time for maintenance window in HH:MM format.
               */
              start_time: string;
          };
          /**
           * Name
           * @description Human-readable name of the cluster.
           */
          name: string;
          /**
           * Node Pools
           * @description List of node pools for the cluster.
           */
          node_pools: {
              /**
               * Auto Scale
               * @description Whether auto-scaling is enabled for this pool.
               */
              auto_scale: boolean;
              /**
               * Count
               * @description Number of nodes in this pool.
               */
              count: number;
              /**
               * Id
               * @description Unique identifier for the node pool.
               */
              id: string;
              /**
               * Max Nodes
               * @description Maximum number of nodes if auto-scaling is enabled.
               * @default null
               */
              max_nodes: number | null;
              /**
               * Min Nodes
               * @description Minimum number of nodes if auto-scaling is enabled.
               * @default null
               */
              min_nodes: number | null;
              /**
               * Name
               * @description Human-readable name of the node pool.
               */
              name: string;
              /**
               * Nodes
               * @description List of nodes in this pool.
               */
              nodes: {
                  /**
                   * Created At
                   * @description ISO8601 timestamp when the node was created.
                   */
                  created_at: string;
                  /**
                   * Id
                   * @description Unique identifier for this node.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Human-readable name of the node.
                   */
                  name: string;
                  /**
                   * Status
                   * @description Current status of the node.
                   */
                  status: string;
              }[];
              /**
               * Size
               * @description Droplet size slug for nodes in this pool.
               */
              size: string;
              /**
               * Tags
               * @description Tags applied to the node pool.
               */
              tags: string[];
          }[];
          /**
           * Region
           * @description Region slug where the cluster is located.
           */
          region: string;
          /**
           * Service Subnet
           * @description CIDR block for services in the cluster.
           */
          service_subnet: string;
          /**
           * Tags
           * @description Tags applied to the cluster.
           */
          tags: string[];
          /**
           * Updated At
           * @description ISO8601 timestamp when the cluster was last updated.
           */
          updated_at: string;
          /**
           * Version
           * @description Kubernetes version of the cluster.
           */
          version: string;
      }[];
      /**
       * Links
       * @description Pagination links for result navigation.
       */
      links: {
          /**
           * Pages
           * @description Pagination links for navigating pages.
           */
          pages: {
              /**
               * First
               * @description URL to the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL to the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL to the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL to the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Metadata about the response, such as total count.
       */
      meta: {
          /**
           * Total
           * @description Total number of clusters across all pages.
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS_INPUT = {
  /**
   * Page
   * @description Page of results to return. Must be >= 1. Default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page. Must be between 1 and 200. Default is 20.
   * @default 20
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links for the response.
       */
      links: {
          /**
           * Pages
           * @description Pagination links for navigating through result pages.
           */
          pages: {
              /**
               * First
               * @description URL for the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL for the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL for the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL for the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Load Balancers
       * @description List of load balancer objects returned by the API.
       */
      load_balancers: {
          /**
           * Algorithm
           * @description Load balancing algorithm, e.g., 'round_robin'.
           */
          algorithm: string;
          /**
           * Created At
           * @description Time the load balancer was created (ISO8601 UTC).
           */
          created_at: string;
          /**
           * Droplet Ids
           * @description List of Droplet IDs assigned to the load balancer.
           */
          droplet_ids: number[];
          /**
           * Enable Proxy Protocol
           * @description Whether the PROXY protocol is enabled for the load balancer.
           */
          enable_proxy_protocol: boolean;
          /**
           * Forwarding Rules
           * @description Traffic forwarding rules configured on the load balancer.
           */
          forwarding_rules: {
              /**
               * Entry Port
               * @description Port on which load balancer receives traffic.
               */
              entry_port: number;
              /**
               * Entry Protocol
               * @description Protocol for incoming traffic, e.g., 'http' or 'https'.
               */
              entry_protocol: string;
              /**
               * Target Port
               * @description Port on Droplets to which traffic is forwarded.
               */
              target_port: number;
              /**
               * Target Protocol
               * @description Protocol for forwarding traffic to Droplets.
               */
              target_protocol: string;
              /**
               * Tls Passthrough
               * @description Whether to enable TLS passthrough.
               */
              tls_passthrough: boolean;
          }[];
          /**
           * Health Check
           * @description Health check settings for the load balancer.
           */
          health_check: {
              /**
               * Check Interval Seconds
               * @description Interval between health checks in seconds.
               */
              check_interval_seconds: number;
              /**
               * Healthy Threshold
               * @description Number of consecutive successful checks needed.
               */
              healthy_threshold: number;
              /**
               * Path
               * @description HTTP path to health check endpoint.
               */
              path: string;
              /**
               * Port
               * @description Port used for health checking.
               */
              port: number;
              /**
               * Protocol
               * @description Protocol for health check, e.g., 'http', 'tcp'.
               */
              protocol: string;
              /**
               * Response Timeout Seconds
               * @description Timeout for each health check in seconds.
               */
              response_timeout_seconds: number;
              /**
               * Unhealthy Threshold
               * @description Number of consecutive failures to mark unhealthy.
               */
              unhealthy_threshold: number;
          };
          /**
           * Id
           * @description Unique identifier for the load balancer.
           */
          id: string;
          /**
           * Ip
           * @description Public IPv4 address of the load balancer.
           */
          ip: string;
          /**
           * Name
           * @description Name of the load balancer.
           */
          name: string;
          /**
           * Redirect Http To Https
           * @description Whether HTTP traffic is redirected to HTTPS.
           */
          redirect_http_to_https: boolean;
          /**
           * Region
           * @description Region where the load balancer is provisioned.
           */
          region: {
              /**
               * Available
               * @description Whether the region is currently available.
               */
              available: boolean;
              /**
               * Features
               * @description List of features available in this region.
               */
              features: string[];
              /**
               * Name
               * @description Human-readable name for the region.
               */
              name: string;
              /**
               * Slug
               * @description Slug identifier for the region, e.g., 'nyc3'.
               */
              slug: string;
          };
          /**
           * Status
           * @description Status of the load balancer, e.g., 'new' or 'active'.
           * @default null
           */
          status: string | null;
          /**
           * StickySessions
           * @description Configuration for session persistence (sticky sessions).
           * @default null
           */
          sticky_sessions: {
              /**
               * Cookie Name
               * @description Name of the cookie if using cookie-based sessions.
               * @default null
               */
              cookie_name: string | null;
              /**
               * Cookie Ttl Seconds
               * @description Lifetime of the cookie in seconds for session affinity.
               * @default null
               */
              cookie_ttl_seconds: number | null;
              /**
               * Type
               * @description Type of sticky sessions, e.g., 'none' or 'cookies'.
               */
              type: string;
          } | null;
          /**
           * Tag
           * @description Tag used to auto-assign Droplets to this load balancer.
           * @default null
           */
          tag: string | null;
          /**
           * Vpc Uuid
           * @description UUID of the VPC to which this load balancer belongs.
           * @default null
           */
          vpc_uuid: string | null;
      }[];
      /**
       * Meta
       * @description Metadata containing total count of load balancers.
       */
      meta: {
          /**
           * Total
           * @description Total number of load balancers available.
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of snapshots to return per page (1-200).
   * @default null
   */
  per_page: number | null;
  /**
   * Resource Type
   * @description Filter snapshots by resource type; either 'droplet' or 'volume'.
   * @default null
   * @enum {string|null}
   */
  resource_type: "droplet" | "volume" | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links object containing page URIs.
           */
          pages: {
              /**
               * First
               * @description URI of the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URI of the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URI of the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URI of the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Total
           * @description Total number of snapshots matching the query.
           */
          total: number;
      };
      /**
       * Snapshots
       * @description List of snapshot objects.
       */
      snapshots: {
          /**
           * Created At
           * @description Creation time of the snapshot in ISO8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the snapshot.
           */
          id: string;
          /**
           * Min Disk Size
           * @description Minimum disk size required to use this snapshot (in GiB).
           */
          min_disk_size: number;
          /**
           * Name
           * @description Name of the snapshot.
           */
          name: string;
          /**
           * Regions
           * @description Regions where snapshot is available.
           */
          regions: string[];
          /**
           * Resource Id
           * @description ID of the resource the snapshot is based on.
           */
          resource_id: string;
          /**
           * Resource Type
           * @description Type of resource this snapshot belongs to.
           * @enum {string}
           */
          resource_type: "droplet" | "volume";
          /**
           * Size Gigabytes
           * @description Size of the snapshot in gigabytes.
           */
          size_gigabytes: number;
          /**
           * Tags
           * @description Tags applied to the snapshot.
           */
          tags: string[];
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_SSH_KEYS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_SSH_KEYS_INPUT = {
  /**
   * Page
   * @description Page of results to return (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-200).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_SSH_KEYS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_SSH_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links.
           */
          pages: {
              /**
               * First
               * @description URL of the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL of the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL of the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL of the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Total
           * @description Total number of SSH keys.
           */
          total: number;
      };
      /**
       * Ssh Keys
       * @description List of SSH key objects.
       */
      ssh_keys: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the SSH key was created.
           */
          created_at: string;
          /**
           * Fingerprint
           * @description Fingerprint of the SSH key.
           */
          fingerprint: string;
          /**
           * Id
           * @description Unique identifier for the SSH key.
           */
          id: number;
          /**
           * Name
           * @description Name given to the SSH key.
           */
          name: string;
          /**
           * Public Key
           * @description Public key in SSH format.
           */
          public_key: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_TAGS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_TAGS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items returned per page. Must be between 1 and 200.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_TAGS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links.
           */
          pages: {
              /**
               * First
               * @description URL of the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL of the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL of the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL of the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Response metadata including total tag count.
       */
      meta: {
          /**
           * Total
           * @description Total number of tags.
           */
          total: number;
      };
      /**
       * Tags
       * @description List of tag objects.
       */
      tags: {
          /**
           * Name
           * @description The name of the tag.
           */
          name: string;
          /**
           * Resources
           * @description Summary of resources associated with this tag.
           */
          resources: {
              [key: string]: {
                  /**
                   * Count
                   * @description Number of resources with this tag.
                   */
                  count: number;
                  /**
                   * Last Tagged Uri
                   * @description URI of the most recently tagged resource.
                   * @default null
                   */
                  last_tagged_uri: string | null;
              };
          };
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_VOLUMES tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_VOLUMES_INPUT = {
  /**
   * Name
   * @description Filter to return only volumes with this exact name.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items returned per page. Must be between 1 and 200.
   * @default null
   */
  per_page: number | null;
  /**
   * Region
   * @description Filter to return only volumes in this region (region slug).
   * @default null
   */
  region: string | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_VOLUMES tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_VOLUMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links object containing URLs for navigation.
           */
          pages: {
              /**
               * First
               * @description URL for the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL for the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL for the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL for the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Total
           * @description Total number of volumes matching the query.
           */
          total: number;
      };
      /**
       * Volumes
       * @description List of volume objects.
       */
      volumes: {
          /**
           * Created At
           * @description ISO8601 timestamp of when the volume was created.
           */
          created_at: string;
          /**
           * Description
           * @description Human-readable description of the volume.
           */
          description: string;
          /**
           * Droplet Ids
           * @description List of Droplet IDs this volume is attached to.
           */
          droplet_ids: number[];
          /**
           * Filesystem Label
           * @description Filesystem label of the volume, if initialized.
           * @default null
           */
          filesystem_label: string | null;
          /**
           * Filesystem Type
           * @description Filesystem type of the volume (e.g., ext4) if initialized.
           * @default null
           */
          filesystem_type: string | null;
          /**
           * Id
           * @description Unique identifier for the volume.
           */
          id: string;
          /**
           * Name
           * @description Name of the volume.
           */
          name: string;
          /**
           * Region
           * @description Region data for the volume.
           */
          region: {
              /**
               * Available
               * @description Whether the region is currently available.
               */
              available: boolean;
              /**
               * Features
               * @description List of features available in this region.
               */
              features: string[];
              /**
               * Name
               * @description Human-readable name of the region.
               */
              name: string;
              /**
               * Slug
               * @description Slug identifier for the region.
               */
              slug: string;
          };
          /**
           * Size Gigabytes
           * @description Size of the volume in GiB.
           */
          size_gigabytes: number;
          /**
           * Status
           * @description Status of the volume (e.g., 'creating', 'available').
           */
          status: string;
          /**
           * Tags
           * @description Tags assigned to the volume.
           */
          tags: string[];
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_VPCS tool input.
 */
type DIGITAL_OCEAN_LIST_ALL_VPCS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (default: 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of VPCs to return per page (default: 20, max: 200).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_ALL_VPCS tool output.
 */
type DIGITAL_OCEAN_LIST_ALL_VPCS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Pages
           * @description Pagination links object containing URLs for navigation.
           */
          pages: {
              /**
               * First
               * @description URL for the first page of results.
               * @default null
               */
              first: string | null;
              /**
               * Last
               * @description URL for the last page of results.
               * @default null
               */
              last: string | null;
              /**
               * Next
               * @description URL for the next page of results.
               * @default null
               */
              next: string | null;
              /**
               * Prev
               * @description URL for the previous page of results.
               * @default null
               */
              prev: string | null;
          };
      };
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Total
           * @description Total number of VPCs matching the query.
           */
          total: number;
      };
      /**
       * Vpcs
       * @description List of VPC objects.
       */
      vpcs: {
          /**
           * Created At
           * @description ISO8601 timestamp when the VPC was created.
           */
          created_at: string;
          /**
           * Default
           * @description Whether or not this is the default VPC.
           */
          default: boolean;
          /**
           * Description
           * @description A description of the VPC.
           */
          description: string;
          /**
           * Id
           * @description A unique identifier for the VPC.
           */
          id: string;
          /**
           * Ip Range
           * @description The IP range of the VPC in CIDR notation.
           */
          ip_range: string;
          /**
           * Name
           * @description The name of the VPC.
           */
          name: string;
          /**
           * Region
           * @description The region slug for the VPC.
           */
          region: string;
          /**
           * Urn
           * @description Uniform Resource Name for the VPC.
           */
          urn: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_DATABASE_OPTIONS tool input.
 */
type DIGITAL_OCEAN_LIST_DATABASE_OPTIONS_INPUT = object;

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_LIST_DATABASE_OPTIONS tool output.
 */
type DIGITAL_OCEAN_LIST_DATABASE_OPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Engines
       * @description List of database engines and their available versions.
       */
      engines: {
          /**
           * Engine
           * @description Name of the database engine.
           */
          engine: string;
          /**
           * Slug
           * @description Slug identifier for the database engine.
           */
          slug: string;
          /**
           * Versions
           * @description Supported versions for this engine.
           */
          versions: {
              /**
               * Is Default
               * @description Whether this version is the default one.
               */
              is_default: boolean;
              /**
               * Supports Ipv6
               * @description Whether IPv6 is supported.
               */
              supports_ipv6: boolean;
              /**
               * Supports Private Networking
               * @description Whether private networking is supported.
               */
              supports_private_networking: boolean;
              /**
               * Version
               * @description Database engine version.
               */
              version: string;
          }[];
      }[];
      /**
       * Regions
       * @description List of regions supporting databases.
       */
      regions: {
          /**
           * Description
           * @description Full region description.
           */
          description: string;
          /**
           * Name
           * @description Region name/slug (e.g., 'nyc1').
           */
          name: string;
      }[];
      /**
       * Sizes
       * @description List of available cluster sizes.
       */
      sizes: {
          /**
           * Cpu Count
           * @description Number of CPUs available.
           */
          cpu_count: number;
          /**
           * Memory
           * @description RAM in MB.
           */
          memory: number;
          /**
           * Price Hourly
           * @description Hourly price.
           */
          price_hourly: number;
          /**
           * Price Monthly
           * @description Monthly price.
           */
          price_monthly: number;
          /**
           * Slug
           * @description Identifier for the size.
           */
          slug: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_DOMAIN tool input.
 */
type DIGITAL_OCEAN_RETRIEVE_DOMAIN_INPUT = {
  /**
   * Name
   * @description The fully qualified domain name (e.g., 'example.com').
   */
  name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_DOMAIN tool output.
 */
type DIGITAL_OCEAN_RETRIEVE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description Details of the requested domain.
       */
      domain: {
          /**
           * Name
           * @description The domain name.
           */
          name: string;
          /**
           * Ttl
           * @description The time-to-live for the domain in seconds.
           */
          ttl: number;
          /**
           * Zone File
           * @description The full contents of the zone file for the domain.
           */
          zone_file: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD tool input.
 */
type DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD_INPUT = {
  /**
   * Name
   * @description The domain name (e.g., 'example.com').
   */
  name?: string;
  /**
   * Record Id
   * @description The unique identifier for the DNS record.
   */
  record_id?: number;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD tool output.
 */
type DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain Record
       * @description The retrieved DNS record object.
       */
      domain_record: {
          /**
           * Data
           * @description The value of the DNS record.
           */
          data: string;
          /**
           * Flags
           * @description Flags for CAA records.
           * @default null
           */
          flags: number | null;
          /**
           * Id
           * @description The record ID.
           */
          id: number;
          /**
           * Name
           * @description The host name for the record.
           */
          name: string;
          /**
           * Port
           * @description Port for SRV records.
           * @default null
           */
          port: number | null;
          /**
           * Priority
           * @description Priority for MX records.
           * @default null
           */
          priority: number | null;
          /**
           * Tag
           * @description Tag for CAA records.
           * @default null
           */
          tag: string | null;
          /**
           * Ttl
           * @description Time to live of the record in seconds.
           */
          ttl: number;
          /**
           * Type
           * @description The DNS record type (e.g., 'A', 'CNAME', 'TXT').
           */
          type: string;
          /**
           * Weight
           * @description Weight for SRV records.
           * @default null
           */
          weight: number | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET tool input.
 */
type DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET_INPUT = {
  /**
   * Droplet Id
   * @description A unique numeric ID for the Droplet to retrieve
   */
  droplet_id?: number;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET tool output.
 */
type DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Droplet */
      droplet: {
          /** Backup Ids */
          backup_ids: number[];
          /** Created At */
          created_at: string;
          /** Disk */
          disk: number;
          /** Features */
          features: string[];
          /** Id */
          id: number;
          /** Image */
          image: {
              /**
               * Created At
               * @description Creation timestamp (ISO8601)
               */
              created_at: string;
              /** Distribution */
              distribution: string;
              /** Id */
              id: number;
              /**
               * Min Disk Size
               * @description Minimum required disk size in GB
               */
              min_disk_size: number;
              /** Name */
              name: string;
              /** Public */
              public: boolean;
              /** Regions */
              regions: string[];
              /** Slug */
              slug: string | null;
              /** Type */
              type: string;
          };
          /** DropletKernel */
          kernel: {
              /**
               * Id
               * @description The kernel ID
               */
              id: number;
              /**
               * Name
               * @description The kernel name
               */
              name: string;
              /**
               * Version
               * @description The kernel version
               */
              version: string;
          } | null;
          /** Locked */
          locked: boolean;
          /** Memory */
          memory: number;
          /** Name */
          name: string;
          /** Networks */
          networks: {
              /** V4 */
              v4: {
                  /** Gateway */
                  gateway: string;
                  /** Ip Address */
                  ip_address: string;
                  /** Netmask */
                  netmask: string;
                  /**
                   * Type
                   * @enum {string}
                   */
                  type: "public" | "private";
              }[];
              /** V6 */
              v6: {
                  /** Gateway */
                  gateway: string;
                  /** Ip Address */
                  ip_address: string;
                  /** Netmask */
                  netmask: number;
                  /**
                   * Type
                   * @enum {string}
                   */
                  type: "public" | "private";
              }[];
          };
          /** NextBackupWindow */
          next_backup_window: {
              /**
               * End
               * @description End time of the next backup window (ISO8601)
               */
              end: string;
              /**
               * Start
               * @description Start time of the next backup window (ISO8601)
               */
              start: string;
          } | null;
          /** Region */
          region: {
              /** Available */
              available: boolean;
              /** Features */
              features: string[];
              /** Name */
              name: string;
              /** Sizes */
              sizes: string[];
              /** Slug */
              slug: string;
          };
          /** Size */
          size: {
              /** Available */
              available: boolean;
              /**
               * Disk
               * @description Disk size in GB
               */
              disk: number;
              /**
               * Memory
               * @description Amount of RAM in MB
               */
              memory: number;
              /** Price Hourly */
              price_hourly: number;
              /** Price Monthly */
              price_monthly: number;
              /** Regions */
              regions: string[];
              /** Slug */
              slug: string;
              /**
               * Transfer
               * @description Monthly data transfer in TB
               */
              transfer: number;
              /** Vcpus */
              vcpus: number;
          };
          /** Size Slug */
          size_slug: string;
          /** Snapshot Ids */
          snapshot_ids: number[];
          /** Status */
          status: string;
          /** Tags */
          tags: string[];
          /** Vcpus */
          vcpus: number;
          /** Volume Ids */
          volume_ids: string[];
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE tool input.
 */
type DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE_INPUT = {
  /**
   * Image Id
   * @description The unique numeric ID or slug of the image to retrieve.
   */
  image_id?: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE tool output.
 */
type DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Full image metadata object
       */
      image: {
          /**
           * Created At
           * @description Timestamp when the image was created (ISO8601)
           */
          created_at: string;
          /**
           * Description
           * @description Optional human-readable description
           * @default null
           */
          description: string | null;
          /**
           * Distribution
           * @description OS distribution of the image
           */
          distribution: string;
          /**
           * Error Message
           * @description Error message if image is in a failed state
           * @default null
           */
          error_message: string | null;
          /**
           * Id
           * @description Unique ID of the image
           */
          id: number;
          /**
           * Min Disk Size
           * @description Minimum disk size (GB) required to deploy this image
           */
          min_disk_size: number;
          /**
           * Name
           * @description Name of the image
           */
          name: string;
          /**
           * Public
           * @description True if this is a public image
           */
          public: boolean;
          /**
           * Regions
           * @description List of region slugs where the image is available
           */
          regions: string[];
          /**
           * Size Gigabytes
           * @description Size of the image in gigabytes
           */
          size_gigabytes: number;
          /**
           * Slug
           * @description Image slug (null for user-created images)
           * @default null
           */
          slug: string | null;
          /**
           * Status
           * @description Current status of the image
           */
          status: string;
          /**
           * Tags
           * @description Tags assigned to the image
           */
          tags: string[];
          /**
           * Type
           * @description Type of image (snapshot, backup, custom, base)
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_TAG tool input.
 */
type DIGITAL_OCEAN_RETRIEVE_TAG_INPUT = {
  /**
   * Name
   * @description The name of the tag to retrieve (case-sensitive).
   */
  name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_TAG tool output.
 */
type DIGITAL_OCEAN_RETRIEVE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tag
       * @description The retrieved tag object with its resources.
       */
      tag: {
          /**
           * Name
           * @description The name of the tag.
           */
          name: string;
          /**
           * Resources
           * @description Resources associated with the tag.
           */
          resources: {
              /**
               * Databases
               * @description Databases associated with the tag.
               */
              databases: {
                  /**
                   * Count
                   * @description Number of resources with this tag.
                   */
                  count: number;
                  /**
                   * LastTagged
                   * @description Metadata of the most recently tagged resource.
                   * @default null
                   */
                  last_tagged: {
                      /**
                       * Resource Id
                       * @description The identifier of the resource that was last tagged, e.g., droplet ID or image UUID.
                       */
                      resource_id: number | null;
                      /**
                       * Resource Type
                       * @description The type of the resource (e.g., 'droplet', 'image').
                       */
                      resource_type: string;
                  } | null;
              };
              /**
               * Droplets
               * @description Droplets associated with the tag.
               */
              droplets: {
                  /**
                   * Count
                   * @description Number of resources with this tag.
                   */
                  count: number;
                  /**
                   * LastTagged
                   * @description Metadata of the most recently tagged resource.
                   * @default null
                   */
                  last_tagged: {
                      /**
                       * Resource Id
                       * @description The identifier of the resource that was last tagged, e.g., droplet ID or image UUID.
                       */
                      resource_id: number | null;
                      /**
                       * Resource Type
                       * @description The type of the resource (e.g., 'droplet', 'image').
                       */
                      resource_type: string;
                  } | null;
              };
              /**
               * Images
               * @description Images associated with the tag.
               */
              images: {
                  /**
                   * Count
                   * @description Number of resources with this tag.
                   */
                  count: number;
                  /**
                   * LastTagged
                   * @description Metadata of the most recently tagged resource.
                   * @default null
                   */
                  last_tagged: {
                      /**
                       * Resource Id
                       * @description The identifier of the resource that was last tagged, e.g., droplet ID or image UUID.
                       */
                      resource_id: number | null;
                      /**
                       * Resource Type
                       * @description The type of the resource (e.g., 'droplet', 'image').
                       */
                      resource_type: string;
                  } | null;
              };
              /**
               * Volume Snapshots
               * @description Volume snapshots associated with the tag.
               */
              volume_snapshots: {
                  /**
                   * Count
                   * @description Number of resources with this tag.
                   */
                  count: number;
                  /**
                   * LastTagged
                   * @description Metadata of the most recently tagged resource.
                   * @default null
                   */
                  last_tagged: {
                      /**
                       * Resource Id
                       * @description The identifier of the resource that was last tagged, e.g., droplet ID or image UUID.
                       */
                      resource_id: number | null;
                      /**
                       * Resource Type
                       * @description The type of the resource (e.g., 'droplet', 'image').
                       */
                      resource_type: string;
                  } | null;
              };
              /**
               * Volumes
               * @description Volumes associated with the tag.
               */
              volumes: {
                  /**
                   * Count
                   * @description Number of resources with this tag.
                   */
                  count: number;
                  /**
                   * LastTagged
                   * @description Metadata of the most recently tagged resource.
                   * @default null
                   */
                  last_tagged: {
                      /**
                       * Resource Id
                       * @description The identifier of the resource that was last tagged, e.g., droplet ID or image UUID.
                       */
                      resource_id: number | null;
                      /**
                       * Resource Type
                       * @description The type of the resource (e.g., 'droplet', 'image').
                       */
                      resource_type: string;
                  } | null;
              };
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_VPC tool input.
 */
type DIGITAL_OCEAN_RETRIEVE_VPC_INPUT = {
  /**
   * Vpc Uuid
   * @description The unique identifier of the VPC.
   */
  vpc_uuid?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_RETRIEVE_VPC tool output.
 */
type DIGITAL_OCEAN_RETRIEVE_VPC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Vpc
       * @description Details of the requested VPC.
       */
      vpc: {
          /**
           * Created At
           * @description ISO8601 timestamp when the VPC was created.
           */
          created_at: string;
          /**
           * Default
           * @description Whether this is the default VPC for the region.
           */
          default: boolean;
          /**
           * Description
           * @description Free-form text describing the VPC.
           */
          description: string;
          /**
           * Id
           * @description The unique identifier for the VPC.
           */
          id: string;
          /**
           * Ip Range
           * @description The range of IP addresses in CIDR notation.
           */
          ip_range: string;
          /**
           * Name
           * @description The name of the VPC.
           */
          name: string;
          /**
           * Region
           * @description Slug identifier for the VPC's region.
           */
          region: string;
          /**
           * Urn
           * @description DigitalOcean VPC Uniform Resource Name.
           */
          urn: string;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_TAG_RESOURCE tool input.
 */
type DIGITAL_OCEAN_TAG_RESOURCE_INPUT = {
  /**
   * Resources
   * @description List of resources to assign the tag to (each with id and type)
   */
  resources?: {
      /**
       * Resource Id
       * @description The UUID of the resource to tag
       */
      resource_id: string;
      /**
       * Resource Type
       * @description The type of resource to tag. Allowed values: droplet, image, volume, floating_ip, domain, load_balancer, firewall, certificate, kubernetes, database, snapshot, container_registry
       * @enum {string}
       */
      resource_type: "droplet" | "image" | "volume" | "floating_ip" | "domain" | "load_balancer" | "firewall" | "certificate" | "kubernetes" | "database" | "snapshot" | "container_registry";
      /**
       * Resource Urn
       * @description Uniform Resource Name of the resource (optional alternative to resource_id)
       * @default null
       */
      resource_urn: string | null;
  }[];
  /**
   * Tag Name
   * @description The name of the tag to which resources will be assigned
   */
  tag_name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_TAG_RESOURCE tool output.
 */
type DIGITAL_OCEAN_TAG_RESOURCE_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_UNTAG_RESOURCE tool input.
 */
type DIGITAL_OCEAN_UNTAG_RESOURCE_INPUT = {
  /**
   * Resources
   * @description List of resource objects to untag, each with id, type, and optional region.
   */
  resources?: {
      /**
       * Region
       * @description Region where the resource is located (required for certain resource types).
       * @default null
       */
      region: string | null;
      /**
       * Resource Id
       * @description Unique identifier of the resource to remove the tag from.
       */
      resource_id: string;
      /**
       * Resource Type
       * @description Type of the resource to untag. Must be one of the supported resource types.
       * @enum {string}
       */
      resource_type: "droplet" | "image" | "volume" | "volume_snapshot" | "database" | "kubernetes" | "app" | "function" | "domain" | "vpc" | "repository" | "registry" | "project" | "load_balancer" | "firewall" | "certificate" | "reserved_ip" | "floating_ip" | "snapshot" | "ca_certificate" | "device" | "device_group" | "device_snapshot" | "device_action";
  }[];
  /**
   * Tag Name
   * @description Name of the tag to remove from the specified resources.
   */
  tag_name?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_UNTAG_RESOURCE tool output.
 */
type DIGITAL_OCEAN_UNTAG_RESOURCE_OUTPUT = {
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD tool input.
 */
type DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD_INPUT = {
  /**
   * Data
   * @description The value of the DNS record (e.g., IP address for A/AAAA record).
   * @default null
   */
  data: string | null;
  /**
   * Domain Name
   * @description The domain name (e.g., 'example.com').
   */
  domain_name?: string;
  /**
   * Flags
   * @description Flags for CAA records.
   * @default null
   */
  flags: number | null;
  /**
   * Name
   * @description The host name for the record (e.g., 'www', '@').
   * @default null
   */
  name: string | null;
  /**
   * Port
   * @description Port for SRV records.
   * @default null
   */
  port: number | null;
  /**
   * Priority
   * @description Priority for MX records.
   * @default null
   */
  priority: number | null;
  /**
   * Record Id
   * @description The unique identifier for the DNS record.
   */
  record_id?: number;
  /**
   * Tag
   * @description Tag for CAA records.
   * @default null
   */
  tag: string | null;
  /**
   * Ttl
   * @description Time to live of the record in seconds.
   * @default null
   */
  ttl: number | null;
  /**
   * Type
   * @description The DNS record type (e.g., 'A', 'CNAME', 'TXT', 'MX', 'SRV', 'CAA').
   * @default null
   */
  type: string | null;
  /**
   * Weight
   * @description Weight for SRV records.
   * @default null
   */
  weight: number | null;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD tool output.
 */
type DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain Record
       * @description The updated DNS record object.
       */
      domain_record: {
          /**
           * Data
           * @description The value of the DNS record.
           */
          data: string;
          /**
           * Flags
           * @description Flags for CAA records.
           * @default null
           */
          flags: number | null;
          /**
           * Id
           * @description The record ID.
           */
          id: number;
          /**
           * Name
           * @description The host name for the record.
           */
          name: string;
          /**
           * Port
           * @description Port for SRV records.
           * @default null
           */
          port: number | null;
          /**
           * Priority
           * @description Priority for MX records.
           * @default null
           */
          priority: number | null;
          /**
           * Tag
           * @description Tag for CAA records.
           * @default null
           */
          tag: string | null;
          /**
           * Ttl
           * @description Time to live of the record in seconds.
           */
          ttl: number;
          /**
           * Type
           * @description The DNS record type.
           */
          type: string;
          /**
           * Weight
           * @description Weight for SRV records.
           * @default null
           */
          weight: number | null;
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
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_UPDATE_VPC tool input.
 */
type DIGITAL_OCEAN_UPDATE_VPC_INPUT = {
  /**
   * Default
   * @description Whether to set this VPC as the default for its region.
   * @default null
   */
  default: boolean | null;
  /**
   * Description
   * @description A free-form text description for the VPC.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The new name for the VPC.
   * @default null
   */
  name: string | null;
  /**
   * Vpc Id
   * @description The unique identifier of the VPC to update.
   */
  vpc_id?: string;
};

/**
 * Type of DIGITAL_OCEAN's DIGITAL_OCEAN_UPDATE_VPC tool output.
 */
type DIGITAL_OCEAN_UPDATE_VPC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Vpc
       * @description The updated VPC object.
       */
      vpc: {
          /**
           * Created At
           * @description The date and time the VPC was created.
           */
          created_at: string;
          /**
           * Default
           * @description Indicates if this is the default VPC for the region.
           */
          default: boolean;
          /**
           * Description
           * @description The description of the VPC.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description A unique identifier for the VPC.
           */
          id: string;
          /**
           * Ip Range
           * @description The IP range of the VPC in CIDR format.
           */
          ip_range: string;
          /**
           * Name
           * @description The name of the VPC.
           */
          name: string;
          /**
           * Region
           * @description The region where the VPC is located.
           */
          region: string;
          /**
           * Urn
           * @description The uniform resource name for the VPC.
           */
          urn: string;
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
 * Type map of all available tool input types for toolkit "DIGITAL_OCEAN".
 */
export type DIGITAL_OCEAN_TOOL_INPUTS = {
  CREATE_CUSTOM_IMAGE: DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE_INPUT
  CREATE_DATABASE_CLUSTER: DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER_INPUT
  CREATE_NEW_BLOCK_STORAGE_VOLUME: DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME_INPUT
  CREATE_NEW_DOMAIN: DIGITAL_OCEAN_CREATE_NEW_DOMAIN_INPUT
  CREATE_NEW_DOMAIN_RECORD: DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD_INPUT
  CREATE_NEW_DROPLET: DIGITAL_OCEAN_CREATE_NEW_DROPLET_INPUT
  CREATE_NEW_FIREWALL: DIGITAL_OCEAN_CREATE_NEW_FIREWALL_INPUT
  CREATE_NEW_KUBERNETES_CLUSTER: DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER_INPUT
  CREATE_NEW_SSH_KEY: DIGITAL_OCEAN_CREATE_NEW_SSH_KEY_INPUT
  CREATE_NEW_TAG: DIGITAL_OCEAN_CREATE_NEW_TAG_INPUT
  CREATE_NEW_VPC: DIGITAL_OCEAN_CREATE_NEW_VPC_INPUT
  DELETE_BLOCK_STORAGE_VOLUME: DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME_INPUT
  DELETE_DATABASE_CLUSTER: DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER_INPUT
  DELETE_DOMAIN: DIGITAL_OCEAN_DELETE_DOMAIN_INPUT
  DELETE_DOMAIN_RECORD: DIGITAL_OCEAN_DELETE_DOMAIN_RECORD_INPUT
  DELETE_EXISTING_DROPLET: DIGITAL_OCEAN_DELETE_EXISTING_DROPLET_INPUT
  DELETE_FIREWALL: DIGITAL_OCEAN_DELETE_FIREWALL_INPUT
  DELETE_IMAGE: DIGITAL_OCEAN_DELETE_IMAGE_INPUT
  DELETE_LOAD_BALANCER: DIGITAL_OCEAN_DELETE_LOAD_BALANCER_INPUT
  DELETE_SSH_KEY: DIGITAL_OCEAN_DELETE_SSH_KEY_INPUT
  DELETE_TAG: DIGITAL_OCEAN_DELETE_TAG_INPUT
  DELETE_VPC: DIGITAL_OCEAN_DELETE_VPC_INPUT
  DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER: DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER_INPUT
  DIGITAL_OCEAN_LIST_DOMAIN_RECORDS: DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS_INPUT
  LIST_ALL_DATABASES: DIGITAL_OCEAN_LIST_ALL_DATABASES_INPUT
  LIST_ALL_DOMAINS: DIGITAL_OCEAN_LIST_ALL_DOMAINS_INPUT
  LIST_ALL_DROPLETS: DIGITAL_OCEAN_LIST_ALL_DROPLETS_INPUT
  LIST_ALL_FIREWALLS: DIGITAL_OCEAN_LIST_ALL_FIREWALLS_INPUT
  LIST_ALL_IMAGES: DIGITAL_OCEAN_LIST_ALL_IMAGES_INPUT
  LIST_ALL_KUBERNETES_CLUSTERS: DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS_INPUT
  LIST_ALL_LOAD_BALANCERS: DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS_INPUT
  LIST_ALL_SNAPSHOTS: DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS_INPUT
  LIST_ALL_SSH_KEYS: DIGITAL_OCEAN_LIST_ALL_SSH_KEYS_INPUT
  LIST_ALL_TAGS: DIGITAL_OCEAN_LIST_ALL_TAGS_INPUT
  LIST_ALL_VOLUMES: DIGITAL_OCEAN_LIST_ALL_VOLUMES_INPUT
  LIST_ALL_VPCS: DIGITAL_OCEAN_LIST_ALL_VPCS_INPUT
  LIST_DATABASE_OPTIONS: DIGITAL_OCEAN_LIST_DATABASE_OPTIONS_INPUT
  RETRIEVE_DOMAIN: DIGITAL_OCEAN_RETRIEVE_DOMAIN_INPUT
  RETRIEVE_DOMAIN_RECORD: DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD_INPUT
  RETRIEVE_EXISTING_DROPLET: DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET_INPUT
  RETRIEVE_EXISTING_IMAGE: DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE_INPUT
  RETRIEVE_TAG: DIGITAL_OCEAN_RETRIEVE_TAG_INPUT
  RETRIEVE_VPC: DIGITAL_OCEAN_RETRIEVE_VPC_INPUT
  TAG_RESOURCE: DIGITAL_OCEAN_TAG_RESOURCE_INPUT
  UNTAG_RESOURCE: DIGITAL_OCEAN_UNTAG_RESOURCE_INPUT
  UPDATE_DOMAIN_RECORD: DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD_INPUT
  UPDATE_VPC: DIGITAL_OCEAN_UPDATE_VPC_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DIGITAL_OCEAN".
 */
export type DIGITAL_OCEAN_TOOL_OUTPUTS = {
  CREATE_CUSTOM_IMAGE: DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE_OUTPUT
  CREATE_DATABASE_CLUSTER: DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER_OUTPUT
  CREATE_NEW_BLOCK_STORAGE_VOLUME: DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME_OUTPUT
  CREATE_NEW_DOMAIN: DIGITAL_OCEAN_CREATE_NEW_DOMAIN_OUTPUT
  CREATE_NEW_DOMAIN_RECORD: DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD_OUTPUT
  CREATE_NEW_DROPLET: DIGITAL_OCEAN_CREATE_NEW_DROPLET_OUTPUT
  CREATE_NEW_FIREWALL: DIGITAL_OCEAN_CREATE_NEW_FIREWALL_OUTPUT
  CREATE_NEW_KUBERNETES_CLUSTER: DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER_OUTPUT
  CREATE_NEW_SSH_KEY: DIGITAL_OCEAN_CREATE_NEW_SSH_KEY_OUTPUT
  CREATE_NEW_TAG: DIGITAL_OCEAN_CREATE_NEW_TAG_OUTPUT
  CREATE_NEW_VPC: DIGITAL_OCEAN_CREATE_NEW_VPC_OUTPUT
  DELETE_BLOCK_STORAGE_VOLUME: DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME_OUTPUT
  DELETE_DATABASE_CLUSTER: DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER_OUTPUT
  DELETE_DOMAIN: DIGITAL_OCEAN_DELETE_DOMAIN_OUTPUT
  DELETE_DOMAIN_RECORD: DIGITAL_OCEAN_DELETE_DOMAIN_RECORD_OUTPUT
  DELETE_EXISTING_DROPLET: DIGITAL_OCEAN_DELETE_EXISTING_DROPLET_OUTPUT
  DELETE_FIREWALL: DIGITAL_OCEAN_DELETE_FIREWALL_OUTPUT
  DELETE_IMAGE: DIGITAL_OCEAN_DELETE_IMAGE_OUTPUT
  DELETE_LOAD_BALANCER: DIGITAL_OCEAN_DELETE_LOAD_BALANCER_OUTPUT
  DELETE_SSH_KEY: DIGITAL_OCEAN_DELETE_SSH_KEY_OUTPUT
  DELETE_TAG: DIGITAL_OCEAN_DELETE_TAG_OUTPUT
  DELETE_VPC: DIGITAL_OCEAN_DELETE_VPC_OUTPUT
  DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER: DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER_OUTPUT
  DIGITAL_OCEAN_LIST_DOMAIN_RECORDS: DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS_OUTPUT
  LIST_ALL_DATABASES: DIGITAL_OCEAN_LIST_ALL_DATABASES_OUTPUT
  LIST_ALL_DOMAINS: DIGITAL_OCEAN_LIST_ALL_DOMAINS_OUTPUT
  LIST_ALL_DROPLETS: DIGITAL_OCEAN_LIST_ALL_DROPLETS_OUTPUT
  LIST_ALL_FIREWALLS: DIGITAL_OCEAN_LIST_ALL_FIREWALLS_OUTPUT
  LIST_ALL_IMAGES: DIGITAL_OCEAN_LIST_ALL_IMAGES_OUTPUT
  LIST_ALL_KUBERNETES_CLUSTERS: DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS_OUTPUT
  LIST_ALL_LOAD_BALANCERS: DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS_OUTPUT
  LIST_ALL_SNAPSHOTS: DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS_OUTPUT
  LIST_ALL_SSH_KEYS: DIGITAL_OCEAN_LIST_ALL_SSH_KEYS_OUTPUT
  LIST_ALL_TAGS: DIGITAL_OCEAN_LIST_ALL_TAGS_OUTPUT
  LIST_ALL_VOLUMES: DIGITAL_OCEAN_LIST_ALL_VOLUMES_OUTPUT
  LIST_ALL_VPCS: DIGITAL_OCEAN_LIST_ALL_VPCS_OUTPUT
  LIST_DATABASE_OPTIONS: DIGITAL_OCEAN_LIST_DATABASE_OPTIONS_OUTPUT
  RETRIEVE_DOMAIN: DIGITAL_OCEAN_RETRIEVE_DOMAIN_OUTPUT
  RETRIEVE_DOMAIN_RECORD: DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD_OUTPUT
  RETRIEVE_EXISTING_DROPLET: DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET_OUTPUT
  RETRIEVE_EXISTING_IMAGE: DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE_OUTPUT
  RETRIEVE_TAG: DIGITAL_OCEAN_RETRIEVE_TAG_OUTPUT
  RETRIEVE_VPC: DIGITAL_OCEAN_RETRIEVE_VPC_OUTPUT
  TAG_RESOURCE: DIGITAL_OCEAN_TAG_RESOURCE_OUTPUT
  UNTAG_RESOURCE: DIGITAL_OCEAN_UNTAG_RESOURCE_OUTPUT
  UPDATE_DOMAIN_RECORD: DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD_OUTPUT
  UPDATE_VPC: DIGITAL_OCEAN_UPDATE_VPC_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DIGITAL_OCEAN toolkit.
 */
export const DIGITAL_OCEAN = {
  slug: "digital_ocean",
  tools: {
    /**
     * Tool to create a new custom image by providing a url to a linux vm image. use when you need to import a vm image into digitalocean after specifying name, url, distribution, and region.
     */
    CREATE_CUSTOM_IMAGE: "DIGITAL_OCEAN_CREATE_CUSTOM_IMAGE",
    /**
     * Tool to create a new managed database cluster. use when you need to provision a database cluster with name, engine, version, region, size, and number of nodes.
     */
    CREATE_DATABASE_CLUSTER: "DIGITAL_OCEAN_CREATE_DATABASE_CLUSTER",
    /**
     * Tool to create a new block storage volume. use when you need to provision persistent block storage after confirming the target region supports volumes. example: "create a 100 gib ext4 backup volume named 'db-backup' in nyc1."
     */
    CREATE_NEW_BLOCK_STORAGE_VOLUME: "DIGITAL_OCEAN_CREATE_NEW_BLOCK_STORAGE_VOLUME",
    /**
     * Tool to create a new domain. use when you have the domain name and optionally an ip address to assign an a record.
     */
    CREATE_NEW_DOMAIN: "DIGITAL_OCEAN_CREATE_NEW_DOMAIN",
    /**
     * Tool to create a new dns record for a domain. use after confirming domain exists and record specifics.
     */
    CREATE_NEW_DOMAIN_RECORD: "DIGITAL_OCEAN_CREATE_NEW_DOMAIN_RECORD",
    /**
     * Tool to create a new droplet. use when you need to provision a vm with name, region, size, and image.
     */
    CREATE_NEW_DROPLET: "DIGITAL_OCEAN_CREATE_NEW_DROPLET",
    /**
     * Tool to create a new firewall. use when you need to define a firewall name and custom rules (requires at least one inbound and one outbound rule).
     */
    CREATE_NEW_FIREWALL: "DIGITAL_OCEAN_CREATE_NEW_FIREWALL",
    /**
     * Tool to create a new kubernetes cluster. use when you have finalized the cluster name, region, version, and at least one node pool. confirm region supports kubernetes clusters before use.
     */
    CREATE_NEW_KUBERNETES_CLUSTER: "DIGITAL_OCEAN_CREATE_NEW_KUBERNETES_CLUSTER",
    /**
     * Tool to create a new ssh key. use when you need to register a public key to access droplets.
     */
    CREATE_NEW_SSH_KEY: "DIGITAL_OCEAN_CREATE_NEW_SSH_KEY",
    /**
     * Tool to create a new tag. use when you need to organize resources by grouping them under a custom tag. ensure the tag name passes validation before calling. example: "create a new tag named analytics".
     */
    CREATE_NEW_TAG: "DIGITAL_OCEAN_CREATE_NEW_TAG",
    /**
     * Tool to create a new vpc. use when you need to provision a private network in a specific region.
     */
    CREATE_NEW_VPC: "DIGITAL_OCEAN_CREATE_NEW_VPC",
    /**
     * Tool to delete a block storage volume by id. use when you need to permanently remove an existing block storage volume after confirming its id. returns http 204 no content on success.
     */
    DELETE_BLOCK_STORAGE_VOLUME: "DIGITAL_OCEAN_DELETE_BLOCK_STORAGE_VOLUME",
    /**
     * Tool to delete a database cluster by uuid. use when you have confirmed the cluster is no longer needed. returns http 204 no content on success.
     */
    DELETE_DATABASE_CLUSTER: "DIGITAL_OCEAN_DELETE_DATABASE_CLUSTER",
    /**
     * Tool to delete a domain by name. use when you have confirmed the domain has no records assigned. returns 204 no content on success.
     */
    DELETE_DOMAIN: "DIGITAL_OCEAN_DELETE_DOMAIN",
    /**
     * Tool to delete a dns record by its record id for a domain. use when you need to remove an existing dns record and have the domain name and record id. returns http 204 no content on success.
     */
    DELETE_DOMAIN_RECORD: "DIGITAL_OCEAN_DELETE_DOMAIN_RECORD",
    /**
     * Tool to delete a droplet by id. use when you need to permanently remove an existing droplet after confirming its id to avoid unintended deletions.
     */
    DELETE_EXISTING_DROPLET: "DIGITAL_OCEAN_DELETE_EXISTING_DROPLET",
    /**
     * Tool to delete a firewall by id. use when you have confirmed the firewall is no longer needed.
     */
    DELETE_FIREWALL: "DIGITAL_OCEAN_DELETE_FIREWALL",
    /**
     * Tool to delete a snapshot or custom image by id. use when cleaning up unused images after confirming there are no dependents.
     */
    DELETE_IMAGE: "DIGITAL_OCEAN_DELETE_IMAGE",
    /**
     * Tool to delete a load balancer instance by id. use when you need to permanently remove an existing load balancer after confirming its id. returns 204 no content on success.
     */
    DELETE_LOAD_BALANCER: "DIGITAL_OCEAN_DELETE_LOAD_BALANCER",
    /**
     * Tool to delete a public ssh key. use when you need to remove an ssh key from your account by its id or fingerprint after confirming its ownership. returns 204 no content on success.
     */
    DELETE_SSH_KEY: "DIGITAL_OCEAN_DELETE_SSH_KEY",
    /**
     * Tool to delete a tag by name. use when you need to untag all resources previously tagged. returns 204 no content on success.
     */
    DELETE_TAG: "DIGITAL_OCEAN_DELETE_TAG",
    /**
     * Tool to delete a vpc by its id. use when you need to remove an existing virtual private cloud. returns 204 no content on success.
     */
    DELETE_VPC: "DIGITAL_OCEAN_DELETE_VPC",
    /**
     * Tool to create a new load balancer. use after specifying region, forwarding rules, and targets.
     */
    DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER: "DIGITAL_OCEAN_DIGITAL_OCEAN_CREATE_NEW_LOAD_BALANCER",
    /**
     * Tool to list all dns records for a domain. use when you need to inspect or filter a domain's dns configuration.
     */
    DIGITAL_OCEAN_LIST_DOMAIN_RECORDS: "DIGITAL_OCEAN_DIGITAL_OCEAN_LIST_DOMAIN_RECORDS",
    /**
     * Tool to list all managed database clusters on your account. use when you need to retrieve clusters and support pagination or filtering by tag.
     */
    LIST_ALL_DATABASES: "DIGITAL_OCEAN_LIST_ALL_DATABASES",
    /**
     * Tool to list all domains in your digitalocean account. use when you need to retrieve or iterate through domains, with optional pagination. use after authentication.
     */
    LIST_ALL_DOMAINS: "DIGITAL_OCEAN_LIST_ALL_DOMAINS",
    /**
     * Tool to list all droplets in your account. use when you need an overview of droplets, optionally filtered by tag. use after authentication.
     */
    LIST_ALL_DROPLETS: "DIGITAL_OCEAN_LIST_ALL_DROPLETS",
    /**
     * Tool to list all firewalls on your digitalocean account. use when you need to audit or manage firewall rules with optional pagination.
     */
    LIST_ALL_FIREWALLS: "DIGITAL_OCEAN_LIST_ALL_FIREWALLS",
    /**
     * Tool to list all images available on your account. use after obtaining a valid api token to retrieve images optionally filtered by type, private visibility, or tag name.
     */
    LIST_ALL_IMAGES: "DIGITAL_OCEAN_LIST_ALL_IMAGES",
    /**
     * Tool to list all kubernetes clusters on your account. use when you need to enumerate every cluster and handle pagination.
     */
    LIST_ALL_KUBERNETES_CLUSTERS: "DIGITAL_OCEAN_LIST_ALL_KUBERNETES_CLUSTERS",
    /**
     * Tool to list all load balancer instances on your account. use when you need a paginated overview of load balancers after authentication.
     */
    LIST_ALL_LOAD_BALANCERS: "DIGITAL_OCEAN_LIST_ALL_LOAD_BALANCERS",
    /**
     * Tool to list all snapshots available on your digitalocean account. use when you need to fetch and optionally filter snapshots by resource type (droplet or volume) and handle pagination for inventory or backup workflows.
     */
    LIST_ALL_SNAPSHOTS: "DIGITAL_OCEAN_LIST_ALL_SNAPSHOTS",
    /**
     * Tool to list all ssh keys in your account. use when you need to retrieve ssh key metadata.
     */
    LIST_ALL_SSH_KEYS: "DIGITAL_OCEAN_LIST_ALL_SSH_KEYS",
    /**
     * Tool to list all tags in your account. use when you need to retrieve available tags and pagination info.
     */
    LIST_ALL_TAGS: "DIGITAL_OCEAN_LIST_ALL_TAGS",
    /**
     * Tool to list all block storage volumes available on your account. use when you need to retrieve volumes and optionally filter by name and region.
     */
    LIST_ALL_VOLUMES: "DIGITAL_OCEAN_LIST_ALL_VOLUMES",
    /**
     * Tool to list all vpcs on your account. use when you need an inventory of your vpc resources; supports pagination.
     */
    LIST_ALL_VPCS: "DIGITAL_OCEAN_LIST_ALL_VPCS",
    /**
     * Tool to list valid database engine, version, region, and size options. use when configuring a new managed database cluster.
     */
    LIST_DATABASE_OPTIONS: "DIGITAL_OCEAN_LIST_DATABASE_OPTIONS",
    /**
     * Tool to retrieve details about a specific domain by its name. use after creating or importing a domain to verify ttl and zone file configuration.
     */
    RETRIEVE_DOMAIN: "DIGITAL_OCEAN_RETRIEVE_DOMAIN",
    /**
     * Tool to retrieve a specific dns record for a domain by its record id. use when you have the domain name and record id to fetch record details.
     */
    RETRIEVE_DOMAIN_RECORD: "DIGITAL_OCEAN_RETRIEVE_DOMAIN_RECORD",
    /**
     * Tool to show information about an individual droplet by id. use when you have a droplet id and need detailed status.
     */
    RETRIEVE_EXISTING_DROPLET: "DIGITAL_OCEAN_RETRIEVE_EXISTING_DROPLET",
    /**
     * Tool to retrieve information about an image by id or slug. use when you need detailed metadata for a known image.
     */
    RETRIEVE_EXISTING_IMAGE: "DIGITAL_OCEAN_RETRIEVE_EXISTING_IMAGE",
    /**
     * Tool to retrieve an individual tag by name. use when you need to inspect the resources grouped under a specific tag.
     */
    RETRIEVE_TAG: "DIGITAL_OCEAN_RETRIEVE_TAG",
    /**
     * Tool to retrieve details about a specific vpc by its id. use when you need to inspect vpc properties for configuration or auditing.
     */
    RETRIEVE_VPC: "DIGITAL_OCEAN_RETRIEVE_VPC",
    /**
     * Tool to tag resources by name. use when you need to assign an existing tag to one or more resources. returns 204 no content on success.
     */
    TAG_RESOURCE: "DIGITAL_OCEAN_TAG_RESOURCE",
    /**
     * Tool to untag resources by tag name. use when you need to remove an existing tag from multiple resources in a single operation.
     */
    UNTAG_RESOURCE: "DIGITAL_OCEAN_UNTAG_RESOURCE",
    /**
     * Tool to update an existing dns record for a domain. use when you need to modify any valid attribute of a record after confirming its record id.
     */
    UPDATE_DOMAIN_RECORD: "DIGITAL_OCEAN_UPDATE_DOMAIN_RECORD",
    /**
     * Tool to update information about a vpc. use when you need to modify the name, description, or default status of an existing vpc.
     */
    UPDATE_VPC: "DIGITAL_OCEAN_UPDATE_VPC",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DIGITAL_OCEAN".
 */
export type DIGITAL_OCEAN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DIGITAL_OCEAN".
 */
export type DIGITAL_OCEAN_TRIGGER_EVENTS = {}
