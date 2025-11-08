// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEXTIT's TEXTIT_CREATE_CAMPAIGN tool input.
 */
type TEXTIT_CREATE_CAMPAIGN_INPUT = {
  /**
   * Group
   * @description UUID of the contact group to associate with the campaign
   */
  group?: string;
  /**
   * Name
   * @description Name of the campaign
   */
  name?: string;
};

/**
 * Type of TEXTIT's TEXTIT_CREATE_CAMPAIGN tool output.
 */
type TEXTIT_CREATE_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the campaign is archived
       */
      archived: boolean;
      /**
       * Created On
       * @description UTC timestamp when the campaign was created
       */
      created_on: string;
      /**
       * Group
       * @description UUID of the contact group associated with the campaign
       */
      group: string;
      /**
       * Modified On
       * @description UTC timestamp when the campaign was last modified
       */
      modified_on: string;
      /**
       * Name
       * @description Name of the campaign
       */
      name: string;
      /**
       * Uuid
       * @description UUID of the created campaign
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
 * Type of TEXTIT's TEXTIT_CREATE_GROUP tool input.
 */
type TEXTIT_CREATE_GROUP_INPUT = {
  /**
   * Name
   * @description Name of the new contact group
   */
  name?: string;
  /**
   * Size
   * @description Estimated initial size of the group
   * @default null
   */
  size: number | null;
};

/**
 * Type of TEXTIT's TEXTIT_CREATE_GROUP tool output.
 */
type TEXTIT_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description ISO datetime when the group was created
       */
      created_on: string;
      /**
       * Modified On
       * @description ISO datetime when the group was last modified
       */
      modified_on: string;
      /**
       * Name
       * @description Name of the group
       */
      name: string;
      /**
       * Size
       * @description Number of contacts in the group
       */
      size: number;
      /**
       * Uuid
       * @description Unique identifier of the group
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
 * Type of TEXTIT's TEXTIT_CREATE_LABEL tool input.
 */
type TEXTIT_CREATE_LABEL_INPUT = {
  /**
   * Name
   * @description Name of the label to create
   */
  name?: string;
};

/**
 * Type of TEXTIT's TEXTIT_CREATE_LABEL tool output.
 */
type TEXTIT_CREATE_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description ISO8601 timestamp when the label was created
       */
      created_on: string;
      /**
       * Modified On
       * @description ISO8601 timestamp when the label was last modified
       */
      modified_on: string;
      /**
       * Name
       * @description Name of the created label
       */
      name: string;
      /**
       * Organization
       * @description ID of the organization the label belongs to
       */
      organization: string;
      /**
       * Uuid
       * @description Unique identifier of the created label
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
 * Type of TEXTIT's TEXTIT_DELETE_CONTACT tool input.
 */
type TEXTIT_DELETE_CONTACT_INPUT = {
  /**
   * Uuid
   * @description The unique UUID of the contact to delete.
   */
  uuid?: string;
};

/**
 * Type of TEXTIT's TEXTIT_DELETE_CONTACT tool output.
 */
type TEXTIT_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates whether the contact was successfully deleted.
       */
      deleted: boolean;
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
 * Type of TEXTIT's TEXTIT_DELETE_GROUP tool input.
 */
type TEXTIT_DELETE_GROUP_INPUT = {
  /**
   * Uuid
   * @description The UUID of the contact group to delete
   */
  uuid?: string;
};

/**
 * Type of TEXTIT's TEXTIT_DELETE_GROUP tool output.
 */
type TEXTIT_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message describing the result
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the group was successfully deleted
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
 * Type of TEXTIT's TEXTIT_GET_CAMPAIGN tool input.
 */
type TEXTIT_GET_CAMPAIGN_INPUT = {
  /**
   * Uuid
   * @description UUID of the campaign to retrieve.
   */
  uuid?: string;
};

/**
 * Type of TEXTIT's TEXTIT_GET_CAMPAIGN tool output.
 */
type TEXTIT_GET_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the campaign is archived.
       */
      archived: boolean;
      /**
       * Created On
       * @description ISO-8601 timestamp when the campaign was created.
       */
      created_on: string;
      /**
       * Group
       * @description Group associated with the campaign.
       */
      group: {
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the group.
           */
          uuid: string;
      };
      /**
       * Name
       * @description Name of the campaign.
       */
      name: string;
      /**
       * Uuid
       * @description UUID of the campaign.
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
 * Type of TEXTIT's TEXTIT_LIST_ARCHIVES tool input.
 */
