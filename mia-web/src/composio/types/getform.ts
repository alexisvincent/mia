// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GETFORM's GETFORM_GET_FORM_GET_SUBMISSION tool input.
 */
type GETFORM_GET_FORM_GET_SUBMISSION_INPUT = {
  /**
   * Form Id
   * @description Identifier of the form to retrieve the submission from
   */
  form_id?: string;
  /**
   * Submission Id
   * @description Identifier of the submission to retrieve
   */
  submission_id?: string;
};

/**
 * Type of GETFORM's GETFORM_GET_FORM_GET_SUBMISSION tool output.
 */
type GETFORM_GET_FORM_GET_SUBMISSION_OUTPUT = {
  /**
   * Data
   * @description Details of the requested submission
   */
  data?: {
      /**
       * Files
       * @description List of file URLs; present if the submission had file uploads
       * @default null
       */
      files: string[] | null;
      /**
       * Id
       * @description Numeric submission ID
       */
      id: number;
      /**
       * Submission Date
       * @description ISO-8601 timestamp when the submission was made
       */
      submissionDate: string;
  } & {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description True if the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GETFORM's GETFORM_GET_FORM_GET_SUBMISSIONS tool input.
 */
type GETFORM_GET_FORM_GET_SUBMISSIONS_INPUT = {
  /**
   * Files
   * @description Whether to include uploaded file URLs in each submission when set to true
   * @default false
   */
  files: boolean | null;
  /**
   * Form Id
   * @description Identifier of the form to retrieve submissions for
   */
  form_id?: string;
  /**
   * Page
   * @description Page number to retrieve; starts at 1 if provided
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Full-text search term to filter submissions
   * @default null
   */
  query: string | null;
  /**
   * Size
   * @description Number of submissions per page; defaults to 10 if omitted
   * @default null
   */
  size: number | null;
  /**
   * Timezone
   * @description IANA timezone for formatting submission dates (e.g., Europe/Istanbul)
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of GETFORM's GETFORM_GET_FORM_GET_SUBMISSIONS tool output.
 */
type GETFORM_GET_FORM_GET_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description Container for submissions and pagination info
   */
  data?: {
      /**
       * Id
       * @description Form identifier echoed by the API
       */
      id: string;
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Count
           * @description Number of items on the current page
           */
          count: number;
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * First Page
           * @description First page index (usually 1)
           */
          firstPage: number;
          /**
           * Last Page
           * @description Last page index
           */
          lastPage: number;
          /**
           * Size
           * @description Page size
           */
          size: number;
          /**
           * Total
           * @description Total number of submissions across all pages
           */
          total: number;
      };
      /**
       * Submissions
       * @description List of submissions
       */
      submissions: ({
          /**
           * Files
           * @description List of file URLs; present only if files=true
           * @default null
           */
          files: string[] | null;
          /**
           * Id
           * @description Numeric submission ID
           */
          id: number;
          /**
           * Submission Date
           * @description ISO-8601 timestamp of when the form was submitted
           */
          submissionDate: string;
      } & {
          [key: string]: unknown;
      })[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description True if the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GETFORM's GETFORM_GET_FORM_SUBMIT_FORM tool input.
 */
type GETFORM_GET_FORM_SUBMIT_FORM_INPUT = {
  /**
   *  Gotcha
   * @description Honeypot field value; leave empty (spam filter).
   * @default null
   */
  _gotcha: string | null;
  /**
   * Accept Json
   * @description Whether to set Accept header to application/json for a JSON response instead of redirect
   * @default false
   */
  accept_json: boolean;
  /**
   * Data
   * @description Key/value pairs representing form fields to submit.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Files
   * @description Optional list of files to upload; will be posted as multipart/form-data
   * @default null
   */
  files: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  }[] | null;
  /**
   * Form Id
   * @description Identifier of the Getform form endpoint (as in /f/{form_id})
   */
  form_id?: string;
  /**
   * G Recaptcha Response
   * @description reCAPTCHA token for spam protection (if enabled on the form).
   * @default null
   */
  "g-recaptcha-response": string | null;
};

/**
 * Type of GETFORM's GETFORM_GET_FORM_SUBMIT_FORM tool output.
 */
type GETFORM_GET_FORM_SUBMIT_FORM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Raw response body (JSON dict or HTML/text)
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Redirected
       * @description True if submission triggered a redirect (HTML form flow)
       * @default null
       */
      redirected: boolean | null;
      /**
       * Status Code
       * @description HTTP status code returned by the endpoint
       */
      status_code: number;
      /**
       * Success
       * @description True if submission succeeded when JSON response is requested
       * @default null
       */
      success: boolean | null;
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
 * Type map of all available tool input types for toolkit "GETFORM".
 */
export type GETFORM_TOOL_INPUTS = {
  GET_FORM_GET_SUBMISSION: GETFORM_GET_FORM_GET_SUBMISSION_INPUT
  GET_FORM_GET_SUBMISSIONS: GETFORM_GET_FORM_GET_SUBMISSIONS_INPUT
  GET_FORM_SUBMIT_FORM: GETFORM_GET_FORM_SUBMIT_FORM_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GETFORM".
 */
export type GETFORM_TOOL_OUTPUTS = {
  GET_FORM_GET_SUBMISSION: GETFORM_GET_FORM_GET_SUBMISSION_OUTPUT
  GET_FORM_GET_SUBMISSIONS: GETFORM_GET_FORM_GET_SUBMISSIONS_OUTPUT
  GET_FORM_SUBMIT_FORM: GETFORM_GET_FORM_SUBMIT_FORM_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GETFORM toolkit.
 */
export const GETFORM = {
  slug: "getform",
  tools: {
    /**
     * Tool to retrieve a specific submission by its ID. Use when you have both form_id and submission_id and need that single record.
     */
    GET_FORM_GET_SUBMISSION: "GETFORM_GET_FORM_GET_SUBMISSION",
    /**
     * Tool to retrieve submissions for a specific form. Use when you have a form ID and need paginated, searchable submissions optionally including file URLs.
     */
    GET_FORM_GET_SUBMISSIONS: "GETFORM_GET_FORM_GET_SUBMISSIONS",
    /**
     * Tool to submit form data and files to a Getform endpoint. Use when you need to post fields, files, optional reCAPTCHA or honeypot to a specific form ID.
     */
    GET_FORM_SUBMIT_FORM: "GETFORM_GET_FORM_SUBMIT_FORM",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GETFORM".
 */
export type GETFORM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GETFORM".
 */
export type GETFORM_TRIGGER_EVENTS = {}
