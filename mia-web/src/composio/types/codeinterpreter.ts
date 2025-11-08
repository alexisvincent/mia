// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_CREATE_SANDBOX tool input.
 */
type CODEINTERPRETER_CREATE_SANDBOX_INPUT = {
  /**
   * Keep Alive
   * @description The number of seconds to keep the sandbox alive after creation. Default is 300 seconds (5 minutes). Can be in between 0 and 3600.
   * @default 300
   */
  keep_alive: number;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_CREATE_SANDBOX tool output.
 */
type CODEINTERPRETER_CREATE_SANDBOX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sandbox Id
       * @description The ID of the sandbox, which can be used to execute code in the sandbox.
       */
      sandbox_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_EXECUTE_CODE tool input.
 */
type CODEINTERPRETER_EXECUTE_CODE_INPUT = {
  /**
   * Code To Execute
   * @description The python code to execute in a single cell. If a file is to be saved, it should be saved under /home/user/ directory. At the end of the code, a success message print is good to have.
   */
  code_to_execute?: string;
  /**
   * Keep Alive
   * @description The number of seconds to keep the sandbox alive after execution. Default is 300 seconds (5 minutes). Can be between 0 and 3600.
   * @default 300
   */
  keep_alive: number;
  /**
   * Sandbox Id
   * @description The ID of the sandbox to execute the code in. Try to find an existing sandbox ID from context in order to access the previous modification session. In case not found, this value might be omitted, a new sandbox will be created.
   * @default null
   */
  sandbox_id: string | null;
  /**
   * Timeout
   * @description The timeout in seconds for the execution of the code.
   * @default 60
   */
  timeout: number;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_EXECUTE_CODE tool output.
 */
type CODEINTERPRETER_EXECUTE_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description The error of the executed code
       */
      error: string;
      /**
       * Results
       * @description The results of the executed code
       */
      results: string;
      /**
       * Sandbox Id
       * @description Id of execution sandbox
       */
      sandbox_id: string;
      /**
       * Stderr
       * @description The stderr of the executed code
       */
      stderr: string;
      /**
       * Stdout
       * @description The stdout of the executed code
       */
      stdout: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_GET_FILE_CMD tool input.
 */
type CODEINTERPRETER_GET_FILE_CMD_INPUT = {
  /**
   * File Path
   * @description The path(on the sandbox) of the file to get. Give absolute path. Should start with /home/user/
   */
  file_path?: string;
  /**
   * Sandbox Id
   * @description The ID of the sandbox where the file has been created.
   */
  sandbox_id?: string;
  /**
   * Timeout
   * @description The timeout in seconds for the command to run.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_GET_FILE_CMD tool output.
 */
type CODEINTERPRETER_GET_FILE_CMD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description The file
       */
      file: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description URL of the file.
           */
          s3url: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_RUN_TERMINAL_CMD tool input.
 */
type CODEINTERPRETER_RUN_TERMINAL_CMD_INPUT = {
  /**
   * Command
   * @description The command to run in the terminal.
   */
  command?: string;
  /**
   * Keep Alive
   * @description The number of seconds to keep the sandbox alive after execution. Default is 300 seconds (5 minutes).
   * @default 300
   */
  keep_alive: number;
  /**
   * Sandbox Id
   * @description The ID of the sandbox to execute the code in. Try to find an existing sandbox ID from contextinorder to access the previous modification session. In case not found, this value might be omitted, a new sandbox will be created.
   * @default null
   */
  sandbox_id: string | null;
  /**
   * Timeout
   * @description The timeout in seconds for the command to run.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_RUN_TERMINAL_CMD tool output.
 */
type CODEINTERPRETER_RUN_TERMINAL_CMD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sandbox Id
       * @description Id of execution sandbox
       */
      sandbox_id: string;
      /**
       * Stderr
       * @description The stderr of the executed command
       */
      stderr: string;
      /**
       * Stdout
       * @description The stdout of the executed command
       */
      stdout: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_UPLOAD_FILE_CMD tool input.
 */
type CODEINTERPRETER_UPLOAD_FILE_CMD_INPUT = {
  /**
   * Destination Path
   * @description The destination path in the sandbox where the file will be saved. Provide an absolute path starting with /home/user/. The file name from 'file' will be appended if destination_path is a directory.
   */
  destination_path?: string;
  /**
   * FileUploadable
   * @description The file to upload, containing the file name and base64-encoded content.
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Overwrite
   * @description Whether to overwrite the file if it already exists.
   * @default false
   */
  overwrite: boolean;
  /**
   * Sandbox Id
   * @description The ID of the sandbox where the file will be uploaded.
   */
  sandbox_id?: string;
};

/**
 * Type of CODEINTERPRETER's CODEINTERPRETER_UPLOAD_FILE_CMD tool output.
 */
type CODEINTERPRETER_UPLOAD_FILE_CMD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Path
       * @description The full path where the file was uploaded
       */
      file_path: string;
      /**
       * Success
       * @description Whether the upload was successful
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
 * Type map of all available tool input types for toolkit "CODEINTERPRETER".
 */
export type CODEINTERPRETER_TOOL_INPUTS = {
  CREATE_SANDBOX: CODEINTERPRETER_CREATE_SANDBOX_INPUT
  EXECUTE_CODE: CODEINTERPRETER_EXECUTE_CODE_INPUT
  GET_FILE_CMD: CODEINTERPRETER_GET_FILE_CMD_INPUT
  RUN_TERMINAL_CMD: CODEINTERPRETER_RUN_TERMINAL_CMD_INPUT
  UPLOAD_FILE_CMD: CODEINTERPRETER_UPLOAD_FILE_CMD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CODEINTERPRETER".
 */
export type CODEINTERPRETER_TOOL_OUTPUTS = {
  CREATE_SANDBOX: CODEINTERPRETER_CREATE_SANDBOX_OUTPUT
  EXECUTE_CODE: CODEINTERPRETER_EXECUTE_CODE_OUTPUT
  GET_FILE_CMD: CODEINTERPRETER_GET_FILE_CMD_OUTPUT
  RUN_TERMINAL_CMD: CODEINTERPRETER_RUN_TERMINAL_CMD_OUTPUT
  UPLOAD_FILE_CMD: CODEINTERPRETER_UPLOAD_FILE_CMD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CODEINTERPRETER toolkit.
 */
export const CODEINTERPRETER = {
  slug: "codeinterpreter",
  tools: {
    /**
     * Create a sandbox to execute python code in a jupyter notebook cell. this is useful for agents to communicate, execute code, see output, read files, write files, etc. it's like you own personal computer, but in the cloud. use /home/user folder to write/read files.
     */
    CREATE_SANDBOX: "CODEINTERPRETER_CREATE_SANDBOX",
    /**
     * Execute python code in a sandbox and return any result, stdout, stderr, and error. use /home/user folder to write/read files. try to not use plt.show() as the code is executed remotely. use files for image/chart output instead.
     */
    EXECUTE_CODE: "CODEINTERPRETER_EXECUTE_CODE",
    /**
     * Get a file from the sandbox and returns the file. the files should be read from /home/user folder.
     */
    GET_FILE_CMD: "CODEINTERPRETER_GET_FILE_CMD",
    /**
     * Run a command in the terminal and returns the stdout, stderr, and error code. use /home/user folder to write/read files.
     */
    RUN_TERMINAL_CMD: "CODEINTERPRETER_RUN_TERMINAL_CMD",
    /**
     * Upload a file to the sandbox environment. the files should be uploaded to the /home/user folder.
     */
    UPLOAD_FILE_CMD: "CODEINTERPRETER_UPLOAD_FILE_CMD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CODEINTERPRETER".
 */
export type CODEINTERPRETER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CODEINTERPRETER".
 */
export type CODEINTERPRETER_TRIGGER_EVENTS = {}
