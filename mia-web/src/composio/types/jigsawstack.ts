// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of JIGSAWSTACK's JIGSAWSTACK_IMAGE_GENERATION tool input.
 */
type JIGSAWSTACK_IMAGE_GENERATION_INPUT = {
  /**
   * AdvanceConfig
   * @description Advanced generation options
   * @default null
   */
  advance_config: {
      /**
       * Guidance
       * @description Prompt adherence strength (1-28)
       * @default null
       */
      guidance: number | null;
      /**
       * Negative Prompt
       * @description Undesired content description
       * @default null
       */
      negative_prompt: string | null;
      /**
       * Seed
       * @description Seed for deterministic generation
       * @default null
       */
      seed: number | null;
  } | null;
  /**
   * Aspect Ratio
   * @description Aspect ratio of the generated image
   * @default 1:1
   * @enum {string}
   */
  aspect_ratio: "1:1" | "16:9" | "21:9" | "3:2" | "2:3" | "4:5" | "5:4" | "3:4" | "4:3" | "9:16" | "9:21";
  /**
   * File Store Key
   * @description Key to store generated image in file storage
   * @default null
   */
  file_store_key: string | null;
  /**
   * Height
   * @description Image height in pixels (256-1920)
   * @default null
   */
  height: number | null;
  /**
   * Output Format
   * @description Image output format
   * @default png
   * @enum {string}
   */
  output_format: "png" | "svg";
  /**
   * Prompt
   * @description Text prompt to generate image (1-5000 characters)
   */
  prompt?: string;
  /**
   * Return Type
   * @description Response return type
   * @default url
   * @enum {string}
   */
  return_type: "url" | "base64" | "binary";
  /**
   * Steps
   * @description Denoising steps; higher = better quality, slower
   * @default 4
   */
  steps: number | null;
  /**
   * Url
   * @description Destination URL to send the generated image
   * @default null
   */
  url: string | null;
  /**
   * Width
   * @description Image width in pixels (256-1920)
   * @default null
   */
  width: number | null;
};

/**
 * Type of JIGSAWSTACK's JIGSAWSTACK_IMAGE_GENERATION tool output.
 */
type JIGSAWSTACK_IMAGE_GENERATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Usage
       * @description Usage metrics of the API call
       * @default null
       */
      _usage: {
          /**
           * Inference Time Tokens
           * @description Inference time in token units
           */
          inference_time_tokens: number;
          /**
           * Input Tokens
           * @description Number of input tokens used
           */
          input_tokens: number;
          /**
           * Output Tokens
           * @description Number of output tokens used
           */
          output_tokens: number;
          /**
           * Total Tokens
           * @description Total tokens processed
           */
          total_tokens: number;
      } | null;
      /**
       * FileDownloadable
       * @description Binary image content (for binary return_type)
       * @default null
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
      } | null;
      /**
       * Success
       * @description Indicates request success
       * @default null
       */
      success: boolean | null;
      /**
       * Url
       * @description Temporary URL to the generated image
       * @default null
       */
      url: string | null;
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
 * Type of JIGSAWSTACK's JIGSAWSTACK_SENTIMENT_ANALYSIS tool input.
 */
type JIGSAWSTACK_SENTIMENT_ANALYSIS_INPUT = {
  /**
   * Text
   * @description The text content to analyze for sentiment and emotion.
   */
  text?: string;
};

/**
 * Type of JIGSAWSTACK's JIGSAWSTACK_SENTIMENT_ANALYSIS tool output.
 */
