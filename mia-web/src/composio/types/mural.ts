// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MURAL's MURAL_CREATE_STICKY_NOTE tool input.
 */
type MURAL_CREATE_STICKY_NOTE_INPUT = {
  /**
   * Mural Id
   * @description Unique identifier of the mural
   */
  muralId?: string;
  /**
   * Stickies
   * @description List of sticky note definitions to create (max 1000)
   */
  stickies?: {
      /**
       * Area Id
       * @description ID of the area widget containing this sticky note
       * @default null
       */
      areaId: string | null;
      /**
       * Height
       * @description Height of the sticky note in pixels
       * @default null
       */
      height: number | null;
      /**
       * Rotation
       * @description Rotation angle of the widget in degrees
       * @default null
       */
      rotation: number | null;
      /**
       * Shape
       * @description Shape of the sticky note ('rectangle' or 'circle')
       * @default rectangle
       * @enum {string}
       */
      shape: "rectangle" | "circle";
      /**
       * Stackable
       * @description Whether the widget is stackable within areas
       * @default null
       */
      stackable: boolean | null;
      /**
       * StickyNoteStyle
       * @description Styling options for a sticky note widget.
       * @default null
       */
      style: {
          /**
           * Background Color
           * @description Hex RGBA background color
           */
          backgroundColor: string;
          /**
           * Bold
           * @description Whether text is bold
           */
          bold: boolean;
          /**
           * Border
           * @description Whether the sticky note has a border
           */
          border: boolean;
          /**
           * Font
           * @description Font family for text
           */
          font: string;
          /**
           * Font Size
           * @description Font size in pixels
           */
          fontSize: number;
          /**
           * Italic
           * @description Whether text is italicized
           */
          italic: boolean;
          /**
           * Strike
           * @description Whether text has strikethrough
           */
          strike: boolean;
          /**
           * Text Align
           * @description Text alignment within the note
           * @enum {string}
           */
          textAlign: "left" | "center" | "right";
          /**
           * Underline
           * @description Whether text is underlined
           */
          underline: boolean;
      } | null;
      /**
       * Text
       * @description Text content of the sticky note
       * @default null
       */
      text: string | null;
      /**
       * Width
       * @description Width of the sticky note in pixels
       * @default null
       */
      width: number | null;
      /**
       * X
       * @description X-coordinate position in pixels
       */
      x: number;
      /**
       * Y
       * @description Y-coordinate position in pixels
       */
      y: number;
  }[];
};

/**
 * Type of MURAL's MURAL_CREATE_STICKY_NOTE tool output.
 */
type MURAL_CREATE_STICKY_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description List of created sticky note widgets
       */
      value: {
          /**
           * Created By
           * @description User who created the widget
           */
          createdBy: {
              /**
               * First Name
               * @description First name of the user
               */
              firstName: string;
              /**
               * Last Name
               * @description Last name of the user
               */
              lastName: string;
          };
          /**
           * Created On
           * @description Timestamp (ms since epoch) when created
           */
          createdOn: number;
          /**
           * Height
           * @description Height of the widget in pixels
           */
          height: number;
          /**
           * Id
           * @description Unique identifier of the widget
           */
          id: string;
          /**
           * Style
           * @description Styling properties of the widget
           */
          style: {
              /**
               * Background Color
               * @description Hex RGBA background color
               */
              backgroundColor: string;
              /**
               * Bold
               * @description Whether text is bold
               */
              bold: boolean;
              /**
               * Border
               * @description Whether the sticky note has a border
               */
              border: boolean;
              /**
               * Font
               * @description Font family for text
               */
              font: string;
              /**
               * Font Size
               * @description Font size in pixels
               */
              fontSize: number;
              /**
               * Italic
               * @description Whether text is italicized
               */
              italic: boolean;
              /**
               * Strike
               * @description Whether text has strikethrough
               */
              strike: boolean;
              /**
               * Text Align
               * @description Text alignment within the note
               * @enum {string}
               */
              textAlign: "left" | "center" | "right";
              /**
               * Underline
               * @description Whether text is underlined
               */
              underline: boolean;
          };
          /**
           * Text
           * @description Text content of the sticky note
           * @default null
           */
          text: string | null;
          /**
           * Type
           * @description Widget type, always 'sticky note'
           * @constant
           */
          type: "sticky note";
          /**
           * Updated By
           * @description User who last updated the widget
           */
          updatedBy: {
              /**
               * First Name
               * @description First name of the user
               */
              firstName: string;
              /**
               * Last Name
               * @description Last name of the user
               */
              lastName: string;
          };
          /**
           * Updated On
           * @description Timestamp (ms since epoch) when last updated
           */
          updatedOn: number;
          /**
           * Width
           * @description Width of the widget in pixels
           */
          width: number;
          /**
           * X
           * @description X-coordinate position in pixels
           */
          x: number;
          /**
           * Y
           * @description Y-coordinate position in pixels
           */
          y: number;
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
 * Type of MURAL's MURAL_GET_CURRENT_USER tool input.
 */
type MURAL_GET_CURRENT_USER_INPUT = object;

/**
 * Type of MURAL's MURAL_GET_CURRENT_USER tool output.
 */
type MURAL_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description URL to the user's avatar image
       */
      avatar: string;
      /**
       * Created On
       * @description Timestamp when the user was created (timestamp in ms)
       */
      createdOn: number;
      /**
       * Email
       * @description Email address of the current user
       */
      email: string;
      /**
       * First Name
       * @description First name of the current user
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier for the current user
       */
      id: string;
      /**
       * Last Active Workspace
       * @description Last active workspace ID
       */
      lastActiveWorkspace: string;
      /**
       * Last Name
       * @description Last name of the current user
       */
      lastName: string;
      /**
       * Type
       * @description Type of the user
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
 * Type of MURAL's MURAL_GET_FILES_FOR_MURAL tool input.
 */
type MURAL_GET_FILES_FOR_MURAL_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Mural Id
   * @description Unique identifier of the mural
   */
  muralId?: string;
  /**
   * Next
   * @description Pagination token for next page of items
   * @default null
   */
  next: string | null;
};

