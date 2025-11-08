// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of API_BIBLE's API_BIBLE_GET_ALL_BOOKS tool input.
 */
type API_BIBLE_GET_ALL_BOOKS_INPUT = {
  /**
   * Bible Id
   * @description Unique identifier of the Bible version to retrieve books from (e.g., 'de4e12af7f28f599-01')
   */
  bibleId?: string;
};

/**
 * Type of API_BIBLE's API_BIBLE_GET_ALL_BOOKS tool output.
 */
type API_BIBLE_GET_ALL_BOOKS_OUTPUT = {
  /** Data */
  data?: {
      /** Abbreviation */
      abbreviation: string;
      /** Bible Id */
      bibleId: string;
      /** Id */
      id: string;
      /** Name */
      name: string;
      /** Name Long */
      nameLong: string;
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
 * Type of API_BIBLE's API_BIBLE_GET_BIBLE tool input.
 */
type API_BIBLE_GET_BIBLE_INPUT = {
  /**
   * Bible Id
   * @description Unique identifier of the Bible version to retrieve (e.g., 'de4e12af7f28f599-01')
   */
  bibleId?: string;
};

/**
 * Type of API_BIBLE's API_BIBLE_GET_BIBLE tool output.
 */
type API_BIBLE_GET_BIBLE_OUTPUT = {
  /**
   * Data
   * @description Schema for a specific Bible version.
   */
  data?: {
      /**
       * Abbreviation
       * @description Abbreviation of the Bible version
       */
      abbreviation: string;
      /**
       * Countries
       * @description Countries where this version is available
       * @default null
       */
      countries: {
          /**
           * Id
           * @description Country ID (e.g., 'US')
           */
          id: string;
          /**
           * Name
           * @description Country name (e.g., 'United States')
           */
          name: string;
      }[] | null;
      /**
       * Dbl Id
       * @description Digital Bible Library ID
       * @default null
       */
      dblId: string | null;
      /**
       * Description
       * @description Description of the Bible version
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID of the Bible version
       */
      id: string;
      /**
       * Language
       * @description Language details for the version
       */
      language: {
          /**
           * Id
           * @description Language ID (e.g., 'eng')
           */
          id: string;
          /**
           * Name
           * @description Language name (e.g., 'English')
           */
          name: string;
      };
      /**
       * Language Id
       * @description Language ID for the Bible version
       * @default null
       */
      languageId: string | null;
      /**
       * Name
       * @description Full name of the Bible version
       */
      name: string;
      /**
       * Type
       * @description Type of Bible (e.g., 'text', 'audio')
       * @default null
       */
      type: string | null;
      /**
       * Updated At
       * @description Timestamp when this version was last updated
       */
      updatedAt: string;
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
 * Type of API_BIBLE's API_BIBLE_GET_SECTION tool input.
 */
type API_BIBLE_GET_SECTION_INPUT = {
  /**
   * Bible Id
   * @description ID of the Bible whose section is to be fetched.
   */
  bibleId?: string;
  /**
   * Content Type
   * @description Format of section content: 'html' (default), 'json', or 'text'.
   * @default html
   * @enum {string}
   */
  "content-type": "html" | "json" | "text";
  /**
   * Include Chapter Numbers
   * @description Include chapter numbers in content.
   * @default false
   */
  "include-chapter-numbers": boolean;
  /**
   * Include Notes
   * @description Include footnotes in content.
   * @default false
   */
  "include-notes": boolean;
  /**
   * Include Titles
   * @description Include section titles in content.
   * @default true
   */
  "include-titles": boolean;
  /**
   * Include Verse Numbers
   * @description Include verse numbers in content.
   * @default true
   */
  "include-verse-numbers": boolean;
  /**
   * Include Verse Spans
   * @description Include verse spans in content.
   * @default false
   */
  "include-verse-spans": boolean;
  /**
   * Parallels
   * @description Comma-separated list of Bible IDs for parallel content comparison.
   * @default null
   */
  parallels: string | null;
  /**
   * Section Id
   * @description ID of the section to retrieve.
   */
  sectionId?: string;
};

/**
 * Type of API_BIBLE's API_BIBLE_GET_SECTION tool output.
 */
type API_BIBLE_GET_SECTION_OUTPUT = {
  /**
   * Data
   * @description The requested section details.
   */
  data?: {
      /**
       * Bible Id
       * @description Bible ID the section belongs to.
       */
      bibleId: string;
      /**
       * Book Id
       * @description Book ID the section belongs to.
       */
      bookId: string;
      /**
       * Chapter Id
       * @description Chapter ID the section belongs to.
       */
      chapterId: string;
      /**
       * Content
       * @description Full content of the section.
       */
      content: string;
      /**
       * Copyright
       * @description Copyright information for the section.
       */
      copyright: string;
      /**
       * First Verse Id
       * @description ID of the first verse in the section.
       */
      firstVerseId: string;
      /**
       * First Verse Org Id
       * @description Org-specific ID of the first verse.
       */
      firstVerseOrgId: string;
      /**
       * Id
       * @description Section ID.
       */
      id: string;
      /**
       * Last Verse Id
       * @description ID of the last verse in the section.
       */
      lastVerseId: string;
      /**
       * Last Verse Org Id
       * @description Org-specific ID of the last verse.
       */
      lastVerseOrgId: string;
      /**
       * Navigation
       * @description Navigation data for next/previous sections.
       * @default null
       */
      next: {
          /**
           * Id
           * @description ID of the adjacent section.
           */
          id: string;
          /**
           * Title
           * @description Title of the adjacent section.
           */
          title: string;
      } | null;
      /**
       * Navigation
       * @description Navigation data for next/previous sections.
       * @default null
       */
      previous: {
          /**
           * Id
           * @description ID of the adjacent section.
           */
          id: string;
          /**
           * Title
           * @description Title of the adjacent section.
           */
          title: string;
      } | null;
      /**
       * Title
       * @description Section title.
       */
      title: string;
      /**
       * Verse Count
       * @description Number of verses in this section.
       */
      verseCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Embedding metadata for the section.
   */
  meta?: {
      /**
       * Fums
       * @description FUMS embed script element.
       */
      fums: string;
      /**
       * Fums Id
       * @description Identifier for the FUMS script.
       */
      fumsId: string;
      /**
       * Fums Js
       * @description Inline FUMS JavaScript code.
       */
      fumsJs: string;
      /**
       * Fums Js Include
       * @description Script tag for FUMS JavaScript.
       */
      fumsJsInclude: string;
      /**
       * Fums No Script
       * @description <noscript> fallback for embeds.
       */
      fumsNoScript: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of API_BIBLE's API_BIBLE_GET_SECTIONS tool input.
 */
type API_BIBLE_GET_SECTIONS_INPUT = {
  /**
   * Bible Id
   * @description The ID of the desired Bible version (e.g., '61fd76eafa1577c2-03').
   */
  bibleId?: string;
  /**
   * Book Id
   * @description The ID or abbreviation of the desired book (e.g., 'MAT').
   */
  bookId?: string;
};

/**
 * Type of API_BIBLE's API_BIBLE_GET_SECTIONS tool output.
 */
type API_BIBLE_GET_SECTIONS_OUTPUT = {
  /**
   * Data
   * @description List of section metadata for the given book.
   */
  data?: {
      /**
       * Bible Id
       * @description Bible ID this section belongs to.
       */
      bibleId: string;
      /**
       * Book Id
       * @description Book ID this section belongs to.
       */
      bookId: string;
      /**
       * Id
       * @description Unique identifier of the section.
       */
      id: string;
      /**
       * Title
       * @description Title or heading of the section.
       */
      title: string;
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
 * Type of API_BIBLE's API_BIBLE_GET_SUPPORTED_VERSIONS tool input.
 */
type API_BIBLE_GET_SUPPORTED_VERSIONS_INPUT = object;

/**
 * Type of API_BIBLE's API_BIBLE_GET_SUPPORTED_VERSIONS tool output.
 */
type API_BIBLE_GET_SUPPORTED_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Versions
       * @description List of supported Bible versions.
       */
      versions: {
          /**
           * Id
           * @description Unique version identifier (e.g., 'de4e12af7f28f599-01').
           */
          id: string;
          /**
           * Name
           * @description Full name of the Bible version (e.g., 'Reina Valera Antigua').
           */
          name: string;
          /**
           * Uri
           * @description URI to retrieve this version details (e.g., 'https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01').
           */
          uri: string;
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
 * Type of API_BIBLE's API_BIBLE_SEARCH_VERSES tool input.
 */
type API_BIBLE_SEARCH_VERSES_INPUT = {
  /**
   * Page
   * @description Page offset for results (positive integer).
   * @default null
   */
  page: number | null;
  /**
   * Q
   * @description Search query string to find verses containing this text.
   */
  q?: string;
  /**
   * Take
   * @description Number of results to return (positive integer).
   * @default null
   */
  take: number | null;
  /**
   * Version
   * @description Bible version identifier to search within (e.g., 'nvi').
   */
  version?: string;
};

/**
 * Type of API_BIBLE's API_BIBLE_SEARCH_VERSES tool output.
 */
type API_BIBLE_SEARCH_VERSES_OUTPUT = {
  /**
   * Data
   * @description Search results and metadata.
   */
  data?: unknown;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata for the response.
   */
  meta?: unknown;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "API_BIBLE".
 */
export type API_BIBLE_TOOL_INPUTS = {
  GET_ALL_BOOKS: API_BIBLE_GET_ALL_BOOKS_INPUT
  GET_BIBLE: API_BIBLE_GET_BIBLE_INPUT
  GET_SECTION: API_BIBLE_GET_SECTION_INPUT
  GET_SECTIONS: API_BIBLE_GET_SECTIONS_INPUT
  GET_SUPPORTED_VERSIONS: API_BIBLE_GET_SUPPORTED_VERSIONS_INPUT
  SEARCH_VERSES: API_BIBLE_SEARCH_VERSES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "API_BIBLE".
 */
export type API_BIBLE_TOOL_OUTPUTS = {
  GET_ALL_BOOKS: API_BIBLE_GET_ALL_BOOKS_OUTPUT
  GET_BIBLE: API_BIBLE_GET_BIBLE_OUTPUT
  GET_SECTION: API_BIBLE_GET_SECTION_OUTPUT
  GET_SECTIONS: API_BIBLE_GET_SECTIONS_OUTPUT
  GET_SUPPORTED_VERSIONS: API_BIBLE_GET_SUPPORTED_VERSIONS_OUTPUT
  SEARCH_VERSES: API_BIBLE_SEARCH_VERSES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's API_BIBLE toolkit.
 */
export const API_BIBLE = {
  slug: "api_bible",
  tools: {
    /**
     * Tool to retrieve a list of all books in the bible. use when you need a catalog of every biblical book.
     */
    GET_ALL_BOOKS: "API_BIBLE_GET_ALL_BOOKS",
    /**
     * Tool to retrieve details of a specific bible version by its id. use when you need full metadata after listing versions. example prompt: 'get metadata for bibleid de4e12af7f28f599-01'.
     */
    GET_BIBLE: "API_BIBLE_GET_BIBLE",
    /**
     * Tool to retrieve detailed content for a single section by id. use after listing sections.
     */
    GET_SECTION: "API_BIBLE_GET_SECTION",
    /**
     * Tool to retrieve a list of sections for a specific book in a bible version. use after obtaining the bible and book ids to view sectional breakdown.
     */
    GET_SECTIONS: "API_BIBLE_GET_SECTIONS",
    /**
     * Tool to retrieve supported bible versions. use when you need to list all available bible translations.
     */
    GET_SUPPORTED_VERSIONS: "API_BIBLE_GET_SUPPORTED_VERSIONS",
    /**
     * Tool to search for verses containing a specified query within a version.
     */
    SEARCH_VERSES: "API_BIBLE_SEARCH_VERSES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "API_BIBLE".
 */
export type API_BIBLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "API_BIBLE".
 */
export type API_BIBLE_TRIGGER_EVENTS = {}
