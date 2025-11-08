// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LISTENNOTES's LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES tool input.
 */
type LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES_INPUT = {
  /**
   * Ids
   * @description Comma-separated list of episode ids.
   */
  ids?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES tool output.
 */
type LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Episodes */
      episodes: {
          /**
           * Audio
           * @description Audio url of this episode, which can be played directly.
           * @default null
           */
          audio: string | null;
          /**
           * Audio Length Sec
           * @description Audio length of this episode. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
           *     If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Link
           * @description Web link of this episode.
           * @default null
           */
          link: string | null;
          /**
           * Listennotes Edit Url
           * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
           * @default null
           */
          listennotes_edit_url: string | null;
          /**
           * Listennotes Url
           * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Maybe Audio Invalid
           * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
           * @default null
           */
          maybe_audio_invalid: boolean | null;
          /**
           * Podcast
           * @default null
           */
          podcast: {
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher
               * @description Podcast publisher name.
               * @default null
               */
              publisher: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title
               * @description Podcast name.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Pub Date Ms
           * @description Published date for this episode. In millisecond.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Thumbnail
           * @description Thumbnail image (300x300) url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
           *
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Episode name.
           * @default null
           */
          title: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS tool input.
 */
type LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS_INPUT = {
  /**
   * Ids
   * @description Comma-separated list of podcast ids.
   */
  ids?: string;
  /**
   * Itunes Ids
   * @description Comma-separated Apple Podcasts (iTunes) ids, e.g., 659155419
   */
  itunes_ids?: string;
  /**
   * Next Episode Pub Date
   * @description For latest episodes pagination. It"s the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 15 episodes.
   */
  next_episode_pub_date?: number;
  /**
   * Rsses
   * @description Comma-separated rss urls.
   */
  rsses?: string;
  /**
   * Show Latest Episodes
   * @description Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.
   * @default 0
   */
  show_latest_episodes: number;
  /**
   * Spotify Ids
   * @description Comma-separated Spotify ids, e.g., 3DDfEsKDIDrTlnPOiG4ZF4
   */
  spotify_ids?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS tool output.
 */
type LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Latest Episodes
       * @description Up to 10 latest episodes from these podcasts, sorted by **pub_date**. This field shows up only when **show_latest_episodes** is 1.
       *
       * @default null
       */
      latest_episodes: {
          /**
           * Audio
           * @description Audio url of this episode, which can be played directly.
           * @default null
           */
          audio: string | null;
          /**
           * Audio Length Sec
           * @description Audio length of this episode. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
           *     If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Link
           * @description Web link of this episode.
           * @default null
           */
          link: string | null;
          /**
           * Listennotes Edit Url
           * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
           * @default null
           */
          listennotes_edit_url: string | null;
          /**
           * Listennotes Url
           * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Maybe Audio Invalid
           * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
           * @default null
           */
          maybe_audio_invalid: boolean | null;
          /**
           * Podcast1
           * @default null
           */
          podcast: {
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher
               * @description Podcast publisher name.
               * @default null
               */
              publisher: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title
               * @description Podcast name.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Pub Date Ms
           * @description Published date for this episode. In millisecond.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Thumbnail
           * @description Thumbnail image (300x300) url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
           *
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Episode name.
           * @default null
           */
          title: string | null;
      }[] | null;
      /** Podcasts */
      podcasts: {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Country
           * @description The country where this podcast is produced.
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Extra
           * @default null
           */
          extra: {
              /**
               * Amazon Music Url
               * @description Amazon Music url for this podcast
               * @default null
               */
              amazon_music_url: string | null;
              /**
               * Facebook Handle
               * @description Facebook username affiliated with this podcast
               * @default null
               */
              facebook_handle: string | null;
              /**
               * Instagram Handle
               * @description Instagram username affiliated with this podcast
               * @default null
               */
              instagram_handle: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn url affiliated with this podcast
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Patreon Handle
               * @description Patreon username affiliated with this podcast
               * @default null
               */
              patreon_handle: string | null;
              /**
               * Spotify Url
               * @description Spotify url for this podcast
               * @default null
               */
              spotify_url: string | null;
              /**
               * Twitter Handle
               * @description Twitter username affiliated with this podcast
               * @default null
               */
              twitter_handle: string | null;
              /**
               * Url1
               * @description Url affiliated with this podcast
               * @default null
               */
              url1: string | null;
              /**
               * Url2
               * @description Url affiliated with this podcast
               * @default null
               */
              url2: string | null;
              /**
               * Url3
               * @description Url affiliated with this podcast
               * @default null
               */
              url3: string | null;
              /**
               * Wechat Handle
               * @description WeChat username affiliated with this podcast
               * @default null
               */
              wechat_handle: string | null;
              /**
               * Youtube Url
               * @description YouTube url affiliated with this podcast
               * @default null
               */
              youtube_url: string | null;
          } | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Is Claimed
           * @description Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          is_claimed: boolean | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Language
           * @description The language of this podcast. You can get all supported languages from `GET /languages`.
           * @default null
           */
          language: string | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * LookingFor
           * @default null
           */
          looking_for: {
              /**
               * Cohosts
               * @description Whether this podcast is looking for cohosts.
               * @default null
               */
              cohosts: boolean | null;
              /**
               * Cross Promotion
               * @description Whether this podcast is looking for cross promotion opportunities with other podcasts.
               * @default null
               */
              cross_promotion: boolean | null;
              /**
               * Guests
               * @description Whether this podcast is looking for guests.
               * @default null
               */
              guests: boolean | null;
              /**
               * Sponsors
               * @description Whether this podcast is looking for sponsors.
               * @default null
               */
              sponsors: boolean | null;
          } | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Type
           * @description The type of this podcast - episodic or serial.
           * @default null
           * @enum {string|null}
           */
          type: "episodic" | "serial" | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST tool input.
 */
type LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST_INPUT = {
  /**
   * Id
   * @description Podcast id.
   */
  id?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST tool output.
 */
type LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * By Regions
       * @default null
       */
      by_regions: {
          /**
           * Ratio
           * @description percentage of audience from this specific region
           * @default null
           */
          ratio: string | null;
          /**
           * Region
           * @description 2-letter country code of a region.
           * @default null
           */
          region: string | null;
      }[] | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID tool input.
 */
type LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID_INPUT = {
  /**
   * Id
   * @description id for a specific curated list of podcasts. You can get the id from the response of `GET /search?type=curated` or `GET /curated_podcasts`.
   */
  id?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID tool output.
 */
type LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Description
       * @description This curated list's description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.
       * @default null
       */
      id: string | null;
      /**
       * Listennotes Url
       * @description The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).
       * @default null
       */
      listennotes_url: string | null;
      /**
       * Podcasts
       * @description Complete meta data of all podcasts in this curated list.
       * @default null
       */
      podcasts: {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Country
           * @description The country where this podcast is produced.
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Extra
           * @default null
           */
          extra: {
              /**
               * Amazon Music Url
               * @description Amazon Music url for this podcast
               * @default null
               */
              amazon_music_url: string | null;
              /**
               * Facebook Handle
               * @description Facebook username affiliated with this podcast
               * @default null
               */
              facebook_handle: string | null;
              /**
               * Instagram Handle
               * @description Instagram username affiliated with this podcast
               * @default null
               */
              instagram_handle: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn url affiliated with this podcast
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Patreon Handle
               * @description Patreon username affiliated with this podcast
               * @default null
               */
              patreon_handle: string | null;
              /**
               * Spotify Url
               * @description Spotify url for this podcast
               * @default null
               */
              spotify_url: string | null;
              /**
               * Twitter Handle
               * @description Twitter username affiliated with this podcast
               * @default null
               */
              twitter_handle: string | null;
              /**
               * Url1
               * @description Url affiliated with this podcast
               * @default null
               */
              url1: string | null;
              /**
               * Url2
               * @description Url affiliated with this podcast
               * @default null
               */
              url2: string | null;
              /**
               * Url3
               * @description Url affiliated with this podcast
               * @default null
               */
              url3: string | null;
              /**
               * Wechat Handle
               * @description WeChat username affiliated with this podcast
               * @default null
               */
              wechat_handle: string | null;
              /**
               * Youtube Url
               * @description YouTube url affiliated with this podcast
               * @default null
               */
              youtube_url: string | null;
          } | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Is Claimed
           * @description Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          is_claimed: boolean | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Language
           * @description The language of this podcast. You can get all supported languages from `GET /languages`.
           * @default null
           */
          language: string | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * LookingFor
           * @default null
           */
          looking_for: {
              /**
               * Cohosts
               * @description Whether this podcast is looking for cohosts.
               * @default null
               */
              cohosts: boolean | null;
              /**
               * Cross Promotion
               * @description Whether this podcast is looking for cross promotion opportunities with other podcasts.
               * @default null
               */
              cross_promotion: boolean | null;
              /**
               * Guests
               * @description Whether this podcast is looking for guests.
               * @default null
               */
              guests: boolean | null;
              /**
               * Sponsors
               * @description Whether this podcast is looking for sponsors.
               * @default null
               */
              sponsors: boolean | null;
          } | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Type
           * @description The type of this podcast - episodic or serial.
           * @default null
           * @enum {string|null}
           */
          type: "episodic" | "serial" | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
      }[] | null;
      /**
       * Pub Date Ms
       * @description Published date of this curated list. In milliseconds.
       * @default null
       */
      pub_date_ms: number | null;
      /**
       * Source Domain
       * @description The domain name of the source of this curated list.
       * @default null
       */
      source_domain: string | null;
      /**
       * Source Url
       * @description Url of the source of this curated list.
       * @default null
       */
      source_url: string | null;
      /**
       * Title
       * @description Curated list name.
       * @default null
       */
      title: string | null;
      /**
       * Total
       * @description The total number of podcasts in this curated list.
       * @default null
       */
      total: number | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE tool input.
 */
type LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE_INPUT = {
  /**
   * Genre Id
   * @description You can get the id from `GET /genres`. If not specified, it"ll be the overall best podcasts, which can be considered as a special genre.
   */
  genre_id?: string;
  /**
   * Language
   * @description Filter best podcasts by language. You can get a list of supported languages (e.g., English, Chinese, Japanese...) from `GET /languages`. If not specified, you"ll get "best podcasts" in any language.
   */
  language?: string;
  /**
   * Page
   * @description Page number of those podcasts in this genre.
   */
  page?: number;
  /**
   * Publisher Region
   * @description Filter best podcasts by the publisher"s country/region. This is to narrow down the results to include "best podcasts" produced in a specific country/region. You can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`. If not specified, you"ll get "best podcasts" produced in any country/region. If you want to get a country/region"s "best podcasts" that are also produced in that country/region, then you need to specify both **region** and **publisher_region**, e.g., `region=jp` and `publisher_region=jp`.
   */
  publisher_region?: string;
  /**
   * Region
   * @description Filter best podcasts by country/region. Please note that podcasts that are "best" in a country/region may not be produced in that country/region. For example, a podcast from the US may be very popular in Canada. You can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`. If not specified, you"ll get "best podcasts" in United States.
   * @default us
   */
  region: string;
  /**
   * Safe Mode
   * @description Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
   * @default 0
   */
  safe_mode: number;
  /**
   * Sort
   * @description How do you want to sort these podcasts? If you"d like to sort by popularity, please use **listen_score**.
   * @default recent_added_first
   * @enum {string}
   */
  sort: "listen_score" | "oldest_added_first" | "oldest_published_first" | "recent_added_first" | "recent_published_first";
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE tool output.
 */
type LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Has Next */
      has_next: boolean;
      /** Has Previous */
      has_previous: boolean;
      /**
       * Id
       * @description The id of this genre
       */
      id: number;
      /**
       * Listennotes Url
       * @description Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com).
       */
      listennotes_url: string;
      /**
       * Name
       * @description This genre's name.
       */
      name: string;
      /** Next Page Number */
      next_page_number: number;
      /** Page Number */
      page_number: number;
      /**
       * Parent Id
       * @description The id of parent genre.
       */
      parent_id: number;
      /** Podcasts */
      podcasts: {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Country
           * @description The country where this podcast is produced.
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Extra
           * @default null
           */
          extra: {
              /**
               * Amazon Music Url
               * @description Amazon Music url for this podcast
               * @default null
               */
              amazon_music_url: string | null;
              /**
               * Facebook Handle
               * @description Facebook username affiliated with this podcast
               * @default null
               */
              facebook_handle: string | null;
              /**
               * Instagram Handle
               * @description Instagram username affiliated with this podcast
               * @default null
               */
              instagram_handle: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn url affiliated with this podcast
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Patreon Handle
               * @description Patreon username affiliated with this podcast
               * @default null
               */
              patreon_handle: string | null;
              /**
               * Spotify Url
               * @description Spotify url for this podcast
               * @default null
               */
              spotify_url: string | null;
              /**
               * Twitter Handle
               * @description Twitter username affiliated with this podcast
               * @default null
               */
              twitter_handle: string | null;
              /**
               * Url1
               * @description Url affiliated with this podcast
               * @default null
               */
              url1: string | null;
              /**
               * Url2
               * @description Url affiliated with this podcast
               * @default null
               */
              url2: string | null;
              /**
               * Url3
               * @description Url affiliated with this podcast
               * @default null
               */
              url3: string | null;
              /**
               * Wechat Handle
               * @description WeChat username affiliated with this podcast
               * @default null
               */
              wechat_handle: string | null;
              /**
               * Youtube Url
               * @description YouTube url affiliated with this podcast
               * @default null
               */
              youtube_url: string | null;
          } | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Is Claimed
           * @description Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          is_claimed: boolean | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Language
           * @description The language of this podcast. You can get all supported languages from `GET /languages`.
           * @default null
           */
          language: string | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * LookingFor
           * @default null
           */
          looking_for: {
              /**
               * Cohosts
               * @description Whether this podcast is looking for cohosts.
               * @default null
               */
              cohosts: boolean | null;
              /**
               * Cross Promotion
               * @description Whether this podcast is looking for cross promotion opportunities with other podcasts.
               * @default null
               */
              cross_promotion: boolean | null;
              /**
               * Guests
               * @description Whether this podcast is looking for guests.
               * @default null
               */
              guests: boolean | null;
              /**
               * Sponsors
               * @description Whether this podcast is looking for sponsors.
               * @default null
               */
              sponsors: boolean | null;
          } | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Type
           * @description The type of this podcast - episodic or serial.
           * @default null
           * @enum {string|null}
           */
          type: "episodic" | "serial" | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
      }[];
      /** Previous Page Number */
      previous_page_number: number;
      /** Total */
      total: number;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES tool input.
 */
type LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES_INPUT = {
  /**
   * Top Level Only
   * @description Just show top level genres? If 1, yes, just show top level genres. If 0, no, show all genres.
   * @default 0
   */
  top_level_only: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES tool output.
 */
type LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Genres */
      genres: {
          /**
           * Id
           * @description Genre id
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Genre name.
           * @default null
           */
          name: string | null;
          /**
           * Parent Id
           * @description Parent genre id.
           * @default null
           */
          parent_id: number | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS tool input.
 */
type LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS_INPUT = {
  /**
   * Page
   * @description Page number of playlists.
   * @default 1
   */
  page: number;
  /**
   * Sort
   * @description How do you want to sort playlists?
   * @default recent_added_first
   * @enum {string}
   */
  sort: "name_a_to_z" | "name_z_to_a" | "oldest_added_first" | "recent_added_first";
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS tool output.
 */
type LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Has Next
       * @default null
       */
      has_next: boolean | null;
      /**
       * Has Previous
       * @default null
       */
      has_previous: boolean | null;
      /**
       * Next Page Number
       * @default null
       */
      next_page_number: number | null;
      /**
       * Page Number
       * @default null
       */
      page_number: number | null;
      /**
       * Playlists
       * @default null
       */
      playlists: {
          /**
           * Description
           * @description Playlist description.
           * @default null
           */
          description: string | null;
          /**
           * Episode Count
           * @description The number of episodes (including custom audio) in this playlist.
           * @default null
           */
          episode_count: number | null;
          /**
           * Id
           * @description A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description High resolution image url of the playlist.
           * @default null
           */
          image: string | null;
          /**
           * Last Timestamp Ms
           * @description Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.
           *
           * @default null
           */
          last_timestamp_ms: number | null;
          /**
           * Listennotes Url
           * @description The url of this playlist on ListenNotes.com.
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Name
           * @description Playlist name.
           * @default null
           */
          name: string | null;
          /**
           * Podcast Count
           * @description The number of podcasts in this playlist.
           * @default null
           */
          podcast_count: number | null;
          /**
           * Thumbnail
           * @description Low resolution image url of the playlist.
           * @default null
           */
          thumbnail: string | null;
          /**
           * Total Audio Length Sec
           * @description Total audio length of all episodes in this playlist, in seconds.
           * @default null
           */
          total_audio_length_sec: number | null;
          /**
           * Visibility
           * @description Visibility of this playlist.
           * @default null
           * @enum {string|null}
           */
          visibility: "public" | "unlisted" | "private" | null;
      }[] | null;
      /**
       * Previous Page Number
       * @default null
       */
      previous_page_number: number | null;
      /**
       * Total
       * @default null
       */
      total: number | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE tool input.
 */
type LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE_INPUT = object;

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE tool output.
 */
type LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Audio
       * @description Audio url of this episode, which can be played directly.
       * @default null
       */
      audio: string | null;
      /**
       * Audio Length Sec
       * @description Audio length of this episode. In seconds.
       * @default null
       */
      audio_length_sec: number | null;
      /**
       * Description
       * @description Html of this episode's full description
       * @default null
       */
      description: string | null;
      /**
       * Explicit Content
       * @description Whether this podcast contains explicit language.
       * @default null
       */
      explicit_content: boolean | null;
      /**
       * Id
       * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
       * @default null
       */
      id: string | null;
      /**
       * Image
       * @description Image url for this episode.
       *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
       *     If you are using PRO/ENTERPRISE plan, then it's
       *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
       *     low resolution image (300x300).
       *
       * @default null
       */
      image: string | null;
      /**
       * Link
       * @description Web link of this episode.
       * @default null
       */
      link: string | null;
      /**
       * Listennotes Edit Url
       * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
       * @default null
       */
      listennotes_edit_url: string | null;
      /**
       * Listennotes Url
       * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
       * @default null
       */
      listennotes_url: string | null;
      /**
       * Maybe Audio Invalid
       * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
       * @default null
       */
      maybe_audio_invalid: boolean | null;
      /**
       * Podcast
       * @default null
       */
      podcast: {
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
      } | null;
      /**
       * Pub Date Ms
       * @description Published date for this episode. In millisecond.
       * @default null
       */
      pub_date_ms: number | null;
      /**
       * Thumbnail
       * @description Thumbnail image (300x300) url for this episode.
       *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
       *
       * @default null
       */
      thumbnail: string | null;
      /**
       * Title
       * @description Episode name.
       * @default null
       */
      title: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS tool input.
 */
type LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS_INPUT = {
  /**
   * Page
   * @description Page number of curated lists.
   * @default 1
   */
  page: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS tool output.
 */
type LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Curated Lists */
      curated_lists: {
          /**
           * Description
           * @description This curated list's description.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Listennotes Url
           * @description The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Podcasts
           * @description Minimum meta data of up to 5 podcasts in this curated list.
           * @default null
           */
          podcasts: {
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher
               * @description Podcast publisher name.
               * @default null
               */
              publisher: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title
               * @description Podcast name.
               * @default null
               */
              title: string | null;
          }[] | null;
          /**
           * Pub Date Ms
           * @description Published date of this curated list. In milliseconds.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Source Domain
           * @description The domain name of the source of this curated list.
           * @default null
           */
          source_domain: string | null;
          /**
           * Source Url
           * @description Url of the source of this curated list.
           * @default null
           */
          source_url: string | null;
          /**
           * Title
           * @description Curated list name.
           * @default null
           */
          title: string | null;
          /**
           * Total
           * @description The total number of podcasts in this curated list.
           * @default null
           */
          total: number | null;
      }[];
      /** Has Next */
      has_next: boolean;
      /** Has Previous */
      has_previous: boolean;
      /** Next Page Number */
      next_page_number: number;
      /** Page Number */
      page_number: number;
      /** Previous Page Number */
      previous_page_number: number;
      /** Total */
      total: number;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID tool input.
 */
type LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID_INPUT = {
  /**
   * Id
   * @description id for a specific episode. You can get episode id from using other endpoints, e.g., `GET /search`...
   */
  id?: string;
  /**
   * Show Transcript
   * @description To include the transcript of this episode or not? If it is 1, then include the transcript in the **transcript** field. The default value is 0 - we don"t include transcript by default, because 1) it would make the response data very big, thus slow response time; 2) less than 1% of episodes have transcripts. The transcript field is available only in the PRO/ENTERPRISE plan.
   * @default 0
   */
  show_transcript: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID tool output.
 */
type LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Audio
       * @description Audio url of this episode, which can be played directly.
       * @default null
       */
      audio: string | null;
      /**
       * Audio Length Sec
       * @description Audio length of this episode. In seconds.
       * @default null
       */
      audio_length_sec: number | null;
      /**
       * Description
       * @description Html of this episode's full description
       * @default null
       */
      description: string | null;
      /**
       * Explicit Content
       * @description Whether this podcast contains explicit language.
       * @default null
       */
      explicit_content: boolean | null;
      /**
       * Id
       * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
       * @default null
       */
      id: string | null;
      /**
       * Image
       * @description Image url for this episode.
       *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
       *     If you are using PRO/ENTERPRISE plan, then it's
       *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
       *     low resolution image (300x300).
       *
       * @default null
       */
      image: string | null;
      /**
       * Link
       * @description Web link of this episode.
       * @default null
       */
      link: string | null;
      /**
       * Listennotes Edit Url
       * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
       * @default null
       */
      listennotes_edit_url: string | null;
      /**
       * Listennotes Url
       * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
       * @default null
       */
      listennotes_url: string | null;
      /**
       * Maybe Audio Invalid
       * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
       * @default null
       */
      maybe_audio_invalid: boolean | null;
      /**
       * Podcast
       * @default null
       */
      podcast: {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Country
           * @description The country where this podcast is produced.
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Extra
           * @default null
           */
          extra: {
              /**
               * Amazon Music Url
               * @description Amazon Music url for this podcast
               * @default null
               */
              amazon_music_url: string | null;
              /**
               * Facebook Handle
               * @description Facebook username affiliated with this podcast
               * @default null
               */
              facebook_handle: string | null;
              /**
               * Instagram Handle
               * @description Instagram username affiliated with this podcast
               * @default null
               */
              instagram_handle: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn url affiliated with this podcast
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Patreon Handle
               * @description Patreon username affiliated with this podcast
               * @default null
               */
              patreon_handle: string | null;
              /**
               * Spotify Url
               * @description Spotify url for this podcast
               * @default null
               */
              spotify_url: string | null;
              /**
               * Twitter Handle
               * @description Twitter username affiliated with this podcast
               * @default null
               */
              twitter_handle: string | null;
              /**
               * Url1
               * @description Url affiliated with this podcast
               * @default null
               */
              url1: string | null;
              /**
               * Url2
               * @description Url affiliated with this podcast
               * @default null
               */
              url2: string | null;
              /**
               * Url3
               * @description Url affiliated with this podcast
               * @default null
               */
              url3: string | null;
              /**
               * Wechat Handle
               * @description WeChat username affiliated with this podcast
               * @default null
               */
              wechat_handle: string | null;
              /**
               * Youtube Url
               * @description YouTube url affiliated with this podcast
               * @default null
               */
              youtube_url: string | null;
          } | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Is Claimed
           * @description Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          is_claimed: boolean | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Language
           * @description The language of this podcast. You can get all supported languages from `GET /languages`.
           * @default null
           */
          language: string | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * LookingFor
           * @default null
           */
          looking_for: {
              /**
               * Cohosts
               * @description Whether this podcast is looking for cohosts.
               * @default null
               */
              cohosts: boolean | null;
              /**
               * Cross Promotion
               * @description Whether this podcast is looking for cross promotion opportunities with other podcasts.
               * @default null
               */
              cross_promotion: boolean | null;
              /**
               * Guests
               * @description Whether this podcast is looking for guests.
               * @default null
               */
              guests: boolean | null;
              /**
               * Sponsors
               * @description Whether this podcast is looking for sponsors.
               * @default null
               */
              sponsors: boolean | null;
          } | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Type
           * @description The type of this podcast - episodic or serial.
           * @default null
           * @enum {string|null}
           */
          type: "episodic" | "serial" | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
      } | null;
      /**
       * Pub Date Ms
       * @description Published date for this episode. In millisecond.
       * @default null
       */
      pub_date_ms: number | null;
      /**
       * Thumbnail
       * @description Thumbnail image (300x300) url for this episode.
       *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
       *
       * @default null
       */
      thumbnail: string | null;
      /**
       * Title
       * @description Episode name.
       * @default null
       */
      title: string | null;
      /**
       * Transcript
       * @description The transcript of this episode, in plain text (with the newline character \n). If there's not transcript, it is null. This field is available only in the PRO/ENTERPRISE plan.
       * @default null
       */
      transcript: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME tool input.
 */
type LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME_INPUT = {
  /**
   * Domain Name
   * @description A publisher"s domain name, e.g., nytimes.com, wondery.com, npr.org...
   */
  domain_name?: string;
  /**
   * Page
   * @description Page number of the podcasts from this domain name
   * @default 1
   */
  page: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME tool output.
 */
type LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Has Next
       * @default null
       */
      has_next: boolean | null;
      /**
       * Has Previous
       * @default null
       */
      has_previous: boolean | null;
      /**
       * Next Page Number
       * @default null
       */
      next_page_number: number | null;
      /**
       * Page Number
       * @default null
       */
      page_number: number | null;
      /**
       * Podcasts
       * @default null
       */
      podcasts: {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Country
           * @description The country where this podcast is produced.
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Extra
           * @default null
           */
          extra: {
              /**
               * Amazon Music Url
               * @description Amazon Music url for this podcast
               * @default null
               */
              amazon_music_url: string | null;
              /**
               * Facebook Handle
               * @description Facebook username affiliated with this podcast
               * @default null
               */
              facebook_handle: string | null;
              /**
               * Instagram Handle
               * @description Instagram username affiliated with this podcast
               * @default null
               */
              instagram_handle: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn url affiliated with this podcast
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Patreon Handle
               * @description Patreon username affiliated with this podcast
               * @default null
               */
              patreon_handle: string | null;
              /**
               * Spotify Url
               * @description Spotify url for this podcast
               * @default null
               */
              spotify_url: string | null;
              /**
               * Twitter Handle
               * @description Twitter username affiliated with this podcast
               * @default null
               */
              twitter_handle: string | null;
              /**
               * Url1
               * @description Url affiliated with this podcast
               * @default null
               */
              url1: string | null;
              /**
               * Url2
               * @description Url affiliated with this podcast
               * @default null
               */
              url2: string | null;
              /**
               * Url3
               * @description Url affiliated with this podcast
               * @default null
               */
              url3: string | null;
              /**
               * Wechat Handle
               * @description WeChat username affiliated with this podcast
               * @default null
               */
              wechat_handle: string | null;
              /**
               * Youtube Url
               * @description YouTube url affiliated with this podcast
               * @default null
               */
              youtube_url: string | null;
          } | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Is Claimed
           * @description Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          is_claimed: boolean | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Language
           * @description The language of this podcast. You can get all supported languages from `GET /languages`.
           * @default null
           */
          language: string | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * LookingFor
           * @default null
           */
          looking_for: {
              /**
               * Cohosts
               * @description Whether this podcast is looking for cohosts.
               * @default null
               */
              cohosts: boolean | null;
              /**
               * Cross Promotion
               * @description Whether this podcast is looking for cross promotion opportunities with other podcasts.
               * @default null
               */
              cross_promotion: boolean | null;
              /**
               * Guests
               * @description Whether this podcast is looking for guests.
               * @default null
               */
              guests: boolean | null;
              /**
               * Sponsors
               * @description Whether this podcast is looking for sponsors.
               * @default null
               */
              sponsors: boolean | null;
          } | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Type
           * @description The type of this podcast - episodic or serial.
           * @default null
           * @enum {string|null}
           */
          type: "episodic" | "serial" | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
      }[] | null;
      /**
       * Previous Page Number
       * @default null
       */
      previous_page_number: number | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID tool input.
 */
type LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID_INPUT = {
  /**
   * Id
   * @description Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...
   */
  id?: string;
  /**
   * Next Episode Pub Date
   * @description For episodes pagination. It"s the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes or oldest 10 episodes, depending on the value of the **sort** parameter.
   */
  next_episode_pub_date?: number;
  /**
   * Sort
   * @description How do you want to sort the episodes of this podcast?
   * @default recent_first
   * @enum {string}
   */
  sort: "oldest_first" | "recent_first";
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID tool output.
 */
type LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Country
       * @description The country of this podcast.
       * @default null
       */
      country: string | null;
      /**
       * Description
       * @description Html for this podcast's description. It's usually a long string.
       * @default null
       */
      description: string | null;
      /**
       * Earliest Pub Date Ms
       * @description Earliest published date of an episode in this podcast. In millisecond.
       * @default null
       */
      earliest_pub_date_ms: number | null;
      /**
       * Episodes
       * @description A list of episodes of this podcast, sorted by **pub_date_ms**.
       * @default null
       */
      episodes: {
          /**
           * Audio
           * @description Audio url of this episode, which can be played directly.
           * @default null
           */
          audio: string | null;
          /**
           * Audio Length Sec
           * @description Audio length of this episode. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description
           * @description Html for this episode's show notes. It's usually a long string.
           * @default null
           */
          description: string | null;
          /**
           * Explicit Content
           * @description Whether this episode contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Episode id.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Link
           * @description Web link of this episode.
           * @default null
           */
          link: string | null;
          /**
           * Listennotes Edit Url
           * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
           * @default null
           */
          listennotes_edit_url: string | null;
          /**
           * Listennotes Url
           * @description Listen Notes url for this episode.
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Maybe Audio Invalid
           * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
           * @default null
           */
          maybe_audio_invalid: boolean | null;
          /**
           * Pub Date Ms
           * @description Published date for this episode. In millisecond.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Episode title.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Explicit Content
       * @description Whether this podcast contains explicit language.
       * @default null
       */
      explicit_content: boolean | null;
      /**
       * Extra
       * @default null
       */
      extra: {
          /**
           * Facebook Handle
           * @description Facebook handle of this podcast.
           * @default null
           */
          facebook_handle: string | null;
          /**
           * Google Url
           * @description Google Podcasts url for this podcast.
           * @default null
           */
          google_url: string | null;
          /**
           * Instagram Handle
           * @description Instagram handle of this podcast.
           * @default null
           */
          instagram_handle: string | null;
          /**
           * Linkedin Url
           * @description LinkedIn url for this podcast.
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Patreon Handle
           * @description Patreon handle of this podcast, e.g., creators.
           * @default null
           */
          patreon_handle: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This is a redirect url that always points to the current rss url. If a podcast moves to a new rss url, we will update this redirect url to the new one.
           * @default null
           */
          rss: string | null;
          /**
           * Twitter Handle
           * @description Twitter handle of this podcast.
           * @default null
           */
          twitter_handle: string | null;
          /**
           * Url1
           * @description Link to this podcast on a 3rd party website, e.g., Spotify, Apple Podcasts...
           * @default null
           */
          url1: string | null;
          /**
           * Url2
           * @description Link to this podcast on a 3rd party website, e.g., Spotify, Apple Podcasts...
           * @default null
           */
          url2: string | null;
          /**
           * Url3
           * @description Link to this podcast on a 3rd party website, e.g., Spotify, Apple Podcasts...
           * @default null
           */
          url3: string | null;
          /**
           * Wechat Handle
           * @description WeChat handle of this podcast.
           * @default null
           */
          wechat_handle: string | null;
          /**
           * Youtube Url
           * @description YouTube url for this podcast, if it's a YouTube podcast.
           * @default null
           */
          youtube_url: string | null;
      } | null;
      /**
       * Genre Ids
       * @default null
       */
      genre_ids: number[] | null;
      /**
       * Has Guest Interviews
       * @description Whether this podcast has guest interviews.
       * @default null
       */
      has_guest_interviews: boolean | null;
      /**
       * Has Sponsors
       * @description Whether this podcast has sponsors.
       * @default null
       */
      has_sponsors: boolean | null;
      /**
       * Id
       * @description Podcast id. You can use this id to query other endpoints, e.g., `GET /podcasts/{id}`.
       * @default null
       */
      id: string | null;
      /**
       * Image
       * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
       *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
       *     low resolution image (300x300).
       *
       * @default null
       */
      image: string | null;
      /**
       * Is Claimed
       * @description Whether this podcast is claimed by its podcaster.
       * @default null
       */
      is_claimed: boolean | null;
      /**
       * Itunes Id
       * @description iTunes id for this podcast.
       * @default null
       */
      itunes_id: number | null;
      /**
       * Language
       * @description The language of this podcast.
       * @default null
       */
      language: string | null;
      /**
       * Latest Episode Id
       * @description The id of the latest episode of this podcast. It's a 32-character string. You can use this id to query `GET /episodes/{id}`.
       * @default null
       */
      latest_episode_id: string | null;
      /**
       * Latest Pub Date Ms
       * @description Latest published date of an episode in this podcast. In millisecond.
       * @default null
       */
      latest_pub_date_ms: number | null;
      /**
       * Listen Score
       * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
       *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
       *
       * @default null
       */
      listen_score: number | null;
      /**
       * Listen Score Global Rank
       * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
       *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
       *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
       *
       * @default null
       */
      listen_score_global_rank: string | null;
      /**
       * Listennotes Url
       * @description Listen Notes url for this podcast.
       * @default null
       */
      listennotes_url: string | null;
      /**
       * LookingFor
       * @default null
       */
      looking_for: {
          /**
           * Cohosts
           * @description Whether this podcast is looking for cohosts.
           * @default null
           */
          cohosts: boolean | null;
          /**
           * Cross Promotion
           * @description Whether this podcast is looking for cross promotion opportunities.
           * @default null
           */
          cross_promotion: boolean | null;
          /**
           * Guests
           * @description Whether this podcast is looking for guests.
           * @default null
           */
          guests: boolean | null;
          /**
           * Sponsors
           * @description Whether this podcast is looking for sponsors.
           * @default null
           */
          sponsors: boolean | null;
      } | null;
      /**
       * Next Episode Pub Date
       * @description Passed to the **next_episode_pub_date** parameter of `GET /podcasts/{id}` to paginate through episodes of that podcast.
       * @default null
       */
      next_episode_pub_date: number | null;
      /**
       * Publisher
       * @description Podcast publisher name.
       * @default null
       */
      publisher: string | null;
      /**
       * Rss
       * @description RSS url of this podcast. This is a redirect url that always points to the current rss url. If a podcast moves to a new rss url, we will update this redirect url to the new one.
       * @default null
       */
      rss: string | null;
      /**
       * Thumbnail
       * @description Thumbnail image url for this podcast's artwork (300x300).
       * @default null
       */
      thumbnail: string | null;
      /**
       * Title
       * @description Podcast title.
       * @default null
       */
      title: string | null;
      /**
       * Total Episodes
       * @description Total number of episodes in this podcast.
       * @default null
       */
      total_episodes: number | null;
      /**
       * Website
       * @description The website of this podcast.
       * @default null
       */
      website: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_PODCAST_LANGUAGES tool input.
 */
type LISTENNOTES_FETCH_PODCAST_LANGUAGES_INPUT = object;

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_PODCAST_LANGUAGES tool output.
 */
type LISTENNOTES_FETCH_PODCAST_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Languages */
      languages: string[];
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE tool input.
 */
type LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE_INPUT = {
  /**
   * Id
   * @description Episode id.
   */
  id?: string;
  /**
   * Safe Mode
   * @description Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
   * @default 0
   */
  safe_mode: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE tool output.
 */
type LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Recommendations */
      recommendations: {
          /**
           * Audio
           * @description Audio url of this episode, which can be played directly.
           * @default null
           */
          audio: string | null;
          /**
           * Audio Length Sec
           * @description Audio length of this episode. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
           *     If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Link
           * @description Web link of this episode.
           * @default null
           */
          link: string | null;
          /**
           * Listennotes Edit Url
           * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
           * @default null
           */
          listennotes_edit_url: string | null;
          /**
           * Listennotes Url
           * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Maybe Audio Invalid
           * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
           * @default null
           */
          maybe_audio_invalid: boolean | null;
          /**
           * Podcast
           * @default null
           */
          podcast: {
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher
               * @description Podcast publisher name.
               * @default null
               */
              publisher: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title
               * @description Podcast name.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Pub Date Ms
           * @description Published date for this episode. In millisecond.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Thumbnail
           * @description Thumbnail image (300x300) url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
           *
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Episode name.
           * @default null
           */
          title: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST tool input.
 */
type LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST_INPUT = {
  /**
   * Id
   * @description Podcast id.
   */
  id?: string;
  /**
   * Safe Mode
   * @description Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
   * @default 0
   */
  safe_mode: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST tool output.
 */
type LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Recommendations */
      recommendations: {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Country
           * @description The country where this podcast is produced.
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Html of this episode's full description
           * @default null
           */
          description: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Extra
           * @default null
           */
          extra: {
              /**
               * Amazon Music Url
               * @description Amazon Music url for this podcast
               * @default null
               */
              amazon_music_url: string | null;
              /**
               * Facebook Handle
               * @description Facebook username affiliated with this podcast
               * @default null
               */
              facebook_handle: string | null;
              /**
               * Instagram Handle
               * @description Instagram username affiliated with this podcast
               * @default null
               */
              instagram_handle: string | null;
              /**
               * Linkedin Url
               * @description LinkedIn url affiliated with this podcast
               * @default null
               */
              linkedin_url: string | null;
              /**
               * Patreon Handle
               * @description Patreon username affiliated with this podcast
               * @default null
               */
              patreon_handle: string | null;
              /**
               * Spotify Url
               * @description Spotify url for this podcast
               * @default null
               */
              spotify_url: string | null;
              /**
               * Twitter Handle
               * @description Twitter username affiliated with this podcast
               * @default null
               */
              twitter_handle: string | null;
              /**
               * Url1
               * @description Url affiliated with this podcast
               * @default null
               */
              url1: string | null;
              /**
               * Url2
               * @description Url affiliated with this podcast
               * @default null
               */
              url2: string | null;
              /**
               * Url3
               * @description Url affiliated with this podcast
               * @default null
               */
              url3: string | null;
              /**
               * Wechat Handle
               * @description WeChat username affiliated with this podcast
               * @default null
               */
              wechat_handle: string | null;
              /**
               * Youtube Url
               * @description YouTube url affiliated with this podcast
               * @default null
               */
              youtube_url: string | null;
          } | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Is Claimed
           * @description Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          is_claimed: boolean | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Language
           * @description The language of this podcast. You can get all supported languages from `GET /languages`.
           * @default null
           */
          language: string | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * LookingFor
           * @default null
           */
          looking_for: {
              /**
               * Cohosts
               * @description Whether this podcast is looking for cohosts.
               * @default null
               */
              cohosts: boolean | null;
              /**
               * Cross Promotion
               * @description Whether this podcast is looking for cross promotion opportunities with other podcasts.
               * @default null
               */
              cross_promotion: boolean | null;
              /**
               * Guests
               * @description Whether this podcast is looking for guests.
               * @default null
               */
              guests: boolean | null;
              /**
               * Sponsors
               * @description Whether this podcast is looking for sponsors.
               * @default null
               */
              sponsors: boolean | null;
          } | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Type
           * @description The type of this podcast - episodic or serial.
           * @default null
           * @enum {string|null}
           */
          type: "episodic" | "serial" | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_RELATED_SEARCH_TERMS tool input.
 */
type LISTENNOTES_FETCH_RELATED_SEARCH_TERMS_INPUT = {
  /**
   * Q
   * @description Search term, e.g., person, place, topic...
   */
  q?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_RELATED_SEARCH_TERMS tool output.
 */
type LISTENNOTES_FETCH_RELATED_SEARCH_TERMS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Terms
       * @description Related search terms
       */
      terms: string[];
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_SUPPORTED_REGIONS tool input.
 */
type LISTENNOTES_FETCH_SUPPORTED_REGIONS_INPUT = object;

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_SUPPORTED_REGIONS tool output.
 */
type LISTENNOTES_FETCH_SUPPORTED_REGIONS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Regions */
      regions: {
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
 * Type of LISTENNOTES's LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS tool input.
 */
type LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS_INPUT = object;

/**
 * Type of LISTENNOTES's LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS tool output.
 */
type LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Terms
       * @description Trending search terms
       */
      terms: string[];
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
 * Type of LISTENNOTES's LISTENNOTES_FIND_EPISODES_BY_TITLE tool input.
 */
type LISTENNOTES_FIND_EPISODES_BY_TITLE_INPUT = {
  /**
   * Podcast Id
   * @description Refine search results by specifying a podcast through its unique ID. The format of the podcast ID is governed by the podcast_id_type parameter.  For listennotes_id, the podcast ID will look like "cda18f20f1be4ac7b3cce7d0eb168fff".  For itunes_id, it will be a numerical value like "983795625".  For spotify_id, expect a format like "0Z1234tGXD2hVhjFrrhJ7g".  For rss, the podcast ID will be the RSS URL, e.g., "https://cowenconvos.libsyn.com/rss".
   */
  podcast_id?: string;
  /**
   * Podcast Id Type
   * @description The type of podcast id. Valid values are **listennotes_id**, **itunes_id**, **spotify_id**, and **rss**. Note: **itunes_id** is for Apple Podcasts.
   * @default listennotes_id
   * @enum {string}
   */
  podcast_id_type: "itunes_id" | "listennotes_id" | "rss" | "spotify_id";
  /**
   * Q
   * @description An episode"s title, e.g., Jerusalem Demsas on The Dispossessed. You can use double quotes to do verbatim match, e.g., "Jerusalem Demsas on The Dispossessed". Otherwise, it"s fuzzy search.
   */
  q?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FIND_EPISODES_BY_TITLE tool output.
 */
type LISTENNOTES_FIND_EPISODES_BY_TITLE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Count
       * @description The number of search results in this page.
       * @default null
       */
      count: number | null;
      /**
       * Next Offset
       * @description Pass this value to the **offset** parameter to do pagination of search results.
       * @default null
       */
      next_offset: number | null;
      /**
       * Results
       * @description A list of search results.
       * @default null
       */
      results: {
          /**
           * Audio
           * @description Audio url of this episode, which can be played directly.
           * @default null
           */
          audio: string | null;
          /**
           * Audio Length Sec
           * @description Audio length of this episode. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description Highlighted
           * @description Highlighted segment of this episode's description
           * @default null
           */
          description_highlighted: string | null;
          /**
           * Description Original
           * @description Plain text of this episode's description
           * @default null
           */
          description_original: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
           *     If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Link
           * @description Web link of this episode.
           * @default null
           */
          link: string | null;
          /**
           * Listennotes Url
           * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Podcast
           * @description The podcast that this episode belongs to.
           * @default null
           */
          podcast: {
              /**
               * Genre Ids
               * @default null
               */
              genre_ids: number[] | null;
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher Highlighted
               * @description Highlighted segment of this podcast's publisher name.
               * @default null
               */
              publisher_highlighted: string | null;
              /**
               * Publisher Original
               * @description Plain text of this podcast's publisher name.
               * @default null
               */
              publisher_original: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title Highlighted
               * @description Highlighted segment of podcast name.
               * @default null
               */
              title_highlighted: string | null;
              /**
               * Title Original
               * @description Plain text of podcast name.
               * @default null
               */
              title_original: string | null;
          } | null;
          /**
           * Pub Date Ms
           * @description Published date for this episode. In millisecond.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image (300x300) url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
           *
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title Highlighted
           * @description Highlighted segment of this episode's title
           * @default null
           */
          title_highlighted: string | null;
          /**
           * Title Original
           * @description Plain text of this episode' title
           * @default null
           */
          title_original: string | null;
          /**
           * Transcripts Highlighted
           * @description Up to 2 highlighted segments of the audio transcript of this episode.
           * @default null
           */
          transcripts_highlighted: string[] | null;
      }[] | null;
      /**
       * Took
       * @description The time it took to fetch these search results. In seconds.
       * @default null
       */
      took: number | null;
      /**
       * Total
       * @description The total number of search results.
       * @default null
       */
      total: number | null;
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
 * Type of LISTENNOTES's LISTENNOTES_FULL_TEXT_SEARCH tool input.
 */
type LISTENNOTES_FULL_TEXT_SEARCH_INPUT = {
  /**
   * Episode Count Max
   * @description Maximum number of episodes. Applicable only when type parameter is **podcast**.
   */
  episode_count_max?: number;
  /**
   * Episode Count Min
   * @description Minimum number of episodes. Applicable only when type parameter is **podcast**.
   */
  episode_count_min?: number;
  /**
   * Genre Ids
   * @description A comma-delimited string of a list of genre ids. If not specified, then all genres are included. You can find the id and the name of all genres from `GET /genres`. It works only when **type** is *episode* or *podcast*.
   */
  genre_ids?: string;
  /**
   * Interviews Only
   * @description Whether or not to keep only podcasts that have guest interviews in search results. 1 is yes and 0 is no. It works only when **type** is *podcast*.  This parameter is available only in the PRO/ENTERPRISE plan.
   * @default 0
   */
  interviews_only: number;
  /**
   * Language
   * @description Limit search results to a specific language. If not specified, it"ll be any language. You can get a list of supported languages from `GET /languages`. It works only when **type** is *episode* or *podcast*.
   */
  language?: string;
  /**
   * Len Max
   * @description Maximum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**. If **type** parameter is **episode**, it"s for audio length of an episode. If **type** parameter is **podcast**, it"s for average audio length of all episodes in a podcast.
   */
  len_max?: number;
  /**
   * Len Min
   * @description Minimum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**. If **type** parameter is **episode**, it"s for audio length of an episode. If **type** parameter is **podcast**, it"s for average audio length of all episodes in a podcast.
   * @default 0
   */
  len_min: number;
  /**
   * Ncid
   * @description A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to exclude search results of a few specific podcasts. It works only when **type** is *episode*.
   */
  ncid?: string;
  /**
   * Ocid
   * @description A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to limit search results from only a few specific podcasts. It works only when **type** is *episode*.
   */
  ocid?: string;
  /**
   * Offset
   * @description Offset for search results, for pagination. You"ll use **next_offset** from response for this parameter.
   * @default 0
   */
  offset: number;
  /**
   * Only In
   * @description A comma-delimited string to search only in specific fields. Allowed values are title, description, author, and audio. If not specified, then search every fields.
   * @default title,description,author,audio
   */
  only_in: string;
  /**
   * Page Size
   * @description The maximum number of search results per page. A valid value should be an integer between 1 and 10 (inclusive).
   * @default 10
   */
  page_size: number;
  /**
   * Published After
   * @description Only show episodes/podcasts/curated lists published after this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.
   * @default 0
   */
  published_after: number;
  /**
   * Published Before
   * @description Only show episodes/podcasts/curated lists published before this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.
   */
  published_before?: number;
  /**
   * Q
   * @description Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it"s fuzzy search.
   */
  q?: string;
  /**
   * Region
   * @description Limit search results to a specific region (e.g., us, gb, in...). If not specified, it"ll be any region. You can get the supported country codes from `GET /regions`. It works only when **type** is *episode* or *podcast*.
   */
  region?: string;
  /**
   * Safe Mode
   * @description Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **type** is *episode* or *podcast*.
   * @default 0
   */
  safe_mode: number;
  /**
   * Sort By Date
   * @description Sort by date or not? If 0, then sort by relevance. If 1, then sort by date.
   * @default 0
   */
  sort_by_date: number;
  /**
   * Sponsored Only
   * @description Whether or not to keep only podcasts that have sponsors in search results. 1 is yes and 0 is no. It works only when **type** is *podcast*. This parameter is available only in the PRO/ENTERPRISE plan.
   * @default 0
   */
  sponsored_only: number;
  /**
   * Type
   * @description What type of contents do you want to search for?
   * @default episode
   * @enum {string}
   */
  type: "curated" | "episode" | "podcast";
  /**
   * Unique Podcasts
   * @description Whether or not to keep only one episode per podcast in search results. 1 is yes and 0 is no. It works only when **type** is *episode*.
   * @default 0
   */
  unique_podcasts: number;
  /**
   * Update Freq Max
   * @description Maximum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.
   */
  update_freq_max?: number;
  /**
   * Update Freq Min
   * @description Minimum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.
   */
  update_freq_min?: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_FULL_TEXT_SEARCH tool output.
 */
type LISTENNOTES_FULL_TEXT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Count
       * @description The number of search results in this page.
       * @default null
       */
      count: number | null;
      /**
       * Next Offset
       * @description Pass this value to the **offset** parameter to do pagination of search results.
       * @default null
       */
      next_offset: number | null;
      /**
       * Results
       * @description A list of search results.
       * @default null
       */
      results: ({
          /**
           * Audio
           * @description Audio url of this episode, which can be played directly.
           * @default null
           */
          audio: string | null;
          /**
           * Audio Length Sec
           * @description Audio length of this episode. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description Highlighted
           * @description Highlighted segment of this episode's description
           * @default null
           */
          description_highlighted: string | null;
          /**
           * Description Original
           * @description Plain text of this episode's description
           * @default null
           */
          description_original: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
           *     If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Link
           * @description Web link of this episode.
           * @default null
           */
          link: string | null;
          /**
           * Listennotes Url
           * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * @description The podcast that this episode belongs to.
           * @default null
           */
          podcast: {
              /**
               * Genre Ids
               * @default null
               */
              genre_ids: number[] | null;
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher Highlighted
               * @description Highlighted segment of this podcast's publisher name.
               * @default null
               */
              publisher_highlighted: string | null;
              /**
               * Publisher Original
               * @description Plain text of this podcast's publisher name.
               * @default null
               */
              publisher_original: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title Highlighted
               * @description Highlighted segment of podcast name.
               * @default null
               */
              title_highlighted: string | null;
              /**
               * Title Original
               * @description Plain text of podcast name.
               * @default null
               */
              title_original: string | null;
          } | null;
          /**
           * Pub Date Ms
           * @description Published date for this episode. In millisecond.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image (300x300) url for this episode.
           *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
           *
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title Highlighted
           * @description Highlighted segment of this episode's title
           * @default null
           */
          title_highlighted: string | null;
          /**
           * Title Original
           * @description Plain text of this episode' title
           * @default null
           */
          title_original: string | null;
          /**
           * Transcripts Highlighted
           * @description Up to 2 highlighted segments of the audio transcript of this episode.
           * @default null
           */
          transcripts_highlighted: string[] | null;
      } | {
          /**
           * Audio Length Sec
           * @description Average audio length of all episodes of this podcast. In seconds.
           * @default null
           */
          audio_length_sec: number | null;
          /**
           * Description Highlighted
           * @description Highlighted segment of podcast description
           * @default null
           */
          description_highlighted: string | null;
          /**
           * Description Original
           * @description Plain text of podcast description
           * @default null
           */
          description_original: string | null;
          /**
           * Earliest Pub Date Ms
           * @description The published date of the oldest episode of this podcast. In milliseconds
           * @default null
           */
          earliest_pub_date_ms: number | null;
          /**
           * Email
           * @description The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          email: string | null;
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Genre Ids
           * @default null
           */
          genre_ids: number[] | null;
          /**
           * Has Guest Interviews
           * @description Whether this podcast has guest interviews.
           * @default null
           */
          has_guest_interviews: boolean | null;
          /**
           * Has Sponsors
           * @description Whether this podcast has sponsors.
           * @default null
           */
          has_sponsors: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Itunes Id
           * @description iTunes id for this podcast.
           * @default null
           */
          itunes_id: number | null;
          /**
           * Latest Episode Id
           * @description The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
           * @default null
           */
          latest_episode_id: string | null;
          /**
           * Latest Pub Date Ms
           * @description The published date of the latest episode of this podcast. In milliseconds
           * @default null
           */
          latest_pub_date_ms: number | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Publisher Highlighted
           * @description Highlighted segment of this podcast's publisher name.
           * @default null
           */
          publisher_highlighted: string | null;
          /**
           * Publisher Original
           * @description Plain text of this podcast's publisher name.
           * @default null
           */
          publisher_original: string | null;
          /**
           * Rss
           * @description RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
           * @default null
           */
          rss: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title Highlighted
           * @description Highlighted segment of podcast name.
           * @default null
           */
          title_highlighted: string | null;
          /**
           * Title Original
           * @description Plain text of podcast name.
           * @default null
           */
          title_original: string | null;
          /**
           * Total Episodes
           * @description Total number of episodes in this podcast.
           * @default null
           */
          total_episodes: number | null;
          /**
           * Update Frequency Hours
           * @description How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
           * @default null
           */
          update_frequency_hours: number | null;
          /**
           * Website
           * @description Website url of this podcast.
           * @default null
           */
          website: string | null;
      } | {
          /**
           * Description Highlighted
           * @description Highlighted segment of this curated list's description
           * @default null
           */
          description_highlighted: string | null;
          /**
           * Description Original
           * @description Plain text of this curated list's description
           * @default null
           */
          description_original: string | null;
          /**
           * Id
           * @description Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Listennotes Url
           * @description The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Podcasts
           * @description Up to 5 podcasts in this curated list.
           * @default null
           */
          podcasts: {
              /**
               * Id
               * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Listen Score
               * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
               *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score: number | null;
              /**
               * Listen Score Global Rank
               * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
               *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
               *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
               *
               * @default null
               */
              listen_score_global_rank: string | null;
              /**
               * Listennotes Url
               * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Publisher
               * @description Podcast publisher name.
               * @default null
               */
              publisher: string | null;
              /**
               * Thumbnail
               * @description Thumbnail image url for this podcast's artwork (300x300).
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title
               * @description Podcast name.
               * @default null
               */
              title: string | null;
          }[] | null;
          /**
           * Pub Date Ms
           * @description Published date of this curated list. In milliseconds.
           * @default null
           */
          pub_date_ms: number | null;
          /**
           * Source Domain
           * @description The domain name of the source of this curated list.
           * @default null
           */
          source_domain: string | null;
          /**
           * Source Url
           * @description Url of the source of this curated list.
           * @default null
           */
          source_url: string | null;
          /**
           * Title Highlighted
           * @description Highlighted segment of this curated list's title
           * @default null
           */
          title_highlighted: string | null;
          /**
           * Title Original
           * @description Plain text of this curated list's title
           * @default null
           */
          title_original: string | null;
          /**
           * Total
           * @description The total number of podcasts in this curated list.
           * @default null
           */
          total: number | null;
      })[] | null;
      /**
       * Took
       * @description The time it took to fetch these search results. In seconds.
       * @default null
       */
      took: number | null;
      /**
       * Total
       * @description The total number of search results.
       * @default null
       */
      total: number | null;
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
 * Type of LISTENNOTES's LISTENNOTES_GET_PLAYLIST_BY_ID tool input.
 */
type LISTENNOTES_GET_PLAYLIST_BY_ID_INPUT = {
  /**
   * Id
   * @description Playlist id (always 11 characters, e.g., m1pe7z60bsw). You can get the podcast id from the url of a playlist, e.g., m1pe7z60bsw is the playlist id of listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw
   */
  id?: string;
  /**
   * Last Timestamp Ms
   * @description For playlist items pagination. It"s the value of **last_timestamp_ms** from the response of last request. If it"s 0 or not specified, just return the latest or the oldest 20 items, depending on the value of the **sort** parameter.
   * @default 0
   */
  last_timestamp_ms: number;
  /**
   * Sort
   * @description How do you want to sort playlist items?
   * @default recent_added_first
   * @enum {string}
   */
  sort: "oldest_added_first" | "oldest_published_first" | "recent_added_first" | "recent_published_first";
  /**
   * Type
   * @description The type of this playlist, which should be either **episode_list** or **podcast_list**.
   * @default episode_list
   * @enum {string}
   */
  type: "episode_list" | "podcast_list";
};

/**
 * Type of LISTENNOTES's LISTENNOTES_GET_PLAYLIST_BY_ID tool output.
 */
type LISTENNOTES_GET_PLAYLIST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Description
       * @description Playlist description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.
       * @default null
       */
      id: string | null;
      /**
       * Image
       * @description High resolution image url of the playlist.
       * @default null
       */
      image: string | null;
      /**
       * Items
       * @description A list of playlist items.
       * @default null
       */
      items: {
          /**
           * Added At Ms
           * @description Timestamp (in milliseconds) when this item is added.
           * @default null
           */
          added_at_ms: number | null;
          /**
           * Data
           * @default null
           */
          data: {
              /**
               * Audio
               * @description Audio url of this episode, which can be played directly.
               * @default null
               */
              audio: string | null;
              /**
               * Audio Length Sec
               * @description Audio length of this episode. In seconds.
               * @default null
               */
              audio_length_sec: number | null;
              /**
               * Description
               * @description Html of this episode's full description
               * @default null
               */
              description: string | null;
              /**
               * Explicit Content
               * @description Whether this podcast contains explicit language.
               * @default null
               */
              explicit_content: boolean | null;
              /**
               * Id
               * @description Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
               * @default null
               */
              id: string | null;
              /**
               * Image
               * @description Image url for this episode.
               *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
               *     If you are using PRO/ENTERPRISE plan, then it's
               *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
               *     low resolution image (300x300).
               *
               * @default null
               */
              image: string | null;
              /**
               * Link
               * @description Web link of this episode.
               * @default null
               */
              link: string | null;
              /**
               * Listennotes Edit Url
               * @description Edit url of this episode where you can update the audio url if you find the audio is broken.
               * @default null
               */
              listennotes_edit_url: string | null;
              /**
               * Listennotes Url
               * @description The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
               * @default null
               */
              listennotes_url: string | null;
              /**
               * Maybe Audio Invalid
               * @description Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
               * @default null
               */
              maybe_audio_invalid: boolean | null;
              /**
               * Podcast
               * @default null
               */
              podcast: {
                  /**
                   * Id
                   * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Image
                   * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
                   *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
                   *     low resolution image (300x300).
                   *
                   * @default null
                   */
                  image: string | null;
                  /**
                   * Listen Score
                   * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
                   *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
                   *
                   * @default null
                   */
                  listen_score: number | null;
                  /**
                   * Listen Score Global Rank
                   * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
                   *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
                   *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
                   *
                   * @default null
                   */
                  listen_score_global_rank: string | null;
                  /**
                   * Listennotes Url
                   * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
                   * @default null
                   */
                  listennotes_url: string | null;
                  /**
                   * Publisher
                   * @description Podcast publisher name.
                   * @default null
                   */
                  publisher: string | null;
                  /**
                   * Thumbnail
                   * @description Thumbnail image url for this podcast's artwork (300x300).
                   * @default null
                   */
                  thumbnail: string | null;
                  /**
                   * Title
                   * @description Podcast name.
                   * @default null
                   */
                  title: string | null;
              } | null;
              /**
               * Pub Date Ms
               * @description Published date for this episode. In millisecond.
               * @default null
               */
              pub_date_ms: number | null;
              /**
               * Thumbnail
               * @description Thumbnail image (300x300) url for this episode.
               *     If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
               *
               * @default null
               */
              thumbnail: string | null;
              /**
               * Title
               * @description Episode name.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Id
           * @description Playlist item id.
           * @default null
           */
          id: number | null;
          /**
           * Notes
           * @description Notes for this item.
           * @default null
           */
          notes: string | null;
          /**
           * Type1
           * @description The type of this playlist item.
           *     If a playlist is **episode_list**, then an item could be either **episode** or **custom_audio**.
           *     If it's **podcast_list**, then an item can only be **podcast**.
           *
           * @default null
           * @enum {string|null}
           */
          type: "episode" | "custom_audio" | "podcast" | null;
      }[] | null;
      /**
       * Last Timestamp Ms
       * @description Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.
       *
       * @default null
       */
      last_timestamp_ms: number | null;
      /**
       * Listennotes Url
       * @description The url of this playlist on ListenNotes.com.
       * @default null
       */
      listennotes_url: string | null;
      /**
       * Name
       * @description Playlist name.
       * @default null
       */
      name: string | null;
      /**
       * Thumbnail
       * @description Low resolution image url of the playlist.
       * @default null
       */
      thumbnail: string | null;
      /**
       * Total
       * @description Total number of items in this playlist.
       * @default null
       */
      total: number | null;
      /**
       * Total Audio Length Sec
       * @description Total audio length of all episodes in this playlist, in seconds. It will have a valid value only when type is **episode_list**. In other words, it will be 0 if type is **podcast_list**.
       * @default null
       */
      total_audio_length_sec: number | null;
      /**
       * Type
       * @description The type of this playlist, which should be either **episode_list** or **podcast_list**.
       *
       * @default null
       * @enum {string|null}
       */
      type: "episode_list" | "podcast_list" | null;
      /**
       * Visibility
       * @description Visibility of this playlist.
       * @default null
       * @enum {string|null}
       */
      visibility: "public" | "unlisted" | "private" | null;
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
 * Type of LISTENNOTES's LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST tool input.
 */
type LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST_INPUT = {
  /**
   * Id
   * @description Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...
   */
  id?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST tool output.
 */
type LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Last Refreshed At Ms
       * @description The timestamp (in milliseconds) when the rss was last refreshed.
       * @default null
       */
      last_refreshed_at_ms: number | null;
      /**
       * Status
       * @description The status of the rss refreshing request.
       * @enum {string}
       */
      status: "refreshing" | "refreshed";
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
 * Type of LISTENNOTES's LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST tool input.
 */
type LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST_INPUT = {
  /**
   * Id
   * @description Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...
   */
  id?: string;
  /**
   * Reason
   * @description The reason why this podcast should be deleted, e.g., copyright violation, the podcaster wants to delete it... You can put "testing" here to indicate that you are testing this endpoint, so we will not actually delete the podcast.
   */
  reason?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST tool output.
 */
type LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Status
       * @description The status of this podcast deletion request.
       * @enum {string}
       */
      status: "deleted" | "in review";
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
 * Type of LISTENNOTES's LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM tool input.
 */
type LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM_INPUT = {
  /**
   * Q
   * @description Search term, e.g., person, place, topic...
   */
  q?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM tool output.
 */
type LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Corrected Text Html
       * @description The corrected text for the entire search term (multiple words/tokens), where misspelled tokens are replaced with the correct texts and html tags <b><i>
       */
      corrected_text_html: string;
      /**
       * Tokens
       * @description The word in the text query string that is not spelled correctly
       */
      tokens: {
          /**
           * Offset
           * @description The zero-based offset from the beginning of the text query string to the word that is misspelled
           * @default null
           */
          offset: number | null;
          /**
           * Suggestion
           * @description A word that corrects the spelling error
           * @default null
           */
          suggestion: string | null;
          /**
           * Token
           * @description The misspelled word
           * @default null
           */
          token: string | null;
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
 * Type of LISTENNOTES's LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE tool input.
 */
type LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE_INPUT = {
  /**
   * Email
   * @description A valid email address. If **email** is specified, then we"ll notify this email address once the podcast is accepted.
   */
  email?: string;
  /**
   * Rss
   * @description A valid podcast rss url.
   */
  rss?: string;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE tool output.
 */
type LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /** Podcast */
      podcast: {
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Listen Score
           * @description The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
           *     If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score: number | null;
          /**
           * Listen Score Global Rank
           * @description The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
           *     For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
           *     If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
           *
           * @default null
           */
          listen_score_global_rank: string | null;
          /**
           * Listennotes Url
           * @description The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
           * @default null
           */
          listennotes_url: string | null;
          /**
           * Publisher
           * @description Podcast publisher name.
           * @default null
           */
          publisher: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Podcast name.
           * @default null
           */
          title: string | null;
      };
      /**
       * Status
       * @description The status of this submission.
       * @enum {string}
       */
      status: "found" | "in review" | "rejected";
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
 * Type of LISTENNOTES's LISTENNOTES_TYPEAHEAD_SEARCH tool input.
 */
type LISTENNOTES_TYPEAHEAD_SEARCH_INPUT = {
  /**
   * Q
   * @description Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it"s fuzzy search.
   */
  q?: string;
  /**
   * Safe Mode
   * @description Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **show_podcasts** is *1*.
   * @default 0
   */
  safe_mode: number;
  /**
   * Show Genres
   * @description Whether or not to autosuggest genres. 1 is yes, 0 is no.
   * @default 0
   */
  show_genres: number;
  /**
   * Show Podcasts
   * @description Autosuggest podcasts. This only searches podcast title and publisher and returns very limited info of 5 podcasts. 1 is yes, 0 is no. It"s a bit slow to autosuggest podcasts, so we turn it off by default. If show_podcasts=1, you can also pass iTunes id (e.g., 474722933) to the q parameter to fetch podcast meta data.
   * @default 0
   */
  show_podcasts: number;
};

/**
 * Type of LISTENNOTES's LISTENNOTES_TYPEAHEAD_SEARCH tool output.
 */
type LISTENNOTES_TYPEAHEAD_SEARCH_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Genres
       * @description Genre suggestions. It'll show up when the **show_genres** parameter is *1*.
       * @default null
       */
      genres: {
          /**
           * Id
           * @description Genre id
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Genre name.
           * @default null
           */
          name: string | null;
          /**
           * Parent Id
           * @description Parent genre id.
           * @default null
           */
          parent_id: number | null;
      }[] | null;
      /**
       * Podcasts
       * @description Podcast suggestions. It'll show up when the **show_podcasts** parameter is 1.
       * @default null
       */
      podcasts: {
          /**
           * Explicit Content
           * @description Whether this podcast contains explicit language.
           * @default null
           */
          explicit_content: boolean | null;
          /**
           * Id
           * @description Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
           * @default null
           */
          id: string | null;
          /**
           * Image
           * @description Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
           *     a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
           *     low resolution image (300x300).
           *
           * @default null
           */
          image: string | null;
          /**
           * Publisher Highlighted
           * @description Highlighted segment of this podcast's publisher name.
           * @default null
           */
          publisher_highlighted: string | null;
          /**
           * Publisher Original
           * @description Plain text of this podcast's publisher name.
           * @default null
           */
          publisher_original: string | null;
          /**
           * Thumbnail
           * @description Thumbnail image url for this podcast's artwork (300x300).
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title Highlighted
           * @description Highlighted segment of podcast name.
           * @default null
           */
          title_highlighted: string | null;
          /**
           * Title Original
           * @description Plain text of podcast name.
           * @default null
           */
          title_original: string | null;
      }[] | null;
      /**
       * Terms
       * @description Search term suggestions.
       */
      terms: string[];
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
 * Type map of all available tool input types for toolkit "LISTENNOTES".
 */
export type LISTENNOTES_TOOL_INPUTS = {
  BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES: LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES_INPUT
  BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS: LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS_INPUT
  FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST: LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST_INPUT
  FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID: LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID_INPUT
  FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE: LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE_INPUT
  FETCH_A_LIST_OF_PODCAST_GENRES: LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES_INPUT
  FETCH_A_LIST_OF_YOUR_PLAYLISTS: LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS_INPUT
  FETCH_A_RANDOM_PODCAST_EPISODE: LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE_INPUT
  FETCH_CURATED_LISTS_OF_PODCASTS: LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS_INPUT
  FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID: LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID_INPUT
  FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME: LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME_INPUT
  FETCH_PODCAST_EPISODES_BY_ID: LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID_INPUT
  FETCH_PODCAST_LANGUAGES: LISTENNOTES_FETCH_PODCAST_LANGUAGES_INPUT
  FETCH_RECOMMENDATIONS_FOR_AN_EPISODE: LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE_INPUT
  FETCH_RECOMMENDATIONS_FOR_A_PODCAST: LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST_INPUT
  FETCH_RELATED_SEARCH_TERMS: LISTENNOTES_FETCH_RELATED_SEARCH_TERMS_INPUT
  FETCH_SUPPORTED_REGIONS: LISTENNOTES_FETCH_SUPPORTED_REGIONS_INPUT
  FETCH_TRENDING_SEARCH_TERMS: LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS_INPUT
  FIND_EPISODES_BY_TITLE: LISTENNOTES_FIND_EPISODES_BY_TITLE_INPUT
  FULL_TEXT_SEARCH: LISTENNOTES_FULL_TEXT_SEARCH_INPUT
  GET_PLAYLIST_BY_ID: LISTENNOTES_GET_PLAYLIST_BY_ID_INPUT
  REFRESH_RSS_FEED_OF_A_PODCAST: LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST_INPUT
  REQUEST_TO_DELETE_A_PODCAST: LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST_INPUT
  SPELL_CHECK_ON_A_SEARCH_TERM: LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM_INPUT
  SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE: LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE_INPUT
  TYPEAHEAD_SEARCH: LISTENNOTES_TYPEAHEAD_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LISTENNOTES".
 */
export type LISTENNOTES_TOOL_OUTPUTS = {
  BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES: LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES_OUTPUT
  BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS: LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS_OUTPUT
  FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST: LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST_OUTPUT
  FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID: LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID_OUTPUT
  FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE: LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE_OUTPUT
  FETCH_A_LIST_OF_PODCAST_GENRES: LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES_OUTPUT
  FETCH_A_LIST_OF_YOUR_PLAYLISTS: LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS_OUTPUT
  FETCH_A_RANDOM_PODCAST_EPISODE: LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE_OUTPUT
  FETCH_CURATED_LISTS_OF_PODCASTS: LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS_OUTPUT
  FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID: LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID_OUTPUT
  FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME: LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME_OUTPUT
  FETCH_PODCAST_EPISODES_BY_ID: LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID_OUTPUT
  FETCH_PODCAST_LANGUAGES: LISTENNOTES_FETCH_PODCAST_LANGUAGES_OUTPUT
  FETCH_RECOMMENDATIONS_FOR_AN_EPISODE: LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE_OUTPUT
  FETCH_RECOMMENDATIONS_FOR_A_PODCAST: LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST_OUTPUT
  FETCH_RELATED_SEARCH_TERMS: LISTENNOTES_FETCH_RELATED_SEARCH_TERMS_OUTPUT
  FETCH_SUPPORTED_REGIONS: LISTENNOTES_FETCH_SUPPORTED_REGIONS_OUTPUT
  FETCH_TRENDING_SEARCH_TERMS: LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS_OUTPUT
  FIND_EPISODES_BY_TITLE: LISTENNOTES_FIND_EPISODES_BY_TITLE_OUTPUT
  FULL_TEXT_SEARCH: LISTENNOTES_FULL_TEXT_SEARCH_OUTPUT
  GET_PLAYLIST_BY_ID: LISTENNOTES_GET_PLAYLIST_BY_ID_OUTPUT
  REFRESH_RSS_FEED_OF_A_PODCAST: LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST_OUTPUT
  REQUEST_TO_DELETE_A_PODCAST: LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST_OUTPUT
  SPELL_CHECK_ON_A_SEARCH_TERM: LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM_OUTPUT
  SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE: LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE_OUTPUT
  TYPEAHEAD_SEARCH: LISTENNOTES_TYPEAHEAD_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LISTENNOTES toolkit.
 */
export const LISTENNOTES = {
  slug: "listennotes",
  tools: {
    /**
     * The listennotestest episodes post endpoint allows users to retrieve metadata for multiple podcast episodes in a single request. this post endpoint accepts a list of episode ids and returns detailed information about each specified episode. it's particularly useful for bulk retrieval of episode data, reducing the number of api calls needed when working with multiple episodes. the endpoint should be used when you need to fetch information about specific, known episodes rather than searching or browsing. keep in mind that this endpoint is focused on retrieval only and does not support creating, updating, or deleting episode data.
     */
    BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES: "LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_EPISODES",
    /**
     * The listennotestest podcasts post endpoint allows users to retrieve information about multiple podcasts using various identifiers such as listen notes ids, rss feed urls, apple podcasts ids, or spotify ids. it can optionally fetch the latest episodes for the specified podcasts. this endpoint is useful for bulk podcast data retrieval and for staying updated on recent episodes across multiple shows. it's particularly valuable for applications that need to sync or update podcast information from different platforms. the endpoint has a limit of returning up to 15 latest episodes per request, so for comprehensive episode history, multiple calls may be necessary.
     */
    BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS: "LISTENNOTES_BATCH_FETCH_BASIC_META_DATA_FOR_PODCASTS",
    /**
     * Retrieves audience information for a specific podcast identified by its unique id. this endpoint allows users to access demographic data, listening statistics, or other audience-related metrics for a particular podcast. it's useful for podcast creators, marketers, or analysts who want to understand their audience better or track the performance of their content. the tool returns aggregated data about the podcast's listeners, which may include but is not limited to age groups, geographic distribution, listening habits, or engagement metrics. it should be used when detailed audience insights for a specific podcast are needed. note that this endpoint does not provide real-time listener counts or individual listener data to protect user privacy.
     */
    FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST: "LISTENNOTES_FETCH_AUDIENCE_DEMOGRAPHICS_FOR_A_PODCAST",
    /**
     * Retrieves detailed information about a specific curated podcast using its unique identifier. this endpoint allows users to access comprehensive data about a carefully selected podcast collection, including its contents, curator information, and associated metadata. it's particularly useful for applications that want to display or analyze curated podcast lists. the endpoint should be used when detailed information about a known curated podcast is required, but it won't provide a list of all available curated podcasts or allow modifications to the curated content.
     */
    FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID: "LISTENNOTES_FETCH_A_CURATED_LIST_OF_PODCASTS_BY_ID",
    /**
     * The getbestpodcasts endpoint retrieves a curated list of the best podcasts from the listen notes platform. it allows users to access a collection of top-rated or popular podcasts, which can be filtered by genre, region, and content rating. this endpoint is useful for discovering high-quality podcast content, creating recommendation systems, or populating podcast directories. the results are paginated for efficient data retrieval and can be customized to exclude explicit content if required. while it provides a valuable overview of top podcasts, it may not include real-time updates or notifications about new episodes or changes in podcast rankings.
     */
    FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE: "LISTENNOTES_FETCH_A_LIST_OF_BEST_PODCASTS_BY_GENRE",
    /**
     * The getgenres endpoint retrieves a comprehensive list of available genres within the listennotestest platform. this endpoint is designed to provide users with up-to-date information on content categories, which can be used for filtering, organizing, or subscribing to specific types of content. it's particularly useful for applications that need to populate genre-based dropdown menus, create content recommendation systems, or set up genre-specific notification preferences. the endpoint does not require any input parameters, making it simple to use for fetching the entire genre catalog. however, users should be aware that the response may contain a large amount of data, depending on the number of genres available in the system.
     */
    FETCH_A_LIST_OF_PODCAST_GENRES: "LISTENNOTES_FETCH_A_LIST_OF_PODCAST_GENRES",
    /**
     * Retrieves a list of playlists from the listen notes platform. this endpoint allows users to fetch all available playlists associated with their account or publicly accessible playlists. it should be used when you need to display a collection of playlists, such as in a user's library or for browsing purposes. the endpoint returns basic information about each playlist, which may include the playlist name, creator, number of episodes, and other relevant metadata. note that this endpoint likely returns a limited number of playlists per request, and pagination might be necessary for retrieving large collections. it does not provide detailed information about the episodes within each playlist; separate api calls would be required to fetch that level of detail.
     */
    FETCH_A_LIST_OF_YOUR_PLAYLISTS: "LISTENNOTES_FETCH_A_LIST_OF_YOUR_PLAYLISTS",
    /**
     * The 'just listen' endpoint is a basic listener or health check mechanism for the listennotestest app. it allows users to verify the availability and responsiveness of the service without requiring any input parameters. this endpoint should be used for monitoring the status of the listennotestest service or as a simple ping to ensure the api is operational. it's important to note that this endpoint likely doesn't provide any specific data about podcasts or user accounts. the response is expected to be minimal, possibly just confirming that the service is up and running. while useful for basic health checks, it should not be relied upon for any complex operations or data retrieval within the listennotestest ecosystem.
     */
    FETCH_A_RANDOM_PODCAST_EPISODE: "LISTENNOTES_FETCH_A_RANDOM_PODCAST_EPISODE",
    /**
     * Retrieves a list of curated podcasts from the listen notes platform. this endpoint provides access to a collection of handpicked and organized podcasts, likely curated by experts or algorithms. it's useful for discovering high-quality content or featuring recommended podcasts to users. the endpoint returns a selection of podcasts, possibly grouped by themes, genres, or other criteria. while it offers a curated selection, it may not provide exhaustive search capabilities or personalized recommendations based on individual user preferences.
     */
    FETCH_CURATED_LISTS_OF_PODCASTS: "LISTENNOTES_FETCH_CURATED_LISTS_OF_PODCASTS",
    /**
     * Retrieves detailed information about a specific episode using its unique identifier. this endpoint allows users to access comprehensive data about an individual episode, which may include metadata such as title, description, publication date, duration, and associated podcast information. it's particularly useful when you need to display or process information about a single episode. the endpoint should be used when detailed information about a known episode is required, but it won't provide lists of episodes or search functionality. note that the response structure and the exact fields returned are not specified in the given schema, so the actual content may vary based on the api implementation.
     */
    FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID: "LISTENNOTES_FETCH_DETAILED_META_DATA_FOR_AN_EPISODE_BY_ID",
    /**
     * Retrieves a list of podcasts associated with a specified domain name. this endpoint allows users to discover podcasts that are produced or hosted by a particular website or organization. it's useful for content aggregation, competitive analysis, or finding podcasts related to specific brands or companies. the tool returns podcast information for the given domain, which may include multiple podcasts if the domain produces several shows. it should be used when you need to find all podcasts linked to a specific web domain. note that this endpoint may not capture podcasts that are hosted on general podcast platforms unless they have a custom domain setup.
     */
    FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME: "LISTENNOTES_FETCH_PODCASTS_BY_A_PUBLISHER_S_DOMAIN_NAME",
    /**
     * Retrieves detailed information about a specific podcast using its unique identifier. this endpoint allows users to fetch comprehensive data about a particular podcast, including but not limited to its title, description, author, episode list, and other metadata. it's ideal for applications that need to display in-depth information about a single podcast or integrate podcast data into their systems. the endpoint should be used when detailed information about a known podcast is required, rather than for searching or browsing multiple podcasts. note that this endpoint only provides information for podcasts that exist within the listen notes database and may not include real-time updates for very recent changes to the podcast.
     */
    FETCH_PODCAST_EPISODES_BY_ID: "LISTENNOTES_FETCH_PODCAST_EPISODES_BY_ID",
    /**
     * Retrieves a list of supported languages in the listen notes api. this endpoint provides information about the languages available for use within the platform, which can be crucial for internationalization and localization efforts. use this endpoint when you need to know which languages are supported by the api, such as for filtering content or setting user preferences. the response likely includes language codes and possibly their corresponding names or additional metadata. note that this endpoint doesn't accept any parameters, offering a static list of supported languages.
     */
    FETCH_PODCAST_LANGUAGES: "LISTENNOTES_FETCH_PODCAST_LANGUAGES",
    /**
     * Retrieves a list of recommended podcast episodes based on a specific episode id. this endpoint utilizes the listen notes api to generate personalized content suggestions, helping users discover new episodes similar to ones they've already enjoyed. it's ideal for enhancing user engagement and content discovery within podcast applications. the recommendations are likely based on factors such as episode content, listener behavior, and popularity. use this endpoint when you want to provide users with tailored podcast suggestions or implement a "you might also like" feature. note that the quality and relevance of recommendations may vary depending on the popularity and metadata of the source episode.
     */
    FETCH_RECOMMENDATIONS_FOR_AN_EPISODE: "LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_AN_EPISODE",
    /**
     * Retrieves a list of podcast recommendations based on a specified podcast id. this endpoint is designed to help users discover new podcasts that are similar or related to a podcast they already enjoy. it can be used to enhance user experience by providing personalized content suggestions, increasing engagement, and broadening the listener's podcast library. the recommendations are likely based on factors such as genre, topics, popularity, and listening patterns of users with similar interests. while this tool is excellent for content discovery, it should not be relied upon for comprehensive podcast information or metadata retrieval.
     */
    FETCH_RECOMMENDATIONS_FOR_A_PODCAST: "LISTENNOTES_FETCH_RECOMMENDATIONS_FOR_A_PODCAST",
    /**
     * Retrieves a list of related search queries based on the current context or user's recent search activity. this endpoint is useful for enhancing user experience by suggesting alternative or complementary search terms, potentially increasing engagement and discovery within the platform. it should be used when you want to provide users with additional search options or ideas related to their current interests or queries. the endpoint does not require any explicit parameters, relying instead on server-side logic to determine the context for generating related searches. note that the specific algorithm for generating related searches and the format of the response are not detailed in the schema, so integrators should be prepared to handle various response structures.
     */
    FETCH_RELATED_SEARCH_TERMS: "LISTENNOTES_FETCH_RELATED_SEARCH_TERMS",
    /**
     * Retrieves information about available regions in the listennotestest platform. this endpoint allows users to fetch a list of regions, which can be used for filtering content, setting up notifications, or managing regional preferences. it should be used when the client needs to know what regions are supported by the platform or when regional data is required for other operations. the endpoint returns basic details about each region, potentially including region codes, names, and any associated metadata. it does not provide detailed statistics or real-time data about events within these regions.
     */
    FETCH_SUPPORTED_REGIONS: "LISTENNOTES_FETCH_SUPPORTED_REGIONS",
    /**
     * Retrieves a list of currently trending search terms related to podcasts. this endpoint provides real-time insights into popular topics and interests among podcast listeners. it's particularly useful for content creators, marketers, and researchers who want to stay updated on current trends in the podcast industry. the endpoint returns a curated list of search terms, likely ranked by popularity or recent search volume. while it offers valuable trend data, it does not provide detailed analytics or historical trend information. users should be aware that the trending searches may change frequently and might be influenced by various factors such as current events, seasonal topics, or platform-specific promotions.
     */
    FETCH_TRENDING_SEARCH_TERMS: "LISTENNOTES_FETCH_TRENDING_SEARCH_TERMS",
    /**
     * The search episode titles endpoint allows users to search for and retrieve episode titles based on specified criteria. it provides a powerful way to find relevant episodes quickly, supporting real-time updates and notifications for changes in episode titles. this endpoint is particularly useful for applications that need to display or monitor podcast content, offering up-to-date information on episode titles across various shows or categories. while it excels at title searches, it may not provide full episode details or content, focusing primarily on the title information.
     */
    FIND_EPISODES_BY_TITLE: "LISTENNOTES_FIND_EPISODES_BY_TITLE",
    /**
     * The search endpoint allows users to query notifications or events within the listennotestest platform. it provides a way to find specific notifications based on keywords or identifiers, helping users locate relevant information quickly. this get request likely returns a list of matching notifications or events, which can be useful for monitoring specific activities or retrieving historical data. the endpoint supports basic search functionality and potentially includes options for pagination and sorting to manage large result sets efficiently.
     */
    FULL_TEXT_SEARCH: "LISTENNOTES_FULL_TEXT_SEARCH",
    /**
     * Retrieves detailed information about a specific playlist using its unique identifier. this endpoint allows users to fetch comprehensive data about a playlist, including its name, description, creator, tracks, and other relevant metadata. it's particularly useful when you need to display or process information about a known playlist. the endpoint should be used when you have the playlist's id and require its current, up-to-date details. note that this endpoint only provides read access to playlist data and does not allow for modifications. it may not include real-time listening statistics or user-specific interaction data with the playlist.
     */
    GET_PLAYLIST_BY_ID: "LISTENNOTES_GET_PLAYLIST_BY_ID",
    /**
     * Retrieves or generates an rss feed for a specific podcast identified by its unique id. this endpoint allows users to access the podcast's content in a standardized rss format, which can be used for syndication or integration with podcast players and aggregators. the rss feed typically includes information such as episode titles, descriptions, publication dates, and audio file urls. use this endpoint when you need to programmatically access a podcast's rss feed, for example, to set up notifications for new episodes or to integrate the podcast content into another application. note that this endpoint does not create or modify the podcast itself; it only provides access to the existing podcast data in rss format.
     */
    REFRESH_RSS_FEED_OF_A_PODCAST: "LISTENNOTES_REFRESH_RSS_FEED_OF_A_PODCAST",
    /**
     * Deletes a specific podcast from the system based on its unique identifier. this endpoint should be used when you want to permanently remove a podcast and all its associated data from the platform. it's important to note that this action is irreversible, so it should be used with caution. once a podcast is deleted, it cannot be recovered, and all related notifications and updates for that podcast will cease. this endpoint is typically used for managing outdated content, removing test data, or complying with content removal requests.
     */
    REQUEST_TO_DELETE_A_PODCAST: "LISTENNOTES_REQUEST_TO_DELETE_A_PODCAST",
    /**
     * The spellcheck endpoint provides a spell-checking service for text input. it allows users to verify the spelling of words or phrases, likely related to audio content or podcast descriptions within the listennotestest platform. this tool should be used when there's a need to ensure the correctness of textual content, such as titles, descriptions, or tags associated with audio files or podcasts. the endpoint doesn't specify any parameters, suggesting it might use query parameters for input or have a default behavior. it's important to note that without more specific information, the exact input method and response format are not clear, which may require additional documentation or testing to fully understand its usage.
     */
    SPELL_CHECK_ON_A_SEARCH_TERM: "LISTENNOTES_SPELL_CHECK_ON_A_SEARCH_TERM",
    /**
     * The submit podcast endpoint allows users to submit a podcast for inclusion in the listen notes database. this tool should be used when a user wants to add a new podcast to the listen notes platform or update an existing podcast's information. it requires the rss feed url of the podcast and optionally accepts an email address for status notifications. the endpoint is designed for simplicity, focusing solely on podcast submission without providing additional podcast management features. note that submission does not guarantee immediate inclusion; podcasts are subject to review before being added to the database.
     */
    SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE: "LISTENNOTES_SUBMIT_A_PODCAST_TO_LISTEN_NOTES_DATABASE",
    /**
     * The typeahead endpoint provides real-time search suggestions as users type their queries. it's designed to enhance the user experience by offering relevant autocomplete options, making it easier for users to find podcasts, episodes, or other content on the listen notes platform. this endpoint should be used to implement a dynamic search box that updates suggestions with each keystroke. it's particularly useful for improving search efficiency and accuracy by guiding users towards valid search terms. the endpoint likely returns a json array of matching results, which may include basic information like titles, ids, and possibly thumbnail images for each suggestion. it's important to note that this endpoint is intended for quick, lightweight suggestions and may not provide full details about each result - for comprehensive information, additional api calls might be necessary.
     */
    TYPEAHEAD_SEARCH: "LISTENNOTES_TYPEAHEAD_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LISTENNOTES".
 */
export type LISTENNOTES_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LISTENNOTES".
 */
export type LISTENNOTES_TRIGGER_EVENTS = {}
