// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HEYZINE's HEYZINE_CREATE_FLIPBOOK_LINK tool input.
 */
type HEYZINE_CREATE_FLIPBOOK_LINK_INPUT = {
  /**
   * Bg
   * @description Hex background color (e.g., ffffff)
   * @default null
   */
  bg: string | null;
  /**
   * D
   * @description Allow downloading original PDF (1 to allow, 0 to disallow)
   * @default null
   * @enum {string|null}
   */
  d: "1" | "0" | null;
  /**
   * Ds
   * @description Flipbook description
   * @default null
   */
  ds: string | null;
  /**
   * Fs
   * @description Show fullscreen button (1 to show, 0 to hide)
   * @default null
   * @enum {string|null}
   */
  fs: "1" | "0" | null;
  /**
   * K
   * @description Client ID or API key for authentication
   */
  k?: string;
  /**
   * Lg
   * Format: uri
   * @description Logo URL (Standard plan+)
   * @default null
   */
  lg: string | null;
  /**
   * Pdf
   * Format: uri
   * @description Direct URL to PDF/DOCX/PPTX; must be URL-encoded
   */
  pdf?: string;
  /**
   * Pn
   * @description Show previous/next buttons (1 to show, 0 to hide)
   * @default null
   * @enum {string|null}
   */
  pn: "1" | "0" | null;
  /**
   * S
   * @description Flipbook subtitle
   * @default null
   */
  s: string | null;
  /**
   * Sh
   * @description Show share button (1 to show, 0 to hide)
   * @default null
   * @enum {string|null}
   */
  sh: "1" | "0" | null;
  /**
   * St
   * @description Show title/subtitle/description on background (1 to show, 0 to hide)
   * @default null
   * @enum {string|null}
   */
  st: "1" | "0" | null;
  /**
   * T
   * @description Flipbook title
   * @default null
   */
  t: string | null;
  /**
   * Tpl
   * @description Flipbook ID to copy design from (styles only)
   * @default null
   */
  tpl: string | null;
};

/**
 * Type of HEYZINE's HEYZINE_CREATE_FLIPBOOK_LINK tool output.
 */
type HEYZINE_CREATE_FLIPBOOK_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Flipbook Url
       * Format: uri
       * @description URL of the created flipbook redirect
       */
      flipbook_url: string;
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
 * Type of HEYZINE's HEYZINE_CREATE_FLIPBOOK_REST_ASYNC tool input.
 */
type HEYZINE_CREATE_FLIPBOOK_REST_ASYNC_INPUT = {
  /**
   * Background Color
   * @description Hex color for solid background (6-digit, e.g. "000000" for black, "ffffff" for white)
   * @default null
   */
  background_color: string | null;
  /**
   * Client Id
   * @description Client ID for your Heyzine account
   */
  client_id?: string;
  /**
   * Description
   * @description Description for the flipbook and social sharing
   * @default null
   */
  description: string | null;
  /**
   * Download
   * @description Allow downloading the original PDF (true to allow)
   * @default null
   */
  download: boolean | null;
  /**
   * Full Screen
   * @description Show fullscreen button (true to show)
   * @default null
   */
  full_screen: boolean | null;
  /**
   * Logo
   * @description URL of logo to place in the flipbook (Standard plan or higher)
   * @default null
   */
  logo: string | null;
  /**
   * Pdf
   * @description Direct URL to PDF/DOCX/PPTX; no redirects; URL-encoded
   */
  pdf?: string;
  /**
   * Prev Next
   * @description Show previous/next buttons (true to show)
   * @default null
   */
  prev_next: boolean | null;
  /**
   * Private Note
   * @description Internal note never shown to visitors; maps to 'private' in flipbook details
   * @default null
   */
  private_note: string | null;
  /**
   * Share
   * @description Show share button (true to show)
   * @default null
   */
  share: boolean | null;
  /**
   * Show Info
   * @description Show title/subtitle/description overlay (true to show)
   * @default null
   */
  show_info: boolean | null;
  /**
   * Subtitle
   * @description Subtitle for the flipbook and social sharing
   * @default null
   */
  subtitle: string | null;
  /**
   * Tags
   * @description Comma-separated tags for organizing in the admin panel
   * @default null
   */
  tags: string | null;
  /**
   * Template
   * @description Flipbook ID to copy design (logo, effect, background, controls, styles); does not copy access list or interactivity settings
   * @default null
   */
  template: string | null;
  /**
   * Title
   * @description Title for the flipbook and social sharing
   * @default null
   */
  title: string | null;
};

