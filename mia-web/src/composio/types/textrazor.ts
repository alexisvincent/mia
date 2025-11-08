// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEXTRAZOR's TEXTRAZOR_ACCOUNT_INFO tool input.
 */
type TEXTRAZOR_ACCOUNT_INFO_INPUT = object;

/**
 * Type of TEXTRAZOR's TEXTRAZOR_ACCOUNT_INFO tool output.
 */
type TEXTRAZOR_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Concurrent Requests Limit
       * @description Maximum number of concurrent requests allowed.
       * @default null
       */
      concurrent_requests_limit: number | null;
      /**
       * Custom Entity Dictionaries
       * @description Number of custom entity dictionaries available.
       * @default null
       */
      custom_entity_dictionaries: number | null;
      /**
       * Custom Entity Dictionary Entries
       * @description Total number of entries across all custom entity dictionaries.
       * @default null
       */
      custom_entity_dictionary_entries: number | null;
      /**
       * Plan
       * @description The current subscription plan of the account.
       * @default null
       */
      plan: string | null;
      /**
       * Requests Limit
       * @description Daily request limit for the account.
       * @default null
       */
      requests_limit: number | null;
      /**
       * Requests Today
       * @description Number of API requests made today.
       * @default null
       */
      requests_today: number | null;
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
 * Type of TEXTRAZOR's TEXTRAZOR_CLASSIFY_TEXT tool input.
 */
