// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EXPOFP's EXPOFP_ADD_CATEGORY tool input.
 */
type EXPOFP_ADD_CATEGORY_INPUT = {
  /**
   * Event Id
   * @description Unique numeric ID of the expo event.
   */
  eventId?: number;
  /**
   * Name
   * @description Name of the category to add
   */
  name?: string;
  /**
   * Token
   * @description API token obtained from ExpoFP profile page.
   */
  token?: string;
};

/**
 * Type of EXPOFP's EXPOFP_ADD_CATEGORY tool output.
 */
type EXPOFP_ADD_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the newly created category
       */
      id: number;
      /**
       * Name
       * @description Name of the created category
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
 * Type of EXPOFP's EXPOFP_LIST_ALL_EXPOS tool input.
 */
type EXPOFP_LIST_ALL_EXPOS_INPUT = object;

/**
 * Type of EXPOFP's EXPOFP_LIST_ALL_EXPOS tool output.
 */
type EXPOFP_LIST_ALL_EXPOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Detailed description of the expo
       */
      description: string;
      /**
       * End Date
       * @description Expo end date and time in ISO 8601 format
       */
      endDate: string;
      /**
       * Id
       * @description Unique identifier for the expo
       */
      id: number;
      /**
       * Location
       * @description Venue or city where the expo takes place
       */
      location: string;
      /**
       * Name
       * @description Name of the expo
       */
      name: string;
      /**
       * Start Date
       * @description Expo start date and time in ISO 8601 format
       */
      startDate: string;
      /**
       * Status
       * @description Current status of the expo
       */
      status: string;
      /**
       * Time Zone Id
       * @description IANA time zone identifier for the expo
       */
      timeZoneId: string;
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
 * Type of EXPOFP's EXPOFP_LIST_ALL_EXPO_EXTRAS tool input.
 */
type EXPOFP_LIST_ALL_EXPO_EXTRAS_INPUT = {
  /**
   * Event Id
   * @description Unique numeric ID of the expo event.
   */
  eventId?: number;
  /**
   * Token
   * @description API token obtained from ExpoFP profile page.
   */
  token?: string;
};

/**
 * Type of EXPOFP's EXPOFP_LIST_ALL_EXPO_EXTRAS tool output.
 */
