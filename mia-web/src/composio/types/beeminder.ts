// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BEEMINDER's BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER tool input.
 */
type BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER_INPUT = {
  /**
   * Redirect To Url
   * @description Fully qualified URL to redirect the user to after successful authentication. Must be URL-encoded.
   */
  redirect_to_url?: string;
  /**
   * Username
   * @description Beeminder username or 'me' to refer to the authenticated user
   * @default me
   */
  username: string;
};

/**
 * Type of BEEMINDER's BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER tool output.
 */
type BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Redirect Url
       * @description URL from the Location header to which the user is redirected.
       */
      redirect_url: string;
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
 * Type of BEEMINDER's BEEMINDER_CREATE_CHARGE tool input.
 */
type BEEMINDER_CREATE_CHARGE_INPUT = {
  /**
   * Amount
   * @description Amount to charge the user, in USD
   */
  amount?: number;
  /**
   * Dryrun
   * @description If true, returns the charge JSON without creating the charge
   * @default false
   */
  dryrun: boolean;
  /**
   * Note
   * @description Explanation for why the charge is made
   * @default null
   */
  note: string | null;
  /**
   * User Id
   * @description Beeminder username of the user to charge
   */
  user_id?: string;
};

/**
 * Type of BEEMINDER's BEEMINDER_CREATE_CHARGE tool output.
 */
type BEEMINDER_CREATE_CHARGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount charged, in USD
       */
      amount: number;
      /**
       * Id
       * @description Unique identifier for the charge
       */
      id: string;
      /**
       * Note
       * @description Note associated with the charge
       * @default null
       */
      note: string | null;
      /**
       * Username
       * @description Beeminder username of the charged user
       */
      username: string;
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
 * Type of BEEMINDER's BEEMINDER_GET_ALL_GOALS tool input.
 */
type BEEMINDER_GET_ALL_GOALS_INPUT = {
  /**
   * Username
   * @description Beeminder username whose goals to retrieve. Use 'me' for the authenticated user.
   */
  username?: string;
};

/**
 * Type of BEEMINDER's BEEMINDER_GET_ALL_GOALS tool output.
 */
type BEEMINDER_GET_ALL_GOALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Goal Type
       * @description Type of the goal (e.g., hustler, fatloser).
       */
      goal_type: string;
      /**
       * Goaldate
       * @description Unix timestamp of the goal's target date (0 if none).
       */
      goaldate: number;
      /**
       * Goalval
       * @description Target value for the goal (null if inferred).
       * @default null
       */
      goalval: number | null;
      /**
       * Graph Url
       * @description URL of the goal's graph image.
       */
      graph_url: string;
      /**
       * Losedate
       * @description Unix timestamp when the goal will derail if no new data.
       */
      losedate: number;
      /**
       * Queued
       * @description Whether the graph is queued for update.
       */
      queued: boolean;
      /**
       * Rate
       * @description Slope of the bright-red line.
       */
      rate: number;
      /**
       * Slug
       * @description Goal's slug identifier.
       */
      slug: string;
      /**
       * Svg Url
       * @description URL of the goal's SVG graph.
       */
      svg_url: string;
      /**
       * Thumb Url
       * @description URL of the goal's thumbnail image.
       */
      thumb_url: string;
      /**
       * Title
       * @description Human-readable title of the goal.
       */
      title: string;
      /**
       * Updated At
       * @description Unix timestamp of the last update to this goal.
       */
      updated_at: number;
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
 * Type of BEEMINDER's BEEMINDER_GET_ARCHIVED_GOALS tool input.
 */
type BEEMINDER_GET_ARCHIVED_GOALS_INPUT = {
  /**
   * Username
   * @description Beeminder username whose archived goals to retrieve. Use 'me' for the authenticated user.
   */
  username?: string;
};

/**
 * Type of BEEMINDER's BEEMINDER_GET_ARCHIVED_GOALS tool output.
 */
type BEEMINDER_GET_ARCHIVED_GOALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Goal Type
       * @description Type of the goal (e.g., hustler, fatloser).
       */
      goal_type: string;
      /**
       * Goaldate
       * @description Unix timestamp of the goal's target date (0 if none).
       */
      goaldate: number;
      /**
       * Goalval
       * @description Target value for the goal (null if inferred).
       * @default null
       */
      goalval: number | null;
      /**
       * Graph Url
       * @description URL of the goal's graph image.
       */
      graph_url: string;
      /**
       * Losedate
       * @description Unix timestamp when the goal will derail if no new data.
       */
      losedate: number;
      /**
       * Queued
       * @description Whether the graph is queued for update.
       */
      queued: boolean;
      /**
       * Rate
       * @description Slope of the bright-red line.
       */
      rate: number;
      /**
       * Slug
       * @description Goal's slug identifier.
       */
      slug: string;
      /**
       * Svg Url
       * @description URL of the goal's SVG graph.
       */
      svg_url: string;
      /**
       * Thumb Url
       * @description URL of the goal's thumbnail image.
       */
      thumb_url: string;
      /**
       * Title
       * @description Human-readable title of the goal.
       */
      title: string;
      /**
       * Updated At
       * @description Unix timestamp of the last update to this goal.
       */
      updated_at: number;
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
 * Type of BEEMINDER's BEEMINDER_GET_USER_INFORMATION tool input.
 */
