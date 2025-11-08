// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET tool input.
 */
type BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET_INPUT = {
  /**
   * Currency
   * @description Currency code for widget pricing
   * @default null
   */
  currency: string | null;
  /**
   * Date Visibility
   * @description Visible dates in the calendar
   * @default null
   * @enum {string|null}
   */
  date_visibility: "all" | "hide-unavailable" | "hide-closed" | "custom" | null;
  /**
   * Initial Date
   * @description Initial date shown in the calendar
   * @default null
   * @enum {string|null}
   */
  initial_date: "today" | "next-open" | "next-available" | null;
  /**
   * Interaction
   * @description Interaction type: book or forward
   * @default null
   * @enum {string|null}
   */
  interaction: "book" | "forward" | null;
  /**
   * Locale
   * @description Language tag for widget locale
   * @default null
   */
  locale: string | null;
  /**
   * Name
   * @description Title of the widget
   */
  name?: string;
  /**
   * Organization Id
   * Format: uuid
   * @description UUID of the organization this widget belongs to
   */
  organization_id?: string;
  /**
   * Redirect Url
   * Format: uri
   * @description URL to redirect after booking submission
   * @default null
   */
  redirect_url: unknown;
  /**
   * Settings
   * @description JSON settings object for widget customization
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
  /**
   * Show Booked As
   * @description How to display booked dates
   * @default null
   */
  show_booked_as: string | null;
  /**
   * Show Bookingmood Branding
   * @description Whether to show Bookingmood branding
   * @default null
   */
  show_bookingmood_branding: boolean | null;
  /**
   * Show Closed As
   * @description How to display closed dates
   * @default null
   */
  show_closed_as: string | null;
  /**
   * Show Past
   * @description Whether to show past dates
   * @default null
   */
  show_past: boolean | null;
  /**
   * Show Pending As
   * @description How to display pending dates
   * @default null
   * @enum {string|null}
   */
  show_pending_as: "CANCELLED" | "TENTATIVE" | "CONFIRMED" | null;
  /**
   * Show Reviews
   * @description Whether to show reviews
   * @default null
   */
  show_reviews: boolean | null;
  /**
   * Stay Expanded
   * @description Whether date-selection stays expanded after pick
   * @default null
   */
  stay_expanded: boolean | null;
  /**
   * Type
   * @description Type of the widget
   * @enum {string}
   */
  type?: "calendar" | "timeline" | "inventory" | "search";
  /**
   * Visible Months
   * @description Deprecated: list of visible months in calendar
   * @default null
   */
  visible_months: boolean[] | null;
};

/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET tool output.
 */
type BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp (ISO 8601)
       */
      created_at: unknown;
      /**
       * Id
       * Format: uuid
       * @description Unique identifier of the widget
       */
      id: string;
      /**
       * Name
       * @description Title of the widget
       */
      name: string;
      /**
       * Organization Id
       * Format: uuid
       * @description Organization UUID of the widget
       */
      organization_id: string;
      /**
       * Status
       * @description Status of the widget
       */
      status: string;
      /**
       * Type
       * @description Type of the widget
       * @enum {string}
       */
      type: "calendar" | "timeline" | "inventory" | "search";
      /**
       * Updated At
       * Format: date-time
       * @description Last update timestamp (ISO 8601)
       */
      updated_at: unknown;
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
 * Type of BOOKINGMOOD's BOOKINGMOOD_DELETE_BOOKING_DETAILS tool input.
 */
type BOOKINGMOOD_DELETE_BOOKING_DETAILS_INPUT = {
  /**
   * Booking Id
   * @description Identifier of the related booking.
   * @default null
   */
  booking_id: string | null;
  /**
   * Created At
   * @description Filter by creation timestamp (ISO 8601). Supports PostgREST operators, e.g., 'gte.2025-01-01T00:00:00Z'.
   * @default null
   */
  created_at: string | null;
  /**
   * Id
   * @description Unique identifier of the booking detail to delete.
   * @default null
   */
  id: string | null;
  /**
   * Name
   * @description Localized name of the form field as JSON object, e.g., {'en': 'Name'}.
   * @default null
   */
  name: {
      [key: string]: unknown;
  } | null;
  /**
   * Option Id
   * @description Identifier of the selected option.
   * @default null
   */
  option_id: string | null;
  /**
   * Service Id
   * @description Identifier of the related service.
   * @default null
   */
  service_id: string | null;
  /**
   * Updated At
   * @description Filter by last modification timestamp (ISO 8601). Supports PostgREST operators, e.g., 'lte.2025-01-02T00:00:00Z'.
   * @default null
   */
  updated_at: string | null;
  /**
   * Value
   * @description Value filled in by the customer.
   * @default null
   */
  value: string | null;
};

