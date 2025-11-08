// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EVENTBRITE's EVENTBRITE_GET_EVENT_CATEGORIES tool input.
 */
type EVENTBRITE_GET_EVENT_CATEGORIES_INPUT = {
  /**
   * Locale
   * @description Return categories in this locale (BCP-47 format), e.g., 'en_US'.
   * @default null
   */
  locale: string | null;
};

/**
 * Type of EVENTBRITE's EVENTBRITE_GET_EVENT_CATEGORIES tool output.
 */
type EVENTBRITE_GET_EVENT_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of event categories.
       */
      categories: {
          /**
           * Id
           * @description Category ID.
           */
          id: string;
          /**
           * Name
           * @description Category name.
           */
          name: string;
          /**
           * Name Localized
           * @description Localized category name.
           */
          name_localized: string;
          /**
           * Subcategories
           * @description List of subcategory objects.
           */
          subcategories?: {
              /**
               * Id
               * @description Subcategory ID.
               */
              id: string;
              /**
               * Name
               * @description Subcategory name.
               */
              name: string;
              /**
               * Resource Uri
               * @description API URI for this subcategory.
               */
              resource_uri: string;
          }[];
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
 * Type of EVENTBRITE's EVENTBRITE_GET_EVENT_FORMATS tool input.
 */
type EVENTBRITE_GET_EVENT_FORMATS_INPUT = object;

/**
 * Type of EVENTBRITE's EVENTBRITE_GET_EVENT_FORMATS tool output.
 */
type EVENTBRITE_GET_EVENT_FORMATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Formats
       * @description List of available event formats
       */
      formats: {
          /**
           * Id
           * @description Unique identifier for the format
           */
          id: string;
          /**
           * Name
           * @description The name of the format
           */
          name: string;
          /**
           * Resource Uri
           * @description URI to the format resource
           */
          resource_uri: string;
          /**
           * Short Name
           * @description A shorter version of the format name
           */
          short_name: string;
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
 * Type of EVENTBRITE's EVENTBRITE_GET_EVENT_SUBCATEGORIES tool input.
 */
type EVENTBRITE_GET_EVENT_SUBCATEGORIES_INPUT = {
  /**
   * Locale
   * @description Return subcategories in this locale (BCP-47 format), e.g., 'en_US'.
   * @default null
   */
  locale: string | null;
};

/**
 * Type of EVENTBRITE's EVENTBRITE_GET_EVENT_SUBCATEGORIES tool output.
 */
type EVENTBRITE_GET_EVENT_SUBCATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subcategories
       * @description List of event subcategory objects.
       */
      subcategories: {
          /**
           * Id
           * @description Subcategory ID.
           */
          id: string;
          /**
           * Name
           * @description Subcategory name.
           */
          name: string;
          /**
           * Name Localized
           * @description Localized subcategory name.
           */
          name_localized: string;
          /**
           * Parent Category
           * @description Parent category object.
           */
          parent_category: {
              /**
               * Id
               * @description Category ID.
               */
              id: string;
              /**
               * Name
               * @description Category name.
               */
              name: string;
              /**
               * Name Localized
               * @description Localized category name.
               */
              name_localized: string;
              /**
               * Resource Uri
               * @description API URI for this category.
               */
              resource_uri: string;
              /**
               * Short Name
               * @description Short category name.
               */
              short_name: string;
              /**
               * Short Name Localized
               * @description Localized short category name.
               */
              short_name_localized: string;
          };
          /**
           * Resource Uri
           * @description API URI for this subcategory.
           */
          resource_uri: string;
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
 * Type map of all available tool input types for toolkit "EVENTBRITE".
 */
export type EVENTBRITE_TOOL_INPUTS = {
  GET_EVENT_CATEGORIES: EVENTBRITE_GET_EVENT_CATEGORIES_INPUT
  GET_EVENT_FORMATS: EVENTBRITE_GET_EVENT_FORMATS_INPUT
  GET_EVENT_SUBCATEGORIES: EVENTBRITE_GET_EVENT_SUBCATEGORIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EVENTBRITE".
 */
export type EVENTBRITE_TOOL_OUTPUTS = {
  GET_EVENT_CATEGORIES: EVENTBRITE_GET_EVENT_CATEGORIES_OUTPUT
  GET_EVENT_FORMATS: EVENTBRITE_GET_EVENT_FORMATS_OUTPUT
  GET_EVENT_SUBCATEGORIES: EVENTBRITE_GET_EVENT_SUBCATEGORIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EVENTBRITE toolkit.
 */
export const EVENTBRITE = {
  slug: "eventbrite",
  tools: {
    /**
     * Tool to retrieve event categories. use when selecting a category for an event. localizes results via optional locale parameter.
     */
    GET_EVENT_CATEGORIES: "EVENTBRITE_GET_EVENT_CATEGORIES",
    /**
     * Tool to list event formats. use when you need the available formats before creating or updating an event.
     */
    GET_EVENT_FORMATS: "EVENTBRITE_GET_EVENT_FORMATS",
    /**
     * Tool to list all event subcategories. use when fetching available subcategory options, optionally filtered by locale after selecting a category.
     */
    GET_EVENT_SUBCATEGORIES: "EVENTBRITE_GET_EVENT_SUBCATEGORIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EVENTBRITE".
 */
export type EVENTBRITE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EVENTBRITE".
 */
export type EVENTBRITE_TRIGGER_EVENTS = {}
