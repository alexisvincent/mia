// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDLAYER's CLOUDLAYER_ADD_STORAGE tool input.
 */
type CLOUDLAYER_ADD_STORAGE_INPUT = {
  /**
   * Access Key
   * @description Storage provider access key (if required by the provider).
   * @default null
   */
  accessKey: string | null;
  /**
   * Container
   * @description Name of the bucket or container in the storage provider.
   */
  container?: string;
  /**
   * Name
   * @description A human-readable name to identify this storage configuration.
   */
  name?: string;
  /**
   * Path
   * @description Subfolder path inside the bucket/container. Defaults to the root if omitted.
   * @default null
   */
  path: string | null;
  /**
   * Provider
   * @description Storage provider. Valid values: 'aws', 'azure', 'gcp'
   * @enum {string}
   */
  provider?: "aws" | "azure" | "gcp";
  /**
   * Region
   * @description Storage region (e.g., 'us-east-1').
   */
  region?: string;
  /**
   * Secret Access Key
   * @description Storage provider secret access key (if required by the provider).
   * @default null
   */
  secretAccessKey: string | null;
};

/**
 * Type of CLOUDLAYER's CLOUDLAYER_ADD_STORAGE tool output.
 */
type CLOUDLAYER_ADD_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Container
       * @description Bucket or container name configured.
       */
      container: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the storage configuration was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the created storage configuration.
       */
      id: string;
      /**
       * Name
       * @description Name of the storage configuration.
       */
      name: string;
      /**
       * Path
       * @description Configured subfolder path inside the container.
       * @default null
       */
      path: string | null;
      /**
       * Provider
       * @description Storage provider of the configuration.
       */
      provider: string;
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
 * Type of CLOUDLAYER's CLOUDLAYER_GET_ASSET tool input.
 */
type CLOUDLAYER_GET_ASSET_INPUT = {
  /**
   * Id
   * @description The unique identifier of the asset to retrieve
   */
  id?: string;
};

/**
 * Type of CLOUDLAYER's CLOUDLAYER_GET_ASSET tool output.
 */
type CLOUDLAYER_GET_ASSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ext
       * @description File extension of the asset, such as 'png' or 'pdf'
       */
      ext: string;
      /**
       * Id
       * @description Unique identifier of the asset
       */
      id: string;
      /**
       * Job Id
       * @description Job ID that generated the asset
       */
      jobId: string;
      /**
       * Size
       * @description Size of the asset in bytes
       */
      size: number;
      /**
       * Timestamp
       * @description Unix timestamp when the asset was created
       */
      timestamp: number;
      /**
       * Type
       * @description Type of the asset, such as 'image' or 'pdf'
       */
      type: string;
      /**
       * Url
       * @description Public CDN URL of the asset
       */
      url: string;
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
 * Type of CLOUDLAYER's CLOUDLAYER_GET_STATUS tool input.
 */
type CLOUDLAYER_GET_STATUS_INPUT = object;

/**
 * Type of CLOUDLAYER's CLOUDLAYER_GET_STATUS tool output.
 */
type CLOUDLAYER_GET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description API status indicating reachability; always 'ok' if the service is up
       * @constant
       */
      status: "ok";
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
 * Type of CLOUDLAYER's CLOUDLAYER_HTML_TO_IMAGE tool input.
 */
