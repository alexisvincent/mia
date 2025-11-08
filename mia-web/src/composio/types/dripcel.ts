// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DRIPCEL's DRIPCEL_DELETE_CONTACT tool input.
 */
type DRIPCEL_DELETE_CONTACT_INPUT = {
  /**
   * Cell
   * @description The MSISDN (E.164 formatted) of the contact to delete
   */
  cell?: string;
};

/**
 * Type of DRIPCEL's DRIPCEL_DELETE_CONTACT tool output.
 */
type DRIPCEL_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the deletion failed
       * @default null
       */
      error: string | null;
      /**
       * Ok
       * @description True if the contact was successfully deleted
       */
      ok: boolean;
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
 * Type of DRIPCEL's DRIPCEL_DRIPCEL_GET_CAMPAIGNS tool input.
 */
type DRIPCEL_DRIPCEL_GET_CAMPAIGNS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >=1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page, must be >=1
   * @default null
   */
  pageSize: number | null;
  /**
   * Status
   * @description Filter campaigns by status (e.g., 'active', 'paused', 'completed')
   * @default null
   */
  status: string | null;
};

/**
 * Type of DRIPCEL's DRIPCEL_DRIPCEL_GET_CAMPAIGNS tool output.
 */
type DRIPCEL_DRIPCEL_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of campaign objects.
       */
      campaigns: {
          /**
           * Created At
           * @description Creation timestamp (ISO 8601).
           */
          createdAt: string;
          /**
           * Id
           * @description Unique campaign identifier.
           */
          id: string;
          /**
           * Name
           * @description Campaign name.
           */
          name: string;
          /**
           * Status
           * @description Current status of the campaign.
           */
          status: string;
          /**
           * Updated At
           * @description Last updated timestamp (ISO 8601).
           */
          updatedAt: string;
      }[];
      /**
       * Page
       * @description Current page number returned.
       */
      page: number;
      /**
       * Page Size
       * @description Number of items per page in the response.
       */
      pageSize: number;
      /**
       * Total
       * @description Total campaigns matching the query.
       */
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
 * Type of DRIPCEL's DRIPCEL_GET_BALANCE tool input.
 */
type DRIPCEL_GET_BALANCE_INPUT = object;

/**
 * Type of DRIPCEL's DRIPCEL_GET_BALANCE tool output.
 */
type DRIPCEL_GET_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance
       * @description The available balance in the account
       */
      balance: number;
      /**
       * Currency
       * @description Currency of the balance, ISO 4217 code
       */
      currency: string;
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
 * Type of DRIPCEL's DRIPCEL_GET_DELIVERIES tool input.
 */
type DRIPCEL_GET_DELIVERIES_INPUT = {
  /**
   * Cell
   * @description The MSISDN of the contact to query deliveries for
   * @default null
   */
  cell: string | null;
  /**
   * Customer Id
   * @description The unique ID of a particular send to query deliveries for
   * @default null
   */
  customerId: string | null;
};

/**
 * Type of DRIPCEL's DRIPCEL_GET_DELIVERIES tool output.
 */
