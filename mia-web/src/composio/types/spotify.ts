import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SPOTIFY's SPOTIFY_ADD_ITEMS_TO_PLAYLIST tool input.
 */
type SPOTIFY_ADD_ITEMS_TO_PLAYLIST_INPUT = {
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
  /**
   * Position
   * @description The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
   */
  position?: number;
  /**
   * Uris
   * @description A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
   */
  uris?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_ADD_ITEMS_TO_PLAYLIST tool output.
 */
type SPOTIFY_ADD_ITEMS_TO_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE tool input.
 */
type SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * Uri
   * @description Uri
   */
  uri?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE tool output.
 */
type SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_ADD_TRACKS_TO_PLAYLIST tool input.
 */
type SPOTIFY_ADD_TRACKS_TO_PLAYLIST_INPUT = {
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
  /**
   * Position
   * @description The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
   */
  position?: number;
  /**
   * Uris
   * @description A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
   */
  uris?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_ADD_TRACKS_TO_PLAYLIST tool output.
 */
type SPOTIFY_ADD_TRACKS_TO_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHANGE_PLAYLIST_DETAILS tool input.
 */
type SPOTIFY_CHANGE_PLAYLIST_DETAILS_INPUT = {
  /**
   * Collaborative
   * @description If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/> _**Note**: You can only set `collaborative` to `true` on non-public playlists._
   */
  collaborative?: boolean;
  /**
   * Description
   * @description Value for playlist description as displayed in Spotify Clients and in the Web API.
   */
  description?: string;
  /**
   * Name
   * @description The new name for the playlist, for example `"My New Playlist Title"`
   */
  name?: string;
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
  /**
   * Public
   * @description If `true` the playlist will be public, if `false` it will be private.
   */
  public?: boolean;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHANGE_PLAYLIST_DETAILS tool output.
 */
type SPOTIFY_CHANGE_PLAYLIST_DETAILS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST tool input.
 */
type SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST tool output.
 */
type SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS tool input.
 */
type SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "artist" | "user";
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS tool output.
 */
type SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_ALBUMS tool input.
 */
type SPOTIFY_CHECK_USER_S_SAVED_ALBUMS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_ALBUMS tool output.
 */
type SPOTIFY_CHECK_USER_S_SAVED_ALBUMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS tool input.
 */
type SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS tool output.
 */
type SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_EPISODES tool input.
 */
type SPOTIFY_CHECK_USER_S_SAVED_EPISODES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_EPISODES tool output.
 */
type SPOTIFY_CHECK_USER_S_SAVED_EPISODES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_SHOWS tool input.
 */
type SPOTIFY_CHECK_USER_S_SAVED_SHOWS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_SHOWS tool output.
 */
type SPOTIFY_CHECK_USER_S_SAVED_SHOWS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_TRACKS tool input.
 */
type SPOTIFY_CHECK_USER_S_SAVED_TRACKS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CHECK_USER_S_SAVED_TRACKS tool output.
 */
type SPOTIFY_CHECK_USER_S_SAVED_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_CREATE_PLAYLIST tool input.
 */
type SPOTIFY_CREATE_PLAYLIST_INPUT = {
  /**
   * Collaborative
   * @description Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
   */
  collaborative?: boolean;
  /**
   * Description
   * @description value for playlist description as displayed in Spotify Clients and in the Web API.
   */
  description?: string;
  /**
   * Name
   * @description The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.
   */
  name?: string;
  /**
   * Public
   * @description Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes)
   */
  public?: boolean;
  /**
   * User Id
   * @description User Id
   */
  user_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_CREATE_PLAYLIST tool output.
 */
type SPOTIFY_CREATE_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_FOLLOW_ARTISTS_OR_USERS tool input.
 */
type SPOTIFY_FOLLOW_ARTISTS_OR_USERS_INPUT = {
  /**
   * Ids
   * @description A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "artist" | "user";
};

/**
 * Type of SPOTIFY's SPOTIFY_FOLLOW_ARTISTS_OR_USERS tool output.
 */
type SPOTIFY_FOLLOW_ARTISTS_OR_USERS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_FOLLOW_PLAYLIST tool input.
 */
type SPOTIFY_FOLLOW_PLAYLIST_INPUT = {
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
  /**
   * Public
   * @description Defaults to `true`. If `true` the playlist will be included in user"s public playlists, if `false` it will remain private.
   */
  public?: boolean;
};

/**
 * Type of SPOTIFY's SPOTIFY_FOLLOW_PLAYLIST tool output.
 */
type SPOTIFY_FOLLOW_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_ALBUM tool input.
 */
type SPOTIFY_GET_ALBUM_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_ALBUM tool output.
 */
type SPOTIFY_GET_ALBUM_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_ALBUM_TRACKS tool input.
 */
type SPOTIFY_GET_ALBUM_TRACKS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_ALBUM_TRACKS tool output.
 */
type SPOTIFY_GET_ALBUM_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AN_ARTIST tool input.
 */
type SPOTIFY_GET_AN_ARTIST_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_AN_ARTIST tool output.
 */
type SPOTIFY_GET_AN_ARTIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AN_ARTISTS_ALBUMS tool input.
 */
type SPOTIFY_GET_AN_ARTISTS_ALBUMS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Include Groups
   * @description Include Groups
   */
  include_groups?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_AN_ARTISTS_ALBUMS tool output.
 */
type SPOTIFY_GET_AN_ARTISTS_ALBUMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS tool input.
 */
type SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS tool output.
 */
type SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AN_AUDIOBOOK tool input.
 */
type SPOTIFY_GET_AN_AUDIOBOOK_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_AN_AUDIOBOOK tool output.
 */
type SPOTIFY_GET_AN_AUDIOBOOK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST tool input.
 */
type SPOTIFY_GET_ARTIST_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST tool output.
 */
type SPOTIFY_GET_ARTIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST_S_ALBUMS tool input.
 */
type SPOTIFY_GET_ARTIST_S_ALBUMS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Include Groups
   * @description Include Groups
   */
  include_groups?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST_S_ALBUMS tool output.
 */
type SPOTIFY_GET_ARTIST_S_ALBUMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS tool input.
 */
type SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS tool output.
 */
type SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST_S_TOP_TRACKS tool input.
 */
type SPOTIFY_GET_ARTIST_S_TOP_TRACKS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_ARTIST_S_TOP_TRACKS tool output.
 */
type SPOTIFY_GET_ARTIST_S_TOP_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AUDIOBOOK_CHAPTERS tool input.
 */
type SPOTIFY_GET_AUDIOBOOK_CHAPTERS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_AUDIOBOOK_CHAPTERS tool output.
 */
type SPOTIFY_GET_AUDIOBOOK_CHAPTERS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AVAILABLE_DEVICES tool input.
 */
type SPOTIFY_GET_AVAILABLE_DEVICES_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_AVAILABLE_DEVICES tool output.
 */
type SPOTIFY_GET_AVAILABLE_DEVICES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AVAILABLE_GENRE_SEEDS tool input.
 */
type SPOTIFY_GET_AVAILABLE_GENRE_SEEDS_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_AVAILABLE_GENRE_SEEDS tool output.
 */
type SPOTIFY_GET_AVAILABLE_GENRE_SEEDS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_AVAILABLE_MARKETS tool input.
 */
type SPOTIFY_GET_AVAILABLE_MARKETS_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_AVAILABLE_MARKETS tool output.
 */
type SPOTIFY_GET_AVAILABLE_MARKETS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_A_CHAPTER tool input.
 */
type SPOTIFY_GET_A_CHAPTER_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_A_CHAPTER tool output.
 */
type SPOTIFY_GET_A_CHAPTER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS tool input.
 */
type SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS tool output.
 */
type SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_A_SHOWS_EPISODES tool input.
 */
type SPOTIFY_GET_A_SHOWS_EPISODES_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_A_SHOWS_EPISODES tool output.
 */
type SPOTIFY_GET_A_SHOWS_EPISODES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES tool input.
 */
type SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES tool output.
 */
type SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_CATEGORY_S_PLAYLISTS tool input.
 */
type SPOTIFY_GET_CATEGORY_S_PLAYLISTS_INPUT = {
  /**
   * Category Id
   * @description Category Id
   */
  category_id?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_CATEGORY_S_PLAYLISTS tool output.
 */
type SPOTIFY_GET_CATEGORY_S_PLAYLISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_CURRENTLY_PLAYING_TRACK tool input.
 */
type SPOTIFY_GET_CURRENTLY_PLAYING_TRACK_INPUT = {
  /**
   * Additional Types
   * @description Additional Types
   */
  additional_types?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_CURRENTLY_PLAYING_TRACK tool output.
 */
type SPOTIFY_GET_CURRENTLY_PLAYING_TRACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_CURRENT_USERS_PROFILE tool input.
 */
type SPOTIFY_GET_CURRENT_USERS_PROFILE_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_CURRENT_USERS_PROFILE tool output.
 */
type SPOTIFY_GET_CURRENT_USERS_PROFILE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS tool input.
 */
type SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS tool output.
 */
type SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_CURRENT_USER_S_PROFILE tool input.
 */
type SPOTIFY_GET_CURRENT_USER_S_PROFILE_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_CURRENT_USER_S_PROFILE tool output.
 */
type SPOTIFY_GET_CURRENT_USER_S_PROFILE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_EPISODE tool input.
 */
type SPOTIFY_GET_EPISODE_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_EPISODE tool output.
 */
type SPOTIFY_GET_EPISODE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_FEATURED_PLAYLISTS tool input.
 */
type SPOTIFY_GET_FEATURED_PLAYLISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Locale
   * @description Locale
   */
  locale?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_FEATURED_PLAYLISTS tool output.
 */
type SPOTIFY_GET_FEATURED_PLAYLISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_FOLLOWED_ARTISTS tool input.
 */
type SPOTIFY_GET_FOLLOWED_ARTISTS_INPUT = {
  /**
   * After
   * @description After
   */
  after?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "artist";
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_FOLLOWED_ARTISTS tool output.
 */
type SPOTIFY_GET_FOLLOWED_ARTISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK tool input.
 */
type SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK_INPUT = {
  /**
   * Additional Types
   * @description Additional Types
   */
  additional_types?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK tool output.
 */
type SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_LIST_USERS_PLAYLISTS tool input.
 */
type SPOTIFY_GET_LIST_USERS_PLAYLISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * User Id
   * @description User Id
   */
  user_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_LIST_USERS_PLAYLISTS tool output.
 */
type SPOTIFY_GET_LIST_USERS_PLAYLISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_NEW_RELEASES tool input.
 */
type SPOTIFY_GET_NEW_RELEASES_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_NEW_RELEASES tool output.
 */
type SPOTIFY_GET_NEW_RELEASES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_PLAYBACK_STATE tool input.
 */
type SPOTIFY_GET_PLAYBACK_STATE_INPUT = {
  /**
   * Additional Types
   * @description Additional Types
   */
  additional_types?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_PLAYBACK_STATE tool output.
 */
type SPOTIFY_GET_PLAYBACK_STATE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_PLAYLIST tool input.
 */
type SPOTIFY_GET_PLAYLIST_INPUT = {
  /**
   * Additional Types
   * @description Additional Types
   */
  additional_types?: string;
  /**
   * Fields
   * @description Fields
   */
  fields?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_PLAYLIST tool output.
 */
type SPOTIFY_GET_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_PLAYLIST_COVER_IMAGE tool input.
 */
type SPOTIFY_GET_PLAYLIST_COVER_IMAGE_INPUT = {
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_PLAYLIST_COVER_IMAGE tool output.
 */
type SPOTIFY_GET_PLAYLIST_COVER_IMAGE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_PLAYLIST_ITEMS tool input.
 */
type SPOTIFY_GET_PLAYLIST_ITEMS_INPUT = {
  /**
   * Additional Types
   * @description Additional Types
   */
  additional_types?: string;
  /**
   * Fields
   * @description Fields
   */
  fields?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_PLAYLIST_ITEMS tool output.
 */
type SPOTIFY_GET_PLAYLIST_ITEMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_QUEUE tool input.
 */
type SPOTIFY_GET_QUEUE_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_QUEUE tool output.
 */
type SPOTIFY_GET_QUEUE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_RECENTLY_PLAYED tool input.
 */
type SPOTIFY_GET_RECENTLY_PLAYED_INPUT = {
  /**
   * After
   * @description After
   */
  after?: number;
  /**
   * Before
   * @description Before
   */
  before?: number;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_RECENTLY_PLAYED tool output.
 */
type SPOTIFY_GET_RECENTLY_PLAYED_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_RECENTLY_PLAYED_TRACKS tool input.
 */
type SPOTIFY_GET_RECENTLY_PLAYED_TRACKS_INPUT = {
  /**
   * After
   * @description After
   */
  after?: number;
  /**
   * Before
   * @description Before
   */
  before?: number;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_RECENTLY_PLAYED_TRACKS tool output.
 */
type SPOTIFY_GET_RECENTLY_PLAYED_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_RECOMMENDATIONS tool input.
 */
type SPOTIFY_GET_RECOMMENDATIONS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Max Acousticness
   * @description Max Acousticness
   */
  max_acousticness?: number;
  /**
   * Max Danceability
   * @description Max Danceability
   */
  max_danceability?: number;
  /**
   * Max Duration Ms
   * @description Max Duration Ms
   */
  max_duration_ms?: number;
  /**
   * Max Energy
   * @description Max Energy
   */
  max_energy?: number;
  /**
   * Max Instrumentalness
   * @description Max Instrumentalness
   */
  max_instrumentalness?: number;
  /**
   * Max Key
   * @description Max Key
   */
  max_key?: number;
  /**
   * Max Liveness
   * @description Max Liveness
   */
  max_liveness?: number;
  /**
   * Max Loudness
   * @description Max Loudness
   */
  max_loudness?: number;
  /**
   * Max Mode
   * @description Max Mode
   */
  max_mode?: number;
  /**
   * Max Popularity
   * @description Max Popularity
   */
  max_popularity?: number;
  /**
   * Max Speechiness
   * @description Max Speechiness
   */
  max_speechiness?: number;
  /**
   * Max Tempo
   * @description Max Tempo
   */
  max_tempo?: number;
  /**
   * Max Time Signature
   * @description Max Time Signature
   */
  max_time_signature?: number;
  /**
   * Max Valence
   * @description Max Valence
   */
  max_valence?: number;
  /**
   * Min Acousticness
   * @description Min Acousticness
   */
  min_acousticness?: number;
  /**
   * Min Danceability
   * @description Min Danceability
   */
  min_danceability?: number;
  /**
   * Min Duration Ms
   * @description Min Duration Ms
   */
  min_duration_ms?: number;
  /**
   * Min Energy
   * @description Min Energy
   */
  min_energy?: number;
  /**
   * Min Instrumentalness
   * @description Min Instrumentalness
   */
  min_instrumentalness?: number;
  /**
   * Min Key
   * @description Min Key
   */
  min_key?: number;
  /**
   * Min Liveness
   * @description Min Liveness
   */
  min_liveness?: number;
  /**
   * Min Loudness
   * @description Min Loudness
   */
  min_loudness?: number;
  /**
   * Min Mode
   * @description Min Mode
   */
  min_mode?: number;
  /**
   * Min Popularity
   * @description Min Popularity
   */
  min_popularity?: number;
  /**
   * Min Speechiness
   * @description Min Speechiness
   */
  min_speechiness?: number;
  /**
   * Min Tempo
   * @description Min Tempo
   */
  min_tempo?: number;
  /**
   * Min Time Signature
   * @description Min Time Signature
   */
  min_time_signature?: number;
  /**
   * Min Valence
   * @description Min Valence
   */
  min_valence?: number;
  /**
   * Seed Artists
   * @description Seed Artists
   */
  seed_artists?: string;
  /**
   * Seed Genres
   * @description Seed Genres
   */
  seed_genres?: string;
  /**
   * Seed Tracks
   * @description Seed Tracks
   */
  seed_tracks?: string;
  /**
   * Target Acousticness
   * @description Target Acousticness
   */
  target_acousticness?: number;
  /**
   * Target Danceability
   * @description Target Danceability
   */
  target_danceability?: number;
  /**
   * Target Duration Ms
   * @description Target Duration Ms
   */
  target_duration_ms?: number;
  /**
   * Target Energy
   * @description Target Energy
   */
  target_energy?: number;
  /**
   * Target Instrumentalness
   * @description Target Instrumentalness
   */
  target_instrumentalness?: number;
  /**
   * Target Key
   * @description Target Key
   */
  target_key?: number;
  /**
   * Target Liveness
   * @description Target Liveness
   */
  target_liveness?: number;
  /**
   * Target Loudness
   * @description Target Loudness
   */
  target_loudness?: number;
  /**
   * Target Mode
   * @description Target Mode
   */
  target_mode?: number;
  /**
   * Target Popularity
   * @description Target Popularity
   */
  target_popularity?: number;
  /**
   * Target Speechiness
   * @description Target Speechiness
   */
  target_speechiness?: number;
  /**
   * Target Tempo
   * @description Target Tempo
   */
  target_tempo?: number;
  /**
   * Target Time Signature
   * @description Target Time Signature
   */
  target_time_signature?: number;
  /**
   * Target Valence
   * @description Target Valence
   */
  target_valence?: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_RECOMMENDATIONS tool output.
 */
type SPOTIFY_GET_RECOMMENDATIONS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_ALBUMS tool input.
 */
type SPOTIFY_GET_SEVERAL_ALBUMS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_ALBUMS tool output.
 */
type SPOTIFY_GET_SEVERAL_ALBUMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_ARTISTS tool input.
 */
type SPOTIFY_GET_SEVERAL_ARTISTS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_ARTISTS tool output.
 */
type SPOTIFY_GET_SEVERAL_ARTISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_AUDIOBOOKS tool input.
 */
type SPOTIFY_GET_SEVERAL_AUDIOBOOKS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_AUDIOBOOKS tool output.
 */
type SPOTIFY_GET_SEVERAL_AUDIOBOOKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES tool input.
 */
type SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Locale
   * @description Locale
   */
  locale?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES tool output.
 */
type SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_CHAPTERS tool input.
 */
type SPOTIFY_GET_SEVERAL_CHAPTERS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_CHAPTERS tool output.
 */
type SPOTIFY_GET_SEVERAL_CHAPTERS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_EPISODES tool input.
 */
type SPOTIFY_GET_SEVERAL_EPISODES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_EPISODES tool output.
 */
type SPOTIFY_GET_SEVERAL_EPISODES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_SHOWS tool input.
 */
type SPOTIFY_GET_SEVERAL_SHOWS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_SHOWS tool output.
 */
type SPOTIFY_GET_SEVERAL_SHOWS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_TRACKS tool input.
 */
type SPOTIFY_GET_SEVERAL_TRACKS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_TRACKS tool output.
 */
type SPOTIFY_GET_SEVERAL_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES tool input.
 */
type SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES tool output.
 */
type SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SHOW tool input.
 */
type SPOTIFY_GET_SHOW_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SHOW tool output.
 */
type SPOTIFY_GET_SHOW_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SHOW_EPISODES tool input.
 */
type SPOTIFY_GET_SHOW_EPISODES_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SHOW_EPISODES tool output.
 */
type SPOTIFY_GET_SHOW_EPISODES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_SINGLE_BROWSE_CATEGORY tool input.
 */
type SPOTIFY_GET_SINGLE_BROWSE_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description Category Id
   */
  category_id?: string;
  /**
   * Locale
   * @description Locale
   */
  locale?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_SINGLE_BROWSE_CATEGORY tool output.
 */
type SPOTIFY_GET_SINGLE_BROWSE_CATEGORY_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK tool input.
 */
type SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK_INPUT = {
  /**
   * Additional Types
   * @description Additional Types
   */
  additional_types?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK tool output.
 */
type SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_THE_USER_S_QUEUE tool input.
 */
type SPOTIFY_GET_THE_USER_S_QUEUE_INPUT = object;

/**
 * Type of SPOTIFY's SPOTIFY_GET_THE_USER_S_QUEUE tool output.
 */
type SPOTIFY_GET_THE_USER_S_QUEUE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_TRACK tool input.
 */
type SPOTIFY_GET_TRACK_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_TRACK tool output.
 */
type SPOTIFY_GET_TRACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS tool input.
 */
type SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS tool output.
 */
type SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_TRACK_S_AUDIO_FEATURES tool input.
 */
type SPOTIFY_GET_TRACK_S_AUDIO_FEATURES_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_TRACK_S_AUDIO_FEATURES tool output.
 */
type SPOTIFY_GET_TRACK_S_AUDIO_FEATURES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USERS_PROFILE tool input.
 */
type SPOTIFY_GET_USERS_PROFILE_INPUT = {
  /**
   * User Id
   * @description User Id
   */
  user_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USERS_PROFILE tool output.
 */
type SPOTIFY_GET_USERS_PROFILE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USERS_SAVED_TRACKS tool input.
 */
type SPOTIFY_GET_USERS_SAVED_TRACKS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USERS_SAVED_TRACKS tool output.
 */
type SPOTIFY_GET_USERS_SAVED_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USERS_TOP_ARTISTS tool input.
 */
type SPOTIFY_GET_USERS_TOP_ARTISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Time Range
   * @description Time Range
   * @default medium_term
   */
  time_range: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USERS_TOP_ARTISTS tool output.
 */
type SPOTIFY_GET_USERS_TOP_ARTISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USERS_TOP_TRACKS tool input.
 */
type SPOTIFY_GET_USERS_TOP_TRACKS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Time Range
   * @description Time Range
   * @default medium_term
   */
  time_range: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USERS_TOP_TRACKS tool output.
 */
type SPOTIFY_GET_USERS_TOP_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_PLAYLISTS tool input.
 */
type SPOTIFY_GET_USER_S_PLAYLISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * User Id
   * @description User Id
   */
  user_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_PLAYLISTS tool output.
 */
type SPOTIFY_GET_USER_S_PLAYLISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_PROFILE tool input.
 */
type SPOTIFY_GET_USER_S_PROFILE_INPUT = {
  /**
   * User Id
   * @description User Id
   */
  user_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_PROFILE tool output.
 */
type SPOTIFY_GET_USER_S_PROFILE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_ALBUMS tool input.
 */
type SPOTIFY_GET_USER_S_SAVED_ALBUMS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_ALBUMS tool output.
 */
type SPOTIFY_GET_USER_S_SAVED_ALBUMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS tool input.
 */
type SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS tool output.
 */
type SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_EPISODES tool input.
 */
type SPOTIFY_GET_USER_S_SAVED_EPISODES_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_EPISODES tool output.
 */
type SPOTIFY_GET_USER_S_SAVED_EPISODES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_SHOWS tool input.
 */
type SPOTIFY_GET_USER_S_SAVED_SHOWS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_SHOWS tool output.
 */
type SPOTIFY_GET_USER_S_SAVED_SHOWS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_TRACKS tool input.
 */
type SPOTIFY_GET_USER_S_SAVED_TRACKS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_SAVED_TRACKS tool output.
 */
type SPOTIFY_GET_USER_S_SAVED_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_TOP_ARTISTS tool input.
 */
type SPOTIFY_GET_USER_S_TOP_ARTISTS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Time Range
   * @description Time Range
   * @default medium_term
   */
  time_range: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_TOP_ARTISTS tool output.
 */
type SPOTIFY_GET_USER_S_TOP_ARTISTS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_TOP_TRACKS tool input.
 */
type SPOTIFY_GET_USER_S_TOP_TRACKS_INPUT = {
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Time Range
   * @description Time Range
   * @default medium_term
   */
  time_range: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_GET_USER_S_TOP_TRACKS tool output.
 */
type SPOTIFY_GET_USER_S_TOP_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_PAUSE_PLAYBACK tool input.
 */
type SPOTIFY_PAUSE_PLAYBACK_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_PAUSE_PLAYBACK tool output.
 */
type SPOTIFY_PAUSE_PLAYBACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_REMOVE_PLAYLIST_ITEMS tool input.
 */
type SPOTIFY_REMOVE_PLAYLIST_ITEMS_INPUT = {
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
  /**
   * Snapshot Id
   * @description The playlist"s snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist.
   */
  snapshot_id?: string;
  /**
   * Tracks
   * @description An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove. For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
   */
  tracks?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of SPOTIFY's SPOTIFY_REMOVE_PLAYLIST_ITEMS tool output.
 */
type SPOTIFY_REMOVE_PLAYLIST_ITEMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_REMOVE_USERS_SAVED_ALBUMS tool input.
 */
type SPOTIFY_REMOVE_USERS_SAVED_ALBUMS_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_REMOVE_USERS_SAVED_ALBUMS tool output.
 */
type SPOTIFY_REMOVE_USERS_SAVED_ALBUMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS tool input.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS tool output.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_EPISODES tool input.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_EPISODES_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_EPISODES tool output.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_EPISODES_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_SHOWS tool input.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_SHOWS_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).   A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*
   */
  ids?: string[];
  /**
   * Market
   * @description Market
   */
  market?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_SHOWS tool output.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_SHOWS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_TRACKS tool input.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_TRACKS_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_REMOVE_USER_S_SAVED_TRACKS tool output.
 */
type SPOTIFY_REMOVE_USER_S_SAVED_TRACKS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER tool input.
 */
type SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER tool output.
 */
type SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SAVE_ALBUMS_USER tool input.
 */
type SPOTIFY_SAVE_ALBUMS_USER_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SAVE_ALBUMS_USER tool output.
 */
type SPOTIFY_SAVE_ALBUMS_USER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER tool input.
 */
type SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER tool output.
 */
type SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER tool input.
 */
type SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER tool output.
 */
type SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER tool input.
 */
type SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).   A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER tool output.
 */
type SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER tool input.
 */
type SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER_INPUT = {
  /**
   * Ids
   * @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER tool output.
 */
type SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SEARCH tool input.
 */
type SPOTIFY_SEARCH_INPUT = {
  /**
   * Include External
   * @description Include External
   * @enum {string}
   */
  include_external?: "audio";
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Q
   * @description Q
   */
  q?: string;
  /**
   * Type
   * @description Type
   */
  type?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SEARCH tool output.
 */
type SPOTIFY_SEARCH_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SEARCH_FOR_ITEM tool input.
 */
type SPOTIFY_SEARCH_FOR_ITEM_INPUT = {
  /**
   * Include External
   * @description Include External
   * @enum {string}
   */
  include_external?: "audio";
  /**
   * Limit
   * @description Limit
   * @default 20
   */
  limit: number;
  /**
   * Market
   * @description Market
   */
  market?: string;
  /**
   * Offset
   * @description Offset
   * @default 0
   */
  offset: number;
  /**
   * Q
   * @description Q
   */
  q?: string;
  /**
   * Type
   * @description Type
   */
  type?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_SEARCH_FOR_ITEM tool output.
 */
type SPOTIFY_SEARCH_FOR_ITEM_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SEEK_TO_POSITION tool input.
 */
type SPOTIFY_SEEK_TO_POSITION_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * Position Ms
   * @description Position Ms
   */
  position_ms?: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_SEEK_TO_POSITION tool output.
 */
type SPOTIFY_SEEK_TO_POSITION_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SET_PLAYBACK_VOLUME tool input.
 */
type SPOTIFY_SET_PLAYBACK_VOLUME_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * Volume Percent
   * @description Volume Percent
   */
  volume_percent?: number;
};

/**
 * Type of SPOTIFY's SPOTIFY_SET_PLAYBACK_VOLUME tool output.
 */
type SPOTIFY_SET_PLAYBACK_VOLUME_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SET_REPEAT_MODE tool input.
 */
type SPOTIFY_SET_REPEAT_MODE_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * State
   * @description State
   */
  state?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_SET_REPEAT_MODE tool output.
 */
type SPOTIFY_SET_REPEAT_MODE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SKIP_TO_NEXT tool input.
 */
type SPOTIFY_SKIP_TO_NEXT_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_SKIP_TO_NEXT tool output.
 */
type SPOTIFY_SKIP_TO_NEXT_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SKIP_TO_PREVIOUS tool input.
 */
type SPOTIFY_SKIP_TO_PREVIOUS_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_SKIP_TO_PREVIOUS tool output.
 */
type SPOTIFY_SKIP_TO_PREVIOUS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK tool input.
 */
type SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK tool output.
 */
type SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_START_A_USERS_PLAYBACK tool input.
 */
type SPOTIFY_START_A_USERS_PLAYBACK_INPUT = {
  /**
   * Context Uri
   * @description Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists. `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
   */
  context_uri?: string;
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * Offset
   * @description Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}` "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
   */
  offset?: {
      [key: string]: unknown;
  };
  /**
   * Position Ms
   * @description Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
   */
  position_ms?: number;
  /**
   * Uris
   * @description Optional. A JSON array of the Spotify track URIs to play. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
   */
  uris?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_START_A_USERS_PLAYBACK tool output.
 */
type SPOTIFY_START_A_USERS_PLAYBACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_START_RESUME_PLAYBACK tool input.
 */
type SPOTIFY_START_RESUME_PLAYBACK_INPUT = {
  /**
   * Context Uri
   * @description Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists. `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
   */
  context_uri?: string;
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * Offset
   * @description Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}` "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
   */
  offset?: {
      [key: string]: unknown;
  };
  /**
   * Position Ms
   * @description Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
   */
  position_ms?: number;
  /**
   * Uris
   * @description Optional. A JSON array of the Spotify track URIs to play. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
   */
  uris?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_START_RESUME_PLAYBACK tool output.
 */
type SPOTIFY_START_RESUME_PLAYBACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE tool input.
 */
type SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE_INPUT = {
  /**
   * Device Id
   * @description Device Id
   */
  device_id?: string;
  /**
   * State
   * @description State
   */
  state?: boolean;
};

/**
 * Type of SPOTIFY's SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE tool output.
 */
type SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_TRANSFER_PLAYBACK tool input.
 */
type SPOTIFY_TRANSFER_PLAYBACK_INPUT = {
  /**
   * Device Ids
   * @description A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_
   */
  device_ids?: string[];
  /**
   * Play
   * @description **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
   */
  play?: boolean;
};

/**
 * Type of SPOTIFY's SPOTIFY_TRANSFER_PLAYBACK tool output.
 */
type SPOTIFY_TRANSFER_PLAYBACK_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS tool input.
 */
type SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS_INPUT = {
  /**
   * Ids
   * @description A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
   */
  ids?: string[];
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "artist" | "user";
};

/**
 * Type of SPOTIFY's SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS tool output.
 */
type SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_UNFOLLOW_PLAYLIST tool input.
 */
type SPOTIFY_UNFOLLOW_PLAYLIST_INPUT = {
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
};

/**
 * Type of SPOTIFY's SPOTIFY_UNFOLLOW_PLAYLIST tool output.
 */
type SPOTIFY_UNFOLLOW_PLAYLIST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of SPOTIFY's SPOTIFY_UPDATE_PLAYLIST_ITEMS tool input.
 */
type SPOTIFY_UPDATE_PLAYLIST_ITEMS_INPUT = {
  /**
   * Insert Before
   * @description The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
   */
  insert_before?: number;
  /**
   * Playlist Id
   * @description Playlist Id
   */
  playlist_id?: string;
  /**
   * Range Length
   * @description The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.
   */
  range_length?: number;
  /**
   * Range Start
   * @description The position of the first item to be reordered.
   */
  range_start?: number;
  /**
   * Snapshot Id
   * @description The playlist"s snapshot ID against which you want to make the changes.
   */
  snapshot_id?: string;
  /**
   * Uris
   * @description Uris
   */
  uris?: string[];
};

/**
 * Type of SPOTIFY's SPOTIFY_UPDATE_PLAYLIST_ITEMS tool output.
 */
type SPOTIFY_UPDATE_PLAYLIST_ITEMS_OUTPUT = {
  /** Data */
  data?: {
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
 * Type map of all available tool input types for toolkit "SPOTIFY".
 */
export type SPOTIFY_TOOL_INPUTS = {
  ADD_ITEMS_TO_PLAYLIST: SPOTIFY_ADD_ITEMS_TO_PLAYLIST_INPUT
  ADD_ITEM_TO_PLAYBACK_QUEUE: SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE_INPUT
  ADD_TRACKS_TO_PLAYLIST: SPOTIFY_ADD_TRACKS_TO_PLAYLIST_INPUT
  CHANGE_PLAYLIST_DETAILS: SPOTIFY_CHANGE_PLAYLIST_DETAILS_INPUT
  CHECK_IF_USERS_FOLLOW_PLAYLIST: SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST_INPUT
  CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS: SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS_INPUT
  CHECK_USER_S_SAVED_ALBUMS: SPOTIFY_CHECK_USER_S_SAVED_ALBUMS_INPUT
  CHECK_USER_S_SAVED_AUDIOBOOKS: SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS_INPUT
  CHECK_USER_S_SAVED_EPISODES: SPOTIFY_CHECK_USER_S_SAVED_EPISODES_INPUT
  CHECK_USER_S_SAVED_SHOWS: SPOTIFY_CHECK_USER_S_SAVED_SHOWS_INPUT
  CHECK_USER_S_SAVED_TRACKS: SPOTIFY_CHECK_USER_S_SAVED_TRACKS_INPUT
  CREATE_PLAYLIST: SPOTIFY_CREATE_PLAYLIST_INPUT
  FOLLOW_ARTISTS_OR_USERS: SPOTIFY_FOLLOW_ARTISTS_OR_USERS_INPUT
  FOLLOW_PLAYLIST: SPOTIFY_FOLLOW_PLAYLIST_INPUT
  GET_ALBUM: SPOTIFY_GET_ALBUM_INPUT
  GET_ALBUM_TRACKS: SPOTIFY_GET_ALBUM_TRACKS_INPUT
  GET_AN_ARTIST: SPOTIFY_GET_AN_ARTIST_INPUT
  GET_AN_ARTISTS_ALBUMS: SPOTIFY_GET_AN_ARTISTS_ALBUMS_INPUT
  GET_AN_ARTISTS_TOP_TRACKS: SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS_INPUT
  GET_AN_AUDIOBOOK: SPOTIFY_GET_AN_AUDIOBOOK_INPUT
  GET_ARTIST: SPOTIFY_GET_ARTIST_INPUT
  GET_ARTIST_S_ALBUMS: SPOTIFY_GET_ARTIST_S_ALBUMS_INPUT
  GET_ARTIST_S_RELATED_ARTISTS: SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS_INPUT
  GET_ARTIST_S_TOP_TRACKS: SPOTIFY_GET_ARTIST_S_TOP_TRACKS_INPUT
  GET_AUDIOBOOK_CHAPTERS: SPOTIFY_GET_AUDIOBOOK_CHAPTERS_INPUT
  GET_AVAILABLE_DEVICES: SPOTIFY_GET_AVAILABLE_DEVICES_INPUT
  GET_AVAILABLE_GENRE_SEEDS: SPOTIFY_GET_AVAILABLE_GENRE_SEEDS_INPUT
  GET_AVAILABLE_MARKETS: SPOTIFY_GET_AVAILABLE_MARKETS_INPUT
  GET_A_CHAPTER: SPOTIFY_GET_A_CHAPTER_INPUT
  GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS: SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS_INPUT
  GET_A_SHOWS_EPISODES: SPOTIFY_GET_A_SHOWS_EPISODES_INPUT
  GET_A_USERS_AVAILABLE_DEVICES: SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES_INPUT
  GET_CATEGORY_S_PLAYLISTS: SPOTIFY_GET_CATEGORY_S_PLAYLISTS_INPUT
  GET_CURRENTLY_PLAYING_TRACK: SPOTIFY_GET_CURRENTLY_PLAYING_TRACK_INPUT
  GET_CURRENT_USERS_PROFILE: SPOTIFY_GET_CURRENT_USERS_PROFILE_INPUT
  GET_CURRENT_USER_S_PLAYLISTS: SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS_INPUT
  GET_CURRENT_USER_S_PROFILE: SPOTIFY_GET_CURRENT_USER_S_PROFILE_INPUT
  GET_EPISODE: SPOTIFY_GET_EPISODE_INPUT
  GET_FEATURED_PLAYLISTS: SPOTIFY_GET_FEATURED_PLAYLISTS_INPUT
  GET_FOLLOWED_ARTISTS: SPOTIFY_GET_FOLLOWED_ARTISTS_INPUT
  GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK: SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK_INPUT
  GET_LIST_USERS_PLAYLISTS: SPOTIFY_GET_LIST_USERS_PLAYLISTS_INPUT
  GET_NEW_RELEASES: SPOTIFY_GET_NEW_RELEASES_INPUT
  GET_PLAYBACK_STATE: SPOTIFY_GET_PLAYBACK_STATE_INPUT
  GET_PLAYLIST: SPOTIFY_GET_PLAYLIST_INPUT
  GET_PLAYLIST_COVER_IMAGE: SPOTIFY_GET_PLAYLIST_COVER_IMAGE_INPUT
  GET_PLAYLIST_ITEMS: SPOTIFY_GET_PLAYLIST_ITEMS_INPUT
  GET_QUEUE: SPOTIFY_GET_QUEUE_INPUT
  GET_RECENTLY_PLAYED: SPOTIFY_GET_RECENTLY_PLAYED_INPUT
  GET_RECENTLY_PLAYED_TRACKS: SPOTIFY_GET_RECENTLY_PLAYED_TRACKS_INPUT
  GET_RECOMMENDATIONS: SPOTIFY_GET_RECOMMENDATIONS_INPUT
  GET_SEVERAL_ALBUMS: SPOTIFY_GET_SEVERAL_ALBUMS_INPUT
  GET_SEVERAL_ARTISTS: SPOTIFY_GET_SEVERAL_ARTISTS_INPUT
  GET_SEVERAL_AUDIOBOOKS: SPOTIFY_GET_SEVERAL_AUDIOBOOKS_INPUT
  GET_SEVERAL_BROWSE_CATEGORIES: SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES_INPUT
  GET_SEVERAL_CHAPTERS: SPOTIFY_GET_SEVERAL_CHAPTERS_INPUT
  GET_SEVERAL_EPISODES: SPOTIFY_GET_SEVERAL_EPISODES_INPUT
  GET_SEVERAL_SHOWS: SPOTIFY_GET_SEVERAL_SHOWS_INPUT
  GET_SEVERAL_TRACKS: SPOTIFY_GET_SEVERAL_TRACKS_INPUT
  GET_SEVERAL_TRACKS_AUDIO_FEATURES: SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES_INPUT
  GET_SHOW: SPOTIFY_GET_SHOW_INPUT
  GET_SHOW_EPISODES: SPOTIFY_GET_SHOW_EPISODES_INPUT
  GET_SINGLE_BROWSE_CATEGORY: SPOTIFY_GET_SINGLE_BROWSE_CATEGORY_INPUT
  GET_THE_USERS_CURRENTLY_PLAYING_TRACK: SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK_INPUT
  GET_THE_USER_S_QUEUE: SPOTIFY_GET_THE_USER_S_QUEUE_INPUT
  GET_TRACK: SPOTIFY_GET_TRACK_INPUT
  GET_TRACK_S_AUDIO_ANALYSIS: SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS_INPUT
  GET_TRACK_S_AUDIO_FEATURES: SPOTIFY_GET_TRACK_S_AUDIO_FEATURES_INPUT
  GET_USERS_PROFILE: SPOTIFY_GET_USERS_PROFILE_INPUT
  GET_USERS_SAVED_TRACKS: SPOTIFY_GET_USERS_SAVED_TRACKS_INPUT
  GET_USERS_TOP_ARTISTS: SPOTIFY_GET_USERS_TOP_ARTISTS_INPUT
  GET_USERS_TOP_TRACKS: SPOTIFY_GET_USERS_TOP_TRACKS_INPUT
  GET_USER_S_PLAYLISTS: SPOTIFY_GET_USER_S_PLAYLISTS_INPUT
  GET_USER_S_PROFILE: SPOTIFY_GET_USER_S_PROFILE_INPUT
  GET_USER_S_SAVED_ALBUMS: SPOTIFY_GET_USER_S_SAVED_ALBUMS_INPUT
  GET_USER_S_SAVED_AUDIOBOOKS: SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS_INPUT
  GET_USER_S_SAVED_EPISODES: SPOTIFY_GET_USER_S_SAVED_EPISODES_INPUT
  GET_USER_S_SAVED_SHOWS: SPOTIFY_GET_USER_S_SAVED_SHOWS_INPUT
  GET_USER_S_SAVED_TRACKS: SPOTIFY_GET_USER_S_SAVED_TRACKS_INPUT
  GET_USER_S_TOP_ARTISTS: SPOTIFY_GET_USER_S_TOP_ARTISTS_INPUT
  GET_USER_S_TOP_TRACKS: SPOTIFY_GET_USER_S_TOP_TRACKS_INPUT
  PAUSE_PLAYBACK: SPOTIFY_PAUSE_PLAYBACK_INPUT
  REMOVE_PLAYLIST_ITEMS: SPOTIFY_REMOVE_PLAYLIST_ITEMS_INPUT
  REMOVE_USERS_SAVED_ALBUMS: SPOTIFY_REMOVE_USERS_SAVED_ALBUMS_INPUT
  REMOVE_USER_S_SAVED_AUDIOBOOKS: SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS_INPUT
  REMOVE_USER_S_SAVED_EPISODES: SPOTIFY_REMOVE_USER_S_SAVED_EPISODES_INPUT
  REMOVE_USER_S_SAVED_SHOWS: SPOTIFY_REMOVE_USER_S_SAVED_SHOWS_INPUT
  REMOVE_USER_S_SAVED_TRACKS: SPOTIFY_REMOVE_USER_S_SAVED_TRACKS_INPUT
  SAVE_ALBUMS_FOR_CURRENT_USER: SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER_INPUT
  SAVE_ALBUMS_USER: SPOTIFY_SAVE_ALBUMS_USER_INPUT
  SAVE_AUDIOBOOKS_FOR_CURRENT_USER: SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER_INPUT
  SAVE_EPISODES_FOR_CURRENT_USER: SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER_INPUT
  SAVE_SHOWS_FOR_CURRENT_USER: SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER_INPUT
  SAVE_TRACKS_FOR_CURRENT_USER: SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER_INPUT
  SEARCH: SPOTIFY_SEARCH_INPUT
  SEARCH_FOR_ITEM: SPOTIFY_SEARCH_FOR_ITEM_INPUT
  SEEK_TO_POSITION: SPOTIFY_SEEK_TO_POSITION_INPUT
  SET_PLAYBACK_VOLUME: SPOTIFY_SET_PLAYBACK_VOLUME_INPUT
  SET_REPEAT_MODE: SPOTIFY_SET_REPEAT_MODE_INPUT
  SKIP_TO_NEXT: SPOTIFY_SKIP_TO_NEXT_INPUT
  SKIP_TO_PREVIOUS: SPOTIFY_SKIP_TO_PREVIOUS_INPUT
  SKIP_USERS_PLAYBACK_TO_NEXT_TRACK: SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK_INPUT
  START_A_USERS_PLAYBACK: SPOTIFY_START_A_USERS_PLAYBACK_INPUT
  START_RESUME_PLAYBACK: SPOTIFY_START_RESUME_PLAYBACK_INPUT
  TOGGLE_PLAYBACK_SHUFFLE: SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE_INPUT
  TRANSFER_PLAYBACK: SPOTIFY_TRANSFER_PLAYBACK_INPUT
  UNFOLLOW_ARTISTS_OR_USERS: SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS_INPUT
  UNFOLLOW_PLAYLIST: SPOTIFY_UNFOLLOW_PLAYLIST_INPUT
  UPDATE_PLAYLIST_ITEMS: SPOTIFY_UPDATE_PLAYLIST_ITEMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SPOTIFY".
 */
export type SPOTIFY_TOOL_OUTPUTS = {
  ADD_ITEMS_TO_PLAYLIST: SPOTIFY_ADD_ITEMS_TO_PLAYLIST_OUTPUT
  ADD_ITEM_TO_PLAYBACK_QUEUE: SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE_OUTPUT
  ADD_TRACKS_TO_PLAYLIST: SPOTIFY_ADD_TRACKS_TO_PLAYLIST_OUTPUT
  CHANGE_PLAYLIST_DETAILS: SPOTIFY_CHANGE_PLAYLIST_DETAILS_OUTPUT
  CHECK_IF_USERS_FOLLOW_PLAYLIST: SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST_OUTPUT
  CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS: SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS_OUTPUT
  CHECK_USER_S_SAVED_ALBUMS: SPOTIFY_CHECK_USER_S_SAVED_ALBUMS_OUTPUT
  CHECK_USER_S_SAVED_AUDIOBOOKS: SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS_OUTPUT
  CHECK_USER_S_SAVED_EPISODES: SPOTIFY_CHECK_USER_S_SAVED_EPISODES_OUTPUT
  CHECK_USER_S_SAVED_SHOWS: SPOTIFY_CHECK_USER_S_SAVED_SHOWS_OUTPUT
  CHECK_USER_S_SAVED_TRACKS: SPOTIFY_CHECK_USER_S_SAVED_TRACKS_OUTPUT
  CREATE_PLAYLIST: SPOTIFY_CREATE_PLAYLIST_OUTPUT
  FOLLOW_ARTISTS_OR_USERS: SPOTIFY_FOLLOW_ARTISTS_OR_USERS_OUTPUT
  FOLLOW_PLAYLIST: SPOTIFY_FOLLOW_PLAYLIST_OUTPUT
  GET_ALBUM: SPOTIFY_GET_ALBUM_OUTPUT
  GET_ALBUM_TRACKS: SPOTIFY_GET_ALBUM_TRACKS_OUTPUT
  GET_AN_ARTIST: SPOTIFY_GET_AN_ARTIST_OUTPUT
  GET_AN_ARTISTS_ALBUMS: SPOTIFY_GET_AN_ARTISTS_ALBUMS_OUTPUT
  GET_AN_ARTISTS_TOP_TRACKS: SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS_OUTPUT
  GET_AN_AUDIOBOOK: SPOTIFY_GET_AN_AUDIOBOOK_OUTPUT
  GET_ARTIST: SPOTIFY_GET_ARTIST_OUTPUT
  GET_ARTIST_S_ALBUMS: SPOTIFY_GET_ARTIST_S_ALBUMS_OUTPUT
  GET_ARTIST_S_RELATED_ARTISTS: SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS_OUTPUT
  GET_ARTIST_S_TOP_TRACKS: SPOTIFY_GET_ARTIST_S_TOP_TRACKS_OUTPUT
  GET_AUDIOBOOK_CHAPTERS: SPOTIFY_GET_AUDIOBOOK_CHAPTERS_OUTPUT
  GET_AVAILABLE_DEVICES: SPOTIFY_GET_AVAILABLE_DEVICES_OUTPUT
  GET_AVAILABLE_GENRE_SEEDS: SPOTIFY_GET_AVAILABLE_GENRE_SEEDS_OUTPUT
  GET_AVAILABLE_MARKETS: SPOTIFY_GET_AVAILABLE_MARKETS_OUTPUT
  GET_A_CHAPTER: SPOTIFY_GET_A_CHAPTER_OUTPUT
  GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS: SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS_OUTPUT
  GET_A_SHOWS_EPISODES: SPOTIFY_GET_A_SHOWS_EPISODES_OUTPUT
  GET_A_USERS_AVAILABLE_DEVICES: SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES_OUTPUT
  GET_CATEGORY_S_PLAYLISTS: SPOTIFY_GET_CATEGORY_S_PLAYLISTS_OUTPUT
  GET_CURRENTLY_PLAYING_TRACK: SPOTIFY_GET_CURRENTLY_PLAYING_TRACK_OUTPUT
  GET_CURRENT_USERS_PROFILE: SPOTIFY_GET_CURRENT_USERS_PROFILE_OUTPUT
  GET_CURRENT_USER_S_PLAYLISTS: SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS_OUTPUT
  GET_CURRENT_USER_S_PROFILE: SPOTIFY_GET_CURRENT_USER_S_PROFILE_OUTPUT
  GET_EPISODE: SPOTIFY_GET_EPISODE_OUTPUT
  GET_FEATURED_PLAYLISTS: SPOTIFY_GET_FEATURED_PLAYLISTS_OUTPUT
  GET_FOLLOWED_ARTISTS: SPOTIFY_GET_FOLLOWED_ARTISTS_OUTPUT
  GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK: SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK_OUTPUT
  GET_LIST_USERS_PLAYLISTS: SPOTIFY_GET_LIST_USERS_PLAYLISTS_OUTPUT
  GET_NEW_RELEASES: SPOTIFY_GET_NEW_RELEASES_OUTPUT
  GET_PLAYBACK_STATE: SPOTIFY_GET_PLAYBACK_STATE_OUTPUT
  GET_PLAYLIST: SPOTIFY_GET_PLAYLIST_OUTPUT
  GET_PLAYLIST_COVER_IMAGE: SPOTIFY_GET_PLAYLIST_COVER_IMAGE_OUTPUT
  GET_PLAYLIST_ITEMS: SPOTIFY_GET_PLAYLIST_ITEMS_OUTPUT
  GET_QUEUE: SPOTIFY_GET_QUEUE_OUTPUT
  GET_RECENTLY_PLAYED: SPOTIFY_GET_RECENTLY_PLAYED_OUTPUT
  GET_RECENTLY_PLAYED_TRACKS: SPOTIFY_GET_RECENTLY_PLAYED_TRACKS_OUTPUT
  GET_RECOMMENDATIONS: SPOTIFY_GET_RECOMMENDATIONS_OUTPUT
  GET_SEVERAL_ALBUMS: SPOTIFY_GET_SEVERAL_ALBUMS_OUTPUT
  GET_SEVERAL_ARTISTS: SPOTIFY_GET_SEVERAL_ARTISTS_OUTPUT
  GET_SEVERAL_AUDIOBOOKS: SPOTIFY_GET_SEVERAL_AUDIOBOOKS_OUTPUT
  GET_SEVERAL_BROWSE_CATEGORIES: SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES_OUTPUT
  GET_SEVERAL_CHAPTERS: SPOTIFY_GET_SEVERAL_CHAPTERS_OUTPUT
  GET_SEVERAL_EPISODES: SPOTIFY_GET_SEVERAL_EPISODES_OUTPUT
  GET_SEVERAL_SHOWS: SPOTIFY_GET_SEVERAL_SHOWS_OUTPUT
  GET_SEVERAL_TRACKS: SPOTIFY_GET_SEVERAL_TRACKS_OUTPUT
  GET_SEVERAL_TRACKS_AUDIO_FEATURES: SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES_OUTPUT
  GET_SHOW: SPOTIFY_GET_SHOW_OUTPUT
  GET_SHOW_EPISODES: SPOTIFY_GET_SHOW_EPISODES_OUTPUT
  GET_SINGLE_BROWSE_CATEGORY: SPOTIFY_GET_SINGLE_BROWSE_CATEGORY_OUTPUT
  GET_THE_USERS_CURRENTLY_PLAYING_TRACK: SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK_OUTPUT
  GET_THE_USER_S_QUEUE: SPOTIFY_GET_THE_USER_S_QUEUE_OUTPUT
  GET_TRACK: SPOTIFY_GET_TRACK_OUTPUT
  GET_TRACK_S_AUDIO_ANALYSIS: SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS_OUTPUT
  GET_TRACK_S_AUDIO_FEATURES: SPOTIFY_GET_TRACK_S_AUDIO_FEATURES_OUTPUT
  GET_USERS_PROFILE: SPOTIFY_GET_USERS_PROFILE_OUTPUT
  GET_USERS_SAVED_TRACKS: SPOTIFY_GET_USERS_SAVED_TRACKS_OUTPUT
  GET_USERS_TOP_ARTISTS: SPOTIFY_GET_USERS_TOP_ARTISTS_OUTPUT
  GET_USERS_TOP_TRACKS: SPOTIFY_GET_USERS_TOP_TRACKS_OUTPUT
  GET_USER_S_PLAYLISTS: SPOTIFY_GET_USER_S_PLAYLISTS_OUTPUT
  GET_USER_S_PROFILE: SPOTIFY_GET_USER_S_PROFILE_OUTPUT
  GET_USER_S_SAVED_ALBUMS: SPOTIFY_GET_USER_S_SAVED_ALBUMS_OUTPUT
  GET_USER_S_SAVED_AUDIOBOOKS: SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS_OUTPUT
  GET_USER_S_SAVED_EPISODES: SPOTIFY_GET_USER_S_SAVED_EPISODES_OUTPUT
  GET_USER_S_SAVED_SHOWS: SPOTIFY_GET_USER_S_SAVED_SHOWS_OUTPUT
  GET_USER_S_SAVED_TRACKS: SPOTIFY_GET_USER_S_SAVED_TRACKS_OUTPUT
  GET_USER_S_TOP_ARTISTS: SPOTIFY_GET_USER_S_TOP_ARTISTS_OUTPUT
  GET_USER_S_TOP_TRACKS: SPOTIFY_GET_USER_S_TOP_TRACKS_OUTPUT
  PAUSE_PLAYBACK: SPOTIFY_PAUSE_PLAYBACK_OUTPUT
  REMOVE_PLAYLIST_ITEMS: SPOTIFY_REMOVE_PLAYLIST_ITEMS_OUTPUT
  REMOVE_USERS_SAVED_ALBUMS: SPOTIFY_REMOVE_USERS_SAVED_ALBUMS_OUTPUT
  REMOVE_USER_S_SAVED_AUDIOBOOKS: SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS_OUTPUT
  REMOVE_USER_S_SAVED_EPISODES: SPOTIFY_REMOVE_USER_S_SAVED_EPISODES_OUTPUT
  REMOVE_USER_S_SAVED_SHOWS: SPOTIFY_REMOVE_USER_S_SAVED_SHOWS_OUTPUT
  REMOVE_USER_S_SAVED_TRACKS: SPOTIFY_REMOVE_USER_S_SAVED_TRACKS_OUTPUT
  SAVE_ALBUMS_FOR_CURRENT_USER: SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER_OUTPUT
  SAVE_ALBUMS_USER: SPOTIFY_SAVE_ALBUMS_USER_OUTPUT
  SAVE_AUDIOBOOKS_FOR_CURRENT_USER: SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER_OUTPUT
  SAVE_EPISODES_FOR_CURRENT_USER: SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER_OUTPUT
  SAVE_SHOWS_FOR_CURRENT_USER: SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER_OUTPUT
  SAVE_TRACKS_FOR_CURRENT_USER: SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER_OUTPUT
  SEARCH: SPOTIFY_SEARCH_OUTPUT
  SEARCH_FOR_ITEM: SPOTIFY_SEARCH_FOR_ITEM_OUTPUT
  SEEK_TO_POSITION: SPOTIFY_SEEK_TO_POSITION_OUTPUT
  SET_PLAYBACK_VOLUME: SPOTIFY_SET_PLAYBACK_VOLUME_OUTPUT
  SET_REPEAT_MODE: SPOTIFY_SET_REPEAT_MODE_OUTPUT
  SKIP_TO_NEXT: SPOTIFY_SKIP_TO_NEXT_OUTPUT
  SKIP_TO_PREVIOUS: SPOTIFY_SKIP_TO_PREVIOUS_OUTPUT
  SKIP_USERS_PLAYBACK_TO_NEXT_TRACK: SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK_OUTPUT
  START_A_USERS_PLAYBACK: SPOTIFY_START_A_USERS_PLAYBACK_OUTPUT
  START_RESUME_PLAYBACK: SPOTIFY_START_RESUME_PLAYBACK_OUTPUT
  TOGGLE_PLAYBACK_SHUFFLE: SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE_OUTPUT
  TRANSFER_PLAYBACK: SPOTIFY_TRANSFER_PLAYBACK_OUTPUT
  UNFOLLOW_ARTISTS_OR_USERS: SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS_OUTPUT
  UNFOLLOW_PLAYLIST: SPOTIFY_UNFOLLOW_PLAYLIST_OUTPUT
  UPDATE_PLAYLIST_ITEMS: SPOTIFY_UPDATE_PLAYLIST_ITEMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of SPOTIFY's NEW_DEVICE_TRIGGER trigger payload.
 */
type SPOTIFY_NEW_DEVICE_TRIGGER_PAYLOAD = {
  /**
   * Device
   * @description Device details
   */
  device?: {
      [key: string]: unknown;
  };
  /**
   * Event Type
   * @description Type of device event (added/removed)
   */
  event_type?: string;
};

/**
 * Type of SPOTIFY's PLAYLIST_ITEM_TRIGGER trigger payload.
 */
type SPOTIFY_PLAYLIST_ITEM_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of playlist item event (added/removed)
   */
  event_type?: string;
  /**
   * Track
   * @description Track details
   */
  track?: {
      [key: string]: unknown;
  };
};

/**
 * Type of SPOTIFY's PLAYLIST_TRIGGER trigger payload.
 */
type SPOTIFY_PLAYLIST_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of playlist event (created/deleted)
   */
  event_type?: string;
  /**
   * Playlist
   * @description Playlist details
   */
  playlist?: {
      [key: string]: unknown;
  };
};

/**
 * Map of Composio's SPOTIFY toolkit.
 */
export const SPOTIFY = {
  slug: "spotify",
  tools: {
    /**
     * Add one or more items to a user's playlist.
     */
    ADD_ITEMS_TO_PLAYLIST: "SPOTIFY_ADD_ITEMS_TO_PLAYLIST",
    /**
     * Add an item to the end of the user's current playback queue. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    ADD_ITEM_TO_PLAYBACK_QUEUE: "SPOTIFY_ADD_ITEM_TO_PLAYBACK_QUEUE",
    /**
     * Add one or more items to a user's playlist. <<DEPRECATED use add_items_to_playlist>>
     */
    ADD_TRACKS_TO_PLAYLIST: "SPOTIFY_ADD_TRACKS_TO_PLAYLIST",
    /**
     * Change a playlist's name and public/private state. (the user must, of course, own the playlist.)
     */
    CHANGE_PLAYLIST_DETAILS: "SPOTIFY_CHANGE_PLAYLIST_DETAILS",
    /**
     * Check to see if one or more spotify users are following a specified playlist.
     */
    CHECK_IF_USERS_FOLLOW_PLAYLIST: "SPOTIFY_CHECK_IF_USERS_FOLLOW_PLAYLIST",
    /**
     * Check to see if the current user is following one or more artists or other spotify users.
     */
    CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS: "SPOTIFY_CHECK_IF_USER_FOLLOWS_ARTISTS_OR_USERS",
    /**
     * Check if one or more albums is already saved in the current spotify user's 'your music' library.
     */
    CHECK_USER_S_SAVED_ALBUMS: "SPOTIFY_CHECK_USER_S_SAVED_ALBUMS",
    /**
     * Check if one or more audiobooks are already saved in the current spotify user's library.
     */
    CHECK_USER_S_SAVED_AUDIOBOOKS: "SPOTIFY_CHECK_USER_S_SAVED_AUDIOBOOKS",
    /**
     * This spotify api endpoint (in beta) checks if episodes are saved in a user's library. feedback and issues can be shared in the developer forum.
     */
    CHECK_USER_S_SAVED_EPISODES: "SPOTIFY_CHECK_USER_S_SAVED_EPISODES",
    /**
     * Check if one or more shows is already saved in the current spotify user's library.
     */
    CHECK_USER_S_SAVED_SHOWS: "SPOTIFY_CHECK_USER_S_SAVED_SHOWS",
    /**
     * Check if one or more tracks is already saved in the current spotify user's 'your music' library.
     */
    CHECK_USER_S_SAVED_TRACKS: "SPOTIFY_CHECK_USER_S_SAVED_TRACKS",
    /**
     * Create a playlist for a spotify user. (the playlist will be empty until you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) each user is generally limited to a maximum of 11000 playlists.
     */
    CREATE_PLAYLIST: "SPOTIFY_CREATE_PLAYLIST",
    /**
     * Add the current user as a follower of one or more artists or other spotify users.
     */
    FOLLOW_ARTISTS_OR_USERS: "SPOTIFY_FOLLOW_ARTISTS_OR_USERS",
    /**
     * Add the current user as a follower of a playlist.
     */
    FOLLOW_PLAYLIST: "SPOTIFY_FOLLOW_PLAYLIST",
    /**
     * Get spotify catalog information for a single album.
     */
    GET_ALBUM: "SPOTIFY_GET_ALBUM",
    /**
     * Get spotify catalog information about an album’s tracks. optional parameters can be used to limit the number of tracks returned.
     */
    GET_ALBUM_TRACKS: "SPOTIFY_GET_ALBUM_TRACKS",
    /**
     * Get spotify catalog information for a single artist identified by their unique spotify id. <<DEPRECATED use get_artist>>
     */
    GET_AN_ARTIST: "SPOTIFY_GET_AN_ARTIST",
    /**
     * Get spotify catalog information about an artist's albums. <<DEPRECATED use get_artist_s_albums>>
     */
    GET_AN_ARTISTS_ALBUMS: "SPOTIFY_GET_AN_ARTISTS_ALBUMS",
    /**
     * Get spotify catalog information about an artist's top tracks by country. <<DEPRECATED use get_artist_s_top_tracks>>
     */
    GET_AN_ARTISTS_TOP_TRACKS: "SPOTIFY_GET_AN_ARTISTS_TOP_TRACKS",
    /**
     * Get spotify catalog information for a single audiobook. audiobooks are only available within the us, uk, canada, ireland, new zealand and australia markets.
     */
    GET_AN_AUDIOBOOK: "SPOTIFY_GET_AN_AUDIOBOOK",
    /**
     * Get spotify catalog information for a single artist identified by their unique spotify id.
     */
    GET_ARTIST: "SPOTIFY_GET_ARTIST",
    /**
     * Get spotify catalog information about an artist's albums.
     */
    GET_ARTIST_S_ALBUMS: "SPOTIFY_GET_ARTIST_S_ALBUMS",
    /**
     * Get spotify catalog information about artists similar to a given artist. similarity is based on analysis of the spotify community's listening history.
     */
    GET_ARTIST_S_RELATED_ARTISTS: "SPOTIFY_GET_ARTIST_S_RELATED_ARTISTS",
    /**
     * Get spotify catalog information about an artist's top tracks by country.
     */
    GET_ARTIST_S_TOP_TRACKS: "SPOTIFY_GET_ARTIST_S_TOP_TRACKS",
    /**
     * Get spotify catalog information about an audiobook's chapters. audiobooks are only available within the us, uk, canada, ireland, new zealand and australia markets.
     */
    GET_AUDIOBOOK_CHAPTERS: "SPOTIFY_GET_AUDIOBOOK_CHAPTERS",
    /**
     * Get information about a user’s available spotify connect devices. some device models are not supported and will not be listed in the api response.
     */
    GET_AVAILABLE_DEVICES: "SPOTIFY_GET_AVAILABLE_DEVICES",
    /**
     * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
     */
    GET_AVAILABLE_GENRE_SEEDS: "SPOTIFY_GET_AVAILABLE_GENRE_SEEDS",
    /**
     * Get the list of markets where spotify is available.
     */
    GET_AVAILABLE_MARKETS: "SPOTIFY_GET_AVAILABLE_MARKETS",
    /**
     * Get spotify catalog information for a single audiobook chapter. chapters are only available within the us, uk, canada, ireland, new zealand and australia markets.
     */
    GET_A_CHAPTER: "SPOTIFY_GET_A_CHAPTER",
    /**
     * Get a list of the playlists owned or followed by the current spotify user. <<DEPRECATED use get_current_user_s_playlists>>
     */
    GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS: "SPOTIFY_GET_A_LIST_OF_CURRENT_USERS_PLAYLISTS",
    /**
     * Get spotify catalog information about an show’s episodes. optional parameters can be used to limit the number of episodes returned. <<DEPRECATED use get_show_episodes>>
     */
    GET_A_SHOWS_EPISODES: "SPOTIFY_GET_A_SHOWS_EPISODES",
    /**
     * Get information about a user’s available spotify connect devices. some device models are not supported and will not be listed in the api response. <<DEPRECATED use get_available_devices>>
     */
    GET_A_USERS_AVAILABLE_DEVICES: "SPOTIFY_GET_A_USERS_AVAILABLE_DEVICES",
    /**
     * Get a list of spotify playlists tagged with a particular category.
     */
    GET_CATEGORY_S_PLAYLISTS: "SPOTIFY_GET_CATEGORY_S_PLAYLISTS",
    /**
     * Get the object currently being played on the user's spotify account.
     */
    GET_CURRENTLY_PLAYING_TRACK: "SPOTIFY_GET_CURRENTLY_PLAYING_TRACK",
    /**
     * Get detailed profile information about the current user (including the current user's username). <<DEPRECATED use get_current_user_s_profile>>
     */
    GET_CURRENT_USERS_PROFILE: "SPOTIFY_GET_CURRENT_USERS_PROFILE",
    /**
     * Get a list of the playlists owned or followed by the current spotify user.
     */
    GET_CURRENT_USER_S_PLAYLISTS: "SPOTIFY_GET_CURRENT_USER_S_PLAYLISTS",
    /**
     * Get detailed profile information about the current user (including the current user's username).
     */
    GET_CURRENT_USER_S_PROFILE: "SPOTIFY_GET_CURRENT_USER_S_PROFILE",
    /**
     * Get spotify catalog information for a single episode identified by its unique spotify id.
     */
    GET_EPISODE: "SPOTIFY_GET_EPISODE",
    /**
     * Get a list of spotify featured playlists (shown, for example, on a spotify player's 'browse' tab).
     */
    GET_FEATURED_PLAYLISTS: "SPOTIFY_GET_FEATURED_PLAYLISTS",
    /**
     * Get the current user's followed artists.
     */
    GET_FOLLOWED_ARTISTS: "SPOTIFY_GET_FOLLOWED_ARTISTS",
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device. <<DEPRECATED use get_playback_state>>
     */
    GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK: "SPOTIFY_GET_INFORMATION_ABOUT_THE_USERS_CURRENT_PLAYBACK",
    /**
     * Get a list of the playlists owned or followed by a spotify user. <<DEPRECATED use get_user_s_playlists>>
     */
    GET_LIST_USERS_PLAYLISTS: "SPOTIFY_GET_LIST_USERS_PLAYLISTS",
    /**
     * Get a list of new album releases featured in spotify (shown, for example, on a spotify player’s “browse” tab).
     */
    GET_NEW_RELEASES: "SPOTIFY_GET_NEW_RELEASES",
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device.
     */
    GET_PLAYBACK_STATE: "SPOTIFY_GET_PLAYBACK_STATE",
    /**
     * Get a playlist owned by a spotify user.
     */
    GET_PLAYLIST: "SPOTIFY_GET_PLAYLIST",
    /**
     * Get the current image associated with a specific playlist.
     */
    GET_PLAYLIST_COVER_IMAGE: "SPOTIFY_GET_PLAYLIST_COVER_IMAGE",
    /**
     * Get full details of the items of a playlist owned by a spotify user.
     */
    GET_PLAYLIST_ITEMS: "SPOTIFY_GET_PLAYLIST_ITEMS",
    /**
     * Get the list of objects that make up the user's queue. <<DEPRECATED use get_the_user_s_queue>>
     */
    GET_QUEUE: "SPOTIFY_GET_QUEUE",
    /**
     * Get tracks from the current user's recently played tracks.  **note**: currently doesn't support podcast episodes.  <<DEPRECATED use get_recently_played_tracks>>
     */
    GET_RECENTLY_PLAYED: "SPOTIFY_GET_RECENTLY_PLAYED",
    /**
     * Get tracks from the current user's recently played tracks.  **note**: currently doesn't support podcast episodes. 
     */
    GET_RECENTLY_PLAYED_TRACKS: "SPOTIFY_GET_RECENTLY_PLAYED_TRACKS",
    /**
     * Recommendations are based on seed entity data, matched with similar artists and tracks. if data is ample, a track list and pool size are returned. for new or obscure artists and tracks, data may be insufficient for recommendations.
     */
    GET_RECOMMENDATIONS: "SPOTIFY_GET_RECOMMENDATIONS",
    /**
     * Get spotify catalog information for multiple albums identified by their spotify ids.
     */
    GET_SEVERAL_ALBUMS: "SPOTIFY_GET_SEVERAL_ALBUMS",
    /**
     * Get spotify catalog information for several artists based on their spotify ids.
     */
    GET_SEVERAL_ARTISTS: "SPOTIFY_GET_SEVERAL_ARTISTS",
    /**
     * Get spotify catalog information for several audiobooks identified by their spotify ids. audiobooks are only available within the us, uk, canada, ireland, new zealand and australia markets.
     */
    GET_SEVERAL_AUDIOBOOKS: "SPOTIFY_GET_SEVERAL_AUDIOBOOKS",
    /**
     * Get a list of categories used to tag items in spotify (on, for example, the spotify player’s “browse” tab).
     */
    GET_SEVERAL_BROWSE_CATEGORIES: "SPOTIFY_GET_SEVERAL_BROWSE_CATEGORIES",
    /**
     * Get spotify catalog information for several audiobook chapters identified by their spotify ids. chapters are only available within the us, uk, canada, ireland, new zealand and australia markets.
     */
    GET_SEVERAL_CHAPTERS: "SPOTIFY_GET_SEVERAL_CHAPTERS",
    /**
     * Get spotify catalog information for several episodes based on their spotify ids.
     */
    GET_SEVERAL_EPISODES: "SPOTIFY_GET_SEVERAL_EPISODES",
    /**
     * Get spotify catalog information for several shows based on their spotify ids.
     */
    GET_SEVERAL_SHOWS: "SPOTIFY_GET_SEVERAL_SHOWS",
    /**
     * Get spotify catalog information for multiple tracks based on their spotify ids.
     */
    GET_SEVERAL_TRACKS: "SPOTIFY_GET_SEVERAL_TRACKS",
    /**
     * Get audio features for multiple tracks based on their spotify ids.
     */
    GET_SEVERAL_TRACKS_AUDIO_FEATURES: "SPOTIFY_GET_SEVERAL_TRACKS_AUDIO_FEATURES",
    /**
     * Get spotify catalog information for a single show identified by its unique spotify id.
     */
    GET_SHOW: "SPOTIFY_GET_SHOW",
    /**
     * Get spotify catalog information about an show’s episodes. optional parameters can be used to limit the number of episodes returned.
     */
    GET_SHOW_EPISODES: "SPOTIFY_GET_SHOW_EPISODES",
    /**
     * Get a single category used to tag items in spotify (on, for example, the spotify player’s “browse” tab).
     */
    GET_SINGLE_BROWSE_CATEGORY: "SPOTIFY_GET_SINGLE_BROWSE_CATEGORY",
    /**
     * Get the object currently being played on the user's spotify account. <<DEPRECATED use get_currently_playing_track>>
     */
    GET_THE_USERS_CURRENTLY_PLAYING_TRACK: "SPOTIFY_GET_THE_USERS_CURRENTLY_PLAYING_TRACK",
    /**
     * Get the list of objects that make up the user's queue.
     */
    GET_THE_USER_S_QUEUE: "SPOTIFY_GET_THE_USER_S_QUEUE",
    /**
     * Get spotify catalog information for a single track identified by its unique spotify id.
     */
    GET_TRACK: "SPOTIFY_GET_TRACK",
    /**
     * Get a low-level audio analysis for a track in the spotify catalog. the audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
     */
    GET_TRACK_S_AUDIO_ANALYSIS: "SPOTIFY_GET_TRACK_S_AUDIO_ANALYSIS",
    /**
     * Get audio feature information for a single track identified by its unique spotify id.
     */
    GET_TRACK_S_AUDIO_FEATURES: "SPOTIFY_GET_TRACK_S_AUDIO_FEATURES",
    /**
     * Get public profile information about a spotify user. <<DEPRECATED use get_user_s_profile>>
     */
    GET_USERS_PROFILE: "SPOTIFY_GET_USERS_PROFILE",
    /**
     * Get a list of the songs saved in the current spotify user's 'your music' library. <<DEPRECATED use get_user_s_saved_tracks>>
     */
    GET_USERS_SAVED_TRACKS: "SPOTIFY_GET_USERS_SAVED_TRACKS",
    /**
     * Get the current user's top artists based on calculated affinity. <<DEPRECATED use get_user_s_top_artists>>
     */
    GET_USERS_TOP_ARTISTS: "SPOTIFY_GET_USERS_TOP_ARTISTS",
    /**
     * Get the current user's top tracks based on calculated affinity. <<DEPRECATED use get_user_s_top_tracks>>
     */
    GET_USERS_TOP_TRACKS: "SPOTIFY_GET_USERS_TOP_TRACKS",
    /**
     * Get a list of the playlists owned or followed by a spotify user.
     */
    GET_USER_S_PLAYLISTS: "SPOTIFY_GET_USER_S_PLAYLISTS",
    /**
     * Get public profile information about a spotify user.
     */
    GET_USER_S_PROFILE: "SPOTIFY_GET_USER_S_PROFILE",
    /**
     * Get a list of the albums saved in the current spotify user's 'your music' library.
     */
    GET_USER_S_SAVED_ALBUMS: "SPOTIFY_GET_USER_S_SAVED_ALBUMS",
    /**
     * Get a list of the audiobooks saved in the current spotify user's 'your music' library.
     */
    GET_USER_S_SAVED_AUDIOBOOKS: "SPOTIFY_GET_USER_S_SAVED_AUDIOBOOKS",
    /**
     * This api endpoint, currently in beta, allows retrieving episodes saved in a spotify user's library. changes may occur without notice. feedback and issues can be shared in spotify's developer forum.
     */
    GET_USER_S_SAVED_EPISODES: "SPOTIFY_GET_USER_S_SAVED_EPISODES",
    /**
     * Get a list of shows saved in the current spotify user's library. optional parameters can be used to limit the number of shows returned.
     */
    GET_USER_S_SAVED_SHOWS: "SPOTIFY_GET_USER_S_SAVED_SHOWS",
    /**
     * Get a list of the songs saved in the current spotify user's 'your music' library.
     */
    GET_USER_S_SAVED_TRACKS: "SPOTIFY_GET_USER_S_SAVED_TRACKS",
    /**
     * Get the current user's top artists based on calculated affinity.
     */
    GET_USER_S_TOP_ARTISTS: "SPOTIFY_GET_USER_S_TOP_ARTISTS",
    /**
     * Get the current user's top tracks based on calculated affinity.
     */
    GET_USER_S_TOP_TRACKS: "SPOTIFY_GET_USER_S_TOP_TRACKS",
    /**
     * Pause playback on the user's account. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    PAUSE_PLAYBACK: "SPOTIFY_PAUSE_PLAYBACK",
    /**
     * Remove one or more items from a user's playlist.
     */
    REMOVE_PLAYLIST_ITEMS: "SPOTIFY_REMOVE_PLAYLIST_ITEMS",
    /**
     * Remove one or more albums from the current user's 'your music' library.
     */
    REMOVE_USERS_SAVED_ALBUMS: "SPOTIFY_REMOVE_USERS_SAVED_ALBUMS",
    /**
     * Remove one or more audiobooks from the spotify user's library.
     */
    REMOVE_USER_S_SAVED_AUDIOBOOKS: "SPOTIFY_REMOVE_USER_S_SAVED_AUDIOBOOKS",
    /**
     * This api endpoint, currently in beta, allows for the removal of episodes from a user's library and may change without notice. feedback and issues can be shared on the spotify developer forum.
     */
    REMOVE_USER_S_SAVED_EPISODES: "SPOTIFY_REMOVE_USER_S_SAVED_EPISODES",
    /**
     * Delete one or more shows from current spotify user's library.
     */
    REMOVE_USER_S_SAVED_SHOWS: "SPOTIFY_REMOVE_USER_S_SAVED_SHOWS",
    /**
     * Remove one or more tracks from the current user's 'your music' library.
     */
    REMOVE_USER_S_SAVED_TRACKS: "SPOTIFY_REMOVE_USER_S_SAVED_TRACKS",
    /**
     * Save one or more albums to the current user's 'your music' library.
     */
    SAVE_ALBUMS_FOR_CURRENT_USER: "SPOTIFY_SAVE_ALBUMS_FOR_CURRENT_USER",
    /**
     * Save one or more albums to the current user's 'your music' library. <<DEPRECATED use save_albums_for_current_user>>
     */
    SAVE_ALBUMS_USER: "SPOTIFY_SAVE_ALBUMS_USER",
    /**
     * Save one or more audiobooks to the current spotify user's library.
     */
    SAVE_AUDIOBOOKS_FOR_CURRENT_USER: "SPOTIFY_SAVE_AUDIOBOOKS_FOR_CURRENT_USER",
    /**
     * This api endpoint, currently in beta, allows saving episodes to a user's library. users are encouraged to provide feedback or report issues in the spotify developer forum.
     */
    SAVE_EPISODES_FOR_CURRENT_USER: "SPOTIFY_SAVE_EPISODES_FOR_CURRENT_USER",
    /**
     * Save one or more shows to current spotify user's library.
     */
    SAVE_SHOWS_FOR_CURRENT_USER: "SPOTIFY_SAVE_SHOWS_FOR_CURRENT_USER",
    /**
     * Save one or more tracks to the current user's 'your music' library.
     */
    SAVE_TRACKS_FOR_CURRENT_USER: "SPOTIFY_SAVE_TRACKS_FOR_CURRENT_USER",
    /**
     * Get spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. audiobooks are only available within the us, uk, canada, ireland, new zealand and australia markets. <<DEPRECATED use search_for_item>>
     */
    SEARCH: "SPOTIFY_SEARCH",
    /**
     * Get spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string. audiobooks are only available within the us, uk, canada, ireland, new zealand and australia markets.
     */
    SEARCH_FOR_ITEM: "SPOTIFY_SEARCH_FOR_ITEM",
    /**
     * Seeks to the given position in the user’s currently playing track. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    SEEK_TO_POSITION: "SPOTIFY_SEEK_TO_POSITION",
    /**
     * Set the volume for the user’s current playback device. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    SET_PLAYBACK_VOLUME: "SPOTIFY_SET_PLAYBACK_VOLUME",
    /**
     * Set the repeat mode for the user's playback. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    SET_REPEAT_MODE: "SPOTIFY_SET_REPEAT_MODE",
    /**
     * Skips to next track in the user’s queue. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    SKIP_TO_NEXT: "SPOTIFY_SKIP_TO_NEXT",
    /**
     * Skips to previous track in the user’s queue. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    SKIP_TO_PREVIOUS: "SPOTIFY_SKIP_TO_PREVIOUS",
    /**
     * Skips to next track in the user’s queue. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints. <<DEPRECATED use skip_to_next>>
     */
    SKIP_USERS_PLAYBACK_TO_NEXT_TRACK: "SPOTIFY_SKIP_USERS_PLAYBACK_TO_NEXT_TRACK",
    /**
     * Start a new context or resume current playback on the user's active device. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints. <<DEPRECATED use start_resume_playback>>
     */
    START_A_USERS_PLAYBACK: "SPOTIFY_START_A_USERS_PLAYBACK",
    /**
     * Start a new context or resume current playback on the user's active device. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    START_RESUME_PLAYBACK: "SPOTIFY_START_RESUME_PLAYBACK",
    /**
     * Toggle shuffle on or off for user’s playback. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    TOGGLE_PLAYBACK_SHUFFLE: "SPOTIFY_TOGGLE_PLAYBACK_SHUFFLE",
    /**
     * Transfer playback to a new device and optionally begin playback. this api only works for users who have spotify premium. the order of execution is not guaranteed when you use this api with other player api endpoints.
     */
    TRANSFER_PLAYBACK: "SPOTIFY_TRANSFER_PLAYBACK",
    /**
     * Remove the current user as a follower of one or more artists or other spotify users.
     */
    UNFOLLOW_ARTISTS_OR_USERS: "SPOTIFY_UNFOLLOW_ARTISTS_OR_USERS",
    /**
     * Remove the current user as a follower of a playlist.
     */
    UNFOLLOW_PLAYLIST: "SPOTIFY_UNFOLLOW_PLAYLIST",
    /**
     * To modify a playlist, use rearrange (with `range start`, `insert before`, `range length`, `snapshot id`) or replace items (`uris` in body/query). replace overwrites items. operations can't combine in one request; they are exclusive but share an endpoint.
     */
    UPDATE_PLAYLIST_ITEMS: "SPOTIFY_UPDATE_PLAYLIST_ITEMS",
  },
  triggerTypes: {
    /**
     * Triggers when a new device is added.
     */
    NEW_DEVICE_TRIGGER: "SPOTIFY_NEW_DEVICE_TRIGGER",
    /**
     * Triggers when songs are added to or removed from a Spotify playlist.
     */
    PLAYLIST_ITEM_TRIGGER: "SPOTIFY_PLAYLIST_ITEM_TRIGGER",
    /**
     * Triggers when a new playlist is created or deleted.
     */
    PLAYLIST_TRIGGER: "SPOTIFY_PLAYLIST_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "SPOTIFY".
 */
export type SPOTIFY_TRIGGER_PAYLOADS = {
  NEW_DEVICE_TRIGGER: SPOTIFY_NEW_DEVICE_TRIGGER_PAYLOAD
  PLAYLIST_ITEM_TRIGGER: SPOTIFY_PLAYLIST_ITEM_TRIGGER_PAYLOAD
  PLAYLIST_TRIGGER: SPOTIFY_PLAYLIST_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "SPOTIFY".
 */
export type SPOTIFY_TRIGGER_EVENTS = {
  NEW_DEVICE_TRIGGER: TriggerEvent<SPOTIFY_NEW_DEVICE_TRIGGER_PAYLOAD>
  PLAYLIST_ITEM_TRIGGER: TriggerEvent<SPOTIFY_PLAYLIST_ITEM_TRIGGER_PAYLOAD>
  PLAYLIST_TRIGGER: TriggerEvent<SPOTIFY_PLAYLIST_TRIGGER_PAYLOAD>
}
