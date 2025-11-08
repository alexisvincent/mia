// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIDEL_API's FIDEL_API_CREATE_BRAND tool input.
 */
type FIDEL_API_CREATE_BRAND_INPUT = {
  /**
   * Icon
   * @description URL to brand's icon (image)
   * @default null
   */
  icon: string | null;
  /**
   * Metadata
   * @description Metadata object (key-value pairs) up to 1024 chars
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Brand name
   */
  name?: string;
  /**
   * Privacy Policy Url
   * @description URL to brand's privacy policy
   * @default null
   */
  privacyPolicyUrl: string | null;
  /**
   * Terms And Conditions Url
   * @description URL to brand's terms and conditions
   * @default null
   */
  termsAndConditionsUrl: string | null;
  /**
   * Website
   * @description URL to brand's website
   * @default null
   */
  website: string | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_CREATE_BRAND tool output.
 */
type FIDEL_API_CREATE_BRAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Created timestamp (ISO 8601 format)
       */
      created: string;
      /**
       * Icon
       * @description URL to brand's icon (image)
       * @default null
       */
      icon: string | null;
      /**
       * Id
       * @description Unique identifier for the brand
       */
      id: string;
      /**
       * Metadata
       * @description Metadata object
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Brand name
       */
      name: string;
      /**
       * Privacy Policy Url
       * @description URL to brand's privacy policy
       * @default null
       */
      privacyPolicyUrl: string | null;
      /**
       * Terms And Conditions Url
       * @description URL to brand's terms and conditions
       * @default null
       */
      termsAndConditionsUrl: string | null;
      /**
       * Updated
       * @description Updated timestamp (ISO 8601 format)
       */
      updated: string;
      /**
       * Website
       * @description URL to brand's website
       * @default null
       */
      website: string | null;
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
 * Type of FIDEL_API's FIDEL_API_CREATE_PROGRAM tool input.
 */
type FIDEL_API_CREATE_PROGRAM_INPUT = {
  /**
   * Icon
   * @description Emoji icon representation (colon-wrapped), e.g., ':avocado:'.
   * @default null
   */
  icon: string | null;
  /**
   * Icon Background
   * @description Background color for the icon in hex format, e.g., '#BADA55'.
   * @default null
   */
  iconBackground: string | null;
  /**
   * Metadata
   * @description Optional custom metadata key/value pairs.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Name of the program to create.
   */
  name?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_CREATE_PROGRAM tool output.
 */
type FIDEL_API_CREATE_PROGRAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Program Id
       * @description Unique identifier of the newly created program.
       */
      programId: string;
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
 * Type of FIDEL_API's FIDEL_API_CREATE_PROGRAM_WEBHOOK tool input.
 */
type FIDEL_API_CREATE_PROGRAM_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Event type to receive notifications for
   * @enum {string}
   */
  event?: "card.linked" | "card.failed" | "program.status" | "location.status" | "transaction.auth" | "transaction.auth.qualified" | "transaction.clearing" | "transaction.clearing.qualified" | "transaction.refund" | "transaction.refund.qualified";
  /**
   * Program Id
   * @description Unique ID of the program to which to register the webhook
   */
  programId?: string;
  /**
   * Url
   * @description HTTPS URL where webhook notifications will be sent
   */
  url?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_CREATE_PROGRAM_WEBHOOK tool output.
 */
type FIDEL_API_CREATE_PROGRAM_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Webhook activation status
       */
      active: boolean;
      /**
       * Created
       * @description Timestamp when the webhook was created
       */
      created: string;
      /**
       * Events
       * @description List of subscribed event types
       */
      events: string[];
      /**
       * Id
       * @description Unique webhook ID
       */
      id: string;
      /**
       * Program Id
       * @description Program ID associated with this webhook
       */
      programId: string;
      /**
       * Secret
       * @description Secret used to sign webhook requests
       * @default null
       */
      secret: string | null;
      /**
       * Url
       * @description Webhook endpoint URL
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
 * Type of FIDEL_API's FIDEL_API_DELETE_OFFER tool input.
 */
type FIDEL_API_DELETE_OFFER_INPUT = {
  /**
   * Offer Id
   * @description The unique identifier of the offer to delete
   */
  offerId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_DELETE_OFFER tool output.
 */
type FIDEL_API_DELETE_OFFER_OUTPUT = {
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
 * Type of FIDEL_API's FIDEL_API_DELETE_PROGRAM_WEBHOOK tool input.
 */
type FIDEL_API_DELETE_PROGRAM_WEBHOOK_INPUT = {
  /**
   * Hook Id
   * @description Unique identifier of the webhook to delete
   */
  hookId?: string;
  /**
   * Program Id
   * @description Unique identifier of the program containing the webhook
   */
  programId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_DELETE_PROGRAM_WEBHOOK tool output.
 */
type FIDEL_API_DELETE_PROGRAM_WEBHOOK_OUTPUT = {
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
 * Type of FIDEL_API's FIDEL_API_DELETE_WEBHOOK tool input.
 */
type FIDEL_API_DELETE_WEBHOOK_INPUT = {
  /**
   * Hook Id
   * @description The unique identifier of the webhook to delete
   */
  hookId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_DELETE_WEBHOOK tool output.
 */
type FIDEL_API_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of FIDEL_API's FIDEL_API_GET_BRAND tool input.
 */
type FIDEL_API_GET_BRAND_INPUT = {
  /**
   * Brand Id
   * @description The unique identifier of the brand to retrieve.
   */
  brandId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_GET_BRAND tool output.
 */
type FIDEL_API_GET_BRAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp of brand creation.
       */
      created: string;
      /**
       * Deleted
       * @description Indicates whether the brand is deleted.
       */
      deleted: boolean;
      /**
       * Id
       * @description Unique identifier of the brand.
       */
      id: string;
      /**
       * Live
       * @description Indicates if the brand is live.
       */
      live: boolean;
      /**
       * Logo Url
       * @description URL to the brand’s logo (if set).
       * @default null
       */
      logoUrl: string | null;
      /**
       * Metadata
       * @description Custom metadata attached to the brand.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description The brand's name.
       */
      name: string;
      /**
       * Updated
       * @description ISO 8601 timestamp of the last update.
       */
      updated: string;
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
 * Type of FIDEL_API's FIDEL_API_GET_OFFER tool input.
 */
type FIDEL_API_GET_OFFER_INPUT = {
  /**
   * Offer Id
   * @description Unique identifier of the offer to retrieve.
   */
  offerId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_GET_OFFER tool output.
 */
type FIDEL_API_GET_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the offer was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the offer.
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * @description Offer end date in ISO 8601 format.
       */
      endDate: string;
      /**
       * Id
       * @description Unique identifier for the offer.
       */
      id: string;
      /**
       * Locations
       * @description List of participating locations for the offer.
       */
      locations: {
          /**
           * Address
           * @description Address details of the location.
           */
          address: {
              /**
               * City
               * @description City name of the location
               */
              city: string;
              /**
               * Country Code
               * @description 2-letter country code (ISO 3166-1 alpha-2)
               */
              countryCode: string;
              /**
               * Line1
               * @description First line of address
               */
              line1: string;
              /**
               * Line2
               * @description Second line of address (optional)
               * @default null
               */
              line2: string | null;
              /**
               * Postcode
               * @description Postal code of the location
               */
              postcode: string;
              /**
               * State
               * @description State or province (optional)
               * @default null
               */
              state: string | null;
          };
          /**
           * Id
           * @description Unique identifier for the location.
           */
          id: string;
          /**
           * Name
           * @description Name of the location.
           */
          name: string;
      }[];
      /**
       * Name
       * @description Name of the offer.
       */
      name: string;
      /**
       * Program Id
       * @description Program ID associated with the offer.
       */
      programId: string;
      /**
       * Reward
       * @description Reward details of the offer.
       */
      reward: {
          /**
           * Max Reward Value
           * @description (Optional) Maximum reward per transaction when using percentage rewards.
           * @default null
           */
          maxRewardValue: number | null;
          /**
           * Type
           * @description Type of reward: 'fixed' or 'percentage'.
           * @enum {string}
           */
          type: "fixed" | "percentage";
          /**
           * Value
           * @description Reward amount: fixed amount in currency or percentage (0-100)
           */
          value: number;
      };
      /**
       * Start Date
       * @description Offer start date in ISO 8601 format.
       */
      startDate: string;
      /**
       * Status
       * @description Current status of the offer (e.g., 'active', 'inactive').
       */
      status: string;
      /**
       * Terms
       * @description Terms and conditions for the offer.
       * @default null
       */
      terms: string | null;
      /**
       * Updated At
       * @description Timestamp when the offer was last updated.
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
 * Type of FIDEL_API's FIDEL_API_GET_PROGRAM tool input.
 */
type FIDEL_API_GET_PROGRAM_INPUT = {
  /**
   * Program Id
   * @description Unique identifier for the Program.
   */
  programId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_GET_PROGRAM tool output.
 */
type FIDEL_API_GET_PROGRAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description DateTime when the Program was created (ISO 8601 format).
       */
      created: string;
      /**
       * Id
       * @description Unique Program identifier.
       */
      id: string;
      /**
       * Metadata
       * @description Custom metadata set on the Program.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the Program.
       */
      name: string;
      /**
       * State
       * @description Status of the Program.
       */
      state: string;
      /**
       * Type
       * @description Type of the Program.
       */
      type: string;
      /**
       * Updated
       * @description DateTime when the Program was last updated (ISO 8601 format).
       */
      updated: string;
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
 * Type of FIDEL_API's FIDEL_API_GET_WEBHOOK tool input.
 */
type FIDEL_API_GET_WEBHOOK_INPUT = {
  /**
   * Hook Id
   * @description Unique identifier of the webhook to retrieve.
   */
  hookId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_GET_WEBHOOK tool output.
 */
type FIDEL_API_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the webhook is active.
       */
      active: boolean;
      /**
       * Created
       * @description ISO8601 timestamp of when the webhook was created.
       */
      created: string;
      /**
       * Events
       * @description List of event names the webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Metadata
       * @description Custom metadata attached to the webhook.
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Url
       * @description The endpoint URL where webhook payloads will be delivered.
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
 * Type of FIDEL_API's FIDEL_API_LIST_BRANDS tool input.
 */
type FIDEL_API_LIST_BRANDS_INPUT = {
  /**
   * Limit
   * @description Number of brands to return (1-100).
   * @default 20
   */
  limit: number;
  /**
   * Starting After
   * @description Cursor for pagination. Returns brands after this cursor.
   * @default null
   */
  startingAfter: string | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_BRANDS tool output.
 */
type FIDEL_API_LIST_BRANDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more pages are available.
       */
      hasMore: boolean;
      /**
       * Items
       * @description List of brand objects.
       */
      items: {
          /**
           * Country Codes
           * @description Supported country codes for the brand.
           */
          countryCodes: string[];
          /**
           * Created
           * @description ISO 8601 timestamp of brand creation.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the brand.
           */
          id: string;
          /**
           * Name
           * @description Name of the brand.
           */
          name: string;
      }[];
      /**
       * Total Items
       * @description Total number of brands available.
       */
      totalItems: number;
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
 * Type of FIDEL_API's FIDEL_API_LIST_CARDS tool input.
 */
type FIDEL_API_LIST_CARDS_INPUT = {
  /**
   * Account Id
   * @description Filter by account ID.
   * @default null
   */
  accountId: string | null;
  /**
   * Ending Before
   * @description Cursor for pagination; return results before this card ID.
   * @default null
   */
  endingBefore: string | null;
  /**
   * Limit
   * @description Number of cards to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Metadata
   * @description Filter by card metadata; provide key-value pairs.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Program Id
   * @description The unique identifier of the program whose cards you want to list.
   */
  programId?: string;
  /**
   * Starting After
   * @description Cursor for pagination; return results after this card ID.
   * @default null
   */
  startingAfter: string | null;
  /**
   * Status
   * @description Filter cards by status (e.g., 'active', 'inactive').
   * @default null
   */
  status: string | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_CARDS tool output.
 */
type FIDEL_API_LIST_CARDS_OUTPUT = {
  /**
   * Data
   * @description Array of card objects.
   */
  data?: {
      /**
       * Account Id
       * @description Account ID the card is associated with.
       */
      accountId: string;
      /**
       * Country Code
       * @description Country code of the card.
       */
      countryCode: string;
      /**
       * Created At
       * @description ISO8601 timestamp when the card was created.
       */
      createdAt: string;
      /**
       * Exp Month
       * @description Expiry month of the card.
       */
      expMonth: number;
      /**
       * Exp Year
       * @description Expiry year of the card.
       */
      expYear: number;
      /**
       * Id
       * @description Card unique identifier.
       */
      id: string;
      /**
       * Last Numbers
       * @description Last 4 digits of the card number.
       */
      lastNumbers: string;
      /**
       * Metadata
       * @description Custom metadata for the card.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Program Id
       * @description Program ID to which the card belongs.
       */
      programId: string;
      /**
       * Scheme
       * @description Card scheme (e.g., 'visa').
       */
      scheme: string;
      /**
       * Status
       * @description Current status of the card (e.g., 'active').
       */
      status: string;
      /**
       * Type
       * @description Card type (e.g., 'credit', 'debit').
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the card was last updated.
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description True if more results are available.
   */
  hasMore?: boolean;
  /**
   * Object
   * @description Object type, always 'list'.
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of cards found.
   */
  totalCount?: number;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_LOCATIONS tool input.
 */
type FIDEL_API_LIST_LOCATIONS_INPUT = {
  /**
   * Count
   * @description (Deprecated) Number of locations to return. Use 'limit' instead.
   * @default null
   */
  count: number | null;
  /**
   * Country Code
   * @description Filter locations by 2-letter country code, e.g., 'GB'.
   * @default null
   */
  countryCode: string | null;
  /**
   * Ending Before
   * @description Cursor for pagination to return locations before a specific ID.
   * @default null
   */
  endingBefore: string | null;
  /**
   * Limit
   * @description Number of locations to return per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Program Id
   * @description Unique identifier of the program to list locations for.
   */
  programId?: string;
  /**
   * Search
   * @description Filter locations by name or address substring.
   * @default null
   */
  search: string | null;
  /**
   * Starting After
   * @description Cursor for pagination to return locations after a specific ID.
   * @default null
   */
  startingAfter: string | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_LOCATIONS tool output.
 */
type FIDEL_API_LIST_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether more locations are available beyond this page.
       */
      hasMore: boolean;
      /**
       * Items
       * @description Array of location objects.
       */
      items: {
          /**
           * Active
           * @description Flag indicating whether the location is active.
           * @default null
           */
          active: boolean | null;
          /**
           * Address
           * @description Structured address data for the location.
           */
          address: {
              /**
               * City
               * @description City of the location.
               */
              city: string;
              /**
               * Country Code
               * @description 2-letter ISO country code.
               */
              countryCode: string;
              /**
               * Line1
               * @description First line of the address.
               */
              line1: string;
              /**
               * Line2
               * @description Second line of the address.
               * @default null
               */
              line2: string | null;
              /**
               * Postal Code
               * @description Postal or ZIP code of the location.
               */
              postalCode: string;
              /**
               * State
               * @description State or region of the location.
               * @default null
               */
              state: string | null;
          };
          /**
           * Created
           * @description ISO 8601 timestamp when the location was created.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the location.
           */
          id: string;
          /**
           * Merchant Id
           * @description Merchant identifier associated with this location.
           * @default null
           */
          merchantId: string | null;
          /**
           * Metadata
           * @description Custom metadata key-value pairs.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the location.
           * @default null
           */
          name: string | null;
          /**
           * Program Id
           * @description Program ID this location belongs to.
           */
          programId: string;
          /**
           * Updated
           * @description ISO 8601 timestamp when the location was last updated.
           */
          updated: string;
      }[];
      /**
       * Total Count
       * @description Total number of locations for this program.
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
 * Type of FIDEL_API's FIDEL_API_LIST_OFFERS tool input.
 */
type FIDEL_API_LIST_OFFERS_INPUT = {
  /**
   * Brand Id
   * @description Filter offers by associated brand UUID.
   * @default null
   */
  brandId: string | null;
  /**
   * End Date
   * @description Filter offers ending on or before this date (ISO 8601).
   * @default null
   */
  endDate: string | null;
  /**
   * Location Id
   * @description Filter offers by associated location UUID.
   * @default null
   */
  locationId: string | null;
  /**
   * Page
   * @description Page number of results to return (must be >= 1).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1–100).
   * @default null
   */
  perPage: number | null;
  /**
   * Program Id
   * @description Filter offers by associated program UUID.
   * @default null
   */
  programId: string | null;
  /**
   * Start Date
   * @description Filter offers starting on or after this date (ISO 8601).
   * @default null
   */
  startDate: string | null;
  /**
   * Status
   * @description Filter by offer status.
   * @default null
   * @enum {string|null}
   */
  status: "ACTIVE" | "INACTIVE" | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_OFFERS tool output.
 */
type FIDEL_API_LIST_OFFERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of offers.
       */
      items: {
          /**
           * Brand Id
           * @description Associated brand UUID.
           */
          brandId: string;
          /**
           * End Date
           * @description Offer end date (ISO 8601).
           */
          endDate: string;
          /**
           * Id
           * @description Offer UUID.
           */
          id: string;
          /**
           * Location Ids
           * @description List of associated location UUIDs.
           */
          locationIds: string[];
          /**
           * Name
           * @description Name of the offer.
           */
          name: string;
          /**
           * Program Id
           * @description Associated program UUID.
           */
          programId: string;
          /**
           * Start Date
           * @description Offer start date (ISO 8601).
           */
          startDate: string;
          /**
           * Status
           * @description Offer status, e.g., 'ACTIVE' or 'INACTIVE'.
           */
          status: string;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Pages
       * @description Total number of pages.
       */
      pages: number;
      /**
       * Per Page
       * @description Number of offers per page.
       */
      perPage: number;
      /**
       * Total
       * @description Total number of offers.
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
 * Type of FIDEL_API's FIDEL_API_LIST_PROGRAMS tool input.
 */
type FIDEL_API_LIST_PROGRAMS_INPUT = {
  /**
   * Limit
   * @description Maximum number of programs to return (must be ≥ 1).
   * @default null
   */
  limit: number | null;
  /**
   * Starting After
   * @description Cursor returned by a previous call for pagination.
   * @default null
   */
  startingAfter: string | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_PROGRAMS tool output.
 */
type FIDEL_API_LIST_PROGRAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Flag indicating if more programs are available beyond this page.
       */
      hasMore: boolean;
      /**
       * Items
       * @description Array of program objects.
       */
      items: {
          /**
           * Created
           * @description Creation datetime in ISO 8601 format.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the program.
           */
          id: string;
          /**
           * Modified
           * @description Last modification datetime in ISO 8601 format.
           */
          modified: string;
          /**
           * Name
           * @description Name of the program.
           */
          name: string;
          /**
           * Type
           * @description Type of the program.
           */
          type: string;
      }[];
      /**
       * Total
       * @description Total number of programs available.
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
 * Type of FIDEL_API's FIDEL_API_LIST_PROGRAM_WEBHOOKS tool input.
 */
type FIDEL_API_LIST_PROGRAM_WEBHOOKS_INPUT = {
  /**
   * Program Id
   * @description The unique identifier of the program whose webhooks you want to list.
   */
  programId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_PROGRAM_WEBHOOKS tool output.
 */
type FIDEL_API_LIST_PROGRAM_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of webhook objects
       */
      items: {
          /**
           * Active
           * @description Status of the webhook: true if active, false otherwise
           */
          active: boolean;
          /**
           * Created
           * @description ISO 8601 timestamp when the webhook was created
           */
          created: string;
          /**
           * Environment
           * @description Environment of the webhook: 'test' or 'live'
           * @enum {string}
           */
          environment: "test" | "live";
          /**
           * Events
           * @description Subscribed event types
           */
          events: string[];
          /**
           * Id
           * @description Webhook unique identifier
           */
          id: string;
          /**
           * Modified
           * @description ISO 8601 timestamp when the webhook was last modified
           */
          modified: string;
          /**
           * Program Id
           * @description Associated Program ID
           */
          programId: string;
          /**
           * Url
           * @description URL endpoint for webhook
           */
          url: string;
      }[];
      /**
       * Object
       * @description Object type, always 'list'
       * @constant
       */
      object: "list";
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
 * Type of FIDEL_API's FIDEL_API_LIST_TRANSACTIONS tool input.
 */
type FIDEL_API_LIST_TRANSACTIONS_INPUT = {
  /**
   * Card Id
   * @description Filter by tokenized card ID.
   * @default null
   */
  cardId: string | null;
  /**
   * End
   * @description Only return transactions created before this timestamp (RFC3339).
   * @default null
   */
  end: string | null;
  /**
   * Fields
   * @description Comma-separated list of fields to include in each transaction record.
   * @default null
   */
  fields: string | null;
  /**
   * Inserted At
   * @description Only return transactions inserted at this timestamp (RFC3339).
   * @default null
   */
  insertedAt: string | null;
  /**
   * Limit
   * @description Number of transactions to return (1-100).
   * @default 10
   */
  limit: number;
  /**
   * Location Id
   * @description Filter by location ID.
   * @default null
   */
  locationId: string | null;
  /**
   * Offset
   * @description Number of transactions to skip before starting to collect the result set.
   * @default 0
   */
  offset: number;
  /**
   * Program Id
   * @description Filter by Fidel program ID.
   * @default null
   */
  programId: string | null;
  /**
   * Start
   * @description Only return transactions created after this timestamp (RFC3339).
   * @default null
   */
  start: string | null;
};

/**
 * Type of FIDEL_API's FIDEL_API_LIST_TRANSACTIONS tool output.
 */
type FIDEL_API_LIST_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FIDEL_API's FIDEL_API_UPDATE_PROGRAM tool input.
 */
type FIDEL_API_UPDATE_PROGRAM_INPUT = {
  /**
   * Active
   * @description Program active status
   * @default null
   */
  active: boolean | null;
  /**
   * Icon
   * @description Emoji icon representation (colon-wrapped), e.g., ':avocado:'
   * @default null
   */
  icon: string | null;
  /**
   * Icon Background
   * @description Background color for the icon in hex format, e.g., '#BADA55'
   * @default null
   */
  iconBackground: string | null;
  /**
   * Metadata
   * @description Custom metadata as key/value pairs
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description New name for the Program
   * @default null
   */
  name: string | null;
  /**
   * Program Id
   * @description Unique identifier of the Program to update.
   */
  programId?: string;
};

/**
 * Type of FIDEL_API's FIDEL_API_UPDATE_PROGRAM tool output.
 */
type FIDEL_API_UPDATE_PROGRAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Program active status.
       */
      active: boolean;
      /**
       * Created
       * @description ISO 8601 timestamp when the Program was created.
       */
      created: string;
      /**
       * Id
       * @description Unique identifier of the Program.
       */
      id: string;
      /**
       * Metadata
       * @description Custom metadata key/value pairs.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the Program.
       */
      name: string;
      /**
       * Updated
       * @description ISO 8601 timestamp when the Program was last updated.
       */
      updated: string;
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
 * Type map of all available tool input types for toolkit "FIDEL_API".
 */
export type FIDEL_API_TOOL_INPUTS = {
  CREATE_BRAND: FIDEL_API_CREATE_BRAND_INPUT
  CREATE_PROGRAM: FIDEL_API_CREATE_PROGRAM_INPUT
  CREATE_PROGRAM_WEBHOOK: FIDEL_API_CREATE_PROGRAM_WEBHOOK_INPUT
  DELETE_OFFER: FIDEL_API_DELETE_OFFER_INPUT
  DELETE_PROGRAM_WEBHOOK: FIDEL_API_DELETE_PROGRAM_WEBHOOK_INPUT
  DELETE_WEBHOOK: FIDEL_API_DELETE_WEBHOOK_INPUT
  GET_BRAND: FIDEL_API_GET_BRAND_INPUT
  GET_OFFER: FIDEL_API_GET_OFFER_INPUT
  GET_PROGRAM: FIDEL_API_GET_PROGRAM_INPUT
  GET_WEBHOOK: FIDEL_API_GET_WEBHOOK_INPUT
  LIST_BRANDS: FIDEL_API_LIST_BRANDS_INPUT
  LIST_CARDS: FIDEL_API_LIST_CARDS_INPUT
  LIST_LOCATIONS: FIDEL_API_LIST_LOCATIONS_INPUT
  LIST_OFFERS: FIDEL_API_LIST_OFFERS_INPUT
  LIST_PROGRAMS: FIDEL_API_LIST_PROGRAMS_INPUT
  LIST_PROGRAM_WEBHOOKS: FIDEL_API_LIST_PROGRAM_WEBHOOKS_INPUT
  LIST_TRANSACTIONS: FIDEL_API_LIST_TRANSACTIONS_INPUT
  UPDATE_PROGRAM: FIDEL_API_UPDATE_PROGRAM_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIDEL_API".
 */
export type FIDEL_API_TOOL_OUTPUTS = {
  CREATE_BRAND: FIDEL_API_CREATE_BRAND_OUTPUT
  CREATE_PROGRAM: FIDEL_API_CREATE_PROGRAM_OUTPUT
  CREATE_PROGRAM_WEBHOOK: FIDEL_API_CREATE_PROGRAM_WEBHOOK_OUTPUT
  DELETE_OFFER: FIDEL_API_DELETE_OFFER_OUTPUT
  DELETE_PROGRAM_WEBHOOK: FIDEL_API_DELETE_PROGRAM_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: FIDEL_API_DELETE_WEBHOOK_OUTPUT
  GET_BRAND: FIDEL_API_GET_BRAND_OUTPUT
  GET_OFFER: FIDEL_API_GET_OFFER_OUTPUT
  GET_PROGRAM: FIDEL_API_GET_PROGRAM_OUTPUT
  GET_WEBHOOK: FIDEL_API_GET_WEBHOOK_OUTPUT
  LIST_BRANDS: FIDEL_API_LIST_BRANDS_OUTPUT
  LIST_CARDS: FIDEL_API_LIST_CARDS_OUTPUT
  LIST_LOCATIONS: FIDEL_API_LIST_LOCATIONS_OUTPUT
  LIST_OFFERS: FIDEL_API_LIST_OFFERS_OUTPUT
  LIST_PROGRAMS: FIDEL_API_LIST_PROGRAMS_OUTPUT
  LIST_PROGRAM_WEBHOOKS: FIDEL_API_LIST_PROGRAM_WEBHOOKS_OUTPUT
  LIST_TRANSACTIONS: FIDEL_API_LIST_TRANSACTIONS_OUTPUT
  UPDATE_PROGRAM: FIDEL_API_UPDATE_PROGRAM_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIDEL_API toolkit.
 */
export const FIDEL_API = {
  slug: "fidel_api",
  tools: {
    /**
     * Tool to create a new brand on fidel. use when you have brand details and need to register it. this tool sends a post request to /v1/brands with the provided brand data.
     */
    CREATE_BRAND: "FIDEL_API_CREATE_BRAND",
    /**
     * Tool to create a new program. use when registering an offline or online store. use after confirming program name and any optional metadata.
     */
    CREATE_PROGRAM: "FIDEL_API_CREATE_PROGRAM",
    /**
     * Tool to register a new webhook for program-related events. use when you need to receive real-time notifications for specific program events in your application.
     */
    CREATE_PROGRAM_WEBHOOK: "FIDEL_API_CREATE_PROGRAM_WEBHOOK",
    /**
     * Tool to delete a specified offer by its id. use after confirming the correct offer id.
     */
    DELETE_OFFER: "FIDEL_API_DELETE_OFFER",
    /**
     * Tool to delete a specified webhook for a program. use when you need to remove a program webhook after confirming programid and hookid.
     */
    DELETE_PROGRAM_WEBHOOK: "FIDEL_API_DELETE_PROGRAM_WEBHOOK",
    /**
     * Tool to delete a specified webhook. use when you need to remove a webhook by its id.
     */
    DELETE_WEBHOOK: "FIDEL_API_DELETE_WEBHOOK",
    /**
     * Tool to retrieve information about a specific brand. use when you have a brand id and need its details.
     */
    GET_BRAND: "FIDEL_API_GET_BRAND",
    /**
     * Tool to fetch details of a specific offer. use when you have an offer id and need its full details.
     */
    GET_OFFER: "FIDEL_API_GET_OFFER",
    /**
     * Tool to retrieve details of a specific program. use when you have a program id and need its full details.
     */
    GET_PROGRAM: "FIDEL_API_GET_PROGRAM",
    /**
     * Tool to retrieve details of a specific webhook. use when you have a webhook id and need its full details.
     */
    GET_WEBHOOK: "FIDEL_API_GET_WEBHOOK",
    /**
     * Tool to list all brands. use when you need to retrieve a paginated list of all available brands.
     */
    LIST_BRANDS: "FIDEL_API_LIST_BRANDS",
    /**
     * Tool to list all cards for a specific program. use when you have a programid and need to retrieve associated card records.
     */
    LIST_CARDS: "FIDEL_API_LIST_CARDS",
    /**
     * Tool to list all locations for a program. use when you need to retrieve paginated store locations within a specific program.
     */
    LIST_LOCATIONS: "FIDEL_API_LIST_LOCATIONS",
    /**
     * Tool to list all offers. use when you need to retrieve offers after applying optional filters.
     */
    LIST_OFFERS: "FIDEL_API_LIST_OFFERS",
    /**
     * Tool to list fidel programs. use when you need to retrieve available programs with optional pagination.
     */
    LIST_PROGRAMS: "FIDEL_API_LIST_PROGRAMS",
    /**
     * Tool to list all registered webhooks for a specific program. use when you need to retrieve existing webhooks after confirming the programid.
     */
    LIST_PROGRAM_WEBHOOKS: "FIDEL_API_LIST_PROGRAM_WEBHOOKS",
    /**
     * Tool to list transactions. use when you need to page through and/or filter transactions.
     */
    LIST_TRANSACTIONS: "FIDEL_API_LIST_TRANSACTIONS",
    /**
     * Tool to update a program's name, icon, metadata, or status. use after confirming the program id and desired updates.
     */
    UPDATE_PROGRAM: "FIDEL_API_UPDATE_PROGRAM",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIDEL_API".
 */
export type FIDEL_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIDEL_API".
 */
export type FIDEL_API_TRIGGER_EVENTS = {}