type CLOUDLAYER_HTML_TO_IMAGE_INPUT = {
  /**
   * Authentication
   * @description HTTP authentication credentials.
   * @default null
   */
  authentication: {
      /**
       * Password
       * @description HTTP basic auth password.
       */
      password: string;
      /**
       * Username
       * @description HTTP basic auth username.
       */
      username: string;
  } | null;
  /**
   * Cookies
   * @description List of cookies to set before rendering.
   * @default null
   */
  cookies: {
      /**
       * Domain
       * @description Domain scope for the cookie.
       */
      domain: string;
      /**
       * Expires
       * @description Expiration as Unix timestamp.
       * @default null
       */
      expires: number | null;
      /**
       * Http Only
       * @description HTTP-only flag.
       * @default false
       */
      httpOnly: boolean | null;
      /**
       * Name
       * @description Cookie name (e.g., 'sessionid').
       */
      name: string;
      /**
       * Path
       * @description URL path scope for the cookie.
       * @default /
       */
      path: string;
      /**
       * Same Site
       * @description SameSite policy: 'Strict', 'Lax', or 'None'.
       * @default null
       * @enum {string|null}
       */
      sameSite: "Strict" | "Lax" | "None" | null;
      /**
       * Secure
       * @description Secure flag (HTTPS only).
       * @default false
       */
      secure: boolean | null;
      /**
       * Value
       * @description Cookie value.
       */
      value: string;
  }[] | null;
  /**
   * Delay
   * @description Delay in ms after page load before rendering.
   * @default null
   */
  delay: number | null;
  /**
   * Device Scale Factor
   * @description Device pixel ratio to emulate (1–3 typical).
   * @default 1
   */
  deviceScaleFactor: number;
  /**
   * Headers
   * @description Custom headers to include in page requests.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Height
   * @description Height of the output image in pixels (auto-fit if omitted).
   * @default null
   */
  height: number | null;
  /**
   * Html
   * @description Raw HTML to render. Required if `url` is not provided.
   * @default null
   */
  html: string | null;
  /**
   * Output Type
   * @description Image output format. One of 'png', 'jpeg', or 'webp'.
   * @default png
   * @enum {string}
   */
  outputType: "png" | "jpeg" | "webp";
  /**
   * Timezone Id
   * @description Timezone identifier, e.g. 'America/New_York'.
   * @default null
   */
  timezoneId: string | null;
  /**
   * Transparent
   * @description Output with transparent background if supported.
   * @default false
   */
  transparent: boolean;
  /**
   * Url
   * Format: uri
   * @description Public URL to render. Required if `html` is not provided.
   * @default null
   */
  url: string | null;
  /**
   * User Agent
   * @description Custom user-agent string.
   * @default null
   */
  userAgent: string | null;
  /**
   * Viewport
   * @description Override the browser viewport dimensions.
   * @default null
   */
  viewport: {
      /**
       * Height
       * @description Viewport height in pixels.
       */
      height: number;
      /**
       * Width
       * @description Viewport width in pixels.
       */
      width: number;
  } | null;
  /**
   * Wait For Selector
   * @description CSS selector to wait for before rendering.
   * @default null
   */
  waitForSelector: string | null;
  /**
   * Wait Timeout
   * @description Time in ms to wait for `waitForSelector`.
   * @default 30000
   */
  waitTimeout: number;
  /**
   * Width
   * @description Width of the output image in pixels.
   * @default 1200
   */
  width: number;
};

/**
 * Type of CLOUDLAYER's CLOUDLAYER_HTML_TO_IMAGE tool output.
 */
type CLOUDLAYER_HTML_TO_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Type
       * @description Format of the returned image.
       * @enum {string}
       */
      fileType: "png" | "jpeg" | "webp";
      /**
       * Height
       * @description Height of generated image in pixels.
       */
      height: number;
      /**
       * Image Url
       * Format: uri
       * @description Direct link to the resulting image.
       */
      imageUrl: string;
      /**
       * Request Id
       * @description Unique ID of request for tracing/debugging.
       */
      requestId: string;
      /**
       * Success
       * @description Whether the operation succeeded.
       */
      success: boolean;
      /**
       * Width
       * @description Width of generated image in pixels.
       */
      width: number;
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
 * Type of CLOUDLAYER's CLOUDLAYER_HTML_TO_PDF tool input.
 */
type CLOUDLAYER_HTML_TO_PDF_INPUT = {
  /**
   * Filename
   * @description Custom filename for the generated PDF.
   * @default null
   */
  filename: string | null;
  /**
   * Html
   * @description Raw HTML string to convert. Required if 'url' is omitted.
   * @default null
   */
  html: string | null;
  /**
   * Inline
   * @description If true, returns the PDF inline rather than as an attachment.
   * @default false
   */
  inline: boolean;
  /**
   * PDFOptions
   * @description Configuration options for PDF generation.
   * @default null
   */
  options: {
      /**
       * Margin Bottom
       * @description Bottom margin in millimeters.
       * @default null
       */
      marginBottom: number | null;
      /**
       * Margin Left
       * @description Left margin in millimeters.
       * @default null
       */
      marginLeft: number | null;
      /**
       * Margin Right
       * @description Right margin in millimeters.
       * @default null
       */
      marginRight: number | null;
      /**
       * Margin Top
       * @description Top margin in millimeters.
       * @default null
       */
      marginTop: number | null;
      /**
       * Orientation
       * @description Page orientation.
       * @default portrait
       * @enum {string}
       */
      orientation: "portrait" | "landscape";
      /**
       * Page Size
       * @description Page size for the PDF. Common sizes: A4, Letter, Legal.
       * @default A4
       * @enum {string}
       */
      pageSize: "A3" | "A4" | "A5" | "Legal" | "Letter" | "Tabloid";
  } | null;
  /**
   * Url
   * @description Public URL of the page to convert. Required if 'html' is omitted.
   * @default null
   */
  url: string | null;
  /**
   * Webhook Url
   * @description Callback URL to notify when PDF generation completes.
   * @default null
   */
  webhookUrl: string | null;
};

