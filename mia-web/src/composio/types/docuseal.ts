// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCUSEAL's DOCUSEAL_ARCHIVE_TEMPLATE tool input.
 */
type DOCUSEAL_ARCHIVE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the template to be archived
   */
  id?: string;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_ARCHIVE_TEMPLATE tool output.
 */
type DOCUSEAL_ARCHIVE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived At
       * @description ISO 8601 timestamp when the template was archived
       */
      archived_at: string;
      /**
       * Id
       * @description The unique identifier of the archived template
       */
      id: number;
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
 * Type of DOCUSEAL's DOCUSEAL_CLONE_TEMPLATE tool input.
 */
type DOCUSEAL_CLONE_TEMPLATE_INPUT = {
  /**
   * Folder Id
   * @description (Optional) Folder ID where the new template will be placed.
   * @default null
   */
  folder_id: string | null;
  /**
   * Name
   * @description New name for the cloned template.
   */
  name?: string;
  /**
   * Template Id
   * @description The ID of the template to be cloned.
   */
  template_id?: string;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_CLONE_TEMPLATE tool output.
 */
type DOCUSEAL_CLONE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description RFC3339 timestamp when the new template was created.
       */
      created_at: string;
      /**
       * Folder Id
       * @description Folder ID where the cloned template resides.
       * @default null
       */
      folder_id: string | null;
      /**
       * Id
       * @description ID of the newly cloned template.
       */
      id: string;
      /**
       * Name
       * @description Name of the newly cloned template.
       */
      name: string;
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
 * Type of DOCUSEAL's DOCUSEAL_CREATE_SUBMISSION_FROM_PDF tool input.
 */
type DOCUSEAL_CREATE_SUBMISSION_FROM_PDF_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the submitter
   * @default null
   */
  email: unknown;
  /**
   * Fields
   * @description Key-value pairs to prefill template fields
   * @default null
   */
  fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Pdf
   * Format: binary
   * @description Binary content of the PDF file to upload
   */
  pdf?: string;
  /**
   * Template Id
   * @description ID of the template to use for the submission
   */
  template_id?: string;
  /**
   * Webhook Url
   * Format: uri
   * @description Webhook URL for submission status updates
   * @default null
   */
  webhook_url: unknown;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_CREATE_SUBMISSION_FROM_PDF tool output.
 */
type DOCUSEAL_CREATE_SUBMISSION_FROM_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document Url
       * Format: uri
       * @description URL to access the created document
       */
      document_url: unknown;
      /**
       * Id
       * @description Identifier for the created submission
       */
      id: string;
      /**
       * Status
       * @description Submission status
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
 * Type of DOCUSEAL's DOCUSEAL_CREATE_TEMPLATE_FROM_HTML tool input.
 */
type DOCUSEAL_CREATE_TEMPLATE_FROM_HTML_INPUT = {
  /**
   * Fields
   * @description Optional list of fields to define labels or placeholders in the template
   * @default null
   */
  fields: {
      /**
       * Height
       * @description Height of the field
       */
      height: number;
      /**
       * Name
       * @description Name of the field on the template
       */
      name: string;
      /**
       * Page
       * @description Page number where the field is placed (1-indexed)
       */
      page: number;
      /**
       * Required
       * @description Whether this field is required
       * @default false
       */
      required: boolean;
      /**
       * Type
       * @description Type of the field (e.g., 'text', 'signature')
       */
      type: string;
      /**
       * Width
       * @description Width of the field
       */
      width: number;
      /**
       * X
       * @description X coordinate of the field on the page
       */
      x: number;
      /**
       * Y
       * @description Y coordinate of the field on the page
       */
      y: number;
  }[] | null;
  /**
   * Html
   * @description HTML source of the document to create a template from
   */
  html?: string;
  /**
   * Name
   * @description Optional name for the created template
   * @default null
   */
  name: string | null;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_CREATE_TEMPLATE_FROM_HTML tool output.
 */
type DOCUSEAL_CREATE_TEMPLATE_FROM_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the template was created
       */
      created_at: string;
      /**
       * Fields
       * @description List of fields defined on the template
       */
      fields: {
          /**
           * Height
           * @description Height of the field
           */
          height: number;
          /**
           * Name
           * @description Name of the field
           */
          name: string;
          /**
           * Page
           * @description Page number where the field is placed
           */
          page: number;
          /**
           * Required
           * @description Whether the field is required
           */
          required: boolean;
          /**
           * Type
           * @description Type of the field
           */
          type: string;
          /**
           * Width
           * @description Width of the field
           */
          width: number;
          /**
           * X
           * @description X coordinate of the field
           */
          x: number;
          /**
           * Y
           * @description Y coordinate of the field
           */
          y: number;
      }[];
      /**
       * Id
       * @description Identifier of the created template
       */
      id: string;
      /**
       * Name
       * @description Name of the created template
       */
      name: string;
      /**
       * Status
       * @description Status of the template creation process
       */
      status: string;
      /**
       * Updated At
       * @description ISO timestamp when the template was last updated
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
 * Type of DOCUSEAL's DOCUSEAL_GET_TEMPLATE tool input.
 */
type DOCUSEAL_GET_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to retrieve.
   */
  template_id?: string;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_GET_TEMPLATE tool output.
 */
type DOCUSEAL_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the template.
       * @default null
       */
      description: string | null;
      /**
       * Fields
       * @description List of defined fields in the template.
       */
      fields: {
          [key: string]: unknown;
      }[];
      /**
       * Id
       * @description Unique identifier of the template.
       */
      id: string;
      /**
       * Name
       * @description Name of the template.
       */
      name: string;
      /**
       * Owner Id
       * @description Identifier of the user who owns the template.
       */
      owner_id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the template was last updated.
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
 * Type of DOCUSEAL's DOCUSEAL_LIST_SUBMISSIONS tool input.
 */
type DOCUSEAL_LIST_SUBMISSIONS_INPUT = {
  /**
   * Document Id
   * @description Filter submissions by a specific document ID.
   * @default null
   */
  document_id: string | null;
  /**
   * Limit
   * @description Maximum number of submissions to return per page.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of submissions to skip for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_LIST_SUBMISSIONS tool output.
 */
type DOCUSEAL_LIST_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Submissions
       * @description List of document submissions.
       */
      submissions: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the submission was created.
           */
          created_at: string;
          /**
           * Document Id
           * @description The ID of the document associated with this submission.
           */
          document_id: string;
          /**
           * Fields
           * @description Key-value pairs of submitted fields data.
           */
          fields: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the submission.
           */
          id: string;
          /**
           * Status
           * @description Current status of the submission.
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the submission was last updated.
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
 * Type of DOCUSEAL's DOCUSEAL_LIST_SUBMITTERS tool input.
 */
type DOCUSEAL_LIST_SUBMITTERS_INPUT = object;

/**
 * Type of DOCUSEAL's DOCUSEAL_LIST_SUBMITTERS tool output.
 */
type DOCUSEAL_LIST_SUBMITTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Submitters
       * @description List of document submitters
       */
      submitters: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the submitter was created
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the submitter
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the submitter
           */
          id: string;
          /**
           * Name
           * @description Name of the submitter
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the submitter was last updated
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
 * Type of DOCUSEAL's DOCUSEAL_LIST_TEMPLATES tool input.
 */
type DOCUSEAL_LIST_TEMPLATES_INPUT = {
  /**
   * After
   * @description Return templates with IDs greater than this value (used for cursor-based pagination).
   * @default null
   */
  after: number | null;
  /**
   * Application Key
   * @description The unique application-specific identifier for the template. When provided, only templates with this application key are returned.
   * @default null
   */
  application_key: string | null;
  /**
   * Archived
   * @description If true, only archived templates are returned; if false, only active templates are returned.
   * @default null
   */
  archived: boolean | null;
  /**
   * Before
   * @description Return templates with IDs less than this value (used for cursor-based pagination).
   * @default null
   */
  before: number | null;
  /**
   * Folder
   * @description Filter templates by folder name.
   * @default null
   */
  folder: string | null;
  /**
   * Limit
   * @description Maximum number of templates to return. Default is 10; maximum is 100.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_LIST_TEMPLATES tool output.
 */
type DOCUSEAL_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of templates.
       */
      templates: {
          /**
           * Author
           * @description Author details.
           */
          author: {
              /**
               * Email
               * @description Email of the author.
               */
              email: string;
              /**
               * First Name
               * @description First name of the author.
               */
              first_name: string;
              /**
               * Id
               * @description ID of the author.
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the author.
               */
              last_name: string;
          };
          /**
           * Documents
           * @description List of documents associated with the template.
           */
          documents: {
              /**
               * Filename
               * @description Filename of the document.
               */
              filename: string;
              /**
               * Id
               * @description ID of the document.
               */
              id: number;
              /**
               * Url
               * @description URL to access the document.
               */
              url: string;
              /**
               * Uuid
               * @description UUID of the document.
               */
              uuid: string;
          }[];
          /**
           * External Id
           * @description External ID of the template.
           * @default null
           */
          external_id: string | null;
          /**
           * Fields
           * @description List of fields associated with the template.
           */
          fields: {
              /**
               * Areas
               * @description List of areas where this field is placed.
               */
              areas: {
                  /**
                   * Attachment Uuid
                   * @description UUID of the relevant attachment.
                   */
                  attachment_uuid: string;
                  /**
                   * H
                   * @description Relative height (0–1).
                   */
                  h: number;
                  /**
                   * Page
                   * @description Zero-based page index.
                   */
                  page: number;
                  /**
                   * W
                   * @description Relative width (0–1).
                   */
                  w: number;
                  /**
                   * X
                   * @description Relative x-coordinate (0–1).
                   */
                  x: number;
                  /**
                   * Y
                   * @description Relative y-coordinate (0–1).
                   */
                  y: number;
              }[];
              /**
               * Name
               * @description Name of the field.
               */
              name: string;
              /**
               * Required
               * @description Whether the field is required.
               */
              required: boolean;
              /**
               * Submitter Uuid
               * @description UUID of the submitter associated with this field.
               * @default null
               */
              submitter_uuid: string | null;
              /**
               * Type
               * @description Type of the field (e.g., text, signature).
               */
              type: string;
              /**
               * Uuid
               * @description UUID of the field.
               */
              uuid: string;
          }[];
          /**
           * Folder Id
           * @description ID of the folder containing the template.
           */
          folder_id: number;
          /**
           * Folder Name
           * @description Name of the folder containing the template.
           */
          folder_name: string;
          /**
           * Id
           * @description Unique identifier of the template.
           */
          id: number;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Schema
           * @description List of schema entries for the template.
           */
          schema: {
              /**
               * Attachment Uuid
               * @description UUID of the attached document.
               */
              attachment_uuid: string;
              /**
               * Name
               * @description Name of the schema element.
               */
              name: string;
          }[];
          /**
           * Shared Link
           * @description Whether the template has a shared link.
           */
          shared_link: boolean;
          /**
           * Slug
           * @description Unique slug of the template.
           */
          slug: string;
          /**
           * Source
           * @description Source of the template creation.
           */
          source: string;
          /**
           * Submitters
           * @description List of submitters associated with the template.
           */
          submitters: {
              /**
               * Name
               * @description Name of the submitter.
               */
              name: string;
              /**
               * Uuid
               * @description UUID of the submitter.
               */
              uuid: string;
          }[];
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
 * Type of DOCUSEAL's DOCUSEAL_MERGE_TEMPLATES tool input.
 */
type DOCUSEAL_MERGE_TEMPLATES_INPUT = {
  /**
   * Output Name
   * @description Name of the merged document
   * @default null
   */
  output_name: string | null;
  /**
   * Template Ids
   * @description IDs of the templates to merge
   */
  template_ids?: string[];
};

/**
 * Type of DOCUSEAL's DOCUSEAL_MERGE_TEMPLATES tool output.
 */
type DOCUSEAL_MERGE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the merged document
       */
      id: string;
      /**
       * Status
       * @description Status of the merge operation
       */
      status: string;
      /**
       * Url
       * @description URL to access the merged document
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
 * Type of DOCUSEAL's DOCUSEAL_UPDATE_TEMPLATE tool input.
 */
type DOCUSEAL_UPDATE_TEMPLATE_INPUT = {
  /**
   * Folder Id
   * @description ID of the folder to move the template into.
   * @default null
   */
  folder_id: string | null;
  /**
   * Name
   * @description New name for the template.
   * @default null
   */
  name: string | null;
  /**
   * Template Id
   * @description The unique identifier of the template to update.
   */
  template_id?: string;
};

/**
 * Type of DOCUSEAL's DOCUSEAL_UPDATE_TEMPLATE tool output.
 */
type DOCUSEAL_UPDATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created.
       */
      created_at: string;
      /**
       * Folder Id
       * @description Folder ID where the template resides.
       * @default null
       */
      folder_id: string | null;
      /**
       * Id
       * @description Unique identifier of the template.
       */
      id: string;
      /**
       * Name
       * @description Name of the template.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the template was last updated.
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
 * Type map of all available tool input types for toolkit "DOCUSEAL".
 */
export type DOCUSEAL_TOOL_INPUTS = {
  ARCHIVE_TEMPLATE: DOCUSEAL_ARCHIVE_TEMPLATE_INPUT
  CLONE_TEMPLATE: DOCUSEAL_CLONE_TEMPLATE_INPUT
  CREATE_SUBMISSION_FROM_PDF: DOCUSEAL_CREATE_SUBMISSION_FROM_PDF_INPUT
  CREATE_TEMPLATE_FROM_HTML: DOCUSEAL_CREATE_TEMPLATE_FROM_HTML_INPUT
  GET_TEMPLATE: DOCUSEAL_GET_TEMPLATE_INPUT
  LIST_SUBMISSIONS: DOCUSEAL_LIST_SUBMISSIONS_INPUT
  LIST_SUBMITTERS: DOCUSEAL_LIST_SUBMITTERS_INPUT
  LIST_TEMPLATES: DOCUSEAL_LIST_TEMPLATES_INPUT
  MERGE_TEMPLATES: DOCUSEAL_MERGE_TEMPLATES_INPUT
  UPDATE_TEMPLATE: DOCUSEAL_UPDATE_TEMPLATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCUSEAL".
 */
export type DOCUSEAL_TOOL_OUTPUTS = {
  ARCHIVE_TEMPLATE: DOCUSEAL_ARCHIVE_TEMPLATE_OUTPUT
  CLONE_TEMPLATE: DOCUSEAL_CLONE_TEMPLATE_OUTPUT
  CREATE_SUBMISSION_FROM_PDF: DOCUSEAL_CREATE_SUBMISSION_FROM_PDF_OUTPUT
  CREATE_TEMPLATE_FROM_HTML: DOCUSEAL_CREATE_TEMPLATE_FROM_HTML_OUTPUT
  GET_TEMPLATE: DOCUSEAL_GET_TEMPLATE_OUTPUT
  LIST_SUBMISSIONS: DOCUSEAL_LIST_SUBMISSIONS_OUTPUT
  LIST_SUBMITTERS: DOCUSEAL_LIST_SUBMITTERS_OUTPUT
  LIST_TEMPLATES: DOCUSEAL_LIST_TEMPLATES_OUTPUT
  MERGE_TEMPLATES: DOCUSEAL_MERGE_TEMPLATES_OUTPUT
  UPDATE_TEMPLATE: DOCUSEAL_UPDATE_TEMPLATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCUSEAL toolkit.
 */
export const DOCUSEAL = {
  slug: "docuseal",
  tools: {
    /**
     * Tool to archive a specific template by its unique identifier. use after verifying the template id.
     */
    ARCHIVE_TEMPLATE: "DOCUSEAL_ARCHIVE_TEMPLATE",
    /**
     * Tool to clone an existing template by its id with a new name. use after you have the template id and desired name to duplicate it into the same or a different folder.
     */
    CLONE_TEMPLATE: "DOCUSEAL_CLONE_TEMPLATE",
    /**
     * Tool to create a one-off submission from a pdf file. use when you need to upload a pdf and initiate a signature workflow with optional custom field values and webhook notifications.
     */
    CREATE_SUBMISSION_FROM_PDF: "DOCUSEAL_CREATE_SUBMISSION_FROM_PDF",
    /**
     * Tool to create a template from html content. use when you need to define a reusable document template directly from html input.
     */
    CREATE_TEMPLATE_FROM_HTML: "DOCUSEAL_CREATE_TEMPLATE_FROM_HTML",
    /**
     * Tool to retrieve details of a specific template by its unique identifier. use when you need to fetch template metadata by id.
     */
    GET_TEMPLATE: "DOCUSEAL_GET_TEMPLATE",
    /**
     * Tool to list all document submissions with optional pagination and document filtering. use when you need to retrieve and browse existing submissions.
     */
    LIST_SUBMISSIONS: "DOCUSEAL_LIST_SUBMISSIONS",
    /**
     * Tool to retrieve a list of all submitters. use when you need a roster of submitters for reporting or management.
     */
    LIST_SUBMITTERS: "DOCUSEAL_LIST_SUBMITTERS",
    /**
     * Tool to retrieve a list of all templates. use when you need to browse available templates with optional filters before selection.
     */
    LIST_TEMPLATES: "DOCUSEAL_LIST_TEMPLATES",
    /**
     * Tool to merge multiple templates into one with a new name. use when you have multiple template ids and want to combine them into a single document.
     */
    MERGE_TEMPLATES: "DOCUSEAL_MERGE_TEMPLATES",
    /**
     * Tool to update details of a specific template, including name and folder. use after confirming the template id.
     */
    UPDATE_TEMPLATE: "DOCUSEAL_UPDATE_TEMPLATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCUSEAL".
 */
export type DOCUSEAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCUSEAL".
 */
export type DOCUSEAL_TRIGGER_EVENTS = {}