type JIGSAWSTACK_SENTIMENT_ANALYSIS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Usage
       * @description Usage/tokens information for the API call.
       */
      _usage: {
          /**
           * Inference Time Tokens
           * @description Tokens processed during inference time.
           */
          inference_time_tokens: number;
          /**
           * Input Tokens
           * @description Number of input tokens processed.
           */
          input_tokens: number;
          /**
           * Output Tokens
           * @description Number of output tokens generated.
           */
          output_tokens: number;
          /**
           * Total Tokens
           * @description Total tokens used (input + output).
           */
          total_tokens: number;
      };
      /**
       * Sentiment
       * @description Container for sentiment analysis results.
       */
      sentiment: {
          /**
           * Emotion
           * @description Overall emotional tone of the text.
           */
          emotion: string;
          /**
           * Score
           * @description Sentiment intensity score (0–1, higher is more positive).
           */
          score: number;
          /**
           * Sentences
           * @description List of sentence-level analysis entries.
           */
          sentences: {
              /**
               * Emotion
               * @description Emotion detected for the sentence.
               */
              emotion: string;
              /**
               * Score
               * @description Sentiment intensity score for the sentence (0–1).
               */
              score: number;
              /**
               * Sentiment
               * @description Sentiment classification for this sentence.
               * @enum {string}
               */
              sentiment: "positive" | "negative" | "neutral";
              /**
               * Text
               * @description Sentence text.
               */
              text: string;
          }[];
          /**
           * Sentiment
           * @description Overall sentiment classification.
           * @enum {string}
           */
          sentiment: "positive" | "negative" | "neutral";
      };
      /**
       * Success
       * @description Indicates whether the call was successful.
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
 * Type of JIGSAWSTACK's JIGSAWSTACK_TEXT_TO_SPEECH tool input.
 */
type JIGSAWSTACK_TEXT_TO_SPEECH_INPUT = {
  /**
   * Accent
   * @description Accent identifier for standard TTS. Ignored when using voice cloning.
   * @default null
   */
  accent: string | null;
  /**
   * Speaker Clone File Store Key
   * @description File store key for an uploaded audio sample for voice cloning; mutually exclusive with URL.
   * @default null
   */
  speaker_clone_file_store_key: string | null;
  /**
   * Speaker Clone Url
   * Format: uri
   * @description Public URL to an audio sample for voice cloning; mutually exclusive with file_store_key.
   * @default null
   */
  speaker_clone_url: string | null;
  /**
   * Text
   * @description Text to generate speech from. Standard TTS supports 5-1500 characters; voice cloning supports 5-500 characters.
   */
  text?: string;
};

/**
 * Type of JIGSAWSTACK's JIGSAWSTACK_TEXT_TO_SPEECH tool output.
 */
type JIGSAWSTACK_TEXT_TO_SPEECH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Synthesized speech audio (MP3).
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of JIGSAWSTACK's JIGSAWSTACK_WEB_SEARCH tool input.
 */
type JIGSAWSTACK_WEB_SEARCH_INPUT = {
  /**
   * Ai Overview
   * @description Include AI-generated overview of the results.
   * @default true
   */
  ai_overview: boolean;
  /**
   * Byo Urls
   * @description Restrict results to these URLs.
   * @default null
   */
  byo_urls: string[] | null;
  /**
   * Country Code
   * @description Country code for geo-aware search (e.g., 'USA', 'GBR').
   * @default null
   */
  country_code: string | null;
  /**
   * Query
   * @description The search value (max 400 characters).
   */
  query?: string;
  /**
   * Safe Search
   * @description Safe search level.
   * @default moderate
   * @enum {string}
   */
  safe_search: "moderate" | "strict" | "off";
  /**
   * Spell Check
   * @description Whether to perform spell check on the query.
   * @default true
   */
  spell_check: boolean;
};

/**
 * Type of JIGSAWSTACK's JIGSAWSTACK_WEB_SEARCH tool output.
 */
