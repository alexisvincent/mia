// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PAGE_X's PAGE_X_DELETE_INCIDENT tool input.
 */
type PAGE_X_DELETE_INCIDENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the incident to delete.
   */
  id?: number;
};

/**
 * Type of PAGE_X's PAGE_X_DELETE_INCIDENT tool output.
 */
type PAGE_X_DELETE_INCIDENT_OUTPUT = {
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
 * Type of PAGE_X's PAGE_X_GET_INCIDENT tool input.
 */
type PAGE_X_GET_INCIDENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the incident to retrieve
   */
  id?: string;
};

/**
 * Type of PAGE_X's PAGE_X_GET_INCIDENT tool output.
 */
type PAGE_X_GET_INCIDENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the incident was created
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique incident ID
       */
      id: string;
      /**
       * Incident Key
       * @description Key used to deduplicate open incidents
       * @default null
       */
      incident_key: string | null;
      /**
       * Service
       * @description Service details for the incident
       */
      service: {
          /**
           * Id
           * @description Service ID associated with the incident
           */
          id: string;
          /**
           * Name
           * @description Service name
           * @default null
           */
          name: string | null;
      };
      /**
       * Status
       * @description Current status of the incident
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description Incident title or summary
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the incident was last updated
       * @default null
       */
      updated_at: string | null;
      /**
       * Urgency
       * @description Urgency level of the incident
       * @default null
       * @enum {string|null}
       */
      urgency: "high" | "low" | null;
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
 * Type of PAGE_X's PAGE_X_LIST_INCIDENTS tool input.
 */
type PAGE_X_LIST_INCIDENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of incidents to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination
   * @default null
   */
  offset: number | null;
};

/**
 * Type of PAGE_X's PAGE_X_LIST_INCIDENTS tool output.
 */
type PAGE_X_LIST_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Incidents
       * @description List of incident objects
       */
      incidents: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the incident was created
           */
          created_at: string;
          /**
           * Id
           * @description Incident ID
           */
          id: string;
          /**
           * Incident Number
           * @description Sequential incident number
           */
          incident_number: number;
          /**
           * Service
           * @description Service associated with the incident
           */
          service: {
              /**
               * Id
               * @description ID of the service
               */
              id: string;
              /**
               * Summary
               * @description Summary of the service
               */
              summary: string;
              /**
               * Type
               * @description Type of the service reference
               */
              type: string;
          };
          /**
           * Status
           * @description Current status of the incident
           */
          status: string;
          /**
           * Title
           * @description Title or brief description of the incident
           */
          title: string;
      }[];
      /**
       * Limit
       * @description Maximum number of incidents returned in this response
       */
      limit: number;
      /**
       * More
       * @description Whether more incidents are available beyond this page
       */
      more: boolean;
      /**
       * Offset
       * @description Offset value used for pagination
       */
      offset: number;
      /**
       * Total
       * @description Total number of incidents available
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
 * Type of PAGE_X's PAGE_X_PAGEX_CLIENT_REQUEST tool input.
 */
type PAGE_X_PAGEX_CLIENT_REQUEST_INPUT = {
  /**
   * Body
   * @description Optional JSON body to send with the request, if applicable
   * @default null
   */
  body: {
      [key: string]: unknown;
  } | null;
  /**
   * Method
   * @description HTTP method to use for the request
   * @default get
   * @enum {string}
   */
  method: "get" | "post" | "put" | "patch" | "delete";
  /**
   * Query Params
   * @description Optional query string parameters to include in the request
   * @default null
   */
  query_params: {
      [key: string]: unknown;
  } | null;
  /**
   * Resource
   * @description The API resource path relative to the base_url, e.g., 'incidents' or 'v1/users/me'. Leading slash optional
   */
  resource?: string;
};

/**
 * Type of PAGE_X's PAGE_X_PAGEX_CLIENT_REQUEST tool output.
 */
type PAGE_X_PAGEX_CLIENT_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Parsed JSON response from the API
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of PAGE_X's PAGE_X_PAGEX_INCIDENTS_DELETE tool input.
 */
type PAGE_X_PAGEX_INCIDENTS_DELETE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the incident to delete.
   */
  id?: number;
};

/**
 * Type of PAGE_X's PAGE_X_PAGEX_INCIDENTS_DELETE tool output.
 */
type PAGE_X_PAGEX_INCIDENTS_DELETE_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "PAGE_X".
 */
export type PAGE_X_TOOL_INPUTS = {
  DELETE_INCIDENT: PAGE_X_DELETE_INCIDENT_INPUT
  GET_INCIDENT: PAGE_X_GET_INCIDENT_INPUT
  LIST_INCIDENTS: PAGE_X_LIST_INCIDENTS_INPUT
  PAGEX_CLIENT_REQUEST: PAGE_X_PAGEX_CLIENT_REQUEST_INPUT
  PAGEX_INCIDENTS_DELETE: PAGE_X_PAGEX_INCIDENTS_DELETE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PAGE_X".
 */
export type PAGE_X_TOOL_OUTPUTS = {
  DELETE_INCIDENT: PAGE_X_DELETE_INCIDENT_OUTPUT
  GET_INCIDENT: PAGE_X_GET_INCIDENT_OUTPUT
  LIST_INCIDENTS: PAGE_X_LIST_INCIDENTS_OUTPUT
  PAGEX_CLIENT_REQUEST: PAGE_X_PAGEX_CLIENT_REQUEST_OUTPUT
  PAGEX_INCIDENTS_DELETE: PAGE_X_PAGEX_INCIDENTS_DELETE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PAGE_X toolkit.
 */
export const PAGE_X = {
  slug: "page_x",
  tools: {
    /**
     * Tool to delete an incident by id. use after confirming the incident exists. example: delete incident 123.
     */
    DELETE_INCIDENT: "PAGE_X_DELETE_INCIDENT",
    /**
     * Tool to fetch incident details by id. use when you have an incident id and need full incident information. call only after obtaining a valid incident id. example: "retrieve incident 'abc123'"
     */
    GET_INCIDENT: "PAGE_X_GET_INCIDENT",
    /**
     * Tool to list incidents. use when you need to fetch and paginate through incidents.
     */
    LIST_INCIDENTS: "PAGE_X_LIST_INCIDENTS",
    /**
     * Tool to execute a generic request to the pagerduty api. use when you need to call an endpoint not explicitly supported. use after obtaining valid auth metadata. example prompt: "call incidents endpoint: resource='incidents', method='get'"
     */
    PAGEX_CLIENT_REQUEST: "PAGE_X_PAGEX_CLIENT_REQUEST",
    /**
     * Tool to delete an incident by id. use after confirming the incident exists. example: delete incident 123.
     */
    PAGEX_INCIDENTS_DELETE: "PAGE_X_PAGEX_INCIDENTS_DELETE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PAGE_X".
 */
export type PAGE_X_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PAGE_X".
 */
export type PAGE_X_TRIGGER_EVENTS = {}
