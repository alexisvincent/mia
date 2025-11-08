// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ROSETTE_TEXT_ANALYTICS's ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY tool input.
 */
type ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY_INPUT = {
  /**
   * AddressFielded
   * @description Represents a structured address.
   */
  address1?: {
      /**
       * City
       * @description The city, town, village, etc.
       * @default null
       */
      city: string | null;
      /**
       * City District
       * @description A borough or district within a city
       * @default null
       */
      cityDistrict: string | null;
      /**
       * Country
       * @description A sovereign nation or its dependent territory
       * @default null
       */
      country: string | null;
      /**
       * Country Region
       * @description Informal subdivision of a country
       * @default null
       */
      countryRegion: string | null;
      /**
       * Entrance
       * @description Numbered/lettered entrance
       * @default null
       */
      entrance: string | null;
      /**
       * House
       * @description Venue or building name
       * @default null
       */
      house: string | null;
      /**
       * House Number
       * @description External building number
       * @default null
       */
      houseNumber: string | null;
      /**
       * Island
       * @description A named island
       * @default null
       */
      island: string | null;
      /**
       * Level
       * @description Expression indicating a floor number
       * @default null
       */
      level: string | null;
      /**
       * Po Box
       * @description Post office box
       * @default null
       */
      poBox: string | null;
      /**
       * Post Code
       * @description Postal code
       * @default null
       */
      postCode: string | null;
      /**
       * Road
       * @description Street name
       * @default null
       */
      road: string | null;
      /**
       * Staircase
       * @description Numbered/lettered staircase
       * @default null
       */
      staircase: string | null;
      /**
       * State
       * @description A first-level administrative division
       * @default null
       */
      state: string | null;
      /**
       * State District
       * @description A second-level administrative division or county
       * @default null
       */
      stateDistrict: string | null;
      /**
       * Suburb
       * @description Unofficial neighborhood name
       * @default null
       */
      suburb: string | null;
      /**
       * Unit
       * @description A secondary unit designator
       * @default null
       */
      unit: string | null;
      /**
       * World Region
       * @description West Indies, if appropriate
       * @default null
       */
      worldRegion: string | null;
  } | null;
  /**
   * AddressFielded
   * @description Represents a structured address.
   */
  address2?: {
      /**
       * City
       * @description The city, town, village, etc.
       * @default null
       */
      city: string | null;
      /**
       * City District
       * @description A borough or district within a city
       * @default null
       */
      cityDistrict: string | null;
      /**
       * Country
       * @description A sovereign nation or its dependent territory
       * @default null
       */
      country: string | null;
      /**
       * Country Region
       * @description Informal subdivision of a country
       * @default null
       */
      countryRegion: string | null;
      /**
       * Entrance
       * @description Numbered/lettered entrance
       * @default null
       */
      entrance: string | null;
      /**
       * House
       * @description Venue or building name
       * @default null
       */
      house: string | null;
      /**
       * House Number
       * @description External building number
       * @default null
       */
      houseNumber: string | null;
      /**
       * Island
       * @description A named island
       * @default null
       */
      island: string | null;
      /**
       * Level
       * @description Expression indicating a floor number
       * @default null
       */
      level: string | null;
      /**
       * Po Box
       * @description Post office box
       * @default null
       */
      poBox: string | null;
      /**
       * Post Code
       * @description Postal code
       * @default null
       */
      postCode: string | null;
      /**
       * Road
       * @description Street name
       * @default null
       */
      road: string | null;
      /**
       * Staircase
       * @description Numbered/lettered staircase
       * @default null
       */
      staircase: string | null;
      /**
       * State
       * @description A first-level administrative division
       * @default null
       */
      state: string | null;
      /**
       * State District
       * @description A second-level administrative division or county
       * @default null
       */
      stateDistrict: string | null;
      /**
       * Suburb
       * @description Unofficial neighborhood name
       * @default null
       */
      suburb: string | null;
      /**
       * Unit
       * @description A secondary unit designator
       * @default null
       */
      unit: string | null;
      /**
       * World Region
       * @description West Indies, if appropriate
       * @default null
       */
      worldRegion: string | null;
  } | null;
};

/**
 * Type of ROSETTE_TEXT_ANALYTICS's ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY tool output.
 */
type ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Score
       * @description Similarity score between 0.0 and 1.0, where 1.0 indicates an exact match.
       */
      score: number;
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
 * Type of ROSETTE_TEXT_ANALYTICS's ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION tool input.
 */
type ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION_INPUT = {
  /**
   * Content
   * @description The text to be analyzed.
   * @default null
   */
  content: string | null;
  /**
   * Content Uri
   * @description A URI pointing to the content to be analyzed. Mutually exclusive with content.
   * @default null
   */
  contentUri: string | null;
  /**
   * Korean Dialects
   * @description If set to true, enables classification for North Korean (qkp) and South Korean (qkr) dialects. Default is false.
   * @default false
   */
  koreanDialects: boolean | null;
  /**
   * Multilingual
   * @description If set to true, the endpoint detects regions in multilingual documents and returns a list of language regions in addition to whole-document results. Default is false.
   * @default false
   */
  multilingual: boolean | null;
};

/**
 * Type of ROSETTE_TEXT_ANALYTICS's ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION tool output.
 */
type ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Language Detections
       * @description A list of detected languages and their confidence scores.
       */
      languageDetections: {
          /**
           * Confidence
           * @description The confidence score for the detected language (0.0 to 1.0).
           */
          confidence: number;
          /**
           * Language
           * @description The detected language code (e.g., 'eng').
           */
          language: string;
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
 * Type of ROSETTE_TEXT_ANALYTICS's ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY tool input.
 */
type ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY_INPUT = {
  /**
   * Name1
   * @description The first name object to be compared.
   */
  name1?: {
      /**
       * EntityTypeEnum
       * @description Type of the entity. Optional. Valid values: PERSON, LOCATION, ORGANIZATION.
       * @default null
       * @enum {string|null}
       */
      entityType: "PERSON" | "LOCATION" | "ORGANIZATION" | null;
      /**
       * Language
       * @description ISO 639-3 language code of the name (e.g., 'eng', 'rus'). Optional but recommended.
       * @default null
       */
      language: string | null;
      /**
       * Text
       * @description The text of the name.
       */
      text: string;
  };
  /**
   * Name2
   * @description The second name object to be compared.
   */
  name2?: {
      /**
       * EntityTypeEnum
       * @description Type of the entity. Optional. Valid values: PERSON, LOCATION, ORGANIZATION.
       * @default null
       * @enum {string|null}
       */
      entityType: "PERSON" | "LOCATION" | "ORGANIZATION" | null;
      /**
       * Language
       * @description ISO 639-3 language code of the name (e.g., 'eng', 'rus'). Optional but recommended.
       * @default null
       */
      language: string | null;
      /**
       * Text
       * @description The text of the name.
       */
      text: string;
  };
};

/**
 * Type of ROSETTE_TEXT_ANALYTICS's ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY tool output.
 */
type ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Score
       * @description Similarity score between 0.0 and 1.0, where 1.0 indicates a perfect match.
       */
      score: number;
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
 * Type map of all available tool input types for toolkit "ROSETTE_TEXT_ANALYTICS".
 */
export type ROSETTE_TEXT_ANALYTICS_TOOL_INPUTS = {
  ADDRESS_SIMILARITY: ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY_INPUT
  LANGUAGE_IDENTIFICATION: ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION_INPUT
  NAME_SIMILARITY: ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ROSETTE_TEXT_ANALYTICS".
 */
export type ROSETTE_TEXT_ANALYTICS_TOOL_OUTPUTS = {
  ADDRESS_SIMILARITY: ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY_OUTPUT
  LANGUAGE_IDENTIFICATION: ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION_OUTPUT
  NAME_SIMILARITY: ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ROSETTE_TEXT_ANALYTICS toolkit.
 */
export const ROSETTE_TEXT_ANALYTICS = {
  slug: "rosette_text_analytics",
  tools: {
    /**
     * Compares two addresses and returns a similarity score. addresses can be provided as single strings or as structured objects. the tool is optimized for english, simplified chinese, and traditional chinese addresses.
     */
    ADDRESS_SIMILARITY: "ROSETTE_TEXT_ANALYTICS_ADDRESS_SIMILARITY",
    /**
     * This tool identifies the natural language of a given text. it takes a string of text as input and returns the detected language along with a confidence score. optional parameters include specifying a genre (e.g., "social-media"), providing a list of language codes to constrain the identification, and indicating whether to include user-defined languages.
     */
    LANGUAGE_IDENTIFICATION: "ROSETTE_TEXT_ANALYTICS_LANGUAGE_IDENTIFICATION",
    /**
     * The 'name similarity' tool compares two entity names (person, location, or organization) and returns a similarity score between 0 and 1 to indicate if the names are similar. it is useful for tasks such as record linkage, identity resolution, and data deduplication.
     */
    NAME_SIMILARITY: "ROSETTE_TEXT_ANALYTICS_NAME_SIMILARITY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ROSETTE_TEXT_ANALYTICS".
 */
export type ROSETTE_TEXT_ANALYTICS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ROSETTE_TEXT_ANALYTICS".
 */
export type ROSETTE_TEXT_ANALYTICS_TRIGGER_EVENTS = {}