type JIGSAWSTACK_WEB_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ai Overview
       * @description AI-generated overview of results.
       */
      ai_overview: string;
      /**
       * Geo Results
       * @description Location entities related to the query.
       */
      geo_results: {
          /**
           * Additional Properties
           * @description Extra fields specific to the location type.
           */
          additional_properties?: {
              [key: string]: unknown;
          };
          /**
           * Country
           * @description Country information.
           */
          country: {
              [key: string]: unknown;
          };
          /**
           * Geoloc
           * @description GeoJSON point with coordinates.
           */
          geoloc: {
              /**
               * Coordinates
               * @description Coordinates array [lon, lat].
               */
              coordinates: number[];
              /**
               * Type
               * @description GeoJSON type, e.g., 'Point'.
               */
              type: string;
          };
          /**
           * Language
           * @description Language of the location entry.
           */
          language: string;
          /**
           * Name
           * @description Location name.
           */
          name: string;
          /**
           * Place Formatted
           * @description Formatted place name.
           */
          place_formatted: string;
          /**
           * Type
           * @description Location type, e.g., 'place', 'street'.
           */
          type: string;
      }[];
      /**
       * Image Urls
       * @description Representative image URLs from results.
       */
      image_urls: string[];
      /**
       * Is Safe
       * @description Indicates if results passed safe-search.
       */
      is_safe: boolean;
      /**
       * Query
       * @description Echo of the query.
       */
      query: string;
      /**
       * Results
       * @description Primary web results.
       */
      results: {
          /**
           * Age
           * @description Indexed or publish time (ISO timestamp).
           */
          age: string;
          /**
           * Content
           * @description Extracted content sample.
           */
          content: string;
          /**
           * Description
           * @description Short description/snippet.
           */
          description: string;
          /**
           * Favicon
           * @description Favicon URL.
           */
          favicon: string;
          /**
           * Image Urls
           * @description Images related to the result.
           */
          image_urls: string[];
          /**
           * Is Safe
           * @description Safe-search flag for this result.
           */
          is_safe: boolean;
          /**
           * Language
           * @description Language code.
           */
          language: string;
          /**
           * Site Long Name
           * @description Full host/domain.
           */
          site_long_name: string;
          /**
           * Site Name
           * @description Site name.
           */
          site_name: string;
          /**
           * Snippets
           * @description Additional snippets.
           */
          snippets?: unknown[];
          /**
           * Title
           * @description Result title.
           */
          title: string;
          /**
           * Url
           * @description Result URL.
           */
          url: string;
      }[];
      /**
       * Success
       * @description Whether the call was successful.
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
 * Type map of all available tool input types for toolkit "JIGSAWSTACK".
 */
export type JIGSAWSTACK_TOOL_INPUTS = {
  IMAGE_GENERATION: JIGSAWSTACK_IMAGE_GENERATION_INPUT
  SENTIMENT_ANALYSIS: JIGSAWSTACK_SENTIMENT_ANALYSIS_INPUT
  TEXT_TO_SPEECH: JIGSAWSTACK_TEXT_TO_SPEECH_INPUT
  WEB_SEARCH: JIGSAWSTACK_WEB_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "JIGSAWSTACK".
 */
export type JIGSAWSTACK_TOOL_OUTPUTS = {
  IMAGE_GENERATION: JIGSAWSTACK_IMAGE_GENERATION_OUTPUT
  SENTIMENT_ANALYSIS: JIGSAWSTACK_SENTIMENT_ANALYSIS_OUTPUT
  TEXT_TO_SPEECH: JIGSAWSTACK_TEXT_TO_SPEECH_OUTPUT
  WEB_SEARCH: JIGSAWSTACK_WEB_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's JIGSAWSTACK toolkit.
 */
export const JIGSAWSTACK = {
  slug: "jigsawstack",
  tools: {
    /**
     * Tool to generate images from text prompts. Use when you need visual content created from a prompt.
     */
    IMAGE_GENERATION: "JIGSAWSTACK_IMAGE_GENERATION",
    /**
     * Tool to analyze text sentiment. Use when you need to classify text into positive, negative, or neutral sentiment.
     */
    SENTIMENT_ANALYSIS: "JIGSAWSTACK_SENTIMENT_ANALYSIS",
    /**
     * Tool to convert text to natural-sounding speech. Use when you need to generate an audio file from text input.
     */
    TEXT_TO_SPEECH: "JIGSAWSTACK_TEXT_TO_SPEECH",
    /**
     * Tool to perform AI-powered web search with AI overview and geo-aware results. Use when you need concise search results enriched with AI summary and location context.
     */
    WEB_SEARCH: "JIGSAWSTACK_WEB_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "JIGSAWSTACK".
 */
export type JIGSAWSTACK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "JIGSAWSTACK".
 */
export type JIGSAWSTACK_TRIGGER_EVENTS = {}
