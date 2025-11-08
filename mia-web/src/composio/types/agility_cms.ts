// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_AUTHORS tool input.
 */
type AGILITY_CMS_GET_AUTHORS_INPUT = {
  /**
   * Content Link Depth
   * @description Maximum depth to expand linked content. Must be between 1 and 5.
   * @default 1
   */
  ContentLinkDepth: number;
  /**
   * Expand All Content Links
   * @description Whether to expand all linked content references.
   * @default false
   */
  ExpandAllContentLinks: boolean;
  /**
   * Direction
   * @description Sort direction. Valid values are 'asc' or 'desc'.
   * @default asc
   * @enum {string}
   */
  direction: "asc" | "desc";
  /**
   * Fields
   * @description Comma-separated list of fields to return.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description Filter expression to apply to the list. Supports eq, ne, lt, lte, gt, gte. Example: fields.name[eq]"Smith".
   * @default null
   */
  filter: string | null;
  /**
   * Locale
   * @description The locale code for the content list (e.g., 'en-us').
   */
  locale?: string;
  /**
   * Skip
   * @description Number of items to skip for pagination. Default is 0.
   * @default 0
   */
  skip: number;
  /**
   * Sort
   * @description Field to sort the results by, e.g., fields.lastName.
   * @default null
   */
  sort: string | null;
  /**
   * Take
   * @description Maximum number of items to retrieve. Default is 10, maximum is 250.
   * @default 10
   */
  take: number;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_AUTHORS tool output.
 */
type AGILITY_CMS_GET_AUTHORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of authors returned from the API.
       */
      items: {
          /**
           * Content Id
           * @description The unique ID of the content item in this locale.
           */
          contentID: number;
          /**
           * Fields
           * @description Key-value pairs of field data for the content item.
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Properties
           * @description The system properties of the content item.
           * @default null
           */
          properties: {
              [key: string]: unknown;
          } | null;
          /**
           * Seo
           * @description SEO related fields for the content item, if available.
           * @default null
           */
          seo: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Total Count
       * @description The total number of authors in the list.
       */
      totalCount: number;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CATEGORIES tool input.
 */
type AGILITY_CMS_GET_CATEGORIES_INPUT = {
  /**
   * Locale
   * @description Locale code for the categories list (e.g., 'en-us').
   */
  locale?: string;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CATEGORIES tool output.
 */
type AGILITY_CMS_GET_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of category items.
       */
      items: {
          /**
           * Content Id
           * @description The unique ID of the content item in this locale.
           */
          contentID: number;
          /**
           * Fields
           * @description Dictionary of the fields and their values for the content item.
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Properties
           * @description System properties of the content item.
           * @default null
           */
          properties: {
              [key: string]: unknown;
          } | null;
          /**
           * Seo
           * @description SEO related fields for the content item. Returned only for dynamic page items.
           * @default null
           */
          seo: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Total Count
       * @description Total number of category items.
       */
      totalCount: number;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CONTENT_ITEM tool input.
 */
type AGILITY_CMS_GET_CONTENT_ITEM_INPUT = {
  /**
   * Content Id
   * @description Unique numeric ID of the content item.
   */
  content_id?: number;
  /**
   * Content Link Depth
   * @description Depth for expanding linked content (0=none to 5=full). Default is 1.
   * @default 1
   */
  content_link_depth: number;
  /**
   * Expand All Content Links
   * @description Whether to fully expand linked content objects. Default is False.
   * @default false
   */
  expand_all_content_links: boolean;
  /**
   * Locale
   * @description Locale code for the content (e.g., 'en-us').
   * @default en-us
   */
  locale: string;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CONTENT_ITEM tool output.
 */
type AGILITY_CMS_GET_CONTENT_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Id
       * @description Unique numeric ID of the content item.
       */
      contentID: number;
      /**
       * Fields
       * @description Key-value pairs of the content's fields.
       */
      fields: {
          [key: string]: unknown;
      };
      /**
       * Properties
       * @description Metadata properties of the content item.
       */
      properties: {
          /**
           * Definition Name
           * @description Name of the content definition model.
           */
          definitionName: string;
          /**
           * Item Order
           * @description Ordering index within the content list.
           */
          itemOrder: number;
          /**
           * Modified
           * @description Last modified date-time in ISO 8601 format.
           */
          modified: string;
          /**
           * Reference Name
           * @description Reference name of the content definition.
           */
          referenceName: string;
          /**
           * State
           * @description State code of the content item (1=Staging, 2=Published).
           */
          state: number;
          /**
           * Version Id
           * @description Version identifier of the content item.
           */
          versionID: number;
      };
      /**
       * Seo
       * @description SEO metadata for the content item, if available.
       * @default null
       */
      seo: {
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CONTENT_LIST tool input.
 */
type AGILITY_CMS_GET_CONTENT_LIST_INPUT = {
  /**
   * Content Link Depth
   * @description Depth to which linked content items should be expanded (0 to 5).
   * @default 1
   */
  contentLinkDepth: number;
  /**
   * Direction
   * @description Sort direction: 'asc' or 'desc'.
   * @default asc
   * @enum {string}
   */
  direction: "asc" | "desc";
  /**
   * Expand All Content Links
   * @description Whether to fully expand all linked content items.
   * @default false
   */
  expandAllContentLinks: boolean;
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Filter
   * @description Filter expression to apply to the content list.
   * @default null
   */
  filter: string | null;
  /**
   * Locale
   * @description Locale code for the content items (e.g., 'en-us').
   */
  locale?: string;
  /**
   * Reference Name
   * @description Reference name of the content list to retrieve.
   */
  referenceName?: string;
  /**
   * Skip
   * @description Number of items to skip for pagination. Default is 0.
   * @default 0
   */
  skip: number;
  /**
   * Sort
   * @description Field to sort the results by.
   * @default null
   */
  sort: string | null;
  /**
   * Take
   * @description Number of items to retrieve per page. Default is 10.
   * @default 10
   */
  take: number;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CONTENT_LIST tool output.
 */
type AGILITY_CMS_GET_CONTENT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of content items.
       */
      items: {
          /**
           * Content Id
           * @description Unique ID of the content item in this locale.
           */
          contentID: number;
          /**
           * Fields
           * @description Field values of the content item.
           */
          fields?: {
              [key: string]: unknown;
          };
          /**
           * Properties
           * @description System properties of the content item.
           */
          properties?: {
              [key: string]: unknown;
          };
          /**
           * Seo
           * @description SEO related fields for the content item, if available.
           * @default null
           */
          seo: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Total Count
       * @description Total number of content items.
       */
      totalCount: number;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CONTENT_MODELS tool input.
 */
type AGILITY_CMS_GET_CONTENT_MODELS_INPUT = {
  /**
   * Last Modified Date
   * @description Optional. Return only models updated since this date/time. Format: ISO 8601 date-time, e.g., 2020-09-24T10:00:00.00-04:00.
   * @default null
   */
  lastModifiedDate: string | null;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_CONTENT_MODELS tool output.
 */
type AGILITY_CMS_GET_CONTENT_MODELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of content models and page modules.
       */
      items: {
          /**
           * Content Reference Names
           * @description List of content reference names associated with this definition.
           * @default null
           */
          contentReferenceNames: string[] | null;
          /**
           * Fields
           * @description List of fields defined in this content model or module.
           * @default null
           */
          fields: {
              /**
               * Label
               * @description The user-friendly label of the field.
               * @default null
               */
              label: string | null;
              /**
               * Name
               * @description The internal name of the field.
               */
              name: string;
              /**
               * Settings
               * @description Additional settings for the field as key-value pairs.
               * @default null
               */
              settings: {
                  [key: string]: string;
              } | null;
              /**
               * Type
               * @description The data type of the field.
               */
              type: string;
          }[] | null;
          /**
           * Last Modified Date
           * @description Last modified date-time of this definition.
           */
          lastModifiedDate: string;
          /**
           * Name
           * @description Human-readable name of the content model or module.
           * @default null
           */
          name: string | null;
          /**
           * Reference Name
           * @description Reference name used to fetch content from this model.
           * @default null
           */
          referenceName: string | null;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_LOGS tool input.
 */
type AGILITY_CMS_GET_LOGS_INPUT = {
  /**
   * Locale
   * @description Locale code for sync (e.g., 'en-us').
   * @default null
   */
  locale: string | null;
  /**
   * Page Size
   * @description Number of records per page. Overrides default if provided.
   * @default null
   */
  pageSize: number | null;
  /**
   * Sync Token
   * @description Sync token indicating where to resume sync. Use '0' for full sync.
   */
  syncToken?: string;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_LOGS tool output.
 */
type AGILITY_CMS_GET_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of log entries retrieved.
       */
      items: {
          /**
           * Content Id
           * @description Unique numeric ID of the content item.
           */
          contentID: number;
          /**
           * Fields
           * @description Custom fields of the content item.
           */
          fields: {
              [key: string]: unknown;
          };
          /**
           * Language Code
           * @description Locale code of the content item.
           */
          languageCode: string;
          /**
           * Properties
           * @description System properties of the content item.
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Reference Name
           * @description Reference name of the content definition.
           */
          referenceName: string;
          /**
           * Seo
           * @description SEO metadata if available.
           * @default null
           */
          seo: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Total Count
       * @description Total number of log entries.
       */
      totalCount: number;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_PAGE tool input.
 */
type AGILITY_CMS_GET_PAGE_INPUT = {
  /**
   * Content Link Depth
   * @description Depth for expanding linked content (0=none to 5=full). Default is 1.
   * @default 1
   */
  content_link_depth: number;
  /**
   * Expand All Content Links
   * @description Whether to fully expand linked content items. Default is False.
   * @default false
   */
  expand_all_content_links: boolean;
  /**
   * Locale
   * @description Locale code for the page (e.g., 'en-us').
   * @default en-us
   */
  locale: string;
  /**
   * Page Id
   * @description The unique numeric ID of the page to retrieve.
   */
  page_id?: number;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_PAGE tool output.
 */
type AGILITY_CMS_GET_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exclude From Output Cache
       * @description Indicates if the page is excluded from the output cache.
       */
      excludeFromOutputCache: boolean;
      /**
       * Menu Text
       * @description Text displayed in navigation menus.
       */
      menuText: string;
      /**
       * Name
       * @description Internal name of the page.
       */
      name: string;
      /**
       * Page Id
       * @description Unique numeric ID of the page.
       */
      pageID: number;
      /**
       * Page Type
       * @description Type of the page (e.g., 'static').
       */
      pageType: string;
      /**
       * Path
       * @description URL path of the page.
       */
      path: string;
      /**
       * Properties
       * @description System properties for the page.
       */
      properties: {
          /**
           * Modified
           * @description Last modified date-time in ISO 8601 format.
           */
          modified: string;
          /**
           * State
           * @description State code of the page (e.g., 1=Staging, 2=Published).
           */
          state: number;
          /**
           * Version Id
           * @description Version identifier of the page.
           */
          versionID: number;
      };
      /**
       * Redirect Url
       * @description Redirect URL of the page, if applicable.
       */
      redirectUrl: string;
      /**
       * Scripts
       * @description Script inclusion settings for the page.
       */
      scripts: {
          /**
           * Bottom
           * @description Scripts to be included before the closing </body> tag.
           * @default null
           */
          bottom: string | null;
          /**
           * Excluded From Global
           * @description Indicates if global scripts are excluded from this page.
           */
          excludedFromGlobal: boolean;
          /**
           * Top
           * @description Scripts to be included in the <head> section.
           * @default null
           */
          top: string | null;
      };
      /**
       * Secure Page
       * @description Indicates if the page is secured.
       */
      securePage: boolean;
      /**
       * Seo
       * @description SEO metadata for the page.
       */
      seo: {
          /**
           * Meta Description
           * @description Meta description for SEO.
           */
          metaDescription: string;
          /**
           * Meta Html
           * @description Additional meta HTML for SEO.
           */
          metaHTML: string;
          /**
           * Meta Keywords
           * @description Meta keywords for SEO.
           */
          metaKeywords: string;
      };
      /**
       * Template Name
       * @description Name of the template used by the page.
       */
      templateName: string;
      /**
       * Title
       * @description Title of the page.
       */
      title: string;
      /**
       * Visible
       * @description Visibility settings for menus and sitemap.
       */
      visible: {
          /**
           * Menu
           * @description Visibility of the page in navigation menus.
           */
          menu: boolean;
          /**
           * Sitemap
           * @description Visibility of the page in the sitemap.
           */
          sitemap: boolean;
      };
      /**
       * Zones
       * @description Content zones with their modules and items.
       */
      zones: {
          [key: string]: {
              /**
               * ZoneItem
               * @description Content item data for this module.
               */
              item: {
                  /**
                   * Contentid
                   * @description Unique ID of the content item in the zone.
                   */
                  contentID: number;
                  /**
                   * Fields
                   * @description Key-value pairs of the zone item's fields.
                   */
                  fields: {
                      [key: string]: unknown;
                  };
                  /**
                   * ZoneItemProperties
                   * @description Metadata properties of the zone item.
                   */
                  properties: {
                      /**
                       * Definitionname
                       * @description Name of the content definition model.
                       */
                      definitionName: string;
                      /**
                       * Itemorder
                       * @description Ordering index of the content item within the zone.
                       */
                      itemOrder: number;
                      /**
                       * Modified
                       * @description Last modified date-time of the content item in ISO 8601 format.
                       */
                      modified: string;
                      /**
                       * Referencename
                       * @description Reference name of the content definition.
                       */
                      referenceName: string;
                      /**
                       * State
                       * @description State code of the content item in the zone.
                       */
                      state: number;
                      /**
                       * Versionid
                       * @description Version identifier of the content item in the zone.
                       */
                      versionID: number;
                  };
              };
              /**
               * Module
               * @description Name of the module type in the zone.
               */
              module: string;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_PAGE_MODULES tool input.
 */
type AGILITY_CMS_GET_PAGE_MODULES_INPUT = {
  /**
   * Last Modified Date
   * @description Optional. Return only modules updated since this date/time. Format: ISO 8601 date-time, e.g., 2020-09-24T10:00:00.00-04:00.
   * @default null
   */
  lastModifiedDate: string | null;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_PAGE_MODULES tool output.
 */
type AGILITY_CMS_GET_PAGE_MODULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of page module definitions.
       */
      items: {
          /**
           * Content Reference Names
           * @description List of content reference names associated with this definition.
           * @default null
           */
          contentReferenceNames: string[] | null;
          /**
           * Fields
           * @description List of fields defined in this content model or module.
           * @default null
           */
          fields: {
              /**
               * Label
               * @description The user-friendly label of the field.
               * @default null
               */
              label: string | null;
              /**
               * Name
               * @description The internal name of the field.
               */
              name: string;
              /**
               * Settings
               * @description Additional settings for the field as key-value pairs.
               * @default null
               */
              settings: {
                  [key: string]: string;
              } | null;
              /**
               * Type
               * @description The data type of the field.
               */
              type: string;
          }[] | null;
          /**
           * Last Modified Date
           * @description Last modified date-time of this definition.
           */
          lastModifiedDate: string;
          /**
           * Name
           * @description Human-readable name of the content model or module.
           * @default null
           */
          name: string | null;
          /**
           * Reference Name
           * @description Reference name used to fetch content from this model.
           * @default null
           */
          referenceName: string | null;
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_SITEMAP_FLAT tool input.
 */
type AGILITY_CMS_GET_SITEMAP_FLAT_INPUT = {
  /**
   * Channel Name
   * @description Name of the channel to retrieve the flat sitemap for.
   */
  channelName?: string;
  /**
   * Locale
   * @description Locale code for retrieving the sitemap (e.g., 'en-us').
   */
  locale?: string;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_SITEMAP_FLAT tool output.
 */
type AGILITY_CMS_GET_SITEMAP_FLAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: {
          /**
           * Excludefromoutputcache
           * @description Indicates if the page is excluded from the output cache.
           */
          excludeFromOutputCache: boolean;
          /**
           * Menutext
           * @description Text displayed in navigation menus.
           */
          menuText: string;
          /**
           * Name
           * @description Internal name of the page.
           */
          name: string;
          /**
           * Pageid
           * @description Unique numeric ID of the page.
           */
          pageID: number;
          /**
           * Pagetype
           * @description Type of the page (e.g., 'static').
           */
          pageType: string;
          /**
           * Path
           * @description URL path of the page.
           */
          path: string;
          /**
           * Properties
           * @description System properties for the page.
           */
          properties: {
              /**
               * Modified
               * @description Last modified date-time in ISO 8601 format.
               */
              modified: string;
              /**
               * State
               * @description State code of the page (e.g., 1=Staging, 2=Published).
               */
              state: number;
              /**
               * Versionid
               * @description Version identifier of the page.
               */
              versionID: number;
          };
          /**
           * Redirecturl
           * @description Redirect URL of the page, if applicable.
           */
          redirectUrl: string;
          /**
           * Scripts
           * @description Script inclusion settings for the page.
           */
          scripts: {
              /**
               * Bottom
               * @description Scripts to be included before the closing </body> tag.
               * @default null
               */
              bottom: string | null;
              /**
               * Excludedfromglobal
               * @description Indicates if global scripts are excluded from this page.
               */
              excludedFromGlobal: boolean;
              /**
               * Top
               * @description Scripts to be included in the <head> section.
               * @default null
               */
              top: string | null;
          };
          /**
           * Securepage
           * @description Indicates if the page is secured.
           */
          securePage: boolean;
          /**
           * SEO
           * @description SEO metadata for the page.
           */
          seo: {
              /**
               * Metadescription
               * @description Meta description for SEO.
               */
              metaDescription: string;
              /**
               * Metahtml
               * @description Additional meta HTML for SEO.
               */
              metaHTML: string;
              /**
               * Metakeywords
               * @description Meta keywords for SEO.
               */
              metaKeywords: string;
          };
          /**
           * Templatename
           * @description Name of the template used by the page.
           */
          templateName: string;
          /**
           * Title
           * @description Title of the page.
           */
          title: string;
          /**
           * Visible
           * @description Visibility settings for menus and sitemap.
           */
          visible: {
              /**
               * Menu
               * @description Visibility of the page in navigation menus.
               */
              menu: boolean;
              /**
               * Sitemap
               * @description Visibility of the page in the sitemap.
               */
              sitemap: boolean;
          };
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
 * Type of AGILITY_CMS's AGILITY_CMS_GET_TAGS tool input.
 */
type AGILITY_CMS_GET_TAGS_INPUT = {
  /**
   * Locale
   * @description Locale code for the tags list (e.g., 'en-us').
   */
  locale?: string;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_GET_TAGS tool output.
 */
type AGILITY_CMS_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of tag items.
       */
      items: {
          /**
           * Content Id
           * @description The unique ID of the content item in this locale.
           */
          contentID: number;
          /**
           * Fields
           * @description Dictionary of the fields and their values for the content item.
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Properties
           * @description System properties of the content item.
           * @default null
           */
          properties: {
              [key: string]: unknown;
          } | null;
          /**
           * Seo
           * @description SEO related fields for the content item. Returned only for dynamic page items.
           * @default null
           */
          seo: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Total Count
       * @description Total number of tag items.
       */
      totalCount: number;
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
 * Type of AGILITY_CMS's AGILITY_CMS_SYNC_CONTENT_ITEMS tool input.
 */
type AGILITY_CMS_SYNC_CONTENT_ITEMS_INPUT = {
  /**
   * Locale
   * @description Locale code for content items sync (e.g., 'en-us').
   * @default null
   */
  locale: string | null;
  /**
   * Page Size
   * @description Number of items per page. Must be at least 1.
   * @default 500
   */
  pageSize: number;
  /**
   * Sync Token
   * @description Token from the most recently synced value. Provide to continue from last state.
   * @default null
   */
  syncToken: number | null;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_SYNC_CONTENT_ITEMS tool output.
 */
type AGILITY_CMS_SYNC_CONTENT_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of content items returned in this page.
       * @default null
       */
      items: {
          /**
           * Content Id
           * @description Unique numeric ID of the content item.
           */
          contentID: number;
          /**
           * Fields
           * @description Key-value pairs of the content fields.
           */
          fields: {
              [key: string]: unknown;
          };
          /**
           * Properties
           * @description System properties of the content item.
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Seo
           * @description SEO metadata for the content item, if available.
           * @default null
           */
          seo: {
              [key: string]: unknown;
          } | null;
      }[] | null;
      /**
       * Sync Token
       * @description Token to persist and pass into the next sync call.
       */
      syncToken: number;
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
 * Type of AGILITY_CMS's AGILITY_CMS_SYNC_PAGES tool input.
 */
type AGILITY_CMS_SYNC_PAGES_INPUT = {
  /**
   * Locale
   * @description Locale code of the pages to retrieve (e.g., 'en-us').
   */
  locale?: string;
  /**
   * Page Size
   * @description Number of items per request, default 500, max 500.
   * @default 500
   */
  pageSize: number | null;
  /**
   * Sync Token
   * @description Sync token from the previous sync call; use 0 to start a fresh sync.
   */
  syncToken?: number;
};

/**
 * Type of AGILITY_CMS's AGILITY_CMS_SYNC_PAGES tool output.
 */
type AGILITY_CMS_SYNC_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of page items returned by the sync API.
       */
      items: {
          /**
           * Exclude From Output Cache
           * @description Indicates if the page is excluded from the output cache.
           */
          excludeFromOutputCache: boolean;
          /**
           * Menu Text
           * @description Text displayed in navigation menus.
           */
          menuText: string;
          /**
           * Name
           * @description Internal name of the page.
           */
          name: string;
          /**
           * Page Id
           * @description Unique numeric ID of the page.
           */
          pageID: number;
          /**
           * Page Type
           * @description Type of the page (e.g., 'static').
           */
          pageType: string;
          /**
           * Path
           * @description URL path of the page.
           */
          path: string;
          /**
           * Properties
           * @description System properties for the page.
           */
          properties: {
              /**
               * Modified
               * @description Last modified date-time in ISO 8601 format.
               */
              modified: string;
              /**
               * State
               * @description State code of the page (e.g., 1=Staging, 2=Published).
               */
              state: number;
              /**
               * Version Id
               * @description Version identifier of the page.
               */
              versionID: number;
          };
          /**
           * Redirect Url
           * @description Redirect URL of the page, if applicable.
           */
          redirectUrl: string;
          /**
           * Scripts
           * @description Script inclusion settings for the page.
           */
          scripts: {
              /**
               * Bottom
               * @description Scripts to be included before the closing </body> tag.
               * @default null
               */
              bottom: string | null;
              /**
               * Excluded From Global
               * @description Indicates if global scripts are excluded from this page.
               */
              excludedFromGlobal: boolean;
              /**
               * Top
               * @description Scripts to be included in the <head> section.
               * @default null
               */
              top: string | null;
          };
          /**
           * Secure Page
           * @description Indicates if the page is secured.
           */
          securePage: boolean;
          /**
           * Seo
           * @description SEO metadata for the page.
           */
          seo: {
              /**
               * Meta Description
               * @description Meta description for SEO.
               */
              metaDescription: string;
              /**
               * Meta Html
               * @description Additional meta HTML for SEO.
               */
              metaHTML: string;
              /**
               * Meta Keywords
               * @description Meta keywords for SEO.
               */
              metaKeywords: string;
          };
          /**
           * Template Name
           * @description Name of the template used by the page.
           */
          templateName: string;
          /**
           * Title
           * @description Title of the page.
           */
          title: string;
          /**
           * Visible
           * @description Visibility settings for menus and sitemap.
           */
          visible: {
              /**
               * Menu
               * @description Visibility of the page in navigation menus.
               */
              menu: boolean;
              /**
               * Sitemap
               * @description Visibility of the page in the sitemap.
               */
              sitemap: boolean;
          };
      }[];
      /**
       * Sync Token
       * @description Next sync token for subsequent requests.
       */
      syncToken: number;
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
 * Type map of all available tool input types for toolkit "AGILITY_CMS".
 */
export type AGILITY_CMS_TOOL_INPUTS = {
  GET_AUTHORS: AGILITY_CMS_GET_AUTHORS_INPUT
  GET_CATEGORIES: AGILITY_CMS_GET_CATEGORIES_INPUT
  GET_CONTENT_ITEM: AGILITY_CMS_GET_CONTENT_ITEM_INPUT
  GET_CONTENT_LIST: AGILITY_CMS_GET_CONTENT_LIST_INPUT
  GET_CONTENT_MODELS: AGILITY_CMS_GET_CONTENT_MODELS_INPUT
  GET_LOGS: AGILITY_CMS_GET_LOGS_INPUT
  GET_PAGE: AGILITY_CMS_GET_PAGE_INPUT
  GET_PAGE_MODULES: AGILITY_CMS_GET_PAGE_MODULES_INPUT
  GET_SITEMAP_FLAT: AGILITY_CMS_GET_SITEMAP_FLAT_INPUT
  GET_TAGS: AGILITY_CMS_GET_TAGS_INPUT
  SYNC_CONTENT_ITEMS: AGILITY_CMS_SYNC_CONTENT_ITEMS_INPUT
  SYNC_PAGES: AGILITY_CMS_SYNC_PAGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AGILITY_CMS".
 */
export type AGILITY_CMS_TOOL_OUTPUTS = {
  GET_AUTHORS: AGILITY_CMS_GET_AUTHORS_OUTPUT
  GET_CATEGORIES: AGILITY_CMS_GET_CATEGORIES_OUTPUT
  GET_CONTENT_ITEM: AGILITY_CMS_GET_CONTENT_ITEM_OUTPUT
  GET_CONTENT_LIST: AGILITY_CMS_GET_CONTENT_LIST_OUTPUT
  GET_CONTENT_MODELS: AGILITY_CMS_GET_CONTENT_MODELS_OUTPUT
  GET_LOGS: AGILITY_CMS_GET_LOGS_OUTPUT
  GET_PAGE: AGILITY_CMS_GET_PAGE_OUTPUT
  GET_PAGE_MODULES: AGILITY_CMS_GET_PAGE_MODULES_OUTPUT
  GET_SITEMAP_FLAT: AGILITY_CMS_GET_SITEMAP_FLAT_OUTPUT
  GET_TAGS: AGILITY_CMS_GET_TAGS_OUTPUT
  SYNC_CONTENT_ITEMS: AGILITY_CMS_SYNC_CONTENT_ITEMS_OUTPUT
  SYNC_PAGES: AGILITY_CMS_SYNC_PAGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AGILITY_CMS toolkit.
 */
export const AGILITY_CMS = {
  slug: "agility_cms",
  tools: {
    /**
     * Tool to retrieve all authors from an agility cms instance. use when you need the full list of authors for display or processing.
     */
    GET_AUTHORS: "AGILITY_CMS_GET_AUTHORS",
    /**
     * Tool to get all categories. use when you need to list every category in a given locale.
     */
    GET_CATEGORIES: "AGILITY_CMS_GET_CATEGORIES",
    /**
     * Tool to fetch details of a content item by content id. use when you need item fields and metadata from agility cms.
     */
    GET_CONTENT_ITEM: "AGILITY_CMS_GET_CONTENT_ITEM",
    /**
     * Tool to retrieve a list of content items by reference name. use when you need to fetch and page through content list data with optional filtering, sorting, and link expansions.
     */
    GET_CONTENT_LIST: "AGILITY_CMS_GET_CONTENT_LIST",
    /**
     * Tool to retrieve content models and page modules. use when you need schema definitions to dynamically build content structures.
     */
    GET_CONTENT_MODELS: "AGILITY_CMS_GET_CONTENT_MODELS",
    /**
     * Tool to retrieve sync items (logs) from agility cms. use after initial full sync to fetch updates.
     */
    GET_LOGS: "AGILITY_CMS_GET_LOGS",
    /**
     * Tool to retrieve details of a page, including metadata, content zones, and components. use after you know the page id to fetch.
     */
    GET_PAGE: "AGILITY_CMS_GET_PAGE",
    /**
     * Tool to retrieve all page modules defined in the agility instance. use when you need only modular definitions without content models.
     */
    GET_PAGE_MODULES: "AGILITY_CMS_GET_PAGE_MODULES",
    /**
     * Tool to retrieve the flat sitemap as a mapping of page paths to sitemap items. use when you need page routing logic after knowing locale and channel.
     */
    GET_SITEMAP_FLAT: "AGILITY_CMS_GET_SITEMAP_FLAT",
    /**
     * Tool to get all tags. use when you need to list every tag in a given locale.
     */
    GET_TAGS: "AGILITY_CMS_GET_TAGS",
    /**
     * Tool to retrieve all content items in a paged format with sync tokens. use when you need to synchronize large volumes of content and maintain state across calls.
     */
    SYNC_CONTENT_ITEMS: "AGILITY_CMS_SYNC_CONTENT_ITEMS",
    /**
     * Tool to retrieve all page items in paged format with sync tokens. use when synchronizing local page data after receiving cms change notifications.
     */
    SYNC_PAGES: "AGILITY_CMS_SYNC_PAGES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AGILITY_CMS".
 */
export type AGILITY_CMS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AGILITY_CMS".
 */
export type AGILITY_CMS_TRIGGER_EVENTS = {}
