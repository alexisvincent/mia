// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_CREATE_SUBTITLE tool input.
 */
type HAPPY_SCRIBE_CREATE_SUBTITLE_INPUT = {
  /**
   * Transcription
   * @description Transcription creation parameters
   */
  transcription?: {
      /**
       * Document Url
       * Format: uri
       * @description Required when service='alignment'; URL of existing transcript to align
       * @default null
       */
      document_url: string | null;
      /**
       * Folder
       * @description Optional folder path to group this subtitle
       * @default null
       */
      folder: string | null;
      /**
       * Folder Id
       * @description Optional folder ID to group this subtitle
       * @default null
       */
      folder_id: string | null;
      /**
       * Is Subtitle
       * @description Flag to generate subtitles instead of plain transcription
       * @default true
       */
      is_subtitle: boolean;
      /**
       * Language
       * @description BCP-47 language code for transcription (e.g., 'en-US')
       */
      language: string;
      /**
       * Name
       * @description Unique name for this subtitle transcription
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID under which to create the resource
       */
      organization_id: string;
      /**
       * Service
       * @description Processing type: 'auto', 'pro', or 'alignment'
       * @default auto
       * @enum {string}
       */
      service: "auto" | "pro" | "alignment";
      /**
       * Sharing Enabled
       * @description Whether the editor link is publicly accessible
       * @default false
       */
      sharing_enabled: boolean;
      /**
       * Tags
       * @description List of tags to attach to this subtitle transcription
       * @default null
       */
      tags: string[] | null;
      /**
       * Tmp Url
       * Format: uri
       * @description Publicly-accessible URL of the video file to subtitle
       */
      tmp_url: string;
  };
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_CREATE_SUBTITLE tool output.
 */
type HAPPY_SCRIBE_CREATE_SUBTITLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Links related to this transcription
       */
      _links: {
          /** Self */
          self: {
              /**
               * Editor Url
               * @description URL to open this transcription in the editor
               */
              editorUrl: string;
          };
      };
      /**
       * Created At
       * @description ISO-8601 timestamp when created
       */
      createdAt: string;
      /**
       * Id
       * @description Identifier of the created transcription
       */
      id: string;
      /**
       * Language
       * @description BCP-47 language code of the transcription
       */
      language: string;
      /**
       * Name
       * @description Name of the transcription/subtitle job
       */
      name: string;
      /**
       * Sharing Enabled
       * @description Whether sharing is enabled
       */
      sharingEnabled: boolean;
      /**
       * State
       * @description Current processing state (e.g., automatic_done)
       */
      state: string;
      /**
       * Tags
       * @description Tags applied to this job
       */
      tags: string[];
      /**
       * Updated At
       * @description ISO-8601 timestamp of last update
       */
      updatedAt: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_CREATE_TRANSCRIPTION tool input.
 */
type HAPPY_SCRIBE_CREATE_TRANSCRIPTION_INPUT = {
  /**
   * Transcription
   * @description Transcription creation payload wrapper.
   */
  transcription?: {
      /**
       * Document Url
       * Format: uri
       * @description URL to plain-text document for alignment (required if service='alignment').
       * @default null
       */
      document_url: unknown;
      /**
       * Folder
       * @description Folder path to save the transcription into.
       * @default null
       */
      folder: string | null;
      /**
       * Folder Id
       * @description Folder ID to save the transcription into.
       * @default null
       */
      folder_id: string | null;
      /**
       * Is Subtitle
       * @description Whether to treat the transcription as subtitles.
       * @default false
       */
      is_subtitle: boolean;
      /**
       * Language
       * @description BCP-47 language code for the transcription.
       */
      language: string;
      /**
       * Name
       * @description Transcription name.
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID to attribute the transcription to.
       */
      organization_id: string;
      /**
       * Service
       * @description Transcription service type. One of: auto (default), pro, alignment.
       * @default auto
       * @enum {string}
       */
      service: "auto" | "pro" | "alignment";
      /**
       * Sharing Enabled
       * @description Enable public editor access.
       * @default false
       */
      sharing_enabled: boolean;
      /**
       * Tags
       * @description Tags to attach to the transcription.
       * @default null
       */
      tags: string[] | null;
      /**
       * Tmp Url
       * Format: uri
       * @description Publicly accessible or signed URL of the media file to transcribe.
       */
      tmp_url: unknown;
  };
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_CREATE_TRANSCRIPTION tool output.
 */
type HAPPY_SCRIBE_CREATE_TRANSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Hypermedia links related to the transcription.
       */
      _links: {
          /**
           * Self
           * @description Link to the transcription editor resource.
           */
          self: {
              /**
               * Editor Url
               * @description Editor URL for the transcription.
               */
              editorUrl: string;
          };
      };
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format.
       */
      createdAt: string;
      /**
       * Id
       * @description Transcription ID.
       */
      id: string;
      /**
       * Language
       * @description Language code of the transcription.
       */
      language: string;
      /**
       * Name
       * @description Transcription name.
       */
      name: string;
      /**
       * Sharing Enabled
       * @description Whether public sharing is enabled.
       */
      sharingEnabled: boolean;
      /**
       * State
       * @description Processing state of the transcription.
       */
      state: string;
      /**
       * Tags
       * @description Tags attached to the transcription.
       */
      tags: string[];
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format.
       */
      updatedAt: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_CREATE_TRANSLATION_TASK tool input.
 */
type HAPPY_SCRIBE_CREATE_TRANSLATION_TASK_INPUT = {
  /**
   * Source Transcription Id
   * @description ID of the transcription to translate; must be in a supported source language.
   */
  source_transcription_id?: string;
  /**
   * Target Language
   * @description Target language code to translate into (e.g., 'fr', 'es').
   */
  target_language?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_CREATE_TRANSLATION_TASK tool output.
 */
type HAPPY_SCRIBE_CREATE_TRANSLATION_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Failure Reason
       * @description Error reason if the task failed; otherwise null.
       * @default null
       */
      failureReason: string | null;
      /**
       * Id
       * @description Identifier of the created translation task.
       */
      id: string;
      /**
       * Progress Percent
       * @description Percentage progress of the task; null if not yet started or not applicable.
       * @default null
       */
      progressPercent: number | null;
      /**
       * State
       * @description Current state of the translation task.
       * @enum {string}
       */
      state: "initial" | "working" | "failed" | "done";
      /**
       * Target Language
       * @description Echo of the requested target language code.
       */
      targetLanguage: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_DELETE_TRANSCRIPTION tool input.
 */
type HAPPY_SCRIBE_DELETE_TRANSCRIPTION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the transcription to delete
   */
  id?: string;
  /**
   * Permanent
   * @description If true, permanently deletes the transcription; otherwise moves it to Trash (default false)
   * @default null
   */
  permanent: boolean | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_DELETE_TRANSCRIPTION tool output.
 */
type HAPPY_SCRIBE_DELETE_TRANSCRIPTION_OUTPUT = {
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_DELETE_WEBHOOK tool input.
 */
type HAPPY_SCRIBE_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to delete
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_DELETE_WEBHOOK tool output.
 */
type HAPPY_SCRIBE_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_EXPORT_SUBTITLE tool input.
 */
type HAPPY_SCRIBE_EXPORT_SUBTITLE_INPUT = {
  /**
   * Export
   * @description Export configuration object
   */
  export?: {
      /**
       * Format
       * @description Subtitle export format
       * @enum {string}
       */
      format: "txt" | "docx" | "pdf" | "srt" | "vtt" | "stl" | "avid" | "html" | "premiere" | "maxqda" | "json" | "fcp";
      /**
       * Show Comments
       * @description Include comments in TXT, DOCX, PDF formats
       * @default null
       */
      show_comments: boolean | null;
      /**
       * Show Highlights
       * @description Include highlights in DOCX, PDF formats
       * @default null
       */
      show_highlights: boolean | null;
      /**
       * Show Highlights Only
       * @description Export only highlights in DOCX, PDF formats
       * @default null
       */
      show_highlights_only: boolean | null;
      /**
       * Show Speakers
       * @description Include speaker labels in TXT, DOCX, PDF formats
       * @default null
       */
      show_speakers: boolean | null;
      /**
       * Show Timestamps
       * @description Include timestamps in TXT, DOCX, PDF formats
       * @default null
       */
      show_timestamps: boolean | null;
      /**
       * Timestamps Frequency
       * @description Frequency of timestamps, e.g., '5s', '10s', up to '60s'
       * @default null
       * @enum {string|null}
       */
      timestamps_frequency: "5s" | "10s" | "15s" | "20s" | "30s" | "60s" | null;
      /**
       * Transcription Ids
       * @description List of transcription IDs to export
       */
      transcription_ids: string[];
  };
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_EXPORT_SUBTITLE tool output.
 */
type HAPPY_SCRIBE_EXPORT_SUBTITLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description Exported format as requested
       */
      format: string;
      /**
       * Id
       * @description Export job ID
       */
      id: string;
      /**
       * Show Comments
       * @description Whether comments are included
       * @default null
       */
      show_comments: boolean | null;
      /**
       * Show Highlights
       * @description Whether highlights are included
       * @default null
       */
      show_highlights: boolean | null;
      /**
       * Show Highlights Only
       * @description Whether only highlights are exported
       * @default null
       */
      show_highlights_only: boolean | null;
      /**
       * Show Speakers
       * @description Whether speaker labels are included
       * @default null
       */
      show_speakers: boolean | null;
      /**
       * Show Timestamps
       * @description Whether timestamps are included
       * @default null
       */
      show_timestamps: boolean | null;
      /**
       * State
       * @description Current state of the export job
       * @enum {string}
       */
      state: "pending" | "processing" | "ready" | "expired" | "failed";
      /**
       * Timestamps Frequency
       * @description Echo of timestamp frequency setting
       * @default null
       */
      timestamps_frequency: string | null;
      /**
       * Transcription Ids
       * @description Echo of transcription IDs in the export request
       */
      transcription_ids: string[];
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_GET_ACCOUNT_DETAILS tool input.
 */
type HAPPY_SCRIBE_GET_ACCOUNT_DETAILS_INPUT = {
  /**
   * Organization Id
   * @description Organization ID to scope the account information; if omitted, returns default account.
   * @default null
   */
  organization_id: string | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_GET_ACCOUNT_DETAILS tool output.
 */
type HAPPY_SCRIBE_GET_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Account creation timestamp in ISO 8601 format
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description Email address associated with the account
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the account
       */
      id: string;
      /**
       * Organization Id
       * @description Organization ID for multi-organization accounts
       * @default null
       */
      organization_id: string | null;
      /**
       * Plan
       * @description Current subscription plan details
       */
      plan: {
          /**
           * End Date
           * @description Plan end date in ISO 8601 format
           * @default null
           */
          end_date: string | null;
          /**
           * Name
           * @description Name of the subscription plan
           */
          name: string;
          /**
           * Start Date
           * @description Plan start date in ISO 8601 format
           * @default null
           */
          start_date: string | null;
          /**
           * Tier
           * @description Tier of the plan, if applicable
           * @default null
           */
          tier: string | null;
      };
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       * @default null
       */
      updated_at: string | null;
      /**
       * Usage
       * @description Usage statistics of the account
       */
      usage: {
          /**
           * Exports Count
           * @description Number of exports performed in the current billing cycle
           * @default null
           */
          exports_count: number | null;
          /**
           * Minutes Remaining
           * @description Remaining transcription minutes in the billing cycle
           * @default null
           */
          minutes_remaining: number | null;
          /**
           * Minutes Transcribed
           * @description Total minutes transcribed in the current billing cycle
           */
          minutes_transcribed: number;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_GET_LANGUAGE_LIST tool input.
 */
type HAPPY_SCRIBE_GET_LANGUAGE_LIST_INPUT = object;

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_GET_LANGUAGE_LIST tool output.
 */
type HAPPY_SCRIBE_GET_LANGUAGE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description Supported languages list
       */
      languages: {
          /**
           * Code
           * @description BCP-47 language code, e.g., 'en-US'
           */
          code: string;
          /**
           * Human Service Available
           * @description Whether human transcription service is available for this language
           */
          humanServiceAvailable: boolean;
          /**
           * Language
           * @description Display name of the language, e.g., 'English (US)'
           */
          language: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_GET_RATE_LIMIT tool input.
 */
type HAPPY_SCRIBE_GET_RATE_LIMIT_INPUT = {
  /**
   * Endpoint Preference
   * @description Preferred endpoint to probe for rate limit headers: 'transcriptions', 'version', or 'any'
   * @default null
   */
  endpoint_preference: string | null;
  /**
   * Organization Id
   * @description Organization ID to include when probing list endpoints
   * @default null
   */
  organization_id: string | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_GET_RATE_LIMIT tool output.
 */
type HAPPY_SCRIBE_GET_RATE_LIMIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of requests allowed in the current window
       */
      limit: number;
      /**
       * Remaining
       * @description Number of requests remaining in the current window
       */
      remaining: number;
      /**
       * Reset
       * @description Unix timestamp when the rate limit window resets
       */
      reset: number;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_CONFIRM_ORDER tool input.
 */
type HAPPY_SCRIBE_HS_CONFIRM_ORDER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the order to confirm (UUID format).
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_CONFIRM_ORDER tool output.
 */
type HAPPY_SCRIBE_HS_CONFIRM_ORDER_OUTPUT = {
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER tool input.
 */
type HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER_INPUT = {
  /**
   * Order
   * @description Wrapper object containing the translation order parameters.
   */
  order?: {
      /**
       * Confirm
       * @description Whether to submit the order immediately. Defaults to false (order remains incomplete).
       * @default false
       */
      confirm: boolean;
      /**
       * Service
       * @description Service level: 'auto' for automatic translation, 'pro' for professional human translation.
       * @default auto
       * @enum {string}
       */
      service: "auto" | "pro";
      /**
       * Source Transcription Id
       * @description ID of the existing transcription to translate.
       */
      source_transcription_id: string;
      /**
       * Target Languages
       * @description List of target language codes for translation (e.g., ['fr', 'es']).
       */
      target_languages: string[];
  };
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER tool output.
 */
type HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addons
       * @description Applied addons on the order.
       */
      addons: {
          [key: string]: unknown;
      }[];
      /**
       * Can Be Submitted
       * @description Whether the order can be submitted.
       */
      canBeSubmitted: boolean;
      /**
       * Can Topup Off Session
       * @description Whether off-session top-up is possible.
       */
      canTopupOffSession: boolean;
      /**
       * Current User Is Payer
       * @description Whether the current user is the payer.
       */
      currentUserIsPayer: boolean;
      /**
       * Details
       * @description Pricing and item details.
       */
      details: {
          /**
           * Addons Total Cents
           * @description Mapping of addon names to their total cents cost.
           */
          addons_total_cents: {
              [key: string]: number;
          };
          /**
           * Currency
           * @description Currency code (e.g., 'usd').
           */
          currency: string;
          /**
           * Currency Symbol
           * @description Currency symbol (e.g., '$').
           */
          currency_symbol: string;
          /**
           * Items
           * @description List of line items.
           */
          items: {
              /**
               * Addon Id
               * @description Addon ID if any.
               * @default null
               */
              addon_id: number | null;
              /**
               * Addon Name
               * @description Addon name if any.
               * @default null
               */
              addon_name: string | null;
              /**
               * Cents
               * @description Total cents for this item.
               */
              cents: number;
              /**
               * Cents Per Unit
               * @description Price per unit in cents.
               */
              cents_per_unit: number;
              /**
               * Credits
               * @description Credits charged for this item.
               * @default null
               */
              credits: number | null;
              /**
               * Filename
               * @description Filename or label of the item.
               */
              filename: string;
              /**
               * Id
               * @description Line item ID.
               */
              id: number;
              /**
               * Pricing Unit Count
               * @description Number of pricing units.
               */
              pricing_unit_count: number;
              /**
               * Pricing Unit Name
               * @description Name of the pricing unit.
               */
              pricing_unit_name: string;
              /**
               * Service
               * @description Service details for this item.
               */
              service: {
                  /**
                   * Glossary Ids
                   * @description Glossary IDs used.
                   */
                  glossary_ids: string[];
                  /**
                   * Language
                   * @description Source language code.
                   */
                  language: string;
                  /**
                   * Name
                   * @description Name of the service, e.g., 'transcription_translation'.
                   */
                  name: string;
                  /**
                   * Target Language
                   * @description Target language code.
                   */
                  target_language: string;
                  /**
                   * Type
                   * @description Service level.
                   * @enum {string}
                   */
                  type: "auto" | "pro";
                  /**
                   * Use Vocab
                   * @description Whether vocabulary optimization is used (if applicable).
                   */
                  use_vocab: boolean;
              };
              /**
               * Turnaround Minutes
               * @description Estimated turnaround time in minutes.
               */
              turnaround_minutes: number;
          }[];
          /**
           * Minimum Charge
           * @description Minimum charge applied in cents.
           */
          minimum_charge: number;
          /**
           * Pricing Unit Name
           * @description Name of the pricing unit.
           */
          pricing_unit_name: string;
          /**
           * Pricing Unit Total Count
           * @description Total count of pricing units.
           */
          pricing_unit_total_count: number;
          /**
           * Total Cents
           * @description Total price in cents.
           */
          total_cents: number;
          /**
           * Total Credits
           * @description Total price in credits (if applicable).
           * @default null
           */
          total_credits: number | null;
      };
      /**
       * Detected Language
       * @description Auto-detected source language.
       * @default null
       */
      detectedLanguage: string | null;
      /**
       * Duplicates
       * @description Detected duplicate orders.
       */
      duplicates: {
          [key: string]: unknown;
      }[];
      /**
       * Folder Id
       * @description Folder ID containing the order.
       */
      folder_id: number;
      /**
       * Id
       * @description Identifier of the created order.
       */
      id: string;
      /**
       * Inputs
       * @description Source materials for the order.
       */
      inputs: {
          /**
           * Transcription Id
           * @description ID of the source transcription.
           */
          transcription_id: string;
      }[];
      /**
       * Needs Money Wallet Topup
       * @description Whether additional funds are required.
       */
      needsMoneyWalletTopup: boolean;
      /**
       * Operations
       * @description List of operations in the order.
       */
      operations: {
          /**
           * Glossary Ids
           * @description Glossary IDs applied to this operation.
           */
          glossary_ids: string[];
          /**
           * Language
           * @description Source language code.
           */
          language: string;
          /**
           * Name
           * @description Operation type, e.g., 'transcription_translation'.
           */
          name: string;
          /**
           * Target Language
           * @description Target language code for this operation.
           */
          target_language: string;
          /**
           * Type
           * @description Service level for this operation.
           * @enum {string}
           */
          type: "auto" | "pro";
          /**
           * Use Vocab
           * @description Whether vocabulary optimization is used (if applicable).
           */
          use_vocab: boolean;
      }[];
      /**
       * Outputs Count
       * @description Number of outputs generated.
       */
      outputsCount: number;
      /**
       * Show Upgrade Business Modal
       * @description Flag to suggest business upgrade.
       */
      showUpgradeBusinessModal: boolean;
      /**
       * State
       * @description Current state of the order.
       * @enum {string}
       */
      state: "incomplete" | "waiting_for_payment" | "submitted" | "locked" | "fulfilled" | "failed" | "canceled" | "expired" | "free_trial_submitted" | "free_trial_fulfilled";
      /**
       * Suggested Languages
       * @description Suggested target languages.
       */
      suggestedLanguages: string[];
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_DELETE_SUBTITLE tool input.
 */
type HAPPY_SCRIBE_HS_DELETE_SUBTITLE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the transcription/subtitle job to delete
   */
  id?: string;
  /**
   * Permanent
   * @description If true, deletion is irreversible; otherwise moves the job to Trash
   * @default false
   */
  permanent: boolean;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_DELETE_SUBTITLE tool output.
 */
type HAPPY_SCRIBE_HS_DELETE_SUBTITLE_OUTPUT = {
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION tool input.
 */
type HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION_INPUT = {
  /**
   * Format
   * @description Output format for the export
   * @enum {string}
   */
  format?: "txt" | "docx" | "pdf" | "srt" | "vtt" | "stl" | "avid" | "html" | "premiere" | "maxqda" | "json" | "fcp";
  /**
   * Show Comments
   * @description Include comments; valid only for txt, docx, pdf
   * @default null
   */
  showComments: boolean | null;
  /**
   * Show Highlights
   * @description Include highlights; valid only for docx, pdf
   * @default null
   */
  showHighlights: boolean | null;
  /**
   * Show Highlights Only
   * @description Export only highlighted sections; valid only for docx, pdf
   * @default null
   */
  showHighlightsOnly: boolean | null;
  /**
   * Show Speakers
   * @description Include speaker labels; valid only for txt, docx, pdf
   * @default null
   */
  showSpeakers: boolean | null;
  /**
   * Show Timestamps
   * @description Include timestamps; valid only for txt, docx, pdf
   * @default null
   */
  showTimestamps: boolean | null;
  /**
   * Timestamps Frequency
   * @description Frequency for inline timecodes
   * @default null
   * @enum {string|null}
   */
  timestampsFrequency: "5s" | "10s" | "15s" | "20s" | "30s" | "60s" | null;
  /**
   * Transcription Ids
   * @description List of transcription IDs to include in the export
   */
  transcriptionIds?: string[];
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION tool output.
 */
type HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Format
       * @description Echo of requested format
       */
      format: string;
      /**
       * Id
       * @description Export job ID
       */
      id: string;
      /**
       * Show Comments
       * @description Echo show comments setting
       */
      showComments: boolean;
      /**
       * Show Highlights
       * @description Echo show highlights setting
       */
      showHighlights: boolean;
      /**
       * Show Highlights Only
       * @description Echo show highlights-only setting
       */
      showHighlightsOnly: boolean;
      /**
       * Show Speakers
       * @description Echo show speakers setting
       */
      showSpeakers: boolean;
      /**
       * Show Timestamps
       * @description Echo show timestamps setting
       */
      showTimestamps: boolean;
      /**
       * State
       * @description Export state
       * @enum {string}
       */
      state: "pending" | "processing" | "ready" | "expired" | "failed";
      /**
       * Transcription Ids
       * @description Transcription IDs included in this export
       */
      transcriptionIds: string[];
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_API_VERSION tool input.
 */
type HAPPY_SCRIBE_HS_GET_API_VERSION_INPUT = {
  /**
   * Endpoint Preference
   * @description Preferred endpoint to probe for version: 'version', 'transcriptions', or 'auto'
   * @default null
   */
  endpoint_preference: string | null;
  /**
   * Organization Id
   * @description Optional organization ID used when probing list endpoints
   * @default null
   */
  organization_id: string | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_API_VERSION tool output.
 */
type HAPPY_SCRIBE_HS_GET_API_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Latest Version
       * @description Latest available API version string
       */
      latestVersion: string;
      /**
       * Release Notes
       * @description Release notes or changelog for the latest version, if any.
       * @default null
       */
      releaseNotes: string | null;
      /**
       * Updates Available
       * @description Whether a newer API version is available
       */
      updatesAvailable: boolean;
      /**
       * Version
       * @description Current API version string
       */
      version: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_ERROR_CODES tool input.
 */
type HAPPY_SCRIBE_HS_GET_ERROR_CODES_INPUT = object;

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_ERROR_CODES tool output.
 */
type HAPPY_SCRIBE_HS_GET_ERROR_CODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error codes and their meanings
       */
      errors: {
          /**
           * Code
           * @description HTTP error code
           */
          code: number;
          /**
           * Description
           * @description Meaning of the error code
           */
          description: string;
          /**
           * Name
           * @description Error name
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_SUBTITLE tool input.
 */
type HAPPY_SCRIBE_HS_GET_SUBTITLE_INPUT = {
  /**
   * Id
   * @description The subtitle job unique identifier.
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_SUBTITLE tool output.
 */
type HAPPY_SCRIBE_HS_GET_SUBTITLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Download and editor links for this transcription.
       */
      _links: {
          /**
           * Self
           * @description Links object containing download and editor URLs.
           */
          self: {
              /**
               * Download Url
               * @description URL to download JSON-format subtitle content.
               */
              downloadUrl: string;
              /**
               * Editor Url
               * @description URL to open the transcription in the editor.
               */
              editorUrl: string;
          };
      };
      /**
       * Audio Length In Seconds
       * @description Media duration in seconds.
       */
      audioLengthInSeconds: number;
      /**
       * Cost In Cents
       * @description Processing cost in cents.
       */
      costInCents: number;
      /**
       * Created At
       * @description ISO-8601 timestamp when the transcription was created.
       */
      createdAt: string;
      /**
       * Delivery Estimated At
       * @description Estimated delivery timestamp (ISO 8601).
       * @default null
       */
      deliveryEstimatedAt: string | null;
      /**
       * Failure Message
       * @description User-friendly failure message if the job failed.
       * @default null
       */
      failureMessage: string | null;
      /**
       * Failure Reason
       * @description Error code if the job failed.
       * @default null
       */
      failureReason: string | null;
      /**
       * Id
       * @description Transcription job ID.
       */
      id: string;
      /**
       * Language
       * @description BCP-47 language code of the transcription.
       */
      language: string;
      /**
       * Name
       * @description Name of the transcription or file.
       */
      name: string;
      /**
       * Refunded
       * @description Whether the job was refunded.
       */
      refunded: boolean;
      /**
       * Sharing Enabled
       * @description Whether sharing is enabled.
       */
      sharingEnabled: boolean;
      /**
       * Soundwave Url
       * @description URL to the subtitle soundwave. Only present when state is automatic_done.
       * @default null
       */
      soundwaveUrl: string | null;
      /**
       * State
       * @description Current processing state of the transcription.
       * @enum {string}
       */
      state: "initial" | "ingesting" | "automatic_transcribing" | "automatic_done" | "aligning" | "locked" | "failed" | "demo";
      /**
       * Tags
       * @description Tags applied to this job.
       */
      tags: string[];
      /**
       * Updated At
       * @description ISO-8601 timestamp of the last update.
       */
      updatedAt: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS tool input.
 */
type HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS_INPUT = {
  /**
   * Export Category
   * @description Which output formats to include: 'subtitles', 'transcripts', or 'all'
   * @default all
   */
  export_category: string;
  /**
   * Include Audio
   * @description Include audio input formats (e.g., 'mp3', 'wav')
   * @default true
   */
  include_audio: boolean;
  /**
   * Include Video
   * @description Include video input formats (e.g., 'mp4', 'mov')
   * @default true
   */
  include_video: boolean;
  /**
   * Limit
   * @description Optional limit on the number of formats returned for each list
   * @default null
   */
  limit: number | null;
  /**
   * Test Note
   * @description Optional note used for testing (supports special characters and emoji)
   * @default null
   */
  test_note: string | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS tool output.
 */
type HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Input Formats
       * @description Supported input file formats (e.g., 'mp4', 'mp3')
       */
      inputFormats: string[];
      /**
       * Output Formats
       * @description Supported output file formats (e.g., 'srt', 'vtt', 'txt')
       */
      outputFormats: string[];
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_TRANSCRIPTION tool input.
 */
type HAPPY_SCRIBE_HS_GET_TRANSCRIPTION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the transcription job to retrieve
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_TRANSCRIPTION tool output.
 */
type HAPPY_SCRIBE_HS_GET_TRANSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Link relations for the transcription
       */
      _links: {
          /**
           * Self
           * @description Self link relations
           */
          self: {
              /**
               * Download Url
               * @description Download URL for JSON-format transcription content
               */
              downloadUrl: string;
              /**
               * Editor Url
               * @description URL to open the transcription in the editor
               */
              editorUrl: string;
          };
      };
      /**
       * Audio Length In Seconds
       * @description Media duration in seconds
       */
      audioLengthInSeconds: number;
      /**
       * Cost In Cents
       * @description Cost of the transcription in cents
       */
      costInCents: number;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Delivery Estimated At
       * @description Estimated delivery time in ISO 8601 format
       * @default null
       */
      deliveryEstimatedAt: string | null;
      /**
       * Failure Message
       * @description User-friendly failure message if processing failed
       * @default null
       */
      failureMessage: string | null;
      /**
       * Failure Reason
       * @description Error code if processing failed
       * @default null
       */
      failureReason: string | null;
      /**
       * Id
       * @description Transcription identifier
       */
      id: string;
      /**
       * Language
       * @description Language code in BCP-47 format
       */
      language: string;
      /**
       * Name
       * @description Transcription name
       */
      name: string;
      /**
       * Refunded
       * @description Whether the transcription was refunded
       */
      refunded: boolean;
      /**
       * Sharing Enabled
       * @description Whether sharing is enabled
       */
      sharingEnabled: boolean;
      /**
       * Soundwave Url
       * @description URL to the soundwave, available only after automatic_done for subtitles
       * @default null
       */
      soundwaveUrl: string | null;
      /**
       * State
       * @description Processing state; one of initial, ingesting, automatic_transcribing, automatic_done, aligning, locked, failed, demo
       */
      state: string;
      /**
       * Tags
       * @description Tags attached to the transcription
       */
      tags: string[];
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updatedAt: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_WEBHOOKS tool input.
 */
type HAPPY_SCRIBE_HS_GET_WEBHOOKS_INPUT = {
  /**
   * Organization Id
   * @description Organization ID to list webhooks from
   */
  organization_id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_GET_WEBHOOKS tool output.
 */
type HAPPY_SCRIBE_HS_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks configured for the account
       */
      webhooks: {
          /**
           * Active
           * @description Whether the webhook is active
           */
          active: boolean;
          /**
           * Created At
           * @description ISO-8601 timestamp when the webhook was created
           */
          createdAt: string;
          /**
           * Events
           * @description List of event types the webhook is subscribed to
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: string;
          /**
           * Secret
           * @description Secret used to sign webhook payloads
           * @default null
           */
          secret: string | null;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the webhook was last updated
           * @default null
           */
          updatedAt: string | null;
          /**
           * Url
           * @description Callback URL of the webhook
           */
          url: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_LIST_SUBTITLES tool input.
 */
type HAPPY_SCRIBE_HS_LIST_SUBTITLES_INPUT = {
  /**
   * Folder Id
   * @description Filter to a specific folder (and its subfolders)
   * @default null
   */
  folder_id: string | null;
  /**
   * From
   * @description ISO-8601 timestamp to return jobs created at or after this date/time
   * @default null
   */
  from: string | null;
  /**
   * Organization Id
   * @description Organization ID to list subtitle jobs from
   */
  organization_id?: string;
  /**
   * Page
   * @description Page index for pagination (zero-based)
   * @default 0
   */
  page: number | null;
  /**
   * Status
   * @description Filter by processing state of the job
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "processing" | "automatic_done" | "failed" | null;
  /**
   * Tags
   * @description Filter by one or more tags
   * @default null
   */
  tags: string[] | null;
  /**
   * To
   * @description ISO-8601 timestamp to return jobs created at or before this date/time
   * @default null
   */
  to: string | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_LIST_SUBTITLES tool output.
 */
type HAPPY_SCRIBE_HS_LIST_SUBTITLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**  Links */
      _links: {
          /**
           * ListSubtitlesResponseLinksNext
           * @description Link to the next page of results
           * @default null
           */
          next: {
              /**
               * Url
               * @description URL to the next page of results
               */
              url: string;
          } | null;
      };
      /**
       * Results
       * @description List of subtitle jobs
       */
      results: {
          /**  Links */
          _links: {
              /** Self */
              self: {
                  /**
                   * Editor Url
                   * @description URL to open this subtitle job in the editor
                   */
                  editorUrl: string;
              };
          };
          /**
           * Audio Length In Seconds
           * @description Media duration in seconds
           */
          audioLengthInSeconds: number;
          /**
           * Cost In Cents
           * @description Processing cost in cents
           */
          costInCents: number;
          /**
           * Created At
           * @description ISO-8601 timestamp when created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique subtitle job identifier
           */
          id: string;
          /**
           * Language
           * @description BCP-47 language code of the subtitle job
           */
          language: string;
          /**
           * Name
           * @description Name of the subtitle job or original file name
           */
          name: string;
          /**
           * Refunded
           * @description Whether the job was refunded
           */
          refunded: boolean;
          /**
           * Sharing Enabled
           * @description Whether sharing is enabled
           */
          sharingEnabled: boolean;
          /**
           * State
           * @description Current processing state of the job
           */
          state: string;
          /**
           * Tags
           * @description Tags applied to this job
           */
          tags: string[];
          /**
           * Updated At
           * @description ISO-8601 timestamp when last updated
           */
          updatedAt: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_RETRIEVE_EXPORT tool input.
 */
type HAPPY_SCRIBE_HS_RETRIEVE_EXPORT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the export to retrieve
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_RETRIEVE_EXPORT tool output.
 */
type HAPPY_SCRIBE_HS_RETRIEVE_EXPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Download Link
       * @description URL to download the export when state is 'ready'
       * @default null
       */
      download_link: string | null;
      /**
       * Format
       * @description Export format as requested
       */
      format: string;
      /**
       * Id
       * @description Export job identifier
       */
      id: string;
      /**
       * Show Comments
       * @description Whether comments are included in the export
       * @default null
       */
      show_comments: boolean | null;
      /**
       * Show Highlights
       * @description Whether highlights are included in the export
       * @default null
       */
      show_highlights: boolean | null;
      /**
       * Show Highlights Only
       * @description Whether only highlights are included in the export
       * @default null
       */
      show_highlights_only: boolean | null;
      /**
       * Show Speakers
       * @description Whether speaker labels are included in the export
       * @default null
       */
      show_speakers: boolean | null;
      /**
       * Show Timestamps
       * @description Whether timestamps are included in the export
       * @default null
       */
      show_timestamps: boolean | null;
      /**
       * State
       * @description Current processing state of the export
       * @enum {string}
       */
      state: "pending" | "processing" | "ready" | "expired" | "failed";
      /**
       * Timestamps Frequency
       * @description Frequency of timestamps in the export, e.g., '15s'
       * @default null
       */
      timestamps_frequency: string | null;
      /**
       * Transcription Ids
       * @description List of transcription IDs associated with this export
       */
      transcription_ids: string[];
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK tool input.
 */
type HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the translation task to retrieve
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK tool output.
 */
type HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Failure Reason
       * @description Error details if the translation task failed
       * @default null
       */
      failureReason: string | null;
      /**
       * Id
       * @description Translation task identifier
       */
      id: string;
      /**
       * Progress Percent
       * @description Completion percentage of the translation task
       * @default null
       */
      progressPercent: number | null;
      /**
       * State
       * @description Processing state; one of initial, working, failed, done
       */
      state: string;
      /**
       * Target Language
       * @description Target language code of the translation task
       */
      targetLanguage: string;
      /**
       * Translated Transcription Id
       * @description Identifier of the resulting translated transcription when state is done
       * @default null
       */
      translatedTranscriptionId: string | null;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_LIST_TRANSCRIPTIONS tool input.
 */
type HAPPY_SCRIBE_LIST_TRANSCRIPTIONS_INPUT = {
  /**
   * Folder Id
   * @description Filter to a specific folder (and its subfolders)
   * @default null
   */
  folder_id: string | null;
  /**
   * Organization Id
   * @description Organization ID to list transcriptions from
   */
  organization_id?: string;
  /**
   * Page
   * @description Page index for pagination (zero-based)
   * @default 0
   */
  page: number | null;
  /**
   * Tags
   * @description Filter by one or more tags
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_LIST_TRANSCRIPTIONS tool output.
 */
type HAPPY_SCRIBE_LIST_TRANSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**  Links */
      _links: {
          /**
           * ListTranscriptionsResponseLinksNext
           * @description Link to the next page of results, if any
           * @default null
           */
          next: {
              /**
               * Url
               * @description URL to the next page of results
               */
              url: string;
          } | null;
      };
      /**
       * Results
       * @description Array of transcription objects
       */
      results: {
          /**  Links */
          _links: {
              /** Self */
              self: {
                  /**
                   * Editor Url
                   * @description URL to open this transcription in the editor
                   */
                  editorUrl: string;
              };
          };
          /**
           * Audio Length In Seconds
           * @description Media duration in seconds
           */
          audioLengthInSeconds: number;
          /**
           * Cost In Cents
           * @description Processing cost in cents
           */
          costInCents: number;
          /**
           * Created At
           * @description ISO-8601 timestamp when created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique transcription identifier
           */
          id: string;
          /**
           * Language
           * @description BCP-47 language code of the transcription
           */
          language: string;
          /**
           * Name
           * @description Name of the transcription or file
           */
          name: string;
          /**
           * Refunded
           * @description Whether the job was refunded
           */
          refunded: boolean;
          /**
           * Sharing Enabled
           * @description Whether sharing is enabled
           */
          sharingEnabled: boolean;
          /**
           * State
           * @description Current processing state (e.g., 'automatic_done')
           */
          state: string;
          /**
           * Tags
           * @description Tags applied to this job
           */
          tags: string[];
          /**
           * Updated At
           * @description ISO-8601 timestamp when last updated
           */
          updatedAt: string;
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
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_RETRIEVE_ORDER tool input.
 */
type HAPPY_SCRIBE_RETRIEVE_ORDER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the order to retrieve
   */
  id?: string;
};

/**
 * Type of HAPPY_SCRIBE's HAPPY_SCRIBE_RETRIEVE_ORDER tool output.
 */
type HAPPY_SCRIBE_RETRIEVE_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addons
       * @description Add-on services
       */
      addons: {
          [key: string]: unknown;
      }[];
      /**
       * Can Be Submitted
       * @description Whether the order can be submitted
       */
      canBeSubmitted: boolean;
      /**
       * Current User Is Payer
       * @description Whether current API user pays
       */
      currentUserIsPayer: boolean;
      /**
       * Details
       * @description Pricing and item details
       */
      details: {
          /**
           * Addons Total Cents
           * @description Add-ons total by type
           */
          addons_total_cents: {
              [key: string]: number;
          };
          /**
           * Currency
           * @description Currency code
           */
          currency: string;
          /**
           * Currency Symbol
           * @description Currency symbol
           */
          currency_symbol: string;
          /**
           * Items
           * @description Line items
           */
          items: {
              /**
               * Addon Id
               * @description Addon ID if any
               * @default null
               */
              addon_id: number | null;
              /**
               * Addon Name
               * @description Addon name if any
               * @default null
               */
              addon_name: string | null;
              /**
               * Cents
               * @description Total cents for this item
               */
              cents: number;
              /**
               * Cents Per Unit
               * @description Cents per unit
               */
              cents_per_unit: number;
              /**
               * Credits
               * @description Credits for this item
               */
              credits: number;
              /**
               * Filename
               * @description Filename
               */
              filename: string;
              /**
               * Id
               * @description Line item ID
               */
              id: number;
              /**
               * Pricing Unit Count
               * @description Number of pricing units
               */
              pricing_unit_count: number;
              /**
               * Pricing Unit Name
               * @description Name of the pricing unit
               */
              pricing_unit_name: string;
              /**
               * Service
               * @description Service details for this item
               */
              service: {
                  /**
                   * Glossary Ids
                   * @description Glossary IDs
                   */
                  glossary_ids: string[];
                  /**
                   * Language
                   * @description Source language code
                   */
                  language: string;
                  /**
                   * Name
                   * @description Service name
                   */
                  name: string;
                  /**
                   * Target Language
                   * @description Target language code
                   */
                  target_language: string;
                  /**
                   * Type
                   * @description Service level
                   * @enum {string}
                   */
                  type: "auto" | "pro";
              };
              /**
               * Turnaround Minutes
               * @description Turnaround time in minutes
               */
              turnaround_minutes: number;
          }[];
          /**
           * Minimum Charge
           * @description Minimum charge
           */
          minimum_charge: number;
          /**
           * Pricing Unit Name
           * @description Pricing unit name
           */
          pricing_unit_name: string;
          /**
           * Pricing Unit Total Count
           * @description Total counted units
           */
          pricing_unit_total_count: number;
          /**
           * Total Cents
           * @description Total price in cents
           */
          total_cents: number;
          /**
           * Total Credits
           * @description Total credits
           */
          total_credits: number;
      };
      /**
       * Detected Language
       * @description Auto-detected source language
       * @default null
       */
      detectedLanguage: string | null;
      /**
       * Duplicates
       * @description Detected duplicate orders
       */
      duplicates: {
          [key: string]: unknown;
      }[];
      /**
       * Folder Id
       * @description Folder ID
       */
      folder_id: number;
      /**
       * Id
       * @description Unique identifier (UUID) of the order
       */
      id: string;
      /**
       * Inputs
       * @description Source materials (e.g., transcription ID)
       */
      inputs: {
          /**
           * Transcription Id
           * @description Source transcription ID
           */
          transcription_id: string;
      }[];
      /**
       * Needs Money Wallet Topup
       * @description Whether additional funds are needed
       */
      needsMoneyWalletTopup: boolean;
      /**
       * Operations
       * @description Operations being performed
       */
      operations: {
          /**
           * Glossary Ids
           * @description Glossary IDs
           */
          glossary_ids: string[];
          /**
           * Language
           * @description Source language code
           */
          language: string;
          /**
           * Name
           * @description Operation type (e.g., transcription_translation, subtitles)
           */
          name: string;
          /**
           * Target Language
           * @description Target language code (for translation)
           */
          target_language: string;
          /**
           * Type
           * @description Service level
           * @enum {string}
           */
          type: "auto" | "pro";
          /**
           * Use Vocab
           * @description Whether vocabulary optimization is used (subtitle ops)
           */
          use_vocab: boolean;
      }[];
      /**
       * Outputs Count
       * @description Number of outputs generated
       */
      outputsCount: number;
      /**
       * State
       * @description Current order state
       * @enum {string}
       */
      state: "incomplete" | "waiting_for_payment" | "submitted" | "locked" | "fulfilled" | "failed" | "canceled" | "expired" | "free_trial_submitted" | "free_trial_fulfilled";
      /**
       * Suggested Languages
       * @description Suggested target languages
       */
      suggestedLanguages: string[];
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
 * Type map of all available tool input types for toolkit "HAPPY_SCRIBE".
 */
export type HAPPY_SCRIBE_TOOL_INPUTS = {
  CREATE_SUBTITLE: HAPPY_SCRIBE_CREATE_SUBTITLE_INPUT
  CREATE_TRANSCRIPTION: HAPPY_SCRIBE_CREATE_TRANSCRIPTION_INPUT
  CREATE_TRANSLATION_TASK: HAPPY_SCRIBE_CREATE_TRANSLATION_TASK_INPUT
  DELETE_TRANSCRIPTION: HAPPY_SCRIBE_DELETE_TRANSCRIPTION_INPUT
  DELETE_WEBHOOK: HAPPY_SCRIBE_DELETE_WEBHOOK_INPUT
  EXPORT_SUBTITLE: HAPPY_SCRIBE_EXPORT_SUBTITLE_INPUT
  GET_ACCOUNT_DETAILS: HAPPY_SCRIBE_GET_ACCOUNT_DETAILS_INPUT
  GET_LANGUAGE_LIST: HAPPY_SCRIBE_GET_LANGUAGE_LIST_INPUT
  GET_RATE_LIMIT: HAPPY_SCRIBE_GET_RATE_LIMIT_INPUT
  HS_CONFIRM_ORDER: HAPPY_SCRIBE_HS_CONFIRM_ORDER_INPUT
  HS_CREATE_TRANSLATION_ORDER: HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER_INPUT
  HS_DELETE_SUBTITLE: HAPPY_SCRIBE_HS_DELETE_SUBTITLE_INPUT
  HS_EXPORT_TRANSCRIPTION: HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION_INPUT
  HS_GET_API_VERSION: HAPPY_SCRIBE_HS_GET_API_VERSION_INPUT
  HS_GET_ERROR_CODES: HAPPY_SCRIBE_HS_GET_ERROR_CODES_INPUT
  HS_GET_SUBTITLE: HAPPY_SCRIBE_HS_GET_SUBTITLE_INPUT
  HS_GET_SUPPORTED_FORMATS: HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS_INPUT
  HS_GET_TRANSCRIPTION: HAPPY_SCRIBE_HS_GET_TRANSCRIPTION_INPUT
  HS_GET_WEBHOOKS: HAPPY_SCRIBE_HS_GET_WEBHOOKS_INPUT
  HS_LIST_SUBTITLES: HAPPY_SCRIBE_HS_LIST_SUBTITLES_INPUT
  HS_RETRIEVE_EXPORT: HAPPY_SCRIBE_HS_RETRIEVE_EXPORT_INPUT
  HS_RETRIEVE_TRANSLATION_TASK: HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK_INPUT
  LIST_TRANSCRIPTIONS: HAPPY_SCRIBE_LIST_TRANSCRIPTIONS_INPUT
  RETRIEVE_ORDER: HAPPY_SCRIBE_RETRIEVE_ORDER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HAPPY_SCRIBE".
 */
export type HAPPY_SCRIBE_TOOL_OUTPUTS = {
  CREATE_SUBTITLE: HAPPY_SCRIBE_CREATE_SUBTITLE_OUTPUT
  CREATE_TRANSCRIPTION: HAPPY_SCRIBE_CREATE_TRANSCRIPTION_OUTPUT
  CREATE_TRANSLATION_TASK: HAPPY_SCRIBE_CREATE_TRANSLATION_TASK_OUTPUT
  DELETE_TRANSCRIPTION: HAPPY_SCRIBE_DELETE_TRANSCRIPTION_OUTPUT
  DELETE_WEBHOOK: HAPPY_SCRIBE_DELETE_WEBHOOK_OUTPUT
  EXPORT_SUBTITLE: HAPPY_SCRIBE_EXPORT_SUBTITLE_OUTPUT
  GET_ACCOUNT_DETAILS: HAPPY_SCRIBE_GET_ACCOUNT_DETAILS_OUTPUT
  GET_LANGUAGE_LIST: HAPPY_SCRIBE_GET_LANGUAGE_LIST_OUTPUT
  GET_RATE_LIMIT: HAPPY_SCRIBE_GET_RATE_LIMIT_OUTPUT
  HS_CONFIRM_ORDER: HAPPY_SCRIBE_HS_CONFIRM_ORDER_OUTPUT
  HS_CREATE_TRANSLATION_ORDER: HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER_OUTPUT
  HS_DELETE_SUBTITLE: HAPPY_SCRIBE_HS_DELETE_SUBTITLE_OUTPUT
  HS_EXPORT_TRANSCRIPTION: HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION_OUTPUT
  HS_GET_API_VERSION: HAPPY_SCRIBE_HS_GET_API_VERSION_OUTPUT
  HS_GET_ERROR_CODES: HAPPY_SCRIBE_HS_GET_ERROR_CODES_OUTPUT
  HS_GET_SUBTITLE: HAPPY_SCRIBE_HS_GET_SUBTITLE_OUTPUT
  HS_GET_SUPPORTED_FORMATS: HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS_OUTPUT
  HS_GET_TRANSCRIPTION: HAPPY_SCRIBE_HS_GET_TRANSCRIPTION_OUTPUT
  HS_GET_WEBHOOKS: HAPPY_SCRIBE_HS_GET_WEBHOOKS_OUTPUT
  HS_LIST_SUBTITLES: HAPPY_SCRIBE_HS_LIST_SUBTITLES_OUTPUT
  HS_RETRIEVE_EXPORT: HAPPY_SCRIBE_HS_RETRIEVE_EXPORT_OUTPUT
  HS_RETRIEVE_TRANSLATION_TASK: HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK_OUTPUT
  LIST_TRANSCRIPTIONS: HAPPY_SCRIBE_LIST_TRANSCRIPTIONS_OUTPUT
  RETRIEVE_ORDER: HAPPY_SCRIBE_RETRIEVE_ORDER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HAPPY_SCRIBE toolkit.
 */
export const HAPPY_SCRIBE = {
  slug: "happy_scribe",
  tools: {
    /**
     * Tool to generate subtitles for a video file by creating a transcription with the is_subtitle flag. Use after confirming the media URL is publicly accessible and valid.
     */
    CREATE_SUBTITLE: "HAPPY_SCRIBE_CREATE_SUBTITLE",
    /**
     * Tool to initiate a new transcription job using a publicly accessible or signed URL. Use when you have uploaded a media file and want to start transcription immediately.
     */
    CREATE_TRANSCRIPTION: "HAPPY_SCRIBE_CREATE_TRANSCRIPTION",
    /**
     * Tool to create a translation task for a transcription (deprecated). Use after transcription is complete to request translation.
     */
    CREATE_TRANSLATION_TASK: "HAPPY_SCRIBE_CREATE_TRANSLATION_TASK",
    /**
     * Tool to delete a transcription job. Use when you have a transcription ID and want to remove it, optionally permanently. Use after confirming the transcription ID.
     */
    DELETE_TRANSCRIPTION: "HAPPY_SCRIBE_DELETE_TRANSCRIPTION",
    /**
     * Tool to delete a specific webhook. Use when you need to remove a webhook after confirming its identifier.
     */
    DELETE_WEBHOOK: "HAPPY_SCRIBE_DELETE_WEBHOOK",
    /**
     * Tool to export subtitle in the requested format. Use after transcription is completed.
     */
    EXPORT_SUBTITLE: "HAPPY_SCRIBE_EXPORT_SUBTITLE",
    /**
     * Tool to retrieve details about your account, including subscription status and usage statistics. Use after authenticating your API key to monitor plan and usage.
     */
    GET_ACCOUNT_DETAILS: "HAPPY_SCRIBE_GET_ACCOUNT_DETAILS",
    /**
     * Tool to retrieve supported language codes and names. Use when you need the list of valid languages for transcription or subtitle services.
     */
    GET_LANGUAGE_LIST: "HAPPY_SCRIBE_GET_LANGUAGE_LIST",
    /**
     * Tool to retrieve current API rate limits. Since Happy Scribe does not expose a dedicated rate limit endpoint, we attempt to read standard rate-limit headers from lightweight GET endpoints (/transcriptions or /version). If headers are unavailable, we fall back to documented defaults (200 requests/hour) with a best-effort estimate.
     */
    GET_RATE_LIMIT: "HAPPY_SCRIBE_GET_RATE_LIMIT",
    /**
     * Tool to confirm a pending order. Use after creating an order with confirm=false when you're ready to submit it for processing.
     */
    HS_CONFIRM_ORDER: "HAPPY_SCRIBE_HS_CONFIRM_ORDER",
    /**
     * Tool to create a translation order from an existing transcription. Use when you have a completed transcription and want translations into one or more languages. By default, the order remains incomplete unless confirm=true.
     */
    HS_CREATE_TRANSLATION_ORDER: "HAPPY_SCRIBE_HS_CREATE_TRANSLATION_ORDER",
    /**
     * Tool to delete a specific subtitle job. Use when you need to remove a transcription job by its ID after confirming the identifier.
     */
    HS_DELETE_SUBTITLE: "HAPPY_SCRIBE_HS_DELETE_SUBTITLE",
    /**
     * Tool to export transcription results in various formats. Use after transcription completes to create an export job.
     */
    HS_EXPORT_TRANSCRIPTION: "HAPPY_SCRIBE_HS_EXPORT_TRANSCRIPTION",
    /**
     * Tool to retrieve current API version and check for updates. If Happy Scribe does not expose a dedicated /version endpoint, this tool attempts to infer the version from HTTP response headers or from the base_url path (e.g., /api/v1).
     */
    HS_GET_API_VERSION: "HAPPY_SCRIBE_HS_GET_API_VERSION",
    /**
     * Tool to fetch a list of API error codes and their descriptions. Use when you need to understand potential error responses.
     */
    HS_GET_ERROR_CODES: "HAPPY_SCRIBE_HS_GET_ERROR_CODES",
    /**
     * Tool to retrieve the details and status of a specific subtitle job using its unique identifier. Use when you need to check subtitle job status after submission.
     */
    HS_GET_SUBTITLE: "HAPPY_SCRIBE_HS_GET_SUBTITLE",
    /**
     * Tool to retrieve supported file formats. Use when you need to know available input and output formats before creating a transcription or subtitle. If a dedicated '/formats' endpoint is unavailable, this action probes known endpoints to verify connectivity and returns a curated list based on official documentation.
     */
    HS_GET_SUPPORTED_FORMATS: "HAPPY_SCRIBE_HS_GET_SUPPORTED_FORMATS",
    /**
     * Tool to retrieve details and status of a specific transcription job. Use after creating or listing transcription jobs to inspect a particular job's metadata.
     */
    HS_GET_TRANSCRIPTION: "HAPPY_SCRIBE_HS_GET_TRANSCRIPTION",
    /**
     * Tool to retrieve a list of webhooks configured for your account. Use when you need to view your webhook subscriptions after setup.
     */
    HS_GET_WEBHOOKS: "HAPPY_SCRIBE_HS_GET_WEBHOOKS",
    /**
     * Tool to list subtitle jobs for an organization. Use when you need to retrieve subtitle-specific transcription records with optional filters.
     */
    HS_LIST_SUBTITLES: "HAPPY_SCRIBE_HS_LIST_SUBTITLES",
    /**
     * Tool to retrieve information about a specific export. Use when you need to check export status and get download link.
     */
    HS_RETRIEVE_EXPORT: "HAPPY_SCRIBE_HS_RETRIEVE_EXPORT",
    /**
     * Tool to retrieve a translation task by ID (deprecated). Use after creating or listing legacy translation tasks to inspect their status and details.
     */
    HS_RETRIEVE_TRANSLATION_TASK: "HAPPY_SCRIBE_HS_RETRIEVE_TRANSLATION_TASK",
    /**
     * Tool to list all transcription jobs for an organization with optional filters. Use after you need to fetch transcription records (supports pagination, folder, and tags).
     */
    LIST_TRANSCRIPTIONS: "HAPPY_SCRIBE_LIST_TRANSCRIPTIONS",
    /**
     * Tool to retrieve an order by ID. Use when you need details of a specific order after creation.
     */
    RETRIEVE_ORDER: "HAPPY_SCRIBE_RETRIEVE_ORDER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HAPPY_SCRIBE".
 */
export type HAPPY_SCRIBE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HAPPY_SCRIBE".
 */
export type HAPPY_SCRIBE_TRIGGER_EVENTS = {}
