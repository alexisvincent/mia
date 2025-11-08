// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REFINER's REFINER_DELETE_CONTACT tool input.
 */
type REFINER_DELETE_CONTACT_INPUT = {
  /**
   * Email
   * @description The email address of the contact to delete.
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description The unique identifier of the contact to delete.
   * @default null
   */
  id: string | null;
  /**
   * Uuid
   * @description The Refiner-generated UUID of the contact to delete.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of REFINER's REFINER_DELETE_CONTACT tool output.
 */
type REFINER_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message that the contact was deleted (e.g., 'ok').
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
 * Type of REFINER's REFINER_GET_ACCOUNT_INFO tool input.
 */
type REFINER_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of REFINER's REFINER_GET_ACCOUNT_INFO tool output.
 */
type REFINER_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environments
       * @description List of environments and their usage statistics
       */
      environments: {
          /**
           * Mpv
           * @description Monthly page views in this environment
           */
          mpv: number;
          /**
           * Msr
           * @description Monthly survey responses in this environment
           */
          msr: number;
          /**
           * Mte
           * @description Monthly tracked events in this environment
           */
          mte: number;
          /**
           * Mtu
           * @description Monthly tracked users in this environment
           */
          mtu: number;
          /**
           * Name
           * @description Name of the environment
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the environment
           */
          uuid: string;
      }[];
      /**
       * Subscription
       * @description Subscription usage and limits
       */
      subscription: {
          /**
           * Mpv Count
           * @description Current number of monthly page views
           */
          mpv_count: number;
          /**
           * Mpv Count Updated At
           * @description Timestamp when the monthly page views count was last updated (ISO 8601)
           */
          mpv_count_updated_at: string;
          /**
           * Mpv Limit
           * @description Limit for monthly page views
           */
          mpv_limit: number;
          /**
           * Msr Count
           * @description Current number of monthly survey responses
           */
          msr_count: number;
          /**
           * Msr Count Updated At
           * @description Timestamp when the monthly survey responses count was last updated (ISO 8601)
           */
          msr_count_updated_at: string;
          /**
           * Msr Limit
           * @description Limit for monthly survey responses
           */
          msr_limit: number;
          /**
           * Mte Count
           * @description Current number of monthly tracked events
           */
          mte_count: number;
          /**
           * Mte Count Updated At
           * @description Timestamp when the monthly tracked events count was last updated (ISO 8601)
           */
          mte_count_updated_at: string;
          /**
           * Mtu Count
           * @description Current number of monthly tracked users
           */
          mtu_count: number;
          /**
           * Mtu Count Updated At
           * @description Timestamp when the monthly tracked users count was last updated (ISO 8601)
           */
          mtu_count_updated_at: string;
          /**
           * Mtu Limit
           * @description Limit for monthly tracked users
           */
          mtu_limit: number;
          /**
           * Plan
           * @description Name of the subscribed plan
           */
          plan: string;
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
 * Type of REFINER's REFINER_GET_CONTACT tool input.
 */
type REFINER_GET_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the contact.
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Your user ID used when the contact was created.
   * @default null
   */
  id: string | null;
  /**
   * Uuid
   * @description Refiner-generated UUID of the contact.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of REFINER's REFINER_GET_CONTACT tool output.
 */
type REFINER_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Associated account information
       */
      account: {
          /**
           * Attributes
           * @description Additional account traits
           */
          attributes?: {
              [key: string]: unknown;
          };
          /**
           * Display Name
           * @description Account display name
           * @default null
           */
          display_name: string | null;
          /**
           * Domain
           * @description Account domain
           * @default null
           */
          domain: string | null;
          /**
           * First Seen At
           * @description When the account was first seen (ISO 8601)
           */
          first_seen_at: string;
          /**
           * Last Seen At
           * @description When the account was last seen (ISO 8601)
           */
          last_seen_at: string;
          /**
           * Remote Id
           * @description Your account ID
           * @default null
           */
          remote_id: string | null;
          /**
           * Uuid
           * @description Account UUID
           */
          uuid: string;
      };
      /**
       * Attributes
       * @description All custom traits for this contact
       */
      attributes?: {
          [key: string]: unknown;
      };
      /**
       * Display Name
       * @description Contact display name
       * @default null
       */
      display_name: string | null;
      /**
       * Email
       * @description Contact email address
       * @default null
       */
      email: string | null;
      /**
       * First Seen At
       * @description When contact was first seen (ISO 8601)
       */
      first_seen_at: string;
      /**
       * Last Seen At
       * @description When contact was last seen (ISO 8601)
       */
      last_seen_at: string;
      /**
       * Remote Id
       * @description Your contact ID
       * @default null
       */
      remote_id: string | null;
      /**
       * Segments
       * @description Segments this contact belongs to
       */
      segments?: {
          /**
           * Name
           * @description Segment name
           */
          name: string;
          /**
           * Uuid
           * @description Segment UUID
           */
          uuid: string;
      }[];
      /**
       * Uuid
       * @description Contact UUID
       */
      uuid: string;
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
 * Type of REFINER's REFINER_GET_CONTACTS tool input.
 */
type REFINER_GET_CONTACTS_INPUT = {
  /**
   * Form Uuid
   * @description Filter contacts by survey UUID.
   * @default null
   */
  form_uuid: string | null;
  /**
   * Order By
   * @description Order contacts by this field.
   * @default first_seen_at
   * @enum {string}
   */
  order_by: "first_seen_at" | "last_seen_at" | "last_form_submission_at";
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Cursor
   * @description Cursor for fetching next page in large result sets.
   * @default null
   */
  page_cursor: string | null;
  /**
   * Page Length
   * @description Number of items per page (max 1000).
   * @default 50
   */
  page_length: number;
  /**
   * Segment Uuid
   * @description Filter contacts by segment UUID.
   * @default null
   */
  segment_uuid: string | null;
};

/**
 * Type of REFINER's REFINER_GET_CONTACTS tool output.
 */
type REFINER_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of contacts.
       */
      items: {
          /**
           * Account
           * @description Account associated with the contact.
           * @default null
           */
          account: {
              /**
               * Attributes
               * @description Additional account attributes.
               * @default null
               */
              attributes: {
                  [key: string]: unknown;
              } | null;
              /**
               * Display Name
               * @description Display name of the account.
               * @default null
               */
              display_name: string | null;
              /**
               * Domain
               * @description Account domain.
               * @default null
               */
              domain: string | null;
              /**
               * First Seen At
               * @description Timestamp when the account was first seen (ISO 8601).
               * @default null
               */
              first_seen_at: string | null;
              /**
               * Last Seen At
               * @description Timestamp when the account was last seen (ISO 8601).
               * @default null
               */
              last_seen_at: string | null;
              /**
               * Remote Id
               * @description Your system's identifier for the account.
               * @default null
               */
              remote_id: string | null;
              /**
               * Uuid
               * @description Unique account identifier.
               */
              uuid: string;
          } | null;
          /**
           * Attributes
           * @description Merged user attributes and survey responses.
           * @default null
           */
          attributes: {
              [key: string]: unknown;
          } | null;
          /**
           * Display Name
           * @description Display name of the contact.
           * @default null
           */
          display_name: string | null;
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
          /**
           * First Seen At
           * @description Timestamp when the contact was first seen (ISO 8601).
           * @default null
           */
          first_seen_at: string | null;
          /**
           * Last Seen At
           * @description Timestamp when the contact was last seen (ISO 8601).
           * @default null
           */
          last_seen_at: string | null;
          /**
           * Remote Id
           * @description Your system's identifier for the contact.
           * @default null
           */
          remote_id: string | null;
          /**
           * Segments
           * @description List of segments the contact belongs to.
           * @default null
           */
          segments: {
              /**
               * Name
               * @description Segment name.
               */
              name: string;
              /**
               * Uuid
               * @description Unique segment identifier.
               */
              uuid: string;
          }[] | null;
          /**
           * Uuid
           * @description Unique contact identifier.
           */
          uuid: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Items Count
           * @description Total number of items.
           */
          items_count: number;
          /**
           * Last Page
           * @description Last available page number.
           */
          last_page: number;
          /**
           * Next Page Cursor
           * @description Cursor for the next page, if any.
           * @default null
           */
          next_page_cursor: string | null;
          /**
           * Page Length
           * @description Number of items per page.
           */
          page_length: number;
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
 * Type of REFINER's REFINER_GET_FORMS tool input.
 */
type REFINER_GET_FORMS_INPUT = {
  /**
   * Include Config
   * @description If True, include full survey configuration and elements.
   * @default false
   */
  include_config: boolean;
  /**
   * Include Info
   * @description If True, include additional meta data (timestamps, counts, folder, page_url).
   * @default false
   */
  include_info: boolean;
  /**
   * List
   * @description Which surveys to include by state. One of: all, published, drafts, archived, all_with_archived.
   * @default all
   * @enum {string}
   */
  list: "all" | "published" | "drafts" | "archived" | "all_with_archived";
  /**
   * Page
   * @description Page number for pagination, must be >=1.
   * @default 1
   */
  page: number;
  /**
   * Page Length
   * @description Number of items per page (max 1000).
   * @default 50
   */
  page_length: number;
};

/**
 * Type of REFINER's REFINER_GET_FORMS tool output.
 */
type REFINER_GET_FORMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of forms matching the query.
       */
      items: {
          /**
           * Archived At
           * @description ISO 8601 timestamp when archived.
           * @default null
           */
          archived_at: string | null;
          /**
           * Channels
           * @description Distribution channels available.
           * @default null
           */
          channels: string[] | null;
          /**
           * Config
           * @description Raw configuration of the survey, present if include_config is True.
           * @default null
           */
          config: {
              [key: string]: unknown;
          } | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when created.
           * @default null
           */
          created_at: string | null;
          /**
           * First Form View At
           * @description Timestamp of first form view.
           * @default null
           */
          first_form_view_at: string | null;
          /**
           * Folder
           * @description Folder object or identifier this form belongs to, if any.
           * @default null
           */
          folder: {
              [key: string]: unknown;
          } | null;
          /**
           * Last Form View At
           * @description Timestamp of last form view.
           * @default null
           */
          last_form_view_at: string | null;
          /**
           * Name
           * @description Name of the form.
           */
          name: string;
          /**
           * Page Url
           * @description Public URL of the form.
           * @default null
           */
          page_url: string | null;
          /**
           * Published At
           * @description ISO 8601 timestamp when published.
           * @default null
           */
          published_at: string | null;
          /**
           * Responses Count
           * @description Number of responses received.
           * @default null
           */
          responses_count: number | null;
          /**
           * Updated At
           * @description ISO 8601 timestamp when last updated.
           * @default null
           */
          updated_at: string | null;
          /**
           * Uuid
           * @description Unique identifier of the form.
           */
          uuid: string;
          /**
           * Views Count
           * @description Number of times the form was viewed.
           * @default null
           */
          views_count: number | null;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Items Count
           * @description Total number of forms.
           */
          items_count: number;
          /**
           * Last Page
           * @description Last available page number.
           */
          last_page: number;
          /**
           * Page Length
           * @description Number of items per page.
           */
          page_length: number;
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
 * Type of REFINER's REFINER_GET_REPORTING tool input.
 */
type REFINER_GET_REPORTING_INPUT = {
  /**
   * Date Range End
   * Format: date-time
   * @description ISO8601 timestamp (e.g. 'YYYY-MM-DDThh:mm:ssZ') to end date range. Only data before this time is counted.
   * @default null
   */
  date_range_end: unknown;
  /**
   * Date Range Start
   * Format: date-time
   * @description ISO8601 timestamp (e.g. 'YYYY-MM-DDThh:mm:ssZ') to start date range. Only data on or after this time is counted.
   * @default null
   */
  date_range_start: unknown;
  /**
   * Form Uuids
   * @description Only include data points from these form (survey) UUIDs.
   * @default null
   */
  form_uuids: string[] | null;
  /**
   * Question Identifiers
   * @description Only include data points for these question identifiers. If omitted, all matching questions are included.
   * @default null
   */
  question_identifiers: string[] | null;
  /**
   * Segment Uuids
   * @description Only include data points for users in these segment UUIDs.
   * @default null
   */
  segment_uuids: string[] | null;
  /**
   * Tag Uuids
   * @description Only include data points linked to these tag UUIDs.
   * @default null
   */
  tag_uuids: string[] | null;
  /**
   * Type
   * @description Type of report to generate. One of 'nps', 'csat', 'ratings', 'distribution', or 'count'.
   * @enum {string}
   */
  type?: "nps" | "csat" | "ratings" | "distribution" | "count";
};

/**
 * Type of REFINER's REFINER_GET_REPORTING tool output.
 */
type REFINER_GET_REPORTING_OUTPUT = {
  /**
   * Average
   * @description Average rating value (only for 'ratings' report).
   * @default null
   */
  average: number | null;
  /**
   * Count
   * @description Total count of data points (e.g., total responses).
   * @default null
   */
  count: number | null;
  /**
   * Csat
   * @description Calculated Customer Satisfaction Score (only for 'csat' report).
   * @default null
   */
  csat: number | null;
  /**
   * Data
   * @description Mapping of metric key to its count. For 'nps' and 'csat', keys are fixed names; for 'ratings' and 'distribution', keys are rating values as strings.
   * @default null
   */
  data: {
      [key: string]: number;
  } | null;
  /**
   * Datapoints
   * @description Number of total data points considered (only for 'distribution' report).
   * @default null
   */
  datapoints: number | null;
  /**
   * Date Range End
   * Format: date-time
   * @description End of the date range for the report (ISO8601 format).
   */
  date_range_end?: unknown;
  /**
   * Date Range Start
   * Format: date-time
   * @description Start of the date range for the report (ISO8601 format).
   */
  date_range_start?: unknown;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Nps
   * @description Calculated Net Promoter Score (only for 'nps' report).
   * @default null
   */
  nps: number | null;
  /**
   * Responses
   * @description Number of responses (only for 'distribution' report).
   * @default null
   */
  responses: number | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Sum
   * @description Sum of all rating values (only for 'ratings' report).
   * @default null
   */
  sum: number | null;
  /**
   * Views
   * @description Number of survey views (only for 'count' report).
   * @default null
   */
  views: number | null;
};

/**
 * Type of REFINER's REFINER_GET_RESPONSES tool input.
 */
type REFINER_GET_RESPONSES_INPUT = {
  /**
   * Date Range End
   * Format: date-time
   * @description ISO-8601 end date (exclusive) for last_data_reception_at.
   * @default null
   */
  date_range_end: unknown;
  /**
   * Date Range Start
   * Format: date-time
   * @description ISO-8601 start date (inclusive) for last_data_reception_at.
   * @default null
   */
  date_range_start: unknown;
  /**
   * Form Uuid
   * @description Filter responses by a single survey form UUID.
   * @default null
   */
  form_uuid: string | null;
  /**
   * Form Uuids
   * @description Filter responses by multiple survey form UUIDs.
   * @default null
   */
  form_uuids: string[] | null;
  /**
   * Include
   * @description Which responses to include: completed, partials, or all.
   * @default completed
   * @enum {string}
   */
  include: "completed" | "partials" | "all";
  /**
   * Page
   * @description Page number for pagination. Must be >=1. Default is 1.
   * @default 1
   */
  page: number | null;
  /**
   * Page Cursor
   * @description Cursor token for next page; use pagination.next_page_cursor.
   * @default null
   */
  page_cursor: string | null;
  /**
   * Page Length
   * @description Items per page. Default is 50; maximum is 1000.
   * @default 50
   */
  page_length: number | null;
  /**
   * Search
   * @description Search by contact user ID, response UUID, email, or name.
   * @default null
   */
  search: string | null;
  /**
   * Segment Uuid
   * @description Filter responses by a single segment UUID.
   * @default null
   */
  segment_uuid: string | null;
  /**
   * Segment Uuids
   * @description Filter responses by multiple segment UUIDs.
   * @default null
   */
  segment_uuids: string[] | null;
  /**
   * With Attributes
   * @description If true, include full contact attributes (API expects 1 or 0).
   * @default false
   */
  with_attributes: boolean;
};

/**
 * Type of REFINER's REFINER_GET_RESPONSES tool output.
 */
type REFINER_GET_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of survey responses.
       */
      items: {
          /**
           * Completed At
           * @description Timestamp when survey was completed.
           */
          completed_at: string;
          /**
           * Contact
           * @description Respondent contact information.
           */
          contact: {
              /**
               * Account
               * @description Associated account information.
               */
              account: {
                  /**
                   * Display Name
                   * @description Account display name.
                   */
                  display_name: string;
                  /**
                   * Domain
                   * @description Account domain if available.
                   * @default null
                   */
                  domain: string | null;
                  /**
                   * Remote Id
                   * @description External account ID.
                   */
                  remote_id: string;
                  /**
                   * Uuid
                   * @description Account UUID.
                   */
                  uuid: string;
              };
              /**
               * Display Name
               * @description Contact display name.
               */
              display_name: string;
              /**
               * Email
               * @description Contact email address.
               */
              email: string;
              /**
               * Remote Id
               * @description External user ID.
               */
              remote_id: string;
              /**
               * Uuid
               * @description Contact UUID.
               */
              uuid: string;
          };
          /**
           * Data
           * @description Survey answers keyed by question identifiers.
           */
          data: {
              [key: string]: string | number | boolean | (string | number | boolean | null)[] | null;
          };
          /**
           * Dismissed At
           * @description Timestamp when survey was dismissed, if any.
           * @default null
           */
          dismissed_at: string | null;
          /**
           * First Data Reception At
           * @description Timestamp when data was first received.
           */
          first_data_reception_at: string;
          /**
           * First Shown At
           * @description Timestamp when survey was first shown.
           */
          first_shown_at: string;
          /**
           * Form
           * @description Survey form details.
           */
          form: {
              /**
               * Name
               * @description Survey form name.
               */
              name: string;
              /**
               * Uuid
               * @description Survey form UUID.
               */
              uuid: string;
          };
          /**
           * Last Data Reception At
           * @description Timestamp when data was last received.
           */
          last_data_reception_at: string;
          /**
           * Last Shown At
           * @description Timestamp when survey was last shown.
           */
          last_shown_at: string;
          /**
           * Received At
           * @description Timestamp when response was received.
           */
          received_at: string;
          /**
           * Show Counter
           * @description Number of times the survey was shown.
           */
          show_counter: number;
          /**
           * Uuid
           * @description Response UUID.
           */
          uuid: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Items Count
           * @description Total number of items.
           */
          items_count: number;
          /**
           * Last Page
           * @description Last page number.
           */
          last_page: number;
          /**
           * Next Page Cursor
           * @description Cursor for next page if available.
           * @default null
           */
          next_page_cursor: string | null;
          /**
           * Page Length
           * @description Items per page.
           */
          page_length: number;
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
 * Type of REFINER's REFINER_GET_SEGMENTS tool input.
 */
type REFINER_GET_SEGMENTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Cursor
   * @description Cursor for fetching next page in large result sets.
   * @default null
   */
  page_cursor: string | null;
  /**
   * Page Length
   * @description Number of items per page (max 1000).
   * @default 50
   */
  page_length: number;
};

/**
 * Type of REFINER's REFINER_GET_SEGMENTS tool output.
 */
type REFINER_GET_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of segments.
       */
      items: {
          /**
           * Is Manual
           * @description Whether the segment is manual.
           */
          is_manual: boolean;
          /**
           * Name
           * @description Segment name.
           */
          name: string;
          /**
           * Uuid
           * @description Unique segment identifier.
           */
          uuid: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Items Count
           * @description Total number of items.
           */
          items_count: number;
          /**
           * Last Page
           * @description Last available page number.
           */
          last_page: number;
          /**
           * Next Page Cursor
           * @description Cursor for the next page, if any.
           * @default null
           */
          next_page_cursor: string | null;
          /**
           * Page Length
           * @description Number of items per page.
           */
          page_length: number;
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
 * Type of REFINER's REFINER_TRACK_EVENT tool input.
 */
type REFINER_TRACK_EVENT_INPUT = {
  /**
   * Email
   * Format: email
   * @description User email address. Required if id is not provided.
   * @default null
   */
  email: string | null;
  /**
   * Event
   * @description Name of the event to track for the specified user.
   */
  event?: string;
  /**
   * Id
   * @description Refiner user ID. Required if email is not provided.
   * @default null
   */
  id: string | null;
};

/**
 * Type of REFINER's REFINER_TRACK_EVENT tool output.
 */
type REFINER_TRACK_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message indicating the success of the tracking operation.
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
 * Type of REFINER's REFINER_UPDATE_CONTACT tool input.
 */
type REFINER_UPDATE_CONTACT_INPUT = {
  /**
   * AccountRequest
   * @description Nested account object for grouping users. Must include an `id` field; additional traits allowed.
   * @default null
   */
  account: ({
      /**
       * Id
       * @description Account identifier to group users under.
       */
      id: string;
  } & {
      [key: string]: unknown;
  }) | null;
  /**
   * Attributes
   * @description Traits to update (key=trait slug). Values: string (<=255 chars), integer, or boolean. Date-time strings accepted for keys ending with `_at`.
   * @default null
   */
  attributes: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Email
   * Format: email
   * @description User email address. Required if id is not provided.
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Your internal user ID. Required if email is not provided.
   * @default null
   */
  id: string | null;
};

/**
 * Type of REFINER's REFINER_UPDATE_CONTACT tool output.
 */
type REFINER_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Uuid
       * @description Refiner-assigned UUID of the updated contact.
       */
      contact_uuid: string;
      /**
       * Message
       * @description API status message, usually 'ok'.
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
 * Type map of all available tool input types for toolkit "REFINER".
 */
export type REFINER_TOOL_INPUTS = {
  DELETE_CONTACT: REFINER_DELETE_CONTACT_INPUT
  GET_ACCOUNT_INFO: REFINER_GET_ACCOUNT_INFO_INPUT
  GET_CONTACT: REFINER_GET_CONTACT_INPUT
  GET_CONTACTS: REFINER_GET_CONTACTS_INPUT
  GET_FORMS: REFINER_GET_FORMS_INPUT
  GET_REPORTING: REFINER_GET_REPORTING_INPUT
  GET_RESPONSES: REFINER_GET_RESPONSES_INPUT
  GET_SEGMENTS: REFINER_GET_SEGMENTS_INPUT
  TRACK_EVENT: REFINER_TRACK_EVENT_INPUT
  UPDATE_CONTACT: REFINER_UPDATE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REFINER".
 */
export type REFINER_TOOL_OUTPUTS = {
  DELETE_CONTACT: REFINER_DELETE_CONTACT_OUTPUT
  GET_ACCOUNT_INFO: REFINER_GET_ACCOUNT_INFO_OUTPUT
  GET_CONTACT: REFINER_GET_CONTACT_OUTPUT
  GET_CONTACTS: REFINER_GET_CONTACTS_OUTPUT
  GET_FORMS: REFINER_GET_FORMS_OUTPUT
  GET_REPORTING: REFINER_GET_REPORTING_OUTPUT
  GET_RESPONSES: REFINER_GET_RESPONSES_OUTPUT
  GET_SEGMENTS: REFINER_GET_SEGMENTS_OUTPUT
  TRACK_EVENT: REFINER_TRACK_EVENT_OUTPUT
  UPDATE_CONTACT: REFINER_UPDATE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REFINER toolkit.
 */
export const REFINER = {
  slug: "refiner",
  tools: {
    /**
     * Tool to delete a specific contact by its identifier. use after confirming the contact's id, email, or uuid.
     */
    DELETE_CONTACT: "REFINER_DELETE_CONTACT",
    /**
     * Tool to fetch refiner account subscription and environment usage details. use when you need to audit your current plan and usage.
     */
    GET_ACCOUNT_INFO: "REFINER_GET_ACCOUNT_INFO",
    /**
     * Tool to retrieve details of a specific contact by its id. use when you need all stored traits for a known user.
     */
    GET_CONTACT: "REFINER_GET_CONTACT",
    /**
     * Tool to retrieve a list of contacts from your refiner account. use when you need to filter or paginate through contacts.
     */
    GET_CONTACTS: "REFINER_GET_CONTACTS",
    /**
     * Tool to retrieve a list of forms (surveys) from your refiner account with optional filtering and pagination. use when you need to list surveys by state, page, or include extra info/config.
     */
    GET_FORMS: "REFINER_GET_FORMS",
    /**
     * Tool to retrieve aggregated reporting data for surveys including metrics and analytics. use when you need survey analytics over a time range filtered by type, question identifiers, tags, forms, or segments.
     */
    GET_REPORTING: "REFINER_GET_REPORTING",
    /**
     * Tool to retrieve all survey responses from your refiner account with optional filtering and pagination. use after confirming survey creation to pull response data.
     */
    GET_RESPONSES: "REFINER_GET_RESPONSES",
    /**
     * Tool to retrieve a list of user segments from your refiner account. use when you need to view or paginate segments.
     */
    GET_SEGMENTS: "REFINER_GET_SEGMENTS",
    /**
     * Tool to record a user event by name for a user identified via user id or email. use after confirming the identifier and event name.
     */
    TRACK_EVENT: "REFINER_TRACK_EVENT",
    /**
     * Tool to update an existing contact's attributes or account. use when you have a contact `id` or `email` and want to modify traits or grouping.
     */
    UPDATE_CONTACT: "REFINER_UPDATE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REFINER".
 */
export type REFINER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REFINER".
 */
export type REFINER_TRIGGER_EVENTS = {}
