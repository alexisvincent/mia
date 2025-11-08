// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KONTENT_AI's KONTENT_AI_GET_CONTENT_ITEM tool input.
 */
type KONTENT_AI_GET_CONTENT_ITEM_INPUT = {
  /**
   * Environment Id
   * @description UUID of the target environment/project
   */
  environment_id?: string;
  /**
   * Item Identifier
   * @description Identifier of the content item. Use internal ID, or prefix with 'external-id/' or 'codename/' for external IDs or codenames respectively.
   */
  item_identifier?: string;
};

/**
 * Type of KONTENT_AI's KONTENT_AI_GET_CONTENT_ITEM tool output.
 */
type KONTENT_AI_GET_CONTENT_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Codename
       * @description Codename of the content item
       */
      codename: string;
      /**
       * ReferenceResponse
       * @description Reference to a Kontent object with its identifiers in responses.
       * @default null
       */
      collection: {
          /**
           * Codename
           * @description Codename of the referenced object
           * @default null
           */
          codename: string | null;
          /**
           * External Id
           * @description External ID of the referenced object
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Internal UUID of the referenced object
           */
          id: string;
      } | null;
      /**
       * External Id
       * @description External ID of the content item, if set
       * @default null
       */
      external_id: string | null;
      /**
       * Id
       * @description Internal UUID of the content item
       */
      id: string;
      /**
       * Last Modified
       * @description ISO-8601 timestamp of last update of the item
       */
      last_modified: string;
      /**
       * Name
       * @description Display name of the content item
       */
      name: string;
      /**
       * Sitemap Locations
       * @description (Deprecated) sitemap locations of the item
       * @default null
       */
      sitemap_locations: {
          /**
           * Codename
           * @description Codename of the referenced object
           * @default null
           */
          codename: string | null;
          /**
           * External Id
           * @description External ID of the referenced object
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Internal UUID of the referenced object
           */
          id: string;
      }[] | null;
      /**
       * Spaces
       * @description List of spaces the item belongs to
       * @default null
       */
      spaces: {
          /**
           * Codename
           * @description Codename of the referenced object
           * @default null
           */
          codename: string | null;
          /**
           * External Id
           * @description External ID of the referenced object
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Internal UUID of the referenced object
           */
          id: string;
      }[] | null;
      /**
       * Type
       * @description Reference to the content type of the item
       */
      type: {
          /**
           * Codename
           * @description Codename of the referenced object
           * @default null
           */
          codename: string | null;
          /**
           * External Id
           * @description External ID of the referenced object
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Internal UUID of the referenced object
           */
          id: string;
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
 * Type of KONTENT_AI's KONTENT_AI_GET_LANGUAGE tool input.
 */
type KONTENT_AI_GET_LANGUAGE_INPUT = {
  /**
   * Environment Id
   * @description UUID of the target environment/project
   */
  environment_id?: string;
  /**
   * Language Identifier
   * @description Identifier of the language. Use internal ID (UUID), or prefix with 'external-id/' for external ID, or 'codename/' for language codename.
   */
  language_identifier?: string;
};

/**
 * Type of KONTENT_AI's KONTENT_AI_GET_LANGUAGE tool output.
 */
type KONTENT_AI_GET_LANGUAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Codename
       * @description Codename of the language (≤ 25 chars)
       */
      codename: string;
      /**
       * External Id
       * @description External ID of the language, if defined
       * @default null
       */
      external_id: string | null;
      /**
       * FallbackLanguageResponse
       * @description Fallback language reference in response.
       * @default null
       */
      fallback_language: {
          /**
           * Id
           * @description Internal ID of the referenced fallback language
           */
          id: string;
      } | null;
      /**
       * Id
       * @description Internal ID of the language
       */
      id: string;
      /**
       * Is Active
       * @description Whether the language is active (Management only)
       * @default null
       */
      is_active: boolean | null;
      /**
       * Is Default
       * @description Whether the language is the default (Management only)
       * @default null
       */
      is_default: boolean | null;
      /**
       * Name
       * @description Display name of the language (≤ 25 chars)
       */
      name: string;
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
 * Type of KONTENT_AI's KONTENT_AI_GET_LANGUAGE_VARIANT tool input.
 */
type KONTENT_AI_GET_LANGUAGE_VARIANT_INPUT = {
  /**
   * Content Item Identifier
   * @description Identifier of the content item. Use internal ID, or prefix with 'external-id/' or 'codename/' for external IDs or codenames respectively.
   */
  content_item_identifier?: string;
  /**
   * Environment Id
   * @description UUID of the target environment/project
   */
  environment_id?: string;
  /**
   * Language Identifier
   * @description Identifier of the language variant. Use internal ID, or prefix with 'codename/' for codename of the language.
   */
  language_identifier?: string;
};

/**
 * Type of KONTENT_AI's KONTENT_AI_GET_LANGUAGE_VARIANT tool output.
 */
type KONTENT_AI_GET_LANGUAGE_VARIANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contributors
       * @description Contributors assigned to this variant
       * @default null
       */
      contributors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Due Date
       * @description Due date information for the variant
       * @default null
       */
      due_date: {
          [key: string]: unknown;
      } | null;
      /**
       * Elements
       * @description Element objects keyed by element codename
       */
      elements: {
          [key: string]: {
              [key: string]: unknown;
          };
      };
      /**
       * Item
       * @description Reference to the content item
       */
      item: {
          [key: string]: unknown;
      };
      /**
       * Language
       * @description Reference to the language
       */
      language: {
          [key: string]: unknown;
      };
      /**
       * Last Modified
       * @description ISO 8601 timestamp of the last content change
       */
      last_modified: string;
      /**
       * Note
       * @description Additional instructions or notes
       * @default null
       */
      note: string | null;
      /**
       * Schedule
       * @description Scheduled publishing and unpublishing dates
       * @default null
       */
      schedule: {
          [key: string]: unknown;
      } | null;
      /**
       * Workflow
       * @description Workflow object with current workflow and step
       */
      workflow: {
          [key: string]: unknown;
      };
      /**
       * Workflow Step
       * @description Deprecated workflow step object
       * @default null
       */
      workflow_step: {
          [key: string]: unknown;
      } | null;
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
 * Type of KONTENT_AI's KONTENT_AI_LIST_CONTENT_ITEMS tool input.
 */
type KONTENT_AI_LIST_CONTENT_ITEMS_INPUT = {
  /**
   * Continuation Token
   * @description Continuation token to fetch the next page of results
   * @default null
   */
  continuation_token: string | null;
  /**
   * Environment Id
   * @description UUID of the target environment/project
   */
  environment_id?: string;
};

/**
 * Type of KONTENT_AI's KONTENT_AI_LIST_CONTENT_ITEMS tool output.
 */
type KONTENT_AI_LIST_CONTENT_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Page of content items
       */
      items: {
          /**
           * Elements
           * @description Elements of the content item
           * @default null
           */
          elements: {
              [key: string]: unknown;
          } | null;
          /**
           * System
           * @description System metadata of the content item
           */
          system: {
              /**
               * Codename
               * @description Codename of the content item
               */
              codename: string;
              /**
               * SystemReference
               * @description Reference to a Kontent AI object with its identifiers (Delivery API system refs).
               * @default null
               */
              collection: {
                  /**
                   * Codename
                   * @description Codename of the referenced object
                   * @default null
                   */
                  codename: string | null;
                  /**
                   * Id
                   * @description Internal UUID of the referenced object
                   */
                  id: string;
              } | null;
              /**
               * Id
               * @description Internal UUID of the content item
               */
              id: string;
              /**
               * SystemReference
               * @description Reference to a Kontent AI object with its identifiers (Delivery API system refs).
               * @default null
               */
              language: {
                  /**
                   * Codename
                   * @description Codename of the referenced object
                   * @default null
                   */
                  codename: string | null;
                  /**
                   * Id
                   * @description Internal UUID of the referenced object
                   */
                  id: string;
              } | null;
              /**
               * Last Modified
               * @description ISO-8601 timestamp of last update of the item
               */
              last_modified: string;
              /**
               * Name
               * @description Display name of the content item
               */
              name: string;
              /**
               * Sitemap Locations
               * @description (Deprecated) sitemap locations of the item
               * @default null
               */
              sitemap_locations: {
                  /**
                   * Codename
                   * @description Codename of the referenced object
                   * @default null
                   */
                  codename: string | null;
                  /**
                   * Id
                   * @description Internal UUID of the referenced object
                   */
                  id: string;
              }[] | null;
              /**
               * Spaces
               * @description List of spaces the item belongs to
               * @default null
               */
              spaces: {
                  /**
                   * Codename
                   * @description Codename of the referenced object
                   * @default null
                   */
                  codename: string | null;
                  /**
                   * Id
                   * @description Internal UUID of the referenced object
                   */
                  id: string;
              }[] | null;
              /**
               * Type
               * @description Reference to the content type of the item
               */
              type: {
                  /**
                   * Codename
                   * @description Codename of the referenced object
                   * @default null
                   */
                  codename: string | null;
                  /**
                   * Id
                   * @description Internal UUID of the referenced object
                   */
                  id: string;
              };
          };
      }[];
      /**
       * Pagination
       * @description Pagination metadata
       */
      pagination: {
          /**
           * Continuation Token
           * @description Token to fetch the next page via x-continuation header
           * @default null
           */
          continuation_token: string | null;
          /**
           * Next Page
           * @description URL of the next page
           * @default null
           */
          next_page: string | null;
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
 * Type of KONTENT_AI's KONTENT_AI_LIST_CONTENT_TYPES tool input.
 */
type KONTENT_AI_LIST_CONTENT_TYPES_INPUT = {
  /**
   * Continuation
   * @description Continuation token from a previous response to fetch the next page.
   * @default null
   */
  continuation: string | null;
  /**
   * Environment Id
   * @description ID of the target environment (project).
   */
  environment_id?: string;
};

/**
 * Type of KONTENT_AI's KONTENT_AI_LIST_CONTENT_TYPES tool output.
 */
type KONTENT_AI_LIST_CONTENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination info for fetching additional pages.
       */
      pagination: {
          /**
           * Continuation Token
           * @description Token to retrieve the next page via x-continuation header.
           * @default null
           */
          continuation_token: string | null;
          /**
           * Next Page
           * @description Absolute URL of the next page.
           * @default null
           */
          next_page: string | null;
      };
      /**
       * Types
       * @description List of content types returned.
       */
      types: {
          /**
           * Codename
           * @description Codename of the content type.
           */
          codename: string;
          /**
           * Content Groups
           * @description List of content groups for the type.
           */
          content_groups: {
              /**
               * Codename
               * @description Codename of the content group.
               */
              codename: string;
              /**
               * External Id
               * @description External ID of the content group, if set.
               * @default null
               */
              external_id: string | null;
              /**
               * Id
               * @description Internal ID of the content group.
               */
              id: string;
              /**
               * Name
               * @description Display name of the content group.
               */
              name: string;
          }[];
          /**
           * Elements
           * @description List of element definitions belonging to the content type.
           */
          elements: {
              /**
               * Allowed Blocks
               * @description Allowed block types for rich text elements.
               * @default null
               */
              allowed_blocks: string[] | null;
              /**
               * Allowed Content Types
               * @description Allowed content type IDs for linked items elements.
               * @default null
               */
              allowed_content_types: string[] | null;
              /**
               * Allowed Image Types
               * @description Allowed image MIME types for asset elements.
               * @default null
               */
              allowed_image_types: string[] | null;
              /**
               * Allowed Item Link Types
               * @description Allowed item link types for rich text elements.
               * @default null
               */
              allowed_item_link_types: string[] | null;
              /**
               * Codename
               * @description Codename of the element.
               */
              codename: string;
              /**
               * ContentGroupResponse
               * @description Response model for a content group within a content type.
               * @default null
               */
              content_group: {
                  /**
                   * Codename
                   * @description Codename of the content group.
                   */
                  codename: string;
                  /**
                   * External Id
                   * @description External ID of the content group, if set.
                   * @default null
                   */
                  external_id: string | null;
                  /**
                   * Id
                   * @description Internal ID of the content group.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Display name of the content group.
                   */
                  name: string;
              } | null;
              /**
               * Depends On
               * @description Codenames of elements that a URL slug depends on.
               * @default null
               */
              depends_on: string[] | null;
              /**
               * Guidelines
               * @description Guidelines of the element.
               * @default null
               */
              guidelines: string | null;
              /**
               * Id
               * @description Internal ID of the element.
               */
              id: string;
              /**
               * Image Height Limit
               * @description Max image height for asset elements.
               * @default null
               */
              image_height_limit: number | null;
              /**
               * Image Width Limit
               * @description Max image width for asset elements.
               * @default null
               */
              image_width_limit: number | null;
              /**
               * Is Non Localizable
               * @description Flag indicating if the element is non-localizable.
               */
              is_non_localizable: boolean;
              /**
               * Is Required
               * @description Flag indicating if the element is required.
               */
              is_required: boolean;
              /**
               * Maximum Image Size
               * @description Maximum image size in bytes for asset elements.
               * @default null
               */
              maximum_image_size: number | null;
              /**
               * Maximum Text Length
               * @description Maximum length for text elements.
               * @default null
               */
              maximum_text_length: number | null;
              /**
               * Name
               * @description Display name of the element.
               */
              name: string;
              /**
               * Taxonomy Group
               * @description Codename of the taxonomy group for taxonomy elements.
               * @default null
               */
              taxonomy_group: string | null;
              /**
               * Type
               * @description Type of the element.
               */
              type: string;
              /**
               * Validation Regex
               * @description Validation regex for text or slug elements.
               * @default null
               */
              validation_regex: string | null;
          }[];
          /**
           * External Id
           * @description External ID of the content type, if set.
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Internal ID of the content type.
           */
          id: string;
          /**
           * Last Modified
           * @description ISO-8601 timestamp of last change to the content type.
           */
          last_modified: string;
          /**
           * Name
           * @description Display name of the content type.
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
 * Type of KONTENT_AI's KONTENT_AI_LIST_LANGUAGES tool input.
 */
type KONTENT_AI_LIST_LANGUAGES_INPUT = {
  /**
   * Environment Id
   * @description UUID of the target environment/project
   */
  environment_id?: string;
  /**
   * Limit
   * @description Maximum number of items to return
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Specifies the ordering of languages, e.g., codename[asc]
   * @default null
   */
  order: string | null;
  /**
   * Skip
   * @description Number of items to skip for pagination
   * @default null
   */
  skip: number | null;
};

/**
 * Type of KONTENT_AI's KONTENT_AI_LIST_LANGUAGES tool output.
 */
type KONTENT_AI_LIST_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description List of languages
       */
      languages: {
          /**
           * Codename
           * @description Codename of the language (Delivery: from system.codename)
           * @default null
           */
          codename: string | null;
          /**
           * External Id
           * @description External ID of the language, if defined (Management only)
           * @default null
           */
          external_id: string | null;
          /**
           * FallbackLanguageResponse
           * @description Reference to a fallback language.
           * @default null
           */
          fallback_language: {
              /**
               * Id
               * @description Internal ID of the fallback language (may be absent in Delivery API)
               * @default null
               */
              id: string | null;
          } | null;
          /**
           * Id
           * @description Internal ID of the language (Delivery: from system.id)
           * @default null
           */
          id: string | null;
          /**
           * Is Active
           * @description Whether the language is active (Management only)
           * @default null
           */
          is_active: boolean | null;
          /**
           * Is Default
           * @description Whether the language is the default (Management only)
           * @default null
           */
          is_default: boolean | null;
          /**
           * Name
           * @description Display name of the language (Delivery: from system.name)
           * @default null
           */
          name: string | null;
      }[];
      /**
       * PaginationResponse
       * @description Pagination metadata for list responses.
       * @default null
       */
      pagination: {
          /**
           * Count
           * @description Total number of items in the result
           * @default null
           */
          count: number | null;
          /**
           * Limit
           * @description Maximum number of items requested
           * @default null
           */
          limit: number | null;
          /**
           * Skip
           * @description Number of items skipped
           * @default null
           */
          skip: number | null;
      } | null;
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
 * Type map of all available tool input types for toolkit "KONTENT_AI".
 */
export type KONTENT_AI_TOOL_INPUTS = {
  GET_CONTENT_ITEM: KONTENT_AI_GET_CONTENT_ITEM_INPUT
  GET_LANGUAGE: KONTENT_AI_GET_LANGUAGE_INPUT
  GET_LANGUAGE_VARIANT: KONTENT_AI_GET_LANGUAGE_VARIANT_INPUT
  LIST_CONTENT_ITEMS: KONTENT_AI_LIST_CONTENT_ITEMS_INPUT
  LIST_CONTENT_TYPES: KONTENT_AI_LIST_CONTENT_TYPES_INPUT
  LIST_LANGUAGES: KONTENT_AI_LIST_LANGUAGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KONTENT_AI".
 */
export type KONTENT_AI_TOOL_OUTPUTS = {
  GET_CONTENT_ITEM: KONTENT_AI_GET_CONTENT_ITEM_OUTPUT
  GET_LANGUAGE: KONTENT_AI_GET_LANGUAGE_OUTPUT
  GET_LANGUAGE_VARIANT: KONTENT_AI_GET_LANGUAGE_VARIANT_OUTPUT
  LIST_CONTENT_ITEMS: KONTENT_AI_LIST_CONTENT_ITEMS_OUTPUT
  LIST_CONTENT_TYPES: KONTENT_AI_LIST_CONTENT_TYPES_OUTPUT
  LIST_LANGUAGES: KONTENT_AI_LIST_LANGUAGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KONTENT_AI toolkit.
 */
export const KONTENT_AI = {
  slug: "kontent_ai",
  tools: {
    /**
     * Tool to retrieve a specific content item by its identifier. use after confirming the environment id and item identifier.
     */
    GET_CONTENT_ITEM: "KONTENT_AI_GET_CONTENT_ITEM",
    /**
     * Tool to retrieve a specific language by its id. supports management api directly and delivery api via normalization.
     */
    GET_LANGUAGE: "KONTENT_AI_GET_LANGUAGE",
    /**
     * Tool to retrieve a specific language variant of a content item. use after confirming the item and language identifiers when needing localized content.
     */
    GET_LANGUAGE_VARIANT: "KONTENT_AI_GET_LANGUAGE_VARIANT",
    /**
     * Tool to list content items from the delivery api. use when fetching content items for a specified environment, optionally providing a continuation token for pagination.
     */
    LIST_CONTENT_ITEMS: "KONTENT_AI_LIST_CONTENT_ITEMS",
    /**
     * Tool to list content types within a kontent.ai environment. use when you need to retrieve a paginated list of content type definitions. use after confirming the environment id.
     */
    LIST_CONTENT_TYPES: "KONTENT_AI_LIST_CONTENT_TYPES",
    /**
     * Tool to list languages in a kontent.ai project. use when you need to retrieve all languages for a specified environment after confirming the project id.
     */
    LIST_LANGUAGES: "KONTENT_AI_LIST_LANGUAGES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KONTENT_AI".
 */
export type KONTENT_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KONTENT_AI".
 */
export type KONTENT_AI_TRIGGER_EVENTS = {}