type DRIPCEL_GET_DELIVERIES_OUTPUT = {
  /**
   * Data
   * @description List of delivery records
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Ok
   * @description Indicates if the request was successful
   */
  ok?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DRIPCEL's DRIPCEL_GET_EMAIL_TEMPLATES tool input.
 */
type DRIPCEL_GET_EMAIL_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of templates per page, must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order: asc or desc.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search keyword to filter template names.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field to sort by (e.g., 'created_at').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of DRIPCEL's DRIPCEL_GET_EMAIL_TEMPLATES tool output.
 */
type DRIPCEL_GET_EMAIL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of email templates.
   */
  data?: {
      /**
       * Body
       * @description Email content/body.
       */
      body: string;
      /**
       * Created At
       * @description Creation datetime in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique template identifier.
       */
      id: string;
      /**
       * Name
       * @description Template name.
       */
      name: string;
      /**
       * Subject
       * @description Email subject line.
       */
      subject: string;
      /**
       * Updated At
       * @description Last updated datetime in ISO 8601 format.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Number of results per page returned.
   */
  limit?: number;
  /**
   * Message
   * @description Optional status message.
   * @default null
   */
  message: string | null;
  /**
   * Page
   * @description Current page number returned.
   */
  page?: number;
  /**
   * Success
   * @description Indicates if the request was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of templates available.
   */
  total?: number;
};

/**
 * Type of DRIPCEL's DRIPCEL_GET_SALES tool input.
 */
type DRIPCEL_GET_SALES_INPUT = object;

/**
 * Type of DRIPCEL's DRIPCEL_GET_SALES tool output.
 */
type DRIPCEL_GET_SALES_OUTPUT = {
  /**
   * Data
   * @description List of sales records
   */
  data?: {
      /**
       * Campaign Id
       * @description ID of the campaign that generated the sale
       */
      campaign_id: string;
      /**
       * Cell
       * @description Phone number associated with the sale
       */
      cell: string;
      /**
       * Sale Value
       * @description Monetary value of the sale
       */
      saleValue: number;
      /**
       * Sold At
       * @description ISO 8601 timestamp when the sale occurred
       */
      soldAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Ok
   * @description Whether the API call was successful
   */
  ok?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DRIPCEL's DRIPCEL_POST_COMPLIANCE_SEND tool input.
 */
type DRIPCEL_POST_COMPLIANCE_SEND_INPUT = {
  /**
   * Campaign Id
   * @description Query against a given campaign's targeting criteria. If omitted, only global opt-outs will be checked.
   * @default null
   */
  campaign_id: string | null;
  /**
   * Cells
   * @description List of MSISDNs to verify compliance for.
   */
  cells?: string[];
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code of the phone numbers.
   */
  country?: string;
};

/**
 * Type of DRIPCEL's DRIPCEL_POST_COMPLIANCE_SEND tool output.
 */
type DRIPCEL_POST_COMPLIANCE_SEND_OUTPUT = {
  /**
   * ComplianceData
   * @description Returned when ok is true
   * @default null
   */
  data: {
      /**
       * Campaign Id
       * @description Echoes the campaign_id query parameter if provided
       * @default null
       */
      campaign_id: string | null;
      /**
       * Credits Used
       * @description The number of credits used for the check
       */
      credits_used: number;
      /**
       * Results
       * @description Per-number compliance outcomes
       */
      results: {
          /**
           * Can Send
           * @description Whether the cell number is authorised to be sent to
           */
          can_send: boolean;
          /**
           * Cell
           * @description The MSISDN that was checked
           */
          cell: string;
      }[];
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Ok
   * @description True if the check succeeded
   */
  ok?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DRIPCEL's DRIPCEL_POST_REPLIES_SEARCH tool input.
 */
type DRIPCEL_POST_REPLIES_SEARCH_INPUT = {
  /**
   * Message
   * @description Content of the reply message.
   * @default null
   */
  Message: string | null;
  /**
   * Msisdn
   * @description Sender phone number(s) in full international format.
   * @default null
   */
  Msisdn: string | null;
  /**
   * ReceivedFilter
   * @description Date-range filter for when the reply was received.
   * @default null
   */
  Received: {
      /**
       * $Gte
       * Format: date-time
       * @description ISO 8601 date lower bound ('from').
       * @default null
       */
      $gte: string | null;
      /**
       * $Lte
       * Format: date-time
       * @description ISO 8601 date upper bound ('to').
       * @default null
       */
      $lte: string | null;
  } | null;
  /**
   * User Reference
   * @description ID(s) of the send being replied to.
   * @default null
   */
  UserReference: string | null;
  /**
   *  Id
   * @description Reply ID or list of IDs to filter (OR).
   * @default null
   */
  _id: string | null;
  /**
   * Campaign Id
   * @description Campaign ID(s) that triggered the reply.
   * @default null
   */
  campaign_id: string | null;
  /**
   * Kind
   * @description Reply type(s): optIn, optOut, or unknown.
   * @default null
   * @enum {string|null}
   */
  kind: "optIn" | "optOut" | "unknown" | null;
};

/**
 * Type of DRIPCEL's DRIPCEL_POST_REPLIES_SEARCH tool output.
 */
type DRIPCEL_POST_REPLIES_SEARCH_OUTPUT = {
  /**
   * Data
   * @description List of matching replies.
   */
  data?: {
      /**
       * Message
       * @description Reply content.
       */
      Message: string;
      /**
       * Msisdn
       * @description Phone number that sent the reply.
       */
      Msisdn: string;
      /**
       * Received
       * Format: date-time
       * @description When the reply was received (ISO date-time).
       */
      Received: string;
      /**
       * User Reference
       * @description ID of the send being replied to.
       */
      UserReference: string;
      /**
       *  Id
       * @description Unique reply identifier.
       */
      _id: string;
      /**
       * Campaign Id
       * @description ID of campaign that triggered the send.
       */
      campaign_id: string;
      /**
       * Kind
       * @description Type of reply.
       * @enum {string}
       */
      kind: "optIn" | "optOut" | "unknown";
      /**
       * Updated At
       * Format: date-time
       * @description When the reply was last updated (ISO date-time).
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Ok
   * @description Whether the request succeeded.
   */
  ok?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DRIPCEL's DRIPCEL_PUT_CONTACT_TAG_ADD tool input.
 */
type DRIPCEL_PUT_CONTACT_TAG_ADD_INPUT = {
  /**
   * Cell
   * @description MSISDN (E.164 format) of the contact
   */
  cell?: unknown;
  /**
   * Create Missing Contact
   * @description If true, create the contact if it does not exist with the provided tags.
   * @default false
   */
  create_missing_contact: boolean | null;
  /**
   * Tag Ids
   * @description List of tag IDs to add. Preferred over tag names.
   * @default null
   */
  tag_ids: string[] | null;
  /**
   * Tags
   * @description List of tag names to add (less stable than IDs).
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of DRIPCEL's DRIPCEL_PUT_CONTACT_TAG_ADD tool output.
 */
type DRIPCEL_PUT_CONTACT_TAG_ADD_OUTPUT = {
  /**
   * Data
   * @description Result details with counts of matches and modifications.
   */
  data?: {
      /**
       * Matched Count
       * @description Number of contacts matched by this request.
       */
      matchedCount: number;
      /**
       * Modified Count
       * @description Number of contacts modified by this request.
       */
      modifiedCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Ok
   * @description Indicates whether the operation succeeded.
   */
  ok?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DRIPCEL's DRIPCEL_SEND_SMS tool input.
 */
type DRIPCEL_SEND_SMS_INPUT = {
  /**
   * Campaign Id
   * @description Optional campaign ID to associate the send.
   * @default null
   */
  campaignId: string | null;
  /**
   * Country
   * @description Country code for SMS delivery.
   * @enum {string}
   */
  country?: "ZA" | "NA" | "GB" | "AU" | "IE" | "IT" | "US";
  /**
   * Delivery Method
   * @description Delivery method to use for the SMS.
   * @default standard
   * @enum {string}
   */
  deliveryMethod: "reverse" | "standard" | "transactional";
  /**
   * Message
   * @description SMS text content, up to 1600 characters.
   */
  message?: string;
  /**
   * Schedule
   * @description Optional scheduled send time in 'YYYY-MM-DD HH:MM' (24-hour) format.
   * @default null
   */
  schedule: string | null;
  /**
   * Sender
   * @description Sender ID or phone number (alphanumeric up to 11 chars or E.164 format).
   */
  sender?: string;
  /**
   * To
   * @description Recipient's phone number in international E.164 format.
   */
  to?: string;
  /**
   * Type
   * @description SMS encoding type. Use 'unicode' if message contains non-GSM characters.
   * @default plain
   * @enum {string}
   */
  type: "plain" | "unicode";
};

/**
 * Type of DRIPCEL's DRIPCEL_SEND_SMS tool output.
 */
type DRIPCEL_SEND_SMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Human-readable description of the outcome.
       */
      message: string;
      /**
       * Msgid
       * @description Unique message ID assigned by Dripcel.
       */
      msgid: string;
      /**
       * Success
       * @description True if the message was accepted for delivery.
       */
      success: boolean;
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
 * Type map of all available tool input types for toolkit "DRIPCEL".
 */
export type DRIPCEL_TOOL_INPUTS = {
  DELETE_CONTACT: DRIPCEL_DELETE_CONTACT_INPUT
  DRIPCEL_GET_CAMPAIGNS: DRIPCEL_DRIPCEL_GET_CAMPAIGNS_INPUT
  GET_BALANCE: DRIPCEL_GET_BALANCE_INPUT
  GET_DELIVERIES: DRIPCEL_GET_DELIVERIES_INPUT
  GET_EMAIL_TEMPLATES: DRIPCEL_GET_EMAIL_TEMPLATES_INPUT
  GET_SALES: DRIPCEL_GET_SALES_INPUT
  POST_COMPLIANCE_SEND: DRIPCEL_POST_COMPLIANCE_SEND_INPUT
  POST_REPLIES_SEARCH: DRIPCEL_POST_REPLIES_SEARCH_INPUT
  PUT_CONTACT_TAG_ADD: DRIPCEL_PUT_CONTACT_TAG_ADD_INPUT
  SEND_SMS: DRIPCEL_SEND_SMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DRIPCEL".
 */
export type DRIPCEL_TOOL_OUTPUTS = {
  DELETE_CONTACT: DRIPCEL_DELETE_CONTACT_OUTPUT
  DRIPCEL_GET_CAMPAIGNS: DRIPCEL_DRIPCEL_GET_CAMPAIGNS_OUTPUT
  GET_BALANCE: DRIPCEL_GET_BALANCE_OUTPUT
  GET_DELIVERIES: DRIPCEL_GET_DELIVERIES_OUTPUT
  GET_EMAIL_TEMPLATES: DRIPCEL_GET_EMAIL_TEMPLATES_OUTPUT
  GET_SALES: DRIPCEL_GET_SALES_OUTPUT
  POST_COMPLIANCE_SEND: DRIPCEL_POST_COMPLIANCE_SEND_OUTPUT
  POST_REPLIES_SEARCH: DRIPCEL_POST_REPLIES_SEARCH_OUTPUT
  PUT_CONTACT_TAG_ADD: DRIPCEL_PUT_CONTACT_TAG_ADD_OUTPUT
  SEND_SMS: DRIPCEL_SEND_SMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DRIPCEL toolkit.
 */
export const DRIPCEL = {
  slug: "dripcel",
  tools: {
    /**
     * Tool to delete a contact by their cell number. use when you need to remove a contact from dripcel after confirming the msisdn.
     */
    DELETE_CONTACT: "DRIPCEL_DELETE_CONTACT",
    /**
     * Tool to retrieve a list of all campaigns. use after authenticating when you need to paginate or filter campaigns.
     */
    DRIPCEL_GET_CAMPAIGNS: "DRIPCEL_DRIPCEL_GET_CAMPAIGNS",
    /**
     * Tool to get current credit balance. use after authenticating and when you need to verify account balance before credit-consuming operations.
     */
    GET_BALANCE: "DRIPCEL_GET_BALANCE",
    /**
     * Tool to retrieve a list of deliveries. use when you need to fetch delivered messages optionally filtered by cell or customerid.
     */
    GET_DELIVERIES: "DRIPCEL_GET_DELIVERIES",
    /**
     * Tool to list all available email templates. use when you need to retrieve available templates before sending email campaigns.
     */
    GET_EMAIL_TEMPLATES: "DRIPCEL_GET_EMAIL_TEMPLATES",
    /**
     * Tool to retrieve a list of all sales. use when you need comprehensive sales data for reporting or analytics.
     */
    GET_SALES: "DRIPCEL_GET_SALES",
    /**
     * Tool to check a list of cell numbers against campaign targeting criteria. use when ensuring suppliers comply with your campaign rules before sending messages.
     */
    POST_COMPLIANCE_SEND: "DRIPCEL_POST_COMPLIANCE_SEND",
    /**
     * Tool to search replies based on filters. use when you need to find replies by id, campaign, date range, or content.
     */
    POST_REPLIES_SEARCH: "DRIPCEL_POST_REPLIES_SEARCH",
    /**
     * Tool to add tags to a contact. use when you need to assign tag ids or tag names to an existing contact by msisdn. set create missing contact=true to auto-create the contact if it does not exist.
     */
    PUT_CONTACT_TAG_ADD: "DRIPCEL_PUT_CONTACT_TAG_ADD",
    /**
     * Tool to send a single sms to a contact. use when you need to deliver a targeted message immediately or schedule it for later.
     */
    SEND_SMS: "DRIPCEL_SEND_SMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DRIPCEL".
 */
export type DRIPCEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DRIPCEL".
 */
export type DRIPCEL_TRIGGER_EVENTS = {}
