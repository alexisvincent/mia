// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDPRESS's CLOUDPRESS_GET_ACCOUNT_INFORMATION tool input.
 */
type CLOUDPRESS_GET_ACCOUNT_INFORMATION_INPUT = object;

/**
 * Type of CLOUDPRESS's CLOUDPRESS_GET_ACCOUNT_INFORMATION tool output.
 */
type CLOUDPRESS_GET_ACCOUNT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name associated with the account.
       * @default null
       */
      company: string | null;
      /**
       * Created At
       * @description ISO8601 timestamp when account was created.
       */
      createdAt: string;
      /**
       * Email
       * @description The account email address.
       */
      email: string;
      /**
       * First Name
       * @description The user's first name.
       */
      firstName: string;
      /**
       * Id
       * @description The unique identifier for the account.
       */
      id: string;
      /**
       * Last Name
       * @description The user's last name.
       */
      lastName: string;
      /**
       * Updated At
       * @description ISO8601 timestamp of last update to the account.
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
 * Type of CLOUDPRESS's CLOUDPRESS_LIST_CONNECTIONS tool input.
 */
type CLOUDPRESS_LIST_CONNECTIONS_INPUT = {
  /**
   * Kind
   * @description The kind of connection to filter by. Cannot be used in conjunction with type.
   * @default null
   * @enum {string|null}
   */
  kind: "source" | "destination" | null;
  /**
   * Page No
   * @description The page of results you would like to return. Starts at 1.
   * @default null
   */
  pageNo: number | null;
  /**
   * Page Size
   * @description The number of items to return per page. Default is 50.
   * @default null
   */
  pageSize: number | null;
  /**
   * Properties
   * @description The connection properties to filter by. Can only be used in conjunction with type.
   * @default null
   */
  properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Source Reference
   * @description An optional source document reference. If provided, lastExport indicates when this document was last exported.
   * @default null
   */
  sourceReference: string | null;
  /**
   * Type
   * @description The type of connection to filter by. Cannot be used in conjunction with kind.
   * @default null
   * @enum {string|null}
   */
  type: "CONTENTFUL" | "KENTICO" | "NOTION" | "SANITY" | "WEBFLOW" | "WORDPRESS" | null;
};

/**
 * Type of CLOUDPRESS's CLOUDPRESS_LIST_CONNECTIONS tool output.
 */
