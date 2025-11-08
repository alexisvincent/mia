// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CUSTOMJS's CUSTOMJS_AUTHENTICATE_API_KEY tool input.
 */
type CUSTOMJS_AUTHENTICATE_API_KEY_INPUT = {
  /**
   * Api Key
   * @description CustomJS API key to authenticate.
   */
  api_key?: string;
};

/**
 * Type of CUSTOMJS's CUSTOMJS_AUTHENTICATE_API_KEY tool output.
 */
type CUSTOMJS_AUTHENTICATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description Authenticated API key.
       */
      apiKey: string;
      /**
       * Api Key Data
       * @description Metadata about the API key.
       */
      apiKeyData: {
          /**
           * Id
           * @description The API key identifier.
           */
          id: string;
          /**
           * Value
           * @description The API key value.
           */
          value: string;
      };
      /**
       * Created At
       * @description API key creation timestamp.
       */
      createdAt: number;
      /**
       * Date Created
       * @description Date when the API key was created.
       */
      dateCreated: number;
      /**
       * Exp
       * @description JWT expiration timestamp.
       */
      exp: number;
      /**
       * Iat
       * @description JWT issued-at timestamp.
       */
      iat: number;
      /**
       * Jwt
       * @description JWT token data.
       */
      jwt: {
          /**
           * At Hash
           * @description Access token hash.
           */
          at_hash: string;
          /**
           * Aud
           * @description JWT audience.
           */
          aud: string;
          /**
           * Auth Time
           * @description Authentication timestamp.
           */
          auth_time: number;
          /**
           * Cognito:Username
           * @description Cognito username.
           */
          "cognito:username": string;
          /**
           * Email
           * @description User email.
           */
          email: string;
          /**
           * Email Verified
           * @description Whether the email is verified.
           */
          email_verified: boolean;
          /**
           * Iss
           * @description JWT issuer.
           */
          iss: string;
          /**
           * Issuer
           * @description Token issuer.
           */
          issuer: string;
          /**
           * Jti
           * @description JWT ID.
           */
          jti: string;
          /**
           * Origin Jti
           * @description Original JWT ID.
           */
          origin_jti: string;
          /**
           * Primary
           * @description Primary account flag.
           */
          primary: boolean;
          /**
           * Provider Name
           * @description Authentication provider name.
           */
          providerName: string;
          /**
           * Provider Type
           * @description Type of authentication provider.
           */
          providerType: string;
          /**
           * Sub
           * @description Subject identifier.
           */
          sub: string;
          /**
           * Token Use
           * @description Type of token.
           */
          token_use: string;
          /**
           * User Id
           * @description User identifier.
           */
          userId: string;
      };
      /**
       * Max Request Count
       * @description Maximum number of requests allowed.
       */
      maxRequestCount: number;
      /**
       * Name
       * @description Workspace name.
       */
      name: string;
      /**
       * Timestamp
       * @description Current server timestamp.
       */
      timestamp: number;
      /**
       * User Id
       * @description User identifier.
       */
      userId: string;
      /**
       * Workspace Id
       * @description Workspace identifier.
       */
      workspaceId: string;
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
 * Type of CUSTOMJS's CUSTOMJS_CONVERT_HTML_TO_PDF tool input.
 */
type CUSTOMJS_CONVERT_HTML_TO_PDF_INPUT = {
  /**
   * Code
   * @description JavaScript snippet that invokes the HTML2PDF converter
   */
  code?: string;
  /**
   * Input
   * @description HTML content to convert to PDF
   */
  input?: string;
  /**
   * Return Binary
   * @description Must be 'true' to instruct API to return binary PDF data
   * @default true
   * @constant
   */
  returnBinary: "true";
};

/**
 * Type of CUSTOMJS's CUSTOMJS_CONVERT_HTML_TO_PDF tool output.
 */
type CUSTOMJS_CONVERT_HTML_TO_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pdf
       * Format: binary
       * @description Raw PDF bytes of the generated document
       */
      pdf: string;
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
 * Type of CUSTOMJS's CUSTOMJS_CONVERT_HTML_TO_PNG tool input.
 */
type CUSTOMJS_CONVERT_HTML_TO_PNG_INPUT = {
  /**
   * Html
   * @description HTML content to convert into a PNG image
   */
  html?: string;
};

/**
 * Type of CUSTOMJS's CUSTOMJS_CONVERT_HTML_TO_PNG tool output.
 */
type CUSTOMJS_CONVERT_HTML_TO_PNG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Png Base64
       * @description Base64-encoded PNG image data
       */
      png_base64: string;
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
 * Type of CUSTOMJS's CUSTOMJS_CREATE_SCREENSHOT tool input.
 */
type CUSTOMJS_CREATE_SCREENSHOT_INPUT = {
  /**
   * Url
   * @description The URL of the webpage to capture a screenshot from
   */
  url?: string;
};

/**
 * Type of CUSTOMJS's CUSTOMJS_CREATE_SCREENSHOT tool output.
 */
type CUSTOMJS_CREATE_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Screenshot Base64
       * @description Base64-encoded image data of the screenshot
       */
      screenshot_base64: string;
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
 * Type of CUSTOMJS's CUSTOMJS_MERGE_PDFS tool input.
 */
