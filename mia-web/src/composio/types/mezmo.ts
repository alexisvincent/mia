// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MEZMO's MEZMO_DELETE_PIPELINE_ALERT tool input.
 */
type MEZMO_DELETE_PIPELINE_ALERT_INPUT = {
  /**
   * Alert Id
   * @description Unique identifier of the alert to delete
   */
  alert_id?: string;
  /**
   * Component Id
   * @description Unique identifier of the component containing the alert
   */
  component_id?: string;
  /**
   * Component Kind
   * @description Type of component within the pipeline (e.g., source, transform, sink)
   * @enum {string}
   */
  component_kind?: "source" | "transform" | "sink";
  /**
   * Pipeline Id
   * @description Unique identifier of the pipeline containing the component
   */
  pipeline_id?: string;
};

/**
 * Type of MEZMO's MEZMO_DELETE_PIPELINE_ALERT tool output.
 */
type MEZMO_DELETE_PIPELINE_ALERT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Error message if deletion failed (e.g., alert not found)
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the pipeline component alert was deleted successfully, false otherwise
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
 * Type of MEZMO's MEZMO_INGEST_LOGS tool input.
 */
type MEZMO_INGEST_LOGS_INPUT = {
  /**
   * Hostname
   * @description Name of the host sending the logs
   */
  hostname?: string;
  /**
   * Logs
   * @description Array of log event objects (JSON-serializable) to ingest.
   */
  logs?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of MEZMO's MEZMO_INGEST_LOGS tool output.
 */
type MEZMO_INGEST_LOGS_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "MEZMO".
 */
export type MEZMO_TOOL_INPUTS = {
  DELETE_PIPELINE_ALERT: MEZMO_DELETE_PIPELINE_ALERT_INPUT
  INGEST_LOGS: MEZMO_INGEST_LOGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MEZMO".
 */
export type MEZMO_TOOL_OUTPUTS = {
  DELETE_PIPELINE_ALERT: MEZMO_DELETE_PIPELINE_ALERT_OUTPUT
  INGEST_LOGS: MEZMO_INGEST_LOGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MEZMO toolkit.
 */
export const MEZMO = {
  slug: "mezmo",
  tools: {
    /**
     * Tool to delete an alert for a specific component within a pipeline. use after confirming pipeline id, component kind, component id, and alert id.
     */
    DELETE_PIPELINE_ALERT: "MEZMO_DELETE_PIPELINE_ALERT",
    /**
     * Tool to ingest log events to mezmo. use when sending structured logs from a host to mezmo log analysis.
     */
    INGEST_LOGS: "MEZMO_INGEST_LOGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MEZMO".
 */
export type MEZMO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MEZMO".
 */
export type MEZMO_TRIGGER_EVENTS = {}
