// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SMUGMUG's SMUGMUG_GET_FOLDER_DETAILS tool input.
 */
type SMUGMUG_GET_FOLDER_DETAILS_INPUT = {
  /**
   * Node Id
   * @description The ID of the node (folder) to retrieve details for.
   */
  node_id?: string;
};

/**
 * Type of SMUGMUG's SMUGMUG_GET_FOLDER_DETAILS tool output.
 */
type SMUGMUG_GET_FOLDER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Added
       * @description The creation date of the folder.
       */
      DateAdded: string;
      /**
       * Date Modified
       * @description The last modification date of the folder.
       */
      DateModified: string;
      /**
       * Description
       * @description The description of the folder.
       * @default null
       */
      Description: string | null;
      /**
       * Highlight Album Uri
       * @description The URI of the album set as the highlight for the folder.
       * @default null
       */
      HighlightAlbumUri: string | null;
      /**
       * Name
       * @description The name of the folder.
       */
      Name: string;
      /**
       * Node Id
       * @description The node ID of the folder.
       */
      NodeID: string;
      /**
       * Uri
       * @description The URI of the folder.
       */
      Uri: string;
      /**
       * Url Path
       * @description The URL path of the folder.
       */
      UrlPath: string;
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
 * Type of SMUGMUG's SMUGMUG_GET_NODE_DETAILS tool input.
 */
type SMUGMUG_GET_NODE_DETAILS_INPUT = {
  /**
   * Node Id
   * @description The unique identifier for the node (e.g., Album, Folder, Page).
   */
  node_id?: string;
};

/**
 * Type of SMUGMUG's SMUGMUG_GET_NODE_DETAILS tool output.
 */
