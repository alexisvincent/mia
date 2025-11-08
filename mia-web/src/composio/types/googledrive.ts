import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE tool input.
 */
type GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE_INPUT = {
  /**
   * Domain
   * @description Domain to grant permission to (e.g., 'example.com'). Required if 'type' is 'domain'.
   * @default null
   */
  domain: string | null;
  /**
   * Email Address
   * @description Email address of the user or group. Required if 'type' is 'user' or 'group'.
   * @default null
   */
  email_address: string | null;
  /**
   * File Id
   * @description Unique identifier of the file to update sharing settings for.
   */
  file_id?: string;
  /**
   * Role
   * @description Permission role to grant.
   */
  role?: string;
  /**
   * Type
   * @description Type of grantee for the permission.
   */
  type?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE tool output.
 */
type GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow File Discovery
       * @description Whether the permission allows the file to be discovered through search.
       * @default null
       */
      allowFileDiscovery: boolean | null;
      /**
       * Deleted
       * @description Whether the account associated with this permission has been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description The display name of the user or group to which this permission refers.
       * @default null
       */
      displayName: string | null;
      /**
       * Domain
       * @description The domain to which this permission refers.
       * @default null
       */
      domain: string | null;
      /**
       * Email Address
       * @description The email address of the user or group to which this permission refers.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Expiration Time
       * @description The time at which this permission will expire (RFC 3339 date-time).
       * @default null
       */
      expirationTime: string | null;
      /**
       * Id
       * @description The ID of the permission.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: 'drive#permission'.
       */
      kind: string;
      /**
       * Permission Details
       * @description Details of the permission.
       * @default null
       */
      permissionDetails: {
          /**
           * Inherited
           * @description Whether this permission is inherited.
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @description The ID of the item from which this permission is inherited.
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Permission Type
           * @description The type of the permission: 'user', 'group', 'domain', 'anyone'.
           * @default null
           */
          permissionType: string | null;
          /**
           * Role
           * @description The role granted by this permission.
           * @default null
           */
          role: string | null;
      }[] | null;
      /**
       * Photo Link
       * @description A link to the user's profile photo, if available.
       * @default null
       */
      photoLink: string | null;
      /**
       * Role
       * @description The role granted by this permission.
       */
      role: string;
      /**
       * Team Drive Permission Details
       * @description Details of whether the permissions on this Team Drive item are inherited or directly on this item.
       * @default null
       */
      teamDrivePermissionDetails: {
          /**
           * Inherited
           * @description Whether this permission is inherited.
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @description The ID of the item from which this permission is inherited.
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Role
           * @description The role granted by this permission.
           * @default null
           */
          role: string | null;
          /**
           * Team Drive Permission Type
           * @description The type of the permission: 'file', 'member'.
           * @default null
           */
          teamDrivePermissionType: string | null;
      }[] | null;
      /**
       * Type
       * @description The type of the grantee.
       */
      type: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_COPY_FILE tool input.
 */
type GOOGLEDRIVE_COPY_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier for the file on Google Drive that you want to copy. This ID can be retrieved from the file's shareable link or via other Google Drive API calls.
   */
  file_id?: string;
  /**
   * New Title
   * @description The title to assign to the new copy of the file. If not provided, the copied file will have the same title as the original, prefixed with 'Copy of '.
   * @default null
   */
  new_title: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_COPY_FILE tool output.
 */
type GOOGLEDRIVE_COPY_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs private to the requesting app.
       */
      appProperties?: {
          [key: string]: string;
      } | null;
      /**
       * Capabilities
       * @description Output only. Capabilities the current user has on this file.
       * @default null
       */
      capabilities: {
          /**
           * Can Accept Ownership
           * @default null
           */
          canAcceptOwnership: boolean | null;
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Add Folder From Another Drive
           * @default null
           */
          canAddFolderFromAnotherDrive: boolean | null;
          /**
           * Can Add My Drive Parent
           * @default null
           */
          canAddMyDriveParent: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission
           * @default null
           */
          canChangeCopyRequiresWriterPermission: boolean | null;
          /**
           * Can Change Security Update Enabled
           * @default null
           */
          canChangeSecurityUpdateEnabled: boolean | null;
          /**
           * Can Change Viewers Can Copy Content
           * @description Deprecated.
           * @default null
           */
          canChangeViewersCanCopyContent: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Disable Inherited Permissions
           * @default null
           */
          canDisableInheritedPermissions: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can Enable Inherited Permissions
           * @default null
           */
          canEnableInheritedPermissions: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Modify Content
           * @default null
           */
          canModifyContent: boolean | null;
          /**
           * Can Modify Content Restriction
           * @description Deprecated.
           * @default null
           */
          canModifyContentRestriction: boolean | null;
          /**
           * Can Modify Editor Content Restriction
           * @default null
           */
          canModifyEditorContentRestriction: boolean | null;
          /**
           * Can Modify Labels
           * @default null
           */
          canModifyLabels: boolean | null;
          /**
           * Can Modify Owner Content Restriction
           * @default null
           */
          canModifyOwnerContentRestriction: boolean | null;
          /**
           * Can Move Children Out Of Drive
           * @default null
           */
          canMoveChildrenOutOfDrive: boolean | null;
          /**
           * Can Move Children Out Of Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveChildrenOutOfTeamDrive: boolean | null;
          /**
           * Can Move Children Within Drive
           * @default null
           */
          canMoveChildrenWithinDrive: boolean | null;
          /**
           * Can Move Children Within Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveChildrenWithinTeamDrive: boolean | null;
          /**
           * Can Move Item Into Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveItemIntoTeamDrive: boolean | null;
          /**
           * Can Move Item Out Of Drive
           * @default null
           */
          canMoveItemOutOfDrive: boolean | null;
          /**
           * Can Move Item Out Of Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveItemOutOfTeamDrive: boolean | null;
          /**
           * Can Move Item Within Drive
           * @default null
           */
          canMoveItemWithinDrive: boolean | null;
          /**
           * Can Move Item Within Team Drive
           * @description Deprecated.
           * @default null
           */
          canMoveItemWithinTeamDrive: boolean | null;
          /**
           * Can Move Team Drive Item
           * @description Deprecated.
           * @default null
           */
          canMoveTeamDriveItem: boolean | null;
          /**
           * Can Read Drive
           * @default null
           */
          canReadDrive: boolean | null;
          /**
           * Can Read Labels
           * @default null
           */
          canReadLabels: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Read Team Drive
           * @description Deprecated: Use canReadDrive instead.
           * @default null
           */
          canReadTeamDrive: boolean | null;
          /**
           * Can Remove Children
           * @default null
           */
          canRemoveChildren: boolean | null;
          /**
           * Can Remove Content Restriction
           * @default null
           */
          canRemoveContentRestriction: boolean | null;
          /**
           * Can Remove My Drive Parent
           * @default null
           */
          canRemoveMyDriveParent: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash
           * @default null
           */
          canTrash: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
          /**
           * Can Untrash
           * @default null
           */
          canUntrash: boolean | null;
      } | null;
      /**
       * ContentHints
       * @description Additional information about the content of the file.
       * @default null
       */
      contentHints: {
          /**
           * Indexable Text
           * @description Text to be indexed for the file to improve fullText queries.
           * @default null
           */
          indexableText: string | null;
          /**
           * Thumbnail
           * @description A thumbnail for the file.
           * @default null
           */
          thumbnail: {
              /**
               * Image
               * @description The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
               * @default null
               */
              image: string | null;
              /**
               * Mime Type
               * @description The MIME type of the thumbnail.
               * @default null
               */
              mimeType: string | null;
          } | null;
      } | null;
      /**
       * Content Restrictions
       * @description Restrictions for accessing the content of the file.
       */
      contentRestrictions?: {
          /**
           * Owner Restricted
           * @default null
           */
          ownerRestricted: boolean | null;
          /**
           * Read Only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Reason
           * @default null
           */
          reason: string | null;
          /**
           * User
           * @description Output only.
           * @default null
           */
          restrictingUser: {
              /**
               * Display Name
               * @description A plain text displayable name for this user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Restriction Time
           * @description RFC 3339 date-time, Output only.
           * @default null
           */
          restrictionTime: string | null;
          /**
           * System Restricted
           * @description Output only.
           * @default null
           */
          systemRestricted: boolean | null;
          /**
           * Type
           * @description Output only.
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether the options to copy, print, or download should be disabled for readers and commenters.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description Output only. ID of the shared drive the file resides in.
       * @default null
       */
      driveId: string | null;
      /**
       * Explicitly Trashed
       * @description Output only. Whether the file has been explicitly trashed.
       * @default null
       */
      explicitlyTrashed: boolean | null;
      /**
       * File Extension
       * @description Output only. The final component of fullFileExtension.
       * @default null
       */
      fileExtension: string | null;
      /**
       * Folder Color Rgb
       * @description The color for a folder or a shortcut to a folder as an RGB hex string.
       * @default null
       */
      folderColorRgb: string | null;
      /**
       * Full File Extension
       * @description Output only. The full file extension extracted from the name field.
       * @default null
       */
      fullFileExtension: string | null;
      /**
       * Has Augmented Permissions
       * @description Output only. Whether there are permissions directly on this file.
       * @default null
       */
      hasAugmentedPermissions: boolean | null;
      /**
       * Has Thumbnail
       * @description Output only. Whether this file has a thumbnail.
       * @default null
       */
      hasThumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description Output only. The ID of the file's head revision.
       * @default null
       */
      headRevisionId: string | null;
      /**
       * Icon Link
       * @description Output only. A static, unauthenticated link to the file's icon.
       * @default null
       */
      iconLink: string | null;
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * ImageMediaMetadata
       * @description Output only. Additional metadata about image media.
       * @default null
       */
      imageMediaMetadata: {
          /**
           * Aperture
           * @default null
           */
          aperture: number | null;
          /**
           * Camera Make
           * @default null
           */
          cameraMake: string | null;
          /**
           * Camera Model
           * @default null
           */
          cameraModel: string | null;
          /**
           * Color Space
           * @default null
           */
          colorSpace: string | null;
          /**
           * Exposure Bias
           * @default null
           */
          exposureBias: number | null;
          /**
           * Exposure Mode
           * @default null
           */
          exposureMode: string | null;
          /**
           * Exposure Time
           * @default null
           */
          exposureTime: number | null;
          /**
           * Flash Used
           * @default null
           */
          flashUsed: boolean | null;
          /**
           * Focal Length
           * @default null
           */
          focalLength: number | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Iso Speed
           * @default null
           */
          isoSpeed: number | null;
          /**
           * Lens
           * @default null
           */
          lens: string | null;
          /**
           * ImageMediaMetadataLocation
           * @default null
           */
          location: {
              /**
               * Altitude
               * @default null
               */
              altitude: number | null;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
          } | null;
          /**
           * Max Aperture Value
           * @default null
           */
          maxApertureValue: number | null;
          /**
           * Metering Mode
           * @default null
           */
          meteringMode: string | null;
          /**
           * Rotation
           * @default null
           */
          rotation: number | null;
          /**
           * Sensor
           * @default null
           */
          sensor: string | null;
          /**
           * Subject Distance
           * @default null
           */
          subjectDistance: number | null;
          /**
           * Time
           * @description RFC 3339 date-time
           * @default null
           */
          time: string | null;
          /**
           * White Balance
           * @default null
           */
          whiteBalance: string | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Is App Authorized
       * @description Output only. Whether the file was created or opened by the requesting app.
       * @default null
       */
      isAppAuthorized: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default null
       */
      kind: string | null;
      /**
       * User
       * @description Output only. The last user to modify the file.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * LinkShareMetadata
       * @description Output only. LinkShare related details.
       * @default null
       */
      linkShareMetadata: {
          /**
           * Security Update Eligible
           * @description Output only.
           * @default null
           */
          securityUpdateEligible: boolean | null;
          /**
           * Security Update Enabled
           * @description Output only.
           * @default null
           */
          securityUpdateEnabled: boolean | null;
      } | null;
      /**
       * Md5 Checksum
       * @description Output only. The MD5 checksum for the content of the file.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified By Me
       * @description Output only. Whether the file has been modified by this user.
       * @default null
       */
      modifiedByMe: boolean | null;
      /**
       * Modified By Me Time
       * @description Output only. The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modifiedByMeTime: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Owned By Me
       * @description Output only. Whether the user owns the file.
       * @default null
       */
      ownedByMe: boolean | null;
      /**
       * Owners
       * @description Output only. The owner(s) of this file.
       */
      owners?: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders.
       */
      parents?: string[] | null;
      /**
       * Permission Ids
       * @description Output only. List of permission IDs for users with access.
       */
      permissionIds?: string[] | null;
      /**
       * Permissions
       * @description Output only. The full list of permissions. Structure of Permission resource is complex and represented as Dict[str, t.Any].
       */
      permissions?: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs visible to all apps.
       */
      properties?: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description Output only. The number of storage quota bytes used (int64 format).
       * @default null
       */
      quotaBytesUsed: string | null;
      /**
       * Resource Key
       * @description Output only. A key needed to access the item via a shared link.
       * @default null
       */
      resourceKey: string | null;
      /**
       * Sha1 Checksum
       * @description Output only. The SHA1 checksum for the file content.
       * @default null
       */
      sha1Checksum: string | null;
      /**
       * Sha256 Checksum
       * @description Output only. The SHA256 checksum for the file content.
       * @default null
       */
      sha256Checksum: string | null;
      /**
       * Shared
       * @description Output only. Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description Output only. The time at which the file was shared with the user (RFC 3339 date-time).
       * @default null
       */
      sharedWithMeTime: string | null;
      /**
       * User
       * @description Output only. The user who shared the file with the requesting user.
       * @default null
       */
      sharingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * ShortcutDetails
       * @description Shortcut file details.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @default null
           */
          targetId: string | null;
          /**
           * Target Mime Type
           * @description Output only.
           * @default null
           */
          targetMimeType: string | null;
          /**
           * Target Resource Key
           * @description Output only.
           * @default null
           */
          targetResourceKey: string | null;
      } | null;
      /**
       * Size
       * @description Output only. Size in bytes (int64 format).
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description Output only. The list of spaces which contain the file.
       */
      spaces?: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Team Drive Id
       * @description Deprecated: Output only. Use driveId instead.
       * @default null
       */
      teamDriveId: string | null;
      /**
       * Thumbnail Link
       * @description Output only. A short-lived link to the file's thumbnail.
       * @default null
       */
      thumbnailLink: string | null;
      /**
       * Thumbnail Version
       * @description Output only. The thumbnail version (int64 format).
       * @default null
       */
      thumbnailVersion: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Trashed Time
       * @description Output only. The time that the item was trashed (RFC 3339 date-time).
       * @default null
       */
      trashedTime: string | null;
      /**
       * User
       * @description Output only. If the file has been explicitly trashed, the user who trashed it.
       * @default null
       */
      trashingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Version
       * @description Output only. A monotonically increasing version number for the file (int64 format).
       * @default null
       */
      version: string | null;
      /**
       * VideoMediaMetadata
       * @description Output only. Additional metadata about video media.
       * @default null
       */
      videoMediaMetadata: {
          /**
           * Duration Millis
           * @description int64 format
           * @default null
           */
          durationMillis: string | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Viewed By Me
       * @description Output only. Whether the file has been viewed by this user.
       * @default null
       */
      viewedByMe: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewedByMeTime: string | null;
      /**
       * Viewers Can Copy Content
       * @description Deprecated: Use copyRequiresWriterPermission instead.
       * @default null
       */
      viewersCanCopyContent: boolean | null;
      /**
       * Web Content Link
       * @description Output only. A link for downloading the content of the file in a browser.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description Output only. A link for opening the file in a relevant Google editor or viewer.
       * @default null
       */
      webViewLink: string | null;
      /**
       * Writers Can Share
       * @description Whether users with writer permission can modify permissions.
       * @default null
       */
      writersCanShare: boolean | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_COMMENT tool input.
 */
type GOOGLEDRIVE_CREATE_COMMENT_INPUT = {
  /**
   * Anchor
   * @description A JSON string representing the region of the document to which the comment is anchored (e.g., {'type': 'line', 'line': 12}).
   * @default null
   */
  anchor: string | null;
  /**
   * Content
   * @description The plain text content of the comment.
   */
  content?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Quoted File Content Mime Type
   * @description The MIME type of the quoted content.
   * @default null
   */
  quoted_file_content_mime_type: string | null;
  /**
   * Quoted File Content Value
   * @description The quoted content itself.
   * @default null
   */
  quoted_file_content_value: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_COMMENT tool output.
 */
type GOOGLEDRIVE_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Anchor
       * @description The region of the document to which the comment is anchored, if any.
       * @default null
       */
      anchor: string | null;
      /**
       * Author
       * @description The user who created the comment.
       */
      author: {
          [key: string]: unknown;
      };
      /**
       * Content
       * @description The plain text content of the comment.
       */
      content: string;
      /**
       * Created Time
       * @description The time the comment was created.
       */
      createdTime: string;
      /**
       * Deleted
       * @description Whether the comment has been deleted.
       */
      deleted: boolean;
      /**
       * Id
       * @description The ID of the comment.
       */
      id: string;
      /**
       * Kind
       * @description Identifies the resource type, always 'drive#comment'.
       */
      kind: string;
      /**
       * Modified Time
       * @description The time the comment was last modified.
       */
      modifiedTime: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_DRIVE tool input.
 */
type GOOGLEDRIVE_CREATE_DRIVE_INPUT = {
  /**
   * BackgroundImageFile
   * @description An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
   * @default null
   */
  backgroundImageFile: {
      /**
       * Id
       * @description The ID of an image file in Google Drive to use for the background.
       */
      id: string;
      /**
       * Width
       * @description The width of the cropped image in the range: 0.0 <= width <= 1.0.
       */
      width: number;
      /**
       * X Coordinate
       * @description The X coordinate of the cropped image in the range: 0.0 <= xCoordinate <= 1.0.
       */
      xCoordinate: number;
      /**
       * Y Coordinate
       * @description The Y coordinate of the cropped image in the range: 0.0 <= yCoordinate <= 1.0.
       */
      yCoordinate: number;
  } | null;
  /**
   * Color Rgb
   * @description The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId.
   * @default null
   */
  colorRgb: string | null;
  /**
   * Hidden
   * @description Whether the shared drive is hidden from default view.
   * @default false
   */
  hidden: boolean | null;
  /**
   * Name
   * @description The name of this shared drive.
   */
  name?: string;
  /**
   * Request Id
   * @description An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
   */
  requestId?: string;
  /**
   * Theme Id
   * @description The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.
   * @default null
   */
  themeId: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_DRIVE tool output.
 */
type GOOGLEDRIVE_CREATE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background Image Link
       * @description A short-lived link to this shared drive's background image.
       * @default null
       */
      backgroundImageLink: string | null;
      /**
       * DriveCapabilities
       * @description Capabilities the current user has on this shared drive.
       * @default null
       */
      capabilities: {
          /**
           * Can Add Children
           * @description Whether users with writer permissions can add children to folders in this shared drive.
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission Restriction
           * @description Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive.
           * @default null
           */
          canChangeCopyRequiresWriterPermissionRestriction: boolean | null;
          /**
           * Can Change Domain Users Only Restriction
           * @description Whether the current user can change the domainUsersOnly restriction of this shared drive.
           * @default null
           */
          canChangeDomainUsersOnlyRestriction: boolean | null;
          /**
           * Can Change Drive Background
           * @description Whether the current user can change the background of this shared drive.
           * @default null
           */
          canChangeDriveBackground: boolean | null;
          /**
           * Can Change Drive Members Only Restriction
           * @description Whether the current user can change the driveMembersOnly restriction of this shared drive.
           * @default null
           */
          canChangeDriveMembersOnlyRestriction: boolean | null;
          /**
           * Can Change Sharing Folders Requires Organizer Permission Restriction
           * @description Whether the current user can change the sharingFoldersRequiresOrganizerPermission restriction of this shared drive.
           * @default null
           */
          canChangeSharingFoldersRequiresOrganizerPermissionRestriction: boolean | null;
          /**
           * Can Comment
           * @description Whether users with commenter permissions can comment on files in this shared drive.
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @description Whether users with reader or commenter permissions can copy files in this shared drive.
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete Children
           * @description Whether users with writer permissions can delete children from folders in this shared drive. This is deprecated and now identical to canDeleteDrive.
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Delete Drive
           * @description Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.
           * @default null
           */
          canDeleteDrive: boolean | null;
          /**
           * Can Download
           * @description Whether users with reader or commenter permissions can download files in this shared drive.
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @description Whether users with writer permissions can edit files in this shared drive.
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can List Children
           * @description Whether users with reader or commenter permissions can list the children of folders in this shared drive.
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Manage Members
           * @description Whether the current user can add members to this shared drive or remove them or change their role.
           * @default null
           */
          canManageMembers: boolean | null;
          /**
           * Can Read Revisions
           * @description Whether the current user can read the revisions resource of files in this shared drive.
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Rename
           * @description Whether users with writer permissions can rename files or folders in this shared drive.
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Rename Drive
           * @description Whether the current user can rename this shared drive.
           * @default null
           */
          canRenameDrive: boolean | null;
          /**
           * Can Share
           * @description Whether the current user can share files or folders in this shared drive.
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash Children
           * @description Whether users with writer permissions can trash children from folders in this shared drive. This is deprecated and now identical to canDeleteDrive.
           * @default null
           */
          canTrashChildren: boolean | null;
      } | null;
      /**
       * Color Rgb
       * @description The color of this shared drive as an RGB hex string.
       * @default null
       */
      colorRgb: string | null;
      /**
       * Created Time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
       */
      kind: string;
      /**
       * Name
       * @description The name of this shared drive.
       */
      name: string;
      /**
       * Org Unit Id
       * @description The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true.
       * @default null
       */
      orgUnitId: string | null;
      /**
       * DriveRestrictions
       * @description A set of restrictions that apply to this shared drive or items inside this shared drive.
       * @default null
       */
      restrictions: {
          /**
           * Admin Managed Restrictions
           * @description Whether administrative privileges on this shared drive are required to modify restrictions.
           * @default null
           */
          adminManagedRestrictions: boolean | null;
          /**
           * Copy Requires Writer Permission
           * @description Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When true, only permissions with write access will be able to copy, print, or download files.
           * @default null
           */
          copyRequiresWriterPermission: boolean | null;
          /**
           * Domain Users Only
           * @description Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of Drive.
           * @default null
           */
          domainUsersOnly: boolean | null;
          /**
           * Drive Members Only
           * @description Whether access to items inside this shared drive is restricted to its members.
           * @default null
           */
          driveMembersOnly: boolean | null;
          /**
           * Sharing Folders Requires Organizer Permission
           * @description Whether the ability to share folders in this shared drive is restricted to users with organizer_role for this shared drive.
           * @default null
           */
          sharingFoldersRequiresOrganizerPermission: boolean | null;
      } | null;
      /**
       * Theme Id
       * @description The ID of the theme from which the background image and color will be set.
       * @default null
       */
      themeId: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_FILE tool input.
 */
type GOOGLEDRIVE_CREATE_FILE_INPUT = {
  /**
   * Description
   * @description A short description of the file.
   * @default null
   */
  description: string | null;
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Mime Type
   * @description The MIME type of the file.
   * @default null
   */
  mimeType: string | null;
  /**
   * Name
   * @description The name of the file.
   * @default null
   */
  name: string | null;
  /**
   * Parents
   * @description The IDs of parent folders.
   * @default null
   */
  parents: string[] | null;
  /**
   * Starred
   * @description Whether the user has starred the file.
   * @default null
   */
  starred: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_FILE tool output.
 */
type GOOGLEDRIVE_CREATE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in.
       * @default null
       */
      driveId: string | null;
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Parents
       * @description The list of parent IDs for the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_FILE_FROM_TEXT tool input.
 */
type GOOGLEDRIVE_CREATE_FILE_FROM_TEXT_INPUT = {
  /**
   * File Name
   * @description Desired name for the new file on Google Drive.
   */
  file_name?: string;
  /**
   * Mime Type
   * @description MIME type for the new file, determining how Google Drive interprets its content.
   * @default text/plain
   */
  mime_type: string;
  /**
   * Parent Id
   * @description ID of the parent folder in Google Drive; if omitted, the file is created in the root of 'My Drive'.
   * @default null
   */
  parent_id: string | null;
  /**
   * Text Content
   * @description Plain text content to be written into the new file.
   */
  text_content?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_FILE_FROM_TEXT tool output.
 */
type GOOGLEDRIVE_CREATE_FILE_FROM_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Kind
       * @description Identifies the resource type. For example, for a file, this is 'drive#file'.
       */
      kind: string;
      /**
       * Mime Type
       * @description The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the file.
       */
      name: string;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web Content Link
       * Format: uri
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * Format: uri
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_FOLDER tool input.
 */
type GOOGLEDRIVE_CREATE_FOLDER_INPUT = {
  /**
   * Folder Name
   * @description Name for the new folder.
   */
  folder_name?: string;
  /**
   * Parent Id
   * @description ID or name of the parent folder. If a name is provided, the action attempts to find it. If an ID is provided, it must be a valid Google Drive folder ID. If omitted, the folder is created in the Drive root.
   * @default null
   */
  parent_id: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_FOLDER tool output.
 */
type GOOGLEDRIVE_CREATE_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created folder.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the created folder, which will be 'application/vnd.google-apps.folder'.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the created folder.
       */
      name: string;
      /**
       * Parents
       * @description The ID(s) of the parent folder(s).
       * @default null
       */
      parents: string[] | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_REPLY tool input.
 */
type GOOGLEDRIVE_CREATE_REPLY_INPUT = {
  /**
   * Action
   * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen.
   * @default null
   */
  action: string | null;
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Content
   * @description The plain text content of the reply. HTML content is not supported.
   */
  content?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response.
   * @default null
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_REPLY tool output.
 */
type GOOGLEDRIVE_CREATE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen.
       * @default null
       */
      action: string | null;
      /**
       * Author
       * @description The user who created the reply.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description A short-lived display name for the user.
           * @default null
           */
          display_name: string | null;
          /**
           * Email Address
           * @description The email address of the user. This is only populated if the drive.readonly.metadata scope is used.
           * @default null
           */
          email_address: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string 'drive#user'.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permission_id: string | null;
          /**
           * Photo Link
           * @description A short-lived link to the user's profile photo, if available.
           * @default null
           */
          photo_link: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the reply.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time the reply was created (RFC 3339 date-time).
       * @default null
       */
      created_time: string | null;
      /**
       * Deleted
       * @description Whether the reply has been deleted. A deleted reply has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The HTML content of the reply.
       * @default null
       */
      html_content: string | null;
      /**
       * Id
       * @description The ID of the reply.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#reply'.
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * @description The last time the reply was modified (RFC 3339 date-time).
       * @default null
       */
      modified_time: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE tool input.
 */
type GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE_INPUT = {
  /**
   * Ignore Default Visibility
   * @description Whether to ignore the domain's default visibility settings for the created file.
   * @default null
   */
  ignoreDefaultVisibility: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the labelInfo part of the response.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Keep Revision Forever
   * @description Whether to set the 'keepForever' field in the new head revision.
   * @default null
   */
  keepRevisionForever: boolean | null;
  /**
   * Name
   * @description The name of the shortcut.
   */
  name?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Recommended to set to true if interacting with shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
  /**
   * Target Id
   * @description The ID of the file or folder that this shortcut points to.
   */
  target_id?: string;
  /**
   * Target Mime Type
   * @description The MIME type of the target file or folder. While optional, providing it can be helpful.
   * @default null
   */
  target_mime_type: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE tool output.
 */
type GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drive Id
       * @description The ID of the drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      driveId: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       */
      kind: string;
      /**
       * Mime Type
       * @description The MIME type of the file.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the file.
       */
      name: string;
      /**
       * ShortcutDetails
       * @description Shortcut file details. Only populated for shortcut files.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @description The ID of the file or folder that this shortcut points to.
           */
          targetId: string;
          /**
           * Target Mime Type
           * @description The MIME type of the target.
           * @default null
           */
          targetMimeType: string | null;
      } | null;
      /**
       * Team Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      teamDriveId: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_COMMENT tool input.
 */
type GOOGLEDRIVE_DELETE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_COMMENT tool output.
 */
type GOOGLEDRIVE_DELETE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the operation.
       * @default Comment deleted successfully.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_DRIVE tool input.
 */
type GOOGLEDRIVE_DELETE_DRIVE_INPUT = {
  /**
   * Allow Item Deletion
   * @description Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
   * @default null
   */
  allowItemDeletion: boolean | null;
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  driveId?: string;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_DRIVE tool output.
 */
type GOOGLEDRIVE_DELETE_DRIVE_OUTPUT = {
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_PERMISSION tool input.
 */
type GOOGLEDRIVE_DELETE_PERMISSION_INPUT = {
  /**
   * File Id
   * @description The ID of the file or shared drive.
   */
  file_id?: string;
  /**
   * Permission Id
   * @description The ID of the permission.
   */
  permission_id?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_PERMISSION tool output.
 */
type GOOGLEDRIVE_DELETE_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the permission was deleted successfully.
       * @default true
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_REPLY tool input.
 */
type GOOGLEDRIVE_DELETE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Reply Id
   * @description The ID of the reply.
   */
  reply_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DELETE_REPLY tool output.
 */
type GOOGLEDRIVE_DELETE_REPLY_OUTPUT = {
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DOWNLOAD_FILE tool input.
 */
type GOOGLEDRIVE_DOWNLOAD_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier of the file to be downloaded from Google Drive. This ID can typically be found in the file's URL in Google Drive or obtained from API calls that list files.
   */
  file_id?: string;
  /**
   * MimeType
   * @description Target MIME type for exporting Google Workspace documents (e.g., Google Doc, Sheet, Slide). Supported export formats vary by file type; e.g., text/plain is only supported for Google Docs, not Sheets or Slides. This parameter is automatically ignored for non-Google Workspace files, which are downloaded in their native format. Only specify this when you want to export a Google Workspace document to a different format (e.g., export Google Doc to PDF).
   * @default null
   * @enum {string|null}
   */
  mime_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.oasis.opendocument.text" | "application/rtf" | "application/pdf" | "text/plain" | "application/zip" | "application/epub+zip" | "text/markdown" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/x-vnd.oasis.opendocument.spreadsheet" | "text/csv" | "text/tab-separated-values" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.oasis.opendocument.presentation" | "image/jpeg" | "image/png" | "image/svg+xml" | "application/vnd.google-apps.script+json" | "application/vnd.google-apps.vid" | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_DOWNLOAD_FILE tool output.
 */
type GOOGLEDRIVE_DOWNLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Downloaded File Content
       * @description A reference to the downloaded file content. If the original file was a Google Workspace document and a mime_type was specified for export, this content will be in the exported format. Otherwise, it will be the original file content.
       */
      downloaded_file_content: {
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
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default drive#file
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_EDIT_FILE tool input.
 */
type GOOGLEDRIVE_EDIT_FILE_INPUT = {
  /**
   * Content
   * @description New textual content to overwrite the existing file; will be UTF-8 encoded for upload.
   */
  content?: string;
  /**
   * File Id
   * @description Identifier of the Google Drive file to update.
   */
  file_id?: string;
  /**
   * Mime Type
   * @description MIME type of the 'content' being uploaded; must accurately represent its format.
   * @default text/plain
   */
  mime_type: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_EDIT_FILE tool output.
 */
type GOOGLEDRIVE_EDIT_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs which are visible to all apps.
       * @default null
       */
      appProperties: {
          [key: string]: string;
      } | null;
      /**
       * FileCapabilities
       * @description Capabilities the current user has on this file.
       * @default null
       */
      capabilities: {
          /**
           * Can Accept Ownership
           * @default null
           */
          canAcceptOwnership: boolean | null;
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Add Folder From Another Drive
           * @default null
           */
          canAddFolderFromAnotherDrive: boolean | null;
          /**
           * Can Add My Drive Parent
           * @default null
           */
          canAddMyDriveParent: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission
           * @default null
           */
          canChangeCopyRequiresWriterPermission: boolean | null;
          /**
           * Can Change Security Update Enabled
           * @default null
           */
          canChangeSecurityUpdateEnabled: boolean | null;
          /**
           * Can Change Viewers Can Copy Content
           * @default null
           */
          canChangeViewersCanCopyContent: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Disable Inherited Permissions
           * @default null
           */
          canDisableInheritedPermissions: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can Enable Inherited Permissions
           * @default null
           */
          canEnableInheritedPermissions: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Modify Content
           * @default null
           */
          canModifyContent: boolean | null;
          /**
           * Can Modify Content Restriction
           * @default null
           */
          canModifyContentRestriction: boolean | null;
          /**
           * Can Modify Editor Content Restriction
           * @default null
           */
          canModifyEditorContentRestriction: boolean | null;
          /**
           * Can Modify Labels
           * @default null
           */
          canModifyLabels: boolean | null;
          /**
           * Can Modify Owner Content Restriction
           * @default null
           */
          canModifyOwnerContentRestriction: boolean | null;
          /**
           * Can Move Children Out Of Drive
           * @default null
           */
          canMoveChildrenOutOfDrive: boolean | null;
          /**
           * Can Move Children Out Of Team Drive
           * @default null
           */
          canMoveChildrenOutOfTeamDrive: boolean | null;
          /**
           * Can Move Children Within Drive
           * @default null
           */
          canMoveChildrenWithinDrive: boolean | null;
          /**
           * Can Move Children Within Team Drive
           * @default null
           */
          canMoveChildrenWithinTeamDrive: boolean | null;
          /**
           * Can Move Item Into Team Drive
           * @default null
           */
          canMoveItemIntoTeamDrive: boolean | null;
          /**
           * Can Move Item Out Of Drive
           * @default null
           */
          canMoveItemOutOfDrive: boolean | null;
          /**
           * Can Move Item Out Of Team Drive
           * @default null
           */
          canMoveItemOutOfTeamDrive: boolean | null;
          /**
           * Can Move Item Within Drive
           * @default null
           */
          canMoveItemWithinDrive: boolean | null;
          /**
           * Can Move Item Within Team Drive
           * @default null
           */
          canMoveItemWithinTeamDrive: boolean | null;
          /**
           * Can Move Team Drive Item
           * @default null
           */
          canMoveTeamDriveItem: boolean | null;
          /**
           * Can Read Drive
           * @default null
           */
          canReadDrive: boolean | null;
          /**
           * Can Read Labels
           * @default null
           */
          canReadLabels: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Read Team Drive
           * @default null
           */
          canReadTeamDrive: boolean | null;
          /**
           * Can Remove Children
           * @default null
           */
          canRemoveChildren: boolean | null;
          /**
           * Can Remove Content Restriction
           * @default null
           */
          canRemoveContentRestriction: boolean | null;
          /**
           * Can Remove My Drive Parent
           * @default null
           */
          canRemoveMyDriveParent: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash
           * @default null
           */
          canTrash: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
          /**
           * Can Untrash
           * @default null
           */
          canUntrash: boolean | null;
      } | null;
      /**
       * ContentHints
       * @description Additional information about the content of the file.
       * @default null
       */
      contentHints: {
          /**
           * Indexable Text
           * @description Text to be indexed for the file to improve searchability.
           * @default null
           */
          indexableText: string | null;
          /**
           * ContentHintsThumbnail
           * @description A thumbnail for the file.
           * @default null
           */
          thumbnail: {
              /**
               * Image
               * @description A Base64 encoded image.
               * @default null
               */
              image: string | null;
              /**
               * Mime Type
               * @description The MIME type of the thumbnail.
               * @default null
               */
              mimeType: string | null;
          } | null;
      } | null;
      /**
       * Content Restrictions
       * @description Content restrictions for this file.
       * @default null
       */
      contentRestrictions: {
          /**
           * Owner Restricted
           * @default null
           */
          ownerRestricted: boolean | null;
          /**
           * Read Only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Reason
           * @default null
           */
          reason: string | null;
          /**
           * User
           * @default null
           */
          restrictingUser: {
              /**
               * Display Name
               * @description A plain text displayable name for this user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Restriction Time
           * @default null
           */
          restrictionTime: string | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether copying this file requires writer permission.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      driveId: string | null;
      /**
       * Explicitly Trashed
       * @description Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
       * @default null
       */
      explicitlyTrashed: boolean | null;
      /**
       * Export Links
       * @description Links for exporting Google Docs Editors files to specific formats.
       * @default null
       */
      exportLinks: {
          [key: string]: string;
      } | null;
      /**
       * File Extension
       * @description The file extension extracted from the name field.
       * @default null
       */
      fileExtension: string | null;
      /**
       * Folder Color Rgb
       * @description The color for a folder as an RGB hex string.
       * @default null
       */
      folderColorRgb: string | null;
      /**
       * Full File Extension
       * @description The full file extension extracted from the name field.
       * @default null
       */
      fullFileExtension: string | null;
      /**
       * Has Augmented Permissions
       * @description Whether there are permissions directly on this file. This field is only populated for items in shared drives.
       * @default null
       */
      hasAugmentedPermissions: boolean | null;
      /**
       * Has Thumbnail
       * @description Whether this file has a thumbnail.
       * @default null
       */
      hasThumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description The ID of the head revision of the file.
       * @default null
       */
      headRevisionId: string | null;
      /**
       * Icon Link
       * @description A static, publicly accessible link to the file's icon.
       * @default null
       */
      iconLink: string | null;
      /**
       * Id
       * @description Unique identifier of the edited file.
       */
      id: string;
      /**
       * ImageMediaMetadata
       * @description Metadata for image media.
       * @default null
       */
      imageMediaMetadata: {
          /**
           * Aperture
           * @default null
           */
          aperture: number | null;
          /**
           * Camera Make
           * @default null
           */
          cameraMake: string | null;
          /**
           * Camera Model
           * @default null
           */
          cameraModel: string | null;
          /**
           * Color Space
           * @default null
           */
          colorSpace: string | null;
          /**
           * Exposure Bias
           * @default null
           */
          exposureBias: number | null;
          /**
           * Exposure Mode
           * @default null
           */
          exposureMode: string | null;
          /**
           * Exposure Time
           * @default null
           */
          exposureTime: number | null;
          /**
           * Flash Used
           * @default null
           */
          flashUsed: boolean | null;
          /**
           * Focal Length
           * @default null
           */
          focalLength: number | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Iso Speed
           * @default null
           */
          isoSpeed: number | null;
          /**
           * ImageMediaMetadataLocation
           * @default null
           */
          location: {
              /**
               * Altitude
               * @default null
               */
              altitude: number | null;
              /**
               * Latitude
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @default null
               */
              longitude: number | null;
          } | null;
          /**
           * Max Aperture Value
           * @default null
           */
          maxApertureValue: number | null;
          /**
           * Metering Mode
           * @default null
           */
          meteringMode: string | null;
          /**
           * Rotation
           * @default null
           */
          rotation: number | null;
          /**
           * Sensor
           * @default null
           */
          sensor: string | null;
          /**
           * Subject Distance
           * @default null
           */
          subjectDistance: number | null;
          /**
           * Time
           * @default null
           */
          time: string | null;
          /**
           * White Balance
           * @default null
           */
          whiteBalance: string | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Is App Authorized
       * @description Whether the file was created or opened by the requesting app.
       * @default null
       */
      isAppAuthorized: boolean | null;
      /**
       * Kind
       * @description Resource kind, typically 'drive#file'.
       */
      kind: string;
      /**
       * LabelInfo
       * @description Information about custom labels applied to this file.
       * @default null
       */
      labelInfo: {
          /**
           * Labels
           * @default null
           */
          labels: {
              /**
               * Fields
               * @default null
               */
              fields: {
                  [key: string]: unknown;
              } | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
              /**
               * Kind
               * @default null
               */
              kind: string | null;
              /**
               * Revision Id
               * @default null
               */
              revisionId: string | null;
          }[] | null;
      } | null;
      /**
       * User
       * @description The last user to modify the file.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * LinkShareMetadata
       * @description Metadata about the shared link for this file.
       * @default null
       */
      linkShareMetadata: {
          /**
           * Security Update Eligible
           * @default null
           */
          securityUpdateEligible: boolean | null;
          /**
           * Security Update Enabled
           * @default null
           */
          securityUpdateEnabled: boolean | null;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum for the content of this file.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description MIME type of the edited file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified By Me
       * @description Whether the file has been modified by this user.
       * @default null
       */
      modifiedByMe: boolean | null;
      /**
       * Modified By Me Time
       * @description The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modifiedByMeTime: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Name
       * @description Name of the edited file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content if the file was uploaded from a file.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Owned By Me
       * @description Whether the user owns the file.
       * @default null
       */
      ownedByMe: boolean | null;
      /**
       * Owners
       * @description A list of users who own the file.
       * @default null
       */
      owners: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Permission Ids
       * @description A list of permission IDs for the file.
       * @default null
       */
      permissionIds: string[] | null;
      /**
       * Permissions
       * @description The permissions for the file. Only populated if explicitly requested.
       * @default null
       */
      permissions: {
          /**
           * Allow File Discovery
           * @default null
           */
          allowFileDiscovery: boolean | null;
          /**
           * Deleted
           * @default null
           */
          deleted: boolean | null;
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /**
           * Email Address
           * @default null
           */
          emailAddress: string | null;
          /**
           * Expiration Time
           * @default null
           */
          expirationTime: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Inherited
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Kind
           * @default null
           */
          kind: string | null;
          /**
           * Permission Details
           * @default null
           */
          permissionDetails: {
              /**
               * Inherited
               * @default null
               */
              inherited: boolean | null;
              /**
               * Inherited From
               * @default null
               */
              inheritedFrom: string | null;
              /**
               * Permission Type
               * @default null
               */
              permissionType: string | null;
              /**
               * Role
               * @default null
               */
              role: string | null;
          }[] | null;
          /**
           * Photo Link
           * @default null
           */
          photoLink: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * Team Drive Permission Details
           * @default null
           */
          teamDrivePermissionDetails: {
              /**
               * Inherited
               * @default null
               */
              inherited: boolean | null;
              /**
               * Inherited From
               * @default null
               */
              inheritedFrom: string | null;
              /**
               * Permission Type
               * @default null
               */
              permissionType: string | null;
              /**
               * Role
               * @default null
               */
              role: string | null;
          }[] | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description The number of quota bytes used by this file.
       * @default null
       */
      quotaBytesUsed: string | null;
      /**
       * Resource Key
       * @description A resource key for the file.
       * @default null
       */
      resourceKey: string | null;
      /**
       * Sha1 Checksum
       * @description The SHA1 checksum for the content of this file.
       * @default null
       */
      sha1Checksum: string | null;
      /**
       * Sha256 Checksum
       * @description The SHA256 checksum for the content of this file.
       * @default null
       */
      sha256Checksum: string | null;
      /**
       * Shared
       * @description Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description The time at which the file was shared with the user (RFC 3339 date-time).
       * @default null
       */
      sharedWithMeTime: string | null;
      /**
       * User
       * @description The user who shared the file with the requesting user, if applicable.
       * @default null
       */
      sharingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * ShortcutDetails
       * @description Shortcut file details. Only populated for shortcut files.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @description The ID of the file that this shortcut points to.
           * @default null
           */
          targetId: string | null;
          /**
           * Target Mime Type
           * @description The MIME type of the file that this shortcut points to.
           * @default null
           */
          targetMimeType: string | null;
          /**
           * Target Resource Key
           * @description The resource key of the target file.
           * @default null
           */
          targetResourceKey: string | null;
      } | null;
      /**
       * Size
       * @description The size of the file's content in bytes. This is only applicable to files with binary content.
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
       * @default null
       */
      spaces: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Thumbnail Link
       * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours.
       * @default null
       */
      thumbnailLink: string | null;
      /**
       * Thumbnail Version
       * @description The thumbnail version for use in thumbnail cache invalidation.
       * @default null
       */
      thumbnailVersion: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Trashed Time
       * @description The time that the item was trashed. Only populated for items in shared drives.
       * @default null
       */
      trashedTime: string | null;
      /**
       * User
       * @description The user who trashed the file. Only populated for items in shared drives.
       * @default null
       */
      trashingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: string | null;
      /**
       * VideoMediaMetadata
       * @description Metadata for video media.
       * @default null
       */
      videoMediaMetadata: {
          /**
           * Duration Millis
           * @default null
           */
          durationMillis: string | null;
          /**
           * Height
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Viewed By Me
       * @description Whether the file has been viewed by this user.
       * @default null
       */
      viewedByMe: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewedByMeTime: string | null;
      /**
       * Viewers Can Copy Content
       * @description Whether users with viewer permissions are permitted to copy the content of this file.
       * @default null
       */
      viewersCanCopyContent: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
      /**
       * Writers Can Share
       * @description Whether writers can share the document with other users.
       * @default null
       */
      writersCanShare: boolean | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_EMPTY_TRASH tool input.
 */
type GOOGLEDRIVE_EMPTY_TRASH_INPUT = {
  /**
   * Drive Id
   * @description If set, empties the trash of the provided shared drive. This parameter is ignored if the item is not in a shared drive.
   * @default null
   */
  driveId: string | null;
  /**
   * Enforce Single Parent
   * @description Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. This parameter is ignored if the item is not in a shared drive.
   * @default null
   */
  enforceSingleParent: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_EMPTY_TRASH tool output.
 */
type GOOGLEDRIVE_EMPTY_TRASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the operation.
       * @default Trash emptied successfully.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_FILES_MODIFY_LABELS tool input.
 */
type GOOGLEDRIVE_FILES_MODIFY_LABELS_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Kind
   * @description This is always drive#modifyLabelsRequest.
   * @default drive#modifyLabelsRequest
   */
  kind: string | null;
  /**
   * Label Modifications
   * @description The list of modifications to apply to the labels on the file.
   */
  label_modifications?: {
      /**
       * Field Modifications
       * @description The list of modifications to this label's fields.
       * @default null
       */
      field_modifications: {
          /**
           * Field Id
           * @description The ID of the field to be modified.
           */
          field_id: string;
          /**
           * Kind
           * @description This is always drive#labelFieldModification.
           * @default drive#labelFieldModification
           */
          kind: string | null;
          /**
           * Set Date Values
           * @description Replaces the value of a `date` field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.
           * @default null
           */
          set_date_values: string[] | null;
          /**
           * Set Integer Values
           * @description Replaces the value of an `integer` field with these new values.
           * @default null
           */
          set_integer_values: string[] | null;
          /**
           * Set Selection Values
           * @description Replaces a `selection` field with these new values.
           * @default null
           */
          set_selection_values: string[] | null;
          /**
           * Set Text Values
           * @description Sets the value of a `text` field.
           * @default null
           */
          set_text_values: string[] | null;
          /**
           * Set User Values
           * @description Replaces a `user` field with these new values. The values must be valid email addresses.
           * @default null
           */
          set_user_values: string[] | null;
          /**
           * Unset Values
           * @description Unsets the values for this field.
           * @default null
           */
          unset_values: boolean | null;
      }[] | null;
      /**
       * Kind
       * @description This is always drive#labelModification.
       * @default drive#labelModification
       */
      kind: string | null;
      /**
       * Label Id
       * @description The ID of the label to modify.
       */
      label_id: string;
      /**
       * Remove Label
       * @description If true, the label will be removed from the file.
       * @default null
       */
      remove_label: boolean | null;
  }[];
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_FILES_MODIFY_LABELS tool output.
 */
type GOOGLEDRIVE_FILES_MODIFY_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description This is always drive#modifyLabelsResponse.
       */
      kind: string;
      /**
       * Modified Labels
       * @description The list of labels which were added or updated by the request.
       */
      modified_labels: {
          /**
           * Fields
           * @description A map of field IDs to field values.
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description The ID of the label.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies the resource type, this is always drive#label
           * @default null
           */
          kind: string | null;
          /**
           * Revision Id
           * @description The revision ID of the label.
           * @default null
           */
          revision_id: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_FIND_FILE tool input.
 */
type GOOGLEDRIVE_FIND_FILE_INPUT = {
  /**
   * Corpora
   * @description Corpora to query. 'user' for user's personal files, 'drive' for files in a specific shared drive (requires 'driveId'), 'domain' for files shared with the domain, 'allDrives' for all drives the user has access to.
   * @default null
   * @enum {string|null}
   */
  corpora: "user" | "drive" | "domain" | "allDrives" | null;
  /**
   * Drive Id
   * @description ID of the shared drive to search. Required if 'corpora' is 'drive'.
   * @default null
   */
  driveId: string | null;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. Use '*' for all fields or a comma-separated list, e.g., 'nextPageToken,files(id,name,mimeType)'.
   * @default *
   */
  fields: string | null;
  /**
   * Include Items From All Drives
   * @description Whether both My Drive and shared drive items should be included in results. If true, 'supportsAllDrives' should also be true.
   * @default false
   */
  includeItemsFromAllDrives: boolean | null;
  /**
   * Order By
   * @description A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example: 'modifiedTime desc,name'.
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Size
   * @description The maximum number of files to return per page.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page.
   * @default null
   */
  pageToken: string | null;
  /**
   * Q
   * @description A query for filtering the file results. See Google Drive API documentation for query syntax. Example: \"name contains 'report' and mimeType = 'application/pdf'\"
   * @default null
   */
  q: string | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
   * @default drive
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. If 'includeItemsFromAllDrives' is true, this must also be true.
   * @default true
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_FIND_FILE tool output.
 */
type GOOGLEDRIVE_FIND_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      files?: {
          /**
           * App Properties
           * @description A collection of arbitrary key-value pairs which are visible to all apps.
           * @default null
           */
          appProperties: {
              [key: string]: string;
          } | null;
          /**
           * GoogleDriveFileCapabilities
           * @description Capabilities the current user has on this file.
           * @default null
           */
          capabilities: {
              /**
               * Can Add Children
               * @description Whether the user can add children to this folder.
               * @default null
               */
              canAddChildren: boolean | null;
              /**
               * Can Change Copy Requires Writer Permission
               * @description Whether the user can change the copyRequiresWriterPermission restriction.
               * @default null
               */
              canChangeCopyRequiresWriterPermission: boolean | null;
              /**
               * Can Change Viewers Can Copy Content
               * @description Whether the user can change the viewersCanCopyContent restriction for this file.
               * @default null
               */
              canChangeViewersCanCopyContent: boolean | null;
              /**
               * Can Comment
               * @description Whether the user can comment on this file.
               * @default null
               */
              canComment: boolean | null;
              /**
               * Can Copy
               * @description Whether the user can copy this file.
               * @default null
               */
              canCopy: boolean | null;
              /**
               * Can Delete
               * @description Whether the user can delete this file.
               * @default null
               */
              canDelete: boolean | null;
              /**
               * Can Download
               * @description Whether the user can download this file.
               * @default null
               */
              canDownload: boolean | null;
              /**
               * Can Edit
               * @description Whether the user can edit this file.
               * @default null
               */
              canEdit: boolean | null;
              /**
               * Can List Children
               * @description Whether the user can list the children of this folder.
               * @default null
               */
              canListChildren: boolean | null;
              /**
               * Can Modify Content
               * @description Whether the user can modify the content of this file.
               * @default null
               */
              canModifyContent: boolean | null;
              /**
               * Can Move Item Into Team Drive
               * @description Whether the user can move this item into a Team Drive. (Deprecated: Use canMoveItemOutOfDrive instead)
               * @default null
               */
              canMoveItemIntoTeamDrive: boolean | null;
              /**
               * Can Move Item Out Of Drive
               * @description Whether the user can move this item out of the current drive.
               * @default null
               */
              canMoveItemOutOfDrive: boolean | null;
              /**
               * Can Move Item Within Drive
               * @description Whether the user can move this item within the current drive.
               * @default null
               */
              canMoveItemWithinDrive: boolean | null;
              /**
               * Can Read Revisions
               * @description Whether the user can read the revisions of this file.
               * @default null
               */
              canReadRevisions: boolean | null;
              /**
               * Can Remove Children
               * @description Whether the user can remove children from this folder.
               * @default null
               */
              canRemoveChildren: boolean | null;
              /**
               * Can Rename
               * @description Whether the user can rename this file.
               * @default null
               */
              canRename: boolean | null;
              /**
               * Can Share
               * @description Whether the user can share this file.
               * @default null
               */
              canShare: boolean | null;
              /**
               * Can Trash
               * @description Whether the user can trash this file.
               * @default null
               */
              canTrash: boolean | null;
              /**
               * Can Untrash
               * @description Whether the user can untrash this file.
               * @default null
               */
              canUntrash: boolean | null;
          } | null;
          /**
           * GoogleDriveFileContentHints
           * @description Additional information about the content of the file. These fields are never populated in responses.
           * @default null
           */
          contentHints: {
              /**
               * Indexable Text
               * @description Text to be indexed for the file to improve searchability.
               * @default null
               */
              indexableText: string | null;
              /**
               * GoogleDriveFileContentHintsThumbnail
               * @description Thumbnail for the file.
               * @default null
               */
              thumbnail: {
                  /**
                   * Image
                   * @description A Base64 encoded image.
                   * @default null
                   */
                  image: string | null;
                  /**
                   * Mime Type
                   * @description The MIME type of the thumbnail.
                   * @default null
                   */
                  mimeType: string | null;
              } | null;
          } | null;
          /**
           * Content Restrictions
           * @description Content restrictions for this file.
           * @default null
           */
          contentRestrictions: {
              /**
               * Read Only
               * @description Whether the content of this file is read-only.
               * @default null
               */
              readOnly: boolean | null;
              /**
               * Reason
               * @description Reason for the restriction. Only set if readOnly is true.
               * @default null
               */
              reason: string | null;
          }[] | null;
          /**
           * Copy Requires Writer Permission
           * @description Whether copying this file requires writer permission.
           * @default null
           */
          copyRequiresWriterPermission: boolean | null;
          /**
           * Created Time
           * Format: date-time
           * @description The time at which the file was created.
           * @default null
           */
          createdTime: string | null;
          /**
           * Description
           * @description A short description of the file.
           * @default null
           */
          description: string | null;
          /**
           * Drive Id
           * @description The ID of the shared drive the file resides in.
           * @default null
           */
          driveId: string | null;
          /**
           * Export Links
           * @description Links for exporting Google Docs to specific formats.
           * @default null
           */
          exportLinks: {
              [key: string]: string;
          } | null;
          /**
           * File Extension
           * @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
           * @default null
           */
          fileExtension: string | null;
          /**
           * Full File Extension
           * @description The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\".
           * @default null
           */
          fullFileExtension: string | null;
          /**
           * Has Thumbnail
           * @description Whether this file has a thumbnail.
           * @default null
           */
          hasThumbnail: boolean | null;
          /**
           * Head Revision Id
           * @description The ID of the head revision of the file.
           * @default null
           */
          headRevisionId: string | null;
          /**
           * Icon Link
           * Format: uri
           * @description A static, unauthenticated link to the file's icon.
           * @default null
           */
          iconLink: string | null;
          /**
           * Id
           * @description The ID of the file.
           * @default null
           */
          id: string | null;
          /**
           * GoogleDriveFileImageMediaMetadata
           * @description Metadata about image media. This will only be present for image types, and its contents will depend on the image type.
           * @default null
           */
          imageMediaMetadata: {
              /**
               * Height
               * @description The height of the image in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Rotation
               * @description The rotation of the image in degrees.
               * @default null
               */
              rotation: number | null;
              /**
               * Width
               * @description The width of the image in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Is App Authorized
           * @description Whether the file was created or opened by the requesting app.
           * @default null
           */
          isAppAuthorized: boolean | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string \"drive#file\".
           * @default drive#file
           */
          kind: string | null;
          /**
           * GoogleDriveUser
           * @description The last user to modify the file.
           * @default null
           */
          lastModifyingUser: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is.
               * @default drive#user
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's permission ID.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * Format: uri
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * GoogleDriveLinkShareMetadata
           * @description Metadata about the shared link for this file.
           * @default null
           */
          linkShareMetadata: {
              /**
               * Security Update Eligible
               * @description Whether the file is eligible for a security update.
               * @default null
               */
              securityUpdateEligible: boolean | null;
              /**
               * Security Update Enabled
               * @description Whether the security update is enabled for this file.
               * @default null
               */
              securityUpdateEnabled: boolean | null;
          } | null;
          /**
           * Md5 Checksum
           * @description The MD5 checksum for the content of this file. This is only applicable to files with binary content in Google Drive.
           * @default null
           */
          md5Checksum: string | null;
          /**
           * Mime Type
           * @description The MIME type of the file.
           * @default null
           */
          mimeType: string | null;
          /**
           * Modified By Me
           * @description Whether the file has been modified by this user.
           * @default null
           */
          modifiedByMe: boolean | null;
          /**
           * Modified By Me Time
           * Format: date-time
           * @description The last time the file was modified by the user.
           * @default null
           */
          modifiedByMeTime: string | null;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the file was modified by anyone.
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Name
           * @description The name of the file.
           * @default null
           */
          name: string | null;
          /**
           * Original Filename
           * @description The original filename of the uploaded content if available, or else the original value of the name field. Once set, it doesn't change.
           * @default null
           */
          originalFilename: string | null;
          /**
           * Owned By Me
           * @description Whether the user owns the file.
           * @default null
           */
          ownedByMe: boolean | null;
          /**
           * Owners
           * @description The owners of the file. Currently, only certain legacy files may have more than one owner.
           * @default null
           */
          owners: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is.
               * @default drive#user
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's permission ID.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * Format: uri
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          }[] | null;
          /**
           * Parents
           * @description The IDs of the parent folders which contain the file.
           * @default null
           */
          parents: string[] | null;
          /**
           * Permission Ids
           * @description A list of permission IDs for users with access to this file.
           * @default null
           */
          permissionIds: string[] | null;
          /**
           * Permissions
           * @description The full list of permissions for the file.
           * @default null
           */
          permissions: {
              /**
               * Display Name
               * @description The display name of the user or group to which this permission refers.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user or group to which this permission refers.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Id
               * @description The ID of the permission.
               * @default null
               */
              id: string | null;
              /**
               * Role
               * @description The role granted by this permission.
               * @default null
               * @enum {string|null}
               */
              role: "owner" | "organizer" | "fileOrganizer" | "writer" | "commenter" | "reader" | null;
              /**
               * Type
               * @description The type of the grantee.
               * @default null
               * @enum {string|null}
               */
              type: "user" | "group" | "domain" | "anyone" | null;
          }[] | null;
          /**
           * Properties
           * @description A collection of arbitrary key-value pairs which are private to the requesting app.
           * @default null
           */
          properties: {
              [key: string]: string;
          } | null;
          /**
           * Quota Bytes Used
           * @description The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions.
           * @default null
           */
          quotaBytesUsed: string | null;
          /**
           * Resource Key
           * @description A resource key for the file. If omitted, the requestor must have access to the file.
           * @default null
           */
          resourceKey: string | null;
          /**
           * Shared
           * @description Whether the file has been shared.
           * @default null
           */
          shared: boolean | null;
          /**
           * Shared With Me Time
           * Format: date-time
           * @description The time at which the file was shared with the user.
           * @default null
           */
          sharedWithMeTime: string | null;
          /**
           * GoogleDriveUser
           * @description The user who shared the file with the requesting user, if applicable.
           * @default null
           */
          sharingUser: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * Format: email
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is.
               * @default drive#user
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's permission ID.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * Format: uri
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * GoogleDriveShortcutDetails
           * @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
           * @default null
           */
          shortcutDetails: {
              /**
               * Target Id
               * @description The ID of the file that this shortcut points to.
               * @default null
               */
              targetId: string | null;
              /**
               * Target Mime Type
               * @description The MIME type of the file that this shortcut points to.
               * @default null
               */
              targetMimeType: string | null;
              /**
               * Target Resource Key
               * @description The resource key of the target file.
               * @default null
               */
              targetResourceKey: string | null;
          } | null;
          /**
           * Size
           * @description The size of the file's content in bytes. This is applicable to files with binary content in Google Drive and Google Docs files.
           * @default null
           */
          size: string | null;
          /**
           * Spaces
           * @description The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
           * @default null
           */
          spaces: string[] | null;
          /**
           * Starred
           * @description Whether the user has starred the file.
           * @default null
           */
          starred: boolean | null;
          /**
           * Team Drive Id
           * @description The ID of the Team Drive the file resides in. (Deprecated: Use driveId instead)
           * @default null
           */
          teamDriveId: string | null;
          /**
           * Thumbnail Link
           * Format: uri
           * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours.
           * @default null
           */
          thumbnailLink: string | null;
          /**
           * Thumbnail Version
           * @description The version of the file's thumbnail. Available only when specifically requested.
           * @default null
           */
          thumbnailVersion: number | null;
          /**
           * Trashed
           * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
           * @default null
           */
          trashed: boolean | null;
          /**
           * Version
           * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
           * @default null
           */
          version: number | null;
          /**
           * GoogleDriveFileVideoMediaMetadata
           * @description Metadata about video media. This will only be present for video types.
           * @default null
           */
          videoMediaMetadata: {
              /**
               * Duration Millis
               * @description The duration of the video in milliseconds (as a string).
               * @default null
               */
              durationMillis: string | null;
              /**
               * Height
               * @description The height of the video in pixels.
               * @default null
               */
              height: number | null;
              /**
               * Width
               * @description The width of the video in pixels.
               * @default null
               */
              width: number | null;
          } | null;
          /**
           * Viewed By Me
           * @description Whether the file has been viewed by this user.
           * @default null
           */
          viewedByMe: boolean | null;
          /**
           * Viewed By Me Time
           * Format: date-time
           * @description The last time the file was viewed by the user.
           * @default null
           */
          viewedByMeTime: string | null;
          /**
           * Viewers Can Copy Content
           * @description Whether users with viewer permissions can copy the content of this file.
           * @default null
           */
          viewersCanCopyContent: boolean | null;
          /**
           * Web Content Link
           * Format: uri
           * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
           * @default null
           */
          webContentLink: string | null;
          /**
           * Web View Link
           * Format: uri
           * @description A link for opening the file in a relevant Google editor or viewer in a browser.
           * @default null
           */
          webViewLink: string | null;
          /**
           * Writers Can Share
           * @description Whether writers can share the document with other users.
           * @default null
           */
          writersCanShare: boolean | null;
      }[];
      /**
       * Incomplete Search
       * @description Whether the search process was incomplete. If true, then some search results might be missing.
       * @default null
       */
      incompleteSearch: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string \"drive#fileList\".
       * @default drive#fileList
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of files. This will be absent if the end of the files list has been reached.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_FIND_FOLDER tool input.
 */
type GOOGLEDRIVE_FIND_FOLDER_INPUT = {
  /**
   * Full Text Contains
   * @description A string to search for within the full text content of files within folders (if applicable and supported by Drive for the folder type or its contents). This search is case-insensitive.
   * @default null
   */
  full_text_contains: string | null;
  /**
   * Full Text Not Contains
   * @description A string to exclude from the full text content of files within folders. This search is case-insensitive.
   * @default null
   */
  full_text_not_contains: string | null;
  /**
   * Modified After
   * @description Search for folders modified after a specific date and time. The timestamp must be in RFC 3339 format (e.g., '2023-01-15T10:00:00Z' or '2023-01-15T10:00:00.000Z').
   * @default null
   */
  modified_after: string | null;
  /**
   * Name Contains
   * @description A substring to search for within folder names. This search is case-insensitive.
   * @default null
   */
  name_contains: string | null;
  /**
   * Name Exact
   * @description The exact name of the folder to search for. This search is case-sensitive.
   * @default null
   */
  name_exact: string | null;
  /**
   * Name Not Contains
   * @description A substring to exclude from folder names. Folders with names containing this substring will not be returned. This search is case-insensitive.
   * @default null
   */
  name_not_contains: string | null;
  /**
   * Starred
   * @description Set to true to search for folders that are starred, or false for those that are not.
   * @default null
   */
  starred: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_FIND_FOLDER tool output.
 */
type GOOGLEDRIVE_FIND_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description A list of folders found.
       */
      files: {
          /**
           * Capabilities
           * @description Capabilities the current user has on this folder.
           * @default null
           */
          capabilities: {
              [key: string]: unknown;
          } | null;
          /**
           * Created Time
           * Format: date-time
           * @description The time at which the folder was created (RFC 3339 date-time).
           * @default null
           */
          createdTime: string | null;
          /**
           * Drive Id
           * @description The ID of the drive the file resides in. Only populated for items in shared drives.
           * @default null
           */
          driveId: string | null;
          /**
           * Icon Link
           * Format: uri
           * @description A static, unauthenticated link to the folder's icon.
           * @default null
           */
          iconLink: string | null;
          /**
           * Id
           * @description The ID of the folder.
           */
          id: string;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
           * @default drive#file
           */
          kind: string | null;
          /**
           * Mime Type
           * @description The MIME type of the item. For a folder, this is 'application/vnd.google-apps.folder'.
           */
          mimeType: string;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the folder was modified by anyone (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Name
           * @description The name of the folder.
           */
          name: string;
          /**
           * Parents
           * @description The IDs of the parent folders which contain the file.
           * @default null
           */
          parents: string[] | null;
          /**
           * Shared
           * @description Whether the file has been shared.
           * @default false
           */
          shared: boolean | null;
          /**
           * Team Drive Id
           * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
           * @default null
           */
          teamDriveId: string | null;
          /**
           * Trashed
           * @description Whether the file has been trashed.
           * @default false
           */
          trashed: boolean | null;
          /**
           * Web View Link
           * Format: uri
           * @description A link for opening the folder in a browser.
           * @default null
           */
          webViewLink: string | null;
      }[];
      /**
       * Incomplete Search
       * @description Whether the search process was incomplete.
       * @default null
       */
      incompleteSearch: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
       * @default drive#fileList
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of folders.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GENERATE_IDS tool input.
 */
type GOOGLEDRIVE_GENERATE_IDS_INPUT = {
  /**
   * Count
   * @description The number of IDs to return. Value must be between 1 and 1000, inclusive.
   * @default null
   */
  count: number | null;
  /**
   * Space
   * @description The space in which the IDs can be used. Supported values are 'drive' and 'appDataFolder'.
   * @default null
   */
  space: string | null;
  /**
   * Type
   * @description The type of items for which the IDs can be used. For example, 'files' or 'shortcuts'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GENERATE_IDS tool output.
 */
type GOOGLEDRIVE_GENERATE_IDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ids
       * @description The IDs generated by the server.
       */
      ids: string[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: "drive#idList".
       */
      kind: string;
      /**
       * Space
       * @description The space which is supported for these IDs.
       */
      space: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_ABOUT tool input.
 */
type GOOGLEDRIVE_GET_ABOUT_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response. Use `*` to include all fields.
   * @default *
   */
  fields: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_ABOUT tool output.
 */
type GOOGLEDRIVE_GET_ABOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Installed
       * @description Whether the requesting app is installed.
       * @default null
       */
      appInstalled: boolean | null;
      /**
       * Can Create Drives
       * @description Whether the user can create shared drives.
       * @default null
       */
      canCreateDrives: boolean | null;
      /**
       * Can Create Team Drives
       * @description Deprecated: Use canCreateDrives instead.
       * @default null
       */
      canCreateTeamDrives: boolean | null;
      /**
       * Drive Themes
       * @description A list of themes that are supported for shared drives.
       * @default null
       */
      driveThemes: {
          /**
           * Background Image Link
           * @description A link to the background image of the theme.
           * @default null
           */
          backgroundImageLink: string | null;
          /**
           * Color Rgb
           * @description The color of the theme in RGB hexadecimal string format.
           * @default null
           */
          colorRgb: string | null;
          /**
           * Id
           * @description The ID of the theme.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * Export Formats
       * @description A map of Google Workspace document types and their supported export formats.
       * @default null
       */
      exportFormats: {
          [key: string]: string[];
      } | null;
      /**
       * Folder Color Palette
       * @description The palette of folder colors supported by Google Drive.
       * @default null
       */
      folderColorPalette: string[] | null;
      /**
       * Import Formats
       * @description A map of supported import formats and the corresponding Google Workspace document types.
       * @default null
       */
      importFormats: {
          [key: string]: string[];
      } | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: drive#about.
       * @default null
       */
      kind: string | null;
      /**
       * Max Import Sizes
       * @description A map of import formats and their maximum supported file size in bytes.
       * @default null
       */
      maxImportSizes: {
          [key: string]: string;
      } | null;
      /**
       * Max Upload Size
       * @description The maximum individual file size that the user can upload, in bytes.
       * @default null
       */
      maxUploadSize: string | null;
      /**
       * StorageQuota
       * @description The user's storage quota status.
       * @default null
       */
      storageQuota: {
          /**
           * Limit
           * @description The total storage limit in bytes.
           * @default null
           */
          limit: string | null;
          /**
           * Usage
           * @description The total usage in bytes.
           * @default null
           */
          usage: string | null;
          /**
           * Usage In Drive
           * @description The usage in Google Drive in bytes.
           * @default null
           */
          usageInDrive: string | null;
          /**
           * Usage In Drive Trash
           * @description The usage in Google Drive trash in bytes.
           * @default null
           */
          usageInDriveTrash: string | null;
      } | null;
      /**
       * Team Drive Themes
       * @description Deprecated: Use driveThemes instead.
       * @default null
       */
      teamDriveThemes: {
          /**
           * Background Image Link
           * @description A link to the background image of the theme.
           * @default null
           */
          backgroundImageLink: string | null;
          /**
           * Color Rgb
           * @description The color of the theme in RGB hexadecimal string format.
           * @default null
           */
          colorRgb: string | null;
          /**
           * Id
           * @description The ID of the theme.
           * @default null
           */
          id: string | null;
      }[] | null;
      /**
       * User
       * @description Information about the current user.
       * @default null
       */
      user: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: drive#user.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this is the current user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as viewable in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN tool input.
 */
type GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
   * @default null
   */
  driveId: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Defaults to false.
   * @default false
   */
  supportsAllDrives: boolean | null;
  /**
   * Supports Team Drives
   * @description Deprecated: Use supportsAllDrives instead.
   * @default null
   */
  supportsTeamDrives: boolean | null;
  /**
   * Team Drive Id
   * @description Deprecated: Use driveId instead.
   * @default null
   */
  teamDriveId: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN tool output.
 */
type GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
       */
      kind: string;
      /**
       * Start Page Token
       * @description The starting page token for listing future changes. This is deprecated and provided for backward compatibility only.
       */
      startPageToken: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_COMMENT tool input.
 */
type GOOGLEDRIVE_GET_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  commentId?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Deleted
   * @description Whether to return deleted comments. Deleted comments will not include their original content.
   * @default null
   */
  includeDeleted: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_COMMENT tool output.
 */
type GOOGLEDRIVE_GET_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Anchor
       * @description A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
       * @default null
       */
      anchor: string | null;
      /**
       * User
       * @description The user who created the comment.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the comment.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time that the comment was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the comment has been deleted. A deleted comment has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The content of the comment with HTML formatting.
       * @default null
       */
      htmlContent: string | null;
      /**
       * Id
       * @description The ID of the comment.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#comment".
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Quoted File Content
       * @description The file content to which the comment is referring.
       * @default null
       */
      quotedFileContent: {
          [key: string]: string;
      } | null;
      /**
       * Replies
       * @description A list of replies to this comment. Populated if requesting with includeReplies=true.
       * @default null
       */
      replies: {
          /**
           * Action
           * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen
           * @default null
           */
          action: string | null;
          /**
           * User
           * @description The user who created the reply.
           * @default null
           */
          author: {
              /**
               * Display Name
               * @description A plain text displayable name for this user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Content
           * @description The plain text content of the reply.
           * @default null
           */
          content: string | null;
          /**
           * Created Time
           * @description The time the reply was created (RFC 3339 date-time).
           * @default null
           */
          createdTime: string | null;
          /**
           * Deleted
           * @description Whether the reply has been deleted. A deleted reply has no content.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Html Content
           * @description The content of the reply with HTML formatting.
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description The ID of the reply.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#reply".
           * @default null
           */
          kind: string | null;
          /**
           * Modified Time
           * @description The last time the reply was modified (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
      }[] | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_DRIVE tool input.
 */
type GOOGLEDRIVE_GET_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  drive_id?: string;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  use_domain_admin_access: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_DRIVE tool output.
 */
type GOOGLEDRIVE_GET_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of this shared drive. This is a read-only field.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#drive'.
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The name of this shared drive. This is a read-only field.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_FILE_METADATA tool input.
 */
type GOOGLEDRIVE_GET_FILE_METADATA_INPUT = {
  /**
   * Acknowledge Abuse
   * @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the alt parameter is set to media and the user is the owner of the file or an organizer of the shared drive in which the file resides.
   * @default null
   */
  acknowledgeAbuse: boolean | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the labelInfo part of the response.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. This parameter will default to false.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_FILE_METADATA tool output.
 */
type GOOGLEDRIVE_GET_FILE_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#file".
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_PERMISSION tool input.
 */
type GOOGLEDRIVE_GET_PERMISSION_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Permission Id
   * @description The ID of the permission.
   */
  permission_id?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supports_all_drives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  use_domain_admin_access: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_PERMISSION tool output.
 */
type GOOGLEDRIVE_GET_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow File Discovery
       * @description Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
       * @default null
       */
      allowFileDiscovery: boolean | null;
      /**
       * Deleted
       * @description Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description A displayable name for users, groups or domains.
       * @default null
       */
      displayName: string | null;
      /**
       * Domain
       * @description The domain to which this permission refers.
       * @default null
       */
      domain: string | null;
      /**
       * Email Address
       * @description The email address of the user or group to which this permission refers.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Expiration Time
       * @description The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future
       * @default null
       */
      expirationTime: string | null;
      /**
       * Id
       * @description The ID of the permission. This is a unique identifier for the grantee, and is published in User resources as permissionId.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#permission".
       * @default null
       */
      kind: string | null;
      /**
       * Permission Details
       * @description Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only for Team Drive items.
       * @default null
       */
      permissionDetails: {
          /**
           * Inherited
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Permission Type
           * @default null
           */
          permissionType: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * With Link
           * @default null
           */
          withLink: boolean | null;
      }[] | null;
      /**
       * Photo Link
       * @description A link to the user's profile photo, if available.
       * @default null
       */
      photoLink: string | null;
      /**
       * Role
       * @description The role granted by this permission. While new values may be supported in the future, the following are currently possible: "owner", "organizer", "fileOrganizer", "writer", "commenter", "reader"
       * @default null
       */
      role: string | null;
      /**
       * Team Drive Permission Details
       * @description Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
       * @default null
       */
      teamDrivePermissionDetails: {
          /**
           * Inherited
           * @default null
           */
          inherited: boolean | null;
          /**
           * Inherited From
           * @default null
           */
          inheritedFrom: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * Team Drive Permission Type
           * @default null
           */
          teamDrivePermissionType: string | null;
      }[] | null;
      /**
       * Type
       * @description The type of the grantee. Valid values are: "user", "group", "domain", "anyone"
       * @default null
       */
      type: string | null;
      /**
       * View
       * @description Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.
       * @default null
       */
      view: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_REPLY tool input.
 */
type GOOGLEDRIVE_GET_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  commentId?: string;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Deleted
   * @description Whether to return deleted replies. Deleted replies will not include their original content.
   * @default null
   */
  includeDeleted: boolean | null;
  /**
   * Reply Id
   * @description The ID of the reply.
   */
  replyId?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_REPLY tool output.
 */
type GOOGLEDRIVE_GET_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen.
       * @default null
       */
      action: string | null;
      /**
       * Author
       * @description The user who created the reply.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies this resource as a user.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the reply.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * Format: date-time
       * @description The time the reply was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the reply has been deleted. A deleted reply has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The HTML content of the reply.
       * @default null
       */
      htmlContent: string | null;
      /**
       * Id
       * @description The ID of the reply.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies this resource as a reply.
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * Format: date-time
       * @description The last time the reply was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_REVISION tool input.
 */
type GOOGLEDRIVE_GET_REVISION_INPUT = {
  /**
   * Acknowledge Abuse
   * @description Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the alt parameter is set to media and the user is the owner of the file or an organizer of the shared drive in which the file resides.
   * @default null
   */
  acknowledge_abuse: boolean | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Revision Id
   * @description The ID of the revision.
   */
  revision_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GET_REVISION tool output.
 */
type GOOGLEDRIVE_GET_REVISION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Export Links
       * @description Links for exporting Docs Editors files to specific formats.
       * @default null
       */
      export_links: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The ID of the revision.
       * @default null
       */
      id: string | null;
      /**
       * Keep Forever
       * @description Whether to keep this revision forever, even if it is no longer the head revision. If not set or false, the revision will be automatically purged 30 days after newer revisions are created.
       * @default null
       */
      keep_forever: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
       * @default null
       */
      kind: string | null;
      /**
       * Last Modifying User
       * @description The user who last modified the revision.
       * @default null
       */
      last_modifying_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum of the revision. This is only populated for revisions of files with binary content in Drive.
       * @default null
       */
      md5_checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the revision.
       * @default null
       */
      mime_type: string | null;
      /**
       * Modified Time
       * @description The last time the revision was modified (RFC 3339 date-time).
       * @default null
       */
      modified_time: string | null;
      /**
       * Original Filename
       * @description The original filename of the revision. This is only populated for revisions of files with binary content in Drive.
       * @default null
       */
      original_filename: string | null;
      /**
       * Publish Link
       * @description A link to the published revision.
       * @default null
       */
      publish_link: string | null;
      /**
       * Published
       * @description Whether this revision is published. This is only populated for files with Google Docs Editors content types.
       * @default null
       */
      published: boolean | null;
      /**
       * Size
       * @description The size of the revision content in bytes. This is only populated for revisions of files with binary content in Drive.
       * @default null
       */
      size: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION tool input.
 */
type GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_INPUT = {
  /**
   * File Id
   * @description The ID of the file or folder to delete. This is a required field.
   */
  fileId?: string;
  /**
   * Supports All Drives
   * @description Whether the application supports both My Drives and shared drives. If false or unspecified, the file is attempted to be deleted from the user's My Drive. If true, the item will be deleted from shared drives as well if necessary.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION tool output.
 */
type GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_OUTPUT = {
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_HIDE_DRIVE tool input.
 */
type GOOGLEDRIVE_HIDE_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  drive_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_HIDE_DRIVE tool output.
 */
type GOOGLEDRIVE_HIDE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive. This is a monotonically increasing ID that is unique across all shared drives created by a given organization.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
       * @default drive#drive
       */
      kind: string;
      /**
       * Name
       * @description The name of this shared drive.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_CHANGES tool input.
 */
type GOOGLEDRIVE_LIST_CHANGES_INPUT = {
  /**
   * Drive Id
   * @description The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
   * @default null
   */
  driveId: string | null;
  /**
   * Include Corpus Removals
   * @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
   * @default null
   */
  includeCorpusRemovals: boolean | null;
  /**
   * Include Items From All Drives
   * @description Whether both My Drive and shared drive items should be included in results.
   * @default null
   */
  includeItemsFromAllDrives: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Include Removed
   * @description Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
   * @default true
   */
  includeRemoved: boolean | null;
  /**
   * Page Size
   * @description The maximum number of changes to return per page.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
   */
  pageToken?: string;
  /**
   * Restrict To My Drive
   * @description Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
   * @default null
   */
  restrictToMyDrive: boolean | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
   * @default drive
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_CHANGES tool output.
 */
type GOOGLEDRIVE_LIST_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Changes
       * @description The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      changes?: {
          /**
           * Drive
           * @description The updated state of the shared drive. Present if the type is drive and the shared drive has not been removed from this list of changes.
           * @default null
           */
          drive: {
              [key: string]: unknown;
          } | null;
          /**
           * Drive Id
           * @description The ID of the shared drive associated with this change.
           * @default null
           */
          driveId: string | null;
          /**
           * File
           * @description The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
           * @default null
           */
          file: {
              [key: string]: unknown;
          } | null;
          /**
           * File Id
           * @description The ID of the file which has changed.
           * @default null
           */
          fileId: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#change".
           * @default null
           */
          kind: string | null;
          /**
           * Removed
           * @description Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
           * @default null
           */
          removed: boolean | null;
          /**
           * Team Drive
           * @description Deprecated: Use drive instead.
           * @default null
           */
          teamDrive: {
              [key: string]: unknown;
          } | null;
          /**
           * Team Drive Id
           * @description Deprecated: Use driveId instead.
           * @default null
           */
          teamDriveId: string | null;
          /**
           * Time
           * @description The time of this change (RFC 3339 date-time).
           * @default null
           */
          time: string | null;
          /**
           * Type
           * @description The type of the change. Possible values are "file" and "drive".
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#changeList".
       */
      kind: string;
      /**
       * New Start Page Token
       * @description The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire.
       * @default null
       */
      newStartPageToken: string | null;
      /**
       * Next Page Token
       * @description The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_COMMENTS tool input.
 */
type GOOGLEDRIVE_LIST_COMMENTS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response. Use `*` to include all fields.
   * @default *
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Include Deleted
   * @description Whether to include deleted comments. Deleted comments will not include their original content.
   * @default false
   */
  includeDeleted: boolean | null;
  /**
   * Page Size
   * @description The maximum number of comments to return per page.
   * @default 20
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Start Modified Time
   * @description The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
   * @default null
   */
  startModifiedTime: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_COMMENTS tool output.
 */
type GOOGLEDRIVE_LIST_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      comments: {
          /**
           * Anchor
           * @description A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
           * @default null
           */
          anchor: string | null;
          /**
           * CommentAuthor
           * @description The author of the comment. The author's email address and permission ID will not be populated.
           * @default null
           */
          author: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Kind
               * @description Identifies this user as a Google Drive user.
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The user's ID as visible in Permission resources.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Content
           * @description The plain text content of the comment.
           * @default null
           */
          content: string | null;
          /**
           * Created Time
           * Format: date-time
           * @description The time at which the comment was created (RFC 3339 date-time).
           * @default null
           */
          createdTime: string | null;
          /**
           * Deleted
           * @description Whether the comment has been deleted. A deleted comment has no content.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Html Content
           * @description The content of the comment with HTML formatting.
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description The ID of the comment.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies this resource as a Drive comment.
           * @default null
           */
          kind: string | null;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Quoted File Content
           * @description The file content to which the comment is referring, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
           * @default null
           */
          quotedFileContent: {
              [key: string]: string;
          } | null;
          /**
           * Replies
           * @description A list of replies to this comment. Formatted as comment objects, but with a defined action field.
           * @default null
           */
          replies: {
              /**
               * Action
               * @description The action the reply performed to the parent comment. Valid values are: resolve, reopen
               * @default null
               */
              action: string | null;
              /**
               * CommentAuthor
               * @description The author of the reply. The author's email address and permission ID will not be populated.
               * @default null
               */
              author: {
                  /**
                   * Display Name
                   * @description The display name of the user.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Kind
                   * @description Identifies this user as a Google Drive user.
                   * @default null
                   */
                  kind: string | null;
                  /**
                   * Me
                   * @description Whether this user is the requesting user.
                   * @default null
                   */
                  me: boolean | null;
                  /**
                   * Permission Id
                   * @description The user's ID as visible in Permission resources.
                   * @default null
                   */
                  permissionId: string | null;
                  /**
                   * Photo Link
                   * @description A link to the user's profile photo, if available.
                   * @default null
                   */
                  photoLink: string | null;
              } | null;
              /**
               * Content
               * @description The plain text content of the reply.
               * @default null
               */
              content: string | null;
              /**
               * Created Time
               * Format: date-time
               * @description The time the reply was created (RFC 3339 date-time).
               * @default null
               */
              createdTime: string | null;
              /**
               * Deleted
               * @description Whether the reply has been deleted. A deleted reply has no content.
               * @default null
               */
              deleted: boolean | null;
              /**
               * Html Content
               * @description The content of the reply with HTML formatting.
               * @default null
               */
              htmlContent: string | null;
              /**
               * Id
               * @description The ID of the reply.
               * @default null
               */
              id: string | null;
              /**
               * Kind
               * @description Identifies this resource as a Drive reply.
               * @default null
               */
              kind: string | null;
              /**
               * Modified Time
               * Format: date-time
               * @description The last time the reply was modified (RFC 3339 date-time).
               * @default null
               */
              modifiedTime: string | null;
          }[] | null;
          /**
           * Resolved
           * @description Whether the comment has been resolved by one of its replies.
           * @default null
           */
          resolved: boolean | null;
      }[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#commentList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of comments. This will be absent if the end of the comments list has been reached.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_FILES tool input.
 */
type GOOGLEDRIVE_LIST_FILES_INPUT = {
  /**
   * Corpora
   * @description Specifies the bodies of items (files/documents) to which the query applies. Supported values are 'user', 'domain', 'drive', and 'allDrives'. It's generally more efficient to use 'user' or 'drive' instead of 'allDrives'. Defaults to 'user'.
   * @default null
   */
  corpora: string | null;
  /**
   * Drive Id
   * @description The ID of the shared drive to search. This is used when `corpora` is set to 'drive'.
   * @default null
   */
  driveId: string | null;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. This can be used to retrieve only specific file metadata, improving performance. Example: 'nextPageToken, files(id, name, mimeType, modifiedTime)'
   * @default null
   */
  fields: string | null;
  /**
   * Folder Id
   * @description ID of a specific folder to list files from. This is a convenience parameter that automatically adds "'folder_id' in parents" to the query. Cannot be used together with a custom 'q' parameter.
   * @default null
   */
  folderId: string | null;
  /**
   * Include Items From All Drives
   * @description Whether to include items from both My Drive and shared drives. This is relevant when `corpora` is 'user' or 'domain'. Defaults to false.
   * @default null
   */
  includeItemsFromAllDrives: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of label IDs to include in the `labelInfo` part of the response for each file.
   * @default null
   */
  includeLabels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Currently, only 'published' is supported, which includes permissions for files with published content.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Order By
   * @description A comma-separated list of sort keys. Valid keys include 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', 'viewedByMeTime'. Each key sorts in ascending order by default, but can be reversed with the 'desc' modifier (e.g., 'modifiedTime desc').
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Size
   * @description The maximum number of files to return per page. The value must be between 1 and 1000, inclusive. Defaults to 100.
   * @default 100
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Q
   * @description A query string for filtering the file results. Supports operators like 'and', 'or', 'not', and can filter on fields like 'name', 'mimeType', 'modifiedTime', 'starred', 'trashed'. Example: "name contains 'important' and mimeType = 'application/vnd.google-apps.folder'".
   * @default null
   */
  q: string | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. 'drive' represents files in My Drive and shared drives, while 'appDataFolder' represents the application's private data folder.
   * @default null
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Defaults to false. If true, then `includeItemsFromAllDrives` can be used to extend the search to all drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_FILES tool output.
 */
type GOOGLEDRIVE_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description A list of file resources. Each file resource contains details like 'id', 'name', 'mimeType', 'createdTime', 'modifiedTime', etc.
       */
      files: {
          [key: string]: unknown;
      }[];
      /**
       * Incomplete Search
       * @description Whether the search process was incomplete. True if the entire result set could not be retrieved before the timeout.
       * @default null
       */
      incompleteSearch: boolean | null;
      /**
       * Kind
       * @description Identifies the resource as a file list, typically 'drive#fileList'.
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of results. This will be absent if the end of the results is reached.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_FILE_LABELS tool input.
 */
type GOOGLEDRIVE_LIST_FILE_LABELS_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Max Results
   * @description The maximum number of labels to return per page. Default is 100.
   * @default null
   */
  max_results: number | null;
  /**
   * Page Token
   * @description Token to retrieve a specific page of results.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_FILE_LABELS tool output.
 */
type GOOGLEDRIVE_LIST_FILE_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#labelList".
       */
      kind: string;
      /**
       * Labels
       * @description The list of labels.
       */
      labels?: {
          /**
           * Fields
           * @description A map of field IDs to field values.
           * @default null
           */
          fields: {
              [key: string]: {
                  /**
                   * Datestring
                   * @description The date values of the field.
                   * @default null
                   */
                  dateString: string[] | null;
                  /**
                   * Id
                   * @description The ID of the field.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Integer
                   * @description The integer values of the field.
                   * @default null
                   */
                  integer: string[] | null;
                  /**
                   * Kind
                   * @description This is always drive#labelField.
                   * @default null
                   */
                  kind: string | null;
                  /**
                   * Selection
                   * @description The selection values of the field.
                   * @default null
                   */
                  selection: string[] | null;
                  /**
                   * Text
                   * @description The text values of the field.
                   * @default null
                   */
                  text: string[] | null;
                  /**
                   * User
                   * @description The user values of the field.
                   * @default null
                   */
                  user: string[] | null;
                  /**
                   * Value Type
                   * @description The type of the value.
                   * @default null
                   */
                  value_type: string | null;
              };
          } | null;
          /**
           * Id
           * @description The ID of the label.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description This is always drive#label
           * @default null
           */
          kind: string | null;
          /**
           * Revision Id
           * @description The revision ID of the label.
           * @default null
           */
          revisionId: string | null;
      }[];
      /**
       * Next Page Token
       * @description The page token for the next page of labels. This field will be absent if the end of the list has been reached.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_PERMISSIONS tool input.
 */
type GOOGLEDRIVE_LIST_PERMISSIONS_INPUT = {
  /**
   * File Id
   * @description The ID of the file or shared drive.
   */
  fileId?: string;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  includePermissionsForView: string | null;
  /**
   * Page Size
   * @description The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Default: false
   * @default null
   */
  supportsAllDrives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_PERMISSIONS tool output.
 */
type GOOGLEDRIVE_LIST_PERMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#permissionList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of permissions. This will be absent if the end of the list has been reached.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Permissions
       * @description The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      permissions: {
          /**
           * Deleted
           * @default null
           */
          deleted: boolean | null;
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /**
           * Email Address
           * @default null
           */
          emailAddress: string | null;
          /** Id */
          id: string;
          /**
           * Kind
           * @default null
           */
          kind: string | null;
          /**
           * Permission Details
           * @default null
           */
          permissionDetails: unknown[] | null;
          /**
           * Photo Link
           * @default null
           */
          photoLink: string | null;
          /** Role */
          role: string;
          /**
           * Team Drive Permission Details
           * @default null
           */
          teamDrivePermissionDetails: unknown[] | null;
          /** Type */
          type: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT tool input.
 */
type GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. Use '*' for all fields or e.g. 'replies(id,content),nextPageToken'
   * @default *
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Include Deleted
   * @description Whether to include deleted replies. Deleted replies will not include their original content.
   * @default false
   */
  include_deleted: boolean | null;
  /**
   * Page Size
   * @description The maximum number of replies to return per page.
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT tool output.
 */
type GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#replyList".
       * @default null
       */
      kind: string | null;
      /**
       * Next Page Token
       * @description The page token for the next page of replies. This will be absent if the end of the replies list has been reached.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Replies
       * @description The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       * @default null
       */
      replies: {
          /**
           * Action
           * @description The action the reply performed to the parent comment (resolve/reopen).
           * @default null
           */
          action: string | null;
          /**
           * Author
           * @description The author of the reply (user object).
           * @default null
           */
          author: {
              [key: string]: unknown;
          } | null;
          /**
           * Content
           * @description The plain text content of the reply.
           * @default null
           */
          content: string | null;
          /**
           * Created Time
           * @description The time at which the reply was created (RFC 3339 timestamp).
           * @default null
           */
          createdTime: string | null;
          /**
           * Deleted
           * @description Whether the reply has been deleted.
           * @default null
           */
          deleted: boolean | null;
          /**
           * Html Content
           * @description The content of the reply with HTML formatting.
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description The ID of the reply.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#reply".
           * @default null
           */
          kind: string | null;
          /**
           * Modified Time
           * @description The time at which the reply was last modified (RFC 3339 timestamp).
           * @default null
           */
          modifiedTime: string | null;
      }[] | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_REVISIONS tool input.
 */
type GOOGLEDRIVE_LIST_REVISIONS_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  fileId?: string;
  /**
   * Page Size
   * @description The maximum number of revisions to return per page.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
   * @default null
   */
  pageToken: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Defaults to false.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_REVISIONS tool output.
 */
type GOOGLEDRIVE_LIST_REVISIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revisionList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Revisions
       * @description The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
       */
      revisions: {
          /**
           * Export Links
           * @description Links for exporting Google Docs Editors content types to specific formats.
           * @default null
           */
          exportLinks: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description The ID of the revision.
           */
          id: string;
          /**
           * Keep Forever
           * @description Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer revisions are created.
           * @default null
           */
          keepForever: boolean | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
           * @default null
           */
          kind: string | null;
          /**
           * User
           * @description The last user to modify this revision.
           * @default null
           */
          lastModifyingUser: {
              /**
               * Display Name
               * @description The display name of the user.
               * @default null
               */
              displayName: string | null;
              /**
               * Email Address
               * @description The email address of the user.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Kind
               * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
               * @default null
               */
              kind: string | null;
              /**
               * Me
               * @description Whether this user is the requesting user.
               * @default null
               */
              me: boolean | null;
              /**
               * Permission Id
               * @description The ETag of the permission.
               * @default null
               */
              permissionId: string | null;
              /**
               * Photo Link
               * @description A link to the user's profile photo, if available.
               * @default null
               */
              photoLink: string | null;
          } | null;
          /**
           * Mime Type
           * @description The MIME type of the revision.
           * @default null
           */
          mimeType: string | null;
          /**
           * Modified Time
           * Format: date-time
           * @description The last time the revision was modified (RFC 3339 date-time).
           * @default null
           */
          modifiedTime: string | null;
          /**
           * Publish Auto
           * @description Whether this revision is published outside the domain. This is only populated for files with Google Docs Editors content types.
           * @default null
           */
          publishAuto: boolean | null;
          /**
           * Published
           * @description Whether this revision is published. This is only populated for files with Google Docs Editors content types.
           * @default null
           */
          published: boolean | null;
          /**
           * Published Link
           * @description A link to the published revision. This is only populated for files with Google Docs Editors content types.
           * @default null
           */
          publishedLink: string | null;
          /**
           * Size
           * @description The size of the revision content in bytes. This is only populated for files with binary content in Google Drive.
           * @default null
           */
          size: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_SHARED_DRIVES tool input.
 */
type GOOGLEDRIVE_LIST_SHARED_DRIVES_INPUT = {
  /**
   * Page Size
   * @description Maximum number of shared drives to return per page.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Page token for shared drives.
   * @default null
   */
  pageToken: string | null;
  /**
   * Q
   * @description Query string for searching shared drives.
   * @default null
   */
  q: string | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator. If set to true, then all shared drives of the domain in which the requester is an administrator are returned.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_LIST_SHARED_DRIVES tool output.
 */
type GOOGLEDRIVE_LIST_SHARED_DRIVES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drives
       * @description The list of shared drives.
       */
      drives?: {
          /**
           * Id
           * @description The ID of this shared drive. This is a unique identifier.
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
           * @default null
           */
          kind: string | null;
          /**
           * Name
           * @description The name of this shared drive.
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#driveList".
       */
      kind: string;
      /**
       * Next Page Token
       * @description The page token for the next page of shared drives. This will be absent if the end of the list has been reached.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_MOVE_FILE tool input.
 */
type GOOGLEDRIVE_MOVE_FILE_INPUT = {
  /**
   * Add Parents
   * @description A comma-separated list of parent folder IDs to add the file to. Use this to specify the destination folder.
   * @default null
   */
  add_parents: string | null;
  /**
   * File Id
   * @description The ID of the file to move.
   */
  file_id?: string;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
   * @default null
   */
  include_labels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  include_permissions_for_view: string | null;
  /**
   * Keep Revision Forever
   * @description Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive.
   * @default null
   */
  keep_revision_forever: boolean | null;
  /**
   * Ocr Language
   * @description A language hint for OCR processing during image import (ISO 639-1 code).
   * @default null
   */
  ocr_language: string | null;
  /**
   * Remove Parents
   * @description A comma-separated list of parent folder IDs to remove the file from. Use this to specify the source folder.
   * @default null
   */
  remove_parents: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Set to true if moving files to or from a shared drive.
   * @default null
   */
  supports_all_drives: boolean | null;
  /**
   * Use Content As Indexable Text
   * @description Whether to use the uploaded content as indexable text.
   * @default null
   */
  use_content_as_indexable_text: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_MOVE_FILE tool output.
 */
type GOOGLEDRIVE_MOVE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       */
      kind: string;
      /**
       * Mime Type
       * @description The MIME type of the file.
       */
      mimeType: string;
      /**
       * Name
       * @description The name of the file.
       */
      name: string;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_PARSE_FILE tool input.
 */
type GOOGLEDRIVE_PARSE_FILE_INPUT = {
  /**
   * File Id
   * @description The unique ID of the file stored in Google Drive that you want to export or download.
   */
  file_id?: string;
  /**
   * MimeType
   * @description Target MIME type for exporting Google Workspace documents (e.g., Docs, Sheets) to a different format (e.g., PDF, DOCX). Omit for direct download of non-Workspace files or if no conversion is needed for Workspace files.
   * @default null
   * @enum {string|null}
   */
  mime_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.oasis.opendocument.text" | "application/rtf" | "application/pdf" | "text/plain" | "application/zip" | "application/epub+zip" | "text/markdown" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/x-vnd.oasis.opendocument.spreadsheet" | "text/csv" | "text/tab-separated-values" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.oasis.opendocument.presentation" | "image/jpeg" | "image/png" | "image/svg+xml" | "application/vnd.google-apps.script+json" | "application/vnd.google-apps.vid" | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_PARSE_FILE tool output.
 */
type GOOGLEDRIVE_PARSE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The content of the exported or downloaded file, returned as a downloadable object.
       */
      file: {
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
      /**
       * Warning
       * @default Warning. This action has been deprecated. Please use GOOGLEDRIVE_DOWNLOAD_FILE instead.
       */
      warning: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_STOP_WATCH_CHANNEL tool input.
 */
type GOOGLEDRIVE_STOP_WATCH_CHANNEL_INPUT = {
  /**
   * Address
   * @description The address where notifications are delivered for this channel.
   * @default null
   */
  address: string | null;
  /**
   * Channel Type
   * @description The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".
   * @default null
   */
  channelType: string | null;
  /**
   * Expiration
   * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds.
   * @default null
   */
  expiration: string | null;
  /**
   * Id
   * @description The ID of the channel to stop.
   */
  id?: string;
  /**
   * Kind
   * @description Identifies this as a notification channel used to watch for changes to a resource.
   * @default api#channel
   */
  kind: string | null;
  /**
   * Params
   * @description Additional parameters controlling delivery channel behavior.
   * @default null
   */
  params: {
      [key: string]: string;
  } | null;
  /**
   * Payload
   * @description A Boolean value to indicate whether payload is wanted.
   * @default null
   */
  payload: boolean | null;
  /**
   * Resource Id
   * @description The ID of the resource being watched.
   */
  resourceId?: string;
  /**
   * Resource Uri
   * @description A version-specific identifier for the watched resource.
   * @default null
   */
  resourceUri: string | null;
  /**
   * Token
   * @description An arbitrary string delivered to the target address with each notification delivered over this channel.
   * @default null
   */
  token: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_STOP_WATCH_CHANNEL tool output.
 */
type GOOGLEDRIVE_STOP_WATCH_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating the success of the operation.
       * @default Successfully stopped watching the channel.
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UNHIDE_DRIVE tool input.
 */
type GOOGLEDRIVE_UNHIDE_DRIVE_INPUT = {
  /**
   * Drive Id
   * @description The ID of the shared drive.
   */
  driveId?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UNHIDE_DRIVE tool output.
 */
type GOOGLEDRIVE_UNHIDE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background Image File
       * @description An image file to be used as the background for this shared drive.
       * @default null
       */
      backgroundImageFile: {
          [key: string]: unknown;
      } | null;
      /**
       * Background Image Link
       * @description A short-lived link to this shared drive's background image.
       * @default null
       */
      backgroundImageLink: string | null;
      /**
       * Capabilities
       * @description A set of capabilities the current user has on this shared drive.
       * @default null
       */
      capabilities: {
          [key: string]: unknown;
      } | null;
      /**
       * Color Rgb
       * @description The color of this shared drive as an RGB hex string.
       * @default null
       */
      colorRgb: string | null;
      /**
       * Created Time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive. This is a scalar that is locally unique within a domain.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#drive'.
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The name of this shared drive.
       * @default null
       */
      name: string | null;
      /**
       * Org Unit Id
       * @description The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is true.
       * @default null
       */
      orgUnitId: string | null;
      /**
       * Restrictions
       * @description A set of restrictions that apply to this shared drive or items inside this shared drive.
       * @default null
       */
      restrictions: {
          [key: string]: unknown;
      } | null;
      /**
       * Theme Id
       * @description The theme ID of this shared drive.
       * @default null
       */
      themeId: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UNTRASH_FILE tool input.
 */
type GOOGLEDRIVE_UNTRASH_FILE_INPUT = {
  /**
   * File Id
   * @description The ID of the file to untrash.
   */
  file_id?: string;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default null
   */
  supportsAllDrives: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UNTRASH_FILE tool output.
 */
type GOOGLEDRIVE_UNTRASH_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the file.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       * @default null
       */
      kind: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_COMMENT tool input.
 */
type GOOGLEDRIVE_UPDATE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to update.
   */
  comment_id?: string;
  /**
   * Content
   * @description The plain text content of the comment. This field is used to update the comment's text. If not provided, the existing content will be retained unless 'resolved' is being updated.
   * @default null
   */
  content: string | null;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response. The API documentation states this is required. If not specified by the user, this action defaults to '*' to retrieve all fields, ensuring the API requirement is met. Example: 'id,content,resolved'.
   * @default null
   */
  fields: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Resolved
   * @description Whether the comment has been resolved. This can be used to mark a comment as resolved or reopen it.
   * @default null
   */
  resolved: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_COMMENT tool output.
 */
type GOOGLEDRIVE_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CommentAuthor
       * @description The user who created the comment.
       * @default null
       */
      author: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Kind
           * @description Identifies this as a user.
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Content
       * @description The plain text content of the comment.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time at which the comment was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the comment has been deleted. A deleted comment has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Id
       * @description The ID of the comment.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies this as a comment. Value: "drive#comment".
       * @default null
       */
      kind: string | null;
      /**
       * Modified Time
       * @description The last time the comment or any of its replies was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Resolved
       * @description Whether the comment has been resolved. A resolved comment is hidden from view.
       * @default null
       */
      resolved: boolean | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_DRIVE tool input.
 */
type GOOGLEDRIVE_UPDATE_DRIVE_INPUT = {
  /**
   * BackgroundImageFile
   * @description An image file and cropping parameters for the shared drive's background. Cannot be set if themeId is set.
   * @default null
   */
  backgroundImageFile: {
      /**
       * Id
       * @description The ID of an image file in Google Drive to use for the background image.
       */
      id: string;
      /**
       * Width
       * @description The width of the cropped image (0.0 to 1.0). The height is computed (aspect ratio 80:9).
       */
      width: number;
      /**
       * X Coordinate
       * @description The X coordinate of the upper left corner of the cropping area in the background image (0.0 to 1.0).
       */
      xCoordinate: number;
      /**
       * Y Coordinate
       * @description The Y coordinate of the upper left corner of the cropping area in the background image (0.0 to 1.0).
       */
      yCoordinate: number;
  } | null;
  /**
   * Color Rgb
   * @description The color of this shared drive as an RGB hex string (e.g., "#FF0000"). Cannot be set if themeId is set.
   * @default null
   */
  colorRgb: string | null;
  /**
   * Drive Id
   * @description The ID of the shared drive to update.
   */
  driveId?: string;
  /**
   * Hidden
   * @description Whether the shared drive is hidden from the default view.
   * @default null
   */
  hidden: boolean | null;
  /**
   * Name
   * @description The new name for the shared drive.
   * @default null
   */
  name: string | null;
  /**
   * DriveRestrictions
   * @description A set of restrictions to apply to the shared drive.
   * @default null
   */
  restrictions: {
      /**
       * Admin Managed Restrictions
       * @description If true, requires administrative privileges to modify restrictions.
       * @default null
       */
      adminManagedRestrictions: boolean | null;
      /**
       * Copy Requires Writer Permission
       * @description If true, disables copy, print, or download options for readers and commenters.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Domain Users Only
       * @description If true, restricts access to users of the domain to which the shared drive belongs.
       * @default null
       */
      domainUsersOnly: boolean | null;
      /**
       * Drive Members Only
       * @description If true, restricts access to items inside the shared drive to its members.
       * @default null
       */
      driveMembersOnly: boolean | null;
      /**
       * Sharing Folders Requires Organizer Permission
       * @description If true, only users with the organizer role can share folders. If false, users with either the organizer or file organizer role can share folders.
       * @default null
       */
      sharingFoldersRequiresOrganizerPermission: boolean | null;
  } | null;
  /**
   * Theme Id
   * @description The ID of a theme to apply to the shared drive. Cannot be set if colorRgb or backgroundImageFile are set.
   * @default null
   */
  themeId: string | null;
  /**
   * Use Domain Admin Access
   * @description If set to true, the request is issued as a domain administrator.
   * @default null
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_DRIVE tool output.
 */
type GOOGLEDRIVE_UPDATE_DRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * BackgroundImageFileResponse
       * @description The background image file of this shared drive.
       * @default null
       */
      backgroundImageFile: {
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Width
           * @default null
           */
          width: number | null;
          /**
           * X Coordinate
           * @default null
           */
          xCoordinate: number | null;
          /**
           * Y Coordinate
           * @default null
           */
          yCoordinate: number | null;
      } | null;
      /**
       * Background Image Link
       * @description A short-lived link to this shared drive's background image.
       * @default null
       */
      backgroundImageLink: string | null;
      /**
       * DriveCapabilities
       * @description Capabilities the current user has on this shared drive.
       * @default null
       */
      capabilities: {
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission Restriction
           * @default null
           */
          canChangeCopyRequiresWriterPermissionRestriction: boolean | null;
          /**
           * Can Change Domain Users Only Restriction
           * @default null
           */
          canChangeDomainUsersOnlyRestriction: boolean | null;
          /**
           * Can Change Drive Background
           * @default null
           */
          canChangeDriveBackground: boolean | null;
          /**
           * Can Change Drive Members Only Restriction
           * @default null
           */
          canChangeDriveMembersOnlyRestriction: boolean | null;
          /**
           * Can Change Sharing Folders Requires Organizer Permission Restriction
           * @default null
           */
          canChangeSharingFoldersRequiresOrganizerPermissionRestriction: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Delete Drive
           * @default null
           */
          canDeleteDrive: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Manage Members
           * @default null
           */
          canManageMembers: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Rename Drive
           * @default null
           */
          canRenameDrive: boolean | null;
          /**
           * Can Reset Drive Restrictions
           * @default null
           */
          canResetDriveRestrictions: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
      } | null;
      /**
       * Color Rgb
       * @description The color of this shared drive as an RGB hex string.
       * @default null
       */
      colorRgb: string | null;
      /**
       * Created Time
       * @description The time at which the shared drive was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Hidden
       * @description Whether the shared drive is hidden from default view.
       * @default null
       */
      hidden: boolean | null;
      /**
       * Id
       * @description The ID of this shared drive.
       * @default null
       */
      id: string | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#drive".
       * @default null
       */
      kind: string | null;
      /**
       * Name
       * @description The name of this shared drive.
       * @default null
       */
      name: string | null;
      /**
       * Org Unit Id
       * @description The organizational unit of this shared drive.
       * @default null
       */
      orgUnitId: string | null;
      /**
       * DriveRestrictions
       * @description A set of restrictions that apply to this shared drive.
       * @default null
       */
      restrictions: {
          /**
           * Admin Managed Restrictions
           * @description If true, requires administrative privileges to modify restrictions.
           * @default null
           */
          adminManagedRestrictions: boolean | null;
          /**
           * Copy Requires Writer Permission
           * @description If true, disables copy, print, or download options for readers and commenters.
           * @default null
           */
          copyRequiresWriterPermission: boolean | null;
          /**
           * Domain Users Only
           * @description If true, restricts access to users of the domain to which the shared drive belongs.
           * @default null
           */
          domainUsersOnly: boolean | null;
          /**
           * Drive Members Only
           * @description If true, restricts access to items inside the shared drive to its members.
           * @default null
           */
          driveMembersOnly: boolean | null;
          /**
           * Sharing Folders Requires Organizer Permission
           * @description If true, only users with the organizer role can share folders. If false, users with either the organizer or file organizer role can share folders.
           * @default null
           */
          sharingFoldersRequiresOrganizerPermission: boolean | null;
      } | null;
      /**
       * Theme Id
       * @description The ID of the theme from which the background image and color will be set.
       * @default null
       */
      themeId: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_FILE_PUT tool input.
 */
type GOOGLEDRIVE_UPDATE_FILE_PUT_INPUT = {
  /**
   * Add Parents
   * @description A comma-separated list of parent IDs to add.
   * @default null
   */
  add_parents: string | null;
  /**
   * Description
   * @description A short description of the file.
   * @default null
   */
  description: string | null;
  /**
   * File Id
   * @description The ID of the file to update.
   */
  file_id?: string;
  /**
   * Keep Revision Forever
   * @description Whether to set this revision of the file to be kept forever. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
   * @default null
   */
  keep_revision_forever: boolean | null;
  /**
   * Mime Type
   * @description The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
   * @default null
   */
  mime_type: string | null;
  /**
   * Name
   * @description The name of the file.
   * @default null
   */
  name: string | null;
  /**
   * Ocr Language
   * @description A language hint for OCR processing during image import (ISO 639-1 code).
   * @default null
   */
  ocr_language: string | null;
  /**
   * Remove Parents
   * @description A comma-separated list of parent IDs to remove.
   * @default null
   */
  remove_parents: string | null;
  /**
   * Starred
   * @description Whether the user has starred the file.
   * @default null
   */
  starred: boolean | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. This parameter will always be true by default if the application is configured to support shared drives.
   * @default null
   */
  supports_all_drives: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Whether the requesting application is using domain-wide delegation to access content belonging to a user in a different domain. This is only applicable to files with binary content in Google Drive.
   * @default null
   */
  use_domain_admin_access: boolean | null;
  /**
   * Viewers Can Copy Content
   * @description Whether viewers are prevented from copying content of the file.
   * @default null
   */
  viewers_can_copy_content: boolean | null;
  /**
   * Writers Can Share
   * @description Whether writers can share the document with other users.
   * @default null
   */
  writers_can_share: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_FILE_PUT tool output.
 */
type GOOGLEDRIVE_UPDATE_FILE_PUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      app_properties: {
          [key: string]: string;
      } | null;
      /**
       * Capabilities
       * @description Capabilities the current user has on this file. Each capability corresponds to a fine-grained permission that a user may have.
       * @default null
       */
      capabilities: {
          [key: string]: unknown;
      } | null;
      /**
       * Content Hints
       * @description Additional information about the content of the file. These fields are never populated in responses.
       * @default null
       */
      content_hints: {
          [key: string]: unknown;
      } | null;
      /**
       * Content Restrictions
       * @description Content restrictions for this file.
       * @default null
       */
      content_restrictions: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether users with only writer permission can modify the file's permissions. This field is now deprecated: use writersCanShare instead.
       * @default null
       */
      copy_requires_writer_permission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      created_time: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in. This is an alias for teamDriveId.
       * @default null
       */
      drive_id: string | null;
      /**
       * Export Links
       * @description Links for exporting Google Docs to specific formats.
       * @default null
       */
      export_links: {
          [key: string]: string;
      } | null;
      /**
       * File Extension
       * @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
       * @default null
       */
      file_extension: string | null;
      /**
       * Full File Extension
       * @description The full file extension extracted from the name field. May contain multiple concatenated extensions, suchas "tar.gz". This is only available for files with binary content in Google Drive.
       * @default null
       */
      full_file_extension: string | null;
      /**
       * Has Thumbnail
       * @description Whether this file has a thumbnail.
       * @default null
       */
      has_thumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description The ID of the head revision of the file.
       * @default null
       */
      head_revision_id: string | null;
      /**
       * Icon Link
       * @description A static, unauthenticated link to the file's icon.
       * @default null
       */
      icon_link: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * Image Media Metadata
       * @description Metadata about image media. This will only be present for image types, and its contents will depend on the image type.
       * @default null
       */
      image_media_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Is App Authorized
       * @description Whether the file was created or opened by the requesting app.
       * @default null
       */
      is_app_authorized: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#file'.
       */
      kind: string;
      /**
       * Label Info
       * @description Label information for the file.
       * @default null
       */
      label_info: {
          [key: string]: unknown;
      } | null;
      /**
       * Last Modifying User
       * @description The last user to modify the file.
       * @default null
       */
      last_modifying_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Link Share Metadata
       * @description Metadata about the shared link. This will only be present for files with link-sharing enabled.
       * @default null
       */
      link_share_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      md5_checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mime_type: string | null;
      /**
       * Modified By Me Time
       * @description The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modified_by_me_time: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modified_time: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.
       * @default null
       */
      original_filename: string | null;
      /**
       * Owned By Me
       * @description Whether the user owns the file.
       * @default null
       */
      owned_by_me: boolean | null;
      /**
       * Owners
       * @description The owners of the file. Currently, only certain legacy files may have more than one owner.
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Permission Ids
       * @description A list of permission IDs for users with access to this file.
       * @default null
       */
      permission_ids: string[] | null;
      /**
       * Permissions
       * @description The full list of permissions for the file. This is only available if the requesting user has sufficient permission to see the full list of permissions.
       * @default null
       */
      permissions: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
       * @default null
       */
      quota_bytes_used: string | null;
      /**
       * Resource Key
       * @description A key needed to access the item via a shared link.
       * @default null
       */
      resource_key: string | null;
      /**
       * Shared
       * @description Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
       * @default null
       */
      shared_with_me_time: string | null;
      /**
       * Sharing User
       * @description The user who shared the file with the requesting user, if applicable.
       * @default null
       */
      sharing_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Shortcut Details
       * @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
       * @default null
       */
      shortcut_details: {
          [key: string]: unknown;
      } | null;
      /**
       * Size
       * @description The size of the file's content in bytes. This is applicable to files with binary content in Google Drive and Google Docs files.
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
       * @default null
       */
      spaces: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Team Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      team_drive_id: string | null;
      /**
       * Thumbnail Link
       * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.
       * @default null
       */
      thumbnail_link: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: number | null;
      /**
       * Video Media Metadata
       * @description Metadata about video media. This will only be present for video types.
       * @default null
       */
      video_media_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Viewed By Me
       * @description Whether the file has been viewed by this user.
       * @default null
       */
      viewed_by_me: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewed_by_me_time: string | null;
      /**
       * Viewers Can Copy Content
       * @description Whether viewers are prevented from copying content of the file made available for offline access.
       * @default null
       */
      viewers_can_copy_content: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
       * @default null
       */
      web_content_link: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      web_view_link: string | null;
      /**
       * Writers Can Share
       * @description Whether writers can share the document with other users. This field is now deprecated: users should use the capabilities field on a file. The capabilities field can tell you if a user can share a file.
       * @default null
       */
      writers_can_share: boolean | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA tool input.
 */
type GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA_INPUT = {
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Keep Forever
   * @description Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.
   * @default null
   */
  keep_forever: boolean | null;
  /**
   * Publish Auto
   * @description Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.
   * @default null
   */
  publishAuto: boolean | null;
  /**
   * Published
   * @description Whether this revision is published. This is only applicable to Docs Editors files.
   * @default null
   */
  published: boolean | null;
  /**
   * Published Outside Domain
   * @description Whether this revision is published outside the domain. This is only applicable to Docs Editors files.
   * @default null
   */
  publishedOutsideDomain: boolean | null;
  /**
   * Revision Id
   * @description The ID of the revision.
   */
  revision_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA tool output.
 */
type GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Export Links
       * @description Links for exporting Docs Editors files to specific formats.
       * @default null
       */
      exportLinks: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description The ID of the revision.
       * @default null
       */
      id: string | null;
      /**
       * Keep Forever
       * @description Whether to keep this revision forever.
       * @default null
       */
      keepForever: boolean | null;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string "drive#revision".
       * @default null
       */
      kind: string | null;
      /**
       * User
       * @description The last user to modify this revision.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description A plain text displayable name for this user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies what kind of resource this is. Value: the fixed string "drive#user".
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The user's ID as visible in Permission resources.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum of the revision's content.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the revision.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified Time
       * @description The last time the revision was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Original Filename
       * @description The original filename used to create this revision.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Publish Auto
       * @description Whether subsequent revisions will be automatically republished.
       * @default null
       */
      publishAuto: boolean | null;
      /**
       * Published
       * @description Whether this revision is published. This is only applicable to Docs Editors files.
       * @default null
       */
      published: boolean | null;
      /**
       * Published Link
       * @description A link to the published revision.
       * @default null
       */
      publishedLink: string | null;
      /**
       * Published Outside Domain
       * @description Whether this revision is published outside the domain.
       * @default null
       */
      publishedOutsideDomain: boolean | null;
      /**
       * Size
       * @description The size of the revision's content in bytes.
       * @default null
       */
      size: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_PERMISSION tool input.
 */
type GOOGLEDRIVE_UPDATE_PERMISSION_INPUT = {
  /**
   * Enforce Expansive Access
   * @description Whether the request should enforce expansive access rules. This field is deprecated, it is recommended to use `permissionDetails` instead.
   * @default false
   */
  enforceExpansiveAccess: boolean | null;
  /**
   * File Id
   * @description The ID of the file or shared drive.
   */
  fileId?: string;
  /**
   * Permission
   * @description The permission resource to update. Only 'role' and 'expirationTime' can be updated.
   */
  permission?: {
      /**
       * Expiration Time
       * Format: date-time
       * @description The time at which this permission will expire (RFC 3339 date-time).
       * @default null
       */
      expirationTime: string | null;
      /**
       * Role
       * @description The role granted by this permission.
       * @default null
       */
      role: string | null;
  };
  /**
   * Permission Id
   * @description The ID of the permission.
   */
  permissionId?: string;
  /**
   * Remove Expiration
   * @description Whether to remove the expiration date.
   * @default false
   */
  removeExpiration: boolean | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives.
   * @default false
   */
  supportsAllDrives: boolean | null;
  /**
   * Transfer Ownership
   * @description Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect when set to true.
   * @default false
   */
  transferOwnership: boolean | null;
  /**
   * Use Domain Admin Access
   * @description Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
   * @default false
   */
  useDomainAdminAccess: boolean | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_PERMISSION tool output.
 */
type GOOGLEDRIVE_UPDATE_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the permission has been deleted. This is always false for permissions that haven't been deleted.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Display Name
       * @description The display name of the user or group to which this permission refers.
       * @default null
       */
      displayName: string | null;
      /**
       * Domain
       * @description The domain to which this permission refers.
       * @default null
       */
      domain: string | null;
      /**
       * Email Address
       * @description The email address of the user or group to which this permission refers.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Expiration Time
       * Format: date-time
       * @description The time at which this permission will expire (RFC 3339 date-time).
       * @default null
       */
      expirationTime: string | null;
      /**
       * Id
       * @description The ID of the permission.
       */
      id: string;
      /**
       * Kind
       * @description Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.
       * @default drive#permission
       */
      kind: string;
      /**
       * Pending Owner
       * @description Whether the account is pending owner. Output only.
       * @default null
       */
      pendingOwner: boolean | null;
      /**
       * Permission Details
       * @description Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
       * @default null
       */
      permissionDetails: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Photo Link
       * @description A link to the user's profile photo, if available.
       * @default null
       */
      photoLink: string | null;
      /**
       * Role
       * @description The role granted by this permission.
       */
      role: string;
      /**
       * Type
       * @description The type of the grantee.
       */
      type: string;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_REPLY tool input.
 */
type GOOGLEDRIVE_UPDATE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment.
   */
  comment_id?: string;
  /**
   * Content
   * @description The new plain text content of the reply.
   */
  content?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response.
   */
  fields?: string | null;
  /**
   * File Id
   * @description The ID of the file.
   */
  file_id?: string;
  /**
   * Reply Id
   * @description The ID of the reply.
   */
  reply_id?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPDATE_REPLY tool output.
 */
type GOOGLEDRIVE_UPDATE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Action
       * @description The action the reply performed to the parent comment. Valid values are: `resolve`, `reopen`.
       * @default null
       */
      action: string | null;
      /**
       * Author
       * @description The user who created the reply.
       * @default null
       */
      author: {
          [key: string]: unknown;
      } | null;
      /**
       * Content
       * @description The plain text content of the reply.
       * @default null
       */
      content: string | null;
      /**
       * Created Time
       * @description The time the reply was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Deleted
       * @description Whether the reply has been deleted. A deleted reply has no content.
       * @default null
       */
      deleted: boolean | null;
      /**
       * Html Content
       * @description The HTML content of the reply.
       * @default null
       */
      htmlContent: string | null;
      /**
       * Id
       * @description The ID of the reply.
       * @default null
       */
      id: string | null;
      /**
       * Modified Time
       * @description The last time the reply was modified (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPLOAD_FILE tool input.
 */
type GOOGLEDRIVE_UPLOAD_FILE_INPUT = {
  /**
   * FileUploadable
   * @description File to upload to Google Drive (max 5MB), identified by its name or path.
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Folder To Upload To
   * @description Optional ID of the target Google Drive folder; can be obtained using 'Find Folder' or similar actions.
   * @default null
   */
  folder_to_upload_to: string | null;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_UPLOAD_FILE tool output.
 */
type GOOGLEDRIVE_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Properties
       * @description A collection of arbitrary key-value pairs which are private to the requesting app.
       * @default null
       */
      appProperties: {
          [key: string]: string;
      } | null;
      /**
       * Capabilities
       * @description Capabilities the current user has on this file.
       * @default null
       */
      capabilities: {
          /**
           * Can Accept Ownership
           * @default null
           */
          canAcceptOwnership: boolean | null;
          /**
           * Can Add Children
           * @default null
           */
          canAddChildren: boolean | null;
          /**
           * Can Add Folder From Another Drive
           * @default null
           */
          canAddFolderFromAnotherDrive: boolean | null;
          /**
           * Can Add My Drive Parent
           * @default null
           */
          canAddMyDriveParent: boolean | null;
          /**
           * Can Change Copy Requires Writer Permission
           * @default null
           */
          canChangeCopyRequiresWriterPermission: boolean | null;
          /**
           * Can Change Security Update Enabled
           * @default null
           */
          canChangeSecurityUpdateEnabled: boolean | null;
          /**
           * Can Change Viewers Can Copy Content
           * @default null
           */
          canChangeViewersCanCopyContent: boolean | null;
          /**
           * Can Comment
           * @default null
           */
          canComment: boolean | null;
          /**
           * Can Copy
           * @default null
           */
          canCopy: boolean | null;
          /**
           * Can Delete
           * @default null
           */
          canDelete: boolean | null;
          /**
           * Can Delete Children
           * @default null
           */
          canDeleteChildren: boolean | null;
          /**
           * Can Disable Inherited Permissions
           * @default null
           */
          canDisableInheritedPermissions: boolean | null;
          /**
           * Can Download
           * @default null
           */
          canDownload: boolean | null;
          /**
           * Can Edit
           * @default null
           */
          canEdit: boolean | null;
          /**
           * Can Enable Inherited Permissions
           * @default null
           */
          canEnableInheritedPermissions: boolean | null;
          /**
           * Can List Children
           * @default null
           */
          canListChildren: boolean | null;
          /**
           * Can Modify Content
           * @default null
           */
          canModifyContent: boolean | null;
          /**
           * Can Modify Content Restriction
           * @default null
           */
          canModifyContentRestriction: boolean | null;
          /**
           * Can Modify Editor Content Restriction
           * @default null
           */
          canModifyEditorContentRestriction: boolean | null;
          /**
           * Can Modify Labels
           * @default null
           */
          canModifyLabels: boolean | null;
          /**
           * Can Modify Owner Content Restriction
           * @default null
           */
          canModifyOwnerContentRestriction: boolean | null;
          /**
           * Can Move Children Out Of Drive
           * @default null
           */
          canMoveChildrenOutOfDrive: boolean | null;
          /**
           * Can Move Children Out Of Team Drive
           * @default null
           */
          canMoveChildrenOutOfTeamDrive: boolean | null;
          /**
           * Can Move Children Within Drive
           * @default null
           */
          canMoveChildrenWithinDrive: boolean | null;
          /**
           * Can Move Children Within Team Drive
           * @default null
           */
          canMoveChildrenWithinTeamDrive: boolean | null;
          /**
           * Can Move Item Into Team Drive
           * @default null
           */
          canMoveItemIntoTeamDrive: boolean | null;
          /**
           * Can Move Item Out Of Drive
           * @default null
           */
          canMoveItemOutOfDrive: boolean | null;
          /**
           * Can Move Item Out Of Team Drive
           * @default null
           */
          canMoveItemOutOfTeamDrive: boolean | null;
          /**
           * Can Move Item Within Drive
           * @default null
           */
          canMoveItemWithinDrive: boolean | null;
          /**
           * Can Move Item Within Team Drive
           * @default null
           */
          canMoveItemWithinTeamDrive: boolean | null;
          /**
           * Can Move Team Drive Item
           * @default null
           */
          canMoveTeamDriveItem: boolean | null;
          /**
           * Can Read Drive
           * @default null
           */
          canReadDrive: boolean | null;
          /**
           * Can Read Labels
           * @default null
           */
          canReadLabels: boolean | null;
          /**
           * Can Read Revisions
           * @default null
           */
          canReadRevisions: boolean | null;
          /**
           * Can Read Team Drive
           * @default null
           */
          canReadTeamDrive: boolean | null;
          /**
           * Can Remove Children
           * @default null
           */
          canRemoveChildren: boolean | null;
          /**
           * Can Remove Content Restriction
           * @default null
           */
          canRemoveContentRestriction: boolean | null;
          /**
           * Can Remove My Drive Parent
           * @default null
           */
          canRemoveMyDriveParent: boolean | null;
          /**
           * Can Rename
           * @default null
           */
          canRename: boolean | null;
          /**
           * Can Share
           * @default null
           */
          canShare: boolean | null;
          /**
           * Can Trash
           * @default null
           */
          canTrash: boolean | null;
          /**
           * Can Trash Children
           * @default null
           */
          canTrashChildren: boolean | null;
          /**
           * Can Untrash
           * @default null
           */
          canUntrash: boolean | null;
      } | null;
      /**
       * ContentHints
       * @description Additional information about the content of the file. This is only available for files with binary content in Google Drive.
       * @default null
       */
      contentHints: {
          /**
           * Indexable Text
           * @description Text to be indexed for the file to improve searchability.
           * @default null
           */
          indexableText: string | null;
          /**
           * Thumbnail
           * @description A thumbnail for the file.
           * @default null
           */
          thumbnail: {
              /**
               * Image
               * @description The URL-safe Base64 encoded image data.
               * @default null
               */
              image: string | null;
              /**
               * Mime Type
               * @description The MIME type of the thumbnail.
               * @default null
               */
              mimeType: string | null;
          } | null;
      } | null;
      /**
       * Content Restrictions
       * @description Content restrictions for this file.
       * @default null
       */
      contentRestrictions: {
          /**
           * Read Only
           * @default null
           */
          readOnly: boolean | null;
          /**
           * Reason
           * @default null
           */
          reason: string | null;
      }[] | null;
      /**
       * Copy Requires Writer Permission
       * @description Whether to require the user to be a writer on the item in order to copy content.
       * @default null
       */
      copyRequiresWriterPermission: boolean | null;
      /**
       * Created Time
       * @description The time at which the file was created (RFC 3339 date-time).
       * @default null
       */
      createdTime: string | null;
      /**
       * Description
       * @description A short description of the file.
       * @default null
       */
      description: string | null;
      /**
       * Drive Id
       * @description The ID of the shared drive the file resides in. Only populated for items in shared drives.
       * @default null
       */
      driveId: string | null;
      /**
       * Explicitly Trashed
       * @description Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
       * @default null
       */
      explicitlyTrashed: boolean | null;
      /**
       * Export Links
       * @description Links for exporting Google Docs to specific formats.
       * @default null
       */
      exportLinks: {
          [key: string]: string;
      } | null;
      /**
       * File Extension
       * @description The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
       * @default null
       */
      fileExtension: string | null;
      /**
       * Folder Color Rgb
       * @description The color for a folder as an RGB hex string. E.g. #4f8df3
       * @default null
       */
      folderColorRgb: string | null;
      /**
       * Full File Extension
       * @description The full file extension extracted from the name field. May contain multiple concatenated extensions, such as 'tar.gz'.
       * @default null
       */
      fullFileExtension: string | null;
      /**
       * Has Augmented Permissions
       * @default null
       */
      hasAugmentedPermissions: boolean | null;
      /**
       * Has Thumbnail
       * @description Whether this file has a thumbnail.
       * @default null
       */
      hasThumbnail: boolean | null;
      /**
       * Head Revision Id
       * @description The ID of the head revision of the file.
       * @default null
       */
      headRevisionId: string | null;
      /**
       * Icon Link
       * @description A static, unauthenticated link to the file's icon.
       * @default null
       */
      iconLink: string | null;
      /**
       * Id
       * @description The ID of the file.
       */
      id: string;
      /**
       * ImageMediaMetadata
       * @description Additional metadata about image media, if available.
       * @default null
       */
      imageMediaMetadata: {
          /**
           * Aperture
           * @description The aperture used to create the image.
           * @default null
           */
          aperture: number | null;
          /**
           * Camera Make
           * @description The make of the camera used to create the image.
           * @default null
           */
          cameraMake: string | null;
          /**
           * Camera Model
           * @description The model of the camera used to create the image.
           * @default null
           */
          cameraModel: string | null;
          /**
           * Color Space
           * @description The color space of the image.
           * @default null
           */
          colorSpace: string | null;
          /**
           * Exposure Bias
           * @description The exposure bias of the image.
           * @default null
           */
          exposureBias: number | null;
          /**
           * Exposure Mode
           * @description The exposure mode used to create the image.
           * @default null
           */
          exposureMode: string | null;
          /**
           * Exposure Time
           * @description The exposure time used to create the image.
           * @default null
           */
          exposureTime: number | null;
          /**
           * Flash Used
           * @description Whether a flash was used to create the image.
           * @default null
           */
          flashUsed: boolean | null;
          /**
           * Focal Length
           * @description The focal length used to create the image.
           * @default null
           */
          focalLength: number | null;
          /**
           * Height
           * @description The height of the image in pixels.
           * @default null
           */
          height: number | null;
          /**
           * Iso Speed
           * @description The ISO speed used to create the image.
           * @default null
           */
          isoSpeed: number | null;
          /**
           * Lens
           * @description The lens used to create the image.
           * @default null
           */
          lens: string | null;
          /**
           * Location
           * @description Geographic location information for the image.
           * @default null
           */
          location: {
              /**
               * Altitude
               * @description The altitude of the location.
               * @default null
               */
              altitude: number | null;
              /**
               * Latitude
               * @description The latitude of the location.
               * @default null
               */
              latitude: number | null;
              /**
               * Longitude
               * @description The longitude of the location.
               * @default null
               */
              longitude: number | null;
          } | null;
          /**
           * Max Aperture Value
           * @description The maximum aperture value of the image.
           * @default null
           */
          maxApertureValue: number | null;
          /**
           * Metering Mode
           * @description The metering mode used to create the image.
           * @default null
           */
          meteringMode: string | null;
          /**
           * Rotation
           * @description The rotation of the image in degrees.
           * @default null
           */
          rotation: number | null;
          /**
           * Sensor
           * @description The sensor used to create the image.
           * @default null
           */
          sensor: string | null;
          /**
           * Subject Distance
           * @description The subject distance of the image.
           * @default null
           */
          subjectDistance: number | null;
          /**
           * Time
           * @description The time the photo was taken (Exif DateTime).
           * @default null
           */
          time: string | null;
          /**
           * White Balance
           * @description The white balance mode used to create the image.
           * @default null
           */
          whiteBalance: string | null;
          /**
           * Width
           * @description The width of the image in pixels.
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Is App Authorized
       * @description Whether the file was created or opened by the requesting app.
       * @default null
       */
      isAppAuthorized: boolean | null;
      /**
       * Kind
       * @description Identifies the resource type. This is always 'drive#file'.
       */
      kind: string;
      /**
       * LabelInfo
       * @description Information about labels applied to the file.
       * @default null
       */
      labelInfo: {
          /**
           * Labels
           * @default null
           */
          labels: {
              /**
               * Fields
               * @default null
               */
              fields: {
                  [key: string]: {
                      /**
                       * Datestring
                       * @default null
                       */
                      dateString: string[] | null;
                      /**
                       * Id
                       * @default null
                       */
                      id: string | null;
                      /**
                       * Integer
                       * @default null
                       */
                      integer: string[] | null;
                      /**
                       * Kind
                       * @default null
                       */
                      kind: string | null;
                      /**
                       * Selection
                       * @default null
                       */
                      selection: string[] | null;
                      /**
                       * Text
                       * @default null
                       */
                      text: string[] | null;
                      /**
                       * User
                       * @default null
                       */
                      user: string[] | null;
                      /**
                       * Valuetype
                       * @default null
                       */
                      valueType: string | null;
                  };
              } | null;
              /**
               * Id
               * @default null
               */
              id: string | null;
              /**
               * Kind
               * @default null
               */
              kind: string | null;
              /**
               * Revision Id
               * @default null
               */
              revisionId: string | null;
          }[] | null;
      } | null;
      /**
       * User
       * @description The last user to modify the file.
       * @default null
       */
      lastModifyingUser: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * LinkShareMetadata
       * @description Metadata about the shared link for this file.
       * @default null
       */
      linkShareMetadata: {
          /**
           * Security Update Eligible
           * @default null
           */
          securityUpdateEligible: boolean | null;
          /**
           * Security Update Enabled
           * @default null
           */
          securityUpdateEnabled: boolean | null;
      } | null;
      /**
       * Md5 Checksum
       * @description The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      md5Checksum: string | null;
      /**
       * Mime Type
       * @description The MIME type of the file.
       * @default null
       */
      mimeType: string | null;
      /**
       * Modified By Me
       * @description Whether the file has been modified by this user.
       * @default null
       */
      modifiedByMe: boolean | null;
      /**
       * Modified By Me Time
       * @description The last time the file was modified by the user (RFC 3339 date-time).
       * @default null
       */
      modifiedByMeTime: string | null;
      /**
       * Modified Time
       * @description The last time the file was modified by anyone (RFC 3339 date-time).
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Name
       * @description The name of the file.
       * @default null
       */
      name: string | null;
      /**
       * Original Filename
       * @description The original filename of the uploaded content if available, or else the original value of the name field. Once set, it will only change if a new revision is uploaded.
       * @default null
       */
      originalFilename: string | null;
      /**
       * Owned By Me
       * @description Whether the user owns the file.
       * @default null
       */
      ownedByMe: boolean | null;
      /**
       * Owners
       * @description The owners of the file. Currently, only certain legacy files may have more than one owner.
       * @default null
       */
      owners: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      }[] | null;
      /**
       * Parents
       * @description The IDs of the parent folders which contain the file.
       * @default null
       */
      parents: string[] | null;
      /**
       * Permission Ids
       * @description A list of permission IDs for users with access to this file.
       * @default null
       */
      permissionIds: string[] | null;
      /**
       * Permissions
       * @description The permissions for the file. This field is only populated for items in shared drives.
       * @default null
       */
      permissions: {
          /**
           * Display Name
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @default null
           */
          emailAddress: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @default drive#permission
           */
          kind: string | null;
          /**
           * Role
           * @default null
           */
          role: string | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Properties
       * @description A collection of arbitrary key-value pairs which are visible to all apps.
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Quota Bytes Used
       * @description The number of bytes the file occupies in storage. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      quotaBytesUsed: string | null;
      /**
       * Resource Key
       * @description A key needed to access the item via a shared link.
       * @default null
       */
      resourceKey: string | null;
      /**
       * Sha1 Checksum
       * @description The SHA1 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      sha1Checksum: string | null;
      /**
       * Sha256 Checksum
       * @description The SHA256 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
       * @default null
       */
      sha256Checksum: string | null;
      /**
       * Shared
       * @description Whether the file has been shared.
       * @default null
       */
      shared: boolean | null;
      /**
       * Shared With Me Time
       * @description The time at which the file was shared with the user (RFC 3339 date-time).
       * @default null
       */
      sharedWithMeTime: string | null;
      /**
       * User
       * @description The user who shared the file with the current user, if applicable.
       * @default null
       */
      sharingUser: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * ShortcutDetails
       * @description Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
       * @default null
       */
      shortcutDetails: {
          /**
           * Target Id
           * @description The ID of the file that this shortcut points to.
           * @default null
           */
          targetId: string | null;
          /**
           * Target Mime Type
           * @description The MIME type of the file that this shortcut points to.
           * @default null
           */
          targetMimeType: string | null;
          /**
           * Target Resource Key
           * @description The resource key of the target file.
           * @default null
           */
          targetResourceKey: string | null;
      } | null;
      /**
       * Size
       * @description The size of the file's content in bytes. This is applicable to files with binary content in Google Drive and Google Docs files.
       * @default null
       */
      size: string | null;
      /**
       * Spaces
       * @description The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
       * @default null
       */
      spaces: string[] | null;
      /**
       * Starred
       * @description Whether the user has starred the file.
       * @default null
       */
      starred: boolean | null;
      /**
       * Team Drive Id
       * @description Deprecated: Use driveId instead.
       * @default null
       */
      teamDriveId: string | null;
      /**
       * Thumbnail Link
       * @description A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.
       * @default null
       */
      thumbnailLink: string | null;
      /**
       * Thumbnail Version
       * @description The version of the file's thumbnail. Available when the media is hosted on Google Drive.
       * @default null
       */
      thumbnailVersion: string | null;
      /**
       * Trashed
       * @description Whether the file has been trashed, either explicitly or from a trashed parent folder.
       * @default null
       */
      trashed: boolean | null;
      /**
       * Trashed Time
       * @default null
       */
      trashedTime: string | null;
      /**
       * User
       * @default null
       */
      trashingUser: {
          /**
           * Display Name
           * @description The display name of the user.
           * @default null
           */
          displayName: string | null;
          /**
           * Email Address
           * @description The email address of the user.
           * @default null
           */
          emailAddress: string | null;
          /**
           * Kind
           * @description Identifies the resource type (e.g., drive#user).
           * @default null
           */
          kind: string | null;
          /**
           * Me
           * @description Whether this user is the requesting user.
           * @default null
           */
          me: boolean | null;
          /**
           * Permission Id
           * @description The ETag of the permission.
           * @default null
           */
          permissionId: string | null;
          /**
           * Photo Link
           * @description A link to the user's profile photo, if available.
           * @default null
           */
          photoLink: string | null;
      } | null;
      /**
       * Version
       * @description A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
       * @default null
       */
      version: string | null;
      /**
       * VideoMediaMetadata
       * @description Additional metadata about video media, if available.
       * @default null
       */
      videoMediaMetadata: {
          /**
           * Duration Millis
           * @description The duration of the video in milliseconds.
           * @default null
           */
          durationMillis: string | null;
          /**
           * Height
           * @description The height of the video in pixels.
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @description The width of the video in pixels.
           * @default null
           */
          width: number | null;
      } | null;
      /**
       * Viewed By Me
       * @description Whether the file has been viewed by this user.
       * @default null
       */
      viewedByMe: boolean | null;
      /**
       * Viewed By Me Time
       * @description The last time the file was viewed by the user (RFC 3339 date-time).
       * @default null
       */
      viewedByMeTime: string | null;
      /**
       * Viewers Can Copy Content
       * @description Whether users with only reader or commenter permission can copy the content of the file. This does not apply to Google Docs, Sheets, and Slides.
       * @default null
       */
      viewersCanCopyContent: boolean | null;
      /**
       * Web Content Link
       * @description A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
       * @default null
       */
      webContentLink: string | null;
      /**
       * Web View Link
       * @description A link for opening the file in a relevant Google editor or viewer in a browser.
       * @default null
       */
      webViewLink: string | null;
      /**
       * Writers Can Share
       * @description Whether writers can share the document with other users.
       * @default null
       */
      writersCanShare: boolean | null;
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
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_WATCH_CHANGES tool input.
 */
type GOOGLEDRIVE_WATCH_CHANGES_INPUT = {
  /**
   * Address
   * Format: uri
   * @description The URL where notifications are to be delivered.
   */
  address?: string;
  /**
   * Drive Id
   * @description The shared drive from which changes will be returned. If specified, change IDs will be specific to the shared drive.
   * @default null
   */
  drive_id: string | null;
  /**
   * Expiration
   * @description Timestamp in milliseconds since the epoch for when the channel should expire. If not set, channel may not expire or have a default expiration.
   * @default null
   */
  expiration: number | null;
  /**
   * Id
   * @description A unique string that identifies this channel. UUIDs are recommended.
   */
  id?: string;
  /**
   * Include Corpus Removals
   * @description Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes.
   * @default null
   */
  include_corpus_removals: boolean | null;
  /**
   * Include Items From All Drives
   * @description Whether both My Drive and shared drive items should be included in results.
   * @default null
   */
  include_items_from_all_drives: boolean | null;
  /**
   * Include Labels
   * @description A comma-separated list of IDs of labels to include in the labelInfo part of the response.
   * @default null
   */
  include_labels: string | null;
  /**
   * Include Permissions For View
   * @description Specifies which additional view's permissions to include in the response. Only 'published' is supported.
   * @default null
   */
  include_permissions_for_view: string | null;
  /**
   * Include Removed
   * @description Whether to include changes indicating that items have been removed from the list of changes (e.g., by deletion or loss of access).
   * @default true
   */
  include_removed: boolean | null;
  /**
   * Page Size
   * @description The maximum number of changes to return per page.
   * @default 100
   */
  page_size: number | null;
  /**
   * Page Token
   * @description The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
   * @default null
   */
  page_token: string | null;
  /**
   * ChannelParams
   * @description Optional parameters for the notification channel.
   *     Example: {"ttl": "3600"} for a 1-hour time-to-live (actual support depends on Google API).
   * @default null
   */
  params: {
      /**
       * Additional Properties
       * @description Key-value pairs for additional parameters.
       * @default null
       */
      additional_properties: {
          [key: string]: string;
      } | null;
  } | null;
  /**
   * Restrict To My Drive
   * @description Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files like those in the Application Data folder or shared files not added to My Drive.
   * @default false
   */
  restrict_to_my_drive: boolean | null;
  /**
   * Spaces
   * @description A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
   * @default drive
   */
  spaces: string | null;
  /**
   * Supports All Drives
   * @description Whether the requesting application supports both My Drives and shared drives. Recommended to set to true if driveId is used or if interactions with shared drives are expected.
   * @default false
   */
  supports_all_drives: boolean | null;
  /**
   * Token
   * @description An arbitrary string that will be delivered with each notification. Can be used for verification.
   * @default null
   */
  token: string | null;
  /**
   * Type
   * @description The type of delivery mechanism for notifications (e.g., 'web_hook').
   */
  type?: string;
};

/**
 * Type of GOOGLEDRIVE's GOOGLEDRIVE_WATCH_CHANGES tool output.
 */
type GOOGLEDRIVE_WATCH_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration
       * @description Timestamp in milliseconds since the epoch when the channel will expire.
       * @default null
       */
      expiration: number | null;
      /**
       * Id
       * @description The ID of the established channel.
       */
      id: string;
      /**
       * Kind
       * @description Identifies this as a notification channel.
       * @default null
       */
      kind: string | null;
      /**
       * Resource Id
       * @description An opaque ID for the resource being watched.
       * @default null
       */
      resource_id: string | null;
      /**
       * Resource Uri
       * @description A version-specific URI for the watched resource.
       * @default null
       */
      resource_uri: string | null;
      /**
       * Token
       * @description The token that will be sent with notifications, if one was provided in the request.
       * @default null
       */
      token: string | null;
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
 * Type map of all available tool input types for toolkit "GOOGLEDRIVE".
 */
export type GOOGLEDRIVE_TOOL_INPUTS = {
  ADD_FILE_SHARING_PREFERENCE: GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE_INPUT
  COPY_FILE: GOOGLEDRIVE_COPY_FILE_INPUT
  CREATE_COMMENT: GOOGLEDRIVE_CREATE_COMMENT_INPUT
  CREATE_DRIVE: GOOGLEDRIVE_CREATE_DRIVE_INPUT
  CREATE_FILE: GOOGLEDRIVE_CREATE_FILE_INPUT
  CREATE_FILE_FROM_TEXT: GOOGLEDRIVE_CREATE_FILE_FROM_TEXT_INPUT
  CREATE_FOLDER: GOOGLEDRIVE_CREATE_FOLDER_INPUT
  CREATE_REPLY: GOOGLEDRIVE_CREATE_REPLY_INPUT
  CREATE_SHORTCUT_TO_FILE: GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE_INPUT
  DELETE_COMMENT: GOOGLEDRIVE_DELETE_COMMENT_INPUT
  DELETE_DRIVE: GOOGLEDRIVE_DELETE_DRIVE_INPUT
  DELETE_PERMISSION: GOOGLEDRIVE_DELETE_PERMISSION_INPUT
  DELETE_REPLY: GOOGLEDRIVE_DELETE_REPLY_INPUT
  DOWNLOAD_FILE: GOOGLEDRIVE_DOWNLOAD_FILE_INPUT
  EDIT_FILE: GOOGLEDRIVE_EDIT_FILE_INPUT
  EMPTY_TRASH: GOOGLEDRIVE_EMPTY_TRASH_INPUT
  FILES_MODIFY_LABELS: GOOGLEDRIVE_FILES_MODIFY_LABELS_INPUT
  FIND_FILE: GOOGLEDRIVE_FIND_FILE_INPUT
  FIND_FOLDER: GOOGLEDRIVE_FIND_FOLDER_INPUT
  GENERATE_IDS: GOOGLEDRIVE_GENERATE_IDS_INPUT
  GET_ABOUT: GOOGLEDRIVE_GET_ABOUT_INPUT
  GET_CHANGES_START_PAGE_TOKEN: GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN_INPUT
  GET_COMMENT: GOOGLEDRIVE_GET_COMMENT_INPUT
  GET_DRIVE: GOOGLEDRIVE_GET_DRIVE_INPUT
  GET_FILE_METADATA: GOOGLEDRIVE_GET_FILE_METADATA_INPUT
  GET_PERMISSION: GOOGLEDRIVE_GET_PERMISSION_INPUT
  GET_REPLY: GOOGLEDRIVE_GET_REPLY_INPUT
  GET_REVISION: GOOGLEDRIVE_GET_REVISION_INPUT
  GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION: GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_INPUT
  HIDE_DRIVE: GOOGLEDRIVE_HIDE_DRIVE_INPUT
  LIST_CHANGES: GOOGLEDRIVE_LIST_CHANGES_INPUT
  LIST_COMMENTS: GOOGLEDRIVE_LIST_COMMENTS_INPUT
  LIST_FILES: GOOGLEDRIVE_LIST_FILES_INPUT
  LIST_FILE_LABELS: GOOGLEDRIVE_LIST_FILE_LABELS_INPUT
  LIST_PERMISSIONS: GOOGLEDRIVE_LIST_PERMISSIONS_INPUT
  LIST_REPLIES_TO_COMMENT: GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT_INPUT
  LIST_REVISIONS: GOOGLEDRIVE_LIST_REVISIONS_INPUT
  LIST_SHARED_DRIVES: GOOGLEDRIVE_LIST_SHARED_DRIVES_INPUT
  MOVE_FILE: GOOGLEDRIVE_MOVE_FILE_INPUT
  PARSE_FILE: GOOGLEDRIVE_PARSE_FILE_INPUT
  STOP_WATCH_CHANNEL: GOOGLEDRIVE_STOP_WATCH_CHANNEL_INPUT
  UNHIDE_DRIVE: GOOGLEDRIVE_UNHIDE_DRIVE_INPUT
  UNTRASH_FILE: GOOGLEDRIVE_UNTRASH_FILE_INPUT
  UPDATE_COMMENT: GOOGLEDRIVE_UPDATE_COMMENT_INPUT
  UPDATE_DRIVE: GOOGLEDRIVE_UPDATE_DRIVE_INPUT
  UPDATE_FILE_PUT: GOOGLEDRIVE_UPDATE_FILE_PUT_INPUT
  UPDATE_FILE_REVISION_METADATA: GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA_INPUT
  UPDATE_PERMISSION: GOOGLEDRIVE_UPDATE_PERMISSION_INPUT
  UPDATE_REPLY: GOOGLEDRIVE_UPDATE_REPLY_INPUT
  UPLOAD_FILE: GOOGLEDRIVE_UPLOAD_FILE_INPUT
  WATCH_CHANGES: GOOGLEDRIVE_WATCH_CHANGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLEDRIVE".
 */
export type GOOGLEDRIVE_TOOL_OUTPUTS = {
  ADD_FILE_SHARING_PREFERENCE: GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE_OUTPUT
  COPY_FILE: GOOGLEDRIVE_COPY_FILE_OUTPUT
  CREATE_COMMENT: GOOGLEDRIVE_CREATE_COMMENT_OUTPUT
  CREATE_DRIVE: GOOGLEDRIVE_CREATE_DRIVE_OUTPUT
  CREATE_FILE: GOOGLEDRIVE_CREATE_FILE_OUTPUT
  CREATE_FILE_FROM_TEXT: GOOGLEDRIVE_CREATE_FILE_FROM_TEXT_OUTPUT
  CREATE_FOLDER: GOOGLEDRIVE_CREATE_FOLDER_OUTPUT
  CREATE_REPLY: GOOGLEDRIVE_CREATE_REPLY_OUTPUT
  CREATE_SHORTCUT_TO_FILE: GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE_OUTPUT
  DELETE_COMMENT: GOOGLEDRIVE_DELETE_COMMENT_OUTPUT
  DELETE_DRIVE: GOOGLEDRIVE_DELETE_DRIVE_OUTPUT
  DELETE_PERMISSION: GOOGLEDRIVE_DELETE_PERMISSION_OUTPUT
  DELETE_REPLY: GOOGLEDRIVE_DELETE_REPLY_OUTPUT
  DOWNLOAD_FILE: GOOGLEDRIVE_DOWNLOAD_FILE_OUTPUT
  EDIT_FILE: GOOGLEDRIVE_EDIT_FILE_OUTPUT
  EMPTY_TRASH: GOOGLEDRIVE_EMPTY_TRASH_OUTPUT
  FILES_MODIFY_LABELS: GOOGLEDRIVE_FILES_MODIFY_LABELS_OUTPUT
  FIND_FILE: GOOGLEDRIVE_FIND_FILE_OUTPUT
  FIND_FOLDER: GOOGLEDRIVE_FIND_FOLDER_OUTPUT
  GENERATE_IDS: GOOGLEDRIVE_GENERATE_IDS_OUTPUT
  GET_ABOUT: GOOGLEDRIVE_GET_ABOUT_OUTPUT
  GET_CHANGES_START_PAGE_TOKEN: GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN_OUTPUT
  GET_COMMENT: GOOGLEDRIVE_GET_COMMENT_OUTPUT
  GET_DRIVE: GOOGLEDRIVE_GET_DRIVE_OUTPUT
  GET_FILE_METADATA: GOOGLEDRIVE_GET_FILE_METADATA_OUTPUT
  GET_PERMISSION: GOOGLEDRIVE_GET_PERMISSION_OUTPUT
  GET_REPLY: GOOGLEDRIVE_GET_REPLY_OUTPUT
  GET_REVISION: GOOGLEDRIVE_GET_REVISION_OUTPUT
  GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION: GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION_OUTPUT
  HIDE_DRIVE: GOOGLEDRIVE_HIDE_DRIVE_OUTPUT
  LIST_CHANGES: GOOGLEDRIVE_LIST_CHANGES_OUTPUT
  LIST_COMMENTS: GOOGLEDRIVE_LIST_COMMENTS_OUTPUT
  LIST_FILES: GOOGLEDRIVE_LIST_FILES_OUTPUT
  LIST_FILE_LABELS: GOOGLEDRIVE_LIST_FILE_LABELS_OUTPUT
  LIST_PERMISSIONS: GOOGLEDRIVE_LIST_PERMISSIONS_OUTPUT
  LIST_REPLIES_TO_COMMENT: GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT_OUTPUT
  LIST_REVISIONS: GOOGLEDRIVE_LIST_REVISIONS_OUTPUT
  LIST_SHARED_DRIVES: GOOGLEDRIVE_LIST_SHARED_DRIVES_OUTPUT
  MOVE_FILE: GOOGLEDRIVE_MOVE_FILE_OUTPUT
  PARSE_FILE: GOOGLEDRIVE_PARSE_FILE_OUTPUT
  STOP_WATCH_CHANNEL: GOOGLEDRIVE_STOP_WATCH_CHANNEL_OUTPUT
  UNHIDE_DRIVE: GOOGLEDRIVE_UNHIDE_DRIVE_OUTPUT
  UNTRASH_FILE: GOOGLEDRIVE_UNTRASH_FILE_OUTPUT
  UPDATE_COMMENT: GOOGLEDRIVE_UPDATE_COMMENT_OUTPUT
  UPDATE_DRIVE: GOOGLEDRIVE_UPDATE_DRIVE_OUTPUT
  UPDATE_FILE_PUT: GOOGLEDRIVE_UPDATE_FILE_PUT_OUTPUT
  UPDATE_FILE_REVISION_METADATA: GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA_OUTPUT
  UPDATE_PERMISSION: GOOGLEDRIVE_UPDATE_PERMISSION_OUTPUT
  UPDATE_REPLY: GOOGLEDRIVE_UPDATE_REPLY_OUTPUT
  UPLOAD_FILE: GOOGLEDRIVE_UPLOAD_FILE_OUTPUT
  WATCH_CHANGES: GOOGLEDRIVE_WATCH_CHANGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GOOGLEDRIVE's GOOGLE_DRIVE_CHANGES trigger payload.
 */
type GOOGLEDRIVE_GOOGLE_DRIVE_CHANGES_PAYLOAD = object;

/**
 * Map of Composio's GOOGLEDRIVE toolkit.
 */
export const GOOGLEDRIVE = {
  slug: "googledrive",
  tools: {
    /**
     * Modifies sharing permissions for an existing google drive file, granting a specified role to a user, group, domain, or 'anyone'.
     */
    ADD_FILE_SHARING_PREFERENCE: "GOOGLEDRIVE_ADD_FILE_SHARING_PREFERENCE",
    /**
     * Duplicates an existing file in google drive, identified by its `file id`.
     */
    COPY_FILE: "GOOGLEDRIVE_COPY_FILE",
    /**
     * Tool to create a comment on a file. use when you need to add a new comment to a specific file in google drive.
     */
    CREATE_COMMENT: "GOOGLEDRIVE_CREATE_COMMENT",
    /**
     * Tool to create a new shared drive. use when you need to programmatically create a new shared drive for collaboration or storage.
     */
    CREATE_DRIVE: "GOOGLEDRIVE_CREATE_DRIVE",
    /**
     * Creates a new file or folder with metadata. use to create empty files or folders, or files with content by providing it in the request body (though this action primarily focuses on metadata creation).
     */
    CREATE_FILE: "GOOGLEDRIVE_CREATE_FILE",
    /**
     * Creates a new file in google drive from provided text content (up to 10mb), supporting various formats including automatic conversion to google workspace types.
     */
    CREATE_FILE_FROM_TEXT: "GOOGLEDRIVE_CREATE_FILE_FROM_TEXT",
    /**
     * Creates a new folder in google drive, optionally within a parent folder specified by its id or name; if a parent name is provided but not found, the action will fail.
     */
    CREATE_FOLDER: "GOOGLEDRIVE_CREATE_FOLDER",
    /**
     * Tool to create a reply to a comment in google drive. use when you need to respond to an existing comment on a file.
     */
    CREATE_REPLY: "GOOGLEDRIVE_CREATE_REPLY",
    /**
     * Tool to create a shortcut to a file or folder in google drive. use when you need to link to an existing drive item from another location without duplicating it.
     */
    CREATE_SHORTCUT_TO_FILE: "GOOGLEDRIVE_CREATE_SHORTCUT_TO_FILE",
    /**
     * Deletes a comment from a file. use when you need to remove a specific comment from a google drive file.
     */
    DELETE_COMMENT: "GOOGLEDRIVE_DELETE_COMMENT",
    /**
     * Tool to permanently delete a shared drive. use when you need to remove a shared drive and its contents (if specified).
     */
    DELETE_DRIVE: "GOOGLEDRIVE_DELETE_DRIVE",
    /**
     * Deletes a permission from a file by permission id. use when you need to revoke access for a specific user or group from a file.
     */
    DELETE_PERMISSION: "GOOGLEDRIVE_DELETE_PERMISSION",
    /**
     * Tool to delete a specific reply by reply id. use when you need to remove a reply from a comment on a file.
     */
    DELETE_REPLY: "GOOGLEDRIVE_DELETE_REPLY",
    /**
     * Downloads a file from google drive by its id. for google workspace documents (docs, sheets, slides), optionally exports to a specified `mime type`. for other file types, downloads in their native format regardless of mime type.
     */
    DOWNLOAD_FILE: "GOOGLEDRIVE_DOWNLOAD_FILE",
    /**
     * Updates an existing google drive file by overwriting its entire content with new text (max 10mb).
     */
    EDIT_FILE: "GOOGLEDRIVE_EDIT_FILE",
    /**
     * Tool to permanently delete all of the user's trashed files. use when you want to empty the trash in google drive.
     */
    EMPTY_TRASH: "GOOGLEDRIVE_EMPTY_TRASH",
    /**
     * Modifies the set of labels applied to a file. returns a list of the labels that were added or modified. use when you need to programmatically change labels on a google drive file, such as adding, updating, or removing them.
     */
    FILES_MODIFY_LABELS: "GOOGLEDRIVE_FILES_MODIFY_LABELS",
    /**
     * Tool to list or search for files and folders in google drive. use when you need to find specific files based on query criteria or list contents of a drive/folder.
     */
    FIND_FILE: "GOOGLEDRIVE_FIND_FILE",
    /**
     * Tool to find a folder in google drive by its name and optionally a parent folder. use when you need to locate a specific folder to perform further actions like creating files in it or listing its contents.
     */
    FIND_FOLDER: "GOOGLEDRIVE_FIND_FOLDER",
    /**
     * Generates a set of file ids which can be provided in create or copy requests. use when you need to pre-allocate ids for new files or copies.
     */
    GENERATE_IDS: "GOOGLEDRIVE_GENERATE_IDS",
    /**
     * Tool to retrieve information about the user, the user's drive, and system capabilities. use when you need to check storage quotas, user details, or supported import/export formats.
     */
    GET_ABOUT: "GOOGLEDRIVE_GET_ABOUT",
    /**
     * Tool to get the starting pagetoken for listing future changes in google drive. use this when you need to track changes to files and folders.
     */
    GET_CHANGES_START_PAGE_TOKEN: "GOOGLEDRIVE_GET_CHANGES_START_PAGE_TOKEN",
    /**
     * Tool to get a comment by id. use when you need to retrieve a specific comment from a google drive file and have both the file id and comment id.
     */
    GET_COMMENT: "GOOGLEDRIVE_GET_COMMENT",
    /**
     * Tool to get a shared drive by id. use when you need to retrieve information about a specific shared drive.
     */
    GET_DRIVE: "GOOGLEDRIVE_GET_DRIVE",
    /**
     * Tool to get a file's metadata by id. use when you need to retrieve the metadata for a specific file in google drive.
     */
    GET_FILE_METADATA: "GOOGLEDRIVE_GET_FILE_METADATA",
    /**
     * Gets a permission by id. use this tool to retrieve a specific permission for a file or shared drive.
     */
    GET_PERMISSION: "GOOGLEDRIVE_GET_PERMISSION",
    /**
     * Tool to get a specific reply to a comment on a file. use when you need to retrieve the details of a particular reply.
     */
    GET_REPLY: "GOOGLEDRIVE_GET_REPLY",
    /**
     * Tool to get a specific revision's metadata by revision id. use when you need to retrieve information about a particular version of a file.
     */
    GET_REVISION: "GOOGLEDRIVE_GET_REVISION",
    /**
     * Tool to delete a file or folder in google drive. use when you need to permanently remove a specific file or folder using its id. note: this action is irreversible.
     */
    GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION: "GOOGLEDRIVE_GOOGLE_DRIVE_DELETE_FOLDER_OR_FILE_ACTION",
    /**
     * Tool to hide a shared drive from the default view. use when you want to remove a shared drive from the user's main google drive interface without deleting it.
     */
    HIDE_DRIVE: "GOOGLEDRIVE_HIDE_DRIVE",
    /**
     * Tool to list the changes for a user or shared drive. use when you need to track modifications to files and folders, such as creations, deletions, or permission changes. this action requires a `pagetoken` which can be initially obtained using the `get changes start page token` action or from a previous `list changes` response.
     */
    LIST_CHANGES: "GOOGLEDRIVE_LIST_CHANGES",
    /**
     * Tool to list all comments for a file in google drive. use when you need to retrieve comments associated with a specific file.
     */
    LIST_COMMENTS: "GOOGLEDRIVE_LIST_COMMENTS",
    /**
     * Tool to list a user's files and folders in google drive. use this to search or browse for files and folders based on various criteria.
     */
    LIST_FILES: "GOOGLEDRIVE_LIST_FILES",
    /**
     * Tool to list the labels on a file. use when you need to retrieve all labels associated with a specific file in google drive.
     */
    LIST_FILE_LABELS: "GOOGLEDRIVE_LIST_FILE_LABELS",
    /**
     * Tool to list a file's permissions. use when you need to retrieve all permissions associated with a specific file or shared drive.
     */
    LIST_PERMISSIONS: "GOOGLEDRIVE_LIST_PERMISSIONS",
    /**
     * Tool to list replies to a comment in google drive. use this when you need to retrieve all replies associated with a specific comment on a file.
     */
    LIST_REPLIES_TO_COMMENT: "GOOGLEDRIVE_LIST_REPLIES_TO_COMMENT",
    /**
     * Tool to list a file's revisions. use when you need to retrieve the revision history of a specific file in google drive.
     */
    LIST_REVISIONS: "GOOGLEDRIVE_LIST_REVISIONS",
    /**
     * Tool to list the user's shared drives. use when you need to get a list of all shared drives accessible to the authenticated user.
     */
    LIST_SHARED_DRIVES: "GOOGLEDRIVE_LIST_SHARED_DRIVES",
    /**
     * Tool to move a file from one folder to another in google drive. use when you need to reorganize files by changing their parent folder(s).
     */
    MOVE_FILE: "GOOGLEDRIVE_MOVE_FILE",
    /**
     * Deprecated: exports google workspace files (max 10mb) to a specified format using `mime type`, or downloads other file types; use `googledrive download file` instead.
     */
    PARSE_FILE: "GOOGLEDRIVE_PARSE_FILE",
    /**
     * Tool to stop watching resources through a specified channel. use this when you want to stop receiving notifications for a previously established watch.
     */
    STOP_WATCH_CHANNEL: "GOOGLEDRIVE_STOP_WATCH_CHANNEL",
    /**
     * Tool to unhide a shared drive. use when you need to restore a shared drive to the default view.
     */
    UNHIDE_DRIVE: "GOOGLEDRIVE_UNHIDE_DRIVE",
    /**
     * Tool to restore a file from the trash. use when you need to recover a deleted file. this action updates the file's metadata to set the 'trashed' property to false.
     */
    UNTRASH_FILE: "GOOGLEDRIVE_UNTRASH_FILE",
    /**
     * Tool to update an existing comment on a google drive file. use when you need to change the content or status (e.g., resolve) of a comment.
     */
    UPDATE_COMMENT: "GOOGLEDRIVE_UPDATE_COMMENT",
    /**
     * Tool to update the metadata for a shared drive. use when you need to modify properties like the name, theme, background image, or restrictions of a shared drive.
     */
    UPDATE_DRIVE: "GOOGLEDRIVE_UPDATE_DRIVE",
    /**
     * Updates file metadata. uses patch semantics (partial update) as per google drive api v3. use this tool to modify attributes of an existing file like its name, description, or parent folders. note: this action currently supports metadata updates only. file content updates require multipart/related upload and are not yet implemented.
     */
    UPDATE_FILE_PUT: "GOOGLEDRIVE_UPDATE_FILE_PUT",
    /**
     * Updates metadata of a file revision (e.g., keepforever, publish). use this tool to modify the metadata of a specific revision of a file in google drive.
     */
    UPDATE_FILE_REVISION_METADATA: "GOOGLEDRIVE_UPDATE_FILE_REVISION_METADATA",
    /**
     * Tool to update a permission with patch semantics. use when you need to modify an existing permission for a file or shared drive.
     */
    UPDATE_PERMISSION: "GOOGLEDRIVE_UPDATE_PERMISSION",
    /**
     * Tool to update a reply to a comment on a google drive file. use when you need to modify the content of an existing reply.
     */
    UPDATE_REPLY: "GOOGLEDRIVE_UPDATE_REPLY",
    /**
     * Uploads a file (max 5mb) to google drive, moving it to a specified folder if a valid folder id is provided, otherwise uploads to root.
     */
    UPLOAD_FILE: "GOOGLEDRIVE_UPLOAD_FILE",
    /**
     * Tool to subscribe to changes for a user or shared drive in google drive. use when you need to monitor a google drive for modifications and receive notifications at a specified webhook url.
     */
    WATCH_CHANGES: "GOOGLEDRIVE_WATCH_CHANGES",
  },
  triggerTypes: {
    /**
     * Triggers when changes are detected in a Google Drive.
     */
    GOOGLE_DRIVE_CHANGES: "GOOGLEDRIVE_GOOGLE_DRIVE_CHANGES",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLEDRIVE".
 */
export type GOOGLEDRIVE_TRIGGER_PAYLOADS = {
  GOOGLE_DRIVE_CHANGES: GOOGLEDRIVE_GOOGLE_DRIVE_CHANGES_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GOOGLEDRIVE".
 */
export type GOOGLEDRIVE_TRIGGER_EVENTS = {
  GOOGLE_DRIVE_CHANGES: TriggerEvent<GOOGLEDRIVE_GOOGLE_DRIVE_CHANGES_PAYLOAD>
}
