// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ATTIO's ATTIO_CREATE_NOTE tool input.
 */
type ATTIO_CREATE_NOTE_INPUT = {
  /**
   * Content
   * @description The content of the note
   */
  content?: string;
  /**
   * Created At
   * @description Optional timestamp for when the note was created (ISO 8601 format)
   * @default null
   */
  created_at: string | null;
  /**
   * Parent Object
   * @description The object type the note is associated with. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'.
   */
  parent_object?: string;
  /**
   * Parent Record Id
   * @description The ID of the specific record within the object
   */
  parent_record_id?: string;
  /**
   * Title
   * @description The title of the note
   */
  title?: string;
};

/**
 * Type of ATTIO's ATTIO_CREATE_NOTE tool output.
 */
type ATTIO_CREATE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Plaintext
       * @description The plain text content of the note
       */
      content_plaintext: string;
      /**
       * Created At
       * @description Timestamp when the note was created
       */
      created_at: string;
      /**
       * Id
       * @description The ID structure of the created note
       */
      id: {
          /**
           * Note Id
           * @description The note ID
           */
          note_id: string;
          /**
           * Workspace Id
           * @description The workspace ID
           */
          workspace_id: string;
      };
      /**
       * Parent Object
       * @description The object type the note is associated with
       */
      parent_object: string;
      /**
       * Parent Record Id
       * @description The ID of the record the note is attached to
       */
      parent_record_id: string;
      /**
       * Title
       * @description The title of the note
       */
      title: string;
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
 * Type of ATTIO's ATTIO_CREATE_RECORD tool input.
 */
type ATTIO_CREATE_RECORD_INPUT = {
  /**
   * Object Type
   * @description The type of object to create a record for. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace.
   */
  object_type?: string;
  /**
   * Values
   * @description The attribute values for the new record. Note: Currency fields require 'currency_value' key, while most other fields use 'value' key.
   */
  values?: {
      [key: string]: unknown;
  };
};

/**
 * Type of ATTIO's ATTIO_CREATE_RECORD tool output.
 */
