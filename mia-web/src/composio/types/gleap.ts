// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GLEAP's GLEAP_ARCHIVE_A_TICKET tool input.
 */
type GLEAP_ARCHIVE_A_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description Identifier of the ticket to archive
   */
  ticketId?: string;
};

/**
 * Type of GLEAP's GLEAP_ARCHIVE_A_TICKET tool output.
 */
type GLEAP_ARCHIVE_A_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_CREATE_A_COLLECTION tool input.
 */
type GLEAP_CREATE_A_COLLECTION_INPUT = {
  /**
   * Base Audience Filter
   * @description Base filter criteria object to limit the audience
   * @default null
   */
  baseAudienceFilter: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description Detailed description of the collection
   * @default null
   */
  description: string | null;
  /**
   * Doc Id
   * @description Numeric document ID this collection belongs to, if applicable
   * @default null
   */
  docId: number | null;
  /**
   * Extended Audience Filter
   * @description Additional filter criteria to extend the base audience
   * @default null
   */
  extendedAudienceFilter: {
      [key: string]: unknown;
  } | null;
  /**
   * External Id
   * @description External identifier for syncing with other systems
   * @default null
   */
  externalId: string | null;
  /**
   * Icon Url
   * @description URL to an icon representing the collection
   * @default null
   */
  iconUrl: string | null;
  /**
   * Lexorank
   * @description String used to order this collection among its peers
   * @default null
   */
  lexorank: string | null;
  /**
   * Parent
   * @description Identifier of the parent collection for nesting
   * @default null
   */
  parent: string | null;
  /**
   * Target Audience
   * @description Audience for this collection, defaults to 'all'
   * @default all
   */
  targetAudience: string;
  /**
   * Title
   * @description Title of the help center collection
   */
  title?: string;
};

/**
 * Type of GLEAP's GLEAP_CREATE_A_COLLECTION tool output.
 */
type GLEAP_CREATE_A_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base Audience Filter
       * @description Base audience filter object
       */
      baseAudienceFilter: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Timestamp when the collection was created, in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the collection
       */
      description: string;
      /**
       * Doc Id
       * @description Associated document ID
       * @default null
       */
      docId: number | null;
      /**
       * Extended Audience Filter
       * @description Extended audience filter object
       */
      extendedAudienceFilter: {
          [key: string]: unknown;
      };
      /**
       * External Id
       * @description External identifier of the collection
       * @default null
       */
      externalId: string | null;
      /**
       * Icon Url
       * @description URL of the collection icon
       * @default null
       */
      iconUrl: string | null;
      /**
       * Lexorank
       * @description Lexorank value for ordering
       * @default null
       */
      lexorank: string | null;
      /**
       * Parent
       * @description Parent collection metadata object
       */
      parent: {
          [key: string]: unknown;
      };
      /**
       * Project
       * @description Project metadata object
       */
      project: {
          [key: string]: unknown;
      };
      /**
       * Target Audience
       * @description Target audience of the collection
       */
      targetAudience: string;
      /**
       * Title
       * @description Title of the collection
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the collection was last updated, in ISO 8601 format
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLEAP's GLEAP_CREATE_A_NEW_CHAT_MESSAGE tool input.
 */
type GLEAP_CREATE_A_NEW_CHAT_MESSAGE_INPUT = {
  /**
   * Content
   * @description Text content of the chat message.
   */
  content?: string;
  /**
   * Role
   * @description Role of the message sender.
   * @enum {string}
   */
  role?: "user" | "admin";
  /**
   * Session Id
   * @description Unique identifier of the chat session.
   */
  sessionId?: string;
};

/**
 * Type of GLEAP's GLEAP_CREATE_A_NEW_CHAT_MESSAGE tool output.
 */
