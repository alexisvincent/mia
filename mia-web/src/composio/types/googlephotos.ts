// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_ADD_ENRICHMENT tool input.
 */
type GOOGLEPHOTOS_ADD_ENRICHMENT_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album where the enrichment is to be added
   */
  albumId?: string;
  /**
   * Album Position
   * @description Position in the album where the enrichment is to be inserted. Valid options are: POSITION_TYPE_UNSPECIFIED, FIRST_IN_ALBUM, LAST_IN_ALBUM, AFTER_MEDIA_ITEM, AFTER_ENRICHMENT_ITEM
   */
  albumPosition?: {
      /**
       * Position
       * @description Type of position, for a media or enrichment item
       * @enum {string}
       */
      position: "POSITION_TYPE_UNSPECIFIED" | "FIRST_IN_ALBUM" | "LAST_IN_ALBUM" | "AFTER_MEDIA_ITEM" | "AFTER_ENRICHMENT_ITEM";
      /**
       * Relative Enrichment Item Id
       * @description The enrichment item to which the position is relative to. Only used when position type is AFTER_ENRICHMENT_ITEM
       */
      relativeEnrichmentItemId?: string;
      /**
       * Relative Media Item Id
       * @description The media item to which the position is relative to. Only used when position type is AFTER_MEDIA_ITEM
       */
      relativeMediaItemId?: string;
  };
  /**
   * New Enrichment Item
   * @description The enrichment to be added, can be a text, location, or map enrichment
   */
  newEnrichmentItem?: {
      /** Location Enrichment */
      locationEnrichment?: {
          /**
           * Location
           * @description Location for this enrichment item
           */
          location: {
              /**
               * Latlng
               * @description Position of the location on the map
               */
              latlng: {
                  /**
                   * Latitude
                   * @description Latitude in degrees
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees
                   */
                  longitude: number;
              };
              /**
               * Location Name
               * @description Name of the location to be displayed
               */
              locationName: string;
          };
      };
      /** Map Enrichment */
      mapEnrichment?: {
          /**
           * Destination
           * @description Destination location for this enrichment item
           */
          destination: {
              /**
               * Latlng
               * @description Position of the location on the map
               */
              latlng: {
                  /**
                   * Latitude
                   * @description Latitude in degrees
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees
                   */
                  longitude: number;
              };
              /**
               * Location Name
               * @description Name of the location to be displayed
               */
              locationName: string;
          };
          /**
           * Origin
           * @description Origin location for this enrichment item
           */
          origin: {
              /**
               * Latlng
               * @description Position of the location on the map
               */
              latlng: {
                  /**
                   * Latitude
                   * @description Latitude in degrees
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees
                   */
                  longitude: number;
              };
              /**
               * Location Name
               * @description Name of the location to be displayed
               */
              locationName: string;
          };
      };
      /** Text Enrichment */
      textEnrichment?: {
          /**
           * Text
           * @description Text for this enrichment item
           */
          text: string;
      };
  };
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_ADD_ENRICHMENT tool output.
 */
type GOOGLEPHOTOS_ADD_ENRICHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Enrichment Item
       * @description The created enrichment item
       */
      enrichmentItem: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS tool input.
 */
type GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS_INPUT = {
  /**
   * Album Id
   * @description Identifier of the Album that the media items are added to
   */
  albumId?: string;
  /**
   * Media Item Ids
   * @description Identifiers of the MediaItems to be added. Maximum 50 items.
   */
  mediaItemIds?: string[];
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS tool output.
 */
type GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @default Successfully added media items to album
       */
      message: string;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS tool input.
 */
type GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album where the media items are to be added.
   */
  albumId?: string;
  /**
   * Album Position
   * @description Position in the album to add the media items.
   */
  albumPosition?: {
      /**
       * Position
       * @default LAST_IN_ALBUM
       * @enum {string}
       */
      position: "POSITION_TYPE_UNSPECIFIED" | "FIRST_IN_ALBUM" | "LAST_IN_ALBUM" | "AFTER_MEDIA_ITEM" | "AFTER_ENRICHMENT_ITEM";
      /**
       * Relative Enrichment Item Id
       * @description The enrichment item to which the position is relative.
       */
      relativeEnrichmentItemId?: string;
      /**
       * Relative Media Item Id
       * @description The media item to which the position is relative.
       */
      relativeMediaItemId?: string;
  };
  /**
   * Files
   * @description List of media files to upload and create as media items.
   */
  files?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  }[];
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS tool output.
 */
type GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * New Media Item Results
       * @description List of results for the created media items.
       */
      newMediaItemResults: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS tool input.
 */
type GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS_INPUT = {
  /**
   * Media Item Ids
   * @description Identifiers of the media items to be requested. Must not contain duplicates.
   */
  mediaItemIds?: string[];
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS tool output.
 */
type GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Item Results
       * @description List of media items retrieved. May include status for failed items.
       */
      mediaItemResults: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_CREATE_ALBUM tool input.
 */
type GOOGLEPHOTOS_CREATE_ALBUM_INPUT = {
  /**
   * Cover Photo Base Url
   * @description URL to the cover photo
   */
  coverPhotoBaseUrl?: string;
  /**
   * Cover Photo Media Item Id
   * @description ID of the cover photo media item
   */
  coverPhotoMediaItemId?: string;
  /**
   * Id
   * @description Identifier for the album
   */
  id?: string;
  /**
   * Is Writeable
   * @description Whether media items can be created in this album
   */
  isWriteable?: boolean;
  /**
   * Media Items Count
   * @description Number of media items in the album
   */
  mediaItemsCount?: string;
  /**
   * Product Url
   * @description Google Photos URL for the album
   */
  productUrl?: string;
  /**
   * Title
   * @description Name of the album to be created in Google Photos. Maximum 500 characters.
   */
  title?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_CREATE_ALBUM tool output.
 */
type GOOGLEPHOTOS_CREATE_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Album
       * @description The created album data
       */
      album: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_GET_ALBUM tool input.
 */
type GOOGLEPHOTOS_GET_ALBUM_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album to be requested.
   */
  albumId?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_GET_ALBUM tool output.
 */
type GOOGLEPHOTOS_GET_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Album
       * @description The requested album data
       */
      album: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD tool input.
 */
type GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD_INPUT = {
  /**
   * Media Item Id
   * @description ID of the media item to download
   */
  mediaItemId?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD tool output.
 */
type GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The downloaded media file
       */
      file: {
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
           * @description URL of the file.
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_LIST_ALBUMS tool input.
 */
type GOOGLEPHOTOS_LIST_ALBUMS_INPUT = {
  /**
   * Exclude Non App Created Data
   * @description If true, excludes media items not created by this app
   */
  excludeNonAppCreatedData?: boolean;
  /**
   * Page Size
   * @description Maximum number of albums to return. Default 20, maximum 50.
   * @default 20
   */
  pageSize: number;
  /**
   * Page Token
   * @description Continuation token for getting the next page of results
   */
  pageToken?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_LIST_ALBUMS tool output.
 */
type GOOGLEPHOTOS_LIST_ALBUMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Albums
       * @description List of albums shown in the Albums tab
       * @default []
       */
      albums: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to get the next set of albums
       */
      nextPageToken?: string;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_LIST_MEDIA_ITEMS tool input.
 */
type GOOGLEPHOTOS_LIST_MEDIA_ITEMS_INPUT = {
  /**
   * Page Size
   * @description Maximum number of items to return. Default 25, maximum 100.
   * @default 25
   */
  pageSize: number;
  /**
   * Page Token
   * @description Token for getting the next page of results
   */
  pageToken?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_LIST_MEDIA_ITEMS tool output.
 */
type GOOGLEPHOTOS_LIST_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Items
       * @description List of media items from the user's library. Each item is a dictionary containing media item details.
       * @default []
       */
      mediaItems: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token to get the next set of media items
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS tool input.
 */
type GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS_INPUT = {
  /**
   * Album Id
   * @description Album to search within
   */
  albumId?: string;
  /**
   * Filters
   * @description Search filters
   */
  filters?: {
      /**
       * Content Filter
       * @description Filter by content type
       */
      contentFilter?: {
          /**
           * Excluded Content Categories
           * @description Categories to exclude (ORed)
           */
          excludedContentCategories?: string[];
          /**
           * Included Content Categories
           * @description Categories to include (ORed)
           */
          includedContentCategories?: string[];
      };
      /**
       * Date Filter
       * @description Filter by creation date
       */
      dateFilter?: {
          /**
           * Dates
           * @description List of dates to match
           */
          dates?: {
              /**
               * Day
               * @description Day from 1-31, or 0 for no day
               */
              day?: number;
              /**
               * Month
               * @description Month from 1-12, or 0 for no month
               */
              month?: number;
              /**
               * Year
               * @description Year from 1-9999, or 0 for no year
               */
              year?: number;
          }[];
          /**
           * Ranges
           * @description List of date ranges to match
           */
          ranges?: {
              /**
               * End Date
               * @description End date of the range
               */
              endDate: {
                  /**
                   * Day
                   * @description Day from 1-31, or 0 for no day
                   */
                  day?: number;
                  /**
                   * Month
                   * @description Month from 1-12, or 0 for no month
                   */
                  month?: number;
                  /**
                   * Year
                   * @description Year from 1-9999, or 0 for no year
                   */
                  year?: number;
              };
              /**
               * Start Date
               * @description Start date of the range
               */
              startDate: {
                  /**
                   * Day
                   * @description Day from 1-31, or 0 for no day
                   */
                  day?: number;
                  /**
                   * Month
                   * @description Month from 1-12, or 0 for no month
                   */
                  month?: number;
                  /**
                   * Year
                   * @description Year from 1-9999, or 0 for no year
                   */
                  year?: number;
              };
          }[];
      };
      /**
       * Exclude Non App Created Data
       * @description Exclude items not created by this app
       */
      excludeNonAppCreatedData?: boolean;
      /**
       * Feature Filter
       * @description Filter by features
       */
      featureFilter?: {
          /**
           * Included Features
           * @description Features to filter on
           */
          includedFeatures: string[];
      };
      /**
       * Include Archived Media
       * @description Include archived media items
       */
      includeArchivedMedia?: boolean;
      /**
       * Media Type Filter
       * @description Filter by media type
       */
      mediaTypeFilter?: {
          /**
           * Media Types
           * @description Type of media items to return
           */
          mediaTypes: string[];
      };
  };
  /**
   * Order By
   * @description Sort order for results, e.g. 'MediaMetadata.creation_time desc'
   */
  orderBy?: string;
  /**
   * Page Size
   * @description Maximum number of items to return. Default 25, maximum 100.
   * @default 25
   */
  pageSize: number;
  /**
   * Page Token
   * @description Token for getting the next page
   */
  pageToken?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS tool output.
 */
type GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Items
       * @description List of matching media items
       * @default []
       */
      mediaItems: {
          [key: string]: unknown;
      }[];
      /**
       * Next Page Token
       * @description Token for next page of results
       * @default null
       */
      nextPageToken: string | null;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_UPDATE_ALBUM tool input.
 */
type GOOGLEPHOTOS_UPDATE_ALBUM_INPUT = {
  /**
   * Album Id
   * @description Identifier of the album to update
   */
  albumId?: string;
  /**
   * Cover Photo Media Item Id
   * @description ID of the media item to use as album cover photo
   * @default null
   */
  coverPhotoMediaItemId: string | null;
  /**
   * Title
   * @description New title for the album. Maximum 500 characters.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_UPDATE_ALBUM tool output.
 */
type GOOGLEPHOTOS_UPDATE_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Album
       * @description The updated album data
       */
      album: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_UPDATE_MEDIA_ITEM tool input.
 */
type GOOGLEPHOTOS_UPDATE_MEDIA_ITEM_INPUT = {
  /**
   * Description
   * @description New description for the media item. Must be shorter than 1000 characters.
   * @default null
   */
  description: string | null;
  /**
   * Media Item Id
   * @description Identifier of the media item to update
   */
  mediaItemId?: string;
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_UPDATE_MEDIA_ITEM tool output.
 */
type GOOGLEPHOTOS_UPDATE_MEDIA_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Item
       * @description The updated media item data
       */
      mediaItem: {
          [key: string]: unknown;
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
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_UPLOAD_MEDIA tool input.
 */
type GOOGLEPHOTOS_UPLOAD_MEDIA_INPUT = {
  /**
   * Description
   * @description Optional description for the media item
   * @default
   */
  description: string;
  /**
   * FileUploadable
   * @description The media file to upload to Google Photos
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
};

/**
 * Type of GOOGLEPHOTOS's GOOGLEPHOTOS_UPLOAD_MEDIA tool output.
 */
type GOOGLEPHOTOS_UPLOAD_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media Item
       * @description The created media item details returned by the Google Photos API
       */
      media_item: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "GOOGLEPHOTOS".
 */
export type GOOGLEPHOTOS_TOOL_INPUTS = {
  ADD_ENRICHMENT: GOOGLEPHOTOS_ADD_ENRICHMENT_INPUT
  BATCH_ADD_MEDIA_ITEMS: GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS_INPUT
  BATCH_CREATE_MEDIA_ITEMS: GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS_INPUT
  BATCH_GET_MEDIA_ITEMS: GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS_INPUT
  CREATE_ALBUM: GOOGLEPHOTOS_CREATE_ALBUM_INPUT
  GET_ALBUM: GOOGLEPHOTOS_GET_ALBUM_INPUT
  GET_MEDIA_ITEM_DOWNLOAD: GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD_INPUT
  LIST_ALBUMS: GOOGLEPHOTOS_LIST_ALBUMS_INPUT
  LIST_MEDIA_ITEMS: GOOGLEPHOTOS_LIST_MEDIA_ITEMS_INPUT
  SEARCH_MEDIA_ITEMS: GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS_INPUT
  UPDATE_ALBUM: GOOGLEPHOTOS_UPDATE_ALBUM_INPUT
  UPDATE_MEDIA_ITEM: GOOGLEPHOTOS_UPDATE_MEDIA_ITEM_INPUT
  UPLOAD_MEDIA: GOOGLEPHOTOS_UPLOAD_MEDIA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLEPHOTOS".
 */
export type GOOGLEPHOTOS_TOOL_OUTPUTS = {
  ADD_ENRICHMENT: GOOGLEPHOTOS_ADD_ENRICHMENT_OUTPUT
  BATCH_ADD_MEDIA_ITEMS: GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS_OUTPUT
  BATCH_CREATE_MEDIA_ITEMS: GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS_OUTPUT
  BATCH_GET_MEDIA_ITEMS: GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS_OUTPUT
  CREATE_ALBUM: GOOGLEPHOTOS_CREATE_ALBUM_OUTPUT
  GET_ALBUM: GOOGLEPHOTOS_GET_ALBUM_OUTPUT
  GET_MEDIA_ITEM_DOWNLOAD: GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD_OUTPUT
  LIST_ALBUMS: GOOGLEPHOTOS_LIST_ALBUMS_OUTPUT
  LIST_MEDIA_ITEMS: GOOGLEPHOTOS_LIST_MEDIA_ITEMS_OUTPUT
  SEARCH_MEDIA_ITEMS: GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS_OUTPUT
  UPDATE_ALBUM: GOOGLEPHOTOS_UPDATE_ALBUM_OUTPUT
  UPDATE_MEDIA_ITEM: GOOGLEPHOTOS_UPDATE_MEDIA_ITEM_OUTPUT
  UPLOAD_MEDIA: GOOGLEPHOTOS_UPLOAD_MEDIA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLEPHOTOS toolkit.
 */
export const GOOGLEPHOTOS = {
  slug: "googlephotos",
  tools: {
    /**
     * Adds an enrichment at a specified position in a defined album.
     */
    ADD_ENRICHMENT: "GOOGLEPHOTOS_ADD_ENRICHMENT",
    /**
     * Adds one or more media items to an album in google photos.
     */
    BATCH_ADD_MEDIA_ITEMS: "GOOGLEPHOTOS_BATCH_ADD_MEDIA_ITEMS",
    /**
     * Unified action to upload media files and create them as items in google photos.
     */
    BATCH_CREATE_MEDIA_ITEMS: "GOOGLEPHOTOS_BATCH_CREATE_MEDIA_ITEMS",
    /**
     * Returns the list of media items for the specified media item identifiers.
     */
    BATCH_GET_MEDIA_ITEMS: "GOOGLEPHOTOS_BATCH_GET_MEDIA_ITEMS",
    /**
     * Creates a new album in google photos.
     */
    CREATE_ALBUM: "GOOGLEPHOTOS_CREATE_ALBUM",
    /**
     * Returns the album based on the specified albumid.
     */
    GET_ALBUM: "GOOGLEPHOTOS_GET_ALBUM",
    /**
     * Downloads a media item from google photos and returns it as a file.
     */
    GET_MEDIA_ITEM_DOWNLOAD: "GOOGLEPHOTOS_GET_MEDIA_ITEM_DOWNLOAD",
    /**
     * Lists all albums shown to a user in the albums tab of google photos.
     */
    LIST_ALBUMS: "GOOGLEPHOTOS_LIST_ALBUMS",
    /**
     * Lists all media items from a user's google photos library.
     */
    LIST_MEDIA_ITEMS: "GOOGLEPHOTOS_LIST_MEDIA_ITEMS",
    /**
     * Searches for media items in a user's google photos library.
     */
    SEARCH_MEDIA_ITEMS: "GOOGLEPHOTOS_SEARCH_MEDIA_ITEMS",
    /**
     * Updates an album's title or cover photo in google photos.
     */
    UPDATE_ALBUM: "GOOGLEPHOTOS_UPDATE_ALBUM",
    /**
     * Updates a media item's description in google photos.
     */
    UPDATE_MEDIA_ITEM: "GOOGLEPHOTOS_UPDATE_MEDIA_ITEM",
    /**
     * Upload a media file to google photos. supports images (up to 200mb) and videos (up to 20gb).
     */
    UPLOAD_MEDIA: "GOOGLEPHOTOS_UPLOAD_MEDIA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLEPHOTOS".
 */
export type GOOGLEPHOTOS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLEPHOTOS".
 */
export type GOOGLEPHOTOS_TRIGGER_EVENTS = {}
