// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOLNA's BOLNA_DELETE_AGENT_BY_ID tool input.
 */
type BOLNA_DELETE_AGENT_BY_ID_INPUT = {
  /**
   * Agent Id
   * @description Agent Id
   */
  agent_id?: string;
};

/**
 * Type of BOLNA's BOLNA_DELETE_AGENT_BY_ID tool output.
 */
type BOLNA_DELETE_AGENT_BY_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_DELETE_BATCH_BY_ID tool input.
 */
type BOLNA_DELETE_BATCH_BY_ID_INPUT = {
  /**
   * Batch Id
   * @description The ID of the batch
   */
  batch_id?: string;
};

/**
 * Type of BOLNA's BOLNA_DELETE_BATCH_BY_ID tool output.
 */
type BOLNA_DELETE_BATCH_BY_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID tool input.
 */
type BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID_INPUT = {
  /**
   * Agent Id
   * @description The ID of the agent
   */
  agent_id?: string;
};

/**
 * Type of BOLNA's BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID tool output.
 */
type BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_GET_ALL_AGENTS tool input.
 */
type BOLNA_GET_ALL_AGENTS_INPUT = object;

/**
 * Type of BOLNA's BOLNA_GET_ALL_AGENTS tool output.
 */
type BOLNA_GET_ALL_AGENTS_OUTPUT = {
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
 * Type of BOLNA's BOLNA_GET_ALL_PHONE_NUMBERS tool input.
 */
type BOLNA_GET_ALL_PHONE_NUMBERS_INPUT = object;

/**
 * Type of BOLNA's BOLNA_GET_ALL_PHONE_NUMBERS tool output.
 */
type BOLNA_GET_ALL_PHONE_NUMBERS_OUTPUT = {
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
 * Type of BOLNA's BOLNA_GET_EXECUTION_BY_ID tool input.
 */
type BOLNA_GET_EXECUTION_BY_ID_INPUT = {
  /**
   * Execution Id
   * @description The unique `execution_id`
   */
  execution_id?: string;
};

/**
 * Type of BOLNA's BOLNA_GET_EXECUTION_BY_ID tool output.
 */
type BOLNA_GET_EXECUTION_BY_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT tool input.
 */
type BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT_INPUT = {
  /**
   * Agent Id
   * Format: uuid
   * @description Agent `id` which will initiate the outbound call
   */
  agent_id?: string;
  /**
   * From Phone Number
   * @description Phone number of the sender alongwith country code (in [E.164](https://en.wikipedia.org/wiki/E.164) format)
   */
  from_phone_number?: string;
  /**
   * Recipient Phone Number
   * @description Phone number of the recipient alongwith country code (in [E.164](https://en.wikipedia.org/wiki/E.164) format)
   */
  recipient_phone_number?: string;
  /**
   * User Data
   * @description Additional user dynamic variables as defined in the agent prompt
   */
  user_data?: {
      [key: string]: unknown;
  };
};

/**
 * Type of BOLNA's BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT tool output.
 */
type BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT_OUTPUT = {
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
 * Type of BOLNA's BOLNA_RETRIEVE_AGENT_BY_ID tool input.
 */
type BOLNA_RETRIEVE_AGENT_BY_ID_INPUT = {
  /**
   * Agent Id
   * @description Agent Id
   */
  agent_id?: string;
};

/**
 * Type of BOLNA's BOLNA_RETRIEVE_AGENT_BY_ID tool output.
 */
type BOLNA_RETRIEVE_AGENT_BY_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS tool input.
 */
type BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS_INPUT = {
  /**
   * Agent Id
   * @description The unique `id` of the agent
   */
  agent_id?: string;
  /**
   * Execution Id
   * @description The unique `execution_id` by the agent
   */
  execution_id?: string;
};

/**
 * Type of BOLNA's BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS tool output.
 */
type BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS_OUTPUT = {
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
 * Type of BOLNA's BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS tool input.
 */
type BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS_INPUT = {
  /**
   * Agent Id
   * @description The unique `id` of the agent
   */
  agent_id?: string;
};

/**
 * Type of BOLNA's BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS tool output.
 */
type BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS_OUTPUT = {
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
 * Type of BOLNA's BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID tool input.
 */
type BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID_INPUT = {
  /**
   * Batch Id
   * @description The ID of the batch
   */
  batch_id?: string;
};

/**
 * Type of BOLNA's BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID tool output.
 */
type BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_RETRIEVE_BATCH_EXECUTION_LIST tool input.
 */
type BOLNA_RETRIEVE_BATCH_EXECUTION_LIST_INPUT = {
  /**
   * Batch Id
   * @description The ID of the batch
   */
  batch_id?: string;
};

/**
 * Type of BOLNA's BOLNA_RETRIEVE_BATCH_EXECUTION_LIST tool output.
 */
type BOLNA_RETRIEVE_BATCH_EXECUTION_LIST_OUTPUT = {
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
 * Type of BOLNA's BOLNA_SCHEDULE_BATCH_BY_ID tool input.
 */
type BOLNA_SCHEDULE_BATCH_BY_ID_INPUT = {
  /**
   * Batch Id
   * @description The ID of the batch
   */
  batch_id?: string;
  /**
   * Scheduled At
   * @description Scheduled At
   */
  scheduled_at?: string;
};

/**
 * Type of BOLNA's BOLNA_SCHEDULE_BATCH_BY_ID tool output.
 */
type BOLNA_SCHEDULE_BATCH_BY_ID_OUTPUT = {
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
 * Type of BOLNA's BOLNA_SETUP_INBOUND_CALL_FOR_AGENT tool input.
 */
type BOLNA_SETUP_INBOUND_CALL_FOR_AGENT_INPUT = {
  /**
   * Agent Id
   * Format: uuid
   * @description Agent `id` which will initiate the inbound call. Please make sure that the agent"s Telephony provider is set as Twilio
   */
  agent_id?: string;
  /**
   * Phone Number Id
   * Format: uuid
   * @description Telephone number `id` from [Phone number list API](/api-reference/phone-numbers/get_all)
   */
  phone_number_id?: string;
};

/**
 * Type of BOLNA's BOLNA_SETUP_INBOUND_CALL_FOR_AGENT tool output.
 */
type BOLNA_SETUP_INBOUND_CALL_FOR_AGENT_OUTPUT = {
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
 * Type of BOLNA's BOLNA_STOP_BATCH_BY_ID tool input.
 */
type BOLNA_STOP_BATCH_BY_ID_INPUT = {
  /**
   * Batch Id
   * @description The ID of the batch
   */
  batch_id?: string;
};

/**
 * Type of BOLNA's BOLNA_STOP_BATCH_BY_ID tool output.
 */
type BOLNA_STOP_BATCH_BY_ID_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "BOLNA".
 */
export type BOLNA_TOOL_INPUTS = {
  DELETE_AGENT_BY_ID: BOLNA_DELETE_AGENT_BY_ID_INPUT
  DELETE_BATCH_BY_ID: BOLNA_DELETE_BATCH_BY_ID_INPUT
  FETCH_ALL_BATCHES_BY_AGENT_ID: BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID_INPUT
  GET_ALL_AGENTS: BOLNA_GET_ALL_AGENTS_INPUT
  GET_ALL_PHONE_NUMBERS: BOLNA_GET_ALL_PHONE_NUMBERS_INPUT
  GET_EXECUTION_BY_ID: BOLNA_GET_EXECUTION_BY_ID_INPUT
  MAKE_A_PHONE_CALL_FROM_AGENT: BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT_INPUT
  RETRIEVE_AGENT_BY_ID: BOLNA_RETRIEVE_AGENT_BY_ID_INPUT
  RETRIEVE_AGENT_EXECUTION_DETAILS: BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS_INPUT
  RETRIEVE_AGENT_EXECUTION_STATUS: BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS_INPUT
  RETRIEVE_BATCH_DETAILS_BY_ID: BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID_INPUT
  RETRIEVE_BATCH_EXECUTION_LIST: BOLNA_RETRIEVE_BATCH_EXECUTION_LIST_INPUT
  SCHEDULE_BATCH_BY_ID: BOLNA_SCHEDULE_BATCH_BY_ID_INPUT
  SETUP_INBOUND_CALL_FOR_AGENT: BOLNA_SETUP_INBOUND_CALL_FOR_AGENT_INPUT
  STOP_BATCH_BY_ID: BOLNA_STOP_BATCH_BY_ID_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOLNA".
 */
export type BOLNA_TOOL_OUTPUTS = {
  DELETE_AGENT_BY_ID: BOLNA_DELETE_AGENT_BY_ID_OUTPUT
  DELETE_BATCH_BY_ID: BOLNA_DELETE_BATCH_BY_ID_OUTPUT
  FETCH_ALL_BATCHES_BY_AGENT_ID: BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID_OUTPUT
  GET_ALL_AGENTS: BOLNA_GET_ALL_AGENTS_OUTPUT
  GET_ALL_PHONE_NUMBERS: BOLNA_GET_ALL_PHONE_NUMBERS_OUTPUT
  GET_EXECUTION_BY_ID: BOLNA_GET_EXECUTION_BY_ID_OUTPUT
  MAKE_A_PHONE_CALL_FROM_AGENT: BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT_OUTPUT
  RETRIEVE_AGENT_BY_ID: BOLNA_RETRIEVE_AGENT_BY_ID_OUTPUT
  RETRIEVE_AGENT_EXECUTION_DETAILS: BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS_OUTPUT
  RETRIEVE_AGENT_EXECUTION_STATUS: BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS_OUTPUT
  RETRIEVE_BATCH_DETAILS_BY_ID: BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID_OUTPUT
  RETRIEVE_BATCH_EXECUTION_LIST: BOLNA_RETRIEVE_BATCH_EXECUTION_LIST_OUTPUT
  SCHEDULE_BATCH_BY_ID: BOLNA_SCHEDULE_BATCH_BY_ID_OUTPUT
  SETUP_INBOUND_CALL_FOR_AGENT: BOLNA_SETUP_INBOUND_CALL_FOR_AGENT_OUTPUT
  STOP_BATCH_BY_ID: BOLNA_STOP_BATCH_BY_ID_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOLNA toolkit.
 */
export const BOLNA = {
  slug: "bolna",
  tools: {
    /**
     * Delete an agent
     */
    DELETE_AGENT_BY_ID: "BOLNA_DELETE_AGENT_BY_ID",
    /**
     * Delete a batch
     */
    DELETE_BATCH_BY_ID: "BOLNA_DELETE_BATCH_BY_ID",
    /**
     * List all batches for agent
     */
    FETCH_ALL_BATCHES_BY_AGENT_ID: "BOLNA_FETCH_ALL_BATCHES_BY_AGENT_ID",
    /**
     * List all agents
     */
    GET_ALL_AGENTS: "BOLNA_GET_ALL_AGENTS",
    /**
     * List all phone numbers for your account
     */
    GET_ALL_PHONE_NUMBERS: "BOLNA_GET_ALL_PHONE_NUMBERS",
    /**
     * Retrieve specific execution by `execution id`
     */
    GET_EXECUTION_BY_ID: "BOLNA_GET_EXECUTION_BY_ID",
    /**
     * Initiate calls
     */
    MAKE_A_PHONE_CALL_FROM_AGENT: "BOLNA_MAKE_A_PHONE_CALL_FROM_AGENT",
    /**
     * Retrieve an agent
     */
    RETRIEVE_AGENT_BY_ID: "BOLNA_RETRIEVE_AGENT_BY_ID",
    /**
     * Retrieve specific execution by an agent
     */
    RETRIEVE_AGENT_EXECUTION_DETAILS: "BOLNA_RETRIEVE_AGENT_EXECUTION_DETAILS",
    /**
     * Retrieve all executions by an agent
     */
    RETRIEVE_AGENT_EXECUTION_STATUS: "BOLNA_RETRIEVE_AGENT_EXECUTION_STATUS",
    /**
     * Retrieve a batch
     */
    RETRIEVE_BATCH_DETAILS_BY_ID: "BOLNA_RETRIEVE_BATCH_DETAILS_BY_ID",
    /**
     * Retrieve all executions from a batch
     */
    RETRIEVE_BATCH_EXECUTION_LIST: "BOLNA_RETRIEVE_BATCH_EXECUTION_LIST",
    /**
     * Schedule a batch for calling via agent
     */
    SCHEDULE_BATCH_BY_ID: "BOLNA_SCHEDULE_BATCH_BY_ID",
    /**
     * Add agent for inbound calls
     */
    SETUP_INBOUND_CALL_FOR_AGENT: "BOLNA_SETUP_INBOUND_CALL_FOR_AGENT",
    /**
     * Stop a running batch
     */
    STOP_BATCH_BY_ID: "BOLNA_STOP_BATCH_BY_ID",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOLNA".
 */
export type BOLNA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOLNA".
 */
export type BOLNA_TRIGGER_EVENTS = {}