/**
 * Type of HEYZINE's HEYZINE_CREATE_FLIPBOOK_REST_ASYNC tool output.
 */
type HEYZINE_CREATE_FLIPBOOK_REST_ASYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Flipbook identifier (typically ends with .pdf)
       */
      id: string;
      /** Meta */
      meta: {
          /**
           * Aspect Ratio
           * @description Page aspect ratio
           */
          aspect_ratio: number;
          /**
           * Num Pages
           * @description Number of pages in the flipbook
           */
          num_pages: number;
      };
      /**
       * Pdf
       * @description Direct URL to the converted PDF
       */
      pdf: string;
      /**
       * State
       * @description Conversion state
       * @enum {string}
       */
      state: "started" | "processed" | "failed";
      /**
       * Thumbnail
       * @description URL of the flipbook cover image
       */
      thumbnail: string;
      /**
       * Url
       * @description Public URL of the flipbook
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
 * Type of HEYZINE's HEYZINE_CREATE_FLIPBOOK_REST_SYNC tool input.
 */
type HEYZINE_CREATE_FLIPBOOK_REST_SYNC_INPUT = {
  /**
   * Background Color
   * @description Solid hex color without "#" (e.g., "000000" or "ffffff").
   * @default null
   */
  background_color: string | null;
  /**
   * Client Id
   * @description Your Heyzine client identifier as provided in your Heyzine dashboard.
   */
  client_id?: string;
  /**
   * Description
   * @description Description displayed on the flipbook and on social shares.
   * @default null
   */
  description: string | null;
  /**
   * Download
   * @description If true, enables a download button for the original PDF.
   * @default null
   */
  download: boolean | null;
  /**
   * Full Screen
   * @description If true, shows a fullscreen button.
   * @default null
   */
  full_screen: boolean | null;
  /**
   * Logo
   * @description URL of the company logo (available on Standard plan and above).
   * @default null
   */
  logo: string | null;
  /**
   * Pdf
   * @description URL to the PDF/DOCX/PPTX to convert; must be a direct link with no redirects and URL-encoded.
   */
  pdf?: string;
  /**
   * Prev Next
   * @description If true, shows previous/next page buttons.
   * @default null
   */
  prev_next: boolean | null;
  /**
   * Private Note
   * @description Internal note not shown to visitors; corresponds to the flipbook’s ‘private’ field.
   * @default null
   */
  private_note: string | null;
  /**
   * Share
   * @description If true, shows a share button.
   * @default null
   */
  share: boolean | null;
  /**
   * Show Info
   * @description If true, overlays title/subtitle/description on the flipbook background.
   * @default null
   */
  show_info: boolean | null;
  /**
   * Subtitle
   * @description Subtitle displayed on the flipbook and on social shares.
   * @default null
   */
  subtitle: string | null;
  /**
   * Tags
   * @description Comma-separated tags for organizing/filtering (e.g., "catalog,summer").
   * @default null
   */
  tags: string | null;
  /**
   * Template
   * @description Flipbook ID to copy design (logo, effect, background, controls, styles). Access list and interactions are not copied.
   * @default null
   */
  template: string | null;
  /**
   * Title
   * @description Title displayed on the flipbook and on social shares.
   * @default null
   */
  title: string | null;
};

/**
 * Type of HEYZINE's HEYZINE_CREATE_FLIPBOOK_REST_SYNC tool output.
 */