/**
 * Type of MURAL's MURAL_GET_FILES_FOR_MURAL tool output.
 */
type MURAL_GET_FILES_FOR_MURAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Token to retrieve next page of items
       * @default null
       */
      next: string | null;
      /**
       * Value
       * @description List of file widget objects
       */
      value: {
          /**
           * Collaborator
           * @description Collaborator who last edited the content
           * @default null
           */
          contentEditedBy: {
              /**
               * Id
               * @description Unique identifier of the collaborator
               */
              id: string;
              /**
               * Name
               * @description Display name of the collaborator
               */
              name: string;
          } | null;
          /**
           * Content Edited On
           * @description Timestamp in milliseconds when content was last edited
           * @default null
           */
          contentEditedOn: number | null;
          /**
           * Created By
           * @description Collaborator who created the widget
           */
          createdBy: {
              /**
               * Id
               * @description Unique identifier of the collaborator
               */
              id: string;
              /**
               * Name
               * @description Display name of the collaborator
               */
              name: string;
          };
          /**
           * Created On
           * @description Timestamp in milliseconds when created
           */
          createdOn: number;
          /**
           * Expires In Minutes
           * @description Minutes after which the file URL expires; may be null when restricted
           * @default null
           */
          expiresInMinutes: number | null;
          /**
           * Height
           * @description Height of the widget in px
           * @default null
           */
          height: number | null;
          /**
           * Hidden
           * @description If true, widget is hidden from non-facilitators
           */
          hidden: boolean;
          /**
           * Hide Editor
           * @description If true, update collaborator name is hidden
           */
          hideEditor: boolean;
          /**
           * Hide Owner
           * @description If true, creator collaborator name is hidden
           */
          hideOwner: boolean;
          /**
           * Id
           * @description Unique ID of the widget
           */
          id: string;
          /**
           * Instruction
           * @description Instructions for a section of the outline
           * @default null
           */
          instruction: string | null;
          /**
           * Invisible
           * @description Whether the widget is invisible
           * @default false
           */
          invisible: boolean;
          /**
           * Link
           * @description Link to the file widget on the mural
           * @default null
           */
          link: string | null;
          /**
           * Locked
           * @description If true, widget is locked and cannot be updated by non-facilitators
           */
          locked: boolean;
          /**
           * Locked By Facilitator
           * @description If true, widget is locked by a facilitator
           */
          lockedByFacilitator: boolean;
          /**
           * Parent Id
           * @description ID of the area widget that contains this widget
           * @default null
           */
          parentId: string | null;
          /**
           * Presentation Index
           * @description List order of the widget in the outline
           * @default null
           */
          presentationIndex: number | null;
          /**
           * Preview Url
           * @description URL of the file preview
           * @default null
           */
          previewUrl: string | null;
          /**
           * Rotation
           * @description Angle of widget rotation in degrees
           */
          rotation: number;
          /**
           * Scanning
           * @description Indicates that file was scanned by antivirus
           */
          scanning: boolean;
          /**
           * Stacking Order
           * @description Z-index stacking order of the widget
           */
          stackingOrder: number;
          /**
           * Title
           * @description Title of the widget in the outline
           */
          title: string;
          /**
           * Type
           * @description The type of the widget (file)
           * @constant
           */
          type: "file";
          /**
           * Collaborator
           * @description Collaborator who last updated the widget
           * @default null
           */
          updatedBy: {
              /**
               * Id
               * @description Unique identifier of the collaborator
               */
              id: string;
              /**
               * Name
               * @description Display name of the collaborator
               */
              name: string;
          } | null;
          /**
           * Updated On
           * @description Timestamp in milliseconds when last updated
           * @default null
           */
          updatedOn: number | null;
          /**
           * Url
           * @description Download URL of the file; may be null when restricted
           * @default null
           */
          url: string | null;
          /**
           * Width
           * @description Width of the widget in px
           */
          width: number;
          /**
           * X
           * @description Horizontal position of the widget in px
           */
          x: number;
          /**
           * Y
           * @description Vertical position of the widget in px
           */
          y: number;
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
 * Type of MURAL's MURAL_GET_MURAL_WIDGETS tool input.
 */
type MURAL_GET_MURAL_WIDGETS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return (must be ≥1).
   * @default null
   */
  limit: number | null;
  /**
   * Mural Id
   * @description Unique identifier of the mural.
   */
  muralId?: string;
  /**
   * Next
   * @description Pagination token for next page of results.
   * @default null
   */
  next: string | null;
  /**
   * Parent Id
   * @description ID of the parent widget to filter results.
   * @default null
   */
  parentId: string | null;
  /**
   * Type
   * @description Comma-separated list of widget types to return. When omitted, returns all types.
   * @default null
   */
  type: string[] | null;
};

