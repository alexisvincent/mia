// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DIALPAD's DIALPAD_ACCESS_CONTROL_POLICIES_LISTING tool input.
 */
type DIALPAD_ACCESS_CONTROL_POLICIES_LISTING_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_ACCESS_CONTROL_POLICIES_LISTING tool output.
 */
type DIALPAD_ACCESS_CONTROL_POLICIES_LISTING_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_BLOCKED_PHONE_NUMBERS tool input.
 */
type DIALPAD_ADD_BLOCKED_PHONE_NUMBERS_INPUT = {
  /**
   * Numbers
   * @description A list of E164 formatted numbers.
   */
  numbers?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_ADD_BLOCKED_PHONE_NUMBERS tool output.
 */
type DIALPAD_ADD_BLOCKED_PHONE_NUMBERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID tool input.
 */
type DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID_INPUT = {
  /**
   * Id
   * @description The department"s id.
   */
  id?: number;
  /**
   * Operator Id
   * @description ID of the operator to add.
   */
  operator_id?: number;
  /**
   * Operator Type
   * @description Type of the operator to add. (`user` or `room`)
   * @enum {string}
   */
  operator_type?: "room" | "user";
  /**
   * Role
   * @description The role of the new operator. (`operator` or `admin`)
   * @default operator
   * @enum {string}
   */
  role: "admin" | "operator";
};

/**
 * Type of DIALPAD's DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID tool output.
 */
type DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_MEMBER_TO_CHANNEL tool input.
 */
type DIALPAD_ADD_MEMBER_TO_CHANNEL_INPUT = {
  /**
   * Id
   * @description The channel"s id.
   */
  id?: number;
  /**
   * User Id
   * @description The user id.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_MEMBER_TO_CHANNEL tool output.
 */
type DIALPAD_ADD_MEMBER_TO_CHANNEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_MEMBER_TO_COACHING_TEAM tool input.
 */
type DIALPAD_ADD_MEMBER_TO_COACHING_TEAM_INPUT = {
  /**
   * Id
   * @description Id of the coaching team
   */
  id?: number;
  /**
   * Member Id
   * @description The id of the user added to the coaching team.
   */
  member_id?: string;
  /**
   * Role
   * @description The role of the user added.
   * @enum {string}
   */
  role?: "coach" | "trainee";
};

/**
 * Type of DIALPAD's DIALPAD_ADD_MEMBER_TO_COACHING_TEAM tool output.
 */
type DIALPAD_ADD_MEMBER_TO_COACHING_TEAM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_OPERATOR_TO_CALL_CENTER tool input.
 */
type DIALPAD_ADD_OPERATOR_TO_CALL_CENTER_INPUT = {
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
  /**
   * Keep Paid Numbers
   * @description Whether or not to keep phone numbers when switching to a support license. Note: Phone numbers require additional number licenses under a support license.
   * @default true
   */
  keep_paid_numbers: boolean;
  /**
   * License Type
   * @description The type of license to assign to the new operator if a license is required. (`agents` or `lite_support_agents`). Defaults to `agents`
   * @default agents
   * @enum {string}
   */
  license_type: "agents" | "lite_support_agents";
  /**
   * Role
   * @description The role the user should assume.
   * @default operator
   * @enum {string}
   */
  role: "admin" | "operator" | "supervisor";
  /**
   * Skill Level
   * @description Skill level of the operator. Integer value in range 1 - 100. Default 100.
   * @default 100
   */
  skill_level: number;
  /**
   * User Id
   * @description The ID of the user.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_OPERATOR_TO_CALL_CENTER tool output.
 */
type DIALPAD_ADD_OPERATOR_TO_CALL_CENTER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_OPERATOR_TO_OFFICE tool input.
 */
type DIALPAD_ADD_OPERATOR_TO_OFFICE_INPUT = {
  /**
   * Id
   * @description The office"s ID.
   */
  id?: number;
  /**
   * Operator Id
   * @description ID of the operator to add.
   */
  operator_id?: number;
  /**
   * Operator Type
   * @description Type of the operator to add. (`user` or `room`)
   * @enum {string}
   */
  operator_type?: "room" | "user";
  /**
   * Role
   * @description The role of the new operator. (`operator` or `admin`)
   * @default operator
   * @enum {string}
   */
  role: "admin" | "operator";
};

/**
 * Type of DIALPAD's DIALPAD_ADD_OPERATOR_TO_OFFICE tool output.
 */
type DIALPAD_ADD_OPERATOR_TO_OFFICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ADD_PARTICIPANT_TO_CALL tool input.
 */
type DIALPAD_ADD_PARTICIPANT_TO_CALL_INPUT = {
  /**
   * Id
   * @description The call"s id.
   */
  id?: number;
  /**
   * Participant
   * @description New member of the call to add. Can be a number or a Target. In case of a target, it must have a primary number assigned.
   */
  participant?: {
      [key: string]: unknown;
  };
};

/**
 * Type of DIALPAD's DIALPAD_ADD_PARTICIPANT_TO_CALL tool output.
 */
type DIALPAD_ADD_PARTICIPANT_TO_CALL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_FAX_LINE_TO_TARGET tool input.
 */
type DIALPAD_ASSIGN_FAX_LINE_TO_TARGET_INPUT = {
  /**
   * Line
   * @description Line to assign.
   */
  line?: {
      [key: string]: unknown;
  };
  /**
   * Target  Target  Id
   * @description The ID of the target to assign the fax line to.
   */
  target__target__id?: number;
  /**
   * Target  Target  Type
   * @description Type of the target to assign the fax line to.
   * @enum {string}
   */
  target__target__type?: "department" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_FAX_LINE_TO_TARGET tool output.
 */
type DIALPAD_ASSIGN_FAX_LINE_TO_TARGET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER tool input.
 */
type DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER_INPUT = {
  /**
   * Area Code
   * @description An area code in which to find an available phone number for assignment.
   */
  area_code?: string;
  /**
   * Id
   * @description The API call router"s ID
   */
  id?: number;
  /**
   * Number
   * @description A phone number to assign. (e164-formatted)
   */
  number?: string;
  /**
   * Primary
   * @description A boolean indicating whether this should become the primary phone number.
   * @default true
   */
  primary: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER tool output.
 */
type DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE tool input.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE_INPUT = {
  /**
   * Area Code
   * @description An area code in which to find an available phone number for assignment.
   */
  area_code?: string;
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
  /**
   * Number
   * @description A phone number to assign. (e164-formatted)
   */
  number?: string;
  /**
   * Primary
   * @description A boolean indicating whether this should become the primary phone number.
   * @default true
   */
  primary: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE tool output.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM tool input.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM_INPUT = {
  /**
   * Area Code
   * @description An area code in which to find an available phone number for assignment.
   */
  area_code?: string;
  /**
   * Id
   * @description The room"s id.
   */
  id?: number;
  /**
   * Number
   * @description A phone number to assign. (e164-formatted)
   */
  number?: string;
  /**
   * Primary
   * @description A boolean indicating whether this should become the primary phone number.
   * @default true
   */
  primary: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM tool output.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET tool input.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET_INPUT = {
  /**
   * Area Code
   * @description An area code in which to find an available phone number for assignment.
   */
  area_code?: string;
  /**
   * Number
   * @description A phone number to assign. (e164-formatted)
   */
  number?: string;
  /**
   * Primary
   * @description A boolean indicating whether this should become the target"s primary phone number.
   * @default true
   */
  primary: boolean;
  /**
   * Target Id
   * @description The ID of the target to reassign this number to.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The type of the target.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET tool output.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER tool input.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER_INPUT = {
  /**
   * Area Code
   * @description An area code in which to find an available phone number for assignment.
   */
  area_code?: string;
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
  /**
   * Number
   * @description A phone number to assign. (e164-formatted)
   */
  number?: string;
  /**
   * Primary
   * @description A boolean indicating whether this should become the primary phone number.
   * @default true
   */
  primary: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER tool output.
 */
type DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID tool input.
 */
type DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID_INPUT = {
  /**
   * Id
   * @description The access control policy"s id.
   */
  id?: number;
  /**
   * Target Id
   * @description Required if the policy is associated with a target (Office or Contact Center). Not required for a company level policy.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Policy permissions applied at this target level. Defaults to company target type.
   * @default company
   * @enum {string}
   */
  target_type: "callcenter" | "company" | "office";
  /**
   * User Id
   * @description The user"s id to be assigned to the policy.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID tool output.
 */
type DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_ATTACH_LABELS_TO_CALL tool input.
 */
type DIALPAD_ATTACH_LABELS_TO_CALL_INPUT = {
  /**
   * Id
   * @description The call"s id
   */
  id?: number;
  /**
   * Labels
   * @description The list of labels to attach to the call
   */
  labels?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_ATTACH_LABELS_TO_CALL tool output.
 */
type DIALPAD_ATTACH_LABELS_TO_CALL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS tool input.
 */
type DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS_INPUT = {
  /**
   * Advanced  Settings  Auto  Call  Recording  Allow  Pause  Recording
   * @description Allow agents to stop/restart a recording during a call. Default is False.
   */
  advanced__settings__auto__call__recording__allow__pause__recording?: boolean;
  /**
   * Advanced  Settings  Auto  Call  Recording  Call  Recording  Inbound
   * @description Whether or not inbound calls to this call center get automatically recorded. Default is False.
   */
  advanced__settings__auto__call__recording__call__recording__inbound?: boolean;
  /**
   * Advanced  Settings  Auto  Call  Recording  Call  Recording  Outbound
   * @description Whether or not outbound calls from this call center get automatically recorded. Default is False.
   */
  advanced__settings__auto__call__recording__call__recording__outbound?: boolean;
  /**
   * Advanced  Settings  Max  Wrap  Up  Seconds
   * @description Include a post-call wrap-up time before agents can receive their next call. Default is 0.
   */
  advanced__settings__max__wrap__up__seconds?: number;
  /**
   * Alerts  Cc  Service  Level
   * @description Alert supervisors when the service level drops below how many percent. Default is 95%.
   */
  alerts__cc__service__level?: number;
  /**
   * Alerts  Cc  Service  Level  Seconds
   * @description Inbound calls should be answered within how many seconds. Default is 60.
   */
  alerts__cc__service__level__seconds?: number;
  /**
   * Friday Hours
   * @description The Friday hours of operation. Default value is ["08:00", "18:00"].
   */
  friday_hours?: string[];
  /**
   * Group Description
   * @description The description of the call center. Max 256 characters.
   */
  group_description?: string;
  /**
   * Hold  Queue  Allow  Queue  Callback
   * @description Whether or not to allow callers to request a callback. Default is False.
   */
  hold__queue__allow__queue__callback?: boolean;
  /**
   * Hold  Queue  Announce  Position
   * @description Whether or not to let callers know their place in the queue. This option is not available when a maximum queue wait time of less than 2 minutes is selected. Default is True.
   */
  hold__queue__announce__position?: boolean;
  /**
   * Hold  Queue  Announcement  Interval  Seconds
   * @description Hold announcement interval wait time. Default is 2 min.
   */
  hold__queue__announcement__interval__seconds?: number;
  /**
   * Hold  Queue  Max  Hold  Count
   * @description If all operators are busy on other calls, send callers to a hold queue. This is to specify your queue size. Choose from 1-1000. Default is 50.
   */
  hold__queue__max__hold__count?: number;
  /**
   * Hold  Queue  Max  Hold  Seconds
   * @description Maximum queue wait time in seconds. Choose from 30s to 18000s (3 hours). Default is 900s (15 min).
   */
  hold__queue__max__hold__seconds?: number;
  /**
   * Hold  Queue  Queue  Callback  Dtmf
   * @description Allow callers to request a callback when the queue has more than queue_callback_threshold number of calls by pressing one of the followings: [0,1,2,3,4,5,6,7,8,9,*,#]. Default is 9.
   */
  hold__queue__queue__callback__dtmf?: string;
  /**
   * Hold  Queue  Queue  Callback  Threshold
   * @description Allow callers to request a callback when the queue has more than this number of calls. Default is 5.
   */
  hold__queue__queue__callback__threshold?: number;
  /**
   * Hold  Queue  Queue  Escape  Dtmf
   * @description Allow callers to exit the hold queue to voicemail by pressing one of the followings: [0,1,2,3,4,5,6,7,8,9,*,#]. Default is *.
   */
  hold__queue__queue__escape__dtmf?: string;
  /**
   * Hold  Queue  Stay  In  Queue  After  Closing
   * @description Whether or not to allow existing calls to stay in queue after the call center has closed. Default is False.
   */
  hold__queue__stay__in__queue__after__closing?: boolean;
  /**
   * Hold  Queue  Unattended  Queue
   * @description Whether or not to allow callers to be placed in your hold queue when no agents are available. Default is False.
   */
  hold__queue__unattended__queue?: boolean;
  /**
   * Hours On
   * @description The time frame when the call center wants to receive calls. Default value is false, which means the call center will always take calls (24/7).
   */
  hours_on?: boolean;
  /**
   * Monday Hours
   * @description The Monday hours of operation. To specify when hours_on is set to True. e.g. ["08:00", "12:00", "14:00", "18:00"] => open from 8AM to Noon, and from 2PM to 6PM. Default value is ["08:00", "18:00"].
   */
  monday_hours?: string[];
  /**
   * Name
   * @description [single-line only] The name of the call center. Max 100 characters.
   */
  name?: string;
  /**
   * Office Id
   * @description The id of the office to which the call center belongs..
   */
  office_id?: number;
  /**
   * Ring Seconds
   * @description The number of seconds to allow the group line to ring before going to voicemail. Choose from 10 seconds to 45 seconds. Default is 30 seconds.
   */
  ring_seconds?: number;
  /**
   * Routing  Options  Closed  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__closed__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Closed  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__closed__action__target__id?: number;
  /**
   * Routing  Options  Closed  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__closed__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Closed  Dtmf
   * @description DTMF menu options.
   */
  routing__options__closed__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Closed  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__closed__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Closed  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__closed__try__dial__operators?: boolean;
  /**
   * Routing  Options  Open  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__open__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Open  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__open__action__target__id?: number;
  /**
   * Routing  Options  Open  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__open__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Open  Dtmf
   * @description DTMF menu options.
   */
  routing__options__open__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Open  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__open__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Open  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__open__try__dial__operators?: boolean;
  /**
   * Saturday Hours
   * @description The Saturday hours of operation. Default is empty array.
   */
  saturday_hours?: string[];
  /**
   * Sunday Hours
   * @description The Sunday hours of operation. Default is empty array.
   */
  sunday_hours?: string[];
  /**
   * Thursday Hours
   * @description The Thursday hours of operation. Default value is ["08:00", "18:00"].
   */
  thursday_hours?: string[];
  /**
   * Tuesday Hours
   * @description The Tuesday hours of operation. Default value is ["08:00", "18:00"].
   */
  tuesday_hours?: string[];
  /**
   * Voice  Intelligence  Allow  Pause
   * @description Allow individual users to start and stop Vi during calls. Default is True.
   */
  voice__intelligence__allow__pause?: boolean;
  /**
   * Voice  Intelligence  Auto  Start
   * @description Auto start Vi for this call center. Default is True.
   */
  voice__intelligence__auto__start?: boolean;
  /**
   * Wednesday Hours
   * @description The Wednesday hours of operation. Default value is ["08:00", "18:00"].
   */
  wednesday_hours?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS tool output.
 */
type DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_ACCESS_CONTROL_POLICY tool input.
 */
type DIALPAD_CREATE_ACCESS_CONTROL_POLICY_INPUT = {
  /**
   * Description
   * @description [single-line only] Optional description for the policy. Max 200 characters.
   */
  description?: string;
  /**
   * Name
   * @description [single-line only] A human-readable display name for the policy. Max 50 characters.
   */
  name?: string;
  /**
   * Owner Id
   * @description Owner for this policy i.e company admin.
   */
  owner_id?: number;
  /**
   * Permission Sets
   * @description List of permission associated with this policy.
   */
  permission_sets?: string[];
  /**
   * Target Type
   * @description Policy permissions applied at this target level. Defaults to company target type.
   * @default company
   * @enum {string}
   */
  target_type: "callcenter" | "company" | "office";
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_ACCESS_CONTROL_POLICY tool output.
 */
type DIALPAD_CREATE_ACCESS_CONTROL_POLICY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION tool input.
 */
type DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION_INPUT = {
  /**
   * Agent Type
   * @description The agent type this event subscription subscribes to.
   * @enum {string}
   */
  agent_type?: "callcenter";
  /**
   * Enabled
   * @description Whether or not the this agent status event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION tool output.
 */
type DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CALLBACK tool input.
 */
type DIALPAD_CREATE_CALLBACK_INPUT = {
  /**
   * Call Center Id
   * @description The ID of a call center that will be used to fulfill the callback.
   */
  call_center_id?: number;
  /**
   * Phone Number
   * @description The e164-formatted number to call back
   */
  phone_number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CALLBACK tool output.
 */
type DIALPAD_CREATE_CALLBACK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK tool input.
 */
type DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK_INPUT = {
  /**
   * Call Id
   * @description The call"s id.
   */
  call_id?: number;
  /**
   * Privacy
   * @description The privacy state of the recording share link, "company" will be set as default.
   * @default company
   * @enum {string}
   */
  privacy: "company" | "public";
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK tool output.
 */
type DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION tool input.
 */
type DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION_INPUT = {
  /**
   * Default Target Id
   * @description The ID of the target that should be used as a fallback destination for calls if the call router is disabled or fails.
   */
  default_target_id?: number;
  /**
   * Default Target Type
   * @description The entity type of the default target.
   * @enum {string}
   */
  default_target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Enabled
   * @description If set to False, the call router will skip the routing url and instead forward calls straight to the default target.
   */
  enabled?: boolean;
  /**
   * Name
   * @description [single-line only] A human-readable display name for the router.
   */
  name?: string;
  /**
   * Office Id
   * @description The ID of the office to which this router belongs.
   */
  office_id?: number;
  /**
   * Routing Url
   * @description The URL that should be used to drive call routing decisions.
   */
  routing_url?: string;
  /**
   * Secret
   * @description [single-line only] The call router"s signature secret. This is a plain text string that you should generate with a minimum length of 32 characters.
   */
  secret?: string;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION tool output.
 */
type DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CHANNEL_ENDPOINT tool input.
 */
type DIALPAD_CREATE_CHANNEL_ENDPOINT_INPUT = {
  /**
   * Description
   * @description The description of the channel.
   */
  description?: string;
  /**
   * Name
   * @description [single-line only] The name of the channel.
   */
  name?: string;
  /**
   * Privacy Type
   * @description The privacy type of the channel.
   * @enum {string}
   */
  privacy_type?: "private" | "public";
  /**
   * User Id
   * @description The ID of the user who owns the channel. Just for company level API key.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CHANNEL_ENDPOINT tool output.
 */
type DIALPAD_CREATE_CHANNEL_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE tool input.
 */
type DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE_INPUT = {
  /**
   * Description
   * @description [single-line only] The description of the new IVR. Max 256 characters.
   */
  description?: string;
  /**
   * File
   * Format: byte
   * @description An MP3 audio file. The file needs to be Base64-encoded.
   */
  file?: string;
  /**
   * Ivr Type
   * @description Type of IVR.
   * @enum {string}
   */
  ivr_type?: "ASK_FIRST_OPERATOR_NOT_AVAILABLE" | "AUTO_RECORDING" | "CALLAI_AUTO_RECORDING" | "CG_AUTO_RECORDING" | "CLOSED" | "CLOSED_DEPARTMENT_INTRO" | "CLOSED_MENU" | "CLOSED_MENU_OPTION" | "CSAT_INTRO" | "CSAT_OUTRO" | "CSAT_PREAMBLE" | "CSAT_QUESTION" | "DEPARTMENT_INTRO" | "GREETING" | "HOLD_AGENT_READY" | "HOLD_APPREC" | "HOLD_CALLBACK_ACCEPT" | "HOLD_CALLBACK_ACCEPTED" | "HOLD_CALLBACK_CONFIRM" | "HOLD_CALLBACK_CONFIRM_NUMBER" | "HOLD_CALLBACK_DIFFERENT_NUMBER" | "HOLD_CALLBACK_DIRECT" | "HOLD_CALLBACK_FULFILLED" | "HOLD_CALLBACK_INVALID_NUMBER" | "HOLD_CALLBACK_KEYPAD" | "HOLD_CALLBACK_REJECT" | "HOLD_CALLBACK_REJECTED" | "HOLD_CALLBACK_REQUEST" | "HOLD_CALLBACK_REQUESTED" | "HOLD_CALLBACK_SAME_NUMBER" | "HOLD_CALLBACK_TRY_AGAIN" | "HOLD_CALLBACK_UNDIALABLE" | "HOLD_ESCAPE_VM_EIGHT" | "HOLD_ESCAPE_VM_FIVE" | "HOLD_ESCAPE_VM_FOUR" | "HOLD_ESCAPE_VM_NINE" | "HOLD_ESCAPE_VM_ONE" | "HOLD_ESCAPE_VM_POUND" | "HOLD_ESCAPE_VM_SEVEN" | "HOLD_ESCAPE_VM_SIX" | "HOLD_ESCAPE_VM_STAR" | "HOLD_ESCAPE_VM_TEN" | "HOLD_ESCAPE_VM_THREE" | "HOLD_ESCAPE_VM_TWO" | "HOLD_ESCAPE_VM_ZERO" | "HOLD_INTERRUPT" | "HOLD_INTRO" | "HOLD_MUSIC" | "HOLD_POSITION_EIGHT" | "HOLD_POSITION_FIVE" | "HOLD_POSITION_FOUR" | "HOLD_POSITION_MORE" | "HOLD_POSITION_NINE" | "HOLD_POSITION_ONE" | "HOLD_POSITION_SEVEN" | "HOLD_POSITION_SIX" | "HOLD_POSITION_TEN" | "HOLD_POSITION_THREE" | "HOLD_POSITION_TWO" | "HOLD_POSITION_ZERO" | "HOLD_WAIT" | "MENU" | "MENU_OPTION" | "NEXT_TARGET" | "VM_DROP_MESSAGE" | "VM_UNAVAILABLE" | "VM_UNAVAILABLE_CLOSED";
  /**
   * Name
   * @description [single-line only] The name of the new IVR. Max 100 characters.
   */
  name?: string;
  /**
   * Target Id
   * @description The ID of the target to which you want to assign this IVR.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The type of the target to which you want to assign this IVR.
   * @enum {string}
   */
  target_type?: "callcenter" | "coachingteam" | "department" | "office" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE tool output.
 */
type DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_NEW_CONTACT_ENTRY tool input.
 */
type DIALPAD_CREATE_NEW_CONTACT_ENTRY_INPUT = {
  /**
   * Company Name
   * @description [single-line only] The contact"s company name.
   */
  company_name?: string;
  /**
   * Emails
   * @description The contact"s emails. The first email in the list is the contact"s primary email.
   */
  emails?: string[];
  /**
   * Extension
   * @description The contact"s extension number.
   */
  extension?: string;
  /**
   * First Name
   * @description [single-line only] The contact"s first name.
   */
  first_name?: string;
  /**
   * Job Title
   * @description [single-line only] The contact"s job title.
   */
  job_title?: string;
  /**
   * Last Name
   * @description [single-line only] The contact"s last name.
   */
  last_name?: string;
  /**
   * Owner Id
   * @description The id of the user who will own this contact. If provided, a local contact will be created for this user. Otherwise, the contact will be created as a shared contact in your company.
   */
  owner_id?: string;
  /**
   * Phones
   * @description The contact"s phone numbers. The phone number must be in e164 format. The first number in the list is the contact"s primary phone.
   */
  phones?: string[];
  /**
   * Trunk Group
   * @description [Deprecated]
   */
  trunk_group?: string;
  /**
   * Urls
   * @description A list of websites associated with or belonging to this contact.
   */
  urls?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_NEW_CONTACT_ENTRY tool output.
 */
type DIALPAD_CREATE_NEW_CONTACT_ENTRY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_NEW_DEPARTMENT_RECORD tool input.
 */
type DIALPAD_CREATE_NEW_DEPARTMENT_RECORD_INPUT = {
  /**
   * Auto Call Recording
   * @description Whether or not automatically record all calls of this department. Default is False.
   */
  auto_call_recording?: boolean;
  /**
   * Friday Hours
   * @description The Friday hours of operation. Default value is ["08:00", "18:00"].
   */
  friday_hours?: string[];
  /**
   * Group Description
   * @description The description of the department. Max 256 characters.
   */
  group_description?: string;
  /**
   * Hold  Queue  Allow  Queuing
   * @description Whether or not send callers to a hold queue, if all operators are busy on other calls. Default is False.
   */
  hold__queue__allow__queuing?: boolean;
  /**
   * Hold  Queue  Max  Hold  Count
   * @description If all operators are busy on other calls, send callers to a hold queue. This is to specify your queue size. Choose from 1-50. Default is 50.
   */
  hold__queue__max__hold__count?: number;
  /**
   * Hold  Queue  Max  Hold  Seconds
   * @description Maximum queue wait time in seconds. Choose from 30s to 18000s (3 hours). Default is 900s (15 min).
   */
  hold__queue__max__hold__seconds?: number;
  /**
   * Hours On
   * @description The time frame when the department wants to receive calls. Default value is false, which means the call center will always take calls (24/7).
   */
  hours_on?: boolean;
  /**
   * Monday Hours
   * @description The Monday hours of operation. To specify when hours_on is set to True. e.g. ["08:00", "12:00", "14:00", "18:00"] => open from 8AM to Noon, and from 2PM to 6PM. Default value is ["08:00", "18:00"].
   */
  monday_hours?: string[];
  /**
   * Name
   * @description [single-line only] The name of the department. Max 100 characters.
   */
  name?: string;
  /**
   * Office Id
   * @description The id of the office to which the department belongs..
   */
  office_id?: number;
  /**
   * Ring Seconds
   * @description The number of seconds to allow the group line to ring before going to voicemail. Choose from 10 seconds to 45 seconds. Default is 30 seconds.
   */
  ring_seconds?: number;
  /**
   * Routing  Options  Closed  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__closed__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Closed  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__closed__action__target__id?: number;
  /**
   * Routing  Options  Closed  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__closed__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Closed  Dtmf
   * @description DTMF menu options.
   */
  routing__options__closed__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Closed  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__closed__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Closed  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__closed__try__dial__operators?: boolean;
  /**
   * Routing  Options  Open  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__open__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Open  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__open__action__target__id?: number;
  /**
   * Routing  Options  Open  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__open__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Open  Dtmf
   * @description DTMF menu options.
   */
  routing__options__open__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Open  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__open__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Open  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__open__try__dial__operators?: boolean;
  /**
   * Saturday Hours
   * @description The Saturday hours of operation. Default is empty array.
   */
  saturday_hours?: string[];
  /**
   * Sunday Hours
   * @description The Sunday hours of operation. Default is empty array.
   */
  sunday_hours?: string[];
  /**
   * Thursday Hours
   * @description The Thursday hours of operation. Default value is ["08:00", "18:00"].
   */
  thursday_hours?: string[];
  /**
   * Tuesday Hours
   * @description The Tuesday hours of operation. Default value is ["08:00", "18:00"].
   */
  tuesday_hours?: string[];
  /**
   * Voice  Intelligence  Allow  Pause
   * @description Allow individual users to start and stop Vi during calls. Default is True.
   */
  voice__intelligence__allow__pause?: boolean;
  /**
   * Voice  Intelligence  Auto  Start
   * @description Auto start Vi for this call center. Default is True.
   */
  voice__intelligence__auto__start?: boolean;
  /**
   * Wednesday Hours
   * @description The Wednesday hours of operation. Default value is ["08:00", "18:00"].
   */
  wednesday_hours?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_NEW_DEPARTMENT_RECORD tool output.
 */
type DIALPAD_CREATE_NEW_DEPARTMENT_RECORD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS tool input.
 */
type DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS_INPUT = {
  /**
   * Customer Ref
   * @description [single-line only] An identifier to be printed in the usage summary. Typically used for identifying the person who requested the PIN.
   */
  customer_ref?: string;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS tool output.
 */
type DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST tool input.
 */
type DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST_INPUT = {
  /**
   * Name
   * @description [single-line only] The name of the room.
   */
  name?: string;
  /**
   * Office Id
   * @description The office in which this room resides.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST tool output.
 */
type DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT tool input.
 */
type DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT_INPUT = {
  /**
   * At
   * @description Hour of the day when the report will execute considering the frequency and timezones between 0 and 23  e.g. 10 will be 10:00 am.
   */
  at?: number;
  /**
   * Coaching Group
   * @description Whether the the statistics should be for trainees of the coach group with the given target_id.
   * @default false
   */
  coaching_group: boolean;
  /**
   * Enabled
   * @description Whether or not this schedule reports event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
  /**
   * Frequency
   * @description How often the report will execute.
   * @enum {string}
   */
  frequency?: "daily" | "monthly" | "weekly";
  /**
   * Name
   * @description [single-line only] The name of the schedule reports.
   */
  name?: string;
  /**
   * On Day
   * @description The day of the week or month when the report will execute considering the frequency. daily=0, weekly=0-6, monthly=0-30.
   */
  on_day?: number;
  /**
   * Report Type
   * @description The type of report that will be generated.
   * @enum {string}
   */
  report_type?: "call_logs" | "daily_statistics" | "recordings" | "user_statistics" | "voicemails";
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Timezone
   * @description Timezone using a tz database name.
   */
  timezone?: string;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT tool output.
 */
type DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_SECONDARY_OFFICE tool input.
 */
type DIALPAD_CREATE_SECONDARY_OFFICE_INPUT = {
  /**
   * Annual Commit Monthly Billing
   * @description A flag indicating if the primary office"s plan is categorized as annual commit monthly billing.
   */
  annual_commit_monthly_billing?: boolean;
  /**
   * Auto Call Recording
   * @description Whether or not automatically record all calls of this office. Default is False.
   * @default false
   */
  auto_call_recording: boolean;
  /**
   * Billing  Address  Address  Line  1
   * @description [single-line only] The first line of the billing address.
   */
  billing__address__address__line__1?: string;
  /**
   * Billing  Address  Address  Line  2
   * @description [single-line only] The second line of the billing address.
   */
  billing__address__address__line__2?: string;
  /**
   * Billing  Address  City
   * @description [single-line only] The billing address city.
   */
  billing__address__city?: string;
  /**
   * Billing  Address  Country
   * @description The billing address country.
   */
  billing__address__country?: string;
  /**
   * Billing  Address  Postal  Code
   * @description [single-line only] The billing address postal code.
   */
  billing__address__postal__code?: string;
  /**
   * Billing  Address  Region
   * @description [single-line only] The billing address region.
   */
  billing__address__region?: string;
  /**
   * Billing  Contact  Email
   * @description The contact email.
   */
  billing__contact__email?: string;
  /**
   * Billing  Contact  Name
   * @description [single-line only] The contact name.
   */
  billing__contact__name?: string;
  /**
   * Billing  Contact  Phone
   * @description The contact phone number.
   */
  billing__contact__phone?: string;
  /**
   * Country
   * @description The office country.
   * @enum {string}
   */
  country?: "AR" | "AT" | "AU" | "BD" | "BE" | "BG" | "BH" | "BR" | "CA" | "CH" | "CI" | "CL" | "CN" | "CO" | "CR" | "CY" | "CZ" | "DE" | "DK" | "DO" | "DP" | "EC" | "EE" | "EG" | "ES" | "FI" | "FR" | "GB" | "GH" | "GR" | "GT" | "HK" | "HR" | "HU" | "ID" | "IE" | "IL" | "IN" | "IS" | "IT" | "JP" | "KE" | "KH" | "KR" | "KZ" | "LK" | "LT" | "LU" | "LV" | "MA" | "MD" | "MM" | "MT" | "MX" | "MY" | "NG" | "NL" | "NO" | "NZ" | "PA" | "PE" | "PH" | "PK" | "PL" | "PR" | "PT" | "PY" | "RO" | "RU" | "SA" | "SE" | "SG" | "SI" | "SK" | "SV" | "TH" | "TR" | "TW" | "UA" | "US" | "UY" | "VE" | "VN" | "ZA";
  /**
   * Currency
   * @description The office"s billing currency.
   * @enum {string}
   */
  currency?: "AUD" | "CAD" | "EUR" | "GBP" | "JPY" | "NZD" | "USD";
  /**
   * E911  Address  Address
   * @description [single-line only] Line 1 of the E911 address.
   */
  e911__address__address?: string;
  /**
   * E911  Address  Address2
   * @description [single-line only] Line 2 of the E911 address.
   */
  e911__address__address2?: string;
  /**
   * E911  Address  City
   * @description [single-line only] City of the E911 address.
   */
  e911__address__city?: string;
  /**
   * E911  Address  Country
   * @description Country of the E911 address.
   */
  e911__address__country?: string;
  /**
   * E911  Address  State
   * @description [single-line only] State or Province of the E911 address.
   */
  e911__address__state?: string;
  /**
   * E911  Address  Zip
   * @description [single-line only] Zip code of the E911 address.
   */
  e911__address__zip?: string;
  /**
   * First Action
   * @description The desired action when the office receives a call.
   * @enum {string}
   */
  first_action?: "menu" | "operators";
  /**
   * Friday Hours
   * @description The Friday hours of operation. Default value is ["08:00", "18:00"].
   */
  friday_hours?: string[];
  /**
   * Group Description
   * @description The description of the office. Max 256 characters.
   */
  group_description?: string;
  /**
   * Hours On
   * @description The time frame when the office wants to receive calls. Default value is false, which means the office will always take calls (24/7).
   * @default false
   */
  hours_on: boolean;
  /**
   * International Enabled
   * @description A flag indicating if the primary office is able to make international phone calls.
   */
  international_enabled?: boolean;
  /**
   * Invoiced
   * @description A flag indicating if the payment will be paid by invoice.
   */
  invoiced?: boolean;
  /**
   * Mainline Number
   * @description The mainline of the office.
   */
  mainline_number?: string;
  /**
   * Monday Hours
   * @description The Monday hours of operation. To specify when hours_on is set to True. e.g. ["08:00", "12:00", "14:00", "18:00"] => open from 8AM to Noon, and from 2PM to 6PM. Default value is ["08:00", "18:00"].
   */
  monday_hours?: string[];
  /**
   * Name
   * @description [single-line only] The office name.
   */
  name?: string;
  /**
   * No Operators Action
   * @description The action to take if there is no one available to answer calls.
   * @enum {string}
   */
  no_operators_action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Plan Period
   * @description The frequency at which the company will be billed.
   * @enum {string}
   */
  plan_period?: "monthly" | "yearly";
  /**
   * Ring Seconds
   * @description The number of seconds to allow the group line to ring before going to voicemail. Choose from 10 seconds to 45 seconds.
   */
  ring_seconds?: number;
  /**
   * Routing  Options  Closed  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__closed__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Closed  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__closed__action__target__id?: number;
  /**
   * Routing  Options  Closed  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__closed__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Closed  Dtmf
   * @description DTMF menu options.
   */
  routing__options__closed__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Closed  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__closed__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Closed  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__closed__try__dial__operators?: boolean;
  /**
   * Routing  Options  Open  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__open__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Open  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__open__action__target__id?: number;
  /**
   * Routing  Options  Open  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__open__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Open  Dtmf
   * @description DTMF menu options.
   */
  routing__options__open__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Open  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__open__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Open  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__open__try__dial__operators?: boolean;
  /**
   * Saturday Hours
   * @description The Saturday hours of operation. Default is empty array.
   */
  saturday_hours?: string[];
  /**
   * Sunday Hours
   * @description The Sunday hours of operation. Default is empty array.
   */
  sunday_hours?: string[];
  /**
   * Thursday Hours
   * @description The Thursday hours of operation. Default value is ["08:00", "18:00"].
   */
  thursday_hours?: string[];
  /**
   * Timezone
   * @description Timezone using a tz database name.
   */
  timezone?: string;
  /**
   * Tuesday Hours
   * @description The Tuesday hours of operation. Default value is ["08:00", "18:00"].
   */
  tuesday_hours?: string[];
  /**
   * Unified Billing
   * @description A flag indicating if to send a unified invoice.
   */
  unified_billing?: boolean;
  /**
   * Use Same Address
   * @description A flag indicating if the billing address and the emergency address are the same.
   */
  use_same_address?: boolean;
  /**
   * Voice  Intelligence  Allow  Pause
   * @description Allow individual users to start and stop Vi during calls. Default is True.
   */
  voice__intelligence__allow__pause?: boolean;
  /**
   * Voice  Intelligence  Auto  Start
   * @description Auto start Vi for this call center. Default is True.
   */
  voice__intelligence__auto__start?: boolean;
  /**
   * Wednesday Hours
   * @description The Wednesday hours of operation. Default value is ["08:00", "18:00"].
   */
  wednesday_hours?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_SECONDARY_OFFICE tool output.
 */
type DIALPAD_CREATE_SECONDARY_OFFICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION tool input.
 */
type DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION_INPUT = {
  /**
   * Direction
   * @description The SMS direction this event subscription subscribes to.
   * @enum {string}
   */
  direction?: "all" | "inbound" | "outbound";
  /**
   * Enabled
   * @description Whether or not the SMS event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
  /**
   * Include Internal
   * @description Whether or not to trigger SMS events for SMS sent between two users from the same company.
   * @default false
   */
  include_internal: boolean;
  /**
   * Status
   * @description Whether or not to update on each SMS delivery status.
   * @default false
   */
  status: boolean;
  /**
   * Target Id
   * @description The ID of the specific target for which events should be sent.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION tool output.
 */
type DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN tool input.
 */
type DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN_INPUT = {
  /**
   * Auto Assign
   * @description If set to true, a number will be automatically assigned.
   * @default false
   */
  auto_assign: boolean;
  /**
   * Email
   * @description The user"s email.
   */
  email?: string;
  /**
   * First Name
   * @description [single-line only] The user"s first name.
   */
  first_name?: string;
  /**
   * Last Name
   * @description [single-line only] The user"s last name.
   */
  last_name?: string;
  /**
   * License
   * @description The user"s license type. This affects billing for the user.
   * @default talk
   * @enum {string}
   */
  license: "admins" | "agents" | "dpde_all" | "dpde_one" | "lite_lines" | "lite_support_agents" | "magenta_lines" | "talk";
  /**
   * Office Id
   * @description The user"s office id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN tool output.
 */
type DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT tool input.
 */
type DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT_INPUT = {
  /**
   * Hook Url
   * @description The webhook"s URL. Triggered events will be sent to the url provided here.
   */
  hook_url?: string;
  /**
   * Secret
   * @description [single-line only] Webhook"s signature secret that"s used to confirm the validity of the request.
   */
  secret?: string;
};

/**
 * Type of DIALPAD's DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT tool output.
 */
type DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DEAUTHORIZE_OAUTH2_SESSION tool input.
 */
type DIALPAD_DEAUTHORIZE_OAUTH2_SESSION_INPUT = object;

/**
 * Type of DIALPAD's DIALPAD_DEAUTHORIZE_OAUTH2_SESSION tool output.
 */
type DIALPAD_DEAUTHORIZE_OAUTH2_SESSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID tool input.
 */
type DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID_INPUT = {
  /**
   * Id
   * @description The access control policy"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID tool output.
 */
type DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_AGENT_STATUS_BY_ID tool input.
 */
type DIALPAD_DELETE_AGENT_STATUS_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_AGENT_STATUS_BY_ID tool output.
 */
type DIALPAD_DELETE_AGENT_STATUS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_CENTER_BY_ID tool input.
 */
type DIALPAD_DELETE_CALL_CENTER_BY_ID_INPUT = {
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_CENTER_BY_ID tool output.
 */
type DIALPAD_DELETE_CALL_CENTER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID tool input.
 */
type DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID_INPUT = {
  /**
   * Id
   * @description The share link"s id.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID tool output.
 */
type DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_ROUTER_BY_ID tool input.
 */
type DIALPAD_DELETE_CALL_ROUTER_BY_ID_INPUT = {
  /**
   * Id
   * @description The API call router"s ID
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_ROUTER_BY_ID tool output.
 */
type DIALPAD_DELETE_CALL_ROUTER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID tool input.
 */
type DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID tool output.
 */
type DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CHANNEL_BY_ID tool input.
 */
type DIALPAD_DELETE_CHANNEL_BY_ID_INPUT = {
  /**
   * Id
   * @description The channel id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CHANNEL_BY_ID tool output.
 */
type DIALPAD_DELETE_CHANNEL_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID tool input.
 */
type DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID_INPUT = {
  /**
   * Id
   * @description The channel"s id.
   */
  id?: number;
  /**
   * User Id
   * @description The user id.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID tool output.
 */
type DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CONTACT_BY_ID tool input.
 */
type DIALPAD_DELETE_CONTACT_BY_ID_INPUT = {
  /**
   * Id
   * @description The contact"s id.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CONTACT_BY_ID tool output.
 */
type DIALPAD_DELETE_CONTACT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE tool input.
 */
type DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE_INPUT = {
  /**
   * Ivr Id
   * @description The id of the ivr that you want to use for the ivr type.
   */
  ivr_id?: number;
  /**
   * Ivr Type
   * @description Type of ivr you want to update.
   * @enum {string}
   */
  ivr_type?: "ASK_FIRST_OPERATOR_NOT_AVAILABLE" | "AUTO_RECORDING" | "CALLAI_AUTO_RECORDING" | "CG_AUTO_RECORDING" | "CLOSED" | "CLOSED_DEPARTMENT_INTRO" | "CLOSED_MENU" | "CLOSED_MENU_OPTION" | "CSAT_INTRO" | "CSAT_OUTRO" | "CSAT_PREAMBLE" | "CSAT_QUESTION" | "DEPARTMENT_INTRO" | "GREETING" | "HOLD_AGENT_READY" | "HOLD_APPREC" | "HOLD_CALLBACK_ACCEPT" | "HOLD_CALLBACK_ACCEPTED" | "HOLD_CALLBACK_CONFIRM" | "HOLD_CALLBACK_CONFIRM_NUMBER" | "HOLD_CALLBACK_DIFFERENT_NUMBER" | "HOLD_CALLBACK_DIRECT" | "HOLD_CALLBACK_FULFILLED" | "HOLD_CALLBACK_INVALID_NUMBER" | "HOLD_CALLBACK_KEYPAD" | "HOLD_CALLBACK_REJECT" | "HOLD_CALLBACK_REJECTED" | "HOLD_CALLBACK_REQUEST" | "HOLD_CALLBACK_REQUESTED" | "HOLD_CALLBACK_SAME_NUMBER" | "HOLD_CALLBACK_TRY_AGAIN" | "HOLD_CALLBACK_UNDIALABLE" | "HOLD_ESCAPE_VM_EIGHT" | "HOLD_ESCAPE_VM_FIVE" | "HOLD_ESCAPE_VM_FOUR" | "HOLD_ESCAPE_VM_NINE" | "HOLD_ESCAPE_VM_ONE" | "HOLD_ESCAPE_VM_POUND" | "HOLD_ESCAPE_VM_SEVEN" | "HOLD_ESCAPE_VM_SIX" | "HOLD_ESCAPE_VM_STAR" | "HOLD_ESCAPE_VM_TEN" | "HOLD_ESCAPE_VM_THREE" | "HOLD_ESCAPE_VM_TWO" | "HOLD_ESCAPE_VM_ZERO" | "HOLD_INTERRUPT" | "HOLD_INTRO" | "HOLD_MUSIC" | "HOLD_POSITION_EIGHT" | "HOLD_POSITION_FIVE" | "HOLD_POSITION_FOUR" | "HOLD_POSITION_MORE" | "HOLD_POSITION_NINE" | "HOLD_POSITION_ONE" | "HOLD_POSITION_SEVEN" | "HOLD_POSITION_SIX" | "HOLD_POSITION_TEN" | "HOLD_POSITION_THREE" | "HOLD_POSITION_TWO" | "HOLD_POSITION_ZERO" | "HOLD_WAIT" | "MENU" | "MENU_OPTION" | "NEXT_TARGET" | "VM_DROP_MESSAGE" | "VM_UNAVAILABLE" | "VM_UNAVAILABLE_CLOSED";
  /**
   * Select Option
   * @description For call center auto call recording only. Set ivr for inbound or outbound. Default is both.
   * @enum {string}
   */
  select_option?: "inbound" | "outbound";
  /**
   * Target Id
   * @description The id of the target.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type. of the custom ivr to be updated.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE tool output.
 */
type DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_DEPARTMENT_RESOURCE tool input.
 */
type DIALPAD_DELETE_DEPARTMENT_RESOURCE_INPUT = {
  /**
   * Id
   * @description The department"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_DEPARTMENT_RESOURCE tool output.
 */
type DIALPAD_DELETE_DEPARTMENT_RESOURCE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_DESKPHONE_BY_USER_ID tool input.
 */
type DIALPAD_DELETE_DESKPHONE_BY_USER_ID_INPUT = {
  /**
   * Id
   * @description The desk phone"s id.
   */
  id?: string;
  /**
   * Parent Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  parent_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_DESKPHONE_BY_USER_ID tool output.
 */
type DIALPAD_DELETE_DESKPHONE_BY_USER_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_DESKPHONE_IN_ROOM tool input.
 */
type DIALPAD_DELETE_DESKPHONE_IN_ROOM_INPUT = {
  /**
   * Id
   * @description The desk phone"s id.
   */
  id?: string;
  /**
   * Parent Id
   * @description The room"s id.
   */
  parent_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_DESKPHONE_IN_ROOM tool output.
 */
type DIALPAD_DELETE_DESKPHONE_IN_ROOM_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_NUMBER_VIA_API tool input.
 */
type DIALPAD_DELETE_NUMBER_VIA_API_INPUT = {
  /**
   * Number
   * @description A phone number (e164 format).
   */
  number?: string;
  /**
   * Release
   * @description Releases the number (does not return it to the company reserved pool).
   */
  release?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_NUMBER_VIA_API tool output.
 */
type DIALPAD_DELETE_NUMBER_VIA_API_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID tool input.
 */
type DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID_INPUT = {
  /**
   * Id
   * @description The office"s ID.
   */
  id?: number;
  /**
   * Operator Id
   * @description ID of the operator to remove.
   */
  operator_id?: number;
  /**
   * Operator Type
   * @description Type of the operator to remove (`user` or `room`).
   * @enum {string}
   */
  operator_type?: "room" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID tool output.
 */
type DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER tool input.
 */
type DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER_INPUT = {
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
  /**
   * User Id
   * @description ID of the operator to remove.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER tool output.
 */
type DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT tool input.
 */
type DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT_INPUT = {
  /**
   * Id
   * @description The department"s id.
   */
  id?: number;
  /**
   * Operator Id
   * @description ID of the operator to remove.
   */
  operator_id?: number;
  /**
   * Operator Type
   * @description Type of the operator to remove (`user` or `room`).
   * @enum {string}
   */
  operator_type?: "room" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT tool output.
 */
type DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID tool input.
 */
type DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID_INPUT = {
  /**
   * Id
   * @description The recording share link"s ID.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID tool output.
 */
type DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_ROOM_BY_ID tool input.
 */
type DIALPAD_DELETE_ROOM_BY_ID_INPUT = {
  /**
   * Id
   * @description The room"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_ROOM_BY_ID tool output.
 */
type DIALPAD_DELETE_ROOM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID tool input.
 */
type DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID_INPUT = {
  /**
   * Id
   * @description The schedule reports subscription"s ID.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID tool output.
 */
type DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID tool input.
 */
type DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID tool output.
 */
type DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID tool input.
 */
type DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID tool output.
 */
type DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID tool input.
 */
type DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID tool output.
 */
type DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_USER_BY_ID tool input.
 */
type DIALPAD_DELETE_USER_BY_ID_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_USER_BY_ID tool output.
 */
type DIALPAD_DELETE_USER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_WEBHOOK_BY_ID tool input.
 */
type DIALPAD_DELETE_WEBHOOK_BY_ID_INPUT = {
  /**
   * Id
   * @description The webhook"s ID, which is generated after creating a webhook successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_WEBHOOK_BY_ID tool output.
 */
type DIALPAD_DELETE_WEBHOOK_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID tool input.
 */
type DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The websocket"s ID, which is generated after creating a websocket successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID tool output.
 */
type DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_CALL_BY_ID tool input.
 */
type DIALPAD_FETCH_CALL_BY_ID_INPUT = {
  /**
   * Id
   * @description The call"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_CALL_BY_ID tool output.
 */
type DIALPAD_FETCH_CALL_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID tool input.
 */
type DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID_INPUT = {
  /**
   * Call Id
   * @description The call"s id.
   */
  call_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID tool output.
 */
type DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_CUSTOM_IVRS tool input.
 */
type DIALPAD_FETCH_CUSTOM_IVRS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_CUSTOM_IVRS tool output.
 */
type DIALPAD_FETCH_CUSTOM_IVRS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID tool input.
 */
type DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID_INPUT = {
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID tool output.
 */
type DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_SCHEDULED_REPORTS tool input.
 */
type DIALPAD_FETCH_SCHEDULED_REPORTS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_SCHEDULED_REPORTS tool output.
 */
type DIALPAD_FETCH_SCHEDULED_REPORTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID tool input.
 */
type DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID_INPUT = {
  /**
   * Call Id
   * @description The call"s id.
   */
  call_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID tool output.
 */
type DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_USER_DETAILS_BY_ID tool input.
 */
type DIALPAD_FETCH_USER_DETAILS_BY_ID_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_FETCH_USER_DETAILS_BY_ID tool output.
 */
type DIALPAD_FETCH_USER_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_FORMAT_PHONE_NUMBERS tool input.
 */
type DIALPAD_FORMAT_PHONE_NUMBERS_INPUT = {
  /**
   * Country Code
   * @description Country code in ISO 3166-1 alpha-2 format such as "US". Required when sending local formatted phone number
   */
  country_code?: string;
  /**
   * Number
   * @description Phone number in local or E.164 format
   */
  number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_FORMAT_PHONE_NUMBERS tool output.
 */
type DIALPAD_FORMAT_PHONE_NUMBERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE tool input.
 */
type DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE_INPUT = {
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE tool output.
 */
type DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_CENTER_STATUS_BY_ID tool input.
 */
type DIALPAD_GET_CALL_CENTER_STATUS_BY_ID_INPUT = {
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_CENTER_STATUS_BY_ID tool output.
 */
type DIALPAD_GET_CALL_CENTER_STATUS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_LABELS tool input.
 */
type DIALPAD_GET_CALL_LABELS_INPUT = {
  /**
   * Limit
   * @description The maximum number of results to return.
   */
  limit?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_LABELS tool output.
 */
type DIALPAD_GET_CALL_LABELS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID tool input.
 */
type DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID_INPUT = {
  /**
   * Id
   * @description The share link"s id.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID tool output.
 */
type DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS tool input.
 */
type DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS tool output.
 */
type DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CHANNEL_MEMBERS_BY_ID tool input.
 */
type DIALPAD_GET_CHANNEL_MEMBERS_BY_ID_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Id
   * @description The channel id
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_CHANNEL_MEMBERS_BY_ID tool output.
 */
type DIALPAD_GET_CHANNEL_MEMBERS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID tool input.
 */
type DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID tool output.
 */
type DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID tool input.
 */
type DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID_INPUT = {
  /**
   * Parent Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  parent_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID tool output.
 */
type DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DESKPHONES_IN_ROOMS tool input.
 */
type DIALPAD_GET_DESKPHONES_IN_ROOMS_INPUT = {
  /**
   * Parent Id
   * @description The room"s id.
   */
  parent_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DESKPHONES_IN_ROOMS tool output.
 */
type DIALPAD_GET_DESKPHONES_IN_ROOMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DESKPHONE_BY_PARENT_ID tool input.
 */
type DIALPAD_GET_DESKPHONE_BY_PARENT_ID_INPUT = {
  /**
   * Id
   * @description The desk phone"s id.
   */
  id?: string;
  /**
   * Parent Id
   * @description The room"s id.
   */
  parent_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_DESKPHONE_BY_PARENT_ID tool output.
 */
type DIALPAD_GET_DESKPHONE_BY_PARENT_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_OFFICE_CALL_CENTERS tool input.
 */
type DIALPAD_GET_OFFICE_CALL_CENTERS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_OFFICE_CALL_CENTERS tool output.
 */
type DIALPAD_GET_OFFICE_CALL_CENTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER tool input.
 */
type DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER_INPUT = {
  /**
   * Call Center Id
   * @description The call center"s ID
   */
  call_center_id?: number;
  /**
   * User Id
   * @description The operator"s ID
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER tool output.
 */
type DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_PHONE_NUMBER_DETAILS tool input.
 */
type DIALPAD_GET_PHONE_NUMBER_DETAILS_INPUT = {
  /**
   * Number
   * @description A phone number (e164 format).
   */
  number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_GET_PHONE_NUMBER_DETAILS tool output.
 */
type DIALPAD_GET_PHONE_NUMBER_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID tool input.
 */
type DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID_INPUT = {
  /**
   * Id
   * @description The recording share link"s ID.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID tool output.
 */
type DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_ROOMS_LIST tool input.
 */
type DIALPAD_GET_ROOMS_LIST_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_ROOMS_LIST tool output.
 */
type DIALPAD_GET_ROOMS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID tool input.
 */
type DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID tool output.
 */
type DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_USER_CALLER_ID tool input.
 */
type DIALPAD_GET_USER_CALLER_ID_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_GET_USER_CALLER_ID tool output.
 */
type DIALPAD_GET_USER_CALLER_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_USER_DESKPHONES tool input.
 */
type DIALPAD_GET_USER_DESKPHONES_INPUT = {
  /**
   * Id
   * @description The desk phone"s id.
   */
  id?: string;
  /**
   * Parent Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  parent_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_USER_DESKPHONES tool output.
 */
type DIALPAD_GET_USER_DESKPHONES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_USER_E911_DETAILS tool input.
 */
type DIALPAD_GET_USER_E911_DETAILS_INPUT = {
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_GET_USER_E911_DETAILS tool output.
 */
type DIALPAD_GET_USER_E911_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_GET_WEBHOOKS_INFORMATION tool input.
 */
type DIALPAD_GET_WEBHOOKS_INFORMATION_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_GET_WEBHOOKS_INFORMATION tool output.
 */
type DIALPAD_GET_WEBHOOKS_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_HANGUP_CALL_VIA_ID tool input.
 */
type DIALPAD_HANGUP_CALL_VIA_ID_INPUT = {
  /**
   * Id
   * @description The call"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_HANGUP_CALL_VIA_ID tool output.
 */
type DIALPAD_HANGUP_CALL_VIA_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT tool input.
 */
type DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT_INPUT = {
  /**
   * Custom Data
   * @description Extra data to associate with the call. This will be passed through to any subscribed call events.
   */
  custom_data?: string;
  /**
   * Outbound Caller Id
   * @description The e164-formatted number shown to the call recipient (or "blocked").
   */
  outbound_caller_id?: string;
  /**
   * Phone Number
   * @description The e164-formatted number to call.
   */
  phone_number?: string;
  /**
   * Target Id
   * @description The ID of a group that will be used to initiate the call.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The type of a group that will be used to initiate the call.
   * @enum {string}
   */
  target_type?: "callcenter" | "department" | "office";
};

/**
 * Type of DIALPAD's DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT tool output.
 */
type DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API tool input.
 */
type DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API_INPUT = {
  /**
   * Custom Data
   * @description Extra data to associate with the call. This will be passed through to any subscribed call events.
   */
  custom_data?: string;
  /**
   * Device Id
   * @description The device"s id.
   */
  device_id?: string;
  /**
   * Group Id
   * @description The ID of a group that will be used to initiate the call.
   */
  group_id?: number;
  /**
   * Group Type
   * @description The type of a group that will be used to initiate the call.
   * @enum {string}
   */
  group_type?: "callcenter" | "department" | "office";
  /**
   * Is Consult
   * @description Enables the creation of a second call. If there is an ongoing call, it puts it on hold.
   * @default false
   */
  is_consult: boolean;
  /**
   * Outbound Caller Id
   * @description The e164-formatted number shown to the call recipient (or "blocked"). If set to "blocked", the recipient will receive a call from "unknown caller". The number can be the caller"s number, or the caller"s group number if the group is provided, or the caller"s company reserved number.
   */
  outbound_caller_id?: string;
  /**
   * Phone Number
   * @description The e164-formatted number to call.
   */
  phone_number?: string;
  /**
   * User Id
   * @description The id of the user who should make the outbound call.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API tool output.
 */
type DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS tool input.
 */
type DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS_INPUT = {
  /**
   * Custom Data
   * @description Extra data to associate with the call. This will be passed through to any subscribed call events.
   */
  custom_data?: string;
  /**
   * Group Id
   * @description The ID of a group that will be used to initiate the call.
   */
  group_id?: number;
  /**
   * Group Type
   * @description The type of a group that will be used to initiate the call.
   * @enum {string}
   */
  group_type?: "callcenter" | "department" | "office";
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
  /**
   * Outbound Caller Id
   * @description The e164-formatted number shown to the call recipient (or "blocked"). If set to "blocked", the recipient will receive a call from "unknown caller". The number can be the caller"s number, or the caller"s group number if the group is provided, or the caller"s company reserved number.
   */
  outbound_caller_id?: string;
  /**
   * Phone Number
   * @description The e164-formatted number to call.
   */
  phone_number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS tool output.
 */
type DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_CHANNELS_API tool input.
 */
type DIALPAD_LIST_CHANNELS_API_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * State
   * @description The state of the channel.
   */
  state?: string;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_CHANNELS_API tool output.
 */
type DIALPAD_LIST_CHANNELS_API_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_CONFERENCE_ROOMS tool input.
 */
type DIALPAD_LIST_CONFERENCE_ROOMS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_CONFERENCE_ROOMS tool output.
 */
type DIALPAD_LIST_CONFERENCE_ROOMS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_OFFICES_ENDPOINT tool input.
 */
type DIALPAD_LIST_OFFICES_ENDPOINT_INPUT = {
  /**
   * Active Only
   * @description Whether we only return active offices.
   */
  active_only?: boolean;
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_OFFICES_ENDPOINT tool output.
 */
type DIALPAD_LIST_OFFICES_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_LIST_USERS tool input.
 */
type DIALPAD_LIST_USERS_INPUT = {
  /**
   * Company Admin
   * @description If provided, filter results by the specified value to return only company admins or only non-company admins.
   */
  company_admin?: boolean;
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Email
   * @description The user"s email.
   */
  email?: string;
  /**
   * Number
   * @description The user"s phone number.
   */
  number?: string;
  /**
   * State
   * @description Filter results by the specified user state (e.g. active, suspended, deleted)
   * @enum {string}
   */
  state?: "active" | "all" | "cancelled" | "deleted" | "pending" | "suspended";
};

/**
 * Type of DIALPAD's DIALPAD_LIST_USERS tool output.
 */
type DIALPAD_LIST_USERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID tool input.
 */
type DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID_INPUT = {
  /**
   * Company Name
   * @description [single-line only] The contact"s company name.
   */
  company_name?: string;
  /**
   * Emails
   * @description The contact"s emails. The first email in the list is the contact"s primary email.
   */
  emails?: string[];
  /**
   * Extension
   * @description The contact"s extension number.
   */
  extension?: string;
  /**
   * First Name
   * @description [single-line only] The contact"s first name.
   */
  first_name?: string;
  /**
   * Id
   * @description The contact"s id.
   */
  id?: string;
  /**
   * Job Title
   * @description [single-line only] The contact"s job title.
   */
  job_title?: string;
  /**
   * Last Name
   * @description [single-line only] The contact"s last name.
   */
  last_name?: string;
  /**
   * Phones
   * @description The contact"s phone numbers. The phone number must be in e164 format. The first number in the list is the contact"s primary phone.
   */
  phones?: string[];
  /**
   * Trunk Group
   * @description [Deprecated]
   */
  trunk_group?: string;
  /**
   * Urls
   * @description A list of websites associated with or belonging to this contact.
   */
  urls?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID tool output.
 */
type DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS tool input.
 */
type DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS_INPUT = {
  /**
   * Ivr Id
   * @description The id of the ivr that you want to use for the ivr type.
   */
  ivr_id?: number;
  /**
   * Ivr Type
   * @description Type of ivr you want to update
   * @enum {string}
   */
  ivr_type?: "ASK_FIRST_OPERATOR_NOT_AVAILABLE" | "AUTO_RECORDING" | "CALLAI_AUTO_RECORDING" | "CG_AUTO_RECORDING" | "CLOSED" | "CLOSED_DEPARTMENT_INTRO" | "CLOSED_MENU" | "CLOSED_MENU_OPTION" | "CSAT_INTRO" | "CSAT_OUTRO" | "CSAT_PREAMBLE" | "CSAT_QUESTION" | "DEPARTMENT_INTRO" | "GREETING" | "HOLD_AGENT_READY" | "HOLD_APPREC" | "HOLD_CALLBACK_ACCEPT" | "HOLD_CALLBACK_ACCEPTED" | "HOLD_CALLBACK_CONFIRM" | "HOLD_CALLBACK_CONFIRM_NUMBER" | "HOLD_CALLBACK_DIFFERENT_NUMBER" | "HOLD_CALLBACK_DIRECT" | "HOLD_CALLBACK_FULFILLED" | "HOLD_CALLBACK_INVALID_NUMBER" | "HOLD_CALLBACK_KEYPAD" | "HOLD_CALLBACK_REJECT" | "HOLD_CALLBACK_REJECTED" | "HOLD_CALLBACK_REQUEST" | "HOLD_CALLBACK_REQUESTED" | "HOLD_CALLBACK_SAME_NUMBER" | "HOLD_CALLBACK_TRY_AGAIN" | "HOLD_CALLBACK_UNDIALABLE" | "HOLD_ESCAPE_VM_EIGHT" | "HOLD_ESCAPE_VM_FIVE" | "HOLD_ESCAPE_VM_FOUR" | "HOLD_ESCAPE_VM_NINE" | "HOLD_ESCAPE_VM_ONE" | "HOLD_ESCAPE_VM_POUND" | "HOLD_ESCAPE_VM_SEVEN" | "HOLD_ESCAPE_VM_SIX" | "HOLD_ESCAPE_VM_STAR" | "HOLD_ESCAPE_VM_TEN" | "HOLD_ESCAPE_VM_THREE" | "HOLD_ESCAPE_VM_TWO" | "HOLD_ESCAPE_VM_ZERO" | "HOLD_INTERRUPT" | "HOLD_INTRO" | "HOLD_MUSIC" | "HOLD_POSITION_EIGHT" | "HOLD_POSITION_FIVE" | "HOLD_POSITION_FOUR" | "HOLD_POSITION_MORE" | "HOLD_POSITION_NINE" | "HOLD_POSITION_ONE" | "HOLD_POSITION_SEVEN" | "HOLD_POSITION_SIX" | "HOLD_POSITION_TEN" | "HOLD_POSITION_THREE" | "HOLD_POSITION_TWO" | "HOLD_POSITION_ZERO" | "HOLD_WAIT" | "MENU" | "MENU_OPTION" | "NEXT_TARGET" | "VM_DROP_MESSAGE" | "VM_UNAVAILABLE" | "VM_UNAVAILABLE_CLOSED";
  /**
   * Select Option
   * @description For call center auto call recording only. Set ivr for inbound or outbound. Default is both.
   * @enum {string}
   */
  select_option?: "inbound" | "outbound";
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS tool output.
 */
type DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL tool input.
 */
type DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL_INPUT = {
  /**
   * Call Center Id
   * @description The call center"s ID
   */
  call_center_id?: number;
  /**
   * Skill Level
   * @description New skill level to set the operator in the call center. It must be an integer value between 0 and 100.
   */
  skill_level?: number;
  /**
   * User Id
   * @description The operator"s ID
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL tool output.
 */
type DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_WEBHOOK_CONFIGURATION tool input.
 */
type DIALPAD_MODIFY_WEBHOOK_CONFIGURATION_INPUT = {
  /**
   * Hook Url
   * @description The webhook"s URL. Triggered events will be sent to the url provided here.
   */
  hook_url?: string;
  /**
   * Id
   * @description The webhook"s ID, which is generated after creating a webhook successfully.
   */
  id?: string;
  /**
   * Secret
   * @description [single-line only] Webhook"s signature secret that"s used to confirm the validity of the request.
   */
  secret?: string;
};

/**
 * Type of DIALPAD's DIALPAD_MODIFY_WEBHOOK_CONFIGURATION tool output.
 */
type DIALPAD_MODIFY_WEBHOOK_CONFIGURATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE tool input.
 */
type DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
  /**
   * Office Id
   * @description The user"s office id. When provided, the user will be moved to this office.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE tool output.
 */
type DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT tool input.
 */
type DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT_INPUT = {
  /**
   * Client Id
   * @description The client_id of the OAuth app.
   */
  client_id?: string;
  /**
   * Code Challenge
   * @description PKCE challenge value (hash commitment).
   */
  code_challenge?: string;
  /**
   * Code Challenge Method
   * @description PKCE challenge method (hashing algorithm).
   * @enum {string}
   */
  code_challenge_method?: "S256" | "plain";
  /**
   * Redirect Uri
   * @description The URI the user should be redirected back to after granting consent to the app.
   */
  redirect_uri?: string;
  /**
   * Response Type
   * @description The OAuth flow to perform. Must be "code" (authorization code flow).
   * @enum {string}
   */
  response_type?: "code";
  /**
   * Scope
   * @description Space-separated list of additional scopes that should be granted to the vended token.
   */
  scope?: string;
  /**
   * State
   * @description Unpredictable token to prevent CSRF.
   */
  state?: string;
};

/**
 * Type of DIALPAD's DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT tool output.
 */
type DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID tool input.
 */
type DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID_INPUT = {
  /**
   * Description
   * @description [single-line only] Optional description for the policy.
   */
  description?: string;
  /**
   * Id
   * @description The access control policy"s id.
   */
  id?: number;
  /**
   * Name
   * @description [single-line only] A human-readable display name for the policy.
   */
  name?: string;
  /**
   * Permission Sets
   * @description List of permission associated with this policy.
   */
  permission_sets?: string[];
  /**
   * State
   * @description Restore a deleted policy.
   * @enum {string}
   */
  state?: "active";
  /**
   * User Id
   * @description user id updating this policy. Must be a company admin
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID tool output.
 */
type DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION tool input.
 */
type DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION_INPUT = {
  /**
   * Agent Type
   * @description The agent type this event subscription subscribes to.
   * @default callcenter
   * @enum {string}
   */
  agent_type: "callcenter";
  /**
   * Enabled
   * @description Whether or not the this agent status event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint, please provide a valid webhook ID here.
   */
  endpoint_id?: number;
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION tool output.
 */
type DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_CALL_ROUTER_BY_ID tool input.
 */
type DIALPAD_PATCH_CALL_ROUTER_BY_ID_INPUT = {
  /**
   * Default Target Id
   * @description The ID of the target that should be used as a fallback destination for calls if the call router is disabled or fails.
   */
  default_target_id?: number;
  /**
   * Default Target Type
   * @description The entity type of the default target.
   * @enum {string}
   */
  default_target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Enabled
   * @description If set to False, the call router will skip the routing url and instead forward calls straight to the default target.
   */
  enabled?: boolean;
  /**
   * Id
   * @description The API call router"s ID
   */
  id?: string;
  /**
   * Name
   * @description [single-line only] A human-readable display name for the router.
   */
  name?: string;
  /**
   * Office Id
   * @description The ID of the office to which this router belongs.
   */
  office_id?: number;
  /**
   * Reset Error Count
   * @description Sets the auto-disablement routing error count back to zero. Call routers maintain a count of the number of errors that have occured within the past hour, and automatically become disabled when that count exceeds 10. Setting enabled to true via the API will not reset that count, which means that the router will likely become disabled again after one more error. In most cases, this will be useful for testing fixes in your routing API, but in some circumstances it may be desirable to reset that counter.
   */
  reset_error_count?: boolean;
  /**
   * Routing Url
   * @description The URL that should be used to drive call routing decisions.
   */
  routing_url?: string;
  /**
   * Secret
   * @description [single-line only] The call router"s signature secret. This is a plain text string that you should generate with a minimum length of 32 characters.
   */
  secret?: string;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_CALL_ROUTER_BY_ID tool output.
 */
type DIALPAD_PATCH_CALL_ROUTER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID tool input.
 */
type DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID_INPUT = {
  /**
   * Auto Call Recording
   * @description Whether or not automatically record all calls of this department. Default is False.
   */
  auto_call_recording?: boolean;
  /**
   * Friday Hours
   * @description The Friday hours of operation. Default value is ["08:00", "18:00"].
   */
  friday_hours?: string[];
  /**
   * Group Description
   * @description The description of the department. Max 256 characters.
   */
  group_description?: string;
  /**
   * Hold  Queue  Allow  Queuing
   * @description Whether or not send callers to a hold queue, if all operators are busy on other calls. Default is False.
   */
  hold__queue__allow__queuing?: boolean;
  /**
   * Hold  Queue  Max  Hold  Count
   * @description If all operators are busy on other calls, send callers to a hold queue. This is to specify your queue size. Choose from 1-50. Default is 50.
   */
  hold__queue__max__hold__count?: number;
  /**
   * Hold  Queue  Max  Hold  Seconds
   * @description Maximum queue wait time in seconds. Choose from 30s to 18000s (3 hours). Default is 900s (15 min).
   */
  hold__queue__max__hold__seconds?: number;
  /**
   * Hours On
   * @description The time frame when the department wants to receive calls. Default value is false, which means the call center will always take calls (24/7).
   */
  hours_on?: boolean;
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
  /**
   * Monday Hours
   * @description The Monday hours of operation. To specify when hours_on is set to True. e.g. ["08:00", "12:00", "14:00", "18:00"] => open from 8AM to Noon, and from 2PM to 6PM. Default value is ["08:00", "18:00"].
   */
  monday_hours?: string[];
  /**
   * Name
   * @description [single-line only] The name of the department. Max 100 characters.
   */
  name?: string;
  /**
   * Ring Seconds
   * @description The number of seconds to allow the group line to ring before going to voicemail. Choose from 10 seconds to 45 seconds. Default is 30 seconds.
   */
  ring_seconds?: number;
  /**
   * Routing  Options  Closed  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__closed__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Closed  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__closed__action__target__id?: number;
  /**
   * Routing  Options  Closed  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__closed__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Closed  Dtmf
   * @description DTMF menu options.
   */
  routing__options__closed__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Closed  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__closed__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Closed  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__closed__try__dial__operators?: boolean;
  /**
   * Routing  Options  Open  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__open__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Open  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__open__action__target__id?: number;
  /**
   * Routing  Options  Open  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__open__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Open  Dtmf
   * @description DTMF menu options.
   */
  routing__options__open__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Open  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__open__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Open  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__open__try__dial__operators?: boolean;
  /**
   * Saturday Hours
   * @description The Saturday hours of operation. Default is empty array.
   */
  saturday_hours?: string[];
  /**
   * Sunday Hours
   * @description The Sunday hours of operation. Default is empty array.
   */
  sunday_hours?: string[];
  /**
   * Thursday Hours
   * @description The Thursday hours of operation. Default value is ["08:00", "18:00"].
   */
  thursday_hours?: string[];
  /**
   * Tuesday Hours
   * @description The Tuesday hours of operation. Default value is ["08:00", "18:00"].
   */
  tuesday_hours?: string[];
  /**
   * Voice  Intelligence  Allow  Pause
   * @description Allow individual users to start and stop Vi during calls. Default is True.
   */
  voice__intelligence__allow__pause?: boolean;
  /**
   * Voice  Intelligence  Auto  Start
   * @description Auto start Vi for this call center. Default is True.
   */
  voice__intelligence__auto__start?: boolean;
  /**
   * Wednesday Hours
   * @description The Wednesday hours of operation. Default value is ["08:00", "18:00"].
   */
  wednesday_hours?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID tool output.
 */
type DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT tool input.
 */
type DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT_INPUT = {
  /**
   * Enabled
   * @description Whether or not the change log event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint, please provide a valid webhook ID here.
   */
  endpoint_id?: number;
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT tool output.
 */
type DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING tool input.
 */
type DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
  /**
   * Is Recording
   * @description Whether or not recording should be enabled.
   */
  is_recording?: boolean;
  /**
   * Play Message
   * @description Whether or not to play a message to indicate the call is being recorded (or recording has stopped).
   * @default true
   */
  play_message: boolean;
  /**
   * Recording Type
   * @description Whether or not to toggle recording for the operator call (personal recording), the group call (department recording), or both. Only applicable for group calls (call centers, departments, etc.)
   * @default user
   * @enum {string}
   */
  recording_type: "all" | "group" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING tool output.
 */
type DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_USER_STATUS tool input.
 */
type DIALPAD_PATCH_USER_STATUS_INPUT = {
  /**
   * Expiration
   * @description The expiration of this status. None for no expiration.
   */
  expiration?: number;
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
  /**
   * Status Message
   * @description The status message for the user.
   */
  status_message?: string;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_USER_STATUS tool output.
 */
type DIALPAD_PATCH_USER_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET tool input.
 */
type DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET_INPUT = {
  /**
   * Id
   * @description The websocket"s ID, which is generated after creating a websocket successfully.
   */
  id?: number;
  /**
   * Secret
   * @description [single-line only] Websocket"s signature secret that"s used to confirm the validity of the request.
   */
  secret?: string;
};

/**
 * Type of DIALPAD's DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET tool output.
 */
type DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_POST_CALL_EVENT_SUBSCRIPTION tool input.
 */
type DIALPAD_POST_CALL_EVENT_SUBSCRIPTION_INPUT = {
  /**
   * Call States
   * @description The call event subscription"s list of call states.
   */
  call_states?: string[];
  /**
   * Enabled
   * @description Whether or not the call event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
  /**
   * Group Calls Only
   * @description Call event subscription for group calls only.
   */
  group_calls_only?: boolean;
  /**
   * Target Id
   * @description The ID of the specific target for which events should be sent.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The target type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_POST_CALL_EVENT_SUBSCRIPTION tool output.
 */
type DIALPAD_POST_CALL_EVENT_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_POST_RECORDING_SHARE_LINK tool input.
 */
type DIALPAD_POST_RECORDING_SHARE_LINK_INPUT = {
  /**
   * Privacy
   * @description The privacy state of the recording share link.
   * @default owner
   * @enum {string}
   */
  privacy: "admin" | "company" | "owner" | "public";
  /**
   * Recording Id
   * @description The recording entity"s ID.
   */
  recording_id?: string;
  /**
   * Recording Type
   * @description The type of the recording entity shared via the link.
   * @enum {string}
   */
  recording_type?: "admincallrecording" | "callrecording" | "voicemail";
};

/**
 * Type of DIALPAD's DIALPAD_POST_RECORDING_SHARE_LINK tool output.
 */
type DIALPAD_POST_RECORDING_SHARE_LINK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT tool input.
 */
type DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT_INPUT = {
  /**
   * Enabled
   * @description Whether or not the this change log event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT tool output.
 */
type DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_POST_USERS_SCREENPOP_URI tool input.
 */
type DIALPAD_POST_USERS_SCREENPOP_URI_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
  /**
   * Screen Pop Uri
   * @description The screen pop"s url. Most Url should start with scheme name such as http or https. Be aware that url with userinfo subcomponent, such as "https://username:password@www.example.com" is not supported for security reasons. Launching native apps is also supported through a format such as "customuri://domain.com"
   */
  screen_pop_uri?: string;
};

/**
 * Type of DIALPAD's DIALPAD_POST_USERS_SCREENPOP_URI tool output.
 */
type DIALPAD_POST_USERS_SCREENPOP_URI_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET tool input.
 */
type DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET_INPUT = {
  /**
   * Secret
   * @description [single-line only] Websocket"s signature secret that"s used to confirm the validity of the request.
   */
  secret?: string;
};

/**
 * Type of DIALPAD's DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET tool output.
 */
type DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET tool input.
 */
type DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET_INPUT = {
  /**
   * Number
   * @description A specific number to assign
   */
  number?: string;
  /**
   * Primary
   * @description A boolean indicating whether this should become the target"s primary phone number.
   * @default true
   */
  primary: boolean;
  /**
   * Target Id
   * @description The ID of the target to reassign this number to.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The type of the target.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET tool output.
 */
type DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN tool input.
 */
type DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN_INPUT = object;

/**
 * Type of DIALPAD's DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN tool output.
 */
type DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_REMOVE_BLOCKED_NUMBERS tool input.
 */
type DIALPAD_REMOVE_BLOCKED_NUMBERS_INPUT = {
  /**
   * Numbers
   * @description A list of E164 formatted numbers.
   */
  numbers?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_REMOVE_BLOCKED_NUMBERS tool output.
 */
type DIALPAD_REMOVE_BLOCKED_NUMBERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS tool input.
 */
type DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Id
   * @description The access control policy"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS tool output.
 */
type DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID_INPUT = {
  /**
   * Id
   * @description The access control policy"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION tool input.
 */
type DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION tool output.
 */
type DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_APP_SETTINGS tool input.
 */
type DIALPAD_RETRIEVE_APP_SETTINGS_INPUT = {
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_APP_SETTINGS tool output.
 */
type DIALPAD_RETRIEVE_APP_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS tool input.
 */
type DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS_INPUT = {
  /**
   * Number
   * @description A phone number (e164 format).
   */
  number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS tool output.
 */
type DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS tool input.
 */
type DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS tool output.
 */
type DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID_INPUT = {
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION tool input.
 */
type DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Name Search
   * @description search call centers by name or search by the substring of the name. If input example is "Cool", output example can be a list of call centers whose name contains the string "Cool" - ["Cool call center 1", "Cool call center 2049"]
   */
  name_search?: string;
  /**
   * Office Id
   * @description search call center by office.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION tool output.
 */
type DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_CENTER_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_CALL_CENTER_BY_ID_INPUT = {
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_CENTER_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_CALL_CENTER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_INFORMATION tool input.
 */
type DIALPAD_RETRIEVE_CALL_INFORMATION_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Started After
   * @description Only includes calls that started more recently than the specified timestamp. (UTC ms-since-epoch timestamp)
   */
  started_after?: number;
  /**
   * Started Before
   * @description Only includes calls that started prior to the specified timestamp. (UTC ms-since-epoch timestamp)
   */
  started_before?: number;
  /**
   * Target Id
   * @description The ID of a target to filter against.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The target type associated with the target ID.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_INFORMATION tool output.
 */
type DIALPAD_RETRIEVE_CALL_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API tool input.
 */
type DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API tool output.
 */
type DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID_INPUT = {
  /**
   * Id
   * @description The API call router"s ID
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CHANNEL_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_CHANNEL_BY_ID_INPUT = {
  /**
   * Id
   * @description The channel id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CHANNEL_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_CHANNEL_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COACHING_STATS_V2 tool input.
 */
type DIALPAD_RETRIEVE_COACHING_STATS_V2_INPUT = {
  /**
   * Coaching Group
   * @description Whether or not the the statistics should be for trainees of the coach group with the given target_id.
   */
  coaching_group?: boolean;
  /**
   * Coaching Team
   * @description Whether or not the the statistics should be for trainees of the coach team with the given target_id.
   */
  coaching_team?: boolean;
  /**
   * Days Ago End
   * @description End of the date range to get statistics for. This is the number of days to look back relative to the current day. Used in conjunction with days_ago_start to specify a range.
   * @default 30
   */
  days_ago_end: number;
  /**
   * Days Ago Start
   * @description Start of the date range to get statistics for. This is the number of days to look back relative to the current day. Used in conjunction with days_ago_end to specify a range.
   * @default 1
   */
  days_ago_start: number;
  /**
   * Export Type
   * @description Whether to return aggregated statistics (stats), or individual rows for each record (records). NOTE: For stat_type "csat" or "dispositions", only "records" is supported.
   * @enum {string}
   */
  export_type?: "records" | "stats";
  /**
   * Group By
   * @description This param is only applicable when the stat_type is specified as call. For call stats, group calls by user per day (default), get total metrics by day, or break down by department and call center (office only).
   * @enum {string}
   */
  group_by?: "date" | "group" | "user";
  /**
   * Is Today
   * @description Whether or not the statistics are for the current day. NOTE: days_ago_start and days_ago_end are ignored if this is passed in.
   */
  is_today?: boolean;
  /**
   * Office Id
   * @description ID of the office to get statistics for. If a target_id and target_type are passed in this value is ignored and instead the target is used.
   */
  office_id?: number;
  /**
   * Stat Type
   * @description The type of statistics to be returned. NOTE: if the value is "csat" or "dispositions", target_id and target_type must be specified.
   * @enum {string}
   */
  stat_type?: "calls" | "csat" | "dispositions" | "onduty" | "recordings" | "screenshare" | "texts" | "voicemails";
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Timezone
   * @description Timezone using a tz database name.
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COACHING_STATS_V2 tool output.
 */
type DIALPAD_RETRIEVE_COACHING_STATS_V2_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION tool input.
 */
type DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION tool output.
 */
type DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID_INPUT = {
  /**
   * Id
   * @description Id of the coaching team
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COMPANY_DATA tool input.
 */
type DIALPAD_RETRIEVE_COMPANY_DATA_INPUT = object;

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_COMPANY_DATA tool output.
 */
type DIALPAD_RETRIEVE_COMPANY_DATA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CONFERENCE_MEETINGS tool input.
 */
type DIALPAD_RETRIEVE_CONFERENCE_MEETINGS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Room Id
   * @description The meeting room"s ID.
   */
  room_id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CONFERENCE_MEETINGS tool output.
 */
type DIALPAD_RETRIEVE_CONFERENCE_MEETINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CONTACT_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_CONTACT_BY_ID_INPUT = {
  /**
   * Id
   * @description The contact"s id.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CONTACT_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_CONTACT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CONTACT_LIST tool input.
 */
type DIALPAD_RETRIEVE_CONTACT_LIST_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Include Local
   * @description If set to True company local contacts will be included. default False.
   */
  include_local?: boolean;
  /**
   * Owner Id
   * @description The id of the user who owns the contact.
   */
  owner_id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_CONTACT_LIST tool output.
 */
type DIALPAD_RETRIEVE_CONTACT_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_DEPARTMENT_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_DEPARTMENT_BY_ID_INPUT = {
  /**
   * Id
   * @description The department"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_DEPARTMENT_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_DEPARTMENT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID_INPUT = {
  /**
   * Id
   * @description The department"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_E911_OFFICE_DETAILS tool input.
 */
type DIALPAD_RETRIEVE_E911_OFFICE_DETAILS_INPUT = {
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_E911_OFFICE_DETAILS tool output.
 */
type DIALPAD_RETRIEVE_E911_OFFICE_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS tool input.
 */
type DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Name Search
   * @description search departments by name or search by the substring of the name. If input example is "Happy", output example can be a list of departments whose name contains the string Happy - ["Happy department 1", "Happy department 2"]
   */
  name_search?: string;
  /**
   * Office Id
   * @description filter departments by office.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS tool output.
 */
type DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID_INPUT = {
  /**
   * Id
   * @description Id of the coaching team
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2 tool input.
 */
type DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Status
   * @description Status to filter by.
   */
  status?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2 tool output.
 */
type DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OFFICE_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_OFFICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OFFICE_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_OFFICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID_INPUT = {
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID tool input.
 */
type DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID_INPUT = {
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID tool output.
 */
type DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS tool input.
 */
type DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS_INPUT = {
  /**
   * Id
   * @description The operator"s user id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS tool output.
 */
type DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID_INPUT = {
  /**
   * Id
   * @description The room"s id.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID_INPUT = {
  /**
   * Id
   * @description The schedule reports subscription"s ID.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID tool input.
 */
type DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID_INPUT = {
  /**
   * A2P Campaign Id
   * @description Optional company A2P campaign entity id to filter results by. Note, if set, then the parameter "opt_out_state" must be also set to the value "opted_out".
   */
  a2p_campaign_id?: number;
  /**
   * Cursor
   * @description Optional token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Id
   * @description ID of the requested company. This is required and must be specified in the URL path. The value must match the id from the company linked to the API key.
   */
  id?: string;
  /**
   * Opt Out State
   * @description Required opt-out state to filter results by. Only results matching this state will be returned.
   * @enum {string}
   */
  opt_out_state?: "opted_back_in" | "opted_out";
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID tool output.
 */
type DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS tool input.
 */
type DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS tool output.
 */
type DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID_INPUT = {
  /**
   * Id
   * @description The webhook"s ID, which is generated after creating a webhook successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_STAT_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_STAT_BY_ID_INPUT = {
  /**
   * Id
   * @description Request ID returned by a POST /stats request.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_STAT_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_STAT_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG tool input.
 */
type DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG tool output.
 */
type DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID_INPUT = {
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS tool input.
 */
type DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS tool output.
 */
type DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID tool input.
 */
type DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * Office Id
   * @description The office"s id.
   */
  office_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID tool output.
 */
type DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_USER_DEVICES_LIST tool input.
 */
type DIALPAD_RETRIEVE_USER_DEVICES_LIST_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
  /**
   * User Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  user_id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_USER_DEVICES_LIST tool output.
 */
type DIALPAD_RETRIEVE_USER_DEVICES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_USER_DEVICE_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_USER_DEVICE_BY_ID_INPUT = {
  /**
   * Id
   * @description The device"s id.
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_USER_DEVICE_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_USER_DEVICE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_WEBSOCKET_BY_ID tool input.
 */
type DIALPAD_RETRIEVE_WEBSOCKET_BY_ID_INPUT = {
  /**
   * Id
   * @description The websocket"s ID, which is generated after creating a websocket successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_WEBSOCKET_BY_ID tool output.
 */
type DIALPAD_RETRIEVE_WEBSOCKET_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION tool input.
 */
type DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION_INPUT = {
  /**
   * Cursor
   * @description A token used to return the next page of a previous request. Use the cursor provided in the previous response.
   */
  cursor?: string;
};

/**
 * Type of DIALPAD's DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION tool output.
 */
type DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER tool input.
 */
type DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER_INPUT = {
  /**
   * Channel Hashtag
   * @description [single-line only] The hashtag of the channel which should receive the SMS.
   */
  channel_hashtag?: string;
  /**
   * From Number
   * @description The number of who sending the SMS. The number must be assigned to user or a user group. It will override user_id and sender_group_id.
   */
  from_number?: string;
  /**
   * Infer Country Code
   * @description If true, to_numbers will be assumed to be from the specified user"s country, and the E164 format requirement will be relaxed.
   * @default false
   */
  infer_country_code: boolean;
  /**
   * Media
   * Format: byte
   * @description Base64-encoded media attachment (will cause the message to be sent as MMS).
   */
  media?: string;
  /**
   * Sender Group Id
   * @description The ID of an office, department, or call center that the User should send the message on behalf of.
   */
  sender_group_id?: number;
  /**
   * Sender Group Type
   * @description The sender group"s type (i.e. office, department, or callcenter).
   * @enum {string}
   */
  sender_group_type?: "callcenter" | "department" | "office";
  /**
   * Text
   * @description The contents of the message that should be sent.
   */
  text?: string;
  /**
   * To Numbers
   * @description Up to 10 E164-formatted phone numbers who should receive the SMS.
   */
  to_numbers?: string[];
  /**
   * User Id
   * @description The ID of the user who should be the sender of the SMS.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER tool output.
 */
type DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_SET_USER_CALLER_ID_BY_ID tool input.
 */
type DIALPAD_SET_USER_CALLER_ID_BY_ID_INPUT = {
  /**
   * Caller Id
   * @description Phone number (e164 formatted) that will be defined as a Caller ID for the target. Use "blocked" to block the Caller ID.
   */
  caller_id?: string;
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_SET_USER_CALLER_ID_BY_ID tool output.
 */
type DIALPAD_SET_USER_CALLER_ID_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_SUBSCRIBE_CONTACT_EVENT tool input.
 */
type DIALPAD_SUBSCRIBE_CONTACT_EVENT_INPUT = {
  /**
   * Contact Type
   * @description The contact type this event subscription subscribes to.
   * @enum {string}
   */
  contact_type?: "local" | "shared";
  /**
   * Enabled
   * @description Whether or not the contact event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_SUBSCRIBE_CONTACT_EVENT tool output.
 */
type DIALPAD_SUBSCRIBE_CONTACT_EVENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS tool input.
 */
type DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS_INPUT = {
  /**
   * Do Not Disturb
   * @description Determines if DND is ON or OFF.
   */
  do_not_disturb?: boolean;
  /**
   * Group Id
   * @description The ID of the group which the user"s DND status will be updated for.
   */
  group_id?: number;
  /**
   * Group Type
   * @description The type of the group which the user"s DND status will be updated for.
   * @enum {string}
   */
  group_type?: "callcenter" | "department" | "office";
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
};

/**
 * Type of DIALPAD's DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS tool output.
 */
type DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID tool input.
 */
type DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID_INPUT = {
  /**
   * Enable Vi
   * @description Whether or not call vi should be enabled.
   */
  enable_vi?: boolean;
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID tool output.
 */
type DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_TRANSFER_CALL_TO_DESTINATION tool input.
 */
type DIALPAD_TRANSFER_CALL_TO_DESTINATION_INPUT = {
  /**
   * Custom Data
   * @description Extra data to associate with the call. This will be passed through to any subscribed call events.
   */
  custom_data?: string;
  /**
   * Id
   * @description The call"s id.
   */
  id?: number;
  /**
   * To
   * @description Destination of the call that will be transfer. It can be a single option between a number,  an existing call or a target
   */
  to?: {
      [key: string]: unknown;
  };
  /**
   * Transfer State
   * @description The state which the call should take when it"s transferred to.
   * @enum {string}
   */
  transfer_state?: "hold" | "parked" | "preanswer" | "voicemail";
};

/**
 * Type of DIALPAD's DIALPAD_TRANSFER_CALL_TO_DESTINATION tool output.
 */
type DIALPAD_TRANSFER_CALL_TO_DESTINATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER tool input.
 */
type DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER_INPUT = {
  /**
   * Id
   * @description The access control policy"s id.
   */
  id?: number;
  /**
   * Target Id
   * @description Required if the policy is associated with a target (Office or Contact Center). Not required for a company level policy or if unassign_all is True.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Policy permissions applied at this target level. Defaults to company target type.
   * @default company
   * @enum {string}
   */
  target_type: "callcenter" | "company" | "office";
  /**
   * Unassign All
   * @description Unassign all associated target groups from the user for a policy.
   * @default false
   */
  unassign_all: boolean;
  /**
   * User Id
   * @description The user"s id to be assigned to the policy.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER tool output.
 */
type DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_OFFICE_NUMBER tool input.
 */
type DIALPAD_UNASSIGN_OFFICE_NUMBER_INPUT = {
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
  /**
   * Number
   * @description A phone number to unassign. (e164-formatted)
   */
  number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_OFFICE_NUMBER tool output.
 */
type DIALPAD_UNASSIGN_OFFICE_NUMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER tool input.
 */
type DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER_INPUT = {
  /**
   * Id
   * @description The room"s id.
   */
  id?: number;
  /**
   * Number
   * @description A phone number to unassign. (e164-formatted)
   */
  number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER tool output.
 */
type DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_USER_PHONE_NUMBER tool input.
 */
type DIALPAD_UNASSIGN_USER_PHONE_NUMBER_INPUT = {
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
  /**
   * Number
   * @description A phone number to unassign. (e164-formatted)
   */
  number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UNASSIGN_USER_PHONE_NUMBER tool output.
 */
type DIALPAD_UNASSIGN_USER_PHONE_NUMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UNPARK_CALL_BY_USER_ID tool input.
 */
type DIALPAD_UNPARK_CALL_BY_USER_ID_INPUT = {
  /**
   * Id
   * @description The call"s id.
   */
  id?: number;
  /**
   * User Id
   * @description The id of the user who should unpark the call.
   */
  user_id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_UNPARK_CALL_BY_USER_ID tool output.
 */
type DIALPAD_UNPARK_CALL_BY_USER_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID tool input.
 */
type DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID_INPUT = {
  /**
   * Advanced  Settings  Auto  Call  Recording  Allow  Pause  Recording
   * @description Allow agents to stop/restart a recording during a call. Default is False.
   */
  advanced__settings__auto__call__recording__allow__pause__recording?: boolean;
  /**
   * Advanced  Settings  Auto  Call  Recording  Call  Recording  Inbound
   * @description Whether or not inbound calls to this call center get automatically recorded. Default is False.
   */
  advanced__settings__auto__call__recording__call__recording__inbound?: boolean;
  /**
   * Advanced  Settings  Auto  Call  Recording  Call  Recording  Outbound
   * @description Whether or not outbound calls from this call center get automatically recorded. Default is False.
   */
  advanced__settings__auto__call__recording__call__recording__outbound?: boolean;
  /**
   * Advanced  Settings  Max  Wrap  Up  Seconds
   * @description Include a post-call wrap-up time before agents can receive their next call. Default is 0.
   */
  advanced__settings__max__wrap__up__seconds?: number;
  /**
   * Alerts  Cc  Service  Level
   * @description Alert supervisors when the service level drops below how many percent. Default is 95%.
   */
  alerts__cc__service__level?: number;
  /**
   * Alerts  Cc  Service  Level  Seconds
   * @description Inbound calls should be answered within how many seconds. Default is 60.
   */
  alerts__cc__service__level__seconds?: number;
  /**
   * Friday Hours
   * @description The Friday hours of operation. Default value is ["08:00", "18:00"].
   */
  friday_hours?: string[];
  /**
   * Group Description
   * @description The description of the call center. Max 256 characters.
   */
  group_description?: string;
  /**
   * Hold  Queue  Allow  Queue  Callback
   * @description Whether or not to allow callers to request a callback. Default is False.
   */
  hold__queue__allow__queue__callback?: boolean;
  /**
   * Hold  Queue  Announce  Position
   * @description Whether or not to let callers know their place in the queue. This option is not available when a maximum queue wait time of less than 2 minutes is selected. Default is True.
   */
  hold__queue__announce__position?: boolean;
  /**
   * Hold  Queue  Announcement  Interval  Seconds
   * @description Hold announcement interval wait time. Default is 2 min.
   */
  hold__queue__announcement__interval__seconds?: number;
  /**
   * Hold  Queue  Max  Hold  Count
   * @description If all operators are busy on other calls, send callers to a hold queue. This is to specify your queue size. Choose from 1-1000. Default is 50.
   */
  hold__queue__max__hold__count?: number;
  /**
   * Hold  Queue  Max  Hold  Seconds
   * @description Maximum queue wait time in seconds. Choose from 30s to 18000s (3 hours). Default is 900s (15 min).
   */
  hold__queue__max__hold__seconds?: number;
  /**
   * Hold  Queue  Queue  Callback  Dtmf
   * @description Allow callers to request a callback when the queue has more than queue_callback_threshold number of calls by pressing one of the followings: [0,1,2,3,4,5,6,7,8,9,*,#]. Default is 9.
   */
  hold__queue__queue__callback__dtmf?: string;
  /**
   * Hold  Queue  Queue  Callback  Threshold
   * @description Allow callers to request a callback when the queue has more than this number of calls. Default is 5.
   */
  hold__queue__queue__callback__threshold?: number;
  /**
   * Hold  Queue  Queue  Escape  Dtmf
   * @description Allow callers to exit the hold queue to voicemail by pressing one of the followings: [0,1,2,3,4,5,6,7,8,9,*,#]. Default is *.
   */
  hold__queue__queue__escape__dtmf?: string;
  /**
   * Hold  Queue  Stay  In  Queue  After  Closing
   * @description Whether or not to allow existing calls to stay in queue after the call center has closed. Default is False.
   */
  hold__queue__stay__in__queue__after__closing?: boolean;
  /**
   * Hold  Queue  Unattended  Queue
   * @description Whether or not to allow callers to be placed in your hold queue when no agents are available. Default is False.
   */
  hold__queue__unattended__queue?: boolean;
  /**
   * Hours On
   * @description The time frame when the call center wants to receive calls. Default value is false, which means the call center will always take calls (24/7).
   */
  hours_on?: boolean;
  /**
   * Id
   * @description The call center"s id.
   */
  id?: number;
  /**
   * Monday Hours
   * @description The Monday hours of operation. To specify when hours_on is set to True. e.g. ["08:00", "12:00", "14:00", "18:00"] => open from 8AM to Noon, and from 2PM to 6PM. Default value is ["08:00", "18:00"].
   */
  monday_hours?: string[];
  /**
   * Name
   * @description [single-line only] The name of the call center. Max 100 characters.
   */
  name?: string;
  /**
   * Ring Seconds
   * @description The number of seconds to allow the group line to ring before going to voicemail. Choose from 10 seconds to 45 seconds. Default is 30 seconds.
   */
  ring_seconds?: number;
  /**
   * Routing  Options  Closed  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__closed__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Closed  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__closed__action__target__id?: number;
  /**
   * Routing  Options  Closed  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__closed__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Closed  Dtmf
   * @description DTMF menu options.
   */
  routing__options__closed__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Closed  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__closed__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Closed  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__closed__try__dial__operators?: boolean;
  /**
   * Routing  Options  Open  Action
   * @description The action that should be taken if no operators are available.
   * @enum {string}
   */
  routing__options__open__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
  /**
   * Routing  Options  Open  Action  Target  Id
   * @description The ID of the Target that inbound calls should be routed to.
   */
  routing__options__open__action__target__id?: number;
  /**
   * Routing  Options  Open  Action  Target  Type
   * @description The type of the Target that inbound calls should be routed to.
   * @enum {string}
   */
  routing__options__open__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Routing  Options  Open  Dtmf
   * @description DTMF menu options.
   */
  routing__options__open__dtmf?: {
      /**
       * Input
       * @description The DTMF key associated with this menu item. (0-9)
       */
      input?: string;
      /**
       * Options  Action
       * @description The routing action type.
       * @enum {string}
       */
      options__action?: "bridge_target" | "company_directory" | "department" | "directory" | "disabled" | "extension" | "menu" | "message" | "operator" | "person" | "scripted_ivr" | "voicemail";
      /**
       * Options  Action  Target  Id
       * @description The ID of the target that should be dialed.
       */
      options__action__target__id?: number;
      /**
       * Options  Action  Target  Type
       * @description The type of the target that should be dialed.
       * @enum {string}
       */
      options__action__target__type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "contact" | "contactgroup" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  }[];
  /**
   * Routing  Options  Open  Operator  Routing
   * @description The routing strategy that should be used when dialing operators.
   * @enum {string}
   */
  routing__options__open__operator__routing?: "fixedorder" | "longestidle" | "mostskilled" | "random" | "roundrobin" | "simultaneous";
  /**
   * Routing  Options  Open  Try  Dial  Operators
   * @description Whether operators should be dialed on inbound calls.
   */
  routing__options__open__try__dial__operators?: boolean;
  /**
   * Saturday Hours
   * @description The Saturday hours of operation. Default is empty array.
   */
  saturday_hours?: string[];
  /**
   * Sunday Hours
   * @description The Sunday hours of operation. Default is empty array.
   */
  sunday_hours?: string[];
  /**
   * Thursday Hours
   * @description The Thursday hours of operation. Default value is ["08:00", "18:00"].
   */
  thursday_hours?: string[];
  /**
   * Tuesday Hours
   * @description The Tuesday hours of operation. Default value is ["08:00", "18:00"].
   */
  tuesday_hours?: string[];
  /**
   * Voice  Intelligence  Allow  Pause
   * @description Allow individual users to start and stop Vi during calls. Default is True.
   */
  voice__intelligence__allow__pause?: boolean;
  /**
   * Voice  Intelligence  Auto  Start
   * @description Auto start Vi for this call center. Default is True.
   */
  voice__intelligence__auto__start?: boolean;
  /**
   * Wednesday Hours
   * @description The Wednesday hours of operation. Default value is ["08:00", "18:00"].
   */
  wednesday_hours?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID tool output.
 */
type DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY tool input.
 */
type DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY_INPUT = {
  /**
   * Id
   * @description The share link"s id.
   */
  id?: string;
  /**
   * Privacy
   * @description The privacy state of the recording share link
   * @enum {string}
   */
  privacy?: "company" | "public";
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY tool output.
 */
type DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID tool input.
 */
type DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Call States
   * @description The call event subscription"s list of call states.
   */
  call_states?: string[];
  /**
   * Enabled
   * @description Whether or not the call event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint, please provide a valid webhook ID here.
   */
  endpoint_id?: number;
  /**
   * Group Calls Only
   * @description Call event subscription for group calls only.
   */
  group_calls_only?: boolean;
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
  /**
   * Target Id
   * @description The ID of the specific target for which events should be sent.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The target type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID tool output.
 */
type DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CONTACT_INFORMATION tool input.
 */
type DIALPAD_UPDATE_CONTACT_INFORMATION_INPUT = {
  /**
   * Company Name
   * @description [single-line only] The contact"s company name.
   */
  company_name?: string;
  /**
   * Emails
   * @description The contact"s emails. The first email in the list is the contact"s primary email.
   */
  emails?: string[];
  /**
   * Extension
   * @description The contact"s extension number.
   */
  extension?: string;
  /**
   * First Name
   * @description [single-line only] The contact"s first name.
   */
  first_name?: string;
  /**
   * Job Title
   * @description [single-line only] The contact"s job title.
   */
  job_title?: string;
  /**
   * Last Name
   * @description [single-line only] The contact"s last name.
   */
  last_name?: string;
  /**
   * Phones
   * @description The contact"s phone numbers. The phone number must be in e164 format. The first number in the list is the contact"s primary phone.
   */
  phones?: string[];
  /**
   * Trunk Group
   * @description [Deprecated]
   */
  trunk_group?: string;
  /**
   * Uid
   * @description The unique id to be included as part of the contact"s generated id.
   */
  uid?: string;
  /**
   * Urls
   * @description A list of websites associated with or belonging to this contact.
   */
  urls?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CONTACT_INFORMATION tool output.
 */
type DIALPAD_UPDATE_CONTACT_INFORMATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID tool input.
 */
type DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID_INPUT = {
  /**
   * Contact Type
   * @description The contact type this event subscription subscribes to.
   * @enum {string}
   */
  contact_type?: "local" | "shared";
  /**
   * Enabled
   * @description Whether or not the contact event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint, please provide a valid webhook ID here.
   */
  endpoint_id?: number;
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID tool output.
 */
type DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE tool input.
 */
type DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE_INPUT = {
  /**
   * Address
   * @description [single-line only] Line 1 of the new E911 address.
   */
  address?: string;
  /**
   * Address2
   * @description [single-line only] Line 2 of the new E911 address.
   */
  address2?: string;
  /**
   * City
   * @description [single-line only] City of the new E911 address.
   */
  city?: string;
  /**
   * Country
   * @description Country of the new E911 address.
   */
  country?: string;
  /**
   * Id
   * @description The office"s id.
   */
  id?: number;
  /**
   * State
   * @description [single-line only] State or Province of the new E911 address.
   */
  state?: string;
  /**
   * Update All
   * @description Update E911 for all users in this office.
   */
  update_all?: boolean;
  /**
   * Use Validated Option
   * @description Whether to use the validated address option from our service.
   */
  use_validated_option?: boolean;
  /**
   * Zip
   * @description [single-line only] Zip code of the new E911 address.
   */
  zip?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE tool output.
 */
type DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_E911_ADDRESS_FOR_USER tool input.
 */
type DIALPAD_UPDATE_E911_ADDRESS_FOR_USER_INPUT = {
  /**
   * Address
   * @description [single-line only] Line 1 of the new E911 address.
   */
  address?: string;
  /**
   * Address2
   * @description [single-line only] Line 2 of the new E911 address.
   */
  address2?: string;
  /**
   * City
   * @description [single-line only] City of the new E911 address.
   */
  city?: string;
  /**
   * Country
   * @description Country of the new E911 address.
   */
  country?: string;
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: number;
  /**
   * State
   * @description [single-line only] State or Province of the new E911 address.
   */
  state?: string;
  /**
   * Use Validated Option
   * @description Whether to use the validated address option from our service.
   */
  use_validated_option?: boolean;
  /**
   * Zip
   * @description [single-line only] Zip of the new E911 address.
   */
  zip?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_E911_ADDRESS_FOR_USER tool output.
 */
type DIALPAD_UPDATE_E911_ADDRESS_FOR_USER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_IVR_DETAILS_BY_ID tool input.
 */
type DIALPAD_UPDATE_IVR_DETAILS_BY_ID_INPUT = {
  /**
   * Description
   * @description [single-line only] The description of the IVR.
   */
  description?: string;
  /**
   * Ivr Id
   * @description The ID of the custom ivr to be updated.
   */
  ivr_id?: string;
  /**
   * Name
   * @description [single-line only] The name of this IVR.
   */
  name?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_IVR_DETAILS_BY_ID tool output.
 */
type DIALPAD_UPDATE_IVR_DETAILS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_OPERATOR_DUTY_STATUS tool input.
 */
type DIALPAD_UPDATE_OPERATOR_DUTY_STATUS_INPUT = {
  /**
   * Duty Status Reason
   * @description [single-line only] A description of this status.
   */
  duty_status_reason?: string;
  /**
   * Id
   * @description The operator"s user id.
   */
  id?: number;
  /**
   * On Duty
   * @description True if this status message indicates an "on-duty" status.
   */
  on_duty?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_OPERATOR_DUTY_STATUS tool output.
 */
type DIALPAD_UPDATE_OPERATOR_DUTY_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY tool input.
 */
type DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY_INPUT = {
  /**
   * Id
   * @description The recording share link"s ID.
   */
  id?: string;
  /**
   * Privacy
   * @description The privacy state of the recording share link.
   * @enum {string}
   */
  privacy?: "admin" | "company" | "owner" | "public";
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY tool output.
 */
type DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_ROOM_DETAILS tool input.
 */
type DIALPAD_UPDATE_ROOM_DETAILS_INPUT = {
  /**
   * Id
   * @description The room"s id.
   */
  id?: number;
  /**
   * Name
   * @description [single-line only] The name of the room.
   */
  name?: string;
  /**
   * Phone Numbers
   * @description A list of all phone numbers assigned to the room. Numbers can be re-ordered or removed from this list to unassign them.
   */
  phone_numbers?: string[];
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_ROOM_DETAILS tool output.
 */
type DIALPAD_UPDATE_ROOM_DETAILS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS tool input.
 */
type DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS_INPUT = {
  /**
   * At
   * @description Hour of the day when the report will execute considering the frequency and timezones between 0 and 23  e.g. 10 will be 10:00 am.
   */
  at?: number;
  /**
   * Coaching Group
   * @description Whether the the statistics should be for trainees of the coach group with the given target_id.
   * @default false
   */
  coaching_group: boolean;
  /**
   * Enabled
   * @description Whether or not this schedule reports event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully.
   */
  endpoint_id?: number;
  /**
   * Frequency
   * @description How often the report will execute.
   * @enum {string}
   */
  frequency?: "daily" | "monthly" | "weekly";
  /**
   * Id
   * @description The schedule reports subscription"s ID.
   */
  id?: number;
  /**
   * Name
   * @description [single-line only] The name of the schedule reports.
   */
  name?: string;
  /**
   * On Day
   * @description The day of the week or month when the report will execute considering the frequency. daily=0, weekly=0-6, monthly=0-30.
   */
  on_day?: number;
  /**
   * Report Type
   * @description The type of report that will be generated.
   * @enum {string}
   */
  report_type?: "call_logs" | "daily_statistics" | "recordings" | "user_statistics" | "voicemails";
  /**
   * Target Id
   * @description The target"s id.
   */
  target_id?: number;
  /**
   * Target Type
   * @description Target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
  /**
   * Timezone
   * @description Timezone using a tz database name.
   */
  timezone?: string;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS tool output.
 */
type DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS tool input.
 */
type DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS_INPUT = {
  /**
   * Direction
   * @description The SMS direction this event subscription subscribes to.
   * @enum {string}
   */
  direction?: "all" | "inbound" | "outbound";
  /**
   * Enabled
   * @description Whether or not the SMS event subscription is enabled.
   * @default true
   */
  enabled: boolean;
  /**
   * Endpoint Id
   * @description The logging endpoint"s ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint, please provide a valid webhook ID here.
   */
  endpoint_id?: number;
  /**
   * Id
   * @description The event subscription"s ID, which is generated after creating an event subscription successfully.
   */
  id?: number;
  /**
   * Include Internal
   * @description Whether or not to trigger SMS events for SMS sent between two users from the same company.
   * @default false
   */
  include_internal: boolean;
  /**
   * Status
   * @description Whether or not to update on each SMS delivery status.
   * @default false
   */
  status: boolean;
  /**
   * Target Id
   * @description The ID of the specific target for which events should be sent.
   */
  target_id?: number;
  /**
   * Target Type
   * @description The target"s type.
   * @enum {string}
   */
  target_type?: "callcenter" | "callrouter" | "channel" | "coachinggroup" | "coachingteam" | "department" | "office" | "room" | "staffgroup" | "unknown" | "user";
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS tool output.
 */
type DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_USER_INFORMATION_BY_ID tool input.
 */
type DIALPAD_UPDATE_USER_INFORMATION_BY_ID_INPUT = {
  /**
   * Admin Office Ids
   * @description The list of admin office IDs. This is used to set the user as an office admin for the offices with the provided IDs.
   */
  admin_office_ids?: number[];
  /**
   * Emails
   * @description The user"s emails. This can be used to add, remove, or re-order emails. The first email in the list is the user"s primary email.
   */
  emails?: string[];
  /**
   * Extension
   * @description The user"s new extension number. Extensions are optional in Dialpad and turned off by default. If you want extensions please contact support to enable them.
   */
  extension?: string;
  /**
   * First Name
   * @description [single-line only] The user"s first name.
   */
  first_name?: string;
  /**
   * Forwarding Numbers
   * @description A list of phone numbers that should be dialed in addition to the user"s Dialpad number(s) upon receiving a call.
   */
  forwarding_numbers?: string[];
  /**
   * Id
   * @description The user"s id. ("me" can be used if you are using a user level API key)
   */
  id?: string;
  /**
   * Is Super Admin
   * @description Whether or not the user is a super admin. (company level administrator)
   */
  is_super_admin?: boolean;
  /**
   * Job Title
   * @description [single-line only] The user"s job title.
   */
  job_title?: string;
  /**
   * Keep Paid Numbers
   * @description Whether or not to keep phone numbers when switching to a support license. Note: Phone numbers require additional number licenses under a support license.
   * @default true
   */
  keep_paid_numbers: boolean;
  /**
   * Last Name
   * @description [single-line only] The user"s last name.
   */
  last_name?: string;
  /**
   * License
   * @description The user"s license type. Changing this affects billing for the user. For a Sell license, specify the type as `agents`. For a Support license, specify the type as `support`.
   * @enum {string}
   */
  license?: "admins" | "agents" | "dpde_all" | "dpde_one" | "lite_lines" | "lite_support_agents" | "magenta_lines" | "talk";
  /**
   * Office Id
   * @description The user"s office id. If provided, the user will be moved to this office. For international offices, the user must not have phone numbers assigned. Once the transfer is complete, your admin can add the phone numbers via the user assign number API. Only supported on paid accounts and there must be enough licenses to transfer the user to the destination office.
   */
  office_id?: number;
  /**
   * Phone Numbers
   * @description A list of the phone number(s) assigned to this user. This can be used to re-order or remove numbers. To assign a new number, use the assign number API instead.
   */
  phone_numbers?: string[];
  /**
   * Presence  Status  Message
   * @description The presence status message to be updated.
   */
  presence__status__message?: string;
  /**
   * Presence  Status  Provider
   * @description The provider requesting the presence status update.
   */
  presence__status__provider?: string;
  /**
   * Presence  Status  Type
   * @description Predefined templates will be only used for the supported types. Accepts the following types: - `default` -- status message template: "{provider}: {message}" - `conference` -- status message template: "On {provider}: in the {message} meeting" `provider` and `message` should be chosen with the message template in mind.
   * @enum {string}
   */
  presence__status__type?: "conference" | "default";
  /**
   * State
   * @description The user"s state. This is used to suspend or re-activate a user.
   * @enum {string}
   */
  state?: "active" | "suspended";
};

/**
 * Type of DIALPAD's DIALPAD_UPDATE_USER_INFORMATION_BY_ID tool output.
 */
type DIALPAD_UPDATE_USER_INFORMATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DIALPAD's DIALPAD_VALIDATE_CALLBACK_REQUEST tool input.
 */
type DIALPAD_VALIDATE_CALLBACK_REQUEST_INPUT = {
  /**
   * Call Center Id
   * @description The ID of a call center that will be used to fulfill the callback.
   */
  call_center_id?: number;
  /**
   * Phone Number
   * @description The e164-formatted number to call back
   */
  phone_number?: string;
};

/**
 * Type of DIALPAD's DIALPAD_VALIDATE_CALLBACK_REQUEST tool output.
 */
type DIALPAD_VALIDATE_CALLBACK_REQUEST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "DIALPAD".
 */
export type DIALPAD_TOOL_INPUTS = {
  ACCESS_CONTROL_POLICIES_LISTING: DIALPAD_ACCESS_CONTROL_POLICIES_LISTING_INPUT
  ADD_BLOCKED_PHONE_NUMBERS: DIALPAD_ADD_BLOCKED_PHONE_NUMBERS_INPUT
  ADD_DEPARTMENT_OPERATOR_BY_ID: DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID_INPUT
  ADD_MEMBER_TO_CHANNEL: DIALPAD_ADD_MEMBER_TO_CHANNEL_INPUT
  ADD_MEMBER_TO_COACHING_TEAM: DIALPAD_ADD_MEMBER_TO_COACHING_TEAM_INPUT
  ADD_OPERATOR_TO_CALL_CENTER: DIALPAD_ADD_OPERATOR_TO_CALL_CENTER_INPUT
  ADD_OPERATOR_TO_OFFICE: DIALPAD_ADD_OPERATOR_TO_OFFICE_INPUT
  ADD_PARTICIPANT_TO_CALL: DIALPAD_ADD_PARTICIPANT_TO_CALL_INPUT
  ASSIGN_FAX_LINE_TO_TARGET: DIALPAD_ASSIGN_FAX_LINE_TO_TARGET_INPUT
  ASSIGN_NUMBER_TO_CALL_ROUTER: DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER_INPUT
  ASSIGN_PHONE_NUMBER_TO_OFFICE: DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE_INPUT
  ASSIGN_PHONE_NUMBER_TO_ROOM: DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM_INPUT
  ASSIGN_PHONE_NUMBER_TO_TARGET: DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET_INPUT
  ASSIGN_PHONE_NUMBER_TO_USER: DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER_INPUT
  ASSIGN_POLICY_TO_USER_BY_ID: DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID_INPUT
  ATTACH_LABELS_TO_CALL: DIALPAD_ATTACH_LABELS_TO_CALL_INPUT
  CONFIGURE_CALL_CENTER_SETTINGS: DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS_INPUT
  CREATE_ACCESS_CONTROL_POLICY: DIALPAD_CREATE_ACCESS_CONTROL_POLICY_INPUT
  CREATE_AGENT_STATUS_SUBSCRIPTION: DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION_INPUT
  CREATE_CALLBACK: DIALPAD_CREATE_CALLBACK_INPUT
  CREATE_CALL_REVIEW_SHARE_LINK: DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK_INPUT
  CREATE_CALL_ROUTER_CONFIGURATION: DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION_INPUT
  CREATE_CHANNEL_ENDPOINT: DIALPAD_CREATE_CHANNEL_ENDPOINT_INPUT
  CREATE_CUSTOM_IVR_WITH_AUDIO_FILE: DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE_INPUT
  CREATE_NEW_CONTACT_ENTRY: DIALPAD_CREATE_NEW_CONTACT_ENTRY_INPUT
  CREATE_NEW_DEPARTMENT_RECORD: DIALPAD_CREATE_NEW_DEPARTMENT_RECORD_INPUT
  CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS: DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS_INPUT
  CREATE_ROOM_IN_OFFICE_VIA_POST: DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST_INPUT
  CREATE_SCHEDULE_REPORTS_ENDPOINT: DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT_INPUT
  CREATE_SECONDARY_OFFICE: DIALPAD_CREATE_SECONDARY_OFFICE_INPUT
  CREATE_SMS_EVENT_SUBSCRIPTION: DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION_INPUT
  CREATE_USER_WITH_AUTO_ASSIGN: DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN_INPUT
  CREATE_WEBHOOK_POST_ENDPOINT: DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT_INPUT
  DEAUTHORIZE_OAUTH2_SESSION: DIALPAD_DEAUTHORIZE_OAUTH2_SESSION_INPUT
  DELETE_ACCESS_CONTROL_POLICY_BY_ID: DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID_INPUT
  DELETE_AGENT_STATUS_BY_ID: DIALPAD_DELETE_AGENT_STATUS_BY_ID_INPUT
  DELETE_CALL_CENTER_BY_ID: DIALPAD_DELETE_CALL_CENTER_BY_ID_INPUT
  DELETE_CALL_REVIEW_SHARE_LINK_BY_ID: DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID_INPUT
  DELETE_CALL_ROUTER_BY_ID: DIALPAD_DELETE_CALL_ROUTER_BY_ID_INPUT
  DELETE_CALL_SUBSCRIPTION_BY_ID: DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID_INPUT
  DELETE_CHANNEL_BY_ID: DIALPAD_DELETE_CHANNEL_BY_ID_INPUT
  DELETE_CHANNEL_MEMBER_BY_ID: DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID_INPUT
  DELETE_CONTACT_BY_ID: DIALPAD_DELETE_CONTACT_BY_ID_INPUT
  DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE: DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE_INPUT
  DELETE_DEPARTMENT_RESOURCE: DIALPAD_DELETE_DEPARTMENT_RESOURCE_INPUT
  DELETE_DESKPHONE_BY_USER_ID: DIALPAD_DELETE_DESKPHONE_BY_USER_ID_INPUT
  DELETE_DESKPHONE_IN_ROOM: DIALPAD_DELETE_DESKPHONE_IN_ROOM_INPUT
  DELETE_NUMBER_VIA_API: DIALPAD_DELETE_NUMBER_VIA_API_INPUT
  DELETE_OFFICE_OPERATOR_BY_ID: DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID_INPUT
  DELETE_OPERATOR_FROM_CALL_CENTER: DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER_INPUT
  DELETE_OPERATOR_FROM_DEPARTMENT: DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT_INPUT
  DELETE_RECORDING_SHARE_LINK_BY_ID: DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID_INPUT
  DELETE_ROOM_BY_ID: DIALPAD_DELETE_ROOM_BY_ID_INPUT
  DELETE_SCHEDULE_REPORT_BY_ID: DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID_INPUT
  DELETE_SMS_SUBSCRIPTION_BY_ID: DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID_INPUT
  DELETE_SUBSCRIPTION_CHANGELOG_BY_ID: DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID_INPUT
  DELETE_SUBSCRIPTION_CONTACT_BY_ID: DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID_INPUT
  DELETE_USER_BY_ID: DIALPAD_DELETE_USER_BY_ID_INPUT
  DELETE_WEBHOOK_BY_ID: DIALPAD_DELETE_WEBHOOK_BY_ID_INPUT
  DELETE_WEBSOCKET_CONNECTION_BY_ID: DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID_INPUT
  FETCH_CALL_BY_ID: DIALPAD_FETCH_CALL_BY_ID_INPUT
  FETCH_CALL_TRANSCRIPT_BY_ID: DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID_INPUT
  FETCH_CUSTOM_IVRS: DIALPAD_FETCH_CUSTOM_IVRS_INPUT
  FETCH_OPERATORS_FOR_OFFICE_ID: DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID_INPUT
  FETCH_SCHEDULED_REPORTS: DIALPAD_FETCH_SCHEDULED_REPORTS_INPUT
  FETCH_TRANSCRIPT_URL_BY_CALL_ID: DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID_INPUT
  FETCH_USER_DETAILS_BY_ID: DIALPAD_FETCH_USER_DETAILS_BY_ID_INPUT
  FORMAT_PHONE_NUMBERS: DIALPAD_FORMAT_PHONE_NUMBERS_INPUT
  GET_AVAILABLE_LICENSES_FOR_AN_OFFICE: DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE_INPUT
  GET_CALL_CENTER_STATUS_BY_ID: DIALPAD_GET_CALL_CENTER_STATUS_BY_ID_INPUT
  GET_CALL_LABELS: DIALPAD_GET_CALL_LABELS_INPUT
  GET_CALL_REVIEW_SHARE_LINK_BY_ID: DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID_INPUT
  GET_CALL_SUBSCRIPTION_DETAILS: DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS_INPUT
  GET_CHANNEL_MEMBERS_BY_ID: DIALPAD_GET_CHANNEL_MEMBERS_BY_ID_INPUT
  GET_DEPARTMENTS_BY_OFFICE_ID: DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID_INPUT
  GET_DESKPHONES_FOR_USER_PARENT_ID: DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID_INPUT
  GET_DESKPHONES_IN_ROOMS: DIALPAD_GET_DESKPHONES_IN_ROOMS_INPUT
  GET_DESKPHONE_BY_PARENT_ID: DIALPAD_GET_DESKPHONE_BY_PARENT_ID_INPUT
  GET_OFFICE_CALL_CENTERS: DIALPAD_GET_OFFICE_CALL_CENTERS_INPUT
  GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER: DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER_INPUT
  GET_PHONE_NUMBER_DETAILS: DIALPAD_GET_PHONE_NUMBER_DETAILS_INPUT
  GET_RECORDING_SHARE_LINK_BY_ID: DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID_INPUT
  GET_ROOMS_LIST: DIALPAD_GET_ROOMS_LIST_INPUT
  GET_SUBSCRIPTION_CONTACT_BY_ID: DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID_INPUT
  GET_USER_CALLER_ID: DIALPAD_GET_USER_CALLER_ID_INPUT
  GET_USER_DESKPHONES: DIALPAD_GET_USER_DESKPHONES_INPUT
  GET_USER_E911_DETAILS: DIALPAD_GET_USER_E911_DETAILS_INPUT
  GET_WEBHOOKS_INFORMATION: DIALPAD_GET_WEBHOOKS_INFORMATION_INPUT
  HANGUP_CALL_VIA_ID: DIALPAD_HANGUP_CALL_VIA_ID_INPUT
  INITIATE_IVR_CALL_API_ENDPOINT: DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT_INPUT
  INITIATE_OUTBOUND_CALL_VIA_API: DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API_INPUT
  INITIATE_USER_CALL_WITH_GROUP_OPTIONS: DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS_INPUT
  LIST_CHANNELS_API: DIALPAD_LIST_CHANNELS_API_INPUT
  LIST_CONFERENCE_ROOMS: DIALPAD_LIST_CONFERENCE_ROOMS_INPUT
  LIST_OFFICES_ENDPOINT: DIALPAD_LIST_OFFICES_ENDPOINT_INPUT
  LIST_USERS: DIALPAD_LIST_USERS_INPUT
  MODIFY_CONTACT_DETAILS_USING_ID: DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID_INPUT
  MODIFY_CUSTOM_IVR_SETTINGS: DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS_INPUT
  MODIFY_OPERATOR_SKILL_LEVEL: DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL_INPUT
  MODIFY_WEBHOOK_CONFIGURATION: DIALPAD_MODIFY_WEBHOOK_CONFIGURATION_INPUT
  MOVE_USER_TO_SPECIFIED_OFFICE: DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE_INPUT
  OAUTH2_AUTHORIZE_ENDPOINT: DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT_INPUT
  PATCH_ACCESS_CONTROL_POLICY_BY_ID: DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID_INPUT
  PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION: DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION_INPUT
  PATCH_CALL_ROUTER_BY_ID: DIALPAD_PATCH_CALL_ROUTER_BY_ID_INPUT
  PATCH_DEPARTMENT_DETAILS_BY_ID: DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID_INPUT
  PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT: DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT_INPUT
  PATCH_USER_ACTIVE_CALL_RECORDING: DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING_INPUT
  PATCH_USER_STATUS: DIALPAD_PATCH_USER_STATUS_INPUT
  PATCH_WEBSOCKET_SIGNATURE_SECRET: DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET_INPUT
  POST_CALL_EVENT_SUBSCRIPTION: DIALPAD_POST_CALL_EVENT_SUBSCRIPTION_INPUT
  POST_RECORDING_SHARE_LINK: DIALPAD_POST_RECORDING_SHARE_LINK_INPUT
  POST_SUBSCRIPTION_CHANGE_LOG_EVENT: DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT_INPUT
  POST_USERS_SCREENPOP_URI: DIALPAD_POST_USERS_SCREENPOP_URI_INPUT
  POST_WEBSOCKET_CONNECTION_SECRET: DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET_INPUT
  REASSIGN_PHONE_NUMBER_TO_TARGET: DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET_INPUT
  REDEEM_ACCESS_OR_REFRESH_TOKEN: DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN_INPUT
  REMOVE_BLOCKED_NUMBERS: DIALPAD_REMOVE_BLOCKED_NUMBERS_INPUT
  RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS: DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS_INPUT
  RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID: DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID_INPUT
  RETRIEVE_AGENT_STATUS_BY_ID: DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID_INPUT
  RETRIEVE_AGENT_STATUS_SUBSCRIPTION: DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION_INPUT
  RETRIEVE_APP_SETTINGS: DIALPAD_RETRIEVE_APP_SETTINGS_INPUT
  RETRIEVE_BLOCKED_NUMBER_DETAILS: DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS_INPUT
  RETRIEVE_BLOCKED_PHONE_NUMBERS: DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS_INPUT
  RETRIEVE_CALLCENTER_OPERATORS_BY_ID: DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID_INPUT
  RETRIEVE_CALL_CENTERS_INFORMATION: DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION_INPUT
  RETRIEVE_CALL_CENTER_BY_ID: DIALPAD_RETRIEVE_CALL_CENTER_BY_ID_INPUT
  RETRIEVE_CALL_INFORMATION: DIALPAD_RETRIEVE_CALL_INFORMATION_INPUT
  RETRIEVE_CALL_ROUTERS_V2_API: DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API_INPUT
  RETRIEVE_CALL_ROUTER_BY_ID: DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID_INPUT
  RETRIEVE_CALL_SUBSCRIPTION_BY_ID: DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID_INPUT
  RETRIEVE_CHANNEL_BY_ID: DIALPAD_RETRIEVE_CHANNEL_BY_ID_INPUT
  RETRIEVE_COACHING_STATS_V2: DIALPAD_RETRIEVE_COACHING_STATS_V2_INPUT
  RETRIEVE_COACHING_TEAMS_INFORMATION: DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION_INPUT
  RETRIEVE_COACHING_TEAM_BY_ID: DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID_INPUT
  RETRIEVE_COMPANY_DATA: DIALPAD_RETRIEVE_COMPANY_DATA_INPUT
  RETRIEVE_CONFERENCE_MEETINGS: DIALPAD_RETRIEVE_CONFERENCE_MEETINGS_INPUT
  RETRIEVE_CONTACT_BY_ID: DIALPAD_RETRIEVE_CONTACT_BY_ID_INPUT
  RETRIEVE_CONTACT_LIST: DIALPAD_RETRIEVE_CONTACT_LIST_INPUT
  RETRIEVE_DEPARTMENT_BY_ID: DIALPAD_RETRIEVE_DEPARTMENT_BY_ID_INPUT
  RETRIEVE_DEPARTMENT_OPERATORS_BY_ID: DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID_INPUT
  RETRIEVE_E911_OFFICE_DETAILS: DIALPAD_RETRIEVE_E911_OFFICE_DETAILS_INPUT
  RETRIEVE_LIST_OF_DEPARTMENTS: DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS_INPUT
  RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID: DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID_INPUT
  RETRIEVE_NUMBERS_VIA_API_V2: DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2_INPUT
  RETRIEVE_OFFICE_BY_ID: DIALPAD_RETRIEVE_OFFICE_BY_ID_INPUT
  RETRIEVE_OFFICE_PLAN_BY_ID: DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID_INPUT
  RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID: DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID_INPUT
  RETRIEVE_OPERATOR_DUTY_STATUS: DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS_INPUT
  RETRIEVE_ROOM_INFORMATION_BY_ID: DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID_INPUT
  RETRIEVE_SCHEDULE_REPORT_BY_ID: DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID_INPUT
  RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID: DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID_INPUT
  RETRIEVE_SMS_SUBSCRIPTIONS: DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS_INPUT
  RETRIEVE_SMS_SUBSCRIPTION_BY_ID: DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID_INPUT
  RETRIEVE_SPECIFIC_WEBHOOK_BY_ID: DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID_INPUT
  RETRIEVE_STAT_BY_ID: DIALPAD_RETRIEVE_STAT_BY_ID_INPUT
  RETRIEVE_SUBSCRIPTION_CHANGE_LOG: DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_INPUT
  RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID: DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID_INPUT
  RETRIEVE_SUBSCRIPTION_CONTACTS: DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS_INPUT
  RETRIEVE_TEAMS_FOR_OFFICE_ID: DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID_INPUT
  RETRIEVE_USER_DEVICES_LIST: DIALPAD_RETRIEVE_USER_DEVICES_LIST_INPUT
  RETRIEVE_USER_DEVICE_BY_ID: DIALPAD_RETRIEVE_USER_DEVICE_BY_ID_INPUT
  RETRIEVE_USER_PERSONAS_BY_ID: DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID_INPUT
  RETRIEVE_WEBSOCKET_BY_ID: DIALPAD_RETRIEVE_WEBSOCKET_BY_ID_INPUT
  RETRIEVE_WEBSOCKET_CONNECTION: DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION_INPUT
  SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER: DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER_INPUT
  SET_USER_CALLER_ID_BY_ID: DIALPAD_SET_USER_CALLER_ID_BY_ID_INPUT
  SUBSCRIBE_CONTACT_EVENT: DIALPAD_SUBSCRIBE_CONTACT_EVENT_INPUT
  TOGGLE_USER_DO_NOT_DISTURB_STATUS: DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS_INPUT
  TOGGLE_VI_CALL_FOR_USER_BY_ID: DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID_INPUT
  TRANSFER_CALL_TO_DESTINATION: DIALPAD_TRANSFER_CALL_TO_DESTINATION_INPUT
  UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER: DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER_INPUT
  UNASSIGN_OFFICE_NUMBER: DIALPAD_UNASSIGN_OFFICE_NUMBER_INPUT
  UNASSIGN_ROOM_PHONE_NUMBER: DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER_INPUT
  UNASSIGN_USER_PHONE_NUMBER: DIALPAD_UNASSIGN_USER_PHONE_NUMBER_INPUT
  UNPARK_CALL_BY_USER_ID: DIALPAD_UNPARK_CALL_BY_USER_ID_INPUT
  UPDATE_CALL_CENTER_SETTINGS_BY_ID: DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID_INPUT
  UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY: DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY_INPUT
  UPDATE_CALL_SUBSCRIPTION_BY_ID: DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID_INPUT
  UPDATE_CONTACT_INFORMATION: DIALPAD_UPDATE_CONTACT_INFORMATION_INPUT
  UPDATE_CONTACT_SUBSCRIPTION_BY_ID: DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID_INPUT
  UPDATE_E911_ADDRESS_FOR_OFFICE: DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE_INPUT
  UPDATE_E911_ADDRESS_FOR_USER: DIALPAD_UPDATE_E911_ADDRESS_FOR_USER_INPUT
  UPDATE_IVR_DETAILS_BY_ID: DIALPAD_UPDATE_IVR_DETAILS_BY_ID_INPUT
  UPDATE_OPERATOR_DUTY_STATUS: DIALPAD_UPDATE_OPERATOR_DUTY_STATUS_INPUT
  UPDATE_RECORDING_SHARE_LINK_PRIVACY: DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY_INPUT
  UPDATE_ROOM_DETAILS: DIALPAD_UPDATE_ROOM_DETAILS_INPUT
  UPDATE_SCHEDULE_REPORT_SETTINGS: DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS_INPUT
  UPDATE_SMS_SUBSCRIPTION_SETTINGS: DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS_INPUT
  UPDATE_USER_INFORMATION_BY_ID: DIALPAD_UPDATE_USER_INFORMATION_BY_ID_INPUT
  VALIDATE_CALLBACK_REQUEST: DIALPAD_VALIDATE_CALLBACK_REQUEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DIALPAD".
 */
export type DIALPAD_TOOL_OUTPUTS = {
  ACCESS_CONTROL_POLICIES_LISTING: DIALPAD_ACCESS_CONTROL_POLICIES_LISTING_OUTPUT
  ADD_BLOCKED_PHONE_NUMBERS: DIALPAD_ADD_BLOCKED_PHONE_NUMBERS_OUTPUT
  ADD_DEPARTMENT_OPERATOR_BY_ID: DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID_OUTPUT
  ADD_MEMBER_TO_CHANNEL: DIALPAD_ADD_MEMBER_TO_CHANNEL_OUTPUT
  ADD_MEMBER_TO_COACHING_TEAM: DIALPAD_ADD_MEMBER_TO_COACHING_TEAM_OUTPUT
  ADD_OPERATOR_TO_CALL_CENTER: DIALPAD_ADD_OPERATOR_TO_CALL_CENTER_OUTPUT
  ADD_OPERATOR_TO_OFFICE: DIALPAD_ADD_OPERATOR_TO_OFFICE_OUTPUT
  ADD_PARTICIPANT_TO_CALL: DIALPAD_ADD_PARTICIPANT_TO_CALL_OUTPUT
  ASSIGN_FAX_LINE_TO_TARGET: DIALPAD_ASSIGN_FAX_LINE_TO_TARGET_OUTPUT
  ASSIGN_NUMBER_TO_CALL_ROUTER: DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER_OUTPUT
  ASSIGN_PHONE_NUMBER_TO_OFFICE: DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE_OUTPUT
  ASSIGN_PHONE_NUMBER_TO_ROOM: DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM_OUTPUT
  ASSIGN_PHONE_NUMBER_TO_TARGET: DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET_OUTPUT
  ASSIGN_PHONE_NUMBER_TO_USER: DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER_OUTPUT
  ASSIGN_POLICY_TO_USER_BY_ID: DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID_OUTPUT
  ATTACH_LABELS_TO_CALL: DIALPAD_ATTACH_LABELS_TO_CALL_OUTPUT
  CONFIGURE_CALL_CENTER_SETTINGS: DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS_OUTPUT
  CREATE_ACCESS_CONTROL_POLICY: DIALPAD_CREATE_ACCESS_CONTROL_POLICY_OUTPUT
  CREATE_AGENT_STATUS_SUBSCRIPTION: DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION_OUTPUT
  CREATE_CALLBACK: DIALPAD_CREATE_CALLBACK_OUTPUT
  CREATE_CALL_REVIEW_SHARE_LINK: DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK_OUTPUT
  CREATE_CALL_ROUTER_CONFIGURATION: DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION_OUTPUT
  CREATE_CHANNEL_ENDPOINT: DIALPAD_CREATE_CHANNEL_ENDPOINT_OUTPUT
  CREATE_CUSTOM_IVR_WITH_AUDIO_FILE: DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE_OUTPUT
  CREATE_NEW_CONTACT_ENTRY: DIALPAD_CREATE_NEW_CONTACT_ENTRY_OUTPUT
  CREATE_NEW_DEPARTMENT_RECORD: DIALPAD_CREATE_NEW_DEPARTMENT_RECORD_OUTPUT
  CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS: DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS_OUTPUT
  CREATE_ROOM_IN_OFFICE_VIA_POST: DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST_OUTPUT
  CREATE_SCHEDULE_REPORTS_ENDPOINT: DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT_OUTPUT
  CREATE_SECONDARY_OFFICE: DIALPAD_CREATE_SECONDARY_OFFICE_OUTPUT
  CREATE_SMS_EVENT_SUBSCRIPTION: DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION_OUTPUT
  CREATE_USER_WITH_AUTO_ASSIGN: DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN_OUTPUT
  CREATE_WEBHOOK_POST_ENDPOINT: DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT_OUTPUT
  DEAUTHORIZE_OAUTH2_SESSION: DIALPAD_DEAUTHORIZE_OAUTH2_SESSION_OUTPUT
  DELETE_ACCESS_CONTROL_POLICY_BY_ID: DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID_OUTPUT
  DELETE_AGENT_STATUS_BY_ID: DIALPAD_DELETE_AGENT_STATUS_BY_ID_OUTPUT
  DELETE_CALL_CENTER_BY_ID: DIALPAD_DELETE_CALL_CENTER_BY_ID_OUTPUT
  DELETE_CALL_REVIEW_SHARE_LINK_BY_ID: DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID_OUTPUT
  DELETE_CALL_ROUTER_BY_ID: DIALPAD_DELETE_CALL_ROUTER_BY_ID_OUTPUT
  DELETE_CALL_SUBSCRIPTION_BY_ID: DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID_OUTPUT
  DELETE_CHANNEL_BY_ID: DIALPAD_DELETE_CHANNEL_BY_ID_OUTPUT
  DELETE_CHANNEL_MEMBER_BY_ID: DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID_OUTPUT
  DELETE_CONTACT_BY_ID: DIALPAD_DELETE_CONTACT_BY_ID_OUTPUT
  DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE: DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE_OUTPUT
  DELETE_DEPARTMENT_RESOURCE: DIALPAD_DELETE_DEPARTMENT_RESOURCE_OUTPUT
  DELETE_DESKPHONE_BY_USER_ID: DIALPAD_DELETE_DESKPHONE_BY_USER_ID_OUTPUT
  DELETE_DESKPHONE_IN_ROOM: DIALPAD_DELETE_DESKPHONE_IN_ROOM_OUTPUT
  DELETE_NUMBER_VIA_API: DIALPAD_DELETE_NUMBER_VIA_API_OUTPUT
  DELETE_OFFICE_OPERATOR_BY_ID: DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID_OUTPUT
  DELETE_OPERATOR_FROM_CALL_CENTER: DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER_OUTPUT
  DELETE_OPERATOR_FROM_DEPARTMENT: DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT_OUTPUT
  DELETE_RECORDING_SHARE_LINK_BY_ID: DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID_OUTPUT
  DELETE_ROOM_BY_ID: DIALPAD_DELETE_ROOM_BY_ID_OUTPUT
  DELETE_SCHEDULE_REPORT_BY_ID: DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID_OUTPUT
  DELETE_SMS_SUBSCRIPTION_BY_ID: DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID_OUTPUT
  DELETE_SUBSCRIPTION_CHANGELOG_BY_ID: DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID_OUTPUT
  DELETE_SUBSCRIPTION_CONTACT_BY_ID: DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID_OUTPUT
  DELETE_USER_BY_ID: DIALPAD_DELETE_USER_BY_ID_OUTPUT
  DELETE_WEBHOOK_BY_ID: DIALPAD_DELETE_WEBHOOK_BY_ID_OUTPUT
  DELETE_WEBSOCKET_CONNECTION_BY_ID: DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID_OUTPUT
  FETCH_CALL_BY_ID: DIALPAD_FETCH_CALL_BY_ID_OUTPUT
  FETCH_CALL_TRANSCRIPT_BY_ID: DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID_OUTPUT
  FETCH_CUSTOM_IVRS: DIALPAD_FETCH_CUSTOM_IVRS_OUTPUT
  FETCH_OPERATORS_FOR_OFFICE_ID: DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID_OUTPUT
  FETCH_SCHEDULED_REPORTS: DIALPAD_FETCH_SCHEDULED_REPORTS_OUTPUT
  FETCH_TRANSCRIPT_URL_BY_CALL_ID: DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID_OUTPUT
  FETCH_USER_DETAILS_BY_ID: DIALPAD_FETCH_USER_DETAILS_BY_ID_OUTPUT
  FORMAT_PHONE_NUMBERS: DIALPAD_FORMAT_PHONE_NUMBERS_OUTPUT
  GET_AVAILABLE_LICENSES_FOR_AN_OFFICE: DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE_OUTPUT
  GET_CALL_CENTER_STATUS_BY_ID: DIALPAD_GET_CALL_CENTER_STATUS_BY_ID_OUTPUT
  GET_CALL_LABELS: DIALPAD_GET_CALL_LABELS_OUTPUT
  GET_CALL_REVIEW_SHARE_LINK_BY_ID: DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID_OUTPUT
  GET_CALL_SUBSCRIPTION_DETAILS: DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS_OUTPUT
  GET_CHANNEL_MEMBERS_BY_ID: DIALPAD_GET_CHANNEL_MEMBERS_BY_ID_OUTPUT
  GET_DEPARTMENTS_BY_OFFICE_ID: DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID_OUTPUT
  GET_DESKPHONES_FOR_USER_PARENT_ID: DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID_OUTPUT
  GET_DESKPHONES_IN_ROOMS: DIALPAD_GET_DESKPHONES_IN_ROOMS_OUTPUT
  GET_DESKPHONE_BY_PARENT_ID: DIALPAD_GET_DESKPHONE_BY_PARENT_ID_OUTPUT
  GET_OFFICE_CALL_CENTERS: DIALPAD_GET_OFFICE_CALL_CENTERS_OUTPUT
  GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER: DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER_OUTPUT
  GET_PHONE_NUMBER_DETAILS: DIALPAD_GET_PHONE_NUMBER_DETAILS_OUTPUT
  GET_RECORDING_SHARE_LINK_BY_ID: DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID_OUTPUT
  GET_ROOMS_LIST: DIALPAD_GET_ROOMS_LIST_OUTPUT
  GET_SUBSCRIPTION_CONTACT_BY_ID: DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID_OUTPUT
  GET_USER_CALLER_ID: DIALPAD_GET_USER_CALLER_ID_OUTPUT
  GET_USER_DESKPHONES: DIALPAD_GET_USER_DESKPHONES_OUTPUT
  GET_USER_E911_DETAILS: DIALPAD_GET_USER_E911_DETAILS_OUTPUT
  GET_WEBHOOKS_INFORMATION: DIALPAD_GET_WEBHOOKS_INFORMATION_OUTPUT
  HANGUP_CALL_VIA_ID: DIALPAD_HANGUP_CALL_VIA_ID_OUTPUT
  INITIATE_IVR_CALL_API_ENDPOINT: DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT_OUTPUT
  INITIATE_OUTBOUND_CALL_VIA_API: DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API_OUTPUT
  INITIATE_USER_CALL_WITH_GROUP_OPTIONS: DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS_OUTPUT
  LIST_CHANNELS_API: DIALPAD_LIST_CHANNELS_API_OUTPUT
  LIST_CONFERENCE_ROOMS: DIALPAD_LIST_CONFERENCE_ROOMS_OUTPUT
  LIST_OFFICES_ENDPOINT: DIALPAD_LIST_OFFICES_ENDPOINT_OUTPUT
  LIST_USERS: DIALPAD_LIST_USERS_OUTPUT
  MODIFY_CONTACT_DETAILS_USING_ID: DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID_OUTPUT
  MODIFY_CUSTOM_IVR_SETTINGS: DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS_OUTPUT
  MODIFY_OPERATOR_SKILL_LEVEL: DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL_OUTPUT
  MODIFY_WEBHOOK_CONFIGURATION: DIALPAD_MODIFY_WEBHOOK_CONFIGURATION_OUTPUT
  MOVE_USER_TO_SPECIFIED_OFFICE: DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE_OUTPUT
  OAUTH2_AUTHORIZE_ENDPOINT: DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT_OUTPUT
  PATCH_ACCESS_CONTROL_POLICY_BY_ID: DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID_OUTPUT
  PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION: DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION_OUTPUT
  PATCH_CALL_ROUTER_BY_ID: DIALPAD_PATCH_CALL_ROUTER_BY_ID_OUTPUT
  PATCH_DEPARTMENT_DETAILS_BY_ID: DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID_OUTPUT
  PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT: DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT_OUTPUT
  PATCH_USER_ACTIVE_CALL_RECORDING: DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING_OUTPUT
  PATCH_USER_STATUS: DIALPAD_PATCH_USER_STATUS_OUTPUT
  PATCH_WEBSOCKET_SIGNATURE_SECRET: DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET_OUTPUT
  POST_CALL_EVENT_SUBSCRIPTION: DIALPAD_POST_CALL_EVENT_SUBSCRIPTION_OUTPUT
  POST_RECORDING_SHARE_LINK: DIALPAD_POST_RECORDING_SHARE_LINK_OUTPUT
  POST_SUBSCRIPTION_CHANGE_LOG_EVENT: DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT_OUTPUT
  POST_USERS_SCREENPOP_URI: DIALPAD_POST_USERS_SCREENPOP_URI_OUTPUT
  POST_WEBSOCKET_CONNECTION_SECRET: DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET_OUTPUT
  REASSIGN_PHONE_NUMBER_TO_TARGET: DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET_OUTPUT
  REDEEM_ACCESS_OR_REFRESH_TOKEN: DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN_OUTPUT
  REMOVE_BLOCKED_NUMBERS: DIALPAD_REMOVE_BLOCKED_NUMBERS_OUTPUT
  RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS: DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS_OUTPUT
  RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID: DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID_OUTPUT
  RETRIEVE_AGENT_STATUS_BY_ID: DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID_OUTPUT
  RETRIEVE_AGENT_STATUS_SUBSCRIPTION: DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION_OUTPUT
  RETRIEVE_APP_SETTINGS: DIALPAD_RETRIEVE_APP_SETTINGS_OUTPUT
  RETRIEVE_BLOCKED_NUMBER_DETAILS: DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS_OUTPUT
  RETRIEVE_BLOCKED_PHONE_NUMBERS: DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS_OUTPUT
  RETRIEVE_CALLCENTER_OPERATORS_BY_ID: DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID_OUTPUT
  RETRIEVE_CALL_CENTERS_INFORMATION: DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION_OUTPUT
  RETRIEVE_CALL_CENTER_BY_ID: DIALPAD_RETRIEVE_CALL_CENTER_BY_ID_OUTPUT
  RETRIEVE_CALL_INFORMATION: DIALPAD_RETRIEVE_CALL_INFORMATION_OUTPUT
  RETRIEVE_CALL_ROUTERS_V2_API: DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API_OUTPUT
  RETRIEVE_CALL_ROUTER_BY_ID: DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID_OUTPUT
  RETRIEVE_CALL_SUBSCRIPTION_BY_ID: DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID_OUTPUT
  RETRIEVE_CHANNEL_BY_ID: DIALPAD_RETRIEVE_CHANNEL_BY_ID_OUTPUT
  RETRIEVE_COACHING_STATS_V2: DIALPAD_RETRIEVE_COACHING_STATS_V2_OUTPUT
  RETRIEVE_COACHING_TEAMS_INFORMATION: DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION_OUTPUT
  RETRIEVE_COACHING_TEAM_BY_ID: DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID_OUTPUT
  RETRIEVE_COMPANY_DATA: DIALPAD_RETRIEVE_COMPANY_DATA_OUTPUT
  RETRIEVE_CONFERENCE_MEETINGS: DIALPAD_RETRIEVE_CONFERENCE_MEETINGS_OUTPUT
  RETRIEVE_CONTACT_BY_ID: DIALPAD_RETRIEVE_CONTACT_BY_ID_OUTPUT
  RETRIEVE_CONTACT_LIST: DIALPAD_RETRIEVE_CONTACT_LIST_OUTPUT
  RETRIEVE_DEPARTMENT_BY_ID: DIALPAD_RETRIEVE_DEPARTMENT_BY_ID_OUTPUT
  RETRIEVE_DEPARTMENT_OPERATORS_BY_ID: DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID_OUTPUT
  RETRIEVE_E911_OFFICE_DETAILS: DIALPAD_RETRIEVE_E911_OFFICE_DETAILS_OUTPUT
  RETRIEVE_LIST_OF_DEPARTMENTS: DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS_OUTPUT
  RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID: DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID_OUTPUT
  RETRIEVE_NUMBERS_VIA_API_V2: DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2_OUTPUT
  RETRIEVE_OFFICE_BY_ID: DIALPAD_RETRIEVE_OFFICE_BY_ID_OUTPUT
  RETRIEVE_OFFICE_PLAN_BY_ID: DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID_OUTPUT
  RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID: DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID_OUTPUT
  RETRIEVE_OPERATOR_DUTY_STATUS: DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS_OUTPUT
  RETRIEVE_ROOM_INFORMATION_BY_ID: DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID_OUTPUT
  RETRIEVE_SCHEDULE_REPORT_BY_ID: DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID_OUTPUT
  RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID: DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID_OUTPUT
  RETRIEVE_SMS_SUBSCRIPTIONS: DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS_OUTPUT
  RETRIEVE_SMS_SUBSCRIPTION_BY_ID: DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID_OUTPUT
  RETRIEVE_SPECIFIC_WEBHOOK_BY_ID: DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID_OUTPUT
  RETRIEVE_STAT_BY_ID: DIALPAD_RETRIEVE_STAT_BY_ID_OUTPUT
  RETRIEVE_SUBSCRIPTION_CHANGE_LOG: DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_OUTPUT
  RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID: DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID_OUTPUT
  RETRIEVE_SUBSCRIPTION_CONTACTS: DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS_OUTPUT
  RETRIEVE_TEAMS_FOR_OFFICE_ID: DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID_OUTPUT
  RETRIEVE_USER_DEVICES_LIST: DIALPAD_RETRIEVE_USER_DEVICES_LIST_OUTPUT
  RETRIEVE_USER_DEVICE_BY_ID: DIALPAD_RETRIEVE_USER_DEVICE_BY_ID_OUTPUT
  RETRIEVE_USER_PERSONAS_BY_ID: DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID_OUTPUT
  RETRIEVE_WEBSOCKET_BY_ID: DIALPAD_RETRIEVE_WEBSOCKET_BY_ID_OUTPUT
  RETRIEVE_WEBSOCKET_CONNECTION: DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION_OUTPUT
  SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER: DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER_OUTPUT
  SET_USER_CALLER_ID_BY_ID: DIALPAD_SET_USER_CALLER_ID_BY_ID_OUTPUT
  SUBSCRIBE_CONTACT_EVENT: DIALPAD_SUBSCRIBE_CONTACT_EVENT_OUTPUT
  TOGGLE_USER_DO_NOT_DISTURB_STATUS: DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS_OUTPUT
  TOGGLE_VI_CALL_FOR_USER_BY_ID: DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID_OUTPUT
  TRANSFER_CALL_TO_DESTINATION: DIALPAD_TRANSFER_CALL_TO_DESTINATION_OUTPUT
  UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER: DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER_OUTPUT
  UNASSIGN_OFFICE_NUMBER: DIALPAD_UNASSIGN_OFFICE_NUMBER_OUTPUT
  UNASSIGN_ROOM_PHONE_NUMBER: DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER_OUTPUT
  UNASSIGN_USER_PHONE_NUMBER: DIALPAD_UNASSIGN_USER_PHONE_NUMBER_OUTPUT
  UNPARK_CALL_BY_USER_ID: DIALPAD_UNPARK_CALL_BY_USER_ID_OUTPUT
  UPDATE_CALL_CENTER_SETTINGS_BY_ID: DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID_OUTPUT
  UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY: DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY_OUTPUT
  UPDATE_CALL_SUBSCRIPTION_BY_ID: DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID_OUTPUT
  UPDATE_CONTACT_INFORMATION: DIALPAD_UPDATE_CONTACT_INFORMATION_OUTPUT
  UPDATE_CONTACT_SUBSCRIPTION_BY_ID: DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID_OUTPUT
  UPDATE_E911_ADDRESS_FOR_OFFICE: DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE_OUTPUT
  UPDATE_E911_ADDRESS_FOR_USER: DIALPAD_UPDATE_E911_ADDRESS_FOR_USER_OUTPUT
  UPDATE_IVR_DETAILS_BY_ID: DIALPAD_UPDATE_IVR_DETAILS_BY_ID_OUTPUT
  UPDATE_OPERATOR_DUTY_STATUS: DIALPAD_UPDATE_OPERATOR_DUTY_STATUS_OUTPUT
  UPDATE_RECORDING_SHARE_LINK_PRIVACY: DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY_OUTPUT
  UPDATE_ROOM_DETAILS: DIALPAD_UPDATE_ROOM_DETAILS_OUTPUT
  UPDATE_SCHEDULE_REPORT_SETTINGS: DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS_OUTPUT
  UPDATE_SMS_SUBSCRIPTION_SETTINGS: DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS_OUTPUT
  UPDATE_USER_INFORMATION_BY_ID: DIALPAD_UPDATE_USER_INFORMATION_BY_ID_OUTPUT
  VALIDATE_CALLBACK_REQUEST: DIALPAD_VALIDATE_CALLBACK_REQUEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DIALPAD toolkit.
 */
export const DIALPAD = {
  slug: "dialpad",
  tools: {
    /**
     * Retrieves a list of access control policies for the authenticated dialpad company. this endpoint allows company administrators to view all custom sets of permissions defined for ai contact center settings. it should be used when auditing existing policies, preparing to assign roles to users, or before creating new policies to avoid duplication. the endpoint provides an overview of all policies but does not include detailed permission sets for each policy. for specific policy details, a separate api call may be required.
     */
    ACCESS_CONTROL_POLICIES_LISTING: "DIALPAD_ACCESS_CONTROL_POLICIES_LISTING",
    /**
     * Adds specified phone numbers to the blocked list in dialpad. this endpoint allows users to block unwanted or spam numbers, preventing incoming calls or messages from these numbers. it accepts a list of e.164 formatted phone numbers and adds them to the user's blocked list. this tool should be used when there's a need to block multiple phone numbers at once, enhancing the platform's call and message filtering capabilities. it's particularly useful for maintaining communication hygiene and reducing unwanted interactions. note that this operation is additive; it doesn't replace the existing blocked list but appends to it.
     */
    ADD_BLOCKED_PHONE_NUMBERS: "DIALPAD_ADD_BLOCKED_PHONE_NUMBERS",
    /**
     * Adds a new operator to a specific department in dialpad. this endpoint allows you to assign either a user or a room as an operator, with the option to specify their role. it's used to manage call handling and department operations by adding new operators or updating existing ones with different roles. the department id is specified in the url path. use this when setting up new departments, expanding existing ones, or adjusting operator assignments and roles within a department.
     */
    ADD_DEPARTMENT_OPERATOR_BY_ID: "DIALPAD_ADD_DEPARTMENT_OPERATOR_BY_ID",
    /**
     * Adds a new member to a specified channel within the dialpad communication platform. this endpoint allows you to expand the membership of a channel by providing the user id of the person you want to add. it's particularly useful for programmatically managing channel memberships, such as when onboarding new team members or reorganizing communication structures. the endpoint should be used when you need to include a user in a channel's conversations and collaborations. note that this operation only adds the user to the channel; it does not create new users or channels. ensure that both the channel id (specified in the url) and the user id (provided in the request body) exist in your dialpad organization before making this call.
     */
    ADD_MEMBER_TO_CHANNEL: "DIALPAD_ADD_MEMBER_TO_CHANNEL",
    /**
     * Adds a new member to a specific coaching team in dialpad. this endpoint allows you to assign a user to a coaching team with a designated role, enabling effective team management and performance monitoring. use this when you need to include a new coach or trainee in an existing coaching team. the endpoint requires the coaching team id in the url path and the member details in the request body. it's particularly useful for setting up or expanding coaching teams for call center training and quality assurance purposes.
     */
    ADD_MEMBER_TO_COACHING_TEAM: "DIALPAD_ADD_MEMBER_TO_COACHING_TEAM",
    /**
     * This endpoint adds a new operator to a specified call center in the dialpad system. it allows for the configuration of the operator's role, skill level, and license type, as well as managing phone number retention when switching to a support license. use this endpoint when you need to expand your call center team or adjust an existing user's role within the call center. the endpoint is particularly useful for setting up new operators with specific skill levels and roles, which can help in optimizing call routing and management within the call center. note that while adding an operator, careful consideration should be given to the license type and role assigned, as these affect the operator's capabilities and the associated costs.
     */
    ADD_OPERATOR_TO_CALL_CENTER: "DIALPAD_ADD_OPERATOR_TO_CALL_CENTER",
    /**
     * This endpoint adds a new operator to a specific office within the dialpad system. it allows administrators to assign users or rooms as operators, enhancing the office's communication capabilities. the endpoint requires the office id (specified in the path), the operator's id, and the type of operator (user or room). optionally, the role of the new operator can be set to either standard operator or admin. use this endpoint when you need to expand or modify the operator team for a particular office, ensuring efficient call handling and management within the dialpad platform.
     */
    ADD_OPERATOR_TO_OFFICE: "DIALPAD_ADD_OPERATOR_TO_OFFICE",
    /**
     * Adds a new participant to an existing call in the dialpad system. this endpoint allows you to include additional members in an ongoing call by specifying either a phone number or a target within your dialpad organization. use this when you need to add someone to a call that is already in progress, such as bringing in an expert or including a manager in a customer service call. the endpoint requires the id of the existing call and the details of the new participant. it's important to note that the target, if used, must have a primary number assigned in the dialpad system.
     */
    ADD_PARTICIPANT_TO_CALL: "DIALPAD_ADD_PARTICIPANT_TO_CALL",
    /**
     * Creates and assigns a new fax line to a specified target (user or department) in the dialpad system. this endpoint allows you to set up a fax line with various options, including reserved numbers, area code-based searches, or toll-free numbers. use this when you need to provision a new fax line for a user or department, or when you want to assign an existing number as a fax line. the endpoint is flexible, allowing for different types of fax line assignments based on your specific needs and available numbers. note that the assignment process is immediate, and the fax line will be ready for use once the api call is successful. however, this endpoint does not handle the actual sending or receiving of faxes; it only sets up the line for future use.
     */
    ASSIGN_FAX_LINE_TO_TARGET: "DIALPAD_ASSIGN_FAX_LINE_TO_TARGET",
    /**
     * This endpoint assigns a phone number to a specific call router in the dialpad system. it allows users to either provide a full phone number for assignment or specify an area code to automatically select an available number within that region. the assigned number can optionally be set as the primary number for the call router. this functionality is crucial for setting up and managing call routing within an organization, enabling efficient distribution of incoming calls to the appropriate departments or individuals.
     */
    ASSIGN_NUMBER_TO_CALL_ROUTER: "DIALPAD_ASSIGN_NUMBER_TO_CALL_ROUTER",
    /**
     * This endpoint assigns a phone number to a specific office in the dialpad system. it allows you to either specify a particular phone number or request an available number from a given area code. the assigned number can optionally be set as the primary number for the office. use this endpoint when you need to add a new phone number to an office or change the office's primary number. it's particularly useful for setting up new offices or modifying existing office phone configurations. note that this endpoint does not handle number porting or releasing existing numbers; it's specifically for assigning available numbers within the dialpad system.
     */
    ASSIGN_PHONE_NUMBER_TO_OFFICE: "DIALPAD_ASSIGN_PHONE_NUMBER_TO_OFFICE",
    /**
     * Assigns a phone number to a specified room in dialpad. this endpoint allows you to either assign a specific phone number or request a number from a given area code. it's useful for setting up new rooms or updating existing ones with additional or primary phone numbers. the assigned number can optionally be set as the primary number for the room. use this endpoint when you need to manage phone number assignments for dialpad rooms programmatically.
     */
    ASSIGN_PHONE_NUMBER_TO_ROOM: "DIALPAD_ASSIGN_PHONE_NUMBER_TO_ROOM",
    /**
     * Assigns a phone number to a specified target within the dialpad system. this endpoint allows you to either assign a specific number or request a number from a given area code. it can be used to add new numbers to various entities such as users, departments, or call centers. the assigned number can optionally be set as the primary number for the target. this tool is particularly useful for managing phone number assignments across different parts of your dialpad organization, enabling flexible number allocation and management.
     */
    ASSIGN_PHONE_NUMBER_TO_TARGET: "DIALPAD_ASSIGN_PHONE_NUMBER_TO_TARGET",
    /**
     * This endpoint assigns a phone number to a specific dialpad user. it allows for either searching for an available number within a given area code or assigning a specific number to the user. the assigned number can optionally be set as the user's primary number. use this endpoint when you need to provide a user with a new phone number or add an additional number to their account. it's particularly useful for setting up new users or expanding the communication capabilities of existing users. note that this endpoint doesn't handle number porting or transferring existing numbers between users.
     */
    ASSIGN_PHONE_NUMBER_TO_USER: "DIALPAD_ASSIGN_PHONE_NUMBER_TO_USER",
    /**
     * Assigns an access control policy to a specific user within the dialpad system. this endpoint allows administrators to grant customized settings permissions to users at various levels of the organization: company-wide, for specific offices, or for contact centers. it's particularly useful for implementing role-based access control (rbac) and managing user permissions across different parts of the dialpad platform. the endpoint should be used when setting up new users, modifying existing user permissions, or implementing changes in the organizational structure that require updates to access control policies. note that this feature is part of an early adopter program and may be subject to changes or limitations.
     */
    ASSIGN_POLICY_TO_USER_BY_ID: "DIALPAD_ASSIGN_POLICY_TO_USER_BY_ID",
    /**
     * Creates or updates labels for a specific call in the dialpad system. this endpoint allows you to attach one or more labels to a call, which can be used for categorization, filtering, or tracking purposes. the function takes a call id and an array of label strings, replacing any existing labels on the call with the provided set. use this when you need to categorize a call or update its existing labels. the endpoint is particularly useful for integrating call labeling into automated workflows or custom applications built on top of dialpad. note that this operation will overwrite any previously existing labels on the call.
     */
    ATTACH_LABELS_TO_CALL: "DIALPAD_ATTACH_LABELS_TO_CALL",
    /**
     * This endpoint creates a new call center within the dialpad system with customizable settings for call handling, routing, operational hours, and advanced features. it allows for detailed configuration of call center behavior, including auto-recording, hold queue management, alert thresholds, and voice intelligence integration. use this endpoint when setting up a new call center or department that requires specific call routing and management capabilities. the endpoint provides extensive customization options but requires careful consideration of settings to ensure optimal call center operation.
     */
    CONFIGURE_CALL_CENTER_SETTINGS: "DIALPAD_CONFIGURE_CALL_CENTER_SETTINGS",
    /**
     * Creates a new access control policy in dialpad, defining a set of permissions and their application scope. this endpoint allows administrators to establish granular control over various dialpad features and settings. it's used to manage user access and configure operational parameters across different levels of the organization. the policy created can encompass a wide range of permissions, from agent settings to ai configurations, enabling customized access control tailored to specific organizational needs. this tool is essential for setting up and maintaining a secure, well-organized communication environment within dialpad.
     */
    CREATE_ACCESS_CONTROL_POLICY: "DIALPAD_CREATE_ACCESS_CONTROL_POLICY",
    /**
     * Creates or updates an agent status subscription for real-time monitoring of contact center agent statuses in dialpad. this endpoint allows you to configure event notifications for changes in agent availability, such as when agents become available, busy, or go off-duty. use this when setting up integrations that require up-to-date information on agent statuses for workforce management, real-time dashboards, or automated workflows. the subscription can be associated with a specific webhook or websocket endpoint for receiving the status updates. note that this endpoint only configures the subscription; you need to separately set up the webhook or websocket to receive the actual event data.
     */
    CREATE_AGENT_STATUS_SUBSCRIPTION: "DIALPAD_CREATE_AGENT_STATUS_SUBSCRIPTION",
    /**
     * Creates a callback request in a dialpad call center. this endpoint allows you to initiate a callback to a specified phone number through a designated call center. it's useful for implementing features like "request a call" on websites or applications, or for scheduling return calls to customers. the endpoint doesn't immediately place the call but queues it in the specified call center for an agent to handle. note that while both parameters are optional, at least one should be provided for a meaningful request. if no call center id is specified, the system may use a default or return an error, depending on your account configuration.
     */
    CREATE_CALLBACK: "DIALPAD_CREATE_CALLBACK",
    /**
     * Creates a shareable link for a specific call review in the dialpad platform. this endpoint allows users to generate a url that can be used to share call recordings or summaries with others, either within the company or publicly. it's particularly useful for sharing important call information, training materials, or for compliance purposes. the function provides control over the privacy level of the shared content, allowing for secure sharing within an organization or broader distribution as needed.
     */
    CREATE_CALL_REVIEW_SHARE_LINK: "DIALPAD_CREATE_CALL_REVIEW_SHARE_LINK",
    /**
     * Creates a new call router in the dialpad system, allowing for custom call routing logic based on a specified url. this endpoint configures essential settings for the call router, including its name, default target for fallback scenarios, and the routing url for decision-making. it's used when setting up a new automated call distribution system or when implementing custom call routing logic for an office. the call router can be enabled or disabled, and includes an optional security feature through a signature secret. note that this endpoint only creates the call router; additional setup may be required in the dialpad interface or through other api calls to fully integrate it into the calling workflow.
     */
    CREATE_CALL_ROUTER_CONFIGURATION: "DIALPAD_CREATE_CALL_ROUTER_CONFIGURATION",
    /**
     * Creates a new communication channel within the dialpad platform. this endpoint allows users to set up a dedicated space for team collaboration, discussions, or topic-specific conversations. it's particularly useful for organizing communication within a company or project. the created channel can be either public or private, providing flexibility in managing access and information sharing. use this endpoint when you need to programmatically create channels for various teams, projects, or departments, streamlining the process of setting up communication structures within dialpad.
     */
    CREATE_CHANNEL_ENDPOINT: "DIALPAD_CREATE_CHANNEL_ENDPOINT",
    /**
     * Creates a new custom interactive voice response (ivr) system within the dialpad platform. this endpoint allows you to define and configure an ivr workflow by specifying its type, associated audio file, and target assignment. use this when setting up automated phone menus, call routing systems, or customized voice interactions for different parts of your dialpad organization. the ivr can be assigned to various entities like call centers, departments, or individual users, providing flexibility in managing call flows and customer interactions.
     */
    CREATE_CUSTOM_IVR_WITH_AUDIO_FILE: "DIALPAD_CREATE_CUSTOM_IVR_WITH_AUDIO_FILE",
    /**
     * The createcontact endpoint adds a new contact to dialpad's system. use it to create local or shared contacts with comprehensive information. ideal for user onboarding, data migration, or system integrations. supports various contact details, with some fields restricted to single-line entries for consistency.
     */
    CREATE_NEW_CONTACT_ENTRY: "DIALPAD_CREATE_NEW_CONTACT_ENTRY",
    /**
     * Creates a new department within the dialpad system with customizable settings for call handling, operating hours, and advanced features. this endpoint allows for detailed configuration of department properties, including automatic call recording, hold queue management, custom operating hours, call routing strategies, and voice intelligence settings. it's particularly useful for setting up complex call flow structures within an organization, enabling efficient call distribution and management. the endpoint requires specifying the department name and associated office id, with numerous optional parameters for fine-tuning department behavior. it's important to note that some default values are applied if optional parameters are not provided, ensuring a functional department setup even with minimal configuration.
     */
    CREATE_NEW_DEPARTMENT_RECORD: "DIALPAD_CREATE_NEW_DEPARTMENT_RECORD",
    /**
     * Creates a pin for protected international calls from a dialpad room. this endpoint generates a unique pin that can be used to authenticate and authorize international calls made from a specific dialpad room. it's particularly useful for businesses that want to control and track international calling capabilities within their organization. the generated pin adds an extra layer of security, ensuring that only authorized users can make international calls from the room. use this endpoint when you need to set up or refresh international calling access for a room, especially in scenarios where you want to monitor usage or restrict access to certain team members.
     */
    CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS: "DIALPAD_CREATE_PIN_FOR_INTERNATIONAL_ROOM_CALLS",
    /**
     * Creates a new room within a specified office in the dialpad system. this endpoint is used to set up physical or virtual spaces for collaboration, meetings, or other communication purposes. it allows you to define a room with a name and associate it with a specific office. this is particularly useful for organizations managing multiple locations or wanting to organize their communication spaces efficiently. the created room can then be used for various purposes such as scheduling meetings, assigning resources, or managing call routing within the dialpad platform.
     */
    CREATE_ROOM_IN_OFFICE_VIA_POST: "DIALPAD_CREATE_ROOM_IN_OFFICE_VIA_POST",
    /**
     * Creates a scheduled report in the dialpad system for various types of communication data. this endpoint allows users to automate the generation and delivery of reports on a regular basis, such as call logs, user statistics, or voicemails. it's particularly useful for managers, administrators, and analysts who need consistent, periodic insights into communication patterns and performance metrics. the endpoint offers flexible scheduling options, including daily, weekly, or monthly frequencies, and can target specific organizational units or user groups. use this when you need to set up recurring reports for monitoring, compliance, or analytical purposes. note that this endpoint creates a new schedule; to modify existing schedules, use the appropriate update endpoint.
     */
    CREATE_SCHEDULE_REPORTS_ENDPOINT: "DIALPAD_CREATE_SCHEDULE_REPORTS_ENDPOINT",
    /**
     * Creates a new office within the dialpad system with specified configurations and settings. this endpoint allows you to set up a new office location or entity, including its billing information, operational hours, routing options, and various communication preferences. use this when you need to add a new office to your dialpad organization, such as when expanding to a new location or setting up a separate department with its own communication settings. the endpoint requires several mandatory parameters for basic office setup and billing, while offering numerous optional parameters for fine-tuning office operations and call handling. note that some settings, like voice intelligence and e911 address, may have regulatory implications depending on your location and should be configured carefully.
     */
    CREATE_SECONDARY_OFFICE: "DIALPAD_CREATE_SECONDARY_OFFICE",
    /**
     * Creates a new sms event subscription in the dialpad api, allowing users to receive notifications for inbound and/or outbound sms messages. this endpoint enables fine-grained control over sms event monitoring, including options for filtering by direction, target, and message type. it's particularly useful for integrating real-time sms notifications into external systems or applications. the subscription can be configured to include or exclude internal company messages and to provide updates on message delivery statuses. use this endpoint when setting up new sms monitoring systems or when adjusting existing subscription parameters.
     */
    CREATE_SMS_EVENT_SUBSCRIPTION: "DIALPAD_CREATE_SMS_EVENT_SUBSCRIPTION",
    /**
     * Creates a new user account in the dialpad system with the specified details. this endpoint allows you to add a new user to your dialpad organization, set up their basic profile information, assign them to an office, and optionally auto-assign a phone number. it's particularly useful for bulk user creation or when integrating dialpad user management with other systems. the endpoint requires at minimum an email and office id, with options to further customize the user's profile and permissions through additional parameters. note that while a license can be specified, it defaults to 'talk' if not provided, ensuring that the new user has basic dialpad functionality.
     */
    CREATE_USER_WITH_AUTO_ASSIGN: "DIALPAD_CREATE_USER_WITH_AUTO_ASSIGN",
    /**
     * Creates a new webhook integration for receiving real-time event notifications from dialpad. this endpoint allows you to specify a url where dialpad will send event data when specific actions occur within the dialpad system. it's essential for building responsive, event-driven integrations with dialpad. the endpoint also supports an optional secret for verifying the authenticity of incoming webhook requests, enhancing security. use this when you need to set up automated workflows or sync dialpad events with external systems.
     */
    CREATE_WEBHOOK_POST_ENDPOINT: "DIALPAD_CREATE_WEBHOOK_POST_ENDPOINT",
    /**
     * Deauthorizes (revokes) an oauth2 access token, effectively terminating the application's access to the dialpad api. this endpoint should be used when an application needs to invalidate its current access token, such as during user logout, when suspending an integration, or in response to potential security threats. it's an essential security measure to prevent unauthorized access once a token is no longer needed or potentially compromised. note that after deauthorization, the application will need to re-authenticate to obtain a new access token for future api calls. this endpoint does not return any specific data; a successful call simply invalidates the token.
     */
    DEAUTHORIZE_OAUTH2_SESSION: "DIALPAD_DEAUTHORIZE_OAUTH2_SESSION",
    /**
     * Deletes a specific access control policy from the dialpad system. this endpoint allows company administrators to remove custom permission settings that were previously created for managing user roles and access within the dialpad platform. it should be used when a particular access control policy is no longer needed or requires complete removal from the system. this operation is permanent and cannot be undone, so it should be used with caution. the endpoint does not return the deleted policy details; it typically returns a success status upon successful deletion.
     */
    DELETE_ACCESS_CONTROL_POLICY_BY_ID: "DIALPAD_DELETE_ACCESS_CONTROL_POLICY_BY_ID",
    /**
     * Deletes a specific agent status subscription identified by its unique id. this endpoint is used to stop receiving real-time updates about an agent's status (e.g., available, busy, off-duty) in the dialpad system. it should be used when you no longer need to track the status changes for a particular agent or when cleaning up unused subscriptions. the operation is irreversible, so care should be taken to ensure the correct subscription id is provided. this endpoint does not return the deleted subscription details; it typically returns a success status code upon successful deletion.
     */
    DELETE_AGENT_STATUS_BY_ID: "DIALPAD_DELETE_AGENT_STATUS_BY_ID",
    /**
     * Deletes a specific call center from the dialpad system. this endpoint should be used when you need to permanently remove a call center from your dialpad account. it's important to note that this action is irreversible and will affect all associated resources, such as agents, call logs, and configurations linked to the specified call center. before using this endpoint, ensure that all necessary data has been backed up or migrated. this operation may have significant implications for ongoing operations, so it should be used with caution and typically requires appropriate authorization.
     */
    DELETE_CALL_CENTER_BY_ID: "DIALPAD_DELETE_CALL_CENTER_BY_ID",
    /**
     * This endpoint deletes a specific call review share link in the dialpad system. it's used to revoke access to a previously shared call review, ensuring that the link can no longer be used to view the associated call information. this action is permanent and should be used when you want to immediately prevent further access to a shared call review, such as when sensitive information was mistakenly shared or when the review is no longer relevant. once deleted, the share link cannot be recovered, and anyone attempting to use it will receive an error.
     */
    DELETE_CALL_REVIEW_SHARE_LINK_BY_ID: "DIALPAD_DELETE_CALL_REVIEW_SHARE_LINK_BY_ID",
    /**
     * Deletes a specific call router from the dialpad system. this endpoint should be used when you need to remove an existing call routing configuration, such as when restructuring your call flow or decommissioning outdated routing rules. the deletion is permanent and cannot be undone, so use with caution. this operation will immediately affect incoming calls that were previously handled by the deleted router, potentially disrupting call flows if not properly managed. ensure that any dependencies on the call router (e.g., dids or mainline menu routings) are updated before deletion to maintain smooth call handling.
     */
    DELETE_CALL_ROUTER_BY_ID: "DIALPAD_DELETE_CALL_ROUTER_BY_ID",
    /**
     * Deletes a specific call subscription from the dialpad system. this endpoint should be used when an application no longer needs to receive real-time notifications for a particular call-related event or functionality. it allows developers to clean up unused subscriptions, potentially freeing up resources and reducing unnecessary data processing. the deletion is permanent and cannot be undone, so use this endpoint with caution. it's important to note that this operation only affects the specified subscription and does not impact any other active subscriptions or ongoing calls.
     */
    DELETE_CALL_SUBSCRIPTION_BY_ID: "DIALPAD_DELETE_CALL_SUBSCRIPTION_BY_ID",
    /**
     * Deletes a specific channel from the dialpad communication platform. this endpoint should be used when you need to remove a communication channel that is no longer needed or has become obsolete. it permanently removes the channel and all associated data, so it should be used with caution. this operation cannot be undone, and once a channel is deleted, it cannot be recovered. the endpoint is useful for maintaining a clean and organized communication structure within your dialpad account.
     */
    DELETE_CHANNEL_BY_ID: "DIALPAD_DELETE_CHANNEL_BY_ID",
    /**
     * Removes a specified member from a dialpad channel. this endpoint allows you to delete a user from a particular channel, effectively revoking their access and participation in that channel's communications. it should be used when you need to remove a team member from a specific collaboration space, such as when an employee changes roles or leaves the organization. the endpoint requires the channel id (specified in the url path) and the user id of the member to be removed. note that this action is irreversible, and the removed member will lose access to the channel's history and future communications. it's important to ensure you have the necessary permissions to remove members before using this endpoint.
     */
    DELETE_CHANNEL_MEMBER_BY_ID: "DIALPAD_DELETE_CHANNEL_MEMBER_BY_ID",
    /**
     * Deletes a specific contact from the dialpad system using the provided contact id. this endpoint should be used when you need to permanently remove a contact's information from your dialpad account. it's important to note that this action is irreversible, and once a contact is deleted, it cannot be recovered through the api. use this endpoint with caution, ensuring that you have verified the correct contact id before deletion. this operation affects both shared company contacts and user-specific local contacts, depending on the scope of the provided id.
     */
    DELETE_CONTACT_BY_ID: "DIALPAD_DELETE_CONTACT_BY_ID",
    /**
     * Deletes a custom interactive voice response (ivr) configuration from a specified target in the dialpad system. this endpoint is used to remove ivr settings, allowing for the reset or reconfiguration of call routing and automated response systems. it's particularly useful when updating ivr workflows or when a specific ivr configuration is no longer needed. the operation affects the ivr settings for the specified target type and id, with an option to limit the change to either inbound or outbound calls in call center contexts. this endpoint should be used cautiously, as deleting an ivr configuration is irreversible and may impact existing call routing processes.
     */
    DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE: "DIALPAD_DELETE_CUSTOM_IVR_BY_TARGET_TYPE_AND_IVRTYPE",
    /**
     * Deletes a specific department from the dialpad system. this endpoint should be used when you need to remove a department that is no longer needed or has been deprecated within your organization's structure. the operation is irreversible, so it should be used with caution. once a department is deleted, all associated data, such as user assignments and resource allocations, may be affected. this endpoint is particularly useful for maintaining an up-to-date organizational structure in dialpad, especially during restructuring or when cleaning up obsolete departments.
     */
    DELETE_DEPARTMENT_RESOURCE: "DIALPAD_DELETE_DEPARTMENT_RESOURCE",
    /**
     * Deletes a specific deskphone associated with a user in the dialpad system. this endpoint should be used when you need to remove a deskphone from a user's account, such as when the device is no longer in use or needs to be reassigned. the operation is permanent and cannot be undone, so it should be used with caution. this endpoint is particularly useful for managing hardware inventory and ensuring that user accounts accurately reflect their current device assignments.
     */
    DELETE_DESKPHONE_BY_USER_ID: "DIALPAD_DELETE_DESKPHONE_BY_USER_ID",
    /**
     * This endpoint removes a specific deskphone from a designated room within the dialpad system. it's used to unassign or decommission a deskphone from a particular shared space, such as a conference room or reception area. the operation is permanent and should be used with caution as it will disassociate the deskphone from the room, potentially affecting call routing and room communication capabilities. this endpoint is particularly useful during office reorganizations, when updating room phone setups, or when removing faulty devices from the system. note that this operation only removes the association between the deskphone and the room; it does not delete the deskphone from the overall dialpad account.
     */
    DELETE_DESKPHONE_IN_ROOM: "DIALPAD_DELETE_DESKPHONE_IN_ROOM",
    /**
     * Deletes a specific phone number from the user's dialpad account. this endpoint should be used when a phone number is no longer needed and needs to be removed from the system. it's important to note that this action is irreversible, and once a number is deleted, it may not be possible to reclaim the same number. this endpoint is particularly useful for managing phone inventory, removing temporary numbers, or cleaning up unused numbers to optimize resource allocation. the deletion process may have implications on call routing, billing, and other phone-related features within dialpad, so it should be used with caution and only when the user is certain that the number is no longer required.
     */
    DELETE_NUMBER_VIA_API: "DIALPAD_DELETE_NUMBER_VIA_API",
    /**
     * Removes a specified operator (user or room) from a particular office in the dialpad system. this endpoint is used to manage the association between operators and offices, allowing administrators to control access and permissions within the organization's structure. it should be used when you need to disassociate a user or a room from an office, such as when an employee changes departments or a shared space is no longer used for a specific office. the endpoint requires both the operator's id and type to ensure precise removal of the correct entity. note that this action does not delete the user or room from the system entirely; it only removes their association with the specified office.
     */
    DELETE_OFFICE_OPERATOR_BY_ID: "DIALPAD_DELETE_OFFICE_OPERATOR_BY_ID",
    /**
     * Removes a specified operator from a call center in the dialpad system. this endpoint should be used when you need to disassociate an agent or user from a particular call center, such as when an employee changes roles or leaves the organization. the operation is permanent and cannot be undone through this api. if you need to re-add the operator to the call center, you would need to use a separate api call. note that this endpoint only removes the operator's association with the call center; it does not delete the user account from dialpad.
     */
    DELETE_OPERATOR_FROM_CALL_CENTER: "DIALPAD_DELETE_OPERATOR_FROM_CALL_CENTER",
    /**
     * Removes a specified operator from a department in the dialpad system. this endpoint is used to update department operator assignments by removing either a user or a room from the list of operators for a given department. it's particularly useful for managing call routing and department resources. the endpoint requires both the operator's unique id and type (user or room) to ensure accurate removal. use this when reorganizing department structures, changing operator assignments, or updating call handling workflows. note that this action is irreversible and may affect ongoing call routing for the department.
     */
    DELETE_OPERATOR_FROM_DEPARTMENT: "DIALPAD_DELETE_OPERATOR_FROM_DEPARTMENT",
    /**
     * Deletes a specific recording share link in the dialpad system. this endpoint is used to revoke access to a shared recording by removing the associated link. it should be called when you want to prevent further access to a recording through a previously generated share link. this action is permanent and cannot be undone, so use it cautiously. the endpoint is particularly useful for maintaining privacy and controlling access to sensitive or outdated recorded content.
     */
    DELETE_RECORDING_SHARE_LINK_BY_ID: "DIALPAD_DELETE_RECORDING_SHARE_LINK_BY_ID",
    /**
     * Deletes a specific room from the dialpad system using its unique identifier. this endpoint should be used when you need to remove a room that is no longer in use or has been decommissioned, such as a closed conference room or a removed reception desk. the deletion is permanent and cannot be undone, so use this endpoint with caution. it's important to note that deleting a room will also remove any associated configurations, such as room phone settings or extensions. this operation is part of dialpad's room management functionality and helps maintain an up-to-date inventory of active rooms in your organization.
     */
    DELETE_ROOM_BY_ID: "DIALPAD_DELETE_ROOM_BY_ID",
    /**
     * Deletes a specific scheduled report from the dialpad system. this endpoint allows users to permanently remove a previously configured report that was set up for automatic generation and delivery. it should be used when a particular scheduled report is no longer needed or when you want to stop the automatic generation of a specific report. this operation cannot be undone, so it should be used with caution. the endpoint will not provide any information about the deleted report; it will only confirm the successful deletion or return an error if the operation fails.
     */
    DELETE_SCHEDULE_REPORT_BY_ID: "DIALPAD_DELETE_SCHEDULE_REPORT_BY_ID",
    /**
     * Deletes a specific sms subscription from the dialpad system. this endpoint should be used when you want to cancel or remove an existing sms subscription, such as when a user no longer needs sms services or wants to change their subscription plan. the operation is irreversible, so it should be used with caution. once deleted, the subscription and its associated settings will no longer be available. this endpoint only handles the deletion process and does not provide any information about the subscription being deleted. it's important to ensure that you have the correct subscription id before making this call, as there is no way to recover a mistakenly deleted subscription.
     */
    DELETE_SMS_SUBSCRIPTION_BY_ID: "DIALPAD_DELETE_SMS_SUBSCRIPTION_BY_ID",
    /**
     * Deletes a specific changelog entry from a subscription in the dialpad system. this endpoint is used to permanently remove a record of changes made to a subscription, which could include modifications to webhook configurations, event subscriptions, or other subscription-related settings. it should be used when you need to clean up or remove outdated or erroneous changelog entries. be cautious when using this endpoint, as deleting changelog entries may affect auditing and tracking capabilities. note that this operation is irreversible, and once a changelog entry is deleted, it cannot be recovered. this endpoint is part of dialpad's subscription management api and helps maintain an accurate and up-to-date record of subscription changes.
     */
    DELETE_SUBSCRIPTION_CHANGELOG_BY_ID: "DIALPAD_DELETE_SUBSCRIPTION_CHANGELOG_BY_ID",
    /**
     * Deletes a specific subscription contact from the dialpad system. this endpoint should be used when you need to remove a contact from your subscription list, such as when a user unsubscribes or when cleaning up outdated contact information. the operation is irreversible, so use it with caution. this endpoint only handles the deletion process and does not return the deleted contact's information. it's important to note that this action may affect any ongoing subscriptions or notifications associated with the deleted contact.
     */
    DELETE_SUBSCRIPTION_CONTACT_BY_ID: "DIALPAD_DELETE_SUBSCRIPTION_CONTACT_BY_ID",
    /**
     * Deletes a user from the dialpad system based on the provided user id. this endpoint should be used when permanently removing a user's account and associated data from dialpad. it's important to note that deleted users can be restored for up to 72 hours after deletion, after which their records are anonymized. use this endpoint with caution as it will remove the user's access to dialpad services and may affect team structures or ongoing communications. this operation cannot be undone after the 72-hour restoration period.
     */
    DELETE_USER_BY_ID: "DIALPAD_DELETE_USER_BY_ID",
    /**
     * Deletes a specific webhook subscription from the dialpad platform using its unique identifier. this endpoint should be used when you want to stop receiving real-time event notifications for a particular webhook. it's important to note that once a webhook is deleted, it cannot be recovered, and you will need to create a new webhook subscription if you wish to receive events again. this operation is useful for managing webhook subscriptions, especially when cleaning up outdated or unnecessary event listeners in your integration with dialpad.
     */
    DELETE_WEBHOOK_BY_ID: "DIALPAD_DELETE_WEBHOOK_BY_ID",
    /**
     * Closes and removes a specific websocket connection in the dialpad system. this endpoint should be used when an application needs to programmatically terminate a real-time event subscription or clean up unused websocket connections. it's particularly useful for managing resources and ensuring that inactive or unnecessary websocket connections are properly closed. this operation is irreversible, so it should be used with caution. once a websocket is deleted, any active subscriptions or real-time data streams associated with it will be immediately terminated.
     */
    DELETE_WEBSOCKET_CONNECTION_BY_ID: "DIALPAD_DELETE_WEBSOCKET_CONNECTION_BY_ID",
    /**
     * Retrieves detailed information about a specific call using its unique identifier. this endpoint allows developers to access comprehensive data about a particular call made through the dialpad platform. it should be used when you need to fetch specific call details for purposes such as logging, analysis, or displaying call information to users. the endpoint provides a snapshot of the call at the time of the request, including details like duration, participants, and call status. it does not provide real-time updates for ongoing calls; for that, you would need to poll the endpoint or use a different real-time communication method. this endpoint is particularly useful for applications that need to integrate call history or detailed call records from dialpad.
     */
    FETCH_CALL_BY_ID: "DIALPAD_FETCH_CALL_BY_ID",
    /**
     * Retrieves the transcript for a specific call in the dialpad system. this endpoint allows you to fetch the text representation of the spoken content from a particular call or meeting. it's useful for reviewing conversation details, analyzing call content, or creating searchable records of communications. the transcript is generated using dialpad's ai-powered transcription feature, which provides accurate text conversion of audio content. use this endpoint when you need to access the written record of a call for purposes such as quality assurance, training, or content analysis. note that the availability and accuracy of transcripts may depend on the audio quality of the original call and the capabilities of the ai transcription system.
     */
    FETCH_CALL_TRANSCRIPT_BY_ID: "DIALPAD_FETCH_CALL_TRANSCRIPT_BY_ID",
    /**
     * Retrieves a list of all custom interactive voice response (ivr) configurations associated with the authenticated dialpad account. this endpoint allows developers to fetch comprehensive details about the custom ivrs set up in their dialpad system, including menu structures, voice prompts, and routing rules. it's particularly useful for auditing existing ivr setups, gathering information for reporting purposes, or syncing ivr configurations with external systems. the endpoint returns all custom ivrs by default, without requiring any parameters. however, it does not provide real-time analytics or call logs related to these ivrs. use this endpoint when you need an overview of your ivr landscape or when preparing to make bulk updates to your ivr configurations.
     */
    FETCH_CUSTOM_IVRS: "DIALPAD_FETCH_CUSTOM_IVRS",
    /**
     * Retrieves a list of operators associated with a specific office in dialpad. this endpoint should be used when you need to get information about the operators managing calls and operations within a particular office. it's useful for auditing office structure, managing call center operations, or gathering data for reporting purposes. the endpoint returns details about the operators, which may include their names, ids, roles, and current statuses. note that this endpoint only provides information about operators and does not allow for modifying operator data or office structure.
     */
    FETCH_OPERATORS_FOR_OFFICE_ID: "DIALPAD_FETCH_OPERATORS_FOR_OFFICE_ID",
    /**
     * Retrieves a list of scheduled reports from the dialpad system. this endpoint allows users to fetch information about reports that have been set up for automatic generation on a regular basis. it's particularly useful for administrators or users who need to review or manage the scheduled reporting configuration within their dialpad account. the endpoint supports filtering by report type, frequency, and date range, making it easy to find specific scheduled reports. it should be used when there's a need to audit existing report schedules, verify report configurations, or gather information about automated reporting processes in place. note that this endpoint only provides metadata about the scheduled reports, not the actual report content itself. it's ideal for getting an overview of reporting activities but not for accessing the report data directly.
     */
    FETCH_SCHEDULED_REPORTS: "DIALPAD_FETCH_SCHEDULED_REPORTS",
    /**
     * Retrieves the url of a transcript for a specific call in the dialpad system. this endpoint allows developers to access the text version of a call's audio content by providing the unique identifier of the call. the returned url can be used to fetch the actual transcript content. this tool is particularly useful when you need to programmatically access call transcripts for analysis, record-keeping, or integration with other systems. it should be used when a user needs to obtain the transcript url for a known call id, but not for directly retrieving the transcript content itself.
     */
    FETCH_TRANSCRIPT_URL_BY_CALL_ID: "DIALPAD_FETCH_TRANSCRIPT_URL_BY_CALL_ID",
    /**
     * Retrieves detailed information about a specific user in the dialpad system. this endpoint is used to fetch comprehensive user data, including profile details, account settings, and associated communication information. it's particularly useful for user management tasks, such as verifying user information, updating records in external systems, or displaying user profiles in integrated applications. the endpoint returns a single user object based on the provided user id. it should be used when detailed information about a particular user is needed, but it will not provide aggregate data or information about multiple users simultaneously. note that the specific fields returned may depend on the requester's permissions and the user's privacy settings.
     */
    FETCH_USER_DETAILS_BY_ID: "DIALPAD_FETCH_USER_DETAILS_BY_ID",
    /**
     * The format phone number endpoint is used to standardize and format phone numbers within the dialpad ecosystem. this tool takes a raw phone number input and converts it into a specified or default format, ensuring consistency across the platform. it's particularly useful when integrating new contact information, preparing numbers for display, or standardizing data for call routing purposes. the endpoint supports various input formats and can adapt to different country-specific number structures, making it versatile for international use. however, it's important to note that this tool is for formatting purposes only and does not validate the existence or operability of the phone number.
     */
    FORMAT_PHONE_NUMBERS: "DIALPAD_FORMAT_PHONE_NUMBERS",
    /**
     * Retrieves the number of available (unused) licenses for a specific office within a dialpad organization. this endpoint is used to check the current license capacity and availability before assigning new licenses to users or features. it provides essential information for office administrators to manage their license inventory effectively. the endpoint should be used when planning user onboarding, upgrading subscriptions, or performing license audits. note that this endpoint only returns information about unassigned licenses and does not provide details about currently assigned licenses or their usage.
     */
    GET_AVAILABLE_LICENSES_FOR_AN_OFFICE: "DIALPAD_GET_AVAILABLE_LICENSES_FOR_AN_OFFICE",
    /**
     * Retrieves the current operational status of a specific call center in the dialpad system. this endpoint allows you to get real-time information about a call center's state, which can include details such as whether it's active, the number of agents available, current call volume, or any ongoing issues. it's particularly useful for monitoring call center performance, making informed decisions about resource allocation, or triggering automated workflows based on the call center's status. the endpoint should be used when you need up-to-the-minute information about a call center's operational condition, but it does not provide historical data or detailed analytics.
     */
    GET_CALL_CENTER_STATUS_BY_ID: "DIALPAD_GET_CALL_CENTER_STATUS_BY_ID",
    /**
     * Retrieves a list of all available call labels in the dialpad system. this endpoint allows users to fetch the current set of labels that can be applied to calls for categorization and management purposes. it's particularly useful for applications that need to display or use the full range of call labeling options in their interface or logic. the endpoint returns a collection of call labels, likely including their names and any associated metadata. it should be used when initializing call management interfaces or when needing to synchronize local label data with the current state in dialpad. note that this endpoint does not provide information about which labels are applied to specific calls; it only returns the set of available labels.
     */
    GET_CALL_LABELS: "DIALPAD_GET_CALL_LABELS",
    /**
     * Retrieves or generates a share link for a specific call review in the dialpad system. this endpoint allows users to obtain a unique url that can be used to share call review data, including summaries, transcripts, or analysis, with other team members or external parties. the share link provides a convenient way to collaborate on call reviews without requiring direct access to the dialpad platform. this tool should be used when a user needs to distribute call review information quickly and securely. it's particularly useful for managers sharing feedback, trainers providing examples, or team members collaborating on customer interactions. the endpoint does not provide the actual call review content, only the means to access it via the generated link.
     */
    GET_CALL_REVIEW_SHARE_LINK_BY_ID: "DIALPAD_GET_CALL_REVIEW_SHARE_LINK_BY_ID",
    /**
     * Retrieves a list of call subscriptions associated with the authenticated user's account in the dialpad platform. this endpoint allows developers to fetch details about existing call event subscriptions, which are used to receive real-time updates on call states and activities. it should be used when an application needs to monitor or manage the current set of call subscriptions, such as for auditing purposes or to verify the existence of specific subscriptions. the endpoint does not create, modify, or delete subscriptions; it only provides read access to the existing subscription data. note that the response may include various types of call subscriptions, and developers should be prepared to handle different subscription formats or filters that may be present in the returned data.
     */
    GET_CALL_SUBSCRIPTION_DETAILS: "DIALPAD_GET_CALL_SUBSCRIPTION_DETAILS",
    /**
     * Retrieves a list of members for a specific channel in dialpad. this endpoint allows you to fetch user information for all members associated with the given channel id. it's useful for obtaining an overview of channel participants, which can be helpful for managing team collaboration, assigning tasks, or analyzing channel activity. the endpoint should be used when you need to access member details for a particular channel, such as when displaying member lists, checking channel membership, or performing channel-related operations that require knowledge of its members. note that this endpoint only provides member information and does not modify the channel or its membership.
     */
    GET_CHANNEL_MEMBERS_BY_ID: "DIALPAD_GET_CHANNEL_MEMBERS_BY_ID",
    /**
     * Retrieves a list of all departments associated with a specific office in the dialpad system. this endpoint is essential for understanding the organizational structure within a company's dialpad account. it should be used when there's a need to view, manage, or analyze the departmental breakdown of a particular office. the endpoint provides a comprehensive overview of the office's internal structure, which can be valuable for administrative tasks, reporting, or integration with other systems. note that this endpoint only returns department information and does not provide details about individual users within those departments.
     */
    GET_DEPARTMENTS_BY_OFFICE_ID: "DIALPAD_GET_DEPARTMENTS_BY_OFFICE_ID",
    /**
     * Retrieves a list of deskphones associated with a specific user in the dialpad system. this endpoint is useful for managing and tracking the deskphone inventory assigned to individual users within an organization. it can be used to audit user equipment, troubleshoot connectivity issues, or gather information for user setup and onboarding processes. the endpoint returns details about all deskphones linked to the specified user, which may include information such as deskphone models, serial numbers, and configuration status. this tool should be used when you need to obtain a comprehensive view of a user's assigned deskphone equipment in dialpad.
     */
    GET_DESKPHONES_FOR_USER_PARENT_ID: "DIALPAD_GET_DESKPHONES_FOR_USER_PARENT_ID",
    /**
     * Retrieves a list of deskphones associated with a specific room in the dialpad system. this endpoint is used to get detailed information about the communication devices deployed in shared spaces such as conference rooms, reception areas, or phone booths. it provides an overview of the deskphones' configuration and status within the context of a particular room. use this endpoint when you need to inventory, manage, or troubleshoot deskphones in a specific location. the response likely includes details such as deskphone models, serial numbers, configuration status, and any associated user information. this tool is particularly useful for it administrators and facilities managers who need to maintain an up-to-date record of communication equipment in various rooms across the organization.
     */
    GET_DESKPHONES_IN_ROOMS: "DIALPAD_GET_DESKPHONES_IN_ROOMS",
    /**
     * Retrieves detailed information about a specific deskphone within a designated room or parent entity in the dialpad system. this endpoint is useful for obtaining the current configuration, status, and attributes of a particular deskphone device. it should be used when you need to access or verify the details of a single deskphone, such as during troubleshooting, inventory management, or when updating device settings. the endpoint does not modify any data and is intended for read-only operations. keep in mind that the response will only provide information about the specified deskphone and will not include details about other devices or the parent entity itself.
     */
    GET_DESKPHONE_BY_PARENT_ID: "DIALPAD_GET_DESKPHONE_BY_PARENT_ID",
    /**
     * Retrieves a list of call centers associated with a specific office in the dialpad platform. this endpoint allows administrators and developers to fetch information about all call centers within a given office, which is useful for managing and organizing communication resources. use this endpoint when you need to get an overview of call center units within an office, such as for reporting, resource allocation, or integration purposes. the endpoint returns basic information about each call center, but detailed configuration or real-time status may require additional api calls.
     */
    GET_OFFICE_CALL_CENTERS: "DIALPAD_GET_OFFICE_CALL_CENTERS",
    /**
     * Retrieves the skill information for a specific operator within a designated call center. this endpoint allows you to access details about an operator's assigned skills, which are crucial for efficient call routing and task assignment in the call center environment. use this endpoint when you need to review or verify an operator's capabilities, such as language proficiency, technical expertise, or customer service specialization. the retrieved information can be valuable for workforce management, skill-based routing configurations, and ensuring optimal operator-to-task matching. note that this endpoint only provides skill data and does not allow for skill modification; separate endpoints would be required for updating skills.
     */
    GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER: "DIALPAD_GET_OPERATOR_SKILLS_BY_CALL_CENTER_AND_USER",
    /**
     * Retrieves detailed information about a specific phone number associated with the dialpad account. this endpoint allows you to fetch comprehensive data about a single phone number, including its current status, assigned user or department, tags, and other relevant attributes. use this endpoint when you need to access or verify the details of a particular phone number within your dialpad system. it's particularly useful for auditing phone number assignments, checking number status, or retrieving associated metadata. the endpoint does not modify any data and is safe for frequent use, making it ideal for real-time information retrieval or periodic synchronization with external systems.
     */
    GET_PHONE_NUMBER_DETAILS: "DIALPAD_GET_PHONE_NUMBER_DETAILS",
    /**
     * Retrieves detailed information about a specific recording share link in the dialpad system. this endpoint allows you to fetch the current status, settings, and metadata associated with a previously created share link for a call recording. it's particularly useful when you need to verify the current state of a share link, check its expiration status, or retrieve the associated recording details. the endpoint should be used when you have a valid recording share link id and need to access its up-to-date information. note that this endpoint only provides information about the share link itself and does not return the actual recording content.
     */
    GET_RECORDING_SHARE_LINK_BY_ID: "DIALPAD_GET_RECORDING_SHARE_LINK_BY_ID",
    /**
     * Retrieves a list of all available meeting rooms or spaces within the dialpad system. this endpoint is essential for managing and organizing video-enabled meetings, allowing users to view and select appropriate meeting spaces for their needs. it provides an overview of both physical conference rooms and virtual meeting spaces, supporting dialpad's hybrid team collaboration features. use this endpoint when you need to display available rooms, check room capabilities, or integrate room selection into scheduling workflows. the response likely includes details such as room names, capacities, available equipment (e.g., poly studio x integration), and potentially real-time availability status. this endpoint does not create or modify rooms; it's purely for fetching room information. keep in mind that the returned data may need to be combined with calendar integration data to provide a complete picture of room availability.
     */
    GET_ROOMS_LIST: "DIALPAD_GET_ROOMS_LIST",
    /**
     * Retrieves the subscription information for a specific contact in the dialpad system. this endpoint allows you to access details about a contact's current subscription status, type, and related information. use this when you need to check or verify the subscription details for a particular contact, such as during account management or support processes. the endpoint focuses solely on subscription data and does not provide other contact information or modify any existing data. it's particularly useful for scenarios involving subscription management, billing inquiries, or when integrating dialpad's contact subscription system with other applications.
     */
    GET_SUBSCRIPTION_CONTACT_BY_ID: "DIALPAD_GET_SUBSCRIPTION_CONTACT_BY_ID",
    /**
     * Retrieves the caller id information for a specific user in the dialpad system. this endpoint allows you to fetch the current caller id settings associated with a user's account, which may include their display name, phone number, or other identifying information used when making outbound calls. it's particularly useful for administrators or integrations that need to verify or display a user's current caller id configuration. the endpoint should be used when you need to check or display a user's caller id settings, but not for modifying these settings. note that this endpoint only provides read access to the caller id information and cannot be used to update or change the caller id settings.
     */
    GET_USER_CALLER_ID: "DIALPAD_GET_USER_CALLER_ID",
    /**
     * Retrieves detailed information about a specific deskphone associated with a particular user in the dialpad system. this endpoint is useful when you need to access or verify the configuration, status, or other attributes of a user's deskphone. it should be used when you have both the user's id and the specific deskphone id, and need to fetch the most up-to-date information about that device. this endpoint does not modify any data and is safe for frequent calls, but consider caching the results if you're making multiple requests for the same deskphone in a short period.
     */
    GET_USER_DESKPHONES: "DIALPAD_GET_USER_DESKPHONES",
    /**
     * Retrieves the enhanced 911 (e911) information for a specific user in the dialpad system. this endpoint provides critical location data associated with the user's account, which is essential for emergency services to accurately locate the caller during an emergency. it should be used when setting up or verifying a user's emergency contact information, ensuring compliance with e911 regulations for voip services. the tool returns the current e911 configuration for the specified user, including registered address and any additional location details. it's important to note that this endpoint only retrieves information and does not modify any e911 settings.
     */
    GET_USER_E911_DETAILS: "DIALPAD_GET_USER_E911_DETAILS",
    /**
     * Retrieves a list of all webhooks configured for the authenticated user's dialpad account. this endpoint allows developers to view and manage their existing webhook subscriptions for various communication events such as calls, sms, contacts, and agent status changes. it should be used when you need to audit your current webhook configurations, verify the status of your integrations, or gather information before modifying existing webhooks. the endpoint provides an overview of active webhooks but does not include detailed event data or allow for webhook creation or modification.
     */
    GET_WEBHOOKS_INFORMATION: "DIALPAD_GET_WEBHOOKS_INFORMATION",
    /**
     * Terminates an active call in the dialpad system. this endpoint should be used when you need to programmatically end a specific ongoing call. it's particularly useful for automated call management, such as in customer service systems or when integrating dialpad's functionality into other applications. the endpoint has a rate limit of 1200 requests per minute, allowing for high-volume usage in busy call centers or large-scale communication systems. note that this action is irreversible; once a call is hung up, it cannot be reinstated, and a new call would need to be initiated if further communication is required.
     */
    HANGUP_CALL_VIA_ID: "DIALPAD_HANGUP_CALL_VIA_ID",
    /**
     * Initiates an outbound ivr (interactive voice response) call using the dialpad api. this endpoint allows you to programmatically start a call to a specified phone number from a designated group within your dialpad organization, such as a call center, department, or office. it's particularly useful for automating outbound calls, implementing scheduled call campaigns, or integrating dialpad's calling capabilities into your own applications. the endpoint provides options for customizing the call with additional data and managing the displayed caller id, enhancing flexibility in various use cases like customer service, sales outreach, or automated notifications.
     */
    INITIATE_IVR_CALL_API_ENDPOINT: "DIALPAD_INITIATE_IVR_CALL_API_ENDPOINT",
    /**
     * The initiateoutboundcall endpoint allows you to programmatically initiate an outbound call using the dialpad api. this tool is used to place calls on behalf of a dialpad user to a specified phone number. it supports various customization options, including setting custom caller id, associating the call with a group, and enabling consult mode for handling multiple calls. use this endpoint when you need to automate outbound calling in your application, such as for customer outreach, automated notifications, or integrating calling capabilities into your workflow. the endpoint is particularly useful for scenarios requiring programmatic call initiation, but it does not handle the actual call audio or provide real-time call control. be aware that the call's success depends on the user's dialpad account status and permissions.
     */
    INITIATE_OUTBOUND_CALL_VIA_API: "DIALPAD_INITIATE_OUTBOUND_CALL_VIA_API",
    /**
     * Initiates an outbound call for a specified dialpad user. this endpoint allows you to programmatically start a phone call to a given number, with options to customize the call's properties such as the caller id and associated group. it's particularly useful for automating outbound calling processes or integrating dialpad's calling capabilities into other applications. the endpoint supports additional features like custom data association for call tracking and the ability to initiate calls through specific organizational groups. note that while the endpoint doesn't explicitly mark any parameters as required, a valid destination phone number is necessary to initiate a call.
     */
    INITIATE_USER_CALL_WITH_GROUP_OPTIONS: "DIALPAD_INITIATE_USER_CALL_WITH_GROUP_OPTIONS",
    /**
     * Retrieves a list of all available communication channels in the dialpad platform. this endpoint provides an overview of the various channels that can be used for voice, sms, and other digital engagement methods within dialpad. it should be used when you need to obtain information about the communication options available to your account or organization. the endpoint returns details about each channel, which may include channel ids, types (e.g., voice, sms), and their current status. this tool is particularly useful for applications that need to dynamically adjust their communication strategies based on available channels or for monitoring the health and availability of different communication methods in dialpad. note that this endpoint likely returns only basic channel information and may not include detailed usage statistics or real-time activity data.
     */
    LIST_CHANNELS_API: "DIALPAD_LIST_CHANNELS_API",
    /**
     * Retrieves a list of conference rooms available in the dialpad system. this endpoint allows users to fetch information about both virtual and physical conference rooms set up within their dialpad account. it can be used to gather details such as room names, capacities, and configurations for scheduling or managing meetings. the endpoint is particularly useful for applications that need to display available conference rooms or integrate dialpad's room information into third-party scheduling systems. note that this endpoint does not provide real-time availability of rooms or allow for booking; it's primarily for listing and describing the configured rooms.
     */
    LIST_CONFERENCE_ROOMS: "DIALPAD_LIST_CONFERENCE_ROOMS",
    /**
     * Retrieves a list of offices within the dialpad platform. this endpoint provides access to office information, which is crucial for managing multiple offices in an organization using dialpad. it should be used when you need to obtain an overview of all offices or gather specific details about offices registered in the dialpad system. the endpoint likely returns essential information such as office names, locations, administrators, and possibly user counts or other relevant metadata. it's important to note that this endpoint does not modify any office data and is intended for read-only operations. keep in mind that the returned data may be subject to the user's permissions within the dialpad system.
     */
    LIST_OFFICES_ENDPOINT: "DIALPAD_LIST_OFFICES_ENDPOINT",
    /**
     * Retrieves a list of users from the dialpad system. this endpoint allows you to fetch user account information, which is essential for user management and provisioning tasks. it can be used to sync user data with external systems, perform audits, or gather information for reporting purposes. the endpoint likely supports pagination and filtering options to manage large sets of user data efficiently. however, it does not provide real-time updates or webhook functionality for user changes - separate endpoints or features would be needed for those use cases.
     */
    LIST_USERS: "DIALPAD_LIST_USERS",
    /**
     * Updates an existing contact's information in the dialpad system. this endpoint allows for partial updates of contact details, including personal information, communication details, and associated urls. it's used when you need to modify or add information to an existing contact record. the endpoint supports updating multiple fields simultaneously, making it efficient for bulk changes or comprehensive contact updates. note that all fields are optional, allowing for targeted updates without affecting other contact information. when updating list-based fields like emails or phones, the provided lists will replace the existing data entirely.
     */
    MODIFY_CONTACT_DETAILS_USING_ID: "DIALPAD_MODIFY_CONTACT_DETAILS_USING_ID",
    /**
     * Updates a custom interactive voice response (ivr) configuration for a specific target within the dialpad system. this endpoint allows you to assign an existing ivr workflow to a particular target (such as a call center or department) and specify its application for inbound, outbound, or both types of calls. it's particularly useful for customizing call routing and auto-recording settings in call centers. the endpoint requires specifying the target type, target id, and ivr type in the url path, along with the ivr id in the request body. use this when you need to modify ivr settings for specific departments or call centers in your dialpad organization.
     */
    MODIFY_CUSTOM_IVR_SETTINGS: "DIALPAD_MODIFY_CUSTOM_IVR_SETTINGS",
    /**
     * Updates the skill level of a specific operator in a designated call center. this endpoint allows administrators to adjust an operator's proficiency rating, which can be used for call routing, performance tracking, and workforce management. the skill level is represented as an integer from 0 to 100, with higher values indicating greater expertise. use this endpoint when you need to modify an operator's skill level based on performance reviews, training completion, or changes in responsibilities. it's particularly useful for maintaining an up-to-date and accurate representation of your call center team's capabilities.
     */
    MODIFY_OPERATOR_SKILL_LEVEL: "DIALPAD_MODIFY_OPERATOR_SKILL_LEVEL",
    /**
     * Updates an existing webhook configuration in the dialpad api. this endpoint allows you to modify the destination url and/or the secret used for request validation of a specific webhook. use this when you need to change where webhook events are sent or update the security settings of an existing webhook. the endpoint is particularly useful for maintaining webhook configurations as your integration evolves or when you need to rotate security credentials. note that updating these settings will affect all future events for this webhook, so ensure your receiving endpoint is prepared for the changes before updating.
     */
    MODIFY_WEBHOOK_CONFIGURATION: "DIALPAD_MODIFY_WEBHOOK_CONFIGURATION",
    /**
     * Updates a user's office assignment within the dialpad system. this endpoint allows administrators to move a user from their current office to a different office. it should be used when there's a need to change a user's organizational association, such as during departmental transfers or office relocations. the operation is performed by specifying the user's id in the url path and optionally providing the new office id in the request body. if no office id is provided, the user's current office assignment remains unchanged. this endpoint is particularly useful for managing organizational structure and ensuring users are correctly associated with their respective offices in dialpad.
     */
    MOVE_USER_TO_SPECIFIED_OFFICE: "DIALPAD_MOVE_USER_TO_SPECIFIED_OFFICE",
    /**
     * Initiates the oauth 2.0 authorization process for the dialpad api. this endpoint is the entry point for obtaining user consent and generating an authorization code, which can later be exchanged for an access token. it should be used when an application needs to request permission to access a user's dialpad resources. the endpoint will redirect the user to dialpad's login and consent page. after the user grants permission, they will be redirected back to the specified redirect uri with an authorization code. this endpoint is crucial for implementing secure, user-authorized access to dialpad's api features.
     */
    OAUTH2_AUTHORIZE_ENDPOINT: "DIALPAD_OAUTH2_AUTHORIZE_ENDPOINT",
    /**
     * This endpoint allows you to update an existing access control policy in the dialpad system. it provides the ability to modify various attributes of a policy, including its name, description, associated permissions, and state. this endpoint is particularly useful for adjusting policy settings as organizational needs change or for reactivating deleted policies. it's important to note that only company administrators can perform this operation, and care should be taken when modifying permissions to ensure appropriate access levels are maintained. the endpoint doesn't return the updated policy details, so a separate get request may be necessary to confirm changes.
     */
    PATCH_ACCESS_CONTROL_POLICY_BY_ID: "DIALPAD_PATCH_ACCESS_CONTROL_POLICY_BY_ID",
    /**
     * Updates an existing agent status subscription in the dialpad system. this endpoint allows you to modify the configuration of a subscription that tracks changes in agent statuses within a contact center environment. use this to adjust the subscription's enabled state, change the associated logging endpoint, or update the agent type. it's particularly useful for maintaining up-to-date event tracking setups as your contact center needs evolve. note that all fields are optional, allowing for partial updates to the subscription. be cautious when changing the endpoint id, as this will affect where status change events are sent.
     */
    PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION: "DIALPAD_PATCH_AGENT_STATUS_EVENT_SUBSCRIPTION",
    /**
     * Updates an existing call router in the dialpad system. this endpoint allows you to modify various settings of a call router, including its default target, enabled state, name, office association, error handling, routing url, and authentication secret. use this when you need to change the behavior or configuration of an existing call router. the endpoint is particularly useful for adjusting routing logic, updating fallback options, or managing error states. note that while all parameters are optional, providing at least one is necessary to make meaningful changes. be cautious when updating critical parameters like the routing url or secret, as incorrect values could disrupt call routing.
     */
    PATCH_CALL_ROUTER_BY_ID: "DIALPAD_PATCH_CALL_ROUTER_BY_ID",
    /**
     * Updates the settings and configuration of a specific department in the dialpad system. this endpoint allows for comprehensive modification of department properties, including operating hours, call routing strategies, hold queue settings, and voice intelligence features. it's particularly useful for adjusting department behavior to match changing business needs or to optimize call handling efficiency. the endpoint supports partial updates, allowing you to modify only the specific fields you need to change without affecting other settings.
     */
    PATCH_DEPARTMENT_DETAILS_BY_ID: "DIALPAD_PATCH_DEPARTMENT_DETAILS_BY_ID",
    /**
     * Updates an existing change log event subscription in the dialpad system. this endpoint allows you to modify the status of a subscription and associate it with a specific logging endpoint. use this when you need to enable or disable notifications for system changes or when you want to change the destination for these notifications. the endpoint is particularly useful for managing event-driven integrations and maintaining up-to-date information flows between dialpad and external systems. note that updating a subscription does not create new events; it only affects future notifications for the specified change log.
     */
    PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT: "DIALPAD_PATCH_SUBSCRIPTION_CHANGELOG_ENDPOINT",
    /**
     * Updates the call recording settings for an active call of a specific dialpad user. this endpoint allows real-time management of call recording features during an ongoing call, including enabling or disabling recording, controlling the playback of recording indication messages, and specifying the scope of recording for group calls. it should be used when there's a need to dynamically change recording settings mid-call, such as for compliance purposes or user preferences. this endpoint is only effective for active calls and will not affect future calls or general user settings. note that all parameters are optional, allowing for granular control over specific aspects of call recording without affecting others.
     */
    PATCH_USER_ACTIVE_CALL_RECORDING: "DIALPAD_PATCH_USER_ACTIVE_CALL_RECORDING",
    /**
     * Updates the status of a specific user in the dialpad system. this endpoint allows you to set or modify a user's status message and optionally specify an expiration time for that status. it's particularly useful for indicating a user's availability, current activity, or temporary absence. the endpoint should be used when you need to programmatically update a user's status, such as integrating with calendar systems, automatic out-of-office settings, or custom workflow automations. it's important to note that this endpoint updates the status for a single user identified by their id in the url path. the status update is immediate, and if an expiration is set, the status will automatically clear at the specified time. this tool does not retrieve the current status; it only updates it. if you need to fetch the current status before updating, you would need to use a separate get endpoint (not provided in this schema).
     */
    PATCH_USER_STATUS: "DIALPAD_PATCH_USER_STATUS",
    /**
     * Updates the signature secret for a specific websocket connection in the dialpad platform. this endpoint allows you to modify the authentication mechanism used to validate incoming requests to the websocket. use this when you need to rotate the secret for security reasons or when setting up a new authentication scheme for an existing websocket. the update affects future validations and may require updating the secret on the client-side as well. be cautious when using this endpoint, as it can potentially disrupt active connections if not managed properly. note that setting the secret to null effectively removes any signature validation for the websocket, which should only be done if alternative security measures are in place.
     */
    PATCH_WEBSOCKET_SIGNATURE_SECRET: "DIALPAD_PATCH_WEBSOCKET_SIGNATURE_SECRET",
    /**
     * Creates a new call event subscription in the dialpad system, allowing real-time notifications for various call states and actions. this endpoint enables developers to set up targeted event streams for specific call centers, users, or other entities within dialpad. use this when you need to monitor call activities, automate workflows based on call states, or integrate dialpad's call data with external systems. the subscription can be fine-tuned to listen for specific call states and target types, making it versatile for various use cases such as call monitoring, analytics, or custom integrations. note that while the subscription can be created with this endpoint, you'll need to have a properly configured webhook or websocket to receive the events.
     */
    POST_CALL_EVENT_SUBSCRIPTION: "DIALPAD_POST_CALL_EVENT_SUBSCRIPTION",
    /**
     * Creates a shareable link for a specific recording in dialpad, such as a call recording or voicemail. this endpoint allows users to generate a link that can be used to share recordings with others, with customizable privacy settings. it should be used when you need to create a url for sharing a recording outside of the dialpad interface. the endpoint requires specifying the recording id and type, and optionally allows setting the privacy level of the share link. note that this endpoint only creates the share link; it does not modify the recording itself or its storage location.
     */
    POST_RECORDING_SHARE_LINK: "DIALPAD_POST_RECORDING_SHARE_LINK",
    /**
     * Creates or updates a subscription for changelog events in the dialpad system. this endpoint allows developers to set up real-time notifications for changes and updates within dialpad, such as api modifications, feature releases, or system updates. by configuring this subscription, you can ensure your application stays informed about important changes that may affect its integration with dialpad. the subscription can be enabled or disabled as needed, and notifications are sent to a pre-configured webhook or websocket endpoint. use this when you need to monitor dialpad's evolving features and api changes to maintain compatibility and leverage new functionalities promptly.
     */
    POST_SUBSCRIPTION_CHANGE_LOG_EVENT: "DIALPAD_POST_SUBSCRIPTION_CHANGE_LOG_EVENT",
    /**
     * Triggers a screen pop for a specific dialpad user, displaying relevant information during a call or communication event. this endpoint should be used when you need to automatically present contextual data to a user's screen, such as customer information from a crm system. it's particularly useful in contact center scenarios where agents need quick access to caller details. the screen pop url can be a web page or a custom uri to launch a native application. note that this endpoint does not retrieve or send any customer data directly; it only initiates the display of the specified url on the user's device.
     */
    POST_USERS_SCREENPOP_URI: "DIALPAD_POST_USERS_SCREENPOP_URI",
    /**
     * Creates a websocket connection for real-time communication with the dialpad platform. this endpoint enables applications to establish a persistent, full-duplex connection for receiving live updates and event notifications from dialpad. use this when you need to implement features that require instant updates, such as live call status changes, message delivery notifications, or agent availability updates. the websocket connection allows for efficient, low-latency communication, reducing the need for frequent polling of other api endpoints. note that while this endpoint creates the connection, you'll need to implement appropriate event listeners and handlers in your application to process the incoming data streams effectively.
     */
    POST_WEBSOCKET_CONNECTION_SECRET: "DIALPAD_POST_WEBSOCKET_CONNECTION_SECRET",
    /**
     * Assigns or reassigns a phone number to a specific target within the dialpad system. this endpoint allows you to associate a phone number with various entities such as users, departments, call centers, or other supported target types. use this when you need to allocate or reallocate phone numbers across your dialpad organization. the endpoint is particularly useful for managing phone number assignments during user onboarding, department restructuring, or call center setup. note that this operation may affect existing call routing and should be used cautiously in production environments.
     */
    REASSIGN_PHONE_NUMBER_TO_TARGET: "DIALPAD_REASSIGN_PHONE_NUMBER_TO_TARGET",
    /**
     * The oauth 2.0 token endpoint for dialpad's api is used to obtain access tokens for authenticating api requests. it supports two grant types: authorization code and refresh token. for the authorization code flow, it exchanges an authorization code for an access token, enabling secure user authentication without exposing credentials. the refresh token flow allows obtaining a new access token when the current one expires, maintaining long-term access without user intervention. this endpoint is crucial for implementing oauth 2.0 authentication in applications integrating with dialpad's api, ensuring secure and authorized access to user data and dialpad services.
     */
    REDEEM_ACCESS_OR_REFRESH_TOKEN: "DIALPAD_REDEEM_ACCESS_OR_REFRESH_TOKEN",
    /**
     * Removes specified phone numbers from the blocked list in the dialpad system. this endpoint allows you to unblock multiple phone numbers in a single api call, streamlining the process of managing blocked numbers. use this when you need to restore communication capabilities with previously blocked numbers, such as when a number is no longer considered spam or when a block was applied in error. the endpoint accepts a list of e164 formatted numbers, ensuring standardized input across different countries and number formats. note that this operation is irreversible; once numbers are removed from the blocked list, they will be able to communicate with your dialpad account unless blocked again.
     */
    REMOVE_BLOCKED_NUMBERS: "DIALPAD_REMOVE_BLOCKED_NUMBERS",
    /**
     * Retrieves the assignments of a specific access control policy in dialpad. this endpoint allows company administrators to view which users, roles, or groups have been assigned to a particular access control policy. it's useful for auditing and managing permissions within the dialpad platform. the endpoint returns a list of assignments, which may include user ids, role names, or group identifiers associated with the specified policy. use this when you need to review or verify the current assignments of an access control policy, such as during security audits or when updating user permissions. note that this endpoint only provides assignment information and does not allow for modifying the assignments.
     */
    RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS: "DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_ASSIGNMENTS",
    /**
     * Retrieves detailed information about a specific access control policy in the dialpad system. this endpoint allows administrators to fetch the configuration and settings of a particular policy, which defines custom permissions and access levels for users within the dialpad platform. use this endpoint when you need to review or audit the settings of an existing access control policy. it's particularly useful for verifying policy details before making modifications or when troubleshooting access-related issues. the endpoint returns comprehensive information about the policy but does not allow for modifications; separate endpoints would be used for updating policies.
     */
    RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID: "DIALPAD_RETRIEVE_ACCESS_CONTROL_POLICY_BY_ID",
    /**
     * Retrieves detailed information about a specific agent status subscription using its unique identifier. this endpoint is used to fetch the current configuration and settings of an agent status subscription, which may include details such as the associated agent, status types being tracked, and any custom off-duty statuses. it's particularly useful for administrators or supervisors who need to review or troubleshoot individual agent status subscriptions. the endpoint does not modify any data and is safe for frequent calls to keep the client application updated with the latest subscription information. note that this endpoint only provides details for a single subscription and cannot be used to list multiple subscriptions or modify existing ones.
     */
    RETRIEVE_AGENT_STATUS_BY_ID: "DIALPAD_RETRIEVE_AGENT_STATUS_BY_ID",
    /**
     * Retrieves a list of agent status subscriptions from the dialpad system. this endpoint allows you to fetch real-time information about the current subscriptions to agent status events. it is useful for monitoring which agents or systems are subscribed to receive updates about changes in agent statuses, such as availability or activity. this tool should be used when you need to audit or manage the subscriptions related to agent status events in your dialpad integration. note that this endpoint does not provide the actual agent statuses, but rather information about the subscriptions to these status updates.
     */
    RETRIEVE_AGENT_STATUS_SUBSCRIPTION: "DIALPAD_RETRIEVE_AGENT_STATUS_SUBSCRIPTION",
    /**
     * Retrieves the current application settings for the authenticated dialpad account. this endpoint provides access to various configuration options and preferences set for the dialpad application. it should be used when you need to review or audit the current app settings, such as user interface preferences, notification settings, or integration configurations. the endpoint returns a comprehensive list of all available settings, which can be useful for troubleshooting, customization, or ensuring consistency across different instances of the application. note that this endpoint is read-only and does not allow for modifying settings; separate endpoints would be required for updating individual settings.
     */
    RETRIEVE_APP_SETTINGS: "DIALPAD_RETRIEVE_APP_SETTINGS",
    /**
     * Retrieves information about a specific blocked number in the dialpad system. this endpoint allows users or administrators to check if a particular phone number is currently blocked. it's useful for verifying the status of a number before attempting communication or when reviewing security settings. the endpoint returns details about the blocked number, which may include when it was blocked and any associated metadata. it should be used when there's a need to confirm the blocked status of a specific number, but it won't provide a list of all blocked numbers or modify any existing blocks.
     */
    RETRIEVE_BLOCKED_NUMBER_DETAILS: "DIALPAD_RETRIEVE_BLOCKED_NUMBER_DETAILS",
    /**
     * Retrieves a comprehensive list of all phone numbers that have been blocked through the dialpad api. this endpoint is useful for managing call blocking settings and reviewing the current state of blocked numbers associated with your dialpad account. it provides a straightforward way to fetch all blocked numbers without the need for additional parameters. use this endpoint when you need to audit your blocked number list, verify if a specific number is blocked, or prepare for bulk operations on blocked numbers. keep in mind that this endpoint only returns numbers blocked via the api and may not include numbers blocked through other methods in the dialpad interface.
     */
    RETRIEVE_BLOCKED_PHONE_NUMBERS: "DIALPAD_RETRIEVE_BLOCKED_PHONE_NUMBERS",
    /**
     * Retrieves a list of operators associated with a specific call center in dialpad. this endpoint allows you to fetch detailed information about the operators working in a particular call center, which is essential for managing call center operations, monitoring staff, and optimizing workload distribution. use this endpoint when you need to view the current roster of operators, check staffing levels, or gather operator details for reporting purposes. the endpoint returns operator information but does not provide real-time status updates or allow modifications to operator data. it's particularly useful for integrations that require synchronization of call center staff information with external systems or for building custom dashboards to monitor call center composition.
     */
    RETRIEVE_CALLCENTER_OPERATORS_BY_ID: "DIALPAD_RETRIEVE_CALLCENTER_OPERATORS_BY_ID",
    /**
     * Retrieves a list of call centers and their associated information from the dialpad platform. this endpoint allows developers to fetch details about all call centers configured in the dialpad account, including their settings, agent statuses, and operational metrics. it's particularly useful for applications that need to monitor or manage multiple call centers, analyze call center performance, or integrate call center data with other systems. the endpoint returns comprehensive data about each call center, which can be used for reporting, dashboard creation, or automating call center management tasks. note that this endpoint provides a high-level overview of call centers and may not include granular details about individual calls or agents.
     */
    RETRIEVE_CALL_CENTERS_INFORMATION: "DIALPAD_RETRIEVE_CALL_CENTERS_INFORMATION",
    /**
     * Retrieves detailed information about a specific call center in the dialpad system. this endpoint allows you to fetch comprehensive data about a call center, including its configuration, associated agents, and operational metrics. use this when you need to access or review the current state and settings of a particular call center. the endpoint is particularly useful for administrators managing multiple call centers or for integrations that need up-to-date call center information. note that this endpoint only provides read access and cannot be used to modify call center details.
     */
    RETRIEVE_CALL_CENTER_BY_ID: "DIALPAD_RETRIEVE_CALL_CENTER_BY_ID",
    /**
     * Retrieves call information from the dialpad system. this endpoint allows you to fetch details about one or more calls, which may include call duration, participants, timestamps, and other relevant metadata. it can be used to gather historical call data for analysis, reporting, or integration with other systems. the endpoint does not provide real-time call control or the ability to initiate new calls. note that the specific details returned may vary based on user permissions and the scope of the api token used.
     */
    RETRIEVE_CALL_INFORMATION: "DIALPAD_RETRIEVE_CALL_INFORMATION",
    /**
     * Retrieves a list of call routers configured in the dialpad system. this endpoint allows you to fetch information about the call routing setup in your dialpad account, including details such as router identifiers, associated dedicated dids, and routing rules. it's particularly useful for auditing your current call routing configuration or gathering data for reporting purposes. the endpoint provides read-only access to call router information and does not allow modifications to the routing setup. use this when you need to review your call routing structure or integrate call routing information into your applications for advanced call management or analytics.
     */
    RETRIEVE_CALL_ROUTERS_V2_API: "DIALPAD_RETRIEVE_CALL_ROUTERS_V2_API",
    /**
     * Retrieves detailed information about a specific call router in the dialpad system. this endpoint allows developers to fetch the configuration and status of a call router by providing its unique identifier. use this when you need to check the current settings, routing rules, or other properties of a particular call router. it's particularly useful for auditing your call routing setup or before making changes to an existing router. the endpoint returns read-only data and does not modify any settings.
     */
    RETRIEVE_CALL_ROUTER_BY_ID: "DIALPAD_RETRIEVE_CALL_ROUTER_BY_ID",
    /**
     * Retrieves detailed information about a specific call subscription in the dialpad system. this endpoint allows developers to access the current state and configuration of a call subscription, which is used for tracking and receiving notifications about call-related events. it's particularly useful for monitoring the status of automated workflows or integrations that depend on call data. the endpoint should be used when you need to check the details of a single, known call subscription, such as its activation status, associated phone numbers, or event types it's configured to track. it will not modify the subscription or return data about multiple subscriptions.
     */
    RETRIEVE_CALL_SUBSCRIPTION_BY_ID: "DIALPAD_RETRIEVE_CALL_SUBSCRIPTION_BY_ID",
    /**
     * Retrieves detailed information about a specific communication channel in the dialpad platform using its unique identifier. this endpoint allows developers to fetch comprehensive data about a particular channel, which can include its type (e.g., voice, video, or messaging), current status, associated users or groups, and other relevant metadata. it is particularly useful when you need to access or verify the properties of a specific channel within your application. the endpoint should be used when detailed information about a known channel is required, such as during channel management tasks, reporting, or when integrating channel-specific features into your application. note that this endpoint only provides information for a single channel at a time and does not support batch retrieval or listing of multiple channels.
     */
    RETRIEVE_CHANNEL_BY_ID: "DIALPAD_RETRIEVE_CHANNEL_BY_ID",
    /**
     * The getstatistics endpoint retrieves comprehensive statistics for various aspects of dialpad usage, including calls, customer satisfaction (csat), dispositions, on-duty status, recordings, screen shares, texts, and voicemails. it offers flexible options for targeting specific users, groups, or offices, and allows for customized date ranges and aggregation methods. this endpoint is particularly useful for analyzing performance metrics, tracking customer satisfaction, and gaining insights into communication patterns within an organization. it supports both aggregated statistics and individual record retrieval, making it versatile for different analytical needs. however, users should note that certain stat types (like csat and dispositions) require specific targeting parameters and only support individual record retrieval.
     */
    RETRIEVE_COACHING_STATS_V2: "DIALPAD_RETRIEVE_COACHING_STATS_V2",
    /**
     * Retrieves information about coaching teams in the dialpad platform. this endpoint allows users to fetch details about existing coaching teams, which are essential for managing call monitoring, feedback, and agent performance improvement. it provides an overview of team structures, including coaches, trainees, and associated settings. the endpoint is useful for administrators and managers who need to review or manage coaching team configurations across the organization. note that while this endpoint retrieves team information, it does not modify any team settings or structures.
     */
    RETRIEVE_COACHING_TEAMS_INFORMATION: "DIALPAD_RETRIEVE_COACHING_TEAMS_INFORMATION",
    /**
     * Retrieves detailed information about a specific coaching team in dialpad. this endpoint allows users to fetch comprehensive data about a coaching team, including its configuration, members (coaches and trainees), settings, and potentially performance metrics. it should be used when detailed information about a particular coaching team is needed, such as for displaying team details, verifying settings, or analyzing team performance. the endpoint provides a snapshot of the coaching team's current state and does not modify any data. it's particularly useful for managers or administrators who need to review or audit coaching team setups.
     */
    RETRIEVE_COACHING_TEAM_BY_ID: "DIALPAD_RETRIEVE_COACHING_TEAM_BY_ID",
    /**
     * Retrieves detailed information about a specific company within the dialpad platform. this endpoint allows developers to access various company-level data, such as company name, settings, and other relevant details. it should be used when an application needs to fetch or display company information, update local records, or verify company-specific configurations. the endpoint provides a comprehensive view of a company's profile in dialpad but does not modify any data. note that the specific fields returned may depend on the user's permissions and the company's privacy settings.
     */
    RETRIEVE_COMPANY_DATA: "DIALPAD_RETRIEVE_COMPANY_DATA",
    /**
     * Retrieves information about conference meetings in the dialpad platform. this endpoint allows users to fetch details about scheduled, ongoing, or past conference meetings, providing valuable data for managing and analyzing virtual collaboration sessions. it can be used to obtain an overview of meeting activities, track usage patterns, or gather information for reporting purposes. the endpoint is particularly useful for administrators or team leaders who need to monitor conference usage across their organization. note that while this endpoint retrieves meeting data, it does not provide real-time control over active meetings or allow for meeting creation or modification.
     */
    RETRIEVE_CONFERENCE_MEETINGS: "DIALPAD_RETRIEVE_CONFERENCE_MEETINGS",
    /**
     * Retrieves detailed information for a specific contact in your dialpad account using the contact's unique identifier. this endpoint allows you to fetch comprehensive data about a single contact, including their name, phone numbers, email addresses, and any custom fields associated with the contact. use this when you need to access or display detailed information about a particular contact in your application. the endpoint is useful for scenarios such as populating contact details in a crm integration or displaying contact information during an active call. note that this endpoint only retrieves information for one contact at a time and does not support batch retrieval or searching across multiple contacts.
     */
    RETRIEVE_CONTACT_BY_ID: "DIALPAD_RETRIEVE_CONTACT_BY_ID",
    /**
     * Retrieves a list of contacts from the dialpad platform. this endpoint allows you to fetch contact information, which is crucial for managing user data and communication records within your dialpad-integrated application. it supports pagination, searching, and sorting to efficiently handle large contact lists. use this endpoint when you need to access or display contact information, sync contacts with other systems, or perform contact-related operations in your application. the endpoint returns basic contact details, but may not include sensitive information or full communication history.
     */
    RETRIEVE_CONTACT_LIST: "DIALPAD_RETRIEVE_CONTACT_LIST",
    /**
     * Retrieves detailed information about a specific department within the dialpad organization. this endpoint allows you to fetch comprehensive data about a department, including its name, description, member count, and other relevant attributes. use this endpoint when you need to access or display information about a particular department, such as for department management interfaces or generating reports. the endpoint returns the most up-to-date information available for the specified department. note that this endpoint only provides read access to department data and cannot be used to modify department information.
     */
    RETRIEVE_DEPARTMENT_BY_ID: "DIALPAD_RETRIEVE_DEPARTMENT_BY_ID",
    /**
     * Retrieves a list of operators associated with a specific department in dialpad. this endpoint allows you to fetch detailed information about the operators assigned to a particular department, enabling efficient management of department resources and personnel. use this endpoint when you need to review, audit, or manage the operators within a specific department. the response likely includes operator details such as names, contact information, and roles. note that this endpoint does not modify any department or operator data; it is for retrieval purposes only. it's particularly useful for administrative tasks, reporting, and ensuring proper staffing across departments.
     */
    RETRIEVE_DEPARTMENT_OPERATORS_BY_ID: "DIALPAD_RETRIEVE_DEPARTMENT_OPERATORS_BY_ID",
    /**
     * Retrieves the enhanced 911 (e911) settings for a specific office within the dialpad communication platform. this endpoint allows administrators to fetch crucial emergency service configuration details associated with a particular office location. it should be used when auditing or verifying e911 compliance, updating emergency response information, or integrating office-specific emergency settings into external systems. the endpoint provides read-only access to e911 data and does not allow modifications. it's important to note that this tool only retrieves settings for a single office at a time and does not provide aggregate data across multiple offices.
     */
    RETRIEVE_E911_OFFICE_DETAILS: "DIALPAD_RETRIEVE_E911_OFFICE_DETAILS",
    /**
     * Retrieves a list of departments for a specified office within the dialpad organization. this endpoint is essential for obtaining the organizational structure and can be used to populate department selectors, generate reports, or manage team assignments. it returns basic information about each department, such as its name, id, and possibly the number of members. the endpoint should be used when needing an up-to-date view of the departmental structure within an office. it does not provide detailed information about individual department members or historical data about department changes. pagination parameters may be necessary for offices with a large number of departments to manage response sizes and api performance.
     */
    RETRIEVE_LIST_OF_DEPARTMENTS: "DIALPAD_RETRIEVE_LIST_OF_DEPARTMENTS",
    /**
     * Retrieves a list of members belonging to a specific coaching team in dialpad. this endpoint allows you to fetch all users assigned to a particular coaching team, including both coaches and trainees. it's useful for getting an overview of team composition, managing team members, or integrating team information into other systems. the endpoint returns member details, which may include user ids, names, roles, and other relevant information. use this when you need to review or analyze the current membership of a coaching team, or when syncing team data with external applications.
     */
    RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID: "DIALPAD_RETRIEVE_MEMBERS_OF_COACHING_TEAM_BY_ID",
    /**
     * Retrieves a list of phone numbers associated with the user's dialpad account. this endpoint allows users to view all the phone numbers they have access to, which may include both assigned and unassigned numbers. it's useful for inventory management, number allocation, and auditing purposes. the endpoint returns basic information about each number, such as its value, status, and associated user or department. it does not modify any data and is safe for frequent polling. note that the response may be paginated for large number inventories, and additional calls may be needed to retrieve the full list.
     */
    RETRIEVE_NUMBERS_VIA_API_V2: "DIALPAD_RETRIEVE_NUMBERS_VIA_API_V2",
    /**
     * Retrieves detailed information about a specific office within the dialpad system. this endpoint should be used when you need to access comprehensive data about a particular office, such as its name, location, assigned users, or custom settings. it's particularly useful for administrative tasks, reporting, or displaying office information in integrated applications. the endpoint returns all available details for the specified office, making it efficient for obtaining a complete office profile in a single api call. however, it does not allow for modifying office information or retrieving data for multiple offices simultaneously.
     */
    RETRIEVE_OFFICE_BY_ID: "DIALPAD_RETRIEVE_OFFICE_BY_ID",
    /**
     * Retrieves the current plan details for a specific office in your dialpad organization. this endpoint allows you to fetch information about the subscribed features, limitations, and other plan-specific details for a given office. use this endpoint when you need to review or verify the current plan status of an office, such as during account management or when considering plan upgrades. the response will likely include details such as the plan name, included features, user limits, and any custom configurations. note that this endpoint only provides read-only access to plan information and cannot be used to modify or update the office plan.
     */
    RETRIEVE_OFFICE_PLAN_BY_ID: "DIALPAD_RETRIEVE_OFFICE_PLAN_BY_ID",
    /**
     * Retrieves the list of custom off-duty statuses for a specific office within the dialpad system. this endpoint is used to fetch and manage the availability statuses of agents assigned to a particular office. it provides administrators and supervisors with insights into why agents might be stepping away from their desks, helping to track and understand agent activity. the endpoint should be used when there's a need to review, update, or manage the off-duty status options for a given office. it's particularly useful for larger organizations with multiple offices that may have different sets of off-duty statuses. note that this endpoint only retrieves the statuses and does not provide real-time information about which agents are currently using each status.
     */
    RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID: "DIALPAD_RETRIEVE_OFF_DUTY_STATUS_BY_OFFICE_ID",
    /**
     * Retrieves the current duty status of a specific call center operator in dialpad. this endpoint allows you to check whether an operator is active (available to receive inbound calls) or off-duty (not available for calls). use this endpoint when you need to determine an operator's availability in real-time, such as for load balancing, scheduling, or monitoring operator activity. the endpoint provides a snapshot of the operator's current status and does not include historical data or future scheduled statuses. it's particularly useful for systems that need to make routing decisions based on operator availability or for creating dashboards that display team capacity.
     */
    RETRIEVE_OPERATOR_DUTY_STATUS: "DIALPAD_RETRIEVE_OPERATOR_DUTY_STATUS",
    /**
     * Retrieves detailed information about a specific room in the dialpad system. this endpoint allows you to fetch the current state, settings, and properties of a virtual collaboration space identified by its unique id. use this when you need to access up-to-date information about a particular room, such as its name, participants, or configuration. the endpoint is particularly useful for applications that need to display room details or make decisions based on a room's current status. note that this endpoint only provides information and does not modify the room in any way.
     */
    RETRIEVE_ROOM_INFORMATION_BY_ID: "DIALPAD_RETRIEVE_ROOM_INFORMATION_BY_ID",
    /**
     * Retrieves detailed information about a specific scheduled report in the dialpad system. this endpoint allows you to fetch the configuration and metadata of a pre-defined report, which may include communication metrics, analytics, or other relevant data aggregated from dialpad's communication platform. use this endpoint when you need to access or review the settings of a particular scheduled report, such as its frequency, included data points, or last run time. it's particularly useful for auditing report configurations or preparing to update existing reports. note that this endpoint only retrieves the report configuration, not the actual report data itself. to get the latest generated report content, you may need to use a separate endpoint or check if this response includes a link to the most recent report output.
     */
    RETRIEVE_SCHEDULE_REPORT_BY_ID: "DIALPAD_RETRIEVE_SCHEDULE_REPORT_BY_ID",
    /**
     * Retrieves the sms opt-out list for a specific company within the dialpad platform. this endpoint allows you to fetch all phone numbers that have opted out of receiving sms messages from the specified company. use this endpoint when you need to check which recipients have unsubscribed from sms communications, ensuring compliance with messaging regulations and user preferences. the returned list can be used to update your contact database or messaging system to prevent sending unwanted messages. note that this endpoint only provides the opt-out information and does not modify the opt-out status of any recipients.
     */
    RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID: "DIALPAD_RETRIEVE_SMS_OPT_OUT_BY_COMPANY_ID",
    /**
     * Retrieves a list of sms subscriptions associated with the authenticated user's dialpad account. this endpoint allows users to view and manage their current sms subscription plans and settings. it should be used when you need to obtain information about active sms subscriptions, such as subscription status, plan details, or associated phone numbers. the endpoint provides an overview of sms-related services but does not allow for modification of subscriptions. note that this endpoint may have pagination for large numbers of subscriptions, and additional calls might be necessary to retrieve the complete list.
     */
    RETRIEVE_SMS_SUBSCRIPTIONS: "DIALPAD_RETRIEVE_SMS_SUBSCRIPTIONS",
    /**
     * Retrieves detailed information about a specific sms subscription in dialpad. this endpoint allows developers to fetch the current status, configuration, and other relevant details of an sms subscription by providing its unique identifier. use this endpoint when you need to check the properties of an existing sms subscription, such as its active status, associated phone number, or any custom settings. it's particularly useful for managing and monitoring sms capabilities within your dialpad integration. note that this endpoint only provides read access to subscription data and cannot be used to modify or create new subscriptions.
     */
    RETRIEVE_SMS_SUBSCRIPTION_BY_ID: "DIALPAD_RETRIEVE_SMS_SUBSCRIPTION_BY_ID",
    /**
     * Retrieves detailed information about a specific webhook configuration in the dialpad system. this endpoint allows developers to fetch the current status, settings, and event subscriptions for a particular webhook identified by its unique id. use this endpoint when you need to check the configuration of an existing webhook, verify its status, or retrieve its associated event types. it's particularly useful for troubleshooting webhook-related issues or auditing webhook configurations. the endpoint returns comprehensive data about the webhook, including its target url, subscribed events, and any custom headers or authentication settings.
     */
    RETRIEVE_SPECIFIC_WEBHOOK_BY_ID: "DIALPAD_RETRIEVE_SPECIFIC_WEBHOOK_BY_ID",
    /**
     * Retrieves detailed statistics and analytics data for a specific entity within the dialpad platform. this endpoint allows you to access performance metrics, communication data, and other relevant statistics for a user, team, or call center identified by the provided id. use this endpoint when you need to analyze the performance or usage patterns of a particular entity within your dialpad organization. the data returned may include call volumes, average call durations, customer satisfaction scores, and other communication metrics. note that the specific metrics available may vary depending on the type of entity (user, team, or call center) and your organization's settings. this endpoint is particularly useful for generating reports, monitoring performance, and making data-driven decisions to improve communication efficiency and effectiveness.
     */
    RETRIEVE_STAT_BY_ID: "DIALPAD_RETRIEVE_STAT_BY_ID",
    /**
     * Retrieves the changelog for dialpad api subscriptions. this endpoint provides a historical record of changes and updates made to subscription events and notifications within the dialpad system. it's useful for tracking modifications to webhooks, event subscriptions, and other notification-related configurations over time. the changelog can help developers understand when and how subscription settings have been altered, aiding in troubleshooting and maintaining up-to-date integrations. note that while the endpoint doesn't appear to require specific parameters, it may support optional query parameters for filtering or pagination, which are not visible in the provided schema.
     */
    RETRIEVE_SUBSCRIPTION_CHANGE_LOG: "DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG",
    /**
     * Retrieves the changelog for a specific subscription in the dialpad system. this endpoint allows you to access a historical record of changes made to a particular subscription, including updates, modifications, or status changes. it is useful for auditing purposes, troubleshooting issues, or tracking the evolution of a subscription over time. the endpoint returns a chronological list of changes, likely including details such as the date of change, type of change, and any relevant metadata. note that this endpoint only provides changelog information and does not allow for modifying the subscription itself.
     */
    RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID: "DIALPAD_RETRIEVE_SUBSCRIPTION_CHANGE_LOG_BY_ID",
    /**
     * Retrieves subscription information for contacts in the dialpad system. this endpoint allows you to fetch details about contact event subscriptions, which are crucial for receiving real-time notifications about contact-related events such as updates, calls, or sms activities. use this endpoint when you need to monitor or manage the current contact subscriptions in your dialpad integration. it provides a comprehensive view of all active contact subscriptions, enabling you to track which contact events you're currently listening to. note that this endpoint likely returns all contact subscriptions associated with your account, and may not support filtering or pagination in the request.
     */
    RETRIEVE_SUBSCRIPTION_CONTACTS: "DIALPAD_RETRIEVE_SUBSCRIPTION_CONTACTS",
    /**
     * Retrieves a list of teams associated with a specific office in the dialpad organization. this endpoint is useful for getting an overview of the team structure within a particular office, which can be valuable for administrative tasks, reporting, or integrating dialpad's organizational structure with other systems. it should be used when you need to obtain information about multiple teams within a single office context. the endpoint will not provide detailed information about individual team members or their communications; it focuses solely on team-level data within the specified office.
     */
    RETRIEVE_TEAMS_FOR_OFFICE_ID: "DIALPAD_RETRIEVE_TEAMS_FOR_OFFICE_ID",
    /**
     * Retrieves a list of devices associated with users in the dialpad system. this endpoint allows you to fetch information about various communication devices used within your dialpad organization, such as desk phones, softphones, or mobile devices. use this endpoint when you need to inventory or manage the devices connected to user accounts, track device usage, or troubleshoot device-related issues. the response likely includes details such as device type, status, associated user, and device-specific information. this tool is particularly useful for administrators managing a large number of devices across their organization or for integrating device information into custom dashboards or management systems. note that while the endpoint doesn't specify any parameters, it may support query parameters for filtering results, such as by user id or device type. the exact structure of the response and any available filters would need to be confirmed in the full api documentation.
     */
    RETRIEVE_USER_DEVICES_LIST: "DIALPAD_RETRIEVE_USER_DEVICES_LIST",
    /**
     * Retrieves detailed information about a specific user device associated with a dialpad account. this endpoint allows developers to fetch the current state and configuration of a particular device by providing its unique identifier. use this when you need to access up-to-date information about a user's device, such as its type, status, or associated settings. the endpoint is particularly useful for device management, troubleshooting, or syncing device information across integrated systems. note that this endpoint only provides read access to device data and cannot be used to modify device settings.
     */
    RETRIEVE_USER_DEVICE_BY_ID: "DIALPAD_RETRIEVE_USER_DEVICE_BY_ID",
    /**
     * Retrieves all personas associated with a specific user in the dialpad system. this endpoint allows you to fetch the various identities or roles that a user can assume when making calls, providing detailed information about each persona. use this endpoint when you need to display or manage the different caller identities available to a user. the response will include a list of persona objects, each containing information such as the persona name, phone number, and any associated metadata. this endpoint is particularly useful for applications that need to offer users a choice of outbound caller identities or for administrative purposes to review a user's available personas.
     */
    RETRIEVE_USER_PERSONAS_BY_ID: "DIALPAD_RETRIEVE_USER_PERSONAS_BY_ID",
    /**
     * Retrieves detailed information about a specific websocket connection using its unique identifier. this endpoint allows developers to query the status, metadata, and other relevant details of an active or recent websocket connection in the dialpad system. it's particularly useful for monitoring real-time event subscriptions, troubleshooting connection issues, or auditing websocket usage. the endpoint should be used when you need to inspect or verify the state of a particular websocket connection, such as checking if it's still active or retrieving its configuration. note that this endpoint provides information about the connection itself and may not include the actual event data being transmitted through the websocket.
     */
    RETRIEVE_WEBSOCKET_BY_ID: "DIALPAD_RETRIEVE_WEBSOCKET_BY_ID",
    /**
     * Retrieves information about websocket connections or initiates a websocket connection for real-time event subscriptions with dialpad. this endpoint is essential for applications that require live updates and real-time communication capabilities within the dialpad platform. it enables developers to establish a persistent connection for receiving instant notifications about various events such as calls, sms, contacts, agent status, and system changes. use this endpoint when building applications that need to react immediately to dialpad events or maintain a live data stream. note that while this endpoint provides the websocket connection details, you may need to implement the websocket client separately to handle the actual connection and data exchange.
     */
    RETRIEVE_WEBSOCKET_CONNECTION: "DIALPAD_RETRIEVE_WEBSOCKET_CONNECTION",
    /**
     * The sendsms endpoint allows you to send sms or mms messages through the dialpad platform to one or multiple recipients. this versatile tool supports various sender identification methods, group messaging, and media attachments. use it to programmatically send text or multimedia messages, integrate with dialpad channels, and leverage organizational structures for messaging. the endpoint is particularly useful for automating communication workflows, sending notifications, or implementing messaging features within applications integrated with dialpad. note that while the endpoint offers flexibility in number formatting and sender identification, proper authorization and adherence to messaging regulations are assumed to be handled separately.
     */
    SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER: "DIALPAD_SEND_SMS_WITH_OPTIONAL_MEDIA_AND_GROUP_SENDER",
    /**
     * Sets or blocks the caller id for a specific dialpad user. this endpoint allows you to define the phone number that will be displayed when the user makes outgoing calls, or to block the caller id entirely. use this when you need to customize how a user's calls appear to recipients or to ensure privacy by blocking the caller id. the endpoint is particularly useful for managing professional appearances in business communications or for compliance with privacy regulations. note that this setting affects all outgoing calls made by the user through the dialpad platform.
     */
    SET_USER_CALLER_ID_BY_ID: "DIALPAD_SET_USER_CALLER_ID_BY_ID",
    /**
     * Creates a new contact event subscription in the dialpad platform, allowing you to receive real-time updates about changes to contacts. this endpoint enables you to subscribe to events for either local (personal) or shared (organization-wide) contacts. use this when you need to integrate contact management functionalities or automate workflows based on contact updates in your dialpad-connected application. the subscription can be linked to a specific logging endpoint (webhook or websocket) for event delivery and can be enabled or disabled upon creation. note that you must have previously set up a logging endpoint to receive the events if you specify an endpoint id.
     */
    SUBSCRIBE_CONTACT_EVENT: "DIALPAD_SUBSCRIBE_CONTACT_EVENT",
    /**
     * The toggleuserdonotdisturb endpoint allows you to update the do not disturb (dnd) status for a specific user in the dialpad system. this powerful feature enables programmatic control over a user's availability, helping to manage notifications and improve focus time. the endpoint can be used to enable or disable dnd for an individual user, and optionally within the context of a specific group (such as a call center, department, or office). this granular control makes it ideal for implementing custom availability management solutions or integrating with external scheduling systems. keep in mind that changing a user's dnd status may affect their ability to receive incoming communications, so use this endpoint judiciously and in accordance with your organization's communication policies.
     */
    TOGGLE_USER_DO_NOT_DISTURB_STATUS: "DIALPAD_TOGGLE_USER_DO_NOT_DISTURB_STATUS",
    /**
     * Toggles the voice intelligence (vi) feature for a specific dialpad user. this endpoint allows administrators to enable or disable vi capabilities for individual users, which includes features like real-time transcription, sentiment analysis, and smart notes during calls. use this endpoint when you need to manage vi access on a per-user basis, such as when onboarding new team members or adjusting feature access based on user roles or requirements. the endpoint requires the user's id in the url path and accepts a boolean parameter to set the vi status. note that this operation may affect billing or feature availability for the specified user, so it should be used judiciously and in accordance with your organization's policies.
     */
    TOGGLE_VI_CALL_FOR_USER_BY_ID: "DIALPAD_TOGGLE_VI_CALL_FOR_USER_BY_ID",
    /**
     * Transfers an active call within the dialpad system to a new destination. this endpoint allows for flexible call routing by enabling transfers to another ongoing call, a specific phone number, or a predefined target within the dialpad ecosystem (such as a call center, department, office, or user). it provides options to specify the transfer state and attach custom data to the call. use this endpoint when you need to programmatically redirect an ongoing call, implement call forwarding logic, or integrate dialpad's call transfer functionality into your application's workflow. note that the success of the transfer may depend on the availability and settings of the destination.
     */
    TRANSFER_CALL_TO_DESTINATION: "DIALPAD_TRANSFER_CALL_TO_DESTINATION",
    /**
     * This endpoint unassigns a user from a specific access control policy in dialpad. it allows for granular control over policy assignments by supporting unassignment at different target levels (company, office, or call center). the endpoint can be used to remove a user's access to specific settings or features defined by the policy. it's particularly useful when modifying user permissions or during role changes within the organization. the endpoint provides flexibility in unassigning from a single target or all associated targets simultaneously.
     */
    UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER: "DIALPAD_UNASSIGN_ACCESS_CONTROL_POLICY_FROM_USER",
    /**
     * This endpoint unassigns a specific phone number from a dialpad office. it is used to remove the association between a phone number and an office, which can be helpful for reorganizing phone number allocations or preparing a number for reassignment. the endpoint should be used when an administrator needs to free up a phone number from its current office assignment. it's important to note that this action only unassigns the number from the office and does not delete the number from the dialpad account. after unassignment, the number becomes available for reassignment to other offices or users within the organization. ensure that unassigning a number won't disrupt ongoing communications or routing rules associated with that number.
     */
    UNASSIGN_OFFICE_NUMBER: "DIALPAD_UNASSIGN_OFFICE_NUMBER",
    /**
     * This endpoint unassigns a phone number from a specific room in the dialpad system. it allows you to remove a previously assigned phone number from a room, freeing it up for potential reassignment or to adjust room configurations. use this when you need to change the phone number associated with a room or when decommissioning a room's phone capabilities. the operation is irreversible, so ensure you want to remove the number before making the api call. note that this endpoint doesn't provide information about the success of the operation or the current state of the room after unassignment.
     */
    UNASSIGN_ROOM_PHONE_NUMBER: "DIALPAD_UNASSIGN_ROOM_PHONE_NUMBER",
    /**
     * Unassigns a specified phone number from a user's dialpad account. this endpoint should be used when you need to remove a phone number association from a particular user, such as when an employee changes roles or leaves the organization. it allows for efficient management of phone number resources within your dialpad system. the operation is irreversible, so ensure that you want to remove the number from the user before making the api call. note that this endpoint only unassigns the number; it does not delete the number from your dialpad account or make it available for immediate reassignment to another user.
     */
    UNASSIGN_USER_PHONE_NUMBER: "DIALPAD_UNASSIGN_USER_PHONE_NUMBER",
    /**
     * Unparks a previously parked call in the dialpad system. this endpoint allows you to retrieve a call that was temporarily placed on hold (parked) and assign it to a specific user for handling. it's particularly useful in call center or team environments where calls may need to be transferred or picked up by different team members. the endpoint should be used when a parked call needs to be reactivated and connected to a user. it's important to note that this action may affect call routing and should be used judiciously to ensure proper call flow management.
     */
    UNPARK_CALL_BY_USER_ID: "DIALPAD_UNPARK_CALL_BY_USER_ID",
    /**
     * Updates the configuration of an existing call center in the dialpad platform. this endpoint allows for comprehensive modifications to call center settings, including operational hours, routing strategies, hold queue management, alerts, and advanced features like auto call recording and voice intelligence. it's particularly useful for adjusting call center operations to meet changing business needs or to optimize performance based on analytics. the endpoint provides granular control over various aspects of call center management, enabling customization of everything from service level alerts to dtmf menu options for both open and closed states. when using this endpoint, carefully consider the interdependencies between different settings to ensure a cohesive call center configuration.
     */
    UPDATE_CALL_CENTER_SETTINGS_BY_ID: "DIALPAD_UPDATE_CALL_CENTER_SETTINGS_BY_ID",
    /**
     * Updates the privacy settings of an existing call review share link in dialpad. this endpoint allows you to modify the accessibility of a shared call recording, controlling whether it can be viewed only by company members or by anyone with the link. use this when you need to adjust the visibility of a previously shared call review, either to increase security by limiting access to the company or to allow broader access by making it public. it's particularly useful for managing sensitive information in call recordings or adapting to changing collaboration needs. note that this endpoint only modifies the privacy settings and does not create new share links or alter the content of the call review itself.
     */
    UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY: "DIALPAD_UPDATE_CALL_REVIEW_SHARE_LINK_PRIVACY",
    /**
     * Updates an existing call event subscription in the dialpad system. this endpoint allows you to modify various aspects of a subscription, including the call states to monitor, the subscription's active status, associated logging endpoint, and event filtering criteria. use this when you need to adjust the behavior of an existing subscription, such as changing which call events you receive notifications for or updating the target of the subscription. it's particularly useful for fine-tuning your application's integration with dialpad's real-time call event system. note that this endpoint updates only the specified fields; unspecified fields retain their current values.
     */
    UPDATE_CALL_SUBSCRIPTION_BY_ID: "DIALPAD_UPDATE_CALL_SUBSCRIPTION_BY_ID",
    /**
     * Updates an existing contact's information in the dialpad system. this endpoint allows you to modify various details of a contact, including their name, company, contact information, and job details. it's particularly useful for keeping contact records up-to-date or correcting information. the endpoint requires at least the first name, last name, and a unique identifier (uid) to update a contact. other fields such as email addresses, phone numbers, and urls can be optionally updated. note that this endpoint overwrites existing data, so include all current information along with any changes to avoid unintended data loss.
     */
    UPDATE_CONTACT_INFORMATION: "DIALPAD_UPDATE_CONTACT_INFORMATION",
    /**
     * Updates an existing contact event subscription in the dialpad system. this endpoint allows you to modify the configuration of a subscription, including changing the contact type it listens for, enabling or disabling the subscription, and associating it with a different logging endpoint. use this when you need to adjust the behavior of an existing contact event subscription, such as changing its scope from local to shared contacts or temporarily disabling event notifications. the subscription id must be provided in the url path. note that this endpoint only updates the specified fields; any fields not included in the request will retain their current values.
     */
    UPDATE_CONTACT_SUBSCRIPTION_BY_ID: "DIALPAD_UPDATE_CONTACT_SUBSCRIPTION_BY_ID",
    /**
     * This endpoint updates the enhanced 911 (e911) address for a specific office in dialpad. it allows you to modify crucial location information used by emergency services to accurately locate the office in case of an emergency call. the endpoint can update the address for the office itself and optionally for all users associated with that office. it also provides an option to validate the address using dialpad's service, ensuring the highest possible accuracy for emergency response. use this endpoint when setting up a new office, relocating an existing office, or correcting address information. it's particularly important for maintaining compliance with e911 regulations and ensuring employee safety.
     */
    UPDATE_E911_ADDRESS_FOR_OFFICE: "DIALPAD_UPDATE_E911_ADDRESS_FOR_OFFICE",
    /**
     * Updates the e911 address for a specified user in the dialpad system. this endpoint allows you to modify the emergency location information associated with a user's account, ensuring accurate dispatch of emergency services if needed. the updated address will be used for e911 services, which provide precise location data to emergency responders. this tool should be used when a user's physical location changes or when correcting inaccurate e911 address information. it's crucial for maintaining compliance with e911 regulations and ensuring user safety. the endpoint requires detailed address information and offers an option for address validation to improve accuracy.
     */
    UPDATE_E911_ADDRESS_FOR_USER: "DIALPAD_UPDATE_E911_ADDRESS_FOR_USER",
    /**
     * Updates an existing custom interactive voice response (ivr) workflow in the dialpad system. this endpoint allows you to modify the name and description of a specific ivr identified by its unique id. use this when you need to rename an ivr or update its description to reflect changes in its purpose or functionality. the operation is partial, meaning you can update either the name, the description, or both without affecting other properties of the ivr. this endpoint is particularly useful for maintaining accurate and up-to-date documentation of your ivr systems, especially in large-scale deployments where clear labeling is crucial. note that this operation only updates metadata and does not alter the actual call flow or logic of the ivr.
     */
    UPDATE_IVR_DETAILS_BY_ID: "DIALPAD_UPDATE_IVR_DETAILS_BY_ID",
    /**
     * Updates the duty status of a specific call center operator in dialpad. this endpoint allows you to change an operator's availability and optionally provide a reason for their status. use this when you need to manage operator schedules, indicate break times, or adjust availability in real-time. the endpoint is crucial for maintaining up-to-date operator statuses, which directly impact call routing and overall call center efficiency. note that this operation only updates the duty status and reason; it does not modify any other operator information or settings.
     */
    UPDATE_OPERATOR_DUTY_STATUS: "DIALPAD_UPDATE_OPERATOR_DUTY_STATUS",
    /**
     * Updates the privacy settings of a specific recording share link in dialpad. this endpoint allows you to modify who can access a shared call recording by changing its privacy state. use this when you need to adjust the visibility of a recording, such as making it public for external sharing or restricting it to company-only access. the endpoint requires the id of the recording share link to be updated, which should be provided in the url path. note that this operation only changes the privacy settings and does not create or delete the share link itself.
     */
    UPDATE_RECORDING_SHARE_LINK_PRIVACY: "DIALPAD_UPDATE_RECORDING_SHARE_LINK_PRIVACY",
    /**
     * Updates the configuration of a specific dialpad room identified by its id. this endpoint allows you to modify the room's name and manage its assigned phone numbers. use this when you need to rename a room, update its phone number assignments, or reorder existing phone numbers. the endpoint is particularly useful for maintaining accurate room information and adjusting telephony settings as your organization's needs change. note that this is a partial update operation, so only the fields you provide will be modified. be cautious when updating phone numbers, as reordering or removing numbers from the list will affect their assignment to the room.
     */
    UPDATE_ROOM_DETAILS: "DIALPAD_UPDATE_ROOM_DETAILS",
    /**
     * The updatescheduledreport endpoint allows you to modify the settings of an existing scheduled report in dialpad. this powerful tool enables fine-tuning of report generation parameters, including frequency, timing, type, and scope. use this endpoint when you need to adjust report schedules, change report types, update target information, or modify other settings of a previously configured report. the endpoint is particularly useful for adapting reporting needs as your organization's requirements evolve. it provides flexibility in managing various aspects of scheduled reports, from basic timing adjustments to more complex changes in report focus and delivery. keep in mind that this endpoint updates an existing report schedule; it does not create new schedules or generate reports on demand. also, note that some parameters are interdependent (e.g., frequency, at, and on day), so ensure their values are consistent when making updates.
     */
    UPDATE_SCHEDULE_REPORT_SETTINGS: "DIALPAD_UPDATE_SCHEDULE_REPORT_SETTINGS",
    /**
     * Updates an existing sms event subscription in the dialpad api. this endpoint allows you to modify various aspects of an sms subscription, such as its direction, enabled status, associated endpoint, and target settings. use this when you need to change the configuration of an existing sms event subscription to adjust its behavior or scope. the endpoint provides flexibility in updating multiple parameters simultaneously, allowing for fine-tuned control over sms event notifications. note that all parameters are optional, so you can update only the specific fields you want to change without affecting the others.
     */
    UPDATE_SMS_SUBSCRIPTION_SETTINGS: "DIALPAD_UPDATE_SMS_SUBSCRIPTION_SETTINGS",
    /**
     * This endpoint allows you to update various aspects of a user's profile and settings in the dialpad system. it provides comprehensive control over user management, including personal information, administrative roles, communication settings, and account status. use this endpoint when you need to modify existing user data, such as changing contact details, adjusting administrative privileges, updating license types, or managing phone numbers and extensions. the endpoint is particularly useful for keeping user information up-to-date and managing user access within the dialpad platform. note that some changes, like updating license types or office assignments, may have billing implications. ensure you have the necessary permissions and understand the impact of changes before using this endpoint.
     */
    UPDATE_USER_INFORMATION_BY_ID: "DIALPAD_UPDATE_USER_INFORMATION_BY_ID",
    /**
     * Validates a callback request for the dialpad system. this endpoint is used to check if a callback can be successfully initiated for a given call center and phone number. it helps ensure that the necessary information is correct and available before actually placing the callback. use this endpoint when you need to verify the validity of a callback request, such as before scheduling or queuing a callback. the endpoint does not initiate the actual callback; it only performs validation. note that both parameters are optional, allowing for flexible validation scenarios, but providing both ensures the most comprehensive validation.
     */
    VALIDATE_CALLBACK_REQUEST: "DIALPAD_VALIDATE_CALLBACK_REQUEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DIALPAD".
 */
export type DIALPAD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DIALPAD".
 */
export type DIALPAD_TRIGGER_EVENTS = {}
