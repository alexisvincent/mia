// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HUMANITIX's HUMANITIX_GET_EVENT tool input.
 */
type HUMANITIX_GET_EVENT_INPUT = {
  /**
   * Event Id
   * @description Unique identifier for the event.
   */
  event_id?: string;
};

/**
 * Type of HUMANITIX's HUMANITIX_GET_EVENT tool output.
 */
type HUMANITIX_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event
       * @description Complete event object as returned by the API
       */
      event: {
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
 * Type of HUMANITIX's HUMANITIX_GET_EVENTS tool input.
 */
type HUMANITIX_GET_EVENTS_INPUT = {
  /**
   * In Future Only
   * @description If true, return only events that have an endDate in the future.
   * @default null
   */
  inFutureOnly: boolean | null;
  /**
   * Override Location
   * @description Override the user location; ISO 3166-1 alpha-2 country code.
   * @default null
   */
  overrideLocation: unknown;
  /**
   * Page
   * @description Page number you wish to fetch.
   */
  page?: number;
  /**
   * Page Size
   * @description Page size of the results you wish to fetch.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Since
   * Format: date-time
   * @description Results since this date-time (ISO 8601).
   * @default null
   */
  since: unknown;
};

/**
 * Type of HUMANITIX's HUMANITIX_GET_EVENTS tool output.
 */
type HUMANITIX_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Events */
      events: {
          /** Accessibility */
          accessibility: {
              /** After Entry Instructions */
              afterEntryInstructions: string;
              /** Contact Name */
              contactName: string;
              /** Contact Number */
              contactNumber: string;
              /** Disabled Parking */
              disabledParking: string;
              /** Entry Instructions */
              entryInstructions: string;
              /** Features */
              features: {
                  /** Access */
                  access: boolean;
                  /** Accessible Print */
                  accessiblePrint: boolean;
                  /** Assistive Listening Systems */
                  assistiveListeningSystems: boolean;
                  /** Audio Description */
                  audioDescription: boolean;
                  /** Braille Symbol */
                  brailleSymbol: boolean;
                  /** Closed Captioning */
                  closedCaptioning: boolean;
                  /** Opened Captioning */
                  openedCaptioning: boolean;
                  /** Sign Language Interpretation */
                  signLanguageInterpretation: boolean;
                  /** Telephone Typewriter */
                  telephoneTypewriter: boolean;
                  /** Volume Control Telephone */
                  volumeControlTelephone: boolean;
                  /** Wheelchair Accessibility */
                  wheelchairAccessibility: boolean;
              };
              /** Hazards */
              hazards: string;
              /** Toilet Location */
              toiletLocation: string;
              /** Travel Instructions */
              travelInstructions: string;
          };
          /** Additional Questions */
          additionalQuestions: {
              /** Created At */
              createdAt: string;
              /** Description */
              description: string;
              /** Disabled */
              disabled: boolean;
              /** Input Type */
              inputType: string;
              /** Per Order */
              perOrder: boolean;
              /** Question */
              question: string;
              /** Required */
              required: boolean;
              /** Updated At */
              updatedAt: string;
          }[];
          /** Affiliate Code */
          affiliateCode: {
              /** Code */
              code: string;
          };
          /** Artists */
          artists: {
              /**
               * External Id
               * @description Artist identifier in the external system.
               */
              externalId: string;
              /**
               * Name
               * @description Artist's name.
               */
              name: string;
              /**
               * Origin
               * @description Source platform of the artist.
               */
              origin: string;
          }[];
          /** Banner Image */
          bannerImage: {
              /** Url */
              url: string;
          };
          /** Category */
          category: string | null;
          /** Classification */
          classification: {
              /**
               * Category
               * @description Classification category.
               */
              category: string;
              /**
               * Subcategory
               * @description Classification subcategory.
               */
              subcategory: string;
          };
          /** Created At */
          createdAt: string;
          /** Currency */
          currency: string;
          /** Dates */
          dates: {
              /** Deleted */
              deleted: boolean;
              /** Disabled */
              disabled: boolean;
              /** End Date */
              endDate: string;
              /** Schedule Id */
              scheduleId: string;
              /** Start Date */
              startDate: string;
          }[];
          /** Description */
          description: string;
          /** End Date */
          endDate: string;
          /** Event Location */
          eventLocation: {
              /** Address */
              address: string;
              /** City */
              city: string;
              /** Country */
              country: string;
              /** Instructions */
              instructions: string;
              /** Lat Lng */
              latLng: number[];
              /** Map Url */
              mapUrl: string;
              /** Online Url */
              onlineUrl: string;
              /** Place Id */
              placeId: string;
              /** Region */
              region: string;
              /** Type */
              type: string;
              /** Venue Name */
              venueName: string;
          };
          /** Feature Image */
          featureImage: {
              /** Url */
              url: string;
          };
          /** Keywords */
          keywords: string[];
          /** Location */
          location: string;
          /** Marked As Sold Out */
          markedAsSoldOut: boolean;
          /** Name */
          name: string;
          /** Organiser Id */
          organiserId: string | null;
          /** Packaged Tickets */
          packagedTickets: {
              /** Deleted */
              deleted: boolean;
              /** Description */
              description: string;
              /** Disabled */
              disabled: boolean;
              /** Name */
              name: string;
              /** Price */
              price: number;
              /** Quantity */
              quantity: number;
              /** Tickets */
              tickets: {
                  /** Quantity */
                  quantity: number;
                  /** Ticket Type Id */
                  ticketTypeId: string;
              }[];
          }[];
          /** Payment Options */
          paymentOptions: {
              /** Refund Settings */
              refundSettings: {
                  /** Custom Refund Policy */
                  customRefundPolicy: string;
                  /** Refund Policy */
                  refundPolicy: string;
              };
          };
          /** Pricing */
          pricing: {
              /** Maximum Price */
              maximumPrice: number;
              /** Minimum Price */
              minimumPrice: number;
          };
          /** Public */
          public: boolean;
          /** Published */
          published: boolean;
          /** Published At */
          publishedAt: string;
          /** Slug */
          slug: string;
          /** Social Image */
          socialImage: {
              /** Url */
              url: string;
          };
          /** Start Date */
          startDate: string;
          /** Suspend Sales */
          suspendSales: boolean;
          /** Tag Ids */
          tagIds: string[];
          /** Ticket Types */
          ticketTypes: {
              /** Deleted */
              deleted: boolean;
              /** Description */
              description: string;
              /** Disabled */
              disabled: boolean;
              /** Is Donation */
              isDonation: boolean;
              /** Name */
              name: string;
              /** Price */
              price: number;
              /** Price Options */
              priceOptions: {
                  /** Enabled */
                  enabled: boolean;
                  /** Options */
                  options: {
                      /** Value */
                      value: string;
                  }[];
              };
              /** Price Range */
              priceRange: {
                  /** Enabled */
                  enabled: boolean;
                  /** Max */
                  max: number;
                  /** Min */
                  min: number;
              };
              /** Quantity */
              quantity: number;
          }[];
          /** Timezone */
          timezone: string;
          /** Total Capacity */
          totalCapacity: number;
          /** Updated At */
          updatedAt: string;
          /** Url */
          url: string | null;
          /** User Id */
          userId: string;
      }[];
      /** Page */
      page: number;
      /** Page Size */
      pageSize: number;
      /** Total */
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
 * Type of HUMANITIX's HUMANITIX_GET_TAGS tool input.
 */
type HUMANITIX_GET_TAGS_INPUT = {
  /**
   * Page
   * @description Page number for paginated results, must be >=1
   * @default 1
   */
  page: number | null;
};

/**
 * Type of HUMANITIX's HUMANITIX_GET_TAGS tool output.
 */
type HUMANITIX_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tag objects returned by the API
       */
      tags: {
          /**
           * Id
           * @description Unique identifier for the tag
           */
          id: string;
          /**
           * Name
           * @description Name of the tag
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
 * Type map of all available tool input types for toolkit "HUMANITIX".
 */
export type HUMANITIX_TOOL_INPUTS = {
  GET_EVENT: HUMANITIX_GET_EVENT_INPUT
  GET_EVENTS: HUMANITIX_GET_EVENTS_INPUT
  GET_TAGS: HUMANITIX_GET_TAGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HUMANITIX".
 */
export type HUMANITIX_TOOL_OUTPUTS = {
  GET_EVENT: HUMANITIX_GET_EVENT_OUTPUT
  GET_EVENTS: HUMANITIX_GET_EVENTS_OUTPUT
  GET_TAGS: HUMANITIX_GET_TAGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HUMANITIX toolkit.
 */
export const HUMANITIX = {
  slug: "humanitix",
  tools: {
    /**
     * Tool to retrieve detailed information about a specific event. use when you have the eventid and need full metadata.
     */
    GET_EVENT: "HUMANITIX_GET_EVENT",
    /**
     * Tool to retrieve a paginated list of events from your humanitix account. use when you need to page through your events after confirming api key validity.
     */
    GET_EVENTS: "HUMANITIX_GET_EVENTS",
    /**
     * Tool to get all tags associated with your humanitix account. use when you need to list or paginate through tags after setting up your api key.
     */
    GET_TAGS: "HUMANITIX_GET_TAGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HUMANITIX".
 */
export type HUMANITIX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HUMANITIX".
 */
export type HUMANITIX_TRIGGER_EVENTS = {}
