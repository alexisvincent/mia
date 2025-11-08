// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FELT's FELT_CREATE_OR_UPDATE_ELEMENTS tool input.
 */
type FELT_CREATE_OR_UPDATE_ELEMENTS_INPUT = {
  /**
   * Features
   * @description Array of GeoJSON Feature objects representing elements to create or update
   */
  features?: {
      /**
       * Geometry
       * @description GeoJSON geometry object defining the shape and location of the feature. Include 'felt:id' in geometry for updates of existing elements.
       */
      geometry: {
          [key: string]: unknown;
      };
      /**
       * Properties
       * @description A JSON object containing properties for the feature
       * @default null
       */
      properties: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Must be 'Feature'
       * @constant
       */
      type: "Feature";
  }[];
  /**
   * Map Id
   * @description Unique identifier of the map to modify
   */
  map_id?: string;
  /**
   * Type
   * @description Must be 'FeatureCollection'
   * @constant
   */
  type?: "FeatureCollection";
};

/**
 * Type of FELT's FELT_CREATE_OR_UPDATE_ELEMENTS tool output.
 */
type FELT_CREATE_OR_UPDATE_ELEMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description Array of created or updated GeoJSON features
       */
      features: {
          /**
           * Geometry
           * @description GeoJSON geometry object defining the shape and location of the feature. Include 'felt:id' in geometry for updates of existing elements.
           */
          geometry: {
              [key: string]: unknown;
          };
          /**
           * Properties
           * @description A JSON object containing properties for the feature
           * @default null
           */
          properties: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description Must be 'Feature'
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description Response type, always 'FeatureCollection'
       * @constant
       */
      type: "FeatureCollection";
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
 * Type of FELT's FELT_CREATE_PROJECT tool input.
 */
type FELT_CREATE_PROJECT_INPUT = {
  /**
   * Description
   * @description Optional description of the project.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the project.
   */
  name?: string;
  /**
   * Organization Id
   * @description Optional organization ID to create the project under.
   * @default null
   */
  organization_id: string | null;
};

/**
 * Type of FELT's FELT_CREATE_PROJECT tool output.
 */
type FELT_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the project was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the project.
       */
      id: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID associated with the project, if any.
       * @default null
       */
      organization_id: string | null;
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
 * Type of FELT's FELT_DELETE_ELEMENT tool input.
 */
type FELT_DELETE_ELEMENT_INPUT = {
  /**
   * Element Id
   * @description The unique identifier of the element to delete.
   */
  element_id?: string;
  /**
   * Map Id
   * @description The unique identifier of the map containing the element to delete.
   */
  map_id?: string;
};

/**
 * Type of FELT's FELT_DELETE_ELEMENT tool output.
 */
type FELT_DELETE_ELEMENT_OUTPUT = {
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
 * Type of FELT's FELT_DELETE_LAYER tool input.
 */
type FELT_DELETE_LAYER_INPUT = {
  /**
   * Layer Id
   * @description The unique identifier of the layer to delete.
   */
  layer_id?: string;
  /**
   * Map Id
   * @description The unique identifier of the map containing the layer to delete.
   */
  map_id?: string;
};

/**
 * Type of FELT's FELT_DELETE_LAYER tool output.
 */
type FELT_DELETE_LAYER_OUTPUT = {
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
 * Type of FELT's FELT_DELETE_MAP tool input.
 */
type FELT_DELETE_MAP_INPUT = {
  /**
   * Map Id
   * @description The unique identifier of the map to delete.
   */
  map_id?: string;
};

/**
 * Type of FELT's FELT_DELETE_MAP tool output.
 */
type FELT_DELETE_MAP_OUTPUT = {
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
 * Type of FELT's FELT_DELETE_PROJECT tool input.
 */
type FELT_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to be deleted.
   */
  project_id?: string;
};

/**
 * Type of FELT's FELT_DELETE_PROJECT tool output.
 */
type FELT_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project Id
       * @description The ID of the deleted project.
       * @default null
       */
      project_id: string | null;
      /**
       * Status
       * @description Result of the delete operation, e.g., 'success'
       * @default null
       */
      status: string | null;
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
 * Type of FELT's FELT_DUPLICATE_MAP tool input.
 */
type FELT_DUPLICATE_MAP_INPUT = {
  /**
   * Description
   * @description Optional description for the duplicated map
   * @default null
   */
  description: string | null;
  /**
   * Map Id
   * @description Unique identifier of the map to duplicate
   */
  map_id?: string;
  /**
   * Organization Id
   * @description Optional organization ID to assign the duplicated map
   * @default null
   */
  organization_id: string | null;
  /**
   * Title
   * @description Optional new title for the duplicated map
   * @default null
   */
  title: string | null;
};

/**
 * Type of FELT's FELT_DUPLICATE_MAP tool output.
 */
type FELT_DUPLICATE_MAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the duplicated map
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description ID of the duplicated map
       */
      id: string;
      /**
       * Name
       * @description Name of the duplicated map
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID of the duplicated map, if applicable
       * @default null
       */
      organization_id: string | null;
      /**
       * Owner Id
       * @description Identifier of the owner of the duplicated map
       */
      owner_id: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updated_at: string;
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
 * Type of FELT's FELT_FELT_CREATE_PROJECT tool input.
 */
type FELT_FELT_CREATE_PROJECT_INPUT = {
  /**
   * Description
   * @description Description of the project.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the project.
   */
  name?: string;
  /**
   * Organization Id
   * @description Organization ID under which to create the project.
   * @default null
   */
  organization_id: string | null;
  /**
   * Visibility
   * @description Visibility of the project. Allowed values: 'private', 'public'.
   */
  visibility?: string;
};

/**
 * Type of FELT's FELT_FELT_CREATE_PROJECT tool output.
 */
type FELT_FELT_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the project was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the project.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the project.
       */
      id: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID associated with the project, if any.
       * @default null
       */
      organization_id: string | null;
      /**
       * Updated At
       * @description Timestamp when the project was last updated.
       */
      updated_at: string;
      /**
       * Visibility
       * @description Visibility of the project.
       */
      visibility: string;
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
 * Type of FELT's FELT_GET_MAP_DETAILS tool input.
 */
type FELT_GET_MAP_DETAILS_INPUT = {
  /**
   * Map Id
   * @description Unique identifier for the map to retrieve
   */
  map_id?: string;
};

/**
 * Type of FELT's FELT_GET_MAP_DETAILS tool output.
 */
type FELT_GET_MAP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounds
       * @description Geographic bounding box of the map
       */
      bounds: {
          /**
           * East
           * @description Eastern longitude boundary (degrees)
           */
          east: number;
          /**
           * North
           * @description Northern latitude boundary (degrees)
           */
          north: number;
          /**
           * South
           * @description Southern latitude boundary (degrees)
           */
          south: number;
          /**
           * West
           * @description Western longitude boundary (degrees)
           */
          west: number;
      };
      /**
       * Created At
       * @description ISO 8601 datetime of creation
       */
      created_at: string;
      /**
       * Description
       * @description Description of the map
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Map's unique identifier
       */
      id: string;
      /**
       * Layers
       * @description List of layers within the map
       */
      layers: {
          [key: string]: unknown;
      }[];
      /**
       * Name
       * @description Display name of the map
       */
      name: string;
      /**
       * Owner
       * @description Owner details of the map
       */
      owner: {
          /**
           * Id
           * @description Owner's unique identifier
           */
          id: string;
          /**
           * Name
           * @description Owner's display name
           */
          name: string;
      };
      /**
       * Updated At
       * @description ISO 8601 datetime of last update
       */
      updated_at: string;
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
 * Type of FELT's FELT_GET_USER_DETAILS tool input.
 */
type FELT_GET_USER_DETAILS_INPUT = object;

/**
 * Type of FELT's FELT_GET_USER_DETAILS tool output.
 */
type FELT_GET_USER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the user's avatar image
       * @default null
       */
      avatar_url: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the user account was created
       */
      created_at: string;
      /**
       * Email
       * @description The user's email address
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the user
       */
      id: string;
      /**
       * Name
       * @description Display name of the user
       * @default null
       */
      name: string | null;
      /**
       * Username
       * @description The user's username
       */
      username: string;
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
 * Type of FELT's FELT_LIST_ELEMENTS tool input.
 */
type FELT_LIST_ELEMENTS_INPUT = {
  /**
   * Map Id
   * @description Unique identifier of the map to list elements for.
   */
  map_id?: string;
};

/**
 * Type of FELT's FELT_LIST_ELEMENTS tool output.
 */
type FELT_LIST_ELEMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Elements
       * @description List of elements in the specified map
       */
      elements: {
          /**
           * Geometry
           * @description GeoJSON geometry object
           */
          geometry: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Element ID
           */
          id: string;
          /**
           * Properties
           * @description Element metadata properties
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Element type
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
 * Type of FELT's FELT_LIST_ELEMENT_GROUPS tool input.
 */
type FELT_LIST_ELEMENT_GROUPS_INPUT = {
  /**
   * Map Id
   * @description The unique identifier for the map.
   */
  map_id?: string;
};

/**
 * Type of FELT's FELT_LIST_ELEMENT_GROUPS tool output.
 */
type FELT_LIST_ELEMENT_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Element Groups
       * @description List of element groups in the map
       */
      elementGroups: {
          /**
           * Description
           * @description Description of the element group, if any
           * @default null
           */
          description: string | null;
          /**
           * Elements
           * @description List of element IDs contained in the group
           */
          elements: string[];
          /**
           * Id
           * @description Unique identifier of the element group
           */
          id: string;
          /**
           * Name
           * @description Name of the element group
           */
          name: string;
      }[];
      /**
       * Total
       * @description Total number of element groups returned
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
 * Type of FELT's FELT_LIST_LAYERS tool input.
 */
type FELT_LIST_LAYERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return; default 100, maximum 1000.
   * @default null
   */
  limit: number | null;
  /**
   * Map Id
   * @description The unique identifier for the map.
   */
  map_id?: string;
  /**
   * Starting After
   * @description Cursor for pagination to return records after this ID.
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of FELT's FELT_LIST_LAYERS tool output.
 */
type FELT_LIST_LAYERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Indicates if more results are available for pagination.
       */
      has_more: boolean;
      /**
       * Layers
       * @description List of layers in the specified map.
       */
      layers: {
          /**
           * Created At
           * @description Creation timestamp in ISO-8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique layer identifier.
           */
          id: string;
          /**
           * Name
           * @description Layer name.
           */
          name: string;
          /**
           * Type
           * @description Layer type.
           * @enum {string}
           */
          type: "geojson" | "image" | "tile";
          /**
           * Updated At
           * @description Last update timestamp in ISO-8601 format.
           */
          updated_at: string;
      }[];
      /**
       * Next Cursor
       * @description Cursor to fetch the next page of results.
       * @default null
       */
      next_cursor: string | null;
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
 * Type of FELT's FELT_LIST_PROJECTS tool input.
 */
type FELT_LIST_PROJECTS_INPUT = {
  /**
   * Organization Id
   * @description Organization ID to list projects for a specific organization
   * @default null
   */
  organization_id: string | null;
};

/**
 * Type of FELT's FELT_LIST_PROJECTS tool output.
 */
type FELT_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of accessible projects
       */
      projects: {
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp when the project was created
           */
          createdAt: string;
          /**
           * Description
           * @description Project description, if provided
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique project ID
           */
          id: string;
          /**
           * Is Archived
           * @description Whether the project is archived
           */
          isArchived: boolean;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Organization Id
           * @description ID of the organization the project belongs to
           */
          organizationId: string;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 timestamp when the project was last updated
           */
          updatedAt: string;
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
 * Type of FELT's FELT_LIST_SOURCES tool input.
 */
type FELT_LIST_SOURCES_INPUT = object;

/**
 * Type of FELT's FELT_LIST_SOURCES tool output.
 */
type FELT_LIST_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sources
       * @description List of accessible data sources
       */
      sources: {
          /**
           * Created At
           * Format: date-time
           * @description ISO 8601 timestamp when the source was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the source
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the source
           */
          id: string;
          /**
           * Name
           * @description Name of the source
           */
          name: string;
          /**
           * Tags
           * @description Tags associated with the source
           * @default null
           */
          tags: string[] | null;
          /**
           * Updated At
           * Format: date-time
           * @description ISO 8601 timestamp when the source was last updated
           */
          updatedAt: string;
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
 * Type of FELT's FELT_UPDATE_PROJECT tool input.
 */
type FELT_UPDATE_PROJECT_INPUT = {
  /**
   * Custom Properties
   * @description Key-value pairs for custom properties to update
   * @default null
   */
  customProperties: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description New project description
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description New project name
   * @default null
   */
  name: string | null;
  /**
   * Project Id
   * @description ID of the project to update
   */
  project_id?: string;
};

/**
 * Type of FELT's FELT_UPDATE_PROJECT tool output.
 */
type FELT_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp
       */
      createdAt: string;
      /**
       * Custom Properties
       * @description Custom properties currently set on the project
       * @default null
       */
      customProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Project description after update
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the project
       */
      id: string;
      /**
       * Name
       * @description Project name after update
       */
      name: string;
      /**
       * Updated At
       * @description Last update timestamp
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
 * Type map of all available tool input types for toolkit "FELT".
 */
export type FELT_TOOL_INPUTS = {
  CREATE_OR_UPDATE_ELEMENTS: FELT_CREATE_OR_UPDATE_ELEMENTS_INPUT
  CREATE_PROJECT: FELT_CREATE_PROJECT_INPUT
  DELETE_ELEMENT: FELT_DELETE_ELEMENT_INPUT
  DELETE_LAYER: FELT_DELETE_LAYER_INPUT
  DELETE_MAP: FELT_DELETE_MAP_INPUT
  DELETE_PROJECT: FELT_DELETE_PROJECT_INPUT
  DUPLICATE_MAP: FELT_DUPLICATE_MAP_INPUT
  FELT_CREATE_PROJECT: FELT_FELT_CREATE_PROJECT_INPUT
  GET_MAP_DETAILS: FELT_GET_MAP_DETAILS_INPUT
  GET_USER_DETAILS: FELT_GET_USER_DETAILS_INPUT
  LIST_ELEMENTS: FELT_LIST_ELEMENTS_INPUT
  LIST_ELEMENT_GROUPS: FELT_LIST_ELEMENT_GROUPS_INPUT
  LIST_LAYERS: FELT_LIST_LAYERS_INPUT
  LIST_PROJECTS: FELT_LIST_PROJECTS_INPUT
  LIST_SOURCES: FELT_LIST_SOURCES_INPUT
  UPDATE_PROJECT: FELT_UPDATE_PROJECT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FELT".
 */
export type FELT_TOOL_OUTPUTS = {
  CREATE_OR_UPDATE_ELEMENTS: FELT_CREATE_OR_UPDATE_ELEMENTS_OUTPUT
  CREATE_PROJECT: FELT_CREATE_PROJECT_OUTPUT
  DELETE_ELEMENT: FELT_DELETE_ELEMENT_OUTPUT
  DELETE_LAYER: FELT_DELETE_LAYER_OUTPUT
  DELETE_MAP: FELT_DELETE_MAP_OUTPUT
  DELETE_PROJECT: FELT_DELETE_PROJECT_OUTPUT
  DUPLICATE_MAP: FELT_DUPLICATE_MAP_OUTPUT
  FELT_CREATE_PROJECT: FELT_FELT_CREATE_PROJECT_OUTPUT
  GET_MAP_DETAILS: FELT_GET_MAP_DETAILS_OUTPUT
  GET_USER_DETAILS: FELT_GET_USER_DETAILS_OUTPUT
  LIST_ELEMENTS: FELT_LIST_ELEMENTS_OUTPUT
  LIST_ELEMENT_GROUPS: FELT_LIST_ELEMENT_GROUPS_OUTPUT
  LIST_LAYERS: FELT_LIST_LAYERS_OUTPUT
  LIST_PROJECTS: FELT_LIST_PROJECTS_OUTPUT
  LIST_SOURCES: FELT_LIST_SOURCES_OUTPUT
  UPDATE_PROJECT: FELT_UPDATE_PROJECT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FELT toolkit.
 */
export const FELT = {
  slug: "felt",
  tools: {
    /**
     * Tool to create new elements or update existing elements on a map via geojson featurecollection. use when you need to batch add or modify elements on a specified map after confirming the map id.
     */
    CREATE_OR_UPDATE_ELEMENTS: "FELT_CREATE_OR_UPDATE_ELEMENTS",
    /**
     * Tool to create a new felt project. use when you need to initialize a project with a specific name, and optional description or organization context.
     */
    CREATE_PROJECT: "FELT_CREATE_PROJECT",
    /**
     * Tool to delete a specific element from a map. use when you have both map and element ids and need to remove the element permanently.
     */
    DELETE_ELEMENT: "FELT_DELETE_ELEMENT",
    /**
     * Tool to delete a specific layer from a map. use when you have the map's and layer's ids and need to remove it permanently.
     */
    DELETE_LAYER: "FELT_DELETE_LAYER",
    /**
     * Tool to delete a specific map. use when you have the map's id and want to permanently remove it. returns no content (http 204) on success.
     */
    DELETE_MAP: "FELT_DELETE_MAP",
    /**
     * Tool to delete a project and all its contents. use when you need to permanently remove a project after confirmation.
     */
    DELETE_PROJECT: "FELT_DELETE_PROJECT",
    /**
     * Tool to duplicate an existing map in felt. use when you need a clone of a map as a starting point.
     */
    DUPLICATE_MAP: "FELT_DUPLICATE_MAP",
    /**
     * Tool to create a new felt project. use when you need to initialize a project with a specific name and optional description or organization context.
     */
    FELT_CREATE_PROJECT: "FELT_FELT_CREATE_PROJECT",
    /**
     * Tool to retrieve details of a specific map. use when you have a valid map id and need full map metadata.
     */
    GET_MAP_DETAILS: "FELT_GET_MAP_DETAILS",
    /**
     * Tool to retrieve information about the authenticated user. use after obtaining a valid token to fetch user profile details.
     */
    GET_USER_DETAILS: "FELT_GET_USER_DETAILS",
    /**
     * Tool to list all elements on a specific map as geojson features. use after confirming a valid map id when you need to retrieve the map's elements.
     */
    LIST_ELEMENTS: "FELT_LIST_ELEMENTS",
    /**
     * Tool to list all element groups on a specific map. use after confirming a valid map id when you need to enumerate grouped elements.
     */
    LIST_ELEMENT_GROUPS: "FELT_LIST_ELEMENT_GROUPS",
    /**
     * Tool to list all layers on a specific map. use after confirming the map id.
     */
    LIST_LAYERS: "FELT_LIST_LAYERS",
    /**
     * Tool to retrieve a list of projects accessible to the user. use when you need to browse or select from existing projects before proceeding.
     */
    LIST_PROJECTS: "FELT_LIST_PROJECTS",
    /**
     * Tool to retrieve a list of data sources accessible to the user. use when you need to enumerate all available sources before selecting one.
     */
    LIST_SOURCES: "FELT_LIST_SOURCES",
    /**
     * Tool to update an existing project's name, description, or custom properties. use after confirming the project id.
     */
    UPDATE_PROJECT: "FELT_UPDATE_PROJECT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FELT".
 */
export type FELT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FELT".
 */
export type FELT_TRIGGER_EVENTS = {}
