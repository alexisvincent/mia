import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ONE_DRIVE's ONE_DRIVE_COPY_ITEM tool input.
 */
type ONE_DRIVE_COPY_ITEM_INPUT = {
  /**
   * @Microsoft.Graph.Conflict Behavior
   * @description Specifies how to handle a naming conflict if an item with the same name already exists in the destination. 'fail' (default), 'replace', or 'rename'.
   * @default fail
   * @enum {string|null}
   */
  "@microsoft.graph.conflictBehavior": "fail" | "replace" | "rename" | null;
  /**
   * Children Only
   * @description If set to true, only the children of the source driveItem (if it's a folder) are copied, not the driveItem itself. Defaults to false.
   * @default false
   */
  children_only: boolean | null;
  /**
   * Drive Id
   * @description The ID of the drive where the item is located. If not provided, 'me' (user's default drive) is assumed.
   * @default null
   */
  drive_id: string | null;
  /**
   * Group Id
   * @description The ID of the group if the item is in a group drive.
   * @default null
   */
  group_id: string | null;
  /**
   * Include All Version History
   * @description If set to true, the version history of the source file is copied to the destination. Defaults to false.
   * @default false
   */
  include_all_version_history: boolean | null;
  /**
   * Item Id
   * @description The ID of the DriveItem to be copied.
   */
  item_id?: string;
  /**
   * Name
   * @description The new name for the copied item. If not provided, the original name is used.
   * @default null
   */
  name: string | null;
  /**
   * CopyItemParentReference
   * @description Reference to the parent item (folder) where the copy will be created. If not provided, the item is copied to the same folder as the original.
   * @default null
   */
  parent_reference: {
      /**
       * Drive Id
       * @description The ID of the drive that contains the parent item.
       * @default null
       */
      driveId: string | null;
      /**
       * Id
       * @description The ID of the parent item.
       * @default null
       */
      id: string | null;
  } | null;
  /**
   * Site Id
   * @description The ID of the site if the item is in a SharePoint site.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The ID of the user if accessing another user's drive.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_COPY_ITEM tool output.
 */
type ONE_DRIVE_COPY_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Item Id
       * @description ID of the copied item, available when the operation completes synchronously (rare for copy).
       * @default null
       */
      item_id: string | null;
      /**
       * Message
       * @description A message indicating the result of the request.
       */
      message: string;
      /**
       * Monitor Url
       * @description The URL to track the progress of the asynchronous copy operation.
       * @default null
       */
      monitor_url: string | null;
      /**
       * Name
       * @description Name of the copied item.
       * @default null
       */
      name: string | null;
      /**
       * Status Code
       * @description The HTTP status code of the initial request.
       */
      status_code: number;
      /**
       * Web Url
       * @description URL to access the item over the web.
       * @default null
       */
      web_url: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_CREATE_LINK tool input.
 */
type ONE_DRIVE_CREATE_LINK_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the drive. If not provided, the link will be created in the current user's drive (me/drive).
   * @default null
   */
  drive_id: string | null;
  /**
   * Expiration Date Time
   * @description The expiration date and time for the permission, in yyyy-MM-ddTHH:mm:ssZ format. Example: 2023-12-31T23:59:59Z
   * @default null
   */
  expiration_date_time: string | null;
  /**
   * Group Id
   * @description The unique identifier of the group. Use this if the item is in a group's drive.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the drive item (file or folder) for which to create the link.
   */
  item_id?: string;
  /**
   * Password
   * @description The password for the sharing link. Optional and OneDrive Personal only.
   * @default null
   */
  password: string | null;
  /**
   * Retain Inherited Permissions
   * @description If true (default), existing inherited permissions are retained. If false, all existing permissions are removed when sharing for the first time.
   * @default null
   */
  retain_inherited_permissions: boolean | null;
  /**
   * Scope
   * @description The scope of the link to create. If not specified, the default link type for the organization is created.
   * @default null
   * @enum {string|null}
   */
  scope: "anonymous" | "organization" | "users" | null;
  /**
   * Site Id
   * @description The unique identifier of the site. Use this if the item is in a SharePoint site's drive.
   * @default null
   */
  site_id: string | null;
  /**
   * Type
   * @description The type of sharing link to create.
   * @enum {string}
   */
  type?: "view" | "edit" | "embed";
  /**
   * User Id
   * @description The unique identifier of the user. Use this if the item is in another user's drive.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_CREATE_LINK tool output.
 */
type ONE_DRIVE_CREATE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Password
       * @description Indicates whether the link has a password.
       * @default null
       */
      hasPassword: boolean | null;
      /**
       * Id
       * @description The unique identifier of the permission resource.
       */
      id: string;
      /**
       * LinkDetails
       * @description Details about the sharing link.
       * @default null
       */
      link: {
          /**
           * Application
           * @description Details of the application that created the link.
           * @default null
           */
          application: {
              [key: string]: string;
          } | null;
          /**
           * Scope
           * @description The scope of the link.
           * @default null
           */
          scope: string | null;
          /**
           * Type
           * @description The type of the link.
           * @default null
           */
          type: string | null;
          /**
           * Web Html
           * @description The HTML code for an iframe to host the content (for 'embed' links).
           * @default null
           */
          webHtml: string | null;
          /**
           * Web Url
           * @description The URL of the sharing link.
           * @default null
           */
          webUrl: string | null;
      } | null;
      /**
       * Roles
       * @description The roles granted by this permission.
       * @default null
       */
      roles: string[] | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_DELETE_ITEM tool input.
 */
type ONE_DRIVE_DELETE_ITEM_INPUT = {
  /**
   * If Match
   * @description (Optional) If this request header is included and the eTag (or cTag) provided doesn't match the current tag on the item, a `412 Precondition Failed` response is returned, and the item won't be deleted.
   * @default null
   */
  if_match: string | null;
  /**
   * Item Id
   * @description The unique identifier of the DriveItem (file or folder) to be deleted.
   */
  item_id?: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_DELETE_ITEM tool output.
 */
type ONE_DRIVE_DELETE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the deletion operation.
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
 * Type of ONE_DRIVE's ONE_DRIVE_DOWNLOAD_FILE tool input.
 */
type ONE_DRIVE_DOWNLOAD_FILE_INPUT = {
  /**
   * File Name
   * @description Desired filename (including extension) for the downloaded content.
   */
  file_name?: string;
  /**
   * Item Id
   * @description Unique ID of the file to download; must be a file, not a folder.
   */
  item_id?: string;
  /**
   * User Id
   * @description User's ID or User Principal Name (UPN), or 'me' for the authenticated user's OneDrive.
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_DOWNLOAD_FILE tool output.
 */
type ONE_DRIVE_DOWNLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded file content as a `FileDownloadable` object.
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_DRIVE tool input.
 */
type ONE_DRIVE_GET_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the drive. This can be the ID of the user's personal OneDrive, a group's document library, or a specific drive ID.
   */
  drive_id?: string;
  /**
   * Select Fields
   * @description A comma-separated list of properties to include in the response. Use this to retrieve specific fields and reduce the response size. For example, "id,name,driveType". If not provided, all default properties are returned.
   * @default null
   */
  select_fields: string[] | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_DRIVE tool output.
 */
type ONE_DRIVE_GET_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * IdentitySet
       * @description Identity of the user, application, or device that created the item. Read-only.
       * @default null
       */
      createdBy: {
          /**
           * Identity
           * @description Optional. The application associated with this action.
           * @default null
           */
          application: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The device associated with this action.
           * @default null
           */
          device: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The group associated with this action.
           * @default null
           */
          group: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The user associated with this action.
           * @default null
           */
          user: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
      } | null;
      /**
       * Created Date Time
       * @description Date and time of drive creation. Read-only.
       * @default null
       */
      createdDateTime: string | null;
      /**
       * Description
       * @description Optional. The user-visible description of the drive. Read-write.
       * @default null
       */
      description: string | null;
      /**
       * Drive Alias
       * @description The drive alias, if the drive is accessed via an alias.
       * @default null
       */
      driveAlias: string | null;
      /**
       * Drive Type
       * @description The type of drive. Possible values are: personal, business, documentLibrary.
       * @default null
       */
      driveType: string | null;
      /**
       * Followed
       * @description The list of items that are followed by the owner of the drive.
       * @default null
       */
      followed: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Id
       * @description The unique identifier of the drive.
       * @default null
       */
      id: string | null;
      /**
       * Items
       * @description All items contained in the drive.
       * @default null
       */
      items: {
          [key: string]: unknown;
      }[] | null;
      /**
       * IdentitySet
       * @description Identity of the user, application, or device that last modified the item. Read-only.
       * @default null
       */
      lastModifiedBy: {
          /**
           * Identity
           * @description Optional. The application associated with this action.
           * @default null
           */
          application: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The device associated with this action.
           * @default null
           */
          device: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The group associated with this action.
           * @default null
           */
          group: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The user associated with this action.
           * @default null
           */
          user: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
      } | null;
      /**
       * Last Modified Date Time
       * @description Date and time the drive was last modified. Read-only.
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * List
       * @description For drives in SharePoint, the underlying document library list.
       * @default null
       */
      list: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description The name of the drive.
       * @default null
       */
      name: string | null;
      /**
       * IdentitySet
       * @description Optional. The owner of the drive.
       * @default null
       */
      owner: {
          /**
           * Identity
           * @description Optional. The application associated with this action.
           * @default null
           */
          application: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The device associated with this action.
           * @default null
           */
          device: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The group associated with this action.
           * @default null
           */
          group: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Identity
           * @description Optional. The user associated with this action.
           * @default null
           */
          user: {
              /**
               * Display Name
               * @default null
               */
              displayName: string | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
          } | null;
      } | null;
      /**
       * Quota
       * @description Optional. Information about the drive's storage space quota.
       * @default null
       */
      quota: {
          /**
           * Deleted
           * @description Total space consumed by items in the recycle bin, in bytes.
           * @default null
           */
          deleted: number | null;
          /**
           * Remaining
           * @description Total space remaining on the drive, in bytes.
           * @default null
           */
          remaining: number | null;
          /**
           * State
           * @description Enumeration that indicates the state of the storage space. Returned values are: normal, nearing, critical, exceeded.
           * @default null
           */
          state: string | null;
          /**
           * Total
           * @description Total allowed storage space, in bytes.
           * @default null
           */
          total: number | null;
          /**
           * Used
           * @description Total space used, in bytes.
           * @default null
           */
          used: number | null;
      } | null;
      /**
       * Root
       * @description The root folder of the drive.
       * @default null
       */
      root: {
          [key: string]: unknown;
      } | null;
      /**
       * SharePointIds
       * @description Returns identifiers useful for SharePoint REST compatibility. Read-only.
       * @default null
       */
      sharePointIds: {
          /**
           * List Id
           * @description The unique identifier (guid) for the item's list in SharePoint.
           * @default null
           */
          listId: string | null;
          /**
           * List Item Id
           * @description An integer identifier for the item within the containing list.
           * @default null
           */
          listItemId: string | null;
          /**
           * List Item Unique Id
           * @description The unique identifier (guid) for the item within OneDrive for Business or a SharePoint document library.
           * @default null
           */
          listItemUniqueId: string | null;
          /**
           * Site Id
           * @description The unique identifier (guid) for the item's site collection (SPSite).
           * @default null
           */
          siteId: string | null;
          /**
           * Site Url
           * @description The SharePoint URL for the site that contains the item.
           * @default null
           */
          siteUrl: string | null;
          /**
           * Tenant Id
           * @description The unique identifier (guid) for the tenancy.
           * @default null
           */
          tenantId: string | null;
          /**
           * Web Id
           * @description The unique identifier (guid) for the item's site (SPWeb).
           * @default null
           */
          webId: string | null;
      } | null;
      /**
       * Special
       * @description Collection of common folders available in OneDrive.
       * @default null
       */
      special: {
          [key: string]: unknown;
      }[] | null;
      /**
       * System
       * @description If present, indicates that this is a system-managed drive. Read-only.
       * @default null
       */
      system: {
          [key: string]: unknown;
      } | null;
      /**
       * Web Url
       * @description URL that displays the drive specific information. The drive reflects the content of a drive object. Read-only.
       * @default null
       */
      webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM tool input.
 */
type ONE_DRIVE_GET_ITEM_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the Drive where the item is located. If not provided, the action will target the user's personal OneDrive (me/drive).
   * @default null
   */
  drive_id: string | null;
  /**
   * Expand Relations
   * @description A list of relationships to expand in the response, such as 'children'.
   * @default null
   */
  expand_relations: string[] | null;
  /**
   * Item Id
   * @description The unique identifier of the DriveItem (file or folder).
   */
  item_id?: string;
  /**
   * Select Fields
   * @description A list of DriveItem properties to return. If not specified, a default set of properties is returned. Refer to the DriveItem resource documentation for available fields.
   * @default null
   */
  select_fields: string[] | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM tool output.
 */
type ONE_DRIVE_GET_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * C Tag
       * @description Content tag.
       * @default null
       */
      cTag: string | null;
      /**
       * Children
       * @description Children of the item, if expanded, as a list of DriveItem-like dict objects.
       * @default null
       */
      children: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Created By
       * @description Information about the user who created the item as a dict.
       * @default null
       */
      createdBy: {
          [key: string]: unknown;
      } | null;
      /**
       * Created Date Time
       * @description The date and time the item was created.
       * @default null
       */
      createdDateTime: string | null;
      /**
       * E Tag
       * @description Entity tag.
       * @default null
       */
      eTag: string | null;
      /**
       * File
       * @description If the item is a file, this contains file-specific metadata as a dict.
       * @default null
       */
      file: {
          [key: string]: unknown;
      } | null;
      /**
       * Folder
       * @description If the item is a folder, this contains folder-specific metadata as a dict (e.g., childCount).
       * @default null
       */
      folder: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique ID of the item.
       */
      id: string;
      /**
       * Last Modified By
       * @description Information about the user who last modified the item as a dict.
       * @default null
       */
      lastModifiedBy: {
          [key: string]: unknown;
      } | null;
      /**
       * Last Modified Date Time
       * @description The date and time the item was last modified.
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * Name
       * @description The name of the item.
       */
      name: string;
      /**
       * Size
       * @description The size of the item in bytes.
       * @default null
       */
      size: number | null;
      /**
       * Web Url
       * @description URL to view the item in a browser.
       * @default null
       */
      webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM_PERMISSIONS tool input.
 */
type ONE_DRIVE_GET_ITEM_PERMISSIONS_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the drive. Required if not using other identifiers like group_id, site_id, or user_id in the path.
   * @default null
   */
  drive_id: string | null;
  /**
   * Group Id
   * @description The unique identifier of a group. Use this if the item is in a group's drive.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the drive item.
   */
  item_id?: string;
  /**
   * Item Path
   * @description The path to the item relative to the drive's root. Use this if item_id is not known. Must start with ':/' and end with ':/'. Example: ':/FolderA/FileB.txt:/'. Only applicable when accessing items in the current user's drive (me/drive/root).
   * @default null
   */
  item_path: string | null;
  /**
   * Select
   * @description A comma-separated list of properties to include in the response. For example, 'id,roles,link'.
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The unique identifier of a SharePoint site. Use this if the item is in a SharePoint site's drive.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The unique identifier of a user. Use this if the item is in a specific user's drive (other than 'me').
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM_PERMISSIONS tool output.
 */
type ONE_DRIVE_GET_ITEM_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of permissions, if any.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of permission resources.
       */
      value: {
          /**
           * Expiration Date Time
           * @description The expiration date and time for the permission.
           * @default null
           */
          expirationDateTime: string | null;
          /**
           * GrantedTo
           * @description Legacy. Information about the identity to whom the permission is granted. Use grantedToV2 instead.
           * @default null
           */
          grantedTo: {
              /**
               * GrantedToIdentifier
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @default null
               */
              group: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @description Represents a user in a SharePoint site.
               * @default null
               */
              siteUser: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
          } | null;
          /**
           * GrantedTo
           * @description Information about the identity to whom the permission is granted.
           * @default null
           */
          grantedToV2: {
              /**
               * GrantedToIdentifier
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @default null
               */
              group: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @description Represents a user in a SharePoint site.
               * @default null
               */
              siteUser: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
              /**
               * GrantedToIdentifier
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the identity.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the identity.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  loginName: string | null;
              } | null;
          } | null;
          /**
           * Has Password
           * @description Indicates whether the sharing link has a password.
           * @default null
           */
          hasPassword: boolean | null;
          /**
           * Id
           * @description The unique identifier of the permission.
           */
          id: string;
          /**
           * ItemReference
           * @description Details of the parent item from which the permission is inherited, if applicable.
           * @default null
           */
          inheritedFrom: {
              /**
               * Drive Id
               * @description Unique identifier of the drive instance that contains the item.
               * @default null
               */
              driveId: string | null;
              /**
               * Id
               * @description Unique identifier of the item in the drive.
               * @default null
               */
              id: string | null;
              /**
               * Path
               * @description Path that can be used to navigate to the item.
               * @default null
               */
              path: string | null;
          } | null;
          /**
           * Invitation
           * @description Details about the invitation status for the permission. Typically contains email and signInRequired status.
           * @default null
           */
          invitation: {
              [key: string]: string;
          } | null;
          /**
           * PermissionLink
           * @description Details of the sharing link, if applicable.
           * @default null
           */
          link: {
              /**
               * ApplicationIdentity
               * @description Details of the application that created the link.
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @description The display name of the application.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the application.
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Type
               * @description The type of link (e.g., 'view', 'edit').
               * @default null
               */
              type: string | null;
              /**
               * Web Url
               * @description The URL to access the item via the link.
               * @default null
               */
              webUrl: string | null;
          } | null;
          /**
           * Roles
           * @description The roles granted by this permission (e.g., 'read', 'write').
           */
          roles: string[];
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM_THUMBNAILS tool input.
 */
type ONE_DRIVE_GET_ITEM_THUMBNAILS_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the Drive. If not provided, 'me' will be used for the current user's drive.
   * @default null
   */
  drive_id: string | null;
  /**
   * Group Id
   * @description The unique identifier of a Group. Provide either drive_id, group_id, site_id, or user_id.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the DriveItem.
   */
  item_id?: string;
  /**
   * Original Orientation
   * @description If true, retrieves the thumbnail with its original EXIF orientation. This is only supported on OneDrive Personal. Defaults to false.
   * @default false
   */
  original_orientation: boolean | null;
  /**
   * Select
   * @description A comma-separated list of thumbnail sizes to retrieve (e.g., "small,medium,large", or "c300x400_crop"). If not specified, all available thumbnails for the first thumbnailSet (id: "0") are returned.
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The unique identifier of a Site. Provide either drive_id, group_id, site_id, or user_id.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The unique identifier of a User. Provide either drive_id, group_id, site_id, or user_id.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM_THUMBNAILS tool output.
 */
type ONE_DRIVE_GET_ITEM_THUMBNAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A collection of ThumbnailSet objects.
       */
      value: ({
          /**
           * Custom Thumbnails
           * @default null
           */
          customThumbnails: {
              [key: string]: {
                  /**
                   * Height
                   * @description The height of the thumbnail in pixels.
                   * @default null
                   */
                  height: number | null;
                  /**
                   * Url
                   * @description The URL to the thumbnail image.
                   * @default null
                   */
                  url: string | null;
                  /**
                   * Width
                   * @description The width of the thumbnail in pixels.
                   * @default null
                   */
                  width: number | null;
              };
          } | null;
          /**
           * Id
           * @description The unique identifier of the thumbnail set.
           * @default null
           */
          id: string | null;
          /**
           * Thumbnail
           * @description Large thumbnail.
           * @default null
           */
          large: {
              /**
               * Height
               * @description The height of the thumbnail in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description The URL to the thumbnail image.
               * @default null
               */
              url: string | null;
              /**
               * Width
               * @description The width of the thumbnail in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Thumbnail
           * @description Medium thumbnail.
           * @default null
           */
          medium: {
              /**
               * Height
               * @description The height of the thumbnail in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description The URL to the thumbnail image.
               * @default null
               */
              url: string | null;
              /**
               * Width
               * @description The width of the thumbnail in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Thumbnail
           * @description Small thumbnail.
           * @default null
           */
          small: {
              /**
               * Height
               * @description The height of the thumbnail in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Url
               * @description The URL to the thumbnail image.
               * @default null
               */
              url: string | null;
              /**
               * Width
               * @description The width of the thumbnail in pixels.
               * @default null
               */
              width: number | null;
          } | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM_VERSIONS tool input.
 */
type ONE_DRIVE_GET_ITEM_VERSIONS_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the drive. Mutually exclusive with group_id, site_id, and user_id. One of these must be provided if not using the /me path.
   * @default null
   */
  drive_id: string | null;
  /**
   * Group Id
   * @description The unique identifier of the group. Mutually exclusive with drive_id, site_id, and user_id.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the item (file or folder).
   */
  item_id?: string;
  /**
   * Site Id
   * @description The unique identifier of the site. Mutually exclusive with drive_id, group_id, and user_id.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The unique identifier of the user. Mutually exclusive with drive_id, group_id, and site_id.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_ITEM_VERSIONS tool output.
 */
type ONE_DRIVE_GET_ITEM_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A collection of DriveItemVersion objects.
       */
      value: {
          /**
           * Content
           * @description Contains a @microsoft.graph.downloadUrl property with the URL to download the content of this version.
           * @default null
           */
          content: {
              /**
               * @Microsoft.Graph.Download Url
               * @description A URL to download the content of this version.
               * @default null
               */
              "@microsoft.graph.downloadUrl": string | null;
          } | null;
          /**
           * Id
           * @description The ID of the version.
           */
          id: string;
          /**
           * LastModifiedBy
           * @description Information about the user who last modified this version.
           * @default null
           */
          lastModifiedBy: {
              /**
               * User
               * @description Information about the user who last modified this version.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The user's display name.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @description The user's ID.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Last Modified Date Time
           * @description The date and time the version was last modified (ISO 8601 format).
           */
          lastModifiedDateTime: string;
          /**
           * Publication
           * @description Information about the publication status of the version.
           * @default null
           */
          publication: Record<string, never> | null;
          /**
           * Size
           * @description The size of the version in bytes.
           * @default null
           */
          size: number | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_QUOTA tool input.
 */
type ONE_DRIVE_GET_QUOTA_INPUT = object;

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_QUOTA tool output.
 */
type ONE_DRIVE_GET_QUOTA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drive Type
       * @description Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary.
       * @default null
       */
      driveType: string | null;
      /**
       * Id
       * @description The unique identifier of the drive.
       * @default null
       */
      id: string | null;
      /**
       * Quota
       * @description The quota information for the drive.
       * @default null
       */
      quota: {
          /**
           * Deleted
           * @description Total space consumed by items in the recycle bin, in bytes.
           * @default null
           */
          deleted: number | null;
          /**
           * Remaining
           * @description Total space remaining before reaching the quota limit, in bytes.
           * @default null
           */
          remaining: number | null;
          /**
           * State
           * @description Enumeration that indicates the state of the storage space. Can be 'normal', 'nearing', 'critical', 'exceeded'.
           * @default null
           */
          state: string | null;
          /**
           * StoragePlanInformation
           * @description Information about the storage plan.
           * @default null
           */
          storagePlanInformation: {
              /**
               * Upgrade Available
               * @description Indicates if a storage upgrade is available.
               * @default null
               */
              upgradeAvailable: boolean | null;
          } | null;
          /**
           * Total
           * @description Total allowed storage space, in bytes.
           * @default null
           */
          total: number | null;
          /**
           * Used
           * @description Total space used, in bytes.
           * @default null
           */
          used: number | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_RECENT_ITEMS tool input.
 */
type ONE_DRIVE_GET_RECENT_ITEMS_INPUT = object;

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_RECENT_ITEMS tool output.
 */
type ONE_DRIVE_GET_RECENT_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A list of recently accessed items.
       */
      value: {
          /**
           * File
           * @description An object indicating that the item is a file. Empty if it's a folder.
           * @default null
           */
          file: {
              [key: string]: unknown;
          } | null;
          /**
           * FileSystemInfo
           * @description Contains filesystem-related information.
           * @default null
           */
          fileSystemInfo: {
              /**
               * Last Accessed Date Time
               * Format: date-time
               * @description The timestamp of when the item was last accessed.
               * @default null
               */
              lastAccessedDateTime: string | null;
          } | null;
          /**
           * Id
           * @description The unique identifier of the item.
           */
          id: string;
          /**
           * Name
           * @description The name of the item.
           * @default null
           */
          name: string | null;
          /**
           * ParentReference
           * @description Contains information about the parent of the item.
           * @default null
           */
          parentReference: {
              /**
               * Drive Id
               * @description The unique identifier of the drive where the item is located.
               * @default null
               */
              driveId: string | null;
              /**
               * Id
               * @description The unique identifier of the parent folder.
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * RemoteItem
           * @description If present, indicates that the item is located in a different drive than the one primarily associated with the user.
           * @default null
           */
          remoteItem: {
              /**
               * File
               * @description An object indicating that the item is a file. Empty if it's a folder.
               * @default null
               */
              file: {
                  [key: string]: unknown;
              } | null;
              /**
               * Id
               * @description The unique identifier of the remote item.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description The name of the remote item.
               * @default null
               */
              name: string | null;
              /**
               * ParentReference
               * @description Contains information about the parent of the remote item.
               * @default null
               */
              parentReference: {
                  /**
                   * Drive Id
                   * @description The unique identifier of the drive where the item is located.
                   * @default null
                   */
                  driveId: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the parent folder.
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Size
               * @description The size of the remote item in bytes.
               * @default null
               */
              size: number | null;
          } | null;
          /**
           * Size
           * @description The size of the item in bytes.
           * @default null
           */
          size: number | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SHARED_ITEMS tool input.
 */
type ONE_DRIVE_GET_SHARED_ITEMS_INPUT = {
  /**
   * Allow External
   * @description Set to true to include items shared from external tenants. Defaults to false, which only returns items shared within the user's own tenant.
   * @default false
   */
  allow_external: boolean | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SHARED_ITEMS tool output.
 */
type ONE_DRIVE_GET_SHARED_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A collection of driveItem objects representing shared items.
       * @default []
       */
      value: {
          /**
           * Id
           * @description The ID of the shared item in the current user's drive.
           */
          id: string;
          /**
           * Remote Item
           * @description Details about the original item from the sharer's drive.
           */
          remote_item: {
              /**
               * File
               * @description An object indicating it's a file (if applicable).
               * @default null
               */
              file: {
                  [key: string]: unknown;
              } | null;
              /**
               * Id
               * @description The unique identifier of the item in the sharer's drive.
               */
              id: string;
              /**
               * Name
               * @description The name of the shared file or folder.
               */
              name: string;
              /**
               * Parent Reference
               * @description An object containing driveId and id of the parent folder in the sharer's drive.
               * @default null
               */
              parent_reference: {
                  [key: string]: unknown;
              } | null;
              /**
               * Size
               * @description The size of the file in bytes.
               * @default null
               */
              size: number | null;
          };
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS tool input.
 */
type ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS_INPUT = {
  /**
   * Expand
   * @description A comma-separated list of relationships to expand, or 'fields(select=columnName1,columnName2)' to retrieve specific fields. For example, to get specific columns 'Name' and 'Color', use 'fields(select=Name,Color)'.
   * @default null
   */
  expand: string | null;
  /**
   * Filter
   * @description An OData filter query to restrict the results. For example, to filter items where 'Quantity' is less than 600, use 'fields/Quantity lt 600'.
   * @default null
   */
  filter: string | null;
  /**
   * List Id
   * @description The unique identifier of the list within the SharePoint site.
   */
  list_id?: string;
  /**
   * Select
   * @description A comma-separated list of properties to include in the response. Often used in conjunction with '$expand=fields(select=...)'. For example, 'id,name,fields'.
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site.
   */
  site_id?: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS tool output.
 */
type ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of items, if applicable.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of listItem objects.
       */
      value: {
          /**
           * Fields
           * @description An object containing the key-value pairs of the list item's columns and their values. Supports common primitive types.
           * @default null
           */
          fields: {
              [key: string]: string | number | boolean | null;
          } | null;
          /**
           * Id
           * @description The unique ID of the list item.
           */
          id: string;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SITE_DETAILS tool input.
 */
type ONE_DRIVE_GET_SITE_DETAILS_INPUT = {
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site. This is the id property of the site resource.
   */
  site_id?: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SITE_DETAILS tool output.
 */
type ONE_DRIVE_GET_SITE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Date Time
       * Format: date-time
       * @description The date and time the site was created, in UTC.
       * @default null
       */
      createdDateTime: string | null;
      /**
       * Display Name
       * @description The display name of the site.
       * @default null
       */
      displayName: string | null;
      /**
       * Id
       * @description The unique identifier of the site.
       */
      id: string;
      /**
       * Is Personal Site
       * @description Indicates if the site is a personal site.
       * @default null
       */
      isPersonalSite: boolean | null;
      /**
       * Last Modified Date Time
       * Format: date-time
       * @description The date and time the site was last modified, in UTC.
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * Name
       * @description The name of the site.
       * @default null
       */
      name: string | null;
      /**
       * Web Url
       * @description The URL of the site.
       * @default null
       */
      webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SITE_PAGE_CONTENT tool input.
 */
type ONE_DRIVE_GET_SITE_PAGE_CONTENT_INPUT = {
  /**
   * Expand
   * @description Expands related entities. For example, use 'canvasLayout' to include the page's layout and web part content.
   * @default null
   */
  expand: string | null;
  /**
   * Page Id
   * @description The unique identifier of the site page.
   */
  page_id?: string;
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site.
   */
  site_id?: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_GET_SITE_PAGE_CONTENT tool output.
 */
type ONE_DRIVE_GET_SITE_PAGE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CanvasLayout
       * @description The layout and content of the page.
       * @default null
       */
      canvasLayout: {
          /**
           * Horizontal Sections
           * @description Sections of the page.
           * @default null
           */
          horizontalSections: {
              /**
               * Columns
               * @description Columns within the section.
               * @default null
               */
              columns: {
                  /**
                   * Id
                   * @description The ID of the column.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Webparts
                   * @description Web parts within the column.
                   * @default null
                   */
                  webparts: {
                      /**
                       * @Odata.Type
                       * @description The type of the web part (e.g., '#microsoft.graph.textWebPart').
                       * @default null
                       */
                      "@odata.type": string | null;
                      /**
                       * Id
                       * @description The ID of the web part.
                       * @default null
                       */
                      id: string | null;
                      /**
                       * Inner Html
                       * @description The HTML content of the web part.
                       * @default null
                       */
                      innerHtml: string | null;
                  }[] | null;
                  /**
                   * Width
                   * @description The width of the column.
                   * @default null
                   */
                  width: number | null;
              }[] | null;
              /**
               * Emphasis
               * @description The emphasis of the section (e.g., 'neutral', 'soft', 'strong').
               * @default null
               */
              emphasis: string | null;
              /**
               * Id
               * @description The ID of the section.
               * @default null
               */
              id: string | null;
              /**
               * Layout
               * @description The layout of the section (e.g., 'oneColumn', 'twoColumns', 'threeColumns').
               * @default null
               */
              layout: string | null;
          }[] | null;
      } | null;
      /**
       * ContentType
       * @description The content type of the page.
       * @default null
       */
      contentType: {
          /**
           * Id
           * @description The ID of the content type.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the content type.
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * CreatedBy
       * @description Information about the user who created the page.
       * @default null
       */
      createdBy: {
          /**
           * CreatedByUser
           * @description Details of the user.
           * @default null
           */
          user: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              display_name: string | null;
              /**
               * Email
               * @description The email address of the user.
               * @default null
               */
              email: string | null;
          } | null;
      } | null;
      /**
       * Created Date Time
       * @description The date and time the page was created.
       * @default null
       */
      createdDateTime: string | null;
      /**
       * Description
       * @description The description of the page.
       * @default null
       */
      description: string | null;
      /**
       * E Tag
       * @description The ETag of the page.
       * @default null
       */
      eTag: string | null;
      /**
       * Id
       * @description The unique identifier of the page.
       * @default null
       */
      id: string | null;
      /**
       * LastModifiedBy
       * @description Information about the user who last modified the page.
       * @default null
       */
      lastModifiedBy: {
          /**
           * LastModifiedByUser
           * @description Details of the user.
           * @default null
           */
          user: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              display_name: string | null;
              /**
               * Email
               * @description The email address of the user.
               * @default null
               */
              email: string | null;
          } | null;
      } | null;
      /**
       * Last Modified Date Time
       * @description The date and time the page was last modified.
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * Name
       * @description The name of the page.
       * @default null
       */
      name: string | null;
      /**
       * Page Layout
       * @description The layout of the page (e.g., 'article').
       * @default null
       */
      pageLayout: string | null;
      /**
       * ParentReference
       * @description Reference to the parent list and site.
       * @default null
       */
      parentReference: {
          /**
           * List Id
           * @description The ID of the list containing the page.
           * @default null
           */
          listId: string | null;
          /**
           * Site Id
           * @description The ID of the site containing the page.
           * @default null
           */
          siteId: string | null;
      } | null;
      /**
       * Promotion Kind
       * @description The promotion kind of the page (e.g., 'page', 'newsPost').
       * @default null
       */
      promotionKind: string | null;
      /**
       * PublishingState
       * @description The publishing state of the page.
       * @default null
       */
      publishingState: {
          /**
           * Level
           * @description The publishing level (e.g., 'draft', 'published').
           * @default null
           */
          level: string | null;
          /**
           * Version Id
           * @description The version ID of the page.
           * @default null
           */
          versionId: string | null;
      } | null;
      /**
       * Reactions
       * @description Reactions to the page.
       * @default null
       */
      reactions: {
          [key: string]: unknown;
      } | null;
      /**
       * Show Comments
       * @description Indicates if comments are shown on the page.
       * @default null
       */
      showComments: boolean | null;
      /**
       * Show Recommended Pages
       * @description Indicates if recommended pages are shown.
       * @default null
       */
      showRecommendedPages: boolean | null;
      /**
       * Thumbnail Web Url
       * @description The URL of the page's thumbnail image.
       * @default null
       */
      thumbnailWebUrl: string | null;
      /**
       * Title
       * @description The title of the page.
       * @default null
       */
      title: string | null;
      /**
       * Web Url
       * @description The URL of the page.
       * @default null
       */
      webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM tool input.
 */
type ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the drive. If not provided, the authenticated user's personal drive (me/drive) will be used.
   * @default null
   */
  drive_id: string | null;
  /**
   * Expiration Date Time
   * @description Specifies the dateTime after which the permission expires. ISO 8601 format. Example: "2023-12-31T23:59:59.000Z"
   * @default null
   */
  expiration_date_time: string | null;
  /**
   * Group Id
   * @description The unique identifier of a Microsoft 365 group. Use this if the item is in a group's drive.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the drive item (file or folder).
   */
  item_id?: string;
  /**
   * Message
   * @description A plain text formatted message that is included in the sharing invitation. Maximum length 2000 characters.
   * @default null
   */
  message: string | null;
  /**
   * Password
   * @description The password set on the invite by the creator. Optional and OneDrive Personal only.
   * @default null
   */
  password: string | null;
  /**
   * Recipients
   * @description A collection of recipients who will receive access and the sharing invitation.
   */
  recipients?: {
      /**
       * Alias
       * @description The alias of the recipient, if a personal Microsoft Account.
       * @default null
       */
      alias: string | null;
      /**
       * Email
       * Format: email
       * @description The email address of the recipient.
       * @default null
       */
      email: string | null;
      /**
       * Object Id
       * @description The object ID of the recipient, if a user or group in Azure AD.
       * @default null
       */
      object_id: string | null;
  }[];
  /**
   * Require Sign In
   * @description Specifies whether the recipient of the invitation is required to sign-in to view the shared item.
   * @default false
   */
  require_sign_in: boolean | null;
  /**
   * Retain Inherited Permissions
   * @description Optional. If true (default), any existing inherited permissions are retained on the shared item when sharing this item for the first time. If false, all existing permissions are removed when sharing for the first time.
   * @default true
   */
  retain_inherited_permissions: boolean | null;
  /**
   * Roles
   * @description Specifies the roles to be granted to the recipients.
   */
  roles?: string[];
  /**
   * Send Invitation
   * @description If true, a sharing link is sent to the recipient. Otherwise, a permission is granted directly without sending a notification.
   * @default false
   */
  send_invitation: boolean | null;
  /**
   * Site Id
   * @description The unique identifier of a SharePoint site. Use this if the item is in a SharePoint site's drive.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The unique identifier of a user. Use this if the item is in another user's drive that you have access to.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM tool output.
 */
type ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A collection of permission objects representing the granted permissions.
       */
      value: {
          /**
           * Expiration Date Time
           * @description The expiration date and time of the permission.
           * @default null
           */
          expirationDateTime: string | null;
          /**
           * GrantedToV2
           * @default null
           */
          grantedToV2: {
              /**
               * GrantedToSiteUser
               * @default null
               */
              siteUser: {
                  /**
                   * Display Name
                   * @description The display name of the site user.
                   * @default null
                   */
                  display_name: string | null;
                  /**
                   * Id
                   * @description The ID of the site user.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Login Name
                   * @description The login name of the site user.
                   * @default null
                   */
                  login_name: string | null;
              } | null;
              /**
               * GrantedToUser
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the user.
                   * @default null
                   */
                  display_name: string | null;
                  /**
                   * Id
                   * @description The ID of the user.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Has Password
           * @description Indicates if a password is set for the link.
           * @default null
           */
          hasPassword: boolean | null;
          /**
           * Id
           * @description The unique identifier of the permission.
           */
          id: string;
          /**
           * Invitation
           * @default null
           */
          invitation: {
              /**
               * Email
               * Format: email
               * @description The email address of the invited user.
               * @default null
               */
              email: string | null;
              /**
               * Sign In Required
               * @description Indicates if sign-in is required for the invited user.
               * @default null
               */
              signInRequired: boolean | null;
          } | null;
          /**
           * Roles
           * @description The roles granted by this permission.
           */
          roles: string[];
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_DRIVES tool input.
 */
type ONE_DRIVE_LIST_DRIVES_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of relationships to expand (e.g., "root,list").
   * @default null
   */
  expand: string | null;
  /**
   * Group Id
   * @description The ID of the group to list drives for. If provided, site_id and user_id should not be used.
   * @default null
   */
  group_id: string | null;
  /**
   * Orderby
   * @description A comma-separated list of properties to order the results by, optionally followed by "asc" or "desc" (e.g., "name desc").
   * @default null
   */
  orderby: string | null;
  /**
   * Select
   * @description Comma-separated list of properties to include in the response (e.g., "id,name,driveType").
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The ID of the site to list drives for. If provided, group_id and user_id should not be used.
   * @default null
   */
  site_id: string | null;
  /**
   * Skip Token
   * @description A token used to retrieve the next page of results.
   * @default null
   */
  skip_token: string | null;
  /**
   * Top
   * @description The maximum number of items to return in a single page. Must be between 1 and 999.
   * @default null
   */
  top: number | null;
  /**
   * User Id
   * @description The ID of the user to list drives for. If provided, group_id and site_id should not be used. If none of group_id, site_id, or user_id are provided, the drives for the current authenticated user (/me/drives) will be listed.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_DRIVES tool output.
 */
type ONE_DRIVE_LIST_DRIVES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of drives, if applicable.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A list of Drive resources.
       */
      value: {
          /**
           * DriveOwner
           * @description Model for the owner of the drive.
           * @default null
           */
          createdBy: {
              /**
               * DriveOwnerUser
               * @description Model for the user who owns the drive.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the user.
                   * @default null
                   */
                  display_name: string | null;
                  /**
                   * Email
                   * @description The email address of the user.
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the user.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Created Date Time
           * @description The date and time the drive was created.
           * @default null
           */
          createdDateTime: string | null;
          /**
           * Description
           * @description A description of the drive.
           * @default null
           */
          description: string | null;
          /**
           * Drive Type
           * @description The type of drive (e.g., "business", "personal").
           * @default null
           */
          driveType: string | null;
          /**
           * Id
           * @description The unique identifier of the drive.
           * @default null
           */
          id: string | null;
          /**
           * DriveOwner
           * @description Model for the owner of the drive.
           * @default null
           */
          lastModifiedBy: {
              /**
               * DriveOwnerUser
               * @description Model for the user who owns the drive.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the user.
                   * @default null
                   */
                  display_name: string | null;
                  /**
                   * Email
                   * @description The email address of the user.
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the user.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Last Modified Date Time
           * @description The date and time the drive was last modified.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Name
           * @description The name of the drive.
           * @default null
           */
          name: string | null;
          /**
           * DriveOwner
           * @description Model for the owner of the drive.
           * @default null
           */
          owner: {
              /**
               * DriveOwnerUser
               * @description Model for the user who owns the drive.
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @description The display name of the user.
                   * @default null
                   */
                  display_name: string | null;
                  /**
                   * Email
                   * @description The email address of the user.
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Id
                   * @description The unique identifier of the user.
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * DriveQuota
           * @description Model for the storage quota information of the drive.
           * @default null
           */
          quota: {
              /**
               * Deleted
               * @description The number of deleted items in the recycle bin.
               * @default null
               */
              deleted: number | null;
              /**
               * Remaining
               * @description The number of bytes remaining in the quota.
               * @default null
               */
              remaining: number | null;
              /**
               * State
               * @description The state of the quota (e.g., normal, nearing, critical, exceeded).
               * @default null
               */
              state: string | null;
              /**
               * Total
               * @description The total number of bytes in the quota.
               * @default null
               */
              total: number | null;
              /**
               * Used
               * @description The number of bytes used in the quota.
               * @default null
               */
              used: number | null;
          } | null;
          /**
           * Web Url
           * @description URL to access the drive in a web browser.
           * @default null
           */
          webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES tool input.
 */
type ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES_INPUT = {
  /**
   * $Filter
   * @description Filter items by property values.
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description Order items by property values.
   * @default null
   */
  $orderby: string | null;
  /**
   * $Skip
   * @description Skip the first n items.
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Show only the first n items.
   * @default null
   */
  $top: number | null;
  /**
   * Drive Id
   * @description The unique identifier of the drive.
   */
  drive_id?: string;
  /**
   * Item Id
   * @description The unique identifier of the driveItem.
   */
  item_id?: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES tool output.
 */
type ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL for the next page of results.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A list of item activities.
       */
      value: {
          /**
           * ActivityAction
           * @description Details about the access action.
           * @default null
           */
          access: Record<string, never> | null;
          /**
           * Activity Date Time
           * @description When the activity occurred.
           */
          activityDateTime: string;
          /**
           * Actor
           * @description Actor who did the activity.
           */
          actor: {
              /**
               * Application
               * @default null
               */
              application: {
                  [key: string]: unknown;
              } | null;
              /**
               * Device
               * @default null
               */
              device: {
                  [key: string]: unknown;
              } | null;
              /**
               * Group
               * @default null
               */
              group: {
                  [key: string]: unknown;
              } | null;
              /**
               * User
               * @default null
               */
              user: {
                  [key: string]: unknown;
              } | null;
          };
          /**
           * Drive Item
           * @description Drive item related to the activity.
           * @default null
           */
          driveItem: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description The unique identifier for the activity.
           */
          id: string;
          /**
           * List Item
           * @description List item related to the activity (if applicable).
           * @default null
           */
          listItem: {
              [key: string]: unknown;
          } | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES tool input.
 */
type ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES_INPUT = {
  /**
   * Token
   * @description A string token that represents the state of the drive from a previous call. It can be a deltaLink from a previous response, the literal string 'latest' to get a token for future calls without enumerating current items, or omitted to get all current items and a nextLink or deltaLink.
   * @default null
   */
  token: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES tool output.
 */
type ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Delta Link
       * @description A URL returned instead of @odata.nextLink after all current changes have been returned. Used to read the next set of changes in the future.
       * @default null
       */
      "@odata.deltaLink": string | null;
      /**
       * @Odata.Next Link
       * @description A URL to retrieve the next available page of changes, if there are more changes in the current set.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of DriveItem resources representing the changes.
       */
      value?: {
          /**
           * Deleted
           * @description If present, indicates that the item has been deleted.
           * @default null
           */
          deleted: {
              [key: string]: unknown;
          } | null;
          /**
           * File
           * @description File metadata, if the item is a file.
           * @default null
           */
          file: {
              [key: string]: unknown;
          } | null;
          /**
           * Folder
           * @description Folder metadata, if the item is a folder.
           * @default null
           */
          folder: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description The unique identifier of the item.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description The name of the item.
           * @default null
           */
          name: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA tool input.
 */
type ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of relationships to expand.
   * @default null
   */
  expand: string | null;
  /**
   * List Id
   * @description The unique identifier of the list within the site.
   */
  list_id?: string;
  /**
   * Select
   * @description Comma-separated list of listItem properties to return.
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site.
   */
  site_id?: string;
  /**
   * Token
   * @description If unspecified or empty, enumerates the current state. If 'latest', returns an empty response with the latest delta token. If a previous delta token, returns changes since that token.
   * @default null
   */
  token: string | null;
  /**
   * Top
   * @description Maximum number of items to return in a single response.
   * @default null
   */
  top: number | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA tool output.
 */
type ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Delta Link
       * @description A URL to use for the next delta request to get subsequent changes.
       * @default null
       */
      "@odata.deltaLink": string | null;
      /**
       * @Odata.Next Link
       * @description A URL to retrieve the next available page of changes.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of listItem objects representing the changes.
       */
      value: ({
          /**
           * Created Date Time
           * @default null
           */
          createdDateTime: string | null;
          /**
           * DeletedFacet
           * @default null
           */
          deleted: {
              /**
               * State
               * @default null
               */
              state: string | null;
          } | null;
          /**
           * E Tag
           * @default null
           */
          eTag: string | null;
          /**
           * Fields
           * @description The values of the columns set on this list item.
           * @default null
           */
          fields: {
              [key: string]: string | number | boolean | null;
          } | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Last Modified Date Time
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Web Url
           * @default null
           */
          webUrl: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_COLUMNS tool input.
 */
type ONE_DRIVE_LIST_SITE_COLUMNS_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of related resources to expand in the response.
   * @default null
   */
  expand: string | null;
  /**
   * Filter
   * @description OData filter expression to apply to the results.
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description Comma-separated list of properties used to sort the results.
   * @default null
   */
  orderby: string | null;
  /**
   * Select
   * @description Comma-separated list of properties to include in the response.
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site. Example: `contoso.sharepoint.com,2C712604-133D-4A7C-9194-F53CE4C952A2,A704AEF5-C2C0-43C3-A3D8-9F55A73A02E2`
   */
  site_id?: string;
  /**
   * Skip
   * @description The number of items to skip before starting to collect the result set.
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description The maximum number of items to return.
   * @default null
   */
  top: number | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_COLUMNS tool output.
 */
type ONE_DRIVE_LIST_SITE_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of results, if available.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of columnDefinition objects.
       */
      value?: {
          /**
           * Boolean
           * @description Boolean column specific properties.
           * @default null
           */
          boolean: {
              [key: string]: string;
          } | null;
          /**
           * Calculated
           * @description Calculated column specific properties.
           * @default null
           */
          calculated: {
              [key: string]: string;
          } | null;
          /**
           * Choice
           * @description Choice column specific properties.
           * @default null
           */
          choice: {
              [key: string]: string;
          } | null;
          /**
           * Content Approval Status
           * @description Content Approval Status column specific properties.
           * @default null
           */
          contentApprovalStatus: {
              [key: string]: string;
          } | null;
          /**
           * Currency
           * @description Currency column specific properties.
           * @default null
           */
          currency: {
              [key: string]: string;
          } | null;
          /**
           * Date Time
           * @description DateTime column specific properties.
           * @default null
           */
          dateTime: {
              [key: string]: string;
          } | null;
          /**
           * Description
           * @description The description of the column.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description The display name of the column.
           * @default null
           */
          displayName: string | null;
          /**
           * Hidden
           * @description Specifies if the column is hidden.
           * @default null
           */
          hidden: boolean | null;
          /**
           * Hyperlink Or Picture
           * @description Hyperlink or Picture column specific properties.
           * @default null
           */
          hyperlinkOrPicture: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description The unique identifier of the column.
           * @default null
           */
          id: string | null;
          /**
           * Indexed
           * @description Specifies if the column is indexed.
           * @default null
           */
          indexed: boolean | null;
          /**
           * Lookup
           * @description Lookup column specific properties.
           * @default null
           */
          lookup: {
              [key: string]: string;
          } | null;
          /**
           * Name
           * @description The internal name of the column.
           * @default null
           */
          name: string | null;
          /**
           * Number
           * @description Number column specific properties.
           * @default null
           */
          number: {
              [key: string]: string;
          } | null;
          /**
           * Person Or Group
           * @description Person or Group column specific properties.
           * @default null
           */
          personOrGroup: {
              [key: string]: string;
          } | null;
          /**
           * Read Only
           * @description Specifies if the column is read-only.
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Required
           * @description Specifies if the column is required.
           * @default null
           */
          required: boolean | null;
          /**
           * Term
           * @description Term column specific properties.
           * @default null
           */
          term: {
              [key: string]: string;
          } | null;
          /**
           * Text
           * @description Text column specific properties.
           * @default null
           */
          text: {
              [key: string]: string;
          } | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA tool input.
 */
type ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA_INPUT = {
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site.
   */
  site_id?: string;
  /**
   * Token
   * @description A token used to retrieve a specific page of results or to get changes since a previous state. Can be 'latest' to get the most recent delta token without items, a deltaLink URL, or a timestamp (YYYY-MM-DDTHH:MM:SSZ).
   * @default null
   */
  token: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA tool output.
 */
type ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Delta Link
       * @description A URL returned instead of @odata.nextLink after all current changes have been returned. Used to read the next set of changes in the future.
       * @default null
       */
      "@odata.deltaLink": string | null;
      /**
       * @Odata.Next Link
       * @description A URL to retrieve the next available page of changes, if there are more changes in the current set.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of DriveItem resources representing the changes.
       */
      value?: {
          /**
           * Deleted
           * @description Indicates that the item was deleted.
           * @default null
           */
          deleted: {
              [key: string]: unknown;
          } | null;
          /**
           * File
           * @description File metadata, if the item is a file.
           * @default null
           */
          file: {
              [key: string]: unknown;
          } | null;
          /**
           * Folder
           * @description Folder metadata, if the item is a folder.
           * @default null
           */
          folder: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description The unique identifier of the item.
           */
          id: string;
          /**
           * Name
           * @description The name of the item.
           * @default null
           */
          name: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_LISTS tool input.
 */
type ONE_DRIVE_LIST_SITE_LISTS_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of relationships to expand in the response. Example: columns,items
   * @default null
   */
  expand: string | null;
  /**
   * Filter
   * @description OData filter expression. Example: startswith(name,'Doc')
   * @default null
   */
  filter: string | null;
  /**
   * Orderby
   * @description OData order by expression. Example: name asc
   * @default null
   */
  orderby: string | null;
  /**
   * Select
   * @description Comma-separated list of properties to include in the response. Example: id,name,list
   * @default null
   */
  select: string | null;
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site.
   */
  site_id?: string;
  /**
   * Skip
   * @description The number of items to skip before starting to collect the result set.
   * @default null
   */
  skip: number | null;
  /**
   * Top
   * @description The maximum number of items to return.
   * @default null
   */
  top: number | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_LISTS tool output.
 */
type ONE_DRIVE_LIST_SITE_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of results, if available.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of list objects.
       */
      value: {
          /**
           * IdentitySet
           * @default null
           */
          createdBy: {
              /**
               * Identity
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Identity
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * User
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Email
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Id
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Created Date Time
           * @description The date and time the list was created (ISO 8601 format).
           * @default null
           */
          createdDateTime: string | null;
          /**
           * Id
           * @description The unique identifier of the list.
           * @default null
           */
          id: string | null;
          /**
           * IdentitySet
           * @default null
           */
          lastModifiedBy: {
              /**
               * Identity
               * @default null
               */
              application: {
                  /**
                   * Display Name
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * Identity
               * @default null
               */
              device: {
                  /**
                   * Display Name
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Id
                   * @default null
                   */
                  id: string | null;
              } | null;
              /**
               * User
               * @default null
               */
              user: {
                  /**
                   * Display Name
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Email
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Id
                   * @default null
                   */
                  id: string | null;
              } | null;
          } | null;
          /**
           * Last Modified Date Time
           * @description The date and time the list was last modified (ISO 8601 format).
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * ListInfo
           * @default null
           */
          list: {
              /**
               * Hidden
               * @description If true, the list is hidden from the SharePoint UI.
               * @default null
               */
              hidden: boolean | null;
              /**
               * Template
               * @description The template used to create the list (e.g., documentLibrary, genericList).
               * @default null
               */
              template: string | null;
          } | null;
          /**
           * Name
           * @description The display name of the list.
           * @default null
           */
          name: string | null;
          /**
           * Parent Reference
           * @default null
           */
          parentReference: {
              [key: string]: unknown;
          } | null;
          /**
           * SharepointIds
           * @default null
           */
          sharepointIds: {
              /**
               * List Id
               * @default null
               */
              listId: string | null;
              /**
               * Site Id
               * @default null
               */
              siteId: string | null;
              /**
               * Site Url
               * @default null
               */
              siteUrl: string | null;
              /**
               * Web Id
               * @default null
               */
              webId: string | null;
          } | null;
          /**
           * SystemFacet
           * @default null
           */
          system: Record<string, never> | null;
          /**
           * Web Url
           * @description URL that displays the list in the browser.
           * @default null
           */
          webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_SUBSITES tool input.
 */
type ONE_DRIVE_LIST_SITE_SUBSITES_INPUT = {
  /**
   * Site Id
   * @description The unique identifier of the SharePoint site for which to list subsites.
   */
  site_id?: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SITE_SUBSITES tool output.
 */
type ONE_DRIVE_LIST_SITE_SUBSITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description A collection of site objects.
       */
      value?: {
          /**
           * Created Date Time
           * @description The date and time the subsite was created.
           * @default null
           */
          createdDateTime: string | null;
          /**
           * Description
           * @description The description of the subsite.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier of the subsite.
           * @default null
           */
          id: string | null;
          /**
           * Is Personal Site
           * @description Indicates if the site is a personal site.
           * @default null
           */
          isPersonalSite: boolean | null;
          /**
           * Last Modified Date Time
           * @description The date and time the subsite was last modified.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Name
           * @description The display name of the subsite.
           * @default null
           */
          name: string | null;
          /**
           * Web Url
           * @description The URL of the subsite.
           * @default null
           */
          webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SUBSCRIPTIONS tool input.
 */
type ONE_DRIVE_LIST_SUBSCRIPTIONS_INPUT = object;

/**
 * Type of ONE_DRIVE's ONE_DRIVE_LIST_SUBSCRIPTIONS tool output.
 */
type ONE_DRIVE_LIST_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of subscriptions, if any.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A list of subscription objects.
       */
      value: {
          /**
           * Application Id
           * @description Identifier of the application that created the subscription.
           */
          applicationId: string;
          /**
           * Change Type
           * @description Comma-separated list of change types that trigger notifications (e.g., "updated,deleted").
           */
          changeType: string;
          /**
           * Client State
           * @description Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 255 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value in the change notification.
           * @default null
           */
          clientState: string | null;
          /**
           * Creator Id
           * @description Identifier of the user or service principal that created the subscription.
           */
          creatorId: string;
          /**
           * Encryption Certificate
           * @description The public key of the certificate that the app uses to encrypt the data in change notifications.
           * @default null
           */
          encryptionCertificate: string | null;
          /**
           * Encryption Certificate Id
           * @description A custom app-provided identifier to help identify the certificate.
           * @default null
           */
          encryptionCertificateId: string | null;
          /**
           * Expiration Date Time
           * Format: date-time
           * @description The date and time when the subscription expires.
           */
          expirationDateTime: string;
          /**
           * Id
           * @description Unique identifier of the subscription.
           */
          id: string;
          /**
           * Include Resource Data
           * @description When set to true, change notifications include resource data (such as the content of a chat message).
           * @default null
           */
          includeResourceData: boolean | null;
          /**
           * Latest Supported Tls Version
           * @description Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint supports. The possible values are: v1_0, v1_1, v1_2, v1_3.
           * @default null
           */
          latestSupportedTlsVersion: string | null;
          /**
           * Lifecycle Notification Url
           * @description The URL of the endpoint that receives lifecycle notifications.
           * @default null
           */
          lifecycleNotificationUrl: string | null;
          /**
           * Notification Content Type
           * @description The content type of the notification. Default is application/json.
           * @default null
           */
          notificationContentType: string | null;
          /**
           * Notification Url
           * @description The URL where change notifications are sent.
           */
          notificationUrl: string;
          /**
           * Resource
           * @description The resource that is being monitored for changes (e.g., "Users", "driveItem").
           */
          resource: string;
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
 * Type of ONE_DRIVE's ONE_DRIVE_MOVE_ITEM tool input.
 */
type ONE_DRIVE_MOVE_ITEM_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the Drive that contains the item. If not specified, it defaults to the user's personal drive (`/me/drive`).
   * @default null
   */
  driveId: string | null;
  /**
   * Item Id
   * @description The unique identifier of the file or folder (DriveItem) to be moved.
   */
  itemId?: string;
  /**
   * Name
   * @description The new name for the DriveItem. If not provided, the item retains its original name.
   * @default null
   */
  name: string | null;
  /**
   * Parent Reference
   * @description The new parent folder reference.
   */
  parentReference?: {
      /**
       * Drive Id
       * @description The unique identifier of the Drive that contains the new parent folder. If not specified, it's assumed the parent folder is in the same drive as the item being moved.
       * @default null
       */
      driveId: string | null;
      /**
       * Id
       * @description The unique identifier of the new parent folder where the item will be moved.
       */
      id: string;
  };
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_MOVE_ITEM tool output.
 */
type ONE_DRIVE_MOVE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the item.
       */
      id: string;
      /**
       * Name
       * @description The name of the item.
       */
      name: string;
      /**
       * OneDriveItemReference
       * @description Reference to the parent DriveItem.
       * @default null
       */
      parentReference: {
          /**
           * Drive Id
           * @default null
           */
          driveId: string | null;
          /**
           * Drive Type
           * @default null
           */
          driveType: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Path
           * @default null
           */
          path: string | null;
      } | null;
      /**
       * Size
       * @description The size of the item in bytes.
       * @default null
       */
      size: number | null;
      /**
       * Web Url
       * @description URL to open the item in a web browser.
       * @default null
       */
      webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_CREATE_FOLDER tool input.
 */
type ONE_DRIVE_ONEDRIVE_CREATE_FOLDER_INPUT = {
  /**
   * Name
   * @description The desired name for the new folder. If a folder with this name already exists in the specified parent_folder, the new folder will be automatically renamed (e.g., 'New Folder' might become 'New Folder 1'). Examples: ['Annual Reports', 'Client Meeting Notes']
   */
  name?: string;
  /**
   * Parent Folder
   * @description ID or full path of the parent folder for the new folder. Paths must start from the root (e.g., '/Documents/Reports'). If an ID is provided, it refers to an existing folder's unique ID. Examples: ['/Projects/Alpha', 'folder_id_12345ABC', '/']
   * @default /
   */
  parent_folder: string;
  /**
   * User Id
   * @description Identifier for the user. This action operates on the currently authenticated user's OneDrive. Examples: ['me']
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_CREATE_FOLDER tool output.
 */
type ONE_DRIVE_ONEDRIVE_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier (ID) of the newly created folder.
       */
      id: string;
      /**
       * Name
       * @description The final name of the newly created folder. This may differ from the requested name if a conflict occurred and the folder was renamed.
       */
      name: string;
      /**
       * Web Url
       * @description The web URL to access the newly created folder directly in OneDrive.
       */
      webUrl: string;
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
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE tool input.
 */
type ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE_INPUT = {
  /**
   * Content
   * @description The plain text content to be written into the new file.
   */
  content?: string;
  /**
   * Folder
   * @description The unique identifier (ID) or an absolute path of the OneDrive folder where the new text file will be created.
   * @default /
   */
  folder: string;
  /**
   * Name
   * @description The desired name for the new text file, including its extension (e.g., 'report.txt', 'notes.log').
   */
  name?: string;
  /**
   * User Id
   * @description The user's ID or the literal 'me' to represent the currently authenticated user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE tool output.
 */
type ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Contains metadata about the created file.
       */
      file: Record<string, never>;
      /**
       * Id
       * @description The unique identifier (ID) of the newly created text file in OneDrive.
       */
      id: string;
      /**
       * Name
       * @description The name of the newly created text file, including its extension.
       */
      name: string;
      /**
       * Size
       * @description The size of the newly created text file in bytes.
       */
      size: number;
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
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_FIND_FILE tool input.
 */
type ONE_DRIVE_ONEDRIVE_FIND_FILE_INPUT = {
  /**
   * Folder
   * @description The unique identifier (ID) or absolute path of the OneDrive folder for the search. For the root folder, use '/'. Paths must start with '/'.
   * @default /
   */
  folder: string;
  /**
   * Include Metadata
   * @description If set to true, the response will include the complete metadata for each found item. If false (default), only essential properties like id, name, and webUrl are returned.
   * @default false
   */
  include_metadata: boolean;
  /**
   * Name
   * @description The exact name of the file or folder to find within the specified `folder`.
   */
  name?: string;
  /**
   * User Id
   * @description The unique identifier of the user (e.g., a GUID) or the alias 'me' to represent the currently authenticated user. This determines whose OneDrive will be accessed.
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_FIND_FILE tool output.
 */
type ONE_DRIVE_ONEDRIVE_FIND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Odata Context
       * @description The OData context URL for the response, providing metadata and type information for the results.
       */
      odata_context: string;
      /**
       * Value
       * @description A list of items (files or folders) found; detail level depends on the `include_metadata` request parameter.
       */
      value?: {
          [key: string]: unknown;
      }[];
  } & {
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
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_FIND_FOLDER tool input.
 */
type ONE_DRIVE_ONEDRIVE_FIND_FOLDER_INPUT = {
  /**
   * Folder
   * @description Path (e.g., '/My Files/Work', '/' for root) or unique ID of the parent folder where child folders are searched.
   * @default /
   */
  folder: string;
  /**
   * Name
   * @description Exact name of the folder to find. If omitted, all direct child folders of the parent `folder` are returned.
   * @default null
   */
  name: string | null;
  /**
   * User Id
   * @description User's unique identifier (e.g., email, UPN) or 'me' for the authenticated user, specifying the OneDrive account.
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_FIND_FOLDER tool output.
 */
type ONE_DRIVE_ONEDRIVE_FIND_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description The OData context URL, which provides metadata for the response, including the schema and type of the returned data.
       */
      "@odata.context": string;
      /**
       * Value
       * @description List of dictionaries, each representing a folder matching the criteria; empty if no folders found.
       */
      value?: {
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
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_LIST_ITEMS tool input.
 */
type ONE_DRIVE_ONEDRIVE_LIST_ITEMS_INPUT = {
  /**
   * Select
   * @description Specifies `driveItem` properties to return. If omitted or empty, default properties are returned. Refer to Microsoft Graph API documentation for a complete list of `driveItem` properties.
   * @default []
   */
  select: string[];
  /**
   * Top
   * @description Maximum items per API request, setting the batch size; the action automatically handles pagination to fetch all items. The Microsoft Graph API may limit this (e.g., to 999).
   * @default 50
   */
  top: number;
  /**
   * User Id
   * @description User's unique identifier (e.g., 'user@example.com', object ID) or 'me' for the authenticated user's OneDrive.
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_LIST_ITEMS tool output.
 */
type ONE_DRIVE_ONEDRIVE_LIST_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Dictionary with a 'value' key holding a list of all `driveItem` objects (files/folders) from the root of the user's OneDrive, including selected or default properties.
   */
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
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_UPLOAD_FILE tool input.
 */
type ONE_DRIVE_ONEDRIVE_UPLOAD_FILE_INPUT = {
  /**
   * FileUploadable
   * @description The file to be uploaded, including its name and access to its binary content.
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Folder
   * @description Destination folder path from root (e.g., '/Documents/Reports') or a unique folder ID.
   * @default /
   */
  folder: string;
  /**
   * User Id
   * @description User ID (e.g., user_principal_name, unique GUID) or 'me' for the authenticated user, determining the target OneDrive.
   * @default me
   */
  user_id: string;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_ONEDRIVE_UPLOAD_FILE tool output.
 */
type ONE_DRIVE_ONEDRIVE_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Contains supplementary, system-level metadata about the uploaded file from OneDrive; structure is not strictly defined and may be empty.
       */
      file: Record<string, never>;
      /**
       * Id
       * @description The unique identifier for the uploaded file, as assigned by OneDrive.
       */
      id: string;
      /**
       * Name
       * @description The final name of the uploaded file in OneDrive. This name might differ from the original if a conflict occurred and the file was renamed.
       */
      name: string;
      /**
       * Size
       * @description The total size of the uploaded file in bytes.
       */
      size: number;
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
 * Type of ONE_DRIVE's ONE_DRIVE_PREVIEW_DRIVE_ITEM tool input.
 */
type ONE_DRIVE_PREVIEW_DRIVE_ITEM_INPUT = {
  /**
   * Drive Id
   * @description The unique identifier of the Drive. If not provided, the request will be made to the current user's drive.
   * @default null
   */
  drive_id: string | null;
  /**
   * Group Id
   * @description The unique identifier of the Group. Provide if the item is in a group drive.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the DriveItem.
   */
  item_id?: string;
  /**
   * Page
   * @description Optional. Page number of document to start at, if applicable. Specified as string for future use cases around file types such as ZIP.
   * @default null
   */
  page: string | null;
  /**
   * Share Id
   * @description The unique identifier of the shared item. Provide if the item is accessed via a share link.
   * @default null
   */
  share_id: string | null;
  /**
   * Site Id
   * @description The unique identifier of the Site. Provide if the item is in a SharePoint site.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The unique identifier of the User. Provide if the item is in another user's drive.
   * @default null
   */
  user_id: string | null;
  /**
   * Zoom
   * @description Optional. Zoom level to start at, if applicable.
   * @default null
   */
  zoom: number | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_PREVIEW_DRIVE_ITEM tool output.
 */
type ONE_DRIVE_PREVIEW_DRIVE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Get Url
       * @description URL suitable for embedding using HTTP GET (iframes, etc.)
       * @default null
       */
      getUrl: string | null;
      /**
       * Post Parameters
       * @description POST parameters to include if using postUrl
       * @default null
       */
      postParameters: string | null;
      /**
       * Post Url
       * @description URL suitable for embedding using HTTP POST (form post, JS, etc.)
       * @default null
       */
      postUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_SEARCH_ITEMS tool input.
 */
type ONE_DRIVE_SEARCH_ITEMS_INPUT = {
  /**
   * Drive Id
   * @description The ID of the drive to search within. If not provided, the user's personal drive (me/drive) will be searched. Can also be a group ID, site ID, or user ID.
   * @default null
   */
  drive_id: string | null;
  /**
   * Orderby
   * @description A comma-separated list of properties used to sort the order of the items in the response. Use 'asc' or 'desc' for ascending or descending order, e.g., 'name asc'.
   * @default null
   */
  orderby: string | null;
  /**
   * Q
   * @description The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content.
   */
  q?: string;
  /**
   * Search Scope
   * @description Specifies the scope of the search. 'root' searches within a specific folder hierarchy (default if drive_id is specified for a drive item, or /me/drive/root). 'drive' broadens the search to include items shared with the current user (used with /me/drive/search).
   * @default root
   * @enum {string|null}
   */
  search_scope: "drive" | "root" | null;
  /**
   * Select
   * @description Comma-separated list of properties to include in the response.
   * @default null
   */
  select: string | null;
  /**
   * Skip Token
   * @description A token to retrieve the next page of results, obtained from the @odata.nextLink in a previous response.
   * @default null
   */
  skip_token: string | null;
  /**
   * Top
   * @description The maximum number of items to return in a single page. Default is 200.
   * @default null
   */
  top: number | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_SEARCH_ITEMS tool output.
 */
type ONE_DRIVE_SEARCH_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Next Link
       * @description URL to retrieve the next page of results, if available.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description A collection of DriveItems that match the search criteria.
       */
      value?: {
          /**
           * Created Date Time
           * @description Date and time of item creation.
           * @default null
           */
          createdDateTime: string | null;
          /**
           * File
           * @description File metadata, if the item is a file.
           * @default null
           */
          file: {
              [key: string]: unknown;
          } | null;
          /**
           * Folder
           * @description Folder metadata, if the item is a folder.
           * @default null
           */
          folder: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description The unique identifier of the item.
           * @default null
           */
          id: string | null;
          /**
           * Last Modified Date Time
           * @description Date and time of last modification.
           * @default null
           */
          lastModifiedDateTime: string | null;
          /**
           * Name
           * @description The name of the item.
           * @default null
           */
          name: string | null;
          /**
           * Remote Item
           * @description If the item is from a different drive (e.g., shared with the user), this provides information about its original location.
           * @default null
           */
          remoteItem: {
              [key: string]: unknown;
          } | null;
          /**
           * Search Result
           * @description Properties related to the search result, such as onClickTelemetryUrl.
           * @default null
           */
          searchResult: {
              [key: string]: unknown;
          } | null;
          /**
           * Size
           * @description Size of the item in bytes.
           * @default null
           */
          size: number | null;
          /**
           * Web Url
           * @description URL that displays the item in the browser.
           * @default null
           */
          webUrl: string | null;
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
 * Type of ONE_DRIVE's ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA tool input.
 */
type ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA_INPUT = {
  /**
   * Additional Properties
   * @description Allows passing any other updatable DriveItem properties not explicitly defined in the model.
   * @default null
   */
  additional_properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description The new description for the drive item.
   * @default null
   */
  description: string | null;
  /**
   * Drive Id
   * @description The unique identifier of the drive. Required if not using other specific paths like /me, /groups/{group-id}, /sites/{site-id}, or /users/{user-id}.
   * @default null
   */
  drive_id: string | null;
  /**
   * Group Id
   * @description The unique identifier of the group. Used when updating an item within a group's drive.
   * @default null
   */
  group_id: string | null;
  /**
   * Item Id
   * @description The unique identifier of the drive item (file or folder) to update.
   */
  item_id?: string;
  /**
   * Name
   * @description The new name for the drive item.
   * @default null
   */
  name: string | null;
  /**
   * Parent Reference Drive Id
   * @description The drive ID of the new parent item, if moving to a different drive.
   * @default null
   */
  parent_reference_drive_id: string | null;
  /**
   * Parent Reference Id
   * @description The ID of the new parent item. Use this to move the item. The driveId of the parentReference can also be specified if moving between drives.
   * @default null
   */
  parent_reference_id: string | null;
  /**
   * Site Id
   * @description The unique identifier of the site. Used when updating an item within a site's drive.
   * @default null
   */
  site_id: string | null;
  /**
   * User Id
   * @description The unique identifier of the user. Used when updating an item within a specific user's drive.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of ONE_DRIVE's ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA tool output.
 */
type ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * C Tag
       * @description The CTag of the item (for changes to content).
       * @default null
       */
      cTag: string | null;
      /**
       * Created Date Time
       * @description The date and time the item was created.
       * @default null
       */
      createdDateTime: string | null;
      /**
       * E Tag
       * @description The ETag of the item.
       * @default null
       */
      eTag: string | null;
      /**
       * File
       * @description File metadata, if the item is a file.
       * @default null
       */
      file: {
          [key: string]: unknown;
      } | null;
      /**
       * Folder
       * @description Folder metadata, if the item is a folder.
       * @default null
       */
      folder: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique identifier of the updated item.
       */
      id: string;
      /**
       * Last Modified Date Time
       * @description The date and time the item was last modified.
       * @default null
       */
      lastModifiedDateTime: string | null;
      /**
       * Name
       * @description The name of the updated item.
       */
      name: string;
      /**
       * Size
       * @description The size of the item in bytes.
       * @default null
       */
      size: number | null;
      /**
       * Web Url
       * @description URL that displays the item in the browser.
       * @default null
       */
      webUrl: string | null;
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
 * Type map of all available tool input types for toolkit "ONE_DRIVE".
 */
export type ONE_DRIVE_TOOL_INPUTS = {
  COPY_ITEM: ONE_DRIVE_COPY_ITEM_INPUT
  CREATE_LINK: ONE_DRIVE_CREATE_LINK_INPUT
  DELETE_ITEM: ONE_DRIVE_DELETE_ITEM_INPUT
  DOWNLOAD_FILE: ONE_DRIVE_DOWNLOAD_FILE_INPUT
  GET_DRIVE: ONE_DRIVE_GET_DRIVE_INPUT
  GET_ITEM: ONE_DRIVE_GET_ITEM_INPUT
  GET_ITEM_PERMISSIONS: ONE_DRIVE_GET_ITEM_PERMISSIONS_INPUT
  GET_ITEM_THUMBNAILS: ONE_DRIVE_GET_ITEM_THUMBNAILS_INPUT
  GET_ITEM_VERSIONS: ONE_DRIVE_GET_ITEM_VERSIONS_INPUT
  GET_QUOTA: ONE_DRIVE_GET_QUOTA_INPUT
  GET_RECENT_ITEMS: ONE_DRIVE_GET_RECENT_ITEMS_INPUT
  GET_SHARED_ITEMS: ONE_DRIVE_GET_SHARED_ITEMS_INPUT
  GET_SHAREPOINT_LIST_ITEMS: ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS_INPUT
  GET_SITE_DETAILS: ONE_DRIVE_GET_SITE_DETAILS_INPUT
  GET_SITE_PAGE_CONTENT: ONE_DRIVE_GET_SITE_PAGE_CONTENT_INPUT
  INVITE_USER_TO_DRIVE_ITEM: ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM_INPUT
  LIST_DRIVES: ONE_DRIVE_LIST_DRIVES_INPUT
  LIST_DRIVE_ITEM_ACTIVITIES: ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES_INPUT
  LIST_ROOT_DRIVE_CHANGES: ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES_INPUT
  LIST_SHAREPOINT_LIST_ITEMS_DELTA: ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA_INPUT
  LIST_SITE_COLUMNS: ONE_DRIVE_LIST_SITE_COLUMNS_INPUT
  LIST_SITE_DRIVE_ITEMS_DELTA: ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA_INPUT
  LIST_SITE_LISTS: ONE_DRIVE_LIST_SITE_LISTS_INPUT
  LIST_SITE_SUBSITES: ONE_DRIVE_LIST_SITE_SUBSITES_INPUT
  LIST_SUBSCRIPTIONS: ONE_DRIVE_LIST_SUBSCRIPTIONS_INPUT
  MOVE_ITEM: ONE_DRIVE_MOVE_ITEM_INPUT
  ONEDRIVE_CREATE_FOLDER: ONE_DRIVE_ONEDRIVE_CREATE_FOLDER_INPUT
  ONEDRIVE_CREATE_TEXT_FILE: ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE_INPUT
  ONEDRIVE_FIND_FILE: ONE_DRIVE_ONEDRIVE_FIND_FILE_INPUT
  ONEDRIVE_FIND_FOLDER: ONE_DRIVE_ONEDRIVE_FIND_FOLDER_INPUT
  ONEDRIVE_LIST_ITEMS: ONE_DRIVE_ONEDRIVE_LIST_ITEMS_INPUT
  ONEDRIVE_UPLOAD_FILE: ONE_DRIVE_ONEDRIVE_UPLOAD_FILE_INPUT
  PREVIEW_DRIVE_ITEM: ONE_DRIVE_PREVIEW_DRIVE_ITEM_INPUT
  SEARCH_ITEMS: ONE_DRIVE_SEARCH_ITEMS_INPUT
  UPDATE_DRIVE_ITEM_METADATA: ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ONE_DRIVE".
 */
export type ONE_DRIVE_TOOL_OUTPUTS = {
  COPY_ITEM: ONE_DRIVE_COPY_ITEM_OUTPUT
  CREATE_LINK: ONE_DRIVE_CREATE_LINK_OUTPUT
  DELETE_ITEM: ONE_DRIVE_DELETE_ITEM_OUTPUT
  DOWNLOAD_FILE: ONE_DRIVE_DOWNLOAD_FILE_OUTPUT
  GET_DRIVE: ONE_DRIVE_GET_DRIVE_OUTPUT
  GET_ITEM: ONE_DRIVE_GET_ITEM_OUTPUT
  GET_ITEM_PERMISSIONS: ONE_DRIVE_GET_ITEM_PERMISSIONS_OUTPUT
  GET_ITEM_THUMBNAILS: ONE_DRIVE_GET_ITEM_THUMBNAILS_OUTPUT
  GET_ITEM_VERSIONS: ONE_DRIVE_GET_ITEM_VERSIONS_OUTPUT
  GET_QUOTA: ONE_DRIVE_GET_QUOTA_OUTPUT
  GET_RECENT_ITEMS: ONE_DRIVE_GET_RECENT_ITEMS_OUTPUT
  GET_SHARED_ITEMS: ONE_DRIVE_GET_SHARED_ITEMS_OUTPUT
  GET_SHAREPOINT_LIST_ITEMS: ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS_OUTPUT
  GET_SITE_DETAILS: ONE_DRIVE_GET_SITE_DETAILS_OUTPUT
  GET_SITE_PAGE_CONTENT: ONE_DRIVE_GET_SITE_PAGE_CONTENT_OUTPUT
  INVITE_USER_TO_DRIVE_ITEM: ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM_OUTPUT
  LIST_DRIVES: ONE_DRIVE_LIST_DRIVES_OUTPUT
  LIST_DRIVE_ITEM_ACTIVITIES: ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES_OUTPUT
  LIST_ROOT_DRIVE_CHANGES: ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES_OUTPUT
  LIST_SHAREPOINT_LIST_ITEMS_DELTA: ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA_OUTPUT
  LIST_SITE_COLUMNS: ONE_DRIVE_LIST_SITE_COLUMNS_OUTPUT
  LIST_SITE_DRIVE_ITEMS_DELTA: ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA_OUTPUT
  LIST_SITE_LISTS: ONE_DRIVE_LIST_SITE_LISTS_OUTPUT
  LIST_SITE_SUBSITES: ONE_DRIVE_LIST_SITE_SUBSITES_OUTPUT
  LIST_SUBSCRIPTIONS: ONE_DRIVE_LIST_SUBSCRIPTIONS_OUTPUT
  MOVE_ITEM: ONE_DRIVE_MOVE_ITEM_OUTPUT
  ONEDRIVE_CREATE_FOLDER: ONE_DRIVE_ONEDRIVE_CREATE_FOLDER_OUTPUT
  ONEDRIVE_CREATE_TEXT_FILE: ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE_OUTPUT
  ONEDRIVE_FIND_FILE: ONE_DRIVE_ONEDRIVE_FIND_FILE_OUTPUT
  ONEDRIVE_FIND_FOLDER: ONE_DRIVE_ONEDRIVE_FIND_FOLDER_OUTPUT
  ONEDRIVE_LIST_ITEMS: ONE_DRIVE_ONEDRIVE_LIST_ITEMS_OUTPUT
  ONEDRIVE_UPLOAD_FILE: ONE_DRIVE_ONEDRIVE_UPLOAD_FILE_OUTPUT
  PREVIEW_DRIVE_ITEM: ONE_DRIVE_PREVIEW_DRIVE_ITEM_OUTPUT
  SEARCH_ITEMS: ONE_DRIVE_SEARCH_ITEMS_OUTPUT
  UPDATE_DRIVE_ITEM_METADATA: ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of ONE_DRIVE's BASE_TRIGGER trigger payload.
 */
type ONE_DRIVE_BASE_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of change event (created, modified, deleted)
   */
  event_type?: string;
  /**
   * Item
   * @description The OneDrive item that changed
   */
  item?: {
      /**
       * Created Time
       * @description Creation timestamp
       * @default null
       */
      created_time: string | null;
      /**
       * Deleted
       * @description Whether the item was deleted
       * @default false
       */
      deleted: boolean | null;
      /**
       * Item Id
       * @description The ID of the item
       * @default null
       */
      item_id: string | null;
      /**
       * Last Modified
       * @description Last modified timestamp
       * @default null
       */
      last_modified: string | null;
      /**
       * Name
       * @description The name of the item
       * @default null
       */
      name: string | null;
      /**
       * Payload
       * @description The full item payload from OneDrive
       * @default {}
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Size
       * @description Size of the item in bytes
       * @default null
       */
      size: number | null;
      /**
       * Type
       * @description The type of the item (file or folder)
       * @default null
       */
      type: string | null;
      /**
       * Web Url
       * @description The web URL of the item
       * @default null
       */
      web_url: string | null;
  };
};

/**
 * Map of Composio's ONE_DRIVE toolkit.
 */
export const ONE_DRIVE = {
  slug: "one_drive",
  tools: {
    /**
     * Tool to copy a driveitem (file or folder) to a new location asynchronously. use when you need to duplicate an item, optionally renaming it or specifying a different parent folder. the operation is asynchronous; the response provides a url to monitor the copy progress.
     */
    COPY_ITEM: "ONE_DRIVE_COPY_ITEM",
    /**
     * Tool to create a sharing link for a driveitem (file or folder) by its unique id. use when you need to generate a shareable link for an item in onedrive or sharepoint.
     */
    CREATE_LINK: "ONE_DRIVE_CREATE_LINK",
    /**
     * Tool to delete a driveitem (file or folder) by its unique id from the authenticated user's onedrive. use when you need to remove an item from onedrive. this action moves the item to the recycle bin, not permanently deleting it.
     */
    DELETE_ITEM: "ONE_DRIVE_DELETE_ITEM",
    /**
     * Downloads a file from a user's onedrive using its item id, which must refer to a file and not a folder.
     */
    DOWNLOAD_FILE: "ONE_DRIVE_DOWNLOAD_FILE",
    /**
     * Retrieves the properties and relationships of a drive resource by its unique id. use this action when you need to get details about a specific onedrive, user's onedrive, group's document library, or a site's document library.
     */
    GET_DRIVE: "ONE_DRIVE_GET_DRIVE",
    /**
     * Retrieves the metadata of a driveitem by its unique id. use this tool to get information about a specific file or folder in onedrive when you have its id. if a `drive id` is not provided, it defaults to the user's main drive.
     */
    GET_ITEM: "ONE_DRIVE_GET_ITEM",
    /**
     * Retrieves the permissions of a driveitem by its unique id or path within a specific drive. use when you need to check who has access to a file or folder and what level of access they have.
     */
    GET_ITEM_PERMISSIONS: "ONE_DRIVE_GET_ITEM_PERMISSIONS",
    /**
     * Tool to retrieve the thumbnails associated with a driveitem. use when you need to display visual previews of files.
     */
    GET_ITEM_THUMBNAILS: "ONE_DRIVE_GET_ITEM_THUMBNAILS",
    /**
     * Tool to retrieve the version history of a driveitem by its unique id. use when you need to access or list previous versions of a file.
     */
    GET_ITEM_VERSIONS: "ONE_DRIVE_GET_ITEM_VERSIONS",
    /**
     * Tool to retrieve the quota information for the authenticated user's onedrive. use this action to check the storage space details like total, used, and remaining space on the user's onedrive.
     */
    GET_QUOTA: "ONE_DRIVE_GET_QUOTA",
    /**
     * Retrieves a list of items that have been recently used by the authenticated user. this tool is useful when you need to access or display files and folders that the user has interacted with recently across their onedrive and accessible shared drives.
     */
    GET_RECENT_ITEMS: "ONE_DRIVE_GET_RECENT_ITEMS",
    /**
     * Tool to retrieve a list of items that have been shared with the authenticated user. use this action to get details of files and folders shared with the current user.
     */
    GET_SHARED_ITEMS: "ONE_DRIVE_GET_SHARED_ITEMS",
    /**
     * Tool to get the items (list items) within a specific sharepoint list on a site. use when you need to retrieve data from a sharepoint list.
     */
    GET_SHAREPOINT_LIST_ITEMS: "ONE_DRIVE_GET_SHAREPOINT_LIST_ITEMS",
    /**
     * Retrieves metadata for a specific sharepoint site by its id. use this action when you need to get details like display name, web url, and creation/modification dates for a known sharepoint site.
     */
    GET_SITE_DETAILS: "ONE_DRIVE_GET_SITE_DETAILS",
    /**
     * Gets the content of a modern sharepoint site page. use when you need to retrieve the details and content of a specific page within a sharepoint site.
     */
    GET_SITE_PAGE_CONTENT: "ONE_DRIVE_GET_SITE_PAGE_CONTENT",
    /**
     * Tool to invite users or grant permissions to a specific item in a onedrive drive. use when you need to share a file or folder with other users and define their access level (e.g., read or write).
     */
    INVITE_USER_TO_DRIVE_ITEM: "ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM",
    /**
     * Tool to retrieve a list of drive resources available to the authenticated user, or for a specific user, group, or site. use when you need to find out what drives are accessible.
     */
    LIST_DRIVES: "ONE_DRIVE_LIST_DRIVES",
    /**
     * Tool to list recent activities for a specific item in a onedrive drive. use when you need to track changes or actions performed on a file or folder.
     */
    LIST_DRIVE_ITEM_ACTIVITIES: "ONE_DRIVE_LIST_DRIVE_ITEM_ACTIVITIES",
    /**
     * Tool to list changes in the root of the user's primary drive using a delta token. use when you need to track file and folder modifications, additions, or deletions in the main onedrive directory.
     */
    LIST_ROOT_DRIVE_CHANGES: "ONE_DRIVE_LIST_ROOT_DRIVE_CHANGES",
    /**
     * Tool to track changes to items in a sharepoint list using a delta query. use when you need to get newly created, updated, or deleted list items without performing a full read of the entire item collection.
     */
    LIST_SHAREPOINT_LIST_ITEMS_DELTA: "ONE_DRIVE_LIST_SHAREPOINT_LIST_ITEMS_DELTA",
    /**
     * Tool to list all column definitions for a sharepoint site. use this when you need to retrieve the schema or structure of columns within a specific sharepoint site.
     */
    LIST_SITE_COLUMNS: "ONE_DRIVE_LIST_SITE_COLUMNS",
    /**
     * Tool to track changes to driveitems in the default document library of a sharepoint site. use when you need to get a list of items that have been added, modified, or deleted since a previous state or to get an initial enumeration of all items.
     */
    LIST_SITE_DRIVE_ITEMS_DELTA: "ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA",
    /**
     * Tool to list all lists under a specific sharepoint site. use when you need to enumerate lists within a known site.
     */
    LIST_SITE_LISTS: "ONE_DRIVE_LIST_SITE_LISTS",
    /**
     * Tool to list all subsites of a sharepoint site. use when you need to retrieve a collection of subsites for a given parent site.
     */
    LIST_SITE_SUBSITES: "ONE_DRIVE_LIST_SITE_SUBSITES",
    /**
     * Tool to list the current subscriptions for the authenticated user or app. use this to retrieve details of existing webhook subscriptions.
     */
    LIST_SUBSCRIPTIONS: "ONE_DRIVE_LIST_SUBSCRIPTIONS",
    /**
     * Tool to move a file or folder to a new parent folder in onedrive. use when you need to reorganize your files or folders by changing their location. you can optionally rename the item during the move.
     */
    MOVE_ITEM: "ONE_DRIVE_MOVE_ITEM",
    /**
     * Creates a new folder in the user's onedrive, automatically renaming on conflict, optionally within a specified parent folder (by id or full path from root) which, if not the root, must exist and be accessible.
     */
    ONEDRIVE_CREATE_FOLDER: "ONE_DRIVE_ONEDRIVE_CREATE_FOLDER",
    /**
     * Creates a new text file with specified content in a onedrive folder, using either the folder's unique id or its absolute path (paths are automatically resolved to ids); note that onedrive may rename or create a new version if the filename already exists.
     */
    ONEDRIVE_CREATE_TEXT_FILE: "ONE_DRIVE_ONEDRIVE_CREATE_TEXT_FILE",
    /**
     * Non-recursively finds an item (file or folder) in a specified onedrive folder; if `folder` is provided as a path, it must actually exist.
     */
    ONEDRIVE_FIND_FILE: "ONE_DRIVE_ONEDRIVE_FIND_FILE",
    /**
     * Finds folders by name within an accessible parent folder in onedrive, or lists all its direct child folders if no name is specified.
     */
    ONEDRIVE_FIND_FOLDER: "ONE_DRIVE_ONEDRIVE_FIND_FOLDER",
    /**
     * Retrieves all files and folders as `driveitem` resources from the root of a specified user's onedrive, automatically handling pagination.
     */
    ONEDRIVE_LIST_ITEMS: "ONE_DRIVE_ONEDRIVE_LIST_ITEMS",
    /**
     * Uploads a file to a specified onedrive folder, automatically renaming on conflict and supporting large files via chunking.
     */
    ONEDRIVE_UPLOAD_FILE: "ONE_DRIVE_ONEDRIVE_UPLOAD_FILE",
    /**
     * Generates or retrieves a short-lived embeddable url for a preview of a specific item. use when you need to display a temporary preview of a file.
     */
    PREVIEW_DRIVE_ITEM: "ONE_DRIVE_PREVIEW_DRIVE_ITEM",
    /**
     * Searches for driveitems in onedrive that match the specified query. use this to find files or folders based on keywords.
     */
    SEARCH_ITEMS: "ONE_DRIVE_SEARCH_ITEMS",
    /**
     * Tool to update the metadata of a specific item (file or folder) in onedrive. use this to rename items, change descriptions, or move items to a new parent folder.
     */
    UPDATE_DRIVE_ITEM_METADATA: "ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA",
  },
  triggerTypes: {
    /**
     * Triggers when a file or folder is deleted in OneDrive.
     *     Uses Gmail-style state management for reliable duplicate prevention.
     */
    BASE_TRIGGER: "ONE_DRIVE_BASE_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "ONE_DRIVE".
 */
export type ONE_DRIVE_TRIGGER_PAYLOADS = {
  BASE_TRIGGER: ONE_DRIVE_BASE_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "ONE_DRIVE".
 */
export type ONE_DRIVE_TRIGGER_EVENTS = {
  BASE_TRIGGER: TriggerEvent<ONE_DRIVE_BASE_TRIGGER_PAYLOAD>
}
