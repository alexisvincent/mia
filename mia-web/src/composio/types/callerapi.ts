// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CALLERAPI's CALLERAPI_GET_PHONE_NUMBER_INFORMATION tool input.
 */
type CALLERAPI_GET_PHONE_NUMBER_INFORMATION_INPUT = {
  /**
   * Hlr
   * @description Include HLR (Home Location Register) data; adds 1-3 seconds to response but incurs no extra cost.
   * @default false
   */
  hlr: boolean;
  /**
   * Phone
   * @description The phone number in E.164 format, e.g., '+16502530000'.
   */
  phone?: unknown;
};

/**
 * Type of CALLERAPI's CALLERAPI_GET_PHONE_NUMBER_INFORMATION tool output.
 */
type CALLERAPI_GET_PHONE_NUMBER_INFORMATION_OUTPUT = {
  /**
   * DataModel
   * @description Detailed phone number information
   * @default null
   */
  data: {
      /**
       * BusinessInfo
       * @description Business information details
       * @default null
       */
      business_info: {
          /**
           * Business Name
           * @description Name of the business
           * @default null
           */
          business_name: string | null;
          /**
           * Category
           * @description Business category
           * @default null
           */
          category: string | null;
          /**
           * City
           * @description Business city location
           * @default null
           */
          city: string | null;
          /**
           * Industry
           * @description Industry classification
           * @default null
           */
          industry: string | null;
          /**
           * State
           * @description Business state/province
           * @default null
           */
          state: string | null;
          /**
           * Verified
           * @description Whether the business is verified
           * @default null
           */
          verified: boolean | null;
      } | null;
      /**
       * CarrierInfo
       * @description Carrier information including HLR data
       * @default null
       */
      carrier_info: {
          /**
           * CountryInfo
           * @description Country information
           * @default null
           */
          country: {
              /**
               * Code
               * @description Country calling code
               * @default null
               */
              code: string | null;
              /**
               * Iso
               * @description Country ISO code
               * @default null
               */
              iso: string | null;
              /**
               * Name
               * @description Country name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NetworkInfo
           * @description Network details
           * @default null
           */
          network: {
              /**
               * Carrier
               * @description Current carrier name
               * @default null
               */
              carrier: string | null;
              /**
               * Ocn
               * @description Operating Company Number
               * @default null
               */
              ocn: string | null;
              /**
               * NetworkOriginal
               * @description Original carrier information
               * @default null
               */
              original: {
                  /**
                   * Carrier
                   * @description Original carrier name
                   * @default null
                   */
                  carrier: string | null;
                  /**
                   * Ocn
                   * @description Original Operating Company Number
                   * @default null
                   */
                  ocn: string | null;
                  /**
                   * Spid
                   * @description Original Service Provider ID
                   * @default null
                   */
                  spid: string | null;
              } | null;
              /**
               * Spid
               * @description Service Provider ID
               * @default null
               */
              spid: string | null;
              /**
               * Type
               * @description Network type (e.g., LANDLINE, MOBILE)
               * @default null
               */
              type: string | null;
          } | null;
          /**
           * NumberInfo
           * @description Number details
           * @default null
           */
          number: {
              /**
               * Landline
               * @description True if landline
               * @default null
               */
              landline: boolean | null;
              /**
               * Local Format
               * @description Local number format
               * @default null
               */
              local_format: string | null;
              /**
               * Lrn
               * @description Location Routing Number
               * @default null
               */
              lrn: string | null;
              /**
               * Mobile
               * @description True if mobile
               * @default null
               */
              mobile: boolean | null;
              /**
               * Msisdn
               * @description Full phone number as MSISDN
               * @default null
               */
              msisdn: string | null;
              /**
               * Ported
               * @description Whether number is ported
               * @default null
               */
              ported: boolean | null;
              /**
               * Reachable
               * @description Number reachability status
               * @default null
               */
              reachable: string | null;
              /**
               * Timezone
               * @description Time zone of the number
               * @default null
               */
              timezone: string | null;
              /**
               * Type
               * @description Line type (e.g., LANDLINE, MOBILE)
               * @default null
               */
              type: string | null;
              /**
               * Valid
               * @description Number validity status
               * @default null
               */
              valid: string | null;
          } | null;
      } | null;
      /**
       * Complaints
       * @description List of FTC complaints for the number
       * @default null
       */
      complaints: {
          /**
           * Consumer State
           * @description State where complaint originated
           * @default null
           */
          ConsumerState: string | null;
          /**
           * Created Date
           * @description When the complaint was filed (ISO 8601)
           * @default null
           */
          CreatedDate: string | null;
          /**
           * Recorded Message Or Robocall
           * @description Whether it was a robocall ('Y'/'N')
           * @default null
           */
          RecordedMessageOrRobocall: string | null;
          /**
           * Subject
           * @description Type of complaint
           * @default null
           */
          Subject: string | null;
          /**
           * Violation Date
           * @description When the violation occurred (ISO 8601)
           * @default null
           */
          ViolationDate: string | null;
      }[] | null;
      /**
       * Entity Type
       * @description Type of entity (BUSINESS, PERSONAL, UNKNOWN)
       * @default null
       */
      entity_type: string | null;
      /**
       * Is Spam
       * @description Whether the number is marked as spam
       * @default null
       */
      is_spam: boolean | null;
      /**
       * Phone
       * @description Phone number in E.164 format
       * @default null
       */
      phone: string | null;
      /**
       * Reputation
       * @description Overall reputation (SPAM, VERIFIED, UNKNOWN)
       * @default null
       */
      reputation: string | null;
      /**
       * Spam Score
       * @description Spam likelihood score (0-100)
       * @default null
       */
      spam_score: number | null;
      /**
       * Total Complaints
       * @description Total number of FTC complaints
       * @default null
       */
      total_complaints: number | null;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status ("success" indicates success)
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLERAPI's CALLERAPI_GET_USER_INFORMATION tool input.
 */
type CALLERAPI_GET_USER_INFORMATION_INPUT = object;

/**
 * Type of CALLERAPI's CALLERAPI_GET_USER_INFORMATION tool output.
 */
type CALLERAPI_GET_USER_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Left
       * @description Remaining credits for the current month
       */
      credits_left: number;
      /**
       * Credits Monthly
       * @description Total credits allocated monthly to the user
       */
      credits_monthly: number;
      /**
       * Credits Spent
       * @description Total number of credits spent by the user
       */
      credits_spent: number;
      /**
       * Email
       * @description Authenticated user's email address
       */
      email: string;
      /**
       * Status
       * @description Overall response status, expected 'success'
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
 * Type map of all available tool input types for toolkit "CALLERAPI".
 */
export type CALLERAPI_TOOL_INPUTS = {
  GET_PHONE_NUMBER_INFORMATION: CALLERAPI_GET_PHONE_NUMBER_INFORMATION_INPUT
  GET_USER_INFORMATION: CALLERAPI_GET_USER_INFORMATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CALLERAPI".
 */
export type CALLERAPI_TOOL_OUTPUTS = {
  GET_PHONE_NUMBER_INFORMATION: CALLERAPI_GET_PHONE_NUMBER_INFORMATION_OUTPUT
  GET_USER_INFORMATION: CALLERAPI_GET_USER_INFORMATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CALLERAPI toolkit.
 */
export const CALLERAPI = {
  slug: "callerapi",
  tools: {
    /**
     * Tool to retrieve detailed information about a specific phone number, including reputation, business and carrier details, and ftc complaints. use when the number is in e.164 format and set hlr=true to include hlr data (adds 1-3 seconds to response).
     */
    GET_PHONE_NUMBER_INFORMATION: "CALLERAPI_GET_PHONE_NUMBER_INFORMATION",
    /**
     * Tool to retrieve information about the authenticated user, including email and credit usage details. use after authentication to fetch credits spent, monthly allocation, and credits left.
     */
    GET_USER_INFORMATION: "CALLERAPI_GET_USER_INFORMATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CALLERAPI".
 */
export type CALLERAPI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CALLERAPI".
 */
export type CALLERAPI_TRIGGER_EVENTS = {}
