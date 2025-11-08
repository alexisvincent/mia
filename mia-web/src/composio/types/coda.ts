import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CODA's CODA_ADD_A_CATEGORY_FOR_PACK tool input.
 */
type CODA_ADD_A_CATEGORY_FOR_PACK_INPUT = {
  /**
   * Category Name
   * @description Name of the publishing category.
   */
  categoryName?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_ADD_A_CATEGORY_FOR_PACK tool output.
 */
type CODA_ADD_A_CATEGORY_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_ADD_A_MAKER_FOR_PACK tool input.
 */
type CODA_ADD_A_MAKER_FOR_PACK_INPUT = {
  /**
   * Login Id
   * @description The email of the Pack maker.
   */
  loginId?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_ADD_A_MAKER_FOR_PACK tool output.
 */
type CODA_ADD_A_MAKER_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_ADD_A_PERMISSION_FOR_PACK tool input.
 */
type CODA_ADD_A_PERMISSION_FOR_PACK_INPUT = {
  /**
   * Access
   * @description Access
   * @enum {string}
   */
  access?: "view" | "test" | "edit" | "admin";
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Principal
   * @description Metadata about a Pack principal.
   */
  principal?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CODA's CODA_ADD_A_PERMISSION_FOR_PACK tool output.
 */
type CODA_ADD_A_PERMISSION_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_ADD_CUSTOM_DOMAIN tool input.
 */
type CODA_ADD_CUSTOM_DOMAIN_INPUT = {
  /**
   * Custom Doc Domain
   * @description The custom domain.
   */
  customDocDomain?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_ADD_CUSTOM_DOMAIN tool output.
 */
type CODA_ADD_CUSTOM_DOMAIN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_ADD_PERMISSION tool input.
 */
type CODA_ADD_PERMISSION_INPUT = {
  /**
   * Access
   * @description Type of access (excluding none).
   * @enum {string}
   */
  access?: "readonly" | "write" | "comment";
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Principal
   * @description Metadata about a principal to add to a doc.
   */
  principal?: {
      [key: string]: unknown;
  };
  /**
   * Suppress Email
   * @description When true suppresses email notification
   */
  suppressEmail?: boolean;
};

/**
 * Type of CODA's CODA_ADD_PERMISSION tool output.
 */
type CODA_ADD_PERMISSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_BEGIN_CONTENT_EXPORT tool input.
 */
type CODA_BEGIN_CONTENT_EXPORT_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Output Format
   * @description Supported output content formats that can be requested for getting content for an existing page.
   * @enum {string}
   */
  outputFormat?: "html" | "markdown";
  /**
   * Page Id Or Name
   * @description ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.
   */
  pageIdOrName?: string;
};

/**
 * Type of CODA's CODA_BEGIN_CONTENT_EXPORT tool output.
 */
type CODA_BEGIN_CONTENT_EXPORT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_CONTENT_EXPORT_STATUS tool input.
 */
type CODA_CONTENT_EXPORT_STATUS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Page Id Or Name
   * @description ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.
   */
  pageIdOrName?: string;
  /**
   * Request Id
   * @description ID of the request.
   */
  requestId?: string;
};

/**
 * Type of CODA's CODA_CONTENT_EXPORT_STATUS tool output.
 */
type CODA_CONTENT_EXPORT_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_COPY_DOC tool input.
 */
type CODA_COPY_DOC_INPUT = {
  /**
   * Folder Id
   * @description The ID of the folder where the new document will be created. If not specified, defaults to your 'My docs' folder.
   * @default null
   */
  folder_id: string | null;
  /**
   * Source Doc Id
   * @description ID of the existing document to copy.
   */
  source_doc_id?: string;
  /**
   * Timezone
   * @description The timezone to use for the newly created document.
   * @default null
   */
  timezone: string | null;
  /**
   * Title
   * @description Title for the new document. If not specified, defaults to 'Untitled'.
   * @default null
   */
  title: string | null;
};

/**
 * Type of CODA's CODA_COPY_DOC tool output.
 */
type CODA_COPY_DOC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created By
       * @description Email address of the document owner.
       */
      createdBy: string;
      /**
       * Folder Id
       * @description ID of the folder containing the document.
       * @default null
       */
      folderId: string | null;
      /**
       * Href
       * @description Browser-friendly link to access the copied document.
       */
      href: string;
      /**
       * Id
       * @description ID of the newly created document.
       */
      id: string;
      /**
       * Name
       * @description Name/title of the copied document.
       */
      name: string;
      /**
       * Workspace Id
       * @description ID of the workspace containing the document.
       */
      workspaceId: string;
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
 * Type of CODA's CODA_CREATE_A_NEW_PACK_RELEASE tool input.
 */
type CODA_CREATE_A_NEW_PACK_RELEASE_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Version
   * @description Which semantic pack version that the release will be created on.
   */
  packVersion?: string;
  /**
   * Release Notes
   * @description Developers notes.
   */
  releaseNotes?: string;
};

/**
 * Type of CODA's CODA_CREATE_A_NEW_PACK_RELEASE tool output.
 */
type CODA_CREATE_A_NEW_PACK_RELEASE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_CREATE_A_PAGE tool input.
 */
type CODA_CREATE_A_PAGE_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Icon Name
   * @description Name of the icon.
   */
  iconName?: string;
  /**
   * Image Url
   * @description Url of the cover image to use.
   */
  imageUrl?: string;
  /**
   * Name
   * @description Name of the page.
   */
  name?: string;
  /**
   * Page Content
   * @description Content that can be added to a page at creation time, either text (or rich text) or a URL to create a full-page embed.
   */
  pageContent?: {
      [key: string]: unknown;
  };
  /**
   * Parent Page Id
   * @description The ID of this new page"s parent, if creating a subpage.
   */
  parentPageId?: string;
  /**
   * Subtitle
   * @description Subtitle of the page.
   */
  subtitle?: string;
};

/**
 * Type of CODA's CODA_CREATE_A_PAGE tool output.
 */
type CODA_CREATE_A_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_CREATE_DOC tool input.
 */
type CODA_CREATE_DOC_INPUT = {
  /**
   * Folder Id
   * @description The ID of the folder within which to create this doc. Defaults to your "My docs" folder in the oldest workspace you joined; this is subject to change. You can get this ID by opening the folder in the docs list on your computer and grabbing the `folderId` query parameter.
   */
  folderId?: string;
  /**
   * Source Doc
   * @description An optional doc ID from which to create a copy.
   */
  sourceDoc?: string;
  /**
   * Timezone
   * @description The timezone to use for the newly created doc.
   */
  timezone?: string;
  /**
   * Title
   * @description Title of the new doc. Defaults to "Untitled".
   */
  title?: string;
};

/**
 * Type of CODA's CODA_CREATE_DOC tool output.
 */
type CODA_CREATE_DOC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_CREATE_PACK tool input.
 */
type CODA_CREATE_PACK_INPUT = {
  /**
   * Description
   * @description A brief description of the Pack.
   */
  description?: string;
  /**
   * Name
   * @description The name for the Pack.
   */
  name?: string;
  /**
   * Source Pack Id
   * @description The ID of the new Pack"s source, if this new Pack was forked.
   */
  sourcePackId?: number;
  /**
   * Workspace Id
   * @description The parent workspace for the Pack. If unspecified, the user"s default workspace will be used.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_CREATE_PACK tool output.
 */
type CODA_CREATE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETES_A_CUSTOM_DOMAIN tool input.
 */
type CODA_DELETES_A_CUSTOM_DOMAIN_INPUT = {
  /**
   * Custom Doc Domain
   * @description A custom domain for a published doc.
   */
  customDocDomain?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_DELETES_A_CUSTOM_DOMAIN tool output.
 */
type CODA_DELETES_A_CUSTOM_DOMAIN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_A_CATEGORY_FOR_PACK tool input.
 */
type CODA_DELETE_A_CATEGORY_FOR_PACK_INPUT = {
  /**
   * Category Name
   * @description Name of a publishing category
   */
  categoryName?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_DELETE_A_CATEGORY_FOR_PACK tool output.
 */
type CODA_DELETE_A_CATEGORY_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_A_MAKER_FOR_PACK tool input.
 */
type CODA_DELETE_A_MAKER_FOR_PACK_INPUT = {
  /**
   * Login Id
   * @description Email of a Coda user.
   */
  loginId?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_DELETE_A_MAKER_FOR_PACK tool output.
 */
type CODA_DELETE_A_MAKER_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_A_PAGE tool input.
 */
type CODA_DELETE_A_PAGE_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Page Id Or Name
   * @description ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.
   */
  pageIdOrName?: string;
};

/**
 * Type of CODA's CODA_DELETE_A_PAGE tool output.
 */
type CODA_DELETE_A_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_A_PERMISSION_FOR_PACK tool input.
 */
type CODA_DELETE_A_PERMISSION_FOR_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Permission Id
   * @description ID of a permission on a doc.
   */
  permissionId?: string;
};

/**
 * Type of CODA's CODA_DELETE_A_PERMISSION_FOR_PACK tool output.
 */
type CODA_DELETE_A_PERMISSION_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_DOC tool input.
 */
type CODA_DELETE_DOC_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_DELETE_DOC tool output.
 */
type CODA_DELETE_DOC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_MULTIPLE_ROWS tool input.
 */
type CODA_DELETE_MULTIPLE_ROWS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Row Ids
   * @description Row IDs to delete.
   */
  rowIds?: string[];
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
};

/**
 * Type of CODA's CODA_DELETE_MULTIPLE_ROWS tool output.
 */
type CODA_DELETE_MULTIPLE_ROWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_PACK tool input.
 */
type CODA_DELETE_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_DELETE_PACK tool output.
 */
type CODA_DELETE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_PERMISSION tool input.
 */
type CODA_DELETE_PERMISSION_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Permission Id
   * @description ID of a permission on a doc.
   */
  permissionId?: string;
};

/**
 * Type of CODA's CODA_DELETE_PERMISSION tool output.
 */
type CODA_DELETE_PERMISSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_DELETE_ROW tool input.
 */
type CODA_DELETE_ROW_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Row Id Or Name
   * @description ID or name of the row. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.
   */
  rowIdOrName?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
};

/**
 * Type of CODA's CODA_DELETE_ROW tool output.
 */
type CODA_DELETE_ROW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID tool input.
 */
type CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID_INPUT = {
  /**
   * After Timestamp
   * @description Only return logs after the given time (non-inclusive).
   */
  afterTimestamp?: string;
  /**
   * Before Timestamp
   * @description Only return logs before the given time (non-inclusive).
   */
  beforeTimestamp?: string;
  /**
   * Ingestion Execution Id
   * @description ID of the ingestion execution.
   */
  ingestionExecutionId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Order
   * @description Specifies if the logs will be returned in time desc or asc. Default is desc.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Organization Id
   * @description ID of the organization.
   */
  organizationId?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Q
   * @description A search query that follows Lucene syntax.
   */
  q?: string;
  /**
   * Root Ingestion Id
   * @description ID of the root ingestion.
   */
  rootIngestionId?: string;
};

/**
 * Type of CODA's CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID tool output.
 */
type CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK tool input.
 */
type CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK_INPUT = {
  /**
   * After Timestamp
   * @description Only return logs after the given time (non-inclusive).
   */
  afterTimestamp?: string;
  /**
   * Before Timestamp
   * @description Only return logs before the given time (non-inclusive).
   */
  beforeTimestamp?: string;
  /**
   * Csb Ingestion Execution Id
   * @description Ingestion execution id of the ingestion execution to filter to
   */
  csbIngestionExecutionId?: string;
  /**
   * Csb Ingestion Id
   * @description Ingestion id of the ingestion execution to filter to
   */
  csbIngestionId?: string;
  /**
   * Datasource
   * @description Datasource of the ingestion execution to filter to
   */
  datasource?: string;
  /**
   * Execution Type
   * @description Execution type of the ingestion execution to filter to
   * @enum {string}
   */
  executionType?: "FULL" | "INCREMENTAL";
  /**
   * Include Deleted Ingestions
   * @description Include deleted ingestion executions in the response
   */
  includeDeletedIngestions?: boolean;
  /**
   * Ingestion Status
   * @description Status of the ingestion execution to filter to
   * @enum {string}
   */
  ingestionStatus?: "QUEUED" | "STARTED" | "CANCELLED" | "UP_FOR_RETRY" | "COMPLETED" | "FAILED";
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Order
   * @description Specifies if the logs will be returned in time desc or asc. Default is desc.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Organization Id
   * @description ID of the organization.
   */
  organizationId?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Root Ingestion Id
   * @description ID of the root ingestion.
   */
  rootIngestionId?: string;
};

/**
 * Type of CODA's CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK tool output.
 */
type CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS tool input.
 */
type CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS_INPUT = {
  /**
   * Custom Doc Domain
   * @description A custom domain for a published doc.
   */
  customDocDomain?: string;
};

/**
 * Type of CODA's CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS tool output.
 */
type CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION tool input.
 */
type CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION tool output.
 */
type CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_ACL_SETTINGS tool input.
 */
