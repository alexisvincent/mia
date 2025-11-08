import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NOTION's NOTION_ADD_MULTIPLE_PAGE_CONTENT tool input.
 */
type NOTION_ADD_MULTIPLE_PAGE_CONTENT_INPUT = {
  /**
   * After
   * @description Identifier of an existing block. The new content blocks will be appended immediately after this block. If omitted or null, the new blocks are appended to the end of the parent's children list.
   * @default null
   */
  after: string | null;
  /**
   * Content Blocks
   * @description A list of content blocks to be added to the page. Each block can use either the flattened NotionRichText schema or full Notion block structure. ENHANCED: The 'content' field in NotionRichText now automatically detects and parses markdown formatting - supports headers (# ## ###), bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), links ([text](url)), and more. Maximum of 100 blocks per request.
   */
  content_blocks?: {
      /**
       * NotionRichText
       * @description Include these fields in the json: {'content': 'Some words', 'link': 'https://random-link.com'. For content styling, refer to https://developers.notion.com/reference/rich-text.
       *
       *     ENHANCED: The 'content' field now automatically detects and parses markdown formatting - supports bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), and links ([text](url)). Headers (# ## ###) are handled via block_property.
       */
      content_block: {
          /**
           * Block Property
           * @description The block property of the block to be added. Possible properties are `paragraph`, `heading_1`, `heading_2`, `heading_3`, `callout`, `to_do`, `toggle`, `quote`, `bulleted_list_item`, `numbered_list_item`. Other properties possible are `file`, `image`, `video` (link required).
           * @default paragraph
           * @enum {string}
           */
          block_property: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "callout" | "to_do" | "toggle" | "quote" | "bulleted_list_item" | "numbered_list_item" | "file" | "image" | "video";
          /**
           * Bold
           * @description Indicates if the text is bold.
           * @default false
           */
          bold: boolean;
          /**
           * Code
           * @description Indicates if the text is formatted as code.
           * @default false
           */
          code: boolean;
          /**
           * Color
           * @description The color of the text background or text itself.
           * @default default
           */
          color: string;
          /**
           * Content
           * @description The textual content of the rich text object. ENHANCED: Now automatically parses markdown formatting including bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), and links ([text](url)). Required for paragraph, heading_1, heading_2, heading_3, callout, to_do, toggle, quote.
           * @default null
           */
          content: string | null;
          /**
           * Italic
           * @description Indicates if the text is italic.
           * @default false
           */
          italic: boolean;
          /**
           * Link
           * @description The URL of the rich text object or the file to be uploaded or image/video link
           * @default null
           */
          link: string | null;
          /**
           * Strikethrough
           * @description Indicates if the text has strikethrough.
           * @default false
           */
          strikethrough: boolean;
          /**
           * Underline
           * @description Indicates if the text is underlined.
           * @default false
           */
          underline: boolean;
      } | null;
  }[];
  /**
   * Parent Block Id
   * @description Identifier of the parent page or block to which the new content blocks will be added. This parent must be capable of having child blocks. Obtain valid IDs using other Notion actions or API calls.
   */
  parent_block_id?: string;
};

/**
 * Type of NOTION's NOTION_ADD_MULTIPLE_PAGE_CONTENT tool output.
 */
