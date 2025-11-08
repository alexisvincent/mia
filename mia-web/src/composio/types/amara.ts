// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AMARA's AMARA_ADD_SUBTITLE_NOTE tool input.
 */
type AMARA_ADD_SUBTITLE_NOTE_INPUT = {
  /**
   * Body
   * @description Text of the note to add to the subtitle set.
   */
  body?: string;
  /**
   * Language Code
   * @description BCP-47 code for the subtitle language.
   */
  language_code?: string;
  /**
   * Video Id
   * @description Amara video ID.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_ADD_SUBTITLE_NOTE tool output.
 */
type AMARA_ADD_SUBTITLE_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Text of the created note.
       */
      body: string;
      /**
       * Created
       * @description ISO 8601 timestamp when the note was created.
       */
      created: string;
      /**
       * User
       * @description Author of the note.
       */
      user: {
          /**
           * Id
           * @description User ID of the note author.
           */
          id: string;
          /**
           * Uri
           * @description URI of the user resource.
           */
          uri: string;
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
 * Type of AMARA's AMARA_CREATE_SUBTITLE_LANGUAGE tool input.
 */
type AMARA_CREATE_SUBTITLE_LANGUAGE_INPUT = {
  /**
   * Language
   * @description ISO 639-1 language code to add (e.g., 'fr').
   */
  language?: string;
  /**
   * Video Id
   * @description The ID or slug of the video to which to add the subtitle language.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_CREATE_SUBTITLE_LANGUAGE tool output.
 */
type AMARA_CREATE_SUBTITLE_LANGUAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Language Code
       * @description The subtitle language code that was added.
       */
      language_code: string;
      /**
       * Resource Uri
       * @description Resource URI of this subtitle language resource.
       */
      resource_uri: string;
      /**
       * Subtitle Count
       * @description Number of subtitles for this language.
       */
      subtitle_count: number;
      /**
       * Subtitles Uri
       * @description URI to the subtitles resource for this language.
       */
      subtitles_uri: string;
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
 * Type of AMARA's AMARA_FETCH_SUBTITLES_DATA tool input.
 */
type AMARA_FETCH_SUBTITLES_DATA_INPUT = {
  /**
   * Format
   * @description Subtitle format to retrieve. Defaults to 'json' when omitted.
   * @default null
   * @enum {string|null}
   */
  format: "json" | "srt" | "vtt" | null;
  /**
   * Language Code
   * @description BCP-47 code for the subtitle language.
   */
  language_code?: string;
  /**
   * Video Id
   * @description Amara video ID.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_FETCH_SUBTITLES_DATA tool output.
 */
type AMARA_FETCH_SUBTITLES_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description Format of the returned subtitles.
       */
      format: string;
      /**
       * Language
       * @description Language code of the subtitles.
       */
      language: string;
      /**
       * Subtitles
       * @description List of subtitle segments with timestamps and text.
       */
      subtitles: {
          /**
           * End
           * @description End time of the subtitle segment in seconds.
           */
          end: number;
          /**
           * Start
           * @description Start time of the subtitle segment in seconds.
           */
          start: number;
          /**
           * Text
           * @description Text content of the subtitle segment.
           */
          text: string;
      }[];
      /**
       * Video Id
       * @description ID of the video for which subtitles were fetched.
       */
      video_id: string;
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
 * Type of AMARA's AMARA_GET_SUBTITLE_LANGUAGE_DETAILS tool input.
 */
type AMARA_GET_SUBTITLE_LANGUAGE_DETAILS_INPUT = {
  /**
   * Language Code
   * @description BCP-47 code for the subtitle language.
   */
  language_code?: string;
  /**
   * Video Id
   * @description Amara video ID.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_GET_SUBTITLE_LANGUAGE_DETAILS tool output.
 */
type AMARA_GET_SUBTITLE_LANGUAGE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the subtitle language was created.
       */
      created: string;
      /**
       * Description
       * @description Translated video description in this language.
       */
      description: string;
      /**
       * Is Primary Audio Language
       * @description Indicates if this is the primary spoken language of the video.
       */
      is_primary_audio_language: boolean;
      /**
       * Is Rtl
       * @description Indicates if the language is right-to-left.
       */
      is_rtl: boolean;
      /**
       * Language Code
       * @description BCP-47 code for the language.
       */
      language_code: string;
      /**
       * Metadata
       * @description Translated video metadata in this language.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Human-readable name of the language.
       */
      name: string;
      /**
       * Num Versions
       * @description Number of subtitle versions available.
       */
      num_versions: number;
      /**
       * Published
       * @description Indicates if the subtitles are publicly viewable.
       */
      published: boolean;
      /**
       * Resource Uri
       * @description URI of the subtitle language resource.
       */
      resource_uri: string;
      /**
       * Soft Limit Cpl
       * @description Max characters per line; null if not set.
       * @default null
       */
      soft_limit_cpl: number | null;
      /**
       * Soft Limit Cps
       * @description Max characters per second; null if not set.
       * @default null
       */
      soft_limit_cps: number | null;
      /**
       * Soft Limit Lines
       * @description Max number of lines per subtitle; null if not set.
       * @default null
       */
      soft_limit_lines: number | null;
      /**
       * Soft Limit Max Duration
       * @description Max duration of subtitles in milliseconds; null if not set.
       * @default null
       */
      soft_limit_max_duration: number | null;
      /**
       * Soft Limit Min Duration
       * @description Min duration of subtitles in milliseconds; null if not set.
       * @default null
       */
      soft_limit_min_duration: number | null;
      /**
       * Subtitle Count
       * @description Number of subtitles available in this language.
       */
      subtitle_count: number;
      /**
       * Subtitles Complete
       * @description Indicates if the subtitles are complete for this language.
       */
      subtitles_complete: boolean;
      /**
       * Subtitles Uri
       * @description URI to access the subtitles for this language.
       */
      subtitles_uri: string;
      /**
       * Title
       * @description Translated video title in this language.
       */
      title: string;
      /**
       * Versions
       * @description List of subtitle versions, each with author and timestamps.
       */
      versions: {
          /**
           * Author
           * @description Information about the version's author.
           */
          author: {
              /**
               * Id
               * @description Unique identifier of the author.
               */
              id: string;
              /**
               * Uri
               * @description URI to the author's profile.
               */
              uri: string;
          };
          /**
           * Created
           * @description Timestamp when this version was created.
           */
          created: string;
          /**
           * Published
           * @description Whether this version is publicly viewable.
           */
          published: boolean;
          /**
           * Version Number
           * @description Version number of the subtitles.
           */
          version_number: number;
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
 * Type of AMARA's AMARA_GET_TEAM_DETAILS tool input.
 */
type AMARA_GET_TEAM_DETAILS_INPUT = {
  /**
   * Slug
   * @description Machine name (slug) of the team to retrieve details for.
   */
  slug?: string;
};

/**
 * Type of AMARA's AMARA_GET_TEAM_DETAILS tool output.
 */
type AMARA_GET_TEAM_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activity Uri
       * @description URI to fetch team activity.
       */
      activity_uri: string;
      /**
       * Applications Uri
       * @description URI to manage team applications; null if not applicable.
       * @default null
       */
      applications_uri: string | null;
      /**
       * Description
       * @description Description of the team.
       */
      description: string;
      /**
       * Is Visible
       * @description Indicates if the team is visible (public).
       */
      is_visible: boolean;
      /**
       * Languages Uri
       * @description URI to access team's preferred/blacklisted languages; null if not applicable.
       * @default null
       */
      languages_uri: string | null;
      /**
       * Members Uri
       * @description URI to list team members.
       */
      members_uri: string;
      /**
       * Membership Policy
       * @description Team membership policy.
       */
      membership_policy: string;
      /**
       * Name
       * @description Display name of the team.
       */
      name: string;
      /**
       * Projects Uri
       * @description URI to list team projects.
       */
      projects_uri: string;
      /**
       * Resource Uri
       * @description URI of the team resource.
       */
      resource_uri: string;
      /**
       * Slug
       * @description Machine name (slug) of the team.
       */
      slug: string;
      /**
       * Tasks Uri
       * @description URI to list team tasks; null if tasks are not enabled.
       * @default null
       */
      tasks_uri: string | null;
      /**
       * Type
       * @description Type of the team (default, simple, collaboration).
       */
      type: string;
      /**
       * Video Policy
       * @description Policy defining who can add videos to the team.
       */
      video_policy: string;
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
 * Type of AMARA's AMARA_GET_USER_DATA tool input.
 */
type AMARA_GET_USER_DATA_INPUT = {
  /**
   * Identifier
   * @description User identifier: username or user ID prefixed with 'id$'.
   */
  identifier?: string;
};

/**
 * Type of AMARA's AMARA_GET_USER_DATA tool output.
 */
type AMARA_GET_USER_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activity Uri
       * @description URI to the user's activity resource.
       */
      activity_uri: string;
      /**
       * Avatar
       * @description URL to the user’s avatar image.
       */
      avatar: string;
      /**
       * Biography
       * @description User's biography.
       */
      biography: string;
      /**
       * Created By
       * @description Username who created this account, if available.
       * @default null
       */
      created_by: string | null;
      /**
       * First Name
       * @description User's first name.
       */
      first_name: string;
      /**
       * Full Name
       * @description User's full name.
       */
      full_name: string;
      /**
       * Homepage
       * @description URL of the user's homepage.
       */
      homepage: string;
      /**
       * Id
       * @description User's unique identifier.
       */
      id: string;
      /**
       * Is Partner
       * @description Indicates if the user is a partner.
       */
      is_partner: boolean;
      /**
       * Languages
       * @description List of language codes the user speaks.
       */
      languages: string[];
      /**
       * Last Name
       * @description User's last name.
       */
      last_name: string;
      /**
       * Num Videos
       * @description Number of videos followed by the user.
       */
      num_videos: number;
      /**
       * Resource Uri
       * @description URI to the user’s resource.
       */
      resource_uri: string;
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
 * Type of AMARA's AMARA_GET_VIDEO_URL_DETAILS tool input.
 */
type AMARA_GET_VIDEO_URL_DETAILS_INPUT = {
  /**
   * Url
   * @description A public or embeddable video URL to look up.
   */
  url?: string;
};

/**
 * Type of AMARA's AMARA_GET_VIDEO_URL_DETAILS tool output.
 */
type AMARA_GET_VIDEO_URL_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Duration
       * @description Duration of the video in seconds.
       */
      duration: number;
      /**
       * Embed Url
       * @description Direct embeddable URL for the video, if available.
       * @default null
       */
      embed_url: string | null;
      /**
       * Is Embeddable
       * @description Whether the video can be embedded.
       */
      is_embeddable: boolean;
      /**
       * Site
       * @description Source platform (e.g., YouTube, Vimeo).
       */
      site: string;
      /**
       * Team Videos
       * @description Teams the video is associated with, if any.
       */
      team_videos: {
          [key: string]: unknown;
      }[];
      /**
       * Thumbnails
       * @description List of available thumbnail image URLs.
       */
      thumbnails: string[];
      /**
       * Title
       * @description The title of the video.
       */
      title: string;
      /**
       * Url
       * @description The original video URL provided.
       */
      url: string;
      /**
       * Video Id
       * @description Unique ID for the video on Amara.
       */
      video_id: string;
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
 * Type of AMARA's AMARA_LIST_AVAILABLE_LANGUAGES tool input.
 */
type AMARA_LIST_AVAILABLE_LANGUAGES_INPUT = object;

/**
 * Type of AMARA's AMARA_LIST_AVAILABLE_LANGUAGES tool output.
 */
type AMARA_LIST_AVAILABLE_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description Mapping of language codes (e.g., 'en') to their human-readable names (e.g., 'English').
       */
      languages: {
          [key: string]: string;
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
 * Type of AMARA's AMARA_LIST_SUBTITLE_LANGUAGES tool input.
 */
type AMARA_LIST_SUBTITLE_LANGUAGES_INPUT = {
  /**
   * Video Id
   * @description Amara video ID for which to list subtitle languages.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_LIST_SUBTITLE_LANGUAGES tool output.
 */
type AMARA_LIST_SUBTITLE_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details for the list of languages.
       */
      meta: {
          /**
           * Limit
           * @description Maximum number of items per page.
           */
          limit: number;
          /**
           * Next
           * @description URL for the next page of results, if any.
           * @default null
           */
          next: string | null;
          /**
           * Offset
           * @description Index of the first item in the current page.
           */
          offset: number;
          /**
           * Previous
           * @description URL for the previous page of results, if any.
           * @default null
           */
          previous: string | null;
          /**
           * Total Count
           * @description Total number of items available.
           */
          total_count: number;
      };
      /**
       * Objects
       * @description List of subtitle language objects.
       */
      objects: {
          /**
           * Approver
           * @description Username of the approver for task-based teams.
           * @default null
           */
          approver: string | null;
          /**
           * Created
           * @description Timestamp of when the language was created (ISO 8601).
           */
          created: string;
          /**
           * Description
           * @description Video description translated into this language.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Internal ID for the language (deprecated).
           * @default null
           */
          id: number | null;
          /**
           * Is Original
           * @description Alias for is_primary_audio_language (deprecated).
           * @default null
           */
          is_original: boolean | null;
          /**
           * Is Primary Audio Language
           * @description Indicates if this is the primary spoken language in the video.
           */
          is_primary_audio_language: boolean;
          /**
           * Is Rtl
           * @description Indicates if the language is written right-to-left.
           */
          is_rtl: boolean;
          /**
           * Is Translation
           * @description Indicates if this language is a translation from other languages (deprecated).
           * @default null
           */
          is_translation: boolean | null;
          /**
           * Language Code
           * @description BCP-47 code representing the subtitle language.
           */
          language_code: string;
          /**
           * Metadata
           * @description Video metadata translated into this language.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Human-readable name of the language.
           */
          name: string;
          /**
           * Num Versions
           * @description Number of subtitle versions (deprecated).
           * @default null
           */
          num_versions: number | null;
          /**
           * Original Language Code
           * @description Source translation language (deprecated).
           * @default null
           */
          original_language_code: string | null;
          /**
           * Published
           * @description Indicates if the subtitles are publicly viewable.
           */
          published: boolean;
          /**
           * Resource Uri
           * @description URI of the subtitle language resource.
           */
          resource_uri: string;
          /**
           * Reviewer
           * @description Username of the reviewer for task-based teams.
           * @default null
           */
          reviewer: string | null;
          /**
           * Subtitle Count
           * @description Number of subtitles available in this language.
           */
          subtitle_count: number;
          /**
           * Subtitles Complete
           * @description Indicates if subtitles are complete for this language.
           */
          subtitles_complete: boolean;
          /**
           * Title
           * @description Video title translated into this language.
           * @default null
           */
          title: string | null;
          /**
           * Versions
           * @description List of subtitle version data.
           * @default null
           */
          versions: {
              /**
               * Author
               * @description Subtitle version author details.
               */
              author: {
                  /**
                   * Id
                   * @description Unique identifier of the version author.
                   */
                  id: string;
                  /**
                   * Username
                   * @description Username of the version author.
                   */
                  username: string;
              };
              /**
               * Published
               * @description Indicates if this version is published.
               */
              published: boolean;
              /**
               * Version Number
               * @description Version number of the subtitles.
               */
              version_number: number;
          }[] | null;
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
 * Type of AMARA's AMARA_LIST_TEAMS tool input.
 */
type AMARA_LIST_TEAMS_INPUT = {
  /**
   * Limit
   * @description Maximum number of teams to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Results offset for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of AMARA's AMARA_LIST_TEAMS tool output.
 */
type AMARA_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details for the result set.
       */
      meta: {
          /**
           * Limit
           * @description Maximum number of items per page.
           */
          limit: number;
          /**
           * Next
           * @description URL for the next page of results, if any.
           * @default null
           */
          next: string | null;
          /**
           * Offset
           * @description Index of the first item in the current page.
           */
          offset: number;
          /**
           * Previous
           * @description URL for the previous page of results, if any.
           * @default null
           */
          previous: string | null;
          /**
           * Total Count
           * @description Total number of items available.
           */
          total_count: number;
      };
      /**
       * Objects
       * @description List of team summary objects.
       */
      objects: {
          /**
           * Activity Uri
           * @description API URI for team activity resource.
           */
          activity_uri: string;
          /**
           * Applications Uri
           * @description API URI for team applications resource, if any.
           * @default null
           */
          applications_uri: string | null;
          /**
           * Languages Uri
           * @description API URI for team languages resource, if any.
           * @default null
           */
          languages_uri: string | null;
          /**
           * Members Uri
           * @description API URI for team members resource.
           */
          members_uri: string;
          /**
           * Membership Policy
           * @description Team membership policy (e.g., 'Open', 'Application', etc.).
           */
          membership_policy: string;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
          /**
           * Projects Uri
           * @description API URI for team projects resource.
           */
          projects_uri: string;
          /**
           * Resource Uri
           * @description API URI for this team resource.
           */
          resource_uri: string;
          /**
           * Slug
           * @description Slug identifier for the team.
           */
          slug: string;
          /**
           * Tasks Uri
           * @description API URI for team tasks resource, if any.
           * @default null
           */
          tasks_uri: string | null;
          /**
           * Team Visibility
           * @description Visibility of the team ('private', 'unlisted', or 'public').
           * @enum {string}
           */
          team_visibility: "private" | "unlisted" | "public";
          /**
           * Type
           * @description Type of the team ('default', 'simple', 'collaboration').
           * @enum {string}
           */
          type: "default" | "simple" | "collaboration";
          /**
           * Video Policy
           * @description Who can add videos to the team.
           * @enum {string}
           */
          video_policy: "Any team member" | "Managers and admins" | "Admins only";
          /**
           * Video Visibility
           * @description Visibility of the team's videos ('private', 'unlisted', or 'public').
           * @enum {string}
           */
          video_visibility: "private" | "unlisted" | "public";
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
 * Type of AMARA's AMARA_LIST_VIDEOS tool input.
 */
type AMARA_LIST_VIDEOS_INPUT = {
  /**
   * Archive
   * @description If true, only archived videos are returned.
   * @default null
   */
  archive: boolean | null;
  /**
   * Language
   * @description Filter by language code (BCP-47), e.g., 'en'.
   * @default null
   */
  language: string | null;
  /**
   * Owner
   * @description Filter by owner username.
   * @default null
   */
  owner: string | null;
  /**
   * Page
   * @description Page number of results to fetch.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page.
   * @default null
   */
  page_size: number | null;
  /**
   * Project
   * @description Filter by project slug.
   * @default null
   */
  project: string | null;
  /**
   * Sort
   * @description Sorting order, e.g., '-created' or '-primary_audio_language_code'.
   * @default null
   */
  sort: string | null;
  /**
   * Team
   * @description Filter by team slug.
   * @default null
   */
  team: string | null;
  /**
   * Video Id
   * @description Comma-separated list of video IDs to filter.
   * @default null
   */
  video_id: string | null;
  /**
   * Video Url
   * @description Filter by exact video URL.
   * @default null
   */
  video_url: string | null;
};

/**
 * Type of AMARA's AMARA_LIST_VIDEOS tool output.
 */
type AMARA_LIST_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details for the list of videos.
       */
      meta: {
          /**
           * Next
           * @description URL to the next page of results, if any.
           * @default null
           */
          next: string | null;
          /**
           * Previous
           * @description URL to the previous page of results, if any.
           * @default null
           */
          previous: string | null;
          /**
           * Total Count
           * @description Total number of results available.
           */
          total_count: number;
      };
      /**
       * Objects
       * @description List of video objects.
       */
      objects: {
          /**
           * Activity Uri
           * @description Video Activity Resource URI.
           * @default null
           */
          activity_uri: string | null;
          /**
           * All Urls
           * @description List of URLs for the video.
           * @default null
           */
          all_urls: string[] | null;
          /**
           * Created
           * @description Video creation timestamp (ISO 8601).
           */
          created: string;
          /**
           * Description
           * @description Video description.
           * @default null
           */
          description: string | null;
          /**
           * Duration
           * @description Video duration in seconds, or null if unknown.
           * @default null
           */
          duration: number | null;
          /**
           * Id
           * @description Amara video ID.
           */
          id: string;
          /**
           * Languages
           * @description List of subtitle language entries.
           * @default null
           */
          languages: {
              /**
               * Code
               * @description Language code.
               */
              code: string;
              /**
               * Dir
               * @description Language direction ('ltr' or 'rtl').
               */
              dir: string;
              /**
               * Name
               * @description Human-readable name of the language.
               */
              name: string;
              /**
               * Published
               * @description Whether subtitles are publicly viewable.
               */
              published: boolean;
              /**
               * Resource Uri
               * @description Subtitles Language Resource URI.
               */
              resource_uri: string;
              /**
               * Subtitles Uri
               * @description Subtitles Resource URI.
               */
              subtitles_uri: string;
          }[] | null;
          /**
           * Metadata
           * @description Metadata key/value pairs for the video.
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Primary Audio Language Code
           * @description Language code for the main audio track.
           * @default null
           */
          primary_audio_language_code: string | null;
          /**
           * Project
           * @description Project slug of the video, if any.
           * @default null
           */
          project: string | null;
          /**
           * Resource Uri
           * @description Video Resource URI.
           */
          resource_uri: string;
          /**
           * Subtitle Languages Uri
           * @description Subtitle languages Resource URI.
           */
          subtitle_languages_uri: string;
          /**
           * Team
           * @description Team slug of the video, if any.
           * @default null
           */
          team: string | null;
          /**
           * Thumbnail
           * @description URL to the video thumbnail.
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Video title.
           */
          title: string;
          /**
           * Urls Uri
           * @description Video URLs Resource URI.
           */
          urls_uri: string;
          /**
           * Video Type
           * @description Video type identifier.
           */
          video_type: string;
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
 * Type of AMARA's AMARA_LIST_VIDEO_URLS tool input.
 */
type AMARA_LIST_VIDEO_URLS_INPUT = {
  /**
   * Limit
   * @description Maximum number of URLs to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of the first URL to return (0-indexed).
   * @default null
   */
  offset: number | null;
  /**
   * Video Id
   * @description Amara video ID for which to list all associated video URLs.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_LIST_VIDEO_URLS tool output.
 */
type AMARA_LIST_VIDEO_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination details for the list of video URLs.
       */
      meta: {
          /**
           * Limit
           * @description Maximum number of items per page.
           */
          limit: number;
          /**
           * Next
           * @description URL for the next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Offset
           * @description Index of the first item in the returned page.
           */
          offset: number;
          /**
           * Previous
           * @description URL for the previous page of results.
           * @default null
           */
          previous: string | null;
          /**
           * Total Count
           * @description Total number of URLs available.
           */
          total_count: number;
      };
      /**
       * Objects
       * @description List of video URL objects.
       */
      objects: {
          /**
           * Created
           * @description Timestamp when the video URL was created (ISO 8601).
           */
          created: string;
          /**
           * Id
           * @description Internal ID for the video URL object.
           */
          id: number;
          /**
           * Original
           * @description Indicates if this URL was the original URL added with the video.
           */
          original: boolean;
          /**
           * Primary
           * @description Indicates if this URL is the primary URL for the video.
           */
          primary: boolean;
          /**
           * Resource Uri
           * @description URI of the video URL resource.
           */
          resource_uri: string;
          /**
           * Type
           * @description Type of the video URL (e.g., YouTube, Vimeo, HTML5).
           */
          type: string;
          /**
           * Url
           * @description The video URL string.
           */
          url: string;
          /**
           * Videoid
           * @description Identifier of the video on the external platform (if applicable).
           */
          videoid: string;
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
 * Type of AMARA's AMARA_MAKE_VIDEO_URL_PRIMARY tool input.
 */
type AMARA_MAKE_VIDEO_URL_PRIMARY_INPUT = {
  /**
   * Primary
   * @description Set to true to mark this URL as the primary URL.
   */
  primary?: boolean;
  /**
   * Url Id
   * @description The internal ID of the video URL resource to mark as primary.
   */
  url_id?: number;
  /**
   * Video Id
   * @description The Amara video identifier (e.g., 'NI1hLjBxuTpk').
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_MAKE_VIDEO_URL_PRIMARY tool output.
 */
type AMARA_MAKE_VIDEO_URL_PRIMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp of the URL resource.
       */
      created: string;
      /**
       * Id
       * @description Internal ID of the URL resource.
       */
      id: number;
      /**
       * Original
       * @description Was this URL the original URL added with the video?
       */
      original: boolean;
      /**
       * Primary
       * @description Is this the primary URL for the video?
       */
      primary: boolean;
      /**
       * Resource Uri
       * @description URI of the video URL resource.
       */
      resource_uri: string;
      /**
       * Type
       * @description Type of the video URL (e.g., 'Youtube', 'HTML5').
       */
      type: string;
      /**
       * Url
       * @description The video URL string.
       */
      url: string;
      /**
       * Videoid
       * @description Identifier on the hosting platform (e.g., YouTube video ID).
       */
      videoid: string;
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
 * Type of AMARA's AMARA_UPDATE_SUBTITLE_LANGUAGE tool input.
 */
type AMARA_UPDATE_SUBTITLE_LANGUAGE_INPUT = {
  /**
   * Is Primary Audio Language
   * @description Indicates if this is the primary spoken language of the video.
   * @default null
   */
  is_primary_audio_language: boolean | null;
  /**
   * Language Code
   * @description BCP-47 code for the subtitle language.
   */
  language_code?: string;
  /**
   * Soft Limit Cpl
   * @description Maximum characters per line; warning shown if exceeded.
   * @default null
   */
  soft_limit_cpl: number | null;
  /**
   * Soft Limit Cps
   * @description Maximum characters per second; warning shown if exceeded.
   * @default null
   */
  soft_limit_cps: number | null;
  /**
   * Soft Limit Lines
   * @description Maximum number of lines per subtitle; warning shown if exceeded.
   * @default null
   */
  soft_limit_lines: number | null;
  /**
   * Soft Limit Max Duration
   * @description Maximum subtitle duration in milliseconds; used in guidelines dialog.
   * @default null
   */
  soft_limit_max_duration: number | null;
  /**
   * Soft Limit Min Duration
   * @description Minimum subtitle duration in milliseconds; warning shown if violated.
   * @default null
   */
  soft_limit_min_duration: number | null;
  /**
   * Subtitles Complete
   * @description Indicates if the subtitles are complete for this language.
   * @default null
   */
  subtitles_complete: boolean | null;
  /**
   * Video Id
   * @description Amara video ID.
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_UPDATE_SUBTITLE_LANGUAGE tool output.
 */
type AMARA_UPDATE_SUBTITLE_LANGUAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the subtitle language was created.
       */
      created: string;
      /**
       * Description
       * @description Translated video description in this language.
       */
      description: string;
      /**
       * Is Primary Audio Language
       * @description Indicates if this is the primary spoken language of the video.
       */
      is_primary_audio_language: boolean;
      /**
       * Is Rtl
       * @description Indicates if the language is right-to-left.
       */
      is_rtl: boolean;
      /**
       * Language Code
       * @description BCP-47 code for the language.
       */
      language_code: string;
      /**
       * Metadata
       * @description Translated video metadata in this language.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Human-readable name of the language.
       */
      name: string;
      /**
       * Num Versions
       * @description Number of subtitle versions available.
       * @default null
       */
      num_versions: number | null;
      /**
       * Published
       * @description Indicates if the subtitles are publicly viewable.
       */
      published: boolean;
      /**
       * Resource Uri
       * @description URI of the subtitle language resource.
       */
      resource_uri: string;
      /**
       * Soft Limit Cpl
       * @description Max characters per line; null if not set.
       * @default null
       */
      soft_limit_cpl: number | null;
      /**
       * Soft Limit Cps
       * @description Max characters per second; null if not set.
       * @default null
       */
      soft_limit_cps: number | null;
      /**
       * Soft Limit Lines
       * @description Max number of lines per subtitle; null if not set.
       * @default null
       */
      soft_limit_lines: number | null;
      /**
       * Soft Limit Max Duration
       * @description Max duration of subtitles in milliseconds; null if not set.
       * @default null
       */
      soft_limit_max_duration: number | null;
      /**
       * Soft Limit Min Duration
       * @description Min duration of subtitles in milliseconds; null if not set.
       * @default null
       */
      soft_limit_min_duration: number | null;
      /**
       * Subtitle Count
       * @description Number of subtitles available in this language.
       */
      subtitle_count: number;
      /**
       * Subtitles Complete
       * @description Indicates if the subtitles are complete for this language.
       */
      subtitles_complete: boolean;
      /**
       * Subtitles Uri
       * @description URI to access the subtitles for this language.
       */
      subtitles_uri: string;
      /**
       * Title
       * @description Translated video title in this language.
       */
      title: string;
      /**
       * Versions
       * @description List of subtitle versions, each with author and timestamps.
       */
      versions: {
          /**
           * Author
           * @description Information about the version's author.
           */
          author: {
              /**
               * Id
               * @description Unique identifier of the author.
               */
              id: string;
              /**
               * Uri
               * @description URI to the author's profile.
               */
              uri: string;
          };
          /**
           * Created
           * @description Timestamp when this version was created.
           */
          created: string;
          /**
           * Published
           * @description Whether this version is publicly viewable.
           */
          published: boolean;
          /**
           * Version Number
           * @description Version number of the subtitles.
           */
          version_number: number;
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
 * Type of AMARA's AMARA_VIEW_VIDEO_DETAILS tool input.
 */
type AMARA_VIEW_VIDEO_DETAILS_INPUT = {
  /**
   * Video Id
   * @description Amara video identifier
   */
  video_id?: string;
};

/**
 * Type of AMARA's AMARA_VIEW_VIDEO_DETAILS tool output.
 */
type AMARA_VIEW_VIDEO_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activity Uri
       * @description Video Activity Resource URI
       */
      activity_uri: string;
      /**
       * All Urls
       * @description List of URLs for the video
       */
      all_urls: string[];
      /**
       * Created
       * @description Video creation timestamp (ISO 8601)
       */
      created: string;
      /**
       * Description
       * @description Video description
       * @default null
       */
      description: string | null;
      /**
       * Duration
       * @description Video duration in seconds
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description Amara video identifier
       */
      id: string;
      /**
       * Languages
       * @description List of subtitle language entries
       */
      languages: {
          /**
           * Code
           * @description Language code (BCP-47)
           */
          code: string;
          /**
           * Dir
           * @description Language direction ('ltr' or 'rtl')
           */
          dir: string;
          /**
           * Name
           * @description Human-readable name of the language
           */
          name: string;
          /**
           * Published
           * @description Whether subtitles are publicly viewable
           */
          published: boolean;
          /**
           * Resource Uri
           * @description Subtitles Language Resource URI
           */
          resource_uri: string;
          /**
           * Subtitles Uri
           * @description Subtitles Resource URI
           */
          subtitles_uri: string;
      }[];
      /**
       * Metadata
       * @description Metadata key/value pairs for the video
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Primary Audio Language Code
       * @description Language code for the main audio track
       * @default null
       */
      primary_audio_language_code: string | null;
      /**
       * Project
       * @description Slug of the project the video belongs to
       * @default null
       */
      project: string | null;
      /**
       * Resource Uri
       * @description Video Resource URI
       */
      resource_uri: string;
      /**
       * Subtitle Languages Uri
       * @description Subtitle languages Resource URI
       */
      subtitle_languages_uri: string;
      /**
       * Team
       * @description Slug of the team the video belongs to
       * @default null
       */
      team: string | null;
      /**
       * Thumbnail
       * @description URL to the video thumbnail
       */
      thumbnail: string;
      /**
       * Title
       * @description Video title
       */
      title: string;
      /**
       * Urls Uri
       * @description Video URLs Resource URI
       */
      urls_uri: string;
      /**
       * Video Type
       * @description Video type identifier
       */
      video_type: string;
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
 * Type map of all available tool input types for toolkit "AMARA".
 */
export type AMARA_TOOL_INPUTS = {
  ADD_SUBTITLE_NOTE: AMARA_ADD_SUBTITLE_NOTE_INPUT
  CREATE_SUBTITLE_LANGUAGE: AMARA_CREATE_SUBTITLE_LANGUAGE_INPUT
  FETCH_SUBTITLES_DATA: AMARA_FETCH_SUBTITLES_DATA_INPUT
  GET_SUBTITLE_LANGUAGE_DETAILS: AMARA_GET_SUBTITLE_LANGUAGE_DETAILS_INPUT
  GET_TEAM_DETAILS: AMARA_GET_TEAM_DETAILS_INPUT
  GET_USER_DATA: AMARA_GET_USER_DATA_INPUT
  GET_VIDEO_URL_DETAILS: AMARA_GET_VIDEO_URL_DETAILS_INPUT
  LIST_AVAILABLE_LANGUAGES: AMARA_LIST_AVAILABLE_LANGUAGES_INPUT
  LIST_SUBTITLE_LANGUAGES: AMARA_LIST_SUBTITLE_LANGUAGES_INPUT
  LIST_TEAMS: AMARA_LIST_TEAMS_INPUT
  LIST_VIDEOS: AMARA_LIST_VIDEOS_INPUT
  LIST_VIDEO_URLS: AMARA_LIST_VIDEO_URLS_INPUT
  MAKE_VIDEO_URL_PRIMARY: AMARA_MAKE_VIDEO_URL_PRIMARY_INPUT
  UPDATE_SUBTITLE_LANGUAGE: AMARA_UPDATE_SUBTITLE_LANGUAGE_INPUT
  VIEW_VIDEO_DETAILS: AMARA_VIEW_VIDEO_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AMARA".
 */
export type AMARA_TOOL_OUTPUTS = {
  ADD_SUBTITLE_NOTE: AMARA_ADD_SUBTITLE_NOTE_OUTPUT
  CREATE_SUBTITLE_LANGUAGE: AMARA_CREATE_SUBTITLE_LANGUAGE_OUTPUT
  FETCH_SUBTITLES_DATA: AMARA_FETCH_SUBTITLES_DATA_OUTPUT
  GET_SUBTITLE_LANGUAGE_DETAILS: AMARA_GET_SUBTITLE_LANGUAGE_DETAILS_OUTPUT
  GET_TEAM_DETAILS: AMARA_GET_TEAM_DETAILS_OUTPUT
  GET_USER_DATA: AMARA_GET_USER_DATA_OUTPUT
  GET_VIDEO_URL_DETAILS: AMARA_GET_VIDEO_URL_DETAILS_OUTPUT
  LIST_AVAILABLE_LANGUAGES: AMARA_LIST_AVAILABLE_LANGUAGES_OUTPUT
  LIST_SUBTITLE_LANGUAGES: AMARA_LIST_SUBTITLE_LANGUAGES_OUTPUT
  LIST_TEAMS: AMARA_LIST_TEAMS_OUTPUT
  LIST_VIDEOS: AMARA_LIST_VIDEOS_OUTPUT
  LIST_VIDEO_URLS: AMARA_LIST_VIDEO_URLS_OUTPUT
  MAKE_VIDEO_URL_PRIMARY: AMARA_MAKE_VIDEO_URL_PRIMARY_OUTPUT
  UPDATE_SUBTITLE_LANGUAGE: AMARA_UPDATE_SUBTITLE_LANGUAGE_OUTPUT
  VIEW_VIDEO_DETAILS: AMARA_VIEW_VIDEO_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AMARA toolkit.
 */
export const AMARA = {
  slug: "amara",
  tools: {
    /**
     * Tool to add a note to a subtitle set. use after retrieving the notes uri of the subtitle set.
     */
    ADD_SUBTITLE_NOTE: "AMARA_ADD_SUBTITLE_NOTE",
    /**
     * Tool to create a new subtitle language for a video. use when you need to add a language track (iso 639-1 code) before uploading subtitles.
     */
    CREATE_SUBTITLE_LANGUAGE: "AMARA_CREATE_SUBTITLE_LANGUAGE",
    /**
     * Tool to fetch subtitle data for a video in a specific language. use when you need to retrieve subtitle segments after confirming video id and language code.
     */
    FETCH_SUBTITLES_DATA: "AMARA_FETCH_SUBTITLES_DATA",
    /**
     * Tool to retrieve details for a single subtitle language. use when you have video id and language code and need metadata about that language track.
     */
    GET_SUBTITLE_LANGUAGE_DETAILS: "AMARA_GET_SUBTITLE_LANGUAGE_DETAILS",
    /**
     * Tool to get details on a specific team by slug. use when you need metadata for a single team.
     */
    GET_TEAM_DETAILS: "AMARA_GET_TEAM_DETAILS",
    /**
     * Tool to get user data by username or id. use when you need to fetch account details for a user.
     */
    GET_USER_DATA: "AMARA_GET_USER_DATA",
    /**
     * Tool to get details for a specific video url. use when you have a public or embeddable video url and need its amara metadata (id, title, duration, thumbnails, etc.).
     */
    GET_VIDEO_URL_DETAILS: "AMARA_GET_VIDEO_URL_DETAILS",
    /**
     * Tool to get a list of all supported languages. use when you need to know available language options from amara.
     */
    LIST_AVAILABLE_LANGUAGES: "AMARA_LIST_AVAILABLE_LANGUAGES",
    /**
     * Tool to list all subtitle languages for a video. use when you have a video id and need to fetch its available subtitle languages.
     */
    LIST_SUBTITLE_LANGUAGES: "AMARA_LIST_SUBTITLE_LANGUAGES",
    /**
     * Tool to list all teams. use when you need to retrieve your accessible teams with pagination.
     */
    LIST_TEAMS: "AMARA_LIST_TEAMS",
    /**
     * Tool to list all videos. use when you need to fetch a paginated list of videos with optional filters.
     */
    LIST_VIDEOS: "AMARA_LIST_VIDEOS",
    /**
     * Tool to list all urls associated with a video. use when you need to retrieve every url for embedding or processing.
     */
    LIST_VIDEO_URLS: "AMARA_LIST_VIDEO_URLS",
    /**
     * Tool to set a video url as the primary url. use when you need to designate one of a video's urls as primary for embedding and display. call after listing video urls to confirm the url id.
     */
    MAKE_VIDEO_URL_PRIMARY: "AMARA_MAKE_VIDEO_URL_PRIMARY",
    /**
     * Tool to update a subtitle language for a video. use after reviewing existing subtitle language settings and needing to adjust completeness flags or soft-limit constraints.
     */
    UPDATE_SUBTITLE_LANGUAGE: "AMARA_UPDATE_SUBTITLE_LANGUAGE",
    /**
     * Tool to view details of a specific video by id. use when you need complete metadata for a given video.
     */
    VIEW_VIDEO_DETAILS: "AMARA_VIEW_VIDEO_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AMARA".
 */
export type AMARA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AMARA".
 */
export type AMARA_TRIGGER_EVENTS = {}