type CUSTOMJS_MERGE_PDFS_INPUT = {
  /**
   * Code
   * @description JavaScript snippet that downloads each URL as base64 and invokes PDF_MERGE. For example: async (input) => { const files = await Promise.all(input.map(async url => { const r = await fetch(url); const b = await r.arrayBuffer(); return Buffer.from(b).toString('base64'); })); return PDF_MERGE(files); }
   */
  code?: string;
  /**
   * Input
   * @description List of HTTP URLs pointing to the PDF files to merge
   */
  input?: string[];
  /**
   * Return Binary
   * @description Must be "true" to receive the merged PDF as binary
   * @constant
   */
  returnBinary?: "true";
};

/**
 * Type of CUSTOMJS's CUSTOMJS_MERGE_PDFS tool output.
 */
type CUSTOMJS_MERGE_PDFS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Merged Pdf
       * Format: binary
       * @description Binary content of the merged PDF file
       */
      merged_pdf: string;
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
 * Type of CUSTOMJS's CUSTOMJS_RUN_PUPPETEER_SCRIPT tool input.
 */
type CUSTOMJS_RUN_PUPPETEER_SCRIPT_INPUT = {
  /**
   * Code
   * @description Wrapper that invokes the PUPPETEER utility, e.g., "const { PUPPETEER } = require('./utils'); return PUPPETEER(input);"
   */
  code?: string;
  /**
   * Input
   * @description Puppeteer code to execute, e.g., "await page.goto('https://example.com');"
   */
  input?: string;
  /**
   * Return Binary
   * @description Whether to return binary PNG data; set to true to receive screenshot image.
   * @default false
   */
  returnBinary: boolean;
};

/**
 * Type of CUSTOMJS's CUSTOMJS_RUN_PUPPETEER_SCRIPT tool output.
 */
type CUSTOMJS_RUN_PUPPETEER_SCRIPT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Binary
       * Format: binary
       * @description PNG image data as raw bytes.
       */
      binary: string;
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
 * Type map of all available tool input types for toolkit "CUSTOMJS".
 */
export type CUSTOMJS_TOOL_INPUTS = {
  AUTHENTICATE_API_KEY: CUSTOMJS_AUTHENTICATE_API_KEY_INPUT
  CONVERT_HTML_TO_PDF: CUSTOMJS_CONVERT_HTML_TO_PDF_INPUT
  CONVERT_HTML_TO_PNG: CUSTOMJS_CONVERT_HTML_TO_PNG_INPUT
  CREATE_SCREENSHOT: CUSTOMJS_CREATE_SCREENSHOT_INPUT
  MERGE_PDFS: CUSTOMJS_MERGE_PDFS_INPUT
  RUN_PUPPETEER_SCRIPT: CUSTOMJS_RUN_PUPPETEER_SCRIPT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CUSTOMJS".
 */
export type CUSTOMJS_TOOL_OUTPUTS = {
  AUTHENTICATE_API_KEY: CUSTOMJS_AUTHENTICATE_API_KEY_OUTPUT
  CONVERT_HTML_TO_PDF: CUSTOMJS_CONVERT_HTML_TO_PDF_OUTPUT
  CONVERT_HTML_TO_PNG: CUSTOMJS_CONVERT_HTML_TO_PNG_OUTPUT
  CREATE_SCREENSHOT: CUSTOMJS_CREATE_SCREENSHOT_OUTPUT
  MERGE_PDFS: CUSTOMJS_MERGE_PDFS_OUTPUT
  RUN_PUPPETEER_SCRIPT: CUSTOMJS_RUN_PUPPETEER_SCRIPT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CUSTOMJS toolkit.
 */
export const CUSTOMJS = {
  slug: "customjs",
  tools: {
    /**
     * Tool to authenticate a CustomJS API key. Use when verifying a user's API key before making further requests.
     */
    AUTHENTICATE_API_KEY: "CUSTOMJS_AUTHENTICATE_API_KEY",
    /**
     * Tool to convert HTML to a PDF document. Use when you need to generate a PDF from raw HTML. Returns raw PDF bytes suitable for download or storage.
     */
    CONVERT_HTML_TO_PDF: "CUSTOMJS_CONVERT_HTML_TO_PDF",
    /**
     * Tool to convert HTML string to PNG image. Use when you need a PNG from HTML after preparing your markup.
     */
    CONVERT_HTML_TO_PNG: "CUSTOMJS_CONVERT_HTML_TO_PNG",
    /**
     * Tool to capture a screenshot of a webpage. Use when you need a visual snapshot of a URL.
     */
    CREATE_SCREENSHOT: "CUSTOMJS_CREATE_SCREENSHOT",
    /**
     * Tool to merge multiple PDF files into a single PDF. Use when you have multiple PDF URLs and want one combined PDF.
     */
    MERGE_PDFS: "CUSTOMJS_MERGE_PDFS",
    /**
     * Tool to run a Puppeteer script and capture a screenshot. Use when automating headless browser tasks and needing a PNG output. Use after confirming the script logic.
     */
    RUN_PUPPETEER_SCRIPT: "CUSTOMJS_RUN_PUPPETEER_SCRIPT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CUSTOMJS".
 */
export type CUSTOMJS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CUSTOMJS".
 */
export type CUSTOMJS_TRIGGER_EVENTS = {}
