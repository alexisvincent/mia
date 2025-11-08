// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WHAUTOMATE's WHAUTOMATE_ADD_CONTACT tool input.
 */
type WHAUTOMATE_ADD_CONTACT_INPUT = {
  /**
   * Custom Fields
   * @description Custom fields for the contact.
   * @default null
   */
  customFields: {
      [key: string]: string;
  } | null;
  /**
   * Id
   * @description Unique identifier for the contact. If omitted, the server generates one.
   * @default null
   */
  id: string | null;
  /**
   * Location
   * @description Location details for the contact.
   */
  location?: {
      /**
       * Id
       * @description Unique identifier for the location.
       */
      id: string;
      /**
       * Title
       * @description Title or name of the location.
       */
      title: string;
  };
  /**
   * Name
   * @description Name of the contact.
   */
  name?: string;
  /**
   * Notes
   * @description Additional notes about the contact.
   * @default null
   */
  notes: string | null;
  /**
   * Phone Number
   * @description Phone number of the contact, including country code.
   */
  phoneNumber?: string;
  /**
   * Stage
   * @description Stage of the contact in the sales funnel.
   * @default null
   * @enum {string|null}
   */
  stage: "Subscriber" | "Engaged" | "Lead" | "Marketing qualified lead (MQL)" | "Sales qualified lead (SQL)" | "Opportunity" | "Follow-up Required" | "Customer" | "Evangelist" | "Other" | "Lost" | "Inactive" | null;
  /**
   * Tags
   * @description Tags associated with the contact.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_ADD_CONTACT tool output.
 */
type WHAUTOMATE_ADD_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Fields
       * @description Custom fields for the contact.
       * @default null
       */
      customFields: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier for the contact.
       */
      id: string;
      /**
       * Location
       * @description Location details of the contact.
       */
      location: {
          /**
           * Id
           * @description Unique identifier for the location.
           */
          id: string;
          /**
           * Title
           * @description Title or name of the location.
           */
          title: string;
      };
      /**
       * Name
       * @description Name of the contact.
       */
      name: string;
      /**
       * Notes
       * @description Additional notes about the contact.
       * @default null
       */
      notes: string | null;
      /**
       * Phone Number
       * @description Phone number of the contact.
       */
      phoneNumber: string;
      /**
       * Stage
       * @description Stage of the contact.
       * @default null
       */
      stage: string | null;
      /**
       * Tags
       * @description Tags associated with the contact.
       * @default null
       */
      tags: string[] | null;
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
 * Type of WHAUTOMATE's WHAUTOMATE_DELETE_SEGMENT tool input.
 */
type WHAUTOMATE_DELETE_SEGMENT_INPUT = {
  /**
   * Segment Id
   * @description Unique identifier of the segment to delete
   */
  segmentId?: string;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_DELETE_SEGMENT tool output.
 */
type WHAUTOMATE_DELETE_SEGMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information or error details
       */
      message: string;
      /**
       * Success
       * @description True if the segment was deleted successfully
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
 * Type of WHAUTOMATE's WHAUTOMATE_DELETE_SERVICE_CATEGORY tool input.
 */
type WHAUTOMATE_DELETE_SERVICE_CATEGORY_INPUT = {
  /**
   * Service Category Id
   * @description Unique identifier of the service category to delete
   */
  serviceCategoryId?: string;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_DELETE_SERVICE_CATEGORY tool output.
 */
type WHAUTOMATE_DELETE_SERVICE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the service category was deleted successfully
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_ALL_WEBHOOKS tool input.
 */
type WHAUTOMATE_GET_ALL_WEBHOOKS_INPUT = object;

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_ALL_WEBHOOKS tool output.
 */
type WHAUTOMATE_GET_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of registered webhooks
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the webhook was created
       */
      createdAt: string;
      /**
       * Enabled
       * @description Whether the webhook is currently enabled
       */
      enabled: boolean;
      /**
       * Event Types
       * @description List of event types this webhook is subscribed to
       */
      eventTypes: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the webhook was last updated
       */
      updatedAt: string;
      /**
       * Url
       * @description Webhook endpoint URL
       */
      url: string;
      /**
       * Webhook Id
       * @description Unique webhook identifier
       */
      webhookId: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API message or description of the result
   */
  message?: string;
  /**
   * Status
   * @description API status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_BROADCASTS tool input.
 */
type WHAUTOMATE_GET_BROADCASTS_INPUT = {
  /**
   * From Date
   * @description Include broadcasts scheduled on or after this ISO8601 date
   * @default null
   */
  from_date: string | null;
  /**
   * Limit
   * @description Number of items per page (default:10, max:50)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Status
   * @description Filter by broadcast status
   * @default null
   * @enum {string|null}
   */
  status: "scheduled" | "in_progress" | "completed" | null;
  /**
   * To Date
   * @description Include broadcasts scheduled on or before this ISO8601 date
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_BROADCASTS tool output.
 */
type WHAUTOMATE_GET_BROADCASTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Broadcasts
       * @description List of broadcasts matching the query
       */
      broadcasts: {
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the broadcast
           */
          id: string;
          /**
           * Name
           * @description Name of the broadcast
           */
          name: string;
          /**
           * Scheduled Time
           * @description Scheduled time in ISO8601 format
           */
          scheduled_time: string;
          /**
           * Status
           * @description Current status of the broadcast
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
           */
          updated_at: string;
      }[];
      /**
       * Limit
       * @description Limit applied in the request
       */
      limit: number;
      /**
       * Offset
       * @description Offset applied in the request
       */
      offset: number;
      /**
       * Total
       * @description Total number of broadcasts matching the query
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_BROADCAST_BY_ID tool input.
 */
type WHAUTOMATE_GET_BROADCAST_BY_ID_INPUT = {
  /**
   * Broadcast Id
   * @description Unique identifier of the broadcast to retrieve.
   */
  broadcastId?: string;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_BROADCAST_BY_ID tool output.
 */
type WHAUTOMATE_GET_BROADCAST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Content payload of the broadcast (e.g., text, attachments).
       */
      content: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Broadcast creation timestamp in ISO8601 format.
       */
      createdAt: string;
      /**
       * Delivered
       * @description Number of messages successfully delivered.
       */
      delivered: number;
      /**
       * Failed
       * @description Number of messages that failed to deliver.
       */
      failed: number;
      /**
       * Id
       * @description Unique broadcast ID.
       */
      id: string;
      /**
       * Name
       * @description Name of the broadcast.
       */
      name: string;
      /**
       * Read
       * @description Number of messages read by recipients.
       */
      read: number;
      /**
       * Scheduled At
       * @description Scheduled send time in ISO8601 format, if applicable.
       * @default null
       */
      scheduledAt: string | null;
      /**
       * Sent At
       * @description Send time in ISO8601 format, if the broadcast was sent.
       * @default null
       */
      sentAt: string | null;
      /**
       * Status
       * @description Current status of the broadcast (e.g., scheduled, sent).
       */
      status: string;
      /**
       * Total Recipients
       * @description Total number of targeted recipients.
       */
      totalRecipients: number;
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_CONTACTS tool input.
 */
type WHAUTOMATE_GET_CONTACTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of contacts per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (must be >=1)
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Filter contacts by name or phone
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter contacts by WhatsApp status (e.g., "online", "offline")
   * @default null
   */
  status: string | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_CONTACTS tool output.
 */
type WHAUTOMATE_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of matching contacts
   */
  data?: {
      /**
       * Id
       * @description Unique ID of the contact
       */
      id: string;
      /**
       * Is Blocked
       * @description Indicates whether the contact is blocked
       */
      isBlocked: boolean;
      /**
       * Name
       * @description Contact's display name
       */
      name: string;
      /**
       * Phone
       * @description Contact phone number
       */
      phone: string;
      /**
       * Profile Pic
       * @description URL of the contact's profile picture
       * @default null
       */
      profilePic: string | null;
      /**
       * Status
       * @description WhatsApp status of the contact
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
   * Limit
   * @description Maximum number of contacts per page
   */
  limit?: number;
  /**
   * Page
   * @description Current page number
   */
  page?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of contacts matching the filter
   */
  total?: number;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_MESSAGES_OF_CONTACT tool input.
 */
type WHAUTOMATE_GET_MESSAGES_OF_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to retrieve messages for
   */
  contactId?: string;
  /**
   * End Date
   * @description ISO-8601 date to filter messages on or before this timestamp
   * @default null
   */
  endDate: string | null;
  /**
   * Page
   * @description Page number for pagination (must be >=1)
   * @default null
   */
  page: number | null;
  /**
   * Start Date
   * @description ISO-8601 date to filter messages on or after this timestamp
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_MESSAGES_OF_CONTACT tool output.
 */
type WHAUTOMATE_GET_MESSAGES_OF_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of messages for the contact
       */
      messages: {
          /**
           * Direction
           * @description Direction of the message: 'inbound' or 'outbound'
           */
          direction: string;
          /**
           * Id
           * @description Unique identifier of the message
           */
          id: string;
          /**
           * Message
           * @description Content of the message
           */
          message: string;
          /**
           * Timestamp
           * @description ISO-8601 timestamp when the message was sent or received
           */
          timestamp: string;
          /**
           * Type
           * @description Type of the message, e.g., 'text', 'media'
           */
          type: string;
      }[];
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total Messages
       * @description Total number of messages matching the filters
       */
      totalMessages: number;
      /**
       * Total Pages
       * @description Total number of pages available
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SEGMENTS tool input.
 */
type WHAUTOMATE_GET_SEGMENTS_INPUT = {
  /**
   * Limit
   * @description Number of items per page (pagination limit)
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter segments by partial or full name match
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SEGMENTS tool output.
 */
type WHAUTOMATE_GET_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit applied in the request
       */
      limit: number;
      /**
       * Offset
       * @description Offset applied in the request
       */
      offset: number;
      /**
       * Segments
       * @description List of segments matching the query
       */
      segments: {
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format
           */
          created_at: string;
          /**
           * Description
           * @description Description of the segment
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the segment
           */
          id: string;
          /**
           * Name
           * @description Name of the segment
           */
          name: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of segments matching the query
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SERVICES tool input.
 */
type WHAUTOMATE_GET_SERVICES_INPUT = {
  /**
   * Category Id
   * @description Filter services by a specific category ID
   * @default null
   */
  category_id: string | null;
  /**
   * Fields
   * @description Comma-separated list of service fields to include (e.g., 'id,name,duration')
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Maximum number of services to retrieve (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of services to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Field to sort by, prefix with '-' for descending (e.g., 'name', '-duration')
   * @default null
   */
  sort: string | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SERVICES tool output.
 */
type WHAUTOMATE_GET_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit applied in the request
       */
      limit: number;
      /**
       * Offset
       * @description Offset applied in the request
       */
      offset: number;
      /**
       * Services
       * @description List of services matching the query
       */
      services: {
          /**
           * Active
           * @description Whether the service is active
           */
          active: boolean;
          /**
           * Category Id
           * @description ID of the category this service belongs to
           */
          category_id: string;
          /**
           * Created At
           * @description ISO8601 timestamp when the service was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the service
           * @default null
           */
          description: string | null;
          /**
           * Duration
           * @description Duration of the service in minutes
           */
          duration: number;
          /**
           * Id
           * @description Unique identifier of the service
           */
          id: string;
          /**
           * Name
           * @description Name of the service
           */
          name: string;
          /**
           * Price
           * @description Price of the service
           */
          price: number;
          /**
           * Updated At
           * @description ISO8601 timestamp when the service was last updated
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of services
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SERVICE_BY_ID tool input.
 */
type WHAUTOMATE_GET_SERVICE_BY_ID_INPUT = {
  /**
   * Service Id
   * @description Unique identifier of the service to retrieve
   */
  serviceId?: string;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SERVICE_BY_ID tool output.
 */
type WHAUTOMATE_GET_SERVICE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Configuration
       * @description Service configuration details
       */
      configuration: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Date and time the service was created (ISO8601 format)
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the service
       */
      description: string;
      /**
       * Id
       * @description Unique identifier of the service
       */
      id: string;
      /**
       * Name
       * @description Name of the service
       */
      name: string;
      /**
       * Status
       * @description Current status of the service (e.g., active, inactive)
       */
      status: string;
      /**
       * Updated At
       * @description Date and time the service was last updated (ISO8601 format)
       */
      updatedAt: string;
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SERVICE_CATEGORIES tool input.
 */
type WHAUTOMATE_GET_SERVICE_CATEGORIES_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_SERVICE_CATEGORIES tool output.
 */
type WHAUTOMATE_GET_SERVICE_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description List of retrieved service categories
   */
  data?: {
      /**
       * Description
       * @description Description of the service category
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the service category
       */
      id: string;
      /**
       * Name
       * @description Name of the service category
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
   * Limit
   * @description Limit applied in the request
   */
  limit?: number;
  /**
   * Offset
   * @description Offset applied in the request
   */
  offset?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of service categories available
   */
  total?: number;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_STAFFS tool input.
 */
type WHAUTOMATE_GET_STAFFS_INPUT = {
  /**
   * Limit
   * @description Number of records per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number of results to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search keyword to filter staff by name or number
   * @default null
   */
  search: string | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_STAFFS tool output.
 */
type WHAUTOMATE_GET_STAFFS_OUTPUT = {
  /**
   * Data
   * @description List of staff members
   */
  data?: {
      /**
       * Email
       * @description Email address of the staff member
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the staff member
       */
      id: string;
      /**
       * Name
       * @description Name of the staff member
       */
      name: string;
      /**
       * Phone Number
       * @description Phone number of the staff member
       */
      phone_number: string;
      /**
       * Status
       * @description Current status of the staff member
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
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Limit
       * @description Number of records per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Pages
       * @description Total number of pages available
       */
      pages: number;
      /**
       * Total
       * @description Total number of records available
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS tool input.
 */
type WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS_INPUT = {
  /**
   * End Date
   * @description End date (inclusive) in YYYY-MM-DD format
   * @default null
   */
  endDate: string | null;
  /**
   * Staff Id
   * @description Unique identifier of the staff member
   */
  staffId?: string;
  /**
   * Start Date
   * @description Start date (inclusive) in YYYY-MM-DD format
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS tool output.
 */
type WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Availability Blocks
       * @description List of availability blocks
       */
      availabilityBlocks: {
          /**
           * Date
           * @description Date of the availability block in YYYY-MM-DD format
           */
          date: string;
          /**
           * Id
           * @description Unique identifier of the availability block
           */
          id: string;
          /**
           * Slots
           * @description Time slots within the availability block
           */
          slots: {
              /**
               * End Time
               * @description End time of the slot in HH:MM format
               */
              endTime: string;
              /**
               * End Time Utc
               * @description End time in UTC in HH:MM format
               */
              endTimeUTC: string;
              /**
               * Start Time
               * @description Start time of the slot in HH:MM format
               */
              startTime: string;
              /**
               * Start Time Utc
               * @description Start time in UTC in HH:MM format
               */
              startTimeUTC: string;
          }[];
          /**
           * Staff
           * @description Details of the staff member
           */
          staff: {
              /**
               * First Name
               * @description Staff member's first name
               */
              firstName: string;
              /**
               * Id
               * @description Staff member's unique identifier
               */
              id: string;
              /**
               * Last Name
               * @description Staff member's last name
               */
              lastName: string;
          };
          /**
           * Timezone
           * @description Timezone of the availability block, e.g., 'America/New_York'
           */
          timezone: string;
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
 * Type of WHAUTOMATE's WHAUTOMATE_GET_STAFF_BY_ID tool input.
 */
type WHAUTOMATE_GET_STAFF_BY_ID_INPUT = {
  /**
   * Staff Id
   * @description Unique identifier of the staff member to retrieve
   */
  staffId?: string;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_GET_STAFF_BY_ID tool output.
 */
type WHAUTOMATE_GET_STAFF_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the staff was created
       */
      createdAt: string;
      /**
       * Email
       * @description Staff member's email address
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the staff member
       */
      id: string;
      /**
       * Is Active
       * @description Whether the staff member is active
       */
      isActive: boolean;
      /**
       * Name
       * @description Staff member's full name
       */
      name: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the staff was last updated
       */
      updatedAt: string;
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
 * Type of WHAUTOMATE's WHAUTOMATE_UPDATE_SERVICE tool input.
 */
type WHAUTOMATE_UPDATE_SERVICE_INPUT = {
  /**
   * Config
   * @description Key-value configuration settings for the service.
   * @default null
   */
  config: {
      [key: string]: string | number | boolean | null;
  } | null;
  /**
   * Description
   * @description Updated description for the service.
   * @default null
   */
  description: string | null;
  /**
   * Enabled
   * @description Whether the service should be enabled (true) or disabled (false).
   * @default null
   */
  enabled: boolean | null;
  /**
   * Name
   * @description New name for the service.
   * @default null
   */
  name: string | null;
  /**
   * Service Id
   * @description Unique identifier of the service to update.
   */
  serviceId?: string;
};

/**
 * Type of WHAUTOMATE's WHAUTOMATE_UPDATE_SERVICE tool output.
 */
type WHAUTOMATE_UPDATE_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Configuration settings of the service.
       */
      config: {
          [key: string]: string | number | boolean | null;
      };
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format.
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the service.
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Whether the service is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the service.
       */
      id: string;
      /**
       * Name
       * @description Name of the service.
       */
      name: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format.
       */
      updatedAt: string;
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
 * Type map of all available tool input types for toolkit "WHAUTOMATE".
 */
export type WHAUTOMATE_TOOL_INPUTS = {
  ADD_CONTACT: WHAUTOMATE_ADD_CONTACT_INPUT
  DELETE_SEGMENT: WHAUTOMATE_DELETE_SEGMENT_INPUT
  DELETE_SERVICE_CATEGORY: WHAUTOMATE_DELETE_SERVICE_CATEGORY_INPUT
  GET_ALL_WEBHOOKS: WHAUTOMATE_GET_ALL_WEBHOOKS_INPUT
  GET_BROADCASTS: WHAUTOMATE_GET_BROADCASTS_INPUT
  GET_BROADCAST_BY_ID: WHAUTOMATE_GET_BROADCAST_BY_ID_INPUT
  GET_CONTACTS: WHAUTOMATE_GET_CONTACTS_INPUT
  GET_MESSAGES_OF_CONTACT: WHAUTOMATE_GET_MESSAGES_OF_CONTACT_INPUT
  GET_SEGMENTS: WHAUTOMATE_GET_SEGMENTS_INPUT
  GET_SERVICES: WHAUTOMATE_GET_SERVICES_INPUT
  GET_SERVICE_BY_ID: WHAUTOMATE_GET_SERVICE_BY_ID_INPUT
  GET_SERVICE_CATEGORIES: WHAUTOMATE_GET_SERVICE_CATEGORIES_INPUT
  GET_STAFFS: WHAUTOMATE_GET_STAFFS_INPUT
  GET_STAFF_AVAILABILITY_BLOCKS: WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS_INPUT
  GET_STAFF_BY_ID: WHAUTOMATE_GET_STAFF_BY_ID_INPUT
  UPDATE_SERVICE: WHAUTOMATE_UPDATE_SERVICE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WHAUTOMATE".
 */
export type WHAUTOMATE_TOOL_OUTPUTS = {
  ADD_CONTACT: WHAUTOMATE_ADD_CONTACT_OUTPUT
  DELETE_SEGMENT: WHAUTOMATE_DELETE_SEGMENT_OUTPUT
  DELETE_SERVICE_CATEGORY: WHAUTOMATE_DELETE_SERVICE_CATEGORY_OUTPUT
  GET_ALL_WEBHOOKS: WHAUTOMATE_GET_ALL_WEBHOOKS_OUTPUT
  GET_BROADCASTS: WHAUTOMATE_GET_BROADCASTS_OUTPUT
  GET_BROADCAST_BY_ID: WHAUTOMATE_GET_BROADCAST_BY_ID_OUTPUT
  GET_CONTACTS: WHAUTOMATE_GET_CONTACTS_OUTPUT
  GET_MESSAGES_OF_CONTACT: WHAUTOMATE_GET_MESSAGES_OF_CONTACT_OUTPUT
  GET_SEGMENTS: WHAUTOMATE_GET_SEGMENTS_OUTPUT
  GET_SERVICES: WHAUTOMATE_GET_SERVICES_OUTPUT
  GET_SERVICE_BY_ID: WHAUTOMATE_GET_SERVICE_BY_ID_OUTPUT
  GET_SERVICE_CATEGORIES: WHAUTOMATE_GET_SERVICE_CATEGORIES_OUTPUT
  GET_STAFFS: WHAUTOMATE_GET_STAFFS_OUTPUT
  GET_STAFF_AVAILABILITY_BLOCKS: WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS_OUTPUT
  GET_STAFF_BY_ID: WHAUTOMATE_GET_STAFF_BY_ID_OUTPUT
  UPDATE_SERVICE: WHAUTOMATE_UPDATE_SERVICE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WHAUTOMATE toolkit.
 */
export const WHAUTOMATE = {
  slug: "whautomate",
  tools: {
    /**
     * Tool to add a new contact. use when you need to programmatically create contacts via the api.
     */
    ADD_CONTACT: "WHAUTOMATE_ADD_CONTACT",
    /**
     * Tool to delete a specific segment. use when you need to remove a segment by its id. use after confirming you have the correct segmentid.
     */
    DELETE_SEGMENT: "WHAUTOMATE_DELETE_SEGMENT",
    /**
     * Tool to delete a service category. use when you need to remove a specific service category by its id. use after confirming you have the correct servicecategoryid.
     */
    DELETE_SERVICE_CATEGORY: "WHAUTOMATE_DELETE_SERVICE_CATEGORY",
    /**
     * Tool to retrieve all registered webhooks. use after authenticating to audit or inspect existing webhook subscriptions.
     */
    GET_ALL_WEBHOOKS: "WHAUTOMATE_GET_ALL_WEBHOOKS",
    /**
     * Tool to retrieve a list of broadcasts. use when you need to fetch broadcasts with optional filters such as status or date ranges. example: "get all scheduled broadcasts after 2023-01-01t00:00:00z."
     */
    GET_BROADCASTS: "WHAUTOMATE_GET_BROADCASTS",
    /**
     * Tool to retrieve a specific broadcast's details. use when you have a broadcast id and need its metadata. use after confirming the broadcastid is valid, as this returns detailed broadcast data.
     */
    GET_BROADCAST_BY_ID: "WHAUTOMATE_GET_BROADCAST_BY_ID",
    /**
     * Tool to retrieve a list of contacts. use when you need to fetch contacts from whatsapp with optional pagination and filters.
     */
    GET_CONTACTS: "WHAUTOMATE_GET_CONTACTS",
    /**
     * Tool to retrieve chat messages for a specific contact. use after providing a valid contactid. supports pagination and optional date filtering.
     */
    GET_MESSAGES_OF_CONTACT: "WHAUTOMATE_GET_MESSAGES_OF_CONTACT",
    /**
     * Tool to retrieve a list of segments. use when you need to fetch segments with optional name filtering and pagination.
     */
    GET_SEGMENTS: "WHAUTOMATE_GET_SEGMENTS",
    /**
     * Tool to retrieve a list of services with optional filters. use when you need to fetch available services for display or scheduling.
     */
    GET_SERVICES: "WHAUTOMATE_GET_SERVICES",
    /**
     * Tool to retrieve details of a specific service by its unique id. use when you need comprehensive service information.
     */
    GET_SERVICE_BY_ID: "WHAUTOMATE_GET_SERVICE_BY_ID",
    /**
     * Tool to retrieve a list of service categories. use when you need to list categories with optional pagination.
     */
    GET_SERVICE_CATEGORIES: "WHAUTOMATE_GET_SERVICE_CATEGORIES",
    /**
     * Tool to retrieve a list of staff members. use when you need to list staff with optional pagination or search filters.
     */
    GET_STAFFS: "WHAUTOMATE_GET_STAFFS",
    /**
     * Tool to retrieve a staff member's blocked time schedule over a date range. use when you need to view unavailable slots after confirming staffid and desired date range.
     */
    GET_STAFF_AVAILABILITY_BLOCKS: "WHAUTOMATE_GET_STAFF_AVAILABILITY_BLOCKS",
    /**
     * Tool to retrieve detailed information about a specific staff member. use when you have a valid staff id and need full profile details. use after confirming staffid.
     */
    GET_STAFF_BY_ID: "WHAUTOMATE_GET_STAFF_BY_ID",
    /**
     * Tool to update an existing whatsapp service. use when you need to modify service attributes like name, description, enabled state, or config.
     */
    UPDATE_SERVICE: "WHAUTOMATE_UPDATE_SERVICE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WHAUTOMATE".
 */
export type WHAUTOMATE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WHAUTOMATE".
 */
export type WHAUTOMATE_TRIGGER_EVENTS = {}