type CODA_GET_ACL_SETTINGS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_GET_ACL_SETTINGS tool output.
 */
type CODA_GET_ACL_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_ANALYTICS_LAST_UPDATED_DAY tool input.
 */
type CODA_GET_ANALYTICS_LAST_UPDATED_DAY_INPUT = object;

/**
 * Type of CODA's CODA_GET_ANALYTICS_LAST_UPDATED_DAY tool output.
 */
type CODA_GET_ANALYTICS_LAST_UPDATED_DAY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_COLUMN tool input.
 */
type CODA_GET_A_COLUMN_INPUT = {
  /**
   * Column Id Or Name
   * @description ID or name of the column. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  columnIdOrName?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
};

/**
 * Type of CODA's CODA_GET_A_COLUMN tool output.
 */
type CODA_GET_A_COLUMN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_CONTROL tool input.
 */
type CODA_GET_A_CONTROL_INPUT = {
  /**
   * Control Id Or Name
   * @description ID or name of the control. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  controlIdOrName?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_GET_A_CONTROL tool output.
 */
type CODA_GET_A_CONTROL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_FORMULA tool input.
 */
type CODA_GET_A_FORMULA_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Formula Id Or Name
   * @description ID or name of the formula. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  formulaIdOrName?: string;
};

/**
 * Type of CODA's CODA_GET_A_FORMULA tool output.
 */
type CODA_GET_A_FORMULA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_PAGE tool input.
 */
type CODA_GET_A_PAGE_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Page Id Or Name
   * @description ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.
   */
  pageIdOrName?: string;
};

/**
 * Type of CODA's CODA_GET_A_PAGE tool output.
 */
type CODA_GET_A_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_ROW tool input.
 */
type CODA_GET_A_ROW_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Row Id Or Name
   * @description ID or name of the row. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.
   */
  rowIdOrName?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
  /**
   * Use Column Names
   * @description Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.
   */
  useColumnNames?: boolean;
  /**
   * Value Format
   * @description The format that cell values are returned as.
   * @enum {string}
   */
  valueFormat?: "simple" | "simpleWithArrays" | "rich";
};

/**
 * Type of CODA's CODA_GET_A_ROW tool output.
 */
type CODA_GET_A_ROW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_SINGLE_PACK tool input.
 */
type CODA_GET_A_SINGLE_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_GET_A_SINGLE_PACK tool output.
 */
type CODA_GET_A_SINGLE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_A_TABLE tool input.
 */
type CODA_GET_A_TABLE_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
  /**
   * Use Updated Table Layouts
   * @description Return "detail" and "form" for the `layout` field of detail and form layouts respectively (instead of "masterDetail" for both)
   */
  useUpdatedTableLayouts?: boolean;
};

/**
 * Type of CODA's CODA_GET_A_TABLE tool output.
 */
type CODA_GET_A_TABLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK tool input.
 */
type CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK_INPUT = {
  /**
   * Doc Id
   * @description ID of the target document for checking installation privileges
   */
  docId?: string;
  /**
   * Install Context
   * @description Type of installation context for which Pack information is being requested.
   * @enum {string}
   */
  installContext?: "workspace" | "doc";
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Release Channel
   * @description Release channel for which Pack information is being requested.
   * @enum {string}
   */
  releaseChannel?: "LIVE" | "LATEST";
  /**
   * Workspace Id
   * @description ID of the target workspace (if applicable) for checking installation privileges.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK tool output.
 */
type CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_DOC_ANALYTICS_SUMMARY tool input.
 */
type CODA_GET_DOC_ANALYTICS_SUMMARY_INPUT = {
  /**
   * Is Published
   * @description Limit results to only published items.
   */
  isPublished?: boolean;
  /**
   * Since Date
   * @description Limit results to activity on or after this date.
   */
  sinceDate?: string;
  /**
   * Until Date
   * @description Limit results to activity on or before this date.
   */
  untilDate?: string;
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_GET_DOC_ANALYTICS_SUMMARY tool output.
 */
type CODA_GET_DOC_ANALYTICS_SUMMARY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_DOC_CATEGORIES tool input.
 */
type CODA_GET_DOC_CATEGORIES_INPUT = object;

/**
 * Type of CODA's CODA_GET_DOC_CATEGORIES tool output.
 */
type CODA_GET_DOC_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_INFO_ABOUT_A_DOC tool input.
 */
type CODA_GET_INFO_ABOUT_A_DOC_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_GET_INFO_ABOUT_A_DOC tool output.
 */
type CODA_GET_INFO_ABOUT_A_DOC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_MUTATION_STATUS tool input.
 */
type CODA_GET_MUTATION_STATUS_INPUT = {
  /**
   * Request Id
   * @description ID of the request.
   */
  requestId?: string;
};

/**
 * Type of CODA's CODA_GET_MUTATION_STATUS tool output.
 */
type CODA_GET_MUTATION_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_PACK_ANALYTICS_SUMMARY tool input.
 */
type CODA_GET_PACK_ANALYTICS_SUMMARY_INPUT = {
  /**
   * Is Published
   * @description Limit results to only published items. If false or unspecified, returns all items including published ones.
   */
  isPublished?: boolean;
  /**
   * Pack Ids
   * @description Which Pack IDs to fetch.
   */
  packIds?: number[];
  /**
   * Since Date
   * @description Limit results to activity on or after this date.
   */
  sinceDate?: string;
  /**
   * Until Date
   * @description Limit results to activity on or before this date.
   */
  untilDate?: string;
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_GET_PACK_ANALYTICS_SUMMARY tool output.
 */
type CODA_GET_PACK_ANALYTICS_SUMMARY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_SHARING_METADATA tool input.
 */
type CODA_GET_SHARING_METADATA_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_GET_SHARING_METADATA tool output.
 */
type CODA_GET_SHARING_METADATA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS tool input.
 */
type CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS_INPUT = {
  /**
   * Base Pack Version
   * @description Semantic version of the previous Pack version.
   */
  basePackVersion?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Target Pack Version
   * @description Semantic version of the new Pack version.
   */
  targetPackVersion?: string;
};

/**
 * Type of CODA's CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS tool output.
 */
type CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK tool input.
 */
type CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Proposed Metadata
   * @description The metadata for the next version of the Pack.
   */
  proposedMetadata?: string;
  /**
   * Sdk Version
   * @description The SDK version the metadata was built on.
   */
  sdkVersion?: string;
};

/**
 * Type of CODA's CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK tool output.
 */
type CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION tool input.
 */
type CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Version
   * @description Semantic version of a Pack
   */
  packVersion?: string;
};

/**
 * Type of CODA's CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION tool output.
 */
type CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_GET_USER_INFO tool input.
 */
type CODA_GET_USER_INFO_INPUT = object;

/**
 * Type of CODA's CODA_GET_USER_INFO tool output.
 */
type CODA_GET_USER_INFO_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_AVAILABLE_DOCS tool input.
 */
type CODA_LIST_AVAILABLE_DOCS_INPUT = {
  /**
   * Folder Id
   * @description Show only docs belonging to the given folder.
   */
  folderId?: string;
  /**
   * In Gallery
   * @description Show only docs visible within the gallery.
   */
  inGallery?: boolean;
  /**
   * Is Owner
   * @description Show only docs owned by the user.
   */
  isOwner?: boolean;
  /**
   * Is Published
   * @description Show only published docs.
   */
  isPublished?: boolean;
  /**
   * Is Starred
   * @description If true, returns docs that are starred. If false, returns docs that are not starred.
   */
  isStarred?: boolean;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Query
   * @description Search term used to filter down results.
   */
  query?: string;
  /**
   * Source Doc
   * @description Show only docs copied from the specified doc ID.
   */
  sourceDoc?: string;
  /**
   * Workspace Id
   * @description Show only docs belonging to the given workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_LIST_AVAILABLE_DOCS tool output.
 */
type CODA_LIST_AVAILABLE_DOCS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_CATEGORIES_FOR_PACK tool input.
 */
type CODA_LIST_CATEGORIES_FOR_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_LIST_CATEGORIES_FOR_PACK tool output.
 */
type CODA_LIST_CATEGORIES_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_COLUMNS tool input.
 */
type CODA_LIST_COLUMNS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
  /**
   * Visible Only
   * @description If true, returns only visible columns for the table. This parameter only applies to base tables, and not views.
   */
  visibleOnly?: boolean;
};

/**
 * Type of CODA's CODA_LIST_COLUMNS tool output.
 */
type CODA_LIST_COLUMNS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_CONTROLS tool input.
 */
type CODA_LIST_CONTROLS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Sort By
   * @description Determines how to sort the given objects.
   * @enum {string}
   */
  sortBy?: "name";
};

/**
 * Type of CODA's CODA_LIST_CONTROLS tool output.
 */
type CODA_LIST_CONTROLS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_CUSTOM_DOC_DOMAINS tool input.
 */
type CODA_LIST_CUSTOM_DOC_DOMAINS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_LIST_CUSTOM_DOC_DOMAINS tool output.
 */
type CODA_LIST_CUSTOM_DOC_DOMAINS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_DOC_ANALYTICS tool input.
 */
type CODA_LIST_DOC_ANALYTICS_INPUT = {
  /**
   * Direction
   * @description Direction to sort results in.
   * @enum {string}
   */
  direction?: "ascending" | "descending";
  /**
   * Doc Ids
   * @description List of docIds to fetch.
   */
  docIds?: string[];
  /**
   * Is Published
   * @description Limit results to only published items.
   */
  isPublished?: boolean;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 1000
   */
  limit: number;
  /**
   * Order By
   * @description Use this parameter to order the doc analytics returned.
   * @enum {string}
   */
  orderBy?: "date" | "docId" | "title" | "createdAt" | "publishedAt" | "likes" | "copies" | "views" | "sessionsDesktop" | "sessionsMobile" | "sessionsOther" | "totalSessions" | "aiCreditsChat" | "aiCreditsBlock" | "aiCreditsColumn" | "aiCreditsAssistant" | "aiCreditsReviewer" | "aiCredits";
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Query
   * @description Search term used to filter down results.
   */
  query?: string;
  /**
   * Scale
   * @description Quantization period over which to view analytics. Defaults to daily.
   * @enum {string}
   */
  scale?: "daily" | "cumulative";
  /**
   * Since Date
   * @description Limit results to activity on or after this date.
   */
  sinceDate?: string;
  /**
   * Until Date
   * @description Limit results to activity on or before this date.
   */
  untilDate?: string;
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_LIST_DOC_ANALYTICS tool output.
 */
type CODA_LIST_DOC_ANALYTICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_FEATURED_DOCS_FOR_A_PACK tool input.
 */
type CODA_LIST_FEATURED_DOCS_FOR_A_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_LIST_FEATURED_DOCS_FOR_A_PACK tool output.
 */
type CODA_LIST_FEATURED_DOCS_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_FORMULAS tool input.
 */
type CODA_LIST_FORMULAS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Sort By
   * @description Determines how to sort the given objects.
   * @enum {string}
   */
  sortBy?: "name";
};

/**
 * Type of CODA's CODA_LIST_FORMULAS tool output.
 */
type CODA_LIST_FORMULAS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_MAKERS_FOR_PACK tool input.
 */
type CODA_LIST_MAKERS_FOR_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_LIST_MAKERS_FOR_PACK tool output.
 */
type CODA_LIST_MAKERS_FOR_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PACKS tool input.
 */
