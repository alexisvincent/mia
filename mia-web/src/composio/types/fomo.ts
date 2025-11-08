// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FOMO's FOMO_GET_FOMO_EVENTS tool input.
 */
type FOMO_GET_FOMO_EVENTS_INPUT = object;

/**
 * Type of FOMO's FOMO_GET_FOMO_EVENTS tool output.
 */
type FOMO_GET_FOMO_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events from the Fomo application
       */
      events: {
          /**
           * City
           * @description City where the event occurred
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Two-letter country code
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description Timestamp when the event was created
           */
          created_at: string;
          /**
           * Email Address
           * @description Email address associated with the event
           * @default null
           */
          email_address: string | null;
          /**
           * Event Type Id
           * @description The template ID used for the event
           */
          event_type_id: string;
          /**
           * First Name
           * @description First name of the person in the event
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description The unique identifier of the event
           */
          id: string;
          /**
           * Image Url
           * Format: uri
           * @description URL of the image
           * @default null
           */
          image_url: string | null;
          /**
           * Title
           * @description The title of the event
           * @default null
           */
          title: string | null;
          /**
           * Url
           * Format: uri
           * @description URL associated with the event
           * @default null
           */
          url: string | null;
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
 * Type map of all available tool input types for toolkit "FOMO".
 */
export type FOMO_TOOL_INPUTS = {
  GET_FOMO_EVENTS: FOMO_GET_FOMO_EVENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FOMO".
 */
export type FOMO_TOOL_OUTPUTS = {
  GET_FOMO_EVENTS: FOMO_GET_FOMO_EVENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FOMO toolkit.
 */
export const FOMO = {
  slug: "fomo",
  tools: {
    /**
     * This tool retrieves a list of all events from your fomo application. the endpoint is self-contained and doesn't require any external resource ids, making it independently executable. authentication is handled through the api token.
     */
    GET_FOMO_EVENTS: "FOMO_GET_FOMO_EVENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FOMO".
 */
export type FOMO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FOMO".
 */
export type FOMO_TRIGGER_EVENTS = {}
