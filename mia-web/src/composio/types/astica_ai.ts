// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ASTICA_AI's ASTICA_AI_ANALYZE_AUDIO tool input.
 */
type ASTICA_AI_ANALYZE_AUDIO_INPUT = {
  /**
   * Do Stream
   * @description 0 for full transcription, 1 for streaming partial results
   * @default 0
   * @enum {integer}
   */
  doStream: 0 | 1;
  /**
   * Input
   * @description HTTPS URL to .wav/.mp3 file or Base64-encoded audio
   */
  input?: string;
  /**
   * Low Priority
   * @description 0 for standard priority, 1 for low-priority processing
   * @default 0
   * @enum {integer}
   */
  low_priority: 0 | 1;
  /**
   * Model Version
   * @description Which speech-to-text model version to use
   * @default 1.0_full
   * @enum {string}
   */
  modelVersion: "1.0_full" | "2.0_full";
  /**
   * Tkn
   * @description Your Astica API key
   */
  tkn?: string;
};

/**
 * Type of ASTICA_AI's ASTICA_AI_ANALYZE_AUDIO tool output.
 */
type ASTICA_AI_ANALYZE_AUDIO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Segments
       * @description List of transcription segments with timestamps and confidence
       */
      segments: {
          /**
           * Confidence
           * @description Confidence score of this segment
           */
          confidence: number;
          /**
           * End
           * @description Segment end time in seconds
           */
          end: number;
          /**
           * Start
           * @description Segment start time in seconds
           */
          start: number;
          /**
           * Text
           * @description Transcribed text for this segment
           */
          text: string;
      }[];
      /**
       * Text
       * @description Full transcription text
       */
      text: string;
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
 * Type of ASTICA_AI's ASTICA_AI_ASTICA_READ_TEXT tool input.
 */
type ASTICA_AI_ASTICA_READ_TEXT_INPUT = {
  /**
   * Image Url
   * Format: uri
   * @description HTTPS URL of the image to analyze or Base64-encoded image string.
   */
  image_url?: unknown;
  /**
   * Model Version
   * @description AsticaVision model version to use. Use '2.0_full' or '2.1_full' for OCR support.
   * @default 2.0_full
   * @enum {string}
   */
  model_version: "1.0_full" | "2.0_full" | "2.1_full";
};

/**
 * Type of ASTICA_AI's ASTICA_AI_ASTICA_READ_TEXT tool output.
 */
type ASTICA_AI_ASTICA_READ_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Astica
       * @description API usage details for this request.
       */
      astica: {
          /**
           * Api Qty
           * @description Number of API transactions used for this request.
           */
          api_qty: number;
      };
      /**
       * Text Read
       * @description OCR results with all detected text blocks and coordinates.
       */
      text_read: {
          /**
           * Blocks
           * @description List of detected text blocks in the image.
           */
          blocks: {
              /**
               * Confidence
               * @description OCR confidence score between 0.0 and 1.0
               */
              confidence: number;
              /**
               * Text
               * @description Extracted text for this block.
               */
              text: string;
              /**
               * Vertices
               * @description List of four vertices defining the bounding polygon for this text block.
               */
              vertices: {
                  /**
                   * X
                   * @description X coordinate of the bounding box vertex.
                   */
                  x: number;
                  /**
                   * Y
                   * @description Y coordinate of the bounding box vertex.
                   */
                  y: number;
              }[];
          }[];
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
 * Type map of all available tool input types for toolkit "ASTICA_AI".
 */
export type ASTICA_AI_TOOL_INPUTS = {
  ANALYZE_AUDIO: ASTICA_AI_ANALYZE_AUDIO_INPUT
  ASTICA_READ_TEXT: ASTICA_AI_ASTICA_READ_TEXT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ASTICA_AI".
 */
export type ASTICA_AI_TOOL_OUTPUTS = {
  ANALYZE_AUDIO: ASTICA_AI_ANALYZE_AUDIO_OUTPUT
  ASTICA_READ_TEXT: ASTICA_AI_ASTICA_READ_TEXT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ASTICA_AI toolkit.
 */
export const ASTICA_AI = {
  slug: "astica_ai",
  tools: {
    /**
     * Tool to analyze audio input for transcription. use when you need to convert an audio url or base64 string to text.
     */
    ANALYZE_AUDIO: "ASTICA_AI_ANALYZE_AUDIO",
    /**
     * Tool to perform ocr on an image to extract text. use when you need to read raw text from images after confirming the image source.
     */
    ASTICA_READ_TEXT: "ASTICA_AI_ASTICA_READ_TEXT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ASTICA_AI".
 */
export type ASTICA_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ASTICA_AI".
 */
export type ASTICA_AI_TRIGGER_EVENTS = {}