type GLEAP_CREATE_A_NEW_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Full JSON response returned by the Gleap API.
       */
      raw_response: {
          [key: string]: unknown;
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
 * Type of GLEAP's GLEAP_CREATE_A_NEW_TEAM tool input.
 */
type GLEAP_CREATE_A_NEW_TEAM_INPUT = {
  /**
   * Assignment Method
   * @description Method used to assign tickets within the team
   * @enum {string}
   */
  assignmentMethod?: "random" | "balanced" | "manual";
  /**
   * Members
   * @description List of user IDs to include in the team
   */
  members?: string[];
  /**
   * Name
   * @description Name of the team to create
   */
  name?: string;
};

/**
 * Type of GLEAP's GLEAP_CREATE_A_NEW_TEAM tool output.
 */
type GLEAP_CREATE_A_NEW_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignment Method
       * @description Assignment method used for the team
       * @enum {string}
       */
      assignmentMethod: "random" | "balanced" | "manual";
      /**
       * Members
       * @description List of user IDs in the team
       */
      members: string[];
      /**
       * Name
       * @description Name of the created team
       */
      name: string;
      /**
       * Project
       * @description Identifier of the project this team belongs to
       */
      project: string;
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
 * Type of GLEAP's GLEAP_CREATE_A_NEW_TICKET tool input.
 */
type GLEAP_CREATE_A_NEW_TICKET_INPUT = {
  /**
   * Attachments
   * @description List of file attachments
   * @default null
   */
  attachments: {
      /**
       * Name
       * @description Attachment file name
       */
      name: string;
      /**
       * Type
       * @description Attachment MIME type, e.g., 'image/png'
       */
      type: string;
      /**
       * Url
       * @description URL to the attachment file
       */
      url: string;
  }[] | null;
  /**
   * Description
   * @description Detailed description of the ticket
   * @default null
   */
  description: string | null;
  /**
   * Title
   * @description Ticket title
   */
  title?: string;
};

/**
 * Type of GLEAP's GLEAP_CREATE_A_NEW_TICKET tool output.
 */
type GLEAP_CREATE_A_NEW_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_DELETE_A_USER_FROM_A_PROJECT tool input.
 */
type GLEAP_DELETE_A_USER_FROM_A_PROJECT_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user to remove from the project
   */
  user_id?: string;
};

/**
 * Type of GLEAP's GLEAP_DELETE_A_USER_FROM_A_PROJECT tool output.
 */
type GLEAP_DELETE_A_USER_FROM_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the user was successfully removed from the project
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
 * Type of GLEAP's GLEAP_GET_ALL_ARTICLES tool input.
 */
type GLEAP_GET_ALL_ARTICLES_INPUT = {
  /**
   * Helpcenter Collection Id
   * @description ID of the help center collection
   */
  helpcenterCollectionId?: string;
};

/**
 * Type of GLEAP's GLEAP_GET_ALL_ARTICLES tool output.
 */
type GLEAP_GET_ALL_ARTICLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author
       * @description Author object of the article
       */
      author: {
          [key: string]: unknown;
      };
      /**
       * Base Audience Filter
       * @description Base audience filter
       * @default null
       */
      baseAudienceFilter: {
          [key: string]: unknown;
      } | null;
      /**
       * Content
       * @description Rich content of the article
       * @default null
       */
      content: {
          [key: string]: unknown;
      } | null;
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description or summary of the article
       * @default null
       */
      description: string | null;
      /**
       * Doc Id
       * @description Document ID for the article
       * @default null
       */
      docId: number | null;
      /**
       * Extended Audience Filter
       * @description Extended audience filter
       * @default null
       */
      extendedAudienceFilter: {
          [key: string]: unknown;
      } | null;
      /**
       * External Id
       * @description External identifier for the article
       * @default null
       */
      externalId: string | null;
      /**
       * Helpcenter Collection
       * @description Collection object the article belongs to
       */
      helpcenterCollection: {
          [key: string]: unknown;
      };
      /**
       * Is Draft
       * @description Whether the article is in draft status
       */
      isDraft: boolean;
      /**
       * Lexorank
       * @description Lexorank value for ordering the article
       */
      lexorank: string;
      /**
       * Plain Content
       * @description Plain text content of the article
       * @default null
       */
      plainContent: string | null;
      /**
       * Project
       * @description Project object associated with the article
       */
      project: {
          [key: string]: unknown;
      };
      /**
       * Source Usage
       * @description Usage metric for the article
       */
      sourceUsage: number;
      /**
       * Tags
       * @description List of tags associated with the article
       */
      tags: string[];
      /**
       * Target Audience
       * @description Target audience for the article
       */
      targetAudience: string;
      /**
       * Title
       * @description Title of the article
       */
      title: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updatedAt: string;
      /**
       * Upvotes
       * @description Upvotes data for the article
       * @default null
       */
      upvotes: {
          [key: string]: unknown;
      } | null;
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
 * Type of GLEAP's GLEAP_GET_ALL_CHAT_MESSAGES tool input.
 */
type GLEAP_GET_ALL_CHAT_MESSAGES_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_CHAT_MESSAGES tool output.
 */
type GLEAP_GET_ALL_CHAT_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GLEAP's GLEAP_GET_ALL_COLLECTIONS tool input.
 */
type GLEAP_GET_ALL_COLLECTIONS_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_COLLECTIONS tool output.
 */
