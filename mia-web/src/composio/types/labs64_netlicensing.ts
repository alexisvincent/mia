// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LABS64_NETLICENSING's LABS64_NETLICENSING_LICENSE_LIST tool input.
 */
type LABS64_NETLICENSING_LICENSE_LIST_INPUT = {
  /**
   * Filter
   * @description Additional filter expression, e.g., 'valid==true'
   * @default null
   */
  filter: string | null;
  /**
   * License Type
   * @description Filter licenses by license type
   * @default null
   */
  licenseType: string | null;
  /**
   * Licensee Number
   * @description Filter licenses by licensee number
   * @default null
   */
  licenseeNumber: string | null;
  /**
   * Page Number
   * @description Page number for paginated results (0-based)
   * @default null
   */
  pageNumber: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default null
   */
  pageSize: number | null;
  /**
   * Product Number
   * @description Filter licenses by product number
   * @default null
   */
  productNumber: string | null;
};

/**
 * Type of LABS64_NETLICENSING's LABS64_NETLICENSING_LICENSE_LIST tool output.
 */
type LABS64_NETLICENSING_LICENSE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of license records
       */
      items: ({
          /**
           * End Date
           * @description License end date in ISO8601
           * @default null
           */
          endDate: string | null;
          /**
           * Features
           * @description License features
           * @default null
           */
          features: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique license identifier
           */
          id: string;
          /**
           * Licensee
           * @description Associated licensee details
           * @default null
           */
          licensee: {
              [key: string]: unknown;
          } | null;
          /**
           * Product Module
           * @description Associated product module details
           * @default null
           */
          productModule: {
              [key: string]: unknown;
          } | null;
          /**
           * Start Date
           * @description License start date in ISO8601
           * @default null
           */
          startDate: string | null;
          /**
           * Status
           * @description License status
           * @default null
           */
          status: string | null;
          /**
           * Type
           * @description License type
           * @default null
           */
          type: string | null;
          /**
           * Valid
           * @description Indicates if the license is valid
           * @default null
           */
          valid: boolean | null;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * PageInfo
       * @description Pagination details for list responses.
       * @default null
       */
      page: {
          /**
           * Number
           * @description Current page number (0-based)
           */
          number: number;
          /**
           * Size
           * @description Number of items per page
           */
          size: number;
          /**
           * Total Elements
           * @description Total items matching criteria
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
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
 * Type of LABS64_NETLICENSING's LABS64_NETLICENSING_PRODUCT_LIST tool input.
 */
type LABS64_NETLICENSING_PRODUCT_LIST_INPUT = {
  /**
   * Filter
   * @description Filter criteria, see https://netlicensing.io/wiki/filters (e.g., 'active==true')
   * @default null
   */
  filter: string | null;
  /**
   * Page Number
   * @description Page number to retrieve (0-based indexing)
   * @default null
   */
  pageNumber: number | null;
  /**
   * Page Size
   * @description Number of records per page
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of LABS64_NETLICENSING's LABS64_NETLICENSING_PRODUCT_LIST tool output.
 */
type LABS64_NETLICENSING_PRODUCT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of products
       */
      items: {
          /**
           * Active
           * @description Product state (active/inactive)
           */
          active: boolean;
          /**
           * Description
           * @description Product description
           * @default null
           */
          description: string | null;
          /**
           * Licensing Models
           * @description Licensing models assigned to this product
           * @default null
           */
          licensingModels: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Name
           * @description Product name
           */
          name: string;
          /**
           * Number
           * @description Unique product number
           */
          number: string;
      }[];
      /**
       * PageInfo
       * @description Pagination information for list responses.
       * @default null
       */
      page: {
          /**
           * Number
           * @description Current page number (0-based)
           */
          number: number;
          /**
           * Size
           * @description Records per page
           */
          size: number;
          /**
           * Total Elements
           * @description Total records matching criteria
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
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
 * Type map of all available tool input types for toolkit "LABS64_NETLICENSING".
 */
export type LABS64_NETLICENSING_TOOL_INPUTS = {
  LICENSE_LIST: LABS64_NETLICENSING_LICENSE_LIST_INPUT
  PRODUCT_LIST: LABS64_NETLICENSING_PRODUCT_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LABS64_NETLICENSING".
 */
export type LABS64_NETLICENSING_TOOL_OUTPUTS = {
  LICENSE_LIST: LABS64_NETLICENSING_LICENSE_LIST_OUTPUT
  PRODUCT_LIST: LABS64_NETLICENSING_PRODUCT_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LABS64_NETLICENSING toolkit.
 */
export const LABS64_NETLICENSING = {
  slug: "labs64_netlicensing",
  tools: {
    /**
     * Tool to list all licenses. use when you need to retrieve license records with optional filtering and pagination.
     */
    LICENSE_LIST: "LABS64_NETLICENSING_LICENSE_LIST",
    /**
     * Tool to retrieve a list of all products. use after authenticating with netlicensing.
     */
    PRODUCT_LIST: "LABS64_NETLICENSING_PRODUCT_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LABS64_NETLICENSING".
 */
export type LABS64_NETLICENSING_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LABS64_NETLICENSING".
 */
export type LABS64_NETLICENSING_TRIGGER_EVENTS = {}
