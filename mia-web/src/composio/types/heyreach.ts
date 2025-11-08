// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HEYREACH's HEYREACH_CHECK_API_KEY tool input.
 */
type HEYREACH_CHECK_API_KEY_INPUT = object;

/**
 * Type of HEYREACH's HEYREACH_CHECK_API_KEY tool output.
 */
type HEYREACH_CHECK_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_CREATE_EMPTY_LIST tool input.
 */
type HEYREACH_CREATE_EMPTY_LIST_INPUT = {
  /**
   * Name
   * @description The name of the list to create.
   */
  name?: string;
  /**
   * Type
   * @description The type of list to create. 'USER_LIST' for leads, 'COMPANY_LIST' for companies. Defaults to 'USER_LIST'.
   * @default USER_LIST
   * @enum {string|null}
   */
  type: "COMPANY_LIST" | "USER_LIST" | null;
};

/**
 * Type of HEYREACH's HEYREACH_CREATE_EMPTY_LIST tool output.
 */
type HEYREACH_CREATE_EMPTY_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description Associated campaign IDs, if any.
       * @default null
       */
      campaigns: number[] | null;
      /**
       * Count
       * @description Number of items in the list (always 0 on creation).
       */
      count: number;
      /**
       * Creation Time
       * Format: date-time
       * @description Timestamp when the list was created.
       */
      creationTime: string;
      /**
       * Id
       * @description The unique identifier of the created list.
       */
      id: number;
      /**
       * Is Deleted
       * @description Indicates whether the list is deleted.
       */
      isDeleted: boolean;
      /**
       * List Type
       * @description The type of the created list.
       * @enum {string}
       */
      listType: "COMPANY_LIST" | "USER_LIST";
      /**
       * Name
       * @description The name of the created list.
       */
      name: string;
      /**
       * Search
       * @description Search criteria applied to the list, if any.
       * @default null
       */
      search: string | null;
      /**
       * Status
       * @description Status of the list.
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_CREATE_WEBHOOK tool input.
 */
type HEYREACH_CREATE_WEBHOOK_INPUT = {
  /**
   * Campaign Ids
   * @description List of campaign IDs to filter events. If empty, listens for the eventType across all campaigns.
   */
  campaignIds?: number[];
  /**
   * Event Type
   * @description Type of event that triggers the webhook.
   * @enum {string}
   */
  eventType?: "CONNECTION_REQUEST_SENT" | "CONNECTION_REQUEST_ACCEPTED" | "MESSAGE_SENT" | "MESSAGE_REPLY_RECEIVED" | "INMAIL_SENT" | "INMAIL_REPLY_RECEIVED" | "FOLLOW_SENT" | "LIKED_POST" | "VIEWED_PROFILE" | "CAMPAIGN_COMPLETED" | "LEAD_TAG_UPDATED";
  /**
   * Webhook Name
   * @description Descriptive name for the webhook, used for identification.
   */
  webhookName?: string;
  /**
   * Webhook Url
   * @description Destination URL where HeyReach will send POST event payloads.
   */
  webhookUrl?: string;
};

/**
 * Type of HEYREACH's HEYREACH_CREATE_WEBHOOK tool output.
 */
type HEYREACH_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_DELETE_WEBHOOK tool input.
 */
type HEYREACH_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhookId?: string;
};

/**
 * Type of HEYREACH's HEYREACH_DELETE_WEBHOOK tool output.
 */
type HEYREACH_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_CAMPAIGNS tool input.
 */
