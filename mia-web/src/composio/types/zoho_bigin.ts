// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_ADD_RECORDS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_ADD_RECORDS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_ADD_TAGS_TO_RECORDS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_ADD_TAGS_TO_RECORDS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_CREATE_TAGS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_CREATE_TAGS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_DELETE_ATTACHMENT tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_DELETE_ATTACHMENT tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_DELETE_RECORDS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_DELETE_RECORDS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_DOWNLOAD_ATTACHMENT tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_DOWNLOAD_ATTACHMENT tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_ATTACHMENTS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_ATTACHMENTS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_DELETED_RECORDS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_DELETED_RECORDS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_MODULES tool input.
 */
type ZOHO_BIGIN_GET_MODULES_INPUT = object;

/**
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_MODULES tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_RECORDS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_GET_RECORDS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_UPDATE_RECORDS tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_UPDATE_RECORDS tool output.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_UPLOAD_ATTACHMENT tool input.
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
 * Type of ZOHO_BIGIN's ZOHO_BIGIN_UPLOAD_ATTACHMENT tool output.
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
 * Type map of all available tool input types for toolkit "ZOHO_BIGIN".
 */
export type ZOHO_BIGIN_TOOL_INPUTS = {
  ADD_RECORDS: ZOHO_BIGIN_ADD_RECORDS_INPUT
  ADD_TAGS_TO_RECORDS: ZOHO_BIGIN_ADD_TAGS_TO_RECORDS_INPUT
  CREATE_TAGS: ZOHO_BIGIN_CREATE_TAGS_INPUT
  DELETE_ATTACHMENT: ZOHO_BIGIN_DELETE_ATTACHMENT_INPUT
  DELETE_RECORDS: ZOHO_BIGIN_DELETE_RECORDS_INPUT
  DOWNLOAD_ATTACHMENT: ZOHO_BIGIN_DOWNLOAD_ATTACHMENT_INPUT
  GET_ATTACHMENTS: ZOHO_BIGIN_GET_ATTACHMENTS_INPUT
  GET_DELETED_RECORDS: ZOHO_BIGIN_GET_DELETED_RECORDS_INPUT
  GET_MODULES: ZOHO_BIGIN_GET_MODULES_INPUT
  GET_RECORDS: ZOHO_BIGIN_GET_RECORDS_INPUT
  UPDATE_RECORDS: ZOHO_BIGIN_UPDATE_RECORDS_INPUT
  UPLOAD_ATTACHMENT: ZOHO_BIGIN_UPLOAD_ATTACHMENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZOHO_BIGIN".
 */
export type ZOHO_BIGIN_TOOL_OUTPUTS = {
  ADD_RECORDS: ZOHO_BIGIN_ADD_RECORDS_OUTPUT
  ADD_TAGS_TO_RECORDS: ZOHO_BIGIN_ADD_TAGS_TO_RECORDS_OUTPUT
  CREATE_TAGS: ZOHO_BIGIN_CREATE_TAGS_OUTPUT
  DELETE_ATTACHMENT: ZOHO_BIGIN_DELETE_ATTACHMENT_OUTPUT
  DELETE_RECORDS: ZOHO_BIGIN_DELETE_RECORDS_OUTPUT
  DOWNLOAD_ATTACHMENT: ZOHO_BIGIN_DOWNLOAD_ATTACHMENT_OUTPUT
  GET_ATTACHMENTS: ZOHO_BIGIN_GET_ATTACHMENTS_OUTPUT
  GET_DELETED_RECORDS: ZOHO_BIGIN_GET_DELETED_RECORDS_OUTPUT
  GET_MODULES: ZOHO_BIGIN_GET_MODULES_OUTPUT
  GET_RECORDS: ZOHO_BIGIN_GET_RECORDS_OUTPUT
  UPDATE_RECORDS: ZOHO_BIGIN_UPDATE_RECORDS_OUTPUT
  UPLOAD_ATTACHMENT: ZOHO_BIGIN_UPLOAD_ATTACHMENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZOHO_BIGIN toolkit.
 */
export const ZOHO_BIGIN = {
  slug: "zoho_bigin",
  tools: {
    /**
     * Tool to add new records to a module. use when you need to programmatically insert one or more records into bigin after confirming module name and field api names. provide required fields per module (e.g., contacts requires last name).
     */
    ADD_RECORDS: "ZOHO_BIGIN_ADD_RECORDS",
    /**
     * Tool to add tags to a specific record in a module. use when you need to categorize or label a record after creation or update.
     */
    ADD_TAGS_TO_RECORDS: "ZOHO_BIGIN_ADD_TAGS_TO_RECORDS",
    /**
     * Tool to create tags for a module. use when you need to add new tags to a specific module in zoho bigin.
     */
    CREATE_TAGS: "ZOHO_BIGIN_CREATE_TAGS",
    /**
     * Tool to delete an attachment from a record. use when you need to remove a file after confirming its record id and attachment id.
     */
    DELETE_ATTACHMENT: "ZOHO_BIGIN_DELETE_ATTACHMENT",
    /**
     * Tool to delete records from a module. use when removing one or multiple records after confirming their ids.
     */
    DELETE_RECORDS: "ZOHO_BIGIN_DELETE_RECORDS",
    /**
     * Tool to download an attachment from a record. use when you need the binary content of a specific attachment after confirming the record and attachment ids.
     */
    DOWNLOAD_ATTACHMENT: "ZOHO_BIGIN_DOWNLOAD_ATTACHMENT",
    /**
     * Tool to retrieve attachments for a record. use when you need a paginated list of attachments for a given module record.
     */
    GET_ATTACHMENTS: "ZOHO_BIGIN_GET_ATTACHMENTS",
    /**
     * Tool to get a list of deleted records in a module. use when auditing or restoring recently deleted data (recycle within 60 days, permanent within 120 days).
     */
    GET_DELETED_RECORDS: "ZOHO_BIGIN_GET_DELETED_RECORDS",
    /**
     * Tool to retrieve a list of all modules. use when you need to discover which modules are available in bigin.
     */
    GET_MODULES: "ZOHO_BIGIN_GET_MODULES",
    /**
     * Tool to retrieve records from a bigin module. use when listing or querying module data with specific fields, sorting, filtering, and pagination.
     */
    GET_RECORDS: "ZOHO_BIGIN_GET_RECORDS",
    /**
     * Tool to update existing records in a module. use when you need to modify one or multiple records after confirming their ids and field api names. supports up to 100 records per call; specify an optional trigger to control workflow execution.
     */
    UPDATE_RECORDS: "ZOHO_BIGIN_UPDATE_RECORDS",
    /**
     * Tool to upload an attachment to a record. use when you need to attach a file or specify a public url for upload to a bigin record. ensure module api name and record id are correct before calling.
     */
    UPLOAD_ATTACHMENT: "ZOHO_BIGIN_UPLOAD_ATTACHMENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZOHO_BIGIN".
 */
export type ZOHO_BIGIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZOHO_BIGIN".
 */
export type ZOHO_BIGIN_TRIGGER_EVENTS = {}
