// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HELPDESK's HELPDESK_LIST_AGENTS tool input.
 */
type HELPDESK_LIST_AGENTS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_AGENTS tool output.
 */
type HELPDESK_LIST_AGENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Agents
       * @description List of agents associated with the account
       */
      agents: {
          /**
           * Autoassignment
           * @description Whether auto assignment is enabled for the agent
           */
          autoassignment: boolean;
          /**
           * Autoassignment Team I Ds
           * @description Teams an agent can be auto-assigned from
           */
          autoassignmentTeamIDs: string[];
          /**
           * Avatar
           * @description URL of the avatar image
           * @default null
           */
          avatar: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Time of creation in ISO 8601 format
           */
          createdAt: string;
          /**
           * Created By
           * @description Creator identifier
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Creator type
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Email
           * @description Agent's email address
           */
          email: string;
          /**
           * Flags
           * @description Agent flags
           */
          flags: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique object identifier
           */
          id: string;
          /**
           * Job Title
           * @description Job title of the agent
           * @default null
           */
          jobTitle: string | null;
          /**
           * License Id
           * @description Unique account identifier
           */
          licenseID: number;
          /**
           * Name
           * @description Full name of the agent
           */
          name: string;
          /**
           * Roles
           * @description Roles assigned to the agent
           */
          roles: string[];
          /**
           * Settings
           * @description Agent specific settings
           */
          settings: {
              [key: string]: unknown;
          };
          /**
           * Signature
           * @description Signature details with attachments
           */
          signature: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Account status
           * @enum {string}
           */
          status: "active" | "invited";
          /**
           * Team I Ds
           * @description Teams the agent is a member of
           */
          teamIDs: string[];
          /**
           * Updated At
           * Format: date-time
           * @description Time of last modification in ISO 8601 format
           */
          updatedAt: string;
          /**
           * Updated By
           * @description Modification author identifier
           */
          updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_CANNED_RESPONSES tool input.
 */
type HELPDESK_LIST_CANNED_RESPONSES_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_CANNED_RESPONSES tool output.
 */
type HELPDESK_LIST_CANNED_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachments
       * @description List of attachments for the canned response
       */
      attachments: {
          /**
           * Cid
           * @description Content ID of the attachment
           * @default null
           */
          cid: string | null;
          /**
           * Name
           * @description Attachment file name
           * @default null
           */
          name: string | null;
          /**
           * Sha256
           * @description SHA256 hash of the attachment
           * @default null
           */
          sha256: string | null;
          /**
           * Size
           * @description Size of the attachment in bytes
           * @default null
           */
          size: number | null;
          /**
           * Token
           * @description Access token for the attachment
           * @default null
           */
          token: string | null;
          /**
           * Type
           * @description MIME type of the attachment
           * @default null
           */
          type: string | null;
          /**
           * Url
           * @description Attachment URL
           */
          url: string;
      }[];
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp
       */
      createdAt: string;
      /**
       * Created By
       * @description ID of the creator of the canned response
       */
      createdBy: string;
      /**
       * Created By Type
       * @description Type of the creator
       * @enum {string}
       */
      createdByType: "agent" | "client" | "system";
      /**
       * Id
       * @description Unique identifier of the canned response
       */
      id: string;
      /**
       * License Id
       * @description Unique account/license identifier
       */
      licenseID: number;
      /**
       * Rich Text Obj
       * @description Rich text representation of the canned response
       */
      richTextObj: {
          /**
           * Attributes
           * @description Formatting attributes for the rich text element
           * @default null
           */
          attributes: {
              [key: string]: unknown;
          } | null;
          /**
           * Insert
           * @description Text or embed code in the rich text object
           * @default null
           */
          insert: string | null;
      }[];
      /**
       * Shortcuts
       * @description List of shortcuts for the canned response
       */
      shortcuts: string[];
      /**
       * Team Id
       * @description Team ID associated with the canned response, if any
       * @default null
       */
      teamID: string | null;
      /**
       * Text
       * @description Text content of the canned response
       */
      text: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp of last update
       */
      updatedAt: string;
      /**
       * Updated By
       * @description ID of the last updater of the canned response
       */
      updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_CONTACTS tool input.
 */
type HELPDESK_LIST_CONTACTS_INPUT = {
  /**
   * Company Id
   * @description Filter by primary company ID
   * @default null
   */
  company_id: number | null;
  /**
   * Email
   * @description Filter by primary email (URL-encoded)
   * @default null
   */
  email: string | null;
  /**
   * Mobile
   * @description Filter by mobile number (URL-encoded)
   * @default null
   */
  mobile: string | null;
  /**
   * Page
   * @description Page number for results (starting at 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of contacts per page (max 100)
   * @default null
   */
  per_page: number | null;
  /**
   * Phone
   * @description Filter by phone number (URL-encoded)
   * @default null
   */
  phone: string | null;
  /**
   * State
   * @description Filter by contact state: blocked | deleted | unverified | verified
   * @default null
   * @enum {string|null}
   */
  state: "blocked" | "deleted" | "unverified" | "verified" | null;
  /**
   * Updated Since
   * Format: date-time
   * @description Return contacts updated after this timestamp (ISO 8601 UTC)
   * @default null
   */
  updated_since: string | null;
};

/**
 * Type of HELPDESK's HELPDESK_LIST_CONTACTS tool output.
 */
type HELPDESK_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contact objects
       */
      contacts: ({
          /**
           * Active
           * @description Whether the contact is verified/active
           * @default null
           */
          active: boolean | null;
          /**
           * Address
           * @description Mailing address
           * @default null
           */
          address: string | null;
          /**
           * Avatar
           * @description Avatar metadata for the contact.
           * @default null
           */
          avatar: {
              /**
               * Avatar Url
               * @description URL of the avatar image
               */
              avatar_url: string;
              /**
               * Content Type
               * @description MIME type of the avatar image
               */
              content_type: string;
              /**
               * Created At
               * Format: date-time
               * @description Timestamp when the avatar was created
               */
              created_at: string;
              /**
               * Id
               * @description Identifier of the avatar
               */
              id: number;
              /**
               * Name
               * @description Filename of the avatar image
               */
              name: string;
              /**
               * Size
               * @description Size of the avatar file in bytes
               */
              size: number;
              /**
               * Updated At
               * Format: date-time
               * @description Timestamp when the avatar was last updated
               */
              updated_at: string;
          } | null;
          /**
           * Company Id
           * @description Primary company ID
           * @default null
           */
          company_id: number | null;
          /**
           * Created At
           * Format: date-time
           * @description Creation timestamp (ISO 8601)
           * @default null
           */
          created_at: string | null;
          /**
           * Custom Fields
           * @description Custom fields for the contact
           */
          custom_fields?: {
              [key: string]: unknown;
          };
          /**
           * Email
           * @description Primary email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Contact ID
           * @default null
           */
          id: number | null;
          /**
           * Job Title
           * @description Job title of the contact
           * @default null
           */
          job_title: string | null;
          /**
           * Language
           * @description Language code (e.g., 'en')
           * @default null
           */
          language: string | null;
          /**
           * Mobile
           * @description Mobile number
           * @default null
           */
          mobile: string | null;
          /**
           * Name
           * @description Full name of the contact
           * @default null
           */
          name: string | null;
          /**
           * Other Companies
           * @description Additional companies associated with the contact
           */
          other_companies?: {
              /**
               * Company Id
               * @description ID of additional company
               */
              company_id: number;
              /**
               * View All Tickets
               * @description Can view all tickets for this company
               */
              view_all_tickets: boolean;
          }[];
          /**
           * Other Emails
           * @description Additional email addresses
           */
          other_emails?: string[];
          /**
           * Phone
           * @description Telephone number
           * @default null
           */
          phone: string | null;
          /**
           * Tags
           * @description Tags associated with the contact
           */
          tags?: string[];
          /**
           * Time Zone
           * @description Time zone of the contact
           * @default null
           */
          time_zone: string | null;
          /**
           * Twitter Id
           * @description Twitter handle
           * @default null
           */
          twitter_id: string | null;
          /**
           * Updated At
           * Format: date-time
           * @description Last updated timestamp (ISO 8601)
           * @default null
           */
          updated_at: string | null;
          /**
           * View All Tickets
           * @description Can view all tickets for primary company
           * @default null
           */
          view_all_tickets: boolean | null;
      } & {
          [key: string]: unknown;
      })[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HELPDESK's HELPDESK_LIST_CUSTOM_FIELDS tool input.
 */
type HELPDESK_LIST_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_CUSTOM_FIELDS tool output.
 */
type HELPDESK_LIST_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description Custom field unique key
       */
      apiKey: string;
      /**
       * Created At
       * Format: date-time
       * @description Time of creation in RFC3339 format
       */
      createdAt: unknown;
      /**
       * Created By
       * @description Creator identifier (UUID)
       */
      createdBy: string;
      /**
       * Created By Type
       * @description Creator type
       * @enum {string}
       */
      createdByType: "agent" | "client" | "system";
      /**
       * Display Name
       * @description Custom field label
       */
      displayName: string;
      /**
       * Id
       * @description Unique object identifier (UUID)
       */
      id: string;
      /**
       * License Id
       * @description Unique account identifier
       */
      licenseID: number;
      /**
       * Role Level
       * @description Edit privileges associated with the field
       * @enum {string}
       */
      roleLevel: "owner" | "normal" | "readOnly";
      /**
       * Status
       * @description Current state of the custom field
       * @enum {string}
       */
      status: "active" | "deactivated";
      /**
       * Team I Ds
       * @description Teams that can view this custom field (UUIDs)
       */
      teamIDs: string[];
      /**
       * Type
       * @description Field data type: singleLine (max 120 chars), multiLine (max 1000 chars), date (YYYY-MM-DD), url
       * @enum {string}
       */
      type: "singleLine" | "multiLine" | "date" | "url";
      /**
       * Updated At
       * Format: date-time
       * @description Time of last modification in RFC3339 format
       */
      updatedAt: unknown;
      /**
       * Updated By
       * @description Modification author identifier (UUID)
       */
      updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_EMAIL_DOMAINS tool input.
 */
type HELPDESK_LIST_EMAIL_DOMAINS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_EMAIL_DOMAINS tool output.
 */
type HELPDESK_LIST_EMAIL_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Time of creation (date-time).
       */
      createdAt: string;
      /**
       * Created By
       * @description Creator identifier (UUID).
       */
      createdBy: string;
      /**
       * Created By Type
       * @description Type of creator.
       * @enum {string}
       */
      createdByType: "agent" | "client" | "system";
      /**
       * Dns
       * @description DNS records that must be configured for verification.
       */
      dns: {
          /**
           * Cname
           * @description List of CNAME DNS records that must be set for the domain.
           */
          cname: {
              [key: string]: unknown;
          }[];
          /**
           * Txt
           * @description List of TXT DNS records that must be set for the domain.
           */
          txt: {
              [key: string]: unknown;
          }[];
      };
      /**
       * Flags
       * @description Additional domain flags.
       */
      flags: {
          /**
           * Inbox Used
           * @description Indicates whether the domain's inbox is currently used.
           */
          inboxUsed: boolean;
      };
      /**
       * Id
       * @description Unique object identifier (UUID) for this email domain.
       */
      id: string;
      /**
       * License Id
       * @description Unique account identifier this domain belongs to.
       */
      licenseID: number;
      /**
       * Name
       * @description Email domain name.
       */
      name: string;
      /**
       * Status
       * @description Current status of the domain.
       * @enum {string}
       */
      status: "new" | "pendingConfiguration" | "pendingVerification" | "active" | "pendingDeletion" | "setupFailed";
      /**
       * Updated At
       * Format: date-time
       * @description Time of last modification (date-time).
       */
      updatedAt: string;
      /**
       * Updated By
       * @description Modification author identifier (UUID).
       */
      updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_LICENSES tool input.
 */
type HELPDESK_LIST_LICENSES_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_LICENSES tool output.
 */
type HELPDESK_LIST_LICENSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Licenses
       * @description List of license objects returned from the API.
       */
      licenses: {
          /**
           * Created At
           * @description Time of creation.
           */
          createdAt: string;
          /**
           * Created By
           * @description Creator identifier.
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Type of creator.
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Default Team Id
           * @description Default team ID.
           */
          defaultTeamID: string;
          /**
           * Default Template Id
           * Format: uuid
           * @description Default template ID.
           */
          defaultTemplateID: string;
          /**
           * Detected Languages
           * @description List of detected language codes.
           */
          detectedLanguages: string[];
          /**
           * Flags
           * @description Flags settings for the license.
           */
          flags: {
              /**
               * Default Inbox Used
               * @description Whether the default inbox was used for this license.
               */
              defaultInboxUsed: boolean;
          };
          /**
           * Id
           * @description Unique account identifier.
           */
          id: number;
          /**
           * Settings
           * @description Configuration settings for the license.
           */
          settings: {
              /**
               * Company Name
               * @description Name of the company associated with this license.
               */
              companyName: string;
              /**
               * Default Mailbox Description
               * @description Default description for the mailbox.
               */
              defaultMailboxDescription: string;
              /**
               * External Tickets
               * @description Whether external tickets are enabled.
               */
              externalTickets: boolean;
              /**
               * Max Child Tickets Per Ticket
               * @description Maximum number of child tickets per ticket.
               */
              maxChildTicketsPerTicket: number;
              /**
               * Max Subscriptions Per Socket
               * @description Maximum number of subscriptions allowed per socket.
               */
              maxSubscriptionsPerSocket: number;
              /**
               * Powered By Footer
               * @description Whether a 'powered by' footer is included in outgoing messages.
               */
              poweredByFooter: boolean;
              /**
               * Ticket Thread
               * @description Whether ticket threading is enabled.
               */
              ticketThread: boolean;
          };
          /**
           * Source
           * @description Source information for the license.
           */
          source: {
              /**
               * Landing Page
               * @description Landing page URL.
               */
              landingPage?: string;
              /**
               * Referrer
               * @description Referrer URL.
               */
              referrer?: string;
              /**
               * Source Id
               * @description Source identifier.
               */
              sourceID?: string;
              /**
               * Source Type
               * @description Type of the source.
               */
              sourceType?: string;
              /**
               * Source Url
               * @description Source URL.
               */
              sourceURL?: string;
              /**
               * Utm Campaign
               * @description UTM campaign parameter.
               */
              utmCampaign?: string;
              /**
               * Utm Content
               * @description UTM content parameter.
               */
              utmContent?: string;
              /**
               * Utm Medium
               * @description UTM medium parameter.
               */
              utmMedium?: string;
              /**
               * Utm Source
               * @description UTM source parameter.
               */
              utmSource?: string;
              /**
               * Utm Term
               * @description UTM term parameter.
               */
              utmTerm?: string;
          };
          /**
           * Updated At
           * @description Time of last modification.
           */
          updatedAt: string;
          /**
           * Updated By
           * @description Modification author identifier.
           */
          updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_REPLY_ADDRESSES tool input.
 */
type HELPDESK_LIST_REPLY_ADDRESSES_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_REPLY_ADDRESSES tool output.
 */
type HELPDESK_LIST_REPLY_ADDRESSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reply Addresses
       * @description List of reply addresses
       */
      replyAddresses: {
          /**
           * Created At
           * @description Time of creation (ISO 8601 date-time)
           */
          createdAt: string;
          /**
           * Created By
           * @description Identifier of the creator (UUID)
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Creator type
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Email
           * Format: email
           * @description Complete email address
           */
          email: unknown;
          /**
           * Email Domain Id
           * @description Verified email domain identifier (UUID)
           */
          emailDomainID: string;
          /**
           * Id
           * @description Unique object identifier (UUID)
           */
          id: string;
          /**
           * License Id
           * @description Unique account identifier
           */
          licenseID: number;
          /**
           * Prefix
           * @description Local part of the email (before @)
           */
          prefix: string;
          /**
           * Updated At
           * @description Time of last modification (ISO 8601 date-time)
           */
          updatedAt: string;
          /**
           * Updated By
           * @description Identifier of the last modifier (UUID)
           */
          updatedBy: string;
          /**
           * Verified
           * @description Indicates if the reply address is verified
           */
          verified: boolean;
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
 * Type of HELPDESK's HELPDESK_LIST_RULES tool input.
 */
type HELPDESK_LIST_RULES_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_RULES tool output.
 */
type HELPDESK_LIST_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actions
       * @description List of action definitions.
       */
      actions: {
          [key: string]: unknown;
      }[];
      /**
       * Active
       * @description Whether the rule is currently active.
       */
      active: boolean;
      /**
       * Created At
       * @description Timestamp when the rule was created (ISO 8601).
       */
      createdAt: string;
      /**
       * Created By
       * @description UUID of the user who created the rule.
       */
      createdBy: string;
      /**
       * Created By Type
       * @description Type of creator.
       * @enum {string}
       */
      createdByType: "agent" | "client" | "system";
      /**
       * Description
       * @description Detailed description of the rule's function.
       */
      description: string;
      /**
       * Id
       * @description Unique rule identifier (UUID).
       */
      id: string;
      /**
       * License Id
       * @description Account (license) identifier.
       */
      licenseID: number;
      /**
       * Name
       * @description Name of the rule.
       */
      name: string;
      /**
       * Ordering
       * @description Execution order of the rule (lower runs first).
       */
      ordering: number;
      /**
       * Quantifier
       * @description Requires all triggers or any trigger to match.
       * @enum {string}
       */
      quantifier: "all" | "any";
      /**
       * Triggers
       * @description List of trigger definitions.
       */
      triggers: {
          [key: string]: unknown;
      }[];
      /**
       * Type
       * @description Domain of the rule, always 'tickets'.
       * @constant
       */
      type: "tickets";
      /**
       * Updated At
       * @description Timestamp when the rule was last updated (ISO 8601).
       */
      updatedAt: string;
      /**
       * Updated By
       * @description UUID of the user who last updated the rule.
       */
      updatedBy: string;
      /**
       * Use Counter
       * @description Number of times this rule has fired.
       */
      useCounter: number;
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
 * Type of HELPDESK's HELPDESK_LIST_SUBSCRIPTIONS tool input.
 */
type HELPDESK_LIST_SUBSCRIPTIONS_INPUT = {
  /**
   * Plan Codes[]
   * @description Filter by one or more plan codes. Allowed values: hd-team1m, hd-team3m, hd-team12m, hd-team36m, hd-enterprise1m, hd-enterprise3m, hd-enterprise6m, hd-enterprise12m, hd-enterprise24m, hd-enterprise36m.
   * @default null
   */
  "planCodes[]": string[] | null;
  /**
   * State
   * @description Filter by subscription state. Allowed values: active, expired, canceled, future, pending.
   * @default null
   * @enum {string|null}
   */
  state: "active" | "expired" | "canceled" | "future" | "pending" | null;
};

/**
 * Type of HELPDESK's HELPDESK_LIST_SUBSCRIPTIONS tool output.
 */
type HELPDESK_LIST_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriptions
       * @description List of subscription objects returned from the API.
       */
      subscriptions: {
          /**
           * Activated At
           * Format: date-time
           * @description Time of activation.
           */
          activatedAt: string;
          /**
           * Cancelled At
           * Format: date-time
           * @description Time of cancellation, if any.
           * @default null
           */
          cancelledAt: string | null;
          /**
           * Created At
           * Format: date-time
           * @description Time of creation.
           */
          createdAt: string;
          /**
           * Current Period Ends At
           * Format: date-time
           * @description Time of current period end.
           */
          currentPeriodEndsAt: string;
          /**
           * Current Period Started At
           * Format: date-time
           * @description Time of current period start.
           */
          currentPeriodStartedAt: string;
          /**
           * Expires At
           * Format: date-time
           * @description Time of expiration, if any.
           * @default null
           */
          expiresAt: string | null;
          /**
           * License Id
           * @description License ID.
           */
          licenseID: number;
          /**
           * Plan Code
           * @description HelpDesk plan code.
           * @enum {string}
           */
          planCode: "hd-team1m" | "hd-team3m" | "hd-team12m" | "hd-team36m" | "hd-enterprise1m" | "hd-enterprise3m" | "hd-enterprise6m" | "hd-enterprise12m" | "hd-enterprise24m" | "hd-enterprise36m";
          /**
           * Quantity
           * @description Number of agents possible under this subscription.
           */
          quantity: number;
          /**
           * State
           * @description Subscription state.
           * @enum {string}
           */
          state: "active" | "expired" | "canceled" | "future" | "pending";
          /**
           * Subscription Id
           * @description Subscription UUID.
           */
          subscriptionID: string;
          /**
           * Trial Ends At
           * Format: date-time
           * @description Time of trial end, if any.
           * @default null
           */
          trialEndsAt: string | null;
          /**
           * Trial Started At
           * Format: date-time
           * @description Time of trial start, if any.
           * @default null
           */
          trialStartedAt: string | null;
          /**
           * Unit Amount In Cents
           * @description Price per agent in cents.
           */
          unitAmountInCents: number;
          /**
           * Updated At
           * Format: date-time
           * @description Time of last update.
           */
          updatedAt: string;
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
 * Type of HELPDESK's HELPDESK_LIST_TEAMS tool input.
 */
type HELPDESK_LIST_TEAMS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_TEAMS tool output.
 */
type HELPDESK_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of team objects
       */
      teams: {
          /**
           * Created At
           * @description Time of creation (ISO-8601 UTC)
           */
          createdAt: string;
          /**
           * Created By
           * @description Creator identifier
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Type of creator
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Id
           * @description Unique object identifier
           */
          id: string;
          /**
           * Integrations
           * @description External integrations data
           */
          integrations: {
              [key: string]: unknown;
          };
          /**
           * License Id
           * @description Unique account identifier
           */
          licenseID: number;
          /**
           * Name
           * @description Team name
           */
          name: string;
          /**
           * Reply Address Id
           * @description Reply address ID
           */
          replyAddressID: string;
          /**
           * Reply Name
           * @description From name visible in reply email
           */
          replyName: string;
          /**
           * Settings
           * @description Team settings object
           */
          settings: {
              [key: string]: unknown;
          };
          /**
           * Template Id
           * @description Template ID
           */
          templateID: string;
          /**
           * Updated At
           * @description Time of last modification (ISO-8601 UTC)
           */
          updatedAt: string;
          /**
           * Updated By
           * @description Modification author identifier
           */
          updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_TICKETS tool input.
 */
type HELPDESK_LIST_TICKETS_INPUT = {
  /**
   * Next.Id
   * @description ID of last item on current page (forward cursor).
   * @default null
   */
  "next.ID": string | null;
  /**
   * Next.Value
   * Format: date-time
   * @description Timestamp of last item on current page (forward cursor).
   * @default null
   */
  "next.value": string | null;
  /**
   * Order
   * @description Sort direction (asc or desc).
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page Size
   * @description Number of results per page (1-100).
   * @default 20
   */
  pageSize: number | null;
  /**
   * Prev.Id
   * @description ID of first item on current page (backward cursor).
   * @default null
   */
  "prev.ID": string | null;
  /**
   * Prev.Value
   * Format: date-time
   * @description Timestamp of first item on current page (backward cursor).
   * @default null
   */
  "prev.value": string | null;
  /**
   * Sort By
   * @description Field to sort by.
   * @default createdAt
   * @enum {string|null}
   */
  sortBy: "createdAt" | "updatedAt" | "lastMessageAt" | null;
};

/**
 * Type of HELPDESK's HELPDESK_LIST_TICKETS tool output.
 */
type HELPDESK_LIST_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tickets
       * @description Array of ticket objects.
       */
      tickets: {
          /**
           * Assignment
           * @description Assignment details object.
           */
          assignment: {
              [key: string]: unknown;
          };
          /**
           * Cc
           * @description List of CC recipient UUIDs.
           */
          cc: string[];
          /**
           * Child Tickets
           * @description List of child tickets.
           */
          childTickets: {
              [key: string]: unknown;
          }[];
          /**
           * Created At
           * Format: date-time
           * @description Ticket creation timestamp.
           */
          createdAt: string;
          /**
           * Created By
           * @description UUID of creator.
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Type of creator.
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Custom Fields
           * @description Custom fields map.
           */
          customFields: {
              [key: string]: unknown;
          };
          /**
           * Detected Language
           * @description Detected language code.
           * @default null
           */
          detectedLanguage: string | null;
          /**
           * Events
           * @description Array of ticket events.
           */
          events: {
              [key: string]: unknown;
          }[];
          /**
           * Followers
           * @description List of follower UUIDs.
           */
          followers: string[];
          /**
           * Id
           * @description Unique ticket identifier (UUID).
           */
          id: string;
          /**
           * Integration
           * @description Integration source details.
           */
          integration: {
              [key: string]: unknown;
          };
          /**
           * Integrations
           * @description Integrations metadata.
           */
          integrations: {
              [key: string]: unknown;
          };
          /**
           * Last Message At
           * Format: date-time
           * @description Timestamp of last public message.
           */
          lastMessageAt: string;
          /**
           * License Id
           * @description Account license identifier.
           */
          licenseID: number;
          /**
           * Parent Ticket
           * @description Parent ticket object or null.
           */
          parentTicket: {
              [key: string]: unknown;
          } | null;
          /**
           * Priority
           * @description Numeric priority of the ticket.
           */
          priority: number;
          /**
           * Rating
           * @description Rating object or null.
           */
          rating: {
              [key: string]: unknown;
          } | null;
          /**
           * Rating Request Sent
           * @description Indicates if rating request was sent.
           */
          ratingRequestSent: boolean;
          /**
           * Requester
           * @description Requester details object.
           */
          requester: {
              [key: string]: unknown;
          };
          /**
           * Short Id
           * @description Short human-friendly ticket identifier.
           */
          shortID: string;
          /**
           * Silo
           * @description Ticket silo/folder.
           * @enum {string}
           */
          silo: "tickets" | "archive" | "trash" | "spam";
          /**
           * Source
           * @description Source metadata object.
           */
          source: {
              [key: string]: unknown;
          };
          /**
           * Spam
           * @description Spam information details.
           */
          spam: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Current ticket status.
           * @enum {string}
           */
          status: "open" | "pending" | "onhold" | "solved" | "closed";
          /**
           * Subject
           * @description Ticket subject.
           */
          subject: string;
          /**
           * Tag I Ds
           * @description List of tag UUIDs.
           */
          tagIDs: string[];
          /**
           * Team I Ds
           * @description List of team UUIDs with access.
           */
          teamIDs: string[];
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp of last update.
           */
          updatedAt: string;
          /**
           * Updated By
           * @description UUID of last updater.
           */
          updatedBy: string;
      }[];
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of tickets across all pages.
       */
      total_results: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HELPDESK's HELPDESK_LIST_TRUSTED_EMAILS tool input.
 */
type HELPDESK_LIST_TRUSTED_EMAILS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_TRUSTED_EMAILS tool output.
 */
type HELPDESK_LIST_TRUSTED_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Time of creation (date-time).
       */
      createdAt: string;
      /**
       * Created By
       * @description Creator identifier (UUID).
       */
      createdBy: string;
      /**
       * Created By Type
       * @description Type of the creator.
       * @enum {string}
       */
      createdByType: "agent" | "client" | "system";
      /**
       * Email
       * @description Trusted email address or domain name.
       */
      email: string;
      /**
       * Id
       * @description Unique object identifier (UUID)
       */
      id: string;
      /**
       * License Id
       * @description Unique account identifier this entry belongs to.
       */
      licenseID: number;
      /**
       * Updated At
       * Format: date-time
       * @description Time of last modification (date-time).
       */
      updatedAt: string;
      /**
       * Updated By
       * @description Modification author identifier (UUID).
       */
      updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_VIEWS tool input.
 */
type HELPDESK_LIST_VIEWS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_VIEWS tool output.
 */
type HELPDESK_LIST_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Views
       * @description List of agent view objects.
       */
      views: {
          /**
           * Agent Id
           * @description Agent identifier (UUID) owning the view.
           */
          agentID: string;
          /**
           * Created At
           * @description Timestamp when the view was created (ISO 8601).
           */
          createdAt: string;
          /**
           * Created By
           * @description UUID of the user who created the view.
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Type of creator.
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Filters
           * @description Dictionary of ticket filters applied in this view (all except 'timezone').
           */
          filters: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique view identifier (UUID).
           */
          id: string;
          /**
           * License Id
           * @description Account (license) identifier.
           */
          licenseID: number;
          /**
           * Name
           * @description Name of the view.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the view was last updated (ISO 8601).
           */
          updatedAt: string;
          /**
           * Updated By
           * @description UUID of the user who last updated the view.
           */
          updatedBy: string;
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
 * Type of HELPDESK's HELPDESK_LIST_WEBHOOKS tool input.
 */
type HELPDESK_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of HELPDESK's HELPDESK_LIST_WEBHOOKS tool output.
 */
type HELPDESK_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhook objects returned from the API.
       */
      webhooks: {
          /**
           * Created At
           * @description Time of creation.
           */
          createdAt: string;
          /**
           * Created By
           * @description Creator identifier.
           */
          createdBy: string;
          /**
           * Created By Type
           * @description Creator type.
           * @enum {string}
           */
          createdByType: "agent" | "client" | "system";
          /**
           * Event Type
           * @description Event type for the webhook.
           * @enum {string}
           */
          eventType: "tickets.create" | "tickets.update" | "tickets.statusChange" | "tickets.events.status" | "tickets.events.priority" | "tickets.events.message" | "tickets.events.tags" | "tickets.events.followers" | "tickets.events.assignment";
          /**
           * Id
           * @description Unique object identifier.
           */
          id: string;
          /**
           * License Id
           * @description Unique account identifier.
           */
          licenseID: number;
          /**
           * Name
           * @description Optional webhook name.
           * @default null
           */
          name: string | null;
          /**
           * Updated At
           * @description Time of last modification.
           */
          updatedAt: string;
          /**
           * Updated By
           * @description Modification author identifier.
           */
          updatedBy: string;
          /**
           * Url
           * @description Webhook URL.
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
 * Type of HELPDESK's HELPDESK_VIEW_AGENT tool input.
 */
type HELPDESK_VIEW_AGENT_INPUT = {
  /**
   * Agent Id
   * @description Agent ID (UUID) to retrieve.
   */
  agentID?: string;
};

/**
 * Type of HELPDESK's HELPDESK_VIEW_AGENT tool output.
 */
type HELPDESK_VIEW_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique object identifier
       */
      ID: string;
      /**
       * Autoassignment
       * @description Whether auto assignment is enabled for the agent
       */
      autoassignment: boolean;
      /**
       * Autoassignment Team I Ds
       * @description Teams an agent can be auto-assigned from
       */
      autoassignmentTeamIDs: string[];
      /**
       * Avatar
       * @description URL of the avatar image
       * @default null
       */
      avatar: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Time of creation in ISO 8601 format
       */
      createdAt: string;
      /**
       * Created By
       * @description Creator identifier
       */
      createdBy: string;
      /**
       * Created By Type
       * @description Creator type
       * @enum {string}
       */
      createdByType: "agent" | "client" | "system";
      /**
       * Email
       * @description Agent's email address
       */
      email: string;
      /**
       * Flags
       * @description Agent flags
       */
      flags: {
          [key: string]: unknown;
      };
      /**
       * Job Title
       * @description Job title of the agent
       * @default null
       */
      jobTitle: string | null;
      /**
       * License Id
       * @description Unique account identifier
       */
      licenseID: number;
      /**
       * Name
       * @description Full name of the agent
       * @default null
       */
      name: string | null;
      /**
       * Roles
       * @description Roles assigned to the agent
       */
      roles: string[];
      /**
       * Settings
       * @description Agent specific settings
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Signature
       * @description Signature details with attachments
       */
      signature: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Account status
       * @enum {string}
       */
      status: "active" | "invited";
      /**
       * Team I Ds
       * @description Teams the agent is a member of
       */
      teamIDs: string[];
      /**
       * Updated At
       * Format: date-time
       * @description Time of last modification in ISO 8601 format
       */
      updatedAt: string;
      /**
       * Updated By
       * @description Modification author identifier
       */
      updatedBy: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "HELPDESK".
 */
export type HELPDESK_TOOL_INPUTS = {
  LIST_AGENTS: HELPDESK_LIST_AGENTS_INPUT
  LIST_CANNED_RESPONSES: HELPDESK_LIST_CANNED_RESPONSES_INPUT
  LIST_CONTACTS: HELPDESK_LIST_CONTACTS_INPUT
  LIST_CUSTOM_FIELDS: HELPDESK_LIST_CUSTOM_FIELDS_INPUT
  LIST_EMAIL_DOMAINS: HELPDESK_LIST_EMAIL_DOMAINS_INPUT
  LIST_LICENSES: HELPDESK_LIST_LICENSES_INPUT
  LIST_REPLY_ADDRESSES: HELPDESK_LIST_REPLY_ADDRESSES_INPUT
  LIST_RULES: HELPDESK_LIST_RULES_INPUT
  LIST_SUBSCRIPTIONS: HELPDESK_LIST_SUBSCRIPTIONS_INPUT
  LIST_TEAMS: HELPDESK_LIST_TEAMS_INPUT
  LIST_TICKETS: HELPDESK_LIST_TICKETS_INPUT
  LIST_TRUSTED_EMAILS: HELPDESK_LIST_TRUSTED_EMAILS_INPUT
  LIST_VIEWS: HELPDESK_LIST_VIEWS_INPUT
  LIST_WEBHOOKS: HELPDESK_LIST_WEBHOOKS_INPUT
  VIEW_AGENT: HELPDESK_VIEW_AGENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HELPDESK".
 */
export type HELPDESK_TOOL_OUTPUTS = {
  LIST_AGENTS: HELPDESK_LIST_AGENTS_OUTPUT
  LIST_CANNED_RESPONSES: HELPDESK_LIST_CANNED_RESPONSES_OUTPUT
  LIST_CONTACTS: HELPDESK_LIST_CONTACTS_OUTPUT
  LIST_CUSTOM_FIELDS: HELPDESK_LIST_CUSTOM_FIELDS_OUTPUT
  LIST_EMAIL_DOMAINS: HELPDESK_LIST_EMAIL_DOMAINS_OUTPUT
  LIST_LICENSES: HELPDESK_LIST_LICENSES_OUTPUT
  LIST_REPLY_ADDRESSES: HELPDESK_LIST_REPLY_ADDRESSES_OUTPUT
  LIST_RULES: HELPDESK_LIST_RULES_OUTPUT
  LIST_SUBSCRIPTIONS: HELPDESK_LIST_SUBSCRIPTIONS_OUTPUT
  LIST_TEAMS: HELPDESK_LIST_TEAMS_OUTPUT
  LIST_TICKETS: HELPDESK_LIST_TICKETS_OUTPUT
  LIST_TRUSTED_EMAILS: HELPDESK_LIST_TRUSTED_EMAILS_OUTPUT
  LIST_VIEWS: HELPDESK_LIST_VIEWS_OUTPUT
  LIST_WEBHOOKS: HELPDESK_LIST_WEBHOOKS_OUTPUT
  VIEW_AGENT: HELPDESK_VIEW_AGENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HELPDESK toolkit.
 */
export const HELPDESK = {
  slug: "helpdesk",
  tools: {
    /**
     * Tool to list agents. Use when you need to retrieve all agents on the account.
     */
    LIST_AGENTS: "HELPDESK_LIST_AGENTS",
    /**
     * Tool to list canned responses. Use when you need to retrieve all predefined reply templates for tickets.
     */
    LIST_CANNED_RESPONSES: "HELPDESK_LIST_CANNED_RESPONSES",
    /**
     * Tool to list contacts. Use when you need to retrieve contacts with optional filters and pagination.
     */
    LIST_CONTACTS: "HELPDESK_LIST_CONTACTS",
    /**
     * Tool to list all custom fields defined in the account. Use when you need to view or manage custom fields. Only callable after authentication.
     */
    LIST_CUSTOM_FIELDS: "HELPDESK_LIST_CUSTOM_FIELDS",
    /**
     * Tool to list email domains configured for the account. Use when you need to retrieve all configured email domains after authenticating.
     */
    LIST_EMAIL_DOMAINS: "HELPDESK_LIST_EMAIL_DOMAINS",
    /**
     * Tool to list all licenses for an account. Use when you need to retrieve license configurations.
     */
    LIST_LICENSES: "HELPDESK_LIST_LICENSES",
    /**
     * Tool to retrieve reply addresses. Use when you need to fetch all configured reply email addresses.
     */
    LIST_REPLY_ADDRESSES: "HELPDESK_LIST_REPLY_ADDRESSES",
    /**
     * Tool to retrieve a list of rules configured in the account. Use after authentication when you need an overview of all automation rules.
     */
    LIST_RULES: "HELPDESK_LIST_RULES",
    /**
     * Tool to list subscriptions. Use when you need to retrieve current or historical subscription details.
     */
    LIST_SUBSCRIPTIONS: "HELPDESK_LIST_SUBSCRIPTIONS",
    /**
     * Tool to list all teams for the authenticated Helpdesk account. Use after providing valid credentials to retrieve team IDs, names, and settings. Example: "List all teams".
     */
    LIST_TEAMS: "HELPDESK_LIST_TEAMS",
    /**
     * Tool to list tickets with cursor-based pagination. Use when you need to fetch multiple pages of tickets after setting your cursor and sort parameters.
     */
    LIST_TICKETS: "HELPDESK_LIST_TICKETS",
    /**
     * Tool to retrieve a list of trusted email addresses or domains. Use when managing your spam whitelist after authenticating.
     */
    LIST_TRUSTED_EMAILS: "HELPDESK_LIST_TRUSTED_EMAILS",
    /**
     * Tool to list agent views. Use when you need to retrieve saved ticket views after authentication.
     */
    LIST_VIEWS: "HELPDESK_LIST_VIEWS",
    /**
     * Tool to list all webhooks configured for events. Use when you need to retrieve webhook configurations for an account.
     */
    LIST_WEBHOOKS: "HELPDESK_LIST_WEBHOOKS",
    /**
     * Tool to retrieve details of a specific agent (v1). Use after confirming agent ID.
     */
    VIEW_AGENT: "HELPDESK_VIEW_AGENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HELPDESK".
 */
export type HELPDESK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HELPDESK".
 */
export type HELPDESK_TRIGGER_EVENTS = {}
