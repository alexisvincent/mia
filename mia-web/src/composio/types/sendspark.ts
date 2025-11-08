// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDSPARK's SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN tool input.
 */
type SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN_INPUT = {
  /**
   * Dynamics Id
   * @description Dynamic campaign identifier
   */
  dynamicsId?: string;
  /**
   * Process And Authorize Charge
   * @description Must be true to confirm usage-based charges
   */
  processAndAuthorizeCharge?: boolean;
  /**
   * ProspectDepurationConfig
   * @description Configuration for prospect deduplication
   * @default null
   */
  prospectDepurationConfig: {
      /**
       * Force Creation
       * @description Create new prospect even if one exists
       * @default null
       */
      forceCreation: boolean | null;
      /**
       * Payload Depuration Strategy
       * @description Depuration strategy
       * @default null
       * @enum {string|null}
       */
      payloadDepurationStrategy: "keep-first-valid" | "keep-last-valid" | null;
  } | null;
  /**
   * Prospect List
   * @description List of prospects to add
   */
  prospectList?: {
      /**
       * Background Url
       * Format: uri
       * @description Background image URL
       * @default null
       */
      backgroundUrl: string | null;
      /**
       * Company
       * @description Prospect's company
       * @default null
       */
      company: string | null;
      /**
       * Contact Email
       * Format: email
       * @description Prospect's email address
       */
      contactEmail: string;
      /**
       * Contact Name
       * @description Prospect's name
       */
      contactName: string;
      /**
       * Job Title
       * @description Prospect's job title
       * @default null
       */
      jobTitle: string | null;
      /**
       * Screenshot Url
       * Format: uri
       * @description Screenshot image URL
       * @default null
       */
      screenshotUrl: string | null;
  }[];
  /**
   * Workspace Id
   * @description Workspace identifier
   */
  workspaceId?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN tool output.
 */
type SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Campaign ID
       */
      _id: string;
      /**
       * Combined Video
       * @description Whether videos are combined
       */
      combinedVideo: boolean;
      /**
       * Created At
       * @description Creation timestamp
       */
      createdAt: string;
      /**
       * Creator
       * @description Creator ID
       */
      creator: string;
      /**
       * Deleted At
       * @description Deletion timestamp
       * @default null
       */
      deletedAt: string | null;
      /**
       * Dynamic Background
       * @description Whether dynamic background is used
       */
      dynamicBackground: boolean;
      /**
       * Folder
       * @description Folder ID
       */
      folder: string;
      /**
       * Metadata
       * @description Campaign metadata
       */
      metadata: {
          /**
           * Version
           * @description Metadata version
           */
          version: number;
      };
      /**
       * Name
       * @description Name of the dynamic campaign
       */
      name: string;
      /**
       * Prospect List
       * @description List of prospect responses
       */
      prospectList: {
          /**  Id */
          _id: string;
          /**
           * Background Url
           * @description Background image URL
           * @default null
           */
          backgroundUrl: string | null;
          /**
           * Bulk Id
           * @description Bulk request ID
           */
          bulkId: string;
          /**
           * Campaign
           * @description Campaign ID
           */
          campaign: string;
          /**
           * Company
           * @description Prospect's company
           * @default null
           */
          company: string | null;
          /**
           * Contact Email
           * Format: email
           */
          contactEmail: string;
          /** Contact Name */
          contactName: string;
          /**
           * Created At
           * @description Creation timestamp
           */
          createdAt: string;
          /**
           * Deleted At
           * @description Deletion timestamp
           * @default null
           */
          deletedAt: string | null;
          /**
           * Job Title
           * @description Prospect's job title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Screenshot Url
           * @description Screenshot image URL
           * @default null
           */
          screenshotUrl: string | null;
          /**
           * Status
           * @description Processing status
           */
          status: string;
          /**
           * Updated At
           * @description Last updated timestamp
           */
          updatedAt: string;
          /**
           * Valid
           * @description Whether the prospect is valid
           */
          valid: boolean;
          /**
           * Validation Details
           * @description Details about validation errors
           * @default null
           */
          validationDetails: string | null;
          /**
           * Webhook Events
           * @description Subscribed webhook events
           */
          webhookEvents: string[];
          /**
           * Webhook Url
           * @description Webhook URL for events
           * @default null
           */
          webhookUrl: string | null;
      }[];
      /**
       * Status
       * @description Campaign status
       */
      status: string;
      /** Video Properties */
      videoProperties: {
          /** Share Page */
          sharePage: {
              /**
               * Buttons
               * @description List of share page buttons
               */
              buttons: {
                  /**
                   * Label
                   * @description Button label
                   */
                  label: string;
                  /**
                   * Link
                   * @description Button link URL
                   */
                  link: string;
                  /**
                   * Position
                   * @description Button position
                   */
                  position: number;
              }[];
              /**
               * Message
               * @description Share page message
               */
              message: string;
              /**
               * Title
               * @description Share page title
               */
              title: string;
          };
      };
      /**
       * Videos Assets
       * @description List of video asset URLs
       */
      videosAssets: string[];
      /**
       * Workspace
       * @description Workspace ID
       */
      workspace: string;
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
 * Type of SENDSPARK's SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN tool input.
 */
type SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN_INPUT = {
  /**
   * Dynamic Id
   * @description Identifier of the dynamic video campaign.
   */
  dynamicId?: string;
  /**
   * Process And Authorize Charge
   * @description Must be true to acknowledge and authorize any associated charges.
   */
  processAndAuthorizeCharge?: boolean;
  /**
   * Prospect
   * @description The prospect data to add to the dynamic video campaign.
   */
  prospect?: {
      /**
       * Background Url
       * @description URL of the background image to use in the video.
       * @default null
       */
      backgroundUrl: string | null;
      /**
       * Company
       * @description Company name of the prospect.
       * @default null
       */
      company: string | null;
      /**
       * Contact Email
       * @description Valid email address of the prospect.
       */
      contactEmail: string;
      /**
       * Contact Name
       * @description Full name of the prospect.
       */
      contactName: string;
      /**
       * Job Title
       * @description Job title of the prospect.
       * @default null
       */
      jobTitle: string | null;
  };
  /**
   * ProspectDepurationConfig
   * @description Optional deduplication settings for prospect creation.
   * @default null
   */
  prospectDepurationConfig: {
      /**
       * Force Creation
       * @description If true, create the prospect even if one with the same email already exists.
       * @default false
       */
      forceCreation: boolean;
      /**
       * Payload Depuration Strategy
       * @description Strategy to resolve duplicates: 'keep-first-valid' or 'keep-last-valid'.
       * @enum {string}
       */
      payloadDepurationStrategy: "keep-first-valid" | "keep-last-valid";
  } | null;
  /**
   * Workspace Id
   * @description Workspace identifier under which the campaign resides.
   */
  workspaceId?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN tool output.
 */
type SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Prospect List
       * @description List of prospect items and their processing status.
       */
      prospectList: {
          /**
           *  Id
           * @description Unique prospect identifier.
           */
          _id: string;
          /**
           * Background Url
           * @description Background image URL.
           * @default null
           */
          backgroundUrl: string | null;
          /**
           * Bulk Id
           * @description Bulk operation identifier.
           * @default null
           */
          bulkId: string | null;
          /**
           * Campaign
           * @description Campaign identifier.
           */
          campaign: string;
          /**
           * Company
           * @description Company of the prospect.
           * @default null
           */
          company: string | null;
          /**
           * Contact Email
           * @description Email of the prospect.
           */
          contactEmail: string;
          /**
           * Contact Name
           * @description Name of the prospect.
           */
          contactName: string;
          /**
           * Created At
           * @description ISO timestamp when created.
           */
          createdAt: string;
          /**
           * Deleted At
           * @description ISO timestamp when deleted, if applicable.
           * @default null
           */
          deletedAt: string | null;
          /**
           * Job Title
           * @description Job title of the prospect.
           * @default null
           */
          jobTitle: string | null;
          /**
           * Screenshot Url
           * @description Screenshot URL for the video.
           * @default null
           */
          screenshotUrl: string | null;
          /**
           * Status
           * @description Processing status of the prospect.
           */
          status: string;
          /**
           * Updated At
           * @description ISO timestamp when last updated.
           */
          updatedAt: string;
          /**
           * Valid
           * @description Whether the prospect data was validated.
           */
          valid: boolean;
          /**
           * Validation Details
           * @description Details on validation errors, if any.
           * @default null
           */
          validationDetails: string | null;
          /**
           * Webhook Events
           * @description List of webhook event names subscribed.
           */
          webhookEvents: string[];
          /**
           * Webhook Url
           * @description Webhook callback URL.
           * @default null
           */
          webhookUrl: string | null;
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
 * Type of SENDSPARK's SENDSPARK_API_HEALTH_STATUS tool input.
 */
type SENDSPARK_API_HEALTH_STATUS_INPUT = object;

/**
 * Type of SENDSPARK's SENDSPARK_API_HEALTH_STATUS tool output.
 */
type SENDSPARK_API_HEALTH_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Health message returned by the API, e.g., "everything is ok!"
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
 * Type of SENDSPARK's SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN tool input.
 */
type SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN_INPUT = {
  /**
   * Name
   * @description Name of the dynamic video campaign. Must be unique within the workspace
   */
  name?: string;
  /**
   * Workspace Id
   * @description ID of the workspace in which to create the campaign
   */
  workspaceId?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN tool output.
 */
type SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response wrapper containing campaign data
       */
      response: {
          /**
           * Data
           * @description List of created dynamic campaign objects
           */
          data: {
              /**
               *  Id
               * @description Unique campaign identifier
               */
              _id: string;
              /**
               * Combined Video
               * @description URL of combined video, if generated
               * @default null
               */
              combinedVideo: string | null;
              /**
               * Created At
               * @description ISO timestamp when campaign was created
               */
              createdAt: string;
              /**
               * Creator
               * @description Information about the campaign creator
               */
              creator: {
                  /**
                   *  Id
                   * @description User ID of the creator
                   */
                  _id: string;
                  /**
                   * Email
                   * @description Email of the creator
                   */
                  email: string;
                  /**
                   * Last Name
                   * @description Last name of the creator
                   */
                  lastName: string;
                  /**
                   * Name
                   * @description First name of the creator
                   */
                  name: string;
              };
              /**
               * Dynamic Background
               * @description URL of dynamic background image
               * @default null
               */
              dynamicBackground: string | null;
              /**
               * Folder
               * @description Associated folder ID, if any
               * @default null
               */
              folder: string | null;
              /**
               * Metadata
               * @description Additional metadata
               * @default null
               */
              metadata: {
                  /**
                   * Version
                   * @description Internal version metadata
                   * @default null
                   */
                  version: string | null;
              } | null;
              /**
               * Name
               * @description Campaign name
               */
              name: string;
              /**
               * Status
               * @description Current status of the dynamic campaign
               * @default null
               */
              status: string | null;
              /**
               * VideoProperties
               * @description Video share properties
               * @default null
               */
              videoProperties: {
                  /**
                   * SharePage
                   * @description Properties for the share page of the video
                   * @default null
                   */
                  sharePage: {
                      /**
                       * Buttons
                       * @description Buttons displayed on share page
                       * @default null
                       */
                      buttons: {
                          /**
                           * Label
                           * @description Button label text
                           */
                          label: string;
                          /**
                           * Link
                           * @description Button target URL
                           */
                          link: string;
                          /**
                           * Position
                           * @description Position of the button on share page
                           */
                          position: number;
                      }[] | null;
                      /**
                       * Message
                       * @description Message shown on share page
                       * @default null
                       */
                      message: string | null;
                      /**
                       * Title
                       * @description Title shown on share page
                       * @default null
                       */
                      title: string | null;
                  } | null;
              } | null;
              /**
               * Videos Assets
               * @description List of video assets in campaign
               */
              videosAssets: {
                  /**
                   *  Id
                   * @description Asset ID
                   */
                  _id: string;
                  /**
                   * Asset Id
                   * @description Original asset identifier
                   */
                  assetId: string;
                  /**
                   * Asset Url
                   * @description Resolved asset URL
                   */
                  assetUrl: string;
                  /**
                   * Duration
                   * @description Duration of the asset in seconds
                   */
                  duration: number;
                  /**
                   * Provider
                   * @description Asset provider
                   */
                  provider: string;
                  /**
                   * Url
                   * @description Asset URL
                   */
                  url: string;
              }[];
              /**
               * Workspace
               * @description Associated workspace ID
               * @default null
               */
              workspace: string | null;
          }[];
          /**
           * Links
           * @description Pagination links
           * @default null
           */
          links: {
              /**
               * LinksNext
               * @description Link to next page of results
               * @default null
               */
              next: {
                  /**
                   * Limit
                   * @description Limit for next page request
                   */
                  limit: number;
                  /**
                   * Offset
                   * @description Next offset for pagination
                   */
                  offset: number;
              } | null;
          } | null;
          /**
           * Pagination
           * @description Pagination info
           * @default null
           */
          pagination: {
              /**
               * Limit
               * @description Maximum number of results returned
               */
              limit: number;
              /**
               * Offset
               * @description Result offset
               */
              offset: number;
              /**
               * Total
               * @description Total number of results available
               */
              total: number;
          } | null;
      };
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      statusCode: number;
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
 * Type of SENDSPARK's SENDSPARK_DELETE_WEBHOOK tool input.
 */
type SENDSPARK_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhook_id?: string;
  /**
   * Workspace Id
   * @description Workspace unique identifier. When provided, the deletion will use the v1 workspace-scoped endpoint: /v1/workspaces/{workspaceId}/webhooks/{webhook_id}.
   * @default null
   */
  workspaceId: string | null;
};

/**
 * Type of SENDSPARK's SENDSPARK_DELETE_WEBHOOK tool output.
 */
type SENDSPARK_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API upon deletion.
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the delete request.
       */
      statusCode: number;
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
 * Type of SENDSPARK's SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL tool input.
 */
type SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL_INPUT = {
  /**
   * Dynamic Id
   * @description Dynamic campaign ID
   */
  dynamic_id?: string;
  /**
   * Email
   * @description Prospect's email address
   */
  email?: string;
  /**
   * Workspace Id
   * @description SendSpark workspace ID
   */
  workspace_id?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL tool output.
 */
type SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background Url
       * @description Background URL
       * @default null
       */
      backgroundUrl: string | null;
      /**
       * Company
       * @description Company name
       * @default null
       */
      company: string | null;
      /**
       * Contact Email
       * @description Contact email
       */
      contactEmail: string;
      /**
       * Contact Name
       * @description Contact name
       * @default null
       */
      contactName: string | null;
      /**
       * Created At
       * @description Creation timestamp
       */
      createdAt: string;
      /**
       * Deleted At
       * @description Deletion timestamp if deleted
       * @default null
       */
      deletedAt: string | null;
      /**
       * Id
       * @description Internal prospect ID
       */
      id: string;
      /**
       * Job Title
       * @description Job title
       * @default null
       */
      jobTitle: string | null;
      /**
       * Share Url
       * @description Public share URL of the video
       * @default null
       */
      shareUrl: string | null;
      /**
       * Status
       * @description Prospect status
       * @enum {string}
       */
      status: "saved" | "billed" | "errored" | "processing" | "uploaded" | "completed";
      /**
       * Updated At
       * @description Last update timestamp
       */
      updatedAt: string;
      /**
       * Valid
       * @description Whether prospect data passed validation
       */
      valid: boolean;
      /**
       * Validation Details
       * @description List of validation error details
       * @default null
       */
      validationDetails: {
          /**
           * Validation Field
           * @description Field that failed validation
           */
          validationField: string;
          /**
           * Validation Message
           * @description Validation error message
           */
          validationMessage: string;
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
 * Type of SENDSPARK's SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID tool input.
 */
type SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID_INPUT = {
  /**
   * Dynamic Id
   * @description ID of the dynamic campaign to retrieve
   */
  dynamic_id?: string;
  /**
   * Workspace Id
   * @description ID of the workspace containing the dynamic campaign
   */
  workspace_id?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID tool output.
 */
type SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Campaign unique ID
       */
      _id: string;
      /**
       * Combined Video
       * @description True if combined video is used
       */
      combinedVideo: boolean;
      /**
       * Created At
       * @description ISO timestamp of creation
       */
      createdAt: string;
      /** Creator */
      creator: {
          /**
           *  Id
           * @description Creator user ID
           */
          _id: string;
          /**
           * Email
           * @description Creator email address
           * @default null
           */
          email: string | null;
          /**
           * Name
           * @description Full name of the creator
           */
          name: string;
      };
      /**
       * Dynamic Background
       * @description True if background is dynamic
       */
      dynamicBackground: boolean;
      /** Features */
      features: {
          /**
           * Screenshot
           * @description Whether screenshots are enabled
           */
          screenshot: boolean;
          /**
           * Transcription
           * @description Whether transcription is enabled
           */
          transcription: boolean;
          /**
           * Video Settings
           * @description Whether custom video settings exist
           */
          videoSettings: boolean;
          /**
           * Voice Cloning
           * @description Whether voice cloning is enabled
           */
          voiceCloning: boolean;
      };
      /**
       * Folder
       * @description Folder ID where campaign is stored
       */
      folder: string;
      /** Metadata */
      metadata: {
          /**
           * Version
           * @description Internal version tag
           * @default null
           */
          version: string | null;
      };
      /**
       * Name
       * @description Human-readable campaign name
       */
      name: string;
      /**
       * Status
       * @description Current campaign status
       */
      status: string;
      /** Video Properties */
      videoProperties: {
          /**
           * Share Page
           * @description Settings for how video is shared
           */
          sharePage: {
              /**
               * Buttons
               * @description Configuration of any share buttons
               */
              buttons: {
                  [key: string]: unknown;
              }[];
              /**
               * Calendar
               * @description Calendar settings for the share page
               */
              calendar: {
                  [key: string]: unknown;
              };
              /**
               * Title
               * @description Title shown on the share page
               */
              title: string;
          };
      };
      /** Videos Assets */
      videosAssets: {
          /**
           *  Id
           * @description Asset unique identifier
           */
          _id: string;
          /**
           * Asset Id
           * @description Provider-specific asset ID
           */
          assetId: string;
          /**
           * Asset Url
           * @description Alternate URL for the asset
           */
          assetUrl: string;
          /**
           * Duration
           * @description Asset duration in seconds
           */
          duration: number;
          /**
           * Provider
           * @description Asset provider name
           */
          provider: string;
          /**
           * Url
           * @description Publicly accessible asset URL
           */
          url: string;
      }[];
      /**
       * Workspace
       * @description Workspace ID
       */
      workspace: string;
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
 * Type of SENDSPARK's SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL tool input.
 */
type SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL_INPUT = {
  /**
   * Dynamic Id
   * @description Dynamic campaign identifier
   */
  dynamic_id?: string;
  /**
   * Email
   * Format: email
   * @description Prospect email address to retrieve data for
   */
  email?: unknown;
  /**
   * Workspace Id
   * @description Sendspark workspace identifier
   */
  workspace_id?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL tool output.
 */
type SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Background Url
       * @description Background URL used for the video
       */
      backgroundUrl: string;
      /**
       * Company
       * @description Company of the prospect
       * @default null
       */
      company: string | null;
      /**
       * Contact Email
       * @description Prospect’s email address
       */
      contactEmail: string;
      /**
       * Contact Name
       * @description Name of the prospect
       * @default null
       */
      contactName: string | null;
      /**
       * Created At
       * @description ISO timestamp when prospect was created
       */
      createdAt: string;
      /**
       * Deleted At
       * @description ISO timestamp when the prospect was deleted, if applicable
       * @default null
       */
      deletedAt: string | null;
      /**
       * Id
       * @description Internal prospect identifier
       */
      id: string;
      /**
       * Job Title
       * @description Job title of the prospect
       * @default null
       */
      jobTitle: string | null;
      /**
       * Share Url
       * @description Public share URL for the final video
       */
      shareUrl: string;
      /**
       * Status
       * @description Current status of the prospect data processing
       * @enum {string}
       */
      status: "saved" | "billed" | "errored" | "processing" | "uploaded" | "completed";
      /**
       * Updated At
       * @description ISO timestamp when prospect was last updated
       */
      updatedAt: string;
      /**
       * Valid
       * @description Whether the prospect data passed validation
       */
      valid: boolean;
      /**
       * Validation Details
       * @description List of validation error details, if any
       */
      validationDetails?: {
          /**
           * Validation Field
           * @description Field with validation error
           */
          validationField: string;
          /**
           * Validation Message
           * @description Message describing the validation error
           */
          validationMessage: string;
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
 * Type of SENDSPARK's SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS tool input.
 */
type SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS_INPUT = {
  /**
   * Filters
   * @description Filter by creator ID
   * @default null
   */
  filters: string | null;
  /**
   * Limit
   * @description Number of campaigns per page (max 20)
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Pagination start index (1-based)
   * @default 1
   */
  offset: number;
  /**
   * Search
   * @description Search by campaign name
   * @default null
   */
  search: string | null;
  /**
   * Workspace Id
   * @description Workspace identifier where to list dynamic video campaigns
   */
  workspaceId?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS tool output.
 */
type SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response payload
       */
      response: {
          /**
           * Data
           * @description Array of dynamic campaigns
           */
          data: {
              /**
               *  Id
               * @description Campaign unique identifier
               */
              _id: string;
              /**
               * Combined Video
               * @description Combined video flag
               */
              combinedVideo: boolean;
              /**
               * Created At
               * @description Creation timestamp
               */
              createdAt: string;
              /**
               * Creator
               * @description Creator information
               */
              creator: {
                  /**
                   *  Id
                   * @description Creator unique identifier
                   */
                  _id: string;
                  /**
                   * Email
                   * @description Creator email
                   */
                  email: string;
                  /**
                   * Id
                   * @description Creator ID
                   */
                  id: string;
                  /**
                   * Last Name
                   * @description Creator last name
                   */
                  lastName: string;
                  /**
                   * Name
                   * @description Creator first name
                   */
                  name: string;
              };
              /**
               * Dynamic Background
               * @description Dynamic background flag
               */
              dynamicBackground: boolean;
              /**
               * Features
               * @description Features enabled
               */
              features: {
                  /**
                   * Screenshot
                   * @description Screenshot enabled
                   */
                  screenshot: boolean;
                  /**
                   * Transcription
                   * @description Transcription enabled
                   */
                  transcription: boolean;
                  /**
                   * Video Settings
                   * @description Video settings enabled
                   */
                  videoSettings: boolean;
                  /**
                   * Voice Cloning
                   * @description Voice cloning enabled
                   */
                  voiceCloning: boolean;
              };
              /**
               * Folder
               * @description Folder name
               */
              folder: string;
              /**
               * Metadata
               * @description Metadata
               */
              metadata: {
                  /**
                   * Version
                   * @description Metadata version
                   */
                  version: string;
              };
              /**
               * Name
               * @description Campaign name
               */
              name: string;
              /**
               * Prospect List
               * @description Prospect list
               */
              prospectList: {
                  /**
                   *  Id
                   * @description Prospect unique identifier
                   */
                  _id: string;
                  /**
                   * Audio Url
                   * @description Audio URL
                   */
                  audioUrl: string;
                  /**
                   * Background Url
                   * @description Background image URL
                   */
                  backgroundUrl: string;
                  /**
                   * Bulk Id
                   * @description Bulk operation ID
                   */
                  bulkId: string;
                  /**
                   * Campaign
                   * @description Associated campaign ID
                   */
                  campaign: string;
                  /**
                   * Company
                   * @description Prospect's company name
                   */
                  company: string;
                  /**
                   * Contact Email
                   * @description Prospect contact email
                   */
                  contactEmail: string;
                  /**
                   * Contact Name
                   * @description Prospect contact name
                   */
                  contactName: string;
                  /**
                   * Created At
                   * @description Creation timestamp
                   */
                  createdAt: string;
                  /**
                   * Deleted At
                   * @description Deletion timestamp if deleted
                   * @default null
                   */
                  deletedAt: string | null;
                  /**
                   * Is Notified
                   * @description Notification sent flag
                   */
                  isNotified: boolean;
                  /**
                   * Job Title
                   * @description Prospect's job title
                   */
                  jobTitle: string;
                  /**
                   * Resources Status
                   * @description Resource status
                   */
                  resourcesStatus: string;
                  /**
                   * Screenshot Url
                   * @description Screenshot URL
                   */
                  screenshotUrl: string;
                  /**
                   * Status
                   * @description Prospect status
                   */
                  status: string;
                  /**
                   * Updated At
                   * @description Last update timestamp
                   */
                  updatedAt: string;
                  /**
                   * Valid
                   * @description Validity flag
                   */
                  valid: boolean;
                  /**
                   * Validation Details
                   * @description Validation details
                   * @default null
                   */
                  validationDetails: {
                      [key: string]: unknown;
                  } | null;
              }[];
              /**
               * Status
               * @description Campaign status
               */
              status: string;
              /**
               * Summary
               * @description Processing summary
               */
              summary: {
                  /**
                   * Completed
                   * @description Number completed
                   */
                  completed: number;
                  /**
                   * Deleted
                   * @description Number deleted
                   */
                  deleted: number;
                  /**
                   * Errored
                   * @description Number errored
                   */
                  errored: number;
                  /**
                   * Processed
                   * @description Number processed
                   */
                  processed: number;
              };
              /**
               * Video Properties
               * @description Share page properties
               */
              videoProperties: {
                  /**
                   * Share Page
                   * @description Share page properties
                   */
                  sharePage: {
                      /**
                       * Buttons
                       * @description Share page buttons
                       */
                      buttons: string[];
                      /**
                       * Title
                       * @description Share page title
                       */
                      title: string;
                  };
              };
              /**
               * Videos Assets
               * @description Video assets list
               */
              videosAssets: {
                  /**
                   *  Id
                   * @description Video asset unique identifier
                   */
                  _id: string;
                  /**
                   * Asset Id
                   * @description Asset ID
                   */
                  assetId: string;
                  /**
                   * Asset Url
                   * @description Asset URL
                   */
                  assetUrl: string;
                  /**
                   * Duration
                   * @description Video duration in seconds
                   */
                  duration: number;
                  /**
                   * Provider
                   * @description Video provider
                   */
                  provider: string;
                  /**
                   * Url
                   * @description Video URL
                   */
                  url: string;
              }[];
              /**
               * Workspace
               * @description Workspace ID
               */
              workspace: string;
          }[];
          /**
           * Links
           * @description Pagination links
           */
          links: {
              /**
               * Next
               * @description Cursor for next page pagination
               */
              next: {
                  /**
                   * Limit
                   * @description Next page limit
                   */
                  limit: number;
                  /**
                   * Offset
                   * @description Next page offset
                   */
                  offset: number;
                  /**
                   * Url
                   * @description URL for next page
                   */
                  url: string;
              };
          };
          /**
           * Pagination
           * @description Pagination details
           */
          pagination: {
              /**
               * Limit
               * @description Current page limit
               */
              limit: number;
              /**
               * Offset
               * @description Current offset
               */
              offset: number;
              /**
               * Total
               * @description Total number of campaigns
               */
              total: number;
          };
      };
      /**
       * Status Code
       * @description HTTP status code
       */
      statusCode: number;
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
 * Type of SENDSPARK's SENDSPARK_LIST_WEBHOOKS tool input.
 */
type SENDSPARK_LIST_WEBHOOKS_INPUT = {
  /**
   * Workspace Id
   * @description Workspace unique identifier
   */
  workspaceId?: string;
};

/**
 * Type of SENDSPARK's SENDSPARK_LIST_WEBHOOKS tool output.
 */
type SENDSPARK_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique webhook identifier
       */
      _id: string;
      /**
       * Created At
       * @description ISO timestamp when the webhook was created
       */
      createdAt: string;
      /**
       * Events
       * @description List of subscribed event names
       */
      events: string[];
      /**
       * Updated At
       * @description ISO timestamp when the webhook was last updated, if applicable
       * @default null
       */
      updatedAt: string | null;
      /**
       * Url
       * @description Webhook callback URL
       */
      url: string;
      /**
       * Workspace Id
       * @description Workspace unique identifier
       */
      workspaceId: string;
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
 * Type map of all available tool input types for toolkit "SENDSPARK".
 */
export type SENDSPARK_TOOL_INPUTS = {
  ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN: SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN_INPUT
  ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN: SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN_INPUT
  API_HEALTH_STATUS: SENDSPARK_API_HEALTH_STATUS_INPUT
  CREATE_DYNAMIC_VIDEO_CAMPAIGN: SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN_INPUT
  DELETE_WEBHOOK: SENDSPARK_DELETE_WEBHOOK_INPUT
  GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL: SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL_INPUT
  GET_DYNAMIC_CAMPAIGN_BY_ID: SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID_INPUT
  GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL: SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL_INPUT
  LIST_DYNAMIC_VIDEO_CAMPAIGNS: SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS_INPUT
  LIST_WEBHOOKS: SENDSPARK_LIST_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDSPARK".
 */
export type SENDSPARK_TOOL_OUTPUTS = {
  ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN: SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN_OUTPUT
  ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN: SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN_OUTPUT
  API_HEALTH_STATUS: SENDSPARK_API_HEALTH_STATUS_OUTPUT
  CREATE_DYNAMIC_VIDEO_CAMPAIGN: SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN_OUTPUT
  DELETE_WEBHOOK: SENDSPARK_DELETE_WEBHOOK_OUTPUT
  GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL: SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL_OUTPUT
  GET_DYNAMIC_CAMPAIGN_BY_ID: SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID_OUTPUT
  GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL: SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL_OUTPUT
  LIST_DYNAMIC_VIDEO_CAMPAIGNS: SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS_OUTPUT
  LIST_WEBHOOKS: SENDSPARK_LIST_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDSPARK toolkit.
 */
export const SENDSPARK = {
  slug: "sendspark",
  tools: {
    /**
     * Tool to add multiple prospects to a dynamic campaign in bulk. use when you need to add many prospects to your dynamic video campaign at once after confirming associated charges.
     */
    ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN: "SENDSPARK_ADD_MULTIPLE_PROSPECTS_TO_DYNAMIC_CAMPAIGN",
    /**
     * Tool to add a prospect to a dynamic video campaign. use after confirming workspace and campaign ids. example: add new prospect with name/contact details to dynamic "dyn12345" under a known workspace.
     */
    ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN: "SENDSPARK_ADD_PROSPECT_TO_DYNAMIC_VIDEO_CAMPAIGN",
    /**
     * Tool to check the health status of the sendspark api. use before making other api calls to ensure the service is up.
     */
    API_HEALTH_STATUS: "SENDSPARK_API_HEALTH_STATUS",
    /**
     * Tool to create a dynamic video campaign. use when you have a workspace id and want to automate dynamic campaign creation.
     */
    CREATE_DYNAMIC_VIDEO_CAMPAIGN: "SENDSPARK_CREATE_DYNAMIC_VIDEO_CAMPAIGN",
    /**
     * Tool to delete a specific webhook by its id. use when you need to remove an outdated or unnecessary webhook.
     */
    DELETE_WEBHOOK: "SENDSPARK_DELETE_WEBHOOK",
    /**
     * Tool to retrieve prospect data by email within a dynamic campaign. use after campaign creation to fetch prospect details.
     */
    GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL: "SENDSPARK_GET_CAMPAIGN_PROSPECT_DATA_BY_EMAIL",
    /**
     * Tool to retrieve details of a specific dynamic video campaign. use after confirming workspace and campaign ids.
     */
    GET_DYNAMIC_CAMPAIGN_BY_ID: "SENDSPARK_GET_DYNAMIC_CAMPAIGN_BY_ID",
    /**
     * Tool to retrieve prospect data by email in a dynamic campaign. use after adding a prospect to a campaign to fetch its details.
     */
    GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL: "SENDSPARK_GET_WORKSPACE_PROSPECT_DATA_BY_EMAIL",
    /**
     * Tool to list all dynamic video campaigns in a workspace. use when retrieving campaigns with optional pagination, filtering, or search.
     */
    LIST_DYNAMIC_VIDEO_CAMPAIGNS: "SENDSPARK_LIST_DYNAMIC_VIDEO_CAMPAIGNS",
    /**
     * Tool to list all configured webhooks. use when you need to audit or verify active webhooks.
     */
    LIST_WEBHOOKS: "SENDSPARK_LIST_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDSPARK".
 */
export type SENDSPARK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDSPARK".
 */
export type SENDSPARK_TRIGGER_EVENTS = {}
