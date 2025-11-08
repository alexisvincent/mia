// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INTERCOM's INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT tool input.
 */
type INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT_INPUT = {
  /**
   * Consent Type
   * @description The consent_type of a subscription, opt_out or opt_in.
   */
  consent_type?: string;
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
  /**
   * Id
   * @description The unique identifier for the subscription which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT tool output.
 */
type INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_ADD_TAG_TO_A_CONTACT tool input.
 */
type INTERCOM_ADD_TAG_TO_A_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
  /**
   * Id
   * @description The unique identifier for the tag which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_ADD_TAG_TO_A_CONTACT tool output.
 */
type INTERCOM_ADD_TAG_TO_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_ASSIGN_CONVERSATION tool input.
 */
type INTERCOM_ASSIGN_CONVERSATION_INPUT = {
  /**
   * Admin Id
   * @description ID of the admin to assign the conversation to. Either admin_id or team_id must be provided
   * @default null
   */
  admin_id: string | null;
  /**
   * Assignee Id
   * @description ID of the admin making the assignment (who is performing this action)
   * @default null
   */
  assignee_id: string | null;
  /**
   * Conversation Id
   * @description The ID of the conversation to assign
   */
  conversation_id?: string;
  /**
   * Team Id
   * @description ID of the team to assign the conversation to. Either admin_id or team_id must be provided
   * @default null
   */
  team_id: string | null;
};

/**
 * Type of INTERCOM's INTERCOM_ASSIGN_CONVERSATION tool output.
 */
type INTERCOM_ASSIGN_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversation
       * @description The updated conversation object
       */
      conversation: {
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
 * Type of INTERCOM's INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY tool input.
 */
type INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY_INPUT = {
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY tool output.
 */
type INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_CLOSE_CONVERSATION tool input.
 */
type INTERCOM_CLOSE_CONVERSATION_INPUT = {
  /**
   * Admin Id
   * @description ID of the admin closing the conversation
   */
  admin_id?: string;
  /**
   * Body
   * @description Optional message to send when closing the conversation
   * @default null
   */
  body: string | null;
  /**
   * Conversation Id
   * @description The ID of the conversation to close
   */
  conversation_id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_CLOSE_CONVERSATION tool output.
 */
type INTERCOM_CLOSE_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversation
       * @description The updated conversation object
       */
      conversation: {
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
 * Type of INTERCOM's INTERCOM_CREATE_AN_ARTICLE tool input.
 */
type INTERCOM_CREATE_AN_ARTICLE_INPUT = {
  /**
   * Author Id
   * @description The id of the author of the article. For multilingual articles, this will be the id of the author of the default language"s content. Must be a teammate on the help center"s workspace.
   */
  author_id?: number;
  /**
   * Body
   * @description The content of the article. For multilingual articles, this will be the body of the default language"s content.
   */
  body?: string;
  /**
   * Description
   * @description The description of the article. For multilingual articles, this will be the description of the default language"s content.
   */
  description?: string;
  /**
   * Parent Id
   * @description The id of the article"s parent collection or section. An article without this field stands alone.
   */
  parent_id?: number;
  /**
   * Parent Type
   * @description The type of parent, which can either be a `collection` or `section`.
   */
  parent_type?: string;
  /**
   * State
   * @description Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language"s content.
   * @enum {string}
   */
  state?: "published" | "draft";
  /**
   * Title
   * @description The title of the article.For multilingual articles, this will be the title of the default language"s content.
   */
  title?: string;
  /**
   * Translated  Content  Ar  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ar__author__id?: number;
  /**
   * Translated  Content  Ar  Body
   * @description The body of the article.
   */
  translated__content__ar__body?: string;
  /**
   * Translated  Content  Ar  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ar__created__at?: number;
  /**
   * Translated  Content  Ar  Description
   * @description The description of the article.
   */
  translated__content__ar__description?: string;
  /**
   * Translated  Content  Ar  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ar__state?: "published" | "draft";
  /**
   * Translated  Content  Ar  Title
   * @description The title of the article.
   */
  translated__content__ar__title?: string;
  /**
   * Translated  Content  Ar  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ar__type?: "None" | "article_content";
  /**
   * Translated  Content  Ar  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ar__updated__at?: number;
  /**
   * Translated  Content  Ar  Url
   * @description The URL of the article.
   */
  translated__content__ar__url?: string;
  /**
   * Translated  Content  Bg  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__bg__author__id?: number;
  /**
   * Translated  Content  Bg  Body
   * @description The body of the article.
   */
  translated__content__bg__body?: string;
  /**
   * Translated  Content  Bg  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__bg__created__at?: number;
  /**
   * Translated  Content  Bg  Description
   * @description The description of the article.
   */
  translated__content__bg__description?: string;
  /**
   * Translated  Content  Bg  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__bg__state?: "published" | "draft";
  /**
   * Translated  Content  Bg  Title
   * @description The title of the article.
   */
  translated__content__bg__title?: string;
  /**
   * Translated  Content  Bg  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__bg__type?: "None" | "article_content";
  /**
   * Translated  Content  Bg  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__bg__updated__at?: number;
  /**
   * Translated  Content  Bg  Url
   * @description The URL of the article.
   */
  translated__content__bg__url?: string;
  /**
   * Translated  Content  Bs  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__bs__author__id?: number;
  /**
   * Translated  Content  Bs  Body
   * @description The body of the article.
   */
  translated__content__bs__body?: string;
  /**
   * Translated  Content  Bs  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__bs__created__at?: number;
  /**
   * Translated  Content  Bs  Description
   * @description The description of the article.
   */
  translated__content__bs__description?: string;
  /**
   * Translated  Content  Bs  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__bs__state?: "published" | "draft";
  /**
   * Translated  Content  Bs  Title
   * @description The title of the article.
   */
  translated__content__bs__title?: string;
  /**
   * Translated  Content  Bs  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__bs__type?: "None" | "article_content";
  /**
   * Translated  Content  Bs  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__bs__updated__at?: number;
  /**
   * Translated  Content  Bs  Url
   * @description The URL of the article.
   */
  translated__content__bs__url?: string;
  /**
   * Translated  Content  Ca  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ca__author__id?: number;
  /**
   * Translated  Content  Ca  Body
   * @description The body of the article.
   */
  translated__content__ca__body?: string;
  /**
   * Translated  Content  Ca  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ca__created__at?: number;
  /**
   * Translated  Content  Ca  Description
   * @description The description of the article.
   */
  translated__content__ca__description?: string;
  /**
   * Translated  Content  Ca  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ca__state?: "published" | "draft";
  /**
   * Translated  Content  Ca  Title
   * @description The title of the article.
   */
  translated__content__ca__title?: string;
  /**
   * Translated  Content  Ca  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ca__type?: "None" | "article_content";
  /**
   * Translated  Content  Ca  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ca__updated__at?: number;
  /**
   * Translated  Content  Ca  Url
   * @description The URL of the article.
   */
  translated__content__ca__url?: string;
  /**
   * Translated  Content  Cs  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__cs__author__id?: number;
  /**
   * Translated  Content  Cs  Body
   * @description The body of the article.
   */
  translated__content__cs__body?: string;
  /**
   * Translated  Content  Cs  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__cs__created__at?: number;
  /**
   * Translated  Content  Cs  Description
   * @description The description of the article.
   */
  translated__content__cs__description?: string;
  /**
   * Translated  Content  Cs  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__cs__state?: "published" | "draft";
  /**
   * Translated  Content  Cs  Title
   * @description The title of the article.
   */
  translated__content__cs__title?: string;
  /**
   * Translated  Content  Cs  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__cs__type?: "None" | "article_content";
  /**
   * Translated  Content  Cs  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__cs__updated__at?: number;
  /**
   * Translated  Content  Cs  Url
   * @description The URL of the article.
   */
  translated__content__cs__url?: string;
  /**
   * Translated  Content  Da  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__da__author__id?: number;
  /**
   * Translated  Content  Da  Body
   * @description The body of the article.
   */
  translated__content__da__body?: string;
  /**
   * Translated  Content  Da  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__da__created__at?: number;
  /**
   * Translated  Content  Da  Description
   * @description The description of the article.
   */
  translated__content__da__description?: string;
  /**
   * Translated  Content  Da  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__da__state?: "published" | "draft";
  /**
   * Translated  Content  Da  Title
   * @description The title of the article.
   */
  translated__content__da__title?: string;
  /**
   * Translated  Content  Da  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__da__type?: "None" | "article_content";
  /**
   * Translated  Content  Da  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__da__updated__at?: number;
  /**
   * Translated  Content  Da  Url
   * @description The URL of the article.
   */
  translated__content__da__url?: string;
  /**
   * Translated  Content  De  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__de__author__id?: number;
  /**
   * Translated  Content  De  Body
   * @description The body of the article.
   */
  translated__content__de__body?: string;
  /**
   * Translated  Content  De  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__de__created__at?: number;
  /**
   * Translated  Content  De  Description
   * @description The description of the article.
   */
  translated__content__de__description?: string;
  /**
   * Translated  Content  De  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__de__state?: "published" | "draft";
  /**
   * Translated  Content  De  Title
   * @description The title of the article.
   */
  translated__content__de__title?: string;
  /**
   * Translated  Content  De  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__de__type?: "None" | "article_content";
  /**
   * Translated  Content  De  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__de__updated__at?: number;
  /**
   * Translated  Content  De  Url
   * @description The URL of the article.
   */
  translated__content__de__url?: string;
  /**
   * Translated  Content  El  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__el__author__id?: number;
  /**
   * Translated  Content  El  Body
   * @description The body of the article.
   */
  translated__content__el__body?: string;
  /**
   * Translated  Content  El  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__el__created__at?: number;
  /**
   * Translated  Content  El  Description
   * @description The description of the article.
   */
  translated__content__el__description?: string;
  /**
   * Translated  Content  El  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__el__state?: "published" | "draft";
  /**
   * Translated  Content  El  Title
   * @description The title of the article.
   */
  translated__content__el__title?: string;
  /**
   * Translated  Content  El  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__el__type?: "None" | "article_content";
  /**
   * Translated  Content  El  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__el__updated__at?: number;
  /**
   * Translated  Content  El  Url
   * @description The URL of the article.
   */
  translated__content__el__url?: string;
  /**
   * Translated  Content  En  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__en__author__id?: number;
  /**
   * Translated  Content  En  Body
   * @description The body of the article.
   */
  translated__content__en__body?: string;
  /**
   * Translated  Content  En  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__en__created__at?: number;
  /**
   * Translated  Content  En  Description
   * @description The description of the article.
   */
  translated__content__en__description?: string;
  /**
   * Translated  Content  En  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__en__state?: "published" | "draft";
  /**
   * Translated  Content  En  Title
   * @description The title of the article.
   */
  translated__content__en__title?: string;
  /**
   * Translated  Content  En  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__en__type?: "None" | "article_content";
  /**
   * Translated  Content  En  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__en__updated__at?: number;
  /**
   * Translated  Content  En  Url
   * @description The URL of the article.
   */
  translated__content__en__url?: string;
  /**
   * Translated  Content  Es  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__es__author__id?: number;
  /**
   * Translated  Content  Es  Body
   * @description The body of the article.
   */
  translated__content__es__body?: string;
  /**
   * Translated  Content  Es  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__es__created__at?: number;
  /**
   * Translated  Content  Es  Description
   * @description The description of the article.
   */
  translated__content__es__description?: string;
  /**
   * Translated  Content  Es  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__es__state?: "published" | "draft";
  /**
   * Translated  Content  Es  Title
   * @description The title of the article.
   */
  translated__content__es__title?: string;
  /**
   * Translated  Content  Es  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__es__type?: "None" | "article_content";
  /**
   * Translated  Content  Es  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__es__updated__at?: number;
  /**
   * Translated  Content  Es  Url
   * @description The URL of the article.
   */
  translated__content__es__url?: string;
  /**
   * Translated  Content  Et  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__et__author__id?: number;
  /**
   * Translated  Content  Et  Body
   * @description The body of the article.
   */
  translated__content__et__body?: string;
  /**
   * Translated  Content  Et  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__et__created__at?: number;
  /**
   * Translated  Content  Et  Description
   * @description The description of the article.
   */
  translated__content__et__description?: string;
  /**
   * Translated  Content  Et  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__et__state?: "published" | "draft";
  /**
   * Translated  Content  Et  Title
   * @description The title of the article.
   */
  translated__content__et__title?: string;
  /**
   * Translated  Content  Et  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__et__type?: "None" | "article_content";
  /**
   * Translated  Content  Et  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__et__updated__at?: number;
  /**
   * Translated  Content  Et  Url
   * @description The URL of the article.
   */
  translated__content__et__url?: string;
  /**
   * Translated  Content  Fi  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__fi__author__id?: number;
  /**
   * Translated  Content  Fi  Body
   * @description The body of the article.
   */
  translated__content__fi__body?: string;
  /**
   * Translated  Content  Fi  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__fi__created__at?: number;
  /**
   * Translated  Content  Fi  Description
   * @description The description of the article.
   */
  translated__content__fi__description?: string;
  /**
   * Translated  Content  Fi  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__fi__state?: "published" | "draft";
  /**
   * Translated  Content  Fi  Title
   * @description The title of the article.
   */
  translated__content__fi__title?: string;
  /**
   * Translated  Content  Fi  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__fi__type?: "None" | "article_content";
  /**
   * Translated  Content  Fi  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__fi__updated__at?: number;
  /**
   * Translated  Content  Fi  Url
   * @description The URL of the article.
   */
  translated__content__fi__url?: string;
  /**
   * Translated  Content  Fr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__fr__author__id?: number;
  /**
   * Translated  Content  Fr  Body
   * @description The body of the article.
   */
  translated__content__fr__body?: string;
  /**
   * Translated  Content  Fr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__fr__created__at?: number;
  /**
   * Translated  Content  Fr  Description
   * @description The description of the article.
   */
  translated__content__fr__description?: string;
  /**
   * Translated  Content  Fr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__fr__state?: "published" | "draft";
  /**
   * Translated  Content  Fr  Title
   * @description The title of the article.
   */
  translated__content__fr__title?: string;
  /**
   * Translated  Content  Fr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__fr__type?: "None" | "article_content";
  /**
   * Translated  Content  Fr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__fr__updated__at?: number;
  /**
   * Translated  Content  Fr  Url
   * @description The URL of the article.
   */
  translated__content__fr__url?: string;
  /**
   * Translated  Content  He  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__he__author__id?: number;
  /**
   * Translated  Content  He  Body
   * @description The body of the article.
   */
  translated__content__he__body?: string;
  /**
   * Translated  Content  He  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__he__created__at?: number;
  /**
   * Translated  Content  He  Description
   * @description The description of the article.
   */
  translated__content__he__description?: string;
  /**
   * Translated  Content  He  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__he__state?: "published" | "draft";
  /**
   * Translated  Content  He  Title
   * @description The title of the article.
   */
  translated__content__he__title?: string;
  /**
   * Translated  Content  He  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__he__type?: "None" | "article_content";
  /**
   * Translated  Content  He  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__he__updated__at?: number;
  /**
   * Translated  Content  He  Url
   * @description The URL of the article.
   */
  translated__content__he__url?: string;
  /**
   * Translated  Content  Hr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__hr__author__id?: number;
  /**
   * Translated  Content  Hr  Body
   * @description The body of the article.
   */
  translated__content__hr__body?: string;
  /**
   * Translated  Content  Hr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__hr__created__at?: number;
  /**
   * Translated  Content  Hr  Description
   * @description The description of the article.
   */
  translated__content__hr__description?: string;
  /**
   * Translated  Content  Hr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__hr__state?: "published" | "draft";
  /**
   * Translated  Content  Hr  Title
   * @description The title of the article.
   */
  translated__content__hr__title?: string;
  /**
   * Translated  Content  Hr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__hr__type?: "None" | "article_content";
  /**
   * Translated  Content  Hr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__hr__updated__at?: number;
  /**
   * Translated  Content  Hr  Url
   * @description The URL of the article.
   */
  translated__content__hr__url?: string;
  /**
   * Translated  Content  Hu  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__hu__author__id?: number;
  /**
   * Translated  Content  Hu  Body
   * @description The body of the article.
   */
  translated__content__hu__body?: string;
  /**
   * Translated  Content  Hu  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__hu__created__at?: number;
  /**
   * Translated  Content  Hu  Description
   * @description The description of the article.
   */
  translated__content__hu__description?: string;
  /**
   * Translated  Content  Hu  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__hu__state?: "published" | "draft";
  /**
   * Translated  Content  Hu  Title
   * @description The title of the article.
   */
  translated__content__hu__title?: string;
  /**
   * Translated  Content  Hu  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__hu__type?: "None" | "article_content";
  /**
   * Translated  Content  Hu  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__hu__updated__at?: number;
  /**
   * Translated  Content  Hu  Url
   * @description The URL of the article.
   */
  translated__content__hu__url?: string;
  /**
   * Translated  Content  Id  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__id__author__id?: number;
  /**
   * Translated  Content  Id  Body
   * @description The body of the article.
   */
  translated__content__id__body?: string;
  /**
   * Translated  Content  Id  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__id__created__at?: number;
  /**
   * Translated  Content  Id  Description
   * @description The description of the article.
   */
  translated__content__id__description?: string;
  /**
   * Translated  Content  Id  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__id__state?: "published" | "draft";
  /**
   * Translated  Content  Id  Title
   * @description The title of the article.
   */
  translated__content__id__title?: string;
  /**
   * Translated  Content  Id  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__id__type?: "None" | "article_content";
  /**
   * Translated  Content  Id  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__id__updated__at?: number;
  /**
   * Translated  Content  Id  Url
   * @description The URL of the article.
   */
  translated__content__id__url?: string;
  /**
   * Translated  Content  It  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__it__author__id?: number;
  /**
   * Translated  Content  It  Body
   * @description The body of the article.
   */
  translated__content__it__body?: string;
  /**
   * Translated  Content  It  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__it__created__at?: number;
  /**
   * Translated  Content  It  Description
   * @description The description of the article.
   */
  translated__content__it__description?: string;
  /**
   * Translated  Content  It  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__it__state?: "published" | "draft";
  /**
   * Translated  Content  It  Title
   * @description The title of the article.
   */
  translated__content__it__title?: string;
  /**
   * Translated  Content  It  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__it__type?: "None" | "article_content";
  /**
   * Translated  Content  It  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__it__updated__at?: number;
  /**
   * Translated  Content  It  Url
   * @description The URL of the article.
   */
  translated__content__it__url?: string;
  /**
   * Translated  Content  Ja  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ja__author__id?: number;
  /**
   * Translated  Content  Ja  Body
   * @description The body of the article.
   */
  translated__content__ja__body?: string;
  /**
   * Translated  Content  Ja  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ja__created__at?: number;
  /**
   * Translated  Content  Ja  Description
   * @description The description of the article.
   */
  translated__content__ja__description?: string;
  /**
   * Translated  Content  Ja  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ja__state?: "published" | "draft";
  /**
   * Translated  Content  Ja  Title
   * @description The title of the article.
   */
  translated__content__ja__title?: string;
  /**
   * Translated  Content  Ja  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ja__type?: "None" | "article_content";
  /**
   * Translated  Content  Ja  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ja__updated__at?: number;
  /**
   * Translated  Content  Ja  Url
   * @description The URL of the article.
   */
  translated__content__ja__url?: string;
  /**
   * Translated  Content  Ko  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ko__author__id?: number;
  /**
   * Translated  Content  Ko  Body
   * @description The body of the article.
   */
  translated__content__ko__body?: string;
  /**
   * Translated  Content  Ko  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ko__created__at?: number;
  /**
   * Translated  Content  Ko  Description
   * @description The description of the article.
   */
  translated__content__ko__description?: string;
  /**
   * Translated  Content  Ko  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ko__state?: "published" | "draft";
  /**
   * Translated  Content  Ko  Title
   * @description The title of the article.
   */
  translated__content__ko__title?: string;
  /**
   * Translated  Content  Ko  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ko__type?: "None" | "article_content";
  /**
   * Translated  Content  Ko  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ko__updated__at?: number;
  /**
   * Translated  Content  Ko  Url
   * @description The URL of the article.
   */
  translated__content__ko__url?: string;
  /**
   * Translated  Content  Lt  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__lt__author__id?: number;
  /**
   * Translated  Content  Lt  Body
   * @description The body of the article.
   */
  translated__content__lt__body?: string;
  /**
   * Translated  Content  Lt  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__lt__created__at?: number;
  /**
   * Translated  Content  Lt  Description
   * @description The description of the article.
   */
  translated__content__lt__description?: string;
  /**
   * Translated  Content  Lt  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__lt__state?: "published" | "draft";
  /**
   * Translated  Content  Lt  Title
   * @description The title of the article.
   */
  translated__content__lt__title?: string;
  /**
   * Translated  Content  Lt  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__lt__type?: "None" | "article_content";
  /**
   * Translated  Content  Lt  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__lt__updated__at?: number;
  /**
   * Translated  Content  Lt  Url
   * @description The URL of the article.
   */
  translated__content__lt__url?: string;
  /**
   * Translated  Content  Lv  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__lv__author__id?: number;
  /**
   * Translated  Content  Lv  Body
   * @description The body of the article.
   */
  translated__content__lv__body?: string;
  /**
   * Translated  Content  Lv  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__lv__created__at?: number;
  /**
   * Translated  Content  Lv  Description
   * @description The description of the article.
   */
  translated__content__lv__description?: string;
  /**
   * Translated  Content  Lv  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__lv__state?: "published" | "draft";
  /**
   * Translated  Content  Lv  Title
   * @description The title of the article.
   */
  translated__content__lv__title?: string;
  /**
   * Translated  Content  Lv  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__lv__type?: "None" | "article_content";
  /**
   * Translated  Content  Lv  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__lv__updated__at?: number;
  /**
   * Translated  Content  Lv  Url
   * @description The URL of the article.
   */
  translated__content__lv__url?: string;
  /**
   * Translated  Content  Mn  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__mn__author__id?: number;
  /**
   * Translated  Content  Mn  Body
   * @description The body of the article.
   */
  translated__content__mn__body?: string;
  /**
   * Translated  Content  Mn  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__mn__created__at?: number;
  /**
   * Translated  Content  Mn  Description
   * @description The description of the article.
   */
  translated__content__mn__description?: string;
  /**
   * Translated  Content  Mn  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__mn__state?: "published" | "draft";
  /**
   * Translated  Content  Mn  Title
   * @description The title of the article.
   */
  translated__content__mn__title?: string;
  /**
   * Translated  Content  Mn  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__mn__type?: "None" | "article_content";
  /**
   * Translated  Content  Mn  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__mn__updated__at?: number;
  /**
   * Translated  Content  Mn  Url
   * @description The URL of the article.
   */
  translated__content__mn__url?: string;
  /**
   * Translated  Content  Nb  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__nb__author__id?: number;
  /**
   * Translated  Content  Nb  Body
   * @description The body of the article.
   */
  translated__content__nb__body?: string;
  /**
   * Translated  Content  Nb  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__nb__created__at?: number;
  /**
   * Translated  Content  Nb  Description
   * @description The description of the article.
   */
  translated__content__nb__description?: string;
  /**
   * Translated  Content  Nb  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__nb__state?: "published" | "draft";
  /**
   * Translated  Content  Nb  Title
   * @description The title of the article.
   */
  translated__content__nb__title?: string;
  /**
   * Translated  Content  Nb  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__nb__type?: "None" | "article_content";
  /**
   * Translated  Content  Nb  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__nb__updated__at?: number;
  /**
   * Translated  Content  Nb  Url
   * @description The URL of the article.
   */
  translated__content__nb__url?: string;
  /**
   * Translated  Content  Nl  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__nl__author__id?: number;
  /**
   * Translated  Content  Nl  Body
   * @description The body of the article.
   */
  translated__content__nl__body?: string;
  /**
   * Translated  Content  Nl  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__nl__created__at?: number;
  /**
   * Translated  Content  Nl  Description
   * @description The description of the article.
   */
  translated__content__nl__description?: string;
  /**
   * Translated  Content  Nl  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__nl__state?: "published" | "draft";
  /**
   * Translated  Content  Nl  Title
   * @description The title of the article.
   */
  translated__content__nl__title?: string;
  /**
   * Translated  Content  Nl  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__nl__type?: "None" | "article_content";
  /**
   * Translated  Content  Nl  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__nl__updated__at?: number;
  /**
   * Translated  Content  Nl  Url
   * @description The URL of the article.
   */
  translated__content__nl__url?: string;
  /**
   * Translated  Content  Pl  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__pl__author__id?: number;
  /**
   * Translated  Content  Pl  Body
   * @description The body of the article.
   */
  translated__content__pl__body?: string;
  /**
   * Translated  Content  Pl  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__pl__created__at?: number;
  /**
   * Translated  Content  Pl  Description
   * @description The description of the article.
   */
  translated__content__pl__description?: string;
  /**
   * Translated  Content  Pl  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__pl__state?: "published" | "draft";
  /**
   * Translated  Content  Pl  Title
   * @description The title of the article.
   */
  translated__content__pl__title?: string;
  /**
   * Translated  Content  Pl  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__pl__type?: "None" | "article_content";
  /**
   * Translated  Content  Pl  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__pl__updated__at?: number;
  /**
   * Translated  Content  Pl  Url
   * @description The URL of the article.
   */
  translated__content__pl__url?: string;
  /**
   * Translated  Content  Pt  Br  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__pt__BR__author__id?: number;
  /**
   * Translated  Content  Pt  Br  Body
   * @description The body of the article.
   */
  translated__content__pt__BR__body?: string;
  /**
   * Translated  Content  Pt  Br  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__pt__BR__created__at?: number;
  /**
   * Translated  Content  Pt  Br  Description
   * @description The description of the article.
   */
  translated__content__pt__BR__description?: string;
  /**
   * Translated  Content  Pt  Br  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__pt__BR__state?: "published" | "draft";
  /**
   * Translated  Content  Pt  Br  Title
   * @description The title of the article.
   */
  translated__content__pt__BR__title?: string;
  /**
   * Translated  Content  Pt  Br  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__pt__BR__type?: "None" | "article_content";
  /**
   * Translated  Content  Pt  Br  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__pt__BR__updated__at?: number;
  /**
   * Translated  Content  Pt  Br  Url
   * @description The URL of the article.
   */
  translated__content__pt__BR__url?: string;
  /**
   * Translated  Content  Pt  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__pt__author__id?: number;
  /**
   * Translated  Content  Pt  Body
   * @description The body of the article.
   */
  translated__content__pt__body?: string;
  /**
   * Translated  Content  Pt  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__pt__created__at?: number;
  /**
   * Translated  Content  Pt  Description
   * @description The description of the article.
   */
  translated__content__pt__description?: string;
  /**
   * Translated  Content  Pt  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__pt__state?: "published" | "draft";
  /**
   * Translated  Content  Pt  Title
   * @description The title of the article.
   */
  translated__content__pt__title?: string;
  /**
   * Translated  Content  Pt  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__pt__type?: "None" | "article_content";
  /**
   * Translated  Content  Pt  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__pt__updated__at?: number;
  /**
   * Translated  Content  Pt  Url
   * @description The URL of the article.
   */
  translated__content__pt__url?: string;
  /**
   * Translated  Content  Ro  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ro__author__id?: number;
  /**
   * Translated  Content  Ro  Body
   * @description The body of the article.
   */
  translated__content__ro__body?: string;
  /**
   * Translated  Content  Ro  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ro__created__at?: number;
  /**
   * Translated  Content  Ro  Description
   * @description The description of the article.
   */
  translated__content__ro__description?: string;
  /**
   * Translated  Content  Ro  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ro__state?: "published" | "draft";
  /**
   * Translated  Content  Ro  Title
   * @description The title of the article.
   */
  translated__content__ro__title?: string;
  /**
   * Translated  Content  Ro  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ro__type?: "None" | "article_content";
  /**
   * Translated  Content  Ro  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ro__updated__at?: number;
  /**
   * Translated  Content  Ro  Url
   * @description The URL of the article.
   */
  translated__content__ro__url?: string;
  /**
   * Translated  Content  Ru  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ru__author__id?: number;
  /**
   * Translated  Content  Ru  Body
   * @description The body of the article.
   */
  translated__content__ru__body?: string;
  /**
   * Translated  Content  Ru  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ru__created__at?: number;
  /**
   * Translated  Content  Ru  Description
   * @description The description of the article.
   */
  translated__content__ru__description?: string;
  /**
   * Translated  Content  Ru  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ru__state?: "published" | "draft";
  /**
   * Translated  Content  Ru  Title
   * @description The title of the article.
   */
  translated__content__ru__title?: string;
  /**
   * Translated  Content  Ru  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ru__type?: "None" | "article_content";
  /**
   * Translated  Content  Ru  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ru__updated__at?: number;
  /**
   * Translated  Content  Ru  Url
   * @description The URL of the article.
   */
  translated__content__ru__url?: string;
  /**
   * Translated  Content  Sl  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__sl__author__id?: number;
  /**
   * Translated  Content  Sl  Body
   * @description The body of the article.
   */
  translated__content__sl__body?: string;
  /**
   * Translated  Content  Sl  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__sl__created__at?: number;
  /**
   * Translated  Content  Sl  Description
   * @description The description of the article.
   */
  translated__content__sl__description?: string;
  /**
   * Translated  Content  Sl  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__sl__state?: "published" | "draft";
  /**
   * Translated  Content  Sl  Title
   * @description The title of the article.
   */
  translated__content__sl__title?: string;
  /**
   * Translated  Content  Sl  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__sl__type?: "None" | "article_content";
  /**
   * Translated  Content  Sl  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__sl__updated__at?: number;
  /**
   * Translated  Content  Sl  Url
   * @description The URL of the article.
   */
  translated__content__sl__url?: string;
  /**
   * Translated  Content  Sr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__sr__author__id?: number;
  /**
   * Translated  Content  Sr  Body
   * @description The body of the article.
   */
  translated__content__sr__body?: string;
  /**
   * Translated  Content  Sr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__sr__created__at?: number;
  /**
   * Translated  Content  Sr  Description
   * @description The description of the article.
   */
  translated__content__sr__description?: string;
  /**
   * Translated  Content  Sr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__sr__state?: "published" | "draft";
  /**
   * Translated  Content  Sr  Title
   * @description The title of the article.
   */
  translated__content__sr__title?: string;
  /**
   * Translated  Content  Sr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__sr__type?: "None" | "article_content";
  /**
   * Translated  Content  Sr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__sr__updated__at?: number;
  /**
   * Translated  Content  Sr  Url
   * @description The URL of the article.
   */
  translated__content__sr__url?: string;
  /**
   * Translated  Content  Sv  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__sv__author__id?: number;
  /**
   * Translated  Content  Sv  Body
   * @description The body of the article.
   */
  translated__content__sv__body?: string;
  /**
   * Translated  Content  Sv  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__sv__created__at?: number;
  /**
   * Translated  Content  Sv  Description
   * @description The description of the article.
   */
  translated__content__sv__description?: string;
  /**
   * Translated  Content  Sv  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__sv__state?: "published" | "draft";
  /**
   * Translated  Content  Sv  Title
   * @description The title of the article.
   */
  translated__content__sv__title?: string;
  /**
   * Translated  Content  Sv  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__sv__type?: "None" | "article_content";
  /**
   * Translated  Content  Sv  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__sv__updated__at?: number;
  /**
   * Translated  Content  Sv  Url
   * @description The URL of the article.
   */
  translated__content__sv__url?: string;
  /**
   * Translated  Content  Tr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__tr__author__id?: number;
  /**
   * Translated  Content  Tr  Body
   * @description The body of the article.
   */
  translated__content__tr__body?: string;
  /**
   * Translated  Content  Tr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__tr__created__at?: number;
  /**
   * Translated  Content  Tr  Description
   * @description The description of the article.
   */
  translated__content__tr__description?: string;
  /**
   * Translated  Content  Tr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__tr__state?: "published" | "draft";
  /**
   * Translated  Content  Tr  Title
   * @description The title of the article.
   */
  translated__content__tr__title?: string;
  /**
   * Translated  Content  Tr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__tr__type?: "None" | "article_content";
  /**
   * Translated  Content  Tr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__tr__updated__at?: number;
  /**
   * Translated  Content  Tr  Url
   * @description The URL of the article.
   */
  translated__content__tr__url?: string;
  /**
   * Translated  Content  Type
   * @description The type of object - article_translated_content.
   * @enum {string}
   */
  translated__content__type?: "None" | "article_translated_content";
  /**
   * Translated  Content  Vi  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__vi__author__id?: number;
  /**
   * Translated  Content  Vi  Body
   * @description The body of the article.
   */
  translated__content__vi__body?: string;
  /**
   * Translated  Content  Vi  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__vi__created__at?: number;
  /**
   * Translated  Content  Vi  Description
   * @description The description of the article.
   */
  translated__content__vi__description?: string;
  /**
   * Translated  Content  Vi  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__vi__state?: "published" | "draft";
  /**
   * Translated  Content  Vi  Title
   * @description The title of the article.
   */
  translated__content__vi__title?: string;
  /**
   * Translated  Content  Vi  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__vi__type?: "None" | "article_content";
  /**
   * Translated  Content  Vi  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__vi__updated__at?: number;
  /**
   * Translated  Content  Vi  Url
   * @description The URL of the article.
   */
  translated__content__vi__url?: string;
  /**
   * Translated  Content  Zh  Cn  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__zh__CN__author__id?: number;
  /**
   * Translated  Content  Zh  Cn  Body
   * @description The body of the article.
   */
  translated__content__zh__CN__body?: string;
  /**
   * Translated  Content  Zh  Cn  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__zh__CN__created__at?: number;
  /**
   * Translated  Content  Zh  Cn  Description
   * @description The description of the article.
   */
  translated__content__zh__CN__description?: string;
  /**
   * Translated  Content  Zh  Cn  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__zh__CN__state?: "published" | "draft";
  /**
   * Translated  Content  Zh  Cn  Title
   * @description The title of the article.
   */
  translated__content__zh__CN__title?: string;
  /**
   * Translated  Content  Zh  Cn  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__zh__CN__type?: "None" | "article_content";
  /**
   * Translated  Content  Zh  Cn  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__zh__CN__updated__at?: number;
  /**
   * Translated  Content  Zh  Cn  Url
   * @description The URL of the article.
   */
  translated__content__zh__CN__url?: string;
  /**
   * Translated  Content  Zh  Tw  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__zh__TW__author__id?: number;
  /**
   * Translated  Content  Zh  Tw  Body
   * @description The body of the article.
   */
  translated__content__zh__TW__body?: string;
  /**
   * Translated  Content  Zh  Tw  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__zh__TW__created__at?: number;
  /**
   * Translated  Content  Zh  Tw  Description
   * @description The description of the article.
   */
  translated__content__zh__TW__description?: string;
  /**
   * Translated  Content  Zh  Tw  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__zh__TW__state?: "published" | "draft";
  /**
   * Translated  Content  Zh  Tw  Title
   * @description The title of the article.
   */
  translated__content__zh__TW__title?: string;
  /**
   * Translated  Content  Zh  Tw  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__zh__TW__type?: "None" | "article_content";
  /**
   * Translated  Content  Zh  Tw  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__zh__TW__updated__at?: number;
  /**
   * Translated  Content  Zh  Tw  Url
   * @description The URL of the article.
   */
  translated__content__zh__TW__url?: string;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_AN_ARTICLE tool output.
 */
type INTERCOM_CREATE_AN_ARTICLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_A_COLLECTION tool input.
 */
type INTERCOM_CREATE_A_COLLECTION_INPUT = {
  /**
   * Description
   * @description The description of the collection. For multilingual collections, this will be the description of the default language"s content.
   */
  description?: string;
  /**
   * Help Center Id
   * @description The id of the help center where the collection will be created. If `null` then it will be created in the default help center.
   */
  help_center_id?: number;
  /**
   * Name
   * @description The name of the collection. For multilingual collections, this will be the name of the default language"s content.
   */
  name?: string;
  /**
   * Parent Id
   * @description The id of the parent collection. If `null` then it will be created as the first level collection.
   */
  parent_id?: string;
  /**
   * Translated  Content  Ar  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ar__description?: string;
  /**
   * Translated  Content  Ar  Name
   * @description The name of the collection or section.
   */
  translated__content__ar__name?: string;
  /**
   * Translated  Content  Ar  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ar__type?: "None" | "group_content";
  /**
   * Translated  Content  Bg  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__bg__description?: string;
  /**
   * Translated  Content  Bg  Name
   * @description The name of the collection or section.
   */
  translated__content__bg__name?: string;
  /**
   * Translated  Content  Bg  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__bg__type?: "None" | "group_content";
  /**
   * Translated  Content  Bs  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__bs__description?: string;
  /**
   * Translated  Content  Bs  Name
   * @description The name of the collection or section.
   */
  translated__content__bs__name?: string;
  /**
   * Translated  Content  Bs  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__bs__type?: "None" | "group_content";
  /**
   * Translated  Content  Ca  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ca__description?: string;
  /**
   * Translated  Content  Ca  Name
   * @description The name of the collection or section.
   */
  translated__content__ca__name?: string;
  /**
   * Translated  Content  Ca  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ca__type?: "None" | "group_content";
  /**
   * Translated  Content  Cs  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__cs__description?: string;
  /**
   * Translated  Content  Cs  Name
   * @description The name of the collection or section.
   */
  translated__content__cs__name?: string;
  /**
   * Translated  Content  Cs  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__cs__type?: "None" | "group_content";
  /**
   * Translated  Content  Da  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__da__description?: string;
  /**
   * Translated  Content  Da  Name
   * @description The name of the collection or section.
   */
  translated__content__da__name?: string;
  /**
   * Translated  Content  Da  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__da__type?: "None" | "group_content";
  /**
   * Translated  Content  De  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__de__description?: string;
  /**
   * Translated  Content  De  Name
   * @description The name of the collection or section.
   */
  translated__content__de__name?: string;
  /**
   * Translated  Content  De  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__de__type?: "None" | "group_content";
  /**
   * Translated  Content  El  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__el__description?: string;
  /**
   * Translated  Content  El  Name
   * @description The name of the collection or section.
   */
  translated__content__el__name?: string;
  /**
   * Translated  Content  El  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__el__type?: "None" | "group_content";
  /**
   * Translated  Content  En  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__en__description?: string;
  /**
   * Translated  Content  En  Name
   * @description The name of the collection or section.
   */
  translated__content__en__name?: string;
  /**
   * Translated  Content  En  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__en__type?: "None" | "group_content";
  /**
   * Translated  Content  Es  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__es__description?: string;
  /**
   * Translated  Content  Es  Name
   * @description The name of the collection or section.
   */
  translated__content__es__name?: string;
  /**
   * Translated  Content  Es  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__es__type?: "None" | "group_content";
  /**
   * Translated  Content  Et  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__et__description?: string;
  /**
   * Translated  Content  Et  Name
   * @description The name of the collection or section.
   */
  translated__content__et__name?: string;
  /**
   * Translated  Content  Et  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__et__type?: "None" | "group_content";
  /**
   * Translated  Content  Fi  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__fi__description?: string;
  /**
   * Translated  Content  Fi  Name
   * @description The name of the collection or section.
   */
  translated__content__fi__name?: string;
  /**
   * Translated  Content  Fi  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__fi__type?: "None" | "group_content";
  /**
   * Translated  Content  Fr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__fr__description?: string;
  /**
   * Translated  Content  Fr  Name
   * @description The name of the collection or section.
   */
  translated__content__fr__name?: string;
  /**
   * Translated  Content  Fr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__fr__type?: "None" | "group_content";
  /**
   * Translated  Content  He  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__he__description?: string;
  /**
   * Translated  Content  He  Name
   * @description The name of the collection or section.
   */
  translated__content__he__name?: string;
  /**
   * Translated  Content  He  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__he__type?: "None" | "group_content";
  /**
   * Translated  Content  Hr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__hr__description?: string;
  /**
   * Translated  Content  Hr  Name
   * @description The name of the collection or section.
   */
  translated__content__hr__name?: string;
  /**
   * Translated  Content  Hr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__hr__type?: "None" | "group_content";
  /**
   * Translated  Content  Hu  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__hu__description?: string;
  /**
   * Translated  Content  Hu  Name
   * @description The name of the collection or section.
   */
  translated__content__hu__name?: string;
  /**
   * Translated  Content  Hu  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__hu__type?: "None" | "group_content";
  /**
   * Translated  Content  Id  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__id__description?: string;
  /**
   * Translated  Content  Id  Name
   * @description The name of the collection or section.
   */
  translated__content__id__name?: string;
  /**
   * Translated  Content  Id  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__id__type?: "None" | "group_content";
  /**
   * Translated  Content  It  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__it__description?: string;
  /**
   * Translated  Content  It  Name
   * @description The name of the collection or section.
   */
  translated__content__it__name?: string;
  /**
   * Translated  Content  It  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__it__type?: "None" | "group_content";
  /**
   * Translated  Content  Ja  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ja__description?: string;
  /**
   * Translated  Content  Ja  Name
   * @description The name of the collection or section.
   */
  translated__content__ja__name?: string;
  /**
   * Translated  Content  Ja  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ja__type?: "None" | "group_content";
  /**
   * Translated  Content  Ko  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ko__description?: string;
  /**
   * Translated  Content  Ko  Name
   * @description The name of the collection or section.
   */
  translated__content__ko__name?: string;
  /**
   * Translated  Content  Ko  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ko__type?: "None" | "group_content";
  /**
   * Translated  Content  Lt  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__lt__description?: string;
  /**
   * Translated  Content  Lt  Name
   * @description The name of the collection or section.
   */
  translated__content__lt__name?: string;
  /**
   * Translated  Content  Lt  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__lt__type?: "None" | "group_content";
  /**
   * Translated  Content  Lv  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__lv__description?: string;
  /**
   * Translated  Content  Lv  Name
   * @description The name of the collection or section.
   */
  translated__content__lv__name?: string;
  /**
   * Translated  Content  Lv  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__lv__type?: "None" | "group_content";
  /**
   * Translated  Content  Mn  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__mn__description?: string;
  /**
   * Translated  Content  Mn  Name
   * @description The name of the collection or section.
   */
  translated__content__mn__name?: string;
  /**
   * Translated  Content  Mn  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__mn__type?: "None" | "group_content";
  /**
   * Translated  Content  Nb  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__nb__description?: string;
  /**
   * Translated  Content  Nb  Name
   * @description The name of the collection or section.
   */
  translated__content__nb__name?: string;
  /**
   * Translated  Content  Nb  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__nb__type?: "None" | "group_content";
  /**
   * Translated  Content  Nl  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__nl__description?: string;
  /**
   * Translated  Content  Nl  Name
   * @description The name of the collection or section.
   */
  translated__content__nl__name?: string;
  /**
   * Translated  Content  Nl  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__nl__type?: "None" | "group_content";
  /**
   * Translated  Content  Pl  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__pl__description?: string;
  /**
   * Translated  Content  Pl  Name
   * @description The name of the collection or section.
   */
  translated__content__pl__name?: string;
  /**
   * Translated  Content  Pl  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__pl__type?: "None" | "group_content";
  /**
   * Translated  Content  Pt  Br  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__pt__BR__description?: string;
  /**
   * Translated  Content  Pt  Br  Name
   * @description The name of the collection or section.
   */
  translated__content__pt__BR__name?: string;
  /**
   * Translated  Content  Pt  Br  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__pt__BR__type?: "None" | "group_content";
  /**
   * Translated  Content  Pt  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__pt__description?: string;
  /**
   * Translated  Content  Pt  Name
   * @description The name of the collection or section.
   */
  translated__content__pt__name?: string;
  /**
   * Translated  Content  Pt  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__pt__type?: "None" | "group_content";
  /**
   * Translated  Content  Ro  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ro__description?: string;
  /**
   * Translated  Content  Ro  Name
   * @description The name of the collection or section.
   */
  translated__content__ro__name?: string;
  /**
   * Translated  Content  Ro  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ro__type?: "None" | "group_content";
  /**
   * Translated  Content  Ru  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ru__description?: string;
  /**
   * Translated  Content  Ru  Name
   * @description The name of the collection or section.
   */
  translated__content__ru__name?: string;
  /**
   * Translated  Content  Ru  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ru__type?: "None" | "group_content";
  /**
   * Translated  Content  Sl  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__sl__description?: string;
  /**
   * Translated  Content  Sl  Name
   * @description The name of the collection or section.
   */
  translated__content__sl__name?: string;
  /**
   * Translated  Content  Sl  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__sl__type?: "None" | "group_content";
  /**
   * Translated  Content  Sr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__sr__description?: string;
  /**
   * Translated  Content  Sr  Name
   * @description The name of the collection or section.
   */
  translated__content__sr__name?: string;
  /**
   * Translated  Content  Sr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__sr__type?: "None" | "group_content";
  /**
   * Translated  Content  Sv  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__sv__description?: string;
  /**
   * Translated  Content  Sv  Name
   * @description The name of the collection or section.
   */
  translated__content__sv__name?: string;
  /**
   * Translated  Content  Sv  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__sv__type?: "None" | "group_content";
  /**
   * Translated  Content  Tr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__tr__description?: string;
  /**
   * Translated  Content  Tr  Name
   * @description The name of the collection or section.
   */
  translated__content__tr__name?: string;
  /**
   * Translated  Content  Tr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__tr__type?: "None" | "group_content";
  /**
   * Translated  Content  Type
   * @description The type of object - group_translated_content.
   * @enum {string}
   */
  translated__content__type?: "None" | "group_translated_content";
  /**
   * Translated  Content  Vi  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__vi__description?: string;
  /**
   * Translated  Content  Vi  Name
   * @description The name of the collection or section.
   */
  translated__content__vi__name?: string;
  /**
   * Translated  Content  Vi  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__vi__type?: "None" | "group_content";
  /**
   * Translated  Content  Zh  Cn  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__zh__CN__description?: string;
  /**
   * Translated  Content  Zh  Cn  Name
   * @description The name of the collection or section.
   */
  translated__content__zh__CN__name?: string;
  /**
   * Translated  Content  Zh  Cn  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__zh__CN__type?: "None" | "group_content";
  /**
   * Translated  Content  Zh  Tw  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__zh__TW__description?: string;
  /**
   * Translated  Content  Zh  Tw  Name
   * @description The name of the collection or section.
   */
  translated__content__zh__TW__name?: string;
  /**
   * Translated  Content  Zh  Tw  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__zh__TW__type?: "None" | "group_content";
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_A_COLLECTION tool output.
 */
type INTERCOM_CREATE_A_COLLECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_A_NOTE tool input.
 */
type INTERCOM_CREATE_A_NOTE_INPUT = {
  /**
   * Admin Id
   * @description The unique identifier of a given admin.
   */
  admin_id?: string;
  /**
   * Body
   * @description The text of the note.
   */
  body?: string;
  /**
   * Contact Id
   * @description The unique identifier of a given contact.
   */
  contact_id?: string;
  /**
   * Id
   * @description The unique identifier of a given contact.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_A_NOTE tool output.
 */
type INTERCOM_CREATE_A_NOTE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_CONVERSATION tool input.
 */
type INTERCOM_CREATE_CONVERSATION_INPUT = {
  /**
   * Body
   * @description The message content for the conversation
   */
  body?: string;
  /**
   * From Admin Id
   * @description ID of the admin creating the conversation. If not provided, uses authenticated admin
   * @default null
   */
  from_admin_id: string | null;
  /**
   * From Contact Id
   * @description ID of the contact to create the conversation from. Either from_user_id or from_contact_id is required
   * @default null
   */
  from_contact_id: string | null;
  /**
   * From User Id
   * @description ID of the user to create the conversation from. Either from_user_id or from_contact_id is required
   * @default null
   */
  from_user_id: string | null;
  /**
   * Message Type
   * @description Type of message: inapp, email, or facebook
   * @default inapp
   */
  message_type: string;
  /**
   * Subject
   * @description Subject line for the conversation
   * @default null
   */
  subject: string | null;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_CONVERSATION tool output.
 */
type INTERCOM_CREATE_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversation
       * @description The created conversation
       */
      conversation: {
          /**
           * Admin Assignee Id
           * @description Assigned admin ID
           * @default null
           */
          admin_assignee_id: string | null;
          /**
           * Contacts
           * @description Associated contacts
           */
          contacts?: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: number;
          /**
           * Id
           * @description Conversation ID
           */
          id: string;
          /**
           * Open
           * @description Whether conversation is open
           */
          open: boolean;
          /**
           * Priority
           * @description Conversation priority
           */
          priority: string;
          /**
           * Read
           * @description Whether conversation is read
           */
          read: boolean;
          /**
           * Snoozed Until
           * @description Snoozed until timestamp
           * @default null
           */
          snoozed_until: number | null;
          /**
           * Source
           * @description Conversation source
           */
          source?: {
              [key: string]: unknown;
          };
          /**
           * State
           * @description Conversation state
           */
          state: string;
          /**
           * Tags
           * @description Conversation tags
           */
          tags?: {
              [key: string]: unknown;
          };
          /**
           * Team Assignee Id
           * @description Assigned team ID
           * @default null
           */
          team_assignee_id: string | null;
          /**
           * Teammates
           * @description Associated teammates
           */
          teammates?: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Object type
           */
          type: string;
          /**
           * Updated At
           * @description Update timestamp
           */
          updated_at: number;
          /**
           * Waiting Since
           * @description Waiting since timestamp
           * @default null
           */
          waiting_since: number | null;
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
 * Type of INTERCOM's INTERCOM_CREATE_OR_UPDATE_A_COMPANY tool input.
 */
type INTERCOM_CREATE_OR_UPDATE_A_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The company id you have defined for the company. Can"t be updated
   */
  company_id?: string;
  /**
   * Custom Attributes
   * @description A hash of key/value pairs containing any other data about the company you want Intercom to store.
   */
  custom_attributes?: {
      [key: string]: string;
  };
  /**
   * Industry
   * @description The industry that this company operates in.
   */
  industry?: string;
  /**
   * Monthly Spend
   * @description How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..
   */
  monthly_spend?: number;
  /**
   * Name
   * @description The name of the Company
   */
  name?: string;
  /**
   * Plan
   * @description The name of the plan you have associated with the company.
   */
  plan?: string;
  /**
   * Remote Created At
   * @description The time the company was created by you.
   */
  remote_created_at?: number;
  /**
   * Size
   * @description The number of employees in this company.
   */
  size?: number;
  /**
   * Website
   * @description The URL for this company"s website. Please note that the value specified here is not validated. Accepts any string.
   */
  website?: string;
};

/**
 * Type of INTERCOM's INTERCOM_CREATE_OR_UPDATE_A_COMPANY tool output.
 */
type INTERCOM_CREATE_OR_UPDATE_A_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_AN_ARTICLE tool input.
 */
type INTERCOM_DELETE_AN_ARTICLE_INPUT = {
  /**
   * Id
   * @description The unique identifier for the article which is given by Intercom.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_AN_ARTICLE tool output.
 */
type INTERCOM_DELETE_AN_ARTICLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_A_COLLECTION tool input.
 */
type INTERCOM_DELETE_A_COLLECTION_INPUT = {
  /**
   * Id
   * @description The unique identifier for the collection which is given by Intercom.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_A_COLLECTION tool output.
 */
type INTERCOM_DELETE_A_COLLECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_A_COMPANY tool input.
 */
type INTERCOM_DELETE_A_COMPANY_INPUT = {
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_A_COMPANY tool output.
 */
type INTERCOM_DELETE_A_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_A_CONTACT tool input.
 */
type INTERCOM_DELETE_A_CONTACT_INPUT = {
  /**
   * Id
   * @description id
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_DELETE_A_CONTACT tool output.
 */
type INTERCOM_DELETE_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY tool input.
 */
type INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY tool output.
 */
type INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_GET_A_CONTACT tool input.
 */
type INTERCOM_GET_A_CONTACT_INPUT = {
  /**
   * Id
   * @description id
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_GET_A_CONTACT tool output.
 */
type INTERCOM_GET_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_GET_CONVERSATION tool input.
 */
type INTERCOM_GET_CONVERSATION_INPUT = {
  /**
   * Conversation Id
   * @description The ID of the conversation to retrieve
   */
  conversation_id?: string;
  /**
   * Display As
   * @description Display format for message content: plaintext or html
   * @default null
   */
  display_as: string | null;
};

/**
 * Type of INTERCOM's INTERCOM_GET_CONVERSATION tool output.
 */
type INTERCOM_GET_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversation
       * @description Detailed conversation data
       */
      conversation: {
          /**
           * Admin Assignee Id
           * @description Assigned admin ID
           * @default null
           */
          admin_assignee_id: string | null;
          /**
           * Contacts
           * @description Associated contacts
           */
          contacts?: {
              [key: string]: unknown;
          };
          /**
           * Conversation Parts
           * @description All conversation messages/parts
           */
          conversation_parts?: {
              [key: string]: unknown;
          };
          /**
           * Conversation Rating
           * @description Conversation rating
           * @default null
           */
          conversation_rating: {
              [key: string]: unknown;
          } | null;
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: number;
          /**
           * Custom Attributes
           * @description Custom attributes
           */
          custom_attributes?: {
              [key: string]: unknown;
          };
          /**
           * First Contact Reply
           * @description First contact reply
           * @default null
           */
          first_contact_reply: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Conversation ID
           */
          id: string;
          /**
           * Open
           * @description Whether conversation is open
           */
          open: boolean;
          /**
           * Priority
           * @description Conversation priority
           */
          priority: string;
          /**
           * Read
           * @description Whether conversation is read
           */
          read: boolean;
          /**
           * Sla Applied
           * @description Applied SLA
           * @default null
           */
          sla_applied: {
              [key: string]: unknown;
          } | null;
          /**
           * Snoozed Until
           * @description Snoozed until timestamp
           * @default null
           */
          snoozed_until: number | null;
          /**
           * Source
           * @description Conversation source
           */
          source?: {
              [key: string]: unknown;
          };
          /**
           * State
           * @description Conversation state
           */
          state: string;
          /**
           * Statistics
           * @description Conversation statistics
           * @default null
           */
          statistics: {
              [key: string]: unknown;
          } | null;
          /**
           * Tags
           * @description Conversation tags
           */
          tags?: {
              [key: string]: unknown;
          };
          /**
           * Team Assignee Id
           * @description Assigned team ID
           * @default null
           */
          team_assignee_id: string | null;
          /**
           * Teammates
           * @description Associated teammates
           */
          teammates?: {
              [key: string]: unknown;
          };
          /**
           * Title
           * @description Conversation title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Object type
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updated_at: number;
          /**
           * Waiting Since
           * @description Waiting since timestamp
           * @default null
           */
          waiting_since: number | null;
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
 * Type of INTERCOM's INTERCOM_IDENTIFY_AN_ADMIN tool input.
 */
type INTERCOM_IDENTIFY_AN_ADMIN_INPUT = object;

/**
 * Type of INTERCOM's INTERCOM_IDENTIFY_AN_ADMIN tool output.
 */
type INTERCOM_IDENTIFY_AN_ADMIN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_ACTIVITY_LOGS tool input.
 */
type INTERCOM_LIST_ALL_ACTIVITY_LOGS_INPUT = {
  /**
   * Created At After
   * @description The start date that you request data for. It must be formatted as a UNIX timestamp.
   */
  created_at_after?: string;
  /**
   * Created At Before
   * @description The end date that you request data for. It must be formatted as a UNIX timestamp.
   */
  created_at_before?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_ACTIVITY_LOGS tool output.
 */
type INTERCOM_LIST_ALL_ACTIVITY_LOGS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_ADMINS tool input.
 */
type INTERCOM_LIST_ALL_ADMINS_INPUT = object;

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_ADMINS tool output.
 */
type INTERCOM_LIST_ALL_ADMINS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_ARTICLES tool input.
 */
type INTERCOM_LIST_ALL_ARTICLES_INPUT = object;

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_ARTICLES tool output.
 */
type INTERCOM_LIST_ALL_ARTICLES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_COLLECTIONS tool input.
 */
type INTERCOM_LIST_ALL_COLLECTIONS_INPUT = object;

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_COLLECTIONS tool output.
 */
type INTERCOM_LIST_ALL_COLLECTIONS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_COMPANIES tool input.
 */
type INTERCOM_LIST_ALL_COMPANIES_INPUT = {
  /**
   * Order
   * @description `asc` or `desc`. Return the companies in ascending or descending order. Defaults to desc
   */
  order?: string;
  /**
   * Page
   * @description The page of results to fetch. Defaults to first page
   */
  page?: number;
  /**
   * Per Page
   * @description How many results to return per page. Defaults to 15
   */
  per_page?: number;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_COMPANIES tool output.
 */
type INTERCOM_LIST_ALL_COMPANIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_HELP_CENTERS tool input.
 */
type INTERCOM_LIST_ALL_HELP_CENTERS_INPUT = object;

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_HELP_CENTERS tool output.
 */
type INTERCOM_LIST_ALL_HELP_CENTERS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_NOTES tool input.
 */
type INTERCOM_LIST_ALL_NOTES_INPUT = {
  /**
   * Id
   * @description The unique identifier of a contact.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ALL_NOTES tool output.
 */
type INTERCOM_LIST_ALL_NOTES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT tool input.
 */
type INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT_INPUT = {
  /**
   * Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT tool output.
 */
type INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_CONTACTS tool input.
 */
type INTERCOM_LIST_ATTACHED_CONTACTS_INPUT = {
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_CONTACTS tool output.
 */
type INTERCOM_LIST_ATTACHED_CONTACTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES tool input.
 */
type INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES_INPUT = {
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES tool output.
 */
type INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT tool input.
 */
type INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT tool output.
 */
type INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_CONVERSATIONS tool input.
 */
type INTERCOM_LIST_CONVERSATIONS_INPUT = {
  /**
   * Assignee Id
   * @description Filter by assignee admin ID
   * @default null
   */
  assignee_id: string | null;
  /**
   * Display As
   * @description Display format: plaintext or html
   * @default null
   */
  display_as: string | null;
  /**
   * Per Page
   * @description Number of conversations per page (1-150)
   * @default 20
   */
  per_page: number;
  /**
   * Starting After
   * @description Pagination cursor - ID of the last conversation from previous page
   * @default null
   */
  starting_after: string | null;
  /**
   * State
   * @description Filter by conversation state: open, closed, snoozed
   * @default null
   */
  state: string | null;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_CONVERSATIONS tool output.
 */
type INTERCOM_LIST_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversations
       * @description List of conversations
       */
      conversations: {
          /**
           * Admin Assignee Id
           * @description Assigned admin ID
           * @default null
           */
          admin_assignee_id: string | null;
          /**
           * Contacts
           * @description Associated contacts
           */
          contacts?: {
              [key: string]: unknown;
          };
          /**
           * Conversation Parts
           * @description Conversation parts/messages
           */
          conversation_parts?: {
              [key: string]: unknown;
          };
          /**
           * Conversation Rating
           * @description Conversation rating
           * @default null
           */
          conversation_rating: {
              [key: string]: unknown;
          } | null;
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: number;
          /**
           * Custom Attributes
           * @description Custom attributes
           */
          custom_attributes?: {
              [key: string]: unknown;
          };
          /**
           * First Contact Reply
           * @description First contact reply
           * @default null
           */
          first_contact_reply: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Conversation ID
           */
          id: string;
          /**
           * Open
           * @description Whether conversation is open
           */
          open: boolean;
          /**
           * Priority
           * @description Conversation priority
           */
          priority: string;
          /**
           * Read
           * @description Whether conversation is read
           */
          read: boolean;
          /**
           * Sla Applied
           * @description Applied SLA
           * @default null
           */
          sla_applied: {
              [key: string]: unknown;
          } | null;
          /**
           * Snoozed Until
           * @description Snoozed until timestamp
           * @default null
           */
          snoozed_until: number | null;
          /**
           * Source
           * @description Conversation source
           */
          source?: {
              [key: string]: unknown;
          };
          /**
           * State
           * @description Conversation state
           */
          state: string;
          /**
           * Statistics
           * @description Conversation statistics
           * @default null
           */
          statistics: {
              [key: string]: unknown;
          } | null;
          /**
           * Tags
           * @description Conversation tags
           */
          tags?: {
              [key: string]: unknown;
          };
          /**
           * Team Assignee Id
           * @description Assigned team ID
           * @default null
           */
          team_assignee_id: string | null;
          /**
           * Teammates
           * @description Associated teammates
           */
          teammates?: {
              [key: string]: unknown;
          };
          /**
           * Title
           * @description Conversation title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Object type
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updated_at: number;
          /**
           * Waiting Since
           * @description Waiting since timestamp
           * @default null
           */
          waiting_since: number | null;
      }[];
      /**
       * Pages
       * @description Pagination info
       */
      pages?: {
          [key: string]: unknown;
      };
      /**
       * Total Count
       * @description Total number of conversations
       */
      total_count: number;
      /**
       * Type
       * @description Response type
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT tool input.
 */
type INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT tool output.
 */
type INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT tool input.
 */
type INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT tool output.
 */
type INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_MERGE_A_LEAD_AND_A_USER tool input.
 */
type INTERCOM_MERGE_A_LEAD_AND_A_USER_INPUT = {
  /**
   * From
   * @description The unique identifier for the contact to merge away from. Must be a lead.
   */
  from?: string;
  /**
   * Into
   * @description The unique identifier for the contact to merge into. Must be a user.
   */
  into?: string;
};

/**
 * Type of INTERCOM's INTERCOM_MERGE_A_LEAD_AND_A_USER tool output.
 */
type INTERCOM_MERGE_A_LEAD_AND_A_USER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT tool input.
 */
type INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
  /**
   * Id
   * @description The unique identifier for the subscription type which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT tool output.
 */
type INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_REMOVE_TAG_FROM_A_CONTACT tool input.
 */
type INTERCOM_REMOVE_TAG_FROM_A_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The unique identifier for the contact which is given by Intercom
   */
  contact_id?: string;
  /**
   * Id
   * @description The unique identifier for the tag which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_REMOVE_TAG_FROM_A_CONTACT tool output.
 */
type INTERCOM_REMOVE_TAG_FROM_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_REOPEN_CONVERSATION tool input.
 */
type INTERCOM_REOPEN_CONVERSATION_INPUT = {
  /**
   * Admin Id
   * @description ID of the admin reopening the conversation
   */
  admin_id?: string;
  /**
   * Body
   * @description Optional message to send when reopening the conversation
   * @default null
   */
  body: string | null;
  /**
   * Conversation Id
   * @description The ID of the conversation to reopen
   */
  conversation_id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_REOPEN_CONVERSATION tool output.
 */
type INTERCOM_REOPEN_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversation
       * @description The updated conversation object
       */
      conversation: {
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
 * Type of INTERCOM's INTERCOM_REPLY_TO_CONVERSATION tool input.
 */
type INTERCOM_REPLY_TO_CONVERSATION_INPUT = {
  /**
   * Admin Id
   * @description ID of the admin sending the reply. If not provided, uses the authenticated admin
   * @default null
   */
  admin_id: string | null;
  /**
   * Attachment Urls
   * @description List of attachment URLs to include in the reply
   */
  attachment_urls?: string[];
  /**
   * Conversation Id
   * @description The ID of the conversation to reply to
   */
  conversation_id?: string;
  /**
   * Message Body
   * @description The message content to send as a reply
   */
  message_body?: string;
  /**
   * Message Type
   * @description Type of message: comment, note, or assignment
   * @default comment
   */
  message_type: string;
};

/**
 * Type of INTERCOM's INTERCOM_REPLY_TO_CONVERSATION tool output.
 */
type INTERCOM_REPLY_TO_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversation
       * @description The updated conversation object
       */
      conversation: {
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
 * Type of INTERCOM's INTERCOM_RETRIEVE_AN_ADMIN tool input.
 */
type INTERCOM_RETRIEVE_AN_ADMIN_INPUT = {
  /**
   * Id
   * @description The unique identifier of a given admin
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_AN_ADMIN tool output.
 */
type INTERCOM_RETRIEVE_AN_ADMIN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_AN_ARTICLE tool input.
 */
type INTERCOM_RETRIEVE_AN_ARTICLE_INPUT = {
  /**
   * Id
   * @description The unique identifier for the article which is given by Intercom.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_AN_ARTICLE tool output.
 */
type INTERCOM_RETRIEVE_AN_ARTICLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_A_COLLECTION tool input.
 */
type INTERCOM_RETRIEVE_A_COLLECTION_INPUT = {
  /**
   * Id
   * @description The unique identifier for the collection which is given by Intercom.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_A_COLLECTION tool output.
 */
type INTERCOM_RETRIEVE_A_COLLECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_A_COMPANY_BY_ID tool input.
 */
type INTERCOM_RETRIEVE_A_COMPANY_BY_ID_INPUT = {
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_A_COMPANY_BY_ID tool output.
 */
type INTERCOM_RETRIEVE_A_COMPANY_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_A_HELP_CENTER tool input.
 */
type INTERCOM_RETRIEVE_A_HELP_CENTER_INPUT = {
  /**
   * Id
   * @description The unique identifier for the collection which is given by Intercom.
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_A_HELP_CENTER tool output.
 */
type INTERCOM_RETRIEVE_A_HELP_CENTER_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_COMPANIES tool input.
 */
type INTERCOM_RETRIEVE_COMPANIES_INPUT = {
  /**
   * Company Id
   * @description The `company_id` of the company to filter by.
   */
  company_id?: string;
  /**
   * Name
   * @description The `name` of the company to filter by.
   */
  name?: string;
  /**
   * Page
   * @description The page of results to fetch. Defaults to first page
   */
  page?: number;
  /**
   * Per Page
   * @description How many results to display per page. Defaults to 15
   */
  per_page?: number;
  /**
   * Segment Id
   * @description The `segment_id` of the company to filter by.
   */
  segment_id?: string;
  /**
   * Tag Id
   * @description The `tag_id` of the company to filter by.
   */
  tag_id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_RETRIEVE_COMPANIES tool output.
 */
type INTERCOM_RETRIEVE_COMPANIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_SCROLL_OVER_ALL_COMPANIES tool input.
 */
type INTERCOM_SCROLL_OVER_ALL_COMPANIES_INPUT = {
  /**
   * Scroll Param
   * @description Scroll Param
   */
  scroll_param?: string;
};

/**
 * Type of INTERCOM's INTERCOM_SCROLL_OVER_ALL_COMPANIES tool output.
 */
type INTERCOM_SCROLL_OVER_ALL_COMPANIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_SEARCH_CONVERSATIONS tool input.
 */
type INTERCOM_SEARCH_CONVERSATIONS_INPUT = {
  /**
   * Per Page
   * @description Number of conversations per page (1-150)
   * @default 20
   */
  per_page: number;
  /**
   * Query
   * @description Search query string to find conversations
   */
  query?: string;
  /**
   * Sort Field
   * @description Field to sort by: created_at, updated_at, waiting_since
   * @default updated_at
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description Sort order: ascending or descending
   * @default descending
   */
  sort_order: string | null;
  /**
   * Starting After
   * @description Pagination cursor - ID of the last conversation from previous page
   * @default null
   */
  starting_after: string | null;
};

/**
 * Type of INTERCOM's INTERCOM_SEARCH_CONVERSATIONS tool output.
 */
type INTERCOM_SEARCH_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conversations
       * @description List of matching conversations
       */
      conversations: {
          /**
           * Admin Assignee Id
           * @description Assigned admin ID
           * @default null
           */
          admin_assignee_id: string | null;
          /**
           * Contacts
           * @description Associated contacts
           */
          contacts?: {
              [key: string]: unknown;
          };
          /**
           * Conversation Parts
           * @description Conversation parts/messages
           */
          conversation_parts?: {
              [key: string]: unknown;
          };
          /**
           * Conversation Rating
           * @description Conversation rating
           * @default null
           */
          conversation_rating: {
              [key: string]: unknown;
          } | null;
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: number;
          /**
           * Custom Attributes
           * @description Custom attributes
           */
          custom_attributes?: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Conversation ID
           */
          id: string;
          /**
           * Open
           * @description Whether conversation is open
           */
          open: boolean;
          /**
           * Priority
           * @description Conversation priority
           */
          priority: string;
          /**
           * Read
           * @description Whether conversation is read
           */
          read: boolean;
          /**
           * Snoozed Until
           * @description Snoozed until timestamp
           * @default null
           */
          snoozed_until: number | null;
          /**
           * Source
           * @description Conversation source
           */
          source?: {
              [key: string]: unknown;
          };
          /**
           * State
           * @description Conversation state
           */
          state: string;
          /**
           * Tags
           * @description Conversation tags
           */
          tags?: {
              [key: string]: unknown;
          };
          /**
           * Team Assignee Id
           * @description Assigned team ID
           * @default null
           */
          team_assignee_id: string | null;
          /**
           * Teammates
           * @description Associated teammates
           */
          teammates?: {
              [key: string]: unknown;
          };
          /**
           * Title
           * @description Conversation title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Object type
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updated_at: number;
          /**
           * Waiting Since
           * @description Waiting since timestamp
           * @default null
           */
          waiting_since: number | null;
      }[];
      /**
       * Pages
       * @description Pagination info
       */
      pages?: {
          [key: string]: unknown;
      };
      /**
       * Total Count
       * @description Total number of matching conversations
       */
      total_count: number;
      /**
       * Type
       * @description Response type
       */
      type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_SEARCH_FOR_ARTICLES tool input.
 */
type INTERCOM_SEARCH_FOR_ARTICLES_INPUT = {
  /**
   * Help Center Id
   * @description The ID of the Help Center to search in.
   */
  help_center_id?: number;
  /**
   * Highlight
   * @description Return a highlighted version of the matching content within your articles. Refer to the response schema for more details.
   */
  highlight?: boolean;
  /**
   * Phrase
   * @description The phrase within your articles to search for.
   */
  phrase?: string;
  /**
   * State
   * @description The state of the Articles returned. One of `published`, `draft` or `all`.
   */
  state?: string;
};

/**
 * Type of INTERCOM's INTERCOM_SEARCH_FOR_ARTICLES tool output.
 */
type INTERCOM_SEARCH_FOR_ARTICLES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_SET_AN_ADMIN_TO_AWAY tool input.
 */
type INTERCOM_SET_AN_ADMIN_TO_AWAY_INPUT = {
  /**
   * Away Mode Enabled
   * @description Set to "true" to change the status of the admin to away.
   * @default true
   */
  away_mode_enabled: boolean;
  /**
   * Away Mode Reassign
   * @description Set to "true" to assign any new conversation replies to your default inbox.
   * @default false
   */
  away_mode_reassign: boolean;
  /**
   * Id
   * @description The unique identifier of a given admin
   */
  id?: number;
};

/**
 * Type of INTERCOM's INTERCOM_SET_AN_ADMIN_TO_AWAY tool output.
 */
type INTERCOM_SET_AN_ADMIN_TO_AWAY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_AN_ARTICLE tool input.
 */
type INTERCOM_UPDATE_AN_ARTICLE_INPUT = {
  /**
   * Author Id
   * @description The id of the author of the article. For multilingual articles, this will be the id of the author of the default language"s content. Must be a teammate on the help center"s workspace.
   */
  author_id?: number;
  /**
   * Body
   * @description The content of the article. For multilingual articles, this will be the body of the default language"s content.
   */
  body?: string;
  /**
   * Description
   * @description The description of the article. For multilingual articles, this will be the description of the default language"s content.
   */
  description?: string;
  /**
   * Id
   * @description The unique identifier for the article which is given by Intercom.
   */
  id?: number;
  /**
   * Parent Id
   * @description The id of the article"s parent collection or section. An article without this field stands alone.
   */
  parent_id?: string;
  /**
   * Parent Type
   * @description The type of parent, which can either be a `collection` or `section`.
   */
  parent_type?: string;
  /**
   * State
   * @description Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language"s content.
   * @enum {string}
   */
  state?: "published" | "draft";
  /**
   * Title
   * @description The title of the article.For multilingual articles, this will be the title of the default language"s content.
   */
  title?: string;
  /**
   * Translated  Content  Ar  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ar__author__id?: number;
  /**
   * Translated  Content  Ar  Body
   * @description The body of the article.
   */
  translated__content__ar__body?: string;
  /**
   * Translated  Content  Ar  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ar__created__at?: number;
  /**
   * Translated  Content  Ar  Description
   * @description The description of the article.
   */
  translated__content__ar__description?: string;
  /**
   * Translated  Content  Ar  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ar__state?: "published" | "draft";
  /**
   * Translated  Content  Ar  Title
   * @description The title of the article.
   */
  translated__content__ar__title?: string;
  /**
   * Translated  Content  Ar  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ar__type?: "None" | "article_content";
  /**
   * Translated  Content  Ar  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ar__updated__at?: number;
  /**
   * Translated  Content  Ar  Url
   * @description The URL of the article.
   */
  translated__content__ar__url?: string;
  /**
   * Translated  Content  Bg  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__bg__author__id?: number;
  /**
   * Translated  Content  Bg  Body
   * @description The body of the article.
   */
  translated__content__bg__body?: string;
  /**
   * Translated  Content  Bg  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__bg__created__at?: number;
  /**
   * Translated  Content  Bg  Description
   * @description The description of the article.
   */
  translated__content__bg__description?: string;
  /**
   * Translated  Content  Bg  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__bg__state?: "published" | "draft";
  /**
   * Translated  Content  Bg  Title
   * @description The title of the article.
   */
  translated__content__bg__title?: string;
  /**
   * Translated  Content  Bg  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__bg__type?: "None" | "article_content";
  /**
   * Translated  Content  Bg  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__bg__updated__at?: number;
  /**
   * Translated  Content  Bg  Url
   * @description The URL of the article.
   */
  translated__content__bg__url?: string;
  /**
   * Translated  Content  Bs  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__bs__author__id?: number;
  /**
   * Translated  Content  Bs  Body
   * @description The body of the article.
   */
  translated__content__bs__body?: string;
  /**
   * Translated  Content  Bs  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__bs__created__at?: number;
  /**
   * Translated  Content  Bs  Description
   * @description The description of the article.
   */
  translated__content__bs__description?: string;
  /**
   * Translated  Content  Bs  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__bs__state?: "published" | "draft";
  /**
   * Translated  Content  Bs  Title
   * @description The title of the article.
   */
  translated__content__bs__title?: string;
  /**
   * Translated  Content  Bs  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__bs__type?: "None" | "article_content";
  /**
   * Translated  Content  Bs  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__bs__updated__at?: number;
  /**
   * Translated  Content  Bs  Url
   * @description The URL of the article.
   */
  translated__content__bs__url?: string;
  /**
   * Translated  Content  Ca  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ca__author__id?: number;
  /**
   * Translated  Content  Ca  Body
   * @description The body of the article.
   */
  translated__content__ca__body?: string;
  /**
   * Translated  Content  Ca  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ca__created__at?: number;
  /**
   * Translated  Content  Ca  Description
   * @description The description of the article.
   */
  translated__content__ca__description?: string;
  /**
   * Translated  Content  Ca  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ca__state?: "published" | "draft";
  /**
   * Translated  Content  Ca  Title
   * @description The title of the article.
   */
  translated__content__ca__title?: string;
  /**
   * Translated  Content  Ca  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ca__type?: "None" | "article_content";
  /**
   * Translated  Content  Ca  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ca__updated__at?: number;
  /**
   * Translated  Content  Ca  Url
   * @description The URL of the article.
   */
  translated__content__ca__url?: string;
  /**
   * Translated  Content  Cs  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__cs__author__id?: number;
  /**
   * Translated  Content  Cs  Body
   * @description The body of the article.
   */
  translated__content__cs__body?: string;
  /**
   * Translated  Content  Cs  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__cs__created__at?: number;
  /**
   * Translated  Content  Cs  Description
   * @description The description of the article.
   */
  translated__content__cs__description?: string;
  /**
   * Translated  Content  Cs  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__cs__state?: "published" | "draft";
  /**
   * Translated  Content  Cs  Title
   * @description The title of the article.
   */
  translated__content__cs__title?: string;
  /**
   * Translated  Content  Cs  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__cs__type?: "None" | "article_content";
  /**
   * Translated  Content  Cs  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__cs__updated__at?: number;
  /**
   * Translated  Content  Cs  Url
   * @description The URL of the article.
   */
  translated__content__cs__url?: string;
  /**
   * Translated  Content  Da  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__da__author__id?: number;
  /**
   * Translated  Content  Da  Body
   * @description The body of the article.
   */
  translated__content__da__body?: string;
  /**
   * Translated  Content  Da  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__da__created__at?: number;
  /**
   * Translated  Content  Da  Description
   * @description The description of the article.
   */
  translated__content__da__description?: string;
  /**
   * Translated  Content  Da  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__da__state?: "published" | "draft";
  /**
   * Translated  Content  Da  Title
   * @description The title of the article.
   */
  translated__content__da__title?: string;
  /**
   * Translated  Content  Da  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__da__type?: "None" | "article_content";
  /**
   * Translated  Content  Da  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__da__updated__at?: number;
  /**
   * Translated  Content  Da  Url
   * @description The URL of the article.
   */
  translated__content__da__url?: string;
  /**
   * Translated  Content  De  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__de__author__id?: number;
  /**
   * Translated  Content  De  Body
   * @description The body of the article.
   */
  translated__content__de__body?: string;
  /**
   * Translated  Content  De  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__de__created__at?: number;
  /**
   * Translated  Content  De  Description
   * @description The description of the article.
   */
  translated__content__de__description?: string;
  /**
   * Translated  Content  De  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__de__state?: "published" | "draft";
  /**
   * Translated  Content  De  Title
   * @description The title of the article.
   */
  translated__content__de__title?: string;
  /**
   * Translated  Content  De  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__de__type?: "None" | "article_content";
  /**
   * Translated  Content  De  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__de__updated__at?: number;
  /**
   * Translated  Content  De  Url
   * @description The URL of the article.
   */
  translated__content__de__url?: string;
  /**
   * Translated  Content  El  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__el__author__id?: number;
  /**
   * Translated  Content  El  Body
   * @description The body of the article.
   */
  translated__content__el__body?: string;
  /**
   * Translated  Content  El  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__el__created__at?: number;
  /**
   * Translated  Content  El  Description
   * @description The description of the article.
   */
  translated__content__el__description?: string;
  /**
   * Translated  Content  El  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__el__state?: "published" | "draft";
  /**
   * Translated  Content  El  Title
   * @description The title of the article.
   */
  translated__content__el__title?: string;
  /**
   * Translated  Content  El  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__el__type?: "None" | "article_content";
  /**
   * Translated  Content  El  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__el__updated__at?: number;
  /**
   * Translated  Content  El  Url
   * @description The URL of the article.
   */
  translated__content__el__url?: string;
  /**
   * Translated  Content  En  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__en__author__id?: number;
  /**
   * Translated  Content  En  Body
   * @description The body of the article.
   */
  translated__content__en__body?: string;
  /**
   * Translated  Content  En  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__en__created__at?: number;
  /**
   * Translated  Content  En  Description
   * @description The description of the article.
   */
  translated__content__en__description?: string;
  /**
   * Translated  Content  En  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__en__state?: "published" | "draft";
  /**
   * Translated  Content  En  Title
   * @description The title of the article.
   */
  translated__content__en__title?: string;
  /**
   * Translated  Content  En  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__en__type?: "None" | "article_content";
  /**
   * Translated  Content  En  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__en__updated__at?: number;
  /**
   * Translated  Content  En  Url
   * @description The URL of the article.
   */
  translated__content__en__url?: string;
  /**
   * Translated  Content  Es  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__es__author__id?: number;
  /**
   * Translated  Content  Es  Body
   * @description The body of the article.
   */
  translated__content__es__body?: string;
  /**
   * Translated  Content  Es  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__es__created__at?: number;
  /**
   * Translated  Content  Es  Description
   * @description The description of the article.
   */
  translated__content__es__description?: string;
  /**
   * Translated  Content  Es  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__es__state?: "published" | "draft";
  /**
   * Translated  Content  Es  Title
   * @description The title of the article.
   */
  translated__content__es__title?: string;
  /**
   * Translated  Content  Es  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__es__type?: "None" | "article_content";
  /**
   * Translated  Content  Es  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__es__updated__at?: number;
  /**
   * Translated  Content  Es  Url
   * @description The URL of the article.
   */
  translated__content__es__url?: string;
  /**
   * Translated  Content  Et  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__et__author__id?: number;
  /**
   * Translated  Content  Et  Body
   * @description The body of the article.
   */
  translated__content__et__body?: string;
  /**
   * Translated  Content  Et  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__et__created__at?: number;
  /**
   * Translated  Content  Et  Description
   * @description The description of the article.
   */
  translated__content__et__description?: string;
  /**
   * Translated  Content  Et  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__et__state?: "published" | "draft";
  /**
   * Translated  Content  Et  Title
   * @description The title of the article.
   */
  translated__content__et__title?: string;
  /**
   * Translated  Content  Et  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__et__type?: "None" | "article_content";
  /**
   * Translated  Content  Et  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__et__updated__at?: number;
  /**
   * Translated  Content  Et  Url
   * @description The URL of the article.
   */
  translated__content__et__url?: string;
  /**
   * Translated  Content  Fi  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__fi__author__id?: number;
  /**
   * Translated  Content  Fi  Body
   * @description The body of the article.
   */
  translated__content__fi__body?: string;
  /**
   * Translated  Content  Fi  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__fi__created__at?: number;
  /**
   * Translated  Content  Fi  Description
   * @description The description of the article.
   */
  translated__content__fi__description?: string;
  /**
   * Translated  Content  Fi  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__fi__state?: "published" | "draft";
  /**
   * Translated  Content  Fi  Title
   * @description The title of the article.
   */
  translated__content__fi__title?: string;
  /**
   * Translated  Content  Fi  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__fi__type?: "None" | "article_content";
  /**
   * Translated  Content  Fi  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__fi__updated__at?: number;
  /**
   * Translated  Content  Fi  Url
   * @description The URL of the article.
   */
  translated__content__fi__url?: string;
  /**
   * Translated  Content  Fr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__fr__author__id?: number;
  /**
   * Translated  Content  Fr  Body
   * @description The body of the article.
   */
  translated__content__fr__body?: string;
  /**
   * Translated  Content  Fr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__fr__created__at?: number;
  /**
   * Translated  Content  Fr  Description
   * @description The description of the article.
   */
  translated__content__fr__description?: string;
  /**
   * Translated  Content  Fr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__fr__state?: "published" | "draft";
  /**
   * Translated  Content  Fr  Title
   * @description The title of the article.
   */
  translated__content__fr__title?: string;
  /**
   * Translated  Content  Fr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__fr__type?: "None" | "article_content";
  /**
   * Translated  Content  Fr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__fr__updated__at?: number;
  /**
   * Translated  Content  Fr  Url
   * @description The URL of the article.
   */
  translated__content__fr__url?: string;
  /**
   * Translated  Content  He  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__he__author__id?: number;
  /**
   * Translated  Content  He  Body
   * @description The body of the article.
   */
  translated__content__he__body?: string;
  /**
   * Translated  Content  He  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__he__created__at?: number;
  /**
   * Translated  Content  He  Description
   * @description The description of the article.
   */
  translated__content__he__description?: string;
  /**
   * Translated  Content  He  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__he__state?: "published" | "draft";
  /**
   * Translated  Content  He  Title
   * @description The title of the article.
   */
  translated__content__he__title?: string;
  /**
   * Translated  Content  He  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__he__type?: "None" | "article_content";
  /**
   * Translated  Content  He  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__he__updated__at?: number;
  /**
   * Translated  Content  He  Url
   * @description The URL of the article.
   */
  translated__content__he__url?: string;
  /**
   * Translated  Content  Hr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__hr__author__id?: number;
  /**
   * Translated  Content  Hr  Body
   * @description The body of the article.
   */
  translated__content__hr__body?: string;
  /**
   * Translated  Content  Hr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__hr__created__at?: number;
  /**
   * Translated  Content  Hr  Description
   * @description The description of the article.
   */
  translated__content__hr__description?: string;
  /**
   * Translated  Content  Hr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__hr__state?: "published" | "draft";
  /**
   * Translated  Content  Hr  Title
   * @description The title of the article.
   */
  translated__content__hr__title?: string;
  /**
   * Translated  Content  Hr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__hr__type?: "None" | "article_content";
  /**
   * Translated  Content  Hr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__hr__updated__at?: number;
  /**
   * Translated  Content  Hr  Url
   * @description The URL of the article.
   */
  translated__content__hr__url?: string;
  /**
   * Translated  Content  Hu  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__hu__author__id?: number;
  /**
   * Translated  Content  Hu  Body
   * @description The body of the article.
   */
  translated__content__hu__body?: string;
  /**
   * Translated  Content  Hu  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__hu__created__at?: number;
  /**
   * Translated  Content  Hu  Description
   * @description The description of the article.
   */
  translated__content__hu__description?: string;
  /**
   * Translated  Content  Hu  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__hu__state?: "published" | "draft";
  /**
   * Translated  Content  Hu  Title
   * @description The title of the article.
   */
  translated__content__hu__title?: string;
  /**
   * Translated  Content  Hu  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__hu__type?: "None" | "article_content";
  /**
   * Translated  Content  Hu  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__hu__updated__at?: number;
  /**
   * Translated  Content  Hu  Url
   * @description The URL of the article.
   */
  translated__content__hu__url?: string;
  /**
   * Translated  Content  Id  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__id__author__id?: number;
  /**
   * Translated  Content  Id  Body
   * @description The body of the article.
   */
  translated__content__id__body?: string;
  /**
   * Translated  Content  Id  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__id__created__at?: number;
  /**
   * Translated  Content  Id  Description
   * @description The description of the article.
   */
  translated__content__id__description?: string;
  /**
   * Translated  Content  Id  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__id__state?: "published" | "draft";
  /**
   * Translated  Content  Id  Title
   * @description The title of the article.
   */
  translated__content__id__title?: string;
  /**
   * Translated  Content  Id  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__id__type?: "None" | "article_content";
  /**
   * Translated  Content  Id  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__id__updated__at?: number;
  /**
   * Translated  Content  Id  Url
   * @description The URL of the article.
   */
  translated__content__id__url?: string;
  /**
   * Translated  Content  It  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__it__author__id?: number;
  /**
   * Translated  Content  It  Body
   * @description The body of the article.
   */
  translated__content__it__body?: string;
  /**
   * Translated  Content  It  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__it__created__at?: number;
  /**
   * Translated  Content  It  Description
   * @description The description of the article.
   */
  translated__content__it__description?: string;
  /**
   * Translated  Content  It  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__it__state?: "published" | "draft";
  /**
   * Translated  Content  It  Title
   * @description The title of the article.
   */
  translated__content__it__title?: string;
  /**
   * Translated  Content  It  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__it__type?: "None" | "article_content";
  /**
   * Translated  Content  It  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__it__updated__at?: number;
  /**
   * Translated  Content  It  Url
   * @description The URL of the article.
   */
  translated__content__it__url?: string;
  /**
   * Translated  Content  Ja  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ja__author__id?: number;
  /**
   * Translated  Content  Ja  Body
   * @description The body of the article.
   */
  translated__content__ja__body?: string;
  /**
   * Translated  Content  Ja  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ja__created__at?: number;
  /**
   * Translated  Content  Ja  Description
   * @description The description of the article.
   */
  translated__content__ja__description?: string;
  /**
   * Translated  Content  Ja  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ja__state?: "published" | "draft";
  /**
   * Translated  Content  Ja  Title
   * @description The title of the article.
   */
  translated__content__ja__title?: string;
  /**
   * Translated  Content  Ja  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ja__type?: "None" | "article_content";
  /**
   * Translated  Content  Ja  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ja__updated__at?: number;
  /**
   * Translated  Content  Ja  Url
   * @description The URL of the article.
   */
  translated__content__ja__url?: string;
  /**
   * Translated  Content  Ko  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ko__author__id?: number;
  /**
   * Translated  Content  Ko  Body
   * @description The body of the article.
   */
  translated__content__ko__body?: string;
  /**
   * Translated  Content  Ko  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ko__created__at?: number;
  /**
   * Translated  Content  Ko  Description
   * @description The description of the article.
   */
  translated__content__ko__description?: string;
  /**
   * Translated  Content  Ko  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ko__state?: "published" | "draft";
  /**
   * Translated  Content  Ko  Title
   * @description The title of the article.
   */
  translated__content__ko__title?: string;
  /**
   * Translated  Content  Ko  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ko__type?: "None" | "article_content";
  /**
   * Translated  Content  Ko  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ko__updated__at?: number;
  /**
   * Translated  Content  Ko  Url
   * @description The URL of the article.
   */
  translated__content__ko__url?: string;
  /**
   * Translated  Content  Lt  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__lt__author__id?: number;
  /**
   * Translated  Content  Lt  Body
   * @description The body of the article.
   */
  translated__content__lt__body?: string;
  /**
   * Translated  Content  Lt  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__lt__created__at?: number;
  /**
   * Translated  Content  Lt  Description
   * @description The description of the article.
   */
  translated__content__lt__description?: string;
  /**
   * Translated  Content  Lt  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__lt__state?: "published" | "draft";
  /**
   * Translated  Content  Lt  Title
   * @description The title of the article.
   */
  translated__content__lt__title?: string;
  /**
   * Translated  Content  Lt  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__lt__type?: "None" | "article_content";
  /**
   * Translated  Content  Lt  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__lt__updated__at?: number;
  /**
   * Translated  Content  Lt  Url
   * @description The URL of the article.
   */
  translated__content__lt__url?: string;
  /**
   * Translated  Content  Lv  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__lv__author__id?: number;
  /**
   * Translated  Content  Lv  Body
   * @description The body of the article.
   */
  translated__content__lv__body?: string;
  /**
   * Translated  Content  Lv  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__lv__created__at?: number;
  /**
   * Translated  Content  Lv  Description
   * @description The description of the article.
   */
  translated__content__lv__description?: string;
  /**
   * Translated  Content  Lv  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__lv__state?: "published" | "draft";
  /**
   * Translated  Content  Lv  Title
   * @description The title of the article.
   */
  translated__content__lv__title?: string;
  /**
   * Translated  Content  Lv  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__lv__type?: "None" | "article_content";
  /**
   * Translated  Content  Lv  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__lv__updated__at?: number;
  /**
   * Translated  Content  Lv  Url
   * @description The URL of the article.
   */
  translated__content__lv__url?: string;
  /**
   * Translated  Content  Mn  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__mn__author__id?: number;
  /**
   * Translated  Content  Mn  Body
   * @description The body of the article.
   */
  translated__content__mn__body?: string;
  /**
   * Translated  Content  Mn  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__mn__created__at?: number;
  /**
   * Translated  Content  Mn  Description
   * @description The description of the article.
   */
  translated__content__mn__description?: string;
  /**
   * Translated  Content  Mn  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__mn__state?: "published" | "draft";
  /**
   * Translated  Content  Mn  Title
   * @description The title of the article.
   */
  translated__content__mn__title?: string;
  /**
   * Translated  Content  Mn  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__mn__type?: "None" | "article_content";
  /**
   * Translated  Content  Mn  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__mn__updated__at?: number;
  /**
   * Translated  Content  Mn  Url
   * @description The URL of the article.
   */
  translated__content__mn__url?: string;
  /**
   * Translated  Content  Nb  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__nb__author__id?: number;
  /**
   * Translated  Content  Nb  Body
   * @description The body of the article.
   */
  translated__content__nb__body?: string;
  /**
   * Translated  Content  Nb  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__nb__created__at?: number;
  /**
   * Translated  Content  Nb  Description
   * @description The description of the article.
   */
  translated__content__nb__description?: string;
  /**
   * Translated  Content  Nb  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__nb__state?: "published" | "draft";
  /**
   * Translated  Content  Nb  Title
   * @description The title of the article.
   */
  translated__content__nb__title?: string;
  /**
   * Translated  Content  Nb  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__nb__type?: "None" | "article_content";
  /**
   * Translated  Content  Nb  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__nb__updated__at?: number;
  /**
   * Translated  Content  Nb  Url
   * @description The URL of the article.
   */
  translated__content__nb__url?: string;
  /**
   * Translated  Content  Nl  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__nl__author__id?: number;
  /**
   * Translated  Content  Nl  Body
   * @description The body of the article.
   */
  translated__content__nl__body?: string;
  /**
   * Translated  Content  Nl  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__nl__created__at?: number;
  /**
   * Translated  Content  Nl  Description
   * @description The description of the article.
   */
  translated__content__nl__description?: string;
  /**
   * Translated  Content  Nl  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__nl__state?: "published" | "draft";
  /**
   * Translated  Content  Nl  Title
   * @description The title of the article.
   */
  translated__content__nl__title?: string;
  /**
   * Translated  Content  Nl  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__nl__type?: "None" | "article_content";
  /**
   * Translated  Content  Nl  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__nl__updated__at?: number;
  /**
   * Translated  Content  Nl  Url
   * @description The URL of the article.
   */
  translated__content__nl__url?: string;
  /**
   * Translated  Content  Pl  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__pl__author__id?: number;
  /**
   * Translated  Content  Pl  Body
   * @description The body of the article.
   */
  translated__content__pl__body?: string;
  /**
   * Translated  Content  Pl  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__pl__created__at?: number;
  /**
   * Translated  Content  Pl  Description
   * @description The description of the article.
   */
  translated__content__pl__description?: string;
  /**
   * Translated  Content  Pl  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__pl__state?: "published" | "draft";
  /**
   * Translated  Content  Pl  Title
   * @description The title of the article.
   */
  translated__content__pl__title?: string;
  /**
   * Translated  Content  Pl  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__pl__type?: "None" | "article_content";
  /**
   * Translated  Content  Pl  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__pl__updated__at?: number;
  /**
   * Translated  Content  Pl  Url
   * @description The URL of the article.
   */
  translated__content__pl__url?: string;
  /**
   * Translated  Content  Pt  Br  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__pt__BR__author__id?: number;
  /**
   * Translated  Content  Pt  Br  Body
   * @description The body of the article.
   */
  translated__content__pt__BR__body?: string;
  /**
   * Translated  Content  Pt  Br  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__pt__BR__created__at?: number;
  /**
   * Translated  Content  Pt  Br  Description
   * @description The description of the article.
   */
  translated__content__pt__BR__description?: string;
  /**
   * Translated  Content  Pt  Br  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__pt__BR__state?: "published" | "draft";
  /**
   * Translated  Content  Pt  Br  Title
   * @description The title of the article.
   */
  translated__content__pt__BR__title?: string;
  /**
   * Translated  Content  Pt  Br  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__pt__BR__type?: "None" | "article_content";
  /**
   * Translated  Content  Pt  Br  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__pt__BR__updated__at?: number;
  /**
   * Translated  Content  Pt  Br  Url
   * @description The URL of the article.
   */
  translated__content__pt__BR__url?: string;
  /**
   * Translated  Content  Pt  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__pt__author__id?: number;
  /**
   * Translated  Content  Pt  Body
   * @description The body of the article.
   */
  translated__content__pt__body?: string;
  /**
   * Translated  Content  Pt  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__pt__created__at?: number;
  /**
   * Translated  Content  Pt  Description
   * @description The description of the article.
   */
  translated__content__pt__description?: string;
  /**
   * Translated  Content  Pt  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__pt__state?: "published" | "draft";
  /**
   * Translated  Content  Pt  Title
   * @description The title of the article.
   */
  translated__content__pt__title?: string;
  /**
   * Translated  Content  Pt  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__pt__type?: "None" | "article_content";
  /**
   * Translated  Content  Pt  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__pt__updated__at?: number;
  /**
   * Translated  Content  Pt  Url
   * @description The URL of the article.
   */
  translated__content__pt__url?: string;
  /**
   * Translated  Content  Ro  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ro__author__id?: number;
  /**
   * Translated  Content  Ro  Body
   * @description The body of the article.
   */
  translated__content__ro__body?: string;
  /**
   * Translated  Content  Ro  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ro__created__at?: number;
  /**
   * Translated  Content  Ro  Description
   * @description The description of the article.
   */
  translated__content__ro__description?: string;
  /**
   * Translated  Content  Ro  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ro__state?: "published" | "draft";
  /**
   * Translated  Content  Ro  Title
   * @description The title of the article.
   */
  translated__content__ro__title?: string;
  /**
   * Translated  Content  Ro  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ro__type?: "None" | "article_content";
  /**
   * Translated  Content  Ro  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ro__updated__at?: number;
  /**
   * Translated  Content  Ro  Url
   * @description The URL of the article.
   */
  translated__content__ro__url?: string;
  /**
   * Translated  Content  Ru  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__ru__author__id?: number;
  /**
   * Translated  Content  Ru  Body
   * @description The body of the article.
   */
  translated__content__ru__body?: string;
  /**
   * Translated  Content  Ru  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__ru__created__at?: number;
  /**
   * Translated  Content  Ru  Description
   * @description The description of the article.
   */
  translated__content__ru__description?: string;
  /**
   * Translated  Content  Ru  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__ru__state?: "published" | "draft";
  /**
   * Translated  Content  Ru  Title
   * @description The title of the article.
   */
  translated__content__ru__title?: string;
  /**
   * Translated  Content  Ru  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__ru__type?: "None" | "article_content";
  /**
   * Translated  Content  Ru  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__ru__updated__at?: number;
  /**
   * Translated  Content  Ru  Url
   * @description The URL of the article.
   */
  translated__content__ru__url?: string;
  /**
   * Translated  Content  Sl  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__sl__author__id?: number;
  /**
   * Translated  Content  Sl  Body
   * @description The body of the article.
   */
  translated__content__sl__body?: string;
  /**
   * Translated  Content  Sl  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__sl__created__at?: number;
  /**
   * Translated  Content  Sl  Description
   * @description The description of the article.
   */
  translated__content__sl__description?: string;
  /**
   * Translated  Content  Sl  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__sl__state?: "published" | "draft";
  /**
   * Translated  Content  Sl  Title
   * @description The title of the article.
   */
  translated__content__sl__title?: string;
  /**
   * Translated  Content  Sl  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__sl__type?: "None" | "article_content";
  /**
   * Translated  Content  Sl  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__sl__updated__at?: number;
  /**
   * Translated  Content  Sl  Url
   * @description The URL of the article.
   */
  translated__content__sl__url?: string;
  /**
   * Translated  Content  Sr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__sr__author__id?: number;
  /**
   * Translated  Content  Sr  Body
   * @description The body of the article.
   */
  translated__content__sr__body?: string;
  /**
   * Translated  Content  Sr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__sr__created__at?: number;
  /**
   * Translated  Content  Sr  Description
   * @description The description of the article.
   */
  translated__content__sr__description?: string;
  /**
   * Translated  Content  Sr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__sr__state?: "published" | "draft";
  /**
   * Translated  Content  Sr  Title
   * @description The title of the article.
   */
  translated__content__sr__title?: string;
  /**
   * Translated  Content  Sr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__sr__type?: "None" | "article_content";
  /**
   * Translated  Content  Sr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__sr__updated__at?: number;
  /**
   * Translated  Content  Sr  Url
   * @description The URL of the article.
   */
  translated__content__sr__url?: string;
  /**
   * Translated  Content  Sv  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__sv__author__id?: number;
  /**
   * Translated  Content  Sv  Body
   * @description The body of the article.
   */
  translated__content__sv__body?: string;
  /**
   * Translated  Content  Sv  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__sv__created__at?: number;
  /**
   * Translated  Content  Sv  Description
   * @description The description of the article.
   */
  translated__content__sv__description?: string;
  /**
   * Translated  Content  Sv  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__sv__state?: "published" | "draft";
  /**
   * Translated  Content  Sv  Title
   * @description The title of the article.
   */
  translated__content__sv__title?: string;
  /**
   * Translated  Content  Sv  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__sv__type?: "None" | "article_content";
  /**
   * Translated  Content  Sv  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__sv__updated__at?: number;
  /**
   * Translated  Content  Sv  Url
   * @description The URL of the article.
   */
  translated__content__sv__url?: string;
  /**
   * Translated  Content  Tr  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__tr__author__id?: number;
  /**
   * Translated  Content  Tr  Body
   * @description The body of the article.
   */
  translated__content__tr__body?: string;
  /**
   * Translated  Content  Tr  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__tr__created__at?: number;
  /**
   * Translated  Content  Tr  Description
   * @description The description of the article.
   */
  translated__content__tr__description?: string;
  /**
   * Translated  Content  Tr  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__tr__state?: "published" | "draft";
  /**
   * Translated  Content  Tr  Title
   * @description The title of the article.
   */
  translated__content__tr__title?: string;
  /**
   * Translated  Content  Tr  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__tr__type?: "None" | "article_content";
  /**
   * Translated  Content  Tr  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__tr__updated__at?: number;
  /**
   * Translated  Content  Tr  Url
   * @description The URL of the article.
   */
  translated__content__tr__url?: string;
  /**
   * Translated  Content  Type
   * @description The type of object - article_translated_content.
   * @enum {string}
   */
  translated__content__type?: "None" | "article_translated_content";
  /**
   * Translated  Content  Vi  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__vi__author__id?: number;
  /**
   * Translated  Content  Vi  Body
   * @description The body of the article.
   */
  translated__content__vi__body?: string;
  /**
   * Translated  Content  Vi  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__vi__created__at?: number;
  /**
   * Translated  Content  Vi  Description
   * @description The description of the article.
   */
  translated__content__vi__description?: string;
  /**
   * Translated  Content  Vi  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__vi__state?: "published" | "draft";
  /**
   * Translated  Content  Vi  Title
   * @description The title of the article.
   */
  translated__content__vi__title?: string;
  /**
   * Translated  Content  Vi  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__vi__type?: "None" | "article_content";
  /**
   * Translated  Content  Vi  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__vi__updated__at?: number;
  /**
   * Translated  Content  Vi  Url
   * @description The URL of the article.
   */
  translated__content__vi__url?: string;
  /**
   * Translated  Content  Zh  Cn  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__zh__CN__author__id?: number;
  /**
   * Translated  Content  Zh  Cn  Body
   * @description The body of the article.
   */
  translated__content__zh__CN__body?: string;
  /**
   * Translated  Content  Zh  Cn  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__zh__CN__created__at?: number;
  /**
   * Translated  Content  Zh  Cn  Description
   * @description The description of the article.
   */
  translated__content__zh__CN__description?: string;
  /**
   * Translated  Content  Zh  Cn  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__zh__CN__state?: "published" | "draft";
  /**
   * Translated  Content  Zh  Cn  Title
   * @description The title of the article.
   */
  translated__content__zh__CN__title?: string;
  /**
   * Translated  Content  Zh  Cn  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__zh__CN__type?: "None" | "article_content";
  /**
   * Translated  Content  Zh  Cn  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__zh__CN__updated__at?: number;
  /**
   * Translated  Content  Zh  Cn  Url
   * @description The URL of the article.
   */
  translated__content__zh__CN__url?: string;
  /**
   * Translated  Content  Zh  Tw  Author  Id
   * @description The ID of the author of the article.
   */
  translated__content__zh__TW__author__id?: number;
  /**
   * Translated  Content  Zh  Tw  Body
   * @description The body of the article.
   */
  translated__content__zh__TW__body?: string;
  /**
   * Translated  Content  Zh  Tw  Created  At
   * @description The time when the article was created (seconds).
   */
  translated__content__zh__TW__created__at?: number;
  /**
   * Translated  Content  Zh  Tw  Description
   * @description The description of the article.
   */
  translated__content__zh__TW__description?: string;
  /**
   * Translated  Content  Zh  Tw  State
   * @description Whether the article is `published` or is a `draft` .
   * @enum {string}
   */
  translated__content__zh__TW__state?: "published" | "draft";
  /**
   * Translated  Content  Zh  Tw  Title
   * @description The title of the article.
   */
  translated__content__zh__TW__title?: string;
  /**
   * Translated  Content  Zh  Tw  Type
   * @description The type of object - `article_content` .
   * @enum {string}
   */
  translated__content__zh__TW__type?: "None" | "article_content";
  /**
   * Translated  Content  Zh  Tw  Updated  At
   * @description The time when the article was last updated (seconds).
   */
  translated__content__zh__TW__updated__at?: number;
  /**
   * Translated  Content  Zh  Tw  Url
   * @description The URL of the article.
   */
  translated__content__zh__TW__url?: string;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_AN_ARTICLE tool output.
 */
type INTERCOM_UPDATE_AN_ARTICLE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_A_COLLECTION tool input.
 */
type INTERCOM_UPDATE_A_COLLECTION_INPUT = {
  /**
   * Description
   * @description The description of the collection. For multilingual collections, this will be the description of the default language"s content.
   */
  description?: string;
  /**
   * Id
   * @description The unique identifier for the collection which is given by Intercom.
   */
  id?: number;
  /**
   * Name
   * @description The name of the collection. For multilingual collections, this will be the name of the default language"s content.
   */
  name?: string;
  /**
   * Parent Id
   * @description The id of the parent collection. If `null` then it will be updated as the first level collection.
   */
  parent_id?: string;
  /**
   * Translated  Content  Ar  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ar__description?: string;
  /**
   * Translated  Content  Ar  Name
   * @description The name of the collection or section.
   */
  translated__content__ar__name?: string;
  /**
   * Translated  Content  Ar  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ar__type?: "None" | "group_content";
  /**
   * Translated  Content  Bg  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__bg__description?: string;
  /**
   * Translated  Content  Bg  Name
   * @description The name of the collection or section.
   */
  translated__content__bg__name?: string;
  /**
   * Translated  Content  Bg  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__bg__type?: "None" | "group_content";
  /**
   * Translated  Content  Bs  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__bs__description?: string;
  /**
   * Translated  Content  Bs  Name
   * @description The name of the collection or section.
   */
  translated__content__bs__name?: string;
  /**
   * Translated  Content  Bs  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__bs__type?: "None" | "group_content";
  /**
   * Translated  Content  Ca  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ca__description?: string;
  /**
   * Translated  Content  Ca  Name
   * @description The name of the collection or section.
   */
  translated__content__ca__name?: string;
  /**
   * Translated  Content  Ca  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ca__type?: "None" | "group_content";
  /**
   * Translated  Content  Cs  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__cs__description?: string;
  /**
   * Translated  Content  Cs  Name
   * @description The name of the collection or section.
   */
  translated__content__cs__name?: string;
  /**
   * Translated  Content  Cs  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__cs__type?: "None" | "group_content";
  /**
   * Translated  Content  Da  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__da__description?: string;
  /**
   * Translated  Content  Da  Name
   * @description The name of the collection or section.
   */
  translated__content__da__name?: string;
  /**
   * Translated  Content  Da  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__da__type?: "None" | "group_content";
  /**
   * Translated  Content  De  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__de__description?: string;
  /**
   * Translated  Content  De  Name
   * @description The name of the collection or section.
   */
  translated__content__de__name?: string;
  /**
   * Translated  Content  De  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__de__type?: "None" | "group_content";
  /**
   * Translated  Content  El  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__el__description?: string;
  /**
   * Translated  Content  El  Name
   * @description The name of the collection or section.
   */
  translated__content__el__name?: string;
  /**
   * Translated  Content  El  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__el__type?: "None" | "group_content";
  /**
   * Translated  Content  En  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__en__description?: string;
  /**
   * Translated  Content  En  Name
   * @description The name of the collection or section.
   */
  translated__content__en__name?: string;
  /**
   * Translated  Content  En  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__en__type?: "None" | "group_content";
  /**
   * Translated  Content  Es  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__es__description?: string;
  /**
   * Translated  Content  Es  Name
   * @description The name of the collection or section.
   */
  translated__content__es__name?: string;
  /**
   * Translated  Content  Es  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__es__type?: "None" | "group_content";
  /**
   * Translated  Content  Et  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__et__description?: string;
  /**
   * Translated  Content  Et  Name
   * @description The name of the collection or section.
   */
  translated__content__et__name?: string;
  /**
   * Translated  Content  Et  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__et__type?: "None" | "group_content";
  /**
   * Translated  Content  Fi  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__fi__description?: string;
  /**
   * Translated  Content  Fi  Name
   * @description The name of the collection or section.
   */
  translated__content__fi__name?: string;
  /**
   * Translated  Content  Fi  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__fi__type?: "None" | "group_content";
  /**
   * Translated  Content  Fr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__fr__description?: string;
  /**
   * Translated  Content  Fr  Name
   * @description The name of the collection or section.
   */
  translated__content__fr__name?: string;
  /**
   * Translated  Content  Fr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__fr__type?: "None" | "group_content";
  /**
   * Translated  Content  He  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__he__description?: string;
  /**
   * Translated  Content  He  Name
   * @description The name of the collection or section.
   */
  translated__content__he__name?: string;
  /**
   * Translated  Content  He  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__he__type?: "None" | "group_content";
  /**
   * Translated  Content  Hr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__hr__description?: string;
  /**
   * Translated  Content  Hr  Name
   * @description The name of the collection or section.
   */
  translated__content__hr__name?: string;
  /**
   * Translated  Content  Hr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__hr__type?: "None" | "group_content";
  /**
   * Translated  Content  Hu  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__hu__description?: string;
  /**
   * Translated  Content  Hu  Name
   * @description The name of the collection or section.
   */
  translated__content__hu__name?: string;
  /**
   * Translated  Content  Hu  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__hu__type?: "None" | "group_content";
  /**
   * Translated  Content  Id  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__id__description?: string;
  /**
   * Translated  Content  Id  Name
   * @description The name of the collection or section.
   */
  translated__content__id__name?: string;
  /**
   * Translated  Content  Id  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__id__type?: "None" | "group_content";
  /**
   * Translated  Content  It  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__it__description?: string;
  /**
   * Translated  Content  It  Name
   * @description The name of the collection or section.
   */
  translated__content__it__name?: string;
  /**
   * Translated  Content  It  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__it__type?: "None" | "group_content";
  /**
   * Translated  Content  Ja  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ja__description?: string;
  /**
   * Translated  Content  Ja  Name
   * @description The name of the collection or section.
   */
  translated__content__ja__name?: string;
  /**
   * Translated  Content  Ja  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ja__type?: "None" | "group_content";
  /**
   * Translated  Content  Ko  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ko__description?: string;
  /**
   * Translated  Content  Ko  Name
   * @description The name of the collection or section.
   */
  translated__content__ko__name?: string;
  /**
   * Translated  Content  Ko  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ko__type?: "None" | "group_content";
  /**
   * Translated  Content  Lt  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__lt__description?: string;
  /**
   * Translated  Content  Lt  Name
   * @description The name of the collection or section.
   */
  translated__content__lt__name?: string;
  /**
   * Translated  Content  Lt  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__lt__type?: "None" | "group_content";
  /**
   * Translated  Content  Lv  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__lv__description?: string;
  /**
   * Translated  Content  Lv  Name
   * @description The name of the collection or section.
   */
  translated__content__lv__name?: string;
  /**
   * Translated  Content  Lv  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__lv__type?: "None" | "group_content";
  /**
   * Translated  Content  Mn  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__mn__description?: string;
  /**
   * Translated  Content  Mn  Name
   * @description The name of the collection or section.
   */
  translated__content__mn__name?: string;
  /**
   * Translated  Content  Mn  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__mn__type?: "None" | "group_content";
  /**
   * Translated  Content  Nb  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__nb__description?: string;
  /**
   * Translated  Content  Nb  Name
   * @description The name of the collection or section.
   */
  translated__content__nb__name?: string;
  /**
   * Translated  Content  Nb  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__nb__type?: "None" | "group_content";
  /**
   * Translated  Content  Nl  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__nl__description?: string;
  /**
   * Translated  Content  Nl  Name
   * @description The name of the collection or section.
   */
  translated__content__nl__name?: string;
  /**
   * Translated  Content  Nl  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__nl__type?: "None" | "group_content";
  /**
   * Translated  Content  Pl  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__pl__description?: string;
  /**
   * Translated  Content  Pl  Name
   * @description The name of the collection or section.
   */
  translated__content__pl__name?: string;
  /**
   * Translated  Content  Pl  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__pl__type?: "None" | "group_content";
  /**
   * Translated  Content  Pt  Br  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__pt__BR__description?: string;
  /**
   * Translated  Content  Pt  Br  Name
   * @description The name of the collection or section.
   */
  translated__content__pt__BR__name?: string;
  /**
   * Translated  Content  Pt  Br  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__pt__BR__type?: "None" | "group_content";
  /**
   * Translated  Content  Pt  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__pt__description?: string;
  /**
   * Translated  Content  Pt  Name
   * @description The name of the collection or section.
   */
  translated__content__pt__name?: string;
  /**
   * Translated  Content  Pt  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__pt__type?: "None" | "group_content";
  /**
   * Translated  Content  Ro  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ro__description?: string;
  /**
   * Translated  Content  Ro  Name
   * @description The name of the collection or section.
   */
  translated__content__ro__name?: string;
  /**
   * Translated  Content  Ro  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ro__type?: "None" | "group_content";
  /**
   * Translated  Content  Ru  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__ru__description?: string;
  /**
   * Translated  Content  Ru  Name
   * @description The name of the collection or section.
   */
  translated__content__ru__name?: string;
  /**
   * Translated  Content  Ru  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__ru__type?: "None" | "group_content";
  /**
   * Translated  Content  Sl  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__sl__description?: string;
  /**
   * Translated  Content  Sl  Name
   * @description The name of the collection or section.
   */
  translated__content__sl__name?: string;
  /**
   * Translated  Content  Sl  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__sl__type?: "None" | "group_content";
  /**
   * Translated  Content  Sr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__sr__description?: string;
  /**
   * Translated  Content  Sr  Name
   * @description The name of the collection or section.
   */
  translated__content__sr__name?: string;
  /**
   * Translated  Content  Sr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__sr__type?: "None" | "group_content";
  /**
   * Translated  Content  Sv  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__sv__description?: string;
  /**
   * Translated  Content  Sv  Name
   * @description The name of the collection or section.
   */
  translated__content__sv__name?: string;
  /**
   * Translated  Content  Sv  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__sv__type?: "None" | "group_content";
  /**
   * Translated  Content  Tr  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__tr__description?: string;
  /**
   * Translated  Content  Tr  Name
   * @description The name of the collection or section.
   */
  translated__content__tr__name?: string;
  /**
   * Translated  Content  Tr  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__tr__type?: "None" | "group_content";
  /**
   * Translated  Content  Type
   * @description The type of object - group_translated_content.
   * @enum {string}
   */
  translated__content__type?: "None" | "group_translated_content";
  /**
   * Translated  Content  Vi  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__vi__description?: string;
  /**
   * Translated  Content  Vi  Name
   * @description The name of the collection or section.
   */
  translated__content__vi__name?: string;
  /**
   * Translated  Content  Vi  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__vi__type?: "None" | "group_content";
  /**
   * Translated  Content  Zh  Cn  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__zh__CN__description?: string;
  /**
   * Translated  Content  Zh  Cn  Name
   * @description The name of the collection or section.
   */
  translated__content__zh__CN__name?: string;
  /**
   * Translated  Content  Zh  Cn  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__zh__CN__type?: "None" | "group_content";
  /**
   * Translated  Content  Zh  Tw  Description
   * @description The description of the collection. Only available for collections.
   */
  translated__content__zh__TW__description?: string;
  /**
   * Translated  Content  Zh  Tw  Name
   * @description The name of the collection or section.
   */
  translated__content__zh__TW__name?: string;
  /**
   * Translated  Content  Zh  Tw  Type
   * @description The type of object - `group_content` .
   * @enum {string}
   */
  translated__content__zh__TW__type?: "None" | "group_content";
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_A_COLLECTION tool output.
 */
type INTERCOM_UPDATE_A_COLLECTION_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_A_COMPANY tool input.
 */
type INTERCOM_UPDATE_A_COMPANY_INPUT = {
  /**
   * Id
   * @description The unique identifier for the company which is given by Intercom
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_A_COMPANY tool output.
 */
type INTERCOM_UPDATE_A_COMPANY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_A_CONTACT tool input.
 */
type INTERCOM_UPDATE_A_CONTACT_INPUT = {
  /**
   * Id
   * @description id
   */
  id?: string;
};

/**
 * Type of INTERCOM's INTERCOM_UPDATE_A_CONTACT tool output.
 */
type INTERCOM_UPDATE_A_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "INTERCOM".
 */
export type INTERCOM_TOOL_INPUTS = {
  ADD_SUBSCRIPTION_TO_A_CONTACT: INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT_INPUT
  ADD_TAG_TO_A_CONTACT: INTERCOM_ADD_TAG_TO_A_CONTACT_INPUT
  ASSIGN_CONVERSATION: INTERCOM_ASSIGN_CONVERSATION_INPUT
  ATTACH_A_CONTACT_TO_A_COMPANY: INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY_INPUT
  CLOSE_CONVERSATION: INTERCOM_CLOSE_CONVERSATION_INPUT
  CREATE_AN_ARTICLE: INTERCOM_CREATE_AN_ARTICLE_INPUT
  CREATE_A_COLLECTION: INTERCOM_CREATE_A_COLLECTION_INPUT
  CREATE_A_NOTE: INTERCOM_CREATE_A_NOTE_INPUT
  CREATE_CONVERSATION: INTERCOM_CREATE_CONVERSATION_INPUT
  CREATE_OR_UPDATE_A_COMPANY: INTERCOM_CREATE_OR_UPDATE_A_COMPANY_INPUT
  DELETE_AN_ARTICLE: INTERCOM_DELETE_AN_ARTICLE_INPUT
  DELETE_A_COLLECTION: INTERCOM_DELETE_A_COLLECTION_INPUT
  DELETE_A_COMPANY: INTERCOM_DELETE_A_COMPANY_INPUT
  DELETE_A_CONTACT: INTERCOM_DELETE_A_CONTACT_INPUT
  DETACH_A_CONTACT_FROM_A_COMPANY: INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY_INPUT
  GET_A_CONTACT: INTERCOM_GET_A_CONTACT_INPUT
  GET_CONVERSATION: INTERCOM_GET_CONVERSATION_INPUT
  IDENTIFY_AN_ADMIN: INTERCOM_IDENTIFY_AN_ADMIN_INPUT
  LIST_ALL_ACTIVITY_LOGS: INTERCOM_LIST_ALL_ACTIVITY_LOGS_INPUT
  LIST_ALL_ADMINS: INTERCOM_LIST_ALL_ADMINS_INPUT
  LIST_ALL_ARTICLES: INTERCOM_LIST_ALL_ARTICLES_INPUT
  LIST_ALL_COLLECTIONS: INTERCOM_LIST_ALL_COLLECTIONS_INPUT
  LIST_ALL_COMPANIES: INTERCOM_LIST_ALL_COMPANIES_INPUT
  LIST_ALL_HELP_CENTERS: INTERCOM_LIST_ALL_HELP_CENTERS_INPUT
  LIST_ALL_NOTES: INTERCOM_LIST_ALL_NOTES_INPUT
  LIST_ATTACHED_COMPANIES_FOR_CONTACT: INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT_INPUT
  LIST_ATTACHED_CONTACTS: INTERCOM_LIST_ATTACHED_CONTACTS_INPUT
  LIST_ATTACHED_SEGMENTS_FOR_COMPANIES: INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES_INPUT
  LIST_ATTACHED_SEGMENTS_FOR_CONTACT: INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT_INPUT
  LIST_CONVERSATIONS: INTERCOM_LIST_CONVERSATIONS_INPUT
  LIST_SUBSCRIPTIONS_FOR_A_CONTACT: INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT_INPUT
  LIST_TAGS_ATTACHED_TO_A_CONTACT: INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT_INPUT
  MERGE_A_LEAD_AND_A_USER: INTERCOM_MERGE_A_LEAD_AND_A_USER_INPUT
  REMOVE_SUBSCRIPTION_FROM_A_CONTACT: INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT_INPUT
  REMOVE_TAG_FROM_A_CONTACT: INTERCOM_REMOVE_TAG_FROM_A_CONTACT_INPUT
  REOPEN_CONVERSATION: INTERCOM_REOPEN_CONVERSATION_INPUT
  REPLY_TO_CONVERSATION: INTERCOM_REPLY_TO_CONVERSATION_INPUT
  RETRIEVE_AN_ADMIN: INTERCOM_RETRIEVE_AN_ADMIN_INPUT
  RETRIEVE_AN_ARTICLE: INTERCOM_RETRIEVE_AN_ARTICLE_INPUT
  RETRIEVE_A_COLLECTION: INTERCOM_RETRIEVE_A_COLLECTION_INPUT
  RETRIEVE_A_COMPANY_BY_ID: INTERCOM_RETRIEVE_A_COMPANY_BY_ID_INPUT
  RETRIEVE_A_HELP_CENTER: INTERCOM_RETRIEVE_A_HELP_CENTER_INPUT
  RETRIEVE_COMPANIES: INTERCOM_RETRIEVE_COMPANIES_INPUT
  SCROLL_OVER_ALL_COMPANIES: INTERCOM_SCROLL_OVER_ALL_COMPANIES_INPUT
  SEARCH_CONVERSATIONS: INTERCOM_SEARCH_CONVERSATIONS_INPUT
  SEARCH_FOR_ARTICLES: INTERCOM_SEARCH_FOR_ARTICLES_INPUT
  SET_AN_ADMIN_TO_AWAY: INTERCOM_SET_AN_ADMIN_TO_AWAY_INPUT
  UPDATE_AN_ARTICLE: INTERCOM_UPDATE_AN_ARTICLE_INPUT
  UPDATE_A_COLLECTION: INTERCOM_UPDATE_A_COLLECTION_INPUT
  UPDATE_A_COMPANY: INTERCOM_UPDATE_A_COMPANY_INPUT
  UPDATE_A_CONTACT: INTERCOM_UPDATE_A_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INTERCOM".
 */
export type INTERCOM_TOOL_OUTPUTS = {
  ADD_SUBSCRIPTION_TO_A_CONTACT: INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT_OUTPUT
  ADD_TAG_TO_A_CONTACT: INTERCOM_ADD_TAG_TO_A_CONTACT_OUTPUT
  ASSIGN_CONVERSATION: INTERCOM_ASSIGN_CONVERSATION_OUTPUT
  ATTACH_A_CONTACT_TO_A_COMPANY: INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY_OUTPUT
  CLOSE_CONVERSATION: INTERCOM_CLOSE_CONVERSATION_OUTPUT
  CREATE_AN_ARTICLE: INTERCOM_CREATE_AN_ARTICLE_OUTPUT
  CREATE_A_COLLECTION: INTERCOM_CREATE_A_COLLECTION_OUTPUT
  CREATE_A_NOTE: INTERCOM_CREATE_A_NOTE_OUTPUT
  CREATE_CONVERSATION: INTERCOM_CREATE_CONVERSATION_OUTPUT
  CREATE_OR_UPDATE_A_COMPANY: INTERCOM_CREATE_OR_UPDATE_A_COMPANY_OUTPUT
  DELETE_AN_ARTICLE: INTERCOM_DELETE_AN_ARTICLE_OUTPUT
  DELETE_A_COLLECTION: INTERCOM_DELETE_A_COLLECTION_OUTPUT
  DELETE_A_COMPANY: INTERCOM_DELETE_A_COMPANY_OUTPUT
  DELETE_A_CONTACT: INTERCOM_DELETE_A_CONTACT_OUTPUT
  DETACH_A_CONTACT_FROM_A_COMPANY: INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY_OUTPUT
  GET_A_CONTACT: INTERCOM_GET_A_CONTACT_OUTPUT
  GET_CONVERSATION: INTERCOM_GET_CONVERSATION_OUTPUT
  IDENTIFY_AN_ADMIN: INTERCOM_IDENTIFY_AN_ADMIN_OUTPUT
  LIST_ALL_ACTIVITY_LOGS: INTERCOM_LIST_ALL_ACTIVITY_LOGS_OUTPUT
  LIST_ALL_ADMINS: INTERCOM_LIST_ALL_ADMINS_OUTPUT
  LIST_ALL_ARTICLES: INTERCOM_LIST_ALL_ARTICLES_OUTPUT
  LIST_ALL_COLLECTIONS: INTERCOM_LIST_ALL_COLLECTIONS_OUTPUT
  LIST_ALL_COMPANIES: INTERCOM_LIST_ALL_COMPANIES_OUTPUT
  LIST_ALL_HELP_CENTERS: INTERCOM_LIST_ALL_HELP_CENTERS_OUTPUT
  LIST_ALL_NOTES: INTERCOM_LIST_ALL_NOTES_OUTPUT
  LIST_ATTACHED_COMPANIES_FOR_CONTACT: INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT_OUTPUT
  LIST_ATTACHED_CONTACTS: INTERCOM_LIST_ATTACHED_CONTACTS_OUTPUT
  LIST_ATTACHED_SEGMENTS_FOR_COMPANIES: INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES_OUTPUT
  LIST_ATTACHED_SEGMENTS_FOR_CONTACT: INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT_OUTPUT
  LIST_CONVERSATIONS: INTERCOM_LIST_CONVERSATIONS_OUTPUT
  LIST_SUBSCRIPTIONS_FOR_A_CONTACT: INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT_OUTPUT
  LIST_TAGS_ATTACHED_TO_A_CONTACT: INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT_OUTPUT
  MERGE_A_LEAD_AND_A_USER: INTERCOM_MERGE_A_LEAD_AND_A_USER_OUTPUT
  REMOVE_SUBSCRIPTION_FROM_A_CONTACT: INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT_OUTPUT
  REMOVE_TAG_FROM_A_CONTACT: INTERCOM_REMOVE_TAG_FROM_A_CONTACT_OUTPUT
  REOPEN_CONVERSATION: INTERCOM_REOPEN_CONVERSATION_OUTPUT
  REPLY_TO_CONVERSATION: INTERCOM_REPLY_TO_CONVERSATION_OUTPUT
  RETRIEVE_AN_ADMIN: INTERCOM_RETRIEVE_AN_ADMIN_OUTPUT
  RETRIEVE_AN_ARTICLE: INTERCOM_RETRIEVE_AN_ARTICLE_OUTPUT
  RETRIEVE_A_COLLECTION: INTERCOM_RETRIEVE_A_COLLECTION_OUTPUT
  RETRIEVE_A_COMPANY_BY_ID: INTERCOM_RETRIEVE_A_COMPANY_BY_ID_OUTPUT
  RETRIEVE_A_HELP_CENTER: INTERCOM_RETRIEVE_A_HELP_CENTER_OUTPUT
  RETRIEVE_COMPANIES: INTERCOM_RETRIEVE_COMPANIES_OUTPUT
  SCROLL_OVER_ALL_COMPANIES: INTERCOM_SCROLL_OVER_ALL_COMPANIES_OUTPUT
  SEARCH_CONVERSATIONS: INTERCOM_SEARCH_CONVERSATIONS_OUTPUT
  SEARCH_FOR_ARTICLES: INTERCOM_SEARCH_FOR_ARTICLES_OUTPUT
  SET_AN_ADMIN_TO_AWAY: INTERCOM_SET_AN_ADMIN_TO_AWAY_OUTPUT
  UPDATE_AN_ARTICLE: INTERCOM_UPDATE_AN_ARTICLE_OUTPUT
  UPDATE_A_COLLECTION: INTERCOM_UPDATE_A_COLLECTION_OUTPUT
  UPDATE_A_COMPANY: INTERCOM_UPDATE_A_COMPANY_OUTPUT
  UPDATE_A_CONTACT: INTERCOM_UPDATE_A_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INTERCOM toolkit.
 */
export const INTERCOM = {
  slug: "intercom",
  tools: {
    /**
     * You can add a specific subscription to a contact. in intercom, we have two different subscription types based on user consent - opt-out and opt-in: 1.attaching a contact to an opt-out subscription type will opt that user out from receiving messages related to that subscription type. 2.attaching a contact to an opt-in subscription type will opt that user in to receiving messages related to that subscription type. this will return a subscription type model for the subscription type that was added to the contact.
     */
    ADD_SUBSCRIPTION_TO_A_CONTACT: "INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT",
    /**
     * You can tag a specific contact. this will return a tag object for the tag that was added to the contact.
     */
    ADD_TAG_TO_A_CONTACT: "INTERCOM_ADD_TAG_TO_A_CONTACT",
    /**
     * Assigns a conversation to a specific admin or team in intercom
     */
    ASSIGN_CONVERSATION: "INTERCOM_ASSIGN_CONVERSATION",
    /**
     * You can attach a company to a single contact.
     */
    ATTACH_A_CONTACT_TO_A_COMPANY: "INTERCOM_ATTACH_A_CONTACT_TO_A_COMPANY",
    /**
     * Closes a conversation in intercom, marking it as resolved
     */
    CLOSE_CONVERSATION: "INTERCOM_CLOSE_CONVERSATION",
    /**
     * You can create a new article by making a post request to `https://api.intercom.io/articles`.
     */
    CREATE_AN_ARTICLE: "INTERCOM_CREATE_AN_ARTICLE",
    /**
     * You can create a new collection by making a post request to `https://api.intercom.io/help center/collections.`
     */
    CREATE_A_COLLECTION: "INTERCOM_CREATE_A_COLLECTION",
    /**
     * You can add a note to a single contact.
     */
    CREATE_A_NOTE: "INTERCOM_CREATE_A_NOTE",
    /**
     * Creates a new conversation in intercom
     */
    CREATE_CONVERSATION: "INTERCOM_CREATE_CONVERSATION",
    /**
     * You can create or update a company. companies will be only visible in intercom when there is at least one associated user. companies are looked up via `company id` in a `post` request, if not found via `company id`, the new company will be created, if found, that company will be updated. {% admonition type="attention" name="using `company id`" %} you can set a unique `company id` value when creating a company. however, it is not possible to update `company id`. be sure to set a unique value once upon creation of the company. {% /admonition %}
     */
    CREATE_OR_UPDATE_A_COMPANY: "INTERCOM_CREATE_OR_UPDATE_A_COMPANY",
    /**
     * You can delete a single article by making a delete request to `https://api.intercom.io/articles/<id>`.
     */
    DELETE_AN_ARTICLE: "INTERCOM_DELETE_AN_ARTICLE",
    /**
     * You can delete a single collection by making a delete request to `https://api.intercom.io/collections/<id>`.
     */
    DELETE_A_COLLECTION: "INTERCOM_DELETE_A_COLLECTION",
    /**
     * You can delete a single company.
     */
    DELETE_A_COMPANY: "INTERCOM_DELETE_A_COMPANY",
    /**
     * You can delete a single contact.
     */
    DELETE_A_CONTACT: "INTERCOM_DELETE_A_CONTACT",
    /**
     * You can detach a company from a single contact.
     */
    DETACH_A_CONTACT_FROM_A_COMPANY: "INTERCOM_DETACH_A_CONTACT_FROM_A_COMPANY",
    /**
     * You can fetch the details of a single contact.
     */
    GET_A_CONTACT: "INTERCOM_GET_A_CONTACT",
    /**
     * Retrieves a specific conversation by id with all messages and details
     */
    GET_CONVERSATION: "INTERCOM_GET_CONVERSATION",
    /**
     * You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology). > 🚧 single sign on > > if you are building a custom "log in with intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.
     */
    IDENTIFY_AN_ADMIN: "INTERCOM_IDENTIFY_AN_ADMIN",
    /**
     * You can get a log of activities by all admins in an app.
     */
    LIST_ALL_ACTIVITY_LOGS: "INTERCOM_LIST_ALL_ACTIVITY_LOGS",
    /**
     * You can fetch a list of admins for a given workspace.
     */
    LIST_ALL_ADMINS: "INTERCOM_LIST_ALL_ADMINS",
    /**
     * You can fetch a list of all articles by making a get request to `https://api.intercom.io/articles`. > 📘 how are the articles sorted and ordered? > > articles will be returned in descending order on the `updated at` attribute. this means if you need to iterate through results then we'll show the most recently updated articles first.
     */
    LIST_ALL_ARTICLES: "INTERCOM_LIST_ALL_ARTICLES",
    /**
     * You can fetch a list of all collections by making a get request to `https://api.intercom.io/help center/collections`. collections will be returned in descending order on the `updated at` attribute. this means if you need to iterate through results then we'll show the most recently updated collections first.
     */
    LIST_ALL_COLLECTIONS: "INTERCOM_LIST_ALL_COLLECTIONS",
    /**
     * You can list companies. the company list is sorted by the `last request at` field and by default is ordered descending, most recently requested first. note that the api does not include companies who have no associated users in list responses. when using the companies endpoint and the pages object to iterate through the returned companies, there is a limit of 10,000 companies that can be returned. if you need to list or iterate on more than 10,000 companies, please use the [scroll api](https://developers.intercom.com/reference#iterating-over-all-companies). {% admonition type="warning" name="pagination" %} you can use pagination to limit the number of results returned. the default is `20` results per page. see the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting after` param. {% /admonition %}
     */
    LIST_ALL_COMPANIES: "INTERCOM_LIST_ALL_COMPANIES",
    /**
     * You can list all help centers by making a get request to `https://api.intercom.io/help center/help centers`.
     */
    LIST_ALL_HELP_CENTERS: "INTERCOM_LIST_ALL_HELP_CENTERS",
    /**
     * You can fetch a list of notes that are associated to a contact.
     */
    LIST_ALL_NOTES: "INTERCOM_LIST_ALL_NOTES",
    /**
     * You can fetch a list of companies that are associated to a contact.
     */
    LIST_ATTACHED_COMPANIES_FOR_CONTACT: "INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT",
    /**
     * You can fetch a list of all contacts that belong to a company.
     */
    LIST_ATTACHED_CONTACTS: "INTERCOM_LIST_ATTACHED_CONTACTS",
    /**
     * You can fetch a list of all segments that belong to a company.
     */
    LIST_ATTACHED_SEGMENTS_FOR_COMPANIES: "INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES",
    /**
     * You can fetch a list of segments that are associated to a contact.
     */
    LIST_ATTACHED_SEGMENTS_FOR_CONTACT: "INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT",
    /**
     * Lists conversations from intercom with filtering and pagination support
     */
    LIST_CONVERSATIONS: "INTERCOM_LIST_CONVERSATIONS",
    /**
     * You can fetch a list of subscription types that are attached to a contact. these can be subscriptions that a user has 'opted-in' to or has 'opted-out' from, depending on the subscription type. this will return a list of subscription type objects that the contact is associated with. the data property will show a combined list of: 1.opt-out subscription types that the user has opted-out from. 2.opt-in subscription types that the user has opted-in to receiving.
     */
    LIST_SUBSCRIPTIONS_FOR_A_CONTACT: "INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT",
    /**
     * You can fetch a list of all tags that are attached to a specific contact.
     */
    LIST_TAGS_ATTACHED_TO_A_CONTACT: "INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT",
    /**
     * You can merge a contact with a `role` of `lead` into a contact with a `role` of `user`.
     */
    MERGE_A_LEAD_AND_A_USER: "INTERCOM_MERGE_A_LEAD_AND_A_USER",
    /**
     * You can remove a specific subscription from a contact. this will return a subscription type model for the subscription type that was removed from the contact.
     */
    REMOVE_SUBSCRIPTION_FROM_A_CONTACT: "INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT",
    /**
     * You can remove tag from a specific contact. this will return a tag object for the tag that was removed from the contact.
     */
    REMOVE_TAG_FROM_A_CONTACT: "INTERCOM_REMOVE_TAG_FROM_A_CONTACT",
    /**
     * Reopens a closed conversation in intercom
     */
    REOPEN_CONVERSATION: "INTERCOM_REOPEN_CONVERSATION",
    /**
     * Sends a reply to an existing conversation in intercom
     */
    REPLY_TO_CONVERSATION: "INTERCOM_REPLY_TO_CONVERSATION",
    /**
     * You can retrieve the details of a single admin.
     */
    RETRIEVE_AN_ADMIN: "INTERCOM_RETRIEVE_AN_ADMIN",
    /**
     * You can fetch the details of a single article by making a get request to `https://api.intercom.io/articles/<id>`.
     */
    RETRIEVE_AN_ARTICLE: "INTERCOM_RETRIEVE_AN_ARTICLE",
    /**
     * You can fetch the details of a single collection by making a get request to `https://api.intercom.io/help center/collections/<id>`.
     */
    RETRIEVE_A_COLLECTION: "INTERCOM_RETRIEVE_A_COLLECTION",
    /**
     * You can fetch a single company.
     */
    RETRIEVE_A_COMPANY_BY_ID: "INTERCOM_RETRIEVE_A_COMPANY_BY_ID",
    /**
     * You can fetch the details of a single help center by making a get request to `https://api.intercom.io/help center/help center/<id>`.
     */
    RETRIEVE_A_HELP_CENTER: "INTERCOM_RETRIEVE_A_HELP_CENTER",
    /**
     * You can fetch a single company by passing in `company id` or `name`. `https://api.intercom.io/companies?name={name}` `https://api.intercom.io/companies?company id={company id}` you can fetch all companies and filter by `segment id` or `tag id` as a query parameter. `https://api.intercom.io/companies?tag id={tag id}` `https://api.intercom.io/companies?segment id={segment id}`
     */
    RETRIEVE_COMPANIES: "INTERCOM_RETRIEVE_COMPANIES",
    /**
     * The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. the scroll api provides an efficient mechanism for iterating over all companies in a dataset. - each app can only have 1 scroll open at a time. you'll get an error message if you try to have more than one open per app. you can get the first page of companies by simply sending a get request to the scroll endpoint. for subsequent requests you will need to use the scroll parameter from the response type="danger" name="scroll network timeouts". since scroll is often used on large datasets network errors such as timeouts can be encountered. when this occurs you will see a http 500 error with the following message: "request failed due to an internal network error. please restart the scroll operation." if this happens, you will need to restart your scroll query.
     */
    SCROLL_OVER_ALL_COMPANIES: "INTERCOM_SCROLL_OVER_ALL_COMPANIES",
    /**
     * Searches for conversations using query string with support for filtering and sorting
     */
    SEARCH_CONVERSATIONS: "INTERCOM_SEARCH_CONVERSATIONS",
    /**
     * You can search for articles by making a get request to `https://api.intercom.io/articles/search`.
     */
    SEARCH_FOR_ARTICLES: "INTERCOM_SEARCH_FOR_ARTICLES",
    /**
     * You can set an admin as away for the inbox.
     */
    SET_AN_ADMIN_TO_AWAY: "INTERCOM_SET_AN_ADMIN_TO_AWAY",
    /**
     * You can update the details of a single article by making a put request to `https://api.intercom.io/articles/<id>`.
     */
    UPDATE_AN_ARTICLE: "INTERCOM_UPDATE_AN_ARTICLE",
    /**
     * You can update the details of a single collection by making a put request to `https://api.intercom.io/collections/<id>`.
     */
    UPDATE_A_COLLECTION: "INTERCOM_UPDATE_A_COLLECTION",
    /**
     * You can update a single company using the intercom provisioned `id`. {% admonition type="attention" name="using `company id`" %} when updating a company it is not possible to update `company id`. this can only be set once upon creation of the company. {% /admonition %}
     */
    UPDATE_A_COMPANY: "INTERCOM_UPDATE_A_COMPANY",
    /**
     * You can update an existing contact (ie. user or lead).
     */
    UPDATE_A_CONTACT: "INTERCOM_UPDATE_A_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INTERCOM".
 */
export type INTERCOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INTERCOM".
 */
export type INTERCOM_TRIGGER_EVENTS = {}
