// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_CREATE_ASSISTANT tool input.
 */
type SYNTHFLOW_AI_CREATE_ASSISTANT_INPUT = {
  /**
   * Caller Id Number
   * @description Optional custom caller ID number for outbound calls.
   * @default null
   */
  caller_id_number: string | null;
  /**
   * Consent Recording
   * @description If true, the assistant will ask for consent before recording.
   * @default null
   */
  consent_recording: boolean | null;
  /**
   * Consent Text
   * @description Custom message to ask for recording consent.
   * @default null
   */
  consent_text: string | null;
  /**
   * External Webhook Url
   * Format: uri
   * @description Webhook URL to receive call data such as transcripts.
   * @default null
   */
  external_webhook_url: string | null;
  /**
   * Greeting Message
   * @description Greeting message the assistant will say when starting a call.
   */
  greeting_message?: string;
  /**
   * Is Recording
   * @description Whether the conversation should be recorded. If true, logs will be available.
   * @default null
   */
  is_recording: boolean | null;
  /**
   * Is Transcript Disabled
   * @description Disable transcription of the call. Defaults to false.
   * @default null
   */
  is_transcript_disabled: boolean | null;
  /**
   * Language
   * @description Locale code for the assistant's language.
   */
  language?: string;
  /**
   * Llm
   * @description Language model identifier to power the assistant. Typically 'synthflow'.
   */
  llm?: string;
  /**
   * Name
   * @description Name of the assistant.
   */
  name?: string;
  /**
   * Phone Number
   * @description Optional phone number to call when initiating the assistant.
   * @default null
   */
  phone_number: string | null;
  /**
   * Prompt
   * @description Initial prompt or script the assistant will use to start the conversation.
   */
  prompt?: string;
  /**
   * Type
   * @description Type of assistant to create.
   * @enum {string}
   */
  type?: "outbound" | "inbound";
  /**
   * Voice Id
   * @description Identifier of the voice to use for text-to-speech.
   */
  voice_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_CREATE_ASSISTANT tool output.
 */
type SYNTHFLOW_AI_CREATE_ASSISTANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * DetailsData
       * @description Additional details of the created assistant.
       * @default null
       */
      details: {
          /**
           * Phone
           * @description Phone number used by the assistant, if any.
           */
          phone: string;
          /**
           * Voice
           * @description Voice identifier used by the assistant.
           */
          voice: string;
      } | null;
      /**
       * ResponseData
       * @description Contains the ID of the created assistant model.
       * @default null
       */
      response: {
          /**
           * Model Id
           * @description Unique identifier of the created assistant model.
           */
          model_id: string;
      } | null;
      /**
       * Status
       * @description Operational status of the request.
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_DELETE_ASSISTANT tool input.
 */
type SYNTHFLOW_AI_DELETE_ASSISTANT_INPUT = {
  /**
   * Model Id
   * @description Unique identifier of the assistant to delete
   */
  model_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_DELETE_ASSISTANT tool output.
 */
type SYNTHFLOW_AI_DELETE_ASSISTANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * DeleteAssistantResponseData
       * @description Contains confirmation message of the deletion result.
       * @default null
       */
      response: {
          /**
           * Answer
           * @description Confirmation message indicating that the assistant has been deleted
           */
          answer: string;
      } | null;
      /**
       * Status
       * @description Status of the delete request, e.g., 'ok'
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_ASSISTANT tool input.
 */
type SYNTHFLOW_AI_GET_ASSISTANT_INPUT = {
  /**
   * Model Id
   * @description Unique identifier of the AI assistant to retrieve
   */
  model_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_ASSISTANT tool output.
 */
type SYNTHFLOW_AI_GET_ASSISTANT_OUTPUT = {
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
       * Description
       * @description Description of the assistant
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the assistant
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata for the assistant
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Model Id
       * @description Underlying model ID for this assistant
       */
      model_id: string;
      /**
       * Name
       * @description Name of the assistant
       */
      name: string;
      /**
       * Status
       * @description Status of the assistant, e.g., 'active' or 'inactive'
       */
      status: string;
      /**
       * Tags
       * @description Tags associated with the assistant
       * @default null
       */
      tags: string[] | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       * @default null
       */
      updated_at: string | null;
      /**
       * Variables
       * @description List of variables defined for the assistant
       * @default null
       */
      variables: {
          /**
           * Key
           * @description Variable key
           */
          key: string;
          /**
           * Value
           * @description Variable value
           */
          value: string;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_KNOWLEDGE_BASE tool input.
 */
type SYNTHFLOW_AI_GET_KNOWLEDGE_BASE_INPUT = {
  /**
   * Knowledge Base Id
   * @description Unique identifier of the knowledge base to retrieve
   */
  knowledge_base_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_KNOWLEDGE_BASE tool output.
 */
type SYNTHFLOW_AI_GET_KNOWLEDGE_BASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * SynthflowAIGetKnowledgeBaseResponseData
       * @description Response payload containing the retrieved knowledge base details.
       * @default null
       */
      response: {
          /**
           * Knowledge Bases
           * @description List of knowledge base objects returned
           */
          knowledge_bases: {
              /**
               * Id
               * @description Unique identifier of the knowledge base
               */
              id: string;
              /**
               * Name
               * @description Name of the knowledge base
               */
              name: string;
              /**
               * Rag Use Condition
               * @description Retrieval-augmented generation usage condition
               */
              rag_use_condition: string;
          }[];
          /**
           * Total Records
           * @description Number of knowledge bases returned. Should be 1
           */
          total_records: number;
      } | null;
      /**
       * Status
       * @description Status of the request, e.g., 'ok'
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_NUMBERS tool input.
 */
type SYNTHFLOW_AI_GET_NUMBERS_INPUT = {
  /**
   * Limit
   * @description Number of phone numbers per page (defaults to 50)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based index of first phone number to return (defaults to 0)
   * @default null
   */
  offset: number | null;
  /**
   * Workspace
   * @description Unique identifier of the workspace to list phone numbers for
   */
  workspace?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_NUMBERS tool output.
 */
type SYNTHFLOW_AI_GET_NUMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * GetNumbersResponseData
       * @description Payload containing the list of phone numbers.
       * @default null
       */
      response: {
          /**
           * Phone Numbers
           * @description List of phone numbers associated with the workspace
           */
          phone_numbers: {
              /**
               * Number
               * @description The phone number in E.164 format, e.g., '+14158811313'
               */
              number: string;
              /**
               * Sid
               * @description Unique identifier (SID) of the phone number
               */
              sid: string;
          }[];
      } | null;
      /**
       * Status
       * @description Status of the request, e.g., 'ok'
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_TEAM tool input.
 */
type SYNTHFLOW_AI_GET_TEAM_INPUT = {
  /**
   * Team Id
   * @description Unique identifier of the team to retrieve
   */
  team_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_GET_TEAM tool output.
 */
type SYNTHFLOW_AI_GET_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * SynthflowAiGetTeamResponseData
       * @description Wrapper containing the list of assistant teams.
       * @default null
       */
      response: {
          /**
           * Assistant Teams
           * @description List of assistant teams matching the team ID
           */
          assistant_teams: {
              /**
               * Lead Assistant Id
               * @description Identifier for the lead assistant
               */
              lead_assistant_id: string;
              /**
               * Name
               * @description Name of the team
               */
              name: string;
              /**
               * Phone Number
               * @description Team's phone number
               */
              phone_number: string;
              /**
               * Team Id
               * @description Unique identifier for the team
               */
              team_id: string;
              /**
               * Workspace Id
               * @description Identifier for the associated workspace
               */
              workspace_id: string;
          }[];
      } | null;
      /**
       * Status
       * @description Status of the request, e.g. 'success'
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_LIST_ASSISTANTS tool input.
 */
type SYNTHFLOW_AI_LIST_ASSISTANTS_INPUT = {
  /**
   * Limit
   * @description Number of assistants to return per page (defaults to 20 if omitted).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Cursor for pagination; starting point for returning assistants (defaults to '0').
   * @default null
   */
  offset: string | null;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_LIST_ASSISTANTS tool output.
 */
type SYNTHFLOW_AI_LIST_ASSISTANTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assistants
       * @description List of assistants returned by the API.
       */
      assistants: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Description
           * @description Assistant description.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique assistant identifier.
           */
          id: string;
          /**
           * Name
           * @description Assistant name.
           */
          name: string;
          /**
           * Updated At
           * @description Last-updated timestamp in ISO 8601 format.
           */
          updated_at: string;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM tool input.
 */
type SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM_INPUT = {
  /**
   * External Webhook Url
   * Format: uri
   * @description HTTPS endpoint to receive post-call data
   * @default null
   */
  external_webhook_url: string | null;
  /**
   * Lead Assistant
   * @description Model ID of the lead assistant for this team
   */
  lead_assistant?: string;
  /**
   * Name
   * @description Unique name for the new team assistant
   */
  name?: string;
  /**
   * Phone Number
   * @description Phone number in E.164 format for voice integration; required only if voice integration is enabled
   * @default null
   */
  phone_number: string | null;
  /**
   * Sub Assistants Attach
   * @description List of sub-assistants with routing rules to attach to the team
   * @default null
   */
  sub_assistants_attach: {
      /**
       * Model Id
       * @description Model ID of the sub-assistant
       */
      model_id: string;
      /**
       * Routing Condition
       * @description Condition used to route to this sub-assistant
       */
      routing_condition: string;
      /**
       * Sleep Time Seconds
       * @description Delay in seconds before transfer
       * @default null
       */
      sleep_time_seconds: number | null;
      /**
       * Transfer Message
       * @description Message before transferring to sub-assistant
       * @default null
       */
      transfer_message: string | null;
  }[] | null;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM tool output.
 */
type SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Payload containing the created team's ID
       */
      response: {
          /**
           * Team Id
           * @description Identifier of the newly created team
           */
          team_id: string;
      };
      /**
       * Status
       * @description Result status of the API call, e.g. 'success'
       */
      status: string;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM tool input.
 */
type SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM_INPUT = {
  /**
   * Team Id
   * @description ID of the team to delete, copyable from the UI
   */
  team_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM tool output.
 */
type SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * SynthflowAIDeleteTeamResponseData
       * @description Contains confirmation message of the deletion result.
       * @default null
       */
      response: {
          /**
           * Answer
           * @description Confirmation message indicating that the team has been deleted
           */
          answer: string;
      } | null;
      /**
       * Status
       * @description Result status of the API call, e.g. 'success' or null
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM tool input.
 */
type SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM_INPUT = {
  /**
   * External Webhook Url
   * Format: uri
   * @description HTTPS endpoint to receive post-call data
   * @default null
   */
  external_webhook_url: string | null;
  /**
   * Name
   * @description New display name for the team assistant
   * @default null
   */
  name: string | null;
  /**
   * Phone Number
   * @description Phone number in E.164 format for voice integration
   * @default null
   */
  phone_number: string | null;
  /**
   * Sub Assistants Attach
   * @description List of sub-assistants to attach with routing logic
   * @default null
   */
  sub_assistants_attach: {
      /**
       * Model Id
       * @description ID of the sub-assistant model to attach
       */
      model_id: string;
      /**
       * Routing Condition
       * @description Condition expression for routing to this sub-assistant
       */
      routing_condition: string;
      /**
       * Sleep Time Seconds
       * @description Delay in seconds before transfer
       */
      sleep_time_seconds: number;
      /**
       * Transfer Message
       * @description Message to play before transferring to sub-assistant
       */
      transfer_message: string;
  }[] | null;
  /**
   * Sub Assistants Detach
   * @description List of sub-assistants to detach by model ID
   * @default null
   */
  sub_assistants_detach: {
      /**
       * Model Id
       * @description ID of the sub-assistant model to detach
       */
      model_id: string;
  }[] | null;
  /**
   * Team Id
   * @description Identifier of the team to update
   */
  team_id?: string;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM tool output.
 */
type SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * SynthflowAiUpdateTeamResponseData
       * @description Contains the ID of the updated team.
       * @default null
       */
      response: {
          /**
           * Team Id
           * @description Identifier of the updated team
           */
          team_id: string;
      } | null;
      /**
       * Status
       * @description Result status of the API call, e.g. 'success'
       * @default null
       */
      status: string | null;
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
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_UPDATE_ASSISTANT tool input.
 */
type SYNTHFLOW_AI_UPDATE_ASSISTANT_INPUT = {
  /**
   * AgentConfig
   * @description Partial assistant configuration object
   * @default null
   */
  agent: ({
      /**
       * Language
       * @description Language for the assistant, e.g., 'en-US'
       * @default null
       */
      language: string | null;
      /**
       * Voice
       * @description Voice identifier for the assistant, e.g., 'alice'
       * @default null
       */
      voice: string | null;
  } & {
      [key: string]: unknown;
  }) | null;
  /**
   * Assistant Id
   * @description Unique ID of the assistant to update
   */
  assistant_id?: string;
  /**
   * Caller Id Number
   * @description Custom caller ID number to display, e.g. +12345678901
   * @default null
   */
  caller_id_number: string | null;
  /**
   * Consent Recording
   * @description If true, ask caller for consent before recording
   * @default null
   */
  consent_recording: boolean | null;
  /**
   * Consent Text
   * @description Custom consent prompt text; required if consent_recording is true
   * @default null
   */
  consent_text: string | null;
  /**
   * External Webhook Url
   * Format: uri
   * @description Webhook URL to receive call events and transcripts
   * @default null
   */
  external_webhook_url: string | null;
  /**
   * Is Recording
   * @description Whether to record calls; if omitted retains current setting
   * @default null
   */
  is_recording: boolean | null;
  /**
   * Is Transcript Disabled
   * @description Disable transcription if true; defaults to false, transcripts will be generated unless explicitly disabled
   * @default null
   */
  is_transcript_disabled: boolean | null;
  /**
   * MaxDuration
   * @description Maximum call duration settings
   * @default null
   */
  max_duration: {
      /**
       * Seconds
       * @description Maximum call duration in seconds, must be non-negative
       * @default null
       */
      seconds: number | null;
  } | null;
  /**
   * Name
   * @description New name for the assistant
   * @default null
   */
  name: string | null;
  /**
   * Phone Number
   * @description Phone number for outbound calls, e.g. +15551234567
   * @default null
   */
  phone_number: string | null;
};

/**
 * Type of SYNTHFLOW_AI's SYNTHFLOW_AI_UPDATE_ASSISTANT tool output.
 */
type SYNTHFLOW_AI_UPDATE_ASSISTANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * DetailsData
       * @description Additional details about the assistant
       * @default null
       */
      details: {
          /**
           * Phone
           * @description Assistant's phone number
           * @default null
           */
          phone: string | null;
          /**
           * Voice
           * @description Assistant's voice configuration
           * @default null
           */
          voice: string | null;
      } | null;
      /**
       * ResponseData
       * @description Main response payload
       * @default null
       */
      response: {
          /**
           * Model Id
           * @description Updated assistant's model ID
           */
          model_id: string;
      } | null;
      /**
       * Status
       * @description Operation status, e.g. 'ok'
       * @default null
       */
      status: string | null;
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
 * Type map of all available tool input types for toolkit "SYNTHFLOW_AI".
 */
export type SYNTHFLOW_AI_TOOL_INPUTS = {
  CREATE_ASSISTANT: SYNTHFLOW_AI_CREATE_ASSISTANT_INPUT
  DELETE_ASSISTANT: SYNTHFLOW_AI_DELETE_ASSISTANT_INPUT
  GET_ASSISTANT: SYNTHFLOW_AI_GET_ASSISTANT_INPUT
  GET_KNOWLEDGE_BASE: SYNTHFLOW_AI_GET_KNOWLEDGE_BASE_INPUT
  GET_NUMBERS: SYNTHFLOW_AI_GET_NUMBERS_INPUT
  GET_TEAM: SYNTHFLOW_AI_GET_TEAM_INPUT
  LIST_ASSISTANTS: SYNTHFLOW_AI_LIST_ASSISTANTS_INPUT
  SYNTHFLOW_AI_CREATE_TEAM: SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM_INPUT
  SYNTHFLOW_AI_DELETE_TEAM: SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM_INPUT
  SYNTHFLOW_AI_UPDATE_TEAM: SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM_INPUT
  UPDATE_ASSISTANT: SYNTHFLOW_AI_UPDATE_ASSISTANT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SYNTHFLOW_AI".
 */
export type SYNTHFLOW_AI_TOOL_OUTPUTS = {
  CREATE_ASSISTANT: SYNTHFLOW_AI_CREATE_ASSISTANT_OUTPUT
  DELETE_ASSISTANT: SYNTHFLOW_AI_DELETE_ASSISTANT_OUTPUT
  GET_ASSISTANT: SYNTHFLOW_AI_GET_ASSISTANT_OUTPUT
  GET_KNOWLEDGE_BASE: SYNTHFLOW_AI_GET_KNOWLEDGE_BASE_OUTPUT
  GET_NUMBERS: SYNTHFLOW_AI_GET_NUMBERS_OUTPUT
  GET_TEAM: SYNTHFLOW_AI_GET_TEAM_OUTPUT
  LIST_ASSISTANTS: SYNTHFLOW_AI_LIST_ASSISTANTS_OUTPUT
  SYNTHFLOW_AI_CREATE_TEAM: SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM_OUTPUT
  SYNTHFLOW_AI_DELETE_TEAM: SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM_OUTPUT
  SYNTHFLOW_AI_UPDATE_TEAM: SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM_OUTPUT
  UPDATE_ASSISTANT: SYNTHFLOW_AI_UPDATE_ASSISTANT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SYNTHFLOW_AI toolkit.
 */
export const SYNTHFLOW_AI = {
  slug: "synthflow_ai",
  tools: {
    /**
     * Tool to create a new assistant. use when you need to initialize a custom voice assistant with specific prompt, llm, language, and voice settings.
     */
    CREATE_ASSISTANT: "SYNTHFLOW_AI_CREATE_ASSISTANT",
    /**
     * Tool to delete an existing ai assistant. use after confirming the assistant id. example: delete assistant with id 'assistant 123'.
     */
    DELETE_ASSISTANT: "SYNTHFLOW_AI_DELETE_ASSISTANT",
    /**
     * Tool to retrieve details of a specific ai assistant. use after confirming the assistant's id to fetch its configuration and metadata.
     */
    GET_ASSISTANT: "SYNTHFLOW_AI_GET_ASSISTANT",
    /**
     * Tool to retrieve details of a specific knowledge base by its id. use after confirming the knowledge base id to fetch its metadata.
     */
    GET_KNOWLEDGE_BASE: "SYNTHFLOW_AI_GET_KNOWLEDGE_BASE",
    /**
     * Tool to retrieve a list of phone numbers associated with a workspace. use when you need to fetch numbers assigned to your account for a given workspace.
     */
    GET_NUMBERS: "SYNTHFLOW_AI_GET_NUMBERS",
    /**
     * Tool to retrieve details of a specific team by its id. use after confirming the team exists to inspect its configuration.
     */
    GET_TEAM: "SYNTHFLOW_AI_GET_TEAM",
    /**
     * Tool to list all ai assistants associated with the account. use when you need to retrieve a paginated list of assistants.
     */
    LIST_ASSISTANTS: "SYNTHFLOW_AI_LIST_ASSISTANTS",
    /**
     * Tool to create a new team. use when you need to programmatically set up a synthflow ai assistant group with routing rules.
     */
    SYNTHFLOW_AI_CREATE_TEAM: "SYNTHFLOW_AI_SYNTHFLOW_AI_CREATE_TEAM",
    /**
     * Tool to delete an existing team. use when you need to remove a synthflow ai team after it's no longer needed. confirm the team id before calling.
     */
    SYNTHFLOW_AI_DELETE_TEAM: "SYNTHFLOW_AI_SYNTHFLOW_AI_DELETE_TEAM",
    /**
     * Tool to update an existing team. use after confirming the team exists and you have new configuration values.
     */
    SYNTHFLOW_AI_UPDATE_TEAM: "SYNTHFLOW_AI_SYNTHFLOW_AI_UPDATE_TEAM",
    /**
     * Tool to update an existing assistant’s settings. use after confirming the assistant exists. modify settings like name, phone, recording, webhook, or agent configuration.
     */
    UPDATE_ASSISTANT: "SYNTHFLOW_AI_UPDATE_ASSISTANT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SYNTHFLOW_AI".
 */
export type SYNTHFLOW_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SYNTHFLOW_AI".
 */
export type SYNTHFLOW_AI_TRIGGER_EVENTS = {}