type HEYREACH_GET_ALL_CAMPAIGNS_INPUT = {
  /**
   * Account Ids
   * @description Filter campaigns by LinkedIn account IDs
   * @default null
   */
  accountIds: number[] | null;
  /**
   * Keyword
   * @description Keyword to filter campaigns by name
   * @default null
   */
  keyword: string | null;
  /**
   * Limit
   * @description Maximum number of campaigns to return (1-100)
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Number of campaigns to skip
   * @default 0
   */
  offset: number;
  /**
   * Statuses
   * @description Filter campaigns by statuses, e.g., ['DRAFT','PAUSED']
   * @default null
   */
  statuses: string[] | null;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_CAMPAIGNS tool output.
 */
type HEYREACH_GET_ALL_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of campaigns returned in this page
       */
      items: {
          /**
           * Campaign Account Ids
           * @description List of LinkedIn account IDs associated with the campaign
           */
          campaignAccountIds: number[];
          /**
           * Creation Time
           * @description Campaign creation timestamp in ISO 8601 format
           */
          creationTime: string;
          /**
           * Exclude Already Messaged Campaign Accounts
           * @description Exclude users already messaged on campaign accounts
           */
          excludeAlreadyMessagedCampaignAccounts: boolean;
          /**
           * Exclude Already Messaged Global
           * @description Exclude users already messaged globally
           */
          excludeAlreadyMessagedGlobal: boolean;
          /**
           * Exclude First Connection Campaign Accounts
           * @description Exclude first connections on campaign accounts
           */
          excludeFirstConnectionCampaignAccounts: boolean;
          /**
           * Exclude First Connection Global
           * @description Exclude first connections globally
           */
          excludeFirstConnectionGlobal: boolean;
          /**
           * Exclude List Id
           * @description ID of an exclusion list, if any
           * @default null
           */
          excludeListId: number | null;
          /**
           * Exclude No Profile Picture
           * @description Exclude users without a profile picture
           */
          excludeNoProfilePicture: boolean;
          /**
           * Id
           * @description Campaign ID
           */
          id: number;
          /**
           * Linked In User List Id
           * @description ID of the associated LinkedIn user list
           */
          linkedInUserListId: number;
          /**
           * Linked In User List Name
           * @description Name of the associated LinkedIn user list
           */
          linkedInUserListName: string;
          /**
           * Name
           * @description Name of the campaign
           */
          name: string;
          /**
           * Progress Stats
           * @description Progress statistics for this campaign
           */
          progressStats: {
              /**
               * Total Users
               * @description Total number of users assigned to the campaign
               */
              totalUsers: number;
              /**
               * Total Users Failed
               * @description Number of users failed
               */
              totalUsersFailed: number;
              /**
               * Total Users Finished
               * @description Number of users finished
               */
              totalUsersFinished: number;
              /**
               * Total Users In Progress
               * @description Number of users currently in progress
               */
              totalUsersInProgress: number;
              /**
               * Total Users Pending
               * @description Number of users pending
               */
              totalUsersPending: number;
          };
          /**
           * Status
           * @description Current status of the campaign, e.g., DRAFT, PAUSED
           * @default null
           */
          status: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of campaigns matching the filters
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_LEADS tool input.
 */
type HEYREACH_GET_ALL_LEADS_INPUT = {
  /**
   * Created From
   * @description ISO 8601 start date for filtering leads by creation time.
   * @default null
   */
  createdFrom: string | null;
  /**
   * Created To
   * @description ISO 8601 end date for filtering leads by creation time.
   * @default null
   */
  createdTo: string | null;
  /**
   * Keyword
   * @description Search term to filter leads by name or other relevant fields.
   * @default null
   */
  keyword: string | null;
  /**
   * Lead Linked In Id
   * @description LinkedIn ID to filter leads.
   * @default null
   */
  leadLinkedInId: string | null;
  /**
   * Lead Profile Url
   * @description LinkedIn profile URL to filter leads.
   * @default null
   */
  leadProfileUrl: string | null;
  /**
   * Limit
   * @description The maximum number of records to return, between 1 and 1000.
   * @default 100
   */
  limit: number;
  /**
   * List Id
   * @description The ID of the lead list.
   */
  listId?: number;
  /**
   * Offset
   * @description The number of records to skip for pagination.
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_LEADS tool output.
 */
type HEYREACH_GET_ALL_LEADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of leads returned in this page.
       */
      items: {
          /**
           * About
           * @description Additional information about the lead.
           * @default null
           */
          about: string | null;
          /**
           * Company Name
           * @description Company name associated with the lead.
           * @default null
           */
          companyName: string | null;
          /**
           * Company Url
           * @description Company URL associated with the lead.
           * @default null
           */
          companyUrl: string | null;
          /**
           * Connections
           * @description Number of connections the lead has.
           */
          connections: number;
          /**
           * Custom Fields
           * @description List of custom fields associated with the lead.
           */
          customFields: {
              /**
               * Name
               * @description Name of the custom field.
               */
              name: string;
              /**
               * Value
               * @description Value of the custom field.
               */
              value: string;
          }[];
          /**
           * Email Address
           * @description Email address of the lead.
           * @default null
           */
          emailAddress: string | null;
          /**
           * First Name
           * @description First name of the lead.
           */
          firstName: string;
          /**
           * Followers
           * @description Number of followers the lead has.
           */
          followers: number;
          /**
           * Headline
           * @description Headline of the lead.
           * @default null
           */
          headline: string | null;
          /**
           * Image Url
           * @description URL of the lead's profile image.
           * @default null
           */
          imageUrl: string | null;
          /**
           * Last Name
           * @description Last name of the lead.
           */
          lastName: string;
          /**
           * Location
           * @description Location of the lead.
           * @default null
           */
          location: string | null;
          /**
           * Position
           * @description Position or job title of the lead.
           * @default null
           */
          position: string | null;
          /**
           * Profile Url
           * @description LinkedIn profile URL of the lead.
           */
          profileUrl: string;
          /**
           * Tags
           * @description List of tags associated with the lead.
           */
          tags: string[];
      }[];
      /**
       * Total Count
       * @description Total number of leads matching the criteria.
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS tool input.
 */
type HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS_INPUT = {
  /**
   * Keyword
   * @description Keyword to filter accounts by name
   * @default null
   */
  keyword: string | null;
  /**
   * Limit
   * @description Maximum number of accounts to return (1-100)
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Number of accounts to skip
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS tool output.
 */
type HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of LinkedIn accounts returned in this page
       */
      items: {
          /**
           * Active Campaigns
           * @description Number of active campaigns on the account
           */
          activeCampaigns: number;
          /**
           * Auth Is Valid
           * @description Whether the LinkedIn authentication is valid
           */
          authIsValid: boolean;
          /**
           * Email Address
           * @description Email address associated with the LinkedIn account
           */
          emailAddress: string;
          /**
           * First Name
           * @description First name of the LinkedIn account holder
           */
          firstName: string;
          /**
           * Id
           * @description LinkedIn account ID
           */
          id: number;
          /**
           * Is Active
           * @description Account activation status
           */
          isActive: boolean;
          /**
           * Is Valid Navigator
           * @description Whether Navigator integration is valid
           */
          isValidNavigator: boolean;
          /**
           * Is Valid Recruiter
           * @description Whether Recruiter integration is valid
           */
          isValidRecruiter: boolean;
          /**
           * Last Name
           * @description Last name of the LinkedIn account holder
           */
          lastName: string;
      }[];
      /**
       * Total Count
       * @description Total number of LinkedIn accounts matching filters
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_LISTS tool input.
 */
type HEYREACH_GET_ALL_LISTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of lists to return.
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Number of lists to skip for pagination.
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_LISTS tool output.
 */
type HEYREACH_GET_ALL_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of lists returned in this page.
       */
      items: {
          /**
           * Campaign Ids
           * @description Associated campaign IDs, if any.
           */
          campaignIds?: number[];
          /**
           * Creation Time
           * @description Timestamp when the list was created (ISO 8601 format).
           */
          creationTime: string;
          /**
           * Id
           * @description Unique identifier of the list.
           */
          id: number;
          /**
           * List Type
           * @description Type of the list (USER_LIST or COMPANY_LIST).
           * @enum {string}
           */
          listType: "COMPANY_LIST" | "USER_LIST";
          /**
           * Name
           * @description Name of the list.
           */
          name: string;
          /**
           * Total Items Count
           * @description Number of items in the list.
           */
          totalItemsCount: number;
      }[];
      /**
       * Total Count
       * @description Total number of lists matching the filters.
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_WEBHOOKS tool input.
 */
type HEYREACH_GET_ALL_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhooks to return
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Number of webhooks to skip for pagination
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_ALL_WEBHOOKS tool output.
 */
type HEYREACH_GET_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of webhooks in this page
       */
      items: {
          /**
           * Campaign Ids
           * @description List of campaign IDs that this webhook listens to
           */
          campaignIds: number[];
          /**
           * Event Type
           * @description Type of event that triggers the webhook
           * @enum {string}
           */
          eventType: "CONNECTION_REQUEST_SENT" | "CONNECTION_REQUEST_ACCEPTED" | "MESSAGE_SENT" | "MESSAGE_REPLY_RECEIVED" | "INMAIL_SENT" | "INMAIL_REPLY_RECEIVED" | "FOLLOW_SENT" | "LIKED_POST" | "VIEWED_PROFILE" | "CAMPAIGN_COMPLETED" | "LEAD_TAG_UPDATED";
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: number;
          /**
           * Is Active
           * @description Indicates whether the webhook is active
           */
          isActive: boolean;
          /**
           * Webhook Name
           * @description Name of the webhook
           */
          webhookName: string;
          /**
           * Webhook Url
           * @description Destination URL where the webhook will send POST event payloads
           */
          webhookUrl: string;
      }[];
      /**
       * Total Count
       * @description Total number of webhooks available
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_COMPANIES_FROM_LIST tool input.
 */
type HEYREACH_GET_COMPANIES_FROM_LIST_INPUT = {
  /**
   * Keyword
   * @description Keyword to filter companies by name or description.
   * @default null
   */
  keyword: string | null;
  /**
   * Limit
   * @description Maximum number of companies to return.
   * @default 10
   */
  limit: number;
  /**
   * List Id
   * @description The ID of the company list to retrieve companies from.
   */
  listId?: number;
  /**
   * Offset
   * @description Number of companies to skip for pagination.
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_COMPANIES_FROM_LIST tool output.
 */
type HEYREACH_GET_COMPANIES_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of companies returned in this page.
       */
      items: {
          /**
           * Company Size
           * @description Size of the company.
           */
          companySize: string;
          /**
           * Description
           * @description Description of the company.
           */
          description: string;
          /**
           * Employees On Linked In
           * @description Number of employees on LinkedIn.
           */
          employeesOnLinkedIn: number;
          /**
           * Image Url
           * @description URL of the company's image or logo.
           */
          imageUrl: string;
          /**
           * Industry
           * @description Industry sector of the company.
           */
          industry: string;
          /**
           * Location
           * @description Geographical location of the company.
           */
          location: string;
          /**
           * Name
           * @description Name of the company.
           */
          name: string;
          /**
           * Specialities
           * @description Specialities or focus areas of the company.
           */
          specialities: string;
          /**
           * Website
           * @description Company's website URL.
           */
          website: string;
      }[];
      /**
       * Total Count
       * @description Total number of companies matching the criteria.
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_CONVERSATIONS_V2 tool input.
 */
type HEYREACH_GET_CONVERSATIONS_V2_INPUT = {
  /**
   * Filters
   * @description Filtering criteria for the conversations
   */
  filters?: {
      /**
       * Campaign Ids
       * @description Filter conversations by campaign IDs
       */
      campaignIds?: number[];
      /**
       * Lead Linked In Id
       * @description The LinkedIn ID of the lead
       * @default null
       */
      leadLinkedInId: string | null;
      /**
       * Lead Profile Url
       * @description The LinkedIn profile URL of the lead
       * @default null
       */
      leadProfileUrl: string | null;
      /**
       * Linked In Account Ids
       * @description The ids of the LinkedIn senders
       */
      linkedInAccountIds?: number[];
      /**
       * Search String
       * @description Filter conversations by a search string
       * @default null
       */
      searchString: string | null;
      /**
       * Seen
       * @description Filter conversations by seen status
       * @default null
       */
      seen: boolean | null;
  };
  /**
   * Limit
   * @description Maximum number of items to return (1-100)
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description Number of items to skip for pagination
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_CONVERSATIONS_V2 tool output.
 */
type HEYREACH_GET_CONVERSATIONS_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of conversation items
       */
      items: {
          /**
           * Blocked By Me
           * @description Whether the conversation is blocked by me
           */
          blockedByMe: boolean;
          /**
           * Blocked By Participant
           * @description Whether blocked by the other participant
           */
          blockedByParticipant: boolean;
          /**
           * Campaign Id
           * @description Associated campaign ID if any
           * @default null
           */
          campaignId: number | null;
          /**
           * Correspondent Profile
           * @description Profile information of the correspondent
           */
          correspondentProfile: {
              /**
               * About
               * @description About section of the correspondent
               * @default null
               */
              about: string | null;
              /**
               * Company Name
               * @description Company name of the correspondent
               * @default null
               */
              companyName: string | null;
              /**
               * Company Url
               * @description Company URL of the correspondent
               * @default null
               */
              companyUrl: string | null;
              /**
               * Connections
               * @description Number of connections
               */
              connections: number;
              /**
               * Custom Fields
               * @description Custom fields of the correspondent
               */
              customFields?: {
                  /**
                   * Name
                   * @description Custom field name
                   */
                  name: string;
                  /**
                   * Value
                   * @description Custom field value
                   */
                  value: string;
              }[];
              /**
               * Email Address
               * @description Email address of the correspondent
               * @default null
               */
              emailAddress: string | null;
              /**
               * First Name
               * @description First name of the correspondent
               */
              firstName: string;
              /**
               * Followers
               * @description Number of followers
               */
              followers: number;
              /**
               * Headline
               * @description Headline of the correspondent
               * @default null
               */
              headline: string | null;
              /**
               * Id
               * @description Unique identifier of the correspondent profile
               */
              id: string;
              /**
               * Image Url
               * @description Profile image URL of the correspondent
               * @default null
               */
              imageUrl: string | null;
              /**
               * Last Name
               * @description Last name of the correspondent
               */
              lastName: string;
              /**
               * Linkedin Id
               * @description LinkedIn user ID of the correspondent
               */
              linkedin_id: string;
              /**
               * Location
               * @description Location of the correspondent
               * @default null
               */
              location: string | null;
              /**
               * Position
               * @description Position of the correspondent
               * @default null
               */
              position: string | null;
              /**
               * Profile Url
               * @description LinkedIn profile URL of the correspondent
               */
              profileUrl: string;
              /**
               * Tags
               * @description Tags associated with the correspondent
               */
              tags?: string[];
          };
          /**
           * Group Chat
           * @description Whether this conversation is a group chat
           */
          groupChat: boolean;
          /**
           * Id
           * @description Unique identifier of the conversation
           */
          id: string;
          /**
           * Last Message At
           * @description Timestamp of the last message
           */
          lastMessageAt: string;
          /**
           * Last Message Sender
           * @description Sender of the last message
           */
          lastMessageSender: string;
          /**
           * Last Message Text
           * @description Text of the last message
           */
          lastMessageText: string;
          /**
           * Last Message Type
           * @description Type of the last message, e.g., 'TEXT'
           */
          lastMessageType: string;
          /**
           * Linked In Account
           * @description LinkedIn account metadata for the sender
           */
          linkedInAccount: {
              /**
               * Active Campaigns
               * @description Number of active campaigns
               */
              activeCampaigns: number;
              /**
               * Auth Is Valid
               * @description Whether authentication is valid for this account
               */
              authIsValid: boolean;
              /**
               * Email Address
               * @description Email address of the account
               */
              emailAddress: string;
              /**
               * First Name
               * @description First name of the account owner
               */
              firstName: string;
              /**
               * Id
               * @description Unique ID of the LinkedIn account
               */
              id: number;
              /**
               * Is Active
               * @description Whether the account is active
               */
              isActive: boolean;
              /**
               * Is Valid Navigator
               * @description Whether LinkedIn Navigator is valid
               */
              isValidNavigator: boolean;
              /**
               * Is Valid Recruiter
               * @description Whether LinkedIn Recruiter is valid
               */
              isValidRecruiter: boolean;
              /**
               * Last Name
               * @description Last name of the account owner
               */
              lastName: string;
          };
          /**
           * Linked In Account Id
           * @description LinkedIn account ID of the sender
           */
          linkedInAccountId: number;
          /**
           * Messages
           * @description List of messages in the conversation
           */
          messages?: {
              /**
               * Body
               * @description Body content of the message
               */
              body: string;
              /**
               * Created At
               * @description Timestamp when message was created
               */
              createdAt: string;
              /**
               * Is In Mail
               * @description Whether the message is an InMail
               */
              isInMail: boolean;
              /**
               * Post Link
               * @description Link to the LinkedIn post if applicable
               * @default null
               */
              postLink: string | null;
              /**
               * Sender
               * @description Sender of the message, e.g., 'ME' or other
               */
              sender: string;
              /**
               * Subject
               * @description Subject of the message
               * @default null
               */
              subject: string | null;
          }[];
          /**
           * Read
           * @description Whether the conversation has been read
           */
          read: boolean;
          /**
           * Total Messages
           * @description Total number of messages in the conversation
           */
          totalMessages: number;
      }[];
      /**
       * Total Count
       * @description Total number of conversations matching criteria
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_LEAD tool input.
 */
type HEYREACH_GET_LEAD_INPUT = {
  /**
   * Profile Url
   * @description The LinkedIn profile URL of the lead.
   */
  profileUrl?: string;
};

/**
 * Type of HEYREACH's HEYREACH_GET_LEAD tool output.
 */
type HEYREACH_GET_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * About
       * @description About section of the lead profile.
       * @default null
       */
      about: string | null;
      /**
       * Company Name
       * @description Current company name of the lead.
       * @default null
       */
      companyName: string | null;
      /**
       * Company Url
       * @description LinkedIn company URL of the lead if available.
       * @default null
       */
      companyUrl: string | null;
      /**
       * Connections
       * @description Number of connections the lead has.
       */
      connections: number;
      /**
       * Education
       * @description JSON string of educational background.
       * @default null
       */
      education: string | null;
      /**
       * Email Address
       * @description Email address of the lead if available.
       * @default null
       */
      emailAddress: string | null;
      /**
       * Email Enrichments
       * @description List of enriched email addresses.
       */
      emailEnrichments: string[];
      /**
       * Enriched Email Address
       * @description Enriched email address of the lead if available.
       * @default null
       */
      enrichedEmailAddress: string | null;
      /**
       * Experiences
       * @description JSON string of professional experiences.
       * @default null
       */
      experiences: string | null;
      /**
       * First Name
       * @description First name of the lead.
       */
      firstName: string;
      /**
       * Followers
       * @description Number of followers the lead has.
       */
      followers: number;
      /**
       * Full Name
       * @description Full name of the lead.
       */
      fullName: string;
      /**
       * Headline
       * @description Headline of the lead profile.
       * @default null
       */
      headline: string | null;
      /**
       * Image Url
       * @description URL to the profile image of the lead.
       * @default null
       */
      imageUrl: string | null;
      /**
       * Industry
       * @description Industry of the lead.
       * @default null
       */
      industry: string | null;
      /**
       * Last Name
       * @description Last name of the lead.
       */
      lastName: string;
      /**
       * Linkedin Id
       * @description LinkedIn internal ID of the lead.
       */
      linkedin_id: string;
      /**
       * Location
       * @description Current location of the lead.
       * @default null
       */
      location: string | null;
      /**
       * Position
       * @description Current position/title of the lead.
       */
      position: string;
      /**
       * Profile Url
       * @description LinkedIn profile URL of the lead.
       */
      profileUrl: string;
      /**
       * Summary
       * @description LinkedIn summary section of the lead.
       * @default null
       */
      summary: string | null;
      /**
       * Username
       * @description LinkedIn username of the lead.
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_LEADS_FROM_LIST tool input.
 */
type HEYREACH_GET_LEADS_FROM_LIST_INPUT = {
  /**
   * Created From
   * @description ISO 8601 timestamp. Only include leads created on or after this date.
   * @default null
   */
  createdFrom: string | null;
  /**
   * Created To
   * @description ISO 8601 timestamp. Only include leads created on or before this date.
   * @default null
   */
  createdTo: string | null;
  /**
   * Keyword
   * @description A search term to filter leads by name or other relevant fields.
   * @default null
   */
  keyword: string | null;
  /**
   * Lead Linked In Id
   * @description LinkedIn ID of the lead to filter by.
   * @default null
   */
  leadLinkedInId: string | null;
  /**
   * Lead Profile Url
   * @description LinkedIn profile URL to filter by, e.g., 'https://www.linkedin.com/in/john-doe/'.
   * @default null
   */
  leadProfileUrl: string | null;
  /**
   * Limit
   * @description Maximum number of leads to return. Defaults to 10, max 1000.
   * @default 10
   */
  limit: number;
  /**
   * List Id
   * @description The ID of the lead list to retrieve leads from.
   */
  listId?: number;
  /**
   * Offset
   * @description Number of leads to skip for pagination.
   * @default 0
   */
  offset: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_LEADS_FROM_LIST tool output.
 */
type HEYREACH_GET_LEADS_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Leads returned for this page.
       */
      items: {
          /**
           * About
           * @description About or summary of the lead.
           * @default null
           */
          about: string | null;
          /**
           * Company Name
           * @description Company name of the lead.
           * @default null
           */
          companyName: string | null;
          /**
           * Company Url
           * @description Company URL of the lead.
           * @default null
           */
          companyUrl: string | null;
          /**
           * Connections
           * @description Number of connections the lead has.
           */
          connections: number;
          /**
           * Custom Fields
           * @description Custom fields assigned to the lead.
           */
          customFields: {
              [key: string]: unknown;
          }[];
          /**
           * Email Address
           * @description Email address of the lead.
           * @default null
           */
          emailAddress: string | null;
          /**
           * First Name
           * @description First name of the lead.
           */
          firstName: string;
          /**
           * Followers
           * @description Number of followers the lead has.
           */
          followers: number;
          /**
           * Headline
           * @description Headline of the lead.
           * @default null
           */
          headline: string | null;
          /**
           * Image Url
           * @description URL of the lead's profile image.
           * @default null
           */
          imageUrl: string | null;
          /**
           * Last Name
           * @description Last name of the lead.
           */
          lastName: string;
          /**
           * Location
           * @description Location of the lead.
           * @default null
           */
          location: string | null;
          /**
           * Position
           * @description Position of the lead.
           * @default null
           */
          position: string | null;
          /**
           * Profile Url
           * @description LinkedIn profile URL of the lead.
           */
          profileUrl: string;
          /**
           * Tags
           * @description List of tags assigned to the lead.
           */
          tags: string[];
      }[];
      /**
       * Total Count
       * @description Total number of leads in the list.
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_MY_NETWORK_FOR_SENDER tool input.
 */
type HEYREACH_GET_MY_NETWORK_FOR_SENDER_INPUT = {
  /**
   * Page Number
   * @description Zero-based index of the page to retrieve
   */
  pageNumber?: number;
  /**
   * Page Size
   * @description Number of items per page (must be positive)
   */
  pageSize?: number;
  /**
   * Sender Id
   * @description ID of the LinkedIn sender account for which to retrieve the network
   */
  senderId?: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_MY_NETWORK_FOR_SENDER tool output.
 */
type HEYREACH_GET_MY_NETWORK_FOR_SENDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of network connections for the sender
       */
      items: {
          /**
           * About
           * @description About/bio of the connection
           */
          about: string;
          /**
           * Company Name
           * @description Company name of the connection
           */
          companyName: string;
          /**
           * Company Url
           * @description Company URL of the connection
           */
          companyUrl: string;
          /**
           * Connections
           * @description Number of connections the user has
           */
          connections: number;
          /**
           * Email Address
           * @description Email address of the connection
           */
          emailAddress: string;
          /**
           * First Name
           * @description First name of the connection
           */
          firstName: string;
          /**
           * Followers
           * @description Number of followers the user has
           */
          followers: number;
          /**
           * Headline
           * @description Headline of the connection
           */
          headline: string;
          /**
           * Image Url
           * @description Profile image URL of the connection
           */
          imageUrl: string;
          /**
           * Last Name
           * @description Last name of the connection
           */
          lastName: string;
          /**
           * Linkedin Id
           * @description LinkedIn user ID of the connection
           */
          linkedin_id: string;
          /**
           * Location
           * @description Location of the connection
           */
          location: string;
          /**
           * Position
           * @description Position/title of the connection
           */
          position: string;
          /**
           * Profile Url
           * @description LinkedIn profile URL of the connection
           */
          profileUrl: string;
      }[];
      /**
       * Total Count
       * @description Total number of connections in the network
       */
      totalCount: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_GET_WEBHOOK_BY_ID tool input.
 */
type HEYREACH_GET_WEBHOOK_BY_ID_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to retrieve (positive integer)
   */
  webhookId?: number;
};

/**
 * Type of HEYREACH's HEYREACH_GET_WEBHOOK_BY_ID tool output.
 */
type HEYREACH_GET_WEBHOOK_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaign Ids
       * @description List of campaign IDs that this webhook listens to
       */
      campaignIds: number[];
      /**
       * Event Type
       * @description Type of event that triggers the webhook
       * @enum {string}
       */
      eventType: "CONNECTION_REQUEST_SENT" | "CONNECTION_REQUEST_ACCEPTED" | "MESSAGE_SENT" | "MESSAGE_REPLY_RECEIVED" | "INMAIL_SENT" | "INMAIL_REPLY_RECEIVED" | "FOLLOW_SENT" | "LIKED_POST" | "VIEWED_PROFILE" | "CAMPAIGN_COMPLETED" | "LEAD_TAG_UPDATED";
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: number;
      /**
       * Is Active
       * @description Indicates whether the webhook is active
       */
      isActive: boolean;
      /**
       * Webhook Name
       * @description Name of the webhook
       */
      webhookName: string;
      /**
       * Webhook Url
       * @description Destination URL where the webhook will send POST event payloads
       */
      webhookUrl: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HEYREACH's HEYREACH_UPDATE_WEBHOOK tool input.
 */
type HEYREACH_UPDATE_WEBHOOK_INPUT = {
  /**
   * Campaign Ids
   * @description List of campaign IDs to scope the webhook. If omitted or null, retains existing campaigns; if empty list, listens for the eventType across all campaigns.
   * @default null
   */
  campaignIds: number[] | null;
  /**
   * Event Type
   * @description New event type to trigger the webhook. If omitted or null, the existing eventType is retained.
   * @default null
   * @enum {string|null}
   */
  eventType: "CONNECTION_REQUEST_SENT" | "CONNECTION_REQUEST_ACCEPTED" | "MESSAGE_SENT" | "MESSAGE_REPLY_RECEIVED" | "INMAIL_SENT" | "INMAIL_REPLY_RECEIVED" | "FOLLOW_SENT" | "LIKED_POST" | "VIEWED_PROFILE" | "CAMPAIGN_COMPLETED" | "LEAD_TAG_UPDATED" | null;
  /**
   * Is Active
   * @description Activation status of the webhook. True to enable, False to disable, if omitted or null, the existing status is retained.
   * @default null
   */
  isActive: boolean | null;
  /**
   * Webhook Id
   * @description Unique identifier of the existing webhook to update.
   */
  webhookId?: string;
  /**
   * Webhook Name
   * @description New name for the webhook. If omitted or null, the existing name is retained.
   * @default null
   */
  webhookName: string | null;
  /**
   * Webhook Url
   * Format: uri
   * @description New destination URL where HeyReach will send POST event payloads. If omitted or null, the existing URL is retained.
   * @default null
   */
  webhookUrl: unknown;
};

/**
 * Type of HEYREACH's HEYREACH_UPDATE_WEBHOOK tool output.
 */
type HEYREACH_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "HEYREACH".
 */
export type HEYREACH_TOOL_INPUTS = {
  CHECK_API_KEY: HEYREACH_CHECK_API_KEY_INPUT
  CREATE_EMPTY_LIST: HEYREACH_CREATE_EMPTY_LIST_INPUT
  CREATE_WEBHOOK: HEYREACH_CREATE_WEBHOOK_INPUT
  DELETE_WEBHOOK: HEYREACH_DELETE_WEBHOOK_INPUT
  GET_ALL_CAMPAIGNS: HEYREACH_GET_ALL_CAMPAIGNS_INPUT
  GET_ALL_LEADS: HEYREACH_GET_ALL_LEADS_INPUT
  GET_ALL_LINKEDIN_ACCOUNTS: HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS_INPUT
  GET_ALL_LISTS: HEYREACH_GET_ALL_LISTS_INPUT
  GET_ALL_WEBHOOKS: HEYREACH_GET_ALL_WEBHOOKS_INPUT
  GET_COMPANIES_FROM_LIST: HEYREACH_GET_COMPANIES_FROM_LIST_INPUT
  GET_CONVERSATIONS_V2: HEYREACH_GET_CONVERSATIONS_V2_INPUT
  GET_LEAD: HEYREACH_GET_LEAD_INPUT
  GET_LEADS_FROM_LIST: HEYREACH_GET_LEADS_FROM_LIST_INPUT
  GET_MY_NETWORK_FOR_SENDER: HEYREACH_GET_MY_NETWORK_FOR_SENDER_INPUT
  GET_WEBHOOK_BY_ID: HEYREACH_GET_WEBHOOK_BY_ID_INPUT
  UPDATE_WEBHOOK: HEYREACH_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HEYREACH".
 */
export type HEYREACH_TOOL_OUTPUTS = {
  CHECK_API_KEY: HEYREACH_CHECK_API_KEY_OUTPUT
  CREATE_EMPTY_LIST: HEYREACH_CREATE_EMPTY_LIST_OUTPUT
  CREATE_WEBHOOK: HEYREACH_CREATE_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: HEYREACH_DELETE_WEBHOOK_OUTPUT
  GET_ALL_CAMPAIGNS: HEYREACH_GET_ALL_CAMPAIGNS_OUTPUT
  GET_ALL_LEADS: HEYREACH_GET_ALL_LEADS_OUTPUT
  GET_ALL_LINKEDIN_ACCOUNTS: HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS_OUTPUT
  GET_ALL_LISTS: HEYREACH_GET_ALL_LISTS_OUTPUT
  GET_ALL_WEBHOOKS: HEYREACH_GET_ALL_WEBHOOKS_OUTPUT
  GET_COMPANIES_FROM_LIST: HEYREACH_GET_COMPANIES_FROM_LIST_OUTPUT
  GET_CONVERSATIONS_V2: HEYREACH_GET_CONVERSATIONS_V2_OUTPUT
  GET_LEAD: HEYREACH_GET_LEAD_OUTPUT
  GET_LEADS_FROM_LIST: HEYREACH_GET_LEADS_FROM_LIST_OUTPUT
  GET_MY_NETWORK_FOR_SENDER: HEYREACH_GET_MY_NETWORK_FOR_SENDER_OUTPUT
  GET_WEBHOOK_BY_ID: HEYREACH_GET_WEBHOOK_BY_ID_OUTPUT
  UPDATE_WEBHOOK: HEYREACH_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HEYREACH toolkit.
 */
export const HEYREACH = {
  slug: "heyreach",
  tools: {
    /**
     * Tool to check if the api key is valid. use before making other api calls to confirm authentication.
     */
    CHECK_API_KEY: "HEYREACH_CHECK_API_KEY",
    /**
     * Tool to create an empty list. use after deciding on list name and type.
     */
    CREATE_EMPTY_LIST: "HEYREACH_CREATE_EMPTY_LIST",
    /**
     * Tool to create a new webhook. use when you need programmatic callbacks for heyreach events after confirming a valid api key.
     */
    CREATE_WEBHOOK: "HEYREACH_CREATE_WEBHOOK",
    /**
     * Tool to delete an existing webhook. use when you need to remove callbacks for outdated or unwanted webhooks.
     */
    DELETE_WEBHOOK: "HEYREACH_DELETE_WEBHOOK",
    /**
     * Tool to retrieve all campaigns. use when you need a paginated list of campaigns for management or reporting.
     */
    GET_ALL_CAMPAIGNS: "HEYREACH_GET_ALL_CAMPAIGNS",
    /**
     * Tool to retrieve all leads in a heyreach list. use when you need paginated collection of leads after confirming a valid api key.
     */
    GET_ALL_LEADS: "HEYREACH_GET_ALL_LEADS",
    /**
     * Tool to retrieve all linkedin accounts. use when you need a paginated list of linkedin accounts after confirming a valid api key.
     */
    GET_ALL_LINKEDIN_ACCOUNTS: "HEYREACH_GET_ALL_LINKEDIN_ACCOUNTS",
    /**
     * Tool to retrieve all lists. use when you need a paginated list of lists after confirming a valid api key.
     */
    GET_ALL_LISTS: "HEYREACH_GET_ALL_LISTS",
    /**
     * Tool to retrieve all webhooks. use when you need a paginated collection of webhooks after confirming a valid api key.
     */
    GET_ALL_WEBHOOKS: "HEYREACH_GET_ALL_WEBHOOKS",
    /**
     * Tool to get companies from a company list. use when you need a paginated list of companies after specifying a list id.
     */
    GET_COMPANIES_FROM_LIST: "HEYREACH_GET_COMPANIES_FROM_LIST",
    /**
     * Tool to retrieve paginated linkedin conversations with advanced filters. use when you need to fetch inbox conversations filtered by lead or profile details.
     */
    GET_CONVERSATIONS_V2: "HEYREACH_GET_CONVERSATIONS_V2",
    /**
     * Tool to retrieve detailed information for a lead by profile url. use after obtaining the exact linkedin profile url to fetch full lead details.
     */
    GET_LEAD: "HEYREACH_GET_LEAD",
    /**
     * Tool to get a paginated list of leads from a lead list. use when you need to filter and page through leads for a specific list.
     */
    GET_LEADS_FROM_LIST: "HEYREACH_GET_LEADS_FROM_LIST",
    /**
     * Tool to get the linkedin network for a specified sender account. use when you need to retrieve paginated connections for a sender.
     */
    GET_MY_NETWORK_FOR_SENDER: "HEYREACH_GET_MY_NETWORK_FOR_SENDER",
    /**
     * Tool to retrieve a webhook by its id. use when you need detailed configuration of a specific webhook after listing or creating it.
     */
    GET_WEBHOOK_BY_ID: "HEYREACH_GET_WEBHOOK_BY_ID",
    /**
     * Tool to update an existing webhook’s configuration. use when you need to modify a webhook's name, url, event type, campaigns, or activation status after confirming the webhookid.
     */
    UPDATE_WEBHOOK: "HEYREACH_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HEYREACH".
 */
export type HEYREACH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HEYREACH".
 */
export type HEYREACH_TRIGGER_EVENTS = {}
