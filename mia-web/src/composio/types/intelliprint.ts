// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INTELLIPRINT's INTELLIPRINT_CANCEL_DELETE_PRINT_JOB tool input.
 */
type INTELLIPRINT_CANCEL_DELETE_PRINT_JOB_INPUT = {
  /**
   * Print Id
   * @description ID of the Print Job to delete or cancel.
   */
  print_ID?: string;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_CANCEL_DELETE_PRINT_JOB tool output.
 */
type INTELLIPRINT_CANCEL_DELETE_PRINT_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description True when an unconfirmed job is deleted or a confirmed job is canceled.
       */
      deleted: boolean;
      /**
       * Id
       * @description The Print Job ID.
       */
      id: string;
      /**
       * Object
       * @description Object type, always 'print'.
       */
      object: string;
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
 * Type of INTELLIPRINT's INTELLIPRINT_CREATE_BACKGROUND tool input.
 */
type INTELLIPRINT_CREATE_BACKGROUND_INPUT = {
  /**
   * File
   * Format: binary
   * @description The multipart/form-data-encoded file for this Background.
   */
  file?: string;
  /**
   * File Path
   * @description Local filesystem path to the file. If provided and 'file' is empty, the action will read bytes from this path.
   * @default null
   */
  file_path: string | null;
  /**
   * Name
   * @description User-provided name of this Background.
   * @default null
   */
  name: string | null;
  /**
   * Team
   * @description Team ID to assign this Background to.
   * @default null
   */
  team: string | null;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_CREATE_BACKGROUND tool output.
 */
type INTELLIPRINT_CREATE_BACKGROUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Unix timestamp when the Background was created.
       */
      created: number;
      /**
       * Filename
       * @description Original filename of the uploaded file.
       */
      filename: string;
      /**
       * Id
       * @description ID of the Background.
       */
      id: string;
      /**
       * Name
       * @description User-provided name of this Background.
       * @default null
       */
      name: string | null;
      /**
       * Object
       * @description Object type, always 'background'.
       */
      object: string;
      /**
       * Preview
       * @description URL for a PNG preview image of the Background.
       */
      preview: string;
      /**
       * BackgroundTeam
       * @description The Team object linked to a Background.
       * @default null
       */
      team: {
          /**
           * Id
           * @description ID of the Team.
           */
          id: string;
          /**
           * Name
           * @description Name of the Team.
           * @default null
           */
          name: string | null;
          /**
           * Object
           * @description Object type, typically 'team'.
           */
          object: string;
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
 * Type of INTELLIPRINT's INTELLIPRINT_CREATE_PRINT_JOB tool input.
 */
type INTELLIPRINT_CREATE_PRINT_JOB_INPUT = {
  /**
   * Confirmed
   * @description Confirm job immediately.
   * @default null
   */
  confirmed: boolean | null;
  /**
   * File
   * @description Path to file to upload for print job.
   */
  file?: string;
  /**
   * Reference
   * @description User-provided reference.
   * @default null
   */
  reference: string | null;
  /**
   * Testmode
   * @description Mark job as test.
   * @default null
   */
  testmode: boolean | null;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_CREATE_PRINT_JOB tool output.
 */
type INTELLIPRINT_CREATE_PRINT_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Confirmed */
      confirmed: boolean;
      /** File */
      file: {
          /** Name */
          name: string;
          /** Pages */
          pages: number;
          /** Size */
          size: number;
      };
      /** Id */
      id: string;
      /** Object */
      object: string;
      /** Reference */
      reference: string | null;
      /** Testmode */
      testmode: boolean;
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
 * Type of INTELLIPRINT's INTELLIPRINT_LIST_BACKGROUNDS tool input.
 */
type INTELLIPRINT_LIST_BACKGROUNDS_INPUT = {
  /**
   * Limit
   * @description Number of backgrounds to return; must be between 1 and 1000.
   * @default 10
   */
  limit: number;
  /**
   * Skip
   * @description Number of results to skip before returning (for pagination).
   * @default 0
   */
  skip: number;
  /**
   * Team
   * @description The Team ID for which backgrounds should be returned.
   * @default null
   */
  team: string | null;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_LIST_BACKGROUNDS tool output.
 */
type INTELLIPRINT_LIST_BACKGROUNDS_OUTPUT = {
  /**
   * Data
   * @description Array of background objects.
   */
  data?: {
      /**
       * Created
       * @description UNIX timestamp when the background was created.
       */
      created: number;
      /**
       * Filename
       * @description Name of the uploaded file.
       */
      filename: string;
      /**
       * Id
       * @description Unique identifier for this background.
       */
      id: string;
      /**
       * Name
       * @description User-provided name of this background.
       */
      name: string;
      /**
       * Object
       * @description String literal: always 'background'.
       * @constant
       */
      object: "background";
      /**
       * Preview
       * @description URL for a PNG preview image of this background.
       */
      preview: string;
      /**
       * Team
       * @description Team object this background belongs to, or null if none.
       * @default null
       */
      team: {
          /**
           * Created
           * @description UNIX timestamp when the team was created.
           */
          created: number;
          /**
           * Id
           * @description Unique identifier for the team.
           */
          id: string;
          /**
           * Name
           * @description Team name.
           */
          name: string;
          /**
           * Object
           * @description String literal: always 'team'.
           * @constant
           */
          object: "team";
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether more results are available beyond this page.
   */
  has_more?: boolean;
  /**
   * Object
   * @description String literal: always 'list' for list endpoints.
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Available
   * @description Total number of available backgrounds.
   */
  total_available?: number;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_LIST_PRINT_JOBS tool input.
 */
type INTELLIPRINT_LIST_PRINT_JOBS_INPUT = {
  /**
   * Confirmed
   * @description Filter by confirmation status: true for confirmed only; false for unconfirmed only.
   * @default null
   */
  confirmed: boolean | null;
  /**
   * Letters.Status
   * @description Comma-separated list of letter statuses to filter by. A job is returned if any letter matches one of these statuses.
   * @default null
   */
  "letters.status": string | null;
  /**
   * Limit
   * @description Number of print jobs to return; must be between 1 and 1000.
   * @default 10
   */
  limit: number;
  /**
   * Skip
   * @description Number of results to skip before returning (for pagination).
   * @default 0
   */
  skip: number;
  /**
   * Testmode
   * @description When true, returns only testmode print jobs; when omitted or false, returns live jobs.
   * @default null
   */
  testmode: boolean | null;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_LIST_PRINT_JOBS tool output.
 */
type INTELLIPRINT_LIST_PRINT_JOBS_OUTPUT = {
  /**
   * Data
   * @description Array of print job objects.
   */
  data?: {
      /**
       * Account
       * @description Owning account ID.
       */
      account: string;
      /**
       * Background
       * @description Background settings for pages.
       */
      background: {
          /**
           * First Page
           * @description Background ID applied to the first page, or null for none.
           * @default null
           */
          first_page: string | null;
          /**
           * Other Pages
           * @description Background ID for subsequent pages, or null for none.
           * @default null
           */
          other_pages: string | null;
      };
      /**
       * Confidential
       * @description Whether the job is confidential.
       */
      confidential: boolean;
      /**
       * Confirmation Email
       * @description Whether a confirmation email was sent.
       */
      confirmation_email: boolean;
      /**
       * Confirmed
       * @description Whether this print job is confirmed.
       */
      confirmed: boolean;
      /**
       * Confirmed At
       * @description Timestamp when confirmed, or null if pending.
       * @default null
       */
      confirmed_at: number | null;
      /**
       * Cost
       * @description Aggregate cost for the job.
       */
      cost: {
          /**
           * After Tax
           * @description Cost after tax in minor units.
           */
          after_tax: number;
          /**
           * Amount
           * @description Cost in minor units, 8 decimal places.
           */
          amount: number;
          /**
           * Currency
           * @description Currency code (ISO 4217).
           */
          currency: string;
      };
      /**
       * Created
       * @description Creation timestamp (UNIX).
       */
      created: number;
      /**
       * Extra Documents
       * @description List of any extra documents to include.
       */
      extra_documents: {
          /**
           * Apply Background
           * @description Whether to apply the same background settings to this document.
           */
          apply_background: boolean;
          /**
           * Id
           * @description The ID of the extra document.
           */
          id: string;
          /**
           * Name
           * @description User-provided name of the extra document.
           */
          name: string;
          /**
           * Order
           * @description Where to insert this document relative to main mailings.
           * @enum {string}
           */
          order: "first" | "last" | "custom";
          /**
           * Ordering Number
           * @description Custom ordering index when 'custom' order is selected.
           */
          ordering_number: number;
          /**
           * Pages
           * @description Number of pages in the extra document.
           */
          pages: number;
      }[];
      /**
       * File
       * @description Primary file details for this job.
       */
      file: {
          /**
           * Name
           * @description The filename of the document.
           */
          name: string;
          /**
           * Pages
           * @description Number of pages in the file.
           */
          pages: number;
          /**
           * Size
           * @description Size in bytes of the file.
           */
          size: number;
      };
      /**
       * Id
       * @description Print job ID.
       */
      id: string;
      /**
       * Letters
       * @description Individual letters generated in this job.
       */
      letters: {
          /**
           * Address
           * @description Destination address for this letter.
           */
          address: {
              /**
               * Country
               * @description Country code or name.
               */
              country: string;
              /**
               * Line
               * @description Street address line.
               */
              line: string;
              /**
               * Name
               * @description Recipient name.
               */
              name: string;
              /**
               * Postcode
               * @description Postal code.
               */
              postcode: string;
          };
          /**
           * Cost
           * @description Cost details for this letter.
           */
          cost: {
              /**
               * After Tax
               * @description Cost after tax in minor units.
               */
              after_tax: number;
              /**
               * Amount
               * @description Cost in minor units, 8 decimal places.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code (ISO 4217).
               */
              currency: string;
          };
          /**
           * Envelope
           * @description Envelope type used for this letter.
           */
          envelope: string;
          /**
           * Id
           * @description Letter ID.
           */
          id: string;
          /**
           * Object
           * @description Literal value 'letter'.
           * @constant
           */
          object: "letter";
          /**
           * Pages
           * @description Number of pages in the letter.
           */
          pages: number;
          /**
           * Pdf
           * @description URL to PDF if available.
           * @default null
           */
          pdf: string | null;
          /**
           * Pdf Status
           * @description PDF availability status.
           * @enum {string}
           */
          pdf_status: "built" | "deleted";
          /**
           * Postage Service
           * @description Postage service used for this letter.
           */
          postage_service: string;
          /**
           * Print Stream
           * @description Internal print stream identifier.
           */
          print_stream: string;
          /**
           * Sheets
           * @description Number of sheets mailed for the letter.
           */
          sheets: number;
          /**
           * Shipped Date
           * @description Date shipped (UNIX timestamp), or null if not shipped.
           * @default null
           */
          shipped_date: number | null;
          /**
           * Status
           * @description Current status of the letter.
           * @enum {string}
           */
          status: "draft" | "waiting_to_print" | "printing" | "enclosing" | "shipping" | "sent" | "cancelled" | "returned" | "failed_wrong_address";
          /**
           * Tracking Number
           * @description Tracking number if assigned.
           * @default null
           */
          tracking_number: string | null;
      }[];
      /**
       * Metadata
       * @description User-defined metadata on the job.
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Nudge
       * @description Printing offset adjustments.
       */
      nudge: {
          /**
           * X
           * @description Horizontal offset in mm for printing alignment.
           * @default null
           */
          x: number | null;
          /**
           * Y
           * @description Vertical offset in mm for printing alignment.
           * @default null
           */
          y: number | null;
      };
      /**
       * Object
       * @description Literal value 'print'.
       * @constant
       */
      object: "print";
      /**
       * Pages
       * @description Total pages across all documents in the job.
       */
      pages: number;
      /**
       * Postage
       * @description Mailing postage settings.
       */
      postage: {
          /**
           * Ideal Envelope
           * @description Envelope size/type for mailing.
           * @enum {string}
           */
          ideal_envelope: "c4" | "c5" | "c4_plus" | "a4_box";
          /**
           * Mail Date
           * @description The scheduled mail date as UNIX timestamp, or null for ASAP.
           * @default null
           */
          mail_date: number | null;
          /**
           * Service
           * @description The postage service used for the print job.
           * @enum {string}
           */
          service: "uk_second_class" | "uk_first_class" | "uk_second_class_signed_for" | "uk_first_class_signed_for" | "uk_special_delivery" | "international";
      };
      /**
       * Printing
       * @description Printing options for the job.
       */
      printing: {
          /**
           * Double Sided
           * @description Whether printing is double sided.
           * @enum {string}
           */
          double_sided: "no" | "yes" | "mixed";
          /**
           * Double Sided Specific Pages
           * @description Specific pages to print double sided when using 'mixed'.
           * @default null
           */
          double_sided_specific_pages: number[] | null;
          /**
           * Premium Quality
           * @description Whether to use premium print quality.
           */
          premium_quality: boolean;
      };
      /**
       * Reference
       * @description User-provided reference string.
       */
      reference: string;
      /**
       * Remove Letters
       * @description Instruction to remove certain letters.
       */
      remove_letters: {
          /**
           * Series
           * @description Series codes of letters to remove.
           */
          series: string[];
          /**
           * With Phrase
           * @description Remove letters containing this phrase in content.
           * @default null
           */
          with_phrase: string | null;
      };
      /**
       * Sheets
       * @description Total sheets to be mailed.
       */
      sheets: number;
      /**
       * Splitting
       * @description Split configuration for this job.
       */
      splitting: {
          /**
           * Method
           * @description How the file is split across prints.
           * @enum {string}
           */
          method: "none" | "split_on_phrase" | "split_on_pages";
          /**
           * Pages
           * @description Page count when method is 'split_on_pages'.
           * @default null
           */
          pages: number | null;
          /**
           * Phrase
           * @description Phrase to split on when method is 'split_on_phrase'.
           * @default null
           */
          phrase: string | null;
      };
      /**
       * Team
       * @description Team ID if associated, else null.
       * @default null
       */
      team: string | null;
      /**
       * Testmode
       * @description True if this job was created in test mode.
       */
      testmode: boolean;
      /**
       * User
       * @description Creator user object as key/value strings, or null.
       * @default null
       */
      user: {
          [key: string]: string;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether more results are available beyond this page.
   */
  has_more?: boolean;
  /**
   * Object
   * @description Literal value 'list'.
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Available
   * @description Total count of matching print jobs.
   */
  total_available?: number;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_LIST_TEMPLATES tool input.
 */
type INTELLIPRINT_LIST_TEMPLATES_INPUT = object;

/**
 * Type of INTELLIPRINT's INTELLIPRINT_LIST_TEMPLATES tool output.
 */
type INTELLIPRINT_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Array of template objects.
   */
  data?: {
      /**
       * Created
       * @description UNIX timestamp when the template was created.
       * @default null
       */
      created: number | null;
      /**
       * Description
       * @description Description of the template, if provided.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the template.
       */
      id: string;
      /**
       * Name
       * @description Name of the template.
       */
      name: string;
      /**
       * Object
       * @description String literal: always 'template'.
       * @constant
       */
      object: "template";
      /**
       * Preview
       * @description URL for a preview image of this template.
       * @default null
       */
      preview: string | null;
      /**
       * Updated
       * @description UNIX timestamp when the template was last updated.
       * @default null
       */
      updated: number | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has More
   * @description Whether more results are available beyond this page.
   */
  has_more?: boolean;
  /**
   * Object
   * @description String literal: always 'list' for list endpoints.
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Available
   * @description Total number of available templates.
   */
  total_available?: number;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_MERGE_FILES tool input.
 */
type INTELLIPRINT_MERGE_FILES_INPUT = {
  /**
   * Files
   * @description List of files to merge together
   */
  files?: {
      /**
       * Content
       * Format: binary
       * @description Binary content of the file. If empty and file_path is provided, bytes will be read from file_path.
       */
      content: string;
      /**
       * Content Type
       * @description MIME type of the file, e.g., 'application/pdf'. If empty, it will be guessed from filename.
       * @default
       */
      content_type: string;
      /**
       * File Path
       * @description Local filesystem path to the file. If provided and 'content' is empty, the action will read bytes from this path.
       * @default null
       */
      file_path: string | null;
      /**
       * Filename
       * @description Name of the file to upload, e.g., 'file1.pdf'
       */
      filename: string;
  }[];
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_MERGE_FILES tool output.
 */
type INTELLIPRINT_MERGE_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Download Link
       * @description URL to download the merged file
       */
      download_link: string;
      /**
       * Id
       * @description ID of the merge operation
       */
      id: string;
      /**
       * Object
       * @description Type of object, always 'merge'
       */
      object: string;
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
 * Type of INTELLIPRINT's INTELLIPRINT_RETRIEVE_BACKGROUND tool input.
 */
type INTELLIPRINT_RETRIEVE_BACKGROUND_INPUT = {
  /**
   * Background Id
   * @description The ID of the Background to retrieve
   */
  background_id?: string;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_RETRIEVE_BACKGROUND tool output.
 */
type INTELLIPRINT_RETRIEVE_BACKGROUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description UNIX timestamp when the Background was created
       */
      created: number;
      /**
       * Filename
       * @description Uploaded file name
       */
      filename: string;
      /**
       * Id
       * @description Background ID
       */
      id: string;
      /**
       * Name
       * @description User-provided background name
       */
      name: string;
      /**
       * Object
       * @description Object type, always 'background'
       */
      object: string;
      /**
       * Preview
       * @description URL to a PNG preview image
       */
      preview: string;
      /**
       * Team
       * @description Team object this Background belongs to, or null
       * @default null
       */
      team: {
          /**
           * Id
           * @description ID of the Team
           */
          id: string;
          /**
           * Name
           * @description Name of the Team
           */
          name: string;
          /**
           * Object
           * @description Object type, always 'team'
           */
          object: string;
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
 * Type of INTELLIPRINT's INTELLIPRINT_RETRIEVE_PRINT_JOB tool input.
 */
type INTELLIPRINT_RETRIEVE_PRINT_JOB_INPUT = {
  /**
   * Print Id
   * @description The ID of the Print Job to retrieve
   */
  print_id?: string;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_RETRIEVE_PRINT_JOB tool output.
 */
type INTELLIPRINT_RETRIEVE_PRINT_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account ID associated with this job
       */
      account: string;
      /**
       * Background
       * @description Background images for letters
       */
      background: {
          /**
           * First Page
           * @description Background image for first page
           * @default null
           */
          first_page: string | null;
          /**
           * Other Pages
           * @description Background image for other pages
           * @default null
           */
          other_pages: string | null;
      };
      /**
       * Confidential
       * @description Whether letters are marked confidential
       */
      confidential: boolean;
      /**
       * Confirmation Email
       * @description Whether a confirmation email will be sent
       */
      confirmation_email: boolean;
      /**
       * Confirmed
       * @description Whether this print job has been confirmed
       */
      confirmed: boolean;
      /**
       * Confirmed At
       * @description UNIX timestamp when the job was confirmed
       * @default null
       */
      confirmed_at: number | null;
      /**
       * Cost
       * @description Cost summary for this job
       */
      cost: {
          /**
           * After Tax
           * @description Cost after tax scaled to 8 decimal places
           */
          after_tax: number;
          /**
           * Amount
           * @description Total cost amount scaled to 8 decimal places
           */
          amount: number;
          /**
           * Currency
           * @description Currency code (3-letter)
           */
          currency: string;
      };
      /**
       * Created
       * @description UNIX timestamp when the job was created
       */
      created: number;
      /**
       * Extra Documents
       * @description Additional documents attached to the job
       */
      extra_documents: {
          /**
           * Apply Background
           * @description Whether to apply the letter background to this document
           */
          apply_background: boolean;
          /**
           * Id
           * @description Extra document ID
           */
          id: string;
          /**
           * Name
           * @description Name of the extra document
           */
          name: string;
          /**
           * Order
           * @description Placement order of this extra document
           * @enum {string}
           */
          order: "first" | "last" | "custom";
          /**
           * Ordering Number
           * @description Custom ordering index when order is 'custom'
           */
          ordering_number: number;
          /**
           * Pages
           * @description Number of pages in this extra document
           */
          pages: number;
      }[];
      /**
       * File
       * @description Uploaded file details
       */
      file: {
          /**
           * Name
           * @description Name of the uploaded file
           */
          name: string;
          /**
           * Pages
           * @description Number of pages in the file
           */
          pages: number;
          /**
           * Size
           * @description Size of the file in bytes
           */
          size: number;
      };
      /**
       * Id
       * @description Print Job ID
       */
      id: string;
      /**
       * Letters
       * @description List of letters generated by this job
       */
      letters: {
          /**
           * Address
           * @description Destination address for the letter
           */
          address: {
              /**
               * Country
               * @description Two-character country code
               */
              country: string;
              /**
               * Line
               * @description Address lines
               */
              line: string[];
              /**
               * Name
               * @description Recipient name
               */
              name: string;
              /**
               * Postcode
               * @description Postal code
               */
              postcode: string;
          };
          /**
           * Cost
           * @description Cost details for this letter
           */
          cost: {
              /**
               * After Tax
               * @description Cost after tax scaled to 8 decimal places
               */
              after_tax: number;
              /**
               * Amount
               * @description Cost amount scaled to 8 decimal places
               */
              amount: number;
              /**
               * Currency
               * @description Currency code (3-letter)
               */
              currency: string;
          };
          /**
           * Envelope
           * @description Envelope type used for this letter
           */
          envelope: string;
          /**
           * Id
           * @description Letter ID
           */
          id: string;
          /**
           * Object
           * @description Object type, always 'letter'
           * @constant
           */
          object: "letter";
          /**
           * Pages
           * @description Number of pages in this letter
           */
          pages: number;
          /**
           * Pdf
           * @description URL to the built PDF
           * @default null
           */
          pdf: string | null;
          /**
           * Pdf Status
           * @description Status of the PDF build
           * @enum {string}
           */
          pdf_status: "built" | "deleted";
          /**
           * Postage Service
           * @description Postage service used for this letter
           */
          postage_service: string;
          /**
           * Print Stream
           * @description Identifier for the print stream
           */
          print_stream: string;
          /**
           * Sheets
           * @description Number of sheets for this letter
           */
          sheets: number;
          /**
           * Shipped Date
           * @description Date shipped as UNIX timestamp
           * @default null
           */
          shipped_date: number | null;
          /**
           * Status
           * @description Current status of the letter
           * @enum {string}
           */
          status: "draft" | "waiting_to_print" | "printing" | "enclosing" | "shipping" | "sent" | "cancelled" | "returned" | "failed_wrong_address";
          /**
           * Tracking Number
           * @description Tracking number, if available
           * @default null
           */
          tracking_number: string | null;
      }[];
      /**
       * Metadata
       * @description Arbitrary key-value metadata
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Nudge
       * @description Nudge (offset) applied to letters
       */
      nudge: {
          /**
           * X
           * @description Horizontal nudge in millimetres
           */
          x: number;
          /**
           * Y
           * @description Vertical nudge in millimetres
           */
          y: number;
      };
      /**
       * Object
       * @description Object type, always 'print'
       * @constant
       */
      object: "print";
      /**
       * Pages
       * @description Total number of pages in the job
       */
      pages: number;
      /**
       * Postage
       * @description Postage options for this job
       */
      postage: {
          /**
           * Ideal Envelope
           * @description Envelope size selection
           * @enum {string}
           */
          ideal_envelope: "c4" | "c5" | "c4_plus" | "a4_box";
          /**
           * Mail Date
           * @description Mail date as UNIX timestamp
           */
          mail_date: number;
          /**
           * Service
           * @description Postage service type
           */
          service: string;
      };
      /**
       * Printing
       * @description Printing options for this job
       */
      printing: {
          /**
           * Double Sided
           * @description Double sided printing preference
           * @enum {string}
           */
          double_sided: "no" | "yes" | "mixed";
          /**
           * Double Sided Specific Pages
           * @description Specific page ranges for double sided printing when mixed
           */
          double_sided_specific_pages: string[];
          /**
           * Premium Quality
           * @description Whether to use premium quality paper
           */
          premium_quality: boolean;
      };
      /**
       * Reference
       * @description User-provided reference for this job
       */
      reference: string;
      /**
       * Remove Letters
       * @description Settings for removing certain letters
       */
      remove_letters: {
          /**
           * Series
           * @description Series of letter indices to remove
           */
          series: number[];
          /**
           * With Phrase
           * @description Phrase triggering removal of specific letters
           * @default null
           */
          with_phrase: string | null;
      };
      /**
       * Sheets
       * @description Total number of paper sheets used
       */
      sheets: number;
      /**
       * Splitting
       * @description Document splitting instructions
       */
      splitting: {
          /**
           * Method
           * @description Splitting method for mailed documents
           * @enum {string}
           */
          method: "none" | "split_on_phrase" | "split_on_pages";
          /**
           * Pages
           * @description Number of pages per split, if applicable
           * @default null
           */
          pages: number | null;
          /**
           * Phrase
           * @description Phrase to split on, if applicable
           * @default null
           */
          phrase: string | null;
      };
      /**
       * Team
       * @description Team ID associated with this job, if any
       * @default null
       */
      team: string | null;
      /**
       * Testmode
       * @description Whether this job was created in test mode
       */
      testmode: boolean;
      /**
       * User
       * @description User who created this job, if any
       * @default null
       */
      user: {
          [key: string]: string;
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
 * Type of INTELLIPRINT's INTELLIPRINT_UPDATE_BACKGROUND tool input.
 */
type INTELLIPRINT_UPDATE_BACKGROUND_INPUT = {
  /**
   * Background Id
   * @description ID of the Background to update
   */
  background_id?: string;
  /**
   * Name
   * @description New name for this Background
   * @default null
   */
  name: string | null;
  /**
   * Team
   * @description ID of the Team to assign this Background to
   * @default null
   */
  team: string | null;
};

/**
 * Type of INTELLIPRINT's INTELLIPRINT_UPDATE_BACKGROUND tool output.
 */
type INTELLIPRINT_UPDATE_BACKGROUND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description When the Background was created (UNIX timestamp)
       */
      created: number;
      /**
       * Filename
       * @description Name of the uploaded file
       */
      filename: string;
      /**
       * Id
       * @description Background ID
       */
      id: string;
      /**
       * Name
       * @description Background name
       */
      name: string;
      /**
       * Object
       * @description Always 'background'
       * @constant
       */
      object: "background";
      /**
       * Preview
       * @description URL for a PNG preview image of this Background
       */
      preview: string;
      /**
       * Team
       * @description The Team object this Background belongs to, or null if none
       * @default null
       */
      team: {
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
 * Type map of all available tool input types for toolkit "INTELLIPRINT".
 */
export type INTELLIPRINT_TOOL_INPUTS = {
  CANCEL_DELETE_PRINT_JOB: INTELLIPRINT_CANCEL_DELETE_PRINT_JOB_INPUT
  CREATE_BACKGROUND: INTELLIPRINT_CREATE_BACKGROUND_INPUT
  CREATE_PRINT_JOB: INTELLIPRINT_CREATE_PRINT_JOB_INPUT
  LIST_BACKGROUNDS: INTELLIPRINT_LIST_BACKGROUNDS_INPUT
  LIST_PRINT_JOBS: INTELLIPRINT_LIST_PRINT_JOBS_INPUT
  LIST_TEMPLATES: INTELLIPRINT_LIST_TEMPLATES_INPUT
  MERGE_FILES: INTELLIPRINT_MERGE_FILES_INPUT
  RETRIEVE_BACKGROUND: INTELLIPRINT_RETRIEVE_BACKGROUND_INPUT
  RETRIEVE_PRINT_JOB: INTELLIPRINT_RETRIEVE_PRINT_JOB_INPUT
  UPDATE_BACKGROUND: INTELLIPRINT_UPDATE_BACKGROUND_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INTELLIPRINT".
 */
export type INTELLIPRINT_TOOL_OUTPUTS = {
  CANCEL_DELETE_PRINT_JOB: INTELLIPRINT_CANCEL_DELETE_PRINT_JOB_OUTPUT
  CREATE_BACKGROUND: INTELLIPRINT_CREATE_BACKGROUND_OUTPUT
  CREATE_PRINT_JOB: INTELLIPRINT_CREATE_PRINT_JOB_OUTPUT
  LIST_BACKGROUNDS: INTELLIPRINT_LIST_BACKGROUNDS_OUTPUT
  LIST_PRINT_JOBS: INTELLIPRINT_LIST_PRINT_JOBS_OUTPUT
  LIST_TEMPLATES: INTELLIPRINT_LIST_TEMPLATES_OUTPUT
  MERGE_FILES: INTELLIPRINT_MERGE_FILES_OUTPUT
  RETRIEVE_BACKGROUND: INTELLIPRINT_RETRIEVE_BACKGROUND_OUTPUT
  RETRIEVE_PRINT_JOB: INTELLIPRINT_RETRIEVE_PRINT_JOB_OUTPUT
  UPDATE_BACKGROUND: INTELLIPRINT_UPDATE_BACKGROUND_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INTELLIPRINT toolkit.
 */
export const INTELLIPRINT = {
  slug: "intelliprint",
  tools: {
    /**
     * Tool to delete or cancel an existing Print Job by its ID. Use after confirming the print job ID to remove or refund a job.
     */
    CANCEL_DELETE_PRINT_JOB: "INTELLIPRINT_CANCEL_DELETE_PRINT_JOB",
    /**
     * Tool to create a new Background. Use when you have a background file (and optional name or team) to upload.
     */
    CREATE_BACKGROUND: "INTELLIPRINT_CREATE_BACKGROUND",
    /**
     * Tool to create a new print job. Use when a document is ready to submit (optionally confirming immediately).
     */
    CREATE_PRINT_JOB: "INTELLIPRINT_CREATE_PRINT_JOB",
    /**
     * Tool to list backgrounds with optional filtering and pagination. Use after uploading or managing backgrounds to retrieve current entries. Example: 'List backgrounds for team=team_1234 with limit=50 and skip=10'.
     */
    LIST_BACKGROUNDS: "INTELLIPRINT_LIST_BACKGROUNDS",
    /**
     * Tool to list print jobs with optional filters and pagination. Use after confirming API key.
     */
    LIST_PRINT_JOBS: "INTELLIPRINT_LIST_PRINT_JOBS",
    /**
     * Tool to list all available templates. Use after authenticating API key to browse available templates.
     */
    LIST_TEMPLATES: "INTELLIPRINT_LIST_TEMPLATES",
    /**
     * Tool to merge multiple files into one document. Use when you need a single merged document from separate files.
     */
    MERGE_FILES: "INTELLIPRINT_MERGE_FILES",
    /**
     * Tool to retrieve a specific Background by ID. Use when you need background details before further processing.
     */
    RETRIEVE_BACKGROUND: "INTELLIPRINT_RETRIEVE_BACKGROUND",
    /**
     * Tool to retrieve details of a Print Job by its ID. Use when you have a valid print_id and need full job specifications.
     */
    RETRIEVE_PRINT_JOB: "INTELLIPRINT_RETRIEVE_PRINT_JOB",
    /**
     * Tool to update an existing Background's name or team. Use when you need to change a background after creation. Example: 'Update background bg_123abc to new name'.
     */
    UPDATE_BACKGROUND: "INTELLIPRINT_UPDATE_BACKGROUND",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INTELLIPRINT".
 */
export type INTELLIPRINT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INTELLIPRINT".
 */
export type INTELLIPRINT_TRIGGER_EVENTS = {}
