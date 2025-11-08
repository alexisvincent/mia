// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PEXELS's PEXELS_COLLECTION_MEDIA tool input.
 */
type PEXELS_COLLECTION_MEDIA_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Pexels collection.
   */
  id?: string;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of results per page (1-80).
   * @default 15
   */
  per_page: number;
};

/**
 * Type of PEXELS's PEXELS_COLLECTION_MEDIA tool output.
 */
type PEXELS_COLLECTION_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Media
       * @description List of photo objects in the collection
       */
      media: {
          /**
           * Alt
           * @description Alternate text for the photo
           * @default null
           */
          alt: string | null;
          /**
           * Avg Color
           * @description Average color of the photo (hex code)
           */
          avg_color: string;
          /**
           * Height
           * @description Photo height in pixels
           */
          height: number;
          /**
           * Id
           * @description Unique identifier for the photo
           */
          id: number;
          /**
           * Liked
           * @description Indicates if the photo is liked by the user
           */
          liked: boolean;
          /**
           * Photographer
           * @description Photographer name
           */
          photographer: string;
          /**
           * Photographer Id
           * @description Photographer's ID
           */
          photographer_id: number;
          /**
           * Photographer Url
           * @description Photographer's profile URL
           */
          photographer_url: string;
          /**
           * Src
           * @description Different size URLs for the photo
           */
          src: {
              /**
               * Landscape
               * @description Landscape orientation photo URL
               */
              landscape: string;
              /**
               * Large
               * @description Large size photo URL
               */
              large: string;
              /**
               * Large2X
               * @description 2x large photo URL
               */
              large2x: string;
              /**
               * Medium
               * @description Medium size photo URL
               */
              medium: string;
              /**
               * Original
               * @description Original size photo URL
               */
              original: string;
              /**
               * Portrait
               * @description Portrait orientation photo URL
               */
              portrait: string;
              /**
               * Small
               * @description Small size photo URL
               */
              small: string;
              /**
               * Tiny
               * @description Tiny size photo URL
               */
              tiny: string;
          };
          /**
           * Url
           * @description URL to the photo's Pexels page
           */
          url: string;
          /**
           * Width
           * @description Photo width in pixels
           */
          width: number;
      }[];
      /**
       * Next Page
       * @description URL for the next page of results, if available
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number returned
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page returned
       */
      per_page: number;
      /**
       * Prev Page
       * @description URL for the previous page of results, if available
       * @default null
       */
      prev_page: string | null;
      /**
       * Total Results
       * @description Total number of media items in the collection
       */
      total_results: number;
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
 * Type of PEXELS's PEXELS_CURATED_PHOTOS tool input.
 */
type PEXELS_CURATED_PHOTOS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (min 1). Defaults to Pexels API default of 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (min 1, max 80). Defaults to Pexels API default of 15.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of PEXELS's PEXELS_CURATED_PHOTOS tool output.
 */
