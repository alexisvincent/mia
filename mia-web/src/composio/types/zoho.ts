// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZOHO's ZOHO_BIGIN_ADD_RECORDS tool input.
 */
type ZOHO_BIGIN_ADD_RECORDS_INPUT = {
  /**
   * Data
   * @description List of JSON objects to insert. Each object maps Field API names to values. Max 100 records per call.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Module Api Name
   * @description The API name of the module to insert into. Allowed: Contacts, Pipelines, Accounts, Products, Tasks, Events, Calls
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Trigger
   * @description Array of workflow triggers. Default ['workflow'] executes workflows; use [] to skip workflows.
   * @default null
   */
  trigger: string[] | null;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_ADD_RECORDS tool output.
 */
type ZOHO_BIGIN_ADD_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Results for each record insert request
   */
  data?: {
      /**
       * Code
       * @description Result code for this record
       * @enum {string}
       */
      code: "SUCCESS" | "ERROR";
      /**
       * Details
       * @description Detailed info on this record operation
       */
      details: {
          /**
           * $Approval State
           * @description Approval state of the record
           * @default null
           */
          $approval_state: string | null;
          /**
           * UserInfo
           * @description Information about who created the record
           * @default null
           */
          Created_By: {
              /**
               * Id
               * @description User ID of the creator or modifier
               */
              id: string;
              /**
               * Name
               * @description User name of the creator or modifier
               */
              name: string;
          } | null;
          /**
           * Created Time
           * @description ISO8601 timestamp when record was created
           * @default null
           */
          Created_Time: string | null;
          /**
           * UserInfo
           * @description Information about who last modified the record
           * @default null
           */
          Modified_By: {
              /**
               * Id
               * @description User ID of the creator or modifier
               */
              id: string;
              /**
               * Name
               * @description User name of the creator or modifier
               */
              name: string;
          } | null;
          /**
           * Modified Time
           * @description ISO8601 timestamp when record was last modified
           * @default null
           */
          Modified_Time: string | null;
          /**
           * Id
           * @description Unique ID of the created record
           */
          id: string;
      };
      /**
       * Message
       * @description Human-readable message for this record operation
       */
      message: string;
      /**
       * Status
       * @description Overall status for this record operation
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of ZOHO's ZOHO_BIGIN_ADD_TAGS_TO_RECORDS tool input.
 */
type ZOHO_BIGIN_ADD_TAGS_TO_RECORDS_INPUT = {
  /**
   * Module Api Name
   * @description API name of the module where record resides
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Companies" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Over Write
   * @description Whether to overwrite existing tags (default: false)
   * @default false
   */
  over_write: boolean | null;
  /**
   * Record Id
   * @description Unique identifier of the record to which tags will be added
   */
  record_id?: string;
  /**
   * Tags
   * @description List of tag objects to add to the record
   */
  tags?: {
      /**
       * Id
       * @description Unique identifier of an existing tag, if applicable
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name of the tag to add
       */
      name: string;
  }[];
};

/**
 * Type of ZOHO's ZOHO_BIGIN_ADD_TAGS_TO_RECORDS tool output.
 */
type ZOHO_BIGIN_ADD_TAGS_TO_RECORDS_OUTPUT = {
  /**
   * Data
   * @description List of results for each record operation
   */
  data?: {
      /**
       * Code
       * @description Status code of the operation for this record
       */
      code: string;
      /**
       * Details
       * @description Details of the record and its tags
       */
      details: {
          /**
           * Id
           * @description Record identifier
           */
          id: string;
          /**
           * Tags
           * @description List of tags now associated with the record
           */
          tags: string[];
      };
      /**
       * Message
       * @description Message describing the operation result
       */
      message: string;
      /**
       * Status
       * @description Status of the operation, e.g., success
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success Count
   * @description Number of successful tag additions
   */
  success_count?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Wf Scheduler
   * @description Indicates if the workflow scheduler is enabled
   */
  wf_scheduler?: string;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_CREATE_TAGS tool input.
 */
type ZOHO_BIGIN_CREATE_TAGS_INPUT = {
  /**
   * Module
   * @description API name of the module where tags will be added
   * @enum {string}
   */
  module?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Tags
   * @description List of tags to create
   */
  tags?: {
      /**
       * Color Code
       * @description Hex color code of the tag, e.g. '#FF5733'
       * @default null
       */
      color_code: string | null;
      /**
       * Name
       * @description Name of the tag to create
       */
      name: string;
  }[];
};

/**
 * Type of ZOHO's ZOHO_BIGIN_CREATE_TAGS tool output.
 */
type ZOHO_BIGIN_CREATE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of created tags with details
       */
      tags: {
          /**
           * Code
           * @description Status code indicating success or failure
           */
          code: string;
          /**
           * Details
           * @description Detailed information of the created tag
           */
          details: {
              /**
               * Color Code
               * @description Hex color code of the tag
               * @default null
               */
              color_code: string | null;
              /**
               * Created By
               * @description User who created the tag
               */
              created_by: {
                  /**
                   * Id
                   * @description ID of the user
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name of the user
                   */
                  name: string;
              };
              /**
               * Created Time
               * @description Timestamp when the tag was created
               */
              created_time: string;
              /**
               * Id
               * @description Unique ID of the created tag
               */
              id: string;
              /**
               * Modified By
               * @description User who last modified the tag
               */
              modified_by: {
                  /**
                   * Id
                   * @description ID of the user
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name of the user
                   */
                  name: string;
              };
              /**
               * Modified Time
               * @description Timestamp when the tag was last modified
               */
              modified_time: string;
          };
          /**
           * Message
           * @description Description of the operation status
           */
          message: string;
          /**
           * Status
           * @description Status of the operation, e.g., 'success'
           */
          status: string;
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
 * Type of ZOHO's ZOHO_BIGIN_DELETE_ATTACHMENT tool input.
 */
type ZOHO_BIGIN_DELETE_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description Unique ID of the attachment to be deleted.
   */
  attachment_id?: string;
  /**
   * Module Api Name
   * @description API name of the module. Must be one of: Contacts, Pipelines, Accounts, Products, Tasks, Events, Notes.
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Notes";
  /**
   * Record Id
   * @description Unique ID of the record from which to delete the attachment.
   */
  record_id?: string;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_DELETE_ATTACHMENT tool output.
 */
type ZOHO_BIGIN_DELETE_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description List containing the result of the delete operation.
   */
  data?: {
      /**
       * Code
       * @description Status code of the operation, e.g., SUCCESS.
       */
      code: string;
      /**
       * Details
       * @description Details of the deleted attachment.
       */
      details: {
          /**
           * Id
           * @description ID of the deleted attachment.
           */
          id: string;
      };
      /**
       * Message
       * @description Message describing the operation result.
       */
      message: string;
      /**
       * Status
       * @description Status of the operation, e.g., success.
       */
      status: string;
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
 * Type of ZOHO's ZOHO_BIGIN_DELETE_RECORDS tool input.
 */
type ZOHO_BIGIN_DELETE_RECORDS_INPUT = {
  /**
   * Ids
   * @description List of record IDs to delete
   */
  ids?: string[];
  /**
   * Module Api Name
   * @description API name of the module to delete records from
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Wf Trigger
   * @description Whether to trigger workflow rules upon deletion
   * @default true
   */
  wf_trigger: boolean;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_DELETE_RECORDS tool output.
 */
type ZOHO_BIGIN_DELETE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Results of each delete operation
   */
  data?: {
      /**
       * Code
       * @description Status code for this deletion, e.g., SUCCESS
       */
      code: string;
      /**
       * Details
       * @description Details of the deleted record, containing its ID
       */
      details: {
          [key: string]: string;
      };
      /**
       * Message
       * @description Operation message, e.g., record deleted
       */
      message: string;
      /**
       * Status
       * @description Operation status, e.g., success
       */
      status: string;
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
 * Type of ZOHO's ZOHO_BIGIN_DOWNLOAD_ATTACHMENT tool input.
 */
type ZOHO_BIGIN_DOWNLOAD_ATTACHMENT_INPUT = {
  /**
   * Attachment Id
   * @description The unique identifier of the attachment to download.
   */
  attachment_id?: string;
  /**
   * Module Api Name
   * @description The API name of the module containing the record. One of: Contacts, Pipelines, Accounts, Products, Tasks, Events, Notes.
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Notes";
  /**
   * Record Id
   * @description The unique identifier of the record from which to download the attachment.
   */
  record_id?: string;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_DOWNLOAD_ATTACHMENT tool output.
 */
type ZOHO_BIGIN_DOWNLOAD_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary content of the downloaded file
       */
      content: string;
      /**
       * Name
       * @description Filename of the downloaded attachment
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
 * Type of ZOHO's ZOHO_BIGIN_GET_ATTACHMENTS tool input.
 */
type ZOHO_BIGIN_GET_ATTACHMENTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated field API names to include in response. Up to 50 fields (e.g., File_Name,$file_id,Size,Parent_Id).
   */
  fields?: string;
  /**
   * Module Api Name
   * @description API name of the module.
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Notes";
  /**
   * Page
   * @description Page number for pagination, must be >=1. Default is 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Records per page, must be >=1. Default is 200.
   * @default null
   */
  per_page: number | null;
  /**
   * Record Id
   * @description Unique identifier of the record.
   */
  record_id?: string;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_GET_ATTACHMENTS tool output.
 */
type ZOHO_BIGIN_GET_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description List of attachment objects.
   */
  data?: {
      /**
       * $File Id
       * @description Internal file ID.
       * @default null
       */
      $file_id: string | null;
      /**
       * File Name
       * @description Attachment filename.
       */
      File_Name: string;
      /**
       * Parent Id
       * @description Parent ID if any. Can be a dict or string.
       * @default null
       */
      Parent_Id: unknown;
      /**
       * Size
       * @description File size in bytes.
       */
      Size: string;
      /**
       * Id
       * @description Attachment record ID.
       */
      id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Pagination metadata.
   */
  info?: {
      /**
       * Count
       * @description Number of items on this page.
       */
      count: number;
      /**
       * More Records
       * @description Indicates if more pages exist.
       */
      more_records: boolean;
      /**
       * Next Page Token
       * @description Token for next page.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Page Token Expiry
       * @description Expiry of page token.
       * @default null
       */
      page_token_expiry: string | null;
      /**
       * Per Page
       * @description Records per page.
       */
      per_page: number;
      /**
       * Previous Page Token
       * @description Token for previous page.
       * @default null
       */
      previous_page_token: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_GET_DELETED_RECORDS tool input.
 */
type ZOHO_BIGIN_GET_DELETED_RECORDS_INPUT = {
  /**
   * Module Api Name
   * @description API name of the module to retrieve deleted records from.
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Page
   * @description Page number for pagination (starts at 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of records per page (max 200).
   * @default 200
   */
  per_page: number;
  /**
   * Type
   * @description Type of deleted records to retrieve: all (default), recycle (in bin ≤60 days), permanent (deleted ≤120 days).
   * @default all
   * @enum {string}
   */
  type: "all" | "recycle" | "permanent";
};

/**
 * Type of ZOHO's ZOHO_BIGIN_GET_DELETED_RECORDS tool output.
 */
type ZOHO_BIGIN_GET_DELETED_RECORDS_OUTPUT = {
  /**
   * Data
   * @description List of deleted records matching the query.
   */
  data?: {
      /**
       * DeletedBy
       * @description User who originally created the record.
       * @default null
       */
      created_by: {
          /**
           * Id
           * @description ID of the user who performed the action.
           */
          id: string;
          /**
           * Name
           * @description Name of the user who performed the action.
           */
          name: string;
      } | null;
      /**
       * DeletedBy
       * @description User who deleted the record.
       * @default null
       */
      deleted_by: {
          /**
           * Id
           * @description ID of the user who performed the action.
           */
          id: string;
          /**
           * Name
           * @description Name of the user who performed the action.
           */
          name: string;
      } | null;
      /**
       * Deleted Time
       * Format: date-time
       * @description ISO-8601 timestamp when the record was deleted.
       */
      deleted_time: string;
      /**
       * Display Name
       * @description Display name of the deleted record, if available.
       * @default null
       */
      display_name: string | null;
      /**
       * Id
       * @description ID of the deleted record.
       */
      id: string;
      /**
       * Type
       * @description Deletion type: recycle or permanent.
       * @enum {string}
       */
      type: "recycle" | "permanent";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Pagination metadata for this response.
   */
  info?: {
      /**
       * Count
       * @description Total number of deleted records.
       */
      count: number;
      /**
       * More Records
       * @description Whether more pages of results are available.
       */
      more_records: boolean;
      /**
       * Page
       * @description Current page index.
       */
      page: number;
      /**
       * Per Page
       * @description Records returned per page.
       */
      per_page: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_GET_MODULES tool input.
 */
type ZOHO_BIGIN_GET_MODULES_INPUT = object;

/**
 * Type of ZOHO's ZOHO_BIGIN_GET_MODULES tool output.
 */
type ZOHO_BIGIN_GET_MODULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Modules
       * @description List of modules available in the organization
       */
      modules: {
          /**
           * Api Name
           * @description API name of the module to be used in integrations
           */
          api_name: string;
          /**
           * Api Supported
           * @description Indicates if the module is accessible via API
           */
          api_supported: boolean;
          /**
           * Arguments
           * @description Parameters for web tab links in the module
           */
          arguments: {
              /**
               * Display Name
               * @description Display name of the argument for web tab links
               */
              display_name: string;
              /**
               * Value
               * @description Value of the argument for web tab links
               */
              value: string;
          }[];
          /**
           * Business Card Field Limit
           * @description Maximum fields allowed in a business card for the module
           */
          business_card_field_limit: number;
          /**
           * Convertable
           * @description Indicates if records can be converted into another type
           */
          convertable: boolean;
          /**
           * Creatable
           * @description Indicates if the user can create records in the module
           */
          creatable: boolean;
          /**
           * Deletable
           * @description Indicates if the user can delete a record in the module
           */
          deletable: boolean;
          /**
           * Description
           * @description Description of the module, if available
           * @default null
           */
          description: string | null;
          /**
           * Editable
           * @description Indicates if the user can edit records in the module
           */
          editable: boolean;
          /**
           * Email Template Support
           * @description Indicates if the module supports an email template
           */
          emailTemplate_support: boolean;
          /**
           * Email Parser Supported
           * @description Indicates if the module supports email parsing
           */
          email_parser_supported: boolean;
          /**
           * Feeds Required
           * @description Indicates if the module contains feeds
           */
          feeds_required: boolean;
          /**
           * Filter Supported
           * @description Indicates if the module supports custom filters
           */
          filter_supported: boolean;
          /**
           * Generated Type
           * @description Type of module generation: default, linking, subform, web, custom
           */
          generated_type: string;
          /**
           * Global Search Supported
           * @description Indicates if module supports global search
           */
          global_search_supported: boolean;
          /**
           * Has More Profiles
           * @description Indicates if there are additional profiles available for the module
           */
          has_more_profiles: boolean;
          /**
           * Id
           * @description Unique identifier of the module
           */
          id: string;
          /**
           * Inventory Template Supported
           * @description Indicates if the module supports the inventory template
           */
          inventory_template_supported: boolean;
          /**
           * Is Blueprint Supported
           * @description Indicates if the module supports Blueprint
           */
          isBlueprintSupported: boolean;
          /**
           * ModifiedBy
           * @description User details who last modified module properties
           * @default null
           */
          modified_by: {
              /**
               * Id
               * @description ID of the user who last modified the module properties
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Name of the user who last modified the module properties
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Modified Time
           * @description ISO8601 timestamp of the last modification in module properties
           * @default null
           */
          modified_time: string | null;
          /**
           * Module Name
           * @description Display name of the module
           */
          module_name: string;
          /**
           * Parent Module
           * @description Details of the parent module, if any
           */
          parent_module: {
              /**
               * Api Name
               * @description API name of the parent module
               * @default null
               */
              api_name: string | null;
              /**
               * Id
               * @description ID of the parent module
               * @default null
               */
              id: string | null;
          };
          /**
           * Plural Label
           * @description Plural label of the module
           */
          plural_label: string;
          /**
           * Presence Sub Menu
           * @description Indicates if the module contains a sub-menu
           */
          presence_sub_menu: boolean;
          /**
           * Profile Count
           * @description Count of profiles associated with the module
           */
          profile_count: number;
          /**
           * Profiles
           * @description List of profiles that have access to the module
           */
          profiles: {
              /**
               * Id
               * @description ID of the profile
               */
              id: string;
              /**
               * Name
               * @description Name of the profile
               */
              name: string;
          }[];
          /**
           * Quick Create
           * @description Indicates if the module supports quick create action
           */
          quick_create: boolean;
          /**
           * Scoring Supported
           * @description Indicates if the module qualifies for scoring
           */
          scoring_supported: boolean;
          /**
           * Sequence Number
           * @description Position of the module in Bigin interface
           */
          sequence_number: number;
          /**
           * Show As Tab
           * @description Indicates if the module appears as a tab in Bigin
           */
          show_as_tab: boolean;
          /**
           * Singular Label
           * @description Singular label of the module
           */
          singular_label: string;
          /**
           * Triggers Supported
           * @description Indicates if the module supports triggers
           */
          triggers_supported: boolean;
          /**
           * Viewable
           * @description Indicates if the user can view records in the module
           */
          viewable: boolean;
          /**
           * Visibility
           * @description Visibility of the module: 1=visible, 0=hidden, -1=unavailable by plan downgrade
           */
          visibility: number;
          /**
           * Visible
           * @description Indicates if the module is visible to the current user profile
           */
          visible: boolean;
          /**
           * Web Link
           * @description Web link of the module, if any
           * @default null
           */
          web_link: string | null;
          /**
           * Webform Supported
           * @description Indicates if the module supports web forms
           */
          webform_supported: boolean;
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
 * Type of ZOHO's ZOHO_BIGIN_GET_RECORDS tool input.
 */
type ZOHO_BIGIN_GET_RECORDS_INPUT = {
  /**
   * Approved
   * @description Filter by approval status: 'true', 'false', or 'both'.
   * @default null
   * @enum {string|null}
   */
  approved: "true" | "false" | "both" | null;
  /**
   * Cvid
   * @description Custom view ID to filter by a saved custom view.
   * @default null
   */
  cvid: string | null;
  /**
   * Fields
   * @description Comma-separated list of up to 50 field API names to retrieve.
   */
  fields?: string;
  /**
   * Module Api Name
   * @description API name of the Bigin module to retrieve records from.
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Page
   * @description Page index for pagination. Defaults to 1.
   * @default 1
   */
  page: number | null;
  /**
   * Page Token
   * @description Token from previous response for beyond-2000 retrieval.
   * @default null
   */
  page_token: string | null;
  /**
   * Per Page
   * @description Number of records per page. Defaults to 200, max 200.
   * @default 200
   */
  per_page: number | null;
  /**
   * Sort By
   * @description Field API name to sort by.
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc'. Applies when sort_by is provided.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_GET_RECORDS tool output.
 */
type ZOHO_BIGIN_GET_RECORDS_OUTPUT = {
  /**
   * Data
   * @description List of retrieved records.
   */
  data?: ({
      /**
       * Id
       * @description Unique record ID
       */
      id: string;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Pagination and metadata information.
   */
  info?: {
      /**
       * Count
       * @description Number of records in this response.
       */
      count: number;
      /**
       * More Records
       * @description Whether more records are available.
       */
      more_records: boolean;
      /**
       * Next Page Token
       * @description Token for next page beyond 2000 records.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Page
       * @description Current page index.
       */
      page: number;
      /**
       * Page Token Expiry
       * @description Expiry time of the page token.
       * @default null
       */
      page_token_expiry: string | null;
      /**
       * Per Page
       * @description Records per page in this response.
       */
      per_page: number;
      /**
       * Previous Page Token
       * @description Token for previous page, if any.
       * @default null
       */
      previous_page_token: string | null;
      /**
       * Sort By
       * @description Field used for sorting.
       * @default null
       */
      sort_by: string | null;
      /**
       * Sort Order
       * @description Sort order applied.
       * @default null
       */
      sort_order: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_UPDATE_RECORDS tool input.
 */
type ZOHO_BIGIN_UPDATE_RECORDS_INPUT = {
  /**
   * Data
   * @description List of JSON objects to update. Each object must include 'id' and the fields to modify. Max 100 records per call.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Module Api Name
   * @description API name of the module to update records in. Allowed: Contacts, Pipelines, Accounts, Products, Tasks, Events, Calls
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Calls";
  /**
   * Record Id
   * @description Optional ID of a single record to update. If omitted, all IDs in `data` will be updated in bulk.
   * @default null
   */
  record_id: string | null;
  /**
   * Trigger
   * @description Array of workflow triggers. Default executes workflows; provide [] to skip workflow execution.
   * @default null
   */
  trigger: string[] | null;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_UPDATE_RECORDS tool output.
 */
type ZOHO_BIGIN_UPDATE_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Results for each record update request
   */
  data?: {
      /**
       * Code
       * @description Result code for this record update
       * @enum {string}
       */
      code: "SUCCESS" | "ERROR";
      /**
       * Details
       * @description Detailed info on this record operation
       */
      details: {
          /**
           * UserInfo
           * @description Info about the user who created the record
           * @default null
           */
          Created_By: {
              /**
               * Id
               * @description User ID of the creator/modifier
               */
              id: string;
              /**
               * Name
               * @description User name of the creator/modifier
               */
              name: string;
          } | null;
          /**
           * Created Time
           * @description ISO8601 timestamp when record was created
           * @default null
           */
          Created_Time: string | null;
          /**
           * UserInfo
           * @description Info about the user who last modified the record
           * @default null
           */
          Modified_By: {
              /**
               * Id
               * @description User ID of the creator/modifier
               */
              id: string;
              /**
               * Name
               * @description User name of the creator/modifier
               */
              name: string;
          } | null;
          /**
           * Modified Time
           * @description ISO8601 timestamp when record was last modified
           * @default null
           */
          Modified_Time: string | null;
          /**
           * Id
           * @description Unique ID of the record
           */
          id: string;
      };
      /**
       * Message
       * @description Human-readable message for this record operation
       */
      message: string;
      /**
       * Status
       * @description Overall status for this record operation
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of ZOHO's ZOHO_BIGIN_UPLOAD_ATTACHMENT tool input.
 */
type ZOHO_BIGIN_UPLOAD_ATTACHMENT_INPUT = {
  /**
   * Attachment Url
   * @description Public URL of the attachment to upload. Provide either this or file.
   * @default null
   */
  attachment_url: string | null;
  /**
   * File
   * @description Local filesystem path of the file to upload. Provide either this or attachment_url.
   * @default null
   */
  file: string | null;
  /**
   * Module Api Name
   * @description API name of the module to which the attachment should be added.
   * @enum {string}
   */
  module_api_name?: "Contacts" | "Pipelines" | "Accounts" | "Products" | "Tasks" | "Events" | "Notes";
  /**
   * Record Id
   * @description Unique identifier of the record.
   */
  record_id?: string;
};

/**
 * Type of ZOHO's ZOHO_BIGIN_UPLOAD_ATTACHMENT tool output.
 */
type ZOHO_BIGIN_UPLOAD_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description List containing the upload results.
   */
  data?: {
      /**
       * Code
       * @description Result code of the upload operation, e.g., SUCCESS.
       */
      code: string;
      /**
       * Details
       * @description Details of the uploaded attachment.
       */
      details: {
          /**
           * Created By
           * @description User who created the attachment.
           */
          Created_By: {
              /**
               * Id
               * @description User ID.
               */
              id: string;
              /**
               * Name
               * @description Name of the user.
               */
              name: string;
          };
          /**
           * Created Time
           * @description Timestamp when the attachment was created.
           */
          Created_Time: string;
          /**
           * Modified By
           * @description User who modified the attachment.
           */
          Modified_By: {
              /**
               * Id
               * @description User ID.
               */
              id: string;
              /**
               * Name
               * @description Name of the user.
               */
              name: string;
          };
          /**
           * Modified Time
           * @description Timestamp when the attachment was modified.
           */
          Modified_Time: string;
          /**
           * Id
           * @description Unique ID of the attachment.
           */
          id: string;
      };
      /**
       * Message
       * @description Message returned by the API.
       */
      message: string;
      /**
       * Status
       * @description Status of the operation, e.g., success.
       */
      status: string;
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
 * Type of ZOHO's ZOHO_CONVERT_ZOHO_LEAD tool input.
 */
type ZOHO_CONVERT_ZOHO_LEAD_INPUT = {
  /**
   * Account Id
   * @description ID of an existing account to associate with the converted lead.
   * @default
   */
  account_id: string;
  /**
   * Assign To
   * @description User ID to assign as the owner of the new contact/account.
   * @default
   */
  assign_to: string;
  /**
   * Contact Id
   * @description ID of an existing contact to associate with the converted lead.
   * @default
   */
  contact_id: string;
  /**
   * Lead Id
   * @description The unique ID of the lead to convert.
   */
  lead_id?: string;
  /**
   * Notify Lead Owner
   * @description Notify the lead owner about the conversion via email.
   * @default false
   */
  notify_lead_owner: boolean;
  /**
   * Notify New Entity Owner
   * @description Notify the new owner of the contact/account via email.
   * @default false
   */
  notify_new_entity_owner: boolean;
  /**
   * Overwrite
   * @description Whether to overwrite the account name in the contact if it already exists and the company names mismatch.
   * @default false
   */
  overwrite: boolean;
};

/**
 * Type of ZOHO's ZOHO_CONVERT_ZOHO_LEAD tool output.
 */
type ZOHO_CONVERT_ZOHO_LEAD_OUTPUT = {
  /**
   * Data
   * @description Details of the conversion result.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Response Data
   * @description The full response data from the API.
   */
  response_data?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_CREATE_ZOHO_RECORD tool input.
 */
type ZOHO_CREATE_ZOHO_RECORD_INPUT = {
  /**
   * Data
   * @description A list of dictionaries representing the records to be created.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Lar Id
   * @description The layout ID or lead assignment rule ID (lar_id) to be used if required.
   * @default null
   */
  lar_id: string | null;
  /**
   * Module Api Name
   * @description The API name of the module to create a record in.
   */
  module_api_name?: string;
  /**
   * Trigger
   * @description List of triggers to invoke during record creation (e.g., ['workflow', 'blueprint']).
   * @default null
   */
  trigger: string[] | null;
};

/**
 * Type of ZOHO's ZOHO_CREATE_ZOHO_RECORD tool output.
 */
type ZOHO_CREATE_ZOHO_RECORD_OUTPUT = {
  /**
   * Data
   * @description Details of the created records.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Additional information about the operation.
   */
  info?: {
      [key: string]: unknown;
  };
  /**
   * Response Data
   * @description The full response data from the API.
   * @default null
   */
  response_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_CREATE_ZOHO_TAG tool input.
 */
type ZOHO_CREATE_ZOHO_TAG_INPUT = {
  /**
   * Color Code
   * @description Hex color code for the tag. Must be one of the allowed colors.
   * @default #F48435
   */
  color_code: string;
  /**
   * Module Api Name
   * @description The API name of the module to create the tag in (e.g., 'Leads').
   */
  module_api_name?: string;
  /**
   * Name
   * @description The name of the tag to be created (max 25 characters).
   */
  name?: string;
};

/**
 * Type of ZOHO's ZOHO_CREATE_ZOHO_TAG tool output.
 */
type ZOHO_CREATE_ZOHO_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API.
       */
      response_data?: {
          [key: string]: unknown;
      };
      /**
       * Tags
       * @description Details of the created tags.
       */
      tags: {
          [key: string]: unknown;
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
 * Type of ZOHO's ZOHO_GET_ZOHO_RECORDS tool input.
 */
type ZOHO_GET_ZOHO_RECORDS_INPUT = {
  /**
   * Cvid
   * @description Custom view ID to filter the records. Omit if not applicable.
   */
  cvid?: number;
  /**
   * Fields
   * @description Comma-separated API names of the fields to retrieve (max 50).
   * @default First_Name,Last_Name,Email,Phone,Company
   */
  fields: string;
  /**
   * Ids
   * @description Comma-separated record IDs to fetch specific records.
   * @default
   */
  ids: string;
  /**
   * Module Api Name
   * @description The API name of the module to retrieve records from.
   */
  module_api_name?: string;
  /**
   * Page
   * @description Page number to retrieve (default is 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of records per page (default and max is 200).
   * @default 200
   */
  per_page: number;
  /**
   * Sort By
   * @description Field to sort records by (default is 'Modified_Time').
   * @default Modified_Time
   */
  sort_by: string;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc' (default is 'desc').
   * @default desc
   */
  sort_order: string;
};

/**
 * Type of ZOHO's ZOHO_GET_ZOHO_RECORDS tool output.
 */
type ZOHO_GET_ZOHO_RECORDS_OUTPUT = {
  /**
   * Data
   * @description List of records retrieved from the module.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Pagination and additional information.
   */
  info?: {
      [key: string]: unknown;
  };
  /**
   * Response Data
   * @description The full response data from the API.
   */
  response_data?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_GET_ITEM tool input.
 */
type ZOHO_INVOICE_GET_ITEM_INPUT = {
  /**
   * Item Id
   * @description Unique ID of the item to retrieve
   */
  item_id?: string;
  /**
   * Organization Id
   * @description The Zoho Invoice organization ID (X-com-zoho-invoice-organizationid header)
   */
  organization_id?: string;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_GET_ITEM tool output.
 */
type ZOHO_INVOICE_GET_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description 0 indicates success
       */
      code: number;
      /**
       * Item
       * @description The retrieved item details
       */
      item: {
          /**
           * Custom Fields
           * @description List of custom fields
           * @default null
           */
          custom_fields: {
              /**
               * Customfield Id
               * @description Custom field ID
               */
              customfield_id: string;
              /**
               * Value
               * @description Value of the custom field
               */
              value: string;
          }[] | null;
          /**
           * Description
           * @description Description for the item
           * @default null
           */
          description: string | null;
          /**
           * Hsn Or Sac
           * @description HSN or SAC code
           * @default null
           */
          hsn_or_sac: string | null;
          /**
           * Item Id
           * @description Unique ID generated by the server for an item
           */
          item_id: string;
          /**
           * Item Tax Preferences
           * @description List of tax preferences
           * @default null
           */
          item_tax_preferences: {
              /**
               * Tax Id
               * @description ID of the tax to be associated to the item
               */
              tax_id: string;
              /**
               * Tax Specification
               * @description Tax specification (e.g., intra or interstate)
               */
              tax_specification: string;
          }[] | null;
          /**
           * Name
           * @description Name of the item
           */
          name: string;
          /**
           * Product Type
           * @description Type of an item (goods or service)
           * @default null
           */
          product_type: string | null;
          /**
           * Rate
           * @description Per unit price of an item
           */
          rate: number;
          /**
           * Sat Item Key Code
           * @description SAT item key code
           * @default null
           */
          sat_item_key_code: string | null;
          /**
           * Sku
           * @description SKU or Stock Keeping Unit
           * @default null
           */
          sku: string | null;
          /**
           * Status
           * @description Status of the item (active or inactive)
           */
          status: string;
          /**
           * Tax Id
           * @description ID of the tax to be associated
           * @default null
           */
          tax_id: string | null;
          /**
           * Tax Name
           * @description Name of the tax included
           * @default null
           */
          tax_name: string | null;
          /**
           * Tax Percentage
           * @description Percent of the tax
           * @default null
           */
          tax_percentage: string | null;
          /**
           * Tax Type
           * @description Type of the tax
           * @default null
           */
          tax_type: string | null;
          /**
           * Unitkey Code
           * @description Unit key code
           * @default null
           */
          unitkey_code: string | null;
      };
      /**
       * Message
       * @description Response message from API
       */
      message: string;
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
 * Type of ZOHO's ZOHO_INVOICE_LIST_CONTACTS tool input.
 */
type ZOHO_INVOICE_LIST_CONTACTS_INPUT = {
  /**
   * Address
   * @description Search contacts by any of the address fields (exact match)
   * @default null
   */
  address: string | null;
  /**
   * Address Contains
   * @description Search contacts by any of the address fields (substring match)
   * @default null
   */
  address_contains: string | null;
  /**
   * Address Startswith
   * @description Search contacts by any of the address fields (prefix match)
   * @default null
   */
  address_startswith: string | null;
  /**
   * Company Name
   * @description Search contacts by company name (exact match)
   * @default null
   */
  company_name: string | null;
  /**
   * Company Name Contains
   * @description Search contacts by company name (substring match)
   * @default null
   */
  company_name_contains: string | null;
  /**
   * Company Name Startswith
   * @description Search contacts by company name (prefix match)
   * @default null
   */
  company_name_startswith: string | null;
  /**
   * Contact Name
   * @description Search contacts by contact name (exact match)
   * @default null
   */
  contact_name: string | null;
  /**
   * Contact Name Contains
   * @description Search contacts by contact name (substring match)
   * @default null
   */
  contact_name_contains: string | null;
  /**
   * Contact Name Startswith
   * @description Search contacts by contact name (prefix match)
   * @default null
   */
  contact_name_startswith: string | null;
  /**
   * Email
   * @description Search contacts by email ID of the contact person (exact match)
   * @default null
   */
  email: string | null;
  /**
   * Email Contains
   * @description Search contacts by email ID of the contact person (substring match)
   * @default null
   */
  email_contains: string | null;
  /**
   * Email Startswith
   * @description Search contacts by email ID of the contact person (prefix match)
   * @default null
   */
  email_startswith: string | null;
  /**
   * Filter By
   * @description Filter contacts by status
   * @default null
   * @enum {string|null}
   */
  filter_by: "Status.All" | "Status.Active" | "Status.Inactive" | "Status.Duplicate" | "Status.Crm" | null;
  /**
   * First Name
   * @description Search contacts by first name (exact match)
   * @default null
   */
  first_name: string | null;
  /**
   * First Name Contains
   * @description Search contacts by first name (substring match)
   * @default null
   */
  first_name_contains: string | null;
  /**
   * First Name Startswith
   * @description Search contacts by first name (prefix match)
   * @default null
   */
  first_name_startswith: string | null;
  /**
   * Last Name
   * @description Search contacts by last name (exact match)
   * @default null
   */
  last_name: string | null;
  /**
   * Last Name Contains
   * @description Search contacts by last name (substring match)
   * @default null
   */
  last_name_contains: string | null;
  /**
   * Last Name Startswith
   * @description Search contacts by last name (prefix match)
   * @default null
   */
  last_name_startswith: string | null;
  /**
   * Organization Id
   * @description The Zoho organization ID. Must be passed as query parameter 'organization_id'.
   */
  organization_id?: string;
  /**
   * Page
   * @description Page number for pagination, starts at 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of contacts per page, max 200
   * @default null
   */
  per_page: number | null;
  /**
   * Phone
   * @description Search contacts by phone number of the contact person (exact match)
   * @default null
   */
  phone: string | null;
  /**
   * Phone Contains
   * @description Search contacts by phone number of the contact person (substring match)
   * @default null
   */
  phone_contains: string | null;
  /**
   * Phone Startswith
   * @description Search contacts by phone number of the contact person (prefix match)
   * @default null
   */
  phone_startswith: string | null;
  /**
   * Search Text
   * @description Search contacts by contact name or notes
   * @default null
   */
  search_text: string | null;
  /**
   * Sort Column
   * @description Sort contacts by the specified column
   * @default null
   * @enum {string|null}
   */
  sort_column: "contact_name" | "first_name" | "last_name" | "email" | "outstanding_receivable_amount" | "created_time" | "last_modified_time" | null;
  /**
   * Zcrm Account Id
   * @description CRM Account ID for the contact
   * @default null
   */
  zcrm_account_id: string | null;
  /**
   * Zcrm Contact Id
   * @description CRM Contact ID for the contact
   * @default null
   */
  zcrm_contact_id: string | null;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_LIST_CONTACTS tool output.
 */
type ZOHO_INVOICE_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code
       */
      code: number;
      /**
       * Contacts
       * @description List of contacts
       */
      contacts: {
          /**
           * Company Name
           * @description Company name of the contact
           */
          company_name: string;
          /**
           * Contact Id
           * @description Unique identifier for the contact
           */
          contact_id: number;
          /**
           * Contact Name
           * @description Name of the contact
           */
          contact_name: string;
          /**
           * Contact Type
           * @description Type of contact (e.g., customer)
           */
          contact_type: string;
          /**
           * Created Time
           * @description Contact creation time in ISO 8601 format
           */
          created_time: string;
          /**
           * Currency Code
           * @description Currency code associated with the contact
           */
          currency_code: string;
          /**
           * Currency Id
           * @description Currency ID associated with the contact
           */
          currency_id: number;
          /**
           * Email
           * @description Email address of the contact person
           */
          email: string;
          /**
           * First Name
           * @description First name of contact person
           * @default null
           */
          first_name: string | null;
          /**
           * Last Modified Time
           * @description Last modified time in ISO 8601 format
           */
          last_modified_time: string;
          /**
           * Last Name
           * @description Last name of contact person
           * @default null
           */
          last_name: string | null;
          /**
           * Mobile
           * @description Mobile number of the contact person
           * @default null
           */
          mobile: string | null;
          /**
           * Outstanding Receivable Amount
           * @description Outstanding receivable amount
           */
          outstanding_receivable_amount: number;
          /**
           * Payment Terms
           * @description Payment terms in days
           */
          payment_terms: number;
          /**
           * Payment Terms Label
           * @description Label for payment terms
           */
          payment_terms_label: string;
          /**
           * Phone
           * @description Phone number of the contact person
           */
          phone: string;
          /**
           * Unused Credits Receivable Amount
           * @description Unused credits receivable amount
           */
          unused_credits_receivable_amount: number;
      }[];
      /**
       * Message
       * @description Response message
       */
      message: string;
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
 * Type of ZOHO's ZOHO_INVOICE_LIST_EXPENSES tool input.
 */
type ZOHO_INVOICE_LIST_EXPENSES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, starts at 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of records per page; must be ≥ 1
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_LIST_EXPENSES tool output.
 */
type ZOHO_INVOICE_LIST_EXPENSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API response code; 0 indicates success
       */
      code: number;
      /**
       * Expenses
       * @description List of expense summaries
       */
      expenses: {
          /**
           * Currency Code
           * @description Currency code, e.g. USD
           */
          currency_code: string;
          /**
           * Date
           * @description Expense date (YYYY-MM-DD)
           */
          date: string;
          /**
           * Expense Id
           * @description Unique ID of the expense
           */
          expense_id: number;
          /**
           * Status
           * @description Expense status
           */
          status: string;
          /**
           * Total
           * @description Total expense amount
           */
          total: number;
      }[];
      /**
       * Message
       * @description API response message
       */
      message: string;
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
 * Type of ZOHO's ZOHO_INVOICE_LIST_INVOICES tool input.
 */
type ZOHO_INVOICE_LIST_INVOICES_INPUT = {
  /**
   * Balance
   * @description Unpaid balance of the invoice
   * @default null
   */
  balance: number | null;
  /**
   * Custom Field
   * @description Search by custom field (exact match)
   * @default null
   */
  custom_field: string | null;
  /**
   * Custom Field Contains
   * @description Search by custom field (substring match)
   * @default null
   */
  custom_field_contains: string | null;
  /**
   * Custom Field Startswith
   * @description Search by custom field (prefix match)
   * @default null
   */
  custom_field_startswith: string | null;
  /**
   * Customer Id
   * @description ID of the customer
   * @default null
   */
  customer_id: string | null;
  /**
   * Customer Name
   * @description Search by customer name (exact match)
   * @default null
   */
  customer_name: string | null;
  /**
   * Date
   * @description Invoice date (yyyy-mm-dd)
   * @default null
   */
  date: string | null;
  /**
   * Date After
   * @description Fetch invoices after this date
   * @default null
   */
  date_after: string | null;
  /**
   * Date Before
   * @description Fetch invoices before this date
   * @default null
   */
  date_before: string | null;
  /**
   * Date End
   * @description End date for invoice date range
   * @default null
   */
  date_end: string | null;
  /**
   * Date Start
   * @description Start date for invoice date range
   * @default null
   */
  date_start: string | null;
  /**
   * Due Date
   * @description Due date of the invoice (yyyy-mm-dd)
   * @default null
   */
  due_date: string | null;
  /**
   * Due Date After
   * @description Fetch invoices due after this date
   * @default null
   */
  due_date_after: string | null;
  /**
   * Due Date Before
   * @description Fetch invoices due before this date
   * @default null
   */
  due_date_before: string | null;
  /**
   * Due Date End
   * @description End date for due date range
   * @default null
   */
  due_date_end: string | null;
  /**
   * Due Date Start
   * @description Start date for due date range
   * @default null
   */
  due_date_start: string | null;
  /**
   * Email
   * Format: email
   * @description Search by email ID of the contact person
   */
  email?: unknown;
  /**
   * Filter By
   * @description Filter invoices by status or payment expected date
   * @default null
   * @enum {string|null}
   */
  filter_by: "Status.All" | "Status.Sent" | "Status.Draft" | "Status.OverDue" | "Status.Paid" | "Status.Void" | "Status.Unpaid" | "Status.PartiallyPaid" | "Status.Viewed" | "Date.PaymentExpectedDate" | null;
  /**
   * Invoice Number
   * @description Unique number assigned to the invoice (exact match)
   * @default null
   */
  invoice_number: string | null;
  /**
   * Item Description
   * @description Search by item description (exact match)
   * @default null
   */
  item_description: string | null;
  /**
   * Item Description Contains
   * @description Search by item description (substring match)
   * @default null
   */
  item_description_contains: string | null;
  /**
   * Item Description Startswith
   * @description Search by item description (prefix match)
   * @default null
   */
  item_description_startswith: string | null;
  /**
   * Item Id
   * @description Unique identifier for the item
   * @default null
   */
  item_id: string | null;
  /**
   * Item Name
   * @description Search by item name (exact match)
   * @default null
   */
  item_name: string | null;
  /**
   * Item Name Contains
   * @description Search by item name (substring match)
   * @default null
   */
  item_name_contains: string | null;
  /**
   * Item Name Startswith
   * @description Search by item name (prefix match)
   * @default null
   */
  item_name_startswith: string | null;
  /**
   * Page
   * @description Page number for pagination, starts at 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination
   * @default null
   */
  per_page: number | null;
  /**
   * Recurring Invoice Id
   * @description ID of the recurring invoice
   * @default null
   */
  recurring_invoice_id: string | null;
  /**
   * Reference Number
   * @description Reference number of the invoice
   * @default null
   */
  reference_number: string | null;
  /**
   * Search Text
   * @description Search by invoice number, purchase order, or customer name
   * @default null
   */
  search_text: string | null;
  /**
   * Sort Column
   * @description Sort invoices by specified column
   * @default null
   * @enum {string|null}
   */
  sort_column: "customer_name" | "invoice_number" | "date" | "due_date" | "total" | "balance" | "created_time" | null;
  /**
   * Status
   * @description Status of the invoice
   * @default null
   * @enum {string|null}
   */
  status: "sent" | "draft" | "overdue" | "paid" | "void" | "unpaid" | "partially_paid" | "viewed" | null;
  /**
   * Total
   * @description Total amount of the invoice
   * @default null
   */
  total: number | null;
  /**
   * Zcrm Potential Id
   * @description CRM Deal potential ID
   * @default null
   */
  zcrm_potential_id: string | null;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_LIST_INVOICES tool output.
 */
type ZOHO_INVOICE_LIST_INVOICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code of the API call
       */
      code: number;
      /**
       * Invoices
       * @description List of invoices
       */
      invoices: {
          /**
           * Ach Payment Initiated
           * @description Indicates if ACH payment was initiated
           */
          ach_payment_initiated: boolean;
          /**
           * Adjustment
           * @description Adjustment amount applied to the invoice
           */
          adjustment: number;
          /**
           * Balance
           * @description Unpaid balance of the invoice
           */
          balance: number;
          /**
           * Client Viewed Time
           * @description Time when the client viewed the invoice
           */
          client_viewed_time: string;
          /**
           * Created Time
           * @description Time when the invoice was created
           */
          created_time: string;
          /**
           * Currency Code
           * @description Currency code (e.g., USD)
           */
          currency_code: string;
          /**
           * Currency Id
           * @description Unique identifier for the currency
           */
          currency_id: string;
          /**
           * Custom Fields
           * @description List of custom fields
           */
          custom_fields: {
              /**
               * Label
               * @description Label of the custom field
               */
              label: string;
              /**
               * Value
               * @description Value of the custom field
               */
              value: string;
          }[];
          /**
           * Customer Id
           * @description Unique identifier for the customer
           */
          customer_id: string;
          /**
           * Customer Name
           * @description Name of the customer
           */
          customer_name: string;
          /**
           * Date
           * @description Invoice date in yyyy-mm-dd format
           */
          date: string;
          /**
           * Documents
           * @description Documents associated with the invoice
           */
          documents: string;
          /**
           * Due Date
           * @description Due date of the invoice in yyyy-mm-dd format
           */
          due_date: string;
          /**
           * Due Days
           * @description Number of days until due date
           */
          due_days: string;
          /**
           * Exchange Rate
           * @description Exchange rate applied to the invoice
           */
          exchange_rate: number;
          /**
           * Has Attachment
           * @description Indicates if the invoice has attachments
           */
          has_attachment: boolean;
          /**
           * Invoice Id
           * @description Unique identifier for the invoice
           */
          invoice_id: string;
          /**
           * Invoice Number
           * @description Invoice number
           */
          invoice_number: string;
          /**
           * Is Emailed
           * @description Indicates if the invoice was emailed
           */
          is_emailed: boolean;
          /**
           * Is Viewed By Client
           * @description Indicates if viewed by the client
           */
          is_viewed_by_client: boolean;
          /**
           * Last Modified Time
           * @description Time when the invoice was last modified
           */
          last_modified_time: string;
          /**
           * Last Payment Date
           * @description Date when the last payment was made
           */
          last_payment_date: string;
          /**
           * Last Reminder Sent Date
           * @description Date when the last reminder was sent
           */
          last_reminder_sent_date: string;
          /**
           * Payment Expected Date
           * @description Expected date of payment
           */
          payment_expected_date: string;
          /**
           * Reference Number
           * @description Reference number of the invoice
           */
          reference_number: string;
          /**
           * Reminders Sent
           * @description Number of reminders sent for the invoice
           */
          reminders_sent: number;
          /**
           * Salesperson Id
           * @description Unique identifier for the salesperson
           */
          salesperson_id: string;
          /**
           * Salesperson Name
           * @description Name of the salesperson
           */
          salesperson_name: string;
          /**
           * Schedule Time
           * @description Scheduled time for the invoice
           */
          schedule_time: string;
          /**
           * Shipping Charge
           * @description Shipping charge applied to the invoice
           */
          shipping_charge: number;
          /**
           * Status
           * @description Status of the invoice
           */
          status: string;
          /**
           * Total
           * @description Total amount of the invoice
           */
          total: number;
          /**
           * Write Off Amount
           * @description Amount written off for the invoice
           */
          write_off_amount: number;
      }[];
      /**
       * Message
       * @description Response message
       */
      message: string;
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
 * Type of ZOHO's ZOHO_INVOICE_LIST_ITEMS tool input.
 */
type ZOHO_INVOICE_LIST_ITEMS_INPUT = {
  /**
   * Filter By
   * @description Filter items by status or type (e.g., 'active')
   * @default null
   */
  filter_by: string | null;
  /**
   * Organization Id
   * @description The Zoho Invoice organization ID. Must be passed as query parameter 'organization_id'.
   */
  organization_id?: string;
  /**
   * Page
   * @description Page number for pagination, starts at 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page, must be ≥ 1
   * @default null
   */
  per_page: number | null;
  /**
   * Search Text
   * @description Free-text search to filter items by name or description
   * @default null
   */
  search_text: string | null;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_LIST_ITEMS tool output.
 */
type ZOHO_INVOICE_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API response code, 0 indicates success
       */
      code: number;
      /**
       * Items
       * @description List of item records
       */
      items: {
          /**
           * Custom Fields
           * @description List of custom fields for the item
           * @default null
           */
          custom_fields: {
              /**
               * Customfield Id
               * @description Custom field ID
               */
              customfield_id: string;
              /**
               * Value
               * @description Value of the custom field
               */
              value: string;
          }[] | null;
          /**
           * Description
           * @description Description for the item
           * @default null
           */
          description: string | null;
          /**
           * Hsn Or Sac
           * @description HSN or SAC code
           * @default null
           */
          hsn_or_sac: string | null;
          /**
           * Item Id
           * @description Unique ID generated by the server for an item
           */
          item_id: string;
          /**
           * Item Tax Preferences
           * @description List of tax preferences for the item
           * @default null
           */
          item_tax_preferences: {
              /**
               * Tax Id
               * @description ID of the tax associated with the item
               */
              tax_id: string;
              /**
               * Tax Specification
               * @description Tax specification (e.g., intra or interstate)
               */
              tax_specification: string;
          }[] | null;
          /**
           * Name
           * @description Name of the item
           */
          name: string;
          /**
           * Product Type
           * @description Type of an item (goods or service)
           * @default null
           */
          product_type: string | null;
          /**
           * Rate
           * @description Per unit price of an item
           */
          rate: number;
          /**
           * Sat Item Key Code
           * @description SAT item key code
           * @default null
           */
          sat_item_key_code: string | null;
          /**
           * Sku
           * @description SKU or Stock Keeping Unit
           * @default null
           */
          sku: string | null;
          /**
           * Status
           * @description Status of the item (active or inactive)
           */
          status: string;
          /**
           * Tax Id
           * @description ID of the tax associated with the item
           * @default null
           */
          tax_id: string | null;
          /**
           * Tax Name
           * @description Name of the tax included
           * @default null
           */
          tax_name: string | null;
          /**
           * Tax Percentage
           * @description Percent of the tax
           * @default null
           */
          tax_percentage: string | null;
          /**
           * Tax Type
           * @description Type of the tax
           * @default null
           */
          tax_type: string | null;
          /**
           * Unit
           * @description Measurement unit
           * @default null
           */
          unit: string | null;
          /**
           * Unitkey Code
           * @description Unit key code
           * @default null
           */
          unitkey_code: string | null;
      }[];
      /**
       * Message
       * @description API response message
       */
      message: string;
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
 * Type of ZOHO's ZOHO_INVOICE_LIST_PAYMENTS tool input.
 */
type ZOHO_INVOICE_LIST_PAYMENTS_INPUT = {
  /**
   * Customer Id
   * @description Filter payments for a specific customer by ID
   * @default null
   */
  customer_id: string | null;
  /**
   * Date End
   * @description Filter payments made on or before this date (YYYY-MM-DD)
   * @default null
   */
  date_end: string | null;
  /**
   * Date Start
   * @description Filter payments made on or after this date (YYYY-MM-DD)
   * @default null
   */
  date_start: string | null;
  /**
   * Filter By
   * @description Filter payments by status
   * @default null
   * @enum {string|null}
   */
  filter_by: "Status.All" | "Status.Success" | "Status.Refunded" | "Status.Void" | null;
  /**
   * Invoice Id
   * @description Filter payments for a specific invoice by ID
   * @default null
   */
  invoice_id: string | null;
  /**
   * Mode
   * @description Filter by payment mode (e.g., 'Cash', 'Credit Card')
   * @default null
   */
  mode: string | null;
  /**
   * Page
   * @description Page number for pagination, starts at 1
   * @default null
   */
  page: number | null;
  /**
   * Payment Number
   * @description Filter by payment number
   * @default null
   */
  payment_number: string | null;
  /**
   * Per Page
   * @description Number of payments per page, maximum 200
   * @default null
   */
  per_page: number | null;
  /**
   * Reference Number
   * @description Filter by reference number
   * @default null
   */
  reference_number: string | null;
  /**
   * Sort Column
   * @description Column to sort by
   * @default null
   * @enum {string|null}
   */
  sort_column: "payment_number" | "amount" | "date" | "mode" | "reference_number" | null;
  /**
   * Sort Order
   * @description Sort order: 'A' for ascending, 'D' for descending
   * @default null
   * @enum {string|null}
   */
  sort_order: "A" | "D" | null;
};

/**
 * Type of ZOHO's ZOHO_INVOICE_LIST_PAYMENTS tool output.
 */
type ZOHO_INVOICE_LIST_PAYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response code of the API call
       */
      code: number;
      /**
       * Message
       * @description Response message
       */
      message: string;
      /**
       * Payments
       * @description List of payments
       */
      payments: {
          /**
           * Amount
           * @description Amount of the payment
           */
          amount: number;
          /**
           * Date
           * @description Payment date in YYYY-MM-DD format
           */
          date: string;
          /**
           * Description
           * @description Description for the payment
           * @default null
           */
          description: string | null;
          /**
           * Mode
           * @description Mode of payment
           */
          mode: string;
          /**
           * Payment Id
           * @description Unique identifier for the payment
           */
          payment_id: string;
          /**
           * Payment Number
           * @description Payment number
           */
          payment_number: string;
          /**
           * Reference Number
           * @description Reference number of the payment
           */
          reference_number: string;
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
 * Type of ZOHO's ZOHO_UPDATE_RELATED_RECORDS tool input.
 */
type ZOHO_UPDATE_RELATED_RECORDS_INPUT = {
  /**
   * Data
   * @description A list of dictionaries representing the related records to update. Each dictionary must include the 'id' of the related record.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Module Api Name
   * @description The API name of the parent module (e.g., Leads, Contacts).
   */
  module_api_name?: string;
  /**
   * Record Id
   * @description The unique ID of the parent record.
   */
  record_id?: string;
  /**
   * Related List Api Name
   * @description The API name of the related list (e.g., Campaigns, Products).
   */
  related_list_api_name?: string;
};

/**
 * Type of ZOHO's ZOHO_UPDATE_RELATED_RECORDS tool output.
 */
type ZOHO_UPDATE_RELATED_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Details of the update operations for each related record.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Additional information about the operation.
   */
  info?: {
      [key: string]: unknown;
  };
  /**
   * Response Data
   * @description The full response data from the API.
   */
  response_data?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ZOHO's ZOHO_UPDATE_ZOHO_RECORD tool input.
 */
type ZOHO_UPDATE_ZOHO_RECORD_INPUT = {
  /**
   * Data
   * @description A list of dictionaries representing the records to be updated. Each record must include the 'id' field.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Lar Id
   * @description Layout ID for the module if required.
   */
  lar_id?: string;
  /**
   * Module Api Name
   * @description The API name of the module to update records in.
   */
  module_api_name?: string;
  /**
   * Trigger
   * @description Comma-separated triggers to invoke during record update (e.g., workflow, blueprint).
   */
  trigger?: string;
  /**
   * Wf Trigger
   * @description Whether to trigger workflows during record update.
   * @default false
   */
  wf_trigger: boolean;
};

/**
 * Type of ZOHO's ZOHO_UPDATE_ZOHO_RECORD tool output.
 */
type ZOHO_UPDATE_ZOHO_RECORD_OUTPUT = {
  /**
   * Data
   * @description Details of the updated records.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Info
   * @description Additional information about the operation.
   */
  info?: {
      [key: string]: unknown;
  };
  /**
   * Response Data
   * @description The full response data from the API.
   */
  response_data?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ZOHO".
 */
export type ZOHO_TOOL_INPUTS = {
  BIGIN_ADD_RECORDS: ZOHO_BIGIN_ADD_RECORDS_INPUT
  BIGIN_ADD_TAGS_TO_RECORDS: ZOHO_BIGIN_ADD_TAGS_TO_RECORDS_INPUT
  BIGIN_CREATE_TAGS: ZOHO_BIGIN_CREATE_TAGS_INPUT
  BIGIN_DELETE_ATTACHMENT: ZOHO_BIGIN_DELETE_ATTACHMENT_INPUT
  BIGIN_DELETE_RECORDS: ZOHO_BIGIN_DELETE_RECORDS_INPUT
  BIGIN_DOWNLOAD_ATTACHMENT: ZOHO_BIGIN_DOWNLOAD_ATTACHMENT_INPUT
  BIGIN_GET_ATTACHMENTS: ZOHO_BIGIN_GET_ATTACHMENTS_INPUT
  BIGIN_GET_DELETED_RECORDS: ZOHO_BIGIN_GET_DELETED_RECORDS_INPUT
  BIGIN_GET_MODULES: ZOHO_BIGIN_GET_MODULES_INPUT
  BIGIN_GET_RECORDS: ZOHO_BIGIN_GET_RECORDS_INPUT
  BIGIN_UPDATE_RECORDS: ZOHO_BIGIN_UPDATE_RECORDS_INPUT
  BIGIN_UPLOAD_ATTACHMENT: ZOHO_BIGIN_UPLOAD_ATTACHMENT_INPUT
  CONVERT_ZOHO_LEAD: ZOHO_CONVERT_ZOHO_LEAD_INPUT
  CREATE_ZOHO_RECORD: ZOHO_CREATE_ZOHO_RECORD_INPUT
  CREATE_ZOHO_TAG: ZOHO_CREATE_ZOHO_TAG_INPUT
  GET_ZOHO_RECORDS: ZOHO_GET_ZOHO_RECORDS_INPUT
  INVOICE_GET_ITEM: ZOHO_INVOICE_GET_ITEM_INPUT
  INVOICE_LIST_CONTACTS: ZOHO_INVOICE_LIST_CONTACTS_INPUT
  INVOICE_LIST_EXPENSES: ZOHO_INVOICE_LIST_EXPENSES_INPUT
  INVOICE_LIST_INVOICES: ZOHO_INVOICE_LIST_INVOICES_INPUT
  INVOICE_LIST_ITEMS: ZOHO_INVOICE_LIST_ITEMS_INPUT
  INVOICE_LIST_PAYMENTS: ZOHO_INVOICE_LIST_PAYMENTS_INPUT
  UPDATE_RELATED_RECORDS: ZOHO_UPDATE_RELATED_RECORDS_INPUT
  UPDATE_ZOHO_RECORD: ZOHO_UPDATE_ZOHO_RECORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZOHO".
 */
export type ZOHO_TOOL_OUTPUTS = {
  BIGIN_ADD_RECORDS: ZOHO_BIGIN_ADD_RECORDS_OUTPUT
  BIGIN_ADD_TAGS_TO_RECORDS: ZOHO_BIGIN_ADD_TAGS_TO_RECORDS_OUTPUT
  BIGIN_CREATE_TAGS: ZOHO_BIGIN_CREATE_TAGS_OUTPUT
  BIGIN_DELETE_ATTACHMENT: ZOHO_BIGIN_DELETE_ATTACHMENT_OUTPUT
  BIGIN_DELETE_RECORDS: ZOHO_BIGIN_DELETE_RECORDS_OUTPUT
  BIGIN_DOWNLOAD_ATTACHMENT: ZOHO_BIGIN_DOWNLOAD_ATTACHMENT_OUTPUT
  BIGIN_GET_ATTACHMENTS: ZOHO_BIGIN_GET_ATTACHMENTS_OUTPUT
  BIGIN_GET_DELETED_RECORDS: ZOHO_BIGIN_GET_DELETED_RECORDS_OUTPUT
  BIGIN_GET_MODULES: ZOHO_BIGIN_GET_MODULES_OUTPUT
  BIGIN_GET_RECORDS: ZOHO_BIGIN_GET_RECORDS_OUTPUT
  BIGIN_UPDATE_RECORDS: ZOHO_BIGIN_UPDATE_RECORDS_OUTPUT
  BIGIN_UPLOAD_ATTACHMENT: ZOHO_BIGIN_UPLOAD_ATTACHMENT_OUTPUT
  CONVERT_ZOHO_LEAD: ZOHO_CONVERT_ZOHO_LEAD_OUTPUT
  CREATE_ZOHO_RECORD: ZOHO_CREATE_ZOHO_RECORD_OUTPUT
  CREATE_ZOHO_TAG: ZOHO_CREATE_ZOHO_TAG_OUTPUT
  GET_ZOHO_RECORDS: ZOHO_GET_ZOHO_RECORDS_OUTPUT
  INVOICE_GET_ITEM: ZOHO_INVOICE_GET_ITEM_OUTPUT
  INVOICE_LIST_CONTACTS: ZOHO_INVOICE_LIST_CONTACTS_OUTPUT
  INVOICE_LIST_EXPENSES: ZOHO_INVOICE_LIST_EXPENSES_OUTPUT
  INVOICE_LIST_INVOICES: ZOHO_INVOICE_LIST_INVOICES_OUTPUT
  INVOICE_LIST_ITEMS: ZOHO_INVOICE_LIST_ITEMS_OUTPUT
  INVOICE_LIST_PAYMENTS: ZOHO_INVOICE_LIST_PAYMENTS_OUTPUT
  UPDATE_RELATED_RECORDS: ZOHO_UPDATE_RELATED_RECORDS_OUTPUT
  UPDATE_ZOHO_RECORD: ZOHO_UPDATE_ZOHO_RECORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZOHO toolkit.
 */
export const ZOHO = {
  slug: "zoho",
  tools: {
    /**
     * Tool to add new records to a module. use when you need to programmatically insert one or more records into bigin after confirming module name and field api names. provide required fields per module (e.g., contacts requires last name).
     */
    BIGIN_ADD_RECORDS: "ZOHO_BIGIN_ADD_RECORDS",
    /**
     * Tool to add tags to a specific record in a module. use when you need to categorize or label a record after creation or update.
     */
    BIGIN_ADD_TAGS_TO_RECORDS: "ZOHO_BIGIN_ADD_TAGS_TO_RECORDS",
    /**
     * Tool to create tags for a module. use when you need to add new tags to a specific module in zoho bigin.
     */
    BIGIN_CREATE_TAGS: "ZOHO_BIGIN_CREATE_TAGS",
    /**
     * Tool to delete an attachment from a record. use when you need to remove a file after confirming its record id and attachment id.
     */
    BIGIN_DELETE_ATTACHMENT: "ZOHO_BIGIN_DELETE_ATTACHMENT",
    /**
     * Tool to delete records from a module. use when removing one or multiple records after confirming their ids.
     */
    BIGIN_DELETE_RECORDS: "ZOHO_BIGIN_DELETE_RECORDS",
    /**
     * Tool to download an attachment from a record. use when you need the binary content of a specific attachment after confirming the record and attachment ids.
     */
    BIGIN_DOWNLOAD_ATTACHMENT: "ZOHO_BIGIN_DOWNLOAD_ATTACHMENT",
    /**
     * Tool to retrieve attachments for a record. use when you need a paginated list of attachments for a given module record.
     */
    BIGIN_GET_ATTACHMENTS: "ZOHO_BIGIN_GET_ATTACHMENTS",
    /**
     * Tool to get a list of deleted records in a module. use when auditing or restoring recently deleted data (recycle within 60 days, permanent within 120 days).
     */
    BIGIN_GET_DELETED_RECORDS: "ZOHO_BIGIN_GET_DELETED_RECORDS",
    /**
     * Tool to retrieve a list of all modules. use when you need to discover which modules are available in bigin.
     */
    BIGIN_GET_MODULES: "ZOHO_BIGIN_GET_MODULES",
    /**
     * Tool to retrieve records from a bigin module. use when listing or querying module data with specific fields, sorting, filtering, and pagination.
     */
    BIGIN_GET_RECORDS: "ZOHO_BIGIN_GET_RECORDS",
    /**
     * Tool to update existing records in a module. use when you need to modify one or multiple records after confirming their ids and field api names. supports up to 100 records per call; specify an optional trigger to control workflow execution.
     */
    BIGIN_UPDATE_RECORDS: "ZOHO_BIGIN_UPDATE_RECORDS",
    /**
     * Tool to upload an attachment to a record. use when you need to attach a file or specify a public url for upload to a bigin record. ensure module api name and record id are correct before calling.
     */
    BIGIN_UPLOAD_ATTACHMENT: "ZOHO_BIGIN_UPLOAD_ATTACHMENT",
    /**
     * Converts a lead into a contact, account, and optionally a deal in zoho crm.
     */
    CONVERT_ZOHO_LEAD: "ZOHO_CONVERT_ZOHO_LEAD",
    /**
     * Creates new records in a specified module in zoho crm.
     */
    CREATE_ZOHO_RECORD: "ZOHO_CREATE_ZOHO_RECORD",
    /**
     * Creates new tags in zoho crm.
     */
    CREATE_ZOHO_TAG: "ZOHO_CREATE_ZOHO_TAG",
    /**
     * Retrieves records from a specified module in zoho crm.
     */
    GET_ZOHO_RECORDS: "ZOHO_GET_ZOHO_RECORDS",
    /**
     * Tool to retrieve the details of a specific item by item id. use when you need to fetch an item's data after confirming its existence.
     */
    INVOICE_GET_ITEM: "ZOHO_INVOICE_GET_ITEM",
    /**
     * Tool to list contacts. use after obtaining the organization id to retrieve contacts with optional filters and pagination.
     */
    INVOICE_LIST_CONTACTS: "ZOHO_INVOICE_LIST_CONTACTS",
    /**
     * Tool to list all expenses with optional pagination. use when you need to retrieve expenses with simple pagination.
     */
    INVOICE_LIST_EXPENSES: "ZOHO_INVOICE_LIST_EXPENSES",
    /**
     * Tool to list invoices. use when you need to retrieve all invoices with optional filters and pagination.
     */
    INVOICE_LIST_INVOICES: "ZOHO_INVOICE_LIST_INVOICES",
    /**
     * Tool to list all items. use when you need to retrieve your item catalog with optional pagination and filtering after specifying the organization id.
     */
    INVOICE_LIST_ITEMS: "ZOHO_INVOICE_LIST_ITEMS",
    /**
     * Tool to list payments. use when you need to retrieve all payments with optional filters like customer, invoice, date range, and pagination.
     */
    INVOICE_LIST_PAYMENTS: "ZOHO_INVOICE_LIST_PAYMENTS",
    /**
     * Associates or updates relationships between records across different modules in zoho crm.
     */
    UPDATE_RELATED_RECORDS: "ZOHO_UPDATE_RELATED_RECORDS",
    /**
     * Updates existing records in a specified module in zoho crm.
     */
    UPDATE_ZOHO_RECORD: "ZOHO_UPDATE_ZOHO_RECORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZOHO".
 */
export type ZOHO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZOHO".
 */
export type ZOHO_TRIGGER_EVENTS = {}
