// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TRIGGERCMD's TRIGGERCMD_LIST_COMMANDS tool input.
 */
type TRIGGERCMD_LIST_COMMANDS_INPUT = object;

/**
 * Type of TRIGGERCMD's TRIGGERCMD_LIST_COMMANDS tool output.
 */
type TRIGGERCMD_LIST_COMMANDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Commands
       * @description List of all commands in the authenticated account
       */
      commands: {
          /**
           * Computer
           * @description The name of the computer associated with the command
           */
          computer: string;
          /**
           * Id
           * @description The command's unique identifier
           */
          id: string;
          /**
           * Name
           * @description The display name of the command
           */
          name: string;
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
 * Type of TRIGGERCMD's TRIGGERCMD_LIST_COMPUTERS tool input.
 */
type TRIGGERCMD_LIST_COMPUTERS_INPUT = object;

/**
 * Type of TRIGGERCMD's TRIGGERCMD_LIST_COMPUTERS tool output.
 */
type TRIGGERCMD_LIST_COMPUTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Computers
       * @description List of computers connected to the TriggerCMD account
       */
      computers: {
          /**
           * Agentid
           * @description Internal TriggerCMD agent identifier
           */
          agentid: string;
          /**
           * Guid
           * @description Globally unique identifier for the computer
           */
          guid: string;
          /**
           * Id
           * @description Computer ID
           */
          id: string;
          /**
           * Lastheartbeat
           * @description ISO 8601 timestamp of last heartbeat from the computer.
           */
          lastheartbeat: string;
          /**
           * Modified
           * @description ISO 8601 timestamp when the computer was last modified.
           */
          modified: string;
          /**
           * Name
           * @description Computer name
           */
          name: string;
          /**
           * Online
           * @description Whether the computer is currently online
           */
          online: boolean;
          /**
           * Owner
           * @description Email of the computer owner
           */
          owner: string;
          /**
           * Version
           * @description Installed TriggerCMD agent version
           */
          version: string;
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
 * Type of TRIGGERCMD's TRIGGERCMD_TRIGGER_COMMAND tool input.
 */
type TRIGGERCMD_TRIGGER_COMMAND_INPUT = {
  /**
   * Command
   * @description The name or label of the command to trigger.
   */
  command?: string;
  /**
   * Computer
   * @description The name or ID of the target computer.
   */
  computer?: string;
  /**
   * Params
   * @description Optional parameters string to pass to the command.
   * @default null
   */
  params: string | null;
};

/**
 * Type of TRIGGERCMD's TRIGGERCMD_TRIGGER_COMMAND tool output.
 */
type TRIGGERCMD_TRIGGER_COMMAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information or error message.
       */
      message: string;
      /**
       * Success
       * @description Whether the command was triggered successfully.
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
 * Type map of all available tool input types for toolkit "TRIGGERCMD".
 */
export type TRIGGERCMD_TOOL_INPUTS = {
  LIST_COMMANDS: TRIGGERCMD_LIST_COMMANDS_INPUT
  LIST_COMPUTERS: TRIGGERCMD_LIST_COMPUTERS_INPUT
  TRIGGER_COMMAND: TRIGGERCMD_TRIGGER_COMMAND_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TRIGGERCMD".
 */
export type TRIGGERCMD_TOOL_OUTPUTS = {
  LIST_COMMANDS: TRIGGERCMD_LIST_COMMANDS_OUTPUT
  LIST_COMPUTERS: TRIGGERCMD_LIST_COMPUTERS_OUTPUT
  TRIGGER_COMMAND: TRIGGERCMD_TRIGGER_COMMAND_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TRIGGERCMD toolkit.
 */
export const TRIGGERCMD = {
  slug: "triggercmd",
  tools: {
    /**
     * Tool to retrieve a list of all commands across your computers. use when you need to browse your available commands before triggering one.
     */
    LIST_COMMANDS: "TRIGGERCMD_LIST_COMMANDS",
    /**
     * Tool to list all computers associated with your triggercmd account. use after authenticating with your token to retrieve connected machines.
     */
    LIST_COMPUTERS: "TRIGGERCMD_LIST_COMPUTERS",
    /**
     * Tool to trigger a specified command on a target computer. use when you want to remotely execute a pre-configured command after authentication.
     */
    TRIGGER_COMMAND: "TRIGGERCMD_TRIGGER_COMMAND",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TRIGGERCMD".
 */
export type TRIGGERCMD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TRIGGERCMD".
 */
export type TRIGGERCMD_TRIGGER_EVENTS = {}
