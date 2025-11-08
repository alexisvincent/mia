// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LODGIFY's LODGIFY_GET_COUNTRIES tool input.
 */
type LODGIFY_GET_COUNTRIES_INPUT = object;

/**
 * Type of LODGIFY's LODGIFY_GET_COUNTRIES tool output.
 */
type LODGIFY_GET_COUNTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Countries
       * @description List of supported countries with their codes and names.
       */
      countries: {
          /**
           * Id
           * @description The country code (ISO 3166-1 alpha-2).
           */
          id: string;
          /**
           * Name
           * @description The full country name.
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
 * Type of LODGIFY's LODGIFY_GET_PROPERTY_AVAILABILITY tool input.
 */
type LODGIFY_GET_PROPERTY_AVAILABILITY_INPUT = {
  /**
   * Period End
   * Format: date
   * @description End date for the availability period. If not provided, defaults to 30 days from start date.
   * @default null
   */
  periodEnd: string | null;
  /**
   * Period Start
   * Format: date
   * @description Start date for the availability period. If not provided, defaults to today.
   * @default null
   */
  periodStart: string | null;
  /**
   * Property Id
   * @description The unique identifier of the property.
   */
  propertyId?: number;
};

/**
 * Type of LODGIFY's LODGIFY_GET_PROPERTY_AVAILABILITY tool output.
 */
type LODGIFY_GET_PROPERTY_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Wise Availability
       * @description An array of availability objects, each containing details for a specific date.
       */
      dateWiseAvailability: {
          /**
           * Date
           * Format: date
           * @description The specific date.
           */
          date: string;
          /**
           * Maximum Nights
           * @description Maximum nights allowed for booking on that date.
           * @default null
           */
          maximumNights: number | null;
          /**
           * Minimum Nights
           * @description Minimum nights required for booking on that date.
           * @default null
           */
          minimumNights: number | null;
          /**
           * Price
           * @description Price details for the date.
           * @default null
           */
          price: {
              /**
               * Amount
               * @description Price for that date.
               * @default null
               */
              amount: number | null;
              /**
               * Currency
               * @description Currency of the price.
               * @default null
               */
              currency: string | null;
          } | null;
          /**
           * Reservation Ids
           * @description List of reservation IDs affecting availability on that date.
           * @default null
           */
          reservationIds: string[] | null;
          /**
           * Status
           * @description Availability status for that date.
           * @enum {string}
           */
          status: "AVAILABLE" | "NOT_AVAILABLE";
          /**
           * Units Available
           * @description Number of units available on that date.
           * @default null
           */
          unitsAvailable: number | null;
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
 * Type of LODGIFY's LODGIFY_LIST_CHANNELS tool input.
 */
type LODGIFY_LIST_CHANNELS_INPUT = object;

/**
 * Type of LODGIFY's LODGIFY_LIST_CHANNELS tool output.
 */
type LODGIFY_LIST_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of channels available in the account.
       */
      channels: {
          /**
           * Description
           * @description Description of the channel
           */
          description: string;
          /**
           * Id
           * @description Channel ID
           */
          id: number;
          /**
           * Is Active
           * @description Indicates if the channel is active
           */
          isActive: boolean;
          /**
           * Name
           * @description Channel name
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
 * Type of LODGIFY's LODGIFY_LIST_CHANNEL_CONNECTIONS tool input.
 */
type LODGIFY_LIST_CHANNEL_CONNECTIONS_INPUT = {
  /**
   * Channel
   * @description Filter by channel name or identifier.
   * @default null
   */
  channel: string | null;
  /**
   * Page
   * @description Page number of results to retrieve (must be ≥ 1).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page (must be ≥ 1).
   * @default null
   */
  pageSize: number | null;
  /**
   * Status
   * @description Filter by connection status (e.g., 'connected', 'disconnected').
   * @default null
   */
  status: string | null;
};

/**
 * Type of LODGIFY's LODGIFY_LIST_CHANNEL_CONNECTIONS tool output.
 */
type LODGIFY_LIST_CHANNEL_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description List of channel connection objects.
   */
  data?: {
      /**
       * Channel
       * @description Name or identifier of the channel.
       */
      channel: string;
      /**
       * Id
       * @description Unique identifier of the channel connection.
       */
      id: string;
      /**
       * Status
       * @description Connection status of the channel connection.
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
   * Page Size
   * @description Number of results per page.
   */
  pageSize?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of channel connections.
   */
  total?: number;
};

/**
 * Type of LODGIFY's LODGIFY_LIST_CHANNEL_MAPPINGS tool input.
 */
type LODGIFY_LIST_CHANNEL_MAPPINGS_INPUT = {
  /**
   * Channel Code
   * @description Filter by channel code (e.g., Airbnb).
   * @default null
   */
  channelCode: string | null;
  /**
   * External Id
   * @description Filter by external listing ID.
   * @default null
   */
  externalId: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page.
   * @default null
   */
  pageSize: number | null;
  /**
   * Property Id
   * @description Filter by Lodgify property ID.
   * @default null
   */
  propertyId: number | null;
};

/**
 * Type of LODGIFY's LODGIFY_LIST_CHANNEL_MAPPINGS tool output.
 */
type LODGIFY_LIST_CHANNEL_MAPPINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of channel mapping records.
       */
      items: {
          /**
           * Channel Code
           * @description Channel code for the mapping.
           */
          channelCode: string;
          /**
           * External Id
           * @description External listing ID from the channel.
           */
          externalId: string;
          /**
           * Id
           * @description Unique channel mapping ID.
           */
          id: number;
          /**
           * Owner Id
           * @description Owner (user) ID of the property.
           */
          ownerId: number;
          /**
           * Property Id
           * @description Lodgify property ID mapped.
           */
          propertyId: number;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Page Count
       * @description Total number of pages available.
       */
      pageCount: number;
      /**
       * Page Size
       * @description Number of items per page returned.
       */
      pageSize: number;
      /**
       * Total Count
       * @description Total number of channel mappings across all pages.
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
 * Type of LODGIFY's LODGIFY_LIST_CHANNEL_RESERVATIONS tool input.
 */
type LODGIFY_LIST_CHANNEL_RESERVATIONS_INPUT = {
  /**
   * Channel Id
   * @description Filter by channel ID.
   * @default null
   */
  channelId: number | null;
  /**
   * Created From
   * @description Start date for reservation creation (yyyy-MM-dd).
   * @default null
   */
  createdFrom: string | null;
  /**
   * Created To
   * @description End date for reservation creation (yyyy-MM-dd).
   * @default null
   */
  createdTo: string | null;
  /**
   * Limit
   * @description Maximum number of reservations to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set.
   * @default null
   */
  offset: number | null;
  /**
   * Property Id
   * @description Filter by Lodgify property ID.
   * @default null
   */
  propertyId: number | null;
};

/**
 * Type of LODGIFY's LODGIFY_LIST_CHANNEL_RESERVATIONS tool output.
 */
type LODGIFY_LIST_CHANNEL_RESERVATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of channel reservations found.
       */
      count: number;
      /**
       * Reservations
       * @description List of reservation objects.
       */
      reservations: {
          /**
           * Arrival
           * @description Arrival date (yyyy-MM-dd).
           */
          arrival: string;
          /**
           * Channel Id
           * @description Channel unique ID.
           */
          channelId: number;
          /**
           * Created
           * @description Creation datetime (ISO 8601).
           */
          created: string;
          /**
           * Currency
           * @description Currency code (ISO 4217).
           */
          currency: string;
          /**
           * Departure
           * @description Departure date (yyyy-MM-dd).
           */
          departure: string;
          /**
           * Guest
           * @description Guest details.
           */
          guest: {
              /**
               * Email
               * @description Guest email address.
               */
              email: string;
              /**
               * First Name
               * @description Guest first name.
               */
              firstName: string;
              /**
               * Last Name
               * @description Guest last name.
               */
              lastName: string;
              /**
               * Phone
               * @description Guest phone number.
               * @default null
               */
              phone: string | null;
          };
          /**
           * Id
           * @description Reservation unique ID.
           */
          id: number;
          /**
           * Property Id
           * @description Property unique ID.
           */
          propertyId: number;
          /**
           * Status
           * @description Reservation status.
           */
          status: string;
          /**
           * Total Price
           * @description Total reservation price.
           */
          totalPrice: number;
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
 * Type of LODGIFY's LODGIFY_LIST_PROPERTIES tool input.
 */
type LODGIFY_LIST_PROPERTIES_INPUT = {
  /**
   * Page
   * @description Page number of the results to retrieve (starting from 1)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page (maximum 100)
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of LODGIFY's LODGIFY_LIST_PROPERTIES tool output.
 */
type LODGIFY_LIST_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number of the results.
       */
      page: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      pageSize: number;
      /**
       * Results
       * @description List of property objects.
       */
      results: {
          /**
           * Address
           * @description Postal address details of the property.
           * @default null
           */
          address: {
              /**
               * City
               * @description City of the property.
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description 2-letter ISO country code of the property.
               * @default null
               */
              countryCode: string | null;
              /**
               * Latitude
               * @description Latitude coordinate of the property.
               * @default null
               */
              latitude: number | null;
              /**
               * Line1
               * @description Street address line 1 of the property.
               * @default null
               */
              line1: string | null;
              /**
               * Line2
               * @description Street address line 2 of the property.
               * @default null
               */
              line2: string | null;
              /**
               * Longitude
               * @description Longitude coordinate of the property.
               * @default null
               */
              longitude: number | null;
              /**
               * Postcode
               * @description Postal code of the property.
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description State or province of the property.
               * @default null
               */
              state: string | null;
          } | null;
          /**
           * Id
           * @description Unique property identifier.
           */
          id: string;
          /**
           * Name
           * @description Name of the property.
           */
          name: string;
      }[];
      /**
       * Total Count
       * @description Total number of properties available.
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
 * Type map of all available tool input types for toolkit "LODGIFY".
 */
export type LODGIFY_TOOL_INPUTS = {
  GET_COUNTRIES: LODGIFY_GET_COUNTRIES_INPUT
  GET_PROPERTY_AVAILABILITY: LODGIFY_GET_PROPERTY_AVAILABILITY_INPUT
  LIST_CHANNELS: LODGIFY_LIST_CHANNELS_INPUT
  LIST_CHANNEL_CONNECTIONS: LODGIFY_LIST_CHANNEL_CONNECTIONS_INPUT
  LIST_CHANNEL_MAPPINGS: LODGIFY_LIST_CHANNEL_MAPPINGS_INPUT
  LIST_CHANNEL_RESERVATIONS: LODGIFY_LIST_CHANNEL_RESERVATIONS_INPUT
  LIST_PROPERTIES: LODGIFY_LIST_PROPERTIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LODGIFY".
 */
export type LODGIFY_TOOL_OUTPUTS = {
  GET_COUNTRIES: LODGIFY_GET_COUNTRIES_OUTPUT
  GET_PROPERTY_AVAILABILITY: LODGIFY_GET_PROPERTY_AVAILABILITY_OUTPUT
  LIST_CHANNELS: LODGIFY_LIST_CHANNELS_OUTPUT
  LIST_CHANNEL_CONNECTIONS: LODGIFY_LIST_CHANNEL_CONNECTIONS_OUTPUT
  LIST_CHANNEL_MAPPINGS: LODGIFY_LIST_CHANNEL_MAPPINGS_OUTPUT
  LIST_CHANNEL_RESERVATIONS: LODGIFY_LIST_CHANNEL_RESERVATIONS_OUTPUT
  LIST_PROPERTIES: LODGIFY_LIST_PROPERTIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LODGIFY toolkit.
 */
export const LODGIFY = {
  slug: "lodgify",
  tools: {
    /**
     * Tool to retrieve all available countries. use when you need to populate country selectors with supported iso codes and names.
     */
    GET_COUNTRIES: "LODGIFY_GET_COUNTRIES",
    /**
     * This tool retrieves the availability information for a specific property. it requires the propertyid as an input. the response will include an array of availability objects, each containing the date, availability status, number of units available, price (amount and currency), minimum and maximum nights for booking, and any associated reservation ids for that date.
     */
    GET_PROPERTY_AVAILABILITY: "LODGIFY_GET_PROPERTY_AVAILABILITY",
    /**
     * Tool to retrieve a list of all channels. use when you need to view or process all channel configurations.
     */
    LIST_CHANNELS: "LODGIFY_LIST_CHANNELS",
    /**
     * Tool to retrieve a list of all channel connections. use when you need to display or synchronize channel connections across properties.
     */
    LIST_CHANNEL_CONNECTIONS: "LODGIFY_LIST_CHANNEL_CONNECTIONS",
    /**
     * Tool to list channel mappings. use when you need to retrieve all channel mappings, optionally filtered by property, channel code, or external id. supports pagination.
     */
    LIST_CHANNEL_MAPPINGS: "LODGIFY_LIST_CHANNEL_MAPPINGS",
    /**
     * Tool to list channel reservations. use when you need to retrieve reservations across channels filtered by property, channel, or date range.
     */
    LIST_CHANNEL_RESERVATIONS: "LODGIFY_LIST_CHANNEL_RESERVATIONS",
    /**
     * Tool to retrieve a paginated list of properties. use when you need to view or process all properties with pagination.
     */
    LIST_PROPERTIES: "LODGIFY_LIST_PROPERTIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LODGIFY".
 */
export type LODGIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LODGIFY".
 */
export type LODGIFY_TRIGGER_EVENTS = {}
