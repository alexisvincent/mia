import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_AN_ACTIVITY tool input.
 */
type PIPEDRIVE_ADD_AN_ACTIVITY_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_AN_ACTIVITY tool output.
 */
type PIPEDRIVE_ADD_AN_ACTIVITY_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION_INPUT = {
  /**
   * Currency
   * @description The currency of the installment subscription. Accepts a 3-character currency code.
   */
  currency?: string;
  /**
   * Deal Id
   * @description The ID of the deal this installment subscription is associated with
   */
  deal_id?: number;
  /**
   * Payments
   * @description Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
   */
  payments?: {
      [key: string]: unknown;
  }[];
  /**
   * Update Deal Value
   * @description Indicates that the deal value must be set to the installment subscription"s total value
   */
  update_deal_value?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_ADD_AN_ORGANIZATION_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_ADD_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_CALL_LOG tool input.
 */
type PIPEDRIVE_ADD_A_CALL_LOG_INPUT = {
  /**
   * Activity Id
   * @description If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don"t need to specify `deal_id`, `person_id` or `org_id`, as they will be ignored in favor of the values already available in the activity. The `activity_id` must refer to a `call` type activity.
   */
  activity_id?: number;
  /**
   * Deal Id
   * @description The ID of the deal this call is associated with. A call log can be associated with either a deal or a lead, but not both at once.
   */
  deal_id?: number;
  /**
   * Duration
   * @description The duration of the call in seconds
   */
  duration?: string;
  /**
   * End Time
   * Format: date-time
   * @description The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
   */
  end_time?: string;
  /**
   * From Phone Number
   * @description The number that made the call
   */
  from_phone_number?: string;
  /**
   * Lead Id
   * Format: uuid
   * @description The ID of the lead in the UUID format this call is associated with. A call log can be associated with either a deal or a lead, but not both at once.
   */
  lead_id?: string;
  /**
   * Note
   * @description The note for the call log in HTML format
   */
  note?: string;
  /**
   * Org Id
   * @description The ID of the organization this call is associated with
   */
  org_id?: number;
  /**
   * Outcome
   * @description Describes the outcome of the call
   * @enum {string}
   */
  outcome?: "connected" | "no_answer" | "left_message" | "left_voicemail" | "wrong_number" | "busy";
  /**
   * Person Id
   * @description The ID of the person this call is associated with
   */
  person_id?: number;
  /**
   * Start Time
   * Format: date-time
   * @description The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
   */
  start_time?: string;
  /**
   * Subject
   * @description The name of the activity this call is attached to
   */
  subject?: string;
  /**
   * To Phone Number
   * @description The number called
   */
  to_phone_number?: string;
  /**
   * User Id
   * @description The ID of the owner of the call log. Please note that a user without account settings access cannot create call logs for other users.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_CALL_LOG tool output.
 */
type PIPEDRIVE_ADD_A_CALL_LOG_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_CHANNEL tool input.
 */
type PIPEDRIVE_ADD_A_CHANNEL_INPUT = {
  /**
   * Avatar Url
   * Format: url
   * @description The URL for an icon that represents your channel
   */
  avatar_url?: string;
  /**
   * Name
   * @description The name of the channel
   */
  name?: string;
  /**
   * Provider Channel Id
   * @description The channel ID
   */
  provider_channel_id?: string;
  /**
   * Provider Type
   * @description It controls the icons (like the icon next to the conversation)
   * @default other
   * @enum {string}
   */
  provider_type: "facebook" | "whatsapp" | "other";
  /**
   * Template Support
   * @description If true, enables templates logic on UI. Requires getTemplates endpoint implemented. Find out more [here](https://pipedrive.readme.io/docs/implementing-messaging-app-extension).
   * @default false
   */
  template_support: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_CHANNEL tool output.
 */
type PIPEDRIVE_ADD_A_CHANNEL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE tool input.
 */
type PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE_INPUT = {
  /**
   * Content
   * @description The content of the comment in HTML format. Subject to sanitization on the back-end.
   */
  content?: string;
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE tool output.
 */
type PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_DEAL tool input.
 */
type PIPEDRIVE_ADD_A_DEAL_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_DEAL tool output.
 */
type PIPEDRIVE_ADD_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * User Id
   * @description The ID of the user
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL tool input.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * User Id
   * @description The ID of the user
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL tool output.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON tool input.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * User Id
   * @description The ID of the user
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON tool output.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT tool input.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
  /**
   * User Id
   * @description The ID of the user
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT tool output.
 */
type PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_LEAD tool input.
 */
type PIPEDRIVE_ADD_A_LEAD_INPUT = {
  /**
   * Expected Close Date
   * Format: date
   * @description The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
   */
  expected_close_date?: string;
  /**
   * Label Ids
   * @description The IDs of the lead labels which will be associated with the lead
   */
  label_ids?: string[];
  /**
   * Organization Id
   * @description The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
   */
  organization_id?: number;
  /**
   * Owner Id
   * @description The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.
   */
  owner_id?: number;
  /**
   * Person Id
   * @description The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `organization_id` is specified.
   */
  person_id?: number;
  /**
   * Title
   * @description The name of the lead
   */
  title?: string;
  /**
   * Value  Amount
   * @description Amount
   */
  value__amount?: number;
  /**
   * Value  Currency
   * @description Currency
   */
  value__currency?: string;
  /**
   * Was Seen
   * @description A flag indicating whether the lead was seen by someone in the Pipedrive UI
   */
  was_seen?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_LEAD tool output.
 */
type PIPEDRIVE_ADD_A_LEAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_LEAD_LABEL tool input.
 */
type PIPEDRIVE_ADD_A_LEAD_LABEL_INPUT = {
  /**
   * Color
   * @description The color of the label. Only a subset of colors can be used.
   * @enum {string}
   */
  color?: "green" | "blue" | "red" | "yellow" | "purple" | "gray";
  /**
   * Name
   * @description The name of the lead label
   */
  name?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_LEAD_LABEL tool output.
 */
type PIPEDRIVE_ADD_A_LEAD_LABEL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_DEAL_FIELD tool input.
 */
type PIPEDRIVE_ADD_A_NEW_DEAL_FIELD_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_DEAL_FIELD tool output.
 */
type PIPEDRIVE_ADD_A_NEW_DEAL_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_FILTER tool input.
 */
type PIPEDRIVE_ADD_A_NEW_FILTER_INPUT = {
  /**
   * Name
   * @description The name of the filter
   */
  name?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_FILTER tool output.
 */
type PIPEDRIVE_ADD_A_NEW_FILTER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_GOAL tool input.
 */
type PIPEDRIVE_ADD_A_NEW_GOAL_INPUT = {
  /**
   * Interval
   * @description The interval of the goal
   * @enum {string}
   */
  interval?: "weekly" | "monthly" | "quarterly" | "yearly";
  /**
   * Title
   * @description The title of the goal
   */
  title?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_GOAL tool output.
 */
type PIPEDRIVE_ADD_A_NEW_GOAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD tool input.
 */
type PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD tool output.
 */
type PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_PERSON_FIELD tool input.
 */
type PIPEDRIVE_ADD_A_NEW_PERSON_FIELD_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_PERSON_FIELD tool output.
 */
type PIPEDRIVE_ADD_A_NEW_PERSON_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_PIPELINE tool input.
 */
type PIPEDRIVE_ADD_A_NEW_PIPELINE_INPUT = {
  /**
   * Name
   * @description The name of the pipeline
   */
  name?: string;
  /**
   * Order Nr
   * @description Defines the order of pipelines. First order (`order_nr=0`) is the default pipeline.
   */
  order_nr?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_PIPELINE tool output.
 */
type PIPEDRIVE_ADD_A_NEW_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD tool input.
 */
type PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD_INPUT = {
  /**
   * Field Type
   * @description The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td><tr><td>`text`</td><td>Long text (up to 65k characters)</td><tr><td>`double`</td><td>Numeric value</td><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td><tr><td>`enum`</td><td>Options field with a single possible chosen option</td><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td><tr><td>`people`</td><td>Person field (contains a product ID which is stored on the same account)</td><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td><tr><td>`address`</td><td>Address field (autocompleted by Google Maps)</dd></table>
   * @enum {string}
   */
  field_type?: "varchar" | "varchar_auto" | "text" | "double" | "monetary" | "date" | "set" | "enum" | "user" | "org" | "people" | "phone" | "time" | "timerange" | "daterange" | "address";
  /**
   * Name
   * @description The name of the field
   */
  name?: string;
  /**
   * Options
   * @description When `field_type` is either `set` or `enum`, possible options must be supplied as a JSON-encoded sequential array, for example:</br>`[{"label":"red"}, {"label":"blue"}, {"label":"lilac"}]`
   */
  options?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD tool output.
 */
type PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_STAGE tool input.
 */
type PIPEDRIVE_ADD_A_NEW_STAGE_INPUT = {
  /**
   * Deal Probability
   * @description The success probability percentage of the deal. Used/shown when deal weighted values are used.
   */
  deal_probability?: number;
  /**
   * Name
   * @description The name of the stage
   */
  name?: string;
  /**
   * Pipeline Id
   * @description The ID of the pipeline to add stage to
   */
  pipeline_id?: number;
  /**
   * Rotten Days
   * @description The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
   */
  rotten_days?: number;
  /**
   * Rotten Flag
   * @description Whether deals in this stage can become rotten
   */
  rotten_flag?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_STAGE tool output.
 */
type PIPEDRIVE_ADD_A_NEW_STAGE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_TEAM tool input.
 */
type PIPEDRIVE_ADD_A_NEW_TEAM_INPUT = {
  /**
   * Description
   * @description The team description
   */
  description?: string;
  /**
   * Manager Id
   * @description The team manager ID
   */
  manager_id?: number;
  /**
   * Name
   * @description The team name
   */
  name?: string;
  /**
   * Users
   * @description The list of user IDs
   */
  users?: number[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_TEAM tool output.
 */
type PIPEDRIVE_ADD_A_NEW_TEAM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_USER tool input.
 */
type PIPEDRIVE_ADD_A_NEW_USER_INPUT = {
  /**
   * Access
   * @description The access given to the user. Each item in the array represents access to a specific app. Optionally may include either admin flag or permission set ID to specify which access to give within the app. If both are omitted, the default access for the corresponding app will be used. It requires structure as follows: `[{ app: "sales", permission_set_id: "62cc4d7f-4038-4352-abf3-a8c1c822b631" }, { app: "global", admin: true }, { app: "account_settings" }]`
   * @default [
   *       {
   *         "app": "sales"
   *       }
   *     ]
   */
  access: {
      [key: string]: unknown;
  }[];
  /**
   * Active Flag
   * @description Whether the user is active or not. `false` = Not activated, `true` = Activated
   * @default true
   */
  active_flag: boolean;
  /**
   * Email
   * @description The email of the user
   */
  email?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NEW_USER tool output.
 */
type PIPEDRIVE_ADD_A_NEW_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NOTE tool input.
 */
type PIPEDRIVE_ADD_A_NOTE_INPUT = {
  /**
   * Add Time
   * @description The optional creation date & time of the note in UTC. Format: YYYY-MM-DD HH:MM:SS
   * @default null
   */
  add_time: string | null;
  /**
   * Content
   * @description The content of the note in HTML format. Subject to sanitization on the back-end.
   */
  content?: string;
  /**
   * Deal Id
   * @description The ID of the deal the note will be attached to. Required unless one of (lead_id/person_id/org_id/project_id) is specified.
   * @default null
   */
  deal_id: number | null;
  /**
   * Lead Id
   * @description The ID of the lead the note will be attached to (UUID format). Required unless one of (deal_id/person_id/org_id/project_id) is specified.
   * @default null
   */
  lead_id: string | null;
  /**
   * Org Id
   * @description The ID of the organization this note will be attached to. Required unless one of (deal_id/person_id/lead_id/project_id) is specified.
   * @default null
   */
  org_id: number | null;
  /**
   * Person Id
   * @description The ID of the person this note will be attached to. Required unless one of (deal_id/lead_id/org_id/project_id) is specified.
   * @default null
   */
  person_id: number | null;
  /**
   * Project Id
   * @description The ID of the project the note will be attached to. Required unless one of (deal_id/person_id/org_id/lead_id) is specified.
   * @default null
   */
  project_id: number | null;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_NOTE tool output.
 */
type PIPEDRIVE_ADD_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL tool input.
 */
type PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Person Id
   * @description The ID of the person
   */
  person_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL tool output.
 */
type PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PERSON tool input.
 */
type PIPEDRIVE_ADD_A_PERSON_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PERSON tool output.
 */
type PIPEDRIVE_ADD_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PRODUCT tool input.
 */
type PIPEDRIVE_ADD_A_PRODUCT_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PRODUCT tool output.
 */
type PIPEDRIVE_ADD_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL tool input.
 */
type PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL tool output.
 */
type PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PROJECT tool input.
 */
type PIPEDRIVE_ADD_A_PROJECT_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_PROJECT tool output.
 */
type PIPEDRIVE_ADD_A_PROJECT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION_INPUT = {
  /**
   * Cadence Type
   * @description The interval between payments
   * @enum {string}
   */
  cadence_type?: "weekly" | "monthly" | "quarterly" | "yearly";
  /**
   * Currency
   * @description The currency of the recurring subscription. Accepts a 3-character currency code.
   */
  currency?: string;
  /**
   * Cycle Amount
   * @description The amount of each payment
   */
  cycle_amount?: number;
  /**
   * Cycles Count
   * @description Shows how many payments the subscription has. Note that one field must be set: `cycles_count` or `infinite`. If `cycles_count` is set, then `cycle_amount` and `start_date` are also required.
   */
  cycles_count?: number;
  /**
   * Deal Id
   * @description The ID of the deal this recurring subscription is associated with
   */
  deal_id?: number;
  /**
   * Description
   * @description The description of the recurring subscription
   */
  description?: string;
  /**
   * Infinite
   * @description This indicates that the recurring subscription will last until it"s manually canceled or deleted. Note that only one field must be set: `cycles_count` or `infinite`.
   */
  infinite?: boolean;
  /**
   * Payments
   * @description Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
   */
  payments?: {
      [key: string]: unknown;
  }[];
  /**
   * Start Date
   * Format: date
   * @description The start date of the recurring subscription. Format: YYYY-MM-DD
   */
  start_date?: string;
  /**
   * Update Deal Value
   * @description Indicates that the deal value must be set to recurring subscription"s MRR value
   */
  update_deal_value?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_ROLE tool input.
 */
type PIPEDRIVE_ADD_A_ROLE_INPUT = {
  /**
   * Name
   * @description The name of the role
   */
  name?: string;
  /**
   * Parent Role Id
   * @description The ID of the parent role
   */
  parent_role_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_ROLE tool output.
 */
type PIPEDRIVE_ADD_A_ROLE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_TASK tool input.
 */
type PIPEDRIVE_ADD_A_TASK_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_A_TASK tool output.
 */
type PIPEDRIVE_ADD_A_TASK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_FILE tool input.
 */
type PIPEDRIVE_ADD_FILE_INPUT = {
  /**
   * Activity Id
   * @description Activity Id
   */
  activity_id?: number;
  /**
   * Deal Id
   * @description Deal Id
   */
  deal_id?: number;
  /**
   * File
   * Format: binary
   * @description File
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Lead Id
   * Format: uuid
   * @description Lead Id
   */
  lead_id?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Org Id
   * @description Org Id
   */
  org_id?: number;
  /**
   * Person Id
   * @description Person Id
   */
  person_id?: number;
  /**
   * Product Id
   * @description Product Id
   */
  product_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_FILE tool output.
 */
type PIPEDRIVE_ADD_FILE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE tool input.
 */
type PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE_INPUT = {
  /**
   * Color
   * @description A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
   */
  color?: string;
  /**
   * Icon Key
   * @description Icon graphic to use for representing this activity type
   * @enum {string}
   */
  icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation";
  /**
   * Name
   * @description The name of the activity type
   */
  name?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE tool output.
 */
type PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING tool input.
 */
type PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
  /**
   * Setting Key
   * @description Setting Key
   * @enum {string}
   */
  setting_key?: "deal_default_visibility" | "lead_default_visibility" | "org_default_visibility" | "person_default_visibility" | "product_default_visibility";
  /**
   * Value
   * @description Possible values for the `default_visibility` setting depending on the subscription plan:<br> <table class="role-setting"> <caption><b>Essential / Advanced plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner & Followers</td></tr> <tr><td>`3`</td><td>Entire company</td></tr> </table> <br> <table class="role-setting"> <caption><b>Professional / Enterprise plan</b></caption> <tr><th><b>Value</b></th><th><b>Description</b></th></tr> <tr><td>`1`</td><td>Owner only</td></tr> <tr><td>`3`</td><td>Owner&#39;s visibility group</td></tr> <tr><td>`5`</td><td>Owner&#39;s visibility group and sub-groups</td></tr> <tr><td>`7`</td><td>Entire company</td></tr> </table> <br> Read more about visibility groups <a href="https://support.pipedrive.com/en/article/visibility-groups">here</a>.
   */
  value?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING tool output.
 */
type PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_PERSON_PICTURE tool input.
 */
type PIPEDRIVE_ADD_PERSON_PICTURE_INPUT = {
  /**
   * Crop Height
   * @description Crop Height
   */
  crop_height?: number;
  /**
   * Crop Width
   * @description Crop Width
   */
  crop_width?: number;
  /**
   * Crop X
   * @description Crop X
   */
  crop_x?: number;
  /**
   * Crop Y
   * @description Crop Y
   */
  crop_y?: number;
  /**
   * File
   * Format: binary
   * @description File
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_PERSON_PICTURE tool output.
 */
type PIPEDRIVE_ADD_PERSON_PICTURE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_ROLE_ASSIGNMENT tool input.
 */
type PIPEDRIVE_ADD_ROLE_ASSIGNMENT_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
  /**
   * User Id
   * @description The ID of the user
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_ROLE_ASSIGNMENT tool output.
 */
type PIPEDRIVE_ADD_ROLE_ASSIGNMENT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_USERS_TO_A_TEAM tool input.
 */
type PIPEDRIVE_ADD_USERS_TO_A_TEAM_INPUT = {
  /**
   * Id
   * @description The ID of the team
   */
  id?: number;
  /**
   * Users
   * @description The list of user IDs
   */
  users?: number[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ADD_USERS_TO_A_TEAM tool output.
 */
type PIPEDRIVE_ADD_USERS_TO_A_TEAM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ARCHIVE_A_PROJECT tool input.
 */
type PIPEDRIVE_ARCHIVE_A_PROJECT_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ARCHIVE_A_PROJECT tool output.
 */
type PIPEDRIVE_ARCHIVE_A_PROJECT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG tool input.
 */
type PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG_INPUT = {
  /**
   * File
   * Format: binary
   * @description File
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
  /**
   * Id
   * @description The ID received when you create the call log
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG tool output.
 */
type PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION_INPUT = {
  /**
   * End Date
   * Format: date
   * @description The subscription termination date. All payments after the specified date will be deleted. The end_date of the subscription will be set to the due date of the payment to follow the specified date. Default value is the current date.
   */
  end_date?: string;
  /**
   * Id
   * @description The ID of the subscription
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP tool input.
 */
type PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP_INPUT = {
  /**
   * Org Id
   * @description The ID of the base organization for the returned calculated values
   */
  org_id?: number;
  /**
   * Rel Linked Org Id
   * @description The linked organization in the relationship. If type is `parent`, then the linked organization is the daughter.
   */
  rel_linked_org_id?: number;
  /**
   * Rel Owner Org Id
   * @description The owner of the relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
   */
  rel_owner_org_id?: number;
  /**
   * Type
   * @description The type of organization relationship
   * @enum {string}
   */
  type?: "parent" | "related";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP tool output.
 */
type PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_CREATE_A_NEW_WEBHOOK tool input.
 */
type PIPEDRIVE_CREATE_A_NEW_WEBHOOK_INPUT = {
  /**
   * Event Action
   * @description The type of action to receive notifications about. Wildcard will match all supported actions.
   * @enum {string}
   */
  event_action?: "added" | "updated" | "merged" | "deleted" | "*";
  /**
   * Event Object
   * @description The type of object to receive notifications about. Wildcard will match all supported objects.
   * @enum {string}
   */
  event_object?: "activity" | "activityType" | "deal" | "note" | "organization" | "person" | "pipeline" | "product" | "stage" | "user" | "*";
  /**
   * Http Auth Password
   * @description The HTTP basic auth password of the subscription URL endpoint (if required)
   */
  http_auth_password?: string;
  /**
   * Http Auth User
   * @description The HTTP basic auth username of the subscription URL endpoint (if required)
   */
  http_auth_user?: string;
  /**
   * Subscription Url
   * @description A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url` and the chosen URL must not redirect to another link.
   */
  subscription_url?: string;
  /**
   * User Id
   * @description The ID of the user that this webhook will be authorized with. You have the option to use a different user"s `user_id`. If it is not set, the current user"s `user_id` will be used. As each webhook event is checked against a user"s permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user’s `user_id`.
   */
  user_id?: number;
  /**
   * Version
   * @description The webhook"s version
   * @default 1.0
   * @enum {string}
   */
  version: "1.0" | "2.0";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_CREATE_A_NEW_WEBHOOK tool output.
 */
type PIPEDRIVE_CREATE_A_NEW_WEBHOOK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM tool input.
 */
type PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM_INPUT = {
  /**
   * File Type
   * @description The file type
   * @enum {string}
   */
  file_type?: "gdoc" | "gslides" | "gsheet" | "gform" | "gdraw";
  /**
   * Item Id
   * @description The ID of the item to associate the file with
   */
  item_id?: number;
  /**
   * Item Type
   * @description The item type
   * @enum {string}
   */
  item_type?: "deal" | "organization" | "person";
  /**
   * Remote Location
   * @description The location type to send the file to. Only `googledrive` is supported at the moment.
   * @enum {string}
   */
  remote_location?: "googledrive";
  /**
   * Title
   * @description The title of the file
   */
  title?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM tool output.
 */
type PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ACTIVITY tool input.
 */
type PIPEDRIVE_DELETE_AN_ACTIVITY_INPUT = {
  /**
   * Id
   * @description The ID of the activity
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ACTIVITY tool output.
 */
type PIPEDRIVE_DELETE_AN_ACTIVITY_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE tool input.
 */
type PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE_INPUT = {
  /**
   * Id
   * @description The ID of the activity type
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE tool output.
 */
type PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL tool input.
 */
type PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Product Attachment Id
   * @description The product attachment ID
   */
  product_attachment_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL tool output.
 */
type PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_DELETE_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_DELETE_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD tool input.
 */
type PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD tool output.
 */
type PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP tool input.
 */
type PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP_INPUT = {
  /**
   * Id
   * @description The ID of the organization relationship
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP tool output.
 */
type PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_CALL_LOG tool input.
 */
type PIPEDRIVE_DELETE_A_CALL_LOG_INPUT = {
  /**
   * Id
   * @description The ID received when you create the call log
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_CALL_LOG tool output.
 */
type PIPEDRIVE_DELETE_A_CALL_LOG_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_CHANNEL tool input.
 */
type PIPEDRIVE_DELETE_A_CHANNEL_INPUT = {
  /**
   * Id
   * @description The ID of the channel provided by the integration
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_CHANNEL tool output.
 */
type PIPEDRIVE_DELETE_A_CHANNEL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE tool input.
 */
type PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment
   */
  commentId?: string;
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE tool output.
 */
type PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_CONVERSATION tool input.
 */
type PIPEDRIVE_DELETE_A_CONVERSATION_INPUT = {
  /**
   * Channel  Id
   * @description The ID of the channel provided by the integration
   */
  channel__id?: string;
  /**
   * Conversation  Id
   * @description The ID of the conversation provided by the integration
   */
  conversation__id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_CONVERSATION tool output.
 */
type PIPEDRIVE_DELETE_A_CONVERSATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_DEAL tool input.
 */
type PIPEDRIVE_DELETE_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_DEAL tool output.
 */
type PIPEDRIVE_DELETE_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_DEAL_FIELD tool input.
 */
type PIPEDRIVE_DELETE_A_DEAL_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_DEAL_FIELD tool output.
 */
type PIPEDRIVE_DELETE_A_DEAL_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FILE tool input.
 */
type PIPEDRIVE_DELETE_A_FILE_INPUT = {
  /**
   * Id
   * @description The ID of the file
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FILE tool output.
 */
type PIPEDRIVE_DELETE_A_FILE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FILTER tool input.
 */
type PIPEDRIVE_DELETE_A_FILTER_INPUT = {
  /**
   * Id
   * @description The ID of the filter
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FILTER tool output.
 */
type PIPEDRIVE_DELETE_A_FILTER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION_INPUT = {
  /**
   * Follower Id
   * @description The ID of the follower
   */
  follower_id?: number;
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL tool input.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL_INPUT = {
  /**
   * Follower Id
   * @description The ID of the follower
   */
  follower_id?: number;
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL tool output.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON tool input.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON_INPUT = {
  /**
   * Follower Id
   * @description The ID of the follower
   */
  follower_id?: number;
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON tool output.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT tool input.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT_INPUT = {
  /**
   * Follower Id
   * @description The ID of the relationship between the follower and the product
   */
  follower_id?: number;
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT tool output.
 */
type PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_LEAD tool input.
 */
type PIPEDRIVE_DELETE_A_LEAD_INPUT = {
  /**
   * Id
   * @description The ID of the lead
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_LEAD tool output.
 */
type PIPEDRIVE_DELETE_A_LEAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_LEAD_LABEL tool input.
 */
type PIPEDRIVE_DELETE_A_LEAD_LABEL_INPUT = {
  /**
   * Id
   * @description The ID of the lead label
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_LEAD_LABEL tool output.
 */
type PIPEDRIVE_DELETE_A_LEAD_LABEL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_NOTE tool input.
 */
type PIPEDRIVE_DELETE_A_NOTE_INPUT = {
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_NOTE tool output.
 */
type PIPEDRIVE_DELETE_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL tool input.
 */
type PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL_INPUT = {
  /**
   * Deal Participant Id
   * @description The ID of the participant of the deal
   */
  deal_participant_id?: number;
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL tool output.
 */
type PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PERSON tool input.
 */
type PIPEDRIVE_DELETE_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PERSON tool output.
 */
type PIPEDRIVE_DELETE_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PERSON_FIELD tool input.
 */
type PIPEDRIVE_DELETE_A_PERSON_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PERSON_FIELD tool output.
 */
type PIPEDRIVE_DELETE_A_PERSON_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PIPELINE tool input.
 */
type PIPEDRIVE_DELETE_A_PIPELINE_INPUT = {
  /**
   * Id
   * @description The ID of the pipeline
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PIPELINE tool output.
 */
type PIPEDRIVE_DELETE_A_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PRODUCT tool input.
 */
type PIPEDRIVE_DELETE_A_PRODUCT_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PRODUCT tool output.
 */
type PIPEDRIVE_DELETE_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PRODUCT_FIELD tool input.
 */
type PIPEDRIVE_DELETE_A_PRODUCT_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the product field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PRODUCT_FIELD tool output.
 */
type PIPEDRIVE_DELETE_A_PRODUCT_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PROJECT tool input.
 */
type PIPEDRIVE_DELETE_A_PROJECT_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_PROJECT tool output.
 */
type PIPEDRIVE_DELETE_A_PROJECT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_ROLE tool input.
 */
type PIPEDRIVE_DELETE_A_ROLE_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_ROLE tool output.
 */
type PIPEDRIVE_DELETE_A_ROLE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT tool input.
 */
type PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
  /**
   * User Id
   * @description The ID of the user
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT tool output.
 */
type PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_STAGE tool input.
 */
type PIPEDRIVE_DELETE_A_STAGE_INPUT = {
  /**
   * Id
   * @description The ID of the stage
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_STAGE tool output.
 */
type PIPEDRIVE_DELETE_A_STAGE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_DELETE_A_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the subscription
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_DELETE_A_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_TASK tool input.
 */
type PIPEDRIVE_DELETE_A_TASK_INPUT = {
  /**
   * Id
   * @description The ID of the task
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_A_TASK tool output.
 */
type PIPEDRIVE_DELETE_A_TASK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_EXISTING_GOAL tool input.
 */
type PIPEDRIVE_DELETE_EXISTING_GOAL_INPUT = {
  /**
   * Id
   * @description The ID of the goal
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_EXISTING_GOAL tool output.
 */
type PIPEDRIVE_DELETE_EXISTING_GOAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_EXISTING_WEBHOOK tool input.
 */
type PIPEDRIVE_DELETE_EXISTING_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The ID of the Webhook to delete
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_EXISTING_WEBHOOK tool output.
 */
type PIPEDRIVE_DELETE_EXISTING_WEBHOOK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MAIL_THREAD tool input.
 */
type PIPEDRIVE_DELETE_MAIL_THREAD_INPUT = {
  /**
   * Id
   * @description The ID of the mail thread
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MAIL_THREAD tool output.
 */
type PIPEDRIVE_DELETE_MAIL_THREAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated IDs of activities that will be deleted
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated activity type IDs
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated IDs that will be deleted
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated field IDs to delete
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated filter IDs to delete
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated IDs that will be deleted
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated field IDs to delete
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated IDs that will be deleted
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated field IDs to delete
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated field IDs to delete
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK tool input.
 */
type PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK_INPUT = {
  /**
   * Ids
   * @description The comma-separated stage IDs to delete
   */
  ids?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK tool output.
 */
type PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_PERSON_PICTURE tool input.
 */
type PIPEDRIVE_DELETE_PERSON_PICTURE_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_PERSON_PICTURE tool output.
 */
type PIPEDRIVE_DELETE_PERSON_PICTURE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_USERS_FROM_A_TEAM tool input.
 */
type PIPEDRIVE_DELETE_USERS_FROM_A_TEAM_INPUT = {
  /**
   * Id
   * @description The ID of the team
   */
  id?: number;
  /**
   * Users
   * @description The list of user IDs
   */
  users?: number[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DELETE_USERS_FROM_A_TEAM tool output.
 */
type PIPEDRIVE_DELETE_USERS_FROM_A_TEAM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DOWNLOAD_ONE_FILE tool input.
 */
type PIPEDRIVE_DOWNLOAD_ONE_FILE_INPUT = {
  /**
   * Id
   * @description The ID of the file
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DOWNLOAD_ONE_FILE tool output.
 */
type PIPEDRIVE_DOWNLOAD_ONE_FILE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_DUPLICATE_DEAL tool input.
 */
type PIPEDRIVE_DUPLICATE_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_DUPLICATE_DEAL tool output.
 */
type PIPEDRIVE_DUPLICATE_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD tool input.
 */
type PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD_INPUT = {
  /**
   * Id
   * @description The ID of the lead
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD tool output.
 */
type PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_FIND_GOALS tool input.
 */
type PIPEDRIVE_FIND_GOALS_INPUT = {
  /**
   * Assignee  Id
   * @description The ID of the user who"s goal to fetch. When omitted, only your goals will be returned.
   */
  assignee__id?: number;
  /**
   * Assignee  Type
   * @description The type of the goal"s assignee. If provided, everyone"s goals will be returned.
   * @enum {string}
   */
  assignee__type?: "person" | "company" | "team";
  /**
   * Expected  Outcome  Currency  Id
   * @description The numeric ID of the goal"s currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone"s goals will be returned.
   */
  expected__outcome__currency__id?: number;
  /**
   * Expected  Outcome  Target
   * @description The numeric value of the outcome. If provided, everyone"s goals will be returned.
   */
  expected__outcome__target?: number;
  /**
   * Expected  Outcome  Tracking  Metric
   * @description The tracking metric of the expected outcome of the goal. If provided, everyone"s goals will be returned.
   * @enum {string}
   */
  expected__outcome__tracking__metric?: "quantity" | "sum";
  /**
   * Is Active
   * @description Whether the goal is active or not
   * @default true
   */
  is_active: boolean;
  /**
   * Period  End
   * @description The end date of the period for which to find goals. Date in format of YYYY-MM-DD.
   */
  period__end?: string;
  /**
   * Period  Start
   * @description The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too.
   */
  period__start?: string;
  /**
   * Title
   * @description The title of the goal
   */
  title?: string;
  /**
   * Type  Name
   * @description The type of the goal. If provided, everyone"s goals will be returned.
   * @enum {string}
   */
  type__name?: "deals_won" | "deals_progressed" | "activities_completed" | "activities_added" | "deals_started";
  /**
   * Type  Params  Activity  Type  Id
   * @description An array of IDs or `null` for all activity types. Only applicable for `activities_completed` and/or `activities_added` types of goals. If provided, everyone"s goals will be returned.
   */
  type__params__activity__type__id?: number[];
  /**
   * Type  Params  Pipeline  Id
   * @description An array of pipeline IDs or `null` for all pipelines. If provided, everyone"s goals will be returned.
   */
  type__params__pipeline__id?: number[];
  /**
   * Type  Params  Stage  Id
   * @description The ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone"s goals will be returned.
   */
  type__params__stage__id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_FIND_GOALS tool output.
 */
type PIPEDRIVE_FIND_GOALS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL tool input.
 */
type PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL_INPUT = {
  /**
   * Deal Id
   * @description The ID of the deal
   */
  dealId?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL tool output.
 */
type PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_FIND_USERS_BY_NAME tool input.
 */
type PIPEDRIVE_FIND_USERS_BY_NAME_INPUT = {
  /**
   * Search By Email
   * @description When enabled, the term will only be matched against email addresses of users. Default: `false`.
   * @default 0
   */
  search_by_email: number;
  /**
   * Term
   * @description The search term to look for
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_FIND_USERS_BY_NAME tool output.
 */
type PIPEDRIVE_FIND_USERS_BY_NAME_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER tool input.
 */
type PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER_INPUT = {
  /**
   * Done
   * @description Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities.
   */
  done?: number;
  /**
   * End Date
   * @description Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format.
   */
  end_date?: string;
  /**
   * Filter Id
   * @description The ID of the filter to use (will narrow down results if used together with `user_id` parameter)
   */
  filter_id?: number;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
   */
  limit?: number;
  /**
   * Start
   * @description For pagination, the position that represents the first result for the page
   */
  start?: number;
  /**
   * Start Date
   * @description Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format.
   */
  start_date?: string;
  /**
   * Type
   * @description The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
   */
  type?: string;
  /**
   * User Id
   * @description The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER tool output.
 */
type PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITIES_BETA tool input.
 */
type PIPEDRIVE_GET_ALL_ACTIVITIES_BETA_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * Done
   * @description Whether the activity is done or not. `false` = Not done, `true` = Done. If omitted, returns both done and not done activities.
   */
  done?: boolean;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
   */
  limit?: number;
  /**
   * Since
   * @description The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  since?: string;
  /**
   * Type
   * @description The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes.
   */
  type?: string;
  /**
   * Until
   * @description The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  until?: string;
  /**
   * User Id
   * @description The ID of the user whose activities will be fetched. If omitted, all activities are returned.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITIES_BETA tool output.
 */
type PIPEDRIVE_GET_ALL_ACTIVITIES_BETA_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS tool input.
 */
type PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS tool output.
 */
type PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITY_TYPES tool input.
 */
type PIPEDRIVE_GET_ALL_ACTIVITY_TYPES_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ACTIVITY_TYPES tool output.
 */
type PIPEDRIVE_GET_ALL_ACTIVITY_TYPES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY tool input.
 */
type PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY tool output.
 */
type PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER tool input.
 */
type PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER_INPUT = {
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. The upper limit is 50.
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER tool output.
 */
type PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE tool input.
 */
type PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE_INPUT = {
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE tool output.
 */
type PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_DEALS tool input.
 */
type PIPEDRIVE_GET_ALL_DEALS_INPUT = {
  /**
   * Filter Id
   * @description The ID of the filter to use
   */
  filter_id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Owned By You
   * @description When supplied, only deals owned by you are returned. However, `filter_id` takes precedence over `owned_by_you` when both are supplied.
   */
  owned_by_you?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
   */
  sort?: string;
  /**
   * Stage Id
   * @description If supplied, only deals within the given stage will be returned
   */
  stage_id?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.
   * @default all_not_deleted
   * @enum {string}
   */
  status: "open" | "won" | "lost" | "deleted" | "all_not_deleted";
  /**
   * User Id
   * @description If supplied, only deals matching the given user will be returned. However, `filter_id` and `owned_by_you` takes precedence over `user_id` when supplied.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_DEALS tool output.
 */
type PIPEDRIVE_GET_ALL_DEALS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_DEALS_BETA tool input.
 */
type PIPEDRIVE_GET_ALL_DEALS_BETA_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
   */
  limit?: number;
  /**
   * Since
   * @description The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  since?: string;
  /**
   * Stage Id
   * @description If supplied, only deals within the given stage will be returned
   */
  stage_id?: number;
  /**
   * Status
   * @description Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.
   * @enum {string}
   */
  status?: "open" | "won" | "lost" | "deleted";
  /**
   * Until
   * @description The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  until?: string;
  /**
   * User Id
   * @description If supplied, only deals matching the given user will be returned
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_DEALS_BETA tool output.
 */
type PIPEDRIVE_GET_ALL_DEALS_BETA_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_DEAL_FIELDS tool input.
 */
type PIPEDRIVE_GET_ALL_DEAL_FIELDS_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_DEAL_FIELDS tool output.
 */
type PIPEDRIVE_GET_ALL_DEAL_FIELDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_FILES tool input.
 */
type PIPEDRIVE_GET_ALL_FILES_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_FILES tool output.
 */
type PIPEDRIVE_GET_ALL_FILES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_FILTERS tool input.
 */
type PIPEDRIVE_GET_ALL_FILTERS_INPUT = {
  /**
   * Type
   * @description The types of filters to fetch
   * @enum {string}
   */
  type?: "deals" | "leads" | "org" | "people" | "products" | "activity" | "projects";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_FILTERS tool output.
 */
type PIPEDRIVE_GET_ALL_FILTERS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_FILTER_HELPERS tool input.
 */
type PIPEDRIVE_GET_ALL_FILTER_HELPERS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_FILTER_HELPERS tool output.
 */
type PIPEDRIVE_GET_ALL_FILTER_HELPERS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_LEADS tool input.
 */
type PIPEDRIVE_GET_ALL_LEADS_INPUT = {
  /**
   * Archived Status
   * @description Filtering based on the archived status of a lead. If not provided, `All` is used.
   * @enum {string}
   */
  archived_status?: "archived" | "not_archived" | "all";
  /**
   * Filter Id
   * @description The ID of the filter to use
   */
  filter_id?: number;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
   */
  limit?: number;
  /**
   * Organization Id
   * @description If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied.
   */
  organization_id?: number;
  /**
   * Owner Id
   * @description If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.
   */
  owner_id?: number;
  /**
   * Person Id
   * @description If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied.
   */
  person_id?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
   * @enum {string}
   */
  sort?: "id" | "title" | "owner_id" | "creator_id" | "was_seen" | "expected_close_date" | "next_activity_id" | "add_time" | "update_time";
  /**
   * Start
   * @description For pagination, the position that represents the first result for the page
   */
  start?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_LEADS tool output.
 */
type PIPEDRIVE_GET_ALL_LEADS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_LEAD_LABELS tool input.
 */
type PIPEDRIVE_GET_ALL_LEAD_LABELS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_LEAD_LABELS tool output.
 */
type PIPEDRIVE_GET_ALL_LEAD_LABELS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_LEAD_SOURCES tool input.
 */
type PIPEDRIVE_GET_ALL_LEAD_SOURCES_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_LEAD_SOURCES tool output.
 */
type PIPEDRIVE_GET_ALL_LEAD_SOURCES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD tool input.
 */
type PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD_INPUT = {
  /**
   * Id
   * @description The ID of the mail thread
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD tool output.
 */
type PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_NOTES tool input.
 */
type PIPEDRIVE_GET_ALL_NOTES_INPUT = {
  /**
   * Deal Id
   * @description The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned.
   */
  deal_id?: number;
  /**
   * End Date
   * @description The date in format of YYYY-MM-DD until which notes to fetch to
   */
  end_date?: string;
  /**
   * Lead Id
   * @description The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned.
   */
  lead_id?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Org Id
   * @description The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned.
   */
  org_id?: number;
  /**
   * Person Id
   * @description The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned.
   */
  person_id?: number;
  /**
   * Pinned To Deal Flag
   * @description If set, the results are filtered by note to deal pinning state
   */
  pinned_to_deal_flag?: number;
  /**
   * Pinned To Lead Flag
   * @description If set, the results are filtered by note to lead pinning state
   */
  pinned_to_lead_flag?: number;
  /**
   * Pinned To Organization Flag
   * @description If set, the results are filtered by note to organization pinning state
   */
  pinned_to_organization_flag?: number;
  /**
   * Pinned To Person Flag
   * @description If set, the results are filtered by note to person pinning state
   */
  pinned_to_person_flag?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * Start Date
   * @description The date in format of YYYY-MM-DD from which notes to fetch
   */
  start_date?: string;
  /**
   * User Id
   * @description The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_NOTES tool output.
 */
type PIPEDRIVE_GET_ALL_NOTES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_NOTE_FIELDS tool input.
 */
type PIPEDRIVE_GET_ALL_NOTE_FIELDS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_NOTE_FIELDS tool output.
 */
type PIPEDRIVE_GET_ALL_NOTE_FIELDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ORGANIZATIONS tool input.
 */
type PIPEDRIVE_GET_ALL_ORGANIZATIONS_INPUT = {
  /**
   * Filter Id
   * @description The ID of the filter to use
   */
  filter_id?: number;
  /**
   * First Char
   * @description If supplied, only organizations whose name starts with the specified letter will be returned (case-insensitive)
   */
  first_char?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * User Id
   * @description If supplied, only organizations owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ORGANIZATIONS tool output.
 */
type PIPEDRIVE_GET_ALL_ORGANIZATIONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA tool input.
 */
type PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * First Char
   * @description If supplied, only organizations whose name starts with the specified letter will be returned (case-insensitive)
   */
  first_char?: string;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
   */
  limit?: number;
  /**
   * Owner Id
   * @description If supplied, only organizations owned by the given user will be returned
   */
  owner_id?: number;
  /**
   * Since
   * @description The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  since?: string;
  /**
   * Until
   * @description The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  until?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA tool output.
 */
type PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS tool input.
 */
type PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS tool output.
 */
type PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the subscription
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERMISSION_SETS tool input.
 */
type PIPEDRIVE_GET_ALL_PERMISSION_SETS_INPUT = {
  /**
   * App
   * @description The app to filter the permission sets by
   * @enum {string}
   */
  app?: "sales" | "projects" | "campaigns" | "global" | "account_settings";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERMISSION_SETS tool output.
 */
type PIPEDRIVE_GET_ALL_PERMISSION_SETS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERSONS tool input.
 */
type PIPEDRIVE_GET_ALL_PERSONS_INPUT = {
  /**
   * Filter Id
   * @description The ID of the filter to use
   */
  filter_id?: number;
  /**
   * First Char
   * @description If supplied, only persons whose name starts with the specified letter will be returned (case-insensitive)
   */
  first_char?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * User Id
   * @description If supplied, only persons owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERSONS tool output.
 */
type PIPEDRIVE_GET_ALL_PERSONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERSONS_BETA tool input.
 */
type PIPEDRIVE_GET_ALL_PERSONS_BETA_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * First Char
   * @description If supplied, only persons whose name starts with the specified letter will be returned (case-insensitive)
   */
  first_char?: string;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.
   */
  limit?: number;
  /**
   * Owner Id
   * @description If supplied, only persons owned by the given user will be returned
   */
  owner_id?: number;
  /**
   * Since
   * @description The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  since?: string;
  /**
   * Until
   * @description The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field.
   */
  until?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERSONS_BETA tool output.
 */
type PIPEDRIVE_GET_ALL_PERSONS_BETA_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERSON_FIELDS tool input.
 */
type PIPEDRIVE_GET_ALL_PERSON_FIELDS_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PERSON_FIELDS tool output.
 */
type PIPEDRIVE_GET_ALL_PERSON_FIELDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PIPELINES tool input.
 */
type PIPEDRIVE_GET_ALL_PIPELINES_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PIPELINES tool output.
 */
type PIPEDRIVE_GET_ALL_PIPELINES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PRODUCTS tool input.
 */
type PIPEDRIVE_GET_ALL_PRODUCTS_INPUT = {
  /**
   * Filter Id
   * @description The ID of the filter to use
   */
  filter_id?: number;
  /**
   * First Char
   * @description If supplied, only products whose name starts with the specified letter will be returned (case-insensitive)
   */
  first_char?: string;
  /**
   * Get Summary
   * @description If supplied, the response will return the total numbers of products in the `additional_data.summary.total_count` property
   */
  get_summary?: boolean;
  /**
   * Ids
   * @description An array of integers with the IDs of the products that should be returned in the response
   */
  ids?: number[];
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * User Id
   * @description If supplied, only products owned by the given user will be returned
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PRODUCTS tool output.
 */
type PIPEDRIVE_GET_ALL_PRODUCTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PRODUCT_FIELDS tool input.
 */
type PIPEDRIVE_GET_ALL_PRODUCT_FIELDS_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PRODUCT_FIELDS tool output.
 */
type PIPEDRIVE_GET_ALL_PRODUCT_FIELDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PROJECTS tool input.
 */
type PIPEDRIVE_GET_ALL_PROJECTS_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * Filter Id
   * @description The ID of the filter to use
   */
  filter_id?: number;
  /**
   * Include Archived
   * @description If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned.
   */
  include_archived?: boolean;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
   */
  limit?: number;
  /**
   * Phase Id
   * @description If supplied, only projects in specified phase are returned
   */
  phase_id?: number;
  /**
   * Status
   * @description If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned.
   */
  status?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PROJECTS tool output.
 */
type PIPEDRIVE_GET_ALL_PROJECTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PROJECT_BOARDS tool input.
 */
type PIPEDRIVE_GET_ALL_PROJECT_BOARDS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PROJECT_BOARDS tool output.
 */
type PIPEDRIVE_GET_ALL_PROJECT_BOARDS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES tool input.
 */
type PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.
   */
  limit?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES tool output.
 */
type PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION tool input.
 */
type PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION_INPUT = {
  /**
   * Org Id
   * @description The ID of the organization to get relationships for
   */
  org_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION tool output.
 */
type PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ROLES tool input.
 */
type PIPEDRIVE_GET_ALL_ROLES_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_ROLES tool output.
 */
type PIPEDRIVE_GET_ALL_ROLES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_STAGES tool input.
 */
type PIPEDRIVE_GET_ALL_STAGES_INPUT = {
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Pipeline Id
   * @description The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.
   */
  pipeline_id?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_STAGES tool output.
 */
type PIPEDRIVE_GET_ALL_STAGES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES tool input.
 */
type PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES_INPUT = {
  /**
   * Term
   * @description Optional search term that is searched for from currency"s name and/or code
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES tool output.
 */
type PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_TASKS tool input.
 */
type PIPEDRIVE_GET_ALL_TASKS_INPUT = {
  /**
   * Assignee Id
   * @description If supplied, only tasks that are assigned to this user are returned
   */
  assignee_id?: number;
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * Done
   * @description Whether the task is done or not. `0` = Not done, `1` = Done. If not omitted then returns both done and not done tasks.
   */
  done?: number;
  /**
   * Limit
   * @description For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.
   */
  limit?: number;
  /**
   * Parent Task Id
   * @description If `null` is supplied then only parent tasks are returned. If integer is supplied then only subtasks of a specific task are returned. By default all tasks are returned.
   */
  parent_task_id?: number;
  /**
   * Project Id
   * @description If supplied, only tasks that are assigned to this project are returned
   */
  project_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_TASKS tool output.
 */
type PIPEDRIVE_GET_ALL_TASKS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_TEAMS tool input.
 */
type PIPEDRIVE_GET_ALL_TEAMS_INPUT = {
  /**
   * Order By
   * @description The field name to sort returned teams by
   * @default id
   * @enum {string}
   */
  order_by: "id" | "name" | "manager_id" | "active_flag";
  /**
   * Skip Users
   * @description When enabled, the teams will not include IDs of member users
   * @default 0
   */
  skip_users: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_TEAMS tool output.
 */
type PIPEDRIVE_GET_ALL_TEAMS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER tool input.
 */
type PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER_INPUT = {
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
  /**
   * Order By
   * @description The field name to sort returned teams by
   * @default id
   * @enum {string}
   */
  order_by: "id" | "name" | "manager_id" | "active_flag";
  /**
   * Skip Users
   * @description When enabled, the teams will not include IDs of member users
   * @default 0
   */
  skip_users: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER tool output.
 */
type PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_USERS tool input.
 */
type PIPEDRIVE_GET_ALL_USERS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_USERS tool output.
 */
type PIPEDRIVE_GET_ALL_USERS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM tool input.
 */
type PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM_INPUT = {
  /**
   * Id
   * @description The ID of the team
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM tool output.
 */
type PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_USER_CONNECTIONS tool input.
 */
type PIPEDRIVE_GET_ALL_USER_CONNECTIONS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_USER_CONNECTIONS tool output.
 */
type PIPEDRIVE_GET_ALL_USER_CONNECTIONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_WEBHOOKS tool input.
 */
type PIPEDRIVE_GET_ALL_WEBHOOKS_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ALL_WEBHOOKS tool output.
 */
type PIPEDRIVE_GET_ALL_WEBHOOKS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_A_SINGLE_TEAM tool input.
 */
type PIPEDRIVE_GET_A_SINGLE_TEAM_INPUT = {
  /**
   * Id
   * @description The ID of the team
   */
  id?: number;
  /**
   * Skip Users
   * @description When enabled, the teams will not include IDs of member users
   * @default 0
   */
  skip_users: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_A_SINGLE_TEAM tool output.
 */
type PIPEDRIVE_GET_A_SINGLE_TEAM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_CURRENT_USER_DATA tool input.
 */
type PIPEDRIVE_GET_CURRENT_USER_DATA_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_CURRENT_USER_DATA tool output.
 */
type PIPEDRIVE_GET_CURRENT_USER_DATA_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE tool input.
 */
type PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE_INPUT = {
  /**
   * End Date
   * @description The end of the period. Date in format of YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Id
   * @description The ID of the pipeline
   */
  id?: number;
  /**
   * Start Date
   * @description The start of the period. Date in format of YYYY-MM-DD.
   */
  start_date?: string;
  /**
   * User Id
   * @description The ID of the user who"s pipeline metrics statistics to fetch. If omitted, the authorized user will be used.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE tool output.
 */
type PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_IN_A_PIPELINE tool input.
 */
type PIPEDRIVE_GET_DEALS_IN_A_PIPELINE_INPUT = {
  /**
   * Everyone
   * @description If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned
   */
  everyone?: number;
  /**
   * Filter Id
   * @description If supplied, only deals matching the given filter will be returned
   */
  filter_id?: number;
  /**
   * Get Summary
   * @description Whether to include a summary of the pipeline in the `additional_data` or not
   */
  get_summary?: number;
  /**
   * Id
   * @description The ID of the pipeline
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Stage Id
   * @description If supplied, only deals within the given stage will be returned
   */
  stage_id?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * Totals Convert Currency
   * @description The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled.
   */
  totals_convert_currency?: string;
  /**
   * User Id
   * @description If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_IN_A_PIPELINE tool output.
 */
type PIPEDRIVE_GET_DEALS_IN_A_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_IN_A_STAGE tool input.
 */
type PIPEDRIVE_GET_DEALS_IN_A_STAGE_INPUT = {
  /**
   * Everyone
   * @description If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned
   */
  everyone?: number;
  /**
   * Filter Id
   * @description If supplied, only deals matching the given filter will be returned
   */
  filter_id?: number;
  /**
   * Id
   * @description The ID of the stage
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * User Id
   * @description If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_IN_A_STAGE tool output.
 */
type PIPEDRIVE_GET_DEALS_IN_A_STAGE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE tool input.
 */
type PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE_INPUT = {
  /**
   * End Date
   * @description The end of the period. Date in format of YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Id
   * @description The ID of the pipeline
   */
  id?: number;
  /**
   * Start Date
   * @description The start of the period. Date in format of YYYY-MM-DD.
   */
  start_date?: string;
  /**
   * User Id
   * @description The ID of the user who"s pipeline statistics to fetch. If omitted, the authorized user will be used.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE tool output.
 */
type PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_SUMMARY tool input.
 */
type PIPEDRIVE_GET_DEALS_SUMMARY_INPUT = {
  /**
   * Filter Id
   * @description <code>user_id</code> will not be considered. Only deals matching the given filter will be returned.
   */
  filter_id?: number;
  /**
   * Stage Id
   * @description Only deals within the given stage will be returned
   */
  stage_id?: number;
  /**
   * Status
   * @description Only fetch deals with a specific status. open = Open, won = Won, lost = Lost.
   * @enum {string}
   */
  status?: "open" | "won" | "lost";
  /**
   * User Id
   * @description Only deals matching the given user will be returned. `user_id` will not be considered if you use `filter_id`.
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_SUMMARY tool output.
 */
type PIPEDRIVE_GET_DEALS_SUMMARY_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_TIMELINE tool input.
 */
type PIPEDRIVE_GET_DEALS_TIMELINE_INPUT = {
  /**
   * Amount
   * @description The number of given intervals, starting from `start_date`, to fetch. E.g. 3 (months).
   */
  amount?: number;
  /**
   * Exclude Deals
   * @description Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned.
   */
  exclude_deals?: number;
  /**
   * Field Key
   * @description The date field key which deals will be retrieved from
   */
  field_key?: string;
  /**
   * Filter Id
   * @description If supplied, only deals matching the given filter will be returned
   */
  filter_id?: number;
  /**
   * Interval
   * @description The type of the interval<table><tr><th>Value</th><th>Description</th></tr><tr><td>`day`</td><td>Day</td></tr><tr><td>`week`</td><td>A full week (7 days) starting from `start_date`</td></tr><tr><td>`month`</td><td>A full month (depending on the number of days in given month) starting from `start_date`</td></tr><tr><td>`quarter`</td><td>A full quarter (3 months) starting from `start_date`</td></tr></table>
   * @enum {string}
   */
  interval?: "day" | "week" | "month" | "quarter";
  /**
   * Pipeline Id
   * @description If supplied, only deals matching the given pipeline will be returned
   */
  pipeline_id?: number;
  /**
   * Start Date
   * @description The date when the first interval starts. Format: YYYY-MM-DD.
   */
  start_date?: string;
  /**
   * Totals Convert Currency
   * @description The 3-letter currency code of any of the supported currencies. When supplied, `totals_converted` is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to `default_currency` in which case the user"s default currency is used.
   */
  totals_convert_currency?: string;
  /**
   * User Id
   * @description If supplied, only deals matching the given user will be returned
   */
  user_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_TIMELINE tool output.
 */
type PIPEDRIVE_GET_DEALS_TIMELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO tool input.
 */
type PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.
   * @default all_not_deleted
   * @enum {string}
   */
  status: "open" | "won" | "lost" | "deleted" | "all_not_deleted";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO tool output.
 */
type PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY_INPUT = {
  /**
   * Id
   * @description The ID of the activity
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_BOARD tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_BOARD_INPUT = {
  /**
   * Id
   * @description The ID of the project board
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_BOARD tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_BOARD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG_INPUT = {
  /**
   * Id
   * @description The ID received when you create the call log
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_DEAL tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_DEAL tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_PERSON tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_PERSON tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_PHASE tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_PHASE_INPUT = {
  /**
   * Id
   * @description The ID of the project phase
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_PHASE tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_PHASE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_PROJECT tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_PROJECT_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_PROJECT tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_PROJECT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the subscription
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_TASK tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_TASK_INPUT = {
  /**
   * Id
   * @description The ID of the task
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_TASK tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_TASK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE tool input.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE_INPUT = {
  /**
   * Id
   * @description The ID of the project template
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE tool output.
 */
type PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_MAIL_THREADS tool input.
 */
type PIPEDRIVE_GET_MAIL_THREADS_INPUT = {
  /**
   * Folder
   * @description The type of folder to fetch
   * @enum {string}
   */
  folder?: "inbox" | "drafts" | "sent" | "archive";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_MAIL_THREADS tool output.
 */
type PIPEDRIVE_GET_MAIL_THREADS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_COMMENT tool input.
 */
type PIPEDRIVE_GET_ONE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment
   */
  commentId?: string;
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_COMMENT tool output.
 */
type PIPEDRIVE_GET_ONE_COMMENT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_DEAL_FIELD tool input.
 */
type PIPEDRIVE_GET_ONE_DEAL_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_DEAL_FIELD tool output.
 */
type PIPEDRIVE_GET_ONE_DEAL_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_FILE tool input.
 */
type PIPEDRIVE_GET_ONE_FILE_INPUT = {
  /**
   * Id
   * @description The ID of the file
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_FILE tool output.
 */
type PIPEDRIVE_GET_ONE_FILE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_FILTER tool input.
 */
type PIPEDRIVE_GET_ONE_FILTER_INPUT = {
  /**
   * Id
   * @description The ID of the filter
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_FILTER tool output.
 */
type PIPEDRIVE_GET_ONE_FILTER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_LEAD tool input.
 */
type PIPEDRIVE_GET_ONE_LEAD_INPUT = {
  /**
   * Id
   * @description The ID of the lead
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_LEAD tool output.
 */
type PIPEDRIVE_GET_ONE_LEAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_MAIL_MESSAGE tool input.
 */
type PIPEDRIVE_GET_ONE_MAIL_MESSAGE_INPUT = {
  /**
   * Id
   * @description The ID of the mail message to fetch
   */
  id?: number;
  /**
   * Include Body
   * @description Whether to include the full message body or not. `0` = Don"t include, `1` = Include.
   * @default 0
   */
  include_body: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_MAIL_MESSAGE tool output.
 */
type PIPEDRIVE_GET_ONE_MAIL_MESSAGE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_MAIL_THREAD tool input.
 */
type PIPEDRIVE_GET_ONE_MAIL_THREAD_INPUT = {
  /**
   * Id
   * @description The ID of the mail thread
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_MAIL_THREAD tool output.
 */
type PIPEDRIVE_GET_ONE_MAIL_THREAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_NOTE tool input.
 */
type PIPEDRIVE_GET_ONE_NOTE_INPUT = {
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_NOTE tool output.
 */
type PIPEDRIVE_GET_ONE_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD tool input.
 */
type PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD tool output.
 */
type PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP tool input.
 */
type PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP_INPUT = {
  /**
   * Id
   * @description The ID of the organization relationship
   */
  id?: number;
  /**
   * Org Id
   * @description The ID of the base organization for the returned calculated values
   */
  org_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP tool output.
 */
type PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PERMISSION_SET tool input.
 */
type PIPEDRIVE_GET_ONE_PERMISSION_SET_INPUT = {
  /**
   * Id
   * @description The ID of the permission set
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PERMISSION_SET tool output.
 */
type PIPEDRIVE_GET_ONE_PERMISSION_SET_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PERSON_FIELD tool input.
 */
type PIPEDRIVE_GET_ONE_PERSON_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PERSON_FIELD tool output.
 */
type PIPEDRIVE_GET_ONE_PERSON_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PIPELINE tool input.
 */
type PIPEDRIVE_GET_ONE_PIPELINE_INPUT = {
  /**
   * Id
   * @description The ID of the pipeline
   */
  id?: number;
  /**
   * Totals Convert Currency
   * @description The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned in `deals_summary` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used.
   */
  totals_convert_currency?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PIPELINE tool output.
 */
type PIPEDRIVE_GET_ONE_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PRODUCT tool input.
 */
type PIPEDRIVE_GET_ONE_PRODUCT_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PRODUCT tool output.
 */
type PIPEDRIVE_GET_ONE_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PRODUCT_FIELD tool input.
 */
type PIPEDRIVE_GET_ONE_PRODUCT_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the product field
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_PRODUCT_FIELD tool output.
 */
type PIPEDRIVE_GET_ONE_PRODUCT_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_ROLE tool input.
 */
type PIPEDRIVE_GET_ONE_ROLE_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_ROLE tool output.
 */
type PIPEDRIVE_GET_ONE_ROLE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_STAGE tool input.
 */
type PIPEDRIVE_GET_ONE_STAGE_INPUT = {
  /**
   * Everyone
   * @description If `everyone=1` is provided, deals summary will return deals owned by every user
   */
  everyone?: number;
  /**
   * Id
   * @description The ID of the stage
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_STAGE tool output.
 */
type PIPEDRIVE_GET_ONE_STAGE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_USER tool input.
 */
type PIPEDRIVE_GET_ONE_USER_INPUT = {
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_ONE_USER tool output.
 */
type PIPEDRIVE_GET_ONE_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_PROJECT_PHASES tool input.
 */
type PIPEDRIVE_GET_PROJECT_PHASES_INPUT = {
  /**
   * Board Id
   * @description ID of the board for which phases are requested
   */
  board_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_PROJECT_PHASES tool output.
 */
type PIPEDRIVE_GET_PROJECT_PHASES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_RECENTS tool input.
 */
type PIPEDRIVE_GET_RECENTS_INPUT = {
  /**
   * Items
   * @description Multiple selection of item types to include in the query (optional)
   * @enum {string}
   */
  items?: "activity" | "activityType" | "deal" | "file" | "filter" | "note" | "person" | "organization" | "pipeline" | "product" | "stage" | "user";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Since Timestamp
   * @description The timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS.
   */
  since_timestamp?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_RECENTS tool output.
 */
type PIPEDRIVE_GET_RECENTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_GET_RESULT_OF_A_GOAL tool input.
 */
type PIPEDRIVE_GET_RESULT_OF_A_GOAL_INPUT = {
  /**
   * Id
   * @description The ID of the goal that the results are looked for
   */
  id?: string;
  /**
   * Period  End
   * @description The end date of the period for which to find the goal"s progress. Format: YYYY-MM-DD. This date must be the same or before the goal duration end date.
   */
  period__end?: string;
  /**
   * Period  Start
   * @description The start date of the period for which to find the goal"s progress. Format: YYYY-MM-DD. This date must be the same or after the goal duration start date.
   */
  period__start?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_GET_RESULT_OF_A_GOAL tool output.
 */
type PIPEDRIVE_GET_RESULT_OF_A_GOAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM tool input.
 */
type PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM_INPUT = {
  /**
   * Item Id
   * @description The ID of the item to associate the file with
   */
  item_id?: number;
  /**
   * Item Type
   * @description The item type
   * @enum {string}
   */
  item_type?: "deal" | "organization" | "person";
  /**
   * Remote Id
   * @description The remote item ID
   */
  remote_id?: string;
  /**
   * Remote Location
   * @description The location type to send the file to. Only `googledrive` is supported at the moment.
   * @enum {string}
   */
  remote_location?: "googledrive";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM tool output.
 */
type PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION tool input.
 */
type PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION_INPUT = {
  /**
   * Company Id
   * @description Pipedrive company ID
   */
  company_id?: number;
  /**
   * Marketplace Client Id
   * @description Pipedrive Marketplace client ID of the installed integration
   */
  marketplace_client_id?: string;
  /**
   * User Id
   * @description Pipedrive user ID
   */
  user_id?: number;
  /**
   * User Provider Id
   * Format: uuid
   * @description Unique identifier linking a user to the installed integration. Generated by the integration.
   */
  user_provider_id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION tool output.
 */
type PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION_INPUT = {
  /**
   * Done
   * @description Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
   */
  done?: number;
  /**
   * Exclude
   * @description A comma-separated string of activity IDs to exclude from result
   */
  exclude?: string;
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL_INPUT = {
  /**
   * Done
   * @description Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities.
   */
  done?: number;
  /**
   * Exclude
   * @description A comma-separated string of activity IDs to exclude from result
   */
  exclude?: string;
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON_INPUT = {
  /**
   * Done
   * @description Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities.
   */
  done?: number;
  /**
   * Exclude
   * @description A comma-separated string of activity IDs to exclude from result
   */
  exclude?: string;
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Only Primary Association
   * @description If set, only deals that are directly associated to the organization are fetched. If not set (default), all deals are fetched that are either directly or indirectly related to the organization. Indirect relations include relations through custom, organization-type fields and through persons of the given organization.
   */
  only_primary_association?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.
   * @default all_not_deleted
   * @enum {string}
   */
  status: "open" | "won" | "lost" | "deleted" | "all_not_deleted";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.
   * @default all_not_deleted
   * @enum {string}
   */
  status: "open" | "won" | "lost" | "deleted" | "all_not_deleted";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT tool input.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Sort
   * @description The field name and sorting mode (`field_name_1 ASC` or `field_name_1 DESC`). Supported fields: `update_time`, `id`.
   */
  sort?: string;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT tool output.
 */
type PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT tool input.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT tool output.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER tool input.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER_INPUT = {
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER tool output.
 */
type PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS tool input.
 */
type PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS_INPUT = {
  /**
   * Id
   * @description The ID of the permission set
   */
  id?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS tool output.
 */
type PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERMITTED_USERS tool input.
 */
type PIPEDRIVE_LIST_PERMITTED_USERS_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERMITTED_USERS tool output.
 */
type PIPEDRIVE_LIST_PERMITTED_USERS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERSON_ACCESS_USERS tool input.
 */
type PIPEDRIVE_LIST_PERSON_ACCESS_USERS_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PERSON_ACCESS_USERS tool output.
 */
type PIPEDRIVE_LIST_PERSON_ACCESS_USERS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE tool input.
 */
type PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
  /**
   * Visible
   * @description Whether to return the visible or hidden pipelines for the role
   * @default true
   */
  visible: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE tool output.
 */
type PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Include Product Data
   * @description Whether to fetch product data along with each attached product (1) or not (0, default)
   */
  include_product_data?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS tool input.
 */
type PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS tool output.
 */
type PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ROLE_ASSIGNMENTS tool input.
 */
type PIPEDRIVE_LIST_ROLE_ASSIGNMENTS_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ROLE_ASSIGNMENTS tool output.
 */
type PIPEDRIVE_LIST_ROLE_ASSIGNMENTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ROLE_SETTINGS tool input.
 */
type PIPEDRIVE_LIST_ROLE_SETTINGS_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_ROLE_SETTINGS tool output.
 */
type PIPEDRIVE_LIST_ROLE_SETTINGS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER tool input.
 */
type PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER_INPUT = object;

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER tool output.
 */
type PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION_INPUT = {
  /**
   * All Changes
   * @description Whether to show custom field updates or not. 1 = Include custom field changes. If omitted, returns changes without custom field updates.
   */
  all_changes?: string;
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Items
   * @description A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document).
   */
  items?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL_INPUT = {
  /**
   * All Changes
   * @description Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.
   */
  all_changes?: string;
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Items
   * @description A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change).
   */
  items?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON tool input.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON_INPUT = {
  /**
   * All Changes
   * @description Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates.
   */
  all_changes?: string;
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Items
   * @description A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change).
   */
  items?: string;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON tool output.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL tool input.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL_INPUT = {
  /**
   * Cursor
   * @description For pagination, the marker (an opaque string value) representing the first item on the next page
   */
  cursor?: string;
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL tool output.
 */
type PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_USER_PERMISSIONS tool input.
 */
type PIPEDRIVE_LIST_USER_PERMISSIONS_INPUT = {
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_USER_PERMISSIONS tool output.
 */
type PIPEDRIVE_LIST_USER_PERMISSIONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_USER_ROLE_SETTINGS tool input.
 */
type PIPEDRIVE_LIST_USER_ROLE_SETTINGS_INPUT = {
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_LIST_USER_ROLE_SETTINGS tool output.
 */
type PIPEDRIVE_LIST_USER_ROLE_SETTINGS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_MERGE_TWO_DEALS tool input.
 */
type PIPEDRIVE_MERGE_TWO_DEALS_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Merge With Id
   * @description The ID of the deal that the deal will be merged with
   */
  merge_with_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_MERGE_TWO_DEALS tool output.
 */
type PIPEDRIVE_MERGE_TWO_DEALS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_MERGE_TWO_ORGANIZATIONS tool input.
 */
type PIPEDRIVE_MERGE_TWO_ORGANIZATIONS_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
  /**
   * Merge With Id
   * @description The ID of the organization that the organization will be merged with
   */
  merge_with_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_MERGE_TWO_ORGANIZATIONS tool output.
 */
type PIPEDRIVE_MERGE_TWO_ORGANIZATIONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_MERGE_TWO_PERSONS tool input.
 */
type PIPEDRIVE_MERGE_TWO_PERSONS_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
  /**
   * Merge With Id
   * @description The ID of the person that will not be overwritten. This person’s data will be prioritized in case of conflict with the other person.
   */
  merge_with_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_MERGE_TWO_PERSONS tool output.
 */
type PIPEDRIVE_MERGE_TWO_PERSONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST tool input.
 */
type PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST tool output.
 */
type PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES tool input.
 */
type PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
   */
  exact_match?: boolean;
  /**
   * Fields
   * @description A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>`custom_fields`, `notes`, `title`</td></tr> <tr><td>Person</td><td>`custom_fields`, `email`, `name`, `notes`, `phone`</td></tr> <tr><td>Organization</td><td>`address`, `custom_fields`, `name`, `notes`</td></tr> <tr><td>Product</td><td>`code`, `custom_fields`, `name`</td></tr> <tr><td>Lead</td><td>`custom_fields`, `notes`, `email`, `organization_name`, `person_name`, `phone`, `title`</td></tr> <tr><td>File</td><td>`name`</td></tr> <tr><td>Mail attachment</td><td>`name`</td></tr> <tr><td>Project</td><td> `custom_fields`, `notes`, `title`, `description` </td></tr> </table> <br> Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.<br/> When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use `search_for_related_items`.
   * @enum {string}
   */
  fields?: "address" | "code" | "custom_fields" | "email" | "name" | "notes" | "organization_name" | "person_name" | "phone" | "title" | "description";
  /**
   * Include Fields
   * @description A comma-separated string array. Supports including optional fields in the results which are not provided by default.
   * @enum {string}
   */
  include_fields?: "deal.cc_email" | "person.picture" | "product.price";
  /**
   * Item Types
   * @description A comma-separated string array. The type of items to perform the search from. Defaults to all.
   * @enum {string}
   */
  item_types?: "deal" | "person" | "organization" | "product" | "lead" | "file" | "mail_attachment" | "project";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Search For Related Items
   * @description When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization
   */
  search_for_related_items?: boolean;
  /**
   * Start
   * @description Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
   * @default 0
   */
  start: number;
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES tool output.
 */
type PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS tool input.
 */
type PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS_INPUT = {
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start
   * @default 0
   */
  start: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS tool output.
 */
type PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE tool input.
 */
type PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE_INPUT = {
  /**
   * Attachments
   * @description The list of attachments available in the message
   */
  attachments?: {
      [key: string]: unknown;
  }[];
  /**
   * Channel Id
   * @description The channel ID as in the provider
   */
  channel_id?: string;
  /**
   * Conversation Id
   * @description The ID of the conversation
   */
  conversation_id?: string;
  /**
   * Conversation Link
   * Format: url
   * @description A URL that can open the conversation in the provider"s side
   */
  conversation_link?: string;
  /**
   * Created At
   * Format: date-time
   * @description The date and time when the message was created in the provider, in UTC. Format: YYYY-MM-DD HH:MM
   */
  created_at?: string;
  /**
   * Id
   * @description The ID of the message
   */
  id?: string;
  /**
   * Message
   * @description The body of the message
   */
  message?: string;
  /**
   * Reply By
   * Format: date-time
   * @description The date and time when the message can no longer receive a reply, in UTC. Format: YYYY-MM-DD HH:MM
   */
  reply_by?: string;
  /**
   * Sender Id
   * @description The ID of the provider"s user that sent the message
   */
  sender_id?: string;
  /**
   * Status
   * @description The status of the message
   * @enum {string}
   */
  status?: "sent" | "delivered" | "read" | "failed";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE tool output.
 */
type PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_REFRESHING_THE_TOKENS tool input.
 */
type PIPEDRIVE_REFRESHING_THE_TOKENS_INPUT = {
  /**
   * Grant Type
   * @description Since you are to refresh your access_token, you must use the value "refresh_token"
   * @default refresh_token
   * @enum {string}
   */
  grant_type: "authorization_code" | "refresh_token";
  /**
   * Refresh Token
   * @description The refresh token that you received after you exchanged the authorization code
   */
  refresh_token?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_REFRESHING_THE_TOKENS tool output.
 */
type PIPEDRIVE_REFRESHING_THE_TOKENS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_REQUESTING_AUTHORIZATION tool input.
 */
type PIPEDRIVE_REQUESTING_AUTHORIZATION_INPUT = {
  /**
   * Client Id
   * @description The client ID provided to you by the Pipedrive Marketplace when you register your app
   */
  client_id?: string;
  /**
   * Redirect Uri
   * @description The callback URL you provided when you registered your app. Authorization code will be sent to that URL (if it matches with the value you entered in the registration form) if a user approves the app install. Or, if a customer declines, the corresponding error will also be sent to this URL.
   */
  redirect_uri?: string;
  /**
   * State
   * @description You may pass any random string as the state parameter and the same string will be returned to your app after a user authorizes access. It may be used to store the user"s session ID from your app or distinguish different responses. Using state may increase security; see RFC-6749. The state parameter is not automatically available in Marketplace Manager. To enable it for your app, please write to us at marketplace.devs@pipedrive.com.
   */
  state?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_REQUESTING_AUTHORIZATION tool output.
 */
type PIPEDRIVE_REQUESTING_AUTHORIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES tool input.
 */
type PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES tool output.
 */
type PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_GROUPS tool input.
 */
type PIPEDRIVE_RETURNS_PROJECT_GROUPS_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_GROUPS tool output.
 */
type PIPEDRIVE_RETURNS_PROJECT_GROUPS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_PLAN tool input.
 */
type PIPEDRIVE_RETURNS_PROJECT_PLAN_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_PLAN tool output.
 */
type PIPEDRIVE_RETURNS_PROJECT_PLAN_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_TASKS tool input.
 */
type PIPEDRIVE_RETURNS_PROJECT_TASKS_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_RETURNS_PROJECT_TASKS tool output.
 */
type PIPEDRIVE_RETURNS_PROJECT_TASKS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_DEALS tool input.
 */
type PIPEDRIVE_SEARCH_DEALS_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
   */
  exact_match?: boolean;
  /**
   * Fields
   * @description A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.
   * @enum {string}
   */
  fields?: "custom_fields" | "notes" | "title";
  /**
   * Include Fields
   * @description Supports including optional fields in the results which are not provided by default
   * @enum {string}
   */
  include_fields?: "deal.cc_email";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Organization Id
   * @description Will filter deals by the provided organization ID. The upper limit of found deals associated with the organization is 2000.
   */
  organization_id?: number;
  /**
   * Person Id
   * @description Will filter deals by the provided person ID. The upper limit of found deals associated with the person is 2000.
   */
  person_id?: number;
  /**
   * Start
   * @description Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
   * @default 0
   */
  start: number;
  /**
   * Status
   * @description Will filter deals by the provided specific status. open = Open, won = Won, lost = Lost. The upper limit of found deals associated with the status is 2000.
   * @enum {string}
   */
  status?: "open" | "won" | "lost";
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_DEALS tool output.
 */
type PIPEDRIVE_SEARCH_DEALS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_ITEM_BY_FIELD tool input.
 */
type PIPEDRIVE_SEARCH_ITEM_BY_FIELD_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive.
   * @default false
   */
  exact_match: boolean;
  /**
   * Field Key
   * @description The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields" API GET methods (dealFields, personFields, etc.). Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.
   */
  field_key?: string;
  /**
   * Field Type
   * @description The type of the field to perform the search from
   * @enum {string}
   */
  field_type?: "dealField" | "leadField" | "personField" | "organizationField" | "productField" | "projectField";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Return Item Ids
   * @description Whether to return the IDs of the matching items or not. When not set or set to `0` or `false`, only distinct values of the searched field are returned. When set to `1` or `true`, the ID of each found item is returned.
   */
  return_item_ids?: boolean;
  /**
   * Start
   * @description Pagination start
   */
  start?: number;
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_ITEM_BY_FIELD tool output.
 */
type PIPEDRIVE_SEARCH_ITEM_BY_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_LEADS tool input.
 */
type PIPEDRIVE_SEARCH_LEADS_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
   */
  exact_match?: boolean;
  /**
   * Fields
   * @description A comma-separated string array. The fields to perform the search from. Defaults to all of them.
   * @enum {string}
   */
  fields?: "custom_fields" | "notes" | "title";
  /**
   * Include Fields
   * @description Supports including optional fields in the results which are not provided by default
   * @enum {string}
   */
  include_fields?: "lead.was_seen";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Organization Id
   * @description Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
   */
  organization_id?: number;
  /**
   * Person Id
   * @description Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
   */
  person_id?: number;
  /**
   * Start
   * @description Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
   * @default 0
   */
  start: number;
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_LEADS tool output.
 */
type PIPEDRIVE_SEARCH_LEADS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_ORGANIZATIONS tool input.
 */
type PIPEDRIVE_SEARCH_ORGANIZATIONS_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
   */
  exact_match?: boolean;
  /**
   * Fields
   * @description A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.
   * @enum {string}
   */
  fields?: "address" | "custom_fields" | "notes" | "name";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
   * @default 0
   */
  start: number;
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_ORGANIZATIONS tool output.
 */
type PIPEDRIVE_SEARCH_ORGANIZATIONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_PERSONS tool input.
 */
type PIPEDRIVE_SEARCH_PERSONS_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
   */
  exact_match?: boolean;
  /**
   * Fields
   * @description A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.
   * @enum {string}
   */
  fields?: "custom_fields" | "email" | "notes" | "phone" | "name";
  /**
   * Include Fields
   * @description Supports including optional fields in the results which are not provided by default
   * @enum {string}
   */
  include_fields?: "person.picture";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Organization Id
   * @description Will filter persons by the provided organization ID. The upper limit of found persons associated with the organization is 2000.
   */
  organization_id?: number;
  /**
   * Start
   * @description Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
   * @default 0
   */
  start: number;
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_PERSONS tool output.
 */
type PIPEDRIVE_SEARCH_PERSONS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_PRODUCTS tool input.
 */
type PIPEDRIVE_SEARCH_PRODUCTS_INPUT = {
  /**
   * Exact Match
   * @description When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
   */
  exact_match?: boolean;
  /**
   * Fields
   * @description A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href="https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields" target="_blank" rel="noopener noreferrer">here</a>.
   * @enum {string}
   */
  fields?: "code" | "custom_fields" | "name";
  /**
   * Include Fields
   * @description Supports including optional fields in the results which are not provided by default
   * @enum {string}
   */
  include_fields?: "product.price";
  /**
   * Limit
   * @description Items shown per page
   */
  limit?: number;
  /**
   * Start
   * @description Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.
   * @default 0
   */
  start: number;
  /**
   * Term
   * @description The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
   */
  term?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_SEARCH_PRODUCTS tool output.
 */
type PIPEDRIVE_SEARCH_PRODUCTS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION tool input.
 */
type PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION_INPUT = {
  /**
   * Id
   * @description Unique identifier linking a user to the installed integration
   */
  id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION tool output.
 */
type PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN tool input.
 */
type PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN_INPUT = {
  /**
   * Activity Id
   * @description The ID of the activity
   */
  activityId?: number;
  /**
   * Group Id
   * @description The ID of a group on a project board
   */
  group_id?: number;
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
  /**
   * Phase Id
   * @description The ID of a phase on a project board
   */
  phase_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN tool output.
 */
type PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ACTIVITY tool input.
 */
type PIPEDRIVE_UPDATE_AN_ACTIVITY_INPUT = {
  /**
   * Id
   * @description The ID of the activity
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ACTIVITY tool output.
 */
type PIPEDRIVE_UPDATE_AN_ACTIVITY_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE tool input.
 */
type PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE_INPUT = {
  /**
   * Color
   * @description A designated color for the activity type in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
   */
  color?: string;
  /**
   * Icon Key
   * @description Icon graphic to use for representing this activity type
   * @enum {string}
   */
  icon_key?: "task" | "email" | "meeting" | "deadline" | "call" | "lunch" | "calendar" | "downarrow" | "document" | "smartphone" | "camera" | "scissors" | "cogs" | "bubble" | "uparrow" | "checkbox" | "signpost" | "shuffle" | "addressbook" | "linegraph" | "picture" | "car" | "world" | "search" | "clip" | "sound" | "brush" | "key" | "padlock" | "pricetag" | "suitcase" | "finish" | "plane" | "loop" | "wifi" | "truck" | "cart" | "bulb" | "bell" | "presentation";
  /**
   * Id
   * @description The ID of the activity type
   */
  id?: number;
  /**
   * Name
   * @description The name of the activity type
   */
  name?: string;
  /**
   * Order Nr
   * @description An order number for this activity type. Order numbers should be used to order the types in the activity type selections.
   */
  order_nr?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE tool output.
 */
type PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION_INPUT = {
  /**
   * Id
   * @description The ID of the subscription
   */
  id?: number;
  /**
   * Payments
   * @description Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
   */
  payments?: {
      [key: string]: unknown;
  }[];
  /**
   * Update Deal Value
   * @description Indicates that the deal value must be set to installment subscription"s total value
   */
  update_deal_value?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ORGANIZATION tool input.
 */
type PIPEDRIVE_UPDATE_AN_ORGANIZATION_INPUT = {
  /**
   * Id
   * @description The ID of the organization
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ORGANIZATION tool output.
 */
type PIPEDRIVE_UPDATE_AN_ORGANIZATION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD tool input.
 */
type PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD_INPUT = {
  /**
   * Add Visible Flag
   * @description Whether the field is available in "add new" modal or not (both in web and mobile app)
   * @default true
   */
  add_visible_flag: boolean;
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
  /**
   * Name
   * @description The name of the field
   */
  name?: string;
  /**
   * Options
   * @description When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`
   */
  options?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD tool output.
 */
type PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP tool input.
 */
type PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP_INPUT = {
  /**
   * Id
   * @description The ID of the organization relationship
   */
  id?: number;
  /**
   * Org Id
   * @description The ID of the base organization for the returned calculated values
   */
  org_id?: number;
  /**
   * Rel Linked Org Id
   * @description The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter.
   */
  rel_linked_org_id?: number;
  /**
   * Rel Owner Org Id
   * @description The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
   */
  rel_owner_org_id?: number;
  /**
   * Type
   * @description The type of organization relationship
   * @enum {string}
   */
  type?: "parent" | "related";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP tool output.
 */
type PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE tool input.
 */
type PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment
   */
  commentId?: string;
  /**
   * Content
   * @description The content of the comment in HTML format. Subject to sanitization on the back-end.
   */
  content?: string;
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE tool output.
 */
type PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_DEAL tool input.
 */
type PIPEDRIVE_UPDATE_A_DEAL_INPUT = {
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_DEAL tool output.
 */
type PIPEDRIVE_UPDATE_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_DEAL_FIELD tool input.
 */
type PIPEDRIVE_UPDATE_A_DEAL_FIELD_INPUT = {
  /**
   * Add Visible Flag
   * @description Whether the field is available in "add new" modal or not (both in web and mobile app)
   * @default true
   */
  add_visible_flag: boolean;
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
  /**
   * Name
   * @description The name of the field
   */
  name?: string;
  /**
   * Options
   * @description When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`
   */
  options?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_DEAL_FIELD tool output.
 */
type PIPEDRIVE_UPDATE_A_DEAL_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_LEAD tool input.
 */
type PIPEDRIVE_UPDATE_A_LEAD_INPUT = {
  /**
   * Expected Close Date
   * Format: date
   * @description The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
   */
  expected_close_date?: string;
  /**
   * Id
   * @description The ID of the lead
   */
  id?: string;
  /**
   * Is Archived
   * @description A flag indicating whether the lead is archived or not
   */
  is_archived?: boolean;
  /**
   * Label Ids
   * @description The IDs of the lead labels which will be associated with the lead
   */
  label_ids?: string[];
  /**
   * Organization Id
   * @description The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.
   */
  organization_id?: number;
  /**
   * Owner Id
   * @description The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.
   */
  owner_id?: number;
  /**
   * Person Id
   * @description The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.
   */
  person_id?: number;
  /**
   * Title
   * @description The name of the lead
   */
  title?: string;
  /**
   * Value  Amount
   * @description Amount
   */
  value__amount?: number;
  /**
   * Value  Currency
   * @description Currency
   */
  value__currency?: string;
  /**
   * Was Seen
   * @description A flag indicating whether the lead was seen by someone in the Pipedrive UI
   */
  was_seen?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_LEAD tool output.
 */
type PIPEDRIVE_UPDATE_A_LEAD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_LEAD_LABEL tool input.
 */
type PIPEDRIVE_UPDATE_A_LEAD_LABEL_INPUT = {
  /**
   * Color
   * @description The color of the label. Only a subset of colors can be used.
   * @enum {string}
   */
  color?: "green" | "blue" | "red" | "yellow" | "purple" | "gray";
  /**
   * Id
   * @description The ID of the lead label
   */
  id?: string;
  /**
   * Name
   * @description The name of the lead label
   */
  name?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_LEAD_LABEL tool output.
 */
type PIPEDRIVE_UPDATE_A_LEAD_LABEL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_NOTE tool input.
 */
type PIPEDRIVE_UPDATE_A_NOTE_INPUT = {
  /**
   * Id
   * @description The ID of the note
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_NOTE tool output.
 */
type PIPEDRIVE_UPDATE_A_NOTE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PERSON tool input.
 */
type PIPEDRIVE_UPDATE_A_PERSON_INPUT = {
  /**
   * Id
   * @description The ID of the person
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PERSON tool output.
 */
type PIPEDRIVE_UPDATE_A_PERSON_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PERSON_FIELD tool input.
 */
type PIPEDRIVE_UPDATE_A_PERSON_FIELD_INPUT = {
  /**
   * Add Visible Flag
   * @description Whether the field is available in "add new" modal or not (both in web and mobile app)
   * @default true
   */
  add_visible_flag: boolean;
  /**
   * Id
   * @description The ID of the field
   */
  id?: number;
  /**
   * Name
   * @description The name of the field
   */
  name?: string;
  /**
   * Options
   * @description When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`
   */
  options?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PERSON_FIELD tool output.
 */
type PIPEDRIVE_UPDATE_A_PERSON_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PIPELINE tool input.
 */
type PIPEDRIVE_UPDATE_A_PIPELINE_INPUT = {
  /**
   * Id
   * @description The ID of the pipeline
   */
  id?: number;
  /**
   * Name
   * @description The name of the pipeline
   */
  name?: string;
  /**
   * Order Nr
   * @description Defines the order of pipelines. First order (`order_nr=0`) is the default pipeline.
   */
  order_nr?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PIPELINE tool output.
 */
type PIPEDRIVE_UPDATE_A_PIPELINE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PRODUCT tool input.
 */
type PIPEDRIVE_UPDATE_A_PRODUCT_INPUT = {
  /**
   * Id
   * @description The ID of the product
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PRODUCT tool output.
 */
type PIPEDRIVE_UPDATE_A_PRODUCT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PRODUCT_FIELD tool input.
 */
type PIPEDRIVE_UPDATE_A_PRODUCT_FIELD_INPUT = {
  /**
   * Id
   * @description The ID of the product field
   */
  id?: number;
  /**
   * Name
   * @description The name of the field
   */
  name?: string;
  /**
   * Options
   * @description When `field_type` is either set or enum, possible options on update must be supplied as an array of objects each containing id and label, for example: [{"id":1, "label":"red"},{"id":2, "label":"blue"},{"id":3, "label":"lilac"}]
   */
  options?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PRODUCT_FIELD tool output.
 */
type PIPEDRIVE_UPDATE_A_PRODUCT_FIELD_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PROJECT tool input.
 */
type PIPEDRIVE_UPDATE_A_PROJECT_INPUT = {
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_PROJECT tool output.
 */
type PIPEDRIVE_UPDATE_A_PROJECT_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION tool input.
 */
type PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION_INPUT = {
  /**
   * Cycle Amount
   * @description The amount of each payment
   */
  cycle_amount?: number;
  /**
   * Description
   * @description The description of the recurring subscription
   */
  description?: string;
  /**
   * Effective Date
   * Format: date
   * @description All payments after that date will be affected. Format: YYYY-MM-DD
   */
  effective_date?: string;
  /**
   * Id
   * @description The ID of the subscription
   */
  id?: number;
  /**
   * Payments
   * @description Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
   */
  payments?: {
      [key: string]: unknown;
  }[];
  /**
   * Update Deal Value
   * @description Indicates that the deal value must be set to recurring subscription"s MRR value
   */
  update_deal_value?: boolean;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION tool output.
 */
type PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_TASK tool input.
 */
type PIPEDRIVE_UPDATE_A_TASK_INPUT = {
  /**
   * Id
   * @description The ID of the task
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_TASK tool output.
 */
type PIPEDRIVE_UPDATE_A_TASK_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_TEAM tool input.
 */
type PIPEDRIVE_UPDATE_A_TEAM_INPUT = {
  /**
   * Id
   * @description The ID of the team
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_A_TEAM tool output.
 */
type PIPEDRIVE_UPDATE_A_TEAM_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_EXISTING_GOAL tool input.
 */
type PIPEDRIVE_UPDATE_EXISTING_GOAL_INPUT = {
  /**
   * Id
   * @description The ID of the goal
   */
  id?: string;
  /**
   * Interval
   * @description The interval of the goal
   * @enum {string}
   */
  interval?: "weekly" | "monthly" | "quarterly" | "yearly";
  /**
   * Title
   * @description The title of the goal
   */
  title?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_EXISTING_GOAL tool output.
 */
type PIPEDRIVE_UPDATE_EXISTING_GOAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_FILE_DETAILS tool input.
 */
type PIPEDRIVE_UPDATE_FILE_DETAILS_INPUT = {
  /**
   * Description
   * @description The description of the file
   */
  description?: string;
  /**
   * Id
   * @description The ID of the file
   */
  id?: number;
  /**
   * Name
   * @description The visible name of the file
   */
  name?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_FILE_DETAILS tool output.
 */
type PIPEDRIVE_UPDATE_FILE_DETAILS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_FILTER tool input.
 */
type PIPEDRIVE_UPDATE_FILTER_INPUT = {
  /**
   * Id
   * @description The ID of the filter
   */
  id?: number;
  /**
   * Name
   * @description The name of the filter
   */
  name?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_FILTER tool output.
 */
type PIPEDRIVE_UPDATE_FILTER_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS tool input.
 */
type PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS_INPUT = {
  /**
   * Deal Id
   * @description The ID of the deal this thread is associated with
   */
  deal_id?: number;
  /**
   * Id
   * @description The ID of the mail thread
   */
  id?: number;
  /**
   * Lead Id
   * Format: uuid
   * @description The ID of the lead this thread is associated with
   */
  lead_id?: string;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS tool output.
 */
type PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE tool input.
 */
type PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE tool output.
 */
type PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_ROLE_DETAILS tool input.
 */
type PIPEDRIVE_UPDATE_ROLE_DETAILS_INPUT = {
  /**
   * Id
   * @description The ID of the role
   */
  id?: number;
  /**
   * Name
   * @description The name of the role
   */
  name?: string;
  /**
   * Parent Role Id
   * @description The ID of the parent role
   */
  parent_role_id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_ROLE_DETAILS tool output.
 */
type PIPEDRIVE_UPDATE_ROLE_DETAILS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_STAGE_DETAILS tool input.
 */
type PIPEDRIVE_UPDATE_STAGE_DETAILS_INPUT = {
  /**
   * Id
   * @description The ID of the stage
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_STAGE_DETAILS tool output.
 */
type PIPEDRIVE_UPDATE_STAGE_DETAILS_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN tool input.
 */
type PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN_INPUT = {
  /**
   * Group Id
   * @description The ID of a group on a project board
   */
  group_id?: number;
  /**
   * Id
   * @description The ID of the project
   */
  id?: number;
  /**
   * Phase Id
   * @description The ID of a phase on a project board
   */
  phase_id?: number;
  /**
   * Task Id
   * @description The ID of the task
   */
  taskId?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN tool output.
 */
type PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL tool input.
 */
type PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL_INPUT = {
  /**
   * Comments
   * @description A textual comment associated with this product-deal attachment
   */
  comments?: string;
  /**
   * Discount
   * @description The value of the discount. The `discount_type` field can be used to specify whether the value is an amount or a percentage.
   * @default 0
   */
  discount: number;
  /**
   * Discount Type
   * @description The type of the discount"s value.
   * @default percentage
   * @enum {string}
   */
  discount_type: "percentage" | "amount";
  /**
   * Duration
   * @description The duration of the product
   * @default 1
   */
  duration: number;
  /**
   * Enabled Flag
   * @description Whether the product is enabled for a deal or not. This makes it possible to add products to a deal with a specific price and discount criteria, but keep them disabled, which refrains them from being included in the deal value calculation. When omitted, the product will be marked as enabled by default.
   * @default true
   */
  enabled_flag: boolean;
  /**
   * Id
   * @description The ID of the deal
   */
  id?: number;
  /**
   * Item Price
   * @description The price at which this product will be added to the deal
   */
  item_price?: number;
  /**
   * Product Attachment Id
   * @description The ID of the deal-product (the ID of the product attached to the deal)
   */
  product_attachment_id?: number;
  /**
   * Product Id
   * @description The ID of the product to use
   */
  product_id?: number;
  /**
   * Product Variation Id
   * @description The ID of the product variation to use. When omitted, no variation will be used.
   */
  product_variation_id?: number;
  /**
   * Quantity
   * @description How many items of this product will be added to the deal
   */
  quantity?: number;
  /**
   * Tax
   * @description The tax percentage
   * @default 0
   */
  tax: number;
  /**
   * Tax Method
   * @description The tax option to be applied to the products. When using `inclusive`, the tax percentage will already be included in the price. When using `exclusive`, the tax will not be included in the price. When using `none`, no tax will be added. Use the `tax` field for defining the tax percentage amount.
   * @enum {string}
   */
  tax_method?: "exclusive" | "inclusive" | "none";
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL tool output.
 */
type PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL_OUTPUT = {
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
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_USER_DETAILS tool input.
 */
type PIPEDRIVE_UPDATE_USER_DETAILS_INPUT = {
  /**
   * Active Flag
   * @description Whether the user is active or not. `false` = Not activated, `true` = Activated
   */
  active_flag?: boolean;
  /**
   * Id
   * @description The ID of the user
   */
  id?: number;
};

/**
 * Type of PIPEDRIVE's PIPEDRIVE_UPDATE_USER_DETAILS tool output.
 */
type PIPEDRIVE_UPDATE_USER_DETAILS_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "PIPEDRIVE".
 */
export type PIPEDRIVE_TOOL_INPUTS = {
  ADD_AN_ACTIVITY: PIPEDRIVE_ADD_AN_ACTIVITY_INPUT
  ADD_AN_INSTALLMENT_SUBSCRIPTION: PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION_INPUT
  ADD_AN_ORGANIZATION: PIPEDRIVE_ADD_AN_ORGANIZATION_INPUT
  ADD_A_CALL_LOG: PIPEDRIVE_ADD_A_CALL_LOG_INPUT
  ADD_A_CHANNEL: PIPEDRIVE_ADD_A_CHANNEL_INPUT
  ADD_A_COMMENT_TO_A_NOTE: PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE_INPUT
  ADD_A_DEAL: PIPEDRIVE_ADD_A_DEAL_INPUT
  ADD_A_FOLLOWER_TO_AN_ORGANIZATION: PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION_INPUT
  ADD_A_FOLLOWER_TO_A_DEAL: PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL_INPUT
  ADD_A_FOLLOWER_TO_A_PERSON: PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON_INPUT
  ADD_A_FOLLOWER_TO_A_PRODUCT: PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT_INPUT
  ADD_A_LEAD: PIPEDRIVE_ADD_A_LEAD_INPUT
  ADD_A_LEAD_LABEL: PIPEDRIVE_ADD_A_LEAD_LABEL_INPUT
  ADD_A_NEW_DEAL_FIELD: PIPEDRIVE_ADD_A_NEW_DEAL_FIELD_INPUT
  ADD_A_NEW_FILTER: PIPEDRIVE_ADD_A_NEW_FILTER_INPUT
  ADD_A_NEW_GOAL: PIPEDRIVE_ADD_A_NEW_GOAL_INPUT
  ADD_A_NEW_ORGANIZATION_FIELD: PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD_INPUT
  ADD_A_NEW_PERSON_FIELD: PIPEDRIVE_ADD_A_NEW_PERSON_FIELD_INPUT
  ADD_A_NEW_PIPELINE: PIPEDRIVE_ADD_A_NEW_PIPELINE_INPUT
  ADD_A_NEW_PRODUCT_FIELD: PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD_INPUT
  ADD_A_NEW_STAGE: PIPEDRIVE_ADD_A_NEW_STAGE_INPUT
  ADD_A_NEW_TEAM: PIPEDRIVE_ADD_A_NEW_TEAM_INPUT
  ADD_A_NEW_USER: PIPEDRIVE_ADD_A_NEW_USER_INPUT
  ADD_A_NOTE: PIPEDRIVE_ADD_A_NOTE_INPUT
  ADD_A_PARTICIPANT_TO_A_DEAL: PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL_INPUT
  ADD_A_PERSON: PIPEDRIVE_ADD_A_PERSON_INPUT
  ADD_A_PRODUCT: PIPEDRIVE_ADD_A_PRODUCT_INPUT
  ADD_A_PRODUCT_TO_A_DEAL: PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL_INPUT
  ADD_A_PROJECT: PIPEDRIVE_ADD_A_PROJECT_INPUT
  ADD_A_RECURRING_SUBSCRIPTION: PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION_INPUT
  ADD_A_ROLE: PIPEDRIVE_ADD_A_ROLE_INPUT
  ADD_A_TASK: PIPEDRIVE_ADD_A_TASK_INPUT
  ADD_FILE: PIPEDRIVE_ADD_FILE_INPUT
  ADD_NEW_ACTIVITY_TYPE: PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE_INPUT
  ADD_OR_UPDATE_ROLE_SETTING: PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING_INPUT
  ADD_PERSON_PICTURE: PIPEDRIVE_ADD_PERSON_PICTURE_INPUT
  ADD_ROLE_ASSIGNMENT: PIPEDRIVE_ADD_ROLE_ASSIGNMENT_INPUT
  ADD_USERS_TO_A_TEAM: PIPEDRIVE_ADD_USERS_TO_A_TEAM_INPUT
  ARCHIVE_A_PROJECT: PIPEDRIVE_ARCHIVE_A_PROJECT_INPUT
  ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG: PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG_INPUT
  CANCEL_A_RECURRING_SUBSCRIPTION: PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION_INPUT
  CREATE_AN_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP_INPUT
  CREATE_A_NEW_WEBHOOK: PIPEDRIVE_CREATE_A_NEW_WEBHOOK_INPUT
  CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM: PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM_INPUT
  DELETE_AN_ACTIVITY: PIPEDRIVE_DELETE_AN_ACTIVITY_INPUT
  DELETE_AN_ACTIVITY_TYPE: PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE_INPUT
  DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL: PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL_INPUT
  DELETE_AN_ORGANIZATION: PIPEDRIVE_DELETE_AN_ORGANIZATION_INPUT
  DELETE_AN_ORGANIZATION_FIELD: PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD_INPUT
  DELETE_AN_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP_INPUT
  DELETE_A_CALL_LOG: PIPEDRIVE_DELETE_A_CALL_LOG_INPUT
  DELETE_A_CHANNEL: PIPEDRIVE_DELETE_A_CHANNEL_INPUT
  DELETE_A_COMMENT_RELATED_TO_A_NOTE: PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE_INPUT
  DELETE_A_CONVERSATION: PIPEDRIVE_DELETE_A_CONVERSATION_INPUT
  DELETE_A_DEAL: PIPEDRIVE_DELETE_A_DEAL_INPUT
  DELETE_A_DEAL_FIELD: PIPEDRIVE_DELETE_A_DEAL_FIELD_INPUT
  DELETE_A_FILE: PIPEDRIVE_DELETE_A_FILE_INPUT
  DELETE_A_FILTER: PIPEDRIVE_DELETE_A_FILTER_INPUT
  DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION_INPUT
  DELETE_A_FOLLOWER_FROM_A_DEAL: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL_INPUT
  DELETE_A_FOLLOWER_FROM_A_PERSON: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON_INPUT
  DELETE_A_FOLLOWER_FROM_A_PRODUCT: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT_INPUT
  DELETE_A_LEAD: PIPEDRIVE_DELETE_A_LEAD_INPUT
  DELETE_A_LEAD_LABEL: PIPEDRIVE_DELETE_A_LEAD_LABEL_INPUT
  DELETE_A_NOTE: PIPEDRIVE_DELETE_A_NOTE_INPUT
  DELETE_A_PARTICIPANT_FROM_A_DEAL: PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL_INPUT
  DELETE_A_PERSON: PIPEDRIVE_DELETE_A_PERSON_INPUT
  DELETE_A_PERSON_FIELD: PIPEDRIVE_DELETE_A_PERSON_FIELD_INPUT
  DELETE_A_PIPELINE: PIPEDRIVE_DELETE_A_PIPELINE_INPUT
  DELETE_A_PRODUCT: PIPEDRIVE_DELETE_A_PRODUCT_INPUT
  DELETE_A_PRODUCT_FIELD: PIPEDRIVE_DELETE_A_PRODUCT_FIELD_INPUT
  DELETE_A_PROJECT: PIPEDRIVE_DELETE_A_PROJECT_INPUT
  DELETE_A_ROLE: PIPEDRIVE_DELETE_A_ROLE_INPUT
  DELETE_A_ROLE_ASSIGNMENT: PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT_INPUT
  DELETE_A_STAGE: PIPEDRIVE_DELETE_A_STAGE_INPUT
  DELETE_A_SUBSCRIPTION: PIPEDRIVE_DELETE_A_SUBSCRIPTION_INPUT
  DELETE_A_TASK: PIPEDRIVE_DELETE_A_TASK_INPUT
  DELETE_EXISTING_GOAL: PIPEDRIVE_DELETE_EXISTING_GOAL_INPUT
  DELETE_EXISTING_WEBHOOK: PIPEDRIVE_DELETE_EXISTING_WEBHOOK_INPUT
  DELETE_MAIL_THREAD: PIPEDRIVE_DELETE_MAIL_THREAD_INPUT
  DELETE_MULTIPLE_ACTIVITIES_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK_INPUT
  DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK_INPUT
  DELETE_MULTIPLE_DEALS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK_INPUT
  DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK_INPUT
  DELETE_MULTIPLE_FILTERS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK_INPUT
  DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK_INPUT
  DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK_INPUT
  DELETE_MULTIPLE_PERSONS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK_INPUT
  DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK_INPUT
  DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK_INPUT
  DELETE_MULTIPLE_STAGES_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK_INPUT
  DELETE_PERSON_PICTURE: PIPEDRIVE_DELETE_PERSON_PICTURE_INPUT
  DELETE_USERS_FROM_A_TEAM: PIPEDRIVE_DELETE_USERS_FROM_A_TEAM_INPUT
  DOWNLOAD_ONE_FILE: PIPEDRIVE_DOWNLOAD_ONE_FILE_INPUT
  DUPLICATE_DEAL: PIPEDRIVE_DUPLICATE_DEAL_INPUT
  ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD: PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD_INPUT
  FIND_GOALS: PIPEDRIVE_FIND_GOALS_INPUT
  FIND_SUBSCRIPTION_BY_DEAL: PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL_INPUT
  FIND_USERS_BY_NAME: PIPEDRIVE_FIND_USERS_BY_NAME_INPUT
  GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER: PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER_INPUT
  GET_ALL_ACTIVITIES_BETA: PIPEDRIVE_GET_ALL_ACTIVITIES_BETA_INPUT
  GET_ALL_ACTIVITY_FIELDS: PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS_INPUT
  GET_ALL_ACTIVITY_TYPES: PIPEDRIVE_GET_ALL_ACTIVITY_TYPES_INPUT
  GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY: PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY_INPUT
  GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER: PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER_INPUT
  GET_ALL_COMMENTS_FOR_A_NOTE: PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE_INPUT
  GET_ALL_DEALS: PIPEDRIVE_GET_ALL_DEALS_INPUT
  GET_ALL_DEALS_BETA: PIPEDRIVE_GET_ALL_DEALS_BETA_INPUT
  GET_ALL_DEAL_FIELDS: PIPEDRIVE_GET_ALL_DEAL_FIELDS_INPUT
  GET_ALL_FILES: PIPEDRIVE_GET_ALL_FILES_INPUT
  GET_ALL_FILTERS: PIPEDRIVE_GET_ALL_FILTERS_INPUT
  GET_ALL_FILTER_HELPERS: PIPEDRIVE_GET_ALL_FILTER_HELPERS_INPUT
  GET_ALL_LEADS: PIPEDRIVE_GET_ALL_LEADS_INPUT
  GET_ALL_LEAD_LABELS: PIPEDRIVE_GET_ALL_LEAD_LABELS_INPUT
  GET_ALL_LEAD_SOURCES: PIPEDRIVE_GET_ALL_LEAD_SOURCES_INPUT
  GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD: PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD_INPUT
  GET_ALL_NOTES: PIPEDRIVE_GET_ALL_NOTES_INPUT
  GET_ALL_NOTE_FIELDS: PIPEDRIVE_GET_ALL_NOTE_FIELDS_INPUT
  GET_ALL_ORGANIZATIONS: PIPEDRIVE_GET_ALL_ORGANIZATIONS_INPUT
  GET_ALL_ORGANIZATIONS_BETA: PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA_INPUT
  GET_ALL_ORGANIZATION_FIELDS: PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS_INPUT
  GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION: PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION_INPUT
  GET_ALL_PERMISSION_SETS: PIPEDRIVE_GET_ALL_PERMISSION_SETS_INPUT
  GET_ALL_PERSONS: PIPEDRIVE_GET_ALL_PERSONS_INPUT
  GET_ALL_PERSONS_BETA: PIPEDRIVE_GET_ALL_PERSONS_BETA_INPUT
  GET_ALL_PERSON_FIELDS: PIPEDRIVE_GET_ALL_PERSON_FIELDS_INPUT
  GET_ALL_PIPELINES: PIPEDRIVE_GET_ALL_PIPELINES_INPUT
  GET_ALL_PRODUCTS: PIPEDRIVE_GET_ALL_PRODUCTS_INPUT
  GET_ALL_PRODUCT_FIELDS: PIPEDRIVE_GET_ALL_PRODUCT_FIELDS_INPUT
  GET_ALL_PROJECTS: PIPEDRIVE_GET_ALL_PROJECTS_INPUT
  GET_ALL_PROJECT_BOARDS: PIPEDRIVE_GET_ALL_PROJECT_BOARDS_INPUT
  GET_ALL_PROJECT_TEMPLATES: PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES_INPUT
  GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION: PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION_INPUT
  GET_ALL_ROLES: PIPEDRIVE_GET_ALL_ROLES_INPUT
  GET_ALL_STAGES: PIPEDRIVE_GET_ALL_STAGES_INPUT
  GET_ALL_SUPPORTED_CURRENCIES: PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES_INPUT
  GET_ALL_TASKS: PIPEDRIVE_GET_ALL_TASKS_INPUT
  GET_ALL_TEAMS: PIPEDRIVE_GET_ALL_TEAMS_INPUT
  GET_ALL_TEAMS_OF_A_USER: PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER_INPUT
  GET_ALL_USERS: PIPEDRIVE_GET_ALL_USERS_INPUT
  GET_ALL_USERS_IN_A_TEAM: PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM_INPUT
  GET_ALL_USER_CONNECTIONS: PIPEDRIVE_GET_ALL_USER_CONNECTIONS_INPUT
  GET_ALL_WEBHOOKS: PIPEDRIVE_GET_ALL_WEBHOOKS_INPUT
  GET_A_SINGLE_TEAM: PIPEDRIVE_GET_A_SINGLE_TEAM_INPUT
  GET_CURRENT_USER_DATA: PIPEDRIVE_GET_CURRENT_USER_DATA_INPUT
  GET_DEALS_CONVERSION_RATES_IN_PIPELINE: PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE_INPUT
  GET_DEALS_IN_A_PIPELINE: PIPEDRIVE_GET_DEALS_IN_A_PIPELINE_INPUT
  GET_DEALS_IN_A_STAGE: PIPEDRIVE_GET_DEALS_IN_A_STAGE_INPUT
  GET_DEALS_MOVEMENTS_IN_PIPELINE: PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE_INPUT
  GET_DEALS_SUMMARY: PIPEDRIVE_GET_DEALS_SUMMARY_INPUT
  GET_DEALS_TIMELINE: PIPEDRIVE_GET_DEALS_TIMELINE_INPUT
  GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO: PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO_INPUT
  GET_DETAILS_OF_AN_ACTIVITY: PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY_INPUT
  GET_DETAILS_OF_AN_ORGANIZATION: PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION_INPUT
  GET_DETAILS_OF_A_BOARD: PIPEDRIVE_GET_DETAILS_OF_A_BOARD_INPUT
  GET_DETAILS_OF_A_CALL_LOG: PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG_INPUT
  GET_DETAILS_OF_A_DEAL: PIPEDRIVE_GET_DETAILS_OF_A_DEAL_INPUT
  GET_DETAILS_OF_A_PERSON: PIPEDRIVE_GET_DETAILS_OF_A_PERSON_INPUT
  GET_DETAILS_OF_A_PHASE: PIPEDRIVE_GET_DETAILS_OF_A_PHASE_INPUT
  GET_DETAILS_OF_A_PROJECT: PIPEDRIVE_GET_DETAILS_OF_A_PROJECT_INPUT
  GET_DETAILS_OF_A_SUBSCRIPTION: PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION_INPUT
  GET_DETAILS_OF_A_TASK: PIPEDRIVE_GET_DETAILS_OF_A_TASK_INPUT
  GET_DETAILS_OF_A_TEMPLATE: PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE_INPUT
  GET_MAIL_THREADS: PIPEDRIVE_GET_MAIL_THREADS_INPUT
  GET_ONE_COMMENT: PIPEDRIVE_GET_ONE_COMMENT_INPUT
  GET_ONE_DEAL_FIELD: PIPEDRIVE_GET_ONE_DEAL_FIELD_INPUT
  GET_ONE_FILE: PIPEDRIVE_GET_ONE_FILE_INPUT
  GET_ONE_FILTER: PIPEDRIVE_GET_ONE_FILTER_INPUT
  GET_ONE_LEAD: PIPEDRIVE_GET_ONE_LEAD_INPUT
  GET_ONE_MAIL_MESSAGE: PIPEDRIVE_GET_ONE_MAIL_MESSAGE_INPUT
  GET_ONE_MAIL_THREAD: PIPEDRIVE_GET_ONE_MAIL_THREAD_INPUT
  GET_ONE_NOTE: PIPEDRIVE_GET_ONE_NOTE_INPUT
  GET_ONE_ORGANIZATION_FIELD: PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD_INPUT
  GET_ONE_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP_INPUT
  GET_ONE_PERMISSION_SET: PIPEDRIVE_GET_ONE_PERMISSION_SET_INPUT
  GET_ONE_PERSON_FIELD: PIPEDRIVE_GET_ONE_PERSON_FIELD_INPUT
  GET_ONE_PIPELINE: PIPEDRIVE_GET_ONE_PIPELINE_INPUT
  GET_ONE_PRODUCT: PIPEDRIVE_GET_ONE_PRODUCT_INPUT
  GET_ONE_PRODUCT_FIELD: PIPEDRIVE_GET_ONE_PRODUCT_FIELD_INPUT
  GET_ONE_ROLE: PIPEDRIVE_GET_ONE_ROLE_INPUT
  GET_ONE_STAGE: PIPEDRIVE_GET_ONE_STAGE_INPUT
  GET_ONE_USER: PIPEDRIVE_GET_ONE_USER_INPUT
  GET_PROJECT_PHASES: PIPEDRIVE_GET_PROJECT_PHASES_INPUT
  GET_RECENTS: PIPEDRIVE_GET_RECENTS_INPUT
  GET_RESULT_OF_A_GOAL: PIPEDRIVE_GET_RESULT_OF_A_GOAL_INPUT
  LINK_A_REMOTE_FILE_TO_AN_ITEM: PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM_INPUT
  LINK_USER_VIDEO_INTEGRATION: PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION_INPUT
  LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION: PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION_INPUT
  LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL: PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL_INPUT
  LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON_INPUT
  LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL: PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL_INPUT
  LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION: PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION_INPUT
  LIST_DEALS_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON_INPUT
  LIST_FILES_ATTACHED_TO_AN_ORGANIZATION: PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION_INPUT
  LIST_FILES_ATTACHED_TO_A_DEAL: PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL_INPUT
  LIST_FILES_ATTACHED_TO_A_PERSON: PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON_INPUT
  LIST_FILES_ATTACHED_TO_A_PRODUCT: PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT_INPUT
  LIST_FOLLOWERS_OF_AN_ORGANIZATION: PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION_INPUT
  LIST_FOLLOWERS_OF_A_DEAL: PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL_INPUT
  LIST_FOLLOWERS_OF_A_PERSON: PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON_INPUT
  LIST_FOLLOWERS_OF_A_PRODUCT: PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT_INPUT
  LIST_FOLLOWERS_OF_A_USER: PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER_INPUT
  LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION: PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION_INPUT
  LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL: PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL_INPUT
  LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON_INPUT
  LIST_PARTICIPANTS_OF_A_DEAL: PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL_INPUT
  LIST_PERMISSION_SET_ASSIGNMENTS: PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS_INPUT
  LIST_PERMITTED_USERS: PIPEDRIVE_LIST_PERMITTED_USERS_INPUT
  LIST_PERSONS_OF_AN_ORGANIZATION: PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION_INPUT
  LIST_PERSON_ACCESS_USERS: PIPEDRIVE_LIST_PERSON_ACCESS_USERS_INPUT
  LIST_PIPELINE_VISIBILITY_FOR_A_ROLE: PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE_INPUT
  LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON_INPUT
  LIST_PRODUCTS_ATTACHED_TO_A_DEAL: PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL_INPUT
  LIST_PRODUCT_PERMITTED_USERS: PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS_INPUT
  LIST_ROLE_ASSIGNMENTS: PIPEDRIVE_LIST_ROLE_ASSIGNMENTS_INPUT
  LIST_ROLE_SETTINGS: PIPEDRIVE_LIST_ROLE_SETTINGS_INPUT
  LIST_SETTINGS_OF_AN_AUTHORIZED_USER: PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER_INPUT
  LIST_UPDATES_ABOUT_AN_ORGANIZATION: PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION_INPUT
  LIST_UPDATES_ABOUT_A_DEAL: PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL_INPUT
  LIST_UPDATES_ABOUT_A_PERSON: PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON_INPUT
  LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL: PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL_INPUT
  LIST_USER_PERMISSIONS: PIPEDRIVE_LIST_USER_PERMISSIONS_INPUT
  LIST_USER_ROLE_SETTINGS: PIPEDRIVE_LIST_USER_ROLE_SETTINGS_INPUT
  MERGE_TWO_DEALS: PIPEDRIVE_MERGE_TWO_DEALS_INPUT
  MERGE_TWO_ORGANIZATIONS: PIPEDRIVE_MERGE_TWO_ORGANIZATIONS_INPUT
  MERGE_TWO_PERSONS: PIPEDRIVE_MERGE_TWO_PERSONS_INPUT
  ORGANIZATION_ACCESSIBLE_USER_LIST: PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST_INPUT
  PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES: PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES_INPUT
  PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS: PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS_INPUT
  RECEIVES_AN_INCOMING_MESSAGE: PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE_INPUT
  REFRESHING_THE_TOKENS: PIPEDRIVE_REFRESHING_THE_TOKENS_INPUT
  REQUESTING_AUTHORIZATION: PIPEDRIVE_REQUESTING_AUTHORIZATION_INPUT
  RETURNS_PROJECT_ACTIVITIES: PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES_INPUT
  RETURNS_PROJECT_GROUPS: PIPEDRIVE_RETURNS_PROJECT_GROUPS_INPUT
  RETURNS_PROJECT_PLAN: PIPEDRIVE_RETURNS_PROJECT_PLAN_INPUT
  RETURNS_PROJECT_TASKS: PIPEDRIVE_RETURNS_PROJECT_TASKS_INPUT
  SEARCH_DEALS: PIPEDRIVE_SEARCH_DEALS_INPUT
  SEARCH_ITEM_BY_FIELD: PIPEDRIVE_SEARCH_ITEM_BY_FIELD_INPUT
  SEARCH_LEADS: PIPEDRIVE_SEARCH_LEADS_INPUT
  SEARCH_ORGANIZATIONS: PIPEDRIVE_SEARCH_ORGANIZATIONS_INPUT
  SEARCH_PERSONS: PIPEDRIVE_SEARCH_PERSONS_INPUT
  SEARCH_PRODUCTS: PIPEDRIVE_SEARCH_PRODUCTS_INPUT
  UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION: PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION_INPUT
  UPDATE_ACTIVITY_IN_PROJECT_PLAN: PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN_INPUT
  UPDATE_AN_ACTIVITY: PIPEDRIVE_UPDATE_AN_ACTIVITY_INPUT
  UPDATE_AN_ACTIVITY_TYPE: PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE_INPUT
  UPDATE_AN_INSTALLMENT_SUBSCRIPTION: PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION_INPUT
  UPDATE_AN_ORGANIZATION: PIPEDRIVE_UPDATE_AN_ORGANIZATION_INPUT
  UPDATE_AN_ORGANIZATION_FIELD: PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD_INPUT
  UPDATE_AN_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP_INPUT
  UPDATE_A_COMMENT_RELATED_TO_A_NOTE: PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE_INPUT
  UPDATE_A_DEAL: PIPEDRIVE_UPDATE_A_DEAL_INPUT
  UPDATE_A_DEAL_FIELD: PIPEDRIVE_UPDATE_A_DEAL_FIELD_INPUT
  UPDATE_A_LEAD: PIPEDRIVE_UPDATE_A_LEAD_INPUT
  UPDATE_A_LEAD_LABEL: PIPEDRIVE_UPDATE_A_LEAD_LABEL_INPUT
  UPDATE_A_NOTE: PIPEDRIVE_UPDATE_A_NOTE_INPUT
  UPDATE_A_PERSON: PIPEDRIVE_UPDATE_A_PERSON_INPUT
  UPDATE_A_PERSON_FIELD: PIPEDRIVE_UPDATE_A_PERSON_FIELD_INPUT
  UPDATE_A_PIPELINE: PIPEDRIVE_UPDATE_A_PIPELINE_INPUT
  UPDATE_A_PRODUCT: PIPEDRIVE_UPDATE_A_PRODUCT_INPUT
  UPDATE_A_PRODUCT_FIELD: PIPEDRIVE_UPDATE_A_PRODUCT_FIELD_INPUT
  UPDATE_A_PROJECT: PIPEDRIVE_UPDATE_A_PROJECT_INPUT
  UPDATE_A_RECURRING_SUBSCRIPTION: PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION_INPUT
  UPDATE_A_TASK: PIPEDRIVE_UPDATE_A_TASK_INPUT
  UPDATE_A_TEAM: PIPEDRIVE_UPDATE_A_TEAM_INPUT
  UPDATE_EXISTING_GOAL: PIPEDRIVE_UPDATE_EXISTING_GOAL_INPUT
  UPDATE_FILE_DETAILS: PIPEDRIVE_UPDATE_FILE_DETAILS_INPUT
  UPDATE_FILTER: PIPEDRIVE_UPDATE_FILTER_INPUT
  UPDATE_MAIL_THREAD_DETAILS: PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS_INPUT
  UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE: PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE_INPUT
  UPDATE_ROLE_DETAILS: PIPEDRIVE_UPDATE_ROLE_DETAILS_INPUT
  UPDATE_STAGE_DETAILS: PIPEDRIVE_UPDATE_STAGE_DETAILS_INPUT
  UPDATE_TASK_IN_PROJECT_PLAN: PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN_INPUT
  UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL: PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL_INPUT
  UPDATE_USER_DETAILS: PIPEDRIVE_UPDATE_USER_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PIPEDRIVE".
 */
export type PIPEDRIVE_TOOL_OUTPUTS = {
  ADD_AN_ACTIVITY: PIPEDRIVE_ADD_AN_ACTIVITY_OUTPUT
  ADD_AN_INSTALLMENT_SUBSCRIPTION: PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION_OUTPUT
  ADD_AN_ORGANIZATION: PIPEDRIVE_ADD_AN_ORGANIZATION_OUTPUT
  ADD_A_CALL_LOG: PIPEDRIVE_ADD_A_CALL_LOG_OUTPUT
  ADD_A_CHANNEL: PIPEDRIVE_ADD_A_CHANNEL_OUTPUT
  ADD_A_COMMENT_TO_A_NOTE: PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE_OUTPUT
  ADD_A_DEAL: PIPEDRIVE_ADD_A_DEAL_OUTPUT
  ADD_A_FOLLOWER_TO_AN_ORGANIZATION: PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION_OUTPUT
  ADD_A_FOLLOWER_TO_A_DEAL: PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL_OUTPUT
  ADD_A_FOLLOWER_TO_A_PERSON: PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON_OUTPUT
  ADD_A_FOLLOWER_TO_A_PRODUCT: PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT_OUTPUT
  ADD_A_LEAD: PIPEDRIVE_ADD_A_LEAD_OUTPUT
  ADD_A_LEAD_LABEL: PIPEDRIVE_ADD_A_LEAD_LABEL_OUTPUT
  ADD_A_NEW_DEAL_FIELD: PIPEDRIVE_ADD_A_NEW_DEAL_FIELD_OUTPUT
  ADD_A_NEW_FILTER: PIPEDRIVE_ADD_A_NEW_FILTER_OUTPUT
  ADD_A_NEW_GOAL: PIPEDRIVE_ADD_A_NEW_GOAL_OUTPUT
  ADD_A_NEW_ORGANIZATION_FIELD: PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD_OUTPUT
  ADD_A_NEW_PERSON_FIELD: PIPEDRIVE_ADD_A_NEW_PERSON_FIELD_OUTPUT
  ADD_A_NEW_PIPELINE: PIPEDRIVE_ADD_A_NEW_PIPELINE_OUTPUT
  ADD_A_NEW_PRODUCT_FIELD: PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD_OUTPUT
  ADD_A_NEW_STAGE: PIPEDRIVE_ADD_A_NEW_STAGE_OUTPUT
  ADD_A_NEW_TEAM: PIPEDRIVE_ADD_A_NEW_TEAM_OUTPUT
  ADD_A_NEW_USER: PIPEDRIVE_ADD_A_NEW_USER_OUTPUT
  ADD_A_NOTE: PIPEDRIVE_ADD_A_NOTE_OUTPUT
  ADD_A_PARTICIPANT_TO_A_DEAL: PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL_OUTPUT
  ADD_A_PERSON: PIPEDRIVE_ADD_A_PERSON_OUTPUT
  ADD_A_PRODUCT: PIPEDRIVE_ADD_A_PRODUCT_OUTPUT
  ADD_A_PRODUCT_TO_A_DEAL: PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL_OUTPUT
  ADD_A_PROJECT: PIPEDRIVE_ADD_A_PROJECT_OUTPUT
  ADD_A_RECURRING_SUBSCRIPTION: PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION_OUTPUT
  ADD_A_ROLE: PIPEDRIVE_ADD_A_ROLE_OUTPUT
  ADD_A_TASK: PIPEDRIVE_ADD_A_TASK_OUTPUT
  ADD_FILE: PIPEDRIVE_ADD_FILE_OUTPUT
  ADD_NEW_ACTIVITY_TYPE: PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE_OUTPUT
  ADD_OR_UPDATE_ROLE_SETTING: PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING_OUTPUT
  ADD_PERSON_PICTURE: PIPEDRIVE_ADD_PERSON_PICTURE_OUTPUT
  ADD_ROLE_ASSIGNMENT: PIPEDRIVE_ADD_ROLE_ASSIGNMENT_OUTPUT
  ADD_USERS_TO_A_TEAM: PIPEDRIVE_ADD_USERS_TO_A_TEAM_OUTPUT
  ARCHIVE_A_PROJECT: PIPEDRIVE_ARCHIVE_A_PROJECT_OUTPUT
  ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG: PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG_OUTPUT
  CANCEL_A_RECURRING_SUBSCRIPTION: PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION_OUTPUT
  CREATE_AN_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP_OUTPUT
  CREATE_A_NEW_WEBHOOK: PIPEDRIVE_CREATE_A_NEW_WEBHOOK_OUTPUT
  CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM: PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM_OUTPUT
  DELETE_AN_ACTIVITY: PIPEDRIVE_DELETE_AN_ACTIVITY_OUTPUT
  DELETE_AN_ACTIVITY_TYPE: PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE_OUTPUT
  DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL: PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL_OUTPUT
  DELETE_AN_ORGANIZATION: PIPEDRIVE_DELETE_AN_ORGANIZATION_OUTPUT
  DELETE_AN_ORGANIZATION_FIELD: PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD_OUTPUT
  DELETE_AN_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP_OUTPUT
  DELETE_A_CALL_LOG: PIPEDRIVE_DELETE_A_CALL_LOG_OUTPUT
  DELETE_A_CHANNEL: PIPEDRIVE_DELETE_A_CHANNEL_OUTPUT
  DELETE_A_COMMENT_RELATED_TO_A_NOTE: PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE_OUTPUT
  DELETE_A_CONVERSATION: PIPEDRIVE_DELETE_A_CONVERSATION_OUTPUT
  DELETE_A_DEAL: PIPEDRIVE_DELETE_A_DEAL_OUTPUT
  DELETE_A_DEAL_FIELD: PIPEDRIVE_DELETE_A_DEAL_FIELD_OUTPUT
  DELETE_A_FILE: PIPEDRIVE_DELETE_A_FILE_OUTPUT
  DELETE_A_FILTER: PIPEDRIVE_DELETE_A_FILTER_OUTPUT
  DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION_OUTPUT
  DELETE_A_FOLLOWER_FROM_A_DEAL: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL_OUTPUT
  DELETE_A_FOLLOWER_FROM_A_PERSON: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON_OUTPUT
  DELETE_A_FOLLOWER_FROM_A_PRODUCT: PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT_OUTPUT
  DELETE_A_LEAD: PIPEDRIVE_DELETE_A_LEAD_OUTPUT
  DELETE_A_LEAD_LABEL: PIPEDRIVE_DELETE_A_LEAD_LABEL_OUTPUT
  DELETE_A_NOTE: PIPEDRIVE_DELETE_A_NOTE_OUTPUT
  DELETE_A_PARTICIPANT_FROM_A_DEAL: PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL_OUTPUT
  DELETE_A_PERSON: PIPEDRIVE_DELETE_A_PERSON_OUTPUT
  DELETE_A_PERSON_FIELD: PIPEDRIVE_DELETE_A_PERSON_FIELD_OUTPUT
  DELETE_A_PIPELINE: PIPEDRIVE_DELETE_A_PIPELINE_OUTPUT
  DELETE_A_PRODUCT: PIPEDRIVE_DELETE_A_PRODUCT_OUTPUT
  DELETE_A_PRODUCT_FIELD: PIPEDRIVE_DELETE_A_PRODUCT_FIELD_OUTPUT
  DELETE_A_PROJECT: PIPEDRIVE_DELETE_A_PROJECT_OUTPUT
  DELETE_A_ROLE: PIPEDRIVE_DELETE_A_ROLE_OUTPUT
  DELETE_A_ROLE_ASSIGNMENT: PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT_OUTPUT
  DELETE_A_STAGE: PIPEDRIVE_DELETE_A_STAGE_OUTPUT
  DELETE_A_SUBSCRIPTION: PIPEDRIVE_DELETE_A_SUBSCRIPTION_OUTPUT
  DELETE_A_TASK: PIPEDRIVE_DELETE_A_TASK_OUTPUT
  DELETE_EXISTING_GOAL: PIPEDRIVE_DELETE_EXISTING_GOAL_OUTPUT
  DELETE_EXISTING_WEBHOOK: PIPEDRIVE_DELETE_EXISTING_WEBHOOK_OUTPUT
  DELETE_MAIL_THREAD: PIPEDRIVE_DELETE_MAIL_THREAD_OUTPUT
  DELETE_MULTIPLE_ACTIVITIES_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK_OUTPUT
  DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK_OUTPUT
  DELETE_MULTIPLE_DEALS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_FILTERS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_PERSONS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK_OUTPUT
  DELETE_MULTIPLE_STAGES_IN_BULK: PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK_OUTPUT
  DELETE_PERSON_PICTURE: PIPEDRIVE_DELETE_PERSON_PICTURE_OUTPUT
  DELETE_USERS_FROM_A_TEAM: PIPEDRIVE_DELETE_USERS_FROM_A_TEAM_OUTPUT
  DOWNLOAD_ONE_FILE: PIPEDRIVE_DOWNLOAD_ONE_FILE_OUTPUT
  DUPLICATE_DEAL: PIPEDRIVE_DUPLICATE_DEAL_OUTPUT
  ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD: PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD_OUTPUT
  FIND_GOALS: PIPEDRIVE_FIND_GOALS_OUTPUT
  FIND_SUBSCRIPTION_BY_DEAL: PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL_OUTPUT
  FIND_USERS_BY_NAME: PIPEDRIVE_FIND_USERS_BY_NAME_OUTPUT
  GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER: PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER_OUTPUT
  GET_ALL_ACTIVITIES_BETA: PIPEDRIVE_GET_ALL_ACTIVITIES_BETA_OUTPUT
  GET_ALL_ACTIVITY_FIELDS: PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS_OUTPUT
  GET_ALL_ACTIVITY_TYPES: PIPEDRIVE_GET_ALL_ACTIVITY_TYPES_OUTPUT
  GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY: PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY_OUTPUT
  GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER: PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER_OUTPUT
  GET_ALL_COMMENTS_FOR_A_NOTE: PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE_OUTPUT
  GET_ALL_DEALS: PIPEDRIVE_GET_ALL_DEALS_OUTPUT
  GET_ALL_DEALS_BETA: PIPEDRIVE_GET_ALL_DEALS_BETA_OUTPUT
  GET_ALL_DEAL_FIELDS: PIPEDRIVE_GET_ALL_DEAL_FIELDS_OUTPUT
  GET_ALL_FILES: PIPEDRIVE_GET_ALL_FILES_OUTPUT
  GET_ALL_FILTERS: PIPEDRIVE_GET_ALL_FILTERS_OUTPUT
  GET_ALL_FILTER_HELPERS: PIPEDRIVE_GET_ALL_FILTER_HELPERS_OUTPUT
  GET_ALL_LEADS: PIPEDRIVE_GET_ALL_LEADS_OUTPUT
  GET_ALL_LEAD_LABELS: PIPEDRIVE_GET_ALL_LEAD_LABELS_OUTPUT
  GET_ALL_LEAD_SOURCES: PIPEDRIVE_GET_ALL_LEAD_SOURCES_OUTPUT
  GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD: PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD_OUTPUT
  GET_ALL_NOTES: PIPEDRIVE_GET_ALL_NOTES_OUTPUT
  GET_ALL_NOTE_FIELDS: PIPEDRIVE_GET_ALL_NOTE_FIELDS_OUTPUT
  GET_ALL_ORGANIZATIONS: PIPEDRIVE_GET_ALL_ORGANIZATIONS_OUTPUT
  GET_ALL_ORGANIZATIONS_BETA: PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA_OUTPUT
  GET_ALL_ORGANIZATION_FIELDS: PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS_OUTPUT
  GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION: PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION_OUTPUT
  GET_ALL_PERMISSION_SETS: PIPEDRIVE_GET_ALL_PERMISSION_SETS_OUTPUT
  GET_ALL_PERSONS: PIPEDRIVE_GET_ALL_PERSONS_OUTPUT
  GET_ALL_PERSONS_BETA: PIPEDRIVE_GET_ALL_PERSONS_BETA_OUTPUT
  GET_ALL_PERSON_FIELDS: PIPEDRIVE_GET_ALL_PERSON_FIELDS_OUTPUT
  GET_ALL_PIPELINES: PIPEDRIVE_GET_ALL_PIPELINES_OUTPUT
  GET_ALL_PRODUCTS: PIPEDRIVE_GET_ALL_PRODUCTS_OUTPUT
  GET_ALL_PRODUCT_FIELDS: PIPEDRIVE_GET_ALL_PRODUCT_FIELDS_OUTPUT
  GET_ALL_PROJECTS: PIPEDRIVE_GET_ALL_PROJECTS_OUTPUT
  GET_ALL_PROJECT_BOARDS: PIPEDRIVE_GET_ALL_PROJECT_BOARDS_OUTPUT
  GET_ALL_PROJECT_TEMPLATES: PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES_OUTPUT
  GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION: PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION_OUTPUT
  GET_ALL_ROLES: PIPEDRIVE_GET_ALL_ROLES_OUTPUT
  GET_ALL_STAGES: PIPEDRIVE_GET_ALL_STAGES_OUTPUT
  GET_ALL_SUPPORTED_CURRENCIES: PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES_OUTPUT
  GET_ALL_TASKS: PIPEDRIVE_GET_ALL_TASKS_OUTPUT
  GET_ALL_TEAMS: PIPEDRIVE_GET_ALL_TEAMS_OUTPUT
  GET_ALL_TEAMS_OF_A_USER: PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER_OUTPUT
  GET_ALL_USERS: PIPEDRIVE_GET_ALL_USERS_OUTPUT
  GET_ALL_USERS_IN_A_TEAM: PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM_OUTPUT
  GET_ALL_USER_CONNECTIONS: PIPEDRIVE_GET_ALL_USER_CONNECTIONS_OUTPUT
  GET_ALL_WEBHOOKS: PIPEDRIVE_GET_ALL_WEBHOOKS_OUTPUT
  GET_A_SINGLE_TEAM: PIPEDRIVE_GET_A_SINGLE_TEAM_OUTPUT
  GET_CURRENT_USER_DATA: PIPEDRIVE_GET_CURRENT_USER_DATA_OUTPUT
  GET_DEALS_CONVERSION_RATES_IN_PIPELINE: PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE_OUTPUT
  GET_DEALS_IN_A_PIPELINE: PIPEDRIVE_GET_DEALS_IN_A_PIPELINE_OUTPUT
  GET_DEALS_IN_A_STAGE: PIPEDRIVE_GET_DEALS_IN_A_STAGE_OUTPUT
  GET_DEALS_MOVEMENTS_IN_PIPELINE: PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE_OUTPUT
  GET_DEALS_SUMMARY: PIPEDRIVE_GET_DEALS_SUMMARY_OUTPUT
  GET_DEALS_TIMELINE: PIPEDRIVE_GET_DEALS_TIMELINE_OUTPUT
  GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO: PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO_OUTPUT
  GET_DETAILS_OF_AN_ACTIVITY: PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY_OUTPUT
  GET_DETAILS_OF_AN_ORGANIZATION: PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION_OUTPUT
  GET_DETAILS_OF_A_BOARD: PIPEDRIVE_GET_DETAILS_OF_A_BOARD_OUTPUT
  GET_DETAILS_OF_A_CALL_LOG: PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG_OUTPUT
  GET_DETAILS_OF_A_DEAL: PIPEDRIVE_GET_DETAILS_OF_A_DEAL_OUTPUT
  GET_DETAILS_OF_A_PERSON: PIPEDRIVE_GET_DETAILS_OF_A_PERSON_OUTPUT
  GET_DETAILS_OF_A_PHASE: PIPEDRIVE_GET_DETAILS_OF_A_PHASE_OUTPUT
  GET_DETAILS_OF_A_PROJECT: PIPEDRIVE_GET_DETAILS_OF_A_PROJECT_OUTPUT
  GET_DETAILS_OF_A_SUBSCRIPTION: PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION_OUTPUT
  GET_DETAILS_OF_A_TASK: PIPEDRIVE_GET_DETAILS_OF_A_TASK_OUTPUT
  GET_DETAILS_OF_A_TEMPLATE: PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE_OUTPUT
  GET_MAIL_THREADS: PIPEDRIVE_GET_MAIL_THREADS_OUTPUT
  GET_ONE_COMMENT: PIPEDRIVE_GET_ONE_COMMENT_OUTPUT
  GET_ONE_DEAL_FIELD: PIPEDRIVE_GET_ONE_DEAL_FIELD_OUTPUT
  GET_ONE_FILE: PIPEDRIVE_GET_ONE_FILE_OUTPUT
  GET_ONE_FILTER: PIPEDRIVE_GET_ONE_FILTER_OUTPUT
  GET_ONE_LEAD: PIPEDRIVE_GET_ONE_LEAD_OUTPUT
  GET_ONE_MAIL_MESSAGE: PIPEDRIVE_GET_ONE_MAIL_MESSAGE_OUTPUT
  GET_ONE_MAIL_THREAD: PIPEDRIVE_GET_ONE_MAIL_THREAD_OUTPUT
  GET_ONE_NOTE: PIPEDRIVE_GET_ONE_NOTE_OUTPUT
  GET_ONE_ORGANIZATION_FIELD: PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD_OUTPUT
  GET_ONE_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP_OUTPUT
  GET_ONE_PERMISSION_SET: PIPEDRIVE_GET_ONE_PERMISSION_SET_OUTPUT
  GET_ONE_PERSON_FIELD: PIPEDRIVE_GET_ONE_PERSON_FIELD_OUTPUT
  GET_ONE_PIPELINE: PIPEDRIVE_GET_ONE_PIPELINE_OUTPUT
  GET_ONE_PRODUCT: PIPEDRIVE_GET_ONE_PRODUCT_OUTPUT
  GET_ONE_PRODUCT_FIELD: PIPEDRIVE_GET_ONE_PRODUCT_FIELD_OUTPUT
  GET_ONE_ROLE: PIPEDRIVE_GET_ONE_ROLE_OUTPUT
  GET_ONE_STAGE: PIPEDRIVE_GET_ONE_STAGE_OUTPUT
  GET_ONE_USER: PIPEDRIVE_GET_ONE_USER_OUTPUT
  GET_PROJECT_PHASES: PIPEDRIVE_GET_PROJECT_PHASES_OUTPUT
  GET_RECENTS: PIPEDRIVE_GET_RECENTS_OUTPUT
  GET_RESULT_OF_A_GOAL: PIPEDRIVE_GET_RESULT_OF_A_GOAL_OUTPUT
  LINK_A_REMOTE_FILE_TO_AN_ITEM: PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM_OUTPUT
  LINK_USER_VIDEO_INTEGRATION: PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION_OUTPUT
  LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION: PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION_OUTPUT
  LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL: PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL_OUTPUT
  LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON_OUTPUT
  LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL: PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL_OUTPUT
  LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION: PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION_OUTPUT
  LIST_DEALS_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON_OUTPUT
  LIST_FILES_ATTACHED_TO_AN_ORGANIZATION: PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION_OUTPUT
  LIST_FILES_ATTACHED_TO_A_DEAL: PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL_OUTPUT
  LIST_FILES_ATTACHED_TO_A_PERSON: PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON_OUTPUT
  LIST_FILES_ATTACHED_TO_A_PRODUCT: PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT_OUTPUT
  LIST_FOLLOWERS_OF_AN_ORGANIZATION: PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION_OUTPUT
  LIST_FOLLOWERS_OF_A_DEAL: PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL_OUTPUT
  LIST_FOLLOWERS_OF_A_PERSON: PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON_OUTPUT
  LIST_FOLLOWERS_OF_A_PRODUCT: PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT_OUTPUT
  LIST_FOLLOWERS_OF_A_USER: PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER_OUTPUT
  LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION: PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION_OUTPUT
  LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL: PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL_OUTPUT
  LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON_OUTPUT
  LIST_PARTICIPANTS_OF_A_DEAL: PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL_OUTPUT
  LIST_PERMISSION_SET_ASSIGNMENTS: PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS_OUTPUT
  LIST_PERMITTED_USERS: PIPEDRIVE_LIST_PERMITTED_USERS_OUTPUT
  LIST_PERSONS_OF_AN_ORGANIZATION: PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION_OUTPUT
  LIST_PERSON_ACCESS_USERS: PIPEDRIVE_LIST_PERSON_ACCESS_USERS_OUTPUT
  LIST_PIPELINE_VISIBILITY_FOR_A_ROLE: PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE_OUTPUT
  LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON: PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON_OUTPUT
  LIST_PRODUCTS_ATTACHED_TO_A_DEAL: PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL_OUTPUT
  LIST_PRODUCT_PERMITTED_USERS: PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS_OUTPUT
  LIST_ROLE_ASSIGNMENTS: PIPEDRIVE_LIST_ROLE_ASSIGNMENTS_OUTPUT
  LIST_ROLE_SETTINGS: PIPEDRIVE_LIST_ROLE_SETTINGS_OUTPUT
  LIST_SETTINGS_OF_AN_AUTHORIZED_USER: PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER_OUTPUT
  LIST_UPDATES_ABOUT_AN_ORGANIZATION: PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION_OUTPUT
  LIST_UPDATES_ABOUT_A_DEAL: PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL_OUTPUT
  LIST_UPDATES_ABOUT_A_PERSON: PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON_OUTPUT
  LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL: PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL_OUTPUT
  LIST_USER_PERMISSIONS: PIPEDRIVE_LIST_USER_PERMISSIONS_OUTPUT
  LIST_USER_ROLE_SETTINGS: PIPEDRIVE_LIST_USER_ROLE_SETTINGS_OUTPUT
  MERGE_TWO_DEALS: PIPEDRIVE_MERGE_TWO_DEALS_OUTPUT
  MERGE_TWO_ORGANIZATIONS: PIPEDRIVE_MERGE_TWO_ORGANIZATIONS_OUTPUT
  MERGE_TWO_PERSONS: PIPEDRIVE_MERGE_TWO_PERSONS_OUTPUT
  ORGANIZATION_ACCESSIBLE_USER_LIST: PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST_OUTPUT
  PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES: PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES_OUTPUT
  PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS: PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS_OUTPUT
  RECEIVES_AN_INCOMING_MESSAGE: PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE_OUTPUT
  REFRESHING_THE_TOKENS: PIPEDRIVE_REFRESHING_THE_TOKENS_OUTPUT
  REQUESTING_AUTHORIZATION: PIPEDRIVE_REQUESTING_AUTHORIZATION_OUTPUT
  RETURNS_PROJECT_ACTIVITIES: PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES_OUTPUT
  RETURNS_PROJECT_GROUPS: PIPEDRIVE_RETURNS_PROJECT_GROUPS_OUTPUT
  RETURNS_PROJECT_PLAN: PIPEDRIVE_RETURNS_PROJECT_PLAN_OUTPUT
  RETURNS_PROJECT_TASKS: PIPEDRIVE_RETURNS_PROJECT_TASKS_OUTPUT
  SEARCH_DEALS: PIPEDRIVE_SEARCH_DEALS_OUTPUT
  SEARCH_ITEM_BY_FIELD: PIPEDRIVE_SEARCH_ITEM_BY_FIELD_OUTPUT
  SEARCH_LEADS: PIPEDRIVE_SEARCH_LEADS_OUTPUT
  SEARCH_ORGANIZATIONS: PIPEDRIVE_SEARCH_ORGANIZATIONS_OUTPUT
  SEARCH_PERSONS: PIPEDRIVE_SEARCH_PERSONS_OUTPUT
  SEARCH_PRODUCTS: PIPEDRIVE_SEARCH_PRODUCTS_OUTPUT
  UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION: PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION_OUTPUT
  UPDATE_ACTIVITY_IN_PROJECT_PLAN: PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN_OUTPUT
  UPDATE_AN_ACTIVITY: PIPEDRIVE_UPDATE_AN_ACTIVITY_OUTPUT
  UPDATE_AN_ACTIVITY_TYPE: PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE_OUTPUT
  UPDATE_AN_INSTALLMENT_SUBSCRIPTION: PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION_OUTPUT
  UPDATE_AN_ORGANIZATION: PIPEDRIVE_UPDATE_AN_ORGANIZATION_OUTPUT
  UPDATE_AN_ORGANIZATION_FIELD: PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD_OUTPUT
  UPDATE_AN_ORGANIZATION_RELATIONSHIP: PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP_OUTPUT
  UPDATE_A_COMMENT_RELATED_TO_A_NOTE: PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE_OUTPUT
  UPDATE_A_DEAL: PIPEDRIVE_UPDATE_A_DEAL_OUTPUT
  UPDATE_A_DEAL_FIELD: PIPEDRIVE_UPDATE_A_DEAL_FIELD_OUTPUT
  UPDATE_A_LEAD: PIPEDRIVE_UPDATE_A_LEAD_OUTPUT
  UPDATE_A_LEAD_LABEL: PIPEDRIVE_UPDATE_A_LEAD_LABEL_OUTPUT
  UPDATE_A_NOTE: PIPEDRIVE_UPDATE_A_NOTE_OUTPUT
  UPDATE_A_PERSON: PIPEDRIVE_UPDATE_A_PERSON_OUTPUT
  UPDATE_A_PERSON_FIELD: PIPEDRIVE_UPDATE_A_PERSON_FIELD_OUTPUT
  UPDATE_A_PIPELINE: PIPEDRIVE_UPDATE_A_PIPELINE_OUTPUT
  UPDATE_A_PRODUCT: PIPEDRIVE_UPDATE_A_PRODUCT_OUTPUT
  UPDATE_A_PRODUCT_FIELD: PIPEDRIVE_UPDATE_A_PRODUCT_FIELD_OUTPUT
  UPDATE_A_PROJECT: PIPEDRIVE_UPDATE_A_PROJECT_OUTPUT
  UPDATE_A_RECURRING_SUBSCRIPTION: PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION_OUTPUT
  UPDATE_A_TASK: PIPEDRIVE_UPDATE_A_TASK_OUTPUT
  UPDATE_A_TEAM: PIPEDRIVE_UPDATE_A_TEAM_OUTPUT
  UPDATE_EXISTING_GOAL: PIPEDRIVE_UPDATE_EXISTING_GOAL_OUTPUT
  UPDATE_FILE_DETAILS: PIPEDRIVE_UPDATE_FILE_DETAILS_OUTPUT
  UPDATE_FILTER: PIPEDRIVE_UPDATE_FILTER_OUTPUT
  UPDATE_MAIL_THREAD_DETAILS: PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS_OUTPUT
  UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE: PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE_OUTPUT
  UPDATE_ROLE_DETAILS: PIPEDRIVE_UPDATE_ROLE_DETAILS_OUTPUT
  UPDATE_STAGE_DETAILS: PIPEDRIVE_UPDATE_STAGE_DETAILS_OUTPUT
  UPDATE_TASK_IN_PROJECT_PLAN: PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN_OUTPUT
  UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL: PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL_OUTPUT
  UPDATE_USER_DETAILS: PIPEDRIVE_UPDATE_USER_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of PIPEDRIVE's NEW_DEAL_TRIGGER trigger payload.
 */
type PIPEDRIVE_NEW_DEAL_TRIGGER_PAYLOAD = {
  /**
   * Currency
   * @description Currency of the deal
   * @default null
   */
  currency: string | null;
  /**
   * Id
   * @description ID of the deal
   * @default null
   */
  id: string | null;
  /**
   * Stage Id
   * @description ID of the pipeline stage
   * @default null
   */
  stage_id: string | null;
  /**
   * Status
   * @description Status of the deal
   * @default null
   */
  status: string | null;
  /**
   * Title
   * @description Title of the deal
   * @default null
   */
  title: string | null;
  /**
   * User Id
   * @description ID of the user who created the deal
   * @default null
   */
  user_id: string | null;
  /**
   * Value
   * @description Value of the deal
   * @default null
   */
  value: string | null;
};

/**
 * Type of PIPEDRIVE's NEW_NOTE_TRIGGER trigger payload.
 */
type PIPEDRIVE_NEW_NOTE_TRIGGER_PAYLOAD = {
  /**
   * Add Time
   * @description Time when the note was added
   * @default null
   */
  add_time: string | null;
  /**
   * Content
   * @description Content of the note
   * @default null
   */
  content: string | null;
  /**
   * Deal Id
   * @description ID of the associated deal
   * @default null
   */
  deal_id: string | null;
  /**
   * Id
   * @description ID of the note
   * @default null
   */
  id: string | null;
  /**
   * Org Id
   * @description ID of the associated organization
   * @default null
   */
  org_id: string | null;
  /**
   * Person Id
   * @description ID of the associated person
   * @default null
   */
  person_id: string | null;
  /**
   * User Id
   * @description ID of the user who created the note
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of PIPEDRIVE's NEW_ORGANIZATION_TRIGGER trigger payload.
 */
type PIPEDRIVE_NEW_ORGANIZATION_TRIGGER_PAYLOAD = {
  /**
   * Address
   * @description Address of the organization
   * @default null
   */
  address: string | null;
  /**
   * Email
   * @description Email of the organization
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description ID of the organization
   * @default null
   */
  id: string | null;
  /**
   * Name
   * @description Name of the organization
   * @default null
   */
  name: string | null;
  /**
   * Owner Id
   * @description ID of the organization owner
   * @default null
   */
  owner_id: string | null;
  /**
   * Phone
   * @description Phone number of the organization
   * @default null
   */
  phone: string | null;
  /**
   * Web
   * @description Website of the organization
   * @default null
   */
  web: string | null;
};

/**
 * Map of Composio's PIPEDRIVE toolkit.
 */
export const PIPEDRIVE = {
  slug: "pipedrive",
  tools: {
    /**
     * New activity added. response includes `more activities scheduled in context` to show if more are planned with the same entity. see tutorial on adding activities [here](https://pipedrive.readme.io/docs/adding-an-activity).
     */
    ADD_AN_ACTIVITY: "PIPEDRIVE_ADD_AN_ACTIVITY",
    /**
     * Adds a new installment subscription.
     */
    ADD_AN_INSTALLMENT_SUBSCRIPTION: "PIPEDRIVE_ADD_AN_INSTALLMENT_SUBSCRIPTION",
    /**
     * Set up a new pipedrive organization using custom fields with unique key hashes. retrieve `organizationfields` for configuration. check the linked tutorial for guidance.
     */
    ADD_AN_ORGANIZATION: "PIPEDRIVE_ADD_AN_ORGANIZATION",
    /**
     * Adds a new call log.
     */
    ADD_A_CALL_LOG: "PIPEDRIVE_ADD_A_CALL_LOG",
    /**
     * New messaging channel added; registration limited to admins. utilizes getconversations endpoint for data retrieval. requires messengers integration oauth scope and a prepared messaging app extension manifest.
     */
    ADD_A_CHANNEL: "PIPEDRIVE_ADD_A_CHANNEL",
    /**
     * Adds a new comment to a note.
     */
    ADD_A_COMMENT_TO_A_NOTE: "PIPEDRIVE_ADD_A_COMMENT_TO_A_NOTE",
    /**
     * Add a new deal to pipedrive with any custom fields, which vary by account and are identified by long hash keys. check dealfields for existing custom fields. for details, visit the tutorial on adding a deal.
     */
    ADD_A_DEAL: "PIPEDRIVE_ADD_A_DEAL",
    /**
     * Adds a follower to an organization.
     */
    ADD_A_FOLLOWER_TO_AN_ORGANIZATION: "PIPEDRIVE_ADD_A_FOLLOWER_TO_AN_ORGANIZATION",
    /**
     * Adds a follower to a deal.
     */
    ADD_A_FOLLOWER_TO_A_DEAL: "PIPEDRIVE_ADD_A_FOLLOWER_TO_A_DEAL",
    /**
     * Adds a follower to a person.
     */
    ADD_A_FOLLOWER_TO_A_PERSON: "PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PERSON",
    /**
     * Adds a follower to a product.
     */
    ADD_A_FOLLOWER_TO_A_PRODUCT: "PIPEDRIVE_ADD_A_FOLLOWER_TO_A_PRODUCT",
    /**
     * Pipedrive api lets you add leads linked to people or organizations and tags them with 'api' source. custom fields from deals apply to leads and appear in responses if set. details are in the tutorials for adding and updating leads.
     */
    ADD_A_LEAD: "PIPEDRIVE_ADD_A_LEAD",
    /**
     * Creates a lead label.
     */
    ADD_A_LEAD_LABEL: "PIPEDRIVE_ADD_A_LEAD_LABEL",
    /**
     * Adds a new deal field. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target=" blank" rel="noopener noreferrer">adding a new custom field</a>.
     */
    ADD_A_NEW_DEAL_FIELD: "PIPEDRIVE_ADD_A_NEW_DEAL_FIELD",
    /**
     * New filter creation returns an id. only one primary condition group with 'and' and two secondary groups (one 'and', one 'or') are supported. future syntax expansion possible. see tutorial for details.
     */
    ADD_A_NEW_FILTER: "PIPEDRIVE_ADD_A_NEW_FILTER",
    /**
     * Adds a new goal. along with adding a new goal, a report is created to track the progress of your goal.
     */
    ADD_A_NEW_GOAL: "PIPEDRIVE_ADD_A_NEW_GOAL",
    /**
     * Adds a new organization field. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target=" blank" rel="noopener noreferrer">adding a new custom field</a>.
     */
    ADD_A_NEW_ORGANIZATION_FIELD: "PIPEDRIVE_ADD_A_NEW_ORGANIZATION_FIELD",
    /**
     * Adds a new person field. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target=" blank" rel="noopener noreferrer">adding a new custom field</a>.
     */
    ADD_A_NEW_PERSON_FIELD: "PIPEDRIVE_ADD_A_NEW_PERSON_FIELD",
    /**
     * Adds a new pipeline.
     */
    ADD_A_NEW_PIPELINE: "PIPEDRIVE_ADD_A_NEW_PIPELINE",
    /**
     * Adds a new product field. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-new-custom-field" target=" blank" rel="noopener noreferrer">adding a new custom field</a>.
     */
    ADD_A_NEW_PRODUCT_FIELD: "PIPEDRIVE_ADD_A_NEW_PRODUCT_FIELD",
    /**
     * Adds a new stage, returns the id upon success.
     */
    ADD_A_NEW_STAGE: "PIPEDRIVE_ADD_A_NEW_STAGE",
    /**
     * Adds a new team to the company and returns the created object.
     */
    ADD_A_NEW_TEAM: "PIPEDRIVE_ADD_A_NEW_TEAM",
    /**
     * Adds a new user to the company, returns the id upon success.
     */
    ADD_A_NEW_USER: "PIPEDRIVE_ADD_A_NEW_USER",
    /**
     * Add a note to a deal, person, organization, lead, or project in pipedrive. at least one of deal id, person id, org id, lead id, or project id must be provided.
     */
    ADD_A_NOTE: "PIPEDRIVE_ADD_A_NOTE",
    /**
     * Adds a participant to a deal.
     */
    ADD_A_PARTICIPANT_TO_A_DEAL: "PIPEDRIVE_ADD_A_PARTICIPANT_TO_A_DEAL",
    /**
     * Add a new contact in pipedrive with optional custom fields unique to each account found using the `personfields` endpoint. the endpoint also handles `data.marketing status` for campaigns product users.
     */
    ADD_A_PERSON: "PIPEDRIVE_ADD_A_PERSON",
    /**
     * Adds a new product to the products inventory. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-product" target=" blank" rel="noopener noreferrer">adding a product</a>.
     */
    ADD_A_PRODUCT: "PIPEDRIVE_ADD_A_PRODUCT",
    /**
     * Adds a product to a deal, creating a new item called a deal-product.
     */
    ADD_A_PRODUCT_TO_A_DEAL: "PIPEDRIVE_ADD_A_PRODUCT_TO_A_DEAL",
    /**
     * Adds a new project. note that you can supply additional custom fields along with the request that are not described here. these custom fields are different for each pipedrive account and can be recognized by long hashes as keys.
     */
    ADD_A_PROJECT: "PIPEDRIVE_ADD_A_PROJECT",
    /**
     * Adds a new recurring subscription.
     */
    ADD_A_RECURRING_SUBSCRIPTION: "PIPEDRIVE_ADD_A_RECURRING_SUBSCRIPTION",
    /**
     * Adds a new role.
     */
    ADD_A_ROLE: "PIPEDRIVE_ADD_A_ROLE",
    /**
     * Adds a new task.
     */
    ADD_A_TASK: "PIPEDRIVE_ADD_A_TASK",
    /**
     * Upload and link files to deals, people, organizations, activities, products, or leads in pipedrive. see the "adding a file" tutorial for details.
     */
    ADD_FILE: "PIPEDRIVE_ADD_FILE",
    /**
     * Adds a new activity type.
     */
    ADD_NEW_ACTIVITY_TYPE: "PIPEDRIVE_ADD_NEW_ACTIVITY_TYPE",
    /**
     * Adds or updates the visibility setting for a role.
     */
    ADD_OR_UPDATE_ROLE_SETTING: "PIPEDRIVE_ADD_OR_UPDATE_ROLE_SETTING",
    /**
     * This service allows adding a photo to a person's profile, replacing any existing one. images must be square with a minimum size of 128 pixels and in gif, jpg, or png formats. they will be resized to 128 and 512 pixels.
     */
    ADD_PERSON_PICTURE: "PIPEDRIVE_ADD_PERSON_PICTURE",
    /**
     * Assigns a user to a role.
     */
    ADD_ROLE_ASSIGNMENT: "PIPEDRIVE_ADD_ROLE_ASSIGNMENT",
    /**
     * Adds users to an existing team.
     */
    ADD_USERS_TO_A_TEAM: "PIPEDRIVE_ADD_USERS_TO_A_TEAM",
    /**
     * Archives a project.
     */
    ARCHIVE_A_PROJECT: "PIPEDRIVE_ARCHIVE_A_PROJECT",
    /**
     * Adds an audio recording to the call log. that audio can be played by those who have access to the call log object.
     */
    ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG: "PIPEDRIVE_ATTACH_AN_AUDIO_FILE_TO_THE_CALL_LOG",
    /**
     * Cancels a recurring subscription.
     */
    CANCEL_A_RECURRING_SUBSCRIPTION: "PIPEDRIVE_CANCEL_A_RECURRING_SUBSCRIPTION",
    /**
     * Creates and returns an organization relationship.
     */
    CREATE_AN_ORGANIZATION_RELATIONSHIP: "PIPEDRIVE_CREATE_AN_ORGANIZATION_RELATIONSHIP",
    /**
     * Creates and returns details of a new webhook. trigger events combine `event action` and `event object`, like `*.*` for all events or `added.deal`, `deleted.persons` for specific actions. more info in the webhooks guide.
     */
    CREATE_A_NEW_WEBHOOK: "PIPEDRIVE_CREATE_A_NEW_WEBHOOK",
    /**
     * Creates an empty file on google drive linked to an item. for details, refer to the pipedrive remote file adding tutorial.
     */
    CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM: "PIPEDRIVE_CREATE_A_REMOTE_FILE_AND_LINK_IT_TO_AN_ITEM",
    /**
     * Marks an activity as deleted. after 30 days, the activity will be permanently deleted.
     */
    DELETE_AN_ACTIVITY: "PIPEDRIVE_DELETE_AN_ACTIVITY",
    /**
     * Marks an activity type as deleted.
     */
    DELETE_AN_ACTIVITY_TYPE: "PIPEDRIVE_DELETE_AN_ACTIVITY_TYPE",
    /**
     * Deletes a product attachment from a deal, using the `product attachment id`.
     */
    DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL: "PIPEDRIVE_DELETE_AN_ATTACHED_PRODUCT_FROM_A_DEAL",
    /**
     * Marks an organization as deleted. after 30 days, the organization will be permanently deleted.
     */
    DELETE_AN_ORGANIZATION: "PIPEDRIVE_DELETE_AN_ORGANIZATION",
    /**
     * Marks a field as deleted. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target=" blank" rel="noopener noreferrer">deleting a custom field</a>.
     */
    DELETE_AN_ORGANIZATION_FIELD: "PIPEDRIVE_DELETE_AN_ORGANIZATION_FIELD",
    /**
     * Deletes an organization relationship and returns the deleted id.
     */
    DELETE_AN_ORGANIZATION_RELATIONSHIP: "PIPEDRIVE_DELETE_AN_ORGANIZATION_RELATIONSHIP",
    /**
     * Deletes a call log. if there is an audio recording attached to it, it will also be deleted. the related activity will not be removed by this request. if you want to remove the related activities, please use the endpoint which is specific for activities.
     */
    DELETE_A_CALL_LOG: "PIPEDRIVE_DELETE_A_CALL_LOG",
    /**
     * The endpoint removes a messenger channel along with conversations and messages. requires messengers integration oauth and messaging app extension manifest.
     */
    DELETE_A_CHANNEL: "PIPEDRIVE_DELETE_A_CHANNEL",
    /**
     * Deletes a comment.
     */
    DELETE_A_COMMENT_RELATED_TO_A_NOTE: "PIPEDRIVE_DELETE_A_COMMENT_RELATED_TO_A_NOTE",
    /**
     * Deletes an existing conversation. to use the endpoint, you need to have **messengers integration** oauth scope enabled and the messaging manifest ready for the [messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     */
    DELETE_A_CONVERSATION: "PIPEDRIVE_DELETE_A_CONVERSATION",
    /**
     * Marks a deal as deleted. after 30 days, the deal will be permanently deleted.
     */
    DELETE_A_DEAL: "PIPEDRIVE_DELETE_A_DEAL",
    /**
     * Marks a field as deleted. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target=" blank" rel="noopener noreferrer">deleting a custom field</a>.
     */
    DELETE_A_DEAL_FIELD: "PIPEDRIVE_DELETE_A_DEAL_FIELD",
    /**
     * Marks a file as deleted. after 30 days, the file will be permanently deleted.
     */
    DELETE_A_FILE: "PIPEDRIVE_DELETE_A_FILE",
    /**
     * Marks a filter as deleted.
     */
    DELETE_A_FILTER: "PIPEDRIVE_DELETE_A_FILTER",
    /**
     * Deletes a follower from an organization. you can retrieve the `follower id` from the <a href="https://developers.pipedrive.com/docs/api/v1/organizations#getorganizationfollowers">list followers of an organization</a> endpoint.
     */
    DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION: "PIPEDRIVE_DELETE_A_FOLLOWER_FROM_AN_ORGANIZATION",
    /**
     * Deletes a follower from a deal.
     */
    DELETE_A_FOLLOWER_FROM_A_DEAL: "PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_DEAL",
    /**
     * Deletes a follower from a person.
     */
    DELETE_A_FOLLOWER_FROM_A_PERSON: "PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PERSON",
    /**
     * Deletes a follower from a product.
     */
    DELETE_A_FOLLOWER_FROM_A_PRODUCT: "PIPEDRIVE_DELETE_A_FOLLOWER_FROM_A_PRODUCT",
    /**
     * Deletes a specific lead.
     */
    DELETE_A_LEAD: "PIPEDRIVE_DELETE_A_LEAD",
    /**
     * Deletes a specific lead label.
     */
    DELETE_A_LEAD_LABEL: "PIPEDRIVE_DELETE_A_LEAD_LABEL",
    /**
     * Deletes a specific note.
     */
    DELETE_A_NOTE: "PIPEDRIVE_DELETE_A_NOTE",
    /**
     * Deletes a participant from a deal.
     */
    DELETE_A_PARTICIPANT_FROM_A_DEAL: "PIPEDRIVE_DELETE_A_PARTICIPANT_FROM_A_DEAL",
    /**
     * Marks a person as deleted. after 30 days, the person will be permanently deleted.
     */
    DELETE_A_PERSON: "PIPEDRIVE_DELETE_A_PERSON",
    /**
     * Marks a field as deleted. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target=" blank" rel="noopener noreferrer">deleting a custom field</a>.
     */
    DELETE_A_PERSON_FIELD: "PIPEDRIVE_DELETE_A_PERSON_FIELD",
    /**
     * Marks a pipeline as deleted.
     */
    DELETE_A_PIPELINE: "PIPEDRIVE_DELETE_A_PIPELINE",
    /**
     * Marks a product as deleted. after 30 days, the product will be permanently deleted.
     */
    DELETE_A_PRODUCT: "PIPEDRIVE_DELETE_A_PRODUCT",
    /**
     * Marks a product field as deleted. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/deleting-a-custom-field" target=" blank" rel="noopener noreferrer">deleting a custom field</a>.
     */
    DELETE_A_PRODUCT_FIELD: "PIPEDRIVE_DELETE_A_PRODUCT_FIELD",
    /**
     * Marks a project as deleted.
     */
    DELETE_A_PROJECT: "PIPEDRIVE_DELETE_A_PROJECT",
    /**
     * Marks a role as deleted.
     */
    DELETE_A_ROLE: "PIPEDRIVE_DELETE_A_ROLE",
    /**
     * Removes the assigned user from a role and adds to the default role.
     */
    DELETE_A_ROLE_ASSIGNMENT: "PIPEDRIVE_DELETE_A_ROLE_ASSIGNMENT",
    /**
     * Marks a stage as deleted.
     */
    DELETE_A_STAGE: "PIPEDRIVE_DELETE_A_STAGE",
    /**
     * Marks an installment or a recurring subscription as deleted.
     */
    DELETE_A_SUBSCRIPTION: "PIPEDRIVE_DELETE_A_SUBSCRIPTION",
    /**
     * Marks a task as deleted. if the task has subtasks then those will also be deleted.
     */
    DELETE_A_TASK: "PIPEDRIVE_DELETE_A_TASK",
    /**
     * Marks a goal as deleted.
     */
    DELETE_EXISTING_GOAL: "PIPEDRIVE_DELETE_EXISTING_GOAL",
    /**
     * Deletes the specified webhook.
     */
    DELETE_EXISTING_WEBHOOK: "PIPEDRIVE_DELETE_EXISTING_WEBHOOK",
    /**
     * Marks a mail thread as deleted.
     */
    DELETE_MAIL_THREAD: "PIPEDRIVE_DELETE_MAIL_THREAD",
    /**
     * Marks multiple activities as deleted. after 30 days, the activities will be permanently deleted.
     */
    DELETE_MULTIPLE_ACTIVITIES_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_ACTIVITIES_IN_BULK",
    /**
     * Marks multiple activity types as deleted.
     */
    DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_ACTIVITY_TYPES_IN_BULK",
    /**
     * Marks multiple deals as deleted. after 30 days, the deals will be permanently deleted.
     */
    DELETE_MULTIPLE_DEALS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_DEALS_IN_BULK",
    /**
     * Marks multiple deal fields as deleted.
     */
    DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_DEAL_FIELDS_IN_BULK",
    /**
     * Marks multiple filters as deleted.
     */
    DELETE_MULTIPLE_FILTERS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_FILTERS_IN_BULK",
    /**
     * Marks multiple organizations as deleted. after 30 days, the organizations will be permanently deleted.
     */
    DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATIONS_IN_BULK",
    /**
     * Marks multiple fields as deleted.
     */
    DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_ORGANIZATION_FIELDS_IN_BULK",
    /**
     * Marks multiple persons as deleted. after 30 days, the persons will be permanently deleted.
     */
    DELETE_MULTIPLE_PERSONS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_PERSONS_IN_BULK",
    /**
     * Marks multiple fields as deleted.
     */
    DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_PERSON_FIELDS_IN_BULK",
    /**
     * Marks multiple fields as deleted.
     */
    DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_PRODUCT_FIELDS_IN_BULK",
    /**
     * Marks multiple stages as deleted.
     */
    DELETE_MULTIPLE_STAGES_IN_BULK: "PIPEDRIVE_DELETE_MULTIPLE_STAGES_IN_BULK",
    /**
     * Deletes a person’s picture.
     */
    DELETE_PERSON_PICTURE: "PIPEDRIVE_DELETE_PERSON_PICTURE",
    /**
     * Deletes users from an existing team.
     */
    DELETE_USERS_FROM_A_TEAM: "PIPEDRIVE_DELETE_USERS_FROM_A_TEAM",
    /**
     * Initializes a file download.
     */
    DOWNLOAD_ONE_FILE: "PIPEDRIVE_DOWNLOAD_ONE_FILE",
    /**
     * Duplicates a deal.
     */
    DUPLICATE_DEAL: "PIPEDRIVE_DUPLICATE_DEAL",
    /**
     * Lists the users permitted to access a lead.
     */
    ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD: "PIPEDRIVE_ENUMERATE_ACCESSIBLE_USERS_FOR_LEAD",
    /**
     * Query goal data by appending `{searchfield}={searchvalue}` to the url with dot-notation fields and values. include `is active` to filter by goal status and specify both `period.start` and `period.end` for time-based searches.
     */
    FIND_GOALS: "PIPEDRIVE_FIND_GOALS",
    /**
     * Returns details of an installment or a recurring subscription by the deal id.
     */
    FIND_SUBSCRIPTION_BY_DEAL: "PIPEDRIVE_FIND_SUBSCRIPTION_BY_DEAL",
    /**
     * Finds users by their name.
     */
    FIND_USERS_BY_NAME: "PIPEDRIVE_FIND_USERS_BY_NAME",
    /**
     * Returns all activities assigned to a particular user.
     */
    GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER: "PIPEDRIVE_GET_ALL_ACTIVITIES_ASSIGNED_TO_A_PARTICULAR_USER",
    /**
     * This beta cursor-paginated endpoint returns all activities, accessible only to global admins, not regular users who get a 403 error. refer to pipedrive's documentation for pagination and global permissions.
     */
    GET_ALL_ACTIVITIES_BETA: "PIPEDRIVE_GET_ALL_ACTIVITIES_BETA",
    /**
     * Returns all activity fields.
     */
    GET_ALL_ACTIVITY_FIELDS: "PIPEDRIVE_GET_ALL_ACTIVITY_FIELDS",
    /**
     * Returns all activity types.
     */
    GET_ALL_ACTIVITY_TYPES: "PIPEDRIVE_GET_ALL_ACTIVITY_TYPES",
    /**
     * Returns the add-ons for a single company.
     */
    GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY: "PIPEDRIVE_GET_ALL_ADD_ONS_FOR_A_SINGLE_COMPANY",
    /**
     * Returns all call logs assigned to a particular user.
     */
    GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER: "PIPEDRIVE_GET_ALL_CALL_LOGS_ASSIGNED_TO_A_PARTICULAR_USER",
    /**
     * Returns all comments associated with a note.
     */
    GET_ALL_COMMENTS_FOR_A_NOTE: "PIPEDRIVE_GET_ALL_COMMENTS_FOR_A_NOTE",
    /**
     * Returns all deals. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/getting-all-deals" target=" blank" rel="noopener noreferrer">getting all deals</a>.
     */
    GET_ALL_DEALS: "PIPEDRIVE_GET_ALL_DEALS",
    /**
     * This endpoint returns all deals with cursor pagination (in beta). only global admins can access it; others get a 403 error. more info on pagination and permissions is available online.
     */
    GET_ALL_DEALS_BETA: "PIPEDRIVE_GET_ALL_DEALS_BETA",
    /**
     * Returns data about all deal fields.
     */
    GET_ALL_DEAL_FIELDS: "PIPEDRIVE_GET_ALL_DEAL_FIELDS",
    /**
     * Returns data about all files.
     */
    GET_ALL_FILES: "PIPEDRIVE_GET_ALL_FILES",
    /**
     * Returns data about all filters.
     */
    GET_ALL_FILTERS: "PIPEDRIVE_GET_ALL_FILTERS",
    /**
     * The text provides links to documentation for adding or updating filters, and information on all supported filter helpers in an api. it encourages consulting a tutorial for more details on adding a filter.
     */
    GET_ALL_FILTER_HELPERS: "PIPEDRIVE_GET_ALL_FILTER_HELPERS",
    /**
     * The api returns sorted leads by creation time, supporting pagination via `limit` and `start`. custom field values are included if set, mimicking the `deals` endpoint structure; unset fields are omitted. leads share custom fields with deals.
     */
    GET_ALL_LEADS: "PIPEDRIVE_GET_ALL_LEADS",
    /**
     * Returns details of all lead labels. this endpoint does not support pagination and all labels are always returned.
     */
    GET_ALL_LEAD_LABELS: "PIPEDRIVE_GET_ALL_LEAD_LABELS",
    /**
     * Returns all lead sources. please note that the list of lead sources is fixed, it cannot be modified. all leads created through the pipedrive api will have a lead source `api` assigned.
     */
    GET_ALL_LEAD_SOURCES: "PIPEDRIVE_GET_ALL_LEAD_SOURCES",
    /**
     * Returns all the mail messages inside a specified mail thread.
     */
    GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD: "PIPEDRIVE_GET_ALL_MAIL_MESSAGES_OF_MAIL_THREAD",
    /**
     * Returns all notes.
     */
    GET_ALL_NOTES: "PIPEDRIVE_GET_ALL_NOTES",
    /**
     * Returns data about all note fields.
     */
    GET_ALL_NOTE_FIELDS: "PIPEDRIVE_GET_ALL_NOTE_FIELDS",
    /**
     * Returns all organizations.
     */
    GET_ALL_ORGANIZATIONS: "PIPEDRIVE_GET_ALL_ORGANIZATIONS",
    /**
     * This beta api endpoint lists all organizations with cursor pagination. only global admins have access; others get a 403 error. see docs for pagination and global permissions.
     */
    GET_ALL_ORGANIZATIONS_BETA: "PIPEDRIVE_GET_ALL_ORGANIZATIONS_BETA",
    /**
     * Returns data about all organization fields.
     */
    GET_ALL_ORGANIZATION_FIELDS: "PIPEDRIVE_GET_ALL_ORGANIZATION_FIELDS",
    /**
     * Returns all payments of an installment or recurring subscription.
     */
    GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION: "PIPEDRIVE_GET_ALL_PAYMENTS_OF_A_SUBSCRIPTION",
    /**
     * Returns data about all permission sets.
     */
    GET_ALL_PERMISSION_SETS: "PIPEDRIVE_GET_ALL_PERMISSION_SETS",
    /**
     * Returns all persons.
     */
    GET_ALL_PERSONS: "PIPEDRIVE_GET_ALL_PERSONS",
    /**
     * This beta endpoint returns all persons, using cursor pagination. only global admins have access; others get a 403 error. info on pagination and permissions is in the linked docs.
     */
    GET_ALL_PERSONS_BETA: "PIPEDRIVE_GET_ALL_PERSONS_BETA",
    /**
     * Returns data about all person fields.<br>if a company uses the [campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the `data.marketing status` field.
     */
    GET_ALL_PERSON_FIELDS: "PIPEDRIVE_GET_ALL_PERSON_FIELDS",
    /**
     * Returns data about all pipelines.
     */
    GET_ALL_PIPELINES: "PIPEDRIVE_GET_ALL_PIPELINES",
    /**
     * Returns data about all products.
     */
    GET_ALL_PRODUCTS: "PIPEDRIVE_GET_ALL_PRODUCTS",
    /**
     * Returns data about all product fields.
     */
    GET_ALL_PRODUCT_FIELDS: "PIPEDRIVE_GET_ALL_PRODUCT_FIELDS",
    /**
     * Returns all projects. this is a cursor-paginated endpoint. for more information, please refer to our documentation on <a href="https://pipedrive.readme.io/docs/core-api-concepts-pagination" target=" blank" rel="noopener noreferrer">pagination</a>.
     */
    GET_ALL_PROJECTS: "PIPEDRIVE_GET_ALL_PROJECTS",
    /**
     * Returns all projects boards that are not deleted.
     */
    GET_ALL_PROJECT_BOARDS: "PIPEDRIVE_GET_ALL_PROJECT_BOARDS",
    /**
     * The endpoint retrieves all non-deleted project templates with cursor-based pagination. refer to the provided documentation link for more details on pagination.
     */
    GET_ALL_PROJECT_TEMPLATES: "PIPEDRIVE_GET_ALL_PROJECT_TEMPLATES",
    /**
     * Gets all of the relationships for a supplied organization id.
     */
    GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION: "PIPEDRIVE_GET_ALL_RELATIONSHIPS_FOR_ORGANIZATION",
    /**
     * Returns all the roles within the company.
     */
    GET_ALL_ROLES: "PIPEDRIVE_GET_ALL_ROLES",
    /**
     * Returns data about all stages.
     */
    GET_ALL_STAGES: "PIPEDRIVE_GET_ALL_STAGES",
    /**
     * Returns all supported currencies in given account which should be used when saving monetary values with other objects. the `code` parameter of the returning objects is the currency code according to iso 4217 for all non-custom currencies.
     */
    GET_ALL_SUPPORTED_CURRENCIES: "PIPEDRIVE_GET_ALL_SUPPORTED_CURRENCIES",
    /**
     * Returns all tasks. this is a cursor-paginated endpoint. for more information, please refer to our documentation on <a href="https://pipedrive.readme.io/docs/core-api-concepts-pagination" target=" blank" rel="noopener noreferrer">pagination</a>.
     */
    GET_ALL_TASKS: "PIPEDRIVE_GET_ALL_TASKS",
    /**
     * Returns data about teams within the company.
     */
    GET_ALL_TEAMS: "PIPEDRIVE_GET_ALL_TEAMS",
    /**
     * Returns data about all teams which have the specified user as a member.
     */
    GET_ALL_TEAMS_OF_A_USER: "PIPEDRIVE_GET_ALL_TEAMS_OF_A_USER",
    /**
     * Returns data about all users within the company.
     */
    GET_ALL_USERS: "PIPEDRIVE_GET_ALL_USERS",
    /**
     * Returns a list of all user ids within a team.
     */
    GET_ALL_USERS_IN_A_TEAM: "PIPEDRIVE_GET_ALL_USERS_IN_A_TEAM",
    /**
     * Returns data about all connections for the authorized user.
     */
    GET_ALL_USER_CONNECTIONS: "PIPEDRIVE_GET_ALL_USER_CONNECTIONS",
    /**
     * Returns data about all the webhooks of a company.
     */
    GET_ALL_WEBHOOKS: "PIPEDRIVE_GET_ALL_WEBHOOKS",
    /**
     * Returns data about a specific team.
     */
    GET_A_SINGLE_TEAM: "PIPEDRIVE_GET_A_SINGLE_TEAM",
    /**
     * Returns data about an authorized user within the company with bound company data: company id, company name, and domain. note that the `locale` property means 'date/number format' in the pipedrive account settings, not the chosen language.
     */
    GET_CURRENT_USER_DATA: "PIPEDRIVE_GET_CURRENT_USER_DATA",
    /**
     * Returns all stage-to-stage conversion and pipeline-to-close rates for the given time period.
     */
    GET_DEALS_CONVERSION_RATES_IN_PIPELINE: "PIPEDRIVE_GET_DEALS_CONVERSION_RATES_IN_PIPELINE",
    /**
     * Lists deals in a specific pipeline across all its stages.
     */
    GET_DEALS_IN_A_PIPELINE: "PIPEDRIVE_GET_DEALS_IN_A_PIPELINE",
    /**
     * Lists deals in a specific stage.
     */
    GET_DEALS_IN_A_STAGE: "PIPEDRIVE_GET_DEALS_IN_A_STAGE",
    /**
     * Returns statistics for deals movements for the given time period.
     */
    GET_DEALS_MOVEMENTS_IN_PIPELINE: "PIPEDRIVE_GET_DEALS_MOVEMENTS_IN_PIPELINE",
    /**
     * Returns a summary of all the deals.
     */
    GET_DEALS_SUMMARY: "PIPEDRIVE_GET_DEALS_SUMMARY",
    /**
     * Returns opened and won deals in time-based groups according to a specified dealfield, with examples of deals grouped by month over a 3-month period starting january 2012.
     */
    GET_DEALS_TIMELINE: "PIPEDRIVE_GET_DEALS_TIMELINE",
    /**
     * Returns data about deals that have a product attached to it.
     */
    GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO: "PIPEDRIVE_GET_DEALS_WHERE_A_PRODUCT_IS_ATTACHED_TO",
    /**
     * Returns the details of a specific activity.
     */
    GET_DETAILS_OF_AN_ACTIVITY: "PIPEDRIVE_GET_DETAILS_OF_AN_ACTIVITY",
    /**
     * Provides detailed information about an organization, including additional fields not shown when listing all organizations, and maps custom fields as long hashes to the 'key' value in organizationfields.
     */
    GET_DETAILS_OF_AN_ORGANIZATION: "PIPEDRIVE_GET_DETAILS_OF_AN_ORGANIZATION",
    /**
     * Returns the details of a specific project board.
     */
    GET_DETAILS_OF_A_BOARD: "PIPEDRIVE_GET_DETAILS_OF_A_BOARD",
    /**
     * Returns details of a specific call log.
     */
    GET_DETAILS_OF_A_CALL_LOG: "PIPEDRIVE_GET_DETAILS_OF_A_CALL_LOG",
    /**
     * Fetches specific deal details, including exclusive fields like deal age and pipeline stage duration. custom fields show up as hashes, which can be matched using the 'key' from dealfields. see the deal details tutorial for more.
     */
    GET_DETAILS_OF_A_DEAL: "PIPEDRIVE_GET_DETAILS_OF_A_DEAL",
    /**
     * The text describes an api endpoint that returns detailed person information, including extra fields and custom fields as hashes. it also provides `data.marketing status` if the campaigns product is used.
     */
    GET_DETAILS_OF_A_PERSON: "PIPEDRIVE_GET_DETAILS_OF_A_PERSON",
    /**
     * Returns the details of a specific project phase.
     */
    GET_DETAILS_OF_A_PHASE: "PIPEDRIVE_GET_DETAILS_OF_A_PHASE",
    /**
     * Returns the details of a specific project. also note that custom fields appear as long hashes in the resulting data. these hashes can be mapped against the `key` value of project fields.
     */
    GET_DETAILS_OF_A_PROJECT: "PIPEDRIVE_GET_DETAILS_OF_A_PROJECT",
    /**
     * Returns details of an installment or a recurring subscription.
     */
    GET_DETAILS_OF_A_SUBSCRIPTION: "PIPEDRIVE_GET_DETAILS_OF_A_SUBSCRIPTION",
    /**
     * Returns the details of a specific task.
     */
    GET_DETAILS_OF_A_TASK: "PIPEDRIVE_GET_DETAILS_OF_A_TASK",
    /**
     * Returns the details of a specific project template.
     */
    GET_DETAILS_OF_A_TEMPLATE: "PIPEDRIVE_GET_DETAILS_OF_A_TEMPLATE",
    /**
     * Returns mail threads in a specified folder ordered by the most recent message within.
     */
    GET_MAIL_THREADS: "PIPEDRIVE_GET_MAIL_THREADS",
    /**
     * Returns the details of a comment.
     */
    GET_ONE_COMMENT: "PIPEDRIVE_GET_ONE_COMMENT",
    /**
     * Returns data about a specific deal field.
     */
    GET_ONE_DEAL_FIELD: "PIPEDRIVE_GET_ONE_DEAL_FIELD",
    /**
     * Returns data about a specific file.
     */
    GET_ONE_FILE: "PIPEDRIVE_GET_ONE_FILE",
    /**
     * Returns data about a specific filter. note that this also returns the condition lines of the filter.
     */
    GET_ONE_FILTER: "PIPEDRIVE_GET_ONE_FILTER",
    /**
     * Api returns specific lead details with custom field values in the deals format. unset custom fields are omitted. leads share custom fields with deals, not having a unique set.
     */
    GET_ONE_LEAD: "PIPEDRIVE_GET_ONE_LEAD",
    /**
     * Returns data about a specific mail message.
     */
    GET_ONE_MAIL_MESSAGE: "PIPEDRIVE_GET_ONE_MAIL_MESSAGE",
    /**
     * Returns a specific mail thread.
     */
    GET_ONE_MAIL_THREAD: "PIPEDRIVE_GET_ONE_MAIL_THREAD",
    /**
     * Returns details about a specific note.
     */
    GET_ONE_NOTE: "PIPEDRIVE_GET_ONE_NOTE",
    /**
     * Returns data about a specific organization field.
     */
    GET_ONE_ORGANIZATION_FIELD: "PIPEDRIVE_GET_ONE_ORGANIZATION_FIELD",
    /**
     * Finds and returns an organization relationship from its id.
     */
    GET_ONE_ORGANIZATION_RELATIONSHIP: "PIPEDRIVE_GET_ONE_ORGANIZATION_RELATIONSHIP",
    /**
     * Returns data about a specific permission set.
     */
    GET_ONE_PERMISSION_SET: "PIPEDRIVE_GET_ONE_PERMISSION_SET",
    /**
     * Returns data about a specific person field.
     */
    GET_ONE_PERSON_FIELD: "PIPEDRIVE_GET_ONE_PERSON_FIELD",
    /**
     * Returns data about a specific pipeline. also returns the summary of the deals in this pipeline across its stages.
     */
    GET_ONE_PIPELINE: "PIPEDRIVE_GET_ONE_PIPELINE",
    /**
     * Returns data about a specific product.
     */
    GET_ONE_PRODUCT: "PIPEDRIVE_GET_ONE_PRODUCT",
    /**
     * Returns data about a specific product field.
     */
    GET_ONE_PRODUCT_FIELD: "PIPEDRIVE_GET_ONE_PRODUCT_FIELD",
    /**
     * Returns the details of a specific role.
     */
    GET_ONE_ROLE: "PIPEDRIVE_GET_ONE_ROLE",
    /**
     * Returns data about a specific stage.
     */
    GET_ONE_STAGE: "PIPEDRIVE_GET_ONE_STAGE",
    /**
     * Returns data about a specific user within the company.
     */
    GET_ONE_USER: "PIPEDRIVE_GET_ONE_USER",
    /**
     * Returns all active project phases under a specific board.
     */
    GET_PROJECT_PHASES: "PIPEDRIVE_GET_PROJECT_PHASES",
    /**
     * Returns data about all recent changes occurred after the given timestamp.
     */
    GET_RECENTS: "PIPEDRIVE_GET_RECENTS",
    /**
     * Gets the progress of a goal for the specified period.
     */
    GET_RESULT_OF_A_GOAL: "PIPEDRIVE_GET_RESULT_OF_A_GOAL",
    /**
     * Links an existing remote file (`googledrive`) to the item you supply. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/adding-a-remote-file" target=" blank" rel="noopener noreferrer">adding a remote file</a>.
     */
    LINK_A_REMOTE_FILE_TO_AN_ITEM: "PIPEDRIVE_LINK_A_REMOTE_FILE_TO_AN_ITEM",
    /**
     * A video calling provider must call this endpoint after a user has installed the video calling app so that the new user's information is sent.
     */
    LINK_USER_VIDEO_INTEGRATION: "PIPEDRIVE_LINK_USER_VIDEO_INTEGRATION",
    /**
     * Lists activities associated with an organization.
     */
    LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION: "PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_AN_ORGANIZATION",
    /**
     * Lists activities associated with a deal.
     */
    LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL: "PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_DEAL",
    /**
     * Lists activities associated with a person.
     */
    LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON: "PIPEDRIVE_LIST_ACTIVITIES_ASSOCIATED_WITH_A_PERSON",
    /**
     * The endpoint lists every person linked to a deal, including primary contacts and participants, and provides a `data.marketing status` field for users of the campaigns product.
     */
    LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL: "PIPEDRIVE_LIST_ALL_PERSONS_ASSOCIATED_WITH_A_DEAL",
    /**
     * Lists deals associated with an organization.
     */
    LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION: "PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_AN_ORGANIZATION",
    /**
     * Lists deals associated with a person.
     */
    LIST_DEALS_ASSOCIATED_WITH_A_PERSON: "PIPEDRIVE_LIST_DEALS_ASSOCIATED_WITH_A_PERSON",
    /**
     * Lists files associated with an organization.
     */
    LIST_FILES_ATTACHED_TO_AN_ORGANIZATION: "PIPEDRIVE_LIST_FILES_ATTACHED_TO_AN_ORGANIZATION",
    /**
     * Lists files associated with a deal.
     */
    LIST_FILES_ATTACHED_TO_A_DEAL: "PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_DEAL",
    /**
     * Lists files associated with a person.
     */
    LIST_FILES_ATTACHED_TO_A_PERSON: "PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PERSON",
    /**
     * Lists files associated with a product.
     */
    LIST_FILES_ATTACHED_TO_A_PRODUCT: "PIPEDRIVE_LIST_FILES_ATTACHED_TO_A_PRODUCT",
    /**
     * Lists the followers of an organization.
     */
    LIST_FOLLOWERS_OF_AN_ORGANIZATION: "PIPEDRIVE_LIST_FOLLOWERS_OF_AN_ORGANIZATION",
    /**
     * Lists the followers of a deal.
     */
    LIST_FOLLOWERS_OF_A_DEAL: "PIPEDRIVE_LIST_FOLLOWERS_OF_A_DEAL",
    /**
     * Lists the followers of a person.
     */
    LIST_FOLLOWERS_OF_A_PERSON: "PIPEDRIVE_LIST_FOLLOWERS_OF_A_PERSON",
    /**
     * Lists the followers of a product.
     */
    LIST_FOLLOWERS_OF_A_PRODUCT: "PIPEDRIVE_LIST_FOLLOWERS_OF_A_PRODUCT",
    /**
     * Lists the followers of a specific user.
     */
    LIST_FOLLOWERS_OF_A_USER: "PIPEDRIVE_LIST_FOLLOWERS_OF_A_USER",
    /**
     * Lists mail messages associated with an organization.
     */
    LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION: "PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_AN_ORGANIZATION",
    /**
     * Lists mail messages associated with a deal.
     */
    LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL: "PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_DEAL",
    /**
     * Lists mail messages associated with a person.
     */
    LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON: "PIPEDRIVE_LIST_MAIL_MESSAGES_ASSOCIATED_WITH_A_PERSON",
    /**
     * Lists the participants associated with a deal.<br>if a company uses the [campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the `data.marketing status` field.
     */
    LIST_PARTICIPANTS_OF_A_DEAL: "PIPEDRIVE_LIST_PARTICIPANTS_OF_A_DEAL",
    /**
     * Returns the list of assignments for a permission set.
     */
    LIST_PERMISSION_SET_ASSIGNMENTS: "PIPEDRIVE_LIST_PERMISSION_SET_ASSIGNMENTS",
    /**
     * Lists the users permitted to access a deal.
     */
    LIST_PERMITTED_USERS: "PIPEDRIVE_LIST_PERMITTED_USERS",
    /**
     * Lists persons associated with an organization.<br>if a company uses the [campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint will also return the `data.marketing status` field.
     */
    LIST_PERSONS_OF_AN_ORGANIZATION: "PIPEDRIVE_LIST_PERSONS_OF_AN_ORGANIZATION",
    /**
     * List users permitted to access a person.
     */
    LIST_PERSON_ACCESS_USERS: "PIPEDRIVE_LIST_PERSON_ACCESS_USERS",
    /**
     * Returns a list of visible or hidden pipeline ids by role. see the "visibility groups article" for details on pipeline visibility.
     */
    LIST_PIPELINE_VISIBILITY_FOR_A_ROLE: "PIPEDRIVE_LIST_PIPELINE_VISIBILITY_FOR_A_ROLE",
    /**
     * Lists products associated with a person.
     */
    LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON: "PIPEDRIVE_LIST_PRODUCTS_ASSOCIATED_WITH_A_PERSON",
    /**
     * Lists products attached to a deal.
     */
    LIST_PRODUCTS_ATTACHED_TO_A_DEAL: "PIPEDRIVE_LIST_PRODUCTS_ATTACHED_TO_A_DEAL",
    /**
     * Lists users permitted to access a product.
     */
    LIST_PRODUCT_PERMITTED_USERS: "PIPEDRIVE_LIST_PRODUCT_PERMITTED_USERS",
    /**
     * Returns all users assigned to a role.
     */
    LIST_ROLE_ASSIGNMENTS: "PIPEDRIVE_LIST_ROLE_ASSIGNMENTS",
    /**
     * Returns the visibility settings of a specific role.
     */
    LIST_ROLE_SETTINGS: "PIPEDRIVE_LIST_ROLE_SETTINGS",
    /**
     * Lists the settings of an authorized user. example response contains a shortened list of settings.
     */
    LIST_SETTINGS_OF_AN_AUTHORIZED_USER: "PIPEDRIVE_LIST_SETTINGS_OF_AN_AUTHORIZED_USER",
    /**
     * Lists updates about an organization.
     */
    LIST_UPDATES_ABOUT_AN_ORGANIZATION: "PIPEDRIVE_LIST_UPDATES_ABOUT_AN_ORGANIZATION",
    /**
     * Lists updates about a deal.
     */
    LIST_UPDATES_ABOUT_A_DEAL: "PIPEDRIVE_LIST_UPDATES_ABOUT_A_DEAL",
    /**
     * Lists updates about a person.<br>if a company uses the [campaigns product](https://pipedrive.readme.io/docs/campaigns-in-pipedrive-api), then this endpoint's response will also include updates for the `marketing status` field.
     */
    LIST_UPDATES_ABOUT_A_PERSON: "PIPEDRIVE_LIST_UPDATES_ABOUT_A_PERSON",
    /**
     * This endpoint provides cursor-paginated updates on deal participants. for pagination details, see the pipedrive documentation.
     */
    LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL: "PIPEDRIVE_LIST_UPDATES_ABOUT_PARTICIPANTS_OF_A_DEAL",
    /**
     * Lists aggregated permissions over all assigned permission sets for a user.
     */
    LIST_USER_PERMISSIONS: "PIPEDRIVE_LIST_USER_PERMISSIONS",
    /**
     * Lists the settings of user's assigned role.
     */
    LIST_USER_ROLE_SETTINGS: "PIPEDRIVE_LIST_USER_ROLE_SETTINGS",
    /**
     * Merges a deal with another deal. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/merging-two-deals" target=" blank" rel="noopener noreferrer">merging two deals</a>.
     */
    MERGE_TWO_DEALS: "PIPEDRIVE_MERGE_TWO_DEALS",
    /**
     * Merges an organization with another organization. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/merging-two-organizations" target=" blank" rel="noopener noreferrer">merging two organizations</a>.
     */
    MERGE_TWO_ORGANIZATIONS: "PIPEDRIVE_MERGE_TWO_ORGANIZATIONS",
    /**
     * Merges a person with another person. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/merging-two-persons" target=" blank" rel="noopener noreferrer">merging two persons</a>.
     */
    MERGE_TWO_PERSONS: "PIPEDRIVE_MERGE_TWO_PERSONS",
    /**
     * List users permitted to access an organization.
     */
    ORGANIZATION_ACCESSIBLE_USER_LIST: "PIPEDRIVE_ORGANIZATION_ACCESSIBLE_USER_LIST",
    /**
     * Performs a search from your choice of item types and fields.
     */
    PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES: "PIPEDRIVE_PERFORM_A_SEARCH_FROM_MULTIPLE_ITEM_TYPES",
    /**
     * Lists role assignments for a user.
     */
    PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS: "PIPEDRIVE_PIPEDRIVE_LIST_USER_ROLE_ASSIGNMENTS",
    /**
     * Adds a message to a conversation. to use the endpoint, you need to have **messengers integration** oauth scope enabled and the messaging manifest ready for the [messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     */
    RECEIVES_AN_INCOMING_MESSAGE: "PIPEDRIVE_RECEIVES_AN_INCOMING_MESSAGE",
    /**
     * Access tokens expire after the time specified in `expires in`. to continue accessing the api, use the `refresh token` to obtain a new access token.
     */
    REFRESHING_THE_TOKENS: "PIPEDRIVE_REFRESHING_THE_TOKENS",
    /**
     * Authorize a user by redirecting them to the pipedrive oauth authorization page and request their permissions to act on their behalf. this step is necessary to implement only when you allow app installation outside of the marketplace.
     */
    REQUESTING_AUTHORIZATION: "PIPEDRIVE_REQUESTING_AUTHORIZATION",
    /**
     * Returns activities linked to a specific project.
     */
    RETURNS_PROJECT_ACTIVITIES: "PIPEDRIVE_RETURNS_PROJECT_ACTIVITIES",
    /**
     * Returns all active groups under a specific project.
     */
    RETURNS_PROJECT_GROUPS: "PIPEDRIVE_RETURNS_PROJECT_GROUPS",
    /**
     * Returns information about items in a project plan. items consists of tasks and activities and are linked to specific project phase and group.
     */
    RETURNS_PROJECT_PLAN: "PIPEDRIVE_RETURNS_PROJECT_PLAN",
    /**
     * Returns tasks linked to a specific project.
     */
    RETURNS_PROJECT_TASKS: "PIPEDRIVE_RETURNS_PROJECT_TASKS",
    /**
     * This api endpoint searches deals by title, notes, and custom fields, filters results by person or organization id, and is a specific use case of /v1/itemsearch with limited oauth scope.
     */
    SEARCH_DEALS: "PIPEDRIVE_SEARCH_DEALS",
    /**
     * Performs a search from the values of a specific field. results can either be the distinct values of the field (useful for searching autocomplete field values), or the ids of actual items (deals, leads, persons, organizations or products).
     */
    SEARCH_ITEM_BY_FIELD: "PIPEDRIVE_SEARCH_ITEM_BY_FIELD",
    /**
     * Endpoint searches leads by title, notes, custom fields, with options to filter by person and organization ids, and is a more specific use of the /v1/itemsearch with limited oauth scope.
     */
    SEARCH_LEADS: "PIPEDRIVE_SEARCH_LEADS",
    /**
     * Searches all organizations by name, address, notes and/or custom fields. this endpoint is a wrapper of <a href="https://developers.pipedrive.com/docs/api/v1/itemsearch#searchitem">/v1/itemsearch</a> with a narrower oauth scope.
     */
    SEARCH_ORGANIZATIONS: "PIPEDRIVE_SEARCH_ORGANIZATIONS",
    /**
     * This endpoint searches for individuals by various identifiers and is a specific use case of /v1/itemsearch with limited oauth scope, allowing results filtering by organization id.
     */
    SEARCH_PERSONS: "PIPEDRIVE_SEARCH_PERSONS",
    /**
     * Searches all products by name, code and/or custom fields. this endpoint is a wrapper of <a href="https://developers.pipedrive.com/docs/api/v1/itemsearch#searchitem">/v1/itemsearch</a> with a narrower oauth scope.
     */
    SEARCH_PRODUCTS: "PIPEDRIVE_SEARCH_PRODUCTS",
    /**
     * A video calling provider must call this endpoint to remove the link between a user and the installed video calling app.
     */
    UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION: "PIPEDRIVE_UNLINK_USER_FROM_VIDEO_CALL_INTEGRATION",
    /**
     * Updates an activity phase or group in a project.
     */
    UPDATE_ACTIVITY_IN_PROJECT_PLAN: "PIPEDRIVE_UPDATE_ACTIVITY_IN_PROJECT_PLAN",
    /**
     * Updates an activity. includes `more activities scheduled in context` property in response's `additional data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).
     */
    UPDATE_AN_ACTIVITY: "PIPEDRIVE_UPDATE_AN_ACTIVITY",
    /**
     * Updates an activity type.
     */
    UPDATE_AN_ACTIVITY_TYPE: "PIPEDRIVE_UPDATE_AN_ACTIVITY_TYPE",
    /**
     * Updates an installment subscription.
     */
    UPDATE_AN_INSTALLMENT_SUBSCRIPTION: "PIPEDRIVE_UPDATE_AN_INSTALLMENT_SUBSCRIPTION",
    /**
     * Updates the properties of an organization.
     */
    UPDATE_AN_ORGANIZATION: "PIPEDRIVE_UPDATE_AN_ORGANIZATION",
    /**
     * Updates an organization field. for more information, see the tutorial for <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target=" blank" rel="noopener noreferrer">updating custom fields' values</a>.
     */
    UPDATE_AN_ORGANIZATION_FIELD: "PIPEDRIVE_UPDATE_AN_ORGANIZATION_FIELD",
    /**
     * Updates and returns an organization relationship.
     */
    UPDATE_AN_ORGANIZATION_RELATIONSHIP: "PIPEDRIVE_UPDATE_AN_ORGANIZATION_RELATIONSHIP",
    /**
     * Updates a comment related to a note.
     */
    UPDATE_A_COMMENT_RELATED_TO_A_NOTE: "PIPEDRIVE_UPDATE_A_COMMENT_RELATED_TO_A_NOTE",
    /**
     * Updates the properties of a deal. for more information, see the tutorial for <a href="https://pipedrive.readme.io/docs/updating-a-deal" target=" blank" rel="noopener noreferrer">updating a deal</a>.
     */
    UPDATE_A_DEAL: "PIPEDRIVE_UPDATE_A_DEAL",
    /**
     * Updates a deal field. for more information, see the tutorial for <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target=" blank" rel="noopener noreferrer">updating custom fields' values</a>.
     */
    UPDATE_A_DEAL_FIELD: "PIPEDRIVE_UPDATE_A_DEAL_FIELD",
    /**
     * Updating lead properties modifies only specified fields; use `null` to unset. custom field data matches `deals`. unset fields are omitted. leads share deals' custom fields. for examples, refer to the tutorial.
     */
    UPDATE_A_LEAD: "PIPEDRIVE_UPDATE_A_LEAD",
    /**
     * Updates one or more properties of a lead label. only properties included in the request will be updated.
     */
    UPDATE_A_LEAD_LABEL: "PIPEDRIVE_UPDATE_A_LEAD_LABEL",
    /**
     * Updates a note.
     */
    UPDATE_A_NOTE: "PIPEDRIVE_UPDATE_A_NOTE",
    /**
     * Modifies a person’s details in pipedrive. see the linked tutorial for guidance. if utilizing campaigns, the endpoint also handles `data.marketing status`.
     */
    UPDATE_A_PERSON: "PIPEDRIVE_UPDATE_A_PERSON",
    /**
     * Updates a person field. for more information, see the tutorial for <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target=" blank" rel="noopener noreferrer">updating custom fields' values</a>.
     */
    UPDATE_A_PERSON_FIELD: "PIPEDRIVE_UPDATE_A_PERSON_FIELD",
    /**
     * Updates the properties of a pipeline.
     */
    UPDATE_A_PIPELINE: "PIPEDRIVE_UPDATE_A_PIPELINE",
    /**
     * Updates product data.
     */
    UPDATE_A_PRODUCT: "PIPEDRIVE_UPDATE_A_PRODUCT",
    /**
     * Updates a product field. for more information, see the tutorial for <a href=" https://pipedrive.readme.io/docs/updating-custom-field-value " target=" blank" rel="noopener noreferrer">updating custom fields' values</a>.
     */
    UPDATE_A_PRODUCT_FIELD: "PIPEDRIVE_UPDATE_A_PRODUCT_FIELD",
    /**
     * Updates a project.
     */
    UPDATE_A_PROJECT: "PIPEDRIVE_UPDATE_A_PROJECT",
    /**
     * Updates a recurring subscription.
     */
    UPDATE_A_RECURRING_SUBSCRIPTION: "PIPEDRIVE_UPDATE_A_RECURRING_SUBSCRIPTION",
    /**
     * Updates a task.
     */
    UPDATE_A_TASK: "PIPEDRIVE_UPDATE_A_TASK",
    /**
     * Updates an existing team and returns the updated object.
     */
    UPDATE_A_TEAM: "PIPEDRIVE_UPDATE_A_TEAM",
    /**
     * Updates an existing goal.
     */
    UPDATE_EXISTING_GOAL: "PIPEDRIVE_UPDATE_EXISTING_GOAL",
    /**
     * Updates the properties of a file.
     */
    UPDATE_FILE_DETAILS: "PIPEDRIVE_UPDATE_FILE_DETAILS",
    /**
     * Updates an existing filter.
     */
    UPDATE_FILTER: "PIPEDRIVE_UPDATE_FILTER",
    /**
     * Updates the properties of a mail thread.
     */
    UPDATE_MAIL_THREAD_DETAILS: "PIPEDRIVE_UPDATE_MAIL_THREAD_DETAILS",
    /**
     * Updates pipeline visibility settings for different roles. for details, see the pipedrive visibility groups article.
     */
    UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE: "PIPEDRIVE_UPDATE_PIPELINE_VISIBILITY_FOR_A_ROLE",
    /**
     * Updates the parent role and/or the name of a specific role.
     */
    UPDATE_ROLE_DETAILS: "PIPEDRIVE_UPDATE_ROLE_DETAILS",
    /**
     * Updates the properties of a stage.
     */
    UPDATE_STAGE_DETAILS: "PIPEDRIVE_UPDATE_STAGE_DETAILS",
    /**
     * Updates a task phase or group in a project.
     */
    UPDATE_TASK_IN_PROJECT_PLAN: "PIPEDRIVE_UPDATE_TASK_IN_PROJECT_PLAN",
    /**
     * Updates the details of the product that has been attached to a deal.
     */
    UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL: "PIPEDRIVE_UPDATE_THE_PRODUCT_ATTACHED_TO_A_DEAL",
    /**
     * Updates the properties of a user. currently, only `active flag` can be updated.
     */
    UPDATE_USER_DETAILS: "PIPEDRIVE_UPDATE_USER_DETAILS",
  },
  triggerTypes: {
    /**
     * Triggered when a new deal is created in Pipedrive
     */
    NEW_DEAL_TRIGGER: "PIPEDRIVE_NEW_DEAL_TRIGGER",
    /**
     * Triggered when a new note is created in Pipedrive
     */
    NEW_NOTE_TRIGGER: "PIPEDRIVE_NEW_NOTE_TRIGGER",
    /**
     * Triggered when a new organization is created in Pipedrive
     */
    NEW_ORGANIZATION_TRIGGER: "PIPEDRIVE_NEW_ORGANIZATION_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "PIPEDRIVE".
 */
export type PIPEDRIVE_TRIGGER_PAYLOADS = {
  NEW_DEAL_TRIGGER: PIPEDRIVE_NEW_DEAL_TRIGGER_PAYLOAD
  NEW_NOTE_TRIGGER: PIPEDRIVE_NEW_NOTE_TRIGGER_PAYLOAD
  NEW_ORGANIZATION_TRIGGER: PIPEDRIVE_NEW_ORGANIZATION_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "PIPEDRIVE".
 */
export type PIPEDRIVE_TRIGGER_EVENTS = {
  NEW_DEAL_TRIGGER: TriggerEvent<PIPEDRIVE_NEW_DEAL_TRIGGER_PAYLOAD>
  NEW_NOTE_TRIGGER: TriggerEvent<PIPEDRIVE_NEW_NOTE_TRIGGER_PAYLOAD>
  NEW_ORGANIZATION_TRIGGER: TriggerEvent<PIPEDRIVE_NEW_ORGANIZATION_TRIGGER_PAYLOAD>
}