type CODA_LIST_PACKS_INPUT = {
  /**
   * Access Type
   * @description Deprecated, use accessTypes instead. Filter to only return the Packs for which the current user has this access type
   * @enum {string}
   */
  accessType?: "view" | "test" | "edit" | "admin";
  /**
   * Access Types
   * @description Filter to only return the Packs for which the current user has these access types.
   */
  accessTypes?: string[];
  /**
   * Direction
   * @description Direction to sort results in.
   * @enum {string}
   */
  direction?: "ascending" | "descending";
  /**
   * Exclude Individual Acls
   * @description Do not include Packs that are only shared with the user individually.
   */
  excludeIndividualAcls?: boolean;
  /**
   * Exclude Public Packs
   * @description Only get Packs shared with users/workspaces, not publicly.
   */
  excludePublicPacks?: boolean;
  /**
   * Exclude Workspace Acls
   * @description Do not include Packs that are only shared with workspaces.
   */
  excludeWorkspaceAcls?: boolean;
  /**
   * Include Brain Only Packs
   * @description Include Packs that only support Coda Brain.
   */
  includeBrainOnlyPacks?: boolean;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Only Workspace Id
   * @description Use only this workspace (not all of a user"s workspaces) to check for Packs shared via workspace ACL.
   */
  onlyWorkspaceId?: string;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Parent Workspace Ids
   * @description Filter to only Packs whose parent workspace is one of the given IDs.
   */
  parentWorkspaceIds?: string[];
  /**
   * Sort By
   * @description The sort order of the Packs returned.
   * @enum {string}
   */
  sortBy?: "title" | "createdAt" | "updatedAt";
};

/**
 * Type of CODA's CODA_LIST_PACKS tool output.
 */
type CODA_LIST_PACKS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PACK_ANALYTICS tool input.
 */
type CODA_LIST_PACK_ANALYTICS_INPUT = {
  /**
   * Direction
   * @description Direction to sort results in.
   * @enum {string}
   */
  direction?: "ascending" | "descending";
  /**
   * Is Published
   * @description Limit results to only published items. If false or unspecified, returns all items including published ones.
   */
  isPublished?: boolean;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 1000
   */
  limit: number;
  /**
   * Order By
   * @description Use this parameter to order the Pack analytics returned.
   * @enum {string}
   */
  orderBy?: "date" | "packId" | "name" | "createdAt" | "docInstalls" | "workspaceInstalls" | "numFormulaInvocations" | "numActionInvocations" | "numSyncInvocations" | "numMetadataInvocations" | "docsActivelyUsing" | "docsActivelyUsing7Day" | "docsActivelyUsing30Day" | "docsActivelyUsing90Day" | "docsActivelyUsingAllTime" | "workspacesActivelyUsing" | "workspacesActivelyUsing7Day" | "workspacesActivelyUsing30Day" | "workspacesActivelyUsing90Day" | "workspacesActivelyUsingAllTime" | "workspacesWithActiveSubscriptions" | "workspacesWithSuccessfulTrials" | "revenueUsd";
  /**
   * Pack Ids
   * @description Which Pack IDs to fetch.
   */
  packIds?: number[];
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Query
   * @description Search term used to filter down results.
   */
  query?: string;
  /**
   * Scale
   * @description Quantization period over which to view analytics. Defaults to daily.
   * @enum {string}
   */
  scale?: "daily" | "cumulative";
  /**
   * Since Date
   * @description Limit results to activity on or after this date.
   */
  sinceDate?: string;
  /**
   * Until Date
   * @description Limit results to activity on or before this date.
   */
  untilDate?: string;
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_LIST_PACK_ANALYTICS tool output.
 */
type CODA_LIST_PACK_ANALYTICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PACK_FORMULA_ANALYTICS tool input.
 */
type CODA_LIST_PACK_FORMULA_ANALYTICS_INPUT = {
  /**
   * Direction
   * @description Direction to sort results in.
   * @enum {string}
   */
  direction?: "ascending" | "descending";
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 1000
   */
  limit: number;
  /**
   * Order By
   * @description Use this parameter to order the Pack formula analytics returned.
   * @enum {string}
   */
  orderBy?: "date" | "formulaName" | "formulaType" | "formulaInvocations" | "medianLatencyMs" | "medianResponseSizeBytes" | "errors" | "docsActivelyUsing" | "docsActivelyUsing7Day" | "docsActivelyUsing30Day" | "docsActivelyUsing90Day" | "docsActivelyUsingAllTime" | "workspacesActivelyUsing" | "workspacesActivelyUsing7Day" | "workspacesActivelyUsing30Day" | "workspacesActivelyUsing90Day" | "workspacesActivelyUsingAllTime";
  /**
   * Pack Formula Names
   * @description A list of Pack formula names (case-sensitive) for which to retrieve analytics.
   */
  packFormulaNames?: string[];
  /**
   * Pack Formula Types
   * @description A list of Pack formula types corresponding to the `packFormulaNames`. If specified, this must have the same length as `packFormulaNames`.
   */
  packFormulaTypes?: string[];
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Scale
   * @description Quantization period over which to view analytics. Defaults to daily.
   * @enum {string}
   */
  scale?: "daily" | "cumulative";
  /**
   * Since Date
   * @description Limit results to activity on or after this date.
   */
  sinceDate?: string;
  /**
   * Until Date
   * @description Limit results to activity on or before this date.
   */
  untilDate?: string;
};

/**
 * Type of CODA's CODA_LIST_PACK_FORMULA_ANALYTICS tool output.
 */
type CODA_LIST_PACK_FORMULA_ANALYTICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PAGES tool input.
 */
type CODA_LIST_PAGES_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
};

/**
 * Type of CODA's CODA_LIST_PAGES tool output.
 */
type CODA_LIST_PAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PAGE_ANALYTICS tool input.
 */
type CODA_LIST_PAGE_ANALYTICS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 1000
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Since Date
   * @description Limit results to activity on or after this date.
   */
  sinceDate?: string;
  /**
   * Until Date
   * @description Limit results to activity on or before this date.
   */
  untilDate?: string;
};

/**
 * Type of CODA's CODA_LIST_PAGE_ANALYTICS tool output.
 */
type CODA_LIST_PAGE_ANALYTICS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PERMISSIONS tool input.
 */
type CODA_LIST_PERMISSIONS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
};

/**
 * Type of CODA's CODA_LIST_PERMISSIONS tool output.
 */
type CODA_LIST_PERMISSIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_PERMISSIONS_FOR_A_PACK tool input.
 */
type CODA_LIST_PERMISSIONS_FOR_A_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_LIST_PERMISSIONS_FOR_A_PACK tool output.
 */
type CODA_LIST_PERMISSIONS_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_TABLES tool input.
 */
type CODA_LIST_TABLES_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Sort By
   * @description Determines how to sort the given objects.
   * @enum {string}
   */
  sortBy?: "name";
  /**
   * Table Types
   * @description Comma-separated list of table types to include in results. If omitted, includes both tables and views.
   */
  tableTypes?: string[];
};

/**
 * Type of CODA's CODA_LIST_TABLES tool output.
 */
type CODA_LIST_TABLES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_TABLE_ROWS tool input.
 */
type CODA_LIST_TABLE_ROWS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Query
   * @description Query used to filter returned rows, specified as `<column_id_or_name>:<value>`. If you"d like to use a column name instead of an ID, you must quote it (e.g., `"My Column":123`). Also note that `value` is a JSON value; if you"d like to use a string, you must surround it in quotes (e.g., `"groceries"`).
   */
  query?: string;
  /**
   * Sort By
   * @description Specifies the sort order of the rows returned. If left unspecified, rows are returned by creation time ascending. "UpdatedAt" sort ordering is the order of rows based upon when they were last updated. This does not include updates to calculated values. "Natural" sort ordering is the order that the rows appear in the table view in the application. This ordering is only meaningfully defined for rows that are visible (unfiltered). Because of this, using this sort order will imply visibleOnly=true, that is, to only return visible rows. If you pass sortBy=natural and visibleOnly=false explicitly, this will result in a Bad Request error as this condition cannot be satisfied.
   * @enum {string}
   */
  sortBy?: "createdAt" | "natural" | "updatedAt";
  /**
   * Sync Token
   * @description An opaque token returned from a previous call that can be used to return results that are relevant to the query since the call where the syncToken was generated.
   */
  syncToken?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
  /**
   * Use Column Names
   * @description Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.
   */
  useColumnNames?: boolean;
  /**
   * Value Format
   * @description The format that cell values are returned as.
   * @enum {string}
   */
  valueFormat?: "simple" | "simpleWithArrays" | "rich";
  /**
   * Visible Only
   * @description If true, returns only visible rows and columns for the table.
   */
  visibleOnly?: boolean;
};

/**
 * Type of CODA's CODA_LIST_TABLE_ROWS tool output.
 */
type CODA_LIST_TABLE_ROWS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER tool input.
 */
type CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER_INPUT = {
  /**
   * Direction
   * @description Direction to sort results in.
   * @enum {string}
   */
  direction?: "ascending" | "descending";
  /**
   * Exclude Individual Acls
   * @description Do not include Packs that are only shared with the user individually.
   */
  excludeIndividualAcls?: boolean;
  /**
   * Exclude Public Packs
   * @description Only get Packs shared with users/workspaces, not publicly.
   */
  excludePublicPacks?: boolean;
  /**
   * Exclude Workspace Acls
   * @description Do not include Packs that are only shared with workspaces.
   */
  excludeWorkspaceAcls?: boolean;
  /**
   * Include Brain Only Packs
   * @description Include Packs that only support Coda Brain.
   */
  includeBrainOnlyPacks?: boolean;
  /**
   * Install Context
   * @description Type of installation context for which Pack information is being requested.
   * @enum {string}
   */
  installContext?: "workspace" | "doc";
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 5
   */
  limit: number;
  /**
   * Only Workspace Id
   * @description Use only this workspace (not all of a user"s workspaces) to check for Packs shared via workspace ACL.
   */
  onlyWorkspaceId?: string;
  /**
   * Order By
   * @description Deprecated: use sortBy instead.
   * @enum {string}
   */
  orderBy?: "packId" | "name" | "packVersion" | "packVersionModifiedAt";
  /**
   * Pack Access Types
   * @description Pack access types.
   */
  packAccessTypes?: string[];
  /**
   * Pack Ids
   * @description Which Pack IDs to fetch.
   */
  packIds?: number[];
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Parent Workspace Ids
   * @description Filter to only Packs whose parent workspace is one of the given IDs.
   */
  parentWorkspaceIds?: string[];
  /**
   * Sort By
   * @description Specify a sort order for the returned Pack listings returned.
   * @enum {string}
   */
  sortBy?: "packId" | "name" | "packVersion" | "packVersionModifiedAt";
};

/**
 * Type of CODA's CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER tool output.
 */
type CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_THE_RELEASES_FOR_A_PACK tool input.
 */
type CODA_LIST_THE_RELEASES_FOR_A_PACK_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
};

/**
 * Type of CODA's CODA_LIST_THE_RELEASES_FOR_A_PACK tool output.
 */
type CODA_LIST_THE_RELEASES_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_THE_VERSIONS_FOR_A_PACK tool input.
 */
type CODA_LIST_THE_VERSIONS_FOR_A_PACK_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
};

/**
 * Type of CODA's CODA_LIST_THE_VERSIONS_FOR_A_PACK tool output.
 */
type CODA_LIST_THE_VERSIONS_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_WORKSPACE_ROLES tool input.
 */
