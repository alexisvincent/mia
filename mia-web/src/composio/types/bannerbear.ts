// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BANNERBEAR's BANNERBEAR_GET_ACCOUNT_INFO tool input.
 */
type BANNERBEAR_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of BANNERBEAR's BANNERBEAR_GET_ACCOUNT_INFO tool output.
 */
type BANNERBEAR_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Quota
       * @description Total API quota
       * @default null
       */
      api_quota: number | null;
      /**
       * Api Usage
       * @description Current API usage count
       * @default null
       */
      api_usage: number | null;
      /**
       * Created At
       * @description Account creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Current Project
       * @description Information about the current project
       * @default null
       */
      current_project: {
          [key: string]: unknown;
      } | null;
      /**
       * Paid Plan Name
       * @description Name of the current subscription plan
       * @default null
       */
      paid_plan_name: string | null;
      /**
       * Uid
       * @description Unique identifier for the account
       * @default null
       */
      uid: string | null;
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
 * Type of BANNERBEAR's BANNERBEAR_GET_FONTS tool input.
 */
type BANNERBEAR_GET_FONTS_INPUT = object;

/**
 * Type of BANNERBEAR's BANNERBEAR_GET_FONTS tool output.
 */
type BANNERBEAR_GET_FONTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom
       * @description List of available custom fonts
       */
      Custom?: string[];
      /**
       * International
       * @description List of available international fonts
       */
      International?: string[];
      /**
       * Novelty
       * @description List of available novelty fonts
       */
      Novelty?: string[];
      /**
       * Sans Serif
       * @description List of available sans serif fonts
       */
      "Sans Serif"?: string[];
      /**
       * Serif
       * @description List of available serif fonts
       */
      Serif?: string[];
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
 * Type of BANNERBEAR's BANNERBEAR_GET_SIGNED_BASES tool input.
 */
type BANNERBEAR_GET_SIGNED_BASES_INPUT = {
  /**
   * Template Uid
   * @description The unique identifier of the template
   */
  template_uid?: string;
};

/**
 * Type of BANNERBEAR's BANNERBEAR_GET_SIGNED_BASES tool output.
 */
