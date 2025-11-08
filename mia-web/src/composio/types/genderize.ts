// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GENDERIZE's GENDERIZE_PREDICT_GENDER tool input.
 */
type GENDERIZE_PREDICT_GENDER_INPUT = {
  /**
   * Apikey
   * @description API key for higher rate limits.
   * @default null
   */
  apikey: string | null;
  /**
   * Country Id
   * @description ISO 3166-1 alpha-2 country code to localize prediction (e.g., 'US').
   * @default null
   */
  country_id: string | null;
  /**
   * Name
   * @description First name to classify. Must be a single given name.
   */
  name?: string;
};

/**
 * Type of GENDERIZE's GENDERIZE_PREDICT_GENDER tool output.
 */
type GENDERIZE_PREDICT_GENDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of data points used for the prediction.
       * @default null
       */
      count: number | null;
      /**
       * Error
       * @description Error message if the request failed.
       * @default null
       */
      error: string | null;
      /**
       * Gender
       * @description Predicted gender ('male' or 'female').
       * @default null
       */
      gender: string | null;
      /**
       * Name
       * @description Processed name from the API.
       */
      name: string;
      /**
       * Probability
       * @description Prediction confidence, between 0.0 and 1.0.
       * @default null
       */
      probability: number | null;
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
 * Type of GENDERIZE's GENDERIZE_PREDICT_GENDER_BATCH tool input.
 */
type GENDERIZE_PREDICT_GENDER_BATCH_INPUT = {
  /**
   * Apikey
   * @description API key for higher rate limits.
   * @default null
   */
  apikey: string | null;
  /**
   * Country Id
   * @description ISO 3166-1 alpha-2 country code to localize predictions (applied to all names).
   * @default null
   */
  country_id: string | null;
  /**
   * Names
   * @description List of names to predict gender for (1-10 items).
   */
  names?: string[];
};

/**
 * Type of GENDERIZE's GENDERIZE_PREDICT_GENDER_BATCH tool output.
 */
type GENDERIZE_PREDICT_GENDER_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Predictions
       * @description List of gender prediction results.
       */
      predictions: {
          /**
           * Count
           * @description Number of data points used for the prediction.
           * @default null
           */
          count: number | null;
          /**
           * Country Id
           * @description Echoed ISO 3166-1 alpha-2 country code when supplied.
           * @default null
           */
          country_id: string | null;
          /**
           * Gender
           * @description Predicted gender ('male' or 'female').
           * @default null
           */
          gender: string | null;
          /**
           * Name
           * @description Processed name from the API.
           */
          name: string;
          /**
           * Probability
           * @description Prediction confidence between 0.0 and 1.0.
           * @default null
           */
          probability: number | null;
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
 * Type of GENDERIZE's GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED tool input.
 */
type GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED_INPUT = {
  /**
   * Apikey
   * @description API key for higher rate limits, if available.
   * @default null
   */
  apikey: string | null;
  /**
   * Country Id
   * @description ISO 3166-1 alpha-2 country code to localize predictions (e.g., 'US').
   * @default null
   */
  country_id: string | null;
  /**
   * Names
   * @description List of first names to predict genders for (1-10 names)
   */
  names?: string[];
};

/**
 * Type of GENDERIZE's GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED tool output.
 */
type GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of data points used for the prediction
       * @default null
       */
      count: number | null;
      /**
       * Gender
       * @description Predicted gender ('male' or 'female')
       * @default null
       */
      gender: string | null;
      /**
       * Name
       * @description Processed name that was predicted
       */
      name: string;
      /**
       * Probability
       * @description Prediction confidence, between 0.0 and 1.0
       * @default null
       */
      probability: number | null;
  }[];
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
 * Type map of all available tool input types for toolkit "GENDERIZE".
 */
export type GENDERIZE_TOOL_INPUTS = {
  PREDICT_GENDER: GENDERIZE_PREDICT_GENDER_INPUT
  PREDICT_GENDER_BATCH: GENDERIZE_PREDICT_GENDER_BATCH_INPUT
  PREDICT_GENDER_BATCH_LOCALIZED: GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GENDERIZE".
 */
export type GENDERIZE_TOOL_OUTPUTS = {
  PREDICT_GENDER: GENDERIZE_PREDICT_GENDER_OUTPUT
  PREDICT_GENDER_BATCH: GENDERIZE_PREDICT_GENDER_BATCH_OUTPUT
  PREDICT_GENDER_BATCH_LOCALIZED: GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GENDERIZE toolkit.
 */
export const GENDERIZE = {
  slug: "genderize",
  tools: {
    /**
     * Tool to predict gender from a given first name. Use when you need a quick gender estimation possibly localized by country code.
     */
    PREDICT_GENDER: "GENDERIZE_PREDICT_GENDER",
    /**
     * Tool to predict gender for multiple names in a single request. Use when batch gender predictions for several names at once.
     */
    PREDICT_GENDER_BATCH: "GENDERIZE_PREDICT_GENDER_BATCH",
    /**
     * Tool to predict genders for a batch of names with optional country localization. Use after gathering 1-10 first names when needing localized gender estimates by country.
     */
    PREDICT_GENDER_BATCH_LOCALIZED: "GENDERIZE_PREDICT_GENDER_BATCH_LOCALIZED",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GENDERIZE".
 */
export type GENDERIZE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GENDERIZE".
 */
export type GENDERIZE_TRIGGER_EVENTS = {}