type CLOUDPRESS_LIST_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of connections.
       */
      items: {
          /**
           * Id
           * @description The unique identifier of the connection.
           */
          id: number;
          /**
           * Kind
           * @description The kind of connection.
           * @enum {string}
           */
          kind: "source" | "destination";
          /**
           * Last Export
           * @description Timestamp in ISO8601 when the connection last exported the source.
           */
          lastExport: string;
          /**
           * Name
           * @description The name of the connection.
           */
          name: string;
          /**
           * Service Logo Url
           * @description URL to the service's logo.
           */
          serviceLogoUrl: string;
          /**
           * Type
           * @description The type of the connection.
           */
          type: string;
      }[];
      /**
       * Pagination
       * @description Pagination data.
       */
      pagination: {
          /**
           * Page Count
           * @description Total number of pages.
           */
          pageCount: number;
          /**
           * Page No
           * @description Current page number.
           */
          pageNo: number;
          /**
           * Page Size
           * @description Number of items per page.
           */
          pageSize: number;
          /**
           * Total Record Count
           * @description Total number of records.
           */
          totalRecordCount: number;
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
 * Type of CLOUDPRESS's CLOUDPRESS_LIST_DOCUMENT_EXPORTS tool input.
 */
type CLOUDPRESS_LIST_DOCUMENT_EXPORTS_INPUT = {
  /**
   * Page No
   * @description Page number to return, must be >= 1.
   * @default null
   */
  pageNo: number | null;
  /**
   * Page Size
   * @description Number of items per page, must be >= 1. Defaults to 50.
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of CLOUDPRESS's CLOUDPRESS_LIST_DOCUMENT_EXPORTS tool output.
 */
type CLOUDPRESS_LIST_DOCUMENT_EXPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of document export records.
       */
      items: {
          /** Destination Connection */
          destinationConnection: {
              /**
               * Id
               * @description ID of the destination connection.
               */
              id: number;
              /**
               * Name
               * @description Name of the destination connection.
               */
              name: string;
          };
          /**
           * Destination Reference
           * @description Reference identifier of the destination.
           */
          destinationReference: string;
          /**
           * Exported At
           * @description ISO8601 timestamp when the export occurred.
           */
          exportedAt: string;
          /** Source Connection */
          sourceConnection: {
              /**
               * Id
               * @description ID of the source connection.
               */
              id: number;
              /**
               * Name
               * @description Name of the source connection.
               */
              name: string;
          };
          /**
           * Source Document Kind
           * @description Kind of the source document.
           */
          sourceDocumentKind: string;
          /**
           * Source Document Reference
           * @description Reference identifier of the source document.
           */
          sourceDocumentReference: string;
          /**
           * Source Document Title
           * @description Title of the source document.
           */
          sourceDocumentTitle: string;
          /**
           * Source Document Version
           * @description Version of the source document.
           */
          sourceDocumentVersion: string;
      }[];
      /**
       * Pagination
       * @description Pagination information for the result set.
       */
      pagination: {
          /**
           * Page Count
           * @description Total number of pages available.
           */
          pageCount: number;
          /**
           * Page No
           * @description Current page number.
           */
          pageNo: number;
          /**
           * Page Size
           * @description Number of items per page.
           */
          pageSize: number;
          /**
           * Total Record Count
           * @description Total number of export records.
           */
          totalRecordCount: number;
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
 * Type of CLOUDPRESS's CLOUDPRESS_LIST_WEBHOOKS tool input.
 */
type CLOUDPRESS_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of CLOUDPRESS's CLOUDPRESS_LIST_WEBHOOKS tool output.
 */
type CLOUDPRESS_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook definitions.
       */
      webhooks: {
          /**
           * Active
           * @description Whether the webhook is currently active.
           */
          active: boolean;
          /**
           * Created At
           * @description ISO 8601 timestamp when the webhook was created.
           */
          created_at: string;
          /**
           * Events
           * @description List of event types that trigger this webhook.
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier for the webhook.
           */
          id: string;
          /**
           * Name
           * @description Name of the webhook.
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp of the last update to the webhook.
           */
          updated_at: string;
          /**
           * Url
           * @description Destination URL for webhook payloads.
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "CLOUDPRESS".
 */
export type CLOUDPRESS_TOOL_INPUTS = {
  GET_ACCOUNT_INFORMATION: CLOUDPRESS_GET_ACCOUNT_INFORMATION_INPUT
  LIST_CONNECTIONS: CLOUDPRESS_LIST_CONNECTIONS_INPUT
  LIST_DOCUMENT_EXPORTS: CLOUDPRESS_LIST_DOCUMENT_EXPORTS_INPUT
  LIST_WEBHOOKS: CLOUDPRESS_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDPRESS".
 */
export type CLOUDPRESS_TOOL_OUTPUTS = {
  GET_ACCOUNT_INFORMATION: CLOUDPRESS_GET_ACCOUNT_INFORMATION_OUTPUT
  LIST_CONNECTIONS: CLOUDPRESS_LIST_CONNECTIONS_OUTPUT
  LIST_DOCUMENT_EXPORTS: CLOUDPRESS_LIST_DOCUMENT_EXPORTS_OUTPUT
  LIST_WEBHOOKS: CLOUDPRESS_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDPRESS toolkit.
 */
export const CLOUDPRESS = {
  slug: "cloudpress",
  tools: {
    /**
     * Tool to retrieve authenticated account information. use after authentication to get current account details.
     */
    GET_ACCOUNT_INFORMATION: "CLOUDPRESS_GET_ACCOUNT_INFORMATION",
    /**
     * Tool to list all connections with pagination. use when you need to retrieve cloudpress connections page by page with optional filters like kind, type, or sourcereference.
     */
    LIST_CONNECTIONS: "CLOUDPRESS_LIST_CONNECTIONS",
    /**
     * Tool to retrieve a paginated list of document exports. use after initiating export jobs to fetch export history.
     */
    LIST_DOCUMENT_EXPORTS: "CLOUDPRESS_LIST_DOCUMENT_EXPORTS",
    /**
     * Tool to retrieve a paginated list of webhooks. use when you need an overview of all configured webhooks.
     */
    LIST_WEBHOOKS: "CLOUDPRESS_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDPRESS".
 */
export type CLOUDPRESS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDPRESS".
 */
export type CLOUDPRESS_TRIGGER_EVENTS = {}