type PEXELS_CURATED_PHOTOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL to the next page of results, if available.
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of results returned per page.
       */
      per_page: number;
      /**
       * Photos
       * @description List of curated photo objects.
       */
      photos: {
          /**
           * Alt
           * @description Alternative text for the photo.
           */
          alt: string;
          /**
           * Avg Color
           * @description Average color of the photo in HEX format.
           */
          avg_color: string;
          /**
           * Height
           * @description Height of the photo in pixels.
           */
          height: number;
          /**
           * Id
           * @description Unique identifier for the photo.
           */
          id: number;
          /**
           * Liked
           * @description Whether the user has liked the photo.
           */
          liked: boolean;
          /**
           * Photographer
           * @description Name of the photographer.
           */
          photographer: string;
          /**
           * Photographer Id
           * @description ID of the photographer.
           */
          photographer_id: number;
          /**
           * Photographer Url
           * @description URL to the photographer's profile.
           */
          photographer_url: string;
          /**
           * Src
           * @description Source URLs for various image sizes.
           */
          src: {
              /**
               * Landscape
               * @description URL of the landscape image.
               */
              landscape: string;
              /**
               * Large
               * @description URL of the large image.
               */
              large: string;
              /**
               * Large2X
               * @description URL of the large2x image.
               */
              large2x: string;
              /**
               * Medium
               * @description URL of the medium image.
               */
              medium: string;
              /**
               * Original
               * @description URL of the original image.
               */
              original: string;
              /**
               * Portrait
               * @description URL of the portrait image.
               */
              portrait: string;
              /**
               * Small
               * @description URL of the small image.
               */
              small: string;
              /**
               * Tiny
               * @description URL of the tiny image.
               */
              tiny: string;
          };
          /**
           * Url
           * @description URL of the photo page on Pexels.
           */
          url: string;
          /**
           * Width
           * @description Width of the photo in pixels.
           */
          width: number;
      }[];
      /**
       * Total Results
       * @description Total number of curated photos available.
       */
      total_results: number;
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
 * Type of PEXELS's PEXELS_FEATURED_COLLECTIONS tool input.
 */
type PEXELS_FEATURED_COLLECTIONS_INPUT = {
  /**
   * Page
   * @description Page number of results to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of results per page (1-80). Defaults to 15.
   * @default 15
   */
  per_page: number;
};

/**
 * Type of PEXELS's PEXELS_FEATURED_COLLECTIONS tool output.
 */
type PEXELS_FEATURED_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of featured collections
       */
      collections: {
          /**
           * Description
           * @description Description of the collection
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Collection ID
           */
          id: number;
          /**
           * Links
           * @description Links for the collection
           */
          links: {
              /**
               * Photos
               * @description URL for the photos in this collection
               */
              photos: string;
              /**
               * Self
               * @description URL for this collection
               */
              self: string;
              /**
               * Videos
               * @description URL for the videos in this collection
               */
              videos: string;
          };
          /**
           * Media Count
           * @description Total number of media items in the collection
           */
          media_count: number;
          /**
           * Photos Count
           * @description Number of photos in the collection
           */
          photos_count: number;
          /**
           * Private
           * @description Whether the collection is private
           */
          private: boolean;
          /**
           * Title
           * @description Title of the collection
           */
          title: string;
          /**
           * Type
           * @description Type of the collection
           */
          type: string;
          /**
           * Videos Count
           * @description Number of videos in the collection
           */
          videos_count: number;
      }[];
      /**
       * Next Page
       * @description URL to the next page of results, if available
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page
       */
      per_page: number;
      /**
       * Prev Page
       * @description URL to the previous page of results, if available
       * @default null
       */
      prev_page: string | null;
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
 * Type of PEXELS's PEXELS_GET_PHOTO tool input.
 */
type PEXELS_GET_PHOTO_INPUT = {
  /**
   * Id
   * @description The unique identifier of the photo to retrieve
   */
  id?: number;
};

/**
 * Type of PEXELS's PEXELS_GET_PHOTO tool output.
 */
