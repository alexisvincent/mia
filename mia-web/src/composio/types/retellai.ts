// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RETELLAI's RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS tool input.
 */
type RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS_INPUT = {
  /**
   * Area Code
   * @description Area code of the number to obtain. Format is a 3-digit integer, currently supporting only US area codes.
   */
  area_code?: number;
  /**
   * Inbound Agent Id
   * @description Unique id of agent to bind to the number. If null, this number would not accept inbound calls.
   */
  inbound_agent_id?: string;
  /**
   * Nickname
   * @description Nickname for the number, for reference only.
   */
  nickname?: string;
  /**
   * Outbound Agent Id
   * @description Unique id of agent to bind to the number. If null, this number would not initiate outbound calls without an agent id override.
   */
  outbound_agent_id?: string;
};

/**
 * Type of RETELLAI's RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS tool output.
 */
type RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL tool input.
 */
type RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL_INPUT = {
  /**
   * From Number
   * @description The number you own in E.164 format. Must be a Retell managed number.
   */
  from_number?: string;
  /**
   * Override Agent Id
   * @description For this particular call, override the agent used with this agent id. This does not bind the agent to this number, this is for one time override.
   */
  override_agent_id?: string;
  /**
   * To Number
   * @description The number you want to call, in E.164 format. Right now only US numbers are officially supported.
   */
  to_number?: string;
};

/**
 * Type of RETELLAI's RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL tool output.
 */
type RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_CREATE_A_NEW_WEB_CALL tool input.
 */
type RETELLAI_CREATE_A_NEW_WEB_CALL_INPUT = {
  /**
   * Agent Id
   * @description Unique id of agent used for the call. Your agent would contain the LLM Websocket url used for this call.
   */
  agent_id?: string;
};

/**
 * Type of RETELLAI's RETELLAI_CREATE_A_NEW_WEB_CALL tool output.
 */
type RETELLAI_CREATE_A_NEW_WEB_CALL_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_DELETE_PHONE_NUMBER tool input.
 */
type RETELLAI_DELETE_PHONE_NUMBER_INPUT = {
  /**
   * Phone Number
   * @description Phone Number
   */
  phone_number?: string;
};

/**
 * Type of RETELLAI's RETELLAI_DELETE_PHONE_NUMBER tool output.
 */
type RETELLAI_DELETE_PHONE_NUMBER_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_LIST_ALL_PHONE_NUMBERS tool input.
 */
type RETELLAI_LIST_ALL_PHONE_NUMBERS_INPUT = object;

/**
 * Type of RETELLAI's RETELLAI_LIST_ALL_PHONE_NUMBERS tool output.
 */
type RETELLAI_LIST_ALL_PHONE_NUMBERS_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_RETRIEVE_CALL_DETAILS tool input.
 */
type RETELLAI_RETRIEVE_CALL_DETAILS_INPUT = {
  /**
   * Filter  Criteria  After  End  Timestamp
   * @description Inclusive. Filter calls that end on or after this timestamp.
   */
  filter__criteria__after__end__timestamp?: number;
  /**
   * Filter  Criteria  After  Start  Timestamp
   * @description Inclusive. Filter calls that start on or after this timestamp.
   */
  filter__criteria__after__start__timestamp?: number;
  /**
   * Filter  Criteria  Agent  Id
   * @description Only retrieve calls that are made with specific agent(s).
   */
  filter__criteria__agent__id?: string[];
  /**
   * Filter  Criteria  Before  End  Timestamp
   * @description Exclusive. Filter calls that end before this timestamp.
   */
  filter__criteria__before__end__timestamp?: number;
  /**
   * Filter  Criteria  Before  Start  Timestamp
   * @description Exclusive. Filter calls that start before this timestamp.
   */
  filter__criteria__before__start__timestamp?: number;
  /**
   * Limit
   * @description Limit the number of calls returned.
   * @default 100
   */
  limit: number;
  /**
   * Pagination Key
   * @description The pagination key to continue fetching the next page of calls. Pagination key is represented by a call id here, and it"s exclusive (not included in the fetched calls). The last call id from the list calls is usually used as pagination key here. If not set, will start from the beginning.
   */
  pagination_key?: string;
  /**
   * Sort Order
   * @description The calls will be sorted by `start_timestamp`, whether to return the calls in ascending or descending order.
   * @default descending
   * @enum {string}
   */
  sort_order: "ascending" | "descending";
};

/**
 * Type of RETELLAI's RETELLAI_RETRIEVE_CALL_DETAILS tool output.
 */
type RETELLAI_RETRIEVE_CALL_DETAILS_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID tool input.
 */
type RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID_INPUT = {
  /**
   * Call Id
   * @description Call Id
   */
  call_id?: string;
};

/**
 * Type of RETELLAI's RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID tool output.
 */
type RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER tool input.
 */
type RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER_INPUT = {
  /**
   * Phone Number
   * @description Phone number in E.164 format (+country code and number with no spaces or special characters).
   */
  phone_number?: string;
};

/**
 * Type of RETELLAI's RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER tool output.
 */
type RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE tool input.
 */
type RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE_INPUT = {
  /**
   * Voice Id
   * @description Voice Id
   */
  voice_id?: string;
};

/**
 * Type of RETELLAI's RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE tool output.
 */
type RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE_OUTPUT = {
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
 * Type of RETELLAI's RETELLAI_UPDATE_PHONE_NUMBER tool input.
 */
type RETELLAI_UPDATE_PHONE_NUMBER_INPUT = {
  /**
   * Inbound Agent Id
   * @description Unique id of agent to bind to the number for inbound calls. If null, inbound calls are not accepted.
   */
  inbound_agent_id?: string;
  /**
   * Nickname
   * @description Nickname of the number for reference only.
   */
  nickname?: string;
  /**
   * Outbound Agent Id
   * @description Unique id of agent to bind to the number for outbound calls. If null, outbound calls cannot be initiated without override.
   */
  outbound_agent_id?: string;
  /**
   * Phone Number
   * @description Phone Number
   */
  phone_number?: string;
};

/**
 * Type of RETELLAI's RETELLAI_UPDATE_PHONE_NUMBER tool output.
 */
type RETELLAI_UPDATE_PHONE_NUMBER_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "RETELLAI".
 */
export type RETELLAI_TOOL_INPUTS = {
  BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS: RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS_INPUT
  CREATE_A_NEW_OUTBOUND_PHONE_CALL: RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL_INPUT
  CREATE_A_NEW_WEB_CALL: RETELLAI_CREATE_A_NEW_WEB_CALL_INPUT
  DELETE_PHONE_NUMBER: RETELLAI_DELETE_PHONE_NUMBER_INPUT
  LIST_ALL_PHONE_NUMBERS: RETELLAI_LIST_ALL_PHONE_NUMBERS_INPUT
  RETRIEVE_CALL_DETAILS: RETELLAI_RETRIEVE_CALL_DETAILS_INPUT
  RETRIEVE_CALL_DETAILS_BY_ID: RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID_INPUT
  RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER: RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER_INPUT
  RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE: RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE_INPUT
  UPDATE_PHONE_NUMBER: RETELLAI_UPDATE_PHONE_NUMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RETELLAI".
 */
export type RETELLAI_TOOL_OUTPUTS = {
  BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS: RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS_OUTPUT
  CREATE_A_NEW_OUTBOUND_PHONE_CALL: RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL_OUTPUT
  CREATE_A_NEW_WEB_CALL: RETELLAI_CREATE_A_NEW_WEB_CALL_OUTPUT
  DELETE_PHONE_NUMBER: RETELLAI_DELETE_PHONE_NUMBER_OUTPUT
  LIST_ALL_PHONE_NUMBERS: RETELLAI_LIST_ALL_PHONE_NUMBERS_OUTPUT
  RETRIEVE_CALL_DETAILS: RETELLAI_RETRIEVE_CALL_DETAILS_OUTPUT
  RETRIEVE_CALL_DETAILS_BY_ID: RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID_OUTPUT
  RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER: RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER_OUTPUT
  RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE: RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE_OUTPUT
  UPDATE_PHONE_NUMBER: RETELLAI_UPDATE_PHONE_NUMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RETELLAI toolkit.
 */
export const RETELLAI = {
  slug: "retellai",
  tools: {
    /**
     * This endpoint allows purchasing a new phone number with a specified area code and binding it to designated agents for inbound and outbound calls. it requires json with agent ids and area code. responses indicate the creation status or errors.
     */
    BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS: "RETELLAI_BUY_A_NEW_PHONE_NUMBER_BIND_AGENTS",
    /**
     * Initiate an outbound call by post to '/v2/create-phone-call'. requires 'from number' and 'to number' in e.164 format. optional overrides and metadata supported. on success, returns call details including type, status, and ids.
     */
    CREATE_A_NEW_OUTBOUND_PHONE_CALL: "RETELLAI_CREATE_A_NEW_OUTBOUND_PHONE_CALL",
    /**
     * The /v2/create-web-call endpoint creates a web call with a unique agent id, returning call details like type, token, call id, and status in json format, with a 201 response. optional metadata and variables can be included.
     */
    CREATE_A_NEW_WEB_CALL: "RETELLAI_CREATE_A_NEW_WEB_CALL",
    /**
     * Deletes an existing phone number identified by its e.164 format.
     */
    DELETE_PHONE_NUMBER: "RETELLAI_DELETE_PHONE_NUMBER",
    /**
     * Retrieves a list of all phone numbers associated with the account.
     */
    LIST_ALL_PHONE_NUMBERS: "RETELLAI_LIST_ALL_PHONE_NUMBERS",
    /**
     * The /v2/list-calls endpoint retrieves call records with filters (agent id, timestamps), offers sorting, pagination, and handles different responses (success, bad request, unauthorized, server error) in json format.
     */
    RETRIEVE_CALL_DETAILS: "RETELLAI_RETRIEVE_CALL_DETAILS",
    /**
     * Retrieve call details by id for web/phone calls, including type, agent id, status, timestamps, and web access token; covering responses from success to server errors.
     */
    RETRIEVE_CALL_DETAILS_BY_ID: "RETELLAI_RETRIEVE_CALL_DETAILS_BY_ID",
    /**
     * Fetches the details of a given phone number in e.164 format.
     */
    RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER: "RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_PHONE_NUMBER",
    /**
     * "access specific voice details including its name, provider, accent, gender, and a preview audio url using the unique voice id. parameters required."
     */
    RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE: "RETELLAI_RETRIEVE_DETAILS_OF_A_SPECIFIC_VOICE",
    /**
     * Updates the agent bound to a purchased phone number.
     */
    UPDATE_PHONE_NUMBER: "RETELLAI_UPDATE_PHONE_NUMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RETELLAI".
 */
export type RETELLAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RETELLAI".
 */
export type RETELLAI_TRIGGER_EVENTS = {}
