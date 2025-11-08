// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OMNISEND's OMNISEND_CREATE_BATCH tool input.
 */
type OMNISEND_CREATE_BATCH_INPUT = {
  /**
   * Endpoint
   * @description Target endpoint for the operations.
   * @enum {string}
   */
  endpoint?: "contacts" | "orders" | "products" | "events" | "categories";
  /**
   * Event Id
   * @description Required when endpoint is 'events'; the ID of the event to trigger.
   * @default null
   */
  eventID: string | null;
  /**
   * Items
   * @description Array of payload objects for each operation.
   */
  items?: {
      [key: string]: unknown;
  }[];
  /**
   * Method
   * @description HTTP method for all operations in this batch. Must be POST or PUT.
   * @enum {string}
   */
  method?: "POST" | "PUT";
};

/**
 * Type of OMNISEND's OMNISEND_CREATE_BATCH tool output.
 */
type OMNISEND_CREATE_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Batch Id
       * @description Unique identifier for the created batch.
       */
      batchID: string;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format.
       * @default null
       */
      createdAt: string | null;
      /**
       * Ended At
       * @description Batch end timestamp.
       * @default null
       */
      endedAt: string | null;
      /**
       * Errors
       * @description List of errors for failed items.
       */
      errors?: {
          /**
           * Data
           * @description Additional error details returned by the server.
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Item Index
           * @description Zero-based index of the failed item in the request.
           * @default null
           */
          itemIndex: number | null;
          /**
           * Message
           * @description Error message for the failed item.
           */
          message: string;
      }[];
      /**
       * Errors Count
       * @description Number of items that encountered errors.
       * @default null
       */
      errorsCount: number | null;
      /**
       * Finished Count
       * @description Number of successfully processed items.
       * @default null
       */
      finishedCount: number | null;
      /**
       * Responses
       * @description List of responses for processed items.
       */
      responses?: {
          /**
           * Data
           * @description Response body of the individual operation.
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description ID of the created or updated item.
           * @default null
           */
          id: string | null;
          /**
           * Status
           * @description HTTP status code for the item.
           * @default null
           */
          status: number | null;
      }[];
      /**
       * Started At
       * @description Batch start timestamp.
       * @default null
       */
      startedAt: string | null;
      /**
       * Status
       * @description Current status of the batch.
       * @default null
       * @enum {string|null}
       */
      status: "pending" | "inProgress" | "finished" | "stopped" | null;
      /**
       * Total Count
       * @description Total number of items in the batch.
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
 * Type of OMNISEND's OMNISEND_CREATE_OR_UPDATE_CONTACT tool input.
 */
type OMNISEND_CREATE_OR_UPDATE_CONTACT_INPUT = {
  /**
   * Address
   * @description Street address
   * @default null
   */
  address: string | null;
  /**
   * Birthdate
   * Format: date
   * @description Birthdate in YYYY-MM-DD format
   * @default null
   */
  birthdate: unknown;
  /**
   * City
   * @description City name
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Full country name
   * @default null
   */
  country: string | null;
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code
   * @default null
   */
  countryCode: unknown;
  /**
   * First Name
   * @description Contact's first name
   * @default null
   */
  firstName: string | null;
  /**
   * Gender
   * @description Contact's gender ('m' or 'f')
   * @default null
   * @enum {string|null}
   */
  gender: "m" | "f" | null;
  /**
   * Identifiers
   * @description One or more ways to identify the contact; at least one required
   */
  identifiers?: {
      /**
       * ContactChannels
       * @description Channel-specific subscription settings
       * @default null
       */
      channels: {
          /**
           * ContactChannelsEmail
           * @description Email channel subscription details
           * @default null
           */
          email: {
              /**
               * Status
               * @description Subscription status for email channel
               * @enum {string}
               */
              status: "subscribed" | "unsubscribed" | "pending" | "bounced";
              /**
               * Status Date
               * Format: date-time
               * @description ISO 8601 timestamp when the status last changed
               * @default null
               */
              statusDate: unknown;
          } | null;
      } | null;
      /**
       * Id
       * @description Identifier value (e.g. email address)
       */
      id: string;
      /**
       * Send Welcome Message
       * @description If true, Omnisend will send its default welcome email upon creation
       * @default null
       */
      sendWelcomeMessage: boolean | null;
      /**
       * Type
       * @description Type of identifier; only 'email' supported
       * @constant
       */
      type: "email";
  }[];
  /**
   * Last Name
   * @description Contact's last name
   * @default null
   */
  lastName: string | null;
  /**
   * Postal Code
   * @description Postal or ZIP code
   * @default null
   */
  postalCode: string | null;
};

