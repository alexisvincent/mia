// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RECALLAI's RECALLAI_CREATE_BOT tool input.
 */
type RECALLAI_CREATE_BOT_INPUT = {
  /**
   * AutomaticLeave
   * @description Settings for the bot to automatically leave the call. For example
   *             {
   *                 "waiting_room_timeout": 30,
   *                 "noone_joined_timeout": 30,
   *                 "everyone_left_timeout": 2,
   *                 "in_call_not_recording_timeout": 2,
   *                 "in_call_recording_timeout": 1,
   *                 "recording_permission_denied_timeout": 1
   *             }
   * @default null
   */
  automatic_leave: {
      /**
       * Everyone Left Timeout
       * @description The number of seconds after which the bot will automatically leave the call, if there were other participants in the call who have all left.
       * @default 2
       */
      everyone_left_timeout: number;
      /**
       * In Call Not Recording Timeout
       * @description The number of seconds after which the bot will automatically leave the call, if it has joined the call and is not recording. This includes all periods when the bot is not recording, even if the bot has recorded previously.
       * @default 3600
       */
      in_call_not_recording_timeout: number;
      /**
       * In Call Recording Timeout
       * @description The number of seconds after which the bot will automatically leave the call, if it has joined the call and started recording it. This can be used to enforce a maximum recording time limit for a bot. There is no default value for this parameter, meaning a bot will continue to record for as long as the meeting lasts.
       * @default null
       */
      in_call_recording_timeout: number | null;
      /**
       * Noone Joined Timeout
       * @description The number of seconds after which the bot will automatically leave the call, if it has joined the meeting but no other participant has joined.
       * @default 1200
       */
      noone_joined_timeout: number;
      /**
       * Recording Permission Denied Timeout
       * @description The number of seconds after which the bot will automatically leave the call, if it has joined the call but has not started recording. For e.g This can occur due to bot being denied permission to record(Zoom meetings).
       * @default 3600
       */
      recording_permission_denied_timeout: number;
      /**
       * Waiting Room Timeout
       * @description The number of seconds after which the bot will automatically leave the call, if it has not been let in from the waiting room. Note that this has a max value of 600 seconds for Google Meet and 1800 for Microsoft Teams.
       * @default 1200
       */
      waiting_room_timeout: number;
  } | null;
  /**
   * AutomaticVideoOutput
   * @description Settings for the bot to output video. Image should be 16:9. Recommended resolution is 640x360. For example
   *             {
   *                 "in_call_recording": {
   *                     "kind": "jpeg",
   *                     "b64_data": "some_base64_string"
   *                 },
   *                 "in_call_not_recording": {
   *                     "kind": "jpeg",
   *                     "b64_data": "some_base64_string"
   *                 }
   *             }
   * @default null
   */
  automatic_video_output: {
      /**
       * InCallNotRecording
       * @description The video to output when the bot is not recording.
       * @default null
       */
      in_call_not_recording: {
          /**
           * B64 Data
           * @description Data encoded in Base64 format, using the standard alphabet (specified here: https://datatracker.ietf.org/doc/html/rfc4648#section-4)
           */
          b64_data: string;
          /**
           * Kind
           * @default jpeg
           * @constant
           */
          kind: "jpeg";
      } | null;
      /**
       * InCallRecording
       * @description The video to output when the bot is recording.
       * @default null
       */
      in_call_recording: {
          /**
           * B64 Data
           * @description Data encoded in Base64 format, using the standard alphabet (specified here: https://datatracker.ietf.org/doc/html/rfc4648#section-4)
           */
          b64_data: string;
          /**
           * Kind
           * @default jpeg
           * @constant
           */
          kind: "jpeg";
      } | null;
  } | null;
  /**
   * Bot Name
   * @description A description of the bot.
   * @default null
   */
  bot_name: string | null;
  /**
   * GoogleMeet
   * @description Settings for the bot to join Google Meet meetings. For example
   *             {
   *                 "login_required": true,
   *                 "google_login_group_id": "some_group_id"
   *             }
   * @default null
   */
  google_meet: {
      /**
       * Google Login Group Id
       * @description The ID of the google login group to use for this meeting. If specified, the 'login_required' field value will be ignored and bot will use the 'login_mode' value on the login group.
       * @default null
       */
      google_login_group_id: string | null;
      /**
       * Login Required
       * @description Specify if the bot should always login to Google before joining the meeting. This value will override the default value set on bot's Google Meet login credentials on the account. When set to 'false', the bot will only login if required by the meeting.
       * @default false
       */
      login_required: boolean;
  } | null;
  /**
   * IncludeBotInRecording
   * @description Additional options for recording mode. For example
   *             {
   *                 "audio": true
   *             }
   * @default null
   */
  include_bot_in_recording: {
      /**
       * Audio
       * @description Whether to record audio from the bot.
       * @default false
       */
      audio: boolean;
  } | null;
  /**
   * Join At
   * @description The time at which the bot will join the call, formatted in ISO 8601. This field can only be read from scheduled bots that have not yet joined a call. Once a bot has joined a call, it's join_at will be cleared.
   * @default null
   */
  join_at: string | null;
  /**
   * Meeting Url
   * @description The url of the meeting. For example, https://zoom.us/j/123?pwd=456. This field will be cleared a few days after the bot has joined a call.
   */
  meeting_url?: string;
  /**
   * OutputMedia
   * @description Settings for the bot output media. For example
   *             {
   *                 "camera": {
   *                     "kind": "webpage",
   *                     "config": {
   *                         "url": "some_uri"
   *                     }
   *                 },
   *                 "screenshare": {
   *                     "kind": "webpage",
   *                     "config": {
   *                         "url": "some_uri"
   *                     }
   *                 }
   *             }
   * @default null
   */
  output_media: {
      /**
       * Camera
       * @description Config object for the camera.
       * @default null
       */
      camera: {
          /**
           * Config
           * @description Config object for the camera.
           */
          config: {
              /**
               * Url
               * @description The url of the webpage.
               */
              url: string;
          };
          /**
           * Kind
           * @default webpage
           * @constant
           */
          kind: "webpage";
      } | null;
      /**
       * Screenshare
       * @description Config object for the screenshare.
       * @default null
       */
      screenshare: {
          /**
           * Config
           * @description Config object for the screenshare.
           */
          config: {
              /**
               * Url
               * @description The url of the webpage.
               */
              url: string;
          };
          /**
           * Kind
           * @default webpage
           * @constant
           */
          kind: "webpage";
      } | null;
  } | null;
  /**
   * RealTimeMedia
   * @description The settings for real-time media output. For example
   *             {
   *                 "webhook_call_events_destination_url": "some_webhook_url",
   *                 "webhook_chat_messages_destination_url": "some_webhook_url",
   *                 "websocket_speaker_timeline_exclude_null_speaker": true,
   *                 "websocket_speaker_timeline_destination_url": "some_url",
   *                 "websocket_audio_destination_url": "some_url",
   *                 "websocket_video_destination_url": "some_url",
   *                 "rtmp_destination_url": "some_url"
   *             }
   * @default null
   */
  real_time_media: {
      /**
       * Rtmp Destination Url
       * @description The RTMP destination URL for streaming media.
       * @default null
       */
      rtmp_destination_url: string | null;
      /**
       * Webhook Call Events Destination Url
       * @description Receive webhooks for in call events('bot.participant_join'/'bot.participant_leave'/'bot.active_speaker_notify').
       * @default null
       */
      webhook_call_events_destination_url: string | null;
      /**
       * Webhook Chat Messages Destination Url
       * @description Receive webhooks for chat messages read by the bot in the meeting(only Zoom & Google Meet supported).
       * @default null
       */
      webhook_chat_messages_destination_url: string | null;
      /**
       * Websocket Audio Destination Url
       * @description The WebSocket URL for streaming audio data.
       * @default null
       */
      websocket_audio_destination_url: string | null;
      /**
       * Websocket Speaker Timeline Destination Url
       * @description The WebSocket URL for streaming speaker timeline data.
       * @default null
       */
      websocket_speaker_timeline_destination_url: string | null;
      /**
       * Websocket Speaker Timeline Exclude Null Speaker
       * @description Set to false to include null active speaker events in the speaker timeline websocket. Defaults to true.
       * @default true
       */
      websocket_speaker_timeline_exclude_null_speaker: boolean;
      /**
       * Websocket Video Destination Url
       * @description The WebSocket URL for streaming video data.
       * @default null
       */
      websocket_video_destination_url: string | null;
  } | null;
  /**
   * RealTimeTranscription
   * @description The settings for real-time transcription.
   *             {
   *                 "destination_url": "some_url",
   *                 "partial_results": false,
   *                 "enhanced_diarization": true
   *             }
   * @default null
   */
  real_time_transcription: {
      /**
       * Destination Url
       * @description Whether real-time transcription is enabled for the bot.
       */
      destination_url: string;
      /**
       * Enhanced Diarization
       * @description The language of the bot's transcription. This field can only be read from scheduled bots that have not yet joined a call. Once a bot has joined a call, it's language will be cleared.
       * @default false
       */
      enhanced_diarization: boolean;
      /**
       * Partial Results
       * @description The language of the bot's transcription. This field can only be read from scheduled bots that have not yet joined a call. Once a bot has joined a call, it's language will be cleared.
       * @default false
       */
      partial_results: boolean;
  } | null;
  /**
   * Recording Mode
   * @description Setting for the recording mode.
   * @default speaker_view
   * @enum {string}
   */
  recording_mode: "speaker_view" | "gallery_view" | "gallery_view_v2" | "audio_only";
  /**
   * RecordingModeOptions
   * @description Additional options for recording mode. For example
   *             {
   *                 "participant_video_when_screenshare": "beside",
   *                 "start_recording_on": "participant_speak"
   *             }
   * @default null
   */
  recording_mode_options: {
      /**
       * Participant Video When Screenshare
       * @description Setting for how the bot should show the participant video when screensharing.
       * @default overlap
       * @enum {string}
       */
      participant_video_when_screenshare: "hide" | "beside" | "overlap";
      /**
       * Start Recording On
       * @description Setting for when the bot should start recording.
       * @default call_join
       * @enum {string}
       */
      start_recording_on: "call_join" | "participant_join" | "participant_speak" | "manual";
  } | null;
  /**
   * SlackAuthenticator
   * @description Settings for the bot to authenticate with Slack. For example
   *             {
   *                 "slack_team_integration_id": "some_id",
   *                 "team_domain": "some_domain",
   *                 "login_email": "some@email",
   *                 "profile_photo_base64_jpg": "some_string_url"
   *             }
   * @default null
   */
  slack_authenticator: {
      /**
       * Login Email
       * @description The email address of the Slack user to use for this meeting. This is the email address of the Slack user that you have installed the Slack app in.
       */
      login_email: string;
      /**
       * Profile Photo Base64 Jpg
       * @description The base64 encoded profile photo of the Slack user to use for this meeting. This is the profile photo of the Slack user that you have installed the Slack app in.
       * @default null
       */
      profile_photo_base64_jpg: string | null;
      /**
       * Slack Team Integration Id
       * @description The ID of the Slack team integration to use for this meeting. This is the ID of the Slack app that you have installed in your Slack workspace.
       */
      slack_team_integration_id: string;
      /**
       * Team Domain
       * @description The domain of the Slack team to use for this meeting. This is the domain of the Slack workspace that you have installed the Slack app in.
       */
      team_domain: string;
  } | null;
  /**
   * SlackHuddleObserver
   * @description Settings for the bot to observe Slack huddles. For example
   *             {
   *                 "slack_team_integration_id": "someid",
   *                 "team_domain": "some_domain",
   *                 "login_email": "some@email",
   *                 "auto_join_public_huddles": true,
   *                 "ask_to_join_private_huddles": true,
   *                 "ask_to_join_message": "some_message",
   *                 "profile_photo_base64_jpg": "some_url",
   *                 "huddle_bot_api_token": "some_token",
   *                 "huddle_bot_config": "some_config_string"
   *             }
   * @default null
   */
  slack_huddle_observer: {
      /**
       * Ask To Join Message
       * @description The message to send when asking to join a private huddle.
       * @default null
       */
      ask_to_join_message: string | null;
      /**
       * Ask To Join Private Huddles
       * @description Ask to join private huddles.
       * @default true
       */
      ask_to_join_private_huddles: boolean;
      /**
       * Auto Join Public Huddles
       * @description Automatically join public huddles.
       * @default true
       */
      auto_join_public_huddles: boolean;
      /**
       * Filter Huddles By User Emails
       * @description A list of user emails to filter huddles by.
       * @default null
       */
      filter_huddles_by_user_emails: string[] | null;
      /**
       * Huddle Bot Api Token
       * @description The API token for the huddle bot.
       */
      huddle_bot_api_token: string;
      /**
       * Huddle Bot Config
       * @description The configuration for the huddle bot.
       */
      huddle_bot_config: string;
      /**
       * Login Email
       * @description The email address of the Slack user to use for this huddle observer.
       */
      login_email: string;
      /**
       * Profile Photo Base64 Jpg
       * @description The base64 encoded profile photo of the Slack user to use for this huddle observer.
       * @default null
       */
      profile_photo_base64_jpg: string | null;
      /**
       * Slack Team Integration Id
       * @description The ID of the Slack team integration to use for this huddle observer.
       */
      slack_team_integration_id: string;
      /**
       * Team Domain
       * @description The domain of the Slack team to use for this huddle observer.
       */
      team_domain: string;
  } | null;
  /**
   * Variant
   * @description The variant of the bot. For example
   *             {
   *                 "zoom": "web",
   *                 "google_meet": "web_4_core",
   *                 "microsoft_teams": "web_4_core"
   *             }
   * @default null
   */
  variant: {
      /**
       * GoogleMeetBotVariant
       * @description Google Meet bot variant
       * @default null
       * @enum {string|null}
       */
      google_meet: "web_4_core" | "native" | null;
      /**
       * MicrosoftTeamsBotVariant
       * @description Microsoft Teams bot variant
       * @default null
       * @enum {string|null}
       */
      microsoft_teams: "web_4_core" | "native" | null;
      /**
       * ZoomBotVariant
       * @description Zoom meetings bot variant
       * @default null
       * @enum {string|null}
       */
      zoom: "web" | "web_4_core" | "native" | null;
  } | null;
  /**
   * Zoom
   * @description Settings for the bot to join Zoom meetings.
   *             {
   *                 "join_token_url": "some_url",
   *                 "zak_url": "some_url",
   *                 "user_email": "some@email"
   *             }
   * @default null
   */
  zoom: {
      /**
       * Join Token Url
       * @description A URL which Recall will make a GET request to, in order to retrieve the Zoom Join Token for Local Recording, which the Zoom bot uses to automatically record. This token can be generated through the Zoom API. Docs: https://marketplace.zoom.us/docs/api-reference/zoom-api/methods/#operation/meetingLocalRecordingJoinToken.
       * @default null
       */
      join_token_url: string | null;
      /**
       * User Email
       * @description This is only required for registration-required webinars. This should be the email address registered for the webinar..
       * @default null
       */
      user_email: string | null;
      /**
       * Zak Url
       * @description A URL which Recall will make GET request to, in order to retrieve the ZAK. The V1 Zoom bot uses this to join meetings that require authentication to join.This token can be generated through the Zoom API. Docs: https://marketplace.zoom.us/docs/api-reference/zoom-api/methods/#operation/userZak.
       * @default null
       */
      zak_url: string | null;
  } | null;
};

