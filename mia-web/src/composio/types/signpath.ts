// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIGNPATH's SIGNPATH_LIST_CERTIFICATES tool input.
 */
type SIGNPATH_LIST_CERTIFICATES_INPUT = {
  /**
   * Organization Id
   * @description The unique identifier of the organization in SignPath.
   */
  organization_id?: string;
};

/**
 * Type of SIGNPATH's SIGNPATH_LIST_CERTIFICATES tool output.
 */
type SIGNPATH_LIST_CERTIFICATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Certificates
       * @description List of certificates.
       */
      certificates: {
          /**
           * Id
           * @description Identifier of the certificate.
           */
          id: string;
          /**
           * Name
           * @description Name of the certificate.
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
 * Type of SIGNPATH's SIGNPATH_LIST_PROJECTS tool input.
 */
type SIGNPATH_LIST_PROJECTS_INPUT = {
  /**
   * Organization Id
   * @description The unique identifier of the organization in SignPath.
   */
  organization_id?: string;
  /**
   * Skip
   * @description Number of items to skip for pagination.
   * @default null
   */
  skip: number | null;
  /**
   * Take
   * @description Number of items to return (max 100).
   * @default null
   */
  take: number | null;
};

/**
 * Type of SIGNPATH's SIGNPATH_LIST_PROJECTS tool output.
 */
type SIGNPATH_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of projects matching the criteria
       */
      count: number;
      /**
       * Value
       * @description Array of project objects
       */
      value: {
          /**
           * Description
           * @description Project description.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Project identifier.
           */
          id: string;
          /**
           * Is Active
           * @description Whether the project is currently active
           */
          isActive: boolean;
          /**
           * Name
           * @description Project name.
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
 * Type of SIGNPATH's SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS tool input.
 */
type SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS_INPUT = object;

/**
 * Type of SIGNPATH's SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS tool output.
 */
type SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signing Policies
       * @description List of signing policies available to the organization.
       */
      signingPolicies: {
          /**
           * Allowed Certificate Types
           * @description List of certificate types allowed by this policy.
           */
          allowedCertificateTypes: string[];
          /**
           * Description
           * @description Optional description of the signing policy.
           * @default null
           */
          description: string | null;
          /**
           * Enabled
           * @description Whether the policy is currently enabled.
           */
          enabled: boolean;
          /**
           * Name
           * @description The name of the signing policy.
           */
          name: string;
          /**
           * Signing Policy Id
           * @description Unique identifier of the signing policy.
           */
          signingPolicyId: string;
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
 * Type of SIGNPATH's SIGNPATH_RETRIEVE_SYSTEM_INFO tool input.
 */
type SIGNPATH_RETRIEVE_SYSTEM_INFO_INPUT = object;

/**
 * Type of SIGNPATH's SIGNPATH_RETRIEVE_SYSTEM_INFO tool output.
 */
type SIGNPATH_RETRIEVE_SYSTEM_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description Supported API version of SignPath
       */
      apiVersion: string;
      /**
       * Environment Id
       * @description Unique identifier for the SignPath environment
       */
      environmentId: string;
      /**
       * Environment Name
       * @description The name of the current SignPath environment (e.g., Production, Sandbox)
       */
      environmentName: string;
      /**
       * Product Name
       * @description The name of the SignPath product (e.g., SignPath.io)
       */
      productName: string;
      /**
       * Product Version
       * @description The current version of the SignPath application
       */
      productVersion: string;
      /**
       * Ui Base Url
       * @description Base URL for the SignPath web UI
       */
      uiBaseUrl: string;
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
 * Type map of all available tool input types for toolkit "SIGNPATH".
 */
export type SIGNPATH_TOOL_INPUTS = {
  LIST_CERTIFICATES: SIGNPATH_LIST_CERTIFICATES_INPUT
  LIST_PROJECTS: SIGNPATH_LIST_PROJECTS_INPUT
  RETRIEVE_SIGNING_POLICY_DETAILS: SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS_INPUT
  RETRIEVE_SYSTEM_INFO: SIGNPATH_RETRIEVE_SYSTEM_INFO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIGNPATH".
 */
export type SIGNPATH_TOOL_OUTPUTS = {
  LIST_CERTIFICATES: SIGNPATH_LIST_CERTIFICATES_OUTPUT
  LIST_PROJECTS: SIGNPATH_LIST_PROJECTS_OUTPUT
  RETRIEVE_SIGNING_POLICY_DETAILS: SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS_OUTPUT
  RETRIEVE_SYSTEM_INFO: SIGNPATH_RETRIEVE_SYSTEM_INFO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIGNPATH toolkit.
 */
export const SIGNPATH = {
  slug: "signpath",
  tools: {
    /**
     * Tool to retrieve the list of certificates for an organization.
     */
    LIST_CERTIFICATES: "SIGNPATH_LIST_CERTIFICATES",
    /**
     * Tool to list all projects for an organization. use after confirming the organization id to retrieve and paginate project records.
     */
    LIST_PROJECTS: "SIGNPATH_LIST_PROJECTS",
    /**
     * Tool to retrieve details about signing policies for the current organization. use when needing to list available signing policies prior to selecting one.
     */
    RETRIEVE_SIGNING_POLICY_DETAILS: "SIGNPATH_RETRIEVE_SIGNING_POLICY_DETAILS",
    /**
     * Tool to retrieve signpath system information including product, api version, environment details, and ui base url. use after authentication to fetch the current system metadata.
     */
    RETRIEVE_SYSTEM_INFO: "SIGNPATH_RETRIEVE_SYSTEM_INFO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIGNPATH".
 */
export type SIGNPATH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIGNPATH".
 */
export type SIGNPATH_TRIGGER_EVENTS = {}