type TEXTIT_LIST_ARCHIVES_INPUT = {
  /**
   * After
   * @description Filter archives after this date (YYYY-MM-DD)
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Filter archives before this date (YYYY-MM-DD)
   * @default null
   */
  before: string | null;
  /**
   * Period
   * @description Period for archives: daily or monthly
   * @default null
   */
  period: string | null;
  /**
   * Type
   * @description Type of archive to filter by: message or run
   * @default null
   */
  type: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_ARCHIVES tool output.
 */
type TEXTIT_LIST_ARCHIVES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of archives across all pages
       */
      count: number;
      /**
       * Next
       * @description URL to fetch the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to fetch the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of archive objects on this page
       */
      results: {
          /**
           * Created On
           * @description UTC timestamp when the archive was created
           */
          created_on: string;
          /**
           * Group
           * @description Group identifier
           */
          group: string;
          /**
           * Id
           * @description Unique ID of the archive
           */
          id: number;
          /**
           * Modified On
           * @description UTC timestamp when the archive was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description Name of the archive
           */
          name: string;
          /**
           * Org
           * @description Organization identifier
           */
          org: string;
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
 * Type of TEXTIT's TEXTIT_LIST_BROADCASTS tool input.
 */
type TEXTIT_LIST_BROADCASTS_INPUT = {
  /**
   * After
   * @description Cursor value to fetch records after this one.
   * @default null
   */
  after: string | null;
  /**
   * Archived
   * @description Filter broadcasts by archived status.
   * @default null
   */
  archived: boolean | null;
  /**
   * Before
   * @description Cursor value to fetch records before this one.
   * @default null
   */
  before: string | null;
  /**
   * Contact
   * @description Filter by target contact ID.
   * @default null
   */
  contact: number | null;
  /**
   * Flow
   * @description Filter by associated flow ID.
   * @default null
   */
  flow: number | null;
  /**
   * Group
   * @description Filter by target group ID.
   * @default null
   */
  group: number | null;
  /**
   * Page Size
   * @description Number of records per page (must be >= 1).
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_BROADCASTS tool output.
 */
type TEXTIT_LIST_BROADCASTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of broadcasts matching the filter.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of broadcast objects.
       */
      results: {
          /**
           * Archived
           * @description Whether the broadcast is archived.
           */
          archived: boolean;
          /**
           * Created On
           * @description UTC timestamp when the broadcast was created.
           */
          created_on: string;
          /**
           * Name
           * @description Name of the broadcast.
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the broadcast.
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_CAMPAIGNS tool input.
 */
type TEXTIT_LIST_CAMPAIGNS_INPUT = {
  /**
   * After
   * @description Only include campaigns created after this ISO 8601 datetime.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Only include campaigns created before this ISO 8601 datetime.
   * @default null
   */
  before: string | null;
  /**
   * Uuid
   * @description Filter campaigns by their unique UUID.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_CAMPAIGNS tool output.
 */
type TEXTIT_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of campaign objects.
       */
      results: {
          /**
           * Archived
           * @description Whether the campaign is archived.
           */
          archived: boolean;
          /**
           * Created On
           * @description UTC timestamp when the campaign was created.
           */
          created_on: string;
          /**
           * Group
           * @description Associated group for the campaign.
           */
          group: {
              /**
               * Name
               * @description Name of the group.
               */
              name: string;
              /**
               * Uuid
               * @description UUID of the group.
               */
              uuid: string;
          };
          /**
           * Name
           * @description Name of the campaign.
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the campaign.
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_CAMPAIGN_EVENTS tool input.
 */
type TEXTIT_LIST_CAMPAIGN_EVENTS_INPUT = {
  /**
   * Campaign
   * @description UUID of the campaign to filter events
   * @default null
   */
  campaign: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_CAMPAIGN_EVENTS tool output.
 */
type TEXTIT_LIST_CAMPAIGN_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of campaign events available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of campaign event objects
       */
      results: {
          /**
           * Campaign
           * @description UUID of the parent campaign
           */
          campaign: string;
          /**
           * Created On
           * @description ISO8601 timestamp when the event was created
           */
          created_on: string;
          /**
           * Delivery Hour
           * @description Hour of day (0–23) when the event will be delivered
           */
          delivery_hour: number;
          /**
           * Flow
           * @description UUID of the flow to start when triggered
           */
          flow: string;
          /**
           * Modified On
           * @description ISO8601 timestamp when the event was last modified
           */
          modified_on: string;
          /**
           * Offset
           * @description Number of days after relative_to when the event triggers
           */
          offset: number;
          /**
           * Relative To
           * @description Case property key the event timing is relative to
           */
          relative_to: string;
          /**
           * Repeat
           * @description Whether the event repeats
           */
          repeat: boolean;
          /**
           * Uuid
           * @description Unique identifier for the campaign event
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_CHANNELS tool input.
 */
type TEXTIT_LIST_CHANNELS_INPUT = {
  /**
   * Page
   * @description Page number for pagination; must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page; must be >= 1.
   * @default null
   */
  page_size: number | null;
  /**
   * Schemes
   * @description Comma-separated list of schemes to filter channels, e.g., "tel,whatsapp".
   * @default null
   */
  schemes: string | null;
  /**
   * Uuid
   * @description Filter by a specific channel UUID.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_CHANNELS tool output.
 */
type TEXTIT_LIST_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of channels matching the query.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of channel objects for the current page.
       */
      results: {
          /**
           * Address
           * @description Channel address, e.g., phone number.
           */
          address: string;
          /**
           * Created On
           * @description Timestamp when channel was created in ISO format.
           */
          created_on: string;
          /**
           * Name
           * @description Channel name.
           */
          name: string;
          /**
           * Org
           * @description Organization UUID owning this channel.
           */
          org: string;
          /**
           * Schemes
           * @description Supported schemes (e.g., ['tel', 'whatsapp']).
           */
          schemes: string[];
          /**
           * Status
           * @description Current status of the channel.
           */
          status: string;
          /**
           * Uuid
           * @description Channel UUID.
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_CONTACTS tool input.
 */
type TEXTIT_LIST_CONTACTS_INPUT = {
  /**
   * After
   * @description Only include contacts modified after this ISO 8601 datetime
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Only include contacts modified before this ISO 8601 datetime
   * @default null
   */
  before: string | null;
  /**
   * Group
   * @description Filter contacts by group name or UUID
   * @default null
   */
  group: string | null;
  /**
   * Urn
   * @description Filter contacts by their Uniform Resource Name (URN)
   * @default null
   */
  urn: string | null;
  /**
   * Uuid
   * @description Filter contacts by their UUID
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_CONTACTS tool output.
 */
type TEXTIT_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of contact objects
       */
      results: {
          /**
           * Created On
           * @description Timestamp when the contact was created (ISO 8601)
           */
          created_on: string;
          /**
           * Fields
           * @description Custom fields of the contact
           */
          fields: {
              [key: string]: string | number | boolean;
          };
          /**
           * Flow
           * @description Flow the contact is currently in.
           * @default null
           */
          flow: {
              /**
               * Name
               * @description Name of the flow
               */
              name: string;
              /**
               * Uuid
               * @description UUID of the flow
               */
              uuid: string;
          } | null;
          /**
           * Groups
           * @description Groups the contact belongs to
           */
          groups: {
              /**
               * Name
               * @description Name of the group
               */
              name: string;
              /**
               * Uuid
               * @description UUID of the group
               */
              uuid: string;
          }[];
          /**
           * Language
           * @description Preferred language of the contact
           * @default null
           */
          language: string | null;
          /**
           * Last Seen On
           * @description Timestamp when the contact last communicated (ISO 8601)
           * @default null
           */
          last_seen_on: string | null;
          /**
           * Modified On
           * @description Timestamp when the contact was last modified (ISO 8601)
           */
          modified_on: string;
          /**
           * Name
           * @description Name of the contact
           */
          name: string;
          /**
           * Status
           * @description Status of the contact (active, blocked, stopped, or archived)
           */
          status: string;
          /**
           * Urns
           * @description URNs associated with the contact
           */
          urns: string[];
          /**
           * Uuid
           * @description Unique identifier of the contact
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_FIELDS tool input.
 */
type TEXTIT_LIST_FIELDS_INPUT = {
  /**
   * Page
   * @description Page number of results to return (default is 1).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page (default is 50).
   * @default null
   */
  page_size: number | null;
  /**
   * Q
   * @description Search string to filter fields by name.
   * @default null
   */
  q: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_FIELDS tool output.
 */
type TEXTIT_LIST_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of custom contact field objects.
       */
      results: {
          /**
           * Created On
           * @description Timestamp when the field was created.
           */
          created_on: string;
          /**
           * Key
           * @description Unique key for the field.
           */
          key: string;
          /**
           * Label
           * @description Display label for the field.
           * @default null
           */
          label: string | null;
          /**
           * Modified On
           * @description Timestamp when the field was last modified.
           */
          modified_on: string;
          /**
           * Name
           * @description Name of the contact field.
           */
          name: string;
          /**
           * Uuid
           * @description Unique identifier for the field.
           */
          uuid: string;
          /**
           * Value Type
           * @description Type of value stored (e.g., text, numeric, datetime).
           */
          value_type: string;
      }[];
      /**
       * Total Count
       * @description Total number of custom contact fields available.
       */
      total_count: number;
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
 * Type of TEXTIT's TEXTIT_LIST_FLOW_STARTS tool input.
 */
type TEXTIT_LIST_FLOW_STARTS_INPUT = {
  /**
   * After
   * @description Only include flow starts after this ISO 8601 datetime.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Only include flow starts before this ISO 8601 datetime.
   * @default null
   */
  before: string | null;
  /**
   * Completed
   * @description Only include completed (true) or incomplete (false) flow starts.
   * @default null
   */
  completed: boolean | null;
  /**
   * Contact
   * @description UUID of the contact to filter flow starts by.
   * @default null
   */
  contact: string | null;
  /**
   * Flow
   * @description UUID of the flow to filter flow starts by.
   * @default null
   */
  flow: string | null;
  /**
   * Page
   * @description Page number of results to retrieve, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page, must be >= 1.
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_FLOW_STARTS tool output.
 */
type TEXTIT_LIST_FLOW_STARTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of flow starts matching the filters.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of flow start records.
       */
      results: {
          /**
           * Completed
           * @description UTC timestamp when the flow was completed (ISO 8601 format), or null if not completed.
           * @default null
           */
          completed: string | null;
          /**
           * Contact
           * @description Contact object associated with this flow start.
           */
          contact: {
              /**
               * Name
               * @description The contact's display name.
               * @default null
               */
              name: string | null;
              /**
               * Uuid
               * @description UUID of the contact.
               */
              uuid: string;
          };
          /**
           * Flow
           * @description Flow object associated with this flow start.
           */
          flow: {
              /**
               * Name
               * @description The flow's name.
               * @default null
               */
              name: string | null;
              /**
               * Uuid
               * @description UUID of the flow.
               */
              uuid: string;
          };
          /**
           * Id
           * @description UUID of the flow start.
           */
          id: string;
          /**
           * Started On
           * @description UTC timestamp when the flow was started (ISO 8601 format).
           */
          started_on: string;
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
 * Type of TEXTIT's TEXTIT_LIST_GLOBALS tool input.
 */
type TEXTIT_LIST_GLOBALS_INPUT = object;

/**
 * Type of TEXTIT's TEXTIT_LIST_GLOBALS tool output.
 */
type TEXTIT_LIST_GLOBALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of global variables.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of global variable objects.
       */
      results: {
          /**
           * Category
           * @description Optional category of the global variable.
           * @default null
           */
          category: string | null;
          /**
           * Key
           * @description The key/name of the global variable.
           */
          key: string;
          /**
           * Modified On
           * @description UTC timestamp when the global variable was last modified (ISO 8601 format).
           */
          modified_on: string;
          /**
           * Uuid
           * @description The unique identifier for the global variable.
           */
          uuid: string;
          /**
           * Value
           * @description The value of the global variable.
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
 * Type of TEXTIT's TEXTIT_LIST_GROUPS tool input.
 */
type TEXTIT_LIST_GROUPS_INPUT = {
  /**
   * Name
   * @description Filter groups by name (substring match).
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of groups per page (must be >= 1).
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_GROUPS tool output.
 */
type TEXTIT_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of groups across all pages.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if there is no next page.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if there is no previous page.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of groups returned on this page.
       */
      results: {
          /**
           * Created On
           * @description ISO 8601 timestamp when the group was created.
           */
          created_on: string;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Size
           * @description Number of contacts in the group.
           */
          size: number;
          /**
           * Uuid
           * @description Unique identifier for the group.
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_LABELS tool input.
 */
type TEXTIT_LIST_LABELS_INPUT = {
  /**
   * Page
   * @description Page number of results to retrieve (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_LABELS tool output.
 */
type TEXTIT_LIST_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of labels available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of label objects on this page
       */
      results: {
          /**
           * Created On
           * @description ISO 8601 timestamp when the label was created
           */
          created_on: string;
          /**
           * Name
           * @description Name of the label
           */
          name: string;
          /**
           * Uuid
           * @description Unique identifier for the label
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_LIST_RUNS tool input.
 */
type TEXTIT_LIST_RUNS_INPUT = {
  /**
   * After
   * @description Only include runs created after this ISO 8601 timestamp.
   * @default null
   */
  after: string | null;
  /**
   * Archived
   * @description If true, only archived runs are returned; if false, only unarchived runs.
   * @default null
   */
  archived: boolean | null;
  /**
   * Before
   * @description Only include runs created before this ISO 8601 timestamp.
   * @default null
   */
  before: string | null;
  /**
   * Contact
   * @description UUID of a contact to filter runs.
   * @default null
   */
  contact: string | null;
  /**
   * Flow
   * @description UUID of a flow to filter runs.
   * @default null
   */
  flow: string | null;
  /**
   * Group
   * @description UUID of a group to filter runs by contact group.
   * @default null
   */
  group: string | null;
  /**
   * Ordering
   * @description Sort results by field(s), prefix with '-' for descending (e.g., '-created_on').
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number of results to retrieve, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Parent
   * @description UUID of a parent run to filter child runs.
   * @default null
   */
  parent: string | null;
  /**
   * Statuses
   * @description Comma-separated list of run statuses to include (e.g., active,completed,expired).
   * @default null
   */
  statuses: string | null;
  /**
   * Text
   * @description Search text within run results.
   * @default null
   */
  text: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_RUNS tool output.
 */
type TEXTIT_LIST_RUNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of runs matching the filters.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null if none.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null if none.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of flow runs.
       */
      results: {
          /**
           * Archived
           * @description Whether this run is archived.
           */
          archived: boolean;
          /**
           * Contact
           * @description UUID of the contact associated with this run.
           */
          contact: string;
          /**
           * Created On
           * @description ISO 8601 timestamp when the run was created.
           */
          created_on: string;
          /**
           * Flow
           * @description UUID of the flow associated with this run.
           */
          flow: string;
          /**
           * Group
           * @description UUID of the group for the run, if any.
           * @default null
           */
          group: string | null;
          /**
           * Id
           * @description UUID of the run.
           */
          id: string;
          /**
           * Modified On
           * @description ISO 8601 timestamp when the run was last modified.
           */
          modified_on: string;
          /**
           * Parent
           * @description UUID of the parent run if this is a child run.
           * @default null
           */
          parent: string | null;
          /**
           * Results
           * @description Mapping of result keys to their counts.
           */
          results: {
              [key: string]: number;
          };
          /**
           * Status
           * @description Status of the run (e.g., active, completed, expired).
           */
          status: string;
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
 * Type of TEXTIT's TEXTIT_LIST_TOPICS tool input.
 */
type TEXTIT_LIST_TOPICS_INPUT = {
  /**
   * After
   * @description Cursor for pagination; returns results after this topic UUID.
   * @default null
   */
  after: string | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of TEXTIT's TEXTIT_LIST_TOPICS tool output.
 */
type TEXTIT_LIST_TOPICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of topics.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of topic objects.
       */
      results: {
          /**
           * Created On
           * @description Date topic was created (ISO 8601).
           */
          created_on: string;
          /**
           * Has Messages
           * @description Whether the topic has messages associated.
           */
          has_messages: boolean;
          /**
           * Is Archived
           * @description Whether the topic is archived.
           */
          is_archived: boolean;
          /**
           * Modified On
           * @description Date topic was last modified (ISO 8601).
           */
          modified_on: string;
          /**
           * Name
           * @description Topic name.
           */
          name: string;
          /**
           * Uuid
           * @description Unique identifier for the topic.
           */
          uuid: string;
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
 * Type of TEXTIT's TEXTIT_SEND_BROADCAST tool input.
 */
type TEXTIT_SEND_BROADCAST_INPUT = {
  /**
   * Attachments
   * @description The attachment translations, with ISO-639-3 language codes as keys. Each list contains media object UUIDs.
   * @default null
   */
  attachments: {
      [key: string]: string[];
  } | null;
  /**
   * Base Language
   * @description The default translation language, specified as an ISO-639-3 language code.
   * @default null
   */
  base_language: string | null;
  /**
   * Contacts
   * @description The UUIDs of contacts to send the broadcast to. Maximum of 100 contacts.
   * @default null
   */
  contacts: string[] | null;
  /**
   * Groups
   * @description The UUIDs of contact groups to send the broadcast to. Maximum of 100 groups.
   * @default null
   */
  groups: string[] | null;
  /**
   * Quick Replies
   * @description The quick replies translations, with ISO-639-3 language codes as keys. Each list contains quick reply objects with 'text' and optional 'extra'.
   * @default null
   */
  quick_replies: {
      [key: string]: {
          /**
           * Extra
           * @description Optional extra payload for the quick reply.
           * @default null
           */
          extra: string | null;
          /**
           * Text
           * @description The display text for the quick reply.
           */
          text: string;
      }[];
  } | null;
  /**
   * Text
   * @description The message text translations, with ISO-639-3 language codes as keys.
   */
  text?: {
      [key: string]: string;
  };
  /**
   * Urns
   * @description The URNs (Uniform Resource Names) of contacts to send the broadcast to. Each URN should be in full E.164 format. Maximum of 100 URNs.
   * @default null
   */
  urns: string[] | null;
};

/**
 * Type of TEXTIT's TEXTIT_SEND_BROADCAST tool output.
 */
type TEXTIT_SEND_BROADCAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description The attachment translations, with ISO-639-3 language codes as keys. Each list contains media object UUIDs.
       * @default null
       */
      attachments: {
          [key: string]: string[];
      } | null;
      /**
       * Base Language
       * @description The default translation language, specified as an ISO-639-3 language code.
       * @default null
       */
      base_language: string | null;
      /**
       * Contacts
       * @description The contacts that received the broadcast.
       */
      contacts: {
          /**
           * Name
           * @description Display name of the contact.
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the contact.
           */
          uuid: string;
      }[];
      /**
       * Created On
       * @description The timestamp when the broadcast was created, in UTC format (YYYY-MM-DDThh:mm:ss.ssssssZ).
       */
      created_on: string;
      /**
       * Groups
       * @description The groups that received the broadcast.
       */
      groups: {
          /**
           * Name
           * @description Name of the contact group.
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the group.
           */
          uuid: string;
      }[];
      /**
       * Id
       * @description The ID of the broadcast.
       */
      id: number;
      /**
       * Quick Replies
       * @description The quick replies translations, with ISO-639-3 language codes as keys. Each list contains quick reply objects with 'text' and optional 'extra'.
       * @default null
       */
      quick_replies: {
          [key: string]: {
              /**
               * Extra
               * @description Optional extra payload for the quick reply.
               * @default null
               */
              extra: string | null;
              /**
               * Text
               * @description The display text for the quick reply.
               */
              text: string;
          }[];
      } | null;
      /**
       * Text
       * @description The message text translations, with ISO-639-3 language codes as keys.
       */
      text: {
          [key: string]: string;
      };
      /**
       * Urns
       * @description The URNs that received the broadcast.
       */
      urns: string[];
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
 * Type of TEXTIT's TEXTIT_UPDATE_CONTACT tool input.
 */
type TEXTIT_UPDATE_CONTACT_INPUT = {
  /**
   * Fields
   * @description Key-value pairs for custom contact fields (up to 100 items).
   * @default null
   */
  fields: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Groups
   * @description List of group UUIDs to assign the contact to (up to 100 items).
   * @default null
   */
  groups: string[] | null;
  /**
   * Language
   * @description Preferred language of the contact (3-letter ISO code).
   * @default null
   */
  language: string | null;
  /**
   * Name
   * @description The contact's display name.
   * @default null
   */
  name: string | null;
  /**
   * Urn
   * @description A URN identifying the contact to update (e.g., tel:+250788123123).
   * @default null
   */
  urn: string | null;
  /**
   * Urns
   * @description List of URNs to associate with the contact (up to 100 items).
   * @default null
   */
  urns: string[] | null;
  /**
   * Uuid
   * @description The UUID of the contact to update.
   * @default null
   */
  uuid: string | null;
};

/**
 * Type of TEXTIT's TEXTIT_UPDATE_CONTACT tool output.
 */
type TEXTIT_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description Timestamp when the contact was created.
       */
      created_on: string;
      /**
       * Fields
       * @description Custom data fields for the contact.
       * @default null
       */
      fields: {
          [key: string]: string | number | boolean;
      } | null;
      /**
       * Flow
       * @description Flow the contact is currently in, if any.
       * @default null
       */
      flow: {
          [key: string]: unknown;
      } | null;
      /**
       * Groups
       * @description Groups the contact belongs to.
       * @default null
       */
      groups: {
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Uuid
           * @description UUID of the group.
           */
          uuid: string;
      }[] | null;
      /**
       * Language
       * @description Preferred language of the contact (3-letter ISO code).
       * @default null
       */
      language: string | null;
      /**
       * Last Seen On
       * @description Timestamp when the contact last communicated.
       * @default null
       */
      last_seen_on: string | null;
      /**
       * Modified On
       * @description Timestamp when the contact was last modified.
       */
      modified_on: string;
      /**
       * Name
       * @description Display name of the contact.
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Status of the contact, one of 'active', 'blocked', 'stopped', or 'archived'.
       */
      status: string;
      /**
       * Urns
       * @description URNs associated with the contact.
       */
      urns: string[];
      /**
       * Uuid
       * @description UUID of the contact.
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
 * Type map of all available tool input types for toolkit "TEXTIT".
 */
export type TEXTIT_TOOL_INPUTS = {
  CREATE_CAMPAIGN: TEXTIT_CREATE_CAMPAIGN_INPUT
  CREATE_GROUP: TEXTIT_CREATE_GROUP_INPUT
  CREATE_LABEL: TEXTIT_CREATE_LABEL_INPUT
  DELETE_CONTACT: TEXTIT_DELETE_CONTACT_INPUT
  DELETE_GROUP: TEXTIT_DELETE_GROUP_INPUT
  GET_CAMPAIGN: TEXTIT_GET_CAMPAIGN_INPUT
  LIST_ARCHIVES: TEXTIT_LIST_ARCHIVES_INPUT
  LIST_BROADCASTS: TEXTIT_LIST_BROADCASTS_INPUT
  LIST_CAMPAIGNS: TEXTIT_LIST_CAMPAIGNS_INPUT
  LIST_CAMPAIGN_EVENTS: TEXTIT_LIST_CAMPAIGN_EVENTS_INPUT
  LIST_CHANNELS: TEXTIT_LIST_CHANNELS_INPUT
  LIST_CONTACTS: TEXTIT_LIST_CONTACTS_INPUT
  LIST_FIELDS: TEXTIT_LIST_FIELDS_INPUT
  LIST_FLOW_STARTS: TEXTIT_LIST_FLOW_STARTS_INPUT
  LIST_GLOBALS: TEXTIT_LIST_GLOBALS_INPUT
  LIST_GROUPS: TEXTIT_LIST_GROUPS_INPUT
  LIST_LABELS: TEXTIT_LIST_LABELS_INPUT
  LIST_RUNS: TEXTIT_LIST_RUNS_INPUT
  LIST_TOPICS: TEXTIT_LIST_TOPICS_INPUT
  SEND_BROADCAST: TEXTIT_SEND_BROADCAST_INPUT
  UPDATE_CONTACT: TEXTIT_UPDATE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEXTIT".
 */
export type TEXTIT_TOOL_OUTPUTS = {
  CREATE_CAMPAIGN: TEXTIT_CREATE_CAMPAIGN_OUTPUT
  CREATE_GROUP: TEXTIT_CREATE_GROUP_OUTPUT
  CREATE_LABEL: TEXTIT_CREATE_LABEL_OUTPUT
  DELETE_CONTACT: TEXTIT_DELETE_CONTACT_OUTPUT
  DELETE_GROUP: TEXTIT_DELETE_GROUP_OUTPUT
  GET_CAMPAIGN: TEXTIT_GET_CAMPAIGN_OUTPUT
  LIST_ARCHIVES: TEXTIT_LIST_ARCHIVES_OUTPUT
  LIST_BROADCASTS: TEXTIT_LIST_BROADCASTS_OUTPUT
  LIST_CAMPAIGNS: TEXTIT_LIST_CAMPAIGNS_OUTPUT
  LIST_CAMPAIGN_EVENTS: TEXTIT_LIST_CAMPAIGN_EVENTS_OUTPUT
  LIST_CHANNELS: TEXTIT_LIST_CHANNELS_OUTPUT
  LIST_CONTACTS: TEXTIT_LIST_CONTACTS_OUTPUT
  LIST_FIELDS: TEXTIT_LIST_FIELDS_OUTPUT
  LIST_FLOW_STARTS: TEXTIT_LIST_FLOW_STARTS_OUTPUT
  LIST_GLOBALS: TEXTIT_LIST_GLOBALS_OUTPUT
  LIST_GROUPS: TEXTIT_LIST_GROUPS_OUTPUT
  LIST_LABELS: TEXTIT_LIST_LABELS_OUTPUT
  LIST_RUNS: TEXTIT_LIST_RUNS_OUTPUT
  LIST_TOPICS: TEXTIT_LIST_TOPICS_OUTPUT
  SEND_BROADCAST: TEXTIT_SEND_BROADCAST_OUTPUT
  UPDATE_CONTACT: TEXTIT_UPDATE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEXTIT toolkit.
 */
export const TEXTIT = {
  slug: "textit",
  tools: {
    /**
     * Tool to create a new campaign in textit. use when you need to start a messaging campaign for a specific contact group.
     */
    CREATE_CAMPAIGN: "TEXTIT_CREATE_CAMPAIGN",
    /**
     * Tool to create a new contact group. use when segmenting contacts before sending messages.
     */
    CREATE_GROUP: "TEXTIT_CREATE_GROUP",
    /**
     * Tool to create a new message label. use when you need to categorize messages. example: create a label 'important'. creates a label under your organization using the textit labels api.
     */
    CREATE_LABEL: "TEXTIT_CREATE_LABEL",
    /**
     * Tool to delete an existing contact. use when you have the contact's uuid and need to remove it.
     */
    DELETE_CONTACT: "TEXTIT_DELETE_CONTACT",
    /**
     * Tool to delete an existing contact group. use after ensuring the group has no active triggers or campaigns.
     */
    DELETE_GROUP: "TEXTIT_DELETE_GROUP",
    /**
     * Tool to retrieve details about a specific campaign. use when you have the campaign's uuid and need its full metadata.
     */
    GET_CAMPAIGN: "TEXTIT_GET_CAMPAIGN",
    /**
     * Tool to retrieve a list of message and run archives. use when you need to browse or manage existing archives after authenticating.
     */
    LIST_ARCHIVES: "TEXTIT_LIST_ARCHIVES",
    /**
     * Tool to list broadcasts. use when you need to retrieve broadcasts with optional filters and pagination.
     */
    LIST_BROADCASTS: "TEXTIT_LIST_BROADCASTS",
    /**
     * Tool to list campaigns. use after authentication to retrieve campaigns, optionally filtering by uuid or date range.
     */
    LIST_CAMPAIGNS: "TEXTIT_LIST_CAMPAIGNS",
    /**
     * Tool to retrieve a list of campaign events. use when you need to inspect scheduling or delivery settings; optionally filter by campaign uuid.
     */
    LIST_CAMPAIGN_EVENTS: "TEXTIT_LIST_CAMPAIGN_EVENTS",
    /**
     * Tool to list channels. use when you need to retrieve a paginated list of your organization's channels after confirming authentication.
     */
    LIST_CHANNELS: "TEXTIT_LIST_CHANNELS",
    /**
     * Tool to retrieve a list of contacts. use when you need to fetch contacts with optional filters (uuid, urn, group, or modified date). use after authenticating your client.
     */
    LIST_CONTACTS: "TEXTIT_LIST_CONTACTS",
    /**
     * Tool to retrieve a list of custom contact fields. use when you need to view or filter all defined contact fields with pagination and optional search.
     */
    LIST_FIELDS: "TEXTIT_LIST_FIELDS",
    /**
     * Tool to retrieve a list of manual flow starts. use when you need to fetch flow start records with optional filters and pagination.
     */
    LIST_FLOW_STARTS: "TEXTIT_LIST_FLOW_STARTS",
    /**
     * Tool to list global variables. use when you need to retrieve all workspace-level variables after authenticating.
     */
    LIST_GLOBALS: "TEXTIT_LIST_GLOBALS",
    /**
     * Tool to list contact groups. use when you need to fetch and paginate groups after authenticating.
     */
    LIST_GROUPS: "TEXTIT_LIST_GROUPS",
    /**
     * Tool to retrieve a list of message labels. use when you need to paginate through labels in your textit workspace.
     */
    LIST_LABELS: "TEXTIT_LIST_LABELS",
    /**
     * Tool to retrieve a list of flow runs. use when you need to filter or browse run history by flow, contact, or status.
     */
    LIST_RUNS: "TEXTIT_LIST_RUNS",
    /**
     * Tool to list topics in the workspace. use when you need to retrieve all topics, optionally paginated. use after authenticating with a valid token.
     */
    LIST_TOPICS: "TEXTIT_LIST_TOPICS",
    /**
     * Tool to send a new broadcast message. use after composing message translations and selecting recipients (urns, contacts, or groups).
     */
    SEND_BROADCAST: "TEXTIT_SEND_BROADCAST",
    /**
     * Tool to update an existing contact. use after identifying the contact's uuid or urn and preparing details.
     */
    UPDATE_CONTACT: "TEXTIT_UPDATE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEXTIT".
 */
export type TEXTIT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEXTIT".
 */
export type TEXTIT_TRIGGER_EVENTS = {}