type NOTION_ADD_MULTIPLE_PAGE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Indicates whether there are more results for pagination. Usually false when appending blocks with this action.
       */
      has_more: boolean;
      /**
       * Next Cursor
       * @description An optional cursor for pagination if the list of children is long. Usually null when appending blocks with this action.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Object
       * @description The type of object returned by the API, typically 'list'.
       */
      object: string;
      /**
       * Results
       * @description A list of block objects that were added as children. Contains all the newly added block objects.
       */
      results: {
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
 * Type of NOTION's NOTION_ADD_PAGE_CONTENT tool input.
 */
type NOTION_ADD_PAGE_CONTENT_INPUT = {
  /**
   * After
   * @description Identifier of an existing block. The new content block will be appended immediately after this block. If omitted or null, the new block is appended to the end of the parent's children list.
   * @default null
   */
  after: string | null;
  /**
   * NotionRichText
   * @description Include these fields in the json: {'content': 'Some words', 'link': 'https://random-link.com'. For content styling, refer to https://developers.notion.com/reference/rich-text.
   *
   *     ENHANCED: The 'content' field now automatically detects and parses markdown formatting - supports bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), and links ([text](url)). Headers (# ## ###) are handled via block_property.
   */
  content_block?: {
      /**
       * Block Property
       * @description The block property of the block to be added. Possible properties are `paragraph`, `heading_1`, `heading_2`, `heading_3`, `callout`, `to_do`, `toggle`, `quote`, `bulleted_list_item`, `numbered_list_item`. Other properties possible are `file`, `image`, `video` (link required).
       * @default paragraph
       * @enum {string}
       */
      block_property: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "callout" | "to_do" | "toggle" | "quote" | "bulleted_list_item" | "numbered_list_item" | "file" | "image" | "video";
      /**
       * Bold
       * @description Indicates if the text is bold.
       * @default false
       */
      bold: boolean;
      /**
       * Code
       * @description Indicates if the text is formatted as code.
       * @default false
       */
      code: boolean;
      /**
       * Color
       * @description The color of the text background or text itself.
       * @default default
       */
      color: string;
      /**
       * Content
       * @description The textual content of the rich text object. ENHANCED: Now automatically parses markdown formatting including bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), and links ([text](url)). Required for paragraph, heading_1, heading_2, heading_3, callout, to_do, toggle, quote.
       * @default null
       */
      content: string | null;
      /**
       * Italic
       * @description Indicates if the text is italic.
       * @default false
       */
      italic: boolean;
      /**
       * Link
       * @description The URL of the rich text object or the file to be uploaded or image/video link
       * @default null
       */
      link: string | null;
      /**
       * Strikethrough
       * @description Indicates if the text has strikethrough.
       * @default false
       */
      strikethrough: boolean;
      /**
       * Underline
       * @description Indicates if the text is underlined.
       * @default false
       */
      underline: boolean;
  } | null;
  /**
   * Parent Block Id
   * @description Identifier of the parent page or block to which the new content block will be added. This parent must be capable of having child blocks. Obtain valid IDs using other Notion actions or API calls.
   */
  parent_block_id?: string;
};

/**
 * Type of NOTION's NOTION_ADD_PAGE_CONTENT tool output.
 */
type NOTION_ADD_PAGE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description Indicates whether there are more results for pagination. Usually false when appending a single block with this action.
       */
      has_more: boolean;
      /**
       * Next Cursor
       * @description An optional cursor for pagination if the list of children is long. Usually null when appending a single block with this action.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Object
       * @description The type of object returned by the API, typically 'list'.
       */
      object: string;
      /**
       * Results
       * @description A list of block objects that were added as children. For this action, it will typically contain the single newly added block object.
       */
      results: {
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
 * Type of NOTION's NOTION_APPEND_BLOCK_CHILDREN tool input.
 */
type NOTION_APPEND_BLOCK_CHILDREN_INPUT = {
  /**
   * After
   * @description An optional ID of an existing child block. If provided, the new blocks will be inserted directly after this specified block. If omitted, new blocks are appended to the end of the parent's children list.
   * @default null
   */
  after: string | null;
  /**
   * Block Id
   * @description Identifier of the parent block or page to which new child blocks will be appended. To find available page IDs and their titles, the `NOTION_FETCH_DATA` action can be utilized.
   */
  block_id?: string;
  /**
   * Children
   * @description A list of block objects to be added as children to the parent block. Each block object must conform to Notion's block structure. A maximum of 100 blocks can be appended in a single request.
   */
  children?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of NOTION's NOTION_APPEND_BLOCK_CHILDREN tool output.
 */
type NOTION_APPEND_BLOCK_CHILDREN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description A boolean flag indicating whether more results are available (true) or if all results have been returned (false).
       * @default false
       */
      has_more: boolean;
      /**
       * Next Cursor
       * @description If `has_more` is true, this field contains the cursor to use in a subsequent request to retrieve the next page of results. Otherwise, it is `null`.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Object
       * @description Indicates the type of the response object, typically 'list' for this operation, signifying a list of block objects.
       * @default list
       */
      object: string;
      /**
       * Results
       * @description A list containing the newly created block objects that were successfully appended.
       */
      results: {
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
 * Type of NOTION's NOTION_ARCHIVE_NOTION_PAGE tool input.
 */
type NOTION_ARCHIVE_NOTION_PAGE_INPUT = {
  /**
   * Archive
   * @description Set to `true` to move the page to trash (archive), or `false` to restore it from trash (unarchive). Defaults to `true`.
   * @default true
   */
  archive: boolean;
  /**
   * Page Id
   * @description The unique identifier (UUID) of the Notion page to be archived or unarchived. This page must already exist in the Notion workspace. Page IDs can be obtained using other Notion actions that retrieve or search for pages.
   */
  page_id?: string;
};

/**
 * Type of NOTION's NOTION_ARCHIVE_NOTION_PAGE tool output.
 */
type NOTION_ARCHIVE_NOTION_PAGE_OUTPUT = {
  /**
   * Data
   * @description Represents the updated Notion page object, reflecting its new archive status with the `in_trash` property updated.
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
 * Type of NOTION's NOTION_CREATE_COMMENT tool input.
 */
type NOTION_CREATE_COMMENT_INPUT = {
  /**
   * Comment
   * @description Content of the comment as a NotionRichText object. Simplest form: {'content': 'Looks good!'} (optional styling fields: bold, italic, link, etc.). Do NOT wrap this in a list or use Notion API block JSON.
   */
  comment?: {
      /**
       * Block Property
       * @description The block property of the block to be added. Possible properties are `paragraph`, `heading_1`, `heading_2`, `heading_3`, `callout`, `to_do`, `toggle`, `quote`, `bulleted_list_item`, `numbered_list_item`. Other properties possible are `file`, `image`, `video` (link required).
       * @default paragraph
       * @enum {string}
       */
      block_property: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "callout" | "to_do" | "toggle" | "quote" | "bulleted_list_item" | "numbered_list_item" | "file" | "image" | "video";
      /**
       * Bold
       * @description Indicates if the text is bold.
       * @default false
       */
      bold: boolean;
      /**
       * Code
       * @description Indicates if the text is formatted as code.
       * @default false
       */
      code: boolean;
      /**
       * Color
       * @description The color of the text background or text itself.
       * @default default
       */
      color: string;
      /**
       * Content
       * @description The textual content of the rich text object. ENHANCED: Now automatically parses markdown formatting including bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), and links ([text](url)). Required for paragraph, heading_1, heading_2, heading_3, callout, to_do, toggle, quote.
       * @default null
       */
      content: string | null;
      /**
       * Italic
       * @description Indicates if the text is italic.
       * @default false
       */
      italic: boolean;
      /**
       * Link
       * @description The URL of the rich text object or the file to be uploaded or image/video link
       * @default null
       */
      link: string | null;
      /**
       * Strikethrough
       * @description Indicates if the text has strikethrough.
       * @default false
       */
      strikethrough: boolean;
      /**
       * Underline
       * @description Indicates if the text is underlined.
       * @default false
       */
      underline: boolean;
  };
  /**
   * Discussion Id
   * @description The ID of an existing discussion thread to which the comment will be added. This is required if `parent_page_id` is not provided.
   * @default null
   */
  discussion_id: string | null;
  /**
   * Parent Page Id
   * @description The ID of the Notion page where the comment will be added. This is required if `discussion_id` is not provided. Page IDs can be obtained using other Notion actions that fetch page details or list pages.
   * @default null
   */
  parent_page_id: string | null;
};

/**
 * Type of NOTION's NOTION_CREATE_COMMENT tool output.
 */
type NOTION_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full JSON response from the Notion API, which includes the details of the newly created comment object.
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
 * Type of NOTION's NOTION_CREATE_DATABASE tool input.
 */
type NOTION_CREATE_DATABASE_INPUT = {
  /**
   * Parent Id
   * @description Identifier of the existing Notion page that will contain the new database. This ID must be a valid UUID corresponding to a page within the Notion workspace. It can often be obtained using search functionalities or the `NOTION_FETCH_DATA` action.
   */
  parent_id?: string;
  /**
   * Properties
   * @description A list defining the schema (columns) for the new database. Each item in the list is an object representing a property and must specify at least its 'name' (how it will appear in Notion) and 'type' (the kind of data it will hold). Refer to the `PropertySchema` model for full structure details. At least one property of type 'title' is generally required. Common supported property types include: 'title', 'rich_text', 'number', 'select', 'multi_select', 'status', 'date', 'people', 'files', 'checkbox', 'url', 'email', 'phone_number'. Other types like 'formula', 'relation', 'rollup', 'created_time', 'created_by', 'last_edited_time', 'last_edited_by' might also be supported.
   */
  properties?: {
      /**
       * Database Id
       * @description ID of the database to relate to. Required when type is 'relation'.
       * @default null
       */
      database_id: string | null;
      /**
       * Name
       * @description Name of the property
       */
      name: string;
      /**
       * Relation Type
       * @description Relationship type, either 'single_property' or 'dual_property'.
       * @default single_property
       */
      relation_type: string | null;
      /**
       * Type
       * @description The type of the property, which determines the kind of data it will store. Valid types are defined by the PropertyType enum.
       * @enum {string}
       */
      type: "title" | "rich_text" | "number" | "select" | "multi_select" | "date" | "people" | "files" | "checkbox" | "url" | "email" | "phone_number" | "formula" | "relation" | "rollup" | "status" | "created_time" | "created_by" | "last_edited_time";
  }[];
  /**
   * Title
   * @description The desired title for the new database. This text will be automatically converted into Notion's rich text format when the database is created.
   */
  title?: string;
};

/**
 * Type of NOTION's NOTION_CREATE_DATABASE tool output.
 */
type NOTION_CREATE_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Archived status.
       */
      archived: boolean;
      /**
       * Cover
       * @description Database cover image.
       * @default null
       */
      cover: {
          [key: string]: unknown;
      } | null;
      /**
       * Created By
       * @description User who created the database.
       * @default null
       */
      created_by: {
          [key: string]: unknown;
      } | null;
      /**
       * Created Time
       * @description Database creation time (ISO 8601 format).
       */
      created_time: string;
      /**
       * Description
       * @description Database description.
       * @default null
       */
      description: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Icon
       * @description Database icon (emoji or file).
       * @default null
       */
      icon: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique identifier for the database.
       */
      id: string;
      /**
       * Is Inline
       * @description Whether the database is inline or not.
       * @default null
       */
      is_inline: boolean | null;
      /**
       * Last Edited By
       * @description User who last edited the database.
       * @default null
       */
      last_edited_by: {
          [key: string]: unknown;
      } | null;
      /**
       * Last Edited Time
       * @description Last edited time (ISO 8601 format).
       */
      last_edited_time: string;
      /**
       * Object
       * @description Always 'database'.
       */
      object: string;
      /**
       * Parent
       * @description Parent information.
       */
      parent: {
          [key: string]: unknown;
      };
      /**
       * Properties
       * @description Properties of the database.
       */
      properties: {
          [key: string]: unknown;
      };
      /**
       * Title
       * @description Database title as a list of rich text objects.
       */
      title: {
          [key: string]: unknown;
      }[];
      /**
       * Url
       * @description URL of the database.
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
 * Type of NOTION's NOTION_CREATE_NOTION_PAGE tool input.
 */
type NOTION_CREATE_NOTION_PAGE_INPUT = {
  /**
   * Cover
   * @description The URL of an image to be used as the cover for the new page. The URL must be publicly accessible.
   * @default null
   */
  cover: string | null;
  /**
   * Icon
   * @description An emoji to be used as the icon for the new page. Must be a single emoji character.
   * @default null
   */
  icon: string | null;
  /**
   * Parent Id
   * @description The UUID of the parent page or database under which the new page will be created. This ID must correspond to an existing page or database in the Notion workspace. Use other Notion actions (e.g., for searching or fetching data) to obtain valid parent IDs.
   */
  parent_id?: string;
  /**
   * Title
   * @description The title of the new page to be created.
   */
  title?: string;
};

/**
 * Type of NOTION's NOTION_CREATE_NOTION_PAGE tool output.
 */
type NOTION_CREATE_NOTION_PAGE_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the newly created page object, including its ID, parent information, creation time, last edited time, and properties, as returned by the Notion API.
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
 * Type of NOTION's NOTION_DELETE_BLOCK tool input.
 */
type NOTION_DELETE_BLOCK_INPUT = {
  /**
   * Block Id
   * @description Identifier of the block, page, or database to be deleted (archived). To find page IDs and their titles, consider using an action like `NOTION_FETCH_DATA`.
   */
  block_id?: string;
};

/**
 * Type of NOTION's NOTION_DELETE_BLOCK tool output.
 */
type NOTION_DELETE_BLOCK_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the block object that was successfully archived. This object includes an 'archived': true key-value pair, confirming the deletion.
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
 * Type of NOTION's NOTION_DUPLICATE_PAGE tool input.
 */
type NOTION_DUPLICATE_PAGE_INPUT = {
  /**
   * Page Id
   * @description The unique identifier (UUID v4) of the Notion page to be duplicated. Ensure this page exists and is accessible.
   */
  page_id?: string;
  /**
   * Parent Id
   * @description The unique identifier (UUID v4) of the Notion page or workspace that will serve as the parent for the duplicated page. Ensure this parent exists and is accessible. This ID cannot be the same as `page_id`.
   */
  parent_id?: string;
  /**
   * Title
   * @description An optional new title for the duplicated page. If not provided, the title of the original page will be used, prefixed with 'Copy of'.
   * @default null
   */
  title: string | null;
};

/**
 * Type of NOTION's NOTION_DUPLICATE_PAGE tool output.
 */
type NOTION_DUPLICATE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page Id
       * @description The unique identifier (UUID v4) of the newly created duplicate page.
       */
      page_id: string;
      /**
       * Title
       * @description The title of the newly created duplicate page. This will be the user-provided title or the original title prefixed with 'Copy of'.
       */
      title: string;
      /**
       * Url
       * @description The direct URL to access the newly created duplicate page in Notion.
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
 * Type of NOTION's NOTION_FETCH_BLOCK_CONTENTS tool input.
 */
type NOTION_FETCH_BLOCK_CONTENTS_INPUT = {
  /**
   * Block Id
   * Format: uuid
   * @description Identifier (UUID) of the parent Notion block or page whose children are to be fetched. This ID can be for a block or a page (as pages are blocks). To obtain relevant IDs and their titles, consider using actions like 'NOTION_FETCH_DATA' or other actions that list pages or database content.
   */
  block_id?: string;
  /**
   * Page Size
   * @description The maximum number of child blocks to return in a single response. The actual number of results may be lower if there are fewer child blocks available or if the end of the list is reached. Maximum allowed value is 100. If unspecified, Notion's default page size will be used.
   * @default null
   */
  page_size: number | null;
  /**
   * Start Cursor
   * @description An opaque string. If provided, the response will list blocks starting from the position indicated by this cursor. If omitted, the first page of results is returned. Essential for paginating through a large number of child blocks.
   * @default null
   */
  start_cursor: string | null;
};

/**
 * Type of NOTION's NOTION_FETCH_BLOCK_CONTENTS tool output.
 */
type NOTION_FETCH_BLOCK_CONTENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Block Child Data
       * @description A dictionary representing the API response, typically containing a 'results' key with a list of child block objects, and pagination details like 'next_cursor' and 'has_more'. Each object in the 'results' list is a direct child of the specified parent block.
       */
      block_child_data?: {
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
 * Type of NOTION's NOTION_FETCH_BLOCK_METADATA tool input.
 */
type NOTION_FETCH_BLOCK_METADATA_INPUT = {
  /**
   * Block Id
   * Format: uuid
   * @description The unique UUID identifier for the Notion block to be retrieved. This can be the ID of a standard block or a page. To find block or page IDs, you might use actions that list page content or search for blocks/pages.
   */
  block_id?: string;
};

/**
 * Type of NOTION's NOTION_FETCH_BLOCK_METADATA tool output.
 */
type NOTION_FETCH_BLOCK_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary representing the JSON response for the fetched Notion block object. The structure of this dictionary conforms to Notion's official Block object schema.
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
 * Type of NOTION's NOTION_FETCH_COMMENTS tool input.
 */
type NOTION_FETCH_COMMENTS_INPUT = {
  /**
   * Block Id
   * @description Identifier for a Notion block or page from which to fetch comments. To find page IDs, use the `NOTION_FETCH_DATA` action to list available pages and their corresponding IDs.
   */
  block_id?: string;
  /**
   * Page Size
   * @description The number of comments to return in a single response page. Must be between 1 and 100, inclusive. Default is 100.
   * @default 100
   */
  page_size: number;
  /**
   * Start Cursor
   * @description A pagination cursor. If provided, the response will contain the page of results starting after this cursor. If omitted, the first page of results is returned.
   * @default null
   */
  start_cursor: string | null;
};

/**
 * Type of NOTION's NOTION_FETCH_COMMENTS tool output.
 */
type NOTION_FETCH_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description A boolean indicating whether more pages of comments are available to be fetched. `true` if more comments exist, `false` otherwise.
       * @default false
       */
      has_more: boolean;
      /**
       * Next Cursor
       * @description A cursor for pagination. If more comments are available, this field contains the cursor to use in a subsequent request to fetch the next page. `null` if no more comments are available.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Object
       * @description Indicates the type of the response object, typically 'list'.
       */
      object: string;
      /**
       * Results
       * @description A list of comment objects retrieved from the specified block or page.
       */
      results?: {
          [key: string]: unknown;
      }[];
      /**
       * Type
       * @description The type of objects contained within the `results` list, which will be 'comment' for this endpoint.
       * @default comment
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
 * Type of NOTION's NOTION_FETCH_DATA tool input.
 */
type NOTION_FETCH_DATA_INPUT = {
  /**
   * Get All
   * @description If true, fetches both pages and databases accessible to the Notion integration. Only one of `get_pages`, `get_databases`, or `get_all` can be true.
   * @default false
   */
  get_all: boolean;
  /**
   * Get Databases
   * @description If true, fetches all databases accessible to the Notion integration. Only one of `get_pages`, `get_databases`, or `get_all` can be true.
   * @default false
   */
  get_databases: boolean;
  /**
   * Get Pages
   * @description If true, fetches all pages accessible to the Notion integration. Only one of `get_pages`, `get_databases`, or `get_all` can be true.
   * @default false
   */
  get_pages: boolean;
  /**
   * Page Size
   * @description The maximum number of items to retrieve. Must be between 1 and 100, inclusive. Defaults to 100. Note: this action currently only fetches the first page of results, so `page_size` effectively sets the maximum number of items returned.
   * @default 100
   */
  page_size: number | null;
  /**
   * Query
   * @description An optional search query to filter pages and/or databases by their title or content. If not provided (None or empty string), all accessible items matching the selected type (pages, databases, or both) are returned.
   * @default null
   */
  query: string | null;
};

/**
 * Type of NOTION's NOTION_FETCH_DATA tool output.
 */
type NOTION_FETCH_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description A list of dictionaries, where each dictionary represents a fetched Notion item and includes its 'id', 'title', and 'type' (which will be 'page' or 'database').
       */
      values?: {
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
 * Type of NOTION's NOTION_FETCH_DATABASE tool input.
 */
type NOTION_FETCH_DATABASE_INPUT = {
  /**
   * Database Id
   * @description The unique identifier of the Notion database whose metadata (structure, properties) is to be retrieved. To obtain a list of `database_id` values and corresponding database titles, use the 'NOTION_FETCH_DATA' action (or a similar action designed for listing/discovering databases). Note: Linked databases are not supported; the ID must reference an actual database, not a linked database.
   */
  database_id?: string;
};

/**
 * Type of NOTION's NOTION_FETCH_DATABASE tool output.
 */
type NOTION_FETCH_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Archived */
      archived: boolean;
      /**
       * Cover
       * @default null
       */
      cover: {
          [key: string]: unknown;
      } | null;
      /** Created Time */
      created_time: string;
      /** Description */
      description?: {
          /**
           * Annotations
           * @default null
           */
          annotations: {
              [key: string]: unknown;
          } | null;
          /**
           * Href
           * @default null
           */
          href: string | null;
          /** Plain Text */
          plain_text: string;
          /**
           * Text
           * @default null
           */
          text: {
              [key: string]: unknown;
          } | null;
          /** Type */
          type: string;
      }[];
      /**
       * Icon
       * @default null
       */
      icon: {
          [key: string]: unknown;
      } | null;
      /** Id */
      id: string;
      /** Is Inline */
      is_inline: boolean;
      /** Last Edited Time */
      last_edited_time: string;
      /**
       * Object
       * @default database
       */
      object: string;
      /** Parent */
      parent: {
          [key: string]: unknown;
      };
      /** Properties */
      properties: {
          [key: string]: {
              /**
               * Checkbox
               * @default null
               */
              checkbox: {
                  [key: string]: unknown;
              } | null;
              /**
               * Created By
               * @default null
               */
              created_by: {
                  [key: string]: unknown;
              } | null;
              /**
               * Created Time
               * @default null
               */
              created_time: {
                  [key: string]: unknown;
              } | null;
              /**
               * Date
               * @default null
               */
              date: {
                  [key: string]: unknown;
              } | null;
              /**
               * Email
               * @default null
               */
              email: {
                  [key: string]: unknown;
              } | null;
              /**
               * Files
               * @default null
               */
              files: {
                  [key: string]: unknown;
              } | null;
              /**
               * Formula
               * @default null
               */
              formula: {
                  [key: string]: unknown;
              } | null;
              /** Id */
              id: string;
              /**
               * Last Edited By
               * @default null
               */
              last_edited_by: {
                  [key: string]: unknown;
              } | null;
              /**
               * Last Edited Time
               * @default null
               */
              last_edited_time: {
                  [key: string]: unknown;
              } | null;
              /**
               * Multi Select
               * @default null
               */
              multi_select: {
                  [key: string]: unknown;
              } | null;
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Number
               * @default null
               */
              number: {
                  [key: string]: unknown;
              } | null;
              /**
               * People
               * @default null
               */
              people: {
                  [key: string]: unknown;
              } | null;
              /**
               * Phone Number
               * @default null
               */
              phone_number: {
                  [key: string]: unknown;
              } | null;
              /**
               * Relation
               * @default null
               */
              relation: {
                  [key: string]: unknown;
              } | null;
              /**
               * Rich Text
               * @default null
               */
              rich_text: {
                  [key: string]: unknown;
              } | null;
              /**
               * Rollup
               * @default null
               */
              rollup: {
                  [key: string]: unknown;
              } | null;
              /**
               * Select
               * @default null
               */
              select: {
                  [key: string]: unknown;
              } | null;
              /**
               * Status
               * @default null
               */
              status: {
                  [key: string]: unknown;
              } | null;
              /**
               * Title
               * @default null
               */
              title: {
                  [key: string]: unknown;
              } | null;
              /** Type */
              type: string;
              /**
               * Url
               * @default null
               */
              url: {
                  [key: string]: unknown;
              } | null;
          };
      };
      /**
       * Request Id
       * @default null
       */
      request_id: string | null;
      /** Title */
      title: {
          /**
           * Annotations
           * @default null
           */
          annotations: {
              [key: string]: unknown;
          } | null;
          /**
           * Href
           * @default null
           */
          href: string | null;
          /** Plain Text */
          plain_text: string;
          /**
           * Text
           * @default null
           */
          text: {
              [key: string]: unknown;
          } | null;
          /** Type */
          type: string;
      }[];
      /** Url */
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
 * Type of NOTION's NOTION_FETCH_ROW tool input.
 */
type NOTION_FETCH_ROW_INPUT = {
  /**
   * Page Id
   * @description The UUID of the Notion page (which represents a row in a database) to retrieve. Each row in a Notion database is a page. You can obtain `page_id` values by using an action that lists database pages (e.g., `NOTION_FETCH_DATA`) to get available page IDs and their titles.
   */
  page_id?: string;
};

/**
 * Type of NOTION's NOTION_FETCH_ROW tool output.
 */
type NOTION_FETCH_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page Data
       * @description A dictionary containing the complete data of the fetched Notion page, representing the row's content and properties.
       */
      page_data: {
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
 * Type of NOTION's NOTION_GET_ABOUT_ME tool input.
 */
type NOTION_GET_ABOUT_ME_INPUT = object;

/**
 * Type of NOTION's NOTION_GET_ABOUT_ME tool output.
 */
type NOTION_GET_ABOUT_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the User object associated with the integration token. This object includes details like the bot's ID, name, avatar URL, and type (which will be 'bot').
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
 * Type of NOTION's NOTION_GET_ABOUT_USER tool input.
 */
type NOTION_GET_ABOUT_USER_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the Notion user whose details are to be retrieved. This ID is used to fetch specific user information.
   */
  user_id?: string;
};

/**
 * Type of NOTION's NOTION_GET_ABOUT_USER tool output.
 */
type NOTION_GET_ABOUT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the user's avatar.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Bot
       * @description Details if the user is a bot, e.g., {'owner': {...}, 'workspace_name': '...'}.
       * @default null
       */
      bot: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique identifier for the user.
       */
      id: string;
      /**
       * Name
       * @description User's name.
       * @default null
       */
      name: string | null;
      /**
       * Object
       * @description Type of object. Should be 'user' or 'bot'.
       */
      object: string;
      /**
       * Person
       * @description Details if the user is a person, e.g., {'email': '...'}.
       * @default null
       */
      person: {
          [key: string]: string;
      } | null;
      /**
       * Type
       * @description Type of user, e.g., 'person' or 'bot'.
       * @default null
       */
      type: string | null;
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
 * Type of NOTION's NOTION_GET_PAGE_PROPERTY_ACTION tool input.
 */
type NOTION_GET_PAGE_PROPERTY_ACTION_INPUT = {
  /**
   * Page Id
   * @description Identifier of the Notion page (e.g., '067dd719-a912-471e-a9a3-ac10710e78b4') from which to retrieve the property. Use the 'NOTION_FETCH_DATA' action or similar to discover available page IDs and their titles.
   */
  page_id?: string;
  /**
   * Page Size
   * @description For paginated property types (e.g., 'relation', 'rollup', 'rich_text' if content is extensive), this specifies the number of items to return per request. If omitted, Notion's default page size for the property is used.
   * @default null
   */
  page_size: number | null;
  /**
   * Property Id
   * @description Identifier or name of the property to retrieve. For 'title' properties, the ID is always 'title'. For other properties, this can be the property's name as displayed in Notion (e.g., 'Status', 'Assignee') or its unique programmatic ID (e.g., 'N%3A%5B%7C', 'prop_id_example'). Property IDs/names can be found by inspecting the page object or database schema.
   */
  property_id?: string;
  /**
   * Start Cursor
   * @description For paginated properties, if a previous request's response indicated `has_more: true`, provide the `next_cursor` value here to fetch the subsequent set of items. Omit if fetching the first page.
   * @default null
   */
  start_cursor: string | null;
};

/**
 * Type of NOTION's NOTION_GET_PAGE_PROPERTY_ACTION tool output.
 */
type NOTION_GET_PAGE_PROPERTY_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has More
       * @description If `object` is 'list', this boolean indicates if more items are available for the paginated property. True if more items can be fetched using `next_cursor`, false otherwise. Absent if `object` is 'property_item'.
       * @default null
       */
      has_more: boolean | null;
      /**
       * Next Cursor
       * @description If `object` is 'list' and `has_more` is true, this string is a cursor for fetching the next page of results. Pass this as `start_cursor` in a subsequent request. Null if no more results or if `object` is 'property_item'.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Object
       * @description Indicates the type of the response object. Will be 'property_item' if the property's value and type are returned directly, or 'list' if the property is paginated (e.g., a list of rich text segments, users, files, or related page references), in which case `results` will contain the items.
       */
      object: string;
      /**
       * Results
       * @description If `object` is 'list', this array contains the property items for the current page (e.g., for a 'rich_text' property, a list of text objects; for a 'relation', a list of related page references). This field is absent if `object` is 'property_item'.
       * @default null
       */
      results: unknown[] | null;
      /**
       * Type
       * @description If `object` is 'property_item', this field indicates the type of the property (e.g., 'rich_text', 'number', 'select', 'date', 'people', 'files', 'checkbox', 'url', 'email', 'status', 'title'). This field is absent if `object` is 'list'.
       * @default null
       */
      type: string | null;
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
 * Type of NOTION's NOTION_INSERT_ROW_DATABASE tool input.
 */
type NOTION_INSERT_ROW_DATABASE_INPUT = {
  /**
   * Child Blocks
   * @description A list of `NotionRichText` objects defining content blocks (e.g., paragraphs, headings) to append to the new page's body. If omitted, the page body will be empty.
   * @default []
   */
  child_blocks: {
      /**
       * Block Property
       * @description The block property of the block to be added. Possible properties are `paragraph`, `heading_1`, `heading_2`, `heading_3`, `callout`, `to_do`, `toggle`, `quote`, `bulleted_list_item`, `numbered_list_item`. Other properties possible are `file`, `image`, `video` (link required).
       * @default paragraph
       * @enum {string}
       */
      block_property: "paragraph" | "heading_1" | "heading_2" | "heading_3" | "callout" | "to_do" | "toggle" | "quote" | "bulleted_list_item" | "numbered_list_item" | "file" | "image" | "video";
      /**
       * Bold
       * @description Indicates if the text is bold.
       * @default false
       */
      bold: boolean;
      /**
       * Code
       * @description Indicates if the text is formatted as code.
       * @default false
       */
      code: boolean;
      /**
       * Color
       * @description The color of the text background or text itself.
       * @default default
       */
      color: string;
      /**
       * Content
       * @description The textual content of the rich text object. ENHANCED: Now automatically parses markdown formatting including bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), and links ([text](url)). Required for paragraph, heading_1, heading_2, heading_3, callout, to_do, toggle, quote.
       * @default null
       */
      content: string | null;
      /**
       * Italic
       * @description Indicates if the text is italic.
       * @default false
       */
      italic: boolean;
      /**
       * Link
       * @description The URL of the rich text object or the file to be uploaded or image/video link
       * @default null
       */
      link: string | null;
      /**
       * Strikethrough
       * @description Indicates if the text has strikethrough.
       * @default false
       */
      strikethrough: boolean;
      /**
       * Underline
       * @description Indicates if the text is underlined.
       * @default false
       */
      underline: boolean;
  }[];
  /**
   * Cover
   * @description URL of an external image to set as the page cover. The URL must point to a publicly accessible image.
   * @default null
   */
  cover: string | null;
  /**
   * Database Id
   * @description Identifier (UUID) of the Notion database where the new page (row) will be inserted. This ID must correspond to an existing database accessible to the integration. Use the `NOTION_FETCH_DATA` action to find available database IDs.
   */
  database_id?: string;
  /**
   * Icon
   * @description Emoji to be used as the page icon. Must be a single emoji character.
   * @default null
   */
  icon: string | null;
  /**
   * Properties
   * @description Property values for the new page. IMPORTANT: This field requires a LIST of objects, not a dictionary. Each object in the list defines a property and must include: `name` (the exact name of the property as it appears in Notion), `type` (the property's data type), and `value` (the property's value, formatted as a string according to its type).
   *
   *     CORRECT FORMAT EXAMPLE (a list of property objects):
   *     [
   *       {"name": "Title", "type": "title", "value": "My new task"},
   *       {"name": "Status", "type": "select", "value": "In Progress"},
   *       {"name": "Tags", "type": "multi_select", "value": "Work,Personal"},
   *       {"name": "Due Date", "type": "date", "value": "2024-06-01T12:00:00.000-04:00"},
   *       {"name": "Completed", "type": "checkbox", "value": "False"}
   *     ]
   *
   *     INCORRECT FORMAT (e.g., a dictionary instead of a list):
   *     {
   *       "Title": "My new task",
   *       "Status": "In Progress"
   *     }
   *
   *     Value formatting rules by property type:
   *     - `title` or `rich_text`: Plain text string (maximum 2000 characters).
   *     - `number`: String representation of a number (e.g., "23.4").
   *     - `select`: The name of an existing option for the select property (e.g., "In Progress").
   *     - `multi_select`: Comma-separated string of existing option names (e.g., "Work,Personal").
   *     - `date`: ISO 8601 formatted date string (e.g., "2024-06-01T12:00:00.000-04:00").
   *     - `people`: Comma-separated string of Notion user IDs.
   *     - `checkbox`: String "True" or "False".
   *     - `url`: A valid URL string.
   *     - `files`: Comma-separated string of URLs.
   *     Properties defined in the database schema but omitted from this list will be initialized with default or empty values. Ensure that property names and types correctly match the target database schema.
   * @default []
   */
  properties: {
      /**
       * Name
       * @description Name of the property
       */
      name: string;
      /**
       * Type
       * @description Type of the property. Type of the propertytitle, rich_text, number, select, multi_select, date, people, files, checkbox url, email, phone_number, formula, created_by, created_time, last_edited_by, last_edited_time
       * @enum {string}
       */
      type: "title" | "rich_text" | "number" | "select" | "multi_select" | "date" | "people" | "files" | "checkbox" | "url" | "email" | "phone_number" | "formula" | "relation" | "rollup" | "status" | "created_time" | "created_by" | "last_edited_time";
      /**
       * Value
       * @description Value of the property, it will be dependent on the type of the property
       *     For types --> value should be
       *     - title, rich_text - text ex. "Hello World" (IMPORTANT: max 2000 characters, longer text will be truncated)
       *     - number - number ex. 23.4
       *     - select - select ex. "India"
       *     - multi_select - multi_select comma separated values ex. "India,USA"
       *     - date - format ex. "2021-05-11T11:00:00.000-04:00",
       *     - people - comma separated ids of people ex. "123,456" (will be converted to array of user objects)
       *     - relation - comma separated ids of related pages ex. "123,456" (will be converted to array of relation objects)
       *     - url - a url.
       *     - files - comma separated urls
       *     - checkbox - "True" or "False"
       *
       */
      value: string;
  }[];
};

/**
 * Type of NOTION's NOTION_INSERT_ROW_DATABASE tool output.
 */
type NOTION_INSERT_ROW_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Dictionary containing the complete JSON object representing the newly created page (row), as returned by the Notion API.
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
 * Type of NOTION's NOTION_LIST_USERS tool input.
 */
type NOTION_LIST_USERS_INPUT = {
  /**
   * Page Size
   * @description The desired number of users to retrieve per page. The maximum value is 100.
   * @default 30
   */
  page_size: number;
  /**
   * Start Cursor
   * @description If omitted, retrieves the first page of users. Use the 'next_cursor' value from a previous response to get the next page.
   * @default null
   */
  start_cursor: string | null;
};

/**
 * Type of NOTION's NOTION_LIST_USERS tool output.
 */
type NOTION_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing a paginated list of user objects from the workspace. The dictionary structure includes: 'results' (a list of user objects), 'has_more' (a boolean indicating if more users are available), and 'next_cursor' (a string cursor for fetching the next page, if 'has_more' is true). Each user object typically contains details such as 'id', 'type' (e.g., 'person' or 'bot'), 'name', 'avatar_url', and potentially an 'email' if available and permissions allow.
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
 * Type of NOTION's NOTION_QUERY_DATABASE tool input.
 */
type NOTION_QUERY_DATABASE_INPUT = {
  /**
   * Database Id
   * @description Identifier of the Notion database to query. To discover available database IDs and their corresponding titles, you can use an action like `NOTION_FETCH_DATA` or inspect the database in Notion.
   */
  database_id?: string;
  /**
   * Page Size
   * @description The maximum number of items (pages or rows) to return in a single response. Defaults to 2. The actual number of items returned may be less than this value.
   * @default 2
   */
  page_size: number;
  /**
   * Sorts
   * @description List of sort rules. Each item must use the keys 'property_name' and 'ascending'.
   *     Example: [{'property_name': 'Due', 'ascending': False}]
   * @default null
   */
  sorts: {
      /**
       * Ascending
       * @description True = ASC, False = DESC.
       */
      ascending: boolean;
      /**
       * Property Name
       * @description Database column to sort by.
       */
      property_name: string;
  }[] | null;
  /**
   * Start Cursor
   * @description An opaque cursor for pagination, used to retrieve the next set of results. This value is obtained from the `next_cursor` field in a previous response. If omitted, retrieves results from the beginning.
   * @default null
   */
  start_cursor: string | null;
};

/**
 * Type of NOTION's NOTION_QUERY_DATABASE tool output.
 */
type NOTION_QUERY_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the queried data from the Notion database. This typically includes a list of page objects (rows), each with its properties, and pagination information like `next_cursor` and `has_more`.
       */
      response_data?: {
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
 * Type of NOTION's NOTION_RETRIEVE_COMMENT tool input.
 */
type NOTION_RETRIEVE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description Identifier for the comment to retrieve.
   */
  comment_id?: string;
};

/**
 * Type of NOTION's NOTION_RETRIEVE_COMMENT tool output.
 */
type NOTION_RETRIEVE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created By
       * @description User who created the comment.
       */
      created_by: {
          /**
           * Id
           * @description Unique identifier for the user.
           * @default null
           */
          id: string | null;
          /**
           * Object
           * @description Type of the object, typically "user".
           * @default null
           */
          object: string | null;
      };
      /**
       * Created Time
       * @description Timestamp of when the comment was created.
       */
      created_time: string;
      /**
       * Discussion Id
       * @description Identifier for the discussion the comment belongs to.
       */
      discussion_id: string;
      /**
       * Id
       * @description Unique identifier for the comment.
       */
      id: string;
      /**
       * Last Edited Time
       * @description Timestamp of when the comment was last edited.
       */
      last_edited_time: string;
      /**
       * Object
       * @description The type of the object, typically "comment".
       */
      object: string;
      /**
       * Parent
       * @description Information about the parent of the comment.
       */
      parent: {
          /**
           * Block Id
           * @description Identifier of the parent block, if applicable.
           * @default null
           */
          block_id: string | null;
          /**
           * Page Id
           * @description Identifier of the parent page, if applicable.
           * @default null
           */
          page_id: string | null;
          /**
           * Type
           * @description Type of the parent, e.g., "page_id" or "block_id".
           */
          type: string;
      };
      /**
       * Rich Text
       * @description The content of the comment in rich text format.
       */
      rich_text: {
          /**
           * Annotations
           * @description Annotations for the text.
           * @default null
           */
          annotations: {
              [key: string]: unknown;
          } | null;
          /**
           * Href
           * @description URL, if the text is a link.
           * @default null
           */
          href: string | null;
          /**
           * Plain Text
           * @description Plain text version of the content.
           * @default null
           */
          plain_text: string | null;
          /**
           * Text
           * @description Text content.
           * @default null
           */
          text: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description Type of the rich text object.
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Type
       * @description Type of this object, should be "comment".
       * @default null
       */
      type: string | null;
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
 * Type of NOTION's NOTION_RETRIEVE_DATABASE_PROPERTY tool input.
 */
type NOTION_RETRIEVE_DATABASE_PROPERTY_INPUT = {
  /**
   * Database Id
   * @description Identifier for the database.
   */
  database_id?: string;
  /**
   * Property Id
   * @description Identifier for the property. This can be the property ID or the property name.
   */
  property_id?: string;
};

/**
 * Type of NOTION's NOTION_RETRIEVE_DATABASE_PROPERTY tool output.
 */
type NOTION_RETRIEVE_DATABASE_PROPERTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the property.
       */
      id: string;
      /**
       * Name
       * @description Name of the property.
       */
      name: string;
      /**
       * Property Type Details
       * @description Type-specific property configuration.
       * @default null
       */
      property_type_details: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Type of the property.
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
 * Type of NOTION's NOTION_SEARCH_NOTION_PAGE tool input.
 */
type NOTION_SEARCH_NOTION_PAGE_INPUT = {
  /**
   * Direction
   * @description Specifies the sort direction for the results. Required if `timestamp` is provided. Valid values are `ascending` or `descending`.
   * @default null
   */
  direction: string | null;
  /**
   * Filter Property
   * @description The property to filter the search results by. Currently, the only supported value is `object`, which filters by the type specified in `filter_value`. Defaults to `object`.
   * @default object
   */
  filter_property: string;
  /**
   * Filter Value
   * @description Filters the search results by object type. Valid values are `page` or `database`. Defaults to `page`.
   * @default page
   */
  filter_value: string | null;
  /**
   * Page Size
   * @description The number of items to include in the response. Must be an integer between 1 and 100, inclusive. Defaults to 2.
   * @default 2
   */
  page_size: number | null;
  /**
   * Query
   * @description The text to search for in page and database titles. If an empty string is provided, all pages and databases accessible to the integration will be returned.
   * @default
   */
  query: string;
  /**
   * Start Cursor
   * @description An opaque cursor value returned in a previous response. If provided, the API will return results starting after this cursor, enabling pagination. If `None` or an empty string, results start from the beginning.
   * @default null
   */
  start_cursor: string | null;
  /**
   * Timestamp
   * @description The timestamp field to sort the results by. Currently, the only supported value is `last_edited_time`. If provided, `direction` must also be specified.
   * @default null
   */
  timestamp: string | null;
};

/**
 * Type of NOTION's NOTION_SEARCH_NOTION_PAGE tool output.
 */
type NOTION_SEARCH_NOTION_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the raw JSON response from the Notion API, which includes a list of page or database objects, and potentially a `next_cursor` for pagination.
       * @default {}
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
 * Type of NOTION's NOTION_UPDATE_BLOCK tool input.
 */
type NOTION_UPDATE_BLOCK_INPUT = {
  /**
   * Additional Properties
   * @description A dictionary of additional properties to apply to the block, specific to its type. These are merged into the block type's data object (e.g., into the 'paragraph' or 'to_do' object). Examples include `is_toggleable` (boolean) for heading blocks, `checked` (boolean) for 'to_do' blocks, or `color` (string, e.g., 'blue_background') for blocks supporting it. Consult Notion API documentation for supported properties within each block type object.
   * @default null
   */
  additional_properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Block Id
   * @description Identifier of the Notion block to be updated. To find a block's ID, other Notion actions that list or retrieve blocks can be used. For updating content within a page (which is also a block), its ID can be obtained using actions like `NOTION_FETCH_DATA` to get page IDs and titles.
   */
  block_id?: string;
  /**
   * Block Type
   * @description The type of the block to update. Must be one of the supported types: 'paragraph', 'heading_1', 'heading_2', 'heading_3', 'bulleted_list_item', 'numbered_list_item', 'to_do', 'toggle'. The content structure and available `additional_properties` depend on this type.
   */
  block_type?: string;
  /**
   * Content
   * @description The new text content for the block. This is primarily used for text-based blocks like paragraphs, headings, and list items.
   */
  content?: string;
};

/**
 * Type of NOTION's NOTION_UPDATE_BLOCK tool output.
 */
type NOTION_UPDATE_BLOCK_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the updated Notion block object, conforming to the Notion API's block object structure.
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
 * Type of NOTION's NOTION_UPDATE_PAGE tool input.
 */
type NOTION_UPDATE_PAGE_INPUT = {
  /**
   * Archived
   * @description Set to true to archive the page (i.e., send to trash). Set to false to restore a page from trash. Defaults to false.
   * @default null
   */
  archived: boolean | null;
  /**
   * Cover
   * @description A file object for the page cover. Only external file objects are supported for covers.
   * @default null
   */
  cover: {
      [key: string]: unknown;
  } | null;
  /**
   * Icon
   * @description A page icon object (either an emoji object or an external file object).
   * @default null
   */
  icon: {
      [key: string]: unknown;
  } | null;
  /**
   * Page Id
   * @description Identifier for the Notion page to be updated.
   */
  page_id?: string;
  /**
   * Properties
   * @description An object containing the property values to update for the page. The keys are the names or IDs of the property and the values are property value objects. If a page property ID is not included, then it is not changed.
   * @default null
   */
  properties: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of NOTION's NOTION_UPDATE_PAGE tool output.
 */
type NOTION_UPDATE_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Whether the page is archived.
       */
      archived: boolean;
      /**
       * Cover
       * @description Page cover image, if any.
       * @default null
       */
      cover: {
          [key: string]: unknown;
      } | null;
      /**
       * Created By
       * @description User who created the page.
       */
      created_by: {
          [key: string]: unknown;
      };
      /**
       * Created Time
       * @description Date and time when the page was created.
       */
      created_time: string;
      /**
       * Icon
       * @description Page icon, if any.
       * @default null
       */
      icon: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique identifier for the page.
       */
      id: string;
      /**
       * Last Edited By
       * @description User who last edited the page.
       */
      last_edited_by: {
          [key: string]: unknown;
      };
      /**
       * Last Edited Time
       * @description Date and time when the page was last edited.
       */
      last_edited_time: string;
      /**
       * Object
       * @description Type of object. Always "page" for page objects.
       */
      object: string;
      /**
       * Parent
       * @description Information about the parent of this page.
       */
      parent: {
          [key: string]: unknown;
      };
      /**
       * Properties
       * @description The page's properties.
       */
      properties: {
          [key: string]: unknown;
      };
      /**
       * Public Url
       * @description The public URL of the Notion page, if it's shared publicly.
       * @default null
       */
      public_url: string | null;
      /**
       * Url
       * @description The URL of the Notion page.
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
 * Type of NOTION's NOTION_UPDATE_ROW_DATABASE tool input.
 */
type NOTION_UPDATE_ROW_DATABASE_INPUT = {
  /**
   * Cover
   * @description URL of an external image to be used as the cover for the page (e.g., 'https://google.com/image.png').
   * @default null
   */
  cover: string | null;
  /**
   * Delete Row
   * @description If true, the row (page) will be archived, effectively deleting it from the active view. If false, the row will be updated with other provided data.
   * @default false
   */
  delete_row: boolean;
  /**
   * Icon
   * @description The emoji to be used as the icon for the page. Must be a single emoji character (e.g., '😻', '🤔').
   * @default null
   */
  icon: string | null;
  /**
   * Properties
   * @description A list of property values to update for the page. Each item in this list defines a specific property (by its name or ID) and the new value it should take. The format of the `value` depends on the property's type; refer to the main action documentation for detailed formatting guidelines. Properties not included in this list will retain their current values.
   * @default []
   */
  properties: {
      /**
       * Name
       * @description Name of the property
       */
      name: string;
      /**
       * Type
       * @description Type of the property. Type of the propertytitle, rich_text, number, select, multi_select, date, people, files, checkbox url, email, phone_number, formula, created_by, created_time, last_edited_by, last_edited_time
       * @enum {string}
       */
      type: "title" | "rich_text" | "number" | "select" | "multi_select" | "date" | "people" | "files" | "checkbox" | "url" | "email" | "phone_number" | "formula" | "relation" | "rollup" | "status" | "created_time" | "created_by" | "last_edited_time";
      /**
       * Value
       * @description Value of the property, it will be dependent on the type of the property
       *     For types --> value should be
       *     - title, rich_text - text ex. "Hello World" (IMPORTANT: max 2000 characters, longer text will be truncated)
       *     - number - number ex. 23.4
       *     - select - select ex. "India"
       *     - multi_select - multi_select comma separated values ex. "India,USA"
       *     - date - format ex. "2021-05-11T11:00:00.000-04:00",
       *     - people - comma separated ids of people ex. "123,456" (will be converted to array of user objects)
       *     - relation - comma separated ids of related pages ex. "123,456" (will be converted to array of relation objects)
       *     - url - a url.
       *     - files - comma separated urls
       *     - checkbox - "True" or "False"
       *
       */
      value: string;
  }[];
  /**
   * Row Id
   * @description Identifier (UUID) of the database row (page) to be updated. This ID must be a valid UUID string (e.g., '59833787-2cf9-4fdf-8782-e53db20768a5') corresponding to an existing Notion page. In Notion, database rows are treated as pages.
   */
  row_id?: string;
};

/**
 * Type of NOTION's NOTION_UPDATE_ROW_DATABASE tool output.
 */
type NOTION_UPDATE_ROW_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the raw JSON response from the Notion API, representing the updated page object.
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
 * Type of NOTION's NOTION_UPDATE_SCHEMA_DATABASE tool input.
 */
type NOTION_UPDATE_SCHEMA_DATABASE_INPUT = {
  /**
   * Database Id
   * @description Identifier of the Notion database to update. Use the `NOTION_FETCH_DATA` action or similar tools to get available database IDs and their titles.
   */
  database_id?: string;
  /**
   * Description
   * @description New description for the database. If this field is not provided or is set to `None` (the default value), the database's existing description will remain unchanged.
   * @default null
   */
  description: string | null;
  /**
   * Properties
   * @description List of property updates. Each item must include at least the 'name' of the column to change plus one of: 'new_type', 'rename', or 'remove'. Example:
   *     [
   *       {'name': 'Status', 'new_type': 'select'},
   *       {'name': 'Priority', 'remove': true}
   *     ]
   * @default []
   */
  properties: {
      /**
       * Name
       * @description Name of the property
       */
      name: string;
      /**
       * New Type
       * @description Default is None, If None the type remains the same. New Type of the property title, rich_text, number, select, multi_select, date, people, files, checkbox url, email, phone_number, formula, created_by, created_time, last_edited_by, last_edited_time
       * @default null
       */
      new_type: string | null;
      /**
       * Remove
       * @description Remove the property
       * @default false
       */
      remove: boolean;
      /**
       * Rename
       * @description New name of the property, default is None. If None, the name remains the same.
       * @default null
       */
      rename: string | null;
  }[];
  /**
   * Title
   * @description New title for the database. If this field is not provided or is set to `None` (the default value), the database's existing title will remain unchanged.
   * @default null
   */
  title: string | null;
};

/**
 * Type of NOTION's NOTION_UPDATE_SCHEMA_DATABASE tool output.
 */
type NOTION_UPDATE_SCHEMA_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full JSON response from the Notion API after attempting to update the database, containing the updated database object representation.
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
 * Type map of all available tool input types for toolkit "NOTION".
 */
export type NOTION_TOOL_INPUTS = {
  ADD_MULTIPLE_PAGE_CONTENT: NOTION_ADD_MULTIPLE_PAGE_CONTENT_INPUT
  ADD_PAGE_CONTENT: NOTION_ADD_PAGE_CONTENT_INPUT
  APPEND_BLOCK_CHILDREN: NOTION_APPEND_BLOCK_CHILDREN_INPUT
  ARCHIVE_NOTION_PAGE: NOTION_ARCHIVE_NOTION_PAGE_INPUT
  CREATE_COMMENT: NOTION_CREATE_COMMENT_INPUT
  CREATE_DATABASE: NOTION_CREATE_DATABASE_INPUT
  CREATE_NOTION_PAGE: NOTION_CREATE_NOTION_PAGE_INPUT
  DELETE_BLOCK: NOTION_DELETE_BLOCK_INPUT
  DUPLICATE_PAGE: NOTION_DUPLICATE_PAGE_INPUT
  FETCH_BLOCK_CONTENTS: NOTION_FETCH_BLOCK_CONTENTS_INPUT
  FETCH_BLOCK_METADATA: NOTION_FETCH_BLOCK_METADATA_INPUT
  FETCH_COMMENTS: NOTION_FETCH_COMMENTS_INPUT
  FETCH_DATA: NOTION_FETCH_DATA_INPUT
  FETCH_DATABASE: NOTION_FETCH_DATABASE_INPUT
  FETCH_ROW: NOTION_FETCH_ROW_INPUT
  GET_ABOUT_ME: NOTION_GET_ABOUT_ME_INPUT
  GET_ABOUT_USER: NOTION_GET_ABOUT_USER_INPUT
  GET_PAGE_PROPERTY_ACTION: NOTION_GET_PAGE_PROPERTY_ACTION_INPUT
  INSERT_ROW_DATABASE: NOTION_INSERT_ROW_DATABASE_INPUT
  LIST_USERS: NOTION_LIST_USERS_INPUT
  QUERY_DATABASE: NOTION_QUERY_DATABASE_INPUT
  RETRIEVE_COMMENT: NOTION_RETRIEVE_COMMENT_INPUT
  RETRIEVE_DATABASE_PROPERTY: NOTION_RETRIEVE_DATABASE_PROPERTY_INPUT
  SEARCH_NOTION_PAGE: NOTION_SEARCH_NOTION_PAGE_INPUT
  UPDATE_BLOCK: NOTION_UPDATE_BLOCK_INPUT
  UPDATE_PAGE: NOTION_UPDATE_PAGE_INPUT
  UPDATE_ROW_DATABASE: NOTION_UPDATE_ROW_DATABASE_INPUT
  UPDATE_SCHEMA_DATABASE: NOTION_UPDATE_SCHEMA_DATABASE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NOTION".
 */
export type NOTION_TOOL_OUTPUTS = {
  ADD_MULTIPLE_PAGE_CONTENT: NOTION_ADD_MULTIPLE_PAGE_CONTENT_OUTPUT
  ADD_PAGE_CONTENT: NOTION_ADD_PAGE_CONTENT_OUTPUT
  APPEND_BLOCK_CHILDREN: NOTION_APPEND_BLOCK_CHILDREN_OUTPUT
  ARCHIVE_NOTION_PAGE: NOTION_ARCHIVE_NOTION_PAGE_OUTPUT
  CREATE_COMMENT: NOTION_CREATE_COMMENT_OUTPUT
  CREATE_DATABASE: NOTION_CREATE_DATABASE_OUTPUT
  CREATE_NOTION_PAGE: NOTION_CREATE_NOTION_PAGE_OUTPUT
  DELETE_BLOCK: NOTION_DELETE_BLOCK_OUTPUT
  DUPLICATE_PAGE: NOTION_DUPLICATE_PAGE_OUTPUT
  FETCH_BLOCK_CONTENTS: NOTION_FETCH_BLOCK_CONTENTS_OUTPUT
  FETCH_BLOCK_METADATA: NOTION_FETCH_BLOCK_METADATA_OUTPUT
  FETCH_COMMENTS: NOTION_FETCH_COMMENTS_OUTPUT
  FETCH_DATA: NOTION_FETCH_DATA_OUTPUT
  FETCH_DATABASE: NOTION_FETCH_DATABASE_OUTPUT
  FETCH_ROW: NOTION_FETCH_ROW_OUTPUT
  GET_ABOUT_ME: NOTION_GET_ABOUT_ME_OUTPUT
  GET_ABOUT_USER: NOTION_GET_ABOUT_USER_OUTPUT
  GET_PAGE_PROPERTY_ACTION: NOTION_GET_PAGE_PROPERTY_ACTION_OUTPUT
  INSERT_ROW_DATABASE: NOTION_INSERT_ROW_DATABASE_OUTPUT
  LIST_USERS: NOTION_LIST_USERS_OUTPUT
  QUERY_DATABASE: NOTION_QUERY_DATABASE_OUTPUT
  RETRIEVE_COMMENT: NOTION_RETRIEVE_COMMENT_OUTPUT
  RETRIEVE_DATABASE_PROPERTY: NOTION_RETRIEVE_DATABASE_PROPERTY_OUTPUT
  SEARCH_NOTION_PAGE: NOTION_SEARCH_NOTION_PAGE_OUTPUT
  UPDATE_BLOCK: NOTION_UPDATE_BLOCK_OUTPUT
  UPDATE_PAGE: NOTION_UPDATE_PAGE_OUTPUT
  UPDATE_ROW_DATABASE: NOTION_UPDATE_ROW_DATABASE_OUTPUT
  UPDATE_SCHEMA_DATABASE: NOTION_UPDATE_SCHEMA_DATABASE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of NOTION's ALL_PAGE_EVENTS_TRIGGER trigger payload.
 */
type NOTION_ALL_PAGE_EVENTS_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of page event: page_added or page_updated
   */
  event_type?: string;
  /**
   * Page
   * @description The Notion page object
   */
  page?: {
      [key: string]: unknown;
  };
};

/**
 * Type of NOTION's COMMENTS_ADDED_TRIGGER trigger payload.
 */
type NOTION_COMMENTS_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Comment
   * @description The Notion comment object that was added
   */
  comment?: {
      [key: string]: unknown;
  };
  /**
   * Event Type
   * @description Type of Notion comment event
   * @default comment_added
   */
  event_type: string;
};

/**
 * Type of NOTION's PAGE_ADDED_TO_DATABASE trigger payload.
 */
type NOTION_PAGE_ADDED_TO_DATABASE_PAYLOAD = {
  /**
   * Event Type
   * @description Type of Notion page event
   * @default page_added
   */
  event_type: string;
  /**
   * Page
   * @description The Notion page that was added
   */
  page?: {
      [key: string]: unknown;
  };
};

/**
 * Type of NOTION's PAGE_ADDED_TRIGGER trigger payload.
 */
type NOTION_PAGE_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Block
   * @description The Notion block that was added
   */
  block?: {
      [key: string]: unknown;
  };
  /**
   * Event Type
   * @description Type of Notion block event
   * @default block_added
   */
  event_type: string;
};

/**
 * Type of NOTION's PAGE_UPDATED_TRIGGER trigger payload.
 */
type NOTION_PAGE_UPDATED_TRIGGER_PAYLOAD = {
  /**
   * Block
   * @description The Notion block that was updated
   */
  block?: {
      [key: string]: unknown;
  };
  /**
   * Event Type
   * @description Type of Notion block event
   * @default block_updated
   */
  event_type: string;
};

/**
 * Map of Composio's NOTION toolkit.
 */
export const NOTION = {
  slug: "notion",
  tools: {
    /**
     * Efficiently adds multiple standard content blocks to a notion page in a single api call with automatic markdown parsing. the 'content' field in notionrichtext blocks now automatically detects and parses markdown formatting including headers (# ## ###), bold (**text**), italic (*text*), strikethrough (~~text~~), inline code (`code`), links ([text](url)), and more. ideal for bulk content creation, ai agents, and replacing multiple individual add page content calls. supports automatic text formatting, content splitting, and up to 100 blocks per request.
     */
    ADD_MULTIPLE_PAGE_CONTENT: "NOTION_ADD_MULTIPLE_PAGE_CONTENT",
    /**
     * Deprecated: appends a single content block to a notion page or a parent block (must be page, toggle, to-do, bulleted/numbered list, callout, or quote); invoke repeatedly to add multiple blocks.
     */
    ADD_PAGE_CONTENT: "NOTION_ADD_PAGE_CONTENT",
    /**
     * Appends complex blocks with full notion block structure to a parent block or page. use for advanced scenarios requiring precise control: code blocks, tables, embeds, nested children within blocks, or when working with pre-built notion block objects. requires full notion api block schema - use add multiple page content for simpler content creation.
     */
    APPEND_BLOCK_CHILDREN: "NOTION_APPEND_BLOCK_CHILDREN",
    /**
     * Archives (moves to trash) or unarchives (restores from trash) a specified notion page.
     */
    ARCHIVE_NOTION_PAGE: "NOTION_ARCHIVE_NOTION_PAGE",
    /**
     * Adds a comment to a notion page (via `parent page id`) or to an existing discussion thread (via `discussion id`); cannot create new discussion threads on specific blocks (inline comments).
     */
    CREATE_COMMENT: "NOTION_CREATE_COMMENT",
    /**
     * Creates a new notion database as a subpage under a specified parent page with a defined properties schema; use this action exclusively for creating new databases.
     */
    CREATE_DATABASE: "NOTION_CREATE_DATABASE",
    /**
     * Creates a new empty page in a notion workspace.
     */
    CREATE_NOTION_PAGE: "NOTION_CREATE_NOTION_PAGE",
    /**
     * Archives a notion block, page, or database using its id, which sets its 'archived' property to true (like moving to "trash" in the ui) and allows it to be restored later.
     */
    DELETE_BLOCK: "NOTION_DELETE_BLOCK",
    /**
     * Duplicates a notion page, including all its content, properties, and nested blocks, under a specified parent page or workspace.
     */
    DUPLICATE_PAGE: "NOTION_DUPLICATE_PAGE",
    /**
     * Retrieves a paginated list of direct, first-level child block objects along with contents for a given parent notion block or page id; use block ids from the response for subsequent calls to access deeply nested content.
     */
    FETCH_BLOCK_CONTENTS: "NOTION_FETCH_BLOCK_CONTENTS",
    /**
     * Fetches metadata for a notion block (or page, as pages are blocks) using its valid uuid; if the block has children, use fetch block contents to fetch their contents.
     */
    FETCH_BLOCK_METADATA: "NOTION_FETCH_BLOCK_METADATA",
    /**
     * Fetches unresolved comments for a specified notion block or page id.
     */
    FETCH_COMMENTS: "NOTION_FETCH_COMMENTS",
    /**
     * Fetches notion items (pages and/or databases) from the notion workspace, use this to get minimal data about the items in the workspace with a query or list all items in the workspace with minimal data
     */
    FETCH_DATA: "NOTION_FETCH_DATA",
    /**
     * Fetches a notion database's structural metadata (properties, title, etc.) via its `database id`, not the data entries; `database id` must reference an existing database.
     */
    FETCH_DATABASE: "NOTION_FETCH_DATABASE",
    /**
     * Retrieves a notion database row's properties and metadata; use fetch block contents for page content blocks.
     */
    FETCH_ROW: "NOTION_FETCH_ROW",
    /**
     * Retrieves the user object for the bot associated with the current notion integration token, typically to obtain the bot's user id for other api operations.
     */
    GET_ABOUT_ME: "NOTION_GET_ABOUT_ME",
    /**
     * Retrieves detailed information about a specific notion user, such as their name, avatar, and email, based on their unique user id.
     */
    GET_ABOUT_USER: "NOTION_GET_ABOUT_USER",
    /**
     * Call this to get a specific property from a notion page when you have a valid `page id` and `property id`; handles pagination for properties returning multiple items.
     */
    GET_PAGE_PROPERTY_ACTION: "NOTION_GET_PAGE_PROPERTY_ACTION",
    /**
     * Creates a new page (row) in a specified notion database.
     */
    INSERT_ROW_DATABASE: "NOTION_INSERT_ROW_DATABASE",
    /**
     * Retrieves a paginated list of users (excluding guests) from the notion workspace; the number of users returned per page may be less than the requested `page size`.
     */
    LIST_USERS: "NOTION_LIST_USERS",
    /**
     * Queries a notion database for pages (rows), where rows are pages and columns are properties; ensure sort property names correspond to existing database properties.
     */
    QUERY_DATABASE: "NOTION_QUERY_DATABASE",
    /**
     * Tool to retrieve a specific comment by its id. use when you have a comment id and need to fetch its details.
     */
    RETRIEVE_COMMENT: "NOTION_RETRIEVE_COMMENT",
    /**
     * Tool to retrieve a specific property object of a notion database. use when you need to get details about a single database column/property.
     */
    RETRIEVE_DATABASE_PROPERTY: "NOTION_RETRIEVE_DATABASE_PROPERTY",
    /**
     * Searches notion pages and databases by title; an empty query lists all accessible items, useful for discovering ids or as a fallback when a specific query yields no results.
     */
    SEARCH_NOTION_PAGE: "NOTION_SEARCH_NOTION_PAGE",
    /**
     * Updates an existing notion block's textual content or type-specific properties (e.g., 'checked' status, 'color'), using its `block id` and the specified `block type`.
     */
    UPDATE_BLOCK: "NOTION_UPDATE_BLOCK",
    /**
     * Tool to update the properties, icon, cover, or archive status of a page. use when you need to modify existing page attributes.
     */
    UPDATE_PAGE: "NOTION_UPDATE_PAGE",
    /**
     * Updates or archives an existing notion database row (page) using its `row id`, allowing modification of its icon, cover, and/or properties; ensure the target page is accessible and property details (names/ids and values) align with the database schema and specified formats.
     */
    UPDATE_ROW_DATABASE: "NOTION_UPDATE_ROW_DATABASE",
    /**
     * Updates an existing notion database's title, description, and/or properties; at least one of these attributes must be provided to effect a change.
     */
    UPDATE_SCHEMA_DATABASE: "NOTION_UPDATE_SCHEMA_DATABASE",
  },
  triggerTypes: {
    /**
     * Triggers when any Notion page is created or updated across the workspace.
     */
    ALL_PAGE_EVENTS_TRIGGER: "NOTION_ALL_PAGE_EVENTS_TRIGGER",
    /**
     * Triggers when a new comment is added to a specified Notion block or page.
     */
    COMMENTS_ADDED_TRIGGER: "NOTION_COMMENTS_ADDED_TRIGGER",
    /**
     * Triggers when a new page is added to a Notion database.
     */
    PAGE_ADDED_TO_DATABASE: "NOTION_PAGE_ADDED_TO_DATABASE",
    /**
     * Fires when a new subpage (a `child_page` type block) is added under a specified parent Notion page.
     */
    PAGE_ADDED_TRIGGER: "NOTION_PAGE_ADDED_TRIGGER",
    /**
     * Triggers when any block within a specified Notion page is updated.
     */
    PAGE_UPDATED_TRIGGER: "NOTION_PAGE_UPDATED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "NOTION".
 */
export type NOTION_TRIGGER_PAYLOADS = {
  ALL_PAGE_EVENTS_TRIGGER: NOTION_ALL_PAGE_EVENTS_TRIGGER_PAYLOAD
  COMMENTS_ADDED_TRIGGER: NOTION_COMMENTS_ADDED_TRIGGER_PAYLOAD
  PAGE_ADDED_TO_DATABASE: NOTION_PAGE_ADDED_TO_DATABASE_PAYLOAD
  PAGE_ADDED_TRIGGER: NOTION_PAGE_ADDED_TRIGGER_PAYLOAD
  PAGE_UPDATED_TRIGGER: NOTION_PAGE_UPDATED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "NOTION".
 */
export type NOTION_TRIGGER_EVENTS = {
  ALL_PAGE_EVENTS_TRIGGER: TriggerEvent<NOTION_ALL_PAGE_EVENTS_TRIGGER_PAYLOAD>
  COMMENTS_ADDED_TRIGGER: TriggerEvent<NOTION_COMMENTS_ADDED_TRIGGER_PAYLOAD>
  PAGE_ADDED_TO_DATABASE: TriggerEvent<NOTION_PAGE_ADDED_TO_DATABASE_PAYLOAD>
  PAGE_ADDED_TRIGGER: TriggerEvent<NOTION_PAGE_ADDED_TRIGGER_PAYLOAD>
  PAGE_UPDATED_TRIGGER: TriggerEvent<NOTION_PAGE_UPDATED_TRIGGER_PAYLOAD>
}