type ATTIO_CREATE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the record was created
       */
      created_at: string;
      /**
       * Id
       * @description The unique identifier of the created record
       */
      id: {
          /**
           * Object Id
           * @description The object ID
           */
          object_id: string;
          /**
           * Record Id
           * @description The record ID
           */
          record_id: string;
          /**
           * Workspace Id
           * @description The workspace ID
           */
          workspace_id: string;
      };
      /**
       * Values
       * @description The record's attribute values
       */
      values: {
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
 * Type of ATTIO's ATTIO_DELETE_NOTE tool input.
 */
type ATTIO_DELETE_NOTE_INPUT = {
  /**
   * Note Id
   * @description The ID of the note to delete
   */
  note_id?: string;
};

/**
 * Type of ATTIO's ATTIO_DELETE_NOTE tool output.
 */
type ATTIO_DELETE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the note was successfully deleted
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
 * Type of ATTIO's ATTIO_DELETE_RECORD tool input.
 */
type ATTIO_DELETE_RECORD_INPUT = {
  /**
   * Object Type
   * @description The type of object to delete. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace.
   */
  object_type?: string;
  /**
   * Record Id
   * @description The unique identifier of the record to delete
   */
  record_id?: string;
};

/**
 * Type of ATTIO's ATTIO_DELETE_RECORD tool output.
 */
type ATTIO_DELETE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message describing the result of the deletion
       * @default Record deleted successfully
       */
      message: string;
      /**
       * Success
       * @description Indicates whether the deletion was successful
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
 * Type of ATTIO's ATTIO_FIND_RECORD tool input.
 */
type ATTIO_FIND_RECORD_INPUT = {
  /**
   * Attributes
   * @description Dictionary of attributes to search by (e.g., {'email': 'example@email.com'})
   * @default null
   */
  attributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Limit
   * @description Maximum number of records to return when searching
   * @default 500
   */
  limit: number | null;
  /**
   * Object Id
   * @description The ID or slug of the object type to search in. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'.
   */
  object_id?: string;
  /**
   * Offset
   * @description Number of records to skip for pagination
   * @default 0
   */
  offset: number | null;
  /**
   * Record Id
   * @description The unique ID of the record to retrieve directly
   * @default null
   */
  record_id: string | null;
};

/**
 * Type of ATTIO's ATTIO_FIND_RECORD tool output.
 */
type ATTIO_FIND_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Records
       * @description List of records matching the search criteria
       */
      records: {
          /**
           * Created At
           * @description Timestamp when the record was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the record
           */
          id: {
              /**
               * Object Id
               * @description The object ID
               */
              object_id: string;
              /**
               * Record Id
               * @description The record ID
               */
              record_id: string;
              /**
               * Workspace Id
               * @description The workspace ID
               */
              workspace_id: string;
          };
          /**
           * Values
           * @description The record's attribute values
           */
          values: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Total Count
       * @description Total number of records matching the search criteria
       * @default null
       */
      total_count: number | null;
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
 * Type of ATTIO's ATTIO_GET_OBJECT tool input.
 */
type ATTIO_GET_OBJECT_INPUT = {
  /**
   * Object Id
   * @description The ID or slug of the object to retrieve details for. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'.
   */
  object_id?: string;
};

/**
 * Type of ATTIO's ATTIO_GET_OBJECT tool output.
 */
type ATTIO_GET_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Slug
       * @description The API slug used to reference this object
       */
      api_slug: string;
      /**
       * Attributes
       * @description List of attributes for this object
       */
      attributes: {
          /**
           * Api Slug
           * @description The API slug used to reference this attribute
           */
          api_slug: string;
          /**
           * Id
           * @description The unique identifier of the attribute
           */
          id: {
              /**
               * Attribute Id
               * @description The attribute ID
               */
              attribute_id: string;
              /**
               * Object Id
               * @description The object ID
               */
              object_id: string;
              /**
               * Workspace Id
               * @description The workspace ID
               */
              workspace_id: string;
          };
          /**
           * Is Archived
           * @description Whether this attribute is archived
           * @default false
           */
          is_archived: boolean;
          /**
           * Is Default Value Enabled
           * @description Whether a default value is set
           */
          is_default_value_enabled: boolean;
          /**
           * Is Multiselect
           * @description Whether multiple values can be selected
           */
          is_multiselect: boolean;
          /**
           * Is Required
           * @description Whether this attribute is required
           */
          is_required: boolean;
          /**
           * Is System Attribute
           * @description Whether this is a system-defined attribute
           */
          is_system_attribute: boolean;
          /**
           * Is Unique
           * @description Whether this attribute must be unique
           */
          is_unique: boolean;
          /**
           * Is Writable
           * @description Whether this attribute can be written to
           */
          is_writable: boolean;
          /**
           * Title
           * @description The display name of the attribute
           */
          title: string;
          /**
           * Type
           * @description The type of the attribute (e.g., 'text', 'number', 'email-address')
           */
          type: string;
      }[];
      /**
       * Created At
       * @description Timestamp when the object was created
       */
      created_at: string;
      /**
       * Id
       * @description The unique identifier of the object
       */
      id: {
          /**
           * Object Id
           * @description The object ID
           */
          object_id: string;
          /**
           * Workspace Id
           * @description The workspace ID
           */
          workspace_id: string;
      };
      /**
       * Plural Noun
       * @description The plural form of the object's name
       */
      plural_noun: string;
      /**
       * Singular Noun
       * @description The singular form of the object's name
       */
      singular_noun: string;
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
 * Type of ATTIO's ATTIO_LIST_LISTS tool input.
 */
type ATTIO_LIST_LISTS_INPUT = object;

/**
 * Type of ATTIO's ATTIO_LIST_LISTS tool output.
 */
type ATTIO_LIST_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description List of lists with their metadata
       */
      lists: {
          /**
           * Created At
           * @description The creation timestamp of the list
           */
          created_at: string;
          /**
           * Description
           * @description The description of the list
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier of the list
           */
          id: string;
          /**
           * Name
           * @description The name of the list
           */
          name: string;
          /**
           * Updated At
           * @description The last update timestamp of the list
           */
          updated_at: string;
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
 * Type of ATTIO's ATTIO_LIST_NOTES tool input.
 */
type ATTIO_LIST_NOTES_INPUT = {
  /**
   * Limit
   * @description Maximum number of notes to return
   * @default 50
   */
  limit: number | null;
  /**
   * Parent Object
   * @description The object type the notes are associated with. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'.
   */
  parent_object?: string;
  /**
   * Parent Record Id
   * @description The ID of the specific record to get notes for
   */
  parent_record_id?: string;
};

/**
 * Type of ATTIO's ATTIO_LIST_NOTES tool output.
 */
type ATTIO_LIST_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Notes
       * @description List of notes for the record
       */
      notes: {
          /**
           * Content Markdown
           * @description The markdown content of the note
           * @default null
           */
          content_markdown: string | null;
          /**
           * Content Plaintext
           * @description The plain text content of the note
           */
          content_plaintext: string;
          /**
           * Created At
           * @description Timestamp when the note was created
           */
          created_at: string;
          /**
           * Created By Actor
           * @description Who created the note
           */
          created_by_actor: {
              /**
               * Id
               * @description ID of the actor
               * @default null
               */
              id: string | null;
              /**
               * Type
               * @description Type of actor (e.g., 'app', 'user')
               */
              type: string;
          };
          /**
           * Id
           * @description The unique identifier of the note
           */
          id: {
              /**
               * Note Id
               * @description The note ID
               */
              note_id: string;
              /**
               * Workspace Id
               * @description The workspace ID
               */
              workspace_id: string;
          };
          /**
           * Parent Object
           * @description The object type the note is associated with
           */
          parent_object: string;
          /**
           * Parent Record Id
           * @description The ID of the record the note is attached to
           */
          parent_record_id: string;
          /**
           * Tags
           * @description Tags associated with the note
           */
          tags?: string[];
          /**
           * Title
           * @description The title of the note
           */
          title: string;
      }[];
      /**
       * Total Count
       * @description Total number of notes for this record
       */
      total_count: number;
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
 * Type of ATTIO's ATTIO_LIST_OBJECTS tool input.
 */
type ATTIO_LIST_OBJECTS_INPUT = object;

/**
 * Type of ATTIO's ATTIO_LIST_OBJECTS tool output.
 */
type ATTIO_LIST_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description List of objects with their metadata
       */
      objects: {
          /**
           * Api Slug
           * @description The API slug used to reference this object
           */
          api_slug: string;
          /**
           * Created At
           * @description The timestamp when the object was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier structure of the object
           */
          id: {
              /**
               * Object Id
               * @description The object ID
               */
              object_id: string;
              /**
               * Workspace Id
               * @description The workspace ID
               */
              workspace_id: string;
          };
          /**
           * Plural Noun
           * @description The plural form of the object's name
           */
          plural_noun: string;
          /**
           * Singular Noun
           * @description The singular form of the object's name
           */
          singular_noun: string;
          /**
           * System Defined
           * @description Whether this is a system-defined object
           * @default null
           */
          system_defined: boolean | null;
          /**
           * Updated At
           * @description The timestamp when the object was last updated
           * @default null
           */
          updated_at: string | null;
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
 * Type of ATTIO's ATTIO_LIST_RECORDS tool input.
 */
type ATTIO_LIST_RECORDS_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return
   * @default 20
   */
  limit: number | null;
  /**
   * Object Type
   * @description The type of object to list records for. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace. Use the List Objects action to discover all available object types.
   */
  object_type?: string;
  /**
   * Offset
   * @description Number of records to skip for pagination
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of ATTIO's ATTIO_LIST_RECORDS tool output.
 */
type ATTIO_LIST_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Whether there are more records available
       * @default false
       */
      has_more: boolean;
      /**
       * Next Offset
       * @description Offset to use for the next page of results
       * @default null
       */
      next_offset: number | null;
      /**
       * Records
       * @description List of records
       */
      records: {
          /**
           * Created At
           * @description Timestamp when the record was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the record
           */
          id: {
              /**
               * Object Id
               * @description The object ID
               */
              object_id: string;
              /**
               * Record Id
               * @description The record ID
               */
              record_id: string;
              /**
               * Workspace Id
               * @description The workspace ID
               */
              workspace_id: string;
          };
          /**
           * Values
           * @description The record's attribute values
           */
          values: {
              [key: string]: unknown;
          };
          /**
           * Web Url
           * @description URL to view the record in Attio
           * @default null
           */
          web_url: string | null;
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
 * Type of ATTIO's ATTIO_UPDATE_RECORD tool input.
 */
type ATTIO_UPDATE_RECORD_INPUT = {
  /**
   * Object Type
   * @description The type of object to update. Standard object types include 'people', 'companies', 'deals', 'users', 'workspaces'. You can also use custom object types from your workspace.
   */
  object_type?: string;
  /**
   * Record Id
   * @description The unique identifier of the record to update
   */
  record_id?: string;
  /**
   * Values
   * @description The attribute values to update on the record. Note: Currency fields require 'currency_value' key, while most other fields use 'value' key.
   */
  values?: {
      [key: string]: unknown;
  };
};

/**
 * Type of ATTIO's ATTIO_UPDATE_RECORD tool output.
 */
type ATTIO_UPDATE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the record was created
       */
      created_at: string;
      /**
       * Id
       * @description The unique identifier of the updated record
       */
      id: {
          /**
           * Object Id
           * @description The object ID
           */
          object_id: string;
          /**
           * Record Id
           * @description The record ID
           */
          record_id: string;
          /**
           * Workspace Id
           * @description The workspace ID
           */
          workspace_id: string;
      };
      /**
       * Values
       * @description The record's updated attribute values
       */
      values: {
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
 * Type map of all available tool input types for toolkit "ATTIO".
 */
export type ATTIO_TOOL_INPUTS = {
  CREATE_NOTE: ATTIO_CREATE_NOTE_INPUT
  CREATE_RECORD: ATTIO_CREATE_RECORD_INPUT
  DELETE_NOTE: ATTIO_DELETE_NOTE_INPUT
  DELETE_RECORD: ATTIO_DELETE_RECORD_INPUT
  FIND_RECORD: ATTIO_FIND_RECORD_INPUT
  GET_OBJECT: ATTIO_GET_OBJECT_INPUT
  LIST_LISTS: ATTIO_LIST_LISTS_INPUT
  LIST_NOTES: ATTIO_LIST_NOTES_INPUT
  LIST_OBJECTS: ATTIO_LIST_OBJECTS_INPUT
  LIST_RECORDS: ATTIO_LIST_RECORDS_INPUT
  UPDATE_RECORD: ATTIO_UPDATE_RECORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ATTIO".
 */
export type ATTIO_TOOL_OUTPUTS = {
  CREATE_NOTE: ATTIO_CREATE_NOTE_OUTPUT
  CREATE_RECORD: ATTIO_CREATE_RECORD_OUTPUT
  DELETE_NOTE: ATTIO_DELETE_NOTE_OUTPUT
  DELETE_RECORD: ATTIO_DELETE_RECORD_OUTPUT
  FIND_RECORD: ATTIO_FIND_RECORD_OUTPUT
  GET_OBJECT: ATTIO_GET_OBJECT_OUTPUT
  LIST_LISTS: ATTIO_LIST_LISTS_OUTPUT
  LIST_NOTES: ATTIO_LIST_NOTES_OUTPUT
  LIST_OBJECTS: ATTIO_LIST_OBJECTS_OUTPUT
  LIST_RECORDS: ATTIO_LIST_RECORDS_OUTPUT
  UPDATE_RECORD: ATTIO_UPDATE_RECORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ATTIO toolkit.
 */
export const ATTIO = {
  slug: "attio",
  tools: {
    /**
     * This tool creates a new note on a given record in attio. the note can be attached to any record type (like person, company, or deal) and includes a title and content. it requires parameters such as parent object, parent record id, title, and content, with an optional created at timestamp.
     */
    CREATE_NOTE: "ATTIO_CREATE_NOTE",
    /**
     * This tool creates a new record in attio for a specified object type (people, companies, deals, users, workspaces, etc.). it requires the object type and a values dictionary containing the attributes for the new record.
     */
    CREATE_RECORD: "ATTIO_CREATE_RECORD",
    /**
     * This tool allows users to delete a specific note in attio by its id. it is implemented via delete https://api.attio.com/v2/notes/{note id} and handles note deletion by validating the provided note id. it complements attio create note functionality, providing complete note management capabilities within the attio platform.
     */
    DELETE_NOTE: "ATTIO_DELETE_NOTE",
    /**
     * This tool allows you to delete a record from attio permanently. the deletion is irreversible, and the data will eventually be removed from the system.
     */
    DELETE_RECORD: "ATTIO_DELETE_RECORD",
    /**
     * This tool allows users to find a record in attio by either its unique id or by searching using unique attributes. it provides two methods: one for directly retrieving a record by its id with the get /v2/objects/{object}/records/{record id} endpoint, and another for searching by attributes using the post /v2/objects/{object}/records/query endpoint.
     */
    FIND_RECORD: "ATTIO_FIND_RECORD",
    /**
     * This tool retrieves detailed information about a specific object type in attio, including all its attributes and their properties. this is useful for understanding what fields are available when creating or updating records of this type.
     */
    GET_OBJECT: "ATTIO_GET_OBJECT",
    /**
     * This tool retrieves all lists available in the attio workspace. the lists are returned sorted as they appear in the sidebar. this tool is essential for managing and navigating lists, and is a prerequisite for many list-related operations. it requires the list configuration:read permission scope.
     */
    LIST_LISTS: "ATTIO_LIST_LISTS",
    /**
     * This tool lists all notes associated with a specific record in attio. notes are returned in reverse chronological order (newest first).
     */
    LIST_NOTES: "ATTIO_LIST_NOTES",
    /**
     * This tool retrieves a list of all available objects (both system-defined and user-defined) in the attio workspace. it makes a get request to the /v2/objects endpoint and returns a json response containing key metadata about each object, which is fundamental for understanding and accessing the workspace's structure.
     */
    LIST_OBJECTS: "ATTIO_LIST_OBJECTS",
    /**
     * This tool lists records from a specific object type in attio. it provides simple pagination support and returns records in the order they were created. for complex filtering, use the findrecord action instead. standard object types include: people, companies, deals, users, workspaces. if you get a 404 error, verify the object type exists using the list objects action first.
     */
    LIST_RECORDS: "ATTIO_LIST_RECORDS",
    /**
     * This tool updates an existing record in attio for a specified object type (people, companies, deals, users, workspaces, etc.). it uses patch to partially update only the provided fields, leaving other fields unchanged.
     */
    UPDATE_RECORD: "ATTIO_UPDATE_RECORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ATTIO".
 */
export type ATTIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ATTIO".
 */
export type ATTIO_TRIGGER_EVENTS = {}
