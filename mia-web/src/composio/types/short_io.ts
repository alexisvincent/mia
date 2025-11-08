// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SHORT_IO's SHORT_IO_GET_DOMAINS_LINK_CLICKS tool input.
 */
type SHORT_IO_GET_DOMAINS_LINK_CLICKS_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain to retrieve link click statistics for.
   */
  domainId?: number;
  /**
   * Ids
   * @description List of link IDs to get click counts for.
   */
  ids?: string[];
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_DOMAINS_LINK_CLICKS tool output.
 */
type SHORT_IO_GET_DOMAINS_LINK_CLICKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clicks
       * @description Mapping of link identifiers to their respective click counts.
       */
      clicks: {
          [key: string]: number;
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
 * Type of SHORT_IO's SHORT_IO_GET_DOMAINS_PATHS tool input.
 */
type SHORT_IO_GET_DOMAINS_PATHS_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain whose path statistics will be retrieved.
   */
  domainId?: number;
  /**
   * End Date
   * Format: date
   * @description End date (YYYY-MM-DD) for custom period; required if period is 'custom'.
   * @default null
   */
  endDate: string | null;
  /**
   * Period
   * @description Time interval for which to retrieve the most popular paths. Use 'custom' to supply startDate and endDate.
   * @default last30
   * @enum {string}
   */
  period: "custom" | "today" | "yesterday" | "total" | "week" | "month" | "lastmonth" | "last7" | "last30";
  /**
   * Start Date
   * Format: date
   * @description Start date (YYYY-MM-DD) for custom period; required if period is 'custom'.
   * @default null
   */
  startDate: string | null;
  /**
   * Tz
   * @description Timezone name for date boundaries (e.g., 'UTC', 'America/New_York').
   * @default UTC
   */
  tz: string | null;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_DOMAINS_PATHS tool output.
 */
type SHORT_IO_GET_DOMAINS_PATHS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Paths
       * @description List of path statistics ordered by descending popularity.
       */
      paths: {
          /**
           * Path
           * @description Short URL path (e.g., '/abc123').
           */
          path: string;
          /**
           * Score
           * @description Number of clicks recorded for this path.
           */
          score: number;
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
 * Type of SHORT_IO's SHORT_IO_GET_LINKS_LIST tool input.
 */
type SHORT_IO_GET_LINKS_LIST_INPUT = {
  /**
   * Domain Id
   * @description ID of the domain to list links from
   * @default null
   */
  domain_id: string | null;
  /**
   * Limit
   * @description Maximum number of links to return (1-100, default 50)
   * @default null
   */
  limit: number | null;
  /**
   * Link Type
   * @description Filter by link type: 'short' or 'cloaked'
   * @default null
   * @enum {string|null}
   */
  link_type: "short" | "cloaked" | null;
  /**
   * Offset
   * @description Number of links to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sorting order: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Search
   * @description Search by original or short URL substring
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field to sort by: 'created_at' or 'clicks'
   * @default null
   * @enum {string|null}
   */
  sort: "created_at" | "clicks" | null;
  /**
   * Tag
   * @description Filter links by a specific tag
   * @default null
   */
  tag: string | null;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINKS_LIST tool output.
 */
type SHORT_IO_GET_LINKS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description List of matching short links
       */
      links: {
          /**
           * Clicks
           * @description Total number of clicks recorded for the link
           * @default 0
           */
          clicks: number | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the link was created
           */
          createdAt: string;
      }[];
      /**
       * Total
       * @description Total number of links matching the filters
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
 * Type of SHORT_IO's SHORT_IO_GET_LINK_INFO_BY_LINK_ID tool input.
 */
type SHORT_IO_GET_LINK_INFO_BY_LINK_ID_INPUT = {
  /**
   * Domain Id
   * @description Optional custom domain ID to apply (if using multiple domains).
   * @default null
   */
  domain_id: string | null;
  /**
   * Link Id
   * @description The unique identifier of the short link.
   */
  link_id?: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_INFO_BY_LINK_ID tool output.
 */
type SHORT_IO_GET_LINK_INFO_BY_LINK_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clicks
       * @description Number of clicks on the link.
       * @default null
       */
      clicks: number | null;
      /**
       * Cloaking
       * @description Indicates whether link cloaking is enabled.
       */
      cloaking: boolean;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format.
       */
      createdAt: string;
      /**
       * Domain
       * @description Associated domain for the link.
       */
      domain: string;
      /**
       * Expires At
       * @description Expiration date/time in ISO 8601 format, if set.
       * @default null
       */
      expiresAt: string | null;
      /**
       * Id
       * @description Unique identifier for the link.
       */
      id: string;
      /**
       * Organization Id
       * @description Organization ID to which the link belongs.
       * @default null
       */
      organizationId: string | null;
      /**
       * Original Url
       * @description Original destination URL.
       */
      originalURL: string;
      /**
       * Secure
       * @description Indicates whether the link uses HTTPS.
       */
      secure: boolean;
      /**
       * Short Url
       * @description Shortened URL.
       */
      shortURL: string;
      /**
       * Tags
       * @description Tags associated with the link.
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Title of the link, if set.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format, if set.
       * @default null
       */
      updatedAt: string | null;
      /**
       * Utm Campaign
       * @description UTM campaign parameter, if set.
       * @default null
       */
      utmCampaign: string | null;
      /**
       * Utm Content
       * @description UTM content parameter, if set.
       * @default null
       */
      utmContent: string | null;
      /**
       * Utm Medium
       * @description UTM medium parameter, if set.
       * @default null
       */
      utmMedium: string | null;
      /**
       * Utm Source
       * @description UTM source parameter, if set.
       * @default null
       */
      utmSource: string | null;
      /**
       * Utm Term
       * @description UTM term parameter, if set.
       * @default null
       */
      utmTerm: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_INFO_BY_PATH tool input.
 */
type SHORT_IO_GET_LINK_INFO_BY_PATH_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain under which the short link resides.
   */
  domain_id?: string;
  /**
   * Path
   * @description Short link path segment (the part after the domain) to look up.
   */
  path?: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_INFO_BY_PATH tool output.
 */
type SHORT_IO_GET_LINK_INFO_BY_PATH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clicks
       * @description Total number of clicks recorded for this link.
       * @default null
       */
      clicks: number | null;
      /**
       * Cloaking
       * @description Indicates whether link cloaking is enabled.
       */
      cloaking: boolean;
      /**
       * Created At
       * @description ISO8601 timestamp when the link was created.
       */
      createdAt: string;
      /**
       * Domain
       * @description Associated domain of the link.
       */
      domain: string;
      /**
       * Expires At
       * @description Expiration timestamp in ISO8601 format, if set.
       * @default null
       */
      expiresAt: string | null;
      /**
       * Id
       * @description Unique identifier of the link.
       */
      id: string;
      /**
       * Organization Id
       * @description Organization ID to which the link belongs.
       * @default null
       */
      organizationId: string | null;
      /**
       * Original Url
       * @description Original destination URL.
       */
      originalURL: string;
      /**
       * Secure
       * @description Indicates whether the link uses HTTPS.
       */
      secure: boolean;
      /**
       * Short Url
       * @description Shortened URL including domain and path.
       */
      shortURL: string;
      /**
       * Tags
       * @description List of tags associated with the link.
       * @default null
       */
      tags: string[] | null;
      /**
       * Title
       * @description Title of the link, if set.
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the link was last updated.
       * @default null
       */
      updatedAt: string | null;
      /**
       * Utm Campaign
       * @description UTM campaign parameter, if set.
       * @default null
       */
      utmCampaign: string | null;
      /**
       * Utm Content
       * @description UTM content parameter, if set.
       * @default null
       */
      utmContent: string | null;
      /**
       * Utm Medium
       * @description UTM medium parameter, if set.
       * @default null
       */
      utmMedium: string | null;
      /**
       * Utm Source
       * @description UTM source parameter, if set.
       * @default null
       */
      utmSource: string | null;
      /**
       * Utm Term
       * @description UTM term parameter, if set.
       * @default null
       */
      utmTerm: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES tool input.
 */
type SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the branded domain where the link is hosted.
   */
  domainId?: number;
  /**
   * Link Id
   * @description The unique identifier of the short link to retrieve OpenGraph properties for.
   */
  linkId?: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES tool output.
 */
type SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Og Description
       * @description The OpenGraph description of the link.
       * @default null
       */
      ogDescription: string | null;
      /**
       * Og Image
       * @description The URL of the OpenGraph image for the link.
       * @default null
       */
      ogImage: string | null;
      /**
       * Og Site Name
       * @description The site name used in OpenGraph metadata.
       * @default null
       */
      ogSiteName: string | null;
      /**
       * Og Title
       * @description The OpenGraph title of the link.
       * @default null
       */
      ogTitle: string | null;
      /**
       * Og Type
       * @description The OpenGraph type (e.g., 'article', 'website').
       * @default null
       */
      ogType: string | null;
      /**
       * Og Url
       * @description The canonical URL used in OpenGraph metadata.
       * @default null
       */
      ogUrl: string | null;
  } & {
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
 * Type of SHORT_IO's SHORT_IO_GET_LINK_PERMISSIONS tool input.
 */
type SHORT_IO_GET_LINK_PERMISSIONS_INPUT = {
  /**
   * Domain Id
   * @description ID of the domain the link belongs to
   */
  domain_id?: string;
  /**
   * Link Id
   * @description ID of the short link to list permissions for
   */
  link_id?: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_PERMISSIONS tool output.
 */
type SHORT_IO_GET_LINK_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Permissions
       * @description List of permission entries for the link
       */
      permissions: {
          /**
           * Created At
           * @description Timestamp when permission was granted
           * @default null
           */
          createdAt: string | null;
          /**
           * Permission
           * @description Type of permission assigned to the user
           */
          permission: string;
          /**
           * User Id
           * @description ID of the user with permission
           */
          userId: string;
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
 * Type of SHORT_IO's SHORT_IO_GET_LINK_REGIONS tool input.
 */
type SHORT_IO_GET_LINK_REGIONS_INPUT = {
  /**
   * Link Id
   * @description Unique identifier of the link to fetch region-targeting rules for
   */
  linkId?: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_REGIONS tool output.
 */
type SHORT_IO_GET_LINK_REGIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Regions
       * @description List of region-based targeting rules
       */
      regions: {
          /**
           * Country
           * @description ISO 3166-1 alpha-2 country code for targeting
           */
          country: string;
          /**
           * Created At
           * @description Timestamp when the rule was created (ISO 8601)
           * @default null
           */
          createdAt: string | null;
          /**
           * Id
           * @description Unique identifier of the region rule
           */
          id: number;
          /**
           * Link Id
           * @description ID of the link to which this rule applies
           */
          linkId: string;
          /**
           * Original Url
           * @description Target URL for this region
           */
          originalUrl: string;
          /**
           * Region
           * @description ISO 3166-2 subdivision code for targeting
           */
          region: string;
          /**
           * Updated At
           * @description Timestamp when the rule was last updated (ISO 8601)
           * @default null
           */
          updatedAt: string | null;
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
 * Type of SHORT_IO's SHORT_IO_GET_LINK_REGION_LIST_COUNTRY tool input.
 */
type SHORT_IO_GET_LINK_REGION_LIST_COUNTRY_INPUT = {
  /**
   * Country
   * @description Country code in ISO 3166-1 alpha-2 format
   */
  country?: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_REGION_LIST_COUNTRY tool output.
 */
type SHORT_IO_GET_LINK_REGION_LIST_COUNTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Regions
       * @description List of region objects for the country
       */
      regions: {
          /**
           * Code
           * @description Region code, e.g., 'CA' for California
           */
          code: string;
          /**
           * Name
           * @description Human-readable region name
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
 * Type of SHORT_IO's SHORT_IO_GET_LINK_STATISTICS tool input.
 */
type SHORT_IO_GET_LINK_STATISTICS_INPUT = {
  /**
   * Clicks Chart Interval
   * @description Granularity for click statistics chart; one of hour, day, week, month.
   * @default null
   * @enum {string|null}
   */
  clicksChartInterval: "hour" | "day" | "week" | "month" | null;
  /**
   * End Date
   * Format: date
   * @description End date for custom interval (YYYY-MM-DD); required if period is 'custom'.
   * @default null
   */
  endDate: string | null;
  /**
   * Link Id
   * @description Unique identifier of the short link.
   */
  linkId?: string;
  /**
   * Period
   * @description Time interval for statistics; defaults to last30. Use 'custom' for custom dates.
   * @default last30
   * @enum {string}
   */
  period: "custom" | "today" | "yesterday" | "total" | "week" | "month" | "lastmonth" | "last7" | "last30";
  /**
   * Skip Tops
   * @description Whether to skip top referrer records; defaults to false.
   * @default false
   */
  skipTops: boolean | null;
  /**
   * Start Date
   * Format: date
   * @description Start date for custom interval (YYYY-MM-DD); required if period is 'custom'.
   * @default null
   */
  startDate: string | null;
  /**
   * Tz
   * @description IANA timezone for grouping; defaults to UTC.
   * @default UTC
   */
  tz: string | null;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_STATISTICS tool output.
 */
type SHORT_IO_GET_LINK_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Click Statistics
       * @description Chart data for clicks over time.
       */
      clickStatistics: {
          /**
           * Datasets
           * @description Chart datasets.
           */
          datasets: {
              /**
               * Data
               * @description List of chart data points.
               */
              data: {
                  /**
                   * X
                   * Format: date-time
                   * @description Timestamp of this data point.
                   */
                  x: string;
                  /**
                   * Y
                   * @description Click count at this timestamp.
                   */
                  y: number;
              }[];
          }[];
      };
      /**
       * Human Clicks
       * @description Total human clicks (excludes bots).
       */
      humanClicks: number;
      /**
       * Human Clicks Change
       * @description Percentage change in human clicks.
       */
      humanClicksChange: string;
      /**
       * Interval
       * @description Current and previous interval timestamps.
       */
      interval: {
          /**
           * End Date
           * Format: date-time
           * @description Interval end timestamp.
           */
          endDate: string;
          /**
           * Prev End Date
           * Format: date-time
           * @description Previous interval end timestamp.
           */
          prevEndDate: string;
          /**
           * Prev Start Date
           * Format: date-time
           * @description Previous interval start timestamp.
           */
          prevStartDate: string;
          /**
           * Start Date
           * Format: date-time
           * @description Interval start timestamp.
           */
          startDate: string;
      };
      /**
       * Referer
       * @description Top referrer records.
       */
      referer: {
          /**
           * Clicks
           * @description Number of clicks from this referrer.
           */
          clicks: number;
          /**
           * Referer
           * @description Referrer source (e.g., domain or URL).
           */
          referer: string;
      }[];
      /**
       * Total Clicks
       * @description Total number of clicks.
       */
      totalClicks: number;
      /**
       * Total Clicks Change
       * @description Percentage change in total clicks.
       */
      totalClicksChange: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_TWEETBOT tool input.
 */
type SHORT_IO_GET_LINK_TWEETBOT_INPUT = {
  /**
   * Domain
   * @description Domain hostname to create the short link on.
   */
  domain?: string;
  /**
   * Original Url
   * @description Original URL to shorten.
   */
  originalURL?: string;
  /**
   * Path
   * @description Custom path for the short link (optional).
   * @default null
   */
  path: string | null;
  /**
   * Title
   * @description Title metadata for the link (optional).
   * @default null
   */
  title: string | null;
  /**
   * Url Only
   * @description If true, returns only the URL string instead of full payload.
   * @default null
   */
  urlOnly: boolean | null;
};

/**
 * Type of SHORT_IO's SHORT_IO_GET_LINK_TWEETBOT tool output.
 */
type SHORT_IO_GET_LINK_TWEETBOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description The newly created short URL.
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
 * Type of SHORT_IO's SHORT_IO_POST_DOMAINS_BY_INTERVAL tool input.
 */
type SHORT_IO_POST_DOMAINS_BY_INTERVAL_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain to fetch statistics for.
   */
  domainId?: number;
  /**
   * End Date
   * Format: date
   * @description End date (YYYY-MM-DD) for custom interval; required if period is 'custom'.
   * @default null
   */
  endDate: string | null;
  /**
   * Period
   * @description Time interval for statistics. Defaults to 'last30'. Use 'custom' to specify a start and end date.
   * @default last30
   * @enum {string}
   */
  period: "custom" | "today" | "yesterday" | "total" | "week" | "month" | "lastmonth" | "last7" | "last30";
  /**
   * Start Date
   * Format: date
   * @description Start date (YYYY-MM-DD) for custom interval; required if period is 'custom'.
   * @default null
   */
  startDate: string | null;
  /**
   * Tz
   * @description IANA timezone name for interval boundaries; defaults to 'UTC'.
   * @default UTC
   */
  tz: string;
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_DOMAINS_BY_INTERVAL tool output.
 */
type SHORT_IO_POST_DOMAINS_BY_INTERVAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Click Statistics
       * @description List of click counts keyed by interval timestamps.
       */
      clickStatistics: {
          /**
           * X
           * Format: date-time
           * @description ISO 8601 timestamp marking the start of the interval.
           */
          x: string;
          /**
           * Y
           * @description Number of clicks recorded in this interval.
           */
          y: number;
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
 * Type of SHORT_IO's SHORT_IO_POST_DOMAINS_LAST_CLICKS tool input.
 */
type SHORT_IO_POST_DOMAINS_LAST_CLICKS_INPUT = {
  /**
   * After Date
   * Format: date
   * @description Pagination: return events after this date.
   * @default null
   */
  afterDate: string | null;
  /**
   * Before Date
   * Format: date
   * @description Pagination: return events before this date.
   * @default null
   */
  beforeDate: string | null;
  /**
   * Domain Id
   * @description Identifier of the domain to fetch click events for.
   */
  domainId?: number;
  /**
   * End Date
   * Format: date
   * @description End date for 'custom' period (YYYY-MM-DD).
   * @default null
   */
  endDate: string | null;
  /**
   * ExcludeFilters
   * @description Filters to exclude specific click events.
   * @default null
   */
  exclude: {
      /**
       * Browsers
       * @description List of browser names to exclude.
       * @default null
       */
      browsers: string[] | null;
  } | null;
  /**
   * IncludeFilters
   * @description Filters to include specific click events.
   * @default null
   */
  include: {
      /**
       * Human
       * @description Whether to include only human clicks.
       * @default null
       */
      human: boolean | null;
  } | null;
  /**
   * Limit
   * @description Maximum number of click events to retrieve; defaults to 30.
   * @default 30
   */
  limit: number | null;
  /**
   * Period
   * @description Preset time interval; use 'custom' with startDate and endDate.
   * @default last30
   * @enum {string}
   */
  period: "custom" | "today" | "yesterday" | "total" | "week" | "month" | "lastmonth" | "last7" | "last30";
  /**
   * Start Date
   * Format: date
   * @description Start date for 'custom' period (YYYY-MM-DD).
   * @default null
   */
  startDate: string | null;
  /**
   * Tz
   * @description IANA timezone for grouping; defaults to UTC.
   * @default UTC
   */
  tz: string | null;
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_DOMAINS_LAST_CLICKS tool output.
 */
type SHORT_IO_POST_DOMAINS_LAST_CLICKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clicks
       * @description List of raw click events.
       */
      clicks: {
          /**
           * Ab Path
           * @description A/B test path identifier, if any.
           * @default null
           */
          ab_path: string | null;
          /**
           * Browser
           * @description Browser name of the client.
           */
          browser: string;
          /**
           * Browser Version
           * @description Version of the browser.
           */
          browser_version: string;
          /**
           * Country
           * @description Country code of the client.
           */
          country: string;
          /**
           * Dt
           * @description Timestamp of the click event.
           */
          dt: string;
          /**
           * Goal Completed
           * @description Completed goal identifier, if any.
           * @default null
           */
          goal_completed: string | null;
          /**
           * Host
           * @description Hostname of the clicked URL.
           */
          host: string;
          /**
           * Human
           * @description Whether the click is human-generated.
           */
          human: boolean;
          /**
           * Ip
           * @description IP address of the client.
           */
          ip: string;
          /**
           * Lcpath
           * @description Click path identifier.
           */
          lcpath: string;
          /**
           * Method
           * @description HTTP method used for the click.
           */
          method: string;
          /**
           * Os
           * @description Operating system of the client.
           */
          os: string;
          /**
           * Path
           * @description Path component of the clicked URL.
           */
          path: string;
          /**
           * Proto
           * @description Protocol used for redirection (e.g., https).
           */
          proto: string;
          /**
           * Ref
           * @description Referrer URL (if any).
           */
          ref: string;
          /**
           * Refhost
           * @description Host of the referrer URL.
           */
          refhost: string;
          /**
           * Social
           * @description Social network referrer, if any.
           */
          social: string;
          /**
           * St
           * @description HTTP status code returned.
           */
          st: number;
          /**
           * Ua
           * @description User-Agent string of the client.
           */
          ua: string;
          /**
           * Url
           * @description Full URL that was clicked.
           */
          url: string;
          /**
           * Utm Campaign
           * @description UTM campaign parameter.
           * @default null
           */
          utm_campaign: string | null;
          /**
           * Utm Medium
           * @description UTM medium parameter.
           * @default null
           */
          utm_medium: string | null;
          /**
           * Utm Source
           * @description UTM source parameter.
           * @default null
           */
          utm_source: string | null;
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
 * Type of SHORT_IO's SHORT_IO_POST_DOMAINS_TOP tool input.
 */
type SHORT_IO_POST_DOMAINS_TOP_INPUT = {
  /**
   * Column
   * @description Name of the column to rank by click count (e.g., 'path', 'country', 'device').
   */
  column?: string;
  /**
   * Domain Id
   * @description Identifier of the domain for which to retrieve top column values.
   */
  domainId?: number;
  /**
   * Limit
   * @description Maximum number of top values to return; must be at least 1.
   * @default 10
   */
  limit: number | null;
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_DOMAINS_TOP tool output.
 */
type SHORT_IO_POST_DOMAINS_TOP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Top
       * @description List of top column values with their respective click counts, ordered descending.
       */
      top: {
          /**
           * Count
           * @description Click count for this value.
           */
          count: number;
          /**
           * Value
           * @description Value of the specified column.
           */
          value: string;
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
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_ARCHIVE_BULK tool input.
 */
type SHORT_IO_POST_LINKS_ARCHIVE_BULK_INPUT = {
  /**
   * Link Ids
   * @description List of short link IDs to archive in bulk.
   */
  linkIds?: string[];
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_ARCHIVE_BULK tool output.
 */
type SHORT_IO_POST_LINKS_ARCHIVE_BULK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the bulk archive operation was successful.
       */
      success: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_BULK tool input.
 */
type SHORT_IO_POST_LINKS_BULK_INPUT = {
  /**
   * Allow Duplicates
   * @description Whether duplicate links are allowed (defaults to false).
   * @default false
   */
  allowDuplicates: boolean | null;
  /**
   * Domain
   * @description Domain under which the short links will be created.
   */
  domain?: string;
  /**
   * Links
   * @description List of link objects to be shortened (up to 1000 items).
   */
  links?: {
      /**
       * Original Url
       * @description The original URL to be shortened.
       */
      originalURL: string;
      /**
       * Path
       * @description Custom path for the short link (must be unique within the domain).
       * @default null
       */
      path: string | null;
      /**
       * Ttl
       * @description Time-to-live for the short link in ISO 8601 duration format, e.g., 'P1D'.
       * @default null
       */
      ttl: string | null;
  }[];
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_BULK tool output.
 */
type SHORT_IO_POST_LINKS_BULK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description List of created short link objects.
       */
      links: {
          /**
           * Domain Id
           * @description ID of the domain under which the link was created.
           */
          DomainId: number;
          /**
           * Owner Id
           * @description ID of the owner of the link.
           */
          OwnerId: number;
          /**
           * Archived
           * @description Whether the link is archived.
           */
          archived: boolean;
          /**
           * Cloaking
           * @description Whether cloaking is enabled for the link.
           */
          cloaking: boolean;
          /**
           * Created At
           * @description Timestamp when the link was created (ISO 8601).
           */
          createdAt: string;
          /**
           * Duplicate
           * @description Whether the link is a duplicate.
           */
          duplicate: boolean;
          /**
           * Id
           * @description Unique identifier of the link.
           */
          id: string;
          /**
           * Id String
           * @description String representation of the link ID.
           */
          idString: string;
          /**
           * Original Url
           * @description The original URL that was shortened.
           */
          originalURL: string;
          /**
           * Path
           * @description Path of the short link.
           */
          path: string;
          /**
           * Secure Short Url
           * @description The HTTPS version of the shortened URL.
           */
          secureShortURL: string;
          /**
           * Short Url
           * @description The shortened URL.
           */
          shortURL: string;
          /**
           * Skip Qs
           * @description Whether query string parameters are skipped.
           */
          skipQS: boolean;
          /**
           * Success
           * @description Whether the link creation was successful.
           */
          success: boolean;
          /**
           * Tags
           * @description Tags associated with the link.
           */
          tags: string[];
          /**
           * Ttl
           * @description Time-to-live of the short link (ISO 8601).
           * @default null
           */
          ttl: string | null;
          /**
           * Updated At
           * @description Timestamp when the link was last updated (ISO 8601).
           */
          updatedAt: string;
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
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_QR_BULK tool input.
 */
type SHORT_IO_POST_LINKS_QR_BULK_INPUT = {
  /**
   * Background Color
   * @description Background color for QR code (hex code or RGB).
   * @default null
   */
  backgroundColor: string | null;
  /**
   * Color
   * @description Foreground color for QR code (hex code or RGB).
   * @default null
   */
  color: string | null;
  /**
   * Domain Id
   * @description Optional domain ID to override default domain settings.
   * @default null
   */
  domainId: string | null;
  /**
   * Link Ids
   * @description List of up to 150 link IDs to generate QR codes for.
   */
  linkIds?: string[];
  /**
   * No Excavate
   * @description If true, disables the 'eye' excavation in the QR code.
   * @default null
   */
  noExcavate: boolean | null;
  /**
   * Size
   * @description Size of the QR code (1-99).
   * @default null
   */
  size: number | null;
  /**
   * Type
   * @description Image format for QR codes. Defaults to 'png'.
   * @default png
   * @enum {string}
   */
  type: "png" | "svg";
  /**
   * Use Domain Settings
   * @description Whether to apply domain-level QR settings. Defaults to true.
   * @default true
   */
  useDomainSettings: boolean;
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_QR_BULK tool output.
 */
type SHORT_IO_POST_LINKS_QR_BULK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary ZIP payload of QR code images.
       */
      content: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_UNARCHIVE_BULK tool input.
 */
type SHORT_IO_POST_LINKS_UNARCHIVE_BULK_INPUT = {
  /**
   * Link Ids
   * @description List of short link IDs to unarchive
   */
  linkIds?: string[];
};

/**
 * Type of SHORT_IO's SHORT_IO_POST_LINKS_UNARCHIVE_BULK tool output.
 */
type SHORT_IO_POST_LINKS_UNARCHIVE_BULK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the bulk unarchive operation was successful
       */
      success: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SHORT_IO".
 */
export type SHORT_IO_TOOL_INPUTS = {
  GET_DOMAINS_LINK_CLICKS: SHORT_IO_GET_DOMAINS_LINK_CLICKS_INPUT
  GET_DOMAINS_PATHS: SHORT_IO_GET_DOMAINS_PATHS_INPUT
  GET_LINKS_LIST: SHORT_IO_GET_LINKS_LIST_INPUT
  GET_LINK_INFO_BY_LINK_ID: SHORT_IO_GET_LINK_INFO_BY_LINK_ID_INPUT
  GET_LINK_INFO_BY_PATH: SHORT_IO_GET_LINK_INFO_BY_PATH_INPUT
  GET_LINK_OPEN_GRAPH_PROPERTIES: SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES_INPUT
  GET_LINK_PERMISSIONS: SHORT_IO_GET_LINK_PERMISSIONS_INPUT
  GET_LINK_REGIONS: SHORT_IO_GET_LINK_REGIONS_INPUT
  GET_LINK_REGION_LIST_COUNTRY: SHORT_IO_GET_LINK_REGION_LIST_COUNTRY_INPUT
  GET_LINK_STATISTICS: SHORT_IO_GET_LINK_STATISTICS_INPUT
  GET_LINK_TWEETBOT: SHORT_IO_GET_LINK_TWEETBOT_INPUT
  POST_DOMAINS_BY_INTERVAL: SHORT_IO_POST_DOMAINS_BY_INTERVAL_INPUT
  POST_DOMAINS_LAST_CLICKS: SHORT_IO_POST_DOMAINS_LAST_CLICKS_INPUT
  POST_DOMAINS_TOP: SHORT_IO_POST_DOMAINS_TOP_INPUT
  POST_LINKS_ARCHIVE_BULK: SHORT_IO_POST_LINKS_ARCHIVE_BULK_INPUT
  POST_LINKS_BULK: SHORT_IO_POST_LINKS_BULK_INPUT
  POST_LINKS_QR_BULK: SHORT_IO_POST_LINKS_QR_BULK_INPUT
  POST_LINKS_UNARCHIVE_BULK: SHORT_IO_POST_LINKS_UNARCHIVE_BULK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SHORT_IO".
 */
export type SHORT_IO_TOOL_OUTPUTS = {
  GET_DOMAINS_LINK_CLICKS: SHORT_IO_GET_DOMAINS_LINK_CLICKS_OUTPUT
  GET_DOMAINS_PATHS: SHORT_IO_GET_DOMAINS_PATHS_OUTPUT
  GET_LINKS_LIST: SHORT_IO_GET_LINKS_LIST_OUTPUT
  GET_LINK_INFO_BY_LINK_ID: SHORT_IO_GET_LINK_INFO_BY_LINK_ID_OUTPUT
  GET_LINK_INFO_BY_PATH: SHORT_IO_GET_LINK_INFO_BY_PATH_OUTPUT
  GET_LINK_OPEN_GRAPH_PROPERTIES: SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES_OUTPUT
  GET_LINK_PERMISSIONS: SHORT_IO_GET_LINK_PERMISSIONS_OUTPUT
  GET_LINK_REGIONS: SHORT_IO_GET_LINK_REGIONS_OUTPUT
  GET_LINK_REGION_LIST_COUNTRY: SHORT_IO_GET_LINK_REGION_LIST_COUNTRY_OUTPUT
  GET_LINK_STATISTICS: SHORT_IO_GET_LINK_STATISTICS_OUTPUT
  GET_LINK_TWEETBOT: SHORT_IO_GET_LINK_TWEETBOT_OUTPUT
  POST_DOMAINS_BY_INTERVAL: SHORT_IO_POST_DOMAINS_BY_INTERVAL_OUTPUT
  POST_DOMAINS_LAST_CLICKS: SHORT_IO_POST_DOMAINS_LAST_CLICKS_OUTPUT
  POST_DOMAINS_TOP: SHORT_IO_POST_DOMAINS_TOP_OUTPUT
  POST_LINKS_ARCHIVE_BULK: SHORT_IO_POST_LINKS_ARCHIVE_BULK_OUTPUT
  POST_LINKS_BULK: SHORT_IO_POST_LINKS_BULK_OUTPUT
  POST_LINKS_QR_BULK: SHORT_IO_POST_LINKS_QR_BULK_OUTPUT
  POST_LINKS_UNARCHIVE_BULK: SHORT_IO_POST_LINKS_UNARCHIVE_BULK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SHORT_IO toolkit.
 */
export const SHORT_IO = {
  slug: "short_io",
  tools: {
    /**
     * Tool to get click statistics for all links in a domain. use when you need aggregated click counts for specific link ids within a branded domain. example: "get click counts for links ['id1','id2'] in domain '12345'".
     */
    GET_DOMAINS_LINK_CLICKS: "SHORT_IO_GET_DOMAINS_LINK_CLICKS",
    /**
     * Tool to list the most popular paths in a domain over time. use after confirming a valid domain id to analyze which short url paths under that domain have received the most clicks in the given interval.
     */
    GET_DOMAINS_PATHS: "SHORT_IO_GET_DOMAINS_PATHS",
    /**
     * Tool to list short links on a domain with optional filters. use after confirming the domain to retrieve or search links by criteria.
     */
    GET_LINKS_LIST: "SHORT_IO_GET_LINKS_LIST",
    /**
     * Tool to get detailed info for a link by id. use when you need to retrieve all metadata for a specific short url after creation.
     */
    GET_LINK_INFO_BY_LINK_ID: "SHORT_IO_GET_LINK_INFO_BY_LINK_ID",
    /**
     * Tool to get link info by its path and domain. use when you need to look up a branded short link by its path within a specific domain.
     */
    GET_LINK_INFO_BY_PATH: "SHORT_IO_GET_LINK_INFO_BY_PATH",
    /**
     * Tool to retrieve opengraph settings for a link. use after creating or updating a link to verify its social metadata.
     */
    GET_LINK_OPEN_GRAPH_PROPERTIES: "SHORT_IO_GET_LINK_OPEN_GRAPH_PROPERTIES",
    /**
     * Tool to list all user permissions for a link. use after confirming domain and link ids to fetch current access assignments. example: "list permissions for link 'abcde123' in domain '12345'".
     */
    GET_LINK_PERMISSIONS: "SHORT_IO_GET_LINK_PERMISSIONS",
    /**
     * Tool to get region-based targeting rules for a link. use after fetching country-level rules to retrieve more granular region overrides.
     */
    GET_LINK_REGIONS: "SHORT_IO_GET_LINK_REGIONS",
    /**
     * Tool to list all regions available for a country. use when targeting links by region within a specific country.
     */
    GET_LINK_REGION_LIST_COUNTRY: "SHORT_IO_GET_LINK_REGION_LIST_COUNTRY",
    /**
     * Tool to get click statistics for a specific link. use when you need detailed click metrics over a specified interval.
     */
    GET_LINK_STATISTICS: "SHORT_IO_GET_LINK_STATISTICS",
    /**
     * Tool to quickly create a link via query string (tweetbot). use when you cannot use the post create-link endpoint and need a simple get workaround.
     */
    GET_LINK_TWEETBOT: "SHORT_IO_GET_LINK_TWEETBOT",
    /**
     * Tool to retrieve domain statistics over a custom interval. use when you need time-series click data for a specific domain over a defined time window.
     */
    POST_DOMAINS_BY_INTERVAL: "SHORT_IO_POST_DOMAINS_BY_INTERVAL",
    /**
     * Tool to retrieve the latest raw click events for a domain. use when detailed clickstream data is needed.
     */
    POST_DOMAINS_LAST_CLICKS: "SHORT_IO_POST_DOMAINS_LAST_CLICKS",
    /**
     * Tool to retrieve top values of a specified column by click count. use after confirming domain id and choosing a column.
     */
    POST_DOMAINS_TOP: "SHORT_IO_POST_DOMAINS_TOP",
    /**
     * Tool to archive multiple links in one call. use when you need to deactivate or hide a set of short links at once.
     */
    POST_LINKS_ARCHIVE_BULK: "SHORT_IO_POST_LINKS_ARCHIVE_BULK",
    /**
     * Tool to create up to 1000 short links in one call. use when bulk shortening multiple urls.
     */
    POST_LINKS_BULK: "SHORT_IO_POST_LINKS_BULK",
    /**
     * Tool to generate qr codes for multiple links in bulk. use when you need to retrieve qr codes for several short links at once.
     */
    POST_LINKS_QR_BULK: "SHORT_IO_POST_LINKS_QR_BULK",
    /**
     * Tool to unarchive multiple links in bulk. use when you need to restore visibility of a set of previously archived short links at once.
     */
    POST_LINKS_UNARCHIVE_BULK: "SHORT_IO_POST_LINKS_UNARCHIVE_BULK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SHORT_IO".
 */
export type SHORT_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SHORT_IO".
 */
export type SHORT_IO_TRIGGER_EVENTS = {}