/**
 * Type of CLOUDLAYER's CLOUDLAYER_HTML_TO_PDF tool output.
 */
type CLOUDLAYER_HTML_TO_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if PDF generation failed.
       * @default null
       */
      error: string | null;
      /**
       * Job Id
       * @description Job ID for asynchronous webhook processing.
       * @default null
       */
      jobId: string | null;
      /**
       * Pdf Url
       * @description URL to download the generated PDF.
       * @default null
       */
      pdfUrl: string | null;
      /**
       * Success
       * @description True if the PDF was created successfully.
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
 * Type of CLOUDLAYER's CLOUDLAYER_LIST_ASSETS tool input.
 */
type CLOUDLAYER_LIST_ASSETS_INPUT = object;

/**
 * Type of CLOUDLAYER's CLOUDLAYER_LIST_ASSETS tool output.
 */
type CLOUDLAYER_LIST_ASSETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assets
       * @description Up to ten of the most recently created assets, sorted newest first
       */
      assets: {
          /**
           * Created At
           * @description ISO8601 timestamp of creation
           */
          createdAt: string;
          /**
           * Id
           * @description The unique asset ID
           */
          id: string;
          /**
           * Meta
           * @description Additional metadata about the asset
           */
          meta?: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name of the asset
           */
          name: string;
          /**
           * Type
           * @description Asset type (e.g., image, pdf)
           */
          type: string;
          /**
           * Updated At
           * @description ISO8601 timestamp of last update
           */
          updatedAt: string;
          /**
           * Url
           * @description Public or presigned URL for downloading the asset
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
 * Type of CLOUDLAYER's CLOUDLAYER_LIST_STORAGE tool input.
 */
type CLOUDLAYER_LIST_STORAGE_INPUT = object;

/**
 * Type of CLOUDLAYER's CLOUDLAYER_LIST_STORAGE tool output.
 */
type CLOUDLAYER_LIST_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Storage Configs
       * @description List of storage configurations available on the account.
       */
      storageConfigs: {
          /**
           * Active
           * @description Whether the configuration is currently active.
           */
          active: boolean;
          /**
           * Date Created
           * @description Creation date of the configuration (ISO 8601).
           */
          dateCreated: string;
          /**
           * Date Updated
           * @description Last update date of the configuration (ISO 8601).
           */
          dateUpdated: string;
          /**
           * Id
           * @description Unique identifier of the storage configuration.
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the storage configuration.
           */
          name: string;
          /**
           * Type
           * @description Type of storage (e.g., 's3', 'azure').
           */
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
 * Type of CLOUDLAYER's CLOUDLAYER_URL_TO_IMAGE_POST tool input.
 */
type CLOUDLAYER_URL_TO_IMAGE_POST_INPUT = {
  /**
   * Authentication
   * @description Basic authentication credentials for accessing the webpage.
   * @default null
   */
  authentication: {
      /**
       * Password
       * @description Authentication password.
       */
      password: string;
      /**
       * Username
       * @description Authentication username.
       */
      username: string;
  } | null;
  /**
   * ClipRegion
   * @description Rectangular region to capture instead of the full page.
   * @default null
   */
  clip: {
      /**
       * Height
       * @description Height of the capture region in pixels.
       */
      height: number;
      /**
       * Width
       * @description Width of the capture region in pixels.
       */
      width: number;
      /**
       * X
       * @description X-offset of the capture region in pixels.
       */
      x: number;
      /**
       * Y
       * @description Y-offset of the capture region in pixels.
       */
      y: number;
  } | null;
  /**
   * Cookies
   * @description List of cookies to set on the page.
   * @default null
   */
  cookies: {
      /**
       * Domain
       * @description Cookie domain.
       * @default null
       */
      domain: string | null;
      /**
       * Expires
       * @description Expiration time as UNIX timestamp.
       * @default null
       */
      expires: number | null;
      /**
       * Http Only
       * @description HttpOnly flag.
       * @default null
       */
      httpOnly: boolean | null;
      /**
       * Name
       * @description Cookie name.
       */
      name: string;
      /**
       * Path
       * @description Cookie path.
       * @default null
       */
      path: string | null;
      /**
       * Same Site
       * @description SameSite policy for the cookie.
       * @default null
       * @enum {string|null}
       */
      sameSite: "Strict" | "Lax" | "None" | null;
      /**
       * Secure
       * @description Secure flag.
       * @default null
       */
      secure: boolean | null;
      /**
       * Value
       * @description Cookie value.
       */
      value: string;
  }[] | null;
  /**
   * Full Page
   * @description Capture the full scrollable page.
   * @default false
   */
  fullPage: boolean;
  /**
   * Headers
   * @description Additional HTTP headers for the request.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Omit Background
   * @description Remove default white background (transparent PNG).
   * @default false
   */
  omitBackground: boolean;
  /**
   * Output
   * @description Desired image output format.
   * @default png
   * @enum {string}
   */
  output: "png" | "jpeg";
  /**
   * Url
   * @description URL of the webpage to capture.
   */
  url?: string;
  /**
   * User Agent
   * @description Custom User-Agent header value.
   * @default null
   */
  userAgent: string | null;
  /**
   * Viewport
   * @description Viewport size and device scale settings for the screenshot.
   * @default null
   */
  viewport: {
      /**
       * Device Scale Factor
       * @description Device scale factor (e.g., 1.0 standard, 2.0 Retina).
       * @default 1
       */
      deviceScaleFactor: number;
      /**
       * Height
       * @description Viewport height in pixels (nominal: 1080).
       * @default 1080
       */
      height: number;
      /**
       * Width
       * @description Viewport width in pixels (nominal: 1920).
       * @default 1920
       */
      width: number;
  } | null;
  /**
   * Wait For Selector
   * @description CSS selector to wait for before capturing.
   * @default null
   */
  waitForSelector: string | null;
  /**
   * Wait For Timeout
   * @description Milliseconds to wait before capture if no selector.
   * @default null
   */
  waitForTimeout: number | null;
};

/**
 * Type of CLOUDLAYER's CLOUDLAYER_URL_TO_IMAGE_POST tool output.
 */
type CLOUDLAYER_URL_TO_IMAGE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique job identifier.
       * @default null
       */
      id: string | null;
      /**
       * Message
       * @description Informational message or error details.
       * @default null
       */
      message: string | null;
      /**
       * URLToImageResult
       * @description Details of the generated image.
       * @default null
       */
      result: {
          /**
           * Format
           * @description Format of the output image.
           * @enum {string}
           */
          format: "png" | "jpeg";
          /**
           * Size
           * @description Size of the image file in bytes.
           */
          size: number;
          /**
           * Url
           * @description URL to download the generated image.
           */
          url: string;
      } | null;
      /**
       * Success
       * @description True if the operation was successful.
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
 * Type of CLOUDLAYER's CLOUDLAYER_URL_TO_PDF_POST tool input.
 */
type CLOUDLAYER_URL_TO_PDF_POST_INPUT = {
  /**
   * PDFOptions
   * @description Optional settings to customize PDF output.
   * @default null
   */
  options: {
      /**
       * Auto Scroll
       * @description Auto-scroll to trigger lazy load
       * @default false
       */
      autoScroll: boolean;
      /**
       * Cookies
       * @description List of cookies to set before rendering
       * @default null
       */
      cookies: {
          /**
           * Domain
           * @description Cookie domain scope
           * @default null
           */
          domain: string | null;
          /**
           * Expires
           * @description Expiration timestamp (Unix seconds)
           * @default null
           */
          expires: number | null;
          /**
           * Http Only
           * @description HTTP-only cookie flag
           * @default false
           */
          httpOnly: boolean | null;
          /**
           * Name
           * @description Cookie name
           */
          name: string;
          /**
           * Path
           * @description Cookie path scope
           * @default null
           */
          path: string | null;
          /**
           * Same Site
           * @description SameSite policy: Strict, Lax, or None
           * @default null
           * @enum {string|null}
           */
          sameSite: "Strict" | "Lax" | "None" | null;
          /**
           * Secure
           * @description Secure cookie flag
           * @default false
           */
          secure: boolean | null;
          /**
           * Value
           * @description Cookie value
           */
          value: string;
      }[] | null;
      /**
       * Delay
       * @description Additional delay after load in ms
       * @default null
       */
      delay: number | null;
      /**
       * Footer Template
       * @description HTML template for footer. Tokens: {{pageNumber}}, {{totalPages}}
       * @default null
       */
      footerTemplate: string | null;
      /**
       * Format
       * @description Predefined paper format
       * @default null
       * @enum {string|null}
       */
      format: "Letter" | "Legal" | "Tabloid" | "Ledger" | "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | null;
      /**
       * Header Template
       * @description HTML template for header. Tokens: {{pageNumber}}, {{totalPages}}
       * @default null
       */
      headerTemplate: string | null;
      /**
       * Height
       * @description Paper height in inches (overrides format)
       * @default null
       */
      height: number | null;
      /**
       * Landscape
       * @description Paper orientation; True for landscape
       * @default false
       */
      landscape: boolean;
      /**
       * Margin
       * @description Page margin sizes in inches.
       * @default null
       */
      margin: {
          /**
           * Bottom
           * @description Bottom margin in inches
           */
          bottom: number;
          /**
           * Left
           * @description Left margin in inches
           */
          left: number;
          /**
           * Right
           * @description Right margin in inches
           */
          right: number;
          /**
           * Top
           * @description Top margin in inches
           */
          top: number;
      } | null;
      /**
       * Page Ranges
       * @description Paper ranges to print, e.g., '1-3,5'
       * @default null
       */
      pageRanges: string | null;
      /**
       * Prefer Css Page Size
       * @description Use CSS @page size over width/height settings
       * @default false
       */
      preferCSSPageSize: boolean;
      /**
       * Print Background
       * @description Include background graphics
       * @default false
       */
      printBackground: boolean;
      /**
       * Scale
       * @description Scale of webpage rendering between 0.1 and 2.0
       * @default 1
       */
      scale: number;
      /**
       * Timeout
       * @description Max load time in ms
       * @default null
       */
      timeout: number | null;
      /**
       * Viewport
       * @description Browser viewport settings before PDF generation.
       * @default null
       */
      viewport: {
          /**
           * Device Scale Factor
           * @description Device scale factor (for retina displays)
           * @default null
           */
          deviceScaleFactor: number | null;
          /**
           * Has Touch
           * @description Emulate touch screen
           * @default false
           */
          hasTouch: boolean;
          /**
           * Height
           * @description Viewport height in pixels
           */
          height: number;
          /**
           * Is Landscape
           * @description Emulate landscape orientation
           * @default false
           */
          isLandscape: boolean;
          /**
           * Is Mobile
           * @description Emulate mobile viewport
           * @default false
           */
          isMobile: boolean;
          /**
           * Width
           * @description Viewport width in pixels
           */
          width: number;
      } | null;
      /**
       * Width
       * @description Paper width in inches (overrides format)
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Output
   * @description Return type: 'url' for hosted link, 'buffer' for base64 payload
   * @default url
   * @enum {string}
   */
  output: "url" | "buffer";
  /**
   * Payload
   * @description Custom JSON data passed through and returned in webhook
   * @default null
   */
  payload: {
      [key: string]: unknown;
  } | null;
  /**
   * Url
   * Format: uri
   * @description Publicly accessible web page URL to convert to PDF
   */
  url?: string;
  /**
   * WebhookConfig
   * @description Settings for asynchronous webhook notification.
   * @default null
   */
  webhook: {
      /**
       * Token
       * @description Bearer token for webhook Authorization header
       * @default null
       */
      token: string | null;
      /**
       * Url
       * Format: uri
       * @description Webhook callback endpoint URL
       */
      url: string;
  } | null;
};

/**
 * Type of CLOUDLAYER's CLOUDLAYER_URL_TO_PDF_POST tool output.
 */
type CLOUDLAYER_URL_TO_PDF_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if conversion failed
       * @default null
       */
      errors: string[] | null;
      /**
       * Pdf
       * @description URL or base64 string of the generated PDF, depending on 'output'
       */
      pdf: string;
      /**
       * Request Id
       * @description Unique identifier for this conversion request
       */
      requestId: string;
      /**
       * Success
       * @description Indicates if conversion was accepted
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
 * Type map of all available tool input types for toolkit "CLOUDLAYER".
 */
export type CLOUDLAYER_TOOL_INPUTS = {
  ADD_STORAGE: CLOUDLAYER_ADD_STORAGE_INPUT
  GET_ASSET: CLOUDLAYER_GET_ASSET_INPUT
  GET_STATUS: CLOUDLAYER_GET_STATUS_INPUT
  HTML_TO_IMAGE: CLOUDLAYER_HTML_TO_IMAGE_INPUT
  HTML_TO_PDF: CLOUDLAYER_HTML_TO_PDF_INPUT
  LIST_ASSETS: CLOUDLAYER_LIST_ASSETS_INPUT
  LIST_STORAGE: CLOUDLAYER_LIST_STORAGE_INPUT
  URL_TO_IMAGE_POST: CLOUDLAYER_URL_TO_IMAGE_POST_INPUT
  URL_TO_PDF_POST: CLOUDLAYER_URL_TO_PDF_POST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDLAYER".
 */
export type CLOUDLAYER_TOOL_OUTPUTS = {
  ADD_STORAGE: CLOUDLAYER_ADD_STORAGE_OUTPUT
  GET_ASSET: CLOUDLAYER_GET_ASSET_OUTPUT
  GET_STATUS: CLOUDLAYER_GET_STATUS_OUTPUT
  HTML_TO_IMAGE: CLOUDLAYER_HTML_TO_IMAGE_OUTPUT
  HTML_TO_PDF: CLOUDLAYER_HTML_TO_PDF_OUTPUT
  LIST_ASSETS: CLOUDLAYER_LIST_ASSETS_OUTPUT
  LIST_STORAGE: CLOUDLAYER_LIST_STORAGE_OUTPUT
  URL_TO_IMAGE_POST: CLOUDLAYER_URL_TO_IMAGE_POST_OUTPUT
  URL_TO_PDF_POST: CLOUDLAYER_URL_TO_PDF_POST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDLAYER toolkit.
 */
export const CLOUDLAYER = {
  slug: "cloudlayer",
  tools: {
    /**
     * Tool to add a new user storage configuration. use when you need to attach an external bucket or container for file storage.
     */
    ADD_STORAGE: "CLOUDLAYER_ADD_STORAGE",
    /**
     * Tool to retrieve a specific asset by its id. use when you need to fetch metadata or download url of an existing asset after its generation.
     */
    GET_ASSET: "CLOUDLAYER_GET_ASSET",
    /**
     * Tool to test api reachability. use when checking if the cloudlayer api is available.
     */
    GET_STATUS: "CLOUDLAYER_GET_STATUS",
    /**
     * Tool to convert base64-encoded html to an image. use when you need to render raw html or a url into png, jpeg, or webp after content load.
     */
    HTML_TO_IMAGE: "CLOUDLAYER_HTML_TO_IMAGE",
    /**
     * Tool to convert html or a public url into a pdf document. use when you need programmatic pdf generation from html content.
     */
    HTML_TO_PDF: "CLOUDLAYER_HTML_TO_PDF",
    /**
     * Tool to list the ten most recent assets. use when you need to retrieve your latest cloudlayer assets.
     */
    LIST_ASSETS: "CLOUDLAYER_LIST_ASSETS",
    /**
     * Tool to retrieve a list of all storage configurations. use after authenticating to cloudlayer to view your account's storage settings.
     */
    LIST_STORAGE: "CLOUDLAYER_LIST_STORAGE",
    /**
     * Tool to convert a webpage url to an image. use when dynamic screenshot parameters are needed.
     */
    URL_TO_IMAGE_POST: "CLOUDLAYER_URL_TO_IMAGE_POST",
    /**
     * Tool to convert a url to pdf with full parameter support. use when you need advanced control over paper size, margins, headers/footers, or webhook callbacks.
     */
    URL_TO_PDF_POST: "CLOUDLAYER_URL_TO_PDF_POST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDLAYER".
 */
export type CLOUDLAYER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDLAYER".
 */
export type CLOUDLAYER_TRIGGER_EVENTS = {}
