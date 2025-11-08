// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER_INPUT = {
  /**
   * Account Name
   * @description Account identifier under which the subscriber will be added.
   */
  accountName?: string;
  /**
   * Email
   * @description Subscriber's email address (must be a valid email)
   */
  email?: string;
  /**
   * Fields
   * @description Additional custom fields to populate for this subscriber
   * @default null
   */
  fields: {
      /**
       * Name
       * @description Field name as defined in Doppler
       */
      name: string;
      /**
       * Value
       * @description Value for this field
       */
      value: string;
  }[] | null;
  /**
   * Language
   * @description Language code for the subscriber, e.g., 'EN' or 'ES'
   * @default null
   */
  language: string | null;
  /**
   * List Id
   * @description The unique identifier of the subscriber list.
   */
  list_id?: number;
  /**
   * Origin
   * @description Origin identifier for where the subscriber came from
   * @default null
   */
  origin: string | null;
  /**
   * Sent Optional Mailing
   * @description Whether to immediately send the optional welcome mailing
   * @default null
   */
  sentOptionalMailing: boolean | null;
  /**
   * Status
   * @description Subscription status to assign
   * @default null
   * @enum {string|null}
   */
  status: "active" | "inactive" | "pending" | null;
  /**
   * Tags
   * @description Custom tags for grouping or classification
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email of the created or updated subscriber
       */
      email: string;
      /**
       * Errors
       * @description List of errors if the API was unable to create/update the subscriber
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: string;
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
      }[] | null;
      /**
       * Id
       * @description Unique Doppler-assigned subscriber ID
       */
      id: number;
      /**
       * Status
       * @description Final status after the operation
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_CREATE_LIST tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_CREATE_LIST_INPUT = {
  /**
   * Account Name
   * @description Account identifier under which the list will be created.
   */
  accountName?: string;
  /**
   * Description
   * @description Description of the subscriber list.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the subscriber list.
   */
  name?: string;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_CREATE_LIST tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the list was created (ISO 8601).
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the created list.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the created list.
       */
      id: number;
      /**
       * Name
       * @description Name of the created list.
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_DELETE_LIST tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_DELETE_LIST_INPUT = {
  /**
   * Account Name
   * @description Doppler account name under which the list exists.
   */
  accountName?: string;
  /**
   * List Id
   * @description Unique identifier of the list to delete.
   */
  listId?: number;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_DELETE_LIST tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the deletion failed.
       * @default null
       */
      error: string | null;
      /**
       * Succeeded
       * @description Indicates if the deletion was successful.
       */
      succeeded: boolean;
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS_INPUT = {
  /**
   * Account Name
   * @description Name of the Doppler account (path parameter).
   */
  accountName?: string;
  /**
   * Date From
   * @description ISO 8601 start date to filter campaigns.
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * @description ISO 8601 end date to filter campaigns.
   * @default null
   */
  dateTo: string | null;
  /**
   * Limit
   * @description Maximum number of campaigns to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of campaigns to skip (pagination offset).
   * @default null
   */
  offset: number | null;
  /**
   * Status
   * @description Filter campaigns by status.
   * @default null
   */
  status: string | null;
  /**
   * Type
   * @description Filter campaigns by type.
   * @default null
   */
  type: string | null;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of campaign objects.
       */
      items: {
          /**
           * Creation Date
           * @description ISO 8601 creation date of the campaign.
           */
          creationDate: string;
          /**
           * Id
           * @description Unique identifier for the campaign.
           */
          id: string;
          /**
           * Name
           * @description Name of the campaign.
           */
          name: string;
          /**
           * Scheduled Date
           * @description ISO 8601 scheduled date of the campaign, if applicable.
           * @default null
           */
          scheduledDate: string | null;
          /**
           * Sent Date
           * @description ISO 8601 sent date of the campaign, if sent.
           * @default null
           */
          sentDate: string | null;
          /**
           * Status
           * @description Current status of the campaign.
           */
          status: string;
          /**
           * Type
           * @description Type of the campaign.
           */
          type: string;
      }[];
      /**
       * Total Count
       * @description Total number of campaigns matching criteria.
       */
      totalCount: number;
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_LIST tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_LIST_INPUT = {
  /**
   * Account Name
   * @description Name of the Doppler account (path parameter).
   */
  accountName?: string;
  /**
   * List Id
   * @description Unique identifier of the list to retrieve.
   */
  listId?: string;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_LIST tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Associated List Id
       * @description Id of the associated list, if any.
       * @default null
       */
      associatedListId: number | null;
      /**
       * Associated List Name
       * @description Name of the associated list, if any.
       * @default null
       */
      associatedListName: string | null;
      /**
       * Created By
       * @description Email of the user who created the list.
       * @default null
       */
      createdBy: string | null;
      /**
       * Creation Date
       * @description Timestamp when the list was created (ISO 8601 format).
       */
      creationDate: string;
      /**
       * Current Status
       * @description Current status of the list.
       * @default null
       */
      currentStatus: string | null;
      /**
       * Deleted
       * @description If the list is deleted or not.
       * @default null
       */
      deleted: boolean | null;
      /**
       * List Id
       * @description Unique identifier of the list.
       */
      listId: number;
      /**
       * Name
       * @description Name of the list.
       */
      name: string;
      /**
       * Status
       * @description Status of the list.
       * @default null
       */
      status: string | null;
      /**
       * Subscribers Count
       * @description Number of subscribers on the list.
       */
      subscribersCount: number;
      /**
       * Unsubscribers Count
       * @description Number of unsubscribers on the list.
       * @default null
       */
      unsubscribersCount: number | null;
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_LISTS tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_LISTS_INPUT = {
  /**
   * Account Name
   * @description Name of the Doppler account (path parameter).
   */
  accountName?: string;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_LISTS tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Collection of mailing lists for the account.
       */
      items: {
          /**
           * Created At
           * @description Creation date of the list (ISO 8601).
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the list.
           */
          id: string;
          /**
           * Name
           * @description Name of the list.
           */
          name: string;
          /**
           * Subscribers Count
           * @description Number of subscribers in the list.
           */
          subscribersCount: number;
      }[];
      /**
       * Items Per Page
       * @description Number of items per page.
       */
      itemsPerPage: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total Items
       * @description Total number of lists available.
       */
      totalItems: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      totalPages: number;
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS_INPUT = {
  /**
   * Account Name
   * @description Account identifier to retrieve removed subscribers for.
   */
  accountName?: string;
  /**
   * From Date
   * @description Start date filter for removed subscribers (YYYY-MM-DD).
   * @default null
   */
  from_date: string | null;
  /**
   * Page
   * @description Page number of results.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page.
   * @default null
   */
  per_page: number | null;
  /**
   * To Date
   * @description End date filter for removed subscribers (YYYY-MM-DD).
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of removed subscriber objects.
       */
      items: {
          /**
           * Email
           * @description The email address of the removed subscriber.
           */
          email: string;
          /**
           * Reason
           * @description Reason for removal.
           */
          reason: string;
          /**
           * Removed Date
           * @description Date when the subscriber was removed (ISO 8601).
           */
          removedDate: string;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of removed subscribers.
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER_INPUT = {
  /**
   * Account Id
   * @description Unique identifier of the Doppler account.
   */
  account_id?: string;
  /**
   * Email
   * Format: email
   * @description Email address of the subscriber to retrieve.
   */
  email?: string;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description List of custom fields associated with the subscriber.
       */
      customFields: {
          /**
           * Name
           * @description Name of the custom field.
           */
          name: string;
          /**
           * Value
           * @description Value of the custom field.
           */
          value: string;
      }[];
      /**
       * Email
       * @description The subscriber's email address.
       */
      email: string;
      /**
       * Name
       * @description The subscriber's name.
       * @default null
       */
      name: string | null;
      /**
       * Status
       * @description Subscription status (e.g., active, unsubscribed).
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS_INPUT = {
  /**
   * Account Name
   * @description Name of the Doppler account (path parameter).
   */
  accountName?: string;
  /**
   * Fields
   * @description Comma-separated list of subscriber fields to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * From Date
   * @description ISO 8601 date-time; only return subscribers added or modified after this timestamp.
   * @default null
   */
  from_date: string | null;
  /**
   * List Id
   * @description The unique identifier of the subscriber list.
   */
  listId?: number;
  /**
   * Page
   * @description Page number for paginated results.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter subscribers by status.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "unsubscribed" | null;
  /**
   * To Date
   * @description ISO 8601 date-time; only return subscribers added or modified before this timestamp.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of results per page.
           */
          per_page: number;
          /**
           * Total Items
           * @description Total number of subscribers.
           */
          total_items: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
      /**
       * Subscribers
       * @description List of subscriber objects.
       */
      subscribers: {
          /**
           * Created At
           * @description Date-time when the subscriber was added (ISO 8601 format).
           */
          created_at: string;
          /**
           * Email
           * @description Subscriber's email address.
           */
          email: string;
          /**
           * Fields
           * @description Key-value pairs of subscriber fields.
           */
          fields: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Subscriber's status.
           */
          status: string;
          /**
           * Updated At
           * @description Date-time when the subscriber was last updated (ISO 8601 format).
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS_INPUT = {
  /**
   * Account Name
   * @description Account identifier under which the import will occur.
   */
  accountName?: string;
  /**
   * List Id
   * @description Unique identifier of the target list
   */
  list_id?: number;
  /**
   * Reimport
   * @description If true, existing subscribers will be re-imported (updated). Defaults to false.
   * @default false
   */
  reimport: boolean | null;
  /**
   * Return Already Existing
   * @description If true, returns subscribers that already exist. Defaults to false.
   * @default false
   */
  returnAlreadyExisting: boolean | null;
  /**
   * Subscribers
   * @description List of subscribers to import
   */
  subscribers?: {
      /**
       * Email
       * @description Subscriber's email address
       */
      email: string;
      /**
       * Fields
       * @description Additional custom fields for the subscriber
       * @default null
       */
      fields: {
          /**
           * Name
           * @description Field name as defined in Doppler
           */
          name: string;
          /**
           * Value
           * @description Value for this custom field
           */
          value: string;
      }[] | null;
  }[];
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Count
       * @description Number of subscribers that failed to import
       */
      errorCount: number;
      /**
       * Errors
       * @description Detailed list of import errors, if any
       */
      errors?: {
          /**
           * Email
           * @description Email address that failed to import
           */
          email: string;
          /**
           * Message
           * @description Error message describing the failure
           */
          message: string;
      }[];
      /**
       * Inserted Count
       * @description Number of new subscribers inserted
       */
      insertedCount: number;
      /**
       * Total Count
       * @description Total number of subscribers processed
       */
      totalCount: number;
      /**
       * Updated Count
       * @description Number of subscribers updated
       */
      updatedCount: number;
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER_INPUT = {
  /**
   * Account Name
   * @description Doppler account name under which the list exists.
   */
  accountName?: string;
  /**
   * List Id
   * @description Unique identifier of the list from which the subscriber will be removed.
   */
  listId?: number;
  /**
   * Subscriber Email
   * Format: email
   * @description Email address of the subscriber to remove from the list.
   */
  subscriberEmail?: string;
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the result of the operation.
       */
      message: string;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
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
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST tool input.
 */
type DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST_INPUT = {
  /**
   * Account Name
   * @description Doppler account name containing the list.
   */
  accountName?: string;
  /**
   * Description
   * @description Updated description of the subscriber list.
   * @default null
   */
  description: string | null;
  /**
   * Is Public
   * @description Whether the list is publicly visible.
   * @default null
   */
  isPublic: boolean | null;
  /**
   * List Id
   * @description Unique identifier of the list to update.
   */
  listId?: number;
  /**
   * Name
   * @description Updated name of the subscriber list.
   */
  name?: string;
  /**
   * Opt In Type
   * @description Opt-in type for the list (Single or Double).
   * @enum {string}
   */
  optInType?: "Single" | "Double";
};

/**
 * Type of DOPPLER_MARKETING_AUTOMATION's DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST tool output.
 */
type DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the updated list.
       * @default null
       */
      description: string | null;
      /**
       * Is Public
       * @description Public visibility of the updated list.
       */
      isPublic: boolean;
      /**
       * List Id
       * @description Identifier of the updated list.
       */
      listId: number;
      /**
       * Name
       * @description Name of the updated list.
       */
      name: string;
      /**
       * Opt In Type
       * @description Opt-in type of the updated list.
       */
      optInType: string;
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
 * Type map of all available tool input types for toolkit "DOPPLER_MARKETING_AUTOMATION".
 */
export type DOPPLER_MARKETING_AUTOMATION_TOOL_INPUTS = {
  ADD_SUBSCRIBER: DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER_INPUT
  CREATE_LIST: DOPPLER_MARKETING_AUTOMATION_CREATE_LIST_INPUT
  DELETE_LIST: DOPPLER_MARKETING_AUTOMATION_DELETE_LIST_INPUT
  GET_CAMPAIGNS: DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS_INPUT
  GET_LIST: DOPPLER_MARKETING_AUTOMATION_GET_LIST_INPUT
  GET_LISTS: DOPPLER_MARKETING_AUTOMATION_GET_LISTS_INPUT
  GET_REMOVED_SUBSCRIBERS: DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS_INPUT
  GET_SUBSCRIBER: DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER_INPUT
  GET_SUBSCRIBERS: DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS_INPUT
  IMPORT_SUBSCRIBERS: DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS_INPUT
  REMOVE_SUBSCRIBER: DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER_INPUT
  UPDATE_LIST: DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOPPLER_MARKETING_AUTOMATION".
 */
export type DOPPLER_MARKETING_AUTOMATION_TOOL_OUTPUTS = {
  ADD_SUBSCRIBER: DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER_OUTPUT
  CREATE_LIST: DOPPLER_MARKETING_AUTOMATION_CREATE_LIST_OUTPUT
  DELETE_LIST: DOPPLER_MARKETING_AUTOMATION_DELETE_LIST_OUTPUT
  GET_CAMPAIGNS: DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS_OUTPUT
  GET_LIST: DOPPLER_MARKETING_AUTOMATION_GET_LIST_OUTPUT
  GET_LISTS: DOPPLER_MARKETING_AUTOMATION_GET_LISTS_OUTPUT
  GET_REMOVED_SUBSCRIBERS: DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS_OUTPUT
  GET_SUBSCRIBER: DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER_OUTPUT
  GET_SUBSCRIBERS: DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS_OUTPUT
  IMPORT_SUBSCRIBERS: DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS_OUTPUT
  REMOVE_SUBSCRIBER: DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER_OUTPUT
  UPDATE_LIST: DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOPPLER_MARKETING_AUTOMATION toolkit.
 */
export const DOPPLER_MARKETING_AUTOMATION = {
  slug: "doppler_marketing_automation",
  tools: {
    /**
     * Tool to add a new subscriber to a specific list for a specified account.
     */
    ADD_SUBSCRIBER: "DOPPLER_MARKETING_AUTOMATION_ADD_SUBSCRIBER",
    /**
     * Tool to create a new subscriber list for a specified account. use when you need to segment contacts into a new list.
     */
    CREATE_LIST: "DOPPLER_MARKETING_AUTOMATION_CREATE_LIST",
    /**
     * Tool to delete a specific subscriber list by its id. use when permanently removing a list after confirming its no longer needed.
     */
    DELETE_LIST: "DOPPLER_MARKETING_AUTOMATION_DELETE_LIST",
    /**
     * Tool to retrieve all campaigns associated with the specified account. use after confirming the accountname to fetch campaigns.
     */
    GET_CAMPAIGNS: "DOPPLER_MARKETING_AUTOMATION_GET_CAMPAIGNS",
    /**
     * Tool to retrieve details of a specific subscriber list by its id. use when you need to fetch metadata of an existing list.
     */
    GET_LIST: "DOPPLER_MARKETING_AUTOMATION_GET_LIST",
    /**
     * Tool to retrieve all lists associated with a specified doppler account. use when you need an overview of all mailing lists. example: "retrieve lists for account partnerships@composio.dev"
     */
    GET_LISTS: "DOPPLER_MARKETING_AUTOMATION_GET_LISTS",
    /**
     * Tool to retrieve subscribers removed from all lists. use when you need to audit unsubscribes within a date range.
     */
    GET_REMOVED_SUBSCRIBERS: "DOPPLER_MARKETING_AUTOMATION_GET_REMOVED_SUBSCRIBERS",
    /**
     * Tool to retrieve details of a specific subscriber by their email. use when you need to fetch subscriber information for a given account.
     */
    GET_SUBSCRIBER: "DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBER",
    /**
     * Tool to retrieve all subscribers of a specific list. use when you need to fetch subscribers by list id.
     */
    GET_SUBSCRIBERS: "DOPPLER_MARKETING_AUTOMATION_GET_SUBSCRIBERS",
    /**
     * Tool to import multiple subscribers into a specific list in bulk. use when you need to add or update a batch of subscriber records after preparing the data.
     */
    IMPORT_SUBSCRIBERS: "DOPPLER_MARKETING_AUTOMATION_IMPORT_SUBSCRIBERS",
    /**
     * Tool to remove a specific subscriber from a list. use when you need to delete a subscriber after confirming they should no longer be subscribed.
     */
    REMOVE_SUBSCRIBER: "DOPPLER_MARKETING_AUTOMATION_REMOVE_SUBSCRIBER",
    /**
     * Tool to update details of an existing subscriber list. use when you need to modify list metadata after creation.
     */
    UPDATE_LIST: "DOPPLER_MARKETING_AUTOMATION_UPDATE_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOPPLER_MARKETING_AUTOMATION".
 */
export type DOPPLER_MARKETING_AUTOMATION_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOPPLER_MARKETING_AUTOMATION".
 */
export type DOPPLER_MARKETING_AUTOMATION_TRIGGER_EVENTS = {}
