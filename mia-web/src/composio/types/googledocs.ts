import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_COPY_DOCUMENT tool input.
 */
type GOOGLEDOCS_COPY_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description The ID of the Google Document to be copied.
   */
  document_id?: string;
  /**
   * Title
   * @description The title for the new copied document. If not provided, the title will be 'Copy of [original document's title]'.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_COPY_DOCUMENT tool output.
 */
type GOOGLEDOCS_COPY_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the newly created copied document.
       */
      documentId: string;
      /**
       * Title
       * @description The title of the newly created copied document.
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_DOCUMENT tool input.
 */
type GOOGLEDOCS_CREATE_DOCUMENT_INPUT = {
  /**
   * Text
   * @description Initial text content to insert at the beginning of the new document.
   */
  text?: string;
  /**
   * Title
   * @description Title for the new document, used as its filename in Google Drive.
   */
  title?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_DOCUMENT tool output.
 */
type GOOGLEDOCS_CREATE_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description Unique ID of the newly created document, required for subsequent operations.
       * @default null
       */
      document_id: string | null;
      /**
       * Response Data
       * @description Detailed API response metadata about the created document (e.g., title, revision ID), excluding the document's body content.
       * @default null
       */
      response_data: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN tool input.
 */
type GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN_INPUT = {
  /**
   * Markdown Text
   * @description The initial content for the document, formatted as Markdown. Supports various Markdown elements including headings, lists (nested lists are not supported), tables, images (via publicly accessible URLs), blockquotes, code blocks, and text formatting (bold, italic, etc.). If an empty string is provided, the document will be created with only the title.
   */
  markdown_text?: string;
  /**
   * Title
   * @description The title for the new Google Docs document.
   */
  title?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN tool output.
 */
type GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The unique identifier of the newly created Google Docs document.
       * @default null
       */
      document_id: string | null;
      /**
       * Request Data
       * @description Google Docs API request objects generated from `markdown_text` for `batchUpdate`; null or empty if `markdown_text` was not provided or empty.
       * @default null
       */
      request_data: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Response Data
       * @description JSON response from Google Docs API after initial document creation with title, before Markdown content is applied.
       * @default null
       */
      response_data: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_FOOTER tool input.
 */
type GOOGLEDOCS_CREATE_FOOTER_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to create the footer in.
   */
  document_id?: string;
  /**
   * Location
   * @description The location of the SectionBreak immediately preceding the section whose SectionStyle this footer should belong to. If this is unset or refers to the first section break in the document, the footer applies to the document style.
   * @default null
   */
  section_break_location: {
      /**
       * Index
       * @description The zero-based index, in UTF-16 code units, relative to the beginning of the segment.
       * @default null
       */
      index: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Tab Id
       * @description The tab that the location is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tabId: string | null;
  } | null;
  /**
   * Type
   * @description The type of footer to create.
   * @enum {string}
   */
  type?: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT";
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_FOOTER tool output.
 */
type GOOGLEDOCS_CREATE_FOOTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document the footer was created in.
       */
      document_id: string;
      /**
       * Footer Id
       * @description The ID of the created footer.
       */
      footer_id: string;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_FOOTNOTE tool input.
 */
type GOOGLEDOCS_CREATE_FOOTNOTE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to create the footnote in.
   */
  documentId?: string;
  /**
   * EndOfSegmentLocation
   * @description Inserts the footnote reference at the end of the document body. The segmentId within this EndOfSegmentLocation object must be empty.
   * @default null
   */
  endOfSegmentLocation: {
      /**
       * Segment Id
       * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Tab Id
       * @description The tab that the location is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tabId: string | null;
  } | null;
  /**
   * Location
   * @description Inserts the footnote reference at a specific index in the document. The segmentId within this Location object must be empty as footnotes can only be inserted in the document body.
   * @default null
   */
  location: {
      /**
       * Index
       * @description The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
       * @default null
       */
      index: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Tab Id
       * @description The tab that the location is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tabId: string | null;
  } | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_FOOTNOTE tool output.
 */
type GOOGLEDOCS_CREATE_FOOTNOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document where the footnote was created.
       */
      documentId: string;
      /**
       * Footnote Id
       * @description The ID of the newly created footnote.
       */
      footnoteId: string;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_HEADER tool input.
 */
type GOOGLEDOCS_CREATE_HEADER_INPUT = {
  /**
   * Create Header
   * @description The details of the header to create.
   */
  createHeader?: {
      /**
       * Location
       * @description The location of the SectionBreak which begins the section this header should belong to.
       * @default null
       */
      sectionBreakLocation: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units.
           * @default null
           */
          index: number | null;
          /**
           * Segment Id
           * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Tab Id
           * @description The tab that the location is in. When omitted, the request is applied to the first tab.
           * @default null
           */
          tabId: string | null;
      } | null;
      /**
       * Type
       * @description The type of header to create.
       * @enum {string}
       */
      type: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT";
  };
  /**
   * Document Id
   * @description The ID of the document to create the header in.
   */
  documentId?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_HEADER tool output.
 */
type GOOGLEDOCS_CREATE_HEADER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_NAMED_RANGE tool input.
 */
type GOOGLEDOCS_CREATE_NAMED_RANGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document where the named range will be created.
   */
  documentId?: string;
  /**
   * Name
   * @description The name for the new named range. Must be 1-256 characters.
   */
  name?: string;
  /**
   * Range End Index
   * @description The zero-based end index of the range.
   */
  rangeEndIndex?: number;
  /**
   * Range Segment Id
   * @description Optional. The ID of the header, footer, or footnote. Empty for document body.
   * @default null
   */
  rangeSegmentId: string | null;
  /**
   * Range Start Index
   * @description The zero-based start index of the range.
   */
  rangeStartIndex?: number;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_NAMED_RANGE tool output.
 */
type GOOGLEDOCS_CREATE_NAMED_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Named Range Id
       * @description The ID of the created named range.
       */
      namedRangeId: string;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS tool input.
 */
type GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS_INPUT = {
  /** Create Paragraph Bullets */
  createParagraphBullets?: {
      /**
       * Bullet Preset
       * @description The kinds of bullet glyphs to be used.
       * @enum {string}
       */
      bulletPreset: "BULLET_GLYPH_PRESET_UNSPECIFIED" | "BULLET_DISC_CIRCLE_SQUARE" | "BULLET_DIAMONDX_ARROW3D_SQUARE" | "BULLET_CHECKBOX" | "BULLET_ARROW_DIAMOND_DISC" | "BULLET_STAR_CIRCLE_SQUARE" | "BULLET_ARROW3D_CIRCLE_SQUARE" | "BULLET_LEFTTRIANGLE_DIAMOND_DISC" | "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE" | "BULLET_DIAMOND_CIRCLE_SQUARE" | "NUMBERED_DECIMAL_ALPHA_ROMAN" | "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS" | "NUMBERED_DECIMAL_NESTED" | "NUMBERED_UPPERALPHA_ALPHA_ROMAN" | "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL" | "NUMBERED_ZERODECIMAL_ALPHA_ROMAN";
      /**
       * Range
       * @description The range to apply the bullet preset to.
       */
      range: {
          /**
           * End Index
           * @description The zero-based end index of the range, exclusive.
           */
          endIndex: number;
          /**
           * Segment Id
           * @description The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Start Index
           * @description The zero-based start index of the range, inclusive.
           */
          startIndex: number;
      };
  };
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS tool output.
 */
type GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the bullets were added to.
       */
      documentId: string;
      /**
       * Replies
       * @description The replies to the request. For this action, it should contain one reply.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_CONTENT_RANGE tool input.
 */
type GOOGLEDOCS_DELETE_CONTENT_RANGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document from which to delete content. This ID can be found in the URL of the Google Doc.
   */
  document_id?: string;
  /**
   * Range
   * @description The range of content to delete. Deleting text across paragraph boundaries may merge paragraphs and affect styles. Certain deletions can invalidate document structure (e.g., part of a surrogate pair, last newline of critical elements, incomplete deletion of tables/equations).
   */
  range?: {
      /**
       * End Index
       * @description The zero-based end index of the range, in UTF-16 code units, relative to the beginning of the segment.
       * @default null
       */
      endIndex: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer, or footnote the range is in. An empty segment ID or omitting this field signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Start Index
       * @description The zero-based start index of the range, in UTF-16 code units, relative to the beginning of the segment.
       * @default null
       */
      startIndex: number | null;
      /**
       * Tab Id
       * @description The ID of the tab the range is in. When omitted, the request is applied to the first tab. In a document with a single tab, if provided, it must match the singular tab's ID; if omitted, it applies to the singular tab. In a multi-tab document, if provided, it applies to the specified tab; if omitted, it applies to the first tab.
       * @default null
       */
      tabId: string | null;
  };
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_CONTENT_RANGE tool output.
 */
type GOOGLEDOCS_DELETE_CONTENT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the content was deleted from.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. For DeleteContentRange, this is typically empty or contains information about the operation's success.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_FOOTER tool input.
 */
type GOOGLEDOCS_DELETE_FOOTER_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to delete the footer from.
   */
  document_id?: string;
  /**
   * Footer Id
   * @description The ID of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section.
   */
  footer_id?: string;
  /**
   * Tab Id
   * @description The tab that contains the footer to delete. When omitted, the request is applied to the first tab.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_FOOTER tool output.
 */
type GOOGLEDOCS_DELETE_FOOTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document from which the footer was deleted.
       */
      document_id: string;
      /**
       * Reply
       * @description The response from the Google Docs API. Can be a dict or list of dicts.
       * @default null
       */
      reply: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_HEADER tool input.
 */
type GOOGLEDOCS_DELETE_HEADER_INPUT = {
  /**
   * Document Id
   * @description The ID of the document from which to delete the header.
   */
  document_id?: string;
  /**
   * Header Id
   * @description The ID of the header to delete. If this header is defined on `DocumentStyle`, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a `SectionStyle`, the reference to this header is removed and the header of that type is now continued from the previous section.
   */
  header_id?: string;
  /**
   * Tab Id
   * @description The tab containing the header to delete. When omitted, the request is applied to the first tab.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_HEADER tool output.
 */
type GOOGLEDOCS_DELETE_HEADER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document from which the header was deleted.
       */
      document_id: string;
      /**
       * Reply
       * @description Reply from Google Docs API after deleting the header.
       * @default null
       */
      reply: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_NAMED_RANGE tool input.
 */
type GOOGLEDOCS_DELETE_NAMED_RANGE_INPUT = {
  /**
   * Delete Named Range
   * @description Specifies the named range to delete.
   */
  deleteNamedRange?: {
      /**
       * Name
       * @description The name of the range(s) to delete. All named ranges with the given name will be deleted.
       * @default null
       */
      name: string | null;
      /**
       * Named Range Id
       * @description The ID of the named range to delete.
       * @default null
       */
      namedRangeId: string | null;
      /**
       * TabsCriteria
       * @description Optional. The criteria used to specify which tab(s) the range deletion should occur in. When omitted, the range deletion is applied to all tabs.
       * @default null
       */
      tabsCriteria: {
          /**
           * Tab Ids
           * @description The list of tab IDs in which the request executes.
           */
          tabIds: string[];
      } | null;
  };
  /**
   * Document Id
   * @description The ID of the document.
   */
  document_id?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_NAMED_RANGE tool output.
 */
type GOOGLEDOCS_DELETE_NAMED_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document to which the changes were applied.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies. For a successful DeleteNamedRange, this might be an empty object or have minimal info.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS tool input.
 */
type GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Range
   * @description The range of the document from which to delete paragraph bullets. The range is applied to the document body by default. To specify a different segment (e.g. header, footer), include segment_id in the range object.
   */
  range?: {
      /**
       * End Index
       * @description The zero-based end index of the range, in UTF-16 code units, relative to the start of the segment.
       * @default null
       */
      endIndex: number | null;
      /**
       * Segment Id
       * @description The ID of the header, footer, or footnote the range is in. An empty segment ID signifies the document's body.
       * @default null
       */
      segmentId: string | null;
      /**
       * Start Index
       * @description The zero-based start index of the range, in UTF-16 code units, relative to the start of the segment.
       * @default null
       */
      startIndex: number | null;
      /**
       * Tab Id
       * @description The ID of the tab the range is in. If omitted, it applies to the first tab or the singular tab in a single-tab document.
       * @default null
       */
      tabId: string | null;
  };
  /**
   * Tab Id
   * @description The ID of the tab the range is in. If omitted, it applies to the first tab or the singular tab in a single-tab document.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS tool output.
 */
type GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the bullets were deleted from.
       * @default null
       */
      document_id: string | null;
      /**
       * Replies
       * @description A list of replies from the Google Docs API, one for each request in the batch. For DeleteParagraphBullets, this will typically be an empty object if successful.
       * @default null
       */
      replies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Write Control
       * @description Provides control over how write requests are executed.
       * @default null
       */
      write_control: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_TABLE tool input.
 */
type GOOGLEDOCS_DELETE_TABLE_INPUT = {
  /**
   * Document Id
   * @description The ID of the Google Document from which the table will be deleted.
   */
  document_id?: string;
  /**
   * Segment Id
   * @description The ID of the segment (e.g., header, footer) containing the table. If omitted or empty, the table is assumed to be in the main document body.
   * @default null
   */
  segment_id: string | null;
  /**
   * Tab Id
   * @description The ID of the tab containing the table, if the document uses tabs. If omitted, the action applies to the first tab or the only tab.
   * @default null
   */
  tab_id: string | null;
  /**
   * Table End Index
   * @description The end index (UTF-16 code unit) of the table's range to be deleted.
   */
  table_end_index?: number;
  /**
   * Table Start Index
   * @description The start index (UTF-16 code unit) of the table's range to be deleted.
   */
  table_start_index?: number;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_TABLE tool output.
 */
type GOOGLEDOCS_DELETE_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document where the table was deleted.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies corresponding to each request in the batch update. For a successful deleteContentRange, the reply is typically empty.
       */
      replies: {
          [key: string]: unknown;
      }[];
      /**
       * Write Control
       * @description The write control that was applied to the request.
       * @default null
       */
      writeControl: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_TABLE_COLUMN tool input.
 */
type GOOGLEDOCS_DELETE_TABLE_COLUMN_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to delete the table column from.
   */
  document_id?: string;
  /**
   * Requests
   * @description A list of requests to be applied to the document.
   */
  requests?: {
      /** Delete Table Column */
      deleteTableColumn: {
          /**
           * Table Cell Location
           * @description The reference table cell location from which the column will be deleted.
           */
          tableCellLocation: {
              /**
               * Column Index
               * @description The zero-based column index. For example, the second column in the table has a column index of 1.
               */
              columnIndex: number;
              /**
               * Row Index
               * @description The zero-based row index. For example, the second row in the table has a row index of 1.
               */
              rowIndex: number;
              /**
               * Table Start Location
               * @description The location where the table starts in the document.
               */
              tableStartLocation: {
                  /**
                   * Index
                   * @description The zero-based index, in UTF-16 code units.
                   * @default null
                   */
                  index: number | null;
                  /**
                   * Segment Id
                   * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
                   * @default null
                   */
                  segmentId: string | null;
                  /**
                   * Tab Id
                   * @description The tab that the location is in. When omitted, the request is applied to the first tab.
                   * @default null
                   */
                  tabId: string | null;
              };
          };
      };
  }[];
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_TABLE_COLUMN tool output.
 */
type GOOGLEDOCS_DELETE_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document.
       * @default null
       */
      document_id: string | null;
      /**
       * Replies
       * @description The replies to the requests. This field is empty if the requests were successful.
       * @default null
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_TABLE_ROW tool input.
 */
type GOOGLEDOCS_DELETE_TABLE_ROW_INPUT = {
  /**
   * Document Id
   * @description The ID of the document.
   */
  documentId?: string;
  /**
   * Table Cell Location
   * @description The reference table cell location from which the row will be deleted.
   */
  tableCellLocation?: {
      /**
       * Column Index
       * @description The zero-based column index. For example, the second column in the table has a column index of 1.
       */
      columnIndex: number;
      /**
       * Row Index
       * @description The zero-based row index. For example, the second row in the table has a row index of 1.
       */
      rowIndex: number;
      /**
       * Table Start Location
       * @description The location where the table starts in the document.
       */
      tableStartLocation: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
           * @default null
           */
          index: number | null;
          /**
           * Segment Id
           * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Tab Id
           * @description The tab that the location is in. When omitted, the request is applied to the first tab.
           * @default null
           */
          tabId: string | null;
      };
  };
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_DELETE_TABLE_ROW tool output.
 */
type GOOGLEDOCS_DELETE_TABLE_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Delete Table Row Reply
       * @description The specific reply content for the deleteTableRow operation.
       * @default null
       */
      deleteTableRowReply: {
          [key: string]: unknown;
      } | null;
      /**
       * Document Id
       * @description ID of the document the row was deleted from.
       */
      documentId: string;
      /**
       * Replies
       * @description Raw list of replies from the batchUpdate request.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET tool input.
 */
type GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET_INPUT = {
  /**
   * Spreadsheet Id
   * @description The ID of the Google Sheets spreadsheet from which to retrieve charts.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET tool output.
 */
type GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sheets
       * @description A list of sheets in the spreadsheet, containing their charts.
       * @default null
       */
      sheets: {
          /**
           * Charts
           * @description The charts embedded in this sheet.
           * @default null
           */
          charts: {
              /**
               * EmbeddedObjectBorder
               * @description The border of the chart.
               * @default null
               */
              border: {
                  /**
                   * ColorStyle
                   * @description The color of the border.
                   * @default null
                   */
                  colorStyle: {
                      /**
                       * Rgb Color
                       * @description RGB color.
                       * @default null
                       */
                      rgbColor: {
                          [key: string]: number;
                      } | null;
                      /**
                       * Theme Color
                       * @description Theme color.
                       * @default null
                       */
                      themeColor: string | null;
                  } | null;
              } | null;
              /**
               * Chart Id
               * @description The ID of the chart.
               * @default null
               */
              chartId: number | null;
              /**
               * EmbeddedObjectPosition
               * @description The position of the chart.
               * @default null
               */
              position: {
                  /**
                   * New Sheet
                   * @description If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.
                   * @default null
                   */
                  newSheet: boolean | null;
                  /**
                   * OverlayPosition
                   * @description The position at which the object is overlaid on top of a grid.
                   * @default null
                   */
                  overlayPosition: {
                      /**
                       * GridCoordinate
                       * @description The cell an object is anchored to.
                       * @default null
                       */
                      anchorCell: {
                          /**
                           * Column Index
                           * @description The column index of the coordinate.
                           * @default null
                           */
                          columnIndex: number | null;
                          /**
                           * Row Index
                           * @description The row index of the coordinate.
                           * @default null
                           */
                          rowIndex: number | null;
                          /**
                           * Sheet Id
                           * @description The sheet this coordinate is on.
                           * @default null
                           */
                          sheetId: number | null;
                      } | null;
                      /**
                       * Height Pixels
                       * @description The height of the object, in pixels.
                       * @default null
                       */
                      heightPixels: number | null;
                      /**
                       * Offset X Pixels
                       * @description The horizontal offset, in pixels, that the object is offset from the anchor cell.
                       * @default null
                       */
                      offsetXPixels: number | null;
                      /**
                       * Offset Y Pixels
                       * @description The vertical offset, in pixels, that the object is offset from the anchor cell.
                       * @default null
                       */
                      offsetYPixels: number | null;
                      /**
                       * Width Pixels
                       * @description The width of the object, in pixels.
                       * @default null
                       */
                      widthPixels: number | null;
                  } | null;
                  /**
                   * Sheet Id
                   * @description The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.
                   * @default null
                   */
                  sheetId: number | null;
              } | null;
              /**
               * ChartSpec
               * @description The specification of the chart.
               * @default null
               */
              spec: {
                  /**
                   * Alt Text
                   * @description The alternative text that describes the chart.
                   * @default null
                   */
                  altText: string | null;
                  /**
                   * ColorStyle
                   * @description The background color of the entire chart.
                   * @default null
                   */
                  backgroundColorStyle: {
                      /**
                       * Rgb Color
                       * @description RGB color.
                       * @default null
                       */
                      rgbColor: {
                          [key: string]: number;
                      } | null;
                      /**
                       * Theme Color
                       * @description Theme color.
                       * @default null
                       */
                      themeColor: string | null;
                  } | null;
                  /**
                   * BaseModel
                   * @description A basic chart specification.
                   * @default null
                   */
                  basicChart: Record<string, never> | null;
                  /**
                   * Font Name
                   * @description The name of the font to use by default for all chart text.
                   * @default null
                   */
                  fontName: string | null;
                  /**
                   * Maximized
                   * @description True to make a chart fill the entire space.
                   * @default null
                   */
                  maximized: boolean | null;
                  /**
                   * BaseModel
                   * @description A pie chart specification.
                   * @default null
                   */
                  pieChart: Record<string, never> | null;
                  /**
                   * Title
                   * @description The title of the chart.
                   * @default null
                   */
                  title: string | null;
                  /**
                   * TextFormat
                   * @description The title text format.
                   * @default null
                   */
                  titleTextFormat: {
                      /**
                       * Bold
                       * @description True if the text is bold.
                       * @default null
                       */
                      bold: boolean | null;
                      /**
                       * Font Family
                       * @description The font family.
                       * @default null
                       */
                      fontFamily: string | null;
                      /**
                       * Font Size
                       * @description The font size, in points.
                       * @default null
                       */
                      fontSize: number | null;
                      /**
                       * ColorStyle
                       * @description The foreground color of the text.
                       * @default null
                       */
                      foregroundColor: {
                          /**
                           * Rgb Color
                           * @description RGB color.
                           * @default null
                           */
                          rgbColor: {
                              [key: string]: number;
                          } | null;
                          /**
                           * Theme Color
                           * @description Theme color.
                           * @default null
                           */
                          themeColor: string | null;
                      } | null;
                      /**
                       * Italic
                       * @description True if the text is italic.
                       * @default null
                       */
                      italic: boolean | null;
                      /**
                       * Strikethrough
                       * @description True if the text has a strikethrough.
                       * @default null
                       */
                      strikethrough: boolean | null;
                      /**
                       * Underline
                       * @description True if the text is underlined.
                       * @default null
                       */
                      underline: boolean | null;
                  } | null;
                  /**
                   * TextPosition
                   * @description The title text position.
                   * @default null
                   */
                  titleTextPosition: {
                      /**
                       * Horizontal Alignment
                       * @description Horizontal alignment setting for the text.
                       * @default null
                       */
                      horizontalAlignment: string | null;
                  } | null;
              } | null;
          }[] | null;
          /**
           * SheetProperties
           * @description Properties of the sheet.
           * @default null
           */
          properties: {
              /**
               * Sheet Id
               * @description The ID of the sheet.
               * @default null
               */
              sheetId: number | null;
              /**
               * Title
               * @description The name of the sheet.
               * @default null
               */
              title: string | null;
          } | null;
      }[] | null;
      /**
       * Spreadsheet Id
       * @description The ID of the spreadsheet.
       * @default null
       */
      spreadsheetId: string | null;
      /**
       * Spreadsheet Url
       * @description The URL of the spreadsheet.
       * @default null
       */
      spreadsheetUrl: string | null;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_GET_DOCUMENT_BY_ID tool input.
 */
type GOOGLEDOCS_GET_DOCUMENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique identifier for the Google Document to be retrieved. This action specifically fetches an existing document and will not create a new one if the ID is not found.
   */
  id?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_GET_DOCUMENT_BY_ID tool output.
 */
type GOOGLEDOCS_GET_DOCUMENT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description A dictionary containing the full Google Document resource, including its content, properties, and metadata.
       * @default null
       */
      response_data: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_INLINE_IMAGE tool input.
 */
type GOOGLEDOCS_INSERT_INLINE_IMAGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /**
   * Location
   * @description The location in the document to insert the image.
   */
  location?: {
      /**
       * Index
       * @description The zero-based index within the segment where the image will be inserted. If not provided, the image is inserted at the end of the segment.
       * @default null
       */
      index: number | null;
      /**
       * Segment Id
       * @description The ID of the segment where the image will be inserted. If not provided, the image is inserted in the document body.
       * @default null
       */
      segmentId: string | null;
  };
  /**
   * ObjectSize
   * @description The size of the image. If not specified, the image is rendered at its intrinsic size.
   * @default null
   */
  objectSize: {
      /**
       * Dimension
       * @description The height of the image.
       * @default null
       */
      height: {
          /**
           * Magnitude
           * @description The magnitude of the size.
           * @default null
           */
          magnitude: number | null;
          /**
           * UnitEnum
           * @description The units for magnitude. Supported units: EMU, PT, PX.
           * @default null
           * @enum {string|null}
           */
          unit: "EMU" | "PT" | "PX" | null;
      } | null;
      /**
       * Dimension
       * @description The width of the image.
       * @default null
       */
      width: {
          /**
           * Magnitude
           * @description The magnitude of the size.
           * @default null
           */
          magnitude: number | null;
          /**
           * UnitEnum
           * @description The units for magnitude. Supported units: EMU, PT, PX.
           * @default null
           * @enum {string|null}
           */
          unit: "EMU" | "PT" | "PX" | null;
      } | null;
  } | null;
  /**
   * Uri
   * @description The URI of the image. Images must be less than 50MB, not exceed 25 megapixels, and be in PNG, JPEG, or GIF format. The URI can be at most 2 kB.
   */
  uri?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_INLINE_IMAGE tool output.
 */
type GOOGLEDOCS_INSERT_INLINE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      documentId: string;
      /**
       * Status
       * @description Indicates the status of the operation.
       * @default success
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_PAGE_BREAK tool input.
 */
type GOOGLEDOCS_INSERT_PAGE_BREAK_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /**
   * Insert Page Break
   * @description The details for the insertPageBreak request.
   */
  insertPageBreak?: {
      /**
       * EndOfSegmentLocation
       * @description Specifies that the page break should be inserted at the end of a segment (document body). Use this or location.
       * @default null
       */
      endOfSegmentLocation: {
          /**
           * Segment Id
           * @description The ID of the segment where the page break is to be inserted. For page breaks, this must be null or an empty string, indicating the end of the main document body.
           * @default null
           */
          segmentId: string | null;
      } | null;
      /**
       * Location
       * @description Specifies the location to insert the page break using a zero-based index. Use this or end_of_segment_location.
       * @default null
       */
      location: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units. The page break is inserted before this index.
           */
          index: number;
          /**
           * Segment Id
           * @description The ID of the segment where the page break is to be inserted. For page breaks, this should typically be null or empty, indicating the main document body, as page breaks are not allowed in headers, footers, or footnotes.
           * @default null
           */
          segmentId: string | null;
      } | null;
  };
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_PAGE_BREAK tool output.
 */
type GOOGLEDOCS_INSERT_PAGE_BREAK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies, one for each request made. For a single insert page break, this will contain one reply.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_TABLE_ACTION tool input.
 */
type GOOGLEDOCS_INSERT_TABLE_ACTION_INPUT = {
  /**
   * Columns
   * @description The number of columns in the table.
   */
  columns?: number;
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /**
   * Index
   * @description The zero-based index where the table will be inserted. If provided, 'location' will be used. If omitted and 'insertAtEndOfSegment' is false or omitted, 'endOfSegmentLocation' will be used for the document body.
   * @default null
   */
  index: number | null;
  /**
   * Insert At End Of Segment
   * @description If true, inserts the table at the end of the segment (document body, header, or footer specified by segment_id). If false or omitted, and 'index' is not provided, it defaults to inserting at the end of the document body. If 'index' is provided, this field is ignored.
   * @default null
   */
  insertAtEndOfSegment: boolean | null;
  /**
   * Rows
   * @description The number of rows in the table.
   */
  rows?: number;
  /**
   * Segment Id
   * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
   * @default null
   */
  segmentId: string | null;
  /**
   * Tab Id
   * @description The tab that the location is in. When omitted, the request is applied to the first tab.
   * @default null
   */
  tabId: string | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_TABLE_ACTION tool output.
 */
type GOOGLEDOCS_INSERT_TABLE_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that the table was inserted into.
       */
      documentId: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_TABLE_COLUMN tool input.
 */
type GOOGLEDOCS_INSERT_TABLE_COLUMN_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Requests
   * @description A list of requests to be applied to the document. For this action, it will contain one InsertTableColumnRequest.
   */
  requests?: {
      /** Insert Table Column */
      insertTableColumn: {
          /**
           * Insert Right
           * @description Whether to insert new column to the right of the reference cell location. True: insert to the right. False: insert to the left.
           * @default false
           */
          insertRight: boolean | null;
          /**
           * Table Cell Location
           * @description The reference table cell location from which columns will be inserted.
           */
          tableCellLocation: {
              /**
               * Column Index
               * @description The zero-based column index of the reference cell.
               */
              columnIndex: number;
              /**
               * Row Index
               * @description The zero-based row index of the reference cell.
               */
              rowIndex: number;
              /**
               * Location
               * @description The location where the table starts in the document.
               * @default null
               */
              tableStartLocation: {
                  /**
                   * Index
                   * @description The zero-based index, in UTF-16 code units, relative to the beginning of the segment.
                   * @default null
                   */
                  index: number | null;
                  /**
                   * Segment Id
                   * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
                   * @default null
                   */
                  segmentId: string | null;
                  /**
                   * Tab Id
                   * @description The tab that the location is in. When omitted, the request is applied to the first tab.
                   * @default null
                   */
                  tabId: string | null;
              } | null;
          };
      };
  }[];
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_TABLE_COLUMN tool output.
 */
type GOOGLEDOCS_INSERT_TABLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document to which the changes were applied (often present in the overall response).
       * @default null
       */
      documentId: string | null;
      /**
       * Replies
       * @description A list of replies to the batchUpdate request. Each reply corresponds to a request in the batch. For InsertTableColumn, individual replies are often empty.
       * @default null
       */
      replies: Record<string, never>[] | null;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_TEXT_ACTION tool input.
 */
type GOOGLEDOCS_INSERT_TEXT_ACTION_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to insert text into.
   */
  document_id?: string;
  /**
   * Insertion Index
   * @description The EOL character of the paragraph will be moved to the end of the inserted text. The index where the text will be inserted. The index is zero-based and refers to the UTF-16 code unit. For example, to insert text at the beginning of the document, use an index of 1 (to account for the first paragraph).
   */
  insertion_index?: number;
  /**
   * Text To Insert
   * @description The string of text to insert.
   */
  text_to_insert?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_INSERT_TEXT_ACTION tool output.
 */
type GOOGLEDOCS_INSERT_TEXT_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      document_id: string;
      /**
       * Status
       * @description Status of the insert operation.
       * @default Successfully inserted text.
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION tool input.
 */
type GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION_INPUT = {
  /**
   * Fields Mask
   * @description Field mask to specify which parts of the spreadsheet and chart resources to include. Example: '''sheets(properties(sheetId,title),charts(chartId,spec(title,altText)))'''
   * @default sheets(properties(sheetId,title),charts(chartId,spec(title,altText)))
   */
  fields_mask: string;
  /**
   * Spreadsheet Id
   * @description The ID of the Google Sheets spreadsheet.
   */
  spreadsheet_id?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION tool output.
 */
type GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Charts
       * @description A list of charts found in the spreadsheet.
       */
      charts?: {
          /**
           * Alt Text
           * @description The alternative text for the chart.
           * @default null
           */
          alt_text: string | null;
          /**
           * Chart Id
           * @description The ID of the chart.
           */
          chart_id: number;
          /**
           * Sheet Id
           * @description The ID of the sheet containing the chart.
           */
          sheet_id: number;
          /**
           * Sheet Title
           * @description The title of the sheet containing the chart.
           * @default null
           */
          sheet_title: string | null;
          /**
           * Title
           * @description The title of the chart.
           * @default null
           */
          title: string | null;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_REPLACE_ALL_TEXT tool input.
 */
type GOOGLEDOCS_REPLACE_ALL_TEXT_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Find Text
   * @description The text to search for in the document.
   */
  find_text?: string;
  /**
   * Match Case
   * @description Indicates whether the search should be case sensitive.
   */
  match_case?: boolean;
  /**
   * Replace Text
   * @description The text that will replace the matched text.
   */
  replace_text?: string;
  /**
   * Search By Regex
   * @description Optional. If True, the find_text is treated as a regular expression. Defaults to False.
   * @default false
   */
  search_by_regex: boolean | null;
  /**
   * Tab Ids
   * @description Optional. A list of specific tab IDs to perform the replacement on. If not provided, replacement occurs on all tabs.
   * @default null
   */
  tab_ids: string[] | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_REPLACE_ALL_TEXT tool output.
 */
type GOOGLEDOCS_REPLACE_ALL_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       * @default null
       */
      document_id: string | null;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. Each reply corresponds to one request in the batch.
       * @default null
       */
      replies: {
          [key: string]: unknown;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_REPLACE_IMAGE tool input.
 */
type GOOGLEDOCS_REPLACE_IMAGE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document containing the image to replace.
   */
  document_id?: string;
  /**
   * Replace Image
   * @description The details of the image replacement request.
   */
  replace_image?: {
      /**
       * Image Object Id
       * @description The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.
       */
      image_object_id: string;
      /**
       * ImageReplaceMethod
       * @description The replacement method. Defaults to CENTER_CROP if not specified.
       * @default CENTER_CROP
       * @enum {string|null}
       */
      image_replace_method: "CENTER_CROP" | "IMAGE_REPLACE_METHOD_UNSPECIFIED" | null;
      /**
       * Tab Id
       * @description The tab that the image to be replaced is in. When omitted, the request is applied to the first tab.
       * @default null
       */
      tab_id: string | null;
      /**
       * Uri
       * @description The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field.
       */
      uri: string;
  };
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_REPLACE_IMAGE tool output.
 */
type GOOGLEDOCS_REPLACE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document in which the image was replaced.
       */
      document_id: string;
      /**
       * Replies
       * @description A list of replies from the batchUpdate request. For a successful image replacement, this will typically be an empty list or contain a response related to the replaceImage request itself.
       */
      replies: {
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_SEARCH_DOCUMENTS tool input.
 */
type GOOGLEDOCS_SEARCH_DOCUMENTS_INPUT = {
  /**
   * Created After
   * @description Return documents created after this date. Use RFC 3339 format like '2024-01-01T00:00:00Z'.
   * @default null
   */
  created_after: string | null;
  /**
   * Include Trashed
   * @description Whether to include documents in trash. Defaults to False.
   * @default false
   */
  include_trashed: boolean | null;
  /**
   * Max Results
   * @description Maximum number of documents to return (1-1000). Defaults to 10.
   * @default 10
   */
  max_results: number | null;
  /**
   * Modified After
   * @description Return documents modified after this date. Use RFC 3339 format like '2024-01-01T00:00:00Z'.
   * @default null
   */
  modified_after: string | null;
  /**
   * Order By
   * @description Order results by field. Common options: 'modifiedTime desc', 'modifiedTime asc', 'name', 'createdTime desc'
   * @default modifiedTime desc
   */
  order_by: string | null;
  /**
   * Query
   * @description Search query to filter documents. Can search by name (name contains 'report'), full text content (fullText contains 'important'), or use complex queries with operators like 'and', 'or', 'not'. Leave empty to get all documents.
   * @default null
   */
  query: string | null;
  /**
   * Shared With Me
   * @description Whether to return only documents shared with the current user. Defaults to False.
   * @default false
   */
  shared_with_me: boolean | null;
  /**
   * Starred Only
   * @description Whether to return only starred documents. Defaults to False.
   * @default false
   */
  starred_only: boolean | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_SEARCH_DOCUMENTS tool output.
 */
type GOOGLEDOCS_SEARCH_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of Google Documents matching the search criteria. Each document contains id, name, modifiedTime, createdTime, webViewLink, and other metadata.
       */
      documents: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if more results are available.
       * @default null
       */
      next_page_token: string | null;
      /**
       * Total Found
       * @description Total number of documents found matching the search criteria.
       */
      total_found: number;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_UNMERGE_TABLE_CELLS tool input.
 */
type GOOGLEDOCS_UNMERGE_TABLE_CELLS_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to unmerge table cells in.
   */
  document_id?: string;
  /**
   * Table Range
   * @description The table range specifying which cells of the table to unmerge.
   */
  tableRange?: {
      /**
       * Column Span
       * @description The column span of the table range.
       */
      columnSpan: number;
      /**
       * Row Span
       * @description The row span of the table range.
       */
      rowSpan: number;
      /**
       * Table Cell Location
       * @description The cell location where the table range starts.
       */
      tableCellLocation: {
          /**
           * Column Index
           * @description The zero-based column index. For example, the second column in the table has a column index of 1.
           */
          columnIndex: number;
          /**
           * Row Index
           * @description The zero-based row index. For example, the second row in the table has a row index of 1.
           */
          rowIndex: number;
          /**
           * Location
           * @description The location where the table starts in the document.
           * @default null
           */
          tableStartLocation: {
              /**
               * Index
               * @description The zero-based index, in UTF-16 code units.
               * @default null
               */
              index: number | null;
              /**
               * Segment Id
               * @description The ID of the header, footer or footnote the table is in. An empty segment ID signifies the document's body.
               * @default null
               */
              segmentId: string | null;
              /**
               * Tab Id
               * @description The tab that the location is in. When omitted, the request is applied to the first tab.
               * @default null
               */
              tabId: string | null;
          } | null;
      };
  };
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_UNMERGE_TABLE_CELLS tool output.
 */
type GOOGLEDOCS_UNMERGE_TABLE_CELLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document where table cells were unmerged.
       */
      documentId: string;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN tool input.
 */
type GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN_INPUT = {
  /**
   * Document Id
   * @description Identifier of the Google Docs document to update, found in the document's URL.
   */
  document_id?: string;
  /**
   * New Markdown Text
   * @description Markdown content that will replace the document's entire existing content. Supports standard Markdown features.
   */
  new_markdown_text?: string;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN tool output.
 */
type GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the raw response from the Google Docs API's `batchUpdate` endpoint. This can include details about the revisions made and the document's current state. Its structure is defined by the Google Docs API.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Document Id
   * @description The unique identifier of the Google Docs document that was successfully updated.
   * @default null
   */
  document_id: string | null;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_DOCUMENT_STYLE tool input.
 */
type GOOGLEDOCS_UPDATE_DOCUMENT_STYLE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  document_id?: string;
  /**
   * Document Style
   * @description The DocumentStyle object with the new style settings.
   */
  document_style?: {
      /**
       * Background
       * @description The background of the document. The background fill must be specified as a solid fill.
       * @default null
       */
      background: {
          [key: string]: unknown;
      } | null;
      /**
       * Default Footer Id
       * @description The ID of the default footer. If unset, the document inherits the default footer from the parent document. This property is read-only.
       * @default null
       */
      defaultFooterId: string | null;
      /**
       * Default Header Id
       * @description The ID of the default header. If unset, the document inherits the default header from the parent document. This property is read-only.
       * @default null
       */
      defaultHeaderId: string | null;
      /**
       * Even Page Footer Id
       * @description The ID of the footer for even pages. If unset, the document inherits the even page footer from the parent document. This property is read-only.
       * @default null
       */
      evenPageFooterId: string | null;
      /**
       * Even Page Header Id
       * @description The ID of the header for even pages. If unset, the document inherits the even page header from the parent document. This property is read-only.
       * @default null
       */
      evenPageHeaderId: string | null;
      /**
       * Margin Bottom
       * @description The bottom margin of the page.
       * @default null
       */
      marginBottom: {
          [key: string]: unknown;
      } | null;
      /**
       * Margin Left
       * @description The left margin of the page.
       * @default null
       */
      marginLeft: {
          [key: string]: unknown;
      } | null;
      /**
       * Margin Right
       * @description The right margin of the page.
       * @default null
       */
      marginRight: {
          [key: string]: unknown;
      } | null;
      /**
       * Margin Top
       * @description The top margin of the page.
       * @default null
       */
      marginTop: {
          [key: string]: unknown;
      } | null;
      /**
       * Odd Page Footer Id
       * @description The ID of the footer for odd pages. If unset, the document inherits the odd page footer from the parent document. This property is read-only.
       * @default null
       */
      oddPageFooterId: string | null;
      /**
       * Odd Page Header Id
       * @description The ID of the header for odd pages. If unset, the document inherits the odd page header from the parent document. This property is read-only.
       * @default null
       */
      oddPageHeaderId: string | null;
      /**
       * Page Number Start
       * @description The page number from which to start counting the number of pages.
       * @default null
       */
      pageNumberStart: number | null;
      /**
       * Page Size
       * @description The size of a page in the document.
       * @default null
       */
      pageSize: {
          [key: string]: unknown;
      } | null;
      /**
       * Use Even Page Header Footer
       * @description Indicates whether to use the even page header / footer, used in conjunction with use_first_page_header_footer.
       * @default null
       */
      useEvenPageHeaderFooter: boolean | null;
      /**
       * Use First Page Header Footer
       * @description Indicates whether to use the first page header / footer.
       * @default null
       */
      useFirstPageHeaderFooter: boolean | null;
  };
  /**
   * Fields
   * @description A comma-separated list of fields to update. Use '*' to update all fields in document_style. For example: "pageSize,marginTop,marginBottom".
   */
  fields?: string;
  /**
   * Tab Id
   * @description The ID of the tab to update the style for. If not provided, the first tab is used.
   * @default null
   */
  tab_id: string | null;
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_DOCUMENT_STYLE tool output.
 */
type GOOGLEDOCS_UPDATE_DOCUMENT_STYLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document that was updated.
       */
      document_id: string;
      /**
       * Reply Count
       * @description Number of replies in the batchUpdate response, should be 1 for this action.
       */
      reply_count: number;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT tool input.
 */
type GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT_INPUT = {
  /**
   * Document Id
   * @description The unique identifier of the Google Docs document to be updated.
   */
  document_id?: string;
  /**
   * Edit Docs
   * @description Requests conforming to the Google Docs API `batchUpdate` method, where each item specifies an operation. For full details and more request types, see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate.
   *     For example, to insert text at the beginning of the document:
   *     [
   *       {
   *         "insertText": {
   *           "text": "This is a new paragraph.\n",
   *           "location": {
   *             "index": 1
   *           }
   *         }
   *       }
   *     ]
   *
   *     To delete a paragraph by its index:
   *     [{
   *       "deleteContentRange": {
   *         "range": {
   *           "startIndex": 1,
   *           "endIndex": 20
   *         }
   *       }
   *     }]
   *
   *     To replace all text:
   *     [{
   *       "replaceAllText": {
   *         "containsText": {
   *           "text": "old text"
   *         },
   *         "replaceText": "new text"
   *       }
   *     }]
   */
  editDocs?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT tool output.
 */
type GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description The full response data from the Google Docs API `batchUpdate` request, containing details about the applied edits and the state of the document.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Document Id
   * @description The unique identifier of the Google Docs document that was updated.
   * @default null
   */
  document_id: string | null;
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
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE tool input.
 */
type GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE_INPUT = {
  /**
   * Document Id
   * @description The ID of the document to update.
   */
  documentId?: string;
  /** Update Table Row Style */
  updateTableRowStyle?: {
      /**
       * Fields
       * @description The fields that should be updated. At least one field must be specified. The root tableRowStyle is implied and should not be specified. A single "*" can be used as short-hand for listing every field. For example to update the minimum row height, set fields to "minRowHeight".
       */
      fields: string;
      /**
       * Row Indices
       * @description The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.
       * @default null
       */
      rowIndices: number[] | null;
      /**
       * Table Row Style
       * @description The styles to be set on the rows.
       */
      tableRowStyle: {
          /**
           * Dimension
           * @description The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this value in order to show all the content in the row's cells.
           * @default null
           */
          minRowHeight: {
              /**
               * Magnitude
               * @description The magnitude.
               * @default null
               */
              magnitude: number | null;
              /**
               * Unit
               * @description The units for magnitude.
               * @default null
               * @enum {string|null}
               */
              unit: "PT" | "UNIT_UNSPECIFIED" | null;
          } | null;
          /**
           * Prevent Overflow
           * @description Whether the row cannot overflow across page or column boundaries.
           * @default null
           */
          preventOverflow: boolean | null;
          /**
           * Table Header
           * @description Whether the row is a table header.
           * @default null
           */
          tableHeader: boolean | null;
      };
      /**
       * Table Start Location
       * @description The location where the table starts in the document.
       */
      tableStartLocation: {
          /**
           * Index
           * @description The zero-based index, in UTF-16 code units.
           * @default null
           */
          index: number | null;
          /**
           * Segment Id
           * @description The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
           * @default null
           */
          segmentId: string | null;
          /**
           * Tab Id
           * @description The tab that the location is in. When omitted, the request is applied to the first tab.
           * @default null
           */
          tabId: string | null;
      };
  };
};

/**
 * Type of GOOGLEDOCS's GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE tool output.
 */
type GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Id
       * @description The ID of the document.
       * @default null
       */
      documentId: string | null;
      /**
       * Reply
       * @description A map of responses to the batchUpdate request, keyed by request ID.
       * @default null
       */
      reply: {
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
 * Type map of all available tool input types for toolkit "GOOGLEDOCS".
 */
export type GOOGLEDOCS_TOOL_INPUTS = {
  COPY_DOCUMENT: GOOGLEDOCS_COPY_DOCUMENT_INPUT
  CREATE_DOCUMENT: GOOGLEDOCS_CREATE_DOCUMENT_INPUT
  CREATE_DOCUMENT_MARKDOWN: GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN_INPUT
  CREATE_FOOTER: GOOGLEDOCS_CREATE_FOOTER_INPUT
  CREATE_FOOTNOTE: GOOGLEDOCS_CREATE_FOOTNOTE_INPUT
  CREATE_HEADER: GOOGLEDOCS_CREATE_HEADER_INPUT
  CREATE_NAMED_RANGE: GOOGLEDOCS_CREATE_NAMED_RANGE_INPUT
  CREATE_PARAGRAPH_BULLETS: GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS_INPUT
  DELETE_CONTENT_RANGE: GOOGLEDOCS_DELETE_CONTENT_RANGE_INPUT
  DELETE_FOOTER: GOOGLEDOCS_DELETE_FOOTER_INPUT
  DELETE_HEADER: GOOGLEDOCS_DELETE_HEADER_INPUT
  DELETE_NAMED_RANGE: GOOGLEDOCS_DELETE_NAMED_RANGE_INPUT
  DELETE_PARAGRAPH_BULLETS: GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS_INPUT
  DELETE_TABLE: GOOGLEDOCS_DELETE_TABLE_INPUT
  DELETE_TABLE_COLUMN: GOOGLEDOCS_DELETE_TABLE_COLUMN_INPUT
  DELETE_TABLE_ROW: GOOGLEDOCS_DELETE_TABLE_ROW_INPUT
  GET_CHARTS_FROM_SPREADSHEET: GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET_INPUT
  GET_DOCUMENT_BY_ID: GOOGLEDOCS_GET_DOCUMENT_BY_ID_INPUT
  INSERT_INLINE_IMAGE: GOOGLEDOCS_INSERT_INLINE_IMAGE_INPUT
  INSERT_PAGE_BREAK: GOOGLEDOCS_INSERT_PAGE_BREAK_INPUT
  INSERT_TABLE_ACTION: GOOGLEDOCS_INSERT_TABLE_ACTION_INPUT
  INSERT_TABLE_COLUMN: GOOGLEDOCS_INSERT_TABLE_COLUMN_INPUT
  INSERT_TEXT_ACTION: GOOGLEDOCS_INSERT_TEXT_ACTION_INPUT
  LIST_SPREADSHEET_CHARTS_ACTION: GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION_INPUT
  REPLACE_ALL_TEXT: GOOGLEDOCS_REPLACE_ALL_TEXT_INPUT
  REPLACE_IMAGE: GOOGLEDOCS_REPLACE_IMAGE_INPUT
  SEARCH_DOCUMENTS: GOOGLEDOCS_SEARCH_DOCUMENTS_INPUT
  UNMERGE_TABLE_CELLS: GOOGLEDOCS_UNMERGE_TABLE_CELLS_INPUT
  UPDATE_DOCUMENT_MARKDOWN: GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN_INPUT
  UPDATE_DOCUMENT_STYLE: GOOGLEDOCS_UPDATE_DOCUMENT_STYLE_INPUT
  UPDATE_EXISTING_DOCUMENT: GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT_INPUT
  UPDATE_TABLE_ROW_STYLE: GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLEDOCS".
 */
export type GOOGLEDOCS_TOOL_OUTPUTS = {
  COPY_DOCUMENT: GOOGLEDOCS_COPY_DOCUMENT_OUTPUT
  CREATE_DOCUMENT: GOOGLEDOCS_CREATE_DOCUMENT_OUTPUT
  CREATE_DOCUMENT_MARKDOWN: GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN_OUTPUT
  CREATE_FOOTER: GOOGLEDOCS_CREATE_FOOTER_OUTPUT
  CREATE_FOOTNOTE: GOOGLEDOCS_CREATE_FOOTNOTE_OUTPUT
  CREATE_HEADER: GOOGLEDOCS_CREATE_HEADER_OUTPUT
  CREATE_NAMED_RANGE: GOOGLEDOCS_CREATE_NAMED_RANGE_OUTPUT
  CREATE_PARAGRAPH_BULLETS: GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS_OUTPUT
  DELETE_CONTENT_RANGE: GOOGLEDOCS_DELETE_CONTENT_RANGE_OUTPUT
  DELETE_FOOTER: GOOGLEDOCS_DELETE_FOOTER_OUTPUT
  DELETE_HEADER: GOOGLEDOCS_DELETE_HEADER_OUTPUT
  DELETE_NAMED_RANGE: GOOGLEDOCS_DELETE_NAMED_RANGE_OUTPUT
  DELETE_PARAGRAPH_BULLETS: GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS_OUTPUT
  DELETE_TABLE: GOOGLEDOCS_DELETE_TABLE_OUTPUT
  DELETE_TABLE_COLUMN: GOOGLEDOCS_DELETE_TABLE_COLUMN_OUTPUT
  DELETE_TABLE_ROW: GOOGLEDOCS_DELETE_TABLE_ROW_OUTPUT
  GET_CHARTS_FROM_SPREADSHEET: GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET_OUTPUT
  GET_DOCUMENT_BY_ID: GOOGLEDOCS_GET_DOCUMENT_BY_ID_OUTPUT
  INSERT_INLINE_IMAGE: GOOGLEDOCS_INSERT_INLINE_IMAGE_OUTPUT
  INSERT_PAGE_BREAK: GOOGLEDOCS_INSERT_PAGE_BREAK_OUTPUT
  INSERT_TABLE_ACTION: GOOGLEDOCS_INSERT_TABLE_ACTION_OUTPUT
  INSERT_TABLE_COLUMN: GOOGLEDOCS_INSERT_TABLE_COLUMN_OUTPUT
  INSERT_TEXT_ACTION: GOOGLEDOCS_INSERT_TEXT_ACTION_OUTPUT
  LIST_SPREADSHEET_CHARTS_ACTION: GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION_OUTPUT
  REPLACE_ALL_TEXT: GOOGLEDOCS_REPLACE_ALL_TEXT_OUTPUT
  REPLACE_IMAGE: GOOGLEDOCS_REPLACE_IMAGE_OUTPUT
  SEARCH_DOCUMENTS: GOOGLEDOCS_SEARCH_DOCUMENTS_OUTPUT
  UNMERGE_TABLE_CELLS: GOOGLEDOCS_UNMERGE_TABLE_CELLS_OUTPUT
  UPDATE_DOCUMENT_MARKDOWN: GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN_OUTPUT
  UPDATE_DOCUMENT_STYLE: GOOGLEDOCS_UPDATE_DOCUMENT_STYLE_OUTPUT
  UPDATE_EXISTING_DOCUMENT: GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT_OUTPUT
  UPDATE_TABLE_ROW_STYLE: GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GOOGLEDOCS's DOCUMENT_DELETED_TRIGGER trigger payload.
 */
type GOOGLEDOCS_DOCUMENT_DELETED_TRIGGER_PAYLOAD = {
  /**
   * Document
   * @description The deleted Google document
   */
  document?: {
      /**
       * Created Time
       * @description Creation time in ISO format
       */
      createdTime: string;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Last Modifying User
       * @description Information about the last user who modified the document
       * @default null
       */
      lastModifyingUser: {
          [key: string]: unknown;
      } | null;
      /**
       * Mime Type
       * @description MIME type of the document
       */
      mimeType: string;
      /**
       * Modified Time
       * @description Last modification time in ISO format
       */
      modifiedTime: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Owners
       * @description List of document owners
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Shared
       * @description Whether the document is shared
       * @default null
       */
      shared: boolean | null;
      /**
       * Size
       * @description Size of the document in bytes
       * @default null
       */
      size: string | null;
      /**
       * Starred
       * @description Whether the document is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the document is in trash
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web View Link
       * @description Link to view the document in browser
       */
      webViewLink: string;
  };
  /**
   * Event Type
   * @description Type of event that occurred
   * @default document_deleted
   */
  event_type: string;
};

/**
 * Type of GOOGLEDOCS's DOCUMENT_UPDATED_TRIGGER trigger payload.
 */
type GOOGLEDOCS_DOCUMENT_UPDATED_TRIGGER_PAYLOAD = {
  /**
   * Document
   * @description The updated Google document
   */
  document?: {
      /**
       * Created Time
       * @description Creation time in ISO format
       */
      createdTime: string;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Last Modifying User
       * @description Information about the last user who modified the document
       * @default null
       */
      lastModifyingUser: {
          [key: string]: unknown;
      } | null;
      /**
       * Mime Type
       * @description MIME type of the document
       */
      mimeType: string;
      /**
       * Modified Time
       * @description Last modification time in ISO format
       */
      modifiedTime: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Owners
       * @description List of document owners
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Shared
       * @description Whether the document is shared
       * @default null
       */
      shared: boolean | null;
      /**
       * Size
       * @description Size of the document in bytes
       * @default null
       */
      size: string | null;
      /**
       * Starred
       * @description Whether the document is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the document is in trash
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web View Link
       * @description Link to view the document in browser
       */
      webViewLink: string;
  };
  /**
   * Event Type
   * @description Type of event that occurred
   * @default document_updated
   */
  event_type: string;
};

/**
 * Type of GOOGLEDOCS's PAGE_ADDED_TRIGGER trigger payload.
 */
type GOOGLEDOCS_PAGE_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Document
   * @description The newly added Google document
   */
  document?: {
      /**
       * Created Time
       * @description Creation time in ISO format
       */
      createdTime: string;
      /**
       * Id
       * @description Unique identifier of the document
       */
      id: string;
      /**
       * Last Modifying User
       * @description Information about the last user who modified the document
       * @default null
       */
      lastModifyingUser: {
          [key: string]: unknown;
      } | null;
      /**
       * Mime Type
       * @description MIME type of the document
       */
      mimeType: string;
      /**
       * Modified Time
       * @description Last modification time in ISO format
       */
      modifiedTime: string;
      /**
       * Name
       * @description Name of the document
       */
      name: string;
      /**
       * Owners
       * @description List of document owners
       * @default null
       */
      owners: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Shared
       * @description Whether the document is shared
       * @default null
       */
      shared: boolean | null;
      /**
       * Size
       * @description Size of the document in bytes
       * @default null
       */
      size: string | null;
      /**
       * Starred
       * @description Whether the document is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Trashed
       * @description Whether the document is in trash
       * @default null
       */
      trashed: boolean | null;
      /**
       * Web View Link
       * @description Link to view the document in browser
       */
      webViewLink: string;
  };
  /**
   * Event Type
   * @description Type of event that occurred
   * @default document_added
   */
  event_type: string;
};

/**
 * Map of Composio's GOOGLEDOCS toolkit.
 */
export const GOOGLEDOCS = {
  slug: "googledocs",
  tools: {
    /**
     * Tool to create a copy of an existing google document. use this to duplicate a document, for example, when using an existing document as a template. the copied document will have a default title (e.g., 'copy of [original title]') if no new title is provided, and will be placed in the user's root google drive folder.
     */
    COPY_DOCUMENT: "GOOGLEDOCS_COPY_DOCUMENT",
    /**
     * Creates a new google docs document using the provided title as filename and inserts the initial text at the beginning if non-empty, returning the document's id and metadata (excluding body content).
     */
    CREATE_DOCUMENT: "GOOGLEDOCS_CREATE_DOCUMENT",
    /**
     * Creates a new google docs document, optionally initializing it with a title and content provided as markdown text.
     */
    CREATE_DOCUMENT_MARKDOWN: "GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN",
    /**
     * Tool to create a new footer in a google document. use when you need to add a footer, optionally specifying its type and the section it applies to.
     */
    CREATE_FOOTER: "GOOGLEDOCS_CREATE_FOOTER",
    /**
     * Tool to create a new footnote in a google document. use this when you need to add a footnote at a specific location or at the end of the document body.
     */
    CREATE_FOOTNOTE: "GOOGLEDOCS_CREATE_FOOTNOTE",
    /**
     * Tool to create a new header in a google document. use this tool when you need to add a header to a document, optionally specifying the section it applies to.
     */
    CREATE_HEADER: "GOOGLEDOCS_CREATE_HEADER",
    /**
     * Tool to create a new named range in a google document. use this to assign a name to a specific part of the document for easier reference or programmatic manipulation.
     */
    CREATE_NAMED_RANGE: "GOOGLEDOCS_CREATE_NAMED_RANGE",
    /**
     * Tool to add bullets to paragraphs within a specified range in a google document. use when you need to format a list or a set of paragraphs as bullet points.
     */
    CREATE_PARAGRAPH_BULLETS: "GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS",
    /**
     * Tool to delete a range of content from a google document. use when you need to remove a specific portion of text or other structural elements within a document.
     */
    DELETE_CONTENT_RANGE: "GOOGLEDOCS_DELETE_CONTENT_RANGE",
    /**
     * Tool to delete a footer from a google document. use when you need to remove a footer from a specific section or the default footer.
     */
    DELETE_FOOTER: "GOOGLEDOCS_DELETE_FOOTER",
    /**
     * Deletes the header from the specified section or the default header if no section is specified. use this tool to remove a header from a google document.
     */
    DELETE_HEADER: "GOOGLEDOCS_DELETE_HEADER",
    /**
     * Tool to delete a named range from a google document. use when you need to remove a previously defined named range by its id or name.
     */
    DELETE_NAMED_RANGE: "GOOGLEDOCS_DELETE_NAMED_RANGE",
    /**
     * Tool to remove bullets from paragraphs within a specified range in a google document. use when you need to clear bullet formatting from a section of a document.
     */
    DELETE_PARAGRAPH_BULLETS: "GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS",
    /**
     * Tool to delete an entire table from a google document. use when you have the document id and the specific start and end index of the table element to be removed. the table's range can be found by inspecting the document's content structure.
     */
    DELETE_TABLE: "GOOGLEDOCS_DELETE_TABLE",
    /**
     * Tool to delete a column from a table in a google document. use this tool when you need to remove a specific column from an existing table within a document.
     */
    DELETE_TABLE_COLUMN: "GOOGLEDOCS_DELETE_TABLE_COLUMN",
    /**
     * Tool to delete a row from a table in a google document. use when you need to remove a specific row from an existing table.
     */
    DELETE_TABLE_ROW: "GOOGLEDOCS_DELETE_TABLE_ROW",
    /**
     * Tool to retrieve a list of all charts from a specified google sheets spreadsheet. use when you need to get chart ids and their specifications for embedding or referencing elsewhere, such as in google docs.
     */
    GET_CHARTS_FROM_SPREADSHEET: "GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET",
    /**
     * Retrieves an existing google document by its id; will error if the document is not found.
     */
    GET_DOCUMENT_BY_ID: "GOOGLEDOCS_GET_DOCUMENT_BY_ID",
    /**
     * Tool to insert an image from a given uri at a specified location in a google document as an inline image. use when you need to add an image to a document programmatically.
     */
    INSERT_INLINE_IMAGE: "GOOGLEDOCS_INSERT_INLINE_IMAGE",
    /**
     * Tool to insert a page break into a google document. use when you need to start new content on a fresh page, such as at the end of a chapter or section.
     */
    INSERT_PAGE_BREAK: "GOOGLEDOCS_INSERT_PAGE_BREAK",
    /**
     * Tool to insert a table into a google document. use when you need to add a new table at a specific location or at the end of a segment (like document body, header, or footer) in a document.
     */
    INSERT_TABLE_ACTION: "GOOGLEDOCS_INSERT_TABLE_ACTION",
    /**
     * Tool to insert a new column into a table in a google document. use this tool when you need to add a column to an existing table at a specific location.
     */
    INSERT_TABLE_COLUMN: "GOOGLEDOCS_INSERT_TABLE_COLUMN",
    /**
     * Tool to insert a string of text at a specified location within a google document. use when you need to add new text content to an existing document.
     */
    INSERT_TEXT_ACTION: "GOOGLEDOCS_INSERT_TEXT_ACTION",
    /**
     * Tool to retrieve a list of charts with their ids and metadata from a google sheets spreadsheet. use to identify charts available for embedding into google docs.
     */
    LIST_SPREADSHEET_CHARTS_ACTION: "GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION",
    /**
     * Tool to replace all occurrences of a specified text string with another text string throughout a google document. use when you need to perform a global find and replace operation within a document.
     */
    REPLACE_ALL_TEXT: "GOOGLEDOCS_REPLACE_ALL_TEXT",
    /**
     * Tool to replace a specific image in a document with a new image from a uri. use when you need to update an existing image within a google doc.
     */
    REPLACE_IMAGE: "GOOGLEDOCS_REPLACE_IMAGE",
    /**
     * Search for google documents using various filters including name, content, date ranges, and more.
     */
    SEARCH_DOCUMENTS: "GOOGLEDOCS_SEARCH_DOCUMENTS",
    /**
     * Tool to unmerge previously merged cells in a table. use this when you need to revert merged cells in a google document table back to their individual cell states.
     */
    UNMERGE_TABLE_CELLS: "GOOGLEDOCS_UNMERGE_TABLE_CELLS",
    /**
     * Replaces the entire content of an existing google docs document with new markdown text; requires edit permissions for the document.
     */
    UPDATE_DOCUMENT_MARKDOWN: "GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN",
    /**
     * Tool to update the overall document style, such as page size, margins, and default text direction. use when you need to modify the global style settings of a google document.
     */
    UPDATE_DOCUMENT_STYLE: "GOOGLEDOCS_UPDATE_DOCUMENT_STYLE",
    /**
     * Applies programmatic edits, such as text insertion, deletion, or formatting, to a specified google doc using the `batchupdate` api method.
     */
    UPDATE_EXISTING_DOCUMENT: "GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT",
    /**
     * Tool to update the style of a table row in a google document. use when you need to modify the appearance of specific rows within a table, such as setting minimum row height or marking rows as headers.
     */
    UPDATE_TABLE_ROW_STYLE: "GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE",
  },
  triggerTypes: {
    /**
     * Triggers when an existing Google Doc is deleted (moved to trash).
     *     This trigger monitors Google Docs and fires when documents are trashed.
     */
    DOCUMENT_DELETED_TRIGGER: "GOOGLEDOCS_DOCUMENT_DELETED_TRIGGER",
    /**
     * Triggers when an existing Google Doc is updated or modified.
     *     This trigger monitors Google Docs and fires when documents are updated.
     */
    DOCUMENT_UPDATED_TRIGGER: "GOOGLEDOCS_DOCUMENT_UPDATED_TRIGGER",
    /**
     * Triggers when a new Google Doc is added/created.
     *     This trigger monitors Google Docs and fires when new documents are detected.
     */
    PAGE_ADDED_TRIGGER: "GOOGLEDOCS_PAGE_ADDED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLEDOCS".
 */
export type GOOGLEDOCS_TRIGGER_PAYLOADS = {
  DOCUMENT_DELETED_TRIGGER: GOOGLEDOCS_DOCUMENT_DELETED_TRIGGER_PAYLOAD
  DOCUMENT_UPDATED_TRIGGER: GOOGLEDOCS_DOCUMENT_UPDATED_TRIGGER_PAYLOAD
  PAGE_ADDED_TRIGGER: GOOGLEDOCS_PAGE_ADDED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GOOGLEDOCS".
 */
export type GOOGLEDOCS_TRIGGER_EVENTS = {
  DOCUMENT_DELETED_TRIGGER: TriggerEvent<GOOGLEDOCS_DOCUMENT_DELETED_TRIGGER_PAYLOAD>
  DOCUMENT_UPDATED_TRIGGER: TriggerEvent<GOOGLEDOCS_DOCUMENT_UPDATED_TRIGGER_PAYLOAD>
  PAGE_ADDED_TRIGGER: TriggerEvent<GOOGLEDOCS_PAGE_ADDED_TRIGGER_PAYLOAD>
}