type BANNERBEAR_GET_SIGNED_BASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signed Bases
       * @description List of signed bases associated with the template
       */
      signed_bases: {
          /**
           * Base Url
           * @description The base URL that can be used with the Signed URL feature
           */
          base_url: string;
          /**
           * Created At
           * Format: date-time
           * @description The creation timestamp of the signed base
           */
          created_at: string;
          /**
           * Example Url
           * @description An example URL showing how to use the signed base with modifications
           */
          example_url: string;
          /**
           * Uid
           * @description The unique identifier of the signed base
           */
          uid: string;
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
 * Type of BANNERBEAR's BANNERBEAR_GET_TEMPLATE_SET tool input.
 */
type BANNERBEAR_GET_TEMPLATE_SET_INPUT = {
  /**
   * Uid
   * @description The unique identifier (UID) of the template set to retrieve.
   */
  uid?: string;
};

/**
 * Type of BANNERBEAR's BANNERBEAR_GET_TEMPLATE_SET tool output.
 */
type BANNERBEAR_GET_TEMPLATE_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp of the template set.
       */
      created_at: string;
      /**
       * Modifications
       * @description Available modifications for the templates in this set.
       * @default null
       */
      modifications: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description The name of the template set.
       */
      name: string;
      /**
       * Templates
       * @description List of templates included in this template set.
       */
      templates: {
          /**
           * Name
           * @description The name of the template.
           */
          name: string;
          /**
           * Preview Url
           * @description A thumbnail of the latest version of the template.
           * @default null
           */
          preview_url: string | null;
          /**
           * Uid
           * @description The unique identifier of the template.
           */
          uid: string;
      }[];
      /**
       * Uid
       * @description The unique identifier of the template set.
       */
      uid: string;
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
 * Type of BANNERBEAR's BANNERBEAR_JOIN_PDFS tool input.
 */
type BANNERBEAR_JOIN_PDFS_INPUT = {
  /**
   * Pdf Urls
   * @description List of URLs to the PDF files that need to be merged
   */
  pdf_urls?: string[];
  /**
   * Webhook Url
   * @description Optional webhook URL to receive notification when merging is complete
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of BANNERBEAR's BANNERBEAR_JOIN_PDFS tool output.
 */
type BANNERBEAR_JOIN_PDFS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Joined Pdf Url
       * @description URL to the merged PDF file (available when status is completed)
       * @default null
       */
      joined_pdf_url: string | null;
      /**
       * Pdf Inputs
       * @description List of input PDF URLs that were merged
       */
      pdf_inputs: string[];
      /**
       * Self
       * @description API endpoint URL for this merge operation
       */
      self: string;
      /**
       * Status
       * @description Status of the merge operation (pending, completed, failed)
       */
      status: string;
      /**
       * Uid
       * @description Unique identifier for the merge operation
       */
      uid: string;
      /**
       * Webhook Response Code
       * @description HTTP response code from webhook if used
       * @default null
       */
      webhook_response_code: number | null;
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
 * Type of BANNERBEAR's BANNERBEAR_LIST_IMAGES tool input.
 */
type BANNERBEAR_LIST_IMAGES_INPUT = {
  /**
   * Limit
   * @description The API returns 25 items per page by default but you can request up to 100 using this parameter.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description The page of results you would like to retrieve. The API returns 25 items per page.
   * @default null
   */
  page: number | null;
};

/**
 * Type of BANNERBEAR's BANNERBEAR_LIST_IMAGES tool output.
 */
type BANNERBEAR_LIST_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description List of images in the project
       */
      images: {
          /**
           * Created At
           * @description Timestamp of when the image was created
           */
          created_at: string;
          /**
           * Image Url
           * @description The final, rendered image url
           * @default null
           */
          image_url: string | null;
          /**
           * Metadata
           * @description Any metadata stored with the image
           * @default null
           */
          metadata: string | null;
          /**
           * Modifications
           * @description List of modifications made to the image
           * @default []
           */
          modifications: {
              /**
               * Background
               * @description The background color that was used
               * @default null
               */
              background: string | null;
              /**
               * Color
               * @description The color that was used
               * @default null
               */
              color: string | null;
              /**
               * Image Url
               * @description The image URL that was used
               * @default null
               */
              image_url: string | null;
              /**
               * Name
               * @description The name of the layer that was modified
               */
              name: string;
              /**
               * Text
               * @description The text that was used
               * @default null
               */
              text: string | null;
          }[];
          /**
           * Pdf Url
           * @description Url to the generated PDF, if render_pdf was set to true
           * @default null
           */
          pdf_url: string | null;
          /**
           * Self
           * @description The permalink to this object
           */
          self: string;
          /**
           * Status
           * @description The current status of the image; pending, completed or failed
           */
          status: string;
          /**
           * Template
           * @description The template ID used to create the image
           */
          template: string;
          /**
           * Uid
           * @description The unique ID for this object
           */
          uid: string;
          /**
           * Webhook Response Code
           * @description The HTTP response code received by the webhook_url
           * @default null
           */
          webhook_response_code: number | null;
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
 * Type of BANNERBEAR's BANNERBEAR_LIST_TEMPLATES tool input.
 */
type BANNERBEAR_LIST_TEMPLATES_INPUT = {
  /**
   * Extended
   * @description Set to true to return an extended response including current layer defaults.
   * @default null
   */
  extended: boolean | null;
  /**
   * Limit
   * @description The API returns 25 items per page by default but you can request up to 100 using this parameter.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description List items that partially match this name.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description The page of results to retrieve. The API returns 25 items per page.
   * @default null
   */
  page: number | null;
  /**
   * Tag
   * @description List items only with this tag.
   * @default null
   */
  tag: string | null;
};

/**
 * Type of BANNERBEAR's BANNERBEAR_LIST_TEMPLATES tool output.
 */
type BANNERBEAR_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of templates in the project.
       */
      templates: {
          /**
           * Available Modifications
           * @description A list of available modifications for this template.
           */
          available_modifications?: {
              /**
               * Image Url
               * @description The current image URL if this is an image layer.
               * @default null
               */
              image_url: string | null;
              /**
               * Name
               * @description The name of the layer that can be modified.
               */
              name: string;
              /**
               * Text
               * @description The current text if this is a text layer.
               * @default null
               */
              text: string | null;
          }[] | null;
          /**
           * Created At
           * @description The creation timestamp of the template.
           */
          created_at: string;
          /**
           * Height
           * @description The height of the template.
           */
          height: number;
          /**
           * Name
           * @description The name of this template.
           */
          name: string;
          /**
           * Preview Url
           * @description A thumbnail of the latest version of the template.
           * @default null
           */
          preview_url: string | null;
          /**
           * Self
           * @description The permalink to this template.
           */
          self: string;
          /**
           * Tags
           * @description An array of tags for this template.
           */
          tags?: string[];
          /**
           * Uid
           * @description The unique ID for this template.
           */
          uid: string;
          /**
           * Width
           * @description The width of the template.
           */
          width: number;
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
 * Type of BANNERBEAR's BANNERBEAR_LIST_VIDEOS tool input.
 */
type BANNERBEAR_LIST_VIDEOS_INPUT = {
  /**
   * Limit
   * @description The API returns 25 items per page by default but you can request up to 100 using this parameter.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description The page of results to retrieve. The API returns 25 items per page.
   * @default null
   */
  page: number | null;
};

/**
 * Type of BANNERBEAR's BANNERBEAR_LIST_VIDEOS tool output.
 */
type BANNERBEAR_LIST_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Videos
       * @description List of videos in the project
       */
      videos: {
          /**
           * Created At
           * @description Timestamp of when the video was created
           */
          created_at: string;
          /**
           * Metadata
           * @description Any metadata stored with the video
           * @default null
           */
          metadata: string | null;
          /**
           * Modifications
           * @description List of modifications made to the video
           * @default []
           */
          modifications: {
              /**
               * Background
               * @description The background color that was used
               * @default null
               */
              background: string | null;
              /**
               * Color
               * @description The color that was used
               * @default null
               */
              color: string | null;
              /**
               * Name
               * @description The name of the layer that was modified
               */
              name: string;
              /**
               * Text
               * @description The text that was used
               * @default null
               */
              text: string | null;
              /**
               * Video Url
               * @description The video URL that was used
               * @default null
               */
              video_url: string | null;
          }[];
          /**
           * Preview Url
           * @description URL for video preview
           * @default null
           */
          preview_url: string | null;
          /**
           * Self
           * @description The permalink to this video
           */
          self: string;
          /**
           * Status
           * @description The current status of the video; pending, processing, completed or failed
           */
          status: string;
          /**
           * Template
           * @description The template ID used to create the video
           */
          template: string;
          /**
           * Uid
           * @description The unique ID for this video
           */
          uid: string;
          /**
           * Updated At
           * @description Timestamp of when the video was last updated
           */
          updated_at: string;
          /**
           * Video Url
           * @description The final, rendered video URL
           * @default null
           */
          video_url: string | null;
          /**
           * Webhook Response Code
           * @description The HTTP response code received by the webhook_url
           * @default null
           */
          webhook_response_code: number | null;
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
 * Type map of all available tool input types for toolkit "BANNERBEAR".
 */
export type BANNERBEAR_TOOL_INPUTS = {
  GET_ACCOUNT_INFO: BANNERBEAR_GET_ACCOUNT_INFO_INPUT
  GET_FONTS: BANNERBEAR_GET_FONTS_INPUT
  GET_SIGNED_BASES: BANNERBEAR_GET_SIGNED_BASES_INPUT
  GET_TEMPLATE_SET: BANNERBEAR_GET_TEMPLATE_SET_INPUT
  JOIN_PDFS: BANNERBEAR_JOIN_PDFS_INPUT
  LIST_IMAGES: BANNERBEAR_LIST_IMAGES_INPUT
  LIST_TEMPLATES: BANNERBEAR_LIST_TEMPLATES_INPUT
  LIST_VIDEOS: BANNERBEAR_LIST_VIDEOS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BANNERBEAR".
 */
export type BANNERBEAR_TOOL_OUTPUTS = {
  GET_ACCOUNT_INFO: BANNERBEAR_GET_ACCOUNT_INFO_OUTPUT
  GET_FONTS: BANNERBEAR_GET_FONTS_OUTPUT
  GET_SIGNED_BASES: BANNERBEAR_GET_SIGNED_BASES_OUTPUT
  GET_TEMPLATE_SET: BANNERBEAR_GET_TEMPLATE_SET_OUTPUT
  JOIN_PDFS: BANNERBEAR_JOIN_PDFS_OUTPUT
  LIST_IMAGES: BANNERBEAR_LIST_IMAGES_OUTPUT
  LIST_TEMPLATES: BANNERBEAR_LIST_TEMPLATES_OUTPUT
  LIST_VIDEOS: BANNERBEAR_LIST_VIDEOS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BANNERBEAR toolkit.
 */
export const BANNERBEAR = {
  slug: "bannerbear",
  tools: {
    /**
     * This tool allows you to check your bannerbear account status, including quota levels and current usage. the endpoint returns information about your account status, paid plan, api usage, and quota.
     */
    GET_ACCOUNT_INFO: "BANNERBEAR_GET_ACCOUNT_INFO",
    /**
     * This tool retrieves a list of all available fonts in bannerbear. the fonts are categorized into serif, sans serif, novelty, international, and custom, and can be used to verify font availability prior to creating or modifying images.
     */
    GET_FONTS: "BANNERBEAR_GET_FONTS",
    /**
     * This tool retrieves a list of signed bases for a specific template. signed bases are used to generate on-demand images using encrypted url parameters. the endpoint returns a list of base urls that can be used with the signed url feature.
     */
    GET_SIGNED_BASES: "BANNERBEAR_GET_SIGNED_BASES",
    /**
     * This tool retrieves detailed information about a specific template set using its unique identifier (uid). template sets are sets of templates that you group together in the bannerbear dashboard. it provides comprehensive details about the template set including its name, available modifications, and the list of templates inside the set.
     */
    GET_TEMPLATE_SET: "BANNERBEAR_GET_TEMPLATE_SET",
    /**
     * This tool allows users to merge multiple pdf files into a single pdf document by accepting an array of pdf urls, sending a post request to the bannerbear api, and returning the unique identifier, status, and url of the merged pdf.
     */
    JOIN_PDFS: "BANNERBEAR_JOIN_PDFS",
    /**
     * Lists all images inside a bannerbear project. this endpoint allows you to retrieve a paginated list of all images that have been created in your project.
     */
    LIST_IMAGES: "BANNERBEAR_LIST_IMAGES",
    /**
     * This action retrieves a list of all templates available in your bannerbear project. it returns an array of template objects including properties like uid, name, dimensions, creation and update timestamps, template type, preview url, and modifications. the tool is used for listing templates, retrieving template uids for subsequent actions such as image or video creation, and managing project templates.
     */
    LIST_TEMPLATES: "BANNERBEAR_LIST_TEMPLATES",
    /**
     * This action retrieves a list of all videos created in your bannerbear account. it returns an array of video objects including properties like uid, status, timestamps, video and preview urls, as well as template and modification details. the tool is used for listing videos, monitoring video status, and managing project videos.
     */
    LIST_VIDEOS: "BANNERBEAR_LIST_VIDEOS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BANNERBEAR".
 */
export type BANNERBEAR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BANNERBEAR".
 */
export type BANNERBEAR_TRIGGER_EVENTS = {}
