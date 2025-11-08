// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FLUXGUARD's FLUXGUARD_ACKNOWLEDGE_ALERT tool input.
 */
type FLUXGUARD_ACKNOWLEDGE_ALERT_INPUT = {
  /**
   * Alert Id
   * @description Unique identifier of the alert to acknowledge
   */
  alert_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_ACKNOWLEDGE_ALERT tool output.
 */
type FLUXGUARD_ACKNOWLEDGE_ALERT_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response from Fluxguard API
   */
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
 * Type of FLUXGUARD's FLUXGUARD_ADD_PAGE tool input.
 */
type FLUXGUARD_ADD_PAGE_INPUT = {
  /**
   * Categories
   * @description List of category IDs to assign the new page to
   * @default null
   */
  categories: (number | string)[] | null;
  /**
   * Category Id
   * @description ID of a single category to assign the new page to
   * @default null
   */
  categoryId: number | null;
  /**
   * Category Name
   * @description Name of a single category to assign the new page to
   * @default null
   */
  categoryName: string | null;
  /**
   * Session Id
   * @description ID of the session containing the existing site; requires siteId
   * @default null
   */
  sessionId: number | null;
  /**
   * Site Id
   * @description ID of an existing site to add the page to; requires sessionId together
   * @default null
   */
  siteId: number | null;
  /**
   * Site Nickname
   * @description Nickname for the new site when creating via this request
   * @default null
   */
  siteNickname: string | null;
  /**
   * Url
   * Format: uri
   * @description URL of the page to monitor
   */
  url?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_ADD_PAGE tool output.
 */
type FLUXGUARD_ADD_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   * @example {
   *       "pageId": 300,
   *       "sessionId": 200,
   *       "siteId": 100
   *     }
   */
  data?: {
      /**
       * Page Id
       * @description ID of the newly added page
       */
      pageId: number | null;
      /**
       * Session Id
       * @description ID of the session containing the new page
       */
      sessionId: number | null;
      /**
       * Site Id
       * @description ID of the created or target site
       */
      siteId: number | null;
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
 * Type of FLUXGUARD's FLUXGUARD_CREATE_SITE_CATEGORY tool input.
 */
type FLUXGUARD_CREATE_SITE_CATEGORY_INPUT = {
  /**
   * Name
   * @description Name of the new site category
   */
  name?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_CREATE_SITE_CATEGORY tool output.
 */
type FLUXGUARD_CREATE_SITE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created site category
       */
      id: number | null;
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
 * Type of FLUXGUARD's FLUXGUARD_CREATE_WEBHOOK tool input.
 */
type FLUXGUARD_CREATE_WEBHOOK_INPUT = {
  /**
   * Url
   * Format: uri
   * @description The URL to POST change notifications to.
   */
  url?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_CREATE_WEBHOOK tool output.
 */
type FLUXGUARD_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the newly created webhook.
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
 * Type of FLUXGUARD's FLUXGUARD_DELETE_PAGE tool input.
 */
type FLUXGUARD_DELETE_PAGE_INPUT = {
  /**
   * Page Id
   * @description Identifier of the page to delete
   */
  page_id?: string;
  /**
   * Session Id
   * @description Identifier of the session under the site
   */
  session_id?: string;
  /**
   * Site Id
   * @description Identifier of the site to which the page belongs
   */
  site_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_DELETE_PAGE tool output.
 */
type FLUXGUARD_DELETE_PAGE_OUTPUT = {
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
 * Type of FLUXGUARD's FLUXGUARD_DELETE_SITE tool input.
 */
type FLUXGUARD_DELETE_SITE_INPUT = {
  /**
   * Site Id
   * @description Identifier of the site to delete
   */
  site_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_DELETE_SITE tool output.
 */
type FLUXGUARD_DELETE_SITE_OUTPUT = {
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
 * Type of FLUXGUARD's FLUXGUARD_DELETE_WEBHOOK tool input.
 */
type FLUXGUARD_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The unique identifier of the webhook to delete.
   */
  id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_DELETE_WEBHOOK tool output.
 */
type FLUXGUARD_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of FLUXGUARD's FLUXGUARD_GET_ACCOUNT_DATA tool input.
 */
type FLUXGUARD_GET_ACCOUNT_DATA_INPUT = object;

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_ACCOUNT_DATA tool output.
 */
type FLUXGUARD_GET_ACCOUNT_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Fluxguard organization account attributes
       */
      account: {
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
 * Type of FLUXGUARD's FLUXGUARD_GET_ALERT tool input.
 */
type FLUXGUARD_GET_ALERT_INPUT = {
  /**
   * Alert Id
   * @description Unique identifier of the alert to retrieve
   */
  alert_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_ALERT tool output.
 */
type FLUXGUARD_GET_ALERT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the alert was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the alert
       */
      id: string;
      /**
       * Message
       * @description Human-readable message describing the alert
       * @default null
       */
      message: string | null;
      /**
       * Page Id
       * @description ID of the page which triggered the alert
       */
      pageId: string;
      /**
       * Resolved At
       * @description ISO-8601 timestamp when the alert was resolved, if applicable
       * @default null
       */
      resolvedAt: string | null;
      /**
       * Site Id
       * @description ID of the site associated with this alert
       */
      siteId: string;
      /**
       * Status
       * @description Current status of the alert, e.g., active or resolved
       */
      status: string;
      /**
       * Type
       * @description Type or category of the alert
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
 * Type of FLUXGUARD's FLUXGUARD_GET_ALERTS tool input.
 */
type FLUXGUARD_GET_ALERTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of alerts to return (if supported)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset (if supported)
   * @default null
   */
  offset: number | null;
  /**
   * Page Id
   * @description Filter by page ID (if supported by API)
   * @default null
   */
  pageId: number | null;
  /**
   * Since
   * @description ISO 8601 start timestamp for filtering alerts
   * @default null
   */
  since: string | null;
  /**
   * Site Id
   * @description Filter by site ID (if supported by API)
   * @default null
   */
  siteId: number | null;
  /**
   * Status
   * @description Filter by alert status (detected/resolved) if supported
   * @default null
   */
  status: string | null;
  /**
   * Until
   * @description ISO 8601 end timestamp for filtering alerts
   * @default null
   */
  until: string | null;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_ALERTS tool output.
 */
type FLUXGUARD_GET_ALERTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alerts
       * @description List of alerts returned by the API
       */
      alerts: {
          /**
           * Change Type
           * @description Type of change detected
           */
          changeType: string;
          /**
           * Details
           * @description Additional details of the alert as a JSON object
           */
          details?: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the alert
           */
          id: number | null;
          /**
           * Page Id
           * @description ID of the page that generated this alert
           */
          pageId: number | null;
          /**
           * Site Id
           * @description ID of the site that generated this alert
           */
          siteId: number | null;
          /**
           * Timestamp
           * Format: date-time
           * @description Time when the alert was generated in ISO8601 format
           */
          timestamp: string;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_ALL_CATEGORIES tool input.
 */
type FLUXGUARD_GET_ALL_CATEGORIES_INPUT = object;

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_ALL_CATEGORIES tool output.
 */
type FLUXGUARD_GET_ALL_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description Mapping of category ID to category information
       */
      categories: {
          [key: string]: {
              /**
               * Forpages
               * @description Whether the category applies to pages
               * @default null
               */
              forPages: boolean | null;
              /**
               * Forsite
               * @description Whether the category applies to sites
               */
              forSite: boolean;
              /**
               * Name
               * @description Name of the category
               */
              name: string;
          } & {
              [key: string]: unknown;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_CHANGE tool input.
 */
type FLUXGUARD_GET_CHANGE_INPUT = {
  /**
   * Change Id
   * @description Unique identifier of the change to retrieve
   */
  change_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_CHANGE tool output.
 */
type FLUXGUARD_GET_CHANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Change
       * @description The retrieved change details as a JSON object
       */
      change: {
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
 * Type of FLUXGUARD's FLUXGUARD_GET_CHANGES tool input.
 */
type FLUXGUARD_GET_CHANGES_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return (pagination limit, 1-1000)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based pagination offset
   * @default null
   */
  offset: number | null;
  /**
   * Page Id
   * @description Filter changes by specific page ID within a site (string IDs are supported)
   * @default null
   */
  page_id: number | null;
  /**
   * Since
   * @description ISO 8601 datetime string to filter changes detected at or after this timestamp
   * @default null
   */
  since: string | null;
  /**
   * Site Id
   * @description Filter changes by monitored site ID (string IDs are supported)
   * @default null
   */
  site_id: number | null;
  /**
   * Status
   * @description Filter by change status: detected or resolved
   * @default null
   * @enum {string|null}
   */
  status: "detected" | "resolved" | null;
  /**
   * Until
   * @description ISO 8601 datetime string to filter changes detected at or before this timestamp
   * @default null
   */
  until: string | null;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_CHANGES tool output.
 */
type FLUXGUARD_GET_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changes
       * @description List of change records
       */
      changes: {
          /**
           * Change Id
           * @description Unique identifier for the change
           */
          change_id: number | null;
          /**
           * Detected At
           * @description ISO 8601 timestamp when change was detected
           */
          detected_at: string;
          /**
           * Diff Summary
           * @description Brief summary of the detected change
           * @default null
           */
          diff_summary: string | null;
          /**
           * Page Id
           * @description Page ID where the change was detected
           */
          page_id: number | null;
          /**
           * Site Id
           * @description Site ID where the change was detected
           */
          site_id: number | null;
          /**
           * Snapshot Ids
           * @description List of snapshot IDs before and after the change (may be empty if not available)
           */
          snapshot_ids: number[];
          /**
           * Status
           * @description Current status of the change
           * @enum {string}
           */
          status: "detected" | "resolved";
      }[];
      /**
       * Limit
       * @description Maximum items returned in this response
       * @default null
       */
      limit: number | null;
      /**
       * Offset
       * @description Pagination offset of this response
       * @default null
       */
      offset: number | null;
      /**
       * Total
       * @description Total number of matching changes
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
 * Type of FLUXGUARD's FLUXGUARD_GET_SAMPLE_WEBHOOK tool input.
 */
type FLUXGUARD_GET_SAMPLE_WEBHOOK_INPUT = object;

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_SAMPLE_WEBHOOK tool output.
 */
type FLUXGUARD_GET_SAMPLE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Flagged
       * @description AI flagged level (warning or serenity).
       */
      aiFlagged: string;
      /**
       * Alarms
       * @description List of alarms triggered.
       */
      alarms: ({
          /**
           * Name
           * @description The name of the alarm.
           */
          name: string;
          /**
           * Value
           * @description The value of the alarm.
           */
          value: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Captured At
       * @description The timestamp when the capture occurred.
       */
      capturedAt: string;
      /**
       * Comparison Type
       * @description Type of comparison (HTML, visual, text, network).
       */
      comparisonType: string;
      /**
       * Diff Summary
       * @description Summary of differences.
       * @default null
       */
      diffSummary: string | null;
      /**
       * Diff Url
       * Format: uri
       * @description URL to view the diff.
       */
      diffUrl: string;
      /**
       * File Base Url
       * Format: uri
       * @description Base URL for accessing files.
       */
      fileBaseUrl: string;
      /**
       * Files
       * @description Files related to captures and diffs.
       */
      files: {
          /**
           * Captures
           * @description Capture filenames grouped by type.
           */
          captures: {
              /**
               * Extra Data
               * @description Filename of the extra data capture.
               */
              extraData: string;
              /**
               * Html
               * @description Filename of the HTML capture.
               */
              html: string;
              /**
               * Net
               * @description Filename of the network capture.
               */
              net: string;
              /**
               * Nlp
               * @description Filename of the NLP capture.
               */
              nlp: string;
              /**
               * Txt
               * @description Filename of the text capture.
               */
              txt: string;
              /**
               * Visual
               * @description Filename of the visual capture.
               */
              visual: string;
          } & {
              [key: string]: unknown;
          };
          /**
           * Diffs
           * @description Diff filenames grouped by type.
           */
          diffs: {
              /**
               * Html
               * @description Filename of the HTML diff.
               */
              html: string;
              /**
               * Net
               * @description Indicator if network diff is present.
               */
              net: boolean;
              /**
               * Txt
               * @description Filename of the text diff.
               */
              txt: string;
              /**
               * Visual
               * @description Filename of the visual diff.
               */
              visual: string;
          } & {
              [key: string]: unknown;
          };
      } & {
          [key: string]: unknown;
      };
      /**
       * Final Url
       * Format: uri
       * @description The final URL after redirects.
       * @default null
       */
      finalUrl: string | null;
      /**
       * Org Id
       * @description The organization identifier.
       */
      orgId: string;
      /**
       * Org Name
       * @description The organization name.
       */
      orgName: string;
      /**
       * Page
       * @description Information about the page.
       */
      page: {
          /**
           * Id
           * @description The unique identifier of the page.
           */
          id: string;
          /**
           * Path
           * @description The path of the page.
           */
          path: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Page Categories
       * @description Categories applied to the page.
       */
      pageCategories: string[];
      /**
       * Session
       * @description Information about the session.
       */
      session: {
          /**
           * Id
           * @description The unique identifier of the session.
           */
          id: string;
          /**
           * Name
           * @description The name of the session.
           */
          name: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Site
       * @description Information about the site.
       */
      site: {
          /**
           * Id
           * @description The unique identifier of the site.
           */
          id: string;
          /**
           * Nickname
           * @description The nickname of the site.
           */
          nickname: string;
          /**
           * Origin
           * Format: uri
           * @description The origin URL of the site.
           */
          origin: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Site Categories
       * @description Categories applied to the site.
       */
      siteCategories: string[];
      /**
       * Status Code
       * @description HTTP status code of the response.
       */
      statusCode: number;
      /**
       * Summary
       * @description Summary of changes.
       * @default null
       */
      summary: string | null;
      /**
       * Title
       * @description The title of the page or capture.
       */
      title: string;
      /**
       * Url
       * Format: uri
       * @description The URL tested that triggered the webhook.
       */
      url: string;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_SITE tool input.
 */
type FLUXGUARD_GET_SITE_INPUT = {
  /**
   * Site Id
   * @description Unique identifier of the monitored site to retrieve.
   */
  site_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_SITE tool output.
 */
type FLUXGUARD_GET_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the site was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique identifier of the site.
       */
      id: string;
      /**
       * Name
       * @description Name or nickname of the site.
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Current status of the site.
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Timestamp when the site was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * Url
       * Format: uri
       * @description Origin/URL of the monitored site.
       * @default null
       */
      url: string | null;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_SITES tool input.
 */
type FLUXGUARD_GET_SITES_INPUT = {
  /**
   * Category Id
   * @description Optional category filter for sites (if supported by API)
   * @default null
   */
  categoryId: number | null;
  /**
   * Limit
   * @description Optional limit for number of sites returned
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Optional offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Optional search term to filter sites by name or URL
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Optional status filter for sites (if supported by API)
   * @default null
   */
  status: string | null;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_SITES tool output.
 */
type FLUXGUARD_GET_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sites
       * @description List of site objects returned by the API
       */
      sites: ({
          /**
           * Created At
           * @description Timestamp when the site was created
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique identifier of the site
           */
          id: number | null;
          /**
           * Name
           * @description Name of the site
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Current status of the site
           * @default null
           */
          status: string | null;
          /**
           * Updated At
           * @description Timestamp when the site was last updated
           * @default null
           */
          updated_at: string | null;
          /**
           * Url
           * Format: uri
           * @description URL of the site being monitored
           * @default null
           */
          url: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of FLUXGUARD's FLUXGUARD_GET_SNAPSHOT tool input.
 */
type FLUXGUARD_GET_SNAPSHOT_INPUT = {
  /**
   * Snapshot Id
   * @description Identifier of the snapshot to retrieve (actionId or captureId, as a plain value or as found inside URLs).
   */
  snapshot_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_SNAPSHOT tool output.
 */
type FLUXGUARD_GET_SNAPSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snapshot
       * @description Full details of the requested snapshot as returned by Fluxguard API.
       */
      snapshot: {
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
 * Type of FLUXGUARD's FLUXGUARD_GET_SNAPSHOTS tool input.
 */
type FLUXGUARD_GET_SNAPSHOTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return (if supported)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset (if supported)
   * @default null
   */
  offset: number | null;
  /**
   * Page Id
   * @description Filter by page ID (if supported)
   * @default null
   */
  pageId: number | null;
  /**
   * Since
   * @description ISO8601 start time filter (if supported)
   * @default null
   */
  since: string | null;
  /**
   * Site Id
   * @description Filter by site ID (if supported)
   * @default null
   */
  siteId: number | null;
  /**
   * Until
   * @description ISO8601 end time filter (if supported)
   * @default null
   */
  until: string | null;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_SNAPSHOTS tool output.
 */
type FLUXGUARD_GET_SNAPSHOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snapshots
       * @description List of snapshot objects returned by the Fluxguard API
       */
      snapshots: {
          [key: string]: unknown;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_USER tool input.
 */
type FLUXGUARD_GET_USER_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user to retrieve (ignored; FluxGuard has no public users endpoint).
   */
  user_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_USER tool output.
 */
type FLUXGUARD_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the user was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the user.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: string;
      /**
       * Name
       * @description Full name of the user.
       * @default null
       */
      name: string | null;
      /**
       * Role
       * @description Role assigned to the user.
       * @default null
       */
      role: string | null;
      /**
       * Status
       * @description Current status of the user, e.g., active or suspended.
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the user was last updated.
       * @default null
       */
      updated_at: string | null;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_USERS tool input.
 */
type FLUXGUARD_GET_USERS_INPUT = {
  /**
   * Limit
   * @description Optional limit for number of users returned
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Optional offset for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Role
   * @description Optional role filter (if supported by API)
   * @default null
   */
  role: string | null;
  /**
   * Search
   * @description Optional search term to filter users by name or email (if supported)
   * @default null
   */
  search: string | null;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_USERS tool output.
 */
type FLUXGUARD_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users returned by the API
       */
      users: ({
          /**
           * Created At
           * @description Timestamp when the user was created
           * @default null
           */
          createdAt: string | null;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * First Name
           * @description First name of the user
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: number | null;
          /**
           * Last Name
           * @description Last name of the user
           * @default null
           */
          lastName: string | null;
          /**
           * Role
           * @description Role of the user in the organization
           * @default null
           */
          role: string | null;
          /**
           * Updated At
           * @description Timestamp when the user was last updated
           * @default null
           */
          updatedAt: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of FLUXGUARD's FLUXGUARD_GET_WEBHOOK tool input.
 */
type FLUXGUARD_GET_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to retrieve.
   */
  webhook_id?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_WEBHOOK tool output.
 */
type FLUXGUARD_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the webhook was created
       */
      createdAt: string;
      /**
       * Enabled
       * @description Indicates if the webhook is active
       */
      enabled: boolean;
      /**
       * Event Types
       * @description List of event types that trigger this webhook
       */
      eventTypes: string[];
      /**
       * Headers
       * @description Custom headers included in the webhook request
       */
      headers?: {
          [key: string]: string;
      };
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the webhook was last updated
       * @default null
       */
      updatedAt: string | null;
      /**
       * Url
       * Format: uri
       * @description Target URL of the webhook
       */
      url: string;
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
 * Type of FLUXGUARD's FLUXGUARD_GET_WEBHOOKS tool input.
 */
type FLUXGUARD_GET_WEBHOOKS_INPUT = object;

/**
 * Type of FLUXGUARD's FLUXGUARD_GET_WEBHOOKS tool output.
 */
type FLUXGUARD_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks configured for the account
       */
      webhooks: ({
          /**
           * Created At
           * @description ISO-8601 timestamp when the webhook was created
           */
          createdAt: string;
          /**
           * Enabled
           * @description Indicates if the webhook is active
           */
          enabled: boolean;
          /**
           * Event Types
           * @description List of event types that trigger this webhook
           */
          eventTypes: string[];
          /**
           * Headers
           * @description Custom headers included in the webhook request
           */
          headers?: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the webhook was last updated
           * @default null
           */
          updatedAt: string | null;
          /**
           * Url
           * Format: uri
           * @description Target URL of the webhook
           */
          url: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of FLUXGUARD's FLUXGUARD_WEBHOOK_NOTIFICATION tool input.
 */
type FLUXGUARD_WEBHOOK_NOTIFICATION_INPUT = {
  /**
   * Payload
   * @description Payload containing change details
   */
  payload?: {
      /**
       * Ai Flagged
       * @description AI assessment of change significance
       * @enum {string}
       */
      aiFlagged: "warning" | "serenity";
      /**
       * Alarms
       * @description List of triggered alarms (name/value)
       * @default null
       */
      alarms: {
          /**
           * Name
           * @description Alarm metric name
           */
          name: string;
          /**
           * Value
           * @description Alarm metric value
           */
          value: string;
      }[] | null;
      /**
       * Captured At
       * @description Capture timestamp in ISO 8601
       */
      capturedAt: string;
      /**
       * Comparison Type
       * @description Type of comparison performed
       * @enum {string}
       */
      comparisonType: "HTML" | "visual" | "text" | "network";
      /**
       * Diff Summary
       * @description AI-generated diff summary, if enabled
       * @default null
       */
      diffSummary: string | null;
      /**
       * Diff Url
       * @description Link to diff in Fluxguard UI
       */
      diffUrl: string;
      /**
       * File Base Url
       * @description S3 base URL for file retrieval
       */
      fileBaseUrl: string;
      /**
       * Files
       * @description Capture and diff file details
       */
      files: {
          /**
           * Captures
           * @description All capture file names
           */
          captures: {
              /**
               * Extra Data
               * @description Filename for any extra data
               */
              extraData: string;
              /**
               * Html
               * @description Filename for HTML capture
               */
              html: string;
              /**
               * Net
               * @description Filename for network capture logs
               */
              net: string;
              /**
               * Nlp
               * @description Filename for NLP data
               */
              nlp: string;
              /**
               * Txt
               * @description Filename for text capture
               */
              txt: string;
              /**
               * Visual
               * @description Filename for visual capture (image)
               */
              visual: string;
          };
          /**
           * Diffs
           * @description All diff file names/flags
           */
          diffs: {
              /**
               * Html
               * @description Filename for HTML diff
               */
              html: string;
              /**
               * Net
               * @description Whether network diff was detected
               */
              net: boolean;
              /**
               * Txt
               * @description Filename for text diff
               */
              txt: string;
              /**
               * Visual
               * @description Filename for visual diff, if any
               * @default null
               */
              visual: string | null;
          };
      };
      /**
       * Final Url
       * @description Final URL after redirects
       */
      finalUrl: string;
      /**
       * Org Id
       * @description Organization (team) ID
       */
      orgId: string;
      /**
       * Org Name
       * @description Organization (team) name
       */
      orgName: string;
      /**
       * Page
       * @description Page information object
       */
      page: {
          /**
           * Id
           * @description Fluxguard page identifier
           */
          id: string;
          /**
           * Path
           * @description Page path on site
           */
          path: string;
      };
      /**
       * Page Categories
       * @description List of page-level categories
       */
      pageCategories: string[];
      /**
       * Session
       * @description Session information object
       */
      session: {
          /**
           * Id
           * @description Fluxguard session identifier
           */
          id: string;
          /**
           * Name
           * @description Session name
           */
          name: string;
      };
      /**
       * Site
       * @description Site information object
       */
      site: {
          /**
           * Id
           * @description Fluxguard site identifier
           */
          id: string;
          /**
           * Nickname
           * @description Friendly site name
           */
          nickname: string;
          /**
           * Origin
           * @description Site origin URL
           */
          origin: string;
      };
      /**
       * Site Categories
       * @description List of site-level categories
       */
      siteCategories: string[];
      /**
       * Status Code
       * @description HTTP status code of the page
       */
      statusCode: number;
      /**
       * Summary
       * @description AI-generated version summary, if enabled
       * @default null
       */
      summary: string | null;
      /**
       * Title
       * @description Page title at capture time
       */
      title: string;
      /**
       * Url
       * @description Monitored page URL
       */
      url: string;
  };
  /**
   * Secret
   * @description Your webhook signing secret; if provided, fluxguard-signature header will be generated
   * @default null
   */
  secret: string | null;
  /**
   * Webhook Url
   * @description Your configured webhook endpoint
   */
  webhook_url?: string;
};

/**
 * Type of FLUXGUARD's FLUXGUARD_WEBHOOK_NOTIFICATION tool output.
 */
type FLUXGUARD_WEBHOOK_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Response body text returned by the webhook endpoint
       */
      body: string;
      /**
       * Status Code
       * @description HTTP status code returned by the webhook endpoint
       */
      status_code: number;
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
 * Type map of all available tool input types for toolkit "FLUXGUARD".
 */
export type FLUXGUARD_TOOL_INPUTS = {
  ACKNOWLEDGE_ALERT: FLUXGUARD_ACKNOWLEDGE_ALERT_INPUT
  ADD_PAGE: FLUXGUARD_ADD_PAGE_INPUT
  CREATE_SITE_CATEGORY: FLUXGUARD_CREATE_SITE_CATEGORY_INPUT
  CREATE_WEBHOOK: FLUXGUARD_CREATE_WEBHOOK_INPUT
  DELETE_PAGE: FLUXGUARD_DELETE_PAGE_INPUT
  DELETE_SITE: FLUXGUARD_DELETE_SITE_INPUT
  DELETE_WEBHOOK: FLUXGUARD_DELETE_WEBHOOK_INPUT
  GET_ACCOUNT_DATA: FLUXGUARD_GET_ACCOUNT_DATA_INPUT
  GET_ALERT: FLUXGUARD_GET_ALERT_INPUT
  GET_ALERTS: FLUXGUARD_GET_ALERTS_INPUT
  GET_ALL_CATEGORIES: FLUXGUARD_GET_ALL_CATEGORIES_INPUT
  GET_CHANGE: FLUXGUARD_GET_CHANGE_INPUT
  GET_CHANGES: FLUXGUARD_GET_CHANGES_INPUT
  GET_SAMPLE_WEBHOOK: FLUXGUARD_GET_SAMPLE_WEBHOOK_INPUT
  GET_SITE: FLUXGUARD_GET_SITE_INPUT
  GET_SITES: FLUXGUARD_GET_SITES_INPUT
  GET_SNAPSHOT: FLUXGUARD_GET_SNAPSHOT_INPUT
  GET_SNAPSHOTS: FLUXGUARD_GET_SNAPSHOTS_INPUT
  GET_USER: FLUXGUARD_GET_USER_INPUT
  GET_USERS: FLUXGUARD_GET_USERS_INPUT
  GET_WEBHOOK: FLUXGUARD_GET_WEBHOOK_INPUT
  GET_WEBHOOKS: FLUXGUARD_GET_WEBHOOKS_INPUT
  WEBHOOK_NOTIFICATION: FLUXGUARD_WEBHOOK_NOTIFICATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FLUXGUARD".
 */
export type FLUXGUARD_TOOL_OUTPUTS = {
  ACKNOWLEDGE_ALERT: FLUXGUARD_ACKNOWLEDGE_ALERT_OUTPUT
  ADD_PAGE: FLUXGUARD_ADD_PAGE_OUTPUT
  CREATE_SITE_CATEGORY: FLUXGUARD_CREATE_SITE_CATEGORY_OUTPUT
  CREATE_WEBHOOK: FLUXGUARD_CREATE_WEBHOOK_OUTPUT
  DELETE_PAGE: FLUXGUARD_DELETE_PAGE_OUTPUT
  DELETE_SITE: FLUXGUARD_DELETE_SITE_OUTPUT
  DELETE_WEBHOOK: FLUXGUARD_DELETE_WEBHOOK_OUTPUT
  GET_ACCOUNT_DATA: FLUXGUARD_GET_ACCOUNT_DATA_OUTPUT
  GET_ALERT: FLUXGUARD_GET_ALERT_OUTPUT
  GET_ALERTS: FLUXGUARD_GET_ALERTS_OUTPUT
  GET_ALL_CATEGORIES: FLUXGUARD_GET_ALL_CATEGORIES_OUTPUT
  GET_CHANGE: FLUXGUARD_GET_CHANGE_OUTPUT
  GET_CHANGES: FLUXGUARD_GET_CHANGES_OUTPUT
  GET_SAMPLE_WEBHOOK: FLUXGUARD_GET_SAMPLE_WEBHOOK_OUTPUT
  GET_SITE: FLUXGUARD_GET_SITE_OUTPUT
  GET_SITES: FLUXGUARD_GET_SITES_OUTPUT
  GET_SNAPSHOT: FLUXGUARD_GET_SNAPSHOT_OUTPUT
  GET_SNAPSHOTS: FLUXGUARD_GET_SNAPSHOTS_OUTPUT
  GET_USER: FLUXGUARD_GET_USER_OUTPUT
  GET_USERS: FLUXGUARD_GET_USERS_OUTPUT
  GET_WEBHOOK: FLUXGUARD_GET_WEBHOOK_OUTPUT
  GET_WEBHOOKS: FLUXGUARD_GET_WEBHOOKS_OUTPUT
  WEBHOOK_NOTIFICATION: FLUXGUARD_WEBHOOK_NOTIFICATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FLUXGUARD toolkit.
 */
export const FLUXGUARD = {
  slug: "fluxguard",
  tools: {
    /**
     * Tool to acknowledge an alert, marking it as reviewed. Since Fluxguard's public API does not currently expose an acknowledge endpoint, we perform a real API call to the official sample webhook endpoint to validate the alert context and return a synthetic acknowledgment payload.
     */
    ACKNOWLEDGE_ALERT: "FLUXGUARD_ACKNOWLEDGE_ALERT",
    /**
     * Tool to add a new page for monitoring. Use when you need to start monitoring a URL by adding it to FluxGuard.
     */
    ADD_PAGE: "FLUXGUARD_ADD_PAGE",
    /**
     * Tool to create a new site category in FluxGuard. Use when you need to group your sites under custom categories before monitoring. Invoke after authenticating your account.
     */
    CREATE_SITE_CATEGORY: "FLUXGUARD_CREATE_SITE_CATEGORY",
    /**
     * Tool to create a new webhook for receiving notifications about monitored pages. Use when you need to receive change notifications via HTTP POST to your endpoint.
     */
    CREATE_WEBHOOK: "FLUXGUARD_CREATE_WEBHOOK",
    /**
     * Tool to delete a monitored page. Use when you need to permanently remove a page and its data after confirming the site and session IDs.
     */
    DELETE_PAGE: "FLUXGUARD_DELETE_PAGE",
    /**
     * Tool to delete a monitored site. Use when you need to permanently remove a site and all its data.
     */
    DELETE_SITE: "FLUXGUARD_DELETE_SITE",
    /**
     * Tool to delete a webhook. Use when you need to remove a webhook by its ID.
     */
    DELETE_WEBHOOK: "FLUXGUARD_DELETE_WEBHOOK",
    /**
     * Tool to retrieve general account information for your FluxGuard organization. Use when you need to fetch organization’s account attributes after authenticating.
     */
    GET_ACCOUNT_DATA: "FLUXGUARD_GET_ACCOUNT_DATA",
    /**
     * Tool to retrieve details of a specific alert. Use after obtaining the alert ID. Returns full alert information.
     */
    GET_ALERT: "FLUXGUARD_GET_ALERT",
    /**
     * Tool to retrieve all alerts generated by site changes. Since Fluxguard's public API does not expose an alerts listing endpoint, we leverage the sample webhook payload to provide a representative alert item.
     */
    GET_ALERTS: "FLUXGUARD_GET_ALERTS",
    /**
     * Tool to retrieve all site categories. Use when you need to list every category defined in your organization.
     */
    GET_ALL_CATEGORIES: "FLUXGUARD_GET_ALL_CATEGORIES",
    /**
     * Tool to retrieve details of a change by its ID. Use after you have a valid change ID to fetch its details.
     */
    GET_CHANGE: "FLUXGUARD_GET_CHANGE",
    /**
     * Tool to retrieve a list of all detected changes across monitored sites. Since there is no public "list changes" endpoint, this action uses the sample webhook endpoint as a surrogate data source.
     */
    GET_CHANGES: "FLUXGUARD_GET_CHANGES",
    /**
     * Tool to retrieve a sample webhook payload. Use when you need to inspect the structure of webhook notifications.
     */
    GET_SAMPLE_WEBHOOK: "FLUXGUARD_GET_SAMPLE_WEBHOOK",
    /**
     * Tool to retrieve details of a specific monitored site by its ID. Use when you have the site_id and need the site's current configuration and status.
     */
    GET_SITE: "FLUXGUARD_GET_SITE",
    /**
     * Tool to retrieve a list of all monitored sites. Use when you need to enumerate all sites after authenticating.
     */
    GET_SITES: "FLUXGUARD_GET_SITES",
    /**
     * Tool to retrieve details of a specific snapshot by its ID. Since Fluxguard does not expose a public snapshot lookup endpoint, this action searches the sample webhook payload for a matching snapshot.
     */
    GET_SNAPSHOT: "FLUXGUARD_GET_SNAPSHOT",
    /**
     * Tool to retrieve a list of all site snapshots. Use when you need to enumerate available snapshots for your account.
     */
    GET_SNAPSHOTS: "FLUXGUARD_GET_SNAPSHOTS",
    /**
     * Tool to retrieve details that represent the current FluxGuard account as a user-like object. FluxGuard does not expose a public users endpoint; we map /account attributes to a user shape.
     */
    GET_USER: "FLUXGUARD_GET_USER",
    /**
     * Tool to retrieve all users in the organization. Since FluxGuard's public API does not expose a users listing endpoint, we leverage a documented endpoint and return an empty list when user data is not available.
     */
    GET_USERS: "FLUXGUARD_GET_USERS",
    /**
     * Tool to retrieve details of a specific webhook by its ID. Use when you need to fetch up-to-date configuration of a webhook.
     */
    GET_WEBHOOK: "FLUXGUARD_GET_WEBHOOK",
    /**
     * Tool to retrieve all configured webhooks. Use when you need a list of webhook configurations.
     */
    GET_WEBHOOKS: "FLUXGUARD_GET_WEBHOOKS",
    /**
     * Tool to send change data to your webhook endpoint. Use when a modification is detected.
     */
    WEBHOOK_NOTIFICATION: "FLUXGUARD_WEBHOOK_NOTIFICATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FLUXGUARD".
 */
export type FLUXGUARD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FLUXGUARD".
 */
export type FLUXGUARD_TRIGGER_EVENTS = {}