/**
 * Type of MURAL's MURAL_GET_MURAL_WIDGETS tool output.
 */
type MURAL_GET_MURAL_WIDGETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Pagination token for next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Value
       * @description Array of widget objects retrieved.
       */
      value: {
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
 * Type of MURAL's MURAL_MURAL_AUTHORIZATION_REQUEST tool input.
 */
type MURAL_MURAL_AUTHORIZATION_REQUEST_INPUT = {
  /**
   * Client Id
   * @description The client identifier for your Mural app (provided when registering your app).
   */
  client_id?: string;
  /**
   * Redirect Uri
   * @description The callback URL where users are redirected after granting access. Must match one of your app's registered redirect URLs.
   */
  redirect_uri?: string;
  /**
   * Response Type
   * @description Grant type for authorization code flow; must be 'code'.
   * @default code
   * @constant
   */
  response_type: "code";
  /**
   * Scope
   * @description List of permission scopes to request. Provided as a list of strings; they will be joined with spaces in the URL.
   */
  scope?: string[];
  /**
   * State
   * @description Optional opaque value sent and returned in the callback to prevent CSRF and correlate requests.
   * @default null
   */
  state: string | null;
};

/**
 * Type of MURAL's MURAL_MURAL_AUTHORIZATION_REQUEST tool output.
 */
type MURAL_MURAL_AUTHORIZATION_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorization Url
       * @description Full URL to which the user's browser must be redirected to start the OAuth flow.
       */
      authorization_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "MURAL".
 */
export type MURAL_TOOL_INPUTS = {
  CREATE_STICKY_NOTE: MURAL_CREATE_STICKY_NOTE_INPUT
  GET_CURRENT_USER: MURAL_GET_CURRENT_USER_INPUT
  GET_FILES_FOR_MURAL: MURAL_GET_FILES_FOR_MURAL_INPUT
  GET_MURAL_WIDGETS: MURAL_GET_MURAL_WIDGETS_INPUT
  MURAL_AUTHORIZATION_REQUEST: MURAL_MURAL_AUTHORIZATION_REQUEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MURAL".
 */
export type MURAL_TOOL_OUTPUTS = {
  CREATE_STICKY_NOTE: MURAL_CREATE_STICKY_NOTE_OUTPUT
  GET_CURRENT_USER: MURAL_GET_CURRENT_USER_OUTPUT
  GET_FILES_FOR_MURAL: MURAL_GET_FILES_FOR_MURAL_OUTPUT
  GET_MURAL_WIDGETS: MURAL_GET_MURAL_WIDGETS_OUTPUT
  MURAL_AUTHORIZATION_REQUEST: MURAL_MURAL_AUTHORIZATION_REQUEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MURAL toolkit.
 */
export const MURAL = {
  slug: "mural",
  tools: {
    /**
     * Tool to create one or more sticky note widgets on a mural. use when you need to add notes to a mural layout.
     */
    CREATE_STICKY_NOTE: "MURAL_CREATE_STICKY_NOTE",
    /**
     * Tool to retrieve information about the currently authenticated user. use when you need current user details after authentication.
     */
    GET_CURRENT_USER: "MURAL_GET_CURRENT_USER",
    /**
     * Tool to retrieve a list of file widgets in a mural. use after confirming the mural id when listing file attachments.
     */
    GET_FILES_FOR_MURAL: "MURAL_GET_FILES_FOR_MURAL",
    /**
     * Tool to retrieve all widgets within a specified mural. use after confirming the mural id is correct.
     */
    GET_MURAL_WIDGETS: "MURAL_GET_MURAL_WIDGETS",
    /**
     * Tool to initiate the oauth 2.0 authorization process. use when you need to redirect a user to mural to obtain an authorization code.
     */
    MURAL_AUTHORIZATION_REQUEST: "MURAL_MURAL_AUTHORIZATION_REQUEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MURAL".
 */
export type MURAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MURAL".
 */
export type MURAL_TRIGGER_EVENTS = {}
