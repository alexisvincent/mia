import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TRELLO's TRELLO_ACTION_GET_BOARD_BY_ID_ACTION tool input.
 */
type TRELLO_ACTION_GET_BOARD_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description Board fields to return: 'all', or a comma-separated list of field names. Allowed values: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description ID of the Trello action to retrieve its associated board.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_ACTION_GET_BOARD_BY_ID_ACTION tool output.
 */
type TRELLO_ACTION_GET_BOARD_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description Details of the board associated with the action.
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
 * Type of TRELLO's TRELLO_ACTION_GET_BY_ID tool input.
 */
type TRELLO_ACTION_GET_BY_ID_INPUT = {
  /**
   * Display
   * @description Determines whether to include display-related information.
   */
  display?: string;
  /**
   * Entities
   * @description Determines whether to include related entities in the response.
   */
  entities?: string;
  /**
   * Fields
   * @description Specifies which fields to include in the response. Use 'all' or a comma-separated list of: 'data', 'date', 'idMemberCreator', or 'type'.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The ID of the action to retrieve.
   */
  idAction?: string;
  /**
   * Member
   * @description Determines whether to include member details.
   */
  member?: string;
  /**
   * Member Creator
   * @description Determines whether to include details of the member who created the action.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Specifies which fields of the member creator to include. Use 'all' or a comma-separated list of: 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', or 'username'.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description Specifies which member fields to include. Use 'all' or a comma-separated list of: 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', or 'username'.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
};

/**
 * Type of TRELLO's TRELLO_ACTION_GET_BY_ID tool output.
 */
type TRELLO_ACTION_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the action's details.
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
 * Type of TRELLO's TRELLO_ACTION_GET_LIST_BY_ID_ACTION tool input.
 */
type TRELLO_ACTION_GET_LIST_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description Determines which fields to include in the response. Specify 'all' or a comma-separated list of valid field names. Valid fields are: 'closed', 'idBoard', 'name', 'pos', or 'subscribed'.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The ID of the Trello action for which to retrieve the associated list.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_ACTION_GET_LIST_BY_ID_ACTION tool output.
 */
type TRELLO_ACTION_GET_LIST_BY_ID_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS tool input.
 */
type TRELLO_ADD_BOARDS_INPUT = {
  /**
   * Closed
   * @description Whether the board should be immediately archived (closed).
   */
  closed?: string;
  /**
   * Desc
   * @description Description for the Trello board (0-16384 characters).
   */
  desc?: string;
  /**
   * Id Board Source
   * @description ID of an existing Trello board to use as a template.
   */
  idBoardSource?: string;
  /**
   * Id Organization
   * @description ID or name of the Trello Workspace (formerly Organization) for this board.
   */
  idOrganization?: string;
  /**
   * Keep From Source
   * @description Components to copy if 'idBoardSource' is used (e.g., 'cards,labels', 'all'; valid: 'cards', 'lists', 'checklists', 'stickers', 'members', 'customFields', 'prefs', 'labels').
   */
  keepFromSource?: string;
  /**
   * Label Names  Blue
   * @description Name for the blue label (0-16384 characters); corresponds to API parameter 'labelNames/blue'.
   */
  labelNames__blue?: string;
  /**
   * Label Names  Green
   * @description Name for the green label (0-16384 characters); corresponds to API parameter 'labelNames/green'.
   */
  labelNames__green?: string;
  /**
   * Label Names  Orange
   * @description Name for the orange label (0-16384 characters); corresponds to API parameter 'labelNames/orange'.
   */
  labelNames__orange?: string;
  /**
   * Label Names  Purple
   * @description Name for the purple label (0-16384 characters); corresponds to API parameter 'labelNames/purple'.
   */
  labelNames__purple?: string;
  /**
   * Label Names  Red
   * @description Name for the red label (0-16384 characters); corresponds to API parameter 'labelNames/red'.
   */
  labelNames__red?: string;
  /**
   * Label Names  Yellow
   * @description Name for the yellow label (0-16384 characters); corresponds to API parameter 'labelNames/yellow'.
   */
  labelNames__yellow?: string;
  /**
   * Name
   * @description Name for the new Trello board (1-16384 characters). This field is required for board creation.
   */
  name?: string;
  /**
   * Power Ups
   * @description Power-Ups to enable (e.g., 'calendar,voting', 'all'; valid: 'calendar', 'cardAging', 'recap', 'voting').
   */
  powerUps?: string;
  /**
   * Prefs  Background
   * @description Board background (standard name like 'blue', 'pink', or custom ID); corresponds to API parameter 'prefs/background'.
   */
  prefs__background?: string;
  /**
   * Prefs  Calendar Feed Enabled
   * @description Whether the calendar feed is enabled; corresponds to API parameter 'prefs/calendarFeedEnabled'.
   */
  prefs__calendarFeedEnabled?: string;
  /**
   * Prefs  Card Aging
   * @description Card aging style ('pirate' or 'regular'); corresponds to API parameter 'prefs/cardAging'.
   */
  prefs__cardAging?: string;
  /**
   * Prefs  Card Covers
   * @description Whether card covers are shown; corresponds to API parameter 'prefs/cardCovers'.
   */
  prefs__cardCovers?: string;
  /**
   * Prefs  Comments
   * @description Who can comment on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs/comments'.
   */
  prefs__comments?: string;
  /**
   * Prefs  Invitations
   * @description Who can invite to the board ('admins' or 'members'); corresponds to API parameter 'prefs/invitations'.
   */
  prefs__invitations?: string;
  /**
   * Prefs  Permission Level
   * @description Board visibility and permission level ('org', 'private', 'public'); corresponds to API parameter 'prefs/permissionLevel'.
   */
  prefs__permissionLevel?: string;
  /**
   * Prefs  Self Join
   * @description Whether Workspace members can join the board themselves; corresponds to API parameter 'prefs/selfJoin'.
   */
  prefs__selfJoin?: string;
  /**
   * Prefs  Voting
   * @description Who can vote on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs/voting'.
   */
  prefs__voting?: string;
  /**
   * Prefs Background
   * @description Board background (standard name, custom ID, or hex code; 0-16384 characters); corresponds to API parameter 'prefs_background'.
   */
  prefs_background?: string;
  /**
   * Prefs Card Aging
   * @description Card aging style ('pirate' or 'regular'); corresponds to API parameter 'prefs_cardAging'.
   */
  prefs_cardAging?: string;
  /**
   * Prefs Card Covers
   * @description Whether card covers are shown; corresponds to API parameter 'prefs_cardCovers'.
   */
  prefs_cardCovers?: string;
  /**
   * Prefs Comments
   * @description Who can comment on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs_comments'.
   */
  prefs_comments?: string;
  /**
   * Prefs Invitations
   * @description Who can invite to the board ('admins' or 'members'); corresponds to API parameter 'prefs_invitations'.
   */
  prefs_invitations?: string;
  /**
   * Prefs Permission Level
   * @description Board visibility and permission level ('org', 'private', 'public'); corresponds to API parameter 'prefs_permissionLevel'.
   */
  prefs_permissionLevel?: string;
  /**
   * Prefs Self Join
   * @description Whether Workspace members can join the board themselves; corresponds to API parameter 'prefs_selfJoin'.
   */
  prefs_selfJoin?: string;
  /**
   * Prefs Voting
   * @description Who can vote on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs_voting'.
   */
  prefs_voting?: string;
  /**
   * Subscribed
   * @description Whether the creator is automatically subscribed to the board.
   */
  subscribed?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS tool output.
 */
type TRELLO_ADD_BOARDS_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created Trello board.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which to generate a calendar key.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This typically includes the newly generated calendar key and other relevant details about the board.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board to which the new checklist will be added.
   */
  idBoard?: string;
  /**
   * Name
   * @description Name for the new checklist (1-16384 characters).
   */
  name?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description The newly created checklist object, including its ID, name, and other properties.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which a new email key will be generated.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the Trello API, typically including details of the newly generated email key and potentially other board-related information.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD_INPUT = {
  /**
   * Color
   * @description The color for the new label. Provide a valid Trello label color name or null for no color. If not provided, Trello may assign a default color or no color.
   */
  color?: string;
  /**
   * Id Board
   * @description The ID of the board to which the new label will be added.
   */
  idBoard?: string;
  /**
   * Name
   * @description The name for the new label. Must be a string with a length from 0 to 16384 characters. An empty string is allowed.
   */
  name?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created label, including its ID, name, color, and board ID.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the board to which the new list will be added.
   */
  idBoard?: string;
  /**
   * Name
   * @description The name for the new list. Must be a string with a length from 1 to 16384 characters.
   */
  name?: string;
  /**
   * Pos
   * @description The position of the new list on the board. Valid values are 'top', 'bottom', or a positive number (e.g., 1, 2.5, 3). If not provided, the list is added to the bottom.
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the newly created list object, containing details such as its ID, name, and position.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board to be marked as viewed.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the Trello API. This typically includes information confirming the 'mark as viewed' status or details of any error encountered.
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
 * Type of TRELLO's TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD tool input.
 */
type TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board.
   */
  idBoard?: string;
  /**
   * Value
   * @description Identifier for the built-in Trello Power-Up to enable (e.g., 'calendar', 'cardAging', 'recap', 'voting'). Only Trello's built-in Power-Ups are supported.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD tool output.
 */
type TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description Response from the Trello API, typically confirming successful Power-Up addition or detailing the enabled Power-Up.
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
 * Type of TRELLO's TRELLO_ADD_CARDS tool input.
 */
type TRELLO_ADD_CARDS_INPUT = {
  /**
   * Closed
   * @description Archive (close) the card. Valid values: 'true', 'false'.
   */
  closed?: string;
  /**
   * Desc
   * @description Card description (0-16384 characters).
   */
  desc?: string;
  /**
   * Due
   * @description Due date for the card (date string or 'null' to remove).
   */
  due?: string;
  /**
   * File Source
   * @description Binary data of a file to attach.
   */
  fileSource?: string;
  /**
   * Id Attachment Cover
   * @description ID of an image attachment on this card for its cover, or 'null' for no cover.
   */
  idAttachmentCover?: string;
  /**
   * Id Board
   * @description ID of the board to move the card to; if specified, `idList` must be on this board.
   */
  idBoard?: string;
  /**
   * Id Card Source
   * @description ID of an existing card to copy.
   */
  idCardSource?: string;
  /**
   * Id Labels
   * @description Comma-separated list of label IDs (24-char hex) to add.
   */
  idLabels?: string;
  /**
   * Id List
   * @description Required ID of the list to add the card to.
   */
  idList?: string;
  /**
   * Id Members
   * @description Comma-separated list of member IDs (24-char hex) to assign.
   */
  idMembers?: string;
  /**
   * Keep From Source
   * @description If using `idCardSource`, properties to copy: 'all' or comma-separated (e.g., 'attachments', 'checklists', 'due').
   */
  keepFromSource?: string;
  /**
   * Labels
   * @description Comma-separated label colors (e.g., 'blue', 'green') or 'all' for default labels.
   */
  labels?: string;
  /**
   * Name
   * @description Name for the new card; required unless `idCardSource` or `urlSource` is used.
   */
  name?: string;
  /**
   * Pos
   * @description Position in list: 'top', 'bottom', or a positive float.
   */
  pos?: string;
  /**
   * Subscribed
   * @description Subscribe user to the card. Valid values: 'true', 'false'.
   */
  subscribed?: string;
  /**
   * Url Source
   * @description URL (http:// or https://) to attach; if a Trello card URL, copies that card. Use 'null' if not needed.
   */
  urlSource?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS tool output.
 */
type TRELLO_ADD_CARDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description ID or shortLink of the Trello card to add the comment to.
   */
  idCard?: string;
  /**
   * Text
   * @description Comment text, between 1 and 16384 characters. Supports @mentions to notify Trello users.
   */
  text?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description Response from the Trello API, usually including details of the new comment like its ID, text, date, and creator.
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
 * Type of TRELLO's TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD_INPUT = {
  /**
   * File
   * @description Path to the local file to attach if not linking a `url`.
   */
  file?: string;
  /**
   * Id Card
   * @description ID or shortLink of the Trello card.
   */
  idCard?: string;
  /**
   * Mime Type
   * @description MIME type of the attachment, aiding Trello in file handling. Max length 256.
   */
  mimeType?: string;
  /**
   * Name
   * @description Desired name for the attachment. If omitted, Trello uses the original filename or a URL-derived default. Max length 256.
   */
  name?: string;
  /**
   * Url
   * @description URL of an external resource to attach if not uploading a `file`. Must start with 'http://' or 'https://'.
   */
  url?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the card to which the checklist will be added.
   */
  idCard?: string;
  /**
   * Id Checklist Source
   * @description The ID of an existing checklist to copy. If provided (and `value` is not an ID of an existing checklist to add), a new checklist is created on the card by duplicating this source checklist. The `name` parameter can be used to specify a name for the newly created checklist.
   */
  idChecklistSource?: string;
  /**
   * Name
   * @description The name for the new checklist. Used when creating a new checklist from scratch or when copying from `idChecklistSource`. If `value` specifies an existing checklist ID to add, this `name` is ignored. String with a length from 0 to 16384 characters.
   */
  name?: string;
  /**
   * Value
   * @description The ID of a pre-existing checklist to add directly to the card. If an ID is provided here, that specific checklist is added. If `null` or omitted, a new checklist will be created on the card (either empty using `name`, or by copying from `idChecklistSource`).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the Trello checklist object that was added or created on the card. The structure of this dictionary includes details such as the checklist's ID, name, items, and position.
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
 * Type of TRELLO's TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST tool input.
 */
type TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card where the checklist resides.
   */
  idCard?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist to which the new check item will be added.
   */
  idChecklist?: string;
  /**
   * Name
   * @description The name of the check item to be created. Must be a string with a length between 1 and 16384 characters.
   */
  name?: string;
  /**
   * Pos
   * @description The position of the new check item within the checklist. Valid values are 'top', 'bottom', or a positive number (e.g., '1', '2.5').
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST tool output.
 */
type TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created check item, conforming to Trello's check item object model.
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
 * Type of TRELLO's TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card. Card IDs are typically 24-character hexadecimal strings.
   */
  idCard?: string;
  /**
   * Value
   * @description The ID of the label to add. Label IDs are typically 24-character hexadecimal strings.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Trello API's JSON response. If successful, this typically includes the updated list of all label objects on the card. Consult Trello's API documentation for the exact structure of the response for the 'Card_addIdLabelsToCard' operation.
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
 * Type of TRELLO's TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the Trello card to which the member will be added.
   */
  idCard?: string;
  /**
   * Value
   * @description The ID of the Trello member to be added to the card.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the card after the member has been successfully added.
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
 * Type of TRELLO's TRELLO_ADD_CARDS_LABELS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_LABELS_BY_ID_CARD_INPUT = {
  /**
   * Color
   * @description Label color name (e.g., 'green', 'yellow', 'null'). Used if 'value' is not provided. If 'name' matches an existing label, its color can be updated by this field.
   */
  color?: string;
  /**
   * Id Card
   * @description ID or shortlink of the card.
   */
  idCard?: string;
  /**
   * Name
   * @description Name for the label (0-16384 chars). If omitted, color name may be used. If a label with this name exists on the board, it's used; otherwise, a new label with this name and specified color is created.
   */
  name?: string;
  /**
   * Value
   * @description Alternative way to specify the label's color by name (e.g., 'yellow', 'green,purple', 'all'); consult Trello for interpretation of lists or 'all'. Overrides 'color' parameter if both are provided.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_LABELS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_LABELS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description Trello API response, typically detailing the card's labels after the operation or the specific label added/created.
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
 * Type of TRELLO's TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card to add the vote to. For example, `FY2OWrnc` or `571d07b591c8b68aeb4f6acc`.
   */
  idCard?: string;
  /**
   * Value
   * @description The ID of the member to cast a 'yes' vote on the card. For example, `600f0c000000000000000000`.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD tool input.
 */
type TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description ID or short link of the card.
   */
  idCard?: string;
  /**
   * Image
   * @description Name of a default Trello sticker (e.g., 'taco-cool'), ID of a previously uploaded custom sticker. Length: 0-16384 chars. Uses default if omitted.
   */
  image?: string;
  /**
   * Left
   * @description Horizontal offset from card's left edge (pixels). Uses default position if omitted.
   */
  left?: string;
  /**
   * Rotate
   * @description Rotation angle in degrees; positive rotates clockwise. Defaults to 0 if omitted.
   */
  rotate?: string;
  /**
   * Top
   * @description Vertical offset from card's top edge (pixels). Uses default position if omitted.
   */
  top?: string;
  /**
   * Z Index
   * @description Stacking order (z-index); higher values are on top. Must be an integer. Trello assigns a default layer if omitted.
   */
  zIndex?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD tool output.
 */
type TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_CHECKLISTS tool input.
 */
type TRELLO_ADD_CHECKLISTS_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board. If `idCard` is not specified, this board will be targeted, potentially for creating a new card to host the checklist. One of `idBoard` or `idCard` is required.
   */
  idBoard?: string;
  /**
   * Id Card
   * @description The ID of the Trello card to which the checklist will be added. If provided, the checklist is added to this specific card. One of `idBoard` or `idCard` is required.
   */
  idCard?: string;
  /**
   * Id Checklist Source
   * @description The ID of an existing checklist to be copied. If provided, the `name` parameter is ignored, and the new checklist will be a duplicate of this source.
   */
  idChecklistSource?: string;
  /**
   * Name
   * @description The name for the new checklist. Required if `idChecklistSource` is not provided. Must be a string with length between 0 and 16384 characters.
   */
  name?: string;
  /**
   * Pos
   * @description The position of the new checklist on its card. Accepted values are 'top', 'bottom', or a positive number (integer or float).
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CHECKLISTS tool output.
 */
type TRELLO_ADD_CHECKLISTS_OUTPUT = {
  /**
   * Data
   * @description Full JSON response from the Trello API for the newly created checklist.
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
 * Type of TRELLO's TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Checked
   * @description Initial completion status: 'true' or 'false'. Defaults to unchecked.
   */
  checked?: string;
  /**
   * Id Checklist
   * @description ID of the checklist to add the new check item to.
   */
  idChecklist?: string;
  /**
   * Name
   * @description Name for the new check item (1-16384 characters).
   */
  name?: string;
  /**
   * Pos
   * @description Position for the new check item: 'top', 'bottom', or a positive number. Defaults to bottom.
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description Full JSON response from Trello, including details of the newly created check item.
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
 * Type of TRELLO's TRELLO_ADD_LABELS tool input.
 */
type TRELLO_ADD_LABELS_INPUT = {
  /**
   * Color
   * @description Color for the new label. Trello may assign a default color if unspecified or invalid.
   */
  color?: string;
  /**
   * Id Board
   * @description ID of the board for the new label. **Required by the Trello API.** The board must exist and be accessible.
   */
  idBoard?: string;
  /**
   * Name
   * @description Name for the new label (0-16384 characters). **Required by the Trello API.** An empty string creates a color-only visual label.
   */
  name?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_LABELS tool output.
 */
type TRELLO_ADD_LABELS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the newly created label, including its ID, name, color, and board ID.
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
 * Type of TRELLO's TRELLO_ADD_LISTS tool input.
 */
type TRELLO_ADD_LISTS_INPUT = {
  /**
   * Closed
   * @description Indicates whether the list should be created as closed (archived). Set to `true` for closed, or `false` for open.
   */
  closed?: string;
  /**
   * Id Board
   * @description The ID of the board to which the new list should be added. This is a required parameter.
   */
  idBoard?: string;
  /**
   * Id List Source
   * @description The ID of an existing list to copy when creating the new list. If provided, the new list will be a copy of this source list.
   */
  idListSource?: string;
  /**
   * Name
   * @description The name for the new list. Must be a string with a length from 1 to 16384 characters. This is a required parameter.
   */
  name?: string;
  /**
   * Pos
   * @description The position of the new list on the board. Valid values are `top`, `bottom`, or a positive number (e.g., '1', '2.5').
   */
  pos?: string;
  /**
   * Subscribed
   * @description Indicates whether the user creating the list should be automatically subscribed to it. Set to `true` to subscribe, or `false` otherwise.
   */
  subscribed?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_LISTS tool output.
 */
type TRELLO_ADD_LISTS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created list.
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
 * Type of TRELLO's TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST tool input.
 */
type TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST_INPUT = {
  /**
   * Id List
   * @description The unique identifier of the Trello list from which all cards will be archived.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST tool output.
 */
type TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_LISTS_CARDS_BY_ID_LIST tool input.
 */
type TRELLO_ADD_LISTS_CARDS_BY_ID_LIST_INPUT = {
  /**
   * Desc
   * @description The description for the new card. A string with a length from 0 to 16384 characters.
   */
  desc?: string;
  /**
   * Due
   * @description The due date for the new card, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SS.SSSZ') or null if no due date is set.
   */
  due?: string;
  /**
   * Id List
   * @description The ID of the Trello list where the new card will be created.
   */
  idList?: string;
  /**
   * Id Members
   * @description A comma-separated list of member IDs (24-character hex strings) to assign to the new card.
   */
  idMembers?: string;
  /**
   * Labels
   * @description A comma-separated list of label colors to apply to the card. Valid colors: blue, green, orange, purple, red, yellow. Alternatively, 'all' can be used to apply all available label colors on the board.
   */
  labels?: string;
  /**
   * Name
   * @description The name for the new card. A string with a length from 1 to 16384 characters. While optional, providing a name is highly recommended.
   */
  name?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_LISTS_CARDS_BY_ID_LIST tool output.
 */
type TRELLO_ADD_LISTS_CARDS_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created card, as returned by the Trello API.
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
 * Type of TRELLO's TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST tool input.
 */
type TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST_INPUT = {
  /**
   * Id Board
   * @description The ID of the destination Trello board to which all cards from the source list will be moved. This parameter is required by Trello for this operation.
   */
  idBoard?: string;
  /**
   * Id List
   * @description The ID of the source Trello list from which all cards will be moved.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST tool output.
 */
type TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER_INPUT = {
  /**
   * File
   * @description Base64-encoded string of the new avatar image (e.g., PNG, JPEG). Although schema-optional, a valid image string is required for successful avatar update.
   */
  file?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description API response from Trello, typically confirming the avatar update and providing new avatar details on success.
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
 * Type of TRELLO's TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT = {
  /**
   * Brightness
   * @description Specifies the brightness of the background. Valid values are 'dark', 'light', or 'unknown'.
   */
  brightness?: string;
  /**
   * File
   * @description The image file to be uploaded for the board background. This is typically a file path or a URL accessible by the system performing the upload.
   */
  file?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Tile
   * @description Determines whether the background image should be tiled. Set to 'true' to tile the image or 'false' to display it as a single image.
   */
  tile?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board to be starred. The board must exist and be accessible to the specified member.
   */
  idBoard?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member for whom the board star will be added.
   */
  idMember?: string;
  /**
   * Pos
   * @description The desired position for the new board star in the member's list of starred boards. Valid values are 'top', 'bottom', or a positive integer.
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created board star.
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
 * Type of TRELLO's TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT = {
  /**
   * Brightness
   * @description Specifies the brightness setting for the custom board background. Accepted values are 'dark', 'light', or 'unknown'.
   */
  brightness?: string;
  /**
   * File
   * @description Base64 encoded image data for the custom board background.
   */
  file?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member for whom the custom board background will be added.
   */
  idMember?: string;
  /**
   * Tile
   * @description Indicates whether the custom board background image should be tiled. Set to 'true' to enable tiling, or 'false' to disable it.
   */
  tile?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The API response data, typically including details of the created custom board background.
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
 * Type of TRELLO's TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_INPUT = {
  /**
   * File
   * @description Emoji image file to upload. Must adhere to Trello's image format and size guidelines. Sent as multipart/form-data.
   */
  file?: string;
  /**
   * Id Member
   * @description ID or username of the member.
   */
  idMember?: string;
  /**
   * Name
   * @description Unique name for the custom emoji (2-64 characters).
   */
  name?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description API response from Trello: new custom emoji details on success, or error information on failure.
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
 * Type of TRELLO's TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_INPUT = {
  /**
   * File
   * @description The sticker file to upload. Trello recommends images to be 128x128 pixels for optimal display. Ensure the file format is supported by Trello (e.g., PNG, JPG).
   */
  file?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member to whom the custom sticker will be added. The member must exist.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The response data containing details of the uploaded custom sticker.
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
 * Type of TRELLO's TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER tool input.
 */
type TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member for whom the saved search will be created.
   */
  idMember?: string;
  /**
   * Name
   * @description The name for the saved search. Must be a non-empty string with at least one non-space character.
   */
  name?: string;
  /**
   * Pos
   * @description The position of the saved search in the member's list of saved searches. Can be 'top', 'bottom', or a positive numerical value.
   */
  pos?: string;
  /**
   * Query
   * @description The search query string to be saved. The string must have a length between 1 and 16384 characters.
   */
  query?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER tool output.
 */
type TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created saved search, such as its ID, name, query, and position.
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
 * Type of TRELLO's TRELLO_ADD_NOTIFICATIONS_ALL_READ tool input.
 */
type TRELLO_ADD_NOTIFICATIONS_ALL_READ_INPUT = object;

/**
 * Type of TRELLO's TRELLO_ADD_NOTIFICATIONS_ALL_READ tool output.
 */
type TRELLO_ADD_NOTIFICATIONS_ALL_READ_OUTPUT = {
  /**
   * Data
   * @description Provides confirmation that all notifications have been successfully marked as read.
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
 * Type of TRELLO's TRELLO_ADD_ORGANIZATIONS tool input.
 */
type TRELLO_ADD_ORGANIZATIONS_INPUT = {
  /**
   * Desc
   * @description The description for the organization. Max length: 16384 characters.
   */
  desc?: string;
  /**
   * Display Name
   * @description The human-readable name for the organization. Min length: 1 character. Cannot begin or end with a space. This field is required.
   */
  displayName?: string;
  /**
   * Name
   * @description The unique, URL-friendly programmatic name for the organization. Must be lowercase, start with a letter, and contain only lowercase letters, numbers, and underscores. Max length: 16384 characters. If not provided, Trello will generate one based on the displayName.
   */
  name?: string;
  /**
   * Prefs  Associated Domain
   * @description The Google Workspace (formerly G Suite) domain to associate with the organization. This enables features like restricting membership to users from this domain.
   */
  prefs__associatedDomain?: string;
  /**
   * Prefs  Board Visibility Restrict  Org
   * @description Controls creation of organization-visible boards. Allowed values: 'admin' (only admins can create), 'none' (cannot be created), 'org' (any member can create).
   */
  prefs__boardVisibilityRestrict__org?: string;
  /**
   * Prefs  Board Visibility Restrict  Private
   * @description Controls creation of private boards. Allowed values: 'admin' (only admins can create), 'none' (cannot be created), 'org' (any member can create).
   */
  prefs__boardVisibilityRestrict__private?: string;
  /**
   * Prefs  Board Visibility Restrict  Public
   * @description Controls creation of public boards. Allowed values: 'admin' (only admins can create), 'none' (cannot be created), 'org' (any member can create).
   */
  prefs__boardVisibilityRestrict__public?: string;
  /**
   * Prefs  External Members Disabled
   * @description Determines if external members (guests) are disabled for the organization. Set to 'true' to disable, 'false' to enable.
   */
  prefs__externalMembersDisabled?: string;
  /**
   * Prefs  Google Apps Version
   * @description The version of Google Workspace integration. Allowed values: '1' or '2'.
   */
  prefs__googleAppsVersion?: string;
  /**
   * Prefs  Org Invite Restrict
   * @description Specifies restrictions on who can be invited to the organization, e.g., a comma-separated list of email domains ('@example.com,@mycompany.com') or specific email addresses. If not set, any Trello user can be invited.
   */
  prefs__orgInviteRestrict?: string;
  /**
   * Prefs  Permission Level
   * @description The default permission level for new boards created within the organization. Allowed values: 'private' or 'public'.
   */
  prefs__permissionLevel?: string;
  /**
   * Website
   * @description The URL of the organization's website. Must start with 'http://' or 'https://'. Can be null or an empty string if no website.
   */
  website?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_ORGANIZATIONS tool output.
 */
type TRELLO_ADD_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created organization.
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
 * Type of TRELLO's TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG tool input.
 */
type TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG_INPUT = {
  /**
   * File
   * @description Base64 encoded logo image. Behavior is API-dependent if omitted.
   */
  file?: string;
  /**
   * Id Org
   * @description ID or unique name of the Trello organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG tool output.
 */
type TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_ADD_SESSIONS tool input.
 */
type TRELLO_ADD_SESSIONS_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board to associate with this session for status updates.
   */
  idBoard?: string;
  /**
   * Status
   * @description Sets the user's current activity status for the session.
   */
  status?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_SESSIONS tool output.
 */
type TRELLO_ADD_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Response data from the session creation or update operation.
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
 * Type of TRELLO's TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN tool input.
 */
type TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN_INPUT = {
  /**
   * Callback Url
   * @description Publicly accessible URL for Trello to send POST notifications; must respond to an initial HEAD request for validation.
   */
  callbackURL?: string;
  /**
   * Description
   * @description Descriptive name for the webhook (0-16384 characters).
   */
  description?: string;
  /**
   * Id Model
   * @description ID of the Trello model (e.g., board, list, card, member) to monitor.
   */
  idModel?: string;
};

/**
 * Type of TRELLO's TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN tool output.
 */
type TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Full details of the created webhook, including its ID, description, callbackURL, and idModel.
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
 * Type of TRELLO's TRELLO_BOARD_CREATE_BOARD tool input.
 */
type TRELLO_BOARD_CREATE_BOARD_INPUT = {
  /**
   * Closed
   * @description Whether the board should be immediately archived (closed).
   */
  closed?: string;
  /**
   * Desc
   * @description Description for the Trello board (0-16384 characters).
   */
  desc?: string;
  /**
   * Id Board Source
   * @description ID of an existing Trello board to use as a template.
   */
  idBoardSource?: string;
  /**
   * Id Organization
   * @description ID or name of the Trello Workspace (formerly Organization) for this board.
   */
  idOrganization?: string;
  /**
   * Keep From Source
   * @description Components to copy if 'idBoardSource' is used (e.g., 'cards,labels', 'all'; valid: 'cards', 'lists', 'checklists', 'stickers', 'members', 'customFields', 'prefs', 'labels').
   */
  keepFromSource?: string;
  /**
   * Label Names  Blue
   * @description Name for the blue label (0-16384 characters); corresponds to API parameter 'labelNames/blue'.
   */
  labelNames__blue?: string;
  /**
   * Label Names  Green
   * @description Name for the green label (0-16384 characters); corresponds to API parameter 'labelNames/green'.
   */
  labelNames__green?: string;
  /**
   * Label Names  Orange
   * @description Name for the orange label (0-16384 characters); corresponds to API parameter 'labelNames/orange'.
   */
  labelNames__orange?: string;
  /**
   * Label Names  Purple
   * @description Name for the purple label (0-16384 characters); corresponds to API parameter 'labelNames/purple'.
   */
  labelNames__purple?: string;
  /**
   * Label Names  Red
   * @description Name for the red label (0-16384 characters); corresponds to API parameter 'labelNames/red'.
   */
  labelNames__red?: string;
  /**
   * Label Names  Yellow
   * @description Name for the yellow label (0-16384 characters); corresponds to API parameter 'labelNames/yellow'.
   */
  labelNames__yellow?: string;
  /**
   * Name
   * @description Name for the new Trello board (1-16384 characters). This field is required for board creation.
   */
  name?: string;
  /**
   * Power Ups
   * @description Power-Ups to enable (e.g., 'calendar,voting', 'all'; valid: 'calendar', 'cardAging', 'recap', 'voting').
   */
  powerUps?: string;
  /**
   * Prefs  Background
   * @description Board background (standard name like 'blue', 'pink', or custom ID); corresponds to API parameter 'prefs/background'.
   */
  prefs__background?: string;
  /**
   * Prefs  Calendar Feed Enabled
   * @description Whether the calendar feed is enabled; corresponds to API parameter 'prefs/calendarFeedEnabled'.
   */
  prefs__calendarFeedEnabled?: string;
  /**
   * Prefs  Card Aging
   * @description Card aging style ('pirate' or 'regular'); corresponds to API parameter 'prefs/cardAging'.
   */
  prefs__cardAging?: string;
  /**
   * Prefs  Card Covers
   * @description Whether card covers are shown; corresponds to API parameter 'prefs/cardCovers'.
   */
  prefs__cardCovers?: string;
  /**
   * Prefs  Comments
   * @description Who can comment on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs/comments'.
   */
  prefs__comments?: string;
  /**
   * Prefs  Invitations
   * @description Who can invite to the board ('admins' or 'members'); corresponds to API parameter 'prefs/invitations'.
   */
  prefs__invitations?: string;
  /**
   * Prefs  Permission Level
   * @description Board visibility and permission level ('org', 'private', 'public'); corresponds to API parameter 'prefs/permissionLevel'.
   */
  prefs__permissionLevel?: string;
  /**
   * Prefs  Self Join
   * @description Whether Workspace members can join the board themselves; corresponds to API parameter 'prefs/selfJoin'.
   */
  prefs__selfJoin?: string;
  /**
   * Prefs  Voting
   * @description Who can vote on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs/voting'.
   */
  prefs__voting?: string;
  /**
   * Prefs Background
   * @description Board background (standard name, custom ID, or hex code; 0-16384 characters); corresponds to API parameter 'prefs_background'.
   */
  prefs_background?: string;
  /**
   * Prefs Card Aging
   * @description Card aging style ('pirate' or 'regular'); corresponds to API parameter 'prefs_cardAging'.
   */
  prefs_cardAging?: string;
  /**
   * Prefs Card Covers
   * @description Whether card covers are shown; corresponds to API parameter 'prefs_cardCovers'.
   */
  prefs_cardCovers?: string;
  /**
   * Prefs Comments
   * @description Who can comment on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs_comments'.
   */
  prefs_comments?: string;
  /**
   * Prefs Invitations
   * @description Who can invite to the board ('admins' or 'members'); corresponds to API parameter 'prefs_invitations'.
   */
  prefs_invitations?: string;
  /**
   * Prefs Permission Level
   * @description Board visibility and permission level ('org', 'private', 'public'); corresponds to API parameter 'prefs_permissionLevel'.
   */
  prefs_permissionLevel?: string;
  /**
   * Prefs Self Join
   * @description Whether Workspace members can join the board themselves; corresponds to API parameter 'prefs_selfJoin'.
   */
  prefs_selfJoin?: string;
  /**
   * Prefs Voting
   * @description Who can vote on cards ('disabled', 'members', 'observers', 'org', 'public'); corresponds to API parameter 'prefs_voting'.
   */
  prefs_voting?: string;
  /**
   * Subscribed
   * @description Whether the creator is automatically subscribed to the board.
   */
  subscribed?: string;
};

/**
 * Type of TRELLO's TRELLO_BOARD_CREATE_BOARD tool output.
 */
type TRELLO_BOARD_CREATE_BOARD_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created Trello board.
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
 * Type of TRELLO's TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD tool input.
 */
type TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD_INPUT = {
  /**
   * Filter
   * @description Filter for retrieving cards. Valid values: 'all', 'closed', 'none', 'open', 'visible'.
   */
  filter?: string;
  /**
   * Id Board
   * @description Unique identifier of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD tool output.
 */
type TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description API response containing a list of card objects from the board matching the filter.
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
 * Type of TRELLO's TRELLO_BOARD_GET_BY_ID tool input.
 */
type TRELLO_BOARD_GET_BY_ID_INPUT = {
  /**
   * Action Fields
   * @description Specifies the fields to return for action objects. Use 'all' or a comma-separated list of fields: data, date, idMemberCreator, type.
   * @default all
   */
  action_fields: string;
  /**
   * Action Member
   * @description Determines whether to include the member object within actions. Set to 'true' or 'false'.
   */
  action_member?: string;
  /**
   * Action Member Creator
   * @description Determines whether to include the member creator object within actions. Set to 'true' or 'false'.
   */
  action_memberCreator?: string;
  /**
   * Action Member Creator Fields
   * @description Specifies the fields to return for member creator objects within actions. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  action_memberCreator_fields: string;
  /**
   * Action Member Fields
   * @description Specifies the fields to return for member objects within actions. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  action_member_fields: string;
  /**
   * Actions
   * @description Filters the actions to be returned. Specify 'all' or provide a comma-separated list of action types. Valid types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   */
  actions?: string;
  /**
   * Actions Display
   * @description Determines whether to return display objects for actions. Set to 'true' or 'false'.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Determines whether to return entity objects for actions. Set to 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Format
   * @description Specifies the format for returned actions. Valid values: 'count', 'list', or 'minimal'.
   * @default list
   */
  actions_format: string;
  /**
   * Actions Limit
   * @description The maximum number of actions to return, ranging from 0 to 1000.
   * @default 50
   */
  actions_limit: string;
  /**
   * Actions Since
   * @description Filters actions to those that occurred after a specific date (ISO 8601 format), or 'lastView'. Use null for no date filtering.
   */
  actions_since?: string;
  /**
   * Board Stars
   * @description Filters board stars. Valid values: 'mine' (stars by the current user) or 'none'.
   * @default none
   */
  boardStars: string;
  /**
   * Card Attachment Fields
   * @description Specifies the fields to return for card attachment objects. Use 'all' or a comma-separated list. Valid fields: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url.
   * @default all
   */
  card_attachment_fields: string;
  /**
   * Card Attachments
   * @description Determines whether to include card attachments. Set to 'true', 'false', or 'cover' (for only card cover attachments).
   */
  card_attachments?: string;
  /**
   * Card Checklists
   * @description Filters the checklists on cards to be returned. Valid values: 'all' or 'none'.
   * @default none
   */
  card_checklists: string;
  /**
   * Card Fields
   * @description Specifies the fields to return for card objects. Use 'all' or a comma-separated list. Valid fields: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url.
   * @default all
   */
  card_fields: string;
  /**
   * Card Stickers
   * @description Determines whether to include stickers on cards. Set to 'true' or 'false'.
   */
  card_stickers?: string;
  /**
   * Cards
   * @description Filters the cards to be returned. Valid values: 'all', 'closed', 'none', 'open', or 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Checklist Fields
   * @description Specifies fields for board-level checklist objects. Use 'all' or a comma-separated list: idBoard, idCard, name, pos.
   * @default all
   */
  checklist_fields: string;
  /**
   * Checklists
   * @description Filters board-level checklists to be returned. Valid values: 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Specifies the fields to return for the board object itself. Use 'all' or a comma-separated list. Valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames
   */
  fields: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Label Fields
   * @description Specifies the fields to return for label objects. Use 'all' or a comma-separated list: color, idBoard, name, uses.
   * @default all
   */
  label_fields: string;
  /**
   * Labels
   * @description Filters the labels to be returned. Valid values: 'all' or 'none'.
   * @default none
   */
  labels: string;
  /**
   * Labels Limit
   * @description The maximum number of labels to return, ranging from 0 to 1000.
   * @default 50
   */
  labels_limit: string;
  /**
   * List Fields
   * @description Specifies the fields to return for list objects. Use 'all' or a comma-separated list: closed, idBoard, name, pos, subscribed.
   * @default all
   */
  list_fields: string;
  /**
   * Lists
   * @description Filters the lists on the board to be returned. Valid values: 'all', 'closed', 'none', or 'open'.
   * @default none
   */
  lists: string;
  /**
   * Member Fields
   * @description Specifies fields for member objects. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, initials, fullName, username and confirmed
   */
  member_fields: string;
  /**
   * Members
   * @description Filters the members of the board to be returned. Valid values: 'admins', 'all', 'none', 'normal', or 'owners'.
   * @default none
   */
  members: string;
  /**
   * Members Invited
   * @description Filters invited members of the board. Valid values: 'admins', 'all', 'none', 'normal', or 'owners'.
   * @default none
   */
  membersInvited: string;
  /**
   * Members Invited Fields
   * @description Specifies fields for invited member objects. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, initials, fullName and username
   */
  membersInvited_fields: string;
  /**
   * Memberships
   * @description Filters board memberships to return. Use 'all' or a comma-separated list of types: active, admin, deactivated, me, normal.
   * @default none
   */
  memberships: string;
  /**
   * Memberships Member
   * @description Determines whether to include member objects within memberships. Set to 'true' or 'false'.
   */
  memberships_member?: string;
  /**
   * Memberships Member Fields
   * @description Specifies fields for member objects within memberships. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default fullName and username
   */
  memberships_member_fields: string;
  /**
   * My Prefs
   * @description Determines whether to include the current user's preferences for this board. Set to 'true' or 'false'.
   */
  myPrefs?: string;
  /**
   * Organization
   * @description Determines whether to include the organization object to which the board belongs. Set to 'true' or 'false'.
   */
  organization?: string;
  /**
   * Organization Fields
   * @description Specifies fields for the organization object. Use 'all' or a comma-separated list. Valid fields: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website.
   * @default name and displayName
   */
  organization_fields: string;
  /**
   * Organization Memberships
   * @description Filters organization memberships to return. Use 'all' or a comma-separated list: active, admin, deactivated, me, normal.
   * @default none
   */
  organization_memberships: string;
};

/**
 * Type of TRELLO's TRELLO_BOARD_GET_BY_ID tool output.
 */
type TRELLO_BOARD_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the comprehensive details of the retrieved Trello board.
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
 * Type of TRELLO's TRELLO_BOARD_GET_CARDS_BY_ID_BOARD tool input.
 */
type TRELLO_BOARD_GET_CARDS_BY_ID_BOARD_INPUT = {
  /**
   * Actions
   * @description A comma-separated list of action types to be returned. Use 'all' to include all action types. Valid action types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description A comma-separated list of attachment fields to be returned. Use 'all' to include all fields. Valid fields include: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, or url.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Determines whether attachments should be returned. Can be 'true', 'false', or 'cover' (to return only card cover attachments).
   */
  attachments?: string;
  /**
   * Before
   * @description A date in ISO 8601 format. Only cards updated before this date will be returned. Use 'null' for no restriction.
   */
  before?: string;
  /**
   * Check Item States
   * @description Determines whether check item states should be returned. Valid values are 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Determines which checklists to return. Valid values are 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description A comma-separated list of card fields to be returned. Use 'all' to include all fields. Valid fields include: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the cards to return. Valid values are 'all', 'closed', 'none', 'open', or 'visible'.
   * @default visible
   */
  filter: string;
  /**
   * Id Board
   * @description The ID of the Trello board from which to retrieve cards.
   */
  idBoard?: string;
  /**
   * Limit
   * @description The maximum number of cards to return. Must be a number between 1 and 1000, inclusive.
   */
  limit?: string;
  /**
   * Member Fields
   * @description A comma-separated list of member fields to be returned. Use 'all' to include all fields. Valid fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Determines whether members should be returned. Valid values are 'true' or 'false'.
   */
  members?: string;
  /**
   * Since
   * @description A date in ISO 8601 format. Only cards updated after this date will be returned. Use 'null' for no restriction.
   */
  since?: string;
  /**
   * Stickers
   * @description Determines whether stickers should be returned. Valid values are 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_BOARD_GET_CARDS_BY_ID_BOARD tool output.
 */
type TRELLO_BOARD_GET_CARDS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A list of card objects, each containing details according to the specified 'fields' parameter. The structure of each card object depends on the fields requested.
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
 * Type of TRELLO's TRELLO_BOARD_GET_LISTS_BY_ID_BOARD tool input.
 */
type TRELLO_BOARD_GET_LISTS_BY_ID_BOARD_INPUT = {
  /**
   * Card Fields
   * @description Specifies the fields of cards to be returned if the 'cards' parameter is not 'none'. Use 'all' for all fields, or provide a comma-separated list of specific fields. Valid fields include: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url.
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Determines which cards should be returned within the lists. Valid values are 'all', 'closed', 'none', 'open', or 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Fields
   * @description Specifies the fields of the lists to be returned. Use 'all' for all fields, or provide a comma-separated list of specific fields. Valid fields include: closed, idBoard, name, pos, or subscribed.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the lists to be returned based on their status. Valid values are 'all', 'closed', 'none', or 'open'.
   * @default open
   */
  filter: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board from which to retrieve lists.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_BOARD_GET_LISTS_BY_ID_BOARD tool output.
 */
type TRELLO_BOARD_GET_LISTS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_CARD_CREATE_AND_UPDATE tool input.
 */
type TRELLO_CARD_CREATE_AND_UPDATE_INPUT = {
  /**
   * Closed
   * @description Archive (close) the card. Valid values: 'true', 'false'.
   */
  closed?: string;
  /**
   * Desc
   * @description Card description (0-16384 characters).
   */
  desc?: string;
  /**
   * Due
   * @description Due date for the card (date string or 'null' to remove).
   */
  due?: string;
  /**
   * File Source
   * @description Binary data of a file to attach.
   */
  fileSource?: string;
  /**
   * Id Attachment Cover
   * @description ID of an image attachment on this card for its cover, or 'null' for no cover.
   */
  idAttachmentCover?: string;
  /**
   * Id Board
   * @description ID of the board to move the card to; if specified, `idList` must be on this board.
   */
  idBoard?: string;
  /**
   * Id Card Source
   * @description ID of an existing card to copy.
   */
  idCardSource?: string;
  /**
   * Id Labels
   * @description Comma-separated list of label IDs (24-char hex) to add.
   */
  idLabels?: string;
  /**
   * Id List
   * @description Required ID of the list to add the card to.
   */
  idList?: string;
  /**
   * Id Members
   * @description Comma-separated list of member IDs (24-char hex) to assign.
   */
  idMembers?: string;
  /**
   * Keep From Source
   * @description If using `idCardSource`, properties to copy: 'all' or comma-separated (e.g., 'attachments', 'checklists', 'due').
   */
  keepFromSource?: string;
  /**
   * Labels
   * @description Comma-separated label colors (e.g., 'blue', 'green') or 'all' for default labels.
   */
  labels?: string;
  /**
   * Name
   * @description Name for the new card; required unless `idCardSource` or `urlSource` is used.
   */
  name?: string;
  /**
   * Pos
   * @description Position in list: 'top', 'bottom', or a positive float.
   */
  pos?: string;
  /**
   * Subscribed
   * @description Subscribe user to the card. Valid values: 'true', 'false'.
   */
  subscribed?: string;
  /**
   * Url Source
   * @description URL (http:// or https://) to attach; if a Trello card URL, copies that card. Use 'null' if not needed.
   */
  urlSource?: string;
};

/**
 * Type of TRELLO's TRELLO_CARD_CREATE_AND_UPDATE tool output.
 */
type TRELLO_CARD_CREATE_AND_UPDATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_CARD_GET_BY_ID tool input.
 */
type TRELLO_CARD_GET_BY_ID_INPUT = {
  /**
   * Action Fields
   * @description Fields for actions: 'all' or comma-separated (e.g., 'data,date'). Valid: data, date, idMemberCreator, type.
   * @default all
   */
  action_fields: string;
  /**
   * Action Member Creator Fields
   * @description Fields for the action creator: 'all' or comma-separated (e.g., 'avatarHash,fullName'). Valid: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  action_memberCreator_fields: string;
  /**
   * Actions
   * @description Actions to return: 'all' or a comma-separated list of types (e.g., 'addAttachmentToCard', 'commentCard', 'updateCard'). For a complete list of types, consult the Trello API documentation.
   */
  actions?: string;
  /**
   * Actions Display
   * @description Return display-friendly action data. Use 'true' or 'false'.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Include entities (e.g., card, board, member) for actions. Use 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Limit
   * @description Maximum actions to return (0-1000).
   * @default 50
   */
  actions_limit: string;
  /**
   * Attachment Fields
   * @description Fields for attachments: 'all' or comma-separated (e.g., 'bytes,date'). Valid: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Include attachments: 'true' (all), 'false' (none), or 'cover' (card cover only).
   */
  attachments?: string;
  /**
   * Board
   * @description Include data for the card's board. Use 'true' or 'false'.
   */
  board?: string;
  /**
   * Board Fields
   * @description Fields for the board: 'all' or comma-separated (e.g., 'name,desc'). Valid: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default name, desc, descData, closed, idOrganization, pinned, url and prefs
   */
  board_fields: string;
  /**
   * Check Item State Fields
   * @description Fields for check item states: 'all' or comma-separated (e.g., 'idCheckItem,state'). Valid: idCheckItem, state.
   * @default all
   */
  checkItemState_fields: string;
  /**
   * Check Item States
   * @description Include check item states. Use 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklist Fields
   * @description Fields for checklists: 'all' or comma-separated (e.g., 'idBoard,name'). Valid: idBoard, idCard, name, pos.
   * @default all
   */
  checklist_fields: string;
  /**
   * Checklists
   * @description Include checklists: 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Fields for the card: 'all' or comma-separated (e.g., 'name,desc'). Valid: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url.
   * @default badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url
   */
  fields: string;
  /**
   * Id Card
   * @description The unique identifier (ID) or short link of the Trello card.
   */
  idCard?: string;
  /**
   * List
   * @description Include data for the card's list. Use 'true' or 'false'.
   */
  list?: string;
  /**
   * List Fields
   * @description Fields for the list: 'all' or comma-separated (e.g., 'name,pos'). Valid: closed, idBoard, name, pos, subscribed.
   * @default all
   */
  list_fields: string;
  /**
   * Member Voted Fields
   * @description Fields for members who voted: 'all' or comma-separated (e.g., 'avatarHash,fullName'). Valid: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  memberVoted_fields: string;
  /**
   * Member Fields
   * @description Fields for members: 'all' or comma-separated (e.g., 'avatarHash,fullName'). Valid: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Include member data. Use 'true' or 'false'.
   */
  members?: string;
  /**
   * Members Voted
   * @description Include data for members who voted. Use 'true' or 'false'.
   */
  membersVoted?: string;
  /**
   * Sticker Fields
   * @description Fields for stickers: 'all' or comma-separated (e.g., 'image,left'). Valid: image, imageScaled, imageUrl, left, rotate, top, zIndex.
   * @default all
   */
  sticker_fields: string;
  /**
   * Stickers
   * @description Include sticker data. Use 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_CARD_GET_BY_ID tool output.
 */
type TRELLO_CARD_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the retrieved Trello card.
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
 * Type of TRELLO's TRELLO_CARD_GET_BY_ID_FIELD tool input.
 */
type TRELLO_CARD_GET_BY_ID_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the card. Valid values include standard card fields like 'name', 'desc', 'due', 'closed', 'idBoard', 'idList', 'pos', 'shortUrl', 'url', 'subscribed', as well as custom fields.
   */
  field?: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_CARD_GET_BY_ID_FIELD tool output.
 */
type TRELLO_CARD_GET_BY_ID_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_CARD_UPDATE_BY_ID_CARD tool input.
 */
type TRELLO_CARD_UPDATE_BY_ID_CARD_INPUT = {
  /**
   * Closed
   * @description Determines whether the card should be archived (closed). Set to 'true' to archive, 'false' to unarchive.
   */
  closed?: string;
  /**
   * Desc
   * @description The new description for the card. String length must be from 0 to 16384 characters.
   */
  desc?: string;
  /**
   * Due
   * @description The new due date for the card, in ISO 8601 format, or 'null' to remove the due date.
   */
  due?: string;
  /**
   * File Source
   * @description The URL of a file to be attached to the card. Trello will fetch and attach the file from this URL.
   */
  fileSource?: string;
  /**
   * Id Attachment Cover
   * @description The ID of an existing image attachment to be used as the card cover. Use 'null' or an empty string to remove the cover.
   */
  idAttachmentCover?: string;
  /**
   * Id Board
   * @description The ID of the board to move the card to. If `idList` is also provided, the card will be moved to that list on the new board.
   */
  idBoard?: string;
  /**
   * Id Card
   * @description The ID or shortLink of the card to update.
   */
  idCard?: string;
  /**
   * Id Card Source
   * @description The ID of a card to copy properties from. Requires `keepFromSource` to be specified.
   */
  idCardSource?: string;
  /**
   * Id Labels
   * @description Comma-separated list of label IDs to apply, replacing existing labels. To preserve existing labels, fetch current `idLabels`, append new ones, and submit the combined list.
   */
  idLabels?: string;
  /**
   * Id List
   * @description The ID of the list to move the card to.
   */
  idList?: string;
  /**
   * Id Members
   * @description Comma-separated list of member IDs to assign, replacing existing members. To preserve existing members, fetch current `idMembers`, append new ones, and submit the combined list.
   */
  idMembers?: string;
  /**
   * Keep From Source
   * @description If `idCardSource` is specified, this is a comma-separated list of properties to copy from the source card. Valid values are 'all', or any combination of 'attachments', 'checklists', 'comments', 'customFields', 'due', 'labels', 'members', 'pluginData', 'stickers'.
   */
  keepFromSource?: string;
  /**
   * Labels
   * @description Comma-separated list of label colors (e.g., 'green,yellow,red') to apply, overwriting existing labels. Use 'idLabels' for more precise control. 'all' may add all available label colors.
   */
  labels?: string;
  /**
   * Name
   * @description The new name for the card. Required if not copying the name from `idCardSource`, `fileSource`, or `urlSource`.
   */
  name?: string;
  /**
   * Pos
   * @description The new position of the card within its list. Can be 'top', 'bottom', or a positive floating-point number. Higher numbers are further down the list.
   */
  pos?: string;
  /**
   * Subscribed
   * @description Determines whether the user is subscribed to the card. Set to 'true' to subscribe, 'false' to unsubscribe.
   */
  subscribed?: string;
  /**
   * Url Source
   * @description A URL to be attached to the card (e.g., a link to an external resource). If the card is being created from a URL (e.g. via a bookmarklet), this will be the source URL. Set to 'null' or an empty string to remove an existing attachment link created this way.
   */
  urlSource?: string;
};

/**
 * Type of TRELLO's TRELLO_CARD_UPDATE_BY_ID_CARD tool output.
 */
type TRELLO_CARD_UPDATE_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description The full card object as a JSON response after the update.
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
 * Type of TRELLO's TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD tool input.
 */
type TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card to be moved. Card IDs can be short (e.g., `FY2OWrnc`) or long (e.g., `571d07b591c8b68aeb4f6acc`).
   */
  idCard?: string;
  /**
   * Value
   * @description The ID of the target list to move the card to. This ID uniquely identifies the list within the Trello board (e.g., `5f7704097d4d9b4c...`).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD tool output.
 */
type TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_CARD_UPDATE_POS_BY_ID_CARD tool input.
 */
type TRELLO_CARD_UPDATE_POS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description ID or shortLink of the Trello card to move.
   */
  idCard?: string;
  /**
   * Value
   * @description New position for the card: 'top', 'bottom', or a positive integer (1-indexed).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_CARD_UPDATE_POS_BY_ID_CARD tool output.
 */
type TRELLO_CARD_UPDATE_POS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description Full JSON representation of the moved card.
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
 * Type of TRELLO's TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD tool input.
 */
type TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card containing the checklist and the item to be converted.
   */
  idCard?: string;
  /**
   * Id Check Item
   * @description The ID of the checklist item that will be converted into a new card.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist that contains the specific item to be converted to a card.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD tool output.
 */
type TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties of the newly created Trello card.
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
 * Type of TRELLO's TRELLO_DELETE_ACTIONS_BY_ID_ACTION tool input.
 */
type TRELLO_DELETE_ACTIONS_BY_ID_ACTION_INPUT = {
  /**
   * Id Action
   * @description The ID of the Trello action to be deleted (typically a 24-character hexadecimal string).
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ACTIONS_BY_ID_ACTION tool output.
 */
type TRELLO_DELETE_ACTIONS_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description Typically an empty dictionary on successful deletion, or may contain error details if deletion fails.
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
 * Type of TRELLO's TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER tool input.
 */
type TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_INPUT = {
  /**
   * Id Board
   * @description The ID of the board from which the member will be removed.
   */
  idBoard?: string;
  /**
   * Id Member
   * @description The ID of the member to remove from the board.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER tool output.
 */
type TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP tool input.
 */
type TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board from which the Power-Up will be removed. This is typically a 24-character hexadecimal string.
   */
  idBoard?: string;
  /**
   * Power Up
   * @description The plugin ID of the Power-Up to be removed from the board. Each Power-Up has a unique plugin ID.
   */
  powerUp?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP tool output.
 */
type TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION tool input.
 */
type TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION_INPUT = {
  /**
   * Id Action
   * @description The ID of the comment action to be deleted. This identifies the specific comment within the card's activity.
   */
  idAction?: string;
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card from which the comment will be deleted.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION tool output.
 */
type TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. For a successful deletion, this is typically an empty object.
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
 * Type of TRELLO's TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT tool input.
 */
type TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_INPUT = {
  /**
   * Id Attachment
   * @description The ID of the attachment to be deleted from the card. This is a unique identifier for the attachment.
   */
  idAttachment?: string;
  /**
   * Id Card
   * @description The ID or short link of the card from which the attachment will be deleted. Card IDs can be short (e.g., 'FY2OWrnc') or long (e.g., '571d07b591c8b68aeb4f6acc').
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT tool output.
 */
type TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_BY_ID_CARD tool input.
 */
type TRELLO_DELETE_CARDS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the card to be deleted. The card ID is a long alphanumeric string, while the shortLink is a shorter, unique identifier used in card URLs.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_BY_ID_CARD tool output.
 */
type TRELLO_DELETE_CARDS_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST tool input.
 */
type TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the card from which the checklist will be deleted. The card must exist.
   */
  idCard?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist to delete. The checklist must exist on the specified card.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST tool output.
 */
type TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL tool input.
 */
type TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card from which the label will be removed.
   */
  idCard?: string;
  /**
   * Id Label
   * @description The ID of the label to be removed from the card.
   */
  idLabel?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL tool output.
 */
type TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER tool input.
 */
type TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the card from which the member will be removed.
   */
  idCard?: string;
  /**
   * Id Member
   * @description The ID of the member to be unassigned from the card.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER tool output.
 */
type TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. Upon successful removal, this is typically an empty object or a confirmation from Trello.
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
 * Type of TRELLO's TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR tool input.
 */
type TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR_INPUT = {
  /**
   * Color
   * @description The specific color of the label to remove from the card. Standard Trello label colors are used (e.g., 'red', 'blue').
   */
  color?: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR tool output.
 */
type TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR_OUTPUT = {
  /**
   * Data
   * @description Trello API response, usually empty or with minimal data upon successful deletion.
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
 * Type of TRELLO's TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER tool input.
 */
type TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card from which the member's vote will be removed.
   */
  idCard?: string;
  /**
   * Id Member
   * @description The unique ID of the Trello member whose vote will be removed from the card.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER tool output.
 */
type TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The response from the Trello API, typically an empty object or a confirmation upon successful vote removal.
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
 * Type of TRELLO's TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER tool input.
 */
type TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_INPUT = {
  /**
   * Id Card
   * @description ID or short link of the card.
   */
  idCard?: string;
  /**
   * Id Sticker
   * @description ID of the sticker to remove.
   */
  idSticker?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER tool output.
 */
type TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_OUTPUT = {
  /**
   * Data
   * @description The response data, usually an empty object for successful deletion.
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
 * Type of TRELLO's TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Checklist
   * @description The ID of the checklist to be deleted.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description The response typically returns an empty object or a confirmation upon successful deletion.
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
 * Type of TRELLO's TRELLO_DELETE_CHECKLIST_ITEM tool input.
 */
type TRELLO_DELETE_CHECKLIST_ITEM_INPUT = {
  /**
   * Id Check Item
   * @description The ID of the check item to be deleted.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist that contains the check item to be deleted.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_CHECKLIST_ITEM tool output.
 */
type TRELLO_DELETE_CHECKLIST_ITEM_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary indicating the successful deletion of the check item.
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
 * Type of TRELLO's TRELLO_DELETE_LABELS_BY_ID_LABEL tool input.
 */
type TRELLO_DELETE_LABELS_BY_ID_LABEL_INPUT = {
  /**
   * Id Label
   * @description The unique identifier of the label to be deleted.
   */
  idLabel?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_LABELS_BY_ID_LABEL tool output.
 */
type TRELLO_DELETE_LABELS_BY_ID_LABEL_OUTPUT = {
  /**
   * Data
   * @description The response data from the Trello API. For a successful deletion, this field typically contains an empty object or a minimal success confirmation.
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
 * Type of TRELLO's TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR tool input.
 */
type TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_INPUT = {
  /**
   * Id Board Star
   * @description The ID of the board star. This uniquely identifies the 'starred' relationship between the member and a board.
   */
  idBoardStar?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR tool output.
 */
type TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. For a successful deletion, this is often an empty object or a simple confirmation.
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
 * Type of TRELLO's TRELLO_DELETE_MEMBER_BOARD_BACKGROUND tool input.
 */
type TRELLO_DELETE_MEMBER_BOARD_BACKGROUND_INPUT = {
  /**
   * Id Board Background
   * @description ID of the custom board background to delete.
   */
  idBoardBackground?: string;
  /**
   * Id Member
   * @description ID or username of the Trello member; 'me' refers to the authenticated user.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_MEMBER_BOARD_BACKGROUND tool output.
 */
type TRELLO_DELETE_MEMBER_BOARD_BACKGROUND_OUTPUT = {
  /**
   * Data
   * @description Confirmation from Trello; typically an empty JSON object for successful deletion.
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
 * Type of TRELLO's TRELLO_DELETE_MEMBER_CUSTOM_STICKER tool input.
 */
type TRELLO_DELETE_MEMBER_CUSTOM_STICKER_INPUT = {
  /**
   * Id Custom Sticker
   * @description The ID of the custom sticker to be deleted from the member's collection.
   */
  idCustomSticker?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_MEMBER_CUSTOM_STICKER tool output.
 */
type TRELLO_DELETE_MEMBER_CUSTOM_STICKER_OUTPUT = {
  /**
   * Data
   * @description A dictionary, typically empty or containing a confirmation upon successful deletion. In case of an error, it will contain error details.
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
 * Type of TRELLO's TRELLO_DELETE_MEMBER_SAVED_SEARCH tool input.
 */
type TRELLO_DELETE_MEMBER_SAVED_SEARCH_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose saved search is to be deleted.
   */
  idMember?: string;
  /**
   * Id Saved Search
   * @description The ID of the specific saved search to be deleted.
   */
  idSavedSearch?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_MEMBER_SAVED_SEARCH tool output.
 */
type TRELLO_DELETE_MEMBER_SAVED_SEARCH_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the outcome of the deletion. Upon successful deletion, Trello typically returns an object like `{"_value":null}`.
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
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG tool input.
 */
type TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG tool output.
 */
type TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary confirming the deletion. Often empty upon successful execution.
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
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG tool input.
 */
type TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or custom URL name of the Trello organization whose logo is to be deleted. This can be the organization's short ID or its registered name.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG tool output.
 */
type TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from Trello, typically confirming the successful deletion of the organization's logo. It might be an empty object or contain a success indicator.
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
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER tool input.
 */
type TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID of the member to remove from the organization.
   */
  idMember?: string;
  /**
   * Id Org
   * @description The ID or short name (slug) of the organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER tool output.
 */
type TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER tool input.
 */
type TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID of the member to be removed from the organization.
   */
  idMember?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization from which the member will be removed.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER tool output.
 */
type TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Response data from the API, typically an empty object for successful deletion or a confirmation.
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
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG tool input.
 */
type TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The unique identifier (ID) or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Value
   * @description The email domain (e.g., 'trello.com', 'example.org') to remove from the organization's invitation restrictions.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG tool output.
 */
type TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description The API response from Trello. Upon successful deletion of the invitation restriction, this is typically an empty object or a confirmation message.
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
 * Type of TRELLO's TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN tool input.
 */
type TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN_INPUT = {
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization. If using the name, provide the short, URL-friendly version (e.g., 'trelloorg' for an organization accessible at trello.com/trelloorg).
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN tool output.
 */
type TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description A dictionary confirming the outcome of the deletion. For a successful operation, this often contains a minimal response, such as `{"_value": null}` or an empty object, as the endpoint primarily executes the deletion without returning detailed data.
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
 * Type of TRELLO's TRELLO_DELETE_TOKENS_BY_TOKEN tool input.
 */
type TRELLO_DELETE_TOKENS_BY_TOKEN_INPUT = object;

/**
 * Type of TRELLO's TRELLO_DELETE_TOKENS_BY_TOKEN tool output.
 */
type TRELLO_DELETE_TOKENS_BY_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK tool input.
 */
type TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier of the existing webhook to be deleted.
   */
  idWebhook?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK tool output.
 */
type TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Response data from Trello, typically an empty object or a minimal confirmation (e.g. `{"_value":null}`) on successful webhook deletion.
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
 * Type of TRELLO's TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK tool input.
 */
type TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier of the webhook to be deleted. This ID is obtained when the webhook is created.
   */
  idWebhook?: string;
};

/**
 * Type of TRELLO's TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK tool output.
 */
type TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description The response data from the Trello API. A successful deletion typically returns an empty JSON object (e.g., {}). If the deletion fails, this field may contain error details.
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
 * Type of TRELLO's TRELLO_DISMISS_MEMBER_MESSAGE tool input.
 */
type TRELLO_DISMISS_MEMBER_MESSAGE_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Value
   * @description The type of one-time message to dismiss. This is a string identifier for the message. Specific message types are not explicitly documented by Trello, but generally refer to informational pop-ups or banners.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_DISMISS_MEMBER_MESSAGE tool output.
 */
type TRELLO_DISMISS_MEMBER_MESSAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description Board fields to return: 'all', or a comma-separated list of field names. Allowed values: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description ID of the Trello action to retrieve its associated board.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description Details of the board associated with the action.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific board field to retrieve. All board fields are valid options.
   */
  field?: string;
  /**
   * Id Action
   * @description The ID of the Trello action. This action is used to identify the board from which a specific field will be retrieved.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_BY_ID_ACTION_INPUT = {
  /**
   * Display
   * @description Determines whether to include display-related information.
   */
  display?: string;
  /**
   * Entities
   * @description Determines whether to include related entities in the response.
   */
  entities?: string;
  /**
   * Fields
   * @description Specifies which fields to include in the response. Use 'all' or a comma-separated list of: 'data', 'date', 'idMemberCreator', or 'type'.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The ID of the action to retrieve.
   */
  idAction?: string;
  /**
   * Member
   * @description Determines whether to include member details.
   */
  member?: string;
  /**
   * Member Creator
   * @description Determines whether to include details of the member who created the action.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Specifies which fields of the member creator to include. Use 'all' or a comma-separated list of: 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', or 'username'.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description Specifies which member fields to include. Use 'all' or a comma-separated list of: 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', or 'username'.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the action's details.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the action to retrieve (e.g., 'data', 'date', 'type'). Only one field can be retrieved per request. Consult Trello API documentation for valid action field names.
   */
  field?: string;
  /**
   * Id Action
   * @description The unique identifier of the Trello action.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the fetched field's value. If the field itself is an object (e.g., the 'data' field of an action), this dictionary will directly represent that object. If the field is a scalar type (e.g., a string like 'type' or 'date'), it will be wrapped within this dictionary (e.g., `{"_value": "scalar_value"}`).
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description Comma-separated card fields to return, or 'all'. Allowed values: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description Identifier of a Trello action that must be related to a card.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the card (e.g., `name`, `desc`, `idList`) to retrieve for the card associated with the specified action.
   */
  field?: string;
  /**
   * Id Action
   * @description ID of the Trello action whose associated card's field is to be retrieved.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the value of the requested card field. Typically, this is a simple object with a `_value` key holding the field's content (e.g., `{"_value": "Card Name"}`).
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION_INPUT = {
  /**
   * Id Action
   * @description The unique identifier of the Trello action for which display information is to be retrieved.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the display-related information for the specified action. The structure of this dictionary can vary depending on the action type and may include formatted text, HTML, or other display-centric data.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION_INPUT = {
  /**
   * Id Action
   * @description The ID of the Trello action to retrieve entities for, e.g., '592f11060f95a3d3d46a987a'.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the entities associated with the action. The keys are the entity types (e.g., 'board', 'card', 'list', 'memberCreator') and the values are objects containing details about each entity.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description Determines which fields to include in the response. Specify 'all' or a comma-separated list of valid field names. Valid fields are: 'closed', 'idBoard', 'name', 'pos', or 'subscribed'.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The ID of the Trello action for which to retrieve the associated list.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description field
   */
  field?: string;
  /**
   * Id Action
   * @description idAction
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of member fields to return. Valid fields include: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The ID of the Trello action for which to retrieve member information.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the member's information, with keys corresponding to the fields requested.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the member to retrieve.
   */
  field?: string;
  /**
   * Id Action
   * @description The ID of the Trello action.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description The response from Trello, typically a JSON object containing the value of the requested member field. For example, if `field` is 'username', the response might be `{"_value": "testuser"}` or `{"username": "testuser"}`.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of member fields to retrieve, or 'all'. Valid fields include: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The ID of the Trello action.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the member who created the action, based on the 'fields' parameter.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the member creator's profile.
   */
  field?: string;
  /**
   * Id Action
   * @description The ID of the Trello action.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value. Typically, the key is `_value` and the value is the actual data of the field.
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
 * Type of TRELLO's TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION tool input.
 */
type TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_INPUT = {
  /**
   * Fields
   * @description Specifies which fields of the organization resource to return. Use 'all' to fetch all available fields, or provide a comma-separated list of specific fields. Allowed fields include: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website.
   * @default all
   */
  fields: string;
  /**
   * Id Action
   * @description The unique identifier of the Trello action for which organization details are being requested.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION tool output.
 */
type TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD tool input.
 */
type TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the organization to retrieve. Common fields include 'name', 'displayName', 'id', 'desc', or 'url'.
   */
  field?: string;
  /**
   * Id Action
   * @description The unique identifier of the Trello action.
   */
  idAction?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD tool output.
 */
type TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value.
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
 * Type of TRELLO's TRELLO_GET_BATCH tool input.
 */
type TRELLO_GET_BATCH_INPUT = {
  /**
   * Urls
   * @description A comma-separated string of Trello API v1 GET routes to be executed in a single batch request. Each route must be relative to the `/1` Trello API base (e.g., `/cards/{idCard}`, `/boards/{idBoard}/lists`) and should not include the `/1` prefix in the individual routes. Trello typically limits this to a maximum of 10 routes per batch call.
   */
  urls?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BATCH tool output.
 */
type TRELLO_GET_BATCH_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the results for each of the Trello API GET requests made in the batch. The keys of the dictionary typically represent the individual API routes requested or unique identifiers for each request, and the values are the corresponding JSON responses (or error details) from Trello.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD_INPUT = {
  /**
   * Before
   * @description Return actions that occurred before this date. Can be null. Dates should be in ISO 8601 format or a valid Trello date string.
   */
  before?: string;
  /**
   * Display
   * @description Includes display-friendly information for entities in the response if 'true'.
   */
  display?: string;
  /**
   * Entities
   * @description Includes related entities (e.g., cards, lists, members) in the response if 'true'.
   */
  entities?: string;
  /**
   * Fields
   * @description Specifies which action fields to return. Use 'all' for all fields, or provide a comma-separated list of field names. Supported fields include: data, date, idMemberCreator, or type.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description A filter to return only specific types of actions. Use 'all' for all actions, or provide a comma-separated list of action types. Supported types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   * @default all
   */
  filter: string;
  /**
   * Format
   * @description The format of the returned actions. Valid options are 'count' (returns only the count of actions), 'list' (returns detailed actions), or 'minimal' (returns a minimal representation of actions).
   * @default list
   */
  format: string;
  /**
   * Id Board
   * @description The ID of the Trello board for which to retrieve actions.
   */
  idBoard?: string;
  /**
   * Id Models
   * @description A comma-separated list of model IDs (e.g., card IDs, list IDs) to filter actions by. Only actions related to these models will be returned.
   */
  idModels?: string;
  /**
   * Limit
   * @description The maximum number of actions to return. Must be a number between 0 and 1000, inclusive.
   * @default 50
   */
  limit: string;
  /**
   * Member
   * @description Includes member details in the action data if 'true'.
   */
  member?: string;
  /**
   * Member Creator
   * @description Includes details of the member who created the action if 'true'.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Specifies which fields of the memberCreator object to return if 'memberCreator' is true. Use 'all' for all fields, or provide a comma-separated list. Supported fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description Specifies which fields of the member object to return if 'member' is true. Use 'all' for all member fields, or provide a comma-separated list. Supported fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Page
   * @description The page number of results to retrieve. Note: `page * limit` must be less than 1000. Used for pagination.
   * @default 0
   */
  page: string;
  /**
   * Since
   * @description Return actions that occurred after this date, or use 'lastView' to get actions since the user last viewed the board. Can also be null. Dates should be in ISO 8601 format or a valid Trello date string.
   */
  since?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD_INPUT = {
  /**
   * Filter
   * @description Filter for board stars: 'mine' for the current user's stars (default), or 'none' for all stars on the board.
   * @default mine
   */
  filter: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the board star information.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_BY_ID_BOARD_INPUT = {
  /**
   * Action Fields
   * @description Specifies the fields to return for action objects. Use 'all' or a comma-separated list of fields: data, date, idMemberCreator, type.
   * @default all
   */
  action_fields: string;
  /**
   * Action Member
   * @description Determines whether to include the member object within actions. Set to 'true' or 'false'.
   */
  action_member?: string;
  /**
   * Action Member Creator
   * @description Determines whether to include the member creator object within actions. Set to 'true' or 'false'.
   */
  action_memberCreator?: string;
  /**
   * Action Member Creator Fields
   * @description Specifies the fields to return for member creator objects within actions. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  action_memberCreator_fields: string;
  /**
   * Action Member Fields
   * @description Specifies the fields to return for member objects within actions. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  action_member_fields: string;
  /**
   * Actions
   * @description Filters the actions to be returned. Specify 'all' or provide a comma-separated list of action types. Valid types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   */
  actions?: string;
  /**
   * Actions Display
   * @description Determines whether to return display objects for actions. Set to 'true' or 'false'.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Determines whether to return entity objects for actions. Set to 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Format
   * @description Specifies the format for returned actions. Valid values: 'count', 'list', or 'minimal'.
   * @default list
   */
  actions_format: string;
  /**
   * Actions Limit
   * @description The maximum number of actions to return, ranging from 0 to 1000.
   * @default 50
   */
  actions_limit: string;
  /**
   * Actions Since
   * @description Filters actions to those that occurred after a specific date (ISO 8601 format), or 'lastView'. Use null for no date filtering.
   */
  actions_since?: string;
  /**
   * Board Stars
   * @description Filters board stars. Valid values: 'mine' (stars by the current user) or 'none'.
   * @default none
   */
  boardStars: string;
  /**
   * Card Attachment Fields
   * @description Specifies the fields to return for card attachment objects. Use 'all' or a comma-separated list. Valid fields: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url.
   * @default all
   */
  card_attachment_fields: string;
  /**
   * Card Attachments
   * @description Determines whether to include card attachments. Set to 'true', 'false', or 'cover' (for only card cover attachments).
   */
  card_attachments?: string;
  /**
   * Card Checklists
   * @description Filters the checklists on cards to be returned. Valid values: 'all' or 'none'.
   * @default none
   */
  card_checklists: string;
  /**
   * Card Fields
   * @description Specifies the fields to return for card objects. Use 'all' or a comma-separated list. Valid fields: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url.
   * @default all
   */
  card_fields: string;
  /**
   * Card Stickers
   * @description Determines whether to include stickers on cards. Set to 'true' or 'false'.
   */
  card_stickers?: string;
  /**
   * Cards
   * @description Filters the cards to be returned. Valid values: 'all', 'closed', 'none', 'open', or 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Checklist Fields
   * @description Specifies fields for board-level checklist objects. Use 'all' or a comma-separated list: idBoard, idCard, name, pos.
   * @default all
   */
  checklist_fields: string;
  /**
   * Checklists
   * @description Filters board-level checklists to be returned. Valid values: 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Specifies the fields to return for the board object itself. Use 'all' or a comma-separated list. Valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames
   */
  fields: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Label Fields
   * @description Specifies the fields to return for label objects. Use 'all' or a comma-separated list: color, idBoard, name, uses.
   * @default all
   */
  label_fields: string;
  /**
   * Labels
   * @description Filters the labels to be returned. Valid values: 'all' or 'none'.
   * @default none
   */
  labels: string;
  /**
   * Labels Limit
   * @description The maximum number of labels to return, ranging from 0 to 1000.
   * @default 50
   */
  labels_limit: string;
  /**
   * List Fields
   * @description Specifies the fields to return for list objects. Use 'all' or a comma-separated list: closed, idBoard, name, pos, subscribed.
   * @default all
   */
  list_fields: string;
  /**
   * Lists
   * @description Filters the lists on the board to be returned. Valid values: 'all', 'closed', 'none', or 'open'.
   * @default none
   */
  lists: string;
  /**
   * Member Fields
   * @description Specifies fields for member objects. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, initials, fullName, username and confirmed
   */
  member_fields: string;
  /**
   * Members
   * @description Filters the members of the board to be returned. Valid values: 'admins', 'all', 'none', 'normal', or 'owners'.
   * @default none
   */
  members: string;
  /**
   * Members Invited
   * @description Filters invited members of the board. Valid values: 'admins', 'all', 'none', 'normal', or 'owners'.
   * @default none
   */
  membersInvited: string;
  /**
   * Members Invited Fields
   * @description Specifies fields for invited member objects. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, initials, fullName and username
   */
  membersInvited_fields: string;
  /**
   * Memberships
   * @description Filters board memberships to return. Use 'all' or a comma-separated list of types: active, admin, deactivated, me, normal.
   * @default none
   */
  memberships: string;
  /**
   * Memberships Member
   * @description Determines whether to include member objects within memberships. Set to 'true' or 'false'.
   */
  memberships_member?: string;
  /**
   * Memberships Member Fields
   * @description Specifies fields for member objects within memberships. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default fullName and username
   */
  memberships_member_fields: string;
  /**
   * My Prefs
   * @description Determines whether to include the current user's preferences for this board. Set to 'true' or 'false'.
   */
  myPrefs?: string;
  /**
   * Organization
   * @description Determines whether to include the organization object to which the board belongs. Set to 'true' or 'false'.
   */
  organization?: string;
  /**
   * Organization Fields
   * @description Specifies fields for the organization object. Use 'all' or a comma-separated list. Valid fields: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website.
   * @default name and displayName
   */
  organization_fields: string;
  /**
   * Organization Memberships
   * @description Filters organization memberships to return. Use 'all' or a comma-separated list: active, admin, deactivated, me, normal.
   * @default none
   */
  organization_memberships: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the comprehensive details of the retrieved Trello board.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD tool input.
 */
type TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The name of the specific Trello board field to retrieve.
   */
  field?: string;
  /**
   * Id Board
   * @description The ID of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD tool output.
 */
type TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_INPUT = {
  /**
   * Actions
   * @description A comma-separated list of action types to be returned. Use 'all' to include all action types. Valid action types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description A comma-separated list of attachment fields to be returned. Use 'all' to include all fields. Valid fields include: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, or url.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Determines whether attachments should be returned. Can be 'true', 'false', or 'cover' (to return only card cover attachments).
   */
  attachments?: string;
  /**
   * Before
   * @description A date in ISO 8601 format. Only cards updated before this date will be returned. Use 'null' for no restriction.
   */
  before?: string;
  /**
   * Check Item States
   * @description Determines whether check item states should be returned. Valid values are 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Determines which checklists to return. Valid values are 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description A comma-separated list of card fields to be returned. Use 'all' to include all fields. Valid fields include: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the cards to return. Valid values are 'all', 'closed', 'none', 'open', or 'visible'.
   * @default visible
   */
  filter: string;
  /**
   * Id Board
   * @description The ID of the Trello board from which to retrieve cards.
   */
  idBoard?: string;
  /**
   * Limit
   * @description The maximum number of cards to return. Must be a number between 1 and 1000, inclusive.
   */
  limit?: string;
  /**
   * Member Fields
   * @description A comma-separated list of member fields to be returned. Use 'all' to include all fields. Valid fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Determines whether members should be returned. Valid values are 'true' or 'false'.
   */
  members?: string;
  /**
   * Since
   * @description A date in ISO 8601 format. Only cards updated after this date will be returned. Use 'null' for no restriction.
   */
  since?: string;
  /**
   * Stickers
   * @description Determines whether stickers should be returned. Valid values are 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A list of card objects, each containing details according to the specified 'fields' parameter. The structure of each card object depends on the fields requested.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER tool input.
 */
type TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description Filter for retrieving cards. Valid values: 'all', 'closed', 'none', 'open', 'visible'.
   */
  filter?: string;
  /**
   * Id Board
   * @description Unique identifier of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER tool output.
 */
type TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description API response containing a list of card objects from the board matching the filter.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD tool input.
 */
type TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD_INPUT = {
  /**
   * Action Fields
   * @description Action fields to return ('all' or a comma-separated list: data, date, type).
   * @default all
   */
  action_fields: string;
  /**
   * Action Member Creator Fields
   * @description Fields for the member who created an action ('all' or comma-separated list: avatarHash, fullName, username).
   * @default avatarHash, fullName, initials and username
   */
  action_memberCreator_fields: string;
  /**
   * Actions
   * @description Actions to return ('all' or a comma-separated list of types like 'addAttachmentToCard', 'commentCard').
   */
  actions?: string;
  /**
   * Actions Display
   * @description Whether to return display-friendly action data ('true' or 'false').
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Whether to return entity information (e.g., boards, cards) for actions ('true' or 'false').
   */
  actions_entities?: string;
  /**
   * Actions Limit
   * @description Maximum number of actions to return (0-1000).
   * @default 50
   */
  actions_limit: string;
  /**
   * Attachment Fields
   * @description Attachment fields to return ('all' or a comma-separated list like: bytes, date, name, url).
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Specifies if and how attachments are returned ('true', 'false', or 'cover' for only card cover attachments).
   */
  attachments?: string;
  /**
   * Check Item State Fields
   * @description Fields for check item states ('all' or comma-separated: idCheckItem, state).
   * @default all
   */
  checkItemState_fields: string;
  /**
   * Check Item States
   * @description Whether to return check item states for the card ('true' or 'false').
   */
  checkItemStates?: string;
  /**
   * Checklist Fields
   * @description Checklist fields to return ('all' or a comma-separated list: idBoard, name, pos).
   * @default all
   */
  checklist_fields: string;
  /**
   * Checklists
   * @description Checklists to return ('all' or 'none').
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Card fields to return ('all' or a comma-separated list: name, desc, due, idLabels).
   * @default all
   */
  fields: string;
  /**
   * Id Board
   * @description The ID of the Trello board where the card is located.
   */
  idBoard?: string;
  /**
   * Id Card
   * @description The ID of the Trello card to retrieve.
   */
  idCard?: string;
  /**
   * Labels
   * @description Deprecated: Whether to return label data ('true' or 'false'); use `idLabels` in `fields` instead.
   */
  labels?: string;
  /**
   * Member Fields
   * @description Member fields to return ('all' or comma-separated list: avatarHash, fullName, username).
   * @default avatarHash, initials, fullName and username
   */
  member_fields: string;
  /**
   * Members
   * @description Whether to return member data for the card ('true' or 'false').
   */
  members?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD tool output.
 */
type TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the card's details, structured according to the requested fields.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD_INPUT = {
  /**
   * Card Fields
   * @description Specifies fields of associated cards to return; 'all' or a comma-separated list (e.g., name, idList, badges).
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Determines which cards (and their checklists) are considered when fetching checklists. Valid values: 'all', 'closed', 'none', 'open', 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Check Item Fields
   * @description Specifies fields of check items to return; 'all' or a comma-separated list (e.g., name, nameData, pos, state, type).
   * @default name, nameData, pos and state
   */
  checkItem_fields: string;
  /**
   * Check Items
   * @description Determines if check items (individual items within a checklist) are included in the response. Valid values: 'all', 'none'.
   * @default all
   */
  checkItems: string;
  /**
   * Fields
   * @description Specifies fields of the checklists to return; 'all' or a comma-separated list (e.g., idBoard, idCard, name, pos).
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the checklists to be returned. Valid values: 'all' (all matching checklists) or 'none' (no checklists).
   * @default all
   */
  filter: string;
  /**
   * Id Board
   * @description The ID of the Trello board from which to retrieve checklists.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description Unique identifier of the Trello board for which to retrieve deltas.
   */
  idBoard?: string;
  /**
   * Ix Last Update
   * @description Sequence number of the last update received; use '-1' for all changes since creation, or the `ixLastUpdate` from a previous delta response for subsequent changes. Accepts string representations of numbers from -1 upwards.
   */
  ixLastUpdate?: string;
  /**
   * Tags
   * @description Tag for filtering change types; use 'all' to subscribe to all changes on the board.
   */
  tags?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description Dictionary of delta objects representing board changes; structure varies with update nature.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_INPUT = {
  /**
   * Fields
   * @description Determines which label fields to return. Use 'all' for all available fields, or a comma-separated list of specific fields from: color, idBoard, name, uses. Defaults to 'all'.
   * @default all
   */
  fields: string;
  /**
   * Id Board
   * @description The unique 24-character hexadecimal identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Limit
   * @description The maximum number of labels to be returned. Must be an integer between 0 and 1000, inclusive. Defaults to 50.
   * @default 50
   */
  limit: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL tool input.
 */
type TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of fields to include in the response for the label, or 'all' for all fields. Valid fields: 'color', 'idBoard', 'name', 'uses'.
   * @default all
   */
  fields: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Id Label
   * @description The unique identifier of the label within the specified board.
   */
  idLabel?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL tool output.
 */
type TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_INPUT = {
  /**
   * Card Fields
   * @description Specifies the fields of cards to be returned if the 'cards' parameter is not 'none'. Use 'all' for all fields, or provide a comma-separated list of specific fields. Valid fields include: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url.
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Determines which cards should be returned within the lists. Valid values are 'all', 'closed', 'none', 'open', or 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Fields
   * @description Specifies the fields of the lists to be returned. Use 'all' for all fields, or provide a comma-separated list of specific fields. Valid fields include: closed, idBoard, name, pos, or subscribed.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the lists to be returned based on their status. Valid values are 'all', 'closed', 'none', or 'open'.
   * @default open
   */
  filter: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board from which to retrieve lists.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER tool input.
 */
type TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description Filter for retrieving lists: 'open' (active lists), 'closed' (archived lists), or 'all' (all lists, including archived).
   */
  filter?: string;
  /**
   * Id Board
   * @description The ID of the Trello board from which to retrieve lists.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER tool output.
 */
type TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Trello API's response. This typically includes an array of list objects from the board, filtered according to the request.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_INPUT = {
  /**
   * Filter
   * @description Filters the types of memberships returned. Valid values are 'all' or a comma-separated list of: 'active', 'admin', 'deactivated', 'me', 'normal'.
   * @default all
   */
  filter: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Member
   * @description Determines whether to return member objects. Accepts string 'true' or 'false'. If not provided, the API's default behavior for including member details will apply.
   */
  member?: string;
  /**
   * Member Fields
   * @description Specifies the member fields to return. Valid values are 'all' or a comma-separated list of: 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', 'username'.
   * @default fullName and username
   */
  member_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP tool input.
 */
type TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board.
   */
  idBoard?: string;
  /**
   * Id Membership
   * @description The ID of the membership to retrieve.
   */
  idMembership?: string;
  /**
   * Member
   * @description Set to 'true' to return the full member object. If 'false' or not provided, Trello's default for member details (typically minimal) applies.
   */
  member?: string;
  /**
   * Member Fields
   * @description Comma-separated list of member fields to return if 'member' is 'true' (e.g., avatarHash,fullName), or 'all'. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default fullName and username
   */
  member_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP tool output.
 */
type TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the retrieved membership details, with specific fields dependent on 'member' and 'member_fields' request parameters.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_INPUT = {
  /**
   * Activity
   * @description Indicates whether to include member activity. Accepts string values 'true' or 'false'. This option is effective only for Trello Premium organizations.
   */
  activity?: string;
  /**
   * Fields
   * @description Specifies which member fields to return. Use 'all' for all fields, or provide a comma-separated list of desired field names (e.g., 'fullName,username'). Valid field names include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default fullName and username
   */
  fields: string;
  /**
   * Filter
   * @description Filters the members returned. Valid values: 'admins' (board administrators), 'all' (all members), 'none' (no members), 'normal' (regular board members), 'owners' (board owners).
   * @default normal
   */
  filter: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which to retrieve members.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. Typically, this will be a list of Trello member objects, each detailing a user associated with the board.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER tool input.
 */
type TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description Filter to apply when retrieving members, determining which subset is returned.
   */
  filter?: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER tool output.
 */
type TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the Trello API, typically including a list of member objects that match the filter criteria.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER_INPUT = {
  /**
   * Actions
   * @description Action types to include with the cards. 'all' or a comma-separated list (e.g., 'commentCard,createCard'). If omitted, no actions are returned. Refer to Trello API documentation for all available action types.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description Fields for attachments, if 'attachments' is 'true'. 'all' or a comma-separated list (e.g., 'bytes,date,name'). Available fields: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Whether to include attachments. Use 'true', 'false', or 'cover' (for card cover attachments only).
   */
  attachments?: string;
  /**
   * Board
   * @description Whether to include the parent board object with card data ('true' or 'false').
   */
  board?: string;
  /**
   * Board Fields
   * @description Fields for the board object, if 'board' is 'true'. 'all' or a comma-separated list (e.g., 'name,desc'). Refer to Trello API documentation for all available field names.
   * @default name, desc, closed, idOrganization, pinned, url and prefs
   */
  board_fields: string;
  /**
   * Check Item States
   * @description Whether to include check item states with card data ('true' or 'false').
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Which checklists to include with cards. Valid values: 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Card fields to return. 'all' or a comma-separated list (e.g., 'name,desc,due'). Refer to Trello API documentation for all available field names.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filter cards by status. Valid values: 'all', 'closed', 'none', 'open', 'visible'.
   * @default visible
   */
  filter: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Id Member
   * @description The unique identifier of the member whose cards are to be retrieved from the board.
   */
  idMember?: string;
  /**
   * List
   * @description Whether to include the list object (containing the card) with card data ('true' or 'false').
   */
  list?: string;
  /**
   * List Fields
   * @description Fields for the list object, if 'list' is 'true'. 'all' or a comma-separated list (e.g., 'name,pos'). Available fields: closed, idBoard, name, pos, subscribed.
   * @default all
   */
  list_fields: string;
  /**
   * Member Fields
   * @description Fields for member objects, if 'members' is 'true'. 'all' or a comma-separated list (e.g., 'fullName,username'). Available fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Whether to include member objects with card data ('true' or 'false').
   */
  members?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description API response payload, typically a list of card objects for the member on the specified board.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_INPUT = {
  /**
   * Fields
   * @description Specifies the fields to return for invited members. Use 'all' for all fields, or provide a comma-separated list. Allowed fields: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description The response data containing a list of invited members and their details, according to the requested fields.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD tool input.
 */
type TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific attribute to retrieve for the members invited to the board. This typically refers to a common member property.
   */
  field?: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD tool output.
 */
type TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved information. For single field values, this often follows the pattern `{"_value": "requested_data"}`, where `requested_data` is the value of the specified field concerning the invited members of the board. The exact structure may vary depending on the field requested.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board for which to retrieve the current user's preferences.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing key-value pairs of the user's preferences for the specified board. The specific keys and their meanings are defined by Trello's board preference settings.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD tool input.
 */
type TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_INPUT = {
  /**
   * Fields
   * @description Specifies the fields to be returned for the organization. Use 'all' to retrieve all available fields, or provide a comma-separated list of specific fields. Valid fields include: 'billableMemberCount', 'desc', 'descData', 'displayName', 'idBoards', 'invitations', 'invited', 'logoHash', 'memberships', 'name', 'powerUps', 'prefs', 'premiumFeatures', 'products', 'url', or 'website'.
   * @default all
   */
  fields: string;
  /**
   * Id Board
   * @description The ID of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD tool output.
 */
type TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the organization (Workspace) associated with the specified board. The specific fields returned depend on the 'fields' parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD tool input.
 */
type TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the organization associated with the board. This can be any valid field of an organization object.
   */
  field?: string;
  /**
   * Id Board
   * @description The ID of the Trello board.
   */
  idBoard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD tool output.
 */
type TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description The response from Trello, containing the requested field and its value for the organization associated with the specified board. The key in the dictionary will be '_value' and its value will be the value of the field requested.
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
 * Type of TRELLO's TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD_INPUT = {
  /**
   * Before
   * @description A date in ISO 8601 format (e.g., '2023-12-31T23:59:59Z'), or 'null'. Returns actions that occurred before this date.
   */
  before?: string;
  /**
   * Display
   * @description Determines whether to return display-related information for the actions. Provide as a string 'true' or 'false'.
   */
  display?: string;
  /**
   * Entities
   * @description Determines whether to return information about entities (e.g., comments, checklists) associated with the actions. Provide as a string 'true' or 'false'.
   */
  entities?: string;
  /**
   * Fields
   * @description A comma-separated list of fields to include for each action, or 'all'. Valid fields: data, date, idMemberCreator, type.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description A comma-separated list of action types to filter by (e.g., 'commentCard,updateCard:idList'), or 'all'. Valid action types are: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   * @default commentCard and updateCard:idList
   */
  filter: string;
  /**
   * Format
   * @description The format of the response. 'list' returns a list of actions, 'minimal' returns a minimal list of actions, and 'count' returns only the total number of actions.
   * @default list
   */
  format: string;
  /**
   * Id Card
   * @description The ID or shortLink of the card for which to retrieve actions.
   */
  idCard?: string;
  /**
   * Id Models
   * @description A comma-separated list of model IDs. If provided, only actions related to these specific model IDs (e.g., a specific checklist item ID if an action is 'updateCheckItemStateOnCard') will be returned.
   */
  idModels?: string;
  /**
   * Limit
   * @description The maximum number of actions to return. Must be a number between 0 and 1000.
   * @default 50
   */
  limit: string;
  /**
   * Member
   * @description Determines whether to include details of the member who performed the action. Provide as a string 'true' or 'false'.
   */
  member?: string;
  /**
   * Member Creator
   * @description Determines whether to include details of the member who created the action (the action's author). Provide as a string 'true' or 'false'.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description A comma-separated list of fields to return for the memberCreator object, if 'memberCreator' is 'true'. Valid fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username. Use 'all' to retrieve all fields.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description A comma-separated list of fields to return for the member object, if 'member' is 'true'. Valid fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username. Use 'all' to retrieve all fields.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Page
   * @description The page number of results to retrieve, starting from 0. Used for pagination. Note: `page * limit` must be less than 1000.
   * @default 0
   */
  page: string;
  /**
   * Since
   * @description A date in ISO 8601 format (e.g., '2023-01-15T10:00:00Z'), 'null', or 'lastView'. Returns actions that occurred after this date/event. 'lastView' refers to the time the user last viewed the card.
   */
  since?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return (e.g., bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url), or 'all'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filter for attachments: 'cover' for card cover, 'true' for all, or 'false' for non-cover (behavior can vary).
   */
  filter?: string;
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card from which to retrieve attachments.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the attachments retrieved for the card.
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
 * Type of TRELLO's TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT tool input.
 */
type TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_INPUT = {
  /**
   * Fields
   * @description Specifies the fields to be returned for the attachment. Use 'all' to retrieve all available fields, or provide a comma-separated list of specific fields. Valid fields include: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url.
   * @default all
   */
  fields: string;
  /**
   * Id Attachment
   * @description The unique identifier of the specific attachment to be retrieved from the card.
   */
  idAttachment?: string;
  /**
   * Id Card
   * @description The unique identifier or the short link of the Trello card from which to retrieve the attachment.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT tool output.
 */
type TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BOARD_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_BOARD_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Specifies the fields of the board to be returned. Use 'all' to retrieve all available fields, or provide a comma-separated list of specific fields. Allowed fields include: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, and url.
   * @default all
   */
  fields: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card for which to retrieve board information.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BOARD_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_BOARD_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD tool input.
 */
type TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD_INPUT = {
  /**
   * Field
   * @description Field from the card's parent board to retrieve. One of: `name`, `desc`, `descData`, `closed`, `idMemberCreator`, `idOrganization`, `pinned`, `url`, `shortUrl`, `prefs`, `labelNames`, `starred`, `limits`, `memberships`, `enterpriseOwned`.
   */
  field?: string;
  /**
   * Id Card
   * @description ID or short link of the card.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD tool output.
 */
type TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_BY_ID_CARD_INPUT = {
  /**
   * Action Fields
   * @description Fields for actions: 'all' or comma-separated (e.g., 'data,date'). Valid: data, date, idMemberCreator, type.
   * @default all
   */
  action_fields: string;
  /**
   * Action Member Creator Fields
   * @description Fields for the action creator: 'all' or comma-separated (e.g., 'avatarHash,fullName'). Valid: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  action_memberCreator_fields: string;
  /**
   * Actions
   * @description Actions to return: 'all' or a comma-separated list of types (e.g., 'addAttachmentToCard', 'commentCard', 'updateCard'). For a complete list of types, consult the Trello API documentation.
   */
  actions?: string;
  /**
   * Actions Display
   * @description Return display-friendly action data. Use 'true' or 'false'.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Include entities (e.g., card, board, member) for actions. Use 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Limit
   * @description Maximum actions to return (0-1000).
   * @default 50
   */
  actions_limit: string;
  /**
   * Attachment Fields
   * @description Fields for attachments: 'all' or comma-separated (e.g., 'bytes,date'). Valid: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, url.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Include attachments: 'true' (all), 'false' (none), or 'cover' (card cover only).
   */
  attachments?: string;
  /**
   * Board
   * @description Include data for the card's board. Use 'true' or 'false'.
   */
  board?: string;
  /**
   * Board Fields
   * @description Fields for the board: 'all' or comma-separated (e.g., 'name,desc'). Valid: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default name, desc, descData, closed, idOrganization, pinned, url and prefs
   */
  board_fields: string;
  /**
   * Check Item State Fields
   * @description Fields for check item states: 'all' or comma-separated (e.g., 'idCheckItem,state'). Valid: idCheckItem, state.
   * @default all
   */
  checkItemState_fields: string;
  /**
   * Check Item States
   * @description Include check item states. Use 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklist Fields
   * @description Fields for checklists: 'all' or comma-separated (e.g., 'idBoard,name'). Valid: idBoard, idCard, name, pos.
   * @default all
   */
  checklist_fields: string;
  /**
   * Checklists
   * @description Include checklists: 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Fields for the card: 'all' or comma-separated (e.g., 'name,desc'). Valid: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url.
   * @default badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url
   */
  fields: string;
  /**
   * Id Card
   * @description The unique identifier (ID) or short link of the Trello card.
   */
  idCard?: string;
  /**
   * List
   * @description Include data for the card's list. Use 'true' or 'false'.
   */
  list?: string;
  /**
   * List Fields
   * @description Fields for the list: 'all' or comma-separated (e.g., 'name,pos'). Valid: closed, idBoard, name, pos, subscribed.
   * @default all
   */
  list_fields: string;
  /**
   * Member Voted Fields
   * @description Fields for members who voted: 'all' or comma-separated (e.g., 'avatarHash,fullName'). Valid: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  memberVoted_fields: string;
  /**
   * Member Fields
   * @description Fields for members: 'all' or comma-separated (e.g., 'avatarHash,fullName'). Valid: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Include member data. Use 'true' or 'false'.
   */
  members?: string;
  /**
   * Members Voted
   * @description Include data for members who voted. Use 'true' or 'false'.
   */
  membersVoted?: string;
  /**
   * Sticker Fields
   * @description Fields for stickers: 'all' or comma-separated (e.g., 'image,left'). Valid: image, imageScaled, imageUrl, left, rotate, top, zIndex.
   * @default all
   */
  sticker_fields: string;
  /**
   * Stickers
   * @description Include sticker data. Use 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the retrieved Trello card.
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
 * Type of TRELLO's TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD tool input.
 */
type TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the card. Valid values include standard card fields like 'name', 'desc', 'due', 'closed', 'idBoard', 'idList', 'pos', 'shortUrl', 'url', 'subscribed', as well as custom fields.
   */
  field?: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD tool output.
 */
type TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD_INPUT = {
  /**
   * Card Fields
   * @description Specifies the fields to return for associated card objects. Use 'all' for all fields (default), or provide a comma-separated list of desired fields. Available fields: 'badges', 'checkItemStates', 'closed', 'dateLastActivity', 'desc', 'descData', 'due', 'email', 'idAttachmentCover', 'idBoard', 'idChecklists', 'idLabels', 'idList', 'idMembers', 'idMembersVoted', 'idShort', 'labels', 'manualCoverAttachment', 'name', 'pos', 'shortLink', 'shortUrl', 'subscribed', 'url'.
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Filters which cards' checklists are retrieved. Valid values: 'all' (all cards), 'closed' (closed cards), 'none' (no cards, default), 'open' (open cards), or 'visible' (cards visible to the user).
   * @default none
   */
  cards: string;
  /**
   * Check Item Fields
   * @description Specifies the fields to return for each check item. Use 'all' for all fields, or provide a comma-separated list of desired fields (default is 'name,nameData,pos,state'). Available fields: 'name', 'nameData', 'pos', 'state', 'type'.
   * @default name, nameData, pos and state
   */
  checkItem_fields: string;
  /**
   * Check Items
   * @description Filters the check items to be returned within each checklist. Valid values: 'all' (default) or 'none'.
   * @default all
   */
  checkItems: string;
  /**
   * Fields
   * @description Specifies the fields to return for each checklist. Use 'all' for all fields (default), or provide a comma-separated list of desired fields. Available fields: 'idBoard', 'idCard', 'name', 'pos'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters which checklists are returned. Valid values: 'all' (default, returns all checklists) or 'none' (returns no checklists).
   * @default all
   */
  filter: string;
  /**
   * Id Card
   * @description The ID or shortlink of the Trello card.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response, typically an array of checklist objects associated with the card, each including its check items.
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
 * Type of TRELLO's TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Specifies the fields to return for each check item state. Use 'all' to retrieve all available fields, or provide a comma-separated list of specific fields. Valid fields are 'idCheckItem' and 'state'.
   * @default all
   */
  fields: string;
  /**
   * Id Card
   * @description The unique identifier (ID) or short link of the Trello card for which to retrieve check item states.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the check item states. The structure of this dictionary will provide details for each check item, such as its ID (`idCheckItem`) and its current `state` (e.g., 'complete' or 'incomplete').
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
 * Type of TRELLO's TRELLO_GET_CARDS_LIST_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_LIST_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Fields of the list to return. Use 'all' for all fields, or a comma-separated list of specific field names (e.g., 'name,pos'). Allowed: 'closed', 'idBoard', 'name', 'pos', 'subscribed'.
   * @default all
   */
  fields: string;
  /**
   * Id Card
   * @description The card's unique ID (typically 24 characters) or its shortLink (e.g., 'AbCdEfGh' from the card URL).
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_LIST_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_LIST_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description Details of the list the card belongs to; returned fields depend on the 'fields' request parameter.
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
 * Type of TRELLO's TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD tool input.
 */
type TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the list associated with the card. Common valid Trello list fields include `name`, `closed` (status), `pos` (position), `idBoard`, or `subscribed`.
   */
  field?: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card. The list associated with this card will be targeted.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD tool output.
 */
type TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field's value. Typically, the key is `'_value'` and its corresponding value is the actual data of the field retrieved from the list.
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
 * Type of TRELLO's TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of member fields to return (e.g., `avatarHash`, `fullName`, `username`), or 'all'. Valid fields: `avatarHash`, `bio`, `bioData`, `confirmed`, `fullName`, `idPremOrgsAdmin`, `initials`, `memberType`, `products`, `status`, `url`, `username`.
   * @default avatarHash, fullName, initials and username
   */
  fields: string;
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card from which to retrieve members. Card IDs are typically 24-character hexadecimal strings.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description The response from the Trello API. This endpoint typically returns a list of member objects associated with the card. Each object contains details for a member, with the specific fields included being determined by the `fields` parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of member fields to return, or 'all'. Valid fields: `avatarHash`, `bio`, `bioData`, `confirmed`, `fullName`, `idPremOrgsAdmin`, `initials`, `memberType`, `products`, `status`, `url`, `username`.
   * @default avatarHash, fullName, initials and username
   */
  fields: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description API response containing a list of member objects who voted on the card, with details as specified by the 'fields' parameter.
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
 * Type of TRELLO's TRELLO_GET_CARDS_STICKERS_BY_ID_CARD tool input.
 */
type TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_INPUT = {
  /**
   * Fields
   * @description Sticker fields to return. Either 'all' for all fields, or a comma-separated list of specific field names (e.g., `image`, `imageScaled`, `imageUrl`, `left`, `rotate`, `top`, `zIndex`).
   * @default all
   */
  fields: string;
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card from which to retrieve stickers.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_STICKERS_BY_ID_CARD tool output.
 */
type TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER tool input.
 */
type TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_INPUT = {
  /**
   * Fields
   * @description Specifies sticker fields to return (e.g., 'image,top,left'). Allowed: 'image', 'imageScaled', 'imageUrl', 'left', 'rotate', 'top', 'zIndex'. Use 'all' (default) to retrieve all fields.
   * @default all
   */
  fields: string;
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card to which the sticker belongs.
   */
  idCard?: string;
  /**
   * Id Sticker
   * @description The ID of the sticker to retrieve.
   */
  idSticker?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER tool output.
 */
type TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST tool input.
 */
type TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of board fields to return (e.g., 'name,desc') or 'all'. Valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id Checklist
   * @description ID of the Trello checklist.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST tool output.
 */
type TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description Board properties. Returned fields are determined by the 'fields' request parameter.
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
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD tool input.
 */
type TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The board field to retrieve (e.g., 'name', 'desc', 'url', 'idOrganization', 'shortUrl').
   */
  field?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD tool output.
 */
type TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description The value of the requested board field. For example, if the 'name' field was requested, the response might be `{"_value": "Board Name"}`.
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
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Card Fields
   * @description Specifies which card fields to return if 'cards' is not 'none'. Use 'all' for all fields, or provide a comma-separated list of desired fields. Available fields: 'badges', 'checkItemStates', 'closed', 'dateLastActivity', 'desc', 'descData', 'due', 'email', 'idAttachmentCover', 'idBoard', 'idChecklists', 'idLabels', 'idList', 'idMembers', 'idMembersVoted', 'idShort', 'labels', 'manualCoverAttachment', 'name', 'pos', 'shortLink', 'shortUrl', 'subscribed', 'url'. Default: 'all'.
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Determines whether to return card information for the checklist. Valid values: 'all', 'closed', 'none', 'open', 'visible'. Default: 'none'.
   * @default none
   */
  cards: string;
  /**
   * Check Item Fields
   * @description Specifies which fields of the check items to return if 'checkItems' is 'all'. Accepts 'all' or a comma-separated list of: 'name', 'nameData', 'pos', 'state', 'type'. Default parameter value is the string 'name, nameData, pos and state', which effectively returns the name, nameData, position, and state of check items.
   * @default name, nameData, pos and state
   */
  checkItem_fields: string;
  /**
   * Check Items
   * @description Determines whether to return check items for the checklist. Valid values: 'all', 'none'. Default: 'all'.
   * @default all
   */
  checkItems: string;
  /**
   * Fields
   * @description Specifies which checklist fields to return. Use 'all' for all fields, or provide a comma-separated list of: 'idBoard', 'idCard', 'name', 'pos'. Default: 'all'.
   * @default all
   */
  fields: string;
  /**
   * Id Checklist
   * @description The unique identifier of the checklist to retrieve.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD tool input.
 */
type TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The name of the checklist field whose value is to be retrieved (e.g., 'name', 'idCard', 'pos', 'idBoard', 'due'); refer to Trello API documentation for all valid field names.
   */
  field?: string;
  /**
   * Id Checklist
   * @description The unique identifier of the Trello checklist.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD tool output.
 */
type TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field's value. Typically, this is structured as `{"_value": <value>}`, where `<value>` is the actual data of the specified field from the checklist.
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
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Actions
   * @description Action types to return for each card (e.g., 'all', 'commentCard,createCard'). Comma-separated list or 'all'.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description Attachment fields to return (e.g., 'name,url,bytes'). Comma-separated list or 'all'.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Whether to include attachments: 'true' for all, 'false' to omit, or 'cover' for card cover attachments.
   */
  attachments?: string;
  /**
   * Before
   * @description Return cards updated on or before this date/time (ISO 8601 format or 'null').
   */
  before?: string;
  /**
   * Check Item States
   * @description Whether to include check item states on cards ('true' or 'false').
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Whether to include checklist data (beyond the main one) on the cards ('all' or 'none').
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Card fields to return (e.g., 'name,desc,due'). Comma-separated list or 'all'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filter cards by status ('all', 'closed', 'none', 'open').
   * @default open
   */
  filter: string;
  /**
   * Id Checklist
   * @description The ID of the checklist to retrieve cards from.
   */
  idChecklist?: string;
  /**
   * Limit
   * @description Maximum number of cards to return (1-1000, e.g., '50').
   */
  limit?: string;
  /**
   * Member Fields
   * @description Member fields to return (e.g., 'fullName,username,bio'). Comma-separated list or 'all'.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Whether to include member data on cards ('true' or 'false').
   */
  members?: string;
  /**
   * Since
   * @description Return cards updated on or after this date/time (ISO 8601 format or 'null').
   */
  since?: string;
  /**
   * Stickers
   * @description Whether to include sticker data on cards ('true' or 'false').
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER tool input.
 */
type TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description Filter by a specific card ID or a general status string (e.g., 'all', 'open', 'closed', 'none', 'visible').
   */
  filter?: string;
  /**
   * Id Checklist
   * @description Unique identifier of the checklist.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER tool output.
 */
type TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description The card object if filtered by ID, or one card from any matching set if a general status filter is used.
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
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each check item (e.g., 'name,pos,state'), or 'all' for all fields. Available fields: name, nameData, pos, state, type.
   * @default name, nameData, pos and state
   */
  fields: string;
  /**
   * Filter
   * @description Specifies which check items to retrieve: 'all' for all items, or 'none' for no items.
   * @default all
   */
  filter: string;
  /**
   * Id Checklist
   * @description The unique identifier of the Trello checklist.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECK_ITEM_BY_ID tool input.
 */
type TRELLO_GET_CHECK_ITEM_BY_ID_INPUT = {
  /**
   * Fields
   * @description Determines which fields to include in the response. Specify 'all' or a comma-separated list of: 'name', 'nameData', 'pos', 'state', or 'type'.
   * @default name,nameData,pos,state
   */
  fields: string;
  /**
   * Id Check Item
   * @description The ID of the check item to retrieve.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist containing the check item.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_CHECK_ITEM_BY_ID tool output.
 */
type TRELLO_GET_CHECK_ITEM_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the check item.
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
 * Type of TRELLO's TRELLO_GET_LABELS_BOARD_BY_ID_LABEL tool input.
 */
type TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_INPUT = {
  /**
   * Fields
   * @description Specifies the fields of the board to be returned, as a comma-separated list of specific field names. Allowed values for the list include: 'closed', 'dateLastActivity', 'dateLastView', 'desc', 'descData', 'idOrganization', 'invitations', 'invited', 'labelNames', 'memberships', 'name', 'pinned', 'powerUps', 'prefs', 'shortLink', 'shortUrl', 'starred', 'subscribed', 'url'.
   * @default all
   */
  fields: string;
  /**
   * Id Label
   * @description The unique identifier of the Trello label.
   */
  idLabel?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LABELS_BOARD_BY_ID_LABEL tool output.
 */
type TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the board associated with the specified label. The exact fields returned depend on the 'fields' parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD tool input.
 */
type TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the board to retrieve. Common fields include 'id', 'name', 'desc', 'url', 'prefs', 'organization', 'memberships'.
   */
  field?: string;
  /**
   * Id Label
   * @description The ID of the label.
   */
  idLabel?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD tool output.
 */
type TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_LABELS_BY_ID_LABEL tool input.
 */
type TRELLO_GET_LABELS_BY_ID_LABEL_INPUT = {
  /**
   * Fields
   * @description Fields to return for the label. Allowed: `color`, `idBoard`, `name`, `uses`.
   * @default all
   */
  fields: string;
  /**
   * Id Label
   * @description The unique identifier of the Trello label to retrieve.
   */
  idLabel?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LABELS_BY_ID_LABEL tool output.
 */
type TRELLO_GET_LABELS_BY_ID_LABEL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties of the Trello label. The specific fields returned are determined by the `fields` parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST tool input.
 */
type TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST_INPUT = {
  /**
   * Before
   * @description Return actions created before this date (ISO 8601 or Trello date string). Null or unspecified means no end date filter.
   */
  before?: string;
  /**
   * Display
   * @description Whether to include displayable information (e.g., human-readable text) for actions. If None, Trello's default (typically false) is used.
   */
  display?: string;
  /**
   * Entities
   * @description Whether to include related entities. If None, Trello's default (typically false) is used.
   */
  entities?: string;
  /**
   * Fields
   * @description Action fields to return. Use 'all' or a comma-separated list (e.g., data, date). Valid fields: data, date, idMemberCreator, or type.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters actions by type. Use 'all' or a comma-separated list of types (e.g., commentCard, createCard). Valid types: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   * @default all
   */
  filter: string;
  /**
   * Format
   * @description Format of returned actions. Valid: 'count', 'list', 'minimal'.
   * @default list
   */
  format: string;
  /**
   * Id List
   * @description The ID of the Trello list for which to retrieve actions.
   */
  idList?: string;
  /**
   * Id Models
   * @description Comma-separated model IDs (e.g., card IDs) to filter actions. If None, no model ID filter is applied.
   */
  idModels?: string;
  /**
   * Limit
   * @description Maximum actions per page (0-1000).
   * @default 5
   */
  limit: string;
  /**
   * Member
   * @description Whether to include the member object (user who performed the action). If None, Trello's default applies.
   */
  member?: string;
  /**
   * Member Creator
   * @description Whether to include the memberCreator object (action creator). If None, Trello's default applies.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Fields for memberCreator object if 'memberCreator' is true. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description Fields for the member object if 'member' is true. Use 'all' or a comma-separated list. Valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Page
   * @description Page number for pagination. Note: `page * limit` must be < 1000.
   * @default 1
   */
  page: string;
  /**
   * Since
   * @description Return actions created after this date (ISO 8601, Trello date string, or 'lastView'). Null or unspecified means no start date filter.
   */
  since?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST tool output.
 */
type TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_BOARD_BY_ID_LIST tool input.
 */
type TRELLO_GET_LISTS_BOARD_BY_ID_LIST_INPUT = {
  /**
   * Fields
   * @description Board fields to return, comma-separated. Use 'all' for all fields. Valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id List
   * @description The unique identifier of the Trello list for which to retrieve the parent board information.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_BOARD_BY_ID_LIST tool output.
 */
type TRELLO_GET_LISTS_BOARD_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the board to which the specified list belongs. The content and structure of this dictionary depend on the 'fields' parameter provided in the request.
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
 * Type of TRELLO's TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD tool input.
 */
type TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the board to retrieve. Only one field can be requested at a time.
   */
  field?: string;
  /**
   * Id List
   * @description The unique identifier of the Trello list.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD tool output.
 */
type TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary where the key is the requested field name and the value is the field's value from the board. For example, if `field` was 'name', this might be `{'name': 'Project Board'}`.
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
 * Type of TRELLO's TRELLO_GET_LISTS_BY_ID_LIST tool input.
 */
type TRELLO_GET_LISTS_BY_ID_LIST_INPUT = {
  /**
   * Board
   * @description Determines whether the board object the list belongs to is returned. Set to 'true' to include board details or 'false' to omit them.
   */
  board?: string;
  /**
   * Board Fields
   * @description Specifies the fields for the board to be returned if 'board' is 'true'. Valid values are 'all' or a comma-separated list of board fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, or url.
   * @default name, desc, descData, closed, idOrganization, pinned, url and prefs
   */
  board_fields: string;
  /**
   * Card Fields
   * @description Specifies the fields for cards to be returned if 'cards' is not 'none'. Valid values are 'all' or a comma-separated list of card fields: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url.
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Determines whether cards are returned as part of the list data. Valid values are 'all', 'closed', 'none', or 'open'.
   * @default none
   */
  cards: string;
  /**
   * Fields
   * @description Specifies the fields for the list itself to be returned. Valid values are 'all' or a comma-separated list of list fields: closed, idBoard, name, pos, or subscribed.
   * @default name, closed, idBoard and pos
   */
  fields: string;
  /**
   * Id List
   * @description The ID of the Trello list to retrieve.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_BY_ID_LIST tool output.
 */
type TRELLO_GET_LISTS_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD tool input.
 */
type TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the list object. Only one field can be retrieved per request.
   */
  field?: string;
  /**
   * Id List
   * @description The unique identifier of the Trello list.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD tool output.
 */
type TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value.
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
 * Type of TRELLO's TRELLO_GET_LISTS_CARDS_BY_ID_LIST tool input.
 */
type TRELLO_GET_LISTS_CARDS_BY_ID_LIST_INPUT = {
  /**
   * Actions
   * @description Determines what actions are returned. Use 'all' to return all actions, or provide a comma-separated list of specific action types. Valid action types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description Fields to include for attachments. Use 'all' or a comma-separated list of specific fields. Valid fields include: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, or url. Defaults to 'all'.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Specify whether to include attachments. Accepted string values are 'true', 'false', or 'cover' (to retrieve only card cover attachments).
   */
  attachments?: string;
  /**
   * Before
   * @description Filter cards to include only those created or updated before this date. Provide a date string (e.g., YYYY-MM-DD or an ISO 8601 datetime string) or 'null'.
   */
  before?: string;
  /**
   * Check Item States
   * @description Specify whether to include check item states. Accepted string values are 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Specify whether to include checklists. Valid values are 'all' or 'none'. Defaults to 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Fields to include for cards. Use 'all' or a comma-separated list of specific fields. Valid fields include: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url. Defaults to 'all'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filter cards by their state. Valid values are 'all', 'closed', 'none', or 'open'. Defaults to 'open'.
   * @default open
   */
  filter: string;
  /**
   * Id List
   * @description The ID of the list from which to retrieve cards.
   */
  idList?: string;
  /**
   * Limit
   * @description The maximum number of cards to return. Must be a number from 1 to 1000, provided as a string. The default integer value `2` will be automatically converted to the string `'2'`.
   * @default 2
   */
  limit: string;
  /**
   * Member Fields
   * @description Fields to include for members. Use 'all' or a comma-separated list of specific fields. Valid fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username. Defaults to 'avatarHash,fullName,initials,username'.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Specify whether to include members. Accepted string values are 'true' or 'false'.
   */
  members?: string;
  /**
   * Since
   * @description Filter cards to include only those created or updated after this date. Provide a date string (e.g., YYYY-MM-DD or an ISO 8601 datetime string) or 'null'.
   */
  since?: string;
  /**
   * Stickers
   * @description Specify whether to include stickers. Accepted string values are 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_CARDS_BY_ID_LIST tool output.
 */
type TRELLO_GET_LISTS_CARDS_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER tool input.
 */
type TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description The filter criterion to apply to the cards in the list. Common values include 'open', 'closed', or 'all'.
   */
  filter?: string;
  /**
   * Id List
   * @description The ID of the Trello list from which to retrieve cards.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER tool output.
 */
type TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description The response from the Trello API. This typically includes a list of card objects from the specified list that match the given filter.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER_INPUT = {
  /**
   * Before
   * @description Filters actions to include only those that occurred on or before this date. Can be a valid date string (ISO 8601 format recommended) or 'null'.
   */
  before?: string;
  /**
   * Display
   * @description Determines whether to include display-friendly names for the objects referenced in the actions. Set to 'true' to include, or 'false' to exclude.
   */
  display?: string;
  /**
   * Entities
   * @description Determines whether to include data for the objects (e.g., cards, boards) referenced in the actions. Set to 'true' to include, or 'false' to exclude.
   */
  entities?: string;
  /**
   * Fields
   * @description A comma-separated list of action fields to be returned. Available fields: data, date, idMemberCreator, type.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description A comma-separated list of action types to filter by. Available filters: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   * @default all
   */
  filter: string;
  /**
   * Format
   * @description The format of the returned actions. Valid values: 'count' (returns only the count of actions), 'list' (returns actions as a list), 'minimal' (returns minimal action data).
   * @default list
   */
  format: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member whose actions are to be retrieved.
   */
  idMember?: string;
  /**
   * Id Models
   * @description A comma-separated list of model IDs (e.g., card IDs, board IDs) to filter actions by. Only actions related to these models will be returned.
   */
  idModels?: string;
  /**
   * Limit
   * @description The maximum number of actions to return. Must be a number between 0 and 1000 (inclusive).
   * @default 50
   */
  limit: string;
  /**
   * Member
   * @description Determines whether to include the member object (details of the member who performed the action) within each action's data. Set to 'true' to include, or 'false' to exclude.
   */
  member?: string;
  /**
   * Member Creator
   * @description Determines whether to include the `memberCreator` object (details of the member who created the item/action) within each action's data. Set to 'true' to include, or 'false' to exclude.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description A comma-separated list of fields to include for the `memberCreator` object (if `memberCreator` is 'true'). Use 'all' for all available fields. Available fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description A comma-separated list of fields to include for the member object (if `member` is 'true'). Use 'all' for all available fields. Available fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Page
   * @description The page number for pagination (0-indexed). Note: `page * limit` must result in an offset less than 1000 actions from the start of the list.
   * @default 0
   */
  page: string;
  /**
   * Since
   * @description Filters actions to include only those that occurred on or after this date. Can be a valid date string (ISO 8601 format recommended), 'null', or 'lastView' (actions since the member last viewed the relevant context).
   */
  since?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_INPUT = {
  /**
   * Action Fields
   * @description Specifies fields for returned actions if actions are requested. Accepts 'all' or a comma-separated list: 'data', 'date', 'idMemberCreator', 'type'.
   * @default all
   */
  action_fields: string;
  /**
   * Actions
   * @description Specifies which actions to return for each board. Accepts 'all' or a comma-separated list of action types. Possible action types: 'addAttachmentToCard', 'addChecklistToCard', 'addMemberToBoard', 'addMemberToCard', 'addMemberToOrganization', 'addToOrganizationBoard', 'commentCard', 'convertToCardFromCheckItem', 'copyBoard', 'copyCard', 'copyCommentCard', 'createBoard', 'createCard', 'createList', 'createOrganization', 'deleteAttachmentFromCard', 'deleteBoardInvitation', 'deleteCard', 'deleteOrganizationInvitation', 'disablePowerUp', 'emailCard', 'enablePowerUp', 'makeAdminOfBoard', 'makeNormalMemberOfBoard', 'makeNormalMemberOfOrganization', 'makeObserverOfBoard', 'memberJoinedTrello', 'moveCardFromBoard', 'moveCardToBoard', 'moveListFromBoard', 'moveListToBoard', 'removeChecklistFromCard', 'removeFromOrganizationBoard', 'removeMemberFromCard', 'unconfirmedBoardInvitation', 'unconfirmedOrganizationInvitation', 'updateBoard', 'updateCard', 'updateCard:closed', 'updateCard:desc', 'updateCard:idList', 'updateCard:name', 'updateCheckItemStateOnCard', 'updateChecklist', 'updateList', 'updateList:closed', 'updateList:name', 'updateMember', 'updateOrganization'.
   */
  actions?: string;
  /**
   * Actions Entities
   * @description Determines whether to return entity data for actions. Valid values: 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Format
   * @description The format for returned actions. Valid values: 'count', 'list', or 'minimal'.
   * @default list
   */
  actions_format: string;
  /**
   * Actions Limit
   * @description The maximum number of actions to return, from 0 to 1000.
   * @default 5
   */
  actions_limit: string;
  /**
   * Actions Since
   * @description Filters actions to those that occurred after this date, or accepts 'null' or 'lastView'.
   */
  actions_since?: string;
  /**
   * Fields
   * @description Specifies the fields to return for each board. Accepts 'all' or a comma-separated list of field names. Possible field names: 'closed', 'dateLastActivity', 'dateLastView', 'desc', 'descData', 'idOrganization', 'invitations', 'invited', 'labelNames', 'memberships', 'name', 'pinned', 'powerUps', 'prefs', 'shortLink', 'shortUrl', 'starred', 'subscribed', 'url'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the boards returned. Valid values are 'all' or a comma-separated list of: 'closed', 'members', 'open', 'organization', 'pinned', 'public', 'starred', 'unpinned'.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Lists
   * @description Filters the lists returned for each board. Valid values: 'all', 'closed', 'none', 'open'.
   * @default open
   */
  lists: string;
  /**
   * Memberships
   * @description Filters boards by the member's membership type. Accepts 'all' or a comma-separated list of: 'active', 'admin', 'deactivated', 'me', 'normal'.
   * @default none
   */
  memberships: string;
  /**
   * Organization
   * @description Determines whether to return organization data for boards. Valid values: 'true' or 'false'.
   */
  organization?: string;
  /**
   * Organization Fields
   * @description Specifies the fields to return for the organization if 'organization' is 'true'. Accepts 'all' or a comma-separated list of field names. Possible field names: 'billableMemberCount', 'desc', 'descData', 'displayName', 'idBoards', 'invitations', 'invited', 'logoHash', 'memberships', 'name', 'powerUps', 'prefs', 'premiumFeatures', 'products', 'url', 'website'.
   * @default name and displayName
   */
  organization_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This typically includes a list of board objects that the member is associated with. The specific structure and content will depend on the query parameters like 'fields', 'actions', etc., used in the request.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER tool input.
 */
type TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description The filter to apply when retrieving boards. Determines which subset of boards is returned.
   * @default open
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member whose boards are to be retrieved.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER tool output.
 */
type TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of boards that match the specified filter.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_INPUT = {
  /**
   * Fields
   * @description Board fields to return: 'all' or a comma-separated list (e.g., name,url). Valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id Member
   * @description ID or username of the Trello member whose pending board invitations are to be retrieved.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD tool input.
 */
type TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the invited boards to retrieve. This refers to a property of the board.
   */
  field?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member whose invited board field is to be retrieved.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD tool output.
 */
type TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description The response containing the requested field data for the invited boards. The structure will depend on the field requested.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT = {
  /**
   * Filter
   * @description Filters the types of board backgrounds to return. Allowed values: 'all', 'custom', 'default', 'none', 'premium'.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The API response payload. This field contains an array of board background objects. Each object includes details such as the background's ID, type (e.g., custom, default, premium), image URLs (if applicable), color, and display preferences like tiling and brightness.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This is expected to hold a list of the member's starred boards. Each starred board object typically includes `id` (the board star ID), `idBoard` (the ID of the starred board), and `pos` (the star's position).
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR tool input.
 */
type TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_INPUT = {
  /**
   * Id Board Star
   * @description The unique identifier of the board star. Each starred board has a unique ID, which is used to fetch its specific details.
   */
  idBoardStar?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member. This specifies whose board star information is being retrieved.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR tool output.
 */
type TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the board star, such as the associated board's ID, the position of the star, and other relevant metadata.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_BY_ID_MEMBER_INPUT = {
  /**
   * Action Before
   * @description Retrieve actions created before this date/time (ISO 8601), or 'null' for no restriction.
   */
  action_before?: string;
  /**
   * Action Fields
   * @description Fields to return for each action. Valid values: 'all' or a comma-separated list (e.g., 'data,date').
   * @default all
   */
  action_fields: string;
  /**
   * Action Since
   * @description Retrieve actions created after this date/time (ISO 8601 or 'lastView'), or 'null' for no restriction.
   */
  action_since?: string;
  /**
   * Actions
   * @description Filters actions by type. Valid values: 'all' or a comma-separated list of action types (e.g., addAttachmentToCard, commentCard, createBoard).
   */
  actions?: string;
  /**
   * Actions Display
   * @description Include display information for actions. Valid values: 'true', 'false'.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Include related entities in actions. Valid values: 'true', 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Limit
   * @description Maximum number of actions to return (0-1000).
   * @default 5
   */
  actions_limit: string;
  /**
   * Board Backgrounds
   * @description Filters board backgrounds. Valid values: 'all', 'custom', 'default', 'none', 'premium'.
   * @default none
   */
  boardBackgrounds: string;
  /**
   * Board Stars
   * @description Include information about the member's starred boards. Valid values: 'true', 'false'.
   */
  boardStars?: string;
  /**
   * Board Action Fields
   * @description Fields to return for each board action. Valid values: 'all' or a comma-separated list (e.g., 'data,date').
   * @default all
   */
  board_action_fields: string;
  /**
   * Board Actions
   * @description Filters board actions by type. Valid values: 'all' or a comma-separated list of action types (e.g., createCard, updateBoard).
   */
  board_actions?: string;
  /**
   * Board Actions Display
   * @description Include display information for board actions. Valid values: 'true', 'false'.
   */
  board_actions_display?: string;
  /**
   * Board Actions Entities
   * @description Include related entities in board actions. Valid values: 'true', 'false'.
   */
  board_actions_entities?: string;
  /**
   * Board Actions Format
   * @description Format for board actions. Valid values: 'count', 'list', 'minimal'.
   * @default list
   */
  board_actions_format: string;
  /**
   * Board Actions Limit
   * @description Maximum number of board actions to return (0-1000).
   * @default 50
   */
  board_actions_limit: string;
  /**
   * Board Actions Since
   * @description Retrieve board actions created after this date/time (ISO 8601 or 'lastView'), or 'null' for no restriction.
   */
  board_actions_since?: string;
  /**
   * Board Fields
   * @description Fields to return for each board. Valid values: 'all' or a comma-separated list (e.g., 'name,idOrganization').
   * @default name, closed, idOrganization and pinned
   */
  board_fields: string;
  /**
   * Board Lists
   * @description Filters lists on boards. Valid values: 'all', 'closed', 'none', 'open'.
   * @default open
   */
  board_lists: string;
  /**
   * Board Memberships
   * @description Filters board memberships. Valid values: 'all' or a comma-separated list (e.g., 'active,admin').
   * @default none
   */
  board_memberships: string;
  /**
   * Board Organization
   * @description Include the organization for each board. Valid values: 'true', 'false'.
   */
  board_organization?: string;
  /**
   * Board Organization Fields
   * @description Fields to return for the board's organization. Valid values: 'all' or a comma-separated list (e.g., 'name,displayName').
   * @default name and displayName
   */
  board_organization_fields: string;
  /**
   * Boards
   * @description Filters boards. Valid values: 'all' or a comma-separated list (e.g., 'open,starred').
   */
  boards?: string;
  /**
   * Boards Invited
   * @description Filters boards the member has been invited to. Valid values: 'all' or a comma-separated list (e.g., 'open,starred').
   */
  boardsInvited?: string;
  /**
   * Boards Invited Fields
   * @description Fields to return for boards the member has been invited to. Valid values: 'all' or a comma-separated list (e.g., 'name,idOrganization').
   * @default name, closed, idOrganization and pinned
   */
  boardsInvited_fields: string;
  /**
   * Card Attachment Fields
   * @description Fields to return for card attachments. Valid values: 'all' or a comma-separated list (e.g., 'url,name').
   * @default url and previews
   */
  card_attachment_fields: string;
  /**
   * Card Attachments
   * @description Include card attachments. Valid values: 'true', 'false', 'cover'.
   */
  card_attachments?: string;
  /**
   * Card Fields
   * @description Fields to return for each card. Valid values: 'all' or a comma-separated list (e.g., 'name,desc').
   * @default all
   */
  card_fields: string;
  /**
   * Card Member Fields
   * @description Fields to return for card members. Valid values: 'all' or a comma-separated list (e.g., 'fullName,username').
   * @default avatarHash, fullName, initials and username
   */
  card_member_fields: string;
  /**
   * Card Members
   * @description Include member objects for each card. Valid values: 'true', 'false'.
   */
  card_members?: string;
  /**
   * Card Stickers
   * @description Include sticker information for cards. Valid values: 'true', 'false'.
   */
  card_stickers?: string;
  /**
   * Cards
   * @description Filters cards. Valid values: 'all', 'closed', 'none', 'open', 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Custom Board Backgrounds
   * @description Filters custom board backgrounds. Valid values: 'all', 'none'.
   * @default none
   */
  customBoardBackgrounds: string;
  /**
   * Custom Emoji
   * @description Filters custom emoji. Valid values: 'all', 'none'.
   * @default none
   */
  customEmoji: string;
  /**
   * Custom Stickers
   * @description Filters custom stickers. Valid values: 'all', 'none'.
   * @default none
   */
  customStickers: string;
  /**
   * Fields
   * @description Member fields to return. Valid values: 'all' or a comma-separated list (e.g., 'fullName,username,email').
   * @default all
   */
  fields: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Notification Before
   * @description Retrieve notifications created before this notification ID, or 'null' for no restriction.
   */
  notification_before?: string;
  /**
   * Notification Fields
   * @description Fields to return for notifications. Valid values: 'all' or a comma-separated list (e.g., 'data,date,unread').
   * @default all
   */
  notification_fields: string;
  /**
   * Notification Member Creator
   * @description Include the member creator for notifications. Valid values: 'true', 'false'.
   */
  notification_memberCreator?: string;
  /**
   * Notification Member Creator Fields
   * @description Fields for the notification member creator. Valid values: 'all' or a comma-separated list (e.g., 'fullName,username').
   * @default avatarHash, fullName, initials and username
   */
  notification_memberCreator_fields: string;
  /**
   * Notification Since
   * @description Retrieve notifications created after this notification ID, or 'null' for no restriction.
   */
  notification_since?: string;
  /**
   * Notifications
   * @description Filters notifications by type. Valid values: 'all' or a comma-separated list of notification types (e.g., commentCard, addedToBoard).
   */
  notifications?: string;
  /**
   * Notifications Display
   * @description Include display information for notifications. Valid values: 'true', 'false'.
   */
  notifications_display?: string;
  /**
   * Notifications Entities
   * @description Include related entities in notifications. Valid values: 'true', 'false'.
   */
  notifications_entities?: string;
  /**
   * Notifications Limit
   * @description Maximum number of notifications to return (1-1000).
   * @default 50
   */
  notifications_limit: string;
  /**
   * Organization Fields
   * @description Fields to return for organizations. Valid values: 'all' or a comma-separated list (e.g., 'name,displayName').
   * @default all
   */
  organization_fields: string;
  /**
   * Organization Paid Account
   * @description Include paid account information for organizations. Valid values: 'true', 'false'.
   */
  organization_paid_account?: string;
  /**
   * Organizations
   * @description Filters organizations the member belongs to. Valid values: 'all', 'members', 'none', 'public'.
   * @default none
   */
  organizations: string;
  /**
   * Organizations Invited
   * @description Filters organizations the member has been invited to. Valid values: 'all', 'members', 'none', 'public'.
   * @default none
   */
  organizationsInvited: string;
  /**
   * Organizations Invited Fields
   * @description Fields to return for organizations the member has been invited to. Valid values: 'all' or a comma-separated list (e.g., 'name,displayName').
   * @default all
   */
  organizationsInvited_fields: string;
  /**
   * Paid Account
   * @description Include paid account information for the member. Valid values: 'true', 'false'.
   */
  paid_account?: string;
  /**
   * Saved Searches
   * @description Include the member's saved searches. Valid values: 'true', 'false'.
   */
  savedSearches?: string;
  /**
   * Tokens
   * @description Filters API tokens for the member. Valid values: 'all', 'none'.
   * @default none
   */
  tokens: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the member's details based on the requested fields and filters.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD tool input.
 */
type TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the member to retrieve.
   */
  field?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD tool output.
 */
type TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_INPUT = {
  /**
   * Actions
   * @description Filters actions on cards. 'all' or comma-separated Trello action types (e.g., `commentCard`, `createCard`).
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description Attachment fields if including attachments. 'all' or comma-separated (e.g., `name`, `url`, `date`).
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Include attachments: 'true' (all), 'false' (none), or 'cover' (card cover only).
   */
  attachments?: string;
  /**
   * Before
   * @description Return cards updated before this ISO 8601 date. 'null' or omit for no upper limit.
   */
  before?: string;
  /**
   * Check Item States
   * @description Include check item states: 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Include checklists: 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Card fields to return. 'all' or comma-separated (e.g., `name`, `due`, `idBoard`, `labels`).
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Card filter: 'all', 'closed', 'none', 'open', or 'visible'. 'visible' means cards on open boards member can see.
   * @default visible
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Limit
   * @description Max cards to return (1-1000). Trello's default applies if omitted.
   */
  limit?: string;
  /**
   * Member Fields
   * @description Member fields if 'members' is true. 'all' or comma-separated (e.g., `fullName`, `username`, `initials`).
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Include member details on cards: 'true' or 'false'.
   */
  members?: string;
  /**
   * Since
   * @description Return cards updated after this ISO 8601 date. 'null' or omit for no lower limit.
   */
  since?: string;
  /**
   * Stickers
   * @description Include stickers: 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER tool input.
 */
type TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description The filter to apply to the cards. This determines which cards are returned (e.g., all, open, closed).
   */
  filter?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member whose cards are to be retrieved.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER tool output.
 */
type TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of cards matching the filter criteria for the specified member. The structure of the card objects within this dictionary adheres to Trello's API definition for card objects.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT = {
  /**
   * Filter
   * @description Filter for custom board backgrounds. Valid values: 'all' or 'none'.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Details of the member's custom board backgrounds.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_INPUT = {
  /**
   * Filter
   * @description Controls which custom emojis are returned.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member for whom to retrieve custom emojis.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_INPUT = {
  /**
   * Filter
   * @description Specifies which custom stickers to return: 'all' for all stickers of the member, or 'none' for no stickers.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description ID (24-character hex) or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A list of custom sticker objects, each detailing its ID, URL, and scaled image versions.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The unique identifier (ID) or username of the Trello member. You can use 'me' to refer to the currently authenticated user.
   */
  idMember?: string;
  /**
   * Ix Last Update
   * @description The sequence number of the last update received. Use '-1' to retrieve all deltas from the beginning, or a positive integer to get changes that occurred after this update sequence number.
   */
  ixLastUpdate?: string;
  /**
   * Tags
   * @description A specific tag to filter the deltas. Only deltas associated with this tag will be returned, effectively subscribing to these types of changes.
   */
  tags?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of delta objects. Each delta object represents a specific change made by the member, and its structure varies depending on the type of change.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_INPUT = {
  /**
   * Before
   * @description Notification ID for pagination; returns notifications created before this ID.
   */
  before?: string;
  /**
   * Display
   * @description Include display-related information (e.g., translation keys). Set to 'true' for inclusion.
   */
  display?: string;
  /**
   * Entities
   * @description Include entity data (e.g., card, board names). Set to 'true' for inclusion.
   */
  entities?: string;
  /**
   * Fields
   * @description Comma-separated list of notification fields to return, or 'all'. Available fields: data, date, idMemberCreator, type, unread.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Comma-separated list of notification types to filter by, or 'all'. Refer to Trello API documentation for the complete list of available types.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the member.
   */
  idMember?: string;
  /**
   * Limit
   * @description Maximum notifications to return (1-1000).
   * @default 50
   */
  limit: string;
  /**
   * Member Creator
   * @description Include details of the notification's creator. Set 'true' to include.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Comma-separated list of fields for the member creator, or 'all'; applies if 'memberCreator' is 'true'. Available fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Page
   * @description Page number for pagination (0-100).
   * @default 0
   */
  page: string;
  /**
   * Read Filter
   * @description Filter by read status: 'all', 'read', or 'unread'.
   * @default all
   */
  read_filter: string;
  /**
   * Since
   * @description Notification ID for pagination; returns notifications created after this ID.
   */
  since?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER tool input.
 */
type TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description A comma-separated list of notification types. Use 'all' to fetch all types.
   */
  filter?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member. 'me' can be used for the token's owner.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER tool output.
 */
type TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_INPUT = {
  /**
   * Fields
   * @description Specifies which fields to include in the response. Use 'all' for all available fields, or provide a comma-separated list of specific fields. Available fields: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the types of organizations returned. Use 'all' for all organizations, 'members' for organizations where the member has a role, 'none' for organizations with no specific filter, or 'public' for public organizations.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Paid Account
   * @description Filters organizations based on whether they have a paid Trello account. Provide 'true' to list only organizations with a paid account, or 'false' for those without.
   */
  paid_account?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The raw response data from the Trello API, containing a list of organizations associated with the member.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER tool input.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description The filter to apply when retrieving organizations. Determines which organizations are returned based on the member's relationship to them.
   */
  filter?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER tool output.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_INPUT = {
  /**
   * Fields
   * @description Fields to return for invited organizations. Accepts 'all' or a comma-separated list (e.g., 'name,url', 'displayName,descData,idBoards'). Available: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website.
   * @default all
   */
  fields: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The Trello API JSON response as a dictionary, listing organizations the member has been invited to.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD tool input.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the invited organization to retrieve.
   */
  field?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD tool output.
 */
type TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the value of the requested field for an invited organization. For example, if 'name' is requested, the response might be `{"_value": "OrganizationName"}` or a similar structure reflecting the field's value.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member. The ID is a 24-character hexadecimal string. Usernames can also be used.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the saved searches for the specified member. Each key-value pair represents a saved search, where the key is the ID of the saved search and the value is an object containing details about the search, such as its name and query.
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
 * Type of TRELLO's TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER_INPUT = {
  /**
   * Filter
   * @description Filters the list of tokens. Use 'all' to retrieve all tokens or 'none' to retrieve no tokens.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member for whom to retrieve token information.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Dictionary holding a list of token metadata objects (e.g., token ID, creation date, associated application) for the member; actual token values are excluded for security.
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
 * Type of TRELLO's TRELLO_GET_MEMBER_BOARD_BACKGROUND tool input.
 */
type TRELLO_GET_MEMBER_BOARD_BACKGROUND_INPUT = {
  /**
   * Fields
   * @description Specifies fields for the board background response. Use 'all' for all fields, or a comma-separated list of specific field names (e.g., 'brightness,scaled'). Valid names: `brightness`, `fullSizeUrl`, `scaled`, `tile`.
   * @default all
   */
  fields: string;
  /**
   * Id Board Background
   * @description The ID of the specific custom board background to retrieve.
   */
  idBoardBackground?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_BOARD_BACKGROUND tool output.
 */
type TRELLO_GET_MEMBER_BOARD_BACKGROUND_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the retrieved board background.
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
 * Type of TRELLO's TRELLO_GET_MEMBER_CUSTOM_BG tool input.
 */
type TRELLO_GET_MEMBER_CUSTOM_BG_INPUT = {
  /**
   * Fields
   * @description Fields to return for the custom board background. Use 'all' or a comma-separated list. Allowed: `brightness`, `fullSizeUrl`, `scaled`, `tile`.
   * @default all
   */
  fields: string;
  /**
   * Id Board Background
   * @description Unique identifier of the custom board background to retrieve.
   */
  idBoardBackground?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_CUSTOM_BG tool output.
 */
type TRELLO_GET_MEMBER_CUSTOM_BG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_CUSTOM_EMOJI tool input.
 */
type TRELLO_GET_MEMBER_CUSTOM_EMOJI_INPUT = {
  /**
   * Fields
   * @description Determines which fields to include in the response for the custom emoji. Valid values are 'all' or a comma-separated list of field names (e.g., 'name', 'url'). Defaults to 'all'.
   * @default all
   */
  fields: string;
  /**
   * Id Custom Emoji
   * @description The ID of the custom emoji to be retrieved.
   */
  idCustomEmoji?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member. This identifies the owner of the custom emoji.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_CUSTOM_EMOJI tool output.
 */
type TRELLO_GET_MEMBER_CUSTOM_EMOJI_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_CUSTOM_STICKER tool input.
 */
type TRELLO_GET_MEMBER_CUSTOM_STICKER_INPUT = {
  /**
   * Fields
   * @description Specifies the fields to return for the custom sticker. Use 'all' (default) to return all fields, or provide a comma-separated list containing 'scaled' or 'url'.
   * @default all
   */
  fields: string;
  /**
   * Id Custom Sticker
   * @description The ID of the custom sticker to retrieve.
   */
  idCustomSticker?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_CUSTOM_STICKER tool output.
 */
type TRELLO_GET_MEMBER_CUSTOM_STICKER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties of the retrieved custom sticker. The specific fields included depend on the `fields` parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_MEMBER_SAVED_SEARCH tool input.
 */
type TRELLO_GET_MEMBER_SAVED_SEARCH_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose saved search is to be retrieved.
   */
  idMember?: string;
  /**
   * Id Saved Search
   * @description The unique identifier of the saved search to retrieve.
   */
  idSavedSearch?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_MEMBER_SAVED_SEARCH tool output.
 */
type TRELLO_GET_MEMBER_SAVED_SEARCH_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the retrieved saved search. This may include the search query, any applied filters, and other relevant metadata.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Fields
   * @description Specifies the board fields to return. Use 'all' for all fields, or provide a comma-separated list of specific fields. Valid fields include: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, or url.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification for which to retrieve the associated board.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the board associated with the notification.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD tool input.
 */
type TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description Specific field to retrieve from the board associated with the notification; only one field per request.
   */
  field?: string;
  /**
   * Id Notification
   * @description Unique identifier of the notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD tool output.
 */
type TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the requested board field and its value, e.g., `{"_value": "Board Name"}` if 'name' was requested.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Board
   * @description Whether to include the associated board. Accepts 'true' or 'false'.
   */
  board?: string;
  /**
   * Board Fields
   * @description Fields for the board: 'all' or a comma-separated list (e.g., name,url). Available: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url. Default: 'name'.
   * @default name
   */
  board_fields: string;
  /**
   * Card
   * @description Whether to include the associated card. Accepts 'true' or 'false'.
   */
  card?: string;
  /**
   * Card Fields
   * @description Fields for the card: 'all' or a comma-separated list (e.g., name,due). Available: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url. Default: 'name'.
   * @default name
   */
  card_fields: string;
  /**
   * Display
   * @description Whether to include the notification display status. Accepts 'true' or 'false'.
   */
  display?: string;
  /**
   * Entities
   * @description Whether to include associated entities (like cards, boards, members). Accepts 'true' or 'false'.
   */
  entities?: string;
  /**
   * Fields
   * @description Fields for the notification: 'all' or a comma-separated list (e.g., data,date,type). Available: data, date, idMemberCreator, type, unread. Default: 'all'.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The unique identifier of the notification to retrieve.
   */
  idNotification?: string;
  /**
   * List
   * @description Whether to include the associated list. Accepts 'true' or 'false'.
   */
  list?: string;
  /**
   * Member
   * @description Whether to include the associated member (distinct from memberCreator). Accepts 'true' or 'false'.
   */
  member?: string;
  /**
   * Member Creator
   * @description Whether to include the member who created the notification. Accepts 'true' or 'false'.
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Fields for the member creator: 'all' or a comma-separated list (e.g., fullName,username). Available: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username. Default: 'avatarHash,fullName,initials,username'.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description Fields for the associated member: 'all' or a comma-separated list (e.g., fullName,initials). Available: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username. Default: 'avatarHash,fullName,initials,username'.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Organization
   * @description Whether to include the associated organization. Accepts 'true' or 'false'.
   */
  organization?: string;
  /**
   * Organization Fields
   * @description Fields for the organization: 'all' or a comma-separated list (e.g., displayName,url). Available: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website. Default: 'displayName'.
   * @default displayName
   */
  organization_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD tool input.
 */
type TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the notification object. Common fields include 'type', 'date', 'data', 'unread', 'idAction', 'idBoard', 'idCard', 'idList', 'idMember', 'idOrganization'.
   */
  field?: string;
  /**
   * Id Notification
   * @description The unique identifier of the notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD tool output.
 */
type TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of specific card field names to return (e.g., 'name,desc'), or the string 'all'. Allowed field names: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the retrieved card's attributes. The specific fields included are determined by the `fields` parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD tool input.
 */
type TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the card to retrieve. Valid card fields include 'name', 'desc', 'closed', 'due', 'idBoard', 'idList', 'shortUrl', 'pos', and others. Custom fields might also be accessible.
   */
  field?: string;
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD tool output.
 */
type TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification for which to retrieve display information.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the display-specific information for the notification. This includes details such as its content, associated card or board information, member creator details, and any relevant formatting or entity information.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification for which related entities are to be fetched.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing details of the Trello entities (e.g., boards, cards, lists, members) associated with the specified notification. The structure of this dictionary varies depending on the type and content of the notification.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for the list, or 'all'. Allowed: 'closed', 'idBoard', 'name', 'pos', 'subscribed'.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the properties of the list associated with the notification.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD tool input.
 */
type TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The field to retrieve from the list associated with the notification. Valid values include 'id', 'name', 'closed', 'pos', 'softLimit', 'idBoard', 'subscribed'.
   */
  field?: string;
  /**
   * Id Notification
   * @description The ID of the notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD tool output.
 */
type TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Fields
   * @description Specifies the member fields to return. Use 'all' for all available fields, or provide a comma-separated list of specific fields. Valid fields include: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The ID of the Trello notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the member associated with the notification. The specific fields returned depend on the 'fields' parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD tool input.
 */
type TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The field to retrieve for the member associated with the notification. This can be any valid field of a Trello member object.
   */
  field?: string;
  /**
   * Id Notification
   * @description The ID of the notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD tool output.
 */
type TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value for the member associated with the notification.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Fields
   * @description A filter to determine which fields of the member creator object to return. Specify 'all' to include all fields, or provide a comma-separated list of field names. Valid fields include: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification for which to retrieve the creator's details.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested details of the member who created the notification. The structure of this dictionary depends on the 'fields' parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Fields
   * @description Organization fields to return. Accepts 'all' or a comma-separated list of specific fields (e.g., 'displayName,url'). Allowed fields: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website.
   * @default all
   */
  fields: string;
  /**
   * Id Notification
   * @description The unique identifier of the notification for which organization details are being requested.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the organization associated with the notification.
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
 * Type of TRELLO's TRELLO_GET_NOTIFICATION_ORG_FIELD tool input.
 */
type TRELLO_GET_NOTIFICATION_ORG_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the organization to retrieve. Refer to Trello API documentation for a comprehensive list of available organization fields.
   */
  field?: string;
  /**
   * Id Notification
   * @description The unique identifier (ID) of the Trello notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIFICATION_ORG_FIELD tool output.
 */
type TRELLO_GET_NOTIFICATION_ORG_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field's data from the organization. The key in the dictionary can be the field name itself (e.g., `{'name': 'Trello'}`) or `_value` (e.g., `{"_value": "Some Value"}`). It may also include an `id` field for the organization, as per Trello API conventions.
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
 * Type of TRELLO's TRELLO_GET_NOTIF_CREATOR_FIELD tool input.
 */
type TRELLO_GET_NOTIF_CREATOR_FIELD_INPUT = {
  /**
   * Field
   * @description A specific field of the member who created the notification.
   */
  field?: string;
  /**
   * Id Notification
   * @description The ID of the notification.
   */
  idNotification?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_NOTIF_CREATOR_FIELD tool output.
 */
type TRELLO_GET_NOTIF_CREATOR_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG_INPUT = {
  /**
   * Before
   * @description Ending point for actions. Can be a specific date (ISO 8601 format or Unix timestamp in milliseconds) or null (actions up to the most recent).
   */
  before?: string;
  /**
   * Display
   * @description Indicates whether to return display-friendly information for an action (e.g., human-readable strings).
   */
  display?: string;
  /**
   * Entities
   * @description Indicates whether to return information about entities (e.g., card, board, list) associated with an action.
   */
  entities?: string;
  /**
   * Fields
   * @description Specifies the fields to be returned for each action. Use 'all' or a comma-separated list of specific field names. Allowed fields: `data`, `date`, `idMemberCreator`, `type`.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters actions by type. Use 'all' or a comma-separated list of specific action types (e.g., `addAttachmentToCard`, `commentCard`). For a full list of allowed types, refer to the Trello API documentation.
   * @default all
   */
  filter: string;
  /**
   * Format
   * @description The format of the returned actions. Allowed values: 'count', 'list', or 'minimal'.
   * @default list
   */
  format: string;
  /**
   * Id Models
   * @description A comma-separated list of Trello model IDs (e.g., card IDs, board IDs, list IDs) to filter actions by.
   */
  idModels?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Limit
   * @description Maximum number of actions to return (0-1000).
   * @default 50
   */
  limit: string;
  /**
   * Member
   * @description Indicates whether to return information for the member who performed the action.
   */
  member?: string;
  /**
   * Member Creator
   * @description Indicates whether to return information for the action creator (usually the same as the member).
   */
  memberCreator?: string;
  /**
   * Member Creator Fields
   * @description Fields for the 'memberCreator' object if 'memberCreator' is true. Use 'all' or a comma-separated list from: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  memberCreator_fields: string;
  /**
   * Member Fields
   * @description Fields for the 'member' object if 'member' is true. Use 'all' or a comma-separated list from: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Page
   * @description Page number of results to retrieve (0-indexed).
   * @default 0
   */
  page: string;
  /**
   * Since
   * @description Starting point for actions. Can be a specific date (ISO 8601 format or Unix timestamp in milliseconds), 'lastView', or null (actions from the beginning).
   */
  since?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_INPUT = {
  /**
   * Action Fields
   * @description Fields for actions. Use 'all' or a comma-separated list: 'data', 'date', 'idMemberCreator', 'type'.
   * @default all
   */
  action_fields: string;
  /**
   * Actions
   * @description Actions for boards. Use 'all' or a comma-separated list: 'addAttachmentToCard', 'addChecklistToCard', 'addMemberToBoard', 'addMemberToCard', 'addMemberToOrganization', 'addToOrganizationBoard', 'commentCard', 'convertToCardFromCheckItem', 'copyBoard', 'copyCard', 'copyCommentCard', 'createBoard', 'createCard', 'createList', 'createOrganization', 'deleteAttachmentFromCard', 'deleteBoardInvitation', 'deleteCard', 'deleteOrganizationInvitation', 'disablePowerUp', 'emailCard', 'enablePowerUp', 'makeAdminOfBoard', 'makeNormalMemberOfBoard', 'makeNormalMemberOfOrganization', 'makeObserverOfBoard', 'memberJoinedTrello', 'moveCardFromBoard', 'moveCardToBoard', 'moveListFromBoard', 'moveListToBoard', 'removeChecklistFromCard', 'removeFromOrganizationBoard', 'removeMemberFromCard', 'unconfirmedBoardInvitation', 'unconfirmedOrganizationInvitation', 'updateBoard', 'updateCard', 'updateCard:closed', 'updateCard:desc', 'updateCard:idList', 'updateCard:name', 'updateCheckItemStateOnCard', 'updateChecklist', 'updateList', 'updateList:closed', 'updateList:name', 'updateMember', 'updateOrganization'.
   */
  actions?: string;
  /**
   * Actions Entities
   * @description Include entities (e.g., card, board, member) in action data. 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Format
   * @description Format for actions: 'count', 'list', or 'minimal'.
   * @default list
   */
  actions_format: string;
  /**
   * Actions Limit
   * @description Max actions per board (0-1000).
   * @default 5
   */
  actions_limit: string;
  /**
   * Actions Since
   * @description Actions after a date (e.g. '2024-01-01T00:00:00Z'), 'lastView', or 'null'.
   */
  actions_since?: string;
  /**
   * Fields
   * @description Fields for boards. Use 'all' or a comma-separated list: 'closed', 'dateLastActivity', 'dateLastView', 'desc', 'descData', 'idOrganization', 'invitations', 'invited', 'labelNames', 'memberships', 'name', 'pinned', 'powerUps', 'prefs', 'shortLink', 'shortUrl', 'starred', 'subscribed', 'url'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters boards. Use 'all' or a comma-separated list: 'closed', 'members', 'open', 'organization', 'pinned', 'public', 'starred', 'unpinned'.
   * @default all
   */
  filter: string;
  /**
   * Id Org
   * @description The ID or name of the organization to retrieve boards from.
   */
  idOrg?: string;
  /**
   * Lists
   * @description Lists per board. Use 'all', 'closed', 'none', or 'open'.
   * @default none
   */
  lists: string;
  /**
   * Memberships
   * @description Board memberships. Use 'all', 'none', or a comma-separated list: 'active', 'admin', 'deactivated', 'me', 'normal'.
   * @default none
   */
  memberships: string;
  /**
   * Organization
   * @description Include organization object with boards. 'true' or 'false'.
   */
  organization?: string;
  /**
   * Organization Fields
   * @description Fields for the organization if 'organization=true'. Use 'all' or a comma-separated list: 'billableMemberCount', 'desc', 'descData', 'displayName', 'idBoards', 'invitations', 'invited', 'logoHash', 'memberships', 'name', 'powerUps', 'prefs', 'premiumFeatures', 'products', 'url', 'website'.
   * @default name and displayName
   */
  organization_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER tool input.
 */
type TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description Filter criteria to select a subset of boards. Valid filters include 'all', 'open', 'closed', 'public', 'private', 'starred', and 'members'.
   */
  filter?: string;
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER tool output.
 */
type TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description The raw response from the Trello API. This dictionary is expected to contain a list of Trello board objects that match the filter criteria, structured according to the Trello API specification.
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
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_INPUT = {
  /**
   * Action Fields
   * @description Specifies the fields to return for each action. Use 'all' or provide a comma-separated list of field names: data, date, idMemberCreator, or type.
   * @default all
   */
  action_fields: string;
  /**
   * Actions
   * @description Comma-separated list of action types (e.g., 'addMemberToBoard', 'createCard', 'updateOrganization') or 'all'. For a full list of types, consult the Trello API documentation. If not provided, Trello's default behavior applies.
   */
  actions?: string;
  /**
   * Actions Display
   * @description Include a 'display' object with rendering info for each action. Valid: 'true', 'false'. If not provided, display info is typically not included.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Include an 'entities' object with details for each action. Valid: 'true', 'false'. If not provided, entities are typically not included.
   */
  actions_entities?: string;
  /**
   * Actions Limit
   * @description The maximum number of actions to return. Must be a number between 0 and 1000.
   * @default 50
   */
  actions_limit: string;
  /**
   * Board Action Fields
   * @description Specifies the fields to return for each board action. Use 'all' or provide a comma-separated list of field names: data, date, idMemberCreator, or type.
   * @default all
   */
  board_action_fields: string;
  /**
   * Board Actions
   * @description Comma-separated list of board action types (e.g., 'addAttachmentToCard', 'updateBoard') or 'all', specific to board actions. For a full list, consult the Trello API documentation. If not provided, Trello's default behavior applies.
   */
  board_actions?: string;
  /**
   * Board Actions Display
   * @description Include a 'display' object for board actions. Valid: 'true', 'false'. If not provided, display info is typically not included.
   */
  board_actions_display?: string;
  /**
   * Board Actions Entities
   * @description Include an 'entities' object with details for board actions. Valid: 'true', 'false'. If not provided, entities are typically not included.
   */
  board_actions_entities?: string;
  /**
   * Board Actions Format
   * @description Specifies the format for returning board actions. Valid values: 'count', 'list', 'minimal'.
   * @default list
   */
  board_actions_format: string;
  /**
   * Board Actions Limit
   * @description The maximum number of board actions to return. Must be a number between 0 and 1000.
   * @default 50
   */
  board_actions_limit: string;
  /**
   * Board Actions Since
   * @description Retrieve board actions after a specific ISO 8601 date/time, 'null', or 'lastView'. If not provided, recent actions are typically returned.
   */
  board_actions_since?: string;
  /**
   * Board Fields
   * @description Specifies the fields to return for each board. Use 'all' or provide a comma-separated list of field names: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, or url.
   * @default all
   */
  board_fields: string;
  /**
   * Board Lists
   * @description Filters the lists to be returned for each board. Valid values: 'all', 'closed', 'none', 'open'.
   * @default open
   */
  board_lists: string;
  /**
   * Boards
   * @description Filters the boards to return. Use 'all' or provide a comma-separated list of board states/types: closed, members, open, organization, pinned, public, starred, or unpinned.
   * @default none
   */
  boards: string;
  /**
   * Fields
   * @description Specifies the fields to return for the organization itself. Use 'all' or provide a comma-separated list of field names: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, or website.
   * @default name, displayName, desc, descData, url, website, logoHash, products and powerUps
   */
  fields: string;
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization to retrieve.
   */
  idOrg?: string;
  /**
   * Member Activity
   * @description Include member activity data (Trello Premium organizations only). Valid: 'true', 'false'. If not provided, activity is typically not included.
   */
  member_activity?: string;
  /**
   * Member Fields
   * @description Specifies the fields to return for each member. Use 'all' or provide a comma-separated list of field names: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, fullName, initials, username and confirmed
   */
  member_fields: string;
  /**
   * Members
   * @description Filters which members of the organization to return. Valid values: 'admins', 'all', 'none', 'normal', 'owners'.
   * @default none
   */
  members: string;
  /**
   * Members Invited
   * @description Filters which invited (pending) members of the organization to return. Valid values: 'admins', 'all', 'none', 'normal', 'owners'.
   * @default none
   */
  membersInvited: string;
  /**
   * Members Invited Fields
   * @description Specifies the fields to return for each invited member. Use 'all' or provide a comma-separated list of field names: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default avatarHash, initials, fullName and username
   */
  membersInvited_fields: string;
  /**
   * Memberships
   * @description Filters the memberships to return. Use 'all' or provide a comma-separated list of membership types: active, admin, deactivated, me, or normal.
   * @default none
   */
  memberships: string;
  /**
   * Memberships Member
   * @description Include the member object for each membership. Valid: 'true', 'false'. If not provided, member objects are typically not included.
   */
  memberships_member?: string;
  /**
   * Memberships Member Fields
   * @description Specifies the member fields to return for memberships. Use 'all' or provide a comma-separated list of field names: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username.
   * @default fullName and username
   */
  memberships_member_fields: string;
  /**
   * Paid Account
   * @description Include organization's paid account status. Valid: 'true', 'false'. If not provided, this info is typically not included.
   */
  paid_account?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the detailed information of the retrieved Trello organization, including its properties and any requested nested resources like members, boards, or actions.
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
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD tool input.
 */
type TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the organization. Refer to Trello API documentation for a comprehensive list of valid fields.
   */
  field?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD tool output.
 */
type TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the value of the requested field. The key is typically `'_value'` and its value is the actual data of the field, which can be a string, number, boolean, or a nested object depending on the field retrieved.
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
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Ix Last Update
   * @description Index of the last update received for fetching subsequent changes; use -1 to retrieve all changes since the beginning.
   */
  ixLastUpdate?: string;
  /**
   * Tags
   * @description A valid tag for subscribing to delta updates, filtering the type of changes returned.
   */
  tags?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_INPUT = {
  /**
   * Filter
   * @description Filters the list of memberships. Accepts 'all' or a comma-separated list of types: 'active', 'admin', 'deactivated', 'me', 'normal'.
   * @default all
   */
  filter: string;
  /**
   * Id Org
   * @description The unique identifier (ID) or name of the Trello organization for which to retrieve memberships.
   */
  idOrg?: string;
  /**
   * Member
   * @description Specifies whether to retrieve full member objects. Set to 'true' to include, 'false' to exclude. If omitted, Trello defaults to 'false' (excluding details).
   */
  member?: string;
  /**
   * Member Fields
   * @description If 'member' is 'true', specifies a comma-separated list of member fields to return (e.g., 'fullName,username' or 'all'). Allowed fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default fullName and username
   */
  member_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP_INPUT = {
  /**
   * Id Membership
   * @description The ID of the membership to retrieve.
   */
  idMembership?: string;
  /**
   * Id Org
   * @description The ID of the organization.
   */
  idOrg?: string;
  /**
   * Member
   * @description Determines whether to include the member object in the response. Valid values are 'true' or 'false'.
   */
  member?: string;
  /**
   * Member Fields
   * @description Comma-separated list of fields for the member object. Valid values: 'all', 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', 'username'.
   * @default fullName,username
   */
  member_fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_INPUT = {
  /**
   * Activity
   * @description Set to 'true' to include member activity information. This option is only available for Premium organizations. Defaults to 'false' if not specified.
   */
  activity?: string;
  /**
   * Fields
   * @description Specifies which member fields to return. Use 'all' to include all available fields, or provide a comma-separated list of specific fields. Available fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   * @default fullName and username
   */
  fields: string;
  /**
   * Filter
   * @description Determines which types of members to include in the response. 'admins' for administrators, 'all' for every member, 'none' for no members (useful for checking organization existence or permissions), 'normal' for regular members (excluding admins), 'owners' for organization owners.
   * @default normal
   */
  filter: string;
  /**
   * Id Org
   * @description The ID or name of the organization to retrieve members from.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER_INPUT = {
  /**
   * Filter
   * @description Filter for members. Common values: 'all', 'normal' (regular members), 'admins' (administrators), 'owners'.
   */
  filter?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from the API, typically a list of member objects matching the filter criteria.
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
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER_INPUT = {
  /**
   * Actions
   * @description Filters actions on the cards. Accepts 'all' or a comma-separated list of action types. Valid types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description Specifies which attachment fields to include if attachments are retrieved. Accepts 'all' or a comma-separated list of valid fields: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Determines whether to include attachments. Accepts a boolean string ('true'/'false') or 'cover' to only include card cover attachments.
   */
  attachments?: string;
  /**
   * Board
   * @description Indicates whether to include the board object to which the card belongs. Accepts 'true' or 'false'.
   */
  board?: string;
  /**
   * Board Fields
   * @description Specifies which board fields to include if 'board' is 'true'. Accepts 'all' or a comma-separated list of valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url.
   * @default name, desc, closed, idOrganization, pinned, url and prefs
   */
  board_fields: string;
  /**
   * Check Item States
   * @description Indicates whether to include check item states on the cards. Accepts 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Determines whether to include checklists on the cards. Accepts 'all' or 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Specifies which card fields to include in the response. Accepts 'all' or a comma-separated list of valid card fields: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the cards to retrieve. Allowed values are 'all', 'closed', 'none', 'open', or 'visible'.
   * @default visible
   */
  filter: string;
  /**
   * Id Member
   * @description The ID of the member whose cards are to be retrieved.
   */
  idMember?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * List
   * @description Indicates whether to include the list object to which the card belongs. Accepts 'true' or 'false'.
   */
  list?: string;
  /**
   * List Fields
   * @description Specifies which list fields to include if 'list' is 'true'. Accepts 'all' or a comma-separated list of valid fields: closed, idBoard, name, pos or subscribed.
   * @default all
   */
  list_fields: string;
  /**
   * Member Fields
   * @description Specifies which member fields to include if 'members' is 'true'. Accepts 'all' or a comma-separated list of valid fields: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Indicates whether to include member data on the cards. Accepts 'true' or 'false'.
   */
  members?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary where keys are card IDs and values are the card objects, or a list of card objects if the API returns an array.
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
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_INPUT = {
  /**
   * Fields
   * @description Determines the set of fields to be returned for each invited member. Specify 'all' to include all available fields, or provide a comma-separated list of desired fields. Valid fields include: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, or username.
   * @default all
   */
  fields: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization. Using the organization's unique ID is generally more reliable.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD tool input.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of an invited member to retrieve. This refers to an attribute of the invited member object.
   */
  field?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD tool output.
 */
type TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the value of the requested field for the invited members. Typically, this will be a simple key-value pair like `{\"_value\": \"requested_field_value\"}` or may represent a sub-section of the invited member's data related to the field.
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
 * Type of TRELLO's TRELLO_GET_SEARCH tool input.
 */
type TRELLO_GET_SEARCH_INPUT = {
  /**
   * Board Fields
   * @description Fields for found boards; 'all' or a comma-separated list (e.g., 'name,url'). Default is 'name and idOrganization'.
   * @default name and idOrganization
   */
  board_fields: string;
  /**
   * Boards Limit
   * @description Maximum number of board results. Must be 1-1000. Default is 1.
   * @default 1
   */
  boards_limit: string;
  /**
   * Card Attachments
   * @description Whether to include attachments for cards ('true', 'false', or 'cover' for card cover attachments).
   */
  card_attachments?: string;
  /**
   * Card Board
   * @description Whether to include the board object for each card returned ('true' or 'false').
   */
  card_board?: string;
  /**
   * Card Fields
   * @description Fields for found cards; 'all' or a comma-separated list (e.g., 'name,due'). Default is 'all'.
   * @default all
   */
  card_fields: string;
  /**
   * Card List
   * @description Whether to include the list object for each card returned ('true' or 'false').
   */
  card_list?: string;
  /**
   * Card Members
   * @description Whether to include member objects for each card returned ('true' or 'false').
   */
  card_members?: string;
  /**
   * Card Stickers
   * @description Whether to include sticker objects for each card returned ('true' or 'false').
   */
  card_stickers?: string;
  /**
   * Cards Limit
   * @description Maximum number of card results. Must be 1-1000. Default is 1.
   * @default 1
   */
  cards_limit: string;
  /**
   * Cards Page
   * @description Page number for paginated card results. Must be 0-100. Default is 0.
   * @default 0
   */
  cards_page: string;
  /**
   * Id Boards
   * @description A comma-separated list of board IDs to search within. Default is 'mine' (boards the user is a member of).
   * @default mine
   */
  idBoards: string;
  /**
   * Id Cards
   * @description A comma-separated list of card IDs to search for.
   */
  idCards?: string;
  /**
   * Id Organizations
   * @description A comma-separated list of organization IDs to search within. This field is required.
   */
  idOrganizations?: string;
  /**
   * Member Fields
   * @description Fields for found members; 'all' or a comma-separated list (e.g., 'fullName,username'). Default is 'avatarHash, fullName, initials, username and confirmed'.
   * @default avatarHash, fullName, initials, username and confirmed
   */
  member_fields: string;
  /**
   * Members Limit
   * @description Maximum number of member results. Must be 1-1000. Default is 10.
   * @default 10
   */
  members_limit: string;
  /**
   * Model Types
   * @description Types of Trello objects to search (e.g., 'cards,boards' or 'all' from 'actions', 'boards', 'cards', 'members', 'organizations'). Default is 'all'.
   * @default all
   */
  modelTypes: string;
  /**
   * Organization Fields
   * @description Fields for found organizations; 'all' or a comma-separated list (e.g., 'name,url'). Default is 'name and displayName'.
   * @default name and displayName
   */
  organization_fields: string;
  /**
   * Organizations Limit
   * @description Maximum number of organization results. Must be 1-1000. Default is 10.
   * @default 10
   */
  organizations_limit: string;
  /**
   * Partial
   * @description Whether to enable partial matching for the search query ('true' or 'false').
   */
  partial?: string;
  /**
   * Query
   * @description The search query string. Must be between 1 and 16384 characters long.
   */
  query?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_SEARCH tool output.
 */
type TRELLO_GET_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Search results, where keys usually match `modelTypes` (e.g., 'cards', 'boards') and values are lists of matching objects.
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
 * Type of TRELLO's TRELLO_GET_SEARCH_MEMBERS tool input.
 */
type TRELLO_GET_SEARCH_MEMBERS_INPUT = {
  /**
   * Id Board
   * @description ID of a Trello board to scope the member search; 'null' or omitted means no board restriction.
   */
  idBoard?: string;
  /**
   * Id Organization
   * @description ID of a Trello organization to scope the member search; 'null' or omitted means no organization restriction.
   */
  idOrganization?: string;
  /**
   * Limit
   * @description Maximum number of member records to return (string '1'-'20').
   * @default 8
   */
  limit: string;
  /**
   * Only Org Members
   * @description Search only for members of the `idOrganization` ('true' or 'false'); effective only when `idOrganization` is provided.
   */
  onlyOrgMembers?: string;
  /**
   * Query
   * @description Search query for Trello members by name, username, or email (1-16384 characters).
   */
  query?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_SEARCH_MEMBERS tool output.
 */
type TRELLO_GET_SEARCH_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Trello API response, typically a list of member objects.
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
 * Type of TRELLO's TRELLO_GET_SESSIONS_SOCKET tool input.
 */
type TRELLO_GET_SESSIONS_SOCKET_INPUT = object;

/**
 * Type of TRELLO's TRELLO_GET_SESSIONS_SOCKET tool output.
 */
type TRELLO_GET_SESSIONS_SOCKET_OUTPUT = {
  /**
   * Data
   * @description Information about the established WebSocket session, such as session identifiers or status; specific structure and content may vary.
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
 * Type of TRELLO's TRELLO_GET_TOKENS_BY_TOKEN tool input.
 */
type TRELLO_GET_TOKENS_BY_TOKEN_INPUT = {
  /**
   * Fields
   * @description Comma-separated string of fields to include (e.g., 'dateCreated,idMember') or 'all'. Valid fields: 'dateCreated', 'dateExpires', 'idMember', 'identifier', 'permissions'.
   * @default all
   */
  fields: string;
  /**
   * Webhooks
   * @description String 'true' or 'false' to include webhook information.
   */
  webhooks?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_BY_TOKEN tool output.
 */
type TRELLO_GET_TOKENS_BY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Dictionary of token details. Structure depends on the 'fields' requested and can include 'dateCreated', 'dateExpires', 'idMember', 'identifier', 'permissions'.
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
 * Type of TRELLO's TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD tool input.
 */
type TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field of the token to retrieve (e.g., 'identifier', 'idMember', 'dateCreated').
   */
  field?: string;
  /**
   * Token
   * @description The Trello authentication token.
   */
  token?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD tool output.
 */
type TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_MEMBER_BY_TOKEN tool input.
 */
type TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_INPUT = {
  /**
   * Fields
   * @description Specifies the member fields to return. Use 'all' for all fields, or a comma-separated list of specific field names. Available fields: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
};

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_MEMBER_BY_TOKEN tool output.
 */
type TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested member information. The structure of this dictionary is determined by the 'fields' parameter in the request.
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
 * Type of TRELLO's TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD tool input.
 */
type TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The field to retrieve for the member associated with the token. This can be any valid member field.
   */
  field?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD tool output.
 */
type TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested field and its value. The key is the field name and the value is the field's content.
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
 * Type of TRELLO's TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN tool input.
 */
type TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_INPUT = object;

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN tool output.
 */
type TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Webhook details for the token, typically including ID, description, callback URL, monitored model ID, and active status.
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
 * Type of TRELLO's TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK tool input.
 */
type TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier (ID) of the webhook whose details are to be retrieved. This ID is typically a 24-character hexadecimal string.
   */
  idWebhook?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK tool output.
 */
type TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Properties and configuration details of the retrieved webhook, such as its callback URL, the ID of the model it watches, and its active status.
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
 * Type of TRELLO's TRELLO_GET_TYPES_BY_ID tool input.
 */
type TRELLO_GET_TYPES_BY_ID_INPUT = {
  /**
   * Id
   * @description The identifier of the Trello object type whose details are to be retrieved.
   */
  id?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_TYPES_BY_ID tool output.
 */
type TRELLO_GET_TYPES_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the properties and characteristics of the specified Trello object type.
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
 * Type of TRELLO's TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK tool input.
 */
type TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier (ID) of the Trello webhook to retrieve.
   */
  idWebhook?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK tool output.
 */
type TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD tool input.
 */
type TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD_INPUT = {
  /**
   * Field
   * @description The specific field to retrieve from the webhook object. For example, 'description', 'idModel', 'callbackURL', or 'active'.
   */
  field?: string;
  /**
   * Id Webhook
   * @description The unique identifier of the Trello webhook.
   */
  idWebhook?: string;
};

/**
 * Type of TRELLO's TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD tool output.
 */
type TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the value of the specified field, often under a '_value' key.
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
 * Type of TRELLO's TRELLO_LIST_CREATE_LIST tool input.
 */
type TRELLO_LIST_CREATE_LIST_INPUT = {
  /**
   * Closed
   * @description Indicates whether the list should be created as closed (archived). Set to `true` for closed, or `false` for open.
   */
  closed?: string;
  /**
   * Id Board
   * @description The ID of the board to which the new list should be added. This is a required parameter.
   */
  idBoard?: string;
  /**
   * Id List Source
   * @description The ID of an existing list to copy when creating the new list. If provided, the new list will be a copy of this source list.
   */
  idListSource?: string;
  /**
   * Name
   * @description The name for the new list. Must be a string with a length from 1 to 16384 characters. This is a required parameter.
   */
  name?: string;
  /**
   * Pos
   * @description The position of the new list on the board. Valid values are `top`, `bottom`, or a positive number (e.g., '1', '2.5').
   */
  pos?: string;
  /**
   * Subscribed
   * @description Indicates whether the user creating the list should be automatically subscribed to it. Set to `true` to subscribe, or `false` otherwise.
   */
  subscribed?: string;
};

/**
 * Type of TRELLO's TRELLO_LIST_CREATE_LIST tool output.
 */
type TRELLO_LIST_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the newly created list.
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
 * Type of TRELLO's TRELLO_LIST_GET_BY_ID_LIST tool input.
 */
type TRELLO_LIST_GET_BY_ID_LIST_INPUT = {
  /**
   * Board
   * @description Determines whether the board object the list belongs to is returned. Set to 'true' to include board details or 'false' to omit them.
   */
  board?: string;
  /**
   * Board Fields
   * @description Specifies the fields for the board to be returned if 'board' is 'true'. Valid values are 'all' or a comma-separated list of board fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, or url.
   * @default name, desc, descData, closed, idOrganization, pinned, url and prefs
   */
  board_fields: string;
  /**
   * Card Fields
   * @description Specifies the fields for cards to be returned if 'cards' is not 'none'. Valid values are 'all' or a comma-separated list of card fields: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url.
   * @default all
   */
  card_fields: string;
  /**
   * Cards
   * @description Determines whether cards are returned as part of the list data. Valid values are 'all', 'closed', 'none', or 'open'.
   * @default none
   */
  cards: string;
  /**
   * Fields
   * @description Specifies the fields for the list itself to be returned. Valid values are 'all' or a comma-separated list of list fields: closed, idBoard, name, pos, or subscribed.
   * @default name, closed, idBoard and pos
   */
  fields: string;
  /**
   * Id List
   * @description The ID of the Trello list to retrieve.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_LIST_GET_BY_ID_LIST tool output.
 */
type TRELLO_LIST_GET_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_LIST_GET_CARDS_BY_ID_LIST tool input.
 */
type TRELLO_LIST_GET_CARDS_BY_ID_LIST_INPUT = {
  /**
   * Actions
   * @description Determines what actions are returned. Use 'all' to return all actions, or provide a comma-separated list of specific action types. Valid action types include: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember, or updateOrganization.
   */
  actions?: string;
  /**
   * Attachment Fields
   * @description Fields to include for attachments. Use 'all' or a comma-separated list of specific fields. Valid fields include: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews, or url. Defaults to 'all'.
   * @default all
   */
  attachment_fields: string;
  /**
   * Attachments
   * @description Specify whether to include attachments. Accepted string values are 'true', 'false', or 'cover' (to retrieve only card cover attachments).
   */
  attachments?: string;
  /**
   * Before
   * @description Filter cards to include only those created or updated before this date. Provide a date string (e.g., YYYY-MM-DD or an ISO 8601 datetime string) or 'null'.
   */
  before?: string;
  /**
   * Check Item States
   * @description Specify whether to include check item states. Accepted string values are 'true' or 'false'.
   */
  checkItemStates?: string;
  /**
   * Checklists
   * @description Specify whether to include checklists. Valid values are 'all' or 'none'. Defaults to 'none'.
   * @default none
   */
  checklists: string;
  /**
   * Fields
   * @description Fields to include for cards. Use 'all' or a comma-separated list of specific fields. Valid fields include: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed, or url. Defaults to 'all'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filter cards by their state. Valid values are 'all', 'closed', 'none', or 'open'. Defaults to 'open'.
   * @default open
   */
  filter: string;
  /**
   * Id List
   * @description The ID of the list from which to retrieve cards.
   */
  idList?: string;
  /**
   * Limit
   * @description The maximum number of cards to return. Must be a number from 1 to 1000, provided as a string. The default integer value `2` will be automatically converted to the string `'2'`.
   * @default 2
   */
  limit: string;
  /**
   * Member Fields
   * @description Fields to include for members. Use 'all' or a comma-separated list of specific fields. Valid fields include: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, or username. Defaults to 'avatarHash,fullName,initials,username'.
   * @default avatarHash, fullName, initials and username
   */
  member_fields: string;
  /**
   * Members
   * @description Specify whether to include members. Accepted string values are 'true' or 'false'.
   */
  members?: string;
  /**
   * Since
   * @description Filter cards to include only those created or updated after this date. Provide a date string (e.g., YYYY-MM-DD or an ISO 8601 datetime string) or 'null'.
   */
  since?: string;
  /**
   * Stickers
   * @description Specify whether to include stickers. Accepted string values are 'true' or 'false'.
   */
  stickers?: string;
};

/**
 * Type of TRELLO's TRELLO_LIST_GET_CARDS_BY_ID_LIST tool output.
 */
type TRELLO_LIST_GET_CARDS_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_LIST_ID_BOARD_GET tool input.
 */
type TRELLO_LIST_ID_BOARD_GET_INPUT = {
  /**
   * Fields
   * @description Board fields to return, comma-separated. Use 'all' for all fields. Valid fields: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
   * @default all
   */
  fields: string;
  /**
   * Id List
   * @description The unique identifier of the Trello list for which to retrieve the parent board information.
   */
  idList?: string;
};

/**
 * Type of TRELLO's TRELLO_LIST_ID_BOARD_GET tool output.
 */
type TRELLO_LIST_ID_BOARD_GET_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the board to which the specified list belongs. The content and structure of this dictionary depend on the 'fields' parameter provided in the request.
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
 * Type of TRELLO's TRELLO_MARK_CARD_NOTIFICATIONS_READ tool input.
 */
type TRELLO_MARK_CARD_NOTIFICATIONS_READ_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card whose associated notifications are to be marked as read.
   */
  idCard?: string;
};

/**
 * Type of TRELLO's TRELLO_MARK_CARD_NOTIFICATIONS_READ tool output.
 */
type TRELLO_MARK_CARD_NOTIFICATIONS_READ_OUTPUT = {
  /**
   * Data
   * @description An empty dictionary is returned on successful execution, confirming that notifications have been marked as read. In case of an error, this may contain error details.
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
 * Type of TRELLO's TRELLO_MEMBER_GET_BOARDS tool input.
 */
type TRELLO_MEMBER_GET_BOARDS_INPUT = {
  /**
   * Filter
   * @description The filter to apply when retrieving boards. Determines which subset of boards is returned.
   * @default open
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member whose boards are to be retrieved.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_MEMBER_GET_BOARDS tool output.
 */
type TRELLO_MEMBER_GET_BOARDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the list of boards that match the specified filter.
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
 * Type of TRELLO's TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER tool input.
 */
type TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER_INPUT = {
  /**
   * Action Fields
   * @description Specifies fields for returned actions if actions are requested. Accepts 'all' or a comma-separated list: 'data', 'date', 'idMemberCreator', 'type'.
   * @default all
   */
  action_fields: string;
  /**
   * Actions
   * @description Specifies which actions to return for each board. Accepts 'all' or a comma-separated list of action types. Possible action types: 'addAttachmentToCard', 'addChecklistToCard', 'addMemberToBoard', 'addMemberToCard', 'addMemberToOrganization', 'addToOrganizationBoard', 'commentCard', 'convertToCardFromCheckItem', 'copyBoard', 'copyCard', 'copyCommentCard', 'createBoard', 'createCard', 'createList', 'createOrganization', 'deleteAttachmentFromCard', 'deleteBoardInvitation', 'deleteCard', 'deleteOrganizationInvitation', 'disablePowerUp', 'emailCard', 'enablePowerUp', 'makeAdminOfBoard', 'makeNormalMemberOfBoard', 'makeNormalMemberOfOrganization', 'makeObserverOfBoard', 'memberJoinedTrello', 'moveCardFromBoard', 'moveCardToBoard', 'moveListFromBoard', 'moveListToBoard', 'removeChecklistFromCard', 'removeFromOrganizationBoard', 'removeMemberFromCard', 'unconfirmedBoardInvitation', 'unconfirmedOrganizationInvitation', 'updateBoard', 'updateCard', 'updateCard:closed', 'updateCard:desc', 'updateCard:idList', 'updateCard:name', 'updateCheckItemStateOnCard', 'updateChecklist', 'updateList', 'updateList:closed', 'updateList:name', 'updateMember', 'updateOrganization'.
   */
  actions?: string;
  /**
   * Actions Entities
   * @description Determines whether to return entity data for actions. Valid values: 'true' or 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Format
   * @description The format for returned actions. Valid values: 'count', 'list', or 'minimal'.
   * @default list
   */
  actions_format: string;
  /**
   * Actions Limit
   * @description The maximum number of actions to return, from 0 to 1000.
   * @default 5
   */
  actions_limit: string;
  /**
   * Actions Since
   * @description Filters actions to those that occurred after this date, or accepts 'null' or 'lastView'.
   */
  actions_since?: string;
  /**
   * Fields
   * @description Specifies the fields to return for each board. Accepts 'all' or a comma-separated list of field names. Possible field names: 'closed', 'dateLastActivity', 'dateLastView', 'desc', 'descData', 'idOrganization', 'invitations', 'invited', 'labelNames', 'memberships', 'name', 'pinned', 'powerUps', 'prefs', 'shortLink', 'shortUrl', 'starred', 'subscribed', 'url'.
   * @default all
   */
  fields: string;
  /**
   * Filter
   * @description Filters the boards returned. Valid values are 'all' or a comma-separated list of: 'closed', 'members', 'open', 'organization', 'pinned', 'public', 'starred', 'unpinned'.
   * @default all
   */
  filter: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Lists
   * @description Filters the lists returned for each board. Valid values: 'all', 'closed', 'none', 'open'.
   * @default open
   */
  lists: string;
  /**
   * Memberships
   * @description Filters boards by the member's membership type. Accepts 'all' or a comma-separated list of: 'active', 'admin', 'deactivated', 'me', 'normal'.
   * @default none
   */
  memberships: string;
  /**
   * Organization
   * @description Determines whether to return organization data for boards. Valid values: 'true' or 'false'.
   */
  organization?: string;
  /**
   * Organization Fields
   * @description Specifies the fields to return for the organization if 'organization' is 'true'. Accepts 'all' or a comma-separated list of field names. Possible field names: 'billableMemberCount', 'desc', 'descData', 'displayName', 'idBoards', 'invitations', 'invited', 'logoHash', 'memberships', 'name', 'powerUps', 'prefs', 'premiumFeatures', 'products', 'url', 'website'.
   * @default name and displayName
   */
  organization_fields: string;
};

/**
 * Type of TRELLO's TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER tool output.
 */
type TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. This typically includes a list of board objects that the member is associated with. The specific structure and content will depend on the query parameters like 'fields', 'actions', etc., used in the request.
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
 * Type of TRELLO's TRELLO_MEMBER_GET_BY_ID tool input.
 */
type TRELLO_MEMBER_GET_BY_ID_INPUT = {
  /**
   * Action Before
   * @description Retrieve actions created before this date/time (ISO 8601), or 'null' for no restriction.
   */
  action_before?: string;
  /**
   * Action Fields
   * @description Fields to return for each action. Valid values: 'all' or a comma-separated list (e.g., 'data,date').
   * @default all
   */
  action_fields: string;
  /**
   * Action Since
   * @description Retrieve actions created after this date/time (ISO 8601 or 'lastView'), or 'null' for no restriction.
   */
  action_since?: string;
  /**
   * Actions
   * @description Filters actions by type. Valid values: 'all' or a comma-separated list of action types (e.g., addAttachmentToCard, commentCard, createBoard).
   */
  actions?: string;
  /**
   * Actions Display
   * @description Include display information for actions. Valid values: 'true', 'false'.
   */
  actions_display?: string;
  /**
   * Actions Entities
   * @description Include related entities in actions. Valid values: 'true', 'false'.
   */
  actions_entities?: string;
  /**
   * Actions Limit
   * @description Maximum number of actions to return (0-1000).
   * @default 5
   */
  actions_limit: string;
  /**
   * Board Backgrounds
   * @description Filters board backgrounds. Valid values: 'all', 'custom', 'default', 'none', 'premium'.
   * @default none
   */
  boardBackgrounds: string;
  /**
   * Board Stars
   * @description Include information about the member's starred boards. Valid values: 'true', 'false'.
   */
  boardStars?: string;
  /**
   * Board Action Fields
   * @description Fields to return for each board action. Valid values: 'all' or a comma-separated list (e.g., 'data,date').
   * @default all
   */
  board_action_fields: string;
  /**
   * Board Actions
   * @description Filters board actions by type. Valid values: 'all' or a comma-separated list of action types (e.g., createCard, updateBoard).
   */
  board_actions?: string;
  /**
   * Board Actions Display
   * @description Include display information for board actions. Valid values: 'true', 'false'.
   */
  board_actions_display?: string;
  /**
   * Board Actions Entities
   * @description Include related entities in board actions. Valid values: 'true', 'false'.
   */
  board_actions_entities?: string;
  /**
   * Board Actions Format
   * @description Format for board actions. Valid values: 'count', 'list', 'minimal'.
   * @default list
   */
  board_actions_format: string;
  /**
   * Board Actions Limit
   * @description Maximum number of board actions to return (0-1000).
   * @default 50
   */
  board_actions_limit: string;
  /**
   * Board Actions Since
   * @description Retrieve board actions created after this date/time (ISO 8601 or 'lastView'), or 'null' for no restriction.
   */
  board_actions_since?: string;
  /**
   * Board Fields
   * @description Fields to return for each board. Valid values: 'all' or a comma-separated list (e.g., 'name,idOrganization').
   * @default name, closed, idOrganization and pinned
   */
  board_fields: string;
  /**
   * Board Lists
   * @description Filters lists on boards. Valid values: 'all', 'closed', 'none', 'open'.
   * @default open
   */
  board_lists: string;
  /**
   * Board Memberships
   * @description Filters board memberships. Valid values: 'all' or a comma-separated list (e.g., 'active,admin').
   * @default none
   */
  board_memberships: string;
  /**
   * Board Organization
   * @description Include the organization for each board. Valid values: 'true', 'false'.
   */
  board_organization?: string;
  /**
   * Board Organization Fields
   * @description Fields to return for the board's organization. Valid values: 'all' or a comma-separated list (e.g., 'name,displayName').
   * @default name and displayName
   */
  board_organization_fields: string;
  /**
   * Boards
   * @description Filters boards. Valid values: 'all' or a comma-separated list (e.g., 'open,starred').
   */
  boards?: string;
  /**
   * Boards Invited
   * @description Filters boards the member has been invited to. Valid values: 'all' or a comma-separated list (e.g., 'open,starred').
   */
  boardsInvited?: string;
  /**
   * Boards Invited Fields
   * @description Fields to return for boards the member has been invited to. Valid values: 'all' or a comma-separated list (e.g., 'name,idOrganization').
   * @default name, closed, idOrganization and pinned
   */
  boardsInvited_fields: string;
  /**
   * Card Attachment Fields
   * @description Fields to return for card attachments. Valid values: 'all' or a comma-separated list (e.g., 'url,name').
   * @default url and previews
   */
  card_attachment_fields: string;
  /**
   * Card Attachments
   * @description Include card attachments. Valid values: 'true', 'false', 'cover'.
   */
  card_attachments?: string;
  /**
   * Card Fields
   * @description Fields to return for each card. Valid values: 'all' or a comma-separated list (e.g., 'name,desc').
   * @default all
   */
  card_fields: string;
  /**
   * Card Member Fields
   * @description Fields to return for card members. Valid values: 'all' or a comma-separated list (e.g., 'fullName,username').
   * @default avatarHash, fullName, initials and username
   */
  card_member_fields: string;
  /**
   * Card Members
   * @description Include member objects for each card. Valid values: 'true', 'false'.
   */
  card_members?: string;
  /**
   * Card Stickers
   * @description Include sticker information for cards. Valid values: 'true', 'false'.
   */
  card_stickers?: string;
  /**
   * Cards
   * @description Filters cards. Valid values: 'all', 'closed', 'none', 'open', 'visible'.
   * @default none
   */
  cards: string;
  /**
   * Custom Board Backgrounds
   * @description Filters custom board backgrounds. Valid values: 'all', 'none'.
   * @default none
   */
  customBoardBackgrounds: string;
  /**
   * Custom Emoji
   * @description Filters custom emoji. Valid values: 'all', 'none'.
   * @default none
   */
  customEmoji: string;
  /**
   * Custom Stickers
   * @description Filters custom stickers. Valid values: 'all', 'none'.
   * @default none
   */
  customStickers: string;
  /**
   * Fields
   * @description Member fields to return. Valid values: 'all' or a comma-separated list (e.g., 'fullName,username,email').
   * @default all
   */
  fields: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Notification Before
   * @description Retrieve notifications created before this notification ID, or 'null' for no restriction.
   */
  notification_before?: string;
  /**
   * Notification Fields
   * @description Fields to return for notifications. Valid values: 'all' or a comma-separated list (e.g., 'data,date,unread').
   * @default all
   */
  notification_fields: string;
  /**
   * Notification Member Creator
   * @description Include the member creator for notifications. Valid values: 'true', 'false'.
   */
  notification_memberCreator?: string;
  /**
   * Notification Member Creator Fields
   * @description Fields for the notification member creator. Valid values: 'all' or a comma-separated list (e.g., 'fullName,username').
   * @default avatarHash, fullName, initials and username
   */
  notification_memberCreator_fields: string;
  /**
   * Notification Since
   * @description Retrieve notifications created after this notification ID, or 'null' for no restriction.
   */
  notification_since?: string;
  /**
   * Notifications
   * @description Filters notifications by type. Valid values: 'all' or a comma-separated list of notification types (e.g., commentCard, addedToBoard).
   */
  notifications?: string;
  /**
   * Notifications Display
   * @description Include display information for notifications. Valid values: 'true', 'false'.
   */
  notifications_display?: string;
  /**
   * Notifications Entities
   * @description Include related entities in notifications. Valid values: 'true', 'false'.
   */
  notifications_entities?: string;
  /**
   * Notifications Limit
   * @description Maximum number of notifications to return (1-1000).
   * @default 50
   */
  notifications_limit: string;
  /**
   * Organization Fields
   * @description Fields to return for organizations. Valid values: 'all' or a comma-separated list (e.g., 'name,displayName').
   * @default all
   */
  organization_fields: string;
  /**
   * Organization Paid Account
   * @description Include paid account information for organizations. Valid values: 'true', 'false'.
   */
  organization_paid_account?: string;
  /**
   * Organizations
   * @description Filters organizations the member belongs to. Valid values: 'all', 'members', 'none', 'public'.
   * @default none
   */
  organizations: string;
  /**
   * Organizations Invited
   * @description Filters organizations the member has been invited to. Valid values: 'all', 'members', 'none', 'public'.
   * @default none
   */
  organizationsInvited: string;
  /**
   * Organizations Invited Fields
   * @description Fields to return for organizations the member has been invited to. Valid values: 'all' or a comma-separated list (e.g., 'name,displayName').
   * @default all
   */
  organizationsInvited_fields: string;
  /**
   * Paid Account
   * @description Include paid account information for the member. Valid values: 'true', 'false'.
   */
  paid_account?: string;
  /**
   * Saved Searches
   * @description Include the member's saved searches. Valid values: 'true', 'false'.
   */
  savedSearches?: string;
  /**
   * Tokens
   * @description Filters API tokens for the member. Valid values: 'all', 'none'.
   * @default none
   */
  tokens: string;
};

/**
 * Type of TRELLO's TRELLO_MEMBER_GET_BY_ID tool output.
 */
type TRELLO_MEMBER_GET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the member's details based on the requested fields and filters.
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
 * Type of TRELLO's TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS tool input.
 */
type TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS_INPUT = {
  /**
   * Id Card
   * @description ID or short link of the card containing the checklist.
   */
  idCard?: string;
  /**
   * Id Check Item
   * @description ID of the checklist item to remove.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description ID of the checklist containing the item to be removed.
   */
  idChecklist?: string;
};

/**
 * Type of TRELLO's TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS tool output.
 */
type TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description Confirms deletion or provides error details; structure may vary.
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
 * Type of TRELLO's TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS tool input.
 */
type TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS_INPUT = {
  /**
   * Id Board Background
   * @description The ID of the custom board background to be removed.
   */
  idBoardBackground?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
};

/**
 * Type of TRELLO's TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS tool output.
 */
type TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_SEARCH_GET_RESULTS tool input.
 */
type TRELLO_SEARCH_GET_RESULTS_INPUT = {
  /**
   * Board Fields
   * @description Fields for found boards; 'all' or a comma-separated list (e.g., 'name,url'). Default is 'name and idOrganization'.
   * @default name and idOrganization
   */
  board_fields: string;
  /**
   * Boards Limit
   * @description Maximum number of board results. Must be 1-1000. Default is 1.
   * @default 1
   */
  boards_limit: string;
  /**
   * Card Attachments
   * @description Whether to include attachments for cards ('true', 'false', or 'cover' for card cover attachments).
   */
  card_attachments?: string;
  /**
   * Card Board
   * @description Whether to include the board object for each card returned ('true' or 'false').
   */
  card_board?: string;
  /**
   * Card Fields
   * @description Fields for found cards; 'all' or a comma-separated list (e.g., 'name,due'). Default is 'all'.
   * @default all
   */
  card_fields: string;
  /**
   * Card List
   * @description Whether to include the list object for each card returned ('true' or 'false').
   */
  card_list?: string;
  /**
   * Card Members
   * @description Whether to include member objects for each card returned ('true' or 'false').
   */
  card_members?: string;
  /**
   * Card Stickers
   * @description Whether to include sticker objects for each card returned ('true' or 'false').
   */
  card_stickers?: string;
  /**
   * Cards Limit
   * @description Maximum number of card results. Must be 1-1000. Default is 1.
   * @default 1
   */
  cards_limit: string;
  /**
   * Cards Page
   * @description Page number for paginated card results. Must be 0-100. Default is 0.
   * @default 0
   */
  cards_page: string;
  /**
   * Id Boards
   * @description A comma-separated list of board IDs to search within. Default is 'mine' (boards the user is a member of).
   * @default mine
   */
  idBoards: string;
  /**
   * Id Cards
   * @description A comma-separated list of card IDs to search for.
   */
  idCards?: string;
  /**
   * Id Organizations
   * @description A comma-separated list of organization IDs to search within. This field is required.
   */
  idOrganizations?: string;
  /**
   * Member Fields
   * @description Fields for found members; 'all' or a comma-separated list (e.g., 'fullName,username'). Default is 'avatarHash, fullName, initials, username and confirmed'.
   * @default avatarHash, fullName, initials, username and confirmed
   */
  member_fields: string;
  /**
   * Members Limit
   * @description Maximum number of member results. Must be 1-1000. Default is 10.
   * @default 10
   */
  members_limit: string;
  /**
   * Model Types
   * @description Types of Trello objects to search (e.g., 'cards,boards' or 'all' from 'actions', 'boards', 'cards', 'members', 'organizations'). Default is 'all'.
   * @default all
   */
  modelTypes: string;
  /**
   * Organization Fields
   * @description Fields for found organizations; 'all' or a comma-separated list (e.g., 'name,url'). Default is 'name and displayName'.
   * @default name and displayName
   */
  organization_fields: string;
  /**
   * Organizations Limit
   * @description Maximum number of organization results. Must be 1-1000. Default is 10.
   * @default 10
   */
  organizations_limit: string;
  /**
   * Partial
   * @description Whether to enable partial matching for the search query ('true' or 'false').
   */
  partial?: string;
  /**
   * Query
   * @description The search query string. Must be between 1 and 16384 characters long.
   */
  query?: string;
};

/**
 * Type of TRELLO's TRELLO_SEARCH_GET_RESULTS tool output.
 */
type TRELLO_SEARCH_GET_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Search results, where keys usually match `modelTypes` (e.g., 'cards', 'boards') and values are lists of matching objects.
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
 * Type of TRELLO's TRELLO_TOKEN_GET_MEMBER_BY_TOKEN tool input.
 */
type TRELLO_TOKEN_GET_MEMBER_BY_TOKEN_INPUT = {
  /**
   * Fields
   * @description Specifies the member fields to return. Use 'all' for all fields, or a comma-separated list of specific field names. Available fields: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, trophies, uploadedAvatarHash, url, username.
   * @default all
   */
  fields: string;
};

/**
 * Type of TRELLO's TRELLO_TOKEN_GET_MEMBER_BY_TOKEN tool output.
 */
type TRELLO_TOKEN_GET_MEMBER_BY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the requested member information. The structure of this dictionary is determined by the 'fields' parameter in the request.
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
 * Type of TRELLO's TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR tool input.
 */
type TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR_INPUT = {
  /**
   * Id Board
   * @description ID of the Trello board this star should point to; if provided, updates the star's reference.
   */
  idBoard?: string;
  /**
   * Id Board Star
   * @description Unique ID of the board star to update (not the board ID it points to).
   */
  idBoardStar?: string;
  /**
   * Id Member
   * @description ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Pos
   * @description New position for the board star ('top', 'bottom', or a positive number string like '1' or '1024.5'). 'top' is first, 'bottom' is last.
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR tool output.
 */
type TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR_OUTPUT = {
  /**
   * Data
   * @description Details of the updated board star, including its ID, starred board ID, and position.
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
 * Type of TRELLO's TRELLO_UPDATE_ACTIONS_BY_ID_ACTION tool input.
 */
type TRELLO_UPDATE_ACTIONS_BY_ID_ACTION_INPUT = {
  /**
   * Id Action
   * @description The unique identifier of the action (comment) to be updated.
   */
  idAction?: string;
  /**
   * Text
   * @description The new text content for the action (comment). Must be a string with a length from 1 to 16384 characters.
   */
  text?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ACTIONS_BY_ID_ACTION tool output.
 */
type TRELLO_UPDATE_ACTIONS_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description The Trello API response, typically containing the updated action object.
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
 * Type of TRELLO's TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION tool input.
 */
type TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION_INPUT = {
  /**
   * Id Action
   * @description The unique identifier of the Trello action (e.g., a comment or card update) whose text needs to be updated.
   */
  idAction?: string;
  /**
   * Value
   * @description The new text content for the action. This string must have a length between 1 and 16384 characters, inclusive.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION tool output.
 */
type TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Trello API's response, typically representing the details of the action after its text has been updated.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_BY_ID_BOARD_INPUT = {
  /**
   * Closed
   * @description Set to 'true' to close (archive) the board, or 'false' to re-open.
   */
  closed?: string;
  /**
   * Desc
   * @description New board description (max 16384 characters). An empty string removes the current description.
   */
  desc?: string;
  /**
   * Id Board
   * @description The ID of the Trello board to update.
   */
  idBoard?: string;
  /**
   * Id Board Source
   * @description ID of an existing board to copy settings (e.g., lists, labels) from.
   */
  idBoardSource?: string;
  /**
   * Id Organization
   * @description ID or name of the Trello Workspace to associate with this board.
   */
  idOrganization?: string;
  /**
   * Keep From Source
   * @description Comma-separated components to copy from `idBoardSource` (e.g., 'cards,labels', 'all'). Defaults to 'cards' if `idBoardSource` is set. Valid: `cards`, `lists`, `members`, `checklists`, `comments`, `labels`, `stickers`, `attachments`.
   */
  keepFromSource?: string;
  /**
   * Label Names  Blue
   * @description Custom name for the blue label (max 16384 chars). Maps to API parameter 'labelNames/blue'.
   */
  labelNames__blue?: string;
  /**
   * Label Names  Green
   * @description Custom name for the green label (max 16384 chars). Maps to API parameter 'labelNames/green'.
   */
  labelNames__green?: string;
  /**
   * Label Names  Orange
   * @description Custom name for the orange label (max 16384 chars). Maps to API parameter 'labelNames/orange'.
   */
  labelNames__orange?: string;
  /**
   * Label Names  Purple
   * @description Custom name for the purple label (max 16384 chars). Maps to API parameter 'labelNames/purple'.
   */
  labelNames__purple?: string;
  /**
   * Label Names  Red
   * @description Custom name for the red label (max 16384 chars). Maps to API parameter 'labelNames/red'.
   */
  labelNames__red?: string;
  /**
   * Label Names  Yellow
   * @description Custom name for the yellow label (max 16384 chars). Maps to API parameter 'labelNames/yellow'.
   */
  labelNames__yellow?: string;
  /**
   * Name
   * @description New name for the board (1-16384 characters).
   */
  name?: string;
  /**
   * Power Ups
   * @description Power-Ups to enable (e.g., 'calendar,voting', 'all'). Valid: `calendar`, `cardAging`, `recap`, `voting`.
   */
  powerUps?: string;
  /**
   * Prefs  Background
   * @description Board background. Maps to API parameter 'prefs/background'. Use a standard Trello background name (e.g., 'blue', 'orange', 'green', 'red', 'purple', 'pink', 'lime', 'sky', 'grey') or the ID of a custom background image.
   */
  prefs__background?: string;
  /**
   * Prefs  Calendar Feed Enabled
   * @description Enable or disable the iCalendar feed. Maps to API parameter 'prefs/calendarFeedEnabled'. Set to 'true' or 'false'.
   */
  prefs__calendarFeedEnabled?: string;
  /**
   * Prefs  Card Aging
   * @description Card aging style. Maps to API parameter 'prefs/cardAging'. Allowed values: `pirate`, `regular`.
   */
  prefs__cardAging?: string;
  /**
   * Prefs  Card Covers
   * @description Enable or disable card covers. Maps to API parameter 'prefs/cardCovers'. Set to 'true' or 'false'.
   */
  prefs__cardCovers?: string;
  /**
   * Prefs  Comments
   * @description Commenting permissions. Maps to API parameter 'prefs/comments'. Allowed values: `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefs__comments?: string;
  /**
   * Prefs  Invitations
   * @description Invitation permissions. Maps to API parameter 'prefs/invitations'. Allowed values: `admins`, `members`.
   */
  prefs__invitations?: string;
  /**
   * Prefs  Permission Level
   * @description Board visibility and permission level. Maps to API parameter 'prefs/permissionLevel'. Allowed values: `org` (Workspace-visible), `private`, `public`.
   */
  prefs__permissionLevel?: string;
  /**
   * Prefs  Self Join
   * @description Enable or disable self-join for Workspace members. Maps to API parameter 'prefs/selfJoin'. Set to 'true' or 'false'.
   */
  prefs__selfJoin?: string;
  /**
   * Prefs  Voting
   * @description Voting permissions. Maps to API parameter 'prefs/voting'. Allowed values: `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefs__voting?: string;
  /**
   * Prefs Background
   * @description Board background. Maps to API parameter 'prefs_background'. Can be a color name, a custom background ID, or a Trello photo ID. Max length: 16384 characters.
   */
  prefs_background?: string;
  /**
   * Prefs Card Aging
   * @description Card aging style. Maps to API parameter 'prefs_cardAging'. Allowed values: `pirate`, `regular`.
   */
  prefs_cardAging?: string;
  /**
   * Prefs Card Covers
   * @description Enables or disables card covers. Maps to API parameter 'prefs_cardCovers'. Set to 'true' or 'false'.
   */
  prefs_cardCovers?: string;
  /**
   * Prefs Comments
   * @description Commenting permissions. Maps to API parameter 'prefs_comments'. Allowed values: `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefs_comments?: string;
  /**
   * Prefs Invitations
   * @description Invitation permissions. Maps to API parameter 'prefs_invitations'. Allowed values: `admins`, `members`.
   */
  prefs_invitations?: string;
  /**
   * Prefs Permission Level
   * @description Board's visibility and permission level. Maps to API parameter 'prefs_permissionLevel'. Allowed values: `org`, `private`, `public`.
   */
  prefs_permissionLevel?: string;
  /**
   * Prefs Self Join
   * @description Enables or disables self-join for Workspace members. Maps to API parameter 'prefs_selfJoin'. Set to 'true' or 'false'.
   */
  prefs_selfJoin?: string;
  /**
   * Prefs Voting
   * @description Voting permissions. Maps to API parameter 'prefs_voting'. Allowed values: `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefs_voting?: string;
  /**
   * Subscribed
   * @description 'true' or 'false' for the authenticated user to be subscribed to the board.
   */
  subscribed?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description Details of the updated Trello board.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The desired closed state for the board. Set to the string 'true' to close (archive) the board, or the string 'false' to reopen it.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the Trello board with its updated 'closed' status and other properties.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose description will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new description for the board. Must be a string with a length between 0 and 16384 characters. Providing an empty string ("") will clear the board's description. If `null` is sent or the field is omitted, Trello's behavior might vary, potentially leaving the description unchanged or clearing it; use an empty string for an explicit clear.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board to be moved to a new organization.
   */
  idBoard?: string;
  /**
   * Value
   * @description The ID of the new Trello organization to which the board will be moved. Must be a string with a length between 0 and 16384 characters. An empty string may be used to attempt to remove the board from its current organization, if the Trello API supports this behavior.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response. The exact contents can vary and might be minimal; it may not include full updated board details.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose blue label name is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name for the blue label. Must be a string with a length from 0 to 16384 characters. An empty string can be used to remove the current name.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board for which the green label name will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name for the green label (0-16384 characters). An empty string may reset the name or cause an error.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description The response data from the Trello API, typically confirming the update or providing details of the updated label settings.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose orange label name is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name for the orange label. It must be a string with a length from 0 to 16384 characters. An empty string will remove the current custom name.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description The Trello API response data. This is typically a dictionary, which might be empty on success or contain details of the updated resource such as the board or label.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board where the purple label's name will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name to be assigned to the purple label. This string must have a length between 0 and 16384 characters. An empty string can be used to clear the existing custom name.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response from Trello, typically reflecting the updated state of the board or label after the operation.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose red label name is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name for the red label. Must be a string with a length between 0 and 16384 characters. An empty string is a valid value to clear the name.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board where the yellow label name will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name for the yellow label. Must be a string with a length between 0 and 16384 characters. An empty string ("") will remove the current name of the label.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response from Trello, which typically includes confirmation or details of the updated label.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_INPUT = {
  /**
   * Email
   * @description Email address of the user to add or update. Typically required by Trello.
   */
  email?: string;
  /**
   * Full Name
   * @description Full name for a new user invitation; must be >=1 character and no leading/trailing spaces.
   */
  fullName?: string;
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Type
   * @description Role to assign to the member on the board, determining permissions. Typically required by Trello.
   */
  type?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description Trello API's response, which may include details of the board or updated member.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_INPUT = {
  /**
   * Email
   * @description New board-specific email address for the member; does not change their global Trello account email.
   */
  email?: string;
  /**
   * Full Name
   * @description New board-specific full name for the member; must be >=1 character and not start/end with a space.
   */
  fullName?: string;
  /**
   * Id Board
   * @description ID of the board.
   */
  idBoard?: string;
  /**
   * Id Member
   * @description ID of the member to update.
   */
  idMember?: string;
  /**
   * Type
   * @description New role for the member on this board, determining their permissions.
   */
  type?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Updated attributes of the board member.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which to update the email position preference.
   */
  idBoard?: string;
  /**
   * Value
   * @description Desired position for new cards created via email.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description Trello API response, typically confirming the update or detailing board preferences.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description ID of the board whose email-to-list preference will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description ID of an existing list on the board to be the default for emailed cards, or 'none' to disable this feature.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description API response from Trello, typically confirming the update or reflecting the board's new 'myPrefs'.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Value
   * @description Determines whether the list guide is shown; use 'true' to display or 'false' to hide.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description API response data, typically confirming the updated preference. Structure may vary.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose sidebar activity visibility preference is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description Determines the visibility of the sidebar activity. Set to 'true' to show the activity feed, or 'false' to hide it.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated 'myPrefs' for the board, including the new 'showSidebarActivity' status.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the board for which to update the sidebar visibility preference.
   */
  idBoard?: string;
  /**
   * Value
   * @description Set to 'true' to show the sidebar, or 'false' to hide it.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary which, upon success, is often empty or contains a simple confirmation, as the API primarily indicates success via HTTP status codes. In case of errors, it might contain error details.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which the sidebar member visibility preference will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description Determines whether to show members in the board sidebar. Set to 'true' to show members, or 'false' to hide them. This is a per-user preference.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description The Trello API response, typically confirming the updated preference.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose name is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new name for the board. Must be a string with a length between 1 and 16384 characters.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated Trello board.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the board for which the background preference will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The standard background name (e.g., 'blue', 'pink', 'grey', 'green', 'orange', 'purple', 'sky', 'rose', 'lime', 'lake', 'mountains', 'forest', 'beach', 'city') or the ID of a previously uploaded custom background. If not provided or set to null/empty string, Trello may revert to a default or existing background based on its internal logic.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated board preferences, typically reflecting the new background setting.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board for which to update the calendar feed preference.
   */
  idBoard?: string;
  /**
   * Value
   * @description A string value that enables or disables the calendar feed. Set to 'true' to enable, or 'false' to disable.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated board preferences, typically including the new state of the 'calendarFeedEnabled' preference and other relevant board preference fields.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board for which to update the card aging preference.
   */
  idBoard?: string;
  /**
   * Value
   * @description The card aging preference to set for the board. 'pirate' mode makes cards visually age (yellow, tear, and crack) over time to indicate inactivity, while 'regular' mode uses a standard visual representation.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board for which the card cover display preference will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The desired state for card covers on the board. Set to 'true' to enable (show) card covers, or 'false' to disable (hide) them.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description API response from Trello, typically including the updated board preferences.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board whose comment preferences are to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description Specifies the new permission level for who can add comments to cards on the board.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description Identifier of the Trello board whose invitation preferences will be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description Determines who can invite new members to the board: 'admins' (only administrators) or 'members' (all current members).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description API response from Trello, typically confirming the updated board preferences.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board whose permission level preference is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new permission level for the board. Must be one of 'private' (board is private) or 'public' (board is public).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response data from Trello. This typically includes the updated board preferences or a confirmation of the change. The exact structure may vary.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier (ID) of the Trello board whose 'selfJoin' preference is to be updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description Specifies the new 'selfJoin' preference for the board. Provide the string 'true' to enable users to join the board on their own, or 'false' to make the board invite-only.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description The response body from the Trello API, typically containing a dictionary with the board's updated preferences or the full board object.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which to update voting preferences.
   */
  idBoard?: string;
  /**
   * Value
   * @description The desired voting permission level for the board. Determines who can vote on cards. Allowed values: 'disabled' (voting is disabled), 'members' (only board members can vote), 'observers' (board members and observers can vote), 'org' (members of the organization to which the board belongs can vote), or 'public' (any Trello user can vote).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated board information, reflecting the new voting preference setting.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD tool input.
 */
type TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board for which to update the subscription status.
   */
  idBoard?: string;
  /**
   * Value
   * @description The new subscription status. Set to 'true' to subscribe to the board, or 'false' to unsubscribe.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD tool output.
 */
type TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD_OUTPUT = {
  /**
   * Data
   * @description Trello's response after updating the board subscription; contents may vary.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARD_MEMBERSHIP tool input.
 */
type TRELLO_UPDATE_BOARD_MEMBERSHIP_INPUT = {
  /**
   * Id Board
   * @description Unique identifier of the Trello board.
   */
  idBoard?: string;
  /**
   * Id Membership
   * @description Unique identifier of the membership to be updated.
   */
  idMembership?: string;
  /**
   * Member Fields
   * @description Fields for the member to include in the response. Use 'all' or a comma-separated list (e.g., avatarHash, bio, fullName).
   */
  member_fields?: string;
  /**
   * Type
   * @description New role for the member on the board, determining their permissions. Must be 'admin', 'normal', or 'observer'.
   */
  type?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARD_MEMBERSHIP tool output.
 */
type TRELLO_UPDATE_BOARD_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Details of the updated board membership; specific fields returned depend on the `member_fields` request parameter.
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
 * Type of TRELLO's TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS tool input.
 */
type TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS_INPUT = {
  /**
   * Id Board
   * @description The unique identifier of the Trello board for which the 'showSidebarBoardActions' preference is being updated.
   */
  idBoard?: string;
  /**
   * Value
   * @description Controls the visibility of sidebar board actions. Use 'true' to show them, 'false' to hide them.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS tool output.
 */
type TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARD_STAR_POSITION tool input.
 */
type TRELLO_UPDATE_BOARD_STAR_POSITION_INPUT = {
  /**
   * Id Board Star
   * @description The unique identifier of the specific board star whose position is to be changed. Each board starred by a member has a unique `idBoardStar`.
   */
  idBoardStar?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member. The special value 'me' can be used to refer to the currently authenticated user.
   */
  idMember?: string;
  /**
   * Value
   * @description The new position for the starred board. Valid inputs are the literal strings 'top', 'bottom', or a string representing a positive number (e.g., '1', '2.5', '10').
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_BOARD_STAR_POSITION tool output.
 */
type TRELLO_UPDATE_BOARD_STAR_POSITION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response, typically the updated boardStar object with its new position details.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_BY_ID_CARD_INPUT = {
  /**
   * Closed
   * @description Determines whether the card should be archived (closed). Set to 'true' to archive, 'false' to unarchive.
   */
  closed?: string;
  /**
   * Desc
   * @description The new description for the card. String length must be from 0 to 16384 characters.
   */
  desc?: string;
  /**
   * Due
   * @description The new due date for the card, in ISO 8601 format, or 'null' to remove the due date.
   */
  due?: string;
  /**
   * File Source
   * @description The URL of a file to be attached to the card. Trello will fetch and attach the file from this URL.
   */
  fileSource?: string;
  /**
   * Id Attachment Cover
   * @description The ID of an existing image attachment to be used as the card cover. Use 'null' or an empty string to remove the cover.
   */
  idAttachmentCover?: string;
  /**
   * Id Board
   * @description The ID of the board to move the card to. If `idList` is also provided, the card will be moved to that list on the new board.
   */
  idBoard?: string;
  /**
   * Id Card
   * @description The ID or shortLink of the card to update.
   */
  idCard?: string;
  /**
   * Id Card Source
   * @description The ID of a card to copy properties from. Requires `keepFromSource` to be specified.
   */
  idCardSource?: string;
  /**
   * Id Labels
   * @description Comma-separated list of label IDs to apply, replacing existing labels. To preserve existing labels, fetch current `idLabels`, append new ones, and submit the combined list.
   */
  idLabels?: string;
  /**
   * Id List
   * @description The ID of the list to move the card to.
   */
  idList?: string;
  /**
   * Id Members
   * @description Comma-separated list of member IDs to assign, replacing existing members. To preserve existing members, fetch current `idMembers`, append new ones, and submit the combined list.
   */
  idMembers?: string;
  /**
   * Keep From Source
   * @description If `idCardSource` is specified, this is a comma-separated list of properties to copy from the source card. Valid values are 'all', or any combination of 'attachments', 'checklists', 'comments', 'customFields', 'due', 'labels', 'members', 'pluginData', 'stickers'.
   */
  keepFromSource?: string;
  /**
   * Labels
   * @description Comma-separated list of label colors (e.g., 'green,yellow,red') to apply, overwriting existing labels. Use 'idLabels' for more precise control. 'all' may add all available label colors.
   */
  labels?: string;
  /**
   * Name
   * @description The new name for the card. Required if not copying the name from `idCardSource`, `fileSource`, or `urlSource`.
   */
  name?: string;
  /**
   * Pos
   * @description The new position of the card within its list. Can be 'top', 'bottom', or a positive floating-point number. Higher numbers are further down the list.
   */
  pos?: string;
  /**
   * Subscribed
   * @description Determines whether the user is subscribed to the card. Set to 'true' to subscribe, 'false' to unsubscribe.
   */
  subscribed?: string;
  /**
   * Url Source
   * @description A URL to be attached to the card (e.g., a link to an external resource). If the card is being created from a URL (e.g. via a bookmarklet), this will be the source URL. Set to 'null' or an empty string to remove an existing attachment link created this way.
   */
  urlSource?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description The full card object as a JSON response after the update.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card to be updated. The card ID is a 24-character hexadecimal string, while the shortLink is a shorter code found in the card's URL.
   */
  idCard?: string;
  /**
   * Value
   * @description Desired 'closed' state: 'true' to close (archive) the card, 'false' to re-open (unarchive) and return it to the board.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description The Trello card object after the update, including its new 'closed' status and other details.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card whose description will be updated.
   */
  idCard?: string;
  /**
   * Value
   * @description The new description for the card (0-16384 characters). An empty string clears the card's current description.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description The updated card object.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the Trello card to update.
   */
  idCard?: string;
  /**
   * Value
   * @description The new due date for the card (e.g., 'YYYY-MM-DD', 'YYYY-MM-DDTHH:mm:ss.sssZ'), or `null` to remove the current due date.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the Trello card object with the updated due date information.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description ID or shortLink of the Trello card.
   */
  idCard?: string;
  /**
   * Value
   * @description ID of an existing image attachment on the card for the cover; provide `None` (or omit, as it defaults to `None`) to remove the cover.
   * @default null
   */
  value: string | null;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description The updated Trello card object.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the card to be moved. This card must exist.
   */
  idCard?: string;
  /**
   * Id List
   * @description The ID of the list on the destination board where the card should be placed. If not provided, the card will be moved to the default list (usually the first one) on the target board.
   */
  idList?: string;
  /**
   * Value
   * @description The ID of the destination board to which the card will be moved. This board must exist and be accessible.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full details of the updated card after being moved.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card to be moved. Card IDs can be short (e.g., `FY2OWrnc`) or long (e.g., `571d07b591c8b68aeb4f6acc`).
   */
  idCard?: string;
  /**
   * Value
   * @description The ID of the target list to move the card to. This ID uniquely identifies the list within the Trello board (e.g., `5f7704097d4d9b4c...`).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortlink of the Trello card to which the member will be added.
   */
  idCard?: string;
  /**
   * Value
   * @description The ID of the Trello member to be added to the card.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description API response from Trello; successful addition may include the card's updated member ID list or a confirmation object.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD_INPUT = {
  /**
   * Color
   * @description Color for a label. Valid Trello label colors: 'yellow', 'purple', 'blue', 'red', 'green', 'orange', 'black', 'sky', 'pink', 'lime'.
   */
  color?: string;
  /**
   * Id Card
   * @description The ID or short link of the Trello card whose labels are to be updated.
   */
  idCard?: string;
  /**
   * Name
   * @description Name for a label (0-16384 characters).
   */
  name?: string;
  /**
   * Value
   * @description Comma-separated list of label colors (see examples) or 'all'. Uses valid Trello label colors.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response, which may include details of the updated labels or card.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or shortLink of the Trello card whose name is to be updated.
   */
  idCard?: string;
  /**
   * Value
   * @description The new name for the card. Must be a string with a length from 1 to 16384 characters.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the Trello card object with its updated name and other properties.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_POS_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_POS_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description ID or shortLink of the Trello card to move.
   */
  idCard?: string;
  /**
   * Value
   * @description New position for the card: 'top', 'bottom', or a positive integer (1-indexed).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_POS_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_POS_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description Full JSON representation of the moved card.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER tool input.
 */
type TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card containing the sticker.
   */
  idCard?: string;
  /**
   * Id Sticker
   * @description The ID of the sticker to be updated.
   */
  idSticker?: string;
  /**
   * Image
   * @description New image for the sticker (URL or pre-defined identifier); length 0-16384.
   */
  image?: string;
  /**
   * Left
   * @description Horizontal position (x-coordinate) in pixels, as a numeric string.
   */
  left?: string;
  /**
   * Rotate
   * @description Rotation angle in degrees. Note: Trello's API may not fully support this; parameter might be ignored or cause an error.
   */
  rotate?: string;
  /**
   * Top
   * @description Vertical position (y-coordinate) in pixels, as a numeric string.
   */
  top?: string;
  /**
   * Z Index
   * @description Stacking order (depth), as an integer string (e.g., '1'). Higher values are on top.
   */
  zIndex?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER tool output.
 */
type TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated sticker.
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
 * Type of TRELLO's TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD tool input.
 */
type TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the Trello card to update.
   */
  idCard?: string;
  /**
   * Value
   * @description The desired subscription status. Set to 'true' to subscribe or 'false' to unsubscribe.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD tool output.
 */
type TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response data after attempting to update the card's subscription status. The structure may vary based on Trello's response.
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
 * Type of TRELLO's TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION tool input.
 */
type TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION_INPUT = {
  /**
   * Id Card
   * @description ID or short link of the card containing the checklist.
   */
  idCard?: string;
  /**
   * Id Check Item
   * @description ID of the check item to move.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description ID of the checklist containing the item to be moved.
   */
  idChecklist?: string;
  /**
   * Value
   * @description New position: 'top', 'bottom', or a positive integer. 'top' moves to the beginning, 'bottom' to the end.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION tool output.
 */
type TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION_OUTPUT = {
  /**
   * Data
   * @description Trello API response detailing the updated item or card.
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
 * Type of TRELLO's TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS tool input.
 */
type TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the Trello card containing the checklist item.
   */
  idCard?: string;
  /**
   * Id Check Item
   * @description The ID of the check item within the checklist whose state needs to be updated.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description The ID of the checklist on the card that contains the check item to be updated.
   */
  idChecklist?: string;
  /**
   * Value
   * @description The new state for the check item. Use 'complete' or 'true' to mark as complete, and 'incomplete' or 'false' to mark as incomplete.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS tool output.
 */
type TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated check item or a confirmation from the Trello API.
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
 * Type of TRELLO's TRELLO_UPDATE_CARD_COMMENT tool input.
 */
type TRELLO_UPDATE_CARD_COMMENT_INPUT = {
  /**
   * Id Action
   * @description The ID of the comment action to be updated. In Trello, a comment on a card is an action.
   */
  idAction?: string;
  /**
   * Id Card
   * @description The ID or short link of the card containing the comment to be updated.
   */
  idCard?: string;
  /**
   * Text
   * @description The new text for the comment (1-16384 characters).
   */
  text?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CARD_COMMENT tool output.
 */
type TRELLO_UPDATE_CARD_COMMENT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated comment action from the Trello API.
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
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board to which the checklist should be moved or associated.
   */
  idBoard?: string;
  /**
   * Id Card
   * @description The ID of the Trello card to which the checklist should be moved or associated.
   */
  idCard?: string;
  /**
   * Id Checklist
   * @description The unique identifier of the Trello checklist to be updated.
   */
  idChecklist?: string;
  /**
   * Id Checklist Source
   * @description The ID of a source Trello checklist whose items should be copied into the checklist being updated.
   */
  idChecklistSource?: string;
  /**
   * Name
   * @description The new name for the checklist. Must be a string with a length between 0 and 16384 characters, inclusive.
   */
  name?: string;
  /**
   * Pos
   * @description The new position for the checklist on the card. Accepts 'top', 'bottom', or a string representing a positive number (e.g., '1', '1024', '1.5').
   */
  pos?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the full representation of the updated Trello checklist.
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
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST tool input.
 */
type TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Checklist
   * @description ID of the checklist to be moved.
   */
  idChecklist?: string;
  /**
   * Value
   * @description ID of the destination card for the checklist.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST tool output.
 */
type TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description Trello API response, typically reflecting the checklist's updated state after being moved.
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
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST tool input.
 */
type TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Checklist
   * @description The unique identifier of the checklist whose name is to be updated.
   */
  idChecklist?: string;
  /**
   * Value
   * @description The new name to assign to the checklist. This name must be a string with a length between 1 and 16384 characters.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST tool output.
 */
type TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the checklist with its newly updated name and other properties.
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
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST tool input.
 */
type TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST_INPUT = {
  /**
   * Id Checklist
   * @description The unique identifier of the checklist to be repositioned.
   */
  idChecklist?: string;
  /**
   * Value
   * @description The new position for the checklist. Valid values are 'top', 'bottom', or a positive number (float or integer).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST tool output.
 */
type TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the details of the updated checklist, reflecting its new position, according to Trello's checklist object model.
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
 * Type of TRELLO's TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS tool input.
 */
type TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS_INPUT = {
  /**
   * Id Card
   * @description The ID or short link of the card containing the checklist item.
   */
  idCard?: string;
  /**
   * Id Check Item
   * @description The ID of the check item to be updated.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description The ID of the target checklist to move the check item to. If omitted, the item remains in its current checklist.
   */
  idChecklist?: string;
  /**
   * Id Checklist Current
   * @description The ID of the checklist that currently contains the check item to be updated.
   */
  idChecklistCurrent?: string;
  /**
   * Name
   * @description The new name for the check item. Must be a string with a length from 1 to 16384 characters.
   */
  name?: string;
  /**
   * Pos
   * @description The new position for the check item within its checklist. Accepts 'top', 'bottom', or a positive number (float or integer). Higher numbers are further down the list.
   */
  pos?: string;
  /**
   * State
   * @description The new completion state of the check item. Valid values are 'complete', 'incomplete', 'true', or 'false'. 'true' is an alias for 'complete', and 'false' is an alias for 'incomplete'.
   */
  state?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS tool output.
 */
type TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated check item.
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
 * Type of TRELLO's TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD tool input.
 */
type TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD_INPUT = {
  /**
   * Id Card
   * @description ID or shortLink of the card containing the checklist and item.
   */
  idCard?: string;
  /**
   * Id Check Item
   * @description ID of the check item within the specified checklist to rename.
   */
  idCheckItem?: string;
  /**
   * Id Checklist
   * @description ID of the checklist on the specified card, containing the item to be updated.
   */
  idChecklist?: string;
  /**
   * Value
   * @description New name for the check item (1-16384 characters).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD tool output.
 */
type TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LABELS_BY_ID_LABEL tool input.
 */
type TRELLO_UPDATE_LABELS_BY_ID_LABEL_INPUT = {
  /**
   * Color
   * @description The new color for the label. Provide a valid Trello label color name or 'null' to remove the color. If omitted, the color remains unchanged.
   * @default null
   */
  color: string | null;
  /**
   * Id Board
   * @description The ID of the board to which the label should be moved or associated. If omitted, the label's board association remains unchanged.
   * @default null
   */
  idBoard: string | null;
  /**
   * Id Label
   * @description The ID of the label to update.
   */
  idLabel?: string;
  /**
   * Name
   * @description The new name for the label. Must be a string with a length from 0 to 16384 characters. If omitted, the name remains unchanged.
   * @default null
   */
  name: string | null;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LABELS_BY_ID_LABEL tool output.
 */
type TRELLO_UPDATE_LABELS_BY_ID_LABEL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated label.
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
 * Type of TRELLO's TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL tool input.
 */
type TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL_INPUT = {
  /**
   * Id Label
   * @description The ID of the Trello label whose color is to be updated.
   */
  idLabel?: string;
  /**
   * Value
   * @description The new color for the label. Valid Trello label color names (e.g., 'green', 'yellow', 'red', 'blue', 'purple', 'orange', 'black', 'sky', 'pink', 'lime') or 'null' to remove the color.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL tool output.
 */
type TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL_OUTPUT = {
  /**
   * Data
   * @description The Trello API response, typically a JSON object representing the updated label.
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
 * Type of TRELLO's TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL tool input.
 */
type TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL_INPUT = {
  /**
   * Id Label
   * @description The unique identifier of the Trello label whose name is to be updated.
   */
  idLabel?: string;
  /**
   * Value
   * @description The new name for the label, with a length from 0 to 16384 characters.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL tool output.
 */
type TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_BY_ID_LIST tool input.
 */
type TRELLO_UPDATE_LISTS_BY_ID_LIST_INPUT = {
  /**
   * Closed
   * @description Set to 'true' to archive the list, or 'false' to unarchive.
   */
  closed?: string;
  /**
   * Id Board
   * @description ID of the board to move the list to.
   */
  idBoard?: string;
  /**
   * Id List
   * @description The unique identifier of the Trello list to be updated. This ID is a path parameter.
   */
  idList?: string;
  /**
   * Id List Source
   * @description ID of a source list whose cards will be copied to this list.
   */
  idListSource?: string;
  /**
   * Name
   * @description New name for the list (1-16384 characters).
   */
  name?: string;
  /**
   * Pos
   * @description New position for the list on the board (e.g., 'top', 'bottom', '1', '1024.5').
   */
  pos?: string;
  /**
   * Subscribed
   * @description Set to 'true' to subscribe the current user, or 'false' to unsubscribe.
   */
  subscribed?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_BY_ID_LIST tool output.
 */
type TRELLO_UPDATE_LISTS_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated Trello list.
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
 * Type of TRELLO's TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST tool input.
 */
type TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST_INPUT = {
  /**
   * Id List
   * @description The ID of the Trello list to update.
   */
  idList?: string;
  /**
   * Value
   * @description The new closed status for the list. Set to 'true' to close (archive) the list, or 'false' to re-open it.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST tool output.
 */
type TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST tool input.
 */
type TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST_INPUT = {
  /**
   * Id List
   * @description ID of the list to be moved.
   */
  idList?: string;
  /**
   * Pos
   * @description Position for the list on the destination board: 'top', 'bottom', or a positive number. If omitted, the list is typically added to the bottom.
   */
  pos?: string;
  /**
   * Value
   * @description ID of the destination board.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST tool output.
 */
type TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description Details of the updated list.
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
 * Type of TRELLO's TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST tool input.
 */
type TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST_INPUT = {
  /**
   * Id List
   * @description ID of the list to rename.
   */
  idList?: string;
  /**
   * Value
   * @description New name for the list (1-16384 characters).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST tool output.
 */
type TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description Response data, typically confirming the update or providing details of the updated list.
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
 * Type of TRELLO's TRELLO_UPDATE_LISTS_POS_BY_ID_LIST tool input.
 */
type TRELLO_UPDATE_LISTS_POS_BY_ID_LIST_INPUT = {
  /**
   * Id List
   * @description The ID of the Trello list whose position is to be updated.
   */
  idList?: string;
  /**
   * Value
   * @description New position for the list: 'top', 'bottom', or a positive number.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_POS_BY_ID_LIST tool output.
 */
type TRELLO_UPDATE_LISTS_POS_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description Details of the Trello list after its position has been updated, including its new position.
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
 * Type of TRELLO's TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST tool input.
 */
type TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST_INPUT = {
  /**
   * Id List
   * @description The unique identifier of the Trello list whose subscription status is to be updated.
   */
  idList?: string;
  /**
   * Value
   * @description The desired subscription state. Use 'true' to subscribe to the list or 'false' to unsubscribe. This controls whether the user receives notifications for this list.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST tool output.
 */
type TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST_OUTPUT = {
  /**
   * Data
   * @description The response from the Trello API, typically confirming the update or providing details of the new subscription state.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose avatar source is to be updated.
   */
  idMember?: string;
  /**
   * Value
   * @description The new avatar source for the member. Choosing 'upload' indicates that a custom uploaded image should be used if one exists; it does not perform an upload.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose bio is to be updated.
   */
  idMember?: string;
  /**
   * Value
   * @description The new bio content for the member. This can be an empty string or a string with a maximum length of 16,384 characters.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the member object with the updated bio information.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER_INPUT = {
  /**
   * Avatar Source
   * @description Source for the member's avatar. Valid values: 'gravatar', 'none', 'upload'.
   */
  avatarSource?: string;
  /**
   * Bio
   * @description Biography (0-16384 characters).
   */
  bio?: string;
  /**
   * Full Name
   * @description Full name (at least 1 character; no leading/trailing spaces).
   */
  fullName?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member to update.
   */
  idMember?: string;
  /**
   * Initials
   * @description Initials (1-4 characters; no leading/trailing spaces).
   */
  initials?: string;
  /**
   * Prefs  Color Blind
   * @description Toggle color blind mode. Valid values: 'true', 'false'.
   */
  prefs__colorBlind?: string;
  /**
   * Prefs  Locale
   * @description Preferred locale (0-255 characters).
   */
  prefs__locale?: string;
  /**
   * Prefs  Minutes Between Summaries
   * @description Time between email summaries. Valid values: '-1' (disabled), '1' (every minute), '60' (every hour).
   */
  prefs__minutesBetweenSummaries?: string;
  /**
   * Username
   * @description Desired username (at least 3 characters; lowercase letters, underscores, numbers only; must be unique).
   */
  username?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose full name is to be updated.
   */
  idMember?: string;
  /**
   * Value
   * @description The new full name for the member. Must be a string with a length of at least 1 and cannot begin or end with a space.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated member object, including the new full name and other member details.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Value
   * @description New initials (1-4 characters, no leading/trailing spaces). If omitted or an empty string is provided, Trello may clear the member's current initials.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Trello API's response, typically including details of the updated member or a confirmation status.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose color blind preference will be updated.
   */
  idMember?: string;
  /**
   * Value
   * @description Specifies the desired state for the color blind preference. Use the string 'true' to enable color blind mode, or the string 'false' to disable it.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Value
   * @description Locale code (e.g., 'en-US') for the member. 0-255 characters. An empty string may reset to default.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Typically a dictionary containing the updated member's preferences, including the new locale, or a status confirming the update.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER_INPUT = {
  /**
   * Id Member
   * @description The ID or current username of the Trello member whose username is to be updated.
   */
  idMember?: string;
  /**
   * Value
   * @description The new username for the member. It must be at least 3 characters long, unique across all Trello users, and contain only lowercase letters, numbers, and underscores.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response from Trello. On a successful update, this typically includes the full member object with the new username and other details.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND tool input.
 */
type TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND_INPUT = {
  /**
   * Brightness
   * @description Adjusts the brightness of the board background. Valid values are 'dark', 'light', or 'unknown'.
   */
  brightness?: string;
  /**
   * File
   * @description The image file to be used as the board background. This should be the raw image data or a URL to the image, depending on the API's expectation for file uploads.
   */
  file?: string;
  /**
   * Id Board Background
   * @description The ID of the existing board background to be updated. This identifier specifies which of the member's board backgrounds will be modified.
   */
  idBoardBackground?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member whose board background is being updated.
   */
  idMember?: string;
  /**
   * Tile
   * @description Determines if the board background image should be tiled. Set to 'true' to tile the image, or 'false' to display it normally.
   */
  tile?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND tool output.
 */
type TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH tool input.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Id Saved Search
   * @description The ID of the saved search to be updated.
   */
  idSavedSearch?: string;
  /**
   * Name
   * @description The new name for the saved search. Must be a non-empty string containing at least one non-space character.
   */
  name?: string;
  /**
   * Pos
   * @description The new position for the saved search. Valid values are 'top', 'bottom', or a positive numeric string (e.g., '1', '2').
   */
  pos?: string;
  /**
   * Query
   * @description The new search query string. Must be a string with a length between 1 and 16384 characters, inclusive.
   */
  query?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH tool output.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Details of the updated saved search object.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME tool input.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member whose saved search is being updated.
   */
  idMember?: string;
  /**
   * Id Saved Search
   * @description The ID of the saved search to be renamed.
   */
  idSavedSearch?: string;
  /**
   * Value
   * @description The new name to be assigned to the saved search. Must be a non-empty string with at least one non-space character.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME tool output.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated saved search object or a confirmation from the Trello API.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS tool input.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Id Saved Search
   * @description The ID of the saved search to be repositioned.
   */
  idSavedSearch?: string;
  /**
   * Value
   * @description The new position for the saved search. Accepts 'top', 'bottom', or a positive integer (as a string) representing the desired list index.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS tool output.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS_OUTPUT = {
  /**
   * Data
   * @description Confirms the update or returns details of the repositioned saved search.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY tool input.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member to whom the saved search belongs.
   */
  idMember?: string;
  /**
   * Id Saved Search
   * @description The unique identifier of the saved search whose query is to be updated.
   */
  idSavedSearch?: string;
  /**
   * Value
   * @description New query string for the saved search, defining the search criteria. Must be 1 to 16384 characters.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY tool output.
 */
type TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Trello API representation of the updated saved search, including its new query.
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
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL tool input.
 */
type TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL_INPUT = {
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Value
   * @description Specifies the new interval in minutes for email summary notifications. Use '-1' to disable summaries, '1' for updates every minute, or '60' for updates every hour.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL tool output.
 */
type TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS tool input.
 */
type TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS_INPUT = {
  /**
   * Brightness
   * @description Sets the brightness for the background ('dark', 'light', or 'unknown').
   */
  brightness?: string;
  /**
   * File
   * @description The new image file (URL or path) for the background.
   */
  file?: string;
  /**
   * Id Board Background
   * @description The ID of the specific custom board background to update.
   */
  idBoardBackground?: string;
  /**
   * Id Member
   * @description The ID or username of the Trello member.
   */
  idMember?: string;
  /**
   * Tile
   * @description Whether the background image should be tiled ('true' or 'false').
   */
  tile?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS tool output.
 */
type TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated custom board background.
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
 * Type of TRELLO's TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Id Notification
   * @description The unique identifier (ID) of the Trello notification whose read status is to be updated.
   */
  idNotification?: string;
  /**
   * Unread
   * @description A string indicating the desired unread status. Set to 'true' to mark the notification as unread, or 'false' to mark it as read.
   */
  unread?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated notification. This may be an empty dictionary if the Trello API confirms success without returning specific content, as is common for update operations.
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
 * Type of TRELLO's TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION tool input.
 */
type TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION_INPUT = {
  /**
   * Id Notification
   * @description The unique identifier of the Trello notification whose unread status is to be updated.
   */
  idNotification?: string;
  /**
   * Value
   * @description The new unread status for the notification. Set to 'true' to mark the notification as unread, or 'false' to mark it as read.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION tool output.
 */
type TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from Trello, typically confirming the updated unread status of the notification.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG_INPUT = {
  /**
   * Desc
   * @description New description for the organization (0-16384 characters).
   */
  desc?: string;
  /**
   * Display Name
   * @description New display name for the organization (length of at least 1, cannot begin or end with a space).
   */
  displayName?: string;
  /**
   * Id Org
   * @description The ID or name of the organization to update.
   */
  idOrg?: string;
  /**
   * Name
   * @description New name for the organization (0-16384 characters); typically lowercase, without spaces.
   */
  name?: string;
  /**
   * Prefs  Associated Domain
   * @description The Google Workspace domain to associate with the organization (e.g., 'example.com'). Clears the domain if an empty string is provided.
   */
  prefs__associatedDomain?: string;
  /**
   * Prefs  Board Visibility Restrict  Org
   * @description Controls who can create organization-visible boards. Valid values: 'admin' (only admins), 'org' (any organization member), 'none' (disabled).
   */
  prefs__boardVisibilityRestrict__org?: string;
  /**
   * Prefs  Board Visibility Restrict  Private
   * @description Controls who can create private boards. Valid values: 'admin' (only admins), 'org' (any organization member), 'none' (disabled).
   */
  prefs__boardVisibilityRestrict__private?: string;
  /**
   * Prefs  Board Visibility Restrict  Public
   * @description Controls who can create public boards. Valid values: 'admin' (only admins), 'org' (any organization member), 'none' (disabled).
   */
  prefs__boardVisibilityRestrict__public?: string;
  /**
   * Prefs  External Members Disabled
   * @description Set to 'true' to prevent external members (guests) from being added to boards within the organization. Set to 'false' to allow external members.
   */
  prefs__externalMembersDisabled?: string;
  /**
   * Prefs  Google Apps Version
   * @description The version of Google Workspace integration. Valid values are '1' or '2'.
   */
  prefs__googleAppsVersion?: string;
  /**
   * Prefs  Org Invite Restrict
   * @description Restricts organization membership invitations to email addresses from specified domains. Use a comma-separated list of domains (e.g., 'example.com,*.example.org'). An empty string removes restrictions.
   */
  prefs__orgInviteRestrict?: string;
  /**
   * Prefs  Permission Level
   * @description Sets the default permission level for new boards created in the organization. Valid values: 'private' or 'public'.
   */
  prefs__permissionLevel?: string;
  /**
   * Website
   * @description The organization's website URL. Must start with 'http://' or 'https://'. Use the literal string 'null' or an empty string to remove the website.
   */
  website?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description The updated organization object.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the organization whose description is to be updated. This can be the organization's unique 24-character hexadecimal ID or its registered name.
   */
  idOrg?: string;
  /**
   * Value
   * @description The new description for the organization. Must be a string with a length between 0 and 16384 characters. An empty string can be used to clear the existing description.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Trello API response, typically including the details of the updated organization.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or current name of the Trello organization to update.
   */
  idOrg?: string;
  /**
   * Value
   * @description The new display name for the organization. It must be a string with a length of at least 1 and cannot begin or end with a space.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated organization, including its new display name.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_INPUT = {
  /**
   * Email
   * @description Member's email address; used to identify an existing member or invite/add a new one. Required by the Trello API.
   */
  email?: string;
  /**
   * Full Name
   * @description Member's full name. Used when inviting a new member; required if `email` isn't linked to an existing Trello account. Must be >=1 character and not start/end with a space.
   */
  fullName?: string;
  /**
   * Id Org
   * @description ID or name of the Trello organization (Workspace).
   */
  idOrg?: string;
  /**
   * Type
   * @description Membership type determining the member's permissions within the organization; required by Trello API.
   */
  type?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description Details of the member's updated or newly created membership.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_INPUT = {
  /**
   * Email
   * @description The new email address for the member.
   */
  email?: string;
  /**
   * Full Name
   * @description The new full name for the member. Must be at least 1 character long and cannot begin or end with a space.
   */
  fullName?: string;
  /**
   * Id Member
   * @description The ID of the member to update.
   */
  idMember?: string;
  /**
   * Id Org
   * @description The ID of the organization.
   */
  idOrg?: string;
  /**
   * Type
   * @description The new type of member. Determines the member's permissions within the organization.
   */
  type?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated member's information.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or current name of the Trello organization whose name is to be updated.
   */
  idOrg?: string;
  /**
   * Value
   * @description The new name for the organization. It must be unique, at least 3 characters long, and contain only lowercase letters, underscores, and numbers.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the Trello API's response, typically including details of the organization with its updated name or a confirmation of the update.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the Trello organization to update.
   */
  idOrg?: string;
  /**
   * Value
   * @description The Google Apps version (typically '1' or '2') to set for the organization, representing different integration versions or configurations.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated organization preferences, specifically reflecting the new Google Apps version setting.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Value
   * @description Specifies the invitation restriction: an email address (e.g., 'user@example.com'), an email domain (e.g., '@example.com' for that domain's users), 'none' (any member can invite), or 'admins' (only admins can invite).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated organization preferences.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization (Workspace). For example, 'trelloorg123' or 'MyTrelloOrganizationName'.
   */
  idOrg?: string;
  /**
   * Value
   * @description The new permission level for the organization. Must be either 'private' or 'public'.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response from Trello, typically reflecting the organization's updated state or preferences after the permission level change.
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
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG tool input.
 */
type TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the organization to update.
   */
  idOrg?: string;
  /**
   * Value
   * @description The new website URL for the organization. Must start with 'http://' or 'https://'. Provide 'null' or an empty string to remove the website.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG tool output.
 */
type TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS tool input.
 */
type TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the organization to update. This organization must exist.
   */
  idOrg?: string;
  /**
   * Value
   * @description The Google Workspace domain to link to this organization (e.g., 'example.com'). If an empty string is provided, the existing associated domain will be removed. The domain should be a valid, existing Google Workspace domain.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS tool output.
 */
type TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated preferences for the organization, including the new associated domain if successfully set.
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
 * Type of TRELLO's TRELLO_UPDATE_ORG_BOARD_VISIBILITY tool input.
 */
type TRELLO_UPDATE_ORG_BOARD_VISIBILITY_INPUT = {
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization for which to update the board visibility restriction.
   */
  idOrg?: string;
  /**
   * Value
   * @description Specifies the permission level for setting a board's visibility to 'organization-visible'.
   *     Allowed values are:
   *     *   `admin`: Only organization administrators can set boards to 'organization-visible'.
   *     *   `none`: No specific restriction; board members with appropriate permissions can set its visibility to 'organization-visible'.
   *     *   `org`: Any member of the organization can set boards to 'organization-visible'.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_BOARD_VISIBILITY tool output.
 */
type TRELLO_UPDATE_ORG_BOARD_VISIBILITY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response from Trello. This typically includes the updated preference state or a confirmation message.
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
 * Type of TRELLO's TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS tool input.
 */
type TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS_INPUT = {
  /**
   * Id Org
   * @description The ID or unique name of the Trello organization to update.
   */
  idOrg?: string;
  /**
   * Value
   * @description Boolean value to set the 'externalMembersDisabled' preference. 'true' disables adding external members, 'false' enables it.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS tool output.
 */
type TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated organization preferences or a confirmation of the successful update.
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
 * Type of TRELLO's TRELLO_UPDATE_ORG_MEMBERSHIP tool input.
 */
type TRELLO_UPDATE_ORG_MEMBERSHIP_INPUT = {
  /**
   * Id Membership
   * @description The ID of the specific membership to be updated.
   */
  idMembership?: string;
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Member Fields
   * @description Member fields to return in the response. Use 'all' or a comma-separated list: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
   */
  member_fields?: string;
  /**
   * Type
   * @description The new type for the membership. Valid values are 'admin', 'normal', or 'observer'.
   */
  type?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_MEMBERSHIP tool output.
 */
type TRELLO_UPDATE_ORG_MEMBERSHIP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION tool input.
 */
type TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION_INPUT = {
  /**
   * Id Member
   * @description ID of the member whose deactivation status is to be updated.
   */
  idMember?: string;
  /**
   * Id Org
   * @description ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Value
   * @description Set to 'true' to deactivate the member or 'false' to reactivate.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION tool output.
 */
type TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION_OUTPUT = {
  /**
   * Data
   * @description The raw response from the Trello API.
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
 * Type of TRELLO's TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY tool input.
 */
type TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the Trello organization whose private board visibility restrictions are to be updated.
   */
  idOrg?: string;
  /**
   * Value
   * @description Restriction level determining who can change visibility of private boards within the organization.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY tool output.
 */
type TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated organization preferences related to private board visibility restrictions.
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
 * Type of TRELLO's TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY tool input.
 */
type TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY_INPUT = {
  /**
   * Id Org
   * @description The ID or name of the Trello organization.
   */
  idOrg?: string;
  /**
   * Value
   * @description Specifies the restriction level for setting board visibility to public. Valid values are 'admin' (only administrators can set boards to public), 'org' (any member of the organization can set boards to public), or 'none' (public boards are disabled for the organization).
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY tool output.
 */
type TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated organization preferences related to public board visibility restrictions.
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
 * Type of TRELLO's TRELLO_UPDATE_SESSIONS_BY_ID_SESSION tool input.
 */
type TRELLO_UPDATE_SESSIONS_BY_ID_SESSION_INPUT = {
  /**
   * Id Board
   * @description The ID of the Trello board the user is currently viewing.
   */
  idBoard?: string;
  /**
   * Id Session
   * @description The unique identifier of the session to be updated.
   */
  idSession?: string;
  /**
   * Status
   * @description The new status of the session. Valid values are 'active', 'disconnected', or 'idle'.
   */
  status?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_SESSIONS_BY_ID_SESSION tool output.
 */
type TRELLO_UPDATE_SESSIONS_BY_ID_SESSION_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the response from the Trello API. For this operation, it typically returns an empty object or a simple confirmation upon successful update.
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
 * Type of TRELLO's TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION tool input.
 */
type TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION_INPUT = {
  /**
   * Id Session
   * @description The unique identifier of the Trello session whose status is to be updated.
   */
  idSession?: string;
  /**
   * Value
   * @description The new status to set for the session. Must be one of 'active', 'disconnected', or 'idle'.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION tool output.
 */
type TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN tool input.
 */
type TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN_INPUT = {
  /**
   * Callback Url
   * @description The new callback URL for the webhook. This URL must be publicly reachable and capable of handling HEAD requests (for Trello's validation) and POST requests (for notifications). Trello will send a HEAD request to this URL to confirm its validity before saving the webhook.
   */
  callbackURL?: string;
  /**
   * Description
   * @description A new description for the webhook. Must be a string with a length between 0 and 16384 characters.
   */
  description?: string;
  /**
   * Id Model
   * @description The ID of the new Trello model (e.g., board, list, card, or member) that the webhook should monitor for changes. If updated, this changes the scope of the webhook.
   */
  idModel?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN tool output.
 */
type TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS tool input.
 */
type TRELLO_UPDATE_WEBHOOKS_INPUT = {
  /**
   * Active
   * @description Indicates if the webhook is active (true) or inactive (false).
   */
  active?: string;
  /**
   * Callback Url
   * @description New valid URL for POST requests; Trello verifies with a HEAD request before updating.
   */
  callbackURL?: string;
  /**
   * Description
   * @description New description for the webhook (0-16384 characters).
   */
  description?: string;
  /**
   * Id Model
   * @description ID of the Trello model (e.g., board, card, list) the webhook should monitor.
   */
  idModel?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS tool output.
 */
type TRELLO_UPDATE_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Contains the updated webhook object, including `id`, `description`, `idModel`, `callbackURL`, and `active`.
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
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK tool input.
 */
type TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier of the webhook to be updated.
   */
  idWebhook?: string;
  /**
   * Value
   * @description Desired active state; 'true' to activate, 'false' to deactivate.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK tool output.
 */
type TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description API response; typically an empty object on success, or error details on failure.
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
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK tool input.
 */
type TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK_INPUT = {
  /**
   * Active
   * @description Determines if the webhook is active. Provide 'true' to activate or 'false' to deactivate the webhook.
   */
  active?: string;
  /**
   * Callback Url
   * @description A new callback URL for the webhook. This must be a valid URL that Trello can reach with a HEAD request to verify.
   */
  callbackURL?: string;
  /**
   * Description
   * @description A new description for the webhook. Must be a string with a length between 0 and 16384 characters.
   */
  description?: string;
  /**
   * Id Model
   * @description The ID of the Trello model (e.g., board, list, or card) that this webhook should monitor. This changes the source of notifications.
   */
  idModel?: string;
  /**
   * Id Webhook
   * @description The ID of the webhook to update.
   */
  idWebhook?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK tool output.
 */
type TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the details of the updated webhook.
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
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK tool input.
 */
type TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The ID of the webhook to update.
   */
  idWebhook?: string;
  /**
   * Value
   * @description A valid URL that Trello will send a HEAD request to verify. This URL will receive webhook notifications.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK tool output.
 */
type TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the updated webhook's details.
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
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK tool input.
 */
type TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier of the webhook whose description is to be updated.
   */
  idWebhook?: string;
  /**
   * Value
   * @description The new description for the webhook. Must be a string with a length between 0 and 16384 characters. An empty string will remove the existing description.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK tool output.
 */
type TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary representing the API's response to the update request. This typically contains a confirmation or details of the updated webhook.
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
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK tool input.
 */
type TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK_INPUT = {
  /**
   * Id Webhook
   * @description The unique identifier of the webhook whose monitored model is to be updated. This ID is part of the request URL path.
   */
  idWebhook?: string;
  /**
   * Value
   * @description The new ID of the Trello model (e.g., board, list, or card) that the webhook should monitor. If provided, this ID will replace the webhook's current `idModel`.
   */
  value?: string;
};

/**
 * Type of TRELLO's TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK tool output.
 */
type TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the API response from Trello. Typically, this includes details of the updated webhook upon success, or error information if the update failed.
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
 * Type map of all available tool input types for toolkit "TRELLO".
 */
export type TRELLO_TOOL_INPUTS = {
  ACTION_GET_BOARD_BY_ID_ACTION: TRELLO_ACTION_GET_BOARD_BY_ID_ACTION_INPUT
  ACTION_GET_BY_ID: TRELLO_ACTION_GET_BY_ID_INPUT
  ACTION_GET_LIST_BY_ID_ACTION: TRELLO_ACTION_GET_LIST_BY_ID_ACTION_INPUT
  ADD_BOARDS: TRELLO_ADD_BOARDS_INPUT
  ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD: TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD_INPUT
  ADD_BOARDS_CHECKLISTS_BY_ID_BOARD: TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD_INPUT
  ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD: TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD_INPUT
  ADD_BOARDS_LABELS_BY_ID_BOARD: TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD_INPUT
  ADD_BOARDS_LISTS_BY_ID_BOARD: TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD_INPUT
  ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD: TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD_INPUT
  ADD_BOARDS_POWER_UPS_BY_ID_BOARD: TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD_INPUT
  ADD_CARDS: TRELLO_ADD_CARDS_INPUT
  ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD: TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_INPUT
  ADD_CARDS_ATTACHMENTS_BY_ID_CARD: TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD_INPUT
  ADD_CARDS_CHECKLISTS_BY_ID_CARD: TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD_INPUT
  ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST: TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST_INPUT
  ADD_CARDS_ID_LABELS_BY_ID_CARD: TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD_INPUT
  ADD_CARDS_ID_MEMBERS_BY_ID_CARD: TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD_INPUT
  ADD_CARDS_LABELS_BY_ID_CARD: TRELLO_ADD_CARDS_LABELS_BY_ID_CARD_INPUT
  ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD: TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD_INPUT
  ADD_CARDS_STICKERS_BY_ID_CARD: TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD_INPUT
  ADD_CHECKLISTS: TRELLO_ADD_CHECKLISTS_INPUT
  ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST: TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_INPUT
  ADD_LABELS: TRELLO_ADD_LABELS_INPUT
  ADD_LISTS: TRELLO_ADD_LISTS_INPUT
  ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST: TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST_INPUT
  ADD_LISTS_CARDS_BY_ID_LIST: TRELLO_ADD_LISTS_CARDS_BY_ID_LIST_INPUT
  ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST: TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST_INPUT
  ADD_MEMBERS_AVATAR_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER_INPUT
  ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT
  ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER_INPUT
  ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT
  ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_INPUT
  ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_INPUT
  ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_INPUT
  ADD_NOTIFICATIONS_ALL_READ: TRELLO_ADD_NOTIFICATIONS_ALL_READ_INPUT
  ADD_ORGANIZATIONS: TRELLO_ADD_ORGANIZATIONS_INPUT
  ADD_ORGANIZATIONS_LOGO_BY_ID_ORG: TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG_INPUT
  ADD_SESSIONS: TRELLO_ADD_SESSIONS_INPUT
  ADD_TOKENS_WEBHOOKS_BY_TOKEN: TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN_INPUT
  BOARD_CREATE_BOARD: TRELLO_BOARD_CREATE_BOARD_INPUT
  BOARD_FILTER_CARDS_BY_ID_BOARD: TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD_INPUT
  BOARD_GET_BY_ID: TRELLO_BOARD_GET_BY_ID_INPUT
  BOARD_GET_CARDS_BY_ID_BOARD: TRELLO_BOARD_GET_CARDS_BY_ID_BOARD_INPUT
  BOARD_GET_LISTS_BY_ID_BOARD: TRELLO_BOARD_GET_LISTS_BY_ID_BOARD_INPUT
  CARD_CREATE_AND_UPDATE: TRELLO_CARD_CREATE_AND_UPDATE_INPUT
  CARD_GET_BY_ID: TRELLO_CARD_GET_BY_ID_INPUT
  CARD_GET_BY_ID_FIELD: TRELLO_CARD_GET_BY_ID_FIELD_INPUT
  CARD_UPDATE_BY_ID_CARD: TRELLO_CARD_UPDATE_BY_ID_CARD_INPUT
  CARD_UPDATE_ID_LIST_BY_ID_CARD: TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD_INPUT
  CARD_UPDATE_POS_BY_ID_CARD: TRELLO_CARD_UPDATE_POS_BY_ID_CARD_INPUT
  CONVERT_CHECKLIST_ITEM_TO_CARD: TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD_INPUT
  DELETE_ACTIONS_BY_ID_ACTION: TRELLO_DELETE_ACTIONS_BY_ID_ACTION_INPUT
  DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER: TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_INPUT
  DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP: TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP_INPUT
  DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION: TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION_INPUT
  DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT: TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_INPUT
  DELETE_CARDS_BY_ID_CARD: TRELLO_DELETE_CARDS_BY_ID_CARD_INPUT
  DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST: TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST_INPUT
  DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL: TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL_INPUT
  DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER: TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER_INPUT
  DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR: TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR_INPUT
  DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER: TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER_INPUT
  DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_INPUT
  DELETE_CHECKLISTS_BY_ID_CHECKLIST: TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST_INPUT
  DELETE_CHECKLIST_ITEM: TRELLO_DELETE_CHECKLIST_ITEM_INPUT
  DELETE_LABELS_BY_ID_LABEL: TRELLO_DELETE_LABELS_BY_ID_LABEL_INPUT
  DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR: TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_INPUT
  DELETE_MEMBER_BOARD_BACKGROUND: TRELLO_DELETE_MEMBER_BOARD_BACKGROUND_INPUT
  DELETE_MEMBER_CUSTOM_STICKER: TRELLO_DELETE_MEMBER_CUSTOM_STICKER_INPUT
  DELETE_MEMBER_SAVED_SEARCH: TRELLO_DELETE_MEMBER_SAVED_SEARCH_INPUT
  DELETE_ORGANIZATIONS_BY_ID_ORG: TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG_INPUT
  DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG: TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG_INPUT
  DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER: TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER_INPUT
  DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER: TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_INPUT
  DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG: TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_INPUT
  DELETE_ORG_ASSOCIATED_DOMAIN: TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN_INPUT
  DELETE_TOKENS_BY_TOKEN: TRELLO_DELETE_TOKENS_BY_TOKEN_INPUT
  DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK: TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_INPUT
  DELETE_WEBHOOKS_BY_ID_WEBHOOK: TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK_INPUT
  DISMISS_MEMBER_MESSAGE: TRELLO_DISMISS_MEMBER_MESSAGE_INPUT
  GET_ACTIONS_BOARD_BY_ID_ACTION: TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_INPUT
  GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD_INPUT
  GET_ACTIONS_BY_ID_ACTION: TRELLO_GET_ACTIONS_BY_ID_ACTION_INPUT
  GET_ACTIONS_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD_INPUT
  GET_ACTIONS_CARD_BY_ID_ACTION: TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_INPUT
  GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD_INPUT
  GET_ACTIONS_DISPLAY_BY_ID_ACTION: TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION_INPUT
  GET_ACTIONS_ENTITIES_BY_ID_ACTION: TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION_INPUT
  GET_ACTIONS_LIST_BY_ID_ACTION: TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_INPUT
  GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD_INPUT
  GET_ACTIONS_MEMBER_BY_ID_ACTION: TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_INPUT
  GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD_INPUT
  GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION: TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_INPUT
  GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD_INPUT
  GET_ACTIONS_ORGANIZATION_BY_ID_ACTION: TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_INPUT
  GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD_INPUT
  GET_BATCH: TRELLO_GET_BATCH_INPUT
  GET_BOARDS_ACTIONS_BY_ID_BOARD: TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD_INPUT
  GET_BOARDS_BOARD_STARS_BY_ID_BOARD: TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD_INPUT
  GET_BOARDS_BY_ID_BOARD: TRELLO_GET_BOARDS_BY_ID_BOARD_INPUT
  GET_BOARDS_BY_ID_BOARD_BY_FIELD: TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD_INPUT
  GET_BOARDS_CARDS_BY_ID_BOARD: TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_INPUT
  GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER: TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER_INPUT
  GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD: TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD_INPUT
  GET_BOARDS_CHECKLISTS_BY_ID_BOARD: TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD_INPUT
  GET_BOARDS_DELTAS_BY_ID_BOARD: TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD_INPUT
  GET_BOARDS_LABELS_BY_ID_BOARD: TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_INPUT
  GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL: TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL_INPUT
  GET_BOARDS_LISTS_BY_ID_BOARD: TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_INPUT
  GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER: TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER_INPUT
  GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD: TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_INPUT
  GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP: TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP_INPUT
  GET_BOARDS_MEMBERS_BY_ID_BOARD: TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_INPUT
  GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER: TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER_INPUT
  GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER: TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER_INPUT
  GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD: TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_INPUT
  GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD: TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD_INPUT
  GET_BOARDS_MY_PREFS_BY_ID_BOARD: TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD_INPUT
  GET_BOARDS_ORGANIZATION_BY_ID_BOARD: TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_INPUT
  GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD: TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD_INPUT
  GET_CARDS_ACTIONS_BY_ID_CARD: TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD_INPUT
  GET_CARDS_ATTACHMENTS_BY_ID_CARD: TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_INPUT
  GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT: TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_INPUT
  GET_CARDS_BOARD_BY_ID_CARD: TRELLO_GET_CARDS_BOARD_BY_ID_CARD_INPUT
  GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD: TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD_INPUT
  GET_CARDS_BY_ID_CARD: TRELLO_GET_CARDS_BY_ID_CARD_INPUT
  GET_CARDS_BY_ID_CARD_BY_FIELD: TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD_INPUT
  GET_CARDS_CHECKLISTS_BY_ID_CARD: TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD_INPUT
  GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD: TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD_INPUT
  GET_CARDS_LIST_BY_ID_CARD: TRELLO_GET_CARDS_LIST_BY_ID_CARD_INPUT
  GET_CARDS_LIST_BY_ID_CARD_BY_FIELD: TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD_INPUT
  GET_CARDS_MEMBERS_BY_ID_CARD: TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD_INPUT
  GET_CARDS_MEMBERS_VOTED_BY_ID_CARD: TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD_INPUT
  GET_CARDS_STICKERS_BY_ID_CARD: TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_INPUT
  GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_INPUT
  GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_INPUT
  GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD: TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD_INPUT
  GET_CHECKLISTS_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_INPUT
  GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD: TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD_INPUT
  GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_INPUT
  GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER: TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER_INPUT
  GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_INPUT
  GET_CHECK_ITEM_BY_ID: TRELLO_GET_CHECK_ITEM_BY_ID_INPUT
  GET_LABELS_BOARD_BY_ID_LABEL: TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_INPUT
  GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD: TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD_INPUT
  GET_LABELS_BY_ID_LABEL: TRELLO_GET_LABELS_BY_ID_LABEL_INPUT
  GET_LISTS_ACTIONS_BY_ID_LIST: TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST_INPUT
  GET_LISTS_BOARD_BY_ID_LIST: TRELLO_GET_LISTS_BOARD_BY_ID_LIST_INPUT
  GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD: TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD_INPUT
  GET_LISTS_BY_ID_LIST: TRELLO_GET_LISTS_BY_ID_LIST_INPUT
  GET_LISTS_BY_ID_LIST_BY_FIELD: TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD_INPUT
  GET_LISTS_CARDS_BY_ID_LIST: TRELLO_GET_LISTS_CARDS_BY_ID_LIST_INPUT
  GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER: TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER_INPUT
  GET_MEMBERS_ACTIONS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_BOARDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER_INPUT
  GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_INPUT
  GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD: TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD_INPUT
  GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR: TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_INPUT
  GET_MEMBERS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_BY_ID_MEMBER_BY_FIELD: TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD_INPUT
  GET_MEMBERS_CARDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER_INPUT
  GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_INPUT
  GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_DELTAS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER_INPUT
  GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_INPUT
  GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER_INPUT
  GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER: TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_INPUT
  GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD: TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD_INPUT
  GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER: TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_INPUT
  GET_MEMBERS_TOKENS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER_INPUT
  GET_MEMBER_BOARD_BACKGROUND: TRELLO_GET_MEMBER_BOARD_BACKGROUND_INPUT
  GET_MEMBER_CUSTOM_BG: TRELLO_GET_MEMBER_CUSTOM_BG_INPUT
  GET_MEMBER_CUSTOM_EMOJI: TRELLO_GET_MEMBER_CUSTOM_EMOJI_INPUT
  GET_MEMBER_CUSTOM_STICKER: TRELLO_GET_MEMBER_CUSTOM_STICKER_INPUT
  GET_MEMBER_SAVED_SEARCH: TRELLO_GET_MEMBER_SAVED_SEARCH_INPUT
  GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD_INPUT
  GET_NOTIFICATIONS_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD_INPUT
  GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD_INPUT
  GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD_INPUT
  GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD_INPUT
  GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION_INPUT
  GET_NOTIFICATION_ORG_FIELD: TRELLO_GET_NOTIFICATION_ORG_FIELD_INPUT
  GET_NOTIF_CREATOR_FIELD: TRELLO_GET_NOTIF_CREATOR_FIELD_INPUT
  GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_BOARDS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER: TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER_INPUT
  GET_ORGANIZATIONS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD: TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD_INPUT
  GET_ORGANIZATIONS_DELTAS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP: TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP_INPUT
  GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER: TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER_INPUT
  GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER: TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER_INPUT
  GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_INPUT
  GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD: TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD_INPUT
  GET_SEARCH: TRELLO_GET_SEARCH_INPUT
  GET_SEARCH_MEMBERS: TRELLO_GET_SEARCH_MEMBERS_INPUT
  GET_SESSIONS_SOCKET: TRELLO_GET_SESSIONS_SOCKET_INPUT
  GET_TOKENS_BY_TOKEN: TRELLO_GET_TOKENS_BY_TOKEN_INPUT
  GET_TOKENS_BY_TOKEN_BY_FIELD: TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD_INPUT
  GET_TOKENS_MEMBER_BY_TOKEN: TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_INPUT
  GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD: TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD_INPUT
  GET_TOKENS_WEBHOOKS_BY_TOKEN: TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_INPUT
  GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK: TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_INPUT
  GET_TYPES_BY_ID: TRELLO_GET_TYPES_BY_ID_INPUT
  GET_WEBHOOKS_BY_ID_WEBHOOK: TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_INPUT
  GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD: TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD_INPUT
  LIST_CREATE_LIST: TRELLO_LIST_CREATE_LIST_INPUT
  LIST_GET_BY_ID_LIST: TRELLO_LIST_GET_BY_ID_LIST_INPUT
  LIST_GET_CARDS_BY_ID_LIST: TRELLO_LIST_GET_CARDS_BY_ID_LIST_INPUT
  LIST_ID_BOARD_GET: TRELLO_LIST_ID_BOARD_GET_INPUT
  MARK_CARD_NOTIFICATIONS_READ: TRELLO_MARK_CARD_NOTIFICATIONS_READ_INPUT
  MEMBER_GET_BOARDS: TRELLO_MEMBER_GET_BOARDS_INPUT
  MEMBER_GET_BOARDS_BY_ID_MEMBER: TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER_INPUT
  MEMBER_GET_BY_ID: TRELLO_MEMBER_GET_BY_ID_INPUT
  REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS: TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS_INPUT
  REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS: TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS_INPUT
  SEARCH_GET_RESULTS: TRELLO_SEARCH_GET_RESULTS_INPUT
  TOKEN_GET_MEMBER_BY_TOKEN: TRELLO_TOKEN_GET_MEMBER_BY_TOKEN_INPUT
  TRELLO_UPDATE_MEMBER_BOARD_STAR: TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR_INPUT
  UPDATE_ACTIONS_BY_ID_ACTION: TRELLO_UPDATE_ACTIONS_BY_ID_ACTION_INPUT
  UPDATE_ACTIONS_TEXT_BY_ID_ACTION: TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION_INPUT
  UPDATE_BOARDS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_CLOSED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_DESC_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MEMBERS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER: TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_INPUT
  UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_NAME_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD_INPUT
  UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD_INPUT
  UPDATE_BOARD_MEMBERSHIP: TRELLO_UPDATE_BOARD_MEMBERSHIP_INPUT
  UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS: TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS_INPUT
  UPDATE_BOARD_STAR_POSITION: TRELLO_UPDATE_BOARD_STAR_POSITION_INPUT
  UPDATE_CARDS_BY_ID_CARD: TRELLO_UPDATE_CARDS_BY_ID_CARD_INPUT
  UPDATE_CARDS_CLOSED_BY_ID_CARD: TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD_INPUT
  UPDATE_CARDS_DESC_BY_ID_CARD: TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD_INPUT
  UPDATE_CARDS_DUE_BY_ID_CARD: TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD_INPUT
  UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD_INPUT
  UPDATE_CARDS_ID_BOARD_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD_INPUT
  UPDATE_CARDS_ID_LIST_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD_INPUT
  UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD_INPUT
  UPDATE_CARDS_LABELS_BY_ID_CARD: TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD_INPUT
  UPDATE_CARDS_NAME_BY_ID_CARD: TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD_INPUT
  UPDATE_CARDS_POS_BY_ID_CARD: TRELLO_UPDATE_CARDS_POS_BY_ID_CARD_INPUT
  UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_INPUT
  UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD: TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD_INPUT
  UPDATE_CARD_CHECKLIST_ITEM_POSITION: TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION_INPUT
  UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS: TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS_INPUT
  UPDATE_CARD_COMMENT: TRELLO_UPDATE_CARD_COMMENT_INPUT
  UPDATE_CHECKLISTS_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST_INPUT
  UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST_INPUT
  UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST_INPUT
  UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST_INPUT
  UPDATE_CHECKLIST_ITEM_BY_IDS: TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS_INPUT
  UPDATE_CHECKLIST_ITEM_NAME_IN_CARD: TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD_INPUT
  UPDATE_LABELS_BY_ID_LABEL: TRELLO_UPDATE_LABELS_BY_ID_LABEL_INPUT
  UPDATE_LABELS_COLOR_BY_ID_LABEL: TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL_INPUT
  UPDATE_LABELS_NAME_BY_ID_LABEL: TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL_INPUT
  UPDATE_LISTS_BY_ID_LIST: TRELLO_UPDATE_LISTS_BY_ID_LIST_INPUT
  UPDATE_LISTS_CLOSED_BY_ID_LIST: TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST_INPUT
  UPDATE_LISTS_ID_BOARD_BY_ID_LIST: TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST_INPUT
  UPDATE_LISTS_NAME_BY_ID_LIST: TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST_INPUT
  UPDATE_LISTS_POS_BY_ID_LIST: TRELLO_UPDATE_LISTS_POS_BY_ID_LIST_INPUT
  UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST: TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST_INPUT
  UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_BIO_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER_INPUT
  UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER_INPUT
  UPDATE_MEMBER_BOARD_BACKGROUND: TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND_INPUT
  UPDATE_MEMBER_SAVED_SEARCH: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_INPUT
  UPDATE_MEMBER_SAVED_SEARCH_NAME: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME_INPUT
  UPDATE_MEMBER_SAVED_SEARCH_POS: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS_INPUT
  UPDATE_MEMBER_SAVED_SEARCH_QUERY: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY_INPUT
  UPDATE_MEMBER_SUMMARY_INTERVAL: TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL_INPUT
  UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS: TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS_INPUT
  UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION: TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION_INPUT
  UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION: TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION_INPUT
  UPDATE_ORGANIZATIONS_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER: TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_INPUT
  UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG_INPUT
  UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG_INPUT
  UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS: TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS_INPUT
  UPDATE_ORG_BOARD_VISIBILITY: TRELLO_UPDATE_ORG_BOARD_VISIBILITY_INPUT
  UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS: TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS_INPUT
  UPDATE_ORG_MEMBERSHIP: TRELLO_UPDATE_ORG_MEMBERSHIP_INPUT
  UPDATE_ORG_MEMBER_DEACTIVATION: TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION_INPUT
  UPDATE_ORG_PRIVATE_BOARD_VISIBILITY: TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY_INPUT
  UPDATE_ORG_PUBLIC_BOARD_VISIBILITY: TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY_INPUT
  UPDATE_SESSIONS_BY_ID_SESSION: TRELLO_UPDATE_SESSIONS_BY_ID_SESSION_INPUT
  UPDATE_SESSIONS_STATUS_BY_ID_SESSION: TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION_INPUT
  UPDATE_TOKENS_WEBHOOKS_BY_TOKEN: TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN_INPUT
  UPDATE_WEBHOOKS: TRELLO_UPDATE_WEBHOOKS_INPUT
  UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK_INPUT
  UPDATE_WEBHOOKS_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK_INPUT
  UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK_INPUT
  UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK_INPUT
  UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TRELLO".
 */
export type TRELLO_TOOL_OUTPUTS = {
  ACTION_GET_BOARD_BY_ID_ACTION: TRELLO_ACTION_GET_BOARD_BY_ID_ACTION_OUTPUT
  ACTION_GET_BY_ID: TRELLO_ACTION_GET_BY_ID_OUTPUT
  ACTION_GET_LIST_BY_ID_ACTION: TRELLO_ACTION_GET_LIST_BY_ID_ACTION_OUTPUT
  ADD_BOARDS: TRELLO_ADD_BOARDS_OUTPUT
  ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD: TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD_OUTPUT
  ADD_BOARDS_CHECKLISTS_BY_ID_BOARD: TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD_OUTPUT
  ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD: TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD_OUTPUT
  ADD_BOARDS_LABELS_BY_ID_BOARD: TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD_OUTPUT
  ADD_BOARDS_LISTS_BY_ID_BOARD: TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD_OUTPUT
  ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD: TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD_OUTPUT
  ADD_BOARDS_POWER_UPS_BY_ID_BOARD: TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD_OUTPUT
  ADD_CARDS: TRELLO_ADD_CARDS_OUTPUT
  ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD: TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_OUTPUT
  ADD_CARDS_ATTACHMENTS_BY_ID_CARD: TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD_OUTPUT
  ADD_CARDS_CHECKLISTS_BY_ID_CARD: TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD_OUTPUT
  ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST: TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST_OUTPUT
  ADD_CARDS_ID_LABELS_BY_ID_CARD: TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD_OUTPUT
  ADD_CARDS_ID_MEMBERS_BY_ID_CARD: TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD_OUTPUT
  ADD_CARDS_LABELS_BY_ID_CARD: TRELLO_ADD_CARDS_LABELS_BY_ID_CARD_OUTPUT
  ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD: TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD_OUTPUT
  ADD_CARDS_STICKERS_BY_ID_CARD: TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD_OUTPUT
  ADD_CHECKLISTS: TRELLO_ADD_CHECKLISTS_OUTPUT
  ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST: TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_OUTPUT
  ADD_LABELS: TRELLO_ADD_LABELS_OUTPUT
  ADD_LISTS: TRELLO_ADD_LISTS_OUTPUT
  ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST: TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST_OUTPUT
  ADD_LISTS_CARDS_BY_ID_LIST: TRELLO_ADD_LISTS_CARDS_BY_ID_LIST_OUTPUT
  ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST: TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST_OUTPUT
  ADD_MEMBERS_AVATAR_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER_OUTPUT
  ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT
  ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER_OUTPUT
  ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT
  ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_OUTPUT
  ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_OUTPUT
  ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER: TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_OUTPUT
  ADD_NOTIFICATIONS_ALL_READ: TRELLO_ADD_NOTIFICATIONS_ALL_READ_OUTPUT
  ADD_ORGANIZATIONS: TRELLO_ADD_ORGANIZATIONS_OUTPUT
  ADD_ORGANIZATIONS_LOGO_BY_ID_ORG: TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG_OUTPUT
  ADD_SESSIONS: TRELLO_ADD_SESSIONS_OUTPUT
  ADD_TOKENS_WEBHOOKS_BY_TOKEN: TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN_OUTPUT
  BOARD_CREATE_BOARD: TRELLO_BOARD_CREATE_BOARD_OUTPUT
  BOARD_FILTER_CARDS_BY_ID_BOARD: TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD_OUTPUT
  BOARD_GET_BY_ID: TRELLO_BOARD_GET_BY_ID_OUTPUT
  BOARD_GET_CARDS_BY_ID_BOARD: TRELLO_BOARD_GET_CARDS_BY_ID_BOARD_OUTPUT
  BOARD_GET_LISTS_BY_ID_BOARD: TRELLO_BOARD_GET_LISTS_BY_ID_BOARD_OUTPUT
  CARD_CREATE_AND_UPDATE: TRELLO_CARD_CREATE_AND_UPDATE_OUTPUT
  CARD_GET_BY_ID: TRELLO_CARD_GET_BY_ID_OUTPUT
  CARD_GET_BY_ID_FIELD: TRELLO_CARD_GET_BY_ID_FIELD_OUTPUT
  CARD_UPDATE_BY_ID_CARD: TRELLO_CARD_UPDATE_BY_ID_CARD_OUTPUT
  CARD_UPDATE_ID_LIST_BY_ID_CARD: TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD_OUTPUT
  CARD_UPDATE_POS_BY_ID_CARD: TRELLO_CARD_UPDATE_POS_BY_ID_CARD_OUTPUT
  CONVERT_CHECKLIST_ITEM_TO_CARD: TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD_OUTPUT
  DELETE_ACTIONS_BY_ID_ACTION: TRELLO_DELETE_ACTIONS_BY_ID_ACTION_OUTPUT
  DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER: TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_OUTPUT
  DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP: TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP_OUTPUT
  DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION: TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION_OUTPUT
  DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT: TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_OUTPUT
  DELETE_CARDS_BY_ID_CARD: TRELLO_DELETE_CARDS_BY_ID_CARD_OUTPUT
  DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST: TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST_OUTPUT
  DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL: TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL_OUTPUT
  DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER: TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER_OUTPUT
  DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR: TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR_OUTPUT
  DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER: TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER_OUTPUT
  DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_OUTPUT
  DELETE_CHECKLISTS_BY_ID_CHECKLIST: TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST_OUTPUT
  DELETE_CHECKLIST_ITEM: TRELLO_DELETE_CHECKLIST_ITEM_OUTPUT
  DELETE_LABELS_BY_ID_LABEL: TRELLO_DELETE_LABELS_BY_ID_LABEL_OUTPUT
  DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR: TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_OUTPUT
  DELETE_MEMBER_BOARD_BACKGROUND: TRELLO_DELETE_MEMBER_BOARD_BACKGROUND_OUTPUT
  DELETE_MEMBER_CUSTOM_STICKER: TRELLO_DELETE_MEMBER_CUSTOM_STICKER_OUTPUT
  DELETE_MEMBER_SAVED_SEARCH: TRELLO_DELETE_MEMBER_SAVED_SEARCH_OUTPUT
  DELETE_ORGANIZATIONS_BY_ID_ORG: TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG_OUTPUT
  DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG: TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG_OUTPUT
  DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER: TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER_OUTPUT
  DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER: TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_OUTPUT
  DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG: TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_OUTPUT
  DELETE_ORG_ASSOCIATED_DOMAIN: TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN_OUTPUT
  DELETE_TOKENS_BY_TOKEN: TRELLO_DELETE_TOKENS_BY_TOKEN_OUTPUT
  DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK: TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_OUTPUT
  DELETE_WEBHOOKS_BY_ID_WEBHOOK: TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK_OUTPUT
  DISMISS_MEMBER_MESSAGE: TRELLO_DISMISS_MEMBER_MESSAGE_OUTPUT
  GET_ACTIONS_BOARD_BY_ID_ACTION: TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_ACTIONS_BY_ID_ACTION: TRELLO_GET_ACTIONS_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_ACTIONS_CARD_BY_ID_ACTION: TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_ACTIONS_DISPLAY_BY_ID_ACTION: TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_ENTITIES_BY_ID_ACTION: TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_LIST_BY_ID_ACTION: TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_ACTIONS_MEMBER_BY_ID_ACTION: TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION: TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_ACTIONS_ORGANIZATION_BY_ID_ACTION: TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_OUTPUT
  GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD: TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD_OUTPUT
  GET_BATCH: TRELLO_GET_BATCH_OUTPUT
  GET_BOARDS_ACTIONS_BY_ID_BOARD: TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_BOARD_STARS_BY_ID_BOARD: TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_BY_ID_BOARD: TRELLO_GET_BOARDS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_BY_ID_BOARD_BY_FIELD: TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD_OUTPUT
  GET_BOARDS_CARDS_BY_ID_BOARD: TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER: TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER_OUTPUT
  GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD: TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD_OUTPUT
  GET_BOARDS_CHECKLISTS_BY_ID_BOARD: TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_DELTAS_BY_ID_BOARD: TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_LABELS_BY_ID_BOARD: TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL: TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL_OUTPUT
  GET_BOARDS_LISTS_BY_ID_BOARD: TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER: TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER_OUTPUT
  GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD: TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP: TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP_OUTPUT
  GET_BOARDS_MEMBERS_BY_ID_BOARD: TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER: TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER_OUTPUT
  GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER: TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER_OUTPUT
  GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD: TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_OUTPUT
  GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD: TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD_OUTPUT
  GET_BOARDS_MY_PREFS_BY_ID_BOARD: TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD_OUTPUT
  GET_BOARDS_ORGANIZATION_BY_ID_BOARD: TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_OUTPUT
  GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD: TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD_OUTPUT
  GET_CARDS_ACTIONS_BY_ID_CARD: TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD_OUTPUT
  GET_CARDS_ATTACHMENTS_BY_ID_CARD: TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_OUTPUT
  GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT: TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT_OUTPUT
  GET_CARDS_BOARD_BY_ID_CARD: TRELLO_GET_CARDS_BOARD_BY_ID_CARD_OUTPUT
  GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD: TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD_OUTPUT
  GET_CARDS_BY_ID_CARD: TRELLO_GET_CARDS_BY_ID_CARD_OUTPUT
  GET_CARDS_BY_ID_CARD_BY_FIELD: TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD_OUTPUT
  GET_CARDS_CHECKLISTS_BY_ID_CARD: TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD_OUTPUT
  GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD: TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD_OUTPUT
  GET_CARDS_LIST_BY_ID_CARD: TRELLO_GET_CARDS_LIST_BY_ID_CARD_OUTPUT
  GET_CARDS_LIST_BY_ID_CARD_BY_FIELD: TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD_OUTPUT
  GET_CARDS_MEMBERS_BY_ID_CARD: TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD_OUTPUT
  GET_CARDS_MEMBERS_VOTED_BY_ID_CARD: TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD_OUTPUT
  GET_CARDS_STICKERS_BY_ID_CARD: TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_OUTPUT
  GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_OUTPUT
  GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_OUTPUT
  GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD: TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD_OUTPUT
  GET_CHECKLISTS_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_OUTPUT
  GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD: TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD_OUTPUT
  GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_OUTPUT
  GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER: TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER_OUTPUT
  GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST: TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST_OUTPUT
  GET_CHECK_ITEM_BY_ID: TRELLO_GET_CHECK_ITEM_BY_ID_OUTPUT
  GET_LABELS_BOARD_BY_ID_LABEL: TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_OUTPUT
  GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD: TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD_OUTPUT
  GET_LABELS_BY_ID_LABEL: TRELLO_GET_LABELS_BY_ID_LABEL_OUTPUT
  GET_LISTS_ACTIONS_BY_ID_LIST: TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST_OUTPUT
  GET_LISTS_BOARD_BY_ID_LIST: TRELLO_GET_LISTS_BOARD_BY_ID_LIST_OUTPUT
  GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD: TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD_OUTPUT
  GET_LISTS_BY_ID_LIST: TRELLO_GET_LISTS_BY_ID_LIST_OUTPUT
  GET_LISTS_BY_ID_LIST_BY_FIELD: TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD_OUTPUT
  GET_LISTS_CARDS_BY_ID_LIST: TRELLO_GET_LISTS_CARDS_BY_ID_LIST_OUTPUT
  GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER: TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER_OUTPUT
  GET_MEMBERS_ACTIONS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_BOARDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER_OUTPUT
  GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD: TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD_OUTPUT
  GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR: TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR_OUTPUT
  GET_MEMBERS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_BY_ID_MEMBER_BY_FIELD: TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD_OUTPUT
  GET_MEMBERS_CARDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER_OUTPUT
  GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_DELTAS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER_OUTPUT
  GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER: TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER_OUTPUT
  GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER: TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD: TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD_OUTPUT
  GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER: TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER_OUTPUT
  GET_MEMBERS_TOKENS_BY_ID_MEMBER: TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER_OUTPUT
  GET_MEMBER_BOARD_BACKGROUND: TRELLO_GET_MEMBER_BOARD_BACKGROUND_OUTPUT
  GET_MEMBER_CUSTOM_BG: TRELLO_GET_MEMBER_CUSTOM_BG_OUTPUT
  GET_MEMBER_CUSTOM_EMOJI: TRELLO_GET_MEMBER_CUSTOM_EMOJI_OUTPUT
  GET_MEMBER_CUSTOM_STICKER: TRELLO_GET_MEMBER_CUSTOM_STICKER_OUTPUT
  GET_MEMBER_SAVED_SEARCH: TRELLO_GET_MEMBER_SAVED_SEARCH_OUTPUT
  GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT
  GET_NOTIFICATIONS_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT
  GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT
  GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT
  GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD: TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD_OUTPUT
  GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION: TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION_OUTPUT
  GET_NOTIFICATION_ORG_FIELD: TRELLO_GET_NOTIFICATION_ORG_FIELD_OUTPUT
  GET_NOTIF_CREATOR_FIELD: TRELLO_GET_NOTIF_CREATOR_FIELD_OUTPUT
  GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_BOARDS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER: TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER_OUTPUT
  GET_ORGANIZATIONS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD: TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD_OUTPUT
  GET_ORGANIZATIONS_DELTAS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP: TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP_OUTPUT
  GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER: TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER_OUTPUT
  GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER: TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER_OUTPUT
  GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG: TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_OUTPUT
  GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD: TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD_OUTPUT
  GET_SEARCH: TRELLO_GET_SEARCH_OUTPUT
  GET_SEARCH_MEMBERS: TRELLO_GET_SEARCH_MEMBERS_OUTPUT
  GET_SESSIONS_SOCKET: TRELLO_GET_SESSIONS_SOCKET_OUTPUT
  GET_TOKENS_BY_TOKEN: TRELLO_GET_TOKENS_BY_TOKEN_OUTPUT
  GET_TOKENS_BY_TOKEN_BY_FIELD: TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD_OUTPUT
  GET_TOKENS_MEMBER_BY_TOKEN: TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_OUTPUT
  GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD: TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD_OUTPUT
  GET_TOKENS_WEBHOOKS_BY_TOKEN: TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_OUTPUT
  GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK: TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK_OUTPUT
  GET_TYPES_BY_ID: TRELLO_GET_TYPES_BY_ID_OUTPUT
  GET_WEBHOOKS_BY_ID_WEBHOOK: TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_OUTPUT
  GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD: TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD_OUTPUT
  LIST_CREATE_LIST: TRELLO_LIST_CREATE_LIST_OUTPUT
  LIST_GET_BY_ID_LIST: TRELLO_LIST_GET_BY_ID_LIST_OUTPUT
  LIST_GET_CARDS_BY_ID_LIST: TRELLO_LIST_GET_CARDS_BY_ID_LIST_OUTPUT
  LIST_ID_BOARD_GET: TRELLO_LIST_ID_BOARD_GET_OUTPUT
  MARK_CARD_NOTIFICATIONS_READ: TRELLO_MARK_CARD_NOTIFICATIONS_READ_OUTPUT
  MEMBER_GET_BOARDS: TRELLO_MEMBER_GET_BOARDS_OUTPUT
  MEMBER_GET_BOARDS_BY_ID_MEMBER: TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER_OUTPUT
  MEMBER_GET_BY_ID: TRELLO_MEMBER_GET_BY_ID_OUTPUT
  REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS: TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS_OUTPUT
  REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS: TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS_OUTPUT
  SEARCH_GET_RESULTS: TRELLO_SEARCH_GET_RESULTS_OUTPUT
  TOKEN_GET_MEMBER_BY_TOKEN: TRELLO_TOKEN_GET_MEMBER_BY_TOKEN_OUTPUT
  TRELLO_UPDATE_MEMBER_BOARD_STAR: TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR_OUTPUT
  UPDATE_ACTIONS_BY_ID_ACTION: TRELLO_UPDATE_ACTIONS_BY_ID_ACTION_OUTPUT
  UPDATE_ACTIONS_TEXT_BY_ID_ACTION: TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION_OUTPUT
  UPDATE_BOARDS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_CLOSED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_DESC_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MEMBERS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER: TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER_OUTPUT
  UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_NAME_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD_OUTPUT
  UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD: TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD_OUTPUT
  UPDATE_BOARD_MEMBERSHIP: TRELLO_UPDATE_BOARD_MEMBERSHIP_OUTPUT
  UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS: TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS_OUTPUT
  UPDATE_BOARD_STAR_POSITION: TRELLO_UPDATE_BOARD_STAR_POSITION_OUTPUT
  UPDATE_CARDS_BY_ID_CARD: TRELLO_UPDATE_CARDS_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_CLOSED_BY_ID_CARD: TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_DESC_BY_ID_CARD: TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_DUE_BY_ID_CARD: TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_ID_BOARD_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_ID_LIST_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD: TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_LABELS_BY_ID_CARD: TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_NAME_BY_ID_CARD: TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_POS_BY_ID_CARD: TRELLO_UPDATE_CARDS_POS_BY_ID_CARD_OUTPUT
  UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER_OUTPUT
  UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD: TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD_OUTPUT
  UPDATE_CARD_CHECKLIST_ITEM_POSITION: TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION_OUTPUT
  UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS: TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS_OUTPUT
  UPDATE_CARD_COMMENT: TRELLO_UPDATE_CARD_COMMENT_OUTPUT
  UPDATE_CHECKLISTS_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST_OUTPUT
  UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST_OUTPUT
  UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST_OUTPUT
  UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST: TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST_OUTPUT
  UPDATE_CHECKLIST_ITEM_BY_IDS: TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS_OUTPUT
  UPDATE_CHECKLIST_ITEM_NAME_IN_CARD: TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD_OUTPUT
  UPDATE_LABELS_BY_ID_LABEL: TRELLO_UPDATE_LABELS_BY_ID_LABEL_OUTPUT
  UPDATE_LABELS_COLOR_BY_ID_LABEL: TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL_OUTPUT
  UPDATE_LABELS_NAME_BY_ID_LABEL: TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL_OUTPUT
  UPDATE_LISTS_BY_ID_LIST: TRELLO_UPDATE_LISTS_BY_ID_LIST_OUTPUT
  UPDATE_LISTS_CLOSED_BY_ID_LIST: TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST_OUTPUT
  UPDATE_LISTS_ID_BOARD_BY_ID_LIST: TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST_OUTPUT
  UPDATE_LISTS_NAME_BY_ID_LIST: TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST_OUTPUT
  UPDATE_LISTS_POS_BY_ID_LIST: TRELLO_UPDATE_LISTS_POS_BY_ID_LIST_OUTPUT
  UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST: TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST_OUTPUT
  UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_BIO_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER: TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER_OUTPUT
  UPDATE_MEMBER_BOARD_BACKGROUND: TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND_OUTPUT
  UPDATE_MEMBER_SAVED_SEARCH: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_OUTPUT
  UPDATE_MEMBER_SAVED_SEARCH_NAME: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME_OUTPUT
  UPDATE_MEMBER_SAVED_SEARCH_POS: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS_OUTPUT
  UPDATE_MEMBER_SAVED_SEARCH_QUERY: TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY_OUTPUT
  UPDATE_MEMBER_SUMMARY_INTERVAL: TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL_OUTPUT
  UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS: TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS_OUTPUT
  UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION: TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION_OUTPUT
  UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION: TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION_OUTPUT
  UPDATE_ORGANIZATIONS_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER: TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER_OUTPUT
  UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG_OUTPUT
  UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG: TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG_OUTPUT
  UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS: TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS_OUTPUT
  UPDATE_ORG_BOARD_VISIBILITY: TRELLO_UPDATE_ORG_BOARD_VISIBILITY_OUTPUT
  UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS: TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS_OUTPUT
  UPDATE_ORG_MEMBERSHIP: TRELLO_UPDATE_ORG_MEMBERSHIP_OUTPUT
  UPDATE_ORG_MEMBER_DEACTIVATION: TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION_OUTPUT
  UPDATE_ORG_PRIVATE_BOARD_VISIBILITY: TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY_OUTPUT
  UPDATE_ORG_PUBLIC_BOARD_VISIBILITY: TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY_OUTPUT
  UPDATE_SESSIONS_BY_ID_SESSION: TRELLO_UPDATE_SESSIONS_BY_ID_SESSION_OUTPUT
  UPDATE_SESSIONS_STATUS_BY_ID_SESSION: TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION_OUTPUT
  UPDATE_TOKENS_WEBHOOKS_BY_TOKEN: TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN_OUTPUT
  UPDATE_WEBHOOKS: TRELLO_UPDATE_WEBHOOKS_OUTPUT
  UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK_OUTPUT
  UPDATE_WEBHOOKS_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK_OUTPUT
  UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK_OUTPUT
  UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK_OUTPUT
  UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK: TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of TRELLO's ARCHIVED_CARD_TRIGGER trigger payload.
 */
type TRELLO_ARCHIVED_CARD_TRIGGER_PAYLOAD = {
  /**
   * Archived At
   * @description When the card was archived
   * @default null
   */
  archived_at: string | null;
  /**
   * Archived By
   * @description Username who archived the card
   * @default null
   */
  archived_by: string | null;
  /**
   * Board Id
   * @description ID of the board
   * @default null
   */
  board_id: string | null;
  /**
   * Board Name
   * @description Name of the board
   * @default null
   */
  board_name: string | null;
  /**
   * Card Id
   * @description ID of the archived card
   */
  card_id?: string;
  /**
   * Card Name
   * @description Name/title of the card
   */
  card_name?: string;
  /**
   * Description
   * @description Card description if any
   * @default null
   */
  description: string | null;
};

/**
 * Type of TRELLO's NEW_ACTIVITY_TRIGGER trigger payload.
 */
type TRELLO_NEW_ACTIVITY_TRIGGER_PAYLOAD = {
  /**
   * Action Id
   * @description ID of the activity
   */
  action_id?: string;
  /**
   * Action Type
   * @description Type of activity
   */
  action_type?: string;
  /**
   * Board Id
   * @description ID of the board if applicable
   * @default null
   */
  board_id: string | null;
  /**
   * Board Name
   * @description Name of the board if applicable
   * @default null
   */
  board_name: string | null;
  /**
   * Card Id
   * @description ID of the card if applicable
   * @default null
   */
  card_id: string | null;
  /**
   * Card Name
   * @description Name of the card if applicable
   * @default null
   */
  card_name: string | null;
  /**
   * Created At
   * @description When the activity occurred
   * @default null
   */
  created_at: string | null;
  /**
   * Member Id
   * @description ID of the member who performed the action
   * @default null
   */
  member_id: string | null;
  /**
   * Member Name
   * @description Name of the member who performed the action
   * @default null
   */
  member_name: string | null;
};

/**
 * Type of TRELLO's NEW_BOARD_TRIGGER trigger payload.
 */
type TRELLO_NEW_BOARD_TRIGGER_PAYLOAD = {
  /**
   * Board Id
   * @description ID of the new board
   */
  board_id?: string;
  /**
   * Board Name
   * @description Name of the board
   */
  board_name?: string;
  /**
   * Created At
   * @description When the board was created
   * @default null
   */
  created_at: string | null;
  /**
   * Created By
   * @description Username who created the board
   * @default null
   */
  created_by: string | null;
  /**
   * Description
   * @description Board description if any
   * @default null
   */
  description: string | null;
};

/**
 * Type of TRELLO's NEW_CARD_TRIGGER trigger payload.
 */
type TRELLO_NEW_CARD_TRIGGER_PAYLOAD = {
  /**
   * Board Id
   * @description ID of the board
   * @default null
   */
  board_id: string | null;
  /**
   * Board Name
   * @description Name of the board
   * @default null
   */
  board_name: string | null;
  /**
   * Card Id
   * @description ID of the new card
   */
  card_id?: string;
  /**
   * Card Name
   * @description Name/title of the card
   */
  card_name?: string;
  /**
   * Created At
   * @description When the card was created
   * @default null
   */
  created_at: string | null;
  /**
   * Created By
   * @description Username who created the card
   * @default null
   */
  created_by: string | null;
  /**
   * Description
   * @description Card description if any
   * @default null
   */
  description: string | null;
};

/**
 * Type of TRELLO's UPDATED_CARD_TRIGGER trigger payload.
 */
type TRELLO_UPDATED_CARD_TRIGGER_PAYLOAD = {
  /**
   * Board Id
   * @description ID of the board
   * @default null
   */
  board_id: string | null;
  /**
   * Board Name
   * @description Name of the board
   * @default null
   */
  board_name: string | null;
  /**
   * Card Id
   * @description ID of the updated card
   */
  card_id?: string;
  /**
   * Card Name
   * @description Name/title of the card
   */
  card_name?: string;
  /**
   * Description
   * @description Current card description
   * @default null
   */
  description: string | null;
  /**
   * New Data
   * @description New values of updated fields
   * @default null
   */
  new_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Old Data
   * @description Previous values of updated fields
   * @default null
   */
  old_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Updated At
   * @description When the card was updated
   * @default null
   */
  updated_at: string | null;
  /**
   * Updated By
   * @description Username who updated the card
   * @default null
   */
  updated_by: string | null;
};

/**
 * Map of Composio's TRELLO toolkit.
 */
export const TRELLO = {
  slug: "trello",
  tools: {
    /**
     * Deprecated: use `get actions board by id action` instead. retrieves details for the trello board associated with a specific action id, returning board information only.
     */
    ACTION_GET_BOARD_BY_ID_ACTION: "TRELLO_ACTION_GET_BOARD_BY_ID_ACTION",
    /**
     * Deprecated: use `get actions by id action` instead. retrieves detailed information about a specific trello action by its id.
     */
    ACTION_GET_BY_ID: "TRELLO_ACTION_GET_BY_ID",
    /**
     * Retrieves the trello list associated with a specific trello action id, for actions linked to a list. <<DEPRECATED use get_actions_list_by_id_action>>
     */
    ACTION_GET_LIST_BY_ID_ACTION: "TRELLO_ACTION_GET_LIST_BY_ID_ACTION",
    /**
     * Creates a new trello board; the 'name' parameter is required for creation, and various preferences can be customized or cloned from a source board.
     */
    ADD_BOARDS: "TRELLO_ADD_BOARDS",
    /**
     * Generates a new calendar key for the trello board specified by `idboard`, invalidating any previous key for that board.
     */
    ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD: "TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD",
    /**
     * Creates a new, initially empty checklist with a given name on an existing and accessible trello board.
     */
    ADD_BOARDS_CHECKLISTS_BY_ID_BOARD: "TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD",
    /**
     * Generates a new email key for the trello board specified by idboard to enable or reset adding cards via email; this invalidates any previously existing email key for the board.
     */
    ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD: "TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD",
    /**
     * Creates a new label on an existing trello board.
     */
    ADD_BOARDS_LABELS_BY_ID_BOARD: "TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD",
    /**
     * Creates a new, empty list on a specified, existing trello board, typically used as a column or category for organizing cards.
     */
    ADD_BOARDS_LISTS_BY_ID_BOARD: "TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD",
    /**
     * Marks the trello board specified by idboard as viewed for the current user, exclusively updating its viewed status and potentially influencing its position in user-specific lists and notification settings.
     */
    ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD: "TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD",
    /**
     * Enables the power-up specified by the 'value' parameter on the board; processes one power-up enablement per call.
     */
    ADD_BOARDS_POWER_UPS_BY_ID_BOARD: "TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD",
    /**
     * Creates a new card in a trello list; `idlist` is required, and if `idcardsource` is used, the source card must be accessible.
     */
    ADD_CARDS: "TRELLO_ADD_CARDS",
    /**
     * Adds a new text comment, which can include @mentions, to a trello card specified by its id; file attachments are not supported via this action.
     */
    ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD: "TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD",
    /**
     * Adds an attachment to a trello card by `idcard`; specify either a `file` to upload or a `url` to link, but not both.
     */
    ADD_CARDS_ATTACHMENTS_BY_ID_CARD: "TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD",
    /**
     * Adds a checklist to a trello card: use `value` to add a specific existing checklist, `idchecklistsource` to create a new checklist by copying an existing one (optionally using `name` for the new checklist's name), or `name` to create a new empty checklist from scratch.
     */
    ADD_CARDS_CHECKLISTS_BY_ID_CARD: "TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD",
    /**
     * Adds a new check item to an existing checklist on a specific trello card.
     */
    ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST: "TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST",
    /**
     * Adds an existing label to a trello card; `idcard` identifies the card and `value` is the id of the label to add. both card and label must already exist.
     */
    ADD_CARDS_ID_LABELS_BY_ID_CARD: "TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD",
    /**
     * Assigns a trello member to a specific trello card by card id (or short link) and member id.
     */
    ADD_CARDS_ID_MEMBERS_BY_ID_CARD: "TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD",
    /**
     * Adds a label to an existing trello card (specified by `idcard`), defining the label by `name` and either `color` or the overriding `value` (which specifies color by name); a new label is created on the board if a matching one (by name/color combination) doesn't already exist.
     */
    ADD_CARDS_LABELS_BY_ID_CARD: "TRELLO_ADD_CARDS_LABELS_BY_ID_CARD",
    /**
     * Casts a 'yes' vote for a specified member on a trello card; a member can only vote once per card.
     */
    ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD: "TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD",
    /**
     * Adds a sticker to a trello card, using a default sticker name (e.g., 'taco-cool') or a custom sticker id for the image, and allows specifying its position, rotation, and z-index.
     */
    ADD_CARDS_STICKERS_BY_ID_CARD: "TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD",
    /**
     * Creates a new checklist on a trello card, either by name or by copying from `idchecklistsource`, targeting an `idcard` or `idboard`; this action creates only the checklist structure, not its items.
     */
    ADD_CHECKLISTS: "TRELLO_ADD_CHECKLISTS",
    /**
     * Adds a new check item to a specified trello checklist; this action does not update existing check items.
     */
    ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST: "TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST",
    /**
     * Creates a new label with a specified name (required) and color on a trello board (idboard required); this action defines the label but does not apply it to cards.
     */
    ADD_LABELS: "TRELLO_ADD_LABELS",
    /**
     * Creates a new list on a specified trello board, with options to copy an existing list, set its position, initial state (archived/subscribed), and does not modify existing lists or move cards.
     */
    ADD_LISTS: "TRELLO_ADD_LISTS",
    /**
     * Archives all cards in a trello list; while cards can be restored via the trello interface, this action does not provide an unarchive function.
     */
    ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST: "TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST",
    /**
     * Creates a new card in a trello list, which must be specified by an existing and accessible `idlist`.
     */
    ADD_LISTS_CARDS_BY_ID_LIST: "TRELLO_ADD_LISTS_CARDS_BY_ID_LIST",
    /**
     * Moves all cards from a trello list to a *different* board; this action is irreversible, moves (not copies) cards, and empties the source list without deleting it.
     */
    ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST: "TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST",
    /**
     * Updates a trello member's avatar using a base64-encoded image; the `file` field, though schema-optional, requires valid image data for a successful update.
     */
    ADD_MEMBERS_AVATAR_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER",
    /**
     * Adds a new custom board background, from an image file, to a specified trello member's collection, making it available for their use but not applying it to any board.
     */
    ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER",
    /**
     * Stars a trello board for a member (does not remove or list stars), optionally at a specified position; the board must exist and be accessible to the member.
     */
    ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER",
    /**
     * Adds a new custom board background for a specified trello member; the `file` parameter (image data) is required.
     */
    ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER",
    /**
     * Adds a new custom emoji using an image file and a unique name to a trello member's account; this emoji is member-specific and not shared across the workspace.
     */
    ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER",
    /**
     * Uploads a custom sticker to a trello member's collection, if the member's plan allows custom stickers and respects associated limits.
     */
    ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER",
    /**
     * Creates a new saved search with a specified name, position, and query for a trello member.
     */
    ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER: "TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER",
    /**
     * Marks all trello notifications for the authenticated user as read across all boards; this action is permanent and cannot be undone.
     */
    ADD_NOTIFICATIONS_ALL_READ: "TRELLO_ADD_NOTIFICATIONS_ALL_READ",
    /**
     * Creates a new trello organization (workspace) with a `displayname` (required), and optionally a description, website, and various preferences (e.g., board visibility, member invitation restrictions).
     */
    ADD_ORGANIZATIONS: "TRELLO_ADD_ORGANIZATIONS",
    /**
     * Sets or updates the logo for a trello organization; the provided image file must adhere to trello's format and size restrictions.
     */
    ADD_ORGANIZATIONS_LOGO_BY_ID_ORG: "TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG",
    /**
     * Creates or updates a trello user session, optionally linking it to a specific board for status updates and setting the user's activity status.
     */
    ADD_SESSIONS: "TRELLO_ADD_SESSIONS",
    /**
     * Creates a webhook for a trello token to monitor a trello model (`idmodel`) and send notifications to a `callbackurl`, which must be publicly accessible and able to respond to trello's head validation request.
     */
    ADD_TOKENS_WEBHOOKS_BY_TOKEN: "TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN",
    /**
     * <<deprecated: this action is deprecated. please use 'add boards' instead.>> creates a new trello board, requiring the 'name' parameter.
     */
    BOARD_CREATE_BOARD: "TRELLO_BOARD_CREATE_BOARD",
    /**
     * Deprecated: use `get boards cards by id board by filter`. retrieves cards from a trello board using a filter.
     */
    BOARD_FILTER_CARDS_BY_ID_BOARD: "TRELLO_BOARD_FILTER_CARDS_BY_ID_BOARD",
    /**
     * Fetches comprehensive details for a specific trello board by its id; this is a read-only action. <<DEPRECATED use get_boards_by_id_board>>
     */
    BOARD_GET_BY_ID: "TRELLO_BOARD_GET_BY_ID",
    /**
     * Deprecated (use `get boards cards by id board`): retrieves cards from an existing trello board, allowing filtering and customization of fields for cards, attachments, and members.
     */
    BOARD_GET_CARDS_BY_ID_BOARD: "TRELLO_BOARD_GET_CARDS_BY_ID_BOARD",
    /**
     * Deprecated: retrieves lists from a specified trello board; use `get boards lists by id board`.
     */
    BOARD_GET_LISTS_BY_ID_BOARD: "TRELLO_BOARD_GET_LISTS_BY_ID_BOARD",
    /**
     * (deprecated: use add cards) creates a new card in a trello list; `idlist` is required, and if `idcardsource` is used, the source card must be accessible.
     */
    CARD_CREATE_AND_UPDATE: "TRELLO_CARD_CREATE_AND_UPDATE",
    /**
     * Deprecated: use `get cards by id card`. retrieves a trello card by id/shortlink, with options for related data.
     */
    CARD_GET_BY_ID: "TRELLO_CARD_GET_BY_ID",
    /**
     * (deprecated: use `get cards by id card by field` instead) retrieves the value of a single, specified field from a trello card.
     */
    CARD_GET_BY_ID_FIELD: "TRELLO_CARD_GET_BY_ID_FIELD",
    /**
     * Updates an existing trello card's attributes like name, description, due date, members, labels, position, or archives/unarchives it, attaches files, or changes its cover. <<DEPRECATED use update_cards_by_id_card>>
     */
    CARD_UPDATE_BY_ID_CARD: "TRELLO_CARD_UPDATE_BY_ID_CARD",
    /**
     * Deprecated: moves a trello card to a different list on the same board. use `update cards id list by id card` instead.
     */
    CARD_UPDATE_ID_LIST_BY_ID_CARD: "TRELLO_CARD_UPDATE_ID_LIST_BY_ID_CARD",
    /**
     * Updates a trello card's position within its list to 'top', 'bottom', or a specified 1-indexed positive integer.<<DEPRECATED use update_cards_pos_by_id_card>>
     */
    CARD_UPDATE_POS_BY_ID_CARD: "TRELLO_CARD_UPDATE_POS_BY_ID_CARD",
    /**
     * Converts a checklist item into a new card (useful for promoting a subtask), which inherits some properties from the item; this is irreversible via the api and offers no customization during conversion.
     */
    CONVERT_CHECKLIST_ITEM_TO_CARD: "TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD",
    /**
     * Deletes a specific trello action, such as a `commentcard`, by its id; this is an irreversible operation and only applies to deletable action types, as many (especially system-generated) actions cannot be deleted.
     */
    DELETE_ACTIONS_BY_ID_ACTION: "TRELLO_DELETE_ACTIONS_BY_ID_ACTION",
    /**
     * Permanently removes a current member from a trello board, revoking their access; this action is irreversible.
     */
    DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER: "TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER",
    /**
     * Disables a power-up on a trello board using the board's id and the plugin id of a power-up currently enabled on that board; this action is irreversible and may result in data loss.
     */
    DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP: "TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP",
    /**
     * Deletes a specific comment action (identified by `idaction`) from a trello card (identified by `idcard`); this operation is irreversible and only affects comments.
     */
    DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION: "TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION",
    /**
     * Permanently removes a specified attachment from a trello card; this action is irreversible and requires that both the card and the attachment exist.
     */
    DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT: "TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT",
    /**
     * Permanently deletes an archived trello card specified by its `idcard`.
     */
    DELETE_CARDS_BY_ID_CARD: "TRELLO_DELETE_CARDS_BY_ID_CARD",
    /**
     * Permanently deletes a specific checklist from a trello card.
     */
    DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST: "TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST",
    /**
     * Removes a specific label from a trello card; the label itself is not deleted from the board, only its association with the card.
     */
    DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL: "TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL",
    /**
     * Removes a currently assigned member from a trello card, affecting only the card's member list and not the member's board membership or overall permissions.
     */
    DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER: "TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER",
    /**
     * Permanently removes a specific `color` label from an existing trello card identified by `idcard`, if the card has that label; this only disassociates the label from the card, not deleting the label definition itself.
     */
    DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR: "TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR",
    /**
     * Removes a member's vote from a trello card; this operation is irreversible and does not confirm if the vote existed prior to removal.
     */
    DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER: "TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER",
    /**
     * Permanently removes a specific sticker (identified by `idsticker`) from a trello card (identified by `idcard`).
     */
    DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: "TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER",
    /**
     * Permanently and irreversibly deletes a trello checklist and all its items using the `idchecklist`.
     */
    DELETE_CHECKLISTS_BY_ID_CHECKLIST: "TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST",
    /**
     * Permanently deletes a specific check item from a checklist on a trello card; this operation is irreversible and only affects the specified item, not the entire checklist.
     */
    DELETE_CHECKLIST_ITEM: "TRELLO_DELETE_CHECKLIST_ITEM",
    /**
     * Permanently deletes an existing label from a trello board by its id; this operation is irreversible via the api.
     */
    DELETE_LABELS_BY_ID_LABEL: "TRELLO_DELETE_LABELS_BY_ID_LABEL",
    /**
     * Removes a specific starred board (identified by `idboardstar`) from a trello member's (identified by `idmember`) list of favorites; `idboardstar` must be an existing star for that member.
     */
    DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR: "TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR",
    /**
     * Permanently deletes a specific custom board background belonging to the specified trello member; this operation cannot be undone.
     */
    DELETE_MEMBER_BOARD_BACKGROUND: "TRELLO_DELETE_MEMBER_BOARD_BACKGROUND",
    /**
     * Deletes a custom sticker from a trello member's collection; this permanent action is only available for custom stickers within a trello workspace on a paid plan.
     */
    DELETE_MEMBER_CUSTOM_STICKER: "TRELLO_DELETE_MEMBER_CUSTOM_STICKER",
    /**
     * Permanently deletes a specific saved search for a trello member, used when the search is outdated or no longer needed.
     */
    DELETE_MEMBER_SAVED_SEARCH: "TRELLO_DELETE_MEMBER_SAVED_SEARCH",
    /**
     * Permanently deletes a trello organization and all its associated data; this action is irreversible and requires caution.
     */
    DELETE_ORGANIZATIONS_BY_ID_ORG: "TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG",
    /**
     * Deletes an existing trello organization's custom logo, restoring its default and leaving other settings unchanged; if no custom logo exists, it succeeds without effect.
     */
    DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG: "TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG",
    /**
     * Removes a member entirely from a specific trello organization, including from all its boards and cards; this action is permanent and does not delete the member's trello account.
     */
    DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER: "TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER",
    /**
     * Permanently removes a member from a trello organization by id, revoking all access to its content; re-invitation is required for renewed access, and this does not delete the member's trello account.
     */
    DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER: "TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER",
    /**
     * Removes a previously set email domain invitation restriction for a trello organization.
     */
    DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG: "TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG",
    /**
     * Irreversibly deletes an associated email domain from a trello organization's preferences to update email domain restrictions for workspace membership; the domain must be currently associated for removal.
     */
    DELETE_ORG_ASSOCIATED_DOMAIN: "TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN",
    /**
     * Deletes a specific trello api token, identified by its value in the path, permanently revoking its access; this action is irreversible and used to invalidate compromised or unneeded tokens.
     */
    DELETE_TOKENS_BY_TOKEN: "TRELLO_DELETE_TOKENS_BY_TOKEN",
    /**
     * Deletes an existing webhook, specified by its `idwebhook`, thereby stopping its notifications.
     */
    DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK: "TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK",
    /**
     * Permanently deletes an existing trello webhook by its `idwebhook`, an irreversible action that stops future notifications.
     */
    DELETE_WEBHOOKS_BY_ID_WEBHOOK: "TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK",
    /**
     * Dismisses a specific one-time message for an existing trello member, preventing it from being displayed again.
     */
    DISMISS_MEMBER_MESSAGE: "TRELLO_DISMISS_MEMBER_MESSAGE",
    /**
     * Retrieves details for the trello board associated with a specific action id, returning board information only.
     */
    GET_ACTIONS_BOARD_BY_ID_ACTION: "TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION",
    /**
     * Retrieves a specified `field` from the trello board associated with the provided trello `idaction`.
     */
    GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD",
    /**
     * Retrieves detailed information about a specific trello action by its id.
     */
    GET_ACTIONS_BY_ID_ACTION: "TRELLO_GET_ACTIONS_BY_ID_ACTION",
    /**
     * Retrieves the value of a specific field (e.g., 'data', 'date', 'type') from a trello action using its unique id.
     */
    GET_ACTIONS_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD",
    /**
     * Retrieves trello card details for a given `idaction`, which must be an action specifically linked to a card; returns only card data, not action details.
     */
    GET_ACTIONS_CARD_BY_ID_ACTION: "TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION",
    /**
     * Retrieves a specific field from the trello card associated with the given action id.
     */
    GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD",
    /**
     * Retrieves a display-friendly representation of an existing and accessible trello action for ui/report purposes, providing presentation-focused data instead of full raw details and without altering the action.
     */
    GET_ACTIONS_DISPLAY_BY_ID_ACTION: "TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION",
    /**
     * Retrieves all entities (e.g., boards, lists, cards, members) associated with a specific, existing trello action id.
     */
    GET_ACTIONS_ENTITIES_BY_ID_ACTION: "TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION",
    /**
     * Retrieves the trello list associated with a specific trello action id, for actions linked to a list.
     */
    GET_ACTIONS_LIST_BY_ID_ACTION: "TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION",
    /**
     * Retrieves a specific field of the list associated with a trello action, returning only that single field's value.
     */
    GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD",
    /**
     * Retrieves specified details of the trello member who performed the action identified by `idaction`; information is specific to this action's context, not the member's full profile.
     */
    GET_ACTIONS_MEMBER_BY_ID_ACTION: "TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION",
    /**
     * Fetches a specific field of a member for a trello action, returning only one field per call for optimized data retrieval.
     */
    GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD",
    /**
     * Retrieves details about the trello member who created the action with the given `idaction`.
     */
    GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION: "TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION",
    /**
     * Gets information about the creator of a trello action.
     */
    GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD",
    /**
     * Fetches the organization details for a given trello action, if the action has an associated organization.
     */
    GET_ACTIONS_ORGANIZATION_BY_ID_ACTION: "TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION",
    /**
     * Retrieves the value of a specific `field` for the organization associated with a trello `idaction`; use if the action has an organization and you need only that field (e.g., 'name', 'id', 'url').
     */
    GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD: "TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD",
    /**
     * Executes multiple trello api get requests in a single batch operation for efficient bulk data retrieval.
     */
    GET_BATCH: "TRELLO_GET_BATCH",
    /**
     * Retrieves actions (e.g., card creations, comments) for a trello board by its id, useful for activity tracking; the board must exist.
     */
    GET_BOARDS_ACTIONS_BY_ID_BOARD: "TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD",
    /**
     * Retrieves board stars (user-marked favorites) for a specified trello board, where `idboard` must be an existing board; use to list a user's starred boards or all stars on a particular board.
     */
    GET_BOARDS_BOARD_STARS_BY_ID_BOARD: "TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD",
    /**
     * Fetches comprehensive details for a specific trello board by its id; this is a read-only action.
     */
    GET_BOARDS_BY_ID_BOARD: "TRELLO_GET_BOARDS_BY_ID_BOARD",
    /**
     * Retrieves the value of a single, specified field from a trello board.
     */
    GET_BOARDS_BY_ID_BOARD_BY_FIELD: "TRELLO_GET_BOARDS_BY_ID_BOARD_BY_FIELD",
    /**
     * Retrieves cards from an existing trello board, allowing filtering and customization of fields for cards, attachments, and members.
     */
    GET_BOARDS_CARDS_BY_ID_BOARD: "TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD",
    /**
     * Retrieves cards from a specified trello board, filtered by 'all', 'closed', 'none', 'open', or 'visible'.
     */
    GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER: "TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_FILTER",
    /**
     * Retrieves details for a specific trello card by its id and its parent board's id, with options to customize returned fields for the card and associated data like attachments, actions, members, and checklists.
     */
    GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD: "TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD_BY_ID_CARD",
    /**
     * Retrieves checklists (primarily structure/metadata, not detailed item history) from a trello board, with options to include associated card and check item details and to control which fields are returned for each entity.
     */
    GET_BOARDS_CHECKLISTS_BY_ID_BOARD: "TRELLO_GET_BOARDS_CHECKLISTS_BY_ID_BOARD",
    /**
     * Retrieves recent changes (deltas) for a trello board by its id, allowing tracking of modifications since a specified update sequence number (`ixlastupdate`).
     */
    GET_BOARDS_DELTAS_BY_ID_BOARD: "TRELLO_GET_BOARDS_DELTAS_BY_ID_BOARD",
    /**
     * Fetches labels for a specified trello board, aiding in its organization or label management; this action does not detail per-card label usage.
     */
    GET_BOARDS_LABELS_BY_ID_BOARD: "TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD",
    /**
     * Fetches specified fields for a specific label on a trello board; this read-only action does not return information about which cards the label is attached to.
     */
    GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL: "TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD_BY_ID_LABEL",
    /**
     * Retrieves lists from a specified trello board, with options to filter lists and include card details.
     */
    GET_BOARDS_LISTS_BY_ID_BOARD: "TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD",
    /**
     * Fetches lists by status from an accessible trello board; card details for these lists require a separate call.
     */
    GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER: "TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD_BY_FILTER",
    /**
     * Retrieves trello board memberships (user roles and permissions) for auditing access or managing collaboration, returning only membership data and not other board content.
     */
    GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD: "TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD",
    /**
     * Retrieves a specific membership on a trello board by its id, optionally including member details.
     */
    GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP: "TRELLO_GET_BOARDS_MEMBERSHIPS_BY_ID_BOARD_BY_ID_MEMBERSHIP",
    /**
     * Retrieves members of a trello board, with options to filter the list and select specific member fields to return.
     */
    GET_BOARDS_MEMBERS_BY_ID_BOARD: "TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD",
    /**
     * Retrieves members of a trello board using a specified filter, assuming the board exists and the filter is valid.
     */
    GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER: "TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD_BY_FILTER",
    /**
     * Retrieves cards for a member on a board, with options to customize returned fields and related data; member must have board access.
     */
    GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER: "TRELLO_GET_BOARDS_MEMBERS_CARDS_BY_ID_BOARD_BY_ID_MEMBER",
    /**
     * Retrieves a list of members invited to a specific trello board who have not yet joined.
     */
    GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD: "TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD",
    /**
     * Retrieves a specific field (e.g., email, username) for members who have been invited to a trello board but have not yet joined.
     */
    GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD: "TRELLO_GET_BOARDS_MEMBERS_INVITED_BY_ID_BOARD_BY_FIELD",
    /**
     * Retrieves the authenticated user's preferences for a specific trello board.
     */
    GET_BOARDS_MY_PREFS_BY_ID_BOARD: "TRELLO_GET_BOARDS_MY_PREFS_BY_ID_BOARD",
    /**
     * Fetches information about the trello workspace (organization) to which a specific board belongs, returning details for the workspace only, not the board itself or its content.
     */
    GET_BOARDS_ORGANIZATION_BY_ID_BOARD: "TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD",
    /**
     * Retrieves a specific field from the organization associated with a trello board, useful for obtaining targeted details without fetching the entire organization object.
     */
    GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD: "TRELLO_GET_BOARDS_ORGANIZATION_BY_ID_BOARD_BY_FIELD",
    /**
     * Retrieves the history of actions (e.g., comments, updates, moves) for a trello card specified by `idcard`; the card must exist and very old actions might not be available.
     */
    GET_CARDS_ACTIONS_BY_ID_CARD: "TRELLO_GET_CARDS_ACTIONS_BY_ID_CARD",
    /**
     * Retrieves attachments for a trello card.
     */
    GET_CARDS_ATTACHMENTS_BY_ID_CARD: "TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD",
    /**
     * Retrieves a specific attachment from a trello card by card id and attachment id.
     */
    GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT: "TRELLO_GET_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT",
    /**
     * Fetches detailed information about the trello board to which a specific, existing, and accessible card belongs, using the card's id or short link.
     */
    GET_CARDS_BOARD_BY_ID_CARD: "TRELLO_GET_CARDS_BOARD_BY_ID_CARD",
    /**
     * Retrieves a specific field from the board associated with a given trello card.
     */
    GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD: "TRELLO_GET_CARDS_BOARD_BY_ID_CARD_BY_FIELD",
    /**
     * Retrieves a trello card by its id or shortlink, with options to include related data like actions, attachments, members, and checklists.
     */
    GET_CARDS_BY_ID_CARD: "TRELLO_GET_CARDS_BY_ID_CARD",
    /**
     * Retrieves the value of a single, specified field from a trello card.
     */
    GET_CARDS_BY_ID_CARD_BY_FIELD: "TRELLO_GET_CARDS_BY_ID_CARD_BY_FIELD",
    /**
     * Retrieves all checklists, including their check items, for a trello card specified by its id or shortlink, if the card exists and is accessible.
     */
    GET_CARDS_CHECKLISTS_BY_ID_CARD: "TRELLO_GET_CARDS_CHECKLISTS_BY_ID_CARD",
    /**
     * Gets the states (e.g., 'complete', 'incomplete') of checklist items on a trello card; returns only item states, not full checklist or card details.
     */
    GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD: "TRELLO_GET_CARDS_CHECK_ITEM_STATES_BY_ID_CARD",
    /**
     * Gets the trello list to which a specified card (which must exist) belongs.
     */
    GET_CARDS_LIST_BY_ID_CARD: "TRELLO_GET_CARDS_LIST_BY_ID_CARD",
    /**
     * Fetches a specific field from the trello list that a given card belongs to.
     */
    GET_CARDS_LIST_BY_ID_CARD_BY_FIELD: "TRELLO_GET_CARDS_LIST_BY_ID_CARD_BY_FIELD",
    /**
     * Retrieves members of a trello card, identified by its id or shortlink, allowing customization of which member fields are returned.
     */
    GET_CARDS_MEMBERS_BY_ID_CARD: "TRELLO_GET_CARDS_MEMBERS_BY_ID_CARD",
    /**
     * Fetches members who voted on a trello card; requires an existing card id, the voting power-up to be active on the board, and members to have voted; returns member details, not vote counts.
     */
    GET_CARDS_MEMBERS_VOTED_BY_ID_CARD: "TRELLO_GET_CARDS_MEMBERS_VOTED_BY_ID_CARD",
    /**
     * Retrieves all visual stickers (used for categorization, emphasis, or decoration) from an existing and accessible trello card; this read-only action does not affect other card elements.
     */
    GET_CARDS_STICKERS_BY_ID_CARD: "TRELLO_GET_CARDS_STICKERS_BY_ID_CARD",
    /**
     * Call this action to retrieve detailed properties (like image, position, rotation) of a specific sticker on a trello card.
     */
    GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: "TRELLO_GET_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER",
    /**
     * Retrieves the trello board a specific checklist belongs to, using the checklist id.
     */
    GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST: "TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST",
    /**
     * Retrieves a specified `field` (e.g., 'name', 'desc') from the trello board associated with the given `idchecklist`.
     */
    GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD: "TRELLO_GET_CHECKLISTS_BOARD_BY_ID_CHECKLIST_BY_FIELD",
    /**
     * Fetches a trello checklist by its `idchecklist`, requiring the id to refer to an existing checklist, and allows specifying which details of the checklist, its cards, and check items are returned.
     */
    GET_CHECKLISTS_BY_ID_CHECKLIST: "TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST",
    /**
     * Retrieves a specific field's value from a trello checklist by its id and the field name, without loading the entire checklist object or its items.
     */
    GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD: "TRELLO_GET_CHECKLISTS_BY_ID_CHECKLIST_BY_FIELD",
    /**
     * Retrieves cards associated with a specific, valid trello checklist id, allowing for filtering and customization of card and related entity data fields.
     */
    GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST: "TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST",
    /**
     * Retrieves cards from a specified trello checklist, filterable by card id or status (e.g., 'all', 'open'), noting the response is a single card object even if the filter could match multiple cards.
     */
    GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER: "TRELLO_GET_CHECKLISTS_CARDS_BY_ID_CHECKLIST_BY_FILTER",
    /**
     * Retrieves check items from an existing trello checklist, optionally filtering them and specifying which fields to return.
     */
    GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST: "TRELLO_GET_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST",
    /**
     * Retrieves a specific check item from a checklist using the checklist id and check item id.
     */
    GET_CHECK_ITEM_BY_ID: "TRELLO_GET_CHECK_ITEM_BY_ID",
    /**
     * Retrieves the trello board to which a given, valid trello label id (`idlabel`) belongs.
     */
    GET_LABELS_BOARD_BY_ID_LABEL: "TRELLO_GET_LABELS_BOARD_BY_ID_LABEL",
    /**
     * Retrieves a specified `field` (e.g., 'name', 'url') from the trello board associated with a given `idlabel`.
     */
    GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD: "TRELLO_GET_LABELS_BOARD_BY_ID_LABEL_BY_FIELD",
    /**
     * Retrieves detailed information for a specific trello label by its id, allowing selection of specific fields to return.
     */
    GET_LABELS_BY_ID_LABEL: "TRELLO_GET_LABELS_BY_ID_LABEL",
    /**
     * Retrieves actions (like card movements or comments, newest first) for a trello list by its id, to track history or create activity logs.
     */
    GET_LISTS_ACTIONS_BY_ID_LIST: "TRELLO_GET_LISTS_ACTIONS_BY_ID_LIST",
    /**
     * Retrieves the board to which a specific trello list belongs.
     */
    GET_LISTS_BOARD_BY_ID_LIST: "TRELLO_GET_LISTS_BOARD_BY_ID_LIST",
    /**
     * Retrieves a specific field (e.g., 'name', 'desc', 'url') from the trello board associated with a given list id, useful when the board's id is not directly known.
     */
    GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD: "TRELLO_GET_LISTS_BOARD_BY_ID_LIST_BY_FIELD",
    /**
     * Retrieves a trello list by its unique id, optionally including details for its cards and parent board.
     */
    GET_LISTS_BY_ID_LIST: "TRELLO_GET_LISTS_BY_ID_LIST",
    /**
     * Fetches the value of a single, specified field from a trello list.
     */
    GET_LISTS_BY_ID_LIST_BY_FIELD: "TRELLO_GET_LISTS_BY_ID_LIST_BY_FIELD",
    /**
     * Fetches cards from a trello list by its id, with options to filter and customize the returned card data.
     */
    GET_LISTS_CARDS_BY_ID_LIST: "TRELLO_GET_LISTS_CARDS_BY_ID_LIST",
    /**
     * Retrieves cards from a specific trello list, filtered by criteria like 'open', 'closed', or 'all'.
     */
    GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER: "TRELLO_GET_LISTS_CARDS_BY_ID_LIST_BY_FILTER",
    /**
     * Retrieves a list of actions for a specified trello member, allowing filtering by type, date, models, and control over output format and fields.
     */
    GET_MEMBERS_ACTIONS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_ACTIONS_BY_ID_MEMBER",
    /**
     * Retrieves board-level details (not lists/cards) for trello boards associated with a member id or username, allowing extensive customization of the returned data.
     */
    GET_MEMBERS_BOARDS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER",
    /**
     * Retrieves a list of boards for a specific trello member, applying a filter such as 'open', 'starred', or 'all'.
     */
    GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER: "TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER_BY_FILTER",
    /**
     * Retrieves trello boards to which a specific member has been invited but has not yet joined.
     */
    GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER",
    /**
     * Retrieves a specific field from trello boards to which a member has been invited but not yet joined; returns an empty result for no pending invitations.
     */
    GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD: "TRELLO_GET_MEMBERS_BOARDS_INVITED_BY_ID_MEMBER_BY_FIELD",
    /**
     * Fetches the board backgrounds for a specified trello member.
     */
    GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER",
    /**
     * Fetches only the boards a specific trello member has starred, identified by their id or username.
     */
    GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER",
    /**
     * Retrieves detailed information about a specific board star (a trello board marked as a favorite) for a given trello member.
     */
    GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR: "TRELLO_GET_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR",
    /**
     * Fetches comprehensive information about a trello member, specified by id or username, including profile, activities, boards, cards, notifications, and organization affiliations, with customizable detail levels via filters and field parameters.
     */
    GET_MEMBERS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_BY_ID_MEMBER",
    /**
     * Efficiently retrieves a specific field (e.g., fullname, username, bio) of a trello member using their id or username, without fetching the entire member profile.
     */
    GET_MEMBERS_BY_ID_MEMBER_BY_FIELD: "TRELLO_GET_MEMBERS_BY_ID_MEMBER_BY_FIELD",
    /**
     * Retrieves cards for a trello member, specified by id or username, with options to filter cards and include related data like actions, attachments, and checklists.
     */
    GET_MEMBERS_CARDS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER",
    /**
     * Retrieves cards for a trello member, applying a filter that must be a trello-recognized card filter.
     */
    GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER: "TRELLO_GET_MEMBERS_CARDS_BY_ID_MEMBER_BY_FILTER",
    /**
     * Retrieves custom board backgrounds for a trello member, who must exist, using their id or username.
     */
    GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER",
    /**
     * Retrieves all custom (user-specific, non-standard) emojis that a specified trello member has created or can access.
     */
    GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER",
    /**
     * Retrieves a member's custom stickers, which are unique personalized stickers created by them, distinct from standard trello stickers.
     */
    GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER",
    /**
     * Retrieves a chronological list of all changes (deltas) made by a specific trello member, including modifications to boards, lists, and cards, to audit activity or sync data.
     */
    GET_MEMBERS_DELTAS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_DELTAS_BY_ID_MEMBER",
    /**
     * Retrieves notifications for a trello member, specified by their id or username, with options for filtering and pagination.
     */
    GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER",
    /**
     * Retrieves a list of a trello member's notifications, filtered by specified types.
     */
    GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER: "TRELLO_GET_MEMBERS_NOTIFICATIONS_BY_ID_MEMBER_BY_FILTER",
    /**
     * Fetches organizations a specific trello member belongs to; the `idmember` must be an id or username of an existing trello member.
     */
    GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER",
    /**
     * Fetches a list of organizations a specific trello member belongs to, using a filter to narrow down the results.
     */
    GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER: "TRELLO_GET_MEMBERS_ORGANIZATIONS_BY_ID_MEMBER_BY_FILTER",
    /**
     * Retrieves organizations a trello member has been invited to but has not yet accepted or declined.
     */
    GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER",
    /**
     * Get a specific field of an organization to which the member has a pending invitation; returns data only if such an invitation exists.
     */
    GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD: "TRELLO_GET_MEMBERS_ORGANIZATIONS_INVITED_BY_ID_MEMBER_BY_FIELD",
    /**
     * Retrieves all saved search queries for a trello member; this action only retrieves saved searches and does not execute them.
     */
    GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER",
    /**
     * Gets api token metadata for a trello member; actual token values are excluded for security.
     */
    GET_MEMBERS_TOKENS_BY_ID_MEMBER: "TRELLO_GET_MEMBERS_TOKENS_BY_ID_MEMBER",
    /**
     * Retrieves a specific custom board background for a trello member, using the member's id and the board background's id.
     */
    GET_MEMBER_BOARD_BACKGROUND: "TRELLO_GET_MEMBER_BOARD_BACKGROUND",
    /**
     * Retrieves metadata (e.g., brightness, urls, tiling status) for a specific custom board background of a trello member, not the image file itself.
     */
    GET_MEMBER_CUSTOM_BG: "TRELLO_GET_MEMBER_CUSTOM_BG",
    /**
     * Retrieves a specific custom emoji by its id for a trello member, requiring that both the member and emoji exist and are associated.
     */
    GET_MEMBER_CUSTOM_EMOJI: "TRELLO_GET_MEMBER_CUSTOM_EMOJI",
    /**
     * Retrieves a specific custom sticker by id for a trello member; returns only sticker data (not its usage on cards/boards), with optional field selection.
     */
    GET_MEMBER_CUSTOM_STICKER: "TRELLO_GET_MEMBER_CUSTOM_STICKER",
    /**
     * Fetches the details of a specific saved search for a trello member; this does not execute the search.
     */
    GET_MEMBER_SAVED_SEARCH: "TRELLO_GET_MEMBER_SAVED_SEARCH",
    /**
     * Gets the trello board associated with a given notification id, returning only board data and allowing selection of specific board fields.
     */
    GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION",
    /**
     * Retrieves a specific, valid field from the board associated with a trello notification.
     */
    GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD: "TRELLO_GET_NOTIFICATIONS_BOARD_BY_ID_NOTIFICATION_BY_FIELD",
    /**
     * Retrieves a specific trello notification by its id, optionally including related entities and specific fields for the notification and its related entities.
     */
    GET_NOTIFICATIONS_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION",
    /**
     * Retrieves a specific field from a trello notification.
     */
    GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD: "TRELLO_GET_NOTIFICATIONS_BY_ID_NOTIFICATION_BY_FIELD",
    /**
     * Retrieves card details (excluding notification, board, or list data) for a specified trello idnotification, which must exist and be linked to a card.
     */
    GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION",
    /**
     * Retrieves a specific field of a trello card, using the id of a notification that is directly associated with that card.
     */
    GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD: "TRELLO_GET_NOTIFICATIONS_CARD_BY_ID_NOTIFICATION_BY_FIELD",
    /**
     * Retrieves the information needed to display an existing trello notification, identified by its id, without altering the notification or fetching its complete metadata.
     */
    GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_DISPLAY_BY_ID_NOTIFICATION",
    /**
     * Retrieves trello entities (e.g., boards, cards, lists, members) linked to a specific notification id, focusing on the related entities rather than the notification details itself.
     */
    GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_ENTITIES_BY_ID_NOTIFICATION",
    /**
     * Retrieves details of the trello list associated with a specific notification id.
     */
    GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION",
    /**
     * Efficiently retrieves a single specified field from a trello list linked to a notification, avoiding fetching the entire list.
     */
    GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD: "TRELLO_GET_NOTIFICATIONS_LIST_BY_ID_NOTIFICATION_BY_FIELD",
    /**
     * Fetches details of the member (not the notification content itself) associated with a specific trello notification id.
     */
    GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION",
    /**
     * Retrieves a specific `field` of the trello member associated with the given `idnotification`.
     */
    GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD: "TRELLO_GET_NOTIFICATIONS_MEMBER_BY_ID_NOTIFICATION_BY_FIELD",
    /**
     * Fetches the creator (member) of a trello notification, identified by `idnotification`, returning only creator details and respecting trello privacy settings and user permissions.
     */
    GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_MEMBER_CREATOR_BY_ID_NOTIFICATION",
    /**
     * Retrieves the trello organization linked to a specific notification id; returns organization details only, not the notification itself.
     */
    GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION: "TRELLO_GET_NOTIFICATIONS_ORGANIZATION_BY_ID_NOTIFICATION",
    /**
     * Retrieves a specific field from the trello organization associated with a given notification, provided the notification is linked to an organization.
     */
    GET_NOTIFICATION_ORG_FIELD: "TRELLO_GET_NOTIFICATION_ORG_FIELD",
    /**
     * Fetches a specific field of the member who created the specified trello notification.
     */
    GET_NOTIF_CREATOR_FIELD: "TRELLO_GET_NOTIF_CREATOR_FIELD",
    /**
     * Retrieves a log of actions (e.g., card creations, list movements, comments) for a specified trello organization, filterable by type, date range, and models; `idorg` must be a valid organization id/name, and `page` * `limit` must be < 1000.
     */
    GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_ACTIONS_BY_ID_ORG",
    /**
     * Fetches boards for a trello organization, specified by its id or name, with options to filter and customize returned data.
     */
    GET_ORGANIZATIONS_BOARDS_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG",
    /**
     * Fetches a list of boards belonging to a specific trello organization, filtered by a given criterion.
     */
    GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER: "TRELLO_GET_ORGANIZATIONS_BOARDS_BY_ID_ORG_BY_FILTER",
    /**
     * Retrieves detailed information about a specific trello organization, including optional related resources like members, boards, and actions, using its id or unique name.
     */
    GET_ORGANIZATIONS_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_BY_ID_ORG",
    /**
     * Retrieves the value of a single specified `field` for a trello organization `idorg`, ideal for efficiently fetching a specific piece of information without loading the full organization details.
     */
    GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD: "TRELLO_GET_ORGANIZATIONS_BY_ID_ORG_BY_FIELD",
    /**
     * Retrieves a log of recent modifications (deltas) for a trello organization, filterable by tags and supporting incremental fetching via an update index.
     */
    GET_ORGANIZATIONS_DELTAS_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_DELTAS_BY_ID_ORG",
    /**
     * Fetches organization-level memberships for a trello organization, with options to filter members and include their details; does not return board-specific memberships.
     */
    GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG",
    /**
     * Retrieves a specific membership within a trello organization, using their respective ids, to ascertain the member's role, status, or permissions.
     */
    GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP: "TRELLO_GET_ORGANIZATIONS_MEMBERSHIPS_BY_ID_ORG_BY_ID_MEMBERSHIP",
    /**
     * Retrieves members of a trello organization (specified by id or name), with an option to include member activity if the organization is premium.
     */
    GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG",
    /**
     * Fetches members of a specified trello organization using a filter like 'all', 'normal', 'admins', or 'owners'.
     */
    GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER: "TRELLO_GET_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_FILTER",
    /**
     * Fetches all cards assigned to a specific member of a given trello organization.
     */
    GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER: "TRELLO_GET_ORGANIZATIONS_MEMBERS_CARDS_BY_ID_ORG_BY_ID_MEMBER",
    /**
     * Retrieves members invited to a trello organization who have not yet accepted their invitation, returning only data for pending invitations (not active or former members) and cannot send or modify invitations.
     */
    GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG: "TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG",
    /**
     * Retrieves a specific `field` (e.g., fullname, username, email, status) for members with pending invitations to the trello organization specified by `idorg`.
     */
    GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD: "TRELLO_GET_ORGANIZATIONS_MEMBERS_INVITED_BY_ID_ORG_BY_FIELD",
    /**
     * Searches trello content (e.g., boards, cards, members) within specified organizations using a query and customizable result fields.
     */
    GET_SEARCH: "TRELLO_GET_SEARCH",
    /**
     * Searches trello members by name, username, or email, optionally scoped to a board or organization.
     */
    GET_SEARCH_MEMBERS: "TRELLO_GET_SEARCH_MEMBERS",
    /**
     * Establishes a websocket connection with trello for receiving real-time updates on trello entities.
     */
    GET_SESSIONS_SOCKET: "TRELLO_GET_SESSIONS_SOCKET",
    /**
     * Retrieves information about a specific trello api token, allowing selection of specific fields and inclusion of webhook details.
     */
    GET_TOKENS_BY_TOKEN: "TRELLO_GET_TOKENS_BY_TOKEN",
    /**
     * Retrieves a specific field from a trello token, provided the token is valid, has necessary permissions, and the field is a valid token field.
     */
    GET_TOKENS_BY_TOKEN_BY_FIELD: "TRELLO_GET_TOKENS_BY_TOKEN_BY_FIELD",
    /**
     * Retrieves information about the trello member associated with the current api token, allowing customization of the returned fields.
     */
    GET_TOKENS_MEMBER_BY_TOKEN: "TRELLO_GET_TOKENS_MEMBER_BY_TOKEN",
    /**
     * Retrieves a specific field for the trello member associated with the provided api token.
     */
    GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD: "TRELLO_GET_TOKENS_MEMBER_BY_TOKEN_BY_FIELD",
    /**
     * Retrieves all webhooks associated with a specific trello api token.
     */
    GET_TOKENS_WEBHOOKS_BY_TOKEN: "TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN",
    /**
     * Retrieves detailed information for a specific trello webhook, identified by `idwebhook`, that is associated with the given `token`.
     */
    GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK: "TRELLO_GET_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK",
    /**
     * Retrieves the structural details of a trello object type (e.g., 'action', 'board', 'card') using its identifier; describes the type itself, not specific instances.
     */
    GET_TYPES_BY_ID: "TRELLO_GET_TYPES_BY_ID",
    /**
     * Retrieves the full configuration and status for a specific trello webhook by its unique id; this action does not return past notification history.
     */
    GET_WEBHOOKS_BY_ID_WEBHOOK: "TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK",
    /**
     * Gets a specific field's value from a trello webhook, avoiding retrieval of the full webhook object.
     */
    GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD: "TRELLO_GET_WEBHOOKS_BY_ID_WEBHOOK_BY_FIELD",
    /**
     * Deprecated: use 'add lists' instead. creates a new list on a trello board, optionally copying an existing list, setting position, and initial state; does not modify existing lists or move cards.
     */
    LIST_CREATE_LIST: "TRELLO_LIST_CREATE_LIST",
    /**
     * Retrieves a trello list by its unique id, optionally including details for its cards and parent board. <<DEPRECATED use get_lists_by_id_list>>
     */
    LIST_GET_BY_ID_LIST: "TRELLO_LIST_GET_BY_ID_LIST",
    /**
     * Deprecated: fetches cards from a trello list by its id; use `getlistscardsbyidlist` instead.
     */
    LIST_GET_CARDS_BY_ID_LIST: "TRELLO_LIST_GET_CARDS_BY_ID_LIST",
    /**
     * Deprecated: please use the `get lists board by id list` action instead. retrieves the board to which a specific trello list belongs.
     */
    LIST_ID_BOARD_GET: "TRELLO_LIST_ID_BOARD_GET",
    /**
     * Marks all notifications associated with a specific trello card as read; this is irreversible and only affects read status, not deleting or modifying notifications.
     */
    MARK_CARD_NOTIFICATIONS_READ: "TRELLO_MARK_CARD_NOTIFICATIONS_READ",
    /**
     * Deprecated: retrieves a filtered list of boards for a trello member; use `get members boards by id member by filter` instead.
     */
    MEMBER_GET_BOARDS: "TRELLO_MEMBER_GET_BOARDS",
    /**
     * Deprecated: use `getmembersboardsbyidmember`; retrieves trello boards for a member (id/username).
     */
    MEMBER_GET_BOARDS_BY_ID_MEMBER: "TRELLO_MEMBER_GET_BOARDS_BY_ID_MEMBER",
    /**
     * [deprecated: please use 'get members by id member' instead] fetches comprehensive trello member information by id/username, including profile, activities, boards, cards, notifications, and organizations, with customizable detail.
     */
    MEMBER_GET_BY_ID: "TRELLO_MEMBER_GET_BY_ID",
    /**
     * Permanently deletes a specific checklist item from a checklist on a trello card using their respective ids.
     */
    REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS: "TRELLO_REMOVE_CHECKLIST_ITEM_FROM_CARD_BY_IDS",
    /**
     * Permanently deletes a specific custom board background (identified by `idboardbackground`) associated with an existing trello member (identified by `idmember`).
     */
    REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS: "TRELLO_REMOVE_SPECIFIC_MEMBER_S_BOARD_BACKGROUNDS",
    /**
     * Deprecated: use the `get search` action to search trello content within specified organizations.
     */
    SEARCH_GET_RESULTS: "TRELLO_SEARCH_GET_RESULTS",
    /**
     * Retrieves information for the trello member associated with the api token, with customizable fields. <<deprecated: please use the 'get tokens member by token' action instead.>>
     */
    TOKEN_GET_MEMBER_BY_TOKEN: "TRELLO_TOKEN_GET_MEMBER_BY_TOKEN",
    /**
     * Updates an existing board star for a member, allowing changes to the target board (must be a valid, accessible board id if specified) or the star's position.
     */
    TRELLO_UPDATE_MEMBER_BOARD_STAR: "TRELLO_TRELLO_UPDATE_MEMBER_BOARD_STAR",
    /**
     * Updates the `text` field of a specific trello comment action, identified by `idaction`.
     */
    UPDATE_ACTIONS_BY_ID_ACTION: "TRELLO_UPDATE_ACTIONS_BY_ID_ACTION",
    /**
     * Updates the text of an existing trello action (e.g., a comment or card update) identified by `idaction`; this change only affects the action's text content.
     */
    UPDATE_ACTIONS_TEXT_BY_ID_ACTION: "TRELLO_UPDATE_ACTIONS_TEXT_BY_ID_ACTION",
    /**
     * Updates attributes (e.g., name, description, status, preferences) of an existing trello board identified by `idboard`.
     */
    UPDATE_BOARDS_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_BY_ID_BOARD",
    /**
     * Archives (closes) an active trello board or reopens a previously archived board.
     */
    UPDATE_BOARDS_CLOSED_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_CLOSED_BY_ID_BOARD",
    /**
     * Updates the description of a specified trello board; the update is immediate and does not affect other board elements like lists, cards, or membership.
     */
    UPDATE_BOARDS_DESC_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_DESC_BY_ID_BOARD",
    /**
     * Moves an existing trello board to a specified, existing trello organization, which can affect the board's visibility and member access.
     */
    UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_ID_ORGANIZATION_BY_ID_BOARD",
    /**
     * Sets the name of the blue label for a trello board.
     */
    UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_LABEL_NAMES_BLUE_BY_ID_BOARD",
    /**
     * Updates the name of the green label for a specified trello board; this change is board-wide, affects all cards using this label, and does not change the label's color.
     */
    UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_LABEL_NAMES_GREEN_BY_ID_BOARD",
    /**
     * Updates the name of the orange label for a specified trello board, affecting only the label's name, not its color or associated cards.
     */
    UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_LABEL_NAMES_ORANGE_BY_ID_BOARD",
    /**
     * Updates the name of the purple label on a trello board specified by `idboard`.
     */
    UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_LABEL_NAMES_PURPLE_BY_ID_BOARD",
    /**
     * Updates the name of the red label on a specified trello board, without affecting its color or other labels.
     */
    UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_LABEL_NAMES_RED_BY_ID_BOARD",
    /**
     * Updates the name of a board's yellow label; other colored labels are unaffected.
     */
    UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_LABEL_NAMES_YELLOW_BY_ID_BOARD",
    /**
     * Adds or updates a member's role on a specific trello board, typically requiring the member's `email` and a membership `type`.
     */
    UPDATE_BOARDS_MEMBERS_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD",
    /**
     * Updates a current member's email, full name, or role (admin, normal, or observer) on a specific trello board; email and full name changes are board-specific and do not affect the member's global trello profile.
     */
    UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER: "TRELLO_UPDATE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER",
    /**
     * Updates a trello board's email position preference for new cards; this preference only affects new cards (not existing ones) and the board must exist.
     */
    UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MY_PREFS_EMAIL_POSITION_BY_ID_BOARD",
    /**
     * Sets or disables the default trello list for new cards created via email on a specific board.
     */
    UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MY_PREFS_ID_EMAIL_LIST_BY_ID_BOARD",
    /**
     * Updates the 'show list guide' preference for a specified trello board, affecting visibility for all users of that board.
     */
    UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_LIST_GUIDE_BY_ID_BOARD",
    /**
     * Sets the current user's preference for displaying or concealing the sidebar activity feed on an accessible trello board; this change only affects the requesting user.
     */
    UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_ACTIVITY_BY_ID_BOARD",
    /**
     * Updates the authenticated user's personal preference for showing or hiding the sidebar on a specific trello board.
     */
    UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_BY_ID_BOARD",
    /**
     * Updates the authenticated user's preference for showing or hiding members in a specific trello board's sidebar, affecting only the current user's view.
     */
    UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_MY_PREFS_SHOW_SIDEBAR_MEMBERS_BY_ID_BOARD",
    /**
     * Updates the name of an existing trello board, identified by `idboard`; this change only affects the board's name, not its other attributes.
     */
    UPDATE_BOARDS_NAME_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_NAME_BY_ID_BOARD",
    /**
     * Updates the cosmetic background preference for a specific trello board; this change does not affect board functionality or content.
     */
    UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_BACKGROUND_BY_ID_BOARD",
    /**
     * Updates the 'calendarfeedenabled' preference for a trello board, which, when enabled, makes board cards with due dates accessible via an icalendar feed for external calendar integration.
     */
    UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_CALENDAR_FEED_ENABLED_BY_ID_BOARD",
    /**
     * Updates the card aging visual preference to 'pirate' or 'regular' mode for a specified trello board.
     */
    UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_CARD_AGING_BY_ID_BOARD",
    /**
     * Updates the preference on a specific trello board for whether existing card covers are displayed; this controls visibility only and does not add or remove the actual covers from cards.
     */
    UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_CARD_COVERS_BY_ID_BOARD",
    /**
     * Changes the permission settings for who can add comments to cards on a specific trello board, without affecting other board settings.
     */
    UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_COMMENTS_BY_ID_BOARD",
    /**
     * Updates who can invite new members ('admins' or 'members') to a specific trello board.
     */
    UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_INVITATIONS_BY_ID_BOARD",
    /**
     * Updates the permission level preference (e.g., 'private' or 'public') for a trello board, identified by `idboard`, if the board exists and the authenticated user possesses administrative permissions for it.
     */
    UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_PERMISSION_LEVEL_BY_ID_BOARD",
    /**
     * Updates a board's 'selfjoin' preference, determining if members can join freely or must be invited.
     */
    UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_SELF_JOIN_BY_ID_BOARD",
    /**
     * Sets who can vote on cards for an existing trello board, changing only the voting preferences for all cards on the board.
     */
    UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_PREFS_VOTING_BY_ID_BOARD",
    /**
     * Updates the authenticated user's subscription status (subscribe/unsubscribe for notifications) for a specified trello board, to which the user must have access.
     */
    UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD: "TRELLO_UPDATE_BOARDS_SUBSCRIBED_BY_ID_BOARD",
    /**
     * Updates a user's role (e.g., admin, normal, observer) on a specific trello board or retrieves updated member details, requiring existing board and membership ids.
     */
    UPDATE_BOARD_MEMBERSHIP: "TRELLO_UPDATE_BOARD_MEMBERSHIP",
    /**
     * Updates the current user's preference for the visibility of sidebar board actions on a specific trello board.
     */
    UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS: "TRELLO_UPDATE_BOARD_SIDEBAR_ACTIONS_PREFS",
    /**
     * Updates the display position of a specific starred board for a trello member (referenced by `idmember` or 'me') using its `idboardstar`, allowing reordering to 'top', 'bottom', or a specific positive numerical position (as a string).
     */
    UPDATE_BOARD_STAR_POSITION: "TRELLO_UPDATE_BOARD_STAR_POSITION",
    /**
     * Updates an existing trello card's attributes like name, description, due date, members, labels, position, or archives/unarchives it, attaches files, or changes its cover.
     */
    UPDATE_CARDS_BY_ID_CARD: "TRELLO_UPDATE_CARDS_BY_ID_CARD",
    /**
     * Updates the 'closed' status of an existing trello card.
     */
    UPDATE_CARDS_CLOSED_BY_ID_CARD: "TRELLO_UPDATE_CARDS_CLOSED_BY_ID_CARD",
    /**
     * Updates or clears the entire description of an existing trello card; use an empty string for `value` to clear.
     */
    UPDATE_CARDS_DESC_BY_ID_CARD: "TRELLO_UPDATE_CARDS_DESC_BY_ID_CARD",
    /**
     * Updates the due date of a specific trello card; the card identified by `idcard` must exist.
     */
    UPDATE_CARDS_DUE_BY_ID_CARD: "TRELLO_UPDATE_CARDS_DUE_BY_ID_CARD",
    /**
     * Sets or removes the attachment cover for an existing trello card, using a specified image attachment id from that card or `none` to remove the cover.
     */
    UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD: "TRELLO_UPDATE_CARDS_ID_ATTACHMENT_COVER_BY_ID_CARD",
    /**
     * Moves a trello card to a different board and, optionally, to a specific list on that new board, useful for reorganizing across projects or workflows.
     */
    UPDATE_CARDS_ID_BOARD_BY_ID_CARD: "TRELLO_UPDATE_CARDS_ID_BOARD_BY_ID_CARD",
    /**
     * Moves a trello card to a different list on the same trello board; this operation is idempotent and only updates the card's list id.
     */
    UPDATE_CARDS_ID_LIST_BY_ID_CARD: "TRELLO_UPDATE_CARDS_ID_LIST_BY_ID_CARD",
    /**
     * Adds a member to a trello card, appending their id to the card's list of member ids; the card must exist and the member must have board permissions.
     */
    UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD: "TRELLO_UPDATE_CARDS_ID_MEMBERS_BY_ID_CARD",
    /**
     * Updates labels on an existing trello card; use `value` with a color list (e.g., 'red,blue') or 'all' to replace all labels, or `color` and `name` to add/update a specific label (created if new on board with given attributes).
     */
    UPDATE_CARDS_LABELS_BY_ID_CARD: "TRELLO_UPDATE_CARDS_LABELS_BY_ID_CARD",
    /**
     * Updates the name of an existing trello card, identified by its id or shortlink; other card properties remain unchanged.
     */
    UPDATE_CARDS_NAME_BY_ID_CARD: "TRELLO_UPDATE_CARDS_NAME_BY_ID_CARD",
    /**
     * Updates a trello card's position within its list to 'top', 'bottom', or a specified 1-indexed positive integer.
     */
    UPDATE_CARDS_POS_BY_ID_CARD: "TRELLO_UPDATE_CARDS_POS_BY_ID_CARD",
    /**
     * Updates an existing sticker's image, position (top, left coordinates), or stacking order (zindex) on a specific trello card; the `rotate` parameter may not be supported by trello.
     */
    UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER: "TRELLO_UPDATE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER",
    /**
     * Updates the user's subscription status for a trello card, if the card exists and is accessible.
     */
    UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD: "TRELLO_UPDATE_CARDS_SUBSCRIBED_BY_ID_CARD",
    /**
     * Updates the position of a check item within a checklist on a trello card; the new position can be 'top', 'bottom', or a positive integer.
     */
    UPDATE_CARD_CHECKLIST_ITEM_POSITION: "TRELLO_UPDATE_CARD_CHECKLIST_ITEM_POSITION",
    /**
     * Updates the state of a specific check item on a trello card's checklist, only affecting its completion status and no other properties.
     */
    UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS: "TRELLO_UPDATE_CARD_CHECKLIST_ITEM_STATE_BY_IDS",
    /**
     * Updates the text for a given comment action (`idaction`) on a specified card (`idcard`), affecting only the text content.
     */
    UPDATE_CARD_COMMENT: "TRELLO_UPDATE_CARD_COMMENT",
    /**
     * Updates an existing trello checklist, allowing modification of its name, position, associated card/board, or copying items from a source checklist.
     */
    UPDATE_CHECKLISTS_BY_ID_CHECKLIST: "TRELLO_UPDATE_CHECKLISTS_BY_ID_CHECKLIST",
    /**
     * Moves a trello checklist to a new parent card; the checklist and the destination card must exist.
     */
    UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST: "TRELLO_UPDATE_CHECKLISTS_ID_CARD_BY_ID_CHECKLIST",
    /**
     * Updates the name of an existing trello checklist.
     */
    UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST: "TRELLO_UPDATE_CHECKLISTS_NAME_BY_ID_CHECKLIST",
    /**
     * Updates the position of an existing checklist on a trello card.
     */
    UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST: "TRELLO_UPDATE_CHECKLISTS_POS_BY_ID_CHECKLIST",
    /**
     * Updates a check item's attributes (name, position, state) or moves it to a different checklist on the same card, requiring the card id, current checklist id, and check item id.
     */
    UPDATE_CHECKLIST_ITEM_BY_IDS: "TRELLO_UPDATE_CHECKLIST_ITEM_BY_IDS",
    /**
     * Updates the name of a specific check item on a checklist within a trello card, provided the card, checklist, and check item all exist.
     */
    UPDATE_CHECKLIST_ITEM_NAME_IN_CARD: "TRELLO_UPDATE_CHECKLIST_ITEM_NAME_IN_CARD",
    /**
     * Updates an existing trello label's attributes (color, name, or associated board) by its id; the label must exist.
     */
    UPDATE_LABELS_BY_ID_LABEL: "TRELLO_UPDATE_LABELS_BY_ID_LABEL",
    /**
     * Updates the color of an existing trello label, or removes its color if 'null' is specified for the value.
     */
    UPDATE_LABELS_COLOR_BY_ID_LABEL: "TRELLO_UPDATE_LABELS_COLOR_BY_ID_LABEL",
    /**
     * Updates the name of an existing trello label, identified by `idlabel`; an empty string for `value` clears the label's name but does not delete the label.
     */
    UPDATE_LABELS_NAME_BY_ID_LABEL: "TRELLO_UPDATE_LABELS_NAME_BY_ID_LABEL",
    /**
     * Updates attributes of an existing trello list, such as name, position, archive status, board, or copies cards from another list, provided the list `idlist` exists.
     */
    UPDATE_LISTS_BY_ID_LIST: "TRELLO_UPDATE_LISTS_BY_ID_LIST",
    /**
     * Updates whether an existing trello list is closed (archived); a closed list is hidden from the board view but not deleted and can be re-opened.
     */
    UPDATE_LISTS_CLOSED_BY_ID_LIST: "TRELLO_UPDATE_LISTS_CLOSED_BY_ID_LIST",
    /**
     * Moves an existing trello list (identified by `idlist`) to an existing destination board (board id in `value`), optionally setting its new position (`pos`).
     */
    UPDATE_LISTS_ID_BOARD_BY_ID_LIST: "TRELLO_UPDATE_LISTS_ID_BOARD_BY_ID_LIST",
    /**
     * Updates the name of an existing trello list, identified by its id; this only changes the list's name, not its cards or position.
     */
    UPDATE_LISTS_NAME_BY_ID_LIST: "TRELLO_UPDATE_LISTS_NAME_BY_ID_LIST",
    /**
     * Changes a trello list's order on a board to 'top', 'bottom', or a specified numeric position, affecting only its position.
     */
    UPDATE_LISTS_POS_BY_ID_LIST: "TRELLO_UPDATE_LISTS_POS_BY_ID_LIST",
    /**
     * Updates the subscription status for a trello list, allowing the user to subscribe or unsubscribe to control notifications.
     */
    UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST: "TRELLO_UPDATE_LISTS_SUBSCRIBED_BY_ID_LIST",
    /**
     * Updates the avatar source for a specified trello member.
     */
    UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_AVATAR_SOURCE_BY_ID_MEMBER",
    /**
     * Updates the bio of a specified trello member.
     */
    UPDATE_MEMBERS_BIO_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_BIO_BY_ID_MEMBER",
    /**
     * Updates an existing trello member's profile information, preferences, or username.
     */
    UPDATE_MEMBERS_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_BY_ID_MEMBER",
    /**
     * Updates the full name for a trello member, identified by their valid id or username; this operation only affects the full name, leaving other profile information unchanged.
     */
    UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_FULL_NAME_BY_ID_MEMBER",
    /**
     * Updates the initials for a specified trello member, identified by their id or username.
     */
    UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_INITIALS_BY_ID_MEMBER",
    /**
     * Updates a trello member's color blind preference, which only changes their specific display without affecting others.
     */
    UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_PREFS_COLOR_BLIND_BY_ID_MEMBER",
    /**
     * Updates a trello member's locale preference; affects date/time display (not existing content translation) and an empty `value` may reset to default.
     */
    UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_PREFS_LOCALE_BY_ID_MEMBER",
    /**
     * Updates the username for an existing trello member, identified by their id or current username.
     */
    UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER: "TRELLO_UPDATE_MEMBERS_USERNAME_BY_ID_MEMBER",
    /**
     * Updates an existing board background's properties (brightness, image file, or tiling) for a specified trello member, using their id and the board background id.
     */
    UPDATE_MEMBER_BOARD_BACKGROUND: "TRELLO_UPDATE_MEMBER_BOARD_BACKGROUND",
    /**
     * Updates an existing trello member's saved search (name, position, or query) identified by `idmember` and `idsavedsearch`.
     */
    UPDATE_MEMBER_SAVED_SEARCH: "TRELLO_UPDATE_MEMBER_SAVED_SEARCH",
    /**
     * Updates a trello member's saved search display name (not its criteria), identified by `idmember` and `idsavedsearch`; the search must exist and belong to the member.
     */
    UPDATE_MEMBER_SAVED_SEARCH_NAME: "TRELLO_UPDATE_MEMBER_SAVED_SEARCH_NAME",
    /**
     * Updates the position of a specified saved search for a trello member; other attributes of the saved search or member remain unchanged.
     */
    UPDATE_MEMBER_SAVED_SEARCH_POS: "TRELLO_UPDATE_MEMBER_SAVED_SEARCH_POS",
    /**
     * Updates the query string of an existing saved search for a trello member.
     */
    UPDATE_MEMBER_SAVED_SEARCH_QUERY: "TRELLO_UPDATE_MEMBER_SAVED_SEARCH_QUERY",
    /**
     * Updates a trello member's preference for the frequency of email summary notifications; this setting affects only summary notifications.
     */
    UPDATE_MEMBER_SUMMARY_INTERVAL: "TRELLO_UPDATE_MEMBER_SUMMARY_INTERVAL",
    /**
     * Updates a specific existing custom board background for a trello member.
     */
    UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS: "TRELLO_UPDATE_MEMBER_S_CUSTOM_BOARD_BACKGROUNDS",
    /**
     * Updates only the 'unread' status of a specific trello notification.
     */
    UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION: "TRELLO_UPDATE_NOTIFICATIONS_BY_ID_NOTIFICATION",
    /**
     * Marks an existing and accessible trello notification as read or unread.
     */
    UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION: "TRELLO_UPDATE_NOTIFICATIONS_UNREAD_BY_ID_NOTIFICATION",
    /**
     * Updates various attributes of an existing trello organization, identified by `idorg`.
     */
    UPDATE_ORGANIZATIONS_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_BY_ID_ORG",
    /**
     * Updates or clears the description for an existing trello organization, identified by its id or name, to a new string up to 16384 characters.
     */
    UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_DESC_BY_ID_ORG",
    /**
     * Updates the display name of a trello organization, identifiable by its current id or name (`idorg`), to the new `value`; other attributes remain unaffected.
     */
    UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_DISPLAY_NAME_BY_ID_ORG",
    /**
     * Adds/updates a member in a specified trello organization (`idorg`); `email` and `type` are api-required, `fullname` is needed if `email` is new to trello.
     */
    UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG",
    /**
     * Updates a member's details (email, full name, or type) in a trello organization, applying changes only to the fields provided.
     */
    UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER: "TRELLO_UPDATE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER",
    /**
     * Updates the unique programmatic identifier (used in urls and api interactions) for an existing trello organization; this is an irreversible operation, effective immediately, and only affects this identifier.
     */
    UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_NAME_BY_ID_ORG",
    /**
     * Updates the google apps integration version preference for a specified trello organization, to manage compatibility or features related to google workspace services.
     */
    UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_PREFS_GOOGLE_APPS_VERSION_BY_ID_ORG",
    /**
     * Modifies a trello organization's invitation policy using an email, domain, or keyword rule, affecting only future invites, not existing members.
     */
    UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG",
    /**
     * Updates a trello organization's `permissionlevel` preference, determining if it's members-only or link-accessible, and affecting new board default visibility.
     */
    UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_PREFS_PERMISSION_LEVEL_BY_ID_ORG",
    /**
     * Updates the website url for a specified trello organization.
     */
    UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG: "TRELLO_UPDATE_ORGANIZATIONS_WEBSITE_BY_ID_ORG",
    /**
     * Updates or removes the google workspace domain associated with a trello organization, often to configure features like sso or automatic user provisioning.
     */
    UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS: "TRELLO_UPDATE_ORG_ASSOCIATED_DOMAIN_PREFS",
    /**
     * Updates the preference controlling who can set board visibility to 'organization-visible' within an existing trello organization.
     */
    UPDATE_ORG_BOARD_VISIBILITY: "TRELLO_UPDATE_ORG_BOARD_VISIBILITY",
    /**
     * Updates the 'externalmembersdisabled' preference for a trello organization to control whether non-members can be added to its boards.
     */
    UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS: "TRELLO_UPDATE_ORG_EXTERNAL_MEMBERS_ACCESS",
    /**
     * Updates a trello organization member's type to 'admin', 'normal', or 'observer', using the organization and membership ids.
     */
    UPDATE_ORG_MEMBERSHIP: "TRELLO_UPDATE_ORG_MEMBERSHIP",
    /**
     * Updates a member's deactivation status in an organization; 'true' deactivates (suspends access temporarily), 'false' reactivates.
     */
    UPDATE_ORG_MEMBER_DEACTIVATION: "TRELLO_UPDATE_ORG_MEMBER_DEACTIVATION",
    /**
     * Updates the organization's preference controlling who is permitted to change the visibility of its private boards; requires admin privileges for the organization.
     */
    UPDATE_ORG_PRIVATE_BOARD_VISIBILITY: "TRELLO_UPDATE_ORG_PRIVATE_BOARD_VISIBILITY",
    /**
     * Updates the restriction on who can set board visibility to public for a specified trello organization.
     */
    UPDATE_ORG_PUBLIC_BOARD_VISIBILITY: "TRELLO_UPDATE_ORG_PUBLIC_BOARD_VISIBILITY",
    /**
     * Updates a trello user session's viewed board id or status; call when user activity or board focus changes.
     */
    UPDATE_SESSIONS_BY_ID_SESSION: "TRELLO_UPDATE_SESSIONS_BY_ID_SESSION",
    /**
     * Updates the status of an existing trello session.
     */
    UPDATE_SESSIONS_STATUS_BY_ID_SESSION: "TRELLO_UPDATE_SESSIONS_STATUS_BY_ID_SESSION",
    /**
     * Updates an existing webhook's description, callback url, or monitored trello model id, using the api token in the path to identify the webhook; any new `idmodel` must be accessible by the token.
     */
    UPDATE_TOKENS_WEBHOOKS_BY_TOKEN: "TRELLO_UPDATE_TOKENS_WEBHOOKS_BY_TOKEN",
    /**
     * Updates an existing trello webhook's description, active status, callback url, or monitored model id; requires the webhook id (not in request body) to be specified, typically via url path.
     */
    UPDATE_WEBHOOKS: "TRELLO_UPDATE_WEBHOOKS",
    /**
     * Updates the active status ('true' or 'false') of an existing trello webhook specified by `idwebhook`, without affecting other properties.
     */
    UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK: "TRELLO_UPDATE_WEBHOOKS_ACTIVE_BY_ID_WEBHOOK",
    /**
     * Updates an existing trello webhook's configuration, avoiding the need to delete and recreate it for modifications.
     */
    UPDATE_WEBHOOKS_BY_ID_WEBHOOK: "TRELLO_UPDATE_WEBHOOKS_BY_ID_WEBHOOK",
    /**
     * Updates the callback url for a specific trello webhook; other webhook attributes remain unchanged.
     */
    UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK: "TRELLO_UPDATE_WEBHOOKS_CALLBACK_URLBY_ID_WEBHOOK",
    /**
     * Updates the description of an existing trello webhook; an empty string for the new description removes the current one.
     */
    UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK: "TRELLO_UPDATE_WEBHOOKS_DESCRIPTION_BY_ID_WEBHOOK",
    /**
     * Updates the `idmodel` (the monitored trello entity like a board, list, or card) for an active webhook `idwebhook` to the new model id `value`; other webhook properties are unaffected.
     */
    UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK: "TRELLO_UPDATE_WEBHOOKS_ID_MODEL_BY_ID_WEBHOOK",
  },
  triggerTypes: {
    /**
     * Triggered when a card is archived in the specified board
     */
    ARCHIVED_CARD_TRIGGER: "TRELLO_ARCHIVED_CARD_TRIGGER",
    /**
     * Triggered when there is activity in Trello.
     */
    NEW_ACTIVITY_TRIGGER: "TRELLO_NEW_ACTIVITY_TRIGGER",
    /**
     * Triggered when a board is created in the specified workspace
     */
    NEW_BOARD_TRIGGER: "TRELLO_NEW_BOARD_TRIGGER",
    /**
     * Triggered when a card is created in the specified board
     */
    NEW_CARD_TRIGGER: "TRELLO_NEW_CARD_TRIGGER",
    /**
     * Triggered when a specific card is updated
     */
    UPDATED_CARD_TRIGGER: "TRELLO_UPDATED_CARD_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "TRELLO".
 */
export type TRELLO_TRIGGER_PAYLOADS = {
  ARCHIVED_CARD_TRIGGER: TRELLO_ARCHIVED_CARD_TRIGGER_PAYLOAD
  NEW_ACTIVITY_TRIGGER: TRELLO_NEW_ACTIVITY_TRIGGER_PAYLOAD
  NEW_BOARD_TRIGGER: TRELLO_NEW_BOARD_TRIGGER_PAYLOAD
  NEW_CARD_TRIGGER: TRELLO_NEW_CARD_TRIGGER_PAYLOAD
  UPDATED_CARD_TRIGGER: TRELLO_UPDATED_CARD_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "TRELLO".
 */
export type TRELLO_TRIGGER_EVENTS = {
  ARCHIVED_CARD_TRIGGER: TriggerEvent<TRELLO_ARCHIVED_CARD_TRIGGER_PAYLOAD>
  NEW_ACTIVITY_TRIGGER: TriggerEvent<TRELLO_NEW_ACTIVITY_TRIGGER_PAYLOAD>
  NEW_BOARD_TRIGGER: TriggerEvent<TRELLO_NEW_BOARD_TRIGGER_PAYLOAD>
  NEW_CARD_TRIGGER: TriggerEvent<TRELLO_NEW_CARD_TRIGGER_PAYLOAD>
  UPDATED_CARD_TRIGGER: TriggerEvent<TRELLO_UPDATED_CARD_TRIGGER_PAYLOAD>
}