type HEYZINE_CREATE_FLIPBOOK_REST_SYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the generated flipbook.
       */
      id: string;
      /** Meta */
      meta: {
          /**
           * Aspect Ratio
           * @description Page aspect ratio (width/height).
           */
          aspect_ratio: number;
          /**
           * Num Pages
           * @description Total number of pages in the flipbook.
           */
          num_pages: number;
      };
      /**
       * Pdf
       * @description URL of the converted PDF file.
       */
      pdf: string;
      /**
       * Thumbnail
       * @description URL of the flipbook cover image.
       */
      thumbnail: string;
      /**
       * Url
       * @description Public flipbook URL.
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
 * Type of HEYZINE's HEYZINE_DELETE_FLIPBOOK tool input.
 */
type HEYZINE_DELETE_FLIPBOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the flipbook to delete
   */
  id?: string;
};

/**
 * Type of HEYZINE's HEYZINE_DELETE_FLIPBOOK tool output.
 */
type HEYZINE_DELETE_FLIPBOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Numeric status code returned by the API
       */
      code: number;
      /**
       * Msg
       * @description Human-readable message from the API
       */
      msg: string;
      /**
       * Success
       * @description Indicates whether the delete operation was successful
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
 * Type of HEYZINE's HEYZINE_GET_API_LIMITS tool input.
 */
type HEYZINE_GET_API_LIMITS_INPUT = object;

/**
 * Type of HEYZINE's HEYZINE_GET_API_LIMITS tool output.
 */
