// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DNSFILTER's DNSFILTER_CREATE_IP_ADDRESS tool input.
 */
type DNSFILTER_CREATE_IP_ADDRESS_INPUT = {
  /**
   * Address
   * @description IPv4 or IPv6 address to add
   */
  address?: string;
  /**
   * Description
   * @description Optional description for the IP address
   * @default null
   */
  description: string | null;
  /**
   * Network Id
   * @description ID of the network where this IP belongs
   */
  network_id?: number;
};

/**
 * Type of DNSFILTER's DNSFILTER_CREATE_IP_ADDRESS tool output.
 */
type DNSFILTER_CREATE_IP_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The created IP address
       */
      address: string;
      /**
       * Created At
       * @description Timestamp when the IP was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the IP address
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the IP address
       */
      id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_APPLICATION_CATEGORY tool input.
 */
type DNSFILTER_GET_APPLICATION_CATEGORY_INPUT = {
  /**
   * Application Category Id
   * @description Unique ID of the application category
   */
  application_category_id?: string;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_APPLICATION_CATEGORY tool output.
 */
type DNSFILTER_GET_APPLICATION_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Category creation date in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the application category
       */
      description: string;
      /**
       * Id
       * @description Application category ID
       */
      id: number;
      /**
       * Name
       * @description Name of the application category
       */
      name: string;
      /**
       * Updated At
       * @description Last updated date in ISO 8601 format
       */
      updated_at: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_BILLING_INFORMATION tool input.
 */
type DNSFILTER_GET_BILLING_INFORMATION_INPUT = {
  /**
   * Organization Id
   * @description Unique identifier of the organization.
   */
  organization_id?: string;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_BILLING_INFORMATION tool output.
 */
type DNSFILTER_GET_BILLING_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Billings
       * @description List of billing records for the organization.
       */
      billings: {
          /**
           * Amount
           * @description Billed amount
           */
          amount: number;
          /**
           * Created At
           * @description Record creation timestamp (YYYY-MM-DD HH:MM:SS)
           */
          created_at: string;
          /**
           * Id
           * @description Billing record ID
           */
          id: number;
          /**
           * Payment Status
           * @description Payment status of the billing record
           */
          payment_status: string;
          /**
           * Period From
           * @description Billing period start date (YYYY-MM-DD)
           */
          period_from: string;
          /**
           * Period To
           * @description Billing period end date (YYYY-MM-DD)
           */
          period_to: string;
          /**
           * Updated At
           * @description Last update timestamp (YYYY-MM-DD HH:MM:SS)
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
 * Type of DNSFILTER's DNSFILTER_GET_CATEGORY tool input.
 */
type DNSFILTER_GET_CATEGORY_INPUT = {
  /**
   * Id
   * @description Unique identifier of the category to retrieve
   */
  id?: number;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_CATEGORY tool output.
 */
type DNSFILTER_GET_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the category
       */
      description: string;
      /**
       * Id
       * @description Category ID
       */
      id: number;
      /**
       * Name
       * @description Name of the category
       */
      name: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_at: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_IP_ADDRESS tool input.
 */
type DNSFILTER_GET_IP_ADDRESS_INPUT = {
  /**
   * Ip Address
   * @description The IP address to retrieve details for.
   */
  ip_address?: string;
};

/**
 * Type of DNSFILTER's DNSFILTER_GET_IP_ADDRESS tool output.
 */
type DNSFILTER_GET_IP_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The timestamp when the IP address record was created in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description The unique identifier for the IP address record.
       */
      id: number;
      /**
       * Ip
       * @description The IP address.
       */
      ip: string;
      /**
       * Site Id
       * @description The ID of the site associated with the IP address.
       */
      site_id: number;
      /**
       * Updated At
       * @description The timestamp when the IP address record was last updated in ISO 8601 format.
       */
      updated_at: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_ALL_CATEGORIES tool input.
 */
type DNSFILTER_LIST_ALL_CATEGORIES_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_ALL_CATEGORIES tool output.
 */
type DNSFILTER_LIST_ALL_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the category.
       */
      description: string;
      /**
       * Id
       * @description Unique identifier of the category.
       */
      id: number;
      /**
       * Name
       * @description Human-readable name of the category.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_ALL_IP_ADDRESSES tool input.
 */
type DNSFILTER_LIST_ALL_IP_ADDRESSES_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_ALL_IP_ADDRESSES tool output.
 */
type DNSFILTER_LIST_ALL_IP_ADDRESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the IP address entry was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Description
       * @description Optional description of the IP address.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the IP address entry.
       */
      id: string;
      /**
       * Ip
       * @description The IP address in IPv4 or IPv6 format.
       */
      ip: string;
      /**
       * Updated At
       * @description Timestamp when the IP address entry was last updated (ISO 8601 format).
       */
      updated_at: string;
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
 * Type of DNSFILTER's DNSFILTER_LIST_ALL_MAC_ADDRESSES tool input.
 */
type DNSFILTER_LIST_ALL_MAC_ADDRESSES_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_ALL_MAC_ADDRESSES tool output.
 */
type DNSFILTER_LIST_ALL_MAC_ADDRESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the MAC address entry was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the MAC address entry.
       */
      id: number;
      /**
       * Location Id
       * @description Location ID associated with this MAC address.
       */
      location_id: number;
      /**
       * Mac Address
       * @description The MAC address in standard format.
       */
      mac_address: string;
      /**
       * Name
       * @description Name or label for the MAC address entry.
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID that owns this MAC address entry.
       */
      organization_id: number;
      /**
       * Updated At
       * @description Timestamp when the MAC address entry was last updated (ISO 8601 format).
       */
      updated_at: string;
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
 * Type of DNSFILTER's DNSFILTER_LIST_APPLICATIONS tool input.
 */
type DNSFILTER_LIST_APPLICATIONS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Size
   * @description Number of records per page
   * @default null
   */
  size: number | null;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_APPLICATIONS tool output.
 */
type DNSFILTER_LIST_APPLICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Applications
       * @description List of applications with basic information
       */
      applications: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the application was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the application
           */
          id: number;
          /**
           * Name
           * @description Application's name
           */
          name: string;
          /**
           * Team Id
           * @description ID of the team the application belongs to
           */
          team_id: number;
          /**
           * Updated At
           * @description ISO 8601 timestamp of the application's last update
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
 * Type of DNSFILTER's DNSFILTER_LIST_APPLICATION_CATEGORIES tool input.
 */
type DNSFILTER_LIST_APPLICATION_CATEGORIES_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_APPLICATION_CATEGORIES tool output.
 */
type DNSFILTER_LIST_APPLICATION_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the application category.
       */
      id: number;
      /**
       * Name
       * @description Human-readable name of the application category.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_BLOCK_PAGES tool input.
 */
type DNSFILTER_LIST_BLOCK_PAGES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, must be between 1 and 100
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_BLOCK_PAGES tool output.
 */
type DNSFILTER_LIST_BLOCK_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the block page
       */
      id: number;
      /**
       * Is Default
       * @description Indicates if this block page is the default for the user
       */
      is_default: boolean;
      /**
       * Name
       * @description Name of the block page
       */
      name: string;
      /**
       * Notes
       * @description Optional notes for the block page
       * @default null
       */
      notes: string | null;
      /**
       * Preview Url
       * Format: uri
       * @description URL to preview the block page
       */
      preview_url: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the block page was last updated
       */
      updated_at: string;
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
 * Type of DNSFILTER's DNSFILTER_LIST_CATEGORIES tool input.
 */
type DNSFILTER_LIST_CATEGORIES_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_CATEGORIES tool output.
 */
type DNSFILTER_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Default Selected
       * @description Whether the category is selected by default.
       */
      default_selected: boolean;
      /**
       * Description
       * @description Description of the category.
       */
      description: string;
      /**
       * Group
       * @description Group classification of the category.
       */
      group: string;
      /**
       * Id
       * @description Unique identifier of the category.
       */
      id: number;
      /**
       * Name
       * @description Name of the category.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_INVOICES tool input.
 */
type DNSFILTER_LIST_INVOICES_INPUT = {
  /**
   * Direction
   * @description Sort direction: 'asc' or 'desc'. Default is 'desc' (most recent first).
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Organization Id
   * @description Organization's unique identifier.
   */
  organization_id?: string;
  /**
   * Page
   * @description Page number for pagination. Must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page. Must be >=1.
   * @default null
   */
  per_page: number | null;
  /**
   * Sort
   * @description Field to sort by. Defaults to 'created_at'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_INVOICES tool output.
 */
type DNSFILTER_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description List of invoices.
   */
  data?: {
      /**
       * Amount
       * @description Invoice amount.
       */
      amount: number;
      /**
       * Created At
       * @description Invoice creation timestamp in ISO 8601 format.
       */
      created_at: string;
      /**
       * Due Date
       * @description Invoice due date in ISO 8601 format.
       */
      due_date: string;
      /**
       * Id
       * @description Invoice identifier.
       */
      id: string;
      /**
       * Status
       * @description Invoice status.
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
   * Page
   * @description Current page number.
   */
  page?: number;
  /**
   * Per Page
   * @description Number of results per page.
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of invoices.
   */
  total?: number;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_IP_ADDRESSES tool input.
 */
type DNSFILTER_LIST_IP_ADDRESSES_INPUT = {
  /**
   * Device Id
   * @description Filter results to this device ID
   * @default null
   */
  device_id: number | null;
  /**
   * Location Id
   * @description Filter results to this location ID
   * @default null
   */
  location_id: number | null;
  /**
   * Page
   * @description Pagination page number, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page, must be between 1 and 200
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_IP_ADDRESSES tool output.
 */
type DNSFILTER_LIST_IP_ADDRESSES_OUTPUT = {
  /**
   * Data
   * @description List of IP address records
   */
  data?: {
      /**
       * Address
       * @description The IP address
       */
      address: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the record was created
       */
      created_at: string;
      /**
       * Device Id
       * @description ID of the associated device, if any
       * @default null
       */
      device_id: number | null;
      /**
       * Id
       * @description Unique identifier for the IP address
       */
      id: number;
      /**
       * Location Id
       * @description ID of the associated location
       */
      location_id: number;
      /**
       * Status
       * @description Current status of the IP address
       */
      status: string;
      /**
       * Type
       * @description Type of IP address (e.g., 'external', 'internal')
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the record was last updated
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Page
   * @description Current page number returned by the API
   */
  page?: number;
  /**
   * Per Page
   * @description Number of records per page returned
   */
  per_page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of records across all pages
   */
  total?: number;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_MAC_ADDRESSES tool input.
 */
type DNSFILTER_LIST_MAC_ADDRESSES_INPUT = {
  /**
   * Organization Id
   * @description Filter MAC addresses by organization ID
   * @default null
   */
  organization_id: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of DNSFILTER's DNSFILTER_LIST_MAC_ADDRESSES tool output.
 */
type DNSFILTER_LIST_MAC_ADDRESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the MAC address record was created (ISO 8601)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the MAC address record
       */
      id: number;
      /**
       * Mac Address
       * @description The MAC address
       */
      mac_address: string;
      /**
       * Organization Id
       * @description Associated organization ID
       */
      organization_id: string;
      /**
       * Updated At
       * @description Timestamp when the MAC address record was last updated (ISO 8601)
       */
      updated_at: string;
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
 * Type of DNSFILTER's DNSFILTER_LIST_NETWORKS tool input.
 */
type DNSFILTER_LIST_NETWORKS_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_NETWORKS tool output.
 */
type DNSFILTER_LIST_NETWORKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Networks
       * @description List of networks with detailed configuration
       */
      networks: {
          /**
           * Cidr
           * @description IPv4 CIDR notation for the network
           */
          cidr: string;
          /**
           * Description
           * @description Optional free-form description or notes for the network
           * @default null
           */
          description: string | null;
          /**
           * Device Id
           * @description Identifier of the device managing this network
           */
          device_id: string;
          /**
           * Forward Dns
           * @description Hostname or IP to which DNS queries are forwarded
           * @default null
           */
          forward_dns: string | null;
          /**
           * Id
           * @description Unique identifier of the network
           */
          id: number;
          /**
           * Ipv6 Cidr
           * @description IPv6 CIDR notation, if applicable
           * @default null
           */
          ipv6_cidr: string | null;
          /**
           * Name
           * @description Human-readable name of the network
           */
          name: string;
          /**
           * Site
           * @description Site or location associated with the network
           */
          site: string;
          /**
           * Tags
           * @description User-defined tags associated with the network
           */
          tags?: string[];
          /**
           * Tunnel Type
           * @description Type of tunnel used for this network, if any
           * @default null
           */
          tunnel_type: string | null;
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
 * Type of DNSFILTER's DNSFILTER_LIST_ORGANIZATIONS tool input.
 */
type DNSFILTER_LIST_ORGANIZATIONS_INPUT = object;

/**
 * Type of DNSFILTER's DNSFILTER_LIST_ORGANIZATIONS tool output.
 */
type DNSFILTER_LIST_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the organization was created (ISO 8601)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the organization
       */
      id: string;
      /**
       * Name
       * @description Name of the organization
       */
      name: string;
      /**
       * Status
       * @description Current status of the organization
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when the organization was last updated (ISO 8601)
       */
      updated_at: string;
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
 * Type of DNSFILTER's DNSFILTER_SUGGEST_DOMAIN_THREAT tool input.
 */
type DNSFILTER_SUGGEST_DOMAIN_THREAT_INPUT = {
  /**
   * Categories
   * @description Category IDs for classifying the threat type.
   * @default null
   */
  categories: number[] | null;
  /**
   * Fqdn
   * @description Fully qualified domain name to suggest as a potential threat.
   */
  fqdn?: string;
  /**
   * Notes
   * @description Detailed notes or reason for the threat suggestion.
   */
  notes?: string;
};

/**
 * Type of DNSFILTER's DNSFILTER_SUGGEST_DOMAIN_THREAT tool output.
 */
type DNSFILTER_SUGGEST_DOMAIN_THREAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description Categories associated with the suggested threat.
       */
      categories: number[];
      /**
       * Created At
       * @description Submission date/time of the suggestion.
       */
      created_at: string;
      /**
       * Domain
       * @description The domain that was suggested.
       */
      domain: string;
      /**
       * Id
       * @description The ID of the suggested threat report.
       */
      id: number;
      /**
       * Status
       * @description Processing status of the suggestion.
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
 * Type of DNSFILTER's DNSFILTER_VALIDATE_AUTH0_JWT tool input.
 */
type DNSFILTER_VALIDATE_AUTH0_JWT_INPUT = {
  /**
   * Jwt
   * @description Auth0 JSON Web Token (JWT) string to validate.
   */
  jwt?: string;
};

/**
 * Type of DNSFILTER's DNSFILTER_VALIDATE_AUTH0_JWT tool output.
 */
type DNSFILTER_VALIDATE_AUTH0_JWT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if validation fails.
       * @default null
       */
      error: string | null;
      /**
       * Payload
       * @description Decoded JWT payload when the token is valid.
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Valid
       * @description Indicates whether the token is valid.
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "DNSFILTER".
 */
export type DNSFILTER_TOOL_INPUTS = {
  CREATE_IP_ADDRESS: DNSFILTER_CREATE_IP_ADDRESS_INPUT
  GET_APPLICATION_CATEGORY: DNSFILTER_GET_APPLICATION_CATEGORY_INPUT
  GET_BILLING_INFORMATION: DNSFILTER_GET_BILLING_INFORMATION_INPUT
  GET_CATEGORY: DNSFILTER_GET_CATEGORY_INPUT
  GET_IP_ADDRESS: DNSFILTER_GET_IP_ADDRESS_INPUT
  LIST_ALL_CATEGORIES: DNSFILTER_LIST_ALL_CATEGORIES_INPUT
  LIST_ALL_IP_ADDRESSES: DNSFILTER_LIST_ALL_IP_ADDRESSES_INPUT
  LIST_ALL_MAC_ADDRESSES: DNSFILTER_LIST_ALL_MAC_ADDRESSES_INPUT
  LIST_APPLICATIONS: DNSFILTER_LIST_APPLICATIONS_INPUT
  LIST_APPLICATION_CATEGORIES: DNSFILTER_LIST_APPLICATION_CATEGORIES_INPUT
  LIST_BLOCK_PAGES: DNSFILTER_LIST_BLOCK_PAGES_INPUT
  LIST_CATEGORIES: DNSFILTER_LIST_CATEGORIES_INPUT
  LIST_INVOICES: DNSFILTER_LIST_INVOICES_INPUT
  LIST_IP_ADDRESSES: DNSFILTER_LIST_IP_ADDRESSES_INPUT
  LIST_MAC_ADDRESSES: DNSFILTER_LIST_MAC_ADDRESSES_INPUT
  LIST_NETWORKS: DNSFILTER_LIST_NETWORKS_INPUT
  LIST_ORGANIZATIONS: DNSFILTER_LIST_ORGANIZATIONS_INPUT
  SUGGEST_DOMAIN_THREAT: DNSFILTER_SUGGEST_DOMAIN_THREAT_INPUT
  VALIDATE_AUTH0_JWT: DNSFILTER_VALIDATE_AUTH0_JWT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DNSFILTER".
 */
export type DNSFILTER_TOOL_OUTPUTS = {
  CREATE_IP_ADDRESS: DNSFILTER_CREATE_IP_ADDRESS_OUTPUT
  GET_APPLICATION_CATEGORY: DNSFILTER_GET_APPLICATION_CATEGORY_OUTPUT
  GET_BILLING_INFORMATION: DNSFILTER_GET_BILLING_INFORMATION_OUTPUT
  GET_CATEGORY: DNSFILTER_GET_CATEGORY_OUTPUT
  GET_IP_ADDRESS: DNSFILTER_GET_IP_ADDRESS_OUTPUT
  LIST_ALL_CATEGORIES: DNSFILTER_LIST_ALL_CATEGORIES_OUTPUT
  LIST_ALL_IP_ADDRESSES: DNSFILTER_LIST_ALL_IP_ADDRESSES_OUTPUT
  LIST_ALL_MAC_ADDRESSES: DNSFILTER_LIST_ALL_MAC_ADDRESSES_OUTPUT
  LIST_APPLICATIONS: DNSFILTER_LIST_APPLICATIONS_OUTPUT
  LIST_APPLICATION_CATEGORIES: DNSFILTER_LIST_APPLICATION_CATEGORIES_OUTPUT
  LIST_BLOCK_PAGES: DNSFILTER_LIST_BLOCK_PAGES_OUTPUT
  LIST_CATEGORIES: DNSFILTER_LIST_CATEGORIES_OUTPUT
  LIST_INVOICES: DNSFILTER_LIST_INVOICES_OUTPUT
  LIST_IP_ADDRESSES: DNSFILTER_LIST_IP_ADDRESSES_OUTPUT
  LIST_MAC_ADDRESSES: DNSFILTER_LIST_MAC_ADDRESSES_OUTPUT
  LIST_NETWORKS: DNSFILTER_LIST_NETWORKS_OUTPUT
  LIST_ORGANIZATIONS: DNSFILTER_LIST_ORGANIZATIONS_OUTPUT
  SUGGEST_DOMAIN_THREAT: DNSFILTER_SUGGEST_DOMAIN_THREAT_OUTPUT
  VALIDATE_AUTH0_JWT: DNSFILTER_VALIDATE_AUTH0_JWT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DNSFILTER toolkit.
 */
export const DNSFILTER = {
  slug: "dnsfilter",
  tools: {
    /**
     * Tool to create a new ip address in dnsfilter. use after confirming the target network id exists.
     */
    CREATE_IP_ADDRESS: "DNSFILTER_CREATE_IP_ADDRESS",
    /**
     * Tool to get basic information of a specific application category. use when you need details for a given application category id.
     */
    GET_APPLICATION_CATEGORY: "DNSFILTER_GET_APPLICATION_CATEGORY",
    /**
     * Tool to retrieve basic billing information for an organization. use when you need to obtain billing details for reporting or automation tasks.
     */
    GET_BILLING_INFORMATION: "DNSFILTER_GET_BILLING_INFORMATION",
    /**
     * Tool to get basic information of a specific category. use when you need to retrieve details for a category by its id.
     */
    GET_CATEGORY: "DNSFILTER_GET_CATEGORY",
    /**
     * Tool to get basic information of the specified ip address. use when you need to fetch metadata for a particular ip after authentication.
     */
    GET_IP_ADDRESS: "DNSFILTER_GET_IP_ADDRESS",
    /**
     * Tool to list all categories including internal categories. use when you need the complete set of filtering categories.
     */
    LIST_ALL_CATEGORIES: "DNSFILTER_LIST_ALL_CATEGORIES",
    /**
     * Tool to list all user-associated ip addresses. use when you need a comprehensive list of all ip address entries in your organization.
     */
    LIST_ALL_IP_ADDRESSES: "DNSFILTER_LIST_ALL_IP_ADDRESSES",
    /**
     * Tool to list all mac addresses with basic information. use when you need to retrieve all mac address entries in your organization.
     */
    LIST_ALL_MAC_ADDRESSES: "DNSFILTER_LIST_ALL_MAC_ADDRESSES",
    /**
     * Tool to list applications with basic information. use when you need to retrieve all applications for your dnsfilter organization.
     */
    LIST_APPLICATIONS: "DNSFILTER_LIST_APPLICATIONS",
    /**
     * Tool to list application categories with basic information. use after authentication to retrieve all categories.
     */
    LIST_APPLICATION_CATEGORIES: "DNSFILTER_LIST_APPLICATION_CATEGORIES",
    /**
     * Tool to list block pages associated with the current user. use when you need to retrieve all block pages for review or update.
     */
    LIST_BLOCK_PAGES: "DNSFILTER_LIST_BLOCK_PAGES",
    /**
     * Tool to list categories with basic information. use when retrieving all dnsfilter categories for policy configuration.
     */
    LIST_CATEGORIES: "DNSFILTER_LIST_CATEGORIES",
    /**
     * Tool to list invoices for an organization, most recent first. use after obtaining the organization id when needing paginated invoice data.
     */
    LIST_INVOICES: "DNSFILTER_LIST_INVOICES",
    /**
     * Tool to list user-associated ip addresses basic information. use when you need to retrieve paginated ip address records filtered by location or device after authentication.
     */
    LIST_IP_ADDRESSES: "DNSFILTER_LIST_IP_ADDRESSES",
    /**
     * Tool to list mac addresses associated with an organization. use when you need to retrieve basic mac address information, optionally filtered by organization or paginated.
     */
    LIST_MAC_ADDRESSES: "DNSFILTER_LIST_MAC_ADDRESSES",
    /**
     * Tool to list all networks. use when you need to retrieve all network configurations for your organization.
     */
    LIST_NETWORKS: "DNSFILTER_LIST_NETWORKS",
    /**
     * Tool to list all organizations. use when you need to retrieve all organizations tied to the authenticated dnsfilter account.
     */
    LIST_ORGANIZATIONS: "DNSFILTER_LIST_ORGANIZATIONS",
    /**
     * Tool to suggest a fqdn as a potential threat. use after identifying a suspicious domain to verify its threat categorization.
     */
    SUGGEST_DOMAIN_THREAT: "DNSFILTER_SUGGEST_DOMAIN_THREAT",
    /**
     * Tool to validate a jwt with auth0. use when you need to confirm token validity before making dnsfilter api calls.
     */
    VALIDATE_AUTH0_JWT: "DNSFILTER_VALIDATE_AUTH0_JWT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DNSFILTER".
 */
export type DNSFILTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DNSFILTER".
 */
export type DNSFILTER_TRIGGER_EVENTS = {}
