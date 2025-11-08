// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ADRAPID's ADRAPID_GET_API_INFO tool input.
 */
type ADRAPID_GET_API_INFO_INPUT = object;

/**
 * Type of ADRAPID's ADRAPID_GET_API_INFO tool output.
 */
type ADRAPID_GET_API_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description Server API version
       */
      apiVersion: string;
      /**
       * Backend Version
       * @description Server backend version
       */
      backendVersion: string;
      /**
       * Description
       * @description Description of this endpoint
       */
      description: string;
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
 * Type of ADRAPID's ADRAPID_GET_SYSTEM_ME tool input.
 */
type ADRAPID_GET_SYSTEM_ME_INPUT = object;

/**
 * Type of ADRAPID's ADRAPID_GET_SYSTEM_ME tool output.
 */
type ADRAPID_GET_SYSTEM_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version.
       */
      apiVersion: string;
      /**
       * Backend Version
       * @description Backend system version.
       */
      backendVersion: string;
      /**
       * User
       * @description Information about the authenticated user.
       */
      user: {
          /**
           * Id
           * Format: uuid
           * @description Unique identifier (UUID) of the user.
           */
          id: unknown;
          /**
           * Username
           * @description Username of the user.
           */
          username: string;
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
 * Type of ADRAPID's ADRAPID_LIST_BANNERS tool input.
 */
type ADRAPID_LIST_BANNERS_INPUT = {
  /**
   * Limit
   * @description Max number of items to return (must be ≥ 1).
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Number of items to skip before returning the results (must be ≥ 0).
   * @default 0
   */
  offset: number;
  /**
   * Search
   * @description A search string to filter banners by name or ID.
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Status of the banner to filter by. Available values: exporting, ready, failed.
   * @default null
   * @enum {string|null}
   */
  status: "exporting" | "ready" | "failed" | null;
};

/**
 * Type of ADRAPID's ADRAPID_LIST_BANNERS tool output.
 */
type ADRAPID_LIST_BANNERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of banners matching filters.
       */
      count: number;
      /**
       * Rows
       * @description List of banner records.
       */
      rows: {
          /**
           * Created At
           * @description ISO8601 timestamp when the banner was created.
           */
          createdAt: string;
          /**
           * Failed Reason
           * @description If export failed, reason for failure.
           * @default null
           */
          failedReason: string | null;
          /**
           * Files
           * @description Generated files grouped by size.
           */
          files: {
              /**
               * Files
               * @description List of individual file descriptors.
               */
              files: {
                  /**
                   * Name
                   * @description Name of the file.
                   */
                  name: string;
                  /**
                   * Path
                   * @description Path or URL to the file.
                   */
                  path: string;
                  /**
                   * Size
                   * @description Size of the file in bytes.
                   */
                  size: number;
              }[];
              /**
               * Height
               * @description Height in pixels.
               */
              height: number;
              /**
               * Name
               * @description Logical name of this file set (e.g., base.html).
               */
              name: string;
              /**
               * Size Id
               * @description UUID of this size variant, if present.
               * @default null
               */
              sizeId: string | null;
              /**
               * Size Name
               * @description Label for this size.
               */
              sizeName: string;
              /**
               * Type
               * @description Type of banner bundle (e.g., html5, html5_unpacked).
               */
              type: string;
              /**
               * Width
               * @description Width in pixels.
               */
              width: number;
          }[];
          /**
           * Id
           * @description UUID of the banner.
           */
          id: string;
          /**
           * Name
           * @description Name of the banner.
           */
          name: string;
          /**
           * Owner Id
           * @description UUID of the banner owner.
           */
          ownerId: string;
          /**
           * Parent Template Id
           * @description UUID of the parent template if inherited.
           */
          parentTemplateId: string;
          /**
           * Status
           * @description Export status of the banner.
           * @enum {string}
           */
          status: "exporting" | "ready" | "failed";
          /**
           * Template Id
           * @description UUID of the template used to generate this banner.
           */
          templateId: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the banner was last updated.
           */
          updatedAt: string;
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
 * Type map of all available tool input types for toolkit "ADRAPID".
 */
export type ADRAPID_TOOL_INPUTS = {
  GET_API_INFO: ADRAPID_GET_API_INFO_INPUT
  GET_SYSTEM_ME: ADRAPID_GET_SYSTEM_ME_INPUT
  LIST_BANNERS: ADRAPID_LIST_BANNERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ADRAPID".
 */
export type ADRAPID_TOOL_OUTPUTS = {
  GET_API_INFO: ADRAPID_GET_API_INFO_OUTPUT
  GET_SYSTEM_ME: ADRAPID_GET_SYSTEM_ME_OUTPUT
  LIST_BANNERS: ADRAPID_LIST_BANNERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ADRAPID toolkit.
 */
export const ADRAPID = {
  slug: "adrapid",
  tools: {
    /**
     * Tool to retrieve api root information. use when you need to discover the api's description and version details.
     */
    GET_API_INFO: "ADRAPID_GET_API_INFO",
    /**
     * Tool to get user account and api information. use when you need to retrieve authenticated user details and api versions.
     */
    GET_SYSTEM_ME: "ADRAPID_GET_SYSTEM_ME",
    /**
     * Tool to list all banners and their statuses. use when you need to retrieve banners after creation or to audit existing banners. ensure you apply filters to narrow down results (e.g., status='ready').
     */
    LIST_BANNERS: "ADRAPID_LIST_BANNERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ADRAPID".
 */
export type ADRAPID_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ADRAPID".
 */
export type ADRAPID_TRIGGER_EVENTS = {}