/**
 * Type of RECALLAI's RECALLAI_CREATE_BOT tool output.
 */
type RECALLAI_CREATE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot Id
       * @description The ID of the created bot.
       */
      bot_id: string;
      /**
       * Description
       * @description A description of the created bot.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description The name of the created bot.
       */
      name: string;
      /**
       * Webhook Url
       * @description The webhook URL for the created bot.
       */
      webhook_url: string;
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
 * Type of RECALLAI's RECALLAI_DELETE_BOT tool input.
 */
type RECALLAI_DELETE_BOT_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this bot.
   */
  id?: string;
};

/**
 * Type of RECALLAI's RECALLAI_DELETE_BOT tool output.
 */
type RECALLAI_DELETE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description An object containing list of bots
       */
      response: {
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
 * Type of RECALLAI's RECALLAI_LIST_BOTS tool input.
 */
type RECALLAI_LIST_BOTS_INPUT = object;

/**
 * Type of RECALLAI's RECALLAI_LIST_BOTS tool output.
 */
type RECALLAI_LIST_BOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description An object containing list of bots
       */
      response: {
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
 * Type of RECALLAI's RECALLAI_LIST_CHAT_MESSAGES tool input.
 */
type RECALLAI_LIST_CHAT_MESSAGES_INPUT = {
  /**
   * Bot Id
   * @description The ID of the bot for which to retrieve the chat messages.
   */
  bot_id?: string;
  /**
   * Cursor
   * @description The pagination cursor value.
   * @default null
   */
  cursor: string | null;
  /**
   * Ordering
   * @description Which field to use when ordering the results.
   * @default null
   */
  ordering: string | null;
};

/**
 * Type of RECALLAI's RECALLAI_LIST_CHAT_MESSAGES tool output.
 */
type RECALLAI_LIST_CHAT_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description An object containing list of bots
       */
      response: {
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
 * Type of RECALLAI's RECALLAI_REMOVE_BOT_FROM_CALL tool input.
 */
type RECALLAI_REMOVE_BOT_FROM_CALL_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this bot.
   */
  id?: string;
};

/**
 * Type of RECALLAI's RECALLAI_REMOVE_BOT_FROM_CALL tool output.
 */
type RECALLAI_REMOVE_BOT_FROM_CALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description An object containing list of bots
       */
      response: {
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
 * Type of RECALLAI's RECALLAI_RETRIEVE_BOT tool input.
 */
type RECALLAI_RETRIEVE_BOT_INPUT = {
  /**
   * Bot Id
   * @description The ID of the bot to retrieve.
   */
  bot_id?: string;
};

/**
 * Type of RECALLAI's RECALLAI_RETRIEVE_BOT tool output.
 */
type RECALLAI_RETRIEVE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description An object containing bot details
       */
      response: {
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
 * Type of RECALLAI's RECALLAI_START_RECORDING tool input.
 */
type RECALLAI_START_RECORDING_INPUT = {
  /**
   * Id
   * @description The ID of the bot to start recording.
   */
  id?: string;
  /**
   * RealTimeMedia
   * @description The settings for real-time media output. For example
   *             {
   *                 "webhook_call_events_destination_url": "some_webhook_url",
   *                 "webhook_chat_messages_destination_url": "some_webhook_url",
   *                 "websocket_speaker_timeline_exclude_null_speaker": true,
   *                 "websocket_speaker_timeline_destination_url": "some_url",
   *                 "websocket_audio_destination_url": "some_url",
   *                 "websocket_video_destination_url": "some_url",
   *                 "rtmp_destination_url": "some_url"
   *             }
   * @default null
   */
  real_time_media: {
      /**
       * Rtmp Destination Url
       * @description The RTMP destination URL for streaming media.
       * @default null
       */
      rtmp_destination_url: string | null;
      /**
       * Webhook Call Events Destination Url
       * @description Receive webhooks for in call events('bot.participant_join'/'bot.participant_leave'/'bot.active_speaker_notify').
       * @default null
       */
      webhook_call_events_destination_url: string | null;
      /**
       * Webhook Chat Messages Destination Url
       * @description Receive webhooks for chat messages read by the bot in the meeting(only Zoom & Google Meet supported).
       * @default null
       */
      webhook_chat_messages_destination_url: string | null;
      /**
       * Websocket Audio Destination Url
       * @description The WebSocket URL for streaming audio data.
       * @default null
       */
      websocket_audio_destination_url: string | null;
      /**
       * Websocket Speaker Timeline Destination Url
       * @description The WebSocket URL for streaming speaker timeline data.
       * @default null
       */
      websocket_speaker_timeline_destination_url: string | null;
      /**
       * Websocket Speaker Timeline Exclude Null Speaker
       * @description Set to false to include null active speaker events in the speaker timeline websocket. Defaults to true.
       * @default true
       */
      websocket_speaker_timeline_exclude_null_speaker: boolean;
      /**
       * Websocket Video Destination Url
       * @description The WebSocket URL for streaming video data.
       * @default null
       */
      websocket_video_destination_url: string | null;
  } | null;
  /**
   * RealTimeTranscription
   * @description The settings for real-time transcription.
   *             {
   *                 "destination_url": "some_url",
   *                 "partial_results": false,
   *                 "enhanced_diarization": true
   *             }
   * @default null
   */
  real_time_transcription: {
      /**
       * Destination Url
       * @description Whether real-time transcription is enabled for the bot.
       */
      destination_url: string;
      /**
       * Enhanced Diarization
       * @description The language of the bot's transcription. This field can only be read from scheduled bots that have not yet joined a call. Once a bot has joined a call, it's language will be cleared.
       * @default false
       */
      enhanced_diarization: boolean;
      /**
       * Partial Results
       * @description The language of the bot's transcription. This field can only be read from scheduled bots that have not yet joined a call. Once a bot has joined a call, it's language will be cleared.
       * @default false
       */
      partial_results: boolean;
  } | null;
  /**
   * Recording Mode
   * @description Setting for the recording mode.
   * @default speaker_view
   * @enum {string}
   */
  recording_mode: "speaker_view" | "gallery_view" | "gallery_view_v2" | "audio_only";
  /**
   * RecordingModeOptions
   * @description Additional options for recording mode. For example
   *             {
   *                 "participant_video_when_screenshare": "beside",
   *                 "start_recording_on": "participant_speak"
   *             }
   * @default null
   */
  recording_mode_options: {
      /**
       * Participant Video When Screenshare
       * @description Setting for how the bot should show the participant video when screensharing.
       * @default overlap
       * @enum {string}
       */
      participant_video_when_screenshare: "hide" | "beside" | "overlap";
      /**
       * Start Recording On
       * @description Setting for when the bot should start recording.
       * @default call_join
       * @enum {string}
       */
      start_recording_on: "call_join" | "participant_join" | "participant_speak" | "manual";
  } | null;
};

/**
 * Type of RECALLAI's RECALLAI_START_RECORDING tool output.
 */
type RECALLAI_START_RECORDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot Id
       * @description The ID of the created bot.
       */
      bot_id: string;
      /**
       * Description
       * @description A description of the created bot.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description The name of the created bot.
       */
      name: string;
      /**
       * Webhook Url
       * @description The webhook URL for the created bot.
       */
      webhook_url: string;
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
 * Type of RECALLAI's RECALLAI_STOP_RECORDING tool input.
 */
type RECALLAI_STOP_RECORDING_INPUT = {
  /**
   * Id
   * @description A UUID string identifying this bot.
   */
  id?: string;
};

/**
 * Type of RECALLAI's RECALLAI_STOP_RECORDING tool output.
 */
type RECALLAI_STOP_RECORDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description An object containing list of bots
       */
      response: {
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
 * Type map of all available tool input types for toolkit "RECALLAI".
 */
export type RECALLAI_TOOL_INPUTS = {
  CREATE_BOT: RECALLAI_CREATE_BOT_INPUT
  DELETE_BOT: RECALLAI_DELETE_BOT_INPUT
  LIST_BOTS: RECALLAI_LIST_BOTS_INPUT
  LIST_CHAT_MESSAGES: RECALLAI_LIST_CHAT_MESSAGES_INPUT
  REMOVE_BOT_FROM_CALL: RECALLAI_REMOVE_BOT_FROM_CALL_INPUT
  RETRIEVE_BOT: RECALLAI_RETRIEVE_BOT_INPUT
  START_RECORDING: RECALLAI_START_RECORDING_INPUT
  STOP_RECORDING: RECALLAI_STOP_RECORDING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RECALLAI".
 */
export type RECALLAI_TOOL_OUTPUTS = {
  CREATE_BOT: RECALLAI_CREATE_BOT_OUTPUT
  DELETE_BOT: RECALLAI_DELETE_BOT_OUTPUT
  LIST_BOTS: RECALLAI_LIST_BOTS_OUTPUT
  LIST_CHAT_MESSAGES: RECALLAI_LIST_CHAT_MESSAGES_OUTPUT
  REMOVE_BOT_FROM_CALL: RECALLAI_REMOVE_BOT_FROM_CALL_OUTPUT
  RETRIEVE_BOT: RECALLAI_RETRIEVE_BOT_OUTPUT
  START_RECORDING: RECALLAI_START_RECORDING_OUTPUT
  STOP_RECORDING: RECALLAI_STOP_RECORDING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RECALLAI toolkit.
 */
export const RECALLAI = {
  slug: "recallai",
  tools: {
    /**
     * Create a new bot.
     */
    CREATE_BOT: "RECALLAI_CREATE_BOT",
    /**
     * Delete a bot by id.
     */
    DELETE_BOT: "RECALLAI_DELETE_BOT",
    /**
     * List all bots
     */
    LIST_BOTS: "RECALLAI_LIST_BOTS",
    /**
     * Get list of chat messages read by the bot in the meeting(excluding messages sent by the bot itself).
     */
    LIST_CHAT_MESSAGES: "RECALLAI_LIST_CHAT_MESSAGES",
    /**
     * Removes the bot from the meeting. this is irreversable.
     */
    REMOVE_BOT_FROM_CALL: "RECALLAI_REMOVE_BOT_FROM_CALL",
    /**
     * Get a bot instance.
     */
    RETRIEVE_BOT: "RECALLAI_RETRIEVE_BOT",
    /**
     * Instructs the bot to start recording the meeting. this will restart the current recording if one is already in progress.
     */
    START_RECORDING: "RECALLAI_START_RECORDING",
    /**
     * Instructs the bot to end the current recording.
     */
    STOP_RECORDING: "RECALLAI_STOP_RECORDING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RECALLAI".
 */
export type RECALLAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RECALLAI".
 */
export type RECALLAI_TRIGGER_EVENTS = {}
