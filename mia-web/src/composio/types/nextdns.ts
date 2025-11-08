// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEXTDNS's NEXTDNS_ADD_BLOCKED_TLD tool input.
 */
type NEXTDNS_ADD_BLOCKED_TLD_INPUT = {
  /**
   * Config
   * @description ID of the NextDNS profile to update.
   */
  config?: string;
  /**
   * Tld
   * @description The top-level domain to block, including leading dot.
   */
  tld?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_ADD_BLOCKED_TLD tool output.
 */
type NEXTDNS_ADD_BLOCKED_TLD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from NextDNS API.
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
 * Type of NEXTDNS's NEXTDNS_ADD_DENYLIST_DOMAIN tool input.
 */
type NEXTDNS_ADD_DENYLIST_DOMAIN_INPUT = {
  /**
   * Active
   * @description Whether the denylist entry is active. Defaults to true.
   * @default true
   */
  active: boolean;
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Domain
   * @description The domain to add to the denylist.
   */
  domain?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_ADD_DENYLIST_DOMAIN tool output.
 */
type NEXTDNS_ADD_DENYLIST_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the denylist entry is active.
       */
      active: boolean;
      /**
       * Id
       * @description Domain that was added to the denylist.
       */
      id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_BLOCK_PAGE tool input.
 */
type NEXTDNS_BLOCK_PAGE_INPUT = {
  /**
   * Config Id
   * @description NextDNS configuration ID
   */
  config_id?: string;
  /**
   * Enabled
   * @description Whether to enable (True) or disable (False) the block page
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_BLOCK_PAGE tool output.
 */
type NEXTDNS_BLOCK_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success
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
 * Type of NEXTDNS's NEXTDNS_CLEAR_LOGS tool input.
 */
type NEXTDNS_CLEAR_LOGS_INPUT = {
  /**
   * Profile Id
   * @description ID of the profile to clear logs for (e.g., 'abc123').
   */
  profile_id?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_CLEAR_LOGS tool output.
 */
type NEXTDNS_CLEAR_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from NextDNS API.
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
 * Type of NEXTDNS's NEXTDNS_CREATE_PROFILE tool input.
 */
type NEXTDNS_CREATE_PROFILE_INPUT = {
  /**
   * Allowlist
   * @description List of domains to allowlist.
   * @default null
   */
  allowlist: {
      /**
       * Active
       * @description Whether the allowlist entry is active.
       */
      active: boolean;
      /**
       * Id
       * @description Domain to allowlist, e.g., 'goodwebsite.com'.
       */
      id: string;
  }[] | null;
  /**
   * Denylist
   * @description List of domains to denylist.
   * @default null
   */
  denylist: {
      /**
       * Active
       * @description Whether the denylist entry is active.
       */
      active: boolean;
      /**
       * Id
       * @description Domain to denylist, e.g., 'badwebsite.com'.
       */
      id: string;
  }[] | null;
  /**
   * Name
   * @description Name of the new profile.
   */
  name?: string;
  /**
   * ParentalControlSettings
   * @description Parental control settings for the profile.
   * @default null
   */
  parentalControl: {
      /**
       * Block Bypass
       * @description Block methods used to bypass parental controls.
       * @default null
       */
      blockBypass: boolean | null;
      /**
       * Categories
       * @description List of categories to control.
       * @default null
       */
      categories: {
          /**
           * Active
           * @description Whether the category blocking is active.
           */
          active: boolean;
          /**
           * Id
           * @description ID of the category, e.g., 'porn'.
           */
          id: string;
      }[] | null;
      /**
       * Safe Search
       * @description Enable safe search.
       * @default null
       */
      safeSearch: boolean | null;
      /**
       * Services
       * @description List of services to control.
       * @default null
       */
      services: {
          /**
           * Active
           * @description Whether the service blocking is active.
           */
          active: boolean;
          /**
           * Id
           * @description ID of the service, e.g., 'tiktok'.
           */
          id: string;
      }[] | null;
      /**
       * Youtube Restricted Mode
       * @description Enable YouTube restricted mode.
       * @default null
       */
      youtubeRestrictedMode: boolean | null;
  } | null;
  /**
   * PrivacySettings
   * @description Privacy settings for the profile.
   * @default null
   */
  privacy: {
      /**
       * Allow Affiliate
       * @description Allow affiliate and tracking links.
       * @default null
       */
      allowAffiliate: boolean | null;
      /**
       * Blocklists
       * @description List of blocklists to enable.
       * @default null
       */
      blocklists: {
          /**
           * Id
           * @description ID of the blocklist, e.g., 'nextdns-recommended'.
           */
          id: string;
      }[] | null;
      /**
       * Disguised Trackers
       * @description Enable disguised trackers protection.
       * @default null
       */
      disguisedTrackers: boolean | null;
      /**
       * Natives
       * @description List of native tracking services to block.
       * @default null
       */
      natives: {
          /**
           * Id
           * @description ID of the native tracking service to block, e.g., 'huawei'.
           */
          id: string;
      }[] | null;
  } | null;
  /**
   * SecuritySettings
   * @description Security settings for the profile.
   * @default null
   */
  security: {
      /**
       * Ai Threat Detection
       * @description Enable AI threat detection.
       * @default null
       */
      aiThreatDetection: boolean | null;
      /**
       * Cryptojacking
       * @description Enable cryptojacking protection.
       * @default null
       */
      cryptojacking: boolean | null;
      /**
       * Csam
       * @description Enable CSAM (Child Sexual Abuse Material) protection.
       * @default null
       */
      csam: boolean | null;
      /**
       * Ddns
       * @description Enable DDNS (Dynamic DNS) protection.
       * @default null
       */
      ddns: boolean | null;
      /**
       * Dga
       * @description Enable DGA (Domain Generation Algorithm) protection.
       * @default null
       */
      dga: boolean | null;
      /**
       * Dns Rebinding
       * @description Enable DNS rebinding protection.
       * @default null
       */
      dnsRebinding: boolean | null;
      /**
       * Google Safe Browsing
       * @description Enable Google Safe Browsing.
       * @default null
       */
      googleSafeBrowsing: boolean | null;
      /**
       * Idn Homographs
       * @description Enable IDN homograph attacks protection.
       * @default null
       */
      idnHomographs: boolean | null;
      /**
       * Nrd
       * @description Enable NRD (Newly Registered Domains) protection.
       * @default null
       */
      nrd: boolean | null;
      /**
       * Parking
       * @description Enable parking domain protection.
       * @default null
       */
      parking: boolean | null;
      /**
       * Threat Intelligence Feeds
       * @description Enable threat intelligence feeds.
       * @default null
       */
      threatIntelligenceFeeds: boolean | null;
      /**
       * Tlds
       * @description List of TLDs to block.
       * @default null
       */
      tlds: {
          /**
           * Id
           * @description TLD to be blocked, e.g., 'ru', 'cn'.
           */
          id: string;
      }[] | null;
      /**
       * Typosquatting
       * @description Enable typosquatting protection.
       * @default null
       */
      typosquatting: boolean | null;
  } | null;
  /**
   * ProfileSettings
   * @description General settings for the profile.
   * @default null
   */
  settings: {
      /**
       * BlockPageSettings
       * @description Block page settings.
       * @default null
       */
      blockPage: {
          /**
           * Enabled
           * @description Enable the block page.
           * @default null
           */
          enabled: boolean | null;
      } | null;
      /**
       * LogSettings
       * @description Logging settings.
       * @default null
       */
      logs: {
          /**
           * LogDropSettings
           * @description Settings for dropping log data.
           * @default null
           */
          drop: {
              /**
               * Domain
               * @description Drop domains from logs.
               * @default null
               */
              domain: boolean | null;
              /**
               * Ip
               * @description Drop IP addresses from logs.
               * @default null
               */
              ip: boolean | null;
          } | null;
          /**
           * Enabled
           * @description Enable logging.
           * @default null
           */
          enabled: boolean | null;
          /**
           * Location
           * @description Log storage location (e.g., 'eu', 'us').
           * @default null
           */
          location: string | null;
          /**
           * Retention
           * @description Log retention period in seconds.
           * @default null
           */
          retention: number | null;
      } | null;
      /**
       * PerformanceSettings
       * @description Performance settings.
       * @default null
       */
      performance: {
          /**
           * Cache Boost
           * @description Enable cache boost.
           * @default null
           */
          cacheBoost: boolean | null;
          /**
           * Cname Flattening
           * @description Enable CNAME flattening.
           * @default null
           */
          cnameFlattening: boolean | null;
          /**
           * Ecs
           * @description Enable EDNS Client Subnet.
           * @default null
           */
          ecs: boolean | null;
      } | null;
      /**
       * Web3
       * @description Enable Web3 (blockchain domains) support.
       * @default null
       */
      web3: boolean | null;
  } | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_CREATE_PROFILE tool output.
 */
type NEXTDNS_CREATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response data containing the profile ID.
   */
  data?: {
      /**
       * Id
       * @description The ID of the newly created profile.
       */
      id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_DELETE_CONFIG tool input.
 */
type NEXTDNS_DELETE_CONFIG_INPUT = {
  /**
   * Profile
   * @description The ID of the NextDNS configuration profile to delete
   */
  profile?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_DELETE_CONFIG tool output.
 */
type NEXTDNS_DELETE_CONFIG_OUTPUT = {
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
 * Type of NEXTDNS's NEXTDNS_DOWNLOAD_LOGS tool input.
 */
type NEXTDNS_DOWNLOAD_LOGS_INPUT = {
  /**
   * Profile Id
   * @description ID of the NextDNS profile to download logs for (e.g., 'abc123').
   */
  profile_id?: string;
  /**
   * Redirect
   * @description Whether to follow redirect. If False (redirect=0), the API returns a JSON with the 'url' field.
   * @default true
   */
  redirect: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_DOWNLOAD_LOGS tool output.
 */
type NEXTDNS_DOWNLOAD_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Public URL to the CSV file containing the DNS logs.
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_DEVICES tool input.
 */
type NEXTDNS_GET_ANALYTICS_DEVICES_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for next page
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter analytics for a specific device ID. Use '__UNIDENTIFIED__' to target unidentified devices.
   * @default null
   */
  device: string | null;
  /**
   * From Date
   * @description Inclusive start date filter. Supports ISO 8601, Unix timestamps (s/ms), relative (e.g., '-7d'), or common date formats.
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Number of results per page (1-500).
   * @default 10
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
  /**
   * To Date
   * @description Exclusive end date filter. Supports same formats as from_date.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_DEVICES tool output.
 */
type NEXTDNS_GET_ANALYTICS_DEVICES_OUTPUT = {
  /**
   * Data
   * @description List of device analytics items
   */
  data?: {
      /**
       * Id
       * @description Device identifier
       */
      id: string;
      /**
       * Local Ip
       * @description Local IP address of the device, if known
       * @default null
       */
      localIp: string | null;
      /**
       * Model
       * @description Device model, if available
       * @default null
       */
      model: string | null;
      /**
       * Name
       * @description Device name, if available
       * @default null
       */
      name: string | null;
      /**
       * Queries
       * @description Number of queries made by this device
       */
      queries: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * AnalyticsMeta
   * @description Pagination and other metadata
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page of results
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_DOMAINS tool input.
 */
type NEXTDNS_GET_ANALYTICS_DOMAINS_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for next page
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter analytics for a specific device ID. Use '__UNIDENTIFIED__' for unidentified devices.
   * @default null
   */
  device: string | null;
  /**
   * From Date
   * @description Filter out entities with date older than (inclusive). Supports ISO8601, Unix timestamps, and relative dates (e.g. '-7d').
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Limit number of items to return (1-500)
   * @default 10
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
  /**
   * Root
   * @description Return root domains instead of full hostnames (e.g. 'icloud.com' instead of 'gateway.icloud.com').
   * @default false
   */
  root: boolean;
  /**
   * Status
   * @description Only include domains with this status
   * @default null
   * @enum {string|null}
   */
  status: "default" | "blocked" | "allowed" | null;
  /**
   * To Date
   * @description Filter out entities with date newer or equal (exclusive). Same formats as from_date.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_DOMAINS tool output.
 */
type NEXTDNS_GET_ANALYTICS_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description List of domain analytics items
   */
  data?: {
      /**
       * Domain
       * @description Queried domain
       */
      domain: string;
      /**
       * Queries
       * @description Number of queries for this domain
       */
      queries: number;
      /**
       * Root
       * @description Root domain if available
       * @default null
       */
      root: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * AnalyticsMeta
   * @description Pagination and other metadata
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_IPS tool input.
 */
type NEXTDNS_GET_ANALYTICS_IPS_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter analytics for a specific device ID. Use '__UNIDENTIFIED__' for unidentified devices.
   * @default null
   */
  device: string | null;
  /**
   * From
   * @description Inclusive start date filter. Supports ISO8601, Unix timestamps (s/ms), relative (e.g. '-7d') or common date formats.
   * @default null
   */
  from: string | null;
  /**
   * Limit
   * @description Limit number of items to return (1-500).
   * @default 10
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
  /**
   * To
   * @description Exclusive end date filter. Same formats as `from`.
   * @default null
   */
  to: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_IPS tool output.
 */
type NEXTDNS_GET_ANALYTICS_IPS_OUTPUT = {
  /**
   * Data
   * @description List of analytics entries aggregated by IP
   */
  data?: {
      /**
       * Geo
       * @description Geolocation metadata for the IP
       */
      geo: {
          /**
           * City
           * @description City of the IP location
           */
          city: string;
          /**
           * Country
           * @description Country name of the IP location
           */
          country: string;
          /**
           * Country Code
           * @description Country code of the IP location
           */
          countryCode: string;
          /**
           * Latitude
           * @description Latitude of the IP location
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude of the IP location
           */
          longitude: number;
      };
      /**
       * Ip
       * @description Client IP address
       */
      ip: string;
      /**
       * Network
       * @description Network metadata for the IP
       */
      network: {
          /**
           * Asn
           * @description Autonomous System Number of the IP
           */
          asn: number;
          /**
           * Cellular
           * @description Whether the IP is on a cellular network
           */
          cellular: boolean;
          /**
           * Isp
           * @description Internet service provider name
           */
          isp: string;
          /**
           * Vpn
           * @description Whether the IP is identified as a VPN
           */
          vpn: boolean;
      };
      /**
       * Queries
       * @description Number of queries from this IP
       */
      queries: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination and other metadata
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata.
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page of results.
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_IP_VERSIONS tool input.
 */
type NEXTDNS_GET_ANALYTICS_IP_VERSIONS_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for next page
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter analytics for a specific device ID. Use '__UNIDENTIFIED__' for unidentified devices.
   * @default null
   */
  device: string | null;
  /**
   * From
   * @description Filter out entities with date older than (inclusive). Supports ISO8601, Unix timestamps (s/ms), relative dates (e.g. '-7d'), or common date formats.
   * @default null
   */
  from: string | null;
  /**
   * Limit
   * @description Limit number of items to return (1-500)
   * @default 10
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
  /**
   * To
   * @description Filter out entities with date newer or equal (exclusive). Same formats as from_date.
   * @default null
   */
  to: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_IP_VERSIONS tool output.
 */
type NEXTDNS_GET_ANALYTICS_IP_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description List of IP version analytics items
   */
  data?: {
      /**
       * Queries
       * @description Number of queries for this IP version
       */
      queries: number;
      /**
       * Version
       * @description IP version (4 or 6)
       */
      version: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * AnalyticsMeta
   * @description Pagination and other metadata
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page of results
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_QUERY_TYPES tool input.
 */
type NEXTDNS_GET_ANALYTICS_QUERY_TYPES_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter by device ID; use '__UNIDENTIFIED__' for unidentified devices.
   * @default null
   */
  device: string | null;
  /**
   * From Date
   * @description Inclusive start date filter (inclusive). Supports ISO 8601, Unix timestamps (s/ms), relative dates (e.g., '-7d'), or common date formats.
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Number of results per page (1-500).
   * @default 10
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
  /**
   * To Date
   * @description Exclusive end date filter (exclusive). Same formats as from_date.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_QUERY_TYPES tool output.
 */
type NEXTDNS_GET_ANALYTICS_QUERY_TYPES_OUTPUT = {
  /**
   * Data
   * @description List of query types and counts
   */
  data?: {
      /**
       * Name
       * @description DNS record type name
       */
      name: string;
      /**
       * Queries
       * @description Number of queries for this type
       */
      queries: number;
      /**
       * Type
       * @description DNS query type code (e.g., 1 for A, 28 for AAAA)
       */
      type: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination info if more results are available
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for next page of results
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_REASONS tool input.
 */
type NEXTDNS_GET_ANALYTICS_REASONS_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter analytics for a specific device ID; use '__UNIDENTIFIED__' for unidentified.
   * @default null
   */
  device: string | null;
  /**
   * From Date
   * @description Inclusive start date filter. Supports ISO8601, Unix timestamps, and relative formats (e.g., '-7d').
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Number of results per page (1-500).
   * @default null
   */
  limit: number | null;
  /**
   * Profile
   * @description NextDNS profile identifier
   */
  profile?: string;
  /**
   * To Date
   * @description Exclusive end date filter. Same formats as from_date.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_REASONS tool output.
 */
type NEXTDNS_GET_ANALYTICS_REASONS_OUTPUT = {
  /**
   * Data
   * @description List of reason categories and query counts
   */
  data?: {
      /**
       * Queries
       * @description Number of queries for this reason
       */
      queries: number;
      /**
       * Reason
       * @description Classification reason for the query
       */
      reason: string;
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
   * @default null
   */
  pagination: {
      /**
       * Cursor
       * @description Cursor for the next page of results
       * @default null
       */
      cursor: string | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_STATUS tool input.
 */
type NEXTDNS_GET_ANALYTICS_STATUS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter results by device ID. Use '__UNIDENTIFIED__' for unidentified devices.
   * @default null
   */
  device: string | null;
  /**
   * From
   * @description Inclusive start date filter (inclusive). Supports ISO 8601, Unix timestamps (s/ms), relative (e.g., '-7d'), or common date formats.
   * @default null
   */
  from: string | null;
  /**
   * Limit
   * @description Number of results per page (1-500).
   * @default 10
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
  /**
   * To
   * @description Exclusive end date filter (exclusive). Same formats as `from`.
   * @default null
   */
  to: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_ANALYTICS_STATUS tool output.
 */
type NEXTDNS_GET_ANALYTICS_STATUS_OUTPUT = {
  /**
   * Data
   * @description List of status categories and query counts
   */
  data?: {
      /**
       * Queries
       * @description Number of queries for this status
       */
      queries: number;
      /**
       * Status
       * @description Query status (default, blocked, allowed)
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination info if more results are available
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page of results
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_LOGS tool input.
 */
type NEXTDNS_GET_LOGS_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor from previous response.
   * @default null
   */
  cursor: string | null;
  /**
   * Device
   * @description Filter logs for a specific device ID.
   * @default null
   */
  device: string | null;
  /**
   * From
   * @description Filter out logs older than or equal to this date (inclusive). Accepts ISO8601, unix timestamps, relative (e.g. '-1d'), or common date formats.
   * @default null
   */
  from: string | null;
  /**
   * Limit
   * @description Maximum number of logs to return (10–1000).
   * @default 100
   */
  limit: number;
  /**
   * Profile
   * @description ID of the NextDNS profile to retrieve logs for.
   */
  profile?: string;
  /**
   * Raw
   * @description Return raw DNS queries instead of filtered navigational ones.
   * @default false
   */
  raw: boolean;
  /**
   * Search
   * @description Search logs by domain or substring. E.g., 'facebook' matches any domain containing that substring.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Order of returned logs: 'asc' for oldest→newest or 'desc' for newest→oldest.
   * @default desc
   * @enum {string}
   */
  sort: "asc" | "desc";
  /**
   * Status
   * @description Filter logs by status.
   * @default null
   * @enum {string|null}
   */
  status: "default" | "error" | "blocked" | "allowed" | null;
  /**
   * To
   * @description Filter out logs newer or equal to this date (exclusive). Same formats as `from`.
   * @default null
   */
  to: string | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_LOGS tool output.
 */
type NEXTDNS_GET_LOGS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Client
       * @default null
       */
      client: string | null;
      /**
       * Client Ip
       * @default null
       */
      clientIp: string | null;
      /**
       * Device
       * @default null
       */
      device: {
          /** Id */
          id: string;
          /**
           * Model
           * @default null
           */
          model: string | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
      } | null;
      /** Domain */
      domain: string;
      /** Encrypted */
      encrypted: boolean;
      /** Protocol */
      protocol: string;
      /** Reasons */
      reasons: {
          /** Id */
          id: string;
          /** Name */
          name: string;
      }[];
      /**
       * Root
       * @default null
       */
      root: string | null;
      /**
       * Status
       * @enum {string}
       */
      status: "default" | "error" | "blocked" | "allowed";
      /** Timestamp */
      timestamp: string;
      /**
       * Tracker
       * @default null
       */
      tracker: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * LogsMeta
   * @description Pagination and streaming metadata.
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination metadata.
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page of logs.
           * @default null
           */
          cursor: string | null;
      } | null;
      /**
       * StreamMeta
       * @description Streaming metadata to resume SSE streams.
       * @default null
       */
      stream: {
          /**
           * Id
           * @description Stream resume ID for real-time logs.
           */
          id: string;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_PROFILE tool input.
 */
type NEXTDNS_GET_PROFILE_INPUT = {
  /**
   * Profile Id
   * @description The ID of the NextDNS profile to retrieve.
   */
  profileId?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_PROFILE tool output.
 */
type NEXTDNS_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The details of the NextDNS profile.
   */
  data?: {
      /**
       * Allowlist
       * @description List of allowlisted items.
       * @default null
       */
      allowlist: {
          /**
           * Active
           * @description Whether the item is active.
           */
          active: boolean;
          /**
           * Id
           * @description The ID of the item (e.g., domain).
           */
          id: string;
      }[] | null;
      /**
       * Denylist
       * @description List of denylisted items.
       * @default null
       */
      denylist: {
          /**
           * Active
           * @description Whether the item is active.
           */
          active: boolean;
          /**
           * Id
           * @description The ID of the item (e.g., domain).
           */
          id: string;
      }[] | null;
      /**
       * Id
       * @description Profile ID.
       */
      id: string;
      /**
       * Name
       * @description Name of the profile.
       * @default null
       */
      name: string | null;
      /**
       * Parental Control
       * @description Parental control settings.
       * @default null
       */
      parentalControl: {
          [key: string]: unknown;
      } | null;
      /**
       * Privacy
       * @description Privacy settings.
       * @default null
       */
      privacy: {
          [key: string]: unknown;
      } | null;
      /**
       * Security
       * @description Security settings.
       * @default null
       */
      security: {
          [key: string]: unknown;
      } | null;
      /**
       * ProfileSettings
       * @description General settings for the profile.
       * @default null
       */
      settings: {
          /**
           * Block Page
           * @description Block page settings.
           * @default null
           */
          blockPage: {
              [key: string]: unknown;
          } | null;
          /**
           * Logs
           * @description Logging settings.
           * @default null
           */
          logs: {
              [key: string]: unknown;
          } | null;
          /**
           * Performance
           * @description Performance settings.
           * @default null
           */
          performance: {
              [key: string]: unknown;
          } | null;
          /**
           * Web3
           * @description Web3 setting.
           * @default null
           */
          web3: boolean | null;
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
 * Type of NEXTDNS's NEXTDNS_GET_SETUP_INFO tool input.
 */
type NEXTDNS_GET_SETUP_INFO_INPUT = {
  /**
   * Profile
   * @description The unique identifier of the NextDNS profile to retrieve settings for.
   */
  profile?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_GET_SETUP_INFO tool output.
 */
type NEXTDNS_GET_SETUP_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allowlist
       * @description List of domains explicitly allowed.
       */
      allowlist: string[];
      /**
       * Denylist
       * @description List of domains explicitly denied.
       */
      denylist: string[];
      /**
       * Name
       * @description Name of the profile.
       */
      name: string;
      /**
       * Parental Control
       * @description Parental control settings, including service and category restrictions.
       */
      parentalControl: {
          [key: string]: unknown;
      };
      /**
       * Privacy
       * @description Privacy settings, such as blocklists and tracker configurations.
       */
      privacy: {
          [key: string]: unknown;
      };
      /**
       * Security
       * @description Security settings, including threat protection toggles.
       */
      security: {
          [key: string]: unknown;
      };
      /**
       * Settings
       * @description General settings, including logs, block page, performance, and Web3 configurations.
       */
      settings: {
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
 * Type of NEXTDNS's NEXTDNS_LIST_CONFIGURATIONS tool input.
 */
type NEXTDNS_LIST_CONFIGURATIONS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination to retrieve the next set of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Limits the number of results per page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_LIST_CONFIGURATIONS tool output.
 */
type NEXTDNS_LIST_CONFIGURATIONS_OUTPUT = {
  /**
   * Data
   * @description List of NextDNS profiles.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the NextDNS profile.
       */
      id: string;
      /**
       * Name
       * @description Name of the NextDNS profile.
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata including pagination.
   * @default null
   */
  meta: {
      /**
       * Pagination
       * @description Pagination information.
       * @default null
       */
      pagination: {
          /**
           * Cursor
           * @description Cursor for the next page; null if no more pages.
           * @default null
           */
          cursor: string | null;
      } | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_LIST_DENYLIST_DOMAINS tool input.
 */
type NEXTDNS_LIST_DENYLIST_DOMAINS_INPUT = {
  /**
   * Profile
   * @description Identifier of the NextDNS profile whose denylist to retrieve.
   */
  profile?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_LIST_DENYLIST_DOMAINS tool output.
 */
type NEXTDNS_LIST_DENYLIST_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description List of domains in the denylist for the profile.
   */
  data?: {
      /**
       * Active
       * @description Whether the domain is actively blocked.
       */
      active: boolean;
      /**
       * Domain
       * @description The domain name in the denylist.
       */
      domain: string;
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
 * Type of NEXTDNS's NEXTDNS_LIST_SECURITY_SETTINGS tool input.
 */
type NEXTDNS_LIST_SECURITY_SETTINGS_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_LIST_SECURITY_SETTINGS tool output.
 */
type NEXTDNS_LIST_SECURITY_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Threat Detection
       * @description AI Threat Detection enabled
       */
      aiThreatDetection: boolean;
      /**
       * Blocked Tlds
       * @description List of currently blocked top-level domains (TLDs)
       */
      blocked_tlds: string[];
      /**
       * Cryptojacking
       * @description Cryptojacking protection enabled
       */
      cryptojacking: boolean;
      /**
       * Csam
       * @description Child sexual abuse material domains blocking enabled
       */
      csam: boolean;
      /**
       * Dga
       * @description DGA (algorithm-generated domains) protection enabled
       */
      dga: boolean;
      /**
       * Dns Rebinding
       * @description DNS Rebinding protection enabled
       */
      dnsRebinding: boolean;
      /**
       * Google Safe Browsing
       * @description Google Safe Browsing malware and phishing protection enabled
       */
      googleSafeBrowsing: boolean;
      /**
       * Homograph
       * @description Homograph (IDN impersonation) protection enabled
       */
      homograph: boolean;
      /**
       * Nrd
       * @description Newly registered domains (<30 days) blocking enabled
       */
      nrd: boolean;
      /**
       * Parked
       * @description Parked domains blocking enabled
       */
      parked: boolean;
      /**
       * Threat Intelligence Feeds
       * @description Real-time Threat Intelligence Feeds enabled
       */
      threatIntelligenceFeeds: boolean;
      /**
       * Typosquatting
       * @description Typosquatting protection enabled
       */
      typosquatting: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_LIST_SETTINGS tool input.
 */
type NEXTDNS_LIST_SETTINGS_INPUT = {
  /**
   * Profile Id
   * @description Unique identifier of the NextDNS profile to retrieve settings for.
   */
  profile_id?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_LIST_SETTINGS tool output.
 */
type NEXTDNS_LIST_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Block Page
       * @description Whether the block page is enabled.
       */
      blockPage: boolean;
      /**
       * Cache Boost
       * @description Whether cache boost is enabled.
       */
      cacheBoost: boolean;
      /**
       * Cname Flattening
       * @description Whether CNAME flattening is enabled.
       */
      cnameFlattening: boolean;
      /**
       * Ecs
       * @description Whether EDNS Client Subnet (ECS) is enabled.
       */
      ecs: boolean;
      /**
       * Handshake
       * @description Whether TCP handshake QoS is enabled.
       */
      handshake: boolean;
      /**
       * Logging
       * @description Whether DNS logging is enabled.
       */
      logging: boolean;
      /**
       * Logging Disable Client
       * @description Whether client identifiers are excluded from logging.
       */
      logging_disable_client: boolean;
      /**
       * Logging Disable Query
       * @description Whether queries are excluded from logging.
       */
      logging_disable_query: boolean;
      /**
       * Logging Location
       * @description Two-letter code for log storage location.
       */
      logging_location: string;
      /**
       * Logging Retention
       * @description Log retention period in days.
       */
      logging_retention: number;
      /**
       * Name
       * @description Name of the NextDNS configuration profile.
       */
      name: string;
      /**
       * Rewrites
       * @description List of DNS rewrite entries for this profile.
       */
      rewrites: {
          /**
           * Answer
           * @description Answer returned for the rewritten domain.
           */
          answer: string;
          /**
           * Id
           * @description Unique ID of the DNS rewrite entry.
           */
          id: number;
          /**
           * Name
           * @description Domain name for the DNS rewrite.
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
 * Type of NEXTDNS's NEXTDNS_LOGIN tool input.
 */
type NEXTDNS_LOGIN_INPUT = {
  /**
   * Api Key
   * @description NextDNS API key for authentication.
   */
  api_key?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_LOGIN tool output.
 */
type NEXTDNS_LOGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cookies
       * @description Session cookies to include in subsequent NextDNS API requests.
       * @default {}
       */
      cookies: {
          [key: string]: string;
      };
      /**
       * Headers
       * @description Headers to include in subsequent NextDNS API requests.
       */
      headers: {
          [key: string]: string;
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
 * Type of NEXTDNS's NEXTDNS_LOG_CLIENT_IPS tool input.
 */
type NEXTDNS_LOG_CLIENT_IPS_INPUT = {
  /**
   * Config Id
   * @description NextDNS configuration (profile) ID.
   */
  config_id?: string;
  /**
   * Enable
   * @description True to enable logging of client IPs, False to disable.
   */
  enable?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_LOG_CLIENT_IPS tool output.
 */
type NEXTDNS_LOG_CLIENT_IPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success.
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
 * Type of NEXTDNS's NEXTDNS_LOG_DOMAINS tool input.
 */
type NEXTDNS_LOG_DOMAINS_INPUT = {
  /**
   * Enabled
   * @description Whether to enable (True) or disable (False) logging of domains in the profile’s DNS logs.
   */
  enabled?: boolean;
  /**
   * Profile Id
   * @description ID of the NextDNS profile to update.
   */
  profile_id?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_LOG_DOMAINS tool output.
 */
type NEXTDNS_LOG_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drop
       * @description Drop settings for logs.
       */
      drop: {
          /**
           * Domain
           * @description Whether domain names are dropped (not logged).
           */
          domain: boolean;
          /**
           * Ip
           * @description Whether IP addresses are dropped (not logged).
           */
          ip: boolean;
      };
      /**
       * Enabled
       * @description Whether DNS query logging is enabled.
       */
      enabled: boolean;
      /**
       * Location
       * @description Location code of log storage.
       */
      location: string;
      /**
       * Retention
       * @description Retention period for DNS logs in seconds.
       */
      retention: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_MONTHLY_QUERIES tool input.
 */
type NEXTDNS_MONTHLY_QUERIES_INPUT = {
  /**
   * Profile
   * @description ID of the NextDNS profile to query
   */
  profile?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_MONTHLY_QUERIES tool output.
 */
type NEXTDNS_MONTHLY_QUERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Monthly Queries
       * @description Total number of queries made in the current month
       */
      monthlyQueries: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_REMOVE_BLOCKED_TLD tool input.
 */
type NEXTDNS_REMOVE_BLOCKED_TLD_INPUT = {
  /**
   * Config
   * @description ID of the NextDNS profile to update.
   */
  config?: string;
  /**
   * Tld
   * @description The top-level domain to unblock, including leading dot.
   */
  tld?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_REMOVE_BLOCKED_TLD tool output.
 */
type NEXTDNS_REMOVE_BLOCKED_TLD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from NextDNS API.
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
 * Type of NEXTDNS's NEXTDNS_REMOVE_DENYLIST_DOMAIN tool input.
 */
type NEXTDNS_REMOVE_DENYLIST_DOMAIN_INPUT = {
  /**
   * Domain
   * @description The domain to remove from the profile's denylist.
   */
  domain?: string;
  /**
   * Profile
   * @description ID of the NextDNS profile to update.
   */
  profile?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_REMOVE_DENYLIST_DOMAIN tool output.
 */
type NEXTDNS_REMOVE_DENYLIST_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from NextDNS API.
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
 * Type of NEXTDNS's NEXTDNS_RENAME_CONFIG tool input.
 */
type NEXTDNS_RENAME_CONFIG_INPUT = {
  /**
   * Config Id
   * @description The NextDNS configuration (profile) ID to rename.
   */
  config_id?: string;
  /**
   * Name
   * @description The new name for the configuration. Must be non-empty and at most 100 characters.
   */
  name?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_RENAME_CONFIG tool output.
 */
type NEXTDNS_RENAME_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the NextDNS profile.
       */
      id: string;
      /**
       * Name
       * @description Updated name of the NextDNS profile.
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
 * Type of NEXTDNS's NEXTDNS_SET_AI_DETECTION tool input.
 */
type NEXTDNS_SET_AI_DETECTION_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Enabled
   * @description True to enable AI Threat Detection, False to disable.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_AI_DETECTION tool output.
 */
type NEXTDNS_SET_AI_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success.
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
 * Type of NEXTDNS's NEXTDNS_SET_CRYPTOJACKING tool input.
 */
type NEXTDNS_SET_CRYPTOJACKING_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Enabled
   * @description Enable (true) or disable (false) cryptojacking protection
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_CRYPTOJACKING tool output.
 */
type NEXTDNS_SET_CRYPTOJACKING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success
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
 * Type of NEXTDNS's NEXTDNS_SET_CSAM tool input.
 */
type NEXTDNS_SET_CSAM_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID to update.
   */
  config?: string;
  /**
   * Csam
   * @description Set to true to enable blocking of child sexual abuse material domains, or false to disable.
   */
  csam?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_CSAM tool output.
 */
type NEXTDNS_SET_CSAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csam
       * @description Indicates whether CSAM domain blocking is enabled (true) or disabled (false).
       */
      csam: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_DGA tool input.
 */
type NEXTDNS_SET_DGA_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Enabled
   * @description Enable (true) or disable (false) DGA protection
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_DGA tool output.
 */
type NEXTDNS_SET_DGA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success
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
 * Type of NEXTDNS's NEXTDNS_SET_DNS_REBINDING tool input.
 */
type NEXTDNS_SET_DNS_REBINDING_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID to update.
   */
  config?: string;
  /**
   * Enabled
   * @description Set to true to enable or false to disable DNS rebinding protection.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_DNS_REBINDING tool output.
 */
type NEXTDNS_SET_DNS_REBINDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Dns Rebinding
       * @description Indicates whether DNS rebinding protection is enabled (true) or disabled (false).
       */
      dnsRebinding: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_HOMOGRAPH tool input.
 */
type NEXTDNS_SET_HOMOGRAPH_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID to update.
   */
  config?: string;
  /**
   * Enabled
   * @description Enable (true) or disable (false) homograph attack protection.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_HOMOGRAPH tool output.
 */
type NEXTDNS_SET_HOMOGRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success.
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
 * Type of NEXTDNS's NEXTDNS_SET_NEW_DOMAINS tool input.
 */
type NEXTDNS_SET_NEW_DOMAINS_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID to update.
   */
  config?: string;
  /**
   * Nrd
   * @description Set to true to enable blocking of newly registered domains, or false to disable.
   */
  nrd?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_NEW_DOMAINS tool output.
 */
type NEXTDNS_SET_NEW_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Nrd
       * @description Indicates whether newly registered domains protection is enabled (true) or disabled (false).
       */
      nrd: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_PARKED tool input.
 */
type NEXTDNS_SET_PARKED_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Enabled
   * @description Enable (true) or disable (false) blocking of parked domains.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_PARKED tool output.
 */
type NEXTDNS_SET_PARKED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success
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
 * Type of NEXTDNS's NEXTDNS_SET_SAFE_BROWSING tool input.
 */
type NEXTDNS_SET_SAFE_BROWSING_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID to update.
   */
  config?: string;
  /**
   * Enabled
   * @description Set to true to enable or false to disable Google Safe Browsing protection.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_SAFE_BROWSING tool output.
 */
type NEXTDNS_SET_SAFE_BROWSING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Google Safe Browsing
       * @description Indicates whether Google Safe Browsing protection is enabled (true) or disabled (false).
       */
      googleSafeBrowsing: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS tool input.
 */
type NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Enabled
   * @description True to enable Real-Time Threat Intelligence Feeds, False to disable.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS tool output.
 */
type NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success.
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
 * Type of NEXTDNS's NEXTDNS_SET_TYPOSQUATTING tool input.
 */
type NEXTDNS_SET_TYPOSQUATTING_INPUT = {
  /**
   * Config
   * @description NextDNS profile configuration ID.
   */
  config?: string;
  /**
   * Enabled
   * @description True to enable typosquatting protection, False to disable.
   */
  enabled?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_SET_TYPOSQUATTING tool output.
 */
type NEXTDNS_SET_TYPOSQUATTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message, 'OK' on success.
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
 * Type of NEXTDNS's NEXTDNS_UPDATE_LINKED_IP tool input.
 */
type NEXTDNS_UPDATE_LINKED_IP_INPUT = {
  /**
   * Config Id
   * @description ID of the NextDNS profile to update the linked IP.
   */
  config_id?: string;
};

/**
 * Type of NEXTDNS's NEXTDNS_UPDATE_LINKED_IP tool output.
 */
type NEXTDNS_UPDATE_LINKED_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the NextDNS link-IP endpoint, typically the new linked IP or 'OK'.
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
 * Type of NEXTDNS's NEXTDNS_UPDATE_PERFORMANCE_SETTINGS tool input.
 */
type NEXTDNS_UPDATE_PERFORMANCE_SETTINGS_INPUT = {
  /**
   * Cache Boost
   * @description Enable (true) or disable (false) cache boost.
   */
  cacheBoost?: boolean;
  /**
   * Cname Flattening
   * @description Enable (true) or disable (false) CNAME flattening.
   */
  cnameFlattening?: boolean;
  /**
   * Config
   * @description NextDNS profile configuration ID to update.
   */
  config?: string;
  /**
   * Ecs
   * @description Enable (true) or disable (false) EDNS Client Subnet (ECS).
   */
  ecs?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_UPDATE_PERFORMANCE_SETTINGS tool output.
 */
type NEXTDNS_UPDATE_PERFORMANCE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cache Boost
       * @description Indicates whether cache boost is enabled (true) or disabled (false).
       */
      cacheBoost: boolean;
      /**
       * Cname Flattening
       * @description Indicates whether CNAME flattening is enabled (true) or disabled (false).
       */
      cnameFlattening: boolean;
      /**
       * Ecs
       * @description Indicates whether EDNS Client Subnet (ECS) is enabled (true) or disabled (false).
       */
      ecs: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEXTDNS's NEXTDNS_UPDATE_PRIVACY_SETTINGS tool input.
 */
type NEXTDNS_UPDATE_PRIVACY_SETTINGS_INPUT = {
  /**
   * Allow Affiliate
   * @description Whether to allow affiliate programs (true) or not (false).
   * @default null
   */
  allowAffiliate: boolean | null;
  /**
   * Blocklists
   * @description List of blocklists to apply. When provided, replaces all existing blocklists.
   * @default null
   */
  blocklists: {
      /**
       * Id
       * @description Identifier of a blocklist or native tracker.
       */
      id: string;
  }[] | null;
  /**
   * Config
   * @description NextDNS profile configuration ID to update privacy settings for.
   */
  config?: string;
  /**
   * Disguised Trackers
   * @description Whether to block disguised trackers (true) or not (false).
   * @default null
   */
  disguisedTrackers: boolean | null;
  /**
   * Natives
   * @description List of native trackers to apply. When provided, replaces all existing native trackers.
   * @default null
   */
  natives: {
      /**
       * Id
       * @description Identifier of a blocklist or native tracker.
       */
      id: string;
  }[] | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_UPDATE_PRIVACY_SETTINGS tool output.
 */
type NEXTDNS_UPDATE_PRIVACY_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Affiliate
       * @description Indicates if affiliate programs are allowed.
       */
      allowAffiliate: boolean;
      /**
       * Blocklists
       * @description List of blocklists after the update.
       */
      blocklists: {
          /**
           * Id
           * @description Identifier of a blocklist or native tracker.
           */
          id: string;
      }[];
      /**
       * Disguised Trackers
       * @description Indicates if disguised trackers blocking is enabled.
       */
      disguisedTrackers: boolean;
      /**
       * Natives
       * @description List of native trackers after the update.
       */
      natives: {
          /**
           * Id
           * @description Identifier of a blocklist or native tracker.
           */
          id: string;
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
 * Type of NEXTDNS's NEXTDNS_UPDATE_PROFILE tool input.
 */
type NEXTDNS_UPDATE_PROFILE_INPUT = {
  /**
   * Allowlist
   * @description List of allowlist entries to set, each with 'id' and 'active' status.
   * @default null
   */
  allowlist: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Denylist
   * @description List of denylist entries to set, each with 'id' and 'active' status.
   * @default null
   */
  denylist: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Name
   * @description New name for the profile.
   * @default null
   */
  name: string | null;
  /**
   * Parental Control
   * @description Updated parental control settings object (services, categories, safeSearch, etc.).
   * @default null
   */
  parentalControl: {
      [key: string]: unknown;
  } | null;
  /**
   * Privacy
   * @description Updated privacy settings object (blocklists, natives, trackers).
   * @default null
   */
  privacy: {
      [key: string]: unknown;
  } | null;
  /**
   * Profile
   * @description Unique identifier of the NextDNS profile to update.
   */
  profile?: string;
  /**
   * Security
   * @description Updated security settings object (toggles and TLD entries).
   * @default null
   */
  security: {
      [key: string]: unknown;
  } | null;
  /**
   * Settings
   * @description Updated general settings object (logs, blockPage, performance, web3).
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of NEXTDNS's NEXTDNS_UPDATE_PROFILE tool output.
 */
type NEXTDNS_UPDATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allowlist
       * @description Allowlist entries of the profile.
       */
      allowlist: {
          [key: string]: unknown;
      }[];
      /**
       * Denylist
       * @description Denylist entries of the profile.
       */
      denylist: {
          [key: string]: unknown;
      }[];
      /**
       * Name
       * @description Name of the profile.
       */
      name: string;
      /**
       * Parental Control
       * @description Parental control settings of the profile.
       */
      parentalControl: {
          [key: string]: unknown;
      };
      /**
       * Privacy
       * @description Privacy settings of the profile.
       */
      privacy: {
          [key: string]: unknown;
      };
      /**
       * Security
       * @description Security settings of the profile.
       */
      security: {
          [key: string]: unknown;
      };
      /**
       * Settings
       * @description General settings of the profile.
       */
      settings: {
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
 * Type map of all available tool input types for toolkit "NEXTDNS".
 */
export type NEXTDNS_TOOL_INPUTS = {
  ADD_BLOCKED_TLD: NEXTDNS_ADD_BLOCKED_TLD_INPUT
  ADD_DENYLIST_DOMAIN: NEXTDNS_ADD_DENYLIST_DOMAIN_INPUT
  BLOCK_PAGE: NEXTDNS_BLOCK_PAGE_INPUT
  CLEAR_LOGS: NEXTDNS_CLEAR_LOGS_INPUT
  CREATE_PROFILE: NEXTDNS_CREATE_PROFILE_INPUT
  DELETE_CONFIG: NEXTDNS_DELETE_CONFIG_INPUT
  DOWNLOAD_LOGS: NEXTDNS_DOWNLOAD_LOGS_INPUT
  GET_ANALYTICS_DEVICES: NEXTDNS_GET_ANALYTICS_DEVICES_INPUT
  GET_ANALYTICS_DOMAINS: NEXTDNS_GET_ANALYTICS_DOMAINS_INPUT
  GET_ANALYTICS_IPS: NEXTDNS_GET_ANALYTICS_IPS_INPUT
  GET_ANALYTICS_IP_VERSIONS: NEXTDNS_GET_ANALYTICS_IP_VERSIONS_INPUT
  GET_ANALYTICS_QUERY_TYPES: NEXTDNS_GET_ANALYTICS_QUERY_TYPES_INPUT
  GET_ANALYTICS_REASONS: NEXTDNS_GET_ANALYTICS_REASONS_INPUT
  GET_ANALYTICS_STATUS: NEXTDNS_GET_ANALYTICS_STATUS_INPUT
  GET_LOGS: NEXTDNS_GET_LOGS_INPUT
  GET_PROFILE: NEXTDNS_GET_PROFILE_INPUT
  GET_SETUP_INFO: NEXTDNS_GET_SETUP_INFO_INPUT
  LIST_CONFIGURATIONS: NEXTDNS_LIST_CONFIGURATIONS_INPUT
  LIST_DENYLIST_DOMAINS: NEXTDNS_LIST_DENYLIST_DOMAINS_INPUT
  LIST_SECURITY_SETTINGS: NEXTDNS_LIST_SECURITY_SETTINGS_INPUT
  LIST_SETTINGS: NEXTDNS_LIST_SETTINGS_INPUT
  LOGIN: NEXTDNS_LOGIN_INPUT
  LOG_CLIENT_IPS: NEXTDNS_LOG_CLIENT_IPS_INPUT
  LOG_DOMAINS: NEXTDNS_LOG_DOMAINS_INPUT
  MONTHLY_QUERIES: NEXTDNS_MONTHLY_QUERIES_INPUT
  REMOVE_BLOCKED_TLD: NEXTDNS_REMOVE_BLOCKED_TLD_INPUT
  REMOVE_DENYLIST_DOMAIN: NEXTDNS_REMOVE_DENYLIST_DOMAIN_INPUT
  RENAME_CONFIG: NEXTDNS_RENAME_CONFIG_INPUT
  SET_AI_DETECTION: NEXTDNS_SET_AI_DETECTION_INPUT
  SET_CRYPTOJACKING: NEXTDNS_SET_CRYPTOJACKING_INPUT
  SET_CSAM: NEXTDNS_SET_CSAM_INPUT
  SET_DGA: NEXTDNS_SET_DGA_INPUT
  SET_DNS_REBINDING: NEXTDNS_SET_DNS_REBINDING_INPUT
  SET_HOMOGRAPH: NEXTDNS_SET_HOMOGRAPH_INPUT
  SET_NEW_DOMAINS: NEXTDNS_SET_NEW_DOMAINS_INPUT
  SET_PARKED: NEXTDNS_SET_PARKED_INPUT
  SET_SAFE_BROWSING: NEXTDNS_SET_SAFE_BROWSING_INPUT
  SET_THREAT_INTELLIGENCE_FEEDS: NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS_INPUT
  SET_TYPOSQUATTING: NEXTDNS_SET_TYPOSQUATTING_INPUT
  UPDATE_LINKED_IP: NEXTDNS_UPDATE_LINKED_IP_INPUT
  UPDATE_PERFORMANCE_SETTINGS: NEXTDNS_UPDATE_PERFORMANCE_SETTINGS_INPUT
  UPDATE_PRIVACY_SETTINGS: NEXTDNS_UPDATE_PRIVACY_SETTINGS_INPUT
  UPDATE_PROFILE: NEXTDNS_UPDATE_PROFILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEXTDNS".
 */
export type NEXTDNS_TOOL_OUTPUTS = {
  ADD_BLOCKED_TLD: NEXTDNS_ADD_BLOCKED_TLD_OUTPUT
  ADD_DENYLIST_DOMAIN: NEXTDNS_ADD_DENYLIST_DOMAIN_OUTPUT
  BLOCK_PAGE: NEXTDNS_BLOCK_PAGE_OUTPUT
  CLEAR_LOGS: NEXTDNS_CLEAR_LOGS_OUTPUT
  CREATE_PROFILE: NEXTDNS_CREATE_PROFILE_OUTPUT
  DELETE_CONFIG: NEXTDNS_DELETE_CONFIG_OUTPUT
  DOWNLOAD_LOGS: NEXTDNS_DOWNLOAD_LOGS_OUTPUT
  GET_ANALYTICS_DEVICES: NEXTDNS_GET_ANALYTICS_DEVICES_OUTPUT
  GET_ANALYTICS_DOMAINS: NEXTDNS_GET_ANALYTICS_DOMAINS_OUTPUT
  GET_ANALYTICS_IPS: NEXTDNS_GET_ANALYTICS_IPS_OUTPUT
  GET_ANALYTICS_IP_VERSIONS: NEXTDNS_GET_ANALYTICS_IP_VERSIONS_OUTPUT
  GET_ANALYTICS_QUERY_TYPES: NEXTDNS_GET_ANALYTICS_QUERY_TYPES_OUTPUT
  GET_ANALYTICS_REASONS: NEXTDNS_GET_ANALYTICS_REASONS_OUTPUT
  GET_ANALYTICS_STATUS: NEXTDNS_GET_ANALYTICS_STATUS_OUTPUT
  GET_LOGS: NEXTDNS_GET_LOGS_OUTPUT
  GET_PROFILE: NEXTDNS_GET_PROFILE_OUTPUT
  GET_SETUP_INFO: NEXTDNS_GET_SETUP_INFO_OUTPUT
  LIST_CONFIGURATIONS: NEXTDNS_LIST_CONFIGURATIONS_OUTPUT
  LIST_DENYLIST_DOMAINS: NEXTDNS_LIST_DENYLIST_DOMAINS_OUTPUT
  LIST_SECURITY_SETTINGS: NEXTDNS_LIST_SECURITY_SETTINGS_OUTPUT
  LIST_SETTINGS: NEXTDNS_LIST_SETTINGS_OUTPUT
  LOGIN: NEXTDNS_LOGIN_OUTPUT
  LOG_CLIENT_IPS: NEXTDNS_LOG_CLIENT_IPS_OUTPUT
  LOG_DOMAINS: NEXTDNS_LOG_DOMAINS_OUTPUT
  MONTHLY_QUERIES: NEXTDNS_MONTHLY_QUERIES_OUTPUT
  REMOVE_BLOCKED_TLD: NEXTDNS_REMOVE_BLOCKED_TLD_OUTPUT
  REMOVE_DENYLIST_DOMAIN: NEXTDNS_REMOVE_DENYLIST_DOMAIN_OUTPUT
  RENAME_CONFIG: NEXTDNS_RENAME_CONFIG_OUTPUT
  SET_AI_DETECTION: NEXTDNS_SET_AI_DETECTION_OUTPUT
  SET_CRYPTOJACKING: NEXTDNS_SET_CRYPTOJACKING_OUTPUT
  SET_CSAM: NEXTDNS_SET_CSAM_OUTPUT
  SET_DGA: NEXTDNS_SET_DGA_OUTPUT
  SET_DNS_REBINDING: NEXTDNS_SET_DNS_REBINDING_OUTPUT
  SET_HOMOGRAPH: NEXTDNS_SET_HOMOGRAPH_OUTPUT
  SET_NEW_DOMAINS: NEXTDNS_SET_NEW_DOMAINS_OUTPUT
  SET_PARKED: NEXTDNS_SET_PARKED_OUTPUT
  SET_SAFE_BROWSING: NEXTDNS_SET_SAFE_BROWSING_OUTPUT
  SET_THREAT_INTELLIGENCE_FEEDS: NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS_OUTPUT
  SET_TYPOSQUATTING: NEXTDNS_SET_TYPOSQUATTING_OUTPUT
  UPDATE_LINKED_IP: NEXTDNS_UPDATE_LINKED_IP_OUTPUT
  UPDATE_PERFORMANCE_SETTINGS: NEXTDNS_UPDATE_PERFORMANCE_SETTINGS_OUTPUT
  UPDATE_PRIVACY_SETTINGS: NEXTDNS_UPDATE_PRIVACY_SETTINGS_OUTPUT
  UPDATE_PROFILE: NEXTDNS_UPDATE_PROFILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEXTDNS toolkit.
 */
export const NEXTDNS = {
  slug: "nextdns",
  tools: {
    /**
     * Tool to add a top-level domain to the security blocklist for a nextdns profile. use after listing current security settings to ensure the tld is not already blocked.
     */
    ADD_BLOCKED_TLD: "NEXTDNS_ADD_BLOCKED_TLD",
    /**
     * Tool to add a domain to the denylist of a nextdns profile. use when blocking specific domains under a profile after obtaining its id.
     */
    ADD_DENYLIST_DOMAIN: "NEXTDNS_ADD_DENYLIST_DOMAIN",
    /**
     * Tool to enable or disable block page for a configuration. use when you need to toggle whether dns blocks show a block page.
     */
    BLOCK_PAGE: "NEXTDNS_BLOCK_PAGE",
    /**
     * Tool to clear dns logs for a nextdns profile. use when you want to remove all existing query logs for a given profile. note: this operation cannot be undone.
     */
    CLEAR_LOGS: "NEXTDNS_CLEAR_LOGS",
    /**
     * This tool allows users to create a new nextdns profile. it uses the post method at the endpoint https://api.nextdns.io/profiles. a profile is a distinct configuration set for dns filtering and security settings.
     */
    CREATE_PROFILE: "NEXTDNS_CREATE_PROFILE",
    /**
     * Tool to delete a nextdns configuration profile. use when you need to remove an existing profile by its id. use after confirming the profile exists.
     */
    DELETE_CONFIG: "NEXTDNS_DELETE_CONFIG",
    /**
     * Tool to download dns logs for a profile. use when you need the url of the exported logs. use after confirming the profile id is valid. supports getting a redirect url or json.
     */
    DOWNLOAD_LOGS: "NEXTDNS_DOWNLOAD_LOGS",
    /**
     * Tool to retrieve analytics aggregated by devices. use when you need per-device query metrics within a specific time frame.
     */
    GET_ANALYTICS_DEVICES: "NEXTDNS_GET_ANALYTICS_DEVICES",
    /**
     * Tool to retrieve analytics data for domains within a specific profile. use after confirming the profile id to get per-domain query stats.
     */
    GET_ANALYTICS_DOMAINS: "NEXTDNS_GET_ANALYTICS_DOMAINS",
    /**
     * Tool to retrieve analytics aggregated by client ip addresses. use when you need to analyze dns query distribution per client ip for a given profile.
     */
    GET_ANALYTICS_IPS: "NEXTDNS_GET_ANALYTICS_IPS",
    /**
     * Tool to retrieve analytics grouped by ip version within a specific profile. use after you have a profile id to see ipv4 vs ipv6 query counts.
     */
    GET_ANALYTICS_IP_VERSIONS: "NEXTDNS_GET_ANALYTICS_IP_VERSIONS",
    /**
     * Tool to retrieve dns query counts broken down by query type. use after selecting a profile and specifying date filters to analyze distribution by type.
     */
    GET_ANALYTICS_QUERY_TYPES: "NEXTDNS_GET_ANALYTICS_QUERY_TYPES",
    /**
     * Tool to retrieve dns query counts broken down by classification reason. use after selecting a profile and specifying date filters to analyze reason distribution.
     */
    GET_ANALYTICS_REASONS: "NEXTDNS_GET_ANALYTICS_REASONS",
    /**
     * Tool to retrieve analytics status for a specific profile. use when you need counts of dns queries broken down by status categories.
     */
    GET_ANALYTICS_STATUS: "NEXTDNS_GET_ANALYTICS_STATUS",
    /**
     * Tool to retrieve logs for a specific nextdns profile with optional filters. use after confirming the profile id to fetch raw or filtered dns logs.
     */
    GET_LOGS: "NEXTDNS_GET_LOGS",
    /**
     * Retrieves the details of a specific nextdns profile. it requires a 'profileid' as a path parameter and returns the profile details including name, security, privacy, parental control, denylist, allowlist, and general settings.
     */
    GET_PROFILE: "NEXTDNS_GET_PROFILE",
    /**
     * Tool to get setup information for a provided configuration (profile). use after obtaining a profile id to fetch its current settings.
     */
    GET_SETUP_INFO: "NEXTDNS_GET_SETUP_INFO",
    /**
     * Tool to list all configurations (profiles) available on the nextdns account. use after authenticating to page through profiles.
     */
    LIST_CONFIGURATIONS: "NEXTDNS_LIST_CONFIGURATIONS",
    /**
     * Tool to list domains in the denylist for a profile. use after confirming the profile id to review all blocked domains. example: "list denylist domains for profile abc123."
     */
    LIST_DENYLIST_DOMAINS: "NEXTDNS_LIST_DENYLIST_DOMAINS",
    /**
     * Tool to list current security options for a nextdns configuration. use after obtaining the configuration id to review active security settings.
     */
    LIST_SECURITY_SETTINGS: "NEXTDNS_LIST_SECURITY_SETTINGS",
    /**
     * Tool to list settings for a nextdns profile. use when auditing or inspecting all enabled settings before applying changes.
     */
    LIST_SETTINGS: "NEXTDNS_LIST_SETTINGS",
    /**
     * Tool to authenticate to the nextdns api. use when you have an api key and need to verify credentials and obtain session headers and cookies for subsequent requests.
     */
    LOGIN: "NEXTDNS_LOGIN",
    /**
     * Tool to enable or disable logging of client ips for a nextdns configuration. use when you need to toggle whether client ips are recorded in dns logs.
     */
    LOG_CLIENT_IPS: "NEXTDNS_LOG_CLIENT_IPS",
    /**
     * Tool to enable or disable logging of domains for a nextdns profile. use after retrieving profile settings when you need to adjust domain logging. example: "enable domain logging for profile abc123."
     */
    LOG_DOMAINS: "NEXTDNS_LOG_DOMAINS",
    /**
     * Tool to get the number of dns queries made in the current month for a profile. use after selecting a profile.
     */
    MONTHLY_QUERIES: "NEXTDNS_MONTHLY_QUERIES",
    /**
     * Tool to remove a top-level domain from the security blocklist for a nextdns profile. use after listing current security settings to confirm the tld is currently blocked.
     */
    REMOVE_BLOCKED_TLD: "NEXTDNS_REMOVE_BLOCKED_TLD",
    /**
     * Tool to remove a domain from a profile's denylist. use after confirming the domain is currently denied to clean it up.
     */
    REMOVE_DENYLIST_DOMAIN: "NEXTDNS_REMOVE_DENYLIST_DOMAIN",
    /**
     * Tool to rename a nextdns configuration (profile). use when you need to update a profile's name after obtaining its id. example: renameconfig(name="home profile", config id="d46a5b")
     */
    RENAME_CONFIG: "NEXTDNS_RENAME_CONFIG",
    /**
     * Tool to enable or disable ai threat detection for a nextdns configuration. use after listing security settings to toggle the ai detection flag.
     */
    SET_AI_DETECTION: "NEXTDNS_SET_AI_DETECTION",
    /**
     * Tool to enable or disable cryptojacking protection for a nextdns configuration. use when toggling unauthorized crypto mining protection after listing security settings.
     */
    SET_CRYPTOJACKING: "NEXTDNS_SET_CRYPTOJACKING",
    /**
     * Tool to enable or disable blocking of child sexual abuse material domains for a nextdns profile. use when updating security settings after obtaining the profile id.
     */
    SET_CSAM: "NEXTDNS_SET_CSAM",
    /**
     * Tool to enable or disable dga (domain generation algorithm) protection for a nextdns configuration. use when toggling algorithm-generated domains protection after listing security settings.
     */
    SET_DGA: "NEXTDNS_SET_DGA",
    /**
     * Tool to enable or disable dns rebinding protection for a nextdns configuration. use when toggling dns rebinding protection after reviewing current security settings.
     */
    SET_DNS_REBINDING: "NEXTDNS_SET_DNS_REBINDING",
    /**
     * Tool to enable or disable homograph attack protection for a nextdns configuration. use when toggling idn homograph filtering after listing security settings.
     */
    SET_HOMOGRAPH: "NEXTDNS_SET_HOMOGRAPH",
    /**
     * Tool to enable or disable blocking of newly registered domains for a nextdns profile. use when updating security settings after obtaining the profile id.
     */
    SET_NEW_DOMAINS: "NEXTDNS_SET_NEW_DOMAINS",
    /**
     * Tool to enable or disable blocking of parked domains for a nextdns configuration. use when toggling parked domain blocking after listing security settings.
     */
    SET_PARKED: "NEXTDNS_SET_PARKED",
    /**
     * Tool to enable or disable google safe browsing for a nextdns configuration. use when toggling malware and phishing protection after reviewing current security settings.
     */
    SET_SAFE_BROWSING: "NEXTDNS_SET_SAFE_BROWSING",
    /**
     * Tool to enable or disable real-time threat intelligence feeds for a nextdns configuration. use after listing security settings to toggle the threatintelligencefeeds flag.
     */
    SET_THREAT_INTELLIGENCE_FEEDS: "NEXTDNS_SET_THREAT_INTELLIGENCE_FEEDS",
    /**
     * Tool to enable or disable typosquatting protection for a nextdns configuration. use after listing security settings to toggle the typosquatting flag.
     */
    SET_TYPOSQUATTING: "NEXTDNS_SET_TYPOSQUATTING",
    /**
     * Tool to update the linked ip for a nextdns profile. use after retrieving the profile setup to apply the current ip to the profile.
     */
    UPDATE_LINKED_IP: "NEXTDNS_UPDATE_LINKED_IP",
    /**
     * Tool to update performance settings of a nextdns profile. use when adjusting performance optimizations after reviewing current settings.
     */
    UPDATE_PERFORMANCE_SETTINGS: "NEXTDNS_UPDATE_PERFORMANCE_SETTINGS",
    /**
     * Tool to update privacy settings for a profile. use when you need to change blocklists, native trackers, disguisedtrackers, or allowaffiliate in one call.
     */
    UPDATE_PRIVACY_SETTINGS: "NEXTDNS_UPDATE_PRIVACY_SETTINGS",
    /**
     * Tool to update an existing profile. use after retrieving a profile's current settings to apply changes.
     */
    UPDATE_PROFILE: "NEXTDNS_UPDATE_PROFILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEXTDNS".
 */
export type NEXTDNS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEXTDNS".
 */
export type NEXTDNS_TRIGGER_EVENTS = {}
