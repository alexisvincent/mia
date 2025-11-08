// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BUNNYCDN's BUNNYCDN_ADD_STORAGE_ZONE tool input.
 */
type BUNNYCDN_ADD_STORAGE_ZONE_INPUT = {
  /**
   * Name
   * @description Name of the storage zone to be created.
   */
  Name?: string;
  /**
   * Origin Url
   * @description Backup data source URL if a file is missing in the storage zone.
   * @default null
   */
  OriginUrl: string | null;
  /**
   * Region
   * @description Primary region for the storage zone.
   * @default null
   */
  Region: string | null;
  /**
   * Replication Regions
   * @description List of regions for replicating the storage zone.
   * @default null
   */
  ReplicationRegions: string[] | null;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_ADD_STORAGE_ZONE tool output.
 */
type BUNNYCDN_ADD_STORAGE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the created storage zone.
       */
      Id: number;
      /**
       * Name
       * @description Name of the created storage zone.
       */
      Name: string;
      /**
       * Origin Url
       * @description Backup data source URL configured on the storage zone.
       * @default null
       */
      OriginUrl: string | null;
      /**
       * Password
       * @description Password required to access the storage zone.
       */
      Password: string;
      /**
       * Region
       * @description Primary region of the storage zone.
       */
      Region: string;
      /**
       * Replication Regions
       * @description List of regions where data is replicated.
       */
      ReplicationRegions: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_CREATE_DNS_RECORD tool input.
 */
type BUNNYCDN_CREATE_DNS_RECORD_INPUT = {
  /**
   * Accelerated
   * @description Whether accelerated routing is enabled.
   * @default null
   */
  Accelerated: boolean | null;
  /**
   * Comment
   * @description Comment for the DNS record.
   * @default null
   */
  Comment: string | null;
  /**
   * Disabled
   * @description Whether the record is disabled.
   * @default null
   */
  Disabled: boolean | null;
  /**
   * Enviromental Variables
   * @description List of environment variable objects for the record.
   * @default null
   */
  EnviromentalVariables: {
      [key: string]: string;
  }[] | null;
  /**
   * Flags
   * @description Flags for CAA records.
   * @default null
   */
  Flags: number | null;
  /**
   * Geolocation Latitude
   * @description Latitude for geolocation routing.
   * @default null
   */
  GeolocationLatitude: number | null;
  /**
   * Geolocation Longitude
   * @description Longitude for geolocation routing.
   * @default null
   */
  GeolocationLongitude: number | null;
  /**
   * Latency Zone
   * @description Latency zone for latency-based routing.
   * @default null
   */
  LatencyZone: string | null;
  /**
   * Monitor Type
   * @description Monitor type. 0=None,1=Ping,2=Http,3=Monitor.
   * @default null
   */
  MonitorType: number | null;
  /**
   * Name
   * @description The record name (e.g., 'www' for 'www.example.com').
   */
  Name?: string;
  /**
   * Port
   * @description Port number for SRV records.
   * @default null
   */
  Port: number | null;
  /**
   * Priority
   * @description Priority for MX records.
   * @default null
   */
  Priority: number | null;
  /**
   * Pull Zone Id
   * @description Pull Zone ID for PullZone record type.
   * @default null
   */
  PullZoneId: number | null;
  /**
   * Script Id
   * @description Script ID for Script record type.
   * @default null
   */
  ScriptId: number | null;
  /**
   * Smart Routing Type
   * @description Smart routing. 0=None,1=Latency,2=Geolocation.
   * @default null
   */
  SmartRoutingType: number | null;
  /**
   * Tag
   * @description Tag for CAA records.
   * @default null
   */
  Tag: string | null;
  /**
   * Ttl
   * @description Time to live for the record in seconds.
   */
  Ttl?: number;
  /**
   * Type
   * @description Type of DNS record. 0=A,1=AAAA,2=CNAME,3=TXT,4=MX,5=Redirect,6=Flatten,7=PullZone,8=SRV,9=CAA,10=PTR,11=Script,12=NS
   */
  Type?: number;
  /**
   * Value
   * @description The value of the record (e.g., IP for A record).
   */
  Value?: string;
  /**
   * Weight
   * @description Weight of the record (e.g., for SRV records).
   * @default null
   */
  Weight: number | null;
  /**
   * Zone Id
   * @description The DNS Zone ID to which the record will be added.
   */
  zone_id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_CREATE_DNS_RECORD tool output.
 */
type BUNNYCDN_CREATE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accelerated
       * @description Whether accelerated routing is enabled for the record.
       * @default null
       */
      Accelerated: boolean | null;
      /**
       * Comment
       * @description Comment for the DNS record.
       * @default null
       */
      Comment: string | null;
      /**
       * Disabled
       * @description Whether the record is disabled.
       * @default null
       */
      Disabled: boolean | null;
      /**
       * Enviromental Variables
       * @description Environment variables set on the record, if any.
       * @default null
       */
      EnviromentalVariables: {
          [key: string]: string;
      }[] | null;
      /**
       * Flags
       * @description Flags for the DNS record, if applicable.
       * @default null
       */
      Flags: number | null;
      /**
       * Geolocation Latitude
       * @description Latitude for geolocation routing, if set.
       * @default null
       */
      GeolocationLatitude: number | null;
      /**
       * Geolocation Longitude
       * @description Longitude for geolocation routing, if set.
       * @default null
       */
      GeolocationLongitude: number | null;
      /**
       * Id
       * @description Unique identifier of the created DNS record.
       */
      Id: number;
      /**
       * Latency Zone
       * @description Latency zone for the record, if set.
       * @default null
       */
      LatencyZone: string | null;
      /**
       * Monitor Type
       * @description Monitor type of the record.
       * @default null
       */
      MonitorType: number | null;
      /**
       * Name
       * @description Name of the DNS record.
       */
      Name: string;
      /**
       * Port
       * @description Port of the DNS record, if applicable.
       * @default null
       */
      Port: number | null;
      /**
       * Priority
       * @description Priority of the DNS record, if applicable.
       * @default null
       */
      Priority: number | null;
      /**
       * Pull Zone Id
       * @description Pull Zone ID associated with the record, if any.
       * @default null
       */
      PullZoneId: number | null;
      /**
       * Script Id
       * @description Script ID associated with the record, if any.
       * @default null
       */
      ScriptId: number | null;
      /**
       * Smart Routing Type
       * @description Smart routing type of the record.
       * @default null
       */
      SmartRoutingType: number | null;
      /**
       * Tag
       * @description Tag of the DNS record, if applicable.
       * @default null
       */
      Tag: string | null;
      /**
       * Ttl
       * @description Time to live of the DNS record.
       */
      Ttl: number;
      /**
       * Type
       * @description Type of the DNS record.
       */
      Type: number;
      /**
       * Value
       * @description Value of the DNS record.
       */
      Value: string;
      /**
       * Weight
       * @description Weight of the DNS record, if applicable.
       * @default null
       */
      Weight: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_CREATE_PULL_ZONE tool input.
 */
type BUNNYCDN_CREATE_PULL_ZONE_INPUT = {
  /**
   * Aws Signing Enabled
   * @description Enable AWS signing.
   * @default null
   */
  AWSSigningEnabled: boolean | null;
  /**
   * Aws Signing Key
   * @description AWS signing key.
   * @default null
   */
  AWSSigningKey: string | null;
  /**
   * Aws Signing Region Name
   * @description AWS signing region name.
   * @default null
   */
  AWSSigningRegionName: string | null;
  /**
   * Aws Signing Secret
   * @description AWS signing secret.
   * @default null
   */
  AWSSigningSecret: string | null;
  /**
   * Add Canonical Header
   * @description Add a canonical header.
   * @default null
   */
  AddCanonicalHeader: boolean | null;
  /**
   * Add Host Header
   * @description Add a host header.
   * @default null
   */
  AddHostHeader: boolean | null;
  /**
   * Cache Control Max Age Override
   * @description Override the max-age directive in the Cache-Control header.
   * @default null
   */
  CacheControlMaxAgeOverride: number | null;
  /**
   * Enable Cache Slice
   * @description Enable cache slicing.
   * @default null
   */
  EnableCacheSlice: boolean | null;
  /**
   * Enable Country Code Vary
   * @description Enable country code vary.
   * @default null
   */
  EnableCountryCodeVary: boolean | null;
  /**
   * Enable Geo Zone Af
   * @description Enable the Africa region.
   * @default null
   */
  EnableGeoZoneAF: boolean | null;
  /**
   * Enable Geo Zone An
   * @description Enable the Antarctica region.
   * @default null
   */
  EnableGeoZoneAN: boolean | null;
  /**
   * Enable Geo Zone Asia
   * @description Enable the Asia region.
   * @default null
   */
  EnableGeoZoneASIA: boolean | null;
  /**
   * Enable Geo Zone Eu
   * @description Enable the EU region.
   * @default null
   */
  EnableGeoZoneEU: boolean | null;
  /**
   * Enable Geo Zone Me
   * @description Enable the Middle East region.
   * @default null
   */
  EnableGeoZoneME: boolean | null;
  /**
   * Enable Geo Zone Oc
   * @description Enable the Oceania region.
   * @default null
   */
  EnableGeoZoneOC: boolean | null;
  /**
   * Enable Geo Zone Sa
   * @description Enable the South America region.
   * @default null
   */
  EnableGeoZoneSA: boolean | null;
  /**
   * Enable Geo Zone Us
   * @description Enable the US region.
   * @default null
   */
  EnableGeoZoneUS: boolean | null;
  /**
   * Enable Hostname Vary
   * @description Enable hostname vary.
   * @default null
   */
  EnableHostnameVary: boolean | null;
  /**
   * Enable Logging
   * @description Enable logging.
   * @default null
   */
  EnableLogging: boolean | null;
  /**
   * Enable Origin Shield
   * @description Enable origin shield.
   * @default null
   */
  EnableOriginShield: boolean | null;
  /**
   * Enable Tls1
   * @description Enable TLS 1.0.
   * @default null
   */
  EnableTLS1: boolean | null;
  /**
   * Enable Webp Vary
   * @description Enable WebP vary.
   * @default null
   */
  EnableWebpVary: boolean | null;
  /**
   * Ignore Query Strings
   * @description Ignore query strings when caching.
   * @default null
   */
  IgnoreQueryStrings: boolean | null;
  /**
   * Log Forwarding Enabled
   * @description Enable log forwarding.
   * @default null
   */
  LogForwardingEnabled: boolean | null;
  /**
   * Log Forwarding Hostname
   * @description Hostname for log forwarding.
   * @default null
   */
  LogForwardingHostname: string | null;
  /**
   * Log Forwarding Port
   * @description Port for log forwarding.
   * @default null
   */
  LogForwardingPort: number | null;
  /**
   * Log Forwarding Token
   * @description Token for log forwarding.
   * @default null
   */
  LogForwardingToken: string | null;
  /**
   * Logging Save To Storage
   * @description Save logs to storage.
   * @default null
   */
  LoggingSaveToStorage: boolean | null;
  /**
   * Logging Storage Zone Id
   * @description ID of the storage zone for logs.
   * @default null
   */
  LoggingStorageZoneId: number | null;
  /**
   * Name
   * @description Name of the pull zone, used to generate the default hostname.
   */
  Name?: string;
  /**
   * Origin Shield Zone Code
   * @description Zone code for origin shield.
   * @default null
   */
  OriginShieldZoneCode: string | null;
  /**
   * Origin Url
   * @description Origin server URL from which BunnyCDN will pull content.
   */
  OriginUrl?: string;
  /**
   * Pricing Tier
   * @description Pricing tier for the pull zone. 0=Standard, 1=High Volume.
   * @default null
   */
  PricingTier: number | null;
  /**
   * Storage Zone Id
   * @description ID of the storage zone to link, if applicable.
   * @default null
   */
  StorageZoneId: number | null;
  /**
   * Type
   * @description Type of pull zone. 0 for standard pull zone.
   * @default null
   */
  Type: number | null;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_CREATE_PULL_ZONE tool output.
 */
type BUNNYCDN_CREATE_PULL_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aws Signing Enabled
       * @description AWS signing enabled.
       */
      AWSSigningEnabled: boolean;
      /**
       * Aws Signing Key
       * @description AWS signing key.
       * @default null
       */
      AWSSigningKey: string | null;
      /**
       * Aws Signing Region Name
       * @description AWS signing region name.
       * @default null
       */
      AWSSigningRegionName: string | null;
      /**
       * Aws Signing Secret
       * @description AWS signing secret.
       * @default null
       */
      AWSSigningSecret: string | null;
      /**
       * Add Canonical Header
       * @description Canonical header added.
       */
      AddCanonicalHeader: boolean;
      /**
       * Add Host Header
       * @description Host header added.
       */
      AddHostHeader: boolean;
      /**
       * Cache Control Max Age Override
       * @description Max-age override value for cache-control.
       */
      CacheControlMaxAgeOverride: number;
      /**
       * Enable Cache Slice
       * @description Cache slicing enabled.
       */
      EnableCacheSlice: boolean;
      /**
       * Enable Country Code Vary
       * @description Country code vary enabled.
       */
      EnableCountryCodeVary: boolean;
      /**
       * Enable Geo Zone Af
       * @description Africa region enabled.
       */
      EnableGeoZoneAF: boolean;
      /**
       * Enable Geo Zone An
       * @description Antarctica region enabled.
       */
      EnableGeoZoneAN: boolean;
      /**
       * Enable Geo Zone Asia
       * @description Asia region enabled.
       */
      EnableGeoZoneASIA: boolean;
      /**
       * Enable Geo Zone Eu
       * @description EU region enabled.
       */
      EnableGeoZoneEU: boolean;
      /**
       * Enable Geo Zone Me
       * @description Middle East region enabled.
       */
      EnableGeoZoneME: boolean;
      /**
       * Enable Geo Zone Oc
       * @description Oceania region enabled.
       */
      EnableGeoZoneOC: boolean;
      /**
       * Enable Geo Zone Sa
       * @description South America region enabled.
       */
      EnableGeoZoneSA: boolean;
      /**
       * Enable Geo Zone Us
       * @description US region enabled.
       */
      EnableGeoZoneUS: boolean;
      /**
       * Enable Hostname Vary
       * @description Hostname vary enabled.
       */
      EnableHostnameVary: boolean;
      /**
       * Enable Logging
       * @description Logging enabled.
       */
      EnableLogging: boolean;
      /**
       * Enable Origin Shield
       * @description Origin shield enabled.
       */
      EnableOriginShield: boolean;
      /**
       * Enable Tls1
       * @description TLS 1.0 enabled.
       */
      EnableTLS1: boolean;
      /**
       * Enable Webp Vary
       * @description WebP vary enabled.
       */
      EnableWebpVary: boolean;
      /**
       * Id
       * @description The ID of the newly created pull zone.
       */
      Id: number;
      /**
       * Ignore Query Strings
       * @description Query strings ignored when caching.
       */
      IgnoreQueryStrings: boolean;
      /**
       * Log Forwarding Enabled
       * @description Log forwarding enabled.
       */
      LogForwardingEnabled: boolean;
      /**
       * Log Forwarding Hostname
       * @description Log forwarding hostname.
       * @default null
       */
      LogForwardingHostname: string | null;
      /**
       * Log Forwarding Port
       * @description Log forwarding port.
       * @default null
       */
      LogForwardingPort: number | null;
      /**
       * Log Forwarding Token
       * @description Log forwarding token.
       * @default null
       */
      LogForwardingToken: string | null;
      /**
       * Logging Save To Storage
       * @description Logs saved to storage.
       */
      LoggingSaveToStorage: boolean;
      /**
       * Logging Storage Zone Id
       * @description Storage zone ID for logs.
       * @default null
       */
      LoggingStorageZoneId: number | null;
      /**
       * Name
       * @description Name of the pull zone.
       */
      Name: string;
      /**
       * Origin Shield Zone Code
       * @description Origin shield zone code.
       * @default null
       */
      OriginShieldZoneCode: string | null;
      /**
       * Origin Url
       * @description Origin URL of the pull zone.
       */
      OriginUrl: string;
      /**
       * Pricing Tier
       * @description Pricing tier of the pull zone.
       */
      PricingTier: number;
      /**
       * Storage Zone Id
       * @description ID of the linked storage zone, if applicable.
       * @default null
       */
      StorageZoneId: number | null;
      /**
       * Type
       * @description Type of the pull zone.
       */
      Type: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_DELETE_DNS_RECORD tool input.
 */
type BUNNYCDN_DELETE_DNS_RECORD_INPUT = {
  /**
   * Record Id
   * @description Unique identifier of the DNS record to delete.
   */
  record_id?: number;
  /**
   * Zone Id
   * @description Unique identifier of the DNS zone containing the record.
   */
  zone_id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_DELETE_DNS_RECORD tool output.
 */
type BUNNYCDN_DELETE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the DNS record has been deleted.
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
 * Type of BUNNYCDN's BUNNYCDN_DELETE_DNS_ZONE tool input.
 */
type BUNNYCDN_DELETE_DNS_ZONE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the DNS zone to delete.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_DELETE_DNS_ZONE tool output.
 */
type BUNNYCDN_DELETE_DNS_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the DNS zone has been deleted.
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
 * Type of BUNNYCDN's BUNNYCDN_DELETE_PULL_ZONE tool input.
 */
type BUNNYCDN_DELETE_PULL_ZONE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the pull zone to delete.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_DELETE_PULL_ZONE tool output.
 */
type BUNNYCDN_DELETE_PULL_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the pull zone has been deleted successfully.
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
 * Type of BUNNYCDN's BUNNYCDN_DELETE_STORAGE_ZONE tool input.
 */
type BUNNYCDN_DELETE_STORAGE_ZONE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the storage zone to delete.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_DELETE_STORAGE_ZONE tool output.
 */
type BUNNYCDN_DELETE_STORAGE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the result of the delete operation.
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
 * Type of BUNNYCDN's BUNNYCDN_GET_DNS_ZONE_DETAILS tool input.
 */
type BUNNYCDN_GET_DNS_ZONE_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the DNS zone to retrieve.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_DNS_ZONE_DETAILS tool output.
 */
type BUNNYCDN_GET_DNS_ZONE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Nameservers Enabled
       * @description Whether custom nameservers are enabled.
       */
      CustomNameserversEnabled: boolean;
      /**
       * Domain
       * @description Domain name of the DNS zone.
       */
      Domain: string;
      /**
       * Id
       * @description DNS Zone ID.
       */
      Id: number;
      /**
       * Logging Enabled
       * @description Whether logging is enabled.
       */
      LoggingEnabled: boolean;
      /**
       * Logging Ip Anonymization Enabled
       * @description Whether IP anonymization in logs is enabled.
       */
      LoggingIPAnonymizationEnabled: boolean;
      /**
       * Nameserver1
       * @description The first custom nameserver.
       * @default null
       */
      Nameserver1: string | null;
      /**
       * Nameserver2
       * @description The second custom nameserver.
       * @default null
       */
      Nameserver2: string | null;
      /**
       * Nameservers Detected
       * @description Whether nameservers were auto-detected.
       */
      NameserversDetected: boolean;
      /**
       * Soa Email
       * @description The SOA (Start of Authority) email address.
       * @default null
       */
      SoaEmail: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_DNS_ZONE_LIST tool input.
 */
type BUNNYCDN_GET_DNS_ZONE_LIST_INPUT = {
  /**
   * Page
   * @description Page number for paginated results, starting at 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page.
   * @default 50
   */
  perPage: number | null;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_DNS_ZONE_LIST tool output.
 */
type BUNNYCDN_GET_DNS_ZONE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       */
      CurrentPage: number;
      /**
       * Has More Items
       * @description True if more items are available
       */
      HasMoreItems: boolean;
      /**
       * Items
       * @description List of DNS zones
       */
      Items: {
          /**
           * Date Created
           * @description Creation date of the DNS zone in ISO 8601 format
           */
          DateCreated: string;
          /**
           * Date Modified
           * @description Last modification date of the DNS zone in ISO 8601 format
           */
          DateModified: string;
          /**
           * Domain
           * @description Domain name of the DNS zone
           */
          Domain: string;
          /**
           * Id
           * @description Unique identifier of the DNS zone
           */
          Id: number;
      }[];
      /**
       * Total Items
       * @description Total number of DNS zones
       */
      TotalItems: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_PULL_ZONE tool input.
 */
type BUNNYCDN_GET_PULL_ZONE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the Pull Zone to retrieve.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_PULL_ZONE tool output.
 */
type BUNNYCDN_GET_PULL_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aws Signing Enabled
       * @description Whether AWS signing is enabled.
       * @default null
       */
      AWSSigningEnabled: boolean | null;
      /**
       * Aws Signing Key
       * @description The AWS signing key.
       * @default null
       */
      AWSSigningKey: string | null;
      /**
       * Aws Signing Region Name
       * @description The AWS signing region name.
       * @default null
       */
      AWSSigningRegionName: string | null;
      /**
       * Aws Signing Secret
       * @description The AWS signing secret.
       * @default null
       */
      AWSSigningSecret: string | null;
      /**
       * Access Control Origin Header Extensions
       * @description List of extensions for the Access-Control-Allow-Origin header.
       * @default null
       */
      AccessControlOriginHeaderExtensions: string[] | null;
      /**
       * Active
       * @description Whether the Pull Zone is active.
       * @default null
       */
      Active: boolean | null;
      /**
       * Add Canonical Header
       * @description Whether the canonical header is added.
       * @default null
       */
      AddCanonicalHeader: boolean | null;
      /**
       * Add Host Header
       * @description Whether the Host header is added to origin requests.
       * @default null
       */
      AddHostHeader: boolean | null;
      /**
       * Block Root Path Access
       * @description Whether access to the root path is blocked.
       * @default null
       */
      BlockRootPathAccess: boolean | null;
      /**
       * Blocked Countries
       * @description List of country codes that are blocked.
       * @default null
       */
      BlockedCountries: string[] | null;
      /**
       * Budget Redirected Countries
       * @description List of country codes that are redirected due to budget constraints.
       * @default null
       */
      BudgetRedirectedCountries: string[] | null;
      /**
       * Cache Control Max Age Override
       * @description Overrides the Cache-Control max-age header, in seconds.
       * @default null
       */
      CacheControlMaxAgeOverride: number | null;
      /**
       * Disable Cookies
       * @description Whether cookies are disabled.
       * @default null
       */
      DisableCookies: boolean | null;
      /**
       * Enable Access Control Origin Header
       * @description Whether the Access-Control-Allow-Origin header is enabled.
       * @default null
       */
      EnableAccessControlOriginHeader: boolean | null;
      /**
       * Enable Cache Slice
       * @description Whether cache slicing is enabled.
       * @default null
       */
      EnableCacheSlice: boolean | null;
      /**
       * Enable Country Code Vary
       * @description Whether country code vary is enabled.
       * @default null
       */
      EnableCountryCodeVary: boolean | null;
      /**
       * Enable Geo Zone Af
       * @description Whether the Africa geo zone is enabled.
       * @default null
       */
      EnableGeoZoneAF: boolean | null;
      /**
       * Enable Geo Zone Asia
       * @description Whether the Asia geo zone is enabled.
       * @default null
       */
      EnableGeoZoneASIA: boolean | null;
      /**
       * Enable Geo Zone Eu
       * @description Whether the EU geo zone is enabled.
       * @default null
       */
      EnableGeoZoneEU: boolean | null;
      /**
       * Enable Geo Zone Sa
       * @description Whether the South America geo zone is enabled.
       * @default null
       */
      EnableGeoZoneSA: boolean | null;
      /**
       * Enable Geo Zone Us
       * @description Whether the US geo zone is enabled.
       * @default null
       */
      EnableGeoZoneUS: boolean | null;
      /**
       * Enable Hostname Vary
       * @description Whether hostname vary is enabled.
       * @default null
       */
      EnableHostnameVary: boolean | null;
      /**
       * Enable Logging
       * @description Whether logging is enabled.
       * @default null
       */
      EnableLogging: boolean | null;
      /**
       * Enable Origin Shield
       * @description Whether Origin Shield is enabled.
       * @default null
       */
      EnableOriginShield: boolean | null;
      /**
       * Enable Query String Ordering
       * @description Whether query string ordering is enabled.
       * @default null
       */
      EnableQueryStringOrdering: boolean | null;
      /**
       * Enable Tls1
       * @description Whether TLS 1.0 is enabled.
       * @default null
       */
      EnableTLS1: boolean | null;
      /**
       * Enable Webp Vary
       * @description Whether WebP vary is enabled.
       * @default null
       */
      EnableWebpVary: boolean | null;
      /**
       * Enabled
       * @description Whether the Pull Zone is enabled.
       * @default null
       */
      Enabled: boolean | null;
      /**
       * Hostnames
       * @description List of hostnames assigned to the Pull Zone.
       */
      Hostnames: string[];
      /**
       * Id
       * @description Pull Zone ID.
       */
      Id: number;
      /**
       * Ignore Query Strings
       * @description Whether query strings are ignored in caching.
       * @default null
       */
      IgnoreQueryStrings: boolean | null;
      /**
       * Log Forwarding Enabled
       * @description Whether log forwarding is enabled.
       * @default null
       */
      LogForwardingEnabled: boolean | null;
      /**
       * Log Forwarding Hostname
       * @description Hostname to which logs are forwarded.
       * @default null
       */
      LogForwardingHostname: string | null;
      /**
       * Log Forwarding Port
       * @description Port used for log forwarding.
       * @default null
       */
      LogForwardingPort: number | null;
      /**
       * Log Forwarding Token
       * @description Token used for log forwarding authentication.
       * @default null
       */
      LogForwardingToken: string | null;
      /**
       * Logging Save To Storage
       * @description Whether logs are saved to storage.
       * @default null
       */
      LoggingSaveToStorage: boolean | null;
      /**
       * Logging Storage Zone Id
       * @description Storage Zone ID where logs are saved.
       * @default null
       */
      LoggingStorageZoneId: number | null;
      /**
       * Monthly Bandwidth Limit
       * @description Monthly bandwidth limit set for the Pull Zone, in bytes.
       * @default null
       */
      MonthlyBandwidthLimit: number | null;
      /**
       * Monthly Bandwidth Used
       * @description Amount of bandwidth used in the current month, in bytes.
       * @default null
       */
      MonthlyBandwidthUsed: number | null;
      /**
       * Monthly Requests Limit
       * @description Monthly request limit set for the Pull Zone.
       * @default null
       */
      MonthlyRequestsLimit: number | null;
      /**
       * Monthly Requests Used
       * @description Number of requests made in the current month.
       * @default null
       */
      MonthlyRequestsUsed: number | null;
      /**
       * Name
       * @description Name of the Pull Zone.
       */
      Name: string;
      /**
       * Origin Shield Zone Code
       * @description Zone code for the Origin Shield.
       * @default null
       */
      OriginShieldZoneCode: string | null;
      /**
       * Origin Url
       * @description Origin URL of the Pull Zone.
       */
      OriginUrl: string;
      /**
       * Storage Zone Id
       * @description ID of the associated Storage Zone, if applicable.
       * @default null
       */
      StorageZoneId: number | null;
      /**
       * Type
       * @description Type of the Pull Zone.
       */
      Type: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_PULL_ZONE_LIST tool input.
 */
type BUNNYCDN_GET_PULL_ZONE_LIST_INPUT = {
  /**
   * Include Certificate
   * @description Whether to include SSL certificate information.
   * @default false
   */
  includeCertificate: boolean | null;
  /**
   * Page
   * @description Page number for paginated results, starting at 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (default 50, max 1000).
   * @default 50
   */
  perPage: number | null;
  /**
   * Search
   * @description Filter pull zones by name or hostname.
   * @default null
   */
  search: string | null;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_PULL_ZONE_LIST tool output.
 */
type BUNNYCDN_GET_PULL_ZONE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Key
       * @description Access key for the Pull Zone API usage
       */
      AccessKey: string;
      /**
       * Active
       * @description Whether the Pull Zone is active
       */
      Active: boolean;
      /**
       * Certificate Name
       * @description Name of the SSL certificate, if any
       * @default null
       */
      CertificateName: string | null;
      /**
       * Host Header
       * @description Custom host header value, if set
       * @default null
       */
      HostHeader: string | null;
      /**
       * Hostnames
       * @description List of hostnames assigned to the Pull Zone
       */
      Hostnames: string[];
      /**
       * Id
       * @description Pull Zone ID
       */
      Id: number;
      /**
       * Locked
       * @description Whether the Pull Zone is locked from changes
       */
      Locked: boolean;
      /**
       * Monthly Bandwidth Limit
       * @description Configured monthly bandwidth limit in GB
       */
      MonthlyBandwidthLimit: number;
      /**
       * Monthly Bandwidth Used
       * @description Monthly bandwidth used in GB
       */
      MonthlyBandwidthUsed: number;
      /**
       * Name
       * @description Name of the Pull Zone
       */
      Name: string;
      /**
       * Origin Url
       * @description Origin URL of the Pull Zone
       */
      OriginUrl: string;
      /**
       * Ssl Support
       * @description Whether SSL support is enabled
       * @default null
       */
      SslSupport: boolean | null;
      /**
       * Type
       * @description Type of the Pull Zone
       */
      Type: number;
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
 * Type of BUNNYCDN's BUNNYCDN_GET_STORAGE_ZONE_DETAILS tool input.
 */
type BUNNYCDN_GET_STORAGE_ZONE_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the storage zone to retrieve.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_STORAGE_ZONE_DETAILS tool output.
 */
type BUNNYCDN_GET_STORAGE_ZONE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description Creation date of the storage zone in ISO 8601 format
       */
      DateCreated: string;
      /**
       * Id
       * @description Unique identifier of the storage zone
       */
      Id: number;
      /**
       * Name
       * @description Name of the storage zone
       */
      Name: string;
      /**
       * Origin Url
       * @description Backup data source URL if a file is missing in the storage zone.
       * @default null
       */
      OriginUrl: string | null;
      /**
       * Region
       * @description Primary region of the storage zone, e.g., 'NY1'
       */
      Region: string;
      /**
       * Replication Regions
       * @description List of regions for replicating the storage zone.
       * @default null
       */
      ReplicationRegions: string[] | null;
      /**
       * Storage Used
       * @description Amount of storage used in bytes
       */
      StorageUsed: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_STORAGE_ZONE_LIST tool input.
 */
type BUNNYCDN_GET_STORAGE_ZONE_LIST_INPUT = {
  /**
   * Page
   * @description Page number for paginated results, starting at 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page.
   * @default 50
   */
  perPage: number | null;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_STORAGE_ZONE_LIST tool output.
 */
type BUNNYCDN_GET_STORAGE_ZONE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       */
      CurrentPage: number;
      /**
       * Has More Items
       * @description True if more items are available
       */
      HasMoreItems: boolean;
      /**
       * Items
       * @description List of storage zones
       */
      Items: {
          /**
           * Date Created
           * @description Creation date of the storage zone in ISO 8601 format
           */
          DateCreated: string;
          /**
           * Id
           * @description Unique identifier of the storage zone
           */
          Id: number;
          /**
           * Name
           * @description Name of the storage zone
           */
          Name: string;
          /**
           * Region
           * @description Primary region of the storage zone
           */
          Region: string;
          /**
           * Storage Used
           * @description Amount of storage used in bytes
           */
          StorageUsed: number;
      }[];
      /**
       * Total Items
       * @description Total number of storage zones
       */
      TotalItems: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_STORAGE_ZONE_REGION tool input.
 */
type BUNNYCDN_GET_STORAGE_ZONE_REGION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the Storage Zone to retrieve.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_GET_STORAGE_ZONE_REGION tool output.
 */
type BUNNYCDN_GET_STORAGE_ZONE_REGION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Region
       * @description Primary region of the storage zone, e.g., 'NY1'.
       */
      Region: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_LIST_DNS_RECORDS tool input.
 */
type BUNNYCDN_LIST_DNS_RECORDS_INPUT = {
  /**
   * Skip
   * @description Number of records to skip for pagination (offset).
   * @default null
   */
  skip: number | null;
  /**
   * Take
   * @description Maximum number of records to return. Defaults to all records if not set.
   * @default null
   */
  take: number | null;
  /**
   * Zone Id
   * @description Numeric ID of the DNS zone to retrieve records from.
   */
  zoneId?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_LIST_DNS_RECORDS tool output.
 */
type BUNNYCDN_LIST_DNS_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the DNS record.
       */
      Id: number;
      /**
       * Name
       * @description Hostname or label of the DNS record.
       */
      Name: string;
      /**
       * Priority
       * @description Priority for MX records, if applicable.
       * @default null
       */
      Priority: number | null;
      /**
       * Ttl
       * @description Time to live of the DNS record, in seconds.
       */
      Ttl: number;
      /**
       * Type
       * @description Type of the DNS record (e.g., A, AAAA, CNAME).
       */
      Type: string;
      /**
       * Value
       * @description Value or target of the DNS record.
       */
      Value: string;
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
 * Type of BUNNYCDN's BUNNYCDN_PURGE_PULL_ZONE tool input.
 */
type BUNNYCDN_PURGE_PULL_ZONE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the pull zone to purge.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_PURGE_PULL_ZONE tool output.
 */
type BUNNYCDN_PURGE_PULL_ZONE_OUTPUT = {
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
 * Type of BUNNYCDN's BUNNYCDN_PURGE_URL tool input.
 */
type BUNNYCDN_PURGE_URL_INPUT = {
  /**
   * Async Flag
   * @description If true, performs the purge operation asynchronously (non-blocking). Defaults to false (wait for purge to complete).
   * @default false
   */
  async_flag: boolean;
  /**
   * Url
   * @description The full URL of the content to purge from cache.
   */
  url?: string;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_PURGE_URL tool output.
 */
type BUNNYCDN_PURGE_URL_OUTPUT = {
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
 * Type of BUNNYCDN's BUNNYCDN_SET_STORAGE_ZONE_REGION tool input.
 */
type BUNNYCDN_SET_STORAGE_ZONE_REGION_INPUT = {
  /**
   * Replication Zones
   * @description List of region codes to replicate storage zone across. Valid codes: DE, UK, SE, CZ, ES, NY, LA, WA, MI, SG, HK, JP, SYD, BR, JH
   */
  ReplicationZones?: string[];
  /**
   * Id
   * @description ID of the storage zone to update.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_SET_STORAGE_ZONE_REGION tool output.
 */
type BUNNYCDN_SET_STORAGE_ZONE_REGION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the storage zone
       */
      Id: number;
      /**
       * Name
       * @description Name of the storage zone
       */
      Name: string;
      /**
       * Origin Url
       * @description Backup data source URL if configured
       * @default null
       */
      OriginUrl: string | null;
      /**
       * Password
       * @description Password required to access the storage zone
       */
      Password: string;
      /**
       * Region
       * @description Primary region of the storage zone
       */
      Region: string;
      /**
       * Replication Regions
       * @description List of regions where data is replicated
       */
      ReplicationRegions: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_UPDATE_PULL_ZONE tool input.
 */
type BUNNYCDN_UPDATE_PULL_ZONE_INPUT = {
  /**
   * Aws Signing Enabled
   * @description Enable AWS signing.
   * @default null
   */
  AWSSigningEnabled: boolean | null;
  /**
   * Aws Signing Key
   * @description AWS signing key.
   * @default null
   */
  AWSSigningKey: string | null;
  /**
   * Aws Signing Region Name
   * @description AWS signing region name.
   * @default null
   */
  AWSSigningRegionName: string | null;
  /**
   * Aws Signing Secret
   * @description AWS signing secret.
   * @default null
   */
  AWSSigningSecret: string | null;
  /**
   * Add Canonical Header
   * @description Add a canonical header.
   * @default null
   */
  AddCanonicalHeader: boolean | null;
  /**
   * Add Host Header
   * @description Add a host header.
   * @default null
   */
  AddHostHeader: boolean | null;
  /**
   * Blocked Countries
   * @description List of country codes from which traffic is blocked.
   * @default null
   */
  BlockedCountries: string[] | null;
  /**
   * Budget Redirected Countries
   * @description List of country codes to which traffic is redirected for budget reasons.
   * @default null
   */
  BudgetRedirectedCountries: string[] | null;
  /**
   * Cache Control Max Age Override
   * @description Override the max-age directive in the Cache-Control header.
   * @default null
   */
  CacheControlMaxAgeOverride: number | null;
  /**
   * Cache Error Responses
   * @description Cache error responses.
   * @default null
   */
  CacheErrorResponses: boolean | null;
  /**
   * Disable Cookies
   * @description Disable cookies.
   * @default null
   */
  DisableCookies: boolean | null;
  /**
   * Enable Cache Slice
   * @description Enable cache slicing.
   * @default null
   */
  EnableCacheSlice: boolean | null;
  /**
   * Enable Country Code Vary
   * @description Enable country code vary.
   * @default null
   */
  EnableCountryCodeVary: boolean | null;
  /**
   * Enable Geo Zone Af
   * @description Enable the Africa region.
   * @default null
   */
  EnableGeoZoneAF: boolean | null;
  /**
   * Enable Geo Zone An
   * @description Enable the Antarctica region.
   * @default null
   */
  EnableGeoZoneAN: boolean | null;
  /**
   * Enable Geo Zone Asia
   * @description Enable the Asia region.
   * @default null
   */
  EnableGeoZoneASIA: boolean | null;
  /**
   * Enable Geo Zone Eu
   * @description Enable the EU region.
   * @default null
   */
  EnableGeoZoneEU: boolean | null;
  /**
   * Enable Geo Zone Me
   * @description Enable the Middle East region.
   * @default null
   */
  EnableGeoZoneME: boolean | null;
  /**
   * Enable Geo Zone Oc
   * @description Enable the Oceania region.
   * @default null
   */
  EnableGeoZoneOC: boolean | null;
  /**
   * Enable Geo Zone Sa
   * @description Enable the South America region.
   * @default null
   */
  EnableGeoZoneSA: boolean | null;
  /**
   * Enable Geo Zone Us
   * @description Enable the US region.
   * @default null
   */
  EnableGeoZoneUS: boolean | null;
  /**
   * Enable Hostname Vary
   * @description Enable hostname vary.
   * @default null
   */
  EnableHostnameVary: boolean | null;
  /**
   * Enable Logging
   * @description Enable logging.
   * @default null
   */
  EnableLogging: boolean | null;
  /**
   * Enable Origin Shield
   * @description Enable origin shield.
   * @default null
   */
  EnableOriginShield: boolean | null;
  /**
   * Enable Query String Ordering
   * @description Enable query string ordering.
   * @default null
   */
  EnableQueryStringOrdering: boolean | null;
  /**
   * Enable Tls1
   * @description Enable TLS 1.0.
   * @default null
   */
  EnableTLS1: boolean | null;
  /**
   * Enable Webp Vary
   * @description Enable WebP vary.
   * @default null
   */
  EnableWebpVary: boolean | null;
  /**
   * Ignore Query Strings
   * @description Ignore query strings when caching.
   * @default null
   */
  IgnoreQueryStrings: boolean | null;
  /**
   * Log Forwarding Enabled
   * @description Enable log forwarding.
   * @default null
   */
  LogForwardingEnabled: boolean | null;
  /**
   * Log Forwarding Hostname
   * @description Hostname to which logs are forwarded.
   * @default null
   */
  LogForwardingHostname: string | null;
  /**
   * Log Forwarding Port
   * @description Port to which logs are forwarded.
   * @default null
   */
  LogForwardingPort: number | null;
  /**
   * Log Forwarding Token
   * @description Token used for log forwarding authentication.
   * @default null
   */
  LogForwardingToken: string | null;
  /**
   * Logging Save To Storage
   * @description Save logs to storage.
   * @default null
   */
  LoggingSaveToStorage: boolean | null;
  /**
   * Logging Storage Zone Id
   * @description ID of the storage zone where logs are saved.
   * @default null
   */
  LoggingStorageZoneId: number | null;
  /**
   * Name
   * @description New name for the pull zone.
   * @default null
   */
  Name: string | null;
  /**
   * Origin Shield Zone Code
   * @description Zone code for origin shield.
   * @default null
   */
  OriginShieldZoneCode: string | null;
  /**
   * Origin Url
   * @description New origin server URL from which BunnyCDN will pull content.
   * @default null
   */
  OriginUrl: string | null;
  /**
   * Pricing Tier
   * @description Pricing tier for the pull zone. 0=Standard, 1=High Volume.
   * @default null
   */
  PricingTier: number | null;
  /**
   * Storage Zone Id
   * @description ID of the storage zone to link, if applicable.
   * @default null
   */
  StorageZoneId: number | null;
  /**
   * Type
   * @description Type of pull zone. 0 for standard pull zone.
   * @default null
   */
  Type: number | null;
  /**
   * Id
   * @description ID of the pull zone to update
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_UPDATE_PULL_ZONE tool output.
 */
type BUNNYCDN_UPDATE_PULL_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Http
       * @description HTTP status code of the response.
       */
      HTTP: number;
      /**
       * Msg
       * @description A message describing the result of the update operation.
       */
      msg: string;
      /**
       * Status
       * @description Indicates the status of the update operation.
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
 * Type of BUNNYCDN's BUNNYCDN_UPDATE_STORAGE_ZONE tool input.
 */
type BUNNYCDN_UPDATE_STORAGE_ZONE_INPUT = {
  /**
   * Custom404 File Path
   * @description The path to the custom file that will be returned in case of 404.
   * @default null
   */
  Custom404FilePath: string | null;
  /**
   * Origin Url
   * @description The origin URL of the storage zone.
   * @default null
   */
  OriginUrl: string | null;
  /**
   * Replication Zones
   * @description List of replication zones enabled for the storage zone.
   * @default null
   */
  ReplicationZones: string[] | null;
  /**
   * Rewrite404 To200
   * @description Rewrite 404 status code to 200 for URLs without extension.
   * @default null
   */
  Rewrite404To200: boolean | null;
  /**
   * Id
   * @description Unique identifier of the storage zone to update.
   */
  id?: number;
};

/**
 * Type of BUNNYCDN's BUNNYCDN_UPDATE_STORAGE_ZONE tool output.
 */
type BUNNYCDN_UPDATE_STORAGE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the result of the update operation.
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
 * Type map of all available tool input types for toolkit "BUNNYCDN".
 */
export type BUNNYCDN_TOOL_INPUTS = {
  ADD_STORAGE_ZONE: BUNNYCDN_ADD_STORAGE_ZONE_INPUT
  CREATE_DNS_RECORD: BUNNYCDN_CREATE_DNS_RECORD_INPUT
  CREATE_PULL_ZONE: BUNNYCDN_CREATE_PULL_ZONE_INPUT
  DELETE_DNS_RECORD: BUNNYCDN_DELETE_DNS_RECORD_INPUT
  DELETE_DNS_ZONE: BUNNYCDN_DELETE_DNS_ZONE_INPUT
  DELETE_PULL_ZONE: BUNNYCDN_DELETE_PULL_ZONE_INPUT
  DELETE_STORAGE_ZONE: BUNNYCDN_DELETE_STORAGE_ZONE_INPUT
  GET_DNS_ZONE_DETAILS: BUNNYCDN_GET_DNS_ZONE_DETAILS_INPUT
  GET_DNS_ZONE_LIST: BUNNYCDN_GET_DNS_ZONE_LIST_INPUT
  GET_PULL_ZONE: BUNNYCDN_GET_PULL_ZONE_INPUT
  GET_PULL_ZONE_LIST: BUNNYCDN_GET_PULL_ZONE_LIST_INPUT
  GET_STORAGE_ZONE_DETAILS: BUNNYCDN_GET_STORAGE_ZONE_DETAILS_INPUT
  GET_STORAGE_ZONE_LIST: BUNNYCDN_GET_STORAGE_ZONE_LIST_INPUT
  GET_STORAGE_ZONE_REGION: BUNNYCDN_GET_STORAGE_ZONE_REGION_INPUT
  LIST_DNS_RECORDS: BUNNYCDN_LIST_DNS_RECORDS_INPUT
  PURGE_PULL_ZONE: BUNNYCDN_PURGE_PULL_ZONE_INPUT
  PURGE_URL: BUNNYCDN_PURGE_URL_INPUT
  SET_STORAGE_ZONE_REGION: BUNNYCDN_SET_STORAGE_ZONE_REGION_INPUT
  UPDATE_PULL_ZONE: BUNNYCDN_UPDATE_PULL_ZONE_INPUT
  UPDATE_STORAGE_ZONE: BUNNYCDN_UPDATE_STORAGE_ZONE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BUNNYCDN".
 */
export type BUNNYCDN_TOOL_OUTPUTS = {
  ADD_STORAGE_ZONE: BUNNYCDN_ADD_STORAGE_ZONE_OUTPUT
  CREATE_DNS_RECORD: BUNNYCDN_CREATE_DNS_RECORD_OUTPUT
  CREATE_PULL_ZONE: BUNNYCDN_CREATE_PULL_ZONE_OUTPUT
  DELETE_DNS_RECORD: BUNNYCDN_DELETE_DNS_RECORD_OUTPUT
  DELETE_DNS_ZONE: BUNNYCDN_DELETE_DNS_ZONE_OUTPUT
  DELETE_PULL_ZONE: BUNNYCDN_DELETE_PULL_ZONE_OUTPUT
  DELETE_STORAGE_ZONE: BUNNYCDN_DELETE_STORAGE_ZONE_OUTPUT
  GET_DNS_ZONE_DETAILS: BUNNYCDN_GET_DNS_ZONE_DETAILS_OUTPUT
  GET_DNS_ZONE_LIST: BUNNYCDN_GET_DNS_ZONE_LIST_OUTPUT
  GET_PULL_ZONE: BUNNYCDN_GET_PULL_ZONE_OUTPUT
  GET_PULL_ZONE_LIST: BUNNYCDN_GET_PULL_ZONE_LIST_OUTPUT
  GET_STORAGE_ZONE_DETAILS: BUNNYCDN_GET_STORAGE_ZONE_DETAILS_OUTPUT
  GET_STORAGE_ZONE_LIST: BUNNYCDN_GET_STORAGE_ZONE_LIST_OUTPUT
  GET_STORAGE_ZONE_REGION: BUNNYCDN_GET_STORAGE_ZONE_REGION_OUTPUT
  LIST_DNS_RECORDS: BUNNYCDN_LIST_DNS_RECORDS_OUTPUT
  PURGE_PULL_ZONE: BUNNYCDN_PURGE_PULL_ZONE_OUTPUT
  PURGE_URL: BUNNYCDN_PURGE_URL_OUTPUT
  SET_STORAGE_ZONE_REGION: BUNNYCDN_SET_STORAGE_ZONE_REGION_OUTPUT
  UPDATE_PULL_ZONE: BUNNYCDN_UPDATE_PULL_ZONE_OUTPUT
  UPDATE_STORAGE_ZONE: BUNNYCDN_UPDATE_STORAGE_ZONE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BUNNYCDN toolkit.
 */
export const BUNNYCDN = {
  slug: "bunnycdn",
  tools: {
    /**
     * Tool to add a new storage zone. use when you need dedicated file storage in a specific region.
     */
    ADD_STORAGE_ZONE: "BUNNYCDN_ADD_STORAGE_ZONE",
    /**
     * Tool to create a new dns record in a specific dns zone. use after confirming the dns zone id is active.
     */
    CREATE_DNS_RECORD: "BUNNYCDN_CREATE_DNS_RECORD",
    /**
     * Tool to create a new pull zone. use after gathering origin details.
     */
    CREATE_PULL_ZONE: "BUNNYCDN_CREATE_PULL_ZONE",
    /**
     * Tool to delete a specific dns record by its id. use after confirming the dns zone id and record id.
     */
    DELETE_DNS_RECORD: "BUNNYCDN_DELETE_DNS_RECORD",
    /**
     * Tool to delete a specific dns zone by its id. use when you need to permanently remove an existing dns zone after verifying the zone id.
     */
    DELETE_DNS_ZONE: "BUNNYCDN_DELETE_DNS_ZONE",
    /**
     * Tool to delete a specific pull zone by its id. use when you need to remove a pull zone after confirming its id.
     */
    DELETE_PULL_ZONE: "BUNNYCDN_DELETE_PULL_ZONE",
    /**
     * Tool to delete a storage zone. use when you need to remove a storage zone after confirming its id.
     */
    DELETE_STORAGE_ZONE: "BUNNYCDN_DELETE_STORAGE_ZONE",
    /**
     * Tool to retrieve details of a specific dns zone by its id. use when you need to verify dns zone configuration after creation or update.
     */
    GET_DNS_ZONE_DETAILS: "BUNNYCDN_GET_DNS_ZONE_DETAILS",
    /**
     * Tool to list all dns zones in your bunny cdn account. use when you need an overview of all configured dns zones.
     */
    GET_DNS_ZONE_LIST: "BUNNYCDN_GET_DNS_ZONE_LIST",
    /**
     * Tool to retrieve details of a specific pull zone. use when you need full configuration and usage stats after confirming the pull zone id.
     */
    GET_PULL_ZONE: "BUNNYCDN_GET_PULL_ZONE",
    /**
     * Tool to fetch the list of pull zones. use when you need an overview of all pull zones in your account.
     */
    GET_PULL_ZONE_LIST: "BUNNYCDN_GET_PULL_ZONE_LIST",
    /**
     * Tool to retrieve the full details of a storage zone. use when you need configuration and usage metrics for a specific storage zone.
     */
    GET_STORAGE_ZONE_DETAILS: "BUNNYCDN_GET_STORAGE_ZONE_DETAILS",
    /**
     * Tool to list all storage zones in your bunny cdn account. use when you need an overview of all configured storage zones.
     */
    GET_STORAGE_ZONE_LIST: "BUNNYCDN_GET_STORAGE_ZONE_LIST",
    /**
     * Tool to retrieve the region code of a storage zone. use when you have a storage zone id and need only its geographic region.
     */
    GET_STORAGE_ZONE_REGION: "BUNNYCDN_GET_STORAGE_ZONE_REGION",
    /**
     * Tool to list all dns records in a specific dns zone. use when you need to audit or review the dns configuration of a zone.
     */
    LIST_DNS_RECORDS: "BUNNYCDN_LIST_DNS_RECORDS",
    /**
     * Tool to purge the entire cache of a pull zone. use after updating origin or critical content to ensure no stale assets are served.
     */
    PURGE_PULL_ZONE: "BUNNYCDN_PURGE_PULL_ZONE",
    /**
     * Tool to purge a specific url from the bunnycdn cache. use when you need to invalidate a resource immediately after updating it.
     */
    PURGE_URL: "BUNNYCDN_PURGE_URL",
    /**
     * Tool to update replication regions of a storage zone. use when you need to adjust geo-replication settings after reviewing current configurations.
     */
    SET_STORAGE_ZONE_REGION: "BUNNYCDN_SET_STORAGE_ZONE_REGION",
    /**
     * Tool to update settings for a specific pull zone. use when you need to modify existing pull zone settings after reviewing current configuration.
     */
    UPDATE_PULL_ZONE: "BUNNYCDN_UPDATE_PULL_ZONE",
    /**
     * Tool to update settings for a specific storage zone. use after reviewing current storage zone settings to apply changes.
     */
    UPDATE_STORAGE_ZONE: "BUNNYCDN_UPDATE_STORAGE_ZONE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BUNNYCDN".
 */
export type BUNNYCDN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BUNNYCDN".
 */
export type BUNNYCDN_TRIGGER_EVENTS = {}
