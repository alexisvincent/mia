// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_MANAGERS tool input.
 */
type CALLPAGE_GET_ALL_MANAGERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of manager records to return.
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set.
   * @default 0
   */
  offset: number | null;
  /**
   * Widget Id
   * @description Identifier of the widget to list managers for.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_MANAGERS tool output.
 */
type CALLPAGE_GET_ALL_MANAGERS_OUTPUT = {
  /**
   * Data
   * @description List of manager assignments for the widget.
   */
  data?: {
      /**
       * Manager Id
       * @description Unique identifier of the manager record.
       */
      manager_id: number;
      /**
       * User Id
       * @description Unique identifier of the user assigned as manager.
       */
      user_id: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Numeric error code (0 if successful).
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Indicates if the API request resulted in an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Additional information about the API response.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_SMS_MESSAGES tool input.
 */
type CALLPAGE_GET_ALL_SMS_MESSAGES_INPUT = {
  /**
   * Widget Id
   * @description Widget identifier. You can find it in the widgets tab.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_SMS_MESSAGES tool output.
 */
type CALLPAGE_GET_ALL_SMS_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description List of SMS messages for the given widget.
   */
  data?: {
      /**
       * Enabled
       * @description Whether the SMS message is enabled.
       */
      enabled: boolean;
      /**
       * Message Id
       * @description Identifier of the SMS message.
       */
      message_id: string;
      /**
       * Text
       * @description Text content of the SMS message.
       */
      text: string;
      /**
       * Updated At
       * @description Timestamp of last update, or null if never updated.
       * @default null
       */
      updated_at: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code, if any.
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Indicates if an error occurred.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Error message, if any.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_USERS tool input.
 */
type CALLPAGE_GET_ALL_USERS_INPUT = {
  /**
   * Limit
   * @description If set, the result will be limited to this number of users.
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description If set, the result will be offset by this value for pagination.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_USERS tool output.
 */
type CALLPAGE_GET_ALL_USERS_OUTPUT = {
  /**
   * Data
   * @description List of user objects returned by this call.
   */
  data?: {
      /**
       * Activated At
       * @description Timestamp when user was activated.
       */
      activated_at: string;
      /**
       * Avatar
       * @description URL to user's avatar image, or null.
       * @default null
       */
      avatar: string | null;
      /**
       * Caller Id
       * @description Caller ID settings for the user.
       */
      caller_id: {
          /**
           * Activated At
           * @description Timestamp when caller ID was activated, or null.
           * @default null
           */
          activated_at: string | null;
          /**
           * Id
           * @description Identifier of the caller ID record.
           */
          id: number;
          /**
           * Updated At
           * @description Timestamp when caller ID was last updated.
           */
          updated_at: string;
      };
      /**
       * Email
       * @description User's email address, or null if not assigned.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique user identifier.
       */
      id: number;
      /**
       * Last Online
       * @description Timestamp of last online status, or null.
       * @default null
       */
      last_online: string | null;
      /**
       * Name
       * @description Name of the user.
       */
      name: string;
      /**
       * Parent Id
       * @description ID of the parent user (owner).
       */
      parent_id: number;
      /** Role */
      role: {
          /**
           * Slug
           * @description User role slug.
           * @enum {string}
           */
          slug: "owner" | "admin" | "manager";
      };
      /**
       * Tel
       * @description Phone number in E.164 format.
       */
      tel: string;
      /**
       * Tel Extension
       * @description Phone extension if available.
       * @default null
       */
      tel_extension: string | null;
      /**
       * Tel Formatted
       * @description Formatted phone number for display.
       */
      tel_formatted: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Numeric error code (0 if successful).
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Indicates if the request resulted in an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Optional message from the API.
   */
  message?: string;
  /**
   * Meta
   * @description Pagination metadata for the returned list.
   */
  meta?: {
      /**
       * Count
       * @description Total number of users available.
       */
      count: number;
      /**
       * Limit
       * @description Pagination limit returned by the API.
       * @default null
       */
      limit: number | null;
      /**
       * Offset
       * @description Pagination offset returned by the API.
       * @default null
       */
      offset: number | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_WIDGETS tool input.
 */
type CALLPAGE_GET_ALL_WIDGETS_INPUT = {
  /**
   * Limit
   * @description Maximum number of widgets to return. Defaults to 100.
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set. Defaults to 0.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_ALL_WIDGETS tool output.
 */
type CALLPAGE_GET_ALL_WIDGETS_OUTPUT = {
  /**
   * Data
   * @description List of widgets.
   */
  data?: {
      /**
       * Call Requests Count
       * @description Number of call requests made through the widget.
       */
      call_requests_count: number;
      /**
       * Company Sms Name
       * @description Company SMS sender name configured on widget.
       * @default null
       */
      company_sms_name: string | null;
      /**
       * Description
       * @description Widget description.
       */
      description: string;
      /**
       * Enabled
       * @description Whether the widget is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Widget identifier.
       */
      id: number;
      /**
       * Installation Status
       * @description Installation status code.
       */
      installation_status: number;
      /**
       * Installed At
       * @description Timestamp when widget was installed.
       * @default null
       */
      installed_at: string | null;
      /**
       * Locale Code
       * @description Locale code of the widget.
       */
      locale_code: string;
      /**
       * Managers
       * @description List of managers configured on the widget.
       */
      managers: {
          /**
           * Enabled
           * @description Whether the manager is enabled for the widget.
           */
          enabled: boolean;
          /**
           * Id
           * @description Manager mapping identifier.
           */
          id: number;
          /**
           * User
           * @description User details for the manager.
           */
          user: {
              /**
               * Avatar
               * @description URL of the user's avatar image.
               * @default null
               */
              avatar: string | null;
              /**
               * Email
               * @description User email address.
               */
              email: string;
              /**
               * Id
               * @description User identifier.
               */
              id: number;
              /**
               * Name
               * @description User name.
               */
              name: string;
              /**
               * Tel
               * @description User phone number in E.164 format.
               */
              tel: string;
          };
      }[];
      /**
       * Url
       * @description Website URL where widget is installed.
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by the API.
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Whether the API returned an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Message returned by the API.
   */
  message?: string;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Count
       * @description Total number of widgets available.
       */
      count: number;
      /**
       * Limit
       * @description Limit used in the request.
       */
      limit: number;
      /**
       * Offset
       * @description Offset used in the request.
       * @default null
       */
      offset: number | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_API_ROOT tool input.
 */
type CALLPAGE_GET_API_ROOT_INPUT = object;

/**
 * Type of CALLPAGE's CALLPAGE_GET_API_ROOT tool output.
 */
type CALLPAGE_GET_API_ROOT_OUTPUT = {
  /**
   * Data
   * @description Payload array; always empty for the root endpoint.
   */
  data?: unknown[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Numeric error code, 0 when hasError is false.
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Indicates whether the API returned an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Greeting or error message from the API.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_MANAGER_STATUS_STATISTICS tool input.
 */
type CALLPAGE_GET_MANAGER_STATUS_STATISTICS_INPUT = {
  /**
   * Limit
   * @description Maximum number of managers to retrieve per request (optional).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset for listing managers (optional).
   * @default null
   */
  offset: number | null;
  /**
   * Widget Id
   * @description Widget identifier for which to retrieve manager status statistics.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_MANAGER_STATUS_STATISTICS tool output.
 */
type CALLPAGE_GET_MANAGER_STATUS_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Disabled Managers
       * @description Number of disabled managers for the widget.
       */
      disabled_managers: number;
      /**
       * Enabled Managers
       * @description Number of enabled managers for the widget.
       */
      enabled_managers: number;
      /**
       * Total Managers
       * @description Total number of managers for the widget.
       */
      total_managers: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_SMS_STATISTICS tool input.
 */
type CALLPAGE_GET_SMS_STATISTICS_INPUT = {
  /**
   * Widget Id
   * @description Widget identifier. You can find it in the widgets tab.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_SMS_STATISTICS tool output.
 */
type CALLPAGE_GET_SMS_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Disabled Messages
       * @description Number of disabled SMS messages.
       */
      disabled_messages: number;
      /**
       * Enabled Messages
       * @description Number of enabled SMS messages.
       */
      enabled_messages: number;
      /**
       * Total Messages
       * @description Total number of SMS messages for the widget.
       */
      total_messages: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_WIDGET tool input.
 */
type CALLPAGE_GET_WIDGET_INPUT = {
  /**
   * Id
   * @description Widget identifier. You can find it in the widgets tab.
   */
  id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_WIDGET tool output.
 */
type CALLPAGE_GET_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Detailed widget data.
   */
  data?: {
      /**
       * Call Requests Count
       * @description Number of call requests made through the widget.
       */
      call_requests_count: number;
      /**
       * Company Sms Name
       * @description Company SMS sender name configured on widget.
       * @default null
       */
      company_sms_name: string | null;
      /**
       * Description
       * @description Widget description.
       */
      description: string;
      /**
       * Enabled
       * @description Whether the widget is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Widget identifier.
       */
      id: number;
      /**
       * Installation Status
       * @description Installation status code.
       */
      installation_status: number;
      /**
       * Installed At
       * @description Timestamp when widget was installed.
       * @default null
       */
      installed_at: string | null;
      /**
       * Locale Code
       * @description Locale code of the widget.
       */
      locale_code: string;
      /**
       * Managers
       * @description List of managers configured on the widget.
       */
      managers: {
          /**
           * Business Times
           * @description Business hours for the manager.
           */
          business_times: {
              /**
               * Day Of Week
               * @description Day of week (0=Sunday, 6=Saturday).
               */
              day_of_week: number;
              /**
               * Enabled
               * @description Whether this time slot is enabled.
               */
              enabled: boolean;
              /**
               * End Time
               * @description End time in HH:MM:SS format, if enabled.
               * @default null
               */
              end_time: string | null;
              /**
               * Start Time
               * @description Start time in HH:MM:SS format, if enabled.
               * @default null
               */
              start_time: string | null;
              /**
               * Timezone
               * @description Timezone for this business time.
               */
              timezone: string;
          }[];
          /**
           * Departments
           * @description List of departments assigned to the manager.
           */
          departments: {
              /**
               * Id
               * @description Department identifier.
               */
              id: number;
              /**
               * Name
               * @description Department name.
               */
              name: string;
          }[];
          /**
           * Enabled
           * @description Whether the manager is enabled for the widget.
           */
          enabled: boolean;
          /**
           * Id
           * @description Manager mapping identifier.
           */
          id: number;
          /**
           * User
           * @description User details for the manager.
           */
          user: {
              /**
               * Avatar
               * @description URL of the user's avatar image.
               * @default null
               */
              avatar: string | null;
              /**
               * Email
               * @description User email address.
               */
              email: string;
              /**
               * Id
               * @description User identifier.
               */
              id: number;
              /**
               * Name
               * @description User name.
               */
              name: string;
              /**
               * Tel
               * @description User phone number in E.164 format.
               */
              tel: string;
          };
      }[];
      /**
       * Url
       * @description Website URL where widget is installed.
       */
      url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by the API.
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Whether the API returned an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Message returned by the API.
   */
  message?: string;
  /**
   * Meta
   * @description Additional metadata (usually empty list).
   */
  meta?: unknown[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_GET_WIDGET_STATUS_STATISTICS tool input.
 */
type CALLPAGE_GET_WIDGET_STATUS_STATISTICS_INPUT = object;

/**
 * Type of CALLPAGE's CALLPAGE_GET_WIDGET_STATUS_STATISTICS tool output.
 */
type CALLPAGE_GET_WIDGET_STATUS_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Disabled Widgets
       * @description Number of widgets with disabled status.
       */
      disabled_widgets: number;
      /**
       * Enabled Widgets
       * @description Number of widgets with enabled status.
       */
      enabled_widgets: number;
      /**
       * Total Widgets
       * @description Total number of widgets.
       */
      total_widgets: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_CREATE_VOICE_MESSAGE tool input.
 */
type CALLPAGE_POST_CREATE_VOICE_MESSAGE_INPUT = {
  /**
   * Enabled
   * @description Whether the custom voice message should be enabled.
   */
  enabled?: boolean;
  /**
   * File
   * Format: uri
   * @description URL of the audio file for the custom message (.mp3, .mpga, .wav; max 10 MB).
   * @default null
   */
  file: string | null;
  /**
   * Message Id
   * @description Voice message identifier, either 'manager.call' or 'visitor.call'.
   * @enum {string}
   */
  message_id?: "manager.call" | "visitor.call";
  /**
   * Widget Id
   * @description Identifier of the widget for which to create the voice message.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_CREATE_VOICE_MESSAGE tool output.
 */
type CALLPAGE_POST_CREATE_VOICE_MESSAGE_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Id
       * @description Identifier of the newly created voice message resource.
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
   * Error Code
   * @description Error code if an error occurred.
   * @default null
   */
  errorCode: number | null;
  /**
   * Has Error
   * @description True if the API returned an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description API response message or error description.
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_CREATE_WIDGET tool input.
 */
type CALLPAGE_POST_CREATE_WIDGET_INPUT = {
  /**
   * Description
   * @description Optional description for the widget. If omitted, defaults to 'Created from REST API. Timestamp: {timestamp}'.
   * @default null
   */
  description: string | null;
  /**
   * Locale Code
   * @description Locale code for the widget language. See widget languages in docs.
   * @default null
   * @enum {string|null}
   */
  locale_code: "cn" | "cz" | "de" | "ee" | "en" | "es" | "fr" | "hu" | "it" | "lt" | "pl" | "pt" | "ru" | "se" | "tr" | null;
  /**
   * Url
   * @description Website URL where the widget will be installed (e.g., https://callpage.io).
   */
  url?: string;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_CREATE_WIDGET tool output.
 */
type CALLPAGE_POST_CREATE_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Response payload containing the widget ID.
   */
  data?: {
      /**
       * Id
       * @description Identifier of the newly created widget.
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
   * Error Code
   * @description Error code if hasError is true.
   * @default null
   */
  errorCode: number | null;
  /**
   * Has Error
   * @description True if the API returned an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description API response message or error description.
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_DELETE_WIDGET tool input.
 */
type CALLPAGE_POST_DELETE_WIDGET_INPUT = {
  /**
   * Id
   * @description Widget identifier. You can find it in the widgets tab.
   */
  id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_DELETE_WIDGET tool output.
 */
type CALLPAGE_POST_DELETE_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Always null on successful deletion.
   */
  data?: null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Numeric error code (0 if no error).
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Indicates whether the API encountered an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Human-readable message returned by the API.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_RESET_SMS tool input.
 */
type CALLPAGE_POST_RESET_SMS_INPUT = {
  /**
   * Message Id
   * @description Optional SMS message identifier to reset. Allowed values are listed in the documentation. If omitted, all SMS messages for the widget will be reset to defaults.
   * @default null
   */
  message_id: string | null;
  /**
   * Widget Id
   * @description Widget identifier. You can find it in the widgets tab.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_RESET_SMS tool output.
 */
type CALLPAGE_POST_RESET_SMS_OUTPUT = {
  /**
   * Data
   * @description Always null on successful reset.
   */
  data?: null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code corresponding to the error encountered.
   */
  errorCode?: number;
  /**
   * Has Error
   * @description Indicates if there was an error during the request.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Description of the error, if any.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_RESET_VOICE_MESSAGE tool input.
 */
type CALLPAGE_POST_RESET_VOICE_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description Identifier of a specific voice message to reset. If omitted, all voice messages will be reset.
   * @default null
   */
  message_id: string | null;
  /**
   * Widget Id
   * @description Identifier of the widget.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_RESET_VOICE_MESSAGE tool output.
 */
type CALLPAGE_POST_RESET_VOICE_MESSAGE_OUTPUT = {
  /** Data */
  data?: null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @default null
   */
  errorCode: number | null;
  /** Has Error */
  hasError?: boolean;
  /**
   * Message
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_UPDATE_MANAGER tool input.
 */
type CALLPAGE_POST_UPDATE_MANAGER_INPUT = {
  /**
   * Business Times
   * @description Optional list of working-hour rules. If omitted, defaults to Monday–Friday, 09:00–17:00.
   * @default null
   */
  business_times: {
      /**
       * Day Of Week
       * @description Day of the week (0=Sunday, 6=Saturday).
       */
      day_of_week: number;
      /**
       * Enabled
       * @description Whether the manager is available on this day.
       */
      enabled: boolean;
      /**
       * End Time
       * @description End time in HH:MM format.
       * @default null
       */
      end_time: string | null;
      /**
       * Start Time
       * @description Start time in HH:MM format.
       * @default null
       */
      start_time: string | null;
  }[] | null;
  /**
   * Enabled
   * @description True to enable calling this manager; false to disable.
   */
  enabled?: boolean;
  /**
   * User Id
   * @description Identifier of the manager (user). You can find it in the dashboard managers list.
   */
  user_id?: number;
  /**
   * Widget Id
   * @description Identifier of the widget to which the manager is assigned.
   */
  widget_id?: number;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_UPDATE_MANAGER tool output.
 */
type CALLPAGE_POST_UPDATE_MANAGER_OUTPUT = {
  /**
   * Data
   * @description Payload with updated manager ID.
   */
  data?: {
      /**
       * Id
       * @description Identifier of the updated manager record.
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
   * Error Code
   * @description Numeric error code (0 if successful).
   * @default null
   */
  errorCode: number | null;
  /**
   * Has Error
   * @description Indicates if the API request resulted in an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Error or status message.
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_UPDATE_WIDGET tool input.
 */
type CALLPAGE_POST_UPDATE_WIDGET_INPUT = {
  /**
   * Description
   * @description Optional description for the widget. If omitted, existing description remains unchanged.
   * @default null
   */
  description: string | null;
  /**
   * Enabled
   * @description Indicates whether the widget is enabled (true) or disabled (false).
   * @default null
   */
  enabled: boolean | null;
  /**
   * Id
   * @description Widget identifier. You can find it in the dashboard widgets list.
   */
  id?: number;
  /**
   * Locale Code
   * @description Locale code for the widget language (e.g., 'en').
   * @default null
   * @enum {string|null}
   */
  locale_code: "cn" | "cz" | "de" | "ee" | "en" | "es" | "fr" | "hu" | "it" | "lt" | "pl" | "pt" | "ru" | "se" | "tr" | null;
  /**
   * Settings
   * @description Optional list of widget settings objects as defined in the documentation.
   * @default null
   */
  settings: {
      [key: string]: number | string | boolean;
  }[] | null;
  /**
   * Url
   * @description Website URL where the widget will be installed (e.g., https://callpage.io).
   */
  url?: string;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_UPDATE_WIDGET tool output.
 */
type CALLPAGE_POST_UPDATE_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Payload data containing the widget ID.
   */
  data?: {
      /**
       * Id
       * @description Identifier of the updated widget.
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
   * Error Code
   * @description Error code if hasError is true.
   * @default null
   */
  errorCode: number | null;
  /**
   * Has Error
   * @description Indicates if there was an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description Error or status message.
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE tool input.
 */
type CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE_INPUT = {
  /**
   * Department Id
   * @description Department identifier. If omitted, the call is routed to all available managers.
   * @default null
   */
  department_id: number | null;
  /**
   * Id
   * @description Widget identifier. You can find it in the widgets tab.
   */
  id?: number;
  /**
   * Tel
   * @description Phone number in E.164 format (e.g. +48123123123).
   */
  tel?: string;
};

/**
 * Type of CALLPAGE's CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE tool output.
 */
type CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data containing the call or schedule request ID.
   */
  data?: {
      /**
       * Id
       * @description Identifier of the created call or scheduled request.
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
   * Error Code
   * @description Error code if an error occurred.
   * @default null
   */
  errorCode: number | null;
  /**
   * Has Error
   * @description Indicates whether the API returned an error.
   */
  hasError?: boolean;
  /**
   * Message
   * @description API response message.
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CALLPAGE".
 */
export type CALLPAGE_TOOL_INPUTS = {
  GET_ALL_MANAGERS: CALLPAGE_GET_ALL_MANAGERS_INPUT
  GET_ALL_SMS_MESSAGES: CALLPAGE_GET_ALL_SMS_MESSAGES_INPUT
  GET_ALL_USERS: CALLPAGE_GET_ALL_USERS_INPUT
  GET_ALL_WIDGETS: CALLPAGE_GET_ALL_WIDGETS_INPUT
  GET_API_ROOT: CALLPAGE_GET_API_ROOT_INPUT
  GET_MANAGER_STATUS_STATISTICS: CALLPAGE_GET_MANAGER_STATUS_STATISTICS_INPUT
  GET_SMS_STATISTICS: CALLPAGE_GET_SMS_STATISTICS_INPUT
  GET_WIDGET: CALLPAGE_GET_WIDGET_INPUT
  GET_WIDGET_STATUS_STATISTICS: CALLPAGE_GET_WIDGET_STATUS_STATISTICS_INPUT
  POST_CREATE_VOICE_MESSAGE: CALLPAGE_POST_CREATE_VOICE_MESSAGE_INPUT
  POST_CREATE_WIDGET: CALLPAGE_POST_CREATE_WIDGET_INPUT
  POST_DELETE_WIDGET: CALLPAGE_POST_DELETE_WIDGET_INPUT
  POST_RESET_SMS: CALLPAGE_POST_RESET_SMS_INPUT
  POST_RESET_VOICE_MESSAGE: CALLPAGE_POST_RESET_VOICE_MESSAGE_INPUT
  POST_UPDATE_MANAGER: CALLPAGE_POST_UPDATE_MANAGER_INPUT
  POST_UPDATE_WIDGET: CALLPAGE_POST_UPDATE_WIDGET_INPUT
  POST_WIDGET_CALL_OR_SCHEDULE: CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CALLPAGE".
 */
export type CALLPAGE_TOOL_OUTPUTS = {
  GET_ALL_MANAGERS: CALLPAGE_GET_ALL_MANAGERS_OUTPUT
  GET_ALL_SMS_MESSAGES: CALLPAGE_GET_ALL_SMS_MESSAGES_OUTPUT
  GET_ALL_USERS: CALLPAGE_GET_ALL_USERS_OUTPUT
  GET_ALL_WIDGETS: CALLPAGE_GET_ALL_WIDGETS_OUTPUT
  GET_API_ROOT: CALLPAGE_GET_API_ROOT_OUTPUT
  GET_MANAGER_STATUS_STATISTICS: CALLPAGE_GET_MANAGER_STATUS_STATISTICS_OUTPUT
  GET_SMS_STATISTICS: CALLPAGE_GET_SMS_STATISTICS_OUTPUT
  GET_WIDGET: CALLPAGE_GET_WIDGET_OUTPUT
  GET_WIDGET_STATUS_STATISTICS: CALLPAGE_GET_WIDGET_STATUS_STATISTICS_OUTPUT
  POST_CREATE_VOICE_MESSAGE: CALLPAGE_POST_CREATE_VOICE_MESSAGE_OUTPUT
  POST_CREATE_WIDGET: CALLPAGE_POST_CREATE_WIDGET_OUTPUT
  POST_DELETE_WIDGET: CALLPAGE_POST_DELETE_WIDGET_OUTPUT
  POST_RESET_SMS: CALLPAGE_POST_RESET_SMS_OUTPUT
  POST_RESET_VOICE_MESSAGE: CALLPAGE_POST_RESET_VOICE_MESSAGE_OUTPUT
  POST_UPDATE_MANAGER: CALLPAGE_POST_UPDATE_MANAGER_OUTPUT
  POST_UPDATE_WIDGET: CALLPAGE_POST_UPDATE_WIDGET_OUTPUT
  POST_WIDGET_CALL_OR_SCHEDULE: CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CALLPAGE toolkit.
 */
export const CALLPAGE = {
  slug: "callpage",
  tools: {
    /**
     * Tool to retrieve a list of managers for a specific widget with pagination. use when you need to page through all managers assigned to a widget after confirming its id.
     */
    GET_ALL_MANAGERS: "CALLPAGE_GET_ALL_MANAGERS",
    /**
     * Tool to retrieve all sms messages for a widget. use when you need to fetch both default and custom sms templates after confirming the widget exists.
     */
    GET_ALL_SMS_MESSAGES: "CALLPAGE_GET_ALL_SMS_MESSAGES",
    /**
     * Tool to retrieve a list of all users with pagination. use when you need to page through all users in your callpage account to synchronize or audit user records.
     */
    GET_ALL_USERS: "CALLPAGE_GET_ALL_USERS",
    /**
     * Tool to retrieve a list of widgets with pagination. use when you need to page through all widgets after api authentication.
     */
    GET_ALL_WIDGETS: "CALLPAGE_GET_ALL_WIDGETS",
    /**
     * Tool to get the root api greeting. use to verify connectivity and retrieve the initial api greeting after setting the api key.
     */
    GET_API_ROOT: "CALLPAGE_GET_API_ROOT",
    /**
     * Tool to retrieve statistical data about manager statuses. use when you need summary counts of enabled and disabled managers for a specific widget.
     */
    GET_MANAGER_STATUS_STATISTICS: "CALLPAGE_GET_MANAGER_STATUS_STATISTICS",
    /**
     * Tool to retrieve statistical data about sms messages. use when you need summary counts of sms messages for a given widget.
     */
    GET_SMS_STATISTICS: "CALLPAGE_GET_SMS_STATISTICS",
    /**
     * Tool to retrieve details of a specific widget by id. use when you have a widget id and need its complete configuration.
     */
    GET_WIDGET: "CALLPAGE_GET_WIDGET",
    /**
     * Tool to retrieve statistical data about widget statuses. use when you need counts of enabled vs disabled widgets.
     */
    GET_WIDGET_STATUS_STATISTICS: "CALLPAGE_GET_WIDGET_STATUS_STATISTICS",
    /**
     * Tool to create a custom voice message for a widget. use when you need to customize greeting messages for manager or visitor after setting widget locale.
     */
    POST_CREATE_VOICE_MESSAGE: "CALLPAGE_POST_CREATE_VOICE_MESSAGE",
    /**
     * Tool to create a new widget. use when you need to install a widget on your site and retrieve its id.
     */
    POST_CREATE_WIDGET: "CALLPAGE_POST_CREATE_WIDGET",
    /**
     * Tool to delete a widget by id. use when you need to remove an existing widget after verifying its id. example: delete widget with id 3409.
     */
    POST_DELETE_WIDGET: "CALLPAGE_POST_DELETE_WIDGET",
    /**
     * Tool to reset sms messages to default for a widget. use when you need to restore default sms templates after customization tests.
     */
    POST_RESET_SMS: "CALLPAGE_POST_RESET_SMS",
    /**
     * Tool to reset voice messages to default for a widget. use when you need to clear custom messages and revert to system defaults. example: reset all voice messages for widget with id 123.
     */
    POST_RESET_VOICE_MESSAGE: "CALLPAGE_POST_RESET_VOICE_MESSAGE",
    /**
     * Tool to update an existing manager. use when you need to modify a manager's availability or business hours after retrieving their record.
     */
    POST_UPDATE_MANAGER: "CALLPAGE_POST_UPDATE_MANAGER",
    /**
     * Tool to update an existing widget. use when you need to change widget url, description, settings, language, or enabled state.
     */
    POST_UPDATE_WIDGET: "CALLPAGE_POST_UPDATE_WIDGET",
    /**
     * Tool to initiate or schedule a call via widget. use when you need to call immediately or schedule at the first available timeslot through a widget.
     */
    POST_WIDGET_CALL_OR_SCHEDULE: "CALLPAGE_POST_WIDGET_CALL_OR_SCHEDULE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CALLPAGE".
 */
export type CALLPAGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CALLPAGE".
 */
export type CALLPAGE_TRIGGER_EVENTS = {}
