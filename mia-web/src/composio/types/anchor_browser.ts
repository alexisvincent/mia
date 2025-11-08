// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_CREATE_PROFILE tool input.
 */
type ANCHOR_BROWSER_CREATE_PROFILE_INPUT = {
  /**
   * Dedicated Sticky Ip
   * @description Whether to use a dedicated sticky IP. Defaults to false.
   * @default false
   */
  dedicated_sticky_ip: boolean | null;
  /**
   * Description
   * @description A description for the profile.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The name of the profile.
   */
  name?: string;
  /**
   * Session Id
   * Format: uuid
   * @description The browser session ID. Required if source is 'session'.
   * @default null
   */
  session_id: unknown;
  /**
   * Source
   * @description The source of the profile data. Only 'session' is supported.
   * @constant
   */
  source?: "session";
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_CREATE_PROFILE tool output.
 */
type ANCHOR_BROWSER_CREATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response payload containing create profile status.
   */
  data?: {
      /**
       * Status
       * @description Result status; 'success' indicates the profile was created.
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_DELETE_PROFILE tool input.
 */
type ANCHOR_BROWSER_DELETE_PROFILE_INPUT = {
  /**
   * Name
   * @description The unique name (ID) of the browser profile to delete.
   */
  name?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_DELETE_PROFILE tool output.
 */
type ANCHOR_BROWSER_DELETE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response payload containing delete status.
   */
  data?: {
      /**
       * Status
       * @description Indicates if the profile deletion was successful (e.g., 'success').
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_END_ALL_SESSIONS tool input.
 */
type ANCHOR_BROWSER_END_ALL_SESSIONS_INPUT = object;

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_END_ALL_SESSIONS tool output.
 */
type ANCHOR_BROWSER_END_ALL_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ended Sessions Count
       * @description Total number of sessions that were ended
       */
      ended_sessions_count: number;
      /**
       * Message
       * @description Informational message about the operation result
       */
      message: string;
      /**
       * Success
       * @description Indicates if all sessions ended successfully
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_END_BROWSER_SESSION tool input.
 */
type ANCHOR_BROWSER_END_BROWSER_SESSION_INPUT = {
  /**
   * Session Id
   * @description Unique identifier for the browser session to end.
   */
  session_id?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_END_BROWSER_SESSION tool output.
 */
type ANCHOR_BROWSER_END_BROWSER_SESSION_OUTPUT = {
  /**
   * Data
   * @description Response data from end session API
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_GET_PROFILE tool input.
 */
type ANCHOR_BROWSER_GET_PROFILE_INPUT = {
  /**
   * Name
   * @description The unique name (ID) of the browser profile to retrieve.
   */
  name?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_GET_PROFILE tool output.
 */
type ANCHOR_BROWSER_GET_PROFILE_OUTPUT = {
  /**
   * Data
   * @description The profile data object.
   */
  data?: {
      /**
       * Created At
       * @description The ISO 8601 timestamp when the profile was created.
       */
      created_at: string;
      /**
       * Description
       * @description A description of the profile.
       */
      description: string;
      /**
       * Name
       * @description The name of the profile.
       */
      name: string;
      /**
       * Session Id
       * @description The session ID associated with the profile.
       */
      session_id: string;
      /**
       * Source
       * @description The source of the profile data.
       */
      source: string;
      /**
       * Status
       * @description The status of the profile.
       */
      status: string;
      /**
       * Store Cache
       * @description Indicates whether the session cache should be saved when the session ends.
       */
      store_cache: boolean;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_GET_WEBPAGE_CONTENT tool input.
 */
type ANCHOR_BROWSER_GET_WEBPAGE_CONTENT_INPUT = {
  /**
   * Format
   * @description Desired format of the returned content.
   * @default markdown
   * @enum {string}
   */
  format: "html" | "markdown";
  /**
   * Session Id
   * @description Optional browser session identifier. If provided, the tool will run within that session.
   * @default null
   */
  sessionId: string | null;
  /**
   * Url
   * @description The URL of the webpage to fetch content from. If omitted, fetches the current page in session.
   * @default null
   */
  url: string | null;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_GET_WEBPAGE_CONTENT tool output.
 */
type ANCHOR_BROWSER_GET_WEBPAGE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Rendered webpage content in the specified format.
       */
      content: string;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_AGENT_RESOURCES tool input.
 */
type ANCHOR_BROWSER_LIST_AGENT_RESOURCES_INPUT = {
  /**
   * Session Id
   * @description The ID of the browser session to retrieve agent resources for.
   */
  session_id?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_AGENT_RESOURCES tool output.
 */
type ANCHOR_BROWSER_LIST_AGENT_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description Container for agent resources list data.
   */
  data?: {
      /**
       * Files
       * @description List of agent resource files associated with the session.
       */
      files: {
          /**
           * Last Modified
           * @description Last modified timestamp in ISO 8601 format.
           */
          lastModified: string;
          /**
           * Name
           * @description Name of the file.
           */
          name: string;
          /**
           * Size
           * @description Size of the file in bytes.
           */
          size: number;
          /**
           * Type
           * @description File extension.
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS tool input.
 */
type ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS_INPUT = object;

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS tool output.
 */
type ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS_OUTPUT = {
  /**
   * Data
   * @description Container for session status data
   */
  data?: {
      /**
       * Count
       * @description Total number of browser sessions
       */
      count: number;
      /**
       * Items
       * @description List of session status objects
       */
      items: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the session was created
           */
          created_at: string;
          /**
           * Session Id
           * @description Unique identifier for the browser session
           */
          session_id: string;
          /**
           * Status
           * @description Current state of the browser session (e.g., running, stopped)
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_EXTENSIONS tool input.
 */
type ANCHOR_BROWSER_LIST_EXTENSIONS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (must be >=1).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (1-100).
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_EXTENSIONS tool output.
 */
type ANCHOR_BROWSER_LIST_EXTENSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extensions
       * @description List of browser extensions for the authenticated user.
       */
      extensions: {
          /**
           * Enabled
           * @description Whether the extension is currently enabled.
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the extension.
           */
          id: string;
          /**
           * Name
           * @description Display name of the extension.
           */
          name: string;
      }[];
      /**
       * Page
       * @description Current page number in the paginated response.
       */
      page: number;
      /**
       * Page Size
       * @description Number of items returned per page.
       */
      page_size: number;
      /**
       * Total
       * @description Total number of extensions available.
       */
      total: number;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_PROFILES tool input.
 */
type ANCHOR_BROWSER_LIST_PROFILES_INPUT = object;

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_PROFILES tool output.
 */
type ANCHOR_BROWSER_LIST_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Container for profile list data
   */
  data?: {
      /**
       * Count
       * @description Total number of available profiles
       */
      count: number;
      /**
       * Items
       * @description List of user profiles
       */
      items: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the profile was created
           */
          created_at: string;
          /**
           * Description
           * @description User-provided description of the profile
           */
          description: string;
          /**
           * Name
           * @description Unique name of the browser profile
           */
          name: string;
          /**
           * Session Id
           * @description UUID of the browser session this profile belongs to
           */
          session_id: string;
          /**
           * Source
           * @description Origin of this profile; currently always 'session'
           */
          source: string;
          /**
           * Status
           * @description Current status of the profile (e.g., active)
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_SESSIONS tool input.
 */
type ANCHOR_BROWSER_LIST_SESSIONS_INPUT = object;

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_SESSIONS tool output.
 */
type ANCHOR_BROWSER_LIST_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sessions
       * @description List of browser session objects.
       */
      sessions: {
          /**
           * Id
           * @description Unique identifier for the session.
           */
          id: string;
          /**
           * Last Active
           * @description ISO 8601 timestamp of the last activity.
           */
          last_active: string;
          /**
           * Started At
           * @description ISO 8601 timestamp when the session started.
           */
          started_at: string;
          /**
           * Status
           * @description Current status of the session (e.g., 'active', 'inactive').
           */
          status: string;
          /**
           * User
           * @description Username or user ID associated with the session.
           */
          user: string;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_SESSION_RECORDINGS tool input.
 */
type ANCHOR_BROWSER_LIST_SESSION_RECORDINGS_INPUT = {
  /**
   * Session Id
   * @description The ID of the browser session to retrieve recordings for.
   */
  session_id?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_LIST_SESSION_RECORDINGS tool output.
 */
type ANCHOR_BROWSER_LIST_SESSION_RECORDINGS_OUTPUT = {
  /**
   * Data
   * @description Container for session recordings data.
   */
  data?: {
      /**
       * Count
       * @description Total number of recordings available for this session.
       */
      count: number;
      /**
       * Items
       * @description List of session recording metadata objects.
       */
      items: {
          /**
           * Created At
           * @description Timestamp when the recording was created (ISO 8601).
           */
          created_at: string;
          /**
           * Duration
           * @description Duration of the recording (e.g., ISO 8601 or HH:MM:SS).
           */
          duration: string;
          /**
           * File Link
           * @description URL to download the recording file.
           */
          file_link: string;
          /**
           * Id
           * @description Unique identifier for this recording.
           */
          id: string;
          /**
           * Is Primary
           * @description Whether this is the primary video stream.
           */
          is_primary: boolean;
          /**
           * Size
           * @description Size of the recording file in bytes.
           */
          size: number;
          /**
           * Suggested File Name
           * @description Suggested filename for saving the recording.
           */
          suggested_file_name: string;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_SCREENSHOT_WEBPAGE tool input.
 */
type ANCHOR_BROWSER_SCREENSHOT_WEBPAGE_INPUT = {
  /**
   * Capture Full Height
   * @description Capture full document height instead of only the viewport.
   * @default false
   */
  capture_full_height: boolean;
  /**
   * Height
   * @description Viewport height in pixels. Must be non-negative.
   */
  height?: number;
  /**
   * Image Quality
   * @description Image quality percentage (0-100).
   */
  image_quality?: number;
  /**
   * S3 Target Address
   * Format: uri
   * @description Pre-signed S3 URL to upload the screenshot; if omitted, PNG is returned in response.
   * @default null
   */
  s3_target_address: string | null;
  /**
   * Scroll All Content
   * @description Scroll through the entire page to load dynamic content.
   * @default false
   */
  scroll_all_content: boolean;
  /**
   * Session Id
   * @description Existing browser session ID. If provided, capture runs in that session.
   * @default null
   */
  sessionId: string | null;
  /**
   * Url
   * Format: uri
   * @description Fully qualified URL of the webpage to capture.
   */
  url?: string;
  /**
   * Wait
   * @description Time in milliseconds to wait after page load before capture.
   */
  wait?: number;
  /**
   * Width
   * @description Viewport width in pixels. Must be non-negative.
   */
  width?: number;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_SCREENSHOT_WEBPAGE tool output.
 */
type ANCHOR_BROWSER_SCREENSHOT_WEBPAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary PNG image bytes of the screenshot.
       */
      content: string;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_SIGNAL_EVENT tool input.
 */
type ANCHOR_BROWSER_SIGNAL_EVENT_INPUT = {
  /**
   * Data
   * @description The JSON payload to send with the event.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Event Name
   * @description The name of the event to signal.
   */
  event_name?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_SIGNAL_EVENT tool output.
 */
type ANCHOR_BROWSER_SIGNAL_EVENT_OUTPUT = {
  /**
   * Data
   * @description Response payload containing event signaling status.
   */
  data?: {
      /**
       * Status
       * @description Indicates the outcome of the operation, e.g., 'success'.
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_START_BROWSER_SESSION tool input.
 */
type ANCHOR_BROWSER_START_BROWSER_SESSION_INPUT = {
  /**
   * Browser
   * @description Browser-specific configurations
   */
  browser?: {
      /**
       * Adblock
       * @description Ad-blocking toggle
       */
      adblock: {
          /**
           * Active
           * @description Toggle this browser feature on or off
           */
          active: boolean;
      };
      /**
       * Captcha Solver
       * @description Captcha solver toggle
       */
      captcha_solver: {
          /**
           * Active
           * @description Toggle this browser feature on or off
           */
          active: boolean;
      };
      /**
       * Extensions
       * @description List of extension IDs to load (must be uploaded beforehand)
       * @default null
       */
      extensions: string[] | null;
      /**
       * Headless
       * @description Headless mode toggle
       */
      headless: {
          /**
           * Active
           * @description Toggle this browser feature on or off
           */
          active: boolean;
      };
      /**
       * P2P Download
       * @description Peer-to-peer download capture toggle
       */
      p2p_download: {
          /**
           * Active
           * @description Toggle this browser feature on or off
           */
          active: boolean;
      };
      /**
       * Popup Blocker
       * @description Popup blocker toggle
       */
      popup_blocker: {
          /**
           * Active
           * @description Toggle this browser feature on or off
           */
          active: boolean;
      };
      /**
       * Profile
       * @description Browser profile settings
       */
      profile: {
          /**
           * Name
           * @description Profile name to load or create
           */
          name: string;
          /**
           * Persist
           * @description Whether to save this profile for future sessions
           */
          persist: boolean;
      };
      /**
       * Viewport
       * @description Viewport dimensions for the browser
       */
      viewport: {
          /**
           * Height
           * @description Viewport height in pixels (>= 0)
           */
          height: number;
          /**
           * Width
           * @description Viewport width in pixels (>= 0)
           */
          width: number;
      };
  };
  /**
   * Session
   * @description Session-specific configurations
   */
  session?: {
      /**
       * Live View
       * @description Configuration for live viewing the session
       */
      live_view: {
          /**
           * Read Only
           * @description If true, live view is read-only; no interactions allowed
           */
          read_only: boolean;
      };
      /**
       * Proxy
       * @description Configuration for proxy usage
       */
      proxy: {
          /**
           * Active
           * @description Whether proxy is active for this session
           */
          active: boolean;
          /**
           * Country Code
           * @description ISO country code for the proxy (e.g., 'us', 'uk')
           */
          country_code: string;
          /**
           * Type
           * @description Type of proxy: anchor_residential, anchor_mobile, or custom
           * @enum {string}
           */
          type: "anchor_residential" | "anchor_mobile" | "custom";
      };
      /**
       * Recording
       * @description Configuration for session recording
       */
      recording: {
          /**
           * Active
           * @description Toggle session recording on or off
           */
          active: boolean;
      };
      /**
       * Timeout
       * @description Configuration for session timeouts
       */
      timeout: {
          /**
           * Idle Timeout
           * @description Idle timeout in minutes before auto-termination
           */
          idle_timeout: number;
          /**
           * Max Duration
           * @description Max session duration in minutes (non-negative)
           */
          max_duration: number;
      };
  };
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_START_BROWSER_SESSION tool output.
 */
type ANCHOR_BROWSER_START_BROWSER_SESSION_OUTPUT = {
  /**
   * Data
   * @description Response payload containing new session details
   */
  data?: {
      /**
       * Cdp Url
       * @description The CDP websocket connection string
       */
      cdp_url: string;
      /**
       * Id
       * @description Unique identifier for the browser session
       */
      id: string;
      /**
       * Live View Url
       * @description The browser session live view URL
       */
      live_view_url: string;
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_UPDATE_PROFILE tool input.
 */
type ANCHOR_BROWSER_UPDATE_PROFILE_INPUT = {
  /**
   * Description
   * @description A new description for the profile.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The unique name (ID) of the browser profile to update.
   */
  name?: string;
  /**
   * Session Id
   * Format: uuid
   * @description The browser session ID. Required if source is 'session'.
   * @default null
   */
  session_id: unknown;
  /**
   * Source
   * @description The source of the profile data. Only 'session' is supported.
   * @constant
   */
  source?: "session";
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_UPDATE_PROFILE tool output.
 */
type ANCHOR_BROWSER_UPDATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response payload containing update profile status.
   */
  data?: {
      /**
       * Status
       * @description Result status; 'success' indicates the profile was updated successfully.
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_UPLOAD_FILE tool input.
 */
type ANCHOR_BROWSER_UPLOAD_FILE_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the file to upload.
   */
  file?: string;
  /**
   * File Name
   * @description Filename to assign for the uploaded file (e.g., 'document.pdf').
   */
  file_name?: string;
  /**
   * Session Id
   * @description The ID of the browser session to upload the file to.
   */
  session_id?: string;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_UPLOAD_FILE tool output.
 */
type ANCHOR_BROWSER_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Container for upload operation status and message.
   */
  data?: {
      /**
       * Message
       * @description Message describing the result of the upload.
       */
      message: string;
      /**
       * Status
       * @description Status of the upload operation (e.g., 'success').
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
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_WAIT_FOR_EVENT tool input.
 */
type ANCHOR_BROWSER_WAIT_FOR_EVENT_INPUT = {
  /**
   * Event Name
   * @description The name of the event to wait for.
   */
  event_name?: string;
  /**
   * Timeout Ms
   * @description Maximum time in milliseconds to wait for the event before timing out.
   */
  timeoutMs?: number;
};

/**
 * Type of ANCHOR_BROWSER's ANCHOR_BROWSER_WAIT_FOR_EVENT tool output.
 */
type ANCHOR_BROWSER_WAIT_FOR_EVENT_OUTPUT = {
  /**
   * Data
   * @description Response payload containing event wait details.
   */
  data?: {
      /**
       * Message
       * @description Message indicating event status, e.g., 'Task completed'.
       */
      message: string;
      /**
       * Result
       * @description Result of the wait operation, e.g., 'success'.
       */
      result: string;
      /**
       * Timestamp
       * @description ISO 8601 timestamp when the event was signaled.
       */
      timestamp: string;
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
 * Type map of all available tool input types for toolkit "ANCHOR_BROWSER".
 */
export type ANCHOR_BROWSER_TOOL_INPUTS = {
  CREATE_PROFILE: ANCHOR_BROWSER_CREATE_PROFILE_INPUT
  DELETE_PROFILE: ANCHOR_BROWSER_DELETE_PROFILE_INPUT
  END_ALL_SESSIONS: ANCHOR_BROWSER_END_ALL_SESSIONS_INPUT
  END_BROWSER_SESSION: ANCHOR_BROWSER_END_BROWSER_SESSION_INPUT
  GET_PROFILE: ANCHOR_BROWSER_GET_PROFILE_INPUT
  GET_WEBPAGE_CONTENT: ANCHOR_BROWSER_GET_WEBPAGE_CONTENT_INPUT
  LIST_AGENT_RESOURCES: ANCHOR_BROWSER_LIST_AGENT_RESOURCES_INPUT
  LIST_ALL_SESSIONS_STATUS: ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS_INPUT
  LIST_EXTENSIONS: ANCHOR_BROWSER_LIST_EXTENSIONS_INPUT
  LIST_PROFILES: ANCHOR_BROWSER_LIST_PROFILES_INPUT
  LIST_SESSIONS: ANCHOR_BROWSER_LIST_SESSIONS_INPUT
  LIST_SESSION_RECORDINGS: ANCHOR_BROWSER_LIST_SESSION_RECORDINGS_INPUT
  SCREENSHOT_WEBPAGE: ANCHOR_BROWSER_SCREENSHOT_WEBPAGE_INPUT
  SIGNAL_EVENT: ANCHOR_BROWSER_SIGNAL_EVENT_INPUT
  START_BROWSER_SESSION: ANCHOR_BROWSER_START_BROWSER_SESSION_INPUT
  UPDATE_PROFILE: ANCHOR_BROWSER_UPDATE_PROFILE_INPUT
  UPLOAD_FILE: ANCHOR_BROWSER_UPLOAD_FILE_INPUT
  WAIT_FOR_EVENT: ANCHOR_BROWSER_WAIT_FOR_EVENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ANCHOR_BROWSER".
 */
export type ANCHOR_BROWSER_TOOL_OUTPUTS = {
  CREATE_PROFILE: ANCHOR_BROWSER_CREATE_PROFILE_OUTPUT
  DELETE_PROFILE: ANCHOR_BROWSER_DELETE_PROFILE_OUTPUT
  END_ALL_SESSIONS: ANCHOR_BROWSER_END_ALL_SESSIONS_OUTPUT
  END_BROWSER_SESSION: ANCHOR_BROWSER_END_BROWSER_SESSION_OUTPUT
  GET_PROFILE: ANCHOR_BROWSER_GET_PROFILE_OUTPUT
  GET_WEBPAGE_CONTENT: ANCHOR_BROWSER_GET_WEBPAGE_CONTENT_OUTPUT
  LIST_AGENT_RESOURCES: ANCHOR_BROWSER_LIST_AGENT_RESOURCES_OUTPUT
  LIST_ALL_SESSIONS_STATUS: ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS_OUTPUT
  LIST_EXTENSIONS: ANCHOR_BROWSER_LIST_EXTENSIONS_OUTPUT
  LIST_PROFILES: ANCHOR_BROWSER_LIST_PROFILES_OUTPUT
  LIST_SESSIONS: ANCHOR_BROWSER_LIST_SESSIONS_OUTPUT
  LIST_SESSION_RECORDINGS: ANCHOR_BROWSER_LIST_SESSION_RECORDINGS_OUTPUT
  SCREENSHOT_WEBPAGE: ANCHOR_BROWSER_SCREENSHOT_WEBPAGE_OUTPUT
  SIGNAL_EVENT: ANCHOR_BROWSER_SIGNAL_EVENT_OUTPUT
  START_BROWSER_SESSION: ANCHOR_BROWSER_START_BROWSER_SESSION_OUTPUT
  UPDATE_PROFILE: ANCHOR_BROWSER_UPDATE_PROFILE_OUTPUT
  UPLOAD_FILE: ANCHOR_BROWSER_UPLOAD_FILE_OUTPUT
  WAIT_FOR_EVENT: ANCHOR_BROWSER_WAIT_FOR_EVENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ANCHOR_BROWSER toolkit.
 */
export const ANCHOR_BROWSER = {
  slug: "anchor_browser",
  tools: {
    /**
     * Tool to create a new browser profile from an active session. use after ending a session to persist cookies and cache.
     */
    CREATE_PROFILE: "ANCHOR_BROWSER_CREATE_PROFILE",
    /**
     * Tool to delete a browser profile by id. use after confirming the profile exists.
     */
    DELETE_PROFILE: "ANCHOR_BROWSER_DELETE_PROFILE",
    /**
     * Tool to end all active browser sessions. use after confirming a security concern when you need to immediately close every session for the authenticated user.
     */
    END_ALL_SESSIONS: "ANCHOR_BROWSER_END_ALL_SESSIONS",
    /**
     * Tool to end a specific browser session by id. use after confirming the session id you want to terminate.
     */
    END_BROWSER_SESSION: "ANCHOR_BROWSER_END_BROWSER_SESSION",
    /**
     * Tool to fetch details for a specific browser profile by id. use after you know the profile id and need its settings and session information.
     */
    GET_PROFILE: "ANCHOR_BROWSER_GET_PROFILE",
    /**
     * Tool to retrieve rendered content of a webpage in html or markdown format. use when you need to fetch a page’s full content, optionally within an existing browser session.
     */
    GET_WEBPAGE_CONTENT: "ANCHOR_BROWSER_GET_WEBPAGE_CONTENT",
    /**
     * Tool to list agent resources (files) for a given session. use after establishing a browser session to retrieve agent-uploaded files.
     */
    LIST_AGENT_RESOURCES: "ANCHOR_BROWSER_LIST_AGENT_RESOURCES",
    /**
     * Tool to list the status of all active browser sessions. use after authenticating when you need to retrieve an up-to-date overview of all sessions.
     */
    LIST_ALL_SESSIONS_STATUS: "ANCHOR_BROWSER_LIST_ALL_SESSIONS_STATUS",
    /**
     * Tool to list all browser extensions for the authenticated user. use when you need to retrieve available extensions after authentication.
     */
    LIST_EXTENSIONS: "ANCHOR_BROWSER_LIST_EXTENSIONS",
    /**
     * Tool to fetch all stored browser profiles. use when you need an overview of all profiles available to the authenticated user (e.g., after creating or deleting profiles).
     */
    LIST_PROFILES: "ANCHOR_BROWSER_LIST_PROFILES",
    /**
     * Tool to list all browser sessions. use when you need to retrieve both active and inactive sessions.
     */
    LIST_SESSIONS: "ANCHOR_BROWSER_LIST_SESSIONS",
    /**
     * Tool to list all recordings for a specific browser session. use after confirming the session id.
     */
    LIST_SESSION_RECORDINGS: "ANCHOR_BROWSER_LIST_SESSION_RECORDINGS",
    /**
     * Tool to take a screenshot of a specified webpage within a session. use when you need a visual png snapshot of a live page. example: "capture a 1280×720 screenshot of https://example.com".
     */
    SCREENSHOT_WEBPAGE: "ANCHOR_BROWSER_SCREENSHOT_WEBPAGE",
    /**
     * Tool to signal a specific event to be received by other processes or sessions. use when you need real-time coordination across browser sessions after verifying session is active.
     */
    SIGNAL_EVENT: "ANCHOR_BROWSER_SIGNAL_EVENT",
    /**
     * Tool to start a new browser session with optional customizations. use when you need to programmatically allocate an isolated browser instance with recording, proxy, live view, and feature toggles.
     */
    START_BROWSER_SESSION: "ANCHOR_BROWSER_START_BROWSER_SESSION",
    /**
     * Tool to update an existing browser profile by id. use when you need to modify the profile's description or source session.
     */
    UPDATE_PROFILE: "ANCHOR_BROWSER_UPDATE_PROFILE",
    /**
     * Tool to upload a file to a browser session as an agent resource. use after starting or referencing a session when you need to provide file inputs (single files or zip archives) for web forms or ai-driven tasks.
     */
    UPLOAD_FILE: "ANCHOR_BROWSER_UPLOAD_FILE",
    /**
     * Tool to wait for a specific event. use when coordinating browser sessions or workflows that depend on an event signal; blocks until the event is signaled or timeout is reached.
     */
    WAIT_FOR_EVENT: "ANCHOR_BROWSER_WAIT_FOR_EVENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ANCHOR_BROWSER".
 */
export type ANCHOR_BROWSER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ANCHOR_BROWSER".
 */
export type ANCHOR_BROWSER_TRIGGER_EVENTS = {}
