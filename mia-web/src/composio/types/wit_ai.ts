// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WIT_AI's WIT_AI_CREATE_APP tool input.
 */
type WIT_AI_CREATE_APP_INPUT = {
  /**
   * Lang
   * @description Locale code for the application
   */
  lang?: string;
  /**
   * Name
   * @description Name of the new Wit.ai application
   */
  name?: string;
  /**
   * Private
   * @description Whether the app is private. Defaults to true
   * @default true
   */
  private: boolean | null;
};

/**
 * Type of WIT_AI's WIT_AI_CREATE_APP tool output.
 */
type WIT_AI_CREATE_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601 format)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the new app
       */
      id: string;
      /**
       * Lang
       * @description Locale code of the app
       */
      lang: string;
      /**
       * Name
       * @description Name of the app
       */
      name: string;
      /**
       * Private
       * @description Privacy status of the app
       */
      private: boolean;
      /**
       * Training Status
       * @description Current training status of the app
       */
      training_status: string;
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
 * Type of WIT_AI's WIT_AI_CREATE_TRAIT tool input.
 */
type WIT_AI_CREATE_TRAIT_INPUT = {
  /**
   * Lookups
   * @description Lookup strategies to use (e.g., ['free_text']).
   * @default null
   */
  lookups: string[] | null;
  /**
   * Mutually Exclusive
   * @description If true, only one value can match per message.
   * @default null
   */
  mutually_exclusive: boolean | null;
  /**
   * Name
   * @description Unique name for the trait to create.
   */
  name?: string;
  /**
   * Values
   * @description List of trait values; must include at least one value.
   */
  values?: {
      /**
       * Expressions
       * @description Example expressions mapping to this trait value.
       * @default null
       */
      expressions: string[] | null;
      /**
       * Metadata
       * @description Optional metadata associated with this trait value.
       * @default null
       */
      metadata: string | null;
      /**
       * Value
       * @description The canonical value of this trait.
       */
      value: string;
  }[];
};

/**
 * Type of WIT_AI's WIT_AI_CREATE_TRAIT tool output.
 */