type HEYZINE_GET_API_LIMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limits
       * @description JSON object containing API limits information
       */
      limits: {
          [key: string]: unknown;
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
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_EMBED_CODE tool input.
 */
type HEYZINE_GET_FLIPBOOK_EMBED_CODE_INPUT = {
  /**
   * Flipbook Id
   * @description Identifier of the flipbook to retrieve embed code for
   */
  flipbook_id?: string;
  /**
   * Format
   * @description Response format (json or xml)
   * @default null
   * @enum {string|null}
   */
  format: "json" | "xml" | null;
  /**
   * Maxheight
   * @description Maximum height of returned embed, in pixels
   * @default null
   */
  maxheight: number | null;
  /**
   * Maxwidth
   * @description Maximum width of returned embed, in pixels
   * @default null
   */
  maxwidth: number | null;
};

/**
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_EMBED_CODE tool output.
 */
type HEYZINE_GET_FLIPBOOK_EMBED_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Height
       * @description Height of the embed, in pixels
       */
      height: number;
      /**
       * Html
       * @description Iframe HTML embed code for the flipbook
       */
      html: string;
      /**
       * Provider Name
       * @description Provider name (Heyzine)
       */
      provider_name: string;
      /**
       * Provider Url
       * Format: uri
       * @description Provider URL
       */
      provider_url: string;
      /**
       * Thumbnail Height
       * @description Thumbnail height, in pixels
       */
      thumbnail_height: number;
      /**
       * Thumbnail Url
       * Format: uri
       * @description URL to a thumbnail image
       */
      thumbnail_url: string;
      /**
       * Thumbnail Width
       * @description Thumbnail width, in pixels
       */
      thumbnail_width: number;
      /**
       * Title
       * @description Flipbook title
       */
      title: string;
      /**
       * Type
       * @description oEmbed type (e.g., 'rich')
       */
      type: string;
      /**
       * Version
       * @description oEmbed spec version (e.g., '1.0')
       */
      version: string;
      /**
       * Width
       * @description Width of the embed, in pixels
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
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_ID_TOOL tool input.
 */
type HEYZINE_GET_FLIPBOOK_ID_TOOL_INPUT = {
  /**
   * Flipbook Id
   * @description Identifier of the flipbook to retrieve ID tool HTML for
   */
  flipbook_id?: string;
};

/**
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_ID_TOOL tool output.
 */
type HEYZINE_GET_FLIPBOOK_ID_TOOL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html
       * @description HTML content of the Flipbook ID tool page
       */
      html: string;
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
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_LIST tool input.
 */
type HEYZINE_GET_FLIPBOOK_LIST_INPUT = {
  /**
   * Limit
   * @description Optional page size limit (if supported by API)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Optional page number for pagination (if supported by API)
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Optional free-text search filter (if supported by API)
   * @default null
   */
  search: string | null;
  /**
   * Tag
   * @description Optional tag filter (if supported by API)
   * @default null
   */
  tag: string | null;
};

/**
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_LIST tool output.
 */
type HEYZINE_GET_FLIPBOOK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Flipbooks
       * @description Array of flipbook metadata objects
       */
      flipbooks: {
          /**
           * Date
           * @description ISO 8601 creation date-time of the flipbook
           */
          date: string;
          /**
           * Description
           * @description Description of the flipbook
           */
          description: string;
          /**
           * Id
           * @description Flipbook identifier
           */
          id: string;
          /**
           * Links
           * @description All related URLs for this flipbook
           */
          links: {
              /**
               * Base
               * Format: uri
               * @description Heyzine base viewer URL for the flipbook
               */
              base: string;
              /**
               * Custom
               * Format: uri
               * @description Custom-domain viewer URL for the flipbook
               */
              custom: string;
              /**
               * Pdf
               * Format: uri
               * @description Original PDF file URL for the flipbook
               */
              pdf: string;
              /**
               * Thumbnail
               * Format: uri
               * @description Thumbnail image URL for the flipbook
               */
              thumbnail: string;
          };
          /**
           * Pages
           * @description Number of pages in the flipbook
           */
          pages: number;
          /**
           * Private
           * @description Internal management note of the flipbook
           */
          private: string;
          /**
           * Size
           * @description Size metric of the flipbook as reported by Heyzine
           */
          size: number;
          /**
           * Subtitle
           * @description Subtitle of the flipbook
           */
          subtitle: string;
          /**
           * Title
           * @description Title of the flipbook
           */
          title: string;
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
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA tool input.
 */
type HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA_INPUT = {
  /**
   * Flipbook Id
   * @description Identifier of the flipbook to retrieve social metadata for
   */
  flipbook_id?: string;
};

/**
 * Type of HEYZINE's HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA tool output.
 */
type HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description used for social sharing
       * @default null
       */
      description: string | null;
      /**
       * Thumbnail
       * Format: uri
       * @description URL of the image used as a thumbnail for social sharing
       * @default null
       */
      thumbnail: string | null;
      /**
       * Title
       * @description Title used for social sharing
       * @default null
       */
      title: string | null;
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
 * Type of HEYZINE's HEYZINE_GET_J_QUERY_PLUGIN tool input.
 */
type HEYZINE_GET_J_QUERY_PLUGIN_INPUT = object;

/**
 * Type of HEYZINE's HEYZINE_GET_J_QUERY_PLUGIN tool output.
 */
type HEYZINE_GET_J_QUERY_PLUGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Initialization Snippet
       * @description JavaScript snippet to initialize the plugin on a selector with your Heyzine Client ID
       */
      initialization_snippet: string;
      /**
       * Plugin Url
       * @description URL to the Heyzine jQuery plugin script
       */
      plugin_url: string;
      /**
       * Script Tag
       * @description HTML <script> tag to include the Heyzine jQuery plugin
       */
      script_tag: string;
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
 * Type of HEYZINE's HEYZINE_GET_O_EMBED_API tool input.
 */
type HEYZINE_GET_O_EMBED_API_INPUT = {
  /**
   * Format
   * @description Response format; standard oEmbed parameter
   * @default null
   * @constant
   */
  format: "json";
  /**
   * Maxheight
   * @description Maximum height for the embedded resource
   * @default null
   */
  maxheight: number | null;
  /**
   * Maxwidth
   * @description Maximum width for the embedded resource
   * @default null
   */
  maxwidth: number | null;
  /**
   * Url
   * Format: uri
   * @description Flipbook URL to fetch oEmbed data for
   */
  url?: string;
};

/**
 * Type of HEYZINE's HEYZINE_GET_O_EMBED_API tool output.
 */
type HEYZINE_GET_O_EMBED_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Height
       * @description Height of the embedded resource
       */
      height: number;
      /**
       * Html
       * @description Embed HTML code (iframe)
       */
      html: string;
      /**
       * Provider Name
       * @description Provider name (e.g., 'Heyzine')
       */
      provider_name: string;
      /**
       * Provider Url
       * Format: uri
       * @description Provider URL
       */
      provider_url: string;
      /**
       * Thumbnail Height
       * @description Thumbnail height
       */
      thumbnail_height: number;
      /**
       * Thumbnail Url
       * Format: uri
       * @description Thumbnail image URL
       */
      thumbnail_url: string;
      /**
       * Thumbnail Width
       * @description Thumbnail width
       */
      thumbnail_width: number;
      /**
       * Title
       * @description Flipbook title
       */
      title: string;
      /**
       * Type
       * @description oEmbed type (e.g., 'rich')
       */
      type: string;
      /**
       * Version
       * @description oEmbed version (e.g., '1.0')
       */
      version: string;
      /**
       * Width
       * @description Width of the embedded resource
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
 * Type of HEYZINE's HEYZINE_HEYZINE_WEBHOOKS tool input.
 */
type HEYZINE_HEYZINE_WEBHOOKS_INPUT = {
  /**
   * Data
   * @description Webhook event payload container
   */
  data?: {
      /**
       * Date
       * @description UTC timestamp when the webhook was sent, ISO 8601 format
       */
      date: string;
      /**
       * Id Webhook
       * @description Unique identifier for this webhook event
       */
      id_webhook: string;
      /**
       * Leads
       * @description Array of one or more leads collected in this event
       */
      leads: {
          /**
           * Answer
           * @description List of all question/answer objects for the form
           */
          answer: {
              /**
               * Label
               * @description Question text as presented in the form
               */
              label: string;
              /**
               * Value
               * @description Lead's answer to this question
               */
              value: string;
          }[];
          /**
           * Date
           * @description UTC timestamp when this lead was submitted, ISO 8601 format
           */
          date: string;
          /**
           * First Value
           * @description Answer to the first form field
           */
          first_value: string;
          /**
           * Flipbook
           * @description Information about the flipbook
           */
          flipbook: {
              /**
               * Id
               * @description Identifier of the flipbook containing the form
               */
              id: string;
              /**
               * Title
               * @description Flipbook title as set in publish settings
               */
              title: string;
          };
          /**
           * Second Value
           * @description Answer to the second form field
           */
          second_value: string;
      }[];
  };
};

/**
 * Type of HEYZINE's HEYZINE_HEYZINE_WEBHOOKS tool output.
 */
type HEYZINE_HEYZINE_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Processed Webhook Id
       * @description Echoes back the received webhook identifier
       */
      processed_webhook_id: string;
      /**
       * Status
       * @description Processing status
       */
      status: string;
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
 * Type of HEYZINE's HEYZINE_SETUP_WEBHOOKS tool input.
 */
type HEYZINE_SETUP_WEBHOOKS_INPUT = {
  /**
   * Endpoint Url
   * Format: uri
   * @description External URL to receive Heyzine webhook notifications.
   */
  endpoint_url?: string;
  /**
   * Event
   * @description Type of event to subscribe to. Currently only 'leads' event is supported.
   * @constant
   */
  event?: "leads";
  /**
   * Frequency
   * @description Frequency in minutes at which Heyzine will send webhook events.
   */
  frequency?: number;
};

/**
 * Type of HEYZINE's HEYZINE_SETUP_WEBHOOKS tool output.
 */
type HEYZINE_SETUP_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Information about the webhook setup validation status.
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
 * Type of HEYZINE's HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST tool input.
 */
type HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST_INPUT = {
  /**
   * Access List
   * @description List of access entries to set on the flipbook
   */
  access_list?: {
      /**
       * Access Type
       * @description Type of access granted to the user
       * @enum {string}
       */
      access_type: "user_pass" | "google" | "pass_only" | "otp" | "email_link" | "send_code";
      /**
       * Password
       * @description Password for the user; required when access_type is user_pass, pass_only, or otp
       * @default null
       */
      password: string | null;
      /**
       * User
       * @description Username or email of the user to grant access; required for user_pass, google, email_link, send_code
       * @default null
       */
      user: string | null;
  }[];
  /**
   * Flipbook Id
   * @description Identifier of the flipbook to update access for
   */
  flipbook_id?: string;
};

/**
 * Type of HEYZINE's HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST tool output.
 */
type HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Status-like code returned by Heyzine API
       */
      code: number;
      /**
       * Msg
       * @description Human-readable message from the API
       */
      msg: string;
      /**
       * Success
       * @description True if the update operation succeeded
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
 * Type of HEYZINE's HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION tool input.
 */
type HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION_INPUT = {
  /**
   * Mode
   * @description Protection mode: 'users' for user-specific credentials, 'everyone' for a single shared password, or 'disabled' to turn off protection
   * @enum {string}
   */
  mode?: "users" | "everyone" | "disabled";
  /**
   * Name
   * @description Identifier of the flipbook to update password protection for
   */
  name?: string;
  /**
   * Password
   * @description Shared password for all visitors; required when mode is 'everyone'
   * @default null
   */
  password: string | null;
  /**
   * Text Password
   * @description Custom text displayed on the password input prompt
   * @default null
   */
  text_password: string | null;
  /**
   * Text User
   * @description Custom text displayed on the username input prompt
   * @default null
   */
  text_user: string | null;
};

/**
 * Type of HEYZINE's HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION tool output.
 */
type HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Numeric status code returned by the API
       */
      code: number;
      /**
       * Msg
       * @description Human-readable message from the API
       */
      msg: string;
      /**
       * Success
       * @description Indicates whether the update operation succeeded
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
 * Type of HEYZINE's HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA tool input.
 */
type HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA_INPUT = {
  /**
   * Description
   * @description Description used for social sharing
   * @default null
   */
  description: string | null;
  /**
   * Flipbook Id
   * @description Identifier of the flipbook to update social metadata for
   */
  flipbook_id?: string;
  /**
   * Thumbnail
   * Format: uri
   * @description URL of the image used as a thumbnail for social sharing
   * @default null
   */
  thumbnail: string | null;
  /**
   * Title
   * @description Title used for social sharing
   * @default null
   */
  title: string | null;
};

/**
 * Type of HEYZINE's HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA tool output.
 */
type HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the update operation was successful
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
 * Type of HEYZINE's HEYZINE_WEBHOOKS_LEADS tool input.
 */
type HEYZINE_WEBHOOKS_LEADS_INPUT = {
  /**
   * Data
   * @description Webhook event payload container
   */
  data?: {
      /**
       * Date
       * @description UTC timestamp when the webhook was sent, ISO 8601 format
       */
      date: string;
      /**
       * Id Webhook
       * @description Unique identifier for this webhook event
       */
      id_webhook: string;
      /**
       * Leads
       * @description Array of one or more leads collected in this event
       */
      leads: {
          /**
           * Answer
           * @description List of all question/answer objects for the form
           */
          answer: {
              /**
               * Label
               * @description Question text as presented in the form
               */
              label: string;
              /**
               * Value
               * @description Lead's answer to this question
               */
              value: string;
          }[];
          /**
           * Date
           * @description UTC timestamp when this lead was submitted, ISO 8601 format
           */
          date: string;
          /**
           * First Value
           * @description Answer to the first form field
           */
          first_value: string;
          /**
           * Flipbook
           * @description Information about the flipbook
           */
          flipbook: {
              /**
               * Id
               * @description Identifier of the flipbook containing the form
               */
              id: string;
              /**
               * Title
               * @description Flipbook title as set in publish settings
               */
              title: string;
          };
          /**
           * Second Value
           * @description Answer to the second form field
           */
          second_value: string;
      }[];
  };
};

/**
 * Type of HEYZINE's HEYZINE_WEBHOOKS_LEADS tool output.
 */
type HEYZINE_WEBHOOKS_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Processed Webhook Id
       * @description Echoes back the received webhook identifier
       */
      processed_webhook_id: string;
      /**
       * Status
       * @description Processing status
       */
      status: string;
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
 * Type map of all available tool input types for toolkit "HEYZINE".
 */
export type HEYZINE_TOOL_INPUTS = {
  CREATE_FLIPBOOK_LINK: HEYZINE_CREATE_FLIPBOOK_LINK_INPUT
  CREATE_FLIPBOOK_REST_ASYNC: HEYZINE_CREATE_FLIPBOOK_REST_ASYNC_INPUT
  CREATE_FLIPBOOK_REST_SYNC: HEYZINE_CREATE_FLIPBOOK_REST_SYNC_INPUT
  DELETE_FLIPBOOK: HEYZINE_DELETE_FLIPBOOK_INPUT
  GET_API_LIMITS: HEYZINE_GET_API_LIMITS_INPUT
  GET_FLIPBOOK_EMBED_CODE: HEYZINE_GET_FLIPBOOK_EMBED_CODE_INPUT
  GET_FLIPBOOK_ID_TOOL: HEYZINE_GET_FLIPBOOK_ID_TOOL_INPUT
  GET_FLIPBOOK_LIST: HEYZINE_GET_FLIPBOOK_LIST_INPUT
  GET_FLIPBOOK_SOCIAL_METADATA: HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA_INPUT
  GET_J_QUERY_PLUGIN: HEYZINE_GET_J_QUERY_PLUGIN_INPUT
  GET_O_EMBED_API: HEYZINE_GET_O_EMBED_API_INPUT
  HEYZINE_WEBHOOKS: HEYZINE_HEYZINE_WEBHOOKS_INPUT
  SETUP_WEBHOOKS: HEYZINE_SETUP_WEBHOOKS_INPUT
  UPDATE_FLIPBOOK_ACCESS_LIST: HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST_INPUT
  UPDATE_FLIPBOOK_PASSWORD_PROTECTION: HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION_INPUT
  UPDATE_FLIPBOOK_SOCIAL_METADATA: HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA_INPUT
  WEBHOOKS_LEADS: HEYZINE_WEBHOOKS_LEADS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HEYZINE".
 */
export type HEYZINE_TOOL_OUTPUTS = {
  CREATE_FLIPBOOK_LINK: HEYZINE_CREATE_FLIPBOOK_LINK_OUTPUT
  CREATE_FLIPBOOK_REST_ASYNC: HEYZINE_CREATE_FLIPBOOK_REST_ASYNC_OUTPUT
  CREATE_FLIPBOOK_REST_SYNC: HEYZINE_CREATE_FLIPBOOK_REST_SYNC_OUTPUT
  DELETE_FLIPBOOK: HEYZINE_DELETE_FLIPBOOK_OUTPUT
  GET_API_LIMITS: HEYZINE_GET_API_LIMITS_OUTPUT
  GET_FLIPBOOK_EMBED_CODE: HEYZINE_GET_FLIPBOOK_EMBED_CODE_OUTPUT
  GET_FLIPBOOK_ID_TOOL: HEYZINE_GET_FLIPBOOK_ID_TOOL_OUTPUT
  GET_FLIPBOOK_LIST: HEYZINE_GET_FLIPBOOK_LIST_OUTPUT
  GET_FLIPBOOK_SOCIAL_METADATA: HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA_OUTPUT
  GET_J_QUERY_PLUGIN: HEYZINE_GET_J_QUERY_PLUGIN_OUTPUT
  GET_O_EMBED_API: HEYZINE_GET_O_EMBED_API_OUTPUT
  HEYZINE_WEBHOOKS: HEYZINE_HEYZINE_WEBHOOKS_OUTPUT
  SETUP_WEBHOOKS: HEYZINE_SETUP_WEBHOOKS_OUTPUT
  UPDATE_FLIPBOOK_ACCESS_LIST: HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST_OUTPUT
  UPDATE_FLIPBOOK_PASSWORD_PROTECTION: HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION_OUTPUT
  UPDATE_FLIPBOOK_SOCIAL_METADATA: HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA_OUTPUT
  WEBHOOKS_LEADS: HEYZINE_WEBHOOKS_LEADS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HEYZINE toolkit.
 */
export const HEYZINE = {
  slug: "heyzine",
  tools: {
    /**
     * Tool to create a direct flipbook link. Use when you have a document URL and want to convert it to a flipbook.
     */
    CREATE_FLIPBOOK_LINK: "HEYZINE_CREATE_FLIPBOOK_LINK",
    /**
     * Tool to create a flipbook asynchronously. Use when converting large documents off-thread; poll for updates on conversion state.
     */
    CREATE_FLIPBOOK_REST_ASYNC: "HEYZINE_CREATE_FLIPBOOK_REST_ASYNC",
    /**
     * Tool to convert a PDF, DOCX, or PPTX into a flipbook synchronously via REST API. Use when you need immediate flipbook URLs from a direct file link.
     */
    CREATE_FLIPBOOK_REST_SYNC: "HEYZINE_CREATE_FLIPBOOK_REST_SYNC",
    /**
     * Tool to delete a flipbook. Use when you need to permanently remove an unwanted flipbook.
     */
    DELETE_FLIPBOOK: "HEYZINE_DELETE_FLIPBOOK",
    /**
     * Tool to retrieve API rate limits. Use when you need to check your current API usage and limits.
     */
    GET_API_LIMITS: "HEYZINE_GET_API_LIMITS",
    /**
     * Tool to retrieve HTML embed code for a flipbook. Use when you have a flipbook ID and need the <iframe> snippet to embed in a website.
     */
    GET_FLIPBOOK_EMBED_CODE: "HEYZINE_GET_FLIPBOOK_EMBED_CODE",
    /**
     * Tool to retrieve HTML for Flipbook ID tool. Use when you need to fetch the ID input tool page HTML for a specific flipbook.
     */
    GET_FLIPBOOK_ID_TOOL: "HEYZINE_GET_FLIPBOOK_ID_TOOL",
    /**
     * Tool to retrieve all flipbooks. Use when you need to list every flipbook for the authenticated account.
     */
    GET_FLIPBOOK_LIST: "HEYZINE_GET_FLIPBOOK_LIST",
    /**
     * Tool to retrieve social metadata for a specific flipbook. Use after configuring social sharing to fetch title, description, and thumbnail.
     */
    GET_FLIPBOOK_SOCIAL_METADATA: "HEYZINE_GET_FLIPBOOK_SOCIAL_METADATA",
    /**
     * Tool to retrieve the Heyzine jQuery plugin script URL and usage snippet. Use when you need to integrate Heyzine flipbooks via jQuery on your website.
     */
    GET_J_QUERY_PLUGIN: "HEYZINE_GET_J_QUERY_PLUGIN",
    /**
     * Tool to retrieve oEmbed data for a Heyzine flipbook. Use when you have a flipbook URL and need embed metadata and HTML.
     */
    GET_O_EMBED_API: "HEYZINE_GET_O_EMBED_API",
    /**
     * Tool to receive Heyzine webhook events for collected leads. Use after configuring your Heyzine account Webhooks URL.
     */
    HEYZINE_WEBHOOKS: "HEYZINE_HEYZINE_WEBHOOKS",
    /**
     * Helper tool to validate prerequisites for Heyzine webhooks. Heyzine does not expose an API to programmatically configure webhooks; this action verifies API connectivity and returns clear guidance to complete configuration in the Heyzine UI.
     */
    SETUP_WEBHOOKS: "HEYZINE_SETUP_WEBHOOKS",
    /**
     * Tool to update the access list of a flipbook. Use when replacing all user access permissions in bulk.
     */
    UPDATE_FLIPBOOK_ACCESS_LIST: "HEYZINE_UPDATE_FLIPBOOK_ACCESS_LIST",
    /**
     * Tool to update flipbook password protection settings. Use when you need to change or disable password protection for a flipbook.
     */
    UPDATE_FLIPBOOK_PASSWORD_PROTECTION: "HEYZINE_UPDATE_FLIPBOOK_PASSWORD_PROTECTION",
    /**
     * Tool to update a flipbook's social metadata. Use when you need to change title, description, or thumbnail for social sharing.
     */
    UPDATE_FLIPBOOK_SOCIAL_METADATA: "HEYZINE_UPDATE_FLIPBOOK_SOCIAL_METADATA",
    /**
     * Tool to receive webhook events when new leads are collected on a flipbook form. Use after configuring your Heyzine account Webhooks > Leads URL.
     */
    WEBHOOKS_LEADS: "HEYZINE_WEBHOOKS_LEADS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HEYZINE".
 */
export type HEYZINE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HEYZINE".
 */
export type HEYZINE_TRIGGER_EVENTS = {}