type SMUGMUG_GET_NODE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description The response object containing node details.
       */
      Response: {
          /**
           * Date Added
           * @description The time when this node was created.
           * @default null
           */
          DateAdded: string | null;
          /**
           * Date Modified
           * @description The last time this node or its descendants were modified.
           * @default null
           */
          DateModified: string | null;
          /**
           * Description
           * @description The human-readable description of the node.
           * @default null
           */
          Description: string | null;
          /**
           * Effective Privacy
           * @description Effective privacy setting of the node.
           * @default null
           */
          EffectivePrivacy: string | null;
          /**
           * Effective Security Type
           * @description Effective security type of the node.
           * @default null
           */
          EffectiveSecurityType: string | null;
          /**
           * Has Children
           * @description Indicates if the node has child nodes.
           * @default null
           */
          HasChildren: boolean | null;
          /**
           * Is Root
           * @description Indicates if this is the root node for the user.
           * @default null
           */
          IsRoot: boolean | null;
          /**
           * Keywords
           * @description Keywords associated with the node.
           * @default null
           */
          Keywords: string[] | null;
          /**
           * Name
           * @description The human-readable name or title of the node.
           */
          Name: string;
          /**
           * Node Id
           * @description The unique identifier of the node.
           */
          NodeID: string;
          /**
           * Password Hint
           * @description Hint for the viewing password, if set.
           * @default null
           */
          PasswordHint: string | null;
          /**
           * Privacy
           * @description Privacy setting of the node (e.g., Public, Unlisted, Private).
           * @default null
           */
          Privacy: string | null;
          /**
           * Security Type
           * @description Security type of the node.
           * @default null
           */
          SecurityType: string | null;
          /**
           * Smug Searchable
           * @description Allows this node to appear in SmugMug search results.
           * @default null
           */
          SmugSearchable: string | null;
          /**
           * Sort Direction
           * @description Sort direction for child items.
           * @default null
           */
          SortDirection: string | null;
          /**
           * Sort Index
           * @description Sort index of the node among its siblings.
           * @default null
           */
          SortIndex: number | null;
          /**
           * Sort Method
           * @description Sort method for child items.
           * @default null
           */
          SortMethod: string | null;
          /**
           * Type
           * @description The type of the node (e.g., Folder, Album, Page).
           * @enum {string}
           */
          Type: "Folder" | "Album" | "Page";
          /**
           * Uri
           * @description The API URI for this node.
           */
          Uri: string;
          /**
           * NodeUris
           * @description Related URIs for the node.
           * @default null
           */
          Uris: {
              /**
               * Album
               * @description URI for album details, if the node is an album.
               * @default null
               */
              Album: {
                  [key: string]: string;
              } | null;
              /**
               * Child Nodes
               * @description URI for the child nodes of this node.
               * @default null
               */
              ChildNodes: {
                  [key: string]: string;
              } | null;
              /**
               * Folder By Id
               * @description URI for the folder, if this node is a folder.
               * @default null
               */
              FolderByID: {
                  [key: string]: string;
              } | null;
              /**
               * Highlight Image
               * @description URI for the highlight image of this node.
               * @default null
               */
              HighlightImage: {
                  [key: string]: string;
              } | null;
              /**
               * Node Comments
               * @description URI for comments on this node.
               * @default null
               */
              NodeComments: {
                  [key: string]: string;
              } | null;
              /**
               * Node Cover Image
               * @description URI for the cover image of this node.
               * @default null
               */
              NodeCoverImage: {
                  [key: string]: string;
              } | null;
              /**
               * Node Images
               * @description URI for images within this node, if applicable.
               * @default null
               */
              NodeImages: {
                  [key: string]: string;
              } | null;
              /**
               * Parent Node
               * @description URI for the parent node.
               * @default null
               */
              ParentNode: {
                  [key: string]: string;
              } | null;
              /**
               * Parent Nodes
               * @description URI for this node and all its ancestors.
               * @default null
               */
              ParentNodes: {
                  [key: string]: string;
              } | null;
              /**
               * User
               * @description URI for the user who owns this node.
               * @default null
               */
              User: {
                  [key: string]: string;
              } | null;
          } | null;
          /**
           * Url Name
           * @description The user-configurable part of the WebUri.
           */
          UrlName: string;
          /**
           * Url Path
           * @description The last part of the WebUri, used to build the node's URL on SmugMug.
           */
          UrlPath: string;
          /**
           * Web Uri
           * @description The node's page URL on the SmugMug website.
           */
          WebUri: string;
          /**
           * World Searchable
           * @description Allows this node to appear in external search results.
           * @default null
           */
          WorldSearchable: string | null;
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
 * Type of SMUGMUG's SMUGMUG_GET_USER_PROFILE tool input.
 */
type SMUGMUG_GET_USER_PROFILE_INPUT = {
  /**
   * Nick Name
   * @description The NickName of the user to retrieve.
   */
  nick_name?: string;
};

/**
 * Type of SMUGMUG's SMUGMUG_GET_USER_PROFILE tool output.
 */
type SMUGMUG_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Response */
      Response: {
          /**
           * Bio Text
           * @description The user's biography text.
           * @default null
           */
          BioText: string | null;
          /**
           * Facebook
           * @description The user's Facebook URL.
           * @default null
           */
          Facebook: string | null;
          /**
           * Flickr
           * @description The user's Flickr URL.
           * @default null
           */
          Flickr: string | null;
          /**
           * Google Plus
           * @description The user's Google+ URL.
           * @default null
           */
          GooglePlus: string | null;
          /**
           * Instagram
           * @description The user's Instagram URL.
           * @default null
           */
          Instagram: string | null;
          /**
           * Pinterest
           * @description The user's Pinterest URL.
           * @default null
           */
          Pinterest: string | null;
          /**
           * Tumblr
           * @description The user's Tumblr URL.
           * @default null
           */
          Tumblr: string | null;
          /**
           * Twitter
           * @description The user's Twitter URL.
           * @default null
           */
          Twitter: string | null;
          /**
           * Vimeo
           * @description The user's Vimeo URL.
           * @default null
           */
          Vimeo: string | null;
          /**
           * Web Uri
           * @description The user's website URI.
           * @default null
           */
          WebUri: string | null;
          /**
           * You Tube
           * @description The user's YouTube URL.
           * @default null
           */
          YouTube: string | null;
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
 * Type of SMUGMUG's SMUGMUG_LIST_ALBUMS_IN_FOLDER tool input.
 */
type SMUGMUG_LIST_ALBUMS_IN_FOLDER_INPUT = {
  /**
   * Count
   * @description The number of items per page for pagination.
   * @default null
   */
  count: number | null;
  /**
   * Folder Node Id
   * @description The ID of the folder to retrieve albums from.
   */
  folder_node_id?: string;
  /**
   * Start
   * @description The starting index for pagination.
   * @default null
   */
  start: number | null;
};

/**
 * Type of SMUGMUG's SMUGMUG_LIST_ALBUMS_IN_FOLDER tool output.
 */
type SMUGMUG_LIST_ALBUMS_IN_FOLDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Code */
      Code: number;
      /** Message */
      Message: string;
      /** Response */
      Response: {
          /**
           * Doc Uri
           * @default null
           */
          DocUri: string | null;
          /** Node */
          Node: {
              /** Child Nodes */
              ChildNodes?: {
                  /** Date Added */
                  DateAdded: string;
                  /** Date Modified */
                  DateModified: string;
                  /** Name */
                  Name: string;
                  /** Node Id */
                  NodeID: string;
                  /** Type */
                  Type: string;
                  /** Web Uri */
                  WebUri: string;
              }[] | null;
              /**
               * Name
               * @default null
               */
              Name: string | null;
              /** Node Id */
              NodeID: string;
              /** Type */
              Type: string;
          };
          /**
           * PagesInfo
           * @default null
           */
          Pages: {
              /**
               * Count
               * @default null
               */
              Count: number | null;
              /**
               * First Page
               * @default null
               */
              FirstPage: string | null;
              /**
               * Last Page
               * @default null
               */
              LastPage: string | null;
              /**
               * Next Page
               * @default null
               */
              NextPage: string | null;
              /**
               * Prev Page
               * @default null
               */
              PrevPage: string | null;
              /**
               * Requested Count
               * @default null
               */
              RequestedCount: number | null;
              /**
               * Start
               * @default null
               */
              Start: number | null;
              /**
               * Total
               * @default null
               */
              Total: number | null;
          } | null;
          /**
           * Uri
           * @default null
           */
          Uri: string | null;
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
 * Type of SMUGMUG's SMUGMUG_LIST_CHILD_NODES tool input.
 */
type SMUGMUG_LIST_CHILD_NODES_INPUT = {
  /**
   * Count
   * @description The number of child nodes to retrieve per page.
   * @default null
   */
  count: number | null;
  /**
   * Node Id
   * @description The ID of the parent node for which to retrieve child nodes.
   */
  node_id?: string;
  /**
   * Start
   * @description The starting index for pagination.
   * @default null
   */
  start: number | null;
};

/**
 * Type of SMUGMUG's SMUGMUG_LIST_CHILD_NODES tool output.
 */
type SMUGMUG_LIST_CHILD_NODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Node
       * @description A list of child nodes.
       */
      Node?: {
          /** Name */
          Name: string;
          /** Type */
          Type: string;
          /** Uri */
          Uri: string;
          /** Url Name */
          UrlName: string;
          /** Web Uri */
          WebUri: string;
      }[];
      /**
       * Pages
       * @description Pagination details, if applicable.
       * @default null
       */
      Pages: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "SMUGMUG".
 */
export type SMUGMUG_TOOL_INPUTS = {
  GET_FOLDER_DETAILS: SMUGMUG_GET_FOLDER_DETAILS_INPUT
  GET_NODE_DETAILS: SMUGMUG_GET_NODE_DETAILS_INPUT
  GET_USER_PROFILE: SMUGMUG_GET_USER_PROFILE_INPUT
  LIST_ALBUMS_IN_FOLDER: SMUGMUG_LIST_ALBUMS_IN_FOLDER_INPUT
  LIST_CHILD_NODES: SMUGMUG_LIST_CHILD_NODES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SMUGMUG".
 */
export type SMUGMUG_TOOL_OUTPUTS = {
  GET_FOLDER_DETAILS: SMUGMUG_GET_FOLDER_DETAILS_OUTPUT
  GET_NODE_DETAILS: SMUGMUG_GET_NODE_DETAILS_OUTPUT
  GET_USER_PROFILE: SMUGMUG_GET_USER_PROFILE_OUTPUT
  LIST_ALBUMS_IN_FOLDER: SMUGMUG_LIST_ALBUMS_IN_FOLDER_OUTPUT
  LIST_CHILD_NODES: SMUGMUG_LIST_CHILD_NODES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SMUGMUG toolkit.
 */
export const SMUGMUG = {
  slug: "smugmug",
  tools: {
    /**
     * This tool retrieves the details of a specific folder for a smugmug user using its node id.  tags = ["important", "openworldhint", "readonlyhint"] creation and modification dates, node id, and optionally the uri of the album set as the highlight.
     */
    GET_FOLDER_DETAILS: "SMUGMUG_GET_FOLDER_DETAILS",
    /**
     * This tool retrieves the details for a specific node (e.g., album, folder, page) using its unique nodeid. it uses the api endpoint get /api/v2/node/{nodeid} to fetch details such as uri, nodeid, name, type, and urlpath.
     */
    GET_NODE_DETAILS: "SMUGMUG_GET_NODE_DETAILS",
    /**
     * Retrieves the public profile information for a smugmug user.
     */
    GET_USER_PROFILE: "SMUGMUG_GET_USER_PROFILE",
    /**
     * This tool retrieves a list of all albums within a specified user's folder on smugmug. it allows for pagination to handle large numbers of albums.
     */
    LIST_ALBUMS_IN_FOLDER: "SMUGMUG_LIST_ALBUMS_IN_FOLDER",
    /**
     * Retrieves a list of all child nodes (albums or folders) for a specified parent node in smugmug.
     */
    LIST_CHILD_NODES: "SMUGMUG_LIST_CHILD_NODES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SMUGMUG".
 */
export type SMUGMUG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SMUGMUG".
 */
export type SMUGMUG_TRIGGER_EVENTS = {}
