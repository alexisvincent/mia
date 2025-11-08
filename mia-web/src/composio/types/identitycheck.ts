// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_CHECK_API_HEALTH tool input.
 */
type IDENTITYCHECK_CHECK_API_HEALTH_INPUT = {
  /**
   * Endpoint Path
   * @description Endpoint path to call relative to base_url (e.g., '/identity' or 'monitoring/health'). Defaults to '/identity'
   * @default null
   */
  endpoint_path: string | null;
  /**
   * Include Raw On Json
   * @description If true and the response is JSON, include a 'raw' field in details with the original text.
   * @default false
   */
  include_raw_on_json: boolean | null;
  /**
   * Method
   * @description HTTP method to use for the health probe. Defaults to GET.
   * @default GET
   * @enum {string|null}
   */
  method: "GET" | "HEAD" | null;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_CHECK_API_HEALTH tool output.
 */
type IDENTITYCHECK_CHECK_API_HEALTH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Map containing application metadata; includes key 'version'.
       */
      details: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Overall health status. Allowed values: UP, DOWN, UNKNOWN, OUT_OF_SERVICE.
       * @enum {string}
       */
      status: "UP" | "DOWN" | "UNKNOWN" | "OUT_OF_SERVICE";
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_DELETE_CONFIGURATION tool input.
 */
type IDENTITYCHECK_DELETE_CONFIGURATION_INPUT = {
  /**
   * Code
   * @description Configuration code defined by the customer when it created the configuration.
   */
  code?: string;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_DELETE_CONFIGURATION tool output.
 */
type IDENTITYCHECK_DELETE_CONFIGURATION_OUTPUT = {
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT tool input.
 */
type IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT_INPUT = {
  /**
   * Code
   * @description Unique code of the notification endpoint to delete
   */
  code?: string;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT tool output.
 */
type IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT_OUTPUT = {
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS tool input.
 */
type IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS_INPUT = object;

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS tool output.
 */
type IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Configuration code
       */
      code: string;
      /**
       * Options
       * @description Optional settings
       */
      options: {
          /**
           * Email Sender Name
           * @description Email sender name
           * @default null
           */
          emailSenderName: string | null;
          /**
           * Id Capture Settings
           * @description Identity capture settings
           */
          idCaptureSettings: {
              /**
               * Block Upload
               * @description Whether uploads are blocked
               */
              blockUpload: boolean;
              /**
               * Capture Mode
               * @description (Deprecated) global capture mode; use desktop/mobile instead
               * @default null
               */
              captureMode: string | null;
              /**
               * Capture Mode Desktop
               * @description Desktop capture mode
               * @enum {string}
               */
              captureModeDesktop: "UPLOAD" | "CAMERA" | "BOTH";
              /**
               * Capture Mode Mobile
               * @description Mobile capture mode
               * @enum {string}
               */
              captureModeMobile: "UPLOAD" | "CAMERA" | "BOTH";
              /**
               * Disable Image Black And White Checks
               * @description Disable black-and-white image checks
               */
              disableImageBlackAndWhiteChecks: boolean;
              /**
               * Disable Image Quality Checks
               * @description Disable image quality checks
               */
              disableImageQualityChecks: boolean;
              /**
               * Display Upload Prompt On Mobile
               * @description Show upload prompt on mobile devices
               */
              displayUploadPromptOnMobile: boolean;
          };
          /**
           * Link Validity
           * @description Link validity duration (ISO-8601 or hours)
           */
          linkValidity: string;
          /**
           * Support Email
           * @description Support email for end users
           * @default null
           */
          supportEmail: string | null;
      };
      /**
       * Path Name
       * @description Custom path in user links
       */
      pathName: string;
      /**
       * Theme
       * @description Theme settings
       */
      theme: {
          /**
           * Body Bg Color
           * @description Page background color
           * @default null
           */
          bodyBgColor: string | null;
          /**
           * Btn Bg Color
           * @description Button background color
           * @default null
           */
          btnBgColor: string | null;
          /**
           * Btn Border Radius
           * @description Button border radius
           * @default null
           */
          btnBorderRadius: string | null;
          /**
           * Btn Hover Bg Color
           * @description Button hover color
           * @default null
           */
          btnHoverBgColor: string | null;
          /**
           * Btn Txt Color
           * @description Button text color
           * @default null
           */
          btnTxtColor: string | null;
          /**
           * HeaderLogoAlignEnum
           * @description Enum for header logo alignment options
           * @default null
           * @enum {string|null}
           */
          headerLogoAlign: "left" | "center" | "right" | null;
          /**
           * Hide Header Border
           * @description Hide header border
           * @default null
           */
          hideHeaderBorder: boolean | null;
          /**
           * Logo
           * @description Base64-encoded logo image
           * @default null
           */
          logo: string | null;
          /**
           * Title Txt Color
           * @description Hex color for title text
           * @default null
           */
          titleTxtColor: string | null;
      };
      /**
       * Wordings
       * @description Custom texts throughout the flow
       */
      wordings: {
          /**
           * Authent Help Msg
           * @description Authentication help message
           * @default null
           */
          authentHelpMsg: string | null;
          /**
           * Authent Input Msg
           * @description Authentication input prompt
           * @default null
           */
          authentInputMsg: string | null;
          /**
           * Error Msg
           * @description Error message
           * @default null
           */
          errorMsg: string | null;
          /**
           * Expired Msg
           * @description Expiration message
           * @default null
           */
          expiredMsg: string | null;
          /**
           * Home Msg
           * @description Home page message
           * @default null
           */
          homeMsg: string | null;
          /**
           * Home Title
           * @description Home page title
           * @default null
           */
          homeTitle: string | null;
          /**
           * Onboarding End Msg
           * @description Onboarding end message
           * @default null
           */
          onboardingEndMsg: string | null;
      }[];
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS tool input.
 */
type IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS_INPUT = object;

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS tool output.
 */
type IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Notification Endpoints
       * @description All the notification endpoints found
       */
      notificationEndpoints: {
          /**
           * Active
           * @description Optional activation flag
           * @default true
           */
          active: boolean | null;
          /**
           * Code
           * @description Unique identifier defined by the user
           */
          code: string;
          /**
           * SecurityHeaderField
           * @description Optional header field to authenticate requests coming from SDK-Web
           * @default null
           */
          securityHeaderField: {
              /**
               * Name
               * @description Name of the optional header field to authenticate requests coming from SDK-Web
               */
              name: string;
              /**
               * Value
               * @description Value of the optional header field to authenticate requests coming from SDK-Web
               */
              value: string;
          } | null;
          /**
           * Subscribed Events
           * @description List of subscribed events
           */
          subscribedEvents: string[];
          /**
           * Url
           * @description Public callback URL
           */
          url: string;
          /**
           * Use Ssl
           * @description Whether calls use SSL
           * @default true
           */
          useSsl: boolean | null;
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_CONFIGURATION tool input.
 */
type IDENTITYCHECK_FETCH_CONFIGURATION_INPUT = {
  /**
   * Code
   * @description Configuration code defined by the customer when creating the configuration
   */
  code?: string;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_CONFIGURATION tool output.
 */
type IDENTITYCHECK_FETCH_CONFIGURATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Unique configuration identifier, max length 20
       */
      code: string;
      /**
       * Options
       * @description Additional customization options
       */
      options: {
          /**
           * Email Sender Name
           * @description Name used to send the link by email, max length 30
           * @default null
           */
          emailSenderName: string | null;
          /**
           * ConfOptionsIdCaptureSettings
           * @description ID capture settings under options.
           * @default null
           */
          idCaptureSettings: {
              /**
               * Block Upload
               * @description Force camera capture; default false
               * @default false
               */
              blockUpload: boolean | null;
              /**
               * Capture Mode
               * @description Deprecated capture mode
               * @default null
               */
              captureMode: string | null;
              /**
               * Capture Mode Desktop
               * @description Desktop capture mode
               * @default null
               */
              captureModeDesktop: string | null;
              /**
               * Capture Mode Mobile
               * @description Mobile capture mode
               * @default null
               */
              captureModeMobile: string | null;
              /**
               * Disable Image Black And White Checks
               * @description Disable black & white image quality checks
               * @default false
               */
              disableImageBlackAndWhiteChecks: boolean | null;
              /**
               * Disable Image Quality Checks
               * @description Disable all image quality checks
               * @default false
               */
              disableImageQualityChecks: boolean | null;
              /**
               * Display Upload Prompt On Mobile
               * @description Show choice between camera/file upload on mobile
               * @default false
               */
              displayUploadPromptOnMobile: boolean | null;
          } | null;
          /**
           * Link Validity
           * @description Expiration duration (ISO-8601 format or integer hours); default 24h, min 5 minutes, max 24h
           * @default null
           */
          linkValidity: string | null;
          /**
           * Support Email
           * @description Support email for callback warning notifications
           * @default null
           */
          supportEmail: string | null;
      };
      /**
       * Path Name
       * @description Custom path used in configuration links, max length 20
       */
      pathName: string;
      /**
       * Theme
       * @description Visual customization theme settings
       */
      theme: {
          /**
           * Body Bg Color
           * @description Body background color, hex string
           * @default null
           */
          bodyBgColor: string | null;
          /**
           * Btn Bg Color
           * @description Button background color, hex string
           * @default null
           */
          btnBgColor: string | null;
          /**
           * Btn Border Radius
           * @description CSS border-radius value, max length 25
           * @default null
           */
          btnBorderRadius: string | null;
          /**
           * Btn Hover Bg Color
           * @description Button hover background color, hex string
           * @default null
           */
          btnHoverBgColor: string | null;
          /**
           * Btn Txt Color
           * @description Button text color, hex string
           * @default null
           */
          btnTxtColor: string | null;
          /**
           * Header Bg Color
           * @description Deprecated; header background color, hex string
           * @default null
           */
          headerBgColor: string | null;
          /**
           * Header Logo Align
           * @description Header logo alignment (e.g., 'left', 'center', 'right')
           * @default null
           */
          headerLogoAlign: string | null;
          /**
           * Hide Header Border
           * @description Hide header border (default false)
           * @default false
           */
          hideHeaderBorder: boolean | null;
          /**
           * Logo
           * @description Base64-encoded PNG logo
           * @default null
           */
          logo: string | null;
          /**
           * Title Txt Color
           * @description Hex color for home title, max length 10
           * @default null
           */
          titleTxtColor: string | null;
      };
      /**
       * Wordings
       * @description List of custom wordings by language
       */
      wordings: {
          /**
           * Authent Help Msg
           * @description Authentication help message
           * @default null
           */
          authentHelpMsg: string | null;
          /**
           * Authent Input Msg
           * @description Authentication input message
           * @default null
           */
          authentInputMsg: string | null;
          /**
           * Error Msg
           * @description Error message shown to user
           * @default null
           */
          errorMsg: string | null;
          /**
           * Expired Msg
           * @description Expired session message
           * @default null
           */
          expiredMsg: string | null;
          /**
           * Home Msg
           * @description Message on home page
           * @default null
           */
          homeMsg: string | null;
          /**
           * Home Title
           * @description Title on home page
           * @default null
           */
          homeTitle: string | null;
          /**
           * Language
           * @description Language code (e.g., 'en', 'fr')
           */
          language: string;
          /**
           * Link Email Msg
           * @description Message of the link email
           * @default null
           */
          linkEmailMsg: string | null;
          /**
           * Link Email Signature
           * @description Signature of the link email
           * @default null
           */
          linkEmailSignature: string | null;
          /**
           * Link Email Subject
           * @description Subject of the link email
           * @default null
           */
          linkEmailSubject: string | null;
          /**
           * Link Sms Msg
           * @description SMS message containing the link
           * @default null
           */
          linkSmsMsg: string | null;
          /**
           * Onboarding End Msg
           * @description Onboarding end message
           * @default null
           */
          onboardingEndMsg: string | null;
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT tool input.
 */
type IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT_INPUT = {
  /**
   * Code
   * @description Notification endpoint code defined by the customer when created
   * @example code_example
   */
  code?: string;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT tool output.
 */
type IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the endpoint is currently active
       */
      active: boolean;
      /**
       * Code
       * @description Unique identifier of the notification endpoint
       */
      code: string;
      /**
       * SecurityHeaderField
       * @description Optional header to authenticate that callbacks originate from SDK-Web.
       * @default null
       */
      securityHeaderField: {
          /**
           * Name
           * @description Header name to authenticate callbacks (e.g., 'Api-key')
           * @example Api-key
           */
          name: string;
          /**
           * Value
           * @description Header value to authenticate callbacks (e.g., 'IdCheckIo-SDK-Web')
           * @example IdCheckIo-SDK-Web
           */
          value: string;
      } | null;
      /**
       * Subscribed Events
       * @description List of events this endpoint is subscribed to
       * @example [
       *       "START_ONBOARDING",
       *       "END_ONBOARDING"
       *     ]
       */
      subscribedEvents: string[];
      /**
       * Url
       * @description Callback URL registered for notifications
       */
      url: string;
      /**
       * Use Ssl
       * @description Indicates if SSL is required for callbacks
       */
      useSsl: boolean;
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_ONBOARDINGS tool input.
 */
type IDENTITYCHECK_FETCH_ONBOARDINGS_INPUT = {
  /**
   * Business Uid
   * @description Filter by your business-specific UID
   * @default null
   */
  businessUid: string | null;
  /**
   * Date From
   * Format: date
   * @description Filter onboardings created on or after this date (yyyy-MM-dd)
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * Format: date
   * @description Filter onboardings created on or before this date (yyyy-MM-dd)
   * @default null
   */
  dateTo: string | null;
  /**
   * Error Code
   * @description Filter by onboarding error code
   * @default null
   * @enum {string|null}
   */
  errorCode: "NETWORK_ERROR" | "USER_ERROR" | "DEVICE_ERROR" | "DOCUMENT_ERROR" | "INTERNAL_ERROR" | null;
  /**
   * Notification Type
   * @description Filter by notification type used to send the link
   * @default null
   * @enum {string|null}
   */
  notificationType: "EMAIL" | "PHONE" | "NONE" | null;
  /**
   * Page
   * @description Zero-based page index for pagination (default is 0)
   * @default null
   */
  page: number | null;
  /**
   * Status
   * @description Filter by onboarding status
   * @default null
   * @enum {string|null}
   */
  status: "CREATED" | "CLICKED" | "CAPTURE_ONGOING" | "SUCCESS" | "EXPIRED" | "ERROR" | null;
  /**
   * Uid
   * @description Filter by onboarding UID
   * @default null
   */
  uid: string | null;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_FETCH_ONBOARDINGS tool output.
 */
type IDENTITYCHECK_FETCH_ONBOARDINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page index
       */
      currentPage: number;
      /**
       * Distinct Business Uid
       * @description Number of distinct business UIDs
       */
      distinctBusinessUid: number;
      /**
       * Distinct Users
       * @description Number of distinct users
       */
      distinctUsers: number;
      /**
       * Number Per Page
       * @description Number of results per page
       */
      numberPerPage: number;
      /**
       * Page Results
       * @description List of onboardings for the current page
       */
      pageResults: {
          /**
           * Business Uid
           * @description Business UID
           * @default null
           */
          businessUid: string | null;
          /**
           * Captures
           * @description Capture statistics per document
           * @default null
           */
          captures: {
              /**
               * Code
               * @description Document code
               */
              code: string;
              /**
               * Failed Capture
               * @description Number of failed document captures
               */
              failedCapture: number;
              /**
               * Successfull Capture
               * @description Number of successful document captures
               */
              successfullCapture: number;
          }[] | null;
          /**
           * Conf Code
           * @description Configuration code used
           * @default null
           */
          confCode: string | null;
          /**
           * Creation Date
           * @description Creation datetime in RFC3339 format
           */
          creationDate: string;
          /**
           * Customer Hash
           * @description Hash of the customer identifier
           * @default null
           */
          customerHash: string | null;
          /**
           * Customer Login
           * @description Customer login associated with onboarding
           * @default null
           */
          customerLogin: string | null;
          /**
           * ErrorCause
           * @description Error cause if status is ERROR
           * @default null
           */
          errorCause: {
              /**
               * Code
               * @description Error cause code
               * @enum {string}
               */
              code: "NETWORK_ERROR" | "USER_ERROR" | "DEVICE_ERROR" | "DOCUMENT_ERROR" | "INTERNAL_ERROR";
              /**
               * Details
               * @description Additional error details
               * @default null
               */
              details: string | null;
          } | null;
          /**
           * Expiration Date
           * @description Expiration datetime in RFC3339 format
           * @default null
           */
          expirationDate: string | null;
          /**
           * Last Use Date
           * @description Last use datetime in RFC3339 format
           * @default null
           */
          lastUseDate: string | null;
          /**
           * Link
           * @description Full onboarding URL
           */
          link: string;
          /**
           * Nb Landing Page Loaded
           * @description Number of times the landing page was loaded
           * @default null
           */
          nbLandingPageLoaded: number | null;
          /**
           * Notification Type
           * @description Notification type used to send onboarding link
           * @enum {string}
           */
          notificationType: "EMAIL" | "PHONE" | "NONE";
          /**
           * Shortened Link
           * @description Shortened onboarding URL
           * @default null
           */
          shortenedLink: string | null;
          /**
           * Status
           * @description Current status of the onboarding
           * @enum {string}
           */
          status: "CREATED" | "CLICKED" | "CAPTURE_ONGOING" | "SUCCESS" | "EXPIRED" | "ERROR";
          /**
           * Uid
           * @description Onboarding UID
           */
          uid: string;
      }[];
      /**
       * Total Pages
       * @description Total number of pages
       */
      totalPages: number;
      /**
       * Total Results
       * @description Total number of results
       */
      totalResults: number;
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_GET_DOCUMENT_CONTENT tool input.
 */
type IDENTITYCHECK_GET_DOCUMENT_CONTENT_INPUT = {
  /**
   * Doc Code
   * @description Code of the document to retrieve (e.g., 'passport')
   */
  docCode?: string;
  /**
   * Uid
   * @description UID of the onboarding
   */
  uid?: string;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_GET_DOCUMENT_CONTENT tool output.
 */
type IDENTITYCHECK_GET_DOCUMENT_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Code of the retrieved document
       */
      code: string;
      /**
       * Doc Contents
       * @description List of base64-encoded contents for captured document sides
       */
      docContents: string[];
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS tool input.
 */
type IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS_INPUT = {
  /**
   * Uid
   * @description Unique identifier of the onboarding
   */
  uid?: string;
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS tool output.
 */
type IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * OnboardingEndErrorCause
       * @description Details about the cause of an onboarding error.
       * @default null
       */
      errorCause: {
          /**
           * Code
           * @description Error cause code
           * @enum {string}
           */
          code: "NETWORK_ERROR" | "USER_ERROR" | "DEVICE_ERROR" | "DOCUMENT_ERROR" | "INTERNAL_ERROR";
          /**
           * Details
           * @description Additional details about the error cause
           * @default null
           */
          details: string | null;
      } | null;
      /**
       * Message
       * @description Informational message about the onboarding status
       * @default null
       */
      message: string | null;
      /**
       * OnboardingResult
       * @description Final results of the onboarding process.
       * @default null
       */
      result: {
          /**
           * Analysis Results
           * @description List of analysis results for captured documents
           * @default null
           */
          analysisResults: {
              /**
               * Code
               * @description Analysis step code
               */
              code: string;
              /**
               * Message
               * @description Informational message for this step
               * @default null
               */
              message: string | null;
              /**
               * Status
               * @description Status of the analysis step, e.g., OK or KO
               */
              status: string;
          }[] | null;
          /**
           * Business Uid
           * @description Business-specific UID defined by the client
           * @default null
           */
          businessUid: string | null;
          /**
           * CisFileData
           * @description CIS export file data if configured in the onboarding.
           * @default null
           */
          cisData: {
              /**
               * Download Url
               * @description URL to download the CIS data file
               */
              downloadUrl: string;
              /**
               * File Name
               * @description Name of the CIS export file
               */
              fileName: string;
          } | null;
          /**
           * ExtraData
           * @description Additional data returned at the end of onboarding.
           * @default null
           */
          extraData: {
              /**
               * Data
               * @description Key-value mapping of extra onboarding data
               */
              data: {
                  [key: string]: string;
              };
          } | null;
          /**
           * Status
           * @description Final status of the onboarding
           * @enum {string}
           */
          status: "SUCCESS" | "ERROR";
          /**
           * Uid
           * @description Unique identifier of the onboarding result
           */
          uid: string;
      } | null;
      /**
       * Status
       * @description Overall onboarding status
       * @enum {string}
       */
      status: "CREATED" | "CLICKED" | "CAPTURE_ONGOING" | "SUCCESS" | "EXPIRED" | "ERROR";
      /**
       * Uid
       * @description Unique identifier of the onboarding
       */
      uid: string;
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
 * Type of IDENTITYCHECK's IDENTITYCHECK_UPDATE_CONFIGURATION tool input.
 */
type IDENTITYCHECK_UPDATE_CONFIGURATION_INPUT = {
  /**
   * Code
   * @description Configuration code defined by the customer
   */
  code?: string;
  /**
   * Configuration
   * @description Configuration payload
   */
  configuration?: {
      /**
       * Code
       * @description Unique identifier defined by the user
       */
      code: string;
      /**
       * ConfOptions
       * @description Optional settings to further customize
       * @default null
       */
      options: {
          /**
           * Email Sender Name
           * @description Name used to send the link by email
           * @default null
           */
          emailSenderName: string | null;
          /**
           * ConfOptionsIdCaptureSettings
           * @description ID capture customization settings
           * @default null
           */
          idCaptureSettings: {
              /**
               * Block Upload
               * @description Force camera capture; requires activation
               * @default null
               */
              blockUpload: boolean | null;
              /**
               * Capture Mode
               * @description Deprecated capture mode
               * @default null
               * @enum {string|null}
               */
              captureMode: "CAMERA" | "CAMERA_WITH_UPLOAD_FALLBACK" | "UPLOAD" | null;
              /**
               * Capture Mode Desktop
               * @description Capture mode on desktop
               * @default null
               * @enum {string|null}
               */
              captureModeDesktop: "PROMPT" | "CAMERA" | "UPLOAD" | null;
              /**
               * Capture Mode Mobile
               * @description Capture mode on mobile
               * @default null
               * @enum {string|null}
               */
              captureModeMobile: "PROMPT" | "CAMERA" | "UPLOAD" | null;
              /**
               * Disable Image Black And White Checks
               * @description Disable black-and-white quality checks
               * @default null
               */
              disableImageBlackAndWhiteChecks: boolean | null;
              /**
               * Disable Image Quality Checks
               * @description Disable all quality checks
               * @default null
               */
              disableImageQualityChecks: boolean | null;
              /**
               * Display Upload Prompt On Mobile
               * @description Always ask user to choose camera or file
               * @default null
               */
              displayUploadPromptOnMobile: boolean | null;
          } | null;
          /**
           * Link Validity
           * @description ISO-8601 duration or integer hours; default 24; min 5 minutes; max 24h
           * @default null
           */
          linkValidity: string | null;
          /**
           * Support Email
           * @description Email to receive callback warning notifications
           * @default null
           */
          supportEmail: string | null;
      } | null;
      /**
       * Path Name
       * @description Custom path that will be part of the link
       */
      pathName: string;
      /**
       * Theme
       * @description UI theming options
       * @default null
       */
      theme: {
          /**
           * Body Bg Color
           * @description Hex color for body background
           * @default null
           */
          bodyBgColor: string | null;
          /**
           * Btn Bg Color
           * @description Hex color for buttons
           * @default null
           */
          btnBgColor: string | null;
          /**
           * Btn Border Radius
           * @description CSS border-radius value (no API validation)
           * @default null
           */
          btnBorderRadius: string | null;
          /**
           * Btn Hover Bg Color
           * @description Hex color when hovering over buttons
           * @default null
           */
          btnHoverBgColor: string | null;
          /**
           * Btn Txt Color
           * @description Hex color for button text
           * @default null
           */
          btnTxtColor: string | null;
          /**
           * Header Bg Color
           * @description Deprecated header background color
           * @default null
           */
          headerBgColor: string | null;
          /**
           * Header Logo Align
           * @description Logo alignment in header
           * @default null
           * @enum {string|null}
           */
          headerLogoAlign: "LEFT" | "RIGHT" | "CENTER" | null;
          /**
           * Hide Header Border
           * @description Hide header border
           * @default null
           */
          hideHeaderBorder: boolean | null;
          /**
           * Logo
           * @description Base64 PNG logo (<= 256 KB), translucent background; suggested ratio ~186x40px
           * @default null
           */
          logo: string | null;
          /**
           * Title Txt Color
           * @description Hex color for home page title
           * @default null
           */
          titleTxtColor: string | null;
      } | null;
      /**
       * Wordings
       * @description Custom wordings by language
       * @default null
       */
      wordings: {
          /**
           * Authent Help Msg
           * @description Authentication help message
           * @default null
           */
          authentHelpMsg: string | null;
          /**
           * Authent Input Msg
           * @description Authentication input message
           * @default null
           */
          authentInputMsg: string | null;
          /**
           * Error Msg
           * @description Error message
           * @default null
           */
          errorMsg: string | null;
          /**
           * Expired Msg
           * @description Expired link message
           * @default null
           */
          expiredMsg: string | null;
          /**
           * Home Msg
           * @description Home page message
           * @default null
           */
          homeMsg: string | null;
          /**
           * Home Title
           * @description Home page title
           * @default null
           */
          homeTitle: string | null;
          /**
           * Language
           * @description Language code
           * @enum {string}
           */
          language: "EN" | "FR" | "IT" | "ES" | "DE" | "RO" | "CS" | "PL" | "PT" | "NL" | "AR" | "UK" | "SK" | "HU" | "BG" | "SQ" | "SR";
          /**
           * Link Email Msg
           * @description Email message body for the link
           * @default null
           */
          linkEmailMsg: string | null;
          /**
           * Link Email Signature
           * @description Email signature
           * @default null
           */
          linkEmailSignature: string | null;
          /**
           * Link Email Subject
           * @description Email subject for the link
           * @default null
           */
          linkEmailSubject: string | null;
          /**
           * Link Sms Msg
           * @description SMS message for the link
           * @default null
           */
          linkSmsMsg: string | null;
          /**
           * Onboarding End Msg
           * @description Onboarding end message
           * @default null
           */
          onboardingEndMsg: string | null;
      }[] | null;
  };
};

/**
 * Type of IDENTITYCHECK's IDENTITYCHECK_UPDATE_CONFIGURATION tool output.
 */
type IDENTITYCHECK_UPDATE_CONFIGURATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Code */
      code: string;
      /**
       * ConfOptions
       * @description Optional settings to further customize
       */
      options: {
          /**
           * Email Sender Name
           * @description Name used to send the link by email
           * @default null
           */
          emailSenderName: string | null;
          /**
           * ConfOptionsIdCaptureSettings
           * @description ID capture customization settings
           * @default null
           */
          idCaptureSettings: {
              /**
               * Block Upload
               * @description Force camera capture; requires activation
               * @default null
               */
              blockUpload: boolean | null;
              /**
               * Capture Mode
               * @description Deprecated capture mode
               * @default null
               * @enum {string|null}
               */
              captureMode: "CAMERA" | "CAMERA_WITH_UPLOAD_FALLBACK" | "UPLOAD" | null;
              /**
               * Capture Mode Desktop
               * @description Capture mode on desktop
               * @default null
               * @enum {string|null}
               */
              captureModeDesktop: "PROMPT" | "CAMERA" | "UPLOAD" | null;
              /**
               * Capture Mode Mobile
               * @description Capture mode on mobile
               * @default null
               * @enum {string|null}
               */
              captureModeMobile: "PROMPT" | "CAMERA" | "UPLOAD" | null;
              /**
               * Disable Image Black And White Checks
               * @description Disable black-and-white quality checks
               * @default null
               */
              disableImageBlackAndWhiteChecks: boolean | null;
              /**
               * Disable Image Quality Checks
               * @description Disable all quality checks
               * @default null
               */
              disableImageQualityChecks: boolean | null;
              /**
               * Display Upload Prompt On Mobile
               * @description Always ask user to choose camera or file
               * @default null
               */
              displayUploadPromptOnMobile: boolean | null;
          } | null;
          /**
           * Link Validity
           * @description ISO-8601 duration or integer hours; default 24; min 5 minutes; max 24h
           * @default null
           */
          linkValidity: string | null;
          /**
           * Support Email
           * @description Email to receive callback warning notifications
           * @default null
           */
          supportEmail: string | null;
      } | null;
      /** Path Name */
      pathName: string;
      /**
       * Theme
       * @description UI theming options
       */
      theme: {
          /**
           * Body Bg Color
           * @description Hex color for body background
           * @default null
           */
          bodyBgColor: string | null;
          /**
           * Btn Bg Color
           * @description Hex color for buttons
           * @default null
           */
          btnBgColor: string | null;
          /**
           * Btn Border Radius
           * @description CSS border-radius value (no API validation)
           * @default null
           */
          btnBorderRadius: string | null;
          /**
           * Btn Hover Bg Color
           * @description Hex color when hovering over buttons
           * @default null
           */
          btnHoverBgColor: string | null;
          /**
           * Btn Txt Color
           * @description Hex color for button text
           * @default null
           */
          btnTxtColor: string | null;
          /**
           * Header Bg Color
           * @description Deprecated header background color
           * @default null
           */
          headerBgColor: string | null;
          /**
           * Header Logo Align
           * @description Logo alignment in header
           * @default null
           * @enum {string|null}
           */
          headerLogoAlign: "LEFT" | "RIGHT" | "CENTER" | null;
          /**
           * Hide Header Border
           * @description Hide header border
           * @default null
           */
          hideHeaderBorder: boolean | null;
          /**
           * Logo
           * @description Base64 PNG logo (<= 256 KB), translucent background; suggested ratio ~186x40px
           * @default null
           */
          logo: string | null;
          /**
           * Title Txt Color
           * @description Hex color for home page title
           * @default null
           */
          titleTxtColor: string | null;
      } | null;
      /** Wordings */
      wordings: {
          /**
           * Authent Help Msg
           * @description Authentication help message
           * @default null
           */
          authentHelpMsg: string | null;
          /**
           * Authent Input Msg
           * @description Authentication input message
           * @default null
           */
          authentInputMsg: string | null;
          /**
           * Error Msg
           * @description Error message
           * @default null
           */
          errorMsg: string | null;
          /**
           * Expired Msg
           * @description Expired link message
           * @default null
           */
          expiredMsg: string | null;
          /**
           * Home Msg
           * @description Home page message
           * @default null
           */
          homeMsg: string | null;
          /**
           * Home Title
           * @description Home page title
           * @default null
           */
          homeTitle: string | null;
          /**
           * Language
           * @description Language code
           * @enum {string}
           */
          language: "EN" | "FR" | "IT" | "ES" | "DE" | "RO" | "CS" | "PL" | "PT" | "NL" | "AR" | "UK" | "SK" | "HU" | "BG" | "SQ" | "SR";
          /**
           * Link Email Msg
           * @description Email message body for the link
           * @default null
           */
          linkEmailMsg: string | null;
          /**
           * Link Email Signature
           * @description Email signature
           * @default null
           */
          linkEmailSignature: string | null;
          /**
           * Link Email Subject
           * @description Email subject for the link
           * @default null
           */
          linkEmailSubject: string | null;
          /**
           * Link Sms Msg
           * @description SMS message for the link
           * @default null
           */
          linkSmsMsg: string | null;
          /**
           * Onboarding End Msg
           * @description Onboarding end message
           * @default null
           */
          onboardingEndMsg: string | null;
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
 * Type map of all available tool input types for toolkit "IDENTITYCHECK".
 */
export type IDENTITYCHECK_TOOL_INPUTS = {
  CHECK_API_HEALTH: IDENTITYCHECK_CHECK_API_HEALTH_INPUT
  DELETE_CONFIGURATION: IDENTITYCHECK_DELETE_CONFIGURATION_INPUT
  DELETE_NOTIFICATION_ENDPOINT: IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT_INPUT
  FETCH_ALL_CONFIGURATIONS: IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS_INPUT
  FETCH_ALL_NOTIFICATION_ENDPOINTS: IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS_INPUT
  FETCH_CONFIGURATION: IDENTITYCHECK_FETCH_CONFIGURATION_INPUT
  FETCH_NOTIFICATION_ENDPOINT: IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT_INPUT
  FETCH_ONBOARDINGS: IDENTITYCHECK_FETCH_ONBOARDINGS_INPUT
  GET_DOCUMENT_CONTENT: IDENTITYCHECK_GET_DOCUMENT_CONTENT_INPUT
  RETRIEVE_ONBOARDING_STATUS: IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS_INPUT
  UPDATE_CONFIGURATION: IDENTITYCHECK_UPDATE_CONFIGURATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IDENTITYCHECK".
 */
export type IDENTITYCHECK_TOOL_OUTPUTS = {
  CHECK_API_HEALTH: IDENTITYCHECK_CHECK_API_HEALTH_OUTPUT
  DELETE_CONFIGURATION: IDENTITYCHECK_DELETE_CONFIGURATION_OUTPUT
  DELETE_NOTIFICATION_ENDPOINT: IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT_OUTPUT
  FETCH_ALL_CONFIGURATIONS: IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS_OUTPUT
  FETCH_ALL_NOTIFICATION_ENDPOINTS: IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS_OUTPUT
  FETCH_CONFIGURATION: IDENTITYCHECK_FETCH_CONFIGURATION_OUTPUT
  FETCH_NOTIFICATION_ENDPOINT: IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT_OUTPUT
  FETCH_ONBOARDINGS: IDENTITYCHECK_FETCH_ONBOARDINGS_OUTPUT
  GET_DOCUMENT_CONTENT: IDENTITYCHECK_GET_DOCUMENT_CONTENT_OUTPUT
  RETRIEVE_ONBOARDING_STATUS: IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS_OUTPUT
  UPDATE_CONFIGURATION: IDENTITYCHECK_UPDATE_CONFIGURATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IDENTITYCHECK toolkit.
 */
export const IDENTITYCHECK = {
  slug: "identitycheck",
  tools: {
    /**
     * Tool to perform API health check. Use to verify API availability before other operations.
     */
    CHECK_API_HEALTH: "IDENTITYCHECK_CHECK_API_HEALTH",
    /**
     * Tool to delete an existing configuration. Use when you need to remove a configuration by its unique code.
     */
    DELETE_CONFIGURATION: "IDENTITYCHECK_DELETE_CONFIGURATION",
    /**
     * Tool to delete a notification endpoint. Use after confirming the endpoint code exists and you need to remove it.
     */
    DELETE_NOTIFICATION_ENDPOINT: "IDENTITYCHECK_DELETE_NOTIFICATION_ENDPOINT",
    /**
     * Tool to fetch all existing configurations. Use when you need to list all customer configurations after authentication.
     */
    FETCH_ALL_CONFIGURATIONS: "IDENTITYCHECK_FETCH_ALL_CONFIGURATIONS",
    /**
     * Tool to fetch all notification endpoints. Use when you need to list all existing notification endpoints.
     */
    FETCH_ALL_NOTIFICATION_ENDPOINTS: "IDENTITYCHECK_FETCH_ALL_NOTIFICATION_ENDPOINTS",
    /**
     * Tool to fetch a configuration by its code. Use when you need detailed settings of a specific identity check configuration.
     */
    FETCH_CONFIGURATION: "IDENTITYCHECK_FETCH_CONFIGURATION",
    /**
     * Tool to fetch a notification endpoint by its code. Use when you need the current configuration of a specific callback endpoint.
     */
    FETCH_NOTIFICATION_ENDPOINT: "IDENTITYCHECK_FETCH_NOTIFICATION_ENDPOINT",
    /**
     * Tool to retrieve onboardings. Use when you need to list onboardings with filters like UID, status, date range, etc. Example: List onboardings created since 2023-01-01 with status SUCCESS
     */
    FETCH_ONBOARDINGS: "IDENTITYCHECK_FETCH_ONBOARDINGS",
    /**
     * Tool to retrieve base64-encoded document content. Use when you have an onboarding UID and document code.
     */
    GET_DOCUMENT_CONTENT: "IDENTITYCHECK_GET_DOCUMENT_CONTENT",
    /**
     * Tool to retrieve the status of an onboarding. Use after creating an onboarding to check its progress and final result.
     */
    RETRIEVE_ONBOARDING_STATUS: "IDENTITYCHECK_RETRIEVE_ONBOARDING_STATUS",
    /**
     * Tool to update an existing configuration. Use when you need to modify properties of a configuration identified by code.
     */
    UPDATE_CONFIGURATION: "IDENTITYCHECK_UPDATE_CONFIGURATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IDENTITYCHECK".
 */
export type IDENTITYCHECK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IDENTITYCHECK".
 */
export type IDENTITYCHECK_TRIGGER_EVENTS = {}
