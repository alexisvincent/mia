// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NOCRM_IO's NOCRM_IO_ADD_A_TAG_TO_A_LEAD tool input.
 */
type NOCRM_IO_ADD_A_TAG_TO_A_LEAD_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier of the lead to add the tag to.
   */
  lead_id?: string;
  /**
   * Tag
   * @description Tag or comma-separated tags to add to the lead.
   */
  tag?: string;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_ADD_A_TAG_TO_A_LEAD tool output.
 */
type NOCRM_IO_ADD_A_TAG_TO_A_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the lead.
       */
      id: string;
      /**
       * Tags
       * @description The list of tags assigned to the lead.
       */
      tags: string[];
  } & {
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
 * Type of NOCRM_IO's NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION tool input.
 */
type NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION_INPUT = {
  /**
   * Append Desc
   * @description Text to append to the lead's description. Cannot be used simultaneously with the `description` parameter.
   */
  append_desc?: string;
  /**
   * Id
   * @description Unique identifier of the lead to update
   */
  id?: number;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION tool output.
 */
type NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Monetary amount associated with the lead
       * @default null
       */
      amount: number | null;
      /**
       * Attachment Count
       * @description Number of attachments on the lead
       */
      attachment_count: number;
      /**
       * Client Folder Id
       * @description Client folder ID, if associated
       * @default null
       */
      client_folder_id: number | null;
      /**
       * Client Folder Name
       * @description Name of the client folder
       * @default null
       */
      client_folder_name: string | null;
      /**
       * Closed At
       * @description Datetime when the lead was closed (if applicable)
       * @default null
       */
      closed_at: string | null;
      /**
       * Created At
       * @description Datetime when the lead was created
       */
      created_at: string;
      /**
       * Created By Id
       * @description User ID who created the lead
       * @default null
       */
      created_by_id: number | null;
      /**
       * Created From
       * @description Source of creation (e.g., api)
       * @default null
       */
      created_from: string | null;
      /**
       * Currency
       * @description Currency code of the amount
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Current full text description of the lead
       */
      description: string;
      /**
       * Estimated Closing Date
       * @description Estimated closing date (YYYY-MM-DD)
       * @default null
       */
      estimated_closing_date: string | null;
      /**
       * Html Description
       * @description Current HTML-formatted description of the lead
       */
      html_description: string;
      /**
       * Id
       * @description Lead ID
       */
      id: number;
      /**
       * Next Action At
       * @description Datetime of the next action in ISO 8601
       * @default null
       */
      next_action_at: string | null;
      /**
       * Pipeline
       * @description Name of the pipeline the lead belongs to
       * @default null
       */
      pipeline: string | null;
      /**
       * Probability
       * @description Probability percentage of the lead
       * @default null
       */
      probability: number | null;
      /**
       * Remind Date
       * @description Date string (YYYY-MM-DD) for reminder
       * @default null
       */
      remind_date: string | null;
      /**
       * Remind Time
       * @description Time string (HH:MM) for reminder
       * @default null
       */
      remind_time: string | null;
      /**
       * Reminder Activity Id
       * @description Activity ID for the reminder
       * @default null
       */
      reminder_activity_id: number | null;
      /**
       * Reminder Activity Log Id
       * @description Activity log ID for the reminder
       * @default null
       */
      reminder_activity_log_id: number | null;
      /**
       * Reminder At
       * @description Datetime of the reminder
       * @default null
       */
      reminder_at: string | null;
      /**
       * Reminder Duration
       * @description Duration of the reminder in minutes
       * @default null
       */
      reminder_duration: number | null;
      /**
       * Reminder Note
       * @description Note associated with the reminder
       * @default null
       */
      reminder_note: string | null;
      /**
       * Starred
       * @description Whether the lead is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Status
       * @description Status of the lead: todo, standby, won, lost, cancelled
       */
      status: string;
      /**
       * Step
       * @description Name of the step for the lead
       */
      step: string;
      /**
       * Step Id
       * @description Identifier of the step
       */
      step_id: number;
      /**
       * Tags
       * @description Tags associated with the lead
       */
      tags: string[];
      /**
       * Team Id
       * @description Team ID assigned to the lead
       * @default null
       */
      team_id: number | null;
      /**
       * Team Name
       * @description Name of the team assigned
       * @default null
       */
      team_name: string | null;
      /**
       * Title
       * @description Lead title, usually the company name
       */
      title: string;
      /**
       * Updated At
       * @description Datetime when the lead was last updated
       */
      updated_at: string;
      /**
       * User Id
       * @description User ID assigned to the lead
       * @default null
       */
      user_id: number | null;
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
 * Type of NOCRM_IO's NOCRM_IO_ASSIGN_LEAD_TO_USER tool input.
 */
type NOCRM_IO_ASSIGN_LEAD_TO_USER_INPUT = {
  /**
   * Lead Id
   * @description Unique identifier of the lead to assign
   */
  lead_id?: string;
  /**
   * User Id
   * @description ID or email of the user who will receive the lead
   */
  user_id?: string;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_ASSIGN_LEAD_TO_USER tool output.
 */
type NOCRM_IO_ASSIGN_LEAD_TO_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lead Id
       * @description The ID of the lead that was assigned
       */
      lead_id: string;
      /**
       * Success
       * @description Indicates whether the operation was successful
       */
      success: boolean;
      /**
       * User Id
       * @description The ID of the user to whom the lead was assigned
       */
      user_id: string;
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
 * Type of NOCRM_IO's NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED tool input.
 */
type NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier of the lead to update
   */
  lead_id?: string;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED tool output.
 */
type NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lead Id
       * @description The ID of the lead that was updated
       */
      lead_id: string;
      /**
       * Status
       * @description The new status of the lead, which should be 'cancelled'
       */
      status: string;
      /**
       * Success
       * @description Indicates whether the operation was successful
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
 * Type of NOCRM_IO's NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY tool input.
 */
type NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY_INPUT = {
  /**
   * Activity Id
   * @description Optional activity ID to associate with the reminder
   * @default null
   */
  activity_id: number | null;
  /**
   * Days
   * @description Number of days to schedule the next reminder; must be a positive integer
   */
  days?: number;
  /**
   * Lead Id
   * @description The unique identifier of the lead to update
   */
  lead_id?: string;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY tool output.
 */
type NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
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
 * Type of NOCRM_IO's NOCRM_IO_CREATE_LEAD tool input.
 */
type NOCRM_IO_CREATE_LEAD_INPUT = {
  /**
   * Description
   * @description Lead's description, typically containing contact information.
   * @default null
   */
  description: string | null;
  /**
   * Step
   * @description Step's name for the lead.
   * @default null
   */
  step: string | null;
  /**
   * Tags
   * @description Tags describing the lead.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description Lead's title, usually corresponding to the company name.
   */
  title?: string;
  /**
   * User Id
   * @description Email address or ID of the user to assign the lead to. When using USER token, providing this yields an error.
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_CREATE_LEAD tool output.
 */
type NOCRM_IO_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount associated with the lead.
       * @default null
       */
      amount: number | null;
      /**
       * Attachment Count
       * @description Number of attachments associated with the lead.
       */
      attachment_count: number;
      /**
       * Client Folder Id
       * @description Identifier of the client folder.
       * @default null
       */
      client_folder_id: number | null;
      /**
       * Client Folder Name
       * @description Name of the client folder.
       * @default null
       */
      client_folder_name: string | null;
      /**
       * Closed At
       * @description Datetime when the lead was closed (if applicable).
       * @default null
       */
      closed_at: string | null;
      /**
       * Created At
       * @description Datetime when the lead was created.
       */
      created_at: string;
      /**
       * Created By Id
       * @description Identifier of the user who created the lead.
       * @default null
       */
      created_by_id: number | null;
      /**
       * Created From
       * @description Source from which the lead was created.
       * @default null
       */
      created_from: string | null;
      /**
       * Currency
       * @description Currency code of the amount.
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Full text description of the lead.
       */
      description: string;
      /**
       * Estimated Closing Date
       * @description Estimated closing date (YYYY-MM-DD).
       * @default null
       */
      estimated_closing_date: string | null;
      /**
       * Html Description
       * @description HTML formatted description of the lead.
       */
      html_description: string;
      /**
       * Id
       * @description Unique identifier of the lead.
       */
      id: number;
      /**
       * Next Action At
       * @description Datetime of the next action in ISO 8601 format.
       * @default null
       */
      next_action_at: string | null;
      /**
       * Pipeline
       * @description Pipeline associated with the lead.
       * @default null
       */
      pipeline: string | null;
      /**
       * Probability
       * @description Probability percentage of closing the lead.
       * @default null
       */
      probability: number | null;
      /**
       * Remind Date
       * @description Date string (YYYY-MM-DD) for reminder.
       * @default null
       */
      remind_date: string | null;
      /**
       * Remind Time
       * @description Time string (HH:MM) for reminder.
       * @default null
       */
      remind_time: string | null;
      /**
       * Reminder Activity Id
       * @description Identifier of the reminder activity.
       * @default null
       */
      reminder_activity_id: number | null;
      /**
       * Reminder Activity Log Id
       * @description Identifier of the reminder activity log.
       * @default null
       */
      reminder_activity_log_id: number | null;
      /**
       * Reminder At
       * @description Datetime of the reminder.
       * @default null
       */
      reminder_at: string | null;
      /**
       * Reminder Duration
       * @description Duration of the reminder in minutes.
       * @default null
       */
      reminder_duration: number | null;
      /**
       * Reminder Note
       * @description Note associated with the reminder.
       * @default null
       */
      reminder_note: string | null;
      /**
       * Starred
       * @description Indicates if the lead is starred.
       * @default null
       */
      starred: boolean | null;
      /**
       * Status
       * @description Status of the lead.
       */
      status: string;
      /**
       * Step
       * @description Current step of the lead.
       */
      step: string;
      /**
       * Step Id
       * @description Identifier of the current step.
       */
      step_id: number;
      /**
       * Tags
       * @description Tags associated with the lead.
       */
      tags: string[];
      /**
       * Team Id
       * @description Identifier of the team associated with the lead.
       * @default null
       */
      team_id: number | null;
      /**
       * Team Name
       * @description Name of the team associated with the lead.
       * @default null
       */
      team_name: string | null;
      /**
       * Title
       * @description Title of the lead, usually the company name.
       */
      title: string;
      /**
       * Updated At
       * @description Datetime when the lead was last updated.
       */
      updated_at: string;
      /**
       * User Id
       * @description Identifier of the user assigned to the lead.
       * @default null
       */
      user_id: number | null;
  } & {
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
 * Type of NOCRM_IO's NOCRM_IO_DELETE_LEAD tool input.
 */
type NOCRM_IO_DELETE_LEAD_INPUT = {
  /**
   * Id
   * @description Unique identifier of the lead to delete
   */
  id?: number;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_DELETE_LEAD tool output.
 */
type NOCRM_IO_DELETE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the deleted lead
       */
      id: number;
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
 * Type of NOCRM_IO's NOCRM_IO_DUPLICATE_LEAD tool input.
 */
type NOCRM_IO_DUPLICATE_LEAD_INPUT = {
  /**
   * Lead Id
   * @description Unique identifier of the lead to duplicate.
   */
  lead_id?: number;
  /**
   * Step
   * @description Name of the pipeline step for the new duplicated lead. Use after reviewing existing lead details.
   */
  step?: string;
};

/**
 * Type of NOCRM_IO's NOCRM_IO_DUPLICATE_LEAD tool output.
 */
type NOCRM_IO_DUPLICATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount associated with the duplicated lead
       * @default null
       */
      amount: number | null;
      /**
       * Created At
       * @description Creation timestamp of the duplicated lead
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code for the amount
       * @default null
       */
      currency: string | null;
      /**
       * Id
       * @description Unique identifier of the duplicated lead
       */
      id: number;
      /**
       * Pipeline
       * @description Pipeline name of the duplicated lead
       * @default null
       */
      pipeline: string | null;
      /**
       * Probability
       * @description Probability percentage of winning the lead
       * @default null
       */
      probability: number | null;
      /**
       * Starred
       * @description Whether the lead is starred
       * @default null
       */
      starred: boolean | null;
      /**
       * Status
       * @description Status of the duplicated lead (todo, standby, won, etc.)
       */
      status: string;
      /**
       * Step
       * @description Pipeline step of the duplicated lead
       */
      step: string;
      /**
       * Step Id
       * @description Identifier of the pipeline step
       */
      step_id: number;
      /**
       * Title
       * @description Title of the lead (usually company or contact name)
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp of the duplicated lead
       */
      updated_at: string;
  } & {
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
 * Type of NOCRM_IO's NOCRM_IO_LIST_ALL_TEAMS tool input.
 */
type NOCRM_IO_LIST_ALL_TEAMS_INPUT = object;

/**
 * Type of NOCRM_IO's NOCRM_IO_LIST_ALL_TEAMS tool output.
 */
type NOCRM_IO_LIST_ALL_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the team.
       */
      id: number;
      /**
       * Name
       * @description Name of the team.
       */
      name: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format.
       */
      updated_at: string;
      /**
       * Users
       * @description Members of the team.
       */
      users: {
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * Firstname
           * @description Firstname of the user.
           */
          firstname: string;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: number;
          /**
           * Is Manager
           * @description True if the user is a team manager.
           */
          is_manager: boolean;
          /**
           * Lastname
           * @description Lastname of the user.
           */
          lastname: string;
      }[];
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
 * Type map of all available tool input types for toolkit "NOCRM_IO".
 */
export type NOCRM_IO_TOOL_INPUTS = {
  ADD_A_TAG_TO_A_LEAD: NOCRM_IO_ADD_A_TAG_TO_A_LEAD_INPUT
  APPEND_TO_LEADS_DESCRIPTION: NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION_INPUT
  ASSIGN_LEAD_TO_USER: NOCRM_IO_ASSIGN_LEAD_TO_USER_INPUT
  CHANGE_LEAD_STATUS_CANCELLED: NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED_INPUT
  CHANGE_LEAD_STATUS_STANDBY: NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY_INPUT
  CREATE_LEAD: NOCRM_IO_CREATE_LEAD_INPUT
  DELETE_LEAD: NOCRM_IO_DELETE_LEAD_INPUT
  DUPLICATE_LEAD: NOCRM_IO_DUPLICATE_LEAD_INPUT
  LIST_ALL_TEAMS: NOCRM_IO_LIST_ALL_TEAMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NOCRM_IO".
 */
export type NOCRM_IO_TOOL_OUTPUTS = {
  ADD_A_TAG_TO_A_LEAD: NOCRM_IO_ADD_A_TAG_TO_A_LEAD_OUTPUT
  APPEND_TO_LEADS_DESCRIPTION: NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION_OUTPUT
  ASSIGN_LEAD_TO_USER: NOCRM_IO_ASSIGN_LEAD_TO_USER_OUTPUT
  CHANGE_LEAD_STATUS_CANCELLED: NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED_OUTPUT
  CHANGE_LEAD_STATUS_STANDBY: NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY_OUTPUT
  CREATE_LEAD: NOCRM_IO_CREATE_LEAD_OUTPUT
  DELETE_LEAD: NOCRM_IO_DELETE_LEAD_OUTPUT
  DUPLICATE_LEAD: NOCRM_IO_DUPLICATE_LEAD_OUTPUT
  LIST_ALL_TEAMS: NOCRM_IO_LIST_ALL_TEAMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NOCRM_IO toolkit.
 */
export const NOCRM_IO = {
  slug: "nocrm_io",
  tools: {
    /**
     * Tool to add a tag to a lead. use when you need to assign one or more tags to a specified lead via nocrm.io.
     */
    ADD_A_TAG_TO_A_LEAD: "NOCRM_IO_ADD_A_TAG_TO_A_LEAD",
    /**
     * Tool to append text to the lead's description. use when you need to add context incrementally without overwriting. example: append 'left voicemail' to lead 1234.
     */
    APPEND_TO_LEADS_DESCRIPTION: "NOCRM_IO_APPEND_TO_LEADS_DESCRIPTION",
    /**
     * Tool to assign a lead to a user. use when reassigning a lead to the correct owner to trigger assignment notification.
     */
    ASSIGN_LEAD_TO_USER: "NOCRM_IO_ASSIGN_LEAD_TO_USER",
    /**
     * Tool to change a lead's status to 'cancelled'. use after confirming no further follow-up is needed and the lead should be marked as cancelled.
     */
    CHANGE_LEAD_STATUS_CANCELLED: "NOCRM_IO_CHANGE_LEAD_STATUS_CANCELLED",
    /**
     * Tool to change a lead's status to 'standby'. use when scheduling follow-up after determining the next contact should occur in a set number of days.
     */
    CHANGE_LEAD_STATUS_STANDBY: "NOCRM_IO_CHANGE_LEAD_STATUS_STANDBY",
    /**
     * Tool to create a new lead. use when adding a fresh prospect to your pipeline via nocrm.io. example: create a lead titled 'acme corp' assigned to a user.
     */
    CREATE_LEAD: "NOCRM_IO_CREATE_LEAD",
    /**
     * Tool to delete a lead. use when you need to permanently remove a specific lead after verifying it is no longer needed.
     */
    DELETE_LEAD: "NOCRM_IO_DELETE_LEAD",
    /**
     * Tool to duplicate a lead. use when cloning an existing lead into a new step without overwriting original.
     */
    DUPLICATE_LEAD: "NOCRM_IO_DUPLICATE_LEAD",
    /**
     * Tool to retrieve all teams. use when you need to fetch every team and its members from nocrm.io.
     */
    LIST_ALL_TEAMS: "NOCRM_IO_LIST_ALL_TEAMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NOCRM_IO".
 */
export type NOCRM_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NOCRM_IO".
 */
export type NOCRM_IO_TRIGGER_EVENTS = {}
