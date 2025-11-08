// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONFLUENCE's CONFLUENCE_ADD_CONTENT_LABEL tool input.
 */
type CONFLUENCE_ADD_CONTENT_LABEL_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence content (page or blog post) to label.
   */
  id?: string;
  /**
   * Labels
   * @description List of labels to add to the content.
   */
  labels?: {
      /**
       * Name
       * @description Name of the label to add.
       */
      name: string;
      /**
       * Prefix
       * @description Label prefix indicating scope of the label.
       * @enum {string}
       */
      prefix: "global" | "team" | "my";
  }[];
};

/**
 * Type of CONFLUENCE's CONFLUENCE_ADD_CONTENT_LABEL tool output.
 */
type CONFLUENCE_ADD_CONTENT_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Links related to this label.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the added label.
       */
      id: string;
      /**
       * Name
       * @description Name of the added label.
       */
      name: string;
      /**
       * Prefix
       * @description Label prefix indicating scope of the label.
       * @enum {string}
       */
      prefix: "global" | "team" | "my";
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
 * Type of CONFLUENCE's CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID tool input.
 */
type CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the space to be returned.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID tool output.
 */
type CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Related resource links for the space.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description object of the space.
       */
      description: {
          [key: string]: unknown;
      };
      /**
       * Homepage Id
       * @description ID of the homepage of the space.
       */
      homepageId: string;
      /**
       * Icon
       * @description Icon metadata for the space.
       */
      icon: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the space.
       */
      id: string;
      /**
       * Key
       * @description The unique key of the space.
       */
      key: string;
      /**
       * Name
       * @description Human-readable name of the space.
       */
      name: string;
      /**
       * Status
       * @description Status of the space.
       * @enum {string}
       */
      status: "current" | "archived";
      /**
       * Type
       * @description Type of the space.
       * @enum {string}
       */
      type: "global" | "personal";
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_BLOGPOST tool input.
 */