/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_DELETE_BOOKING_DETAILS tool output.
 */
type BOOKINGMOOD_DELETE_BOOKING_DETAILS_OUTPUT = {
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
 * Type of BOOKINGMOOD's BOOKINGMOOD_LIST_ORGANIZATIONS tool input.
 */
type BOOKINGMOOD_LIST_ORGANIZATIONS_INPUT = object;

/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_LIST_ORGANIZATIONS tool output.
 */
type BOOKINGMOOD_LIST_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organizations
       * @description List of organizations.
       */
      organizations: {
          /**
           * Created At
           * Format: date-time
           * @description Creation timestamp (ISO 8601).
           */
          created_at: unknown;
          /**
           * Id
           * Format: uuid
           * @description Unique identifier of the organization.
           */
          id: string;
          /**
           * Name
           * @description Name of the organization.
           */
          name: string;
          /**
           * Updated At
           * Format: date-time
           * @description Last modification timestamp (ISO 8601).
           */
          updated_at: unknown;
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
 * Type of BOOKINGMOOD's BOOKINGMOOD_LIST_WIDGETS tool input.
 */
type BOOKINGMOOD_LIST_WIDGETS_INPUT = object;

/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_LIST_WIDGETS tool output.
 */
type BOOKINGMOOD_LIST_WIDGETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Widgets
       * @description List of widgets.
       */
      widgets: {
          /**
           * Created At
           * Format: date-time
           * @description Creation timestamp (ISO 8601).
           */
          created_at: unknown;
          /**
           * Id
           * Format: uuid
           * @description Unique identifier of the widget.
           */
          id: string;
          /**
           * Name
           * @description Name of the widget.
           */
          name: string;
          /**
           * Status
           * @description Status of the widget.
           */
          status: string;
          /**
           * Type
           * @description Type of the widget.
           * @enum {string}
           */
          type: "calendar" | "timeline" | "inventory" | "search";
          /**
           * Updated At
           * Format: date-time
           * @description Last modification timestamp (ISO 8601).
           */
          updated_at: unknown;
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
 * Type of BOOKINGMOOD's BOOKINGMOOD_SEARCH_AVAILABILITY tool input.
 */
type BOOKINGMOOD_SEARCH_AVAILABILITY_INPUT = object;

/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_SEARCH_AVAILABILITY tool output.
 */
type BOOKINGMOOD_SEARCH_AVAILABILITY_OUTPUT = {
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
 * Type of BOOKINGMOOD's BOOKINGMOOD_UPDATE_BOOKING_DETAILS tool input.
 */
type BOOKINGMOOD_UPDATE_BOOKING_DETAILS_INPUT = {
  /**
   * Data
   * @description Data to update on the matched booking details.
   */
  data?: {
      /**
       * Attachment
       * @description Attachment text or URL to set.
       * @default null
       */
      attachment: string | null;
      /**
       * Description
       * @description JSON description to set.
       * @default null
       */
      description: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Localized form field name mapping locale codes to text.
       * @default null
       */
      name: {
          [key: string]: string;
      } | null;
      /**
       * Value
       * @description Value filled in by the customer to set.
       * @default null
       */
      value: string | null;
  };
  /**
   * Filters
   * @description Filters to select booking details to update.
   */
  filters?: {
      /**
       * Attachment
       * @description Filter by attachment text or URL (eq).
       * @default null
       */
      attachment: string | null;
      /**
       * Booking Id
       * Format: uuid
       * @description Filter by related booking ID (eq).
       * @default null
       */
      booking_id: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Filter by creation timestamp (eq, ISO 8601).
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Filter by JSON description (eq).
       * @default null
       */
      description: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * Format: uuid
       * @description Filter by booking detail ID (eq).
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Filter by localized form field name (eq).
       * @default null
       */
      name: {
          [key: string]: string;
      } | null;
      /**
       * Option Id
       * Format: uuid
       * @description Filter by selected option ID (eq).
       * @default null
       */
      option_id: string | null;
      /**
       * Service Id
       * Format: uuid
       * @description Filter by related service ID (eq).
       * @default null
       */
      service_id: string | null;
      /**
       * Updated At
       * Format: date-time
       * @description Filter by last modification timestamp (eq, ISO 8601).
       * @default null
       */
      updated_at: string | null;
      /**
       * Value
       * @description Filter by value provided by the customer (eq).
       * @default null
       */
      value: string | null;
  };
};

/**
 * Type of BOOKINGMOOD's BOOKINGMOOD_UPDATE_BOOKING_DETAILS tool output.
 */
type BOOKINGMOOD_UPDATE_BOOKING_DETAILS_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "BOOKINGMOOD".
 */
export type BOOKINGMOOD_TOOL_INPUTS = {
  BOOKINGMOOD_CREATE_WIDGET: BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET_INPUT
  DELETE_BOOKING_DETAILS: BOOKINGMOOD_DELETE_BOOKING_DETAILS_INPUT
  LIST_ORGANIZATIONS: BOOKINGMOOD_LIST_ORGANIZATIONS_INPUT
  LIST_WIDGETS: BOOKINGMOOD_LIST_WIDGETS_INPUT
  SEARCH_AVAILABILITY: BOOKINGMOOD_SEARCH_AVAILABILITY_INPUT
  UPDATE_BOOKING_DETAILS: BOOKINGMOOD_UPDATE_BOOKING_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOOKINGMOOD".
 */
export type BOOKINGMOOD_TOOL_OUTPUTS = {
  BOOKINGMOOD_CREATE_WIDGET: BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET_OUTPUT
  DELETE_BOOKING_DETAILS: BOOKINGMOOD_DELETE_BOOKING_DETAILS_OUTPUT
  LIST_ORGANIZATIONS: BOOKINGMOOD_LIST_ORGANIZATIONS_OUTPUT
  LIST_WIDGETS: BOOKINGMOOD_LIST_WIDGETS_OUTPUT
  SEARCH_AVAILABILITY: BOOKINGMOOD_SEARCH_AVAILABILITY_OUTPUT
  UPDATE_BOOKING_DETAILS: BOOKINGMOOD_UPDATE_BOOKING_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOOKINGMOOD toolkit.
 */
export const BOOKINGMOOD = {
  slug: "bookingmood",
  tools: {
    /**
     * Tool to create a new booking widget. use after preparing widget parameters.
     */
    BOOKINGMOOD_CREATE_WIDGET: "BOOKINGMOOD_BOOKINGMOOD_CREATE_WIDGET",
    /**
     * Tool to delete booking details matching given filters. use after confirming which booking detail records to remove.
     */
    DELETE_BOOKING_DETAILS: "BOOKINGMOOD_DELETE_BOOKING_DETAILS",
    /**
     * Tool to list organizations. use when you need to retrieve all organizations accessible by the current api key.
     */
    LIST_ORGANIZATIONS: "BOOKINGMOOD_LIST_ORGANIZATIONS",
    /**
     * Tool to list booking widgets. use when you need to fetch available widget configurations.
     */
    LIST_WIDGETS: "BOOKINGMOOD_LIST_WIDGETS",
    /**
     * Deprecated: replaced by search availability.py
     */
    SEARCH_AVAILABILITY: "BOOKINGMOOD_SEARCH_AVAILABILITY",
    /**
     * Tool to update existing booking detail records. use when modifying guest-filled form fields for bookings matching specific filters.
     */
    UPDATE_BOOKING_DETAILS: "BOOKINGMOOD_UPDATE_BOOKING_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOOKINGMOOD".
 */
export type BOOKINGMOOD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOOKINGMOOD".
 */
export type BOOKINGMOOD_TRIGGER_EVENTS = {}
