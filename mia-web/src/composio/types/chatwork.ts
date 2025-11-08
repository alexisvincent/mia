// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CHATWORK's CHATWORK_CHATWORK_DELETE_MESSAGE tool input.
 */
type CHATWORK_CHATWORK_DELETE_MESSAGE_INPUT = {
  /**
   * Message Id
   * @description The ID of the message to delete
   */
  message_id?: string;
  /**
   * Room Id
   * @description The ID of the chat room containing the message to delete
   */
  room_id?: string;
};

/**
 * Type of CHATWORK's CHATWORK_CHATWORK_DELETE_MESSAGE tool output.
 */
type CHATWORK_CHATWORK_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Id
       * @description The ID of the deleted message
       * @default
       */
      message_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CHATWORK's CHATWORK_GET_CHATWORK_CONTACTS tool input.
 */
type CHATWORK_GET_CHATWORK_CONTACTS_INPUT = object;

/**
 * Type of CHATWORK's CHATWORK_GET_CHATWORK_CONTACTS tool output.
 */
type CHATWORK_GET_CHATWORK_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts with their details
       */
      contacts: {
          /**
           * Account Id
           * @description Account ID of the contact
           */
          account_id: number;
          /**
           * Avatar Image Url
           * @description URL of the contact's avatar image
           */
          avatar_image_url: string;
          /**
           * Chatwork Id
           * @description Chatwork ID of the contact
           */
          chatwork_id: string;
          /**
           * Department
           * @description Department of the contact
           */
          department: string;
          /**
           * Name
           * @description Display name of the contact
           */
          name: string;
          /**
           * Organization Id
           * @description Organization ID of the contact
           */
          organization_id: number;
          /**
           * Organization Name
           * @description Organization name of the contact
           */
          organization_name: string;
          /**
           * Room Id
           * @description Direct chat room ID with the contact
           */
          room_id: number;
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
 * Type of CHATWORK's CHATWORK_GET_FILE tool input.
 */
type CHATWORK_GET_FILE_INPUT = {
  /**
   * File Id
   * @description The ID of the file to retrieve
   */
  file_id?: number;
  /**
   * Room Id
   * @description The ID of the chat room containing the file
   */
  room_id?: number;
};

/**
 * Type of CHATWORK's CHATWORK_GET_FILE tool output.
 */
type CHATWORK_GET_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description Detailed information about the requested file
       */
      file: {
          /**
           * Account
           * @description Information about the account that uploaded the file
           */
          account: {
              /**
               * Account Id
               * @description ID of the account
               */
              account_id: number;
              /**
               * Avatar Image Url
               * @description URL of the account's avatar
               */
              avatar_image_url: string;
              /**
               * Name
               * @description Name of the account
               */
              name: string;
          };
          /**
           * Download Url
           * @description URL to download the file
           * @default
           */
          download_url: string;
          /**
           * File Id
           * @description Unique identifier for the file
           */
          file_id: number;
          /**
           * Filename
           * @description Name of the file
           */
          filename: string;
          /**
           * Filesize
           * @description Size of the file in bytes
           */
          filesize: number;
          /**
           * Message Id
           * @description ID of the message containing the file
           */
          message_id: string;
          /**
           * Upload Time
           * @description Timestamp of when the file was uploaded
           */
          upload_time: number;
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
 * Type of CHATWORK's CHATWORK_GET_MY_STATUS tool input.
 */
type CHATWORK_GET_MY_STATUS_INPUT = object;

/**
 * Type of CHATWORK's CHATWORK_GET_MY_STATUS tool output.
 */
type CHATWORK_GET_MY_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mention Num
       * @description Total number of unread mentions
       */
      mention_num: number;
      /**
       * Mention Room Num
       * @description Number of rooms with unread mentions
       */
      mention_room_num: number;
      /**
       * Mytask Num
       * @description Total number of unfinished tasks assigned to you
       */
      mytask_num: number;
      /**
       * Mytask Room Num
       * @description Number of rooms with unfinished tasks assigned to you
       */
      mytask_room_num: number;
      /**
       * Unread Num
       * @description Total number of unread messages
       */
      unread_num: number;
      /**
       * Unread Room Num
       * @description Number of rooms with unread messages
       */
      unread_room_num: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CHATWORK's CHATWORK_GET_ROOMS tool input.
 */
type CHATWORK_GET_ROOMS_INPUT = object;

/**
 * Type of CHATWORK's CHATWORK_GET_ROOMS tool output.
 */
type CHATWORK_GET_ROOMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rooms
       * @description List of all chat rooms associated with the authenticated account
       */
      rooms: {
          /**
           * File Num
           * @description Number of files
           */
          file_num: number;
          /**
           * Icon Path
           * @description URL to the room's icon
           */
          icon_path: string;
          /**
           * Last Update Time
           * @description Timestamp of last update
           */
          last_update_time: number;
          /**
           * Mention Num
           * @description Number of mentions
           */
          mention_num: number;
          /**
           * Message Num
           * @description Total number of messages
           */
          message_num: number;
          /**
           * Mytask Num
           * @description Number of tasks assigned to user
           */
          mytask_num: number;
          /**
           * Name
           * @description Name of the chat room
           */
          name: string;
          /**
           * Role
           * @description User's role in the room
           */
          role: string;
          /**
           * Room Id
           * @description Unique identifier for the room
           */
          room_id: number;
          /**
           * Sticky
           * @description Whether the room is pinned
           */
          sticky: boolean;
          /**
           * Task Num
           * @description Number of tasks
           */
          task_num: number;
          /**
           * Type
           * @description Type of the room (group, direct, etc.)
           */
          type: string;
          /**
           * Unread Num
           * @description Number of unread messages
           */
          unread_num: number;
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
 * Type of CHATWORK's CHATWORK_GET_ROOM_MEMBERS tool input.
 */
type CHATWORK_GET_ROOM_MEMBERS_INPUT = {
  /**
   * Room Id
   * @description The ID of the room to get members from
   */
  room_id?: number;
};

/**
 * Type of CHATWORK's CHATWORK_GET_ROOM_MEMBERS tool output.
 */
type CHATWORK_GET_ROOM_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of members in the room with their details
       */
      members: {
          /**
           * Account Id
           * @description The unique identifier for the user
           */
          account_id: number;
          /**
           * Avatar Image Url
           * @description URL to the user's avatar image
           * @default null
           */
          avatar_image_url: string | null;
          /**
           * Chatwork Id
           * @description The Chatwork ID of the user
           */
          chatwork_id: string;
          /**
           * Department
           * @description The department name
           * @default null
           */
          department: string | null;
          /**
           * Name
           * @description The name of the user
           */
          name: string;
          /**
           * Organization Id
           * @description The organization ID the user belongs to
           * @default null
           */
          organization_id: number | null;
          /**
           * Organization Name
           * @description The name of the organization
           * @default null
           */
          organization_name: string | null;
          /**
           * Role
           * @description The role of the user in the room (admin, member, readonly)
           */
          role: string;
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
 * Type of CHATWORK's CHATWORK_GET_ROOM_MESSAGES tool input.
 */
type CHATWORK_GET_ROOM_MESSAGES_INPUT = {
  /**
   * Force
   * @description When true, retrieves the latest 100 messages regardless of previous calls
   * @default false
   */
  force: boolean | null;
  /**
   * Room Id
   * @description The ID of the chat room to retrieve messages from
   */
  room_id?: string;
};

/**
 * Type of CHATWORK's CHATWORK_GET_ROOM_MESSAGES tool output.
 */
type CHATWORK_GET_ROOM_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of messages in the room
       */
      messages: {
          /**
           * Account
           * @description Account information of the message sender
           */
          account: {
              [key: string]: unknown;
          };
          /**
           * Body
           * @description Content of the message
           */
          body: string;
          /**
           * Message Id
           * @description Unique identifier of the message
           */
          message_id: string;
          /**
           * Send Time
           * @description Unix timestamp when the message was sent
           */
          send_time: number;
          /**
           * Update Time
           * @description Unix timestamp when the message was last updated
           */
          update_time: number;
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
 * Type of CHATWORK's CHATWORK_UPLOAD_FILE tool input.
 */
type CHATWORK_UPLOAD_FILE_INPUT = {
  /**
   * File Path
   * @description The path to the file that needs to be uploaded
   */
  file_path?: string;
  /**
   * Message
   * @description Optional message to accompany the file upload
   * @default null
   */
  message: string | null;
  /**
   * Room Id
   * @description The ID of the room where the file will be uploaded
   */
  room_id?: string;
};

/**
 * Type of CHATWORK's CHATWORK_UPLOAD_FILE tool output.
 */
type CHATWORK_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Id
       * @description The ID of the uploaded file
       */
      file_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CHATWORK".
 */
export type CHATWORK_TOOL_INPUTS = {
  CHATWORK_DELETE_MESSAGE: CHATWORK_CHATWORK_DELETE_MESSAGE_INPUT
  GET_CHATWORK_CONTACTS: CHATWORK_GET_CHATWORK_CONTACTS_INPUT
  GET_FILE: CHATWORK_GET_FILE_INPUT
  GET_MY_STATUS: CHATWORK_GET_MY_STATUS_INPUT
  GET_ROOMS: CHATWORK_GET_ROOMS_INPUT
  GET_ROOM_MEMBERS: CHATWORK_GET_ROOM_MEMBERS_INPUT
  GET_ROOM_MESSAGES: CHATWORK_GET_ROOM_MESSAGES_INPUT
  UPLOAD_FILE: CHATWORK_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CHATWORK".
 */
export type CHATWORK_TOOL_OUTPUTS = {
  CHATWORK_DELETE_MESSAGE: CHATWORK_CHATWORK_DELETE_MESSAGE_OUTPUT
  GET_CHATWORK_CONTACTS: CHATWORK_GET_CHATWORK_CONTACTS_OUTPUT
  GET_FILE: CHATWORK_GET_FILE_OUTPUT
  GET_MY_STATUS: CHATWORK_GET_MY_STATUS_OUTPUT
  GET_ROOMS: CHATWORK_GET_ROOMS_OUTPUT
  GET_ROOM_MEMBERS: CHATWORK_GET_ROOM_MEMBERS_OUTPUT
  GET_ROOM_MESSAGES: CHATWORK_GET_ROOM_MESSAGES_OUTPUT
  UPLOAD_FILE: CHATWORK_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CHATWORK toolkit.
 */
export const CHATWORK = {
  slug: "chatwork",
  tools: {
    /**
     * This tool allows you to delete a specific message from a chatwork room by calling the delete endpoint at https://api.chatwork.com/v2/rooms/{room id}/messages/{message id}. it requires authentication using a chatwork api token provided in the x-chatworktoken header, and the necessary permissions to delete messages in the specified room.
     */
    CHATWORK_DELETE_MESSAGE: "CHATWORK_CHATWORK_DELETE_MESSAGE",
    /**
     * This tool retrieves a list of all contacts from chatwork. it is a fundamental tool that fetches all contact information such as account id, room id, name, chatwork id, organization details, department, and avatar image url, without needing additional parameters beyond authentication.
     */
    GET_CHATWORK_CONTACTS: "CHATWORK_GET_CHATWORK_CONTACTS",
    /**
     * This tool retrieves information about a specific file in a chat room. the api endpoint get /v2/rooms/{room id}/files/{file id} provides file details such as file id, account id, message id, filename, filesize, upload time, and download url, which are useful for retrieving file metadata, verifying file existence, and managing file sharing within chatwork.
     */
    GET_FILE: "CHATWORK_GET_FILE",
    /**
     * This tool retrieves the current status of the authenticated user, including unread message counts and task status. it provides a quick overview of unread messages, mentions, and tasks, making it valuable for monitoring chatwork activity and building automation workflows.
     */
    GET_MY_STATUS: "CHATWORK_GET_MY_STATUS",
    /**
     * This tool retrieves a list of all chat rooms associated with the authenticated chatwork account. it includes group chats, direct chats, and personal chats, and does not require any additional parameters beyond authentication.
     */
    GET_ROOMS: "CHATWORK_GET_ROOMS",
    /**
     * This tool retrieves a list of all members in a specified chatwork room using the endpoint get /rooms/{room id}/members. it provides essential details like account id, role, name, chatwork id, organization id, and organization name, complementing the existing suite of room management tools.
     */
    GET_ROOM_MEMBERS: "CHATWORK_GET_ROOM_MEMBERS",
    /**
     * This tool retrieves messages from a specific chatwork room using the get https://api.chatwork.com/v2/rooms/{room id}/messages endpoint. it requires a room id parameter and an optional force flag to refresh the cache by retrieving the 100 newest messages.
     */
    GET_ROOM_MESSAGES: "CHATWORK_GET_ROOM_MESSAGES",
    /**
     * This tool allows users to upload files to a specific chatwork room. it enables file sharing functionality within the chatwork platform by providing an endpoint to upload files (along with an optional message) to a given room.
     */
    UPLOAD_FILE: "CHATWORK_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CHATWORK".
 */
export type CHATWORK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CHATWORK".
 */
export type CHATWORK_TRIGGER_EVENTS = {}