type CONFLUENCE_CREATE_BLOGPOST_INPUT = {
  /**
   * Body
   * @description Content body of the blog post.
   */
  body?: {
      /**
       * Representation
       * @description Format of the content. Must be 'storage'.
       * @constant
       */
      representation: "storage";
      /**
       * Value
       * @description The content of the blog post in the given representation.
       */
      value: string;
  };
  /**
   * Labels
   * @description Optional list of labels to add to the blog post.
   * @default null
   */
  labels: {
      /**
       * Name
       * @description Name of the label to add to the blog post.
       */
      name: string;
  }[] | null;
  /**
   * Metadata
   * @description Optional key-value metadata for the blog post.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Parent Id
   * @description Optional parent page or blog post ID.
   * @default null
   */
  parentId: string | null;
  /**
   * Space Id
   * @description ID of the space where the blog post will be created.
   */
  spaceId?: string;
  /**
   * Status
   * @description Status of the blog post.
   * @enum {string}
   */
  status?: "current" | "draft" | "trashed";
  /**
   * Title
   * @description The title of the new blog post.
   */
  title?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_BLOGPOST tool output.
 */
type CONFLUENCE_CREATE_BLOGPOST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Content body of the created blog post.
       */
      body: {
          /**
           * Representation
           * @description Format of the content. Must be 'storage'.
           * @constant
           */
          representation: "storage";
          /**
           * Value
           * @description The content of the blog post in the given representation.
           */
          value: string;
      };
      /**
       * Created At
       * @description Creation timestamp of the blog post.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the blog post.
       */
      id: string;
      /**
       * Labels
       * @description List of labels associated with the blog post.
       */
      labels: {
          [key: string]: unknown;
      }[];
      /**
       * Metadata
       * @description Metadata of the blog post.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Space Id
       * @description ID of the space containing the blog post.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the blog post.
       * @enum {string}
       */
      status: "current" | "draft" | "trashed";
      /**
       * Title
       * @description The title of the blog post.
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp of the blog post.
       */
      updatedAt: string;
      /**
       * Version
       * @description Version information of the blog post.
       */
      version: {
          [key: string]: unknown;
      };
      /**
       * Web Url
       * @description URL to view the blog post.
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_BLOGPOST_PROPERTY tool input.
 */
type CONFLUENCE_CREATE_BLOGPOST_PROPERTY_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence blog post to add the property to.
   */
  id?: string;
  /**
   * Key
   * @description Unique key for the blog post property.
   */
  key?: string;
  /**
   * Value
   * @description JSON object representing the value of the blog post property.
   */
  value?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_BLOGPOST_PROPERTY tool output.
 */
type CONFLUENCE_CREATE_BLOGPOST_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the property.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Identifier of the created property.
       */
      id: string;
      /**
       * Key
       * @description Key of the created property.
       */
      key: string;
      /**
       * Value
       * @description Value of the created property.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version information of the property.
       */
      version: {
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD tool input.
 */
type CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD_INPUT = {
  /**
   * Key
   * @description Key/name of the property to create.
   */
  key?: string;
  /**
   * Value
   * @description JSON object representing the value of the content property.
   */
  value?: {
      [key: string]: unknown;
  };
  /**
   * Whiteboard Id
   * @description ID of the whiteboard to add the property to.
   */
  whiteboard_id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD tool output.
 */
type CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the property was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the created property.
       */
      id: string;
      /**
       * Key
       * @description Key/name of the property.
       */
      key: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the property was last updated.
       */
      updatedAt: string;
      /**
       * Value
       * @description JSON object representing the property value.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version number of the property.
       */
      version: number;
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_PAGE tool input.
 */
type CONFLUENCE_CREATE_PAGE_INPUT = {
  /**
   * Body
   * @description Content body of the page.
   */
  body?: {
      /**
       * Storage
       * @description Storage format content.
       */
      storage: {
          /**
           * Representation
           * @description The representation format of the content. Must be 'storage'.
           * @default storage
           */
          representation: string;
          /**
           * Value
           * @description The content body in Confluence storage format.
           */
          value: string;
      };
  };
  /**
   * Parent Id
   * @description ID of the parent page (if creating as a child page).
   * @default null
   */
  parentId: string | null;
  /**
   * Space Id
   * @description ID of the space where the page will be created.
   */
  spaceId?: string;
  /**
   * Title
   * @description Title of the new page.
   */
  title?: string;
  /**
   * Type
   * @description Content type. Must be 'page'.
   * @default page
   */
  type: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_PAGE tool output.
 */
type CONFLUENCE_CREATE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the page.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Body
       * @description Page body content.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the page was created.
       */
      createdAt: string;
      /**
       * Id
       * @description ID of the created page.
       */
      id: string;
      /**
       * Parent Id
       * @description ID of the parent page, if any.
       * @default null
       */
      parentId: string | null;
      /**
       * Space Id
       * @description ID of the space containing the page.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the page.
       */
      status: string;
      /**
       * Title
       * @description Title of the page.
       */
      title: string;
      /**
       * Type
       * @description Content type.
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the page was last updated.
       */
      updatedAt: string;
      /**
       * Version
       * @description Version information of the page.
       */
      version: {
          /**
           * Message
           * @description Version message.
           * @default null
           */
          message: string | null;
          /**
           * Minor Edit
           * @description Whether it was a minor edit.
           * @default null
           */
          minorEdit: boolean | null;
          /**
           * Number
           * @description Version number (should be 1 for new pages).
           */
          number: number;
          /**
           * When
           * @description Timestamp when the page was created.
           */
          when: string;
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_PAGE_PROPERTY tool input.
 */
type CONFLUENCE_CREATE_PAGE_PROPERTY_INPUT = {
  /**
   * Key
   * @description Key/name of the property to create.
   */
  key?: string;
  /**
   * Page Id
   * @description ID of the page to create a property for.
   */
  page_id?: string;
  /**
   * Value
   * @description Value of the property. Can be any JSON type (string, number, object, array).
   */
  value?: unknown;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_PAGE_PROPERTY tool output.
 */
type CONFLUENCE_CREATE_PAGE_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the property.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the property was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description Information about who created the property.
       * @default null
       */
      createdBy: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique identifier of the created property.
       */
      id: string;
      /**
       * Key
       * @description Key/name of the property.
       */
      key: string;
      /**
       * Value
       * @description Value of the property.
       */
      value: unknown;
      /**
       * Version
       * @description Version information of the property.
       * @default null
       */
      version: {
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_PRIVATE_SPACE tool input.
 */
type CONFLUENCE_CREATE_PRIVATE_SPACE_INPUT = {
  /**
   * Description
   * @description Container for the plain-text description.
   * @default null
   */
  description: {
      /**
       * Plain
       * @description A nested object holding the plain-text description and its format.
       */
      plain: {
          /**
           * Representation
           * @description Format of the description. Must be 'plain'.
           * @default plain
           * @constant
           */
          representation: "plain";
          /**
           * Value
           * @description The plain-text description of the private space.
           */
          value: string;
      };
  } | null;
  /**
   * Key
   * @description A unique key for the private space; must be unique and <=255 characters.
   */
  key?: string;
  /**
   * Name
   * @description The name of the private space, visible only to its creator.
   */
  name?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_PRIVATE_SPACE tool output.
 */
type CONFLUENCE_CREATE_PRIVATE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Related resource links for the space.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description object for the space.
       */
      description: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the created space.
       */
      id: string;
      /**
       * Key
       * @description The key of the created space.
       */
      key: string;
      /**
       * Name
       * @description The name of the created space.
       */
      name: string;
      /**
       * Status
       * @description The status of the space (e.g., 'current').
       */
      status: string;
      /**
       * Type
       * @description The type of the space (e.g., 'private').
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_SPACE tool input.
 */
type CONFLUENCE_CREATE_SPACE_INPUT = {
  /**
   * SpaceDescription
   * @description Description object for a Confluence space.
   * @default null
   */
  description: {
      /**
       * Plain
       * @description Plain text description object.
       */
      plain: {
          /**
           * Representation
           * @description Representation format of the description. Must be 'plain'.
           * @constant
           */
          representation: "plain";
          /**
           * Value
           * @description The plain text description of the space.
           */
          value: string;
      };
  } | null;
  /**
   * Key
   * @description A unique key for the space. Must be uppercase, alphanumeric, and may include underscores or hyphens.
   */
  key?: string;
  /**
   * Metadata
   * @description Optional metadata for the space.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Human-readable name for the space.
   */
  name?: string;
  /**
   * Type
   * @description Type of the space, either 'global' or 'personal'.
   * @default null
   * @enum {string|null}
   */
  type: "global" | "personal" | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_SPACE tool output.
 */
type CONFLUENCE_CREATE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Related resource links for the space.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description object of the space.
       */
      description: {
          [key: string]: unknown;
      };
      /**
       * Homepage Id
       * @description ID of the homepage of the space.
       */
      homepageId: string;
      /**
       * Icon
       * @description Icon metadata for the space.
       */
      icon: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the space.
       */
      id: string;
      /**
       * Key
       * @description The unique key of the space.
       */
      key: string;
      /**
       * Name
       * @description Human-readable name of the space.
       */
      name: string;
      /**
       * Status
       * @description Status of the space.
       * @enum {string}
       */
      status: "current" | "archived";
      /**
       * Type
       * @description Type of the space.
       * @enum {string}
       */
      type: "global" | "personal";
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_SPACE_PROPERTY tool input.
 */
type CONFLUENCE_CREATE_SPACE_PROPERTY_INPUT = {
  /**
   * Key
   * @description Unique key for the space property.
   */
  key?: string;
  /**
   * Space Id
   * @description ID of the space to add the property to.
   */
  spaceId?: string;
  /**
   * Value
   * @description JSON object representing the value of the space property.
   */
  value?: {
      [key: string]: unknown;
  };
  /**
   * Version
   * @description Optional version metadata for the new property.
   * @default null
   */
  version: {
      /**
       * Message
       * @description Optional change message for this version.
       * @default null
       */
      message: string | null;
      /**
       * Number
       * @description Version number for the space property (must be ≥ 1).
       */
      number: number;
  } | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_SPACE_PROPERTY tool output.
 */
type CONFLUENCE_CREATE_SPACE_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the space property.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Identifier of the created space property.
       */
      id: string;
      /**
       * Key
       * @description Unique key of the space property.
       */
      key: string;
      /**
       * Value
       * @description Value of the space property.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version information of the space property.
       */
      version: {
          /**
           * Message
           * @description Optional change message for this version.
           * @default null
           */
          message: string | null;
          /**
           * Number
           * @description Version number for the space property (must be ≥ 1).
           */
          number: number;
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
 * Type of CONFLUENCE's CONFLUENCE_CREATE_WHITEBOARD tool input.
 */
type CONFLUENCE_CREATE_WHITEBOARD_INPUT = {
  /**
   * Parent Id
   * @description ID of the parent content under which the whiteboard will be created.
   * @default null
   */
  parentId: string | null;
  /**
   * Space Id
   * @description ID of the space where the whiteboard will be created.
   */
  spaceId?: string;
  /**
   * Title
   * @description Title of the whiteboard.
   * @default null
   */
  title: string | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_CREATE_WHITEBOARD tool output.
 */
type CONFLUENCE_CREATE_WHITEBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the whiteboard was created.
       */
      createdAt: string;
      /**
       * Id
       * @description ID of the created whiteboard.
       */
      id: string;
      /**
       * Parent Id
       * @description ID of the parent content, if any.
       * @default null
       */
      parentId: string | null;
      /**
       * Space Id
       * @description ID of the space containing the whiteboard.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the whiteboard.
       */
      status: string;
      /**
       * Title
       * @description Title of the whiteboard.
       */
      title: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the whiteboard was last updated.
       */
      updatedAt: string;
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
 * Type of CONFLUENCE's CONFLUENCE_DELETE_BLOGPOST_PROPERTY tool input.
 */
type CONFLUENCE_DELETE_BLOGPOST_PROPERTY_INPUT = {
  /**
   * Id
   * @description ID of the Confluence blog post containing the property.
   */
  id?: string;
  /**
   * Property Key
   * @description Key of the property to delete from the blog post.
   */
  propertyKey?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_DELETE_BLOGPOST_PROPERTY tool output.
 */
type CONFLUENCE_DELETE_BLOGPOST_PROPERTY_OUTPUT = {
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
 * Type of CONFLUENCE's CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID tool input.
 */
type CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_INPUT = {
  /**
   * Page Id
   * @description ID of the Confluence page from which to delete the property.
   */
  pageId?: string;
  /**
   * Property Id
   * @description ID of the content property to delete from the page.
   */
  propertyId?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID tool output.
 */
type CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_OUTPUT = {
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
 * Type of CONFLUENCE's CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID tool input.
 */
type CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_INPUT = {
  /**
   * Property Id
   * @description ID of the property to delete from the whiteboard.
   */
  propertyId?: string;
  /**
   * Whiteboard Id
   * @description ID of the whiteboard from which to delete the property.
   */
  whiteboardId?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID tool output.
 */
type CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_OUTPUT = {
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
 * Type of CONFLUENCE's CONFLUENCE_DELETE_PAGE tool input.
 */
type CONFLUENCE_DELETE_PAGE_INPUT = {
  /**
   * Id
   * @description ID of the page to delete.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_DELETE_PAGE tool output.
 */
type CONFLUENCE_DELETE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the deleted page.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the page was originally created.
       */
      createdAt: string;
      /**
       * Deleted At
       * @description ISO8601 timestamp when the page was deleted.
       * @default null
       */
      deletedAt: string | null;
      /**
       * Id
       * @description ID of the deleted page.
       */
      id: string;
      /**
       * Parent Id
       * @description ID of the parent page, if any.
       * @default null
       */
      parentId: string | null;
      /**
       * Space Id
       * @description ID of the space that contained the page.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the page (should be 'trashed').
       */
      status: string;
      /**
       * Title
       * @description Title of the deleted page.
       */
      title: string;
      /**
       * Type
       * @description Content type of the deleted page.
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the page was last updated.
       */
      updatedAt: string;
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
 * Type of CONFLUENCE's CONFLUENCE_DELETE_SPACE tool input.
 */
type CONFLUENCE_DELETE_SPACE_INPUT = {
  /**
   * Space Key
   * @description Key of the space to delete.
   */
  space_key?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_DELETE_SPACE tool output.
 */
type CONFLUENCE_DELETE_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the space was deleted successfully.
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
 * Type of CONFLUENCE's CONFLUENCE_DELETE_SPACE_PROPERTY tool input.
 */
type CONFLUENCE_DELETE_SPACE_PROPERTY_INPUT = {
  /**
   * Property Key
   * @description The key of the space property to delete.
   */
  propertyKey?: string;
  /**
   * Space Id Or Key
   * @description The ID or key of the space containing the property.
   */
  spaceIdOrKey?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_DELETE_SPACE_PROPERTY tool output.
 */
type CONFLUENCE_DELETE_SPACE_PROPERTY_OUTPUT = {
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
 * Type of CONFLUENCE's CONFLUENCE_GET_ATTACHMENTS tool input.
 */
type CONFLUENCE_GET_ATTACHMENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of attachments to return per page. Confluence caps at 200.
   * @default 25
   */
  limit: number;
  /**
   * Media Type
   * @description Filter attachments by MIME type (e.g., 'image/png', 'application/pdf').
   * @default null
   */
  mediaType: string | null;
  /**
   * Page Id
   * @description ID of the Confluence page whose attachments will be retrieved.
   */
  pageId?: string;
  /**
   * Start
   * @description Zero-based index of the first item to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_ATTACHMENTS tool output.
 */
type CONFLUENCE_GET_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of attachments on the page.
       */
      results: {
          /**
           *  Links
           * @description Embedded resource links for the attachment.
           */
          _links: {
              /**
               * Download
               * @description URL to download the attachment.
               * @default null
               */
              download: string | null;
              /**
               * Preview
               * @description URL to preview the attachment.
               * @default null
               */
              preview: string | null;
              /**
               * Tinyui
               * @description Tiny UI view link for the attachment.
               * @default null
               */
              tinyui: string | null;
              /**
               * Webui
               * @description Web UI view link for the attachment.
               * @default null
               */
              webui: string | null;
          };
          /**
           * Extensions
           * @description Additional data like fileSize and mediaType.
           * @default null
           */
          extensions: {
              /**
               * File Size
               * @description Size of the file in bytes.
               * @default null
               */
              fileSize: number | null;
              /**
               * Media Type
               * @description MIME type of the attachment.
               * @default null
               */
              mediaType: string | null;
          } | null;
          /**
           * Id
           * @description Attachment identifier.
           */
          id: string;
          /**
           * Links
           * @description Pagination and context links for the attachment.
           */
          links: {
              /**
               * Base
               * @description Base URL for attachment links.
               * @default null
               */
              base: string | null;
              /**
               * Context
               * @description Context path for the attachment.
               * @default null
               */
              context: string | null;
              /**
               * Download
               * @description Path segment to download the attachment.
               * @default null
               */
              download: string | null;
          };
          /**
           * Media Type
           * @description MIME type of the attachment.
           * @default null
           */
          mediaType: string | null;
          /**
           * Status
           * @description Status of the attachment, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title or filename of the attachment.
           */
          title: string;
          /**
           * Type
           * @description Type of the result, e.g., 'attachment'.
           */
          type: string;
          /**
           * Version
           * @description Version information of the attachment.
           */
          version: {
              /**
               * By
               * @description User who created this version.
               */
              by: {
                  /**
                   * Display Name
                   * @description The user's display name.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * ProfilePicture
                   * @description Profile picture of the user who made the version change.
                   * @default null
                   */
                  profilePicture: {
                      /**
                       * Height
                       * @description Height of the profile picture in pixels.
                       */
                      height: number;
                      /**
                       * Path
                       * @description Relative path to the profile picture.
                       */
                      path: string;
                      /**
                       * Width
                       * @description Width of the profile picture in pixels.
                       */
                      width: number;
                  } | null;
                  /**
                   * Type
                   * @description The type of user (e.g., 'known').
                   */
                  type: string;
                  /**
                   * Username
                   * @description The user's username, if available.
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Message
               * @description Version message or comment.
               * @default null
               */
              message: string | null;
              /**
               * Number
               * @description Version number.
               */
              number: number;
              /**
               * When
               * @description Timestamp when this version was created.
               */
              when: string;
          };
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_ATTACHMENT_LABELS tool input.
 */
type CONFLUENCE_GET_ATTACHMENT_LABELS_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence attachment to retrieve labels for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of labels to return per page.
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first label to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_ATTACHMENT_LABELS tool output.
 */
type CONFLUENCE_GET_ATTACHMENT_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of labels returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of labels for the attachment.
       */
      results: {
          /**
           *  Links
           * @description Links related to this label.
           */
          _links: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Name
           * @description Name of the label.
           */
          name: string;
          /**
           * Prefix
           * @description Type of the label (e.g., 'global').
           */
          prefix: string;
      }[];
      /**
       * Size
       * @description Actual number of labels returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first label returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_AUDIT_LOGS tool input.
 */
type CONFLUENCE_GET_AUDIT_LOGS_INPUT = {
  /**
   * From
   * @description Start of the audit record timestamp range (ISO 8601 format).
   * @default null
   */
  from_: string | null;
  /**
   * Limit
   * @description Maximum number of audit records to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Search String
   * @description Free-text search to filter audit records by summary or category.
   * @default null
   */
  searchString: string | null;
  /**
   * Start
   * @description Zero-based index of the first audit record to return (pagination offset).
   * @default null
   */
  start: number | null;
  /**
   * To
   * @description End of the audit record timestamp range (ISO 8601 format).
   * @default null
   */
  to: string | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_AUDIT_LOGS tool output.
 */
type CONFLUENCE_GET_AUDIT_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of audit records.
       */
      results: {
          /**
           * Associated Items
           * @description Items associated with the audit event.
           * @default null
           */
          associatedItems: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Author
           * @description Details of the user who performed the action.
           */
          author: {
              [key: string]: unknown;
          };
          /**
           * Category
           * @description Category of the audit event.
           */
          category: string;
          /**
           * Changed Values
           * @description List of changed values in the audit event.
           * @default null
           */
          changedValues: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Creation Date
           * @description Timestamp in milliseconds when the action occurred.
           */
          creationDate: number;
          /**
           * Id
           * @description ID of the audit record.
           */
          id: string;
          /**
           * Object Item
           * @description The object item affected by the event.
           * @default null
           */
          objectItem: {
              [key: string]: unknown;
          } | null;
          /**
           * Remote Address
           * @description IP address where the action occurred.
           * @default null
           */
          remoteAddress: string | null;
          /**
           * Summary
           * @description Summary of the audit event.
           */
          summary: string;
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOSTS tool input.
 */
type CONFLUENCE_GET_BLOGPOSTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination. Use value from previous response to fetch the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of blog posts to return per page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOSTS tool output.
 */
type CONFLUENCE_GET_BLOGPOSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination and resource links.
       */
      _links: {
          /**
           * Next
           * @description Link to the next set of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous set of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to the current set of results.
           */
          self: string;
      };
      /**
       * Next
       * @description Cursor for next set of results, if present.
       * @default null
       */
      next: string | null;
      /**
       * Results
       * @description List of blog posts.
       */
      results: {
          /**
           * Id
           * @description Blog post identifier.
           */
          id: string;
          /**
           * Status
           * @description Status of the blog post.
           * @default null
           */
          status: string | null;
          /**
           * Title
           * @description Title of the blog post.
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Content type, should be 'blogpost'.
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_BY_ID tool input.
 */
type CONFLUENCE_GET_BLOGPOST_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the Confluence blog post to retrieve.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_BY_ID tool output.
 */
type CONFLUENCE_GET_BLOGPOST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the blog post.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Body
       * @description Content body of the blog post.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the blog post was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description User who created the blog post.
       */
      createdBy: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the blog post.
       */
      id: string;
      /**
       * Space Id
       * @description ID of the space containing the blog post.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the blog post, e.g., 'current'.
       */
      status: string;
      /**
       * Title
       * @description Title of the blog post.
       */
      title: string;
      /**
       * Type
       * @description Content type, should be 'blogpost'.
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the blog post was last updated.
       */
      updatedAt: string;
      /**
       * Updated By
       * @description User who last updated the blog post.
       */
      updatedBy: {
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_LABELS tool input.
 */
type CONFLUENCE_GET_BLOGPOST_LABELS_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence blog post to retrieve labels for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of labels to return per page.
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first label to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_LABELS tool output.
 */
type CONFLUENCE_GET_BLOGPOST_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of labels returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of labels for the blog post.
       */
      results: {
          /**
           *  Links
           * @description Links related to this label.
           */
          _links: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Name
           * @description Name of the label.
           */
          name: string;
          /**
           * Prefix
           * @description Type of the label (e.g., 'global').
           */
          prefix: string;
      }[];
      /**
       * Size
       * @description Actual number of labels returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first label returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_LIKE_COUNT tool input.
 */
type CONFLUENCE_GET_BLOGPOST_LIKE_COUNT_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence blog post to retrieve like count for.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_LIKE_COUNT tool output.
 */
type CONFLUENCE_GET_BLOGPOST_LIKE_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of likes for the blog post.
       */
      count: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_OPERATIONS tool input.
 */
type CONFLUENCE_GET_BLOGPOST_OPERATIONS_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence blog post to query operations for.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_OPERATIONS tool output.
 */
type CONFLUENCE_GET_BLOGPOST_OPERATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of results returned in this page.
       */
      limit: number;
      /**
       * Results
       * @description List of permitted operations for the specified blog post.
       */
      results: {
          /**
           * Operation
           * @description The operation key (e.g., 'edit', 'delete').
           */
          operation: string;
          /**
           * Target Key
           * @description Optional specific entity key to which the operation applies.
           * @default null
           */
          targetKey: string | null;
          /**
           * Target Type
           * @description The type of entity the operation applies to (e.g., 'blogpost').
           */
          targetType: string;
      }[];
      /**
       * Size
       * @description Total number of items returned in this response.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item in the returned page of results.
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_VERSIONS tool input.
 */
type CONFLUENCE_GET_BLOGPOST_VERSIONS_INPUT = {
  /**
   * Blogpost Id
   * @description The unique identifier of the Confluence blog post.
   */
  blogpostId?: string;
  /**
   * Cursor
   * @description Cursor for pagination. Use value from previous response to fetch next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of version items to return per page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_VERSIONS tool output.
 */
type CONFLUENCE_GET_BLOGPOST_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination and resource links.
       */
      _links: {
          /**
           * Next
           * @description Link to the next set of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous set of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to the current set of results.
           */
          self: string;
      };
      /**
       * Next
       * @description Cursor for next set of results, if present.
       * @default null
       */
      next: string | null;
      /**
       * Results
       * @description List of version entries.
       */
      results: {
          /**
           * Id
           * @description Identifier of the version entry.
           */
          id: string;
          /**
           * Status
           * @description Status of the version.
           */
          status: string;
          /**
           * Type
           * @description Content type of the version entry.
           */
          type: string;
          /**
           * Version
           * @description Metadata about this blog post version.
           */
          version: {
              /**
               * Created At
               * @description Timestamp when this version was created.
               */
              createdAt: string;
              /**
               * Created By
               * @description User who created this version.
               */
              createdBy: {
                  /**
                   * Display Name
                   * @description Display name of the user.
                   */
                  displayName: string;
                  /**
                   * Id
                   * @description ID of the user who created this version.
                   */
                  id: string;
              };
              /**
               * Message
               * @description Optional comment for this version.
               * @default null
               */
              message: string | null;
              /**
               * Number
               * @description Version number of the blog post.
               */
              number: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS tool input.
 */
type CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS_INPUT = {
  /**
   * Blogpost Id
   * @description Unique identifier of the Confluence blog post.
   */
  blogpostId?: string;
  /**
   * Version Number
   * @description Version number of the blog post to retrieve.
   */
  versionNumber?: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS tool output.
 */
type CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blog Post Id
       * @description Blog post ID this version belongs to.
       */
      blogPostId: string;
      /**
       * Body
       * @description Content body of the blog post version.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when this version was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description User details for who created this version.
       */
      createdBy: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Identifier of the version resource.
       */
      id: string;
      /**
       * Status
       * @description Status of the blog post version, e.g., 'current'.
       */
      status: string;
      /**
       * Title
       * @description Title of the blog post version.
       */
      title: string;
      /**
       * Version Number
       * @description Version number of this blog post version.
       */
      versionNumber: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOG_POSTS tool input.
 */
type CONFLUENCE_GET_BLOG_POSTS_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for fetching the next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of items to return per page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOG_POSTS tool output.
 */
type CONFLUENCE_GET_BLOG_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Cursor or URL for the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor or URL for the previous page of results.
       * @default null
       */
      prev: string | null;
      /**
       * Results
       * @description List of blog posts for the current page.
       */
      results: {
          /**
           * BlogPostHistory
           * @description Metadata about creation and last modification of a blog post.
           * @default null
           */
          history: {
              /**
               * Created At
               * @description ISO8601 timestamp when the blog post was created.
               * @default null
               */
              createdAt: string | null;
              /**
               * Created By
               * @description User details who created the blog post.
               * @default null
               */
              createdBy: {
                  [key: string]: unknown;
              } | null;
              /**
               * Last Updated At
               * @description ISO8601 timestamp when the blog post was last updated.
               * @default null
               */
              lastUpdatedAt: string | null;
              /**
               * Last Updated By
               * @description User details who last updated the blog post.
               * @default null
               */
              lastUpdatedBy: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique identifier of the blog post.
           */
          id: string;
          /**
           * Status
           * @description Status of the blog post, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title of the blog post.
           */
          title: string;
          /**
           * Type
           * @description Content type, e.g., 'blogpost'.
           */
          type: string;
      }[];
      /**
       * Size
       * @description Number of results returned in this page.
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
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL tool input.
 */
type CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for fetching the next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Id
   * @description ID of the label to retrieve blog posts for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of items to return per page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL tool output.
 */
type CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Cursor for the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor for the previous page of results.
       * @default null
       */
      prev: string | null;
      /**
       * Results
       * @description List of blog posts for the current page.
       */
      results: {
          /**
           * BlogPostHistory
           * @description Metadata about creation and last modification of a blog post.
           * @default null
           */
          history: {
              /**
               * Created At
               * @description ISO8601 timestamp when the blog post was created.
               * @default null
               */
              createdAt: string | null;
              /**
               * Created By
               * @description User details who created the blog post.
               * @default null
               */
              createdBy: {
                  [key: string]: unknown;
              } | null;
              /**
               * Last Updated At
               * @description ISO8601 timestamp when the blog post was last updated.
               * @default null
               */
              lastUpdatedAt: string | null;
              /**
               * Last Updated By
               * @description User details who last updated the blog post.
               * @default null
               */
              lastUpdatedBy: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Id
           * @description Unique identifier of the blog post.
           */
          id: string;
          /**
           * Status
           * @description Status of the blog post, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title of the blog post.
           */
          title: string;
          /**
           * Type
           * @description Content type, e.g., 'blogpost'.
           */
          type: string;
      }[];
      /**
       * Size
       * @description Number of items returned in this page.
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
 * Type of CONFLUENCE's CONFLUENCE_GET_CHILD_PAGES tool input.
 */
type CONFLUENCE_GET_CHILD_PAGES_INPUT = {
  /**
   * Id
   * @description ID of the Confluence page to retrieve child pages for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of items to return per page. Confluence caps at 100.
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first item to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_CHILD_PAGES tool output.
 */
type CONFLUENCE_GET_CHILD_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of child pages retrieved.
       */
      results: {
          /**
           *  Links
           * @description Links related to the child page.
           */
          _links: {
              /**
               * Self
               * @description Link to this page resource.
               * @default null
               */
              self: string | null;
              /**
               * Tinyui
               * @description Relative link to view page in Tiny UI.
               * @default null
               */
              tinyui: string | null;
              /**
               * Webui
               * @description Relative link to view page in web UI.
               * @default null
               */
              webui: string | null;
          };
          /**
           * Id
           * @description ID of the child page.
           */
          id: string;
          /**
           * Space Id
           * @description ID of the space containing the page.
           */
          spaceId: string;
          /**
           * Status
           * @description Status of the page, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title of the child page.
           */
          title: string;
          /**
           * Type
           * @description Content type, e.g., 'page'.
           */
          type: string;
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST tool input.
 */
type CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST_INPUT = {
  /**
   * Blogpost Id
   * @description Identifier of the Confluence blog post to retrieve properties for.
   */
  blogpost_id?: string;
  /**
   * Limit
   * @description Maximum number of properties to return per page.
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first property to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST tool output.
 */
type CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of properties returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of content properties retrieved.
       */
      results: {
          /**
           *  Links
           * @description Resource links for the property.
           */
          _links: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the property.
           */
          id: string;
          /**
           * Key
           * @description Key/name of the property.
           */
          key: string;
          /**
           * Value
           * @description Value of the property (JSON object representing the property's data).
           */
          value: {
              [key: string]: unknown;
          };
          /**
           * Version
           * @description Version information of the property.
           */
          version: {
              /**
               * Author Id
               * @description Identifier of the user who authored this version.
               * @default null
               */
              authorId: string | null;
              /**
               * Created At
               * @description ISO8601 timestamp when this version was created.
               */
              createdAt: string;
              /**
               * Message
               * @description Optional message for this version.
               * @default null
               */
              message: string | null;
              /**
               * Minor Edit
               * @description Indicates if this version is a minor edit.
               */
              minorEdit: boolean;
              /**
               * Number
               * @description Version number of the property.
               */
              number: number;
          };
      }[];
      /**
       * Size
       * @description Actual number of properties returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first property returned (pagination offset).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE tool input.
 */
type CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE_INPUT = {
  /**
   * Cursor
   * @description Opaque pagination cursor for fetching the next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of properties to return per page (max 200).
   * @default null
   */
  limit: number | null;
  /**
   * Page Id
   * @description Identifier of the Confluence page to retrieve properties for.
   */
  page_id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE tool output.
 */
type CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of properties returned per page.
       */
      limit: number;
      /**
       * Next
       * @description Cursor or URL for the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Cursor or URL for the previous page of results.
       * @default null
       */
      prev: string | null;
      /**
       * Results
       * @description List of content properties retrieved.
       */
      results: {
          /**
           * Id
           * @description Unique identifier of the property.
           */
          id: string;
          /**
           * Key
           * @description Key/name of the property.
           */
          key: string;
          /**
           * Value
           * @description Value of the property (JSON object representing the property's data).
           */
          value: {
              [key: string]: unknown;
          };
          /**
           * Version
           * @description Version information of the property.
           */
          version: {
              /**
               * Created At
               * @description ISO8601 timestamp when this version was created.
               */
              createdAt: string;
              /**
               * Created By
               * @description Details of the user who created this version.
               */
              createdBy: {
                  [key: string]: unknown;
              };
              /**
               * Message
               * @description Optional message for this version.
               * @default null
               */
              message: string | null;
              /**
               * Number
               * @description Version number of the property.
               */
              number: number;
          };
      }[];
      /**
       * Size
       * @description Number of properties returned in this page.
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
 * Type of CONFLUENCE's CONFLUENCE_GET_CONTENT_RESTRICTIONS tool input.
 */
type CONFLUENCE_GET_CONTENT_RESTRICTIONS_INPUT = {
  /**
   * Expand
   * @description Comma-separated properties to expand in the response, e.g., ['restrictables.operation', 'user']
   * @default null
   */
  expand: string[] | null;
  /**
   * Id
   * @description ID of the content to retrieve restrictions for.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_CONTENT_RESTRICTIONS tool output.
 */
type CONFLUENCE_GET_CONTENT_RESTRICTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description HATEOAS links for the restrictions.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Restrictions
       * @description Restrictions applied to the content, keyed by operation (e.g., read, update).
       */
      restrictions: {
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
 * Type of CONFLUENCE's CONFLUENCE_GET_CURRENT_USER tool input.
 */
type CONFLUENCE_GET_CURRENT_USER_INPUT = object;

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_CURRENT_USER tool output.
 */
type CONFLUENCE_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the user.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Account Id
       * @description Unique account ID of the user.
       */
      accountId: string;
      /**
       * Account Type
       * @description Type of account (e.g., 'atlassian').
       */
      accountType: string;
      /**
       * Display Name
       * @description Display name of the user.
       */
      displayName: string;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * Is External Collaborator
       * @description Whether the user is an external collaborator.
       * @default null
       */
      isExternalCollaborator: boolean | null;
      /**
       * Locale
       * @description User's locale setting.
       * @default null
       */
      locale: string | null;
      /**
       * UserPersonalSpace
       * @description User's personal space information.
       * @default null
       */
      personalSpace: {
          /**
           * Id
           * @description ID of the personal space.
           */
          id: string;
          /**
           * Key
           * @description Key of the personal space.
           */
          key: string;
          /**
           * Name
           * @description Name of the personal space.
           */
          name: string;
      } | null;
      /**
       * Profile Picture
       * @description Profile picture information.
       * @default null
       */
      profilePicture: {
          [key: string]: unknown;
      } | null;
      /**
       * Public Name
       * @description Public display name of the user.
       */
      publicName: string;
      /**
       * Time Zone
       * @description User's timezone.
       * @default null
       */
      timeZone: string | null;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST tool input.
 */
type CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of properties to expand in the response (e.g., 'body,author').
   * @default null
   */
  expand: string | null;
  /**
   * Id
   * @description Unique identifier of the blog post to retrieve inline comments for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of inline comments to return per page (default 25).
   * @default 25
   */
  limit: number | null;
  /**
   * Location
   * @description Return comments for a specific location within the blog post content.
   * @default null
   */
  location: string | null;
  /**
   * Parent Version
   * @description Return comments relevant to a specific version of the blog post.
   * @default null
   */
  parentVersion: number | null;
  /**
   * Start
   * @description Index of the first inline comment to return (0-based).
   * @default null
   */
  start: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST tool output.
 */
type CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description HATEOAS links for pagination.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Limit
       * @description Maximum number of inline comments returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of inline comments.
       */
      results: {
          /**
           * Author
           * @description User who created the inline comment.
           */
          author: {
              [key: string]: unknown;
          };
          /**
           * InlineCommentBody
           * @description Content body of the inline comment.
           * @default null
           */
          body: {
              /**
               * View
               * @description Rendered view body of the inline comment.
               */
              view: {
                  [key: string]: unknown;
              };
          } | null;
          /**
           * Created At
           * @description Timestamp when the inline comment was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the inline comment.
           */
          id: string;
          /**
           * Location
           * @description Location metadata of the inline comment.
           */
          location: {
              [key: string]: unknown;
          };
          /**
           * Macro Rendered Output
           * @description Rendered macro output for the inline comment, if present.
           * @default null
           */
          macroRenderedOutput: {
              [key: string]: unknown;
          } | null;
          /**
           * Status
           * @description Current status of the inline comment.
           */
          status: string;
          /**
           * Type
           * @description Content type, always 'comment'.
           * @constant
           */
          type: "comment";
          /**
           * Updated At
           * @description Timestamp when the inline comment was last updated.
           */
          updatedAt: string;
          /**
           * InlineCommentVersion
           * @description Version information of the inline comment.
           * @default null
           */
          version: {
              /**
               * By
               * @description User who made this version of the inline comment.
               */
              by: {
                  [key: string]: unknown;
              };
              /**
               * Number
               * @description Version number of the inline comment.
               */
              number: number;
              /**
               * When
               * @description Timestamp when this version was created.
               */
              when: string;
          } | null;
      }[];
      /**
       * Size
       * @description Number of inline comments returned in this response.
       */
      size: number;
      /**
       * Start
       * @description Index of the first returned inline comment.
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS tool input.
 */
type CONFLUENCE_GET_LABELS_INPUT = {
  /**
   * Limit
   * @description Maximum number of labels to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Start
   * @description Zero-based index of the first label to return (pagination offset).
   * @default null
   */
  start: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS tool output.
 */
type CONFLUENCE_GET_LABELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Expandable
       * @description Expandable fields for further detail.
       */
      _expandable: {
          [key: string]: unknown;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Links
       * @description Pagination links for navigating the result set.
       */
      links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this set of label results.
           */
          self: string;
      };
      /**
       * Results
       * @description List of labels returned.
       */
      results: {
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Name
           * @description Name of the label.
           */
          name: string;
          /**
           * Prefix
           * @description Prefix of the label, e.g., 'global'.
           */
          prefix: string;
      }[];
      /**
       * Size
       * @description Number of items returned in this response.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned.
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS_FOR_PAGE tool input.
 */
type CONFLUENCE_GET_LABELS_FOR_PAGE_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence page to retrieve labels for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of labels to return per page.
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first label to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS_FOR_PAGE tool output.
 */
type CONFLUENCE_GET_LABELS_FOR_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of labels returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of labels returned.
       */
      results: {
          /**
           *  Links
           * @description Links related to this label.
           */
          _links: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Name
           * @description Name of the label.
           */
          name: string;
          /**
           * Prefix
           * @description Prefix (namespace) of the label, e.g., 'global'.
           */
          prefix: string;
      }[];
      /**
       * Size
       * @description Actual number of labels returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first label returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS_FOR_SPACE tool input.
 */
type CONFLUENCE_GET_LABELS_FOR_SPACE_INPUT = {
  /**
   * Id
   * @description ID or key of the space to retrieve labels for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of labels to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Start
   * @description Zero-based index of the first label to return (pagination offset).
   * @default null
   */
  start: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS_FOR_SPACE tool output.
 */
type CONFLUENCE_GET_LABELS_FOR_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating results.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this set of label results.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of labels returned for the space.
       */
      results: {
          /**
           *  Links
           * @description Relevant links for the label.
           */
          _links: {
              /**
               * Context
               * @description Context link for this label, if available.
               * @default null
               */
              context: string | null;
              /**
               * Self
               * @description Link to this label resource.
               */
              self: string;
          };
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Label
           * @description Name of the label.
           */
          label: string;
          /**
           * Owner
           * @description Owner of the label.
           */
          owner: {
              /**
               * Account Id
               * @description Account ID of the owner.
               */
              accountId: string;
              /**
               * Display Name
               * @description Display name of the owner.
               * @default null
               */
              displayName: string | null;
              /**
               * Type
               * @description Type of the owner (e.g., 'known_user').
               */
              type: string;
          };
          /**
           * Prefix
           * @description Prefix of the label (e.g., 'global').
           */
          prefix: string;
      }[];
      /**
       * Size
       * @description Number of items returned in this response.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned.
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT tool input.
 */
type CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT_INPUT = {
  /**
   * Id
   * @description The ID of the space to list content labels for.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of labels to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Prefix
   * @description Filter labels by this prefix (e.g., 'global', 'page-').
   * @default null
   */
  prefix: string | null;
  /**
   * Start
   * @description Zero-based index of the first label to return (pagination offset).
   * @default null
   */
  start: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT tool output.
 */
type CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links object.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this set of label results.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of labels applied to space content.
       */
      results: {
          /**
           * Id
           * @description Unique identifier of the label.
           */
          id: string;
          /**
           * Name
           * @description Name of the label.
           */
          name: string;
          /**
           * Owner
           * @description Owner information for the label, if available.
           */
          owner: {
              [key: string]: unknown;
          };
          /**
           * Prefix
           * @description Prefix categorizing the label.
           */
          prefix: string;
      }[];
      /**
       * Size
       * @description Actual number of items returned in this response.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned in this page.
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGES tool input.
 */
type CONFLUENCE_GET_PAGES_INPUT = {
  /**
   * Author Id
   * @description Filter by the author's account ID.
   * @default null
   */
  authorId: string | null;
  /**
   * Direction
   * @description Sort direction: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Expand
   * @description Properties to expand in response (e.g., 'body.storage', 'metadata.labels').
   * @default null
   */
  expand: string[] | null;
  /**
   * Label
   * @description Filter by labels; pages must have at least one of these labels.
   * @default null
   */
  label: string[] | null;
  /**
   * Limit
   * @description Maximum number of pages to return per page. Confluence caps at 200.
   * @default 25
   */
  limit: number;
  /**
   * Sort
   * @description Field to sort by (e.g., 'created', 'modified').
   * @default null
   */
  sort: string | null;
  /**
   * Space Id
   * @description Filter by the ID of the space.
   * @default null
   */
  spaceId: string | null;
  /**
   * Start
   * @description Zero-based index of the first item to return (pagination offset).
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Filter by page status (e.g., 'current').
   * @default null
   */
  status: string | null;
  /**
   * Type
   * @description Filter by content type (e.g., 'page').
   * @default null
   */
  type: string | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGES tool output.
 */
type CONFLUENCE_GET_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of pages retrieved.
       */
      results: {
          /**
           *  Links
           * @description Links related to the page.
           */
          _links: {
              /**
               * Self
               * @description Link to this page resource.
               * @default null
               */
              self: string | null;
              /**
               * Tinyui
               * @description Relative link to view page in Tiny UI.
               * @default null
               */
              tinyui: string | null;
              /**
               * Webui
               * @description Relative link to view page in web UI.
               * @default null
               */
              webui: string | null;
          };
          /**
           * Id
           * @description Page ID.
           */
          id: string;
          /**
           * Space
           * @description Space details where the page resides.
           */
          space: {
              /**
               * Id
               * @description ID of the space.
               */
              id: string;
              /**
               * Key
               * @description Key of the space.
               * @default null
               */
              key: string | null;
              /**
               * Name
               * @description Name of the space.
               * @default null
               */
              name: string | null;
          };
          /**
           * Status
           * @description Status of the page, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title of the page.
           */
          title: string;
          /**
           * Type
           * @description Type of content, e.g., 'page'.
           */
          type: string;
          /**
           * Version
           * @description Version information of the page.
           */
          version: {
              /**
               * By
               * @description User who created this version.
               */
              by: {
                  /**
                   * Account Id
                   * @description User's Atlassian account ID.
                   * @default null
                   */
                  accountId: string | null;
                  /**
                   * Display Name
                   * @description User's display name.
                   * @default null
                   */
                  displayName: string | null;
                  /**
                   * Type
                   * @description Type of user (e.g., 'known').
                   * @default null
                   */
                  type: string | null;
                  /**
                   * Username
                   * @description User's username, if available.
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Message
               * @description Version message.
               * @default null
               */
              message: string | null;
              /**
               * When
               * @description Timestamp when this version was created.
               */
              when: string;
          };
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_ANCESTORS tool input.
 */
type CONFLUENCE_GET_PAGE_ANCESTORS_INPUT = {
  /**
   * Id
   * @description ID of the Confluence page to retrieve ancestors for.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_ANCESTORS tool output.
 */
type CONFLUENCE_GET_PAGE_ANCESTORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description Ordered list of ancestor pages from root to immediate parent.
       */
      results: {
          /**
           *  Expandable
           * @description Expandable link references for additional fields.
           */
          _expandable?: {
              [key: string]: unknown;
          };
          /**
           *  Links
           * @description Links related to the ancestor page.
           */
          _links?: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the ancestor page.
           */
          id: string;
          /**
           * Macro Rendered Output
           * @description Rendered macro content of the ancestor page, if any.
           * @default null
           */
          macroRenderedOutput: {
              [key: string]: unknown;
          } | null;
          /**
           * Space Id
           * @description ID of the space containing the ancestor page.
           */
          spaceId: string;
          /**
           * Status
           * @description Current status of the page, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title of the ancestor page.
           */
          title: string;
          /**
           * Type
           * @description Content type, e.g., 'page'.
           */
          type: string;
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination offset).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_BY_ID tool input.
 */
type CONFLUENCE_GET_PAGE_BY_ID_INPUT = {
  /**
   * Draft
   * @description Whether to return the draft version (default: false).
   * @default null
   */
  draft: boolean | null;
  /**
   * Id
   * @description ID of the Confluence page to retrieve.
   */
  id?: string;
  /**
   * Version
   * @description Specific page version to retrieve (default: latest).
   * @default null
   */
  version: number | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_BY_ID tool output.
 */
type CONFLUENCE_GET_PAGE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the page.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Author
       * @description Information about the page creator.
       */
      author: {
          [key: string]: unknown;
      };
      /**
       * Body
       * @description Page body in various representations.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the page was created.
       */
      createdAt: string;
      /**
       * Id
       * @description ID of the page.
       */
      id: string;
      /**
       * Parent Id
       * @description ID of the parent page, if any.
       * @default null
       */
      parentId: string | null;
      /**
       * Space Id
       * @description ID of the space containing the page.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the page, e.g., 'current'.
       */
      status: string;
      /**
       * Title
       * @description Title of the page.
       */
      title: string;
      /**
       * Type
       * @description Content type, e.g., 'page'.
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the page was last updated.
       */
      updatedAt: string;
      /**
       * Version
       * @description Version information of the page.
       */
      version: {
          /**
           * By
           * @description User who created this version.
           */
          by: {
              /**
               * Account Id
               * @description Account ID of the user.
               * @default null
               */
              accountId: string | null;
              /**
               * ProfilePicture
               * @description Profile picture details for a Confluence user.
               * @default null
               */
              profilePicture: {
                  /**
                   * Height
                   * @description Height of the profile picture in pixels.
                   */
                  height: number;
                  /**
                   * Path
                   * @description Relative path to the profile picture.
                   */
                  path: string;
                  /**
                   * Width
                   * @description Width of the profile picture in pixels.
                   */
                  width: number;
              } | null;
              /**
               * Public Name
               * @description Public name of the user.
               * @default null
               */
              publicName: string | null;
              /**
               * Type
               * @description Type of user, e.g., 'known'.
               */
              type: string;
              /**
               * Username
               * @description Username of the user.
               * @default null
               */
              username: string | null;
          };
          /**
           * Message
           * @description Version message or comment.
           * @default null
           */
          message: string | null;
          /**
           * Minor Edit
           * @description Whether the version change was a minor edit.
           * @default null
           */
          minorEdit: boolean | null;
          /**
           * Number
           * @description Version number of the page.
           */
          number: number;
          /**
           * When
           * @description Timestamp when this version was created.
           */
          when: string;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_LIKE_COUNT tool input.
 */
type CONFLUENCE_GET_PAGE_LIKE_COUNT_INPUT = {
  /**
   * Id
   * @description Identifier of the Confluence page to retrieve like count for.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_LIKE_COUNT tool output.
 */
type CONFLUENCE_GET_PAGE_LIKE_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description Number of likes for the page.
       */
      value: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_VERSIONS tool input.
 */
type CONFLUENCE_GET_PAGE_VERSIONS_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Confluence page.
   */
  id?: string;
  /**
   * Limit
   * @description Maximum number of versions to return per page (pagination limit).
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first version to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_PAGE_VERSIONS tool output.
 */
type CONFLUENCE_GET_PAGE_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to the current set of results.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of versions returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of version entries.
       */
      results: {
          /**
           * Created At
           * @description Timestamp when this version was created.
           */
          createdAt: string;
          /**
           * Created By
           * @description User who created this version.
           */
          createdBy: {
              /**
               * Account Id
               * @description Atlassian account ID of the user.
               */
              accountId: string;
              /**
               * Display Name
               * @description Display name of the user.
               */
              displayName: string;
              /**
               * Id
               * @description ID of the user who created this version.
               */
              id: string;
          };
          /**
           * Id
           * @description Identifier of the version entry.
           */
          id: string;
          /**
           * Message
           * @description Optional comment for this version.
           * @default null
           */
          message: string | null;
          /**
           * Minor Edit
           * @description Whether this version was marked as a minor edit.
           */
          minorEdit: boolean;
          /**
           * Number
           * @description Sequential version number of the page.
           */
          number: number;
      }[];
      /**
       * Size
       * @description Total number of versions returned in this response.
       */
      size: number;
      /**
       * Start
       * @description Index of the first version returned.
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACES tool input.
 */
type CONFLUENCE_GET_SPACES_INPUT = {
  /**
   * Expand
   * @description Properties to expand in response (e.g., 'description', 'icon', 'metadata').
   * @default null
   */
  expand: string[] | null;
  /**
   * Label
   * @description Filter by labels; spaces must have at least one of these labels.
   * @default null
   */
  label: string[] | null;
  /**
   * Limit
   * @description Maximum number of spaces to return per page. Confluence caps at 200.
   * @default 25
   */
  limit: number;
  /**
   * Space Key
   * @description Filter by space key(s); accepts one or more space keys.
   * @default null
   */
  spaceKey: string[] | null;
  /**
   * Start
   * @description Zero-based index of the first item to return (pagination offset).
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Status of space: 'current' (active) or 'archived'.
   * @default null
   * @enum {string|null}
   */
  status: "current" | "archived" | null;
  /**
   * Type
   * @description Type of space: 'global' or 'personal'.
   * @default null
   * @enum {string|null}
   */
  type: "global" | "personal" | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACES tool output.
 */
type CONFLUENCE_GET_SPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of spaces retrieved.
       */
      results: {
          /**
           *  Links
           * @description Related resource links for the space.
           */
          _links: {
              [key: string]: unknown;
          };
          /**
           * Description
           * @description Description object of the space.
           * @default null
           */
          description: {
              [key: string]: unknown;
          } | null;
          /**
           * Homepage Id
           * @description ID of the homepage of the space.
           * @default null
           */
          homepageId: string | null;
          /**
           * Icon
           * @description Icon metadata for the space.
           * @default null
           */
          icon: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the space.
           */
          id: string;
          /**
           * Key
           * @description Unique key of the space.
           */
          key: string;
          /**
           * Name
           * @description Human-readable name of the space.
           */
          name: string;
          /**
           * Status
           * @description Status of the space.
           * @enum {string}
           */
          status: "current" | "archived";
          /**
           * Type
           * @description Type of the space.
           * @enum {string}
           */
          type: "global" | "personal";
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACE_BY_ID tool input.
 */
type CONFLUENCE_GET_SPACE_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the space to be returned.
   */
  id?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACE_BY_ID tool output.
 */
type CONFLUENCE_GET_SPACE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Related resource links for the space.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Description object of the space.
       */
      description: {
          [key: string]: unknown;
      };
      /**
       * Homepage Id
       * @description ID of the homepage of the space.
       */
      homepageId: string;
      /**
       * Icon
       * @description Icon metadata for the space.
       */
      icon: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The unique identifier of the space.
       */
      id: string;
      /**
       * Key
       * @description The unique key of the space.
       */
      key: string;
      /**
       * Name
       * @description Human-readable name of the space.
       */
      name: string;
      /**
       * Status
       * @description Status of the space.
       * @enum {string}
       */
      status: "current" | "archived";
      /**
       * Type
       * @description Type of the space.
       * @enum {string}
       */
      type: "global" | "personal";
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
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACE_CONTENTS tool input.
 */
type CONFLUENCE_GET_SPACE_CONTENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return per page. Confluence caps at 200.
   * @default null
   */
  limit: number | null;
  /**
   * Posting Day
   * Format: date
   * @description For blogposts, filter by publish date (ISO date, yyyy-MM-dd).
   * @default null
   */
  postingDay: string | null;
  /**
   * Space Key
   * @description Key of the space to retrieve content from.
   */
  spaceKey?: string;
  /**
   * Start
   * @description Zero-based index of the first item to return (pagination offset).
   * @default null
   */
  start: number | null;
  /**
   * Status
   * @description Status of the content to return ('current', 'trashed', 'draft', 'historical').
   * @default null
   * @enum {string|null}
   */
  status: "current" | "trashed" | "draft" | "historical" | null;
  /**
   * Type
   * @description Type of content to return (e.g., 'page', 'blogpost', 'attachment').
   * @default null
   * @enum {string|null}
   */
  type: "page" | "blogpost" | "attachment" | null;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACE_CONTENTS tool output.
 */
type CONFLUENCE_GET_SPACE_CONTENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigation.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of content items returned.
       */
      results: {
          /**
           * Id
           * @description ID of the content item.
           */
          id: string;
          /**
           * Status
           * @description Status of content, e.g., 'current'.
           */
          status: string;
          /**
           * Title
           * @description Title of the content item.
           */
          title: string;
          /**
           * Type
           * @description Type of content, e.g., 'page'.
           */
          type: string;
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACE_PROPERTIES tool input.
 */
type CONFLUENCE_GET_SPACE_PROPERTIES_INPUT = {
  /**
   * Id
   * @description ID of the space to get properties for.
   */
  id?: string;
  /**
   * Key
   * @description Filter by property key(s). If not provided, returns all properties.
   * @default null
   */
  key: string[] | null;
  /**
   * Limit
   * @description Maximum number of properties to return per page. Confluence caps at 200.
   * @default 25
   */
  limit: number;
  /**
   * Start
   * @description Zero-based index of the first item to return (pagination offset).
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_SPACE_PROPERTIES tool output.
 */
type CONFLUENCE_GET_SPACE_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links for navigating the result set.
       */
      _links: {
          /**
           * Next
           * @description Link to the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to the previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Self link for this result set.
           */
          self: string;
      };
      /**
       * Limit
       * @description Maximum number of items returned per page.
       */
      limit: number;
      /**
       * Results
       * @description List of space properties retrieved.
       */
      results: {
          /**
           *  Links
           * @description Resource links for the property.
           */
          _links: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description ISO8601 timestamp when the property was created.
           */
          createdAt: string;
          /**
           * Created By
           * @description Information about who created the property.
           * @default null
           */
          createdBy: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the property.
           */
          id: string;
          /**
           * Key
           * @description Key/name of the property.
           */
          key: string;
          /**
           * Value
           * @description Value of the property (can be any JSON type).
           */
          value: unknown;
          /**
           * Version
           * @description Version information of the property.
           * @default null
           */
          version: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Size
       * @description Actual number of items returned.
       */
      size: number;
      /**
       * Start
       * @description Index of the first item returned (pagination).
       */
      start: number;
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
 * Type of CONFLUENCE's CONFLUENCE_GET_USER_ANONYMOUS tool input.
 */
type CONFLUENCE_GET_USER_ANONYMOUS_INPUT = object;

/**
 * Type of CONFLUENCE's CONFLUENCE_GET_USER_ANONYMOUS tool output.
 */
type CONFLUENCE_GET_USER_ANONYMOUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Expandable
       * @description Expandable sub-resources for the anonymous user.
       * @default null
       */
      _expandable: {
          [key: string]: unknown;
      } | null;
      /**
       *  Links
       * @description Related resource links.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Display Name
       * @description Display name of the anonymous user.
       */
      displayName: string;
      /**
       * Profile Picture
       * @description Anonymous user's profile picture details.
       */
      profilePicture: {
          /**
           * Height
           * @description Height of the profile picture in pixels.
           */
          height: number;
          /**
           * Is Default
           * @description Whether this image is the system default.
           */
          isDefault: boolean;
          /**
           * Path
           * @description Relative path to the profile picture.
           */
          path: string;
          /**
           * Width
           * @description Width of the profile picture in pixels.
           */
          width: number;
      };
      /**
       * Type
       * @description Type of user, always 'anonymous'.
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
 * Type of CONFLUENCE's CONFLUENCE_SEARCH_CONTENT tool input.
 */
type CONFLUENCE_SEARCH_CONTENT_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of properties to expand in the response
   * @default null
   */
  expand: string | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default 25
   */
  limit: number;
  /**
   * Query
   * @description Search query to find matching pages. The search will look for this text in page titles with intelligent matching including: (1) Exact phrase matches (highest priority), (2) All words present anywhere in title (medium priority), (3) Partial word matches (lowest priority). Search is case-insensitive and supports multiple words.
   */
  query?: string;
  /**
   * Space Key
   * @description Limit search to a specific space by space key (will be added to CQL query)
   * @default null
   */
  spaceKey: string | null;
  /**
   * Start
   * @description Starting index for pagination
   * @default 0
   */
  start: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_SEARCH_CONTENT tool output.
 */
type CONFLUENCE_SEARCH_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The complete response data from the Confluence search API.
       */
      response_data: {
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
 * Type of CONFLUENCE's CONFLUENCE_SEARCH_USERS tool input.
 */
type CONFLUENCE_SEARCH_USERS_INPUT = {
  /**
   * Account Id
   * @description Filter by user account ID
   * @default null
   */
  accountId: string | null;
  /**
   * Cursor
   * @description Used for pagination. The cursor for the next page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of users per result to return
   * @default 25
   */
  limit: number;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_SEARCH_USERS tool output.
 */
type CONFLUENCE_SEARCH_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The complete response data from the Confluence search users API.
       */
      response_data: {
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
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_BLOGPOST tool input.
 */
type CONFLUENCE_UPDATE_BLOGPOST_INPUT = {
  /**
   * Body
   * @description New content for the blog post body. Should be a mapping of representation name to content object, e.g., ``{'storage': {'value': '<p>Content</p>', 'representation': 'storage'}}``.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Id
   * @description ID of the blog post to update.
   */
  id?: string;
  /**
   * Space Id
   * @description ID of the space containing the blog post.
   */
  spaceId?: string;
  /**
   * Status
   * @description Status of the blog post. Defaults to 'current' if not provided.
   * @default null
   * @enum {string|null}
   */
  status: "current" | "draft" | "archived" | null;
  /**
   * Title
   * @description New title for the blog post.
   */
  title?: string;
  /**
   * Type
   * @description Content type, must be 'blogpost'.
   * @default blogpost
   * @constant
   */
  type: "blogpost";
  /**
   * Version
   * @description Version object containing the new version number and optional metadata.
   */
  version?: {
      /**
       * Message
       * @description Optional message describing the version update.
       * @default null
       */
      message: string | null;
      /**
       * Minor Edit
       * @description Whether this update is a minor edit.
       * @default null
       */
      minorEdit: boolean | null;
      /**
       * Number
       * @description New version number for the blog post (must be ≥ 1).
       */
      number: number;
  };
};

/**
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_BLOGPOST tool output.
 */
type CONFLUENCE_UPDATE_BLOGPOST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the blog post.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Body
       * @description Blog post body in various representations.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the blog post was originally created.
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Blog post identifier.
       */
      id: string;
      /**
       * Space Id
       * @description Space ID where the blog post resides.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the blog post, e.g., 'current'.
       */
      status: string;
      /**
       * Title
       * @description Title of the blog post.
       */
      title: string;
      /**
       * Type
       * @description Content type, should be 'blogpost'.
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the blog post was last updated.
       * @default null
       */
      updatedAt: string | null;
      /**
       * Version
       * @description Version information of the updated blog post.
       */
      version: {
          /**
           * By
           * @description User who created this version.
           */
          by: {
              /**
               * Account Id
               * @description Account ID of the user.
               * @default null
               */
              accountId: string | null;
              /**
               * ProfilePicture
               * @description Profile picture details for a Confluence user.
               * @default null
               */
              profilePicture: {
                  /**
                   * Height
                   * @description Height of the profile picture in pixels.
                   */
                  height: number;
                  /**
                   * Path
                   * @description Relative path to the profile picture.
                   */
                  path: string;
                  /**
                   * Width
                   * @description Width of the profile picture in pixels.
                   */
                  width: number;
              } | null;
              /**
               * Public Name
               * @description Public name of the user.
               * @default null
               */
              publicName: string | null;
              /**
               * Type
               * @description Type of user, e.g., 'known'.
               */
              type: string;
              /**
               * Username
               * @description Username of the user.
               * @default null
               */
              username: string | null;
          };
          /**
           * Message
           * @description Version message or comment.
           * @default null
           */
          message: string | null;
          /**
           * Minor Edit
           * @description Whether the version change was a minor edit.
           * @default null
           */
          minorEdit: boolean | null;
          /**
           * Number
           * @description Version number of the post.
           */
          number: number;
          /**
           * When
           * @description Timestamp when this version was created.
           */
          when: string;
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
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_BLOGPOST_PROPERTY tool input.
 */
type CONFLUENCE_UPDATE_BLOGPOST_PROPERTY_INPUT = {
  /**
   * Id
   * @description ID of the Confluence blog post to update.
   */
  id?: string;
  /**
   * Property Key
   * @description Key of the property to update on the blog post.
   */
  propertyKey?: string;
  /**
   * Value
   * @description New JSON-serializable value for the specified property.
   */
  value?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_BLOGPOST_PROPERTY tool output.
 */
type CONFLUENCE_UPDATE_BLOGPOST_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Expandable
       * @description Expandable entities for the property.
       */
      _expandable: {
          [key: string]: unknown;
      };
      /**
       *  Links
       * @description API links related to the property.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Identifier of the updated property.
       */
      id: string;
      /**
       * Key
       * @description Key of the updated property.
       */
      key: string;
      /**
       * Value
       * @description Value of the updated property.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version information of the property.
       */
      version: {
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
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID tool input.
 */
type CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_INPUT = {
  /**
   * Page Id
   * @description ID of the Confluence page to update the property on.
   */
  pageId?: string;
  /**
   * Property Id
   * @description ID of the content property to update on the page.
   */
  propertyId?: string;
  /**
   * Value
   * @description New JSON-serializable value for the specified property.
   */
  value?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID tool output.
 */
type CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description API links related to the property.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Identifier of the updated property.
       */
      id: string;
      /**
       * Key
       * @description Key of the updated property.
       */
      key: string;
      /**
       * Value
       * @description Value of the updated property.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version information of the property.
       */
      version: {
          /**
           * Author Id
           * @description ID of the user who authored this version.
           * @default null
           */
          authorId: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when this version was created.
           */
          createdAt: string;
          /**
           * Message
           * @description Optional message for this version.
           * @default null
           */
          message: string | null;
          /**
           * Minor Edit
           * @description Indicates if this is a minor edit.
           */
          minorEdit: boolean;
          /**
           * Number
           * @description Version number of the property.
           */
          number: number;
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
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID tool input.
 */
type CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_INPUT = {
  /**
   * Property Id
   * @description ID of the content property to update on the whiteboard.
   */
  propertyId?: string;
  /**
   * Value
   * @description New JSON object value for the specified content property.
   */
  value?: {
      [key: string]: unknown;
  };
  /**
   * Whiteboard Id
   * @description ID of the Confluence whiteboard containing the property to update.
   */
  whiteboardId?: string;
};

/**
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID tool output.
 */
type CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the property was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the updated property.
       */
      id: string;
      /**
       * Key
       * @description Key of the updated property.
       */
      key: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the property was last updated.
       */
      updatedAt: string;
      /**
       * Value
       * @description JSON object representing the updated property value.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version number of the updated property.
       */
      version: number;
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
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_PAGE tool input.
 */
type CONFLUENCE_UPDATE_PAGE_INPUT = {
  /**
   * Body
   * @description Updated content body of the page.
   */
  body?: {
      /**
       * Storage
       * @description Storage format content.
       */
      storage: {
          /**
           * Representation
           * @description The representation format of the content. Must be 'storage'.
           * @default storage
           */
          representation: string;
          /**
           * Value
           * @description The content body in Confluence storage format.
           */
          value: string;
      };
  };
  /**
   * Id
   * @description ID of the page to update.
   */
  id?: string;
  /**
   * Space Id
   * @description ID of the space containing the page.
   */
  spaceId?: string;
  /**
   * Title
   * @description Updated title of the page.
   */
  title?: string;
  /**
   * Type
   * @description Content type. Must be 'page'.
   * @default page
   */
  type: string;
  /**
   * Version
   * @description Version information for the update.
   */
  version?: {
      /**
       * Message
       * @description Optional version message describing the changes.
       * @default null
       */
      message: string | null;
      /**
       * Number
       * @description The next version number (current version + 1).
       */
      number: number;
  };
};

/**
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_PAGE tool output.
 */
type CONFLUENCE_UPDATE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Resource links for the page.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Body
       * @description Updated page body content.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO8601 timestamp when the page was originally created.
       */
      createdAt: string;
      /**
       * Id
       * @description ID of the updated page.
       */
      id: string;
      /**
       * Parent Id
       * @description ID of the parent page, if any.
       * @default null
       */
      parentId: string | null;
      /**
       * Space Id
       * @description ID of the space containing the page.
       */
      spaceId: string;
      /**
       * Status
       * @description Status of the page.
       */
      status: string;
      /**
       * Title
       * @description Updated title of the page.
       */
      title: string;
      /**
       * Type
       * @description Content type.
       */
      type: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the page was last updated.
       */
      updatedAt: string;
      /**
       * Version
       * @description Version information of the page.
       */
      version: {
          /**
           * Message
           * @description Version message.
           * @default null
           */
          message: string | null;
          /**
           * Minor Edit
           * @description Whether it was a minor edit.
           * @default null
           */
          minorEdit: boolean | null;
          /**
           * Number
           * @description Updated version number.
           */
          number: number;
          /**
           * When
           * @description Timestamp when the page was updated.
           */
          when: string;
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
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_SPACE_PROPERTY tool input.
 */
type CONFLUENCE_UPDATE_SPACE_PROPERTY_INPUT = {
  /**
   * Property Key
   * @description Key of the space property to update.
   */
  propertyKey?: string;
  /**
   * Space Key
   * @description Key of the space containing the property.
   */
  spaceKey?: string;
  /**
   * Value
   * @description New JSON-serializable value for the specified space property.
   */
  value?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONFLUENCE's CONFLUENCE_UPDATE_SPACE_PROPERTY tool output.
 */
type CONFLUENCE_UPDATE_SPACE_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Expandable
       * @description Expandable entities for the space property.
       */
      _expandable: {
          [key: string]: unknown;
      };
      /**
       *  Links
       * @description API links related to the space property.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Identifier of the updated space property.
       */
      id: string;
      /**
       * Key
       * @description Key of the updated space property.
       */
      key: string;
      /**
       * Value
       * @description Value of the updated space property.
       */
      value: {
          [key: string]: unknown;
      };
      /**
       * Version
       * @description Version information of the space property.
       */
      version: {
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
 * Type map of all available tool input types for toolkit "CONFLUENCE".
 */
export type CONFLUENCE_TOOL_INPUTS = {
  ADD_CONTENT_LABEL: CONFLUENCE_ADD_CONTENT_LABEL_INPUT
  CONFLUENCE_GET_SPACE_BY_ID: CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID_INPUT
  CREATE_BLOGPOST: CONFLUENCE_CREATE_BLOGPOST_INPUT
  CREATE_BLOGPOST_PROPERTY: CONFLUENCE_CREATE_BLOGPOST_PROPERTY_INPUT
  CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD: CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD_INPUT
  CREATE_PAGE: CONFLUENCE_CREATE_PAGE_INPUT
  CREATE_PAGE_PROPERTY: CONFLUENCE_CREATE_PAGE_PROPERTY_INPUT
  CREATE_PRIVATE_SPACE: CONFLUENCE_CREATE_PRIVATE_SPACE_INPUT
  CREATE_SPACE: CONFLUENCE_CREATE_SPACE_INPUT
  CREATE_SPACE_PROPERTY: CONFLUENCE_CREATE_SPACE_PROPERTY_INPUT
  CREATE_WHITEBOARD: CONFLUENCE_CREATE_WHITEBOARD_INPUT
  DELETE_BLOGPOST_PROPERTY: CONFLUENCE_DELETE_BLOGPOST_PROPERTY_INPUT
  DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID: CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_INPUT
  DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID: CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_INPUT
  DELETE_PAGE: CONFLUENCE_DELETE_PAGE_INPUT
  DELETE_SPACE: CONFLUENCE_DELETE_SPACE_INPUT
  DELETE_SPACE_PROPERTY: CONFLUENCE_DELETE_SPACE_PROPERTY_INPUT
  GET_ATTACHMENTS: CONFLUENCE_GET_ATTACHMENTS_INPUT
  GET_ATTACHMENT_LABELS: CONFLUENCE_GET_ATTACHMENT_LABELS_INPUT
  GET_AUDIT_LOGS: CONFLUENCE_GET_AUDIT_LOGS_INPUT
  GET_BLOGPOSTS: CONFLUENCE_GET_BLOGPOSTS_INPUT
  GET_BLOGPOST_BY_ID: CONFLUENCE_GET_BLOGPOST_BY_ID_INPUT
  GET_BLOGPOST_LABELS: CONFLUENCE_GET_BLOGPOST_LABELS_INPUT
  GET_BLOGPOST_LIKE_COUNT: CONFLUENCE_GET_BLOGPOST_LIKE_COUNT_INPUT
  GET_BLOGPOST_OPERATIONS: CONFLUENCE_GET_BLOGPOST_OPERATIONS_INPUT
  GET_BLOGPOST_VERSIONS: CONFLUENCE_GET_BLOGPOST_VERSIONS_INPUT
  GET_BLOGPOST_VERSION_DETAILS: CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS_INPUT
  GET_BLOG_POSTS: CONFLUENCE_GET_BLOG_POSTS_INPUT
  GET_BLOG_POSTS_FOR_LABEL: CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL_INPUT
  GET_CHILD_PAGES: CONFLUENCE_GET_CHILD_PAGES_INPUT
  GET_CONTENT_PROPERTIES_FOR_BLOG_POST: CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST_INPUT
  GET_CONTENT_PROPERTIES_FOR_PAGE: CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE_INPUT
  GET_CONTENT_RESTRICTIONS: CONFLUENCE_GET_CONTENT_RESTRICTIONS_INPUT
  GET_CURRENT_USER: CONFLUENCE_GET_CURRENT_USER_INPUT
  GET_INLINE_COMMENTS_FOR_BLOG_POST: CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST_INPUT
  GET_LABELS: CONFLUENCE_GET_LABELS_INPUT
  GET_LABELS_FOR_PAGE: CONFLUENCE_GET_LABELS_FOR_PAGE_INPUT
  GET_LABELS_FOR_SPACE: CONFLUENCE_GET_LABELS_FOR_SPACE_INPUT
  GET_LABELS_FOR_SPACE_CONTENT: CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT_INPUT
  GET_PAGES: CONFLUENCE_GET_PAGES_INPUT
  GET_PAGE_ANCESTORS: CONFLUENCE_GET_PAGE_ANCESTORS_INPUT
  GET_PAGE_BY_ID: CONFLUENCE_GET_PAGE_BY_ID_INPUT
  GET_PAGE_LIKE_COUNT: CONFLUENCE_GET_PAGE_LIKE_COUNT_INPUT
  GET_PAGE_VERSIONS: CONFLUENCE_GET_PAGE_VERSIONS_INPUT
  GET_SPACES: CONFLUENCE_GET_SPACES_INPUT
  GET_SPACE_BY_ID: CONFLUENCE_GET_SPACE_BY_ID_INPUT
  GET_SPACE_CONTENTS: CONFLUENCE_GET_SPACE_CONTENTS_INPUT
  GET_SPACE_PROPERTIES: CONFLUENCE_GET_SPACE_PROPERTIES_INPUT
  GET_USER_ANONYMOUS: CONFLUENCE_GET_USER_ANONYMOUS_INPUT
  SEARCH_CONTENT: CONFLUENCE_SEARCH_CONTENT_INPUT
  SEARCH_USERS: CONFLUENCE_SEARCH_USERS_INPUT
  UPDATE_BLOGPOST: CONFLUENCE_UPDATE_BLOGPOST_INPUT
  UPDATE_BLOGPOST_PROPERTY: CONFLUENCE_UPDATE_BLOGPOST_PROPERTY_INPUT
  UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID: CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_INPUT
  UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID: CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_INPUT
  UPDATE_PAGE: CONFLUENCE_UPDATE_PAGE_INPUT
  UPDATE_SPACE_PROPERTY: CONFLUENCE_UPDATE_SPACE_PROPERTY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONFLUENCE".
 */
export type CONFLUENCE_TOOL_OUTPUTS = {
  ADD_CONTENT_LABEL: CONFLUENCE_ADD_CONTENT_LABEL_OUTPUT
  CONFLUENCE_GET_SPACE_BY_ID: CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID_OUTPUT
  CREATE_BLOGPOST: CONFLUENCE_CREATE_BLOGPOST_OUTPUT
  CREATE_BLOGPOST_PROPERTY: CONFLUENCE_CREATE_BLOGPOST_PROPERTY_OUTPUT
  CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD: CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD_OUTPUT
  CREATE_PAGE: CONFLUENCE_CREATE_PAGE_OUTPUT
  CREATE_PAGE_PROPERTY: CONFLUENCE_CREATE_PAGE_PROPERTY_OUTPUT
  CREATE_PRIVATE_SPACE: CONFLUENCE_CREATE_PRIVATE_SPACE_OUTPUT
  CREATE_SPACE: CONFLUENCE_CREATE_SPACE_OUTPUT
  CREATE_SPACE_PROPERTY: CONFLUENCE_CREATE_SPACE_PROPERTY_OUTPUT
  CREATE_WHITEBOARD: CONFLUENCE_CREATE_WHITEBOARD_OUTPUT
  DELETE_BLOGPOST_PROPERTY: CONFLUENCE_DELETE_BLOGPOST_PROPERTY_OUTPUT
  DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID: CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_OUTPUT
  DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID: CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_OUTPUT
  DELETE_PAGE: CONFLUENCE_DELETE_PAGE_OUTPUT
  DELETE_SPACE: CONFLUENCE_DELETE_SPACE_OUTPUT
  DELETE_SPACE_PROPERTY: CONFLUENCE_DELETE_SPACE_PROPERTY_OUTPUT
  GET_ATTACHMENTS: CONFLUENCE_GET_ATTACHMENTS_OUTPUT
  GET_ATTACHMENT_LABELS: CONFLUENCE_GET_ATTACHMENT_LABELS_OUTPUT
  GET_AUDIT_LOGS: CONFLUENCE_GET_AUDIT_LOGS_OUTPUT
  GET_BLOGPOSTS: CONFLUENCE_GET_BLOGPOSTS_OUTPUT
  GET_BLOGPOST_BY_ID: CONFLUENCE_GET_BLOGPOST_BY_ID_OUTPUT
  GET_BLOGPOST_LABELS: CONFLUENCE_GET_BLOGPOST_LABELS_OUTPUT
  GET_BLOGPOST_LIKE_COUNT: CONFLUENCE_GET_BLOGPOST_LIKE_COUNT_OUTPUT
  GET_BLOGPOST_OPERATIONS: CONFLUENCE_GET_BLOGPOST_OPERATIONS_OUTPUT
  GET_BLOGPOST_VERSIONS: CONFLUENCE_GET_BLOGPOST_VERSIONS_OUTPUT
  GET_BLOGPOST_VERSION_DETAILS: CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS_OUTPUT
  GET_BLOG_POSTS: CONFLUENCE_GET_BLOG_POSTS_OUTPUT
  GET_BLOG_POSTS_FOR_LABEL: CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL_OUTPUT
  GET_CHILD_PAGES: CONFLUENCE_GET_CHILD_PAGES_OUTPUT
  GET_CONTENT_PROPERTIES_FOR_BLOG_POST: CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST_OUTPUT
  GET_CONTENT_PROPERTIES_FOR_PAGE: CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE_OUTPUT
  GET_CONTENT_RESTRICTIONS: CONFLUENCE_GET_CONTENT_RESTRICTIONS_OUTPUT
  GET_CURRENT_USER: CONFLUENCE_GET_CURRENT_USER_OUTPUT
  GET_INLINE_COMMENTS_FOR_BLOG_POST: CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST_OUTPUT
  GET_LABELS: CONFLUENCE_GET_LABELS_OUTPUT
  GET_LABELS_FOR_PAGE: CONFLUENCE_GET_LABELS_FOR_PAGE_OUTPUT
  GET_LABELS_FOR_SPACE: CONFLUENCE_GET_LABELS_FOR_SPACE_OUTPUT
  GET_LABELS_FOR_SPACE_CONTENT: CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT_OUTPUT
  GET_PAGES: CONFLUENCE_GET_PAGES_OUTPUT
  GET_PAGE_ANCESTORS: CONFLUENCE_GET_PAGE_ANCESTORS_OUTPUT
  GET_PAGE_BY_ID: CONFLUENCE_GET_PAGE_BY_ID_OUTPUT
  GET_PAGE_LIKE_COUNT: CONFLUENCE_GET_PAGE_LIKE_COUNT_OUTPUT
  GET_PAGE_VERSIONS: CONFLUENCE_GET_PAGE_VERSIONS_OUTPUT
  GET_SPACES: CONFLUENCE_GET_SPACES_OUTPUT
  GET_SPACE_BY_ID: CONFLUENCE_GET_SPACE_BY_ID_OUTPUT
  GET_SPACE_CONTENTS: CONFLUENCE_GET_SPACE_CONTENTS_OUTPUT
  GET_SPACE_PROPERTIES: CONFLUENCE_GET_SPACE_PROPERTIES_OUTPUT
  GET_USER_ANONYMOUS: CONFLUENCE_GET_USER_ANONYMOUS_OUTPUT
  SEARCH_CONTENT: CONFLUENCE_SEARCH_CONTENT_OUTPUT
  SEARCH_USERS: CONFLUENCE_SEARCH_USERS_OUTPUT
  UPDATE_BLOGPOST: CONFLUENCE_UPDATE_BLOGPOST_OUTPUT
  UPDATE_BLOGPOST_PROPERTY: CONFLUENCE_UPDATE_BLOGPOST_PROPERTY_OUTPUT
  UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID: CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID_OUTPUT
  UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID: CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID_OUTPUT
  UPDATE_PAGE: CONFLUENCE_UPDATE_PAGE_OUTPUT
  UPDATE_SPACE_PROPERTY: CONFLUENCE_UPDATE_SPACE_PROPERTY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONFLUENCE toolkit.
 */
export const CONFLUENCE = {
  slug: "confluence",
  tools: {
    /**
     * Tool to add labels to a piece of content. use after obtaining the content id to tag pages or blog posts with metadata labels.
     */
    ADD_CONTENT_LABEL: "CONFLUENCE_ADD_CONTENT_LABEL",
    /**
     * Tool to retrieve a confluence space by its id. use when you need detailed metadata of a specific space.
     */
    CONFLUENCE_GET_SPACE_BY_ID: "CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID",
    /**
     * Tool to create a new confluence blog post. use when you need to publish content in a specific space.
     */
    CREATE_BLOGPOST: "CONFLUENCE_CREATE_BLOGPOST",
    /**
     * Tool to create a property on a specified blog post. use when you need to add custom metadata to a blog post.
     */
    CREATE_BLOGPOST_PROPERTY: "CONFLUENCE_CREATE_BLOGPOST_PROPERTY",
    /**
     * Tool to create a new content property on a whiteboard. use when you need to attach custom metadata to a confluence whiteboard.
     */
    CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD: "CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD",
    /**
     * Tool to create a new confluence page in a specified space. use when you need to create new documentation or content.
     */
    CREATE_PAGE: "CONFLUENCE_CREATE_PAGE",
    /**
     * Tool to create a property on a confluence page. use when you need to add custom metadata or settings to a page.
     */
    CREATE_PAGE_PROPERTY: "CONFLUENCE_CREATE_PAGE_PROPERTY",
    /**
     * Tool to create a private confluence space. use when you need an isolated workspace viewable only by its creator.
     */
    CREATE_PRIVATE_SPACE: "CONFLUENCE_CREATE_PRIVATE_SPACE",
    /**
     * Tool to create a new confluence space. use when setting up a new knowledge area for organization.
     */
    CREATE_SPACE: "CONFLUENCE_CREATE_SPACE",
    /**
     * Tool to create a new property on a confluence space. use after confirming the space id when adding custom metadata.
     */
    CREATE_SPACE_PROPERTY: "CONFLUENCE_CREATE_SPACE_PROPERTY",
    /**
     * Tool to create a new confluence whiteboard. use when you need to start a collaborative whiteboard session.
     */
    CREATE_WHITEBOARD: "CONFLUENCE_CREATE_WHITEBOARD",
    /**
     * Tool to delete a blog post property. use when you need to remove custom metadata from a specified blog post.
     */
    DELETE_BLOGPOST_PROPERTY: "CONFLUENCE_DELETE_BLOGPOST_PROPERTY",
    /**
     * Tool to delete a content property from a page by property id. use when you need to remove custom metadata from a page for cleanup or auditing.
     */
    DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID: "CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID",
    /**
     * Tool to delete a content property from a whiteboard by property id. use when you need to remove custom metadata from a whiteboard.
     */
    DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID: "CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID",
    /**
     * Tool to delete a confluence page. use with caution as this will permanently remove the page from the space.
     */
    DELETE_PAGE: "CONFLUENCE_DELETE_PAGE",
    /**
     * Tool to delete a confluence space by its key. use when you need to permanently remove a space.
     */
    DELETE_SPACE: "CONFLUENCE_DELETE_SPACE",
    /**
     * Tool to delete a space property. use when you need to remove a property from a confluence space after review.
     */
    DELETE_SPACE_PROPERTY: "CONFLUENCE_DELETE_SPACE_PROPERTY",
    /**
     * Tool to retrieve attachments of a confluence page. use after confirming page id to list its attachments (supports pagination).
     */
    GET_ATTACHMENTS: "CONFLUENCE_GET_ATTACHMENTS",
    /**
     * Tool to list labels on an attachment. use after confirming the attachment id to fetch its labels.
     */
    GET_ATTACHMENT_LABELS: "CONFLUENCE_GET_ATTACHMENT_LABELS",
    /**
     * Tool to retrieve confluence audit records. use when you need to fetch and filter audit logs for compliance or troubleshooting.
     */
    GET_AUDIT_LOGS: "CONFLUENCE_GET_AUDIT_LOGS",
    /**
     * Tool to retrieve a list of blog posts. use when you need blog post ids.
     */
    GET_BLOGPOSTS: "CONFLUENCE_GET_BLOGPOSTS",
    /**
     * Tool to retrieve a specific confluence blog post by its id. use when you have a blog post id and need detailed metadata and content.
     */
    GET_BLOGPOST_BY_ID: "CONFLUENCE_GET_BLOGPOST_BY_ID",
    /**
     * Tool to retrieve labels of a specific confluence blog post by id. use after obtaining the blog post id to list its labels.
     */
    GET_BLOGPOST_LABELS: "CONFLUENCE_GET_BLOGPOST_LABELS",
    /**
     * Tool to get like count for a confluence blog post. use after confirming the blog post id to retrieve total likes.
     */
    GET_BLOGPOST_LIKE_COUNT: "CONFLUENCE_GET_BLOGPOST_LIKE_COUNT",
    /**
     * Tool to retrieve permitted operations for a confluence blog post. use after confirming the blog post id to see allowed actions.
     */
    GET_BLOGPOST_OPERATIONS: "CONFLUENCE_GET_BLOGPOST_OPERATIONS",
    /**
     * Tool to retrieve all versions of a specific blog post. use when you have a blogpostid and need to list version numbers.
     */
    GET_BLOGPOST_VERSIONS: "CONFLUENCE_GET_BLOGPOST_VERSIONS",
    /**
     * Tool to retrieve details for a specific version of a blog post. use when you have a blogpostid and versionnumber and need detailed metadata for that version.
     */
    GET_BLOGPOST_VERSION_DETAILS: "CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS",
    /**
     * Tool to retrieve a list of blog posts. use when you need a paginated list of confluence blog posts.
     */
    GET_BLOG_POSTS: "CONFLUENCE_GET_BLOG_POSTS",
    /**
     * Tool to list all blog posts under a specific label. use when you have a label id and need to retrieve associated blog posts.
     */
    GET_BLOG_POSTS_FOR_LABEL: "CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL",
    /**
     * Tool to list all direct child pages of a given confluence page. use when you have a parent page id and need to discover its direct descendants.
     */
    GET_CHILD_PAGES: "CONFLUENCE_GET_CHILD_PAGES",
    /**
     * Tool to retrieve all content properties on a blog post. use when you need to list metadata properties set on a specific confluence blog post.
     */
    GET_CONTENT_PROPERTIES_FOR_BLOG_POST: "CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST",
    /**
     * Tool to retrieve all content properties on a page. use when you need to list metadata properties set on a specific confluence page.
     */
    GET_CONTENT_PROPERTIES_FOR_PAGE: "CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE",
    /**
     * Tool to retrieve restrictions on a confluence content item. use when you need to see who can view or edit a page or blog post.
     */
    GET_CONTENT_RESTRICTIONS: "CONFLUENCE_GET_CONTENT_RESTRICTIONS",
    /**
     * Tool to get information about the currently authenticated user. use when you need to check user details or permissions.
     */
    GET_CURRENT_USER: "CONFLUENCE_GET_CURRENT_USER",
    /**
     * Tool to retrieve inline comments for a confluence blog post. use when you need inline comment details by blog post id.
     */
    GET_INLINE_COMMENTS_FOR_BLOG_POST: "CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST",
    /**
     * Tool to retrieve all labels in a confluence site. use when you need to list or page through labels.
     */
    GET_LABELS: "CONFLUENCE_GET_LABELS",
    /**
     * Tool to retrieve labels of a specific confluence page by id. use after obtaining the page id to list its labels.
     */
    GET_LABELS_FOR_PAGE: "CONFLUENCE_GET_LABELS_FOR_PAGE",
    /**
     * Tool to list labels on a space. use when you need to retrieve labels for a specific space.
     */
    GET_LABELS_FOR_SPACE: "CONFLUENCE_GET_LABELS_FOR_SPACE",
    /**
     * Tool to list labels on all content in a space. use when you need to retrieve or filter content labels by space, with pagination and optional prefix filtering.
     */
    GET_LABELS_FOR_SPACE_CONTENT: "CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT",
    /**
     * Tool to retrieve a list of pages. use when you need a paginated list of confluence pages.
     */
    GET_PAGES: "CONFLUENCE_GET_PAGES",
    /**
     * Tool to retrieve all ancestors for a given confluence page by its id. use when you need the full page hierarchy.
     */
    GET_PAGE_ANCESTORS: "CONFLUENCE_GET_PAGE_ANCESTORS",
    /**
     * Tool to retrieve a confluence page by its id. use when you have a page id and need its detailed metadata and content.
     */
    GET_PAGE_BY_ID: "CONFLUENCE_GET_PAGE_BY_ID",
    /**
     * Tool to get like count for a confluence page. use after confirming the page id to retrieve total likes.
     */
    GET_PAGE_LIKE_COUNT: "CONFLUENCE_GET_PAGE_LIKE_COUNT",
    /**
     * Tool to retrieve all versions of a specific confluence page. use after confirming the page id to audit its edit history.
     */
    GET_PAGE_VERSIONS: "CONFLUENCE_GET_PAGE_VERSIONS",
    /**
     * Tool to retrieve a list of confluence spaces. use when you need a paginated list of spaces with optional filtering.
     */
    GET_SPACES: "CONFLUENCE_GET_SPACES",
    /**
     * Tool to retrieve a confluence space by its id. use when you need detailed metadata of a specific space.
     */
    GET_SPACE_BY_ID: "CONFLUENCE_GET_SPACE_BY_ID",
    /**
     * Tool to retrieve content in a confluence space. use when you need to list pages, blogposts, or attachments of a specific space key.
     */
    GET_SPACE_CONTENTS: "CONFLUENCE_GET_SPACE_CONTENTS",
    /**
     * Tool to get properties of a confluence space. use when you need to retrieve custom metadata or settings stored as space properties.
     */
    GET_SPACE_PROPERTIES: "CONFLUENCE_GET_SPACE_PROPERTIES",
    /**
     * Tool to retrieve information about the anonymous user. use when you need to obtain guest user details before unauthenticated interactions.
     */
    GET_USER_ANONYMOUS: "CONFLUENCE_GET_USER_ANONYMOUS",
    /**
     * Searches for content by filtering pages from the confluence v2 api with intelligent ranking. since the native search endpoint is deprecated, this action: 1. fetches pages from the v2 pages endpoint with pagination (up to 300 pages) 2. applies intelligent client-side filtering with relevance scoring 3. returns results ranked by match quality (exact phrase > all words > partial matches) the search algorithm prioritizes exact phrase matches, then checks for all query words present in the title, and finally considers partial word matches. results are automatically sorted by relevance score for optimal user experience.
     */
    SEARCH_CONTENT: "CONFLUENCE_SEARCH_CONTENT",
    /**
     * Searches for users using user-specific queries from the confluence query language (cql).
     */
    SEARCH_USERS: "CONFLUENCE_SEARCH_USERS",
    /**
     * Tool to update a confluence blog post's title or content. use when you need to modify an existing blog post. ensure you have the latest version number before calling.
     */
    UPDATE_BLOGPOST: "CONFLUENCE_UPDATE_BLOGPOST",
    /**
     * Tool to update a property of a specified blog post. use when you need to modify custom metadata on a blog post.
     */
    UPDATE_BLOGPOST_PROPERTY: "CONFLUENCE_UPDATE_BLOGPOST_PROPERTY",
    /**
     * Tool to update a content property on a confluence page. use when you need to modify an existing metadata property by its id.
     */
    UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID: "CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID",
    /**
     * Tool to update a content property on a whiteboard. use when you need to modify metadata on a confluence whiteboard.
     */
    UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID: "CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID",
    /**
     * Tool to update an existing confluence page. use when you need to modify existing documentation or content.
     */
    UPDATE_PAGE: "CONFLUENCE_UPDATE_PAGE",
    /**
     * Tool to update a space property. use when you need to modify custom metadata stored on a confluence space (requires fetching the current property version first).
     */
    UPDATE_SPACE_PROPERTY: "CONFLUENCE_UPDATE_SPACE_PROPERTY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONFLUENCE".
 */
export type CONFLUENCE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONFLUENCE".
 */
export type CONFLUENCE_TRIGGER_EVENTS = {}