type WIT_AI_CREATE_TRAIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the trait was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the created trait.
       */
      id: string;
      /**
       * Lang
       * @description Language code of the trait.
       */
      lang: string;
      /**
       * Lookups
       * @description Lookup strategies for the trait.
       * @default null
       */
      lookups: string[] | null;
      /**
       * Mutually Exclusive
       * @description Whether the trait is mutually exclusive.
       * @default null
       */
      mutually_exclusive: boolean | null;
      /**
       * Name
       * @description Name of the created trait.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the trait was last updated.
       */
      updated_at: string;
      /**
       * Values
       * @description List of trait values.
       */
      values: {
          /**
           * Expressions
           * @description Example expressions mapping to this trait value.
           * @default null
           */
          expressions: string[] | null;
          /**
           * Metadata
           * @description Optional metadata associated with this trait value.
           * @default null
           */
          metadata: string | null;
          /**
           * Value
           * @description The canonical value of this trait.
           */
          value: string;
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
 * Type of WIT_AI's WIT_AI_DELETE_APP tool input.
 */
type WIT_AI_DELETE_APP_INPUT = {
  /**
   * Access Token
   * @description Optional access token to use for this request. If provided, this will override the default token.
   * @default null
   */
  access_token: string | null;
  /**
   * App Id
   * @description The unique identifier of the app to delete
   */
  app_id?: string;
};

/**
 * Type of WIT_AI's WIT_AI_DELETE_APP tool output.
 */
type WIT_AI_DELETE_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of WIT_AI's WIT_AI_GET_APP tool input.
 */
type WIT_AI_GET_APP_INPUT = {
  /**
   * Access Token
   * @description App-specific access token; if provided, overrides default Authorization header
   * @default null
   */
  access_token: string | null;
  /**
   * App Id
   * @description ID of the Wit.ai app to retrieve
   */
  app_id?: string;
};

/**
 * Type of WIT_AI's WIT_AI_GET_APP tool output.
 */
type WIT_AI_GET_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the app
       */
      id: string;
      /**
       * Lang
       * @description Language code of the app (ISO 639-1)
       */
      lang: string;
      /**
       * Name
       * @description Name of the app
       */
      name: string;
      /**
       * Private
       * @description Whether the app is private
       */
      private: boolean;
      /**
       * Settings
       * @description Application-specific settings mapping setting names to their values
       */
      settings: {
          [key: string]: string | number | boolean | (string | number | boolean)[] | {
              [key: string]: string | number | boolean;
          };
      };
      /**
       * Training Status
       * @description Current training status of the app
       */
      training_status: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_at: string;
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
 * Type of WIT_AI's WIT_AI_GET_INTENT tool input.
 */
type WIT_AI_GET_INTENT_INPUT = {
  /**
   * Intent Id
   * @description ID of the intent to retrieve
   */
  intent_id?: string;
};

/**
 * Type of WIT_AI's WIT_AI_GET_INTENT tool output.
 */
type WIT_AI_GET_INTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Entities
       * @description List of entities used in the intent
       */
      entities: string[];
      /**
       * Expressions
       * @description List of expressions/examples for the intent
       */
      expressions: string[];
      /**
       * Id
       * @description Unique identifier of the intent
       */
      id: string;
      /**
       * Name
       * @description Name of the intent
       */
      name: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       */
      updated_at: string;
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
 * Type of WIT_AI's WIT_AI_GET_INTENTS tool input.
 */
type WIT_AI_GET_INTENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of intents to return (default: 100, max: 200)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set (default: 0)
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WIT_AI's WIT_AI_GET_INTENTS tool output.
 */
type WIT_AI_GET_INTENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Intents
       * @description List of intents retrieved from the app
       */
      intents: {
          /**
           * Doc
           * @description Documentation or description of the intent
           * @default null
           */
          doc: string | null;
          /**
           * Id
           * @description Unique identifier for the intent
           */
          id: string;
          /**
           * Name
           * @description Name of the intent
           */
          name: string;
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
 * Type of WIT_AI's WIT_AI_GET_MESSAGE tool input.
 */
type WIT_AI_GET_MESSAGE_INPUT = {
  /**
   * Context
   * @description JSON-stringified context object for conversation
   * @default null
   */
  context: string | null;
  /**
   * N
   * @description Maximum number of outcomes to return (default is 1)
   * @default null
   */
  n: number | null;
  /**
   * Q
   * @description Text message to analyze for intent and entities
   */
  q?: string;
};

/**
 * Type of WIT_AI's WIT_AI_GET_MESSAGE tool output.
 */
type WIT_AI_GET_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entities
       * @description Extracted entities keyed by entity name
       */
      entities: {
          [key: string]: {
              /**
               * Body
               * @description Portion of the original text that matched the entity
               */
              body: string;
              /**
               * Confidence
               * @description Confidence score for the entity (0.0-1.0)
               */
              confidence: number;
              /**
               * End
               * @description End character index (exclusive) of the entity in the text
               */
              end: number;
              /**
               * Entity
               * @description Name of the entity
               */
              entity: string;
              /**
               * Id
               * @description Unique identifier of the entity value
               */
              id: string;
              /**
               * Start
               * @description Start character index of the entity in the text
               */
              start: number;
              /**
               * Value
               * @description Value extracted for the entity
               */
              value: string | number | boolean | {
                  [key: string]: string | number | boolean;
              } | (string | number | boolean)[];
          }[];
      };
      /**
       * Intents
       * @description List of detected intents with confidence scores
       */
      intents: {
          /**
           * Confidence
           * @description Confidence score for the intent (0.0-1.0)
           */
          confidence: number;
          /**
           * Id
           * @description Unique identifier of the intent
           */
          id: string;
          /**
           * Name
           * @description Name of the matched intent
           */
          name: string;
      }[];
      /**
       * Msg Id
       * @description Unique identifier for the message
       */
      msg_id: string;
      /**
       * Text
       * @description Original text sent in the request
       */
      text: string;
      /**
       * Traits
       * @description Extracted traits keyed by trait name
       */
      traits: {
          [key: string]: {
              /**
               * Confidence
               * @description Confidence score for the trait (0.0-1.0)
               */
              confidence: number;
              /**
               * Id
               * @description Unique identifier of the trait value
               */
              id: string;
              /**
               * Trait
               * @description Name of the trait
               */
              trait: string;
              /**
               * Value
               * @description Value of the trait
               */
              value: string;
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
 * Type of WIT_AI's WIT_AI_GET_TRAIT tool input.
 */
type WIT_AI_GET_TRAIT_INPUT = {
  /**
   * Trait Id
   * @description Unique identifier of the trait to retrieve
   */
  trait_id?: string;
};

/**
 * Type of WIT_AI's WIT_AI_GET_TRAIT tool output.
 */
type WIT_AI_GET_TRAIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the trait
       */
      id: string;
      /**
       * Lang
       * @description Language code of the trait (e.g., 'en')
       */
      lang: string;
      /**
       * Lookups
       * @description Detection strategies for the trait (e.g., ['free_text', 'keywords'])
       */
      lookups: string[];
      /**
       * Name
       * @description Name of the trait
       */
      name: string;
      /**
       * Values
       * @description List of values associated with the trait
       */
      values: {
          /**
           * Expressions
           * @description List of expressions for this value
           */
          expressions?: string[];
          /**
           * Id
           * @description Unique identifier of the trait value
           */
          id: string;
          /**
           * Metadata
           * @description Optional metadata associated with the value
           * @default null
           */
          metadata: string | null;
          /**
           * Synonyms
           * @description List of synonyms for this value
           */
          synonyms?: string[];
          /**
           * Value
           * @description Name of the trait value
           */
          value: string;
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
 * Type of WIT_AI's WIT_AI_GET_TRAITS tool input.
 */
type WIT_AI_GET_TRAITS_INPUT = {
  /**
   * V
   * @description API version to use, as a date (YYYYMMDD) or '20230215' for the current supported version. Defaults to latest stable if omitted.
   * @default null
   */
  v: string | null;
};

/**
 * Type of WIT_AI's WIT_AI_GET_TRAITS tool output.
 */
type WIT_AI_GET_TRAITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Traits
       * @description List of custom traits retrieved from the app.
       */
      traits: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the trait.
           */
          id: string;
          /**
           * Name
           * @description Name of the trait.
           */
          name: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format.
           */
          updated_at: string;
          /**
           * Values
           * @description List of possible values for the trait.
           */
          values: {
              /**
               * Expressions
               * @description List of expressions (utterances) for this trait value.
               * @default null
               */
              expressions: string[] | null;
              /**
               * Value
               * @description The trait's value.
               */
              value: string;
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
 * Type of WIT_AI's WIT_AI_WIT_AI_PUT_APP tool input.
 */
type WIT_AI_WIT_AI_PUT_APP_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the app to update
   */
  app_id?: string;
  /**
   * Body
   * @description Fields and values to update on the app
   */
  body?: {
      /**
       * Desc
       * @description Description of the app
       * @default null
       */
      desc: string | null;
      /**
       * Lang
       * @description Language of the app (ISO code, e.g., 'en')
       * @default null
       */
      lang: string | null;
      /**
       * Private
       * @description Whether the app is private
       * @default null
       */
      private: boolean | null;
      /**
       * Timezone
       * @description Timezone of the app (e.g., 'America/Los_Angeles')
       * @default null
       */
      timezone: string | null;
      /**
       * Training Limit
       * @description Maximum number of training requests per minute
       * @default null
       */
      training_limit: number | null;
      /**
       * Voice
       * @description Enable voice capability
       * @default null
       */
      voice: boolean | null;
  };
};

/**
 * Type of WIT_AI's WIT_AI_WIT_AI_PUT_APP tool output.
 */
type WIT_AI_WIT_AI_PUT_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Access token of the app
       * @default null
       */
      access_token: string | null;
      /**
       * Created At
       * @description Timestamp when the app was created
       */
      created_at: string;
      /**
       * Desc
       * @description Description of the app
       * @default null
       */
      desc: string | null;
      /**
       * Entities
       * @description List of entities associated with the app
       */
      entities: {
          [key: string]: unknown;
      }[];
      /**
       * Id
       * @description Unique identifier of the app
       */
      id: string;
      /**
       * Intents
       * @description List of intents associated with the app
       */
      intents: {
          [key: string]: unknown;
      }[];
      /**
       * Lang
       * @description Language code of the app
       */
      lang: string;
      /**
       * Name
       * @description Name of the app
       */
      name: string;
      /**
       * Private
       * @description Indicates if the app is private
       */
      private: boolean;
      /**
       * Pubsub Subscriptions
       * @description List of pubsub subscriptions
       */
      pubsub_subscriptions: unknown[];
      /**
       * Timezone
       * @description Timezone of the app
       * @default null
       */
      timezone: string | null;
      /**
       * Training Limit
       * @description Maximum number of training requests per minute
       * @default null
       */
      training_limit: number | null;
      /**
       * Traits
       * @description List of traits associated with the app
       */
      traits: {
          [key: string]: unknown;
      }[];
      /**
       * Updated At
       * @description Timestamp when the app was last updated
       */
      updated_at: string;
      /**
       * Voice
       * @description Voice capability enabled
       * @default null
       */
      voice: boolean | null;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "WIT_AI".
 */
export type WIT_AI_TOOL_INPUTS = {
  CREATE_APP: WIT_AI_CREATE_APP_INPUT
  CREATE_TRAIT: WIT_AI_CREATE_TRAIT_INPUT
  DELETE_APP: WIT_AI_DELETE_APP_INPUT
  GET_APP: WIT_AI_GET_APP_INPUT
  GET_INTENT: WIT_AI_GET_INTENT_INPUT
  GET_INTENTS: WIT_AI_GET_INTENTS_INPUT
  GET_MESSAGE: WIT_AI_GET_MESSAGE_INPUT
  GET_TRAIT: WIT_AI_GET_TRAIT_INPUT
  GET_TRAITS: WIT_AI_GET_TRAITS_INPUT
  WIT_AI_PUT_APP: WIT_AI_WIT_AI_PUT_APP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WIT_AI".
 */
export type WIT_AI_TOOL_OUTPUTS = {
  CREATE_APP: WIT_AI_CREATE_APP_OUTPUT
  CREATE_TRAIT: WIT_AI_CREATE_TRAIT_OUTPUT
  DELETE_APP: WIT_AI_DELETE_APP_OUTPUT
  GET_APP: WIT_AI_GET_APP_OUTPUT
  GET_INTENT: WIT_AI_GET_INTENT_OUTPUT
  GET_INTENTS: WIT_AI_GET_INTENTS_OUTPUT
  GET_MESSAGE: WIT_AI_GET_MESSAGE_OUTPUT
  GET_TRAIT: WIT_AI_GET_TRAIT_OUTPUT
  GET_TRAITS: WIT_AI_GET_TRAITS_OUTPUT
  WIT_AI_PUT_APP: WIT_AI_WIT_AI_PUT_APP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WIT_AI toolkit.
 */
export const WIT_AI = {
  slug: "wit_ai",
  tools: {
    /**
     * Tool to create a new app in wit.ai. use when you need to programmatically initialize an application before training or importing data.
     */
    CREATE_APP: "WIT_AI_CREATE_APP",
    /**
     * Tool to create a new trait in wit.ai. use when defining custom entity attribute matching behavior.
     */
    CREATE_TRAIT: "WIT_AI_CREATE_TRAIT",
    /**
     * Tool to delete a specific app from wit.ai. use when you need to remove an existing app by its id after confirming its existence.
     */
    DELETE_APP: "WIT_AI_DELETE_APP",
    /**
     * Tool to retrieve metadata and settings of a wit.ai app. use when you need to fetch complete app details by app id after authenticating.
     */
    GET_APP: "WIT_AI_GET_APP",
    /**
     * Tool to retrieve details of a specific intent. use when you need full intent metadata given its id.
     */
    GET_INTENT: "WIT_AI_GET_INTENT",
    /**
     * Tool to list all intents in a wit.ai app. use after authenticating to retrieve defined intents.
     */
    GET_INTENTS: "WIT_AI_GET_INTENTS",
    /**
     * Tool to analyze a text message and extract its intent, entities, and traits. use when you need structured meaning from user input.
     */
    GET_MESSAGE: "WIT_AI_GET_MESSAGE",
    /**
     * Tool to retrieve details of a specific trait. use when you have the trait id and need its full metadata.
     */
    GET_TRAIT: "WIT_AI_GET_TRAIT",
    /**
     * Tool to list all traits in a wit.ai app. use after authenticating to retrieve defined traits.
     */
    GET_TRAITS: "WIT_AI_GET_TRAITS",
    /**
     * Tool to update an existing wit.ai app. use when you need to modify app settings after creation.
     */
    WIT_AI_PUT_APP: "WIT_AI_WIT_AI_PUT_APP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WIT_AI".
 */
export type WIT_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WIT_AI".
 */
export type WIT_AI_TRIGGER_EVENTS = {}