type BEEMINDER_GET_USER_INFORMATION_INPUT = {
  /**
   * Associations
   * @description Whether to include full goal and datapoint objects instead of only slugs.
   * @default false
   */
  associations: boolean;
  /**
   * Datapoints Count
   * @description Number of most recent datapoints to return for each goal.
   * @default null
   */
  datapoints_count: number | null;
  /**
   * Diff Since
   * @description Unix timestamp in seconds; return only goals and datapoints created or updated since this time.
   * @default null
   */
  diff_since: number | null;
  /**
   * Skinny
   * @description When used with diff_since, return slim goal attributes and only the most recent datapoint for each goal.
   * @default false
   */
  skinny: boolean;
  /**
   * Username
   * @description Beeminder username to retrieve information for.
   */
  username?: string;
};

/**
 * Type of BEEMINDER's BEEMINDER_GET_USER_INFORMATION tool output.
 */
type BEEMINDER_GET_USER_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deadbeat
       * @description True if the user's payment info is out of date, or an attempted payment has failed.
       */
      deadbeat: boolean;
      /**
       * Deleted Goals
       * @description An array of objects each with an 'id' of a deleted goal, returned only if diff_since is set.
       * @default null
       */
      deleted_goals: {
          /**
           * Id
           * @description ID of a deleted goal.
           */
          id: number;
      }[] | null;
      /**
       * Goals
       * @description A list of slugs for each of the user's goals.
       */
      goals: string[];
      /**
       * Timezone
       * @description The user's timezone.
       */
      timezone: string;
      /**
       * Updated At
       * @description Unix timestamp (in seconds) of the last update to this user or any of their goals or datapoints.
       */
      updated_at: number;
      /**
       * Urgency Load
       * @description A score representing how urgently the user needs to address their goals. Lower means fewer urgent goals.
       */
      urgency_load: number;
      /**
       * Username
       * @description The username of the user.
       */
      username: string;
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
 * Type map of all available tool input types for toolkit "BEEMINDER".
 */
export type BEEMINDER_TOOL_INPUTS = {
  AUTHENTICATE_AND_REDIRECT_USER: BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER_INPUT
  CREATE_CHARGE: BEEMINDER_CREATE_CHARGE_INPUT
  GET_ALL_GOALS: BEEMINDER_GET_ALL_GOALS_INPUT
  GET_ARCHIVED_GOALS: BEEMINDER_GET_ARCHIVED_GOALS_INPUT
  GET_USER_INFORMATION: BEEMINDER_GET_USER_INFORMATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BEEMINDER".
 */
export type BEEMINDER_TOOL_OUTPUTS = {
  AUTHENTICATE_AND_REDIRECT_USER: BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER_OUTPUT
  CREATE_CHARGE: BEEMINDER_CREATE_CHARGE_OUTPUT
  GET_ALL_GOALS: BEEMINDER_GET_ALL_GOALS_OUTPUT
  GET_ARCHIVED_GOALS: BEEMINDER_GET_ARCHIVED_GOALS_OUTPUT
  GET_USER_INFORMATION: BEEMINDER_GET_USER_INFORMATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BEEMINDER toolkit.
 */
export const BEEMINDER = {
  slug: "beeminder",
  tools: {
    /**
     * Tool to authenticate a user and redirect them to a given url. use when sending a user into the beeminder web ui directly after oauth or token validation.
     */
    AUTHENTICATE_AND_REDIRECT_USER: "BEEMINDER_AUTHENTICATE_AND_REDIRECT_USER",
    /**
     * Tool to create a new charge for a user. use when billing a user outside of goal pledges; supports dryrun mode.
     */
    CREATE_CHARGE: "BEEMINDER_CREATE_CHARGE",
    /**
     * Tool to retrieve all goals for a specified user. use when listing a user's active goals.
     */
    GET_ALL_GOALS: "BEEMINDER_GET_ALL_GOALS",
    /**
     * Tool to retrieve archived goals for a specified user. use when you need to inspect a user's past archived goals.
     */
    GET_ARCHIVED_GOALS: "BEEMINDER_GET_ARCHIVED_GOALS",
    /**
     * Tool to retrieve information about a specified beeminder user. use when you need to fetch details like timezone, goals, urgency, or deleted goals after authenticating successfully.
     */
    GET_USER_INFORMATION: "BEEMINDER_GET_USER_INFORMATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BEEMINDER".
 */
export type BEEMINDER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BEEMINDER".
 */
export type BEEMINDER_TRIGGER_EVENTS = {}
