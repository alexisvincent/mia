// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PARMA's PARMA_DATA_JSON tool input.
 */
type PARMA_DATA_JSON_INPUT = object;

/**
 * Type of PARMA's PARMA_DATA_JSON tool output.
 */
type PARMA_DATA_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datasets
       * @description List of dataset metadata as defined by DCAT-US 1.1
       */
      datasets: {
          /**
           * Id
           * @description Unique identifier of the dataset
           */
          id: string;
          /**
           * Name
           * @description Identifier or slug of the dataset
           */
          name: string;
          /**
           * Notes
           * @description Description or notes about the dataset
           * @default null
           */
          notes: string | null;
          /**
           * Organization
           * @description Owning organization information
           */
          organization: {
              /**
               * Title
               * @description Name of the organization
               */
              title: string;
          };
          /**
           * Resources
           * @description List of downloadable resources for this dataset
           */
          resources: {
              /**
               * Format
               * @description Data format of the resource (e.g., CSV, JSON)
               */
              format: string;
              /**
               * Mimetype
               * @description MIME type of the resource (e.g., text/csv)
               */
              mimetype: string;
              /**
               * Url
               * @description Link to the resource (e.g., download URL)
               */
              url: string;
          }[];
          /**
           * Tags
           * @description Tags associated with the dataset
           */
          tags: {
              /**
               * Name
               * @description Name of the tag
               */
              name: string;
          }[];
          /**
           * Title
           * @description Human-readable title of the dataset
           */
          title: string;
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
 * Type of PARMA's PARMA_GET_USER_PROFILE tool input.
 */
type PARMA_GET_USER_PROFILE_INPUT = object;

/**
 * Type of PARMA's PARMA_GET_USER_PROFILE tool output.
 */
type PARMA_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Account creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * First Name
       * @description User's first name
       */
      firstName: string;
      /**
       * Id
       * @description User's unique identifier
       */
      id: string;
      /**
       * Last Name
       * @description User's last name
       */
      lastName: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last account update timestamp in ISO 8601 format
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
 * Type of PARMA's PARMA_PACKAGE_LIST tool input.
 */
type PARMA_PACKAGE_LIST_INPUT = object;

/**
 * Type of PARMA's PARMA_PACKAGE_LIST tool output.
 */
type PARMA_PACKAGE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Help
       * @description Help text about the API endpoint.
       */
      help: string;
      /**
       * Result
       * @description List of dataset identifiers available in the catalog.
       */
      result: string[];
      /**
       * Success
       * @description Indicates whether the API call was successful.
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
 * Type map of all available tool input types for toolkit "PARMA".
 */
export type PARMA_TOOL_INPUTS = {
  DATA_JSON: PARMA_DATA_JSON_INPUT
  GET_USER_PROFILE: PARMA_GET_USER_PROFILE_INPUT
  PACKAGE_LIST: PARMA_PACKAGE_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PARMA".
 */
export type PARMA_TOOL_OUTPUTS = {
  DATA_JSON: PARMA_DATA_JSON_OUTPUT
  GET_USER_PROFILE: PARMA_GET_USER_PROFILE_OUTPUT
  PACKAGE_LIST: PARMA_PACKAGE_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PARMA toolkit.
 */
export const PARMA = {
  slug: "parma",
  tools: {
    /**
     * Tool to retrieve dcat-us 1.1 compliant metadata of all datasets. use when you need the complete catalog json (data.json) from parma’s open data portal.
     */
    DATA_JSON: "PARMA_DATA_JSON",
    /**
     * Tool to retrieve the authenticated user's profile. use after obtaining a valid auth token to fetch current user account details.
     */
    GET_USER_PROFILE: "PARMA_GET_USER_PROFILE",
    /**
     * Tool to retrieve all dataset identifiers from the parma ckan instance. use when you need to list every available dataset id.
     */
    PACKAGE_LIST: "PARMA_PACKAGE_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PARMA".
 */
export type PARMA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PARMA".
 */
export type PARMA_TRIGGER_EVENTS = {}
