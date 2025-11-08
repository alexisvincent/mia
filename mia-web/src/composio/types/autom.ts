// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AUTOM's AUTOM_GOOGLE_COUNTRIES tool input.
 */
type AUTOM_GOOGLE_COUNTRIES_INPUT = {
  /**
   * Query
   * @description Filters countries based on a case-insensitive substring. Returns all countries whose names contain the specified string, case-insensitive.
   */
  query?: string;
};

/**
 * Type of AUTOM's AUTOM_GOOGLE_COUNTRIES tool output.
 */
type AUTOM_GOOGLE_COUNTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country Code
       * @description 2-letter ISO 3166-1 country code.
       */
      country_code: string;
      /**
       * Country Name
       * @description Full country name.
       */
      country_name: string;
  }[];
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
 * Type of AUTOM's AUTOM_GOOGLE_IMAGES tool input.
 */
type AUTOM_GOOGLE_IMAGES_INPUT = {
  /**
   * Gl
   * @description Two-letter country code for Google Images localization, e.g., 'us', 'uk', 'fr'.
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Two-letter language code for Google Images localization, e.g., 'en', 'es', 'fr'.
   * @default null
   */
  hl: string | null;
  /**
   * Page
   * @description Result page number for pagination (1-indexed). Each page returns up to 100 images.
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search term to query on Google Images
   */
  query?: string;
};

/**
 * Type of AUTOM's AUTOM_GOOGLE_IMAGES tool output.
 */
type AUTOM_GOOGLE_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description List of image result objects
       */
      images: {
          /**
           * Domain
           * @description The domain of the webpage containing the image
           */
          domain: string;
          /**
           * Image Height
           * @description Height of the image in pixels
           */
          image_height: number;
          /**
           * Image Width
           * @description Width of the image in pixels
           */
          image_width: number;
          /**
           * Link
           * @description The webpage URL containing the image
           */
          link: string;
          /**
           * Position
           * @description Position of the image in the search results (1-indexed)
           */
          position: number;
          /**
           * Source
           * @description The source or publisher of the image
           */
          source: string;
          /**
           * Title
           * @description The title of the webpage containing the image
           */
          title: string;
          /**
           * Url
           * @description The URL of the image
           */
          url: string;
      }[];
      /**
       * Search Parameters
       * @description Parameters applied for this search
       */
      search_parameters: {
          /**
           * Engine
           * @description Search engine used (always 'google')
           */
          engine: string;
          /**
           * Gl
           * @description Two-letter country code used for localization, e.g. 'us'
           */
          gl: string;
          /**
           * Hl
           * @description Two-letter language code used for localization, e.g. 'en'
           */
          hl: string;
          /**
           * Page
           * @description Page number of search results (1-indexed)
           */
          page: number;
          /**
           * Q
           * @description Search query used
           */
          q: string;
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
 * Type of AUTOM's AUTOM_GOOGLE_LANGUAGES tool input.
 */
type AUTOM_GOOGLE_LANGUAGES_INPUT = {
  /**
   * Query
   * @description This parameter filters languages based on a search string. Search is non-case-sensitive and returns all languages whose names contain the string.
   */
  query?: string;
};

/**
 * Type of AUTOM's AUTOM_GOOGLE_LANGUAGES tool output.
 */
type AUTOM_GOOGLE_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description List of language objects returned by the API
       */
      languages: {
          /**
           * Language Code
           * @description Language code (e.g., 'fr').
           */
          language_code: string;
          /**
           * Language Name
           * @description Language name (e.g., 'French').
           */
          language_name: string;
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
 * Type of AUTOM's AUTOM_GOOGLE_LOCATIONS tool input.
 */
type AUTOM_GOOGLE_LOCATIONS_INPUT = {
  /**
   * Query
   * @description Parameter restricts your search to locations that contain the supplied string. (e.g., 'Austin' will match 'Austin, TX', 'The University of Texas at Austin', etc.)
   */
  query?: string;
};

/**
 * Type of AUTOM's AUTOM_GOOGLE_LOCATIONS tool output.
 */
type AUTOM_GOOGLE_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of location objects returned by the API
       */
      locations: {
          /**
           * Canonical Name
           * @description Full canonical name including city, state/province, and country
           */
          canonical_name: string;
          /**
           * Country Code
           * @description Two-letter country code
           */
          country_code: string;
          /**
           * Google Id
           * @description Google location identifier
           */
          google_id: number;
          /**
           * Google Parent Id
           * @description Google parent location identifier
           */
          google_parent_id: number;
          /**
           * Gps
           * @description GPS coordinates [longitude, latitude]
           */
          gps: number[];
          /**
           * Id
           * @description Unique location identifier
           */
          id: string;
          /**
           * Name
           * @description Location name
           */
          name: string;
          /**
           * Reach
           * @description Population reach of the location
           */
          reach: number;
          /**
           * Target Type
           * @description Location type (e.g., City, Country)
           */
          target_type: string;
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
 * Type map of all available tool input types for toolkit "AUTOM".
 */
export type AUTOM_TOOL_INPUTS = {
  GOOGLE_COUNTRIES: AUTOM_GOOGLE_COUNTRIES_INPUT
  GOOGLE_IMAGES: AUTOM_GOOGLE_IMAGES_INPUT
  GOOGLE_LANGUAGES: AUTOM_GOOGLE_LANGUAGES_INPUT
  GOOGLE_LOCATIONS: AUTOM_GOOGLE_LOCATIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AUTOM".
 */
export type AUTOM_TOOL_OUTPUTS = {
  GOOGLE_COUNTRIES: AUTOM_GOOGLE_COUNTRIES_OUTPUT
  GOOGLE_IMAGES: AUTOM_GOOGLE_IMAGES_OUTPUT
  GOOGLE_LANGUAGES: AUTOM_GOOGLE_LANGUAGES_OUTPUT
  GOOGLE_LOCATIONS: AUTOM_GOOGLE_LOCATIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AUTOM toolkit.
 */
export const AUTOM = {
  slug: "autom",
  tools: {
    /**
     * Tool to list google-supported countries. use when you need to filter or suggest countries based on a search string.
     */
    GOOGLE_COUNTRIES: "AUTOM_GOOGLE_COUNTRIES",
    /**
     * Tool to fetch images from google search results. use when you need urls, titles, domains, and metadata for images matching a query.
     */
    GOOGLE_IMAGES: "AUTOM_GOOGLE_IMAGES",
    /**
     * Tool to retrieve google-supported languages. use when you need a list of language codes for localization.
     */
    GOOGLE_LANGUAGES: "AUTOM_GOOGLE_LANGUAGES",
    /**
     * Tool to retrieve google-supported locations. use when searching for locations by name. returns locations ordered by reach (most populous first).
     */
    GOOGLE_LOCATIONS: "AUTOM_GOOGLE_LOCATIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AUTOM".
 */
export type AUTOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AUTOM".
 */
export type AUTOM_TRIGGER_EVENTS = {}