type GLEAP_GET_ALL_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Articles Count
       * @description Number of articles in the collection
       */
      articlesCount: number;
      /**
       * Base Audience Filter
       * @description Base audience filter
       * @default null
       */
      baseAudienceFilter: {
          [key: string]: unknown;
      } | null;
      /**
       * Created At
       * @description ISO timestamp when the collection was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the collection
       * @default null
       */
      description: string | null;
      /**
       * Doc Id
       * @description Document ID for the collection
       * @default null
       */
      docId: number | null;
      /**
       * Extended Audience Filter
       * @description Extended audience filter
       * @default null
       */
      extendedAudienceFilter: {
          [key: string]: unknown;
      } | null;
      /**
       * External Id
       * @description External identifier for the collection
       * @default null
       */
      externalId: string | null;
      /**
       * Icon Url
       * @description URL of the collection icon
       * @default null
       */
      iconUrl: string | null;
      /**
       * Lexorank
       * @description Lexorank for sorting collections
       * @default null
       */
      lexorank: string | null;
      /**
       * Parent
       * @description Parent collection object
       * @default null
       */
      parent: {
          [key: string]: unknown;
      } | null;
      /**
       * Project
       * @description Project object associated with the collection
       * @default null
       */
      project: {
          [key: string]: unknown;
      } | null;
      /**
       * Sub Collections Count
       * @description Number of sub-collections
       */
      subCollectionsCount: number;
      /**
       * Target Audience
       * @description Target audience for the collection
       */
      targetAudience: string;
      /**
       * Title
       * @description Title of the collection
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO timestamp when the collection was last updated
       */
      updatedAt: string;
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
 * Type of GLEAP's GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT tool input.
 */
type GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT tool output.
 */
type GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the invitation was created
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the invitee, if provided
       * @default null
       */
      email: string | null;
      /**
       * Name
       * @description Name of the invitee
       */
      name: string;
      /**
       * Organisation
       * @description Organisation object associated with the invitation
       */
      organisation: {
          [key: string]: unknown;
      };
      /**
       * Project
       * @description Project object associated with the invitation
       */
      project: {
          [key: string]: unknown;
      };
      /**
       * Role
       * @description Role assigned by this invitation
       */
      role: string;
      /**
       * Type
       * @description Invitation type; one of 'organisation' or 'project'
       * @enum {string}
       */
      type: "organisation" | "project";
      /**
       * Updated At
       * @description ISO-8601 timestamp when the invitation was last updated
       */
      updatedAt: string;
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
 * Type of GLEAP's GLEAP_GET_ALL_SESSIONS tool input.
 */
type GLEAP_GET_ALL_SESSIONS_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_SESSIONS tool output.
 */
type GLEAP_GET_ALL_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GLEAP's GLEAP_GET_ALL_TEAMS tool input.
 */
type GLEAP_GET_ALL_TEAMS_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_TEAMS tool output.
 */
type GLEAP_GET_ALL_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignment Method
       * @description Method used to assign tickets within the team
       * @enum {string}
       */
      assignmentMethod: "random" | "balanced" | "manual" | "circular";
      /**
       * Created At
       * @description ISO 8601 timestamp when the team was created
       */
      createdAt: string;
      /**
       * Limit Ticket Amount
       * @description Whether there is an upper limit on tickets for this team
       */
      limitTicketAmount: boolean;
      /**
       * Members
       * @description List of user IDs who are members of this team
       */
      members: string[];
      /**
       * Name
       * @description Name of the team
       */
      name: string;
      /**
       * Need Queue Rerun
       * @description Whether the ticket queue needs to be rerun for assignment
       */
      needQueueRerun: boolean;
      /**
       * Project
       * @description Identifier of the project this team belongs to
       */
      project: string;
      /**
       * Select Only Online Members
       * @description If true, only online members will be considered for ticket assignments
       */
      selectOnlyOnlineMembers: boolean;
      /**
       * Ticket Amount
       * @description Current number of tickets assigned to this team
       */
      ticketAmount: number;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the team was last updated
       */
      updatedAt: string;
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
 * Type of GLEAP's GLEAP_GET_ALL_TICKETS tool input.
 */
type GLEAP_GET_ALL_TICKETS_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_TICKETS tool output.
 */
type GLEAP_GET_ALL_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GLEAP's GLEAP_GET_ALL_USERS_FOR_A_PROJECT tool input.
 */
type GLEAP_GET_ALL_USERS_FOR_A_PROJECT_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_ALL_USERS_FOR_A_PROJECT tool output.
 */