type TEXTRAZOR_CLASSIFY_TEXT_INPUT = {
  /**
   * Classifiers
   * @description Comma-separated list of classifiers to use for text classification
   */
  classifiers?: string;
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode (raw, stripTags, cleanHTML)
   * @default raw
   */
  cleanup_mode: string | null;
  /**
   * Language Override
   * @description Force TextRazor to analyze content with specific language (ISO-639-2 code)
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text content to be classified (up to 200kb UTF-8 encoded text)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_CLASSIFY_TEXT tool output.
 */
type TEXTRAZOR_CLASSIFY_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any problems occurred during analysis
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Any warning or informational messages
       * @default null
       */
      message: string | null;
      /**
       * Ok
       * @description True if TextRazor successfully analyzed the document
       */
      ok: boolean;
      /**
       * Response
       * @description The output of the classification operation containing categories and scores
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Time
       * @description Total time in seconds TextRazor took to process this request
       */
      time: number;
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
 * Type of TEXTRAZOR's TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER tool input.
 */
type TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER_INPUT = {
  /**
   * Categories
   * @description List of categories to create/update. Required for create_update operation.
   * @default null
   */
  categories: {
      /**
       * Category Id
       * @description The unique ID for this category within its classifier.
       */
      category_id: string;
      /**
       * Label
       * @description The human readable label for this category.
       * @default null
       */
      label: string | null;
      /**
       * Query
       * @description The query used to define this category.
       */
      query: string;
  }[] | null;
  /**
   * Category Id
   * @description The category ID when performing operations on a specific category.
   * @default null
   */
  category_id: string | null;
  /**
   * Classifier Id
   * @description The unique identifier for the classifier.
   */
  classifier_id?: string;
  /**
   * Limit
   * @description Maximum number of categories to return when listing categories.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination when listing categories.
   * @default null
   */
  offset: number | null;
  /**
   * Operation
   * @description The operation to perform on the classifier.
   * @enum {string}
   */
  operation?: "create_update" | "delete" | "get_categories" | "get_category" | "delete_category";
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER tool output.
 */
type TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER_OUTPUT = {
  /**
   * CategoryResponse
   * @description Response model for a single category.
   * @default null
   */
  data: {
      /**
       * Category Id
       * @description The unique ID for this category.
       */
      category_id: string;
      /**
       * Label
       * @description The human readable label for this category.
       * @default null
       */
      label: string | null;
      /**
       * Query
       * @description The query used to define this category.
       */
      query: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A message describing the result of the operation.
   */
  message?: string;
  /**
   * Success
   * @description Whether the operation was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_DEPENDENCY_TREES_ACTION tool input.
 */
type TEXTRAZOR_DEPENDENCY_TREES_ACTION_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode
   * @default raw
   */
  cleanup_mode: string | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text to analyze for dependency trees (up to 200kb of UTF-8 encoded text)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_DEPENDENCY_TREES_ACTION tool output.
 */
type TEXTRAZOR_DEPENDENCY_TREES_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sentences
       * @description List of analyzed sentences with dependency information
       */
      sentences: {
          /**
           * Words
           * @description List of words in the sentence with their dependency information
           */
          words: {
              /**
               * Ending Pos
               * @description End character offset
               */
              endingPos: number;
              /**
               * Parent Position
               * @description Position of grammatical parent word
               * @default null
               */
              parentPosition: number | null;
              /**
               * Part Of Speech
               * @description Part of speech tag
               * @default null
               */
              partOfSpeech: string | null;
              /**
               * Position
               * @description Position of the word in the sentence
               */
              position: number;
              /**
               * Relation To Parent
               * @description Grammatical relation to parent word
               * @default null
               */
              relationToParent: string | null;
              /**
               * Starting Pos
               * @description Start character offset
               */
              startingPos: number;
              /**
               * Token
               * @description The actual word token from the text
               */
              token: string;
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
 * Type of TEXTRAZOR's TEXTRAZOR_DICTIONARY_MANAGER tool input.
 */
type TEXTRAZOR_DICTIONARY_MANAGER_INPUT = {
  /**
   * Dictionary Id
   * @description The ID of the dictionary to operate on. Required for all operations except 'list'.
   * @default null
   */
  dictionary_id: string | null;
  /**
   * Entries
   * @description List of entries to add or delete. Required for 'add_entries' and 'delete_entries' operations.
   */
  entries?: {
      /**
       * Data
       * @description Additional data associated with the dictionary entry.
       * @default null
       */
      data: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique identifier for the dictionary entry.
       * @default null
       */
      id: string | null;
      /**
       * Text
       * @description The text content of the dictionary entry.
       */
      text: string;
  }[];
  /**
   * Operation
   * @description The operation to perform on the dictionary.
   */
  operation?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_DICTIONARY_MANAGER tool output.
 */
type TEXTRAZOR_DICTIONARY_MANAGER_OUTPUT = {
  /**
   * Data
   * @description The response data from the operation, if any.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message describing the result of the operation.
   */
  message?: string;
  /**
   * Ok
   * @description True if the operation was successful.
   */
  ok?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_ENTAILMENTS tool input.
 */
type TEXTRAZOR_EXTRACT_ENTAILMENTS_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode. Options: raw, stripTags, cleanHTML
   * @default null
   */
  cleanup_mode: string | null;
  /**
   * Cleanup Return Cleaned
   * @description When True, returns the cleaned text in response
   * @default null
   */
  cleanup_return_cleaned: boolean | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text to analyze for entailments (up to 200kb)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_ENTAILMENTS tool output.
 */
type TEXTRAZOR_EXTRACT_ENTAILMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cleaned Text
       * @description The cleaned text if cleanup_return_cleaned was True
       * @default null
       */
      cleanedText: string | null;
      /**
       * Entailments
       * @description List of entailments extracted from the text
       */
      entailments: {
          /**
           * Context Score
           * @description Agreement score between source word usage and entailed word
           */
          contextScore: number;
          /**
           * Entailed Tree
           * @description Tree containing the entailed word structure
           */
          entailedTree: {
              /**
               * Word
               * @description The entailed word
               */
              word: string;
          };
          /**
           * Prior Score
           * @description Score of entailment independent of context
           */
          priorScore: number;
          /**
           * Score
           * @description Overall confidence score (combination of prior and context)
           */
          score: number;
          /**
           * Word Positions
           * @description Token positions in sentence that generated this entailment
           */
          wordPositions: number[];
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
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_ENTITIES tool input.
 */
type TEXTRAZOR_EXTRACT_ENTITIES_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode
   * @default raw
   */
  cleanup_mode: string | null;
  /**
   * Entities Allow Overlap
   * @description When True, entities in response may overlap
   * @default true
   */
  entities_allow_overlap: boolean | null;
  /**
   * Entities Filter Dbpedia Types
   * @description List of DBPedia types to filter entities
   * @default null
   */
  entities_filter_dbpedia_types: string[] | null;
  /**
   * Entities Filter Freebase Types
   * @description List of Freebase types to filter entities
   * @default null
   */
  entities_filter_freebase_types: string[] | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text to analyze for entity extraction (max 200kb)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_ENTITIES tool output.
 */
type TEXTRAZOR_EXTRACT_ENTITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any problems occurred during analysis
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Any warning or informational messages
       * @default null
       */
      message: string | null;
      /**
       * Ok
       * @description True if TextRazor successfully analyzed the document
       */
      ok: boolean;
      /**
       * Response
       * @description The output of the requested analysis operations
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Time
       * @description Total time in seconds TextRazor took to process this request
       */
      time: number;
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
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_PHRASES tool input.
 */
type TEXTRAZOR_EXTRACT_PHRASES_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing of the content
   * @default raw
   */
  cleanup_mode: string | null;
  /**
   * Language
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language: string | null;
  /**
   * Text
   * @description UTF-8 encoded text to be analyzed (up to 200KB)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_PHRASES tool output.
 */
type TEXTRAZOR_EXTRACT_PHRASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ok
       * @description Whether the request was successful
       */
      ok: boolean;
      /**
       * Response
       * @description The main response containing extracted phrases
       */
      response: {
          /**
           * Noun Phrases
           * @description List of extracted noun phrases
           */
          nounPhrases: {
              /**
               * Word Positions
               * @description List of word positions that make up this phrase
               */
              wordPositions: number[];
          }[];
          /**
           * Sentences
           * @description List of sentences with their words
           */
          sentences: {
              /**
               * Words
               * @description List of words in the sentence
               */
              words: {
                  /**
                   * Ending Pos
                   * @description Ending position of the word in text
                   */
                  endingPos: number;
                  /**
                   * Position
                   * @description Position of the word in the sentence
                   */
                  position: number;
                  /**
                   * Starting Pos
                   * @description Starting position of the word in text
                   */
                  startingPos: number;
                  /**
                   * Token
                   * @description The actual word token
                   */
                  token: string;
              }[];
          }[];
      };
      /**
       * Time
       * @description Time taken to process the request
       */
      time: number;
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
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_RELATIONS tool input.
 */
type TEXTRAZOR_EXTRACT_RELATIONS_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode
   * @default raw
   */
  cleanup_mode: string | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text to analyze for relation extraction (max 200kb)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_RELATIONS tool output.
 */
type TEXTRAZOR_EXTRACT_RELATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any problems occurred during analysis
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Any warning or informational messages
       * @default null
       */
      message: string | null;
      /**
       * Ok
       * @description True if TextRazor successfully analyzed the document
       */
      ok: boolean;
      /**
       * Response
       * @description The output of the requested analysis operations
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Time
       * @description Total time in seconds TextRazor took to process this request
       */
      time: number;
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
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_WORD_SENSES tool input.
 */
type TEXTRAZOR_EXTRACT_WORD_SENSES_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode
   * @default raw
   */
  cleanupMode: string | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  languageOverride: string | null;
  /**
   * Text
   * @description The text content to analyze for word senses (up to 200kb of UTF-8 encoded text)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_EXTRACT_WORD_SENSES tool output.
 */
type TEXTRAZOR_EXTRACT_WORD_SENSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any problems occurred during analysis
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Any warning or informational messages
       * @default null
       */
      message: string | null;
      /**
       * Ok
       * @description True if TextRazor successfully analyzed the document
       * @default null
       */
      ok: boolean | null;
      /**
       * Response
       * @description The output of the requested analysis operations
       * @default null
       */
      response: {
          [key: string]: unknown;
      } | null;
      /**
       * Time
       * @description Total time in seconds TextRazor took to process this request
       * @default null
       */
      time: number | null;
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
 * Type of TEXTRAZOR's TEXTRAZOR_SPELLING_CORRECTION tool input.
 */
type TEXTRAZOR_SPELLING_CORRECTION_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing mode. Valid options: raw, stripTags, cleanHTML
   * @default cleanHTML
   */
  cleanup_mode: string;
  /**
   * Language
   * @description ISO-639-2 language code for specific language processing. If not provided, language will be auto-detected.
   * @default null
   */
  language: string | null;
  /**
   * Text
   * @description The text to perform spelling correction on
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_SPELLING_CORRECTION tool output.
 */
type TEXTRAZOR_SPELLING_CORRECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Words
       * @description List of words with their spelling suggestions if applicable
       */
      words: {
          /**
           * Spelling Suggestions
           * @description List of spelling suggestions for this word if it's potentially misspelled
           * @default null
           */
          spelling_suggestions: {
              /**
               * Score
               * @description Confidence score for the spelling suggestion
               */
              score: number;
              /**
               * Suggestion
               * @description The suggested correction for the misspelled word
               */
              suggestion: string;
          }[] | null;
          /**
           * Token
           * @description The original word from the text
           */
          token: string;
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
 * Type of TEXTRAZOR's TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT tool input.
 */
type TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode
   * @default stripTags
   */
  cleanup_mode: string | null;
  /**
   * Cleanup Return Cleaned
   * @description Return the cleaned text in response
   * @default false
   */
  cleanup_return_cleaned: boolean | null;
  /**
   * Cleanup Use Metadata
   * @description Use document metadata in analysis
   * @default true
   */
  cleanup_use_metadata: boolean | null;
  /**
   * Extractors
   * @description List of analysis features to perform
   * @default [
   *       "entities",
   *       "topics",
   *       "words",
   *       "phrases",
   *       "dependency-trees",
   *       "relations",
   *       "entailments",
   *       "senses"
   *     ]
   */
  extractors: string[] | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text content to be analyzed (up to 200kb UTF-8 encoded)
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT tool output.
 */
type TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if analysis failed
       * @default null
       */
      error: string | null;
      /**
       * Ok
       * @description Whether the analysis was successful
       */
      ok: boolean;
      /**
       * AnalysisResponse
       * @description Inner response object containing analysis results.
       * @default null
       */
      response: {
          /**
           * Cleaned Text
           * @description The cleaned text if requested
           * @default null
           */
          cleanedText: string | null;
          /**
           * Entities
           * @description List of extracted entities
           * @default null
           */
          entities: {
              /**
               * Confidence Score
               * @description Confidence score for the entity extraction
               * @default null
               */
              confidenceScore: number | null;
              /**
               * Entity English Id
               * @description The disambiguated entityId in the English Wikipedia
               * @default null
               */
              entityEnglishId: string | null;
              /**
               * Entity Id
               * @description The disambiguated ID for this entity
               * @default null
               */
              entityId: string | null;
              /**
               * Matched Text
               * @description Source text string that matched this entity
               */
              matchedText: string;
              /**
               * Matching Tokens
               * @description List of token positions in the sentence
               */
              matchingTokens: number[];
              /**
               * Relevance Score
               * @description Relevance score for the entity in the text
               * @default null
               */
              relevanceScore: number | null;
              /**
               * Type
               * @description List of Dbpedia types for this entity
               * @default null
               */
              type: string[] | null;
              /**
               * Wiki Link
               * @description Link to Wikipedia for this entity
               * @default null
               */
              wikiLink: string | null;
          }[] | null;
          /**
           * Language
           * @description The ISO-639-2 language code used for analysis
           */
          language: string;
          /**
           * Language Is Reliable
           * @description Whether language detection was confident
           */
          languageIsReliable: boolean;
          /**
           * Relations
           * @description List of relations
           * @default null
           */
          relations: {
              /**
               * Params
               * @description List of relation parameters
               */
              params: {
                  /**
                   * Relation
                   * @description Relation of this param to the predicate
                   */
                  relation: string;
                  /**
                   * Word Positions
                   * @description List of positions of the words in this param
                   */
                  wordPositions: number[];
              }[];
              /**
               * Word Positions
               * @description List of positions of the predicate words
               */
              wordPositions: number[];
          }[] | null;
          /**
           * Sentences
           * @description List of sentences
           * @default null
           */
          sentences: {
              /**
               * Words
               * @description List of words in the sentence
               */
              words: {
                  /**
                   * Ending Pos
                   * @description End offset in the input text
                   */
                  endingPos: number;
                  /**
                   * Lemma
                   * @description Morphological root of this word
                   * @default null
                   */
                  lemma: string | null;
                  /**
                   * Part Of Speech
                   * @description Part of Speech tag
                   * @default null
                   */
                  partOfSpeech: string | null;
                  /**
                   * Position
                   * @description Position of this word in its sentence
                   */
                  position: number;
                  /**
                   * Starting Pos
                   * @description Start offset in the input text
                   */
                  startingPos: number;
                  /**
                   * Token
                   * @description Raw token string from the source text
                   */
                  token: string;
              }[];
          }[] | null;
          /**
           * Topics
           * @description List of extracted topics
           * @default null
           */
          topics: {
              /**
               * Label
               * @description Label for this topic
               */
              label: string;
              /**
               * Score
               * @description The relevance of this topic to the document
               */
              score: number;
              /**
               * Wiki Link
               * @description Link to Wikipedia for this topic
               * @default null
               */
              wikiLink: string | null;
          }[] | null;
      } | null;
      /**
       * Time
       * @description Time taken for analysis in seconds
       */
      time: number;
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
 * Type of TEXTRAZOR's TEXTRAZOR_TOPIC_EXTRACTION tool input.
 */
type TEXTRAZOR_TOPIC_EXTRACTION_INPUT = {
  /**
   * Cleanup Mode
   * @description Controls preprocessing cleanup mode. Options: raw, stripTags, cleanHTML
   * @default null
   */
  cleanup_mode: string | null;
  /**
   * Language Override
   * @description ISO-639-2 language code to force analysis in a specific language
   * @default null
   */
  language_override: string | null;
  /**
   * Text
   * @description The text content to analyze for topic extraction.
   */
  text?: string;
};

/**
 * Type of TEXTRAZOR's TEXTRAZOR_TOPIC_EXTRACTION tool output.
 */
type TEXTRAZOR_TOPIC_EXTRACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Topics
       * @description List of topics extracted from the text
       */
      topics: {
          /**
           * Label
           * @description Label for this topic
           */
          label: string;
          /**
           * Score
           * @description The relevance of this topic to the processed document (0 to 1)
           */
          score: number;
          /**
           * Wiki Link
           * @description Link to Wikipedia for this topic
           * @default null
           */
          wikiLink: string | null;
          /**
           * Wikidata Id
           * @description The disambiguated Wikidata QID for this topic
           * @default null
           */
          wikidataId: string | null;
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
 * Type map of all available tool input types for toolkit "TEXTRAZOR".
 */
export type TEXTRAZOR_TOOL_INPUTS = {
  ACCOUNT_INFO: TEXTRAZOR_ACCOUNT_INFO_INPUT
  CLASSIFY_TEXT: TEXTRAZOR_CLASSIFY_TEXT_INPUT
  CUSTOM_CLASSIFIER_MANAGER: TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER_INPUT
  DEPENDENCY_TREES_ACTION: TEXTRAZOR_DEPENDENCY_TREES_ACTION_INPUT
  DICTIONARY_MANAGER: TEXTRAZOR_DICTIONARY_MANAGER_INPUT
  EXTRACT_ENTAILMENTS: TEXTRAZOR_EXTRACT_ENTAILMENTS_INPUT
  EXTRACT_ENTITIES: TEXTRAZOR_EXTRACT_ENTITIES_INPUT
  EXTRACT_PHRASES: TEXTRAZOR_EXTRACT_PHRASES_INPUT
  EXTRACT_RELATIONS: TEXTRAZOR_EXTRACT_RELATIONS_INPUT
  EXTRACT_WORD_SENSES: TEXTRAZOR_EXTRACT_WORD_SENSES_INPUT
  SPELLING_CORRECTION: TEXTRAZOR_SPELLING_CORRECTION_INPUT
  TEXT_RAZOR_ANALYZE_CONTENT: TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT_INPUT
  TOPIC_EXTRACTION: TEXTRAZOR_TOPIC_EXTRACTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEXTRAZOR".
 */
export type TEXTRAZOR_TOOL_OUTPUTS = {
  ACCOUNT_INFO: TEXTRAZOR_ACCOUNT_INFO_OUTPUT
  CLASSIFY_TEXT: TEXTRAZOR_CLASSIFY_TEXT_OUTPUT
  CUSTOM_CLASSIFIER_MANAGER: TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER_OUTPUT
  DEPENDENCY_TREES_ACTION: TEXTRAZOR_DEPENDENCY_TREES_ACTION_OUTPUT
  DICTIONARY_MANAGER: TEXTRAZOR_DICTIONARY_MANAGER_OUTPUT
  EXTRACT_ENTAILMENTS: TEXTRAZOR_EXTRACT_ENTAILMENTS_OUTPUT
  EXTRACT_ENTITIES: TEXTRAZOR_EXTRACT_ENTITIES_OUTPUT
  EXTRACT_PHRASES: TEXTRAZOR_EXTRACT_PHRASES_OUTPUT
  EXTRACT_RELATIONS: TEXTRAZOR_EXTRACT_RELATIONS_OUTPUT
  EXTRACT_WORD_SENSES: TEXTRAZOR_EXTRACT_WORD_SENSES_OUTPUT
  SPELLING_CORRECTION: TEXTRAZOR_SPELLING_CORRECTION_OUTPUT
  TEXT_RAZOR_ANALYZE_CONTENT: TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT_OUTPUT
  TOPIC_EXTRACTION: TEXTRAZOR_TOPIC_EXTRACTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEXTRAZOR toolkit.
 */
export const TEXTRAZOR = {
  slug: "textrazor",
  tools: {
    /**
     * This tool retrieves comprehensive information about a textrazor account, providing essential details about the account's status, usage, and limits. it returns an account object containing properties such as the current subscription plan, concurrent request limits, and daily usage among others, making it crucial for monitoring api usage, managing requests, and ensuring compliance with subscription limits.
     */
    ACCOUNT_INFO: "TEXTRAZOR_ACCOUNT_INFO",
    /**
     * This tool will classify text into predefined categories using textrazor's classification capabilities. it takes input text, optional cleanup mode and language, and returns a list of relevant categories with their confidence scores from the analysis. the tool supports various built-in classifiers including: - textrazor iab: iab qag segments - textrazor iab content taxonomy 3.0: iab content taxonomy v3.0 (2022) - textrazor mediatopics 2023q1: latest iptc media topics (march 2023) - and other versions of these taxonomies
     */
    CLASSIFY_TEXT: "TEXTRAZOR_CLASSIFY_TEXT",
    /**
     * This tool manages custom classifiers in textrazor, allowing users to create, update, and manage custom classification categories.
     */
    CUSTOM_CLASSIFIER_MANAGER: "TEXTRAZOR_CUSTOM_CLASSIFIER_MANAGER",
    /**
     * The dependencytreesaction analyzes the grammatical relationships between words in text by creating dependency trees. it provides detailed syntactic analysis by identifying the grammatical relationships between words and their parent words in a sentence. this tool is useful for: - understanding sentence structure - analyzing grammatical relationships - parsing complex sentences - supporting advanced linguistic analysis tasks
     */
    DEPENDENCY_TREES_ACTION: "TEXTRAZOR_DEPENDENCY_TREES_ACTION",
    /**
     * The textrazor dictionary manager tool allows users to create, update, and manage custom entity dictionaries in textrazor. it provides endpoints for creating/updating dictionaries, listing dictionaries, getting a specific dictionary, and deleting dictionaries, as well as managing the entries within these dictionaries (adding, retrieving, and deleting entries).
     */
    DICTIONARY_MANAGER: "TEXTRAZOR_DICTIONARY_MANAGER",
    /**
     * This tool extracts entailments from text using textrazor's api. it identifies words or phrases that can be logically inferred from the given text by analyzing logical implications and relationships.
     */
    EXTRACT_ENTAILMENTS: "TEXTRAZOR_EXTRACT_ENTAILMENTS",
    /**
     * Extract named entities (people, places, companies, etc.) from text using textrazor's entity extraction api. the tool will identify and classify named entities within the provided text, returning detailed information about each entity including its type, confidence score, and relevance score.
     */
    EXTRACT_ENTITIES: "TEXTRAZOR_EXTRACT_ENTITIES",
    /**
     * The extractphrases action extracts meaningful phrases from input text using textrazor's phrase extraction capability. it analyzes text to identify important phrases and multi-word expressions that aid in tasks like content analysis, keyword extraction, and summarization.
     */
    EXTRACT_PHRASES: "TEXTRAZOR_EXTRACT_PHRASES",
    /**
     * This tool extracts grammatical relations between words in the text. it identifies the relationships between different parts of sentences, including subjects, objects, and predicates. the relations extractor provides detailed syntactic analysis of the text.
     */
    EXTRACT_RELATIONS: "TEXTRAZOR_EXTRACT_RELATIONS",
    /**
     * This tool performs word sense disambiguation on the input text by identifying the most likely meanings of words in context. it uses textrazor's 'senses' extractor to determine the semantic meaning and provides detailed data including word, sense, confidence score, part of speech, position, synset, and definition.
     */
    EXTRACT_WORD_SENSES: "TEXTRAZOR_EXTRACT_WORD_SENSES",
    /**
     * This tool performs spelling correction on the provided text using textrazor's deep spelling correction system. it analyzes the input text for spelling errors and provides context-based corrections.
     */
    SPELLING_CORRECTION: "TEXTRAZOR_SPELLING_CORRECTION",
    /**
     * A comprehensive content analysis tool that combines multiple textrazor extractors to perform a complete analysis of the input text. this action allows users to analyze text content with multiple extractors in a single api call.
     */
    TEXT_RAZOR_ANALYZE_CONTENT: "TEXTRAZOR_TEXT_RAZOR_ANALYZE_CONTENT",
    /**
     * A tool to extract topics from text using textrazor's topic extraction capabilities. topics represent the main themes and concepts discussed in the text, with relevance scores indicating their importance to the document.
     */
    TOPIC_EXTRACTION: "TEXTRAZOR_TOPIC_EXTRACTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEXTRAZOR".
 */
export type TEXTRAZOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEXTRAZOR".
 */
export type TEXTRAZOR_TRIGGER_EVENTS = {}