/**
 * Type of OMNISEND's OMNISEND_CREATE_OR_UPDATE_CONTACT tool output.
 */
type OMNISEND_CREATE_OR_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description Omnisend-assigned unique contact ID
       */
      contactID: string;
      /**
       * Email
       * @description Primary email address on record
       */
      email: string;
      /**
       * First Name
       * @description First name
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Last name
       * @default null
       */
      lastName: string | null;
      /**
       * Phone
       * @description Phone number, if provided
       * @default null
       */
      phone: string | null;
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
 * Type of OMNISEND's OMNISEND_DELETE_PRODUCT tool input.
 */
type OMNISEND_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description Unique identifier of the product to delete.
   */
  product_id?: string;
};

/**
 * Type of OMNISEND's OMNISEND_DELETE_PRODUCT tool output.
 */
type OMNISEND_DELETE_PRODUCT_OUTPUT = {
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
 * Type of OMNISEND's OMNISEND_GET_BATCHES tool input.
 */
type OMNISEND_GET_BATCHES_INPUT = {
  /**
   * Endpoint
   * @description Target endpoint for the batch operations to retrieve.
   * @enum {string}
   */
  endpoint?: "contacts" | "orders" | "products" | "events" | "categories";
};

/**
 * Type of OMNISEND's OMNISEND_GET_BATCHES tool output.
 */
type OMNISEND_GET_BATCHES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Batches
       * @description List of batch operations in the store.
       */
      batches: {
          /**
           * Batch Id
           * @description Unique identifier of the batch.
           */
          batchID: string;
          /**
           * Created At
           * @description Timestamp when the batch was created (ISO 8601).
           */
          createdAt: string;
          /**
           * Ended At
           * @description Batch end timestamp (ISO 8601).
           * @default null
           */
          endedAt: string | null;
          /**
           * Endpoint
           * @description Endpoint targeted by the batch.
           */
          endpoint: string;
          /**
           * Errors Count
           * @description Number of items that encountered errors.
           */
          errorsCount: number;
          /**
           * Finished Count
           * @description Number of items processed successfully.
           */
          finishedCount: number;
          /**
           * Method
           * @description HTTP method used for the batch.
           */
          method: string;
          /**
           * Origin
           * @description Origin of the batch operation.
           */
          origin: string;
          /**
           * Started At
           * @description Batch start timestamp (ISO 8601).
           * @default null
           */
          startedAt: string | null;
          /**
           * Status
           * @description Current status of the batch operation.
           */
          status: string;
          /**
           * Total Count
           * @description Total number of items in the batch.
           */
          totalCount: number;
      }[];
      /**
       * Paging
       * @description Pagination details.
       * @default null
       */
      paging: {
          /** Limit */
          limit: number | null;
          /** Next */
          next: string | null;
          /** Offset */
          offset: number | null;
          /** Previous */
          previous: string | null;
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
 * Type of OMNISEND's OMNISEND_GET_BATCH_INFORMATION tool input.
 */
type OMNISEND_GET_BATCH_INFORMATION_INPUT = {
  /**
   * Batch Id
   * @description The unique identifier of the batch to retrieve
   */
  batchId?: string;
};

/**
 * Type of OMNISEND's OMNISEND_GET_BATCH_INFORMATION tool output.
 */
type OMNISEND_GET_BATCH_INFORMATION_OUTPUT = {
  /**
   * Batch Id
   * @description The unique identifier for the batch
   */
  batchId?: string;
  /**
   * Batch Type
   * @description Type of batch, e.g., 'import' or 'export'
   */
  batchType?: string;
  /**
   * Created At
   * @description ISO 8601 timestamp when the batch was created
   */
  createdAt?: string;
  /**
   * Data
   * @description Detailed list of batch item records; structure depends on batchType
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Count
   * @description Number of items that encountered errors
   */
  errorCount?: number;
  /**
   * Processed Count
   * @description Number of successfully processed items
   */
  processedCount?: number;
  /**
   * Status
   * @description Current status of the batch (e.g., 'pending', 'completed')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of items in the batch
   */
  totalCount?: number;
  /**
   * Updated At
   * @description ISO 8601 timestamp when the batch was last updated
   */
  updatedAt?: string;
};

/**
 * Type of OMNISEND's OMNISEND_GET_BATCH_ITEMS tool input.
 */
type OMNISEND_GET_BATCH_ITEMS_INPUT = {
  /**
   * Batch Id
   * @description The unique identifier of the batch whose items you want to retrieve.
   */
  batchId?: string;
};

/**
 * Type of OMNISEND's OMNISEND_GET_BATCH_ITEMS tool output.
 */
type OMNISEND_GET_BATCH_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of batch items associated with the requested batch.
       */
      items: {
          /**
           * Id
           * @description Unique identifier of the batch item.
           */
          id: string;
          /**
           * Request
           * @description Original request payload submitted for this item.
           */
          request: {
              [key: string]: unknown;
          };
          /**
           * Response
           * @description JSON response returned by the API for this item.
           */
          response: {
              [key: string]: unknown;
          };
          /**
           * Response Code
           * @description HTTP status code returned for this batch item operation.
           */
          responseCode: number;
          /**
           * Status
           * @description Processing status of the item: 'pending' means not yet processed; 'finished' means completed.
           * @enum {string}
           */
          status: "pending" | "finished";
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
 * Type of OMNISEND's OMNISEND_GET_CONTACT tool input.
 */
type OMNISEND_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to retrieve
   */
  contactId?: string;
};

/**
 * Type of OMNISEND's OMNISEND_GET_CONTACT tool output.
 */
type OMNISEND_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Mailing address of the contact
       * @default null
       */
      address: string | null;
      /**
       * Birthdate
       * @description Birthdate of the contact (ISO 8601)
       * @default null
       */
      birthdate: string | null;
      /**
       * City
       * @description City where the contact lives
       * @default null
       */
      city: string | null;
      /**
       * Consents
       * @description History of consent records
       * @default null
       */
      consents: {
          /**
           * Channel
           * @description Channel through which consent was given
           */
          channel: string;
          /**
           * Created At
           * @description Timestamp when consent was recorded (ISO 8601)
           */
          createdAt: string;
          /**
           * Ip
           * @description IP address from which consent was given
           */
          ip: string;
          /**
           * Source
           * @description Origin of the consent, e.g., signup form
           */
          source: string;
          /**
           * User Agent
           * @description User agent string at time of consent
           */
          userAgent: string;
      }[] | null;
      /**
       * Contact Id
       * @description Unique identifier for the contact
       */
      contactID: string;
      /**
       * Country
       * @description Country where the contact lives
       * @default null
       */
      country: string | null;
      /**
       * Country Code
       * @description Two-letter country code
       * @default null
       */
      countryCode: string | null;
      /**
       * Created At
       * @description Timestamp when the contact was created (ISO 8601)
       */
      createdAt: string;
      /**
       * Custom Properties
       * @description Custom properties as key-value pairs
       * @default null
       */
      customProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Email
       * @description Email address of the contact
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      firstName: string | null;
      /**
       * Gender
       * @description Gender of the contact
       * @default null
       */
      gender: string | null;
      /**
       * Identifiers
       * @description Other identifiers for the contact
       * @default null
       */
      identifiers: {
          /**
           * Channels
           * @description Channel-specific identifier details
           */
          channels: {
              [key: string]: {
                  /**
                   * Id
                   * @description Identifier of the channel
                   */
                  id: string;
                  /**
                   * Type
                   * @description Type of the channel, e.g., 'email', 'sms'
                   */
                  type: string;
              };
          };
          /**
           * Id
           * @description Identifier value
           */
          id: string;
          /**
           * Type
           * @description Type of the identifier
           */
          type: string;
      }[] | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      lastName: string | null;
      /**
       * Opt Ins
       * @description Opt-in history for the contact
       * @default null
       */
      optIns: {
          /**
           * Channel
           * @description Channel for opt-in status (e.g., 'email')
           */
          channel: string;
          /**
           * Date
           * @description Date when opt-in occurred (ISO 8601)
           */
          date: string;
      }[] | null;
      /**
       * Phone
       * @description List of phone numbers for the contact
       * @default null
       */
      phone: string[] | null;
      /**
       * Postal Code
       * @description Postal code
       * @default null
       */
      postalCode: string | null;
      /**
       * Segments
       * @description List of segments the contact belongs to
       * @default null
       */
      segments: string[] | null;
      /**
       * State
       * @description State or province
       * @default null
       */
      state: string | null;
      /**
       * Status
       * @description Overall status, e.g., 'active'
       * @default null
       */
      status: string | null;
      /**
       * Statuses
       * @description Status change history for the contact
       * @default null
       */
      statuses: {
          /**
           * Channel
           * @description Channel for this status record (e.g., 'email')
           */
          channel: string;
          /**
           * Date
           * @description Date of this status update (ISO 8601)
           */
          date: string;
          /**
           * Status
           * @description Status value (e.g., 'subscribed')
           */
          status: string;
      }[] | null;
      /**
       * Tags
       * @description List of tags associated with the contact
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
 * Type of OMNISEND's OMNISEND_LIST_CONTACTS tool input.
 */
type OMNISEND_LIST_CONTACTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination: contacts after this base64-encoded ContactID.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Cursor for pagination: contacts before this base64-encoded ContactID.
   * @default null
   */
  before: string | null;
  /**
   * Email
   * @description Filter contacts by exact email address.
   * @default null
   */
  email: string | null;
  /**
   * Limit
   * @description Number of results per page. Defaults to 100, maximum 250.
   * @default 100
   */
  limit: number;
  /**
   * Phone
   * @description Filter contacts by full phone number including country code.
   * @default null
   */
  phone: string | null;
  /**
   * Segment Id
   * @description Filter contacts by segment ID.
   * @default null
   */
  segmentID: number | null;
  /**
   * Status
   * @description Filter contacts by email channel status.
   * @default null
   * @enum {string|null}
   */
  status: "subscribed" | "nonSubscribed" | "unsubscribed" | null;
  /**
   * Tag
   * @description Filter contacts by tag.
   * @default null
   */
  tag: string | null;
};

/**
 * Type of OMNISEND's OMNISEND_LIST_CONTACTS tool output.
 */
type OMNISEND_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts.
       */
      contacts: {
          /**
           * Address
           * @description Mailing address.
           * @default null
           */
          address: string | null;
          /**
           * Birthdate
           * @description Birthdate in ISO format.
           * @default null
           */
          birthdate: string | null;
          /**
           * City
           * @description City.
           * @default null
           */
          city: string | null;
          /**
           * Consents
           * @description List of consent records.
           * @default null
           */
          consents: {
              /**
               * Channel
               * @description Consent channel (e.g., email, SMS).
               */
              channel: string;
              /**
               * Created At
               * @description Timestamp when consent was recorded.
               */
              createdAt: string;
              /**
               * Ip
               * @description IP address from which consent was given.
               */
              ip: string;
              /**
               * Source
               * @description Source of consent (e.g., signup form).
               */
              source: string;
              /**
               * User Agent
               * @description User agent string at consent time.
               */
              userAgent: string;
          }[] | null;
          /**
           * Contact Id
           * @description Unique Contact ID.
           */
          contactID: string;
          /**
           * Country
           * @description Country name.
           * @default null
           */
          country: string | null;
          /**
           * Country Code
           * @description ISO country code.
           * @default null
           */
          countryCode: string | null;
          /**
           * Created At
           * @description Timestamp when contact was created.
           */
          createdAt: string;
          /**
           * Custom Properties
           * @description Additional custom properties.
           * @default null
           */
          customProperties: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Contact email address.
           */
          email: string;
          /**
           * First Name
           * @description First name.
           * @default null
           */
          firstName: string | null;
          /**
           * Gender
           * @description Gender.
           * @default null
           */
          gender: string | null;
          /**
           * Identifiers
           * @description List of additional identifiers.
           * @default null
           */
          identifiers: {
              /**
               * Channels
               * @description Mapping of channel-specific identifier details.
               */
              channels: {
                  [key: string]: unknown;
              };
              /**
               * Id
               * @description Identifier value.
               */
              id: string;
              /**
               * Type
               * @description Identifier type.
               */
              type: string;
          }[] | null;
          /**
           * Last Name
           * @description Last name.
           * @default null
           */
          lastName: string | null;
          /**
           * Opt Ins
           * @description List of opt-in events.
           * @default null
           */
          optIns: {
              /**
               * Channel
               * @description Opt-in channel.
               */
              channel: string;
              /**
               * Date
               * @description Timestamp of opt-in.
               */
              date: string;
          }[] | null;
          /**
           * Phone
           * @description List of phone numbers.
           * @default null
           */
          phone: string[] | null;
          /**
           * Postal Code
           * @description Postal code.
           * @default null
           */
          postalCode: string | null;
          /**
           * Segments
           * @description List of segment IDs.
           * @default null
           */
          segments: string[] | null;
          /**
           * State
           * @description State or region.
           * @default null
           */
          state: string | null;
          /**
           * Statuses
           * @description History of status changes.
           * @default null
           */
          statuses: {
              /**
               * Channel
               * @description Channel of the status update.
               */
              channel: string;
              /**
               * Date
               * @description Timestamp of status change.
               */
              date: string;
              /**
               * Status
               * @description New status value.
               */
              status: string;
          }[] | null;
          /**
           * Tags
           * @description Tags assigned to contact.
           * @default null
           */
          tags: string[] | null;
      }[];
      /**
       * Paging
       * @description Pagination details.
       */
      paging: {
          /**
           * Limit
           * @description Page size returned.
           */
          limit: number;
          /**
           * Next
           * @description URL for next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Offset
           * @description Offset value (deprecated).
           * @default null
           */
          offset: number | null;
          /**
           * Previous
           * @description URL for previous page of results.
           * @default null
           */
          previous: string | null;
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
 * Type of OMNISEND's OMNISEND_LIST_PRODUCTS tool input.
 */
type OMNISEND_LIST_PRODUCTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of products to return. Defaults to 100.
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Zero-based index of the first product to return. Use to page through results.
   * @default 0
   */
  offset: number;
  /**
   * Sort
   * @description Field to sort by. Allowed values: 'date', 'createdAt', or 'updatedAt'.
   * @default null
   * @enum {string|null}
   */
  sort: "date" | "createdAt" | "updatedAt" | null;
};

/**
 * Type of OMNISEND's OMNISEND_LIST_PRODUCTS tool output.
 */
type OMNISEND_LIST_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Paging
       * @description Pagination metadata.
       */
      paging: {
          /**
           * Limit
           * @description Number of items requested per page.
           */
          limit: number;
          /**
           * Next
           * @description URL for next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Offset
           * @description Offset of the first item returned.
           */
          offset: number;
          /**
           * Previous
           * @description URL for previous page of results.
           * @default null
           */
          previous: string | null;
      };
      /**
       * Products
       * @description Array of product objects.
       */
      products: {
          /**
           * Category I Ds
           * @description List of category IDs.
           * @default null
           */
          categoryIDs: string[] | null;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601).
           */
          createdAt: string;
          /**
           * Currency
           * @description ISO 4217 currency code.
           */
          currency: string;
          /**
           * Default Image Url
           * @description Primary image URL.
           * @default null
           */
          defaultImageUrl: string | null;
          /**
           * Description
           * @description Short product description.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Product identifier.
           */
          id: string;
          /**
           * Images
           * @description Additional image URLs.
           * @default null
           */
          images: string[] | null;
          /**
           * Status
           * @description Overall stock status.
           * @enum {string}
           */
          status: "inStock" | "outOfStock" | "notAvailable";
          /**
           * Tags
           * @description List of tags.
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Product title.
           */
          title: string;
          /**
           * Type
           * @description Product type/category.
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description Last updated timestamp (ISO 8601).
           */
          updatedAt: string;
          /**
           * Url
           * @description Product page URL.
           */
          url: string;
          /**
           * Variants
           * @description List of product variants.
           * @default null
           */
          variants: {
              /**
               * Default Image Url
               * @description Primary image URL for this variant.
               * @default null
               */
              defaultImageUrl: string | null;
              /**
               * Description
               * @description Variant description.
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Unique variant identifier.
               */
              id: string;
              /**
               * Images
               * @description Additional image URLs.
               * @default null
               */
              images: string[] | null;
              /**
               * Price
               * @description Variant price.
               */
              price: number;
              /**
               * Sku
               * @description Stock keeping unit.
               * @default null
               */
              sku: string | null;
              /**
               * Status
               * @description Stock status.
               * @enum {string}
               */
              status: "inStock" | "outOfStock" | "notAvailable";
              /**
               * Strike Through Price
               * @description Original price before discount.
               * @default null
               */
              strikeThroughPrice: number | null;
              /**
               * Title
               * @description Variant title.
               */
              title: string;
              /**
               * Url
               * @description Product page URL for this variant.
               */
              url: string;
              /**
               * Vendor
               * @description Manufacturer or brand.
               * @default null
               */
              vendor: string | null;
          }[] | null;
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
 * Type of OMNISEND's OMNISEND_UPDATE_CONTACT tool input.
 */
type OMNISEND_UPDATE_CONTACT_INPUT = {
  /**
   * Body
   * @description Fields to update on the contact
   */
  body?: {
      /**
       * Address
       * @description Street address of the contact
       * @default null
       */
      address: string | null;
      /**
       * Birthdate
       * @description Birthdate in YYYY-MM-DD format
       * @default null
       */
      birthdate: string | null;
      /**
       * City
       * @description City of the contact
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country of the contact
       * @default null
       */
      country: string | null;
      /**
       * Country Code
       * @description ISO 3166-1 alpha-2 country code
       * @default null
       */
      countryCode: string | null;
      /**
       * Created At
       * @description ISO 8601 creation date of the contact
       * @default null
       */
      createdAt: string | null;
      /**
       * Custom Properties
       * @description Custom properties as key-value pairs
       * @default null
       */
      customProperties: {
          [key: string]: string | number | boolean;
      } | null;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      firstName: string | null;
      /**
       * Gender
       * @description Gender of the contact ('m' for male, 'f' for female)
       * @default null
       * @enum {string|null}
       */
      gender: "m" | "f" | null;
      /**
       * Identifiers
       * @description List of identifiers to associate with the contact
       * @default null
       */
      identifiers: {
          /**
           * UpdateContactIdentifierChannels
           * @description Channel-specific subscription settings
           * @default null
           */
          channels: {
              /**
               * UpdateContactIdentifierChannelsEmail
               * @description Email channel subscription settings
               * @default null
               */
              email: {
                  /**
                   * Status
                   * @description Subscription status (e.g., 'subscribed')
                   * @default null
                   */
                  status: string | null;
                  /**
                   * Status Date
                   * @description ISO 8601 date of status change
                   * @default null
                   */
                  statusDate: string | null;
              } | null;
              /**
               * UpdateContactIdentifierChannelsSms
               * @description SMS channel subscription settings
               * @default null
               */
              sms: {
                  /**
                   * Status
                   * @description SMS subscription status (e.g., 'subscribed')
                   * @default null
                   */
                  status: string | null;
                  /**
                   * Status Date
                   * @description ISO 8601 date of SMS status change
                   * @default null
                   */
                  statusDate: string | null;
              } | null;
          } | null;
          /**
           * UpdateContactIdentifierConsent
           * @description Contact consent information
           * @default null
           */
          consent: {
              /**
               * Created At
               * @description ISO 8601 date when consent was given
               * @default null
               */
              createdAt: string | null;
              /**
               * Ip
               * @description IP address from which consent was given
               * @default null
               */
              ip: string | null;
              /**
               * Source
               * @description Source of consent
               * @default null
               */
              source: string | null;
              /**
               * User Agent
               * @description User agent string when consent was given
               * @default null
               */
              userAgent: string | null;
          } | null;
          /**
           * Id
           * @description Identifier value (e.g., email address, phone number)
           */
          id: string;
          /**
           * Type
           * @description Type of identifier (e.g., 'email', 'phone')
           */
          type: string;
      }[] | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      lastName: string | null;
      /**
       * Postal Code
       * @description Postal code of the contact
       * @default null
       */
      postalCode: string | null;
      /**
       * Source
       * @description Source of the contact
       * @default null
       */
      source: string | null;
      /**
       * State
       * @description State of the contact
       * @default null
       */
      state: string | null;
      /**
       * Tags
       * @description Tags to associate with the contact
       * @default null
       */
      tags: string[] | null;
  };
  /**
   * Contact Id
   * @description Unique identifier of the contact to update
   */
  contactId?: string;
};

/**
 * Type of OMNISEND's OMNISEND_UPDATE_CONTACT tool output.
 */
type OMNISEND_UPDATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description Unique identifier of the updated contact
       */
      contactID: string;
      /**
       * Email
       * @description Email address of the updated contact
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the updated contact
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Last name of the updated contact
       * @default null
       */
      lastName: string | null;
      /**
       * Phone
       * @description Phone number of the updated contact
       * @default null
       */
      phone: string | null;
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
 * Type map of all available tool input types for toolkit "OMNISEND".
 */
export type OMNISEND_TOOL_INPUTS = {
  CREATE_BATCH: OMNISEND_CREATE_BATCH_INPUT
  CREATE_OR_UPDATE_CONTACT: OMNISEND_CREATE_OR_UPDATE_CONTACT_INPUT
  DELETE_PRODUCT: OMNISEND_DELETE_PRODUCT_INPUT
  GET_BATCHES: OMNISEND_GET_BATCHES_INPUT
  GET_BATCH_INFORMATION: OMNISEND_GET_BATCH_INFORMATION_INPUT
  GET_BATCH_ITEMS: OMNISEND_GET_BATCH_ITEMS_INPUT
  GET_CONTACT: OMNISEND_GET_CONTACT_INPUT
  LIST_CONTACTS: OMNISEND_LIST_CONTACTS_INPUT
  LIST_PRODUCTS: OMNISEND_LIST_PRODUCTS_INPUT
  UPDATE_CONTACT: OMNISEND_UPDATE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OMNISEND".
 */
export type OMNISEND_TOOL_OUTPUTS = {
  CREATE_BATCH: OMNISEND_CREATE_BATCH_OUTPUT
  CREATE_OR_UPDATE_CONTACT: OMNISEND_CREATE_OR_UPDATE_CONTACT_OUTPUT
  DELETE_PRODUCT: OMNISEND_DELETE_PRODUCT_OUTPUT
  GET_BATCHES: OMNISEND_GET_BATCHES_OUTPUT
  GET_BATCH_INFORMATION: OMNISEND_GET_BATCH_INFORMATION_OUTPUT
  GET_BATCH_ITEMS: OMNISEND_GET_BATCH_ITEMS_OUTPUT
  GET_CONTACT: OMNISEND_GET_CONTACT_OUTPUT
  LIST_CONTACTS: OMNISEND_LIST_CONTACTS_OUTPUT
  LIST_PRODUCTS: OMNISEND_LIST_PRODUCTS_OUTPUT
  UPDATE_CONTACT: OMNISEND_UPDATE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OMNISEND toolkit.
 */
export const OMNISEND = {
  slug: "omnisend",
  tools: {
    /**
     * Tool to create a new batch operation for multiple items. use when you need to process many records asynchronously in one call, e.g., bulk contacts, products, orders, or events. use after preparing the items list to avoid rate limits.
     */
    CREATE_BATCH: "OMNISEND_CREATE_BATCH",
    /**
     * Tool to create or update a contact in omnisend. use after collecting subscriber details.
     */
    CREATE_OR_UPDATE_CONTACT: "OMNISEND_CREATE_OR_UPDATE_CONTACT",
    /**
     * Tool to remove a product from omnisend by its id. use when you need to delete a product and ensure it is no longer available in your catalog.
     */
    DELETE_PRODUCT: "OMNISEND_DELETE_PRODUCT",
    /**
     * Tool to retrieve a list of batch operations. use after initiating a batch job to monitor its progress and results.
     */
    GET_BATCHES: "OMNISEND_GET_BATCHES",
    /**
     * Tool to retrieve information about a specific batch by id. use after submitting a batch when you need a detailed status and counts.
     */
    GET_BATCH_INFORMATION: "OMNISEND_GET_BATCH_INFORMATION",
    /**
     * Tool to retrieve processed items of a specific batch by id. use when you need to inspect individual results of a batch operation after fetching batch details.
     */
    GET_BATCH_ITEMS: "OMNISEND_GET_BATCH_ITEMS",
    /**
     * Tool to retrieve details of a single contact by id. use when you already have a contactid and need the full profile.
     */
    GET_CONTACT: "OMNISEND_GET_CONTACT",
    /**
     * Tool to retrieve a paginated list of contacts with optional filtering. use when you need to fetch contacts in batches and handle cursor pagination.
     */
    LIST_CONTACTS: "OMNISEND_LIST_CONTACTS",
    /**
     * Tool to retrieve a paginated list of products. use when syncing product catalog before campaign creation.
     */
    LIST_PRODUCTS: "OMNISEND_LIST_PRODUCTS",
    /**
     * Tool to update fields of an existing contact by id. use after retrieving contact id. patch https://api.omnisend.com/v3/contacts/{contactid} example: updatecontact(contactid="..., body={firstname: 'john'})
     */
    UPDATE_CONTACT: "OMNISEND_UPDATE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OMNISEND".
 */
export type OMNISEND_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OMNISEND".
 */
export type OMNISEND_TRIGGER_EVENTS = {}