type GLEAP_GET_ALL_USERS_FOR_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: ({
      /**
       * Email
       * @description Email address of the user
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Name
       * @description Name of the user
       * @default null
       */
      name: string | null;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLEAP's GLEAP_GET_A_CHECKLIST_ACTION tool input.
 */
type GLEAP_GET_A_CHECKLIST_ACTION_INPUT = {
  /**
   * Checklist Id
   * @description Unique identifier of the checklist to retrieve
   */
  checklistId?: string;
};

/**
 * Type of GLEAP's GLEAP_GET_A_CHECKLIST_ACTION tool output.
 */
type GLEAP_GET_A_CHECKLIST_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the checklist was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the checklist
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Checklist ID
       */
      id: string;
      /**
       * Items
       * @description List of items in the checklist
       */
      items: {
          /**
           * Completed
           * @description Completion status of the item
           */
          completed: boolean;
          /**
           * Created At
           * @description Timestamp when item was created
           * @default null
           */
          createdAt: string | null;
          /**
           * Id
           * @description Checklist item ID
           * @default null
           */
          id: string | null;
          /**
           * Text
           * @description Checklist item text
           */
          text: string;
          /**
           * Updated At
           * @description Timestamp when item was updated
           * @default null
           */
          updatedAt: string | null;
      }[];
      /**
       * Title
       * @description Title of the checklist
       */
      title: string;
      /**
       * Updated At
       * @description ISO timestamp when the checklist was last updated
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLEAP's GLEAP_GET_A_COLLECTION tool input.
 */
type GLEAP_GET_A_COLLECTION_INPUT = {
  /**
   * Helpcenter Collection Id
   * @description ID of the help center collection to retrieve
   */
  helpcenterCollectionId?: string;
};

/**
 * Type of GLEAP's GLEAP_GET_A_COLLECTION tool output.
 */
type GLEAP_GET_A_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base Audience Filter
       * @description Base audience filter object
       */
      baseAudienceFilter: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Timestamp when the collection was created, in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the collection
       */
      description: string;
      /**
       * Doc Id
       * @description Associated document ID
       * @default null
       */
      docId: number | null;
      /**
       * Extended Audience Filter
       * @description Extended audience filter object
       */
      extendedAudienceFilter: {
          [key: string]: unknown;
      };
      /**
       * External Id
       * @description External identifier of the collection
       * @default null
       */
      externalId: string | null;
      /**
       * Icon Url
       * @description URL of the collection icon
       * @default null
       */
      iconUrl: string | null;
      /**
       * Lexorank
       * @description Lexorank value for ordering
       * @default null
       */
      lexorank: string | null;
      /**
       * Parent
       * @description Parent collection metadata object
       */
      parent: {
          [key: string]: unknown;
      };
      /**
       * Project
       * @description Project metadata object
       */
      project: {
          [key: string]: unknown;
      };
      /**
       * Target Audience
       * @description Target audience of the collection
       */
      targetAudience: string;
      /**
       * Title
       * @description Title of the collection
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when the collection was last updated, in ISO 8601 format
       */
      updatedAt: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLEAP's GLEAP_GET_A_TICKET tool input.
 */
type GLEAP_GET_A_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description The unique identifier of the ticket to retrieve
   */
  ticketId?: string;
};

/**
 * Type of GLEAP's GLEAP_GET_A_TICKET tool output.
 */
type GLEAP_GET_A_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_GET_CURRENT_USER tool input.
 */
type GLEAP_GET_CURRENT_USER_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_CURRENT_USER tool output.
 */
type GLEAP_GET_CURRENT_USER_OUTPUT = {
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
 * Type of GLEAP's GLEAP_GET_HELP_CENTER_SOURCES tool input.
 */
type GLEAP_GET_HELP_CENTER_SOURCES_INPUT = object;

/**
 * Type of GLEAP's GLEAP_GET_HELP_CENTER_SOURCES tool output.
 */
type GLEAP_GET_HELP_CENTER_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sources
       * @description List of available help center sources
       */
      sources: {
          /**
           * Extract
           * @description Optional extract or summary of the source content
           * @default null
           */
          extract: string | null;
          /**
           * Id
           * @description Identifier of the help center source
           */
          id: string;
          /**
           * Source Type
           * @description Optional provider/type classifier
           * @default null
           */
          sourceType: string | null;
          /**
           * Title
           * @description Title of the help center source
           */
          title: string;
          /**
           * Type
           * @description Type/category of the help center source
           */
          type: string;
          /**
           * Url
           * @description URL of the help center source
           */
          url: string;
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
 * Type of GLEAP's GLEAP_GET_NOTIFICATION_TICKET tool input.
 */
type GLEAP_GET_NOTIFICATION_TICKET_INPUT = {
  /**
   * Share Token
   * @description The notification share token used to retrieve the ticket.
   */
  shareToken?: string;
};

/**
 * Type of GLEAP's GLEAP_GET_NOTIFICATION_TICKET tool output.
 */
type GLEAP_GET_NOTIFICATION_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_GET_SESSION_CHECKLISTS tool input.
 */
type GLEAP_GET_SESSION_CHECKLISTS_INPUT = {
  /**
   * Session Id
   * @description The unique identifier of the session to retrieve checklists for
   */
  sessionId?: string;
};

/**
 * Type of GLEAP's GLEAP_GET_SESSION_CHECKLISTS tool output.
 */
type GLEAP_GET_SESSION_CHECKLISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GLEAP's GLEAP_IDENTIFY_USER tool input.
 */
type GLEAP_IDENTIFY_USER_INPUT = {
  /**
   * Created At
   * Format: date-time
   * @description Explicit user creation timestamp (ISO 8601).
   * @default null
   */
  createdAt: string | null;
  /**
   * Email
   * @description User’s email address.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description User’s full name.
   * @default null
   */
  name: string | null;
  /**
   * Phone
   * @description User’s phone number.
   * @default null
   */
  phone: string | null;
  /**
   * Prevent Last Activity Update
   * @description If true, prevents updating the user’s last activity timestamp.
   * @default null
   */
  preventLastActivityUpdate: boolean | null;
  /**
   * User Id
   * @description Unique identifier of the user.
   */
  userId?: string;
  /**
   * Value
   * @description Monetary or lifetime value associated with the user.
   * @default null
   */
  value: number | null;
};

/**
 * Type of GLEAP's GLEAP_IDENTIFY_USER tool output.
 */
type GLEAP_IDENTIFY_USER_OUTPUT = {
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
 * Type of GLEAP's GLEAP_LINK_A_TICKET tool input.
 */
type GLEAP_LINK_A_TICKET_INPUT = {
  /**
   * Target Ticket Id
   * @description ID of the target ticket to link to
   */
  targetTicketId?: string;
  /**
   * Ticket Id
   * @description ID of the source ticket to link from
   */
  ticketId?: string;
};

/**
 * Type of GLEAP's GLEAP_LINK_A_TICKET tool output.
 */
type GLEAP_LINK_A_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_SEARCH_FOR_TICKETS tool input.
 */
type GLEAP_SEARCH_FOR_TICKETS_INPUT = {
  /**
   * Path
   * @description Search path or field path if required by API.
   * @default null
   */
  path: string | null;
  /**
   * Q
   * @description General search query string (alias for query/value).
   * @default null
   */
  q: string | null;
  /**
   * Query
   * @description Search query string (if supported by API).
   * @default null
   */
  query: string | null;
  /**
   * Term
   * @description Search term (some APIs use 'term' as the query key).
   * @default null
   */
  term: string | null;
  /**
   * Type
   * @description Search type/category (e.g., 'title', 'description', 'user').
   * @default null
   */
  type: string | null;
  /**
   * Value
   * @description Search value (if API expects 'value').
   * @default null
   */
  value: string | null;
};

/**
 * Type of GLEAP's GLEAP_SEARCH_FOR_TICKETS tool output.
 */
type GLEAP_SEARCH_FOR_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GLEAP's GLEAP_TRACK_EVENTS tool input.
 */
type GLEAP_TRACK_EVENTS_INPUT = {
  /**
   * Events
   * @description List of events to track; must contain at least one event
   */
  events?: {
      /**
       * Data
       * @description Arbitrary key/value payload for the event
       */
      data: string | null;
      /**
       * Date
       * @description ISO 8601 timestamp of the event
       */
      date: string;
      /**
       * Name
       * @description Name of the event
       */
      name: string;
      /**
       * User Id
       * @description Identifier of the related user
       */
      userId: string;
  }[];
};

/**
 * Type of GLEAP's GLEAP_TRACK_EVENTS tool output.
 */
type GLEAP_TRACK_EVENTS_OUTPUT = {
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
 * Type of GLEAP's GLEAP_UNARCHIVE_A_TICKET tool input.
 */
type GLEAP_UNARCHIVE_A_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description Identifier of the ticket to unarchive
   */
  ticketId?: string;
};

/**
 * Type of GLEAP's GLEAP_UNARCHIVE_A_TICKET tool output.
 */
type GLEAP_UNARCHIVE_A_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_UNLINK_A_TICKET tool input.
 */
type GLEAP_UNLINK_A_TICKET_INPUT = {
  /**
   * Target Ticket Id
   * @description ID of the target ticket that was previously linked
   */
  targetTicketId?: string;
  /**
   * Ticket Id
   * @description ID of the source ticket to unlink from
   */
  ticketId?: string;
};

/**
 * Type of GLEAP's GLEAP_UNLINK_A_TICKET tool output.
 */
type GLEAP_UNLINK_A_TICKET_OUTPUT = {
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
 * Type of GLEAP's GLEAP_UPDATE_A_USER_FOR_A_PROJECT tool input.
 */
type GLEAP_UPDATE_A_USER_FOR_A_PROJECT_INPUT = {
  /**
   * Role
   * @description The new role to assign to the user (e.g., 'admin', 'member')
   */
  role?: string;
  /**
   * User Id
   * @description The unique identifier of the user to update in the project
   */
  user_id?: string;
};

/**
 * Type of GLEAP's GLEAP_UPDATE_A_USER_FOR_A_PROJECT tool output.
 */
type GLEAP_UPDATE_A_USER_FOR_A_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the user's role was successfully updated
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
 * Type of GLEAP's GLEAP_UPDATE_CHAT_MESSAGE tool input.
 */
type GLEAP_UPDATE_CHAT_MESSAGE_INPUT = {
  /**
   * Body
   * @description JSON object containing the fields to update on the chat message, e.g., {'content': 'Updated text'}.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Chat Message Id
   * @description The unique identifier of the chat message to update
   */
  chatMessageId?: string;
};

/**
 * Type of GLEAP's GLEAP_UPDATE_CHAT_MESSAGE tool output.
 */
type GLEAP_UPDATE_CHAT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Full JSON response returned by the Gleap API.
       */
      raw_response: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "GLEAP".
 */
export type GLEAP_TOOL_INPUTS = {
  ARCHIVE_A_TICKET: GLEAP_ARCHIVE_A_TICKET_INPUT
  CREATE_A_COLLECTION: GLEAP_CREATE_A_COLLECTION_INPUT
  CREATE_A_NEW_CHAT_MESSAGE: GLEAP_CREATE_A_NEW_CHAT_MESSAGE_INPUT
  CREATE_A_NEW_TEAM: GLEAP_CREATE_A_NEW_TEAM_INPUT
  CREATE_A_NEW_TICKET: GLEAP_CREATE_A_NEW_TICKET_INPUT
  DELETE_A_USER_FROM_A_PROJECT: GLEAP_DELETE_A_USER_FROM_A_PROJECT_INPUT
  GET_ALL_ARTICLES: GLEAP_GET_ALL_ARTICLES_INPUT
  GET_ALL_CHAT_MESSAGES: GLEAP_GET_ALL_CHAT_MESSAGES_INPUT
  GET_ALL_COLLECTIONS: GLEAP_GET_ALL_COLLECTIONS_INPUT
  GET_ALL_INVITATIONS_FOR_A_PROJECT: GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT_INPUT
  GET_ALL_SESSIONS: GLEAP_GET_ALL_SESSIONS_INPUT
  GET_ALL_TEAMS: GLEAP_GET_ALL_TEAMS_INPUT
  GET_ALL_TICKETS: GLEAP_GET_ALL_TICKETS_INPUT
  GET_ALL_USERS_FOR_A_PROJECT: GLEAP_GET_ALL_USERS_FOR_A_PROJECT_INPUT
  GET_A_CHECKLIST_ACTION: GLEAP_GET_A_CHECKLIST_ACTION_INPUT
  GET_A_COLLECTION: GLEAP_GET_A_COLLECTION_INPUT
  GET_A_TICKET: GLEAP_GET_A_TICKET_INPUT
  GET_CURRENT_USER: GLEAP_GET_CURRENT_USER_INPUT
  GET_HELP_CENTER_SOURCES: GLEAP_GET_HELP_CENTER_SOURCES_INPUT
  GET_NOTIFICATION_TICKET: GLEAP_GET_NOTIFICATION_TICKET_INPUT
  GET_SESSION_CHECKLISTS: GLEAP_GET_SESSION_CHECKLISTS_INPUT
  IDENTIFY_USER: GLEAP_IDENTIFY_USER_INPUT
  LINK_A_TICKET: GLEAP_LINK_A_TICKET_INPUT
  SEARCH_FOR_TICKETS: GLEAP_SEARCH_FOR_TICKETS_INPUT
  TRACK_EVENTS: GLEAP_TRACK_EVENTS_INPUT
  UNARCHIVE_A_TICKET: GLEAP_UNARCHIVE_A_TICKET_INPUT
  UNLINK_A_TICKET: GLEAP_UNLINK_A_TICKET_INPUT
  UPDATE_A_USER_FOR_A_PROJECT: GLEAP_UPDATE_A_USER_FOR_A_PROJECT_INPUT
  UPDATE_CHAT_MESSAGE: GLEAP_UPDATE_CHAT_MESSAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GLEAP".
 */
export type GLEAP_TOOL_OUTPUTS = {
  ARCHIVE_A_TICKET: GLEAP_ARCHIVE_A_TICKET_OUTPUT
  CREATE_A_COLLECTION: GLEAP_CREATE_A_COLLECTION_OUTPUT
  CREATE_A_NEW_CHAT_MESSAGE: GLEAP_CREATE_A_NEW_CHAT_MESSAGE_OUTPUT
  CREATE_A_NEW_TEAM: GLEAP_CREATE_A_NEW_TEAM_OUTPUT
  CREATE_A_NEW_TICKET: GLEAP_CREATE_A_NEW_TICKET_OUTPUT
  DELETE_A_USER_FROM_A_PROJECT: GLEAP_DELETE_A_USER_FROM_A_PROJECT_OUTPUT
  GET_ALL_ARTICLES: GLEAP_GET_ALL_ARTICLES_OUTPUT
  GET_ALL_CHAT_MESSAGES: GLEAP_GET_ALL_CHAT_MESSAGES_OUTPUT
  GET_ALL_COLLECTIONS: GLEAP_GET_ALL_COLLECTIONS_OUTPUT
  GET_ALL_INVITATIONS_FOR_A_PROJECT: GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT_OUTPUT
  GET_ALL_SESSIONS: GLEAP_GET_ALL_SESSIONS_OUTPUT
  GET_ALL_TEAMS: GLEAP_GET_ALL_TEAMS_OUTPUT
  GET_ALL_TICKETS: GLEAP_GET_ALL_TICKETS_OUTPUT
  GET_ALL_USERS_FOR_A_PROJECT: GLEAP_GET_ALL_USERS_FOR_A_PROJECT_OUTPUT
  GET_A_CHECKLIST_ACTION: GLEAP_GET_A_CHECKLIST_ACTION_OUTPUT
  GET_A_COLLECTION: GLEAP_GET_A_COLLECTION_OUTPUT
  GET_A_TICKET: GLEAP_GET_A_TICKET_OUTPUT
  GET_CURRENT_USER: GLEAP_GET_CURRENT_USER_OUTPUT
  GET_HELP_CENTER_SOURCES: GLEAP_GET_HELP_CENTER_SOURCES_OUTPUT
  GET_NOTIFICATION_TICKET: GLEAP_GET_NOTIFICATION_TICKET_OUTPUT
  GET_SESSION_CHECKLISTS: GLEAP_GET_SESSION_CHECKLISTS_OUTPUT
  IDENTIFY_USER: GLEAP_IDENTIFY_USER_OUTPUT
  LINK_A_TICKET: GLEAP_LINK_A_TICKET_OUTPUT
  SEARCH_FOR_TICKETS: GLEAP_SEARCH_FOR_TICKETS_OUTPUT
  TRACK_EVENTS: GLEAP_TRACK_EVENTS_OUTPUT
  UNARCHIVE_A_TICKET: GLEAP_UNARCHIVE_A_TICKET_OUTPUT
  UNLINK_A_TICKET: GLEAP_UNLINK_A_TICKET_OUTPUT
  UPDATE_A_USER_FOR_A_PROJECT: GLEAP_UPDATE_A_USER_FOR_A_PROJECT_OUTPUT
  UPDATE_CHAT_MESSAGE: GLEAP_UPDATE_CHAT_MESSAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GLEAP toolkit.
 */
export const GLEAP = {
  slug: "gleap",
  tools: {
    /**
     * Tool to archive a ticket. Use after confirming the ticket ID and that the ticket is resolved. Call when moving tickets to history.
     */
    ARCHIVE_A_TICKET: "GLEAP_ARCHIVE_A_TICKET",
    /**
     * Tool to create a help center collection. Use when adding a new organizational grouping in your Help Center.
     */
    CREATE_A_COLLECTION: "GLEAP_CREATE_A_COLLECTION",
    /**
     * Tool to create a new chat message. Use when sending a message in an active chat session.
     */
    CREATE_A_NEW_CHAT_MESSAGE: "GLEAP_CREATE_A_NEW_CHAT_MESSAGE",
    /**
     * Tool to create a new team. Use when you have team details ready and want to assign tickets among members.
     */
    CREATE_A_NEW_TEAM: "GLEAP_CREATE_A_NEW_TEAM",
    /**
     * Tool to create a new ticket. Use when you have ticket details ready to open a support ticket.
     */
    CREATE_A_NEW_TICKET: "GLEAP_CREATE_A_NEW_TICKET",
    /**
     * Tool to remove a user from a project. Use when you need to revoke a user's access by their ID.
     */
    DELETE_A_USER_FROM_A_PROJECT: "GLEAP_DELETE_A_USER_FROM_A_PROJECT",
    /**
     * Tool to retrieve all articles in a help center collection. Use when you have a helpcenterCollectionId and want to list its articles.
     */
    GET_ALL_ARTICLES: "GLEAP_GET_ALL_ARTICLES",
    /**
     * Tool to retrieve all chat messages. Use when you need to list full conversation history.
     */
    GET_ALL_CHAT_MESSAGES: "GLEAP_GET_ALL_CHAT_MESSAGES",
    /**
     * Tool to retrieve all help center collections. Use when you need to list all collections for the authenticated project.
     */
    GET_ALL_COLLECTIONS: "GLEAP_GET_ALL_COLLECTIONS",
    /**
     * Tool to retrieve all invitations for a project. Use when you need to list every pending or accepted invitation within the current project context.
     */
    GET_ALL_INVITATIONS_FOR_A_PROJECT: "GLEAP_GET_ALL_INVITATIONS_FOR_A_PROJECT",
    /**
     * Tool to retrieve all sessions for the current project. Use after project context is confirmed. Fetches all user sessions for analysis or reporting.
     */
    GET_ALL_SESSIONS: "GLEAP_GET_ALL_SESSIONS",
    /**
     * Tool to retrieve all teams. Use when you need a list of all teams for the authenticated project.
     */
    GET_ALL_TEAMS: "GLEAP_GET_ALL_TEAMS",
    /**
     * Tool to retrieve all tickets. Use when you need to list all tickets for the authenticated project.
     */
    GET_ALL_TICKETS: "GLEAP_GET_ALL_TICKETS",
    /**
     * Tool to retrieve all users for a project. Use when you need to list every user associated with the current project.
     */
    GET_ALL_USERS_FOR_A_PROJECT: "GLEAP_GET_ALL_USERS_FOR_A_PROJECT",
    /**
     * Tool to retrieve a specific engagement checklist by its ID. Use after obtaining a valid checklistId.
     */
    GET_A_CHECKLIST_ACTION: "GLEAP_GET_A_CHECKLIST_ACTION",
    /**
     * Tool to retrieve a help center collection by ID. Use when you need to fetch specific collection details by its ID.
     */
    GET_A_COLLECTION: "GLEAP_GET_A_COLLECTION",
    /**
     * Tool to retrieve a specific ticket by its ID. Use after confirming the ticket ID. Returns full ticket details.
     */
    GET_A_TICKET: "GLEAP_GET_A_TICKET",
    /**
     * Tool to retrieve the currently authenticated user's details. Use when you need the user's profile and settings.
     */
    GET_CURRENT_USER: "GLEAP_GET_CURRENT_USER",
    /**
     * Tool to retrieve available help center sources. Use when you need to list all help center sources for a project.
     */
    GET_HELP_CENTER_SOURCES: "GLEAP_GET_HELP_CENTER_SOURCES",
    /**
     * Tool to retrieve a notification ticket using its share token. Use when you have a share token and need to fetch ticket details.
     */
    GET_NOTIFICATION_TICKET: "GLEAP_GET_NOTIFICATION_TICKET",
    /**
     * Tool to retrieve checklists for a given session. Use after confirming a valid sessionId. Returns all checklists associated with the specified session.
     */
    GET_SESSION_CHECKLISTS: "GLEAP_GET_SESSION_CHECKLISTS",
    /**
     * Tool to identify or update user information. Use when you need to sync server-side user profile after authentication.
     */
    IDENTIFY_USER: "GLEAP_IDENTIFY_USER",
    /**
     * Tool to link a ticket. Use when you need to connect two existing tickets after confirming both IDs exist. Example: Link a duplicate issue ticket to its original.
     */
    LINK_A_TICKET: "GLEAP_LINK_A_TICKET",
    /**
     * Tool to search for tickets. Use when needing to find tickets based on search criteria.
     */
    SEARCH_FOR_TICKETS: "GLEAP_SEARCH_FOR_TICKETS",
    /**
     * Tool to track server-side customer events. Use when you have collected a batch of events and want to send them to Gleap via the /admin/track endpoint.
     */
    TRACK_EVENTS: "GLEAP_TRACK_EVENTS",
    /**
     * Tool to unarchive a ticket. Use when you need to restore a previously archived ticket after validation.
     */
    UNARCHIVE_A_TICKET: "GLEAP_UNARCHIVE_A_TICKET",
    /**
     * Tool to unlink a ticket. Use after confirming both tickets are linked to remove their association.
     */
    UNLINK_A_TICKET: "GLEAP_UNLINK_A_TICKET",
    /**
     * Tool to update a user’s role in a project. Use when you need to change a user's permissions.
     */
    UPDATE_A_USER_FOR_A_PROJECT: "GLEAP_UPDATE_A_USER_FOR_A_PROJECT",
    /**
     * Tool to update a chat message. Use when you need to modify the content of an existing chat message after obtaining its ID.
     */
    UPDATE_CHAT_MESSAGE: "GLEAP_UPDATE_CHAT_MESSAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GLEAP".
 */
export type GLEAP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GLEAP".
 */
export type GLEAP_TRIGGER_EVENTS = {}