type PEXELS_GET_PHOTO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alt
       * @description Alternate text description of the photo
       */
      alt: string;
      /**
       * Avg Color
       * @description Average color of the photo in hex code
       */
      avg_color: string;
      /**
       * Height
       * @description Height of the photo in pixels
       */
      height: number;
      /**
       * Id
       * @description Photo's unique identifier
       */
      id: number;
      /**
       * Liked
       * @description Whether the requesting user has liked this photo
       */
      liked: boolean;
      /**
       * Photographer
       * @description Name of the photographer
       */
      photographer: string;
      /**
       * Photographer Id
       * @description Photographer's unique identifier
       */
      photographer_id: number;
      /**
       * Photographer Url
       * Format: uri
       * @description URL of the photographer's profile
       */
      photographer_url: string;
      /**
       * Src
       * @description Object containing URLs for various photo sizes
       */
      src: {
          /**
           * Landscape
           * Format: uri
           * @description Landscape orientation photo URL
           */
          landscape: string;
          /**
           * Large
           * Format: uri
           * @description Large size photo URL
           */
          large: string;
          /**
           * Large2X
           * Format: uri
           * @description Double-resolution large size photo URL
           */
          large2x: string;
          /**
           * Medium
           * Format: uri
           * @description Medium size photo URL
           */
          medium: string;
          /**
           * Original
           * Format: uri
           * @description Original size photo URL
           */
          original: string;
          /**
           * Portrait
           * Format: uri
           * @description Portrait orientation photo URL
           */
          portrait: string;
          /**
           * Small
           * Format: uri
           * @description Small size photo URL
           */
          small: string;
          /**
           * Tiny
           * Format: uri
           * @description Tiny size photo URL
           */
          tiny: string;
      };
      /**
       * Url
       * Format: uri
       * @description Pexels page URL for the photo
       */
      url: string;
      /**
       * Width
       * @description Width of the photo in pixels
       */
      width: number;
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
 * Type of PEXELS's PEXELS_MY_COLLECTIONS tool input.
 */
type PEXELS_MY_COLLECTIONS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of collections per page, between 1 and 80
   * @default 15
   */
  per_page: number;
};

/**
 * Type of PEXELS's PEXELS_MY_COLLECTIONS tool output.
 */
type PEXELS_MY_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of user collections
       */
      collections: {
          /**
           * Description
           * @description Collection description, if provided
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Collection ID
           */
          id: number;
          /**
           * Media Count
           * @description Total media items in the collection
           */
          media_count: number;
          /**
           * Photos Count
           * @description Number of photos in the collection
           */
          photos_count: number;
          /**
           * Private
           * @description Whether the collection is private
           */
          private: boolean;
          /**
           * Title
           * @description Collection title
           */
          title: string;
          /**
           * Videos Count
           * @description Number of videos in the collection
           */
          videos_count: number;
      }[];
      /**
       * Page
       * @description Current page number returned
       */
      page: number;
      /**
       * Per Page
       * @description Number of collections per page returned
       */
      per_page: number;
      /**
       * Total Results
       * @description Total number of collections
       */
      total_results: number;
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
 * Type of PEXELS's PEXELS_POPULAR_VIDEOS tool input.
 */
type PEXELS_POPULAR_VIDEOS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve. Default is 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of videos per page (1–80). Default is 15.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of PEXELS's PEXELS_POPULAR_VIDEOS tool output.
 */
