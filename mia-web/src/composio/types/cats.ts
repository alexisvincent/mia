// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CATS's CATS_GET_PORTALS tool input.
 */
type CATS_GET_PORTALS_INPUT = {
  /**
   * Page
   * @description Page number of portals to return (starts at 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of portals to return per page.
   * @default 25
   */
  per_page: number;
};

/**
 * Type of CATS's CATS_GET_PORTALS tool output.
 */
type CATS_GET_PORTALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Embedded
       * @description Embedded list of portal records.
       */
      _embedded: {
          /**
           * Portals
           * @description List of portal objects.
           */
          portals: {
              /**
               *  Links
               * @description HATEOAS links for the portal.
               */
              _links: {
                  [key: string]: unknown;
              };
              /**
               * Date Created
               * @description ISO 8601 timestamp when the portal was created.
               */
              date_created: string;
              /**
               * Id
               * @description Unique identifier of the portal.
               */
              id: number;
              /**
               * Name
               * @description Name of the portal.
               */
              name: string;
          }[];
      };
      /**
       *  Links
       * @description Pagination navigation links.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Count
       * @description Number of portals returned in this response.
       */
      count: number;
      /**
       * Total
       * @description Total number of portals available.
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
 * Type map of all available tool input types for toolkit "CATS".
 */
export type CATS_TOOL_INPUTS = {
  GET_PORTALS: CATS_GET_PORTALS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CATS".
 */
export type CATS_TOOL_OUTPUTS = {
  GET_PORTALS: CATS_GET_PORTALS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CATS toolkit.
 */
export const CATS = {
  slug: "cats",
  tools: {
    /**
     * Tool to list all portals. use when you need to browse portal metadata with pagination after authentication.
     */
    GET_PORTALS: "CATS_GET_PORTALS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CATS".
 */
export type CATS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CATS".
 */
export type CATS_TRIGGER_EVENTS = {}
