// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCUPOST's DOCUPOST_SEND_LETTER tool input.
 */
type DOCUPOST_SEND_LETTER_INPUT = {
  /**
   * Color
   * @description Print in color (default: false)
   * @default false
   */
  color: boolean;
  /**
   * Delivery Type
   * @description Mail class; one of 'first_class', 'standard', or 'priority'
   * @default null
   * @enum {string|null}
   */
  delivery_type: "first_class" | "standard" | "priority" | null;
  /**
   * Duplex
   * @description Double-sided printing (default: false)
   * @default false
   */
  duplex: boolean;
  /**
   * File
   * Format: binary
   * @description Binary PDF data (alternative to file_url); if provided, will be sent as multipart file
   * @default null
   */
  file: string | null;
  /**
   * File Url
   * Format: uri
   * @description Public URL of the PDF document to mail
   */
  file_url?: string;
  /**
   * From Address
   * @description Sender's address; defaults to account address if omitted
   * @default null
   */
  from_address: string | null;
  /**
   * From Name
   * @description Sender's full name; defaults to account identity if omitted
   * @default null
   */
  from_name: string | null;
  /**
   * Letter Id
   * @description Client-provided unique identifier for idempotency
   * @default null
   */
  letter_id: string | null;
  /**
   * Return Envelope
   * @description Include a return envelope (default: false)
   * @default false
   */
  return_envelope: boolean;
  /**
   * Scheduled Send Date
   * @description Scheduled send date in YYYY-MM-DD (omit for ASAP)
   * @default null
   */
  scheduled_send_date: string | null;
  /**
   * Test
   * @description Test mode: letter will not actually be mailed (default: false)
   * @default false
   */
  test: boolean;
  /**
   * To Address
   * @description Recipient's mailing address (street, city, state, zip)
   */
  to_address?: string;
  /**
   * To Name
   * @description Recipient's full name
   */
  to_name?: string;
};

/**
 * Type of DOCUPOST's DOCUPOST_SEND_LETTER tool output.
 */
type DOCUPOST_SEND_LETTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Letter Id
       * @description Unique identifier for the created letter
       * @default null
       */
      letter_id: string | null;
      /**
       * Message
       * @description Additional details or error message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if DocuPost accepted the request
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
 * Type of DOCUPOST's DOCUPOST_SEND_POSTCARD tool input.
 */
type DOCUPOST_SEND_POSTCARD_INPUT = {
  /**
   * Back Image
   * Format: uri
   * @description Publicly accessible URL for the postcard’s back-side image
   */
  back_image?: string;
  /**
   * From Address1
   * @description Sender’s street address
   */
  from_address1?: string;
  /**
   * From City
   * @description Sender’s city
   */
  from_city?: string;
  /**
   * From Name
   * @description Sender’s full name or company
   */
  from_name?: string;
  /**
   * From State
   * @description Sender’s state (2-letter code)
   */
  from_state?: string;
  /**
   * From Zip
   * @description Sender’s ZIP/postal code
   */
  from_zip?: string;
  /**
   * Front Image
   * Format: uri
   * @description Publicly accessible URL for the postcard’s front-side image
   */
  front_image?: string;
  /**
   * To Address1
   * @description Recipient’s street address
   */
  to_address1?: string;
  /**
   * To City
   * @description Recipient’s city
   */
  to_city?: string;
  /**
   * To Name
   * @description Recipient’s full name
   */
  to_name?: string;
  /**
   * To State
   * @description Recipient’s state (2-letter code)
   */
  to_state?: string;
  /**
   * To Zip
   * @description Recipient’s ZIP/postal code
   */
  to_zip?: string;
};

/**
 * Type of DOCUPOST's DOCUPOST_SEND_POSTCARD tool output.
 */
type DOCUPOST_SEND_POSTCARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional response message or error details
       * @default null
       */
      message: string | null;
      /**
       * Postcard Id
       * @description Unique identifier of the created postcard
       * @default null
       */
      postcard_id: string | null;
      /**
       * Status
       * @description API call status, e.g., 'success' or 'error'
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
 * Type map of all available tool input types for toolkit "DOCUPOST".
 */
export type DOCUPOST_TOOL_INPUTS = {
  SEND_LETTER: DOCUPOST_SEND_LETTER_INPUT
  SEND_POSTCARD: DOCUPOST_SEND_POSTCARD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCUPOST".
 */
export type DOCUPOST_TOOL_OUTPUTS = {
  SEND_LETTER: DOCUPOST_SEND_LETTER_OUTPUT
  SEND_POSTCARD: DOCUPOST_SEND_POSTCARD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCUPOST toolkit.
 */
export const DOCUPOST = {
  slug: "docupost",
  tools: {
    /**
     * Tool to send a letter via u.s. mail with specified recipient, sender, and pdf. use after confirming recipient and document details. example: send letter(to name='john doe', to address='123 main st, ...', file url='https://...')
     */
    SEND_LETTER: "DOCUPOST_SEND_LETTER",
    /**
     * Tool to send a postcard via u.s. mail with specified recipient, sender, and front/back images. use after confirming recipient addresses and design urls. example: send postcard(to name='john doe', ..., front image='https://...', back image='https://...')
     */
    SEND_POSTCARD: "DOCUPOST_SEND_POSTCARD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCUPOST".
 */
export type DOCUPOST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCUPOST".
 */
export type DOCUPOST_TRIGGER_EVENTS = {}