type PEXELS_POPULAR_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of videos per page.
       */
      per_page: number;
      /**
       * Total Results
       * @description Total number of video results available.
       */
      total_results: number;
      /**
       * Url
       * @description URL of the results page.
       */
      url: string;
      /**
       * Videos
       * @description List of popular video objects.
       */
      videos: {
          /**
           * Avg Color
           * @description Average color of the video preview image (hex code).
           * @default null
           */
          avg_color: string | null;
          /**
           * Duration
           * @description Duration of the video in seconds.
           */
          duration: number;
          /**
           * Full Res
           * @description URL of the full-resolution video (if available).
           * @default null
           */
          full_res: string | null;
          /**
           * Height
           * @description Height of the video in pixels.
           */
          height: number;
          /**
           * Id
           * @description ID of the video.
           */
          id: number;
          /**
           * Image
           * @description URL of the video preview image.
           */
          image: string;
          /**
           * Tags
           * @description List of tags associated with the video.
           */
          tags: string[];
          /**
           * Url
           * @description URL to the Pexels page for the video.
           */
          url: string;
          /**
           * User
           * @description Author information for the video.
           */
          user: {
              /**
               * Id
               * @description ID of the video author.
               */
              id: number;
              /**
               * Name
               * @description Name of the video author.
               */
              name: string;
              /**
               * Url
               * @description URL of the author's profile.
               */
              url: string;
          };
          /**
           * Video Files
           * @description Available video file variants.
           */
          video_files: {
              /**
               * File Type
               * @description MIME type of the video file.
               */
              file_type: string;
              /**
               * Fps
               * @description Frames per second of the video file.
               */
              fps: number;
              /**
               * Height
               * @description Height of the video file in pixels.
               */
              height: number;
              /**
               * Id
               * @description ID of the video file.
               */
              id: number;
              /**
               * Link
               * @description Direct URL to the video file.
               */
              link: string;
              /**
               * Quality
               * @description Quality label of the video file.
               */
              quality: string;
              /**
               * Width
               * @description Width of the video file in pixels.
               */
              width: number;
          }[];
          /**
           * Video Pictures
           * @description List of preview pictures for the video.
           */
          video_pictures: {
              /**
               * Id
               * @description ID of the preview picture.
               */
              id: number;
              /**
               * Nr
               * @description Sequence number of the picture.
               */
              nr: number;
              /**
               * Picture
               * @description URL of the preview picture.
               */
              picture: string;
          }[];
          /**
           * Width
           * @description Width of the video in pixels.
           */
          width: number;
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
 * Type of PEXELS's PEXELS_SEARCH_PHOTOS tool input.
 */
type PEXELS_SEARCH_PHOTOS_INPUT = {
  /**
   * Color
   * @description Filter by photo color. Accepts standard color names or hex codes, e.g., 'red' or '#00ff00'.
   * @default null
   */
  color: string | null;
  /**
   * Locale
   * @description Language locale for search results, e.g., 'en-US', 'pt-BR'.
   * @default null
   */
  locale: string | null;
  /**
   * Orientation
   * @description Filter by photo orientation.
   * @default null
   * @enum {string|null}
   */
  orientation: "landscape" | "portrait" | "square" | null;
  /**
   * Page
   * @description Page number of results to retrieve, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of results per page (1-80). Defaults to 15.
   * @default 15
   */
  per_page: number;
  /**
   * Query
   * @description Search term to find photos.
   */
  query?: string;
  /**
   * Size
   * @description Filter by photo size.
   * @default null
   * @enum {string|null}
   */
  size: "large" | "medium" | "small" | null;
};

/**
 * Type of PEXELS's PEXELS_SEARCH_PHOTOS tool output.
 */
type PEXELS_SEARCH_PHOTOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page
       * @description URL to the next page of results, if available
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of results per page
       */
      per_page: number;
      /**
       * Photos
       * @description List of photo objects returned
       */
      photos: {
          /**
           * Alt
           * @description Alternate text for the photo
           * @default null
           */
          alt: string | null;
          /**
           * Avg Color
           * @description Average color of the photo (hex code)
           */
          avg_color: string;
          /**
           * Height
           * @description Photo height in pixels
           */
          height: number;
          /**
           * Id
           * @description Unique identifier for the photo
           */
          id: number;
          /**
           * Liked
           * @description Indicates if the photo is liked by the user
           */
          liked: boolean;
          /**
           * Photographer
           * @description Photographer name
           */
          photographer: string;
          /**
           * Photographer Id
           * @description Photographer's ID
           */
          photographer_id: number;
          /**
           * Photographer Url
           * @description Photographer's profile URL
           */
          photographer_url: string;
          /**
           * Src
           * @description Different size URLs for the photo
           */
          src: {
              /**
               * Landscape
               * @description Landscape orientation photo URL
               */
              landscape: string;
              /**
               * Large
               * @description Large size photo URL
               */
              large: string;
              /**
               * Large2X
               * @description 2x large photo URL
               */
              large2x: string;
              /**
               * Medium
               * @description Medium size photo URL
               */
              medium: string;
              /**
               * Original
               * @description Original size photo URL
               */
              original: string;
              /**
               * Portrait
               * @description Portrait orientation photo URL
               */
              portrait: string;
              /**
               * Small
               * @description Small size photo URL
               */
              small: string;
              /**
               * Tiny
               * @description Tiny size photo URL
               */
              tiny: string;
          };
          /**
           * Url
           * @description URL to the photo's Pexels page
           */
          url: string;
          /**
           * Width
           * @description Photo width in pixels
           */
          width: number;
      }[];
      /**
       * Prev Page
       * @description URL to the previous page of results, if available
       * @default null
       */
      prev_page: string | null;
      /**
       * Total Results
       * @description Total number of results for this search
       */
      total_results: number;
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
 * Type of PEXELS's PEXELS_SEARCH_VIDEOS tool input.
 */
type PEXELS_SEARCH_VIDEOS_INPUT = {
  /**
   * Orientation
   * @description Filter results by video orientation
   * @default null
   * @enum {string|null}
   */
  orientation: "landscape" | "portrait" | "square" | null;
  /**
   * Page
   * @description Page number for paginated results (starting at 1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (min 1, max 80)
   * @default 15
   */
  per_page: number | null;
  /**
   * Query
   * @description Search query term for finding relevant videos
   */
  query?: string;
  /**
   * Size
   * @description Filter results by video size
   * @default null
   * @enum {string|null}
   */
  size: "large" | "medium" | "small" | null;
};

/**
 * Type of PEXELS's PEXELS_SEARCH_VIDEOS tool output.
 */
type PEXELS_SEARCH_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number of the results
       */
      page: number;
      /**
       * Per Page
       * @description Number of results returned per page
       */
      per_page: number;
      /**
       * Total Results
       * @description Total number of videos matching the search query
       */
      total_results: number;
      /**
       * Url
       * @description URL to Pexels search results page
       */
      url: string;
      /**
       * Videos
       * @description List of video objects returned by the search
       */
      videos: {
          /**
           * Avg Color
           * @description Average color of the thumbnail in hex format, e.g., '#AABBCC'
           * @default null
           */
          avg_color: string | null;
          /**
           * Duration
           * @description Video duration in seconds
           */
          duration: number;
          /**
           * Full Res
           * @description URL to the highest resolution video file
           * @default null
           */
          full_res: string | null;
          /**
           * Height
           * @description Original video height in pixels
           */
          height: number;
          /**
           * Id
           * @description Video ID
           */
          id: number;
          /**
           * Image
           * @description URL to the video thumbnail image
           */
          image: string;
          /**
           * Tags
           * @description List of tags describing the video
           */
          tags: string[];
          /**
           * Url
           * @description URL to the video page on Pexels
           */
          url: string;
          /**
           * User
           * @description Information about the video author
           */
          user: {
              /**
               * Id
               * @description Photographer user ID
               */
              id: number;
              /**
               * Name
               * @description Photographer name
               */
              name: string;
              /**
               * Url
               * @description Photographer profile URL
               */
              url: string;
          };
          /**
           * Video Files
           * @description List of available video file variants
           */
          video_files: {
              /**
               * File Type
               * @description MIME type of the video file
               */
              file_type: string;
              /**
               * Fps
               * @description Frames per second for this file
               * @default null
               */
              fps: number | null;
              /**
               * Height
               * @description Height of this video file in pixels
               */
              height: number;
              /**
               * Id
               * @description Video file ID
               */
              id: number;
              /**
               * Link
               * @description Direct download link to this video file
               */
              link: string;
              /**
               * Quality
               * @description Video quality, e.g., 'hd' or 'sd'
               */
              quality: string;
              /**
               * Width
               * @description Width of this video file in pixels
               */
              width: number;
          }[];
          /**
           * Video Pictures
           * @description List of video thumbnail images at different offsets
           */
          video_pictures: {
              /**
               * Id
               * @description ID of the thumbnail picture
               */
              id: number;
              /**
               * Nr
               * @description Index number of this thumbnail in the video timeline
               */
              nr: number;
              /**
               * Picture
               * @description URL to the thumbnail image
               */
              picture: string;
          }[];
          /**
           * Width
           * @description Original video width in pixels
           */
          width: number;
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
 * Type map of all available tool input types for toolkit "PEXELS".
 */
export type PEXELS_TOOL_INPUTS = {
  COLLECTION_MEDIA: PEXELS_COLLECTION_MEDIA_INPUT
  CURATED_PHOTOS: PEXELS_CURATED_PHOTOS_INPUT
  FEATURED_COLLECTIONS: PEXELS_FEATURED_COLLECTIONS_INPUT
  GET_PHOTO: PEXELS_GET_PHOTO_INPUT
  MY_COLLECTIONS: PEXELS_MY_COLLECTIONS_INPUT
  POPULAR_VIDEOS: PEXELS_POPULAR_VIDEOS_INPUT
  SEARCH_PHOTOS: PEXELS_SEARCH_PHOTOS_INPUT
  SEARCH_VIDEOS: PEXELS_SEARCH_VIDEOS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PEXELS".
 */
export type PEXELS_TOOL_OUTPUTS = {
  COLLECTION_MEDIA: PEXELS_COLLECTION_MEDIA_OUTPUT
  CURATED_PHOTOS: PEXELS_CURATED_PHOTOS_OUTPUT
  FEATURED_COLLECTIONS: PEXELS_FEATURED_COLLECTIONS_OUTPUT
  GET_PHOTO: PEXELS_GET_PHOTO_OUTPUT
  MY_COLLECTIONS: PEXELS_MY_COLLECTIONS_OUTPUT
  POPULAR_VIDEOS: PEXELS_POPULAR_VIDEOS_OUTPUT
  SEARCH_PHOTOS: PEXELS_SEARCH_PHOTOS_OUTPUT
  SEARCH_VIDEOS: PEXELS_SEARCH_VIDEOS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PEXELS toolkit.
 */
export const PEXELS = {
  slug: "pexels",
  tools: {
    /**
     * Tool to get all media within a collection by its id. use when you need to fetch paginated media from a specific collection.
     */
    COLLECTION_MEDIA: "PEXELS_COLLECTION_MEDIA",
    /**
     * Tool to get real-time curated photos. use when you need to fetch curated photos with pagination support.
     */
    CURATED_PHOTOS: "PEXELS_CURATED_PHOTOS",
    /**
     * Tool to get featured collections. use when you need curated collections of photos and videos with pagination support.
     */
    FEATURED_COLLECTIONS: "PEXELS_FEATURED_COLLECTIONS",
    /**
     * Tool to retrieve detailed information about a specific photo. use when you have a valid photo id to fetch metadata including dimensions, photographer details, and image urls. use after confirming the photo id from search or curated endpoints.
     */
    GET_PHOTO: "PEXELS_GET_PHOTO",
    /**
     * Tool to get all of the user's collections on pexels. use when you need to list a user's collections with pagination support.
     */
    MY_COLLECTIONS: "PEXELS_MY_COLLECTIONS",
    /**
     * Tool to retrieve current popular pexels videos. use when you want to fetch trending videos from pexels.
     */
    POPULAR_VIDEOS: "PEXELS_POPULAR_VIDEOS",
    /**
     * Tool to search for photos on pexels. use when you need to retrieve photos by a search term and optional filters. call after confirming you have a valid pexels api key.
     */
    SEARCH_PHOTOS: "PEXELS_SEARCH_PHOTOS",
    /**
     * Tool to search for videos on pexels by query and optional filters. use when you need to find relevant video assets.
     */
    SEARCH_VIDEOS: "PEXELS_SEARCH_VIDEOS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PEXELS".
 */
export type PEXELS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PEXELS".
 */
export type PEXELS_TRIGGER_EVENTS = {}