type CODA_LIST_WORKSPACE_ROLES_INPUT = {
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_LIST_WORKSPACE_ROLES tool output.
 */
type CODA_LIST_WORKSPACE_ROLES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_LIST_WORKSPACE_USERS tool input.
 */
type CODA_LIST_WORKSPACE_USERS_INPUT = {
  /**
   * Included Roles
   * @description Show only the members that match the included roles. Multiple roles can be specified with a comma-delimited list.
   */
  includedRoles?: string[];
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_LIST_WORKSPACE_USERS tool output.
 */
type CODA_LIST_WORKSPACE_USERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_PACK_ASSET_UPLOAD_COMPLETE tool input.
 */
type CODA_PACK_ASSET_UPLOAD_COMPLETE_INPUT = {
  /**
   * Pack Asset Id
   * @description Unique identifier for a Pack asset.
   */
  packAssetId?: string;
  /**
   * Pack Asset Type
   * @description Pack asset type.
   * @enum {string}
   */
  packAssetType?: "logo" | "cover" | "exampleImage";
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_PACK_ASSET_UPLOAD_COMPLETE tool output.
 */
type CODA_PACK_ASSET_UPLOAD_COMPLETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE tool input.
 */
type CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE_INPUT = {
  /**
   * Code Hash
   * @description A SHA-256 hash of the source code used to identify duplicate uploads.
   */
  codeHash?: string;
  /**
   * Filename
   * @description Filename
   */
  filename?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Version
   * @description Semantic version of a Pack
   */
  packVersion?: string;
};

/**
 * Type of CODA's CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE tool output.
 */
type CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_PACK_VERSION_UPLOAD_COMPLETE tool input.
 */
type CODA_PACK_VERSION_UPLOAD_COMPLETE_INPUT = {
  /**
   * Allow Older Sdk Version
   * @description Bypass Coda"s protection against SDK version regression when multiple makers build versions.
   */
  allowOlderSdkVersion?: boolean;
  /**
   * Notes
   * @description Developer notes of the new Pack version.
   */
  notes?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Version
   * @description Semantic version of a Pack
   */
  packVersion?: string;
  /**
   * Source
   * @description Source
   * @enum {string}
   */
  source?: "web" | "cli";
};

/**
 * Type of CODA's CODA_PACK_VERSION_UPLOAD_COMPLETE tool output.
 */
type CODA_PACK_VERSION_UPLOAD_COMPLETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK tool input.
 */
type CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK tool output.
 */
type CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_PUBLISH_DOC tool input.
 */
type CODA_PUBLISH_DOC_INPUT = {
  /**
   * Category Names
   * @description The names of categories to apply to the document.
   */
  categoryNames?: string[];
  /**
   * Discoverable
   * @description If true, indicates that the doc is discoverable.
   */
  discoverable?: boolean;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Earn Credit
   * @description If true, new users may be required to sign in to view content within this document. You will receive Coda credit for each user who signs up via your doc.
   */
  earnCredit?: boolean;
  /**
   * Mode
   * @description Which interaction mode the published doc should use.
   * @enum {string}
   */
  mode?: "view" | "play" | "edit";
  /**
   * Slug
   * @description Slug for the published doc.
   */
  slug?: string;
};

/**
 * Type of CODA's CODA_PUBLISH_DOC tool output.
 */
type CODA_PUBLISH_DOC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_PUSH_A_BUTTON tool input.
 */
type CODA_PUSH_A_BUTTON_INPUT = {
  /**
   * Column Id Or Name
   * @description ID or name of the column. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  columnIdOrName?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Row Id Or Name
   * @description ID or name of the row. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.
   */
  rowIdOrName?: string;
  /**
   * Table Id Or Name
   * @description ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.
   */
  tableIdOrName?: string;
};

/**
 * Type of CODA's CODA_PUSH_A_BUTTON tool output.
 */
type CODA_PUSH_A_BUTTON_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_REGISTER_PACK_VERSION tool input.
 */
type CODA_REGISTER_PACK_VERSION_INPUT = {
  /**
   * Bundle Hash
   * @description The SHA-256 hash of the file to be uploaded.
   */
  bundleHash?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Version
   * @description Semantic version of a Pack
   */
  packVersion?: string;
};

/**
 * Type of CODA's CODA_REGISTER_PACK_VERSION tool output.
 */
type CODA_REGISTER_PACK_VERSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RESOLVE_BROWSER_LINK tool input.
 */
type CODA_RESOLVE_BROWSER_LINK_INPUT = {
  /**
   * Degrade Gracefully
   * @description By default, attempting to resolve the Coda URL of a deleted object will result in an error. If this flag is set, the next-available object, all the way up to the doc itself, will be resolved.
   */
  degradeGracefully?: boolean;
  /**
   * Url
   * @description The browser link to try to resolve.
   */
  url?: string;
};

/**
 * Type of CODA's CODA_RESOLVE_BROWSER_LINK tool output.
 */
type CODA_RESOLVE_BROWSER_LINK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK tool input.
 */
type CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK_INPUT = {
  /**
   * After Timestamp
   * @description Only return logs after the given time (non-inclusive).
   */
  afterTimestamp?: string;
  /**
   * Before Timestamp
   * @description Only return logs before the given time (non-inclusive).
   */
  beforeTimestamp?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Order
   * @description Specifies if the logs will be returned in time desc or asc. Default is desc.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Q
   * @description A search query that follows Lucene syntax.
   */
  q?: string;
};

/**
 * Type of CODA's CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK tool output.
 */
type CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG tool input.
 */
type CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG_INPUT = {
  /**
   * Details Key
   * @description The key of the details to retrieve.
   */
  detailsKey?: string;
  /**
   * Log Id
   * @description The id of the log to retrieve.
   */
  logId?: string;
  /**
   * Organization Id
   * @description ID of the organization.
   */
  organizationId?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Root Ingestion Id
   * @description ID of the root ingestion.
   */
  rootIngestionId?: string;
};

/**
 * Type of CODA's CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG tool output.
 */
type CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION tool input.
 */
type CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION_INPUT = {
  /**
   * After Timestamp
   * @description Only return logs after the given time (non-inclusive).
   */
  afterTimestamp?: string;
  /**
   * Before Timestamp
   * @description Only return logs before the given time (non-inclusive).
   */
  beforeTimestamp?: string;
  /**
   * Ingestion Execution Id
   * @description ID of the ingestion execution.
   */
  ingestionExecutionId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Log Types
   * @description Only return logs of the given types.
   */
  logTypes?: string[];
  /**
   * Order
   * @description Specifies if the logs will be returned in time desc or asc. Default is desc.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Organization Id
   * @description ID of the organization.
   */
  organizationId?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Q
   * @description A search query that follows Lucene syntax.
   */
  q?: string;
  /**
   * Request Ids
   * @description Only return logs matching provided request IDs.
   */
  requestIds?: string[];
  /**
   * Root Ingestion Id
   * @description ID of the root ingestion.
   */
  rootIngestionId?: string;
};

/**
 * Type of CODA's CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION tool output.
 */
type CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RETRIEVE_THE_LOGS_OF_A_PACK tool input.
 */
type CODA_RETRIEVE_THE_LOGS_OF_A_PACK_INPUT = {
  /**
   * After Timestamp
   * @description Only return logs after the given time (non-inclusive).
   */
  afterTimestamp?: string;
  /**
   * Before Timestamp
   * @description Only return logs before the given time (non-inclusive).
   */
  beforeTimestamp?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number;
  /**
   * Log Types
   * @description Only return logs of the given types.
   */
  logTypes?: string[];
  /**
   * Order
   * @description Specifies if the logs will be returned in time desc or asc. Default is desc.
   * @enum {string}
   */
  order?: "asc" | "desc";
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   */
  pageToken?: string;
  /**
   * Q
   * @description A search query that follows Lucene syntax.
   */
  q?: string;
  /**
   * Request Ids
   * @description Only return logs matching provided request IDs.
   */
  requestIds?: string[];
};

/**
 * Type of CODA's CODA_RETRIEVE_THE_LOGS_OF_A_PACK tool output.
 */
type CODA_RETRIEVE_THE_LOGS_OF_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK tool input.
 */
type CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK tool output.
 */
type CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK tool input.
 */
type CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK tool output.
 */
type CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_SEARCH_DOCS tool input.
 */
type CODA_SEARCH_DOCS_INPUT = {
  /**
   * Folder Id
   * @description Show only docs belonging to the given folder ID.
   * @default null
   */
  folder_id: string | null;
  /**
   * Is Owner
   * @description If true, returns only docs owned by the user.
   * @default null
   */
  is_owner: boolean | null;
  /**
   * Is Published
   * @description If true, returns only published docs.
   * @default null
   */
  is_published: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return in this query. Default is 25.
   * @default 25
   */
  limit: number | null;
  /**
   * Page Token
   * @description An opaque token used to fetch the next page of results.
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Search term used to filter results. Searches within document titles and metadata.
   * @default null
   */
  query: string | null;
  /**
   * Workspace Id
   * @description Show only docs belonging to the given workspace ID.
   * @default null
   */
  workspace_id: string | null;
};

/**
 * Type of CODA's CODA_SEARCH_DOCS tool output.
 */
type CODA_SEARCH_DOCS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of docs matching the search criteria
       */
      items: {
          /**
           * Browser Link
           * @description Browser-friendly link to the Coda doc
           */
          browser_link: string;
          /**
           * Created At
           * @description Timestamp for when the doc was created
           */
          created_at: string;
          /**
           * DocSize
           * @description Model representing document size information.
           * @default null
           */
          doc_size: {
              /**
               * Over Api Size Limit
               * @description Whether doc exceeds API size limits
               * @default null
               */
              over_api_size_limit: boolean | null;
              /**
               * Page Count
               * @description Number of pages
               * @default null
               */
              page_count: number | null;
              /**
               * Table And View Count
               * @description Number of tables and views
               * @default null
               */
              table_and_view_count: number | null;
              /**
               * Total Row Count
               * @description Total number of rows in the doc
               * @default null
               */
              total_row_count: number | null;
          } | null;
          /**
           * FolderInfo
           * @description Model representing folder information.
           * @default null
           */
          folder: {
              /**
               * Browser Link
               * @description Browser link to the folder
               */
              browser_link: string;
              /**
               * Id
               * @description ID of the folder
               */
              id: string;
              /**
               * Name
               * @description Name of the folder
               */
              name: string;
              /**
               * Type
               * @description Type of the resource
               */
              type: string;
          } | null;
          /**
           * Href
           * @description API link to the Coda doc
           */
          href: string;
          /**
           * Id
           * @description ID of the Coda doc
           */
          id: string;
          /**
           * Name
           * @description Name of the doc
           */
          name: string;
          /**
           * Owner
           * @description Email address of the doc owner
           */
          owner: string;
          /**
           * Owner Name
           * @description Name of the doc owner
           */
          owner_name: string;
          /**
           * DocPublished
           * @description Model representing document publishing information.
           * @default null
           */
          published: {
              /**
               * Browser Link
               * @description Browser link to the published doc
               * @default null
               */
              browser_link: string | null;
              /**
               * Categories
               * @description Categories applied to the doc
               * @default null
               */
              categories: string[] | null;
              /**
               * Description
               * @description Description of the published doc
               * @default null
               */
              description: string | null;
              /**
               * Discoverable
               * @description Whether the doc is discoverable
               * @default null
               */
              discoverable: boolean | null;
              /**
               * Earn Credit
               * @description Whether new users may need to sign in
               * @default null
               */
              earn_credit: boolean | null;
              /**
               * Image Link
               * @description Link to the doc's cover image
               * @default null
               */
              image_link: string | null;
              /**
               * Mode
               * @description Interaction mode for the published doc
               * @default null
               */
              mode: string | null;
          } | null;
          /**
           * Type
           * @description Type of the resource
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp for when the doc was last modified
           */
          updated_at: string;
          /**
           * Workspace
           * @description Workspace containing this doc
           */
          workspace: {
              /**
               * Browser Link
               * @description Browser link to the workspace
               */
              browser_link: string;
              /**
               * Id
               * @description ID of the workspace
               */
              id: string;
              /**
               * Name
               * @description Name of the workspace
               */
              name: string;
              /**
               * Organization Id
               * @description ID of the organization
               * @default null
               */
              organization_id: string | null;
              /**
               * Type
               * @description Type of the resource
               */
              type: string;
          };
      }[];
      /**
       * Next Page Link
       * @description If specified, a link that can be used to fetch the next page of results
       * @default null
       */
      next_page_link: string | null;
      /**
       * Next Page Token
       * @description If specified, an opaque token used to fetch the next page of results
       * @default null
       */
      next_page_token: string | null;
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
 * Type of CODA's CODA_SEARCH_PRINCIPALS tool input.
 */
type CODA_SEARCH_PRINCIPALS_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Query
   * @description Search term used to filter down results.
   */
  query?: string;
};

/**
 * Type of CODA's CODA_SEARCH_PRINCIPALS tool output.
 */
type CODA_SEARCH_PRINCIPALS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_SEARCH_ROW tool input.
 */
type CODA_SEARCH_ROW_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc containing the table.
   */
  doc_id?: string;
  /**
   * Limit
   * @description Maximum number of results to return in this query.
   * @default 25
   */
  limit: number | null;
  /**
   * Query
   * @description Query to filter rows, specified as column_id_or_name:value. For column names with spaces, use quotes, e.g. "My Column":123
   * @default null
   */
  query: string | null;
  /**
   * Table Id Or Name
   * @description ID or name of the table to search in. Names are discouraged as they can change.
   */
  table_id_or_name?: string;
  /**
   * Use Column Names
   * @description Use column names instead of column IDs in the returned output. This is generally discouraged as names can change.
   * @default null
   */
  use_column_names: boolean | null;
  /**
   * ValueFormat
   * @description Enum for value format options.
   * @default simple
   * @enum {string|null}
   */
  value_format: "simple" | "simpleWithArrays" | "rich" | null;
  /**
   * Visible Only
   * @description If true, returns only visible rows and columns for the table.
   * @default null
   */
  visible_only: boolean | null;
};

/**
 * Type of CODA's CODA_SEARCH_ROW tool output.
 */
type CODA_SEARCH_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Href
       * @description API link to these results.
       * @default null
       */
      href: string | null;
      /**
       * Items
       * @description List of rows matching the search criteria.
       */
      items: {
          /**
           * Browser Link
           * @description Browser-friendly link to the row.
           */
          browserLink: string;
          /**
           * Created At
           * @description Timestamp for when the row was created.
           */
          createdAt: string;
          /**
           * Href
           * @description API link to the row.
           */
          href: string;
          /**
           * Id
           * @description ID of the row.
           */
          id: string;
          /**
           * Index
           * @description Index of the row within the table.
           */
          index: number;
          /**
           * Name
           * @description Display name of the row based on identifying column.
           */
          name: string;
          /**
           * Type
           * @description The type of this resource.
           * @default row
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp for when the row was last modified.
           */
          updatedAt: string;
          /**
           * Values
           * @description Values for the row as a mapping of column IDs/names to values.
           */
          values: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Next Page Link
       * @description Link that can be used to fetch the next page of results.
       * @default null
       */
      nextPageLink: string | null;
      /**
       * Next Page Token
       * @description Token that can be used to fetch the next page of results.
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of CODA's CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK tool input.
 */
type CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK_INPUT = {
  /**
   * Client Id
   * @description Clientid
   */
  clientId?: string;
  /**
   * Client Secret
   * @description Clientsecret
   */
  clientSecret?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Redirect Uri
   * @description Redirecturi
   */
  redirectUri?: string;
};

/**
 * Type of CODA's CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK tool output.
 */
type CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK tool input.
 */
type CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_INPUT = {
  /**
   * Credentials
   * @description Credentials of a Pack connection.
   */
  credentials?: {
      [key: string]: unknown;
  };
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK tool output.
 */
type CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_TRIGGER_AUTOMATION tool input.
 */
type CODA_TRIGGER_AUTOMATION_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Rule Id
   * @description ID of the automation rule.
   */
  ruleId?: string;
};

/**
 * Type of CODA's CODA_TRIGGER_AUTOMATION tool output.
 */
type CODA_TRIGGER_AUTOMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UNPUBLISH_DOC tool input.
 */
type CODA_UNPUBLISH_DOC_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_UNPUBLISH_DOC tool output.
 */
type CODA_UNPUBLISH_DOC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATES_A_CUSTOM_DOMAIN tool input.
 */
type CODA_UPDATES_A_CUSTOM_DOMAIN_INPUT = {
  /**
   * Custom Doc Domain
   * @description A custom domain for a published doc.
   */
  customDocDomain?: string;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_UPDATES_A_CUSTOM_DOMAIN tool output.
 */
type CODA_UPDATES_A_CUSTOM_DOMAIN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATES_USER_ROLE tool input.
 */
type CODA_UPDATES_USER_ROLE_INPUT = {
  /**
   * Email
   * @description Email of the user.
   */
  email?: string;
  /**
   * New Role
   * @description Newrole
   * @enum {string}
   */
  newRole?: "Admin" | "DocMaker" | "Editor";
  /**
   * Workspace Id
   * @description ID of the workspace.
   */
  workspaceId?: string;
};

/**
 * Type of CODA's CODA_UPDATES_USER_ROLE tool output.
 */
type CODA_UPDATES_USER_ROLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATE_ACL_SETTINGS tool input.
 */
type CODA_UPDATE_ACL_SETTINGS_INPUT = {
  /**
   * Allow Copying
   * @description When true, allows doc viewers to copy the doc.
   */
  allowCopying?: boolean;
  /**
   * Allow Editors To Change Permissions
   * @description When true, allows editors to change doc permissions. When false, only doc owner can change doc permissions.
   */
  allowEditorsToChangePermissions?: boolean;
  /**
   * Allow Viewers To Request Editing
   * @description When true, allows doc viewers to request editing permissions.
   */
  allowViewersToRequestEditing?: boolean;
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
};

/**
 * Type of CODA's CODA_UPDATE_ACL_SETTINGS tool output.
 */
type CODA_UPDATE_ACL_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATE_AN_EXISTING_PACK_RELEASE tool input.
 */
type CODA_UPDATE_AN_EXISTING_PACK_RELEASE_INPUT = {
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Release Id
   * @description ID of a Pack release
   */
  packReleaseId?: number;
  /**
   * Release Notes
   * @description Notes about key features or changes in this release that the Pack maker wants to communicate to users.
   */
  releaseNotes?: string;
};

/**
 * Type of CODA's CODA_UPDATE_AN_EXISTING_PACK_RELEASE tool output.
 */
type CODA_UPDATE_AN_EXISTING_PACK_RELEASE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATE_A_PAGE tool input.
 */
type CODA_UPDATE_A_PAGE_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Icon Name
   * @description Name of the icon.
   */
  iconName?: string;
  /**
   * Image Url
   * @description Url of the cover image to use.
   */
  imageUrl?: string;
  /**
   * Is Hidden
   * @description Whether the page is hidden or not. Note that for pages that cannot be hidden, like the sole top-level page in a doc, this will be ignored.
   */
  isHidden?: boolean;
  /**
   * Name
   * @description Name of the page.
   */
  name?: string;
  /**
   * Page Id Or Name
   * @description ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.
   */
  pageIdOrName?: string;
  /**
   * Subtitle
   * @description Subtitle of the page.
   */
  subtitle?: string;
};

/**
 * Type of CODA's CODA_UPDATE_A_PAGE tool output.
 */
type CODA_UPDATE_A_PAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATE_DOC tool input.
 */
type CODA_UPDATE_DOC_INPUT = {
  /**
   * Doc Id
   * @description ID of the doc.
   */
  docId?: string;
  /**
   * Icon Name
   * @description Name of the icon.
   */
  iconName?: string;
  /**
   * Title
   * @description Title of the doc.
   */
  title?: string;
};

/**
 * Type of CODA's CODA_UPDATE_DOC tool output.
 */
type CODA_UPDATE_DOC_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK tool input.
 */
type CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK_INPUT = {
  /**
   * Items
   * @description A list of docs to set as the featured docs for a Pack.
   */
  items?: {
      /**
       * Is Pinned
       * @description Whether or not the current doc should be pinned.
       */
      isPinned?: boolean;
      /**
       * Url
       * @description A URL to a doc.
       */
      url: string;
  }[];
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK tool output.
 */
type CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPDATE_PACK tool input.
 */
type CODA_UPDATE_PACK_INPUT = {
  /**
   * Cover Asset Id
   * @description The asset id of the Pack"s cover image, returned by [`#PackAssetUploadComplete`](#operation/packAssetUploadComplete) endpoint.
   */
  coverAssetId?: string;
  /**
   * Description
   * @description The full description of the Pack.
   */
  description?: string;
  /**
   * Example Images
   * @description The example images for the Pack.
   */
  exampleImages?: {
      /**
       * Asset Id
       * @description The asset id of the Pack"s example image, returned by [`#PackAssetUploadComplete`](#operation/packAssetUploadComplete) endpoint.
       */
      assetId: string;
      /**
       * Filename
       * @description The filename for the image.
       */
      filename: string;
      /**
       * Mime Type
       * @description The media type of the image being sent.
       */
      mimeType?: string;
  }[];
  /**
   * Logo Asset Id
   * @description The asset id of the Pack"s logo, returned by [`#PackAssetUploadComplete`](#operation/packAssetUploadComplete) endpoint.
   */
  logoAssetId?: string;
  /**
   * Name
   * @description The name of the Pack.
   */
  name?: string;
  /**
   * Overall Rate Limit  Interval Seconds
   * @description The rate limit interval in seconds.
   */
  overallRateLimit__intervalSeconds?: number;
  /**
   * Overall Rate Limit  Operations Per Interval
   * @description The maximum number of Pack operations that can be performed in a given interval.
   */
  overallRateLimit__operationsPerInterval?: number;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Per Connection Rate Limit  Interval Seconds
   * @description The rate limit interval in seconds.
   */
  perConnectionRateLimit__intervalSeconds?: number;
  /**
   * Per Connection Rate Limit  Operations Per Interval
   * @description The maximum number of Pack operations that can be performed in a given interval.
   */
  perConnectionRateLimit__operationsPerInterval?: number;
  /**
   * Privacy Policy Url
   * Format: url
   * @description A Privacy Policy URL for the Pack.
   */
  privacyPolicyUrl?: string;
  /**
   * Short Description
   * @description A short version of the description of the Pack.
   */
  shortDescription?: string;
  /**
   * Source Code Visibility
   * @description Visibility of a pack"s source code.
   * @enum {string}
   */
  sourceCodeVisibility?: "private" | "shared";
  /**
   * Support Email
   * @description A contact email for the Pack.
   */
  supportEmail?: string;
  /**
   * Terms Of Service Url
   * Format: url
   * @description A Terms of Service URL for the Pack.
   */
  termsOfServiceUrl?: string;
};

/**
 * Type of CODA's CODA_UPDATE_PACK tool output.
 */
type CODA_UPDATE_PACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPLOAD_A_PACK_ASSET tool input.
 */
type CODA_UPLOAD_A_PACK_ASSET_INPUT = {
  /**
   * Filename
   * @description Filename
   */
  filename?: string;
  /**
   * Image Hash
   * @description The SHA-256 hash of the image to be uploaded.
   */
  imageHash?: string;
  /**
   * Mime Type
   * @description The media type of the image being sent.
   */
  mimeType?: string;
  /**
   * Pack Asset Type
   * @description Packassettype
   * @enum {string}
   */
  packAssetType?: "logo" | "cover" | "exampleImage";
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
};

/**
 * Type of CODA's CODA_UPLOAD_A_PACK_ASSET tool output.
 */
type CODA_UPLOAD_A_PACK_ASSET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPLOAD_PACK_SOURCE_CODE tool input.
 */
type CODA_UPLOAD_PACK_SOURCE_CODE_INPUT = {
  /**
   * Filename
   * @description Filename
   */
  filename?: string;
  /**
   * Pack Id
   * @description ID of a Pack
   */
  packId?: number;
  /**
   * Pack Version
   * @description Packversion
   */
  packVersion?: string;
  /**
   * Payload Hash
   * @description The SHA-256 hash of the image to be uploaded.
   */
  payloadHash?: string;
};

/**
 * Type of CODA's CODA_UPLOAD_PACK_SOURCE_CODE tool output.
 */
type CODA_UPLOAD_PACK_SOURCE_CODE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of CODA's CODA_UPSERT_ROWS tool input.
 */
type CODA_UPSERT_ROWS_INPUT = {
  /**
   * Disable Parsing
   * @description If true, the API will not attempt to parse the data in any way.
   * @default null
   */
  disable_parsing: boolean | null;
  /**
   * Doc Id
   * @description ID of the doc containing the table.
   */
  doc_id?: string;
  /**
   * Key Columns
   * @description Optional array of column IDs/names to use as upsert keys. If provided, existing rows matching these keys will be updated.
   * @default null
   */
  key_columns: string[] | null;
  /**
   * Rows
   * @description Array of row objects to insert or upsert.
   */
  rows?: {
      /**
       * Cells
       * @description Array of cell objects specifying column and value pairs.
       */
      cells: {
          /**
           * Column
           * @description The ID or name of the column where the value should be inserted.
           */
          column: string;
          /**
           * Value
           * @description The value to insert into the cell.
           */
          value: string | null;
      }[];
  }[];
  /**
   * Table Id Or Name
   * @description ID or name of the table. Using table IDs is recommended to avoid issues if table names change.
   */
  table_id_or_name?: string;
};

/**
 * Type of CODA's CODA_UPSERT_ROWS tool output.
 */
type CODA_UPSERT_ROWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Added Row Ids
       * @description Row IDs for rows that will be added. Only applicable when keyColumns is not set or empty.
       * @default null
       */
      added_row_ids: string[] | null;
      /**
       * Request Id
       * @description An arbitrary unique identifier for this request.
       */
      request_id: string;
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
 * Type map of all available tool input types for toolkit "CODA".
 */
export type CODA_TOOL_INPUTS = {
  ADD_A_CATEGORY_FOR_PACK: CODA_ADD_A_CATEGORY_FOR_PACK_INPUT
  ADD_A_MAKER_FOR_PACK: CODA_ADD_A_MAKER_FOR_PACK_INPUT
  ADD_A_PERMISSION_FOR_PACK: CODA_ADD_A_PERMISSION_FOR_PACK_INPUT
  ADD_CUSTOM_DOMAIN: CODA_ADD_CUSTOM_DOMAIN_INPUT
  ADD_PERMISSION: CODA_ADD_PERMISSION_INPUT
  BEGIN_CONTENT_EXPORT: CODA_BEGIN_CONTENT_EXPORT_INPUT
  CONTENT_EXPORT_STATUS: CODA_CONTENT_EXPORT_STATUS_INPUT
  COPY_DOC: CODA_COPY_DOC_INPUT
  CREATE_A_NEW_PACK_RELEASE: CODA_CREATE_A_NEW_PACK_RELEASE_INPUT
  CREATE_A_PAGE: CODA_CREATE_A_PAGE_INPUT
  CREATE_DOC: CODA_CREATE_DOC_INPUT
  CREATE_PACK: CODA_CREATE_PACK_INPUT
  DELETES_A_CUSTOM_DOMAIN: CODA_DELETES_A_CUSTOM_DOMAIN_INPUT
  DELETE_A_CATEGORY_FOR_PACK: CODA_DELETE_A_CATEGORY_FOR_PACK_INPUT
  DELETE_A_MAKER_FOR_PACK: CODA_DELETE_A_MAKER_FOR_PACK_INPUT
  DELETE_A_PAGE: CODA_DELETE_A_PAGE_INPUT
  DELETE_A_PERMISSION_FOR_PACK: CODA_DELETE_A_PERMISSION_FOR_PACK_INPUT
  DELETE_DOC: CODA_DELETE_DOC_INPUT
  DELETE_MULTIPLE_ROWS: CODA_DELETE_MULTIPLE_ROWS_INPUT
  DELETE_PACK: CODA_DELETE_PACK_INPUT
  DELETE_PERMISSION: CODA_DELETE_PERMISSION_INPUT
  DELETE_ROW: CODA_DELETE_ROW_INPUT
  FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID: CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID_INPUT
  FETCH_INGESTION_EXECUTIONS_FOR_PACK: CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK_INPUT
  GETS_CUSTOM_DOC_DOMAINS_PROVIDERS: CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS_INPUT
  GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION: CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION_INPUT
  GET_ACL_SETTINGS: CODA_GET_ACL_SETTINGS_INPUT
  GET_ANALYTICS_LAST_UPDATED_DAY: CODA_GET_ANALYTICS_LAST_UPDATED_DAY_INPUT
  GET_A_COLUMN: CODA_GET_A_COLUMN_INPUT
  GET_A_CONTROL: CODA_GET_A_CONTROL_INPUT
  GET_A_FORMULA: CODA_GET_A_FORMULA_INPUT
  GET_A_PAGE: CODA_GET_A_PAGE_INPUT
  GET_A_ROW: CODA_GET_A_ROW_INPUT
  GET_A_SINGLE_PACK: CODA_GET_A_SINGLE_PACK_INPUT
  GET_A_TABLE: CODA_GET_A_TABLE_INPUT
  GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK: CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK_INPUT
  GET_DOC_ANALYTICS_SUMMARY: CODA_GET_DOC_ANALYTICS_SUMMARY_INPUT
  GET_DOC_CATEGORIES: CODA_GET_DOC_CATEGORIES_INPUT
  GET_INFO_ABOUT_A_DOC: CODA_GET_INFO_ABOUT_A_DOC_INPUT
  GET_MUTATION_STATUS: CODA_GET_MUTATION_STATUS_INPUT
  GET_PACK_ANALYTICS_SUMMARY: CODA_GET_PACK_ANALYTICS_SUMMARY_INPUT
  GET_SHARING_METADATA: CODA_GET_SHARING_METADATA_INPUT
  GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS: CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS_INPUT
  GET_THE_NEXT_VALID_VERSION_FOR_A_PACK: CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK_INPUT
  GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION: CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION_INPUT
  GET_USER_INFO: CODA_GET_USER_INFO_INPUT
  LIST_AVAILABLE_DOCS: CODA_LIST_AVAILABLE_DOCS_INPUT
  LIST_CATEGORIES_FOR_PACK: CODA_LIST_CATEGORIES_FOR_PACK_INPUT
  LIST_COLUMNS: CODA_LIST_COLUMNS_INPUT
  LIST_CONTROLS: CODA_LIST_CONTROLS_INPUT
  LIST_CUSTOM_DOC_DOMAINS: CODA_LIST_CUSTOM_DOC_DOMAINS_INPUT
  LIST_DOC_ANALYTICS: CODA_LIST_DOC_ANALYTICS_INPUT
  LIST_FEATURED_DOCS_FOR_A_PACK: CODA_LIST_FEATURED_DOCS_FOR_A_PACK_INPUT
  LIST_FORMULAS: CODA_LIST_FORMULAS_INPUT
  LIST_MAKERS_FOR_PACK: CODA_LIST_MAKERS_FOR_PACK_INPUT
  LIST_PACKS: CODA_LIST_PACKS_INPUT
  LIST_PACK_ANALYTICS: CODA_LIST_PACK_ANALYTICS_INPUT
  LIST_PACK_FORMULA_ANALYTICS: CODA_LIST_PACK_FORMULA_ANALYTICS_INPUT
  LIST_PAGES: CODA_LIST_PAGES_INPUT
  LIST_PAGE_ANALYTICS: CODA_LIST_PAGE_ANALYTICS_INPUT
  LIST_PERMISSIONS: CODA_LIST_PERMISSIONS_INPUT
  LIST_PERMISSIONS_FOR_A_PACK: CODA_LIST_PERMISSIONS_FOR_A_PACK_INPUT
  LIST_TABLES: CODA_LIST_TABLES_INPUT
  LIST_TABLE_ROWS: CODA_LIST_TABLE_ROWS_INPUT
  LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER: CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER_INPUT
  LIST_THE_RELEASES_FOR_A_PACK: CODA_LIST_THE_RELEASES_FOR_A_PACK_INPUT
  LIST_THE_VERSIONS_FOR_A_PACK: CODA_LIST_THE_VERSIONS_FOR_A_PACK_INPUT
  LIST_WORKSPACE_ROLES: CODA_LIST_WORKSPACE_ROLES_INPUT
  LIST_WORKSPACE_USERS: CODA_LIST_WORKSPACE_USERS_INPUT
  PACK_ASSET_UPLOAD_COMPLETE: CODA_PACK_ASSET_UPLOAD_COMPLETE_INPUT
  PACK_SOURCE_CODE_UPLOAD_COMPLETE: CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE_INPUT
  PACK_VERSION_UPLOAD_COMPLETE: CODA_PACK_VERSION_UPLOAD_COMPLETE_INPUT
  PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK: CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_INPUT
  PUBLISH_DOC: CODA_PUBLISH_DOC_INPUT
  PUSH_A_BUTTON: CODA_PUSH_A_BUTTON_INPUT
  REGISTER_PACK_VERSION: CODA_REGISTER_PACK_VERSION_INPUT
  RESOLVE_BROWSER_LINK: CODA_RESOLVE_BROWSER_LINK_INPUT
  RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK: CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK_INPUT
  RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG: CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG_INPUT
  RETRIEVE_THE_LOGS_OF_A_INGESTION: CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION_INPUT
  RETRIEVE_THE_LOGS_OF_A_PACK: CODA_RETRIEVE_THE_LOGS_OF_A_PACK_INPUT
  RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK: CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK_INPUT
  RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK: CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK_INPUT
  SEARCH_DOCS: CODA_SEARCH_DOCS_INPUT
  SEARCH_PRINCIPALS: CODA_SEARCH_PRINCIPALS_INPUT
  SEARCH_ROW: CODA_SEARCH_ROW_INPUT
  SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK: CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK_INPUT
  SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK: CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_INPUT
  TRIGGER_AUTOMATION: CODA_TRIGGER_AUTOMATION_INPUT
  UNPUBLISH_DOC: CODA_UNPUBLISH_DOC_INPUT
  UPDATES_A_CUSTOM_DOMAIN: CODA_UPDATES_A_CUSTOM_DOMAIN_INPUT
  UPDATES_USER_ROLE: CODA_UPDATES_USER_ROLE_INPUT
  UPDATE_ACL_SETTINGS: CODA_UPDATE_ACL_SETTINGS_INPUT
  UPDATE_AN_EXISTING_PACK_RELEASE: CODA_UPDATE_AN_EXISTING_PACK_RELEASE_INPUT
  UPDATE_A_PAGE: CODA_UPDATE_A_PAGE_INPUT
  UPDATE_DOC: CODA_UPDATE_DOC_INPUT
  UPDATE_FEATURED_DOCS_FOR_A_PACK: CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK_INPUT
  UPDATE_PACK: CODA_UPDATE_PACK_INPUT
  UPLOAD_A_PACK_ASSET: CODA_UPLOAD_A_PACK_ASSET_INPUT
  UPLOAD_PACK_SOURCE_CODE: CODA_UPLOAD_PACK_SOURCE_CODE_INPUT
  UPSERT_ROWS: CODA_UPSERT_ROWS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CODA".
 */
export type CODA_TOOL_OUTPUTS = {
  ADD_A_CATEGORY_FOR_PACK: CODA_ADD_A_CATEGORY_FOR_PACK_OUTPUT
  ADD_A_MAKER_FOR_PACK: CODA_ADD_A_MAKER_FOR_PACK_OUTPUT
  ADD_A_PERMISSION_FOR_PACK: CODA_ADD_A_PERMISSION_FOR_PACK_OUTPUT
  ADD_CUSTOM_DOMAIN: CODA_ADD_CUSTOM_DOMAIN_OUTPUT
  ADD_PERMISSION: CODA_ADD_PERMISSION_OUTPUT
  BEGIN_CONTENT_EXPORT: CODA_BEGIN_CONTENT_EXPORT_OUTPUT
  CONTENT_EXPORT_STATUS: CODA_CONTENT_EXPORT_STATUS_OUTPUT
  COPY_DOC: CODA_COPY_DOC_OUTPUT
  CREATE_A_NEW_PACK_RELEASE: CODA_CREATE_A_NEW_PACK_RELEASE_OUTPUT
  CREATE_A_PAGE: CODA_CREATE_A_PAGE_OUTPUT
  CREATE_DOC: CODA_CREATE_DOC_OUTPUT
  CREATE_PACK: CODA_CREATE_PACK_OUTPUT
  DELETES_A_CUSTOM_DOMAIN: CODA_DELETES_A_CUSTOM_DOMAIN_OUTPUT
  DELETE_A_CATEGORY_FOR_PACK: CODA_DELETE_A_CATEGORY_FOR_PACK_OUTPUT
  DELETE_A_MAKER_FOR_PACK: CODA_DELETE_A_MAKER_FOR_PACK_OUTPUT
  DELETE_A_PAGE: CODA_DELETE_A_PAGE_OUTPUT
  DELETE_A_PERMISSION_FOR_PACK: CODA_DELETE_A_PERMISSION_FOR_PACK_OUTPUT
  DELETE_DOC: CODA_DELETE_DOC_OUTPUT
  DELETE_MULTIPLE_ROWS: CODA_DELETE_MULTIPLE_ROWS_OUTPUT
  DELETE_PACK: CODA_DELETE_PACK_OUTPUT
  DELETE_PERMISSION: CODA_DELETE_PERMISSION_OUTPUT
  DELETE_ROW: CODA_DELETE_ROW_OUTPUT
  FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID: CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID_OUTPUT
  FETCH_INGESTION_EXECUTIONS_FOR_PACK: CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK_OUTPUT
  GETS_CUSTOM_DOC_DOMAINS_PROVIDERS: CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS_OUTPUT
  GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION: CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION_OUTPUT
  GET_ACL_SETTINGS: CODA_GET_ACL_SETTINGS_OUTPUT
  GET_ANALYTICS_LAST_UPDATED_DAY: CODA_GET_ANALYTICS_LAST_UPDATED_DAY_OUTPUT
  GET_A_COLUMN: CODA_GET_A_COLUMN_OUTPUT
  GET_A_CONTROL: CODA_GET_A_CONTROL_OUTPUT
  GET_A_FORMULA: CODA_GET_A_FORMULA_OUTPUT
  GET_A_PAGE: CODA_GET_A_PAGE_OUTPUT
  GET_A_ROW: CODA_GET_A_ROW_OUTPUT
  GET_A_SINGLE_PACK: CODA_GET_A_SINGLE_PACK_OUTPUT
  GET_A_TABLE: CODA_GET_A_TABLE_OUTPUT
  GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK: CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK_OUTPUT
  GET_DOC_ANALYTICS_SUMMARY: CODA_GET_DOC_ANALYTICS_SUMMARY_OUTPUT
  GET_DOC_CATEGORIES: CODA_GET_DOC_CATEGORIES_OUTPUT
  GET_INFO_ABOUT_A_DOC: CODA_GET_INFO_ABOUT_A_DOC_OUTPUT
  GET_MUTATION_STATUS: CODA_GET_MUTATION_STATUS_OUTPUT
  GET_PACK_ANALYTICS_SUMMARY: CODA_GET_PACK_ANALYTICS_SUMMARY_OUTPUT
  GET_SHARING_METADATA: CODA_GET_SHARING_METADATA_OUTPUT
  GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS: CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS_OUTPUT
  GET_THE_NEXT_VALID_VERSION_FOR_A_PACK: CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK_OUTPUT
  GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION: CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION_OUTPUT
  GET_USER_INFO: CODA_GET_USER_INFO_OUTPUT
  LIST_AVAILABLE_DOCS: CODA_LIST_AVAILABLE_DOCS_OUTPUT
  LIST_CATEGORIES_FOR_PACK: CODA_LIST_CATEGORIES_FOR_PACK_OUTPUT
  LIST_COLUMNS: CODA_LIST_COLUMNS_OUTPUT
  LIST_CONTROLS: CODA_LIST_CONTROLS_OUTPUT
  LIST_CUSTOM_DOC_DOMAINS: CODA_LIST_CUSTOM_DOC_DOMAINS_OUTPUT
  LIST_DOC_ANALYTICS: CODA_LIST_DOC_ANALYTICS_OUTPUT
  LIST_FEATURED_DOCS_FOR_A_PACK: CODA_LIST_FEATURED_DOCS_FOR_A_PACK_OUTPUT
  LIST_FORMULAS: CODA_LIST_FORMULAS_OUTPUT
  LIST_MAKERS_FOR_PACK: CODA_LIST_MAKERS_FOR_PACK_OUTPUT
  LIST_PACKS: CODA_LIST_PACKS_OUTPUT
  LIST_PACK_ANALYTICS: CODA_LIST_PACK_ANALYTICS_OUTPUT
  LIST_PACK_FORMULA_ANALYTICS: CODA_LIST_PACK_FORMULA_ANALYTICS_OUTPUT
  LIST_PAGES: CODA_LIST_PAGES_OUTPUT
  LIST_PAGE_ANALYTICS: CODA_LIST_PAGE_ANALYTICS_OUTPUT
  LIST_PERMISSIONS: CODA_LIST_PERMISSIONS_OUTPUT
  LIST_PERMISSIONS_FOR_A_PACK: CODA_LIST_PERMISSIONS_FOR_A_PACK_OUTPUT
  LIST_TABLES: CODA_LIST_TABLES_OUTPUT
  LIST_TABLE_ROWS: CODA_LIST_TABLE_ROWS_OUTPUT
  LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER: CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER_OUTPUT
  LIST_THE_RELEASES_FOR_A_PACK: CODA_LIST_THE_RELEASES_FOR_A_PACK_OUTPUT
  LIST_THE_VERSIONS_FOR_A_PACK: CODA_LIST_THE_VERSIONS_FOR_A_PACK_OUTPUT
  LIST_WORKSPACE_ROLES: CODA_LIST_WORKSPACE_ROLES_OUTPUT
  LIST_WORKSPACE_USERS: CODA_LIST_WORKSPACE_USERS_OUTPUT
  PACK_ASSET_UPLOAD_COMPLETE: CODA_PACK_ASSET_UPLOAD_COMPLETE_OUTPUT
  PACK_SOURCE_CODE_UPLOAD_COMPLETE: CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE_OUTPUT
  PACK_VERSION_UPLOAD_COMPLETE: CODA_PACK_VERSION_UPLOAD_COMPLETE_OUTPUT
  PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK: CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_OUTPUT
  PUBLISH_DOC: CODA_PUBLISH_DOC_OUTPUT
  PUSH_A_BUTTON: CODA_PUSH_A_BUTTON_OUTPUT
  REGISTER_PACK_VERSION: CODA_REGISTER_PACK_VERSION_OUTPUT
  RESOLVE_BROWSER_LINK: CODA_RESOLVE_BROWSER_LINK_OUTPUT
  RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK: CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK_OUTPUT
  RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG: CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG_OUTPUT
  RETRIEVE_THE_LOGS_OF_A_INGESTION: CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION_OUTPUT
  RETRIEVE_THE_LOGS_OF_A_PACK: CODA_RETRIEVE_THE_LOGS_OF_A_PACK_OUTPUT
  RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK: CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK_OUTPUT
  RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK: CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK_OUTPUT
  SEARCH_DOCS: CODA_SEARCH_DOCS_OUTPUT
  SEARCH_PRINCIPALS: CODA_SEARCH_PRINCIPALS_OUTPUT
  SEARCH_ROW: CODA_SEARCH_ROW_OUTPUT
  SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK: CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK_OUTPUT
  SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK: CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK_OUTPUT
  TRIGGER_AUTOMATION: CODA_TRIGGER_AUTOMATION_OUTPUT
  UNPUBLISH_DOC: CODA_UNPUBLISH_DOC_OUTPUT
  UPDATES_A_CUSTOM_DOMAIN: CODA_UPDATES_A_CUSTOM_DOMAIN_OUTPUT
  UPDATES_USER_ROLE: CODA_UPDATES_USER_ROLE_OUTPUT
  UPDATE_ACL_SETTINGS: CODA_UPDATE_ACL_SETTINGS_OUTPUT
  UPDATE_AN_EXISTING_PACK_RELEASE: CODA_UPDATE_AN_EXISTING_PACK_RELEASE_OUTPUT
  UPDATE_A_PAGE: CODA_UPDATE_A_PAGE_OUTPUT
  UPDATE_DOC: CODA_UPDATE_DOC_OUTPUT
  UPDATE_FEATURED_DOCS_FOR_A_PACK: CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK_OUTPUT
  UPDATE_PACK: CODA_UPDATE_PACK_OUTPUT
  UPLOAD_A_PACK_ASSET: CODA_UPLOAD_A_PACK_ASSET_OUTPUT
  UPLOAD_PACK_SOURCE_CODE: CODA_UPLOAD_PACK_SOURCE_CODE_OUTPUT
  UPSERT_ROWS: CODA_UPSERT_ROWS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of CODA's DOCUMENT_DELETED trigger payload.
 */
type CODA_DOCUMENT_DELETED_PAYLOAD = {
  /**
   * Document
   * @description The document that was deleted
   */
  document?: {
      /**
       * Created At
       * @description The creation timestamp of the document
       * @default null
       */
      createdAt: string | null;
      /**
       * Deleted At
       * @description The timestamp when the document was detected as deleted
       */
      deleted_at: string;
      /**
       * Folder Id
       * @description The ID of the folder that contained the document
       * @default null
       */
      folderId: string | null;
      /**
       * Id
       * @description The ID of the deleted document
       */
      id: string;
      /**
       * Name
       * @description The name of the deleted document
       * @default null
       */
      name: string | null;
      /**
       * Owner
       * @description The email of the document owner
       * @default null
       */
      owner: string | null;
      /**
       * Owner Name
       * @description The name of the document owner
       * @default null
       */
      ownerName: string | null;
      /**
       * Workspace Id
       * @description The ID of the workspace that contained the document
       * @default null
       */
      workspaceId: string | null;
  };
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
};

/**
 * Type of CODA's NEW_CODA_DOCUMENT trigger payload.
 */
type CODA_NEW_CODA_DOCUMENT_PAYLOAD = {
  /**
   * Browser Link
   * @description The browser link to the document
   * @default null
   */
  browserLink: string | null;
  /**
   * Created At
   * @description The creation timestamp of the document
   * @default null
   */
  createdAt: string | null;
  /**
   * Folder Id
   * @description The ID of the folder containing the document
   * @default null
   */
  folderId: string | null;
  /**
   * Href
   * @description The URL of the document
   * @default null
   */
  href: string | null;
  /**
   * Id
   * @description The ID of the document
   * @default null
   */
  id: string | null;
  /**
   * Name
   * @description The name of the document
   * @default null
   */
  name: string | null;
  /**
   * Owner
   * @description The email of the document owner
   * @default null
   */
  owner: string | null;
  /**
   * Owner Name
   * @description The name of the document owner
   * @default null
   */
  ownerName: string | null;
  /**
   * Type
   * @description The type of the document
   * @default null
   */
  type: string | null;
  /**
   * Updated At
   * @description The last update timestamp of the document
   * @default null
   */
  updatedAt: string | null;
  /**
   * Workspace Id
   * @description The ID of the workspace containing the document
   * @default null
   */
  workspaceId: string | null;
};

/**
 * Type of CODA's NEW_CODA_PAGE trigger payload.
 */
type CODA_NEW_CODA_PAGE_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Page
   * @description The page that triggered the event
   */
  page?: {
      /**
       * Browser Link
       * @description The browser link to the page
       * @default null
       */
      browserLink: string | null;
      /**
       * Created At
       * @description The creation timestamp of the page
       * @default null
       */
      created_at: string | null;
      /**
       * Href
       * @description The URL of the page
       * @default null
       */
      href: string | null;
      /**
       * Id
       * @description The ID of the page
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description The name of the page
       * @default null
       */
      name: string | null;
      /**
       * Type
       * @description The type of the page
       * @default null
       */
      type: string | null;
  };
};

/**
 * Type of CODA's SPECIFIC_CODA_PAGE_UPDATED trigger payload.
 */
type CODA_SPECIFIC_CODA_PAGE_UPDATED_PAYLOAD = {
  /**
   * Event Type
   * @description Type of event
   */
  event_type?: string;
  /**
   * Page
   * @description The page that was updated
   */
  page?: {
      /**
       * Browser Link
       * @description The browser link to the page
       * @default null
       */
      browserLink: string | null;
      /**
       * Href
       * @description The URL of the page
       * @default null
       */
      href: string | null;
      /**
       * Id
       * @description The ID of the page
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description The name of the page
       * @default null
       */
      name: string | null;
      /**
       * Type
       * @description The type of the page
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description The update timestamp of the page
       * @default null
       */
      updated_at: string | null;
      /**
       * Updated By
       * @description User who updated the page
       * @default null
       */
      updated_by: {
          [key: string]: unknown;
      } | null;
  };
};

/**
 * Map of Composio's CODA toolkit.
 */
export const CODA = {
  slug: "coda",
  tools: {
    /**
     * Add a publishing category for a given pack.
     */
    ADD_A_CATEGORY_FOR_PACK: "CODA_ADD_A_CATEGORY_FOR_PACK",
    /**
     * Set a maker for a given pack. used to display makers for a pack in the corresponding packs page.
     */
    ADD_A_MAKER_FOR_PACK: "CODA_ADD_A_MAKER_FOR_PACK",
    /**
     * Create or modify user, workspace, or global permissions for a given pack.
     */
    ADD_A_PERMISSION_FOR_PACK: "CODA_ADD_A_PERMISSION_FOR_PACK",
    /**
     * Add a custom domain to a published doc.
     */
    ADD_CUSTOM_DOMAIN: "CODA_ADD_CUSTOM_DOMAIN",
    /**
     * Adds a new permission to the doc.
     */
    ADD_PERMISSION: "CODA_ADD_PERMISSION",
    /**
     * Initiate an export of content for the given page.
     */
    BEGIN_CONTENT_EXPORT: "CODA_BEGIN_CONTENT_EXPORT",
    /**
     * Check the status of a page content export
     */
    CONTENT_EXPORT_STATUS: "CODA_CONTENT_EXPORT_STATUS",
    /**
     * Creates a copy of an existing coda document. this action allows you to duplicate a document while optionally specifying a new title and location for the copied document.
     */
    COPY_DOC: "CODA_COPY_DOC",
    /**
     * Creates a new pack release based on an existing pack version.
     */
    CREATE_A_NEW_PACK_RELEASE: "CODA_CREATE_A_NEW_PACK_RELEASE",
    /**
     * Create a new page in a doc. note that creating a page requires you to be a doc maker in the applicable workspace.
     */
    CREATE_A_PAGE: "CODA_CREATE_A_PAGE",
    /**
     * Creates a new coda doc, optionally copying an existing doc. note that creating a doc requires you to be a doc maker in the applicable workspace (or be auto-promoted to one).
     */
    CREATE_DOC: "CODA_CREATE_DOC",
    /**
     * Creates a new pack, essentially registering a new pack id. the contents of the pack will be uploaded separately.
     */
    CREATE_PACK: "CODA_CREATE_PACK",
    /**
     * Deletes a custom domain from a published doc.
     */
    DELETES_A_CUSTOM_DOMAIN: "CODA_DELETES_A_CUSTOM_DOMAIN",
    /**
     * Delete a publishing category for a given pack.
     */
    DELETE_A_CATEGORY_FOR_PACK: "CODA_DELETE_A_CATEGORY_FOR_PACK",
    /**
     * Delete a maker for a given pack, who will not be displayed in the corresponding packs page.
     */
    DELETE_A_MAKER_FOR_PACK: "CODA_DELETE_A_MAKER_FOR_PACK",
    /**
     * Deletes the specified page.
     */
    DELETE_A_PAGE: "CODA_DELETE_A_PAGE",
    /**
     * Delete user, workspace, or global permissions for a given pack.
     */
    DELETE_A_PERMISSION_FOR_PACK: "CODA_DELETE_A_PERMISSION_FOR_PACK",
    /**
     * Deletes a doc.
     */
    DELETE_DOC: "CODA_DELETE_DOC",
    /**
     * Deletes the specified rows from the table or view. this endpoint will always return a 202. row deletions are generally processed within several seconds.
     */
    DELETE_MULTIPLE_ROWS: "CODA_DELETE_MULTIPLE_ROWS",
    /**
     * Delete a given pack.
     */
    DELETE_PACK: "CODA_DELETE_PACK",
    /**
     * Deletes an existing permission.
     */
    DELETE_PERMISSION: "CODA_DELETE_PERMISSION",
    /**
     * Deletes the specified row from the table or view. this endpoint will always return a 202, so long as the row exists and is accessible (and the update is structurally valid). row deletions are generally processed within several seconds. when deleting using a name as opposed to an id, an arbitrary row will be removed.
     */
    DELETE_ROW: "CODA_DELETE_ROW",
    /**
     * Retrieve the grouped logs of a pack for debugging purpose.
     */
    FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID: "CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID",
    /**
     * Retrieve the ingestion execution ids of a root ingestion for debugging purpose.
     */
    FETCH_INGESTION_EXECUTIONS_FOR_PACK: "CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK",
    /**
     * Gets the provider (ie. godaddy) of a custom domain.
     */
    GETS_CUSTOM_DOC_DOMAINS_PROVIDERS: "CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS",
    /**
     * Returns a json schema applicable for customizing the pack using pack configurations.
     */
    GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION: "CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION",
    /**
     * Returns settings associated with acls for this coda doc.
     */
    GET_ACL_SETTINGS: "CODA_GET_ACL_SETTINGS",
    /**
     * Returns days based on pacific standard time when analytics were last updated.
     */
    GET_ANALYTICS_LAST_UPDATED_DAY: "CODA_GET_ANALYTICS_LAST_UPDATED_DAY",
    /**
     * Returns details about a column in a table.
     */
    GET_A_COLUMN: "CODA_GET_A_COLUMN",
    /**
     * Returns info on a control.
     */
    GET_A_CONTROL: "CODA_GET_A_CONTROL",
    /**
     * Returns info on a formula.
     */
    GET_A_FORMULA: "CODA_GET_A_FORMULA",
    /**
     * Returns details about a page.
     */
    GET_A_PAGE: "CODA_GET_A_PAGE",
    /**
     * Returns details about a row in a table.
     */
    GET_A_ROW: "CODA_GET_A_ROW",
    /**
     * Returns a single pack.
     */
    GET_A_SINGLE_PACK: "CODA_GET_A_SINGLE_PACK",
    /**
     * Returns details about a specific table or view.
     */
    GET_A_TABLE: "CODA_GET_A_TABLE",
    /**
     * Get detailed listing information for a pack.
     */
    GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK: "CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK",
    /**
     * Returns summarized analytics data for available docs.
     */
    GET_DOC_ANALYTICS_SUMMARY: "CODA_GET_DOC_ANALYTICS_SUMMARY",
    /**
     * Gets all available doc categories.
     */
    GET_DOC_CATEGORIES: "CODA_GET_DOC_CATEGORIES",
    /**
     * Returns metadata for the specified doc.
     */
    GET_INFO_ABOUT_A_DOC: "CODA_GET_INFO_ABOUT_A_DOC",
    /**
     * Get the status for an asynchronous mutation to know whether or not it has been completed. each api endpoint that mutates a document will return a request id that you can pass to this endpoint to check the completion status. status information is not guaranteed to be available for more than one day after the mutation was completed. it is intended to be used shortly after the request was made.
     */
    GET_MUTATION_STATUS: "CODA_GET_MUTATION_STATUS",
    /**
     * Returns summarized analytics data for packs the user can edit.
     */
    GET_PACK_ANALYTICS_SUMMARY: "CODA_GET_PACK_ANALYTICS_SUMMARY",
    /**
     * Returns metadata associated with sharing for this coda doc.
     */
    GET_SHARING_METADATA: "CODA_GET_SHARING_METADATA",
    /**
     * Gets information about the difference between the specified previous version and next version of a pack.
     */
    GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS: "CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS",
    /**
     * Get the next valid version based on the proposed metadata.
     */
    GET_THE_NEXT_VALID_VERSION_FOR_A_PACK: "CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK",
    /**
     * Get temporary links used to download the source code for the given packid and version
     */
    GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION: "CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION",
    /**
     * Returns basic info about the current user.
     */
    GET_USER_INFO: "CODA_GET_USER_INFO",
    /**
     * Returns a list of coda docs accessible by the user, and which they have opened at least once. these are returned in the same order as on the docs page: reverse chronological by the latest event relevant to the user (last viewed, edited, or shared).
     */
    LIST_AVAILABLE_DOCS: "CODA_LIST_AVAILABLE_DOCS",
    /**
     * List publishing categories for a given pack.
     */
    LIST_CATEGORIES_FOR_PACK: "CODA_LIST_CATEGORIES_FOR_PACK",
    /**
     * Returns a list of columns in a table.
     */
    LIST_COLUMNS: "CODA_LIST_COLUMNS",
    /**
     * Returns a list of controls in a coda doc.
     */
    LIST_CONTROLS: "CODA_LIST_CONTROLS",
    /**
     * List all custom domains for a published doc.
     */
    LIST_CUSTOM_DOC_DOMAINS: "CODA_LIST_CUSTOM_DOC_DOMAINS",
    /**
     * Returns analytics data for available docs per day.
     */
    LIST_DOC_ANALYTICS: "CODA_LIST_DOC_ANALYTICS",
    /**
     * Returns a list of featured doc ids for a pack.
     */
    LIST_FEATURED_DOCS_FOR_A_PACK: "CODA_LIST_FEATURED_DOCS_FOR_A_PACK",
    /**
     * Returns a list of named formulas in a coda doc.
     */
    LIST_FORMULAS: "CODA_LIST_FORMULAS",
    /**
     * List makers for a given pack.
     */
    LIST_MAKERS_FOR_PACK: "CODA_LIST_MAKERS_FOR_PACK",
    /**
     * Get the list of accessible packs.
     */
    LIST_PACKS: "CODA_LIST_PACKS",
    /**
     * Returns analytics data for packs the user can edit.
     */
    LIST_PACK_ANALYTICS: "CODA_LIST_PACK_ANALYTICS",
    /**
     * Returns analytics data for pack formulas.
     */
    LIST_PACK_FORMULA_ANALYTICS: "CODA_LIST_PACK_FORMULA_ANALYTICS",
    /**
     * Returns a list of pages in a coda doc.
     */
    LIST_PAGES: "CODA_LIST_PAGES",
    /**
     * Returns analytics data for a given doc within the day. this method will return a 401 if the given doc is not in an enterprise workspace.
     */
    LIST_PAGE_ANALYTICS: "CODA_LIST_PAGE_ANALYTICS",
    /**
     * Returns a list of permissions for this coda doc.
     */
    LIST_PERMISSIONS: "CODA_LIST_PERMISSIONS",
    /**
     * Get user, workspace, and/or global permissions for a given pack.
     */
    LIST_PERMISSIONS_FOR_A_PACK: "CODA_LIST_PERMISSIONS_FOR_A_PACK",
    /**
     * Returns a list of tables in a coda doc.
     */
    LIST_TABLES: "CODA_LIST_TABLES",
    /**
     * Retrieves rows from a specific table within a coda document. this endpoint allows you to fetch data from your coda tables programmatically, enabling integration with other systems or data analysis tools. use this when you need to access the content of a table in your coda document, such as for reporting, data synchronization, or building custom views of your data outside of coda. the endpoint supports pagination for large tables and allows you to control the number of rows returned per request. it's important to note that this endpoint only retrieves data and doesn't modify the table contents.
     */
    LIST_TABLE_ROWS: "CODA_LIST_TABLE_ROWS",
    /**
     * Get listings of public packs and packs created by you.
     */
    LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER: "CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER",
    /**
     * Get the list of releases of a pack.
     */
    LIST_THE_RELEASES_FOR_A_PACK: "CODA_LIST_THE_RELEASES_FOR_A_PACK",
    /**
     * Get the list of versions of a pack.
     */
    LIST_THE_VERSIONS_FOR_A_PACK: "CODA_LIST_THE_VERSIONS_FOR_A_PACK",
    /**
     * Returns a list of the counts of users over time by role for the workspace.
     */
    LIST_WORKSPACE_ROLES: "CODA_LIST_WORKSPACE_ROLES",
    /**
     * Returns a list of members in the given workspace. this list will be ordered with the requesting user first and then ordered by role.
     */
    LIST_WORKSPACE_USERS: "CODA_LIST_WORKSPACE_USERS",
    /**
     * Note the completion of the upload of a pack asset.
     */
    PACK_ASSET_UPLOAD_COMPLETE: "CODA_PACK_ASSET_UPLOAD_COMPLETE",
    /**
     * Note the completion of the upload of a pack source code.
     */
    PACK_SOURCE_CODE_UPLOAD_COMPLETE: "CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE",
    /**
     * Note the completion of the upload of a pack version bundle in order to create that pack version.
     */
    PACK_VERSION_UPLOAD_COMPLETE: "CODA_PACK_VERSION_UPLOAD_COMPLETE",
    /**
     * Patch the system connection credentials of the pack.
     */
    PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK: "CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK",
    /**
     * Update publish settings for a doc.
     */
    PUBLISH_DOC: "CODA_PUBLISH_DOC",
    /**
     * Pushes a button on a row in a table. authorization note: this action is available to api tokens that are authorized to write to the table. however, the underlying button can perform any action on the document, including writing to other tables and performing pack actions.
     */
    PUSH_A_BUTTON: "CODA_PUSH_A_BUTTON",
    /**
     * Registers a new pack version. this simply returns a signed url to use for uploading the pack version definition. following the completion of the upload, post to /apis/v1/packs/{packid}/versions/{packversion} trigger the rest of the creation process.
     */
    REGISTER_PACK_VERSION: "CODA_REGISTER_PACK_VERSION",
    /**
     * Given a browser link to a coda object, attempts to find it and return metadata that can be used to get more info on it. returns a 400 if the url does not appear to be a coda url or a 404 if the resource cannot be located with the current credentials.
     */
    RESOLVE_BROWSER_LINK: "CODA_RESOLVE_BROWSER_LINK",
    /**
     * Retrieve the grouped logs of a pack for debugging purpose.
     */
    RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK: "CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK",
    /**
     * Retrieve the ingestion execution ids of a root ingestion for debugging purpose.
     */
    RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG: "CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG",
    /**
     * Retrieve the logs of a ingestion for debugging purpose.
     */
    RETRIEVE_THE_LOGS_OF_A_INGESTION: "CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION",
    /**
     * Retrieve the logs of a pack for debugging purpose.
     */
    RETRIEVE_THE_LOGS_OF_A_PACK: "CODA_RETRIEVE_THE_LOGS_OF_A_PACK",
    /**
     * Retrieve the oauth configuration of the pack for display purpose. secrets will be returned with masks.
     */
    RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK: "CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK",
    /**
     * Retrieve the system connection metadata of the pack.
     */
    RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK: "CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK",
    /**
     * This tool allows users to search for coda documents based on a query term. it searches within document titles and metadata, providing results with document id, name, type, owner details, timestamps, workspace info, and folder path if available. it supports pagination through the 'pagetoken' parameter and accepts a 'limit' parameter to control the number of returned results.
     */
    SEARCH_DOCS: "CODA_SEARCH_DOCS",
    /**
     * Searches for user and group principals matching the query that this doc can be shared with. at most 20 results will be returned for both users and groups. if no query is given then no results are returned.
     */
    SEARCH_PRINCIPALS: "CODA_SEARCH_PRINCIPALS",
    /**
     * Action to search for rows in a coda table based on specific criteria.
     */
    SEARCH_ROW: "CODA_SEARCH_ROW",
    /**
     * Set the oauth configurations of the pack, including client id and secret.
     */
    SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK: "CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK",
    /**
     * Set the system connection credentials of the pack.
     */
    SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK: "CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK",
    /**
     * Triggers webhook-invoked automation
     */
    TRIGGER_AUTOMATION: "CODA_TRIGGER_AUTOMATION",
    /**
     * Unpublishes a doc.
     */
    UNPUBLISH_DOC: "CODA_UNPUBLISH_DOC",
    /**
     * Updates properties of a document's custom domain.
     */
    UPDATES_A_CUSTOM_DOMAIN: "CODA_UPDATES_A_CUSTOM_DOMAIN",
    /**
     * Updates the workspace user role of a user that matches the parameters. only succeeds if the requesting user has admin permissions in the workspace.
     */
    UPDATES_USER_ROLE: "CODA_UPDATES_USER_ROLE",
    /**
     * Update settings associated with acls for this coda doc.
     */
    UPDATE_ACL_SETTINGS: "CODA_UPDATE_ACL_SETTINGS",
    /**
     * Update details of a pack release.
     */
    UPDATE_AN_EXISTING_PACK_RELEASE: "CODA_UPDATE_AN_EXISTING_PACK_RELEASE",
    /**
     * Update properties for a page. note that updating a page title or icon requires you to be a doc maker in the applicable workspace.
     */
    UPDATE_A_PAGE: "CODA_UPDATE_A_PAGE",
    /**
     * Updates metadata for a doc. note that updating a doc title requires you to be a doc maker in the applicable workspace.
     */
    UPDATE_DOC: "CODA_UPDATE_DOC",
    /**
     * Create or replace the featured docs for a pack.
     */
    UPDATE_FEATURED_DOCS_FOR_A_PACK: "CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK",
    /**
     * Update an existing pack for non-versioned fields.
     */
    UPDATE_PACK: "CODA_UPDATE_PACK",
    /**
     * Request a signed s3 url to upload your pack asset.
     */
    UPLOAD_A_PACK_ASSET: "CODA_UPLOAD_A_PACK_ASSET",
    /**
     * Request a signed s3 url to upload your pack source code.
     */
    UPLOAD_PACK_SOURCE_CODE: "CODA_UPLOAD_PACK_SOURCE_CODE",
    /**
     * This tool allows you to insert new rows into a coda table or update existing ones based on specified key columns. this is particularly useful for synchronizing data or ensuring records are up-to-date without creating duplicates.
     */
    UPSERT_ROWS: "CODA_UPSERT_ROWS",
  },
  triggerTypes: {
    /**
     * Triggers when a Coda document is deleted.
     */
    DOCUMENT_DELETED: "CODA_DOCUMENT_DELETED",
    /**
     * Triggers when a new Coda document is created.
     */
    NEW_CODA_DOCUMENT: "CODA_NEW_CODA_DOCUMENT",
    /**
     * Triggers when a new page is added to a Coda document.
     */
    NEW_CODA_PAGE: "CODA_NEW_CODA_PAGE",
    /**
     * Triggers when a specific page within a Coda document is updated.
     */
    SPECIFIC_CODA_PAGE_UPDATED: "CODA_SPECIFIC_CODA_PAGE_UPDATED",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "CODA".
 */
export type CODA_TRIGGER_PAYLOADS = {
  DOCUMENT_DELETED: CODA_DOCUMENT_DELETED_PAYLOAD
  NEW_CODA_DOCUMENT: CODA_NEW_CODA_DOCUMENT_PAYLOAD
  NEW_CODA_PAGE: CODA_NEW_CODA_PAGE_PAYLOAD
  SPECIFIC_CODA_PAGE_UPDATED: CODA_SPECIFIC_CODA_PAGE_UPDATED_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "CODA".
 */
export type CODA_TRIGGER_EVENTS = {
  DOCUMENT_DELETED: TriggerEvent<CODA_DOCUMENT_DELETED_PAYLOAD>
  NEW_CODA_DOCUMENT: TriggerEvent<CODA_NEW_CODA_DOCUMENT_PAYLOAD>
  NEW_CODA_PAGE: TriggerEvent<CODA_NEW_CODA_PAGE_PAYLOAD>
  SPECIFIC_CODA_PAGE_UPDATED: TriggerEvent<CODA_SPECIFIC_CODA_PAGE_UPDATED_PAYLOAD>
}