type EXPOFP_LIST_ALL_EXPO_EXTRAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Booth Extras
       * @description List of booth-specific extras, with exhibitor booth details.
       */
      boothExtras: {
          /**
           * Exhibitors
           * @description List of exhibitors who have this extra.
           */
          Exhibitors: {
              /**
               * Booth
               * @description Booth information for the exhibitor; present only in boothExtras list.
               * @default null
               */
              booth: {
                  /**
                   * External Id
                   * @description External identifier of the booth.
                   */
                  externalId: string;
                  /**
                   * Name
                   * @description Name or label of the booth.
                   */
                  name: string;
              } | null;
              /**
               * External Id
               * @description External identifier of the exhibitor.
               */
              externalId: string;
              /**
               * Name
               * @description Name of the exhibitor.
               */
              name: string;
          }[];
          /**
           * Description
           * @description Description of what the extra provides.
           */
          description: string;
          /**
           * Id
           * @description Unique ID of the extra.
           */
          id: number;
          /**
           * Is Reserve Or Buy Allowed
           * @description Indicates if reserving or buying is allowed for this extra.
           */
          isReserveOrBuyAllowed: boolean;
          /**
           * Limit Per Event
           * @description Maximum number of this extra allowed per event.
           */
          limitPerEvent: number;
          /**
           * Limit Per Exhibitor
           * @description Maximum number of this extra allowed per exhibitor.
           */
          limitPerExhibitor: number;
          /**
           * Name
           * @description Name of the extra.
           */
          name: string;
          /**
           * Price
           * @description Price of the extra.
           */
          price: number;
      }[];
      /**
       * Extras
       * @description List of general expo extras.
       */
      extras: {
          /**
           * Exhibitors
           * @description List of exhibitors who have this extra.
           */
          Exhibitors: {
              /**
               * Booth
               * @description Booth information for the exhibitor; present only in boothExtras list.
               * @default null
               */
              booth: {
                  /**
                   * External Id
                   * @description External identifier of the booth.
                   */
                  externalId: string;
                  /**
                   * Name
                   * @description Name or label of the booth.
                   */
                  name: string;
              } | null;
              /**
               * External Id
               * @description External identifier of the exhibitor.
               */
              externalId: string;
              /**
               * Name
               * @description Name of the exhibitor.
               */
              name: string;
          }[];
          /**
           * Description
           * @description Description of what the extra provides.
           */
          description: string;
          /**
           * Id
           * @description Unique ID of the extra.
           */
          id: number;
          /**
           * Is Reserve Or Buy Allowed
           * @description Indicates if reserving or buying is allowed for this extra.
           */
          isReserveOrBuyAllowed: boolean;
          /**
           * Limit Per Event
           * @description Maximum number of this extra allowed per event.
           */
          limitPerEvent: number;
          /**
           * Limit Per Exhibitor
           * @description Maximum number of this extra allowed per exhibitor.
           */
          limitPerExhibitor: number;
          /**
           * Name
           * @description Name of the extra.
           */
          name: string;
          /**
           * Price
           * @description Price of the extra.
           */
          price: number;
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
 * Type of EXPOFP's EXPOFP_REMOVE_CATEGORY tool input.
 */
type EXPOFP_REMOVE_CATEGORY_INPUT = {
  /**
   * Id
   * @description Unique ID of the category to remove.
   */
  id?: number;
  /**
   * Token
   * @description API token obtained from ExpoFP profile page.
   */
  token?: string;
};

/**
 * Type of EXPOFP's EXPOFP_REMOVE_CATEGORY tool output.
 */
type EXPOFP_REMOVE_CATEGORY_OUTPUT = {
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
 * Type of EXPOFP's EXPOFP_UPDATE_CATEGORY tool input.
 */
type EXPOFP_UPDATE_CATEGORY_INPUT = {
  /**
   * Id
   * @description Unique ID of the category to update.
   */
  id?: number;
  /**
   * Name
   * @description New name for the category
   */
  name?: string;
  /**
   * Token
   * @description API token obtained from ExpoFP profile page.
   */
  token?: string;
};

/**
 * Type of EXPOFP's EXPOFP_UPDATE_CATEGORY tool output.
 */
type EXPOFP_UPDATE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the updated category
       */
      id: number;
      /**
       * Name
       * @description Name of the updated category
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
 * Type map of all available tool input types for toolkit "EXPOFP".
 */
export type EXPOFP_TOOL_INPUTS = {
  ADD_CATEGORY: EXPOFP_ADD_CATEGORY_INPUT
  LIST_ALL_EXPOS: EXPOFP_LIST_ALL_EXPOS_INPUT
  LIST_ALL_EXPO_EXTRAS: EXPOFP_LIST_ALL_EXPO_EXTRAS_INPUT
  REMOVE_CATEGORY: EXPOFP_REMOVE_CATEGORY_INPUT
  UPDATE_CATEGORY: EXPOFP_UPDATE_CATEGORY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EXPOFP".
 */
export type EXPOFP_TOOL_OUTPUTS = {
  ADD_CATEGORY: EXPOFP_ADD_CATEGORY_OUTPUT
  LIST_ALL_EXPOS: EXPOFP_LIST_ALL_EXPOS_OUTPUT
  LIST_ALL_EXPO_EXTRAS: EXPOFP_LIST_ALL_EXPO_EXTRAS_OUTPUT
  REMOVE_CATEGORY: EXPOFP_REMOVE_CATEGORY_OUTPUT
  UPDATE_CATEGORY: EXPOFP_UPDATE_CATEGORY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EXPOFP toolkit.
 */
export const EXPOFP = {
  slug: "expofp",
  tools: {
    /**
     * Tool to add a new category to an expo. use when you have both the expo event id and a valid api token. example: "add category 'keynotes' to event 2655."
     */
    ADD_CATEGORY: "EXPOFP_ADD_CATEGORY",
    /**
     * Tool to list all expos. uses mock api endpoint for testing.
     */
    LIST_ALL_EXPOS: "EXPOFP_LIST_ALL_EXPOS",
    /**
     * Tool to list all extras for an expo. use after obtaining a valid exporter api token and expo event id. example: "list all extras for event 2655."
     */
    LIST_ALL_EXPO_EXTRAS: "EXPOFP_LIST_ALL_EXPO_EXTRAS",
    /**
     * Tool to remove a category from an expo. use when you have the category id and a valid api token. example: "remove category #123."
     */
    REMOVE_CATEGORY: "EXPOFP_REMOVE_CATEGORY",
    /**
     * Tool to update an existing category. use when you have the category id and a valid api token. example: "update category #1 name to 'category blue'."
     */
    UPDATE_CATEGORY: "EXPOFP_UPDATE_CATEGORY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EXPOFP".
 */
export type EXPOFP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EXPOFP".
 */
export type EXPOFP_TRIGGER_EVENTS = {}
